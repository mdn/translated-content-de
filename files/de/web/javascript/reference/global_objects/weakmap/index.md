---
title: WeakMap
slug: Web/JavaScript/Reference/Global_Objects/WeakMap
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Ein **`WeakMap`** ist eine Sammlung von Schlüssel-/Wert-Paaren, deren Schlüssel Objekte oder [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sein müssen, wobei die Werte jeden beliebigen [JavaScript-Typ](/de/docs/Web/JavaScript/Guide/Data_structures) haben können. `WeakMap` erstellt keine starken Referenzen auf seine Schlüssel. Das bedeutet, dass die Anwesenheit eines Objekts als Schlüssel in einer `WeakMap` nicht verhindert, dass dieses Objekt durch die Speicherbereinigung (Garbage Collection) entfernt wird. Sobald ein Objekt, das als Schlüssel verwendet wird, gesammelt wurde, werden seine entsprechenden Werte in jeder `WeakMap` auch Kandidaten für die Speicherbereinigung, solange sie nicht anderswo stark referenziert werden. Der einzige primitive Typ, der als `WeakMap`-Schlüssel verwendet werden kann, ist das Symbol, und zwar speziell [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry), weil nicht registrierte Symbole garantiert einzigartig sind und nicht neu erstellt werden können.

`WeakMap` ermöglicht es, Daten mit Objekten zu verknüpfen, ohne dass die Schlüsselobjekte dadurch von der Sammlung ausgeschlossen werden, selbst wenn die Werte die Schlüssel referenzieren. Jedoch erlaubt eine `WeakMap` nicht die Beobachtung der Lebensdauer ihrer Schlüssel, weshalb sie keine Aufzählung zulässt. Wenn eine `WeakMap` eine Methode bereitstellen würde, um eine Liste ihrer Schlüssel zu erhalten, würde die Liste vom Zustand der Speicherbereinigung abhängen, was zu Nicht-Determinismus führen würde. Wenn Sie eine Liste von Schlüsseln haben möchten, sollten Sie anstelle einer `WeakMap` eine {{jsxref("Map")}} verwenden.

Sie können mehr über `WeakMap` im Abschnitt [WeakMap-Objekt](/de/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object) des [Leitfadens für Keyed Collections](/de/docs/Web/JavaScript/Guide/Keyed_collections) erfahren.

## Beschreibung

Schlüssel von WeakMaps müssen speicherbereinigbar sein. Die meisten {{Glossary("Primitive", "primitiven Datentypen")}} können willkürlich erstellt werden und haben keine Lebensdauer, daher können sie nicht als Schlüssel verwendet werden. Objekte und [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) können als Schlüssel verwendet werden, da sie speicherbereinigbar sind.

### Warum WeakMap?

Eine Map-API _könnte_ in JavaScript mit zwei Arrays implementiert werden (eins für Schlüssel, eins für Werte), die von den vier API-Methoden geteilt werden. Das Setzen von Elementen auf dieser Map würde das gleichzeitige Anfügen eines Schlüssels und eines Werts an das Ende jedes dieser Arrays erfordern. Infolgedessen würden die Indizes des Schlüssels und des Werts beiden Arrays entsprechen. Das Abrufen von Werten aus der Map würde das Durchlaufen aller Schlüssel erfordern, um eine Übereinstimmung zu finden, und dann den Index dieses Treffers verwenden, um den entsprechenden Wert aus dem Array der Werte abzurufen.

Eine solche Implementierung hätte zwei Hauptnachteile:

1. Der erste ist eine `O(n)`-Setz- und Suchoperation (_n_ ist die Anzahl der Schlüssel in der Map), da beide Operationen die Liste der Schlüssel durchlaufen müssen, um einen passenden Wert zu finden.
2. Der zweite Nachteil ist ein Speicherleck, weil die Arrays sicherstellen, dass Verweise auf jeden Schlüssel und jeden Wert auf unbestimmte Zeit erhalten bleiben. Diese Verweise verhindern, dass die Schlüssel durch die Speicherbereinigung entfernt werden, selbst wenn es keine anderen Verweise auf das Objekt gibt. Dies würde auch verhindern, dass die entsprechenden Werte durch die Speicherbereinigung entfernt werden.

Im Gegensatz dazu verweist in einer `WeakMap` ein Schlüsselobjekt stark auf seine Inhalte, solange der Schlüssel nicht speicherbereinigt ist, ab diesem Zeitpunkt jedoch schwach. Daher:

- verhindert `WeakMap` nicht die Speicherbereinigung, die schließlich Verweise auf das Schlüsselobjekt entfernt
- erlaubt es die Speicherbereinigung von Werten, wenn ihre Schlüsselobjekte nicht von woanders als von einer `WeakMap` referenziert werden

Eine `WeakMap` kann ein besonders nützliches Konstrukt sein, wenn Schlüssel mit Informationen verknüpft werden, die _nur dann_ wertvoll sind, wenn der Schlüssel nicht speicherbereinigt ist.

Da eine `WeakMap` die Beobachtung der Lebensdauer ihrer Schlüssel nicht zulässt, sind deren Schlüssel nicht aufzählbar. Es gibt keine Methode, um eine Liste der Schlüssel zu erhalten. Wenn es eine gäbe, hinge die Liste vom Zustand der Speicherbereinigung ab, was zu Nicht-Determinismus führen würde. Wenn Sie eine Liste von Schlüsseln haben möchten, sollten Sie eine {{jsxref("Map")}} verwenden.

## Konstruktor

- {{jsxref("WeakMap/WeakMap", "WeakMap()")}}
  - : Erstellt ein neues `WeakMap`-Objekt.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `WeakMap.prototype` definiert und werden von allen `WeakMap`-Instanzen geteilt.

- {{jsxref("Object/constructor", "WeakMap.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erzeugt hat. Für `WeakMap`-Instanzen ist der Anfangswert der {{jsxref("WeakMap/WeakMap", "WeakMap")}}-Konstruktor.
- `WeakMap.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"WeakMap"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("WeakMap.prototype.delete()")}}
  - : Entfernt jeden mit dem `key` verknüpften Wert. `WeakMap.prototype.has(key)` wird danach `false` zurückgeben.
- {{jsxref("WeakMap.prototype.get()")}}
  - : Gibt den mit dem `key` verknüpften Wert zurück, oder `undefined`, wenn keiner vorhanden ist.
- {{jsxref("WeakMap.prototype.has()")}}
  - : Gibt einen Boolean zurück, der angibt, ob ein Wert mit dem `key` im `WeakMap`-Objekt verknüpft ist oder nicht.
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

### Nachahmung von privaten Mitgliedern

Entwickler können eine `WeakMap` verwenden, um private Daten mit einem Objekt zu verknüpfen, mit folgenden Vorteilen:

- Im Vergleich zu einer {{jsxref("Map")}} hält eine WeakMap keine starken Referenzen auf das Objekt, das als Schlüssel verwendet wird, sodass die Metadaten dieselbe Lebensdauer wie das Objekt haben, was Speicherlecks verhindert.
- Im Vergleich zur Verwendung von nicht aufzählbaren und/oder {{jsxref("Symbol")}}-Eigenschaften ist eine WeakMap extern zum Objekt und es gibt keine Möglichkeit für Benutzercode, die Metadaten durch reflektierende Methoden wie {{jsxref("Object.getOwnPropertySymbols")}} abzurufen.
- Im Vergleich zu einer [Closure](/de/docs/Web/JavaScript/Guide/Closures) kann dieselbe WeakMap für alle Instanzen, die von einem Konstruktor erstellt wurden, wiederverwendet werden, was speichereffizienter ist und es unterschiedlichen Instanzen derselben Klasse ermöglicht, die privaten Mitglieder voneinander zu lesen.

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

Dies ist in etwa gleichbedeutend mit dem folgenden, unter Verwendung von [privaten Feldern](/de/docs/Web/JavaScript/Reference/Classes/Private_elements):

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

### Verknüpfen von Metadaten

Eine `WeakMap` kann verwendet werden, um Metadaten mit einem Objekt zu verknüpfen, ohne die Lebensdauer des Objekts selbst zu beeinflussen. Dies ähnelt sehr dem Beispiel der privaten Mitglieder, da private Mitglieder ebenfalls als externe Metadaten modelliert werden, die nicht an der [prototypischen Vererbung](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) teilnehmen.

Dieser Anwendungsfall kann auf bereits erstellte Objekte ausgeweitet werden. Zum Beispiel können wir im Web zusätzliche Daten mit einem DOM-Element verknüpfen, auf das das DOM-Element später zugreifen kann. Ein üblicher Ansatz ist, die Daten als Eigenschaft anzuhängen:

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

- Die `clicked`-Eigenschaft ist aufzählbar und wird daher in [`Object.keys(button)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys), [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Schleifen usw. angezeigt. Dies kann durch die Verwendung von {{jsxref("Object.defineProperty()")}} gemildert werden, aber das macht den Code umständlicher.
- Die `clicked`-Eigenschaft ist eine normale String-Eigenschaft und kann von anderem Code abgerufen und überschrieben werden. Dies kann durch die Verwendung eines {{jsxref("Symbol")}}-Schlüssels gemildert werden, aber der Schlüssel wäre immer noch über {{jsxref("Object.getOwnPropertySymbols()")}} zugänglich.

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

Hier kennt nur der Code, der Zugang zu `clicked` hat, den Geklickt-Zustand jedes Buttons, und externer Code kann die Zustände nicht ändern. Darüber hinaus wird die zugeordnete Metadaten automatisch dem Speicherbereinigungsprozess zugeführt, wenn einer der Buttons aus dem DOM entfernt wird.

### Caching

Sie können Objekte, die an eine Funktion übergeben werden, mit dem Ergebnis der Funktion verknüpfen, sodass beim erneuten Übergeben desselben Objekts das zwischengespeicherte Ergebnis zurückgegeben werden kann, ohne die Funktion erneut auszuführen. Dies ist nützlich, wenn die Funktion rein ist (d.h. sie verändert keine externen Objekte oder verursacht andere beobachtbare Nebeneffekte).

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

Dies funktioniert nur, wenn die Eingabe der Funktion ein Objekt ist. Zudem bleibt das Ergebnis für immer im Cache, solange der Schlüssel (die Eingabe) vorhanden ist, auch wenn die Eingabe nicht erneut übergeben wird. Ein effektiverer Weg ist die Verwendung einer {{jsxref("Map")}} in Kombination mit {{jsxref("WeakRef")}}-Objekten, die es Ihnen ermöglicht, jeden Eingabewerttyp mit dem entsprechenden (möglicherweise großen) Berechnungsergebnis zu verknüpfen. Siehe das Beispiel [WeakRefs und FinalizationRegistry](/de/docs/Web/JavaScript/Guide/Memory_management#weakrefs_and_finalizationregistry) für mehr Details.

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
