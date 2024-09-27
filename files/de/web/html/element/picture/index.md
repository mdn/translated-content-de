---
title: "<picture>: Das Picture-Element"
slug: Web/HTML/Element/picture
l10n:
  sourceCommit: 9c09b183a5ce844a75c2f22e909d03f71ca329fc
---

{{HTMLSidebar}}

Das **`<picture>`** [HTML](/de/docs/Web/HTML) Element enthält null oder mehr {{HTMLElement("source")}} Elemente und ein {{HTMLElement("img")}} Element, um alternative Versionen eines Bildes für unterschiedliche Anzeige-/Geräteszenarien anzubieten.

Der Browser betrachtet jedes Kind-`<source>`-Element und wählt das beste unter ihnen aus. Wenn keine Übereinstimmungen gefunden werden – oder der Browser das `<picture>`-Element nicht unterstützt – wird die URL des [`src`](/de/docs/Web/HTML/Element/img#src) Attributs des `<img>`-Elements ausgewählt. Das ausgewählte Bild wird dann im Bereich des `<img>`-Elements angezeigt.

{{EmbedInteractiveExample("pages/tabbed/picture.html", "tabbed-standard")}}

Um zu entscheiden, welche URL geladen werden soll, untersucht der [user agent](/de/docs/Glossary/user_agent) jedes [`srcset`](/de/docs/Web/HTML/Element/source#srcset), [`media`](/de/docs/Web/HTML/Element/source#media), und [`type`](/de/docs/Web/HTML/Element/source#type) Attribut des `<source>`, um ein kompatibles Bild auszuwählen, das am besten zu dem aktuellen Layout und den Fähigkeiten des Anzeigegeräts passt.

Das `<img>`-Element erfüllt zwei Zwecke:

1. Es beschreibt die Größe und andere Attribute des Bildes und seiner Darstellung.
2. Es bietet eine Rückfallebene, falls keines der bereitgestellten `<source>`-Elemente ein verwendbares Bild liefern kann.

Häufige Anwendungsfälle für `<picture>`:

- **Art direction.** Zuschneiden oder Bearbeiten von Bildern für unterschiedliche `media` Bedingungen (zum Beispiel das Laden einer einfacheren Version eines Bildes, das auf kleinen Bildschirmen zu viele Details aufweist).
- **Anbieten alternativer Bildformate**, für Fälle, in denen bestimmte Formate nicht unterstützt werden.

  > [!NOTE]
  > Zum Beispiel haben neuere Formate wie [AVIF](/de/docs/Web/Media/Formats/Image_types#avif_image) oder [WEBP](/de/docs/Web/Media/Formats/Image_types#webp_image) viele Vorteile, könnten jedoch vom Browser nicht unterstützt werden. Eine Liste der unterstützten Bildformate finden Sie in: [Leitfaden für Bilddateitypen und -formate](/de/docs/Web/Media/Formats/Image_types).

- **Sparen von Bandbreite und Beschleunigung der Seitenladezeiten** durch das Laden des am besten geeigneten Bildes für die Anzeige des Betrachters.

Wenn Sie hochauflösende Versionen eines Bildes für hochauflösende (Retina-) Displays bereitstellen möchten, verwenden Sie `srcset` auf dem `<img>`-Element stattdessen. Dies ermöglicht es Browsern, in datenreduzierenden Modi auf Versionen mit niedrigerer Dichte zurückzugreifen, und Sie müssen keine expliziten `media` Bedingungen schreiben.

## Attribute

Dieses Element enthält nur [globale Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungsnotizen

Sie können die {{cssxref("object-position")}} Eigenschaft verwenden, um die Positionierung des Bildes innerhalb des Rahmens des Elements anzupassen, und die {{cssxref("object-fit")}} Eigenschaft, um zu kontrollieren, wie das Bild innerhalb des Rahmens skaliert wird.

> [!NOTE]
> Verwenden Sie diese Eigenschaften auf dem untergeordneten `<img>`-Element, **nicht** auf dem `<picture>`-Element.

## Beispiele

Diese Beispiele zeigen, wie sich unterschiedliche Attribute des {{HTMLElement("source")}}-Elements auf die Bildauswahl innerhalb von `<picture>` auswirken.

### Das media-Attribut

Das `media`-Attribut gibt eine Medienbedingung an (ähnlich einer Medienabfrage), die der User-Agent für jedes {{HTMLElement("source")}}-Element auswertet.

Wenn die Medienbedingung des {{HTMLElement("source")}} auf `false` ausgewertet wird, überspringt der Browser es und bewertet das nächste Element innerhalb von `<picture>`.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(min-width: 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN" />
</picture>
```

### Das srcset-Attribut

Das [srcset](/de/docs/Web/HTML/Element/source#srcset) Attribut wird verwendet, um eine Liste möglicher Bilder basierend auf der Größe oder der Pixeldichte des Displays anzubieten.

Es besteht aus einer kommagetrennten Liste von Bildbeschreibungen. Jede Bildbeschreibung setzt sich aus einer URL des Bildes und _entweder_:

- einem _Breitenbeschreibung_, gefolgt von einem `w` (wie `300w`);
  _ODER_
- einem _Pixeldichtebeschreibung_, gefolgt von einem `x` (wie `2x`), um ein hochauflösendes Bild für hochauflösende Bildschirme bereitzustellen.

Beachten Sie bitte:

- Breiten- und Pixeldichtebeschreibungen sollten nicht zusammen verwendet werden
- ein fehlender Pixeldichtebeschreibung bedeutet 1x
- doppelte Beschreibungswerte sind nicht erlaubt (2x & 2x, 100w & 100w)

Das folgende Beispiel veranschaulicht die Verwendung des `srcset`-Attributs mit dem `<source>`-Element, um ein hochauflösendes und ein Standardauflösungsbild anzugeben:

```html
<picture>
  <source srcset="logo.png, logo-1.5x.png 1.5x" />
  <img src="logo.png" alt="MDN Web Docs logo" height="320" width="320" />
</picture>
```

Das `srcset`-Attribut kann auch ohne das `<picture>`-Element auf dem `<img>`-Element verwendet werden. Das folgende Beispiel zeigt, wie das `srcset`-Attribut verwendet wird, um Standardauflösungs- und hochauflösende Bilder anzugeben:

```html
<img
  srcset="logo.png, logo-2x.png 2x"
  src="logo.png"
  height="320"
  width="320"
  alt="MDN Web Docs logo" />
```

Das `sizes`-Attribut ist nicht obligatorisch, wenn srcset verwendet wird, aber es wird empfohlen, es zu verwenden, um dem Browser zusätzliche Informationen zu geben, die ihm helfen, die beste Bildquelle auszuwählen.

Ohne `sizes` verwendet der Browser die Standardgröße des Bildes, wie in seinen Pixelabmessungen angegeben. Dies ist möglicherweise nicht die beste Lösung für alle Geräte, insbesondere wenn das Bild auf verschiedenen Bildschirmgrößen oder in unterschiedlichen Kontexten angezeigt wird.

Bitte beachten Sie, dass `sizes` nur dann wirksam ist, wenn Breitenbeschreibungen mit srcset anstelle von Pixelverhältniswerten angegeben werden (200w anstelle von 2x zum Beispiel). Für weitere Informationen zur Verwendung von `srcset` siehe die [Responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) Dokumentation.

### Das type-Attribut

Das `type`-Attribut gibt einen [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) für die Ressourcen-URL(s) im `srcset`-Attribut des {{HTMLElement("source")}}-Elements an. Wenn der User-Agent den angegebenen Typ nicht unterstützt, wird das {{HTMLElement("source")}}-Element übersprungen.

```html
<picture>
  <source srcset="photo.avif" type="image/avif" />
  <source srcset="photo.webp" type="image/webp" />
  <img src="photo.jpg" alt="photo" />
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
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließender Inhalt</a
        >, beschreibender Inhalt, eingebetteter Inhalt
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Null oder mehr {{HTMLElement("source")}} Elemente, gefolgt von einem
        {{HTMLElement("img")}} Element, optional vermischt mit
        scriptunterstützenden Elementen.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebetteten Inhalt zulässt.</td>
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
      <td>[`HTMLPictureElement`](/de/docs/Web/API/HTMLPictureElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("img")}} Element
- {{HTMLElement("source")}} Element
- Positionierung und Größenanpassung des Bildes innerhalb seines Rahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
- [Leitfaden für Bilddateitypen und -formate](/de/docs/Web/Media/Formats/Image_types)
