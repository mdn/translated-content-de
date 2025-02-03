---
title: "<source>: Das Media- oder Bildquellen-Element"
slug: Web/HTML/Element/source
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{HTMLSidebar}}

Das **`<source>`** [HTML](/de/docs/Web/HTML)-Element gibt eine oder mehrere Medienressourcen für die {{HTMLElement("picture")}}, {{HTMLElement("audio")}} und {{HTMLElement("video")}}-Elemente an. Es ist ein {{Glossary("void_element", "leeres Element")}}, das bedeutet, es hat keinen Inhalt und benötigt keinen Schlusstag. Dieses Element wird häufig verwendet, um denselben Medieninhalt in mehreren Dateiformaten anzubieten, um die Kompatibilität mit einer breiten Palette von Browsern zu gewährleisten, die unterschiedliche Unterstützung für [Bilddateiformate](/de/docs/Web/Media/Guides/Formats/Image_types) und [Mediendateiformate](/de/docs/Web/Media/Guides/Formats) bieten.

{{EmbedInteractiveExample("pages/tabbed/source.html", "tabbed-standard")}}

## Attribute

Dieses Element unterstützt alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes). Zudem können folgende Attribute verwendet werden:

- `type`

  - : Gibt den [MIME-Mediatyp des Bildes](/de/docs/Web/Media/Guides/Formats/Image_types) oder einen [anderen Medientyp](/de/docs/Web/Media/Guides/Formats/Containers) an, optional einschließlich eines [`codecs`-Parameters](/de/docs/Web/Media/Guides/Formats/codecs_parameter).

