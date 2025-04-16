---
title: "HTMLLinkElement: imageSizes-Eigenschaft"
short-title: imageSizes
slug: Web/API/HTMLLinkElement/imageSizes
l10n:
  sourceCommit: 41bfea46fcb69700e456c890ce07c816e14d834c
---

{{APIRef("HTML DOM")}}

Die **`imageSizes`**-Eigenschaft des [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement) Interface gibt die Größe und Bedingungen für die vorab geladenen Bilder an, die durch die [`imageSrcset`](/de/docs/Web/API/HTMLLinkElement/imageSrcset)-Eigenschaft definiert sind. Sie spiegelt den Wert des `imagesizes`-Attributs des {{htmlelement("link")}}-Elements wider. Diese Eigenschaft kann den Wert des `imagesizes`-Attributs abrufen oder festlegen.

Das `imagesizes`-Attribut des `<link>`-Elements ist dasselbe wie das `sizes`-Attribut des {{htmlelement("img")}}-Elements: eine durch Kommas getrennte Liste von **Quellgrößen**. Jede Quellgröße enthält eine [Medienbedingung](/de/docs/Web/CSS/CSS_media_queries), die Größe des Bildes als {{cssxref("length")}} oder das Schlüsselwort `auto`, das an erster Stelle stehen muss. Weitere Informationen zur Syntax des `sizes`-Attributs finden Sie unter [`<img>`](/de/docs/Web/HTML/Reference/Elements/img#sizes).

Die Attribute `imagesrcset` und `imagesizes` sind nur relevant für `<link>`-Elemente, die sowohl ein `rel`-Attribut mit dem Wert `preload` als auch ein `as`-Attribut mit dem Wert `image` haben.

## Wert

Ein aus durch Kommas getrennten Quellgrößen bestehender String, oder der leere String `""`, falls nicht angegeben.

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

… wir können den Wert des `imagesizes`-Attributs mit der `imageSizes`-Eigenschaft abrufen und aktualisieren:

```js
const link = document.querySelector("link");
log(`Original: ${link.imageSizes}`);

// Change the value
link.imageSizes = "50vw";
log(`Updated: ${link.imageSizes}`);
```

{{EmbedLiveSample('Examples', "", "80")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLLinkElement.imageSrcset`](/de/docs/Web/API/HTMLLinkElement/imageSrcset)
- [`HTMLImageElement.sizes`](/de/docs/Web/API/HTMLImageElement/sizes)
- [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries)
- [Verwendung der `srcset`- und `sizes`-Attribute](/de/docs/Web/HTML/Reference/Elements/img#using_the_srcset_and_sizes_attributes)
