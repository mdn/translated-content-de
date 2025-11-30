---
title: "HTMLLinkElement: Integritätseigenschaft"
short-title: integrity
slug: Web/API/HTMLLinkElement/integrity
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("HTML DOM")}}

Die **`integrity`**-Eigenschaft des [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)-Interfaces ist ein String, der Inline-Metadaten enthält, die ein Browser verwenden kann, um zu überprüfen, dass ein abgerufenes Ressourcen ohne unerwartete Manipulation geliefert wurde.

Sie entspricht dem `integrity`-Attribut des {{HTMLElement("link")}}-Elements.

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
