---
title: storage.onChanged
slug: Mozilla/Add-ons/WebExtensions/API/storage/onChanged
l10n:
  sourceCommit: c53bfa01f3bf436d486f4032c16f592855a2af2c
---

Wird ausgelöst, wenn sich ein oder mehrere Elemente in einem der [Speicherbereiche](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea) ändern.
Wenn Sie nur Änderungen in einem Speicherbereich überwachen müssen, verwenden Sie stattdessen {{WebExtAPIRef('storage.StorageArea.onChanged')}}.

Wird ausgelöst, wenn {{WebExtAPIRef('storage.StorageArea.set','storageArea.set')}}, {{WebExtAPIRef('storage.StorageArea.remove','storageArea.remove')}} oder {{WebExtAPIRef('storage.StorageArea.clear','storageArea.clear')}} in einem der [Speicherbereiche](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea) ausgeführt wird.

> [!NOTE]
> In Firefox empfängt der Listener alle Schlüssel aus einem Speicherbereich, in dem {{WebExtAPIRef('storage.StorageArea.set','storageArea.set')}} ausgeführt wird. Der Listener kann aufgerufen werden, auch wenn keine Änderung der Daten vorliegt. Um Details zu den geänderten Elementen zu finden, prüfen Sie das {{WebExtAPIRef('storage.StorageChange')}}-Objekt jedes Schlüssels. Siehe [Firefox-Bug 1833153](https://bugzil.la/1833153).

> [!NOTE]
> Firefox löst dieses Ereignis nicht aus für Änderungen an `storage.managed`, da verwalteter Speicher nur beim Browserstart gelesen wird (aus der [JSON-Manifestsdatei (natürliches Manifest)](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#managed_storage_manifests) oder [`3rdparty` Unternehmensrichtlinie](https://mozilla.github.io/policy-templates/#3rdparty)).

## Syntax

```js-nolint
browser.storage.onChanged.addListener(listener)
browser.storage.onChanged.removeListener(listener)
browser.storage.onChanged.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Überwachen dieses Ereignisses. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden diese Argumente übergeben:
    - `changes`
      - : `object`. Objekt, das die Änderung beschreibt. Der Name jeder Eigenschaft ist der Name jedes Schlüssels. Der Wert jedes Schlüssels ist ein {{WebExtAPIRef('storage.StorageChange')}}-Objekt, das die Änderung an diesem Element beschreibt.
    - `areaName`
      - : `string`. Der Name des Speicherbereichs (`"local"`, `"managed"`, `"session"`, oder `"sync"`), in dem die Änderungen vorgenommen wurden.

## Beispiele

```js
/*
Log the storage area that changed,
then for each item changed,
log its old value and its new value.
*/
function logStorageChange(changes, area) {
  console.log(`Change in storage area: ${area}`);

  const changedItems = Object.keys(changes);

  for (const item of changedItems) {
    console.log(`${item} has changed:`);
    console.log("Old value: ", changes[item].oldValue);
    console.log("New value: ", changes[item].newValue);
  }
}

browser.storage.onChanged.addListener(logStorageChange);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage#event-onChanged) API. Diese Dokumentation ist abgeleitet von [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code.
