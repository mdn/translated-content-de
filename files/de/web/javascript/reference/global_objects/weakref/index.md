---
title: WeakRef
slug: Web/JavaScript/Reference/Global_Objects/WeakRef
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Ein **`WeakRef`**-Objekt ermöglicht es Ihnen, einen schwachen Verweis auf ein anderes Objekt zu halten, ohne zu verhindern, dass dieses Objekt vom Garbage Collector eingesammelt wird.

## Beschreibung

Ein `WeakRef`-Objekt enthält einen schwachen Verweis auf ein Objekt, das als sein _Ziel_ oder _Referent_ bezeichnet wird. Ein _schwacher Verweis_ auf ein Objekt ist ein Verweis, der nicht verhindert, dass das Objekt vom Garbage Collector zurückgefordert wird. Im Gegensatz dazu hält ein normaler (oder _starker_) Verweis ein Objekt im Speicher. Wenn ein Objekt keine starken Verweise mehr auf sich hat, kann der Garbage Collector der JavaScript-Engine das Objekt zerstören und seinen Speicher wieder freigeben. In diesem Fall kann nicht mehr auf das Objekt über einen schwachen Verweis zugegriffen werden.

Da auch [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) vom Garbage Collector eingesammelt werden können, können sie ebenfalls als Ziel eines `WeakRef`-Objekts verwendet werden. Der Anwendungsfall hierfür ist jedoch begrenzt.

### Vermeidung nach Möglichkeit

Der korrekte Einsatz von `WeakRef` erfordert sorgfältige Überlegung und sollte nach Möglichkeit vermieden werden. Es ist auch wichtig, sich nicht auf irgendwelche Verhaltensweisen zu verlassen, die nicht von der Spezifikation garantiert werden. Wann, wie und ob die Garbage Collection erfolgt, hängt von der Implementierung der jeweiligen JavaScript-Engine ab. Ein Verhalten, das Sie in einer Engine beobachten, kann in einer anderen Engine, in einer anderen Version derselben Engine oder sogar in einer leicht unterschiedlichen Situation mit derselben Version der Engine anders sein. Die Garbage Collection ist ein schwieriges Problem, das von den Entwicklern der JavaScript-Engines ständig verfeinert und verbessert wird.

Hier sind einige spezielle Punkte, die von den Autoren im [Vorschlag](https://github.com/tc39/proposal-weakrefs) enthalten sind, der `WeakRef` eingeführt hat:

> [Garbage Collector](<https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)>) sind kompliziert. Wenn eine Anwendung oder Bibliothek darauf angewiesen ist, dass der GC einen WeakRef oder einen Finalizer \[Aufräum-Callback] zeitnah und vorhersehbar aufräumt, wird sie wahrscheinlich enttäuscht sein: Die Bereinigung kann viel später als erwartet erfolgen oder überhaupt nicht. Quellen der Variabilität umfassen:
>
> - Ein Objekt könnte viel früher als ein anderes Objekt eingesammelt werden, selbst wenn sie zur selben Zeit nicht mehr erreichbar sind, z.B. aufgrund der Generational Collection.
> - Die Garbage-Collection-Arbeit kann mit inkrementellen und gleichzeitigen Techniken über die Zeit verteilt werden.
> - Verschiedene Laufzeit-Heuristiken können verwendet werden, um den Speicherverbrauch und die Reaktionsfähigkeit abzuwägen.
> - Die JavaScript-Engine kann Verweise auf Dinge halten, die den Anschein erwecken, nicht erreichbar zu sein (z.B. in Closures oder Inline-Caches).
> - Verschiedene JavaScript-Engines können diese Dinge unterschiedlich handhaben oder dieselbe Engine kann ihre Algorithmen zwischen den Versionen ändern.
> - Komplexe Faktoren können dazu führen, dass Objekte unerwartet lange am Leben gehalten werden, z.B. bei der Verwendung bestimmter APIs.

### Anmerkungen zu WeakRefs

