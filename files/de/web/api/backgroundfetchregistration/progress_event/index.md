---
title: "BackgroundFetchRegistration: progress Ereignis"
short-title: progress
slug: Web/API/BackgroundFetchRegistration/progress_event
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Das **`progress`**-Ereignis der Schnittstelle [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration) wird ausgelöst, wenn der zugehörige Hintergrundabruf fortschreitet.

Praktisch wird dieses Ereignis ausgelöst, wenn eine der folgenden Eigenschaften einen neuen Wert zurückgibt:

- [`uploaded`](/de/docs/Web/API/BackgroundFetchRegistration/uploaded),
- [`downloaded`](/de/docs/Web/API/BackgroundFetchRegistration/downloaded),
- [`result`](/de/docs/Web/API/BackgroundFetchRegistration/result), oder
- [`failureReason`](/de/docs/Web/API/BackgroundFetchRegistration/failureReason).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie die `onprogress`-Ereigniseigenschaft auf dem entsprechenden [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Objekt.

```js-nolint
addEventListener("progress", (event) => { })
onprogress = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiel

Das folgende Beispiel zeigt, wie der Fortschritt eines Downloads protokolliert wird. Der Code prüft zunächst, ob ein `downloadTotal` bereitgestellt wurde, als der Hintergrundabruf registriert wurde. Dies wird dann verwendet, um den Prozentsatz basierend auf der `downloaded`-Eigenschaft zu berechnen.

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
