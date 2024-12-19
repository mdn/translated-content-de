---
title: "<picture>: Das Picture-Element"
slug: Web/HTML/Element/picture
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

Das **`<picture>`** [HTML](/de/docs/Web/HTML) Element enthält null oder mehr {{HTMLElement("source")}}-Elemente und ein {{HTMLElement("img")}}-Element, um alternative Versionen eines Bildes für unterschiedliche Anzeige-/Geräteszenarien anzubieten.

Der Browser wird jedes Kind-`<source>`-Element berücksichtigen und die beste Übereinstimmung unter ihnen auswählen. Wenn keine Übereinstimmungen gefunden werden — oder der Browser das `<picture>`-Element nicht unterstützt — wird die URL des [`src`](/de/docs/Web/HTML/Element/img#src)-Attributs des `<img>`-Elements ausgewählt. Das ausgewählte Bild wird dann in dem vom `<img>`-Element eingenommenen Raum präsentiert.

{{EmbedInteractiveExample("pages/tabbed/picture.html", "tabbed-standard")}}

Um zu entscheiden, welche URL geladen werden soll, untersucht der {{Glossary("user_agent", "user agent")}} die `[`srcset`](/de/docs/Web/HTML/Element/source#srcset)`, `[`media`](/de/docs/Web/HTML/Element/source#media)`, und `[`type`](/de/docs/Web/HTML/Element/source#type)`-Attribute jedes `<source>`-Elements, um ein kompatibles Bild auszuwählen, das am besten zum aktuellen Layout und den Fähigkeiten des Anzeigegeräts passt.

Das `<img>`-Element erfüllt zwei Zwecke:

1. Es beschreibt die Größe und andere Attribute des Bildes und seiner Darstellung.
2. Es bietet eine Fallback-Möglichkeit, falls keines der angebotenen `<source>`-Elemente ein verwendbares Bild bereitstellen kann.

Häufige Anwendungsfälle für `<picture>`:

- **Art Direction.** Zuschneiden oder Bearbeiten von Bildern für verschiedene `media`-Bedingungen (zum Beispiel das Laden einer einfacheren Version eines Bildes, das zu viele Details hat, auf kleineren Displays).
- **Anbieten alternativer Bildformate**, für Fälle, in denen bestimmte Formate nicht unterstützt werden.

  > [!NOTE]
  > Zum Beispiel haben neuere Formate wie [AVIF](/de/docs/Web/Media/Formats/Image_types#avif_image) oder [WEBP](/de/docs/Web/Media/Formats/Image_types#webp_image) viele Vorteile, könnten aber vom Browser nicht unterstützt werden. Eine Liste unterstützter Bildformate finden Sie in: [Leitfaden für Bilddateitypen und -formate](/de/docs/Web/Media/Formats/Image_types).

- **Bandbreite sparen und Ladezeiten der Seite verkürzen**, indem das geeignetste Bild für das Display des Betrachters geladen wird.

Wenn Sie höher aufgelöste Versionen eines Bildes für hochauflösende (Retina) Displays bereitstellen, verwenden Sie das [`srcset`](/de/docs/Web/HTML/Element/img#srcset) Attribut auf dem `<img>`-Element. Dies ermöglicht es Browsern, sich für niedriger auflösende Versionen in datenreduzierenden Modi zu entscheiden, ohne dass Sie explizite `media`-Bedingungen schreiben müssen.

## Attribute

Dieses Element umfasst nur [globale Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um die Positionierung des Bildes innerhalb des Elementrahmens anzupassen, und die {{cssxref("object-fit")}}-Eigenschaft, um zu steuern, wie das Bild an den Rahmen angepasst wird.

> [!NOTE]
> Verwenden Sie diese Eigenschaften auf dem Kindelement `<img>`, **nicht** auf dem `<picture>`-Element.

## Beispiele

Diese Beispiele zeigen, wie verschiedene Attribute des {{HTMLElement("source")}}-Elements die Auswahl des Bildes innerhalb von `<picture>` verändern.

### Das media-Attribut

Das `media`-Attribut spezifiziert eine Medienbedingung (ähnlich einer Medienabfrage), die der User Agent für jedes {{HTMLElement("source")}}-Element auswertet.

Wenn die Medienbedingung des {{HTMLElement("source")}} als `false` ausgewertet wird, überspringt der Browser es und bewertet das nächste Element innerhalb von `<picture>`.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(min-width: 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN" />
</picture>
```

### Das srcset-Attribut

Das [srcset](/de/docs/Web/HTML/Element/source#srcset)-Attribut wird verwendet, um eine Liste möglicher Bilder basierend auf Größe oder Pixeldichte des Displays anzubieten.

Es besteht aus einer kommagetrennten Liste von Bildbeschreibungen. Jede Bildbeschreibung besteht aus einer URL des Bildes und _entweder_:

- einem _Breitendeskriptor_, gefolgt von einem `w` (wie `300w`);
  _ODER_
- einem _Pixeldichtedeskriptor_, gefolgt von einem `x` (wie `2x`), um ein hochauflösendes Bild für hochauflösende Bildschirme bereitzustellen.

Stellen Sie sicher, dass:

- Breiten- und Pixeldichtedeskriptoren nicht zusammen verwendet werden sollten
- ein fehlender Pixeldichtedeskriptor 1x bedeutet
- doppelte Deskriptorwerte nicht zulässig sind (2x & 2x, 100w & 100w)

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

Das `sizes`-Attribut ist beim Verwenden von srcset nicht obligatorisch, aber es wird empfohlen, es zu verwenden, um dem Browser zusätzliche Informationen zur Auswahl der besten Bildquelle zu geben.

Ohne Größen verwendet der Browser die Standardgröße des Bildes, wie sie durch seine Abmessungen in Pixeln angegeben ist. Dies ist möglicherweise nicht die beste Option für alle Geräte, insbesondere wenn das Bild auf verschiedenen Bildschirmgrößen oder in verschiedenen Kontexten angezeigt wird.

Bitte beachten Sie, dass Größen nur dann eine Wirkung haben, wenn Breitenmaße mit srcset angegeben werden, anstatt Pixeldichtewerte (z.B. 200w statt 2x).
Weitere Informationen zur Verwendung von `srcset` finden Sie in der [Dokumentation zu responsiven Bildern](/de/docs/Web/HTML/Responsive_images).

### Das type-Attribut

Das `type`-Attribut spezifiziert einen [MIME-Typ](/de/docs/Web/HTTP/MIME_types) für die Ressource(n) im `srcset`-Attribut des {{HTMLElement("source")}}-Elements. Wenn der User-Agent den angegebenen Typ nicht unterstützt, wird das {{HTMLElement("source")}}-Element übersprungen.

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
          >Fließinhalt</a
        >, phrasing content, eingebetteter Inhalt
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Null oder mehr {{HTMLElement("source")}}-Elemente, gefolgt von einem
        {{HTMLElement("img")}}-Element, optional vermischt mit
        elements that support script execution.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Anfangs- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebettete Inhalte erlaubt.</td>
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
- Positionierung und Größenänderung des Bildes innerhalb des Rahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
- [Leitfaden für Bilddateitypen und -formate](/de/docs/Web/Media/Formats/Image_types)
