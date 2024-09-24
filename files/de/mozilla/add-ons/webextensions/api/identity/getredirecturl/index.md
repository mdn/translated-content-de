---
title: identity.getRedirectURL()
slug: Mozilla/Add-ons/WebExtensions/API/identity/getRedirectURL
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Erzeugt eine URL, die Sie als Redirect-URL verwenden können.

Die URL wird aus der ID Ihrer Erweiterung abgeleitet. Wenn Sie diese Funktion verwenden, sollten Sie wahrscheinlich die ID Ihrer Erweiterung explizit mit dem Schlüssel [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) festlegen (ansonsten erhalten Sie jedes Mal, wenn Sie [die Erweiterung vorübergehend installieren](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/), eine andere Redirect-URL).

Weitere Informationen zu Redirect-URLs finden Sie unter [Abrufen einer Redirect-URL](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#getting_the_redirect_url).

## Syntax

```js-nolint
let redirectURL = browser.identity.getRedirectURL()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der einen Redirect-URL-Wert enthält.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Abrufen der Redirect-URL:

```js
let redirectURL = browser.identity.getRedirectURL();
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`identity`](https://developer.chrome.com/docs/extensions/reference/api/identity) API von Chromium.
