---
title: WeakMap
slug: Web/JavaScript/Reference/Global_Objects/WeakMap
l10n:
  sourceCommit: 14acf1aa7885157debdf1b6111f4bd10c064ec60
---

{{JSRef}}

Ein **`WeakMap`** ist eine Sammlung von Schlüssel/Wert-Paaren, deren Schlüssel Objekte oder [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sein müssen, mit beliebigen Werten eines [JavaScript-Typs](/de/docs/Web/JavaScript/Guide/Data_structures), und die keine starken Referenzen zu ihren Schlüsseln erstellt. Das heißt, die Anwesenheit eines Objekts als Schlüssel in einer `WeakMap` verhindert nicht, dass das Objekt vom Garbage Collector gesammelt wird. Sobald ein Objekt, das als Schlüssel verwendet wird, gesammelt wurde, werden die entsprechenden Werte in jeder `WeakMap` ebenfalls zu Kandidaten für die Garbage Collection — solange sie nicht an anderer Stelle stark referenziert werden. Der einzige primitive Typ, der als `WeakMap`-Schlüssel verwendet werden kann, ist das Symbol — genauer gesagt, [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) —, da nicht registrierte Symbole garantiert eindeutig sind und nicht neu erstellt werden können.

`WeakMap` ermöglicht es, Daten mit Objekten zu verknüpfen, ohne dass die Schlüssselobjekte von der Sammlung ausgeschlossen werden, selbst wenn die Werte die Schlüssel referenzieren. Eine `WeakMap` erlaubt jedoch nicht, die Lebendigkeit ihrer Schlüssel zu beobachten, weshalb sie keine Enumeration ermöglicht; wenn eine `WeakMap` eine Methode bereitstellen würde, um eine Liste ihrer Schlüssel zu erhalten, würde die Liste vom Zustand der Garbage Collection abhängen, was zu Nicht-Determinismus führen würde. Wenn Sie eine Liste von Schlüsseln benötigen, sollten Sie eine {{jsxref("Map")}} anstelle einer `WeakMap` verwenden.

Sie können mehr über `WeakMap` im Abschnitt [WeakMap-Objekt](/de/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object) des [Leitfaden für Keyed Collections](/de/docs/Web/JavaScript/Guide/Keyed_collections) erfahren.

## Beschreibung

Schlüssel von WeakMaps müssen garbage-collectable sein. Die meisten {{Glossary("Primitive", "primitiven Datentypen")}} können willkürlich erstellt werden und haben keine Lebensdauer, daher können sie nicht als Schlüssel verwendet werden. Objekte und [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) können als Schlüssel verwendet werden, da sie garbage-collectable sind.

### Warum WeakMap?

Eine Map-API _könnte_ in JavaScript mit zwei Arrays (eines für Schlüssel, eines für Werte) implementiert werden, die von den vier API-Methoden gemeinsam genutzt werden. Elemente in dieser Map zu setzen, würde bedeuten, einen Schlüssel und einen Wert gleichzeitig am Ende jedes dieser Arrays hinzuzufügen. Infolgedessen würden die Indizes des Schlüssels und des Werts zu beiden Arrays korrespondieren. Werte aus der Map zu erhalten, würde das Durchlaufen aller Schlüssel erfordern, um eine Übereinstimmung zu finden, und dann den Index dieser Übereinstimmung verwenden, um den entsprechenden Wert aus dem Array von Werten abzurufen.

Eine solche Implementierung hätte zwei Hauptnachteile:

1. Der erste ist ein `O(n)`-Setz- und Suchvorgang (_n_ ist die Anzahl der Schlüssel in der Map), da beide Operationen die Liste der Schlüssel durchlaufen müssen, um einen passenden Wert zu finden.
2. Der zweite Nachteil ist ein Speicherleck, weil die Arrays sicherstellen, dass Referenzen zu jedem Schlüssel und jedem Wert auf unbestimmte Zeit beibehalten werden. Diese Referenzen verhindern, dass die Schlüssel vom Garbage Collector gesammelt werden, selbst wenn es keine anderen Verweise auf das Objekt gibt. Dies würde auch verhindern, dass die entsprechenden Werte vom Garbage Collector gesammelt werden.

Im Gegensatz dazu bezieht sich in einer `WeakMap` ein Schlüsselobjekt stark auf seinen Inhalt, solange der Schlüssel nicht vom Garbage Collector gesammelt wird, aber schwach ab dann. Eine `WeakMap`:

- verhindert nicht die Garbage Collection, die letztendlich Referenzen zum Schlüsselobjekt entfernt
- erlaubt die Garbage Collection aller Werte, wenn ihre Schlüsselobjekte nicht anders als von einer `WeakMap` referenziert werden

Eine `WeakMap` kann eine besonders nützliche Struktur sein, wenn Schlüssel auf Informationen über den Schlüssel abgebildet werden, die nur _wertvoll sind_, wenn der Schlüssel nicht vom Garbage Collector gesammelt wurde.

Aber da eine `WeakMap` die Lebendigkeit ihrer Schlüssel nicht beobachten lässt, sind ihre Schlüssel nicht auflistbar. Es gibt keine Methode, um eine Liste der Schlüssel zu erhalten. Wenn es eine gäbe, würde die Liste vom Zustand der Garbage Collection abhängen, was Nicht-Determinismus einführen würde. Wenn Sie eine Liste von Schlüsseln benötigen, sollten Sie eine {{jsxref("Map")}} verwenden.

## Konstruktor

- {{jsxref("WeakMap/WeakMap", "WeakMap()")}}
  - : Erstellt ein neues `WeakMap`-Objekt.

## Instanzeigenschaften

Diese Eigenschaften sind auf `WeakMap.prototype` definiert und werden von allen `WeakMap`-Instanzen geteilt.

- {{jsxref("Object/constructor", "WeakMap.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `WeakMap`-Instanzen ist der anfängliche Wert der {{jsxref("WeakMap/WeakMap", "WeakMap")}}-Konstruktor.
- `WeakMap.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"WeakMap"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("WeakMap.prototype.delete()")}}
  - : Entfernt jeden Wert, der dem `key` zugeordnet ist. `WeakMap.prototype.has(key)` wird danach `false` zurückgeben.
- {{jsxref("WeakMap.prototype.get()")}}
  - : Gibt den Wert zurück, der dem `key` zugeordnet ist, oder `undefined`, wenn keiner vorhanden ist.
- {{jsxref("WeakMap.prototype.has()")}}
  - : Gibt ein Boolean zurück, das angibt, ob in dem `WeakMap`-Objekt ein Wert mit dem `key` verbunden wurde oder nicht.
- {{jsxref("WeakMap.prototype.set()")}}
  - : Setzt den `value` für den `key` im `WeakMap`-Objekt. Gibt das `WeakMap`-Objekt zurück.

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

### Emulation privater Mitglieder

Entwickler können eine `WeakMap` verwenden, um privaten Daten mit einem Objekt zu verknüpfen, mit folgenden Vorteilen:

- Im Vergleich zu einer {{jsxref("Map")}} hält eine WeakMap keine starken Referenzen zu dem als Schlüssel verwendeten Objekt, sodass die Metadaten die gleiche Lebensdauer wie das Objekt selbst haben und Speicherlecks vermeiden.
- Im Vergleich zur Verwendung nicht aufzählbarer Eigenschaften und/oder {{jsxref("Symbol")}} ist eine WeakMap extern zum Objekt, und es ist für Benutzercode nicht möglich, die Metadaten durch reflektierende Methoden wie {{jsxref("Object.getOwnPropertySymbols")}} abzurufen.
- Im Vergleich zu einer [closure](/de/docs/Web/JavaScript/Guide/Closures) kann dieselbe WeakMap für alle Instanzen verwendet werden, die von einem Konstruktor erstellt worden sind, was sie speichereffizienter macht und es Instanzen derselben Klasse erlaubt, die privaten Mitglieder voneinander zu lesen.

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

Dies entspricht in etwa dem Folgenden mit [privaten Feldern](/de/docs/Web/JavaScript/Reference/Classes/Private_properties):

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

### Zuordnung von Metadaten

Eine `WeakMap` kann verwendet werden, um Metadaten mit einem Objekt zu verknüpfen, ohne die Lebensdauer des Objekts selbst zu beeinflussen. Dies ist dem Beispiel der privaten Mitglieder sehr ähnlich, da private Mitglieder ebenfalls als externe Metadaten modelliert sind, die nicht an der [prototypischen Vererbung](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) teilnehmen.

Dieser Anwendungsfall kann auf bereits erstellte Objekte erweitert werden. Zum Beispiel könnten wir im Web zusätzliche Daten mit einem DOM-Element verknüpfen wollen, die das DOM-Element später abrufen kann. Ein üblicher Ansatz besteht darin, die Daten als Eigenschaft anzuhängen:

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

Dieser Ansatz funktioniert, hat aber einige Nachteile:

- Die `clicked`-Eigenschaft ist aufzählbar und wird daher in [`Object.keys(button)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys), [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen usw. angezeigt. Dies kann durch Verwendung von {{jsxref("Object.defineProperty()")}} gemildert werden, aber das macht den Code umständlicher.
- Die `clicked`-Eigenschaft ist eine normale string-Eigenschaft und kann daher von anderem Code zugegriffen und überschrieben werden. Dies kann durch die Verwendung eines {{jsxref("Symbol")}}-Schlüssels gemildert werden, aber der Schlüssel wäre dennoch über {{jsxref("Object.getOwnPropertySymbols()")}} zugänglich.

Die Verwendung einer `WeakMap` behebt diese Probleme:

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

Hier kennt nur Code, der Zugriff auf `clicked` hat, den angeklickten Zustand jeder Schaltfläche, und externer Code kann die Zustände nicht ändern. Außerdem werden, wenn eine der Schaltflächen aus dem DOM entfernt wird, die zugehörigen Metadaten automatisch vom Garbage Collector gesammelt.

### Caching

Sie können Objekte, die an eine Funktion übergeben werden, mit dem Ergebnis der Funktion verknüpfen, so dass, wenn dasselbe Objekt erneut übergeben wird, das zwischengespeicherte Ergebnis zurückgegeben werden kann, ohne die Funktion erneut auszuführen. Dies ist nützlich, wenn die Funktion rein ist (d.h. sie ändert keine äußeren Objekte oder verursacht keine anderen beobachtbaren Nebeneffekte).

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

Dies funktioniert nur, wenn der Input Ihrer Funktion ein Objekt ist. Selbst wenn der Input nie wieder erneut übergeben wird, bleibt das Ergebnis dennoch für immer im Cache, solange der Schlüssel (Input) vorhanden ist. Ein effektiverer Weg ist die Verwendung einer {{jsxref("Map")}} zusammen mit {{jsxref("WeakRef")}}-Objekten, wodurch es möglich wird, jeden Eingabewert mit seinem jeweiligen (möglicherweise großen) Berechnungsergebnis zu verknüpfen. Sehen Sie das Beispiel zu [WeakRefs und FinalizationRegistry](/de/docs/Web/JavaScript/Guide/Memory_management#weakrefs_and_finalizationregistry) für weitere Details.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `WeakMap` in `core-js`](https://github.com/zloirock/core-js#weakmap)
- [Keyed collections](/de/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object)
- [Hiding Implementation Details with ECMAScript 6 WeakMaps](https://fitzgen.com/2014/01/13/hiding-implementation-details-with-e6-weakmaps.html) von Nick Fitzgerald (2014)
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakSet")}}
