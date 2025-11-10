---
title: WindowProxy
slug: Glossary/WindowProxy
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein **`WindowProxy`**-Objekt ist ein Wrapper für ein [`Window`](/de/docs/Web/API/Window)-Objekt. Ein `WindowProxy`-Objekt existiert in jedem {{Glossary("browsing_context", "Browsing-Kontext")}}. Alle Operationen, die an einem `WindowProxy`-Objekt ausgeführt werden, werden auch auf das darunterliegende `Window`-Objekt angewendet, das es aktuell umschließt. Daher ist die Interaktion mit einem `WindowProxy`-Objekt fast identisch mit der direkten Interaktion mit einem `Window`-Objekt. Wenn ein Browsing-Kontext navigiert wird, ändert sich das `Window`-Objekt, das sein `WindowProxy` umschließt.

## Siehe auch

- HTML-Spezifikation: [WindowProxy-Abschnitt](https://html.spec.whatwg.org/multipage/window-object.html#the-windowproxy-exotic-object)
- Stack Overflow Frage: [WindowProxy und Window-Objekte?](https://stackoverflow.com/questions/16092835/windowproxy-and-window-objects)
