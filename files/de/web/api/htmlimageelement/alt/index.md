---
title: "HTMLImageElement: alt-Eigenschaft"
short-title: alt
slug: Web/API/HTMLImageElement/alt
l10n:
  sourceCommit: 75d3108eaade9d64de3ece87258c946b9bf13068
---

{{APIRef("HTML DOM")}}

Die **`alt`**-Eigenschaft des {{domxref("HTMLImageElement")}} bietet einen alternativen Text, der angezeigt wird, wenn das Bild, das durch das {{HTMLElement("img")}}-Element spezifiziert wird, nicht geladen wird.

Dies kann der Fall sein aufgrund eines Fehlers, weil der Benutzer das Laden von Bildern deaktiviert hat oder weil das Bild noch nicht vollständig geladen ist.

Der vielleicht wichtigste Grund, die `alt`-Eigenschaft zu verwenden, ist die Unterstützung der [Barrierefreiheit](/de/docs/Web/Accessibility), da der `alt`-Text von Bildschirmleseprogrammen und anderen unterstützenden Technologien verwendet werden kann, um Menschen mit Behinderungen die vollständige Nutzung Ihrer Inhalte zu ermöglichen. Er wird beispielsweise vorgelesen oder an ein Braille-Ausgabegerät gesendet, um blinde oder sehbehinderte Nutzer zu unterstützen.

> **Denken Sie daran:** Wenn Sie `alt`-Zeichenfolgen für Ihre Bilder auswählen, stellen Sie sich vor, wie Sie die Seite jemandem am Telefon vorlesen würden, ohne zu erwähnen, dass ein Bild auf der Seite ist.

Der alternative Text wird im Raum angezeigt, den das Bild einnehmen würde, und sollte das Bild _ersetzen können, ohne die Bedeutung der Seite zu ändern_.

## Wert

Ein String, der den alternativen Text enthält, der angezeigt wird, wenn das Bild nicht geladen wird oder von unterstützenden Geräten verwendet wird.

Das `alt`-Attribut ist offiziell obligatorisch; es sollte immer angegeben werden. Wenn das Bild keine Alternative benötigt (wie bei einem rein dekorativen Bild oder einem unwichtigen Hinweis-Symbol), können Sie einen leeren String (`""`) angeben. Aus Kompatibilitätsgründen akzeptieren Browser im Allgemeinen ein Bild ohne `alt`-Attribut, aber Sie sollten sich angewöhnen, es zu verwenden.

## Verwendungshinweise

Die grundlegende Richtlinie für das `alt`-Attribut ist, dass der alternative Text eines jeden Bildes das Bild _ersetzen können sollte, ohne die Bedeutung der Seite zu ändern_. Sie sollten `alt` niemals für Text verwenden, der als Beschriftung oder Titel angesehen werden könnte. Es gibt separate Attribute und Elemente, die für diese Zwecke vorgesehen sind.

## Beispiele

Darüber hinaus gibt es zusätzliche Richtlinien für die geeignete Verwendung von `alt`, die je nach Zweck des Bildes variieren. Diese werden in den unten stehenden Beispielen gezeigt.

### Dekorative Bilder

Bilder ohne semantische Bedeutung - wie solche, die rein dekorativ sind - oder von geringem Informationswert sollten ihre `alt`-Attribute auf den leeren String (`""`) setzen. Dies wird im unten dargestellten Beispiel gezeigt.

#### HTML

Im unten gezeigten HTML für dieses Beispiel enthält das {{HTMLElement("img")}}-Element die `alt`-Eigenschaft, was verhindert, dass das Bild einen alternativen Text hat, da es sich um ein dekoratives Detail handelt.

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

Das CSS dieses Beispiels legt die Stile für das Layout fest, wie im unten dargestellten Ergebnis gezeigt.

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

#### Resultat

{{EmbedLiveSample("Decorative_images", 600, 500)}}

### Bilder, die als Schaltflächen verwendet werden

Wenn ein Bild als Schaltfläche verwendet wird (indem es als einziges sichtbares Kind eines {{HTMLElement("a")}}-Elements verwendet wird, das einen Hyperlink darstellt), muss das `alt`-Attribut verwendet werden, um den Zweck der Schaltfläche zu vermitteln. Mit anderen Worten, es sollte der gleiche Text sein, den Sie in einer Textschaltfläche verwenden würden, um denselben Zweck zu erfüllen.

Zum Beispiel bietet ein in dem unten gezeigten HTML-Snippet dargestelltes Werkzeugleistenbeispiel, das Icon-Bilder als Linkbeschriftungen verwendet, `alt`-Attribute für jedes Bild, die eine Textbezeichnung als Ersatz für das Icon bieten, wenn die Icons nicht angezeigt werden können oder absichtlich nicht verwendet werden.

