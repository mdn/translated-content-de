---
title: launch_handler
slug: Web/Manifest/Reference/launch_handler
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest/Reference")}}{{SeeCompatTable}}

Das `launch_handler`-Mitglied definiert Werte, die den Start einer Webanwendung steuern. Derzeit kann es nur einen einzigen Wert enthalten, `client_mode`, der den Kontext angibt, in dem die App geladen werden soll, wenn sie gestartet wird. Zum Beispiel in einem vorhandenen Web-App-Client, der eine Instanz der App enthält, oder in einem neuen Web-App-Client. Dies lässt Raum für die Definition weiterer `launch_handler`-Werte in der Zukunft.

### Werte

`launch_handler`-Objekte können die folgenden Werte enthalten:

- `client_mode` {{experimental_inline}}

  - : Ein String oder eine durch Kommas getrennte Zeichenfolge, die den Kontext angibt, in dem die App geladen werden soll, wenn sie gestartet wird. Wenn ein Array von Zeichenfolgen bereitgestellt wird, wird der erste gültige Wert verwendet.
    Mögliche Werte sind:</p>
    - `auto`
      - : Der Benutzeragent entscheidet, welcher Kontext für die Plattform sinnvoll ist, um die App zu laden. Zum Beispiel könnte `navigate-existing` auf mobilen Geräten mehr Sinn machen, wo einzelne App-Instanzen häufig sind, während `navigate-new` im Desktop-Kontext sinnvoller wäre. Dies ist der Standardwert, der verwendet wird, wenn alle angegebenen Werte ungültig sind.
    - `focus-existing`
      - : Wenn die App bereits in einem Web-App-Client geladen ist, wird sie in den Vordergrund gebracht, aber nicht zur Ziel-URL des Starts navigiert. Die Ziel-URL wird über [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) verfügbar gemacht, um eine benutzerdefinierte Start-Navigationsbehandlung zu ermöglichen. Wenn die App noch nicht in einem Web-App-Client geladen ist, wird das Verhalten `navigate-new` stattdessen verwendet.
    - `navigate-existing`
      - : Wenn die App bereits in einem Web-App-Client geladen ist, wird sie in den Vordergrund gebracht und zur angegebenen Start-Ziel-URL navigiert. Die Ziel-URL wird über [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) verfügbar gemacht, um zusätzliche benutzerdefinierte Start-Navigationsbehandlung zu ermöglichen. Wenn die App noch nicht in einem Web-App-Client geladen ist, wird das Verhalten `navigate-new` stattdessen verwendet.
    - `navigate-new`
      - : Die App wird in einem neuen Web-App-Client geladen. Die Ziel-URL wird über [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) verfügbar gemacht, um zusätzliche benutzerdefinierte Start-Navigationsbehandlung zu ermöglichen.

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
