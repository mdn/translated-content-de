---
title: HTMLTemplateElement
slug: Web/API/HTMLTemplateElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Web Components")}}

Das **`HTMLTemplateElement`**-Interface ermöglicht den Zugriff auf die Inhalte eines HTML-{{HTMLElement("template")}}-Elements.

> [!NOTE]
> Ein HTML-Parser kann entweder ein `HTMLTemplateElement` oder ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellen, wenn er ein {{HTMLElement("template")}}-Element analysiert, abhängig von den `<template>`-Attributen.
> Wenn ein `HTMLTemplateElement` erstellt wird, werden die "shadow"-Attribute aus der Vorlage übernommen.
> Diese sind jedoch nicht nützlich, da ein `HTMLTemplateElement` keine Schattenwurzel ist und später nicht in eine Schattenwurzel umgewandelt werden kann.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Dieses Interface erbt die Eigenschaften von [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`content`](/de/docs/Web/API/HTMLTemplateElement/content) {{ReadOnlyInline}}
  - : Ein schreibgeschütztes [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), das den DOM-Teilbaum enthält, der die Vorlageninhalte des {{HTMLElement("template")}}-Elements darstellt.
- [`shadowRootMode`](/de/docs/Web/API/HTMLTemplateElement/shadowRootMode)
  - : Ein String, der den Wert des [`shadowrootmode`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootmode)-Attributs des zugehörigen `<template>`-Elements widerspiegelt.
- [`shadowRootDelegatesFocus`](/de/docs/Web/API/HTMLTemplateElement/shadowRootDelegatesFocus)
  - : Ein Boolean, der den Wert des [`shadowrootdelegatesfocus`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootdelegatesfocus)-Attributs des zugehörigen `<template>`-Elements widerspiegelt.
- [`shadowRootClonable`](/de/docs/Web/API/HTMLTemplateElement/shadowRootClonable)
  - : Ein Boolean, der den Wert des [`shadowrootclonable`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootclonable)-Attributs des zugehörigen `<template>`-Elements widerspiegelt.
- [`shadowRootSerializable`](/de/docs/Web/API/HTMLTemplateElement/shadowRootSerializable)
  - : Ein Boolean, der den Wert des [`shadowrootserializable`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootserializable)-Attributs des zugehörigen `<template>`-Elements widerspiegelt.

## Instanzmethoden

_Dieses Interface erbt die Methoden von [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
