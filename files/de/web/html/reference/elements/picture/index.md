---
title: "`<picture>` HTML picture-Element"
short-title: <picture>
slug: Web/HTML/Reference/Elements/picture
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<picture>`** [HTML](/de/docs/Web/HTML)-Element enthält null oder mehr {{HTMLElement("source")}}-Elemente und ein {{HTMLElement("img")}}-Element, um alternative Versionen eines Bildes für unterschiedliche Anzeige- bzw. Geräteszenarien anzubieten.

Der Browser berücksichtigt jedes Kind-`<source>`-Element und wählt den am besten passenden aus. Wenn keine Übereinstimmungen gefunden werden oder der Browser das `<picture>`-Element nicht unterstützt, wird die URL des [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)-Attributs des `<img>`-Elements ausgewählt. Das ausgewählte Bild wird dann in dem vom `<img>`-Element belegten Raum präsentiert.

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

Um zu entscheiden, welche URL geladen werden soll, untersucht der {{Glossary("user_agent", "User Agent")}} die [`srcset`](/de/docs/Web/HTML/Reference/Elements/source#srcset)-, [`media`](/de/docs/Web/HTML/Reference/Elements/source#media)- und [`type`](/de/docs/Web/HTML/Reference/Elements/source#type)-Attribute jeder `<source>`, um ein kompatibles Bild auszuwählen, das am besten zum aktuellen Layout und den Fähigkeiten des Anzeigegeräts passt.

Das `<img>`-Element erfüllt zwei Zwecke:

1. Es beschreibt die Größe und andere Attribute des Bildes und seiner Darstellung.
2. Es bietet einen Rückfall, falls keines der angebotenen `<source>`-Elemente ein brauchbares Bild liefern kann.

Häufige Anwendungsfälle für `<picture>`:

- **Art Direction.** Zuschneiden oder Ändern von Bildern für unterschiedliche `media`-Bedingungen (z. B. das Laden einer einfacheren Version eines Bildes, das zu viele Details enthält, auf kleineren Anzeigen).
- **Anbieten alternativer Bildformate**, für Fälle, in denen bestimmte Formate nicht unterstützt werden.

  > [!NOTE]
  > Zum Beispiel haben neuere Formate wie [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) oder [WEBP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) viele Vorteile, sind aber möglicherweise nicht vom Browser unterstützt. Eine Liste unterstützter Bildformate finden Sie in: [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types).

- **Bandbreite sparen und Zeiten zum Laden der Seite beschleunigen** durch das Laden des am besten geeigneten Bildes für das Anzeige des Betrachters.

Wenn höhere Dichte-Versionen eines Bildes für hochauflösende (Retina-) Anzeigen bereitgestellt werden, verwenden Sie `srcset` auf dem `<img>`-Element anstelle. Dies ermöglicht es Browsern, niedrigere Dichte-Versionen im Datensparmodus zu wählen, und Sie müssen keine expliziten `media`-Bedingungen schreiben.

## Attribute

Dieses Element beinhaltet nur [globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Anwendungshinweise

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um die Positionierung des Bildes innerhalb des Rahmens des Elements anzupassen, und die {{cssxref("object-fit")}}-Eigenschaft, um zu steuern, wie das Bild innerhalb des Rahmens skaliert wird.

> [!NOTE]
> Verwenden Sie diese Eigenschaften auf dem Kind-`<img>`-Element, **nicht** auf dem `<picture>`-Element.

## Beispiele

Diese Beispiele zeigen, wie verschiedene Attribute des {{HTMLElement("source")}}-Elements die Auswahl des Bildes innerhalb von `<picture>` beeinflussen.

### Das media-Attribut

Das `media`-Attribut gibt eine Medienbedingung an (ähnlich einer Media-Query), die der User Agent für jedes {{HTMLElement("source")}}-Element auswertet.

Wenn die Medienbedingung des {{HTMLElement("source")}} auf `false` ausgewertet wird, überspringt der Browser sie und wertet das nächste Element innerhalb von `<picture>` aus.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(width >= 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN" />
</picture>
```

Sie können Bildressourcen für helle und dunkle Themen mit der {{cssxref("@media/prefers-color-scheme")}}-Medieneigenschaft austauschen:

