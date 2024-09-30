---
title: "XMLHttpRequest: readystatechange Event"
short-title: readystatechange
slug: Web/API/XMLHttpRequest/readystatechange_event
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Das `readystatechange`-Ereignis wird jedes Mal ausgelöst, wenn sich die [`readyState`](/de/docs/Web/API/XMLHttpRequest/readyState)-Eigenschaft des [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) ändert.

> [!WARNING]
> Dies sollte nicht mit synchronen Anfragen verwendet werden und darf nicht aus nativen Code benutzt werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("readystatechange", (event) => {});

onreadystatechange = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiele

```js
const xhr = new XMLHttpRequest();
const method = "GET";
const url = "https://developer.mozilla.org/";

xhr.open(method, url, true);
xhr.onreadystatechange = () => {
  // In local files, status is 0 upon success in Mozilla Firefox
  if (xhr.readyState === XMLHttpRequest.DONE) {
    const status = xhr.status;
    if (status === 0 || (status >= 200 && status < 400)) {
      // The request has been completed successfully
      console.log(xhr.responseText);
    } else {
      // Oh no! There has been an error with the request!
    }
  }
};
xhr.send();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
