---
title: HTML-Bildelement `<picture>`
short-title: <picture>
slug: Web/HTML/Reference/Elements/picture
l10n:
  sourceCommit: bcb7d4dde9f0a43664c64587d9d70b8835286eb7
---

Das **`<picture>`**-Element von [HTML](/de/docs/Web/HTML) enthält null oder mehr {{HTMLElement("source")}}-Elemente und ein {{HTMLElement("img")}}-Element, um alternative Versionen eines Bildes für unterschiedliche Anzeige- und Gerätesituationen anzubieten.

Der Browser prüft jedes untergeordnete `<source>`-Element und wählt die am besten passende Variante aus. Wird keine passende Variante gefunden oder unterstützt der Browser das `<picture>`-Element nicht, wird die URL aus dem [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)-Attribut des `<img>`-Elements verwendet. Das ausgewählte Bild wird anschließend im Bereich des `<img>`-Elements angezeigt.

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

## Attribute

Dieses Element unterstützt nur [globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

Um zu entscheiden, welche URL geladen wird, prüft der {{Glossary("user_agent", "User Agent")}} die Attribute [`srcset`](/de/docs/Web/HTML/Reference/Elements/source#srcset), [`media`](/de/docs/Web/HTML/Reference/Elements/source#media) und [`type`](/de/docs/Web/HTML/Reference/Elements/source#type) jedes `<source>`-Elements. So wählt er ein kompatibles Bild aus, das möglichst gut zum aktuellen Layout und zu den Fähigkeiten des Anzeigegeräts passt.

Das `<img>`-Element erfüllt zwei Zwecke:

1. Es beschreibt die Größe und weitere Attribute des Bildes sowie seine Darstellung.
2. Es dient als Ersatz, falls keines der angebotenen `<source>`-Elemente ein verwendbares Bild bereitstellen kann.

Häufige Anwendungsfälle für `<picture>`:

- **Art Direction:** Bilder für unterschiedliche `media`-Bedingungen zuschneiden oder verändern, beispielsweise um auf kleineren Displays eine einfachere Version eines detailreichen Bildes zu laden.
- **Alternative Bildformate anbieten**, falls bestimmte Formate nicht unterstützt werden.

  > [!NOTE]
  > Neuere Formate wie [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) oder [WEBP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) bieten beispielsweise viele Vorteile, werden aber möglicherweise nicht vom Browser unterstützt. Eine Liste unterstützter Bildformate finden Sie im [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types).

- **Bandbreite sparen und das Laden der Seite beschleunigen**, indem das für das Display der betrachtenden Person am besten geeignete Bild geladen wird.

Wenn Sie für High-DPI-Displays (Retina) Versionen eines Bildes mit höherer Pixeldichte bereitstellen möchten, verwenden Sie stattdessen [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) auf dem `<img>`-Element. So können Browser in Datensparmodi Versionen mit geringerer Pixeldichte auswählen, und Sie müssen keine ausdrücklichen `media`-Bedingungen angeben.

Mit der Eigenschaft {{cssxref("object-position")}} können Sie die Position des Bildes innerhalb des Elementrahmens anpassen. Mit {{cssxref("object-fit")}} steuern Sie, wie die Größe des Bildes an den Rahmen angepasst wird.

> [!NOTE]
> Verwenden Sie diese Eigenschaften auf dem untergeordneten `<img>`-Element, **nicht** auf dem `<picture>`-Element.

## Beispiele

Diese Beispiele zeigen, wie verschiedene Attribute des {{HTMLElement("source")}}-Elements die Bildauswahl innerhalb von `<picture>` beeinflussen.

### Das media-Attribut

Das `media`-Attribut gibt eine Medienbedingung an (ähnlich einer Media Query), die der User Agent für jedes {{HTMLElement("source")}}-Element auswertet.

Ergibt die Medienbedingung eines {{HTMLElement("source")}}-Elements `false`, überspringt der Browser dieses Element und prüft das nächste Element innerhalb von `<picture>`.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(width >= 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN" />
</picture>
```

Mit dem Medienmerkmal {{cssxref("@media/prefers-color-scheme")}} können Sie unterschiedliche Bilddateien für helle und dunkle Designs verwenden:

```html
<picture>
  <source srcset="logo-dark.png" media="(prefers-color-scheme: dark)" />
  <source srcset="logo-light.png" media="(prefers-color-scheme: light)" />
  <img src="logo-light.png" alt="Product logo" />
</picture>
```

### Das srcset-Attribut

Das Attribut [srcset](/de/docs/Web/HTML/Reference/Elements/source#srcset) bietet eine Liste möglicher Bilder an, aus denen je nach Größe oder Pixeldichte des Displays ausgewählt wird.

Es besteht aus einer durch Kommas getrennten Liste von Bildangaben. Jede Bildangabe enthält eine Bild-URL und _entweder_:

- einen _Breiten-Deskriptor_, gefolgt von `w` (beispielsweise `300w`);
  _ODER_
- einen _Pixeldichte-Deskriptor_, gefolgt von `x` (beispielsweise `2x`), um ein hochauflösendes Bild für High-DPI-Bildschirme bereitzustellen.

Beachten Sie dabei:

- Breiten- und Pixeldichte-Deskriptoren sollten nicht gemeinsam verwendet werden.
- Fehlt ein Pixeldichte-Deskriptor, wird 1x angenommen.
- Doppelte Deskriptorwerte sind nicht zulässig (2x und 2x, 100w und 100w).

Das folgende Beispiel zeigt, wie das `srcset`-Attribut mit dem `<source>`-Element verwendet wird, um ein Bild mit hoher Pixeldichte und eines mit Standardauflösung anzugeben:

```html
<picture>
  <source srcset="logo.png, logo-1.5x.png 1.5x" />
  <img src="logo.png" alt="MDN Web Docs logo" height="320" width="320" />
</picture>
```

Das `srcset`-Attribut kann auch auf dem `<img>`-Element verwendet werden, ohne dass ein `<picture>`-Element erforderlich ist. Das folgende Beispiel zeigt, wie Sie mit dem `srcset`-Attribut Bilder mit Standardauflösung beziehungsweise hoher Pixeldichte angeben:

```html
<img
  srcset="logo.png, logo-2x.png 2x"
  src="logo.png"
  height="320"
  width="320"
  alt="MDN Web Docs logo" />
```

### Das sizes-Attribut

Mit dem Attribut [`sizes`](/de/docs/Web/HTML/Reference/Elements/source#sizes) des `<source>`-Elements können Sie mehrere Paare aus Medienbedingung und Längenangabe festlegen und für jede Bedingung die Anzeigegröße des Bildes angeben. Dies hilft dem Browser, aus dem `srcset`-Attribut, das Bilder mit ihren {{Glossary("Intrinsic_Size", "intrinsischen")}} Breiten auflistet, das am besten geeignete Bild auszuwählen.

Der Browser wertet die Medienbedingungen im `sizes`-Attribut aus, bevor er Bilder herunterlädt. Weitere Informationen finden Sie in der Beschreibung des `sizes`-Attributs der Elemente [`<img>`](/de/docs/Web/HTML/Reference/Elements/img#sizes) und [`<source>`](/de/docs/Web/HTML/Reference/Elements/source#sizes).

Beispiel:

```html
<picture>
  <source
    srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
    sizes="(max-width: 600px) 400px, 800px"
    type="image/jpeg" />
  <img src="fallback.jpg" alt="Example image" />
</picture>
```

In diesem Beispiel gilt:

- Ist der Viewport höchstens 600px breit, beträgt die Anzeigegröße 400px; andernfalls beträgt sie 800px.
- Der Browser multipliziert die Anzeigegröße mit dem Gerätepixelverhältnis, um die ideale Bildbreite zu ermitteln. Anschließend wählt er aus `srcset` das Bild mit der nächstliegenden Breite aus.

Ohne `sizes` verwendet der Browser die Standardgröße des Bildes, die sich aus seinen Abmessungen in Pixeln ergibt. Das ist möglicherweise nicht für alle Geräte optimal, insbesondere wenn das Bild auf unterschiedlich großen Bildschirmen oder in verschiedenen Kontexten angezeigt wird.

Beachten Sie, dass `sizes` nur dann wirksam ist, wenn `srcset` Breiten-Deskriptoren statt Pixeldichtewerten enthält (beispielsweise 200w statt 2x).
Weitere Informationen zur Verwendung von `srcset` finden Sie in der Dokumentation zu [responsiven Bildern](/de/docs/Web/HTML/Guides/Responsive_images).

### Das type-Attribut

Das `type`-Attribut gibt einen [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) für die Ressourcen-URLs im `srcset`-Attribut des {{HTMLElement("source")}}-Elements an. Unterstützt der User Agent den angegebenen Typ nicht, wird das {{HTMLElement("source")}}-Element übersprungen.

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
        >, Textinhalt, eingebetteter Inhalt
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        Null oder mehr {{HTMLElement("source")}}-Elemente, gefolgt von einem
        {{HTMLElement("img")}}-Element; dazwischen sind optional
        skriptunterstützende Elemente zulässig.
      </td>
    </tr>
    <tr>
      <th scope="row">Weglassen von Tags</th>
      <td>Keines; sowohl der Start- als auch der End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Elternelemente</th>
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
      <td>Keine <code>role</code> zulässig</td>
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
- Medienmerkmal {{cssxref("@media/prefers-color-scheme")}}
