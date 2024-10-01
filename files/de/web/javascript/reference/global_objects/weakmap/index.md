---
title: WeakMap
slug: Web/JavaScript/Reference/Global_Objects/WeakMap
l10n:
  sourceCommit: 4d150067b98ab6e79e6f6b0bf8343ae3ebd2b641
---

{{JSRef}}

Ein **`WeakMap`** ist eine Sammlung von Schlüssel/Wert-Paaren, deren Schlüssel Objekte oder [nicht-registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sein müssen, mit Werten beliebiger [JavaScript-Typen](/de/docs/Web/JavaScript/Data_structures), und die keine starken Referenzen auf ihre Schlüssel erzeugt. Das heißt, dass die Anwesenheit eines Objekts als Schlüssel in einer `WeakMap` nicht verhindert, dass das Objekt vom Garbage Collector gesammelt wird. Sobald ein Objekt, das als Schlüssel verwendet wird, gesammelt wurde, werden seine zugehörigen Werte in jeder `WeakMap` ebenfalls Kandidaten für die Garbage Collection – solange sie nicht anderweitig stark referenziert werden. Der einzige primitive Typ, der als `WeakMap`-Schlüssel verwendet werden kann, ist Symbol – genauer gesagt, [nicht-registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) – weil nicht-registrierte Symbole garantiert einzigartig sind und nicht neu erstellt werden können.

`WeakMap` erlaubt es, Daten mit Objekten zu verknüpfen, ohne die Sammlung der Schlüsselobjekte zu verhindern, selbst wenn die Werte die Schlüssel referenzieren. Eine `WeakMap` erlaubt jedoch nicht, die Lebendigkeit ihrer Schlüssel zu beobachten, weshalb sie keine Aufzählung zulässt; wenn eine `WeakMap` irgendeine Methode bereitstellen würde, um eine Liste ihrer Schlüssel zu erhalten, würde diese Liste vom Zustand der Garbage Collection abhängig sein, was zu Nicht-Determinismus führen würde. Wenn Sie eine Liste von Schlüsseln benötigen, sollten Sie eine {{jsxref("Map")}} anstelle einer `WeakMap` verwenden.

Sie können mehr über `WeakMap` im Abschnitt [WeakMap-Objekt](/de/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object) des Leitfadens zu [Keyed Collections](/de/docs/Web/JavaScript/Guide/Keyed_collections) erfahren.

## Beschreibung

Schlüssel von WeakMaps müssen garbage-sammlungsfähig sein. Die meisten {{Glossary("Primitive", "primitiven Datentypen")}} können willkürlich erstellt werden und haben keine Lebensdauer, daher können sie nicht als Schlüssel verwendet werden. Objekte und [nicht-registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) können als Schlüssel verwendet werden, da sie garbage-sammlungsfähig sind.

### Warum WeakMap?

Eine Map-API _könnte_ in JavaScript mit zwei Arrays (eines für die Schlüssel, eines für die Werte) implementiert werden, die von den vier API-Methoden gemeinsam genutzt werden. Das Setzen von Elementen in dieser Map würde bedeuten, dass gleichzeitig ein Schlüssel und ein Wert an das Ende jedes dieser Arrays angehängt werden. Dadurch würden die Indizes des Schlüssels und des Wertes beiden Arrays entsprechen. Um Werte aus der Map zu erhalten, müsste durch alle Schlüssel iteriert werden, um eine Übereinstimmung zu finden, und dann der Index dieser Übereinstimmung verwendet werden, um den entsprechenden Wert aus dem Array der Werte abzurufen.

Eine solche Implementierung hätte zwei Hauptnachteile:

1. Der erste Nachteil ist ein `O(n)`-Set- und Suchvorgang (_n_ ist die Anzahl der Schlüssel in der Map), da beide Operationen durch die Liste der Schlüssel iterieren müssen, um einen passenden Wert zu finden.
2. Der zweite Nachteil ist ein Speicherleck, da die Arrays sicherstellen, dass Referenzen auf jeden Schlüssel und jeden Wert unbegrenzt beibehalten werden. Diese Referenzen verhindern, dass die Schlüssel vom Garbage Collector gesammelt werden, selbst wenn es keine anderen Referenzen auf das Objekt gibt. Dies würde auch verhindern, dass die entsprechenden Werte gesammelt werden.

Im Gegensatz dazu verweist in einer `WeakMap` ein Schlüsselobjekt stark auf seinen Inhalt, solange der Schlüssel nicht vom Garbage Collector gesammelt wird, aber ab dann schwach. Daher:

- verhindert eine `WeakMap` nicht die Garbage Collection, die letztendlich Referenzen auf das Schlüsselobjekt entfernt
- erlaubt eine `WeakMap` die Garbage Collection von Werten, wenn ihre Schlüsselobjekte nicht von einem anderen Ort als einer `WeakMap` referenziert werden

Eine `WeakMap` kann ein besonders nützliches Konstrukt sein, wenn Schlüssel zu Informationen über den Schlüssel selbst abgebildet werden, die _nur wertvoll sind_, solange der Schlüssel nicht vom Garbage Collector gesammelt wurde.

Da eine `WeakMap` jedoch nicht erlaubt, die Lebendigkeit ihrer Schlüssel zu beobachten, sind ihre Schlüssel nicht aufzählbar. Es gibt keine Methode, um eine Liste der Schlüssel zu erhalten. Wenn es eine gäbe, würde die Liste vom Zustand der Garbage Collection abhängen, was zu Nicht-Determinismus führt. Wenn Sie eine Liste von Schlüsseln benötigen, sollten Sie eine {{jsxref("Map")}} verwenden.

## Konstruktor

- {{jsxref("WeakMap/WeakMap", "WeakMap()")}}
  - : Erstellt ein neues `WeakMap`-Objekt.

## Instanzeigenschaften

Diese Eigenschaften sind auf `WeakMap.prototype` definiert und werden von allen `WeakMap`-Instanzen geteilt.

- {{jsxref("Object/constructor", "WeakMap.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `WeakMap`-Instanzen ist der anfängliche Wert der {{jsxref("WeakMap/WeakMap", "WeakMap")}}-Konstruktor.
- `WeakMap.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"WeakMap"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("WeakMap.prototype.delete()")}}
  - : Entfernt einen Wert, der mit dem `key` verknüpft ist. `WeakMap.prototype.has(key)` wird danach `false` zurückgeben.
- {{jsxref("WeakMap.prototype.get()")}}
  - : Gibt den mit dem `key` verknüpften Wert zurück oder `undefined`, wenn es keinen gibt.
- {{jsxref("WeakMap.prototype.has()")}}
  - : Gibt einen Booleschen Wert zurück, der angibt, ob ein Wert mit dem `key` im `WeakMap`-Objekt verknüpft wurde oder nicht.
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

### Emulieren von privaten Mitgliedern

Entwickler können eine `WeakMap` verwenden, um privaten Daten mit einem Objekt zu verknüpfen, mit folgenden Vorteilen:

- Im Vergleich zu einer {{jsxref("Map")}} hält eine WeakMap keine starken Referenzen zu dem Objekt, das als Schlüssel verwendet wird, so dass die Metadaten die gleiche Lebensdauer wie das Objekt selbst haben und Speicherlecks vermieden werden.
- Im Vergleich zur Verwendung nicht-auflistbarer und/oder {{jsxref("Symbol")}}-Eigenschaften ist eine WeakMap extern zum Objekt und es gibt keinen Weg für Benutzer, die Metadaten durch reflektierende Methoden wie {{jsxref("Object.getOwnPropertySymbols")}} abzurufen.
- Im Vergleich zu einem [Closure](/de/docs/Web/JavaScript/Closures) kann dieselbe WeakMap für alle Instanzen wiederverwendet werden, die von einem Konstruktor erstellt wurden, was speichereffizienter ist und es verschiedenen Instanzen derselben Klasse ermöglicht, die privaten Mitglieder voneinander zu lesen.

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

Dies ist grob gleichwertig mit dem folgenden, unter Verwendung von [privaten Feldern](/de/docs/Web/JavaScript/Reference/Classes/Private_properties):

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

Eine `WeakMap` kann verwendet werden, um ein Objekt mit Metadaten zu verknüpfen, ohne die Lebensdauer des Objekts selbst zu beeinflussen. Dies ist dem Beispiel der privaten Mitglieder sehr ähnlich, da private Mitglieder ebenfalls als externe Metadaten modelliert sind, die nicht an der [prototypischen Vererbung](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) teilnehmen.

Dieser Anwendungsfall kann auf bereits erstellte Objekte erweitert werden. Beispielsweise möchten wir im Web möglicherweise zusätzliche Daten mit einem DOM-Element verknüpfen, auf die das DOM-Element später zugreifen kann. Ein gängiger Ansatz ist, die Daten als Eigenschaft anzuhängen:

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

- Die `clicked`-Eigenschaft ist aufzählbar, sodass sie in [`Object.keys(button)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys), [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen usw. angezeigt wird. Dies kann durch die Verwendung von {{jsxref("Object.defineProperty()")}} gemildert werden, macht den Code jedoch ausführlicher.
- Die `clicked`-Eigenschaft ist eine normale String-Eigenschaft, sodass sie von anderem Code zugegriffen und überschrieben werden kann. Dies kann durch die Verwendung eines {{jsxref("Symbol")}}-Schlüssels gemildert werden, aber der Schlüssel wäre immer noch über {{jsxref("Object.getOwnPropertySymbols()")}} zugänglich.

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

Hier kennt nur der Code, der Zugriff auf `clicked` hat, den geklickten Zustand jedes Buttons, und externer Code kann die Zustände nicht ändern. Wenn einer der Buttons aus dem DOM entfernt wird, werden die zugehörigen Metadaten automatisch vom Garbage Collector gesammelt.

### Caching

Sie können Objekte, die an eine Funktion übergeben werden, mit dem Ergebnis der Funktion verknüpfen, sodass bei erneuter Übergabe desselben Objekts das zwischengespeicherte Ergebnis zurückgegeben werden kann, ohne die Funktion erneut ausführen zu müssen. Dies ist nützlich, wenn die Funktion rein ist (d. h. sie mutiert keine äußeren Objekte oder verursacht andere beobachtbare Seiteneffekte).

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

Dies funktioniert nur, wenn der Eingang Ihrer Funktion ein Objekt ist. Selbst wenn der Eingang nie wieder übergeben wird, bleibt das Ergebnis für immer im Cache, solange der Schlüssel (Eingabe) existiert. Ein effektiverer Weg ist die Verwendung einer {{jsxref("Map")}} gepaart mit {{jsxref("WeakRef")}}-Objekten, die es Ihnen erlauben, jeden Eingabewert mit seinem jeweiligen (potenziell großen) Berechnungsergebnis zu verknüpfen. Weitere Details finden Sie im Beispiel [WeakRefs and FinalizationRegistry](/de/docs/Web/JavaScript/Memory_management#weakrefs_and_finalizationregistry).

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
