---
title: FinalizationRegistry
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Ein **`FinalizationRegistry`**-Objekt ermöglicht es Ihnen, einen Rückruf anzufordern, wenn ein Wert garbage-collected wird.

## Beschreibung

`FinalizationRegistry` bietet eine Möglichkeit, einen _Bereinigungsrückruf_ anzufordern, der irgendwann aufgerufen wird, wenn ein mit dem Register registrierter Wert _zurückgewonnen_ (garbage-collected) wurde. (Bereinigungsrückrufe werden manchmal auch _Finalizer_ genannt.)

> [!NOTE]
> Bereinigungsrückrufe sollten nicht für wesentliche Programmlogik verwendet werden. Siehe [Hinweise zu Bereinigungsrückrufen](#hinweise_zu_bereinigungsrückrufen) für Details.

Sie erstellen das Register, indem Sie den Rückruf übergeben:

```js
const registry = new FinalizationRegistry((heldValue) => {
  // …
});
```

Dann registrieren Sie jeden Wert, für den Sie einen Bereinigungsrückruf wünschen, indem Sie die `register`-Methode aufrufen und den Wert sowie einen _gehaltenen Wert_ dafür übergeben:

```js
registry.register(target, "some value");
```

Das Register hält keine starke Referenz auf den Wert, da dies den Zweck zunichtemachen würde (wenn das Register ihn stark hielte, würde der Wert niemals zurückgewonnen werden). In JavaScript sind Objekte und [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) garbage-collectable, sodass sie in einem `FinalizationRegistry`-Objekt als Ziel oder Token registriert werden können.

Wenn `target` zurückgewonnen wird, kann Ihr Bereinigungsrückruf möglicherweise irgendwann mit dem _gehaltenen Wert_ aufgerufen werden, den Sie dafür vorgesehen haben („some value“ oben). Der gehaltene Wert kann jeder beliebige Wert sein: ein primitiver Wert oder ein Objekt, sogar `undefined`. Wenn der gehaltene Wert ein Objekt ist, hält das Register eine _starke_ Referenz darauf (damit es ihn später an Ihren Bereinigungsrückruf übergeben kann).

Wenn Sie möglicherweise später einen registrierten Zielwert abmelden möchten, geben Sie einen dritten Wert an, der das _Abmeldungstoken_ ist, das Sie später verwenden werden, wenn Sie die `unregister`-Funktion des Registers aufrufen, um den Wert abzumelden. Das Register hält nur eine schwache Referenz auf das Abmeldungstoken.

Es ist üblich, den Zielwert selbst als Abmeldungstoken zu verwenden, was völlig in Ordnung ist:

```js
registry.register(target, "some value", target);
// …

// some time later, if you don't care about `target` anymore, unregister it
registry.unregister(target);
```

Es muss jedoch nicht der gleiche Wert sein; es kann ein anderer sein:

```js
registry.register(target, "some value", token);
// …

// some time later
registry.unregister(token);
```

### Wo möglich vermeiden

Die korrekte Verwendung von `FinalizationRegistry` erfordert sorgfältiges Nachdenken und sollte nach Möglichkeit vermieden werden. Es ist auch wichtig, sich nicht auf spezifische Verhaltensweisen zu verlassen, die nicht durch die Spezifikation garantiert sind. Wann, wie und ob Garbage Collection stattfindet, hängt von der Implementierung einer bestimmten JavaScript-Engine ab. Jedes beobachtete Verhalten in einer Engine kann in einer anderen Engine, in einer anderen Version der gleichen Engine oder sogar in einer leicht anderen Situation mit der gleichen Version der gleichen Engine anders sein. Garbage Collection ist ein schwieriges Problem, das JavaScript-Engine-Implementierer ständig verbessern und verfeinern.

Hier sind einige spezifische Punkte, die von den Autoren im [Vorschlag](https://github.com/tc39/proposal-weakrefs) enthalten sind, der `FinalizationRegistry` eingeführt hat:

> [Garbage Collectors](<https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)>) sind kompliziert. Wenn eine Anwendung oder Bibliothek darauf angewiesen ist, dass der GC ein WeakRef aufräumt oder einen Finalizer \[Bereinigungsrückruf] rechtzeitig und vorhersehbar aufruft, wird sie wahrscheinlich enttäuscht sein: Die Bereinigung kann viel später als erwartet erfolgen oder überhaupt nicht. Quellen der Variabilität sind unter anderem:
>
> - Ein Objekt kann viel früher garbage-collected werden als ein anderes, selbst wenn sie zur gleichen Zeit unerreichbar werden, z.B. aufgrund der stufenweisen Sammlung.
> - Garbage Collection-Arbeit kann über die Zeit mit inkrementellen und parallelen Techniken aufgeteilt werden.
> - Verschiedene Laufzeitheuristiken können verwendet werden, um Speicherverbrauch und Reaktionsfähigkeit auszugleichen.
> - Die JavaScript-Engine kann Referenzen auf Dinge halten, die unerreichbar erscheinen (z.B. in Closures oder Inline-Caches).
> - Verschiedene JavaScript-Engines können diese Dinge unterschiedlich handhaben, oder dieselbe Engine kann ihre Algorithmen über Versionen hinweg ändern.
> - Komplexe Faktoren können dazu führen, dass Objekte für unerwartet lange Zeit erhalten bleiben, z.B. bei der Verwendung mit bestimmten APIs.

### Hinweise zu Bereinigungsrückrufen

- Entwickler sollten sich nicht auf Bereinigungsrückrufe für wesentliche Programmlogik verlassen. Bereinigungsrückrufe können nützlich sein, um den Speicherverbrauch im Verlauf eines Programms zu reduzieren, sind jedoch ansonsten wahrscheinlich nicht nützlich.
- Wenn Ihr Code gerade einen Wert im Register registriert hat, wird dieses Ziel nicht zurückgewonnen, bis das aktuelle JavaScript-[Job](https://tc39.es/ecma262/multipage/executable-code-and-execution-contexts.html#job) abgeschlossen ist. Siehe [Hinweise zu WeakRefs](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#notes_on_weakrefs) für Details.
- Eine konforme JavaScript-Implementierung, selbst eine, die Garbage Collection durchführt, ist nicht verpflichtet, Bereinigungsrückrufe aufzurufen. Wann und ob dies geschieht, hängt vollständig von der Implementierung der JavaScript-Engine ab. Wenn ein registriertes Objekt zurückgewonnen wird, können alle Bereinigungsrückrufe dafür dann, später oder gar nicht aufgerufen werden.
- Es ist wahrscheinlich, dass Hauptimplementierungen Bereinigungsrückrufe irgendwann während der Ausführung aufrufen werden, aber diese Anrufe können wesentlich nach dem Zeitpunkt erfolgen, zu dem das zugehörige Objekt zurückgewonnen wurde. Wenn ein Objekt in zwei Registern registriert ist, gibt es keine Garantie dafür, dass die beiden Rückrufe direkt hintereinander aufgerufen werden – einer kann aufgerufen werden und der andere nie, oder der andere kann viel später aufgerufen werden.
- Es gibt auch Situationen, in denen selbst Implementierungen, die normalerweise Bereinigungsrückrufe ausführen, dies wahrscheinlich nicht tun:
  - Wenn das JavaScript-Programm vollständig heruntergefahren wird (zum Beispiel beim Schließen eines Tabs im Browser).
  - Wenn die Instanz von `FinalizationRegistry` selbst dem JavaScript-Code nicht mehr zugänglich ist.
- Wenn das Ziel eines `WeakRef` sich auch in einem `FinalizationRegistry` befindet, wird das Ziel des `WeakRef` gleichzeitig oder vor jedem mit dem Register verbundenen Bereinigungsrückruf gelöscht; wenn Ihr Bereinigungsrückruf `deref` auf einem `WeakRef` für das Objekt aufruft, wird er `undefined` erhalten.

## Konstruktor

- {{jsxref("FinalizationRegistry/FinalizationRegistry", "FinalizationRegistry()")}}
  - : Erstellt ein neues `FinalizationRegistry`-Objekt.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `FinalizationRegistry.prototype` definiert und werden von allen `FinalizationRegistry`-Instanzen geteilt.

- {{jsxref("Object/constructor", "FinalizationRegistry.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `FinalizationRegistry`-Instanzen ist der anfängliche Wert der {{jsxref("FinalizationRegistry/FinalizationRegistry", "FinalizationRegistry")}} Konstruktor.
- `FinalizationRegistry.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"FinalizationRegistry"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("FinalizationRegistry.prototype.register()")}}
  - : Registriert ein Objekt im Register, um einen Bereinigungsrückruf zu erhalten, wenn/wenn das Objekt garbage-collected wird.
- {{jsxref("FinalizationRegistry.prototype.unregister()")}}
  - : Meldet ein Objekt vom Register ab.

## Beispiele

### Ein neues Register erstellen

Sie erstellen das Register, indem Sie den Rückruf übergeben:

```js
const registry = new FinalizationRegistry((heldValue) => {
  // …
});
```

### Objekte zur Bereinigung registrieren

Dann registrieren Sie alle Objekte, für die Sie einen Bereinigungsrückruf möchten, indem Sie die `register`-Methode aufrufen und das Objekt sowie einen _gehaltenen Wert_ dafür übergeben:

```js
registry.register(theObject, "some value");
```

### Rückrufe werden nie synchron aufgerufen

Egal wie viel Druck Sie auf den Garbage Collector ausüben, der Bereinigungsrückruf wird niemals synchron aufgerufen. Das Objekt kann synchron zurückgewonnen werden, aber der Rückruf wird immer irgendwann nach Abschluss des aktuellen Jobs aufgerufen:

```js
let counter = 0;
const registry = new FinalizationRegistry(() => {
  console.log(`Array gets garbage collected at ${counter}`);
});

registry.register(["foo"]);

(function allocateMemory() {
  // Allocate 50000 functions — a lot of memory!
  Array.from({ length: 50000 }, () => () => {});
  if (counter > 5000) return;
  counter++;
  allocateMemory();
})();

console.log("Main job ends");
// Logs:
// Main job ends
// Array gets garbage collected at 5001
```

Jedoch, wenn Sie eine kleine Pause zwischen jeder Zuweisung erlauben, kann der Rückruf möglicherweise früher aufgerufen werden:

```js
let arrayCollected = false;
let counter = 0;
const registry = new FinalizationRegistry(() => {
  console.log(`Array gets garbage collected at ${counter}`);
  arrayCollected = true;
});

registry.register(["foo"]);

(function allocateMemory() {
  // Allocate 50000 functions — a lot of memory!
  Array.from({ length: 50000 }, () => () => {});
  if (counter > 5000 || arrayCollected) return;
  counter++;
  // Use setTimeout to make each allocateMemory a different job
  setTimeout(allocateMemory);
})();

console.log("Main job ends");
```

Es gibt keine Garantie, dass der Rückruf früher aufgerufen wird oder ob er überhaupt aufgerufen wird, aber es besteht die Möglichkeit, dass die protokollierte Nachricht einen Zählerwert kleiner als 5000 hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("WeakRef")}}
- {{jsxref("WeakSet")}}
- {{jsxref("WeakMap")}}
