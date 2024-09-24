---
title: "HTMLAnchorElement: hreflang-Eigenschaft"
short-title: hreflang
slug: Web/API/HTMLAnchorElement/hreflang
l10n:
  sourceCommit: 5948500efb7d63d514966013adc8ed925ce28f69
---

{{ApiRef("HTML DOM")}}

Die **`hreflang`**-Eigenschaft des {{domxref("HTMLAnchorElement")}}-Interfaces ist ein String, der die Sprache der verlinkten Ressource angibt.

Sie spiegelt das `hreflang`-Attribut des {{HTMLElement("a")}}-Elements wider und ist ein leerer String (`""`), wenn kein `hreflang`-Attribut vorhanden ist.

Webbrowser und Suchmaschinen können diese Information verwenden, um die Sprache des verlinkten Inhalts besser zu verstehen, sind jedoch nicht verpflichtet, ihr zu folgen. Der im `hreflang`-Attribut angegebene Wert entspricht dem in {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} definierten Format. Falls nicht, wird er ignoriert.

Webbrowser verlassen sich nicht ausschließlich auf das `hreflang`-Attribut, nachdem sie die verlinkte Ressource abgerufen haben. Stattdessen verwenden sie Sprachinformationen, die direkt mit der Ressource verknüpft sind (z.B. durch HTTP-Header), um deren Sprache zu bestimmen.

## Wert

Ein String, der ein Sprach-Tag enthält, oder ein leerer String (`""`), wenn kein `hreflang`-Attribut vorhanden ist.

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
console.log(anchorElement.hreflang); // Gibt aus: "en-IN"
pTag.textContent = anchorElement.hreflang;
```

## Ergebnis

{{EmbedLiveSample("Example",100,100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLLinkElement.hreflang")}}-Eigenschaft
