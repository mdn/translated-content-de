---
title: "<source>: Das Media- oder Bildquell-Element"
slug: Web/HTML/Element/source
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTMLSidebar}}

Das **`<source>`** [HTML](/de/docs/Web/HTML) Element gibt eine oder mehrere Medienressourcen für die {{HTMLElement("picture")}}, {{HTMLElement("audio")}} und {{HTMLElement("video")}}-Elemente an. Es ist ein [void element](/de/docs/Glossary/void_element), was bedeutet, dass es keinen Inhalt hat und kein End-Tag benötigt. Dieses Element wird häufig verwendet, um denselben Medieninhalt in mehreren Dateiformaten anzubieten, um die Kompatibilität mit einer großen Bandbreite an Browsern sicherzustellen, die unterschiedliche Unterstützung für [Bilddateiformate](/de/docs/Web/Media/Formats/Image_types) und [Mediendateiformate](/de/docs/Web/Media/Formats) haben.

{{EmbedInteractiveExample("pages/tabbed/source.html", "tabbed-standard")}}

## Attribute

Dieses Element unterstützt alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes). Zusätzlich können folgende Attribute verwendet werden:

- `type`

  - : Gibt den [MIME-Medientyp des Bildes](/de/docs/Web/Media/Formats/Image_types) oder [einen anderen Medientyp](/de/docs/Web/Media/Formats/Containers) an, optional einschließlich eines [`codecs`-Parameters](/de/docs/Web/Media/Formats/codecs_parameter).

