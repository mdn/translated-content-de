---
title: "PressureObserver: unobserve() Methode"
short-title: unobserve()
slug: Web/API/PressureObserver/unobserve
l10n:
  sourceCommit: a251e34887530216e319fee73b5b859c8c943a53
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`unobserve()`**-Methode der [`PressureObserver`](/de/docs/Web/API/PressureObserver)-Schnittstelle stoppt den Druckbeobachter-Callback, damit dieser keine Druckdatensätze mehr von der angegebenen Quelle erhält.

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

### Beobachtung einer spezifischen Quelle beenden

Das folgende Beispiel zeigt, wie die Beobachtung der "gpu"-Quelle beendet wird, nachdem der Beobachter zuvor sowohl die "cpu"- als auch die "gpu"-Quellen beobachtet hat.

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
