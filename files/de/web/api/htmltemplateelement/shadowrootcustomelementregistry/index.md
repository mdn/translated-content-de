---
title: "HTMLTemplateElement: shadowRootCustomElementRegistry-Eigenschaft"
short-title: shadowRootCustomElementRegistry
slug: Web/API/HTMLTemplateElement/shadowRootCustomElementRegistry
l10n:
  sourceCommit: 9c4d4cb78a55340b46855e47aba76729a59e11ce
---

{{APIRef("Web Components")}}

Die **`shadowRootCustomElementRegistry`**-Eigenschaft des [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Interfaces spiegelt den Wert des `shadowrootcustomelementregistry`-Attributs des zugehörigen [`<template>`](/de/docs/Web/HTML/Reference/Elements/template)-Elements wider.

> [!NOTE]
> Diese Eigenschaft ist für Entwickler nicht nützlich und wird nur der Vollständigkeit halber dokumentiert.
> Wenn ein `<template>`-Element verwendet wird, um deklarativ ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) zu erstellen, dann existieren dieses Objekt und die Eigenschaft nicht.
> Andernfalls, wenn ein `HTMLTemplateElement` erstellt wird, ist der Wert dieser Eigenschaft irrelevant, da das Objekt kein Shadow Root ist und später nicht in ein Shadow Root geändert werden kann.

## Wert

Ein String, der das `shadowrootcustomelementregistry`-Attribut des zugehörigen [`<template>`](/de/docs/Web/HTML/Reference/Elements/template)-Elements widerspiegelt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ShadowRoot.customElementRegistry`](/de/docs/Web/API/ShadowRoot/customElementRegistry)
- [`HTMLTemplateElement.shadowRootMode`](/de/docs/Web/API/HTMLTemplateElement/shadowRootMode)
- [`CustomElementRegistry()`](/de/docs/Web/API/CustomElementRegistry/CustomElementRegistry)-Konstruktor
- [Verwendung von benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements)
