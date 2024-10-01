---
title: Expando
slug: Glossary/Expando
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Expando-Eigenschaften sind Eigenschaften, die mit {{Glossary("JavaScript", "JavaScript")}} zu {{Glossary("DOM", "DOM")}}-Knoten hinzugefügt werden, wobei diese Eigenschaften nicht Teil der DOM-Spezifikation des {{Glossary("object", "Objekts")}} sind:

```js
window.document.foo = 5; // foo is an expando
```

Der Begriff kann auch auf Eigenschaften angewendet werden, die Objekten hinzugefügt werden, ohne die ursprüngliche Absicht des Objekts zu respektieren, wie z.B. nicht-numerische benannte Eigenschaften, die einem {{Glossary("Array", "Array")}} hinzugefügt werden.
