---
title: storage.managed
slug: Mozilla/Add-ons/WebExtensions/API/storage/managed
l10n:
  sourceCommit: 65692fd4d256d5647749b7c7005dcf53d425a533
---

Ein {{WebExtAPIRef("storage.StorageArea")}}-Objekt, das den Speicherbereich `managed` darstellt. Elemente im `managed`-Speicher werden vom Domänenadministrator oder anderen nativen Anwendungen, die auf dem Computer des Benutzers installiert sind, festgelegt und sind für die Erweiterung schreibgeschützt. Ein Versuch, diesen Speicherbereich zu ändern, führt zu einem Fehler.

## Bereitstellung von verwaltetem Speicher

Das Verfahren zur Bereitstellung von verwaltetem Speicher variiert je nach Browser. Für Anweisungen zu Chrome siehe den Artikel ["Manifest for storage areas"](https://developer.chrome.com/docs/extensions/reference/manifest/storage).

Für Firefox müssen Sie eine [JSON-Manifestdatei (natives Manifest) in einem bestimmten Format und an einem bestimmten Ort](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#managed_storage_manifests) erstellen oder die [`3rdparty`-Unternehmensrichtlinie](https://mozilla.github.io/policy-templates/#3rdparty) verwenden.

Hier ist ein Beispiel für ein natives Manifest:

<!-- cSpell:ignore colour -->

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

> [!NOTE]
> In Firefox ist ein Neustart des Browsers erforderlich, um Änderungen am JSON-Manifest oder an der Richtlinie in den verwalteten Speicher zu laden. In anderen Browsern erfolgt das Laden von Änderungen dynamisch.

## Methoden

Das `managed`-Objekt implementiert die auf dem {{WebExtAPIRef("storage.StorageArea")}}-Typ definierten Methoden:

- {{WebExtAPIRef("storage.StorageArea.get()", "storage.managed.get()")}}
  - : Ruft ein oder mehrere Elemente aus dem Speicherbereich ab.
- {{WebExtAPIRef("storage.StorageArea.getBytesInUse()", "storage.managed.getBytesInUse()")}}
  - : Ermittelt die Menge des Speicherplatzes (in Bytes), die für ein oder mehrere Elemente im Speicherbereich verwendet wird.
- {{WebExtAPIRef("storage.StorageArea.getKeys()", "storage.managed.getKeys()")}}
  - : Ruft die Schlüssel aller Elemente im Speicherbereich ab.

## Ereignisse

Das `managed`-Objekt implementiert die auf dem {{WebExtAPIRef("storage.StorageArea")}}-Typ definierten Ereignisse:

- {{WebExtAPIRef("storage.StorageArea.onChanged", "storage.managed.onChanged")}}
  - : Wird ausgelöst, wenn sich ein oder mehrere Elemente im Speicherbereich ändern.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage#property-managed)-API von Chromium. Diese Dokumentation ist abgeleitet von [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code.
