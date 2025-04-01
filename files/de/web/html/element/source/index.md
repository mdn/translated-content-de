---
title: "<source>: Das Medien- oder Bildquellen-Element"
slug: Web/HTML/Element/source
l10n:
  sourceCommit: 2279e3961dcd0c70c5217e0db6611e405ecba5fe
---

{{HTMLSidebar}}

Das **`<source>`** [HTML](/de/docs/Web/HTML) Element spezifiziert eine oder mehrere Medienressourcen für die {{HTMLElement("picture")}}, {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elemente. Es handelt sich um ein {{Glossary("void_element", "leeres Element")}}, was bedeutet, dass es keinen Inhalt hat und kein End-Tag benötigt. Dieses Element wird häufig verwendet, um denselben Medieninhalt in mehreren Dateiformaten anzubieten, um die Kompatibilität mit einer Vielzahl von Browsern zu gewährleisten, die unterschiedliche Unterstützung für [Bilddateiformate](/de/docs/Web/Media/Guides/Formats/Image_types) und [Mediendateiformate](/de/docs/Web/Media/Guides/Formats) bieten.

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

Dieses Element unterstützt alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes). Darüber hinaus können die folgenden Attribute verwendet werden:

- `type`

  - : Gibt den [MIME-Medientyp des Bildes](/de/docs/Web/Media/Guides/Formats/Image_types) oder einen [anderen Medientyp](/de/docs/Web/Media/Guides/Formats/Containers) an, inklusive eines optionalen [`codecs` Parameters](/de/docs/Web/Media/Guides/Formats/codecs_parameter).

