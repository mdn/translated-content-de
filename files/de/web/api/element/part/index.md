---
title: "Element: part-Eigenschaft"
short-title: part
slug: Web/API/Element/part
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ ApiRef("DOM") }}

Die **`part`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle
repräsentiert die Teil-Identifier des Elements (d.h. über das `part`-Attribut gesetzt), zurückgegeben als eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList). Diese können verwendet werden, um Teile eines Shadow-DOMs über das {{cssxref("::part")}}-Pseudoelement zu stylen.

## Wert

Ein [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Objekt.

## Beispiele

Der folgende Auszug stammt aus unserem [shadow-part](https://mdn.github.io/web-components-examples/shadow-part/)
Beispiel. Hier wird das `part`-Attribut verwendet, um die Shadow-Parts zu finden, und die
`part`-Eigenschaft wird dann verwendet, um die Teil-Identifier jedes Tabs zu ändern, sodass das korrekte Styling auf das aktive Tab angewendet wird, wenn die Tabs angeklickt werden.

```js
const tabs = [];
const children = this.shadowRoot.children;

for (const elem of children) {
  if (elem.getAttribute("part")) {
    tabs.push(elem);
  }
}

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((tab) => {
      tab.part = "tab";
    });
    e.target.part = "tab active";
  });

  console.log(tab.part);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("::part")}}
- [part](/de/docs/Web/HTML/Reference/Global_attributes/part)
