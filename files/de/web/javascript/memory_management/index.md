---
title: Speicherverwaltung
slug: Web/JavaScript/Memory_management
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{jsSidebar("Advanced")}}

Niedrige Programmiersprachen wie C verfügen über manuelle Speicherverwaltungsprimitiven wie [`malloc()`](https://pubs.opengroup.org/onlinepubs/009695399/functions/malloc.html) und [`free()`](https://en.wikipedia.org/wiki/C_dynamic_memory_allocation#Overview_of_functions). Im Gegensatz dazu weist JavaScript automatisch Speicher zu, wenn Objekte erstellt werden, und gibt diesen frei, wenn sie nicht mehr verwendet werden (_Garbage Collection_). Diese Automatisierung kann Entwickler möglicherweise verwirren, da sie den falschen Eindruck erwecken kann, dass sie sich nicht um Speicherverwaltung kümmern müssen.

## Speicherlebenszyklus

Unabhängig von der Programmiersprache ist der Speicherlebenszyklus fast immer gleich:

1. Reservieren Sie den Speicher, den Sie benötigen
2. Verwenden Sie den zugewiesenen Speicher (lesen, schreiben)
3. Geben Sie den zugewiesenen Speicher frei, wenn er nicht mehr benötigt wird

Der zweite Teil ist in allen Programmiersprachen explizit. Die ersten und letzten Teile sind in niedrigen Programmiersprachen explizit, aber in höheren Programmiersprachen wie JavaScript größtenteils implizit.

### Zuweisung in JavaScript

#### Wertinitialisierung

Um den Programmierer nicht mit Speicherzuweisungen zu belästigen, weist JavaScript automatisch Speicher zu, wenn Werte initial deklariert werden.

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

Einige Funktionsaufrufe führen zur Objektzuweisung.

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

Das Verwenden von Werten bedeutet im Wesentlichen das Lesen und Schreiben im zugewiesenen Speicher. Dies kann durch das Lesen oder Schreiben des Wertes einer Variablen oder einer Objekteigenschaft oder sogar durch das Übergeben eines Arguments an eine Funktion geschehen.

### Freigabe, wenn der Speicher nicht mehr benötigt wird

Die meisten Probleme der Speicherverwaltung treten in dieser Phase auf. Der schwierigste Aspekt dieser Phase ist es festzustellen, wann der zugewiesene Speicher nicht mehr benötigt wird.

Niedrige Programmiersprachen erfordern, dass der Entwickler manuell bestimmt, an welchem Punkt im Programm der zugewiesene Speicher nicht mehr benötigt wird und ihn freigibt.

Einige höhere Programmiersprachen wie JavaScript verwenden eine Form der automatischen Speicherverwaltung, die als [Garbage Collection](<https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)>) (GC) bekannt ist. Der Zweck eines Garbage Collectors besteht darin, die Speicherzuweisung zu überwachen und festzustellen, wann ein Block des zugewiesenen Speichers nicht mehr benötigt wird, und ihn zurückzufordern. Dieser automatische Prozess ist eine Annäherung, da das allgemeine Problem, festzustellen, ob ein bestimmtes Speicherstück noch benötigt wird, [unentscheidbar](https://en.wikipedia.org/wiki/Decidability_%28logic%29) ist.

## Garbage Collection

Wie oben erwähnt, ist das allgemeine Problem, automatisch festzustellen, ob ein Speicher "nicht mehr benötigt wird", unentscheidbar. Infolgedessen implementieren Garbage Collector eine Einschränkung einer Lösung für das allgemeine Problem. In diesem Abschnitt werden die Konzepte erläutert, die erforderlich sind, um die Hauptalgorithmen der Garbage Collection und ihre jeweiligen Einschränkungen zu verstehen.

### Referenzen

Das Hauptkonzept, auf das sich Garbage Collection-Algorithmen stützen, ist das Konzept der _Referenz_. Innerhalb des Kontexts der Speicherverwaltung wird gesagt, dass ein Objekt ein anderes Objekt referenziert, wenn das erste auf das zweite zugreifen kann (entweder implizit oder explizit). Ein JavaScript-Objekt beispielsweise hat eine Referenz auf sein [Prototyp](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) (implizite Referenz) und auf seine Eigenschaftswerte (explizite Referenz).

In diesem Kontext wird der Begriff "Objekt" auf etwas erweitert, das umfassender ist als gewöhnliche JavaScript-Objekte und auch Funktions-Skripte (oder den globalen lexikalischen Scope) enthält.

### Referenzzählende Garbage Collection

> [!NOTE]
> Keine moderne JavaScript-Engine verwendet mehr Referenzzählung für die Garbage Collection.

Dies ist der naivste Algorithmus zur Garbage Collection. Dieser Algorithmus reduziert das Problem von der Bestimmung, ob ein Objekt noch benötigt wird, auf die Feststellung, ob ein Objekt noch von anderen Objekten referenziert wird. Ein Objekt wird als "Müll" oder sammelbar angesehen, wenn keine Referenzen mehr darauf zeigen.

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

Es gibt eine Einschränkung bei zirkulären Referenzen. Im folgenden Beispiel werden zwei Objekte mit Eigenschaften erstellt, die sich gegenseitig referenzieren und so einen Zyklus bilden. Sie werden nach dem Abschluss des Funktionsaufrufs aus dem Scope herausfallen. Zu diesem Zeitpunkt sind sie unnötig geworden, und ihr zugewiesener Speicher sollte zurückgefordert werden. Der Referenzzählungsalgorithmus wird sie jedoch nicht als zurückforderbar betrachten, da jedes der beiden Objekte mindestens eine Referenz auf sich hat, was dazu führt, dass keines von ihnen zur Garbage Collection markiert wird. Zirkuläre Referenzen sind eine häufige Ursache für Speicherlecks.

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

Dieser Algorithmus reduziert die Definition von "Ein Objekt wird nicht mehr benötigt" auf "Ein Objekt ist unerreichbar".

Dieser Algorithmus setzt das Wissen über eine Menge von Objekten voraus, die als _Wurzeln_ bezeichnet werden. In JavaScript ist die Wurzel das globale Objekt. Periodisch beginnt der Garbage Collector bei diesen Wurzeln, findet alle Objekte, die von diesen Wurzeln referenziert werden, dann alle Objekte, die von diesen referenziert werden, usw. Beginnend bei den Wurzeln findet der Garbage Collector so alle _erreichbaren_ Objekte und sammelt alle nicht erreichbaren Objekte ein.

Dieser Algorithmus ist eine Verbesserung gegenüber dem vorherigen, da ein Objekt, das über keine Referenzen verfügt, tatsächlich unerreichbar ist. Das Gegenteil gilt nicht, wie wir bei zirkulären Referenzen gesehen haben.

Derzeit liefern alle modernen Engines einen Mark-and-Sweep-Garbage-Collector. Alle Verbesserungen, die im Bereich der Garbage Collection von JavaScript (generationale/incrementale/konkurrierende/parallele Garbage Collection) in den letzten Jahren gemacht wurden, sind Implementierungsverbesserungen dieses Algorithmus, jedoch keine Verbesserungen des Garbage Collection-Algorithmus selbst oder seiner Reduktion der Definition, wann "ein Objekt nicht mehr benötigt wird".

Der unmittelbare Vorteil dieses Ansatzes ist, dass Zyklen kein Problem mehr darstellen. Im obigen ersten Beispiel werden die beiden Objekte, nachdem der Funktionsaufruf beendet ist, von keiner Ressource mehr referenziert, die vom globalen Objekt erreichbar ist. Folglich werden sie vom Garbage Collector als unerreichbar eingestuft und ihr zugewiesener Speicher wird zurückgefordert.

Die Unmöglichkeit, die Garbage Collection manuell zu steuern, bleibt jedoch bestehen. Es gibt Zeiten, in denen es praktisch wäre, manuell zu entscheiden, wann und welcher Speicher freigegeben werden soll. Um den Speicher eines Objekts freizugeben, muss er explizit unerreichbar gemacht werden. Es ist auch nicht möglich, die Garbage Collection in JavaScript programmatisch auszulösen – und es wird wahrscheinlich nie im Kern der Sprache enthalten sein, obwohl Engines möglicherweise APIs hinter Opt-in-Flags bereitstellen.

## Konfiguration des Speichermodells einer Engine

JavaScript-Engines bieten typischerweise Flags, die das Speichermodell offenlegen. Beispielsweise bietet Node.js zusätzliche Optionen und Tools, die die zugrunde liegenden V8-Mechanismen zur Konfiguration und Fehlerbehebung bei Speicherproblemen offenlegen. Diese Konfiguration ist möglicherweise in Browsern nicht verfügbar und noch weniger für Webseiten (über HTTP-Header usw.).

Die maximale Menge des verfügbaren Heap-Speichers kann mit einem Flag erhöht werden:

```bash
node --max-old-space-size=6000 index.js
```

Wir können auch den Garbage Collector für Debuggingspeicherprobleme mithilfe eines Flags und des [Chrome-Debuggers](https://nodejs.org/en/learn/getting-started/debugging) offenlegen:

```bash
node --expose-gc --inspect index.js
```

## Datenstrukturen zur Unterstützung der Speicherverwaltung

Obwohl JavaScript die Garbage Collector-API nicht direkt offenlegt, bietet die Sprache mehrere Datenstrukturen, die die Garbage Collection indirekt beobachten und zur Verwaltung der Speichernutzung verwendet werden können.

### WeakMaps und WeakSets

[`WeakMap`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) und [`WeakSet`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakSet) sind Datenstrukturen, deren APIs ihre nicht-weak Gegenstücke widerspiegeln: [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set). `WeakMap` ermöglicht es Ihnen, eine Sammlung von Schlüssel-Wert-Paaren zu verwalten, während `WeakSet` eine Sammlung von einzigartigen Werten verwalten kann, beide mit leistungsfähigen Hinzufügen, Löschen und Abfragen.

`WeakMap` und `WeakSet` erhielten ihren Namen vom Konzept der _schwach gehaltener_ Werte. Wenn `x` schwach von `y` gehalten wird, bedeutet dies, dass Sie zwar über `y` auf den Wert von `x` zugreifen können, der Mark-and-Sweep-Algorithmus jedoch `x` nicht als erreichbar betrachtet, wenn nichts anderes _stark hält_ zu ihm. Die meisten Datenstrukturen, mit Ausnahme der hier besprochenen, halten die übergebenen Objekte stark fest, damit Sie jederzeit auf sie zugreifen können. Die Schlüssel von `WeakMap` und `WeakSet` können Garbage-Collected werden (für `WeakMap`-Objekte würden die Werte dann ebenfalls zur Garbage Collection berechtigt sein), solange nichts anderes im Programm den Schlüssel referenziert. Dies wird durch zwei Merkmale sichergestellt:

- `WeakMap` und `WeakSet` können nur Objekte oder Symbole speichern. Dies liegt daran, dass nur Objekte Garbage-Collected werden — primitive Werte können immer erzeugt werden (das heißt, `1 === 1`, aber `{}` !== `{}`), was dazu führt, dass sie für immer in der Sammlung verbleiben. [Registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) (wie `Symbol.for("key")`) können auch erstellt werden und sind daher nicht Garbage-Collectable, aber Symbole, die mit `Symbol("key")` erstellt wurden, sind Garbage-Collectable. [Bekannte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) wie `Symbol.iterator` sind eine feste Menge und einzigartig während der gesamten Laufzeit des Programms, ähnlich wie intrinsische Objekte wie `Array.prototype`, daher sind sie ebenfalls als Schlüssel zulässig.
- `WeakMap` und `WeakSet` sind nicht iterierbar. Dies verhindert, dass Sie `Array.from(map.keys()).length` verwenden, um die Lebendigkeit von Objekten zu beobachten oder einen beliebigen Schlüssel zu erhalten, der andernfalls für die Garbage Collection berechtigt sein sollte. (Garbage Collection sollte so unsichtbar wie möglich sein.)

In typischen Erklärungen von `WeakMap` und `WeakSet` (wie der oben genannten) wird oft impliziert, dass der Schlüssel zuerst Garbage-Collected wird und den Wert für die Garbage Collection freigibt. Betrachten Sie jedoch den Fall, dass der Wert den Schlüssel referenziert:

```js
const wm = new WeakMap();
const key = {};
wm.set(key, { key });
// Now `key` cannot be garbage collected,
// because the value holds a reference to the key,
// and the value is strongly held in the map!
```

Wenn `key` als tatsächliche Referenz gespeichert wird, würde dies eine zyklische Referenz erzeugen und sowohl den Schlüssel als auch den Wert für die Garbage Collection ungeeignet machen, selbst wenn nichts anderes den Schlüssel referenziert — denn wenn `key` Garbage-Collected wird, bedeutet das, dass zu einem bestimmten Zeitpunkt `value.key` auf eine nicht existierende Adresse zeigen würde, was nicht legal ist. Um dies zu beheben, sind die Einträge von `WeakMap` und `WeakSet` keine tatsächlichen Referenzen, sondern [Ephemerons](https://dl.acm.org/doi/pdf/10.1145/263700.263733), eine Verbesserung des Mark-and-Sweep-Mechanismus. [Barros et al.](https://www.jucs.org/jucs_14_21/eliminating_cycles_in_weak/jucs_14_21_3481_3497_barros.pdf) bietet eine gute Zusammenfassung des Algorithmus (Seite 4). Um einen Absatz zu zitieren:

> Ephemerons sind eine Verfeinerung schwacher Paare, bei denen weder der Schlüssel noch der Wert als schwach oder stark eingeordnet werden kann. Die Konnektivität des Schlüssels bestimmt die Konnektivität des Werts, aber die Konnektivität des Werts beeinflusst nicht die Konnektivität des Schlüssels. […] wenn die Garbage Collection Unterstützung für Ephemerons bietet, erfolgt sie in drei Phasen statt in zwei (Markieren und Löschen).

Als grobes mentales Modell denken Sie an eine `WeakMap` als die folgende Implementierung:

> [!WARNING]
> Dies ist weder ein Polyfill noch in irgendeiner Weise so, wie es in der Engine implementiert ist (die in den Garbage-Collection-Mechanismus eingreift).

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

Wie Sie sehen können, hält `MyWeakMap` tatsächlich nie eine Sammlung von Schlüsseln. Es fügt jedem übergebenen Objekt einfach Metadaten hinzu. Das Objekt kann dann durch Mark-and-Sweep Garbage-Collected werden. Daher ist es nicht möglich, über die Schlüssel in einer `WeakMap` zu iterieren oder die `WeakMap` zu leeren (da dies auch das Wissen über die gesamte Schlüsselsammlung erfordert).

Für weitere Informationen zu ihren APIs siehe den [Keyed Collections](/de/docs/Web/JavaScript/Guide/Keyed_collections) Leitfaden.

### WeakRefs und FinalizationRegistry

> **Note:** `WeakRef` und `FinalizationRegistry` bieten direkte Einsicht in den Garbage-Collection-Mechanismus. [Vermeiden Sie deren Verwendung, wenn möglich](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#avoid_where_possible), da die Laufzeitsemantik fast vollständig ungarantiert ist.

Alle Variablen mit einem Objekt als Wert sind Referenzen zu diesem Objekt. Solche Referenzen sind jedoch _stark_ — ihre Existenz würde den Garbage Collector daran hindern, das Objekt als zur Sammlung berechtigt zu markieren. Ein [`WeakRef`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef) ist eine _schwache Referenz_ zu einem Objekt, die es dem Objekt ermöglicht, Garbage-Collected zu werden, während sie die Möglichkeit behält, den Inhalt des Objekts während seiner Lebensdauer zu lesen.

Ein Anwendungsbeispiel für `WeakRef` ist ein Cachesystem, das Zeichenfolgen-URLs großen Objekten zuordnet. Wir können hierfür keine `WeakMap` verwenden, da `WeakMap`-Objekte ihre _Schlüssel_ schwach halten, aber nicht ihre _Werte_ — wenn Sie auf einen Schlüssel zugreifen, erhalten Sie immer deterministisch den Wert (da der Zugriff auf den Schlüssel bedeutet, dass er noch lebt). Hier sind wir damit einverstanden, `undefined` für einen Schlüssel zu erhalten (wenn der entsprechende Wert nicht mehr lebt), da wir ihn einfach neu berechnen können, aber wir möchten nicht, dass unerreichbare Objekte im Cache verbleiben. In diesem Fall können wir eine normale `Map` verwenden, aber mit jedem Wert, der ein `WeakRef` des Objekts ist, anstelle des tatsächlichen Objektwerts.

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

[`FinalizationRegistry`](/de/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry) bietet einen noch stärkeren Mechanismus zur Beobachtung der Garbage Collection. Es ermöglicht Ihnen, Objekte zu registrieren und benachrichtigt zu werden, wenn sie Garbage-Collected werden. Zum Beispiel, selbst wenn die Blobs im oben genannten Cachesystem zur Sammlung freigegeben sind, sind die `WeakRef`-Objekte, die sie halten, es nicht — und im Laufe der Zeit kann die `Map` viele nutzlose Einträge anhäufen. Mit einer `FinalizationRegistry` kann man in diesem Fall eine Bereinigung vornehmen.

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

Aufgrund von Leistungs- und Sicherheitsbedenken gibt es keine Garantie dafür, wann der Rückruf aufgerufen wird oder ob er überhaupt aufgerufen wird. Er sollte nur zur Bereinigung verwendet werden — und nicht kritische Bereinigungen. Es gibt andere Möglichkeiten für deterministischere Ressourcenverwaltung, wie [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch), das immer den `finally`-Block ausführt. `WeakRef` und `FinalizationRegistry` existieren ausschließlich zur Optimierung der Speichernutzung in langlaufenden Programmen.

Für weitere Informationen zur API von [`WeakRef`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef) und [`FinalizationRegistry`](/de/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry) siehe deren Referenzseiten.
