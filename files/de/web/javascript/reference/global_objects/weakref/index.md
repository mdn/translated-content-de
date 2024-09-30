---
title: WeakRef
slug: Web/JavaScript/Reference/Global_Objects/WeakRef
l10n:
  sourceCommit: 5c000c8621145c6915f3d545b505c216317bc64a
---

{{JSRef}}

Ein **`WeakRef`**-Objekt ermöglicht es Ihnen, eine schwache Referenz zu einem anderen Objekt zu halten, ohne zu verhindern, dass dieses Objekt durch den Garbage Collector entfernt wird.

## Beschreibung

Ein `WeakRef`-Objekt enthält eine schwache Referenz auf ein Objekt, das als _Ziel_ oder _Referent_ bezeichnet wird. Eine _schwache Referenz_ auf ein Objekt ist eine Referenz, die es dem Garbage Collector erlaubt, das Objekt zurückzufordern. Im Gegensatz dazu hält eine normale (oder _starke_) Referenz ein Objekt im Speicher. Wenn ein Objekt keine starken Referenzen mehr hat, kann der Garbage Collector des JavaScript-Engines das Objekt zerstören und seinen Speicher freigeben. Wenn das passiert, können Sie das Objekt nicht mehr aus einer schwachen Referenz abrufen.

Da [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) ebenfalls vom Garbage Collector gesammelt werden können, können sie auch als Ziel eines `WeakRef`-Objekts verwendet werden. Allerdings ist der Anwendungsfall dafür begrenzt.

### Verzichten Sie nach Möglichkeit darauf

Der korrekte Einsatz von `WeakRef` erfordert sorgfältiges Überlegen und sollte vermieden werden, wenn möglich. Es ist auch wichtig, sich nicht auf irgendein bestimmtes Verhalten zu verlassen, das nicht durch die Spezifikation garantiert wird. Wann, wie und ob eine Garbage Collection erfolgt, hängt von der Implementierung eines bestimmten JavaScript-Engines ab. Jedes beobachtbare Verhalten in einem Engine kann in einem anderen Engine, in einer anderen Version desselben Engines oder sogar in einer etwas anderen Situation mit derselben Version desselben Engines unterschiedlich sein. Die Garbage Collection ist ein schwieriges Problem, zu dessen Lösung die Entwickler von JavaScript-Engines ständig ihre Lösungen verfeinern und verbessern.

Hier sind einige spezifische Punkte, die von den Autoren im [Vorschlag](https://github.com/tc39/proposal-weakrefs) aufgenommen wurden, der `WeakRef` eingeführt hat:

> [Garbage Collector](<https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)>) sind kompliziert. Wenn eine Anwendung oder Bibliothek darauf angewiesen ist, dass der GC eine `WeakRef` in einer zeitnahen, vorhersehbaren Weise bereinigt oder einen Finalizer \[Bereinigung-Callback] aufruft, wird sie wahrscheinlich enttäuscht sein: Die Bereinigung kann viel später stattfinden als erwartet oder gar nicht. Variabilitätsquellen sind unter anderem:
>
> - Ein Objekt könnte viel früher als ein anderes Objekt durch den Garbage Collector eingesammelt werden, selbst wenn sie gleichzeitig nicht mehr erreichbar sind, z.B. aufgrund von Generationen-Sammlung.
> - Die Arbeit der Garbage Collection kann über die Zeit mit inkrementellen und parallelen Techniken aufgeteilt werden.
> - Verschiedene Laufzeitheuristiken können genutzt werden, um Speicherverbrauch und Reaktionsfähigkeit auszubalancieren.
> - Der JavaScript-Engine kann Referenzen zu Dingen halten, die nicht erreichbar erscheinen (z.B. in Closures oder Inline-Caches).
> - Verschiedene JavaScript-Engines können diese Dinge unterschiedlich handhaben, oder derselbe Engine kann seine Algorithmen über Versionen hinweg ändern.
> - Komplexe Faktoren können dazu führen, dass Objekte unerwartet lange am Leben gehalten werden, wie z.B. die Nutzung mit bestimmten APIs.

### Hinweise zu WeakRefs

