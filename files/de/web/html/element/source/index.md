---
title: "<source>: Das Medien- oder Bildquelle-Element"
slug: Web/HTML/Element/source
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

Das **`<source>`** [HTML](/de/docs/Web/HTML)-Element legt eine oder mehrere Medienressourcen für die {{HTMLElement("picture")}}, {{HTMLElement("audio")}} und {{HTMLElement("video")}}-Elemente fest. Es ist ein {{Glossary("void_element", "void element")}}, was bedeutet, dass es keinen Inhalt hat und keinen Schlusstag benötigt. Dieses Element wird häufig verwendet, um denselben Medieninhalt in mehreren Dateiformaten anzubieten, um Kompatibilität mit einer Vielzahl von Browsern zu gewährleisten, da diese unterschiedliche Unterstützung für [Bilddateiformate](/de/docs/Web/Media/Formats/Image_types) und [Mediendateiformate](/de/docs/Web/Media/Formats) aufweisen.

{{EmbedInteractiveExample("pages/tabbed/source.html", "tabbed-standard")}}

## Attribute

Dieses Element unterstützt alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes). Zusätzlich können die folgenden Attribute damit verwendet werden:

- `type`

  - : Gibt den [MIME-Medientyp des Bildes](/de/docs/Web/Media/Formats/Image_types) oder [anderen Medientyp](/de/docs/Web/Media/Formats/Containers) an, optional einschließlich eines [`codecs`-Parameters](/de/docs/Web/Media/Formats/codecs_parameter).

