---
title: image-set()
slug: Web/CSS/image/image-set
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

Die **`image-set()`** [CSS](/de/docs/Web/CSS) [funktionale](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) Notation ist eine Methode, mit der der Browser das passendste CSS-Bild aus einem gegebenen Satz auswählt, insbesondere für Bildschirme mit hoher Pixeldichte.

Auflösung und Bandbreite variieren je nach Gerät und Netzwerkzugang. Die `image-set()` Funktion liefert die am besten geeignete Bildauflösung für das Gerät eines Benutzers, indem sie eine Reihe von Bildoptionen bereitstellt – jede mit einer zugehörigen Auflösungserklärung –, aus denen der Browser das geeignetste für das Gerät und die Einstellungen auswählt. Die Auflösung kann als Stellvertreter für Dateigröße verwendet werden – ein User-Agent mit einer langsamen mobilen Verbindung und einem hochauflösenden Bildschirm bevorzugt möglicherweise niedrigere Auflösungen, anstatt auf das Laden eines Bildes mit höherer Auflösung zu warten.

Mit `image-set()` kann der Autor Optionen bereitstellen, anstatt zu bestimmen, was jeder einzelne Benutzer benötigt.

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
  - : Das [`<image>`](/de/docs/Web/CSS/image) kann jeder Bildtyp sein, außer einem Bildsatz. Die `image-set()` Funktion darf nicht in einer anderen `image-set()` Funktion verschachtelt werden.
- `<string>`
  - : Eine URL zu einem Bild.
- `<resolution>` {{optional_inline}}
  - : [`<resolution>`](/de/docs/Web/CSS/resolution) Einheiten beinhalten `x` oder `dppx` für dots per pixel unit, `dpi` für dots per inch und `dpcm` für dots per centimeter. Jedes Bild innerhalb eines `image-set()` muss eine eindeutige Auflösung haben.
- `type(<string>)` {{optional_inline}}
  - : Ein gültiger MIME-Typ-String, zum Beispiel "image/jpeg".

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Browser bieten keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologien. Dies ist vor allem für Bildschirmlesegeräte wichtig, da ein Bildschirmleser seine Anwesenheit nicht ankündigt und somit seinen Benutzern nichts vermittelt. Wenn das Bild Informationen enthält, die für das Verständnis des gesamten Zwecks der Seite entscheidend sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis von WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Beispiele

### Verwendung von image-set(), um alternative background-image Optionen bereitzustellen

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

### Verwendung von image-set(), um alternative Bildformate bereitzustellen

Im nächsten Beispiel wird die `type()` Funktion verwendet, um das Bild in AVIF- und JPEG-Formaten bereitzustellen. Wenn der Browser avif unterstützt, wählt er diese Version. Andernfalls wird die jpeg-Version verwendet.

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
