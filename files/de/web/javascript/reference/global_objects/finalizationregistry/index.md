---
title: FinalizationRegistry
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Ein **`FinalizationRegistry`**-Objekt ermöglicht es Ihnen, einen Rückruf anzufordern, wenn ein Wert vom Garbage Collector entfernt wird.

## Beschreibung

`FinalizationRegistry` bietet eine Möglichkeit, zu beantragen, dass ein _Bereinigungsrückruf_ zu einem bestimmten Zeitpunkt erfolgt, wenn ein mit dem Verzeichnis registrierter Wert _wieder freigegeben_ wurde (vom Garbage Collector entfernt). (Bereinigungsrückrufe werden manchmal auch als _Finalizer_ bezeichnet.)

> [!NOTE]
> Bereinigungsrückrufe sollten nicht für die wesentliche Programmlogik verwendet werden. Siehe [Hinweise zu Bereinigungsrückrufen](#hinweise_zu_bereinigungsrückrufen) für Details.

Sie erstellen das Verzeichnis, indem Sie den Rückruf übergeben:

```js
const registry = new FinalizationRegistry((heldValue) => {
  // …
});
```

Dann registrieren Sie jeden Wert, für den Sie einen Bereinigungsrückruf wünschen, indem Sie die Methode `register` aufrufen und den Wert und einen _gehaltenen Wert_ dafür übergeben:

```js
registry.register(target, "some value");
```

Das Verzeichnis hält keine starke Referenz zum Wert, da dies den Zweck vereiteln würde (wenn das Verzeichnis ihn stark halten würde, würde der Wert niemals freigegeben werden). In JavaScript sind Objekte und [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) durch den Garbage Collector entsorgbar, sodass sie in einem `FinalizationRegistry`-Objekt als Ziel oder Token registriert werden können.

Wenn `target` freigegeben wird, kann Ihr Bereinigungsrückruf zu einem bestimmten Zeitpunkt mit dem von Ihnen dafür angegebenen _gehaltenen Wert_ (`"some value"` oben) aufgerufen werden. Der gehaltene Wert kann jeder beliebige Wert sein: ein primitiver Wert oder ein Objekt, sogar `undefined`. Wenn der gehaltene Wert ein Objekt ist, hält das Verzeichnis eine _starke_ Referenz darauf (damit es ihn später an Ihren Bereinigungsrückruf übergeben kann).

Wenn Sie später einen registrierten Zielwert abmelden möchten, übergeben Sie einen dritten Wert, der das _Abmeldungstoken_ ist, das Sie später verwenden werden, wenn Sie die `unregister`-Funktion des Verzeichnisses aufrufen, um den Wert abzumelden. Das Verzeichnis hält nur eine schwache Referenz zum Abmeldungstoken.

Es ist üblich, den Zielwert selbst als Abmeldungstoken zu verwenden, was völlig in Ordnung ist:

```js
registry.register(target, "some value", target);
// …

// some time later, if you don't care about `target` anymore, unregister it
registry.unregister(target);
```

Es muss jedoch nicht derselbe Wert sein; es kann ein anderer sein:

```js
registry.register(target, "some value", token);
// …

// some time later
registry.unregister(token);
```

### Vermeiden, wo möglich

Die korrekte Verwendung von `FinalizationRegistry` erfordert sorgfältige Überlegung und sollte nach Möglichkeit vermieden werden. Es ist auch wichtig, sich nicht auf bestimmte Verhaltensweisen zu verlassen, die nicht von der Spezifikation garantiert werden. Wann, wie und ob die Speicherbereinigung erfolgt, hängt von der Implementierung eines bestimmten JavaScript-Engines ab. Jedes Verhalten, das Sie in einem Engine beobachten, kann in einem anderen Engine, in einer anderen Version desselben Engines oder sogar in einer etwas anderen Situation mit derselben Version des selben Engines unterschiedlich sein. Speicherbereinigung ist ein schwieriges Problem, das die Implementierer von JavaScript-Engines ständig verbessern und optimieren.

Hier sind einige spezifische Punkte, die von den Autoren im [Vorschlag](https://github.com/tc39/proposal-weakrefs) aufgenommen wurden, der `FinalizationRegistry` eingeführt hat:

> [Garbage Collector](<https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)>) sind kompliziert. Wenn eine Anwendung oder Bibliothek darauf angewiesen ist, dass GC ein WeakRef aufräumt oder rechtzeitig und vorhersehbar einen Finalizer \[Bereinigungsrückruf] aufruft, wird sie wahrscheinlich enttäuscht sein: Die Bereinigung kann viel später als erwartet erfolgen oder überhaupt nicht. Quellen der Variabilität sind unter anderem:
>
> - Ein Objekt könnte viel früher als ein anderes Objekt durch den Garbage Collector entfernt werden, selbst wenn sie zur gleichen Zeit unerreichbar werden, z.B. aufgrund der generationalen Sammlung.
> - Speicherbereinigungsarbeiten können über die Zeit verteilt werden, indem inkrementelle und nebenläufige Techniken verwendet werden.
> - Verschiedene Laufzeit-Heuristiken können verwendet werden, um das Gleichgewicht zwischen Speichernutzung und Reaktionsfähigkeit zu finden.
> - Der JavaScript-Engine kann Verweise auf Dinge halten, die so aussehen, als wären sie unerreichbar (z.B. in Closures oder Inline-Caches).
> - Verschiedene JavaScript-Engines können diese Dinge unterschiedlich machen, oder derselbe Engine kann seine Algorithmen in verschiedenen Versionen ändern.
> - Komplexe Faktoren können dazu führen, dass Objekte für unerwartet lange Zeiträume erhalten bleiben, beispielsweise bei Verwendung mit bestimmten APIs.

### Hinweise zu Bereinigungsrückrufen

- Entwickler sollten sich nicht auf Bereinigungsrückrufe für wesentliche Programmlogik verlassen. Bereinigungsrückrufe können nützlich sein, um den Speicherverbrauch im Verlauf eines Programms zu reduzieren, sind aber wahrscheinlich nicht anderweitig nützlich.
- Wenn Ihr Code gerade einen Wert im Verzeichnis registriert hat, wird dieses Ziel erst am Ende des aktuellen JavaScript-[Jobs](https://tc39.es/ecma262/multipage/executable-code-and-execution-contexts.html#job) freigegeben. Siehe [Hinweise zu WeakRefs](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#notes_on_weakrefs) für Details.
- Eine konforme JavaScript-Implementierung, selbst wenn sie Speicherbereinigung durchführt, ist nicht verpflichtet, Bereinigungsrückrufe auszuführen. Wann und ob sie dies tut, liegt vollständig bei der Implementierung des JavaScript-Engines. Wenn ein registriertes Objekt freigegeben wird, können zugehörige Bereinigungsrückruf zu diesem Zeitpunkt oder einige Zeit später oder überhaupt nicht aufgerufen werden.
- Es ist wahrscheinlich, dass große Implementierungen Bereinigungsrückrufe zu einem bestimmten Zeitpunkt während der Ausführung aufrufen werden, aber diese Anrufe können wesentlich später erfolgen, nachdem das betreffende Objekt freigegeben wurde. Wenn ein Objekt in zwei Verzeichnissen registriert ist, gibt es keine Garantie dafür, dass die beiden Rückrufe nacheinander aufgerufen werden – einer kann aufgerufen werden und der andere niemals aufgerufen werden, oder der andere kann viel später aufgerufen werden.
- Es gibt auch Situationen, in denen selbst Implementierungen, die normalerweise Bereinigungsrückrufe ausführen, sie wahrscheinlich nicht aufrufen:
  - Wenn das JavaScript-Programm komplett heruntergefahren wird (z.B. beim Schließen eines Tabs in einem Browser).
  - Wenn die `FinalizationRegistry`-Instanz selbst nicht mehr von JavaScript-Code erreichbar ist.
- Wenn das Ziel eines `WeakRef` auch in einem `FinalizationRegistry` ist, wird das Ziel des `WeakRef` zur gleichen Zeit oder bevor ein mit dem Verzeichnis verbundener Bereinigungsrückruf aufgerufen wird, gelöscht; wenn Ihr Bereinigungsrückruf `deref` auf einem `WeakRef` für das Objekt aufruft, erhält er `undefined`.

## Konstruktor

- {{jsxref("FinalizationRegistry/FinalizationRegistry", "FinalizationRegistry()")}}
  - : Erstellt ein neues `FinalizationRegistry`-Objekt.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `FinalizationRegistry.prototype` definiert und werden von allen `FinalizationRegistry`-Instanzen gemeinsam genutzt.

- {{jsxref("Object/constructor", "FinalizationRegistry.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `FinalizationRegistry`-Instanzen ist der anfängliche Wert der {{jsxref("FinalizationRegistry/FinalizationRegistry", "FinalizationRegistry")}}-Konstruktor.
- `FinalizationRegistry.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"FinalizationRegistry"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("FinalizationRegistry.prototype.register()")}}
  - : Registriert ein Objekt im Verzeichnis, um einen Bereinigungsrückruf zu erhalten, wenn das Objekt vom Garbage Collector entfernt wird.
- {{jsxref("FinalizationRegistry.prototype.unregister()")}}
  - : Entfernt die Registrierung eines Objekts aus dem Verzeichnis.

## Beispiele

### Ein neues Verzeichnis erstellen

Sie erstellen das Verzeichnis, indem Sie den Rückruf übergeben:

```js
const registry = new FinalizationRegistry((heldValue) => {
  // …
});
```

### Objekte für die Bereinigung registrieren

Dann registrieren Sie alle Objekte, für die Sie einen Bereinigungsrückruf wünschen, indem Sie die Methode `register` aufrufen und das Objekt und einen _gehaltenen Wert_ dafür übergeben:

```js
registry.register(theObject, "some value");
```

### Rückrufe werden nie synchron aufgerufen

Egal wie viel Druck Sie auf den Garbage Collector ausüben, der Bereinigungsrückruf wird niemals synchron aufgerufen. Das Objekt kann synchron freigegeben werden, aber der Rückruf wird immer erst nach Abschluss des aktuellen Jobs aufgerufen:

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

Wenn Sie jedoch zwischen jeder Zuordnung eine kleine Pause einlegen, kann der Rückruf früher aufgerufen werden:

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

Es gibt keine Garantie dafür, dass der Rückruf früher aufgerufen wird oder überhaupt aufgerufen wird, aber es besteht die Möglichkeit, dass die geloggte Nachricht einen Zählerwert kleiner als 5000 hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("WeakRef")}}
- {{jsxref("WeakSet")}}
- {{jsxref("WeakMap")}}
