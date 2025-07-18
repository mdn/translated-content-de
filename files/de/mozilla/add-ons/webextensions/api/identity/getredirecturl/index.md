---
title: identity.getRedirectURL()
slug: Mozilla/Add-ons/WebExtensions/API/identity/getRedirectURL
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Erzeugt eine URL, die Sie als Weiterleitungs-URL verwenden können.

Die URL wird aus der ID Ihrer Erweiterung abgeleitet. Wenn Sie diese Funktion verwenden, sollten Sie wahrscheinlich die ID Ihrer Erweiterung explizit mit dem Schlüssel [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) festlegen (andernfalls erhalten Sie jedes Mal eine andere Weiterleitungs-URL, wenn Sie die Erweiterung [vorübergehend installieren](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)).

Weitere Informationen zu Weiterleitungs-URLs finden Sie unter [Erhalten einer Weiterleitungs-URL](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#getting_the_redirect_url).

## Syntax

```js-nolint
let redirectURL = browser.identity.getRedirectURL()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der eine Weiterleitungs-URL enthält.

## Beispiele

Abrufen der Weiterleitungs-URL:

```js
let redirectURL = browser.identity.getRedirectURL();
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`identity`](https://developer.chrome.com/docs/extensions/reference/api/identity) API von Chromium.
