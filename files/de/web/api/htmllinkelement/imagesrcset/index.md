---
title: "HTMLLinkElement: Eigenschaft imageSrcset"
short-title: imageSrcset
slug: Web/API/HTMLLinkElement/imageSrcset
l10n:
  sourceCommit: 8b77a013c518ef1b62534a8446a60732d582a24b
---

{{APIRef("HTML DOM")}}

Die Eigenschaft **`imageSrcset`** der Schnittstelle [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement) ist eine Zeichenfolge, die eine oder mehrere durch Kommas getrennte **Bildkandidaten-Zeichenfolgen** angibt. Diese Eigenschaft spiegelt den Wert des Attributs [`imagesrcset`](/de/docs/Web/HTML/Reference/Elements/link#imagesrcset) des Elements {{htmlelement("link")}} wider. Mit dieser Eigenschaft können Sie den Wert des Attributs `imagesrcset` abrufen oder festlegen.

Jede Bildkandidaten-Zeichenfolge enthält eine Bild-URL und optional einen Deskriptor für die Breite und/oder Pixeldichte. Diese Deskriptoren geben an, unter welchen Bedingungen das jeweilige Bild verwendet werden soll.

```plain
"images/team-photo.jpg, images/team-photo-retina.jpg 2x, images/team-photo-large.jpg 1400w"
```

Bei HTML-Elementen {{htmlelement("link")}}, für die [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) und [`as="image"`](/de/docs/Web/HTML/Reference/Elements/link#as) festgelegt sind, hat das Attribut `imagesrcset` eine ähnliche Syntax und Semantik wie das Attribut [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) des Elements {{htmlelement("img")}}. Es gibt an, welche Ressource für ein `<img>`-Element mit entsprechenden Werten für dessen Attribute `srcset` und `sizes` vorab geladen werden soll.

Wenn die Eigenschaft `imageSrcset` Breiten-Deskriptoren enthält, darf die Eigenschaft [`imageSizes`](/de/docs/Web/API/HTMLLinkElement/imageSizes) nicht `null` sein. Andernfalls wird der Wert von `imageSrcset` ignoriert.

## Wert

Eine Zeichenfolge mit einer durch Kommas getrennten Liste aus einer oder mehreren Bildkandidaten-Zeichenfolgen oder die leere Zeichenfolge `""`, wenn kein Wert angegeben ist.

## Beispiele

Gegeben sei das folgende `<link>`-Element:

```html
<link
  rel="preload"
  as="image"
  imagesizes="50vw"
  imagesrcset="bg-narrow.png, bg-wide.png 800w" />
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  padding: 0 0.25rem;
  font-size: 1.2em;
  line-height: 1.4;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

Mit der Eigenschaft `imageSrcset` können Sie auf den Wert des Attributs `imagesrcset` zugreifen und ihn ändern:

```js
const link = document.querySelector("link");
log(`Original: ${link.imageSrcset}`);

// add an image candidate string
link.imageSrcset += ", bg-huge.png 1200w";
log(`Updated: ${link.imageSrcset}`);
```

{{EmbedLiveSample('Examples',"","80")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLLinkElement.imageSizes`](/de/docs/Web/API/HTMLLinkElement/imageSizes)
- [`HTMLImageElement.srcset`](/de/docs/Web/API/HTMLImageElement/srcset)
- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading#link_relpreload)
- [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images)
