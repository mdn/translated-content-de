---
title: "HTMLTemplateElement: shadowRootSerializable-Eigenschaft"
short-title: shadowRootSerializable
slug: Web/API/HTMLTemplateElement/shadowRootSerializable
l10n:
  sourceCommit: 9c4d4cb78a55340b46855e47aba76729a59e11ce
---

{{APIRef("Web Components")}}

Die **`shadowRootSerializable`**-Eigenschaft spiegelt den Wert des [`shadowrootserializable`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootserializable)-Attributs des zugehörigen [`<template>`](/de/docs/Web/HTML/Reference/Elements/template)-Elements wider.

> [!NOTE]
> Diese Eigenschaft ist für Entwickler nicht nützlich und wird nur der Vollständigkeit halber dokumentiert.
> Wenn ein `<template>`-Element verwendet wird, um deklarativ ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) zu erstellen, dann existieren dieses Objekt und diese Eigenschaft nicht.
> Andernfalls, wenn ein `HTMLTemplateElement` erstellt wird, ist der Wert dieser Eigenschaft irrelevant, da das Objekt keine Shadow-Root ist und nicht nachträglich in eine Shadow-Root geändert werden kann.

## Wert

Spiegelt den Wert des [`shadowrootserializable`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootserializable)-Attributs des zugehörigen [`<template>`](/de/docs/Web/HTML/Reference/Elements/template)-Elements wider.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`shadowrootserializable`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootserializable)-Attribut des `<template>`-Elements
- [`ShadowRoot.serializable`](/de/docs/Web/API/ShadowRoot/serializable)
