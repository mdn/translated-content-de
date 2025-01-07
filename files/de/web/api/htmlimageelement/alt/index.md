---
title: "HTMLImageElement: alt-Eigenschaft"
short-title: alt
slug: Web/API/HTMLImageElement/alt
l10n:
  sourceCommit: 0f7aca64a81a5e9e97c232968f6acf435f8aafb6
---

{{APIRef("HTML DOM")}}

Die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Eigenschaft **`alt`** liefert alternativen Text, der angezeigt wird, wenn das im {{HTMLElement("img")}}-Element angegebene Bild nicht geladen wird.

Dies kann der Fall sein aufgrund eines Fehlers, weil der Benutzer das Laden von Bildern deaktiviert hat oder weil das Bild noch nicht fertig geladen ist.

Der vielleicht wichtigste Grund, die `alt`-Eigenschaft zu verwenden, ist die Unterstützung der [Barrierefreiheit](/de/docs/Web/Accessibility), da der `alt`-Text von Screenreadern und anderen unterstützenden Technologien genutzt werden kann, um Menschen mit Behinderungen zu helfen, Ihre Inhalte vollständig zu nutzen.
Er wird beispielsweise vorgelesen oder an ein Braille-Ausgabegerät gesendet, um blinde oder sehbehinderte Nutzer zu unterstützen.

> **Denken Sie daran:** Wenn Sie `alt`-Texte für Ihre Bilder auswählen, stellen Sie sich vor, was Sie sagen würden, wenn Sie die Seite jemandem am Telefon vorlesen, ohne zu erwähnen, dass sich ein Bild auf der Seite befindet.

Der alternative Text wird im Bereich angezeigt, den das Bild einnehmen würde, und sollte das Bild ersetzen können, _ohne die Aussage der Seite zu ändern_.

## Wert

Ein String, der den alternativen Text enthält, der angezeigt wird, wenn das Bild nicht geladen ist oder von unterstützenden Geräten verwendet wird.

Das `alt`-Attribut ist offiziell obligatorisch; es sollte immer angegeben werden. Wenn das Bild keinen Ersatz erfordert (z. B. bei dekorativen Bildern oder unbedeutenden Hinweissymbolen), können Sie einen leeren String (`""`) angeben. Aus Kompatibilitätsgründen akzeptieren Browser im Allgemeinen ein Bild ohne `alt`-Attribut, aber Sie sollten sich angewöhnen, es zu verwenden.

## Verwendungshinweise

Die grundlegende Richtlinie für das `alt`-Attribut ist, dass der Alternativtext jedes Bildes das Bild ersetzen sollte, _ohne die Aussage der Seite zu verändern_. Sie sollten `alt` niemals für Text verwenden, der als Bildunterschrift oder Titel interpretiert werden könnte. Es gibt separate Attribute und Elemente, die dafür vorgesehen sind.

## Beispiele

Darüber hinaus gibt es weitere Richtlinien für die angemessene Verwendung von `alt`, die je nach Verwendungszweck des Bildes variieren. Diese sind in den folgenden Beispielen dargestellt.

### Dekorative Bilder

Bilder ohne semantische Bedeutung – wie solche, die rein dekorativ sind – oder von begrenztem Informationswert sollten ihr `alt`-Attribut auf den leeren String (`""`) setzen. Dies wird im folgenden Beispiel gezeigt.

#### HTML

Im HTML für dieses Beispiel, wie unten gezeigt, beinhaltet das {{HTMLElement("img")}}-Element die `alt`-Eigenschaft, wodurch das Bild keinen alternativen Text haben wird, da es ein dekoratives Detail ist.

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

Das CSS für dieses Beispiel legt die Stile für das Layout fest, wie im unten gezeigten Ergebnis dargestellt.

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

Wenn ein Bild als Schaltfläche verwendet wird (indem es als einziges sichtbares Kind eines {{HTMLElement("a")}}-Elements, das einen Hyperlink darstellt, dient), muss das `alt`-Attribut verwendet werden, um den Zweck der Schaltfläche zu vermitteln. Mit anderen Worten, es sollte derselbe Text sein, den Sie in einer textuellen Schaltfläche verwenden würden, um denselben Zweck zu erfüllen.

