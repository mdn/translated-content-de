---
title: "BackgroundFetchRegistration: progress Ereignis"
short-title: progress
slug: Web/API/BackgroundFetchRegistration/progress_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Das **`progress`** Ereignis der [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration) Schnittstelle wird ausgelöst, wenn der zugehörige Hintergrundabruf Fortschritte macht.

Praktisch wird dieses Ereignis ausgelöst, wenn eine der folgenden Eigenschaften einen neuen Wert zurückgibt:

- [`uploaded`](/de/docs/Web/API/BackgroundFetchRegistration/uploaded),
- [`downloaded`](/de/docs/Web/API/BackgroundFetchRegistration/downloaded),
- [`result`](/de/docs/Web/API/BackgroundFetchRegistration/result) oder
- [`failureReason`](/de/docs/Web/API/BackgroundFetchRegistration/failureReason).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("progress", (event) => { })

onprogress = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiel

Das folgende Beispiel demonstriert, wie der Fortschritt eines Downloads protokolliert wird. Der Code überprüft zuerst, ob ein `downloadTotal` angegeben wurde, als der Hintergrundabruf registriert wurde. Dies wird dann verwendet, um den prozentualen Anteil basierend auf der Eigenschaft `downloaded` zu berechnen.

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
