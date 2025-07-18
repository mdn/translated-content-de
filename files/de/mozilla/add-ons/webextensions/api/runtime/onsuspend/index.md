---
title: runtime.onSuspend
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onSuspend
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Wird zur Ereignisseite gesendet, kurz bevor sie entladen wird. Dies gibt der Erweiterung die Möglichkeit, einige Bereinigungen durchzuführen. Beachten Sie, dass, da die Seite entladen wird, alle asynchronen Operationen, die während der Verarbeitung dieses Ereignisses gestartet werden, nicht garantiert abgeschlossen werden.

> [!NOTE]
> Wenn etwas verhindert, dass die Ereignisseite entladen wird, wird das Ereignis {{WebExtAPIRef("runtime.onSuspendCanceled")}} gesendet und die Seite wird nicht entladen.

## Syntax

```js-nolint
browser.runtime.onSuspend.addListener(listener)
browser.runtime.onSuspend.removeListener(listener)
browser.runtime.onSuspend.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Zuhören auf dieses Ereignis. Das Argument `listener` ist der Listener, der entfernt werden soll.
- `hasListener(listener)`
  - : Überprüft, ob ein `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, ansonsten `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt.

## Beispiele

Hören Sie auf Aussetzungsereignisse:

```js
function handleSuspend() {
  console.log("Suspending event page");
  // handle cleanup
}

browser.runtime.onSuspend.addListener(handleSuspend);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#event-onSuspend). Diese Dokumentation stammt aus [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.
