---
title: HTMLTitleElement
slug: Web/API/HTMLTitleElement
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{ APIRef("HTML DOM") }}

Das **`HTMLTitleElement`** Interface wird von einem Dokumentelement {{ HTMLElement("title") }} implementiert. Dieses Element erbt alle Eigenschaften und Methoden des {{domxref("HTMLElement")}} Interfaces.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Eltern-{{domxref("HTMLElement")}}._

- {{domxref("HTMLTitleElement.text")}}
  - : Ein String, der den Text des Dokumenttitels repräsentiert.

## Instanzmethoden

_Keine spezifische Methode; erbt Methoden von seinem Eltern-{{domxref("HTMLElement")}}._

## Beispiel

Nicht zu verwechseln: `document.title` mit `document.querySelector('title')`

Ersteres ist nur eine Methode zum Setzen/Abrufen des inneren Textwerts des Dokumenttitels, während letzteres das `HTMLTitleElement` Objekt ist. Sie können also nicht schreiben: `document.title.text = "Hello world!";`

Stattdessen können Sie einfach schreiben: `document.title = "Hello world!";` was gleichbedeutend ist mit `document.querySelector('title').text = "Hello world!";`

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{ HTMLElement("title") }}.
