---
title: "HTMLTemplateElement: shadowRootMode-Eigenschaft"
short-title: shadowRootMode
slug: Web/API/HTMLTemplateElement/shadowRootMode
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Web Components")}}

Die **`shadowRootMode`**-Eigenschaft des [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Interfaces spiegelt den Wert des [`shadowrootmode`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootmode)-Attributs des zugehörigen [`<template>`](/de/docs/Web/HTML/Reference/Elements/template)-Elements wider.

Beachten Sie, dass diese Eigenschaft für Entwickler nicht nützlich ist.
Wenn ein `<template>`-Element verwendet wird, um deklarativ ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) zu erstellen, existieren dieses Objekt und diese Eigenschaft nicht.
Andernfalls, wenn ein `HTMLTemplateElement` erstellt wird, ist der Wert dieser Eigenschaft irrelevant, da das Objekt keine Shadow-Root ist und nicht nachträglich in eine Shadow-Root geändert werden kann.

## Wert

Spiegelt den Wert des [`shadowrootmode`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootmode)-Attributs des zugehörigen [`<template>`](/de/docs/Web/HTML/Reference/Elements/template)-Elements wider.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`shadowrootmode`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootmode)-Attribut des `<template>`-Elements
- [`ShadowRoot.mode`](/de/docs/Web/API/ShadowRoot/mode)
