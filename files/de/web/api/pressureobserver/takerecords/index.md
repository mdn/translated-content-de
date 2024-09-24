---
title: "PressureObserver: takeRecords()-Methode"
short-title: takeRecords()
slug: Web/API/PressureObserver/takeRecords
l10n:
  sourceCommit: e1d2d6a3880d47638de6b5a54b58df92826ec58e
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_service")}}{{securecontext_header}}

Die **`takeRecords()`**-Methode des [`PressureObserver`](/de/docs/Web/API/PressureObserver)-Interfaces gibt die aktuelle Liste der in der Druckbeobachtung gespeicherten Druckaufzeichnungen zurück und leert diese.

Sie ist nützlich, wenn Sie die Beobachtung einer Quelle stoppen möchten, aber sicherstellen wollen, dass Sie alle Aufzeichnungen erhalten, die noch nicht an den Beobachter-Callback übergeben wurden.

## Syntax

```js-nolint
takeRecords()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Array")}} von [`PressureRecord`](/de/docs/Web/API/PressureRecord)-Objekten.

## Beispiele

### Aufzeichnungen abrufen

Im folgenden Beispiel wird die aktuelle Liste der Druckaufzeichnungen in `records` gespeichert und der Druckbeobachter geleert.

```js
const observer = new PressureObserver(callback):
observer.observe("cpu");

const records = observer.takeRecords();
observer.disconnect(); // shut down observer now that we've taken records

if (records.length > 0) {
  console.log(records[0].state);
  console.log(records[0].time);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
