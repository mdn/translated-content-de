---
title: IndexedDB API
slug: Web/API/IndexedDB_API
l10n:
  sourceCommit: cf331ccff0dd88648dc9fe22a14f9aaa595ec4bf
---

{{DefaultAPISidebar("IndexedDB")}} {{AvailableInWorkers}}

IndexedDB ist eine Low-Level-API für die clientseitige Speicherung erheblicher Mengen an strukturierten Daten, einschließlich Dateien/Blobs. Diese API verwendet Indizes, um eine leistungsstarke Suche in diesen Daten zu ermöglichen. Während [Web Storage](/de/docs/Web/API/Web_Storage_API) nützlich für die Speicherung kleinerer Datenmengen ist, ist es weniger nützlich für die Speicherung größerer Mengen strukturierter Daten. IndexedDB bietet eine Lösung. Dies ist die Hauptübersichtsseite für die MDN-Dokumentation zu IndexedDB – hier bieten wir Links zu den vollständigen API-Referenzen und Anwendungsleitfäden, Details zur Browserunterstützung und einige Erklärungen zu den wichtigsten Konzepten.

## Wichtige Konzepte und Nutzung

IndexedDB ist ein transaktionales Datenbanksystem, ähnlich einem SQL-basierten Relational Database Management System (RDBMS). Im Gegensatz zu SQL-basierten RDBMS, die feste Spaltentabellen verwenden, ist IndexedDB eine objektorientierte Datenbank auf Basis von JavaScript. IndexedDB ermöglicht es Ihnen, Objekte zu speichern und abzurufen, die mit einem **Schlüssel** indexiert sind; alle Objekte, die vom [structured clone algorithm](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) unterstützt werden, können gespeichert werden. Sie müssen das Datenbankschema angeben, eine Verbindung zu Ihrer Datenbank öffnen und dann die Daten in einer Reihe von **Transaktionen** abrufen und aktualisieren.

- Lesen Sie mehr über [IndexedDB-Schlüsselmerkmale und grundlegende Terminologie](/de/docs/Web/API/IndexedDB_API/Basic_Terminology).
- Lernen Sie, IndexedDB asynchron von Grund auf mit unserem Leitfaden [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB) zu nutzen.
- Sehen Sie sich ein vollständiges Schritt-für-Schritt-Beispiel im Leitfaden [Prüfen, wann eine Frist abläuft](/de/docs/Web/API/IndexedDB_API/Checking_when_a_deadline_is_due) an.

> [!NOTE]
> Wie die meisten Webspeicherlösungen folgt IndexedDB einer [Same-Origin-Policy](https://www.w3.org/Security/wiki/Same_Origin_Policy). Das bedeutet, dass Sie zwar auf gespeicherte Daten innerhalb einer Domain zugreifen können, aber nicht auf Daten zwischen verschiedenen Domains.

### Synchron und asynchron

Vorgänge, die mit IndexedDB ausgeführt werden, erfolgen asynchron, um Anwendungen nicht zu blockieren.

### Speicherbegrenzungen und Auslöschungskriterien

Es gibt eine Reihe von Web-Technologien, die Daten jeglicher Art auf der Client-Seite speichern (d. h. auf Ihrer lokalen Festplatte). IndexedDB wird am häufigsten besprochen. Der Prozess, wie der Browser berechnet, wie viel Speicherplatz für die Webdatenspeicherung zugewiesen wird und was gelöscht werden soll, wenn dieses Limit erreicht ist, ist nicht einfach und unterscheidet sich je nach Browser. [Browser-Speicherquoten und Auslöschungskriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria) versucht zu erklären, wie dies funktioniert, zumindest im Fall von Firefox.

## Schnittstellen

Um auf eine Datenbank zuzugreifen, rufen Sie [`open()`](/de/docs/Web/API/IDBFactory/open) auf der [`indexedDB`](/de/docs/Web/API/Window/indexedDB) Eigenschaft eines [window](/de/docs/Web/API/Window) Objekts auf. Diese Methode gibt ein {{domxref("IDBRequest")}} Objekt zurück; asynchrone Operationen kommunizieren mit der aufrufenden Anwendung, indem sie Ereignisse auf {{domxref("IDBRequest")}} Objekten auslösen.

### Verbindung zu einer Datenbank herstellen

- {{domxref("IDBFactory")}}
  - : Bietet Zugriff auf eine Datenbank. Ein Objekt dieses Typs ist der Wert der globalen {{domxref("Window.indexedDB")}} und {{domxref("WorkerGlobalScope.indexedDB")}} Eigenschaften. Es ist daher der Einstiegspunkt für die API.
- {{domxref("IDBOpenDBRequest")}}
  - : Stellt eine Anfrage zum Öffnen einer Datenbank dar.
- {{domxref("IDBDatabase")}}
  - : Stellt eine Verbindung zu einer Datenbank dar. Es ist der einzige Weg, um eine Transaktion in der Datenbank zu erhalten.

### Daten abrufen und ändern

- {{domxref("IDBTransaction")}}
  - : Stellt eine Transaktion dar. Sie erstellen eine Transaktion auf einer Datenbank, spezifizieren den Bereich (z. B. welche Objektspeicher Sie zugreifen möchten) und bestimmen die Art des Zugriffs (nur Lesezugriff oder Lese-Schreibzugriff), den Sie wünschen.
- {{domxref("IDBRequest")}}
  - : Generische Schnittstelle, die Datenbankanfragen bearbeitet und Zugriff auf die Ergebnisse bietet.
- {{domxref("IDBObjectStore")}}
  - : Repräsentiert einen Objektspeicher, der Zugriff auf eine Menge von Daten in einer IndexedDB-Datenbank ermöglicht, die über den Primärschlüssel abgerufen werden.
- {{domxref("IDBIndex")}}
  - : Bietet ebenfalls Zugriff auf eine Teilmenge von Daten in einer IndexedDB-Datenbank, verwendet jedoch einen Index, um den Datensatz/die Datensätze statt des Primärschlüssels abzurufen. Dies ist manchmal schneller als die Verwendung von {{domxref("IDBObjectStore")}}.
- {{domxref("IDBCursor")}}
  - : Durchläuft Objektspeicher und Indizes.
- {{domxref("IDBCursorWithValue")}}
  - : Durchläuft Objektspeicher und Indizes und gibt den aktuellen Wert des Cursors zurück.
- {{domxref("IDBKeyRange")}}
  - : Definiert einen Schlüsselbereich, der verwendet werden kann, um Daten aus einer Datenbank in einem bestimmten Bereich abzurufen.

### Benutzerdefinierte Ereignisschnittstellen

Diese Spezifikation löst Ereignisse mit der folgenden benutzerdefinierten Schnittstelle aus:

- {{domxref("IDBVersionChangeEvent")}}
  - : Die `IDBVersionChangeEvent` Schnittstelle zeigt an, dass sich die Version der Datenbank geändert hat, als Ergebnis einer {{domxref("IDBOpenDBRequest.upgradeneeded_event", "IDBOpenDBRequest.onupgradeneeded")}} Ereignis-Handler-Funktion.

## Beispiele

- [To-do Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)): Die Referenzanwendung für die Beispiele in den Referenzdokumenten.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Web Storage API](/de/docs/Web/API/Web_Storage_API)
- [Window: localStorage Eigenschaft](/de/docs/Web/API/Window/localStorage)
- [Window: sessionStorage Eigenschaft](/de/docs/Web/API/Window/sessionStorage)
- [StorageEvent](/de/docs/Web/API/StorageEvent)