- `src`

  - : Gibt die URL der Medienressource an. Erforderlich, wenn das übergeordnete Element von `<source>` {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist. Nicht erlaubt, wenn das übergeordnete Element {{HTMLElement("picture")}} ist.

- `srcset`

  - : Gibt eine durch Komma getrennte Liste von einem oder mehreren Bild-URLs und deren Beschreibungen an. Erforderlich, wenn das übergeordnete Element von `<source>` {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Die Liste besteht aus durch Kommata getrennten Zeichenfolgen, die eine Reihe möglicher Bilder angeben, die der Browser verwenden kann. Jede Zeichenfolge setzt sich zusammen aus:

    - Einer URL, die den Speicherort eines Bildes angibt.
    - Einem optionalen Breitenbeschreiber—eine positive ganze Zahl direkt gefolgt von `"w"`, wie `300w`.
    - Einem optionalen Pixeldichtebeschreiber—eine positive Gleitkommazahl direkt gefolgt von `"x"`, wie `2x`.

    Jede Zeichenfolge in der Liste muss entweder einen Breitenbeschreiber oder einen Pixeldichtebeschreiber haben, um gültig zu sein. Diese beiden Beschreiber sollten nicht gemeinsam verwendet werden; nur einer sollte konsistent über die gesamte Liste verwendet werden. Der Wert jedes Beschreibers in der Liste muss einzigartig sein. Der Browser wählt das am besten geeignete Bild zur Anzeige zu einem bestimmten Zeitpunkt basierend auf diesen Beschreibern aus. Wenn keine Beschreiber angegeben sind, wird der Standardwert `1x` verwendet. Wenn auch das `sizes`-Attribut vorhanden ist, muss jede Zeichenfolge einen Breitenbeschreiber enthalten. Wenn der Browser `srcset` nicht unterstützt, wird `src` als Standardbildquelle verwendet.

- `sizes`

  - : Gibt eine Liste von Quellengrößen an, die die endgültige gerenderte Breite des Bildes beschreiben. Erlaubt, wenn das übergeordnete Element von `<source>` {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Die Liste besteht aus Quellengrößen, die durch Kommata getrennt sind. Jede Quellengröße ist ein Medienbedingung-Längen-Paar. Vor dem Layout der Seite verwendet der Browser diese Informationen, um zu bestimmen, welches Bild in [`srcset`](#srcset) angezeigt werden soll. Beachten Sie, dass `sizes` nur dann Wirkung zeigt, wenn Breitenbeschreiber mit `srcset` angegeben werden, nicht jedoch Pixeldichtebeschreiber (d. h. `200w` sollte anstelle von `2x` verwendet werden).

- `media`

  - : Gibt die [Media-Query](/de/docs/Web/CSS/CSS_media_queries) für das beabsichtigte Medium der Ressource an.

- `height`

  - : Gibt die intrinsische Höhe des Bildes in Pixeln an. Erlaubt, wenn das übergeordnete Element von `<source>` ein {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Der Höhenwert muss eine ganze Zahl ohne Einheiten sein.

- `width`

  - : Gibt die intrinsische Breite des Bildes in Pixeln an. Erlaubt, wenn das übergeordnete Element von `<source>` ein {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Der Breitenwert muss eine ganze Zahl ohne Einheiten sein.

## Verwendungshinweise

Das `<source>`-Element ist ein **[void element](/de/docs/Glossary/void_element)**, was bedeutet, dass es nicht nur keinen Inhalt hat, sondern auch kein End-Tag. Das heißt, Sie verwenden _niemals_ `</source>` in Ihrem HTML.

Der Browser durchsucht eine Liste von `<source>`-Elementen, um ein Format zu finden, das er unterstützt. Er verwendet das erste, das er anzeigen kann. Für jedes `<source>`-Element:

- Wenn das `type`-Attribut nicht angegeben ist, ruft der Browser den Medientyp vom Server ab und bestimmt, ob er angezeigt werden kann. Wenn das Medium nicht gerendert werden kann, überprüft der Browser das nächste `<source>` in der Liste.
- Wenn das `type`-Attribut angegeben ist, vergleicht der Browser es sofort mit den Medientypen, die er anzeigen kann. Wenn der Typ nicht unterstützt wird, überspringt der Browser die Abfrage beim Server und überprüft direkt das nächste `<source>`-Element.

Wenn keines der `<source>`-Elemente eine verwendbare Quelle bereitstellt:

- Im Fall eines `<picture>`-Elements wird der Browser auf das Bild zurückfallen, das im {{HTMLElement("picture")}}-Element angegeben ist.
- Im Fall eines `<audio>` oder `<video>`-Elements wird der Browser den zwischen den Öffnungs- und Schlusstag des Elements enthaltenen Inhalt anzeigen.

Für Informationen über von Webbrowsern unterstützte Bildformate und Anleitungen zur Auswahl geeigneter Formate siehe unseren [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Formats/Image_types). Für Details zu den Video- und Audiomedientypen, die Sie verwenden können, sehen Sie unseren [Leitfaden zu Medienarten und -formaten](/de/docs/Web/Media/Formats).

## Beispiele

### Verwendung des `type`-Attributs mit `<video>`

Dieses Beispiel zeigt, wie man ein Video in verschiedenen Formaten anbietet: WebM für Browser, die es unterstützen, Ogg für die, die Ogg unterstützen, und QuickTime für Browser, die QuickTime unterstützen. Wird das `<audio>`- oder `<video>`-Element vom Browser nicht unterstützt, wird stattdessen ein Hinweis angezeigt. Wenn der Browser das Element unterstützt, aber keines der angegebenen Formate unterstützt, wird ein `error`-Ereignis ausgelöst und die standardmäßigen Mediensteuerelemente (falls aktiviert) zeigen einen Fehler an. Für weitere Details zu den zu verwendenden Medienformaten und ihrer Browserunterstützung, sehen Sie unseren [Leitfaden zu Medienarten und -formaten](/de/docs/Web/Media/Formats).

```html
<video controls>
  <source src="foo.webm" type="video/webm" />
  <source src="foo.ogg" type="video/ogg" />
  <source src="foo.mov" type="video/quicktime" />
  I'm sorry; your browser doesn't support HTML video.
</video>
```

### Verwendung des `media`-Attributs mit `<video>`

Dieses Beispiel zeigt, wie man eine alternative Quelldatei für Ansichtsfenster über einer bestimmten Breite anbietet. Wenn die Browserumgebung eines Benutzers die angegebene `media`-Bedingung erfüllt, wird das zugehörige `<source>`-Element ausgewählt. Der Inhalt seines `src`-Attributs wird dann angefordert und gerendert. Wenn die `media`-Bedingung nicht übereinstimmt, geht der Browser zur nächsten `<source>` in der Liste über. Die zweite `<source>`-Option im folgenden Code hat keine `media`-Bedingung, daher wird sie für alle anderen Browsing-Kontexte ausgewählt.

```html
<video controls>
  <source src="foo-large.webm" media="(min-width: 800px)" />
  <source src="foo.webm" />
  I'm sorry; your browser doesn't support HTML video.
</video>
```

Für weitere Beispiele ist der Artikel [Video- und Audi-Inhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) im Learn-Bereich eine großartige Ressource.

### Verwendung des `media`-Attributs mit `<picture>`

In diesem Beispiel sind zwei `<source>`-Elemente innerhalb von {{HTMLElement("picture")}} enthalten, die Versionen eines Bildes anbieten, wenn der verfügbare Platz bestimmte Breiten überschreitet. Wenn die verfügbare Breite kleiner ist als die kleinste dieser Breiten, fällt der Browser auf das im {{HTMLElement("img")}}-Element angegebene Bild zurück.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(min-width: 800px)" />
  <source srcset="mdn-logo-medium.png" media="(min-width: 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN Web Docs" />
</picture>
```

Mit dem `<picture>`-Element müssen Sie immer ein `<img>` mit einem Fallback-Bild einfügen. Stellen Sie außerdem sicher, dass Sie ein `alt`-Attribut für die Barrierefreiheit hinzufügen, es sei denn, das Bild ist rein dekorativ und für den Inhalt irrelevant.

### Verwendung der `height` und `width` Attribute mit `<picture>`

In diesem Beispiel sind drei `<source>`-Elemente mit `height` und `width` Attributen in einem {{HTMLElement("picture")}}-Element enthalten.
Eine [Media-Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) ermöglicht es dem Browser, basierend auf der [Viewport](/de/docs/Glossary/Viewport)-Größe ein anzuzeigendes Bild mit den `height` und `width` Attributen auszuwählen.

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
      <td>Muss ein Start-Tag haben und darf kein End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        <div>
          Ein Medien-Element—{{HTMLElement("audio")}} oder
          {{HTMLElement("video")}}—und es muss vor jedem
          <a href="/de/docs/Web/HTML/Content_categories#flow_content"
            >Flussinhalt</a
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
- [Leitfaden zu Medienarten und -formaten](/de/docs/Web/Media/Formats)
- [Web-Performance](/de/docs/Learn/Performance)
