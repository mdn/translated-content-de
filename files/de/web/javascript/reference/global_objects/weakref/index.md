---
title: WeakRef
slug: Web/JavaScript/Reference/Global_Objects/WeakRef
l10n:
  sourceCommit: 5c000c8621145c6915f3d545b505c216317bc64a
---

{{JSRef}}

Ein **`WeakRef`**-Objekt ermöglicht es Ihnen, eine schwache Referenz auf ein anderes Objekt zu halten, ohne zu verhindern, dass dieses Objekt vom Garbage Collector aufgeräumt wird.

## Beschreibung

Ein `WeakRef`-Objekt enthält eine schwache Referenz auf ein Objekt, das als sein _Ziel_ oder _Referent_ bezeichnet wird. Eine _schwache Referenz_ auf ein Objekt ist eine Referenz, die nicht verhindert, dass das Objekt vom Garbage Collector beansprucht wird. Im Gegensatz dazu hält eine normale (oder _starke_) Referenz ein Objekt im Speicher. Wenn ein Objekt keine starken Referenzen mehr hat, kann der Garbage Collector des JavaScript-Engines das Objekt zerstören und seinen Speicher zurückgewinnen. Wenn dies geschieht, können Sie das Objekt nicht mehr aus einer schwachen Referenz abrufen.

Da [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) ebenfalls vom Garbage Collector gesammelt werden können, können sie auch als Ziel eines `WeakRef`-Objekts verwendet werden. Dieses Anwendungsfall ist jedoch begrenzt.

### Vermeiden, wo möglich

Der korrekte Einsatz von `WeakRef` erfordert sorgfältige Überlegungen und sollte vermieden werden, wenn möglich. Es ist auch wichtig, sich nicht auf spezifische Verhaltensweisen zu verlassen, die nicht durch die Spezifikation garantiert sind. Wann, wie und ob Garbage Collection erfolgt, hängt von der Implementierung des jeweiligen JavaScript-Engines ab. Jedes Verhalten, das Sie in einem Engine beobachten, kann in einem anderen Engine, in einer anderen Version desselben Engines oder sogar in einer leicht unterschiedlichen Situation mit derselben Version desselben Engines anders sein. Garbage Collection ist ein schwieriges Problem, an dessen Lösung die Implementierer von JavaScript-Engines ständig arbeiten und ihre Lösungen verbessern.

Hier sind einige spezifische Punkte, die von den Autoren in dem [Vorschlag](https://github.com/tc39/proposal-weakrefs) enthalten sind, der `WeakRef` eingeführt hat:

> [Garbage Collector](<https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)>) sind kompliziert. Wenn ein Programm oder eine Bibliothek darauf angewiesen ist, dass der GC eine WeakRef oder einen Finalizer [Aufräum-Callback] in rechtzeitiger und vorhersehbarer Weise aufruft, wird es wahrscheinlich enttäuscht sein: Die Aufräumarbeiten können viel später als erwartet erfolgen oder überhaupt nicht. Variabilitätsquellen sind unter anderem:
>
> - Ein Objekt könnte viel früher als ein anderes Objekt vom Garbage Collector eingesammelt werden, selbst wenn sie gleichzeitig unerreichbar werden, z. B. aufgrund von Generationensammlung.
> - Die Arbeit der Garbage Collection kann über die Zeit hinweg mithilfe von inkrementellen und parallelen Techniken aufgeteilt werden.
> - Verschiedene Laufzeitheuristiken können verwendet werden, um die Speichernutzung und Reaktionsfähigkeit auszugleichen.
> - Der JavaScript-Engine könnte Referenzen auf Dinge halten, die aussehen, als wären sie unerreichbar (z. B. in Closures oder Inline-Caches).
> - Verschiedene JavaScript-Engines könnten diese Dinge unterschiedlich handhaben, oder derselbe Engine könnte seine Algorithmen über verschiedene Versionen hinweg ändern.
> - Komplexe Faktoren können dazu führen, dass Objekte unerwartet lange am Leben bleiben, z. B. bei der Verwendung mit bestimmten APIs.

### Hinweise zu WeakRefs

