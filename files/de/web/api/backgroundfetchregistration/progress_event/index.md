---
title: "BackgroundFetchRegistration: Fortschrittsereignis"
short-title: Fortschritt
slug: Web/API/BackgroundFetchRegistration/progress_event
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Das **`progress`**-Ereignis der {{domxref("BackgroundFetchRegistration")}}-Schnittstelle wird ausgelöst, wenn der zugehörige Hintergrundabruf Fortschritte macht.

Praktisch wird dieses Ereignis ausgelöst, wenn einer der folgenden Eigenschaften einen neuen Wert zurückgeben wird:

- {{domxref("BackgroundFetchRegistration.uploaded", "uploaded")}},
- {{domxref("BackgroundFetchRegistration.downloaded", "downloaded")}},
- {{domxref("BackgroundFetchRegistration.result", "result")}}, oder
- {{domxref("BackgroundFetchRegistration.failureReason", "failureReason")}}.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie die `onprogress`-Ereigniseigenschaft auf das relevante {{domxref("BackgroundFetchRegistration")}}-Objekt.

```js-nolint
addEventListener("progress", (event) => { })
onprogress = (event) => { }
```

## Ereignistyp

Ein generisches {{domxref("Event")}} ohne zusätzliche Eigenschaften.

## Beispiel

Das folgende Beispiel zeigt, wie der Fortschritt eines Downloads protokolliert wird. Der Code überprüft zunächst, ob ein `downloadTotal` angegeben wurde, als der Hintergrundabruf registriert wurde. Dies wird dann verwendet, um den Prozentsatz basierend auf der `downloaded`-Eigenschaft zu berechnen.

```js
bgFetch.addEventListener("progress", () => {
  if (!bgFetch.downloadTotal) return;
  const percent = Math.round(
    (bgFetch.downloaded / bgFetch.downloadTotal) * 100,
  );
  console.log(`Download progress: ${percent}%`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
