---
title: "<picture>: Das Picture-Element"
slug: Web/HTML/Reference/Elements/picture
l10n:
  sourceCommit: 7c28cd21b705e7b7664d53b4d7822469ea8e6e15
---

Das **`<picture>`**-Element [HTML](/de/docs/Web/HTML) enthält null oder mehr {{HTMLElement("source")}}-Elemente und ein {{HTMLElement("img")}}-Element, um alternative Versionen eines Bildes für unterschiedliche Anzeige-/Geräteszenarien anzubieten.

Der Browser wird jedes untergeordnete `<source>`-Element betrachten und die beste Übereinstimmung unter ihnen auswählen. Wenn keine Übereinstimmungen gefunden werden – oder der Browser das `<picture>`-Element nicht unterstützt –, wird die URL des `src`-Attributs des `<img>`-Elements ausgewählt. Das ausgewählte Bild wird dann in dem Bereich präsentiert, der vom `<img>`-Element eingenommen wird.

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

Um zu entscheiden, welche URL geladen werden soll, prüft der {{Glossary("user_agent", "User-Agent")}} die `srcset`-, `media`- und `type`-Attribute jedes `<source>`-Elements, um ein kompatibles Bild auszuwählen, das am besten zum aktuellen Layout und den Fähigkeiten des Anzeigegeräts passt.

Das `<img>`-Element erfüllt zwei Zwecke:

1. Es beschreibt die Größe und andere Attribute des Bildes und dessen Präsentation.
2. Es bietet eine Fallback-Option, falls keines der angebotenen `<source>`-Elemente ein verwendbares Bild bereitstellen kann.

Häufige Anwendungsfälle für `<picture>`:

- **Art-Direction.** Zuschneiden oder Anpassen von Bildern für unterschiedliche `media`-Bedingungen (zum Beispiel das Laden einer einfacheren Version eines Bildes mit zu vielen Details auf kleineren Displays).
- **Anbieten alternativer Bildformate** für Fälle, in denen bestimmte Formate nicht unterstützt werden.

  > [!NOTE]
  > Beispielsweise haben neuere Formate wie [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) oder [WEBP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) viele Vorteile, könnten jedoch vom Browser nicht unterstützt werden. Eine Liste der unterstützten Bildformate finden Sie im: [Leitfaden für Bilddateitypen und -formate](/de/docs/Web/Media/Guides/Formats/Image_types).

- **Bandbreite sparen und Seitenladezeiten beschleunigen** durch das Laden des geeignetsten Bildes für das Anzeigegerät des Betrachters.

Wenn Sie hochauflösende Versionen eines Bildes für hochauflösende (Retina) Displays bereitstellen, verwenden Sie `srcset` im `<img>`-Element. Dies ermöglicht es Browsern, in datensparenden Modi niedrigauflösende Versionen zu wählen, und Sie müssen keine expliziten `media`-Bedingungen schreiben.

## Attribute

