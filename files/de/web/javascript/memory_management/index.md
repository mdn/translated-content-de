---
title: Speicherverwaltung
slug: Web/JavaScript/Memory_management
l10n:
  sourceCommit: 2c762771070a207d410a963166adf32213bc3a45
---

{{jsSidebar("Advanced")}}

Niedrigstufige Programmiersprachen wie C haben manuelle Speicherverwaltungsprimitiven wie [`malloc()`](https://pubs.opengroup.org/onlinepubs/009695399/functions/malloc.html) und [`free()`](https://en.wikipedia.org/wiki/C_dynamic_memory_allocation#Overview_of_functions). Im Gegensatz dazu weist JavaScript automatisch Speicher zu, wenn Objekte erstellt werden, und gibt diesen frei, wenn sie nicht mehr benötigt werden (_Garbage Collection_). Diese Automatisierung ist eine potenzielle Quelle der Verwirrung: Sie kann den Entwicklern den falschen Eindruck vermitteln, dass sie sich nicht um die Speicherverwaltung kümmern müssen.

## Lebenszyklus des Speichers

Unabhängig von der Programmiersprache ist der Lebenszyklus des Speichers grundsätzlich immer derselbe:

1. Den benötigten Speicher zuweisen
2. Den zugewiesenen Speicher verwenden (lesen, schreiben)
3. Den zugewiesenen Speicher freigeben, wenn er nicht mehr benötigt wird

Der zweite Teil ist in allen Programmiersprachen explizit. Der erste und letzte Teil sind in niedrigstufigen Programmiersprachen explizit, in höherstufigen Programmiersprachen wie JavaScript jedoch meist implizit.

### Speicherzuweisung in JavaScript

#### Wertinitialisierung

Um dem Programmierer die Speicherzuweisung abzunehmen, weist JavaScript automatisch Speicher zu, wenn Werte initial deklariert werden.

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
someElement.addEventListener(
  "click",
  () => {
    someElement.style.backgroundColor = "blue";
  },
  false,
);
```

#### Zuweisung durch Funktionsaufrufe

Einige Funktionsaufrufe führen zur Erstellung von Objekten.

```js
const d = new Date(); // allocates a Date object

const e = document.createElement("div"); // allocates a DOM element
```

Einige Methoden weisen neue Werte oder Objekte zu:

```js
const s = "string";
const s2 = s.substr(0, 3); // s2 is a new string
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

Die Verwendung von Werten bedeutet im Wesentlichen das Lesen und Schreiben in zugewiesenen Speicher. Dies kann durch das Lesen oder Schreiben des Wertes einer Variablen oder einer Objekteigenschaft oder sogar durch das Übergeben eines Arguments an eine Funktion erfolgen.

### Freigabe, wenn der Speicher nicht mehr benötigt wird

Die meisten Probleme mit der Speicherverwaltung treten in dieser Phase auf. Der schwierigste Aspekt in diesem Stadium ist es, festzustellen, wann der zugewiesene Speicher nicht mehr benötigt wird.

Niedrigstufige Programmiersprachen erfordern, dass der Entwickler manuell bestimmt, an welchem Punkt im Programm der zugewiesene Speicher nicht mehr benötigt wird und ihn freigeben.

Einige höherstufige Programmiersprachen, wie JavaScript, nutzen eine Form der automatischen Speicherverwaltung, bekannt als [Garbage Collection](<https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)>) (GC). Der Zweck eines Garbage Collectors besteht darin, die Speicherzuweisung zu überwachen und zu bestimmen, wann ein Block des zugewiesenen Speichers nicht mehr benötigt wird und ihn zurückzufordern. Dieser automatische Prozess ist eine Annäherung, da das generelle Problem der Bestimmung, ob ein bestimmter Speicherblock noch benötigt wird, [unentscheidbar](https://en.wikipedia.org/wiki/Decidability_%28logic%29) ist.

## Garbage Collection

Wie oben erwähnt, ist das generelle Problem des automatischen Findens von Speicher, der "nicht mehr benötigt wird", unentscheidbar. Infolgedessen implementieren Garbage Collector eine Einschränkung einer Lösung für das generelle Problem. Dieser Abschnitt erklärt die Konzepte, die notwendig sind, um die wichtigsten Garbage-Collection-Algorithmen und deren jeweilige Einschränkungen zu verstehen.

### Referenzen

Das Hauptkonzept, auf dem die Garbage-Collection-Algorithmen basieren, ist das Konzept der _Referenz_. Im Kontext der Speicherverwaltung wird gesagt, dass ein Objekt ein anderes Objekt referenziert, wenn das erste auf das zweite zugreifen kann (entweder implizit oder explizit). Beispielsweise hat ein JavaScript-Objekt eine Referenz auf sein [Prototyp](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) (implizite Referenz) und auf den Wert seiner Eigenschaften (explizite Referenz).

In diesem Kontext wird die Vorstellung eines "Objekts" auf etwas erweitert, das breiter ist als reguläre JavaScript-Objekte und auch Funktionsbereiche (oder den globalen lexikalischen Bereich) einschließt.

### Referenzzählende Garbage Collection

> [!NOTE]
> Kein moderner JavaScript-Engine verwendet mehr referenzzählende Garbage Collection.

Dies ist der naivste Garbage-Collection-Algorithmus. Dieser Algorithmus reduziert das Problem von der Bestimmung, ob ein Objekt noch benötigt wird, auf die Bestimmung, ob ein Objekt noch von anderen Objekten referenziert wird. Ein Objekt wird als "Müll" oder sammelbar betrachtet, wenn keine Referenzen mehr auf es zeigen.

Beispiel:

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

Es gibt eine Einschränkung bei zirkulären Referenzen. Im folgenden Beispiel werden zwei Objekte erstellt, deren Eigenschaften sich gegenseitig referenzieren, wodurch ein Zyklus entsteht. Sie werden aus dem Bereich verschwinden, nachdem der Funktionsaufruf abgeschlossen ist. Zu diesem Zeitpunkt werden sie nicht mehr benötigt und ihr zugewiesener Speicher sollte zurückgefordert werden. Der referenzzählende Algorithmus wird sie jedoch nicht als zurückforderbar betrachten, da jedes der beiden Objekte mindestens eine Referenz auf sie hat, was dazu führt, dass keines von ihnen zur Garbage Collection markiert wird. Zirkuläre Referenzen sind eine häufige Ursache für Speicherlecks.

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

Dieser Algorithmus reduziert die Definition von "ein Objekt wird nicht mehr benötigt" auf "ein Objekt ist unerreichbar".

Dieser Algorithmus geht von dem Wissen um eine Menge von Objekten aus, die als _Wurzeln_ bezeichnet werden. In JavaScript ist die Wurzel das globale Objekt. Periodisch startet der Garbage Collector von diesen Wurzeln, findet alle Objekte, die von diesen Wurzeln referenziert werden, dann alle Objekte, die von diesen referenziert werden, usw. Ausgehend von den Wurzeln findet der Garbage Collector somit alle _erreichbaren_ Objekte und sammelt alle nicht erreichbaren Objekte ein.

Dieser Algorithmus ist eine Verbesserung gegenüber dem vorherigen, da ein Objekt mit null Referenzen effektiv unerreichbar ist. Das Gegenteil ist nicht wahr, wie wir bei zirkulären Referenzen gesehen haben.

Derzeit liefern alle modernen Engines einen mark-and-sweep Garbage Collector. Alle Fortschritte im Bereich der Garbage Collection von JavaScript (generational/incremental/concurrent/parallel Garbage Collection) in den letzten Jahren sind Implementierungsverbesserungen dieses Algorithmus, aber keine Verbesserungen des Garbage-Collection-Algorithmus selbst oder seiner Reduzierung der Definition davon, wann "ein Objekt nicht mehr benötigt wird".

Der unmittelbare Vorteil dieses Ansatzes besteht darin, dass Zyklen kein Problem mehr sind. Im ersten obigen Beispiel sind die beiden Objekte nach der Rückkehr des Funktionsaufrufs von keiner Ressource mehr referenziert, die vom globalen Objekt aus erreichbar ist. Folglich werden sie vom Garbage Collector als unerreichbar erkannt und ihr zugewiesener Speicher wird zurückgefordert.

Die Unfähigkeit, die Garbage Collection manuell zu steuern, bleibt jedoch. Es gibt Zeiten, in denen es praktisch wäre, manuell zu entscheiden, wann und welcher Speicher freigegeben wird. Um den Speicher eines Objekts freizugeben, muss es explizit unerreichbar gemacht werden. Es ist auch nicht möglich, die Garbage Collection programmgesteuert in JavaScript auszulösen – und es wird wahrscheinlich nie innerhalb der Kernsprache möglich sein, obwohl Engines APIs hinter Opt-in-Flags bereitstellen können.

## Konfiguration des Speichermodells einer Engine

JavaScript-Engines bieten in der Regel Flags, die das Speichermodell offenlegen. Beispielsweise bietet Node.js zusätzliche Optionen und Tools, die die zugrunde liegenden V8-Mechanismen zur Lösung und Fehlersuche bei Speicherproblemen offenlegen. Diese Konfiguration ist möglicherweise in Browsern nicht verfügbar und noch weniger für Webseiten (über HTTP-Header usw.).

Die maximale Menge des verfügbaren Heap-Speichers kann mit einem Flag erhöht werden:

```bash
node --max-old-space-size=6000 index.js
```

Wir können auch den Garbage Collector für die Fehlersuche bei Speicherproblemen mit einem Flag und dem [Chrome Debugger](https://nodejs.org/en/learn/getting-started/debugging) sichtbar machen:

```bash
node --expose-gc --inspect index.js
```

## Datenstrukturen, die die Speicherverwaltung unterstützen

Obwohl JavaScript die API des Garbage Collectors nicht direkt offenlegt, bietet die Sprache mehrere Datenstrukturen, die die Garbage Collection indirekt beobachten und zur Verwaltung der Speichernutzung verwendet werden können.

### WeakMaps und WeakSets

[`WeakMap`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) und [`WeakSet`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakSet) sind Datenstrukturen, deren APIs ihren nicht-weak Gegenstücken [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) eng nachempfunden sind. `WeakMap` ermöglicht es Ihnen, eine Sammlung von Schlüssel-Wert-Paaren zu pflegen, während `WeakSet` es Ihnen ermöglicht, eine Sammlung eindeutiger Werte zu pflegen, beide mit performanter Hinzufügung, Löschung und Abfrage.

`WeakMap` und `WeakSet` haben ihren Namen vom Konzept der _schwach gehaltenen_ Werte. Wenn `x` von `y` schwach gehalten wird, bedeutet das, dass Sie zwar auf den Wert von `x` über `y` zugreifen können, der mark-and-sweep Algorithmus jedoch nicht `x` als erreichbar betrachtet, wenn nichts anderes es _stark hält_. Die meisten Datenstrukturen, außer den hier diskutierten, halten die übergebenen Objekte stark, so dass Sie sie jederzeit abrufen können. Die Schlüssel von `WeakMap` und `WeakSet` können vom Garbage Collector entsorgt werden (bei `WeakMap`-Objekten wären dann auch die Werte für die Garbage Collection berechtigt), solange sonst nichts im Programm den Schlüssel referenziert. Dies wird durch zwei Eigenschaften sichergestellt:

- `WeakMap` und `WeakSet` können nur Objekte oder Symbole speichern. Dies liegt daran, dass nur Objekte vom Garbage Collector entsorgt werden – primitive Werte können immer erstellt werden (d.h. `1 === 1`, aber `{} !== {}`), was bedeutet, dass sie für immer in der Sammlung bleiben. [Registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) (wie `Symbol.for("key")`) können ebenfalls erstellt werden und sind daher nicht garbage collectable, aber Symbole, die mit `Symbol("key")` erstellt wurden, sind garbage collectable. [Bekannte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) wie `Symbol.iterator` kommen in einem festen Satz und sind während der gesamten Laufzeit des Programms einzigartig, ähnlich wie intrinsische Objekte wie `Array.prototype`, daher sind sie auch als Schlüssel erlaubt.
- `WeakMap` und `WeakSet` sind nicht iterierbar. Dies verhindert, dass Sie `Array.from(map.keys()).length` verwenden, um die Lebendigkeit von Objekten zu beobachten oder einen beliebigen Schlüssel zu erhalten, der anderweitig für die Garbage Collection berechtigt sein sollte. (Garbage Collection sollte so unsichtbar wie möglich sein.)

In typischen Erklärungen zu `WeakMap` und `WeakSet` (wie der obigen) wird oft impliziert, dass der Schlüssel zuerst vom Garbage Collector entsorgt wird, was den Wert ebenfalls zur Garbage Collection freigibt. Betrachten Sie jedoch den Fall, dass der Wert den Schlüssel referenziert:

```js
const wm = new WeakMap();
const key = {};
wm.set(key, { key });
// Now `key` cannot be garbage collected,
// because the value holds a reference to the key,
// and the value is strongly held in the map!
```

Wenn `key` als tatsächliche Referenz gespeichert wird, würde es eine zirkuläre Referenz schaffen und sowohl den Schlüssel als auch den Wert für die Garbage Collection nicht berechtigt machen, selbst wenn nichts anderes `key` referenziert – denn wenn `key` vom Garbage Collector entsorgt wird, würde das bedeuten, dass zu einem bestimmten Zeitpunkt `value.key` auf eine nicht existierende Adresse zeigt, was nicht legal ist. Um dies zu beheben, sind die Einträge von `WeakMap` und `WeakSet` keine tatsächlichen Referenzen, sondern [Ephemerons](https://dl.acm.org/doi/pdf/10.1145/263700.263733), eine Verbesserung des mark-and-sweep Mechanismus. [Barros et al.](https://www.jucs.org/jucs_14_21/eliminating_cycles_in_weak/jucs_14_21_3481_3497_barros.pdf) bietet eine gute Zusammenfassung des Algorithmus (Seite 4). Um einen Absatz zu zitieren:

> Ephemerons sind eine Verfeinerung schwacher Paare, bei denen weder der Schlüssel noch der Wert als schwach oder stark klassifiziert werden können. Die Verbindung des Schlüssels bestimmt die Verbindung des Wertes, aber die Verbindung des Wertes beeinflusst nicht die Verbindung des Schlüssels. […] Wenn Garbage Collection Unterstützung für Ephemerons bietet, erfolgt sie in drei Phasen anstelle von zwei (markieren und bereinigen).

Als grobes mentales Modell können Sie sich eine `WeakMap` wie die folgende Implementierung vorstellen:

> [!WARNING]
> Dies ist kein Polyfill und hat auch keine Nähe zu der Art und Weise, wie es im Engine implementiert ist (dieser hängt mit dem Garbage-Collection-Mechanismus zusammen).

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

Wie Sie sehen können, hält der `MyWeakMap` tatsächlich keine Sammlung von Schlüsseln. Er fügt einfach jedem Objekt, das übergeben wird, Metadaten hinzu. Das Objekt kann dann über mark-and-sweep vom Garbage Collector entsorgt werden. Daher ist es nicht möglich, über die Schlüssel in einer `WeakMap` zu iterieren oder die `WeakMap` zu leeren (da dies ebenfalls das Wissen über die gesamte Schlüsselsammlung erfordert).

Für weitere Informationen zu ihren APIs siehe den [Leitfaden zu Schlüsselkollektionen](/de/docs/Web/JavaScript/Guide/Keyed_collections).

### WeakRefs und FinalizationRegistry

> **Hinweis:** `WeakRef` und `FinalizationRegistry` bieten direkten Einblick in den Garbage-Collection-Mechanismus. [Vermeiden Sie sie, wo es möglich ist](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#avoid_where_possible), da die Laufzeitsemantik fast vollständig ungesichert ist.

Alle Variablen, deren Wert ein Objekt ist, sind Referenzen auf dieses Objekt. Solche Referenzen sind jedoch _stark_ – ihre Existenz würde den Garbage Collector daran hindern, das Objekt als für die Sammlung berechtigt zu markieren. Eine [`WeakRef`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef) ist eine _schwache Referenz_ zu einem Objekt, die es dem Objekt ermöglicht, vom Garbage Collector entsorgt zu werden, während es dennoch möglich bleibt, den Inhalt des Objekts während seiner Lebenszeit zu lesen.

Ein Anwendungsfall für `WeakRef` ist ein Cache-System, das Zeichenfolgen-URLs großen Objekten zuordnet. Wir können hierfür keine `WeakMap` verwenden, da `WeakMap`-Objekte ihre _Schlüssel_ schwach halten, aber nicht ihre _Werte_ – wenn Sie auf einen Schlüssel zugreifen, würden Sie immer deterministisch den Wert erhalten (da der Zugriff auf den Schlüssel bedeutet, dass er noch lebt). Hier ist es okay, `undefined` für einen Schlüssel zu erhalten (wenn der entsprechende Wert nicht mehr lebt), da wir ihn einfach neu berechnen können, aber wir wollen nicht, dass unerreichbare Objekte im Cache verbleiben. In diesem Fall können wir eine normale `Map` verwenden, jedoch mit jedem Wert als `WeakRef` des Objekts anstelle des tatsächlichen Objektwerts.

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

[`FinalizationRegistry`](/de/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry) bietet einen noch stärkeren Mechanismus, um die Garbage Collection zu beobachten. Es ermöglicht Ihnen, Objekte zu registrieren und benachrichtigt zu werden, wenn sie abgeholt werden. Zum Beispiel, für das oben gezeigte Cachesystem, auch wenn die Blobs selbst für die Sammlung freigegeben sind, sind die `WeakRef`-Objekte, die sie halten, nicht – und im Laufe der Zeit kann die `Map` viele nutzlose Einträge ansammeln. Mit einem `FinalizationRegistry` kann man in diesem Fall eine Bereinigung vornehmen.

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

Aus Leistungs- und Sicherheitsgründen gibt es keine Garantie, wann der Callback aufgerufen wird oder ob er überhaupt aufgerufen wird. Er sollte nur für die Bereinigung verwendet werden – und für nicht kritische Bereinigungen. Es gibt andere Möglichkeiten für eine deterministischere Ressourcenverwaltung, wie [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch), das immer den `finally`-Block ausführt. `WeakRef` und `FinalizationRegistry` existieren ausschließlich zur Optimierung der Speichernutzung in langlaufenden Programmen.

Für weitere Informationen über die API von [`WeakRef`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef) und [`FinalizationRegistry`](/de/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry) sehen Sie sich deren Referenzseiten an.
