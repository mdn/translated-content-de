---
title: "<source>: Das Media- oder Bildquellen-Element"
slug: Web/HTML/Reference/Elements/source
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **`<source>`**-Element von [HTML](/de/docs/Web/HTML) spezifiziert eine oder mehrere Medienressourcen für die {{HTMLElement("picture")}}, {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elemente. Es ist ein {{Glossary("void_element", "void element")}}, was bedeutet, dass es keinen Inhalt hat und kein abschließendes Tag benötigt. Dieses Element wird häufig verwendet, um denselben Medieninhalt in mehreren Dateiformaten anzubieten, um die Kompatibilität mit einer Vielzahl von Browsern sicherzustellen, angesichts ihrer unterschiedlichen Unterstützung für [Bilddateiformate](/de/docs/Web/Media/Guides/Formats/Image_types) und [Mediendateiformate](/de/docs/Web/Media/Guides/Formats).

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

  - : Spezifiziert den [MIME-Medientyp des Bildes](/de/docs/Web/Media/Guides/Formats/Image_types) oder [andere Medientypen](/de/docs/Web/Media/Guides/Formats/Containers), optional einschließlich eines [`codecs` Parameters](/de/docs/Web/Media/Guides/Formats/codecs_parameter).

- `src`

  - : Gibt die URL der Medienressource an. Erforderlich, wenn das übergeordnete Element von `<source>` {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist. Nicht erlaubt, wenn das übergeordnete Element {{HTMLElement("picture")}} ist.

- `srcset`

  - : Gibt eine kommagetrennte Liste von einem oder mehreren Bild-URLs und ihren Beschreibungen an. Erforderlich, wenn das übergeordnete Element von `<source>` {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Die Liste besteht aus kommaseparierten Zeichenfolgen, die eine Reihe möglicher Bilder für den Browser zur Auswahl angeben. Jede Zeichenfolge besteht aus:

    - Einer URL, die den Speicherort eines Bildes angibt.
    - Einem optionalen Breitenbeschreibung—eine positive Ganzzahl, gefolgt von `"w"`, z. B. `300w`.
    - Einem optionalen Pixeldichtebeschreibung—eine positive Gleitkommazahl, gefolgt von `"x"`, z. B. `2x`.

    Jede Zeichenfolge in der Liste muss entweder eine Breitenbeschreibung oder eine Pixeldichtebeschreibung haben, um gültig zu sein. Diese beiden Beschreibungen sollten nicht zusammen verwendet werden; nur eine sollte konsequent in der gesamten Liste verwendet werden. Der Wert jeder Beschreibung in der Liste muss eindeutig sein. Der Browser wählt das am besten geeignete Bild, um es zu einem gegebenen Zeitpunkt anzuzeigen. Wenn die Beschreibungen nicht angegeben werden, wird der Standardwert `1x` verwendet. Wenn das `sizes` Attribut ebenfalls vorhanden ist, muss jede Zeichenfolge eine Breitenbeschreibung enthalten. Wenn der Browser `srcset` nicht unterstützt, wird `src` als Standardbildquelle verwendet.

- `sizes`

  - : Gibt eine Liste von Quellengrößen an, die die endgültige gerenderte Breite des Bildes beschreiben. Erlaubt, wenn das übergeordnete Element von `<source>` {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Die Liste besteht aus Quellengrößen, getrennt durch Kommata. Jede Quellengröße ist ein Paar aus Medienbedingung und Länge. Bevor die Seite dargestellt wird, verwendet der Browser diese Informationen, um zu bestimmen, welches Bild in [`srcset`](#srcset) angezeigt werden soll. Beachten Sie, dass `sizes` nur wirksam wird, wenn mit `srcset` Breitenbeschreibungen angegeben werden, nicht bei Pixeldichtebeschreibungen (d.h. es sollte `200w` anstelle von `2x` verwendet werden).

- `media`

  - : Gibt die [Medienabfrage](/de/docs/Web/CSS/Guides/Media_queries) für das beabsichtigte Medium der Ressource an.

- `height`

  - : Gibt die intrinsische Höhe des Bildes in Pixeln an. Erlaubt, wenn das übergeordnete Element von `<source>` ein {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Der Höhenwert muss eine Ganzzahl ohne Einheiten sein.

- `width`

  - : Gibt die intrinsische Breite des Bildes in Pixeln an. Erlaubt, wenn das übergeordnete Element von `<source>` ein {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Der Breitenwert muss eine Ganzzahl ohne Einheiten sein.

## Verwendungshinweise

Das `<source>` Element ist ein **{{Glossary("void_element", "void element")}}**, was bedeutet, dass es nicht nur keinen Inhalt hat, sondern auch kein schließendes Tag hat. Das heißt, Sie verwenden _niemals_ `</source>` in Ihrem HTML.

Der Browser durchläuft eine Liste von `<source>` Elementen, um ein Format zu finden, das er unterstützt. Es verwendet das erste, das er anzeigen kann. Für jedes `<source>` Element:

- Wenn das `type` Attribut nicht angegeben ist, ruft der Browser den Medientyp vom Server ab und bestimmt, ob es angezeigt werden kann. Wenn das Medium nicht gerendert werden kann, überprüft der Browser das nächste `<source>` in der Liste.
- Wenn das `type` Attribut angegeben ist, vergleicht der Browser es sofort mit den Medientypen, die er anzeigen kann. Wird der Typ nicht unterstützt, überspringt der Browser die Serveranfrage und überprüft direkt das nächste `<source>` Element.

Wenn keines der `<source>` Elemente eine nutzbare Quelle bereitstellt:

- Im Fall eines `<picture>` Elements fällt der Browser auf das Bild zurück, das im {{HTMLElement("img")}} Kind des `<picture>` Elements angegeben ist.
- Im Fall eines `<audio>` oder `<video>` Elements fällt der Browser darauf zurück, den Inhalt anzuzeigen, der zwischen dem öffnenden und schließenden Tag des Elements enthalten ist.

Für Informationen über von Webbrowsern unterstützte Bildformate und Leitfäden zur Auswahl geeigneter Formate siehe unser [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types). Für Details zu Video- und Audiomedientypen, die Sie verwenden können, siehe den [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats).

## Beispiele

### Verwendung des `type` Attributs mit `<video>`

Dieses Beispiel demonstriert, wie man ein Video in verschiedenen Formaten anbietet: WebM für Browser, die es unterstützen, Ogg für diejenigen, die Ogg unterstützen, und QuickTime für Browser, die QuickTime unterstützen. Wenn das `<audio>` oder `<video>` Element vom Browser nicht unterstützt wird, wird stattdessen ein Hinweis angezeigt. Wenn der Browser das Element unterstützt, aber keines der angegebenen Formate, wird auf dem `<audio>` oder `<video>` Element ein `error` Ereignis ausgelöst und die Standard-Mediensteuerungen (falls aktiviert) zeigen einen Fehler an. Für detailliertere Informationen zu den zu verwendenden Medien-Dateiformaten und deren Browserunterstützung, verweisen wir auf unseren [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats).

```html
<video controls>
  <source src="foo.webm" type="video/webm" />
  <source src="foo.ogg" type="video/ogg" />
  <source src="foo.mov" type="video/quicktime" />
  I'm sorry; your browser doesn't support HTML video.
</video>
```

### Verwendung des `media` Attributs mit `<video>`

Dieses Beispiel zeigt, wie man eine alternative Quelldatei für Ansichtsfenster über einer bestimmten Breite anbietet. Wenn die Browsing-Umgebung eines Benutzers der angegebenen `media` Bedingung entspricht, wird das zugehörige `<source>` Element ausgewählt. Der Inhalt seines `src` Attributs wird dann angefordert und angezeigt. Wenn die `media` Bedingung nicht zutrifft, geht der Browser zum nächsten `<source>` in der Liste über. Die zweite `<source>` Option im unten stehenden Code hat keine `media` Bedingung, daher wird sie für alle anderen Browsing-Kontexte ausgewählt.

```html
<video controls>
  <source src="foo-large.webm" media="(width >= 800px)" />
  <source src="foo.webm" />
  I'm sorry; your browser doesn't support HTML video.
</video>
```

Weitere Beispiele finden Sie im Artikel [HTML video und audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) im Lernbereich.

### Verwendung des `media` Attributs mit `<picture>`

In diesem Beispiel sind zwei `<source>` Elemente innerhalb des {{HTMLElement("picture")}} enthalten, die Versionen eines Bildes bieten, die verwendet werden, wenn der verfügbare Platz bestimmte Breiten überschreitet. Wenn die verfügbare Breite kleiner ist als die kleinste dieser Breiten, fällt der Browser auf das im {{HTMLElement("img")}} Element angegebene Bild zurück.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(width >= 800px)" />
  <source srcset="mdn-logo-medium.png" media="(width >= 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN Web Docs" />
</picture>
```

Mit dem `<picture>` Element müssen Sie immer ein `<img>` mit einem Fallback-Bild einfügen. Stellen Sie auch sicher, ein `alt` Attribut für die Barrierefreiheit hinzuzufügen, es sei denn, das Bild ist rein dekorativ und für den Inhalt irrelevant.

### Verwendung von `height` und `width` Attributen mit `<picture>`

In diesem Beispiel sind drei `<source>` Elemente mit `height` und `width` Attributen in einem {{HTMLElement("picture")}} Element enthalten. Eine [Medienabfrage](/de/docs/Web/CSS/Guides/Media_queries/Using) erlaubt dem Browser, ein Bild zur Anzeige anhand der {{Glossary("Viewport", "Viewport")}} Größe zu wählen.

```html
<picture>
  <source
    srcset="landscape.png"
    media="(width >= 1000px)"
    width="1000"
    height="400" />
  <source
    srcset="square.png"
    media="(width >= 800px)"
    width="800"
    height="800" />
  <source
    srcset="portrait.png"
    media="(width >= 600px)"
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
      <th scope="row">Zulässiger Inhalt</th>
      <td>Kein; es ist ein {{Glossary("void_element", "void element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf kein End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
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
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
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
- [Web Performance](/de/docs/Learn_web_development/Extensions/Performance)
