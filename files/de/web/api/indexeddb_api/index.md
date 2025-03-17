---
title: IndexedDB API
slug: Web/API/IndexedDB_API
l10n:
  sourceCommit: cf331ccff0dd88648dc9fe22a14f9aaa595ec4bf
---

{{DefaultAPISidebar("IndexedDB")}} {{AvailableInWorkers}}

IndexedDB ist eine Low-Level API für die clientseitige Speicherung von erheblichen Mengen strukturierter Daten, einschließlich Dateien/Blobs. Diese API verwendet Indizes, um Hochleistungssuchen dieser Daten zu ermöglichen. Während der [Web Storage](/de/docs/Web/API/Web_Storage_API) nützlich ist, um kleinere Datenmengen zu speichern, ist er weniger nützlich für die Speicherung größerer Mengen strukturierter Daten. IndexedDB bietet eine Lösung dafür. Dies ist die Hauptseite für die MDN-Berichterstattung zu IndexedDB — hier bieten wir Links zur vollständigen API-Referenz und zu Anwendungsleitfäden, Details zur Browser-Kompatibilität und einige Erläuterungen zu Schlüsselkonzepten.

## Schlüsselkonzepte und Verwendung

IndexedDB ist ein transaktionales Datenbanksystem, ähnlich einem auf SQL basierenden Relational Database Management System (RDBMS). Im Gegensatz zu SQL-basierten RDBMSes, die feste Spaltentabellen verwenden, ist IndexedDB eine JavaScript-basierte objektorientierte Datenbank. IndexedDB ermöglicht es Ihnen, Objekte zu speichern und abzurufen, die mit einem **Schlüssel** indexiert sind; alle Objekte, die vom [structured clone algorithm](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) unterstützt werden, können gespeichert werden. Sie müssen das Datenbankschema festlegen, eine Verbindung zu Ihrer Datenbank öffnen und dann Daten in einer Reihe von **Transaktionen** abrufen und aktualisieren.

- Lesen Sie mehr über [IndexedDB-Schlüsseleigenschaften und grundlegende Terminologie](/de/docs/Web/API/IndexedDB_API/Basic_Terminology).
- Erlernen Sie die asynchrone Verwendung von IndexedDB aus den Grundlagen mit unserem [Verwenden von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB) Leitfaden.
- Sehen Sie ein vollständiges Schritt-für-Schritt-Beispiel im Leitfaden zum [Überprüfen, wann eine Frist fällig ist](/de/docs/Web/API/IndexedDB_API/Checking_when_a_deadline_is_due).

> [!NOTE]
> Wie die meisten Web-Speicherlösungen folgt IndexedDB einer [same-origin policy](https://www.w3.org/Security/wiki/Same_Origin_Policy). Während Sie also auf gespeicherte Daten innerhalb einer Domain zugreifen können, können Sie nicht auf Daten zwischen verschiedenen Domains zugreifen.

### Synchron und asynchron

Operationen, die mit IndexedDB durchgeführt werden, sind asynchron, um Anwendungen nicht zu blockieren.

### Speicherkapazität und Räumungskriterien

Es gibt mehrere Web-Technologien, die Daten in irgendeiner Form clientseitig (d.h. auf Ihrer lokalen Festplatte) speichern. IndexedDB wird am häufigsten erwähnt. Der Prozess, wie der Browser ermittelt, wie viel Speicherplatz den Web-Datenspeichern zugewiesen wird und was gelöscht werden soll, wenn dieses Limit erreicht ist, ist nicht einfach und unterscheidet sich zwischen den Browsern. [Browser-Speicherquoten und Räumungskriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria) versucht zu erklären, wie dies funktioniert, zumindest im Fall von Firefox.

## Schnittstellen

Um auf eine Datenbank zuzugreifen, rufen Sie [`open()`](/de/docs/Web/API/IDBFactory/open) an der [`indexedDB`](/de/docs/Web/API/Window/indexedDB) Eigenschaft eines [window](/de/docs/Web/API/Window) Objekts auf. Diese Methode gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest) Objekt zurück; asynchrone Operationen kommunizieren mit der aufrufenden Anwendung, indem sie Ereignisse auf [`IDBRequest`](/de/docs/Web/API/IDBRequest) Objekten auslösen.

### Verbindung zu einer Datenbank herstellen

- [`IDBFactory`](/de/docs/Web/API/IDBFactory)
  - : Bietet Zugriff auf eine Datenbank. Ein Objekt dieses Typs ist der Wert der globalen [`Window.indexedDB`](/de/docs/Web/API/Window/indexedDB) und [`WorkerGlobalScope.indexedDB`](/de/docs/Web/API/WorkerGlobalScope/indexedDB) Eigenschaften. Es ist daher der Einstiegspunkt für die API.
- [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest)
  - : Repräsentiert eine Anfrage zum Öffnen einer Datenbank.
- [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
  - : Repräsentiert eine Verbindung zu einer Datenbank. Es ist der einzige Weg, um eine Transaktion in der Datenbank zu erhalten.

### Daten abrufen und ändern

- [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
  - : Repräsentiert eine Transaktion. Sie erstellen eine Transaktion in einer Datenbank, geben den Umfang an (wie etwa, welche Objekt-Speicher Sie zugreifen möchten), und bestimmen die Art des Zugriffs (nur lesen oder readwrite), den Sie möchten.
- [`IDBRequest`](/de/docs/Web/API/IDBRequest)
  - : Generische Schnittstelle, die Datenbankanfragen bearbeitet und Zugang zu Ergebnissen bietet.
- [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
  - : Repräsentiert einen Objektspeicher, der Zugriff auf eine Reihe von Daten in einer IndexedDB-Datenbank erlaubt, die über den Primärschlüssel aufgerufen werden.
- [`IDBIndex`](/de/docs/Web/API/IDBIndex)
  - : Ermöglicht auch den Zugriff auf einen Teil von Daten in einer IndexedDB-Datenbank, benutzt jedoch einen Index, um den Datensatz abzurufen, anstatt des Primärschlüssels. Dies ist manchmal schneller als die Verwendung von [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore).
- [`IDBCursor`](/de/docs/Web/API/IDBCursor)
  - : Durchläuft Objektspeicher und Indizes.
- [`IDBCursorWithValue`](/de/docs/Web/API/IDBCursorWithValue)
  - : Durchläuft Objektspeicher und Indizes und gibt den aktuellen Wert des Cursors zurück.
- [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
  - : Definiert einen Schlüsselbereich, der verwendet werden kann, um Daten aus einer Datenbank in einem bestimmten Bereich abzurufen.

### Anpassungsfähige Ereignis-Schnittstellen

Diese Spezifikation löst Ereignisse mit der folgenden benutzerdefinierten Schnittstelle aus:

- [`IDBVersionChangeEvent`](/de/docs/Web/API/IDBVersionChangeEvent)
  - : Das `IDBVersionChangeEvent` Interface zeigt an, dass sich die Version der Datenbank geändert hat, als Ergebnis einer [`IDBOpenDBRequest.onupgradeneeded`](/de/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event) Ereignis-Handler-Funktion.

## Beispiele

- [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)): Die Referenzanwendung für die Beispiele in den Referenzdokumenten.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Web Storage API](/de/docs/Web/API/Web_Storage_API)
- [Window: localStorage-Eigenschaft](/de/docs/Web/API/Window/localStorage)
- [Window: sessionStorage-Eigenschaft](/de/docs/Web/API/Window/sessionStorage)
- [StorageEvent](/de/docs/Web/API/StorageEvent)
