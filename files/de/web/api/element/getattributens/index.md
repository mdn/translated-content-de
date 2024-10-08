---
title: "Element: Methode getAttributeNS()"
short-title: getAttributeNS()
slug: Web/API/Element/getAttributeNS
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("DOM")}}

Die **`getAttributeNS()`**-Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces gibt den Zeichenfolgenwert des Attributs mit dem angegebenen Namensraum und Namen zurück. Wenn das benannte Attribut nicht existiert, wird entweder `null` oder `""` (die leere Zeichenkette) zurückgegeben; siehe [Hinweise](#hinweise) für Details.

Wenn Sie mit HTML-Dokumenten arbeiten und das angeforderte Attribut nicht als Teil eines bestimmten Namensraums spezifizieren müssen, verwenden Sie stattdessen die Methode [`getAttribute()`](/de/docs/Web/API/Element/getAttribute).

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

Der Zeichenfolgenwert des angegebenen Attributs. Wenn das Attribut nicht existiert, ist das Ergebnis `null`.

> [!NOTE]
> Frühere Versionen der DOM-Spezifikation beschrieben diese Methode als eine leere Zeichenkette für nicht existierende Attribute zurückzugeben, was jedoch normalerweise nicht so implementiert wurde, da `null` sinnvoller ist. Die DOM4-Spezifikation legt jetzt fest, dass diese Methode `null` für nicht existierende Attribute zurückgeben sollte.

## Beispiele

Das folgende SVG-Dokument liest den Wert des `foo`-Attributs in einem benutzerdefinierten Namensraum aus.

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
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>getAttributeNS() test page</title>
  </head>
  <body>
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

    <script>
      const ns = "http://www.example.com/2014/test";
      const circle = document.getElementById("target");
      console.log(`Attribute value: ${circle.getAttribute("test:foo")}`);
    </script>
  </body>
</html>
```

## Hinweise

`getAttributeNS()` unterscheidet sich von [`getAttribute()`](/de/docs/Web/API/Element/getAttribute), indem es Ihnen ermöglicht, das angeforderte Attribut weiter als Teil eines bestimmten Namensraums zu spezifizieren, wie im obigen Beispiel, wo das Attribut Teil des fiktiven "test"-Namensraums ist.

Vor der DOM4-Spezifikation war diese Methode so definiert, dass sie eine leere Zeichenkette anstelle von `null` für nicht existierende Attribute zurückgeben sollte. Die meisten Browser gaben jedoch stattdessen `null` zurück. Ab DOM4 gibt die Spezifikation nun an, `null` zurückzugeben. Einige ältere Browser geben jedoch eine leere Zeichenkette zurück. Aus diesem Grund sollten Sie [`hasAttributeNS()`](/de/docs/Web/API/Element/hasAttributeNS) verwenden, um die Existenz eines Attributs zu überprüfen, bevor Sie `getAttributeNS()` aufrufen, falls das angeforderte Attribut möglicherweise nicht auf dem angegebenen Element existiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.hasAttributeNS()`](/de/docs/Web/API/Element/hasAttributeNS)
- [`Element.setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS)
- [`Element.removeAttributeNS()`](/de/docs/Web/API/Element/removeAttributeNS)
