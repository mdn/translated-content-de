---
title: "HTMLAnchorElement: hreflang-Eigenschaft"
short-title: hreflang
slug: Web/API/HTMLAnchorElement/hreflang
l10n:
  sourceCommit: 5948500efb7d63d514966013adc8ed925ce28f69
---

{{ApiRef("HTML DOM")}}

Die **`hreflang`**-Eigenschaft des [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Interfaces ist ein String, der die Sprache der verlinkten Ressource angibt.

Sie spiegelt das `hreflang`-Attribut des {{HTMLElement("a")}}-Elements wider und ist ein leerer String (`""`), wenn es kein `hreflang`-Attribut gibt.

Webbrowser und Suchmaschinen können diese Information verwenden, um die Sprache des verlinkten Inhalts besser zu verstehen, sind aber nicht verpflichtet, dieser zu folgen. Der für das `hreflang`-Attribut angegebene Wert entspricht dem im {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} definierten Format. Andernfalls wird er ignoriert.

Webbrowser verlassen sich nach dem Abrufen der verlinkten Ressource nicht ausschließlich auf das `hreflang`-Attribut. Stattdessen verwenden sie Sprachinformationen, die direkt mit der Ressource verknüpft sind (z. B. durch HTTP-Header), um die Sprache zu bestimmen.

## Wert

Ein String, der ein Sprach-Tag enthält, oder der leere String (`""`), wenn es kein `hreflang`-Attribut gibt.

## Beispiel

```html
<a id="exampleLink" href="https://example.com" hreflang="en-IN">Example Link</a>
<p class="hreflang"></p>
```

```css
#exampleLink {
  font-size: 1.5rem;
}
```

```js
const anchorElement = document.getElementById("exampleLink");
const pTag = document.querySelector(".hreflang");
console.log(anchorElement.hreflang); // Outputs: "en-IN"
pTag.textContent = anchorElement.hreflang;
```

## Ergebnis

{{EmbedLiveSample("Example",100,100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLLinkElement.hreflang`](/de/docs/Web/API/HTMLLinkElement/hreflang)-Eigenschaft
