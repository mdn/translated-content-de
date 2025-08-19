---
title: "Window: clearTimeout() Methode"
short-title: clearTimeout()
slug: Web/API/Window/clearTimeout
l10n:
  sourceCommit: 79fdc26fea835d65c9361541bb8ab1896f307475
---

{{APIRef("HTML DOM")}}

Die **`clearTimeout()`** Methode der [`Window`](/de/docs/Web/API/Window) Schnittstelle bricht einen zuvor durch einen Aufruf von [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) gesetzten Timeout ab.

Wenn der angegebene Parameter keine zuvor festgelegte Aktion identifiziert, hat diese Methode keine Auswirkung.

## Syntax

```js-nolint
clearTimeout(timeoutID)
```

### Parameter

- `timeoutID`
  - : Die Kennung des Timeouts, die Sie abbrechen möchten. Diese ID wurde durch den entsprechenden Aufruf von `setTimeout()` zurückgegeben.

Es ist erwähnenswert, dass der Pool von IDs, der von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setInterval()`](/de/docs/Web/API/Window/setInterval) verwendet wird, gemeinsam genutzt wird, was bedeutet, dass Sie technisch gesehen `clearTimeout()` und [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) austauschbar verwenden können. Aus Gründen der Klarheit sollten Sie dies allerdings vermeiden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Führen Sie das folgende Skript im Kontext einer Webseite aus und klicken Sie einmal auf die Seite. Sie werden sehen, dass eine Nachricht nach einer Sekunde erscheint. Wenn Sie innerhalb einer Sekunde mehrmals auf die Seite klicken, erscheint der Alarm nur einmal.

```js
const alarm = {
  remind(message) {
    alert(message);
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

Das Übergeben einer ungültigen ID an `clearTimeout()` hat keine Wirkung; es wird keine Ausnahme ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout)
- [`WorkerGlobalScope.clearTimeout()`](/de/docs/Web/API/WorkerGlobalScope/clearTimeout)
- [`Window.clearInterval()`](/de/docs/Web/API/Window/clearInterval)
- [`Window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame)
