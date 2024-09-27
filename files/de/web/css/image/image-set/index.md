---
title: image-set()
slug: Web/CSS/image/image-set
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

Die **`image-set()`** [CSS](/de/docs/Web/CSS) [funktionale](/de/docs/Web/CSS/CSS_Functions) Notation ermöglicht es dem Browser, das am besten geeignete CSS-Bild aus einem gegebenen Satz auszuwählen, vor allem für Bildschirme mit hoher Pixeldichte.

Die Auflösung und Bandbreite variieren je nach Gerät und Netzwerkzugang. Die `image-set()` Funktion liefert die am besten geeignete Bildauflösung für das Gerät eines Nutzers, indem sie eine Reihe von Bildoptionen bietet - jede mit einer zugehörigen Auflösungsangabe -, aus denen der Browser die am besten geeignete Option für das Gerät und die Einstellungen auswählt. Die Auflösung kann als Proxy für die Dateigröße verwendet werden – ein User Agent mit einer langsamen mobilen Verbindung und einem hochauflösenden Bildschirm könnte es vorziehen, niedrigauflösende Bilder zu erhalten, anstatt auf das Laden eines hochauflösenden Bildes zu warten.

`image-set()` ermöglicht es dem Autor, Optionen anzubieten, anstatt zu bestimmen, was jeder einzelne Nutzer benötigt.

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
  - : Das [`<image>`](/de/docs/Web/CSS/image) kann jeder Bildtyp außer einem Bildsatz sein. Die `image-set()` Funktion darf nicht in eine andere `image-set()` Funktion verschachtelt werden.
- `<string>`
  - : Eine URL zu einem Bild.
- `<resolution>` {{optional_inline}}
  - : [`<resolution>`](/de/docs/Web/CSS/resolution) Einheiten beinhalten `x` oder `dppx` für Punkte pro Pixeleinheit, `dpi` für Punkte pro Zoll und `dpcm` für Punkte pro Zentimeter. Jedes Bild innerhalb eines `image-set()` muss eine einzigartige Auflösung haben.
- `type(<string>)` {{optional_inline}}
  - : Ein gültiger MIME-Typ-String, zum Beispiel "image/jpeg".

### Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Browser bieten keine besonderen Informationen zu Hintergrundbildern für unterstützende Technologien. Dies ist insbesondere für Bildschirmlesegeräte wichtig, da ein Bildschirmleser seine Anwesenheit nicht ankündigt und somit den Nutzern nichts vermittelt. Wenn das Bild Informationen enthält, die wichtig für das Verständnis des allgemeinen Zwecks der Seite sind, ist es besser, diese semantisch im Dokument zu beschreiben.

- [MDN Verständnis der WCAG, Guideline 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## Beispiele

### Verwendung von image-set(), um alternative background-image Optionen bereitzustellen

Dieses Beispiel zeigt, wie [`image-set()`](https://drafts.csswg.org/css-images-4/#funcdef-image-set) verwendet wird, um zwei alternative {{cssxref("background-image")}} Optionen bereitzustellen, die je nach benötigter Auflösung ausgewählt werden: eine normale Version und eine hochauflösende Version.

{{EmbedGHLiveSample("css-examples/images/image-set.html", '100%', 600)}}

> [!NOTE]
> Im obigen Beispiel wird auch die `-webkit`-präfixierte Version verwendet, um Chrome und Safari zu unterstützen. In Firefox 90 wurde die Unterstützung für `-webkit-image-set()` als Alias für `image-set()` hinzugefügt (um Kompatibilität zu bieten, wenn Entwickler die Standard-Eigenschaft nicht hinzugefügt haben).

### Verwendung von image-set(), um alternative Bildformate bereitzustellen

Im nächsten Beispiel wird die `type()` Funktion verwendet, um das Bild in AVIF- und JPEG-Formaten bereitzustellen. Wenn der Browser AVIF unterstützt, wählt er diese Version. Andernfalls wird die JPEG-Version verwendet.

{{EmbedGHLiveSample("css-examples/images/image-set-type.html", '100%', 600)}}

#### Bereitstellung eines Fallbacks

Für `image-set()` gibt es kein eingebautes Fallback; daher ist es notwendig, eine separate Erklärung vor der Zeile zu machen, die `image-set()` verwendet, um ein {{cssxref("background-image")}} für jene Browser bereitzustellen, die die Funktion nicht unterstützen.

```css
.box {
  background-image: url("large-balloons.jpg");
  background-image: image-set(
    "large-balloons.avif" type("image/avif"),
    "large-balloons.jpg" type("image/jpeg")
  );
}
```

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
