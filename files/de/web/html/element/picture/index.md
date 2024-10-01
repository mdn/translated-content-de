---
title: "<picture>: Das Picture-Element"
slug: Web/HTML/Element/picture
l10n:
  sourceCommit: 9c09b183a5ce844a75c2f22e909d03f71ca329fc
---

{{HTMLSidebar}}

Das **`<picture>`** [HTML](/de/docs/Web/HTML)-Element enthält null oder mehr {{HTMLElement("source")}}-Elemente und ein {{HTMLElement("img")}}-Element, um alternative Versionen eines Bildes für verschiedene Anzeige-/Geräteszenarien anzubieten.

Der Browser berücksichtigt jedes untergeordnete `<source>`-Element und wählt das am besten passende aus. Wenn keine Übereinstimmungen gefunden werden—oder der Browser das `<picture>`-Element nicht unterstützt—wird die URL des `src`-Attributs des `<img>`-Elements ausgewählt. Das ausgewählte Bild wird dann in dem vom `<img>`-Element eingenommenen Bereich angezeigt.

{{EmbedInteractiveExample("pages/tabbed/picture.html", "tabbed-standard")}}

Um zu entscheiden, welche URL geladen wird, prüft der {{Glossary("user_agent", "User Agent")}} die `srcset`-, `media`- und `type`-Attribute jedes `<source>`-Elements, um ein kompatibles Bild auszuwählen, das am besten zum aktuellen Layout und den Fähigkeiten des Anzeigegeräts passt.

Das `<img>`-Element erfüllt zwei Zwecke:

1. Es beschreibt die Größe und andere Attribute des Bildes und seiner Präsentation.
2. Es bietet einen Fallback, falls keines der angebotenen `<source>`-Elemente ein verwendbares Bild bereitstellen kann.

Gängige Anwendungsfälle für `<picture>`:

