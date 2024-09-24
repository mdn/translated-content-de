---
title: browsingData.DataTypeSet
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/DataTypeSet
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Der Typ **`browsingData.DataTypeSet`** beschreibt eine Menge von Datentypen.

Er enthält eine Anzahl von booleschen Eigenschaften. Der Name jeder Eigenschaft ist der Name eines bestimmten Typs von Browserdaten: "downloads", "history" und so weiter. Alle Eigenschaften sind optional.

Dieser Typ wird verwendet:

- in {{WebExtAPIRef("browsingData.remove()")}}, um zu beschreiben, welche Datentypen entfernt werden sollen
- in {{WebExtAPIRef("browsingData.settings()")}}, um zu beschreiben, welche Datentypen derzeit im "Verlauf löschen"-Feature des Browsers ausgewählt sind.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `cache` {{optional_inline}}
  - : `boolean`. Der Cache des Browsers.
- `cookies` {{optional_inline}}
  - : `boolean`. Beim Browsen erworbene Cookies.
- `downloads` {{optional_inline}}
  - : `boolean`. Der Download-Verlauf des Benutzers.
- `fileSystems` {{optional_inline}}
  - : `boolean`. Dateisysteme von Websites.
- `formData` {{optional_inline}}
  - : `boolean`. Gespeicherte Formulardaten, für die Autovervollständigung.
- `history` {{optional_inline}}
  - : `boolean`. Der Browserverlauf des Benutzers.
- `indexedDB` {{optional_inline}}
  - : `boolean`. IndexedDB-Daten.
- `localStorage` {{optional_inline}}
  - : `boolean`. Daten des lokalen Speichers.
- `passwords` {{optional_inline}}
  - : `boolean`. Gespeicherte Passwörter, für die Autovervollständigung.
- `pluginData` {{optional_inline}}
  - : `boolean`. Mit Plugins verbundene gespeicherte Daten.
- `serverBoundCertificates` {{optional_inline}}
  - : `boolean`. Gespeicherte servergebundene Zertifikate.
- `serviceWorkers` {{optional_inline}}
  - : `boolean`. Von Service-Workern zwischengespeicherte Daten.

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData) API von Chromium.
