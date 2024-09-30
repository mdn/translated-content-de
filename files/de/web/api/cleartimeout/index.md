---
title: clearTimeout() globale Funktion
short-title: clearTimeout()
slug: Web/API/clearTimeout
l10n:
  sourceCommit: cb279e20569055b200f93802d1704846c28aa04f
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

Die globale **`clearTimeout()`**-Methode hebt einen zuvor durch einen Aufruf von [`setTimeout()`](/de/docs/Web/API/SetTimeout) festgelegten Timeout auf.

Wenn der übergebene Parameter keine zuvor festgelegte Aktion identifiziert, tut diese Methode nichts.

## Syntax

```js-nolint
clearTimeout(timeoutID)
```

### Parameter

- `timeoutID`
  - : Der Bezeichner des Timeouts, das Sie abbrechen möchten. Diese ID wurde durch den entsprechenden Aufruf von `setTimeout()` zurückgegeben.

Es ist erwähnenswert, dass der Pool von IDs, der von [`setTimeout()`](/de/docs/Web/API/SetTimeout) und [`setInterval()`](/de/docs/Web/API/SetInterval) genutzt wird, geteilt wird, was bedeutet, dass Sie `clearTimeout()` und [`clearInterval()`](/de/docs/Web/API/ClearInterval) technisch austauschbar verwenden können. Aus Gründen der Klarheit sollten Sie dies jedoch vermeiden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Führen Sie das nachfolgende Skript im Kontext einer Webseite aus und klicken Sie einmal auf die Seite. Sie werden sehen, dass nach einer Sekunde eine Nachricht erscheint. Wenn Sie innerhalb einer Sekunde mehrfach auf die Seite klicken, wird der Alarm nur einmal angezeigt.

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

Das Übergeben einer ungültigen ID an `clearTimeout()` macht stillschweigend nichts; es wird keine Ausnahme ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`setTimeout()`](/de/docs/Web/API/SetTimeout)
- [`setInterval()`](/de/docs/Web/API/SetInterval)
- [`clearInterval()`](/de/docs/Web/API/ClearInterval)
- [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
