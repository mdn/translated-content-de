---
title: "HTMLTemplateElement: shadowRootClonable-Eigenschaft"
short-title: shadowRootClonable
slug: Web/API/HTMLTemplateElement/shadowRootClonable
l10n:
  sourceCommit: 26091e4af9c73bb6c5d1466df5070c949498fdbd
---

{{APIRef("Web Components")}}

Die **`shadowRootClonable`**-Eigenschaft spiegelt den Wert des [`shadowrootclonable`](/de/docs/Web/HTML/Element/template#shadowrootclonable)-Attributs des zugehörigen [`<template>`](/de/docs/Web/HTML/Element/template)-Elements wider.

Beachten Sie, dass diese Eigenschaft für Entwickler nicht nützlich ist. Wenn ein `<template>`-Element verwendet wird, um deklarativ ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) zu erstellen, existieren dieses Objekt und diese Eigenschaft nicht. Andernfalls, wenn ein `HTMLTemplateElement` erstellt wird, ist der Wert dieser Eigenschaft irrelevant, da das Objekt kein Shadow-Root ist und nicht nachträglich in ein Shadow-Root geändert werden kann.

## Wert

Spiegelt den Wert des [`shadowrootclonable`](/de/docs/Web/HTML/Element/template#shadowrootclonable)-Attributs des zugehörigen [`<template>`](/de/docs/Web/HTML/Element/template)-Elements wider.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`shadowrootclonable`](/de/docs/Web/HTML/Element/template#shadowrootclonable)-Attribut des `<template>`-Elements
- [`ShadowRoot.clonable`](/de/docs/Web/API/ShadowRoot/clonable)
