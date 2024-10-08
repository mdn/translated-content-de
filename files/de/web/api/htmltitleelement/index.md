---
title: HTMLTitleElement
slug: Web/API/HTMLTitleElement
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{ APIRef("HTML DOM") }}

Die **`HTMLTitleElement`**-Schnittstelle wird von einem Dokument-{{ HTMLElement("title") }} implementiert. Dieses Element erbt alle Eigenschaften und Methoden der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Eltern-Element, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLTitleElement.text`](/de/docs/Web/API/HTMLTitleElement/text)
  - : Ein String, der den Text des Dokuments titels darstellt.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von seinem Eltern-Element, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Beispiel

Nicht verwechseln: `document.title` mit `document.querySelector('title')`

Ersteres ist nur eine set/get-Methode, um den inneren Textwert des Dokumenttitels zu setzen oder abzurufen, während letzteres das `HTMLTitleElement`-Objekt ist. Deshalb können Sie nicht schreiben: `document.title.text = "Hallo Welt!";`

Stattdessen können Sie einfach schreiben: `document.title = "Hallo Welt!";`, was gleichbedeutend ist mit `document.querySelector('title').text = "Hallo Welt!";`

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{ HTMLElement("title") }}.
