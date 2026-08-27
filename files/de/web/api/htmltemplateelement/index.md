---
title: HTMLTemplateElement
slug: Web/API/HTMLTemplateElement
l10n:
  sourceCommit: 96c0e251ee3d12f373fa1c4b3370a14b3a726db6
---

{{APIRef("Web Components")}}

Das **`HTMLTemplateElement`** Interface ermöglicht den Zugriff auf den Inhalt eines HTML-{{HTMLElement("template")}}-Elements.

> [!NOTE]
> Ein HTML-Parser kann entweder ein `HTMLTemplateElement` oder ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellen, wenn es ein {{HTMLElement("template")}}-Element analysiert, abhängig von den `<template>`-Attributen.
> Wenn ein `HTMLTemplateElement` erstellt wird, werden die "shadow"-Attribute aus dem Template reflektiert.
> Diese sind jedoch nicht nützlich, da ein `HTMLTemplateElement` keine Schattenwurzel ist und nicht nachträglich in eine Schattenwurzel umgewandelt werden kann.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt die Eigenschaften von [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`content`](/de/docs/Web/API/HTMLTemplateElement/content) {{ReadOnlyInline}}
  - : Ein schreibgeschütztes [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), das den DOM-Teilbaum enthält, der den Inhalt des {{HTMLElement("template")}}-Elements darstellt.
- [`htmlFor`](/de/docs/Web/API/HTMLTemplateElement/htmlFor) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der das [`for`](/de/docs/Web/HTML/Reference/Elements/template#for)-HTML-Attribut widerspiegelt und die ID des Processing Instruction-Markierers enthält, der durch den Inhalt dieses `<template>`-Elements ersetzt werden soll.
- [`shadowRootMode`](/de/docs/Web/API/HTMLTemplateElement/shadowRootMode)
  - : Ein String, der den Wert des [`shadowrootmode`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootmode)-Attributs des zugehörigen `<template>`-Elements widerspiegelt.
- [`shadowRootDelegatesFocus`](/de/docs/Web/API/HTMLTemplateElement/shadowRootDelegatesFocus)
  - : Ein boolean, der den Wert des [`shadowrootdelegatesfocus`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootdelegatesfocus)-Attributs des zugehörigen `<template>`-Elements widerspiegelt.
- [`shadowRootClonable`](/de/docs/Web/API/HTMLTemplateElement/shadowRootClonable)
  - : Ein boolean, der den Wert des [`shadowrootclonable`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootclonable)-Attributs des zugehörigen `<template>`-Elements widerspiegelt.
- [`shadowRootCustomElementRegistry`](/de/docs/Web/API/HTMLTemplateElement/shadowRootCustomElementRegistry)
  - : Ein String, der den Wert des [`shadowrootcustomelementregistry`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootcustomelementregistry)-Attributs des zugehörigen `<template>`-Elements widerspiegelt und anzeigt, dass die deklarative Schattenwurzel ein spezifisches [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) verwenden wird.
- [`shadowRootSerializable`](/de/docs/Web/API/HTMLTemplateElement/shadowRootSerializable)
  - : Ein boolean, der den Wert des [`shadowrootserializable`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootserializable)-Attributs des zugehörigen `<template>`-Elements widerspiegelt.
- [`shadowRootSlotAssignment`](/de/docs/Web/API/HTMLTemplateElement/shadowRootSlotAssignment)
  - : Ein String, der den Wert des [`shadowrootslotassignment`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment)-Attributs des zugehörigen `<template>`-Elements widerspiegelt.

## Instanz-Methoden

_Dieses Interface erbt die Methoden von [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
