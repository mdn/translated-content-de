---
title: "HTMLBaseElement: target-Eigenschaft"
short-title: target
slug: Web/API/HTMLBaseElement/target
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ApiRef("HTML DOM")}}

Die `target`-Eigenschaft des [`HTMLBaseElement`](/de/docs/Web/API/HTMLBaseElement)-Interfaces ist ein String, der das Standard-Ziel-Tab darstellt, um die resultierende Ausgabe für Hyperlinks und Formularelemente anzuzeigen.

Sie spiegelt das [`target`](/de/docs/Web/HTML/Reference/Elements/base#target)-Attribut des {{HTMLElement("base")}}-Elements wider.

## Wert

Ein String, der das Ziel darstellt. Sein Wert kann sein:

- Der Name eines {{HTMLElement("frame")}}.
- Einer der [Schlüsselwörter mit spezifischen Werten](/de/docs/Web/HTML/Reference/Elements/base#target): `_blank`, `_self`, `_parent` oder `_top`.

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
