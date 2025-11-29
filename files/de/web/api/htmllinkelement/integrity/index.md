---
title: "HTMLLinkElement: integrity-Eigenschaft"
short-title: integrity
slug: Web/API/HTMLLinkElement/integrity
l10n:
  sourceCommit: 49d15be653576c5f73ec527ee976c5881171b53c
---

{{APIRef("HTML DOM")}}

Die **`integrity`**-Eigenschaft der [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)-Schnittstelle ist ein String, der Inline-Metadaten enthält, die ein Browser verwenden kann, um zu überprüfen, dass eine abgerufene Ressource ohne unerwartete Manipulation geliefert wurde.

Sie spiegelt das `integrity`-Attribut des {{HTMLElement("link")}}-Elements wider.

## Wert

Ein String.

## Beispiele

```html
<link
  id="el"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
  crossorigin="anonymous" />
```

```js
const el = document.getElementById("el");
console.log(el.integrity); // Output: "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLScriptElement.integrity`](/de/docs/Web/API/HTMLScriptElement/integrity)
- [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity)
