---
title: WeakRef
slug: Web/JavaScript/Reference/Global_Objects/WeakRef
l10n:
  sourceCommit: 5c000c8621145c6915f3d545b505c216317bc64a
---

{{JSRef}}

Ein **`WeakRef`**-Objekt ermöglicht es Ihnen, eine schwache Referenz auf ein anderes Objekt zu halten, ohne zu verhindern, dass dieses Objekt vom Garbage Collector gesammelt wird.

## Beschreibung

Ein `WeakRef`-Objekt enthält eine schwache Referenz auf ein Objekt, das als _Ziel_ oder _Referent_ bezeichnet wird. Eine _schwache Referenz_ auf ein Objekt ist eine Referenz, die nicht verhindert, dass das Objekt vom Garbage Collector zurückgefordert wird. Im Gegensatz dazu hält eine normale (oder _starke_) Referenz ein Objekt im Speicher. Wenn ein Objekt keine starken Referenzen mehr hat, kann der Garbage Collector der JavaScript-Engine das Objekt zerstören und dessen Speicher zurückfordern. Wenn das passiert, können Sie das Objekt nicht mehr aus einer schwachen Referenz abrufen.

Da [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) ebenfalls gesammelt werden können, können sie auch als Ziel eines `WeakRef`-Objekts verwendet werden. Der Anwendungsfall hierfür ist jedoch begrenzt.

### Wenn möglich vermeiden

Die korrekte Verwendung von `WeakRef` erfordert sorgfältiges Überlegen, und es ist am besten, sie zu vermeiden, wenn möglich. Es ist auch wichtig, sich nicht auf irgendwelche spezifischen Verhaltensweisen zu verlassen, die nicht durch die Spezifikation garantiert sind. Wann, wie und ob eine Speicherbereinigung erfolgt, hängt von der Implementierung der jeweiligen JavaScript-Engine ab. Jedes Verhalten, das Sie in einer Engine beobachten, kann in einer anderen Engine, in einer anderen Version derselben Engine oder sogar in einer leicht unterschiedlichen Situation mit derselben Version derselben Engine unterschiedlich sein. Speicherbereinigung ist ein schwieriges Problem, an dem Implementierer von JavaScript-Engines ständig arbeiten und ihre Lösungen verfeinern und verbessern.

