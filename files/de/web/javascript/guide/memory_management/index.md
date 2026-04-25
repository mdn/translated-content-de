---
title: Speicherverwaltung
slug: Web/JavaScript/Guide/Memory_management
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

Niedrig-levelige Sprachen wie C verfügen über manuelle Speicherverwaltungs-Primitiven wie [`malloc()`](https://pubs.opengroup.org/onlinepubs/009695399/functions/malloc.html) und [`free()`](https://en.wikipedia.org/wiki/C_dynamic_memory_allocation#Overview_of_functions). Im Gegensatz dazu allociert JavaScript automatisch Speicher, wenn Objekte erstellt werden, und gibt ihn frei, wenn sie nicht mehr verwendet werden (_Garbage Collection_). Diese Automatik kann eine potenzielle Quelle der Verwirrung sein: Sie kann Entwicklern den falschen Eindruck vermitteln, sich nicht um die Speicherverwaltung kümmern zu müssen.

## Speicherlebenszyklus

Unabhängig von der Programmiersprache ist der Speicherlebenszyklus praktisch immer derselbe:

1. Allocieren Sie den benötigten Speicher
2. Verwenden Sie den allozierten Speicher (lesen, schreiben)
3. Geben Sie den allozierten Speicher frei, wenn er nicht mehr benötigt wird

Der zweite Teil ist in allen Sprachen explizit. Die ersten und letzten Teile sind in niedrig-leveligen Sprachen explizit, aber in hoch-leveligen Sprachen wie JavaScript meist implizit.

### Allokation in JavaScript

#### Wertinitialisierung

Um den Programmierer nicht mit Allokationen zu belasten, allociert JavaScript automatisch Speicher, wenn Werte initial deklariert werden.

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

#### Allokation durch Funktionsaufrufe

Einige Funktionsaufrufe führen zur Allokation von Objekten.

```js
const d = new Date(); // allocates a Date object

const e = document.createElement("div"); // allocates a DOM element
```

Einige Methoden allocieren neue Werte oder Objekte:

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

Die Verwendung von Werten bedeutet im Wesentlichen das Lesen und Schreiben im allozierten Speicher. Dies kann durch Lesen oder Schreiben des Wertes einer Variablen oder einer Objekteigenschaft oder sogar durch Übergeben eines Arguments an eine Funktion erfolgen.

### Freigabe, wenn der Speicher nicht mehr benötigt wird

Die meisten Speicherverwaltungsprobleme treten in dieser Phase auf. Der schwierigste Aspekt dieser Phase ist es zu bestimmen, wann der allozierte Speicher nicht mehr benötigt wird.

Niedrig-levelige Sprachen erfordern vom Entwickler, manuell zu bestimmen, an welchem Punkt im Programm der allozierte Speicher nicht mehr benötigt wird, und diesen freizugeben.

Einige hoch-levelige Sprachen wie JavaScript verwenden eine Form der automatischen Speicherverwaltung, die als [Garbage Collection](<https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)>) (GC) bekannt ist. Ziel eines Garbage Collectors ist es, die Speicherallokation zu überwachen und festzustellen, wann ein Block allozierter Speicher nicht mehr benötigt wird, und diesen freizugeben. Dieser automatische Prozess ist eine Annäherung, da das allgemeine Problem der Bestimmung, ob ein bestimmtes Stück Speicher noch benötigt wird, [unentscheidbar](https://en.wikipedia.org/wiki/Decidability_%28logic%29) ist.

## Garbage Collection

Wie oben erwähnt, ist das allgemeine Problem, automatisch zu finden, ob ein Speicher "nicht mehr benötigt wird", unentscheidbar. Daher implementieren Garbage Collector eine eingeschränkte Lösung für das allgemeine Problem. Dieser Abschnitt erklärt die Konzepte, die zum Verständnis der wichtigsten Garbage-Collection-Algorithmen und ihrer jeweiligen Einschränkungen erforderlich sind.

### Referenzen

Das Hauptkonzept, auf das sich Garbage-Collection-Algorithmen stützen, ist das Konzept der _Referenz_. Im Kontext der Speicherverwaltung wird gesagt, dass ein Objekt ein anderes Objekt referenziert, wenn das erstgenannte Zugang zum letzteren hat (entweder implizit oder explizit). Beispielsweise hat ein JavaScript-Objekt eine Referenz auf sein [Prototype](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) (implizite Referenz) und auf die Werte seiner Eigenschaften (explizite Referenz).

In diesem Kontext wird der Begriff "Objekt" auf etwas erweitert, das breiter ist als reguläre JavaScript-Objekte und enthält auch Funktionsumgebungen (oder die globale lexikalische Umgebung).

### Referenzzählende Garbage Collection

> [!NOTE]
> Keine moderne JavaScript-Engine verwendet mehr Referenzzählung für Garbage Collection.

Dies ist der naivste Garbage Collection Algorithmus. Dieser Algorithmus reduziert das Problem von der Bestimmung, ob ein Objekt noch benötigt wird, auf die Bestimmung, ob ein Objekt noch von anderen Objekten referenziert wird. Ein Objekt wird als "Garbage" oder sammelbar betrachtet, wenn es keine Referenzen mehr darauf gibt.

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

Es gibt eine Einschränkung im Hinblick auf zirkuläre Referenzen. Im folgenden Beispiel werden zwei Objekte mit Eigenschaften erstellt, die sich gegenseitig referenzieren, wodurch ein Zyklus entsteht. Sie gehen außer Sichtweite, nachdem der Funktionsaufruf abgeschlossen ist. Zu diesem Zeitpunkt werden sie überflüssig und ihr allozierter Speicher sollte freigegeben werden. Der Referenzzählungsalgorithmus wird sie jedoch nicht als sammelbar betrachten, da jedes der beiden Objekte mindestens eine Referenz hat, die darauf zeigt, was dazu führt, dass keines von ihnen zur Garbage Collection markiert wird. Zirkuläre Referenzen sind eine häufige Ursache für Speicherlecks.

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

Dieser Algorithmus setzt die Kenntnis einer Menge von Objekten voraus, die als _Wurzeln_ bezeichnet werden. In JavaScript ist die Wurzel das globale Objekt. Der Garbage Collector wird regelmäßig von diesen Wurzeln aus starten, alle Objekte finden, die von diesen Wurzeln referenziert werden, dann alle von diesen referenzierten Objekte finden usw. Beginnend bei den Wurzeln findet der Garbage Collector somit alle _erreichbaren_ Objekte und sammelt alle nicht erreichbaren Objekte ein.

Dieser Algorithmus stellt eine Verbesserung gegenüber dem vorherigen dar, da ein Objekt mit null Referenzen effektiv nicht erreichbar ist. Das Gegenteil gilt jedoch nicht, wie wir an zirkulären Referenzen gesehen haben.

Derzeit beinhalten alle modernen Engines einen Mark-and-Sweep-Garbage-Collector. Alle Verbesserungen, die im Bereich der JavaScript-Garbage-Collection (generational/incremental/concurrent/parallel Garbage Collection) in den letzten Jahren gemacht wurden, sind Implementierungsverbesserungen dieses Algorithmus, aber keine Verbesserungen des Garbage-Collection-Algorithmus selbst noch seiner Reduzierung der Definition, wann "ein Objekt nicht mehr benötigt wird".

Der unmittelbare Vorteil dieses Ansatzes ist, dass Zyklen kein Problem mehr darstellen. Im ersten obigen Beispiel sind nach Rückgabe des Funktionsaufrufs die beiden Objekte nicht mehr von einer Ressource referenziert, die vom globalen Objekt erreichbar ist. Folglich werden sie vom Garbage Collector als nicht erreichbar eingestuft und ihr allozierter Speicher wird freigegeben.

Jedoch bleibt die Unfähigkeit, die Garbage Collection manuell zu steuern. Es gibt Zeiten, in denen es praktisch wäre, manuell zu entscheiden, wann und welcher Speicher freigegeben wird. Um den Speicher eines Objekts freizugeben, muss es explizit nicht erreichbar gemacht werden. Es ist auch nicht möglich, programmatisch die Garbage Collection in JavaScript zu triggern – und wird wahrscheinlich nie innerhalb der Kernsprache möglich sein, obwohl Engines APIs hinter Opt-in-Flags aussetzen können.

## Konfiguration des Speicher-Modells einer Engine

JavaScript-Engines bieten typischerweise Flags an, die das Speicher-Modell freilegen. Zum Beispiel bietet Node.js zusätzliche Optionen und Werkzeuge, die die zugrunde liegenden V8-Mechanismen zur Konfiguration und Debugging von Speicherproblemen freigeben. Diese Konfiguration ist in Browsern möglicherweise nicht verfügbar, und noch weniger für Webseiten (via HTTP-Header usw.).

Die maximale Menge des verfügbaren Heap-Speichers kann mit einem Flag erhöht werden:

```bash
node --max-old-space-size=6000 index.js
```

Wir können auch den Garbage Collector für das Debugging von Speicherproblemen mit einem Flag und dem [Chrome-Debugger](https://nodejs.org/learn/getting-started/debugging) freilegen:

```bash
node --expose-gc --inspect index.js
```

## Datenstrukturen zur Unterstützung der Speicherverwaltung

Obwohl JavaScript die Garbage Collector API nicht direkt freilegt, bietet die Sprache mehrere Datenstrukturen an, die die Garbage Collection indirekt beobachten und zur Verwaltung der Speichernutzung eingesetzt werden können.

### WeakMaps und WeakSets

[`WeakMap`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) und [`WeakSet`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakSet) sind Datenstrukturen, deren APIs ihren nicht-weak Gegenstücken: [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) eng nachempfunden sind. `WeakMap` erlaubt es Ihnen, eine Sammlung von Schlüssel-Wert-Paaren zu verwalten, während `WeakSet` Ihnen erlaubt, eine Sammlung eindeutiger Werte zu verwalten, beide mit performanten Hinzufügen, Löschen und Abfragen.

`WeakMap` und `WeakSet` haben ihren Namen vom Konzept der _schwach gehaltenen_ Werte. Wenn `x` von `y` schwach gehalten wird, bedeutet das, dass Sie den Wert von `x` zwar über `y` erreichen können, der Mark-and-Sweep-Algorithmus `x` jedoch nicht als erreichbar betrachtet, wenn sonst nichts _stark an ihm festhält_. Die meisten Datenstrukturen, außer den hier besprochenen, halten die ihnen übergebenen Objekte fest, sodass Sie sie jederzeit abrufen können. Die Schlüssel von `WeakMap` und `WeakSet` können garbage-getrennt werden (bei `WeakMap`-Objekten wären die Werte dann ebenfalls für die Garbage Collection geeignet), solange nichts anderes im Programm den Schlüssel referenziert. Dies wird durch zwei Eigenschaften sichergestellt:

- `WeakMap` und `WeakSet` können nur Objekte oder Symbole speichern. Dies liegt daran, dass nur Objekte garbage-getrennt werden – primitive Werte können immer gefälscht werden (das heißt, `1 === 1` aber `{} !== {}`), wodurch sie für immer in der Sammlung bleiben. [Registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) (wie `Symbol.for("key")`) können ebenfalls gefälscht werden und sind daher nicht garbage-getrennt, aber Symbole, die mit `Symbol("key")` erstellt wurden, sind garbage-getrennt. [Bekannte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) wie `Symbol.iterator` sind in einer festen Menge vorhanden und während der gesamten Lebensdauer des Programms eindeutig, ähnlich wie intrinsische Objekte wie `Array.prototype`, sodass sie ebenfalls als Schlüssel erlaubt sind.
- `WeakMap` und `WeakSet` sind nicht iterierbar. Dies verhindert, dass Sie `Array.from(map.keys()).length` verwenden, um die Lebendigkeit von Objekten zu beobachten, oder einen beliebigen Schlüssel zu erhalten, der ansonsten für die Garbage Collection in Frage kommen sollte. (Garbage Collection sollte so unsichtbar wie möglich sein.)

In typischen Erklärungen von `WeakMap` und `WeakSet` (wie der obenstehenden) wird oft impliziert, dass der Schlüssel zuerst garbage-getrennt wird, wodurch auch der Wert zur Garbage Collection freigegeben wird. Betrachten Sie jedoch den Fall, dass der Wert den Schlüssel referenziert:

```js
const wm = new WeakMap();
const key = {};
wm.set(key, { key });
// Now `key` cannot be garbage collected,
// because the value holds a reference to the key,
// and the value is strongly held in the map!
```

Wenn `key` als tatsächliche Referenz gespeichert wird, würde dies eine zirkuläre Referenz erzeugen und sowohl den Schlüssel als auch den Wert unbrauchbar für die Garbage Collection machen, selbst wenn nichts anderes `key` referenziert – denn wenn `key` garbage-getrennt wird, bedeutet das, dass zu einem bestimmten Zeitpunkt `value.key` auf eine nicht existierende Adresse zeigen würde, was nicht zulässig ist. Um dies zu beheben, sind die Einträge von `WeakMap` und `WeakSet` keine tatsächlichen Referenzen, sondern [Ephemerons](https://dl.acm.org/doi/pdf/10.1145/263700.263733), eine Erweiterung des Mark-and-Sweep-Mechanismus. [Barros et al.](https://www.jucs.org/jucs_14_21/eliminating_cycles_in_weak/jucs_14_21_3481_3497_barros.pdf) bieten eine gute Zusammenfassung des Algorithmus (Seite 4). Um einen Abschnitt zu zitieren:

> Ephemerons sind eine Verfeinerung von schwachen Paaren, bei denen weder der Schlüssel noch der Wert als schwach oder stark klassifiziert werden können. Die Konnektivität des Schlüssels bestimmt die Konnektivität des Wertes, aber die Konnektivität des Wertes beeinflusst nicht die Konnektivität des Schlüssels. […] wenn die Garbage Collection Unterstützung für Ephemerons bietet, erfolgt sie in drei Phasen statt in zwei (Mark und Sweep).

Als grobes mentales Modell denken Sie an eine `WeakMap` als folgende Implementierung:

> [!WARNING]
> Dies ist kein Polyfill, noch ist es auch nur annähernd so, wie es in der Engine implementiert ist (die in den Garbage Collection Mechanismus eingreift).

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

Wie Sie sehen, hält das `MyWeakMap` nie tatsächlich eine Sammlung von Schlüsseln. Es fügt jedem Objekt, das eingefügt wird, einfach Metadaten hinzu. Das Objekt ist dann über Mark-and-Sweep für die Garbage Collection geeignet. Daher ist es nicht möglich, über die Schlüssel in einer `WeakMap` zu iterieren noch die `WeakMap` zu leeren (da dies ebenfalls auf das Wissen über die gesamte Schlüsselsammlung angewiesen wäre).

Für weitere Informationen zu ihren APIs, siehe den [Leitfaden zu den zugeordneten Sammlungen](/de/docs/Web/JavaScript/Guide/Keyed_collections).

### WeakRefs und FinalizationRegistry

> [!NOTE]
> `WeakRef` und `FinalizationRegistry` bieten direkten Einblick in die Garbage Collection Mechanismen. [Vermeiden Sie die Nutzung, wo möglich](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#avoid_where_possible), da die Laufzeitsemantik fast vollständig ungarantiert ist.

Alle Variablen mit einem Objekt als Wert sind Referenzen auf dieses Objekt. Solche Referenzen sind jedoch _stark_ – ihre Existenz verhindert, dass der Garbage Collector das Objekt als für die Sammlung geeignet markiert. Ein [`WeakRef`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef) ist eine _schwache Referenz_ zu einem Objekt, die es ermöglicht, dass das Objekt garbage-getrennt wird, während die Möglichkeit besteht, den Inhalt des Objekts während seiner Lebenszeit zu lesen.

Ein Anwendungsfall für `WeakRef` ist ein Cache-System, das string URLs großen Objekten zuordnet. Wir können hierfür keine `WeakMap` verwenden, da `WeakMap`-Objekte ihre _Schlüssel_ schwach gehalten, aber nicht ihre _Werte_ – wenn Sie auf einen Schlüssel zugreifen, erhalten Sie deterministisch immer den Wert (da der Zugriff auf den Schlüssel bedeutet, dass er noch lebt). Hier ist es in Ordnung, `undefined` für einen Schlüssel zu erhalten (wenn der entsprechende Wert nicht mehr lebendig ist), da wir ihn einfach neu berechnen können, aber wir wollen keine unerreichbaren Objekte im Cache behalten. In diesem Fall können wir eine normale `Map` verwenden, aber mit jedem Wert als `WeakRef` des Objekts anstelle des tatsächlichen Objektwerts.

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

[`FinalizationRegistry`](/de/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry) bietet einen noch stärkeren Mechanismus, um die Garbage Collection zu beobachten. Er ermöglicht es Ihnen, Objekte zu registrieren und benachrichtigt zu werden, wenn sie garbage-getrennt werden. Zum Beispiel, für das oben beschriebene Cache-System, selbst wenn die Blobs selbst für die Sammlung freigegeben sind, sind die `WeakRef`-Objekte, die sie enthalten, nicht – und im Laufe der Zeit kann die `Map` viele nutzlose Einträge ansammeln. Mit einem `FinalizationRegistry` kann man in diesem Fall Aufräumarbeiten durchführen.

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

Aufgrund von Leistungs- und Sicherheitsbedenken gibt es keine Garantie, wann der Callback aufgerufen wird oder ob er überhaupt aufgerufen wird. Er sollte nur für Aufräumarbeiten – und nicht kritische Aufräumarbeiten – verwendet werden. Es gibt andere Möglichkeiten für bestimmtere Ressourcenverwaltung, wie [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch), das den `finally`-Block immer ausführen wird. `WeakRef` und `FinalizationRegistry` existieren ausschließlich zur Optimierung der Speichernutzung in langlaufenden Programmen.

Für weitere Informationen über die API von [`WeakRef`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef) und [`FinalizationRegistry`](/de/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry), siehe deren Referenzseiten.
