---
title: WeakMap
slug: Web/JavaScript/Reference/Global_Objects/WeakMap
l10n:
  sourceCommit: 30c9f71e6a6cac4d894688cabf7e4b50af87cfe5
---

Ein **`WeakMap`** ist eine Sammlung von Schlüssel/Wert-Paaren, deren Schlüssel Objekte oder [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sein müssen, mit Werten jedes beliebigen [JavaScript-Typs](/de/docs/Web/JavaScript/Guide/Data_structures), und die keine starken Referenzen zu ihren Schlüsseln erstellt. Das bedeutet, dass die Präsenz eines Objekts als Schlüssel in einer `WeakMap` nicht verhindert, dass das Objekt der Speicherbereinigung unterzogen wird. Sobald ein als Schlüssel verwendetes Objekt gesammelt wurde, werden die entsprechenden Werte in jeder `WeakMap` ebenfalls Kandidaten für die Speicherbereinigung – vorausgesetzt, sie sind nicht anderswo stark referenziert. Der einzige primitive Typ, der als Schlüssel in einer `WeakMap` verwendet werden kann, ist symbol – genauer gesagt [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) – da nicht registrierte Symbole garantiert einzigartig sind und nicht rekreiert werden können.

`WeakMap` ermöglicht die Verknüpfung von Daten mit Objekten auf eine Weise, die nicht verhindert, dass die Schlüsselobjekte gesammelt werden, selbst wenn die Werte auf die Schlüssel verweisen. Eine `WeakMap` erlaubt jedoch nicht die Beobachtung der Lebensdauer ihrer Schlüssel, weshalb sie keine Enumeration zulässt; wenn eine `WeakMap` eine Methode bereitstellen würde, um eine Liste ihrer Schlüssel zu erhalten, würde die Liste vom Zustand der Speicherbereinigung abhängen, was Nicht-Determinismus einführen würde. Wenn Sie eine Liste von Schlüsseln haben möchten, sollten Sie eine {{jsxref("Map")}} anstelle einer `WeakMap` verwenden.

Weitere Informationen zur `WeakMap` finden Sie im Abschnitt [WeakMap-Objekt](/de/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object) des [Leitfaden zu Keyed Collections](/de/docs/Web/JavaScript/Guide/Keyed_collections).

## Beschreibung

Schlüssel von WeakMaps müssen speicherbereinigbar sein. Die meisten {{Glossary("Primitive", "primitiven Datentypen")}} können beliebig erstellt werden und haben keine Lebensdauer, daher können sie nicht als Schlüssel verwendet werden. Objekte und [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) können als Schlüssel verwendet werden, da sie speicherbereinigbar sind.

### Warum WeakMap?

Eine Map-API _könnte_ in JavaScript mit zwei Arrays (eines für Schlüssel, eines für Werte) implementiert werden, die von den vier API-Methoden geteilt werden. Das Setzen von Elementen in dieser Map würde das gleichzeitige Hinzufügen eines Schlüssels und eines Werts an das Ende jedes dieser Arrays beinhalten. Folglich würden die Indizes des Schlüssels und des Werts beiden Arrays entsprechen. Das Abrufen von Werten aus der Map würde das Durchlaufen aller Schlüssel erfordern, um eine Übereinstimmung zu finden, und dann den Index dieser Übereinstimmung verwenden, um den entsprechenden Wert aus dem Wertearray zu erhalten.

Eine solche Implementierung hätte zwei Hauptnachteile:

1. Der erste ist eine `O(n)`-Setz- und Suchzeit (_n_ steht für die Anzahl der Schlüssel in der Map), da beide Operationen die Schlüssel-Liste durchlaufen müssen, um einen passenden Wert zu finden.
2. Der zweite Nachteil ist ein Speicherleck, da die Arrays sicherstellen, dass Referenzen zu jedem Schlüssel und jedem Wert unbestimmt beibehalten werden. Diese Referenzen verhindern, dass die Schlüssel der Speicherbereinigung unterzogen werden, auch wenn es keine anderen Referenzen zu dem Objekt gibt. Dies würde auch verhindern, dass die entsprechenden Werte der Speicherbereinigung unterzogen werden.

Im Gegensatz dazu bezieht sich in einer `WeakMap` ein Schlüsselobjekt stark auf seine Inhalte, solange der Schlüssel nicht der Speicherbereinigung unterzogen wird, von da an jedoch schwach. Somit ermöglicht eine `WeakMap`:

- verhindert nicht die Speicherbereinigung, die schließlich Referenzen auf das Schlüsselobjekt entfernt
- erlaubt die Speicherbereinigung jeglicher Werte, wenn ihre Schlüsselobjekte nicht aus einer anderen Quelle als einer `WeakMap` referenziert werden

Eine `WeakMap` kann besonders nützlich sein, wenn Schlüssel auf Informationen über den Schlüssel abgebildet werden, die _nur dann_ wertvoll sind, wenn der Schlüssel nicht der Speicherbereinigung unterzogen wurde.

Aber da eine `WeakMap` nicht die Beobachtung der Lebensdauer ihrer Schlüssel erlaubt, sind ihre Schlüssel nicht enumerierbar. Es gibt keine Methode, um eine Liste der Schlüssel zu erhalten. Wenn es eine gäbe, würde die Liste vom Zustand der Speicherbereinigung abhängen, was Nicht-Determinismus einführen würde. Wenn Sie eine Liste von Schlüsseln haben möchten, sollten Sie eine {{jsxref("Map")}} verwenden.

## Konstruktor

- {{jsxref("WeakMap/WeakMap", "WeakMap()")}}
  - : Erstellt ein neues `WeakMap`-Objekt.

## Instanz-Eigenschaften

Diese Eigenschaften sind in `WeakMap.prototype` definiert und werden von allen `WeakMap`-Instanzen geteilt.

- {{jsxref("Object/constructor", "WeakMap.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `WeakMap`-Instanzen ist der anfängliche Wert der {{jsxref("WeakMap/WeakMap", "WeakMap")}}-Konstruktor.
- `WeakMap.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"WeakMap"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("WeakMap.prototype.delete()")}}
  - : Entfernt einen Wert, der dem `key` zugeordnet ist. `WeakMap.prototype.has(key)` gibt danach `false` zurück.
- {{jsxref("WeakMap.prototype.get()")}}
  - : Gibt den Wert zurück, der dem `key` zugeordnet ist, oder `undefined`, wenn keiner vorhanden ist.
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

### Emulieren privater Mitglieder

Entwickler können eine `WeakMap` verwenden, um private Daten mit einem Objekt zu verknüpfen, mit den folgenden Vorteilen:

- Im Vergleich zu einer {{jsxref("Map")}} hält eine WeakMap keine starken Referenzen zu dem als Schlüssel verwendeten Objekt, sodass die Metadaten die gleiche Lebensdauer wie das Objekt haben, wodurch Speicherlecks vermieden werden.
- Im Vergleich zur Verwendung nicht-auflistbarer und/oder {{jsxref("Symbol")}}-Eigenschaften ist eine WeakMap extern zum Objekt und es gibt keine Möglichkeit für Benutzercode, die Metadaten über reflektierende Methoden wie {{jsxref("Object.getOwnPropertySymbols")}} abzurufen.
- Im Vergleich zu einer [Closure](/de/docs/Web/JavaScript/Guide/Closures) kann dieselbe WeakMap für alle Instanzen, die aus einem Konstruktor erstellt wurden, wiederverwendet werden, was speichereffizienter ist und es verschiedenen Instanzen derselben Klasse ermöglicht, die privaten Mitglieder voneinander zu lesen.

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

Dies entspricht in etwa der folgenden Verwendung von [privaten Feldern](/de/docs/Web/JavaScript/Reference/Classes/Private_elements):

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

Eine `WeakMap` kann verwendet werden, um Metadaten mit einem Objekt zu verknüpfen, ohne die Lebensdauer des Objekts selbst zu beeinflussen. Dies ist dem Beispiel der privaten Mitglieder sehr ähnlich, da private Mitglieder auch als externe Metadaten modelliert werden, die nicht an [prototypale Vererbung](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) teilnehmen.

Dieser Anwendungsfall kann auf bereits erstellte Objekte ausgeweitet werden. Beispielsweise möchten wir im Web möglicherweise zusätzliche Daten mit einem DOM-Element verknüpfen, auf das das DOM-Element später zugreifen kann. Ein gängiger Ansatz ist, die Daten als Eigenschaft anzuhängen:

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

- Die `clicked` Eigenschaft ist aufzählbar, sodass sie in [`Object.keys(button)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys), [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen usw. angezeigt wird. Dies kann durch die Verwendung von {{jsxref("Object.defineProperty()")}} gemildert werden, macht aber den Code umfangreicher.
- Die `clicked` Eigenschaft ist eine normale String-Eigenschaft, sodass sie von anderem Code abgerufen und überschrieben werden kann. Dies kann durch die Verwendung eines {{jsxref("Symbol")}}-Schlüssels gemildert werden, aber der Schlüssel wäre dennoch über {{jsxref("Object.getOwnPropertySymbols()")}} zugänglich.

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

Hier kennt nur der Code, der Zugriff auf `clicked` hat, den geklickten Zustand jedes Buttons, und externer Code kann die Zustände nicht ändern. Darüber hinaus werden, wenn einer der Buttons aus dem DOM entfernt wird, die zugehörigen Metadaten automatisch der Speicherbereinigung zugeführt.

### Caching

Sie können Objekte, die an eine Funktion übergeben werden, mit dem Ergebnis der Funktion verknüpfen, sodass, wenn dasselbe Objekt erneut übergeben wird, das zwischengespeicherte Ergebnis zurückgegeben werden kann, ohne die Funktion erneut auszuführen. Dies ist nützlich, wenn die Funktion rein ist (d.h. sie verändert keine externen Objekte oder verursacht andere beobachtbare Nebeneffekte).

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

Dies funktioniert nur, wenn die Eingabe Ihrer Funktion ein Objekt ist. Selbst wenn die Eingabe nie wieder übergeben wird, bleibt das Ergebnis für immer im Cache, solange der Schlüssel (Eingabe) am Leben ist. Ein effektiverer Weg ist die Verwendung einer {{jsxref("Map")}} in Kombination mit {{jsxref("WeakRef")}}-Objekten, was es ermöglicht, jeden Eingabewert mit seinem jeweiligen (möglicherweise großen) Berechnungsergebnis zu verknüpfen. Siehe das Beispiel [WeakRefs und FinalizationRegistry](/de/docs/Web/JavaScript/Guide/Memory_management#weakrefs_and_finalizationregistry) für weitere Details.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill der `WeakMap` in `core-js`](https://github.com/zloirock/core-js#weakmap)
- [Keyed Collections](/de/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object)
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakSet")}}
