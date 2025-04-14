---
title: HTMLLinkElement:imageSrcset-Eigenschaft
short-title: imageSrcset
slug: Web/API/HTMLLinkElement/imagesrcset
l10n:
  sourceCommit: 5b48f3a3b093eb18bc73ad89767899d17bf20d9c
---

{{APIRef("HTML DOM")}}

Die **`imageSrcset`**-Eigenschaft des [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)-Interfaces ist ein String, der eine oder mehrere durch Kommas getrennte **Bildkandidaten-Strings** identifiziert. Diese Eigenschaft spiegelt den Wert des [`imagesrcset`](/de/docs/Web/HTML/Reference/Elements/link#imagesrcset)-Attributs des {{htmlelement("link")}}-Elements wider. Diese Eigenschaft kann den `imagesrcset`-Attributwert abrufen oder setzen.

Jeder Bildkandidaten-String enthält eine Bild-URL und einen optionalen Breiten- und/oder Pixeldichte-Deskriptor, der die Bedingungen angibt, unter denen dieses Kandidatenbild verwendet werden sollte.

```plain
"images/team-photo.jpg, images/team-photo-retina.jpg 2x, images/team-photo-large.jpg 1400w"
```

Für HTML {{htmlelement("link")}}-Elemente mit [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) und [`as="image"`](/de/docs/Web/HTML/Reference/Elements/link#as) eingestellt, hat das `imagesrcset`-Attribut ähnliche Syntax und Semantik wie das [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)-Attribut des {{htmlelement("img")}}-Elements, das anzeigt, dass die passende Ressource vorab geladen werden soll, die von einem `<img>`-Element mit entsprechenden Werten für seine `srcset`- und `sizes`-Attribute verwendet wird.

Wenn die `imageSrcset`-Eigenschaft Breiten-Deskriptoren enthält, muss die [`imageSizes`](/de/docs/Web/API/HTMLLinkElement/imageSizes)-Eigenschaft nicht null sein, andernfalls wird der `imageSrcset`-Wert ignoriert.

## Wert

Ein String, der aus einer durch Kommas getrennten Liste von einem oder mehreren Bildkandidaten-Strings besteht, oder der leere String `""`, falls nicht angegeben.

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

…wir können den `imagesrcset`-Attributwert abrufen und aktualisieren, indem wir die `imageSrcset`-Eigenschaft verwenden:

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
- [Speculative loading](/de/docs/Web/Performance/Guides/Speculative_loading#link_relpreload)
- [Responsive images](/de/docs/Web/HTML/Guides/Responsive_images)
