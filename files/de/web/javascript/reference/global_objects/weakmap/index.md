---
title: WeakMap
slug: Web/JavaScript/Reference/Global_Objects/WeakMap
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{JSRef}}

Ein **`WeakMap`** ist eine Sammlung von Schlüssel/Wert-Paaren, wobei die Schlüssel Objekte oder [nicht-registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sein müssen und die Werte jeden beliebigen [JavaScript-Typ](/de/docs/Web/JavaScript/Guide/Data_structures) annehmen können. `WeakMap` erstellt keine starken Referenzen auf seine Schlüssel. Das bedeutet, dass die Präsenz eines Objekts als Schlüssel in einer `WeakMap` das Objekt nicht daran hindert, vom Garbage Collector eingesammelt zu werden. Sobald ein Objekt, das als Schlüssel verwendet wurde, eingesammelt wurde, werden auch seine entsprechenden Werte in einer `WeakMap` zu Kandidaten für das Garbage Collection, solange sie nicht an anderer Stelle stark referenziert werden. Der einzige primitive Typ, der als `WeakMap`-Schlüssel verwendet werden kann, ist ein Symbol — genauer gesagt, [nicht-registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) —, da nicht-registrierte Symbole garantiert eindeutig sind und nicht wiedererzeugt werden können.

`WeakMap` ermöglicht das Verknüpfen von Daten mit Objekten in einer Weise, die das Einsammeln der Schlüsselobjekte durch den Garbage Collector nicht verhindert, selbst wenn die Werte die Schlüssel referenzieren. Jedoch erlaubt eine `WeakMap` nicht das Beobachten der Existenz ihrer Schlüssel, weshalb sie keine Enumeration zulässt; wenn eine `WeakMap` eine Methode bereitstellte, um eine Liste ihrer Schlüssel zu erhalten, würde diese Liste vom Zustand der Garbage Collection abhängen, was zu Nichtdeterminismus führen würde. Wenn Sie eine Liste von Schlüsseln haben möchten, sollten Sie eher eine {{jsxref("Map")}} verwenden als eine `WeakMap`.

Sie können mehr über `WeakMap` im Abschnitt [WeakMap-Objekt](/de/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object) des [Leitfadens](/de/docs/Web/JavaScript/Guide/Keyed_collections) zu Schlüssel-Sammlungen erfahren.

## Beschreibung

Schlüssel von WeakMaps müssen vom Garbage Collector eingesammelt werden können. Die meisten {{Glossary("Primitive", "primitiven Datentypen")}} können beliebig erstellt werden und haben keine Lebensdauer, daher können sie nicht als Schlüssel verwendet werden. Objekte und [nicht-registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) können als Schlüssel verwendet werden, da sie gesammelt werden können.

### Warum WeakMap?

Ein Karten-API _könnte_ in JavaScript mit zwei Arrays (eines für Schlüssel, eines für Werte) implementiert werden, die von den vier API-Methoden geteilt werden. Elemente auf dieser Karte zu setzen, würde bedeuten, dass ein Schlüssel und ein Wert gleichzeitig an das Ende jedes dieser Arrays angehängt werden. Somit würden die Indizes des Schlüssels und des Werts in beiden Arrays übereinstimmen. Um Werte aus der Karte abzurufen, müsste man alle Schlüssel durchlaufen, um eine Übereinstimmung zu finden, und dann den Index dieser Übereinstimmung verwenden, um den entsprechenden Wert aus dem Wert-Array abzurufen.

Eine solche Implementierung hätte zwei Hauptnachteile:

1. Der erste Nachteil ist eine `O(n)`-Einstellung und -Suche (_n_ ist die Anzahl der Schlüssel in der Karte), da beide Operationen durch die Liste der Schlüssel iterieren müssen, um ein übereinstimmendes Element zu finden.
2. Der zweite Nachteil ist ein Speicherleck, denn die Arrays sorgen dafür, dass Referenzen auf jeden Schlüssel und jeden Wert unbegrenzt erhalten bleiben. Diese Referenzen verhindern, dass die Schlüssel gesammelt werden, selbst wenn es keine anderen Referenzen auf das Objekt gibt. Dies würde auch verhindern, dass die entsprechenden Werte gesammelt werden.

Im Gegensatz dazu bezieht sich in einer `WeakMap` ein Schlüsselobjekt stark auf seinen Inhalt, solange der Schlüssel nicht gesammelt wird, und schwach danach. Somit:

- verhindert eine `WeakMap` nicht das Einsammeln durch den Garbage Collector, der schließlich die Referenzen auf das Schlüsselobjekt entfernt
- erlaubt sie das Einsammeln von Werten, wenn deren Schlüsselobjekte nicht von einer anderen Stelle als der `WeakMap` referenziert werden

Eine `WeakMap` kann ein besonders nützliches Konstrukt sein, wenn Schlüssel mit Informationen über den Schlüssel selbst verknüpft werden sollen, die nur dann wertvoll sind, wenn der Schlüssel noch nicht gesammelt wurde.

Da eine `WeakMap` jedoch nicht das Beobachten der Existenz ihrer Schlüssel erlaubt, sind die Schlüssel nicht aufzählbar. Es gibt keine Methode, um eine Liste der Schlüssel zu erhalten. Wenn es eine gäbe, würde die Liste vom Zustand der Garbage Collection abhängen, was zu Nichtdeterminismus führen würde. Wenn Sie eine Liste von Schlüsseln benötigen, sollten Sie eine {{jsxref("Map")}} verwenden.

## Konstruktor

- {{jsxref("WeakMap/WeakMap", "WeakMap()")}}
  - : Erstellt ein neues `WeakMap`-Objekt.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `WeakMap.prototype` definiert und werden von allen `WeakMap`-Instanzen geteilt.

- {{jsxref("Object/constructor", "WeakMap.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanzobjekt erstellt hat. Für `WeakMap`-Instanzen ist der Anfangswert der {{jsxref("WeakMap/WeakMap", "WeakMap")}}-Konstruktor.
- `WeakMap.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"WeakMap"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("WeakMap.prototype.delete()")}}
  - : Entfernt einen beliebigen Wert, der mit dem `key` verbunden ist. `WeakMap.prototype.has(key)` wird danach `false` zurückgeben.
- {{jsxref("WeakMap.prototype.get()")}}
  - : Gibt den mit dem `key` verbundenen Wert zurück oder `undefined`, wenn keiner vorhanden ist.
- {{jsxref("WeakMap.prototype.has()")}}
  - : Gibt einen Boolean zurück, der angibt, ob ein Wert mit dem `key` im `WeakMap`-Objekt verbunden ist oder nicht.
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

### Emulieren privater Mitglieder

Entwickler können eine `WeakMap` verwenden, um private Daten mit einem Objekt zu verknüpfen, mit den folgenden Vorteilen:

- Im Vergleich zu einer {{jsxref("Map")}} hält eine WeakMap keine starken Referenzen auf das als Schlüssel verwendete Objekt, sodass die Metadaten die gleiche Lebensdauer haben wie das Objekt selbst, wodurch Speicherlecks vermieden werden.
- Im Vergleich zur Verwendung nicht-auflistbarer und/oder {{jsxref("Symbol")}}-Eigenschaften ist eine WeakMap extern zum Objekt und es gibt keine Möglichkeit für Nutzercode, die Metadaten durch reflektive Methoden wie {{jsxref("Object.getOwnPropertySymbols")}} abzurufen.
- Im Vergleich zu einem [Closure](/de/docs/Web/JavaScript/Guide/Closures) kann die gleiche WeakMap für alle Instanzen verwendet werden, die aus einem Konstruktor erstellt werden, was sie speichereffizienter macht und es verschiedenen Instanzen derselben Klasse ermöglicht, die privaten Mitglieder voneinander zu lesen.

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

Dies ist in etwa gleichwertig zu folgendem, unter Verwendung von [privaten Feldern](/de/docs/Web/JavaScript/Reference/Classes/Private_properties):

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

### Metadaten verknüpfen

Eine `WeakMap` kann verwendet werden, um Metadaten mit einem Objekt zu verknüpfen, ohne die Lebensdauer des Objekts selbst zu beeinträchtigen. Dieses Beispiel ist dem der privaten Mitglieder sehr ähnlich, da private Mitglieder ebenfalls als externe Metadaten modelliert sind, die nicht an der [prototypischen Vererbung](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) teilnehmen.

Dieser Anwendungsfall kann auf bereits erstellte Objekte ausgeweitet werden. Zum Beispiel, im Web, möchten wir möglicherweise zusätzliche Daten mit einem DOM-Element verknüpfen, auf die das DOM-Element später zugreifen kann. Ein gängiger Ansatz ist, die Daten als Eigenschaft anzuhängen:

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

Dieser Ansatz funktioniert, hat aber einige Fallstricke:

- Die `clicked`-Eigenschaft ist aufzählbar, so dass sie in [`Object.keys(button)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys), [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Schleifen usw. angezeigt wird. Dies kann durch die Verwendung von {{jsxref("Object.defineProperty()")}} abgeschwächt werden, macht den Code jedoch ausführlicher.
- Die `clicked`-Eigenschaft ist eine normale String-Eigenschaft, sodass sie von anderem Code zugegriffen und überschrieben werden kann. Dies kann durch die Verwendung eines {{jsxref("Symbol")}}-Schlüssels abgeschwächt werden, aber der Schlüssel wäre immer noch über {{jsxref("Object.getOwnPropertySymbols()")}} zugänglich.

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

Hier kennt nur Code, der Zugriff auf `clicked` hat, den geklickten Zustand jedes Buttons, und externer Code kann die Zustände nicht ändern. Zudem werden, wenn ein Button aus dem DOM entfernt wird, die zugehörigen Metadaten automatisch vom Garbage Collector gesammelt.

### Caching

Sie können Objekte, die an eine Funktion übergeben werden, mit dem Ergebnis der Funktion verknüpfen, sodass, wenn das gleiche Objekt erneut übergeben wird, das zwischengespeicherte Ergebnis zurückgegeben werden kann, ohne die Funktion erneut auszuführen. Dies ist nützlich, wenn die Funktion rein ist (d.h. sie mutiert keine externen Objekte oder verursacht andere beobachtbare Seiteneffekte).

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

Dies funktioniert nur, wenn die Eingabe Ihrer Funktion ein Objekt ist. Selbst wenn die Eingabe nie wieder übergeben wird, bleibt das Ergebnis für immer im Cache, solange der Schlüssel (die Eingabe) existiert. Eine effektivere Möglichkeit ist die Verwendung eines {{jsxref("Map")}} gepaart mit {{jsxref("WeakRef")}}-Objekten, die es Ihnen ermöglichen, jedem Eingabewert seinen jeweiligen (potenziell großen) Berechnungsergebnis zuzuordnen. Weitere Details finden Sie im Beispiel [WeakRefs und FinalizationRegistry](/de/docs/Web/JavaScript/Guide/Memory_management#weakrefs_and_finalizationregistry).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `WeakMap` in `core-js`](https://github.com/zloirock/core-js#weakmap)
- [Schlüssel-Sammlungen](/de/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object)
- [Hiding Implementation Details with ECMAScript 6 WeakMaps](https://fitzgen.com/2014/01/13/hiding-implementation-details-with-e6-weakmaps.html) von Nick Fitzgerald (2014)
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakSet")}}
