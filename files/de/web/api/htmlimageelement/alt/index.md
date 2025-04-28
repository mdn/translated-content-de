---
title: "HTMLImageElement: alt-Eigenschaft"
short-title: alt
slug: Web/API/HTMLImageElement/alt
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{APIRef("HTML DOM")}}

Die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Eigenschaft **`alt`** bietet Ersatztext an, der angezeigt wird, wenn das Bild, das durch das {{HTMLElement("img")}}-Element spezifiziert ist, nicht geladen wird.

Dies kann der Fall sein aufgrund eines Fehlers, weil der Benutzer das Laden von Bildern deaktiviert hat oder weil das Bild noch nicht fertig geladen ist.

Vielleicht ist der wichtigste Grund für die Nutzung der `alt`-Eigenschaft die Unterstützung der [Barrierefreiheit](/de/docs/Web/Accessibility), da der `alt`-Text von Bildschirmlesegeräten und anderen unterstützenden Technologien verwendet werden kann, um Menschen mit Behinderungen die vollständige Nutzung Ihrer Inhalte zu ermöglichen. Er kann zum Beispiel laut vorgelesen oder an ein Braille-Ausgabegerät gesendet werden, um blinde oder sehbehinderte Benutzer zu unterstützen.

> **Denken Sie so darüber nach:** Wenn Sie `alt`-Texte für Ihre Bilder auswählen, stellen Sie sich vor, was Sie sagen würden, wenn Sie die Seite jemandem am Telefon vorlesen, ohne zu erwähnen, dass es ein Bild auf der Seite gibt.

Der Ersatztext wird an der Stelle angezeigt, die das Bild einnehmen würde, und sollte in der Lage sein, das Bild _zu ersetzen, ohne die Bedeutung der Seite zu verändern_.

## Wert

Ein String, der den Ersatztext enthält, der angezeigt werden soll, wenn das Bild nicht geladen ist oder von unterstützenden Geräten verwendet wird.

Das `alt`-Attribut ist offiziell verpflichtend; es sollte immer angegeben werden. Wenn das Bild keinen Ersatz benötigt (zum Beispiel bei einem Bild, das dekorativ ist oder ein Berater-Icon von geringer Bedeutung ist), können Sie einen leeren String (`""`) angeben. Aus Kompatibilitätsgründen akzeptieren Browser im Allgemeinen ein Bild ohne `alt`-Attribut, aber Sie sollten sich angewöhnen, es zu benutzen.

## Verwendungshinweise

Die grundlegende Richtlinie für das `alt`-Attribut lautet, dass der Ersatztext jedes Bildes in der Lage sein sollte, das Bild _zu ersetzen, ohne die Bedeutung der Seite zu ändern_. Sie sollten `alt` niemals für Text verwenden, der als Bildunterschrift oder Titel verstanden werden könnte. Dafür gibt es separate Attribute und Elemente.

## Beispiele

Darüber hinaus gibt es weitere Richtlinien für den angemessenen Gebrauch von `alt`, die variieren, je nachdem, wofür das Bild verwendet wird. Diese sind in den folgenden Beispielen dargestellt.

### Dekorative Bilder

Bilder ohne semantische Bedeutung – wie solche, die ausschließlich dekorativ sind – oder von geringem Informationswert sollten ihre `alt`-Attribute auf den leeren String (`""`) setzen. Dies wird im folgenden Beispiel gezeigt.

#### HTML

Im HTML für dieses Beispiel, das unten gezeigt wird, enthält das {{HTMLElement("img")}}-Element die `alt`-Eigenschaft, die verhindert, dass das Bild einen Ersatztext hat, da es sich um ein dekoratives Detail handelt.

```html
<div class="container">
  <div class="left-margin">
    <img src="margin-flourish.svg" alt="" />
  </div>
  <div class="contents">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis orci
      ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac
      neque libero. Vivamus consectetur rhoncus elit eget porta. Etiam pulvinar
      ex id sapien laoreet, quis aliquet odio lobortis. Nam ac mauris at risus
      laoreet cursus vitae et sapien. Etiam molestie auctor eros, ac porta risus
      scelerisque sit amet. Ut nunc neque, porta eu auctor at, tempor et arcu.
    </p>
  </div>
</div>
```

#### CSS

Das CSS für dieses Beispiel richtet die Stile für das Layout ein, wie im unten gezeigten Ergebnis dargestellt.

```css
body {
  margin: 0;
  padding: 0;
}

p {
  margin-block-start: 0;
  margin-block-end: 1em;
  margin-top: 0;
  margin-bottom: 1em;
}

.container {
  width: 100vh;
  height: 95vh;
  font:
    16px Arial,
    Helvetica,
    sans-serif;
}

.left-margin {
  background-color: rgb(241 240 237);
  width: 9em;
  height: 100%;
  float: left;
  margin-right: 5px;
  padding-right: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
}

.left-margin img {
  width: 6em;
}

.contents {
  background-color: rgb(241 240 235);
  height: 100%;
  margin-left: 2em;
  padding-top: 1em;
  padding-left: 2em;
  padding-right: 1em;
}
```

#### Ergebnis

{{EmbedLiveSample("Decorative_images", 600, 500)}}

### Bilder, die als Schaltflächen verwendet werden

Wenn ein Bild als Schaltfläche verwendet wird (indem es als einziges sichtbares Kind eines {{HTMLElement("a")}}-Elements genutzt wird, das einen Hyperlink darstellt), muss das `alt`-Attribut verwendet werden, um den Zweck der Schaltfläche zu vermitteln. Mit anderen Worten, es sollte derselbe Text sein, den Sie in einer Text-Schaltfläche verwenden würden, um denselben Zweck zu erfüllen.

