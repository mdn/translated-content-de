---
title: draggable
slug: Web/HTML/Global_attributes/draggable
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{HTMLSidebar("Global_attributes")}}

Das **`draggable`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein {{Glossary("Enumerated", "aufzählbares")}} Attribut, das angibt, ob das Element gezogen werden kann, entweder mit dem nativen Browserverhalten oder der [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API).

Das `draggable`-Attribut kann auf Elemente angewendet werden, die streng genommen unter den {{Glossary("Namespace", "HTML-Namespace")}} fallen, was bedeutet, dass es nicht auf [SVGs](/de/docs/Web/SVG) angewendet werden kann. Für weitere Informationen darüber, wie Namespace-Deklarationen aussehen und was sie bewirken, siehe [Namespace-Crashkurs](/de/docs/Web/SVG/Guides/Namespaces_crash_course).

`draggable` kann die folgenden Werte haben:

- `true`: Das Element kann gezogen werden.
- `false`: Das Element kann nicht gezogen werden.

> [!WARNING]
> Dieses Attribut ist _{{Glossary("Enumerated", "aufzählbar")}}_ und nicht _Boolean_. Ein Wert von `true` oder `false` ist obligatorisch, und eine Abkürzung wie `<img draggable>` ist verboten. Die korrekte Verwendung ist `<img draggable="true">`.

Wenn dieses Attribut nicht gesetzt ist, ist sein Standardwert `auto`, was bedeutet, dass das Ziehverhalten das Standard-Browserverhalten ist: Nur Textauswahlen, Bilder und Links können gezogen werden. Bei anderen Elementen muss das Ereignis [`ondragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) gesetzt werden, damit Drag-and-Drop funktioniert, wie in diesem [umfassenden Beispiel](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations) gezeigt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
