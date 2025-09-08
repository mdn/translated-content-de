---
title: Speicherverwaltung
slug: Web/JavaScript/Guide/Memory_management
l10n:
  sourceCommit: 57b594763d8e34b8346ee7ea206bfc2e59238fb1
---

Low-Level-Sprachen wie C besitzen manuelle Speicherverwaltungsprimitiven wie [`malloc()`](https://pubs.opengroup.org/onlinepubs/009695399/functions/malloc.html) und [`free()`](https://en.wikipedia.org/wiki/C_dynamic_memory_allocation#Overview_of_functions). Im Gegensatz dazu weist JavaScript automatisch Speicher zu, wenn Objekte erstellt werden, und gibt ihn frei, wenn sie nicht mehr verwendet werden (_Garbage Collection_). Diese Automatik kann eine potenzielle Quelle von Verwirrung sein: Sie kann Entwickler in den falschen Glauben versetzen, dass sie sich um Speicherverwaltung nicht kümmern müssen.

## Speicherkreislauf

Unabhängig von der Programmiersprache ist der Speicherkreislauf fast immer gleich:

1. Allokieren Sie den Speicher, den Sie benötigen.
2. Verwenden Sie den allokierten Speicher (lesen, schreiben).
3. Geben Sie den allokierten Speicher frei, wenn er nicht mehr benötigt wird.

Der zweite Teil ist in allen Sprachen explizit. Die ersten und letzten Teile sind in Low-Level-Sprachen explizit, aber in High-Level-Sprachen wie JavaScript meist implizit.

### Allokation in JavaScript

#### Wertinitialisierung

Um den Programmierer nicht mit Allokationen zu belästigen, allokiert JavaScript automatisch Speicher, wenn Werte initial deklariert werden.

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

#### Allokation über Funktionsaufrufe

Einige Funktionsaufrufe führen zur Allokation von Objekten.

```js
const d = new Date(); // allocates a Date object

const e = document.createElement("div"); // allocates a DOM element
```

Einige Methoden allokieren neue Werte oder Objekte:

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

Das Verwenden von Werten bedeutet im Grunde, in allokiertem Speicher zu lesen und zu schreiben. Dies kann durch Lesen oder Schreiben des Werts einer Variablen oder einer Objekteigenschaft oder auch durch Übergeben eines Arguments an eine Funktion erfolgen.

### Freigeben, wenn der Speicher nicht mehr benötigt wird

Die meisten Probleme bei der Speicherverwaltung treten in dieser Phase auf. Der schwierigste Aspekt dieser Phase besteht darin zu bestimmen, wann der allokierte Speicher nicht mehr benötigt wird.

Low-Level-Sprachen erfordern, dass der Entwickler manuell bestimmt, zu welchem Zeitpunkt im Programm der allokierte Speicher nicht mehr benötigt wird und ihn freigibt.

Einige High-Level-Sprachen, wie JavaScript, nutzen eine Form der automatischen Speicherverwaltung, die als [Garbage Collection](<https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)>) (GC) bekannt ist. Der Zweck eines Garbage Collectors besteht darin, die Speicherallokation zu überwachen und zu bestimmen, wann ein Block des allokierten Speichers nicht mehr benötigt wird und ihn zurückzufordern. Dieser automatische Prozess ist eine Näherung, da das allgemeine Problem, zu bestimmen, ob ein bestimmter Speicherblock noch benötigt wird, [unentscheidbar](https://en.wikipedia.org/wiki/Decidability_%28logic%29) ist.

## Garbage Collection

Wie oben angegeben, ist das allgemeine Problem, automatisch herauszufinden, ob ein Speicherbereich "nicht mehr benötigt wird", unentscheidbar. Folglich implementieren Garbage Collector eine Einschränkung einer Lösung für das allgemeine Problem. Dieser Abschnitt erklärt die Konzepte, die notwendig sind, um die Haupt-Garbage-Collection-Algorithmen und deren jeweilige Einschränkungen zu verstehen.

### Referenzen

Das Hauptkonzept, auf das sich Garbage Collection-Algorithmen stützen, ist das Konzept der _Referenz_. Im Kontext der Speicherverwaltung wird gesagt, dass ein Objekt ein anderes Objekt referenziert, wenn es Zugriff auf das letztere hat (entweder implizit oder explizit). Zum Beispiel hat ein JavaScript-Objekt eine Referenz auf sein [Prototyp](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) (implizite Referenz) und auf die Werte seiner Eigenschaften (explizite Referenz).

In diesem Kontext wird der Begriff "Objekt" auf etwas erweitert, das über reguläre JavaScript-Objekte hinausgeht und auch Funktionsbereiche (oder den globalen lexikalischen Bereich) umfasst.

### Referenzzählung bei der Garbage Collection

> [!NOTE]
> Keine moderne JavaScript-Engine verwendet mehr Referenzzählung für die Garbage Collection.

Dies ist der naivste Garbage Collection-Algorithmus. Dieser Algorithmus reduziert das Problem von der Bestimmung, ob ein Objekt noch benötigt wird, auf die Bestimmung, ob ein Objekt noch von anderen Objekten referenziert wird. Ein Objekt wird als "Müll" oder sammelbar bezeichnet, wenn keine Referenzen darauf zeigen.

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

Es gibt eine Einschränkung, wenn es um zirkuläre Referenzen geht. Im folgenden Beispiel werden zwei Objekte mit Eigenschaften erstellt, die sich gegenseitig referenzieren, wodurch ein Zyklus entsteht. Sie werden außer Reichweite geraten, nachdem der Funktionsaufruf abgeschlossen ist. Zu diesem Zeitpunkt werden sie nicht mehr benötigt, und ihr allokierter Speicher sollte zurückgefordert werden. Der Referenzzählungsalgorithmus wird sie jedoch nicht als zurückforderbar betrachten, da jedes der beiden Objekte mindestens eine Referenz hat, die auf sie zeigt, wodurch keines von ihnen für die Garbage Collection markiert wird. Zirkuläre Referenzen sind eine häufige Ursache für Speicherlecks.

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

Dieser Algorithmus geht von der Kenntnis einer Menge von Objekten aus, die _Wurzeln_ genannt werden. In JavaScript ist die Wurzel das globale Objekt. Der Garbage Collector wird periodisch von diesen Wurzeln aus starten, alle Objekte finden, die von diesen Wurzeln referenziert werden, dann alle Objekte, die von diesen referenziert werden usw. Ausgehend von den Wurzeln wird der Garbage Collector somit alle _erreichbaren_ Objekte finden und alle nicht erreichbaren Objekte sammeln.

Dieser Algorithmus ist eine Verbesserung gegenüber dem vorherigen, da ein Objekt mit null Referenzen effektiv unerreichbar ist. Das Gegenteil gilt nicht, wie wir bei zirkulären Referenzen gesehen haben.

Derzeit liefern alle modernen Engines einen Mark-and-Sweep-Garbage-Collector. Alle Verbesserungen im Bereich der JavaScript-Garbage-Collection (generationale/inkrementelle/konkurrierende/parallele Garbage Collection) in den letzten Jahren sind Implementierungsverbesserungen dieses Algorithmus, aber keine Verbesserungen des Garbage-Collection-Algorithmus selbst noch seiner Reduzierung der Definition von "ein Objekt wird nicht mehr benötigt".

Der unmittelbare Vorteil dieses Ansatzes besteht darin, dass Zyklen kein Problem mehr darstellen. Im ersten Beispiel oben sind nach dem Rückkehr des Funktionsaufrufs die beiden Objekte nicht mehr von einer Ressource referenziert, die vom globalen Objekt aus erreichbar ist. Folglich werden sie vom Garbage Collector als unerreichbar erkannt und ihr allokierter Speicher wird zurückgefordert.

Allerdings bleibt die Unfähigkeit, die Garbage Collection manuell zu steuern. Es gibt Zeiten, in denen es bequem wäre, manuell zu entscheiden, wann und welcher Speicher freigegeben wird. Um den Speicher eines Objekts freizugeben, muss es explizit unerreichbar gemacht werden. Es ist auch nicht möglich, in JavaScript programmatisch die Garbage Collection auszulösen – und wird es wahrscheinlich nie in der Kernsprache geben, obwohl Engines APIs hinter Opt-in-Flags bereitstellen können.

## Konfigurieren des Speicher-Modells einer Engine

JavaScript-Engines bieten in der Regel Flags an, die das Speicher-Modell exponieren. Zum Beispiel bietet Node.js zusätzliche Optionen und Werkzeuge, die die zugrunde liegenden V8-Mechanismen zur Konfiguration und Debugging von Speicherproblemen exponieren. Diese Konfiguration ist möglicherweise in Browsern nicht verfügbar, und noch weniger für Webseiten (über HTTP-Header etc.).

Die maximale verfügbare Menge an Heapspeicher kann mit einem Flag erhöht werden:

```bash
node --max-old-space-size=6000 index.js
```

Wir können auch den Garbage Collector für das Debuggen von Speicherproblemen exponieren, indem wir ein Flag und den [Chrome Debugger](https://nodejs.org/en/learn/getting-started/debugging) verwenden:

```bash
node --expose-gc --inspect index.js
```

## Datenstrukturen zur Unterstützung der Speicherverwaltung

Obwohl JavaScript die Garbage Collector-API nicht direkt exponiert, bietet die Sprache mehrere Datenstrukturen, die indirekt die Garbage Collection beobachten und zur Verwaltung der Speichernutzung verwendet werden können.

### WeakMaps und WeakSets

[`WeakMap`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) und [`WeakSet`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakSet) sind Datenstrukturen, deren APIs ihre nicht-schwachen Gegenstücke: [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) eng widerspiegeln. `WeakMap` ermöglicht es Ihnen, eine Sammlung von Schlüssel-Wert-Paaren zu pflegen, während `WeakSet` es ermöglicht, eine Sammlung von einzigartigen Werten zu pflegen, beide mit leistungsstarker Hinzufügung, Löschung und Abfrage.

`WeakMap` und `WeakSet` haben ihren Namen vom Konzept der _schwach gehaltenen_ Werte. Wenn `x` schwach von `y` gehalten wird, bedeutet dies, dass Sie zwar über `y` auf den Wert von `x` zugreifen können, der Mark-and-Sweep-Algorithmus `x` jedoch nicht als erreichbar betrachtet, wenn nichts anderes _stark hält_ zu ihm. Die meisten Datenstrukturen, außer den hier diskutierten, halten die übergebenen Objekte stark, sodass Sie sie jederzeit abrufen können. Die Schlüssel von `WeakMap` und `WeakSet` können garbage-gesammelt werden (bei `WeakMap`-Objekten würden dann auch die Werte zur Garbage Collection bereitstehen), solange nichts anderes im Programm auf den Schlüssel zugreift. Dies wird durch zwei Eigenschaften sichergestellt:

- `WeakMap` und `WeakSet` können nur Objekte oder Symbole speichern. Dies liegt daran, dass nur Objekte garbage-gesammelt werden – primitive Werte können immer gefälscht werden (das heißt, `1 === 1`, aber `{} !== {}`), wodurch sie für immer in der Sammlung verbleiben. [Registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) (wie `Symbol.for("key")`) können ebenfalls gefälscht werden und sind daher nicht garbage-sammelbar, aber mit `Symbol("key")` erstellte Symbole sind garbage-sammelbar. [Bekannte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) wie `Symbol.iterator` kommen in einem festen Satz und sind während der gesamten Lebensdauer des Programms einzigartig, ähnlich wie intrinsische Objekte wie `Array.prototype`, sodass sie ebenfalls als Schlüssel erlaubt sind.
- `WeakMap` und `WeakSet` sind nicht iterierbar. Dies verhindert, dass Sie `Array.from(map.keys()).length` verwenden, um die Lebendigkeit von Objekten zu beobachten, oder einen beliebigen Schlüssel zu erlangen, der andernfalls für die Garbage Collection in Frage käme. (Garbage Collection sollte so unsichtbar wie möglich sein.)

In typischen Erklärungen von `WeakMap` und `WeakSet` (wie der obigen) wird oft impliziert, dass der Schlüssel zuerst garbage-gesammelt wird und damit auch den Wert für die Garbage Collection freigibt. Betrachten Sie jedoch den Fall, dass der Wert den Schlüssel referenziert:

```js
const wm = new WeakMap();
const key = {};
wm.set(key, { key });
// Now `key` cannot be garbage collected,
// because the value holds a reference to the key,
// and the value is strongly held in the map!
```

Wenn `key` als tatsächliche Referenz gespeichert wird, würde es eine zirkuläre Referenz erzeugen und sowohl der Schlüssel als auch der Wert wären nicht für die Garbage Collection in Frage kommend, selbst wenn nichts anderes den `key` referenziert – weil wenn `key` garbage-gesammelt wird, bedeutet das, dass zu einem bestimmten Zeitpunkt `value.key` auf eine nicht vorhandene Adresse zeigt, was nicht legal ist. Um dies zu beheben, sind die Einträge von `WeakMap` und `WeakSet` keine tatsächlichen Referenzen, sondern [Ephemerons](https://dl.acm.org/doi/pdf/10.1145/263700.263733), eine Verbesserung des Mark-and-Sweep-Mechanismus. [Barros et al.](https://www.jucs.org/jucs_14_21/eliminating_cycles_in_weak/jucs_14_21_3481_3497_barros.pdf) bietet eine gute Zusammenfassung des Algorithmus (Seite 4). Ein Absatz wird zitiert:

> Ephemerons sind eine Verfeinerung von schwachen Paaren, bei denen weder der Schlüssel noch der Wert als schwach oder stark klassifiziert werden kann. Die Konnektivität des Schlüssels bestimmt die Konnektivität des Wertes, aber die Konnektivität des Wertes beeinflusst nicht die Konnektivität des Schlüssels. […] wenn die Garbage Collection Unterstützung für Ephemerons bietet, erfolgt sie in drei Phasen statt in zwei (Markieren und Freigeben).

Als grobes mentales Modell denken Sie an eine `WeakMap` als die folgende Implementierung:

> [!WARNING]
> Dies ist weder ein Polyfill noch ist es in irgendeiner Weise nah dran, wie es in der Engine umgesetzt ist (die in den Garbage Collection-Mechanismus eingreift).

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

Wie Sie sehen, hält `MyWeakMap` niemals tatsächlich eine Sammlung von Schlüsseln. Es fügt einfach Metadaten zu jedem übergebenen Objekt hinzu. Das Objekt ist dann über Mark-and-Sweep garbage-sammelbar. Daher ist es nicht möglich, über die Schlüssel in einer `WeakMap` zu iterieren oder die `WeakMap` zu leeren (da dies auch vom Wissen über die gesamte Schlüsselsammlung abhängt).

Weitere Informationen zu ihren APIs finden Sie im [Schlüssel-Sammlungen](/de/docs/Web/JavaScript/Guide/Keyed_collections)-Leitfaden.

### WeakRefs und FinalizationRegistry

> [!NOTE]
> `WeakRef` und `FinalizationRegistry` bieten direkte Einsichten in den Garbage Collection-Mechanismus. [Vermeiden Sie, sie wenn möglich zu verwenden](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#avoid_where_possible), da die Laufzeitemptyimatik fast vollständig ungeregelt ist.

Alle Variablen mit einem Objekt als Wert sind Referenzen zu diesem Objekt. Solche Referenzen sind jedoch _stark_ – ihre Existenz würde verhindern, dass der Garbage Collector das Objekt als zur Sammlung geeignet markiert. Ein [`WeakRef`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef) ist eine _schwache Referenz_ zu einem Objekt, die es erlaubt, das Objekt garbage-sammelbar zu machen, während die Möglichkeit erhalten bleibt, den Inhalt des Objekts während seiner Lebensdauer zu lesen.

Ein Anwendungsfall für `WeakRef` ist ein Cache-System, das Zeichenfolgen-URLs großen Objekten zuordnet. Wir können hierfür keine `WeakMap` verwenden, da `WeakMap`-Objekte ihre _Schlüssel_ schwach halten, aber nicht ihre _Werte_ – wenn Sie auf einen Schlüssel zugreifen, würden Sie immer deterministisch den Wert erhalten (da der Zugriff auf den Schlüssel bedeutet, dass er noch lebt). Hier sind wir damit einverstanden, für einen Schlüssel `undefined` zu bekommen (wenn der entsprechende Wert nicht mehr lebt), da wir ihn einfach neu berechnen können, aber wir möchten nicht, dass unerreichbare Objekte im Cache verbleiben. In diesem Fall können wir eine normale `Map` verwenden, jedoch mit jedem Wert als `WeakRef` des Objekts anstelle des tatsächlichen Objektwerts.

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

[`FinalizationRegistry`](/de/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry) bietet einen noch stärkeren Mechanismus zur Beobachtung der Garbage Collection. Sie ermöglicht es Ihnen, Objekte zu registrieren und benachrichtigt zu werden, wenn sie garbage-sammelt werden. Zum Beispiel können für das oben beschriebene Cache-System, selbst wenn die Blobs selbst für die Sammlung bereitstehen, die `WeakRef`-Objekte, die sie halten, nicht – und über die Zeit kann die `Map` viele nutzlose Einträge ansammeln. Die Verwendung einer `FinalizationRegistry` ermöglicht es, in diesem Fall Aufräumarbeiten durchzuführen.

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

Aufgrund von Leistungs- und Sicherheitsbedenken gibt es keine Garantie dafür, wann der Rückruf aufgerufen wird, oder ob er überhaupt aufgerufen wird. Er sollte nur für Aufräumarbeiten – und nicht kritische Aufräumarbeiten – verwendet werden. Es gibt andere Möglichkeiten für eine deterministischere Ressourcenverwaltung, wie [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch), das den `finally`-Block immer ausführen wird. `WeakRef` und `FinalizationRegistry` existieren ausschließlich zur Optimierung der Speichernutzung in lang laufenden Programmen.

Weitere Informationen zur API von [`WeakRef`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef) und [`FinalizationRegistry`](/de/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry) finden Sie auf ihren Referenzseiten.
