---
title: FinalizationRegistry
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Ein **`FinalizationRegistry`**-Objekt ermöglicht es Ihnen, einen Rückruf anzufordern, wenn ein Wert vom Garbage Collector eingesammelt wird.

## Beschreibung

`FinalizationRegistry` bietet eine Möglichkeit, anzufordern, dass ein _Bereinigungs-Rückruf_ zu einem bestimmten Zeitpunkt aufgerufen wird, wenn ein im Registry registrierter Wert _zurückgewonnen_ (durch den Garbage Collector eingesammelt) wurde. (Bereinigungs-Rückrufe werden manchmal _Finalisierer_ genannt.)

> [!NOTE]
> Bereinigungs-Rückrufe sollten nicht für wesentliche Programmlogik verwendet werden. Siehe [Anmerkungen zu Bereinigungs-Rückrufen](#anmerkungen_zu_bereinigungs-rückrufen) für Details.

Sie erstellen die Registry, indem Sie den Rückruf übergeben:

```js
const registry = new FinalizationRegistry((heldValue) => {
  // …
});
```

Dann registrieren Sie jeden Wert, für den Sie einen Bereinigungs-Rückruf wünschen, indem Sie die Methode `register` aufrufen und den Wert sowie einen _gehaltenen Wert_ dafür übergeben:

```js
registry.register(target, "some value");
```

Die Registry hält keine starke Referenz auf den Wert, da dies den Zweck vereiteln würde (wenn die Registry ihn stark hielte, würde der Wert niemals zurückgewonnen werden). In JavaScript sind Objekte und [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) durch den Garbage Collector einsammelbar, daher können sie in einem `FinalizationRegistry`-Objekt als Ziel oder Token registriert werden.

Wenn `target` zurückgewonnen wird, kann Ihr Bereinigungs-Rückruf zu einem bestimmten Zeitpunkt mit dem _gehaltenen Wert_ aufgerufen werden, den Sie dafür bereitgestellt haben („some value“ im obigen Beispiel). Der gehaltene Wert kann ein beliebiger Wert sein: ein primitiver Wert oder ein Objekt, sogar `undefined`. Wenn der gehaltene Wert ein Objekt ist, hält die Registry eine _starke_ Referenz darauf (damit sie ihn später an Ihren Bereinigungs-Rückruf übergeben kann).

Falls Sie möglicherweise später einen registrierten Zielwert abmelden möchten, übergeben Sie einen dritten Wert, das sogenannte _Abmeldetoken_, das Sie später verwenden werden, wenn Sie die Funktion `unregister` der Registry aufrufen, um den Wert abzumelden. Die Registry hält nur eine schwache Referenz auf das Abmeldetoken.

Es ist üblich, den Zielwert selbst als Abmeldetoken zu verwenden, was völlig in Ordnung ist:

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

Die korrekte Verwendung von `FinalizationRegistry` erfordert sorgfältiges Überlegen, und es ist am besten, sie zu vermeiden, wenn möglich. Es ist auch wichtig, sich nicht auf spezifische Verhaltensweisen zu verlassen, die von der Spezifikation nicht garantiert werden. Wann, wie und ob eine Speicherbereinigung erfolgt, hängt von der Implementierung einer bestimmten JavaScript-Engine ab. Ein Verhalten, das Sie in einer Engine beobachten, kann in einer anderen Engine, in einer anderen Version derselben Engine oder sogar in einer etwas anderen Situation mit derselben Version derselben Engine unterschiedlich sein. Die Speicherbereinigung ist ein schwieriges Problem, an dem Implementierer von JavaScript-Engines ständig arbeiten, um ihre Lösungen zu verfeinern und zu verbessern.

Hier sind einige spezielle Punkte, die von den Autoren im [Vorschlag](https://github.com/tc39/proposal-weakrefs) aufgenommen wurden, der `FinalizationRegistry` eingeführt hat:

> [Garbage Collector](https://de.wikipedia.org/wiki/Speicherbereinigung) sind kompliziert. Wenn eine Anwendung oder Bibliothek davon abhängig ist, dass die GC eine `WeakRef` rechtzeitig und vorhersehbar bereinigt oder einen Finalisierer \[Bereinigungs-Rückruf] aufruft, wird sie wahrscheinlich enttäuscht: Die Bereinigung kann viel später geschehen als erwartet, oder überhaupt nicht. Quellen der Variabilität umfassen:
>
> - Ein Objekt könnte viel früher eingesammelt werden als ein anderes, selbst wenn sie gleichzeitig unerreichbar werden, z.B. aufgrund von Generationensammlung.
> - Die Arbeit der Speicherbereinigung kann über die Zeit hinweg mit inkrementellen und parallelen Techniken aufgeteilt werden.
> - Verschiedene Laufzeit-Heuristiken können verwendet werden, um den Speicherverbrauch und die Reaktionsfähigkeit auszugleichen.
> - Die JavaScript-Engine kann Referenzen auf Dinge halten, die so aussehen, als wären sie unerreichbar (z.B. in Closures oder Inline-Caches).
> - Verschiedene JavaScript-Engines können diese Dinge unterschiedlich handhaben, oder dieselbe Engine kann ihre Algorithmen über Versionen hinweg ändern.
> - Komplexe Faktoren können dazu führen, dass Objekte für unerwartet lange Zeit erhalten bleiben, wie etwa die Verwendung mit bestimmten APIs.

### Anmerkungen zu Bereinigungs-Rückrufen

- Entwickler sollten sich nicht auf Bereinigungs-Rückrufe für wesentliche Programmlogik verlassen. Bereinigungs-Rückrufe können nützlich sein, um den Speicherverbrauch im Verlauf eines Programms zu reduzieren, sind aber ansonsten wahrscheinlich nicht nützlich.
- Wenn Ihr Code gerade erst einen Wert in die Registry registriert hat, wird dieses Ziel nicht zurückgewonnen, bevor das Ende des aktuellen JavaScript-[Jobs](https://tc39.es/ecma262/multipage/executable-code-and-execution-contexts.html#job) erreicht ist. Siehe [Anmerkungen zu WeakRefs](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#notes_on_weakrefs) für Details.
- Eine konforme JavaScript-Implementierung, selbst eine mit Speicherbereinigung, ist nicht verpflichtet, Bereinigungs-Rückrufe aufzurufen. Wann und ob dies geschieht, liegt vollständig an der Implementierung der JavaScript-Engine. Wenn ein registriertes Objekt zurückgewonnen wird, können die Bereinigungs-Rückrufe dafür zu diesem Zeitpunkt, später oder gar nicht aufgerufen werden.
- Es ist wahrscheinlich, dass große Implementierungen Bereinigungs-Rückrufe irgendwann während der Ausführung aufrufen, aber diese Aufrufe könnten erheblich nach dem Zeitpunkt erfolgen, zu dem das damit verbundene Objekt zurückgewonnen wurde. Außerdem, wenn ein Objekt in zwei Registries registriert ist, gibt es keine Garantie, dass die beiden Rückrufe nebeneinander aufgerufen werden - einer kann aufgerufen werden und der andere nie, oder der andere kann viel später aufgerufen werden.
- Es gibt auch Situationen, in denen selbst Implementierungen, die normalerweise Bereinigungs-Rückrufe aufrufen, dies wahrscheinlich nicht tun:
  - Wenn das JavaScript-Programm vollständig herunterfährt (zum Beispiel das Schließen eines Tabs im Browser).
  - Wenn die `FinalizationRegistry`-Instanz selbst nicht mehr durch JavaScript-Code erreichbar ist.
- Wenn das Ziel einer `WeakRef` auch in einer `FinalizationRegistry` ist, wird das Ziel der `WeakRef` gleichzeitig oder vor einem mit dem Registry assoziierten Bereinigungs-Rückruf gelöscht; wenn Ihr Bereinigungs-Rückruf `deref` auf einer `WeakRef` für das Objekt aufruft, erhält er `undefined`.

## Konstruktor

- {{jsxref("FinalizationRegistry/FinalizationRegistry", "FinalizationRegistry()")}}
  - : Erstellt ein neues `FinalizationRegistry`-Objekt.

## Instanzeigenschaften

Diese Eigenschaften sind auf `FinalizationRegistry.prototype` definiert und werden von allen `FinalizationRegistry`-Instanzen gemeinsam genutzt.

- {{jsxref("Object/constructor", "FinalizationRegistry.prototype.constructor")}}
  - : Die Konstrukturfunktion, die das Instanzobjekt erstellt hat. Bei `FinalizationRegistry`-Instanzen ist der Ausgangswert der {{jsxref("FinalizationRegistry/FinalizationRegistry", "FinalizationRegistry")}}-Konstruktor.
- `FinalizationRegistry.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"FinalizationRegistry"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("FinalizationRegistry.prototype.register()")}}
  - : Registriert ein Objekt bei der Registry, um einen Bereinigungs-Rückruf zu erhalten, wenn das Objekt durch den Garbage Collector eingesammelt wird.
- {{jsxref("FinalizationRegistry.prototype.unregister()")}}
  - : Meldet ein Objekt von der Registry ab.

## Beispiele

### Erstellen einer neuen Registry

Sie erstellen die Registry, indem Sie den Rückruf übergeben:

```js
const registry = new FinalizationRegistry((heldValue) => {
  // …
});
```

### Objekte für die Bereinigung registrieren

Dann registrieren Sie alle Objekte, für die Sie einen Bereinigungs-Rückruf wünschen, indem Sie die Methode `register` aufrufen und das Objekt sowie einen _gehaltenen Wert_ dafür übergeben:

```js
registry.register(theObject, "some value");
```

### Rückrufe werden niemals synchron aufgerufen

Unabhängig davon, wie viel Druck Sie auf den Garbage Collector ausüben, wird der Bereinigungs-Rückruf niemals synchron aufgerufen. Das Objekt kann synchron zurückgewonnen werden, aber der Rückruf wird immer irgendwann nach Abschluss des aktuellen Jobs aufgerufen:

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

Wenn Sie jedoch zwischen jeder Zuteilung eine kleine Pause zulassen, kann der Rückruf eventuell früher aufgerufen werden:

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

Es gibt keine Garantie dafür, dass der Rückruf früher aufgerufen wird oder überhaupt aufgerufen wird, aber es besteht die Möglichkeit, dass die geloggte Nachricht einen Zählerwert hat, der kleiner als 5000 ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("WeakRef")}}
- {{jsxref("WeakSet")}}
- {{jsxref("WeakMap")}}
