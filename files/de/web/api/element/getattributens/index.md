---
title: "Element: getAttributeNS()-Methode"
short-title: getAttributeNS()
slug: Web/API/Element/getAttributeNS
l10n:
  sourceCommit: f22f67069495dc37e550e354913d4ca984f5a4b0
---

{{APIRef("DOM")}}

Die **`getAttributeNS()`**-Methode der [`Element`](/de/docs/Web/API/Element)-Schnittstelle gibt den Zeichenfolgenwert des angegebenen Namespaced-Attributs des angegebenen Elements zurück. Sie gibt `null` zurück, wenn das Element kein Attribut mit dem angegebenen Namen im Namespace hat.

Wenn Sie mit HTML-Dokumenten arbeiten und Sie das angeforderte Attribut nicht als Teil eines bestimmten Namespaces angeben müssen, verwenden Sie stattdessen die [`getAttribute()`](/de/docs/Web/API/Element/getAttribute)-Methode.

## Syntax

```js-nolint
getAttributeNS(namespace, localName)
```

### Parameter

- `namespace`
  - : Ein String, der den Namespace des Attributs angibt, oder `null` für keinen expliziten Namespace.
- `localName`
  - : Ein String, der den Namen des Attributs angibt.

### Rückgabewert

Eine Zeichenfolge, die den Wert des Attributs enthält, oder `null`, wenn das Element kein Attribut mit dem angegebenen Namen hat.

## Beispiele

Das folgende SVG-Dokument liest den Wert des `foo`-Attributs in einem benutzerdefinierten Namespace.

```xml
<svg xmlns="http://www.w3.org/2000/svg"
    xmlns:test="http://www.example.com/2014/test" width="40" height="40">

  <circle id="target" cx="12" cy="12" r="10" stroke="#444444"
      stroke-width="2" fill="none" test:foo="Hello namespaced attribute!"/>

  <script>
    const ns = 'http://www.example.com/2014/test';
    const circle = document.getElementById('target');

    console.log(`attribute test:foo: "${circle.getAttributeNS(ns, 'foo')}"`);
  </script>
</svg>
```

In einem HTML-Dokument muss auf das Attribut mit `test:foo` zugegriffen werden, da Namespaces nicht unterstützt werden.

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:test="http://www.example.com/2014/test"
  width="40"
  height="40">
  <circle
    id="target"
    cx="12"
    cy="12"
    r="10"
    stroke="#444444"
    stroke-width="2"
    fill="none"
    test:foo="Foo value" />
</svg>
```

```js
const ns = "http://www.example.com/2014/test";
const circle = document.getElementById("target");
console.log(`Attribute value: ${circle.getAttribute("test:foo")}`);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.hasAttributeNS()`](/de/docs/Web/API/Element/hasAttributeNS)
- [`Element.setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS)
- [`Element.removeAttributeNS()`](/de/docs/Web/API/Element/removeAttributeNS)
