---
title: "HTMLLinkElement: imageSrcset-Eigenschaft"
short-title: imageSrcset
slug: Web/API/HTMLLinkElement/imageSrcset
l10n:
  sourceCommit: 41bfea46fcb69700e456c890ce07c816e14d834c
---

{{APIRef("HTML DOM")}}

Die **`imageSrcset`**-Eigenschaft des [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)-Interfaces ist ein String, der einen oder mehrere durch Kommas getrennte **Image-Candidate-Strings** identifiziert. Diese Eigenschaft spiegelt den Wert des [`link`](/de/docs/Web/HTML/Reference/Elements/link#imagesrcset)-Elements im [`imagesrcset`]-Attribut wider. Diese Eigenschaft kann den Wert des `imagesrcset`-Attributs erhalten oder setzen.

Jeder Image-Candidate-String enthält eine Bild-URL und einen optionalen Breiten- und/oder Pixeldichte-Deskriptor, der die Bedingungen angibt, unter denen dieses Kandidatenbild verwendet werden soll.

```plain
"images/team-photo.jpg, images/team-photo-retina.jpg 2x, images/team-photo-large.jpg 1400w"
```

Für HTML-{{htmlelement("link")}}-Elemente mit [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) und [`as="image"`](/de/docs/Web/HTML/Reference/Elements/link#as) gesetzt, hat das `imagesrcset`-Attribut eine ähnliche Syntax und Semantik wie das `srcset`-Attribut des {{htmlelement("img")}}-Elements, welches angibt, die geeignete Ressource vorab zu laden, die durch ein `<img>`-Element mit entsprechenden Werten für seine `srcset`- und `sizes`-Attribute verwendet wird.

Wenn die `imageSrcset`-Eigenschaft Breiten-Deskriptoren enthält, muss die [`imageSizes`](/de/docs/Web/API/HTMLLinkElement/imageSizes)-Eigenschaft nicht null sein, oder der `imageSrcset`-Wert wird ignoriert.

## Wert

Ein String, der aus einer durch Kommas getrennten Liste von einem oder mehreren Image-Candidate-Strings besteht, oder der leere String `""`, wenn nicht angegeben.

## Beispiele

Angenommen, das folgende `<link>`-Element:

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

…können wir den Wert des `imagesrcset`-Attributs abrufen und aktualisieren, indem wir die `imageSrcset`-Eigenschaft verwenden:

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
