---
title: launch_handler
slug: Web/Progressive_web_apps/Manifest/Reference/launch_handler
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

{{SeeCompatTable}}

Das `launch_handler`-Element definiert Werte, die den Start einer Webanwendung steuern. Derzeit kann es nur einen einzigen Wert enthalten, `client_mode`, der den Kontext angibt, in dem die App beim Start geladen werden soll. Beispielsweise in einem bestehenden Web-App-Client, der eine Instanz der App enthält, oder in einem neuen Web-App-Client. Dies lässt Raum für die Definition weiterer `launch_handler`-Werte in der Zukunft.

## Werte

`launch_handler`-Objekte können die folgenden Werte enthalten:

- `client_mode` {{experimental_inline}}
  - : Ein String oder ein durch Kommas getrenntes Array von Strings, das den Kontext angibt, in dem die App beim Start geladen werden soll. Wird ein Array von Strings angegeben, wird der erste gültige Wert verwendet. Mögliche Werte sind:
    - `auto`
      - : Der Benutzeragent entscheidet, welcher Kontext für die Plattform sinnvoll ist, um die App zu laden. Beispielsweise könnte `navigate-existing` auf mobilen Geräten mehr Sinn machen, wo einzelne App-Instanzen üblich sind, während `navigate-new` in einem Desktop-Kontext sinnvoller sein könnte. Dies ist der Standardwert, wenn alle angegebenen Werte ungültig sind.
    - `focus-existing`
      - : Wenn die App bereits in einem Web-App-Client geladen ist, wird sie in den Fokus gebracht, aber nicht zur Startziel-URL navigiert. Die Ziel-URL wird über [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) verfügbar gemacht, um eine benutzerdefinierte Startnavigationsbehandlung zu implementieren. Ist die App noch nicht in einem Web-App-Client geladen, wird das Verhalten `navigate-new` stattdessen verwendet.
    - `navigate-existing`
      - : Wenn die App bereits in einem Web-App-Client geladen ist, wird sie in den Fokus gebracht und zur angegebenen Startziel-URL navigiert. Die Ziel-URL wird über [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) verfügbar gemacht, um zusätzliche benutzerdefinierte Startnavigationsbehandlungen zu implementieren. Ist die App noch nicht in einem Web-App-Client geladen, wird das Verhalten `navigate-new` stattdessen verwendet.
    - `navigate-new`
      - : Die App wird in einem neuen Web-App-Client geladen. Die Ziel-URL wird über [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) verfügbar gemacht, um zusätzliche benutzerdefinierte Startnavigationsbehandlungen zu implementieren.

## Beispiele

```json
{
  "launch_handler": {
    "client_mode": "focus-existing"
  }
}
```

```json
{
  "launch_handler": {
    "client_mode": ["focus-existing", "auto"]
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Launch Handler API: Control how your app is launched](https://developer.chrome.com/docs/web-platform/launch-handler/)
- [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue)
- [Musicr 2.0](https://mdn.github.io/dom-examples/launch-handler/) Demo-App
