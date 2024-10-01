---
title: data-*
slug: Web/SVG/Attribute/data-*
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Die **`data-*`** SVG-Attribute werden als benutzerdefinierte Datenattribute bezeichnet. Sie ermöglichen es, dass SVG-Markup und das daraus resultierende DOM Informationen teilen, die Standardattribute nicht können, normalerweise zu Scripting-Zwecken. Ihre benutzerdefinierten Daten sind über das [`SVGElement`](/de/docs/Web/API/SVGElement)-Interface des Elements, zu dem die Attribute gehören, mit der [`SVGElement.dataset`](/de/docs/Web/API/SVGElement/dataset)-Eigenschaft verfügbar.

Das `*` kann durch beliebige Zeichen ersetzt werden, die in [XMLs Regeln für Namen](https://www.w3.org/TR/REC-xml/#NT-Name) erlaubt sind, mit den folgenden Einschränkungen:

- Darf nicht mit `xml` beginnen.
- Keine Semikolons (`;`, `U+003A`).
- Keine Großbuchstaben `A` bis `Z`.

> [!NOTE]
> Die [`SVGElement.dataset`](/de/docs/Web/API/SVGElement/dataset)-Eigenschaft ist ein [`DOMStringMap`](/de/docs/Web/API/DOMStringMap), das das Attribut `data-test-value` über `SVGElement.dataset.testValue` bereitstellt. Bindestrichzeichen (`-`, `U+002D`) werden entfernt und der nächste Buchstabe wird großgeschrieben, was zu {{Glossary("camel_case", "camel case")}} führt.

Sie können dieses Attribut mit jedem SVG-Element verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGElement`](/de/docs/Web/API/SVGElement)
- Die [`SVGElement.dataset`](/de/docs/Web/API/SVGElement/dataset)-Eigenschaft, die verwendet wird, um auf diese Attribute aus Skripten zuzugreifen.
- [Verwendung von Datenattributen](/de/docs/Learn/HTML/Howto/Use_data_attributes)
