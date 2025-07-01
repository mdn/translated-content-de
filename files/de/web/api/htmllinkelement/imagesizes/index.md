---
title: "HTMLLinkElement: imageSizes-Eigenschaft"
short-title: imageSizes
slug: Web/API/HTMLLinkElement/imageSizes
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{APIRef("HTML DOM")}}

Die **`imageSizes`**-Eigenschaft des [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)-Interfaces gibt die Größe und Bedingungen für die vorab geladenen Bilder an, die durch die [`imageSrcset`](/de/docs/Web/API/HTMLLinkElement/imageSrcset)-Eigenschaft definiert sind. Sie spiegelt den Wert des `imagesizes`-Attributs des {{htmlelement("link")}}-Elements wider. Diese Eigenschaft kann den Wert des `imagesizes`-Attributs abrufen oder festlegen.

Das `imagesizes`-Attribut des `<link>`-Elements ist dasselbe wie das `sizes`-Attribut des {{htmlelement("img")}}-Elements: eine durch Kommas getrennte Liste von **Quellgrößen**. Jede Quellgröße enthält eine [Medienbedingung](/de/docs/Web/CSS/CSS_media_queries), die Größe des Bildes als {{cssxref("length")}}, oder das Schlüsselwort `auto`, welches zuerst kommen muss. Weitere Informationen zur Syntax des `sizes`-Attributs finden Sie unter [`<img>`](/de/docs/Web/HTML/Reference/Elements/img#sizes).

Die Attribute `imagesrcset` und `imagesizes` sind nur für `<link>`-Elemente relevant, die sowohl ein `rel`-Attribut auf `preload` als auch ein `as`-Attribut auf `image` gesetzt haben.

## Wert

Ein String, der aus durch Kommas getrennten Quellgrößen besteht, oder der leere String `""`, wenn kein Wert angegeben ist.

## Beispiele

Gegeben das folgende `<link>`-Element:

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

…können wir den Wert des `imagesizes`-Attributs mit der `imageSizes`-Eigenschaft abrufen und aktualisieren:

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
- [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries)
- [Verwendung der `srcset`- und `sizes`-Attribute](/de/docs/Web/HTML/Reference/Elements/img#using_the_srcset_and_sizes_attributes)
