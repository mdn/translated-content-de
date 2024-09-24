---
title: "PressureObserver: Methode takeRecords()"
short-title: takeRecords()
slug: Web/API/PressureObserver/takeRecords
l10n:
  sourceCommit: a251e34887530216e319fee73b5b859c8c943a53
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`takeRecords()`** Methode der {{domxref('PressureObserver')}}-Schnittstelle gibt die aktuelle Liste der in der Pressure Observer gespeicherten Druckaufzeichnungen zurück und leert sie.

Sie ist nützlich, wenn Sie das Beobachten einer Quelle stoppen möchten, aber sicherstellen wollen, dass Sie alle Aufzeichnungen erhalten, die noch nicht an den Observer-Callback übergeben wurden.

## Syntax

```js-nolint
takeRecords()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Array")}} von {{domxref("PressureRecord")}}-Objekten.

## Beispiele

### Aufzeichnungen nehmen

Das folgende Beispiel speichert die aktuelle Liste der Druckaufzeichnungen in `records` und leert den Pressure Observer.

```js
const observer = new PressureObserver(callback):
observer.observe("cpu");

const records = observer.takeRecords();
observer.disconnect(); // Beobachter jetzt abschalten, nachdem wir die Aufzeichnungen genommen haben

if (records.length > 0) {
  console.log(records[0].state);
  console.log(records[0].time);
}
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
