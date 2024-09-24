---
title: "PressureObserver: unobserve() Methode"
short-title: unobserve()
slug: Web/API/PressureObserver/unobserve
l10n:
  sourceCommit: e1d2d6a3880d47638de6b5a54b58df92826ec58e
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_service")}}{{securecontext_header}}

Die **`unobserve()`**-Methode des [`PressureObserver`](/de/docs/Web/API/PressureObserver)-Interfaces verhindert, dass der Pressure Observer Callback Druckaufzeichnungen von der angegebenen Quelle empfängt.

## Syntax

```js-nolint
unobserve(source)
```

### Parameter

- `source`
  - : Ein String, der angibt, welche [`source`](/de/docs/Web/API/PressureRecord/source) nicht mehr beobachtet werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Das Beobachten einer bestimmten Quelle beenden

Das folgende Beispiel zeigt, wie das Beobachten der "gpu"-Quelle beendet wird, nachdem der Observer zuvor sowohl die "cpu"- als auch die "gpu"-Quellen beobachtet hat.

```js
const observer = new PressureObserver(callback);

observer.observe("cpu");
observer.observe("gpu");

// Callback now gets called whenever the pressure state changes for 'cpu' or 'gpu'.

observer.unobserve("gpu");

// Callback now only gets called whenever the pressure state changes for 'cpu'.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
