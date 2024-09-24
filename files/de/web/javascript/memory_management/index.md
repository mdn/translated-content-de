---
title: Speicherverwaltung
slug: Web/JavaScript/Memory_management
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{jsSidebar("Advanced")}}

Niedrigstufige Sprachen wie C haben manuelle Speicherverwaltungsprimitiven wie [`malloc()`](https://pubs.opengroup.org/onlinepubs/009695399/functions/malloc.html) und [`free()`](https://en.wikipedia.org/wiki/C_dynamic_memory_allocation#Overview_of_functions). Im Gegensatz dazu weist JavaScript automatisch Speicher zu, wenn Objekte erstellt werden, und gibt diesen frei, wenn sie nicht mehr verwendet werden (_Garbage-Collection_). Diese Automatisierung kann eine potenzielle Quelle für Verwirrung sein: Sie kann Entwicklern den falschen Eindruck vermitteln, dass sie sich nicht um die Speicherverwaltung kümmern müssen.

## Speicherlebenszyklus

Unabhängig von der Programmiersprache ist der Speicherlebenszyklus meist derselbe:

1. Weisen Sie den benötigten Speicher zu
2. Nutzen Sie den zugewiesenen Speicher (lesen, schreiben)
3. Geben Sie den zugewiesenen Speicher frei, wenn er nicht mehr benötigt wird

Der zweite Teil ist in allen Sprachen explizit. Die ersten und letzten Teile sind in niedrigstufigen Sprachen explizit, aber in hochstufigen Sprachen wie JavaScript größtenteils implizit.

### Speicherzuweisung in JavaScript

#### Wertinitialisierung

Um den Programmierer nicht mit Speicherzuweisungen zu belasten, weist JavaScript automatisch Speicher zu, wenn Werte initial deklariert werden.

```js
const n = 123; // weist Speicher für eine Zahl zu
const s = "azerty"; // weist Speicher für einen String zu

const o = {
  a: 1,
  b: null,
}; // weist Speicher für ein Objekt und enthaltene Werte zu

// (wie Objekt) weist Speicher für das Array und
// enthaltene Werte zu
const a = [1, null, "abra"];

function f(a) {
  return a + 2;
} // weist eine Funktion zu (die ein aufrufbares Objekt ist)

// Funktionausdrücke weisen ebenfalls ein Objekt zu
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
const d = new Date(); // weist ein Date-Objekt zu

const e = document.createElement("div"); // weist ein DOM-Element zu
```

Einige Methoden weisen neue Werte oder Objekte zu:

```js
const s = "azerty";
const s2 = s.substr(0, 3); // s2 ist ein neuer String
// Da Strings unveränderliche Werte sind,
// kann JavaScript entscheiden, keinen Speicher zuzuweisen,
// sondern nur den Bereich [0, 3] zu speichern.

const a = ["ouais ouais", "nan nan"];
const a2 = ["generation", "nan nan"];
const a3 = a.concat(a2);
// neues Array mit 4 Elementen,
// die die Verkettung der Elemente von a und a2 sind.
```

### Verwendung von Werten

Die Verwendung von Werten bedeutet im Wesentlichen das Lesen und Schreiben im zugewiesenen Speicher. Dies kann durch das Lesen oder Schreiben des Werts einer Variable oder einer Objekteigenschaft oder sogar durch das Übergeben eines Arguments an eine Funktion erfolgen.

### Freigabe, wenn der Speicher nicht mehr benötigt wird

Die meisten Probleme in der Speicherverwaltung treten in dieser Phase auf. Der schwierigste Aspekt dieser Phase ist es, zu bestimmen, wann der zugewiesene Speicher nicht mehr benötigt wird.

Niedrigstufige Sprachen erfordern, dass der Entwickler manuell bestimmt, an welchem Punkt im Programm der zugewiesene Speicher nicht mehr benötigt wird, und ihn freigibt.

Einige hochstufige Sprachen wie JavaScript nutzen eine Form der automatischen Speicherverwaltung, die als [Garbage-Collection](<https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)>) (GC) bekannt ist. Der Zweck eines Garbage Collectors ist es, den Speicherverbrauch zu überwachen und zu bestimmen, wann ein zugewiesener Speicherblock nicht mehr benötigt wird, und ihn zurückzufordern. Dieser automatische Prozess ist eine Annäherung, da das allgemeine Problem, festzustellen, ob ein bestimmter Speicher noch benötigt wird, [unentscheidbar](https://en.wikipedia.org/wiki/Decidability_%28logic%29) ist.

## Garbage-Collection

Wie oben erwähnt, ist das allgemeine Problem, automatisch zu erkennen, ob ein Speicher "nicht mehr benötigt wird," unentscheidbar. Folglich implementieren Garbage-Collector eine Einschränkung einer Lösung für das allgemeine Problem. Dieser Abschnitt erklärt die Konzepte, die notwendig sind, um die Hauptalgorithmen der Garbage-Collection und deren jeweilige Einschränkungen zu verstehen.

### Referenzen

Das Hauptkonzept, auf das sich Garbage-Collection-Algorithmen stützen, ist das Konzept der _Referenz_. Im Kontext der Speicherverwaltung sagt man, dass ein Objekt ein anderes Objekt referenziert, wenn das erstgenannte auf das zweite zugreifen kann (sei es implizit oder explizit). Beispielsweise hat ein JavaScript-Objekt eine Referenz auf seinen [Prototyp](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) (implizite Referenz) und auf die Werte seiner Eigenschaften (explizite Referenz).

In diesem Kontext wird der Begriff "Objekt" zu etwas erweitert, das breiter ist als reguläre JavaScript-Objekte und auch Funktionsbereiche (oder den globalen lexikalischen Bereich) enthält.

### Reference-Counting-Garbage-Collection

> [!NOTE]
> Kein moderner JavaScript-Engine verwendet mehr Reference-Counting für die Garbage-Collection.

Dies ist der einfachste Garbage-Collection-Algorithmus. Dieser Algorithmus reduziert das Problem von der Feststellung, ob ein Objekt noch benötigt wird, auf die Feststellung, ob ein Objekt noch von einem anderen Objekt referenziert wird. Ein Objekt gilt als "Garbage" oder als sammelbar, wenn es keine Referenzen mehr darauf gibt.

Zum Beispiel:

```js
let x = {
  a: {
    b: 2,
  },
};
// 2 Objekte werden erstellt. Eins wird von dem anderen als eine seiner Eigenschaften referenziert.
// Das andere wird durch die Zuweisung zur Variable 'x' referenziert.
// Offensichtlich kann keines von beiden Garbage-Collected werden.

let y = x;
// Die Variable 'y' ist das zweite Element, das eine Referenz auf das Objekt hat.

x = 1;
// Jetzt hat das ursprünglich in 'x' befindliche Objekt eine eindeutige Referenz,
// verkörpert durch die Variable 'y'.

let z = y.a;
// Referenz zur Eigenschaft 'a' des Objekts.
// Dieses Objekt hat jetzt 2 Referenzen: eine als Eigenschaft,
// die andere als Variable 'z'.

y = "mozilla";
// Das ursprünglich in 'x' befindliche Objekt hat jetzt null
// Referenzen darauf. Es kann Garbage-Collectet werden.
// Seine Eigenschaft 'a' wird jedoch immer noch durch
// die Variable 'z' referenziert, daher kann es nicht frei gegeben werden.

z = null;
// Die Eigenschaft 'a' des ursprünglich in x befindlichen Objekts
// hat null Referenzen darauf. Es kann Garbage-Collectet werden.
```

Es gibt eine Einschränkung in Bezug auf zyklische Referenzen. Im folgenden Beispiel werden zwei Objekte erstellt, deren Eigenschaften sich gegenseitig referenzieren und somit einen Zyklus bilden. Sie werden aus dem Gültigkeitsbereich entfernt, nachdem der Funktionsaufruf abgeschlossen ist. Zu diesem Zeitpunkt werden sie nicht mehr benötigt, und ihr zugewiesener Speicher soll freigegeben werden. Der Reference-Counting-Algorithmus wird sie jedoch nicht als freigabebereit betrachten, da jedes der beiden Objekte mindestens eine Referenz darauf hat, sodass keines von ihnen zur Garbage-Collection markiert wird. Zyklische Referenzen sind eine häufige Ursache für Speicherlecks.

```js
function f() {
  const x = {};
  const y = {};
  x.a = y; // x referenziert y
  y.a = x; // y referenziert x

  return "azerty";
}

f();
```

### Mark-and-Sweep-Algorithmus

Dieser Algorithmus reduziert die Definition von "ein Objekt wird nicht mehr benötigt" auf "ein Objekt ist nicht erreichbar".

Dieser Algorithmus setzt das Wissen über einen Satz von Objekten voraus, die _Wurzeln_ genannt werden. In JavaScript ist die Wurzel das globale Objekt. Periodisch startet der Garbage-Collector von diesen Wurzeln aus, findet alle Objekte, auf die von diesen Wurzeln aus verwiesen wird, und dann alle Objekte, auf die wiederum von diesen aus verwiesen wird, usw. Beginnend bei den Wurzeln findet der Garbage-Collector somit alle _erreichbaren_ Objekte und sammelt alle nicht erreichbaren Objekte.

Dieser Algorithmus ist eine Verbesserung gegenüber dem vorherigen, da ein Objekt mit null Referenzen effektiv nicht erreichbar ist. Das Gegenteil gilt nicht, wie wir bei zyklischen Referenzen gesehen haben.

Derzeit liefern alle modernen Engines einen Mark-and-Sweep-Garbage-Collector aus. Alle Verbesserungen im Bereich der JavaScript-Garbage-Collection (generational/incremental/concurrent/parallel garbage collection) in den letzten Jahren sind Implementierungsverbesserungen dieses Algorithmus, aber keine Verbesserungen des Garbage-Collection-Algorithmus selbst oder seiner Definition, wann "ein Objekt nicht mehr benötigt wird".

Der unmittelbare Vorteil dieses Ansatzes ist, dass Zyklen kein Problem mehr sind. Im ersten obigen Beispiel, nachdem der Funktionsaufruf zurückgekehrt ist, wird keines der beiden Objekte mehr von einer Ressource referenziert, die vom globalen Objekt aus erreichbar ist. Folglich werden sie vom Garbage-Collector als nicht erreichbar erkannt und ihr zugewiesener Speicher wird zurückgefordert.

Jedoch bleibt die Unfähigkeit bestehen, die Garbage-Collection manuell zu steuern. Es gibt Zeiten, in denen es praktisch wäre, manuell zu entscheiden, wann und welcher Speicher freigegeben wird. Um den Speicher eines Objekts freizugeben, muss es ausdrücklich unerreichbar gemacht werden. Es ist auch nicht möglich, die Garbage-Collection programmgesteuert in JavaScript auszulösen – und es wird wahrscheinlich nie innerhalb der Kernsprache verfügbar sein, auch wenn Engines möglicherweise APIs hinter Opt-in-Flags exponieren.

## Konfiguration des Speicher-Modells einer Engine

JavaScript-Engines bieten typischerweise Flags, die das Speicher-Modell exponieren. Zum Beispiel bietet Node.js zusätzliche Optionen und Werkzeuge, die die zugrunde liegenden V8-Mechanismen zur Konfiguration und Fehlerbehebung von Speicherproblemen freilegen. Diese Konfiguration ist möglicherweise in Browsern nicht verfügbar, und noch weniger für Webseiten (über HTTP-Header usw.).

Der maximale verfügbare Heapspeicher kann mit einem Flag erhöht werden:

```bash
node --max-old-space-size=6000 index.js
```

Wir können auch den Garbage-Collector zum Debuggen von Speicherproblemen mit einem Flag und dem [Chrome Debugger](https://nodejs.org/en/learn/getting-started/debugging) exponieren:

```bash
node --expose-gc --inspect index.js
```

## Datenstrukturen, die bei der Speicherverwaltung helfen

Obwohl JavaScript die Garbage-Collector-API nicht direkt freilegt, bietet die Sprache mehrere Datenstrukturen, die die Garbage-Collection indirekt beobachten und zur Verwaltung der Speichernutzung verwendet werden können.

### WeakMaps und WeakSets

[`WeakMap`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) und [`WeakSet`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakSet) sind Datenstrukturen, deren APIs eng ihre nicht-weak Gegenstücke widerspiegeln: [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set). `WeakMap` ermöglicht es Ihnen, eine Sammlung von Schlüssel-Wert-Paaren zu pflegen, während `WeakSet` es Ihnen ermöglicht, eine Sammlung eindeutiger Werte zu pflegen, beide mit leistungsstarker Hinzufügung, Löschung und Abfrage.

`WeakMap` und `WeakSet` erhielten ihren Namen vom Konzept der _schwach gehaltenen_ Werte. Wenn `x` schwach von `y` gehalten wird, bedeutet dies, dass Sie zwar über `y` auf den Wert von `x` zugreifen können, der Mark-and-Sweep-Algorithmus `x` jedoch nicht als erreichbar betrachtet, wenn nichts anderes _stark_ darauf verweist. Die meisten Datenstrukturen, mit Ausnahme der hier besprochenen, halten die übergebenen Objekte so stark fest, dass Sie sie jederzeit abrufen können. Die Schlüssel von `WeakMap` und `WeakSet` können vom Garbage-Collector gesammelt werden (für `WeakMap`-Objekte würden dann auch die Werte zur Garbage Collection in Betracht kommen), solange nichts anderes im Programm auf den Schlüssel verweist. Dies wird durch zwei Merkmale sichergestellt:

- `WeakMap` und `WeakSet` können nur Objekte oder Symbole speichern. Das liegt daran, dass nur Objekte Garbage-Collectet werden — primitive Werte können immer gefälscht werden (d. h. `1 === 1`, aber `{} !== {}`), was bedeutet, dass sie für immer in der Sammlung bleiben. [Registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) (wie `Symbol.for("key")`) können ebenfalls gefälscht werden und sind daher nicht Garbage-Collectet, aber Symbole, die mit `Symbol("key")` erstellt wurden, sind Garbage-Collectet. [Bekannte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) wie `Symbol.iterator` sind in einem festen Satz vorhanden und sind während der gesamten Laufzeit des Programms einzigartig, ähnlich wie intrinsische Objekte wie `Array.prototype`, daher sind sie auch als Schlüssel erlaubt.
- `WeakMap` und `WeakSet` sind nicht iterierbar. Dadurch wird verhindert, dass Sie `Array.from(map.keys()).length` verwenden, um die Lebendigkeit von Objekten zu beobachten oder einen beliebigen Schlüssel zu erhalten, der ansonsten für die Garbage-Collection in Frage kommen sollte. (Garbage-Collection sollte so unsichtbar wie möglich sein.)

In typischen Erklärungen von `WeakMap` und `WeakSet` (wie oben) wird oft impliziert, dass der Schlüssel zuerst Garbage-Collectet wird, wodurch auch der Wert zur Garbage Collection freigegeben wird. Beachten Sie jedoch den Fall, wenn der Wert den Schlüssel referenziert:

```js
const wm = new WeakMap();
const key = {};
wm.set(key, { key });
// Jetzt kann `key` nicht Garbage-Collectet werden,
// weil der Wert eine Referenz auf den Schlüssel hält,
// und der Wert stark in der Karte gehalten wird!
```

Wenn `key` als tatsächliche Referenz gespeichert wäre, würde es eine zyklische Referenz erzeugen und sowohl der Schlüssel als auch der Wert wären nicht für die Garbage Collection qualifiziert, selbst wenn nichts anderes `key` referenziert — denn wenn `key` Garbage-Collectet wird, bedeutet das, dass zu einem bestimmten Zeitpunkt `value.key` auf eine nicht existierende Adresse zeigen würde, was nicht legal ist. Um dies zu beheben, sind die Einträge von `WeakMap` und `WeakSet` keine tatsächlichen Referenzen, sondern [Ephemerons](https://dl.acm.org/doi/pdf/10.1145/263700.263733), eine Erweiterung des Mark-and-Sweep-Mechanismus. [Barros et al.](https://www.jucs.org/jucs_14_21/eliminating_cycles_in_weak/jucs_14_21_3481_3497_barros.pdf) bieten eine gute Zusammenfassung des Algorithmus (Seite 4). Um einen Absatz zu zitieren:

> Ephemerons sind eine Verfeinerung schwacher Paare, bei der weder der Schlüssel noch der Wert als schwach oder stark klassifiziert werden können. Die Konnektivität des Schlüssels bestimmt die Konnektivität des Werts, aber die Konnektivität des Werts beeinflusst nicht die Konnektivität des Schlüssels. [...] wenn die Garbage Collection Unterstützung für Ephemerons bietet, erfolgt dies in drei Phasen statt in zwei (Markieren und Löschen).

Als grobes mentales Modell, denken Sie an eine `WeakMap` als die folgende Implementierung:

> [!WARNING]
> Dies ist kein Polyfill und kommt der Art und Weise, wie es in der Engine implementiert ist (die in den Garbage-Collection-Mechanismus eingehakt ist), nicht nahe.

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

Wie Sie sehen können, hält die `MyWeakMap` tatsächlich keine Sammlung von Schlüsseln. Sie fügt jedem übergebenen Objekt einfach Metadaten hinzu. Das Objekt kann dann durch Mark-and-Sweep garbage-collectet werden. Daher ist es nicht möglich, über die Schlüssel in einer `WeakMap` zu iterieren oder die `WeakMap` zu leeren (da das auch auf dem Wissen über die gesamte Schlüsselsammlung beruht).

Für weitere Informationen über ihre APIs sehen Sie sich den [Leitfaden für Keyed Collections](/de/docs/Web/JavaScript/Guide/Keyed_collections) an.

### WeakRefs und FinalizationRegistry

> **Hinweis:** `WeakRef` und `FinalizationRegistry` bieten direkte Einsichten in den Garbage-Collection-Mechanismus. [Vermeiden Sie deren Verwendung, wo möglich](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#avoid_where_possible), da die Laufzeitsemantik nahezu vollkommen ungarantiert ist.

Alle Variablen mit einem Objekt als Wert sind Referenzen auf dieses Objekt. Solche Referenzen sind jedoch _stark_ — ihre Existenz würde den Garbage-Collector daran hindern, das Objekt als zur Sammlung berechtigt zu markieren. Ein [`WeakRef`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef) ist eine _schwache Referenz_ auf ein Objekt, die es erlaubt, dass das Objekt Garbage-Collectet wird, während die Möglichkeit, den Inhalt des Objekts während seiner Lebensdauer zu lesen, dennoch erhalten bleibt.

Ein Anwendungsfall für `WeakRef` ist ein Caching-System, das String-URLs großen Objekten zuordnet. Wir können hierfür keine `WeakMap` verwenden, weil `WeakMap`-Objekte ihre _Schlüssel_ schwach halten, nicht aber ihre _Werte_ — wenn Sie auf einen Schlüssel zugreifen, würden Sie deterministisch den Wert erhalten (da der Zugriff auf den Schlüssel bedeutet, dass er noch lebt). Hier sind wir einverstanden, `undefined` für einen Schlüssel zu erhalten (wenn der entsprechende Wert nicht mehr lebt), da wir ihn einfach neu berechnen können, aber wir wollen nicht, dass unerreichbare Objekte im Cache bleiben. In diesem Fall können wir eine normale `Map` verwenden, jedoch mit jedem Wert als `WeakRef` des Objekts anstelle des tatsächlichen Objektwertes.

```js
function cached(getter) {
  // Eine Map von Zeichenfolgen-URLs zu WeakRefs von Ergebnissen
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

[`FinalizationRegistry`](/de/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry) bietet einen noch stärkeren Mechanismus, um die Garbage-Collection zu beobachten. Es ermöglicht Ihnen, Objekte zu registrieren und benachrichtigt zu werden, wenn sie Garbage-Collectet werden. Zum Beispiel, für das weiter oben gezeigte Caching-System, auch wenn die Blobs selbst zur Sammlung frei gegeben werden, sind die `WeakRef`-Objekte, die sie halten, dies nicht — und im Laufe der Zeit kann die `Map` viele nutzlose Einträge ansammeln. Die Verwendung einer `FinalizationRegistry` erlaubt es einem, in diesem Fall Aufräumarbeiten durchzuführen.

```js
function cached(getter) {
  // Eine Map von Zeichenfolgen-URLs zu WeakRefs von Ergebnissen
  const cache = new Map();
  // Jedes Mal, nachdem ein Wert freigegeben wurde, wird der Callback
  // mit dem Schlüssel im Cache als Argument aufgerufen, sodass wir den
  // Cache-Eintrag entfernen können
  const registry = new FinalizationRegistry((key) => {
    // Hinweis: es ist wichtig zu überprüfen, dass die WeakRef tatsächlich leer ist.
    // Andernfalls könnte der Callback aufgerufen werden, nachdem ein neues Objekt mit diesem Schlüssel hinzugefügt wurde,
    // und dieses neue, lebendige Objekt wird gelöscht
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

Aufgrund von Leistungs- und Sicherheitsbedenken gibt es keine Garantie, wann der Callback aufgerufen wird, oder ob er überhaupt aufgerufen wird. Er sollte nur zur Aufräumarbeiten — und nicht-kritischen Aufräumarbeiten — verwendet werden. Es gibt andere Möglichkeiten für eine deterministischere Ressourcenverwaltung, wie z. B. [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch), das den `finally`-Block immer ausführen wird. `WeakRef` und `FinalizationRegistry` existieren ausschließlich zur Optimierung der Speichernutzung in langlaufenden Programmen.

Für weitere Informationen über die API von [`WeakRef`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef) und [`FinalizationRegistry`](/de/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry), siehe deren Referenzseiten.
