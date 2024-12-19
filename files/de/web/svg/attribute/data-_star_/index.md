---
title: data-*
slug: Web/SVG/Attribute/data-*
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{SVGRef}}

Die **`data-*`** SVG-Attribute werden als benutzerdefinierte Datenattribute bezeichnet. Sie ermöglichen es, dass SVG-Markup und das resultierende DOM Informationen teilen, die Standardattribute nicht können, in der Regel für Skriptzwecke. Ihre benutzerdefinierten Daten sind über die [`SVGElement`](/de/docs/Web/API/SVGElement) Schnittstelle des Elements zugänglich, zu dem die Attribute gehören, mit der [`SVGElement.dataset`](/de/docs/Web/API/SVGElement/dataset) Eigenschaft.

Das `*` kann durch beliebige Zeichen ersetzt werden, die in [XMLs Regeln für Namen](https://www.w3.org/TR/REC-xml/#NT-Name) erlaubt sind, mit den folgenden Einschränkungen:

- Darf nicht mit `xml` beginnen.
- Keine Semikolons (`;`, `U+003A`).
- Keine Großbuchstaben `A` bis `Z`.

> [!NOTE]
> Die [`SVGElement.dataset`](/de/docs/Web/API/SVGElement/dataset) Eigenschaft ist ein [`DOMStringMap`](/de/docs/Web/API/DOMStringMap), das das Attribut `data-test-value` über `SVGElement.dataset.testValue` bereitstellt. Bindestriche (`-`, `U+002D`) werden entfernt und der nächste Buchstabe wird großgeschrieben, was zu dem {{Glossary("camel_case", "Camel Case")}}-Format führt.

Sie können dieses Attribut mit jedem SVG-Element verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGElement`](/de/docs/Web/API/SVGElement)
- Die [`SVGElement.dataset`](/de/docs/Web/API/SVGElement/dataset) Eigenschaft, die verwendet wird, um auf diese Attribute aus Skripten zuzugreifen.
- [Verwendung von Datenattributen](/de/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes)
