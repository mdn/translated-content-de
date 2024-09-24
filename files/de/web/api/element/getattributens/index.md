---
title: "Element: Methode getAttributeNS()"
short-title: getAttributeNS()
slug: Web/API/Element/getAttributeNS
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("DOM")}}

Die **`getAttributeNS()`** Methode der {{domxref("Element")}}
Schnittstelle gibt den Zeichenfolgenwert des Attributs mit dem angegebenen Namensraum und
Namen zurück. Wenn das benannte Attribut nicht existiert, wird als Wert entweder
`null` oder `""` (die leere Zeichenkette) zurückgegeben; sehen Sie im Abschnitt [Hinweise](#hinweise)
nach Details.

Wenn Sie mit HTML-Dokumenten arbeiten und das angeforderte Attribut nicht als Teil eines spezifischen Namensraums angeben müssen, verwenden Sie stattdessen die Methode {{domxref("Element.getAttribute()", "getAttribute()")}}.

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
> Frühere Versionen der DOM-Spezifikation beschrieben
> diese Methode als Rückgabe einer leeren Zeichenkette für nicht existierende Attribute, aber sie
> wurde typischerweise nicht so implementiert, da null mehr Sinn ergibt. Die DOM4
> Spezifikation sagt nun, dass diese Methode für nicht existierende Attribute null zurückgeben sollte.

## Beispiele

Das folgende SVG-Dokument liest den Wert des `foo`-Attributs in einem
benutzerdefinierten Namensraum.

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

In einem HTML-Dokument muss auf das Attribut mit `test:foo` zugegriffen werden, da
Namensräume nicht unterstützt werden.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>getAttributeNS() Testseite</title>
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

`getAttributeNS()` unterscheidet sich von {{domxref("element.getAttribute()", "getAttribute()")}}
darin, dass Sie das angeforderte Attribut genauer als Teil eines bestimmten Namensraums angeben können, wie im obigen Beispiel, wo das Attribut
Teil des fiktiven "test"-Namensraums ist.

Vor der DOM4-Spezifikation war diese Methode so spezifiziert, dass sie eine leere Zeichenkette
anstatt null für nicht existierende Attribute zurückgibt. Die meisten Browser gaben jedoch stattdessen null zurück. Ab DOM4 sagt die Spezifikation nun, dass null zurückgegeben werden soll. Einige ältere
Browser geben jedoch eine leere Zeichenkette zurück. Aus diesem Grund sollten Sie
{{domxref("element.hasAttributeNS()", "hasAttributeNS()")}} verwenden, um die Existenz eines Attributs
zu überprüfen, bevor Sie `getAttributeNS()` aufrufen, falls das
angeforderte Attribut möglicherweise nicht auf dem angegebenen Element existiert.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Element.hasAttributeNS()")}}
- {{domxref("Element.setAttributeNS()")}}
- {{domxref("Element.removeAttributeNS()")}}
