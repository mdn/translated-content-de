---
title: draggable
slug: Web/HTML/Global_attributes/draggable
l10n:
  sourceCommit: cf36049a15216e66b886083bd3e0704b7acd88cf
---

{{HTMLSidebar("Global_attributes")}}

Das **`draggable`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein {{Glossary("Enumerated", "aufzählbares")}} Attribut, das angibt, ob das Element entweder mit dem nativen Browserverhalten oder der [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) gezogen werden kann.

Das `draggable`-Attribut kann auf Elemente angewendet werden, die strenggenommen unter das {{Glossary("Namespace", "HTML-Namespace")}} fallen, was bedeutet, dass es nicht für [SVGs](/de/docs/Web/SVG) verwendet werden kann.
Für weitere Informationen darüber, wie Namespace-Deklarationen aussehen und was sie bewirken, siehe [Namespace-Leitfaden](/de/docs/Web/SVG/Namespaces_Crash_Course).

`draggable` kann die folgenden Werte haben:

- `true`: Das Element kann gezogen werden.
- `false`: Das Element kann nicht gezogen werden.

> [!WARNING]
> Dieses Attribut ist _{{Glossary("Enumerated", "aufzählbar")}}_ und nicht _Boolean_. Ein Wert von `true` oder `false` ist zwingend erforderlich, und Kurzformen wie `<img draggable>` sind verboten. Die korrekte Verwendung ist `<img draggable="true">`.

Wenn dieses Attribut nicht gesetzt ist, lautet sein Standardwert `auto`, was bedeutet, dass das Ziehverhalten dem Standardbrowserverhalten entspricht: Nur Textauswahlen, Bilder und Links können gezogen werden. Für andere Elemente muss das Ereignis [`ondragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) gesetzt werden, damit Drag and Drop funktioniert, wie in diesem [umfassenden Beispiel](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations) gezeigt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
