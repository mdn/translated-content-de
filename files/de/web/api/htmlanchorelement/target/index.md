---
title: "HTMLAnchorElement: target-Eigenschaft"
short-title: target
slug: Web/API/HTMLAnchorElement/target
l10n:
  sourceCommit: 9ba3ab2c48fb51423f811d329818071e4c79caca
---

{{ApiRef("HTML DOM")}}

Die **`target`**-Eigenschaft der [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Schnittstelle ist ein String, der angibt, wo die verlinkte Ressource angezeigt werden soll.

Sie spiegelt das [`target`](/de/docs/Web/HTML/Reference/Elements/a#target)-Attribut des {{HTMLElement("a")}}-Elements wider.

## Wert

Ein String, der das Ziel darstellt. Sein Wert kann eines der [Schlüsselwörter](/de/docs/Web/HTML/Reference/Elements/a#target) `_blank`, `_self`, `_parent` oder `_top` sein.

## Beispiel

```html
<a href="www.example1.com" class="link1" target="_blank">example1</a>
```

```js
const link = document.querySelector(".link1");
console.log(link.target); // output: "_blank"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLBaseElement.target`](/de/docs/Web/API/HTMLBaseElement/target)-Eigenschaft
- [`HTMLFormElement.target`](/de/docs/Web/API/HTMLFormElement/target)-Eigenschaft
- [`HTMLAreaElement.target`](/de/docs/Web/API/HTMLAreaElement/target)-Eigenschaft
