---
title: WindowProxy
slug: Glossary/WindowProxy
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Ein **`WindowProxy`** Objekt ist ein Wrapper für ein [`Window`](/de/docs/Web/API/Window) Objekt. Ein `WindowProxy` Objekt existiert in jedem [Browsing-Kontext](/de/docs/Glossary/browsing_context). Alle Operationen, die an einem `WindowProxy` Objekt ausgeführt werden, werden auch auf das zugrunde liegende `Window` Objekt angewendet, das es derzeit umschließt. Daher ist die Interaktion mit einem `WindowProxy` Objekt nahezu identisch mit der direkten Interaktion mit einem `Window` Objekt. Wenn ein Browsing-Kontext navigiert wird, ändert sich das `Window` Objekt, das der `WindowProxy` umhüllt.

## Siehe auch

- HTML-Spezifikation: [WindowProxy Abschnitt](https://html.spec.whatwg.org/multipage/window-object.html#the-windowproxy-exotic-object)
- Stack Overflow Frage: [WindowProxy und Window Objekte?](https://stackoverflow.com/questions/16092835/windowproxy-and-window-objects)
