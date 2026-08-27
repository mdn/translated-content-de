---
title: "HTMLTemplateElement: htmlFor-Eigenschaft"
short-title: content
slug: Web/API/HTMLTemplateElement/htmlFor
l10n:
  sourceCommit: 96c0e251ee3d12f373fa1c4b3370a14b3a726db6
---

{{APIRef("HTML DOM")}}

Die **`htmlFor`**-Eigenschaft der [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Schnittstelle ist die ID des Processing Instruction-Markers, der mit dem Inhalt des zugehörigen `<template>`-Elements ersetzt wird. Sie spiegelt den Wert des [`for`](/de/docs/Web/HTML/Reference/Elements/template#for)-Inhaltsattributs wider und wird verwendet, um diesen zu setzen und abzurufen.

## Wert

Ein String, der die ID des Processing Instruction-Markers enthält, der mit dem Inhalt dieses `<template>`-Elements ersetzt werden soll.

## Beschreibung

Das `for`-Attribut eines `<template>`-Elements wird für [template out-of-order patching](/de/docs/Web/HTML/Reference/Elements/template#out-of-order_patching) unter Verwendung von `<?marker>` und `<?start>`/`<?end>` [Verarbeitungsanweisungsmarkern](/de/docs/Web/API/ProcessingInstruction) verwendet. Diese Marker werden mit dem Inhalt des `<template>`-Elements ersetzt, wenn es geparst und verarbeitet wird.

Das `htmlFor`-Attribut bietet JavaScript-Zugriff auf den Attributwert. `htmlFor` wird anstelle von `for` verwendet, um Konflikte mit dem JavaScript-Schlüsselwort `for` zu vermeiden ([dies ist nicht mehr strikt notwendig und könnte sich in der Zukunft ändern](https://github.com/whatwg/html/issues/9379)).

## Beispiele

### Grundlegende Verwendung

```html
<template for="my-identifier"> Lorem Ipsum... </template>
```

```js
console.log(document.querySelector("template").htmlFor);
// my-identifier
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)
