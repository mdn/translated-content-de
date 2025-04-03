---
title: "Element: part Eigenschaft"
short-title: part
slug: Web/API/Element/part
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{ ApiRef("DOM") }}

Die **`part`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces
repräsentiert die Teilkennzeichnung(en) des Elements (d.h. festgelegt mit dem `part`-Attribut), die als [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurückgegeben wird. Diese können verwendet werden, um Teile eines Shadow DOM über das {{cssxref("::part")}}-Pseudo-Element zu stylen.

## Wert

Ein [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Objekt.

## Beispiele

Der folgende Auszug stammt aus unserem [shadow-part](https://mdn.github.io/web-components-examples/shadow-part/)
Beispiel. Hier wird das `part`-Attribut verwendet, um die Shadow-Teile zu finden, und die
`part`-Eigenschaft wird dann verwendet, um die Teilkennzeichnungen jeder Registerkarte zu ändern, sodass das korrekte Styling auf die aktive Registerkarte angewendet wird, wenn Tabs angeklickt werden.

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
- [part](/de/docs/Web/HTML/Global_attributes/part)
