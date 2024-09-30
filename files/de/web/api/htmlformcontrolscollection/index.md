---
title: HTMLFormControlsCollection
slug: Web/API/HTMLFormControlsCollection
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{APIRef("HTML DOM")}}

Die **`HTMLFormControlsCollection`**-Schnittstelle repräsentiert eine _Sammlung_ von HTML-Formularsteuerelementen, die durch die [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Schnittstelle über die [`elements`](/de/docs/Web/API/HTMLFormElement/elements)-Eigenschaft zurückgegeben wird.

Diese Schnittstelle ersetzt eine Methode der [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), auf der sie basiert.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt die Eigenschaften ihres Elternteils, [`HTMLCollection`](/de/docs/Web/API/HTMLCollection)._

## Instanz-Methoden

_Diese Schnittstelle erbt die Methoden ihres Elternteils, [`HTMLCollection`](/de/docs/Web/API/HTMLCollection)._

- [`HTMLFormControlsCollection.namedItem()`](/de/docs/Web/API/HTMLFormControlsCollection/namedItem)
  - : Gibt die [`RadioNodeList`](/de/docs/Web/API/RadioNodeList) oder das [`Element`](/de/docs/Web/API/Element) in der Sammlung zurück, dessen `name` oder `id` mit dem angegebenen Namen übereinstimmt, oder `null`, wenn keine Knoten übereinstimmen. Beachten Sie, dass diese Version von `namedItem()` die von [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) geerbte Methode verdeckt. Wie bei dieser Methode ist die Verwendung der JavaScript-Array-Klammer-Syntax mit einem {{jsxref("String")}}, wie in `collection["value"]`, äquivalent zu `collection.namedItem("value")`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), [`RadioNodeList`](/de/docs/Web/API/RadioNodeList), [`HTMLOptionsCollection`](/de/docs/Web/API/HTMLOptionsCollection)
