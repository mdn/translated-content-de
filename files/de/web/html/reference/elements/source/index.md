---
title: "<source>: Das Medien- oder Bildquelle-Element"
slug: Web/HTML/Reference/Elements/source
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{HTMLSidebar}}

Das **`<source>`** [HTML](/de/docs/Web/HTML)-Element gibt eine oder mehrere Medienressourcen für die Elemente {{HTMLElement("picture")}}, {{HTMLElement("audio")}} und {{HTMLElement("video")}} an. Es ist ein {{Glossary("void_element", "leeres Element")}}, was bedeutet, dass es keinen Inhalt hat und kein Schluss-Tag benötigt. Dieses Element wird häufig verwendet, um dasselbe Medieninhalt in mehreren Dateiformaten anzubieten, um Kompatibilität mit einer breiten Palette von Browsern zu gewährleisten, da diese unterschiedliche Unterstützung für [Bilddateiformate](/de/docs/Web/Media/Guides/Formats/Image_types) und [Mediendateiformate](/de/docs/Web/Media/Guides/Formats) aufweisen.

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

Dieses Element unterstützt alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes). Zusätzlich können die folgenden Attribute damit verwendet werden:

- `type`
  - : Gibt den [MIME-Mediatyp des Bildes](/de/docs/Web/Media/Guides/Formats/Image_types) oder [einen anderen Medientyp](/de/docs/Web/Media/Guides/Formats/Containers) an, optional mit einem [`codecs`-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter).

