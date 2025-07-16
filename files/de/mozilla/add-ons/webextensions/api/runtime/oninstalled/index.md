---
title: runtime.onInstalled
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onInstalled
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Wird ausgelöst, wenn die Erweiterung zum ersten Mal installiert wird, wenn die Erweiterung auf eine neue Version aktualisiert wird und wenn der Browser auf eine neue Version aktualisiert wird.

Beachten Sie, dass `runtime.onInstalled` nicht dasselbe ist wie {{WebExtAPIRef("management.onInstalled")}}. Das `runtime.onInstalled`-Ereignis wird nur für Ihre Erweiterung ausgelöst. Das `browser.management.onInstalled`-Ereignis wird für alle Erweiterungen ausgelöst.

## Syntax

```js-nolint
browser.runtime.onInstalled.addListener(listener)
browser.runtime.onInstalled.removeListener(listener)
browser.runtime.onInstalled.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt einen Listener zu diesem Ereignis hinzu.
- `removeListener(listener)`
  - : Stoppt das Hören auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob ein `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er zuhört, `false` andernfalls.

## addListener-Syntax

### Parameter

- `function`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:
    - `details`
      - : Ein Objekt mit den folgenden Eigenschaften:
        - `id` {{optional_inline}}
          - : `string`. Die ID der importierten Shared Module-Erweiterung, die aktualisiert wurde. Dies ist nur vorhanden, wenn der `reason`-Wert `shared_module_update` ist.
        - `previousVersion` {{optional_inline}}
          - : `string`. Die vorherige Version der gerade aktualisierten Erweiterung. Dies ist nur vorhanden, wenn der `reason`-Wert `update` ist.
        - `reason`
          - : Ein {{WebExtAPIRef('runtime.OnInstalledReason')}}-Wert, der den Grund angibt, warum dieses Ereignis gesendet wird.
        - `temporary`
          - : `boolean`. Wahr, wenn das Add-on vorübergehend installiert wurde. Zum Beispiel durch Verwendung der "about:debugging"-Seite in Firefox oder durch Verwendung von [web-ext run](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/). Falsch andernfalls.

## Beispiele

Wenn die Erweiterung installiert wird, protokollieren Sie den Installationsgrund und öffnen Sie <https://example.com>:

```js
function handleInstalled(details) {
  console.log(details.reason);
  browser.tabs.create({
    url: "https://example.com",
  });
}

browser.runtime.onInstalled.addListener(handleInstalled);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#event-onInstalled)-API von Chromium. Diese Dokumentation ist abgeleitet von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.
