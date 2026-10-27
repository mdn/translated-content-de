---
title: "WorkerGlobalScope: online-Event"
short-title: online
slug: Web/API/WorkerGlobalScope/online_event
l10n:
  sourceCommit: 92c5e81c587ffea6177431743106118984f1675d
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Das **`online`**-Event von [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) wird ausgelöst, wenn das Gerät wieder eine Verbindung zum Internet herstellt.

## Syntax

Verwenden Sie den Event-Namen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("online", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
ononline = (event) => { }
```

## Event-Typ

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

Der folgende Codeausschnitt zeigt einen `ononline`-Handler, der innerhalb eines Workers festgelegt wird. Beachten Sie, dass dadurch gegebenenfalls andere mit `ononline` hinzugefügte Event-Listener ersetzt werden:

```js
self.ononline = () => {
  console.log("Your worker is now online");
};
```

Derselbe Codeausschnitt, jedoch mit `addEventListener()`:

```js
self.addEventListener("online", () => {
  console.log("Your worker is now online");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

Die Schnittstelle [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope), zu der dieses Event gehört.