Dieses Element enthält nur [globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

Sie können die Eigenschaft {{cssxref("object-position")}} verwenden, um die Positionierung des Bildes innerhalb des Rahmens des Elements anzupassen, und die Eigenschaft {{cssxref("object-fit")}}, um zu steuern, wie das Bild innerhalb des Rahmens skaliert wird.

> [!NOTE]
> Verwenden Sie diese Eigenschaften am untergeordneten `<img>`-Element, **nicht** am `<picture>`-Element.

## Beispiele

Diese Beispiele zeigen, wie verschiedene Attribute des {{HTMLElement("source")}}-Elements die Auswahl des Bildes innerhalb von `<picture>` verändern.

### Das media-Attribut

Das `media`-Attribut spezifiziert eine Medienbedingung (ähnlich einem Media-Query), die der User-Agent für jedes {{HTMLElement("source")}}-Element auswerten wird.

Wenn die Medienbedingung des {{HTMLElement("source")}} auf `false` ausgewertet wird, überspringt der Browser dieses Element und bewertet das nächste Element innerhalb von `<picture>`.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(width >= 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN" />
</picture>
```

Sie können Bildressourcen für helle und dunkle Designs mit der {{cssxref("@media/prefers-color-scheme")}}-Medienfunktion austauschen:

```html
<picture>
  <source srcset="logo-dark.png" media="(prefers-color-scheme: dark)" />
  <source srcset="logo-light.png" media="(prefers-color-scheme: light)" />
  <img src="logo-light.png" alt="Product logo" />
</picture>
```

### Das srcset-Attribut

Das [srcset](/de/docs/Web/HTML/Reference/Elements/source#srcset)-Attribut wird verwendet, um eine Liste möglicher Bilder basierend auf Größe oder Pixeldichte des Displays anzubieten.

Es besteht aus einer durch Kommas getrennten Liste von Bildbeschreibungen. Jede Bildbeschreibung besteht aus einer Bild-URL und _entweder_:

- einem _Breitenbeschreiber_, gefolgt von einem `w` (wie `300w`);
  _ODER_
- einem _Pixeldichtebeschreiber_, gefolgt von einem `x` (wie `2x`), um ein hochauflösendes Bild für hochauflösende Bildschirme bereitzustellen.

Beachten Sie, dass:

- Breiten- und Pixeldichtebeschreiber nicht zusammen verwendet werden sollten
- ein fehlender Pixeldichtebeschreiber 1x impliziert
- doppelte Beschreibungswerte nicht erlaubt sind (2x & 2x, 100w & 100w)

Das folgende Beispiel veranschaulicht die Verwendung des `srcset`-Attributs mit dem `<source>`-Element, um ein hochauflösendes und ein standardauflösendes Bild anzugeben:

```html
<picture>
  <source srcset="logo.png, logo-1.5x.png 1.5x" />
  <img src="logo.png" alt="MDN Web Docs logo" height="320" width="320" />
</picture>
```

Das `srcset`-Attribut kann auch ohne das `<picture>`-Element am `<img>`-Element verwendet werden. Das folgende Beispiel zeigt, wie das `srcset`-Attribut verwendet wird, um standard- und hochauflösende Bilder anzugeben:

```html
<img
  srcset="logo.png, logo-2x.png 2x"
  src="logo.png"
  height="320"
  width="320"
  alt="MDN Web Docs logo" />
```

### Das sizes-Attribut

Das [`sizes`](/de/docs/Web/HTML/Reference/Elements/source#sizes)-Attribut des `<source>`-Elements ermöglicht es Ihnen, ein Set von Paaren aus Medienbedingungen und Längen anzugeben und die Anzeigengröße des Bildes für jede Bedingung zu bestimmen. Dies hilft dem Browser, das geeignetste Bild aus dem `srcset`-Attribut auszuwählen, das Bilder mit ihren {{Glossary("Intrinsic_Size", "intrinsischen")}} Breiten auflistet.

Der Browser bewertet die Medienbedingungen im sizes-Attribut, bevor er irgendwelche Bilder lädt. Weitere Informationen finden Sie im sizes-Attribut der [`<img>`](/de/docs/Web/HTML/Reference/Elements/img#sizes) und [`<source>`](/de/docs/Web/HTML/Reference/Elements/source#sizes)-Elemente.

Beispielsweise:

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

- Wenn das Ansichtsfenster 600px breit oder schmaler ist, beträgt die Slot-Größe 400px; andernfalls 800px.
- Der Browser multipliziert die Slot-Größe mit dem Gerätepixelverhältnis, um die ideale Bildbreite zu ermitteln und wählt dann das am nächsten verfügbare Bild aus `srcset`.

Ohne sizes verwendet der Browser die Standardgröße des Bildes, wie durch seine Abmessungen in Pixeln angegeben. Dies ist möglicherweise nicht die beste Option für alle Geräte, besonders wenn das Bild auf verschiedenen Bildschirmgrößen oder in unterschiedlichen Kontexten angezeigt wird.

Bitte beachten Sie, dass sizes nur dann Auswirkungen hat, wenn mit srcset Breitenbeschreibungswerte anstelle von Pixeldichtewerten bereitgestellt werden (200w anstelle von 2x zum Beispiel).
Weitere Informationen zur Verwendung von `srcset` finden Sie in der [Responsive Images](/de/docs/Web/HTML/Guides/Responsive_images)-Dokumentation.

### Das type-Attribut

Das `type`-Attribut spezifiziert einen [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) für die Ressourcen-URL(s) im `srcset`-Attribut des {{HTMLElement("source")}}-Elements. Wenn der User-Agent den angegebenen Typ nicht unterstützt, wird das {{HTMLElement("source")}}-Element übersprungen.

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
          >Flussinhalt</a
        >, Phrasing-Inhalt, eingebetteter Inhalt
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        Null oder mehr {{HTMLElement("source")}}-Elemente, gefolgt von einem
        {{HTMLElement("img")}}-Element, optional vermischt mit skriptunterstützenden Elementen.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Anfangs- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>Jedes Element, das eingebetteten Inhalt erlaubt.</td>
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
- Positionierung und Größenanpassung des Bildes im Rahmen: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
- [Leitfaden für Bilddateitypen und -formate](/de/docs/Web/Media/Guides/Formats/Image_types)
- {{cssxref("@media/prefers-color-scheme")}} Medienfunktion
