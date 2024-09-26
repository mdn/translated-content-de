---
title: draggable
slug: Web/HTML/Global_attributes/draggable
l10n:
  sourceCommit: 926f83641b980fcda58914649748b0368eeca1cd
---

{{HTMLSidebar("Global_attributes")}}

Das **`draggable`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein [aufgezähltes](/de/docs/Glossary/Enumerated) Attribut, das angibt, ob das Element entweder mit nativem Browserverhalten oder der [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) gezogen werden kann.

Das `draggable`-Attribut kann auf Elemente angewendet werden, die strikt unter den [HTML-Namespace](/de/docs/Glossary/Namespace) fallen, was bedeutet, dass es nicht auf [SVGs](/de/docs/Web/SVG) angewendet werden kann.
Für weitere Informationen darüber, wie Namespace-Deklarationen aussehen und was sie bewirken, siehe [Namespace-Crash-Kurs](/de/docs/Web/SVG/Namespaces_Crash_Course).

`draggable` kann die folgenden Werte haben:

- `true`: das Element kann gezogen werden.
- `false`: das Element kann nicht gezogen werden.

> [!WARNING]
> Dieses Attribut ist _[aufgezählt](/de/docs/Glossary/Enumerated)_ und nicht _Boolean_. Ein Wert von `true` oder `false` ist zwingend erforderlich, und eine Abkürzung wie `<img draggable>` ist verboten. Die korrekte Verwendung ist `<img draggable="false">`.

Wenn dieses Attribut nicht gesetzt ist, ist der Standardwert `auto`, was bedeutet, dass das Ziehverhalten das standardmäßige Browserverhalten ist: Nur Textauswahlen, Bilder und Links können gezogen werden. Für andere Elemente muss das Ereignis {{domxref('HTMLElement.dragstart_event', 'ondragstart')}} gesetzt sein, damit Drag-and-Drop funktioniert, wie in diesem [umfassenden Beispiel](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations) gezeigt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).