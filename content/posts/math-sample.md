---
title: Math stuff
description: Having some math here is good.
date: 2022-03-18T21:10:00+07:00
math: true
---

## Introduction

Many articles like [this](https://towardsdatascience.com/introduction-to-bayesian-linear-regression-e66e60791ea7) in the [towardsdatascience](https://towardsdatascience.com/) tell us how to use Bayesian Linear Regression and why. I am not going to repeat that. I want to derive the formulas from scratch entirely.

I also understand that comprehending this stuff is slightly challenging if you don't have a strong mathematics background.

> Note: All of my notation is from Bishop’s book.

The main difference between Bayesian and Non-Bayesian regression is that Bayesian regression assumes that weights are Random variables.

First, we should define the distribution of **w** and **e** and also our target function. We assume that we have a Gaussian prior over **w,** which is our weight vector, So

$$
w \sim N(m_0,s_0)
$$

which means that we have m0 as our mean vector, and s0 is our covariance matrix. Now, if we write our target function, we would have:

$$
\begin{aligned}
y &=f(x, w)+\epsilon \\
&=w^{T} \phi(x)+\epsilon
\end{aligned}
$$

In which **φ** is any transformation on x. If you are not familiar with transformations, assume that φ(x) = x, and you're good to go.

Just one thing is missing, what is the distribution of error?

$$
\epsilon \sim N\left(0, \sigma^{2}\right)=N\left(0, \beta^{-1}\right)
$$

> Note: we define β as the noise precision parameter, which is the reciprocal noise variance.

The Likelihood function would be:

$$
p(y \mid X, w, \beta)=\prod_{i=1}^{N} p\left(y_{n} \mid x_{n}, w, b\right)=\prod_{i=1}^{N} N\left(y_{n} \mid w^{T} \phi\left(x_{n}\right), \beta^{-1}\right)
$$

Next, we can compute the posterior distribution, which is proportional to the product of likelihood and prior. Note that we already know that because the prior is Gaussian, the posterior would be gaussian too! But As I said, I want to compute that to make sure everything is right entirely.

$$
\text { posterior } \propto \text { likelihood } \times \text { prior }
$$

## Deriving prior and posterior distributions

The posterior is computed by the usual procedure of **completing the square**, so I ignore all constants and focus on the power of exponentials. Again, notice that we want to compute the mean and variance of the posterior.

From likelihood perspective, we have:

$$
\log \text { likelihood }=\frac{-\beta}{2} \sum_{i=1}^{N}\left(y_{n}-w^{T} \phi(x)\right)^{2}
$$

and from prior perspective, we have:

$$
\text { log prior }=\frac{-1}{2}\left(w-m_{0}\right)^{T} S_{0}^{-1}\left(w-m_{0}\right)
$$

You already know that product in logarithm would result in sum. So we have:

$$
\begin{aligned}
\log \text { Posterior } &=\frac{-\beta}{2} \sum_{n=1}^{N}\left(y_{n}-w^{T} \phi(x)\right)^{2}+\frac{-1}{2}\left(w-m_{0}\right)^{T} S_{0}^{-1}\left(w-m_{0}\right) \\
&\left.=\frac{-\beta}{2} \sum_{n=1}^{N}\left(y_{n}^{2}-2 y_{n} w^{T} \phi(x)+w^{T} \phi\left(x_{n}\right) \phi\left(x_{n}\right)^{T} w\right)\right)+\frac{-1}{2}\left(w-m_{0}\right)^{T} S_{0}{ }^{1}\left(w-m_{0}\right) \\
&=\frac{-1}{2} w^{T}\left[\sum_{n=1}^{N} \beta \phi\left(x_{n}\right) \phi\left(x_{n}\right)^{T}+S_{0}^{-1}\right] w+\frac{-1}{2}\left[-2 m_{0}^{T} s_{0}-\frac{1}{2} \sum_{n=1}^{N} 2 \beta y_{n} \phi\left(x_{n}\right)^{T}\right] w+const
\end{aligned}
$$

Then from comparing the powers with standard Gaussian, we have:

