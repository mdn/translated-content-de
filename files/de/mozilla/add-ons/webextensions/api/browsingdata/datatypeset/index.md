---
title: browsingData.DataTypeSet
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/DataTypeSet
l10n:
  sourceCommit: b2685e330f887359ec886b08199a22a6fcbe0caf
---

Der **`browsingData.DataTypeSet`**-Typ beschreibt eine Menge von Datentypen.

Er enthält eine Reihe von booleschen Eigenschaften. Der Name jeder Eigenschaft ist der Name eines bestimmten Typs von Browserdaten: "downloads", "history" usw. Alle Eigenschaften sind optional.

Dieser Typ wird verwendet:

- in {{WebExtAPIRef("browsingData.remove()")}}, um zu beschreiben, welche Datentypen entfernt werden sollen.
- in {{WebExtAPIRef("browsingData.settings()")}}, um zu beschreiben, welche Datentypen in der "Chronik leeren"-Funktion des Browsers ausgewählt sind.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten diese Eigenschaften:

- `cache` {{optional_inline}}
  - : `boolean`. Der Cache des Browsers.
- `cookies` {{optional_inline}}
  - : `boolean`. Beim Surfen erworbene Cookies.
- `downloads` {{optional_inline}}
  - : `boolean`. Die Download-Historie des Benutzers.
- `fileSystems` {{optional_inline}}
  - : `boolean`. Dateisysteme der Webseite.
- `formData` {{optional_inline}}
  - : `boolean`. Gespeicherte Formulardaten für die Autovervollständigung.
- `history` {{optional_inline}}
  - : `boolean`. Die Surf-Historie des Benutzers.
- `indexedDB` {{optional_inline}}
  - : `boolean`. IndexedDB-Daten.
- `localStorage` {{optional_inline}}
  - : `boolean`. Lokaler Speicher ([`localStorage`](/de/docs/Web/API/Window/localStorage)) und Sitzungspeicher ([`sessionStorage`](/de/docs/Web/API/Window/sessionStorage)) Daten.
- `passwords` {{optional_inline}}
  - : `boolean`. Gespeicherte Passwörter für die Autovervollständigung.
- `pluginData` {{optional_inline}}
  - : `boolean`. Gespeicherte Daten, die mit Plugins verbunden sind.
- `serverBoundCertificates` {{optional_inline}}
  - : `boolean`. Gespeicherte servergebundene Zertifikate.
- `serviceWorkers` {{optional_inline}}
  - : `boolean`. Von Service-Workern zwischengespeicherte Daten.

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData)-API von Chromium.
