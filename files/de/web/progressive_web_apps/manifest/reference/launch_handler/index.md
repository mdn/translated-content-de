---
title: launch_handler
slug: Web/Progressive_web_apps/Manifest/Reference/launch_handler
l10n:
  sourceCommit: 6d363614de8a40c33d1afe92e4e846b75beea986
---

{{SeeCompatTable}}

Das `launch_handler`-Mitglied definiert Werte, die den Start einer Webanwendung steuern. Derzeit kann es nur einen einzigen Wert enthalten, `client_mode`, der den Kontext angibt, in dem die App beim Start geladen werden soll. Zum Beispiel in einem bestehenden Web-App-Client, der eine Instanz der App enthält, oder in einem neuen Web-App-Client. Dies lässt Spielraum dafür, in Zukunft weitere `launch_handler`-Werte zu definieren.

### Werte

`launch_handler`-Objekte können die folgenden Werte enthalten:

- `client_mode` {{experimental_inline}}
  - : Ein String oder ein durch Kommas getrenntes Array von Strings, das den Kontext angibt, in dem die App beim Start geladen werden soll. Wenn ein Array von Strings bereitgestellt wird, wird der erste gültige Wert verwendet.
    Mögliche Werte sind:</p>
    - `auto`
      - : Der Benutzeragent entscheidet, welcher Kontext für die Plattform sinnvoll ist, um die App zu laden. Zum Beispiel könnte `navigate-existing` auf mobilen Geräten sinnvoller sein, wo einzelne App-Instanzen üblich sind, während `navigate-new` in einem Desktop-Kontext mehr Sinn ergeben könnte. Dies ist der Standardwert, der verwendet wird, wenn alle bereitgestellten Werte ungültig sind.
    - `focus-existing`
      - : Wenn die App bereits in einem Web-App-Client geladen ist, wird sie in den Fokus gebracht, jedoch nicht zur Startziel-URL navigiert. Die Ziel-URL ist über [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) verfügbar, um die Implementierung einer benutzerdefinierten Start-Navigationssteuerung zu ermöglichen. Wenn die App noch nicht in einem Web-App-Client geladen ist, wird stattdessen das Verhalten von `navigate-new` genutzt.
    - `navigate-existing`
      - : Wenn die App bereits in einem Web-App-Client geladen ist, wird sie in den Fokus gebracht und zur angegebenen Startziel-URL navigiert. Die Ziel-URL ist über [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) verfügbar, um zusätzliche benutzerdefinierte Start-Navigationssteuerung zu ermöglichen. Wenn die App noch nicht in einem Web-App-Client geladen ist, wird stattdessen das Verhalten von `navigate-new` genutzt.
    - `navigate-new`
      - : Die App wird in einem neuen Web-App-Client geladen. Die Ziel-URL ist über [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) verfügbar, um zusätzliche benutzerdefinierte Start-Navigationssteuerung zu ermöglichen.

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
