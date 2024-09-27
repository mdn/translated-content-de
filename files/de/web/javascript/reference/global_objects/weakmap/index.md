---
title: WeakMap
slug: Web/JavaScript/Reference/Global_Objects/WeakMap
l10n:
  sourceCommit: 4d150067b98ab6e79e6f6b0bf8343ae3ebd2b641
---

{{JSRef}}

Ein **`WeakMap`** ist eine Sammlung von Schlüssel/Wert-Paaren, deren Schlüssel Objekte oder [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sein müssen, mit Werten eines beliebigen [JavaScript-Typs](/de/docs/Web/JavaScript/Data_structures), und die keine starken Referenzen zu ihren Schlüsseln erstellt. Das bedeutet, dass die Anwesenheit eines Objekts als Schlüssel in einer `WeakMap` nicht verhindert, dass das Objekt vom Garbage Collector aufgeräumt wird. Sobald ein Objekt, das als Schlüssel verwendet wurde, gesammelt wurde, werden auch seine entsprechenden Werte in jeder `WeakMap` zu Kandidaten für die Garbage Collection — solange sie nicht anderswo stark referenziert werden. Der einzige primitive Typ, der als `WeakMap`-Schlüssel verwendet werden kann, ist ein Symbol — genauer gesagt, [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) —, da nicht registrierte Symbole garantiert einzigartig sind und nicht neu erstellt werden können.

`WeakMap` ermöglicht die Zuordnung von Daten zu Objekten in einer Weise, die nicht verhindert, dass die Schlüsselobjekte gesammelt werden, selbst wenn die Werte die Schlüssel referenzieren. Eine `WeakMap` erlaubt jedoch nicht die Beobachtung der Lebensdauer ihrer Schlüssel, weshalb sie keine Auflistung erlaubt; wenn eine `WeakMap` eine Methode bereitstellen würde, um eine Liste ihrer Schlüssel zu erhalten, würde die Liste vom Zustand der Garbage Collection abhängen, was Nicht-Determinismus einführen würde. Wenn Sie eine Liste von Schlüsseln haben möchten, sollten Sie besser eine {{jsxref("Map")}} als eine `WeakMap` verwenden.

Sie können mehr über `WeakMap` im Abschnitt über das [WeakMap-Objekt](/de/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object) im [Leitfaden für Schlüsselkollektionen](/de/docs/Web/JavaScript/Guide/Keyed_collections) erfahren.

## Beschreibung

Schlüssel von WeakMaps müssen für die Garbage Collection geeignet sein. Die meisten [primitiven Datentypen](/de/docs/Glossary/Primitive) können beliebig erstellt werden und haben keine Lebensdauer, daher können sie nicht als Schlüssel verwendet werden. Objekte und [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) können als Schlüssel verwendet werden, da sie für die Garbage Collection geeignet sind.

### Warum WeakMap?

Eine Map-API _könnte_ in JavaScript mit zwei Arrays (eines für Schlüssel, eines für Werte) implementiert werden, die von den vier API-Methoden gemeinsam genutzt werden. Das Setzen von Elementen in dieser Map würde das gleichzeitige Appendieren eines Schlüssels und eines Werts an das Ende dieser Arrays erfordern. Infolgedessen würden sich die Indizes des Schlüssels und des Werts auf beide Arrays beziehen. Das Abrufen von Werten aus der Map würde ein Durchlaufen aller Schlüssel erfordern, um eine Übereinstimmung zu finden, dann die Verwendung des Index dieser Übereinstimmung, um den entsprechenden Wert aus dem Array der Werte abzurufen.

Eine solche Implementierung hätte zwei Hauptnachteile:

1. Der erste ist ein `O(n)`-Setzen und -Suchen (_n_ ist die Anzahl der Schlüssel in der Map), da beide Operationen die Liste der Schlüssel durchlaufen müssen, um einen passenden Wert zu finden.
2. Der zweite Nachteil ist ein Speicherleck, da die Arrays sicherstellen, dass Referenzen zu jedem Schlüssel und jedem Wert dauerhaft aufbewahrt werden. Diese Referenzen verhindern, dass die Schlüssel vom Garbage Collector gesammelt werden, selbst wenn es keine weiteren Referenzen zu dem Objekt gibt. Dies würde auch verhindern, dass die entsprechenden Werte vom Garbage Collector gesammelt werden.

Im Gegensatz dazu verweist ein Schlüsselobjekt in einer `WeakMap` stark auf seinen Inhalt, solange der Schlüssel nicht vom Garbage Collector gesammelt wird, aber danach nur schwach. Daher verhindert eine `WeakMap`:

- keine Garbage Collection, die schließlich die Referenzen zum Schlüsselobjekt entfernt
- ermöglicht die Garbage Collection von Werten, wenn ihr Schlüsselobjekte nicht von anderswo als einer `WeakMap` referenziert werden

Eine `WeakMap` kann ein besonders nützliches Konstrukt sein, wenn Schlüssel einem Wert zugeordnet werden sollen, der nur wertvoll ist, solange der Schlüssel nicht vom Garbage Collector gesammelt wurde.

Da eine `WeakMap` jedoch nicht erlaubt, die Lebensdauer ihrer Schlüssel zu beobachten, sind ihre Schlüssel nicht auflistbar. Es gibt keine Methode, eine Liste der Schlüssel zu erhalten. Wenn es eine gäbe, würde die Liste vom Zustand der Garbage Collection abhängen, was zu Nicht-Determinismus führt. Wenn Sie eine Liste von Schlüsseln haben möchten, sollten Sie eine {{jsxref("Map")}} verwenden.

## Konstruktor

- {{jsxref("WeakMap/WeakMap", "WeakMap()")}}
  - : Erstellt ein neues `WeakMap`-Objekt.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `WeakMap.prototype` definiert und werden von allen `WeakMap`-Instanzen geteilt.

- {{jsxref("Object/constructor", "WeakMap.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `WeakMap`-Instanzen ist der Anfangswert der {{jsxref("WeakMap/WeakMap", "WeakMap")}}-Konstruktor.
- `WeakMap.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist die Zeichenkette `"WeakMap"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("WeakMap.prototype.delete()")}}
  - : Entfernt einen Wert, der dem `key` zugeordnet ist. `WeakMap.prototype.has(key)` wird danach `false` zurückgeben.
- {{jsxref("WeakMap.prototype.get()")}}
  - : Gibt den dem `key` zugeordneten Wert zurück oder `undefined`, falls keiner vorhanden ist.
- {{jsxref("WeakMap.prototype.has()")}}
  - : Gibt einen Boolean zurück, der angibt, ob ein Wert dem `key` im `WeakMap`-Objekt zugeordnet wurde oder nicht.
- {{jsxref("WeakMap.prototype.set()")}}
  - : Setzt den `value` für den `key` im `WeakMap`-Objekt. Gibt das `WeakMap`-Objekt zurück.

## Beispiele

### Verwendung von WeakMap

```js
const wm1 = new WeakMap();
const wm2 = new WeakMap();
const wm3 = new WeakMap();
const o1 = {};
const o2 = function () {};
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

### Implementieren einer WeakMap-ähnlichen Klasse mit einer .clear() Methode

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

### Emulieren privater Mitglieder

Entwickler können eine `WeakMap` verwenden, um private Daten mit einem Objekt zu assoziieren, mit den folgenden Vorteilen:

- Im Vergleich zu einer {{jsxref("Map")}} hält eine WeakMap keine starken Referenzen zu dem Objekt, das als Schlüssel verwendet wird, sodass die Metadaten die gleiche Lebensdauer wie das Objekt selbst haben und Speicherlecks vermieden werden.
- Im Vergleich zur Verwendung von nicht-aufzählbaren und/oder {{jsxref("Symbol")}}-Eigenschaften ist eine WeakMap extern zum Objekt und es gibt keine Möglichkeit für benutzerdefinierten Code, die Metadaten durch reflektive Methoden wie {{jsxref("Object.getOwnPropertySymbols")}} abzurufen.
- Im Vergleich zu einer [Closure](/de/docs/Web/JavaScript/Closures) kann dieselbe WeakMap für alle Instanzen verwendet werden, die von einem Konstruktor erstellt wurden, was sie speicherfreundlicher macht, und ermöglicht, dass unterschiedliche Instanzen derselben Klasse die privaten Mitglieder voneinander lesen können.

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

Dies entspricht grob dem folgenden Beispiel mit [privaten Feldern](/de/docs/Web/JavaScript/Reference/Classes/Private_properties):

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

### Zuordnen von Metadaten

Eine `WeakMap` kann verwendet werden, um Metadaten mit einem Objekt zu assoziieren, ohne die Lebensdauer des Objekts selbst zu beeinflussen. Dies ist dem Beispiel der privaten Mitglieder sehr ähnlich, da private Mitglieder ebenfalls als externe Metadaten modelliert sind, die nicht an der [prototypischen Vererbung](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) teilnehmen.

Dieser Anwendungsfall kann auf bereits erstellte Objekte erweitert werden. Zum Beispiel könnte man im Web zusätzliche Daten mit einem DOM-Element assoziieren wollen, auf die das DOM-Element später zugreifen kann. Ein gängiger Ansatz ist, die Daten als Eigenschaft anzuhängen:

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

Dieser Ansatz funktioniert, birgt jedoch einige Fallstricke:

- Die `clicked`-Eigenschaft ist aufzählbar, sodass sie in [`Object.keys(button)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys), [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen usw. angezeigt wird. Dies kann durch die Verwendung von {{jsxref("Object.defineProperty()")}} gemildert werden, aber das macht den Code ausführlicher.
- Die `clicked`-Eigenschaft ist eine normale Zeichenketteigenschaft, sodass sie von anderem Code aus aufgerufen und überschrieben werden kann. Dies kann durch die Verwendung eines {{jsxref("Symbol")}}-Schlüssels gemildert werden, aber der Schlüssel wäre immer noch über {{jsxref("Object.getOwnPropertySymbols()")}} zugänglich.

Die Verwendung einer `WeakMap` löst diese:

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

Hier kennt nur der Code, der Zugriff auf `clicked` hat, den angeklickten Zustand jedes Buttons, und äußerer Code kann die Zustände nicht ändern. Außerdem werden die zugehörigen Metadaten automatisch vom Garbage Collector erfasst, wenn eines der Buttons aus dem DOM entfernt wird.

### Caching

Sie können Objekte, die an eine Funktion übergeben werden, mit dem Ergebnis der Funktion assoziieren, sodass das zwischengespeicherte Ergebnis zurückgegeben werden kann, wenn dasselbe Objekt erneut übergeben wird, ohne die Funktion erneut auszuführen. Dies ist nützlich, wenn die Funktion rein ist (d. h. sie mutiert keine externen Objekte oder verursacht andere beobachtbare Nebeneffekte).

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

Dies funktioniert nur, wenn der Input Ihrer Funktion ein Objekt ist. Selbst wenn der Input nie wieder übergeben wird, bleibt das Ergebnis für immer im Cache, solange der Schlüssel (Input) lebt. Eine effektivere Methode besteht darin, eine {{jsxref("Map")}} gekoppelt mit {{jsxref("WeakRef")}}-Objekten zu verwenden, was Ihnen ermöglicht, jeden beliebigen Eingabewert mit seinem jeweiligen (potenziell großen) Rechenergebnis zu assoziieren. Siehe das Beispiel [WeakRefs und FinalizationRegistry](/de/docs/Web/JavaScript/Memory_management#weakrefs_and_finalizationregistry) für mehr Details.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `WeakMap` in `core-js`](https://github.com/zloirock/core-js#weakmap)
- [Schlüsselkollektionen](/de/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object)
- [Verbergen von Implementierungsdetails mit ECMAScript 6 WeakMaps](https://fitzgen.com/2014/01/13/hiding-implementation-details-with-e6-weakmaps.html) von Nick Fitzgerald (2014)
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakSet")}}
