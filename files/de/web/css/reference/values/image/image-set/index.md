---
title: "`image-set()` CSS-Funktion"
short-title: image-set()
slug: Web/CSS/Reference/Values/image/image-set
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

Die **`image-set()`** [CSS](/de/docs/Web/CSS) [funktionale](/de/docs/Web/CSS/Reference/Values/Functions) Notation ist eine Methode, mit der der Browser das passendste CSS-Bild aus einer gegebenen Auswahl auswählt, hauptsächlich für Bildschirme mit hoher Pixeldichte.

Auflösung und Bandbreite unterscheiden sich je nach Gerät und Netzwerkzugang. Die Funktion `image-set()` liefert die am besten geeignete Bildauflösung für das Gerät eines Benutzers, indem sie eine Auswahl an Bildoptionen bereitstellt – jeweils mit einer zugehörigen Auflösungsdeklaration – aus der der Browser die geeignetste für das Gerät und die Einstellungen auswählt. Die Auflösung kann als Proxy für die Dateigröße verwendet werden – ein User Agent mit einer langsamen mobilen Verbindung und einem hochauflösenden Bildschirm könnte es vorziehen, niedrigauflösende Bilder zu erhalten, anstatt auf ein höher aufgelöstes Bild zu warten.

`image-set()` ermöglicht es dem Autor, Optionen anzubieten, anstatt zu bestimmen, was jeder einzelne Benutzer benötigt.

## Syntax

```css-nolint
/* Select image based on resolution */
image-set(
  "image1.jpg" 1x,
  "image2.jpg" 2x
);

image-set(
  url("image1.jpg") 1x,
  url("image2.jpg") 2x
);

/* Select gradient based on resolution */
image-set(
  linear-gradient(blue, white) 1x,
  linear-gradient(blue, green) 2x
);

/* Select image based on supported formats */
image-set(
  url("image1.avif") type("image/avif"),
  url("image2.jpg") type("image/jpeg")
);
```

### Werte

- `<image>`
  - : Das {{cssxref("image")}} kann jeglicher Bildtyp sein, außer einem Bildsatz. Die Funktion `image-set()` darf nicht innerhalb einer anderen `image-set()`-Funktion verschachtelt werden.
- `<string>`
  - : Eine URL zu einem Bild.
- `<resolution>` {{optional_inline}}
  - : {{cssxref("resolution")}} Einheiten umfassen `x` oder `dppx`, für Dots per Pixel Einheit, `dpi`, für Dots per Inch, und `dpcm` für Dots per Zentimeter. Jedes Bild innerhalb eines `image-set()` muss eine eindeutige Auflösung haben.
- `type(<string>)` {{optional_inline}}
  - : Eine gültige MIME-Typ-Zeichenkette, z. B. "image/jpeg".

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Browser liefern keine speziellen Informationen über Hintergrundbilder an unterstützende Technologien. Dies ist hauptsächlich für Screenreader von Bedeutung, da ein Screenreader seine Präsenz nicht ankündigen wird und daher den Benutzern nichts vermittelt. Wenn das Bild Informationen enthält, die entscheidend für das Verständnis des Gesamtzwecks der Seite sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Understanding WCAG, Leitfaden 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Beispiele

### Verwenden von image-set() zum Bereitstellen alternativer background-image Optionen

Dieses Beispiel zeigt, wie [`image-set()`](https://drafts.csswg.org/css-images-4/#funcdef-image-set) verwendet wird, um zwei alternative {{cssxref("background-image")}} Optionen bereitzustellen, die je nach benötigter Auflösung ausgewählt werden: eine normale Version und eine hochauflösende Version.

```html live-sample___image-set-example
<div class="box"></div>
```

```css live-sample___image-set-example
.box {
  width: 400px;
  height: 200px;
  background-repeat: no-repeat;
  background-size: cover;

  background-image: image-set(
    url("https://mdn.github.io/shared-assets/images/examples/balloons-small.jpg")
      1x,
    url("https://mdn.github.io/shared-assets/images/examples/balloons-landscape.jpg")
      2x
  );
}
```

{{EmbedLiveSample("image-set-example", "", "250px")}}

### Verwenden von image-set() zum Bereitstellen alternativer Bildformate

Im nächsten Beispiel wird die `type()`-Funktion verwendet, um das Bild in den Formaten AVIF und JPEG bereitzustellen. Wenn der Browser avif unterstützt, wird diese Version gewählt. Andernfalls wird die JPEG-Version verwendet.

```html live-sample___image-set-type-example
<div class="box"></div>
```

```css live-sample___image-set-type-example
.box {
  width: 400px;
  height: 200px;
  background-repeat: no-repeat;
  background-size: cover;

  background-image: image-set(
    "https://mdn.github.io/shared-assets/images/examples/balloons-landscape.avif"
      type("image/avif"),
    "https://mdn.github.io/shared-assets/images/examples/balloons-landscape.jpg"
      type("image/jpeg")
  );
}
```

{{EmbedLiveSample("image-set-type-example", "", "250px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("image")}}
- {{cssxref("image/image", "image()")}}
- {{cssxref("element()")}}
- {{cssxref("url_value", "&lt;url&gt;")}}
- {{cssxref("gradient")}}
- {{cssxref("cross-fade()")}}
