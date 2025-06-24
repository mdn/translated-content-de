---
title: WeakRef
slug: Web/JavaScript/Reference/Global_Objects/WeakRef
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{JSRef}}

Ein **`WeakRef`**-Objekt ermöglicht es Ihnen, eine schwache Referenz auf ein anderes Objekt zu halten, ohne das Objekt daran zu hindern, vom Garbage Collector entfernt zu werden.

## Beschreibung

Ein `WeakRef`-Objekt enthält eine schwache Referenz auf ein Objekt, das als _Ziel_ oder _Referent_ bezeichnet wird. Eine _schwache Referenz_ auf ein Objekt ist eine Referenz, die nicht verhindert, dass das Objekt vom Garbage Collector wieder freigegeben wird. Im Gegensatz dazu hält eine normale (oder _starke_) Referenz ein Objekt im Speicher. Wenn ein Objekt keine starken Referenzen mehr hat, kann der Garbage Collector der JavaScript-Engine das Objekt zerstören und seinen Speicher freigeben. Sollte dies geschehen, können Sie das Objekt nicht mehr aus einer schwachen Referenz abrufen.

Da [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) ebenfalls sammelbar sind, können sie auch als Ziel eines `WeakRef`-Objekts verwendet werden. Der Anwendungsfall dafür ist jedoch begrenzt.

### Wo möglich vermeiden

Die korrekte Verwendung von `WeakRef` erfordert sorgfältiges Überlegen, und es ist am besten, sie zu vermeiden, wenn möglich. Es ist auch wichtig, sich nicht auf spezifische Verhaltensweisen zu verlassen, die von der Spezifikation nicht garantiert werden. Wann, wie und ob eine Speicherbereinigung erfolgt, hängt von der Implementierung der jeweiligen JavaScript-Engine ab. Ein Verhalten, das Sie in einer Engine beobachten, kann in einer anderen Engine, in einer anderen Version derselben Engine oder sogar in einer leicht abgewandelten Situation mit derselben Version der gleichen Engine anders sein. Speicherbereinigung ist ein schwieriges Problem, das die Implementierer von JavaScript-Engines ständig verfeinern und verbessern.

Hier sind einige spezifische Punkte, die in dem [Vorschlag](https://github.com/tc39/proposal-weakrefs) enthalten sind, der `WeakRef` eingeführt hat:

> [Garbage Collectors](<https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)>) sind kompliziert. Wenn eine Anwendung oder Bibliothek darauf angewiesen ist, dass GC eine WeakRef aufräumt oder einen Finalizer \[aufräum-Callback] rechtzeitig und vorhersehbar aufruft, wird sie vermutlich enttäuscht sein: Die Bereinigung kann viel später als erwartet erfolgen oder gar nicht. Variabilitätsquellen sind unter anderem:
>
> - Ein Objekt könnte viel früher als ein anderes Objekt gesammelt werden, selbst wenn sie gleichzeitig unerreichbar werden, z.B. aufgrund von Generationssammlung.
> - Die Arbeit der Speicherbereinigung kann über die Zeit mittels inkrementellen und nebenläufigen Techniken verteilt werden.
> - Verschiedene Laufzeit-Heuristiken können verwendet werden, um den Speicherverbrauch und die Reaktionsfähigkeit auszugleichen.
> - Die JavaScript-Engine kann Referenzen auf Dinge halten, die scheinbar nicht erreichbar sind (z.B. in Closures oder Inline-Caches).
> - Verschiedene JavaScript-Engines können diese Dinge unterschiedlich tun, oder die gleiche Engine kann ihre Algorithmen über Versionen hinweg ändern.
> - Komplexe Faktoren können dazu führen, dass Objekte für unerwartet lange Zeit am Leben gehalten werden, wie z.B. die Verwendung mit bestimmten APIs.

### Hinweise zu WeakRefs

- Wenn Ihr Code gerade eine `WeakRef` für ein Zielobjekt erstellt hat oder ein Zielobjekt aus der `deref`-Methode einer `WeakRef` erhalten hat, wird dieses Zielobjekt nicht vor dem Ende des aktuellen JavaScript-[Auftrags](https://tc39.es/ecma262/multipage/executable-code-and-execution-contexts.html#job) (einschließlich aller Promise-Reaktionsjobs, die am Ende eines Skriptjobs ausgeführt werden) zurückgefordert. Das bedeutet, dass Sie ein Objekt nur zwischen den Schleifendurchläufen der Ereignisschleife wieder freigegeben sehen können. Dies dient in erster Linie dazu, das Verhalten des Garbage Collectors einer bestimmten JavaScript-Engine in Code nicht offenkundig zu machen — denn wäre es das, würden Leute Code schreiben, der von diesem Verhalten abhängt, was zu Problemen führen würde, wenn sich das Verhalten des Garbage Collectors ändert. (Speicherbereinigung ist ein schwieriges Problem; JavaScript-Engine-Implementierer verfeinern und verbessern kontinuierlich, wie sie funktioniert.)
- Wenn mehrere `WeakRef`s dasselbe Ziel haben, sind sie untereinander konsistent. Das Ergebnis des Aufrufs von `deref` auf einer von ihnen entspricht dem Ergebnis des Aufrufs von `deref` auf einer anderen von ihnen (im gleichen Auftrag); Sie erhalten nicht das Zielobjekt von einer von ihnen, aber `undefined` von einer anderen.
- Wenn das Ziel einer `WeakRef` auch in einem {{jsxref("FinalizationRegistry")}} ist, wird das Ziel der `WeakRef` zur gleichen Zeit oder vor einem dazugehörigen Bereinigungs-Callback der Registry gelöscht; wenn Ihr Bereinigungs-Callback `deref` auf eine `WeakRef` für das Objekt aufruft, erhält es `undefined`.
- Sie können das Ziel einer `WeakRef` nicht ändern, es wird immer nur das ursprüngliche Zielobjekt oder `undefined` sein, wenn dieses Ziel zurückgefordert wurde.
- Eine `WeakRef` könnte niemals `undefined` von `deref` zurückgeben, selbst wenn nichts das Ziel mehr stark hält, da der Garbage Collector möglicherweise nie entscheidet, das Objekt zurückzufordern.

## Konstruktor

- {{jsxref("WeakRef/WeakRef", "WeakRef()")}}
  - : Erstellt ein neues `WeakRef`-Objekt.

## Instanzeigenschaften

Diese Eigenschaften sind auf `WeakRef.prototype` definiert und werden von allen `WeakRef`-Instanzen geteilt.

- {{jsxref("Object/constructor", "WeakRef.prototype.constructor")}} {{optional_inline}}

  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `WeakRef`-Instanzen ist der Anfangswert der {{jsxref("WeakRef/WeakRef", "WeakRef")}}-Konstruktor.

    > [!NOTE]
    > Diese Eigenschaft ist in der Spezifikation als "normativ optional" markiert, was bedeutet, dass eine konforme Implementierung die `constructor`-Eigenschaft möglicherweise nicht offenlegt. Dies verhindert, dass beliebiger Code den `WeakRef`-Konstruktor erhält und die Speicherbereinigung beobachten kann. Alle großen Engines legen sie jedoch standardmäßig offen.

- `WeakRef.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"WeakRef"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("WeakRef.prototype.deref()")}}
  - : Gibt das Zielobjekt des `WeakRef`-Objekts zurück oder `undefined`, wenn das Zielobjekt zurückgefordert wurde.

## Beispiele

### Verwendung eines WeakRef-Objekts

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
