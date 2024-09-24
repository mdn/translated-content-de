---
title: "HTMLBaseElement: target-Eigenschaft"
short-title: target
slug: Web/API/HTMLBaseElement/target
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{ApiRef("HTML DOM")}}

Die `target`-Eigenschaft des {{domxref("HTMLBaseElement")}}-Interfaces ist ein String, der das Standard-Ziel-Tab angibt, um die resultierende Ausgabe für Hyperlinks und Formularelemente anzuzeigen.

Es spiegelt das [`target`](/de/docs/Web/HTML/Element/base#target)-Attribut des {{HTMLElement("base")}}-Elements wider.

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

- {{domxref("HTMLAnchorElement.target")}}-Eigenschaft
- {{domxref("HTMLAreaElement.target")}}-Eigenschaft
- {{domxref("HTMLFormElement.target")}}-Eigenschaft
