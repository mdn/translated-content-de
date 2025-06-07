---
title: "<picture>: Das Picture-Element"
slug: Web/HTML/Reference/Elements/picture
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{HTMLSidebar}}

Das **`<picture>`**-[HTML](/de/docs/Web/HTML)-Element enthält null oder mehr {{HTMLElement("source")}}-Elemente und ein {{HTMLElement("img")}}-Element, um alternative Versionen eines Bildes für verschiedene Anzeige-/Geräteszenarien anzubieten.

Der Browser wird jedes Kind-`<source>`-Element betrachten und den besten Treffer unter ihnen auswählen. Wenn keine Übereinstimmungen gefunden werden - oder der Browser das `<picture>`-Element nicht unterstützt - wird die URL des `src`-Attributs des `<img>`-Elements ausgewählt. Das ausgewählte Bild wird dann im vom `<img>`-Element besetzten Raum dargestellt.

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

Um zu entscheiden, welche URL geladen werden soll, untersucht der {{Glossary("user_agent", "User-Agent")}} jedes `srcset`-, `media`- und `type`-Attribut des `<source>`-Elements, um ein kompatibles Bild auszuwählen, das am besten zum aktuellen Layout und den Fähigkeiten des Anzeigegeräts passt.

Das `<img>`-Element erfüllt zwei Zwecke:

1. Es beschreibt die Größe und andere Attribute des Bildes und dessen Darstellung.
2. Es bietet einen Fallback, falls keines der angebotenen `<source>`-Elemente ein verwendbares Bild bereitstellen kann.

Häufige Anwendungsfälle für `<picture>`:

- **Art-Direction.** Zuschneiden oder Ändern von Bildern für verschiedene `media`-Bedingungen (z. B. Laden einer vereinfachten Version eines Bildes, das zu viele Details hat, auf kleineren Bildschirmen).
- **Anbieten alternativer Bildformate** für Fälle, in denen bestimmte Formate nicht unterstützt werden.

  > [!NOTE]
  > Beispielsweise haben neuere Formate wie [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) oder [WEBP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) viele Vorteile, sind jedoch möglicherweise nicht vom Browser unterstützt. Eine Liste der unterstützten Bildformate finden Sie im: [Image file type and format guide](/de/docs/Web/Media/Guides/Formats/Image_types).

- **Bandbreite sparen und Ladezeiten verkürzen**, indem das für die Anzeige des Betrachters am besten geeignete Bild geladen wird.

Wenn Sie höher dichte Versionen eines Bildes für hochauflösende (Retina) Displays bereitstellen, verwenden Sie `srcset` auf dem `<img>`-Element stattdessen. Dies ermöglicht es Browsern, in datenparausamen Modi zu niedrigeren Dichten zu wechseln, und Sie müssen keine expliziten `media`-Bedingungen schreiben.

## Attribute

