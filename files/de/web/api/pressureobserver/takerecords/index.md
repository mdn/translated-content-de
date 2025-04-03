---
title: "PressureObserver: takeRecords() Methode"
short-title: takeRecords()
slug: Web/API/PressureObserver/takeRecords
l10n:
  sourceCommit: cc41ecd796870c2b6c77ad0b04fcb8d8c7d877d2
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_service")}}{{securecontext_header}}

Die **`takeRecords()`**-Methode der [`PressureObserver`](/de/docs/Web/API/PressureObserver)-Schnittstelle gibt die aktuelle Liste der in der Druckbeobachtung gespeicherten Druckaufzeichnungen zurück und leert sie.

Sie ist nützlich, wenn Sie die Beobachtung einer Quelle beenden möchten, aber sicherstellen wollen, dass alle Aufzeichnungen, die noch nicht an den Beobachtercallback übergeben wurden, erfasst werden.

## Syntax

```js-nolint
takeRecords()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Array")}} von [`PressureRecord`](/de/docs/Web/API/PressureRecord)-Objekten.

## Beispiele

### Aufzeichnungen aufnehmen

Im folgenden Beispiel wird die aktuelle Liste der Druckaufzeichnungen in `records` gespeichert und der Druckbeobachter geleert.

```js
const observer = new PressureObserver(callback);
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
