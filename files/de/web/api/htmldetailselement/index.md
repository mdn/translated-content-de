---
title: HTMLDetailsElement
slug: Web/API/HTMLDetailsElement
l10n:
  sourceCommit: 52580e9f35f17e9973d798c8ad46a6ad756b18ec
---

{{APIRef("HTML DOM")}}

Das **`HTMLDetailsElement`**-Interface bietet spezielle Eigenschaften (zusätzlich zu den regulären Eigenschaften, die es durch Vererbung von {{domxref("HTMLElement")}} hat) zur Manipulation von {{HTMLElement("details")}}-Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem übergeordneten Element, {{domxref("HTMLElement")}}._

- {{domxref("HTMLDetailsElement.name")}}
  - : Ein String, der das [`name`](/de/docs/Web/HTML/Element/details#name)-HTML-Attribut widerspiegelt, das es Ihnen ermöglicht, eine Gruppe von sich gegenseitig ausschließenden {{htmlelement("details")}}-Elementen zu erstellen. Das Öffnen eines der benannten `<details>`-Elemente dieser Gruppe führt dazu, dass andere Elemente der Gruppe geschlossen werden.
- {{domxref("HTMLDetailsElement.open")}}
  - : Ein boolescher Wert, der das [`open`](/de/docs/Web/HTML/Element/details#open)-HTML-Attribut widerspiegelt und angibt, ob der Inhalt des Elements (ohne Berücksichtigung des {{HTMLElement("summary")}}) dem Benutzer angezeigt werden soll oder nicht.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von seinem übergeordneten Element, {{domxref("HTMLElement")}}._

## Ereignisse

Hören Sie dieses Ereignis mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ab oder weisen Sie einen Ereignis-Listener der `oneventname`-Eigenschaft dieses Interfaces zu.

- [`toggle`](/de/docs/Web/API/HTMLDetailsElement/toggle_event)
  - : Wird ausgelöst, wenn der `offen`/`geschlossen`-Zustand eines {{HtmlElement("details")}}-Elements umgeschaltet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{HTMLElement("details")}}
