---
title: theme.onUpdated
slug: Mozilla/Add-ons/WebExtensions/API/theme/onUpdated
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Wird ausgelöst, wenn ein als Browser-Erweiterung bereitgestelltes Theme angewendet oder entfernt wird. Genauer:

- wenn ein [statisches Theme](https://extensionworkshop.com/documentation/themes/static-themes/) installiert wird
- wenn ein [dynamisches Theme](/de/docs/Mozilla/Add-ons/WebExtensions/API/theme) entweder [`theme.update()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/theme/update) oder [`theme.reset()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/theme/reset) aufruft
- wenn ein Theme deinstalliert wird.

Dieses Ereignis wird nicht ausgelöst, wenn sich die integrierten Themes ändern.

## Syntax

```js-nolint
browser.theme.onUpdated.addListener(listener)
browser.theme.onUpdated.removeListener(listener)
browser.theme.onUpdated.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Abhören dieses Ereignisses. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:
    - `updateInfo`
      - : `object`. Ein Objekt, das zwei Eigenschaften enthält:
        - `theme`
          - : `object`. Wenn das Ereignis ausgelöst wurde, weil ein von der Erweiterung bereitgestelltes Theme entfernt wurde, ist dies ein leeres Objekt. Wenn es ausgelöst wurde, weil ein Theme angewendet wurde, handelt es sich um ein {{WebExtAPIRef("theme.Theme")}}-Objekt, das das angewendete Theme darstellt.
        - `windowId` {{optional_inline}}
          - : `integer`. Die ID des Fensters, in dem das Theme aktualisiert wurde. Wenn diese Eigenschaft nicht vorhanden ist, wurde das Theme in allen Fenstern aktualisiert.

## Beispiele

```js
function handleUpdated(updateInfo) {
  if (updateInfo.theme.colors) {
    console.log(`Theme was applied: ${updateInfo.theme}`);
  } else {
    console.log(`Theme was removed`);
  }
}

browser.theme.onUpdated.addListener(handleUpdated);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
