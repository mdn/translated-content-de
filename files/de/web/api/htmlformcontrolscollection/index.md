---
title: HTMLFormControlsCollection
slug: Web/API/HTMLFormControlsCollection
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{APIRef("HTML DOM")}}

Die **`HTMLFormControlsCollection`**-Schnittstelle stellt eine _Sammlung_ von HTML-Formularsteuerelementen dar, die durch die `{{domxref("HTMLFormElement")}}` Schnittstelle über die `{{domxref("HTMLFormElement.elements", "elements")}}` Eigenschaft zurückgegeben werden.

Diese Schnittstelle ersetzt eine Methode von der `{{domxref("HTMLCollection")}}`, auf der sie basiert.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt die Eigenschaften ihres Elternteils, `{{domxref("HTMLCollection")}}`._

## Instanz-Methoden

_Diese Schnittstelle erbt die Methoden ihres Elternteils, `{{domxref("HTMLCollection")}}`._

- `{{domxref("HTMLFormControlsCollection.namedItem()")}}`
  - : Gibt die `{{domxref("RadioNodeList")}}` oder das `{{domxref("Element")}}` in der Sammlung zurück, dessen `name` oder `id` mit dem angegebenen Namen übereinstimmt, oder `null`, wenn keine Knoten übereinstimmen. Beachten Sie, dass diese Version von `namedItem()` die von `{{domxref("HTMLCollection")}}` geerbte Methode verdeckt. Ähnlich wie bei dieser Methode ist die Verwendung der JavaScript-Array-Klammer-Syntax mit einem `{{jsxref("String")}}`, wie in `collection["value"]`, äquivalent zu `collection.namedItem("value")`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- `{{domxref("HTMLCollection")}}`, `{{domxref("RadioNodeList")}}`, `{{domxref("HTMLOptionsCollection")}}`
