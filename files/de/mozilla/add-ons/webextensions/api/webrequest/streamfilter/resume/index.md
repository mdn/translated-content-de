---
title: webRequest.StreamFilter.resume()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/resume
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Setzt eine Anforderung fort, die zuvor durch einen Aufruf von {{WebExtAPIRef("webRequest.StreamFilter.suspend()", "suspend()")}} angehalten wurde.

Diese Funktion kann erst aufgerufen werden, nachdem das Ereignis {{WebExtAPIRef("webRequest.StreamFilter.onstart", "onstart")}} ausgelöst wurde.

## Syntax

```js-nolint
StreamFilter.resume()
```

### Parameter

Keine.

### Rückgabewert

Keine.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Beispiel verwendet suspend/resume, um eine Webanforderung zu verzögern.

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
