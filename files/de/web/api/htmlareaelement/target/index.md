---
title: "HTMLAreaElement: target-Eigenschaft"
short-title: target
slug: Web/API/HTMLAreaElement/target
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ApiRef("HTML DOM")}}

Die **`target`**-Eigenschaft des [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Interfaces ist ein String, der angibt, wo die verknüpfte Ressource angezeigt werden soll.

Sie spiegelt das [`target`](/de/docs/Web/HTML/Reference/Elements/area#target)-Attribut des {{HTMLElement("area")}}-Elements wider.

## Wert

Ein String, der das Ziel darstellt. Sein Wert kann sein:

- Der Name eines {{HTMLElement("frame")}}.
- Einer der [Schlüsselwörter mit spezifischen Werten](/de/docs/Web/HTML/Reference/Elements/area#target): `_blank`, `_self`, `_parent` oder `_top`.

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
