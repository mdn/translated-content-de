---
title: WeakMap
slug: Web/JavaScript/Reference/Global_Objects/WeakMap
l10n:
  sourceCommit: 7b63b90d24ad8945977bb9dc2735d75f72829bc1
---

Ein **`WeakMap`** ist eine Sammlung von Schlüssel/Wert-Paaren, deren Schlüssel Objekte oder [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sein müssen, mit Werten eines beliebigen [JavaScript-Typs](/de/docs/Web/JavaScript/Guide/Data_structures), und die keine starken Referenzen auf ihre Schlüssel erstellt. Das heißt, die Anwesenheit eines Objekts als Schlüssel in einer `WeakMap` verhindert nicht, dass das Objekt vom Garbage Collector entfernt wird. Sobald ein Objekt, das als Schlüssel verwendet wird, gesammelt wurde, werden die entsprechenden Werte in jeder `WeakMap` ebenfalls zum Kandidaten für die Garbage Collection — vorausgesetzt, sie werden nicht anderweitig stark referenziert. Der einzige primitive Typ, der als `WeakMap`-Schlüssel verwendet werden kann, ist das Symbol — genauer gesagt, [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) —, da nicht registrierte Symbole garantiert einzigartig sind und nicht neu erstellt werden können.

`WeakMap` erlaubt es, Daten mit Objekten zu assoziieren, ohne zu verhindern, dass die Schlüsselobjekte gesammelt werden, selbst wenn die Werte die Schlüssel referenzieren. Eine `WeakMap` erlaubt jedoch keine Überwachung der Lebensdauer der Schlüssel, weshalb sie keine Enumeration zulässt; wenn eine `WeakMap` eine Methode bereitstellen würde, um eine Liste ihrer Schlüssel zu erhalten, wäre diese Liste von dem Zustand der Garbage Collection abhängig, was für Nicht-Determinismus sorgen würde. Wenn Sie eine Liste der Schlüssel benötigen, sollten Sie eine {{jsxref("Map")}} anstelle einer `WeakMap` verwenden.

Sie können mehr über `WeakMap` im Abschnitt [WeakMap-Objekt](/de/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object) des [Schlüssel-Sammlungen](/de/docs/Web/JavaScript/Guide/Keyed_collections) Leitfadens erfahren.

## Beschreibung

Schlüssel von WeakMaps müssen sammelbar sein. Die meisten {{Glossary("Primitive", "primitiven Datentypen")}} können willkürlich erstellt werden und haben keine Lebensdauer, daher können sie nicht als Schlüssel verwendet werden. Objekte und [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) können als Schlüssel verwendet werden, weil sie sammelbar sind.

### Schlüsselgleichheit

Wie bei regulären `Map`-Objekten basiert die Wertgleichheit auf dem [SameValueZero](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality) Algorithmus, der dem `===` Operator entspricht, da `WeakMap` nur Objekte und Symbole als Schlüssel halten kann. Das bedeutet, dass bei Objektschlüsseln die Gleichheit auf Objektidentität basiert. Sie werden durch {{Glossary("Object_reference", "Referenzen")}} und nicht durch den Wert verglichen.

### Warum WeakMap?

Eine Map-API _könnte_ in JavaScript mit zwei Arrays (eines für die Schlüssel, eines für die Werte), die von den vier API-Methoden geteilt werden, implementiert werden. Elemente in dieser Map zu setzen, würde bedeuten, einen Schlüssel und einen Wert gleichzeitig ans Ende jedes dieser Arrays anzuhängen. Infolgedessen würden die Indizes des Schlüssels und des Werts in beiden Arrays übereinstimmen. Das Abrufen von Werten aus der Map würde das Durchlaufen aller Schlüssel zur Suche eines passenden Wertes bedeuten und dann diesen Index verwenden, um den entsprechenden Wert aus dem Array der Werte abzurufen.

Eine solche Implementierung hätte zwei Hauptnachteile:

1. Der erste ist ein `O(n)`-Set und eine Suche (_n_ ist die Anzahl der Schlüssel in der Map), da beide Operationen durch die Liste der Schlüssel iterieren müssen, um einen passenden Wert zu finden.
2. Der zweite Nachteil ist ein Speicherleck, weil die Arrays sicherstellen, dass die Referenzen zu jedem Schlüssel und jedem Wert auf unbestimmte Zeit aufrechterhalten werden. Diese Referenzen verhindern, dass die Schlüssel gesammelt werden, auch wenn es keine anderen Referenzen zu dem Objekt gibt. Dies würde auch verhindern, dass die entsprechenden Werte gesammelt werden.

Im Gegensatz dazu referenziert in einer `WeakMap` ein Schlüsselobjekt seinen Inhalt stark, solange der Schlüssel nicht vom Garbage Collector entfernt wird, und schwach danach. Eine `WeakMap`:

- Verhindert keine Garbage Collection, die schließlich die Referenzen zum Schlüsselobjekt entfernt
- Ermöglicht die Garbage Collection von Werten, wenn ihre Schlüsselobjekte nicht von anderswo her referenziert werden als von einer `WeakMap`

Eine `WeakMap` kann ein besonders nützliches Konstrukt sein, wenn Schlüssel auf Informationen über den Schlüssel abgebildet werden, die nur dann wertvoll sind, wenn der Schlüssel nicht vom Garbage Collector entfernt wurde.

Aber weil eine `WeakMap` keine Überwachung der Lebensdauer ihrer Schlüssel zulässt, sind ihre Schlüssel nicht durchlaufbar. Es gibt keine Methode, um eine Liste der Schlüssel zu erhalten. Wenn es eine gäbe, würde die Liste vom Zustand der Garbage Collection abhängen, was für Nicht-Determinismus sorgen würde. Wenn Sie eine Liste der Schlüssel benötigen, sollten Sie eine {{jsxref("Map")}} verwenden.

## Konstruktor

- {{jsxref("WeakMap/WeakMap", "WeakMap()")}}
  - : Erstellt ein neues `WeakMap`-Objekt.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `WeakMap.prototype` definiert und werden von allen `WeakMap`-Instanzen geteilt.

- {{jsxref("Object/constructor", "WeakMap.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `WeakMap`-Instanzen ist der Anfangswert der {{jsxref("WeakMap/WeakMap", "WeakMap")}} Konstruktor.
- `WeakMap.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"WeakMap"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("WeakMap.prototype.delete()")}}
  - : Entfernt den durch den Schlüssel spezifizierten Eintrag aus dieser `WeakMap`.
- {{jsxref("WeakMap.prototype.get()")}}
  - : Gibt den Wert zurück, der dem Schlüssel in dieser `WeakMap` entspricht, oder `undefined`, wenn keiner vorhanden ist.
- {{jsxref("WeakMap.prototype.has()")}}
  - : Gibt einen Boolean zurück, der anzeigt, ob ein Eintrag mit dem angegebenen Schlüssel in dieser `WeakMap` existiert oder nicht.
- {{jsxref("WeakMap.prototype.set()")}}
  - : Fügt einen neuen Eintrag mit einem angegebenen Schlüssel und Wert zu dieser `WeakMap` hinzu oder aktualisiert einen bestehenden Eintrag, wenn der Schlüssel bereits existiert.

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

### Implementierung einer WeakMap-ähnlichen Klasse mit einer .clear() Methode

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

Entwickler können eine `WeakMap` verwenden, um private Daten mit einem Objekt zu assoziieren, mit folgenden Vorteilen:

- Im Vergleich zu einer {{jsxref("Map")}} hält eine WeakMap keine starken Referenzen zu dem Objekt, das als Schlüssel verwendet wird, sodass die Metadaten die gleiche Lebensdauer wie das Objekt selbst teilen und Memory Leaks vermieden werden.
- Im Vergleich zur Verwendung nicht enumerierbarer und/oder {{jsxref("Symbol")}} Eigenschaften ist eine WeakMap extern zum Objekt und es gibt keine Möglichkeit, dass Benutzer-Code die Metadaten durch reflektierende Methoden wie {{jsxref("Object.getOwnPropertySymbols")}} abruft.
- Im Vergleich zu einem [Closure](/de/docs/Web/JavaScript/Guide/Closures) kann dieselbe WeakMap für alle Instanzen, die von einem Konstruktor erstellt wurden, wiederverwendet werden, was sie speichereffizienter macht, und ermöglicht verschiedenen Instanzen derselben Klasse, die privaten Mitglieder voneinander zu lesen.

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

Dies ist grob äquivalent zu folgendem, unter Verwendung von [privaten Feldern](/de/docs/Web/JavaScript/Reference/Classes/Private_elements):

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

Eine `WeakMap` kann verwendet werden, um Metadaten mit einem Objekt zu assoziieren, ohne die Lebensdauer des Objekts selbst zu beeinflussen. Dies ähnelt sehr dem Beispiel mit den privaten Mitgliedern, da private Mitglieder auch als externe Metadaten modelliert werden, die nicht an der [prototypischen Vererbung](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) teilnehmen.

Dieser Anwendungsfall kann auf bereits erstellte Objekte erweitert werden. Zum Beispiel könnten wir im Web zusätzliche Daten mit einem DOM-Element verknüpfen wollen, das das DOM-Element später abrufen kann. Ein üblicher Ansatz ist es, die Daten als Eigenschaft anzuhängen:

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

Dieser Ansatz funktioniert, hat jedoch einige Fallstricke:

- Die `clicked` Eigenschaft ist enumerierbar, daher wird sie in [`Object.keys(button)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys), [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Schleifen usw. angezeigt. Dies kann durch Verwendung von {{jsxref("Object.defineProperty()")}} gemildert werden, macht jedoch den Code ausführlicher.
- Die `clicked` Eigenschaft ist eine normale String-Eigenschaft und kann somit von anderem Code gelesen und überschrieben werden. Dies kann durch Verwendung eines {{jsxref("Symbol")}} Schlüssels gemildert werden, aber der Schlüssel wäre weiterhin über {{jsxref("Object.getOwnPropertySymbols()")}} zugänglich.

Die Verwendung einer `WeakMap` behebt dies:

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

Hier kennt nur der Code, der Zugriff auf `clicked` hat, den angeklickten Zustand jedes Buttons und externer Code kann die Zustände nicht ändern. Außerdem werden, wenn einer der Buttons aus dem DOM entfernt wird, die zugehörigen Metadaten automatisch von der Speicherbereinigung erfasst.

### Caching

Sie können Objekte, die an eine Funktion übergeben werden, mit dem Ergebnis der Funktion verknüpfen, so dass, wenn dasselbe Objekt erneut übergeben wird, das zwischengespeicherte Ergebnis zurückgegeben werden kann, ohne die Funktion erneut auszuführen. Das ist nützlich, wenn die Funktion pure ist (d.h. keine äußeren Objekte verändert oder andere beobachtbare Nebenwirkungen verursacht).

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

Dies funktioniert nur, wenn die Eingabe Ihrer Funktion ein Objekt ist. Außerdem bleibt das Ergebnis für immer im Cache, solange der Schlüssel (Eingabe) vorhanden ist, selbst wenn die Eingabe nie wieder übergeben wird. Eine effektivere Methode ist die Verwendung einer {{jsxref("Map")}} in Kombination mit {{jsxref("WeakRef")}} Objekten, mit der Sie jeden Eingabewerttyp mit seinem jeweiligen (möglicherweise großen) Berechnungsergebnis verknüpfen können. Weitere Details finden Sie im Beispiel [WeakRefs und FinalizationRegistry](/de/docs/Web/JavaScript/Guide/Memory_management#weakrefs_and_finalizationregistry).

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
