---
title: "BackgroundFetchRegistration: failureReason-Eigenschaft"
short-title: failureReason
slug: Web/API/BackgroundFetchRegistration/failureReason
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`failureReason`** des [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Interfaces gibt einen String zurück, der einen Grund für das Scheitern eines Hintergrundabrufs angibt.

Wenn sich der Wert dieser Eigenschaft ändert, wird das [progress](/de/docs/Web/API/BackgroundFetchRegistration/progress_event)-Ereignis beim zugehörigen [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Objekt ausgelöst.

## Wert

Einer der folgenden Strings:

- `""`
  - : Der Hintergrundabruf wurde nicht abgeschlossen oder war erfolgreich.
- `"aborted"`
  - : Die Operation wurde vom Benutzer abgebrochen oder [`abort()`](/de/docs/Web/API/BackgroundFetchRegistration/abort) wurde aufgerufen.
- `"bad-status"`
  - : Eine Antwort hatte einen nicht-ok Status (einen Status außerhalb des Bereichs 200-299).
- `"fetch-error"`
  - : Ein Abruf ist aus anderen Gründen fehlgeschlagen, zum Beispiel CORS oder ein Netzwerkfehler.
- `"quota-exceeded"`
  - : Das Speicherkontingent wurde während der Operation erreicht.
- `"download-total-exceeded"`
  - : Der angegebene `downloadTotal` wurde überschritten. Dieser Wert wurde beim Registrieren des Hintergrundabrufs festgelegt.

## Beispiele

Wenn diese Eigenschaft in der Konsole protokolliert wird, wird der Grund angezeigt, warum der Abruf fehlgeschlagen ist, oder ein leerer String, wenn er erfolgreich war oder noch nicht abgeschlossen ist.

```js
console.log(bgFetch.failureReason);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
