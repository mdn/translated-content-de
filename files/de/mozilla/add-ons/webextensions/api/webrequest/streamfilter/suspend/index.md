---
title: webRequest.StreamFilter.suspend()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/suspend
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Hält eine Anfrage an. Nachdem dies aufgerufen wurde, werden keine weiteren Daten geliefert, bis die Anfrage mit einem Aufruf von {{WebExtAPIRef("webRequest.StreamFilter.resume()", "resume()")}} fortgesetzt wird.

Sie können diese Funktion erst aufrufen, nachdem das {{WebExtAPIRef("webRequest.StreamFilter.onstart", "onstart")}}-Ereignis ausgelöst wurde.

## Syntax

```js-nolint
filter.suspend()
```

### Parameter

Keine.

### Rückgabewert

Keine.

## Browser-Kompatibilität

{{Compat}}

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
