---
title: "<source>: Das Medien- oder Bildquellelement"
slug: Web/HTML/Reference/Elements/source
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<source>`** [HTML](/de/docs/Web/HTML) Element spezifiziert eine oder mehrere Medienressourcen für die {{HTMLElement("picture")}}, {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elemente. Es ist ein {{Glossary("void_element", "void-Element")}}, was bedeutet, dass es keinen Inhalt hat und keinen Schlusstag benötigt. Dieses Element wird häufig verwendet, um denselben Medieninhalt in mehreren Dateiformaten anzubieten, um die Kompatibilität mit einer breiten Palette von Browsern zu gewährleisten, angesichts deren unterschiedlicher Unterstützung für [Bilddateiformate](/de/docs/Web/Media/Guides/Formats/Image_types) und [Mediendateiformate](/de/docs/Web/Media/Guides/Formats).

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

Dieses Element unterstützt alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes). Zusätzlich können folgende Attribute verwendet werden:

- `type`

  - : Gibt den [MIME-Medientyp des Bildes](/de/docs/Web/Media/Guides/Formats/Image_types) oder [anderen Medientyps](/de/docs/Web/Media/Guides/Formats/Containers) an, optional einschließlich eines [`codecs` Parameters](/de/docs/Web/Media/Guides/Formats/codecs_parameter).

- `src`

  - : Gibt die URL der Medienressource an. Erforderlich, wenn der Elternteil von `<source>` {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist. Nicht erlaubt, wenn der Elternteil {{HTMLElement("picture")}} ist.

- `srcset`

  - : Gibt eine kommagetrennte Liste von einem oder mehreren Bild-URLs und deren Beschreibungen an. Erforderlich, wenn der Elternteil von `<source>` {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn der Elternteil {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Die Liste besteht aus durch Kommas getrennten Zeichenfolgen, die eine Reihe von möglichen Bildern für den Browser angeben. Jede Zeichenfolge besteht aus:

    - Einer URL, die den Speicherort eines Bildes angibt.
    - Einem optionalen Breitenbeschreiber - eine positive ganze Zahl, gefolgt von `"w"`, wie `300w`.
    - Einem optionalen Pixeldichte-Beschreiber - eine positive Fließkommazahl, gefolgt von `"x"`, wie `2x`.

    Jede Zeichenfolge in der Liste muss einen Breitenbeschreiber oder einen Pixeldichte-Beschreiber haben, um gültig zu sein. Diese beiden Beschreiber sollten nicht zusammen verwendet werden; nur einer sollte konsistent über die gesamte Liste hinweg verwendet werden. Der Wert jedes Beschreibers in der Liste muss eindeutig sein. Der Browser wählt das geeignetste Bild zur Anzeige zu einem bestimmten Zeitpunkt basierend auf diesen Beschreibern aus. Wenn die Beschreiber nicht angegeben werden, wird standardmäßig `1x` verwendet. Wenn das `sizes` Attribut ebenfalls vorhanden ist, muss jede Zeichenfolge einen Breitenbeschreiber enthalten. Wenn der Browser `srcset` nicht unterstützt, wird `src` für die Standard-Bildquelle verwendet.

- `sizes`

  - : Gibt eine Liste von Quellgrößen an, die die endgültige gerenderte Breite des Bildes beschreiben. Erlaubt, wenn der Elternteil von `<source>` {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn der Elternteil {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Die Liste besteht aus Quellgrößen, die durch Kommas getrennt sind. Jede Quellgröße ist ein Paar aus Medienbedingung und Länge. Bevor die Seite dargestellt wird, verwendet der Browser diese Informationen, um zu bestimmen, welches Bild aus [`srcset`](#srcset) angezeigt wird. Beachten Sie, dass `sizes` nur wirksam wird, wenn Breitenbeschreiber bei `srcset` angegeben werden, nicht Pixeldichte-Beschreiber (d.h. `200w` sollte anstelle von `2x` verwendet werden).

- `media`

  - : Bestimmt die [Media Query](/de/docs/Web/CSS/CSS_media_queries) für das geplante Medium der Ressource.

- `height`

  - : Gibt die intrinsische Höhe des Bildes in Pixeln an. Erlaubt, wenn der Elternteil von `<source>` ein {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn der Elternteil {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Der Höhenwert muss eine ganze Zahl ohne Einheiten sein.

- `width`

  - : Gibt die intrinsische Breite des Bildes in Pixeln an. Erlaubt, wenn der Elternteil von `<source>` ein {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn der Elternteil {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Der Breitenwert muss eine ganze Zahl ohne Einheiten sein.

## Nutzungshinweise

Das `<source>` Element ist ein **{{Glossary("void_element", "void-Element")}}**, was bedeutet, dass es nicht nur keinen Inhalt, sondern auch keinen Schlusstag hat. Das heißt, Sie verwenden _nie_ `</source>` in Ihrem HTML.

Der Browser geht eine Liste von `<source>` Elementen durch, um ein unterstütztes Format zu finden. Er verwendet das erste, das er anzeigen kann. Für jedes `<source>` Element:

- Wenn das `type` Attribut nicht angegeben ist, ruft der Browser den Medientyp vom Server ab und bestimmt, ob es angezeigt werden kann. Wenn das Medium nicht gerendert werden kann, überprüft der Browser das nächste `<source>` in der Liste.
- Wenn das `type` Attribut angegeben ist, vergleicht der Browser es sofort mit den Medientypen, die er anzeigen kann. Wenn der Typ nicht unterstützt wird, überspringt der Browser die Abfrage des Servers und prüft direkt das nächste `<source>` Element.

Wenn keines der `<source>` Elemente eine nutzbare Quelle bietet:

- Im Fall eines `<picture>` Elements fällt der Browser auf das Bild zurück, das im {{HTMLElement("img")}} Kind des `<picture>` Elements angegeben ist.
- Im Fall eines `<audio>` oder `<video>` Elements fällt der Browser darauf zurück, den zwischen den Anfangs- und Endtags des Elements enthaltenen Inhalt anzuzeigen.

Für Informationen über von Webbrowsern unterstützte Bildformate und Anleitungen zur Auswahl geeigneter Formate, siehe unseren [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types). Für Details zu den Medien- und Video-Medientypen, die Sie verwenden können, siehe den [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats).

## Beispiele

### Verwendung des `type` Attributs mit `<video>`

Dieses Beispiel zeigt, wie ein Video in verschiedenen Formaten angeboten werden kann: WebM für Browser, die es unterstützen, Ogg für jene, die Ogg unterstützen, und QuickTime für Browser, die QuickTime unterstützen. Wenn das `<audio>` oder `<video>` Element vom Browser nicht unterstützt wird, wird stattdessen ein Hinweis angezeigt. Wenn der Browser das Element unterstützt, aber keines der angegebenen Formate unterstützt, wird ein `error` Ereignis auf dem `<audio>` oder `<video>` Element ausgelöst und die Standard-Mediensteuerungen (falls aktiviert) werden einen Fehler anzeigen. Für weitere Details zu den zu verwendenden Medien-Dateiformaten und deren Browser-Unterstützung verweisen wir auf unseren [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats).

```html
<video controls>
  <source src="foo.webm" type="video/webm" />
  <source src="foo.ogg" type="video/ogg" />
  <source src="foo.mov" type="video/quicktime" />
  I'm sorry; your browser doesn't support HTML video.
