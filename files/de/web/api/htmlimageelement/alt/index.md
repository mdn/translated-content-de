---
title: "HTMLImageElement: alt-Eigenschaft"
short-title: alt
slug: Web/API/HTMLImageElement/alt
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("HTML DOM")}}

Die Eigenschaft **`alt`** des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) bietet einen alternativen Text, der angezeigt wird, wenn das durch das {{HTMLElement("img")}}-Element angegebene Bild nicht geladen wird.

Dies kann der Fall sein aufgrund eines Fehlers, weil der Benutzer das Laden von Bildern deaktiviert hat oder weil das Bild noch nicht vollständig geladen wurde.

Der vielleicht wichtigste Grund für die Verwendung der `alt`-Eigenschaft ist die Unterstützung der [Barrierefreiheit](/de/docs/Web/Accessibility), da der `alt`-Text von Screenreadern und anderen unterstützenden Technologien genutzt werden kann, um Menschen mit Behinderungen zu helfen, Ihre Inhalte vollumfänglich zu nutzen.
Er wird beispielsweise laut vorgelesen oder an ein Braille-Ausgabegerät gesendet, um blinde oder sehbehinderte Benutzer zu unterstützen.

> **Stellen Sie sich das so vor:** Wenn Sie `alt`-Strings für Ihre Bilder auswählen, stellen Sie sich vor, was Sie sagen würden, wenn Sie die Seite jemandem am Telefon vorlesen, ohne zu erwähnen, dass sich ein Bild auf der Seite befindet.

Der alternative Text wird in dem Bereich angezeigt, den das Bild einnehmen würde, und sollte in der Lage sein, das Bild zu ersetzen, _ohne die Bedeutung der Seite zu verändern_.

## Wert

Ein String, der den alternativen Text enthält, der angezeigt wird, wenn das Bild nicht geladen wird oder zur Verwendung durch unterstützende Geräte.

Das `alt`-Attribut ist offiziell obligatorisch; es soll immer angegeben werden.
Wenn das Bild keinen alternativen Text benötigt (zum Beispiel bei einem dekorativen Bild oder einem Hinweis-Icon von geringer Bedeutung), können Sie einen leeren String (`""`) angeben.
Aus Kompatibilitätsgründen akzeptieren Browser generell ein Bild ohne `alt`-Attribut, aber Sie sollten versuchen, sich an die Verwendung zu gewöhnen.

## Hinweise zur Verwendung

Die grundlegende Richtlinie für das `alt`-Attribut ist, dass der alternative Text jedes Bildes das Bild ersetzen können sollte, _ohne die Bedeutung der Seite zu verändern_. Sie sollten `alt` niemals für Text verwenden, der als Beschriftung oder Titel missverstanden werden könnte.
Für diese Zwecke gibt es separate Attribute und Elemente.

## Beispiele

Darüber hinaus gibt es zusätzliche Richtlinien für die angemessene Verwendung von `alt`, die je nach Verwendungszweck des Bildes variieren.
Diese sind in den folgenden Beispielen gezeigt.

### Dekorative Bilder

Bilder ohne semantische Bedeutung – wie solche, die ausschließlich dekorativ sind – oder von begrenztem Informationswert sollten ihre `alt`-Attribute auf den leeren String (`""`) setzen.
Dies wird im folgenden Beispiel gezeigt.

#### HTML

Im HTML für dieses Beispiel, das unten gezeigt wird, enthält das {{HTMLElement("img")}}-Element die `alt`-Eigenschaft, die verhindert, dass das Bild einen alternativen Text hat, da es sich um ein dekoratives Detail handelt.

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

Der CSS-Code für dieses Beispiel richtet die Stile für das Layout ein, wie im folgenden Ergebnis gezeigt.

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

Wenn ein Bild als Schaltfläche verwendet wird (indem es als einziges sichtbares Kind eines {{HTMLElement("a")}}-Elements verwendet wird, das einen Hyperlink darstellt), muss das `alt`-Attribut verwendet werden, um den Zweck der Schaltfläche zu vermitteln.
Mit anderen Worten, es sollte derselbe Text sein, den Sie in einer Textschaltfläche verwenden würden, um denselben Zweck zu erfüllen.

