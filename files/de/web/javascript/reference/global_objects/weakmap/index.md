---
title: WeakMap
slug: Web/JavaScript/Reference/Global_Objects/WeakMap
l10n:
  sourceCommit: a1f1a8348bdf6dd80af9e1ac7b5b748ef74df12d
---

Ein **`WeakMap`** ist eine Sammlung von Schlüssel/Wert-Paaren, deren Schlüssel Objekte oder [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sein müssen, mit Werten eines beliebigen [JavaScript-Typs](/de/docs/Web/JavaScript/Guide/Data_structures). Sie erstellt keine starken Referenzen zu ihren Schlüsseln. Das bedeutet, dass die Präsenz eines Objekts als Schlüssel in einer `WeakMap` nicht verhindert, dass das Objekt vom Müllsammler eingesammelt wird. Sobald ein als Schlüssel verwendetes Objekt eingesammelt wurde, werden die entsprechenden Werte in jeder `WeakMap` ebenfalls Kandidaten für die Müllsammlung — solange sie nicht stark an anderer Stelle referenziert werden. Der einzige primitive Typ, der als `WeakMap`-Schlüssel verwendet werden kann, ist Symbol — genauer gesagt, [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) — da nicht registrierte Symbole garantiert einzigartig sind und nicht neu erstellt werden können.

`WeakMap` ermöglicht es, Daten mit Objekten zu verknüpfen, ohne dass die Schlüsselobjekte vom Einsammeln ausgeschlossen werden, selbst wenn die Werte auf die Schlüssel verweisen. Jedoch erlaubt eine `WeakMap` nicht, die Lebensdauer ihrer Schlüssel zu beobachten, weshalb sie keine Aufzählung zulässt; wenn eine `WeakMap` eine Methode bereitstellen würde, um eine Liste ihrer Schlüssel zu erhalten, würde die Liste vom Zustand der Müllsammlung abhängen und Nicht-Determinismus einführen. Wenn Sie eine Liste von Schlüsseln wünschen, sollten Sie eine {{jsxref("Map")}} anstelle einer `WeakMap` verwenden.

Sie können mehr über `WeakMap` im Abschnitt [WeakMap-Objekt](/de/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object) des [Leitfadens zu Keyed Collections](/de/docs/Web/JavaScript/Guide/Keyed_collections) erfahren.

## Beschreibung

Schlüssel von WeakMaps müssen vom Müllsammler aufräumbar sein. Die meisten {{Glossary("Primitive", "primitiven Datentypen")}} können beliebig erstellt werden und haben keine Lebensdauer, daher können sie nicht als Schlüssel verwendet werden. Objekte und [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) können als Schlüssel verwendet werden, da sie vom Müllsammler aufgeräumt werden können.

### Schlüsselgleichheit

Wie bei einer regulären `Map` basiert die Wertgleichheit auf dem [SameValueZero](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality)-Algorithmus, der dem `===`-Operator entspricht, da `WeakMap` nur Objekt- und Symbolschlüssel aufnehmen kann. Dies bedeutet, dass für Objektschlüssel die Gleichheit auf der Objektidentität basiert. Sie werden anhand der {{Glossary("Object_reference", "Referenz")}} und nicht nach Wert verglichen.

### Warum WeakMap?

Eine Map-API _könnte_ in JavaScript mit zwei Arrays (eines für Schlüssel, eines für Werte) implementiert werden, die von den vier API-Methoden geteilt werden. Elemente in diese Map zu setzen würde das gleichzeitige Hinzufügen eines Schlüssels und eines Werts am Ende jedes dieser Arrays beinhalten. Die Indizes des Schlüssels und des Werts würden dann beiden Arrays entsprechen. Werte aus der Map abzurufen würde das Durchlaufen aller Schlüssel erfordern, um eine Übereinstimmung zu finden, und diese Übereinstimmung dann nutzen, um den entsprechenden Wert aus dem Array mit Werten abzurufen.

Eine solche Implementierung würde zwei Hauptnachteile haben:

1. Der erste ist ein `O(n)` Setzen und Suchen (_n_ ist die Anzahl der Schlüssel in der Map), da beide Operationen durch die Liste der Schlüssel laufen müssen, um einen passenden Wert zu finden.
2. Der zweite Nachteil ist ein Speicherleck, da die Arrays sicherstellen, dass Referenzen zu jedem Schlüssel und jedem Wert unbegrenzt beibehalten werden. Diese Referenzen verhindern, dass die Schlüssel vom Müllsammler aufgeräumt werden, auch wenn es keine weiteren Referenzen auf das Objekt gibt. Dies würde auch verhindern, dass die entsprechenden Werte vom Müllsammler aufgeräumt werden.

Im Gegensatz dazu verweist in einer `WeakMap` ein Schlüsselobjekt stark auf seine Inhalte, solange der Schlüssel nicht vom Müllsammler eingesammelt wird, und ab dann schwach. Daher:

- verhindert eine `WeakMap` nicht die Müllsammlung, die letztendlich die Referenzen zum Schlüsselobjekt entfernt
- ermöglicht die Müllsammlung von Werten, wenn ihre Schlüsselobjekte nicht anderswo als in einer `WeakMap` referenziert werden

Eine `WeakMap` kann ein besonders nützliches Konstrukt sein, um Schlüssel mit Informationen über den Schlüssel zu verknüpfen, die nur wertvoll _sind_, wenn der Schlüssel nicht vom Müllsammler eingesammelt wurde.

Da jedoch eine `WeakMap` nicht die Lebensdauer ihrer Schlüssel beobachtbar macht, sind ihre Schlüssel nicht aufzählbar. Es gibt keine Methode, um eine Liste der Schlüssel zu erhalten. Wenn es eine gäbe, würde die Liste vom Zustand der Müllsammlung abhängen und Nicht-Determinismus einführen. Wenn Sie eine Liste von Schlüsseln wünschen, sollten Sie eine {{jsxref("Map")}} verwenden.

## Konstruktor

- {{jsxref("WeakMap/WeakMap", "WeakMap()")}}
  - : Erstellt ein neues `WeakMap`-Objekt.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `WeakMap.prototype` definiert und werden von allen `WeakMap`-Instanzen geteilt.

- {{jsxref("Object/constructor", "WeakMap.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `WeakMap`-Instanzen ist der Anfangswert der {{jsxref("WeakMap/WeakMap", "WeakMap")}}-Konstruktor.
- `WeakMap.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"WeakMap"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("WeakMap.prototype.delete()")}}
  - : Entfernt den Eintrag, der durch den Schlüssel in dieser `WeakMap` angegeben ist.
- {{jsxref("WeakMap.prototype.get()")}}
  - : Gibt den Wert zurück, der dem Schlüssel in dieser `WeakMap` entspricht, oder `undefined`, wenn keiner existiert.
- {{jsxref("WeakMap.prototype.getOrInsert()")}}
  - : Gibt den Wert zurück, der dem angegebenen Schlüssel in dieser `WeakMap` entspricht. Wenn der Schlüssel nicht vorhanden ist, fügt er einen neuen Eintrag mit dem Schlüssel und einem gegebenen Standardwert ein und gibt den eingefügten Wert zurück.
- {{jsxref("WeakMap.prototype.getOrInsertComputed()")}}
  - : Gibt den Wert zurück, der dem angegebenen Schlüssel in dieser `WeakMap` entspricht. Wenn der Schlüssel nicht vorhanden ist, fügt er einen neuen Eintrag mit dem Schlüssel und einem Standardwert, der von einer gegebenen Rückruffunktion berechnet wird, ein und gibt den eingefügten Wert zurück.
- {{jsxref("WeakMap.prototype.has()")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob ein Eintrag mit dem angegebenen Schlüssel in dieser `WeakMap` existiert oder nicht.
- {{jsxref("WeakMap.prototype.set()")}}
  - : Fügt dieser `WeakMap` einen neuen Eintrag mit einem angegebenen Schlüssel und Wert hinzu oder aktualisiert einen bestehenden Eintrag, wenn der Schlüssel bereits existiert.

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

### Emulierung privater Mitglieder

Entwickler können eine `WeakMap` verwenden, um private Daten mit einem Objekt zu verknüpfen, mit den folgenden Vorteilen:

- Im Vergleich zu einer {{jsxref("Map")}} hält eine `WeakMap` keine starken Referenzen zu dem als Schlüssel verwendeten Objekt, sodass die Metadaten die gleiche Lebensdauer wie das Objekt selbst haben und Speicherlecks vermieden werden.
- Im Vergleich zur Verwendung nicht aufzählbarer und/oder {{jsxref("Symbol")}}-Eigenschaften ist eine `WeakMap` extern zum Objekt, und es gibt keine Möglichkeit für Benutzercode, die Metadaten über reflektive Methoden wie {{jsxref("Object.getOwnPropertySymbols")}} abzurufen.
- Im Vergleich zu einem [Closure](/de/docs/Web/JavaScript/Guide/Closures) kann die gleiche `WeakMap` für alle Instanzen, die von einem Konstruktor erstellt werden, wiederverwendet werden, wodurch sie speichereffizienter ist, und erlaubt es verschiedenen Instanzen derselben Klasse, die privaten Mitglieder voneinander zu lesen.

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

Dies ist grob äquivalent zu dem Folgenden, unter Verwendung von [privaten Feldern](/de/docs/Web/JavaScript/Reference/Classes/Private_elements):

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

Eine `WeakMap` kann verwendet werden, um Metadaten mit einem Objekt zu verknüpfen, ohne die Lebensdauer des Objekts selbst zu beeinflussen. Dies ist dem Beispiel mit privaten Mitgliedern sehr ähnlich, da private Mitglieder ebenfalls als externe Metadaten modelliert sind, die nicht an der [prototypischen Vererbung](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) teilnehmen.

Dieser Anwendungsfall kann auf bereits erstellte Objekte erweitert werden. Zum Beispiel können wir im Web zusätzliche Daten mit einem DOM-Element verknüpfen, auf das das DOM-Element später zugreifen kann. Ein gängiger Ansatz ist, die Daten als Eigenschaft anzuhängen:

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

- Die `clicked`-Eigenschaft ist aufzählbar, sodass sie in [`Object.keys(button)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys), [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen usw. angezeigt wird. Dies kann durch Verwendung von {{jsxref("Object.defineProperty()")}} gemildert werden, macht den Code jedoch ausführlicher.
- Die `clicked`-Eigenschaft ist eine normale String-Eigenschaft, sodass sie von anderem Code abgerufen und überschrieben werden kann. Dies kann durch Verwendung eines {{jsxref("Symbol")}}-Schlüssels gemildert werden, aber der Schlüssel wäre immer noch über {{jsxref("Object.getOwnPropertySymbols()")}} zugänglich.

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

Hier kennt nur Code, der Zugriff auf `clicked` hat, den geklickten Status jedes Buttons, und externer Code kann die Zustände nicht ändern. Zusätzlich wird, wenn einer der Buttons aus dem DOM entfernt wird, die zugehörigen Metadaten automatisch vom Müllsammler entfernt.

### Caching

Sie können Objekte, die an eine Funktion übergeben werden, mit dem Ergebnis der Funktion verknüpfen, sodass beim erneuten Übergeben des gleichen Objekts das zwischengespeicherte Ergebnis zurückgegeben werden kann, ohne dass die Funktion erneut ausgeführt wird. Dies ist nützlich, wenn die Funktion rein ist (d.h. sie ändert keine externen Objekte oder verursacht keine anderen beobachtbaren Nebeneffekte).

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

Dies funktioniert nur, wenn die Eingabe Ihrer Funktion ein Objekt ist. Selbst wenn die Eingabe nie erneut übergeben wird, bleibt das Ergebnis für immer im Cache, solange der Schlüssel (die Eingabe) existiert. Eine effektivere Methode ist die Verwendung einer {{jsxref("Map")}} in Verbindung mit {{jsxref("WeakRef")}}-Objekten, die es Ihnen ermöglicht, jeden Eingabewert mit seinem jeweiligen (potenziell großen) Berechnungsergebnis zu verknüpfen. Siehe das Beispiel [WeakRefs und FinalizationRegistry](/de/docs/Web/JavaScript/Guide/Memory_management#weakrefs_and_finalizationregistry) für weitere Details.

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
