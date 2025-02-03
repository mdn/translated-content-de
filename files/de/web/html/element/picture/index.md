---
title: "<picture>: Das Picture-Element"
slug: Web/HTML/Element/picture
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{HTMLSidebar}}

Das **`<picture>`** [HTML](/de/docs/Web/HTML)-Element enthält null oder mehr {{HTMLElement("source")}}-Elemente und ein {{HTMLElement("img")}}-Element, um alternative Versionen eines Bildes für verschiedene Anzeige-/Geräteszenarien anzubieten.

Der Browser berücksichtigt jedes untergeordnete `<source>`-Element und wählt die beste Übereinstimmung unter ihnen. Wenn keine Übereinstimmungen gefunden werden oder der Browser das `<picture>`-Element nicht unterstützt, wird die URL des [`src`](/de/docs/Web/HTML/Element/img#src)-Attributs des `<img>`-Elements ausgewählt. Das ausgewählte Bild wird dann im Raum des `<img>`-Elements angezeigt.

{{EmbedInteractiveExample("pages/tabbed/picture.html", "tabbed-standard")}}

Um zu entscheiden, welche URL geladen werden soll, prüft der {{Glossary("user_agent", "Benutzeragent")}} die [`srcset`](/de/docs/Web/HTML/Element/source#srcset)-, [`media`](/de/docs/Web/HTML/Element/source#media)- und [`type`](/de/docs/Web/HTML/Element/source#type)-Attribute der einzelnen `<source>`-Elemente, um ein kompatibles Bild auszuwählen, das am besten zum aktuellen Layout und zu den Fähigkeiten des Anzeigegeräts passt.

Das `<img>`-Element erfüllt zwei Zwecke:

1. Es beschreibt die Größe und andere Attribute des Bildes und seiner Darstellung.
2. Es bietet eine Rückfallebene, falls keines der angebotenen `<source>`-Elemente ein verwendbares Bild bereitstellen kann.

Häufige Anwendungsfälle für `<picture>`:

- **Art Direction.** Zuschneiden oder Ändern von Bildern für unterschiedliche `media`-Bedingungen (zum Beispiel das Laden einer einfacheren Version eines Bildes mit zu vielen Details auf kleineren Bildschirmen).
- **Anbieten alternativer Bildformate**, für Fälle, in denen bestimmte Formate nicht unterstützt werden.

  > [!NOTE]
  > Beispielsweise haben neuere Formate wie [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) oder [WEBP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) viele Vorteile, könnten jedoch vom Browser nicht unterstützt werden. Eine Liste der unterstützten Bildformate finden Sie im [Leitfaden zu Bilddateityp und -format](/de/docs/Web/Media/Guides/Formats/Image_types).

- **Bandbreite sparen und Ladezeiten der Seite beschleunigen**, indem das für das Anzeigegerät des Betrachters am besten geeignete Bild geladen wird.

Wenn Sie höherauflösende Versionen eines Bildes für hochauflösende (Retina-)Bildschirme bereitstellen, verwenden Sie [`srcset`](/de/docs/Web/HTML/Element/img#srcset) im `<img>`-Element. Dadurch können Browser in Datensparmodi niedrigauflösende Versionen verwenden, und Sie müssen keine expliziten `media`-Bedingungen schreiben.

## Attribute

Dieses Element beinhaltet nur [globale Attribute](/de/docs/Web/HTML/Global_attributes).

## Nutzungshinweise

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um die Positionierung des Bildes innerhalb des Rahmens des Elements anzupassen, und die {{cssxref("object-fit")}}-Eigenschaft, um zu steuern, wie das Bild innerhalb des Rahmens skaliert wird.

> [!NOTE]
> Verwenden Sie diese Eigenschaften auf dem untergeordneten `<img>`-Element, **nicht** auf dem `<picture>`-Element.

## Beispiele

Diese Beispiele zeigen, wie unterschiedliche Attribute des {{HTMLElement("source")}}-Elements die Auswahl des Bildes innerhalb von `<picture>` verändern.

### Das media-Attribut

Das `media`-Attribut spezifiziert eine Medienbedingung (ähnlich einer Media-Query), die der Benutzeragent für jedes {{HTMLElement("source")}}-Element bewertet.

Wenn die Medienbedingung des {{HTMLElement("source")}}-Elements auf `false` evaluiert, überspringt der Browser es und bewertet das nächste Element innerhalb von `<picture>`.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(min-width: 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN" />
</picture>
```

### Das srcset-Attribut

Das [srcset](/de/docs/Web/HTML/Element/source#srcset)-Attribut wird verwendet, um eine Liste möglicher Bilder basierend auf der Größe oder der Pixeldichte des Displays anzubieten.

Es besteht aus einer kommagetrennten Liste von Bildbeschreibungen. Jede Bildbeschreibung besteht aus einer URL des Bildes und _entweder_:

- einem _Breitenbeschreiber_, gefolgt von einem `w` (wie `300w`);
  _ODER_
- einem _Pixeldichtebeschreiber_, gefolgt von einem `x` (wie `2x`), um ein hochauflösendes Bild für Bildschirme mit hoher DPI zu bedienen.

Beachten Sie:

- Breiten- und Pixeldichtebeschreiber sollten nicht zusammen verwendet werden
- Ein fehlender Pixeldichtebeschreiber impliziert 1x
- Doppelte Beschreibungswerte sind nicht erlaubt (2x & 2x, 100w & 100w)

Das folgende Beispiel veranschaulicht die Verwendung des `srcset`-Attributs mit dem `<source>`-Element, um ein hochauflösendes und ein Standardauflösungsbild anzugeben:

```html
<picture>
  <source srcset="logo.png, logo-1.5x.png 1.5x" />
  <img src="logo.png" alt="MDN Web Docs logo" height="320" width="320" />
</picture>
```

Das `srcset`-Attribut kann auch auf dem `<img>`-Element ohne das `<picture>`-Element verwendet werden. Das folgende Beispiel zeigt, wie das `srcset`-Attribut verwendet wird, um Bilder in Standardauflösung und hoher Dichte anzugeben:

```html
<img
  srcset="logo.png, logo-2x.png 2x"
  src="logo.png"
  height="320"
  width="320"
  alt="MDN Web Docs logo" />
```

Das `sizes`-Attribut ist nicht zwingend erforderlich, wenn `srcset` verwendet wird, aber es wird empfohlen, es zu verwenden, um dem Browser zusätzliche Informationen zu geben, die ihm helfen, die beste Bildquelle auszuwählen.

Ohne `sizes` verwendet der Browser die Standardgröße des Bildes, wie sie durch seine Abmessungen in Pixeln angegeben ist. Dies ist möglicherweise nicht die beste Wahl für alle Geräte, insbesondere wenn das Bild auf unterschiedlichen Bildschirmgrößen oder in verschiedenen Kontexten angezeigt wird.

Bitte beachten Sie, dass `sizes` nur dann wirksam wird, wenn Breitenbeschreibungen mit `srcset` angegeben werden, anstelle von Pixeldichtewerten (zum Beispiel 200w statt 2x).
Weitere Informationen zur Verwendung von `srcset` finden Sie in der [Dokumentation zu responsiven Bildern](/de/docs/Web/HTML/Responsive_images).

### Das type-Attribut

Das `type`-Attribut spezifiziert einen [MIME-Typ](/de/docs/Web/HTTP/MIME_types) für die Ressourcen-URL(s) im `srcset`-Attribut des {{HTMLElement("source")}}-Elements. Wenn der Benutzeragent den angegebenen Typ nicht unterstützt, wird das {{HTMLElement("source")}}-Element übersprungen.

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
          >Flow-Inhalt</a
        >, phrasing content, eingebetteter Inhalt
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Null oder mehr {{HTMLElement("source")}}-Elemente, gefolgt von einem
        {{HTMLElement("img")}}-Element, optional gemischt mit
        skriptunterstützenden Elementen.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind zwingend erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
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
- Positionierung und Größenanpassung des Bildes im Rahmen: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
- [Leitfaden zu Bilddateityp und -format](/de/docs/Web/Media/Guides/Formats/Image_types)
