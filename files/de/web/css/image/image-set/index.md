---
title: image-set()
slug: Web/CSS/image/image-set
l10n:
  sourceCommit: 5c0d26f70b80e5511496f49cb5dc0405de98c562
---

{{CSSRef}}

Die **`image-set()`**-[CSS](/de/docs/Web/CSS)-[Funktionsnotation](/de/docs/Web/CSS/CSS_Functions) ist eine Methode, um dem Browser die Auswahl des am besten geeigneten CSS-Bildes aus einem gegebenen Satz zu ermöglichen, insbesondere für hochauflösende Bildschirme.

Auflösung und Bandbreite unterscheiden sich je nach Gerät und Netzwerkzugang. Die `image-set()`-Funktion liefert die am besten geeignete Bildauflösung für das Gerät eines Nutzers, indem sie eine Menge von Bildoptionen bereitstellt — jede mit einer zugehörigen Auflösungsangabe — aus denen der Browser das passendste Bild für das jeweilige Gerät und die jeweiligen Einstellungen auswählt. Die Auflösung kann dabei als stellvertretendes Kriterium für die Dateigröße dienen — ein User-Agent mit einer langsamen mobilen Verbindung und einem hochauflösenden Bildschirm kann es bevorzugen, niedrig aufgelöste Bilder zu erhalten, statt auf das Laden eines höher aufgelösten Bildes zu warten.

`image-set()` ermöglicht es dem Autor, Optionen bereitzustellen, anstatt festzulegen, was jeder einzelne Nutzer benötigt.

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
  - : Das [`<image>`](/de/docs/Web/CSS/image) kann jeden Bildtyp repräsentieren, außer ein Bildsatz. Die `image-set()`-Funktion kann nicht innerhalb einer anderen `image-set()`-Funktion geschachtelt werden.
- `<string>`
  - : Eine URL zu einem Bild.
- `<resolution>` {{optional_inline}}
  - : [`<resolution>`](/de/docs/Web/CSS/resolution)-Einheiten umfassen `x` oder `dppx` für Punkt-pro-Pixel-Einheiten, `dpi` für Punkte pro Zoll und `dpcm` für Punkte pro Zentimeter. Jedes Bild innerhalb einer `image-set()`-Funktion muss eine eindeutige Auflösung haben.
- `type(<string>)` {{optional_inline}}
  - : Ein gültiger MIME-Typ-String, z. B. "image/jpeg".

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Browser stellen Assistenztechnologien keine besonderen Informationen über Hintergrundbilder zur Verfügung. Dies ist vor allem für Screenreader relevant, da ein Screenreader deren Anwesenheit nicht ansagt und somit seinen Nutzern nichts vermittelt. Wenn das Bild Informationen enthält, die für das Verständnis des allgemeinen Zwecks der Seite entscheidend sind, ist es besser, diese semantisch im Dokument zu beschreiben.

- [MDN Understanding WCAG, Leitfaden 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Beispiele

### Verwendung von image-set(), um alternative background-image-Optionen bereitzustellen

Dieses Beispiel zeigt, wie [`image-set()`](https://drafts.csswg.org/css-images-4/#funcdef-image-set) verwendet wird, um zwei alternative {{cssxref("background-image")}}-Optionen bereitzustellen. Die Auswahl erfolgt basierend auf der benötigten Auflösung: eine normale Version und eine hochauflösende Version.

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

Im nächsten Beispiel wird die `type()`-Funktion verwendet, um das Bild in den Formaten AVIF und JPEG bereitzustellen. Wenn der Browser AVIF unterstützt, wählt er diese Version. Andernfalls wird die JPEG-Version verwendet.

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
