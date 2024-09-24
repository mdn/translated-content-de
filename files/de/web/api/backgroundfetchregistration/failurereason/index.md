---
title: "BackgroundFetchRegistration: failureReason-Eigenschaft"
short-title: failureReason
slug: Web/API/BackgroundFetchRegistration/failureReason
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`failureReason`** des {{domxref("BackgroundFetchRegistration")}}-Interfaces gibt einen String zurück, der einen Grund für das Scheitern eines Hintergrundabrufs angibt.

Wenn sich der Wert dieser Eigenschaft ändert, wird das [progress](/de/docs/Web/API/BackgroundFetchRegistration/progress_event)-Event am zugehörigen {{domxref("BackgroundFetchRegistration")}}-Objekt ausgelöst.

## Wert

Einer der folgenden Strings:

- `""`
  - : Der Hintergrundabruf ist noch nicht abgeschlossen oder war erfolgreich.
- `"aborted"`
  - : Die Operation wurde vom Benutzer abgebrochen oder {{domxref("BackgroundFetchRegistration.abort()","abort()")}} wurde aufgerufen.
- `"bad-status"`
  - : Eine Antwort hatte einen nicht-ok-Status (einen Status außerhalb des Bereichs 200-299).
- `"fetch-error"`
  - : Ein Abruf ist aus anderen Gründen fehlgeschlagen, zum Beispiel CORS oder ein Netzwerkfehler.
- `"quota-exceeded"`
  - : Das Speicherlimit wurde während der Operation erreicht.
- `"download-total-exceeded"`
  - : Das angegebene `downloadTotal` wurde überschritten. Dieser Wert wurde bei der Registrierung des Hintergrundabrufs festgelegt.

## Beispiele

Das Protokollieren dieser Eigenschaft in die Konsole gibt den Grund für das Scheitern des Abrufs aus oder einen leeren String, wenn er erfolgreich war oder noch nicht abgeschlossen ist.

```js
console.log(bgFetch.failureReason);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
