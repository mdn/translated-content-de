---
title: IndexedDB API
slug: Web/API/IndexedDB_API
l10n:
  sourceCommit: cf331ccff0dd88648dc9fe22a14f9aaa595ec4bf
---

{{DefaultAPISidebar("IndexedDB")}} {{AvailableInWorkers}}

IndexedDB ist eine Low-Level-API für die clientseitige Speicherung von großen Mengen an strukturierten Daten, einschließlich Dateien/Blobs. Diese API verwendet Indizes, um eine performante Suche innerhalb dieser Daten zu ermöglichen. Während [Web Storage](/de/docs/Web/API/Web_Storage_API) nützlich ist, um kleinere Datenmengen zu speichern, ist es weniger geeignet für die Speicherung größerer Mengen von strukturierten Daten. IndexedDB bietet hierfür eine Lösung. Dies ist die Hauptseite für die Abdeckung von IndexedDB bei MDN — hier finden Sie Links zu vollständigen API-Referenzen und Anleitungen, Details zur Browser-Kompatibilität und einige Erklärungen wichtiger Konzepte.

## Wichtige Konzepte und Verwendung

IndexedDB ist ein transaktionales Datenbanksystem, ähnlich einem SQL-basierten Relational Database Management System (RDBMS). Im Gegensatz zu SQL-basierten RDBMSes, die feste Tabellen mit Spalten verwenden, ist IndexedDB eine auf JavaScript basierende objektorientierte Datenbank. IndexedDB ermöglicht das Speichern und Abrufen von Objekten, die mit einem **Schlüssel** indexiert sind; alle Objekte, die vom [structured clone algorithm](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) unterstützt werden, können gespeichert werden. Sie müssen das Datenbankschema spezifizieren, eine Verbindung zu Ihrer Datenbank öffnen und dann Daten innerhalb einer Reihe von **Transaktionen** abrufen und aktualisieren.

- Lesen Sie mehr über [IndexedDB Schlüsselmerkmale und grundlegende Terminologie](/de/docs/Web/API/IndexedDB_API/Basic_Terminology).
- Erlernen Sie die asynchrone Verwendung von IndexedDB von Grund auf mit unserem [Using IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB) Leitfaden.
- Sehen Sie ein vollständiges Schritt-für-Schritt-Beispiel im [Überprüfen, wann ein Stichtag fällig ist](/de/docs/Web/API/IndexedDB_API/Checking_when_a_deadline_is_due) Leitfaden.

> [!NOTE]
> Wie die meisten Webspeicherlösungen folgt IndexedDB einer [same-origin policy](https://www.w3.org/Security/wiki/Same_Origin_Policy). Während Sie also auf gespeicherte Daten innerhalb einer Domäne zugreifen können, können Sie dies nicht domänenübergreifend tun.

### Synchron und asynchron

Operationen, die mit IndexedDB durchgeführt werden, sind asynchron, um Anwendungen nicht zu blockieren.

### Speicherlimits und Löschkriterien

Es gibt eine Reihe von Webtechnologien, die Daten verschiedener Art auf der Clientseite speichern (d. h. auf Ihrer lokalen Festplatte). IndexedDB wird häufig genannt. Der Prozess, mit dem der Browser bestimmt, wie viel Speicherplatz für Webdaten zugewiesen wird und was gelöscht wird, wenn dieses Limit erreicht wird, ist nicht einfach und variiert zwischen den Browsern. [Browser-Speicherquoten und Löschkriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria) versucht zu erklären, wie dies funktioniert, zumindest im Fall von Firefox.

## Schnittstellen

Um auf eine Datenbank zuzugreifen, rufen Sie [`open()`](/de/docs/Web/API/IDBFactory/open) auf der [`indexedDB`](/de/docs/Web/API/Window/indexedDB) Eigenschaft eines [window](/de/docs/Web/API/Window) Objekts auf. Diese Methode gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest) Objekt zurück; asynchrone Operationen kommunizieren mit der aufrufenden Anwendung, indem Ereignisse auf [`IDBRequest`](/de/docs/Web/API/IDBRequest) Objekten ausgelöst werden.

### Verbindung zu einer Datenbank

- [`IDBFactory`](/de/docs/Web/API/IDBFactory)
  - : Bietet Zugriff auf eine Datenbank. Ein Objekt dieses Typs ist der Wert der globalen [`Window.indexedDB`](/de/docs/Web/API/Window/indexedDB) und [`WorkerGlobalScope.indexedDB`](/de/docs/Web/API/WorkerGlobalScope/indexedDB) Eigenschaften. Es ist also der Einstiegspunkt für die API.
- [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest)
  - : Stellt eine Anfrage dar, um eine Datenbank zu öffnen.
- [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
  - : Stellt eine Verbindung zu einer Datenbank dar. Es ist der einzige Weg, um eine Transaktion auf der Datenbank zu erhalten.

### Abrufen und Ändern von Daten

- [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
  - : Stellt eine Transaktion dar. Sie erstellen eine Transaktion auf einer Datenbank, spezifizieren den Umfang (wie zum Beispiel welche Objekt-Speicher Sie zugreifen möchten) und bestimmen die Art des Zugriffs (nur Lesen oder Schreiben/Lesen), den Sie wünschen.
- [`IDBRequest`](/de/docs/Web/API/IDBRequest)
  - : Generische Schnittstelle, die Datenbankanfragen bearbeitet und Zugriff auf die Ergebnisse bietet.
- [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
  - : Repräsentiert einen Objekt-Speicher, der Zugriff auf einen Datensatz in einer IndexedDB-Datenbank ermöglicht, abgerufen über den Primärschlüssel.
- [`IDBIndex`](/de/docs/Web/API/IDBIndex)
  - : Ermöglicht auch den Zugriff auf einen Teil eines Datensatzes in einer IndexedDB-Datenbank, verwendet jedoch einen Index, um den Datensatz(e) abzurufen, anstatt des Primärschlüssels. Dies ist manchmal schneller als die Verwendung von [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore).
- [`IDBCursor`](/de/docs/Web/API/IDBCursor)
  - : Durchläuft Objekt-Speicher und Indizes.
- [`IDBCursorWithValue`](/de/docs/Web/API/IDBCursorWithValue)
  - : Durchläuft Objekt-Speicher und Indizes und gibt den aktuellen Wert des Cursors zurück.
- [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
  - : Definiert einen Schlüsselspeicherbereich, der verwendet werden kann, um Daten aus einer Datenbank in einem bestimmten Bereich abzurufen.

### Benutzerdefinierte Ereignisschnittstellen

Diese Spezifikation löst Ereignisse mit der folgenden benutzerdefinierten Schnittstelle aus:

- [`IDBVersionChangeEvent`](/de/docs/Web/API/IDBVersionChangeEvent)
  - : Die `IDBVersionChangeEvent` Schnittstelle zeigt an, dass die Version der Datenbank geändert wurde, als Ergebnis einer[`IDBOpenDBRequest.onupgradeneeded`](/de/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event) Ereignis-Handler-Funktion.

## Beispiele

- [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)): Die Referenzanwendung für die Beispiele in den Referenzdokumenten.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Web Storage API](/de/docs/Web/API/Web_Storage_API)
- [Window: localStorage Eigenschaft](/de/docs/Web/API/Window/localStorage)
- [Window: sessionStorage Eigenschaft](/de/docs/Web/API/Window/sessionStorage)
- [StorageEvent](/de/docs/Web/API/StorageEvent)
