---
title: launch_handler
slug: Web/Progressive_web_apps/Manifest/Reference/launch_handler
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

{{SeeCompatTable}}

Das `launch_handler` Mitglied definiert Werte, die den Start einer Webanwendung steuern. Derzeit kann es nur einen einzigen Wert enthalten, `client_mode`, der den Kontext angibt, in dem die App beim Start geladen werden soll. Zum Beispiel in einem bestehenden Web-App-Client mit einer Instanz der App oder in einem neuen Web-App-Client. Dies lässt Raum für die zukünftige Definition weiterer `launch_handler` Werte.

### Werte

`launch_handler` Objekte können die folgenden Werte enthalten:

- `client_mode` {{experimental_inline}}

  - : Ein String oder ein kommagetrenntes Array von Strings, das den Kontext angibt, in dem die App beim Start geladen werden soll. Wenn ein Array von Strings bereitgestellt wird, wird der erste gültige Wert verwendet.
    Mögliche Werte sind:</p>
    - `auto`
      - : Der Benutzeragent entscheidet, welcher Kontext für die Plattform sinnvoll ist, um die App zu laden. Zum Beispiel könnte `navigate-existing` auf mobilen Geräten sinnvoller sein, wo einzelne App-Instanzen üblich sind, während `navigate-new` in einem Desktop-Kontext sinnvoller sein könnte. Dies ist der Standardwert, der verwendet wird, wenn alle angegebenen Werte ungültig sind.
    - `focus-existing`
      - : Wenn die App bereits in einem Web-App-Client geladen ist, wird sie in den Fokus gebracht, aber nicht zur Startziel-URL navigiert. Die Ziel-URL wird über [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) verfügbar gemacht, um eine benutzerdefinierte Startnavigation zu implementieren. Wenn die App noch nicht in einem Web-App-Client geladen ist, wird stattdessen das `navigate-new` Verhalten verwendet.
    - `navigate-existing`
      - : Wenn die App bereits in einem Web-App-Client geladen ist, wird sie in den Fokus gebracht und zur angegebenen Startziel-URL navigiert. Die Ziel-URL wird über [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) verfügbar gemacht, um zusätzliche benutzerdefinierte Startnavigation zu implementieren. Wenn die App noch nicht in einem Web-App-Client geladen ist, wird stattdessen das `navigate-new` Verhalten verwendet.
    - `navigate-new`
      - : Die App wird in einem neuen Web-App-Client geladen. Die Ziel-URL wird über [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) verfügbar gemacht, um zusätzliche benutzerdefinierte Startnavigation zu implementieren.

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
