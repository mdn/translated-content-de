---
title: "HTMLTemplateElement: shadowRootClonable-Eigenschaft"
short-title: shadowRootClonable
slug: Web/API/HTMLTemplateElement/shadowRootClonable
l10n:
  sourceCommit: 9c4d4cb78a55340b46855e47aba76729a59e11ce
---

{{APIRef("Web Components")}}

Die **`shadowRootClonable`**-Eigenschaft spiegelt den Wert des [`shadowrootclonable`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootclonable)-Attributs des zugehörigen [`<template>`](/de/docs/Web/HTML/Reference/Elements/template)-Elements wider.

> [!NOTE]
> Diese Eigenschaft ist für Entwickler nicht nützlich und wird nur der Vollständigkeit halber dokumentiert.
> Wenn ein `<template>`-Element verwendet wird, um deklarativ ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) zu erstellen, existieren dieses Objekt und diese Eigenschaft nicht.
> Andernfalls ist der Wert dieser Eigenschaft bei einem `HTMLTemplateElement` irrelevant, da das Objekt kein Shadow Root ist und nicht nachträglich in ein Shadow Root umgewandelt werden kann.

## Wert

Spiegelt den Wert des [`shadowrootclonable`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootclonable)-Attributs des zugehörigen [`<template>`](/de/docs/Web/HTML/Reference/Elements/template)-Elements wider.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`shadowrootclonable`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootclonable)-Attribut des `<template>`-Elements
- [`ShadowRoot.clonable`](/de/docs/Web/API/ShadowRoot/clonable)