- `src`

  - : Gibt die URL der Medienressource an. Erforderlich, wenn das übergeordnete Element von `<source>` {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist. Nicht erlaubt, wenn das übergeordnete Element {{HTMLElement("picture")}} ist.

- `srcset`

  - : Gibt eine kommagetrennte Liste von einem oder mehreren Bild-URLs und deren Beschreibungen an. Erforderlich, wenn das übergeordnete Element von `<source>` {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Die Liste besteht aus durch Kommas getrennten Zeichenfolgen, die eine Reihe möglicher Bilder für den Browser anzeigen. Jede Zeichenfolge setzt sich zusammen aus:

    - Einer URL, die den Speicherort des Bildes angibt.
    - Einem optionalen Breitenbeschreiber—eine positive ganze Zahl, direkt gefolgt von `"w"`, wie `300w`.
    - Einem optionalen Pixeldichtebeschreiber—eine positive Fließkommazahl, direkt gefolgt von `"x"`, wie `2x`.

    Jede Zeichenfolge in der Liste muss entweder einen Breitenbeschreiber oder einen Pixeldichtebeschreiber haben, um gültig zu sein. Diese beiden Beschreiber sollten nicht zusammen verwendet werden; nur einer sollte konsistent in der gesamten Liste verwendet werden. Der Wert jedes Beschreibers in der Liste muss einzigartig sein. Der Browser wählt basierend auf diesen Beschreibungen das am besten geeignete Bild aus, das zu einem bestimmten Zeitpunkt angezeigt werden soll. Wenn die Beschreiber nicht angegeben werden, wird der Standardwert `1x` verwendet. Wenn das `sizes`-Attribut auch vorhanden ist, muss jede Zeichenfolge einen Breitenbeschreiber enthalten. Wenn der Browser `srcset` nicht unterstützt, wird `src` für die Standardbildquelle verwendet.

- `sizes`

  - : Gibt eine Liste von Größen der Quelle an, die die endgültige gerenderte Breite des Bildes beschreiben. Zulässig, wenn das übergeordnete Element von `<source>` {{HTMLElement("picture")}} ist. Nicht zulässig, wenn das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Die Liste besteht aus Quellengrößen, die durch Kommas getrennt sind. Jede Quellengröße ist ein Medienbedingung-Längen-Paar. Vor dem Layout der Seite verwendet der Browser diese Informationen, um zu bestimmen, welches Bild in [`srcset`](#srcset) angezeigt werden soll. Beachten Sie, dass `sizes` nur wirksam wird, wenn Breitenbeschreiber mit `srcset` bereitgestellt werden, nicht Pixeldichtebeschreiber (d.h., `200w` sollte statt `2x` verwendet werden).

- `media`

  - : Gibt die für das Medium vorgesehene [Medienabfrage](/de/docs/Web/CSS/CSS_media_queries) an.

- `height`

  - : Gibt die intrinsische Höhe des Bildes in Pixeln an. Zulässig, wenn das übergeordnete Element von `<source>` ein {{HTMLElement("picture")}} ist. Nicht zulässig, wenn das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Der Höhenwert muss eine ganze Zahl ohne Einheiten sein.

- `width`

  - : Gibt die intrinsische Breite des Bildes in Pixeln an. Zulässig, wenn das übergeordnete Element von `<source>` ein {{HTMLElement("picture")}} ist. Nicht zulässig, wenn das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Der Breitenwert muss eine ganze Zahl ohne Einheiten sein.

## Hinweise zur Verwendung

Das `<source>`-Element ist ein **{{Glossary("void_element", "void element")}}**, was bedeutet, dass es nicht nur keinen Inhalt hat, sondern auch keinen Abschlusstag. Das heißt, Sie verwenden _nie_ `</source>` in Ihrem HTML.

Der Browser durchläuft eine Liste von `<source>`-Elementen, um ein Format zu finden, das unterstützt wird. Es wird das erste verwendet, das angezeigt werden kann. Für jedes `<source>`-Element gilt:

- Wenn das `type`-Attribut nicht angegeben ist, ruft der Browser den Medientyp vom Server ab und prüft, ob es angezeigt werden kann. Wenn das Medium nicht gerendert werden kann, prüft der Browser das nächste `<source>` in der Liste.
- Wenn das `type`-Attribut angegeben ist, vergleicht der Browser es sofort mit den Medientypen, die es anzeigen kann. Wenn der Typ nicht unterstützt wird, überspringt der Browser das Abfragen des Servers und überprüft direkt das nächste `<source>`-Element.

Wenn keines der `<source>`-Elemente eine verwendbare Quelle bereitstellt:

- Im Fall eines `<picture>`-Elements wird der Browser auf das Bild zurückgreifen, das im {{HTMLElement("img")}}-Kind des `<picture>`-Elements angegeben ist.
- Im Fall eines `<audio>`- oder `<video>`-Elements zeigt der Browser den Inhalt innerhalb der Öffnungs- und Schlusstags des Elements an.

Für Informationen zu von Webbrowsern unterstützten Bildformaten und Anleitung zur Auswahl geeigneter Formate siehe unseren [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Formats/Image_types). Für Details zu den Video- und Audiomedientypen, die Sie verwenden können, siehe den [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Formats).

## Beispiele

### Verwendung des `type`-Attributs mit `<video>`

Dieses Beispiel zeigt, wie ein Video in verschiedenen Formaten angeboten werden kann: WebM für Browser, die es unterstützen, Ogg für diejenigen, die Ogg unterstützen, und QuickTime für Browser, die QuickTime unterstützen. Wenn das `<audio>`- oder `<video>`-Element vom Browser nicht unterstützt wird, wird stattdessen ein Hinweis angezeigt. Wenn der Browser das Element unterstützt, aber keines der angegebenen Formate unterstützt, wird ein `error`-Ereignis ausgelöst, und die Standard-Mediensteuerelemente (falls aktiviert) werden einen Fehler anzeigen. Weitere Details zu den zu verwendenden Mediendateiformaten und deren Browser-Unterstützung finden Sie in unserem [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Formats).

```html
<video controls>
  <source src="foo.webm" type="video/webm" />
  <source src="foo.ogg" type="video/ogg" />
  <source src="foo.mov" type="video/quicktime" />
  I'm sorry; your browser doesn't support HTML video.
</video>
```

### Verwendung des `media`-Attributs mit `<video>`

Dieses Beispiel zeigt, wie eine alternative Quelldatei für Viewports über einer bestimmten Breite angeboten werden kann. Wenn die Browserumgebung des Benutzers die angegebene `media`-Bedingung erfüllt, wird das zugehörige `<source>`-Element ausgewählt. Der Inhalt seines `src`-Attributs wird dann angefordert und gerendert. Wenn die `media`-Bedingung nicht erfüllt ist, wird der Browser zum nächsten `<source>` in der Liste übergehen. Die zweite `<source>`-Option im untenstehenden Code hat keine `media`-Bedingung, sodass sie für alle anderen Browserkontexte gewählt wird.

```html
<video controls>
  <source src="foo-large.webm" media="(min-width: 800px)" />
  <source src="foo.webm" />
  I'm sorry; your browser doesn't support HTML video.
</video>
```

Für weitere Beispiele ist der Artikel [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) im Lernbereich eine großartige Ressource.

### Verwendung des `media`-Attributs mit `<picture>`

In diesem Beispiel sind zwei `<source>`-Elemente innerhalb einer {{HTMLElement("picture")}} enthalten, die Versionen eines Bildes bereitstellen, die verwendet werden, wenn der verfügbare Platz bestimmte Breiten überschreitet. Wenn die verfügbare Breite kleiner ist als die kleinste dieser Breiten, wird der Browser auf das im {{HTMLElement("img")}}-Element angegebene Bild zurückgreifen.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(min-width: 800px)" />
  <source srcset="mdn-logo-medium.png" media="(min-width: 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN Web Docs" />
</picture>
```

Beim `<picture>`-Element müssen Sie immer ein `<img>` mit einem Fallback-Bild einschließen. Stellen Sie außerdem sicher, dass Sie ein `alt`-Attribut für die Barrierefreiheit hinzufügen, es sei denn, das Bild ist rein dekorativ und für den Inhalt irrelevant.

### Verwendung der Attribute `height` und `width` mit `<picture>`

In diesem Beispiel sind drei `<source>`-Elemente mit `height`- und `width`-Attributen in einem {{HTMLElement("picture")}}-Element enthalten. Eine [Medienabfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) ermöglicht es dem Browser, ein Bild anzuzeigen, das mit den `height`- und `width`-Attributen basierend auf der [Ansichtshafen]-Größe (/de/docs/Glossary/Viewport) ausgewählt wird.

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
      <td>Keiner; es ist ein {{Glossary("void_element", "void element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss einen Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Elternelemente</th>
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
- [Leitfaden zu Bilddateiformaten und -typen](/de/docs/Web/Media/Formats/Image_types)
- [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Formats)
- [Web-Performance](/de/docs/Learn_web_development/Extensions/Performance)
