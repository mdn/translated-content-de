---
title: image-set()
slug: Web/CSS/Reference/Values/image/image-set
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`image-set()`**-Notation [CSS](/de/docs/Web/CSS) [functional](/de/docs/Web/CSS/Reference/Values/Functions) ist eine Methode, mit der der Browser das passendste CSS-Bild aus einem vorgegebenen Satz von Bildern auswählen kann, hauptsächlich für Bildschirme mit hoher Pixeldichte.

Die Auflösung und Bandbreite variieren je nach Gerät und Netzwerkzugang. Die Funktion `image-set()` liefert die am besten geeignete Bildauflösung für das Gerät eines Benutzers, indem sie eine Auswahl von Bildoptionen bereitstellt - jede mit einer zugehörigen Auflösungsdeklaration -, aus der der Browser die am besten geeignete für das Gerät und die Einstellungen auswählt. Die Auflösung kann als Proxy für die Dateigröße verwendet werden — ein User-Agent auf einer langsamen mobilen Verbindung mit einem hochauflösenden Bildschirm könnte es vorziehen, niedrig aufgelöste Bilder zu erhalten, anstatt darauf zu warten, dass ein Bild mit höherer Auflösung geladen wird.

`image-set()` ermöglicht es dem Autor, Optionen bereitzustellen, anstatt zu bestimmen, was jeder einzelne Benutzer benötigt.

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
  - : Das {{cssxref("image")}} kann jeder Bildtyp sein, außer einem Bildsatz. Die Funktion `image-set()` darf nicht innerhalb einer anderen `image-set()`-Funktion verschachtelt sein.
- `<string>`
  - : Eine URL zu einem Bild.
- `<resolution>` {{optional_inline}}
  - : {{cssxref("resolution")}}-Einheiten umfassen `x` oder `dppx` für Punkt-pro-Pixel-Einheiten, `dpi` für Punkt-pro-Zoll und `dpcm` für Punkt-pro-Zentimeter. Jedes Bild innerhalb eines `image-set()` muss eine einzigartige Auflösung haben.
- `type(<string>)` {{optional_inline}}
  - : Ein gültiger MIME-Typ-String, zum Beispiel "image/jpeg".

## Formale Syntax

{{CSSSyntax}}

## Zugänglichkeit

Browser bieten keine besonderen Informationen über Hintergrundbilder für unterstützende Technologien. Dies ist hauptsächlich für Screenreader wichtig, da ein Screenreader seine Anwesenheit nicht ankündigt und daher nichts an seine Benutzer vermittelt. Wenn das Bild Informationen enthält, die entscheidend für das Verständnis des Gesamtsinns der Seite sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis von WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verstehen des Erfolgskriteriums 1.1.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Beispiele

### Verwendung von image-set() zur Bereitstellung alternativer Hintergrundbildoptionen

Dieses Beispiel zeigt, wie `[`image-set()`](https://drafts.csswg.org/css-images-4/#funcdef-image-set)` verwendet wird, um zwei alternative {{cssxref("background-image")}}-Optionen bereitzustellen, die je nach benötigter Auflösung ausgewählt werden: eine normale Version und eine hochauflösende Version.

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

### Verwendung von image-set() zur Bereitstellung alternativer Bildformate

Im nächsten Beispiel wird die Funktion `type()` verwendet, um das Bild in AVIF- und JPEG-Formaten bereitzustellen. Wenn der Browser avif unterstützt, wird diese Version gewählt. Andernfalls wird die jpeg-Version verwendet.

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
