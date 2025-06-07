---
title: "<source>: Das Media- oder Bildquellenelement"
slug: Web/HTML/Reference/Elements/source
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{HTMLSidebar}}

Das **`<source>`** [HTML](/de/docs/Web/HTML) Element spezifiziert eine oder mehrere Medienressourcen für die {{HTMLElement("picture")}}, {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elemente. Es ist ein {{Glossary("void_element", "void element")}}, was bedeutet, dass es keinen Inhalt hat und kein Schlusstag benötigt. Dieses Element wird häufig verwendet, um denselben Medieninhalt in mehreren Dateiformaten anzubieten, um Kompatibilität mit einer breiten Palette von Browsern zu gewährleisten, die unterschiedliche Unterstützung für [Bilddateiformate](/de/docs/Web/Media/Guides/Formats/Image_types) und [Mediendateiformate](/de/docs/Web/Media/Guides/Formats) bieten.

{{InteractiveExample("HTML Demo: &lt;source&gt;", "tabbed-standard")}}

```html interactive-example
<video controls width="250" height="200" muted>
  <source src="/shared-assets/videos/flower.webm" type="video/webm" />
  <source src="/shared-assets/videos/flower.mp4" type="video/mp4" />
  Download the
  <a href="/shared-assets/videos/flower.webm">WEBM</a>
  or
  <a href="/shared-assets/videos/flower.mp4">MP4</a>
  video.
</video>
```

## Attribute

Dieses Element unterstützt alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes). Zusätzlich können die folgenden Attribute verwendet werden:

- `type`

  - : Gibt den [MIME-Medientyp des Bildes](/de/docs/Web/Media/Guides/Formats/Image_types) oder [anderen Medientyps](/de/docs/Web/Media/Guides/Formats/Containers) an, optional einschließlich eines [`codecs` Parameters](/de/docs/Web/Media/Guides/Formats/codecs_parameter).

