---
title: "HTMLTemplateElement: htmlFor-Eigenschaft"
short-title: content
slug: Web/API/HTMLTemplateElement/htmlFor
l10n:
  sourceCommit: f8759faac983abbcd8276fd45ae881bb39efdf7a
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Die **`htmlFor`**-Eigenschaft des [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Interfaces ist die ID des Processing Instruction-Markers, der durch den Inhalt des zugehörigen `<template>`-Elements ersetzt werden soll. Sie spiegelt den Wert des [`for`](/de/docs/Web/HTML/Reference/Elements/template#for)-Inhaltsattributs wider und wird verwendet, um diesen zu setzen und abzurufen.

## Wert

Ein String, der die ID des Processing Instruction-Markers enthält, der durch den Inhalt dieses `<template>`-Elements ersetzt werden soll.

## Beschreibung

Das `for`-Attribut eines `<template>`-Elements wird für [Out-of-Order-Patching von Templates](/de/docs/Web/HTML/Reference/Elements/template#out-of-order_patching) unter Verwendung von `<?marker>` und `<?start>`/`<?end>` [Processing Instruction](/de/docs/Web/API/ProcessingInstruction)-Markern genutzt. Diese Marker werden durch den Inhalt des `<template>`-Elements ersetzt, wenn es geparst und verarbeitet wird.

Das `htmlFor`-Attribut bietet JavaScript-Zugriff auf den Attributwert. `htmlFor` wird anstelle von `for` verwendet, um Konflikte mit dem in JavaScript reservierten Wort `for` zu vermeiden ([dies ist nicht mehr unbedingt erforderlich, kann sich also in Zukunft ändern](https://github.com/whatwg/html/issues/9379)).

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
