---
title: Speicherverwaltung
slug: Web/JavaScript/Guide/Memory_management
l10n:
  sourceCommit: d49a4a4b409c60938b544e315358e27068991484
---

Systemnahe Sprachen wie C bieten Funktionen zur manuellen Speicherverwaltung, etwa [`malloc()`](https://pubs.opengroup.org/onlinepubs/009695399/functions/malloc.html) und [`free()`](https://en.wikipedia.org/wiki/C_dynamic_memory_allocation#Overview_of_functions). JavaScript hingegen weist beim Erstellen von Objekten automatisch Speicher zu und gibt ihn wieder frei, wenn er nicht mehr benötigt wird (_Garbage Collection_). Diese Automatisierung kann zu Missverständnissen führen: Sie kann bei Entwicklern den falschen Eindruck erwecken, dass sie sich nicht um die Speicherverwaltung kümmern müssen.

## Lebenszyklus des Speichers

Unabhängig von der Programmiersprache verläuft der Lebenszyklus des Speichers nahezu immer gleich:

1. Benötigten Speicher zuweisen
2. Zugewiesenen Speicher verwenden (lesen, schreiben)
3. Zugewiesenen Speicher freigeben, wenn er nicht mehr benötigt wird

Der zweite Schritt erfolgt in allen Sprachen ausdrücklich. Der erste und der letzte Schritt erfolgen in systemnahen Sprachen ausdrücklich, in höheren Sprachen wie JavaScript jedoch meist implizit.

### Speicherzuweisung in JavaScript

#### Initialisierung von Werten

Damit sich Programmierer nicht selbst um die Speicherzuweisung kümmern müssen, weist JavaScript beim erstmaligen Deklarieren von Werten automatisch Speicher zu.

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

#### Speicherzuweisung durch Funktionsaufrufe

Einige Funktionsaufrufe führen zur Zuweisung von Speicher für Objekte.

```js
const d = new Date(); // allocates a Date object

const e = document.createElement("div"); // allocates a DOM element
```

Einige Methoden erzeugen neue Werte oder Objekte und weisen dafür Speicher zu:

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

### Werte verwenden

Werte zu verwenden bedeutet im Wesentlichen, zugewiesenen Speicher zu lesen oder zu beschreiben. Das geschieht beispielsweise beim Lesen oder Schreiben des Werts einer Variablen oder einer Objekteigenschaft oder beim Übergeben eines Arguments an eine Funktion.

### Speicher freigeben, wenn er nicht mehr benötigt wird

Die meisten Probleme bei der Speicherverwaltung treten in dieser Phase auf. Die größte Schwierigkeit besteht darin, festzustellen, wann der zugewiesene Speicher nicht mehr benötigt wird.

In systemnahen Sprachen müssen Entwickler selbst bestimmen, ab welchem Punkt im Programm zugewiesener Speicher nicht mehr benötigt wird, und ihn freigeben.

Einige höhere Sprachen, darunter JavaScript, verwenden eine Form der automatischen Speicherverwaltung, die als [Garbage Collection](<https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)>) (GC) bezeichnet wird. Ein Garbage Collector überwacht die Speicherzuweisung, ermittelt, wann ein zugewiesener Speicherbereich nicht mehr benötigt wird, und gibt ihn wieder frei. Dieser automatische Prozess ist eine Annäherung, denn die allgemeine Frage, ob ein bestimmter Speicherbereich noch benötigt wird, ist [unentscheidbar](https://en.wikipedia.org/wiki/Decidability_%28logic%29).

## Garbage Collection

Wie bereits erwähnt, ist die allgemeine Frage, ob ein Speicherbereich „nicht mehr benötigt wird“, nicht automatisch entscheidbar. Garbage Collectors beschränken sich daher auf eine vereinfachte Form dieses Problems. In diesem Abschnitt werden die Konzepte erläutert, die zum Verständnis der wichtigsten Garbage-Collection-Algorithmen und ihrer jeweiligen Grenzen erforderlich sind.

### Referenzen

Das zentrale Konzept von Garbage-Collection-Algorithmen ist die _Referenz_. Im Zusammenhang mit der Speicherverwaltung referenziert ein Objekt ein anderes, wenn es auf dieses zugreifen kann – ob implizit oder explizit. Beispielsweise besitzt ein JavaScript-Objekt eine Referenz auf seinen [Prototyp](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) (implizite Referenz) und auf die Werte seiner Eigenschaften (explizite Referenzen).

Der Begriff „Objekt“ ist in diesem Zusammenhang weiter gefasst als bei gewöhnlichen JavaScript-Objekten und umfasst auch Funktions-Scopes (oder den globalen lexikalischen Scope).

### Garbage Collection durch Referenzzählung

> [!NOTE]
> Keine moderne JavaScript-Engine verwendet noch Referenzzählung für die Garbage Collection.

Dies ist der einfachste Garbage-Collection-Algorithmus. Er vereinfacht die Frage, ob ein Objekt noch benötigt wird, zu der Frage, ob andere Objekte es noch referenzieren. Ein Objekt gilt als „Garbage“ beziehungsweise kann freigegeben werden, wenn keine Referenzen mehr auf es verweisen.

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

Bei zirkulären Referenzen stößt dieser Ansatz an eine Grenze. Im folgenden Beispiel werden zwei Objekte erstellt, deren Eigenschaften einander referenzieren. Dadurch entsteht ein Zyklus. Nach Abschluss des Funktionsaufrufs verlassen sie ihren Gültigkeitsbereich. Zu diesem Zeitpunkt werden sie nicht mehr benötigt und ihr zugewiesener Speicher sollte freigegeben werden. Der Algorithmus mit Referenzzählung erkennt sie jedoch nicht als freigebbar, da auf jedes der beiden Objekte weiterhin mindestens eine Referenz verweist. Somit wird keines der Objekte zur Freigabe markiert. Zirkuläre Referenzen sind eine häufige Ursache für Speicherlecks.

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

Dieser Algorithmus vereinfacht die Definition „ein Objekt wird nicht mehr benötigt“ zu „ein Objekt ist nicht erreichbar“.

Dazu setzt der Algorithmus voraus, dass eine Menge von Objekten bekannt ist, die als _Wurzeln_ bezeichnet werden. In JavaScript ist das globale Objekt eine solche Wurzel. Der Garbage Collector beginnt regelmäßig bei diesen Wurzeln und findet alle Objekte, die von ihnen referenziert werden, dann alle Objekte, die von diesen wiederum referenziert werden, und so weiter. Auf diese Weise ermittelt er alle _erreichbaren_ Objekte und gibt die nicht erreichbaren frei.

Dieser Algorithmus ist eine Verbesserung gegenüber dem vorherigen: Ein Objekt ohne Referenzen ist zwangsläufig nicht erreichbar. Wie das Beispiel mit zirkulären Referenzen zeigt, gilt die Umkehrung jedoch nicht.

Alle modernen Engines verwenden derzeit einen Mark-and-Sweep-Garbage-Collector. Die Verbesserungen der JavaScript-Garbage-Collection in den letzten Jahren – etwa generationelle, inkrementelle, nebenläufige und parallele Garbage Collection – betreffen die Implementierung dieses Algorithmus. Sie ändern weder den zugrunde liegenden Algorithmus noch dessen vereinfachte Definition dafür, wann „ein Objekt nicht mehr benötigt wird“.

Ein unmittelbarer Vorteil dieses Ansatzes ist, dass Zyklen kein Problem mehr darstellen. Im obigen Beispiel werden die beiden Objekte nach dem Ende des Funktionsaufrufs von keiner Ressource mehr referenziert, die vom globalen Objekt aus erreichbar ist. Der Garbage Collector erkennt daher, dass sie nicht erreichbar sind, und gibt ihren zugewiesenen Speicher frei.

Die Garbage Collection lässt sich allerdings weiterhin nicht manuell steuern. Mitunter wäre es hilfreich, selbst zu entscheiden, wann welcher Speicher freigegeben wird. Damit der Speicher eines Objekts freigegeben werden kann, muss das Objekt ausdrücklich unerreichbar gemacht werden. Außerdem lässt sich die Garbage Collection in JavaScript nicht programmgesteuert auslösen. Das wird wahrscheinlich auch nie Teil der Kernsprache sein, wenngleich Engines entsprechende APIs möglicherweise über optionale Flags bereitstellen.

## Speichermodell einer Engine konfigurieren

JavaScript-Engines bieten in der Regel Flags an, die Zugriff auf Einstellungen des Speichermodells ermöglichen. Node.js stellt beispielsweise zusätzliche Optionen und Werkzeuge bereit, mit denen sich die zugrunde liegenden V8-Mechanismen zur Konfiguration und Fehlersuche bei Speicherproblemen nutzen lassen. In Browsern und erst recht für Webseiten (etwa über HTTP-Header) stehen solche Konfigurationsmöglichkeiten möglicherweise nicht zur Verfügung.

Die maximal verfügbare Größe des Heap-Speichers lässt sich mit einem Flag erhöhen:

```bash
node --max-old-space-size=6000 index.js
```

Mit einem Flag und dem [Chrome Debugger](https://nodejs.org/learn/getting-started/debugging) lässt sich außerdem der Garbage Collector zur Fehlersuche bei Speicherproblemen zugänglich machen:

```bash
node --expose-gc --inspect index.js
```

## Datenstrukturen zur Unterstützung der Speicherverwaltung

JavaScript stellt die API des Garbage Collectors zwar nicht direkt bereit, bietet aber mehrere Datenstrukturen, mit denen sich die Garbage Collection indirekt beobachten und die Speichernutzung verwalten lässt.

### WeakMaps und WeakSets

[`WeakMap`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) und [`WeakSet`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakSet) sind Datenstrukturen, deren APIs denen ihrer nicht schwachen Gegenstücke [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) stark ähneln. Mit `WeakMap` können Sie eine Sammlung von Schlüssel-Wert-Paaren verwalten, mit `WeakSet` eine Sammlung eindeutiger Werte. Beide ermöglichen ein effizientes Hinzufügen, Löschen und Abfragen.

Die Namen `WeakMap` und `WeakSet` beziehen sich auf das Konzept _schwach gehaltener_ Werte. Wenn `x` von `y` schwach gehalten wird, können Sie über `y` zwar auf den Wert von `x` zugreifen; der Mark-and-Sweep-Algorithmus betrachtet `x` jedoch nicht allein deshalb als erreichbar. Dafür muss es noch eine andere _starke Referenz_ auf `x` geben. Die meisten Datenstrukturen – abgesehen von den hier besprochenen – halten übergebene Objekte stark, damit diese jederzeit wieder abgerufen werden können. Schlüssel in `WeakMap` und `WeakSet` können von der Garbage Collection freigegeben werden, solange nichts anderes im Programm sie referenziert. Bei `WeakMap` können dann auch die zugehörigen Werte freigegeben werden. Dies wird durch zwei Eigenschaften ermöglicht:

- `WeakMap` und `WeakSet` können nur Objekte oder Symbole speichern. Der Grund dafür ist, dass nur Objekte von der Garbage Collection erfasst werden: Primitive Werte können jederzeit erneut erzeugt werden (das heißt, `1 === 1`, aber `{} !== {}`) und würden deshalb dauerhaft in der Sammlung verbleiben. [Registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) wie `Symbol.for("key")` können ebenfalls erneut abgerufen und daher nicht von der Garbage Collection freigegeben werden. Mit `Symbol("key")` erzeugte Symbole hingegen schon. [Bekannte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) wie `Symbol.iterator` gehören zu einer festen Menge und sind während der gesamten Programmlaufzeit eindeutig, ähnlich wie intrinsische Objekte, etwa `Array.prototype`. Daher sind auch sie als Schlüssel zulässig.
- `WeakMap` und `WeakSet` sind nicht iterierbar. So können Sie weder mit `Array.from(map.keys()).length` feststellen, welche Objekte noch existieren, noch auf einen beliebigen Schlüssel zugreifen, der andernfalls von der Garbage Collection freigegeben werden könnte. (Die Garbage Collection soll möglichst unbeobachtbar bleiben.)

In typischen Erklärungen zu `WeakMap` und `WeakSet` – wie der obigen – wird oft angedeutet, dass zuerst der Schlüssel freigegeben wird, wodurch anschließend auch der Wert freigegeben werden kann. Betrachten Sie jedoch den Fall, dass der Wert den Schlüssel referenziert:

```js
const wm = new WeakMap();
const key = {};
wm.set(key, { key });
// Now `key` cannot be garbage collected,
// because the value holds a reference to the key,
// and the value is strongly held in the map!
```

Würde `key` als tatsächliche Referenz gespeichert, entstünde eine zirkuläre Referenz. Dann könnten weder Schlüssel noch Wert von der Garbage Collection freigegeben werden, selbst wenn nichts anderes `key` referenziert. Denn würde `key` freigegeben, verwiese `value.key` zu einem bestimmten Zeitpunkt auf eine nicht mehr existierende Adresse, was unzulässig ist. Deshalb sind die Einträge von `WeakMap` und `WeakSet` keine gewöhnlichen Referenzen, sondern [Ephemerons](https://dl.acm.org/doi/pdf/10.1145/263700.263733), eine Erweiterung des Mark-and-Sweep-Verfahrens. [Barros et al.](https://www.jucs.org/jucs_14_21/eliminating_cycles_in_weak/jucs_14_21_3481_3497_barros.pdf) fassen den Algorithmus gut zusammen (Seite 4). Ein Absatz daraus, sinngemäß übersetzt:

> Ephemerons sind eine Verfeinerung schwacher Paare, bei denen weder der Schlüssel noch der Wert als schwach oder stark eingestuft werden kann. Die Erreichbarkeit des Schlüssels bestimmt die Erreichbarkeit des Werts, aber die Erreichbarkeit des Werts beeinflusst nicht die Erreichbarkeit des Schlüssels. […] Wenn die Garbage Collection Ephemerons unterstützt, läuft sie in drei statt in zwei Phasen ab (Markieren und Bereinigen).

Als vereinfachtes Modell können Sie sich eine `WeakMap` wie die folgende Implementierung vorstellen:

> [!WARNING]
> Dies ist kein Polyfill und entspricht auch nicht annähernd der Implementierung in einer Engine, die in den Garbage-Collection-Mechanismus eingebunden ist.

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

Wie Sie sehen, hält `MyWeakMap` selbst keine Sammlung von Schlüsseln vor. Stattdessen fügt es jedem übergebenen Objekt Metadaten hinzu. Das Objekt kann dann durch Mark-and-Sweep freigegeben werden. Deshalb ist es weder möglich, über die Schlüssel einer `WeakMap` zu iterieren, noch, die `WeakMap` vollständig zu leeren – auch dafür müsste die gesamte Schlüsselsammlung bekannt sein.

Weitere Informationen zu diesen APIs finden Sie im [Leitfaden zu schlüsselbasierten Sammlungen](/de/docs/Web/JavaScript/Guide/Keyed_collections).

### WeakRefs und FinalizationRegistry

> [!NOTE]
> `WeakRef` und `FinalizationRegistry` ermöglichen es, Vorgänge der Garbage Collection direkt zu beobachten. [Vermeiden Sie ihre Verwendung nach Möglichkeit](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#avoid_where_possible), da ihr Verhalten zur Laufzeit kaum garantiert ist.

Alle Variablen, deren Wert ein Objekt ist, enthalten eine Referenz auf dieses Objekt. Solche Referenzen sind jedoch _stark_: Solange sie bestehen, markiert der Garbage Collector das Objekt nicht zur Freigabe. Eine [`WeakRef`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef) ist eine _schwache Referenz_ auf ein Objekt. Sie ermöglicht es, den Inhalt des Objekts während seiner Lebensdauer auszulesen, ohne seine Freigabe durch die Garbage Collection zu verhindern.

Ein Anwendungsfall für `WeakRef` ist ein Cache, der String-URLs großen Objekten zuordnet. Dafür eignet sich `WeakMap` nicht, da eine `WeakMap` ihre _Schlüssel_ schwach hält, nicht aber ihre _Werte_. Wenn Sie auf einen Schlüssel zugreifen können, erhalten Sie daher zuverlässig den zugehörigen Wert, weil dieser durch die Existenz des Schlüssels erhalten bleibt. In diesem Fall ist es hingegen akzeptabel, für einen Schlüssel `undefined` zu erhalten, wenn der zugehörige Wert nicht mehr existiert: Er kann einfach neu berechnet werden. Gleichzeitig sollen nicht mehr erreichbare Objekte nicht im Cache verbleiben. Dafür lässt sich eine gewöhnliche `Map` verwenden, deren Werte jeweils eine `WeakRef` auf das betreffende Objekt statt des Objekts selbst sind.

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

[`FinalizationRegistry`](/de/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry) bietet eine noch weitergehende Möglichkeit, die Garbage Collection zu beobachten. Damit können Sie Objekte registrieren und eine Benachrichtigung erhalten, wenn sie freigegeben werden. Im oben beschriebenen Cache können beispielsweise die Blobs selbst freigegeben werden, während die `WeakRef`-Objekte, die auf sie verweisen, bestehen bleiben. Dadurch können sich mit der Zeit viele nutzlose Einträge in der `Map` ansammeln. Mit einer `FinalizationRegistry` lassen sich solche Einträge bereinigen.

```js
function cached(getter) {
  // A Map from string URLs to WeakRefs of results
  const cache = new Map();
  // After each value is garbage collected, the callback might
  // eventually be called with the key in the cache as argument,
  // allowing us to remove the cache entry
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
      // Note: there are no guarantees when (or even if) the registry's
      // callback will fire, so it is still possible to see a WeakRef in
      // the cache even if it is empty
      const dereferencedValue = cache.get(key).deref();
      if (dereferencedValue !== undefined) {
        return dereferencedValue;
      }
    }
    const value = await getter(key);
    cache.set(key, new WeakRef(value));
    registry.register(value, key);
    return value;
  };
}

const getImage = cached((url) => fetch(url).then((res) => res.blob()));
```

Aus Leistungs- und Sicherheitsgründen ist nicht garantiert, wann der Callback aufgerufen wird – oder ob er überhaupt aufgerufen wird. Er sollte daher nur für unkritische Bereinigungsaufgaben verwendet werden. Für eine verlässlichere Verwaltung von Ressourcen gibt es andere Möglichkeiten, etwa [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch), bei dem der `finally`-Block immer ausgeführt wird. `WeakRef` und `FinalizationRegistry` dienen ausschließlich dazu, die Speichernutzung langlebiger Programme zu optimieren.

Weitere Informationen zu den APIs von [`WeakRef`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef) und [`FinalizationRegistry`](/de/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry) finden Sie auf den jeweiligen Referenzseiten.
