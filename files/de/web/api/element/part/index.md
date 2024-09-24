---
title: "Element: part Eigenschaft"
short-title: part
slug: Web/API/Element/part
l10n:
  sourceCommit: 5026c14bd6d2b6b377289aadac7eceae9282e806
---

{{ ApiRef("DOM") }}

Die **`part`** Eigenschaft des [`Element`](/de/docs/Web/API/Element) Interface
repräsentiert die Teil-Identifikatoren des Elements (d.h. gesetzt durch das `part`
Attribut), zurückgegeben als ein [`DOMTokenList`](/de/docs/Web/API/DOMTokenList). Diese können verwendet werden, um Teile
eines Shadow-DOMs über das {{cssxref("::part")}} Pseudoelement zu stylen.

## Wert

Ein [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) Objekt.

## Beispiele

Der folgende Auszug stammt aus unserem [shadow-part](https://mdn.github.io/web-components-examples/shadow-part/)
Beispiel. Hier wird das `part` Attribut verwendet, um die Shadow-Teile zu finden, und die
`part` Eigenschaft wird dann verwendet, um die Teil-Identifikatoren jedes Tabs zu ändern,
damit die korrekte Formatierung auf den aktiven Tab angewendet wird, wenn die Tabs angeklickt werden.

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
