---
title: HTML draggable global attribute
short-title: draggable
slug: Web/HTML/Reference/Global_attributes/draggable
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`draggable`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("Enumerated", "aufgezähltes")}} Attribut, das angibt, ob das Element gezogen werden kann, entweder mit dem nativen Browser-Verhalten oder der [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API).

Das `draggable` Attribut kann auf Elemente angewendet werden, die strikt unter den {{Glossary("Namespace", "HTML-Namespace")}} fallen, was bedeutet, dass es nicht auf [SVGs](/de/docs/Web/SVG) angewendet werden kann. Für weitere Informationen darüber, wie Namespace-Deklarationen aussehen und was sie bewirken, siehe [Namespace Crashkurs](/de/docs/Web/SVG/Guides/Namespaces_crash_course).

`draggable` kann die folgenden Werte haben:

- `true`: Das Element kann gezogen werden.
- `false`: Das Element kann nicht gezogen werden.

> [!WARNING]
> Dieses Attribut ist _{{Glossary("Enumerated", "aufgezählt")}}_ und nicht _Boolean_. Ein Wert von `true` oder `false` ist obligatorisch, und Abkürzungen wie `<img draggable>` sind verboten. Die korrekte Verwendung ist `<img draggable="true">`.

Wenn dieses Attribut nicht gesetzt ist, ist der Standardwert `auto`, was bedeutet, dass das Ziehverhalten das Standard-Browser-Verhalten ist: Nur Textauswahlen, Bilder und Links können gezogen werden. Für andere Elemente muss das Ereignis [`ondragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) gesetzt werden, damit Drag & Drop funktioniert, wie in diesem [umfassenden Beispiel](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations) gezeigt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
