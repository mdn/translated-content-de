---
title: Speicherverwaltung
slug: Web/JavaScript/Guide/Memory_management
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("Advanced")}}

Low-Level-Sprachen wie C haben manuelle Speicherverwaltungsprimitive wie [`malloc()`](https://pubs.opengroup.org/onlinepubs/009695399/functions/malloc.html) und [`free()`](https://en.wikipedia.org/wiki/C_dynamic_memory_allocation#Overview_of_functions). Im Gegensatz dazu weist JavaScript automatisch Speicher zu, wenn Objekte erstellt werden, und gibt ihn frei, wenn sie nicht mehr verwendet werden (_Garbage Collection_). Diese Automatisierung kann eine potenzielle Quelle der Verwirrung sein: Sie kann Entwicklern fälschlicherweise das Gefühl geben, dass sie sich nicht um Speicherverwaltung kümmern müssen.

## Speicherlebenszyklus

Unabhängig von der Programmiersprache ist der Speicherlebenszyklus immer ziemlich gleich:

1. Weisen Sie den benötigten Speicher zu
2. Verwenden Sie den zugewiesenen Speicher (lesen, schreiben)
3. Geben Sie den zugewiesenen Speicher frei, wenn er nicht mehr benötigt wird

Der zweite Teil ist in allen Sprachen explizit. Der erste und letzte Teil sind in Low-Level-Sprachen explizit, aber in High-Level-Sprachen wie JavaScript weitgehend implizit.

### Speicherzuweisung in JavaScript

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

Einige Funktionsaufrufe führen zur Zuweisung von Objekten.

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

Die Verwendung von Werten bedeutet im Wesentlichen das Lesen und Schreiben im zugewiesenen Speicher. Dies kann durch das Lesen oder Schreiben des Wertes einer Variablen oder einer Objekteigenschaft oder sogar durch das Übergeben eines Arguments an eine Funktion erfolgen.

### Freigabe, wenn der Speicher nicht mehr benötigt wird

Die meisten Speicherverwaltungsprobleme treten in dieser Phase auf. Der schwierigste Aspekt dieses Stadiums besteht darin, festzustellen, wann der zugewiesene Speicher nicht mehr benötigt wird.

Low-Level-Sprachen erfordern vom Entwickler, manuell festzulegen, zu welchem Zeitpunkt im Programm der zugewiesene Speicher nicht mehr benötigt wird und ihn freizugeben.

Einige High-Level-Sprachen, wie JavaScript, verwenden eine Form der automatischen Speicherverwaltung, die als [Garbage Collection](<https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)>) (GC) bekannt ist. Der Zweck eines Garbage Collectors besteht darin, die Speicherzuweisung zu überwachen und festzustellen, wann ein Block des zugewiesenen Speichers nicht mehr benötigt wird, und ihn zurückzufordern. Dieser automatische Prozess ist eine Annäherung, da das allgemeine Problem, ob ein bestimmtes Speicherstück noch benötigt wird oder nicht, [unentscheidbar](https://en.wikipedia.org/wiki/Decidability_%28logic%29) ist.

## Garbage Collection

Wie oben erwähnt, ist das allgemeine Problem, automatisch zu ermitteln, ob ein Speicher "nicht mehr benötigt wird", unentscheidbar. Infolgedessen implementieren Garbage-Collector eine Einschränkung einer Lösung des allgemeinen Problems. In diesem Abschnitt werden die Konzepte erläutert, die für das Verständnis der wichtigsten Garbage-Collection-Algorithmen und ihrer jeweiligen Einschränkungen erforderlich sind.

### Referenzen

Das Hauptkonzept, auf das sich Garbage-Collection-Algorithmen verlassen, ist das Konzept der _Referenz_. Innerhalb des Kontextes der Speicherverwaltung wird gesagt, dass ein Objekt auf ein anderes Objekt verweist, wenn das erstere Zugriff auf das letztere hat (entweder implizit oder explizit). Zum Beispiel hat ein JavaScript-Objekt eine Referenz auf sein [Prototyp](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) (implizite Referenz) und auf seine Eigenschaftenwerte (explizite Referenz).

In diesem Kontext wird der Begriff "Objekt" auf etwas erweitert, das mehr als reguläre JavaScript-Objekte umfasst und auch Funktionsbereiche (oder den globalen lexikalischen Bereich) enthält.

### Referenzzählende Garbage Collection

> [!NOTE]
> Keine moderne JavaScript-Engine verwendet mehr Referenzzählen für die Garbage Collection.

Dies ist der naivste Garbage Collection-Algorithmus. Dieser Algorithmus reduziert das Problem von der Ermittlung, ob ein Objekt noch benötigt wird, auf die Feststellung, ob ein Objekt noch von anderen Objekten referenziert wird. Ein Objekt wird als "Garbage" oder sammelbar angesehen, wenn keine Referenzen mehr auf es zeigen.

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

Es gibt eine Einschränkung bei zyklischen Referenzen. Im folgenden Beispiel werden zwei Objekte erstellt, deren Eigenschaften sich gegenseitig referenzieren, und so einen Zyklus bilden. Nach Abschluss des Funktionsaufrufs verlieren sie ihren Gültigkeitsbereich. Zu diesem Zeitpunkt werden sie überflüssig und ihr zugewiesener Speicher sollte zurückgefordert werden. Der Referenzzählalgorithmus wird sie jedoch nicht als zurückforderbar betrachten, da jedes der beiden Objekte mindestens eine Referenz hat, die auf sie zeigt, wodurch keines von ihnen zur Garbage Collection markiert wird. Zyklische Referenzen sind eine häufige Ursache für Speicherlecks.

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

Dieser Algorithmus reduziert die Definition von "ein Objekt wird nicht mehr benötigt" auf "ein Objekt ist nicht mehr erreichbar".

Dieser Algorithmus setzt das Wissen eines Sets von Objekten voraus, die als _Wurzeln_ bezeichnet werden. In JavaScript ist die Wurzel das globale Objekt. Der Garbage Collector beginnt periodisch von diesen Wurzeln, findet alle Objekte, die von diesen Wurzeln referenziert werden, dann alle Objekte, die von diesen referenziert werden usw. Beginnend von den Wurzeln findet der Garbage Collector somit alle _erreichbaren_ Objekte und sammelt alle nicht erreichbaren Objekte ein.

Dieser Algorithmus ist eine Verbesserung gegenüber dem vorherigen, da ein Objekt mit null Verweisen tatsächlich nicht erreichbar ist. Das Gegenteil trifft, wie wir bei zyklischen Referenzen gesehen haben, nicht zu.

Derzeit liefern alle modernen Engines einen Mark-and-Sweep-Garbage-Collector. Alle Verbesserungen im Bereich der JavaScript-Garbage-Collection (generational/incremental/concurrent/parallel garbage collection) in den letzten Jahren sind Implementierungsverbesserungen dieses Algorithmus, aber keine Verbesserungen des Garbage-Collection-Algorithmus selbst noch seiner Reduktion der Definition von wann "ein Objekt nicht mehr benötigt wird".

Der unmittelbare Vorteil dieses Ansatzes besteht darin, dass Zyklen kein Problem mehr darstellen. Im ersten Beispiel oben, nachdem der Funktionsaufruf zurückkehrt, werden die beiden Objekte von keiner Ressource mehr referenziert, die vom globalen Objekt erreichbar ist. Folglich werden sie als unereichbar erkannt und ihr zugewiesener Speicher wird zurückgenommen.

Jedoch bleibt die Unfähigkeit, die Garbage-Collection manuell zu steuern, bestehen. Es gibt Zeiten, in denen es nützlich wäre, manuell zu entscheiden, wann und welcher Speicher freigegeben wird. Um den Speicher eines Objekts freizugeben, muss es explizit unerreichbar gemacht werden. Es ist auch nicht möglich, die Garbage Collection in JavaScript programmgesteuert auszulösen – und wird wahrscheinlich nie im Kern der Sprache enthalten sein, obwohl Engines APIs hinter Opt-In-Flags bereitstellen können.

## Konfiguration des Speicher-Modells einer Engine

JavaScript-Engines bieten in der Regel Flags, die das Speicher-Modell zugänglich machen. Zum Beispiel bietet Node.js zusätzliche Optionen und Tools, die die zugrunde liegenden V8-Mechanismen zur Konfiguration und Fehlersuche bei Speicherproblemen zugänglich machen. Diese Konfiguration ist möglicherweise in Browsern nicht verfügbar und noch weniger für Webseiten (über HTTP-Header, etc.).

Die maximale Menge an verfügbarem Heap-Speicher kann mit einem Flag erhöht werden:

```bash
node --max-old-space-size=6000 index.js
```

Wir können den Garbage Collector auch für die Fehlersuche bei Speicherproblemen mit einem Flag und dem [Chrome-Debugger](https://nodejs.org/en/learn/getting-started/debugging) freilegen:

```bash
node --expose-gc --inspect index.js
```

## Datenstrukturen zur Unterstützung der Speicherverwaltung

Obwohl JavaScript die Garbage Collector-API nicht direkt bereitstellt, bietet die Sprache mehrere Datenstrukturen, die die Garbage Collection indirekt beobachten und zur Verwaltung der Speichernutzung verwendet werden können.

### WeakMaps und WeakSets

[`WeakMap`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) und [`WeakSet`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakSet) sind Datenstrukturen, deren APIs ihren nicht schwachen Gegenstücken sehr ähneln: [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set). `WeakMap` ermöglicht es Ihnen, eine Sammlung von Schlüssel-Wert-Paaren zu pflegen, während `WeakSet` es Ihnen ermöglicht, eine Sammlung von einzigartigen Werten zu pflegen, beide mit performanter Hinzufügung, Löschung und Abfrage.

`WeakMap` und `WeakSet` leiten ihren Namen vom Konzept der _schwach gehaltenen_ Werte ab. Wenn `x` schwach von `y` gehalten wird, bedeutet dies, dass, obwohl Sie auf den Wert von `x` über `y` zugreifen können, der Mark-and-Sweep-Algorithmus `x` nicht als erreichbar betrachtet, wenn nichts anderes _stärker auf_ es verweist. Die meisten Datenstrukturen, außer den hier besprochenen, halten stark an den übergebenen Objekten fest, sodass Sie sie jederzeit abrufen können. Die Schlüssel von `WeakMap` und `WeakSet` können (für `WeakMap`-Objekte, die Werte könnten dann ebenfalls) garbage gesammelt werden, solange nichts anderes im Programm auf den Schlüssel verweist. Dies wird durch zwei Eigenschaften sichergestellt:

- `WeakMap` und `WeakSet` können nur Objekte oder Symbole speichern. Dies liegt daran, dass nur Objekte garbage gesammelt werden – primitive Werte können immer gefälscht werden (das heißt, `1 === 1`, aber `{} !== {}`), was bewirkt, dass sie für immer in der Sammlung bleiben. [Registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) (wie `Symbol.for("key")`) können ebenfalls gefälscht werden und sind daher nicht garbage sammelbar, aber Symbole, die mit `Symbol("key")` erstellt wurden, sind garbage sammelbar. [Bekannte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) wie `Symbol.iterator` stammen aus einem festen Satz und sind einzigartig während der Lebensdauer des Programms, ähnlich wie intrinsische Objekte wie `Array.prototype`, sodass sie ebenfalls als Schlüssel erlaubt sind.
- `WeakMap` und `WeakSet` sind nicht iterierbar. Dies verhindert, dass man `Array.from(map.keys()).length` verwendet, um die Lebendigkeit von Objekten zu beobachten oder sich einen beliebigen Schlüssel zu verschaffen, der ansonsten für die Garbage Collection infrage kommen sollte. (Garbage Collection sollte so unsichtbar wie möglich sein.)

In typischen Erklärungen von `WeakMap` und `WeakSet` (wie der oben genannten) wird häufig impliziert, dass der Schlüssel zuerst garbage gesammelt wird, wodurch der Wert ebenfalls zur Garbage Collection freigegeben wird. Betrachten Sie jedoch den Fall, dass der Wert auf den Schlüssel verweist:

```js
const wm = new WeakMap();
const key = {};
wm.set(key, { key });
// Now `key` cannot be garbage collected,
// because the value holds a reference to the key,
// and the value is strongly held in the map!
```

Wenn `key` als tatsächliche Referenz gespeichert wäre, würde dies eine zyklische Referenz erzeugen und sowohl den Schlüssel als auch den Wert für die Garbage Collection unzugänglich machen, selbst wenn nichts anderes auf `key` verweist – da wenn `key` garbage gesammelt wird, dies bedeutet, dass zu einem bestimmten Zeitpunkt `value.key` auf eine nicht existierende Adresse zeigt, was nicht legal ist. Um dies zu beheben, sind die Einträge von `WeakMap` und `WeakSet` keine tatsächlichen Referenzen, sondern [Ephemerons](https://dl.acm.org/doi/pdf/10.1145/263700.263733), eine Erweiterung des Mark-and-Sweep-Mechanismus. [Barros et al.](https://www.jucs.org/jucs_14_21/eliminating_cycles_in_weak/jucs_14_21_3481_3497_barros.pdf) bietet eine gute Zusammenfassung des Algorithmus (Seite 4). Um einen Absatz zu zitieren:

> Ephemerons sind eine Verfeinerung schwacher Paare, bei denen weder der Schlüssel noch der Wert als schwach oder stark klassifiziert werden können. Die Konnektivität des Schlüssels bestimmt die Konnektivität des Wertes, aber die Konnektivität des Wertes beeinflusst nicht die Konnektivität des Schlüssels. […] wenn die Garbage Collection Unterstützung für Ephemerons bietet, erfolgt sie in drei Phasen statt in zwei (Markieren und Löschen).

Als grobes mentales Modell, denken Sie an eine `WeakMap` wie die folgende Implementierung:

> [!WARNING]
> Dies ist kein Polyfill und auch nicht annähernd, wie es in der Engine implementiert ist (die in den Garbage-Collection-Mechanismus eingreift).

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

Wie Sie sehen können, hält `MyWeakMap` tatsächlich nie eine Sammlung von Schlüsseln. Es fügt einfach jedem übergebenen Objekt Metadaten hinzu. Das Objekt ist dann via Mark-and-Sweep garbage sammelbar. Daher ist es nicht möglich, über die Schlüssel in einer `WeakMap` zu iterieren, noch die `WeakMap` zu löschen (da dies auch auf dem Wissen über die gesamte Schlüsselsammlung basiert).

Für weitere Informationen zu ihren APIs siehe den [leitfaden zu den Keyed Collections](/de/docs/Web/JavaScript/Guide/Keyed_collections).

### WeakRefs und FinalizationRegistry

> **Hinweis:** `WeakRef` und `FinalizationRegistry` bieten direkte Einsicht in den Garbage-Collection-Mechanismus. [Vermeiden Sie ihre Verwendung, wo immer möglich](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#avoid_where_possible), da die Laufzeitsemantik fast vollständig nicht garantiert ist.

Alle Variablen mit einem Objekt als Wert sind Referenzen auf dieses Objekt. Solche Referenzen sind jedoch _stark_ – ihre Existenz würde den Garbage Collector daran hindern, das Objekt als zur Sammlung berechtigt zu markieren. Ein [`WeakRef`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef) ist eine _schwache Referenz_ auf ein Objekt, die es dem Objekt ermöglicht, garbage gesammelt zu werden, während die Möglichkeit erhalten bleibt, den Inhalt des Objekts während seiner Lebensdauer zu lesen.

Ein Anwendungsfall für `WeakRef` ist ein Cache-System, das Zeichenfolgen-URLs großen Objekten zuordnet. Wir können für diesen Zweck kein `WeakMap` verwenden, da `WeakMap`-Objekte ihre _Schlüssel_ schwach halten, aber nicht ihre _Werte_ – wenn Sie auf einen Schlüssel zugreifen, würden Sie immer deterministisch den Wert erhalten (da der Zugriff auf den Schlüssel bedeutet, dass er noch lebt). Hier ist es in Ordnung, `undefined` für einen Schlüssel zu bekommen (wenn der entsprechende Wert nicht mehr vorhanden ist), da wir ihn einfach neu berechnen können, aber wir wollen nicht, dass unerreichbare Objekte im Cache bleiben. In diesem Fall können wir eine normale `Map` verwenden, jedoch mit jedem Wert, der ein `WeakRef` des Objekts anstelle des tatsächlichen Objektwerts ist.

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

[`FinalizationRegistry`](/de/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry) bietet einen noch stärkeren Mechanismus, um die Garbage Collection zu beobachten. Es ermöglicht Ihnen, Objekte zu registrieren und benachrichtigt zu werden, wenn sie garbage gesammelt werden. Beispielsweise können im oben beschriebenen Cache-System selbst dann, wenn die Blobs selbst zur Sammlung freigegeben sind, die `WeakRef`-Objekte, die sie enthalten, es nicht – und im Laufe der Zeit könnte die `Map` viele nutzlose Einträge ansammeln. Die Verwendung einer `FinalizationRegistry` ermöglicht es, in diesem Fall eine Bereinigung durchzuführen.

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

Aufgrund von Leistungs- und Sicherheitsbedenken gibt es keine Garantie, wann der Callback aufgerufen wird, oder ob er überhaupt aufgerufen wird. Er sollte nur für das Aufräumen und für unkritische Aufräumarbeiten verwendet werden. Es gibt andere Möglichkeiten für eine deterministischere Ressourcenverwaltung, wie [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch), das den `finally`-Block immer ausführen wird. `WeakRef` und `FinalizationRegistry` existieren ausschließlich zur Optimierung der Speichernutzung in langlebigen Programmen.

Für weitere Informationen zur API von [`WeakRef`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef) und [`FinalizationRegistry`](/de/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry) siehe deren Referenzseiten.
