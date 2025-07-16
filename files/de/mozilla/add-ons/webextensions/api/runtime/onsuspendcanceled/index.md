---
title: runtime.onSuspendCanceled
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onSuspendCanceled
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Wird nach {{WebExtAPIRef("runtime.onSuspend")}} gesendet, um anzuzeigen, dass die App doch nicht entladen wird.

## Syntax

```js-nolint
browser.runtime.onSuspendCanceled.addListener(listener)
browser.runtime.onSuspendCanceled.removeListener(listener)
browser.runtime.onSuspendCanceled.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Hören auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob ein `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn zugehört wird, andernfalls `false`.

## Syntax von addListener

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt.

## Beispiele

Auf `SuspendCanceled`-Ereignisse hören:

```js
function handleSuspendCanceled() {
  console.log("Suspend canceled");
}

browser.runtime.onSuspendCanceled.addListener(handleSuspendCanceled);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#event-onSuspendCanceled) API von Chromium. Diese Dokumentation stammt aus [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.
