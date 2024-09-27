---
title: HTMLTemplateElement
slug: Web/API/HTMLTemplateElement
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("Web Components")}}

Das **`HTMLTemplateElement`**-Interface ermöglicht den Zugriff auf die Inhalte eines HTML-{{HTMLElement("template")}}-Elements.

> [!NOTE]
> Ein HTML-Parser kann entweder ein `HTMLTemplateElement` oder einen [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellen, wenn er ein {{HTMLElement("template")}}-Element analysiert, abhängig von den `<template>`-Attributen.
> Wenn ein `HTMLTemplateElement` erstellt wird, werden die "shadow"-Attribute aus dem Template widergespiegelt.
> Diese sind jedoch nicht nützlich, da ein `HTMLTemplateElement` keine Shadow-Root ist und nicht nachträglich in eine Shadow-Root geändert werden kann.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt die Eigenschaften von [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`content`](/de/docs/Web/API/HTMLTemplateElement/content) {{ReadOnlyInline}}
  - : Ein schreibgeschütztes [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), das den DOM-Teilbaum enthält, der die Vorlageninhalte des {{HTMLElement("template")}}-Elements darstellt.
- [`shadowRootMode`](/de/docs/Web/API/HTMLTemplateElement/shadowRootMode)
  - : Ein String, der den Wert des [`shadowrootmode`](/de/docs/Web/HTML/Element/template#shadowrootmode)-Attributs des zugehörigen `<template>`-Elements widerspiegelt.
- [`shadowRootDelegatesFocus`](/de/docs/Web/API/HTMLTemplateElement/shadowRootDelegatesFocus)
  - : Ein Boolean, der den Wert des [`shadowrootdelegatesfocus`](/de/docs/Web/HTML/Element/template#shadowrootdelegatesfocus)-Attributs des zugehörigen `<template>`-Elements widerspiegelt.
- [`shadowRootClonable`](/de/docs/Web/API/HTMLTemplateElement/shadowRootClonable)
  - : Ein Boolean, der den Wert des [`shadowrootclonable`](/de/docs/Web/HTML/Element/template#shadowrootclonable)-Attributs des zugehörigen `<template>`-Elements widerspiegelt.
- [`shadowRootSerializable`](/de/docs/Web/API/HTMLTemplateElement/shadowRootSerializable)
  - : Ein Boolean, der den Wert des [`shadowrootserializable`](/de/docs/Web/HTML/Element/template#shadowrootserializable)-Attributs des zugehörigen `<template>`-Elements widerspiegelt.

## Instanz-Methoden

_Dieses Interface erbt die Methoden von [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
