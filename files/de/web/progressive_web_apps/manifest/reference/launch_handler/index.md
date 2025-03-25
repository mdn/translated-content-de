---
title: launch_handler
slug: Web/Progressive_web_apps/Manifest/Reference/launch_handler
l10n:
  sourceCommit: 2f6ddccbafddcea8f2b68eb4a78b9764892916b3
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}{{SeeCompatTable}}

Das `launch_handler`-Element definiert Werte, die den Start einer Webanwendung steuern. Derzeit kann es nur einen einzigen Wert enthalten, `client_mode`, der den Kontext spezifiziert, in dem die App beim Start geladen werden soll. Zum Beispiel in einem bestehenden Web-App-Client, der eine Instanz der App enthält, oder in einem neuen Web-App-Client. Dies lässt Raum für mehr `launch_handler`-Werte, die in Zukunft definiert werden können.

### Werte

`launch_handler`-Objekte können die folgenden Werte enthalten:

- `client_mode` {{experimental_inline}}

  - : Ein String oder ein Kommata-getrenntes Array von Strings, das den Kontext spezifiziert, in dem die App beim Start geladen werden soll. Wenn ein Array von Strings angegeben wird, wird der erste gültige Wert verwendet.
    Mögliche Werte sind:
    - `auto`
      - : Der Benutzeragent entscheidet, welcher Kontext für die Plattform sinnvoll ist, um die App zu laden. Zum Beispiel könnte `navigate-existing` auf mobilen Geräten sinnvoller sein, wo Einzelinstanzen von Apps üblich sind, während `navigate-new` in einem Desktop-Kontext sinnvoller sein könnte. Dies ist der Standardwert, wenn alle angegebenen Werte ungültig sind.
    - `focus-existing`
      - : Wenn die App bereits in einem Web-App-Client geladen ist, wird sie in den Vordergrund geholt, aber nicht zur Start-Ziel-URL navigiert. Die Ziel-URL ist über [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) verfügbar, um die Implementierung einer benutzerdefinierten Start-Navigation zu ermöglichen. Wenn die App noch nicht in einem Web-App-Client geladen ist, wird stattdessen das Verhalten von `navigate-new` verwendet.
    - `navigate-existing`
      - : Wenn die App bereits in einem Web-App-Client geladen ist, wird sie in den Vordergrund geholt und zur angegebenen Start-Ziel-URL navigiert. Die Ziel-URL ist über [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) verfügbar, um zusätzliche benutzerdefinierte Start-Navigations-Handhabung zu ermöglichen. Wenn die App noch nicht in einem Web-App-Client geladen ist, wird stattdessen das Verhalten von `navigate-new` verwendet.
    - `navigate-new`
      - : Die App wird in einem neuen Web-App-Client geladen. Die Ziel-URL ist über [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) verfügbar, um zusätzliche benutzerdefinierte Start-Navigations-Handhabung zu ermöglichen.

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
