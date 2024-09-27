---
title: "HTMLImageElement: alt-Eigenschaft"
short-title: alt
slug: Web/API/HTMLImageElement/alt
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("HTML DOM")}}

Die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Eigenschaft **`alt`** bietet einen alternativen Text, der angezeigt wird, wenn das durch das {{HTMLElement("img")}}-Element spezifizierte Bild nicht geladen wird.

Dies kann der Fall sein aufgrund eines Fehlers, weil der Benutzer das Laden von Bildern deaktiviert hat oder weil das Bild noch nicht vollständig geladen ist.

Der vielleicht wichtigste Grund, die `alt`-Eigenschaft zu verwenden, ist die Unterstützung der [Barrierefreiheit](/de/docs/Web/Accessibility), da der `alt`-Text von Bildschirmlesern und anderen unterstützenden Technologien verwendet werden kann, um Menschen mit Behinderungen zu helfen, Ihre Inhalte vollständig zu nutzen. Er wird laut vorgelesen oder an ein Braille-Ausgabegerät gesendet, um beispielsweise blinde oder sehbehinderte Benutzer zu unterstützen.

> **Denken Sie so darüber nach:** Wenn Sie `alt`-Texte für Ihre Bilder auswählen, stellen Sie sich vor, wie Sie die Seite jemandem am Telefon vorlesen würden, ohne zu erwähnen, dass sich auf der Seite ein Bild befindet.

Der alternative Text wird an der Stelle angezeigt, die das Bild einnehmen würde, und sollte das Bild ersetzen können, _ohne die Bedeutung der Seite zu verändern_.

## Wert

Ein String, der den alternativen Text enthält, der angezeigt wird, wenn das Bild nicht geladen wird oder für die Verwendung durch unterstützende Geräte.

Das `alt`-Attribut ist offiziell obligatorisch; es soll immer angegeben werden. Wenn das Bild keinen Ersatzt erforderlich macht (z.B. bei einem Bild, das dekorativ ist oder ein unbedeutendes Warnsymbol), kann ein leerer String (`""`) angegeben werden. Aus Kompatibilitätsgründen akzeptieren Browser im Allgemeinen ein Bild ohne `alt`-Attribut, aber Sie sollten sich angewöhnen, es zu verwenden.

## Nutzungshinweise

Die grundlegende Richtlinie für das `alt`-Attribut besagt, dass der alternative Text jedes Bildes das Bild ersetzen können sollte, _ohne die Bedeutung der Seite zu verändern_. Sie sollten `alt` niemals für Texte verwenden, die als Beschriftung oder Titel missverstanden werden könnten. Dafür gibt es separate Attribute und Elemente.

## Beispiele

Darüber hinaus gibt es zusätzliche Richtlinien für den angemessenen Gebrauch von `alt`, die je nach Verwendungszweck des Bildes variieren. Diese sind in den folgenden Beispielen dargestellt.

### Dekorative Bilder

Bilder ohne semantische Bedeutung – wie solche, die rein dekorativ sind – oder mit begrenztem Informationswert sollten in ihren `alt`-Attributen den leeren String (`""`) aufweisen. Dies wird im folgenden Beispiel gezeigt.

#### HTML

Im HTML für dieses Beispiel, wie unten gezeigt, enthält das {{HTMLElement("img")}}-Element die `alt`-Eigenschaft, die verhindert, dass das Bild einen alternativen Text hat, da es sich um ein dekoratives Detail handelt.

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

Das CSS für dieses Beispiel richtet die Layout-Stile ein, wie im unten stehenden Ergebnis gezeigt.

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

### Bilder als Schaltflächen

Wenn ein Bild als Schaltfläche genutzt wird (indem es das einzige sichtbare Kind eines {{HTMLElement("a")}}-Elements ist, das einen Hyperlink darstellt), muss das `alt`-Attribut verwendet werden, um den Zweck der Schaltfläche zu vermitteln. Mit anderen Worten, es sollte der gleiche Text sein, den Sie in einer textlichen Schaltfläche verwenden würden, um denselben Zweck zu erfüllen.