Zum Beispiel bietet in dem unten gezeigten HTML-Ausschnitt eine Symbolleiste, die Symbolbilder als Link-Beschriftungen verwendet, `alt`-Attribute für jedes Symbol an, um eine textuelle Beschriftung zu geben, die anstelle des Symbols verwendet werden kann, wenn die Symbole nicht verwendet werden können oder bewusst nicht verwendet werden wollen.

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

Wenn ein Bild Informationen in Form eines Diagramms, einer Grafik, eines Schaubilds oder einer Karte enthält, sollte der `alt`-Text dieselben Informationen, zumindest in zusammengefasster Form, liefern. Dies gilt unabhängig davon, ob das Bild in einem Rasterformat wie [PNG](/de/docs/Web/Media/Formats/Image_types#png_portable_network_graphics) oder [JPEG](/de/docs/Web/Media/Formats/Image_types#jpeg_joint_photographic_experts_group_image) oder in einem Vektorformat wie [SVG](/de/docs/Web/Media/Formats/Image_types#svg_scalable_vector_graphics) vorliegt.

- Für eine Karte könnte der `alt`-Text eine Wegbeschreibung zu dem durch die Karte angezeigten Ort sein, ähnlich wie Sie es mündlich erklären würden.
- Für ein Diagramm könnte der Text die Elemente im Diagramm und ihre Werte beschreiben.
- Für ein Schaubild könnte der Text eine Erklärung des im Schaubild dargestellten Konzepts sein.

Denken Sie daran, dass jeder Text, der in Diagrammen und Schaubildern im {{Glossary("SVG", "SVG")}}-Format enthalten ist, von Screenreadern gelesen werden kann. Dies kann die Entscheidungen beeinflussen, die Sie beim Schreiben des `alt`-Texts für das Diagramm treffen.

### Symbole oder Logos

Logos (wie Unternehmens- oder Markenlogos) und Informationssymbole sollten den entsprechenden Text in ihren `alt`-Strings verwenden. Das heißt, wenn ein Bild ein Unternehmenslogo ist, sollte der `alt`-Text der Name des Unternehmens sein. Wenn das Bild ein Symbol darstellt, das einen Status oder andere Informationen repräsentiert, sollte der Text der Name dieses Status sein.

Zum Beispiel, wenn ein Bild ein Abzeichen ist, das auf einer Seite angezeigt wird, um darauf hinzuweisen, dass der Inhalt der Seite neu ist und kürzlich aktualisiert wurde, könnte der entsprechende `alt`-Text `"Kürzlich aktualisiert"` oder sogar `"Aktualisiert am 27. August 2019"` sein.

In diesem Beispiel wird ein Sternbild mit dem Wort "Neu!" verwendet, um darauf hinzuweisen, dass ein Artikel über etwas Neues (und wahrscheinlich auch Aufregendes) handelt. Das `alt`-Attribut wird auf `Neue Seite!` gesetzt, um diesen Text anstelle des Bildes anzuzeigen, falls das Bild nicht verfügbar ist. Es ist auch verfügbar, um von Screenreadern gelesen zu werden.

#### HTML

Das untenstehende HTML erstellt ein Inhaltsfragment einer Seite, das das beschriebene Symbol verwendet. Beachten Sie die Verwendung des `alt`-Attributs im {{HTMLElement("img")}}, das einen guten Ersatzstring bereitstellt, der im Fall des Nichtladens des Bildes verwendet werden kann.

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

Das Hauptmerkmal des hier verwendeten CSS ist der Einsatz von {{cssxref("clip-path")}} und {{cssxref("shape-outside")}}, um den Text ansprechend um das Symbol herum zu platzieren.

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

Bilder, die Objekte oder Szenen zeigen, sollten `alt`-Text haben, der beschreibt, was auf dem Bild zu sehen ist. Ein Foto einer gelben Teekanne könnte buchstäblich sein `alt`-Attribut auf `"Eine gelbe Teekanne"` setzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
