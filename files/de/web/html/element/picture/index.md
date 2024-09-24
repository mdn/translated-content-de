---
title: "<picture>: Das Picture-Element"
slug: Web/HTML/Element/picture
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{HTMLSidebar}}

Das **`<picture>`**[HTML](/de/docs/Web/HTML)-Element enthält null oder mehr {{HTMLElement("source")}}-Elemente und ein {{HTMLElement("img")}}-Element, um alternative Versionen eines Bildes für verschiedene Anzeige-/Geräteszenarien anzubieten.

Der Browser wird jedes `<source>`-Kindelement betrachten und die am besten passende Option unter ihnen auswählen. Wenn keine Übereinstimmungen gefunden werden oder der Browser das `<picture>`-Element nicht unterstützt, wird die URL des [`src`](/de/docs/Web/HTML/Element/img#src)-Attributs des `<img>`-Elements ausgewählt. Das ausgewählte Bild wird dann in dem vom `<img>`-Element eingenommenen Bereich dargestellt.

{{EmbedInteractiveExample("pages/tabbed/picture.html", "tabbed-standard")}}

Um zu entscheiden, welche URL geladen werden soll, überprüft der {{Glossary("user_agent", "User-Agent")}} die Attribute [`srcset`](/de/docs/Web/HTML/Element/source#srcset), [`media`](/de/docs/Web/HTML/Element/source#media) und [`type`](/de/docs/Web/HTML/Element/source#type) jedes `<source>`, um ein kompatibles Bild auszuwählen, das am besten zum aktuellen Layout und den Fähigkeiten des Anzeigegeräts passt.

Das `<img>`-Element erfüllt zwei Zwecke:

1. Es beschreibt die Größe und andere Attribute des Bildes und dessen Darstellung.
2. Es bietet eine Fallback-Option, falls keines der angebotenen `<source>`-Elemente ein nutzbares Bild liefert.

Häufige Anwendungsfälle für `<picture>`:

- **Art Direction.** Zuschneiden oder Modifizieren von Bildern für verschiedene `media`-Bedingungen (z. B. Laden einer einfacheren Version eines Bildes, das zu viele Details auf kleineren Anzeigen hat).
- **Anbieten alternativer Bildformate**, für Fälle, in denen bestimmte Formate nicht unterstützt werden.

  > [!NOTE]
  > Beispielsweise haben neuere Formate wie [AVIF](/de/docs/Web/Media/Formats/Image_types#avif_image) oder [WEBP](/de/docs/Web/Media/Formats/Image_types#webp_image) viele Vorteile, werden aber möglicherweise vom Browser nicht unterstützt. Eine Liste der unterstützten Bildformate finden Sie unter: [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Formats/Image_types).

- **Sparen von Bandbreite und Beschleunigung der Ladezeiten von Seiten** durch das Laden des am besten geeigneten Bildes für das Display des Betrachters.

Wenn Sie höher aufgelöste Versionen eines Bildes für hochauflösende (Retina-)Displays bereitstellen, verwenden Sie [`srcset`](/de/docs/Web/HTML/Element/img#srcset) auf dem `<img>`-Element. Dies ermöglicht es Browsern, in datensparenden Modi auf niedrigere Auflösungen zurückzugreifen, ohne dass explizite `media`-Bedingungen erstellt werden müssen.

## Attribute

Dieses Element umfasst nur [globale Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Sie können die Eigenschaft {{cssxref("object-position")}} verwenden, um die Positionierung des Bildes innerhalb des Rahmens des Elements anzupassen, und die Eigenschaft {{cssxref("object-fit")}}, um zu steuern, wie das Bild in den Rahmen eingepasst wird.

> [!NOTE]
> Verwenden Sie diese Eigenschaften auf dem Kind-`<img>`-Element, **nicht** auf dem `<picture>`-Element.

## Beispiele

Diese Beispiele veranschaulichen, wie verschiedene Attribute des {{HTMLElement("source")}}-Elements die Auswahl des Bildes innerhalb von `<picture>` beeinflussen.

### Das Medien-Attribut

Das `media`-Attribut spezifiziert eine Medienbedingung (ähnlich einer Medienabfrage), die der User-Agent für jedes {{HTMLElement("source")}}-Element auswertet.

Wenn die Medienbedingung des {{HTMLElement("source")}} als `false` bewertet wird, überspringt der Browser es und bewertet das nächste Element innerhalb von `<picture>`.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(min-width: 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN" />
</picture>
```

### Das srcset-Attribut

Das [srcset](/de/docs/Web/HTML/Element/source#srcset)-Attribut wird verwendet, um eine Liste möglicher Bilder basierend auf Größe oder Pixeldichte des Displays anzubieten.

Es besteht aus einer durch Kommas getrennten Liste von Bildbeschreibungen. Jede Bildbeschreibung besteht aus einer URL des Bildes und _entweder_:

- einem _Breitenbeschreiber_, gefolgt von einem `w` (wie z. B. `300w`);
  _ODER_
- einem _Pixeldichte-Beschreiber_, gefolgt von einem `x` (wie z. B. `2x`), um ein hochauflösendes Bild für hochauflösende Bildschirme bereitzustellen.

Beachten Sie, dass:

- Breiten- und Pixeldichte-Beschreiber nicht zusammen verwendet werden sollten
- ein fehlender Pixeldichte-Beschreiber 1x impliziert
- doppelte Beschreibungswerte nicht erlaubt sind (2x & 2x, 100w & 100w)

Das folgende Beispiel illustriert die Verwendung des `srcset`-Attributs mit dem `<source>`-Element, um ein hochauflösendes und ein Standardauflösungsbild zu spezifizieren:

```html
<picture>
  <source srcset="logo.png, logo-1.5x.png 1.5x" />
  <img src="logo.png" alt="MDN Web Docs logo" height="320" width="320" />
</picture>
```

Das `srcset`-Attribut kann auch auf dem `<img>`-Element verwendet werden, ohne dass das `<picture>`-Element erforderlich ist. Das folgende Beispiel zeigt, wie das `srcset`-Attribut verwendet werden kann, um Standardauflösungs- und hochauflösende Bilder zu spezifizieren:

```html
<img
  srcset="logo.png, logo-2x.png 2x"
  src="logo.png"
  height="320"
  width="320"
  alt="MDN Web Docs logo" />
```

Das `sizes`-Attribut ist nicht obligatorisch, wenn `srcset` verwendet wird, aber es wird empfohlen, es zu verwenden, um zusätzliche Informationen für den Browser bereitzustellen, die ihm helfen, die beste Bildquelle auszuwählen.

Ohne `sizes` verwendet der Browser die Standardgröße des Bildes entsprechend seiner Pixelabmessungen. Dies ist möglicherweise nicht die beste Option für alle Geräte, insbesondere wenn das Bild auf verschiedenen Bildschirmgrößen oder in verschiedenen Kontexten angezeigt wird.

Bitte beachten Sie, dass `sizes` nur dann Wirkung hat, wenn statt Pixelverhältniswerten Breitenbeschreibungen mit `srcset` bereitgestellt werden (zum Beispiel 200w anstelle von 2x). Für weitere Informationen zur Verwendung von `srcset` siehe die [Anleitung zu responsiven Bildern](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images).

### Das Typ-Attribut

Das `type`-Attribut spezifiziert einen [MIME-Typ](/de/docs/Web/HTTP/MIME_types) für die Ressourcen-URL(s) im `srcset`-Attribut des {{HTMLElement("source")}}-Elements. Wenn der User-Agent den angegebenen Typ nicht unterstützt, wird das {{HTMLElement("source")}}-Element übersprungen.

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
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>, Phrasierungsinhalt, eingebetteter Inhalt
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Null oder mehr {{HTMLElement("source")}}-Elemente, gefolgt von einem {{HTMLElement("img")}}-Element, optional gemischt mit skript-unterstützenden Elementen.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl Start- als auch End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebetteten Inhalt erlaubt.</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Kein <code>role</code> erlaubt</td>
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
- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Formats/Image_types)
