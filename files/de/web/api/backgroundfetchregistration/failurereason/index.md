---
title: "BackgroundFetchRegistration: failureReason-Eigenschaft"
short-title: failureReason
slug: Web/API/BackgroundFetchRegistration/failureReason
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die schreibgeschützte **`failureReason`**-Eigenschaft des [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Interfaces gibt einen String zurück, der einen Grund für ein fehlgeschlagenes Hintergrund-Abrufen angibt.

Wenn sich der Wert dieser Eigenschaft ändert, wird das [progress](/de/docs/Web/API/BackgroundFetchRegistration/progress_event)-Ereignis am zugehörigen [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Objekt ausgelöst.

## Wert

Einer der folgenden Strings:

- `""`
  - : Der Hintergrundabruf wurde noch nicht abgeschlossen oder war erfolgreich.
- `"aborted"`
  - : Die Operation wurde vom Benutzer abgebrochen oder [`abort()`](/de/docs/Web/API/BackgroundFetchRegistration/abort) wurde aufgerufen.
- `"bad-status"`
  - : Eine Antwort hatte einen nicht-ok Status (einen Status außerhalb des Bereichs 200-299).
- `"fetch-error"`
  - : Ein Abruf ist aus anderen Gründen fehlgeschlagen, zum Beispiel CORS oder Netzwerkausfall.
- `"quota-exceeded"`
  - : Die Speicherquote wurde während der Operation erreicht.
- `"download-total-exceeded"`
  - : Das angegebene `downloadTotal` wurde überschritten. Dieser Wert wurde festgelegt, als das Hintergrundabrufen registriert wurde.

## Beispiele

Das Protokollieren dieser Eigenschaft in die Konsole gibt den Grund für das Scheitern des Abrufs aus, oder einen leeren String, wenn es erfolgreich war oder noch nicht abgeschlossen ist.

```js
console.log(bgFetch.failureReason);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
