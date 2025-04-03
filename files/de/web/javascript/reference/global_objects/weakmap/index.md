---
title: WeakMap
slug: Web/JavaScript/Reference/Global_Objects/WeakMap
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{JSRef}}

Ein **`WeakMap`** ist eine Sammlung von Schlüssel/Wert-Paaren, deren Schlüssel Objekte oder [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sein müssen, mit Werten eines beliebigen [JavaScript-Typs](/de/docs/Web/JavaScript/Guide/Data_structures), und die keine starken Verweise auf ihre Schlüssel erstellt. Das bedeutet, dass die Anwesenheit eines Objekts als Schlüssel in einer `WeakMap` das Objekt nicht daran hindert, vom Garbage Collector entfernt zu werden. Sobald ein als Schlüssel verwendetes Objekt gesammelt wurde, werden auch seine entsprechenden Werte in einer `WeakMap` zu Kandidaten für die Speicherbereinigung — solange sie nicht an anderer Stelle stark referenziert werden. Der einzige primitive Typ, der als `WeakMap`-Schlüssel verwendet werden kann, ist Symbol — genauer gesagt [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) —, da nicht registrierte Symbole garantiert einzigartig sind und nicht neu erstellt werden können.

`WeakMap` ermöglicht die Zuordnung von Daten zu Objekten auf eine Weise, die das Sammeln der Schlüsselobjekte nicht verhindert, selbst wenn die Werte die Schlüssel referenzieren. Allerdings erlaubt eine `WeakMap` nicht, die Lebendigkeit ihrer Schlüssel zu beobachten, weshalb sie keine Enumeration erlaubt; wenn eine `WeakMap` eine Methode bereitstellen würde, um eine Liste ihrer Schlüssel zu erhalten, würde die Liste vom Zustand der Speicherbereinigung abhängen, was zu Nicht-Determinismus führen würde. Wenn Sie eine Liste von Schlüsseln haben möchten, sollten Sie besser eine {{jsxref("Map")}} anstelle einer `WeakMap` verwenden.

Mehr über `WeakMap` erfahren Sie im Abschnitt [WeakMap-Objekt](/de/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object) des [Leitfadens für Keyed Collections](/de/docs/Web/JavaScript/Guide/Keyed_collections).

## Beschreibung

Die Schlüssel von WeakMaps müssen sammelbar sein. Die meisten {{Glossary("Primitive", "primitiven Datentypen")}} können beliebig erstellt werden und haben keine Lebensdauer, daher können sie nicht als Schlüssel verwendet werden. Objekte und [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) können als Schlüssel verwendet werden, da sie sammelbar sind.

### Warum WeakMap?

Ein Map-API _könnte_ in JavaScript mit zwei Arrays (eines für Schlüssel, eines für Werte) implementiert werden, die von den vier API-Methoden geteilt werden. Das Setzen von Elementen auf dieser Map würde beinhalten, dass gleichzeitig ein Schlüssel und ein Wert an das Ende jedes dieser Arrays angehängt werden. Infolgedessen würden die Indizes des Schlüssels und des Wertes beiden Arrays entsprechen. Das Abrufen von Werten aus der Map würde das Durchlaufen aller Schlüssel zur Suche nach einem Übereinstimmung erfordern, dann den Index dieser Übereinstimmung verwenden, um den entsprechenden Wert aus dem Werte-Array zu erhalten.

Eine solche Implementierung hätte zwei Hauptnachteile:

1. Der erste ist ein `O(n)`-Setzen und -Suchen (_n_ ist die Anzahl der Schlüssel in der Map), da beide Operationen durch die Liste der Schlüssel iterieren müssen, um einen passenden Wert zu finden.
2. Der zweite Nachteil ist ein Speicherleck, weil die Arrays sicherstellen, dass Referenzen zu jedem Schlüssel und jedem Wert unbegrenzt erhalten bleiben. Diese Referenzen hindern die Schlüssel daran, vom Garbage Collector eingesammelt zu werden, selbst wenn es keine anderen Referenzen zu dem Objekt gibt. Dies würde auch verhindern, dass die entsprechenden Werte gesammelt werden.

Im Gegensatz dazu bezieht sich ein Schlüsselobjekt in einer `WeakMap` so lange stark auf seinen Inhalt, wie der Schlüssel nicht vom Garbage Collector eingesammelt wird, danach schwach. Eine `WeakMap`:

- verhindert nicht die Speicherbereinigung, die schließlich Verweise auf das Schlüsselobjekt entfernt
- erlaubt die Speicherbereinigung von Werten, wenn ihre Schlüsselobjekte nicht von außerhalb einer `WeakMap` referenziert werden

Eine `WeakMap` kann ein besonders nützliches Konstrukt sein, wenn Schlüssel auf Informationen über den Schlüssel abgebildet werden, die _nur dann_ von Wert sind, wenn der Schlüssel noch nicht vom Garbage Collector eingesammelt wurde.

Da eine `WeakMap` das Beobachten der Lebendigkeit ihrer Schlüssel nicht erlaubt, sind ihre Schlüssel nicht aufzählbar. Es gibt keine Methode, um eine Liste der Schlüssel zu erhalten. Wenn es sie gäbe, würde die Liste vom Zustand der Speicherbereinigung abhängen, was zu Nicht-Determinismus führen würde. Wenn Sie eine Liste von Schlüsseln haben möchten, sollten Sie besser eine {{jsxref("Map")}} verwenden.

## Konstruktor

- {{jsxref("WeakMap/WeakMap", "WeakMap()")}}
  - : Erzeugt ein neues `WeakMap`-Objekt.

## Instanzeigenschaften

Diese Eigenschaften sind auf `WeakMap.prototype` definiert und werden von allen `WeakMap`-Instanzen geteilt.

- {{jsxref("Object/constructor", "WeakMap.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `WeakMap`-Instanzen ist der anfängliche Wert der {{jsxref("WeakMap/WeakMap", "WeakMap")}}-Konstruktor.
- `WeakMap.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist die Zeichenkette `"WeakMap"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("WeakMap.prototype.delete()")}}
  - : Entfernt einen mit dem `key` assoziierten Wert. `WeakMap.prototype.has(key)` gibt danach `false` zurück.
- {{jsxref("WeakMap.prototype.get()")}}
  - : Gibt den mit dem `key` assoziierten Wert zurück oder `undefined`, wenn keiner existiert.
- {{jsxref("WeakMap.prototype.has()")}}
  - : Gibt einen Boolean zurück, der angibt, ob ein Wert im `WeakMap`-Objekt mit dem `key` assoziiert ist.
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

### Simulation privater Mitglieder

Entwickler können eine `WeakMap` verwenden, um private Daten mit einem Objekt zu verknüpfen, mit den folgenden Vorteilen:

- Im Vergleich zu einer {{jsxref("Map")}} hält eine WeakMap keine starken Referenzen auf das Objekt, das als Schlüssel verwendet wird, sodass die Metadaten die gleiche Lebensdauer wie das Objekt selbst haben und Speicherlecks vermieden werden.
- Im Vergleich zur Verwendung nicht aufzählbarer und/oder {{jsxref("Symbol")}}-Eigenschaften ist eine WeakMap extern zum Objekt und es gibt keine Möglichkeit für Benutzer-Code, die Metadaten durch reflektive Methoden wie {{jsxref("Object.getOwnPropertySymbols")}} abzurufen.
- Im Vergleich zu einem [Closure](/de/docs/Web/JavaScript/Guide/Closures) kann die gleiche WeakMap für alle Instanzen wiederverwendet werden, die von einem Konstruktor erstellt wurden, was speichereffizienter ist, und es ermöglicht unterschiedlichen Instanzen derselben Klasse, die privaten Mitglieder voneinander zu lesen.

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

Dies entspricht grob dem Folgenden, bei Verwendung von [privaten Feldern](/de/docs/Web/JavaScript/Reference/Classes/Private_properties):

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

Eine `WeakMap` kann verwendet werden, um Metadaten mit einem Objekt zu verknüpfen, ohne die Lebensdauer des Objekts selbst zu beeinflussen. Dies ist dem Beispiel mit den privaten Mitgliedern sehr ähnlich, da private Mitglieder auch als externe Metadaten modelliert werden, die nicht an der [prototypischen Vererbung](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) teilnehmen.

Diese Anwendungsfall kann auf bereits erstellte Objekte ausgeweitet werden. Beispielsweise könnten wir im Web zusätzliche Daten mit einem DOM-Element verknüpfen wollen, auf das das DOM-Element später zugreifen kann. Ein typischer Ansatz ist es, die Daten als Eigenschaft anzuhängen:

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

- Die `clicked`-Eigenschaft ist aufzählbar, sodass sie in [`Object.keys(button)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys), [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen usw. angezeigt wird. Dies kann durch Verwendung von {{jsxref("Object.defineProperty()")}} gemildert werden, macht den Code aber ausführlicher.
- Die `clicked`-Eigenschaft ist eine normale String-Eigenschaft, sodass sie von anderem Code zugegriffen und überschrieben werden kann. Dies kann durch Verwendung eines {{jsxref("Symbol")}}-Schlüssels gemildert werden, aber der Schlüssel wäre immer noch über {{jsxref("Object.getOwnPropertySymbols()")}} zugänglich.

Verwendung einer `WeakMap` behebt diese Probleme:

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

Hier kennt nur der Code, der Zugriff auf `clicked` hat, den geklickten Zustand jedes Buttons, und externer Code kann die Zustände nicht ändern. Außerdem werden die zugehörigen Metadaten automatisch gesammelt, wenn einer der Buttons aus dem DOM entfernt wird.

### Caching

Sie können Objekte, die einer Funktion übergeben werden, mit dem Ergebnis der Funktion verknüpfen, sodass, wenn das gleiche Objekt erneut übergeben wird, das zwischengespeicherte Ergebnis zurückgegeben werden kann, ohne die Funktion erneut auszuführen. Dies ist nützlich, wenn die Funktion rein ist (d.h. sie mutiert keine äußeren Objekte oder verursacht keine anderen beobachtbaren Seiteneffekte).

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

Dies funktioniert nur, wenn die Eingabe Ihrer Funktion ein Objekt ist. Außerdem bleibt das Ergebnis für immer im Cache, solange der Schlüssel (die Eingabe) lebt, selbst wenn die Eingabe nie wieder verwendet wird. Ein effektiverer Weg ist die Verwendung einer {{jsxref("Map")}}, kombiniert mit {{jsxref("WeakRef")}}-Objekten, wodurch Sie jeden Eingabetyp mit seinem jeweiligen (potenziell großen) Berechnungsergebnis verknüpfen können. Weitere Details finden Sie im [WeakRefs und FinalizationRegistry](/de/docs/Web/JavaScript/Guide/Memory_management#weakrefs_and_finalizationregistry)-Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `WeakMap` in `core-js`](https://github.com/zloirock/core-js#weakmap)
- [Keyed Collections](/de/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object)
- [Hiding Implementation Details with ECMAScript 6 WeakMaps](https://fitzgen.com/2014/01/13/hiding-implementation-details-with-e6-weakmaps.html) von Nick Fitzgerald (2014)
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakSet")}}
