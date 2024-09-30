---
title: "HTMLAreaElement: target-Eigenschaft"
short-title: target
slug: Web/API/HTMLAreaElement/target
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{ApiRef("HTML DOM")}}

Die **`target`**-Eigenschaft der [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Schnittstelle ist ein String, der angibt, wo die verlinkte Ressource angezeigt werden soll.

Sie spiegelt das [`target`](/de/docs/Web/HTML/Element/area#target)-Attribut des {{HTMLElement("area")}}-Elements wider.

## Wert

Ein String, der das Ziel darstellt. Der Wert kann sein:

- Der Name eines {{HTMLElement("frame")}}.
- Einer der [Schlüsselwörter mit bestimmten Werten](/de/docs/Web/HTML/Element/area#target): `_blank`, `_self`, `_parent` oder `_top`.

## Beispiel

```html
<map name="image-map">
  <area href="www.example.com" target="_top" alt="left" />
</map>
```

```js
const areaElement = document.getElementsByName("image-map")[0].areas[0];
console.log(areaElement.target); // Output: "_top"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLBaseElement.target`](/de/docs/Web/API/HTMLBaseElement/target)-Eigenschaft
- [`HTMLFormElement.target`](/de/docs/Web/API/HTMLFormElement/target)-Eigenschaft
- [`HTMLAnchorElement.target`](/de/docs/Web/API/HTMLAnchorElement/target)-Eigenschaft
