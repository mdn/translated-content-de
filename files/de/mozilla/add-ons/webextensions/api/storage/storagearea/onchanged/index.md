---
title: storage.StorageArea.onChanged
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/onChanged
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Wird ausgelöst, wenn sich ein oder mehrere Elemente in einem Speicherbereich ändern, und gibt Details für die geänderten Schlüssel zurück. Im Vergleich zu {{WebExtAPIRef("storage.onChanged")}} ermöglicht Ihnen dieses Ereignis, Änderungen in einem der Speicherbereiche zu überwachen: `local`, `managed`, `session` und `sync`.

> [!NOTE]
> In Firefox enthält die zurückgegebene Information alle Schlüssel im Speicherbereich. Außerdem kann der Rückruf ausgelöst werden, wenn es keine Änderung an den zugrunde liegenden Daten gibt. Details zu den geänderten Elementen finden Sie, indem Sie das {{WebExtAPIRef('storage.StorageChange')}}-Objekt jedes zurückgegebenen Schlüssels untersuchen. Siehe [Firefox-Fehler 1833153](https://bugzil.la/1833153).
>
> Firefox lädt Änderungen an verwalteten Speichern (aus der [JSON-Manifestdatei (natives Manifest)](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#managed_storage_manifests) oder [`3rdparty` Unternehmensrichtlinie](https://mozilla.github.io/policy-templates/#3rdparty)) nur beim Neustart. Daher wird dieses Ereignis in Firefox nie ausgelöst.

## Syntax

```js-nolint
// local can also be sync, managed, or session
browser.storage.local.onChanged.addListener(listener)
browser.storage.local.onChanged.removeListener(listener)
browser.storage.local.onChanged.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Hören auf dieses Ereignis. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:
    - `changes`
      - : `object`. Objekt, das die Änderung beschreibt. Dies enthält eine Eigenschaft für jeden geänderten Schlüssel. Der Eigenschaftsname ist der Name des geänderten Schlüssels, und sein Wert ist ein {{WebExtAPIRef('storage.StorageChange')}}-Objekt, das die Änderung dieses Elements beschreibt.

## Beispiele

```js
/*
Log the old value and its new value of
changes in the local storage.
*/
function logStorageChange(changes) {
  const changedItems = Object.keys(changes);

  for (const item of changedItems) {
    console.log(`${item} has changed:`);
    console.log("Old value: ", changes[item].oldValue);
    console.log("New value: ", changes[item].newValue);
  }
}

browser.storage.local.onChanged.addListener(logStorageChange);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage#event-StorageArea-onChanged)-API. Diese Dokumentation ist abgeleitet von [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code.
