---
title: webRequest.StreamFilter.resume()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/resume
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Setzt eine Anfrage fort, die zuvor durch einen Aufruf von {{WebExtAPIRef("webRequest.StreamFilter.suspend()", "suspend()")}} angehalten wurde.

Sie können diese Funktion erst aufrufen, nachdem das Ereignis {{WebExtAPIRef("webRequest.StreamFilter.onstart", "onstart")}} ausgelöst wurde.

## Syntax

```js-nolint
StreamFilter.resume()
```

### Parameter

Keine.

### Rückgabewert

Keiner.

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
