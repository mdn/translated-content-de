---
title: "<picture>: Das Picture-Element"
slug: Web/HTML/Element/picture
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTMLSidebar}}

Das **`<picture>`** [HTML](/de/docs/Web/HTML)-Element enthält null oder mehr {{HTMLElement("source")}}-Elemente und ein {{HTMLElement("img")}}-Element, um alternative Versionen eines Bildes für verschiedene Anzeige-/Geräteszenarien anzubieten.

Der Browser wird jedes Kind-`<source>`-Element berücksichtigen und die beste Übereinstimmung unter ihnen wählen. Wenn keine Übereinstimmungen gefunden werden oder der Browser das `<picture>`-Element nicht unterstützt, wird die URL des [`src`](/de/docs/Web/HTML/Element/img#src)-Attributs des `<img>`-Elements ausgewählt. Das gewählte Bild wird dann im durch das `<img>`-Element belegten Raum angezeigt.

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

Um zu entscheiden, welche URL geladen werden soll, untersucht der {{Glossary("user_agent", "User Agent")}} die [`srcset`](/de/docs/Web/HTML/Element/source#srcset)-, [`media`](/de/docs/Web/HTML/Element/source#media)- und [`type`](/de/docs/Web/HTML/Element/source#type)-Attribute jedes `<source>`-Elements, um ein kompatibles Bild auszuwählen, das am besten zu dem aktuellen Layout und den Fähigkeiten des Anzeigegeräts passt.

Das `<img>`-Element erfüllt zwei Zwecke:

1. Es beschreibt die Größe und andere Attribute des Bildes und dessen Präsentation.
2. Es bietet eine Ausweichlösung, falls keines der angebotenen `<source>`-Elemente ein brauchbares Bild liefern kann.

Häufige Anwendungsfälle für `<picture>`:

- **Art direction.** Zuschneiden oder Modifizieren von Bildern für verschiedene `media`-Bedingungen (zum Beispiel das Laden einer einfacheren Version eines Bildes, das zu viele Details hat, auf kleineren Displays).
- **Anbieten alternativer Bildformate**, für Fälle, in denen bestimmte Formate nicht unterstützt werden.

  > [!NOTE]
  > Zum Beispiel haben neuere Formate wie [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) oder [WEBP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) viele Vorteile, könnten aber vom Browser nicht unterstützt werden. Eine Liste der unterstützten Bildformate finden Sie in: [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types).

- **Sparen von Bandbreite und Beschleunigen der Seitenladezeiten**, indem das am besten geeignete Bild für das Display des Betrachters geladen wird.

Wenn Sie hochauflösende Versionen eines Bildes für hoch-DPI- (Retina-)Displays bereitstellen, verwenden Sie `srcset` im `<img>`-Element stattdessen. So können Browser in daten-sparenden Modi niedrigere Auflösungen wählen, und Sie müssen keine expliziten medienbasierten Bedingungen schreiben.

## Attribute

Dieses Element enthält nur [globale Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um die Positionierung des Bildes innerhalb des Rahmens des Elements anzupassen, und die {{cssxref("object-fit")}}-Eigenschaft, um zu steuern, wie das Bild innerhalb des Rahmens skaliert wird.

> [!NOTE]
> Verwenden Sie diese Eigenschaften auf dem Kind-`<img>`-Element, **nicht** auf dem `<picture>`-Element.

## Beispiele

Diese Beispiele zeigen, wie unterschiedliche Attribute des {{HTMLElement("source")}}-Elements die Auswahl des Bildes innerhalb `<picture>` ändern.

### Das media-Attribut

Das `media`-Attribut spezifiziert eine Medienbedingung (ähnlich einer Media Query), die der User Agent für jedes {{HTMLElement("source")}}-Element auswertet.

Wenn die Medienbedingung des {{HTMLElement("source")}} als `false` ausgewertet wird, überspringt der Browser dieses Element und bewertet das nächste Element innerhalb von `<picture>`.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(min-width: 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN" />
</picture>
```

### Das srcset-Attribut

Das [srcset](/de/docs/Web/HTML/Element/source#srcset)-Attribut wird verwendet, um eine Liste möglicher Bilder basierend auf der Größe oder der Pixeldichte des Displays anzubieten.

Es besteht aus einer kommagetrennten Liste von Bildbeschreibungen. Jede Bildbeschreibung besteht aus einer URL des Bildes, und _entweder_:

- einem _Breiten-Deskriptor_, gefolgt von einem `w` (wie `300w`);
  _ODER_
- einem _Pixeldichte-Deskriptor_, gefolgt von einem `x` (wie `2x`), um ein hochauflösendes Bild für hoch-DPI-Bildschirme bereitzustellen.

Beachten Sie dabei:

- Breiten- und Pixeldichte-Deskriptoren sollten nicht zusammen verwendet werden
- Ein fehlender Pixeldichte-Deskriptor impliziert 1x
- Doppelte Deskriptorwerte sind nicht erlaubt (2x & 2x, 100w & 100w)

Das folgende Beispiel zeigt die Verwendung des `srcset`-Attributs mit dem `<source>`-Element, um ein hochauflösendes und ein Standard-Auflösungsbild zu spezifizieren:

```html
<picture>
  <source srcset="logo.png, logo-1.5x.png 1.5x" />
  <img src="logo.png" alt="MDN Web Docs logo" height="320" width="320" />
</picture>
```

Das `srcset`-Attribut kann auch auf dem `<img>`-Element ohne das `<picture>`-Element verwendet werden. Das folgende Beispiel zeigt, wie das `srcset`-Attribut verwendet wird, um Bilder mit Standardauflösung und hoher Dichte anzugeben:

```html
<img
  srcset="logo.png, logo-2x.png 2x"
  src="logo.png"
  height="320"
  width="320"
  alt="MDN Web Docs logo" />
```

Das `sizes`-Attribut ist nicht zwingend erforderlich, wenn `srcset` verwendet wird, es wird jedoch empfohlen, es zu nutzen, um dem Browser zusätzliche Informationen bereitzustellen, die ihm helfen, die beste Bildquelle auszuwählen.

Ohne `sizes` verwendet der Browser die Standardgröße des Bildes, wie sie durch seine Abmessungen in Pixeln angegeben ist. Dies passt möglicherweise nicht für alle Geräte, insbesondere wenn das Bild auf unterschiedlichen Bildschirmgrößen oder in verschiedenen Kontexten angezeigt wird.

Bitte beachten Sie, dass `sizes` nur Auswirkungen hat, wenn Breiten-Deskriptoren mit `srcset` bereitgestellt werden, anstatt Pixeldichtewerte (200w anstelle von 2x zum Beispiel). Weitere Informationen zur Verwendung von `srcset` finden Sie in der [Anleitung zu responsiven Bildern](/de/docs/Web/HTML/Responsive_images).

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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließender Inhalt</a
        >, Phrasierung von Inhalten, eingebetteter Inhalt
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
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
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
- Positionierung und Größenänderung des Bildes innerhalb seines Rahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types)
