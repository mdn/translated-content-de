---
title: cookies.getAllCookieStores()
slug: Mozilla/Add-ons/WebExtensions/API/cookies/getAllCookieStores
l10n:
  sourceCommit: 6f58b8afb8e045e0d706ac0f0fdeacfaea487f86
---

{{AddonSidebar}}

Die **`getAllCookieStores()`**-Methode der {{WebExtAPIRef("cookies")}} API gibt eine Liste aller Cookie Stores zurück.

Um diese Methode zu verwenden, muss eine Erweiterung die Berechtigung `"cookies"` haben. Siehe [`cookie` permissions](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#permissions) für mehr Details.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingStores = browser.cookies.getAllCookieStores()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem `array` von {{WebExtAPIRef('cookies.CookieStore')}} Objekten erfüllt wird, die alle Cookie Stores repräsentieren.

## Beispiele

In diesem Beispiel wird die Methode `getAllCookieStores()` verwendet, um alle im Browser verfügbaren Cookie Stores abzurufen und jede Cookie Store ID sowie die Tabs, die sich jeden Cookie Store teilen, auszugeben.

```js
function logStores(cookieStores) {
  for (const store of cookieStores) {
    console.log(`Cookie store: ${store.id}\n Tab IDs: ${store.tabIds}`);
  }
}

browser.cookies.getAllCookieStores().then(logStores);
```

Jedes Element des `cookieStores`-Array ist ein {{WebExtAPIRef("cookies.CookieStore")}} Objekt.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies#method-getAllCookieStores) API von Chromium. Diese Dokumentation stammt aus [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) im Chromium-Code.
