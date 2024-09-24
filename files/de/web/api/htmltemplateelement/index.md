---
title: HTMLTemplateElement
slug: Web/API/HTMLTemplateElement
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("Web Components")}}

Das **`HTMLTemplateElement`**-Interface ermöglicht den Zugriff auf die Inhalte eines HTML-{{HTMLElement("template")}}-Elements.

> [!NOTE]
> Ein HTML-Parser kann entweder ein `HTMLTemplateElement` oder ein {{domxref("ShadowRoot")}} erstellen, wenn er ein {{HTMLElement("template")}}-Element analysiert, abhängig von den `<template>`-Attributen.
> Wenn ein `HTMLTemplateElement` erstellt wird, werden die "shadow"-Attribute aus der Vorlage übernommen.
> Diese sind jedoch nicht nützlich, da ein `HTMLTemplateElement` keine Schattenwurzel ist und nicht nachträglich in eine Schattenwurzel geändert werden kann.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt die Eigenschaften von {{domxref("HTMLElement")}}._

- {{domxref("HTMLTemplateElement.content", "content")}} {{ReadOnlyInline}}
  - : Ein schreibgeschützter {{domxref("DocumentFragment")}}, der den DOM-Teilbaum enthält, der die Vorlageninhalte des {{HTMLElement("template")}}-Elements darstellt.
- {{domxref("HTMLTemplateElement.shadowRootMode", "shadowRootMode")}}
  - : Ein String, der den Wert des [`shadowrootmode`](/de/docs/Web/HTML/Element/template#shadowrootmode)-Attributs des zugehörigen `<template>`-Elements widerspiegelt.
- {{domxref("HTMLTemplateElement.shadowRootDelegatesFocus", "shadowRootDelegatesFocus")}}
  - : Ein Boolean, der den Wert des [`shadowrootdelegatesfocus`](/de/docs/Web/HTML/Element/template#shadowrootdelegatesfocus)-Attributs des zugehörigen `<template>`-Elements widerspiegelt.
- {{domxref("HTMLTemplateElement.shadowRootClonable", "shadowRootClonable")}}
  - : Ein Boolean, der den Wert des [`shadowrootclonable`](/de/docs/Web/HTML/Element/template#shadowrootclonable)-Attributs des zugehörigen `<template>`-Elements widerspiegelt.
- {{domxref("HTMLTemplateElement.shadowRootSerializable", "shadowRootSerializable")}}
  - : Ein Boolean, der den Wert des [`shadowrootserializable`](/de/docs/Web/HTML/Element/template#shadowrootserializable)-Attributs des zugehörigen `<template>`-Elements widerspiegelt.

## Instanz-Methoden

_Dieses Interface erbt die Methoden von {{domxref("HTMLElement")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
