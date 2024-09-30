---
title: aria-grabbed
slug: Web/Accessibility/ARIA/Attributes/aria-grabbed
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{AccessibilitySidebar}}

Der `aria-grabbed`-Zustand zeigt an, ob sich ein Element in einem "gegriffenen" Zustand in einer Drag-and-Drop-Operation befindet. {{deprecated_inline}}

## Beschreibung

Textauswahlen, Bilder und Links können standardmäßig gezogen werden. Durch das Setzen des globalen [`draggable="true"`](/de/docs/Web/HTML/Global_attributes/draggable)-Attributs, das Teil der [Drag-and-Drop-API](/de/docs/Web/API/HTML_Drag_and_Drop_API) von HTML5 ist, mit einem [`dragstart`-Ereignishandler](/de/docs/Web/API/HTMLElement/dragstart_event), kann jeder DOM-Knoten ebenfalls ziehbar gemacht werden.

Das `aria-grabbed`-Attribut wurde verwendet, um anzuzeigen, ob sich ein Element in einem "gegriffenen" Zustand in einer Drag-and-Drop-Operation mit `aria-grabbed="true"` befindet oder ob das Element greifbar, aber nicht aktuell gegriffen ist, mit `aria-grabbed="false"`.

Das Setzen von `aria-grabbed="true"` zeigte an, dass das Element für das Ziehen ausgewählt wurde. Das Setzen von `aria-grabbed="false"` zeigte an, dass das Element für eine Drag-and-Drop-Operation gegriffen werden kann, aber aktuell nicht gegriffen ist.

Wenn `aria-grabbed` auf `true` gesetzt ist, sollte das [`aria-dropeffect`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-dropeffect)-Attribut aller potenziellen Zielobjekte mit der Art der Funktion oder dem Effekt aktualisiert werden, der auf das gegriffene Element angewendet wird, wenn es fallen gelassen wird. Wenn sich kein Element in einem gegriffenen Zustand befindet, setzen Sie die `aria-dropeffect`-Attribute aller Ihrer Zielobjekte zurück.

Es wird erwartet, dass die `aria-grabbed`-Eigenschaft in einer zukünftigen Version von WAI-ARIA durch eine neue Funktion ersetzt wird und sie gilt als veraltet.

> [!NOTE]
> ARIA ermöglicht keine zugängliche Funktionalität. ARIA vermittelt lediglich das beabsichtigte Verhalten Ihrer Funktionalität.

## Werte

- `true`
  - : Das Element wurde für das Ziehen ausgewählt.
- `false`
  - : Das Element ist derzeit nicht für das Ziehen ausgewählt, kann aber durch Setzen der Eigenschaft auf `true` verfügbar gemacht werden.
- `undefined` (Standard)
  - : Das Element unterstützt kein Ziehen

## Zugehörige Rollen

Wird in **ALLEN** [Rollen](/de/docs/Web/Accessibility/ARIA/Roles) verwendet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-dropeffect`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-dropeffect)
- [HTML globales `draggable`-Attribut](/de/docs/Web/HTML/Global_attributes/draggable)
- HTML [Drag-and-Drop-API](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [`dataTransfer`](/de/docs/Web/API/DataTransfer)
- [`DataTransfer.dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)
- [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)
