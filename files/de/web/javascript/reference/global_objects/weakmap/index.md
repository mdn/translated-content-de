---
title: WeakMap
slug: Web/JavaScript/Reference/Global_Objects/WeakMap
l10n:
  sourceCommit: 11e09e7c584658fbfbecd2f00ae66e546cd54cc0
---

Ein **`WeakMap`** ist eine Sammlung von Schlüssel/Wert-Paaren, deren Schlüssel Objekte oder [nicht-registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sein müssen. Die Werte können beliebige [JavaScript-Typen](/de/docs/Web/JavaScript/Guide/Data_structures) sein und es werden keine starken Referenzen auf ihre Schlüssel erstellt. Das heißt, die Anwesenheit eines Objekts als Schlüssel in einer `WeakMap` verhindert nicht, dass das Objekt vom Garbage Collector gesammelt wird. Sobald ein als Schlüssel verwendetes Objekt gesammelt wurde, werden seine entsprechenden Werte in jedem `WeakMap` ebenfalls zu Kandidaten für die Garbage Collection, solange sie nicht anderweitig stark referenziert werden. Der einzige primitive Typ, der als `WeakMap`-Schlüssel verwendet werden kann, ist Symbol — genauer gesagt, [nicht-registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) — da nicht-registrierte Symbole garantiert einzigartig sind und nicht erneut erstellt werden können.

`WeakMap` ermöglicht es, Daten mit Objekten zu verknüpfen, ohne zu verhindern, dass die Schlüsselobjekte gesammelt werden, selbst wenn die Werte die Schlüssel referenzieren. Eine `WeakMap` erlaubt jedoch nicht, den Lebenszyklus ihrer Schlüssel zu beobachten, weshalb sie keine Aufzählung zulässt; wenn eine `WeakMap` eine Methode bereitstellen würde, um eine Liste ihrer Schlüssel zu erhalten, würde die Liste von dem Zustand der Garbage Collection abhängen, was zu Nicht-Determinismus führen würde. Wenn Sie eine Liste von Schlüsseln haben möchten, sollten Sie eine {{jsxref("Map")}} anstelle einer `WeakMap` verwenden.

Sie können mehr über `WeakMap` im Abschnitt [WeakMap-Objekt](/de/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object) des [Schlüssel-Sammlungen](/de/docs/Web/JavaScript/Guide/Keyed_collections)-Leitfaden erfahren.

## Beschreibung

Schlüssel von WeakMaps müssen sammelbar sein. Die meisten {{Glossary("Primitive", "primitiven Datentypen")}} können beliebig erstellt werden und haben keine Lebensdauer, daher können sie nicht als Schlüssel verwendet werden. Objekte und [nicht-registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) können als Schlüssel verwendet werden, da sie sammelbar sind.

### Schlüsseligeichheit

Wie bei regulären `Map` basiert die Wertgleichheit auf dem [SameValueZero](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality)-Algorithmus, der dem `===`-Operator entspricht, da `WeakMap` nur Objekt- und Symbolschlüssel halten kann. Dies bedeutet, dass die Gleichheit bei Objektschlüsseln auf Objektidentität basiert. Sie werden nach {{Glossary("Object_reference", "Referenz")}} und nicht nach Wert verglichen.

### Warum WeakMap?

Eine Map-API _könnte_ in JavaScript mit zwei Arrays implementiert werden (eines für Schlüssel, eines für Werte), die von den vier API-Methoden gemeinsam genutzt werden. Das Setzen von Elementen in diese Map würde beinhalten, einen Schlüssel und einen Wert gleichzeitig an das Ende jedes dieser Arrays anzuhängen. Infolgedessen würden die Indizes des Schlüssels und des Werts für beide Arrays übereinstimmen. Das Abrufen von Werten aus der Map würde das Durchlaufen aller Schlüssel erfordern, um eine Übereinstimmung zu finden, und dann den Index dieser Übereinstimmung verwenden, um den entsprechenden Wert aus dem Array der Werte abzurufen.

Eine solche Implementierung hätte zwei Hauptnachteile:

1. Der erste ist ein `O(n)`-Set und -Suche (_n_ ist die Anzahl der Schlüssel in der Map), da beide Operationen die Liste der Schlüssel durchlaufen müssen, um einen entsprechenden Wert zu finden.
2. Der zweite Nachteil ist ein Speicherleck, da die Arrays sicherstellen, dass die Referenzen zu jedem Schlüssel und jedem Wert unbegrenzt aufrechterhalten werden. Diese Referenzen verhindern, dass die Schlüssel gesammelt werden, auch wenn es keine anderen Referenzen auf das Objekt gibt. Dies würde auch verhindern, dass die entsprechenden Werte gesammelt werden.

Im Gegensatz dazu bezieht sich ein Schlüsselobjekt in einer `WeakMap` stark auf seine Inhalte, solange der Schlüssel nicht gesammelt wird, und danach schwach. Daher verhindert eine `WeakMap`:

- keine Garbage Collection, die letztendlich Referenzen auf das Schlüsselobjekt entfernt
- die Garbage Collection von Werten, wenn ihre Schlüsselobjekte von keiner anderen Stelle als einer `WeakMap` referenziert werden

Eine `WeakMap` kann ein besonders nützliches Konstrukt sein, wenn man Schlüssel mit Informationen über den Schlüssel verknüpft, die _nur dann_ wertvoll sind, wenn der Schlüssel nicht gesammelt wurde.

Aber weil eine `WeakMap` nicht den Lebenszyklus ihrer Schlüssel beobachten lässt, sind ihre Schlüssel nicht aufzählbar. Es gibt keine Methode, um eine Liste der Schlüssel zu erhalten. Wenn es eine gäbe, würde die Liste vom Zustand der Garbage Collection abhängen, was zu Nicht-Determinismus führen würde. Wenn Sie eine Liste von Schlüsseln haben möchten, sollten Sie eine {{jsxref("Map")}} verwenden.

## Konstruktor

- {{jsxref("WeakMap/WeakMap", "WeakMap()")}}
  - : Erstellt ein neues `WeakMap`-Objekt.

## Instanzeigenschaften

Diese Eigenschaften sind auf `WeakMap.prototype` definiert und werden von allen `WeakMap`-Instanzen gemeinsam genutzt.

- {{jsxref("Object/constructor", "WeakMap.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `WeakMap`-Instanzen ist der Anfangswert der {{jsxref("WeakMap/WeakMap", "WeakMap")}}-Konstruktor.
- `WeakMap.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"WeakMap"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("WeakMap.prototype.delete()")}}
  - : Entfernt den durch den Schlüssel angegebenen Eintrag aus dieser `WeakMap`.
- {{jsxref("WeakMap.prototype.get()")}}
  - : Gibt den Wert zurück, der dem Schlüssel in dieser `WeakMap` entspricht, oder `undefined`, wenn keiner vorhanden ist.
- {{jsxref("WeakMap.prototype.getOrInsert()")}} {{experimental_inline}}
  - : Gibt den Wert zurück, der dem angegebenen Schlüssel in dieser `WeakMap` entspricht. Wenn der Schlüssel nicht vorhanden ist, fügt er einen neuen Eintrag mit dem Schlüssel und einem gegebenen Standardwert hinzu und gibt den eingefügten Wert zurück.
- {{jsxref("WeakMap.prototype.getOrInsertComputed()")}} {{experimental_inline}}
  - : Gibt den Wert zurück, der dem angegebenen Schlüssel in dieser `WeakMap` entspricht. Wenn der Schlüssel nicht vorhanden ist, fügt er einen neuen Eintrag mit dem Schlüssel und einem Standardwert, der aus einem gegebenen Rückruf berechnet wird, hinzu und gibt den eingefügten Wert zurück.
- {{jsxref("WeakMap.prototype.has()")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob ein Eintrag mit dem angegebenen Schlüssel in dieser `WeakMap` existiert oder nicht.
- {{jsxref("WeakMap.prototype.set()")}}
  - : Fügt dieser `WeakMap` einen neuen Eintrag mit einem angegebenen Schlüssel und Wert hinzu oder aktualisiert einen vorhandenen Eintrag, wenn der Schlüssel bereits existiert.

## Beispiele

### Verwendung von WeakMap

```js
const wm1 = new WeakMap();
const wm2 = new WeakMap();
const wm3 = new WeakMap();
const o1 = {};
const o2 = () => {};
const o3 = window;

wm1.set(o1, 37);
wm1.set(o2, "azerty");
wm2.set(o1, o2); // a value can be anything, including an object or a function
wm2.set(o2, undefined);
wm2.set(wm1, wm2); // keys and values can be any objects. Even WeakMaps!

wm1.get(o2); // "azerty"
wm2.get(o2); // undefined, because that is the set value
wm2.get(o3); // undefined, because there is no key for o3 on wm2

wm1.has(o2); // true
wm2.has(o2); // true (even if the value itself is 'undefined')
wm2.has(o3); // false

wm3.set(o1, 37);
wm3.get(o1); // 37

wm1.has(o1); // true
wm1.delete(o1);
wm1.has(o1); // false
```

### Implementierung einer WeakMap-ähnlichen Klasse mit einer .clear()-Methode

```js
class ClearableWeakMap {
  #wm;
  constructor(init) {
    this.#wm = new WeakMap(init);
  }
  clear() {
    this.#wm = new WeakMap();
  }
  delete(k) {
    return this.#wm.delete(k);
  }
  get(k) {
    return this.#wm.get(k);
  }
  has(k) {
    return this.#wm.has(k);
  }
  set(k, v) {
    this.#wm.set(k, v);
    return this;
  }
}
```

### Emulierung privater Mitglieder

Entwickler können eine `WeakMap` verwenden, um private Daten mit einem Objekt zu verknüpfen, mit folgenden Vorteilen:

- Im Vergleich zu einer {{jsxref("Map")}} hält eine WeakMap keine starken Referenzen zu dem als Schlüssel verwendeten Objekt, sodass die Metadaten die gleiche Lebensdauer wie das Objekt selbst haben und Speicherlecks vermieden werden.
- Im Vergleich zur Verwendung nicht-aufzählbarer und/oder {{jsxref("Symbol")}}-Eigenschaften ist eine WeakMap extern zum Objekt und es gibt keine Möglichkeit für Benutzercode, die Metadaten über reflektierende Methoden wie {{jsxref("Object.getOwnPropertySymbols")}} abzurufen.
- Im Vergleich zu einer [Closure](/de/docs/Web/JavaScript/Guide/Closures) kann dieselbe WeakMap für alle aus einem Konstruktor erstellten Instanzen wiederverwendet werden, was speichereffizienter ist und es ermöglicht, dass verschiedene Instanzen derselben Klasse die privaten Mitglieder voneinander lesen können.

```js
let Thing;

{
  const privateScope = new WeakMap();
  let counter = 0;

  Thing = function () {
    this.someProperty = "foo";

    privateScope.set(this, {
      hidden: ++counter,
    });
  };

  Thing.prototype.showPublic = function () {
    return this.someProperty;
  };

  Thing.prototype.showPrivate = function () {
    return privateScope.get(this).hidden;
  };
}

console.log(typeof privateScope);
// "undefined"

const thing = new Thing();

console.log(thing);
// Thing {someProperty: "foo"}

thing.showPublic();
// "foo"

thing.showPrivate();
// 1
```

Dies ist ungefähr gleichwertig mit dem Folgenden, unter Verwendung von [privaten Feldern](/de/docs/Web/JavaScript/Reference/Classes/Private_elements):

```js
class Thing {
  static #counter = 0;
  #hidden;
  constructor() {
    this.someProperty = "foo";
    this.#hidden = ++Thing.#counter;
  }
  showPublic() {
    return this.someProperty;
  }
  showPrivate() {
    return this.#hidden;
  }
}

console.log(thing);
// Thing {someProperty: "foo"}

thing.showPublic();
// "foo"

thing.showPrivate();
// 1
```

### Verknüpfung von Metadaten

Eine `WeakMap` kann verwendet werden, um Metadaten mit einem Objekt zu verknüpfen, ohne die Lebensdauer des Objekts selbst zu beeinflussen. Dies ist dem Beispiel der privaten Mitglieder sehr ähnlich, da private Mitglieder ebenfalls als externe Metadaten modelliert sind, die nicht an der [prototypischen Vererbung](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) teilnehmen.

Dieser Anwendungsfall kann auf bereits erstellte Objekte erweitert werden. Beispielsweise möchten wir im Web möglicherweise zusätzliche Daten mit einem DOM-Element verknüpfen, auf das das DOM-Element später zugreifen kann. Ein gängiger Ansatz ist es, die Daten als Eigenschaft anzuhängen:

```js
const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.clicked = false;
  button.addEventListener("click", () => {
    button.clicked = true;
    const currentButtons = [...document.querySelectorAll(".button")];
    if (currentButtons.every((button) => button.clicked)) {
      console.log("All buttons have been clicked!");
    }
  });
});
```

Dieser Ansatz funktioniert, hat jedoch einige Nachteile:

- Die Eigenschaft `clicked` ist aufzählbar, sodass sie in [`Object.keys(button)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys), [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen usw. angezeigt wird. Dies kann durch die Verwendung von {{jsxref("Object.defineProperty()")}} gemildert werden, aber das macht den Code ausführlicher.
- Die Eigenschaft `clicked` ist eine normale String-Eigenschaft, sodass sie von anderem Code zugegriffen und überschrieben werden kann. Dies kann durch die Verwendung eines {{jsxref("Symbol")}}-Schlüssels gemildert werden, aber der Schlüssel wäre immer noch über {{jsxref("Object.getOwnPropertySymbols()")}} zugänglich.

Die Verwendung einer `WeakMap` behebt diese:

```js
const buttons = document.querySelectorAll(".button");
const clicked = new WeakMap();
buttons.forEach((button) => {
  clicked.set(button, false);
  button.addEventListener("click", () => {
    clicked.set(button, true);
    const currentButtons = [...document.querySelectorAll(".button")];
    if (currentButtons.every((button) => clicked.get(button))) {
      console.log("All buttons have been clicked!");
    }
  });
});
```

Hier kennt nur der Code, der Zugriff auf `clicked` hat, den geklickten Zustand jedes Buttons, und externer Code kann die Zustände nicht ändern. Außerdem werden, wenn einer der Buttons aus dem DOM entfernt wird, die zugehörigen Metadaten automatisch von der Garbage Collection erfasst.

### Caching

Sie können Objekte, die an eine Funktion übergeben werden, mit dem Ergebnis der Funktion verknüpfen, sodass, wenn dasselbe Objekt erneut übergeben wird, das zwischengespeicherte Ergebnis zurückgegeben werden kann, ohne die Funktion erneut auszuführen. Dies ist nützlich, wenn die Funktion rein ist (d.h. sie mutiert keine externen Objekte oder verursacht andere beobachtbare Nebeneffekte).

```js
const cache = new WeakMap();
function handleObjectValues(obj) {
  if (cache.has(obj)) {
    return cache.get(obj);
  }
  const result = Object.values(obj).map(heavyComputation);
  cache.set(obj, result);
  return result;
}
```

Dies funktioniert nur, wenn die Eingabe Ihrer Funktion ein Objekt ist. Selbst wenn die Eingabe nie wieder gereicht wird, bleibt das Ergebnis im Cache, solange der Schlüssel (Eingabe) lebendig ist. Eine effektivere Methode ist die Verwendung einer {{jsxref("Map")}}, gepaart mit {{jsxref("WeakRef")}}-Objekten, die es Ihnen ermöglichen, beliebige Eingabewerttypen mit ihren jeweiligen (möglicherweise großen) Berechnungsergebnissen zu verknüpfen. Weitere Details finden Sie im Beispiel [WeakRefs und FinalizationRegistry](/de/docs/Web/JavaScript/Guide/Memory_management#weakrefs_and_finalizationregistry).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `WeakMap` in `core-js`](https://github.com/zloirock/core-js#weakmap)
- [Schlüssel-Sammlungen](/de/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object)
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakSet")}}
