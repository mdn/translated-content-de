---
title: WeakMap
slug: Web/JavaScript/Reference/Global_Objects/WeakMap
l10n:
  sourceCommit: 4d150067b98ab6e79e6f6b0bf8343ae3ebd2b641
---

{{JSRef}}

Ein **`WeakMap`** ist eine Sammlung von Schlüssel/Wert-Paaren, deren Schlüssel Objekte oder [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sein müssen, mit Werten jeglichen beliebigen [JavaScript-Typs](/de/docs/Web/JavaScript/Data_structures), und die keine starken Referenzen auf ihre Schlüssel erstellt. Das bedeutet, dass die Anwesenheit eines Objekts als Schlüssel in einem `WeakMap` nicht verhindert, dass das Objekt durch den Garbage Collector entfernt wird. Sobald ein Objekt, das als Schlüssel verwendet wird, entsorgt wurde, werden seine entsprechenden Werte in jeder `WeakMap` ebenfalls zu Kandidaten für die Entsorgung durch den Garbage Collector – solange sie nicht stark anderswo referenziert werden. Der einzige primitive Typ, der als `WeakMap`-Schlüssel verwendet werden kann, ist das Symbol – genauer gesagt [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) –, da nicht registrierte Symbole garantiert einzigartig sind und nicht erneut erstellt werden können.

`WeakMap` ermöglicht die Zuordnung von Daten zu Objekten auf eine Weise, die nicht verhindert, dass die Schlüsselobjekte entfernt werden, selbst wenn die Werte die Schlüssel referenzieren. Eine `WeakMap` erlaubt jedoch nicht das Beobachten der Lebendigkeit ihrer Schlüssel, weshalb sie keine Enumeration erlaubt. Wenn eine `WeakMap` eine Methode bereitstellen würde, um eine Liste ihrer Schlüssel zu erhalten, würde die Liste vom Zustand der Garbage Collection abhängen und somit Nicht-Determinismus einführen. Wenn Sie eine Liste der Schlüssel haben möchten, sollten Sie eine {{jsxref("Map")}} anstelle einer `WeakMap` verwenden.

Sie können mehr über `WeakMap` im Abschnitt [WeakMap-Objekt](/de/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object) des Leitfadens zu [Keyed collections](/de/docs/Web/JavaScript/Guide/Keyed_collections) erfahren.

## Beschreibung

Schlüssel von WeakMaps müssen garbage-collectable sein. Die meisten {{Glossary("Primitive", "primitiven Datentypen")}} können beliebig erstellt werden und haben keine Lebensdauer, weshalb sie nicht als Schlüssel verwendet werden können. Objekte und [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) können als Schlüssel verwendet werden, da sie garbage-collectable sind.

### Warum WeakMap?

Ein Map-API _könnte_ in JavaScript mit zwei Arrays (eines für Schlüssel, eines für Werte) implementiert werden, die von den vier API-Methoden gemeinsam genutzt werden. Das Setzen von Elementen auf dieser Map würde bedeuten, dass gleichzeitig ein Schlüssel und ein Wert an das Ende jedes dieser Arrays angehängt werden. Infolgedessen würden die Indizes des Schlüssels und des Wertes beiden Arrays entsprechen. Das Abrufen von Werten aus der Map würde das Durchlaufen aller Schlüssel erfordern, um eine Übereinstimmung zu finden, und dann würde der Index dieser Übereinstimmung verwendet, um den entsprechenden Wert aus dem Array der Werte zu holen.

Eine solche Implementierung hätte zwei Hauptnachteile:

1. Der erste ist ein `O(n)` set und search (_n_ ist die Anzahl der Schlüssel in der Map), da beide Operationen die Liste der Schlüssel durchlaufen müssen, um einen passenden Wert zu finden.
2. Der zweite Nachteil ist ein Speicherleck, weil die Arrays sicherstellen, dass Referenzen zu jedem Schlüssel und jedem Wert unbegrenzt aufrechterhalten werden. Diese Referenzen verhindern, dass die Schlüssel durch den Garbage Collector entfernt werden, selbst wenn es keine anderen Referenzen auf das Objekt gibt. Dies würde auch verhindern, dass die entsprechenden Werte durch den Garbage Collector entfernt werden.

Im Gegensatz dazu referenziert in einer `WeakMap` ein Schlüsselobjekt stark seine Inhalte, solange der Schlüssel nicht durch den Garbage Collector entfernt wird, aber danach schwach. Daher:

- verhindert eine `WeakMap` keine Garbage Collection, die schließlich Referenzen auf das Schlüsselobjekt entfernt
- ermöglicht eine `WeakMap` die Garbage Collection von Werten, wenn ihre Schlüsselobjekte von keinem anderen Ort als einer `WeakMap` referenziert werden

Eine `WeakMap` kann ein besonders nützliches Konstrukt sein, wenn Schlüssel an Informationen gebunden werden, die _nur dann_ wertvoll sind, wenn der Schlüssel nicht durch den Garbage Collector entfernt wurde.

Da eine `WeakMap` das Beobachten der Lebendigkeit ihrer Schlüssel nicht erlaubt, sind ihre Schlüssel nicht aufzählbar. Es gibt keine Methode, um eine Liste der Schlüssel zu erhalten. Wenn es eine gäbe, würde die Liste vom Zustand der Garbage Collection abhängen und somit Nicht-Determinismus einführen. Wenn Sie eine Liste der Schlüssel haben möchten, sollten Sie eine {{jsxref("Map")}} verwenden.

## Konstruktor

- {{jsxref("WeakMap/WeakMap", "WeakMap()")}}
  - : Erstellt ein neues `WeakMap`-Objekt.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `WeakMap.prototype` definiert und werden von allen `WeakMap`-Instanzen gemeinsam genutzt.

- {{jsxref("Object/constructor", "WeakMap.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `WeakMap`-Instanzen ist der Anfangswert der {{jsxref("WeakMap/WeakMap", "WeakMap")}}-Konstruktor.
- `WeakMap.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"WeakMap"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("WeakMap.prototype.delete()")}}
  - : Entfernt einen mit dem `key` assoziierten Wert. `WeakMap.prototype.has(key)` gibt danach `false` zurück.
- {{jsxref("WeakMap.prototype.get()")}}
  - : Gibt den mit dem `key` assoziierten Wert zurück oder `undefined`, wenn keiner vorhanden ist.
- {{jsxref("WeakMap.prototype.has()")}}
  - : Gibt einen Boolean zurück, der angibt, ob ein Wert mit dem `key` im `WeakMap`-Objekt assoziiert wurde oder nicht.
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

### Implementieren einer klasse ähnlich WeakMap mit einer .clear() Methode

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

Entwickler können eine `WeakMap` verwenden, um privaten Daten zu einem Objekt zuzuordnen, mit folgenden Vorteilen:

- Im Vergleich zu einer {{jsxref("Map")}} hält eine WeakMap keine starken Referenzen auf das als Schlüssel verwendete Objekt, sodass die Metadaten die gleiche Lebensdauer haben wie das Objekt selbst, wodurch Speicherlecks vermieden werden.
- Im Vergleich zur Verwendung nicht aufzählbarer und/oder {{jsxref("Symbol")}} Eigenschaften ist eine WeakMap extern zum Objekt und es gibt keinen Weg für Benutzercode, die Metadaten durch Reflexionsmethoden wie {{jsxref("Object.getOwnPropertySymbols")}} abzurufen.
- Im Vergleich zu einer [closure](/de/docs/Web/JavaScript/Closures) kann die gleiche WeakMap für alle Instanzen, die von einem Konstruktor erstellt wurden, wiederverwendet werden, sodass sie speichereffizienter ist und verschiedene Instanzen derselben Klasse private Mitglieder voneinander lesen können.

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

Dies entspricht ungefähr dem folgenden, unter Verwendung von [privaten Feldern](/de/docs/Web/JavaScript/Reference/Classes/Private_properties):

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

Eine `WeakMap` kann verwendet werden, um Metadaten mit einem Objekt zu verknüpfen, ohne die Lebensdauer des Objekts selbst zu beeinflussen. Dies ist dem Beispiel der privaten Mitglieder sehr ähnlich, da private Mitglieder auch als externe Metadaten modelliert werden, die nicht an der [prototypischen Vererbung](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) teilnehmen.

Dieser Anwendungsfall kann auf bereits erstellte Objekte erweitert werden. Zum Beispiel können wir im Web zusätzliche Daten mit einem DOM-Element verknüpfen, auf das das DOM-Element später zugreifen kann. Ein häufiger Ansatz ist, die Daten als Eigenschaft anzuhängen:

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

Dieser Ansatz funktioniert, aber er hat einige Fallstricke:

- Die `clicked`-Eigenschaft ist aufzählbar, sodass sie in [`Object.keys(button)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys), [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Schleifen usw. angezeigt wird. Dies kann durch die Verwendung von {{jsxref("Object.defineProperty()")}} gemildert werden, aber das macht den Code umfangreicher.
- Die `clicked`-Eigenschaft ist eine normale String-Eigenschaft, sodass sie von anderem Code abgerufen und überschrieben werden kann. Dies kann durch die Verwendung eines {{jsxref("Symbol")}}-Schlüssels gemildert werden, aber der Schlüssel wäre immer noch über {{jsxref("Object.getOwnPropertySymbols()")}} zugänglich.

Verwenden einer `WeakMap`, um dies zu beheben:

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

Hier kennt nur der Code, der auf `clicked` Zugriff hat, den Klickzustand jedes Buttons, und externer Code kann die Zustände nicht ändern. Außerdem, wenn einer der Buttons aus dem DOM entfernt wird, werden die zugehörigen Metadaten automatisch durch den Garbage Collector entfernt.

### Caching

Sie können Objekte, die an eine Funktion übergeben werden, mit dem Ergebnis der Funktion verknüpfen, sodass bei erneutem Übergeben desselben Objekts das zwischengespeicherte Ergebnis zurückgegeben werden kann, ohne die Funktion erneut auszuführen. Dies ist nützlich, wenn die Funktion rein ist (d. h. sie verändert keine externen Objekte oder verursacht keine anderen beobachtbaren Nebeneffekte).

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

Dies funktioniert nur, wenn der Input Ihrer Funktion ein Objekt ist. Außerdem bleibt das Ergebnis in dem Cache, solange der Schlüssel (Input) aktiv ist, auch wenn der Input nie wieder übergeben wird. Eine effektivere Methode ist die Verwendung einer {{jsxref("Map")}} gepaart mit {{jsxref("WeakRef")}} Objekten, die es Ihnen ermöglichen, einen beliebigen Eingabewert mit seinem jeweiligen (möglicherweise großen) Berechnungsergebnis zu verknüpfen. Weitere Details finden Sie im Beispiel [WeakRefs und FinalizationRegistry](/de/docs/Web/JavaScript/Memory_management#weakrefs_and_finalizationregistry).

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `WeakMap` in `core-js`](https://github.com/zloirock/core-js#weakmap)
- [Keyed collections](/de/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object)
- [Hiding Implementation Details with ECMAScript 6 WeakMaps](https://fitzgen.com/2014/01/13/hiding-implementation-details-with-e6-weakmaps.html) von Nick Fitzgerald (2014)
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakSet")}}
