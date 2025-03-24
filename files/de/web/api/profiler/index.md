---
title: Profiler
slug: Web/API/Profiler
l10n:
  sourceCommit: f06910b17bbf44908adc559a9b7b95bd70ae88cf
---

{{APIRef("JS Self-Profiling API")}}{{SeeCompatTable}}

Das **`Profiler`**-Interface der [JS Self-Profiling API](/de/docs/Web/API/JS_Self-Profiling_API) ermöglicht es Ihnen, ein [Profil](/de/docs/Web/API/JS_Self-Profiling_API/Profile_content_and_format) eines Teils der Ausführung Ihrer Webanwendung zu erstellen.

## Konstruktor

- [`Profiler()`](/de/docs/Web/API/Profiler/Profiler) {{experimental_inline}}
  - : Erstellt ein neues `Profiler`-Objekt und beginnt mit der Sammlung von Proben.

## Instanzmethoden

- [`Profiler.stop()`](/de/docs/Web/API/Profiler/stop) {{experimental_inline}}
  - : Stoppt den Profiler und gibt ein {{jsxref("Promise")}} zurück, das sich in das [Profil](/de/docs/Web/API/JS_Self-Profiling_API/Profile_content_and_format) auflöst.

## Ereignisse

- [`samplebufferfull`](/de/docs/Web/API/Profiler/samplebufferfull_event)
  - : Wird ausgelöst, wenn das Profil genügend Proben aufgenommen hat, um seinen internen Puffer zu füllen.

## Beispiele

### Aufnahme eines Profils

Der folgende Code profiliert die `doWork()`-Operation und protokolliert das Ergebnis.

```js
const profiler = new Profiler({ sampleInterval: 10, maxBufferSize: 10000 });

doWork();

const profile = await profiler.stop();
console.log(JSON.stringify(profile));
```

### Profilieren des Seitenladevorgangs

Der folgende Code profiliert die Zeit zwischen dem ersten Ausführen des Skripts und dem Auslösen des [`load`](/de/docs/Web/API/Window/load_event)-Ereignisses des Fensters.

```js
const profiler = new Profiler({ sampleInterval: 10, maxBufferSize: 10000 });

window.addEventListener("load", async () => {
  const profile = await profiler.stop();
  console.log(JSON.stringify(profile));
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
