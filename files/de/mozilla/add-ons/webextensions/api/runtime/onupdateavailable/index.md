---
title: runtime.onUpdateAvailable
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onUpdateAvailable
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Wird ausgelöst, wenn ein Update für die Erweiterung verfügbar ist. Dieses Ereignis ermöglicht es einer Erweiterung, ein Update zu verzögern: zum Beispiel, weil es sich mittendrin in einem Vorgang befindet, der nicht unterbrochen werden sollte.

Falls die Erweiterung nicht auf dieses Ereignis hört, wenn ein Update verfügbar wird, wird die Erweiterung sofort neu geladen und das Update angewendet. Wenn die Erweiterung zuhört, wird das Update das nächste Mal angewendet, wenn die Erweiterung neu geladen wird. Dies geschieht, wenn:

- der Browser neu gestartet wird
- die Erweiterung deaktiviert und wieder aktiviert wird
- die Erweiterung sich selbst explizit neu lädt, indem sie {{WebExtAPIRef('runtime.reload()')}} aufruft.

## Syntax

```js-nolint
browser.runtime.onUpdateAvailable.addListener()
browser.runtime.onUpdateAvailable.removeListener(listener)
browser.runtime.onUpdateAvailable.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Zuhören für dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Prüft, ob ein `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis auftritt. Der Funktion wird dieses Argument übergeben:
    - `details`
      - : `object`. Enthält eine einzige Eigenschaft, einen String namens `version`, der die Versionsnummer des Updates darstellt.

## Beispiele

Auf `UpdateAvailable`-Ereignisse hören:

```js
function handleUpdateAvailable(details) {
  console.log(details.version);
  // Proceed to upgrade the add-on
  browser.runtime.reload();
}

browser.runtime.onUpdateAvailable.addListener(handleUpdateAvailable);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#event-onUpdateAvailable) API von Chromium. Diese Dokumentation ist abgeleitet von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.
