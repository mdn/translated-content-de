---
title: launch_handler
slug: Web/Progressive_web_apps/Manifest/Reference/launch_handler
l10n:
  sourceCommit: c60eaa2dd90fefcaaafdaca69f3185b46d399d8b
---

{{SeeCompatTable}}

Das `launch_handler`-Element definiert Werte, die den Start einer Webanwendung steuern. Derzeit kann es nur einen einzigen Wert enthalten, `client_mode`, der den Kontext angibt, in dem die App beim Start geladen werden soll. Beispielsweise in einem vorhandenen Web-App-Client, der eine Instanz der App enthält, oder in einem neuen Web-App-Client. Dies lässt Spielraum für die zukünftige Definition weiterer `launch_handler`-Werte.

### Werte

`launch_handler`-Objekte können die folgenden Werte enthalten:

- `client_mode` {{experimental_inline}}
  - : Ein String oder ein durch Komma getrenntes Array von Strings, das den Kontext angibt, in dem die App beim Start geladen werden soll. Wenn ein Array von Strings angegeben wird, wird der erste gültige Wert verwendet. Mögliche Werte sind:</p>
    - `auto`
      - : Der User-Agent entscheidet, welcher Kontext sinnvoll ist, um die App auf der Plattform zu laden. Beispielsweise könnte `navigate-existing` auf mobilen Geräten mehr Sinn machen, wo einzelne App-Instanzen häufig sind, während `navigate-new` in einem Desktop-Kontext sinnvoller sein könnte. Dies ist der Standardwert, der verwendet wird, wenn alle angegebenen Werte ungültig sind.
    - `focus-existing`
      - : Wenn die App bereits in einem Web-App-Client geladen ist, wird sie in den Fokus gerückt, aber nicht zur Start-Ziel-URL navigiert. Die Ziel-URL wird über [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) verfügbar gemacht, um eine benutzerdefinierte Handhabung der Startnavigation zu implementieren. Wenn die App noch nicht in einem Web-App-Client geladen ist, wird stattdessen das `navigate-new`-Verhalten angewendet.
    - `navigate-existing`
      - : Wenn die App bereits in einem Web-App-Client geladen ist, wird sie in den Fokus gerückt und zur angegebenen Start-Ziel-URL navigiert. Die Ziel-URL wird über [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) verfügbar gemacht, um zusätzliche benutzerdefinierte Handhabungen der Startnavigation zu implementieren. Wenn die App noch nicht in einem Web-App-Client geladen ist, wird stattdessen das `navigate-new`-Verhalten angewendet.
    - `navigate-new`
      - : Die App wird in einem neuen Web-App-Client geladen. Die Ziel-URL wird über [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) verfügbar gemacht, um zusätzliche benutzerdefinierte Handhabungen der Startnavigation zu implementieren.

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
- [Musicr 2.0](https://mdn.github.io/dom-examples/launch-handler/) Demo-App