- `src`

  - : Gibt die URL der Medienressource an. Erforderlich, wenn das übergeordnete Element von `<source>` {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist. Nicht erlaubt, wenn das übergeordnete Element {{HTMLElement("picture")}} ist.

- `srcset`

  - : Gibt eine durch Kommas getrennte Liste von einem oder mehreren Bild-URLs und ihren Beschreibungen an. Erforderlich, wenn das übergeordnete Element von `<source>` {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Die Liste besteht aus durch Kommas getrennten Zeichenfolgen, die eine Reihe möglicher Bilder angeben, die der Browser verwenden kann. Jede Zeichenfolge besteht aus:

    - Einer URL, die einen Bildstandort angibt.
    - Einer optionalen Breitenbeschreibung—einer positiven ganzen Zahl, gefolgt von `"w"`, wie `300w`.
    - Einer optionalen Pixeldichte-Beschreibung—einer positiven Gleitkommazahl, gefolgt von `"x"`, wie `2x`.

    Jede Zeichenfolge in der Liste muss entweder eine Breiten- oder Pixeldichte-Beschreibung haben, um gültig zu sein. Diese beiden Beschreibungen sollten nicht zusammen verwendet werden; nur eine sollte durchgängig in der Liste verwendet werden. Der Wert jeder Beschreibung in der Liste muss einzigartig sein. Der Browser wählt das am besten geeignete Bild zur Anzeige aus, basierend auf diesen Beschreibungen. Wenn die Beschreibungen nicht angegeben sind, wird standardmäßig `1x` verwendet. Wenn das `sizes`-Attribut ebenfalls vorhanden ist, muss jede Zeichenfolge eine Breitenbeschreibung enthalten. Wenn der Browser `srcset` nicht unterstützt, wird `src` als Standardbildquelle verwendet.

- `sizes`

  - : Gibt eine Liste von Quellen-Größen an, die die endgültige gerenderte Breite des Bildes beschreiben. Erlaubt, wenn das übergeordnete Element von `<source>` {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Die Liste besteht aus Quellen-Größen, die durch Kommas getrennt sind. Jede Quellen-Größe ist ein Medienbedingungs-Längen-Paar. Bevor die Seite aufgebaut wird, verwendet der Browser diese Informationen, um zu bestimmen, welches Bild im [`srcset`](#srcset) angezeigt werden soll. Beachten Sie, dass `sizes` nur wirksam wird, wenn Breitenbeschreibungen mit `srcset` bereitgestellt werden, nicht Pixeldichte-Beschreibungen (d.h. `200w` sollte anstelle von `2x` verwendet werden).

- `media`

  - : Gibt die [Media-Query](/de/docs/Web/CSS/CSS_media_queries) für das vorgesehene Medium der Ressource an.

- `height`

  - : Gibt die intrinsische Höhe des Bildes in Pixel an. Erlaubt, wenn das übergeordnete Element von `<source>` ein {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Der Höhenwert muss eine Ganzzahl ohne Einheiten sein.

- `width`

  - : Gibt die intrinsische Breite des Bildes in Pixel an. Erlaubt, wenn das übergeordnete Element von `<source>` ein {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Der Breitenwert muss eine Ganzzahl ohne Einheiten sein.

## Anwendungshinweise

Das `<source>`-Element ist ein **{{Glossary("void_element", "leeres Element")}}**, das bedeutet, es hat nicht nur keinen Inhalt, sondern auch keinen Schlusstag. Das heißt, Sie verwenden _niemals_ `</source>` in Ihrem HTML.

Der Browser geht eine Liste von `<source>`-Elementen durch, um ein Format zu finden, das er unterstützt. Er verwendet das erste, das er anzeigen kann. Für jedes `<source>`-Element:

- Wenn das `type`-Attribut nicht angegeben ist, ruft der Browser die Art des Mediums vom Server ab und prüft, ob es angezeigt werden kann. Wenn das Medium nicht gerendert werden kann, überprüft der Browser das nächste `<source>` in der Liste.
- Wenn das `type`-Attribut angegeben ist, vergleicht der Browser es sofort mit den Medientypen, die er anzeigen kann. Wenn der Typ nicht unterstützt wird, überspringt der Browser die Abfrage an den Server und prüft direkt das nächste `<source>`-Element.

Wenn keines der `<source>`-Elemente eine nutzbare Quelle bereitstellt:

- Im Fall eines `<picture>`-Elements wird der Browser auf das im `<picture>`-Element spezifizierte Bild im {{HTMLElement("img")}}-Kind zurückfallen.
- Im Fall eines `<audio>`- oder `<video>`-Elements wird der Browser die Inhalte zwischen dem öffnenden und schließenden Tag des Elements anzeigen.

Für Informationen zu von Webbrowsern unterstützten Bildformaten und Anleitungen zur Auswahl geeigneter Formate, siehe unseren [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types). Für Details zu den Video- und Audio-Medientypen, die Sie verwenden können, siehe den [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats).

## Beispiele

### Verwendung des `type`-Attributs mit `<video>`

Dieses Beispiel zeigt, wie man ein Video in verschiedenen Formaten anbietet: WebM für Browser, die es unterstützen, Ogg für diejenigen, die Ogg unterstützen, und QuickTime für Browser, die QuickTime unterstützen. Wenn das `<audio>`- oder `<video>`-Element vom Browser nicht unterstützt wird, wird stattdessen ein Hinweis angezeigt. Wenn der Browser das Element unterstützt, aber keine der angegebenen Formate, wird ein `error`-Ereignis ausgelöst und die Standard-Mediensteuerungen (falls aktiviert) zeigen einen Fehler an. Für weitere Details zu den zu verwendenden Mediendateiformaten und deren Browserunterstützung, siehe unseren [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats).

```html
<video controls>
  <source src="foo.webm" type="video/webm" />
  <source src="foo.ogg" type="video/ogg" />
  <source src="foo.mov" type="video/quicktime" />
  I'm sorry; your browser doesn't support HTML video.
</video>
```

### Verwendung des `media`-Attributs mit `<video>`

Dieses Beispiel demonstriert, wie man eine alternative Quelldatei für Ansichtsfenster über einer bestimmten Breite anbietet. Wenn die Browserumgebung eines Benutzers die angegebene `media`-Bedingung erfüllt, wird das zugehörige `<source>`-Element ausgewählt. Die Inhalte seines `src`-Attributs werden dann angefordert und gerendert. Wenn die `media`-Bedingung nicht erfüllt ist, geht der Browser zum nächsten `<source>` in der Liste über. Die zweite `<source>`-Option im untenstehenden Code hat keine `media`-Bedingung, sodass sie für alle anderen Browserkontexte ausgewählt wird.

```html
<video controls>
  <source src="foo-large.webm" media="(min-width: 800px)" />
  <source src="foo.webm" />
  I'm sorry; your browser doesn't support HTML video.
</video>
```

Für weitere Beispiele ist der Artikel [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) im Lernbereich eine großartige Ressource.

### Verwendung des `media`-Attributs mit `<picture>`

In diesem Beispiel sind zwei `<source>`-Elemente innerhalb von {{HTMLElement("picture")}} enthalten, die Versionen eines Bildes bereitstellen, die verwendet werden, wenn der verfügbare Platz bestimmte Breiten überschreitet. Wenn die verfügbare Breite kleiner als die kleinste dieser Breiten ist, fällt der Browser auf das im {{HTMLElement("img")}}-Element spezifizierte Bild zurück.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(min-width: 800px)" />
  <source srcset="mdn-logo-medium.png" media="(min-width: 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN Web Docs" />
</picture>
```

Mit dem `<picture>`-Element müssen Sie immer ein `<img>` mit einem Ersatzbild einschließen. Stellen Sie außerdem sicher, dass Sie ein `alt`-Attribut für die Barrierefreiheit hinzufügen, es sei denn, das Bild ist rein dekorativ und irrelevant für den Inhalt.

### Verwendung der Attribute `height` und `width` mit `<picture>`

In diesem Beispiel sind drei `<source>`-Elemente mit den Attributen `height` und `width` in einem {{HTMLElement("picture")}}-Element enthalten.
Eine [Media-Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) ermöglicht es dem Browser, ein Bild zur Anzeige mit den Attributen `height` und `width` basierend auf der {{Glossary("Viewport", "Ansichtsfenster")}}-Größe auszuwählen.

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
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Es muss einen Starttag haben und darf keinen Endtag haben.</td>
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
          Ein {{HTMLElement("picture")}}-Element, und es muss vor dem {{HTMLElement("img")}}-Element platziert werden.
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

- {{HTMLElement("audio")}}-Element
- {{HTMLElement("picture")}}-Element
- {{HTMLElement("video")}}-Element
- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types)
- [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats)
- [Web-Performance](/de/docs/Learn_web_development/Extensions/Performance)
