---
title: "<picture>: Das Picture-Element"
slug: Web/HTML/Element/picture
l10n:
  sourceCommit: 9c09b183a5ce844a75c2f22e909d03f71ca329fc
---

{{HTMLSidebar}}

Das **`<picture>`** [HTML](/de/docs/Web/HTML) Element enthält null oder mehr {{HTMLElement("source")}} Elemente und ein {{HTMLElement("img")}} Element, um alternative Versionen eines Bildes für unterschiedliche Anzeige-/Geräteszenarien bereitzustellen.

Der Browser wird jedes untergeordnete `<source>` Element in Betracht ziehen und die beste Übereinstimmung auswählen. Wenn keine Übereinstimmungen gefunden werden – oder der Browser das `<picture>` Element nicht unterstützt – wird die URL des [`src`](/de/docs/Web/HTML/Element/img#src) Attributs des `<img>` Elements ausgewählt. Das ausgewählte Bild wird dann im Bereich des `<img>` Elements dargestellt.

{{EmbedInteractiveExample("pages/tabbed/picture.html", "tabbed-standard")}}

Um zu entscheiden, welche URL geladen werden soll, untersucht der {{Glossary("user agent")}} die Attribute [`srcset`](/de/docs/Web/HTML/Element/source#srcset), [`media`](/de/docs/Web/HTML/Element/source#media) und [`type`](/de/docs/Web/HTML/Element/source#type) jedes `<source>` Elements, um ein kompatibles Bild auszuwählen, das am besten zur aktuellen Anordnung und den Fähigkeiten des Anzeigegeräts passt.

Das `<img>` Element dient zwei Zwecken:

1. Es beschreibt die Größe und andere Attribute des Bildes und dessen Präsentation.
2. Es bietet eine Fallback-Option, falls keines der angebotenen `<source>` Elemente ein brauchbares Bild bereitstellen kann.

Häufige Anwendungsfälle für `<picture>`:

- **Art Direction.** Zuschneiden oder Anpassen von Bildern für unterschiedliche `media` Bedingungen (zum Beispiel das Laden einer einfacheren Version eines Bildes mit zu vielen Details auf kleineren Displays).
- **Anbieten alternativer Bildformate**, für den Fall, dass bestimmte Formate nicht unterstützt werden.

  > [!NOTE]
  > Zum Beispiel haben neuere Formate wie [AVIF](/de/docs/Web/Media/Formats/Image_types#avif_image) oder [WEBP](/de/docs/Web/Media/Formats/Image_types#webp_image) viele Vorteile, könnten aber vom Browser nicht unterstützt werden. Eine Liste unterstützter Bildformate finden Sie unter: [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Formats/Image_types).

- **Bandbreite sparen und Ladezeiten der Seite verkürzen**, indem das passende Bild für die Anzeige des Betrachters geladen wird.

Wenn Sie höher dichte Versionen eines Bildes für hochauflösende (Retina) Anzeigen bereitstellen möchten, verwenden Sie [`srcset`](/de/docs/Web/HTML/Element/img#srcset) auf dem `<img>` Element. Dadurch können Browser Versionen mit niedrigerer Dichte in Datensparmodi auswählen, und Sie müssen keine expliziten `media` Bedingungen schreiben.

## Attribute

Dieses Element enthält nur [globale Attribute](/de/docs/Web/HTML/Global_attributes).

## Nutzungshinweise

Sie können die {{cssxref("object-position")}} Eigenschaft verwenden, um die Positionierung des Bildes innerhalb des Rahmens des Elements anzupassen, und die {{cssxref("object-fit")}} Eigenschaft, um zu steuern, wie das Bild innerhalb des Rahmens angepasst wird.

> [!NOTE]
> Verwenden Sie diese Eigenschaften auf dem untergeordneten `<img>` Element, **nicht** auf dem `<picture>` Element.

## Beispiele

Diese Beispiele demonstrieren, wie verschiedene Attribute des {{HTMLElement("source")}} Elements die Auswahl des Bildes innerhalb `<picture>` beeinflussen.

### Das media-Attribut

Das `media` Attribut gibt eine Medienbedingung an (ähnlich einer Media Query), die der User-Agent für jedes {{HTMLElement("source")}} Element evaluieren wird.

Wenn die Medienbedingung des {{HTMLElement("source")}} Elementes als `false` bewertet wird, überspringt der Browser dieses und evaluiert das nächste Element innerhalb von `<picture>`.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(min-width: 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN" />
</picture>
```

### Das srcset-Attribut

Das [srcset](/de/docs/Web/HTML/Element/source#srcset) Attribut wird verwendet, um eine Liste möglicher Bilder basierend auf der Größe oder der Pixeldichte der Anzeige anzubieten.

Es besteht aus einer kommagetrennten Liste von Bildbeschreibungen. Jede Bildbeschreibung setzt sich zusammen aus einer URL des Bildes und _entweder_:

- einem _Breiten-Descriptor_, gefolgt von einem `w` (wie `300w`);
  _ODER_
- einem _Pixeldichte-Descriptor_, gefolgt von einem `x` (wie `2x`), um ein hochauflösendes Bild für hochaufgelöste Bildschirme bereitzustellen.

Beachten Sie Folgendes:

- Breiten- und Pixeldichte-Descriptoren sollten nicht zusammen verwendet werden
- ein fehlender Pixeldichte-Descriptor impliziert 1x
- doppelte Descriptorwerte sind nicht erlaubt (2x & 2x, 100w & 100w)

Das folgende Beispiel veranschaulicht die Verwendung des `srcset` Attributs mit dem `<source>` Element, um ein hochdichtes und ein Standardauflösungsbild anzugeben:

```html
<picture>
  <source srcset="logo.png, logo-1.5x.png 1.5x" />
  <img src="logo.png" alt="MDN Web Docs logo" height="320" width="320" />
</picture>
```

Das `srcset` Attribut kann auch auf dem `<img>` Element verwendet werden, ohne dass das `<picture>` Element benötigt wird. Das folgende Beispiel zeigt, wie Sie das `srcset` Attribut verwenden, um Standardauflösungs- und Hochdichtebilder anzugeben:

```html
<img
  srcset="logo.png, logo-2x.png 2x"
  src="logo.png"
  height="320"
  width="320"
  alt="MDN Web Docs logo" />
```

Das `sizes` Attribut ist nicht verpflichtend, wenn `srcset` verwendet wird, aber es wird empfohlen, um dem Browser zusätzliche Informationen bereitzustellen, die ihm helfen, die beste Bildquelle auszuwählen.

Ohne `sizes` wird der Browser die Standardgröße des Bildes verwenden, wie sie durch seine Abmessungen in Pixel angegeben ist. Dies ist möglicherweise nicht die beste Wahl für alle Geräte, insbesondere wenn das Bild auf verschiedenen Bildschirmgrößen oder in verschiedenen Kontexten angezeigt wird.

Bitte beachten Sie, dass `sizes` nur dann wirksam wird, wenn Breiten-Descriptoren mit `srcset` bereitgestellt werden, statt Pixeldichtewerten (zum Beispiel 200w statt 2x).
Weitere Informationen zur Verwendung von `srcset` finden Sie in der [Dokumentation zu responsiven Bildern](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images).

### Das type-Attribut

Das `type` Attribut gibt einen [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) für die Ressourcen-URL(s) im `srcset` Attribut des {{HTMLElement("source")}} Elements an. Wenn der User Agent den angegebenen Typ nicht unterstützt, wird das {{HTMLElement("source")}} Element übersprungen.

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
        >, formulierter Inhalt, eingebetteter Inhalt
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        Null oder mehr {{HTMLElement("source")}} Elemente, gefolgt von einem
        {{HTMLElement("img")}} Element, optional gemischt mit
        skriptunterstützenden Elementen.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Elternelemente</th>
      <td>Jedes Element, das eingebetteten Inhalt erlaubt.</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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
      <td>{{domxref("HTMLPictureElement")}}</td>
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
- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Formats/Image_types)
