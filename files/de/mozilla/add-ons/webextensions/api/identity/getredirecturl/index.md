---
title: identity.getRedirectURL()
slug: Mozilla/Add-ons/WebExtensions/API/identity/getRedirectURL
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Erzeugt eine URL, die Sie als Weiterleitungs-URL verwenden können.

Die URL wird aus der ID Ihrer Erweiterung abgeleitet. Wenn Sie diese Funktion verwenden, sollten Sie wahrscheinlich die ID Ihrer Erweiterung explizit mit dem [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings)-Schlüssel festlegen (ansonsten erhalten Sie jedes Mal, wenn Sie [die Erweiterung vorübergehend installieren](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/), eine andere Weiterleitungs-URL).

Sehen Sie sich [Erhalten einer Weiterleitungs-URL](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#getting_the_redirect_url) für weitere Informationen zu Weiterleitungs-URLs an.

## Syntax

```js-nolint
let redirectURL = browser.identity.getRedirectURL()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der einen Weiterleitungs-URL-Wert enthält.

## Beispiele

Erhalten Sie die Weiterleitungs-URL:

```js
let redirectURL = browser.identity.getRedirectURL();
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`identity`](https://developer.chrome.com/docs/extensions/reference/api/identity)-API von Chromium.
