---
title: "Element: localName-Eigenschaft"
short-title: localName
slug: Web/API/Element/localName
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{APIRef("DOM")}}

Die nur-lesbare **`Element.localName`**-Eigenschaft gibt den lokalen Teil des qualifizierten Namens eines Elements zurück.

## Wert

Ein String, der den lokalen Teil des qualifizierten Namens des Elements darstellt.

## Beispiele

(Muss mit XML-Inhaltstypen wie `text/xml` oder `application/xhtml+xml` bereitgestellt werden.)

```xml
<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:svg="http://www.w3.org/2000/svg">
<head>
  <script><![CDATA[
  function test() {
    const text = document.getElementById('text');
    const circle = document.getElementById('circle');

    text.value = "<svg:circle> has:\n" +
                 "localName = '" + circle.localName + "'\n" +
                 "namespaceURI = '" + circle.namespaceURI + "'";
  }
  ]]></script>
</head>
<body onload="test()">
  <svg:svg version="1.1"
    width="100px" height="100px"
    viewBox="0 0 100 100">
    <svg:circle cx="50" cy="50" r="30" style="fill:#aaa" id="circle"/>
  </svg:svg>
  <textarea id="text" rows="4" cols="55"/>
</body>
</html>
```

## Hinweise

Der lokale Name eines Knotens ist derjenige Teil des qualifizierten Namens des Knotens, der hinter dem Doppelpunkt steht. Qualifizierte Namen werden typischerweise in XML als Teil des/der Namensräume der jeweiligen XML-Dokumente verwendet. Zum Beispiel ist in dem qualifizierten Namen `comm:partners` `partners` der lokale Name und `comm` das Präfix:

```xml
<comm:business id="soda_shop" type="brick_n_mortar" xmlns:comm="http://example.com/comm">
  <comm:partners>
    <comm:partner id="1001">Tony's Syrup Warehouse
    </comm:partner>
  </comm:partner>
</comm:business>
```

> [!NOTE]
> Auch wenn die Eigenschaft den Fall der internen DOM-Speicherung zurückgibt, die in Kleinbuchstaben erfolgt, beachten Sie, dass die [`tagName`](/de/docs/Web/API/Element/tagName) Eigenschaft Großbuchstaben für HTML-Elemente in HTML-DOMs zurückgibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.tagName`](/de/docs/Web/API/Element/tagName)
- [`Element.namespaceURI`](/de/docs/Web/API/Element/namespaceURI)
- [`Element.prefix`](/de/docs/Web/API/Element/prefix)
- [`Attr.localName`](/de/docs/Web/API/Attr/localName)
