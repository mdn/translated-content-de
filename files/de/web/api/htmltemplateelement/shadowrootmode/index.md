---
title: "HTMLTemplateElement: shadowRootMode-Eigenschaft"
short-title: shadowRootMode
slug: Web/API/HTMLTemplateElement/shadowRootMode
l10n:
  sourceCommit: 9c4d4cb78a55340b46855e47aba76729a59e11ce
---

{{APIRef("Web Components")}}

Die **`shadowRootMode`**-Eigenschaft der [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Schnittstelle spiegelt den Wert des [`shadowrootmode`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootmode)-Attributs des zugehörigen [`<template>`](/de/docs/Web/HTML/Reference/Elements/template)-Elements wider.

> [!NOTE]
> Diese Eigenschaft ist für Entwickler nicht nützlich und wird nur der Vollständigkeit halber dokumentiert.
> Wenn ein `<template>`-Element verwendet wird, um deklarativ ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) zu erstellen, dann existieren dieses Objekt und diese Eigenschaft nicht.
> Andernfalls, wenn ein `HTMLTemplateElement` erstellt wird, ist der Wert dieser Eigenschaft irrelevant, da das Objekt keine Schattenwurzel ist und nicht nachträglich zu einer Schattenwurzel geändert werden kann.

## Wert

Spiegelt den Wert des [`shadowrootmode`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootmode)-Attributs des zugehörigen [`<template>`](/de/docs/Web/HTML/Reference/Elements/template)-Elements wider.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`shadowrootmode`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootmode)-Attribut des `<template>`-Elements
- [`ShadowRoot.mode`](/de/docs/Web/API/ShadowRoot/mode)
