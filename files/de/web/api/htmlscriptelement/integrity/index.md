---
title: "HTMLScriptElement: integrity-Eigenschaft"
short-title: integrity
slug: Web/API/HTMLScriptElement/integrity
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("HTML DOM")}}

Die **`integrity`**-Eigenschaft des [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Interfaces ist ein String, der Metadaten enthält, die ein Browser verwenden kann, um zu überprüfen, ob eine abgerufene Ressource ohne unerwartete Manipulation geliefert wurde.

Sie spiegelt das `integrity`-Attribut des {{HTMLElement("script")}}-Elements wider.

## Wert

Ein String.

## Beispiele

```html
<script
  id="el"
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

```js
const el = document.getElementById("el");
console.log(el.integrity); // Output: "sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLLinkElement.integrity`](/de/docs/Web/API/HTMLLinkElement/integrity)
- [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity)
