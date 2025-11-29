---
title: "HTMLScriptElement: integrity-Eigenschaft"
short-title: integrity
slug: Web/API/HTMLScriptElement/integrity
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{APIRef("HTML DOM")}}

Die **`integrity`**-Eigenschaft der Schnittstelle [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement) ist ein String, der Inline-Metadaten enthält, die ein Browser verwenden kann, um zu überprüfen, dass eine abgerufene Ressource ohne unerwartete Manipulationen bereitgestellt wurde.

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
