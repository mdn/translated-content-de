---
title: data-*
slug: Web/SVG/Reference/Attribute/data-*
l10n:
  sourceCommit: 9ac8d4f4ed0eb2f329e605329afeb51754c7fa79
---

Die **`data-*`** SVG-Attribute werden als benutzerdefinierte Datenattribute bezeichnet. Sie ermöglichen es, dass SVG-Markup und das daraus resultierende DOM Informationen austauschen, die Standardattribute nicht übertragen können, üblicherweise für Skripting-Zwecke. Ihre benutzerdefinierten Daten sind über die [`SVGElement`](/de/docs/Web/API/SVGElement) Schnittstelle des Elements, zu dem die Attribute gehören, mit der [`SVGElement.dataset`](/de/docs/Web/API/SVGElement/dataset) Eigenschaft verfügbar.

Das `*` kann durch beliebige Zeichen ersetzt werden, die in [XMLs Regeln für Namen](https://www.w3.org/TR/xml/#NT-Name) erlaubt sind, mit den folgenden Einschränkungen:

- Darf nicht mit `xml` beginnen.
- Keine Strichpunkte (`;`, `U+003A`).
- Keine Großbuchstaben von `A` bis `Z`.

> [!NOTE]
> Die [`SVGElement.dataset`](/de/docs/Web/API/SVGElement/dataset) Eigenschaft ist ein [`DOMStringMap`](/de/docs/Web/API/DOMStringMap), das das Attribut `data-test-value` über `SVGElement.dataset.testValue` bereitstellt. Bindestrich-Zeichen (`-`, `U+002D`) werden entfernt und der folgende Buchstabe wird großgeschrieben, was zu dem {{Glossary("camel_case", "Camel Case")}} Format führt.

Sie können dieses Attribut mit jedem SVG-Element verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGElement`](/de/docs/Web/API/SVGElement)
- Die [`SVGElement.dataset`](/de/docs/Web/API/SVGElement/dataset) Eigenschaft, die verwendet wird, um von Skripten aus auf diese Attribute zuzugreifen.
- [Verwendung von Datenattributen](/de/docs/Web/HTML/How_to/Use_data_attributes)
