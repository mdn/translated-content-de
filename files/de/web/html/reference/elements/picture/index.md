---
title: "<picture>: Das Picture-Element"
slug: Web/HTML/Reference/Elements/picture
l10n:
  sourceCommit: 4e50517126b48a3c173e3e568855b8cb607978a6
---

Das **`<picture>`** [HTML](/de/docs/Web/HTML)-Element enthält null oder mehr {{HTMLElement("source")}}-Elemente und ein {{HTMLElement("img")}}-Element, um alternative Versionen eines Bildes für verschiedene Anzeige-/Geräteszenarien anzubieten.

Der Browser wird jedes `<source>`-Kindelement berücksichtigen und den besten Treffer auswählen. Wenn keine Übereinstimmungen gefunden werden - oder der Browser das `<picture>`-Element nicht unterstützt - wird die URL des [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)-Attributs des `<img>`-Elements ausgewählt. Das ausgewählte Bild wird dann im durch das `<img>`-Element belegten Raum angezeigt.

{{InteractiveExample("HTML Demo: &lt;picture&gt;", "tabbed-standard")}}

```html interactive-example
<!--Change the browser window width to see the image change.-->

<picture>
  <source
    srcset="/shared-assets/images/examples/surfer.jpg"
    media="(orientation: portrait)" />
  <img src="/shared-assets/images/examples/painted-hand.jpg" alt="" />
</picture>
```

