---
title: launch_handler
slug: Web/Manifest/launch_handler
l10n:
  sourceCommit: 2b44e3e665ceb5f4336089695aa5f617b1baf33c
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}{{SeeCompatTable}}

Das `launch_handler`-Element definiert Werte, die den Start einer Webanwendung steuern. Derzeit kann es nur einen einzigen Wert enthalten, `client_mode`, der den Kontext angibt, in dem die App beim Start geladen werden soll. Zum Beispiel in einem bestehenden Web-App-Client, der eine Instanz der App enthält, oder in einem neuen Web-App-Client. Dies lässt Raum für die zukünftige Definition weiterer `launch_handler`-Werte.

### Werte

`launch_handler`-Objekte können die folgenden Werte enthalten:

- `client_mode` {{experimental_inline}}

  - : Ein String oder ein komma-separiertes Array von Strings, das den Kontext angibt, in dem die App beim Start geladen werden soll. Wenn ein Array von Strings bereitgestellt wird, wird der erste gültige Wert verwendet. Mögliche Werte sind:
    - `auto`
      - : Der User-Agent entscheidet, welcher Kontext für die Plattform sinnvoll ist, um die App zu laden. Zum Beispiel könnte `navigate-existing` auf mobilen Geräten sinnvoller sein, da dort einzelne App-Instanzen üblich sind, während `navigate-new` in einem Desktop-Kontext sinnvoller sein könnte. Dies ist der Standardwert, der verwendet wird, wenn alle bereitgestellten Werte ungültig sind.
    - `focus-existing`
      - : Wenn die App bereits in einem Web-App-Client geladen ist, wird sie in den Fokus gebracht, aber nicht zur Startziel-URL navigiert. Die Ziel-URL ist über [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) verfügbar, um eine benutzerdefinierte Startnavigation zu ermöglichen. Wenn die App noch nicht in einem Web-App-Client geladen ist, wird stattdessen das Verhalten `navigate-new` verwendet.
    - `navigate-existing`
      - : Wenn die App bereits in einem Web-App-Client geladen ist, wird sie in den Fokus gebracht und zur angegebenen Startziel-URL navigiert. Die Ziel-URL ist über [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) verfügbar, um zusätzliche benutzerdefinierte Startnavigation zu ermöglichen. Wenn die App noch nicht in einem Web-App-Client geladen ist, wird stattdessen das Verhalten `navigate-new` verwendet.
    - `navigate-new`
      - : Die App wird in einem neuen Web-App-Client geladen. Die Ziel-URL ist über [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) verfügbar, um zusätzliche benutzerdefinierte Startnavigation zu ermöglichen.

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
