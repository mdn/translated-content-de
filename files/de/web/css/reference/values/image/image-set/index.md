---
title: image-set()
slug: Web/CSS/Reference/Values/image/image-set
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`image-set()`** [CSS](/de/docs/Web/CSS) [funktionale](/de/docs/Web/CSS/Reference/Values/Functions) Notation ist eine Methode, mit der der Browser das am besten geeignete CSS-Bild aus einem gegebenen Satz auswählt, hauptsächlich für Bildschirme mit hoher Pixeldichte.

Auflösung und Bandbreite variieren je nach Gerät und Netzwerkzugang. Die `image-set()`-Funktion liefert die am besten geeignete Bildauflösung für das Gerät eines Benutzers und bietet eine Auswahl an Bildoptionen — jede mit einer zugeordneten Auflösungsdeklaration — aus der der Browser das am besten geeignete Bild für das Gerät und die Einstellungen auswählt. Die Auflösung kann als Stellvertreter für die Dateigröße verwendet werden — ein User-Agent mit einer langsamen mobilen Verbindung und einem hochauflösenden Bildschirm bevorzugt möglicherweise kleinere Auflösungen, um kürzere Ladezeiten zu haben.

`image-set()` ermöglicht es dem Autor, Optionen bereitzustellen, anstatt individuell zu bestimmen, was jeder einzelne Benutzer benötigt.

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
  - : Das [`<image>`](/de/docs/Web/CSS/Reference/Values/image) kann jeden Bildtyp darstellen, außer einem Bildset. Die `image-set()`-Funktion darf nicht innerhalb einer anderen `image-set()`-Funktion verschachtelt werden.
- `<string>`
  - : Eine URL zu einem Bild.
- `<resolution>` {{optional_inline}}
  - : [`<resolution>`](/de/docs/Web/CSS/Reference/Values/resolution) Einheiten umfassen `x` oder `dppx` für Punkte pro Pixeleinheit, `dpi` für Punkte pro Zoll und `dpcm` für Punkte pro Zentimeter. Jedes Bild innerhalb eines `image-set()` muss eine einzigartige Auflösung haben.
- `type(<string>)` {{optional_inline}}
  - : Ein gültiger MIME-Type-String, zum Beispiel "image/jpeg".

## Formalsyntax

{{CSSSyntax}}

## Barrierefreiheit

Browser bieten keine speziellen Informationen über Hintergrundbilder für unterstützende Technologien. Dies ist vor allem für Screenreader wichtig, da ein Screenreader seine Anwesenheit nicht bekannt gibt und somit seinen Benutzern nichts mitteilt. Falls das Bild Informationen enthält, die für das Verständnis des gesamten Zwecks der Seite von entscheidender Bedeutung sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis WCAG, Leitlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis Erfolgskriterium 1.1.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Beispiele

### Verwendung von image-set(), um alternative background-image-Optionen bereitzustellen

Dieses Beispiel zeigt, wie [`image-set()`](https://drafts.csswg.org/css-images-4/#funcdef-image-set) verwendet wird, um zwei alternative {{cssxref("background-image")}} Optionen bereitzustellen, die je nach erforderlicher Auflösung ausgewählt werden: eine normale Version und eine hochauflösende Version.

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

Im nächsten Beispiel wird die `type()`-Funktion verwendet, um das Bild in AVIF- und JPEG-Formaten zu liefern. Wenn der Browser avif unterstützt, wird diese Version gewählt. Andernfalls wird die jpeg-Version verwendet.

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
