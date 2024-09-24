---
title: "HTMLScriptElement: Integritäts-Eigenschaft"
short-title: Integrität
slug: Web/API/HTMLScriptElement/integrity
l10n:
  sourceCommit: 49d15be653576c5f73ec527ee976c5881171b53c
---

{{APIRef("HTML DOM")}}

Die **`integrity`**-Eigenschaft der {{domxref("HTMLScriptElement")}}-Schnittstelle ist ein String, der Inline-Metadaten enthält, die ein Browser verwenden kann, um zu überprüfen, ob eine abgerufene Ressource ohne unerwartete Manipulation geliefert wurde.

Sie spiegelt das `integrity`-Attribut des {{HTMLElement("script")}}-Elements wider.

## Wert

Ein String.

## Beispiele

```html
<script
  id="el"
  src="https://example.com/example-framework.js"
  type="text/javascript"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

```js
const el = document.getElementById("el");
console.log(el.integrity); // Ausgabe: "sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLLinkElement.integrity")}}
- [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity)
