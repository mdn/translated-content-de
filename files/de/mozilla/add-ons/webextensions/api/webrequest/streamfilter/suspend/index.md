---
title: webRequest.StreamFilter.suspend()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/suspend
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Setzt eine Anfrage aus. Nachdem dies aufgerufen wurde, werden keine weiteren Daten geliefert, bis die Anfrage mit einem Aufruf von {{WebExtAPIRef("webRequest.StreamFilter.resume()", "resume()")}} fortgesetzt wird.

Sie können diese Funktion erst aufrufen, nachdem das {{WebExtAPIRef("webRequest.StreamFilter.onstart", "onstart")}}-Ereignis ausgelöst wurde.

## Syntax

```js-nolint
filter.suspend()
```

### Parameter

Keine.

### Rückgabewert

Keine.

## Beispiele

Dieses Beispiel verwendet suspend/resume, um eine Webanfrage zu verzögern.

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);

  filter.onstart = (event) => {
    filter.suspend();

    setTimeout(() => {
      filter.resume();
      filter.disconnect();
    }, 1000);
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.org/"], types: ["main_frame"] },
  ["blocking"],
);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
