---
title: "ARIA: aria-grabbed-Attribut"
short-title: aria-grabbed
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-grabbed
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Der `aria-grabbed`-Zustand zeigt den "gegriffenen" Zustand eines Elements in einer Drag-and-Drop-Operation an. {{deprecated_inline}}

## Beschreibung

Textauswahlen, Bilder und Links können standardmäßig gezogen werden. Durch Setzen des globalen [`draggable="true"`](/de/docs/Web/HTML/Reference/Global_attributes/draggable)-Attributs, Teil der HTML5 [Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API), zusammen mit einem [`dragstart` Event-Handler](/de/docs/Web/API/HTMLElement/dragstart_event), kann jedes DOM-Element ebenfalls als ziehbar gestaltet werden.

Das `aria-grabbed`-Attribut wurde verwendet, um anzuzeigen, ob sich ein Element in einem "gegriffenen" Zustand in einer Drag-and-Drop-Operation mit `aria-grabbed="true"` befindet oder ob das Element greifbar, aber derzeit nicht gegriffen ist, mit `aria-grabbed="false"`.

Das Setzen von `aria-grabbed="true"` zeigte an, dass das Element für das Ziehen ausgewählt wurde. Das Setzen von `aria-grabbed="false"` zeigte an, dass das Element für eine Drag-and-Drop-Operation gegriffen werden kann, aber derzeit nicht gegriffen ist.

Wenn `aria-grabbed` auf `true` gesetzt ist, sollte das [`aria-dropeffect`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-dropeffect)-Attribut aller potenziellen Ziele mit der Art der Funktion oder dem Effekt aktualisiert werden, der auf das gegriffene Element wirkt, wenn es fallen gelassen wird. Wenn sich kein Element in einem gegriffenen Zustand befindet, setzen Sie die `aria-dropeffect`-Attribute aller Ziele zurück.

Das `aria-grabbed`-Attribut wird voraussichtlich in einer zukünftigen Version von WAI-ARIA durch eine neue Funktion ersetzt und gilt als veraltet.

> [!NOTE]
> ARIA ermöglicht keine barrierefreie Funktionalität. ARIA vermittelt nur das beabsichtigte Verhalten Ihrer Funktionalität.

## Werte

- `true`
  - : Das Element wurde zum Ziehen ausgewählt.
- `false`
  - : Das Element ist derzeit nicht zum Ziehen ausgewählt, kann jedoch durch Setzen der Eigenschaft auf `true` zum Ziehen bereitgestellt werden.
- `undefined` (Standard)
  - : Das Element unterstützt das Ziehen nicht

## Zugehörige Rollen

Wird in **ALLEN** [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles) verwendet

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-dropeffect`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-dropeffect)
- [HTML globales `draggable`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/draggable)
- HTML [Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [`dataTransfer`](/de/docs/Web/API/DataTransfer)
- [`DataTransfer.dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)
- [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)
