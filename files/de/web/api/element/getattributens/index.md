---
title: "Element: getAttributeNS()-Methode"
short-title: getAttributeNS()
slug: Web/API/Element/getAttributeNS
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef("DOM")}}

Die **`getAttributeNS()`**-Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces gibt den String-Wert des Attributs mit dem angegebenen Namensraum und Namen zurück. Wenn das benannte Attribut nicht existiert, wird der zurückgegebene Wert entweder `null` oder `""` (der leere String) sein; siehe [Hinweise](#hinweise) für Details.

Wenn Sie mit HTML-Dokumenten arbeiten und das angeforderte Attribut nicht als Teil eines bestimmten Namensraums angeben müssen, verwenden Sie stattdessen die [`getAttribute()`](/de/docs/Web/API/Element/getAttribute)-Methode.

## Syntax

```js-nolint
getAttributeNS(namespace, name)
```

### Parameter

- `namespace`
  - : Der Namensraum, in dem nach dem angegebenen Attribut gesucht werden soll.
- `name`
  - : Der Name des Attributs, nach dem gesucht werden soll.

### Rückgabewert

Der String-Wert des angegebenen Attributs. Wenn das Attribut nicht existiert, ist das Ergebnis `null`.

> [!NOTE]
> Frühere Versionen der DOM-Spezifikation beschrieben diese Methode als Rückgabe eines leeren Strings für nicht existierende Attribute, aber es wurde in der Regel nicht auf diese Weise implementiert, da `null` sinnvoller ist. Die DOM4-Spezifikation besagt nun, dass diese Methode `null` für nicht existierende Attribute zurückgeben soll.

## Beispiele

Das folgende SVG-Dokument liest den Wert des `foo`-Attributs in einem benutzerdefinierten Namensraum.

```xml
<svg xmlns="http://www.w3.org/2000/svg"
    xmlns:test="http://www.example.com/2014/test" width="40" height="40">

  <circle id="target" cx="12" cy="12" r="10" stroke="#444"
      stroke-width="2" fill="none" test:foo="Hello namespaced attribute!"/>

  <script>
    const ns = 'http://www.example.com/2014/test';
    const circle = document.getElementById('target');

    console.log(`attribute test:foo: "${circle.getAttributeNS(ns, 'foo')}"`);
  </script>
</svg>
```

In einem HTML-Dokument muss auf das Attribut mit `test:foo` zugegriffen werden, da Namensräume nicht unterstützt werden.

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
    stroke="#444"
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

## Hinweise

`getAttributeNS()` unterscheidet sich von [`getAttribute()`](/de/docs/Web/API/Element/getAttribute) dahingehend, dass es Ihnen erlaubt, das angeforderte Attribut weiter als Teil eines bestimmten Namensraums zu spezifizieren, wie im obigen Beispiel, in dem das Attribut Teil des fiktiven "test"-Namensraums ist.

Vor der DOM4-Spezifikation wurde festgelegt, dass diese Methode einen leeren String statt `null` für nicht existierende Attribute zurückgeben sollte. Die meisten Browser gaben jedoch stattdessen `null` zurück. Ab DOM4 besagt die Spezifikation nun, dass `null` zurückgegeben werden soll. Einige ältere Browser geben jedoch einen leeren String zurück. Aus diesem Grund sollten Sie [`hasAttributeNS()`](/de/docs/Web/API/Element/hasAttributeNS) verwenden, um das Vorhandensein eines Attributs zu überprüfen, bevor Sie `getAttributeNS()` aufrufen, falls es möglich ist, dass das angeforderte Attribut nicht auf dem angegebenen Element existiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.hasAttributeNS()`](/de/docs/Web/API/Element/hasAttributeNS)
- [`Element.setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS)
- [`Element.removeAttributeNS()`](/de/docs/Web/API/Element/removeAttributeNS)
