---
title: Speicherverwaltung
slug: Web/JavaScript/Memory_management
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{jsSidebar("Advanced")}}

Niedrigstufige Sprachen wie C verfügen über manuelle Speicherverwaltungsprimitiven wie [`malloc()`](https://pubs.opengroup.org/onlinepubs/009695399/functions/malloc.html) und [`free()`](https://en.wikipedia.org/wiki/C_dynamic_memory_allocation#Overview_of_functions). Im Gegensatz dazu weist JavaScript automatisch Speicher zu, wenn Objekte erstellt werden, und gibt ihn frei, wenn sie nicht mehr verwendet werden (_Garbage Collection_). Diese Automatik kann eine potenzielle Verwirrungsquelle sein: Sie kann Entwicklern den falschen Eindruck vermitteln, dass sie sich nicht um Speicherverwaltung kümmern müssen.

## Lebenszyklus des Speichers

Unabhängig von der Programmiersprache ist der Lebenszyklus des Speichers immer der gleiche:

1. Den benötigten Speicher zuweisen
2. Den zugewiesenen Speicher verwenden (lesen, schreiben)
3. Den zugewiesenen Speicher freigeben, wenn er nicht mehr benötigt wird

Der zweite Teil ist in allen Sprachen explizit. Die ersten und letzten Teile sind in niedrigstufigen Sprachen explizit, aber meistens implizit in höherstufigen Sprachen wie JavaScript.

### Zuweisung in JavaScript

#### Wertinitialisierung

Um den Programmierer mit Zuweisungen nicht zu belasten, wird JavaScript automatisch Speicher zuweisen, wenn Werte initial deklariert werden.

```js
const n = 123; // allocates memory for a number
const s = "azerty"; // allocates memory for a string

const o = {
  a: 1,
  b: null,
}; // allocates memory for an object and contained values

// (like object) allocates memory for the array and
// contained values
const a = [1, null, "abra"];

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

#### Zuweisung über Funktionsaufrufe

Einige Funktionsaufrufe führen zu einer Objektzuweisung.

```js
const d = new Date(); // allocates a Date object

const e = document.createElement("div"); // allocates a DOM element
```

Einige Methoden weisen neue Werte oder Objekte zu:

```js
const s = "azerty";
const s2 = s.substr(0, 3); // s2 is a new string
// Since strings are immutable values,
// JavaScript may decide to not allocate memory,
// but just store the [0, 3] range.

const a = ["ouais ouais", "nan nan"];
const a2 = ["generation", "nan nan"];
const a3 = a.concat(a2);
// new array with 4 elements being
// the concatenation of a and a2 elements.
```

### Verwendung von Werten

Die Verwendung von Werten bedeutet im Wesentlichen das Lesen und Schreiben im zugewiesenen Speicher. Dies kann durch Lesen oder Schreiben des Werts einer Variablen oder einer Objekteigenschaft oder sogar durch Übergeben eines Arguments an eine Funktion erfolgen.

### Freigabe, wenn der Speicher nicht mehr benötigt wird

Die meisten Probleme bei der Speicherverwaltung treten in dieser Phase auf. Der schwierigste Aspekt dieser Phase besteht darin zu bestimmen, wann der zugewiesene Speicher nicht mehr benötigt wird.

Niedrigstufige Sprachen erfordern vom Entwickler, manuell zu bestimmen, an welchem Punkt im Programm der zugewiesene Speicher nicht mehr benötigt wird, und ihn freizugeben.

Einige höherstufige Sprachen, wie JavaScript, verwenden eine Form von automatischer Speicherverwaltung, die als [Garbage Collection](<https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)>) (GC) bekannt ist. Der Zweck eines Garbage Collectors besteht darin, Speicherzuweisungen zu überwachen und festzustellen, wann ein Block des zugewiesenen Speichers nicht mehr benötigt wird, und ihn wiederherzustellen. Dieser automatische Prozess ist eine Annäherung, da das allgemeine Problem zu bestimmen, ob ein bestimmtes Speicherstück noch benötigt wird, [unentscheidbar](https://en.wikipedia.org/wiki/Decidability_%28logic%29) ist.

## Garbage Collection

Wie oben erwähnt, ist das allgemeine Problem, automatisch festzustellen, ob Speicher "nicht mehr benötigt wird", unentscheidbar. Folglich implementieren Garbage Collector eine Einschränkung einer Lösung des allgemeinen Problems. Dieser Abschnitt erklärt die Konzepte, die notwendig sind, um die Haupt-Garbage-Collection-Algorithmen und ihre jeweiligen Einschränkungen zu verstehen.

### Referenzen

Das Hauptkonzept, auf das sich Garbage-Collection-Algorithmen stützen, ist das Konzept der _Referenz_. Im Kontext der Speicherverwaltung wird gesagt, dass ein Objekt ein anderes Objekt referenziert, wenn ersteres Zugang zu letzterem hat (entweder implizit oder explizit). Beispielsweise hat ein JavaScript-Objekt eine Referenz auf sein [Prototyp](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) (implizite Referenz) und auf seine Eigenschaftswerte (explizite Referenz).

In diesem Kontext wird der Begriff "Objekt" zu etwas erweitert, das breiter ist als reguläre JavaScript-Objekte und umfasst auch Funktionsbereiche (oder den globalen lexikalischen Bereich).

### Referenzzählende Garbage Collection

> [!NOTE]
> Kein moderner JavaScript-Engine verwendet mehr Referenzzählung für die Garbage Collection.

Dies ist der naivste Garbage Collection Algorithmus. Dieser Algorithmus reduziert das Problem von der Bestimmung, ob ein Objekt noch benötigt wird, auf die Bestimmung, ob ein Objekt noch andere Objekte hat, die darauf referenzieren. Ein Objekt wird als "Garbage" oder sammelbar bezeichnet, wenn es null Referenzen hat, die darauf zeigen.

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

Es gibt eine Einschränkung bei zirkulären Referenzen. Im folgenden Beispiel werden zwei Objekte erstellt, die sich gegenseitig referenzieren, was einen Zyklus erzeugt. Sie fallen aus dem Gültigkeitsbereich, nachdem der Funktionsaufruf abgeschlossen ist. An diesem Punkt werden sie unnötig und ihr zugewiesener Speicher sollte zurückgefordert werden. Der Referenzzählungsalgorithmus wird sie jedoch nicht als rückgewinnbar betrachten, da jedes der beiden Objekte mindestens eine Referenz hat, die darauf zeigt, wodurch keines von ihnen zur Garbage Collection markiert wird. Zirkuläre Referenzen sind eine häufige Ursache für Speicherlecks.

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

Dieser Algorithmus setzt die Kenntnis einer Menge von Objekten voraus, die _Wurzeln_ genannt werden. In JavaScript ist die Wurzel das globale Objekt. Periodisch beginnt der Garbage Collector von diesen Wurzeln aus, findet alle Objekte, die von diesen Wurzeln referenziert werden, dann alle Objekte, die von diesen referenziert werden, usw. Vom Punkt der Wurzeln aus wird der Garbage Collector somit alle _erreichbaren_ Objekte finden und alle nicht erreichbaren Objekte einsammeln.

Dieser Algorithmus ist eine Verbesserung gegenüber dem vorherigen, da ein Objekt mit null Referenzen tatsächlich unerreichbar ist. Das Gegenteil gilt jedoch nicht, wie wir bei zirkulären Referenzen gesehen haben.

Derzeit liefern alle modernen Engines einen Mark-and-Sweep-Garbage-Collector. Alle Fortschritte in der JavaScript-Garbage-Collection (generationale/inkrementelle/konkurrierende/parallele Garbage Collection) in den letzten Jahren sind Verbesserungen bei der Implementierung dieses Algorithmus, jedoch keine Verbesserungen gegenüber dem Garbage-Collection-Algorithmus selbst oder seiner Reduzierung der Definition, wann "ein Objekt nicht mehr benötigt wird".

Der unmittelbare Vorteil dieses Ansatzes ist, dass Zyklen kein Problem mehr sind. Im obigen ersten Beispiel, nachdem der Funktionsaufruf zurückgekehrt ist, werden die beiden Objekte von keiner Ressource mehr referenziert, die vom globalen Objekt aus erreichbar ist. Folglich werden sie vom Garbage Collector als unerreichbar angesehen und ihr zugewiesener Speicher wird zurückgefordert.

Die Unfähigkeit, die Garbage Collection manuell zu steuern, bleibt jedoch bestehen. Es gibt Zeiten, in denen es praktisch wäre, manuell zu entscheiden, wann und welcher Speicher freigegeben wird. Um den Speicher eines Objekts freizugeben, muss es explizit unerreichbar gemacht werden. Es ist auch nicht möglich, die Garbage Collection in JavaScript programmgesteuert auszulösen — und wird wahrscheinlich nie im Kern der Sprache möglich sein, obwohl Engines möglicherweise APIs hinter Opt-In-Flags bereitstellen.

## Konfiguration des Speichermodells einer Engine

JavaScript-Engines bieten in der Regel Flags, die das Speichermodell freilegen. Zum Beispiel bietet Node.js zusätzliche Optionen und Tools, die die grundlegenden V8-Mechanismen zum Konfigurieren und Debuggen von Speicherproblemen freilegen. Diese Konfiguration ist möglicherweise in Browsern nicht verfügbar, und noch weniger für Webseiten (über HTTP-Header usw.).

Die maximale Menge an verfügbarem Heap-Speicher kann mit einem Flag erhöht werden:

```bash
node --max-old-space-size=6000 index.js
```

Wir können den Garbage Collector auch für das Debuggen von Speicherproblemen mit einem Flag und dem [Chrome-Debugger](https://nodejs.org/en/learn/getting-started/debugging) freilegen:

```bash
node --expose-gc --inspect index.js
```

## Datenstrukturen zur Unterstützung der Speicherverwaltung

Obwohl JavaScript die Garbage Collector-API nicht direkt offenlegt, bietet die Sprache mehrere Datenstrukturen, die die Garbage Collection indirekt beobachten und zur Verwaltung der Speichernutzung verwendet werden können.

### WeakMaps und WeakSets

[`WeakMap`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) und [`WeakSet`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakSet) sind Datenstrukturen, deren APIs eng ihre nicht-weak Gegenstücke spiegeln: [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set). `WeakMap` ermöglicht es Ihnen, eine Sammlung von Schlüssel-Wert-Paaren zu pflegen, während `WeakSet` es Ihnen ermöglicht, eine Sammlung von eindeutigen Werten zu pflegen, beide mit performanter Hinzufügung, Löschung und Abfrage.

`WeakMap` und `WeakSet` erhielten ihren Namen aus dem Konzept der _schwach gehaltenen_ Werte. Wenn `x` schwach von `y` gehalten wird, bedeutet das, dass obwohl Sie während der Lebenszeit des Objekts über `y` auf den Wert von `x` zugreifen können, der Mark-and-Sweep-Algorithmus `x` nicht als erreichbar betrachtet, wenn nichts anderes _stark_ an ihm hält. Die meisten Datenstrukturen, außer denen, die hier besprochen werden, halten stark an den übergebenen Objekten fest, um sie jederzeit abrufen zu können. Die Schlüssel von `WeakMap` und `WeakSet` können garbage-collectable sein (für `WeakMap`-Objekte würden dann auch die Werte für die Garbage Collection in Frage kommen), solange nichts anderes im Programm den Schlüssel referenziert. Dies wird durch zwei Eigenschaften sichergestellt:

- `WeakMap` und `WeakSet` können nur Objekte oder Symbole speichern. Dies liegt daran, dass nur Objekte garbage-collectable sind — primitive Werte können immer gefälscht werden (das heißt, `1 === 1`, aber `{} !== {}`), wodurch sie für immer in der Sammlung bleiben. [Registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) (wie `Symbol.for("key")`) können ebenfalls gefälscht werden und sind daher nicht garbage-collectable, aber mit `Symbol("key")` erstellte Symbole sind garbage-collectable. [Bekannte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) wie `Symbol.iterator` gehören zu einem festen Satz und sind während der gesamten Programmlaufzeit einzigartig, ähnlich wie intrinsische Objekte wie `Array.prototype`, sodass sie auch als Schlüssel verwendet werden dürfen.
- `WeakMap` und `WeakSet` sind nicht iterierbar. Dies verhindert, dass Sie `Array.from(map.keys()).length` verwenden, um die Lebendigkeit von Objekten zu beobachten, oder einen beliebigen Schlüssel zu erhalten, der sonst für eine Garbage Collection infrage kommen sollte. (Die Garbage Collection sollte so unsichtbar wie möglich sein.)

In typischen Erklärungen von `WeakMap` und `WeakSet` (wie die oben) wird oft impliziert, dass der Schlüssel zuerst garbage-collectable ist, wodurch der Wert auch für die Garbage Collection freigegeben wird. Betrachten Sie jedoch den Fall, dass der Wert den Schlüssel referenziert:

```js
const wm = new WeakMap();
const key = {};
wm.set(key, { key });
// Now `key` cannot be garbage collected,
// because the value holds a reference to the key,
// and the value is strongly held in the map!
```

Wenn `key` als tatsächliche Referenz gespeichert ist, würde ein zyklischer Verweis entstehen und sowohl der Schlüssel als auch der Wert wären nicht garbage-collectable, selbst wenn nichts anderes `key` referenziert — denn wenn `key` garbage-collected wird, bedeutet das, dass zu einem bestimmten Zeitpunkt `value.key` auf eine nicht existierende Adresse zeigen würde, was nicht legal ist. Um dies zu beheben, sind die Einträge von `WeakMap` und `WeakSet` keine tatsächlichen Referenzen, sondern [Ephemeron](https://dl.acm.org/doi/pdf/10.1145/263700.263733), eine Verbesserung des Mark-and-Sweep-Mechanismus. [Barros et al.](https://www.jucs.org/jucs_14_21/eliminating_cycles_in_weak/jucs_14_21_3481_3497_barros.pdf) bietet eine gute Zusammenfassung des Algorithmus (Seite 4). Um einen Absatz zu zitieren:

> Ephemeron sind eine Verfeinerung schwacher Paare, bei denen weder der Schlüssel noch der Wert als schwach oder stark klassifiziert werden können. Die Konnektivität des Schlüssels bestimmt die Konnektivität des Wertes, aber die Konnektivität des Wertes beeinflusst nicht die Konnektivität des Schlüssels. […] Wenn die Garbage Collection Unterstützung für Ephemeron bietet, erfolgt sie in drei Phasen anstelle von zwei (Markierung und Sammlung).

Als grobes mentales Modell, denken Sie an eine `WeakMap` als die folgende Implementierung:

> [!WARNING]
> Dies ist kein Polyfill und steht in keiner Weise der tatsächlichen Implementierung in der Engine nahe (die in den Garbage Collection-Mechanismus eingreift).

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

Wie Sie sehen können, hält die `MyWeakMap` tatsächlich niemals eine Sammlung von Schlüsseln. Sie fügt einfach Metadaten zu jedem übergebenen Objekt hinzu. Das Objekt kann dann über Mark-and-Sweep garbage-collected werden. Daher ist es nicht möglich, über die Schlüssel in einer `WeakMap` zu iterieren oder die `WeakMap` zu leeren (da dies auch auf das Wissen der gesamten Schlüsselsammlung beruht).

Weitere Informationen zu ihren APIs finden Sie im [Leitfaden für Keyed Collections](/de/docs/Web/JavaScript/Guide/Keyed_collections).

### WeakRefs und FinalizationRegistry

> **Hinweis:** `WeakRef` und `FinalizationRegistry` bieten direkte Einsicht in den Garbage Collection-Mechanismus. [Vermeiden Sie die Verwendung, wo möglich](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#avoid_where_possible), da die Laufzeitsemantik fast vollständig ungarantiert ist.

Alle Variablen mit einem Objekt als Wert sind Referenzen auf dieses Objekt. Solche Referenzen sind jedoch _stark_ — ihre Existenz würde den Garbage Collector daran hindern, das Objekt als für die Sammlung in Frage kommend zu markieren. Ein [`WeakRef`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef) ist eine _schwache Referenz_ zu einem Objekt, die es dem Objekt erlaubt, garbage-collected zu werden, während es weiterhin möglich ist, den Inhalt des Objekts während seiner Lebenszeit zu lesen.

Ein Anwendungsfall für `WeakRef` ist ein Cache-System, das String-URLs großen Objekten zuordnet. Wir können für diesen Zweck keine `WeakMap` verwenden, da `WeakMap`-Objekte ihre _Schlüssel_ schwach halten, aber nicht ihre _Werte_ — wenn Sie auf einen Schlüssel zugreifen, würden Sie immer deterministisch den Wert erhalten (da der Zugriff auf den Schlüssel bedeutet, dass er noch lebt). Hier sind wir einverstanden, `undefined` für einen Schlüssel zu erhalten (wenn der entsprechende Wert nicht mehr lebendig ist), da wir ihn einfach neu berechnen können, aber wir wollen nicht, dass unerreichbare Objekte im Cache bleiben. In diesem Fall können wir eine normale `Map` verwenden, jedoch mit jedem Wert als `WeakRef` des Objekts anstatt des tatsächlichen Objektwerts.

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

[`FinalizationRegistry`](/de/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry) bietet einen noch stärkeren Mechanismus, um die Garbage Collection zu beobachten. Es ermöglicht Ihnen, Objekte zu registrieren und benachrichtigt Sie, wenn sie garbage-collected werden. Zum Beispiel für das oben gezeigte Cache-System, selbst wenn die Blobs selbst für die Sammlung freigegeben sind, sind die `WeakRef`-Objekte, die sie halten, es nicht — und im Laufe der Zeit kann die `Map` viele nutzlose Einträge ansammeln. Die Verwendung einer `FinalizationRegistry` ermöglicht es, in diesem Fall eine Bereinigung durchzuführen.

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

Aufgrund von Leistungs- und Sicherheitsbedenken gibt es keine Garantie dafür, wann der Callback aufgerufen wird oder ob er überhaupt aufgerufen wird. Er sollte nur für Bereinigungen — und nicht kritische Bereinigungen — verwendet werden. Es gibt andere Möglichkeiten für deterministischere Ressourcenverwaltung, wie [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch), die immer den `finally`-Block ausführt. `WeakRef` und `FinalizationRegistry` existieren ausschließlich zur Optimierung der Speichernutzung in lang laufenden Programmen.

Für weitere Informationen zur API von [`WeakRef`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef) und [`FinalizationRegistry`](/de/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry) besuchen Sie deren Referenzseiten.
