---
title: "<picture>: Das Picture-Element"
slug: Web/HTML/Reference/Elements/picture
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<picture>`** [HTML](/de/docs/Web/HTML) Element enthält null oder mehr {{HTMLElement("source")}} Elemente und ein {{HTMLElement("img")}} Element, um alternative Versionen eines Bildes für verschiedene Anzeige-/Geräteszenarien anzubieten.

Der Browser wird jedes Kind-`<source>`-Element prüfen und die beste Übereinstimmung unter ihnen auswählen. Wenn keine Übereinstimmungen gefunden werden oder der Browser das `<picture>`-Element nicht unterstützt, wird die URL des [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)-Attributes des `<img>`-Elements gewählt. Das ausgewählte Bild wird dann im vom `<img>`-Element eingenommenen Raum angezeigt.

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

Um zu entscheiden, welche URL geladen werden soll, prüft der {{Glossary("user_agent", "User-Agent")}} die [`srcset`](/de/docs/Web/HTML/Reference/Elements/source#srcset), [`media`](/de/docs/Web/HTML/Reference/Elements/source#media) und [`type`](/de/docs/Web/HTML/Reference/Elements/source#type)-Attribute jedes `<source>`-Elements, um ein kompatibles Bild zu wählen, das am besten zum aktuellen Layout und den Fähigkeiten des Anzeigegerätes passt.

Das `<img>`-Element erfüllt zwei Zwecke:

1. Es beschreibt die Größe und andere Attribute des Bildes und seiner Darstellung.
2. Es bietet eine Fallback-Option, falls keines der angebotenen `<source>`-Elemente ein nutzbares Bild liefern kann.

Häufige Anwendungsfälle für `<picture>`:

- **Kunstregie.** Zuschneiden oder Anpassen von Bildern für verschiedene `media`-Bedingungen (zum Beispiel das Laden einer einfacheren Version eines Bildes mit zu vielen Details auf kleineren Anzeigen).
- **Anbieten alternativer Bildformate**, für Fälle, in denen bestimmte Formate nicht unterstützt werden.

  > [!NOTE]
  > Zum Beispiel haben neuere Formate wie [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) oder [WEBP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) viele Vorteile, werden aber möglicherweise vom Browser nicht unterstützt. Eine Liste unterstützter Bildformate finden Sie in: [Image file type and format guide](/de/docs/Web/Media/Guides/Formats/Image_types).

- **Bandbreite sparen und Ladezeiten der Seite beschleunigen**, indem das passendste Bild für die Anzeige des Betrachters geladen wird.

Falls Sie hochauflösende Versionen eines Bildes für hochauflösende (Retina) Displays bereitstellen, verwenden Sie stattdessen [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) am `<img>`-Element. Dies ermöglicht es Browsern, in datenreduzierenden Modi niedrigauflösende Versionen zu wählen, und Sie müssen keine expliziten `media`-Bedingungen schreiben.

## Attribute

Dieses Element enthält nur [globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Nutzungshinweise

Sie können die {{cssxref("object-position")}} Eigenschaft verwenden, um die Positionierung des Bildes innerhalb des Rahmens des Elements anzupassen, und die {{cssxref("object-fit")}} Eigenschaft, um zu steuern, wie das Bild innerhalb des Rahmens skaliert wird.

> [!NOTE]
> Verwenden Sie diese Eigenschaften am `<img>`-Kindelement, **nicht** am `<picture>`-Element.

## Beispiele

Diese Beispiele demonstrieren, wie verschiedene Attribute des {{HTMLElement("source")}}-Elements die Auswahl des Bildes im `<picture>`-Element beeinflussen.

### Das media-Attribut

Das `media`-Attribut spezifiziert eine Medienbedingung (ähnlich einer Media-Query), die der User-Agent für jedes {{HTMLElement("source")}}-Element bewerten wird.

Wenn die Medienbedingung des {{HTMLElement("source")}} als `false` bewertet wird, überspringt der Browser es und bewertet das nächste Element innerhalb des `<picture>`.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(width >= 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN" />
</picture>
```

### Das srcset-Attribut

Das [srcset](/de/docs/Web/HTML/Reference/Elements/source#srcset)-Attribut wird verwendet, um eine Liste möglicher Bilder basierend auf Größe oder Pixeldichte des Displays anzubieten.

Es besteht aus einer kommagetrennten Liste von Bildbeschreibungen. Jede Bildbeschreibung besteht aus einer URL des Bildes und _entweder_:

- einem _Breitenbeschreiber_, gefolgt von einem `w` (wie `300w`);
  _ODER_
- einem _Pixeldichtebeschreiber_, gefolgt von einem `x` (wie `2x`), um ein hochauflösendes Bild für hochauflösende Bildschirme zu bieten.

Beachten Sie, dass:

- Breiten- und Pixeldichtebeschreibungen nicht zusammen verwendet werden sollten
- ein fehlender Pixeldichtebeschreiber eine Annahme von 1x impliziert
- doppelte Beschreibungswerte nicht erlaubt sind (2x & 2x, 100w & 100w)

Das folgende Beispiel veranschaulicht die Verwendung des `srcset`-Attributs mit dem `<source>`-Element, um ein hochdichtes und ein Standard-Auflösungsbild festzulegen:

```html
<picture>
  <source srcset="logo.png, logo-1.5x.png 1.5x" />
  <img src="logo.png" alt="MDN Web Docs logo" height="320" width="320" />
</picture>
```

Das `srcset`-Attribut kann auch am `<img>`-Element ohne das `<picture>`-Element verwendet werden. Das folgende Beispiel demonstriert, wie das `srcset`-Attribut verwendet wird, um Standardauflösungs- und hochdichte Bilder anzugeben:

```html
<img
  srcset="logo.png, logo-2x.png 2x"
  src="logo.png"
  height="320"
  width="320"
  alt="MDN Web Docs logo" />
```

Das `sizes`-Attribut ist nicht zwingend erforderlich, wenn `srcset` verwendet wird, aber es wird empfohlen, es zu verwenden, um dem Browser zusätzliche Informationen zu bieten, um ihm bei der Auswahl der besten Bildquelle zu helfen.

Ohne `sizes` wird der Browser die Standardgröße des Bildes verwenden, wie sie durch seine Abmessungen in Pixeln angegeben ist. Dies ist möglicherweise nicht die beste Passform für alle Geräte, insbesondere wenn das Bild auf verschiedenen Bildschirmgrößen oder in unterschiedlichen Kontexten angezeigt wird.

Bitte beachten Sie, dass `sizes` nur wirksam ist, wenn Breiten-Abmaße mit `srcset` bereitgestellt werden, anstelle von Pixeldichtewerten (z.B. 200w statt 2x).
Weitere Informationen zur Verwendung von `srcset` finden Sie in der [Responsive images](/de/docs/Web/HTML/Guides/Responsive_images) Dokumentation.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>,
        Textinhalt, eingebetteter Inhalt
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Null oder mehr {{HTMLElement("source")}} Elemente, gefolgt von einem
        {{HTMLElement("img")}} Element, optional gemischt mit
        skriptunterstützenden Elementen.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebetteten Inhalt erlaubt.</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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

- {{HTMLElement("img")}} Element
- {{HTMLElement("source")}} Element
- Positionierung und Größenänderung des Bildes innerhalb des Rahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
- [Image file type and format guide](/de/docs/Web/Media/Guides/Formats/Image_types)
