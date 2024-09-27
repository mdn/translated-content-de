---
title: "PressureObserver: takeRecords()-Methode"
short-title: takeRecords()
slug: Web/API/PressureObserver/takeRecords
l10n:
  sourceCommit: a251e34887530216e319fee73b5b859c8c943a53
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`takeRecords()`**-Methode der [`PressureObserver`](/de/docs/Web/API/PressureObserver)-Schnittstelle gibt die aktuelle Liste der im Pressure Observer gespeicherten Druckaufzeichnungen zurück und leert diese.

Dies ist nützlich, wenn Sie die Beobachtung einer Quelle stoppen möchten, aber sicherstellen wollen, dass alle Aufzeichnungen erfasst werden, die noch nicht in den Observer-Callback übergeben wurden.

## Syntax

```js-nolint
takeRecords()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Array")}} von [`PressureRecord`](/de/docs/Web/API/PressureRecord)-Objekten.

## Beispiele

### Aufzeichnungen entnehmen

Im folgenden Beispiel wird die aktuelle Liste der Druckaufzeichnungen in `records` gespeichert und der Pressure Observer geleert.

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
