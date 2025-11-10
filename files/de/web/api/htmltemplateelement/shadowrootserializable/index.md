---
title: "HTMLTemplateElement: shadowRootSerializable-Eigenschaft"
short-title: shadowRootSerializable
slug: Web/API/HTMLTemplateElement/shadowRootSerializable
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Web Components")}}

Die **`shadowRootSerializable`**-Eigenschaft spiegelt den Wert des [`shadowrootserializable`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootserializable)-Attributs des zugehörigen [`<template>`](/de/docs/Web/HTML/Reference/Elements/template)-Elements wider.

Beachten Sie, dass diese Eigenschaft für Entwickler nicht nützlich ist.
Wenn ein `<template>`-Element verwendet wird, um deklarativ ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) zu erstellen, dann existieren dieses Objekt und diese Eigenschaft nicht.
Andernfalls, wenn ein `HTMLTemplateElement` erstellt wird, ist der Wert dieser Eigenschaft irrelevant, da das Objekt kein Shadow Root ist und anschließend nicht in ein Shadow Root geändert werden kann.

## Wert

Spiegelt den Wert des [`shadowrootserializable`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootserializable)-Attributs des zugehörigen [`<template>`](/de/docs/Web/HTML/Reference/Elements/template)-Elements wider.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`shadowrootserializable`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootserializable)-Attribut des `<template>`-Elements
- [`ShadowRoot.serializable`](/de/docs/Web/API/ShadowRoot/serializable)
