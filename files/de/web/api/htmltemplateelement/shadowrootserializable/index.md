---
title: "HTMLTemplateElement: shadowRootSerializable-Eigenschaft"
short-title: shadowRootSerializable
slug: Web/API/HTMLTemplateElement/shadowRootSerializable
l10n:
  sourceCommit: b9e02b32080fc4e079ed3d0e1ae003cab3b770ad
---

{{APIRef("Web Components")}}

Die **`shadowRootSerializable`**-Eigenschaft spiegelt den Wert des [`shadowrootserializable`](/de/docs/Web/HTML/Element/template#shadowrootserializable)-Attributs des zugehörigen [`<template>`](/de/docs/Web/HTML/Element/template)-Elements wider.

Beachten Sie, dass diese Eigenschaft für Entwickler nicht nützlich ist.
Wenn ein `<template>`-Element verwendet wird, um deklarativ ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) zu erstellen, dann existiert dieses Objekt und diese Eigenschaft nicht.
Andernfalls, wenn ein `HTMLTemplateElement` erstellt wird, ist der Wert dieser Eigenschaft irrelevant, da das Objekt kein Shadow Root ist und anschließend nicht in einen Shadow Root umgewandelt werden kann.

## Wert

Spiegelt den Wert des [`shadowrootserializable`](/de/docs/Web/HTML/Element/template#shadowrootserializable)-Attributs des zugehörigen [`<template>`](/de/docs/Web/HTML/Element/template)-Elements wider.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`shadowrootserializable`](/de/docs/Web/HTML/Element/template#shadowrootserializable)-Attribut des `<template>`-Elements
- [`ShadowRoot.serializable`](/de/docs/Web/API/ShadowRoot/serializable)
