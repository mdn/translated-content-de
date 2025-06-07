---
title: HTML-Attribut `draggable`
short-title: draggable
slug: Web/HTML/Reference/Global_attributes/draggable
l10n:
  sourceCommit: 7885271e36e9d2744296c01f400653f63caa6f75
---

{{HTMLSidebar("Global_attributes")}}

Das **`draggable`** [Globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("Enumerated", "enumerated")}} Attribut, das angibt, ob das Element gezogen werden kann, entweder mit dem nativen Browserverhalten oder der [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API).

Das `draggable`-Attribut kann auf Elemente angewendet werden, die strikt unter die {{Glossary("Namespace", "HTML-Namespace")}} fallen, was bedeutet, dass es nicht auf [SVGs](/de/docs/Web/SVG) angewendet werden kann. Für mehr Informationen darüber, wie Namespace-Deklarationen aussehen und was sie bewirken, siehe [Namespace-Leitfaden](/de/docs/Web/SVG/Guides/Namespaces_crash_course).

`draggable` kann folgende Werte annehmen:

- `true`: Das Element kann gezogen werden.
- `false`: Das Element kann nicht gezogen werden.

> [!WARNING]
> Dieses Attribut ist _{{Glossary("Enumerated", "enumerated")}}_ und nicht _Boolean_. Ein Wert von `true` oder `false` ist zwingend erforderlich, und Abkürzungen wie `<img draggable>` sind verboten. Die korrekte Verwendung ist `<img draggable="true">`.

Wenn dieses Attribut nicht gesetzt ist, ist der Standardwert `auto`, was bedeutet, dass das Ziehverhalten das Standardverhalten des Browsers ist: Nur Textauswahlen, Bilder und Links können gezogen werden. Für andere Elemente muss das Ereignis [`ondragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) gesetzt werden, damit Drag & Drop funktioniert, wie in diesem [umfassenden Beispiel](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations) gezeigt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
