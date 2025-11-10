---
title: devtools.inspectedWindow.reload()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/reload
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Lädt das Fenster neu, an das die Developer-Tools angehängt sind.

## Syntax

```js-nolint
browser.devtools.inspectedWindow.reload(
  reloadOptions       // object
)
```

### Parameter

- `reloadOptions` {{optional_inline}}
  - : `object`. Optionen für die Funktion wie folgt:
    - `ignoreCache` {{optional_inline}}
      - : `boolean`. Falls true, wird beim Neuladen der Browser-Cache ignoriert (als ob der Benutzer Shift+Strg+R gedrückt hätte).
    - `userAgent` {{optional_inline}}
      - : `string`. Setzt einen benutzerdefinierten User-Agent für die Seite. Der hier angegebene String wird im [User-Agent](/de/docs/Web/HTTP/Reference/Headers/User-Agent)-Header des Browsers gesendet und wird bei Aufrufen von [`navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent) zurückgegeben, die von Skripten ausgeführt werden, die auf der Seite laufen.
    - `injectedScript` {{optional_inline}}
      - : `string`. Fügt den angegebenen JavaScript-Ausdruck in alle Frames der Seite ein, bevor andere Skripte ausgeführt werden.

## Beispiele

Laden Sie das inspizierte Fenster neu, setzen Sie den User-Agent und injizieren Sie ein Skript:

```js
const reloadButton = document.querySelector("#reload-button");

reloadButton.addEventListener("click", () => {
  browser.devtools.inspectedWindow.reload({
    injectedScript: "alert(navigator.userAgent);",
    userAgent: "Not a real UA",
  });
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.devtools`](https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools) API von Chromium.
