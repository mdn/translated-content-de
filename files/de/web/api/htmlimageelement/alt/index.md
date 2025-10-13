---
title: "HTMLImageElement: alt-Eigenschaft"
short-title: alt
slug: Web/API/HTMLImageElement/alt
l10n:
  sourceCommit: 7615562a3689a3e23a2b6b623597f4391740a53e
---

{{APIRef("HTML DOM")}}

Die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Eigenschaft **`alt`** bietet Ersatztext, der angezeigt wird, wenn das Bild, das durch das {{HTMLElement("img")}}-Element spezifiziert wird, nicht geladen wird.

Dies kann der Fall sein aufgrund eines Fehlers, weil der Benutzer das Laden von Bildern deaktiviert hat oder weil das Bild noch nicht vollständig geladen ist.

Der wohl wichtigste Grund, die `alt`-Eigenschaft zu verwenden, ist die Unterstützung der [Barrierefreiheit](/de/docs/Web/Accessibility), da der `alt`-Text von Bildschirmlesern und anderen unterstützenden Technologien genutzt werden kann, um Menschen mit Behinderungen zu helfen, Ihre Inhalte vollumfänglich zu nutzen. Er wird beispielsweise vorgelesen oder an ein Braille-Ausgabegerät gesendet, um blinde oder sehbehinderte Benutzer zu unterstützen.

> **Denken Sie daran:** Wenn Sie `alt`-Texte für Ihre Bilder auswählen, stellen Sie sich vor, was Sie sagen würden, wenn Sie jemanden am Telefon durch die Seite führen, ohne zu erwähnen, dass es ein Bild auf der Seite gibt.

Der Ersatztext wird an der Stelle angezeigt, die das Bild einnehmen würde, und sollte in der Lage sein, das Bild _ohne Veränderung der Bedeutung der Seite_ zu ersetzen.

## Wert

Ein String, der den Ersatztext enthält, der angezeigt wird, wenn das Bild nicht geladen ist oder von unterstützenden Geräten verwendet werden kann.

Das `alt`-Attribut ist offiziell obligatorisch; es sollte immer angegeben werden. Wenn das Bild keinen Ersatz benötigt (wie bei einem dekorativen Bild oder einem unbedeutenden Hinweissymbol), können Sie eine leere Zeichenkette (`""`) angeben. Aus Kompatibilitätsgründen akzeptieren Browser im Allgemeinen ein Bild ohne `alt`-Attribut, aber es sollte eine Gewohnheit sein, es zu verwenden.

## Hinweise zur Verwendung

Die grundlegende Richtlinie für das `alt`-Attribut ist, dass der Ersatztext eines jeden Bildes in der Lage sein sollte, das Bild _ohne Veränderung der Bedeutung der Seite_ zu ersetzen. Sie sollten `alt` niemals für Texte verwenden, die als Beschriftung oder Titel interpretiert werden könnten. Es gibt separate Attribute und Elemente, die für diese Zwecke vorgesehen sind.

## Beispiele

Darüber hinaus gibt es weitere Richtlinien für die angemessene Verwendung von `alt`, die je nach Verwendungszweck des Bildes variieren. Diese werden in den folgenden Beispielen gezeigt.

### Dekorative Bilder

Bilder ohne semantische Bedeutung—wie solche, die rein dekorativ sind—oder von begrenztem Informationswert sollten in ihrem `alt`-Attribut die leere Zeichenkette (`""`) gesetzt haben. Dies wird im folgenden Beispiel gezeigt.

#### HTML

Im HTML für dieses Beispiel, das unten gezeigt wird, enthält das {{HTMLElement("img")}}-Element die `alt`-Eigenschaft, die verhindert, dass das Bild irgendeinen Ersatztext hat, da es ein dekoratives Detail ist.

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

Das CSS für dieses Beispiel richtet die Stile für das Layout ein, wie unten im Ergebnis gezeigt.

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
    16px "Helvetica",
    "Arial",
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