- Wenn Ihr Code gerade erst eine `WeakRef` für ein Zielobjekt erstellt hat oder ein Zielobjekt aus der `deref`-Methode einer `WeakRef` erhalten hat, wird dieses Zielobjekt bis zum Ende des aktuellen JavaScript-[Jobs](https://tc39.es/ecma262/multipage/executable-code-and-execution-contexts.html#job) (einschließlich aller Promise-Reaktionsjobs, die am Ende eines Script-Jobs laufen) nicht zurückgefordert. Das bedeutet, Sie können nur "sehen", dass ein Objekt zwischen den Durchläufen der Ereignisschleife zurückgefordert wird. Dies soll in erster Linie verhindern, dass das Verhalten des Garbage Collectors einer beliebigen JavaScript-Engine im Code sichtbar wird — denn wenn das der Fall wäre, würden die Leute Code schreiben, der sich auf dieses Verhalten verlässt, was zu Problemen führen würde, wenn sich das Verhalten des Garbage Collectors ändert. (Die Garbage Collection ist ein schwieriges Problem; die Entwickler der JavaScript-Engines verfeinern und verbessern ständig, wie sie funktioniert.)
- Wenn mehrere `WeakRef`s dasselbe Ziel haben, sind sie untereinander konsistent. Das Ergebnis des Aufrufs von `deref` auf einem von ihnen wird mit dem Ergebnis des Aufrufs von `deref` auf einem anderen von ihnen (im selben Job) übereinstimmen. Man erhält das Zielobjekt von einer von ihnen, aber nicht `undefined` von einer anderen.
- Wenn das Ziel eines `WeakRef` sich auch in einem {{jsxref("FinalizationRegistry")}} befindet, wird das Ziel des `WeakRef` zur gleichen Zeit gelöscht oder bevor ein Aufräum-Callback, das mit dem Register verknüpft ist, aufgerufen wird; wenn Ihr Aufräum-Callback `deref` auf einem `WeakRef` für das Objekt aufruft, erhält es `undefined`.
- Sie können das Ziel eines `WeakRef` nicht ändern, es bleibt immer nur das ursprüngliche Zielobjekt oder `undefined`, wenn dieses Ziel zurückgefordert wurde.
- Eine `WeakRef` könnte nie `undefined` von `deref` zurückgeben, auch wenn nichts das Ziel stark hält, da der Garbage Collector möglicherweise nie entscheidet, das Objekt zurückzufordern.

## Konstruktor

- {{jsxref("WeakRef/WeakRef", "WeakRef()")}}
  - : Erstellt ein neues `WeakRef`-Objekt.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `WeakRef.prototype` definiert und werden von allen `WeakRef`-Instanzen geteilt.

- {{jsxref("Object/constructor", "WeakRef.prototype.constructor")}} {{optional_inline}}
  - : Die Konstruktionsfunktion, die das Instanzobjekt erstellt hat. Für `WeakRef`-Instanzen ist der Anfangswert der {{jsxref("WeakRef/WeakRef", "WeakRef")}}-Konstruktor.

    > [!NOTE]
    > Diese Eigenschaft ist in der Spezifikation als "normativ optional" gekennzeichnet, was bedeutet, dass eine konforme Implementierung die `constructor`-Eigenschaft möglicherweise nicht offenlegt. Dies verhindert, dass beliebiger Code den `WeakRef`-Konstruktor erhält und die Garbage Collection beobachtet. Allerdings enthüllen alle großen Engines sie standardmäßig.

- `WeakRef.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"WeakRef"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("WeakRef.prototype.deref()")}}
  - : Gibt das Zielobjekt des `WeakRef`-Objekts oder `undefined` zurück, wenn das Zielobjekt zurückgefordert wurde.

## Beispiele

### Verwendung eines WeakRef-Objekts

Dieses Beispiel startet einen Zähler, der in einem DOM-Element angezeigt wird und anhält, wenn das Element nicht mehr existiert:

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
