---
title: HTMLLinkElement:imageSizes-Eigenschaft
short-title: imageSizes
slug: Web/API/HTMLLinkElement/imageSizes
l10n:
  sourceCommit: 181082d457dc196c519405a7f6cee83fa117f128
---

{{APIRef("HTML DOM")}}

Die **`imageSizes`**-Eigenschaft des [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)-Interfaces gibt die Größe und Bedingungen für die vorab geladenen Bilder an, die durch die [`imageSrcset`](/de/docs/Web/API/HTMLLinkElement/imagesrcset)-Eigenschaft definiert sind. Sie spiegelt den Wert des {{htmlelement("link")}}-Elements [`imagesizes`](/de/docs/Web/HTML/Reference/Elements/link#imagesizes)-Attributs wider. Diese Eigenschaft kann den Wert des `imagesizes`-Attributs abrufen oder festlegen.

Das `imagesizes`-Attribut des `<link>`-Elements entspricht dem `sizes`-Attribut des {{htmlelement("img")}}-Elements: eine durch Kommas getrennte Liste von **Quellgrößen**. Jede Quellgröße umfasst eine [Medienbedingung](/de/docs/Web/CSS/CSS_media_queries), die Größe des Bildes als {{cssxref("length")}}, oder das Schlüsselwort `auto`, das als erstes kommen muss. Weitere Informationen zur Syntax des `sizes`-Attributs finden Sie unter [`<img>`](/de/docs/Web/HTML/Reference/Elements/img#sizes).

Die `imagesrcset`- und `imagesizes`-Attribute sind nur relevant bei `<link>`-Elementen, die sowohl ein `rel`-Attribut mit dem Wert `preload` als auch das `as`-Attribut mit dem Wert `image` haben.

## Wert

Ein String, der aus durch Kommas getrennten Quellgrößen besteht, oder der leere String `""` wenn nicht spezifiziert.

## Beispiele

Angenommen, das folgende `<link>`-Element:

```html
<link
  rel="preload"
  as="image"
  imagesrcset="narrow.png, medium.png 600w, wide.png 1200w"
  imagesizes="(max-width: 400px) 200px, (width < 600px) 75vw, 50vw" />
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

…wir können den Wert des `imagesizes`-Attributs mit der `imageSizes`-Eigenschaft abrufen und aktualisieren:

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

- [`HTMLLinkElement.imageSrcset`](/de/docs/Web/API/HTMLLinkElement/imagesrcset)
- [`HTMLImageElement.sizes`](/de/docs/Web/API/HTMLImageElement/sizes)
- [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries)
- [Verwendung der `srcset`- und `sizes`-Attribute](/de/docs/Web/HTML/Reference/Elements/img#using_the_srcset_and_sizes_attributes)
