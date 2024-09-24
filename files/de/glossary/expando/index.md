---
title: Expando
slug: Glossary/Expando
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Expando-Eigenschaften sind Eigenschaften, die mit {{glossary("JavaScript")}} zu {{glossary("DOM")}}-Knoten hinzugefügt werden, wobei diese Eigenschaften nicht Teil der DOM-Spezifikation des {{glossary("object","Objekts")}} sind:

```js
window.document.foo = 5; // foo ist ein Expando
```

Der Begriff kann auch auf Eigenschaften angewendet werden, die Objekten hinzugefügt werden, ohne die ursprüngliche Absicht des Objekts zu berücksichtigen, wie zum Beispiel nicht-numerische benannte Eigenschaften, die zu einem {{glossary("Array")}} hinzugefügt werden.
