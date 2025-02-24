---
title: "<source>: Das Media- oder Bildquellenelement"
slug: Web/HTML/Element/source
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<source>`** [HTML](/de/docs/Web/HTML)-Element spezifiziert eine oder mehrere Medienressourcen für die Elemente {{HTMLElement("picture")}}, {{HTMLElement("audio")}} und {{HTMLElement("video")}}. Es handelt sich um ein {{Glossary("void_element", "leeres Element")}}, was bedeutet, dass es keinen Inhalt hat und keinen Schlusstag benötigt. Dieses Element wird häufig verwendet, um denselben Medieninhalt in mehreren Dateiformaten anzubieten, um die Kompatibilität mit einer breiten Palette von Browsern zu gewährleisten, die unterschiedliche Unterstützung für [Bilddateiformate](/de/docs/Web/Media/Guides/Formats/Image_types) und [Mediendateiformate](/de/docs/Web/Media/Guides/Formats) bieten.

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

Dieses Element unterstützt alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes). Darüber hinaus können die folgenden Attribute damit verwendet werden:

- `type`

  - : Gibt den [MIME-Medientyp des Bildes](/de/docs/Web/Media/Guides/Formats/Image_types) oder einen [anderen Medientyp](/de/docs/Web/Media/Guides/Formats/Containers) an, optional einschließlich eines [`codecs` Parameters](/de/docs/Web/Media/Guides/Formats/codecs_parameter).

- `src`

  - : Gibt die URL der Medienressource an. Erforderlich, wenn das übergeordnete Element von `<source>` {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist. Nicht zulässig, wenn das übergeordnete Element {{HTMLElement("picture")}} ist.

- `srcset`

  - : Gibt eine durch Kommas getrennte Liste von einem oder mehreren Bild-URLs und deren Beschreibungen an. Erforderlich, wenn das übergeordnete Element von `<source>` {{HTMLElement("picture")}} ist. Nicht zulässig, wenn das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Die Liste besteht aus durch Kommas getrennten Zeichenfolgen, die eine Reihe möglicher Bilder für den Browser angeben. Jede Zeichenfolge besteht aus:

    - Einer URL, die den Speicherort eines Bildes angibt.
    - Einem optionalen Breitenbeschreiber—einer positiven ganzen Zahl, die direkt von `"w"` gefolgt wird, wie `300w`.
    - Einem optionalen Pixeldichte-Beschreiber—einer positiven Fließkommazahl, die direkt von `"x"` gefolgt wird, wie `2x`.

    Jede Zeichenfolge in der Liste muss entweder einen Breiten- oder einen Pixeldichte-Beschreiber haben, um gültig zu sein. Diese beiden Beschreiber sollten nicht zusammen verwendet werden; nur einer sollte konsequent in der gesamten Liste verwendet werden. Der Wert jedes Beschreibers in der Liste muss einzigartig sein. Der Browser wählt das am besten geeignete Bild zur Anzeige zu einem bestimmten Zeitpunkt basierend auf diesen Beschreibern. Wenn die Beschreiber nicht angegeben sind, wird der Standardwert `1x` verwendet. Wenn das `sizes`-Attribut ebenfalls vorhanden ist, muss jede Zeichenfolge einen Breitenbeschreiber enthalten. Wenn der Browser `srcset` nicht unterstützt, wird `src` als Standard-Bildquelle verwendet.

- `sizes`

  - : Gibt eine Liste von Quellgrößen an, die die endgültig gerenderte Breite des Bildes beschreiben. Erlaubt, wenn das übergeordnete Element von `<source>` {{HTMLElement("picture")}} ist. Nicht zulässig, wenn das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Die Liste besteht aus durch Kommas getrennten Quellgrößen. Jede Quellgröße ist ein Medienbedingung-Längenpaar. Bevor die Seite erstellt wird, verwendet der Browser diese Informationen, um zu bestimmen, welches Bild in [`srcset`](#srcset) angezeigt werden soll. Beachten Sie, dass `sizes` nur wirksam sein wird, wenn mit `srcset` Breitenbeschreiber bereitgestellt werden, nicht Pixeldichte-Beschreiber (d.h. `200w` sollte anstelle von `2x` verwendet werden).

- `media`

  - : Gibt die [Media Query](/de/docs/Web/CSS/CSS_media_queries) für das beabsichtigte Medium der Ressource an.

- `height`

  - : Gibt die intrinsische Höhe des Bildes in Pixeln an. Erlaubt, wenn das übergeordnete Element von `<source>` ein {{HTMLElement("picture")}} ist. Nicht zulässig, wenn das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Der Höhenwert muss eine ganze Zahl ohne Einheiten sein.

- `width`

  - : Gibt die intrinsische Breite des Bildes in Pixeln an. Erlaubt, wenn das übergeordnete Element von `<source>` ein {{HTMLElement("picture")}} ist. Nicht zulässig, wenn das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Der Breitenwert muss eine ganze Zahl ohne Einheiten sein.

## Verwendungshinweise

Das `<source>`-Element ist ein **{{Glossary("void_element", "leeres Element")}}**, was bedeutet, dass es keinen Inhalt hat und keinen Schlusstag benötigt. Das heißt, Sie verwenden _nie_ `</source>` in Ihrem HTML.

Der Browser geht eine Liste von `<source>`-Elementen durch, um ein Format zu finden, das er unterstützt. Er verwendet das erste, das es anzeigen kann. Für jedes `<source>`-Element:

- Wenn das `type`-Attribut nicht angegeben ist, ruft der Browser den Medientyp vom Server ab und bestimmt, ob es angezeigt werden kann. Wenn das Medium nicht gerendert werden kann, überprüft der Browser das nächste `<source>` in der Liste.
- Wenn das `type`-Attribut angegeben ist, vergleicht der Browser es sofort mit den Medientypen, die er anzeigen kann. Wenn der Typ nicht unterstützt wird, überspringt der Browser die Abfrage des Servers und überprüft direkt das nächste `<source>`-Element.

Wenn keines der `<source>`-Elemente eine nutzbare Quelle bereitstellt:

- Im Falle eines `<picture>`-Elements wird der Browser auf das Bild zurückgreifen, das im {{HTMLElement("img")}}-Kind des `<picture>`-Elements angegeben ist.
- Im Falle eines `<audio>`- oder `<video>`-Elements wird der Browser auf das zwischen den öffnenden und schließenden Tags des Elements enthaltene Content-Element zurückgreifen.

Für Informationen über Bildformate, die von Webbrowsern unterstützt werden, und Anleitungen zur Auswahl geeigneter Formate, siehe unseren [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types). Für Details zu den Video- und Audiodatentypen, die Sie verwenden können, siehe den [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats).

## Beispiele

### Verwendung des `type`-Attributs mit `<video>`

Dieses Beispiel zeigt, wie man ein Video in verschiedenen Formaten bereitstellt: WebM für Browser, die es unterstützen, Ogg für diejenigen, die Ogg unterstützen, und QuickTime für Browser, die QuickTime unterstützen. Wenn das `<audio>`- oder `<video>`-Element vom Browser nicht unterstützt wird, wird stattdessen ein Hinweis angezeigt. Wenn der Browser das Element unterstützt, jedoch keines der angegebenen Formate, wird ein `error`-Ereignis ausgelöst und die Standard-Mediensteuerungen (falls aktiviert) zeigen einen Fehler an. Weitere Details zu den zu verwendenden Mediendateiformaten und deren Browserunterstützung finden Sie in unserem [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats).

```html
<video controls>
  <source src="foo.webm" type="video/webm" />
  <source src="foo.ogg" type="video/ogg" />
  <source src="foo.mov" type="video/quicktime" />
  I'm sorry; your browser doesn't support HTML video.