```html
<picture>
  <source srcset="logo-dark.png" media="(prefers-color-scheme: dark)" />
  <source srcset="logo-light.png" media="(prefers-color-scheme: light)" />
  <img src="logo-light.png" alt="Product logo" />
</picture>
```

### Das srcset-Attribut

Das [srcset](/de/docs/Web/HTML/Reference/Elements/source#srcset)-Attribut wird verwendet, um eine Liste möglicher Bilder basierend auf der Größe oder Pixeldichte des Displays anzubieten.

Es besteht aus einer durch Kommas getrennten Liste von Bildbeschreibungen. Jede Bildbeschreibung besteht aus einer URL des Bildes und _entweder_:

- einem _Breitenbeschreiber_, gefolgt von einem `w` (wie `300w`);
  _ODER_
- einem _Pixeldichtebeschreiber_, gefolgt von einem `x` (wie `2x`) für ein hochauflösendes Bild für hochauflösende Bildschirme.

Beachten Sie:

- Breiten- und Pixeldichtebeschreiber sollten nicht zusammen verwendet werden
- Ein fehlender Pixeldichtebeschreiber impliziert 1x
- Doppelte Beschreibungswerte sind nicht erlaubt (2x & 2x, 100w & 100w)

Das folgende Beispiel illustriert die Verwendung des `srcset`-Attributs mit dem `<source>`-Element, um ein Bild mit hoher Dichte und normaler Auflösung zu spezifizieren:

```html
<picture>
  <source srcset="logo.png, logo-1.5x.png 1.5x" />
  <img src="logo.png" alt="MDN Web Docs logo" height="320" width="320" />
</picture>
```

Das `srcset`-Attribut kann auch auf dem `<img>`-Element verwendet werden, ohne dass das `<picture>`-Element notwendig ist. Das folgende Beispiel zeigt, wie das `srcset`-Attribut verwendet wird, um Bilder mit normaler Auflösung und hoher Dichte zu spezifizieren:

```html
<img
  srcset="logo.png, logo-2x.png 2x"
  src="logo.png"
  height="320"
  width="320"
  alt="MDN Web Docs logo" />
```

### Das sizes-Attribut

Das [`sizes`](/de/docs/Web/HTML/Reference/Elements/source#sizes)-Attribut des `<source>`-Elements erlaubt Ihnen, ein Set von Medienbedingung-Längenpaaren zu spezifizieren und die Bildanzeigegröße für jede Bedingung anzugeben. Dadurch kann der Browser das am besten geeignete Bild aus dem `srcset`-Attribut auswählen, welches Bilder mit ihren {{Glossary("Intrinsic_Size", "intrinsischen")}} Breiten auflistet.

Der Browser wertet die Medienbedingungen im sizes-Attribut aus, bevor er Bilder herunterlädt. Weitere Informationen finden Sie im sizes-Attribut der [`<img>`](/de/docs/Web/HTML/Reference/Elements/img#sizes)- und [`<source>`](/de/docs/Web/HTML/Reference/Elements/source#sizes)-Elemente.

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

- Wenn die Ansicht 600px breit oder weniger ist, beträgt die Slotgröße 400px; ansonsten 800px.
- Der Browser multipliziert die Slotgröße mit dem Gerätpixverhältnis, um die ideale Bildbreite zu bestimmen, und wählt dann das am nächsten verfügbare Bild aus `srcset`.

Ohne sizes wird vom Browser die Standardgröße des Bildes verwendet, wie sie durch seine Abmessungen in Pixeln angegeben ist. Dies ist möglicherweise nicht die beste Lösung für alle Geräte, insbesondere wenn das Bild auf unterschiedlichen Bildschirmgrößen oder in unterschiedlichen Kontexten angezeigt wird.

Bitte beachten Sie, dass sizes nur dann Wirkung zeigt, wenn Breitenleistungsbeschreiber mit srcset anstelle von Pixelverhältniswerten bereitgestellt werden (200w anstelle von 2x zum Beispiel).
Weitere Informationen zur Verwendung von `srcset` finden Sie in der [Anleitung für Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images).

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
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Null oder mehr {{HTMLElement("source")}}-Elemente, gefolgt von einem
        {{HTMLElement("img")}}-Element, optional vermischt mit
        script-unterstützenden Elementen.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
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
- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types)
- {{cssxref("@media/prefers-color-scheme")}}-Medieneigenschaft
