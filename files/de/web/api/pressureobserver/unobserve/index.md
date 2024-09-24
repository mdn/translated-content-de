---
title: "PressureObserver: unobserve()-Methode"
short-title: unobserve()
slug: Web/API/PressureObserver/unobserve
l10n:
  sourceCommit: a251e34887530216e319fee73b5b859c8c943a53
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`unobserve()`**-Methode der {{domxref('PressureObserver')}}-Schnittstelle stoppt den Druckbeobachter-Callback, um keine Druckaufzeichnungen mehr von der angegebenen Quelle zu erhalten.

## Syntax

```js-nolint
unobserve(source)
```

### Parameter

- `source`
  - : Ein String, der angibt, welcher {{domxref("PressureRecord.source", "source")}} nicht mehr beobachtet werden soll.

### Rückgabewert

Nichts ({{jsxref("undefined")}}).

## Beispiele

### Beobachtung einer bestimmten Quelle stoppen

Das folgende Beispiel zeigt, wie die Beobachtung der Quelle "gpu" gestoppt wird, nachdem der Beobachter zuvor sowohl die "cpu"- als auch die "gpu"-Quellen beobachtet hat.

```js
const observer = new PressureObserver(callback);

observer.observe("cpu");
observer.observe("gpu");

// Callback wird jetzt aufgerufen, wann immer sich der Druckzustand für 'cpu' oder 'gpu' ändert.

observer.unobserve("gpu");

// Callback wird jetzt nur aufgerufen, wann immer sich der Druckzustand für 'cpu' ändert.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
