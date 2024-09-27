---
title: "<source>: Das Media- oder Bildquellen-Element"
slug: Web/HTML/Element/source
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTMLSidebar}}

Das **`<source>`**-Element [HTML](/de/docs/Web/HTML) spezifiziert eine oder mehrere Medienressourcen für die Elemente {{HTMLElement("picture")}}, {{HTMLElement("audio")}} und {{HTMLElement("video")}}. Es ist ein [void element](/de/docs/Glossary/void_element), was bedeutet, dass es keinen Inhalt hat und kein Schlusstag benötigt. Dieses Element wird häufig verwendet, um denselben Medieninhalt in mehreren Dateiformaten anzubieten, um Kompatibilität mit einer Vielzahl von Browsern zu gewährleisten, da diese unterschiedliche Unterstützung für [Bilddateiformate](/de/docs/Web/Media/Formats/Image_types) und [Mediendateiformate](/de/docs/Web/Media/Formats) bieten.

{{EmbedInteractiveExample("pages/tabbed/source.html", "tabbed-standard")}}

## Attribute

Dieses Element unterstützt alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes). Zusätzlich können die folgenden Attribute verwendet werden:

- `type`

  - : Gibt den [MIME-Medientyp des Bildes](/de/docs/Web/Media/Formats/Image_types) oder [einen anderen Medientyp](/de/docs/Web/Media/Formats/Containers) an, wobei optional ein [`codecs`-Parameter](/de/docs/Web/Media/Formats/codecs_parameter) enthalten sein kann.

