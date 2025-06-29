---
title: WeakMap
slug: Web/JavaScript/Reference/Global_Objects/WeakMap
l10n:
  sourceCommit: 48184c65d7e6d59e867806d9e349661c737bdc4b
---

{{JSRef}}

Ein **`WeakMap`** ist eine Sammlung von Schlüssel/Wert-Paaren, deren Schlüssel Objekte oder [nicht-registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sein müssen, mit Werten von beliebigem [JavaScript-Typ](/de/docs/Web/JavaScript/Guide/Data_structures), und die keine starken Referenzen zu ihren Schlüsseln erstellt. Das heißt, die Anwesenheit eines Objekts als Schlüssel in einer `WeakMap` hindert nicht daran, dass das Objekt durch den Garbage Collector entfernt wird. Sobald ein Objekt, das als Schlüssel verwendet wird, gelöscht wurde, werden seine entsprechenden Werte in einer `WeakMap` ebenfalls zum Kandidaten für die Müllabfuhr, solange sie nicht anderswo stark referenziert werden. Der einzige primitive Typ, der als `WeakMap`-Schlüssel verwendet werden kann, ist das Symbol - genauer gesagt [nicht-registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) - da nicht-registrierte Symbole garantiert einzigartig sind und nicht erneut erstellt werden können.

`WeakMap` ermöglicht die Zuordnung von Daten zu Objekten auf eine Weise, die nicht verhindert, dass die Schlüsselobjekte gesammelt werden, selbst wenn die Werte die Schlüssel referenzieren. Eine `WeakMap` erlaubt es jedoch nicht, das Vorhandensein ihrer Schlüssel zu beobachten, weshalb sie keine Aufzählung erlaubt; wenn eine `WeakMap` eine Methode zur Verfügung stellen würde, um eine Liste ihrer Schlüssel zu erhalten, würde die Liste vom Zustand der Garbage Collection abhängen, was zu Nicht-Determinismus führen würde. Wenn Sie eine Liste von Schlüsseln haben möchten, sollten Sie eine {{jsxref("Map")}} anstelle einer `WeakMap` verwenden.

Sie können mehr über `WeakMap` im Abschnitt [WeakMap-Objekt](/de/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object) des Leitfadens für [Keyed collections](/de/docs/Web/JavaScript/Guide/Keyed_collections) erfahren.

## Beschreibung

Schlüssel von WeakMaps müssen aufräumbar sein. Die meisten {{Glossary("Primitive", "primitiven Datentypen")}} können willkürlich erstellt werden und haben keine Lebensdauer, weshalb sie nicht als Schlüssel verwendet werden können. Objekte und [nicht-registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) können als Schlüssel verwendet werden, weil sie aufräumbar sind.

### Warum WeakMap?

Eine Map-API _könnte_ in JavaScript mit zwei Arrays (eines für Schlüssel, eines für Werte) implementiert werden, die von den vier API-Methoden gemeinsam genutzt werden. Elemente in dieser Map zu setzen bedeutet, gleichzeitig einen Schlüssel und einen Wert am Ende jedes dieser Arrays hinzuzufügen. Dadurch würden die Indizes des Schlüssels und des Wertes in beiden Arrays übereinstimmen. Um Werte von der Map zu erhalten, müsste durch alle Schlüssel iteriert werden, um eine Übereinstimmung zu finden, und dann der Index dieser Übereinstimmung verwendet werden, um den entsprechenden Wert aus dem Array der Werte abzurufen.

Eine solche Implementierung hätte zwei Hauptunzulänglichkeiten:

1. Die erste ist ein `O(n)`-Setzen und -Suchen (_n_ ist die Anzahl der Schlüssel in der Map), da beide Operationen durch die Liste der Schlüssel iterieren müssen, um einen passenden Wert zu finden.
2. Die zweite Unzulänglichkeit ist ein Speicherleck, da die Arrays sicherstellen, dass Referenzen zu jedem Schlüssel und jedem Wert dauerhaft bestehen bleiben. Diese Referenzen verhindern, dass die Schlüssel durch den Garbage Collector entfernt werden, selbst wenn es keine anderen Referenzen zum Objekt gibt. Dies würde auch verhindern, dass die entsprechenden Werte durch den Garbage Collector entfernt werden.

Im Gegensatz dazu verweist in einer `WeakMap` ein Schlüsselobjekt stark auf seine Inhalte, solange der Schlüssel nicht durch den Garbage Collector entfernt wird, aber schwach von da an. Daher führt eine `WeakMap`:

- nicht zur Verhinderung der Müllabfuhr, die schließlich Referenzen zum Schlüsselobjekt entfernt
- zur Müllabfuhr von beliebigen Werten, wenn ihre Schlüsselobjekte nicht von einer anderen Quelle als einer `WeakMap` referenziert werden

Eine `WeakMap` kann besonders nützlich sein, wenn Schlüsseln Informationen zugeordnet werden sollen, die _nur dann_ von Wert sind, wenn der Schlüssel nicht durch den Garbage Collector entfernt wurde.

Da eine `WeakMap` jedoch nicht das Vorhandensein ihrer Schlüssel beobachten lässt, sind ihre Schlüssel nicht aufzählbar. Es gibt keine Methode, um eine Liste der Schlüssel zu erhalten. Wenn es eine gäbe, würde die Liste vom Zustand der Garbage Collection abhängen, was zu Nicht-Determinismus führen würde. Wenn Sie eine Liste von Schlüsseln haben möchten, sollten Sie eine {{jsxref("Map")}} verwenden.

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
  - : Entfernt einen Wert, der dem `key` zugeordnet ist. `WeakMap.prototype.has(key)` gibt danach `false` zurück.
- {{jsxref("WeakMap.prototype.get()")}}
  - : Gibt den dem `key` zugeordneten Wert zurück oder `undefined`, wenn keiner vorhanden ist.
- {{jsxref("WeakMap.prototype.has()")}}
  - : Gibt einen Boolean zurück, der angibt, ob ein Wert dem `key` im `WeakMap`-Objekt zugeordnet wurde oder nicht.
- {{jsxref("WeakMap.prototype.set()")}}
  - : Setzt den `value` für den `key` im `WeakMap`-Objekt. Gibt das `WeakMap`-Objekt zurück.

## Beispiele

### Verwenden von WeakMap

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

### Emulieren von privaten Mitgliedern

Entwickler können eine `WeakMap` verwenden, um einem Objekt private Daten zuzuordnen, mit folgenden Vorteilen:

- Im Vergleich zu einer {{jsxref("Map")}} hält eine WeakMap keine starken Referenzen zu dem Objekt, das als Schlüssel verwendet wird, sodass die Metadaten die gleiche Lebensdauer wie das Objekt selbst haben und Speicherlecks vermieden werden.
- Im Vergleich zur Verwendung von nicht-aufzählbaren und/oder {{jsxref("Symbol")}}-Eigenschaften ist eine WeakMap extern zum Objekt und es gibt keine Möglichkeit für Benutzercode, die Metadaten durch reflektive Methoden wie {{jsxref("Object.getOwnPropertySymbols")}} abzurufen.
- Im Vergleich zu einer [Closure](/de/docs/Web/JavaScript/Guide/Closures) kann die gleiche WeakMap für alle Instanzen, die von einem Konstruktor erstellt wurden, wiederverwendet werden, was sie speichereffizienter macht, und es erlaubt verschiedenen Instanzen derselben Klasse, die privaten Mitglieder voneinander zu lesen.

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

Dies entspricht in etwa dem folgenden, unter Verwendung von [privaten Feldern](/de/docs/Web/JavaScript/Reference/Classes/Private_elements):

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

Eine `WeakMap` kann verwendet werden, um einem Objekt Metadaten zuzuordnen, ohne die Lebensdauer des Objekts selbst zu beeinflussen. Dies ist dem Beispiel für private Mitglieder sehr ähnlich, da private Mitglieder auch als externe Metadaten modelliert werden, die nicht an [prototypische Vererbung](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) teilnehmen.

Dieser Anwendungsfall kann auf bereits erstellte Objekte ausgeweitet werden. Zum Beispiel möchten wir im Web möglicherweise zusätzliche Daten mit einem DOM-Element verknüpfen, auf die das DOM-Element später zugreifen kann. Ein gängiger Ansatz ist, die Daten als Eigenschaft anzuhängen:

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

Dieser Ansatz funktioniert, aber er hat einige Nachteile:

- Die Eigenschaft `clicked` ist aufzählbar, sodass sie in [`Object.keys(button)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys), [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen usw. angezeigt wird. Dies kann durch die Verwendung von {{jsxref("Object.defineProperty()")}} gemildert werden, aber das macht den Code ausführlicher.
- Die Eigenschaft `clicked` ist eine normale String-Eigenschaft, sodass sie von anderem Code zugegriffen und überschrieben werden kann. Dies kann durch die Verwendung eines {{jsxref("Symbol")}}-Schlüssels gemildert werden, aber der Schlüssel wäre immer noch über {{jsxref("Object.getOwnPropertySymbols()")}} zugänglich.

Die Verwendung einer `WeakMap` beseitigt diese Probleme:

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

Hier kennt nur der Code, der Zugriff auf `clicked` hat, den geklickten Zustand jedes Buttons, und externer Code kann die Zustände nicht ändern. Zusätzlich, wenn einer der Buttons aus dem DOM entfernt wird, werden die zugehörigen Metadaten automatisch durch den Garbage Collector entfernt.

### Caching

Sie können Objekte, die an eine Funktion übergeben werden, mit dem Ergebnis der Funktion verknüpfen, sodass das zwischengespeicherte Ergebnis zurückgegeben werden kann, wenn dasselbe Objekt erneut übergeben wird, ohne die Funktion erneut auszuführen. Dies ist nützlich, wenn die Funktion rein ist (d.h. sie ändert keine externen Objekte und verursacht keine anderen beobachtbaren Nebeneffekte).

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

Dies funktioniert nur, wenn der Eingabewert der Funktion ein Objekt ist. Außerdem bleibt das Ergebnis auch dann dauerhaft im Cache, wenn der Eingabewert nie wieder übergeben wird, solange der Schlüssel (Eingabe) aktiv ist. Eine effektivere Methode besteht darin, eine {{jsxref("Map")}} gepaart mit {{jsxref("WeakRef")}}-Objekten zu verwenden, die es Ihnen erlaubt, beliebige Eingabewerte einem jeweiligen (potenziell großen) Berechnungsergebnis zuzuordnen. Weitere Details finden Sie im Beispiel [WeakRefs und FinalizationRegistry](/de/docs/Web/JavaScript/Guide/Memory_management#weakrefs_and_finalizationregistry).

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
