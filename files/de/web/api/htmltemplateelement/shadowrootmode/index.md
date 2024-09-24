---
title: "HTMLTemplateElement: shadowRootMode-Eigenschaft"
short-title: shadowRootMode
slug: Web/API/HTMLTemplateElement/shadowRootMode
l10n:
  sourceCommit: 26091e4af9c73bb6c5d1466df5070c949498fdbd
---

{{APIRef("Web Components")}}

Die **`shadowRootMode`**-Eigenschaft der {{domxref("HTMLTemplateElement")}}-Schnittstelle spiegelt den Wert des [`shadowrootmode`](/de/docs/Web/HTML/Element/template#shadowrootmode)-Attributs des zugehörigen [`<template>`](/de/docs/Web/HTML/Element/template)-Elements wider.

Beachten Sie, dass diese Eigenschaft für Entwickler nicht nützlich ist.
Wenn ein `<template>`-Element verwendet wird, um deklarativ ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) zu erstellen, dann existieren dieses Objekt und diese Eigenschaft nicht.
Andernfalls ist, wenn ein `HTMLTemplateElement` erstellt wird, der Wert dieser Eigenschaft irrelevant, da das Objekt keine Shadow-Root ist und anschließend nicht mehr in eine Shadow-Root umgewandelt werden kann.

## Wert

Spiegelt den Wert des [`shadowrootmode`](/de/docs/Web/HTML/Element/template#shadowrootmode)-Attributs des zugehörigen [`<template>`](/de/docs/Web/HTML/Element/template)-Elements wider.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`shadowrootmode`](/de/docs/Web/HTML/Element/template#shadowrootmode)-Attribut des `<template>`-Elements
- [`ShadowRoot.mode`](/de/docs/Web/API/ShadowRoot/mode)
