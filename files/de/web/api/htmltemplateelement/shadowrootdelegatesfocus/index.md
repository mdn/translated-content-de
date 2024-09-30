---
title: "HTMLTemplateElement: Eigenschaft shadowRootDelegatesFocus"
short-title: shadowRootDelegatesFocus
slug: Web/API/HTMLTemplateElement/shadowRootDelegatesFocus
l10n:
  sourceCommit: 8bd9c4c372862196f8e0d7a4aebd7f5683a53b2a
---

{{APIRef("Web Components")}}

Die **`shadowRootDelegatesFocus`**-Eigenschaft des [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Interfaces spiegelt den Wert des [`shadowrootdelegatesfocus`](/de/docs/Web/HTML/Element/template#shadowrootdelegatesfocus)-Attributs des zugehörigen [`<template>`](/de/docs/Web/HTML/Element/template)-Elements wider.

Beachten Sie, dass diese Eigenschaft für Entwickler nicht nützlich ist. Wenn ein `<template>`-Element verwendet wird, um deklarativ ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) zu erstellen, existieren dieses Objekt und die Eigenschaft nicht. Andernfalls, wenn ein `HTMLTemplateElement` erstellt wird, ist der Wert dieser Eigenschaft irrelevant, da das Objekt kein Shadow Root ist und nicht nachträglich in ein Shadow Root geändert werden kann.

## Wert

Spiegelt den Wert des [`shadowrootdelegatesfocus`](/de/docs/Web/HTML/Element/template#shadowrootdelegatesfocus)-Attributs des zugehörigen [`<template>`](/de/docs/Web/HTML/Element/template)-Elements wider.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`shadowrootdelegatesfocus`](/de/docs/Web/HTML/Element/template#shadowrootdelegatesfocus)-Attribut des `<template>`-Elements
- [`ShadowRoot.delegatesFocus`](/de/docs/Web/API/ShadowRoot/delegatesFocus)
