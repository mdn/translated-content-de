---
title: Map.groupBy()
slug: Web/JavaScript/Reference/Global_Objects/Map/groupBy
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

> [!NOTE]
> In einigen Versionen einiger Browser wurde diese Methode als Methode `Array.prototype.groupToMap()` implementiert. Aufgrund von Web-Kompatibilitätsproblemen wird sie jetzt als statische Methode implementiert. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

Die statische Methode **`Map.groupBy()`** gruppiert die Elemente eines gegebenen Iterables mithilfe der von einer bereitgestellten Callback-Funktion zurückgegebenen Werte. Die endgültig zurückgegebene {{jsxref("Map")}} verwendet die eindeutigen Werte der Testfunktion als Schlüssel, die zum Abrufen des Arrays von Elementen in jeder Gruppe verwendet werden können.

Die Methode ist hauptsächlich nützlich, wenn Elemente gruppiert werden sollen, die mit einem Objekt in Verbindung stehen, insbesondere wenn sich dieses Objekt im Laufe der Zeit ändern kann. Wenn das Objekt unveränderlich ist, könnten Sie es stattdessen als String darstellen und Elemente mit {{jsxref("Object.groupBy()")}} gruppieren.

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
      - : Das aktuelle Element, das verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das verarbeitet wird.

### Rückgabewert

Ein {{jsxref("Map")}}-Objekt mit Schlüsseln für jede Gruppe, denen jeweils ein Array zugeordnet ist, das die Elemente der zugehörigen Gruppe enthält.

## Beschreibung

`Map.groupBy()` ruft eine bereitgestellte `callbackFn`-Funktion einmal für jedes Element eines Iterables auf. Die Callback-Funktion sollte einen Wert zurückgeben, der die Gruppe des zugehörigen Elements angibt. Die von `callbackFn` zurückgegebenen Werte werden als Schlüssel für die von `Map.groupBy()` zurückgegebene {{jsxref("Map")}} verwendet. Jeder Schlüssel hat ein zugeordnetes Array, das alle Elemente enthält, für die der Callback denselben Wert zurückgegeben hat.

Die Elemente in der zurückgegebenen {{jsxref("Map")}} und im ursprünglichen Iterable sind dieselben (keine [tiefen Kopien](/de/docs/Glossary/deep_copy)). Änderungen an der internen Struktur der Elemente werden sowohl im ursprünglichen Iterable als auch in der zurückgegebenen {{jsxref("Map")}} widergespiegelt.

Diese Methode ist nützlich, wenn Sie Informationen gruppieren müssen, die mit einem bestimmten Objekt zusammenhängen, das sich möglicherweise im Laufe der Zeit ändern kann. Denn auch wenn das Objekt modifiziert wird, bleibt es ein gültiger Schlüssel für die zurückgegebene `Map`. Wenn Sie stattdessen eine String-Darstellung für das Objekt erstellen und diese als Gruppierungsschlüssel in {{jsxref("Object.groupBy()")}} verwenden, müssen Sie die Zuordnung zwischen dem ursprünglichen Objekt und seiner Darstellung beibehalten, während sich das Objekt ändert.

> [!NOTE]
> Um auf die Gruppen in der zurückgegebenen `Map` zuzugreifen, müssen Sie dasselbe Objekt verwenden, das ursprünglich als Schlüssel in der `Map` verwendet wurde (obwohl Sie dessen Eigenschaften ändern dürfen). Sie können nicht ein anderes Objekt verwenden, das zufällig denselben Namen und dieselben Eigenschaften hat.

`Map.groupBy` liest den Wert von `this` nicht. Es kann auf jedem Objekt aufgerufen werden und eine neue {{jsxref("Map")}}-Instanz wird zurückgegeben.

## Beispiele

### Verwendung von Map.groupBy()

Zunächst definieren wir ein Array, das Objekte enthält, die einen Bestand verschiedener Lebensmittel repräsentieren. Jedes Lebensmittel hat einen `type` und eine `quantity`.

```js
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];
```

Der untenstehende Code verwendet `Map.groupBy()` mit einer Pfeilfunktion, die die Objekt-Schlüssel `restock` oder `sufficient` zurückgibt, je nachdem, ob das Element `quantity < 6` hat. Das zurückgegebene `result`-Objekt ist eine `Map`, daher müssen wir `get()` mit dem Schlüssel aufrufen, um das Array zu erhalten.

```js
const restock = { restock: true };
const sufficient = { restock: false };
const result = Map.groupBy(inventory, ({ quantity }) =>
  quantity < 6 ? restock : sufficient,
);
console.log(result.get(restock));
// [{ name: "bananas", type: "fruit", quantity: 5 }]
```

Beachten Sie, dass das Funktionsargument `{ quantity }` ein einfaches Beispiel für die [Objektdestrukturierungs-Syntax für Funktionsargumente](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#unpacking_properties_from_objects_passed_as_a_function_parameter) ist. Dies entpackt die `quantity`-Eigenschaft eines als Parameter übergebenen Objekts und weist sie einer Variablen mit dem Namen `quantity` im Funktionskörper zu. Dies ist eine sehr prägnante Möglichkeit, auf die relevanten Werte von Elementen innerhalb einer Funktion zuzugreifen.

Der Schlüssel zu einer `Map` kann geändert und weiterhin verwendet werden. Sie können ihn jedoch nicht neu erstellen und weiterhin verwenden. Deshalb ist es wichtig, dass alles, was die Map verwenden muss, eine Referenz auf seine Schlüssel behält.

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
- [Indexed collections](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Map/Map", "Map()")}}
- {{jsxref("Object.groupBy()")}}
