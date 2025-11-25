---
title: "Element: part-Eigenschaft"
short-title: part
slug: Web/API/Element/part
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{ ApiRef("DOM") }}

Die schreibgeschützte **`part`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle enthält ein [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Objekt, das die Teil-Identifikatoren des Elements repräsentiert. Sie spiegelt das [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)-Inhaltsattribut des Elements wider. Diese können verwendet werden, um Teile eines Shadow-DOMs über das {{cssxref("::part")}}-Pseudoelement zu stylen.

## Wert

Ein [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Objekt. Wenn das `part`-Attribut nicht gesetzt oder leer ist, wird eine leere `DOMTokenList` zurückgegeben, d.h. eine `DOMTokenList` mit der `length`-Eigenschaft gleich `0`.

Obwohl die `part`-Eigenschaft selbst insofern schreibgeschützt ist, als Sie das `DOMTokenList`-Objekt nicht ersetzen können, können Sie trotzdem direkt der `part`-Eigenschaft einen Wert zuweisen, was gleichbedeutend ist mit der Zuweisung zu ihrer [`value`](/de/docs/Web/API/DOMTokenList/value)-Eigenschaft. Sie können das `DOMTokenList`-Objekt auch mit den Methoden [`add()`](/de/docs/Web/API/DOMTokenList/add), [`remove()`](/de/docs/Web/API/DOMTokenList/remove), [`replace()`](/de/docs/Web/API/DOMTokenList/replace) und [`toggle()`](/de/docs/Web/API/DOMTokenList/toggle) modifizieren.

## Beispiele

Der folgende Ausschnitt stammt aus unserem [shadow-part](https://mdn.github.io/web-components-examples/shadow-part/)
Beispiel. Hier wird das `part`-Attribut verwendet, um die Shadow-Teile zu finden, und die
`part`-Eigenschaft wird dann verwendet, um die Teil-Identifikatoren jedes Tabs zu ändern, sodass das korrekte Styling auf den aktiven Tab angewendet wird, wenn auf die Tabs geklickt wird.

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
