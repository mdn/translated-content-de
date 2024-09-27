---
title: "Element: localName Eigenschaft"
short-title: localName
slug: Web/API/Element/localName
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`Element.localName`** gibt den lokalen Teil des qualifizierten Namens eines Elements zurück.

## Wert

Ein String, der den lokalen Teil des qualifizierten Namens des Elements darstellt.

## Beispiele

(Muss mit dem XML-Content-Typ bereitgestellt werden, wie `text/xml` oder
`application/xhtml+xml`.)

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

## Hinweise

Der lokale Name eines Knotens ist der Teil des qualifizierten Knotennamens, der hinter dem Doppelpunkt steht. Qualifizierte Namen werden typischerweise in XML als Teil der Namespace(s) der jeweiligen XML-Dokumente verwendet. Zum Beispiel ist in dem qualifizierten Namen `ecomm:partners` `partners` der lokale Name und `ecomm` das Präfix:

```xml
<ecomm:business id="soda_shop" type="brick_n_mortar" xmlns:ecomm="http://example.com/ecomm">
  <ecomm:partners>
    <ecomm:partner id="1001">Tony's Syrup Warehouse
    </ecomm:partner>
  </ecomm:partner>
</ecomm:business>
```

> [!NOTE]
> Während die Eigenschaft den Fall der internen DOM-Speicherung zurückgibt, die in Kleinbuchstaben erfolgt, gibt die [`tagName`](/de/docs/Web/API/Element/tagName) Eigenschaft Großbuchstaben für HTML-Elemente in HTML-DOMs zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.tagName`](/de/docs/Web/API/Element/tagName)
- [`Element.namespaceURI`](/de/docs/Web/API/Element/namespaceURI)
- [`Element.prefix`](/de/docs/Web/API/Element/prefix)
- [`Attr.localName`](/de/docs/Web/API/Attr/localName)
