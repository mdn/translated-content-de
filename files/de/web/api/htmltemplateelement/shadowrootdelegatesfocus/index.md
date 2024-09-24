---
title: "HTMLTemplateElement: Eigenschaft shadowRootDelegatesFocus"
short-title: shadowRootDelegatesFocus
slug: Web/API/HTMLTemplateElement/shadowRootDelegatesFocus
l10n:
  sourceCommit: 26091e4af9c73bb6c5d1466df5070c949498fdbd
---

{{APIRef("Web Components")}}

Die **`shadowRootDelegatesFocus`**-Eigenschaft der {{domxref("HTMLTemplateElement")}}-Schnittstelle spiegelt den Wert des [`shadowrootdelegatesfocus`](/de/docs/Web/HTML/Element/template#shadowrootdelegatesfocus)-Attributs des zugehörigen [`<template>`](/de/docs/Web/HTML/Element/template)-Elements wider.

Beachten Sie, dass diese Eigenschaft für Entwickler nicht nützlich ist.
Wenn ein `<template>`-Element zur deklarativen Erstellung eines [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) verwendet wird, existieren dieses Objekt und diese Eigenschaft nicht.
Andernfalls, wenn ein `HTMLTemplateElement` erstellt wird, ist der Wert dieser Eigenschaft irrelevant, da das Objekt kein Shadow-Root ist und nicht nachträglich in ein Shadow-Root umgewandelt werden kann.

## Wert

Spiegelt den Wert des [`shadowrootdelegatesfocus`](/de/docs/Web/HTML/Element/template#shadowrootclonable)-Attributs des zugehörigen [`<template>`](/de/docs/Web/HTML/Element/template)-Elements wider.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`shadowrootdelegatesfocus`](/de/docs/Web/HTML/Element/template#shadowrootdelegatesfocus)-Attribut des `<template>`-Elements
- [`ShadowRoot.delegatesFocus`](/de/docs/Web/API/ShadowRoot/delegatesFocus)
