---
title: "HTMLTemplateElement: shadowRootDelegatesFocus-Eigenschaft"
short-title: shadowRootDelegatesFocus
slug: Web/API/HTMLTemplateElement/shadowRootDelegatesFocus
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Web Components")}}

Die **`shadowRootDelegatesFocus`**-Eigenschaft der [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Schnittstelle spiegelt den Wert des [`shadowrootdelegatesfocus`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootdelegatesfocus)-Attributs des zugehörigen [`<template>`](/de/docs/Web/HTML/Reference/Elements/template)-Elements wider.

Bitte beachten Sie, dass diese Eigenschaft für Entwickler nicht nützlich ist.
Wenn ein `<template>`-Element verwendet wird, um deklarativ ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) zu erstellen, dann existieren dieses Objekt und diese Eigenschaft nicht.
Andernfalls, wenn ein `HTMLTemplateElement` erstellt wird, ist der Wert dieser Eigenschaft irrelevant, da das Objekt kein Shadow Root ist und nicht nachträglich in ein Shadow Root geändert werden kann.

## Wert

Spiegelt den Wert des [`shadowrootdelegatesfocus`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootdelegatesfocus)-Attributs des zugehörigen [`<template>`](/de/docs/Web/HTML/Reference/Elements/template)-Elements wider.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`shadowrootdelegatesfocus`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootdelegatesfocus) Attribut des `<template>`-Elements
- [`ShadowRoot.delegatesFocus`](/de/docs/Web/API/ShadowRoot/delegatesFocus)
