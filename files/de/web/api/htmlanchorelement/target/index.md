---
title: "HTMLAnchorElement: target-Eigenschaft"
short-title: target
slug: Web/API/HTMLAnchorElement/target
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{ApiRef("HTML DOM")}}

Die **`target`**-Eigenschaft des [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Interfaces ist eine Zeichenkette, die angibt, wo die verlinkte Ressource angezeigt werden soll.

Sie reflektiert das [`target`](/de/docs/Web/HTML/Element/a#target)-Attribut des {{HTMLElement("a")}}-Elements.

## Wert

Eine Zeichenkette, die das Ziel darstellt. Ihr Wert kann sein:

- Der Name eines {{HTMLElement("frame")}}.
- Einer der [Schlüsselwörter mit spezifischen Werten](/de/docs/Web/HTML/Element/a#target): `_blank`, `_self`, `_parent`, oder `_top`.

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
