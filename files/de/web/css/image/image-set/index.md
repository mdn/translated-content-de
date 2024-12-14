---
title: image-set()
slug: Web/CSS/image/image-set
l10n:
  sourceCommit: 5332af37c3d94913bf15b6aed87aaed2693f19d5
---

{{CSSRef}}

Die **`image-set()`** [CSS](/de/docs/Web/CSS) [funktionale](/de/docs/Web/CSS/CSS_Functions) Notation ist eine Methode, mit der der Browser das am besten geeignete CSS-Bild aus einem festgelegten Satz auswählt, insbesondere für Bildschirme mit hoher Pixeldichte.

Die Auflösung und die Bandbreite unterscheiden sich je nach Gerät und Netzwerkzugang. Die Funktion `image-set()` liefert die am besten geeignete Bildauflösung für das Gerät eines Benutzers, indem sie eine Reihe von Bildoptionen bereitstellt — jede mit einer zugeordneten Auflösungsdeklaration — aus denen der Browser das am besten geeignete für das Gerät und die Einstellungen auswählt. Die Auflösung kann als Proxy für die Dateigröße verwendet werden — ein Benutzeragent auf einer langsamen mobilen Verbindung mit einem hochauflösenden Bildschirm zieht es möglicherweise vor, niedrig aufgelöste Bilder zu erhalten, anstatt auf das Laden eines hochauflösenden Bildes zu warten.

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
  - : Das [`<image>`](/de/docs/Web/CSS/image) kann jeder Bildtyp sein, außer einem Bildsatz. Die Funktion `image-set()` darf nicht innerhalb einer anderen `image-set()`-Funktion verschachtelt werden.
- `<string>`
  - : Eine URL zu einem Bild.
- `<resolution>` {{optional_inline}}
  - : [`<resolution>`](/de/docs/Web/CSS/resolution) Einheiten umfassen `x` oder `dppx` für dots per pixel, `dpi` für dots per inch und `dpcm` für dots per centimeter. Jedes Bild innerhalb eines `image-set()` muss eine eindeutige Auflösung haben.
- `type(<string>)` {{optional_inline}}
  - : Ein gültiger MIME-Typ-String, zum Beispiel "image/jpeg".

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Browser bieten keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologien. Dies ist hauptsächlich für Bildschirmlesegeräte wichtig, da ein Bildschirmlesegerät seine Anwesenheit nicht ankündigt und daher nichts an die Benutzer weitergibt. Wenn das Bild Informationen enthält, die entscheidend für das Verständnis des Gesamtzwecks der Seite sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis von WCAG, Leitfaden 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## Beispiele

### Verwendung von image-set(), um alternative Hintergrundbild-Optionen bereitzustellen

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

### Verwendung von image-set(), um alternative Bildformate bereitzustellen

Im nächsten Beispiel wird die `type()`-Funktion verwendet, um das Bild in AVIF- und JPEG-Formaten bereitzustellen. Wenn der Browser avif unterstützt, wählt er diese Version. Andernfalls wird die jpeg-Version verwendet.

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
