---
title: "<source>: Das Media- oder Bildquellen-Element"
slug: Web/HTML/Reference/Elements/source
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<source>`**-Element von [HTML](/de/docs/Web/HTML) spezifiziert eine oder mehrere Media-Ressourcen für die {{HTMLElement("picture")}}, {{HTMLElement("audio")}}, und {{HTMLElement("video")}} Elemente. Es handelt sich um ein {{Glossary("void_element", "Void-Element")}}, was bedeutet, dass es keinen Inhalt hat und keinen Schlusstag benötigt. Dieses Element wird häufig verwendet, um denselben Medieninhalt in mehreren Dateiformaten anzubieten, um Kompatibilität mit einer breiten Palette von Browsern zu gewährleisten, die unterschiedliche Unterstützungen für [Bilddateiformate](/de/docs/Web/Media/Guides/Formats/Image_types) und [Mediendateiformate](/de/docs/Web/Media/Guides/Formats) haben.

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
  - : Spezifiziert den [MIME-Medientyp des Bildes](/de/docs/Web/Media/Guides/Formats/Image_types) oder [einen anderen Medientyp](/de/docs/Web/Media/Guides/Formats/Containers), optional einschließlich eines [`codecs`-Parameters](/de/docs/Web/Media/Guides/Formats/codecs_parameter).

- `src`
  - : Spezifiziert die URL der Medienressource. Erforderlich, wenn das übergeordnete Element von `<source>` {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist. Nicht erlaubt, wenn das übergeordnete Element {{HTMLElement("picture")}} ist.

- `srcset`
  - : Spezifiziert eine durch Kommas getrennte Liste von einem oder mehreren Bild-URLs und deren Deskriptoren. Erforderlich, wenn das übergeordnete Element von `<source>` {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Die Liste besteht aus durch Kommas getrennten Zeichenfolgen, die eine Gruppe möglicher Bilder für den Browser angeben. Jede Zeichenfolge setzt sich zusammen aus:
    - Einer URL, die den Speicherort eines Bildes angibt.
    - Einem optionalen Breiten-Deskriptor—einem positiven Integer direkt gefolgt von `"w"`, wie z.B. `300w`.
    - Einem optionalen Pixeldichte-Deskriptor—einer positiven Fließkommazahl direkt gefolgt von `"x"`, wie z.B. `2x`.

    Jede Zeichenfolge in der Liste muss entweder einen Breiten-Deskriptor oder einen Pixeldichte-Deskriptor haben, damit sie gültig ist. Diese beiden Deskriptoren sollten nicht zusammen verwendet werden; nur einer sollte durchgängig in der Liste verwendet werden. Der Wert jedes Deskriptors in der Liste muss einzigartig sein. Der Browser wählt das am besten geeignete Bild zur Anzeige zu einem gegebenen Zeitpunkt basierend auf diesen Deskriptoren. Wenn die Deskriptoren nicht angegeben sind, wird der Standardwert `1x` verwendet. Wenn das `sizes`-Attribut ebenfalls vorhanden ist, dann muss jede Zeichenfolge einen Breiten-Deskriptor enthalten. Wenn der Browser `srcset` nicht unterstützt, wird `src` als Standardbildquelle verwendet.

- `sizes`
  - : Gibt eine Liste von Quellgrößen an, die die endgültige gerenderte Breite des Bildes beschreiben. Erlaubt, wenn das übergeordnete Element von `<source>` {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Die Liste besteht aus Quellgrößen, die durch Kommas getrennt sind. Jede Quellgröße ist ein Medienbedingungs-Längen-Paar. Bevor die Seite dargestellt wird, verwendet der Browser diese Informationen, um zu bestimmen, welches Bild aus [`srcset`](#srcset) angezeigt werden soll. Beachten Sie, dass `sizes` nur dann wirksam wird, wenn Breiten-Deskriptoren mit `srcset` bereitgestellt werden, nicht Pixeldichte-Deskriptoren (d.h. `200w` sollte anstelle von `2x` verwendet werden).

- `media`
  - : Spezifiziert die [Media Query](/de/docs/Web/CSS/CSS_media_queries) für das beabsichtigte Medium der Ressource.

- `height`
  - : Gibt die intrinsische Höhe des Bildes in Pixel an. Erlaubt, wenn das übergeordnete Element von `<source>` ein {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Der Höhenwert muss ein Integer ohne Einheiten sein.

- `width`
  - : Gibt die intrinsische Breite des Bildes in Pixel an. Erlaubt, wenn das übergeordnete Element von `<source>` ein {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Der Breitenwert muss ein Integer ohne Einheiten sein.

## Verwendungshinweise

Das `<source>`-Element ist ein **{{Glossary("void_element", "Void-Element")}}**, was bedeutet, dass es nicht nur keinen Inhalt hat, sondern auch keinen Schlusstag. Das heißt, Sie verwenden _niemals_ `</source>` in Ihrem HTML.

Der Browser geht durch eine Liste von `<source>`-Elementen, um ein Format zu finden, das er unterstützt. Er verwendet das erste, das er darstellen kann. Für jedes `<source>`-Element gilt:

- Wenn das `type`-Attribut nicht angegeben ist, holt der Browser den Medientyp vom Server und ermittelt, ob er angezeigt werden kann. Wenn das Medium nicht gerendert werden kann, überprüft der Browser das nächste `<source>` in der Liste.
- Wenn das `type`-Attribut angegeben ist, vergleicht der Browser es sofort mit den Medientypen, die er anzeigen kann. Wenn der Typ nicht unterstützt wird, überspringt der Browser die Serverabfrage und überprüft direkt das nächste `<source>`-Element.

Wenn keines der `<source>`-Elemente eine verwendbare Quelle bietet:

- Im Falle eines `<picture>`-Elements verwendet der Browser das im `<picture>`-Element angegebene Bild im {{HTMLElement("img")}}-Kind.
- Im Falle eines `<audio>`- oder `<video>`-Elements zeigt der Browser den Inhalt an, der zwischen den öffnenden und schließenden Tags des Elements enthalten ist.

Für Informationen über von Webbrowsern unterstützte Bildformate und Leitfäden zur Auswahl geeigneter Formate siehe unseren [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types). Für Details zu den Video- und Audio-Medientypen, die Sie verwenden können, siehe den [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats).

## Beispiele

### Verwendung des `type`-Attributs mit `<video>`

Dieses Beispiel zeigt, wie man ein Video in verschiedenen Formaten anbietet: WebM für Browser, die es unterstützen, Ogg für diejenigen, die Ogg unterstützen, und QuickTime für Browser, die QuickTime unterstützen. Wenn das `<audio>`- oder `<video>`-Element vom Browser nicht unterstützt wird, wird stattdessen eine Meldung angezeigt. Wenn der Browser das Element unterstützt, aber keines der angegebenen Formate unterstützt, wird ein `error`-Ereignis auf dem `<audio>`- oder `<video>`-Element ausgelöst und die standardmäßigen Mediensteuerungen (falls aktiviert) zeigen einen Fehler an. Weitere Details zu den zu verwendenden Medien-Dateiformaten und deren Browserunterstützung finden Sie in unserem [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats).

```html
<video controls>
  <source src="foo.webm" type="video/webm" />
  <source src="foo.ogg" type="video/ogg" />
  <source src="foo.mov" type="video/quicktime" />
  I'm sorry; your browser doesn't support HTML video.
