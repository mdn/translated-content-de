---
title: image-set()
slug: Web/CSS/image/image-set
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`image-set()`** [CSS](/de/docs/Web/CSS) [funktionale](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) Notation ist eine Methode, mit der der Browser das am besten geeignete CSS-Bild aus einer gegebenen Menge auswählen kann, hauptsächlich für Bildschirme mit hoher Pixeldichte.

Auflösung und Bandbreite variieren je nach Gerät und Netzwerkzugang. Die `image-set()`-Funktion liefert die am besten geeignete Bildauflösung für das Gerät eines Benutzers und bietet eine Reihe von Bildoptionen – jede mit einer zugehörigen Aufklärungsdeklaration – aus denen der Browser die passendste für das Gerät und die Einstellungen auswählt. Auflösung kann als Proxy für die Dateigröße verwendet werden – ein User-Agent mit einer langsamen mobilen Verbindung und einem hochauflösenden Bildschirm kann bevorzugen, niedrigere Auflösungen zu empfangen, anstatt auf das Laden eines höher aufgelösten Bildes zu warten.

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
  - : Das [`<image>`](/de/docs/Web/CSS/image) kann jeden Bildtyp außer einem Bildsatz sein. Die `image-set()`-Funktion darf nicht in eine andere `image-set()`-Funktion verschachtelt werden.
- `<string>`
  - : Eine URL zu einem Bild.
- `<resolution>` {{optional_inline}}
  - : [`<resolution>`](/de/docs/Web/CSS/resolution) Einheiten schließen `x` oder `dppx` für Punkte pro Pixel-Einheit ein, `dpi` für Punkte pro Zoll und `dpcm` für Punkte pro Zentimeter. Jedes Bild innerhalb eines `image-set()` muss eine eindeutige Auflösung haben.
- `type(<string>)` {{optional_inline}}
  - : Ein gültiger MIME-Typ-String, zum Beispiel "image/jpeg".

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Browser bieten keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologien. Dies ist hauptsächlich für Screenreader wichtig, da ein Screenreader seine Präsenz nicht ankündigt und daher seinen Benutzern nichts vermittelt. Wenn das Bild Informationen enthält, die zum Verständnis des Gesamtzwecks der Seite entscheidend sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis von WCAG, Leitlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Beispiele

### Verwendung von image-set() zur Bereitstellung alternativer Hintergrundbildoptionen

Dieses Beispiel zeigt, wie [`image-set()`](https://drafts.csswg.org/css-images-4/#funcdef-image-set) verwendet wird, um zwei alternative {{cssxref("background-image")}}-Optionen bereitzustellen, die je nach benötigter Auflösung ausgewählt werden: eine normale Version und eine hochauflösende Version.

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

Im nächsten Beispiel wird die `type()`-Funktion verwendet, um das Bild in den Formaten AVIF und JPEG bereitzustellen. Wenn der Browser Avif unterstützt, wählt er diese Version. Andernfalls verwendet er die JPEG-Version.

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
