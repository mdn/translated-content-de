---
title: "XMLHttpRequest: readystatechange-Ereignis"
short-title: readystatechange
slug: Web/API/XMLHttpRequest/readystatechange_event
l10n:
  sourceCommit: d4f95d5a32920324e2502a556d8bdd9d7f446718
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Das `readystatechange`-Ereignis wird jedes Mal ausgelöst, wenn sich die Eigenschaft [`readyState`](/de/docs/Web/API/XMLHttpRequest/readyState) von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) ändert.

> [!WARNING]
> Dieses Ereignis sollte nicht bei synchronen Anfragen verwendet werden und darf nicht aus nativem Code verwendet werden.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("readystatechange", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onreadystatechange = (event) => { }
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
