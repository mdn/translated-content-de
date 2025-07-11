---
title: Expando
slug: Glossary/Expando
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Expando-Eigenschaften sind Eigenschaften, die Knoten des {{Glossary("DOM", "DOM")}} mit {{Glossary("JavaScript", "JavaScript")}} hinzugefügt werden, wobei diese Eigenschaften nicht Teil der DOM-Spezifikation des {{Glossary("object", "Objekts")}} sind:

```js
window.document.foo = 5; // foo is an expando
```

Der Begriff kann auch auf Eigenschaften angewendet werden, die Objekten hinzugefügt werden, ohne den ursprünglichen Zweck des Objekts zu respektieren, wie z. B. nicht-numerische benannte Eigenschaften, die einem {{Glossary("Array", "Array")}} hinzugefügt werden.