Wenn Sie ein Bild als Schaltfläche verwenden (indem es als einziges sichtbares Kind eines {{HTMLElement("a")}}-Elements dient, das einen Hyperlink darstellt), muss das `alt`-Attribut verwendet werden, um den Zweck der Schaltfläche zu vermitteln. Mit anderen Worten, es sollte derselbe Text sein, den Sie in einer textuellen Schaltfläche verwenden würden, um denselben Zweck zu erfüllen.

Zum Beispiel, im folgenden HTML-Snippet, nutzt eine Symbolleiste, die Symbolbilder als Linkbeschriftungen verwendet, `alt`-Attribute für jedes, um ein textliches Label zur Verwendung anstelle des Symbols bereitzustellen, wenn die Symbole nicht angezeigt werden können oder absichtlich nicht verwendet werden.

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

Wenn ein Bild Informationen in Form eines Diagramms, Diagramms, Graphen oder einer Karte enthält, sollte der `alt`-Text dieselben Informationen, zumindest in zusammengefasster Form, bereitstellen. Dies gilt unabhängig davon, ob das Bild in einem Bitmap-Format wie [PNG](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) oder [JPEG](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image) oder in einem Vektorformat wie [SVG](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics) vorliegt.

- Für eine Karte könnte der `alt`-Text Wegbeschreibungen zu dem durch die Karte angegebenen Ort enthalten, ähnlich wie Sie es mündlich erklären würden.
- Für eine Tabelle könnte der Text die Elemente in der Tabelle und ihre Werte beschreiben.
- Für ein Diagramm könnte der Text eine Erklärung des durch das Diagramm dargestellten Konzepts sein.

Denken Sie daran, dass jeder Text in Diagrammen und Charts, die im {{Glossary("SVG", "SVG")}}-Format präsentiert werden, von Bildschirmlesegeräten gelesen werden kann. Dies kann die Entscheidungen beeinflussen, die Sie treffen, wenn Sie den `alt`-Text für das Diagramm schreiben.

### Symbole oder Logos

Logos (wie Unternehmens- oder Markenlogos) und Informationssymbole sollten den entsprechenden Text in ihren `alt`-Zeichenketten verwenden. Das heißt, wenn ein Bild ein Unternehmenslogo ist, sollte der `alt`-Text der Name des Unternehmens sein. Wenn das Bild ein Symbol darstellt, das einen Status oder andere Informationen repräsentiert, sollte der Text der Name dieses Status sein.

Beispielsweise, wenn ein Bild ein Abzeichen ist, das auf einer Seite angezeigt wird, um anzuzeigen, dass der Inhalt der Seite neu ist und kürzlich aktualisiert wurde, könnte der entsprechende `alt`-Text `"Vor Kurzem aktualisiert"` oder sogar `"Aktualisiert am 27. August 2019"` sein.

In diesem Beispiel wird ein explosionsartiges Bild mit dem Wort "Neu!" verwendet, um anzuzeigen, dass ein Artikel etwas Neues (und wahrscheinlich auch Aufregendes) betrifft. Das `alt`-Attribut ist auf `Neue Seite!` gesetzt, um diesen Text anstelle des Bildes anzuzeigen, falls das Bild nicht verfügbar ist. Es ist auch für Bildschirmleser verfügbar.

#### HTML

Das folgende HTML erstellt ein Snippet von Inhalten einer Website, die das beschriebene Symbol verwendet. Beachten Sie die Verwendung des `alt`-Attributs auf dem {{HTMLElement("img")}}, das eine gute Ersatzzeichenkette bereitstellt, falls das Bild nicht lädt.

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

Das Hauptmerkmal des CSS hier ist die Verwendung von {{cssxref("clip-path")}} und {{cssxref("shape-outside")}}, um den Text ansprechend um das Symbol anzuordnen.

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
    16px "Helvetica",
    "Arial",
    sans-serif;
}
```

#### Ergebnis

{{EmbedLiveSample("Icons_or_logos", 640,400)}}

### Andere Bilder

Bilder mit Objekten oder Szenen sollten `alt`-Texte haben, die beschreiben, was im Bild zu sehen ist. Ein Foto einer gelben Teekanne könnte buchstäblich das `alt`-Attribut auf `"Eine gelbe Teekanne"` gesetzt haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
