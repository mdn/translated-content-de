---
title: "HTMLImageElement: alt-Eigenschaft"
short-title: alt
slug: Web/API/HTMLImageElement/alt
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{APIRef("HTML DOM")}}

Die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Eigenschaft **`alt`** liefert Ersatztext (Alternativtext), der angezeigt wird, wenn das Bild, das durch das {{HTMLElement("img")}}-Element angegeben ist, nicht geladen wird.

Dies kann aufgrund eines Fehlers der Fall sein, weil der Benutzer das Laden von Bildern deaktiviert hat oder weil das Bild noch nicht geladen ist.

Der vielleicht wichtigste Grund für die Verwendung der `alt`-Eigenschaft ist die Unterstützung der [Barrierefreiheit](/de/docs/Web/Accessibility), da der `alt`-Text von Bildschirmlesegeräten und anderen unterstützenden Technologien verwendet werden kann, um Menschen mit Behinderungen die uneingeschränkte Nutzung Ihrer Inhalte zu ermöglichen.
Er wird vorgelesen oder an ein Braille-Ausgabegerät gesendet, um beispielsweise blinde oder sehbehinderte Nutzer zu unterstützen.

> **Stellen Sie sich das so vor:** Wenn Sie `alt`-Texte für Ihre Bilder auswählen, überlegen Sie, was Sie sagen würden, wenn Sie jemandem die Seite am Telefon vorlesen, ohne zu erwähnen, dass auf der Seite ein Bild vorhanden ist.

Der Alternativtext wird in dem Raum angezeigt, den das Bild einnehmen würde, und sollte in der Lage sein, das Bild _zu ersetzen, ohne die Bedeutung der Seite zu verändern_.

## Wert

Ein String, der den Alternativtext enthält, der angezeigt wird, wenn das Bild nicht geladen ist oder von unterstützenden Geräten verwendet wird.

Das `alt`-Attribut ist offiziell obligatorisch; es sollte immer angegeben sein.
Wenn das Bild keinen Ersatz erfordert (zum Beispiel bei einem Bild, das dekorativ oder ein unbedeutendes Warnsymbol ist), kann ein leerer String (`""`) angegeben werden.
Aus Gründen der Kompatibilität akzeptieren Browser im Allgemeinen ein Bild ohne `alt`-Attribut, aber Sie sollten sich angewöhnen, es zu verwenden.

## Verwendungshinweise

Die grundlegende Richtlinie für das `alt`-Attribut ist, dass der Alternativtext jedes Bildes in der Lage sein sollte, das Bild _zu ersetzen, ohne die Bedeutung der Seite zu verändern_. Sie sollten `alt` niemals für Texte verwenden, die als Beschriftung oder Titel verstanden werden könnten.
Es gibt separate Attribute und Elemente, die für diese Zwecke konzipiert sind.

## Beispiele

Darüber hinaus gibt es zusätzliche Richtlinien für die angemessene Verwendung von `alt`, die je nach Verwendung des Bildes variieren.
Diese sind in den folgenden Beispielen gezeigt.

### Dekorative Bilder

Bilder ohne semantische Bedeutung – wie solche, die rein dekorativ sind – oder von geringem Informationswert sollten ihre `alt`-Attribute auf den leeren String (`""`) gesetzt haben.
Dies wird im folgenden Beispiel gezeigt.

#### HTML

Im HTML für dieses Beispiel, das unten gezeigt wird, enthält das {{HTMLElement("img")}}-Element die `alt`-Eigenschaft, die verhindert, dass das Bild Alternativtext hat, da es sich um ein dekoratives Detail handelt.

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

Das CSS für dieses Beispiel legt die Stile für das Layout fest, wie unten im Ergebnis gezeigt.

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
Mit anderen Worten, es sollte derselbe Text sein, den Sie in einer Text-Schaltfläche verwenden würden, um denselben Zweck zu erfüllen.

Zum Beispiel, in dem unten gezeigten HTML-Snippet, stellt eine Symbolleiste, die Bildsymbole als Linkbeschriftungen verwendet, `alt`-Attribute bereit, die jedem Symbol eine Textbezeichnung geben, die verwendet werden kann, wenn die Symbole nicht verwendet werden können oder absichtlich nicht verwendet werden.

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

### Bilder, die Diagramme oder Karten enthalten

Wenn ein Bild Informationen in Form eines Diagramms, Diagramms, einer Grafik oder Karte enthält, sollte der `alt`-Text dieselben Informationen, zumindest in zusammengefasster Form, bereitstellen.
Das gilt unabhängig davon, ob das Bild im Bitmap-Format wie [PNG](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) oder [JPEG](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image) oder im Vektorformat wie [SVG](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics) vorliegt.

- Für eine Karte könnte der `alt`-Text Wegbeschreibungen zu dem auf der Karte angegebenen Ort sein, ähnlich wie Sie es mündlich erklären würden.
- Für ein Diagramm könnte der Text die Elemente im Diagramm und deren Werte beschreiben.
- Für ein Diagramm könnte der Text eine Erklärung des im Diagramm dargestellten Konzepts sein.

Beachten Sie, dass jeder Text, der in Diagrammen und Grafiken im {{Glossary("SVG", "SVG")}}-Format enthalten ist, von Bildschirmlesegeräten gelesen werden kann.
Dies kann die Entscheidungen beeinflussen, die Sie beim Schreiben des `alt`-Texts für das Diagramm treffen.

### Symbole oder Logos

Logos (wie Unternehmens- oder Markenlogos) und Informationssymbole sollten den entsprechenden Text in ihren `alt`-Strings verwenden.
Das heißt, wenn ein Bild ein Unternehmenslogo ist, sollte der `alt`-Text der Name des Unternehmens sein.
Wenn das Bild ein Symbol ist, das einen Status oder andere Informationen darstellt, sollte der Text der Name dieses Zustands sein.

Zum Beispiel könnte ein Bild, das auf einer Seite gezeigt wird, um anzuzeigen, dass der Inhalt der Seite neu ist und kürzlich aktualisiert wurde, als zugehörigen `alt`-Text `"Kürzlich aktualisiert"` oder sogar `"Aktualisiert am 27. August 2019"` haben.

In diesem Beispiel wird ein Bild mit einem Ausrufezeichen mit dem Wort "Neu!" verwendet, um anzuzeigen, dass ein Artikel über etwas Neues (und wahrscheinlich auch Spannendes) handelt.
Das `alt`-Attribut ist auf `Neue Seite!` gesetzt, um diesen Text anstelle des Bildes anzuzeigen, wenn das Bild nicht verfügbar ist.
Es kann auch von Bildschirmlesegeräten gelesen werden.

#### HTML

Das folgende HTML erstellt einen Inhaltsausschnitt von einer Webseite, die das beschriebene Symbol verwendet.
Beachten Sie die Verwendung des `alt`-Attributs auf dem {{HTMLElement("img")}}, das eine gute Ersatzzeichenfolge bietet, falls das Bild nicht geladen wird.

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

Das Hauptmerkmal des hier verwendeten CSS ist die Nutzung von {{cssxref("clip-path")}} und {{cssxref("shape-outside")}}, um den Text auf ansprechende Weise um das Symbol herum zu fließen.

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

Bilder, die Objekte oder Szenen zeigen, sollten `alt`-Texte enthalten, die beschreiben, was auf dem Bild zu sehen ist.
Ein Foto einer gelben Teekanne könnte beispielsweise buchstäblich seinen `alt`-Attributwert auf `"Eine gelbe Teekanne"` setzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
