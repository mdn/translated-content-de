---
title: devtools.inspectedWindow.reload()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/reload
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Lädt das Fenster neu, an das die Devtools angehängt sind.

## Syntax

```js-nolint
browser.devtools.inspectedWindow.reload(
  reloadOptions       // object
)
```

### Parameter

- `reloadOptions` {{optional_inline}}

  - : `object`. Optionen für die Funktion sind wie folgt:

    - `ignoreCache` {{optional_inline}}
      - : `boolean`. Wenn true, wird beim Neuladen der Browser-Cache ignoriert (als ob der Benutzer Shift+Strg+R gedrückt hätte).
    - `userAgent` {{optional_inline}}
      - : `string`. Setzt einen benutzerdefinierten User-Agent für die Seite. Der hier angegebene String wird im [User-Agent](/de/docs/Web/HTTP/Headers/User-Agent)-Header des Browsers gesendet und von Aufrufen an [`navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent) zurückgegeben, die von Skripten auf der Seite ausgeführt werden.
    - `injectedScript` {{optional_inline}}
      - : `string`. Injiziert den angegebenen JavaScript-Ausdruck in alle Frames der Seite, bevor andere Skripte geladen werden.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Laden Sie das inspizierte Fenster neu, setzen Sie den User-Agent und fügen Sie ein Skript ein:

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

> [!NOTE]
> Diese API basiert auf der [`chrome.devtools`](https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools) API von Chromium.
