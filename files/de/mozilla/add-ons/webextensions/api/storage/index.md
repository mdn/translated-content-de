---
title: storage
slug: Mozilla/Add-ons/WebExtensions/API/storage
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ermöglicht Erweiterungen das Speichern und Abrufen von Daten sowie das Überwachen von Änderungen an gespeicherten Elementen.

Das Speichersystem basiert auf der [Web Storage API](/de/docs/Web/API/Web_Storage_API), mit einigen Unterschieden. Unter anderem umfassen diese Unterschiede:

- Es ist asynchron.
- Werte sind auf die Erweiterung beschränkt, nicht auf eine bestimmte Domain (d.h. derselbe Satz von Schlüssel/Wert-Paaren ist allen Skripten im Hintergrundkontext und Inhaltsskripten verfügbar).
- Die gespeicherten Werte können jeden JSON-fähigen Wert umfassen, nicht nur [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String). Unter anderem umfasst dies: [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) und [`Object`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object), jedoch nur, wenn deren Inhalte als JSON dargestellt werden können, was keine DOM-Knoten umfasst. Sie müssen Ihre Werte nicht in JSON `Strings` konvertieren, bevor Sie sie speichern, aber sie werden intern als JSON dargestellt, weshalb die Anforderung besteht, dass sie JSON-fähig sind.
- Mehrere Schlüssel/Wert-Paare können in einem einzigen API-Aufruf gesetzt oder abgerufen werden.

Um diese API zu verwenden, müssen Sie die `"storage"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in Ihrer [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei einschließen.

Jede Erweiterung hat ihren eigenen Speicherbereich, der in verschiedene Speicherarten unterteilt werden kann.

Obwohl diese API der [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) ähnlich ist, wird empfohlen, dass Sie `Window.localStorage` nicht im Erweiterungscode verwenden, um erweiterungsbezogene Daten zu speichern. Firefox löscht Daten, die von Erweiterungen mit der localStorage API gespeichert wurden, in verschiedenen Szenarien, in denen Benutzer ihren Browserverlauf und ihre Daten aus Datenschutzgründen löschen. Daten, die mit der [`storage.local`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage/local) API gespeichert werden, werden in diesen Szenarien korrekt beibehalten.

Sie können die gespeicherten Daten unter dem Element "Erweiterungsspeicher" im [Storage Inspector](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html) Tab des [Entwicklerwerkzeugs](https://extensionworkshop.com/documentation/develop/debugging/) untersuchen, zugänglich über `about:debugging`.

> [!NOTE]
> Der Speicherbereich ist nicht verschlüsselt und sollte nicht zum Speichern vertraulicher Benutzerinformationen verwendet werden.

## Typen

- {{WebExtAPIRef("storage.StorageArea")}}
  - : Ein Objekt, das einen Speicherbereich darstellt.
- {{WebExtAPIRef("storage.StorageChange")}}
  - : Ein Objekt, das eine Änderung an einem Speicherbereich darstellt.

## Eigenschaften

`storage` hat vier Eigenschaften, die die verschiedenen Typen des verfügbaren Speicherbereichs darstellen.

- {{WebExtAPIRef("storage.local")}}
  - : Repräsentiert den `local` Speicherbereich. Elemente im `local` Speicher sind lokal auf dem Rechner, auf dem die Erweiterung installiert wurde.
- {{WebExtAPIRef("storage.managed")}}
  - : Repräsentiert den `managed` Speicherbereich. Elemente im `managed` Speicher werden vom Domain-Administrator festgelegt und sind für die Erweiterung schreibgeschützt. Der Versuch, diesen Namensraum zu ändern, führt zu einem Fehler.
- {{WebExtAPIRef("storage.session")}}
  - : Repräsentiert den `session` Speicherbereich. Elemente im `session` Speicher werden im Arbeitsspeicher gespeichert und nicht auf die Festplatte geschrieben.
- {{WebExtAPIRef("storage.sync")}}
  - : Repräsentiert den `sync` Speicherbereich. Elemente im `sync` Speicher werden vom Browser synchronisiert und sind auf allen Instanzen dieses Browsers verfügbar, bei denen der Benutzer angemeldet ist, auch auf verschiedenen Geräten.

## Ereignisse

- {{WebExtAPIRef("storage.onChanged")}}
  - : Wird ausgelöst, wenn sich eines oder mehrere Elemente in einem der Speicherbereiche ändern.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf der API [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage) von Chromium. Diese Dokumentation stammt aus [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code.
