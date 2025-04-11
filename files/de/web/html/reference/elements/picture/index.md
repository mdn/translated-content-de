---
title: "<picture>: Das Picture-Element"
slug: Web/HTML/Reference/Elements/picture
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<picture>`**-Element von [HTML](/de/docs/Web/HTML) enthält null oder mehr {{HTMLElement("source")}}-Elemente und ein {{HTMLElement("img")}}-Element, um alternative Versionen eines Bildes für unterschiedliche Anzeige-/Geräteszenarien anzubieten.

Der Browser wird jedes `<source>`-Kindelement betrachten und die beste Übereinstimmung unter ihnen wählen. Wenn keine Übereinstimmungen gefunden werden – oder der Browser das `<picture>`-Element nicht unterstützt – wird die URL des [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)-Attributs des `<img>`-Elements ausgewählt. Das ausgewählte Bild wird dann im Raum des `<img>`-Elements angezeigt.

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

Um zu entscheiden, welche URL geladen werden soll, untersucht der {{Glossary("user_agent", "User Agent")}} jedes `<source>`-Element anhand der Attribute [`srcset`](/de/docs/Web/HTML/Reference/Elements/source#srcset), [`media`](/de/docs/Web/HTML/Reference/Elements/source#media) und [`type`](/de/docs/Web/HTML/Reference/Elements/source#type), um ein kompatibles Bild auszuwählen, das am besten zum aktuellen Layout und den Fähigkeiten des Anzeigegeräts passt.

Das `<img>`-Element erfüllt zwei Zwecke:

1. Es beschreibt die Größe und andere Attribute des Bildes und dessen Darstellung.
2. Es bietet ein Fallback, falls keines der angebotenen `<source>`-Elemente ein verwendbares Bild bereitstellen kann.

Gängige Anwendungsfälle für `<picture>`:

- **Art Direction.** Zuschneiden oder Ändern von Bildern für verschiedene `media`-Bedingungen (z. B. das Laden einer einfacheren Version eines Bildes mit zu vielen Details auf kleineren Bildschirmen).
- **Angebot alternativer Bildformate** für Fälle, in denen bestimmte Formate nicht unterstützt werden.

  > [!NOTE]
  > Zum Beispiel haben neuere Formate wie [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) oder [WEBP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) viele Vorteile, könnten jedoch nicht vom Browser unterstützt werden. Eine Liste der unterstützten Bildformate finden Sie im [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types).

- **Bandbreite sparen und Ladezeiten der Seite beschleunigen**, indem das passendste Bild für die Anzeige des Betrachters geladen wird.

Wenn Sie hochauflösende Versionen eines Bildes für hochauflösende (Retina)-Displays bereitstellen möchten, verwenden Sie statt dessen [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) auf dem `<img>`-Element. Dies ermöglicht es Browsern, in datenreduzierenden Modi niedrigere Dichteversionen zu wählen, und Sie müssen keine expliziten `media`-Bedingungen schreiben.

## Attribute

Dieses Element beinhaltet nur [globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Nutzungshinweise

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um die Positionierung des Bildes innerhalb des Rahmens des Elements anzupassen, und die {{cssxref("object-fit")}}-Eigenschaft, um zu steuern, wie das Bild in den Rahmen eingepasst wird.

> [!NOTE]
> Verwenden Sie diese Eigenschaften auf dem untergeordneten `<img>`-Element, **nicht** auf dem `<picture>`-Element.

## Beispiele

Diese Beispiele demonstrieren, wie verschiedene Attribute des {{HTMLElement("source")}}-Elements die Auswahl des Bildes innerhalb von `<picture>` ändern.

### Das media-Attribut

Das `media`-Attribut spezifiziert eine Medienbedingung (ähnlich einer Media Query), die der User-Agent für jedes {{HTMLElement("source")}}-Element bewerten wird.

Wenn die Medienbedingung des {{HTMLElement("source")}}-Elements zu `false` bewertet wird, überspringt der Browser es und bewertet das nächste Element innerhalb von `<picture>`.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(min-width: 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN" />
</picture>
```

### Das srcset-Attribut

Das [srcset](/de/docs/Web/HTML/Reference/Elements/source#srcset)-Attribut wird verwendet, um eine Liste möglicher Bilder basierend auf Größe oder Pixeldichte des Displays anzubieten.

Es besteht aus einer kommagetrennten Liste von Bildbeschreibungen. Jede Bildbeschreibung besteht aus einer URL des Bildes und _entweder_:

- einem _Breitenbeschreibung_, gefolgt von einem `w` (wie `300w`);
  _ODER_
- einem _Pixeldichtebeschreibung_, gefolgt von einem `x` (wie `2x`) um ein hochauflösendes Bild für hochauflösende Bildschirme zu dienen.

Beachten Sie Folgendes:

- Breiten- und Pixeldichtebeschreibungen sollten nicht zusammen verwendet werden
- Eine fehlende Pixeldichtebeschreibung impliziert 1x
- Doppelte Beschreibungswerte sind nicht erlaubt (2x & 2x, 100w & 100w)

Das folgende Beispiel zeigt die Verwendung des `srcset`-Attributs mit dem `<source>`-Element, um ein hochdichtes und ein Standardauflösungsbild anzugeben:

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

Das `sizes`-Attribut ist nicht zwingend erforderlich, wenn Sie srcset verwenden, aber es wird empfohlen, es zu verwenden, um dem Browser zusätzliche Informationen zu geben, die ihm helfen, die beste Bildquelle auszuwählen.

Ohne Größen verwendet der Browser die Standardgröße des Bildes, wie durch seine Abmessungen in Pixeln angegeben. Dies ist möglicherweise nicht der beste Fit für alle Geräte, insbesondere wenn das Bild auf verschiedenen Bildschirmgrößen oder in unterschiedlichen Kontexten angezeigt wird.

Bitte beachten Sie, dass Größen nur dann ihre Wirkung entfalten, wenn Breitenmaßbeschreibungen mit srcset anstelle von Pixelverhältnissen angegeben werden (200w statt 2x zum Beispiel).
Weitere Informationen zur Verwendung von `srcset` finden Sie in der [Dokumentation zu responsiven Bildern](/de/docs/Web/HTML/Guides/Responsive_images).

### Das type-Attribut

Das `type`-Attribut spezifiziert einen [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) für die Ressourcen-URL(s) im `srcset`-Attribut des {{HTMLElement("source")}}-Elements. Wenn der User Agent den angegebenen Typ nicht unterstützt, wird das {{HTMLElement("source")}}-Element übersprungen.

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
          >Fließ-Inhalt</a
        >, phrasierungs-Inhalt, eingebetteter Inhalt
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
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
      <td>Jedes Element, das eingebetteten Inhalt erlaubt.</td>
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

- {{HTMLElement("img")}}-Element
- {{HTMLElement("source")}}-Element
- Positionierung und Größenanpassung des Bildes innerhalb seines Rahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types)
