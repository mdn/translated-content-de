---
title: "<source>: Das Media- oder Bildquelle-Element"
slug: Web/HTML/Element/source
l10n:
  sourceCommit: 0af6781c93ffe3d011a060b4e517187cf780e93a
---

{{HTMLSidebar}}

Das **`<source>`** [HTML](/de/docs/Web/HTML) Element gibt eine oder mehrere Medienressourcen für die {{HTMLElement("picture")}}, {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elemente an. Es ist ein {{glossary("void element")}}, was bedeutet, dass es keinen Inhalt hat und kein schließendes Tag benötigt. Dieses Element wird häufig verwendet, um denselben Medieninhalt in mehreren Dateiformaten anzubieten, um eine Kompatibilität mit einer Vielzahl von Browsern zu gewährleisten, angesichts deren unterschiedlicher Unterstützung für [Bilddateiformate](/de/docs/Web/Media/Formats/Image_types) und [Mediendateiformate](/de/docs/Web/Media/Formats).

{{EmbedInteractiveExample("pages/tabbed/source.html", "tabbed-standard")}}

## Attribute

Dieses Element unterstützt alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes). Zusätzlich können folgende Attribute damit verwendet werden:

- `type`

  - : Gibt den [MIME-Medientyp des Bildes](/de/docs/Web/Media/Formats/Image_types) oder [einen anderen Medientyp](/de/docs/Web/Media/Formats/Containers) an, einschließlich eines optionalen [`codecs` Parameter](/de/docs/Web/Media/Formats/codecs_parameter).

