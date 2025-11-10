---
title: IndexedDB API
slug: Web/API/IndexedDB_API
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("IndexedDB")}} {{AvailableInWorkers}}

IndexedDB ist eine Low-Level-API für die clientseitige Speicherung großer Mengen strukturierter Daten, einschließlich Dateien/Blobs. Diese API verwendet Indizes, um Hochleistungssuchen dieser Daten zu ermöglichen. Während [Web Storage](/de/docs/Web/API/Web_Storage_API) nützlich für die Speicherung kleinerer Datenmengen ist, ist es weniger geeignet für die Speicherung größerer Mengen strukturierter Daten. IndexedDB bietet dafür eine Lösung. Dies ist die Hauptseite für die abgedeckte IndexedDB-Dokumentation bei MDN — hier bieten wir Links zur vollständigen API-Referenz und zu Benutzungsanleitungen, Details zur Browser-Kompatibilität und einige Erklärungen zu wichtigen Konzepten.

## Wichtige Konzepte und Nutzung

IndexedDB ist ein transaktionales Datenbanksystem, ähnlich wie ein SQL-basiertes relationales Datenbankverwaltungssystem (RDBMS). Im Gegensatz zu SQL-basierten RDBMS, die feste Spaltentabellen verwenden, ist IndexedDB eine JavaScript-basierte objektorientierte Datenbank. IndexedDB ermöglicht es Ihnen, Objekte zu speichern und abzurufen, die mit einem **Schlüssel** indexiert sind; alle Objekte, die durch den [Structured Clone Algorithm](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) unterstützt werden, können gespeichert werden. Sie müssen das Datenbankschema angeben, eine Verbindung zu Ihrer Datenbank öffnen und dann Daten innerhalb einer Reihe von **Transaktionen** abrufen und aktualisieren.

- Lesen Sie mehr über [IndexedDB-Schlüsseleigenschaften und grundlegende Terminologie](/de/docs/Web/API/IndexedDB_API/Basic_Terminology).
- Lernen Sie, IndexedDB asynchron aus den Grundlagen heraus zu verwenden, mit unserem [Using IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB) Leitfaden.
- Sehen Sie sich ein vollständiges Schritt-für-Schritt-Beispiel in der [Prüfung, wann eine Frist fällig ist](/de/docs/Web/API/IndexedDB_API/Checking_when_a_deadline_is_due) Anleitung an.

> [!NOTE]
> Wie die meisten Webspeicherlösungen folgt IndexedDB einer [Same-Origin-Policy](https://www.w3.org/Security/wiki/Same_Origin_Policy). Während Sie also auf gespeicherte Daten innerhalb einer Domäne zugreifen können, können Sie nicht auf Daten über verschiedene Domänen hinweg zugreifen.

### Synchron und asynchron

Operationen, die mit IndexedDB durchgeführt werden, erfolgen asynchron, um Anwendungen nicht zu blockieren.

### Speichergrenzen und Aussonderungskriterien

Es gibt eine Reihe von Webtechnologien, die Daten verschiedener Art auf der Clientseite (d.h. auf Ihrer lokalen Festplatte) speichern. IndexedDB wird am häufigsten diskutiert. Der Prozess, durch den der Browser ermittelt, wie viel Speicherplatz er für die Webdatenverarbeitung bereitstellt und was gelöscht wird, wenn dieses Limit erreicht ist, ist nicht einfach und unterscheidet sich zwischen den Browsern. [Browser-Speicherquoten und Aussonderungskriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria) versucht zu erklären, wie dies funktioniert, zumindest im Fall von Firefox.

## Schnittstellen

Um auf eine Datenbank zuzugreifen, rufen Sie [`open()`](/de/docs/Web/API/IDBFactory/open) auf der [`indexedDB`](/de/docs/Web/API/Window/indexedDB) Eigenschaft eines [window](/de/docs/Web/API/Window) Objekts auf. Diese Methode gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest) Objekt zurück; asynchrone Operationen kommunizieren mit der aufrufenden Anwendung durch das Auslösen von Ereignissen auf [`IDBRequest`](/de/docs/Web/API/IDBRequest) Objekten.

### Verbindung zu einer Datenbank herstellen

- [`IDBFactory`](/de/docs/Web/API/IDBFactory)
  - : Bietet Zugriff auf eine Datenbank. Ein Objekt dieses Typs ist der Wert der globalen [`Window.indexedDB`](/de/docs/Web/API/Window/indexedDB) und [`WorkerGlobalScope.indexedDB`](/de/docs/Web/API/WorkerGlobalScope/indexedDB) Eigenschaften. Es ist daher der Einstiegspunkt für die API.
- [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest)
  - : Repräsentiert eine Anfrage zum Öffnen einer Datenbank.
- [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
  - : Repräsentiert eine Verbindung zu einer Datenbank. Es ist der einzige Weg, um eine Transaktion auf der Datenbank zu erhalten.

### Daten abrufen und modifizieren

- [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
  - : Repräsentiert eine Transaktion. Sie erstellen eine Transaktion auf einer Datenbank, spezifizieren den Umfang (wie z.B. welche Objekt-Speicher Sie zugreifen möchten), und bestimmen die Art des Zugriffs (nur lesen oder lesend/schreibend), den Sie wünschen.
- [`IDBRequest`](/de/docs/Web/API/IDBRequest)
  - : Generische Schnittstelle, die Datenbankanfragen behandelt und Zugriff auf Ergebnisse bietet.
- [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
  - : Repräsentiert einen Objektspeicher, der den Zugriff auf einen Satz von Daten in einer IndexedDB-Datenbank ermöglicht, die über den Primärschlüssel abgerufen wurde.
- [`IDBIndex`](/de/docs/Web/API/IDBIndex)
  - : Erlaubt ebenfalls den Zugriff auf einen Teil der Daten in einer IndexedDB-Datenbank, verwendet jedoch einen Index, um das oder die Datensätze abzurufen, anstatt den Primärschlüssel. Dies ist manchmal schneller als die Verwendung von [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore).
- [`IDBCursor`](/de/docs/Web/API/IDBCursor)
  - : Iteriert über Objektspeicher und Indizes.
- [`IDBCursorWithValue`](/de/docs/Web/API/IDBCursorWithValue)
  - : Iteriert über Objektspeicher und Indizes und gibt den aktuellen Wert des Cursors zurück.
- [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
  - : Definiert einen Schlüsselsbereich, der verwendet werden kann, um Daten aus einer Datenbank in einem bestimmten Bereich abzurufen.

### Benutzerdefinierte Ereignisschnittstellen

Diese Spezifikation löst Ereignisse mit der folgenden benutzerdefinierten Schnittstelle aus:

- [`IDBVersionChangeEvent`](/de/docs/Web/API/IDBVersionChangeEvent)
  - : Die `IDBVersionChangeEvent` Schnittstelle gibt an, dass die Version der Datenbank geändert wurde, als Ergebnis einer [`IDBOpenDBRequest.onupgradeneeded`](/de/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event) Ereignis-Handler-Funktion.

## Beispiele

- [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)): Die Referenzanwendung für die Beispiele in den Referenzdokumenten.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Web Storage API](/de/docs/Web/API/Web_Storage_API)
- [Window: localStorage-Eigenschaft](/de/docs/Web/API/Window/localStorage)
- [Window: sessionStorage-Eigenschaft](/de/docs/Web/API/Window/sessionStorage)
- [StorageEvent](/de/docs/Web/API/StorageEvent)
