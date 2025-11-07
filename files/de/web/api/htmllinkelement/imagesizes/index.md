---
title: "HTMLLinkElement: imageSizes-Eigenschaft"
short-title: imageSizes
slug: Web/API/HTMLLinkElement/imageSizes
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("HTML DOM")}}

Die **`imageSizes`**-Eigenschaft des [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)-Interfaces gibt die Größe und Bedingungen für die vorgeladenen Bilder an, die durch die [`imageSrcset`](/de/docs/Web/API/HTMLLinkElement/imageSrcset)-Eigenschaft definiert sind. Sie spiegelt den Wert des `imagesizes`-Attributs des {{htmlelement("link")}}-Elements wider. Diese Eigenschaft kann den Wert des `imagesizes`-Attributs abrufen oder setzen.

Das `imagesizes`-Attribut des `<link>`-Elements ist dasselbe wie das `sizes`-Attribut des {{htmlelement("img")}}-Elements: eine durch Kommas getrennte Liste von **Quellgrößen**. Jede Quellgröße beinhaltet eine [Medienbedingung](/de/docs/Web/CSS/Guides/Media_queries), die Größe des Bildes als {{cssxref("length")}} oder das Schlüsselwort `auto`, das als erstes kommen muss. Für weitere Informationen zur Syntax des `sizes`-Attributs siehe [`<img>`](/de/docs/Web/HTML/Reference/Elements/img#sizes).

Die `imagesrcset`- und `imagesizes`-Attribute sind nur bei `<link>`-Elementen relevant, die sowohl ein `rel`-Attribut auf `preload` gesetzt als auch das `as`-Attribut auf `image` gesetzt haben.

## Wert

Ein String, der aus kommagetrennten Quellgrößen besteht, oder der leere String `""`, wenn nicht angegeben.

## Beispiele

Gegeben sei das folgende `<link>`-Element:

```html
<link
  rel="preload"
  as="image"
  imagesrcset="narrow.png, medium.png 600w, wide.png 1200w"
  imagesizes="(width < 400px) 200px, (400px <= width < 600px) 75vw, 50vw" />
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

…kann man den Wert des `imagesizes`-Attributs mit der `imageSizes`-Eigenschaft abrufen und aktualisieren:

```js
const link = document.querySelector("link");
log(`Original: ${link.imageSizes}`);

// Change the value
link.imageSizes = "50vw";
log(`Updated: ${link.imageSizes}`);
```

{{EmbedLiveSample('Examples',"","80")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLLinkElement.imageSrcset`](/de/docs/Web/API/HTMLLinkElement/imageSrcset)
- [`HTMLImageElement.sizes`](/de/docs/Web/API/HTMLImageElement/sizes)
- [Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries)
- [Verwendung der `srcset`- und `sizes`-Attribute](/de/docs/Web/HTML/Reference/Elements/img#using_the_srcset_and_sizes_attributes)
