---
title: Speicherverwaltung
slug: Web/JavaScript/Guide/Memory_management
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

Niedrigstufige Programmiersprachen wie C verfügen über manuelle Speicherverwaltungsmechanismen wie [`malloc()`](https://pubs.opengroup.org/onlinepubs/009695399/functions/malloc.html) und [`free()`](https://en.wikipedia.org/wiki/C_dynamic_memory_allocation#Overview_of_functions). Im Gegensatz dazu weist JavaScript automatisch Speicher zu, wenn Objekte erstellt werden, und gibt diesen frei, wenn sie nicht mehr verwendet werden (_Garbage Collection_). Diese Automatisierung kann eine mögliche Quelle der Verwirrung sein: Sie kann Entwicklern den falschen Eindruck vermitteln, dass sie sich nicht um Speicherverwaltung kümmern müssen.

## Speicherlebenszyklus

Unabhängig von der Programmiersprache ist der Speicherlebenszyklus fast immer derselbe:

1. Fordern Sie den benötigten Speicher an
2. Verwenden Sie den zugewiesenen Speicher (lesen, schreiben)
3. Geben Sie den zugewiesenen Speicher frei, wenn er nicht mehr benötigt wird

Der zweite Teil ist in allen Sprachen explizit. Der erste und letzte Teil sind in niedrigstufigen Programmiersprachen explizit, aber in hochstufigen Sprachen wie JavaScript meistens implizit.

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
someElement.addEventListener("click", () => {
  someElement.style.backgroundColor = "blue";
});
```

#### Zuweisung über Funktionsaufrufe

Einige Funktionsaufrufe führen zur Objektzuweisung.

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

Die Verwendung von Werten bedeutet im Wesentlichen das Lesen und Schreiben im zugewiesenen Speicher. Dies kann durch das Lesen oder Schreiben des Werts einer Variablen oder einer Objekteigenschaft oder sogar durch die Übergabe eines Arguments an eine Funktion erfolgen.

### Freigabe, wenn der Speicher nicht mehr benötigt wird

Die meisten Probleme bei der Speicherverwaltung treten in dieser Phase auf. Der schwierigste Aspekt dieser Phase besteht darin, zu bestimmen, wann der zugewiesene Speicher nicht mehr benötigt wird.

Niedrigstufige Programmiersprachen erfordern, dass der Entwickler manuell bestimmt, zu welchem Zeitpunkt im Programm der zugewiesene Speicher nicht mehr benötigt wird und diesen freigibt.

Einige hochstufige Sprachen, wie JavaScript, nutzen eine Form der automatischen Speicherverwaltung, die als [Garbage Collection](<https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)>) (GC) bekannt ist. Der Zweck eines Garbage Collectors besteht darin, die Speicherzuweisung zu überwachen und zu bestimmen, wann ein Block des zugewiesenen Speichers nicht mehr benötigt wird, und diesen zurückzufordern. Dieser automatische Prozess ist eine Näherung, da das allgemeine Problem der Bestimmung, ob ein bestimmtes Stück Speicher noch benötigt wird, [nicht entscheidbar](https://en.wikipedia.org/wiki/Decidability_%28logic%29) ist.

## Garbage Collection

Wie oben erwähnt, ist das allgemeine Problem, automatisch festzustellen, ob ein Speicher "nicht mehr benötigt wird", unentscheidbar. Folglich implementieren Garbage Collector eine Einschränkung einer Lösung für das allgemeine Problem. In diesem Abschnitt werden die Konzepte erklärt, die zum Verständnis der Hauptalgorithmen der Garbage Collection und ihrer jeweiligen Einschränkungen erforderlich sind.

### Referenzen

Das Hauptkonzept, auf dem Garbage Collection-Algorithmen basieren, ist das Konzept der _Referenz_. Im Kontext der Speicherverwaltung wird gesagt, dass ein Objekt ein anderes Objekt referenziert, wenn das erstere auf das letztere zugreifen kann (entweder implizit oder explizit). Beispielsweise hat ein JavaScript-Objekt eine Referenz auf seinen [Prototypen](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) (implizite Referenz) und auf seine Eigenschaftswerte (explizite Referenz).

In diesem Kontext wird der Begriff „Objekt“ auf etwas erweitert, das breiter ist als reguläre JavaScript-Objekte und auch Funktionsskope (oder den globalen lexikalischen Bereich) umfasst.

### Referenzzählende Garbage Collection

> [!NOTE]
> Kein moderner JavaScript-Engine verwendet mehr Referenzzählung für die Garbage Collection.

Dies ist der naivste Algorithmus für Garbage Collection. Dieser Algorithmus vereinfacht das Problem von der Bestimmung, ob ein Objekt noch benötigt wird, auf die Bestimmung, ob ein Objekt immer noch von anderen Objekten referenziert wird. Ein Objekt wird als „Garbage“ oder sammelbar angesehen, wenn keine Referenzen mehr darauf zeigen.

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

Es gibt eine Einschränkung bei zirkulären Referenzen. Im folgenden Beispiel werden zwei Objekte erstellt, deren Eigenschaften sich gegenseitig referenzieren und dadurch einen Zyklus bilden. Sie werden außer Reichweite sein, nachdem der Funktionsaufruf abgeschlossen ist. Zu diesem Zeitpunkt werden sie nicht mehr benötigt und ihr zugewiesener Speicher sollte zurückgefordert werden. Der Referenzzählungsalgorithmus wird sie jedoch nicht als rückgewinnbar betrachten, da jedes der beiden Objekte mindestens eine Referenz aufweist, die auf sie zeigt, was dazu führt, dass keines von ihnen für die Garbage Collection markiert wird. Zirkuläre Referenzen sind eine häufige Ursache für Speicherlecks.

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

Dieser Algorithmus reduziert die Definition von „ein Objekt wird nicht mehr benötigt“ auf „ein Objekt ist nicht erreichbar“.

Dieser Algorithmus geht davon aus, dass eine Menge von Objekten bekannt ist, die als _Wurzeln_ bezeichnet werden. In JavaScript ist die Wurzel das globale Objekt. Der Garbage Collector beginnt regelmäßig von diesen Wurzeln aus, findet alle Objekte, die von diesen Wurzeln referenziert werden, dann alle Objekte, die von diesen referenziert werden, usw. Ausgehend von den Wurzeln wird der Garbage Collector so alle _erreichbaren_ Objekte finden und alle nicht erreichbaren Objekte sammeln.

Dieser Algorithmus ist eine Verbesserung gegenüber dem vorherigen, da ein Objekt mit null Referenzen tatsächlich nicht erreichbar ist. Das Gegenteil ist nicht der Fall, wie wir bei zirkulären Referenzen gesehen haben.

Derzeit liefern alle modernen Engines einen mark-and-sweep-Garbage Collector. Alle Verbesserungen im Bereich der JavaScript-Garbage Collection (generationale/incrementale/konkurrierende/parallele Garbage Collection) in den letzten Jahren sind Implementierungsverbesserungen dieses Algorithmus, jedoch keine Verbesserungen des Garbage Collection-Algorithmus selbst oder seiner Reduzierung der Definition, wann „ein Objekt nicht mehr benötigt wird“.

Der unmittelbare Vorteil dieses Ansatzes ist, dass Zyklen kein Problem mehr darstellen. Im ersten Beispiel oben, nachdem der Funktionsaufruf zurückkehrt, werden die beiden Objekte von keiner Ressource mehr referenziert, die vom globalen Objekt aus erreichbar ist. Folglich werden sie vom Garbage Collector als nicht erreichbar betrachtet und ihr zugewiesener Speicher zurückgefordert.

Jedoch bleibt die Unfähigkeit, die Garbage Collection manuell zu steuern, bestehen. Es gibt Zeiten, in denen es praktisch wäre, manuell zu entscheiden, wann und welcher Speicher freigegeben wird. Um den Speicher eines Objekts freizugeben, muss es explizit unerreichbar gemacht werden. Außerdem ist es nicht möglich, die Garbage Collection in JavaScript programmgesteuert auszulösen — und es wird wahrscheinlich niemals im Kern der Sprache sein, obwohl Engines möglicherweise APIs hinter Opt-in-Flags bereitstellen.

## Konfigurieren des Speichermodells einer Engine

JavaScript-Engines bieten typischerweise Flags, die das Speichermodell offenlegen. Zum Beispiel bietet Node.js zusätzliche Optionen und Werkzeuge, die die zugrunde liegenden V8-Mechanismen zur Konfiguration und Debugging von Speicherproblemen darstellen. Diese Konfiguration ist möglicherweise nicht in Browsern verfügbar und noch weniger für Webseiten (über HTTP-Header usw.).

Die maximale Menge des verfügbaren Heap-Speichers kann mit einem Flag erhöht werden:

```bash
node --max-old-space-size=6000 index.js
```

Wir können auch den Garbage Collector zur Fehlerbehebung bei Speicherproblemen mit einem Flag und dem [Chrome-Debugger](https://nodejs.org/en/learn/getting-started/debugging) offenlegen:

```bash
node --expose-gc --inspect index.js
```

## Datenstrukturen zur Unterstützung der Speicherverwaltung

Obwohl JavaScript die Garbage Collector API nicht direkt bereitstellt, bietet die Sprache mehrere Datenstrukturen, die indirekt Garbage Collection beobachten und genutzt werden können, um die Speichernutzung zu verwalten.

### WeakMaps und WeakSets

[`WeakMap`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) und [`WeakSet`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakSet) sind Datenstrukturen, deren APIs ihre nicht-schwachen Gegenstücke spiegeln: [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set). `WeakMap` ermöglicht es Ihnen, eine Sammlung von Schlüssel-Wert-Paaren zu verwalten, während `WeakSet` es Ihnen ermöglicht, eine Sammlung einzigartiger Werte zu verwalten, beide mit performanter Hinzufügung, Löschung und Abfrage.

`WeakMap` und `WeakSet` haben ihren Namen vom Konzept der _schwach gehaltenen_ Werte. Wenn `x` schwach von `y` gehalten wird, bedeutet das, dass obwohl Sie über `y` auf den Wert von `x` zugreifen können, der mark-and-sweep-Algorithmus `x` nicht als erreichbar betrachten wird, wenn nichts anderes _stark hält_ es. Die meisten Datenstrukturen, außer denen, die hier besprochen werden, halten stark auf die übergebenen Objekte, sodass Sie sie jederzeit abrufen können. Die Schlüssel von `WeakMap` und `WeakSet` können garbage collected werden (für `WeakMap`-Objekte wären die Werte dann ebenfalls für die Garbage Collection berechtigt), solange nichts anderes im Programm den Schlüssel referenziert. Dies wird durch zwei Eigenschaften sichergestellt:

- `WeakMap` und `WeakSet` können nur Objekte oder Symbole speichern. Dies liegt daran, dass nur Objekte garbage collected werden — primitive Werte können immer gefälscht werden (das heißt, `1 === 1`, aber `{} !== {}`), was dazu führt, dass sie ewig in der Sammlung bleiben. [Registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) (wie `Symbol.for("key")`) können auch gefälscht werden und sind daher nicht garbage collectable, aber Symbole, die mit `Symbol("key")` erstellt wurden, sind garbage collectable. [Bekannte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) wie `Symbol.iterator` kommen in einer festen Menge und sind während der gesamten Programmlaufzeit einzigartig, ähnlich wie intrinsische Objekte wie `Array.prototype`, sodass sie auch als Schlüssel zugelassen sind.
- `WeakMap` und `WeakSet` sind nicht iterierbar. Dies verhindert, dass Sie `Array.from(map.keys()).length` verwenden, um die Lebendigkeit von Objekten zu beobachten, oder einen beliebigen Schlüssel zu erhalten, der sonst sammelbar sein sollte. (Garbage Collection sollte so unsichtbar wie möglich sein.)

In typischen Erklärungen von `WeakMap` und `WeakSet` (wie oben) wird oft impliziert, dass der Schlüssel zuerst garbage collected wird, sodass der Wert ebenfalls für die Garbage Collection freigegeben wird. Jedoch, betrachten Sie den Fall, dass der Wert den Schlüssel referenziert:

```js
const wm = new WeakMap();
const key = {};
wm.set(key, { key });
// Now `key` cannot be garbage collected,
// because the value holds a reference to the key,
// and the value is strongly held in the map!
```

Wenn `key` als tatsächliche Referenz gespeichert wird, würde dies eine zirkuläre Referenz erstellen und sowohl den Schlüssel als auch den Wert für die Garbage Collection unberechtigt machen, selbst wenn nichts anderes `key` referenziert — denn wenn `key` garbage collected wird, bedeutet das, dass zu einem bestimmten Zeitpunkt `value.key` auf eine nicht existierende Adresse zeigen würde, was nicht legal ist. Um dies zu beheben, sind die Einträge von `WeakMap` und `WeakSet` keine tatsächlichen Referenzen, sondern [Ephemerons](https://dl.acm.org/doi/pdf/10.1145/263700.263733), eine Verbesserung des mark-and-sweep-Mechanismus. [Barros et al.](https://www.jucs.org/jucs_14_21/eliminating_cycles_in_weak/jucs_14_21_3481_3497_barros.pdf) bieten eine gute Zusammenfassung des Algorithmus (Seite 4). Ein Absatz, um zu zitieren:

> Ephemerons sind eine Verfeinerung schwacher Paare, bei denen weder der Schlüssel noch der Wert als schwach oder stark klassifiziert werden können. Die Konnektivität des Schlüssels bestimmt die Konnektivität des Wertes, aber die Konnektivität des Wertes beeinflusst die Konnektivität des Schlüssels nicht. […] wenn die Garbage Collection Unterstützung für Ephemerons bietet, erfolgt sie in drei Phasen statt zwei (Markieren und Aufräumen).

Als ein grobes mentales Modell können Sie sich `WeakMap` als folgende Implementierung vorstellen:

> [!WARNING]
> Dies ist kein Polyfill und steht der Implementierung der Engine (die in den Garbage Collection-Mechanismus eingreift) in keinem Maße nahe.

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

Wie Sie sehen können, hält die `MyWeakMap` tatsächlich nie eine Sammlung von Schlüsseln. Sie fügt einfach Metadaten zu jedem übergebenen Objekt hinzu. Das Objekt ist dann über mark-and-sweep garbage collectable. Daher ist es nicht möglich, über die Schlüssel in einer `WeakMap` zu iterieren, noch die `WeakMap` zu leeren (da dies auch das Wissen über die gesamte Schlüsselsammlung erfordern würde).

Für mehr Informationen zu ihren APIs, siehe den [Leitfaden über geordnete Sammlungen](/de/docs/Web/JavaScript/Guide/Keyed_collections).

### WeakRefs und FinalizationRegistry

> [!NOTE]
> `WeakRef` und `FinalizationRegistry` bieten direkte Einsicht in den Garbage Collection-Apparat. [Vermeiden Sie ihre Verwendung, wo möglich](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#avoid_where_possible), da die Laufzeitsemantik fast vollständig nicht garantiert ist.

Alle Variablen mit einem Objekt als Wert sind Referenzen auf dieses Objekt. Solche Referenzen sind jedoch _stark_ — ihre Existenz würde den Garbage Collector daran hindern, das Objekt als sammelbar zu markieren. Ein [`WeakRef`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef) ist eine _schwache Referenz_ auf ein Objekt, die es ermöglicht, dass das Objekt garbage collected wird, während gleichzeitig die Möglichkeit erhalten bleibt, den Inhalt des Objekts während seiner Lebensdauer zu lesen.

Ein Anwendungsfall für `WeakRef` ist ein Cache-System, das Zeichenfolgen-URLs großen Objekten zuordnet. Wir können für diesen Zweck kein `WeakMap` verwenden, da `WeakMap` Objekte ihre _Schlüssel_ schwach gehalten haben, nicht aber ihre _Werte_ — wenn Sie auf einen Schlüssel zugreifen, würden Sie immer deterministisch den Wert erhalten (da der Zugriff auf den Schlüssel bedeutet, dass er noch lebt). Hier ist es für uns in Ordnung, `undefined` für einen Schlüssel zu erhalten (wenn der entsprechende Wert nicht mehr lebt), da wir ihn einfach neu berechnen können, aber wir möchten nicht, dass nicht erreichbare Objekte im Cache verbleiben. In diesem Fall können wir eine normale `Map` verwenden, jedoch mit jedem Wert als `WeakRef` des Objekts anstelle des tatsächlichen Objektwerts.

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

[`FinalizationRegistry`](/de/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry) bietet einen noch stärkeren Mechanismus, um Garbage Collection zu beobachten. Es erlaubt Ihnen, Objekte zu registrieren und benachrichtigt zu werden, wenn sie garbage collected werden. Zum Beispiel kann für das oben angeführte Cache-System, selbst wenn die Blobs selbst für die Sammlung freigegeben sind, die `WeakRef`-Objekte, die sie halten, nicht — und über die Zeit kann die `Map` viele nutzlose Einträge ansammeln. Die Verwendung einer `FinalizationRegistry` ermöglicht es einem, in diesem Fall eine Bereinigung durchzuführen.

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

Aufgrund von Leistungs- und Sicherheitsbedenken gibt es keine Garantie, wann der Rückruf aufgerufen wird oder ob er überhaupt aufgerufen wird. Er sollte nur für die Bereinigung verwendet werden — und für nicht-kritische Bereinigung. Es gibt andere Möglichkeiten für eine deterministischere Ressourcenverwaltung, wie zum Beispiel [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch), der immer den `finally`-Block ausführt. `WeakRef` und `FinalizationRegistry` existieren ausschließlich zur Optimierung der Speichernutzung in langlaufenden Programmen.

Für mehr Informationen zur API von [`WeakRef`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef) und [`FinalizationRegistry`](/de/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry), siehe deren Referenzseiten.
