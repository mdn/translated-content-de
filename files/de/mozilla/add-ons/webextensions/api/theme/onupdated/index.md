---
title: theme.onUpdated
slug: Mozilla/Add-ons/WebExtensions/API/theme/onUpdated
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Wird ausgelöst, wenn ein als Browsererweiterung bereitgestelltes Thema angewendet oder entfernt wird. Insbesondere:

- wenn ein [statisches Thema](https://extensionworkshop.com/documentation/themes/static-themes/) installiert wird
- wenn ein [dynamisches Thema](/de/docs/Mozilla/Add-ons/WebExtensions/API/theme) [`theme.update()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/theme/update) oder [`theme.reset()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/theme/reset) aufruft
- wenn ein Thema deinstalliert wird.

Dieses Ereignis wird nicht ausgelöst, wenn Änderungen an den eingebauten Themen vorgenommen werden.

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
  - : Hört auf, dieses Ereignis zu hören. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden diese Argumente übergeben:

    - `updateInfo`

      - : `object`. Ein Objekt mit zwei Eigenschaften:

        - `theme`
          - : `object`. Wenn das Ereignis ausgelöst wurde, weil ein von der Erweiterung bereitgestelltes Thema entfernt wurde, ist dies ein leeres Objekt. Wenn es ausgelöst wurde, weil ein von der Erweiterung bereitgestelltes Thema angewendet wurde, dann ist es ein {{WebExtAPIRef("theme.Theme")}} Objekt, das das angewendete Thema darstellt.
        - `windowId` {{optional_inline}}
          - : `integer`. Die ID des Fensters, in dem das Thema aktualisiert wurde. Wenn diese Eigenschaft nicht vorhanden ist, wurde das Thema in allen Fenstern aktualisiert.

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
