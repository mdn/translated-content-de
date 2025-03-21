---
title: Profiler
slug: Web/API/Profiler
l10n:
  sourceCommit: 49f36838f402e87204234c21fa8a98002c7e7a42
---

{{APIRef("JS Self-Profiling API")}}

Das **`Profiler`**-Interface der [JS Self-Profiling API](/de/docs/Web/API/JS_Self-Profiling_API) ermöglicht es Ihnen, ein [Profil](/de/docs/Web/API/JS_Self-Profiling_API/Profile_content_and_format) eines bestimmten Teils der Ausführung Ihrer Webanwendung zu erstellen.

## Konstruktor

- [`Profiler()`](/de/docs/Web/API/Profiler/Profiler)
  - : Erstellt ein neues `Profiler`-Objekt und beginnt mit dem Sammeln von Proben.

## Instanzmethoden

- [`Profiler.stop()`](/de/docs/Web/API/Profiler/stop)
  - : Stoppt den Profiler und gibt ein {{jsxref("Promise")}} zurück, das zu dem [Profil](/de/docs/Web/API/JS_Self-Profiling_API/Profile_content_and_format) aufgelöst wird.

## Ereignisse

- [`samplebufferfull`](/de/docs/Web/API/Profiler/samplebufferfull_event)
  - : Wird ausgelöst, wenn das Profil ausreichend Proben aufgezeichnet hat, um seinen internen Puffer zu füllen.

## Beispiele

### Aufzeichnung eines Profils

Der folgende Code profiliert die `doWork()`-Operation und protokolliert das Ergebnis.

```js
const profiler = new Profiler({ sampleInterval: 10, maxBufferSize: 10000 });

doWork();

const profile = await profiler.stop();
console.log(JSON.stringify(profile));
```

### Profilierung des Seitenladens

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
