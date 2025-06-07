---
title: data-*
slug: Web/SVG/Reference/Attribute/data-*
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

Die **`data-*`** SVG-Attribute werden als benutzerdefinierte Datenattribute bezeichnet. Sie ermöglichen es, dass SVG-Markup und das daraus resultierende DOM Informationen austauschen, die Standardattribute nicht können, in der Regel für Skriptzwecke. Ihre benutzerdefinierten Daten sind über die [`SVGElement`](/de/docs/Web/API/SVGElement)-Schnittstelle des Elements verfügbar, zu dem die Attribute gehören, mit der [`SVGElement.dataset`](/de/docs/Web/API/SVGElement/dataset)-Eigenschaft.

Das `*` kann durch beliebige Zeichen ersetzt werden, die in [XML-Regeln für Namen](https://www.w3.org/TR/xml/#NT-Name) erlaubt sind, mit den folgenden Einschränkungen:

- Darf nicht mit `xml` beginnen.
- Keine Semikolons (`;`, `U+003A`).
- Keine Großbuchstaben `A` bis `Z`.

> [!NOTE]
> Die [`SVGElement.dataset`](/de/docs/Web/API/SVGElement/dataset)-Eigenschaft ist ein [`DOMStringMap`](/de/docs/Web/API/DOMStringMap), die das Attribut `data-test-value` über `SVGElement.dataset.testValue` bereitstellt. Bindestrichzeichen (`-`, `U+002D`) werden entfernt, und der nächste Buchstabe wird großgeschrieben, was zu dem {{Glossary("camel_case", "camel case")}}-Format führt.

Sie können dieses Attribut mit jedem SVG-Element verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGElement`](/de/docs/Web/API/SVGElement)
- Die [`SVGElement.dataset`](/de/docs/Web/API/SVGElement/dataset)-Eigenschaft, die verwendet wird, um über Skripte auf diese Attribute zuzugreifen.
- [Verwendung von Datenattributen](/de/docs/Web/HTML/How_to/Use_data_attributes)
