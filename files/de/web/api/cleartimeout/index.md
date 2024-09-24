---
title: Globale Funktion clearTimeout()
short-title: clearTimeout()
slug: Web/API/clearTimeout
l10n:
  sourceCommit: cb279e20569055b200f93802d1704846c28aa04f
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

Die globale Methode **`clearTimeout()`** hebt ein Timeout auf, das zuvor durch den Aufruf von {{domxref("setTimeout()")}} festgelegt wurde.

Falls der übergebene Parameter keine zuvor festgelegte Aktion identifiziert, unternimmt diese Methode nichts.

## Syntax

```js-nolint
clearTimeout(timeoutID)
```

### Parameter

- `timeoutID`
  - : Der Bezeichner des Timeouts, das Sie aufheben möchten. Diese ID wurde durch den entsprechenden Aufruf von `setTimeout()` zurückgegeben.

Es ist bemerkenswert, dass der Pool von IDs, die von
{{domxref("setTimeout()")}} und
{{domxref("setInterval()")}} verwendet werden, gemeinsam genutzt wird, was bedeutet, dass Sie technisch `clearTimeout()` und
{{domxref("clearInterval", "clearInterval()")}}
austauschbar verwenden können. Aus Gründen der Klarheit sollten Sie dies jedoch vermeiden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Führen Sie das folgende Skript im Kontext einer Webseite aus und klicken Sie einmal auf die Seite. Sie werden eine Nachricht in einer Sekunde sehen. Wenn Sie innerhalb einer Sekunde mehrfach auf die Seite klicken, erscheint der Alarm nur einmal.

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

## Anmerkungen

Das Übergeben einer ungültigen ID an `clearTimeout()` bewirkt stillschweigend nichts; es wird keine Ausnahme ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("setTimeout()")}}
- {{domxref("setInterval()")}}
- {{domxref("clearInterval()")}}
- {{domxref("Window.requestAnimationFrame()")}}