Beispielsweise in dem folgenden HTML-Ausschnitt bietet eine Symbolleiste, die Symbolbilder als Linkbeschriftungen verwendet, `alt`-Attribute, die jedem Symbol eine Textbezeichnung geben, die statt des Symbols verwendet wird, wenn die Symbole nicht genutzt werden können oder absichtlich nicht verwendet werden.

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

### Bilder mit Diagrammen oder Karten

Wenn ein Bild Informationen in Form eines Diagramms, Chart, Graphs oder einer Karte enthält, sollte der `alt`-Text dieselben Informationen bereitstellen, zumindest in zusammengefasster Form. Dies gilt unabhängig davon, ob das Bild in einem Bitmap-Format wie [PNG](/de/docs/Web/Media/Formats/Image_types#png_portable_network_graphics) oder [JPEG](/de/docs/Web/Media/Formats/Image_types#jpeg_joint_photographic_experts_group_image) vorliegt oder in einem Vektorformat wie [SVG](/de/docs/Web/Media/Formats/Image_types#svg_scalable_vector_graphics).

- Für eine Karte könnte der `alt`-Text Anweisungen zu dem von der Karte angezeigten Ort geben, ähnlich wie Sie es mündlich erklären würden.
- Für ein Diagramm könnte der Text die Artikel im Diagramm und ihre Werte beschreiben.
- Für ein Diagramm könnte der Text eine Erklärung des durch das Diagramm präsentierten Konzepts sein.

Beachten Sie, dass jeder Text, der in Diagrammen und Charts im [SVG](/de/docs/Glossary/SVG)-Format enthalten ist, von Bildschirmlesern gelesen werden kann. Dies kann sich auf die Entscheidungen auswirken, die Sie beim Schreiben des `alt`-Texts für das Diagramm treffen.

### Symbole oder Logos

Logos (wie Unternehmens- oder Markenlogos) und Informationssymbole sollten den entsprechenden Text in ihren `alt`-Strings verwenden. Das bedeutet, wenn ein Bild ein Unternehmenslogo ist, sollte der `alt`-Text der Name des Unternehmens sein. Wenn das Bild ein Symbol darstellt, das einen Status oder andere Informationen repräsentiert, sollte der Text der Name dieses Zustands sein.

Zum Beispiel, wenn ein Bild ein Abzeichen auf einer Seite ist, um anzuzeigen, dass der Inhalt der Seite neu ist und kürzlich aktualisiert wurde, könnte der entsprechende `alt`-Text `"Kürzlich aktualisiert"` oder sogar `"Aktualisiert am 27. August 2019"` lauten.

In diesem Beispiel wird ein Bild mit der Aufschrift "Neu!" verwendet, um anzuzeigen, dass ein Artikel über etwas Neues ist (und wahrscheinlich auch aufregend sein soll). Das `alt`-Attribut ist auf `New Page!` gesetzt, damit dieser Text anstelle des Bildes angezeigt wird, falls das Bild nicht verfügbar ist. Es steht auch Bildschirmlesern zur Verfügung.

#### HTML

Das unten stehende HTML erstellt einen Inhaltsauszug von einer Seite, die das beschriebene Symbol verwendet. Beachten Sie die Verwendung des `alt`-Attributs auf dem {{HTMLElement("img")}}, das einen guten Ersetzungstext bietet, falls das Bild nicht geladen wird.

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

Das Hauptmerkmal des CSS hier ist die Verwendung von {{cssxref("clip-path")}} und {{cssxref("shape-outside")}}, um den Text auf attraktive Weise um das Symbol zu wickeln.

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

Bilder, die Objekte oder Szenen zeigen, sollten einen `alt`-Text haben, der beschreibt, was im Bild zu sehen ist. Ein Foto einer gelben Teekanne könnte buchstäblich in seinem `alt`-Attribut als `"Eine gelbe Teekanne"` beschrieben werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
