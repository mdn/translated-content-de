---
title: StylePropertyMap
slug: Web/API/StylePropertyMap
l10n:
  sourceCommit: dd7010ad7ca5647b43f68b66578835b974bf4e70
---

{{APIRef("CSS Typed Object Model API")}}

Die **`StylePropertyMap`** Schnittstelle der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) bietet eine Darstellung eines CSS-Deklarationsblocks, der eine Alternative zu [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) darstellt.

{{InheritanceDiagram}}

> [!NOTE]
> Diese Schnittstelle ist nur im Fenster-Thread verfügbar; im Gegensatz zu anderen Schnittstellen in dieser API kann sie nicht in [`Worker`](/de/docs/Web/API/Worker) oder [`Worklet`](/de/docs/Web/API/Worklet) Kontexten verwendet werden.
> Worklets erhalten einen schreibgeschützten Schnappschuss des Stils eines Elements über [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly).

## Instanzeigenschaften

_Erbt auch Eigenschaften von ihrer übergeordneten Schnittstelle, [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly)._

## Instanzmethoden

_Erbt auch Methoden von ihrer übergeordneten Schnittstelle, [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly)._

- [`StylePropertyMap.append()`](/de/docs/Web/API/StylePropertyMap/append)
  - : Fügt dem `StylePropertyMap` eine neue CSS-Deklaration mit der angegebenen Eigenschaft und dem Wert hinzu.
- [`StylePropertyMap.clear()`](/de/docs/Web/API/StylePropertyMap/clear)
  - : Entfernt alle Deklarationen im `StylePropertyMap`.
- [`StylePropertyMap.delete()`](/de/docs/Web/API/StylePropertyMap/delete)
  - : Entfernt die CSS-Deklaration mit der angegebenen Eigenschaft.
- [`StylePropertyMap.set()`](/de/docs/Web/API/StylePropertyMap/set)
  - : Ändert die CSS-Deklaration mit der angegebenen Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
