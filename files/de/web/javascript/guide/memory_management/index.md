---
title: Speicherverwaltung
slug: Web/JavaScript/Guide/Memory_management
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{jsSidebar("Advanced")}}

Niedrigstufige Sprachen wie C verfügen über manuelle Speicherverwaltungsprimitiven wie [`malloc()`](https://pubs.opengroup.org/onlinepubs/009695399/functions/malloc.html) und [`free()`](https://en.wikipedia.org/wiki/C_dynamic_memory_allocation#Overview_of_functions). Im Gegensatz dazu weist JavaScript automatisch Speicher zu, wenn Objekte erstellt werden, und gibt diesen frei, wenn sie nicht mehr verwendet werden (_Speicherbereinigung_). Diese Automatisierung kann potenziell Verwirrung stiften: Sie kann Entwicklern fälschlicherweise den Eindruck vermitteln, dass sie sich nicht um Speicherverwaltung kümmern müssen.

## Lebenszyklus des Speichers

Unabhängig von der Programmiersprache ist der Lebenszyklus des Speichers fast immer derselbe:

1. Den benötigten Speicher zuweisen
2. Den zugewiesenen Speicher nutzen (lesen, schreiben)
3. Den zugewiesenen Speicher freigeben, wenn er nicht mehr benötigt wird

Der zweite Teil ist in allen Sprachen explizit. Die ersten und letzten Teile sind in niedrigstufigen Sprachen explizit, aber in hochstufigen Sprachen wie JavaScript größtenteils implizit.

### Zuweisung in JavaScript

#### Wertinitialisierung

Um den Programmierer nicht mit Zuweisungen zu belasten, weist JavaScript automatisch Speicher zu, wenn Werte ursprünglich deklariert werden.

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

Einige Funktionsaufrufe führen zur Speicherzuweisung von Objekten.

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

### Nutzung von Werten

Werte zu nutzen bedeutet im Wesentlichen, im zugewiesenen Speicher zu lesen und zu schreiben. Dies kann durch das Lesen oder Schreiben des Werts einer Variablen oder einer Objekteigenschaft geschehen oder sogar durch das Übergeben eines Arguments an eine Funktion.

### Freigeben, wenn der Speicher nicht mehr benötigt wird

Die meisten Probleme mit der Speicherverwaltung treten in dieser Phase auf. Der schwierigste Aspekt dieser Phase besteht darin festzustellen, wann der zugewiesene Speicher nicht mehr benötigt wird.

Niedrigstufige Sprachen erfordern vom Entwickler die manuelle Bestimmung, zu welchem Zeitpunkt im Programm der zugewiesene Speicher nicht mehr benötigt wird, und ihn freizugeben.

Einige hochstufige Sprachen wie JavaScript verwenden eine Form der automatischen Speicherverwaltung, bekannt als [Speicherbereinigung](<https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)>) (GC). Der Zweck eines Speicherbereinigers ist es, die Speicherzuweisung zu überwachen und zu bestimmen, wann ein Block des zugewiesenen Speichers nicht mehr benötigt wird und ihn zurückzufordern. Dieser automatische Prozess ist eine Annäherung, da das allgemeine Problem der Feststellung, ob ein bestimmtes Speicherstück noch benötigt wird, [unentscheidbar](https://en.wikipedia.org/wiki/Decidability_%28logic%29) ist.

## Speicherbereinigung

Wie oben erwähnt, ist das allgemeine Problem, automatisch zu erkennen, ob Speicher "nicht mehr benötigt wird", unentscheidbar. Folglich implementieren Speicherbereiniger eine Einschränkung einer Lösung für das allgemeine Problem. In diesem Abschnitt werden die Konzepte erklärt, die zum Verständnis der wichtigsten Speicherbereinigungsalgorithmen und ihrer jeweiligen Einschränkungen erforderlich sind.

### Referenzen

Das Hauptkonzept, auf das sich die Speicherbereinigungsalgorithmen stützen, ist das Konzept der _Referenz_. Innerhalb des Kontexts der Speicherverwaltung wird gesagt, dass ein Objekt ein anderes Objekt referenziert, wenn das erste auf das zweite zugreifen kann (entweder implizit oder explizit). Zum Beispiel hat ein JavaScript-Objekt eine Referenz auf sein [Prototyp](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) (implizite Referenz) und auf seine Eigenschaftswerte (explizite Referenz).

In diesem Kontext wird der Begriff "Objekt" auf etwas breiteres als reguläre JavaScript-Objekte erweitert und umfasst auch Funktions-Scope (oder den globalen lexikalischen Scope).

### Speicherbereinigung durch Referenzzählung

> [!NOTE]
> Kein modernes JavaScript-Laufzeitsystem verwendet mehr Referenzzählung für Speicherbereinigung.

Dies ist der naivste Speicherbereinigungsalgorithmus. Dieser Algorithmus reduziert das Problem von der Feststellung, ob ein Objekt noch benötigt wird, darauf, ob auf ein Objekt noch von anderen Objekten verwiesen wird. Ein Objekt wird als "Müll" oder sammelbar bezeichnet, wenn es keine Referenzen mehr darauf gibt.

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

Es gibt eine Einschränkung bei zyklischen Referenzen. Im folgenden Beispiel werden zwei Objekte erstellt, deren Eigenschaften aufeinander verweisen und somit einen Zyklus bilden. Sie gehen außer Scope, nachdem der Funktionsaufruf abgeschlossen ist. An diesem Punkt werden sie unnötig und ihr zugewiesener Speicher sollte zurückgefordert werden. Der Referenzzählungsalgorithmus wird sie jedoch nicht als rückforderbar betrachten, da jedes der beiden Objekte mindestens eine Referenz hat, die darauf zeigt, was dazu führt, dass keins von beiden zur Speicherbereinigung markiert wird. Zyklische Referenzen sind eine häufige Ursache für Speicherlecks.

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

Dieser Algorithmus reduziert die Definition eines "nicht mehr benötigten Objekts" auf ein "unerreichbares Objekt".

Dieser Algorithmus geht von der Kenntnis einer Menge von Objekten aus, die als _Wurzeln_ bezeichnet werden. In JavaScript ist die Wurzel das globale Objekt. In regelmäßigen Abständen wird der Speicherbereiniger von diesen Wurzeln aus starten, alle Objekte finden, die von diesen Wurzeln referenziert werden, dann alle Objekte, die von diesen referenziert werden usw. Beginnend bei den Wurzeln wird der Speicherbereiniger somit alle _erreichbaren_ Objekte finden und alle nicht erreichbaren Objekte sammeln.

Dieser Algorithmus ist eine Verbesserung gegenüber dem vorherigen, da ein Objekt mit null Referenzen tatsächlich unerreichbar ist. Das Gegenteil ist nicht zutreffend, wie wir bei zyklischen Referenzen gesehen haben.

Derzeit liefern alle modernen Engines einen Mark-and-Sweep-Speicherbereiniger aus. Alle Verbesserungen im Bereich der Speicherbereinigung von JavaScript (generational/incremental/concurrent/parallel garbage collection) in den letzten Jahren sind Implementierungsverbesserungen dieses Algorithmus, jedoch keine Verbesserungen des Speicherbereinigungsalgorithmus selbst noch seiner Reduzierung der Definition, wann "ein Objekt nicht mehr benötigt wird".

Der unmittelbare Vorteil dieses Ansatzes besteht darin, dass Zyklen kein Problem mehr darstellen. Im ersten obigen Beispiel, nachdem der Funktionsaufruf zurückkehrt, werden die beiden Objekte von keiner Ressource mehr referenziert, die vom globalen Objekt aus erreichbar ist. Folglich werden sie vom Speicherbereiniger als unerreichbar erkannt und ihr zugewiesener Speicher zurückgefordert.

Allerdings bleibt die Unfähigkeit bestehen, die Speicherbereinigung manuell zu steuern. Es gibt Zeiten, in denen es hilfreich wäre, manuell zu entscheiden, wann und welcher Speicher freigegeben wird. Um den Speicher eines Objekts freizugeben, muss er explizit unerreichbar gemacht werden. Es ist auch nicht möglich, die Speicherbereinigung in JavaScript programmgesteuert auszulösen — und dies wird wahrscheinlich niemals Teil der zentralen Sprache sein, obwohl Engines möglicherweise APIs hinter Opt-in-Flags zur Verfügung stellen.

## Konfiguration des Speichermodells einer Engine

JavaScript-Engines bieten in der Regel Flags, die das Speichermodell offenlegen. Beispielsweise bietet Node.js zusätzliche Optionen und Tools, die die zugrunde liegenden V8-Mechanismen für die Konfiguration und das Debuggen von Speicherproblemen verfügbar machen. Diese Konfiguration ist möglicherweise in Browsern nicht verfügbar, und erst recht nicht für Webseiten (via HTTP-Header usw.).

Die maximale verfügbare Speichermenge kann mit einem Flag erhöht werden:

```bash
node --max-old-space-size=6000 index.js
```

Wir können auch den Speicherbereiniger für das Debuggen von Speicherproblemen mit einem Flag und dem [Chrome-Debugger](https://nodejs.org/en/learn/getting-started/debugging) verfügbar machen:

```bash
node --expose-gc --inspect index.js
```

## Datenstrukturen zur Unterstützung der Speicherverwaltung

Obwohl JavaScript die API des Speicherbereinigers nicht direkt offenlegt, bietet die Sprache mehrere Datenstrukturen, die indirekt die Speicherbereinigung beobachten und zur Verwaltung des Speicherverbrauchs verwendet werden können.

### WeakMaps und WeakSets

[`WeakMap`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) und [`WeakSet`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakSet) sind Datenstrukturen, deren APIs ihren nicht-schwachen Gegenstücken: [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) ähneln. `WeakMap` erlaubt Ihnen, eine Sammlung von Schlüssel-Wert-Paaren zu führen, während `WeakSet` Ihnen ermöglicht, eine Sammlung einzigartiger Werte zu führen, beide mit performanter Hinzufügung, Löschung und Abfrage.

`WeakMap` und `WeakSet` haben ihren Namen vom Konzept der _weakly held_ (schwach gehaltener) Werte. Wenn `x` schwach von `y` gehalten wird, bedeutet dies, dass, obwohl Sie über `y` auf den Wert von `x` zugreifen können, der Mark-and-Sweep-Algorithmus `x` nicht als erreichbar betrachten wird, wenn nichts anderes _stark_ daran hält. Die meisten Datenstrukturen, außer den hier diskutierten, halten die übergebenen Objekte stark, sodass Sie sie jederzeit abrufen können. Die Schlüssel von `WeakMap` und `WeakSet` können speicherberinget werden (bei `WeakMap`-Objekten wären dann auch die Werte zur Speicherbereinigung berechtigt), solange nichts anderes im Programm den Schlüssel referenziert. Dies wird durch zwei Merkmale sichergestellt:

- `WeakMap` und `WeakSet` können nur Objekte oder Symbole speichern. Dies liegt daran, dass nur Objekte speicherberinget werden — primitive Werte können immer geschmiedet werden (das heißt, `1 === 1` aber `{} !== {}`), wodurch sie für immer in der Sammlung bleiben. [Registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) (wie `Symbol.for("key")`) können ebenfalls geschmiedet werden und sind daher nicht speicherberingetbar, aber mit `Symbol("key")` erstellte Symbole sind speicherberingetbar. [Bekannte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) wie `Symbol.iterator` kommen in einer festen Menge vor und sind während der gesamten Lebensdauer des Programms einzigartig, ähnlich wie intrinsische Objekte wie `Array.prototype`, weshalb sie auch als Schlüssel erlaubt sind.
- `WeakMap` und `WeakSet` sind nicht iterierbar. Dies verhindert, dass Sie `Array.from(map.keys()).length` verwenden, um die Lebendigkeit von Objekten zu beobachten oder einen beliebigen Schlüssel in die sie sonst zur Speicherbereinigung berechtigt sein sollten, zu erfassen. (Speicherbereinigung sollte so unsichtbar wie möglich sein.)

In typischen Erklärungen zu `WeakMap` und `WeakSet` (wie oben) wird oft impliziert, dass der Schlüssel zuerst speicherberinget wird und damit auch der Wert zur Speicherbereinigung freigegeben wird. Betrachten Sie jedoch den Fall, dass der Wert den Schlüssel referenziert:

```js
const wm = new WeakMap();
const key = {};
wm.set(key, { key });
// Now `key` cannot be garbage collected,
// because the value holds a reference to the key,
// and the value is strongly held in the map!
```

Wenn `key` als tatsächliche Referenz gespeichert wird, würde dies eine zyklische Referenz erstellen und sowohl den Schlüssel als auch den Wert für die Speicherbereinigung ungeeignet machen, selbst wenn nichts anderes `key` referenziert — denn wenn `key` speicherberinget wird, bedeutet dies, dass zu einem bestimmten Zeitpunkt `value.key` auf eine nicht existierende Adresse zeigt, was nicht legal ist. Um dies zu beheben, sind die Einträge von `WeakMap` und `WeakSet` keine tatsächlichen Referenzen, sondern [Ephemera](https://dl.acm.org/doi/pdf/10.1145/263700.263733), eine Erweiterung des Mark-and-Sweep-Mechanismus. [Barros et al.](https://www.jucs.org/jucs_14_21/eliminating_cycles_in_weak/jucs_14_21_3481_3497_barros.pdf) bietet eine gute Zusammenfassung des Algorithmus (Seite 4). Ein Zitat aus einem Absatz:

> Ephemeron sind eine Verfeinerung schwacher Paare, bei denen weder der Schlüssel noch der Wert als schwach oder stark klassifiziert werden kann. Die Verbindung des Schlüssels bestimmt die Verbindung des Werts, aber die Verbindung des Werts hat keinen Einfluss auf die Verbindung des Schlüssels. […] wenn die Speicherbereinigung Unterstützung für Ephemeron bietet, erfolgt sie in drei Phasen anstelle von zwei (Markieren und Freigeben).

Als grobes mentales Modell denken Sie an eine `WeakMap` als die folgende Implementierung:

> [!WARNING]
> Dies ist kein Polyfill noch irgendwo in der Nähe dessen, wie es in der Engine implementiert ist (die in den Speicherbereinigungsmechanismus integriert ist).

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

Wie Sie sehen können, hält die `MyWeakMap` tatsächlich nie eine Sammlung von Schlüsseln. Sie fügt einfach jedem Objekt, das übergeben wird, Metadaten hinzu. Das Objekt kann dann über Mark-and-Sweep speicherberinget werden. Daher ist es nicht möglich, über die Schlüssel in einer `WeakMap` zu iterieren oder die `WeakMap` zu leeren (da dies ebenfalls auf das Wissen über die gesamte Schlüsselsammlung angewiesen ist).

Für weitere Informationen zu ihren APIs siehe den [Leitfaden für geschlüsselten Sammlungen](/de/docs/Web/JavaScript/Guide/Keyed_collections).

### WeakRefs und FinalizationRegistry

> [!NOTE] > `WeakRef` und `FinalizationRegistry` bieten direkte Einsicht in den Speicherbereinigungsmechanismus. [Vermeiden Sie die Verwendung dieser, wo möglich](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#avoid_where_possible), da die Laufzeitsemantik nahezu vollkommen ungarantiert ist.

Alle Variablen mit einem Objekt als Wert sind Referenzen auf dieses Objekt. Solche Referenzen sind jedoch _stark_ — ihre Existenz würde den Speicherbereiniger daran hindern, das Objekt als bereit zur Sammlung zu markieren. Ein [`WeakRef`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef) ist eine _schwache Referenz_ auf ein Objekt, die es dem Objekt ermöglicht, speicherberinget zu werden, während die Möglichkeit erhalten bleibt, den Inhalt des Objekts während seiner Lebensdauer zu lesen.

Ein Anwendungsfall für `WeakRef` ist ein Cache-System, das Zeichenfolgen-URLs auf große Objekte abbildet. Wir können hierfür keine `WeakMap` verwenden, weil `WeakMap`-Objekte ihre _Schlüssel_ schwach gehalten, aber nicht ihre _Werte_ — wenn Sie auf einen Schlüssel zugreifen, erhalten Sie immer zutreffend den Wert (da der Zugang zum Schlüssel bedeutet, dass er noch lebt). Hier sind wir damit einverstanden, `undefined` für einen Schlüssel zu erhalten (wenn der entsprechende Wert nicht mehr lebt), da wir ihn einfach neu berechnen können, aber wir wollen keine unerreichbaren Objekte im Cache behalten. In diesem Fall können wir eine normale `Map` verwenden, aber mit jedem Wert als `WeakRef` des Objekts anstelle des tatsächlichen Objektwerts.

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

[`FinalizationRegistry`](/de/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry) bietet einen noch stärkeren Mechanismus, um Speicherbereinigung zu beobachten. Es ermöglicht Ihnen, Objekte zu registrieren und benachrichtigt zu werden, wenn sie speicherberinget werden. Zum Beispiel für das Cache-System, das oben als Beispiel genannt wurde, selbst wenn die Blobs selbst für die Sammlung freigegeben sind, sind die `WeakRef`-Objekte, die sie halten, dies nicht — und im Laufe der Zeit kann die `Map` eine Menge nutzloser Einträge ansammeln. Mit `FinalizationRegistry` kann in diesem Fall eine Bereinigung durchgeführt werden.

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

Aufgrund von Leistungs- und Sicherheitsbedenken gibt es keine Garantie, wann der Callback aufgerufen wird oder ob er überhaupt aufgerufen wird. Er sollte nur zur Bereinigung verwendet werden — und nicht-kritische Bereinigung. Es gibt andere Möglichkeiten für eine deterministischere Ressourcenverwaltung, wie z.B. [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch), das den `finally`-Block immer ausführt. `WeakRef` und `FinalizationRegistry` existieren ausschließlich zur Optimierung des Speicherverbrauchs in lang laufenden Programmen.

Für weitere Informationen über die API von [`WeakRef`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef) und [`FinalizationRegistry`](/de/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry), siehe ihre Referenzseiten.
