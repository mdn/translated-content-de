---
title: Speicherverwaltung
slug: Web/JavaScript/Guide/Memory_management
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Niedrigsprachen wie C verfügen über manuelle Speicherverwaltungsprimitiven wie [`malloc()`](https://pubs.opengroup.org/onlinepubs/009695399/functions/malloc.html) und [`free()`](https://en.wikipedia.org/wiki/C_dynamic_memory_allocation#Overview_of_functions). Im Gegensatz dazu weist JavaScript Speicher automatisch zu, wenn Objekte erstellt werden, und gibt ihn frei, wenn sie nicht mehr verwendet werden (_Garbage Collection_). Diese Automatisierung kann Entwickler verwirren, da sie den falschen Eindruck erwecken kann, dass sie sich nicht um die Speicherverwaltung kümmern müssen.

## Speicherlebenszyklus

Unabhängig von der Programmiersprache ist der Speicherlebenszyklus im Wesentlichen immer derselbe:

1. Zuweisung des benötigten Speichers
2. Verwendung des zugewiesenen Speichers (lesen, schreiben)
3. Freigabe des zugewiesenen Speichers, wenn er nicht mehr benötigt wird

Der zweite Teil ist in allen Sprachen explizit. Die ersten und letzten Teile sind in Niedrigsprachen explizit, jedoch in Hochsprachen wie JavaScript meist implizit.

### Zuweisung in JavaScript

#### Wertinitialisierung

Um den Programmierer nicht mit Zuweisungen zu belasten, weist JavaScript automatisch Speicher zu, wenn Werte initial deklariert werden.

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

#### Zuweisung über Funktionsaufrufe

Einige Funktionsaufrufe führen zur Zuordnung von Objekten.

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

Werte zu verwenden bedeutet im Grunde, in zugewiesenem Speicher zu lesen und zu schreiben. Dies kann durch das Lesen oder Schreiben des Werts einer Variablen oder einer Objekteigenschaft oder sogar durch das Übergeben eines Arguments an eine Funktion erfolgen.

### Freigabe, wenn der Speicher nicht mehr benötigt wird

Die Mehrheit der Speicherverwaltungsprobleme tritt in dieser Phase auf. Der schwierigste Aspekt dieses Stadiums ist die Bestimmung, wann der zugewiesene Speicher nicht mehr benötigt wird.

Niedrige Sprachen erfordern vom Entwickler, manuell zu bestimmen, an welchem Punkt im Programm der zugewiesene Speicher nicht mehr benötigt wird, und ihn freizugeben.

Einige Hochsprachen, wie JavaScript, verwenden eine Form der automatischen Speicherverwaltung, die als [Garbage Collection](<https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)>) (GC) bekannt ist. Das Ziel eines Garbage Collectors ist es, die Speicherzuordnung zu überwachen und zu bestimmen, wann ein Block von zugewiesenem Speicher nicht mehr benötigt wird, um ihn zurückzugewinnen. Dieser automatische Prozess ist eine Annäherung, da das allgemeine Problem, festzustellen, ob ein bestimmtes Stück Speicher noch benötigt wird, [nicht entscheidbar](https://en.wikipedia.org/wiki/Decidability_%28logic%29) ist.

## Garbage Collection

Wie oben erwähnt, ist das allgemeine Problem des automatischen Findens von Speicher, der „nicht mehr benötigt wird“, nicht entscheidbar. Infolgedessen implementieren Garbage Collector eine eingeschränkte Lösung für das allgemeine Problem. In diesem Abschnitt werden die Konzepte erläutert, die zum Verständnis der wichtigsten Garbage-Collection-Algorithmen und ihrer jeweiligen Einschränkungen erforderlich sind.

### Referenzen

Das Hauptkonzept, auf das sich Garbage-Collection-Algorithmen stützen, ist das Konzept der _Referenz_. Im Kontext der Speicherverwaltung wird gesagt, dass ein Objekt ein anderes Objekt referenziert, wenn das erste auf das zweite zugreifen kann (entweder implizit oder explizit). Zum Beispiel hat ein JavaScript-Objekt eine Referenz auf seinen [Prototyp](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) (implizite Referenz) und auf die Werte seiner Eigenschaften (explizite Referenz).

In diesem Zusammenhang wird der Begriff „Objekt“ auf etwas breiteres als reguläre JavaScript-Objekte erweitert und umfasst auch Funktionsumfang (oder den globalen lexikalischen Bereich).

### Referenzzählende Garbage Collection

> [!NOTE]
> Keine moderne JavaScript-Engine verwendet mehr Referenzzählung für die Garbage Collection.

Dies ist der naivste Garbage-Collection-Algorithmus. Dieser Algorithmus reduziert das Problem, zu bestimmen, ob ein Objekt noch benötigt wird, auf die Bestimmung, ob ein Objekt noch von anderen Objekten referenziert wird. Ein Objekt wird als „Müll“ oder sammelbar bezeichnet, wenn keine Referenzen mehr darauf zeigen.

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

Es gibt eine Einschränkung bei zirkulären Referenzen. Im folgenden Beispiel werden zwei Objekte erstellt, die sich gegenseitig referenzieren und so einen Zyklus bilden. Sie fallen nach Beendigung des Funktionsaufrufs aus dem Gültigkeitsbereich. Zu diesem Zeitpunkt werden sie unnötig und ihr zugewiesener Speicher sollte zurückgefordert werden. Der Referenzzählungsalgorithmus wird sie jedoch nicht als wiedergewinnbar betrachten, da jedes der beiden Objekte mindestens eine Referenz hat, die auf sie zeigt, was dazu führt, dass keines von ihnen für die Garbage Collection markiert wird. Zirkuläre Referenzen sind eine häufige Ursache für Speicherlecks.

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

Dieser Algorithmus reduziert die Definition von „ein Objekt wird nicht mehr benötigt“ auf „ein Objekt ist nicht erreichbar“.

Dieser Algorithmus geht von einem bekannten Satz von Objekten aus, die _Wurzeln_ genannt werden. In JavaScript ist die Wurzel das globale Objekt. Der Garbage Collector beginnt regelmäßig von diesen Wurzeln, findet alle Objekte, die von diesen Wurzeln aus referenziert werden, dann alle Objekte, die von diesen referenziert werden, usw. Ausgehend von den Wurzeln findet der Garbage Collector alle _erreichbaren_ Objekte und sammelt alle nicht erreichbaren Objekte.

Dieser Algorithmus ist eine Verbesserung gegenüber dem vorherigen, da ein Objekt mit null Referenzen tatsächlich nicht erreichbar ist. Das Gegenteil gilt jedoch nicht, wie wir bei zirkulären Referenzen gesehen haben.

Derzeit bieten alle modernen Engines einen Mark-and-Sweep-Garbage-Collector an. Alle Verbesserungen im Bereich der JavaScript-Garbage-Collection (generationsbasierte/incrementale/gleichzeitige/parallele Garbage Collection) in den letzten Jahren sind Implementierungsverbesserungen dieses Algorithmus, aber keine Verbesserungen des Garbage-Collection-Algorithmus selbst noch seiner Definition, wann „ein Objekt nicht mehr benötigt wird“.

Der unmittelbare Vorteil dieses Ansatzes ist, dass Zyklen kein Problem mehr darstellen. Im ersten Beispiel oben sind nach dem Funktionsaufruf die beiden Objekte von keiner Ressource referenziert, die vom globalen Objekt erreichbar ist. Folglich werden sie vom Garbage Collector als unerreichbar erkannt und ihr zugewiesener Speicher wird zurückgefordert.

Allerdings bleibt die Unfähigkeit, die Garbage Collection manuell zu steuern. Es gibt Zeiten, in denen es praktisch wäre, manuell zu entscheiden, wann und welche Speicher freigegeben werden. Um den Speicher eines Objekts freizugeben, muss es explizit unerreichbar gemacht werden. Es ist auch nicht möglich, die Garbage Collection in JavaScript programmatisch auszulösen – und es wird wahrscheinlich niemals in der Kernsprache verfügbar sein, obwohl Engines möglicherweise APIs hinter Opt-In-Flags bereitstellen.

## Konfiguration des Speichermodells einer Engine

JavaScript-Engines bieten in der Regel Flags, die das Speichermodell freilegen. Beispielsweise bietet Node.js zusätzliche Optionen und Tools, die die zugrunde liegenden V8-Mechanismen für die Konfiguration und das Debuggen von Speicherproblemen freilegen. Diese Konfiguration ist möglicherweise nicht in Browsern verfügbar, und noch weniger für Webseiten (über HTTP-Header usw.).

Die maximale Menge des verfügbaren Heap-Speichers kann mit einem Flag erhöht werden:

```bash
node --max-old-space-size=6000 index.js
```

Wir können auch den Garbage Collector für das Debuggen von Speicherproblemen mit einem Flag und dem [Chrome Debugger](https://nodejs.org/en/learn/getting-started/debugging) freilegen:

```bash
node --expose-gc --inspect index.js
```

## Datenstrukturen zur Unterstützung der Speicherverwaltung

Obwohl JavaScript die Garbage-Collector-API nicht direkt freilegt, bietet die Sprache mehrere Datenstrukturen, die indirekt die Garbage Collection beobachten und zur Verwaltung des Speicherverbrauchs verwendet werden können.

### WeakMaps und WeakSets

[`WeakMap`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) und [`WeakSet`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakSet) sind Datenstrukturen, deren APIs ihren nicht-schwachen Gegenstücken ähneln: [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set). `WeakMap` ermöglicht Ihnen, eine Sammlung von Schlüssel-Wert-Paaren zu verwalten, während `WeakSet` Ihnen ermöglicht, eine Sammlung einzigartiger Werte zu verwalten, jeweils mit performanter Hinzufügung, Löschung und Abfrage.

`WeakMap` und `WeakSet` erhielten ihren Namen vom Konzept der _schwachen_ gehaltenen Werte. Wenn `x` von `y` schwach gehalten wird, bedeutet das, dass, obwohl Sie auf den Wert von `x` über `y` zugreifen können, der Mark-and-Sweep-Algorithmus `x` nicht als erreichbar betrachtet, wenn nichts anderes _stark_ daran festhält. Die meisten Datenstrukturen, außer den hier diskutierten, halten die Objekte, die ihnen übergeben werden, stark fest, sodass Sie sie jederzeit abrufen können. Die Schlüssel von `WeakMap` und `WeakSet` können der Garbage Collection unterzogen werden (bei `WeakMap`-Objekten würden dann auch die Werte für die Garbage Collection infrage kommen), solange im Programm nichts anderes auf den Schlüssel verweist. Dies wird durch zwei Merkmale gewährleistet:

- `WeakMap` und `WeakSet` können nur Objekte oder Symbole speichern. Dies liegt daran, dass nur Objekte der Garbage Collection unterzogen werden — primitive Werte können immer gefälscht werden (das heißt, `1 === 1`, aber `{} !== {}`), wodurch sie für immer in der Sammlung bleiben. [Registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) (wie `Symbol.for("key")`) können ebenfalls gefälscht werden und sind daher nicht der Garbage Collection unterzogen, aber Symbole, die mit `Symbol("key")` erstellt wurden, sind der Garbage Collection unterzogen. [Bekannte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) wie `Symbol.iterator` sind ebenfalls erlaubt, da sie in einem festen Satz vorkommen und während der Lebensdauer des Programms einzigartig sind, ähnlich wie intrinsische Objekte wie `Array.prototype`.
- `WeakMap` und `WeakSet` sind nicht iterierbar. Dies verhindert, dass Sie `Array.from(map.keys()).length` verwenden, um die Lebendigkeit von Objekten zu beobachten, oder einen beliebigen Schlüssel zu ergattern, der ansonsten für die Garbage Collection infrage kommen sollte. (Die Garbage Collection sollte so unsichtbar wie möglich sein.)

In typischen Erklärungen von `WeakMap` und `WeakSet` (wie der obigen) wird oft impliziert, dass der Schlüssel zuerst der Garbage Collection unterzogen wird, wodurch der Wert ebenfalls für die Garbage Collection freigegeben wird. Wenn jedoch der Fall in Betracht gezogen wird, dass der Wert den Schlüssel referenziert:

```js
const wm = new WeakMap();
const key = {};
wm.set(key, { key });
// Now `key` cannot be garbage collected,
// because the value holds a reference to the key,
// and the value is strongly held in the map!
```

Wenn `key` als tatsächliche Referenz gespeichert würde, würde es eine zyklische Referenz erzeugen und sowohl den Schlüssel als auch den Wert für die Garbage Collection unbrauchbar machen, selbst wenn nichts anderes auf den Schlüssel verweist — denn wenn `key` der Garbage Collection unterzogen wird, bedeutet das, dass zu einem bestimmten Zeitpunkt `value.key` auf eine nicht existente Adresse verweisen würde, was nicht legal ist. Um dies zu beheben, sind die Einträge von `WeakMap` und `WeakSet` keine tatsächlichen Referenzen, sondern [Ephemerons](https://dl.acm.org/doi/pdf/10.1145/263700.263733), eine Verbesserung des Mark-and-Sweep-Mechanismus. [Barros et al.](https://www.jucs.org/jucs_14_21/eliminating_cycles_in_weak/jucs_14_21_3481_3497_barros.pdf) bieten eine gute Zusammenfassung des Algorithmus (Seite 4). Um einen Absatz zu zitieren:

> Ephemerons sind eine Verfeinerung schwacher Paare, bei denen weder der Schlüssel noch der Wert als schwach oder stark klassifiziert werden können. Die Konnektivität des Schlüssels bestimmt die Konnektivität des Wertes, aber die Konnektivität des Wertes beeinflusst nicht die Konnektivität des Schlüssels. […] Wenn die Garbage Collection Unterstützung für Ephemerons bietet, erfolgt sie in drei Phasen statt in zwei (markieren und aufräumen).

Als grobes mentales Modell denken Sie an eine `WeakMap` als die folgende Implementierung:

> [!WARNING]
> Dies ist weder ein Polyfill noch steht es in irgendwie genauer Nähe zur Implementierung in der Engine (die in den Garbage-Collection-Mechanismus eingreift).

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

Wie Sie sehen können, hält `MyWeakMap` nie wirklich eine Sammlung von Schlüsseln. Es fügt einfach jedem übergebenen Objekt Metadaten hinzu. Das Objekt kann dann anhand von Mark-and-Sweep der Garbage Collection unterzogen werden. Daher ist es nicht möglich, über die Schlüssel in einer `WeakMap` zu iterieren oder die `WeakMap` vollständig zu leeren (da dies auch vom Wissen über die gesamte Schlüsselsammlung abhängt).

Weitere Informationen zu ihren APIs finden Sie im [Leitfaden zu Keyed Collections](/de/docs/Web/JavaScript/Guide/Keyed_collections).

### WeakRefs und FinalizationRegistry

> [!NOTE]
> `WeakRef` und `FinalizationRegistry` bieten direkten Einblick in den Garbage-Collection-Mechanismus. [Vermeiden Sie ihre Verwendung, wann immer möglich](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#avoid_where_possible), da die Laufzeitsemantik nahezu vollständig ungarantiert ist.

Alle Variablen mit einem Objekt als Wert sind Referenzen auf dieses Objekt. Solche Referenzen sind jedoch _stark_ — ihr Vorhandensein verhindert, dass der Garbage Collector das Objekt als sammelbar markiert. Ein [`WeakRef`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef) ist eine _schwache Referenz_ zu einem Objekt, die ermöglicht, dass das Objekt der Garbage Collection unterzogen wird, während immer noch die Fähigkeit besteht, den Inhalt des Objekts während seiner Lebenszeit zu lesen.

Ein Anwendungsfall für `WeakRef` ist ein Cache-System, das String-URLs großen Objekten zuordnet. Wir können hierfür keine `WeakMap` verwenden, da `WeakMap`-Objekte ihre _Schlüssel_ schwach halten, aber nicht ihre _Werte_ — wenn Sie auf einen Schlüssel zugreifen, erhalten Sie immer deterministisch den Wert (da der Zugriff auf den Schlüssel bedeutet, dass er noch existiert). Hier ist es in Ordnung, `undefined` für einen Schlüssel zu erhalten (wenn der entsprechende Wert nicht mehr existiert), da wir ihn einfach neu berechnen können, aber wir möchten nicht, dass nicht erreichbare Objekte im Cache bleiben. In diesem Fall können wir eine normale `Map` verwenden, aber mit jedem Wert als einem `WeakRef` des Objekts anstelle des tatsächlichen Objektwerts.

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

[`FinalizationRegistry`](/de/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry) bietet einen noch stärkeren Mechanismus, um die Garbage Collection zu beobachten. Es ermöglicht Ihnen, Objekte zu registrieren und benachrichtigt zu werden, wenn sie der Garbage Collection unterzogen werden. Zum Beispiel kann für das oben angeführte Cache-System, auch wenn die Blobs selbst für die Garbage Collection bereit sind, die `WeakRef`-Objekte, die sie halten, nicht sein — und im Laufe der Zeit kann die `Map` viele nutzlose Einträge ansammeln. Mit einer `FinalizationRegistry` können Sie in diesem Fall eine bereinigende Aktion ausführen.

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

Aufgrund von Leistungs- und Sicherheitsbedenken gibt es keine Garantie, wann der Rückruf aufgerufen wird oder ob er überhaupt aufgerufen wird. Er sollte nur für Aufräumarbeiten verwendet werden — und für nicht kritische Aufräumarbeiten. Es gibt andere Wege für eine deterministischere Ressourcenverwaltung, wie beispielsweise [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch), das den `finally`-Block immer ausführt. `WeakRef` und `FinalizationRegistry` existieren allein zur Optimierung der Speichernutzung in langfristig laufenden Programmen.

Weitere Informationen zur API von [`WeakRef`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef) und [`FinalizationRegistry`](/de/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry) finden Sie auf ihren Referenzseiten.
