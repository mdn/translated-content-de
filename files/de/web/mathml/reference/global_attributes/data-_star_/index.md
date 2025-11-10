---
title: data-*
slug: Web/MathML/Reference/Global_attributes/data-*
l10n:
  sourceCommit: 5f4ef6f614202ab1b748708d3e1d95e396f6ee63
---

Die **`data-*`** MathML-Attribute werden benutzerdefinierte Datenattribute genannt. Sie ermöglichen es, dass MathML-Markup und dessen resultierendes DOM Informationen austauschen, die Standardattribute nicht übermitteln können, normalerweise für Skriptzwecke. Ihre benutzerdefinierten Daten sind über das [`MathMLElement`](/de/docs/Web/API/MathMLElement)-Interface des Elements, zu dem die Attribute gehören, mit der [`MathMLElement.dataset`](/de/docs/Web/API/MathMLElement/dataset)-Eigenschaft verfügbar.

Das `*` kann durch beliebige Zeichen ersetzt werden, die in den [XML-Regeln für Namen](https://www.w3.org/TR/xml/#NT-Name) erlaubt sind, mit den folgenden Einschränkungen:

- Darf nicht mit `xml` beginnen.
- Keine Semikolons (`;`, `U+003A`).
- Keine Großbuchstaben `A` bis `Z`.

> [!NOTE]
> Die [`MathMLElement.dataset`](/de/docs/Web/API/MathMLElement/dataset)-Eigenschaft ist ein [`DOMStringMap`](/de/docs/Web/API/DOMStringMap), das das Attribut `data-test-value` über `MathMLElement.dataset.testValue` bereitstellt. Bindestriche (`-`, `U+002D`) werden entfernt und der folgende Buchstabe wird großgeschrieben, was zum {{Glossary("camel_case", "Camel Case")}}-Format führt.

Sie können dieses Attribut mit jedem MathML-Element verwenden.

## Beispiel

```html
<math>
  <msup data-formula="euler" data-value="-1">
    <mi>e</mi>
    <mrow><mi>i</mi> <mi>π</mi></mrow>
  </msup>
  <mo>+</mo>
  <mn>1</mn>
  <mo>=</mo>
  <mn>0</mn>
</math>
```

```js
const msupElement = document.querySelector("msup");
console.log(msupElement.dataset.formula); // "euler"
console.log(msupElement.dataset.value); // "-1"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MathMLElement`](/de/docs/Web/API/MathMLElement)
- Die [`MathMLElement.dataset`](/de/docs/Web/API/MathMLElement/dataset)-Eigenschaft, die zum Zugriff auf diese Attribute von Skripten verwendet wird.
- [Verwendung von Datenattributen](/de/docs/Web/HTML/How_to/Use_data_attributes)
