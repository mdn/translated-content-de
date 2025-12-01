---
title: Speicherverwaltung
slug: Web/JavaScript/Guide/Memory_management
l10n:
  sourceCommit: 2daa58aa61e3dac68d77908b27512d2ae339dbb6
---

Low-Level-Sprachen wie C verfügen über manuelle Speicherverwaltungsprimitive wie [`malloc()`](https://pubs.opengroup.org/onlinepubs/009695399/functions/malloc.html) und [`free()`](https://en.wikipedia.org/wiki/C_dynamic_memory_allocation#Overview_of_functions). Im Gegensatz dazu weist JavaScript automatisch Speicher zu, wenn Objekte erstellt werden, und gibt ihn frei, wenn sie nicht mehr verwendet werden (_Garbage Collection_). Diese Automatisierung kann eine potenzielle Quelle der Verwirrung sein: Sie kann Entwicklern den falschen Eindruck vermitteln, dass sie sich keine Sorgen über die Speicherverwaltung machen müssen.

## Lebenszyklus des Speichers

Unabhängig von der Programmiersprache ist der Speicherlebenszyklus nahezu immer gleich:

1. Den Speicher, den Sie benötigen, zuweisen
2. Den zugewiesenen Speicher verwenden (lesen, schreiben)
3. Den zugewiesenen Speicher freigeben, wenn er nicht mehr benötigt wird

Der zweite Teil ist in allen Sprachen explizit. Die ersten und letzten Teile sind in Low-Level-Sprachen explizit, aber in High-Level-Sprachen wie JavaScript hauptsächlich implizit.

### Zuweisung in JavaScript

#### Wertinitialisierung

Um den Programmierer nicht mit Zuweisungen zu belasten, wird JavaScript automatisch Speicher zuweisen, wenn Werte initial deklariert werden.

```js
const n = 123; // allocates memory for a number
const s = "string"; // allocates memory for a string

const o = {
  a: 1,
  b: null,
}; // allocates memory for an object and contained values

// (like object) allocates memory for the array and
// contained values
const a = [1, null, "str2"];

function f(a) {
  return a + 2;
} // allocates a function (which is a callable object)

// function expressions also allocate an object
someElement.addEventListener("click", () => {
  someElement.style.backgroundColor = "blue";
});
```

#### Zuweisung über Funktionsaufrufe

Einige Funktionsaufrufe führen zur Zuweisung von Objekten.

```js
const d = new Date(); // allocates a Date object

const e = document.createElement("div"); // allocates a DOM element
```

Einige Methoden weisen neue Werte oder Objekte zu:

```js
const s = "string";
const s2 = s.substring(0, 3); // s2 is a new string
// Since strings are immutable values,
// JavaScript may decide to not allocate memory,
// but just store the [0, 3] range.

const a = ["yeah yeah", "no no"];
const a2 = ["generation", "no no"];
const a3 = a.concat(a2);
// new array with 4 elements being
// the concatenation of a and a2 elements.
```

### Verwendung von Werten

Die Verwendung von Werten bedeutet im Wesentlichen, in zugewiesenem Speicher zu lesen und zu schreiben. Dies kann durch das Lesen oder Schreiben des Werts einer Variablen oder einer Objekteigenschaft oder sogar durch das Übergeben eines Arguments an eine Funktion erfolgen.

### Freigabe, wenn der Speicher nicht mehr benötigt wird

Die meisten Speicherverwaltungsprobleme treten in dieser Phase auf. Der schwierigste Aspekt dieser Phase ist es festzustellen, wann der zugewiesene Speicher nicht mehr benötigt wird.

Low-Level-Sprachen erfordern, dass der Entwickler manuell festlegt, wann der zugewiesene Speicher im Programm nicht mehr benötigt wird und ihn freigibt.

Einige High-Level-Sprachen, wie JavaScript, verwenden eine Form der automatischen Speicherverwaltung, bekannt als [Garbage Collection](<https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)>) (GC). Der Zweck eines Garbage Collectors ist es, die Speicherzuweisung zu überwachen, zu bestimmen, wann ein zugewiesener Speicherblock nicht mehr benötigt wird, und ihn zurückzugewinnen. Dieser automatische Prozess ist eine Annäherung, da das allgemeine Problem, festzustellen, ob ein bestimmtes Speicherelement noch benötigt wird, [unentscheidbar](https://en.wikipedia.org/wiki/Decidability_%28logic%29).

## Garbage Collection

Wie oben erwähnt, ist das allgemeine Problem, automatisch festzustellen, ob Speicher "nicht mehr benötigt wird", unentscheidbar. Folglich implementieren Garbage Collector eine Einschränkung einer Lösung des allgemeinen Problems. In diesem Abschnitt werden die Konzepte erläutert, die notwendig sind, um die Hauptalgorithmen der Garbage Collection und deren jeweiligen Einschränkungen zu verstehen.

### Referenzen

Das Hauptkonzept, auf dem Garbage Collection-Algorithmen beruhen, ist das Konzept der _Referenz_. Im Kontext der Speicherverwaltung wird gesagt, dass ein Objekt ein anderes Objekt referenziert, wenn das erste auf das zweite zugreifen kann (entweder implizit oder explizit). Beispielsweise hat ein JavaScript-Objekt eine Referenz auf seinen [Prototypen](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) (implizite Referenz) und auf seine Eigenschaftswerte (explizite Referenz).

In diesem Kontext wird der Begriff "Objekt" auf etwas breiteres als reguläre JavaScript-Objekte erweitert und umfasst auch Funktionsbereiche (oder den globalen lexikalischen Bereich).

### Referenzzählende Garbage Collection

> [!NOTE]
> Kein moderner JavaScript-Engine verwendet mehr die Referenzzählung für Garbage Collection.

Dies ist der naivste Algorithmus der Garbage Collection. Dieser Algorithmus reduziert das Problem darauf, festzustellen, ob ein Objekt noch benötigt wird, indem geprüft wird, ob ein Objekt noch von anderen Objekten referenziert wird. Ein Objekt wird als "Garbage" oder sammelbar bezeichnet, wenn es keine Referenzen darauf gibt.

Zum Beispiel:

```js
let x = {
  a: {
    b: 2,
  },
};
// 2 objects are created. One is referenced by the other as one of its properties.
// The other is referenced by virtue of being assigned to the 'x' variable.
// Obviously, none can be garbage-collected.

let y = x;
// The 'y' variable is the second thing that has a reference to the object.

x = 1;
// Now, the object that was originally in 'x' has a unique reference
// embodied by the 'y' variable.

let z = y.a;
// Reference to 'a' property of the object.
// This object now has 2 references: one as a property,
// the other as the 'z' variable.

y = "mozilla";
// The object that was originally in 'x' has now zero
// references to it. It can be garbage-collected.
// However its 'a' property is still referenced by
// the 'z' variable, so it cannot be freed.

z = null;
// The 'a' property of the object originally in x
// has zero references to it. It can be garbage collected.
```

Es gibt eine Einschränkung bei zyklischen Referenzen. Im folgenden Beispiel werden zwei Objekte erstellt, deren Eigenschaften sich gegenseitig referenzieren, wodurch ein Zyklus entsteht. Sie werden nach Abschluss des Funktionsaufrufs außer Geltung geraten. Zu diesem Zeitpunkt werden sie nicht mehr benötigt und ihr zugewiesener Speicher sollte zurückgefordert werden. Der Referenzzählungsalgorithmus wird sie jedoch nicht als rückforderbar betrachten, da jedes der beiden Objekte mindestens eine Referenz auf sie hat, was dazu führt, dass keines von ihnen für die Garbage Collection markiert wird. Zyklische Referenzen sind eine häufige Ursache für Speicherlecks.

```js
function f() {
  const x = {};
  const y = {};
  x.a = y; // x references y
  y.a = x; // y references x

  return "azerty";
}

f();
```

### Mark-and-Sweep-Algorithmus

Dieser Algorithmus reduziert die Definition von "ein Objekt wird nicht mehr benötigt" auf "ein Objekt ist nicht erreichbar".

Dieser Algorithmus setzt voraus, dass eine Menge von Objekten bekannt ist, die als _Wurzeln_ bezeichnet werden. In JavaScript ist die Wurzel das globale Objekt. Periodisch beginnt der Garbage Collector bei diesen Wurzeln, findet alle Objekte, die von diesen Wurzeln referenziert werden, dann alle Objekte, die von diesen referenziert werden, usw. Ausgehend von den Wurzeln wird der Garbage Collector somit alle _erreichbaren_ Objekte finden und alle nicht erreichbaren Objekte sammeln.

Dieser Algorithmus ist eine Verbesserung gegenüber dem vorherigen, da ein Objekt ohne Referenzen tatsächlich nicht erreichbar ist. Das Gegenteil gilt jedoch nicht, wie wir bei den zyklischen Referenzen gesehen haben.

Derzeit haben alle modernen Engines einen Mark-and-Sweep-Garbage Collector. Alle Verbesserungen im Bereich der JavaScript-Garbage Collection (generational/incremental/concurrent/parallel Garbage Collection) in den letzten Jahren sind Implementierungsverbesserungen dieses Algorithmus, aber keine Verbesserungen des Garbage-Collection-Algorithmus selbst noch seiner Reduktion der Definition, wann "ein Objekt nicht mehr benötigt wird".

Der unmittelbare Vorteil dieses Ansatzes ist, dass Zyklen kein Problem mehr darstellen. Im ersten Beispiel oben sind die beiden Objekte nach der Rückkehr des Funktionsaufrufs nicht mehr von einer Ressource referenziert, die vom globalen Objekt aus erreichbar ist. Folglich werden sie vom Garbage Collector als unerreichbar identifiziert und ihr zugewiesener Speicher zurückgefordert.

Die Unfähigkeit, die Garbage Collection manuell zu steuern, bleibt jedoch bestehen. Es gibt Zeiten, in denen es praktisch wäre, manuell zu entscheiden, wann und welcher Speicher freigegeben wird. Um den Speicher eines Objekts freizugeben, muss er explizit unerreichbar gemacht werden. Es ist auch nicht möglich, die Garbage Collection programmgesteuert in JavaScript auszulösen – und es wird wahrscheinlich nie innerhalb der Kernsprache möglich sein, obwohl Engines APIs hinter Opt-in-Flags bereitstellen können.

## Konfigurieren des Speicher-Modells einer Engine

JavaScript-Engines bieten in der Regel Flags, die das Speicher-Modell freilegen. Zum Beispiel bietet Node.js zusätzliche Optionen und Tools, die die zugrunde liegenden V8-Mechanismen zur Konfiguration und Fehlerbehebung bieten. Diese Konfigurationen sind möglicherweise in Browsern nicht verfügbar und noch weniger für Webseiten (über HTTP-Header usw.).

Die maximale Menge des verfügbaren Heap-Speichers kann mit einem Flag erhöht werden:

```bash
node --max-old-space-size=6000 index.js
```

Wir können den Garbage Collector auch für die Fehlerbehebung bei Speicherproblemen mithilfe eines Flags und des [Chrome Debuggers](https://nodejs.org/en/learn/getting-started/debugging) freilegen:

```bash
node --expose-gc --inspect index.js
```

## Datenstrukturen zur Unterstützung der Speicherverwaltung

Obwohl JavaScript die Garbage-Collector-API nicht direkt bereitstellt, bietet die Sprache mehrere Datenstrukturen, die die Garbage Collection indirekt beobachten und zur Verwaltung der Speichernutzung verwendet werden können.

### WeakMaps und WeakSets

[`WeakMap`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) und [`WeakSet`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakSet) sind Datenstrukturen, deren APIs eng ihren nicht-weak Gegenstücken entsprechen: [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set). `WeakMap` ermöglicht es, eine Sammlung von Schlüssel-Wert-Paaren zu verwalten, während `WeakSet` es ermöglicht, eine Sammlung einzigartiger Werte zu verwalten, beide mit performanten Hinzufügungs-, Lösch- und Abfrageoperationen.

`WeakMap` und `WeakSet` haben ihren Namen vom Konzept des _schwach gehaltenen_ Werten. Wenn `x` schwach von `y` gehalten wird, bedeutet das, dass Sie den Wert von `x` über `y` zwar zugreifen können, der Mark-and-Sweep-Algorithmus `x` jedoch nicht als erreichbar betrachtet, wenn nichts anderes _stark hält_ es. Die meisten Datenstrukturen außer den hier besprochenen halten die Objekte, die ihnen übergeben werden, stark fest, sodass Sie sie jederzeit abrufen können. Die Schlüssel von `WeakMap` und `WeakSet` können garbage-gemäßigt werden (bei `WeakMap`-Objekten wären dann auch die Werte für die Garbage Collection geeignet), solange nichts anderes im Programm auf den Schlüssel verweist. Dies wird durch zwei Merkmale sichergestellt:

- `WeakMap` und `WeakSet` können nur Objekte oder Symbole speichern. Dies liegt daran, dass nur Objekte garbage-gemäßigt werden – primitive Werte lassen sich immer nachbilden (das heißt, `1 === 1`, aber `{} !== {}`), wodurch sie für immer in der Sammlung bleiben. [Registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) (wie `Symbol.for("key")`) können ebenfalls nachgebildet und daher nicht garbage-gemäßigt werden, aber Symbole, die mit `Symbol("key")` erstellt wurden, sind garbage-gemäßigt. [Gut bekannte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) wie `Symbol.iterator` kommen in einem festen Satz und sind einzigartig während der gesamten Lebensdauer des Programms, ähnlich wie intrinsische Objekte wie `Array.prototype`, weshalb sie auch als Schlüssel zugelassen sind.
- `WeakMap` und `WeakSet` sind nicht iterierbar. Dies verhindert, dass Sie `Array.from(map.keys()).length` verwenden, um die Lebendigkeit von Objekten zu beobachten oder sich einen beliebigen Schlüssel zu verschaffen, der andernfalls für die Garbage Collection in Frage kommen sollte. (Die Garbage-Collection sollte so unsichtbar wie möglich sein.)

In typischen Erklärungen von `WeakMap` und `WeakSet` (wie der oben genannten) wird oft impliziert, dass der Schlüssel zuerst garbage-gemäßigt wird und somit auch der Wert für die Garbage Collection frei wird. Berücksichtigen Sie jedoch den Fall, dass der Wert den Schlüssel referenziert:

```js
const wm = new WeakMap();
const key = {};
wm.set(key, { key });
// Now `key` cannot be garbage collected,
// because the value holds a reference to the key,
// and the value is strongly held in the map!
```

Wenn `key` als tatsächliche Referenz gespeichert würde, würde es eine zyklische Referenz erstellen und sowohl den Schlüssel als auch den Wert für die Garbage Collection ungeeignet machen, selbst wenn nichts anderes `key` referenziert – denn wenn `key` garbage-gemäßigt wird, würde es bedeuten, dass zu einem bestimmten Zeitpunkt `value.key` auf eine nicht existente Adresse zeigen würde, was nicht legal ist. Um das zu beheben, sind die Einträge von `WeakMap` und `WeakSet` keine tatsächlichen Referenzen, sondern [Ephemerons](https://dl.acm.org/doi/pdf/10.1145/263700.263733), eine Verbesserung des Mark-and-Sweep-Mechanismus. [Barros et al.](https://www.jucs.org/jucs_14_21/eliminating_cycles_in_weak/jucs_14_21_3481_3497_barros.pdf) bietet eine gute Zusammenfassung des Algorithmus (Seite 4). Um einen Absatz zu zitieren:

> Ephemerons sind eine Verfeinerung von schwachen Paaren, bei denen weder der Schlüssel noch der Wert als schwach oder stark klassifiziert werden können. Die Konnektivität des Schlüssels bestimmt die Konnektivität des Werts, aber die Konnektivität des Werts beeinflusst nicht die Konnektivität des Schlüssels. […] wenn die Garbage Collection die Unterstützung für Ephemerons bietet, erfolgt sie in drei Phasen statt in zwei (Mark und Sweep).

Als grobes Denkmodell stellen Sie sich `WeakMap` als die folgende Implementierung vor:

> [!WARNING]
> Dies ist weder ein Polyfill noch ist es irgendwie nah an der echten Implementierung in der Engine (die in den Garbage-Collection-Mechanismus eingehakt ist).

```js
class MyWeakMap {
  #marker = Symbol("MyWeakMapData");
  get(key) {
    return key[this.#marker];
  }
  set(key, value) {
    key[this.#marker] = value;
  }
  has(key) {
    return this.#marker in key;
  }
  delete(key) {
    delete key[this.#marker];
  }
}
```

Wie Sie sehen, hält `MyWeakMap` niemals tatsächlich eine Sammlung von Schlüsseln. Vielmehr fügt es jedem übergebenen Objekt Metadaten hinzu. Das Objekt ist dann über Mark-and-Sweep garbage-gemäßigt. Daher ist es nicht möglich, über die Schlüssel in einer `WeakMap` zu iterieren oder die `WeakMap` zu leeren (da das auch das Wissen über die gesamte Schlüsselsammlung voraussetzt).

Für weitere Informationen zu deren APIs siehe den [Leitfaden für Sammlungen mit Schlüsselwerten](/de/docs/Web/JavaScript/Guide/Keyed_collections).

### WeakRefs und FinalizationRegistry

> [!NOTE]
> `WeakRef` und `FinalizationRegistry` bieten direkte Einsicht in den Garbage-Collection-Mechanismus. [Vermeiden Sie deren Verwendung, wo immer möglich](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#avoid_where_possible), da die Laufzeitsemantik fast vollständig ungarantiert ist.

Alle Variablen mit einem Objekt als Wert sind Referenzen für dieses Objekt. Solche Referenzen sind jedoch _stark_ – ihre Existenz verhindert, dass der Garbage Collector das Objekt als für die Sammlung geeignet markiert. Ein [`WeakRef`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef) ist eine _schwache Referenz_ auf ein Objekt, die es dem Objekt ermöglicht, garbage-gemäßigt zu werden, während es dennoch möglich bleibt, den Inhalt des Objekts während seiner Lebensdauer zu lesen.

Ein Anwendungsfall für `WeakRef` ist ein Cache-System, das String-URLs großen Objekten zuordnet. Wir können für diesen Zweck keine `WeakMap` verwenden, da bei `WeakMap`-Objekten ihre _Schlüssel_ schwach gehalten werden, aber nicht ihre _Werte_ – wenn Sie auf einen Schlüssel zugreifen, würden Sie immer deterministisch den Wert erhalten (da der Zugriff auf den Schlüssel bedeutet, dass er immer noch lebt). Hier ist es okay, `undefined` für einen Schlüssel zu erhalten (wenn der entsprechende Wert nicht mehr lebt), da wir ihn einfach neu berechnen können, aber wir möchten nicht, dass unerreichbare Objekte im Cache bleiben. In diesem Fall können wir eine normale `Map` verwenden, aber mit jedem Wert als `WeakRef` des Objekts anstelle des tatsächlichen Objektwerts.

```js
function cached(getter) {
  // A Map from string URLs to WeakRefs of results
  const cache = new Map();
  return async (key) => {
    if (cache.has(key)) {
      const dereferencedValue = cache.get(key).deref();
      if (dereferencedValue !== undefined) {
        return dereferencedValue;
      }
    }
    const value = await getter(key);
    cache.set(key, new WeakRef(value));
    return value;
  };
}

const getImage = cached((url) => fetch(url).then((res) => res.blob()));
```

[`FinalizationRegistry`](/de/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry) bietet einen noch stärkeren Mechanismus zur Beobachtung der Garbage Collection. Es ermöglicht Ihnen die Registrierung von Objekten und benachrichtigt Sie, wenn sie garbage-gemäßigt werden. Zum Beispiel, für das oben genannte Cache-System, selbst wenn die Blobs selbst für die Sammlung freigegeben sind, sind die `WeakRef`-Objekte, die sie halten, nicht – und mit der Zeit kann die `Map` viele nutzlose Einträge ansammeln. Die Verwendung einer `FinalizationRegistry` ermöglicht es in diesem Fall, Aufräumarbeiten durchzuführen.

```js
function cached(getter) {
  // A Map from string URLs to WeakRefs of results
  const cache = new Map();
  // Every time after a value is garbage collected, the callback is
  // called with the key in the cache as argument, allowing us to remove
  // the cache entry
  const registry = new FinalizationRegistry((key) => {
    // Note: it's important to test that the WeakRef is indeed empty.
    // Otherwise, the callback may be called after a new object has been
    // added with this key, and that new, alive object gets deleted
    if (!cache.get(key)?.deref()) {
      cache.delete(key);
    }
  });
  return async (key) => {
    if (cache.has(key)) {
      return cache.get(key).deref();
    }
    const value = await getter(key);
    cache.set(key, new WeakRef(value));
    registry.register(value, key);
    return value;
  };
}

const getImage = cached((url) => fetch(url).then((res) => res.blob()));
```

Aufgrund von Leistungs- und Sicherheitsbedenken gibt es keine Garantie, wann der Callback aufgerufen wird, oder ob er überhaupt aufgerufen wird. Es sollte nur zur Aufräumung verwendet werden – und zur nicht kritischen Aufräumung. Es gibt andere Möglichkeiten für eine deterministische Ressourcenverwaltung, wie [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch), welche immer den `finally`-Block ausführt. `WeakRef` und `FinalizationRegistry` existieren ausschließlich zur Optimierung der Speichernutzung in lang laufenden Programmen.

Für weitere Informationen zu den APIs von [`WeakRef`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef) und [`FinalizationRegistry`](/de/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry) sehen Sie sich deren Referenzseiten an.