- `src`

  - : Gibt die URL der Medienressource an. Erforderlich, wenn das übergeordnete Element von `<source>` {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist. Nicht erlaubt, wenn das übergeordnete Element {{HTMLElement("picture")}} ist.

- `srcset`

  - : Gibt eine durch Kommas getrennte Liste von einem oder mehreren Bild-URLs und deren Beschreibungen an. Erforderlich, wenn das übergeordnete Element von `<source>` {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Die Liste besteht aus durch Kommas getrennten Zeichenfolgen, die eine Reihe möglicher Bilder für den Browser angeben. Jede Zeichenfolge besteht aus:

    - Einer URL, die den Speicherort eines Bildes angibt.
    - Einer optionalen Breitenbeschreibung - eine positive Ganzzahl, direkt gefolgt von `"w"`, wie `300w`.
    - Einer optionalen Pixeldichtbeschreibung - eine positive Fließkommazahl, direkt gefolgt von `"x"`, wie `2x`.

    Jede Zeichenfolge in der Liste muss entweder eine Breitenbeschreibung oder eine Pixeldichtbeschreibung haben, um gültig zu sein. Diese beiden Beschreibungen sollten nicht zusammen verwendet werden; nur eine sollte konsequent in der gesamten Liste verwendet werden. Der Wert jeder Beschreibung in der Liste muss einzigartig sein. Der Browser wählt das am besten geeignete Bild aus, das zu einem bestimmten Zeitpunkt angezeigt wird, basierend auf diesen Beschreibungen. Wenn die Beschreibungen nicht angegeben sind, wird der Standardwert `1x` verwendet. Wenn das `sizes`-Attribut ebenfalls vorhanden ist, muss jede Zeichenfolge eine Breitenbeschreibung enthalten. Wenn der Browser `srcset` nicht unterstützt, wird `src` für die Standardbildquelle verwendet.

- `sizes`

  - : Gibt eine Liste von Quellgrößen an, die die endgültige gerenderte Breite des Bildes beschreiben. Erlaubt, wenn das übergeordnete Element von `<source>` {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Die Liste besteht aus durch Kommas getrennten Quellgrößen. Jede Quellgröße ist ein Medientyp-Längenpaar. Bevor der Browser die Seite darstellt, verwendet er diese Informationen, um zu bestimmen, welches Bild, das in [`srcset`](#srcset) definiert ist, angezeigt werden soll. Beachten Sie, dass `sizes` nur wirksam wird, wenn Breitenangaben mit `srcset` bereitgestellt werden, nicht Pixeldichteangaben (d.h. `200w` sollte anstelle von `2x` verwendet werden).

- `media`

  - : Gibt die [Medienabfrage](/de/docs/Web/CSS/CSS_media_queries) für das beabsichtigte Medium der Ressource an.

- `height`

  - : Gibt die intrinsische Höhe des Bildes in Pixeln an. Erlaubt, wenn das übergeordnete Element von `<source>` ein {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Der Höhenwert muss eine Ganzzahl ohne Einheiten sein.

- `width`

  - : Gibt die intrinsische Breite des Bildes in Pixeln an. Erlaubt, wenn das übergeordnete Element von `<source>` ein {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Der Breitenwert muss eine Ganzzahl ohne Einheiten sein.

## Verwendungshinweise

Das `<source>` Element ist ein **{{Glossary("void_element", "void element")}}**, was bedeutet, dass es nicht nur keinen Inhalt hat, sondern auch kein Schlusstag. Das heißt, Sie verwenden _niemals_ `</source>` in Ihrem HTML.

Der Browser geht durch eine Liste von `<source>` Elementen, um ein unterstütztes Format zu finden. Er verwendet das erste, das er anzeigen kann. Für jedes `<source>` Element:

- Wenn das `type`-Attribut nicht angegeben ist, ruft der Browser den Medientyp vom Server ab und bestimmt, ob es angezeigt werden kann. Wenn das Medium nicht gerendert werden kann, überprüft der Browser das nächste `<source>` in der Liste.
- Wenn das `type`-Attribut angegeben ist, vergleicht der Browser es sofort mit den Medientypen, die er anzeigen kann. Wenn der Typ nicht unterstützt wird, überspringt der Browser die Anfrage an den Server und überprüft direkt das nächste `<source>` Element.

Wenn keines der `<source>` Elemente eine nutzbare Quelle bereitstellt:

- Im Fall eines `<picture>` Elements wird der Browser auf das Bild zurückgreifen, das im {{HTMLElement("img")}} Kind des `<picture>` Elements angegeben ist.
- Im Fall eines `<audio>` oder `<video>` Elements wird der Browser dazu übergehen, den zwischen den öffnenden und schließenden Tags des Elements enthaltenen Inhalt anzuzeigen.

Für Informationen zu von Webbrowsern unterstützten Bildformaten und Anleitungen zur Auswahl geeigneter Formate, lesen Sie unseren [Leitfaden zu Bilddateitypen und Formaten](/de/docs/Web/Media/Guides/Formats/Image_types). Für Details zu den Video- und Audio-Medientypen, die Sie verwenden können, siehe den [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats).

## Beispiele

### Verwendung des `type` Attributs mit `<video>`

Dieses Beispiel zeigt, wie man ein Video in verschiedenen Formaten anbietet: WebM für Browser, die es unterstützen, Ogg für diejenigen, die Ogg unterstützen, und QuickTime für Browser, die QuickTime unterstützen. Sollte das `<audio>` oder `<video>` Element von dem Browser nicht unterstützt werden, wird stattdessen ein Hinweis angezeigt. Wenn der Browser das Element unterstützt, jedoch keines der angegebenen Formate, wird ein `error` Ereignis auf dem `<audio>` oder `<video>` Element ausgelöst und die standardmäßigen Mediensteuerungen (falls aktiviert) zeigen einen Fehler an. Für weitere Details zu den zu verwendenden Medientypen und ihrer Browserunterstützung, lesen Sie unseren [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats).

```html
<video controls>
  <source src="foo.webm" type="video/webm" />
  <source src="foo.ogg" type="video/ogg" />
  <source src="foo.mov" type="video/quicktime" />
  I'm sorry; your browser doesn't support HTML video.
</video>
```

### Verwendung des `media` Attributs mit `<video>`

Dieses Beispiel zeigt, wie Sie eine alternative Quelldatei für Viewports über einer bestimmten Breite anbieten können. Wenn die Browsing-Umgebung eines Nutzers die angegebene `media` Bedingung erfüllt, wird das zugeordnete `<source>` Element ausgewählt. Die Inhalte seines `src` Attributs werden dann angefordert und gerendert. Wenn die `media` Bedingung nicht übereinstimmt, wird der Browser zum nächsten `<source>` in der Liste übergehen. Die zweite `<source>` Option im folgenden Code hat keine `media` Bedingung, sodass sie für alle anderen Browsing-Kontexte ausgewählt wird.

```html
<video controls>
  <source src="foo-large.webm" media="(min-width: 800px)" />
  <source src="foo.webm" />
  I'm sorry; your browser doesn't support HTML video.
</video>
```

Für weitere Beispiele ist der Artikel [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) im Bereich "Lernen" eine großartige Ressource.

### Verwendung des `media` Attributs mit `<picture>`

In diesem Beispiel sind zwei `<source>` Elemente innerhalb {{HTMLElement("picture")}} enthalten, die Versionen eines Bildes bereitstellen, die verwendet werden sollen, wenn der verfügbare Platz bestimmte Breiten überschreitet. Wenn die verfügbare Breite kleiner ist als die kleinste dieser Breiten, wird der Browser auf das im {{HTMLElement("img")}} Element angegebene Bild zurückgreifen.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(min-width: 800px)" />
  <source srcset="mdn-logo-medium.png" media="(min-width: 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN Web Docs" />
</picture>
```

Mit dem `<picture>` Element müssen Sie immer ein `<img>` mit einem Ersatzbild einfügen. Achten Sie auch darauf, ein `alt` Attribut für die Barrierefreiheit hinzuzufügen, es sei denn, das Bild ist rein dekorativ und irrelevant für den Inhalt.

### Verwendung der Attribute `height` und `width` mit `<picture>`

In diesem Beispiel sind drei `<source>` Elemente mit `height` und `width` Attributen in einem {{HTMLElement("picture")}} Element enthalten. Eine [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) ermöglicht es dem Browser, basierend auf der {{Glossary("Viewport", "Viewport")}} Größe ein anzuzeigendes Bild mit den `height` und `width` Attributen auszuwählen.

```html
<picture>
  <source
    srcset="landscape.png"
    media="(min-width: 1000px)"
    width="1000"
    height="400" />
  <source
    srcset="square.png"
    media="(min-width: 800px)"
    width="800"
    height="800" />
  <source
    srcset="portrait.png"
    media="(min-width: 600px)"
    width="600"
    height="800" />
  <img
    src="fallback.png"
    alt="Image used when the browser does not support the sources"
    width="500"
    height="400" />
</picture>
```

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "void element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf kein Schlusstag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        <div>
          Ein Medienelement—{{HTMLElement("audio")}} oder
          {{HTMLElement("video")}}—und es muss vor jedem
          <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
            >Flussinhalt</a
          >
          oder {{HTMLElement("track")}} Element platziert werden.
        </div>
        <div>
          Ein {{HTMLElement("picture")}} Element, und es muss
          vor dem {{HTMLElement("img")}} Element platziert werden.
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLSourceElement`](/de/docs/Web/API/HTMLSourceElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("audio")}} Element
- {{HTMLElement("picture")}} Element
- {{HTMLElement("video")}} Element
- [Leitfaden zu Bilddateitypen und Formaten](/de/docs/Web/Media/Guides/Formats/Image_types)
- [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats)
- [Web-Performance](/de/docs/Learn_web_development/Extensions/Performance)