Um zu entscheiden, welche URL geladen werden soll, untersucht der {{Glossary("user_agent", "User-Agent")}} die [`srcset`](/de/docs/Web/HTML/Reference/Elements/source#srcset)-, [`media`](/de/docs/Web/HTML/Reference/Elements/source#media)- und [`type`](/de/docs/Web/HTML/Reference/Elements/source#type)-Attribute jedes `<source>`-Elements, um ein kompatibles Bild auszuwählen, das am besten zum aktuellen Layout und zu den Fähigkeiten des Anzeigegeräts passt.

Das `<img>`-Element erfüllt zwei Zwecke:

1. Es beschreibt die Größe und andere Attribute des Bildes und seiner Darstellung.
2. Es bietet einen Fallback für den Fall, dass keines der angebotenen `<source>`-Elemente ein verwendbares Bild liefern kann.

Häufige Anwendungsfälle für `<picture>`:

- **Art Direction.** Zuschneiden oder Ändern von Bildern für verschiedene `media`-Bedingungen (zum Beispiel das Laden einer einfacheren Version eines Bildes, das zu viele Details aufweist, auf kleineren Displays).
- **Anbieten alternativer Bildformate** für Fälle, in denen bestimmte Formate nicht unterstützt werden.

  > [!NOTE]
  > Zum Beispiel haben neuere Formate wie [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) oder [WEBP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) viele Vorteile, könnten aber möglicherweise nicht vom Browser unterstützt werden. Eine Liste der unterstützten Bildformate finden Sie im [Leitfaden für Bilddateitypen und -formate](/de/docs/Web/Media/Guides/Formats/Image_types).

- **Sparen von Bandbreite und Beschleunigen der Ladezeiten** durch Laden des am besten geeigneten Bildes für das Display des Betrachters.

Wenn Sie hochauflösende Versionen eines Bildes für High-DPI (Retina)-Displays bereitstellen wollen, verwenden Sie `srcset` auf dem `<img>`-Element. Dies ermöglicht es den Browsern, in Daten sparenden Modi für niedrigere Dichte-Versionen zu optieren, ohne dass Sie explizite `media`-Bedingungen schreiben müssen.

## Attribute

Dieses Element enthält nur [globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um die Positionierung des Bildes innerhalb des Rahmens des Elements anzupassen, und die {{cssxref("object-fit")}}-Eigenschaft, um zu kontrollieren, wie das Bild innerhalb des Rahmens skaliert wird.

> [!NOTE]
> Verwenden Sie diese Eigenschaften im `<img>`-Kindelement, **nicht** im `<picture>`-Element.

## Beispiele

Diese Beispiele veranschaulichen, wie verschiedene Attribute des {{HTMLElement("source")}}-Elements die Auswahl des Bildes innerhalb von `<picture>` beeinflussen.

### Das media-Attribut

Das `media`-Attribut gibt eine Medienbedingung an (ähnlich einer Media Query), die der User-Agent für jedes {{HTMLElement("source")}}-Element auswertet.

Wenn die Medienbedingung des {{HTMLElement("source")}} auf `false` evaluiert, überspringt der Browser sie und wertet das nächste Element innerhalb von `<picture>` aus.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(width >= 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN" />
</picture>
```

### Das srcset-Attribut

Das [srcset](/de/docs/Web/HTML/Reference/Elements/source#srcset)-Attribut wird verwendet, um eine Liste möglicher Bilder basierend auf Größe oder Pixeldichte des Displays anzubieten.

Es besteht aus einer durch Kommata getrennten Liste von Bilddeskriptoren. Jeder Bilddeskriptor besteht aus einer URL des Bildes und _entweder_:

- einem _Breitendeskriptor_, gefolgt von einem `w` (z. B. `300w`);
  _ODER_
- einem _Pixeldichtedeskriptor_, gefolgt von einem `x` (z. B. `2x`) um ein hochauflösendes Bild für High-DPI-Bildschirme bereitzustellen.

Beachten Sie:

- Breitendeskriptoren und Pixeldichtedeskriptoren sollten nicht zusammen verwendet werden
- Ein fehlender Pixeldichtedeskriptor impliziert 1x
- Doppelte Deskriptorwerte sind nicht erlaubt (2x & 2x, 100w & 100w)

Das folgende Beispiel zeigt die Verwendung des `srcset`-Attributs mit dem `<source>`-Element, um ein hochauflösendes und ein Standardauflösungsbild anzugeben:

```html
<picture>
  <source srcset="logo.png, logo-1.5x.png 1.5x" />
  <img src="logo.png" alt="MDN Web Docs logo" height="320" width="320" />
</picture>
```

Das `srcset`-Attribut kann auch auf dem `<img>`-Element verwendet werden, ohne das `<picture>`-Element zu benötigen. Das folgende Beispiel zeigt, wie das `srcset`-Attribut verwendet wird, um Standardauflösungs- und hochdichte Bilder anzugeben:

```html
<img
  srcset="logo.png, logo-2x.png 2x"
  src="logo.png"
  height="320"
  width="320"
  alt="MDN Web Docs logo" />
```

### Das sizes-Attribut

Das [`sizes`](/de/docs/Web/HTML/Reference/Elements/source#sizes)-Attribut des `<source>`-Elements ermöglicht es Ihnen, eine Reihe von Medienbedingung-Längen-Paaren anzugeben und die Anzeigengröße des Bildes für jede Bedingung zu bestimmen. Dies hilft dem Browser, das am besten geeignete Bild aus dem `srcset`-Attribut auszuwählen, das Bilder mit ihren {{Glossary("Intrinsic_Size", "intrinsischen")}} Breiten auflistet.

Der Browser wertet die Medienbedingungen im sizes-Attribut aus, bevor er irgendwelche Bilder herunterlädt. Weitere Informationen finden Sie im sizes-Attribut der [`<img>`](/de/docs/Web/HTML/Reference/Elements/img#sizes)- und [`<source>`](/de/docs/Web/HTML/Reference/Elements/source#sizes)-Elemente.

Zum Beispiel:

```html
<picture>
  <source
    srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
    sizes="(max-width: 600px) 400px, 800px"
    type="image/jpeg" />
  <img src="fallback.jpg" alt="Example image" />
</picture>
```

In diesem Beispiel:

- Wenn das Ansichtsfenster 600px breit oder weniger ist, beträgt die Slotgröße 400px; andernfalls beträgt sie 800px.
- Der Browser multipliziert die Slotgröße mit dem Geräte-Pixelverhältnis, um die ideale Bildbreite zu bestimmen und wählt dann das am besten passende Bild aus `srcset` aus.

Ohne sizes verwendet der Browser die Standardgröße des Bildes, wie durch seine Abmessungen in Pixeln angegeben. Dies ist möglicherweise nicht die beste Lösung für alle Geräte, insbesondere wenn das Bild auf verschiedenen Bildschirmgrößen oder in unterschiedlichen Kontexten angezeigt wird.

Bitte beachten Sie, dass sizes nur seine Wirkung entfaltet, wenn Breitenmaßbeschreibungen mit srcset und nicht Verhältniswerte der Pixel angegeben sind (200w anstatt beispielsweise 2x).
Weitere Informationen zur Verwendung von `srcset` finden Sie in der [responsiven Bilddokumentation](/de/docs/Web/HTML/Guides/Responsive_images).

### Das type-Attribut

Das `type`-Attribut spezifiziert einen [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) für die Ressourcen-URL(s) im `srcset`-Attribut des {{HTMLElement("source")}}-Elements. Wenn der User-Agent den angegebenen Typ nicht unterstützt, wird das {{HTMLElement("source")}}-Element übersprungen.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließendes Inhalt</a>, phrasing content, eingebettete Inhalte
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        Null oder mehr {{HTMLElement("source")}}-Elemente, gefolgt von einem
        {{HTMLElement("img")}}-Element, optional vermischt mit
        skriptunterstützenden Elementen.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebettete Inhalte erlaubt.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a>
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

- {{HTMLElement("img")}}-Element
- {{HTMLElement("source")}}-Element
- Positionierung und Größenanpassung des Bildes innerhalb seines Rahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
- [Leitfaden für Bilddateitypen und -formate](/de/docs/Web/Media/Guides/Formats/Image_types)