Zum Beispiel in dem HTML-Snippet unten, eine Symbolleiste, die Symbolbilder als Linkbeschriftungen verwendet, bietet `alt`-Attribute für jedes, um eine textliche Beschriftung zu geben, die anstelle des Symbols verwendet werden kann, wenn die Symbole nicht verwendet werden können oder absichtlich nicht genutzt werden.

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

Wenn ein Bild Informationen in Form eines Diagramms, einer Tabelle, eines Grafiks oder einer Karte enthält, sollte der `alt`-Text dieselben Informationen bereitstellen, zumindest in zusammengefasster Form.
Dies gilt unabhängig davon, ob das /me Bild im pixelbasierten Format wie [PNG](/de/docs/Web/Media/Formats/Image_types#png_portable_network_graphics) oder [JPEG](/de/docs/Web/Media/Formats/Image_types#jpeg_joint_photographic_experts_group_image) oder im Vektorformat wie [SVG](/de/docs/Web/Media/Formats/Image_types#svg_scalable_vector_graphics) vorliegt.

- Für eine Karte könnte der `alt`-Text Wegbeschreibungen zu dem von der Karte angezeigten Ort enthalten, ähnlich wie Sie es mündlich erklären würden.
- Für eine Tabelle könnte der Text die Elemente in der Tabelle und ihre Werte beschreiben.
- Für ein Diagramm könnte der Text eine Erklärung des vom Diagramm dargestellten Konzepts sein.

Bedenken Sie, dass jeder Text, der in Diagrammen und Tabellen im {{Glossary("SVG", "SVG")}}-Format enthalten ist, von Screenreadern gelesen werden kann.
Dies kann die Entscheidungen beeinflussen, die Sie beim Schreiben des `alt`-Texts für das Diagramm treffen.

### Symbole oder Logos

Logos (wie Unternehmens- oder Markenlogos) und Information Symbole sollten in ihren `alt`-Strings den entsprechenden Text verwenden.
Das heißt, wenn ein Bild ein Unternehmenslogo ist, sollte der `alt`-Text der Name des Unternehmens sein.
Wenn das Bild ein Symbol ist, das einen Status oder andere Informationen darstellt, sollte der Text der Name dieses Zustands sein.

Zum Beispiel, wenn ein Bild ein Abzeichen ist, das auf einer Seite angezeigt wird, um anzugeben, dass der Inhalt der Seite neu ist und kürzlich aktualisiert wurde, könnte der entsprechende `alt`-Text `"Kürzlich aktualisiert"` oder sogar `"Aktualisiert am 27. August 2019"` sein.

In diesem Beispiel wird ein Bild mit Sternenexplosion und dem Wort "Neu!" verwendet, um anzuzeigen, dass ein Artikel über etwas Neues (und wahrscheinlich auch Aufregendes) ist.
Das `alt`-Attribut wird auf `Neue Seite!` gesetzt, um diesen Text anstelle des Bildes anzuzeigen, wenn das Bild nicht verfügbar ist.
Er ist auch für Screenreader lesbar.

#### HTML

Das unten angezeigte HTML erstellt ein Inhaltssnippet von einer Website, die das beschriebene Symbol verwendet.
Beachten Sie die Verwendung des `alt`-Attributs auf dem {{HTMLElement("img")}}, das eine gute Ersatzzeichenfolge bereitstellt, falls das Bild nicht geladen wird.

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

Die Hauptfunktion des CSS hier ist die Verwendung von {{cssxref("clip-path")}} und {{cssxref("shape-outside")}}, um den Text auf ansprechende Weise um das Symbol herum zu legen.

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

#### Ergebnis

{{EmbedLiveSample("Icons_or_logos", 640,400)}}

### Andere Bilder

Bilder, die Objekte oder Szenen zeigen, sollten `alt`-Text enthalten, der beschreibt, was im Bild zu sehen ist.
Ein Foto einer gelben Teekanne könnte buchstäblich sein `alt`-Attribut auf `"Eine gelbe Teekanne"` setzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