Zum Beispiel, im folgenden HTML-Ausschnitt, stellt eine Symbolleiste, die Symbolbilder als Link-Beschriftungen verwendet, `alt`-Attribute für jedes Symbol bereit und gibt eine Textbeschriftung an, die anstelle des Symbols verwendet werden soll, wenn die Symbole nicht verwendet werden können oder absichtlich nicht verwendet werden sollen.

```html
<li class="toolbar" role="toolbar">
  <a href="songs.html" role="button">
    <img src="songicon.svg" alt="Songs" />
  </a>
  <a href="albums.html" role="button">
    <img src="albumicon.svg" alt="Albums"
  /></a>
  <a href="artists.html" role="button">
    <img src="artisticon.svg" alt="Artists" />
  </a>
  <a href="playlists.html" role="button">
    <img src="playlisticon.svg" alt="Playlists" />
  </a>
</li>
```

### Bilder mit Diagrammen oder Karten

Wenn ein Bild Informationen in Form eines Diagramms, einer Grafik, eines Schaubilds oder einer Karte enthält, sollte der `alt`-Text dieselben Informationen bereitstellen, zumindest in zusammengefasster Form. Dies gilt unabhängig davon, ob das Bild im Rasterformat wie [PNG](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) oder [JPEG](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image) oder im Vektorformat wie [SVG](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics) vorliegt.

- Für eine Karte könnte der `alt`-Text Anweisungen zu dem Ort sein, der durch die Karte angezeigt wird, ähnlich wie Sie es verbal erklären würden.
- Für ein Diagramm könnte der Text die Elemente im Diagramm und ihre Werte beschreiben.
- Für ein Schaubild könnte der Text eine Erklärung des dargestellten Konzepts sein.

Beachten Sie, dass Text, der in Diagrammen und Schaubildern im {{Glossary("SVG", "SVG")}}-Format enthalten ist, von Bildschirmlesegeräten gelesen werden kann. Dies kann die Entscheidungen beeinflussen, die Sie beim Schreiben des `alt`-Textes für das Diagramm treffen.

### Symbole oder Logos

Logos (wie Unternehmens- oder Markenlogos) und informative Symbole sollten den entsprechenden Text in ihren `alt`-Strings verwenden. Das heißt, wenn ein Bild ein Unternehmenslogo ist, sollte der `alt`-Text der Name des Unternehmens sein. Wenn das Bild ein Symbol darstellt, das einen Status oder andere Informationen repräsentiert, sollte der Text der Name dieses Zustands sein.

Wenn zum Beispiel ein Bild ein Abzeichen ist, das auf einer Seite angezeigt wird, um darauf hinzuweisen, dass der Inhalt der Seite neu ist und kürzlich aktualisiert wurde, könnte der entsprechende `alt`-Text `"Kürzlich aktualisiert"` oder sogar `"Aktualisiert am 27. August 2019"` lauten.

In diesem Beispiel wird ein Sternbild mit dem Wort "Neu!" verwendet, um anzuzeigen, dass ein Artikel über etwas Neues (und wahrscheinlich auch Aufregendes) handelt. Das `alt`-Attribut ist auf `Neue Seite!` gesetzt, damit dieser Text angezeigt wird, anstatt des Bilds, wenn das Bild nicht verfügbar ist. Es ist auch dafür verfügbar, von Bildschirmlesegeräten gelesen zu werden.

#### HTML

Das untenstehende HTML erstellt einen Inhaltsausschnitt von einer Seite, die das beschriebene Symbol verwendet. Beachten Sie die Verwendung des `alt`-Attributs auf dem {{HTMLElement("img")}}, das einen guten Ersatzstring bereitstellt, der verwendet werden soll, falls das Bild nicht geladen wird.

```html
<div class="container">
  <img
    src="https://www.bitstampede.com/mdn-test/new-page.svg"
    alt="New Page!"
    class="page-info-badge" />
  <p class="contents">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis orci
    ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac neque
    libero. Vivamus consectetur rhoncus elit eget porta. Etiam pulvinar ex id
    sapien laoreet, quis aliquet odio lobortis. Nam ac mauris at risus laoreet
    cursus vitae et sapien. Etiam molestie auctor eros, ac porta risus
    scelerisque sit amet. Ut nunc neque, porta eu auctor at, tempor et arcu.
  </p>
</div>
```

#### CSS

Das Hauptmerkmal des CSS hier ist die Verwendung von {{cssxref("clip-path")}} und {{cssxref("shape-outside")}}, um den Text um das Symbol auf ansprechende Weise zu wickeln.

```css
.container {
  max-width: 500px;
}

.page-info-badge {
  width: 9em;
  padding-right: 1em;
  float: left;
  clip-path: polygon(
    100% 0,
    100% 50%,
    90% 70%,
    80% 80%,
    70% 90%,
    50% 100%,
    0 100%,
    0 0
  );
  shape-outside: polygon(
    100% 0,
    100% 50%,
    90% 70%,
    80% 80%,
    70% 90%,
    50% 100%,
    0 100%,
    0 0
  );
}

.contents {
  margin-top: 1em;
  font:
    16px Arial,
    Helvetica,
    Verdana,
    sans-serif;
}
```

#### Ergebnis

{{EmbedLiveSample("Icons_or_logos", 640,400)}}

### Andere Bilder

Bilder, die Objekte oder Szenen zeigen, sollten `alt`-Text haben, der beschreibt, was im Bild zu sehen ist. Ein Foto einer gelben Teekanne könnte buchstäblich mit dem `alt`-Attribut `"Eine gelbe Teekanne"` versehen sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
