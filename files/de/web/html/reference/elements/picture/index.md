---
title: "<picture>: Das Picture-Element"
slug: Web/HTML/Reference/Elements/picture
l10n:
  sourceCommit: 314a6c8f553fb2f6bd4b86c070d9cfaa3be4a135
---

Das **`<picture>`** [HTML](/de/docs/Web/HTML)-Element enthält null oder mehr {{HTMLElement("source")}}-Elemente und ein {{HTMLElement("img")}}-Element, um alternative Versionen eines Bildes für verschiedene Anzeige-/Geräteszenarien anzubieten.

Der Browser wird jedes untergeordnete `<source>`-Element berücksichtigen und das beste Match unter ihnen auswählen. Wenn keine Übereinstimmungen gefunden werden – oder der Browser das `<picture>`-Element nicht unterstützt – wird die URL des [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)-Attributs des `<img>`-Elements ausgewählt. Das ausgewählte Bild wird dann im vom `<img>`-Element eingenommenen Raum präsentiert.

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

Um zu entscheiden, welche URL geladen werden soll, prüft der {{Glossary("user_agent", "User-Agent")}} jedes [`srcset`](/de/docs/Web/HTML/Reference/Elements/source#srcset)-, [`media`](/de/docs/Web/HTML/Reference/Elements/source#media)- und [`type`](/de/docs/Web/HTML/Reference/Elements/source#type)-Attribut des `<source>`-Elements, um ein kompatibles Bild auszuwählen, das am besten zum aktuellen Layout und den Fähigkeiten des Anzeigegeräts passt.

Das `<img>`-Element erfüllt zwei Zwecke:

1. Es beschreibt die Größe und andere Attribute des Bildes und seiner Präsentation.
2. Es bietet eine Fallback-Lösung, falls keines der angebotenen `<source>`-Elemente ein verwendbares Bild liefern kann.

Häufige Anwendungsfälle für `<picture>`:

- **Art Direction.** Zuschneiden oder Anpassen von Bildern für verschiedene `media`-Bedingungen (zum Beispiel das Laden einer einfacheren Version eines Bildes, das zu viele Details aufweist, auf kleineren Displays).
- **Angebot alternativer Bildformate**, für Fälle, in denen bestimmte Formate nicht unterstützt werden.

  > [!NOTE]
  > Zum Beispiel haben neuere Formate wie [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) oder [WEBP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) viele Vorteile, könnten aber vom Browser nicht unterstützt werden. Eine Liste der unterstützten Bildformate finden Sie im: [Leitfaden für Bilddateitypen und -formate](/de/docs/Web/Media/Guides/Formats/Image_types).

- **Sparen von Bandbreite und Beschleunigung der Seitenladezeiten** durch das Laden des am besten geeigneten Bildes für das Anzeigegerät des Betrachters.

Wenn Sie höherauflösende Versionen eines Bildes für High-DPI- (Retina-)Displays bereitstellen, verwenden Sie [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) auf dem `<img>`-Element statt. Dadurch können Browser in Datensparmodi geringere Auflösungen auswählen, und Sie müssen keine expliziten `media`-Bedingungen schreiben.

## Attribute

Dieses Element enthält nur [globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Nutzungshinweise

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um die Positionierung des Bildes innerhalb des Rahmens anzupassen, und die {{cssxref("object-fit")}}-Eigenschaft, um zu steuern, wie das Bild innerhalb des Rahmens in der Größe angepasst wird.

> [!NOTE]
> Verwenden Sie diese Eigenschaften auf dem untergeordneten `<img>`-Element, **nicht** auf dem `<picture>`-Element.

## Beispiele

Diese Beispiele zeigen, wie verschiedene Attribute des {{HTMLElement("source")}}-Elements die Auswahl des Bildes innerhalb von `<picture>` ändern.

### Das media-Attribut

Das `media`-Attribut gibt eine Medienbedingung an (ähnlich einer Media-Query), die der User-Agent für jedes {{HTMLElement("source")}}-Element auswerten wird.

Wenn die Medienbedingung des {{HTMLElement("source")}}-Elements zu `false` ausgewertet wird, überspringt der Browser es und wertet das nächste Element innerhalb von `<picture>` aus.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(width >= 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN" />
</picture>
```

Sie können Bildressourcen für helle und dunkle Themen mit der [`prefers-color-scheme`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme)-Medieneigenschaft austauschen:

```html
<picture>
  <source srcset="logo-dark.png" media="(prefers-color-scheme: dark)" />
  <source srcset="logo-light.png" media="(prefers-color-scheme: light)" />
  <img src="logo-light.png" alt="Product logo" />
</picture>
```

### Das srcset-Attribut

Das [srcset](/de/docs/Web/HTML/Reference/Elements/source#srcset)-Attribut wird verwendet, um eine Liste möglicher Bilder basierend auf der Größe oder der Pixeldichte des Anzeigegeräts anzubieten.

Es besteht aus einer kommagetrennten Liste von Bildbeschreibungen. Jede Bildbeschreibung besteht aus einer URL des Bildes und _entweder_:

- einem _Breitenbeschreiber_, gefolgt von einem `w` (wie `300w`);
  _ODER_
- einem _Pixeldichtebeschreiber_, gefolgt von einem `x` (wie `2x`), um ein hochauflösendes Bild für High-DPI-Bildschirme bereitzustellen.

Beachten Sie, dass:

- Breiten- und Pixeldichtebeschreiber nicht zusammen verwendet werden sollten
- ein fehlender Pixeldichtebeschreiber bedeutet 1x
- doppelte Beschreibungswerte nicht erlaubt sind (2x & 2x, 100w & 100w)

Das folgende Beispiel veranschaulicht die Verwendung des `srcset`-Attributs mit dem `<source>`-Element, um ein hochauflösendes und ein Standardauflösungsbild anzugeben:

```html
<picture>
  <source srcset="logo.png, logo-1.5x.png 1.5x" />
  <img src="logo.png" alt="MDN Web Docs logo" height="320" width="320" />
</picture>
```

Das `srcset`-Attribut kann auch auf dem `<img>`-Element ohne das `<picture>`-Element verwendet werden. Das folgende Beispiel zeigt, wie das `srcset`-Attribut verwendet wird, um Standardauflösungs- und hochauflösende Bilder anzugeben:

```html
<img
  srcset="logo.png, logo-2x.png 2x"
  src="logo.png"
  height="320"
  width="320"
  alt="MDN Web Docs logo" />
```

### Das sizes-Attribut

Das [`sizes`](/de/docs/Web/HTML/Reference/Elements/source#sizes)-Attribut des `<source>`-Elements ermöglicht es Ihnen, eine Menge von Medienbedingung-Längen-Paaren anzugeben und die Bildanzeigegröße für jede Bedingung zu kennzeichnen. Dies hilft dem Browser, das am besten geeignete Bild aus dem `srcset`-Attribut auszuwählen, das Bilder mit ihren {{Glossary("Intrinsic_Size", "intrinsischen")}} Breiten auflistet.

Der Browser wertet die Medienbedingungen im sizes-Attribut aus, bevor er Bilder herunterlädt. Informieren Sie sich über das sizes-Attribut der [`<img>`](/de/docs/Web/HTML/Reference/Elements/img#sizes)- und [`<source>`](/de/docs/Web/HTML/Reference/Elements/source#sizes)-Elemente für weitere Informationen.

Zum Beispiel:

```html
<picture>
  <source
    srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
    sizes="(max-width: 600px) 400px, 800px"
    type="image/jpeg" />
  <img src="fallback.jpg" alt="Example image" />
</picture>
```

In diesem Beispiel:

- Wenn der Viewport 600px breit oder weniger ist, beträgt die Slot-Größe 400px; andernfalls beträgt sie 800px.
- Der Browser multipliziert die Slot-Größe mit dem Pixeldichteverhältnis des Geräts, um die ideale Bildbreite zu bestimmen, und wählt dann das am nächsten verfügbare Bild aus `srcset` aus.

Ohne die Angabe von sizes verwendet der Browser die Standardgröße des Bildes, wie sie durch seine Abmessungen in Pixel spezifiziert ist. Dies ist möglicherweise nicht die beste Lösung für alle Geräte, insbesondere wenn das Bild auf verschiedenen Bildschirmgrößen oder in unterschiedlichen Kontexten angezeigt wird.

Bitte beachten Sie, dass sizes nur dann seine Wirkung hat, wenn Breitenbeschreiberdimensionen anstelle von Pixeldichtewerten mit srcset angegeben werden (200w anstelle von 2x zum Beispiel). Weitere Informationen zur Verwendung von `srcset` finden Sie in der [Responsive Images](/de/docs/Web/HTML/Guides/Responsive_images)-Dokumentation.

### Das type-Attribut

Das `type`-Attribut gibt einen [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) für die Ressourcen-URL(s) im `srcset`-Attribut des {{HTMLElement("source")}}-Elements an. Wenn der User-Agent den angegebenen Typ nicht unterstützt, wird das {{HTMLElement("source")}}-Element übersprungen.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließender Inhalt</a>, Ausdrücksinhalt, Eingebetteter Inhalt
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Null oder mehr {{HTMLElement("source")}}-Elemente, gefolgt von einem {{HTMLElement("img")}}-Element, optional gemischt mit skriptunterstützenden Elementen.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das startende als auch das schließende Tag sind zwingend erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebetteten Inhalt erlaubt.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
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

- {{HTMLElement("img")}}-Element
- {{HTMLElement("source")}}-Element
- Positionierung und Größenanpassung des Bildes innerhalb seines Rahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
- [Leitfaden für Bilddateitypen und -formate](/de/docs/Web/Media/Guides/Formats/Image_types)
- [CSS `prefers-color-scheme` Medieneigenschaft](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme)
