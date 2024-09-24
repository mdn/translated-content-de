---
title: data-*
slug: Web/SVG/Attribute/data-*
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Die **`data-*`** SVG-Attribute werden als benutzerdefinierte Datenattribute bezeichnet. Sie ermöglichen es, dass SVG-Markup und das daraus resultierende DOM Informationen austauschen, die durch Standardattribute nicht verfügbar sind, normalerweise für Scripting-Zwecke. Ihre benutzerdefinierten Daten sind über die {{domxref("SVGElement")}}-Schnittstelle des Elements, zu dem die Attribute gehören, mit der {{domxref("SVGElement.dataset")}}-Eigenschaft zugänglich.

Das `*` kann durch beliebige Zeichen ersetzt werden, die in [XMLs Regeln für Namen](https://www.w3.org/TR/REC-xml/#NT-Name) erlaubt sind, mit den folgenden Einschränkungen:

- Darf nicht mit `xml` beginnen.
- Keine Semikolons (`;`, `U+003A`).
- Keine Großbuchstaben von `A` bis `Z`.

> [!NOTE]
> Die {{domxref("SVGElement.dataset")}}-Eigenschaft ist ein {{domxref("DOMStringMap")}}, das das Attribut `data-test-value` über `SVGElement.dataset.testValue` bereitstellt. Bindestrichzeichen (`-`, `U+002D`) werden entfernt und der nächste Buchstabe wird großgeschrieben, was zu einem {{Glossary("camel_case", "Camel-Case")}}-Format führt.

Sie können dieses Attribut mit jedem SVG-Element verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("SVGElement")}}
- Die {{domxref("SVGElement.dataset")}}-Eigenschaft, die verwendet wird, um von Skripten aus auf diese Attribute zuzugreifen.
- [Verwendung von Datenattributen](/de/docs/Learn/HTML/Howto/Use_data_attributes)
