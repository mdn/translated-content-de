---
title: WeakMap
slug: Web/JavaScript/Reference/Global_Objects/WeakMap
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Ein **`WeakMap`** ist eine Sammlung von Schlüssel/Wert-Paaren, deren Schlüssel Objekte oder [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sein müssen, mit Werten jeglicher beliebiger [JavaScript-Typen](/de/docs/Web/JavaScript/Guide/Data_structures), und die keine starken Referenzen auf ihre Schlüssel erstellt. Das bedeutet, dass das Vorhandensein eines Objekts als Schlüssel in einer `WeakMap` nicht verhindert, dass das Objekt vom Garbage Collector bereinigt wird. Sobald ein als Schlüssel verwendetes Objekt gesammelt wurde, werden seine entsprechenden Werte in jeder `WeakMap` ebenfalls Kandidaten für die Garbage Collection — solange sie nicht anderweitig stark referenziert werden. Der einzige primitive Typ, der als Schlüssel in einer `WeakMap` verwendet werden kann, ist das Symbol — genauer gesagt, [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) —, da nicht registrierte Symbole garantiert einzigartig sind und nicht erneut erstellt werden können.

`WeakMap` ermöglicht das Verknüpfen von Daten mit Objekten auf eine Weise, die nicht verhindert, dass die Schlüsselobjekte gesammelt werden, selbst wenn die Werte die Schlüssel referenzieren. Eine `WeakMap` erlaubt jedoch nicht die Beobachtung der Lebensdauer ihrer Schlüssel, weshalb sie keine Aufzählung zulässt; wenn eine `WeakMap` eine Methode bereitstellte, um eine Liste ihrer Schlüssel zu erhalten, würde die Liste vom Zustand der Garbage Collection abhängen und Nicht-Determinismus einführen. Wenn Sie eine Liste von Schlüsseln benötigen, sollten Sie statt einer `WeakMap` eine {{jsxref("Map")}} verwenden.

Sie können mehr über `WeakMap` im Abschnitt [WeakMap-Objekt](/de/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object) im [Leitfaden zu Keyed Collections](/de/docs/Web/JavaScript/Guide/Keyed_collections) erfahren.

## Beschreibung

Schlüssel von WeakMaps müssen vom Garbage Collector gesammelt werden können. Die meisten {{Glossary("Primitive", "primitiven Datentypen")}} können beliebig erstellt werden und haben keine Lebensdauer, daher können sie nicht als Schlüssel verwendet werden. Objekte und [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) können als Schlüssel verwendet werden, da sie gesammelt werden können.

### Schlüsselgleichheit

Wie bei regulären `Map` basiert die Gleichheit der Werte auf dem [SameValueZero](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality)-Algorithmus, der dem `===` Operator entspricht, da `WeakMap` nur Objekt- und Symbolschlüssel halten kann. Das bedeutet, dass für Objektschlüssel die Gleichheit auf der Objektidentität basiert. Sie werden nach {{Glossary("Object_reference", "Referenz")}}, nicht nach Wert verglichen.

### Warum WeakMap?

Eine Map-API _könnte_ in JavaScript mit zwei Arrays (eines für Schlüssel, eines für Werte) implementiert werden, die von den vier API-Methoden gemeinsam genutzt werden. Das Hinzufügen von Elementen zu dieser Map würde das gleichzeitige Hinzufügen eines Schlüssels und eines Werts am Ende jedes dieser Arrays bedeuten. Infolgedessen würden die Indizes des Schlüssels und des Werts beiden Arrays entsprechen. Das Abrufen von Werten aus der Map würde das Durchlaufen aller Schlüssel erfordern, um eine Übereinstimmung zu finden, und dann den Index dieser Übereinstimmung verwenden, um den entsprechenden Wert aus dem Werte-Array abzurufen.

Eine solche Implementierung hätte zwei Hauptnachteile:

1. Der erste ist ein `O(n)`-Set und Suche (_n_ ist die Anzahl der Schlüssel in der Map), da beide Operationen durch die Liste der Schlüssel iterieren müssen, um einen übereinstimmenden Wert zu finden.
2. Der zweite Nachteil ist ein Speicherleck, da die Arrays sicherstellen, dass Referenzen zu jedem Schlüssel und jedem Wert dauerhaft aufrechterhalten werden. Diese Referenzen verhindern, dass die Schlüssel vom Garbage Collector gesammelt werden, selbst wenn es keine anderen Referenzen zu dem Objekt gibt. Dadurch würde auch verhindert, dass die entsprechenden Werte gesammelt werden.

Im Gegensatz dazu bezieht sich in einer `WeakMap` ein Schlüsselobjekt stark auf seinen Inhalt, solange der Schlüssel nicht gesammelt wird, aber danach nur schwach. Eine `WeakMap`:

- verhindert nicht die Garbage Collection, die letztendlich die Referenzen zum Schlüsselobjekt entfernt,
- ermöglicht die Garbage Collection aller Werte, wenn ihre Schlüsselobjekte von keinem anderen Ort als einer `WeakMap` referenziert werden.

Eine `WeakMap` kann ein besonders nützliches Konstrukt sein, wenn Schlüssel auf Informationen über den Schlüssel abgebildet werden sollen, die _nur dann_ wertvoll sind, wenn der Schlüssel nicht gesammelt wurde.

Da eine `WeakMap` jedoch nicht die Beobachtung der Lebensdauer ihrer Schlüssel erlaubt, sind ihre Schlüssel nicht aufzählbar. Es gibt keine Methode, um eine Liste der Schlüssel zu erhalten. Wenn es eine gäbe, würde die Liste vom Zustand der Garbage Collection abhängen und Nicht-Determinismus einführen. Wenn Sie eine Liste von Schlüsseln benötigen, sollten Sie eine {{jsxref("Map")}} verwenden.

## Konstruktor

- {{jsxref("WeakMap/WeakMap", "WeakMap()")}}
  - : Erstellt ein neues `WeakMap`-Objekt.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `WeakMap.prototype` definiert und werden von allen `WeakMap`-Instanzen geteilt.

- {{jsxref("Object/constructor", "WeakMap.prototype.constructor")}}
  - : Die Konstrukturfunktion, die das Instanzobjekt erstellt hat. Für `WeakMap`-Instanzen ist der Anfangswert der {{jsxref("WeakMap/WeakMap", "WeakMap")}}-Konstruktor.
- `WeakMap.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"WeakMap"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("WeakMap.prototype.delete()")}}
  - : Entfernt den durch den Schlüssel angegebenen Eintrag aus dieser `WeakMap`.
- {{jsxref("WeakMap.prototype.get()")}}
  - : Gibt den Wert zurück, der dem Schlüssel in dieser `WeakMap` entspricht, oder `undefined`, wenn keiner vorhanden ist.
- {{jsxref("WeakMap.prototype.getOrInsert()")}}
  - : Gibt den Wert zurück, der dem angegebenen Schlüssel in dieser `WeakMap` entspricht. Wenn der Schlüssel nicht vorhanden ist, fügt er einen neuen Eintrag mit dem Schlüssel und einem angegebenen Standardwert ein und gibt den eingefügten Wert zurück.
- {{jsxref("WeakMap.prototype.getOrInsertComputed()")}}
  - : Gibt den Wert zurück, der dem angegebenen Schlüssel in dieser `WeakMap` entspricht. Wenn der Schlüssel nicht vorhanden ist, fügt er einen neuen Eintrag mit dem Schlüssel und einem Standardwert ein, der aus einem angegebenen Callback berechnet wird, und gibt den eingefügten Wert zurück.
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

### Emulierung von privaten Mitgliedern

Entwickler können eine `WeakMap` verwenden, um private Daten mit einem Objekt zu verknüpfen, mit den folgenden Vorteilen:

- Im Vergleich zu einer {{jsxref("Map")}} hält eine `WeakMap` keine starken Referenzen zu dem als Schlüssel verwendeten Objekt, sodass die Metadaten dieselbe Lebensdauer wie das Objekt selbst haben und Speicherlecks vermieden werden.
- Im Vergleich zur Verwendung nicht-aufzählbarer und/oder {{jsxref("Symbol")}}-Eigenschaften ist eine `WeakMap` extern zu dem Objekt und es gibt keine Möglichkeit für Benutzercode, die Metadaten durch reflektive Methoden wie {{jsxref("Object.getOwnPropertySymbols")}} abzurufen.
- Im Vergleich zu einer [closure](/de/docs/Web/JavaScript/Guide/Closures) kann dieselbe `WeakMap` für alle Instanzen, die durch einen Konstruktor erstellt wurden, wiederverwendet werden, was speichereffizienter ist, und ermöglicht es verschiedenen Instanzen derselben Klasse, die privaten Mitglieder voneinander zu lesen.

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

Dies ist in etwa gleichbedeutend mit dem folgenden Beispiel, das [private Felder](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) verwendet:

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

Eine `WeakMap` kann verwendet werden, um Metadaten mit einem Objekt zu verknüpfen, ohne die Lebensdauer des Objekts selbst zu beeinflussen. Dies ähnelt sehr dem Beispiel für private Mitglieder, da private Mitglieder ebenfalls als externe Metadaten modelliert sind, die nicht an [prototypischer Vererbung](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) teilnehmen.

Dieser Anwendungsfall kann auf bereits erstellte Objekte erweitert werden. Im Web möchten wir möglicherweise zusätzliche Daten mit einem DOM-Element verknüpfen, auf die das DOM-Element später zugreifen kann. Ein häufiger Ansatz besteht darin, die Daten als Eigenschaft anzuhängen:

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

- Die `clicked`-Eigenschaft ist aufzählbar, sodass sie in [`Object.keys(button)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys), [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen usw. angezeigt wird. Dies kann durch die Verwendung von {{jsxref("Object.defineProperty()")}} gemindert werden, macht den Code jedoch ausführlicher.
- Die `clicked`-Eigenschaft ist eine normale String-Eigenschaft, sodass sie von anderem Code zugegriffen und überschrieben werden kann. Dies kann durch die Verwendung eines {{jsxref("Symbol")}}-Schlüssels gemindert werden, aber der Schlüssel wäre immer noch über {{jsxref("Object.getOwnPropertySymbols()")}} zugänglich.

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

Hier weiß nur Code, der Zugriff auf `clicked` hat, den geklickten Zustand jedes Buttons, und externer Code kann die Zustände nicht ändern. Außerdem wird, wenn einer der Buttons aus dem DOM entfernt wird, die zugehörigen Metadaten automatisch vom Garbage Collector bereinigt.

### Caching

Sie können Objekte, die an eine Funktion übergeben werden, mit dem Ergebnis der Funktion verknüpfen, sodass, wenn dasselbe Objekt erneut übergeben wird, das zwischengespeicherte Ergebnis zurückgegeben werden kann, ohne die Funktion erneut auszuführen. Dies ist nützlich, wenn die Funktion rein ist (d.h. sie verändert keine externen Objekte oder verursacht keine anderen beobachtbaren Nebenwirkungen).

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

Dies funktioniert nur, wenn die Eingabe Ihrer Funktion ein Objekt ist. Außerdem bleibt das Ergebnis immer im Cache, solange der Schlüssel (Eingabe) lebendig ist, selbst wenn die Eingabe nie erneut übergeben wird. Ein effektiverer Weg besteht darin, eine {{jsxref("Map")}} zusammen mit {{jsxref("WeakRef")}}-Objekten zu verwenden, die es Ihnen ermöglicht, jeden Eingabewerttyp mit seinem jeweiligen (potenziell großen) Berechnungsergebnis zu verknüpfen. Weitere Details finden Sie im Beispiel [WeakRefs und FinalizationRegistry](/de/docs/Web/JavaScript/Guide/Memory_management#weakrefs_and_finalizationregistry).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `WeakMap` in `core-js`](https://github.com/zloirock/core-js#weakmap)
- [Keyed collections](/de/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object)
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakSet")}}
