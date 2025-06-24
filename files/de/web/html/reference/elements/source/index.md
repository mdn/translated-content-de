---
title: "<source>: Das Medien- oder Bildquellenelement"
slug: Web/HTML/Reference/Elements/source
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTMLSidebar}}

Das **`<source>`**-Element in [HTML](/de/docs/Web/HTML) gibt eine oder mehrere Medienressourcen für die Elemente {{HTMLElement("picture")}}, {{HTMLElement("audio")}} und {{HTMLElement("video")}} an. Es ist ein {{Glossary("void_element", "void element")}}, was bedeutet, dass es keinen Inhalt hat und kein schließender Tag erforderlich ist. Dieses Element wird häufig verwendet, um denselben Medieninhalt in mehreren Dateiformaten anzubieten, um die Kompatibilität mit einer breiten Palette von Browsern zu gewährleisten, die unterschiedliche Unterstützung für [Bilddateiformate](/de/docs/Web/Media/Guides/Formats/Image_types) und [Mediendateiformate](/de/docs/Web/Media/Guides/Formats) bieten.

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

  - : Gibt den [MIME-Medientyp des Bildes](/de/docs/Web/Media/Guides/Formats/Image_types) oder [einen anderen Medientyp](/de/docs/Web/Media/Guides/Formats/Containers) an, optional einschließlich eines [`codecs` parameters](/de/docs/Web/Media/Guides/Formats/codecs_parameter).