- Wenn Ihr Code gerade eine `WeakRef` für ein Zielobjekt erstellt oder das Zielobjekt von der `deref`-Methode einer `WeakRef` erhalten hat, wird dieses Zielobjekt nicht vor dem Ende des aktuellen JavaScript-[Jobs](https://tc39.es/ecma262/multipage/executable-code-and-execution-contexts.html#job) (einschließlich aller Promise-Reaktionsjobs, die am Ende eines Skript-Jobs ausgeführt werden) zurückgefordert. Das bedeutet, Sie können nur „sehen“, dass ein Objekt zwischen den Durchläufen der Ereignisschleife zurückgefordert wird. Dies soll hauptsächlich vermeiden, dass das Verhalten des Garbage Collectors eines bestimmten JavaScript-Engines im Code sichtbar wird — denn wenn dies der Fall wäre, würden Entwickler Code schreiben, der von diesem Verhalten abhängig ist, was brechen würde, wenn sich das Verhalten des Garbage Collectors ändern würde. (Die Garbage Collection ist ein schwieriges Problem; JavaScript-Engine-Implementierer verfeinern und verbessern ständig, wie sie funktioniert.)
- Wenn mehrere `WeakRef`s dasselbe Ziel haben, sind sie konsistent miteinander. Das Ergebnis des Aufrufs von `deref` bei einem von ihnen stimmt mit dem Ergebnis des Aufrufs von `deref` bei einem anderen von ihnen überein (im selben Job), Sie erhalten das Zielobjekt nicht von einem von ihnen, aber `undefined` von einem anderen.
- Wenn das Ziel einer `WeakRef` auch in einem {{jsxref("FinalizationRegistry")}} ist, wird das Ziel der `WeakRef` gleichzeitig oder bevor ein Bereinigungs-Callback aufgerufen wird, das mit dem Register verbunden ist, gelöscht; wenn Ihr Bereinigungs-Callback `deref` bei einer `WeakRef` für das Objekt aufruft, erhält es `undefined`.
- Sie können das Ziel einer `WeakRef` nicht ändern, es wird immer nur das ursprüngliche Zielobjekt oder `undefined` sein, wenn dieses Ziel zurückgefordert wurde.
- Eine `WeakRef` kann möglicherweise nie `undefined` von `deref` zurückgeben, selbst wenn nichts das Ziel stark hält, weil der Garbage Collector möglicherweise nie entscheidet, das Objekt zurückzufordern.

## Konstruktor

- {{jsxref("WeakRef/WeakRef", "WeakRef()")}}
  - : Erstellt ein neues `WeakRef`-Objekt.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `WeakRef.prototype` definiert und werden von allen `WeakRef`-Instanzen geteilt.

- {{jsxref("Object/constructor", "WeakRef.prototype.constructor")}} {{optional_inline}}

  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `WeakRef`-Instanzen ist der Anfangswert der {{jsxref("WeakRef/WeakRef", "WeakRef")}}-Konstruktor.

    > [!NOTE]
    > Diese Eigenschaft ist in der Spezifikation als "normativ optional" gekennzeichnet, was bedeutet, dass eine konforme Implementierung die `constructor`-Eigenschaft möglicherweise nicht bereitstellt. Dies verhindert, dass beliebiger Code den `WeakRef`-Konstruktor erhält und die Garbage Collection beobachten kann. Alle großen Engines stellen sie jedoch standardmäßig bereit.

- `WeakRef.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"WeakRef"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("WeakRef.prototype.deref()")}}
  - : Gibt das Zielobjekt des `WeakRef`-Objekts zurück oder `undefined`, wenn das Zielobjekt zurückgefordert wurde.

## Beispiele

### Verwenden eines WeakRef-Objekts

Dieses Beispiel startet einen Zähler, der in einem DOM-Element angezeigt wird, und stoppt, wenn das Element nicht mehr existiert:

```js
class Counter {
  constructor(element) {
    // Remember a weak reference to the DOM element
    this.ref = new WeakRef(element);
    this.start();
  }

  start() {
    if (this.timer) {
      return;
    }

    this.count = 0;

    const tick = () => {
      // Get the element from the weak reference, if it still exists
      const element = this.ref.deref();
      if (element) {
        element.textContent = ++this.count;
      } else {
        // The element doesn't exist anymore
        console.log("The element is gone.");
        this.stop();
        this.ref = null;
      }
    };

    tick();
    this.timer = setInterval(tick, 1000);
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = 0;
    }
  }
}

const counter = new Counter(document.getElementById("counter"));
setTimeout(() => {
  document.getElementById("counter").remove();
}, 5000);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("FinalizationRegistry")}}
- {{jsxref("WeakSet")}}
- {{jsxref("WeakMap")}}
