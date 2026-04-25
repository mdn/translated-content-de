---
title: "`draggable` HTML-Globalattribut"
short-title: draggable
slug: Web/HTML/Reference/Global_attributes/draggable
l10n:
  sourceCommit: 9c70c6ff09189cad43d40e241fbd2fe67349c3c2
---

Das **`draggable`** [Globalattribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("Enumerated", "aufzählbares")}} Attribut, das angibt, ob das Element entweder mit dem nativen Browserverhalten oder der [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) gezogen werden kann.

Das `draggable`-Attribut kann auf Elemente angewendet werden, die strikt unter die {{Glossary("Namespace", "HTML-Namespace")}} fallen, was bedeutet, dass es nicht auf [SVGs](/de/docs/Web/SVG) angewendet werden kann. Weitere Informationen darüber, wie Namespace-Deklarationen aussehen und was sie bewirken, finden Sie im [Namespace Crashkurs](/de/docs/Web/SVG/Guides/Namespaces_crash_course).

`draggable` kann die folgenden Werte haben:

- `true`: Das Element kann gezogen werden.
- `false`: Das Element kann nicht gezogen werden.

> [!WARNING]
> Dieses Attribut ist _{{Glossary("Enumerated", "aufzählbar")}}_ und nicht _Boolean_. Ein Wert von `true` oder `false` ist zwingend erforderlich, und eine Abkürzung wie `<img draggable>` ist verboten. Die korrekte Verwendung lautet `<img draggable="true">`.

Wenn dieses Attribut nicht gesetzt ist, hat es den Standardwert `auto`, was bedeutet, dass das Ziehverhalten das Standardverhalten des Browsers ist: Nur Textauswahlen, Bilder und Links können gezogen werden. Für andere Elemente muss das Ereignis [`ondragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) gesetzt werden, damit Drag-and-Drop funktioniert, wie in diesem [umfassenden Beispiel](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations) gezeigt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [Globalattribute](/de/docs/Web/HTML/Reference/Global_attributes).
