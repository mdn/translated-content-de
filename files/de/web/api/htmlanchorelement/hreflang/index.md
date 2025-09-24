---
title: "HTMLAnchorElement: hreflang-Eigenschaft"
short-title: hreflang
slug: Web/API/HTMLAnchorElement/hreflang
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{ApiRef("HTML DOM")}}

Die **`hreflang`**-Eigenschaft des [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Interfaces ist ein String, der die Sprache der verlinkten Ressource angibt.

Sie spiegelt das `hreflang`-Attribut des {{HTMLElement("a")}}-Elements wider und ist der leere String (`""`), wenn kein `hreflang`-Element vorhanden ist.

Webbrowser und Suchmaschinen können diese Information verwenden, um die Sprache des verlinkten Inhalts besser zu verstehen, sind jedoch nicht verpflichtet, ihr zu folgen. Der für das `hreflang`-Attribut bereitgestellte Wert folgt dem {{Glossary("BCP_47_language_tag", "BCP 47-Sprach-Tag")}}-Format. Andernfalls wird er ignoriert.

Webbrowser verlassen sich nach dem Abrufen der verlinkten Ressource nicht ausschließlich auf das `hreflang`-Attribut. Stattdessen verwenden sie direkt mit der Ressource assoziierte Sprachinformationen (z. B. über HTTP-Header), um deren Sprache zu bestimmen.

## Wert

Ein String, der ein Sprach-Tag enthält, oder der leere String (`""`), wenn kein `hreflang`-Element vorhanden ist.

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