- `src`
  - : Gibt die URL der Medienressource an. Erforderlich, wenn das Elternteil von `<source>` {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist. Nicht erlaubt, wenn das Elternteil {{HTMLElement("picture")}} ist.

- `srcset`
  - : Gibt eine kommagetrennte Liste von einem oder mehreren Bild-URLs und deren Beschreibungen an. Erforderlich, wenn das Elternteil von `<source>` {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn das Elternteil {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Die Liste besteht aus durch Kommas getrennten Zeichenfolgen, die eine Reihe von möglichen Bildern für den Browser angeben. Jede Zeichenfolge setzt sich zusammen aus:
    - Einer URL, die den Bildstandort angibt.
    - Einem optionalen Breitenbeschreiber—ein positiver Ganzzahlwert direkt gefolgt von `"w"`, wie `300w`.
    - Einem optionalen Pixeldichtebeschreiber—eine positive Gleitkommazahl direkt gefolgt von `"x"`, wie `2x`.

    Jede Zeichenfolge in der Liste muss entweder einen Breitenbeschreiber oder einen Pixeldichtebeschreiber haben, um gültig zu sein. Diese beiden Beschreiber sollten nicht zusammen verwendet werden; es sollte nur einer durchgängig in der Liste verwendet werden. Der Wert jedes Beschreibers in der Liste muss einzigartig sein. Der Browser wählt anhand dieser Beschreiber das am besten geeignete Bild zum Anzeigen aus. Wenn keine Beschreiber angegeben sind, wird der Standardwert `1x` verwendet. Wenn auch das Attribut `sizes` vorhanden ist, muss jede Zeichenfolge einen Breitenbeschreiber enthalten. Wenn der Browser `srcset` nicht unterstützt, wird `src` für die Standardbildquelle verwendet.

- `sizes`
  - : Gibt eine Liste von Quellgrößen an, die die endgültige gerenderte Breite des Bildes beschreiben. Erlaubt, wenn das Elternteil von `<source>` {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn das Elternteil {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Die Liste besteht aus durch Kommas getrennten Quellgrößen. Jede Quellgröße ist ein Medientyp-Längenpaar. Bevor die Seite dargestellt wird, verwendet der Browser diese Informationen, um zu bestimmen, welches Bild in [`srcset`](#srcset) angezeigt werden soll. Beachten Sie, dass `sizes` nur wirksam wird, wenn Breitenbeschreiber mit `srcset` bereitgestellt werden, nicht Pixeldichtebeschreiber (d.h. `200w` sollte anstelle von `2x` verwendet werden).

- `media`
  - : Gibt die [Media-Query](/de/docs/Web/CSS/CSS_media_queries) für das vorgesehene Medium der Ressource an.

- `height`
  - : Gibt die intrinsische Höhe des Bildes in Pixeln an. Erlaubt, wenn das Elternteil von `<source>` ein {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn das Elternteil {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Der Höhenwert muss ein ganzzahliger Wert ohne Einheiten sein.

- `width`
  - : Gibt die intrinsische Breite des Bildes in Pixeln an. Erlaubt, wenn das Elternteil von `<source>` ein {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn das Elternteil {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Der Breitenwert muss ein ganzzahliger Wert ohne Einheiten sein.

## Anwendungsnoten

Das `<source>`-Element ist ein **{{Glossary("void_element", "leeres Element")}}**, das bedeutet, dass es nicht nur keinen Inhalt hat, sondern auch kein Schluss-Tag. Das heißt, Sie verwenden _niemals_ `</source>` in Ihrem HTML.

Der Browser durchläuft eine Liste von `<source>`-Elementen, um ein Format zu finden, das er unterstützt. Er verwendet das erste, das er anzeigen kann. Für jedes `<source>`-Element gilt:

- Wenn das `type`-Attribut nicht angegeben ist, ruft der Browser den Medientyp vom Server ab und bestimmt, ob es angezeigt werden kann. Wenn das Medium nicht gerendert werden kann, überprüft der Browser das nächste `<source>` in der Liste.
- Wenn das `type`-Attribut angegeben ist, vergleicht der Browser es sofort mit den Medientypen, die er anzeigen kann. Wird der Typ nicht unterstützt, überspringt der Browser die Abfrage des Servers und prüft direkt das nächste `<source>`-Element.

Wenn keines der `<source>`-Elemente eine nutzbare Quelle bereitstellt:

- Im Fall eines `<picture>`-Elements verwendet der Browser das Bild, das im {{HTMLElement("img")}}-Kind des `<picture>`-Elements angegeben ist.
- Im Fall eines `<audio>` oder `<video>`-Elements zeigt der Browser den Inhalt an, der sich zwischen dem öffnenden und schließenden Tag des Elements befindet.

Für Informationen über Bildformate, die von Webbrowsern unterstützt werden, und Anleitungen zur Auswahl geeigneter Formate, sehen Sie sich unseren [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types) an. Für Details zu den Video- und Audiomedientypen, die Sie verwenden können, siehe den [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats).

## Beispiele

### Verwendung des `type`-Attributs mit `<video>`

Dieses Beispiel zeigt, wie man ein Video in verschiedenen Formaten anbietet: WebM für Browser, die es unterstützen, Ogg für solche, die Ogg unterstützen, und QuickTime für Browser, die QuickTime unterstützen. Wenn das `<audio>` oder `<video>`-Element vom Browser nicht unterstützt wird, wird stattdessen ein Hinweis angezeigt. Unterstützt der Browser das Element, jedoch keines der angegebenen Formate, wird ein `error`-Ereignis auf dem `<audio>` oder `<video>`-Element ausgelöst und die Standard-Mediendateisteuerungen (falls aktiviert) zeigen einen Fehler an. Weitere Details dazu, welche Medienformate Sie verwenden sollten und deren Browserunterstützung, finden Sie in unserem [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats).

```html
<video controls>
  <source src="foo.webm" type="video/webm" />
  <source src="foo.ogg" type="video/ogg" />
  <source src="foo.mov" type="video/quicktime" />
  I'm sorry; your browser doesn't support HTML video.
</video>
```

### Verwendung des `media`-Attributs mit `<video>`

Dieses Beispiel zeigt, wie man eine alternative Quelldatei für Viewports über einer bestimmten Breite anbietet. Wenn die Browserumgebung des Nutzers die angegebene `media`-Bedingung erfüllt, wird das zugehörige `<source>`-Element ausgewählt. Der Inhalt des `src`-Attributs wird dann angefordert und dargestellt. Wenn die `media`-Bedingung nicht erfüllt ist, geht der Browser zum nächsten `<source>` in der Liste über. Die zweite `<source>`-Option im unten stehenden Code hat keine `media`-Bedingung, sodass sie für alle anderen Browserkontexte ausgewählt wird.

```html
<video controls>
  <source src="foo-large.webm" media="(width >= 800px)" />
  <source src="foo.webm" />
  I'm sorry; your browser doesn't support HTML video.
</video>
```

Für weitere Beispiele ist der Artikel [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) im Learn-Bereich eine großartige Ressource.

### Verwendung des `media`-Attributs mit `<picture>`

In diesem Beispiel sind zwei `<source>`-Elemente innerhalb von {{HTMLElement("picture")}} enthalten, die Versionen eines Bildes anbieten, das verwendet wird, wenn der verfügbare Platz bestimmte Breiten überschreitet. Wenn die verfügbare Breite kleiner ist als die kleinste dieser Breiten, wird der Browser auf das im {{HTMLElement("img")}}-Element angegebene Bild zurückgreifen.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(width >= 800px)" />
  <source srcset="mdn-logo-medium.png" media="(width >= 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN Web Docs" />
</picture>
```

Beim `<picture>`-Element müssen Sie immer ein `<img>` mit einem Ersatzbild einfügen. Fügen Sie auch ein `alt`-Attribut für die Barrierefreiheit hinzu, es sei denn, das Bild ist rein dekorativ und irrelevant für den Inhalt.

### Verwendung der `height`- und `width`-Attribute mit `<picture>`

In diesem Beispiel sind drei `<source>`-Elemente mit `height`- und `width`-Attributen in einem {{HTMLElement("picture")}}-Element enthalten. Eine [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) ermöglicht es dem Browser, ein Bild zur Anzeige mit den `height`- und `width`-Attributen basierend auf der {{Glossary("Viewport", "Viewport")}}-Größe auszuwählen.

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
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Es muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Elternteile</th>
      <td>
        <div>
          Ein Medienelement—{{HTMLElement("audio")}} oder
          {{HTMLElement("video")}}—und es muss vor jedem
          <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
            >fließenden Inhalt</a
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
- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types)
- [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats)
- [Web-Performance](/de/docs/Learn_web_development/Extensions/Performance)
