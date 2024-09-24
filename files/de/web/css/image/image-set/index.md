---
title: image-set()
slug: Web/CSS/image/image-set
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

Die **`image-set()`** [CSS](/de/docs/Web/CSS) [Funktions](/de/docs/Web/CSS/CSS_Functions) Notation ist eine Methode, die es dem Browser ermöglicht, das passendste CSS-Bild aus einem gegebenen Satz auszuwählen, hauptsächlich für Bildschirme mit hoher Pixeldichte.

Die Auflösung und Bandbreite unterscheiden sich je nach Gerät und Netzwerkzugang. Die Funktion `image-set()` liefert die geeignetste Bildauflösung für das Gerät des Benutzers, indem sie eine Reihe von Bildoptionen bereitstellt - jede mit einer zugehörigen Auflösungsdeklaration -, aus denen der Browser das für das Gerät und die Einstellungen passendste auswählt. Die Auflösung kann als Proxy für die Dateigröße verwendet werden - ein User-Agent mit einer langsamen mobilen Verbindung und einem hochauflösenden Bildschirm könnte es vorziehen, Bilder mit niedrigerer Auflösung zu erhalten, anstatt auf ein Bild mit höherer Auflösung zu warten.

Mit `image-set()` kann der Autor Optionen bereitstellen, anstatt zu bestimmen, was jeder einzelne Benutzer benötigt.

## Syntax

```css-nolint
/* Bild basierend auf der Auflösung auswählen */
image-set(
  "image1.jpg" 1x,
  "image2.jpg" 2x
);

image-set(
  url("image1.jpg") 1x,
  url("image2.jpg") 2x
);

/* Farbverlauf basierend auf der Auflösung auswählen */
image-set(
  linear-gradient(blue, white) 1x,
  linear-gradient(blue, green) 2x
);

/* Bild basierend auf unterstützten Formaten auswählen */
image-set(
  url("image1.avif") type("image/avif"),
  url("image2.jpg") type("image/jpeg")
);
```

### Werte

- `<image>`
  - : Das [`<image>`](/de/docs/Web/CSS/image) kann jeden Bildtyp außer einem Bildsatz umfassen. Die Funktion `image-set()` darf nicht in einer anderen `image-set()` Funktion verschachtelt sein.
- `<string>`
  - : Eine URL zu einem Bild.
- `<resolution>` {{optional_inline}}
  - : [`<resolution>`](/de/docs/Web/CSS/resolution) Einheiten umfassen `x` oder `dppx` für Punkte pro Pixeleinheit, `dpi` für Punkte pro Zoll und `dpcm` für Punkte pro Zentimeter. Jedes Bild innerhalb einer `image-set()` muss eine einzigartige Auflösung haben.
- `type(<string>)` {{optional_inline}}
  - : Ein gültiger MIME-Typ-String, zum Beispiel "image/jpeg".

### Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Browser stellen keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologien bereit. Dies ist hauptsächlich für Screenreader wichtig, da ein Screenreader das Vorhandensein nicht ankündigt und daher den Nutzern nichts vermittelt. Wenn das Bild Informationen enthält, die für das Verständnis des allgemeinen Zwecks der Seite entscheidend sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis WCAG, Leitlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## Beispiele

### Verwendung von image-set(), um alternative Hintergrundbildoptionen bereitzustellen

Dieses Beispiel zeigt, wie [`image-set()`](https://drafts.csswg.org/css-images-4/#funcdef-image-set) verwendet wird, um zwei alternative {{cssxref("background-image")}} Optionen bereitzustellen, die je nach benötigter Auflösung ausgewählt werden: eine normale Version und eine hochauflösende Version.

{{EmbedGHLiveSample("css-examples/images/image-set.html", '100%', 600)}}

> [!NOTE]
> Im obigen Beispiel wird die `-webkit` prämierte Version auch verwendet, um Chrome und Safari zu unterstützen. In Firefox 90 wurde Unterstützung für `-webkit-image-set()` als Alias zu `image-set()` hinzugefügt, um Kompatibilität sicherzustellen, wo Entwickler die standardmäßige Eigenschaft nicht hinzugefügt hatten.

### Verwendung von image-set(), um alternative Bildformate bereitzustellen

Im nächsten Beispiel wird die Funktion `type()` verwendet, um das Bild in AVIF- und JPEG-Formaten bereitzustellen. Wenn der Browser AVIF unterstützt, wird er diese Version wählen. Andernfalls wird die JPEG-Version verwendet.

{{EmbedGHLiveSample("css-examples/images/image-set-type.html", '100%', 600)}}

#### Bereitstellung eines Fallbacks

Es gibt kein eingebautes Fallback für `image-set()`; daher ist eine separate Deklaration erforderlich, bevor die Zeile mit `image-set()` verwendet wird, um ein {{cssxref("background-image")}} für die Browser bereitzustellen, die die Funktion nicht unterstützen.

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
