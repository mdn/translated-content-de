---
title: image-set()
slug: Web/CSS/Reference/Values/image/image-set
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

Die **`image-set()`** [CSS](/de/docs/Web/CSS) [Funktional](/de/docs/Web/CSS/Reference/Values/Functions) Notation ist eine Methode, die es dem Browser ermöglicht, aus einem gegebenen Satz das am besten geeignete CSS-Bild auszuwählen, hauptsächlich für Bildschirme mit hoher Pixeldichte.

Die Auflösung und Bandbreite variiert je nach Gerät und Netzwerkzugang. Die `image-set()` Funktion liefert die am besten geeignete Bildauflösung für das Gerät eines Benutzers, indem sie eine Reihe von Bildoptionen bereitstellt – jede mit einer zugehörigen Auflösungsdeklaration – aus denen der Browser das passendste für das Gerät und die Einstellungen auswählt. Die Auflösung kann als Proxy für die Dateigröße verwendet werden – ein User-Agent mit einer langsamen mobilen Verbindung und einem hochauflösenden Bildschirm kann es vorziehen, niedrigauflösende Bilder zu empfangen, anstatt darauf zu warten, dass ein Bild in höherer Auflösung geladen wird.

`image-set()` ermöglicht es dem Autor, Optionen bereitzustellen, anstatt festzulegen, was jeder einzelne Benutzer benötigt.

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
  - : Das [`<image>`](/de/docs/Web/CSS/Reference/Values/image) kann jeder Bildtyp sein, außer einem Bildsatz. Die `image-set()` Funktion darf nicht innerhalb einer anderen `image-set()` Funktion verschachtelt sein.
- `<string>`
  - : Eine URL zu einem Bild.
- `<resolution>` {{optional_inline}}
  - : [`<resolution>`](/de/docs/Web/CSS/Reference/Values/resolution) Einheiten schließen `x` oder `dppx` ein, für Punkte pro Pixel, `dpi`, für Punkte pro Zoll, und `dpcm` für Punkte pro Zentimeter. Jedes Bild innerhalb eines `image-set()` muss eine einzigartige Auflösung haben.
- `type(<string>)` {{optional_inline}}
  - : Eine gültige MIME-Typ-Zeichenfolge, zum Beispiel "image/jpeg".

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Browser bieten keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologien. Dies ist hauptsächlich für Screenreader wichtig, da ein Screenreader seine Anwesenheit nicht ankündigen und somit seinen Benutzern nichts vermitteln wird. Wenn das Bild Informationen enthält, die zum Verständnis des Gesamtzwecks der Seite entscheidend sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Beispiele

### Die Verwendung von image-set(), um alternative Optionen für background-image bereitzustellen

Dieses Beispiel zeigt, wie man [`image-set()`](https://drafts.csswg.org/css-images-4/#funcdef-image-set) verwendet, um zwei alternative {{cssxref("background-image")}} Optionen bereitzustellen, je nach benötigter Auflösung: eine normale Version und eine hochauflösende Version.

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

### Die Verwendung von image-set(), um alternative Bildformate bereitzustellen

Im nächsten Beispiel wird die `type()` Funktion verwendet, um das Bild in AVIF- und JPEG-Formaten bereitzustellen. Wenn der Browser AVIF unterstützt, wird er diese Version wählen. Andernfalls wird er die JPEG-Version verwenden.

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
- {{cssxref("element", "element()")}}
- {{cssxref("url_value", "&lt;url&gt;")}}
- {{cssxref("&lt;gradient&gt;")}}
- {{cssxref("cross-fade", "cross-fade()")}}
