---
title: "BackgroundFetchRegistration: failureReason-Eigenschaft"
short-title: failureReason
slug: Web/API/BackgroundFetchRegistration/failureReason
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`failureReason`** schreibgeschützte Eigenschaft des [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Interfaces gibt einen String zurück, dessen Wert den Grund für ein Scheitern des Hintergrundabrufs angibt.

Wenn sich der Wert dieser Eigenschaft ändert, wird das [progress](/de/docs/Web/API/BackgroundFetchRegistration/progress_event)-Ereignis auf dem zugehörigen [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Objekt ausgelöst.

## Wert

Einer der folgenden Strings:

- `""`
  - : Der Hintergrundabruf ist nicht abgeschlossen oder war erfolgreich.
- `"aborted"`
  - : Der Vorgang wurde vom Benutzer abgebrochen oder es wurde [`abort()`](/de/docs/Web/API/BackgroundFetchRegistration/abort) aufgerufen.
- `"bad-status"`
  - : Eine Antwort hatte einen nicht-ok Status (einen Status außerhalb des Bereichs 200-299).
- `"fetch-error"`
  - : Ein Abruf scheiterte aus anderen Gründen, zum Beispiel CORS oder ein Netzwerkfehler.
- `"quota-exceeded"`
  - : Das Speicherlimit wurde während des Vorgangs erreicht.
- `"download-total-exceeded"`
  - : Das angegebene `downloadTotal` wurde überschritten. Dieser Wert wurde beim Registrieren des Hintergrundabrufs festgelegt.

## Beispiele

Das Protokollieren dieser Eigenschaft in der Konsole gibt den Grund für das Scheitern des Abrufs zurück oder einen leeren String, wenn er erfolgreich war oder noch nicht abgeschlossen ist.

```js
console.log(bgFetch.failureReason);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
