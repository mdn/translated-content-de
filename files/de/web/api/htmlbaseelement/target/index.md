---
title: "HTMLBaseElement: target-Eigenschaft"
short-title: target
slug: Web/API/HTMLBaseElement/target
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{ApiRef("HTML DOM")}}

Die `target`-Eigenschaft des [`HTMLBaseElement`](/de/docs/Web/API/HTMLBaseElement)-Interfaces ist ein String, der den Standard-Ziel-Tab angibt, in dem das Ergebnis für Hyperlinks und Formularelemente angezeigt werden soll.

Sie spiegelt das [`target`](/de/docs/Web/HTML/Element/base#target)-Attribut des {{HTMLElement("base")}}-Elements wider.

## Wert

Ein String, der das Ziel darstellt. Sein Wert kann sein:

- Der Name eines {{HTMLElement("frame")}}.
- Einer der [Schlüsselwörter mit spezifischen Werten](/de/docs/Web/HTML/Element/base#target): `_blank`, `_self`, `_parent` oder `_top`.

## Beispiel

```html
<head>
  <base target="_top" />
</head>
```

```js
const baseElement = document.getElementsByTagName("base")[0];
console.log(baseElement.target); // Output: '_top'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLAnchorElement.target`](/de/docs/Web/API/HTMLAnchorElement/target)-Eigenschaft
- [`HTMLAreaElement.target`](/de/docs/Web/API/HTMLAreaElement/target)-Eigenschaft
- [`HTMLFormElement.target`](/de/docs/Web/API/HTMLFormElement/target)-Eigenschaft
