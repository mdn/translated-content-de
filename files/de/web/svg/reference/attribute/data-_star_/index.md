---
title: data-*
slug: Web/SVG/Reference/Attribute/data-*
l10n:
  sourceCommit: cd701f10306c8b0b9690532ff808df826818a04f
---

Die **`data-*`** SVG-Attribute werden als benutzerdefinierte Datenattribute bezeichnet. Sie ermöglichen es, dass SVG-Markup und sein resultierendes DOM Informationen teilen, die Standardattribute nicht können, normalerweise für Scripting-Zwecke. Deren benutzerdefinierte Daten sind über das [`SVGElement`](/de/docs/Web/API/SVGElement)-Interface des Elements verfügbar, zu dem die Attribute gehören, mit der [`SVGElement.dataset`](/de/docs/Web/API/SVGElement/dataset)-Eigenschaft.

Das `*` kann durch beliebige Zeichen ersetzt werden, die in den [XML-Regeln für Namen](https://www.w3.org/TR/REC-xml/#NT-Name) erlaubt sind, mit den folgenden Einschränkungen:

- Darf nicht mit `xml` beginnen.
- Keine Semikolons (`;`, `U+003A`).
- Keine Großbuchstaben `A` bis `Z`.

> [!NOTE]
> Die [`SVGElement.dataset`](/de/docs/Web/API/SVGElement/dataset)-Eigenschaft ist ein [`DOMStringMap`](/de/docs/Web/API/DOMStringMap), das das Attribut `data-test-value` über `SVGElement.dataset.testValue` bereitstellt. Bindestrich-Zeichen (`-`, `U+002D`) werden entfernt und der nächste Buchstabe wird groß geschrieben, was zu einem {{Glossary("camel_case", "Camel Case")}}-Format führt.

Sie können dieses Attribut mit jedem SVG-Element verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGElement`](/de/docs/Web/API/SVGElement)
- Die [`SVGElement.dataset`](/de/docs/Web/API/SVGElement/dataset)-Eigenschaft, die verwendet wird, um von Skripten auf diese Attribute zuzugreifen.
- [Verwendung von Datenattributen](/de/docs/Web/HTML/How_to/Use_data_attributes)
