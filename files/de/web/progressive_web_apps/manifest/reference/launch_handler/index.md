---
title: launch_handler
slug: Web/Progressive_web_apps/Manifest/Reference/launch_handler
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}{{SeeCompatTable}}

Das `launch_handler`-Mitglied definiert Werte, die den Start einer Webanwendung steuern. Derzeit kann es nur einen Einzelwert enthalten, `client_mode`, der den Kontext festlegt, in dem die App beim Start geladen werden soll. Zum Beispiel in einem bestehenden Web-App-Client, der eine Instanz der App enthält, oder in einem neuen Web-App-Client. Dies lässt Raum für die zukünftige Definition weiterer `launch_handler`-Werte.

### Werte

`launch_handler`-Objekte können die folgenden Werte enthalten:

- `client_mode` {{experimental_inline}}

  - : Ein String oder ein durch Kommas getrenntes Array von Strings, der bzw. das den Kontext angibt, in dem die App beim Start geladen werden soll. Wenn ein Array von Strings angegeben wird, wird der erste gültige Wert verwendet.
    Mögliche Werte sind:</p>
    - `auto`
      - : Der Benutzeragent entscheidet, welcher Kontext zum Laden der App auf der Plattform sinnvoll ist. Zum Beispiel könnte `navigate-existing` auf Mobilgeräten mehr Sinn machen, wo einzelne App-Instanzen weit verbreitet sind, während `navigate-new` im Desktop-Kontext mehr Sinn machen könnte. Dies ist der Standardwert, der verwendet wird, wenn alle angegebenen Werte ungültig sind.
    - `focus-existing`
      - : Wenn die App bereits in einem Web-App-Client geladen ist, wird sie in den Fokus gebracht, aber nicht zur Ziel-URL des Starts navigiert. Die Ziel-URL ist über [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) verfügbar, um eine benutzerdefinierte Startnavigationsbehandlung zu ermöglichen. Wenn die App noch nicht in einem Web-App-Client geladen ist, wird stattdessen das `navigate-new`-Verhalten verwendet.
    - `navigate-existing`
      - : Wenn die App bereits in einem Web-App-Client geladen ist, wird sie in den Fokus gebracht und zur angegebenen Ziel-URL des Starts navigiert. Die Ziel-URL ist über [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) verfügbar, um zusätzliche benutzerdefinierte Startnavigationsbehandlungen zu ermöglichen. Wenn die App noch nicht in einem Web-App-Client geladen ist, wird stattdessen das `navigate-new`-Verhalten verwendet.
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

- [Launch Handler API: Steuerung, wie Ihre App gestartet wird](https://developer.chrome.com/docs/web-platform/launch-handler/)
- [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue)
- [Musicr 2.0](https://launch-handler.glitch.me/) Demo-App
