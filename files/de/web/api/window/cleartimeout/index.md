---
title: "Window: clearTimeout() Methode"
short-title: clearTimeout()
slug: Web/API/Window/clearTimeout
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{APIRef("HTML DOM")}}

Die **`clearTimeout()`**-Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle hebt ein Timeout auf, das zuvor durch Aufruf von [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) festgelegt wurde.

Wenn der übergebene Parameter keine zuvor festgelegte Aktion identifiziert, führt diese Methode nichts aus.

## Syntax

```js-nolint
clearTimeout(timeoutID)
```

### Parameter

- `timeoutID`
  - : Der Bezeichner des Timeouts, das Sie abbrechen möchten. Diese ID wurde vom entsprechenden Aufruf von `setTimeout()` zurückgegeben.

Es ist erwähnenswert, dass der Pool von IDs, die von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setInterval()`](/de/docs/Web/API/Window/setInterval) verwendet werden, geteilt wird, was bedeutet, dass Sie `clearTimeout()` und [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) technisch austauschbar verwenden können. Zur Klarheit sollten Sie dies jedoch vermeiden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Führen Sie das unten stehende Skript im Kontext einer Webseite aus und klicken Sie einmal auf die Seite. Sie werden sehen, dass nach einer Sekunde eine Nachricht angezeigt wird. Wenn Sie die Seite innerhalb einer Sekunde mehrmals anklicken, erscheint der Alarm nur einmal.

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

- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout)
- [`WorkerGlobalScope.clearTimeout()`](/de/docs/Web/API/WorkerGlobalScope/clearTimeout)
- [`Window.clearInterval()`](/de/docs/Web/API/Window/clearInterval)
- [`Window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame)
