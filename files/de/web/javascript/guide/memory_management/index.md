---
title: Speicherverwaltung
slug: Web/JavaScript/Guide/Memory_management
l10n:
  sourceCommit: 887d5abd234d91b020daf91838ec63d5328e1fcc
---

Niedrigstufige Sprachen wie C haben manuelle Speicherverwaltungstools wie [`malloc()`](https://pubs.opengroup.org/onlinepubs/009695399/functions/malloc.html) und [`free()`](https://en.wikipedia.org/wiki/C_dynamic_memory_allocation#Overview_of_functions). Im Gegensatz dazu weist JavaScript automatisch Speicher zu, wenn Objekte erstellt werden, und gibt diesen wieder frei, wenn sie nicht mehr verwendet werden (_Garbage Collection_). Diese Automatik kann eine potenzielle Verwirrung darstellen: Sie kann Entwicklern den falschen Eindruck vermitteln, dass sie sich um die Speicherverwaltung nicht kümmern müssen.

## Lebenszyklus des Speichers

Unabhängig von der Programmiersprache ist der Lebenszyklus des Speichers fast immer derselbe:

1. Den benötigten Speicher zuweisen
2. Den zugewiesenen Speicher verwenden (lesen, schreiben)
3. Den zugewiesenen Speicher freigeben, wenn er nicht mehr benötigt wird

Der zweite Teil ist in allen Sprachen explizit. Die ersten und letzten Teile sind in niedrigstufigen Sprachen explizit, aber in höherstufigen Sprachen wie JavaScript meist implizit.

### Zuweisung in JavaScript

#### Initialisierung von Werten

Um den Programmierer nicht mit Zuweisungen zu belästigen, weist JavaScript automatisch Speicher zu, wenn Werte ursprünglich deklariert werden.

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

#### Zuweisung durch Funktionsaufrufe

Einige Funktionsaufrufe resultieren in der Zuweisung von Objekten.

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

### Verwenden von Werten

Verwenden von Werten bedeutet im Wesentlichen das Lesen und Schreiben im zugewiesenen Speicher. Dies kann dadurch geschehen, dass man den Wert einer Variablen oder einer Objekteigenschaft liest oder schreibt, oder sogar durch das Übergeben eines Arguments an eine Funktion.

### Freigabe, wenn der Speicher nicht mehr benötigt wird

Die Mehrheit der Speicherverwaltungsprobleme tritt in dieser Phase auf. Der schwierigste Aspekt in diesem Stadium ist es, festzustellen, wann der zugewiesene Speicher nicht mehr benötigt wird.

Niedrigstufige Sprachen erfordern, dass der Entwickler manuell bestimmt, ab welchem Zeitpunkt im Programm der zugewiesene Speicher nicht mehr benötigt wird und diesen freigibt.

Einige höherstufige Sprachen wie JavaScript nutzen eine Form der automatischen Speicherverwaltung, die als [Garbage Collection](<https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)>) (GC) bekannt ist. Der Zweck eines Garbage Collectors ist es, die Speicherzuweisung zu überwachen und festzustellen, wann ein Block des zugewiesenen Speichers nicht mehr benötigt wird und ihn zurückzufordern. Dieser automatische Prozess ist eine Annäherung, da das allgemeine Problem der Bestimmung, ob ein bestimmtes Speicherelement noch benötigt wird, [unentscheidbar](https://en.wikipedia.org/wiki/Decidability_%28logic%29) ist.

## Garbage Collection

Wie oben erwähnt, ist das allgemeine Problem, automatisch zu finden, ob ein Speicher "nicht mehr benötigt wird", unentscheidbar. Folglich implementieren Garbage Collectors eine eingeschränkte Lösung des allgemeinen Problems. Dieser Abschnitt erklärt die Konzepte, die erforderlich sind, um die Haupt-Garbage-Collection-Algorithmen und ihre jeweiligen Einschränkungen zu verstehen.

### Referenzen

Das Hauptkonzept, auf dem Garbage-Collection-Algorithmen basieren, ist das Konzept der _Referenz_. Im Kontext der Speicherverwaltung sagt man, dass ein Objekt ein anderes Objekt referenziert, wenn das erste auf das zweite zugreifen kann (entweder implizit oder explizit). Beispielsweise hat ein JavaScript-Objekt eine Referenz auf seinen [Prototypen](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) (implizite Referenz) und auf seine Eigenschaftswerte (explizite Referenz).

In diesem Kontext wird der Begriff "Objekt" auf etwas erweitert, das umfassender ist als reguläre JavaScript-Objekte und auch Funktionsumgebungen (oder die globale lexikalische Umgebung) umfasst.

### Reference-counting Garbage Collection

> [!NOTE]
> Keine moderne JavaScript-Engine verwendet Referenzzählung mehr für Garbage Collection.

Dies ist der naivste Garbage-Collection-Algorithmus. Dieser Algorithmus reduziert das Problem von der Bestimmung, ob ein Objekt noch benötigt wird, zu der Bestimmung, ob ein Objekt noch von anderen Objekten referenziert wird. Ein Objekt wird als "Garbage" oder sammelbar bezeichnet, wenn es null Referenzen auf sich hat.

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

Es gibt Einschränkungen in Bezug auf zirkuläre Referenzen. Im folgenden Beispiel werden zwei Objekte erstellt, deren Eigenschaften sich gegenseitig referenzieren, wodurch ein Zyklus entsteht. Sie fallen nach dem Funktionsaufruf aus dem Gültigkeitsbereich. Zu diesem Zeitpunkt sind sie ungenutzt und ihr zugewiesener Speicher sollte zurückgefordert werden. Der Referenzzählungsalgorithmus wird sie jedoch nicht als rückforderbar betrachten, da jedes der beiden Objekte mindestens eine Referenz auf sich hat, wodurch keiner von ihnen für die Garbage Collection markiert wird. Zirkuläre Referenzen sind eine häufige Ursache für Speicherlecks.

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

### Mark-and-sweep-Algorithmus

Dieser Algorithmus reduziert die Definition von "ein Objekt wird nicht mehr benötigt" auf "ein Objekt ist unerreichbar".

Dieser Algorithmus setzt die Kenntnis eines Satzes von Objekten namens _roots_ voraus. In JavaScript ist die Wurzel das globale Objekt. Der Garbage Collector beginnt regelmäßig diese roots zu durchsuchen, findet alle Objekte, die von diesen roots referenziert werden, dann alle Objekte, die von diesen referenziert werden usw. Ausgehend von den roots wird der Garbage Collector somit alle _erreichbaren_ Objekte finden und alle nicht erreichbaren Objekte einsammeln.

Dieser Algorithmus ist eine Verbesserung gegenüber dem vorherigen, da ein Objekt mit null Referenzen effektiv unerreichbar ist. Das Gegenteil ist nicht der Fall, wie wir bei zirkulären Referenzen gesehen haben.

Derzeit verfügen alle modernen Engines über einen Mark-and-Sweep-Garbage-Collector. Alle Fortschritte im Bereich der JavaScript-Garbage-Collection (Generational/Incremental/Concurrent/Parallel Garbage Collection) in den letzten Jahren sind Verbesserungen der Implementierung dieses Algorithmus, aber keine Verbesserungen des Garbage-Collection-Algorithmus selbst oder seiner Reduktion der Definition, wann "ein Objekt nicht mehr benötigt wird".

Der unmittelbare Vorteil dieses Ansatzes besteht darin, dass Zyklen kein Problem mehr darstellen. Im obigen ersten Beispiel sind nach dem Ende des Funktionsaufrufs die beiden Objekte nicht mehr von einer Ressource referenziert, die vom globalen Objekt aus erreichbar ist. Folglich werden sie vom Garbage Collector als unerreichbar erkannt und ihr zugewiesener Speicher wird zurückgefordert.

Jedoch bleibt die Unfähigkeit, die Garbage Collection manuell zu steuern. Es gibt Zeiten, in denen es praktisch wäre, manuell zu entscheiden, wann und welcher Speicher freigegeben wird. Um den Speicher eines Objekts freizugeben, muss es explizit unerreichbar gemacht werden. Es ist auch nicht möglich, die Garbage Collection in JavaScript programmgesteuert auszulösen — und wird wahrscheinlich nie innerhalb der Kernsprache möglich sein, obwohl Engines möglicherweise APIs hinter Opt-in-Flags freigeben.

## Konfigurieren des Speichermodells einer Engine

JavaScript-Engines bieten in der Regel Flags an, die das Speichermodell sichtbar machen. Zum Beispiel bietet Node.js zusätzliche Optionen und Tools, die die zugrunde liegenden V8-Mechanismen zum Konfigurieren und Debuggen von Speicherproblemen offenlegen. Diese Konfiguration ist möglicherweise in Browsern nicht verfügbar, und noch weniger für Webseiten (über HTTP-Header usw.).

Die maximale Menge des verfügbaren Heap-Speichers kann mit einem Flag erhöht werden:

```bash
node --max-old-space-size=6000 index.js
```

Wir können auch den Garbage Collector für das Debuggen von Speicherproblemen mit einem Flag und dem [Chrome Debugger](https://nodejs.org/en/learn/getting-started/debugging) sichtbar machen:

```bash
node --expose-gc --inspect index.js
```

## Datenstrukturen zur Unterstützung der Speicherverwaltung

Obwohl JavaScript die Garbage Collector API nicht direkt exponiert, bietet die Sprache mehrere Datenstrukturen, die die Garbage Collection indirekt beobachten und zur Verwaltung der Speichernutzung verwendet werden können.

### WeakMaps und WeakSets

[`WeakMap`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) und [`WeakSet`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakSet) sind Datenstrukturen, deren APIs eng an ihre nicht-weak Gegenstücke angelehnt sind: [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set). `WeakMap` ermöglicht es, eine Sammlung von Schlüssel-Wert-Paaren zu pflegen, während `WeakSet` es ermöglicht, eine Sammlung einzelner Werte zu pflegen, beide mit performanter Hinzufügung, Löschung und Abfrage.

`WeakMap` und `WeakSet` haben ihren Namen von dem Konzept der _schwach gehaltenen_ Werte. Wenn `x` schwach von `y` gehalten wird, bedeutet dies, dass obwohl Sie über `y` auf den Wert von `x` zugreifen können, der Mark-and-Sweep-Algorithmus `x` nicht als erreichbar ansehen wird, wenn nichts anderes _stark hält_. Die meisten Datenstrukturen, mit Ausnahme der hier besprochenen, halten die übergebenen Objekte stark, sodass Sie sie jederzeit abrufen können. Die Schlüssel von `WeakMap` und `WeakSet` können dem Garbage Collector unterstellt werden (bei `WeakMap`-Objekten wären die Werte dann ebenfalls für die Garbage Collection freigegeben), solange nichts anderes im Programm den Schlüssel referenziert. Dies wird durch zwei Eigenschaften sichergestellt:

- `WeakMap` und `WeakSet` können nur Objekte oder Symbole speichern. Dies liegt daran, dass nur Objekte vom Garbage Collector berücksichtigt werden — primitive Werte können immer vervielfältigt werden (das heißt, `1 === 1`, aber `{} !== {}`), wodurch sie für immer in der Sammlung bleiben. [Registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) (wie `Symbol.for("key")`) können ebenfalls vervielfältigt werden und sind daher nicht dem Garbage Collector überlassen, aber Symbole, die mit `Symbol("key")` erstellt wurden, sind dem Garbage Collector unterstellt. [Bekannte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) wie `Symbol.iterator` kommen in einem festen Satz vor und sind über die Lebensdauer des Programms einzigartig, ähnlich wie intrinsische Objekte wie `Array.prototype`, sodass sie ebenfalls als Schlüssel zulässig sind.
- `WeakMap` und `WeakSet` sind nicht iterierbar. Dies verhindert, dass Sie `Array.from(map.keys()).length` verwenden, um die Lebendigkeit von Objekten zu beobachten oder einen beliebigen Schlüssel zu ermitteln, der ansonsten für die Garbage Collection freigegeben sein sollte. (Die Garbage Collection sollte so unsichtbar wie möglich sein.)

In typischen Erklärungen von `WeakMap` und `WeakSet` (wie der obigen) wird oft impliziert, dass der Schlüssel zuerst vom Garbage Collector eingesammelt wird, wodurch der Wert ebenfalls für die Garbage Collection freigegeben wird. Betrachten Sie jedoch den Fall, dass der Wert den Schlüssel referenziert:

```js
const wm = new WeakMap();
const key = {};
wm.set(key, { key });
// Now `key` cannot be garbage collected,
// because the value holds a reference to the key,
// and the value is strongly held in the map!
```

Wenn `key` als tatsächliche Referenz gespeichert wird, würde dies eine zirkuläre Referenz schaffen und sowohl Schlüssel als auch Wert für die Garbage Collection ineligible machen, selbst wenn nichts anderes `key` referenziert — weil wenn `key` vom Garbage Collector eingesammelt wird, würde dies bedeuten, dass zu einem bestimmten Zeitpunkt `value.key` auf eine nicht existierende Adresse zeigt, was nicht legal ist. Um dies zu beheben, sind die Einträge von `WeakMap` und `WeakSet` keine tatsächlichen Referenzen, sondern [Ephemerons](https://dl.acm.org/doi/pdf/10.1145/263700.263733), eine Verbesserung des Mark-and-Sweep-Mechanismus. [Barros et al.](https://www.jucs.org/jucs_14_21/eliminating_cycles_in_weak/jucs_14_21_3481_3497_barros.pdf) bietet eine gute Zusammenfassung des Algorithmus (Seite 4). Um einen Absatz zu zitieren:

> Effemerons sind eine Verfeinerung schwacher Paare, bei denen weder der Schlüssel noch der Wert als schwach oder stark eingestuft werden können. Die Konnektivität des Schlüssels bestimmt die Konnektivität des Wertes, aber die Konnektivität des Wertes beeinflusst nicht die Konnektivität des Schlüssels. […] Wenn die Garbage Collection Unterstützung für Effemerons bietet, erfolgt sie in drei Phasen statt in zwei (Markieren und Einsammeln).

Als grobes mentales Modell, denken Sie an eine `WeakMap` als folgende Implementierung:

> [!WARNING]
> Dies ist kein Polyfill, noch ist es irgendwo in der Nähe dessen, wie es in der Engine implementiert ist (die sich in den Garbage-Collection-Mechanismus einhakt).

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

Wie Sie sehen können, hält das `MyWeakMap` tatsächlich keine Sammlung von Schlüsseln. Es fügt einfach jedem übergebenen Objekt Metadaten hinzu. Das Objekt ist dann über Mark-and-Sweep dem Garbage Collector unterstellt. Daher ist es nicht möglich, über die Schlüssel in einer `WeakMap` zu iterieren oder die `WeakMap` zu leeren (da dies ebenfalls vom Wissen über die gesamte Schlüsselsammlung abhängt).

Für weitere Informationen zu ihren APIs siehe den [Leitfaden zu keyed collections](/de/docs/Web/JavaScript/Guide/Keyed_collections).

### WeakRefs und FinalizationRegistry

> [!NOTE]
> `WeakRef` und `FinalizationRegistry` bieten direkte Einsicht in die Garbage-Collection-Maschinerie. [Vermeiden Sie ihre Verwendung, wo möglich](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#avoid_where_possible), da die Laufzeitsemantik fast komplett ungesichert ist.

Alle Variablen mit einem Objekt als Wert sind Referenzen auf dieses Objekt. Solche Referenzen sind jedoch _stark_ — ihre Existenz würde den Garbage Collector daran hindern, das Objekt als für die Collection geeignet zu markieren. Ein [`WeakRef`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef) ist eine _schwache Referenz_ zu einem Objekt, die es dem Objekt ermöglicht, vom Garbage Collector eingesammelt zu werden, während die Fähigkeit erhalten bleibt, den Inhalt des Objekts während seiner Lebensdauer zu lesen.

Ein Anwendungsfall für `WeakRef` ist ein Cache-System, das Zeichenketten-URLs großen Objekten zuordnet. Wir können hierfür keine `WeakMap` verwenden, da `WeakMap`-Objekte ihre _Schlüssel_ schwach halten, aber nicht ihre _Werte_ — wenn Sie auf einen Schlüssel zugreifen, erhalten Sie immer deterministisch den Wert (da der Zugriff auf den Schlüssel bedeutet, dass er noch lebt). Hier sind wir okay damit, `undefined` für einen Schlüssel zu bekommen (wenn der entsprechende Wert nicht mehr vorhanden ist), da wir ihn einfach neu berechnen können, aber wir möchten nicht, dass unerreichbare Objekte im Cache bleiben. In diesem Fall können wir eine normale `Map` verwenden, jedoch mit jedem Wert als `WeakRef` des Objekts anstelle des tatsächlichen Objektwerts.

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

[`FinalizationRegistry`](/de/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry) bietet einen noch stärkeren Mechanismus zur Beobachtung der Garbage Collection. Es ermöglicht Ihnen, Objekte zu registrieren und benachrichtigt zu werden, wenn sie vom Garbage Collector eingesammelt werden. Zum Beispiel, für das oben dargestellte Cache-System, auch wenn die Blobs selbst für die Collection freigegeben sind, sind die `WeakRef`-Objekte, die sie halten, nicht — und im Laufe der Zeit kann die `Map` viele nutzlose Einträge ansammeln. Mit einer `FinalizationRegistry` kann man in diesem Fall eine Bereinigung durchführen.

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

Aufgrund von Leistungs- und Sicherheitsbedenken gibt es keine Garantie, wann der Rückruf aufgerufen wird oder ob er überhaupt aufgerufen wird. Es sollte nur zur Bereinigung verwendet werden — und nicht zur kritischen Bereinigung. Es gibt andere Möglichkeiten für eine deterministischere Ressourcenverwaltung, wie [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch), die immer den `finally`-Block ausführt. `WeakRef` und `FinalizationRegistry` existieren hauptsächlich zur Optimierung der Speichernutzung in lang laufenden Programmen.

Für weitere Informationen zur API von [`WeakRef`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef) und [`FinalizationRegistry`](/de/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry) sehen Sie sich deren Referenzseiten an.
