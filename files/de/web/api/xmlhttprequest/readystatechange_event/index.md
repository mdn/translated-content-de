---
title: "XMLHttpRequest: readystatechange-Ereignis"
short-title: readystatechange
slug: Web/API/XMLHttpRequest/readystatechange_event
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Das `readystatechange`-Ereignis wird ausgelöst, wann immer sich die {{domxref("XMLHttpRequest.readyState", "readyState")}}-Eigenschaft des {{domxref("XMLHttpRequest")}} ändert.

> [!WARNING]
> Dies sollte nicht mit synchronen Anfragen verwendet werden und darf nicht aus nativen Code aufgerufen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("readystatechange", (event) => {});

onreadystatechange = (event) => {};
```

## Ereignistyp

Ein generisches {{DOMxRef("Event")}} ohne zusätzliche Eigenschaften.

## Beispiele

```js
const xhr = new XMLHttpRequest();
const method = "GET";
const url = "https://developer.mozilla.org/";

xhr.open(method, url, true);
xhr.onreadystatechange = () => {
  // Bei lokalen Dateien ist der Status bei Erfolg 0 in Mozilla Firefox
  if (xhr.readyState === XMLHttpRequest.DONE) {
    const status = xhr.status;
    if (status === 0 || (status >= 200 && status < 400)) {
      // Die Anfrage wurde erfolgreich abgeschlossen
      console.log(xhr.responseText);
    } else {
      // Oh nein! Es gab einen Fehler bei der Anfrage!
    }
  }
};
xhr.send();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
