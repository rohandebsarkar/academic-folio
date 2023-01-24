# hugo-mod-svg-icon-system
This Hugo module implements a hassle-free SVG icon system in Hugo. It builds up on my article on [*Using inline SVGs in Hugo*](https://bitbanged.com/posts/how-to-use-inline-svgs-with-hugo). In this module, [Font Awesome v5](https://fontawesome.com/) icons have been included by default.

> To use this module, you'll need to install [Hugo Extended](https://gohugo.io/getting-started/installing/) and [Go](https://golang.org/doc/install).


# Why use this module?
Icon fonts are well and good, and they're easy to use, but they're really inefficient as you have to load a whole lot of unnecessary icons just to use a select few icons.

When using this module, your website doesn't load any external file for the icons, instead, only the icons you use are directly injected in the source code of your website by Hugo at compile-time.

While this approach of inlining SVGs is definitely not something new, people have avoided using it as it's not as convenient as using icon fonts. But with Hugo's partials and shortcodes, that inconvenience just vanishes into thin air.


# Usage
To use this module, you'll have to initialize Hugo Modules in your project first.
```sh
hugo mod init "<your website/theme repo>"
```

After that, add the module to your project's `config.yaml`.
```yaml
module:
  imports:
    - path: github.com/UtkarshVerma/hugo-modules/svg-icon-system
```

Once that's done, you can go ahead and insert SVGs anywhere in your website using the `svg` partial as shown.
```go-template
{{% Injecting a FontAwesome icon. %}}
{{ partial "svg" "fas fa-star" }}

{{% Injecting any custom SVG. (Path is relative to "assets/") %}}
{{ partial "svg" "svgs/logo.svg" }}

{{% Specifying a custom title for the SVG. %}}
{{ partial "svg" (dict "icon" "fas fa-star" "title" "Hoshi") }}

{{% Specifying attributes for the SVG. They can be anything. %}}
{{ partial "svg" (dict "icon" "fas fa-star" "fill" "red" "height" "10em" "class" "myClass") }}
```

Alternatively, you can use the `svg` shortcode in your content files.
```md
<!-- Injecting a FontAwesome icon. -->
{{< svg "fas fa-star" >}}

<!-- Injecting any custom SVG. (Path is relative to "assets/") -->
{{< svg "svgs/logo.svg" >}}

<!-- Specifying a custom title for the SVG. -->
{{< svg icon="fas fa-star" title="Hoshi" >}}

<!-- Specifying attributes for the SVG. They can be anything. -->
{{< svg icon="fas fa-star" fill="red" height="10em" class="myClass") }}

<!-- Inject 'flowchart.svg' from the page resources -->
{{< svg icon="flowchart.svg" title="My program's algorithm" >}}
```

Each SVG is injected in the HTML source with two CSS classes, `icon` and another class which is just the filename of the injected SVG. For example the `fas fa-star` can be styled specifically using:

```css
/* Recommended. Applies to all SVGs. */
.icon {
    height: 1em;
    width: 1em;
}

/* Specifically style 'fas fa-star' */
.star.icon {
    fill: yellow;
}
```