```html
<li class="toolbar" aria-role="toolbar">
  <a href="songs.html" aria-role="button">
    <img src="songicon.svg" alt="Songs" />
  </a>
  <a href="albums.html" aria-role="button">
    <img src="albumicon.svg" alt="Albums"
  /></a>
  <a href="artists.html" aria-role="button">
    <img src="artisticon.svg" alt="Artists" />
  </a>
  <a href="playlists.html" aria-role="button">
    <img src="playlisticon.svg" alt="Playlists" />
  </a>
</li>
```

### Bilder, die Diagramme oder Karten enthalten

Wenn ein Bild Informationen als Diagramm, Tabelle, Grafik oder Karte präsentiert, sollte der `alt`-Text dieselben Informationen, zumindest in zusammengefasster Form, liefern. Dies gilt unabhängig davon, ob das Bild in einem Bitmap-Format wie [PNG](/de/docs/Web/Media/Formats/Image_types#png_portable_network_graphics) oder [JPEG](/de/docs/Web/Media/Formats/Image_types#jpeg_joint_photographic_experts_group_image) oder in einem Vektorformat wie [SVG](/de/docs/Web/Media/Formats/Image_types#svg_scalable_vector_graphics) vorliegt.

- Für eine Karte könnte der `alt`-Text Anweisungen zu dem durch die Karte angegebenen Ort enthalten, ähnlich wie Sie es mündlich erklären würden.
- Für ein Diagramm könnte der Text die Elemente im Diagramm und ihre Werte beschreiben.
- Für ein Schaubild könnte der Text eine Erklärung des durch das Diagramm dargestellten Konzepts sein.

Beachten Sie, dass jeder Text, der in Diagrammen und Charts im {{Glossary("SVG")}}-Format präsentiert wird, von Bildschirmlesegeräten gelesen werden kann. Dies kann Entscheidungen beeinflussen, die Sie beim Schreiben des `alt`-Textes für das Diagramm treffen.

### Icons oder Logos

Logos (wie Unternehmens- oder Markenlogos) und Informations-Icons sollten den entsprechenden Text in ihren `alt`-Zeichenfolgen verwenden. Das heißt, wenn ein Bild ein Unternehmenslogo ist, sollte der `alt`-Text der Name des Unternehmens sein. Wenn das Bild ein Icon ist, das einen Status oder andere Informationen darstellt, sollte der Text der Name dieses Status sein.

Zum Beispiel: Wenn ein Bild ein Abzeichen ist, das auf einer Seite angezeigt wird, um darauf hinzuweisen, dass der Inhalt der Seite neu und kürzlich aktualisiert wurde, könnte der entsprechende `alt`-Text "`Kürzlich aktualisiert`" oder sogar "`Aktualisiert am 27. August 2019`" lauten.

In diesem Beispiel wird ein Sternbild mit dem Wort "Neu!" verwendet, um anzuzeigen, dass ein Artikel über etwas Neues (und wahrscheinlich auch Spannendes) berichtet. Das `alt`-Attribut wird auf `Neue Seite!` gesetzt, um zu ermöglichen, dass dieser Text anstelle des Bildes angezeigt wird, wenn das Bild nicht verfügbar ist. Er kann auch von Bildschirmlesegeräten vorgelesen werden.

#### HTML

Das unten gezeigte HTML erstellt einen Inhaltsausschnitt einer Website, der das beschriebene Icon verwendet. Beachten Sie die Verwendung des `alt`-Attributs im {{HTMLElement("img")}}, das eine gute Ersatzzeichenfolge bietet, falls das Bild nicht geladen wird.

```html
<div class="container">
  <img
    src="https://www.bitstampede.com/mdn-test/new-page.svg"
    alt="New Page!"
    class="pageinfo-badge" />
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

Das wesentliche Merkmal des hier gezeigten CSS ist die Verwendung von {{cssxref("clip-path")}} und {{cssxref("shape-outside")}}, um den Text auf ansprechende Weise um das Icon zu legen.

```css
.container {
  max-width: 500px;
}

.pageinfo-badge {
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

#### Resultat

{{EmbedLiveSample("Icons_or_logos", 640,400)}}

### Andere Bilder

Bilder, die Objekte oder Szenen zeigen, sollten `alt`-Text haben, der beschreibt, was auf dem Bild zu sehen ist. Ein Foto einer gelben Teekanne könnte buchstäblich sein `alt`-Attribut auf "`Eine gelbe Teekanne`" gesetzt haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
