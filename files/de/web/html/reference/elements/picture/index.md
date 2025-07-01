---
title: "<picture>: Das Picture-Element"
slug: Web/HTML/Reference/Elements/picture
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{HTMLSidebar}}

Das **`<picture>`** [HTML](/de/docs/Web/HTML) Element enthält null oder mehr {{HTMLElement("source")}}-Elemente und ein {{HTMLElement("img")}}-Element, um alternative Versionen eines Bildes für verschiedene Anzeige-/Geräteszenarien anzubieten.

Der Browser prüft jedes `<source>`-Kind und wählt das am besten passende unter ihnen aus. Wenn keine Übereinstimmungen gefunden werden – oder der Browser das `<picture>`-Element nicht unterstützt – wird die URL des [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)-Attributs des `<img>`-Elements ausgewählt. Das ausgewählte Bild wird dann im Raum des `<img>`-Elements angezeigt.

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

Der {{Glossary("user_agent", "user agent")}} untersucht die [`srcset`](/de/docs/Web/HTML/Reference/Elements/source#srcset)-, [`media`](/de/docs/Web/HTML/Reference/Elements/source#media)- und [`type`](/de/docs/Web/HTML/Reference/Elements/source#type)-Attribute jedes `<source>`, um ein kompatibles Bild auszuwählen, das am besten zum aktuellen Layout und den Fähigkeiten des Anzeigegeräts passt.

Das `<img>`-Element erfüllt zwei Zwecke:

1. Es beschreibt die Größe und andere Eigenschaften des Bildes und seiner Darstellung.
2. Es stellt einen Fallback bereit, falls keiner der angebotenen `<source>`-Elemente ein verwendbares Bild bereitstellen kann.

Häufige Anwendungsfälle für `<picture>`:

- **Kunstrichtung.** Zuschneiden oder Modifizieren von Bildern für verschiedene `media`-Bedingungen (zum Beispiel das Laden einer einfacheren Version eines Bildes, das zu viele Details aufweist, auf kleineren Displays).
- **Angebot alternativer Bildformate**, für den Fall, dass bestimmte Formate nicht unterstützt werden.

  > [!NOTE]
  > Zum Beispiel haben neuere Formate wie [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) oder [WEBP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) viele Vorteile, könnten aber vom Browser nicht unterstützt werden. Eine Liste der unterstützten Bildformate finden Sie in: [Leitfaden für Bilddateitypen und Formate](/de/docs/Web/Media/Guides/Formats/Image_types).

- **Einsparung von Bandbreite und Beschleunigung der Ladezeiten von Seiten**, indem das am besten geeignete Bild für das Display des Betrachters geladen wird.

Wenn Sie hochauflösende Versionen eines Bildes für High-DPI (Retina)-Displays bereitstellen, verwenden Sie stattdessen [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) auf dem `<img>`-Element. Dadurch können Browser in Datenverbrauchsparmodi niedrigere Auflösungen wählen, und Sie müssen keine expliziten `media`-Bedingungen schreiben.

## Attribute

Dieses Element enthält nur [globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

Sie können die Eigenschaft {{cssxref("object-position")}} verwenden, um die Positionierung des Bildes innerhalb des Rahmens des Elements anzupassen, und die Eigenschaft {{cssxref("object-fit")}}, um zu steuern, wie das Bild innerhalb des Rahmens angepasst wird.

> [!NOTE]
> Verwenden Sie diese Eigenschaften auf dem `<img>`-Kindelement, **nicht** auf dem `<picture>`-Element.

## Beispiele

Diese Beispiele zeigen, wie verschiedene Attribute des {{HTMLElement("source")}}-Elements die Auswahl des Bildes innerhalb von `<picture>` beeinflussen.

### Das media-Attribut

Das `media`-Attribut spezifiziert eine Medienbedingung (ähnlich einer Media Query), die der User Agent für jedes {{HTMLElement("source")}}-Element auswertet.

Wenn die Medienbedingung von {{HTMLElement("source")}} zu `false` ausgewertet wird, überspringt der Browser sie und bewertet das nächste Element innerhalb von `<picture>`.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(width >= 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN" />
</picture>
```

### Das srcset-Attribut

Das [srcset](/de/docs/Web/HTML/Reference/Elements/source#srcset)-Attribut wird verwendet, um eine Liste möglicher Bilder basierend auf der Größe oder der Pixeldichte des Displays anzubieten.

Es besteht aus einer durch Kommas getrennten Liste von Bilddeskriptoren. Jeder Bilddeskriptor besteht aus einer URL des Bildes und entweder einem:

- _Breitendeskriptor_, gefolgt von einem `w` (zum Beispiel `300w`);
  _ODER_
- _Pixeldichtedeskriptor_, gefolgt von einem `x` (zum Beispiel `2x`), um ein hochauflösendes Bild für High-DPI-Bildschirme bereitzustellen.

Stellen Sie sicher, dass Sie beachten:

- Breiten- und Pixeldichtedeskriptoren sollten nicht zusammen verwendet werden
- ein fehlender Pixeldichtedeskriptor impliziert 1x
- doppelte Deskriptorwerte sind nicht erlaubt (2x & 2x, 100w & 100w)

Das folgende Beispiel veranschaulicht die Verwendung des `srcset`-Attributs mit dem `<source>`-Element zur Angabe eines hochauflösenden und eines Standardauflösungsbildes:

```html
<picture>
  <source srcset="logo.png, logo-1.5x.png 1.5x" />
  <img src="logo.png" alt="MDN Web Docs logo" height="320" width="320" />
</picture>
```

Das `srcset`-Attribut kann auch auf dem `<img>`-Element ohne das `<picture>`-Element verwendet werden. Das folgende Beispiel zeigt, wie das `srcset`-Attribut verwendet werden kann, um Standardauflösungs- und hochdichte Bilder anzugeben:

```html
<img
  srcset="logo.png, logo-2x.png 2x"
  src="logo.png"
  height="320"
  width="320"
  alt="MDN Web Docs logo" />
```

Das `sizes`-Attribut ist beim Verwenden von srcset nicht obligatorisch, es wird jedoch empfohlen, um dem Browser zusätzliche Informationen zu geben, damit er die beste Bildquelle auswählen kann.

Ohne Größen verwendet der Browser die Standardsgröße des Bildes wie durch seine Abmessungen in Pixeln angegeben. Dies ist möglicherweise nicht die beste Passform für alle Geräte, insbesondere wenn das Bild auf Bildschirmen unterschiedlicher Größe oder in unterschiedlichen Kontexten angezeigt wird.

Bitte beachten Sie, dass Größen nur dann wirkungsvoll sind, wenn Breitenmaß-Deskriptoren mit srcset anstelle von Pixelverhältniswerten bereitgestellt werden (200w anstelle von 2x zum Beispiel).
Für weitere Informationen zur Verwendung von `srcset`, siehe die [Responsive images](/de/docs/Web/HTML/Guides/Responsive_images)-Dokumentation.

### Das type-Attribut

Das `type`-Attribut gibt einen [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) für die Ressourcen-URL(s) im `srcset`-Attribut des {{HTMLElement("source")}}-Elements an. Wenn der User Agent den angegebenen Typ nicht unterstützt, wird das {{HTMLElement("source")}}-Element übersprungen.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließende Inhalte</a
        >, phrasing content, eingebettete Inhalte
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        Null oder mehr {{HTMLElement("source")}}-Elemente, gefolgt von einem
        {{HTMLElement("img")}}-Element, optional vermischt mit
        skriptunterstützenden Elementen.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>Jedes Element, das eingebettete Inhalte erlaubt.</td>
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
- Positionierung und Größeneinstellung des Bildes innerhalb des Rahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
- [Leitfaden für Bilddateitypen und -formate](/de/docs/Web/Media/Guides/Formats/Image_types)