- `src`

  - : Gibt die URL der Medienressource an. Erforderlich, wenn das übergeordnete Element von `<source>` {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist. Nicht erlaubt, wenn das übergeordnete Element {{HTMLElement("picture")}} ist.

- `srcset`

  - : Gibt eine durch Kommas getrennte Liste von einem oder mehreren Bilder-URLs und deren Beschreibungen an. Erforderlich, wenn das übergeordnete Element von `<source>` {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Die Liste besteht aus durch Kommas getrennten Zeichenfolgen, die eine Reihe möglicher Bilder angeben, die der Browser verwenden kann. Jede Zeichenfolge besteht aus:

    - Einer URL, die den Speicherort eines Bildes angibt.
    - Einer optionalen Breitenbeschreibung – eine positive ganze Zahl, direkt gefolgt von `"w"`, wie `300w`.
    - Einer optionalen Pixeldichtebeschreibung – eine positive Fließkommazahl, direkt gefolgt von `"x"`, wie `2x`.

    Jede Zeichenfolge in der Liste muss entweder eine Breitenbeschreibung oder eine Pixeldichtebeschreibung haben, um gültig zu sein. Diese beiden Beschreibungen sollten nicht zusammen verwendet werden; nur eine sollte konsistent über die Liste hinweg verwendet werden. Der Wert jeder Beschreibung in der Liste muss einzigartig sein. Basierend auf diesen Beschreibungen wählt der Browser das am besten geeignete Bild aus, das zu einem bestimmten Zeitpunkt angezeigt wird. Wenn die Beschreibungen nicht angegeben sind, wird als Standardwert `1x` verwendet. Wenn auch das `sizes` Attribut vorhanden ist, muss jede Zeichenfolge eine Breitenbeschreibung enthalten. Wenn der Browser `srcset` nicht unterstützt, wird `src` als Standardbildquelle verwendet.

- `sizes`

  - : Gibt eine Liste von Quellgrößen an, die die endgültige gerenderte Breite des Bildes beschreiben. Erlaubt, wenn das übergeordnete Element von `<source>` {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Die Liste besteht aus Quellgrößen, die durch Kommas getrennt sind. Jede Quellgröße ist ein Medienbedingung-Längen-Paar. Bevor das Layout der Seite erstellt wird, verwendet der Browser diese Informationen, um zu bestimmen, welches Bild, das in [`srcset`](#srcset) definiert ist, angezeigt werden soll. Beachten Sie, dass `sizes` nur wirksam wird, wenn Breitenbeschreibungen mit `srcset` bereitgestellt werden, nicht Pixeldichtebeschreibungen (d. h. `200w` sollte anstelle von `2x` verwendet werden).

- `media`

  - : Gibt die [Media Query](/de/docs/Web/CSS/CSS_media_queries) für das vorgesehene Medium der Ressource an.

- `height`

  - : Gibt die intrinsische Höhe des Bildes in Pixeln an. Erlaubt, wenn das übergeordnete Element von `<source>` ein {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Der Höhenwert muss eine ganze Zahl ohne Einheiten sein.

- `width`

  - : Gibt die intrinsische Breite des Bildes in Pixeln an. Erlaubt, wenn das übergeordnete Element von `<source>` ein {{HTMLElement("picture")}} ist. Nicht erlaubt, wenn das übergeordnete Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}} ist.

    Der Breitenwert muss eine ganze Zahl ohne Einheiten sein.

## Verwendungshinweise

Das `<source>` Element ist ein **{{glossary("void element")}}**, was bedeutet, dass es nicht nur keinen Inhalt hat, sondern auch kein schließendes Tag hat. Das bedeutet, dass Sie _niemals_ "`</source>`" in Ihrem HTML verwenden.

Der Browser durchsucht eine Liste von `<source>` Elementen, um ein Format zu finden, das er unterstützt. Er verwendet das erste, das er anzeigen kann. Für jedes `<source>` Element gilt:

- Wenn das `type` Attribut nicht angegeben ist, ruft der Browser den Medientyp vom Server ab und bestimmt, ob es angezeigt werden kann. Wenn das Medium nicht gerendert werden kann, prüft der Browser das nächste `<source>` in der Liste.
- Wenn das `type` Attribut angegeben ist, vergleicht der Browser es sofort mit den Medientypen, die er anzeigen kann. Wenn der Typ nicht unterstützt wird, überspringt der Browser die Abfrage beim Server und überprüft direkt das nächste `<source>` Element.

Wenn keines der `<source>` Elemente eine verwendbare Quelle bietet:

- Im Fall eines `<picture>` Elements wird der Browser auf das Bild zurückgreifen, das im {{HTMLElement("img")}} Kind des `<picture>` Elements angegeben ist.
- Im Fall eines `<audio>` oder `<video>` Elements wird der Browser auf die Anzeige des Inhalts zurückgreifen, der zwischen den öffnenden und schließenden Tags des Elements enthalten ist.

Für Informationen zu Bildformaten, die von Webbrowsern unterstützt werden, und Ratschläge zur Auswahl geeigneter Formate verweisen wir auf unseren [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Formats/Image_types). Für Details zu den Video- und Audiomediendateitypen, die Sie verwenden können, verweisen wir auf den [Leitfaden zu Medientypen und Formaten](/de/docs/Web/Media/Formats).

## Beispiele

### Verwendung des `type` Attributs mit `<video>`

Dieses Beispiel zeigt, wie man ein Video in verschiedenen Formaten anbietet: WebM für unterstützende Browser, Ogg für solche, die Ogg unterstützen, und QuickTime für Browser, die QuickTime unterstützen. Wenn das `<audio>` oder `<video>` Element vom Browser nicht unterstützt wird, wird stattdessen eine Benachrichtigung angezeigt. Wenn der Browser das Element unterstützt, jedoch keines der angegebenen Formate, wird ein `error` Event ausgelöst und die Standard-Mediensteuerungen (wenn aktiviert) zeigen einen Fehler an. Für weitere Details darüber, welche Medienformate zu verwenden sind und deren Browserunterstützung, verweisen wir auf unseren [Leitfaden zu Medientypen und Formaten](/de/docs/Web/Media/Formats).

```html
<video controls>
  <source src="foo.webm" type="video/webm" />
  <source src="foo.ogg" type="video/ogg" />
  <source src="foo.mov" type="video/quicktime" />
  Es tut uns leid; Ihr Browser unterstützt kein HTML-Video.
</video>
```

### Verwendung des `media` Attributs mit `<video>`

Dieses Beispiel zeigt, wie man eine alternative Quelldatei für Viewports oberhalb einer bestimmten Breite anbietet. Wenn die Browsing-Umgebung eines Benutzers die spezifizierte `media` Bedingung erfüllt, wird das zugehörige `<source>` Element ausgewählt. Der Inhalt seines `src` Attributs wird dann angefordert und gerendert. Wenn die `media` Bedingung nicht zutrifft, geht der Browser zum nächsten `<source>` in der Liste über. Die zweite `<source>` Option im untenstehenden Code hat keine `media` Bedingung, daher wird sie für alle anderen Browsing-Kontexte ausgewählt.

```html
<video controls>
  <source src="foo-large.webm" media="(min-width: 800px)" />
  <source src="foo.webm" />
  Es tut uns leid; Ihr Browser unterstützt kein HTML-Video.
</video>
```

Für weitere Beispiele ist der Artikel [Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) im Lernbereich eine gute Ressource.

### Verwendung des `media` Attributs mit `<picture>`

In diesem Beispiel sind zwei `<source>` Elemente innerhalb von {{HTMLElement("picture")}} enthalten, die Versionen eines Bildes bereitstellen, die verwendet werden sollen, wenn der verfügbare Platz bestimmte Breiten überschreitet. Wenn die verfügbare Breite kleiner ist als die kleinste dieser Breiten, wird der Browser auf das Bild zurückgreifen, das im {{HTMLElement("img")}} Element angegeben ist.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(min-width: 800px)" />
  <source srcset="mdn-logo-medium.png" media="(min-width: 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN Web Docs" />
</picture>
```

Beim `<picture>` Element müssen Sie immer ein `<img>` mit einem Fallback-Bild einfügen. Stellen Sie außerdem sicher, dass ein `alt` Attribut für die Barrierefreiheit hinzugefügt wird, es sei denn, das Bild ist rein dekorativ und für den Inhalt irrelevant.

### Verwendung der `height` und `width` Attribute mit `<picture>`

In diesem Beispiel sind drei `<source>` Elemente mit `height` und `width` Attributen in einem {{HTMLElement("picture")}} Element enthalten. Eine [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) ermöglicht es dem Browser, ein Bild mit den `height` und `width` Attributen basierend auf der [Viewport](/de/docs/Glossary/Viewport) Größe auszuwählen.

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
    alt="Bild, das verwendet wird, wenn der Browser die Quellen nicht unterstützt"
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
      <td>Kein; es ist ein {{Glossary("void element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf kein End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        <div>
          Ein Medienelement — {{HTMLElement("audio")}} oder
          {{HTMLElement("video")}} — und es muss vor jedem
          <a href="/de/docs/Web/HTML/Content_categories#flow_content"
            >Flussinhalt</a
          >
          oder {{HTMLElement("track")}} Element platziert werden.
        </div>
        <div>
          Ein {{HTMLElement("picture")}} Element, und es muss vor dem
          {{HTMLElement("img")}} Element platziert werden.
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA Rolle</th>
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
      <td>{{domxref("HTMLSourceElement")}}</td>
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
- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Formats/Image_types)
- [Leitfaden zu Medientypen und Formaten](/de/docs/Web/Media/Formats)
- [Web-Performance](/de/docs/Learn/Performance)