- Wenn Ihr Code gerade eine `WeakRef` für ein Zielobjekt erstellt hat oder ein Zielobjekt aus der `deref`-Methode einer `WeakRef` abgerufen wurde, wird dieses Zielobjekt bis zum Ende des aktuellen JavaScript-[Jobs](https://tc39.es/ecma262/multipage/executable-code-and-execution-contexts.html#job) (einschließlich aller Promise-Reaktionen, die am Ende eines Skript-Jobs laufen) nicht beansprucht. Das bedeutet, dass Sie ein Objekt nur zwischen den Durchläufen der Ereignisschleife beansprucht sehen können. Dies dient in erster Linie dazu, das Verhalten des Garbage Collectors eines gegebenen JavaScript-Engines im Code unsichtbar zu machen. Denn wenn dies der Fall wäre, würden Menschen Code schreiben, der sich auf dieses Verhalten verlässt, was bei einer Änderung des Garbage Collector-Verhaltens zu Fehlern führen würde. (Garbage Collection ist ein schwieriges Problem; JavaScript-Engine-Implementierer arbeiten ständig daran, wie sie funktioniert, und verbessern sie.)
- Wenn mehrere `WeakRef`s dasselbe Ziel haben, sind sie untereinander konsistent. Das Ergebnis eines Aufrufs von `deref` auf einem von ihnen entspricht dem Ergebnis eines Aufrufs von `deref` auf einem anderen von ihnen (im selben Job), Sie werden nicht das Zielobjekt von einem von ihnen und `undefined` von einem anderen erhalten.
- Wenn das Ziel einer `WeakRef` sich ebenfalls in einem {{jsxref("FinalizationRegistry")}} befindet, wird das Ziel der `WeakRef` gleichzeitig mit oder vor einem Aufräum-Callback, das mit dem Register verbunden ist, gelöscht; wenn Ihr Aufräum-Callback `deref` auf eine `WeakRef` für das Objekt aufruft, erhält es `undefined`.
- Sie können das Ziel einer `WeakRef` nicht ändern, es wird immer nur das originale Zielobjekt oder `undefined` sein, wenn dieses Ziel zurückgewonnen wurde.
- Eine `WeakRef` könnte nie `undefined` von `deref` zurückgeben, selbst wenn nichts das Ziel stark hält, da der Garbage Collector möglicherweise nie entscheidet, das Objekt zurückzugewinnen.

## Konstruktor

- {{jsxref("WeakRef/WeakRef", "WeakRef()")}}
  - : Erstellt ein neues `WeakRef`-Objekt.

## Instanzeigenschaften

Diese Eigenschaften sind auf `WeakRef.prototype` definiert und werden von allen `WeakRef`-Instanzen geteilt.

- {{jsxref("Object/constructor", "WeakRef.prototype.constructor")}} {{optional_inline}}

  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `WeakRef`-Instanzen ist der anfängliche Wert der {{jsxref("WeakRef/WeakRef", "WeakRef")}}-Konstruktor.

    > [!NOTE]
    > Diese Eigenschaft ist in der Spezifikation als "normativ optional" gekennzeichnet, was bedeutet, dass eine konforme Implementierung die `constructor`-Eigenschaft möglicherweise nicht offenlegt. Dies verhindert, dass beliebiger Code den `WeakRef`-Konstruktor erlangt und die Möglichkeit erhält, die Garbage Collection zu beobachten. Allerdings legen alle großen Engines sie standardmäßig offen.

- `WeakRef.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"WeakRef"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("WeakRef.prototype.deref()")}}
  - : Gibt das Zielobjekt des `WeakRef`-Objekts zurück oder `undefined`, wenn das Zielobjekt zurückgewonnen wurde.

## Beispiele

### Verwendung eines WeakRef-Objekts

Dieses Beispiel startet einen Zähler, der in einem DOM-Element angezeigt wird und aufhört, wenn das Element nicht mehr existiert:

```js
class Counter {
  constructor(element) {
    // Eine schwache Referenz zum DOM-Element merken
    this.ref = new WeakRef(element);
    this.start();
  }

  start() {
    if (this.timer) {
      return;
    }

    this.count = 0;

    const tick = () => {
      // Das Element aus der schwachen Referenz abrufen, falls noch vorhanden
      const element = this.ref.deref();
      if (element) {
        element.textContent = ++this.count;
      } else {
        // Das Element existiert nicht mehr
        console.log("Das Element ist verschwunden.");
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
