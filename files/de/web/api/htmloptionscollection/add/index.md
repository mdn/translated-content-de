---
title: "HTMLOptionsCollection: add() Methode"
short-title: add()
slug: Web/API/HTMLOptionsCollection/add
l10n:
  sourceCommit: a5e089d79bf681e27fc6bdb9e4026b2489ffa4d9
---

{{APIRef("HTML DOM")}}

Die **`add()`** Methode des [`HTMLOptionsCollection`](/de/docs/Web/API/HTMLOptionsCollection)-Interfaces fügt ein [`HTMLOptionElement`](/de/docs/Web/API/HTMLOptionElement) oder ein [`HTMLOptGroupElement`](/de/docs/Web/API/HTMLOptGroupElement) zu dieser `HTMLOptionsCollection` hinzu.

## Syntax

```js-nolint
add(item)
add(item, before)
```

### Parameter

- `item`
  - : Ein [`HTMLOptionElement`](/de/docs/Web/API/HTMLOptionElement) oder [`HTMLOptGroupElement`](/de/docs/Web/API/HTMLOptGroupElement).
- `before` {{optional_inline}}
  - : Ein Element der Sammlung oder ein numerischer, nullbasierter Index, der das Element darstellt, vor dem das `item` eingefügt werden soll. Wenn dieser Parameter weggelassen oder `null` ist oder der Index nicht existiert, wird das neue Element am Ende der Sammlung hinzugefügt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Tritt auf, wenn das an die Methode übergebene `item` ein Vorfahre des Elements ist, in das es eingefügt werden soll.

## Beschreibung

Standardmäßig fügt `add()` das übergebene {{HTMLelement("option")}} oder {{HTMLelement("optgroup")}} als Parameter am Ende der Sammlung hinzu. Sie können definieren, wo das hinzugefügte `<option>` oder `<optgroup>` platziert werden soll, indem Sie den `before` Parameter angeben. Der `before` Parameter ist das `<option>`-Element oder ein numerischer `0`-basierter Index des `<option>`-Elements, dem das hinzugefügte Element vorausgehen soll.

Wenn der `before` Parameter null oder außerhalb des gültigen Bereichs ist (oder weggelassen wird), wird das `<option>` oder `<optgroup>` als letztes Element der Sammlung hinzugefügt, außerhalb eines {{HTMLelement("optgroup")}}. Wenn sich das `<option>`, auf das der `before` Parameter verweist, in einem {{HTMLelement("optgroup")}} befindet, wird ein hinzugefügtes `HTMLOptionElement` in derselben Gruppe sein.

Das `<optgroup>` Element kann nur `<option>` Elemente als Kindknoten enthalten. Die `add()` Methode fügt erfolgreich ein `HTMLOptGroupElement` am Ende der `HTMLOptionsCollection` oder zwischen `<optgroup>` Elementen hinzu. Mit anderen Worten: der Versuch, ein `HTMLOptGroupElement` vor ein `<option>` innerhalb eines `<optgroup>` hinzuzufügen, kann stillschweigend fehlschlagen, wenn das `<option>`, auf das der `before` Parameter verweist, nicht das erste `<option>` innerhalb seines `<optgroup>` ist.

## Beispiele

```js
const optionList = document.querySelector("select").options;
const firstOption = document.createElement("option");
firstOption.text = "new item";
optionList.add(firstOption, 0); // added as the first item
optionList.add(optionList[0]); // moves the first item to the end
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("select")}}
- [`HTMLOptionsCollection.remove`](/de/docs/Web/API/HTMLOptionsCollection/remove)
- [`HTMLOptionsCollection.length`](/de/docs/Web/API/HTMLOptionsCollection/length)
- [`HTMLOptionsCollection.selectedIndex`](/de/docs/Web/API/HTMLOptionsCollection/selectedIndex)