Hier sind einige spezifische Punkte, die von den Autoren im [Vorschlag](https://github.com/tc39/proposal-weakrefs) enthalten sind, der `WeakRef` eingeführt hat:

> [Garbage Collector](https://de.wikipedia.org/wiki/Speicherbereinigung) sind kompliziert. Wenn eine Anwendung oder Bibliothek davon abhängt, dass ein Garbage Collector einen `WeakRef` oder einen Finalizer \[Bereinigungs-Callback] in rechtzeitiger, vorhersehbarer Weise aufräumt, wird sie wahrscheinlich enttäuscht sein: die Bereinigung kann viel später als erwartet geschehen oder gar nicht. Quellen der Variabilität umfassen:
>
> - Ein Objekt könnte viel früher als ein anderes Objekt gesammelt werden, selbst wenn sie zur gleichen Zeit unerreichbar werden, z.B. aufgrund der Generations-Sammlung.
> - Die Arbeit der Speicherbereinigung kann über die Zeit mit inkrementellen und parallelen Techniken verteilt werden.
> - Verschiedene Laufzeit-Heuristiken können verwendet werden, um den Speicherverbrauch und die Reaktionsfähigkeit auszugleichen.
> - Die JavaScript-Engine kann Referenzen auf Dinge halten, die so aussehen, als wären sie unerreichbar (z.B. in Closures oder Inline-Caches).
> - Unterschiedliche JavaScript-Engines können diese Dinge unterschiedlich handhaben, oder dieselbe Engine kann ihre Algorithmen zwischen den Versionen ändern.
> - Komplexe Faktoren können dazu führen, dass Objekte für unerwartet lange Zeit am Leben gehalten werden, wie z.B. die Verwendung mit bestimmten APIs.

### Anmerkungen zu WeakRefs

- Wenn Ihr Code gerade einen `WeakRef` für ein Zielobjekt erstellt hat oder ein Zielobjekt mit der `deref`-Methode eines `WeakRef` erhalten hat, wird dieses Zielobjekt nicht vor dem Ende des aktuellen JavaScript-[Jobs](https://tc39.es/ecma262/multipage/executable-code-and-execution-contexts.html#job) (einschließlich aller Promisereaktions-Jobs, die am Ende eines Skriptjobs ausgeführt werden) zurückgefordert. Das bedeutet, Sie können nur "sehen", dass ein Objekt zwischen den Durchläufen der Ereignisschleife zurückgefordert wird. Dies geschieht hauptsächlich, um zu vermeiden, dass das Verhalten des Garbage Collectors einer bestimmten JavaScript-Engine im Code ersichtlich wird — denn wenn das der Fall wäre, würden Leute Code schreiben, der sich auf dieses Verhalten verlässt, was bei einer Veränderung des Verhaltens des Garbage Collectors brechen würde. (Garbage Collection ist ein schwieriges Problem; Implementierer von JavaScript-Engines verfeinern und verbessern ständig, wie sie funktioniert.)
- Wenn mehrere `WeakRef`s dasselbe Ziel haben, sind sie untereinander konsistent. Das Ergebnis des Aufrufs von `deref` auf einem von ihnen wird mit dem Ergebnis des Aufrufs von `deref` auf einem anderen von ihnen (im gleichen Job) übereinstimmen, Sie erhalten nicht das Zielobjekt von einem, aber `undefined` von einem anderen.
- Wenn das Ziel eines `WeakRef` sich auch in einem {{jsxref("FinalizationRegistry")}} befindet, wird das Ziel des `WeakRef` zur gleichen Zeit oder vor jedem Bereinigungs-Callback gelöscht, das mit dem Register verknüpft ist. Wenn Ihr Bereinigungs-Callback `deref` auf einem `WeakRef` für das Objekt aufruft, wird es `undefined` erhalten.
- Sie können das Ziel eines `WeakRef` nicht ändern, es wird immer nur das ursprüngliche Zielobjekt oder `undefined` sein, wenn dieses Ziel zurückgefordert wurde.
- Ein `WeakRef` könnte niemals `undefined` von `deref` zurückgeben, selbst wenn nichts das Ziel stark hält, da der Garbage Collector möglicherweise nie entscheidet, das Objekt zurückzufordern.

## Konstruktor

- {{jsxref("WeakRef/WeakRef", "WeakRef()")}}
  - : Erstellt ein neues `WeakRef`-Objekt.

## Instanzeigenschaften

Diese Eigenschaften sind auf `WeakRef.prototype` definiert und werden von allen `WeakRef`-Instanzen geteilt.

- {{jsxref("Object/constructor", "WeakRef.prototype.constructor")}} {{optional_inline}}

  - : Die Konstrukturfunktion, die das Instanzobjekt erstellt hat. Für `WeakRef`-Instanzen ist der Anfangswert der {{jsxref("WeakRef/WeakRef", "WeakRef")}}-Konstruktor.

    > [!NOTE]
    > Diese Eigenschaft ist in der Spezifikation als "normativ optional" markiert, was bedeutet, dass eine konforme Implementierung die `constructor`-Eigenschaft möglicherweise nicht ausstellt. Dies verhindert, dass beliebiger Code den `WeakRef`-Konstruktor erhält und die Speicherbereinigung beobachten kann. Alle größeren Engines stellen ihn jedoch standardmäßig zur Verfügung.

- `WeakRef.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"WeakRef"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("WeakRef.prototype.deref()")}}
  - : Gibt das Zielobjekt des `WeakRef`-Objekts zurück, oder `undefined`, wenn das Zielobjekt zurückgefordert wurde.

## Beispiele

### Verwenden eines WeakRef-Objekts

Dieses Beispiel startet einen Zähler, der in einem DOM-Element angezeigt wird und stoppt, wenn das Element nicht mehr existiert:

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
