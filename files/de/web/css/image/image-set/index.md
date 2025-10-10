---
title: image-set()
slug: Web/CSS/image/image-set
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Die **`image-set()`** [CSS](/de/docs/Web/CSS) [funktionale](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) Notation ist eine Methode, mit der der Browser das geeigneteste CSS-Bild aus einem gegebenen Satz auswählt, hauptsächlich für Bildschirme mit hoher Pixeldichte.

Auflösung und Bandbreite unterscheiden sich je nach Gerät und Netzwerkzugang. Die `image-set()`-Funktion liefert die geeignetste Bildauflösung für das Gerät eines Benutzers, indem sie eine Menge von Bildoptionen bietet – jede mit einer zugeordneten Auflösungserklärung –, aus denen der Browser die für das Gerät und die Einstellungen am geeignetsten auswählt. Die Auflösung kann als Proxy für die Dateigröße verwendet werden – ein User-Agent mit einer langsamen mobilen Verbindung und einem hochauflösenden Bildschirm zieht es möglicherweise vor, Bilder mit niedrigerer Auflösung zu empfangen, anstatt auf das Laden eines Bildes mit höherer Auflösung zu warten.

`image-set()` erlaubt dem Autor, Optionen zu bieten, anstatt zu bestimmen, was jeder einzelne Benutzer benötigt.

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
  - : Das [`<image>`](/de/docs/Web/CSS/image) kann ein beliebiger Bildtyp sein, mit Ausnahme eines Bildsatzes. Die `image-set()`-Funktion darf nicht innerhalb einer anderen `image-set()`-Funktion verschachtelt werden.
- `<string>`
  - : Eine URL zu einem Bild.
- `<resolution>` {{optional_inline}}
  - : [`<resolution>`](/de/docs/Web/CSS/resolution) Einheiten umfassen `x` oder `dppx` für Punkt-pro-Pixel-Einheit, `dpi` für Punkte pro Zoll und `dpcm` für Punkte pro Zentimeter. Jedes Bild innerhalb eines `image-set()` muss eine eindeutige Auflösung haben.
- `type(<string>)` {{optional_inline}}
  - : Ein gültiger MIME-Typ-String, zum Beispiel "image/jpeg".

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Browser stellen assistiven Technologien keine speziellen Informationen zu Hintergrundbildern bereit. Dies ist vor allem für Bildschirmlesegeräte wichtig, da ein Bildschirmlesegerät dessen Vorhandensein nicht ankündigt und daher den Benutzern keine Informationen vermittelt. Wenn das Bild Informationen enthält, die für das Verständnis des Gesamtzwecks der Seite wichtig sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis von WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgs-Kriteriums 1.1.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Beispiele

### Verwendung von image-set() zur Bereitstellung alternativer background-image-Optionen

Dieses Beispiel zeigt, wie man [`image-set()`](https://drafts.csswg.org/css-images-4/#funcdef-image-set) verwendet, um zwei alternative {{cssxref("background-image")}} Optionen bereitzustellen, die je nach benötigter Auflösung ausgewählt werden: eine normale Version und eine hochauflösende Version.

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

Im nächsten Beispiel wird die `type()`-Funktion verwendet, um das Bild in AVIF- und JPEG-Formaten bereitzustellen. Wenn der Browser avif unterstützt, wird er diese Version wählen. Andernfalls wird er die jpeg-Version verwenden.

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
- {{cssxref("url_value", "\<url>")}}
- {{cssxref("\<gradient>")}}
- {{cssxref("cross-fade", "cross-fade()")}}
