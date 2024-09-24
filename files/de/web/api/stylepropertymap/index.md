---
title: StylePropertyMap
slug: Web/API/StylePropertyMap
l10n:
  sourceCommit: 829720f86ce858b9bb8cbe7aa9e0bea148915f8c
---

{{APIRef("CSS Typed Object Model API")}}

Das **`StylePropertyMap`**-Interface der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model#css_typed_object_model) bietet eine Darstellung eines CSS-Deklarationsblocks, die eine Alternative zu {{DOMxRef("CSSStyleDeclaration")}} darstellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{DOMxRef("StylePropertyMapReadOnly")}}._

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, {{DOMxRef("StylePropertyMapReadOnly")}}._

- {{DOMxRef("StylePropertyMap.append()")}}
  - : Fügt eine neue CSS-Deklaration zum `StylePropertyMap` mit der gegebenen Eigenschaft und dem Wert hinzu.
- {{DOMxRef("StylePropertyMap.clear()")}}
  - : Entfernt alle Deklarationen im `StylePropertyMap`.
- {{DOMxRef("StylePropertyMap.delete()")}}
  - : Entfernt die CSS-Deklaration mit der gegebenen Eigenschaft.
- {{DOMxRef("StylePropertyMap.set()")}}
  - : Ändert die CSS-Deklaration mit der gegebenen Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