- `src`

  - : Gibt die URL der Medienressource an. Erforderlich, wenn das übergeordnete Element von `<source>` {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist. Nicht erlaubt, wenn das übergeordnete Element {{HTMLElement("picture")}} ist.

- `srcset`

  - : Gibt eine durch Kommas getrennte Liste von einer oder mehreren Bild-URLs und deren Beschreibungen an. Erforderlich, wenn das übergeordnete Element von `<source>` {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Die Liste besteht aus durch Kommas getrennten Zeichenfolgen, die eine Reihe möglicher Bilder für den Browser angeben. Jede Zeichenfolge besteht aus:

    - Einer URL, die einen Bildstandort angibt.
    - Einem optionalen Breitenbeschreiber—ein positiver Integer, gefolgt von `"w"`, wie `300w`.
    - Einem optionalen Pixeldichte-Beschreiber—eine positive Gleitkommazahl, gefolgt von `"x"`, wie `2x`.

    Jede Zeichenfolge in der Liste muss entweder einen Breitenbeschreiber oder einen Pixeldichte-Beschreiber haben, um gültig zu sein. Diese beiden Beschreiber sollten nicht zusammen verwendet werden; nur einer sollte konsistent in der Liste verwendet werden. Der Wert jedes Beschreibers in der Liste muss eindeutig sein. Der Browser wählt das am besten geeignete Bild aus, das zu einem bestimmten Zeitpunkt auf Grundlage dieser Beschreiber angezeigt wird. Wenn die Beschreiber nicht angegeben sind, wird der Standardwert `1x` verwendet. Wenn das `sizes`-Attribut ebenfalls vorhanden ist, muss jede Zeichenfolge einen Breitenbeschreiber enthalten. Wenn der Browser `srcset` nicht unterstützt, wird `src` als Standard-Bildquelle verwendet.

- `sizes`

  - : Gibt eine Liste von Quellgrößen an, die die endgültige gerenderte Breite des Bildes beschreiben. Erlaubt, wenn das übergeordnete Element von `<source>` {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Die Liste besteht aus Quellgrößen, die durch Kommas getrennt sind. Jede Quellgröße ist ein Medienkonditions-Längenpaar. Vor dem Layouten der Seite verwendet der Browser diese Informationen, um zu bestimmen, welches Bild aus [`srcset`](#srcset) angezeigt werden soll. Beachten Sie, dass `sizes` nur Wirkung zeigt, wenn Breitenbeschreiber mit `srcset` angegeben werden, nicht Pixeldichte-Beschreiber (d.h. `200w` sollte anstelle von `2x` verwendet werden).

- `media`

  - : Gibt die [Medienabfrage](/de/docs/Web/CSS/CSS_media_queries) für die beabsichtigten Medienressourcen an.

- `height`

  - : Gibt die intrinsische Höhe des Bildes in Pixel an. Erlaubt, wenn das übergeordnete Element von `<source>` ein {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Der Höhenwert muss ein Ganzzahlwert ohne Einheiten sein.

- `width`

  - : Gibt die intrinsische Breite des Bildes in Pixel an. Erlaubt, wenn das übergeordnete Element von `<source>` ein {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Der Breitenwert muss ein Ganzzahlwert ohne Einheiten sein.

## Nutzungshinweise

Das `<source>` Element ist ein **{{Glossary("void_element", "leeres Element")}}**, was bedeutet, dass es nicht nur keinen Inhalt hat, sondern auch keinen End-Tag besitzt. Das heißt, Sie verwenden _niemals_ `</source>` in Ihrem HTML.

Der Browser geht die Liste der `<source>` Elemente durch, um ein Format zu finden, das er unterstützt. Er verwendet das erste, das er anzeigen kann. Für jedes `<source>` Element gilt:

- Wenn das `type` Attribut nicht angegeben ist, ruft der Browser den Medientyp vom Server ab und bestimmt, ob es angezeigt werden kann. Wenn das Medium nicht gerendert werden kann, prüft der Browser das nächste `<source>` in der Liste.
- Wenn das `type` Attribut angegeben ist, vergleicht der Browser es sofort mit den Medientypen, die er anzeigen kann. Wenn der Typ nicht unterstützt wird, überspringt der Browser die Serverabfrage und überprüft direkt das nächste `<source>` Element.

Wenn keines der `<source>` Elemente eine verwendbare Quelle bereitstellt:

- Im Fall eines `<picture>` Elements fällt der Browser auf das im `<picture>` Element spezifizierte Bild im {{HTMLElement("img")}} Kind zurück.
- Im Fall eines `<audio>` oder `<video>` Elements fällt der Browser darauf zurück, den Inhalt anzuzeigen, der zwischen den Öffnungs- und Schlusstags des Elements enthalten ist.

Informationen zu den von Webbrowsern unterstützten Bildformaten sowie Empfehlungen zur Auswahl geeigneter Formate finden Sie in unserem [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types). Einzelheiten zu den Video- und Audiomediendateitypen, die Sie verwenden können, finden Sie im [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats).

## Beispiele

### Verwendung des `type` Attributs mit `<video>`

Dieses Beispiel zeigt, wie ein Video in verschiedenen Formaten angeboten werden kann: WebM für Browser, die es unterstützen, Ogg für diejenigen, die Ogg unterstützen, und QuickTime für Browser, die QuickTime unterstützen. Wenn das `<audio>` oder `<video>` Element vom Browser nicht unterstützt wird, wird stattdessen eine Benachrichtigung angezeigt. Wenn der Browser das Element unterstützt, aber keines der angegebenen Formate, wird ein `error`-Ereignis auf dem `<audio>` oder `<video>` Element ausgelöst, und die Standard-Mediensteuerungen (falls aktiviert) weisen auf einen Fehler hin. Weitere Details darüber, welche Mediendateiformate verwendet werden sollen und deren Browserunterstützung, finden Sie in unserem [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats).

```html
<video controls>
  <source src="foo.webm" type="video/webm" />
  <source src="foo.ogg" type="video/ogg" />
  <source src="foo.mov" type="video/quicktime" />
  I'm sorry; your browser doesn't support HTML video.
</video>
```

### Verwendung des `media` Attributs mit `<video>`

Dieses Beispiel zeigt, wie eine alternativen Quelldatei für Viewports über einer bestimmten Breite angeboten werden kann. Wenn die Browserumgebung des Benutzers die angegebene `media` Bedingung erfüllt, wird das zugehörige `<source>` Element ausgewählt. Die Inhalte seines `src` Attributs werden dann angefordert und gerendert. Wenn die `media` Bedingung nicht erfüllt wird, wählt der Browser das nächste `<source>` in der Liste aus. Die zweite `<source>` Option im folgenden Code hat keine `media` Bedingung, daher wird sie für alle anderen Browserkontexte ausgewählt.

```html
<video controls>
  <source src="foo-large.webm" media="(min-width: 800px)" />
  <source src="foo.webm" />
  I'm sorry; your browser doesn't support HTML video.
</video>
```

Weitere Beispiele finden Sie in dem Artikel [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) im Bereich "Lernen".

### Verwendung des `media` Attributs mit `<picture>`

In diesem Beispiel sind zwei `<source>` Elemente innerhalb von {{HTMLElement("picture")}} enthalten, die Versionen eines Bildes bereitstellen, die verwendet werden sollen, wenn der verfügbare Platz bestimmte Breiten überschreitet. Wenn die verfügbare Breite kleiner ist als die kleinste dieser Breiten, fällt der Browser auf das im {{HTMLElement("img")}} Element spezifizierte Bild zurück.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(min-width: 800px)" />
  <source srcset="mdn-logo-medium.png" media="(min-width: 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN Web Docs" />
</picture>
```

Beim Einsatz des `<picture>` Elements müssen Sie immer ein `<img>` mit einem Ersatzbild einbinden. Achten Sie auch darauf, ein `alt` Attribut für die Barrierefreiheit hinzuzufügen, es sei denn, das Bild ist rein dekorativ und für den Inhalt unerheblich.

### Verwendung der Attribute `height` und `width` mit `<picture>`

In diesem Beispiel sind drei `<source>` Elemente mit `height` und `width` Attributen in einem {{HTMLElement("picture")}} Element enthalten. Eine [Medienabfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) ermöglicht es dem Browser, basierend auf der Größe des {{Glossary("Viewport", "Viewports")}} ein Bild mit den `height` und `width` Attributen auszuwählen.

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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keine; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Ein Start-Tag muss vorhanden sein und ein End-Tag darf nicht vorhanden sein.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        <div>
          Ein Medienelement—{{HTMLElement("audio")}} oder
          {{HTMLElement("video")}}—und es muss vor jeglichem
          <a href="/de/docs/Web/HTML/Content_categories#flow_content"
            >Flussinhalt</a
          >
          oder {{HTMLElement("track")}} Element stehen.
        </div>
        <div>
          Ein {{HTMLElement("picture")}} Element und es muss vor dem {{HTMLElement("img")}} Element stehen.
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
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
- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types)
- [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats)
- [Web-Performance](/de/docs/Learn_web_development/Extensions/Performance)
