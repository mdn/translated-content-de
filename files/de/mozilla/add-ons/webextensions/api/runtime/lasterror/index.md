---
title: runtime.lastError
slug: Mozilla/Add-ons/WebExtensions/API/runtime/lastError
l10n:
  sourceCommit: 38199423810927262c9cb4dec7ea7de4cb0c5e0f
---

Dieser Wert wird verwendet, um eine Fehlermeldung von einer asynchronen API zu melden, wenn der asynchronen API ein Callback übergeben wird. Dies ist nützlich für Erweiterungen, die die Callback-basierte Version der WebExtension-APIs nutzen.

Es ist nicht erforderlich, diese Eigenschaft zu überprüfen, wenn Sie die auf Versprechen basierende Version der APIs verwenden: übergeben Sie stattdessen einen Fehler-Handler an das Versprechen:

```js
const gettingCookies = browser.cookies.getAll();
gettingCookies.then(onGot, onError);
```

Die Eigenschaft `runtime.lastError` wird gesetzt, wenn eine asynchrone Funktion eine Fehlersituation hat, die dem Aufrufer gemeldet werden muss.

Wenn Sie eine asynchrone Funktion aufrufen, die `lastError` setzen könnte, sollten Sie den Fehler überprüfen, wenn Sie das Ergebnis der Funktion verarbeiten. Wenn `lastError` gesetzt wurde und Sie es innerhalb der Callback-Funktion nicht überprüfen, wird ein Fehler ausgelöst.

## Syntax

```js-nolint
let myError = browser.runtime.lastError;  // null or Error object
```

### Wert

Ein {{jsxref("Error")}}-Objekt, das den Fehler repräsentiert. Die Eigenschaft {{jsxref("Error.message", "message")}} ist ein `string` mit einer menschenlesbaren Beschreibung des Fehlers. Wenn `lastError` nicht gesetzt wurde, ist der Wert `null`.

## Beispiele

Ein Cookie setzen und eine Rückruffunktion verwenden, um das neue Cookie zu protokollieren oder einen Fehler zu melden:

```js
function logCookie(c) {
  if (browser.runtime.lastError) {
    console.error(browser.runtime.lastError);
  } else {
    console.log(c);
  }
}

browser.cookies.set({ url: "https://developer.mozilla.org/" }, logCookie);
```

Dasselbe, aber mit einem Versprechen, um das Ergebnis von `setCookie()` zu bearbeiten:

```js
function logCookie(c) {
  console.log(c);
}

function logError(e) {
  console.error(e);
}

const setCookie = browser.cookies.set({
  url: "https://developer.mozilla.org/",
});

setCookie.then(logCookie, logError);
```

> [!NOTE]
> {{WebExtAPIRef("extension.lastError")}} ist ein Alias für `runtime.lastError`. Sie werden gemeinsam gesetzt, und es funktioniert, wenn Sie einen der beiden überprüfen.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#property-lastError) API von Chromium. Diese Dokumentation stammt aus [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.
