---
title: Expando
slug: Glossary/Expando
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Expando-Eigenschaften sind Eigenschaften, die zu [DOM](/de/docs/Glossary/DOM)-Knoten mit [JavaScript](/de/docs/Glossary/JavaScript) hinzugefügt werden, wobei diese Eigenschaften nicht Teil der DOM-Spezifikation des [Objekts](/de/docs/Glossary/object) sind:

```js
window.document.foo = 5; // foo is an expando
```

Der Begriff kann auch auf Eigenschaften angewendet werden, die Objekten hinzugefügt werden, ohne die ursprüngliche Absicht des Objekts zu berücksichtigen, wie z. B. nicht-numerische benannte Eigenschaften, die einem [Array](/de/docs/Glossary/Array) hinzugefügt werden.
