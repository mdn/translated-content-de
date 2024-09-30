---
title: HTMLDetailsElement
slug: Web/API/HTMLDetailsElement
l10n:
  sourceCommit: 52580e9f35f17e9973d798c8ad46a6ad756b18ec
---

{{APIRef("HTML DOM")}}

Die **`HTMLDetailsElement`**-Schnittstelle bietet spezielle Eigenschaften (zusätzlich zu den regulären Eigenschaften der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle, die sie durch Vererbung ebenfalls zur Verfügung hat) zum Manipulieren von {{HTMLElement("details")}}-Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLDetailsElement.name`](/de/docs/Web/API/HTMLDetailsElement/name)
  - : Ein String, der das [`name`](/de/docs/Web/HTML/Element/details#name)-HTML-Attribut widerspiegelt, welches es Ihnen ermöglicht, eine Gruppe von sich gegenseitig ausschließenden {{htmlelement("details")}}-Elementen zu erstellen. Das Öffnen eines der benannten `<details>`-Elemente dieser Gruppe bewirkt, dass andere Elemente der Gruppe geschlossen werden.
- [`HTMLDetailsElement.open`](/de/docs/Web/API/HTMLDetailsElement/open)
  - : Ein boolescher Wert, der das [`open`](/de/docs/Web/HTML/Element/details#open)-HTML-Attribut widerspiegelt und angibt, ob die Inhalte des Elements (außer dem {{HTMLElement("summary")}}) dem Benutzer angezeigt werden sollen oder nicht.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Ereignisse

Hören Sie auf dieses Ereignis mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener an die `oneventname`-Eigenschaft dieser Schnittstelle zuweisen.

- [`toggle`](/de/docs/Web/API/HTMLDetailsElement/toggle_event)
  - : Wird ausgelöst, wenn der `offen`/`geschlossen`-Zustand eines {{HtmlElement("details")}}-Elements umgeschaltet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("details")}}
