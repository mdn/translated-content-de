---
title: launch_handler
slug: Web/Progressive_web_apps/Manifest/Reference/launch_handler
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{SeeCompatTable}}

Das `launch_handler`-Element definiert Werte, die den Start einer Webanwendung steuern. Derzeit kann es nur einen einzigen Wert enthalten, `client_mode`, der den Kontext angibt, in dem die App beim Start geladen werden soll. Zum Beispiel in einem vorhandenen Web-App-Client, der eine Instanz der App enthält, oder in einem neuen Web-App-Client. Dies lässt Raum für die Definition weiterer `launch_handler`-Werte in der Zukunft.

### Werte

`launch_handler`-Objekte können die folgenden Werte enthalten:

- `client_mode` {{experimental_inline}}
  - : Ein String oder ein durch Kommas getrenntes Array von Strings, das den Kontext angibt, in dem die App beim Start geladen werden soll. Wenn ein Array von Strings bereitgestellt wird, wird der erste gültige Wert verwendet.
    Mögliche Werte sind:</p>
    - `auto`
      - : Der Benutzeragent entscheidet, welcher Kontext für die Plattform sinnvoll ist, um die App zu laden. Zum Beispiel könnte `navigate-existing` auf Mobilgeräten mehr Sinn machen, wo Einzelinstanzen von Apps verbreitet sind, während `navigate-new` in einem Desktop-Kontext mehr Sinn machen könnte. Dies ist der Standardwert, der verwendet wird, wenn alle bereitgestellten Werte ungültig sind.
    - `focus-existing`
      - : Wenn die App bereits in einem Web-App-Client geladen ist, wird sie in den Fokus gebracht, aber nicht zur Startziel-URL navigiert. Die Ziel-URL steht über [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) zur Verfügung, um eine benutzerdefinierte Startnavigation zu implementieren. Wenn die App noch nicht in einem Web-App-Client geladen ist, wird stattdessen das `navigate-new` Verhalten verwendet.
    - `navigate-existing`
      - : Wenn die App bereits in einem Web-App-Client geladen ist, wird sie in den Fokus gebracht und zur angegebenen Startziel-URL navigiert. Die Ziel-URL steht über [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) zur Verfügung, um zusätzliche benutzerdefinierte Startnavigation zu implementieren. Wenn die App noch nicht in einem Web-App-Client geladen ist, wird stattdessen das `navigate-new` Verhalten verwendet.
    - `navigate-new`
      - : Die App wird in einem neuen Web-App-Client geladen. Die Ziel-URL steht über [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) zur Verfügung, um zusätzliche benutzerdefinierte Startnavigation zu implementieren.

## Beispiele

```json
"launch_handler": {
    "client_mode": "focus-existing"
}

"launch_handler": {
    "client_mode": ["focus-existing", "auto"]
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Launch Handler API: Control how your app is launched](https://developer.chrome.com/docs/web-platform/launch-handler/)
- [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue)
- [Musicr 2.0](https://launch-handler.glitch.me/) Demo-App
