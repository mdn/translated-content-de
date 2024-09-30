---
title: image-set()
slug: Web/CSS/image/image-set
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

Die **`image-set()`** [CSS](/de/docs/Web/CSS) [funktionale](/de/docs/Web/CSS/CSS_Functions) Notation ist eine Methode, mit der der Browser das am besten geeignete CSS-Bild aus einem gegebenen Satz auswählt, hauptsächlich für Bildschirme mit hoher Pixeldichte.

Auflösung und Bandbreite unterscheiden sich je nach Gerät und Netzwerkanbindung. Die `image-set()`-Funktion liefert die am besten geeignete Bildauflösung für das Gerät eines Benutzers, indem ein Satz von Bildoptionen bereitgestellt wird – jede mit einer zugehörigen Auflösungsangabe –, aus denen der Browser die am besten geeignete für das Gerät und die Einstellungen auswählt. Auflösung kann als Stellvertreter für Dateigröße verwendet werden – ein User-Agent mit langsamer mobiler Verbindung und hochauflösendem Bildschirm könnte bevorzugen, niedrigauflösende Bilder zu erhalten, anstatt auf das Laden eines hochauflösenden Bildes zu warten.

`image-set()` erlaubt dem Autor, Optionen bereitzustellen, anstatt zu bestimmen, was jeder einzelne Benutzer benötigt.

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
  - : Das [`<image>`](/de/docs/Web/CSS/image) kann jeder Bildtyp sein, außer einem Bildersatz. Die `image-set()`-Funktion darf nicht innerhalb einer anderen `image-set()`-Funktion verschachtelt werden.
- `<string>`
  - : Eine URL zu einem Bild.
- `<resolution>` {{optional_inline}}
  - : [`<resolution>`](/de/docs/Web/CSS/resolution) Einheiten enthalten `x` oder `dppx` für Punkt pro Pixel Einheit, `dpi` für Punkt pro Inch und `dpcm` für Punkt pro Zentimeter. Jedes Bild innerhalb eines `image-set()` muss eine eindeutige Auflösung haben.
- `type(<string>)` {{optional_inline}}
  - : Ein gültiger MIME-Typ-String, zum Beispiel "image/jpeg".

### Formale Syntax

{{csssyntax}}

## Zugänglichkeit

Browser bieten keine speziellen Informationen zu Hintergrundbildern für assistive Technologien. Dies ist hauptsächlich für Bildschirmleser von Bedeutung, da ein Bildschirmleser dessen Anwesenheit nicht ankündigt und somit den Benutzern nichts mitteilt. Wenn das Bild Informationen enthält, die für das Verständnis des Gesamtzwecks der Seite entscheidend sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis von WCAG, Leitfaden 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verstehen des Erfolgskriteriums 1.1.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## Beispiele

### Mit image-set() alternative Optionen für Hintergrundbilder bereitstellen

Dieses Beispiel zeigt, wie man [`image-set()`](https://drafts.csswg.org/css-images-4/#funcdef-image-set) verwendet, um zwei alternative {{cssxref("background-image")}}-Optionen bereitzustellen, die je nach benötigter Auflösung ausgewählt werden: eine normale Version und eine hochauflösende Version.

{{EmbedGHLiveSample("css-examples/images/image-set.html", '100%', 600)}}

> [!NOTE]
> Im obigen Beispiel wird die `-webkit`-präfixierte Version ebenfalls verwendet, um Chrome und Safari zu unterstützen. In Firefox 90 wurde Unterstützung für `-webkit-image-set()` als Alias für `image-set()` hinzugefügt (um Kompatibilität zu bieten, wo Entwickler die standardisierte Eigenschaft nicht hinzugefügt haben).

### Mit image-set() alternative Bildformate bereitstellen

Im nächsten Beispiel wird die `type()`-Funktion verwendet, um das Bild in den Formaten AVIF und JPEG bereitzustellen. Wenn der Browser AVIF unterstützt, wählt er diese Version. Andernfalls verwendet er die JPEG-Version.

{{EmbedGHLiveSample("css-examples/images/image-set-type.html", '100%', 600)}}

#### Bereitstellung eines Fallbacks

Für `image-set()` gibt es kein integriertes Fallback; daher ist eine separate Deklaration erforderlich, um eine {{cssxref("background-image")}} für jene Browser bereitzustellen, die die Funktion nicht unterstützen, bevor die Zeile mit `image-set()` verwendet wird.

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
