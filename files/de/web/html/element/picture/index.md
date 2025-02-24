---
title: "<picture>: Das Picture-Element"
slug: Web/HTML/Element/picture
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<picture>`** [HTML](/de/docs/Web/HTML)-Element enthält null oder mehr {{HTMLElement("source")}}-Elemente und ein {{HTMLElement("img")}}-Element, um alternative Versionen eines Bildes für verschiedene Anzeige- oder Geräteszenarien anzubieten.

Der Browser berücksichtigt jedes untergeordnete `<source>`-Element und wählt das am besten passende aus. Wenn keine Übereinstimmungen gefunden werden oder der Browser das `<picture>`-Element nicht unterstützt, wird die URL des [`src`](/de/docs/Web/HTML/Element/img#src)-Attributs des `<img>`-Elements ausgewählt. Das gewählte Bild wird dann im von dem `<img>`-Element belegten Raum angezeigt.

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

Um zu entscheiden, welche URL geladen werden soll, untersucht der {{Glossary("user_agent", "Benutzeragent")}} jedes `<source>`-Attribute [`srcset`](/de/docs/Web/HTML/Element/source#srcset), [`media`](/de/docs/Web/HTML/Element/source#media) und [`type`](/de/docs/Web/HTML/Element/source#type), um ein kompatibles Bild auszuwählen, das am besten mit dem aktuellen Layout und den Fähigkeiten des Anzeigegeräts übereinstimmt.

Das `<img>`-Element hat zwei Aufgaben:

1. Es beschreibt die Größe und andere Attribute des Bildes sowie dessen Präsentation.
2. Es bietet eine Rückfallebene, falls keines der angebotenen `<source>`-Elemente ein verwendbares Bild liefern kann.

Häufige Anwendungsfälle für `<picture>`:

- **Art Direction.** Zuschneiden oder Modifizieren von Bildern für verschiedene `media`-Bedingungen (zum Beispiel das Laden einer einfacheren Version eines Bildes, das zu viele Details für kleinere Anzeigen hat).
- **Anbieten alternativer Bildformate**, für den Fall, dass bestimmte Formate nicht unterstützt werden.

  > [!NOTE]
  > Zum Beispiel haben neuere Formate wie [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) oder [WEBP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) viele Vorteile, könnten aber vom Browser nicht unterstützt werden. Eine Liste der unterstützten Bildformate finden Sie in: [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types).

- **Sparen von Bandbreite und Beschleunigung der Ladezeiten** durch das Laden des geeignetsten Bildes für die Anzeige des Betrachters.

Wenn höhere Dichteversionen eines Bildes für hochauflösende (Retina-)Displays bereitgestellt werden sollen, verwenden Sie [`srcset`](/de/docs/Web/HTML/Element/img#srcset) auf dem `<img>`-Element. Dies ermöglicht es den Browsern, in datensparenden Modi Versionen mit niedrigerer Dichte zu verwenden, ohne explizite `media`-Bedingungen schreiben zu müssen.

## Attribute

Dieses Element enthält nur [globale Attribute](/de/docs/Web/HTML/Global_attributes).

## Nutzungshinweise

Sie können die Eigenschaft {{cssxref("object-position")}} verwenden, um die Positionierung des Bildes innerhalb des Rahmens des Elements anzupassen, und die Eigenschaft {{cssxref("object-fit")}}, um zu steuern, wie das Bild skaliert wird, um in den Rahmen zu passen.

> [!NOTE]
> Verwenden Sie diese Eigenschaften auf dem untergeordneten `<img>`-Element, **nicht** auf dem `<picture>`-Element.

## Beispiele

Diese Beispiele zeigen, wie verschiedene Attribute des {{HTMLElement("source")}}-Elements die Auswahl des Bildes im `<picture>` beeinflussen.

### Das media-Attribut

Das `media`-Attribut gibt eine Medienbedingung an (ähnlich einer Medienabfrage), die der Benutzeragent für jedes {{HTMLElement("source")}}-Element auswertet.

Wenn die Medienbedingung des {{HTMLElement("source")}} als `false` ausgewertet wird, überspringt der Browser es und wertet das nächste Element innerhalb von `<picture>` aus.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(min-width: 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN" />
</picture>
```

### Das srcset-Attribut

Das [srcset](/de/docs/Web/HTML/Element/source#srcset)-Attribut wird verwendet, um eine Liste möglicher Bilder basierend auf der Größe oder Pixeldichte der Anzeige anzubieten.

Es besteht aus einer durch Kommas getrennten Liste von Bildbeschreibungen. Jede Bildbeschreibung besteht aus einer URL des Bildes und entweder:

- einem _Breiten-Beschreiber_, gefolgt von einem `w` (wie `300w`);
  _ODER_
- einem _Pixeldichte-Beschreiber_, gefolgt von einem `x` (wie `2x`), um ein hochauflösendes Bild für hochauflösende Bildschirme zu liefern.

Bitte beachten Sie:

- Breiten- und Pixeldichte-Beschreiber sollten nicht zusammen verwendet werden
- ein fehlender Pixeldichte-Beschreiber bedeutet 1x
- doppelte Beschreibungswerte sind nicht erlaubt (2x & 2x, 100w & 100w)

Das folgende Beispiel veranschaulicht die Verwendung des `srcset`-Attributs mit dem `<source>`-Element, um ein Bild mit hoher Dichte und Standardauflösung anzugeben:

```html
<picture>
  <source srcset="logo.png, logo-1.5x.png 1.5x" />
  <img src="logo.png" alt="MDN Web Docs logo" height="320" width="320" />
</picture>
```

Das `srcset`-Attribut kann auch auf dem `<img>`-Element ohne das `<picture>`-Element verwendet werden. Das folgende Beispiel demonstriert, wie das `srcset`-Attribut verwendet wird, um Standardauflösung und hochauflösende Bilder anzugeben:

```html
<img
  srcset="logo.png, logo-2x.png 2x"
  src="logo.png"
  height="320"
  width="320"
  alt="MDN Web Docs logo" />
```

Das `sizes`-Attribut ist nicht zwingend erforderlich, wenn `srcset` verwendet wird, aber es wird empfohlen, es zu verwenden, um dem Browser zusätzliche Informationen bereitzustellen, damit er die beste Bildquelle auswählen kann.

Ohne `sizes` verwendet der Browser die Standardgröße des Bildes, wie durch seine Abmessungen in Pixeln angegeben. Dies ist möglicherweise nicht die beste Wahl für alle Geräte, besonders wenn das Bild auf unterschiedlichen Bildschirmgrößen oder in unterschiedlichen Kontexten angezeigt wird.

Bitte beachten Sie, dass `sizes` nur wirksam ist, wenn Breitenmaß-Beschreiber mit `srcset` statt Pixeldichte-Werten bereitgestellt werden (200w anstelle von 2x zum Beispiel).
Für weitere Informationen zur Verwendung von `srcset` siehe die [Dokumentation zu responsiven Bildern](/de/docs/Web/HTML/Responsive_images).

### Das type-Attribut

Das `type`-Attribut gibt einen [MIME-Typ](/de/docs/Web/HTTP/MIME_types) für die Ressourcen-URL(s) im `srcset`-Attribut des {{HTMLElement("source")}}-Elements an. Wenn der Benutzeragent den angegebenen Typ nicht unterstützt, wird das {{HTMLElement("source")}}-Element übersprungen.

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
        >, Formulierungsinhalt, eingebetteter Inhalt
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
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebetteten Inhalt erlaubt.</td>
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
- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types)
