---
title: "Element: getAttributeNS() Methode"
short-title: getAttributeNS()
slug: Web/API/Element/getAttributeNS
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{APIRef("DOM")}}

Die **`getAttributeNS()`** Methode des [`Element`](/de/docs/Web/API/Element)
Interfaces gibt den String-Wert des Attributs mit dem angegebenen Namensraum und Namen zurück. Wenn das benannte Attribut nicht existiert, wird entweder `null` oder `""` (der leere String) zurückgegeben; siehe [Hinweise](#hinweise) für Details.

Wenn Sie mit HTML-Dokumenten arbeiten und das angeforderte Attribut nicht explizit als Teil eines bestimmten Namensraums angeben müssen, verwenden Sie stattdessen die [`getAttribute()`](/de/docs/Web/API/Element/getAttribute) Methode.

## Syntax

```js-nolint
getAttributeNS(namespace, name)
```

### Parameter

- `namespace`
  - : Der Namensraum, in dem nach dem angegebenen Attribut gesucht werden soll.
- `name`
  - : Der Name des zu suchenden Attributs.

### Rückgabewert

Der String-Wert des angegebenen Attributs. Wenn das Attribut nicht existiert, ist das Ergebnis `null`.

> [!NOTE]
> Frühere Versionen der DOM-Spezifikation beschrieben diese Methode als eine leere Zeichenkette für nicht existierende Attribute zurückzugeben, aber es wurde typischerweise nicht so implementiert, da null sinnvoller ist. Die DOM4-Spezifikation sagt jetzt, dass diese Methode null für nicht existierende Attribute zurückgeben sollte.

## Beispiele

Das folgende SVG-Dokument liest den Wert des `foo` Attributs in einem benutzerdefinierten Namensraum.

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

## Hinweise

`getAttributeNS()` unterscheidet sich von [`getAttribute()`](/de/docs/Web/API/Element/getAttribute)
darin, dass Sie das angeforderte Attribut weiter als Teil eines bestimmten Namensraums angeben können, wie im obigen Beispiel, wo das Attribut Teil des fiktiven "test" Namensraums ist.

Vor der DOM4-Spezifikation war diese Methode so spezifiziert, dass sie eine leere Zeichenkette anstelle von null für nicht existierende Attribute zurückgab. Die meisten Browser gaben jedoch stattdessen null zurück. Ab DOM4 sagt die Spezifikation nun, dass null zurückgegeben werden soll. Einige ältere Browser geben jedoch eine leere Zeichenkette zurück. Aus diesem Grund sollten Sie [`hasAttributeNS()`](/de/docs/Web/API/Element/hasAttributeNS) verwenden, um die Existenz eines Attributs zu überprüfen, bevor Sie `getAttributeNS()` aufrufen, wenn es möglich ist, dass das angeforderte Attribut auf dem angegebenen Element nicht existiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.hasAttributeNS()`](/de/docs/Web/API/Element/hasAttributeNS)
- [`Element.setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS)
- [`Element.removeAttributeNS()`](/de/docs/Web/API/Element/removeAttributeNS)