- `src`

  - : Gibt die URL der Mediendatei an. Erforderlich, wenn das Elternelement von `<source>` {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist. Nicht erlaubt, wenn das Elternelement {{HTMLElement("picture")}} ist.

- `srcset`

  - : Gibt eine kommagetrennte Liste von einem oder mehreren Bild-URLs und deren Beschreibungen an. Erforderlich, wenn das Elternelement von `<source>` {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn das Elternelement {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Die Liste besteht aus Zeichenfolgen, die durch Kommas getrennt sind und eine Reihe von möglichen Bildern angeben, die der Browser verwenden kann. Jede Zeichenfolge besteht aus:

    - Einer URL, die den Speicherort eines Bildes angibt.
    - Einem optionalen Breitenbeschreiber—eine positive Zahl, die direkt von einem `"w"` gefolgt wird, wie `300w`.
    - Einem optionalen Pixeldichtebeschreiber—eine positive Fließkommazahl, die direkt von einem `"x"` gefolgt wird, wie `2x`.

    Jede Zeichenfolge in der Liste muss entweder einen Breitenbeschreiber oder einen Pixeldichtebeschreiber enthalten, um gültig zu sein. Diese beiden Beschreiber sollten nicht zusammen verwendet werden; es sollte nur einer konsistent in der Liste verwendet werden. Der Wert jedes Beschreibers in der Liste muss einzigartig sein. Der Browser wählt das am besten geeignete Bild aus, das zu einem gegebenen Zeitpunkt angezeigt werden soll, basierend auf diesen Beschreibungen. Wenn die Beschreibungen nicht angegeben sind, wird der Standardwert `1x` verwendet. Wenn das `sizes`-Attribut ebenfalls vorhanden ist, muss jede Zeichenfolge einen Breitenbeschreiber enthalten. Wenn der Browser `srcset` nicht unterstützt, wird `src` als Standardbildquelle verwendet.

- `sizes`

  - : Gibt eine Liste von Quellgrößen an, die die endgültige gerenderte Breite des Bildes beschreibt. Erlaubt, wenn das Elternelement von `<source>` {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn das Elternelement {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Die Liste besteht aus Quellgrößen, die durch Kommas getrennt sind. Jede Quellgröße ist ein Medienbedingungen-Längen-Paar. Bevor der Browser die Seite layoutet, verwendet er diese Informationen, um zu bestimmen, welches in [`srcset`](#srcset) definiertes Bild angezeigt werden soll. Beachten Sie, dass `sizes` nur wirksam wird, wenn Breitenbeschreiber mit `srcset` bereitgestellt werden und nicht Pixeldichtebeschreiber (d.h. `200w` sollte anstelle von `2x` verwendet werden).

- `media`

  - : Gibt die [Medienanfrage](/de/docs/Web/CSS/CSS_media_queries) für das beabsichtigte Medium der Ressource an.

- `height`

  - : Gibt die intrinsische Höhe des Bildes in Pixeln an. Erlaubt, wenn das Elternelement von `<source>` ein {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn das Elternelement {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Der Höhenwert muss eine Ganzzahl ohne Maßeinheit sein.

- `width`

  - : Gibt die intrinsische Breite des Bildes in Pixeln an. Erlaubt, wenn das Elternelement von `<source>` ein {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn das Elternelement {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Der Breitenwert muss eine Ganzzahl ohne Maßeinheit sein.

## Verwendungshinweise

Das `<source>`-Element ist ein **[void element](/de/docs/Glossary/void_element)**, was bedeutet, dass es nicht nur keinen Inhalt hat, sondern auch kein Schlusstag hat. Das heißt, Sie benutzen _niemals_ `</source>` in Ihrem HTML.

Der Browser geht eine Liste von `<source>`-Elementen durch, um ein Format zu finden, das er unterstützt. Er verwendet das erste, das er darstellen kann. Für jedes `<source>`-Element gilt Folgendes:

- Wenn das `type`-Attribut nicht angegeben ist, ruft der Browser den Medientyp vom Server ab und entscheidet dann, ob es dargestellt werden kann. Wenn das Medium nicht dargestellt werden kann, prüft der Browser das nächste `<source>` in der Liste.
- Wenn das `type`-Attribut angegeben ist, vergleicht der Browser es sofort mit den Medientypen, die er darstellen kann. Wenn der Typ nicht unterstützt wird, überspringt der Browser die Serverabfrage und prüft direkt das nächste `<source>`-Element.

Wenn keines der `<source>`-Elemente eine brauchbare Quelle bietet:

- Im Fall eines `<picture>`-Elements wird der Browser auf das im `<picture>`-Element angegebene Bild im {{HTMLElement("img")}}-Kind zurückgreifen.
- Im Fall eines `<audio>`- oder `<video>`-Elements wird der Browser auf den Inhalt zwischen den öffnen und schließen Tags des Elements zurückgreifen.

Für Informationen zu den von Webbrowsern unterstützten Bildformaten und Leitfäden zur Auswahl von geeigneten Formaten siehe unseren [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Formats/Image_types). Für Einzelheiten zu den Video- und Audiomedientypen, die Sie verwenden können, siehe den [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Formats).

## Beispiele

### Verwendung des `type`-Attributs mit `<video>`

Dieses Beispiel zeigt, wie ein Video in verschiedenen Formaten angeboten werden kann: WebM für Browser, die es unterstützen, Ogg für diejenigen, die Ogg unterstützen, und QuickTime für Browser, die QuickTime unterstützen. Wenn das `<audio>`- oder `<video>`-Element vom Browser nicht unterstützt wird, wird eine Benachrichtigung angezeigt. Wenn der Browser das Element unterstützt, aber keines der angegebenen Formate unterstützt, wird ein `error`-Event ausgelöst, und die Standard-Mediensteuerungen (falls aktiviert) zeigen einen Fehler an. Für weitere Einzelheiten, welche Mediendateiformate verwendet werden sollen und deren Browser-Unterstützung, verweisen wir auf unseren [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Formats).

```html
<video controls>
  <source src="foo.webm" type="video/webm" />
  <source src="foo.ogg" type="video/ogg" />
  <source src="foo.mov" type="video/quicktime" />
  I'm sorry; your browser doesn't support HTML video.
</video>
```

### Verwendung des `media`-Attributs mit `<video>`

Dieses Beispiel zeigt, wie eine alternative Quelldatei für Ansichtsfenster oberhalb einer bestimmten Breite angeboten werden kann. Wenn die Browsing-Umgebung eines Benutzers der angegebenen `media`-Bedingung entspricht, wird das zugehörige `<source>`-Element ausgewählt. Die Inhalte seines `src`-Attributs werden dann angefordert und angezeigt. Wenn die `media`-Bedingung nicht zutrifft, geht der Browser zum nächsten `<source>` in der Liste über. Die zweite `<source>`-Option im folgenden Code hat keine `media`-Bedingung, sodass sie für alle anderen Browsing-Kontexte ausgewählt wird.

```html
<video controls>
  <source src="foo-large.webm" media="(min-width: 800px)" />
  <source src="foo.webm" />
  I'm sorry; your browser doesn't support HTML video.
</video>
```

Für weitere Beispiele ist der Artikel [Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) im Lernbereich eine großartige Ressource.

### Verwendung des `media`-Attributs mit `<picture>`

In diesem Beispiel sind zwei `<source>`-Elemente innerhalb von {{HTMLElement("picture")}} enthalten, die Versionen eines Bildes bereitstellen, die verwendet werden, wenn der verfügbare Platz bestimmte Breiten überschreitet. Wenn die verfügbare Breite kleiner als die kleinste dieser Breiten ist, fällt der Browser auf das im {{HTMLElement("img")}}-Element angegebene Bild zurück.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(min-width: 800px)" />
  <source srcset="mdn-logo-medium.png" media="(min-width: 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN Web Docs" />
</picture>
```

Beim `<picture>`-Element müssen Sie immer ein `<img>` mit einem Fallback-Bild einfügen. Stellen Sie außerdem sicher, dass Sie ein `alt`-Attribut zur Barrierefreiheit hinzufügen, es sei denn, das Bild ist rein dekorativ und für den Inhalt irrelevant.

### Verwendung der Attribute `height` und `width` mit `<picture>`

In diesem Beispiel sind drei `<source>`-Elemente mit `height`- und `width`-Attributen in einem {{HTMLElement("picture")}}-Element enthalten. Eine [Medienanfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) ermöglicht es dem Browser, basierend auf der [Ansichtsfenstergröße](/de/docs/Glossary/Viewport) ein anzuzeigendes Bild mit den Attributen `height` und `width` auszuwählen.

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
      <td>Keiner; es ist ein [void element](/de/docs/Glossary/void_element).</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        <div>
          Ein Medienelement—{{HTMLElement("audio")}} oder
          {{HTMLElement("video")}}—und es muss vor jedem
          <a href="/de/docs/Web/HTML/Content_categories#flow_content"
            >Flow-Inhalt</a
          >
          oder {{HTMLElement("track")}}-Element platziert werden.
        </div>
        <div>
          Ein {{HTMLElement("picture")}}-Element, und es muss vor dem
          {{HTMLElement("img")}}-Element platziert werden.
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
- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Formats/Image_types)
- [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Formats)
- [Web-Performance](/de/docs/Learn/Performance)
