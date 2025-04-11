---
title: aria-grabbed
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-grabbed
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Der `aria-grabbed`-Zustand zeigt den "gegriffenen" Zustand eines Elements in einer Drag-and-Drop-Operation an. {{deprecated_inline}}

## Beschreibung

Textauswahlen, Bilder und Links können standardmäßig gezogen werden. Durch das Setzen des globalen [`draggable="true"`](/de/docs/Web/HTML/Reference/Global_attributes/draggable)-Attributs, Teil der HTML5 [Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API), mit einem [`dragstart`-Ereignis-Handler](/de/docs/Web/API/HTMLElement/dragstart_event), kann auch jeder DOM-Knoten ziehbar gemacht werden.

Das `aria-grabbed` Attribut wurde verwendet, um anzuzeigen, ob sich ein Element in einem "gegriffenen" Zustand in einer Drag-and-Drop-Operation mit `aria-grabbed="true"` befindet oder ob das Element greifbar, aber momentan nicht gegriffen ist mit `aria-grabbed="false"`.

Das Setzen von `aria-grabbed="true"` zeigte an, dass das Element für das Ziehen ausgewählt wurde. Das Setzen von `aria-grabbed="false"` zeigte an, dass das Element für eine Drag-and-Drop-Operation gegriffen werden kann, aber momentan nicht gegriffen ist.

Wenn `aria-grabbed` auf `true` gesetzt ist, sollte das [`aria-dropeffect`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-dropeffect)-Attribut aller potenziellen Ziehziele mit der Art der Funktion oder des Effekts, die auf das gegriffene Element beim Ablegen angewendet wird, aktualisiert werden. Wenn kein Element im gegriffenen Zustand ist, setzen Sie die `aria-dropeffect`-Attribute aller Ziehziele zurück.

Es wird erwartet, dass die `aria-grabbed` Eigenschaft in einer zukünftigen Version von WAI-ARIA durch ein neues Feature ersetzt wird und wird als veraltet betrachtet.

> [!NOTE]
> ARIA ermöglicht keine barrierefreie Funktionalität. ARIA vermittelt lediglich das beabsichtigte Verhalten Ihrer Funktionalität.

## Werte

- `true`
  - : Das Element wurde für das Ziehen ausgewählt.
- `false`
  - : Das Element ist momentan nicht für das Ziehen ausgewählt, kann aber durch Setzen der Eigenschaft auf `true` verfügbar gemacht werden.
- `undefined` (Standard)
  - : Das Element unterstützt das Ziehen nicht

## Zugehörige Rollen

Wird in **ALLEN** [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles) verwendet

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-dropeffect`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-dropeffect)
- [HTML globales `draggable` Attribut](/de/docs/Web/HTML/Reference/Global_attributes/draggable)
- HTML [Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [`dataTransfer`](/de/docs/Web/API/DataTransfer)
- [`DataTransfer.dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)
- [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)