Dieses Element enthält nur [globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um die Positionierung des Bildes innerhalb des Rahmens des Elements anzupassen, und die {{cssxref("object-fit")}}-Eigenschaft verwenden, um zu steuern, wie das Bild auf die Größe des Rahmens skaliert wird.

> [!NOTE]
> Verwenden Sie diese Eigenschaften auf dem Kind-`<img>`-Element, **nicht** dem `<picture>`-Element.

## Beispiele

Diese Beispiele demonstrieren, wie verschiedene Attribute des {{HTMLElement("source")}}-Elements die Auswahl des Bildes innerhalb `<picture>` ändern.

### Das media-Attribut

Das `media`-Attribut gibt eine Medienbedingung an (ähnlich wie eine Medienabfrage), die der User-Agent für jedes {{HTMLElement("source")}}-Element auswertet.

Wenn die Medienbedingung des {{HTMLElement("source")}} als `false` ausgewertet wird, überspringt der Browser es und bewertet das nächste Element innerhalb `<picture>`.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(min-width: 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN" />
</picture>
```

### Das srcset-Attribut

Das [srcset](/de/docs/Web/HTML/Reference/Elements/source#srcset)-Attribut wird verwendet, um eine Liste möglicher Bilder basierend auf Größe oder Pixeldichte des Displays anzubieten.

Es besteht aus einer kommagetrennten Liste von Bildbeschreibungen. Jede Bildbeschreibung besteht aus einer URL des Bildes und _entweder_:

- einem _Breiten-Deskriptor_, gefolgt von einem `w` (wie `300w`);
  _ODER_
- einem _Pixeldichte-Deskriptor_, gefolgt von einem `x` (wie `2x`), um ein hochauflösendes Bild für hochauflösende Bildschirme bereitzustellen.

Bitte beachten Sie, dass:

- Breiten- und Pixeldichte-Deskriptoren nicht zusammen verwendet werden sollten
- ein fehlender Pixeldichte-Deskriptor 1x impliziert
- doppelte Deskriptorwerte nicht erlaubt sind (2x & 2x, 100w & 100w)

Das folgende Beispiel veranschaulicht die Verwendung des `srcset`-Attributs mit dem `<source>`-Element, um ein hochdichtes und ein Standardauflösungsbild zu spezifizieren:

```html
<picture>
  <source srcset="logo.png, logo-1.5x.png 1.5x" />
  <img src="logo.png" alt="MDN Web Docs logo" height="320" width="320" />
</picture>
```

Das `srcset`-Attribut kann auch auf dem `<img>`-Element verwendet werden, ohne dass das `<picture>`-Element erforderlich ist. Das folgende Beispiel zeigt, wie das `srcset`-Attribut verwendet wird, um Standardauflösungs- und hochdichte Bilder bereitzustellen:

```html
<img
  srcset="logo.png, logo-2x.png 2x"
  src="logo.png"
  height="320"
  width="320"
  alt="MDN Web Docs logo" />
```

Das `sizes`-Attribut ist nicht zwingend erforderlich, wenn srcset verwendet wird, es wird jedoch empfohlen, es zu verwenden, um dem Browser zusätzliche Informationen zu geben, die ihm bei der Auswahl der besten Bildquelle helfen.

Ohne Größen verwendet der Browser die Standardgröße des Bildes, wie sie durch seine Abmessungen in Pixeln angegeben ist. Dies ist möglicherweise nicht die beste Option für alle Geräte, insbesondere wenn das Bild auf verschiedenen Bildschirmgrößen oder in unterschiedlichen Kontexten angezeigt wird.

Bitte beachten Sie, dass Größen nur dann ihren Effekt haben, wenn Breitenmaß-Deskriptoren mit srcset bereitgestellt werden anstelle von Pixelverhältnis-Werten (z. B. 200w statt 2x).
Weitere Informationen zur Verwendung von `srcset` finden Sie in der [Responsive images](/de/docs/Web/HTML/Guides/Responsive_images) Dokumentation.

### Das type-Attribut

Das `type`-Attribut gibt einen [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) für die Ressourcen-URL(s) im `srcset`-Attribut des {{HTMLElement("source")}}-Elements an. Falls der User-Agent den angegebenen Typ nicht unterstützt, wird das {{HTMLElement("source")}}-Element übersprungen.

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
          >Fließinhalt</a
        >, Phraseninhalt, eingebetteter Inhalt
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        Null oder mehr {{HTMLElement("source")}}-Elemente, gefolgt von einem
        {{HTMLElement("img")}}-Element, optional durchsetzt mit
        skriptunterstützenden Elementen.
      </td>
    </tr>
    <tr>
      <th scope="row">Weglassen von Tags</th>
      <td>Keines, sowohl der Start- als auch der End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>Jedes Element, das eingebetteten Inhalt erlaubt.</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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
- Positionierung und Größenanpassung des Bildes innerhalb des Rahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
- [Image file type and format guide](/de/docs/Web/Media/Guides/Formats/Image_types)
