---
title: "<picture>: Das Picture-Element"
slug: Web/HTML/Reference/Elements/picture
l10n:
  sourceCommit: 34e9a5e1cadf133bfb8f12843fc0b76d0453027b
---

Das **`<picture>`** [HTML](/de/docs/Web/HTML) Element enthält null oder mehr {{HTMLElement("source")}} Elemente und ein {{HTMLElement("img")}} Element, um alternative Versionen eines Bildes für verschiedene Anzeige-/Geräteszenarien anzubieten.

Der Browser wird jedes `<source>`-Element im Kindbereich berücksichtigen und die beste Übereinstimmung unter ihnen wählen. Wenn keine Übereinstimmung gefunden wird oder der Browser das `<picture>`-Element nicht unterstützt, wird die URL des [`src`](/de/docs/Web/HTML/Reference/Elements/img#src) Attributs des `<img>`-Elements ausgewählt. Das ausgewählte Bild wird dann im vom `<img>`-Element belegten Raum präsentiert.

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

Um zu entscheiden, welche URL geladen wird, untersucht der {{Glossary("user_agent", "User Agent")}} die `srcset`, `media` und `type` Attribute jedes `<source>`-Elements, um ein kompatibles Bild auszuwählen, das am besten zum aktuellen Layout und zu den Fähigkeiten des Anzeigegeräts passt.

Das `<img>`-Element hat zwei Zwecke:

1. Es beschreibt die Größe und andere Attribute des Bildes und dessen Präsentation.
2. Es bietet eine Rückfallebene, falls keines der angebotenen `<source>`-Elemente ein nutzbares Bild bereitstellen kann.

Häufige Anwendungsfälle für `<picture>`:

- **Art-Direction.** Zuschneiden oder Modifizieren von Bildern für verschiedene `media`-Bedingungen (z. B. das Laden einer einfacheren Version eines Bildes, das zu viele Details auf kleinen Anzeigen hat).
- **Alternative Bildformate anbieten**, für Fälle, in denen bestimmte Formate nicht unterstützt werden.

  > [!NOTE]
  > Beispielsweise haben neuere Formate wie [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) oder [WEBP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) viele Vorteile, werden aber möglicherweise nicht vom Browser unterstützt. Eine Liste unterstützter Bildformate finden Sie im [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types).

- **Sparen von Bandbreite und Beschleunigung der Seitenladezeiten**, indem das am besten geeignete Bild für das Display des Betrachters geladen wird.

Wenn Sie höher auflösende Versionen eines Bildes für hochauflösende (Retina) Displays bereitstellen möchten, verwenden Sie [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) auf dem `<img>`-Element. Dadurch können Browser niedrigere Auflösungen in daten-sparenden Modi wählen, und Sie müssen keine expliziten `media`-Bedingungen schreiben.

## Attribute

Dieses Element enthält nur [globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

Sie können die CSS-Eigenschaft {{cssxref("object-position")}} verwenden, um die Positionierung des Bildes innerhalb des Rahmens des Elements anzupassen und die Eigenschaft {{cssxref("object-fit")}}, um zu steuern, wie das Bild in den Rahmen passt.

> [!NOTE]
> Verwenden Sie diese Eigenschaften auf dem `<img>`-Kindelement, **nicht** auf dem `<picture>`-Element.

## Beispiele

Diese Beispiele zeigen, wie verschiedene Attribute des {{HTMLElement("source")}} Elements die Auswahl des Bildes innerhalb `<picture>` ändern.

### Das media Attribut

Das `media` Attribut spezifiziert eine Medienbedingung (ähnlich einer Media Query), die der User Agent für jedes {{HTMLElement("source")}} Element auswerten wird.

Wenn die Medienbedingung des {{HTMLElement("source")}} auszuwerten `false` ergibt, überspringt der Browser dieses und wertet das nächste Element innerhalb `<picture>` aus.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(width >= 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN" />
</picture>
```

### Das srcset Attribut

Das [srcset](/de/docs/Web/HTML/Reference/Elements/source#srcset) Attribut wird verwendet, um eine Liste möglicher Bilder basierend auf der Größe oder Pixeldichte des Displays anzubieten.

Es besteht aus einer durch Kommas getrennten Liste von Bildbeschreibungen. Jede Bildbeschreibung besteht aus einer URL des Bildes und _entweder_:

- einem _Breitenbeschreiber_, gefolgt von einem `w` (z.B. `300w`);
  _ODER_
- einem _Pixeldichte-Beschreiber_, gefolgt von einem `x` (z.B. `2x`), um ein hochauflösendes Bild für hochauflösende Bildschirme bereitzustellen.

Stellen Sie sicher, dass:

- Breiten- und Pixeldichte-Beschreiber nicht zusammen verwendet werden sollten
- Ein fehlender Pixeldichte-Beschreiber impliziert 1x
- Doppelte Beschreibungswerte sind nicht erlaubt (2x & 2x, 100w & 100w)

Das folgende Beispiel zeigt die Verwendung des `srcset` Attributs mit dem `<source>`-Element, um ein hochauflösendes und ein Standardauflösungsbild anzugeben:

```html
<picture>
  <source srcset="logo.png, logo-1.5x.png 1.5x" />
  <img src="logo.png" alt="MDN Web Docs logo" height="320" width="320" />
</picture>
```

Das `srcset` Attribut kann auch auf dem `<img>` Element ohne das `<picture>` Element verwendet werden. Das folgende Beispiel zeigt, wie das `srcset` Attribut verwendet wird, um standardauflösende und hochauflösende Bilder anzugeben:

```html
<img
  srcset="logo.png, logo-2x.png 2x"
  src="logo.png"
  height="320"
  width="320"
  alt="MDN Web Docs logo" />
```

### Das sizes Attribut

Das [`sizes`](/de/docs/Web/HTML/Reference/Elements/source#sizes) Attribut des `<source>` Elements erlaubt Ihnen, eine Reihe von Medienbedingungs-Längenpaaren anzugeben und die Bildanzeigegröße für jede Bedingung zu kennzeichnen. Dies hilft dem Browser, das am besten geeignete Bild aus dem `srcset` Attribut zu wählen, das Bilder mit ihren {{Glossary("Intrinsic_Size", "intrinsischen")}} Breiten auflistet.

Der Browser wertet die Medienbedingungen im sizes Attribut aus, bevor er Bilder herunterlädt. Siehe das sizes Attribut der [`<img>`](/de/docs/Web/HTML/Reference/Elements/img#sizes) und [`<source>`](/de/docs/Web/HTML/Reference/Elements/source#sizes) Elemente für weitere Informationen.

Beispielsweise:

```html
<picture>
  <source
    srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
    sizes="(max-width: 600px) 400px, 600px"
    type="image/jpeg" />
  <img src="fallback.jpg" alt="Example image" />
</picture>
```

In diesem Beispiel:

- Wenn das Ansichtsfenster 600px breit oder weniger ist, beträgt die Slotgröße 400px; andernfalls beträgt sie 800px.
- Der Browser multipliziert die Slotgröße mit dem Gerät-Pixel-Verhältnis, um die ideale Bildbreite zu bestimmen, und wählt dann das am nächsten liegende verfügbare Bild aus `srcset`.

Ohne Größen verwendet der Browser die Standardgröße des Bildes, wie es durch seine Abmessungen in Pixeln angegeben wird. Dies ist möglicherweise nicht die beste Wahl für alle Geräte, insbesondere wenn das Bild auf unterschiedlichen Bildschirmgrößen oder in unterschiedlichen Kontexten angezeigt wird.

Bitte beachten Sie, dass sizes nur dann seine Wirkung entfaltet, wenn Breitenbeschreiber mit srcset anstelle von Pixeldichtewerten bereitgestellt werden (z.B. 200w statt 2x).
Für weitere Informationen zur Verwendung von `srcset` siehe die [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images) Dokumentation.

### Das type Attribut

Das `type` Attribut gibt einen [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) für die Ressourcen-URL(s) im `srcset` Attribut des {{HTMLElement("source")}} Elements an. Wenn der User Agent den angegebenen Typ nicht unterstützt, wird das {{HTMLElement("source")}} Element übersprungen.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließendes Inhalt</a>, phrasing content, eingebetteter Inhalt
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Null oder mehr {{HTMLElement("source")}} Elemente, gefolgt von einem {{HTMLElement("img")}} Element, optional vermischt mit skriptunterstützenden Elementen.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebettete Inhalte erlaubt.</td>
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

- {{HTMLElement("img")}} Element
- {{HTMLElement("source")}} Element
- Positionierung und Anpassung des Bildes innerhalb seines Rahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types)