</video>
```

### Verwendung des `media` Attributs mit `<video>`

Dieses Beispiel zeigt, wie eine alternative Quelldatei für Viewports über einer bestimmten Breite angeboten werden kann. Wenn die Surfumgebung eines Benutzers die angegebene `media` Bedingung erfüllt, wird das zugehörige `<source>` Element gewählt. Die Inhalte seines `src` Attributs werden dann angefordert und gerendert. Wenn die `media` Bedingung nicht erfüllt ist, wird der Browser das nächste `<source>` in der Liste überprüfen. Die zweite `<source>` Option im folgenden Code hat keine `media` Bedingung, sodass sie für alle anderen Browserkontexte ausgewählt wird.

```html
<video controls>
  <source src="foo-large.webm" media="(min-width: 800px)" />
  <source src="foo.webm" />
  I'm sorry; your browser doesn't support HTML video.
</video>
```

Für mehr Beispiele ist der Artikel [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) im Lernbereich eine großartige Ressource.

### Verwendung des `media` Attributs mit `<picture>`

In diesem Beispiel sind zwei `<source>` Elemente innerhalb von {{HTMLElement("picture")}} enthalten, die Versionen eines Bildes liefern, die verwendet werden, wenn der verfügbare Raum bestimmte Breiten überschreitet. Wenn die verfügbare Breite kleiner als die kleinste dieser Breiten ist, wird der Browser auf das im {{HTMLElement("img")}} Element angegebene Bild zurückgreifen.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(min-width: 800px)" />
  <source srcset="mdn-logo-medium.png" media="(min-width: 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN Web Docs" />
</picture>
```

Mit dem `<picture>` Element müssen Sie immer ein `<img>` mit einem Fallback-Bild einfügen. Achten Sie auch darauf, ein `alt` Attribut für die Barrierefreiheit hinzuzufügen, es sei denn, das Bild ist rein dekorativ und für den Inhalt irrelevant.

### Verwendung von `height` und `width` Attributen mit `<picture>`

In diesem Beispiel sind drei `<source>` Elemente mit `height` und `width` Attributen in einem {{HTMLElement("picture")}} Element enthalten. Eine [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) ermöglicht es dem Browser, ein Bild anzuzeigen, das basierend auf der Größe des {{Glossary("Viewport", "Viewports")}} mit den `height` und `width` Attributen ausgewählt wird.

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
      <td>Kein; es ist ein {{Glossary("void_element", "void-Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss einen Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Elternteile</th>
      <td>
        <div>
          Ein Medienelement—{{HTMLElement("audio")}} oder
          {{HTMLElement("video")}}—und es muss vor jedem
          <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
            >Flussinhalt</a
          >
          oder {{HTMLElement("track")}} Element platziert sein.
        </div>
        <div>
          Ein {{HTMLElement("picture")}} Element, und es muss vor dem {{HTMLElement("img")}} Element platziert sein.
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
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
- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types)
- [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats)
- [Web-Performance](/de/docs/Learn_web_development/Extensions/Performance)
