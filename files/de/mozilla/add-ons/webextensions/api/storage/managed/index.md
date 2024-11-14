---
title: storage.managed
slug: Mozilla/Add-ons/WebExtensions/API/storage/managed
l10n:
  sourceCommit: 267c7effd70f84cfeb4355ed1a63b1c059284a75
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("storage.StorageArea")}} Objekt, das den `managed` Speicherbereich repräsentiert. Elemente im `managed` Speicher werden vom Domain-Administrator oder anderen nativen Anwendungen, die auf dem Computer des Benutzers installiert sind, festgelegt und sind für die Erweiterung schreibgeschützt. Der Versuch, diesen Speicherbereich zu ändern, führt zu einem Fehler.

## Verwaltungsspeicher bereitstellen

Das Verfahren zur Bereitstellung von Verwaltungsspeicher variiert zwischen den Browsern. Für Chrome-Anweisungen siehe den Artikel ["Manifest for storage areas"](https://developer.chrome.com/docs/extensions/reference/manifest/storage).

Für Firefox müssen Sie eine [JSON-Manifesta-Datei im nativen Manifestformat und an einem bestimmten Ort erstellen](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#managed_storage_manifests) oder die [`3rdparty` Unternehmensrichtlinie](https://mozilla.github.io/policy-templates/#3rdparty) verwenden.

Hier ist ein Beispiel für ein natives Manifest:

```json
{
  "name": "favourite-colour-examples@mozilla.org",
  "description": "ignored",
  "type": "storage",
  "data": {
    "colour": "management thinks it should be blue!"
  }
}
```

Mit diesem Manifest könnte die [favourite-colour](https://github.com/mdn/webextensions-examples/tree/main/favourite-colour) Erweiterung auf die Daten mit einem Code wie diesem zugreifen:

```js
let storageItem = browser.storage.managed.get("colour");
storageItem.then((res) => {
  console.log(`Managed colour is: ${res.colour}`);
});
```

## Methoden

Das `managed` Objekt implementiert die auf dem Typ {{WebExtAPIRef("storage.StorageArea")}} definierten Methoden:

- {{WebExtAPIRef("storage.StorageArea.get()", "storage.managed.get()")}}
  - : Ruft ein oder mehrere Elemente aus dem Speicherbereich ab.
- {{WebExtAPIRef("storage.StorageArea.getBytesInUse()", "storage.managed.getBytesInUse()")}}
  - : Gibt die Menge des Speicherplatzes (in Bytes) an, die für ein oder mehrere Elemente im Speicherbereich verwendet wird.

## Ereignisse

Das `managed` Objekt implementiert die auf dem Typ {{WebExtAPIRef("storage.StorageArea")}} definierten Ereignisse:

- {{WebExtAPIRef("storage.StorageArea.onChanged", "storage.managed.onChanged")}}
  - : Wird ausgelöst, wenn sich ein oder mehrere Elemente im Speicherbereich ändern.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage#property-managed) API. Diese Dokumentation ist abgeleitet von [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code.
