# responsive-images

This module implements an effortless method for using responsive images in Hugo websites. The goal is to serve multiple resized versions for every image so that the browser can fetch an appropriately-sized image, improving loading times for the website.

> To use this module, you'll need to install [Go](https://golang.org/doc/install).


## Why use responsive images?

The HTML markup has the `<picture>` tag which allows developers to serve multiple resources for a single image. The benefit of serving multiple images is that the browser can choose which image to load depending on the need.

For example, on a mobile, it wouldn't make sense to load a 1920x1080 image. Using the `<picture>` tag, we can serve images of both low and high resolution, so that the browser can save time by only loading the low resolution images on smaller viewports.

[Chris Coyier](https://css-tricks.com/author/chriscoyier/) does a great job of explaining this in his [Guide to Responsive Images Syntax in HTML](https://css-tricks.com/a-guide-to-the-responsive-images-syntax-in-html/#aa-using-picture).


## Why use this module?

If we only use plain HTML, we have to use the following markup.

```html
<picture>
    <!-- Use when width >= 1000px -->
    <source
        srcset="baby.jpg"
        media="(min-width: 1000px)"
    />

    <!-- Use when 600px <= width < 1000px -->
    <source
        srcset="baby-medium.jpg"
        media="(min-width: 600px)"
    />

    <!-- Use when width < 600px -->
    <img
        src="baby-small.jpg"
        alt="Baby Sleeping"
    />
</picture>
```

It is cumbersome to write this for every image, and even more so if we also add Hugo's image processing to the mix. Using this module, the above markup can be succinctly written as:

```go-template
{{ with resources.Get "baby.jpg" }}
    {{ partial "img" (dict "img" . "alt" "Baby Sleeping") }}
{{ end }}
```

The `img` partial takes care of the following things:

- Generating multiple images for the passed image
- Defining the media rules for the picture tag
- Converting images to WebP format


## Usage
To use this module, you'll have to download it first.
```sh
# Optional. Do this if you haven't already.
hugo mod init "<website>"
```

Then add the module to your theme/website's `config.yaml`.
```yaml
module:
  imports:
    - path: github.com/UtkarshVerma/hugo-modules/responsive-images
```

Once that's done, you can go ahead and use responsive images anywhere in your Hugo website using the `img` partial as shown.

```go-template
{{ with resources.Get "test.jpg" }}
    {{/* Insert image with default breakpoints and widths */}}
    {{ partial "img" (dict "img" . "alt" "Test image") }}

    {{/* Insert image with custom breakpoints and widths */}}
    {{ partial "img" (dict
        "img" .
        "alt" "Test image"
        "breakpoints" (slice 600 1000)
        "widths" (slice 500 900 1200))
    }}
{{ end }}
```

The partial also has other arguments, which are as follows:

Argument|Type|Default value|What it expects
-|-|-|----
`img`|Image resource|nil|The image resource
`alt`|String|""|The alt text for the image
`class`|String|""|HTML classes to apply to the image
`loading`|String|""|Value for the HTML `loading` attribute
`webpHint`|String|"photo"|[Hint](https://gohugo.io/content-management/image-processing/#hint) to be used for Hugo's WebP conversion.
`breakpoints`|Slice\<int\>|[768, 992, 1200]|Viewport breakpoints, in pixels
`widths`|Slice\<int\>|[768, 992, 1200, -1<sup>*</sup>]|Widths to be used for each breakpoint, in pixels. `width[i]` will be used for the image when viewport width is in between `breakpoints[i-1]` and `breakpoints[i+1]`.
`quality`|int|75|[Quality](https://gohugo.io/content-management/image-processing/#hint) value to be used for Hugo's image processing

> <sup>*</sup>`-1` implies that the width of the input image should be used. Additionally, `-2` can be used to indicate that no image should be produced for that specific breakpoint.
