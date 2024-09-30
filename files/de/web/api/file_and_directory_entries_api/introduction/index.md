---
title: Einführung in die File and Directory Entries API
slug: Web/API/File_and_Directory_Entries_API/Introduction
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{DefaultAPISidebar("File and Directory Entries API")}}

Die [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) simuliert ein lokales Dateisystem, in dem sich Webanwendungen bewegen können. Sie können Anwendungen entwickeln, die Dateien und Verzeichnisse in einem isolierten, virtuellen Dateisystem lesen, schreiben und erstellen können.

Die File and Directory Entries API interagiert mit anderen verwandten APIs. Sie wurde auf der File Writer API aufgebaut, die wiederum auf der File API basiert. Jede dieser APIs fügt unterschiedliche Funktionalitäten hinzu. Diese APIs sind ein riesiger evolutionärer Schritt für Webanwendungen, die nun große Mengen an Daten zwischenspeichern und verarbeiten können.

## Über dieses Dokument

Diese Einführung erklärt wesentliche Konzepte und Terminologien der File and Directory Entries API. Sie gibt Ihnen einen Überblick und orientiert Sie an [Schlüsselkriterien](#schlüsselkriterien). Außerdem beschreibt sie [Einschränkungen](#einschränkungen), die Sicherheitsfehler hervorrufen, wenn Sie sie ignorieren. Um mehr über die in dieser API verwendete Terminologie zu erfahren, lesen Sie den Abschnitt [Definitionen](#definitionen).

Für die Referenzdokumentation zur File and Directory Entries API sehen Sie sich die [Referenz](/de/docs/Web/API/FileSystem) Startseite und deren Unterseiten an.

Die Spezifikation wird noch definiert und kann sich ändern.

## Überblick

Die File and Directory Entries API umfasst sowohl [asynchrone als auch synchrone Versionen](#asynchrone_und_synchrone_versionen) der Schnittstellen. Die asynchrone API kann in Fällen eingesetzt werden, in denen eine ausstehende Operation die Benutzeroberfläche nicht blockieren soll. Die synchrone API hingegen ermöglicht ein einfacheres Programmiermodell, muss jedoch mit [WebWorkers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) verwendet werden.

### Nützlichkeit der API

Die File and Directory Entries API ist aus folgenden Gründen eine wichtige API:

- Sie ermöglicht es Anwendungen, Offline- und Speicherfunktionen zu nutzen, die große binäre Blobs betreffen.
- Sie kann die Leistung verbessern, indem eine App im Hintergrund Assets vorab abruft und lokal speichert.
- Sie ermöglicht es den Benutzern Ihrer Webanwendung, eine Binärdatei direkt zu bearbeiten, die sich im lokalen Dateiverzeichnis befindet.
- Sie stellt eine Speicher-API bereit, die Ihren Benutzern bereits vertraut ist, da sie es gewohnt sind, mit Dateisystemen zu arbeiten.

Für Beispiele zu Funktionen, die Sie mit dieser App erstellen können, sehen Sie den Abschnitt [Beispielanwendungen](#beispielanwendungen).

### Die File and Directory Entries API und andere Speicher-APIs

Die File and Directory Entries API ist eine Alternative zu anderen Speicher-APIs wie [IndexedDB](/de/docs/Web/API/IndexedDB_API/Basic_Terminology). Die API ist eine bessere Wahl für Anwendungen, die mit Blobs umgehen, aus folgenden Gründen:

- Die File and Directory Entries API bietet clientseitigen Speicher für Anwendungsfälle, die von Datenbanken nicht abgedeckt werden. Wenn Sie große veränderbare Datenblöcke benötigen, ist die File and Directory Entries API eine wesentlich effizientere Speicherlösung als eine Datenbank.
- Während Firefox Blob-Speicherung für IndexedDB unterstützt, tut Chrome dies derzeit nicht (Chrome implementiert gerade Unterstützung für die Blob-Speicherung in IndexedDB). Wenn Sie Chrome für Ihre App anvisieren und Blobs speichern möchten, sind die File and Directory Entries API und der App-Cache Ihre einzigen Möglichkeiten. Allerdings ist die AppCache-Speicherung lokal nicht veränderbar und erlaubt keine fein- abgestimmte clientseitige Verwaltung.
- In Chrome können Sie die File and Directory Entries API mit der [Quota Management API](https://developer.chrome.com/docs/apps/offline_storage/) verwenden, die es Ihnen ermöglicht, mehr Speicherplatz anzufordern und Ihr Speicherplatz-Kontingent zu verwalten.

### Beispielanwendungen

Dies sind nur einige Beispiele, wie Sie die File and Directory Entries API verwenden können:

- Apps mit persistentem Uploader

  - Wenn eine Datei oder ein Verzeichnis zum Hochladen ausgewählt wird, können Sie die Datei in einen lokalen Sandkasten kopieren und schrittweise hochladen.
  - Die App kann Uploads nach einer Unterbrechung neu starten, z.B. wenn der Browser geschlossen oder abgestürzt ist, die Verbindung unterbrochen wurde oder der Computer heruntergefahren wird.

- Videospiele oder andere Apps mit vielen Medien-Assets

  - Die App lädt ein oder mehrere große Archivsdateien herunter und erweitert sie lokal in ein Verzeichnis.
  - Die App ruft Assets im Hintergrund vorab ab, sodass der Benutzer ohne Warten auf einen Download zur nächsten Aufgabe oder Spielstufe gelangen kann.

- Audio- oder Fotobearbeitung mit Offline-Zugriff oder lokalem Cache (hervorragend für Leistung und Geschwindigkeit)

  - Die App kann Dateien an Ort und Stelle schreiben (z.B. nur die ID3/EXIF-Tags überschreiben, nicht die gesamte Datei).

- Offline-Videoanzeiger

  - Die App kann große Dateien (>1GB) zum späteren Ansehen herunterladen.
  - Die App kann auf teilweise heruntergeladene Dateien zugreifen (sodass Sie das erste Kapitel Ihrer DVD ansehen können, auch wenn die App den Rest des Inhalts noch herunterlädt oder der Download nicht vollständig ist, weil Sie schnell einen Zug erwischen mussten).

- Offline-Webmail-Client

  - Der Client lädt Anhänge herunter und speichert sie lokal.
  - Der Client speichert Anhänge zwischengespeichert für späteren Upload.

## Schlüsselkriterien

Bevor Sie die File and Directory Entries API verwenden, müssen Sie einige Konzepte verstehen.

### Virtualisiertes Dateisystem

Die API gibt Ihnen keinen Zugriff auf das lokale Dateisystem, und der Sandkasten ist auch kein Abschnitt des Dateisystems. Stattdessen handelt es sich um ein virtualisiertes Dateisystem, das für die Webanwendung wie ein vollständiges Dateisystem aussieht. Es hat nicht notwendigerweise eine Beziehung zum lokalen Dateisystem außerhalb des Browsers.

Das bedeutet, dass eine Webanwendung und eine Desktopanwendung nicht gleichzeitig auf dieselbe Datei zugreifen können. Die API erlaubt es Ihrer Webanwendung nicht, außerhalb des Browsers auf Dateien zuzugreifen, die auch Desktopanwendungen verwenden können. Sie können jedoch eine Datei von einer Webanwendung zu einer Desktopanwendung exportieren. Zum Beispiel können Sie die File API verwenden, ein Blob erstellen, ein `<iframe>` auf das Blob umleiten und den Download-Manager aufrufen.

### Verschiedene Speicherarten

Eine Anwendung kann temporären oder dauerhaften Speicher anfordern. Temporärer Speicher ist leicht zu bekommen, weil der Browser ihn Ihnen einfach zuweist, aber er ist begrenzt und kann vom Browser gelöscht werden, wenn der Speicherplatz knapp wird. Der dauerhafte Speicher bietet Ihnen möglicherweise mehr Speicherplatz, der nur vom Benutzer gelöscht werden kann, aber er erfordert, dass der Benutzer Ihnen die Erlaubnis erteilt.

Verwenden Sie temporären Speicher für das Caching und dauerhaften Speicher für Daten, die Ihre App behalten soll – wie z.B. benutzergenerierte oder einzigartige Daten.

### Speicherquoten

Um zu verhindern, dass eine Webanwendung die gesamte Festplatte nutzt, können Browser ein Kontingent für jede Anwendung festlegen und den Speicher unter Webanwendungen aufteilen.

Wie Speicherplatz zugewiesen oder verwaltet wird und wie Sie den Speicher verwalten können, hängt vom jeweiligen Browser ab. Google Chrome erlaubt beispielsweise temporären Speicher über die in den Spezifikationen geforderten 5 MB hinaus und unterstützt die Quota Management API. Um mehr über die spezifische Implementierung in Chrome zu erfahren, siehe [Verwalten von HTML Offline-Speicher](https://developer.chrome.com/docs/apps/offline_storage/).

### Asynchrone und synchrone Versionen

Die File and Directory Entries API bietet asynchrone und synchrone Versionen. Beide Versionen der API bieten die gleichen Fähigkeiten und Funktionen. Tatsächlich sind sie fast identisch, abgesehen von ein paar Unterschieden.

- WebWorkers
  - : Die asynchrone API kann sowohl im Dokument- als auch im [WebWorkers](/de/docs/Web/API/Web_Workers_API/Using_web_workers)-Kontext verwendet werden, während die synchrone API nur für die Verwendung mit WebWorkers vorgesehen ist.
- Rückruffunktionen
  - : Die asynchrone API liefert Ihnen keine Daten durch Rückgabewerte; stattdessen müssen Sie eine Rückruffunktion übergeben. Sie senden Anforderungen auf durchzuführende Operationen und werden durch Rückrufe benachrichtigt. Im Gegensatz dazu verwendet die synchrone API keine Rückrufe, da die API-Methoden Werte zurückgeben.
- Globale Methoden der asynchronen und synchronen APIs
  - : Die asynchrone API hat die folgenden globalen Methoden: `requestFileSystem()` und `resolveLocalFileSystemURL()`. Diese Methoden sind Mitglieder sowohl des window-Objekts als auch des globalen Workers-Scopes. Die synchrone API verwendet dagegen die folgenden Methoden: `requestFileSystemSync()` und `resolveLocalFileSystemSyncURL()`. Diese synchronen Methoden sind nur Mitglieder des globalen Scopes des Workers, nicht des window-Objekts.

Die synchrone API kann für einige Aufgaben einfacher sein. Ihr direktes, geordnetes Programmiermodell kann den Code lesbarer machen. Der Nachteil der synchronen API betrifft ihre Interaktionen mit Web Workers, die einige Einschränkungen haben.

### Verwendung der Fehler-Rückrufe für die asynchrone API

Wenn Sie die asynchrone API verwenden, sollten Sie immer die Fehler-Rückrufe verwenden. Obwohl die Fehler-Rückrufe für die Methoden optionale Parameter sind, sind sie nicht optional für Ihren Seelenfrieden. Sie möchten wissen, warum Ihre Anrufe fehlgeschlagen sind. Umgang mit den Fehlern auf mindestens ein Minimum zu reduzieren, um Fehlermeldungen bereitzustellen, damit Sie eine Vorstellung davon haben, was vor sich geht.

### Interaktion mit anderen APIs

Die File and Directory Entries API ist so konzipiert, dass sie mit anderen APIs und Elementen der Web-Plattform verwendet werden kann. Zum Beispiel werden Sie wahrscheinlich eine der folgenden verwenden:

- [`fetch()`](/de/docs/Web/API/Window/fetch)
- Drag-and-Drop-API
- Web Workers (für die synchrone Version der File and Directory Entries API)
- Das `input`-Element (um programmgesteuert eine Liste von Dateien vom Element zu erhalten)

### Groß-/Kleinschreibung

Die Filesystem-API ist case-sensitive und case-preserving.

## Einschränkungen

Aus Sicherheitsgründen legen Browser Einschränkungen beim Dateizugriff fest. Wenn Sie diese ignorieren, erhalten Sie Sicherheitsfehler.

### Einhalten der Same-Origin-Policy

Ein Ursprung ist die Domain, das Anwendungsprotokoll und der Port einer URL des Dokuments, in dem das Skript ausgeführt wird. Jeder Ursprung hat sein eigenes zugehöriges Set von Dateisystemen.

Die auf dem Dateisystem auferlegte Sicherheitsgrenze verhindert, dass Anwendungen auf Daten mit einem anderen Ursprung zugreifen können. Dadurch wird verhindert, dass private Daten zugänglich sind und gelöscht werden können. Ein Beispiel: Eine App oder eine Seite auf `http://www.example.com/app/` kann auf Dateien von `http://www.example.com/dir/` zugreifen, da sie denselben Ursprung haben, aber sie kann keine Dateien von `http://www.example.com:8080/dir/` (anderer Port) oder `https://www.example.com/dir/` (anderes Protokoll) abrufen.

### Unfähig, ausführbare Dateien zu erstellen und umzubenennen

Um zu verhindern, dass bösartige Apps feindliche ausführbare Dateien ausführen, können Sie innerhalb des Sandkastens der File and Directory Entries API keine ausführbaren Dateien erstellen.

### Sandboxed Dateisystem

Weil das Dateisystem isoliert ist, kann eine Webanwendung nicht auf Dateien einer anderen Anwendung zugreifen. Sie können auch keine Dateien in einen beliebigen Ordner (zum Beispiel Meine Bilder oder Meine Dokumente) auf der Festplatte des Benutzers lesen oder schreiben.

### Sie können Ihre App nicht von file:// ausführen

Sie können Ihre App nicht lokal von `file://` ausführen. Wenn Sie dies tun, wirft der Browser Fehler oder Ihre App funktioniert stillschweigend nicht. Diese Einschränkung gilt auch für viele der Dateischnittstellen einschließlich Blob und FileReader.

Zu Testzwecken können Sie die Einschränkung in Chrome umgehen, indem Sie den Browser mit dem Flag `--allow-file-access-from-files` starten. Verwenden Sie dieses Flag nur zu diesem Zweck.

## Definitionen

Dieser Abschnitt definiert und erklärt Begriffe, die in der File and Directory Entries API verwendet werden.

- blob
  - : Steht für binäres großes Objekt. Ein Blob ist ein Satz binärer Daten, die als ein einziges Objekt gespeichert sind. Es ist eine allgemeine Methode, um binäre Daten in Webanwendungen zu referenzieren. Ein Blob kann ein Bild oder eine Audiodatei sein.
- Blob
  - : Blob—mit einem großen B—is eine Datenstruktur, die unveränderlich ist, was bedeutet, dass binäre Daten, die von einem Blob referenziert werden, nicht direkt geändert werden können. Dies macht Blobs, wenn sie an asynchrone APIs übergeben werden, vorhersehbar.
- persistent storage
  - : Persistent storage ist Speicher, der im Browser bleibt, es sei denn, der Benutzer löscht ihn oder die App entfernt ihn.
- temporary storage
  - : Temporärer Speicher ist für jede Webanwendung verfügbar. Er ist automatisch und muss nicht angefordert werden, aber der Browser kann den Speicher ohne Vorwarnung löschen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Dateien in JavaScript lesen](https://web.dev/articles/read-files) (web.dev)
