---
title: "HTMLAnchorElement: target-Eigenschaft"
short-title: target
slug: Web/API/HTMLAnchorElement/target
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{ApiRef("HTML DOM")}}

Die **`target`**-Eigenschaft der {{domxref("HTMLAnchorElement")}}-Schnittstelle ist ein String, der angibt, wo die verlinkte Ressource angezeigt werden soll.

Sie spiegelt das [`target`](/de/docs/Web/HTML/Element/a#target)-Attribut des {{HTMLElement("a")}}-Elements wider.

## Wert

Ein String, der das Ziel darstellt. Der Wert kann sein:

- Der Name eines {{HTMLElement("frame")}}.
- Einer der [Schlüsselwörter mit spezifischen Werten](/de/docs/Web/HTML/Element/a#target): `_blank`, `_self`, `_parent` oder `_top`.

## Beispiel

```html
<a href="www.example1.com" class="link1" target="_blank">example1</a>
```

```js
const link = document.querySelector(".link1");
console.log(link.target); // Ausgabe: "_blank"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLBaseElement.target")}}-Eigenschaft
- {{domxref("HTMLFormElement.target")}}-Eigenschaft
- {{domxref("HTMLAreaElement.target")}}-Eigenschaft
