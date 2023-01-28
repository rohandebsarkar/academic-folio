---
title: All Markdown features
author: Amir Pourmand

date: '2022-04-18T21:10:00+07:00'

tags: [markdown, features]
categories: [blog]
---

# Heading level 1

## Heading level 2

### Heading level 3

#### Heading level 4

##### Heading level 5

###### Heading level 6

Normal Text

## Alternate Syntax

# Heading level 1

## Heading level 2

## Bold and Italic

I just love **bold text**.
I just love **bold text**.
Love**is**bold

Italicized text is the _cat's meow_.

This text is **_really important_**.

## Blockquotes

> Dorothy followed her through many of the beautiful rooms in her castle.

## Blockquotes with Multiple Paragraphs

> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

## Nested Blockquotes

> Dorothy followed her through many of the beautiful rooms in her castle.
>
> > The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

## Blockquotes with Other Elements

> #### The quarterly results look great!
>
> -   Revenue was off the chart.
> -   Profits were higher than ever.
>
>     _Everything_ is going according to **plan**.

## Ordered Lists

1. First item
2. Second item
3. Third item
4. Fourth item

## Unordered Lists

-   First item
-   Second item
-   Third item
-   Fourth item

## Code Blocks

1. Open the file.
2. Find the following code block on line 21:

```
        <html>
          <head>
            <title>Test</title>
          </head>
        </html>
```

3. Update the title to match the name of your website.

## Code

At the command prompt, type `nano`.

## Horizontal Rules

---

[Reference 1](https://www.markdownguide.org/tools/hugo/)

[Reference 2](https://www.markdownguide.org/basic-syntax/)

## Markdown Extended Syntax

[Reference](https://www.markdownguide.org/extended-syntax/)

## Tables

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

| Syntax    | Description |   Test Text |
| :-------- | :---------: | ----------: |
| Header    |    Title    | Here's this |
| Paragraph |    Text     |    And more |

## Fenced Code Blocks

```
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

## Syntax Highlighting

```json
{
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
}
```

## Footnotes

Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.
[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.

## My Great Heading {#custom-id}

Linking to [Heading IDs](#custom-id)

## Definition List

First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.

## Strikethrough

~~The world is flat.~~ We now know that the world is round.

## Task List

-   [x] Write the press release
-   [ ] Update the website
-   [ ] Contact the media

## Emoji

Taken from [here](https://emojipedia.org/heart-hands/)
🫶

## Using Emoji Shortcodes

Gone camping! :tent: Be back soon.

That is so funny! :joy:

## Highlight

I need to highlight these ==very important words==.

## Subscript

H~2~O

## Superscript

X^2^

## Automatic URL Linking

http://www.example.com

## Disabling Automatic URL Linking

`http://www.example.com`
