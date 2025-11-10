---
title: browsingData.DataTypeSet
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/DataTypeSet
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Der **`browsingData.DataTypeSet`** Typ beschreibt eine Menge von Datentypen.

Es enthält eine Anzahl von booleschen Eigenschaften. Der Name jeder Eigenschaft ist der Name eines bestimmten Typs von Browsing-Daten: "downloads", "history" und so weiter. Alle Eigenschaften sind optional.

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
  - : `boolean`. Dateisysteme der Website.
- `formData` {{optional_inline}}
  - : `boolean`. Gespeicherte Formulardaten zur Autovervollständigung.
- `history` {{optional_inline}}
  - : `boolean`. Der Browsing-Verlauf des Benutzers.
- `indexedDB` {{optional_inline}}
  - : `boolean`. IndexedDB-Daten.
- `localStorage` {{optional_inline}}
  - : `boolean`. Lokale Speicher-Daten.
- `passwords` {{optional_inline}}
  - : `boolean`. Gespeicherte Passwörter zur Autovervollständigung.
- `pluginData` {{optional_inline}}
  - : `boolean`. Gespeicherte Daten, die mit Plugins verbunden sind.
- `serverBoundCertificates` {{optional_inline}}
  - : `boolean`. Gespeicherte servergebundene Zertifikate.
- `serviceWorkers` {{optional_inline}}
  - : `boolean`. Von Service Workers zwischengespeicherte Daten.

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData) API von Chromium.