</video>
```

### Verwendung des `media`-Attributs mit `<video>`

Dieses Beispiel zeigt, wie eine alternative Quelldatei für Viewports über einer bestimmten Breite angeboten wird. Wenn die Browserumgebung eines Benutzers die angegebene `media`-Bedingung erfüllt, wird das zugehörige `<source>`-Element ausgewählt. Der Inhalt seines `src`-Attributs wird dann angefordert und gerendert. Wenn die `media`-Bedingung nicht übereinstimmt, geht der Browser zum nächsten `<source>` in der Liste über. Die zweite `<source>`-Option im untenstehenden Code hat keine `media`-Bedingung, daher wird sie für alle anderen Browsing-Kontexte ausgewählt.

```html
<video controls>
  <source src="foo-large.webm" media="(min-width: 800px)" />
  <source src="foo.webm" />
  I'm sorry; your browser doesn't support HTML video.
</video>
```

Für weitere Beispiele ist der Artikel [HTML video und audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) im Lernbereich eine großartige Ressource.

### Verwendung des `media`-Attributs mit `<picture>`

In diesem Beispiel sind zwei `<source>`-Elemente innerhalb eines {{HTMLElement("picture")}} enthalten, die Versionen eines Bildes bieten, die verwendet werden sollen, wenn der verfügbare Platz bestimmte Breiten übersteigt. Wenn die verfügbare Breite kleiner ist als die kleinste dieser Breiten, wird der Browser auf das im {{HTMLElement("img")}}-Element angegebene Bild zurückgreifen.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(min-width: 800px)" />
  <source srcset="mdn-logo-medium.png" media="(min-width: 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN Web Docs" />
</picture>
```

Mit dem `<picture>`-Element müssen Sie immer ein `<img>` mit einem Fallback-Bild einfügen. Stellen Sie außerdem sicher, dass Sie ein `alt`-Attribut für die Barrierefreiheit hinzufügen, es sei denn, das Bild ist rein dekorativ und für den Inhalt irrelevant.

### Verwendung von `height`- und `width`-Attributen mit `<picture>`

In diesem Beispiel sind drei `<source>`-Elemente mit `height`- und `width`-Attributen in einem {{HTMLElement("picture")}}-Element enthalten. Eine [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) ermöglicht es dem Browser, ein Bild mit den `height`- und `width`-Attributen basierend auf der {{Glossary("Viewport", "Viewport")}}-Größe auszuwählen.

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
      <td>Muss ein Starttag haben und darf keinen Schlusstag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        <div>
          Ein Medienelement—{{HTMLElement("audio")}} oder
          {{HTMLElement("video")}}—und es muss vor jedem
          <a href="/de/docs/Web/HTML/Content_categories#flow_content"
            >Flussinhalt</a
          >
          oder {{HTMLElement("track")}}-Element platziert werden.
        </div>
        <div>
          Ein {{HTMLElement("picture")}}-Element, und es muss
          vor dem {{HTMLElement("img")}}-Element platziert werden.
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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

- {{HTMLElement("audio")}}-Element
- {{HTMLElement("picture")}}-Element
- {{HTMLElement("video")}}-Element
- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types)
- [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats)
- [Web-Performance](/de/docs/Learn_web_development/Extensions/Performance)
