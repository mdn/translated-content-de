---
title: aria-grabbed
slug: Web/Accessibility/ARIA/Attributes/aria-grabbed
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{AccessibilitySidebar}}

Der `aria-grabbed` Zustand zeigt den "ergriffenen" Zustand eines Elements in einer Drag-and-Drop-Operation an. {{deprecated_inline}}

## Beschreibung

Textauswahlen, Bilder und Links können standardmäßig gezogen werden. Durch Setzen des globalen Attributs [`draggable="true"`](/de/docs/Web/HTML/Global_attributes/draggable), Teil der HTML5 [Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API), zusammen mit einem [`dragstart` Ereignis-Handler](/de/docs/Web/API/HTMLElement/dragstart_event), kann jedes DOM-Knoten auch als ziehbar gemacht werden.

Das `aria-grabbed` Attribut wurde verwendet, um anzuzeigen, ob ein Element in einem "ergriffenen" Zustand in einer Drag-and-Drop-Operation mit `aria-grabbed="true"` ist, oder ob das Element greifbar, aber nicht aktuell ergriffen ist, mit `aria-grabbed="false"`.

Durch Setzen von `aria-grabbed="true"` wurde angezeigt, dass das Element für das Ziehen ausgewählt wurde. Das Setzen von `aria-grabbed="false"` zeigte an, dass das Element für eine Drag-and-Drop-Operation gegriffen werden konnte, aber derzeit nicht gegriffen ist.

Wenn `aria-grabbed` auf `true` gesetzt ist, sollte das [`aria-dropeffect`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-dropeffect) Attribut aller potenziellen Zielbereiche aktualisiert werden, mit der Art von Funktion oder Effekt, der auf das ergriffene Element ausgeführt wird, wenn es fallengelassen wird. Wenn sich kein Element in einem ergriffenen Zustand befindet, setzen Sie die `aria-dropeffect` Attribute aller Zielbereiche zurück.

Die `aria-grabbed` Eigenschaft soll in einer zukünftigen Version von WAI-ARIA durch eine neue Funktion ersetzt werden und gilt als veraltet.

> [!NOTE]
> ARIA ermöglicht keine barrierefreie Funktionalität. ARIA vermittelt nur das beabsichtigte Verhalten Ihrer Funktionalität.

## Werte

- `true`
  - : Das Element wurde zum Ziehen ausgewählt.
- `false`
  - : Das Element ist derzeit nicht zum Ziehen ausgewählt, kann aber durch Einstellen der Eigenschaft auf `true` zum Ziehen bereitgestellt werden.
- `undefined` (Standard)
  - : Das Element unterstützt das Ziehen nicht

## Zugehörige Rollen

Wird in **ALLEN** [Rollen](/de/docs/Web/Accessibility/ARIA/Roles) verwendet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-dropeffect`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-dropeffect)
- [HTML globales `draggable` Attribut](/de/docs/Web/HTML/Global_attributes/draggable)
- HTML [Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [`dataTransfer`](/de/docs/Web/API/DataTransfer)
- [`DataTransfer.dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)
- [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)