- **Art Direction.** Zuschneiden oder Bearbeiten von Bildern für unterschiedliche `media`-Bedingungen (zum Beispiel das Laden einer einfacheren Version eines bildlichen Details auf kleineren Anzeigen).
- **Anbieten alternativer Bildformate**, für Fälle, in denen bestimmte Formate nicht unterstützt werden.

  > [!NOTE]
  > Zum Beispiel haben neuere Formate wie [AVIF](/de/docs/Web/Media/Formats/Image_types#avif_image) oder [WEBP](/de/docs/Web/Media/Formats/Image_types#webp_image) viele Vorteile, könnten aber vom Browser nicht unterstützt werden. Eine Liste unterstützter Bildformate finden Sie unter: [Image file type and format guide](/de/docs/Web/Media/Formats/Image_types).

- **Bandbreite sparen und die Ladezeiten von Seiten beschleunigen** durch das Laden des am besten geeigneten Bildes für die Anzeige des Betrachters.

Wenn Sie Bilder mit höherer Dichte für hochauflösende (Retina) Bildschirme bereitstellen möchten, verwenden Sie `srcset` auf dem `<img>`-Element statt auf dem `<picture>`-Element. Dadurch können Browser in datensparenden Modi für niedrigere Dichteversionen entscheiden, ohne dass explizite `media`-Bedingungen geschrieben werden müssen.

## Attribute

Dieses Element enthält nur [globale Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um die Positionierung des Bildes innerhalb des Rahmens des Elements anzupassen, und die {{cssxref("object-fit")}}-Eigenschaft, um zu steuern, wie das Bild innerhalb des Rahmens verkleinert oder vergrößert wird.

> [!NOTE]
> Verwenden Sie diese Eigenschaften auf dem untergeordneten `<img>`-Element, **nicht** auf dem `<picture>`-Element.

## Beispiele

Diese Beispiele zeigen, wie unterschiedliche Attribute des {{HTMLElement("source")}}-Elements die Auswahl des Bildes innerhalb `<picture>` ändern.

### Das media-Attribut

Das `media`-Attribut spezifiziert eine Medienbedingung (ähnlich einer Media Query), die der User Agent für jedes {{HTMLElement("source")}}-Element auswertet.

Wenn die Medienbedingung des {{HTMLElement("source")}}-Elements zu `false` ausgewertet wird, überspringt der Browser es und wertet das nächste Element innerhalb `<picture>` aus.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(min-width: 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN" />
</picture>
```

### Das srcset-Attribut

Das [srcset](/de/docs/Web/HTML/Element/source#srcset)-Attribut wird verwendet, um eine Liste möglicher Bilder basierend auf Größe oder Pixeldichte des Displays anzubieten.

Es besteht aus einer durch Kommas getrennten Liste von Bildbeschreibungen. Jede Bildbeschreibung besteht aus einer URL des Bildes und entweder:

- einem Breitenmesser in Pixel, gefolgt von einem `w` (z.B. `300w`);
  _ODER_
- einem Pixeldichte-Beschreiber, gefolgt von einem `x` (z.B. `2x`), um ein hochauflösendes Bild für hochauflösende Bildschirme bereitzustellen.

Bitte beachten Sie, dass:

- Breiten- und Pixeldichte-Beschreiber sollten nicht gemeinsam verwendet werden.
- Ein fehlender Pixeldichte-Beschreiber impliziert 1x.
- Doppelte Beschreibungswerte sind nicht erlaubt (2x & 2x, 100w & 100w).

Das folgende Beispiel zeigt die Verwendung des `srcset`-Attributs mit dem `<source>`-Element, um ein hochauflösendes und ein Standardauflösungsbild anzugeben:

```html
<picture>
  <source srcset="logo.png, logo-1.5x.png 1.5x" />
  <img src="logo.png" alt="MDN Web Docs logo" height="320" width="320" />
</picture>
```

Das `srcset`-Attribut kann auch auf dem `<img>`-Element ohne das `<picture>`-Element verwendet werden. Das folgende Beispiel zeigt, wie das `srcset`-Attribut verwendet werden kann, um Standardauflösungs- und hochauflösende Bilder anzugeben:

```html
<img
  srcset="logo.png, logo-2x.png 2x"
  src="logo.png"
  height="320"
  width="320"
  alt="MDN Web Docs logo" />
```

Das `sizes`-Attribut ist nicht zwingend erforderlich bei der Verwendung von srcset, aber es wird empfohlen, es zu verwenden, um dem Browser zusätzliche Informationen zu geben, die ihm helfen, die beste Bildquelle auszuwählen.

Ohne Größen verwendet der Browser die Standardgröße des Bildes, wie sie durch seine Abmessungen in Pixeln angegeben ist. Dies ist möglicherweise nicht die beste Option für alle Geräte, insbesondere wenn das Bild auf verschiedenen Bildschirmgrößen oder in unterschiedlichen Kontexten dargestellt wird.

Bitte beachten Sie, dass Größen nur dann wirksam werden, wenn Breitenbeschreiber mit srcset angegeben werden, anstatt Pixeldichtewerte (z.B. 200w anstelle von 2x).
Für weitere Informationen zur Verwendung von `srcset` siehe die [Responsive images](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)-Dokumentation.

### Das type-Attribut

Das `type`-Attribut spezifiziert einen [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) für die Ressourcen-URL(s) im `srcset`-Attribut des {{HTMLElement("source")}}-Elements. Wenn der User Agent den angegebenen Typ nicht unterstützt, wird das {{HTMLElement("source")}}-Element übersprungen.

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
          >Flussinhalt</a
        >, Phraseninhalt, eingebetteter Inhalt
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
      <th scope="row">Tag-Weglassung</th>
      <td>Keine, sowohl der Beginn- als auch der Endtag sind zwingend erforderlich.</td>
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

- {{HTMLElement("img")}}-Element
- {{HTMLElement("source")}}-Element
- Positionierung und Größenanpassung des Bildes innerhalb seines Rahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
- [Image file type and format guide](/de/docs/Web/Media/Formats/Image_types)
