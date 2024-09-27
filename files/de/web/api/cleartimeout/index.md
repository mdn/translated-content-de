---
title: clearTimeout() globale Funktion
short-title: clearTimeout()
slug: Web/API/clearTimeout
l10n:
  sourceCommit: cb279e20569055b200f93802d1704846c28aa04f
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

Die globale **`clearTimeout()`**-Methode annulliert ein zuvor durch den Aufruf von [`setTimeout()`](/de/docs/Web/API/SetTimeout) gesetztes Timeout.

Wenn der bereitgestellte Parameter keine zuvor festgelegte Aktion identifiziert, führt diese Methode nichts aus.

## Syntax

```js-nolint
clearTimeout(timeoutID)
```

### Parameter

- `timeoutID`
  - : Der Bezeichner des Timeouts, das Sie abbrechen möchten. Diese ID wurde durch den entsprechenden Aufruf von `setTimeout()` zurückgegeben.

Es ist wichtig zu beachten, dass der Pool von IDs, die von [`setTimeout()`](/de/docs/Web/API/SetTimeout) und [`setInterval()`](/de/docs/Web/API/SetInterval) verwendet werden, gemeinsam genutzt wird. Das bedeutet, dass Sie technisch gesehen `clearTimeout()` und [`clearInterval()`](/de/docs/Web/API/ClearInterval) austauschbar verwenden können. Aus Gründen der Klarheit sollten Sie dies jedoch vermeiden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Führen Sie das folgende Skript im Kontext einer Webseite aus und klicken Sie einmal auf die Seite. Sie sehen, dass nach einer Sekunde eine Nachricht erscheint. Wenn Sie innerhalb einer Sekunde mehrfach auf die Seite klicken, erscheint der Alarm nur einmal.

```js
const alarm = {
  remind(aMessage) {
    alert(aMessage);
    this.timeoutID = undefined;
  },

  setup() {
    if (typeof this.timeoutID === "number") {
      this.cancel();
    }

    this.timeoutID = setTimeout(
      (msg) => {
        this.remind(msg);
      },
      1000,
      "Wake up!",
    );
  },

  cancel() {
    clearTimeout(this.timeoutID);
  },
};
window.addEventListener("click", () => alarm.setup());
```

## Hinweise

Das Übergeben einer ungültigen ID an `clearTimeout()` bewirkt stillschweigend nichts; es wird keine Ausnahme ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`setTimeout()`](/de/docs/Web/API/SetTimeout)
- [`setInterval()`](/de/docs/Web/API/SetInterval)
- [`clearInterval()`](/de/docs/Web/API/ClearInterval)
- [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
