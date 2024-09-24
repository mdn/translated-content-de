---
title: aria-grabbed
slug: Web/Accessibility/ARIA/Attributes/aria-grabbed
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{AccessibilitySidebar}}

Der Zustand `aria-grabbed` zeigt den "gegriffenen" Zustand eines Elements in einer Drag-and-Drop-Operation an. {{deprecated_inline}}

## Beschreibung

Textauswahlen, Bilder und Links können standardmäßig gezogen werden. Durch Setzen des globalen [`draggable="true"`](/de/docs/Web/HTML/Global_attributes/draggable) Attributs, das Teil der HTML5 [Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) ist, zusammen mit einem [`dragstart` Event-Handler](/de/docs/Web/API/HTMLElement/dragstart_event), kann jedes DOM-Element ebenfalls ziehbar gemacht werden.

Das Attribut `aria-grabbed` wurde verwendet, um anzugeben, ob sich ein Element in einem "gegriffenen" Zustand bei einer Drag-and-Drop-Operation befindet, mit `aria-grabbed="true"`, oder ob das Element greifbar, aber derzeit nicht gegriffen ist, mit `aria-grabbed="false"`.

Das Setzen von `aria-grabbed="true"` zeigte an, dass das Element zum Ziehen ausgewählt wurde. Das Setzen von `aria-grabbed="false"` zeigte an, dass das Element für eine Drag-and-Drop-Operation gegriffen werden könnte, aber derzeit nicht gegriffen ist.

Wenn `aria-grabbed` auf `true` gesetzt ist, sollte das Attribut [`aria-dropeffect`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-dropeffect) aller potenziellen Zielbereiche mit der Art der Funktion oder Wirkung aktualisiert werden, die auf das gegriffene Element angewendet wird, wenn es fallen gelassen wird. Wenn kein Element sich in einem gegriffenen Zustand befindet, setzen Sie die `aria-dropeffect` Attribute aller Zielbereiche zurück.

Die `aria-grabbed` Eigenschaft soll in einer zukünftigen Version von WAI-ARIA durch eine neue Funktion ersetzt werden und gilt als veraltet.

> [!NOTE]
> ARIA ermöglicht keine zugängliche Funktionalität. ARIA vermittelt nur das beabsichtigte Verhalten Ihrer Funktionalität.

## Werte

- `true`
  - : Das Element wurde zum Ziehen ausgewählt.
- `false`
  - : Das Element ist derzeit nicht zum Ziehen ausgewählt, kann aber durch Setzen der Eigenschaft auf `true` verfügbar gemacht werden.
- `undefined` (Standard)
  - : Das Element unterstützt das Ziehen nicht.

## Zugehörige Rollen

Verwendet in **ALLEN** [Rollen](/de/docs/Web/Accessibility/ARIA/Roles)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-dropeffect`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-dropeffect)
- [HTML globales `draggable` Attribut](/de/docs/Web/HTML/Global_attributes/draggable)
- HTML [Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- {{domxref('dataTransfer')}}
- {{domxref('DataTransfer.dropEffect')}}
- {{domxref("HTMLElement/dragstart_event", "dragstart")}}
