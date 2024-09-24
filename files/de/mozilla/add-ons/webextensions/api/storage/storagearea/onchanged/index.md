---
title: storage.StorageArea.onChanged
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/onChanged
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn sich ein oder mehrere Elemente in einem Speicherbereich ändern und Details zu den geänderten Schlüsseln zurückgegeben werden. Im Vergleich zu {{WebExtAPIRef("storage.onChanged")}} ermöglicht Ihnen dieses Ereignis, Änderungen in einem der Speicherbereiche anzuhören: `local`, `managed`, `session` und `sync`.

> [!NOTE]
> In Firefox umfasst die zurückgegebene Information alle Schlüssel innerhalb des Speicherbereichs. Außerdem kann der Callback aufgerufen werden, wenn keine Änderung an den zugrunde liegenden Daten vorliegt. Details zu den geänderten Elementen finden Sie, indem Sie das {{WebExtAPIRef('storage.StorageChange')}}-Objekt jedes zurückgegebenen Schlüssels überprüfen. Siehe [Firefox Bug 1833153](https://bugzil.la/1833153).

## Syntax

```js-nolint
// local kann auch sync, managed oder session sein
browser.storage.local.onChanged.addListener(listener)
browser.storage.local.onChanged.removeListener(listener)
browser.storage.local.onChanged.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt einen Listener für dieses Ereignis hinzu.
- `removeListener(listener)`
  - : Stoppt das Anhören dieses Ereignisses. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er zuhört, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:

    - `changes`
      - : `object`. Objekt, das die Änderung beschreibt. Es enthält eine Eigenschaft für jeden Schlüssel, der sich geändert hat. Der Name der Eigenschaft ist der Name des geänderten Schlüssels und sein Wert ist ein {{WebExtAPIRef('storage.StorageChange')}}-Objekt, das die Änderung dieses Elements beschreibt.

## Beispiele

```js
/*
Protokolliert den alten und den neuen Wert von
Änderungen im lokalen Speicher.
*/
function logStorageChange(changes) {
  const changedItems = Object.keys(changes);

  for (const item of changedItems) {
    console.log(`${item} hat sich geändert:`);
    console.log("Alter Wert: ", changes[item].oldValue);
    console.log("Neuer Wert: ", changes[item].newValue);
  }
}

browser.storage.local.onChanged.addListener(logStorageChange);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage#event-StorageArea-onChanged) API. Diese Dokumentation stammt von [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code.
