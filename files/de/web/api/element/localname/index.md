---
title: "Element: localName-Eigenschaft"
short-title: localName
slug: Web/API/Element/localName
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("DOM")}}

Die schreibgeschützte **`Element.localName`**-Eigenschaft gibt den lokalen Teil des qualifizierten Namens eines Elements zurück.

## Wert

Ein String, der den lokalen Teil des qualifizierten Namens des Elements darstellt.

## Beispiele

(Muss mit XML-Inhaltstyp serviert werden, wie `text/xml` oder `application/xhtml+xml`.)

```xml
<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:svg="http://www.w3.org/2000/svg">
<head>
  <script type="application/javascript"><![CDATA[
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

## Anmerkungen

Der lokale Name eines Knotens ist der Teil des qualifizierten Namens des Knotens, der nach dem Doppelpunkt kommt. Qualifizierte Namen werden typischerweise in XML als Teil der Namespaces der jeweiligen XML-Dokumente verwendet. Zum Beispiel ist in dem qualifizierten Namen `ecomm:partners` `partners` der lokale Name und `ecomm` ist das Präfix:

```xml
<ecomm:business id="soda_shop" type="brick_n_mortar" xmlns:ecomm="http://example.com/ecomm">
  <ecomm:partners>
    <ecomm:partner id="1001">Tony's Syrup Warehouse
    </ecomm:partner>
  </ecomm:partners>
</ecomm:business>
```

> [!NOTE]
> Während die Eigenschaft den Fall der internen DOM-Speicherung zurückgibt, die kleingeschrieben ist, beachten Sie, dass die {{domxref("element.tagName","tagName")}}-Eigenschaft Großbuchstaben für HTML-Elemente in HTML-DOMs zurückgibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Element.tagName")}}
- {{domxref("Element.namespaceURI")}}
- {{domxref("Element.prefix")}}
- {{domxref("Attr.localName")}}
