---
title: data-*
slug: Web/SVG/Reference/Attribute/data-*
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Die **`data-*`** SVG-Attribute werden als benutzerdefinierte Datenattribute bezeichnet. Sie ermöglichen es SVG-Markup und dem resultierenden DOM, Informationen zu teilen, die standardmäßige Attribute nicht können, normalerweise für Skriptzwecke. Ihre benutzerdefinierten Daten sind über die [`SVGElement`](/de/docs/Web/API/SVGElement)-Schnittstelle des Elements, zu dem die Attribute gehören, mit der [`SVGElement.dataset`](/de/docs/Web/API/SVGElement/dataset)-Eigenschaft verfügbar.

Das `*` kann durch beliebige Zeichen ersetzt werden, die in [XML-Regeln für Namen](https://www.w3.org/TR/REC-xml/#NT-Name) erlaubt sind, mit den folgenden Einschränkungen:

- Darf nicht mit `xml` beginnen.
- Keine Semikolons (`;`, `U+003A`).
- Keine Großbuchstaben von `A` bis `Z`.

> [!NOTE]
> Die [`SVGElement.dataset`](/de/docs/Web/API/SVGElement/dataset)-Eigenschaft ist ein [`DOMStringMap`](/de/docs/Web/API/DOMStringMap), die das Attribut `data-test-value` über `SVGElement.dataset.testValue` zur Verfügung stellt. Bindestrichzeichen (`-`, `U+002D`) werden entfernt und der nächste Buchstabe wird großgeschrieben, was zum {{Glossary("camel_case", "Camel Case")}}-Format führt.

Sie können dieses Attribut mit jedem SVG-Element verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGElement`](/de/docs/Web/API/SVGElement)
- Die [`SVGElement.dataset`](/de/docs/Web/API/SVGElement/dataset)-Eigenschaft, die verwendet wird, um von Skripten aus auf diese Attribute zuzugreifen.
- [Verwendung von Datenattributen](/de/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes)
