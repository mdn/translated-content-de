---
title: HTMLFormControlsCollection
slug: Web/API/HTMLFormControlsCollection
l10n:
  sourceCommit: 8626f2e444062fbbf08b8729ab4269cceaf7d1bd
---

{{APIRef("HTML DOM")}}

Das **`HTMLFormControlsCollection`**-Interface repräsentiert eine _Sammlung_ von HTML-_Formularsteuerelementen_, die durch die [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Schnittstelle über die [`elements`](/de/docs/Web/API/HTMLFormElement/elements)-Eigenschaft zurückgegeben wird.

Die durch [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements) zurückgegebene Sammlung umfasst die mit dem Formular assoziierten aufgeführten Formularsteuerungen. Siehe [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements) für die Liste der [aufgeführten Formularsteuerungen](/de/docs/Web/API/HTMLFormElement/elements#value) und eine Erklärung der [Formularassoziation](/de/docs/Web/API/HTMLFormElement/elements#associated_form_controls).

Dieses Interface ersetzt eine Methode von [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), auf dem es basiert.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt die Eigenschaften seines Elternteils, [`HTMLCollection`](/de/docs/Web/API/HTMLCollection)._

## Instanz-Methoden

_Dieses Interface erbt die Methoden seines Elternteils, [`HTMLCollection`](/de/docs/Web/API/HTMLCollection)._

- [`HTMLFormControlsCollection.namedItem()`](/de/docs/Web/API/HTMLFormControlsCollection/namedItem)
  - : Gibt die [`RadioNodeList`](/de/docs/Web/API/RadioNodeList) oder das [`Element`](/de/docs/Web/API/Element) in der Sammlung zurück, dessen `name` oder `id` mit dem angegebenen Namen übereinstimmt, oder `null`, wenn keine Knoten übereinstimmen. Beachten Sie, dass diese Version von `namedItem()` die von [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) geerbte Methode überdeckt. Ähnlich wie bei dieser Methode ist die Verwendung der JavaScript-Array-Klammer-Syntax mit einem {{jsxref("String")}}, wie in `collection["value"]`, äquivalent zu `collection.namedItem("value")`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), [`RadioNodeList`](/de/docs/Web/API/RadioNodeList), [`HTMLOptionsCollection`](/de/docs/Web/API/HTMLOptionsCollection)
