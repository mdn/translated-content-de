---
title: FinalizationRegistry
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Ein **`FinalizationRegistry`**-Objekt ermöglicht es Ihnen, einen Rückruf anzufordern, wenn ein Wert vom Garbage Collector aufgeräumt wird.

## Beschreibung

`FinalizationRegistry` stellt eine Möglichkeit bereit, einen _Aufräum-Rückruf_ anzufordern, der zu einem bestimmten Zeitpunkt aufgerufen wird, wenn ein beim Registry registrierter Wert _zurückgefordert_ (vom Garbage Collector aufgeräumt) wurde. (Aufräum-Rückrufe werden manchmal auch _Finalizer_ genannt.)

> [!NOTE]
> Aufräum-Rückrufe sollten nicht für essentielle Programmlogik verwendet werden. Siehe [Hinweise zu Aufräum-Rückrufen](#hinweise_zu_aufräum-rückrufen) für Details.

Sie erstellen die Registry, indem Sie den Rückruf übergeben:

```js
const registry = new FinalizationRegistry((heldValue) => {
  // …
});
```

Dann registrieren Sie jeden Wert, für den Sie einen Aufräum-Rückruf wünschen, indem Sie die Methode `register` aufrufen und den Wert sowie einen dafür _gehaltenen Wert_ übergeben:

```js
registry.register(target, "some value");
```

Die Registry hält keine starke Referenz zum Wert, da dies den Zweck vereiteln würde (wenn die Registry ihn stark halten würde, würde der Wert niemals zurückgefordert werden). In JavaScript sind Objekte und [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sammelbar, sodass sie in einem `FinalizationRegistry`-Objekt als Ziel oder Token registriert werden können.

Wenn `target` zurückgefordert wird, kann Ihr Aufräum-Rückruf zu einem gewissen Punkt mit dem von Ihnen dafür bereitgestellten _gehaltenen Wert_ aufgerufen werden ("some value" im obigen Beispiel). Der gehaltene Wert kann ein beliebiger Wert sein: ein primitiver Wert oder ein Objekt, sogar `undefined`. Wenn der gehaltene Wert ein Objekt ist, hält die Registry eine _starke_ Referenz dazu (damit sie es später Ihrem Aufräum-Rückruf übergeben kann).

Wenn Sie möglicherweise einen registrierten Zielwert später abmelden möchten, übergeben Sie einen dritten Wert, der das _Abmelde-Token_ ist, das Sie später verwenden werden, wenn Sie die `unregister`-Funktion der Registry aufrufen, um den Wert abzumelden. Die Registry hält nur eine schwache Referenz zum Abmelde-Token.

Es ist üblich, den Zielwert selbst als Abmelde-Token zu verwenden, was völlig in Ordnung ist:

```js
registry.register(target, "some value", target);
// …

// einige Zeit später, wenn Sie sich nicht mehr um `target` kümmern, melden Sie es ab
registry.unregister(target);
```

Es muss jedoch nicht derselbe Wert sein; es kann ein anderer sein:

```js
registry.register(target, "some value", token);
// …

// einige Zeit später
registry.unregister(token);
```

### Vermeiden, wenn möglich

Die korrekte Verwendung von `FinalizationRegistry` erfordert sorgfältiges Nachdenken und sollte wenn möglich vermieden werden. Es ist auch wichtig, sich nicht auf spezifisches Verhalten zu verlassen, das von der Spezifikation nicht garantiert wird. Wann, wie und ob die Speicherbereinigung erfolgt, liegt in der Verantwortung der Implementierung der jeweiligen JavaScript-Engine. Jedes beobachtete Verhalten in einer Engine kann in einer anderen Engine, in einer anderen Version derselben Engine oder sogar in einer leicht unterschiedlichen Situation mit derselben Version derselben Engine unterschiedlich sein. Speicherbereinigung ist ein schwieriges Problem, das Implementierer von JavaScript-Engines ständig verfeinern und verbessern.

Hier sind einige spezifische Punkte, die von den Autoren im [Vorschlag](https://github.com/tc39/proposal-weakrefs) enthalten sind, der `FinalizationRegistry` eingeführt hat:

> [Speicherbereinigung] (https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)) ist kompliziert. Wenn eine Anwendung oder Bibliothek darauf angewiesen ist, dass der GC ein WeakRef bereinigt oder einen Finalizer \[Aufräum-Rückruf] in einer rechtzeitigen, vorhersehbaren Weise aufruft, wird sie wahrscheinlich enttäuscht sein: Die Bereinigung kann viel später als erwartet erfolgen oder gar nicht. Quellen der Variabilität umfassen:
>
> - Ein Objekt könnte viel eher als ein anderes Objekt gesammelt werden, selbst wenn sie gleichzeitig unerreichbar werden, z.B. wegen generationsbedingter Sammlung.
> - Arbeiten der Speicherbereinigung können über die Zeit verteilt werden, indem inkrementelle und gleichzeitige Techniken verwendet werden.
> - Verschiedene Laufzeit-Heuristiken können verwendet werden, um den Speicherverbrauch und die Reaktionsfähigkeit auszubalancieren.
> - Die JavaScript-Engine kann Referenzen auf Dinge halten, die so aussehen, als wären sie unerreichbar (z.B. in Closures oder Inline-Caches).
> - Verschiedene JavaScript-Engines können diese Dinge unterschiedlich tun, oder dieselbe Engine kann ihre Algorithmen über Versionen hinweg ändern.
> - Komplexe Faktoren können dazu führen, dass Objekte für unerwartete Zeiträume am Leben gehalten werden, wie z.B. Verwendung mit bestimmten APIs.

### Hinweise zu Aufräum-Rückrufen

- Entwickler sollten sich nicht auf Aufräum-Rückrufe für essentielle Programmlogik verlassen. Aufräum-Rückrufe können nützlich sein, um den Speicherverbrauch im Verlauf eines Programms zu reduzieren, sind jedoch wahrscheinlich sonst nicht nützlich.
- Wenn Ihr Code gerade einen Wert in der Registry registriert hat, wird dieses Ziel nicht bis zum Ende des aktuellen JavaScript-[Jobs](https://tc39.es/ecma262/multipage/executable-code-and-execution-contexts.html#job) zurückgefordert. Siehe [Hinweise zu WeakRefs](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#notes_on_weakrefs) für Details.
- Eine konforme JavaScript-Implementierung, auch eine, die Speicherbereinigung durchführt, ist nicht verpflichtet, Aufräum-Rückrufe aufzurufen. Wann und ob dies geschieht, liegt vollständig in der Verantwortung der Implementierung der JavaScript-Engine. Wenn ein registriertes Objekt zurückgefordert wird, können Aufräum-Rückrufe dafür dann aufgerufen werden, später zu einem anderen Zeitpunkt oder gar nicht.
- Es ist wahrscheinlich, dass große Implementierungen Aufräum-Rückrufe zu einem bestimmten Zeitpunkt während des Programmlaufs aufrufen werden, aber diese Aufrufe können erheblich nach dem Zeitpunkt erfolgen, zu dem das zugehörige Objekt zurückgefordert wurde. Darüber hinaus gibt es keine Garantie, dass bei Registrierung in zwei Registries die beiden Rückrufe direkt aufeinanderfolgend aufgerufen werden - einer kann aufgerufen werden und der andere nie oder der andere kann viel später aufgerufen werden.
- Es gibt auch Situationen, in denen selbst Implementierungen, die normalerweise Aufräum-Rückrufe aufrufen, diese wahrscheinlich nicht aufrufen:
  - Wenn das JavaScript-Programm vollständig heruntergefahren wird (zum Beispiel beim Schließen eines Tabs in einem Browser).
  - Wenn die `FinalizationRegistry`-Instanz selbst für JavaScript-Code nicht mehr erreichbar ist.
- Wenn das Ziel eines `WeakRef` sich auch in einem `FinalizationRegistry` befindet, wird das Ziel des `WeakRef` gleichzeitig oder bevor ein damit verbundener Aufräum-Rückruf der Registry aufgerufen wird, gelöscht; wenn Ihr Aufräum-Rückruf `deref` auf einem `WeakRef` für das Objekt aufruft, erhält es `undefined`.

## Konstruktor

- {{jsxref("FinalizationRegistry/FinalizationRegistry", "FinalizationRegistry()")}}
  - : Erstellt ein neues `FinalizationRegistry`-Objekt.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `FinalizationRegistry.prototype` definiert und werden von allen Instanzen der `FinalizationRegistry` geteilt.

- {{jsxref("Object/constructor", "FinalizationRegistry.prototype.constructor")}}
  - : Die Konstrukturfunktion, die das Instanzobjekt erstellt hat. Für `FinalizationRegistry`-Instanzen ist der Anfangswert der {{jsxref("FinalizationRegistry/FinalizationRegistry", "FinalizationRegistry")}}-Konstruktor.
- `FinalizationRegistry.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"FinalizationRegistry"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("FinalizationRegistry.prototype.register()")}}
  - : Registriert ein Objekt in der Registry, um einen Aufräum-Rückruf zu erhalten, wenn/das Objekt vom Garbage Collector aufgeräumt wird.
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

### Registrieren von Objekten zum Aufräumen

Dann registrieren Sie alle Objekte, für die Sie einen Aufräum-Rückruf wünschen, indem Sie die Methode `register` aufrufen und das Objekt sowie einen dafür _gehaltenen Wert_ übergeben:

```js
registry.register(theObject, "some value");
```

### Rückrufe werden niemals synchron aufgerufen

Egal wie viel Druck Sie auf den Garbage Collector ausüben, der Aufräum-Rückruf wird niemals synchron aufgerufen. Das Objekt kann synchron aufgeräumt werden, aber der Rückruf wird immer irgendwann nach Abschluss des aktuellen Jobs aufgerufen:

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

Wenn Sie jedoch eine kleine Pause zwischen jeder Zuweisung erlauben, kann der Rückruf früher aufgerufen werden:

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

Es gibt keine Garantie, dass der Rückruf früher oder überhaupt aufgerufen wird, aber es besteht die Möglichkeit, dass die geloggte Nachricht einen Zählerwert kleiner als 5000 hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("WeakRef")}}
- {{jsxref("WeakSet")}}
- {{jsxref("WeakMap")}}