</video>
```

### Verwendung des `media`-Attributs mit `<video>`

Dieses Beispiel zeigt, wie man eine alternative Quelldatei für Ansichtsfenster über einer bestimmten Breite anbietet. Wenn die Browsing-Umgebung eines Benutzers die angegebene `media`-Bedingung erfüllt, wird das zugeordnete `<source>`-Element ausgewählt. Der Inhalt seines `src`-Attributs wird dann angefordert und gerendert. Wenn die `media`-Bedingung nicht zutrifft, geht der Browser zum nächsten `<source>` in der Liste über. Die zweite `<source>`-Option im untenstehenden Code hat keine `media`-Bedingung, sodass sie für alle anderen Browsing-Kontexte ausgewählt wird.

```html
<video controls>
  <source src="foo-large.webm" media="(width >= 800px)" />
  <source src="foo.webm" />
  I'm sorry; your browser doesn't support HTML video.
</video>
```

Für weitere Beispiele ist der Artikel [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) im Bereich "Lernen" eine großartige Ressource.

### Verwendung des `media`-Attributs mit `<picture>`

In diesem Beispiel sind zwei `<source>`-Elemente innerhalb von {{HTMLElement("picture")}} enthalten und bieten Versionen eines Bildes an, die verwendet werden sollen, wenn der verfügbare Raum bestimmte Breiten überschreitet. Wenn die verfügbare Breite kleiner als die kleinste dieser Breiten ist, fällt der Browser auf das im {{HTMLElement("img")}}-Element angegebene Bild zurück.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(width >= 800px)" />
  <source srcset="mdn-logo-medium.png" media="(width >= 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN Web Docs" />
</picture>
```

Mit dem `<picture>`-Element müssen Sie immer ein `<img>` mit einem Fallback-Bild einschließen. Fügen Sie auch ein `alt`-Attribut für die Barrierefreiheit hinzu, es sei denn, das Bild ist rein dekorativ und irrelevant für den Inhalt.

### Verwendung der `height`- und `width`-Attribute mit `<picture>`

In diesem Beispiel sind drei `<source>`-Elemente mit `height`- und `width`-Attributen in einem {{HTMLElement("picture")}}-Element enthalten. Eine [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) ermöglicht es dem Browser, basierend auf der {{Glossary("Viewport", "Viewport")}}-Größe ein Bild zur Anzeige mit den `height`- und `width`-Attributen auszuwählen.

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

## Technische Übersicht

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
      <td>Kein; es ist ein {{Glossary("void_element", "Void-Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss einen Starttag haben und darf keinen Endtag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        <div>
          Ein Medien-Element—{{HTMLElement("audio")}} oder
          {{HTMLElement("video")}}—und es muss vor jedem
          <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
            >Flow-Inhalt</a
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
      <td>Kein <code>role</code> erlaubt</td>
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
