---
title: WeakMap
slug: Web/JavaScript/Reference/Global_Objects/WeakMap
l10n:
  sourceCommit: 5090588abe4ede9c88cb75799ca6cb89de53e3e8
---

Ein **`WeakMap`** ist eine Sammlung von Schlüssel/Wert-Paaren, bei der die Schlüssel Objekte oder [nicht-registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sein müssen, mit Werten beliebigen [JavaScript-Typs](/de/docs/Web/JavaScript/Guide/Data_structures). Es werden keine starken Referenzen auf die Schlüssel erstellt. Das bedeutet, dass die Anwesenheit eines Objekts als Schlüssel in einer `WeakMap` nicht verhindert, dass das Objekt vom Garbage Collector gesammelt wird. Sobald ein Objekt, das als Schlüssel verwendet wird, gesammelt wurde, werden seine entsprechenden Werte in jeder `WeakMap` ebenfalls Kandidaten für die Garbage Collection — solange sie nicht anderswo stark referenziert sind. Der einzige primitive Typ, der als Schlüssel einer `WeakMap` verwendet werden kann, ist das Symbol — genauer gesagt, [nicht-registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) —, da nicht-registrierte Symbole garantiert einzigartig sind und nicht erneut erstellt werden können.

`WeakMap` ermöglicht das Verknüpfen von Daten mit Objekten auf eine Weise, die nicht verhindert, dass die Schlüsselobjekte gesammelt werden, selbst wenn die Werte die Schlüssel referenzieren. Eine `WeakMap` erlaubt jedoch nicht die Beobachtung der Lebendigkeit ihrer Schlüssel, weshalb sie keine Enumeration zulässt; wenn eine `WeakMap` irgendeine Methode bereitstellen würde, um eine Liste ihrer Schlüssel zu erhalten, würde die Liste vom Zustand der Garbage Collection abhängen und Nicht-Determinismus einführen. Wenn Sie eine Liste von Schlüsseln haben möchten, sollten Sie eher {{jsxref("Map")}} als eine `WeakMap` verwenden.

Sie können mehr über die `WeakMap` im Abschnitt [WeakMap-Objekt](/de/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object) des [Leitfadens zu Schlüssel-Sammlungen](/de/docs/Web/JavaScript/Guide/Keyed_collections) erfahren.

## Beschreibung

Die Schlüssel von WeakMaps müssen Garbage-Collectable sein. Die meisten {{Glossary("Primitive", "primitiven Datentypen")}} können willkürlich erstellt werden und haben keine Lebensdauer, sodass sie nicht als Schlüssel verwendet werden können. Objekte und [nicht-registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) können als Schlüssel verwendet werden, da sie Garbage-Collectable sind.

### Schlüsselgleichheit

Wie bei regulären `Map`, basiert die Wertgleichheit auf dem [SameValueZero](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality)-Algorithmus, der dem `===`-Operator entspricht, da `WeakMap` nur Objekt- und Symbolschlüssel halten kann. Das bedeutet, dass die Gleichheit für Objektschlüssel auf der Objektidentität basiert. Sie werden durch {{Glossary("Object_reference", "Referenz")}} und nicht durch Wert verglichen.

### Warum WeakMap?

Eine Karten-API _könnte_ in JavaScript mit zwei Arrays (einem für Schlüssel, einem für Werte) implementiert werden, die von den vier API-Methoden gemeinsam genutzt werden. Das Hinzufügen von Elementen auf dieser Karte würde gleichzeitig das Anhängen eines Schlüssels und eines Wertes an das Ende jedes dieser Arrays beinhalten. Dadurch würden die Indizes des Schlüssels und des Wertes mit beiden Arrays korrespondieren. Das Abrufen von Werten von der Karte würde das Durchlaufen aller Schlüssel zum Finden eines Übereinstimmung erfordern und dann den Index dieser Übereinstimmung verwenden, um den entsprechenden Wert aus dem Array der Werte abzurufen.

Eine solche Implementierung hätte zwei wesentliche Nachteile:

1. Der erste ist ein `O(n)` für das Setzen und Suchen (_n_ ist die Anzahl der Schlüssel in der Karte), da beide Operationen die Liste der Schlüssel durchlaufen müssen, um einen passenden Wert zu finden.
2. Der zweite Nachteil ist ein Speicherleck, weil die Arrays sicherstellen, dass Referenzen auf jeden Schlüssel und jeden Wert auf unbestimmte Zeit aufrechterhalten werden. Diese Referenzen verhindern, dass die Schlüssel vom Garbage Collector gesammelt werden, selbst wenn es keine anderen Referenzen auf das Objekt gibt. Dies würde auch verhindern, dass die entsprechenden Werte gesammelt werden.

Im Gegensatz dazu referenziert ein Schlüsselobjekt in einer `WeakMap` seine Inhalte stark, solange der Schlüssel nicht gesammelt wird, danach jedoch nur noch schwach. Eine `WeakMap`:

- verhindert nicht die Garbage Collection, die letztendlich Referenzen auf das Schlüsselobjekt entfernt
- erlaubt die Garbage Collection jeglicher Werte, wenn ihre Schlüsselobjekte nicht von einer Stelle außerhalb der `WeakMap` referenziert werden

Eine `WeakMap` kann eine besonders nützliche Konstruktion sein, wenn Schlüssel Informationen zugeordnet werden, die _nur dann_ wertvoll sind, wenn der Schlüssel nicht vom Garbage Collector gesammelt wurde.

Da eine `WeakMap` jedoch nicht die Lebendigkeit ihrer Schlüssel beobachten lässt, sind ihre Schlüssel nicht aufzählbar. Es gibt keine Methode, eine Liste der Schlüssel zu erhalten. Wenn es eine gäbe, würde die Liste vom Zustand der Garbage Collection abhängen und Nicht-Determinismus einführen. Wenn Sie eine Liste von Schlüsseln haben möchten, sollten Sie eine {{jsxref("Map")}} verwenden.

## Konstruktor

- {{jsxref("WeakMap/WeakMap", "WeakMap()")}}
  - : Erstellt ein neues `WeakMap`-Objekt.

## Instanzeigenschaften

Diese Eigenschaften sind auf `WeakMap.prototype` definiert und werden von allen `WeakMap`-Instanzen geteilt.

- {{jsxref("Object/constructor", "WeakMap.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `WeakMap`-Instanzen ist der Anfangswert der {{jsxref("WeakMap/WeakMap", "WeakMap")}}-Konstruktor.
- `WeakMap.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"WeakMap"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("WeakMap.prototype.delete()")}}
  - : Entfernt den Eintrag, der durch den Schlüssel in dieser `WeakMap` angegeben wird.
- {{jsxref("WeakMap.prototype.get()")}}
  - : Gibt den Wert zurück, der dem Schlüssel in dieser `WeakMap` entspricht, oder `undefined`, wenn keiner vorhanden ist.
- {{jsxref("WeakMap.prototype.getOrInsert()")}}
  - : Gibt den Wert zurück, der dem angegebenen Schlüssel in dieser `WeakMap` entspricht. Ist der Schlüssel nicht vorhanden, fügt es einen neuen Eintrag mit dem Schlüssel und einem gegebenen Standardwert ein und gibt den eingefügten Wert zurück.
- {{jsxref("WeakMap.prototype.getOrInsertComputed()")}}
  - : Gibt den Wert zurück, der dem angegebenen Schlüssel in dieser `WeakMap` entspricht. Ist der Schlüssel nicht vorhanden, fügt es einen neuen Eintrag mit dem Schlüssel und einem Standardwert, der aus einem gegebenen Rückruf berechnet wird, ein und gibt den eingefügten Wert zurück.
- {{jsxref("WeakMap.prototype.has()")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob ein Eintrag mit dem angegebenen Schlüssel in dieser `WeakMap` existiert oder nicht.
- {{jsxref("WeakMap.prototype.set()")}}
  - : Fügt einen neuen Eintrag mit einem angegebenen Schlüssel und Wert zu dieser `WeakMap` hinzu oder aktualisiert einen vorhandenen Eintrag, wenn der Schlüssel bereits existiert.

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

### Emulieren privater Mitglieder

Entwickler können eine `WeakMap` verwenden, um private Daten einem Objekt zuzuordnen, mit folgenden Vorteilen:

- Im Vergleich zu einer {{jsxref("Map")}} hält eine WeakMap keine starken Referenzen zu dem Objekt, das als Schlüssel verwendet wird, sodass die Metadaten dieselbe Lebensdauer wie das Objekt selbst haben und Speicherlecks vermieden werden.
- Im Vergleich zur Verwendung von nicht-aufzählbaren und/oder {{jsxref("Symbol")}}-Eigenschaften ist eine WeakMap extern zum Objekt, und es gibt keine Möglichkeit für Benutzercode, die Metadaten durch Reflexionsmethoden wie {{jsxref("Object.getOwnPropertySymbols")}} abzurufen.
- Im Vergleich zu einer [Closure](/de/docs/Web/JavaScript/Guide/Closures) kann dieselbe WeakMap für alle Instanzen, die von einem Konstruktor erstellt wurden, wiederverwendet werden. Das macht sie speichereffizienter und erlaubt verschiedenen Instanzen derselben Klasse, die privaten Mitglieder voneinander zu lesen.

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

Dies entspricht grob dem Folgenden unter Verwendung von [privaten Feldern](/de/docs/Web/JavaScript/Reference/Classes/Private_elements):

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

const thing = new Thing();

console.log(thing);
// Thing {someProperty: "foo"}

thing.showPublic();
// "foo"

thing.showPrivate();
// 1
```

### Zuordnen von Metadaten

Eine `WeakMap` kann verwendet werden, um einem Objekt Metadaten zuzuordnen, ohne die Lebensdauer des Objekts selbst zu beeinflussen. Dies ist dem Beispiel der privaten Mitglieder sehr ähnlich, da private Mitglieder ebenfalls als externe Metadaten modelliert sind, die nicht an der [prototypischen Vererbung](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) teilnehmen.

Dieses Anwendungsbeispiel kann auf bereits erstellte Objekte erweitert werden. Zum Beispiel können wir im Web zusätzliche Daten mit einem DOM-Element verknüpfen, auf die das DOM-Element später zugreifen kann. Ein gängiger Ansatz ist, die Daten als Eigenschaft anzuhängen:

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

Dieser Ansatz funktioniert, hat aber einige Tücken:

- Die `clicked`-Eigenschaft ist aufzählbar und wird daher in [`Object.keys(button)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys), [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen usw. angezeigt. Dies kann durch die Verwendung von {{jsxref("Object.defineProperty()")}} gemildert werden, macht aber den Code ausführlicher.
- Die `clicked`-Eigenschaft ist eine normale String-Eigenschaft, sodass sie von anderem Code zugegriffen und überschrieben werden kann. Dies kann durch Verwendung eines {{jsxref("Symbol")}}-Schlüssels gemildert werden, aber der Schlüssel wäre immer noch über {{jsxref("Object.getOwnPropertySymbols()")}} zugänglich.

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

Hier kennt nur der Code, der auf `clicked` zugreift, den geklickten Zustand jedes Buttons, und externer Code kann die Zustände nicht ändern. Darüber hinaus werden, wenn einer der Buttons aus dem DOM entfernt wird, die zugehörigen Metadaten automatisch vom Garbage Collector gesammelt.

### Caching

Sie können Objekte, die an eine Funktion übergeben werden, mit dem Ergebnis dieser Funktion verknüpfen, sodass dasselbe Objekt erneut übergeben wird und das zwischengespeicherte Ergebnis zurückgegeben werden kann, ohne die Funktion erneut auszuführen. Das ist nützlich, wenn die Funktion rein ist (d.h. sie verändert keine äußeren Objekte oder verursacht andere beobachtbare Nebeneffekte).

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

Dies funktioniert nur, wenn der Eingabewert Ihrer Funktion ein Objekt ist. Selbst wenn der Eingabewert nie erneut übergeben wird, bleibt das Ergebnis weiterhin im Cache, solange der Schlüssel (Eingabewert) existiert. Eine effektivere Methode ist die Verwendung einer {{jsxref("Map")}} in Verbindung mit {{jsxref("WeakRef")}}-Objekten, die es Ihnen ermöglichen, jeden Eingabewert-Typ mit seinem jeweiligen (potenziell großen) Berechnungsergebnis zu verknüpfen. Weitere Einzelheiten finden Sie im Beispiel zu [WeakRefs und FinalizationRegistry](/de/docs/Web/JavaScript/Guide/Memory_management#weakrefs_and_finalizationregistry).

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
