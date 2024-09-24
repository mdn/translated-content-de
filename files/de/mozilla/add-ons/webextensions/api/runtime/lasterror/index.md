---
title: runtime.lastError
slug: Mozilla/Add-ons/WebExtensions/API/runtime/lastError
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Dieser Wert wird verwendet, um eine Fehlermeldung von einer asynchronen API zu melden, wenn der asynchronen API eine Rückruffunktion gegeben wird. Dies ist nützlich für Erweiterungen, die die rückrufbasierte Version der WebExtension-APIs verwenden.

Sie müssen diese Eigenschaft nicht überprüfen, wenn Sie die auf Versprechen basierende Version der APIs verwenden: Stattdessen übergeben Sie dem Versprechen einen Fehler-Handler:

```js
const gettingCookies = browser.cookies.getAll();
gettingCookies.then(onGot, onError);
```

Die Eigenschaft `runtime.lastError` wird gesetzt, wenn eine asynchrone Funktion einen Fehlerzustand hat, den sie ihrem Aufrufer melden muss.

Wenn Sie eine asynchrone Funktion aufrufen, die möglicherweise `lastError` setzt, sollten Sie erwarten, den Fehler zu überprüfen, wenn Sie das Ergebnis der Funktion behandeln. Wenn `lastError` gesetzt wurde und Sie ihn nicht innerhalb der Rückruffunktion überprüfen, wird ein Fehler ausgelöst.

## Syntax

```js-nolint
let myError = browser.runtime.lastError;  // null oder Error-Objekt
```

### Wert

Ein {{jsxref("Error")}}-Objekt, das den Fehler darstellt. Die {{jsxref("Error.message", "message")}}-Eigenschaft ist ein `string` mit einer menschenlesbaren Beschreibung des Fehlers. Wenn `lastError` nicht gesetzt wurde, ist der Wert `null`.

## Beispiele

Setzen Sie ein Cookie, indem Sie einen Rückruf verwenden, um das neue Cookie zu protokollieren oder einen Fehler zu melden:

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

> **Hinweis:** `runtime.lastError` ist ein Alias für {{WebExtAPIRef("extension.lastError")}}. Sie werden zusammen gesetzt, und die Überprüfung von einem der beiden wird funktionieren.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#property-lastError) API von Chromium. Diese Dokumentation stammt von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.
