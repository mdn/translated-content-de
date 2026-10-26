---
title: WeakMap
slug: Web/JavaScript/Reference/Global_Objects/WeakMap
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Eine **`WeakMap`** ist eine Sammlung von Schlüssel-Wert-Paaren, deren Schlüssel Objekte oder [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sein müssen. Die Werte können einen beliebigen [JavaScript-Typ](/de/docs/Web/JavaScript/Guide/Data_structures) haben. Eine `WeakMap` hält keine starken Referenzen auf ihre Schlüssel. Das bedeutet, dass ein Objekt auch dann von der Garbage Collection erfasst werden kann, wenn es als Schlüssel in einer `WeakMap` vorhanden ist. Sobald ein als Schlüssel verwendetes Objekt erfasst wurde, können auch seine zugehörigen Werte in jeder `WeakMap` von der Garbage Collection erfasst werden – sofern nicht an anderer Stelle starke Referenzen auf sie bestehen. Der einzige primitive Typ, der als Schlüssel einer `WeakMap` verwendet werden kann, ist `symbol` – genauer gesagt [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry). Nicht registrierte Symbole sind garantiert eindeutig und können nicht erneut erzeugt werden.

Mit `WeakMap` können Sie Daten mit Objekten verknüpfen, ohne zu verhindern, dass die Schlüsselobjekte von der Garbage Collection erfasst werden – selbst wenn die Werte auf die Schlüssel verweisen. Eine `WeakMap` erlaubt es jedoch nicht, festzustellen, ob ihre Schlüssel noch existieren. Deshalb können ihre Schlüssel nicht aufgelistet werden. Würde eine `WeakMap` eine Methode zum Abrufen einer Schlüsselliste bereitstellen, hinge diese Liste vom Zustand der Garbage Collection ab. Das würde zu Nichtdeterminismus führen. Wenn Sie eine Liste der Schlüssel benötigen, sollten Sie statt einer `WeakMap` eine {{jsxref("Map")}} verwenden.

Weitere Informationen zu `WeakMap` finden Sie im Abschnitt [Das WeakMap-Objekt](/de/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object) des Leitfadens zu [schlüsselbasierten Sammlungen](/de/docs/Web/JavaScript/Guide/Keyed_collections).

## Beschreibung

Schlüssel einer WeakMap müssen von der Garbage Collection erfasst werden können. Die meisten {{Glossary("Primitive", "primitiven Datentypen")}} können beliebig erzeugt werden und haben keine Lebensdauer. Daher können sie nicht als Schlüssel verwendet werden. Objekte und [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) können als Schlüssel verwendet werden, da sie von der Garbage Collection erfasst werden können.

### Gleichheit von Schlüsseln

Wie bei einer regulären `Map` basiert die Gleichheit von Werten auf dem [SameValueZero](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality)-Algorithmus. Da `WeakMap` nur Objekte und Symbole als Schlüssel zulässt, entspricht dies dem `===`-Operator. Bei Objektschlüsseln basiert die Gleichheit somit auf der Objektidentität: Sie werden anhand ihrer {{Glossary("Object_reference", "Referenz")}} verglichen, nicht anhand ihres Werts.

### Warum WeakMap?

Eine Map-API _könnte_ in JavaScript mit zwei Arrays implementiert werden – einem für Schlüssel und einem für Werte –, die von den vier API-Methoden gemeinsam genutzt werden. Um einen Eintrag zu setzen, würden Schlüssel und Wert jeweils gleichzeitig an das Ende dieser Arrays angehängt. Dadurch hätten Schlüssel und Wert in beiden Arrays denselben Index. Um einen Wert abzurufen, müssten alle Schlüssel durchlaufen werden, bis ein passender gefunden ist. Anschließend ließe sich der zugehörige Wert anhand dieses Index aus dem Werte-Array abrufen.

Eine solche Implementierung hätte zwei wesentliche Nachteile:

1. Das Setzen und Suchen hätte jeweils eine Laufzeit von `O(n)` (_n_ ist die Anzahl der Schlüssel in der Map), da für beide Operationen die Schlüsselliste durchlaufen werden muss.
2. Außerdem entstünde ein Speicherleck: Die Arrays halten Referenzen auf jeden Schlüssel und jeden Wert auf unbestimmte Zeit vor. Diese Referenzen verhindern, dass die Schlüssel von der Garbage Collection erfasst werden, selbst wenn es keine anderen Referenzen auf das jeweilige Objekt gibt. Das würde auch verhindern, dass die zugehörigen Werte erfasst werden.

Im Gegensatz dazu bleibt der Inhalt eines Schlüsselobjekts in einer `WeakMap` stark referenziert, solange der Schlüssel noch nicht von der Garbage Collection erfasst wurde; danach besteht nur noch eine schwache Referenz. Eine `WeakMap`:

- verhindert nicht, dass die Garbage Collection schließlich Referenzen auf das Schlüsselobjekt entfernt
- ermöglicht es, Werte von der Garbage Collection erfassen zu lassen, wenn auf ihre Schlüsselobjekte außerhalb einer `WeakMap` nicht mehr verwiesen wird

Eine `WeakMap` ist besonders nützlich, wenn Sie Schlüsseln Informationen über diese Schlüssel zuordnen möchten, die _nur dann_ von Bedeutung sind, wenn die Schlüssel noch nicht von der Garbage Collection erfasst wurden.

Da eine `WeakMap` jedoch nicht erkennen lässt, ob ihre Schlüssel noch existieren, können ihre Schlüssel nicht aufgelistet werden. Es gibt keine Methode, um eine Liste der Schlüssel abzurufen. Eine solche Liste würde vom Zustand der Garbage Collection abhängen und damit zu Nichtdeterminismus führen. Wenn Sie eine Liste der Schlüssel benötigen, sollten Sie eine {{jsxref("Map")}} verwenden.

## Konstruktor

- {{jsxref("WeakMap/WeakMap", "WeakMap()")}}
  - : Erstellt ein neues `WeakMap`-Objekt.

## Instanzeigenschaften

Diese Eigenschaften sind auf `WeakMap.prototype` definiert und werden von allen `WeakMap`-Instanzen gemeinsam genutzt.

- {{jsxref("Object/constructor", "WeakMap.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Bei `WeakMap`-Instanzen ist der Anfangswert der Konstruktor {{jsxref("WeakMap/WeakMap", "WeakMap")}}.
- `WeakMap.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der Eigenschaft [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) ist die Zeichenfolge `"WeakMap"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("WeakMap.prototype.delete()")}}
  - : Entfernt den durch den Schlüssel angegebenen Eintrag aus dieser `WeakMap`.
- {{jsxref("WeakMap.prototype.get()")}}
  - : Gibt den zum Schlüssel gehörenden Wert in dieser `WeakMap` zurück oder `undefined`, wenn kein solcher Eintrag vorhanden ist.
- {{jsxref("WeakMap.prototype.getOrInsert()")}}
  - : Gibt den Wert zurück, der dem angegebenen Schlüssel in dieser `WeakMap` zugeordnet ist. Falls der Schlüssel nicht vorhanden ist, fügt die Methode einen neuen Eintrag mit diesem Schlüssel und einem angegebenen Standardwert hinzu und gibt den eingefügten Wert zurück.
- {{jsxref("WeakMap.prototype.getOrInsertComputed()")}}
  - : Gibt den Wert zurück, der dem angegebenen Schlüssel in dieser `WeakMap` zugeordnet ist. Falls der Schlüssel nicht vorhanden ist, fügt die Methode einen neuen Eintrag mit diesem Schlüssel und einem durch einen angegebenen Callback berechneten Standardwert hinzu und gibt den eingefügten Wert zurück.
- {{jsxref("WeakMap.prototype.has()")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob in dieser `WeakMap` ein Eintrag mit dem angegebenen Schlüssel vorhanden ist.
- {{jsxref("WeakMap.prototype.set()")}}
  - : Fügt dieser `WeakMap` einen neuen Eintrag mit dem angegebenen Schlüssel und Wert hinzu oder aktualisiert einen vorhandenen Eintrag, wenn der Schlüssel bereits existiert.

## Beispiele

### WeakMap verwenden

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

### Eine WeakMap-ähnliche Klasse mit einer .clear()-Methode implementieren

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

### Private Member nachbilden

Entwickler können eine `WeakMap` verwenden, um private Daten mit einem Objekt zu verknüpfen. Das bietet folgende Vorteile:

- Im Gegensatz zu einer {{jsxref("Map")}} hält eine WeakMap keine starken Referenzen auf das als Schlüssel verwendete Objekt. Die Metadaten haben dadurch dieselbe Lebensdauer wie das Objekt selbst, was Speicherlecks vermeidet.
- Im Gegensatz zu nicht aufzählbaren Eigenschaften und/oder {{jsxref("Symbol")}}-Eigenschaften befindet sich eine WeakMap außerhalb des Objekts. Nutzercode kann die Metadaten daher nicht über reflektierende Methoden wie {{jsxref("Object.getOwnPropertySymbols")}} abrufen.
- Im Gegensatz zu einer [Closure](/de/docs/Web/JavaScript/Guide/Closures) kann dieselbe WeakMap für alle von einem Konstruktor erstellten Instanzen wiederverwendet werden. Das ist speichereffizienter und ermöglicht es verschiedenen Instanzen derselben Klasse, die privaten Member der jeweils anderen zu lesen.

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

Das entspricht ungefähr dem folgenden Code mit [privaten Feldern](/de/docs/Web/JavaScript/Reference/Classes/Private_elements):

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

### Metadaten zuordnen

Mit einer `WeakMap` können Sie einem Objekt Metadaten zuordnen, ohne die Lebensdauer des Objekts selbst zu beeinflussen. Das ähnelt stark dem Beispiel mit privaten Membern, da auch private Member als externe Metadaten modelliert werden, die nicht an der [prototypischen Vererbung](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) teilnehmen.

Dieser Anwendungsfall lässt sich auf bereits erstellte Objekte übertragen. Im Web möchten Sie beispielsweise möglicherweise zusätzliche Daten mit einem DOM-Element verknüpfen, auf die das Element später zugreifen kann. Ein gängiger Ansatz besteht darin, die Daten als Eigenschaft anzuhängen:

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

- Die Eigenschaft `clicked` ist aufzählbar. Sie erscheint daher in [`Object.keys(button)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys), in [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen usw. Mit {{jsxref("Object.defineProperty()")}} lässt sich das vermeiden, allerdings wird der Code dadurch ausführlicher.
- Die Eigenschaft `clicked` ist eine normale Zeichenfolgeneigenschaft und kann daher von anderem Code gelesen und überschrieben werden. Ein {{jsxref("Symbol")}} als Schlüssel kann dies verhindern, der Schlüssel wäre aber weiterhin über {{jsxref("Object.getOwnPropertySymbols()")}} zugänglich.

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

Hier kennt nur Code, der Zugriff auf `clicked` hat, den Klickstatus der einzelnen Schaltflächen. Externer Code kann diesen Status nicht ändern. Wird eine der Schaltflächen aus dem DOM entfernt, werden außerdem die zugehörigen Metadaten automatisch von der Garbage Collection erfasst.

### Caching

Sie können Objekte, die an eine Funktion übergeben werden, mit deren Ergebnis verknüpfen. Wird dasselbe Objekt erneut übergeben, kann das zwischengespeicherte Ergebnis zurückgegeben werden, ohne die Funktion erneut auszuführen. Das ist nützlich, wenn die Funktion rein ist, also keine externen Objekte verändert und keine anderen beobachtbaren Seiteneffekte verursacht.

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

Das funktioniert nur, wenn die Eingabe Ihrer Funktion ein Objekt ist. Außerdem bleibt das Ergebnis dauerhaft im Cache, solange der Schlüssel – also die Eingabe – noch existiert, selbst wenn die Eingabe nie erneut übergeben wird. Eine effizientere Möglichkeit ist eine {{jsxref("Map")}} in Verbindung mit {{jsxref("WeakRef")}}-Objekten. Damit können Sie Eingabewerte beliebiger Typen ihren jeweiligen, möglicherweise großen Berechnungsergebnissen zuordnen. Weitere Informationen finden Sie im Beispiel zu [WeakRefs und FinalizationRegistry](/de/docs/Web/JavaScript/Guide/Memory_management#weakrefs_and_finalizationregistry).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `WeakMap` in `core-js`](https://core-js.io/docs/features/ecmascript/collections#h-weakmap)
- [Schlüsselbasierte Sammlungen](/de/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object)
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakSet")}}
