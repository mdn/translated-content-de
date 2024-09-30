---
title: launch_handler
slug: Web/Manifest/launch_handler
l10n:
  sourceCommit: 2b44e3e665ceb5f4336089695aa5f617b1baf33c
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}{{SeeCompatTable}}

Das `launch_handler`-Element definiert Werte, die den Start einer Webanwendung steuern. Derzeit kann es nur einen einzigen Wert enthalten, `client_mode`, welcher den Kontext spezifiziert, in dem die App geladen werden soll, wenn sie gestartet wird. Zum Beispiel in einem bestehenden Web-App-Client, der eine Instanz der App enthält, oder in einem neuen Web-App-Client. Dies lässt Raum für die Definition weiterer `launch_handler`-Werte in der Zukunft.

### Werte

`launch_handler`-Objekte können die folgenden Werte enthalten:

- `client_mode` {{experimental_inline}}

  - : Ein String oder ein kommasepariertes Array von Strings, das den Kontext spezifiziert, in dem die App geladen werden soll, wenn sie gestartet wird. Wenn ein Array von Strings bereitgestellt wird, wird der erste gültige Wert verwendet.
    Mögliche Werte sind:</p>
    - `auto`
      - : Der User-Agent entscheidet, welcher Kontext für die Plattform sinnvoll ist, um die App darin zu laden. Zum Beispiel könnte `navigate-existing` auf Mobilgeräten mehr Sinn machen, wo einzelne App-Instanzen üblich sind, während `navigate-new` in einem Desktop-Kontext mehr Sinn machen könnte. Dies ist der Standardwert, der verwendet wird, wenn alle bereitgestellten Werte ungültig sind.
    - `focus-existing`
      - : Wenn die App bereits in einem Web-App-Client geladen ist, wird sie fokussiert, aber nicht zur Startziel-URL navigiert. Die Ziel-URL ist über [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) verfügbar, um die Implementierung einer benutzerdefinierten Startnavigationsbehandlung zu ermöglichen. Wenn die App noch nicht in einem Web-App-Client geladen ist, wird das `navigate-new`-Verhalten stattdessen verwendet.
    - `navigate-existing`
      - : Wenn die App bereits in einem Web-App-Client geladen ist, wird sie fokussiert und zur angegebenen Startziel-URL navigiert. Die Ziel-URL ist über [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) verfügbar, um zusätzliche benutzerdefinierte Startnavigationsbehandlungen zu ermöglichen. Wenn die App noch nicht in einem Web-App-Client geladen ist, wird das `navigate-new`-Verhalten stattdessen verwendet.
    - `navigate-new`
      - : Die App wird in einem neuen Web-App-Client geladen. Die Ziel-URL ist über [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) verfügbar, um zusätzliche benutzerdefinierte Startnavigationsbehandlungen zu ermöglichen.

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
