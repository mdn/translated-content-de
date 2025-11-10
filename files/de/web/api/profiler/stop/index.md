---
title: "Profiler: stop()-Methode"
short-title: stop()
slug: Web/API/Profiler/stop
l10n:
  sourceCommit: f06910b17bbf44908adc559a9b7b95bd70ae88cf
---

{{APIRef("JS Self-Profiling API")}}{{SeeCompatTable}}

Die **`stop()`**-Methode der [`Profiler`](/de/docs/Web/API/Profiler)-Schnittstelle stoppt den Profiler und gibt ein {{jsxref("Promise")}} zurück, das das Profil selbst auflöst.

## Syntax

```js-nolint
stop()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das in ein Objekt aufgelöst wird, welches die Profildaten enthält. Das Format und die Interpretation dieses Objekts wird in [Profilaufbau und Format](/de/docs/Web/API/JS_Self-Profiling_API/Profile_content_and_format) beschrieben.

## Beispiele

### Ein Profil aufzeichnen

Der folgende Code profiliert die `doWork()`-Operation und protokolliert das Ergebnis.

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
