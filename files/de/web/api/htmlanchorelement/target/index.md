---
title: "HTMLAnchorElement: target-Eigenschaft"
short-title: target
slug: Web/API/HTMLAnchorElement/target
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ApiRef("HTML DOM")}}

Die **`target`**-Eigenschaft des [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Interfaces ist ein String, der angibt, wo die verlinkte Ressource angezeigt werden soll.

Sie spiegelt das [`target`](/de/docs/Web/HTML/Reference/Elements/a#target)-Attribut des {{HTMLElement("a")}}-Elements wider.

## Wert

Ein String, der das Ziel darstellt. Sein Wert kann sein:

- Der Name eines {{HTMLElement("frame")}}.
- Einer der [Schlüsselwörter mit spezifischen Werten](/de/docs/Web/HTML/Reference/Elements/a#target): `_blank`, `_self`, `_parent` oder `_top`.

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
