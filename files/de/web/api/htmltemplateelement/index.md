---
title: HTMLTemplateElement
slug: Web/API/HTMLTemplateElement
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("Web Components")}}

Das **`HTMLTemplateElement`**-Interface ermöglicht den Zugriff auf den Inhalt eines HTML-{{HTMLElement("template")}}-Elements.

> [!NOTE]
> Ein HTML-Parser kann entweder ein `HTMLTemplateElement` oder ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellen, wenn er ein {{HTMLElement("template")}}-Element analysiert, abhängig von den `<template>`-Attributen.
> Wenn ein `HTMLTemplateElement` erstellt wird, werden die "shadow"-Attribute aus dem Template übernommen.
> Diese sind jedoch nicht nützlich, da ein `HTMLTemplateElement` keine Shadow-Root ist und nicht nachträglich in eine Shadow-Root geändert werden kann.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt die Eigenschaften von [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`content`](/de/docs/Web/API/HTMLTemplateElement/content) {{ReadOnlyInline}}
  - : Ein schreibgeschütztes [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), das den DOM-Teilbaum enthält, der den Inhalt des {{HTMLElement("template")}}-Elements darstellt.
- [`shadowRootMode`](/de/docs/Web/API/HTMLTemplateElement/shadowRootMode)
  - : Ein String, der den Wert des [`shadowrootmode`](/de/docs/Web/HTML/Element/template#shadowrootmode)-Attributes des zugehörigen `<template>`-Elements wiedergibt.
- [`shadowRootDelegatesFocus`](/de/docs/Web/API/HTMLTemplateElement/shadowRootDelegatesFocus)
  - : Ein booleanischer Wert, der den Wert des [`shadowrootdelegatesfocus`](/de/docs/Web/HTML/Element/template#shadowrootdelegatesfocus)-Attributes des zugehörigen `<template>`-Elements wiedergibt.
- [`shadowRootClonable`](/de/docs/Web/API/HTMLTemplateElement/shadowRootClonable)
  - : Ein booleanischer Wert, der den Wert des [`shadowrootclonable`](/de/docs/Web/HTML/Element/template#shadowrootclonable)-Attributes des zugehörigen `<template>`-Elements wiedergibt.
- [`shadowRootSerializable`](/de/docs/Web/API/HTMLTemplateElement/shadowRootSerializable)
  - : Ein booleanischer Wert, der den Wert des [`shadowrootserializable`](/de/docs/Web/HTML/Element/template#shadowrootserializable)-Attributes des zugehörigen `<template>`-Elements wiedergibt.

## Instanz-Methoden

_Dieses Interface erbt die Methoden von [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
