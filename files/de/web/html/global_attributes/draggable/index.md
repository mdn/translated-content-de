---
title: draggable
slug: Web/HTML/Global_attributes/draggable
l10n:
  sourceCommit: 926f83641b980fcda58914649748b0368eeca1cd
---

{{HTMLSidebar("Global_attributes")}}

Das **`draggable`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein [aufzählbares](/de/docs/Glossary/Enumerated) Attribut, das angibt, ob das Element gezogen werden kann, entweder mit dem nativen Browser-Verhalten oder der [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API).

Das Attribut `draggable` kann auf Elemente angewendet werden, die streng genommen zum [HTML-Namespace](/de/docs/Glossary/Namespace) gehören, was bedeutet, dass es nicht auf [SVGs](/de/docs/Web/SVG) angewendet werden kann.
Für weitere Informationen darüber, wie Namespace-Deklarationen aussehen und was sie bewirken, siehe [Namespace Crashkurs](/de/docs/Web/SVG/Namespaces_Crash_Course).

`draggable` kann die folgenden Werte haben:

- `true`: Das Element kann gezogen werden.
- `false`: Das Element kann nicht gezogen werden.

> [!WARNING]
> Dieses Attribut ist _[aufzählbar](/de/docs/Glossary/Enumerated)_ und nicht _Boolean_. Ein Wert von `true` oder `false` ist zwingend erforderlich, und Kurzschreibweisen wie `<img draggable>` sind verboten. Die korrekte Verwendung ist `<img draggable="false">`.

Wenn dieses Attribut nicht gesetzt ist, ist sein Standardwert `auto`, was bedeutet, dass das Ziehverhalten das Standard-Browser-Verhalten ist: Nur Textauswahlen, Bilder und Links können gezogen werden. Für andere Elemente muss das Event [`ondragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) gesetzt werden, damit Ziehen und Ablegen funktioniert, wie in diesem [umfassenden Beispiel](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations) gezeigt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
