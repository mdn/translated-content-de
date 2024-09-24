---
title: "AbortSignal: Methode any() (statisch)"
short-title: any()
slug: Web/API/AbortSignal/any_static
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **statische Methode `AbortSignal.any()`** nimmt ein iterierbares Objekt von Abbruchsignalen und gibt ein {{domxref("AbortSignal")}} zurück. Das zurückgegebene Abbruchsignal wird abgebrochen, wenn eines der Eingabe-Abbruchsignale abgebrochen wird. Der {{domxref("AbortSignal.reason", "Abbruchgrund","","true")}} wird auf den Grund des ersten Signals gesetzt, das abgebrochen wird. Wenn eines der angegebenen Abbruchsignale bereits abgebrochen ist, wird auch das zurückgegebene {{domxref("AbortSignal")}} abgebrochen.

## Syntax

```js-nolint
AbortSignal.any(iterable)
```

### Parameter

- `iterable`
  - : Ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie ein {{jsxref("Array")}}) von Abbruchsignalen.

### Rückgabewert

Ein {{domxref("AbortSignal")}}, das:

- **Bereits abgebrochen** ist, wenn eines der angegebenen Abbruchsignale bereits abgebrochen ist. Der Grund des zurückgegebenen {{domxref("AbortSignal")}} wird bereits auf den {{domxref("AbortSignal.reason", "Grund")}} des ersten Abbruchsignals gesetzt, das bereits abgebrochen wurde.
- **Asynchron abgebrochen** wird, wenn ein Abbruchsignal in `iterable` abbricht. Der {{domxref("AbortSignal.reason", "Grund")}} wird auf den Grund des ersten Abbruchsignals gesetzt, das abgebrochen wird.

## Beispiele

### Verwendung von `AbortSignal.any()`

Dieses Beispiel zeigt die Kombination eines Signals von einem {{domxref("AbortController")}} und eines Timeout-Signals von {{domxref("AbortSignal/timeout_static", "AbortSignal.timeout")}}.

```js
const cancelDownloadButton = document.getElementById("cancelDownloadButton");

const userCancelController = new AbortController();

cancelDownloadButton.addEventListener("click", () => {
  userCancelController.abort();
});

// Timeout nach 5 Minuten
const timeoutSignal = AbortSignal.timeout(1_000 * 60 * 5);

// Dieses Signal wird abgebrochen, wenn entweder der Benutzer den Abbrechen-Button klickt oder 5 Minuten verstrichen sind,
// je nachdem, was zuerst eintritt
const combinedSignal = AbortSignal.any([
  userCancelController.signal,
  timeoutSignal,
]);

try {
  const res = await fetch(someUrlToDownload, {
    // Stoppen Sie den Abruf, wenn eines der Signale abbricht
    signal: combinedSignal,
  });
  const body = await res.blob();
  // Machen Sie etwas mit dem heruntergeladenen Inhalt:
  // ...
} catch (e) {
  if (e.name === "AbortError") {
    // Vom Benutzer abgebrochen
  } else if (e.name === "TimeoutError") {
    // Zeigen Sie dem Benutzer, dass der Download abgelaufen ist
  } else {
    // Anderer Fehler, z.B. Netzwerkfehler
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