$$
S_{N}^{-1}=S_{0}^{-1}+\beta \phi^{T} \phi
$$

and by comparing the second expression we get:

$$
\begin{array}{c}
-2 m_{N}^{T} S_{N}^{-1}=-2 m_{0}^{T} S_{0}^{-1}-2 \beta y^{T} \phi \\
m_{N}=S_{N}^{T}\left(S_{0}^{T}\right)^{-1} m_{0}+S_{N}^{T} \beta y^{T} \phi
\end{array}
$$

So we computed the mean and variance of the posterior distribution, but It is not the end. We should use predictive posterior to derive the final result.

## Deriving predictive posterior distribution

Let’s get back to our big picture. We computed the posterior, which is the distribution of weights, but what is the distribution of our prediction (y*) when we have new data (x*)?

Let’s say our new data is (**x*,y***), and we want to derive the distribution of y* given x*. What should we do? The answer lies in **predictive distribution.**

Wait. We can have one slight improvement here. Because we can always normalize the input data to have a mean of 0, we can assume that our weight prior is also Normal with a mean of 0. So we can take that:

$$
p(w \mid \alpha)=N\left(w \mid 0, \alpha^{-1} I\right)
$$

So the posterior mean and variance would be:

$$
\begin{array}{r}
M_{N}=\beta S_{N} \phi^{T} y \\
S_{N}=\alpha I+\beta \phi^{T} \phi
\end{array}
$$

We can not go further until we know how to get the predictive posterior. So the predictive posterior distribution is defined as:

$$
p\left(y^{\*} \mid x^{\*}, x, y, \alpha, \beta\right)=\int p\left(y^{\*} \mid x^{\*}, w, \beta\right) p\left(w \mid x^{\*}, x, y, \alpha, \beta\right) d w
$$

The first time I saw this formula, I wanted to run away and live in the desert. Bear with me, All we’re doing is integrating out **w** since we don’t know what it is. Sometimes, there is a more straightforward way. Fortunately, a proven formula can help us skip the integration part and get to the result.

> Note: If you want to prove it yourself, you can look at Marginal and conditional Gaussian from the bishop’s book.

**Theorem:** Given a marginal distribution for **x** and a conditional distribution for **y** in the form:

$$
\begin{aligned}
p(x) &=N\left(x \mid \mu, \Lambda^{-1}\right) \\
p(y \mid x) &=N\left(y \mid A x+b, L^{-1}\right)
\end{aligned}
$$

the marginal distribution of y is given by:

$$
p(y)=N\left(y \mid A \mu+b, L^{-1}+A \Lambda^{-1} A^{T}\right)
$$

## Mixing all stuff together

So, we have all the ingredients. Let’s get them in one bowl and mix them together.

$$
\begin{aligned}
p\left(w \mid x^{\*}, x, y, \alpha, \beta\right) &=N\left(w \mid M_{N}, S_{N}\right) \\
p\left(y^{*} \mid w, \beta\right) &=N\left(f(x, w), \beta^{-1}\right)
\end{aligned}
$$

Look at these two for one moment. The p(x) is equivalent to the first equation and p(y\|x) is like the second equation. If we plug it in, we get the following equations (Check yourself):

$$
\begin{aligned}
p\left(y^{\*} \mid y, x, x^{\*}, \alpha, \beta\right) &=N\left(y^{\*} \mid M_{N}^{T} \phi(x), \sigma_{N}^{2}(x)\right) \\
\sigma_{N}^{2}(x) &=\beta^{-1} \phi^{T}(x) S_{N} \phi(x)
\end{aligned}
$$

And finally, if we plug all these values into equation p(y), we get the following:

$$
\begin{aligned}
p\left(y^{\*} \mid y, x, x^{\*}, \alpha, \beta\right) &=N\left(y^{\*} \mid M_{N}^{T} \phi(x), \sigma_{N}^{2}(x)\right) \\
\sigma_{N}^{2}(x) &=\beta^{-1} \phi^{T}(x) S_{N} \phi(x)
\end{aligned}
$$

pfff, we got the mean and variance of y\*. Now we are certainly finished. I hope this helped you!

Thank you for reading.
