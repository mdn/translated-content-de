---
title: "Profiler: stop()-Methode"
short-title: stop()
slug: Web/API/Profiler/stop
l10n:
  sourceCommit: 49f36838f402e87204234c21fa8a98002c7e7a42
---

{{APIRef("JS Self-Profiling API")}}

Die **`stop()`**-Methode der [`Profiler`](/de/docs/Web/API/Profiler)-Schnittstelle stoppt den Profiler und gibt ein {{jsxref("Promise")}} zurück, das auf das Profil selbst aufgelöst wird.

## Syntax

```js-nolint
stop()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das in ein Objekt aufgelöst wird, welches die Profildaten enthält. Das Format und die Interpretation dieses Objekts werden in [Profilaufbau und Format](/de/docs/Web/API/JS_Self-Profiling_API/Profile_content_and_format) beschrieben.

## Beispiele

### Aufzeichnen eines Profils

Der folgende Code zeichnet das `doWork()`-Vorgang auf und protokolliert das Ergebnis.

```js
const profiler = new Profiler({ sampleInterval: 10, maxBufferSize: 10000 });

doWork();

const profile = await profiler.stop();
console.log(JSON.stringify(profile));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
