---
title: "BackgroundFetchRegistration: progress-Ereignis"
short-title: progress
slug: Web/API/BackgroundFetchRegistration/progress_event
l10n:
  sourceCommit: 9a0e5c1cfa8d5079e22c410de757707706f1cc75
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Das **`progress`**-Ereignis der [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Schnittstelle wird ausgelöst, wenn der zugehörige Hintergrundabruf fortschreitet.

In der Praxis wird dieses Ereignis ausgelöst, wenn eine der folgenden Eigenschaften einen neuen Wert zurückgibt:

- [`uploaded`](/de/docs/Web/API/BackgroundFetchRegistration/uploaded),
- [`downloaded`](/de/docs/Web/API/BackgroundFetchRegistration/downloaded),
- [`result`](/de/docs/Web/API/BackgroundFetchRegistration/result) oder
- [`failureReason`](/de/docs/Web/API/BackgroundFetchRegistration/failureReason).

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("progress", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onprogress = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiel

Das folgende Beispiel zeigt, wie Sie den Fortschritt eines Downloads protokollieren. Der Code prüft zunächst, ob bei der Registrierung des Hintergrundabrufs ein `downloadTotal` angegeben wurde. Dieser Wert wird dann verwendet, um anhand der Eigenschaft `downloaded` den Prozentsatz zu berechnen.

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
