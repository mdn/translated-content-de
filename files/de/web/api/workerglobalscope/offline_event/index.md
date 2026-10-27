---
title: "WorkerGlobalScope: offline-Ereignis"
short-title: offline
slug: Web/API/WorkerGlobalScope/offline_event
l10n:
  sourceCommit: 92c5e81c587ffea6177431743106118984f1675d
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Das **`offline`**-Ereignis von [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) wird ausgelöst, wenn das Gerät die Verbindung zum Internet verliert.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("offline", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onoffline = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

Der folgende Codeausschnitt zeigt einen `onoffline`-Handler, der innerhalb eines Workers festgelegt wird. Beachten Sie, dass dadurch gegebenenfalls andere mit `onoffline` hinzugefügte Ereignis-Listener ersetzt werden:

```js
self.onoffline = () => {
  console.log("Your worker is now offline");
};
```

Derselbe Codeausschnitt, jedoch mit `addEventListener()`:

```js
self.addEventListener("offline", () => {
  console.log("Your worker is now offline");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

Die [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstelle, zu der das Ereignis gehört.
