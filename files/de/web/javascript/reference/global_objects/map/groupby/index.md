---
title: Map.groupBy()
slug: Web/JavaScript/Reference/Global_Objects/Map/groupBy
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

> [!NOTE]
> In einigen Versionen einiger Browser wurde diese Methode als `Array.prototype.groupToMap()` implementiert. Aufgrund von Web-Kompatibilitätsproblemen wird sie jetzt als statische Methode implementiert. Prüfen Sie die [Tabelle zur Browserkompatibilität](#browserkompatibilität) für Details.

Die statische Methode **`Map.groupBy()`** gruppiert die Elemente eines gegebenen Iterables unter Verwendung der Werte, die von einer bereitgestellten Callback-Funktion zurückgegeben werden. Die endgültig zurückgegebene {{jsxref("Map")}} verwendet die eindeutigen Werte der Testfunktion als Schlüssel, die verwendet werden können, um das Array der Elemente in jeder Gruppe zu erhalten.

Die Methode ist hauptsächlich nützlich, wenn Elemente gruppiert werden, die mit einem Objekt verbunden sind, insbesondere wenn sich dieses Objekt im Laufe der Zeit ändern könnte. Wenn das Objekt unveränderlich ist, könnten Sie es stattdessen durch einen String darstellen und die Elemente mit {{jsxref("Object.groupBy()")}} gruppieren.

{{EmbedInteractiveExample("pages/js/map-groupby.html", "taller")}}

## Syntax

```js-nolint
Map.groupBy(items, callbackFn)
```

### Parameter

- `items`
  - : Ein [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie ein {{jsxref("Array")}}), dessen Elemente gruppiert werden.
- `callbackFn`
  - : Eine Funktion, die für jedes Element im Iterable ausgeführt wird. Sie sollte einen Wert ({{Glossary("object")}} oder {{Glossary("primitive")}}) zurückgeben, der die Gruppe des aktuellen Elements angibt. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuell zu verarbeitende Element.
    - `index`
      - : Der Index des aktuell zu verarbeitenden Elements.

### Rückgabewert

Ein {{jsxref("Map")}}-Objekt mit Schlüsseln für jede Gruppe, wobei jedem Schlüssel ein Array zugeordnet ist, das die Elemente der zugehörigen Gruppe enthält.

## Beschreibung

`Map.groupBy()` ruft eine bereitgestellte Funktion `callbackFn` einmal für jedes Element in einem Iterable auf. Die Callback-Funktion sollte einen Wert zurückgeben, der die Gruppe des zugehörigen Elements angibt. Die von `callbackFn` zurückgegebenen Werte werden als Schlüssel für die von `Map.groupBy()` zurückgegebene {{jsxref("Map")}} verwendet. Jeder Schlüssel hat ein zugeordnetes Array, das alle Elemente enthält, für die der Callback denselben Wert zurückgegeben hat.

Die Elemente in der zurückgegebenen {{jsxref("Map")}} und im ursprünglichen Iterable sind dieselben (keine {{Glossary("deep copy", "tiefen Kopien")}}). Änderungen an der internen Struktur der Elemente werden sowohl im ursprünglichen Iterable als auch in der zurückgegebenen {{jsxref("Map")}} widergespiegelt.

Diese Methode ist nützlich, wenn Sie Informationen gruppieren müssen, die sich auf ein bestimmtes Objekt beziehen, das sich potenziell im Laufe der Zeit ändern könnte. Das liegt daran, dass selbst wenn das Objekt geändert wird, es weiterhin als Schlüssel für die zurückgegebene `Map` funktionieren wird. Wenn Sie stattdessen eine Zeichenfolgenrepräsentation des Objekts erstellen und diese als Gruppierungsschlüssel in {{jsxref("Object.groupBy()")}} verwenden, müssen Sie die Zuordnung zwischen dem ursprünglichen Objekt und seiner Repräsentation beibehalten, wenn sich das Objekt ändert.

> [!NOTE]
> Um auf die Gruppen in der zurückgegebenen `Map` zuzugreifen, müssen Sie dasselbe Objekt verwenden, das ursprünglich als Schlüssel in der `Map` verwendet wurde (obwohl Sie dessen Eigenschaften ändern können). Sie können kein anderes Objekt verwenden, das zufällig denselben Namen und dieselben Eigenschaften hat.

`Map.groupBy` liest den Wert von `this` nicht aus. Es kann auf jedem Objekt aufgerufen werden und eine neue Instanz von {{jsxref("Map")}} wird zurückgegeben.

## Beispiele

### Verwendung von Map.groupBy()

Zuerst definieren wir ein Array mit Objekten, die ein Inventar verschiedener Nahrungsmittel darstellen. Jedes Nahrungsmittel hat einen `type` und eine `quantity`.

```js
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];
```

Der unten stehende Code verwendet `Map.groupBy()` mit einer Pfeilfunktion, die die Objektschlüssel `restock` oder `sufficient` zurückgibt, je nachdem, ob das Element `quantity < 6` hat. Das zurückgegebene `result`-Objekt ist eine `Map`, daher müssen wir `get()` mit dem Schlüssel aufrufen, um das Array zu erhalten.

```js
const restock = { restock: true };
const sufficient = { restock: false };
const result = Map.groupBy(inventory, ({ quantity }) =>
  quantity < 6 ? restock : sufficient,
);
console.log(result.get(restock));
// [{ name: "bananas", type: "fruit", quantity: 5 }]
```

Beachten Sie, dass das Funktionsargument `{ quantity }` ein grundlegendes Beispiel für [Objektdestrukturierungssyntax für Funktionsargumente](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#unpacking_properties_from_objects_passed_as_a_function_parameter) ist. Dies entpackt die `quantity`-Eigenschaft eines als Parameter übergebenen Objekts und weist sie einer Variablen namens `quantity` im Funktionskörper zu. Dies ist eine sehr knappe Möglichkeit, die relevanten Werte von Elementen innerhalb einer Funktion zuzugreifen.

Der Schlüssel zu einer `Map` kann verändert und weiterhin verwendet werden. Sie können jedoch keinen neuen Schlüssel erstellen und verwenden. Aus diesem Grund ist es wichtig, dass alles, was die Karte verwendet, eine Referenz zu seinen Schlüsseln behält.

```js
// Der Schlüssel kann geändert und weiterhin verwendet werden
restock["fast"] = true;
console.log(result.get(restock));
// [{ name: "bananas", type: "fruit", quantity: 5 }]

// Ein neuer Schlüssel kann nicht verwendet werden, selbst wenn er denselben Aufbau hat!
const restock2 = { restock: true };
console.log(result.get(restock2)); // undefined
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Map.groupBy` in `core-js`](https://github.com/zloirock/core-js#array-grouping)
- [Anleitung zu indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Map/Map", "Map()")}}
- {{jsxref("Object.groupBy()")}}
