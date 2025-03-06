---
title: aria-grabbed
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-grabbed
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Der `aria-grabbed` Zustand zeigt den "gegriffenen" Zustand eines Elements in einer Drag-and-Drop-Operation an. {{deprecated_inline}}

## Beschreibung

Textauswahl, Bilder und Links können standardmäßig gezogen werden. Durch Setzen des globalen [`draggable="true"`](/de/docs/Web/HTML/Global_attributes/draggable) Attributs, Teil der HTML5 [Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API), mit einem [`dragstart` Event-Handler](/de/docs/Web/API/HTMLElement/dragstart_event), kann jeder DOM-Knoten ebenfalls zum Ziehen gemacht werden.

Das Attribut `aria-grabbed` wurde verwendet, um anzugeben, ob sich ein Element in einem "gegriffenen" Zustand in einer Drag-and-Drop-Operation befindet (`aria-grabbed="true"`) oder ob das Element greifbar, aber derzeit nicht gegriffen ist (`aria-grabbed="false"`).

Das Setzen von `aria-grabbed="true"` zeigte an, dass das Element für das Ziehen ausgewählt wurde. Das Setzen von `aria-grabbed="false"` zeigte an, dass das Element für eine Drag-and-Drop-Operation gegriffen werden kann, aber derzeit nicht gegriffen ist.

Wenn `aria-grabbed` auf `true` gesetzt ist, sollte das [`aria-dropeffect`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-dropeffect) Attribut aller potenziellen Drop-Ziele mit der Art der Funktion oder dem Effekt aktualisiert werden, der auf das gegriffene Element angewendet wird, wenn es fallen gelassen wird. Wenn sich kein Element in einem gegriffenen Zustand befindet, setzen Sie die `aria-dropeffect` Attribute aller Ihrer Drop-Ziele zurück.

Es wird erwartet, dass die `aria-grabbed` Eigenschaft in einer zukünftigen Version von WAI-ARIA durch eine neue Funktion ersetzt wird und als veraltet gilt.

> [!NOTE]
> ARIA ermöglicht keine zugängliche Funktionalität. ARIA vermittelt nur das beabsichtigte Verhalten Ihrer Funktionalität.

## Werte

- `true`
  - : Das Element wurde zum Ziehen ausgewählt.
- `false`
  - : Das Element ist derzeit nicht zum Ziehen ausgewählt, kann aber durch Setzen der Eigenschaft auf `true` zum Ziehen bereitgestellt werden.
- `undefined` (Standard)
  - : Das Element unterstützt das Ziehen nicht

## Zugehörige Rollen

Verwendet in **ALLEN** [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-dropeffect`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-dropeffect)
- HTML globales `draggable` Attribut](/de/docs/Web/HTML/Global_attributes/draggable)
- HTML [Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [`dataTransfer`](/de/docs/Web/API/DataTransfer)
- [`DataTransfer.dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)
- [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)