- `src`

  - : Gibt die URL der Medienressource an. Erforderlich, wenn das übergeordnete Element von `<source>` {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist. Nicht zulässig, wenn das übergeordnete Element {{HTMLElement("picture")}} ist.

- `srcset`

  - : Gibt eine kommagetrennte Liste von einem oder mehreren Bild-URLs und deren Beschreibungen an. Erforderlich, wenn das übergeordnete Element von `<source>` {{HTMLElement("picture")}} ist. Nicht zulässig, wenn das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Die Liste besteht aus durch Kommas getrennten Zeichenfolgen, die eine Reihe möglicher Bilder für den Browser angeben. Jede Zeichenfolge besteht aus:

    - Einer URL, die den Speicherort eines Bildes angibt.
    - Einem optionalen Breitenbeschreiber — eine positive ganze Zahl, gefolgt von `"w"`, wie `300w`.
    - Einem optionalen Pixeldichtemerkmal — eine positive Fließkommazahl, gefolgt von `"x"`, wie `2x`.

    Jede Zeichenfolge in der Liste muss entweder einen Breitenbeschreiber oder einen Pixeldichtemerkmal enthalten, um gültig zu sein. Diese beiden Beschreiber sollten nicht zusammen verwendet werden; nur einer sollte konsistent in der gesamten Liste verwendet werden. Der Wert jedes Beschreibers in der Liste muss eindeutig sein. Basierend auf diesen Beschreibern wählt der Browser das am besten geeignete Bild zu einem gegebenen Zeitpunkt aus. Wenn die Beschreiber nicht angegeben werden, wird der Standardwert `1x` verwendet. Wenn das Attribut `sizes` ebenfalls vorhanden ist, muss jede Zeichenfolge einen Breitenbeschreiber enthalten. Wenn der Browser `srcset` nicht unterstützt, wird `src` als Standard-Bildquelle verwendet.

- `sizes`

  - : Gibt eine Liste von Quellenkapazitäten an, die die endgültige gerenderte Breite des Bildes beschreiben. Erlaubt, wenn das übergeordnete Element von `<source>` {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Die Liste besteht aus durch Kommas getrennten Quellenkapazitäten. Jede Quellenkapazität ist eine Medienbedingungslängenpaar. Vor der Layout-Berechnung der Seite verwendet der Browser diese Informationen, um zu bestimmen, welches im [`srcset`](#srcset) definierte Bild angezeigt werden soll. Beachten Sie, dass `sizes` nur wirksam wird, wenn Breitenbeschreiber mit `srcset` bereitgestellt werden, nicht Pixeldichtemerkmale (d.h. `200w` sollte anstelle von `2x` verwendet werden).

- `media`

  - : Gibt die [media query](/de/docs/Web/CSS/CSS_media_queries) für das vorgesehene Medium der Ressource an.

- `height`

  - : Gibt die intrinsische Höhe des Bildes in Pixel an. Erlaubt, wenn das übergeordnete Element von `<source>` ein {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Der Höhenwert muss eine ganze Zahl ohne Einheiten sein.

- `width`

  - : Gibt die intrinsische Breite des Bildes in Pixel an. Erlaubt, wenn das übergeordnete Element von `<source>` ein {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Der Breitenwert muss eine ganze Zahl ohne Einheiten sein.

## Hinweise zur Verwendung

Das `<source>`-Element ist ein **{{Glossary("void_element", "void element")}}**, was bedeutet, dass es nicht nur keinen Inhalt hat, sondern auch keinen schließenden Tag hat. Das heißt, Sie verwenden _nie_ `</source>` in Ihrem HTML.

Der Browser geht eine Liste von `<source>`-Elementen durch, um ein Format zu finden, das er unterstützt. Er verwendet das erste, das er anzeigen kann. Für jedes `<source>`-Element:

- Wenn das Attribut `type` nicht angegeben ist, ruft der Browser vom Server den Medientyp ab und bestimmt, ob es angezeigt werden kann. Wenn das Medium nicht gerendert werden kann, prüft der Browser das nächste `<source>` in der Liste.
- Wenn das Attribut `type` angegeben ist, vergleicht der Browser es sofort mit den Medientypen, die er anzeigen kann. Wenn der Typ nicht unterstützt wird, überspringt der Browser die Abfrage des Servers und prüft direkt das nächste `<source>`-Element.

Wenn keines der `<source>`-Elemente eine nutzbare Quelle bietet:

- Im Fall eines `<picture>`-Elements wird der Browser auf das im `<picture>`-Element angegebene Bild im untergeordneten {{HTMLElement("img")}}-Element zurückfallen.
- Im Fall eines `<audio>`- oder `<video>`-Elements wird der Browser den zwischen dem öffnenden und schließenden Tag des Elements eingefügten Inhalt anzeigen.

Für Informationen über von Webbrowsern unterstützte Bildformate und Anleitungen zur Auswahl geeigneter Formate siehe unseren [Leitfaden für Bilddateitypen und -formate](/de/docs/Web/Media/Guides/Formats/Image_types). Für Details zu den Video- und Audiomedientypen, die Sie verwenden können, siehe den [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats).

## Beispiele

### Verwendung des `type`-Attributs mit `<video>`

Dieses Beispiel zeigt, wie ein Video in verschiedenen Formaten angeboten wird: WebM für Browser, die es unterstützen, Ogg für jene, die Ogg unterstützen, und QuickTime für Browser, die QuickTime unterstützen. Wenn das `<audio>`- oder `<video>`-Element vom Browser nicht unterstützt wird, wird stattdessen eine Notiz angezeigt. Wenn der Browser das Element unterstützt, aber keines der angegebenen Formate unterstützt, wird ein `error`-Ereignis auf dem `<audio>`- oder `<video>`-Element ausgelöst und die standardmäßigen Mediensteuerungen (falls aktiviert) zeigen einen Fehler an. Für weitere Details, welche Medienformate verwendet werden sollen und deren Browserunterstützung, lesen Sie in unserem [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats) nach.

```html
<video controls>
  <source src="foo.webm" type="video/webm" />
  <source src="foo.ogg" type="video/ogg" />
  <source src="foo.mov" type="video/quicktime" />
  I'm sorry; your browser doesn't support HTML video.
</video>
```

### Verwendung des `media`-Attributs mit `<video>`

Dieses Beispiel zeigt, wie eine alternative Quelldatei für Viewports über einer bestimmten Breite angeboten wird. Wenn die Browsing-Umgebung eines Benutzers die angegebene `media`-Bedingung erfüllt, wird das zugehörige `<source>`-Element gewählt. Der Inhalt seines `src`-Attributs wird dann angefordert und gerendert. Wenn die `media`-Bedingung nicht übereinstimmt, wird der Browser zum nächsten `<source>` in der Liste übergehen. Die zweite `<source>`-Option im Code unten hat keine `media`-Bedingung, sodass sie in allen anderen Browsing-Kontexten ausgewählt wird.

```html
<video controls>
  <source src="foo-large.webm" media="(min-width: 800px)" />
  <source src="foo.webm" />
  I'm sorry; your browser doesn't support HTML video.
</video>
```

Für weitere Beispiele ist der Artikel [HTML video und audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) im Lernbereich eine großartige Ressource.

### Verwendung des `media`-Attributs mit `<picture>`

In diesem Beispiel sind zwei `<source>`-Elemente innerhalb von {{HTMLElement("picture")}} enthalten, die Versionen eines Bildes bereitstellen, wenn der verfügbare Platz bestimmte Breiten überschreitet. Wenn die verfügbare Breite kleiner ist als die kleinste dieser Breiten, fällt der Browser auf das im {{HTMLElement("img")}}-Element angegebene Bild zurück.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(min-width: 800px)" />
  <source srcset="mdn-logo-medium.png" media="(min-width: 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN Web Docs" />
</picture>
```

Mit dem `<picture>`-Element müssen Sie immer ein `<img>` mit einem Fallback-Bild einschließen. Stellen Sie auch sicher, dass Sie ein `alt`-Attribut für die Barrierefreiheit hinzufügen, es sei denn, das Bild ist rein dekorativ und für den Inhalt irrelevant.

### Verwendung von `height`- und `width`-Attributen mit `<picture>`

In diesem Beispiel sind drei `<source>`-Elemente mit `height`- und `width`-Attributen in einem {{HTMLElement("picture")}}-Element enthalten. Eine [media query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) ermöglicht es dem Browser, basierend auf der {{Glossary("Viewport", "Viewport")}}-Größe ein anzuzeigendes Bild mit den `height`- und `width`-Attributen auszuwählen.

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
      <td>Keine; es ist ein {{Glossary("void_element", "void element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss einen Start-Tag haben und darf keinen End-Tag haben.</td>
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
          oder {{HTMLElement("track")}}-Element platziert werden.
        </div>
        <div>
          Ein {{HTMLElement("picture")}}-Element, und es muss
          vor dem {{HTMLElement("img")}}-Element platziert werden.
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
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
- [Leitfaden für Bilddateitypen und -formate](/de/docs/Web/Media/Guides/Formats/Image_types)
- [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats)
- [Web-Performance](/de/docs/Learn_web_development/Extensions/Performance)
