---
title: Map.groupBy()
slug: Web/JavaScript/Reference/Global_Objects/Map/groupBy
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

> [!NOTE]
> In einigen Versionen einiger Browser wurde diese Methode als `Array.prototype.groupToMap()` implementiert. Aufgrund von Web-Kompatibilitätsproblemen ist sie jetzt als statische Methode implementiert. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

Die statische Methode **`Map.groupBy()`** gruppiert die Elemente eines gegebenen Iterables mithilfe der von einer bereitgestellten Rückruffunktion zurückgegebenen Werte. Die schließlich zurückgegebene {{jsxref("Map")}} verwendet die eindeutigen Werte aus der Testfunktion als Schlüssel, die verwendet werden können, um das Array der Elemente in jeder Gruppe zu erhalten.

Die Methode ist hauptsächlich nützlich, wenn Elemente gruppiert werden, die mit einem Objekt verknüpft sind, insbesondere wenn sich dieses Objekt im Laufe der Zeit ändern könnte. Wenn das Objekt unveränderlich ist, könnten Sie stattdessen erwägen, es mit einem String darzustellen und die Elemente mit {{jsxref("Object.groupBy()")}} zu gruppieren.

{{EmbedInteractiveExample("pages/js/map-groupby.html", "taller")}}

## Syntax

```js-nolint
Map.groupBy(items, callbackFn)
```

### Parameter

- `items`
  - : Ein [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie ein {{jsxref("Array")}}), dessen Elemente gruppiert werden sollen.
- `callbackFn`
  - : Eine Funktion, die für jedes Element im Iterable ausgeführt wird. Sie sollte einen Wert ([object](/de/docs/Glossary/object) oder [primitive](/de/docs/Glossary/primitive)) zurückgeben, der die Gruppe des aktuellen Elements angibt. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuell verarbeitete Element.
    - `index`
      - : Der Index des aktuell verarbeiteten Elements.

### Rückgabewert

Ein {{jsxref("Map")}}-Objekt mit Schlüsseln für jede Gruppe, wobei jeder Schlüssel einem Array zugewiesen ist, das die Elemente der zugehörigen Gruppe enthält.

## Beschreibung

`Map.groupBy()` ruft eine bereitgestellte `callbackFn`-Funktion einmal für jedes Element in einem Iterable auf. Die Rückruffunktion sollte einen Wert zurückgeben, der die Gruppe des zugehörigen Elements angibt. Die von `callbackFn` zurückgegebenen Werte werden als Schlüssel für die von `Map.groupBy()` zurückgegebene {{jsxref("Map")}} verwendet. Jeder Schlüssel hat ein zugeordnetes Array, das alle Elemente enthält, für die die Rückruffunktion denselben Wert zurückgegeben hat.

Die Elemente in der zurückgegebenen {{jsxref("Map")}} und dem ursprünglichen Iterable sind dieselben (keine [tiefen Kopien](/de/docs/Glossary/deep_copy)). Änderungen an der internen Struktur der Elemente wirken sich sowohl im ursprünglichen Iterable als auch in der zurückgegebenen {{jsxref("Map")}} aus.

Diese Methode ist nützlich, wenn Sie Informationen gruppieren müssen, die mit einem bestimmten Objekt in Verbindung stehen, das sich potenziell im Laufe der Zeit ändern könnte. Dies liegt daran, dass selbst wenn das Objekt modifiziert wird, es weiterhin als Schlüssel für die zurückgegebene `Map` funktioniert. Wenn Sie stattdessen eine String-Darstellung für das Objekt erstellen und diese als Gruppierungsschlüssel in {{jsxref("Object.groupBy()")}} verwenden, müssen Sie die Zuordnung zwischen dem ursprünglichen Objekt und seiner Darstellung pflegen, während sich das Objekt ändert.

> [!NOTE]
> Um auf die Gruppen in der zurückgegebenen `Map` zuzugreifen, müssen Sie dasselbe Objekt verwenden, das ursprünglich als Schlüssel in der `Map` verwendet wurde (obwohl Sie dessen Eigenschaften modifizieren können). Sie können kein anderes Objekt verwenden, das zufällig denselben Namen und dieselben Eigenschaften hat.

`Map.groupBy` liest den Wert von `this` nicht. Es kann auf jedem Objekt aufgerufen werden und eine neue {{jsxref("Map")}}-Instanz wird zurückgegeben.

## Beispiele

### Verwendung von Map.groupBy()

Zuerst definieren wir ein Array, das Objekte darstellt, die ein Inventar verschiedener Nahrungsmittel repräsentieren. Jedes Nahrungsmittel hat einen `type` und eine `quantity`.

```js
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];
```

Der untenstehende Code verwendet `Map.groupBy()` mit einer Pfeilfunktion, die die Objektschlüssel `restock` oder `sufficient` zurückgibt, je nachdem, ob das Element `quantity < 6` ist. Das zurückgegebene `result`-Objekt ist eine `Map`, daher müssen wir `get()` mit dem Schlüssel aufrufen, um das Array zu erhalten.

```js
const restock = { restock: true };
const sufficient = { restock: false };
const result = Map.groupBy(inventory, ({ quantity }) =>
  quantity < 6 ? restock : sufficient,
);
console.log(result.get(restock));
// [{ name: "bananas", type: "fruit", quantity: 5 }]
```

Beachten Sie, dass das Funktionsargument `{ quantity }` ein grundlegendes Beispiel für die [Objektdestrukturierungssyntax für Funktionsargumente](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#unpacking_properties_from_objects_passed_as_a_function_parameter) ist. Dies entpackt die `quantity`-Eigenschaft eines als Parameter übergebenen Objekts und weist sie einer Variablen namens `quantity` im Funktionskörper zu. Dies ist eine sehr prägnante Weise, auf die relevanten Werte von Elementen innerhalb einer Funktion zuzugreifen.

Der Schlüssel zu einer `Map` kann modifiziert und weiterhin verwendet werden. Es ist jedoch nicht möglich, den Schlüssel neu zu erstellen und weiter zu verwenden. Aus diesem Grund ist es wichtig, dass alles, was die `Map` verwenden muss, einen Verweis auf seine Schlüssel behält.

```js
// The key can be modified and still used
restock["fast"] = true;
console.log(result.get(restock));
// [{ name: "bananas", type: "fruit", quantity: 5 }]

// A new key can't be used, even if it has the same structure!
const restock2 = { restock: true };
console.log(result.get(restock2)); // undefined
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Map.groupBy` in `core-js`](https://github.com/zloirock/core-js#array-grouping)
- [Leitfaden zu indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Map/Map", "Map()")}}
- {{jsxref("Object.groupBy()")}}
