---
title: Einführung in die File and Directory Entries API
slug: Web/API/File_and_Directory_Entries_API/Introduction
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{DefaultAPISidebar("File and Directory Entries API")}}

Die [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) simuliert ein lokales Dateisystem, in dem Web-Apps navigieren können. Sie können Apps entwickeln, die Dateien und Verzeichnisse in einem sandboxed, virtuellen Dateisystem lesen, schreiben und erstellen können.

Die File and Directory Entries API arbeitet mit anderen verwandten APIs zusammen. Sie wurde auf der File Writer API aufgebaut, die wiederum auf der File API aufgebaut wurde. Jede dieser APIs fügt unterschiedliche Funktionalitäten hinzu. Diese APIs sind ein großer evolutionärer Schritt für Web-Apps, die nun große Datenmengen zwischenspeichern und verarbeiten können.

## Über dieses Dokument

Diese Einführung behandelt grundlegende Konzepte und Terminologie in der File and Directory Entries API. Sie gibt Ihnen einen Gesamtüberblick und orientiert Sie an [Kernkonzepten](#kernkonzepte). Außerdem werden [Einschränkungen](#einschränkungen) beschrieben, die Sicherheitsfehler hervorrufen, wenn Sie sie ignorieren. Um mehr über die in dieser API verwendeten Begriffe zu erfahren, siehe den Abschnitt [Definitionen](#definitionen).

Die Referenzdokumentation zur File and Directory Entries API finden Sie auf der [Referenz](/de/docs/Web/API/FileSystem) Startseite und deren Unterseiten.

Die Spezifikation wird noch definiert und kann sich ändern.

## Überblick

Die File and Directory Entries API enthält sowohl [asynchrone als auch synchrone Versionen](#asynchrone_und_synchrone_versionen) der Schnittstellen. Die asynchrone API kann in Fällen verwendet werden, in denen eine ausstehende Operation die Benutzeroberfläche nicht blockieren soll. Die synchrone API hingegen ermöglicht ein einfacheres Programmiermodell, muss aber mit [WebWorkers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) verwendet werden.

### Nützlichkeit der API

Die File and Directory Entries API ist aus folgenden Gründen eine wichtige API:

- Sie ermöglicht Apps, Offline- und Speicher-Funktionen zu haben, die große binäre Blobs umfassen.
- Sie kann die Leistung verbessern, indem es einer App ermöglicht wird, im Hintergrund Ressourcen vorab abzurufen und lokal zu zwischenspeichern.
- Sie ermöglicht es Nutzern Ihrer Web-App, eine Binärdatei, die sich in ihrem lokalen Dateiverzeichnis befindet, direkt zu bearbeiten.
- Sie bietet eine Speicher-API, die Ihren Nutzern bereits vertraut ist, da sie es gewöhnt sind, mit Dateisystemen zu arbeiten.

Beispiele für Funktionen, die Sie mit dieser App erstellen können, finden Sie im Abschnitt [Beispielanwendungen](#beispielanwendungen).

### Die File and Directory Entries API und andere Speicher-APIs

Die File and Directory Entries API ist eine Alternative zu anderen Speicher-APIs wie [IndexedDB](/de/docs/Web/API/IndexedDB_API/Basic_Terminology). Die API ist eine bessere Wahl für Apps, die mit Blobs arbeiten, aus folgenden Gründen:

- Die File and Directory Entries API bietet clientseitigen Speicher für Anwendungsfälle, die von Datenbanken nicht abgedeckt werden. Wenn Sie große veränderbare Datenmengen benötigen, ist die File and Directory Entries API eine wesentlich effizientere Speicherlösung als eine Datenbank.
- Während Firefox die Blob-Speicherung für IndexedDB unterstützt, tut dies Chrome derzeit nicht (Chrome implementiert aktuell die Unterstützung für die Blob-Speicherung in IndexedDB). Wenn Sie Ihre App für Chrome ausrichten und Blobs speichern möchten, sind die File and Directory Entries API und der App Cache Ihre einzigen Optionen. Allerdings ist der AppCache-Speicher lokal nicht veränderbar und erlaubt keine feinkörnige clientseitige Verwaltung.
- In Chrome können Sie die File and Directory Entries API mit der [Quota Management API](https://developer.chrome.com/docs/apps/offline_storage/) verwenden, mit der Sie mehr Speicher anfordern und Ihr Speicherkontingent verwalten können.

### Beispielanwendungen

Die folgenden sind nur einige Beispiele dafür, wie Sie die File and Directory Entries API verwenden können:

- Apps mit persistentem Uploader

  - Wenn eine Datei oder ein Verzeichnis zum Hochladen ausgewählt wird, können Sie die Datei in einen lokalen Sandbox kopieren und stückweise hochladen.
  - Die App kann Uploads nach einer Unterbrechung neu starten, z.B. wenn der Browser geschlossen oder abgestürzt ist, die Verbindung unterbrochen wurde oder der Computer heruntergefahren wurde.

- Videospiel oder andere Apps mit vielen Medieninhalten

  - Der App lädt ein oder mehrere große Tarballs herunter und expandiert sie lokal in eine Verzeichnisstruktur.
  - Der App ruft im Hintergrund Ressourcen vorab ab, sodass der Nutzer ohne Wartezeit auf den nächsten Task oder Spiellevel zugreifen kann.

- Audio- oder Fotobearbeitung mit Offline-Zugriff oder lokalem Cache (ideal für Leistung und Geschwindigkeit)

  - Die App kann in Dateien an Ort und Stelle schreiben (zum Beispiel nur die ID3/EXIF-Tags überschreiben und nicht die gesamte Datei).

- Offline-Video-Viewer

  - Die App kann große Dateien (>1GB) für spätere Betrachtung herunterladen.
  - Die App kann auf teilweise heruntergeladene Dateien zugreifen (sodass Sie das erste Kapitel Ihrer DVD ansehen können, selbst wenn die App den Rest des Inhalts noch herunterlädt oder der Download nicht abgeschlossen wurde, weil Sie dringend einen Zug erreichen mussten).

- Offline-Web-Mail-Client
  - Der Client lädt Anhänge herunter und speichert sie lokal.
  - Der Client cached Anhänge für späteres Hochladen.

## Kernkonzepte

Bevor Sie die File and Directory Entries API verwenden, müssen Sie einige Konzepte verstehen.

### Virtualisiertes Dateisystem

Die API bietet Ihnen keinen Zugriff auf das lokale Dateisystem, und die Sandbox ist auch kein Teil des Dateisystems. Stattdessen ist es ein virtualisiertes Dateisystem, das dem Web-App wie ein vollwertiges Dateisystem erscheint. Es hat nicht zwangsläufig eine Beziehung zum lokalen Dateisystem außerhalb des Browsers.

Das bedeutet, dass eine Web-App und eine Desktop-App nicht gleichzeitig dieselbe Datei teilen können. Die API erlaubt es Ihrer Web-App nicht, außerhalb des Browsers auf Dateien zuzugreifen, an denen auch Desktop-Apps arbeiten können. Sie können jedoch eine Datei aus einer Web-App in eine Desktop-App exportieren. Beispielsweise können Sie die File API verwenden, um ein Blob zu erstellen, ein `iframe` auf das Blob umzuleiten und den Download-Manager aufzurufen.

### Unterschiedliche Speichertypen

Eine Anwendung kann temporären oder persistenten Speicher anfordern. Temporärer Speicher ist leichter zu bekommen, da der Browser ihn Ihnen einfach zuteilt, aber er ist begrenzt und kann vom Browser gelöscht werden, wenn der Speicherplatz knapp wird. Persistenter Speicher kann Ihnen hingegen größeren Raum bieten, der nur vom Nutzer gelöscht werden kann, doch dazu ist die Erlaubnis des Nutzers erforderlich.

Verwenden Sie temporären Speicher für Caching und persistenten Speicher für Daten, die Sie für Ihre App behalten möchten - wie vom Benutzer erstellte oder einzigartige Daten.

### Speicherkontingente

Um zu verhindern, dass eine Web-App den gesamten Speicher verbraucht, können Browser ein Kontingent für jede App festlegen und den Speicher unter Web-Apps aufteilen.

Wie der Speicherplatz zugeteilt wird und wie Sie den Speicher verwalten können, ist von Browser zu Browser unterschiedlich, also müssen Sie die jeweilige Dokumentation des Browsers überprüfen. Google Chrome erlaubt zum Beispiel temporären Speicher über die in den Spezifikationen geforderten 5 MB hinaus und unterstützt die Quota Management API. Um mehr über die Chrome-spezifische Implementierung zu erfahren, siehe [Verwaltung von HTML-Offline-Speicher](https://developer.chrome.com/docs/apps/offline_storage/).

### Asynchrone und synchrone Versionen

Die File and Directory Entries API bietet sowohl asynchrone als auch synchrone Versionen an. Beide Versionen der API bieten dieselben Fähigkeiten und Funktionen. Tatsächlich sind sie fast gleich, abgesehen von wenigen Unterschieden.

- WebWorkers
  - : Die asynchrone API kann sowohl im Dokumentkontext als auch im [WebWorkers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) Kontext verwendet werden, während die synchrone API nur für die Verwendung mit WebWorkers vorgesehen ist.
- Rückruffunktionen
  - : Die asynchrone API liefert keine Daten durch Rückgabewerte; stattdessen müssen Sie eine Rückruffunktion übergeben. Sie senden Anfragen, um Operationen auszuführen, und werden durch Rückrufe benachrichtigt. Im Gegensatz dazu nutzt die synchrone API keine Rückrufe, da die API-Methoden Werte zurückgeben.
- Globale Methoden der asynchronen und synchronen APIs
  - : Die asynchrone API hat die folgenden globalen Methoden: `requestFileSystem()` und `resolveLocalFileSystemURL()`. Diese Methoden sind Mitglied sowohl des `window`-Objekts als auch des globalen Worker-Kontextes. Die synchrone API hingegen verwendet folgende Methoden: `requestFileSystemSync()` und `resolveLocalFileSystemSyncURL()`. Diese synchronen Methoden sind nur Mitglieder des globalen Workers-Kontextes und nicht des `window`-Objekts.

Die synchrone API kann für einige Aufgaben einfacher sein. Ihr direktes, gereihte Programmiermodell kann den Code leichter lesbar machen. Der Nachteil der synchronen API hat mit ihren Interaktionen mit Web Workers zu tun, die einige Einschränkungen haben.

### Verwendung der Fehler-Rückrufe für asynchrone API

Beim Verwenden der asynchronen API sollten Sie immer die Fehler-Rückrufe verwenden. Obwohl die Fehler-Rückrufe für die Methoden optionale Parameter sind, sind sie nicht optional für Ihren Seelenfrieden. Sie möchten wissen, warum Ihre Aufrufe fehlgeschlagen sind. Handhaben Sie die Fehler mindestens, um Fehlermeldungen zu liefern, damit Sie eine Vorstellung davon haben, was vor sich geht.

### Interaktion mit anderen APIs

Die File and Directory Entries API ist so konzipiert, dass sie mit anderen APIs und Elementen auf der Web-Plattform verwendet werden kann. Beispielsweise werden Sie wahrscheinlich eine der folgenden verwenden:

- [`fetch()`](/de/docs/Web/API/Window/fetch)
- Drag and Drop API
- Web Workers (für die synchrone Version der File and Directory Entries API)
- Das `input` Element (um programmgesteuert eine Liste von Dateien vom Element zu erhalten)

### Groß- und Kleinschreibung beachten

Die Dateisystem-API beachtet die Groß- und Kleinschreibung und bewahrt diese.

## Einschränkungen

Aus Sicherheitsgründen verhängen Browser Einschränkungen für den Dateizugriff. Wenn Sie sie ignorieren, erhalten Sie Sicherheitsfehler.

### Einhaltung der Same-Origin-Richtlinie

Ein Origin ist die Domäne, das Anwendungsprotokoll und der Port einer URL des Dokuments, in dem das Skript ausgeführt wird. Jedes Origin hat seine eigene zugehörige Menge von Dateisystemen.

Die von der Dateisystem-API auferlegte Sicherheitsgrenze verhindert, dass Anwendungen auf Daten eines anderen Origin zugreifen. Dies schützt private Daten, indem es den Zugriff und das Löschen verhindert. Zum Beispiel kann eine App oder eine Seite in `http://www.example.com/app/` auf Dateien von `http://www.example.com/dir/` zugreifen, weil sie denselben Origin haben, sie kann jedoch keine Dateien von `http://www.example.com:8080/dir/` (anderer Port) oder `https://www.example.com/dir/` (anderes Protokoll) abrufen.

### Unfähig, ausführbare Dateien zu erstellen und umzubenennen

Um zu verhindern, dass bösartige Apps feindliche ausführbare Dateien ausführen, können Sie innerhalb der Sandbox der File and Directory Entries API keine ausführbaren Dateien erstellen.

### Sandboxed-Dateisystem

Da das Dateisystem sandboxed ist, kann eine Web-App nicht auf die Dateien einer anderen App zugreifen. Sie können auch keine Dateien zu einem beliebigen Ordner lesen oder schreiben (zum Beispiel Eigene Bilder und Eigene Dokumente) auf der Festplatte des Nutzers.

### Sie können Ihre App nicht von file:// ausführen

Sie können Ihre App nicht lokal von `file://` ausführen. Wenn Sie dies tun, wirft der Browser Fehler oder Ihre App schlägt stillschweigend fehl. Diese Einschränkung gilt auch für viele der Dateisystem-APIs, einschließlich Blob und FileReader.

Zu Testzwecken können Sie die Einschränkung auf Chrome umgehen, indem Sie den Browser mit dem Flag `--allow-file-access-from-files` starten. Verwenden Sie dieses Flag nur zu diesem Zweck.

## Definitionen

Dieser Abschnitt definiert und erklärt Begriffe, die in der File and Directory Entries API verwendet werden.

- blob
  - : Steht für "binary large object" (binäres großes Objekt). Ein Blob ist eine Menge binärer Daten, die als einzelne Einheit gespeichert sind. Es ist eine allgemeine Art, in Web-Anwendungen auf binäre Daten zu verweisen. Ein Blob kann ein Bild oder eine Audiodatei sein.
- Blob
  - : Blob, mit einem großen B, ist eine Datenstruktur, die unveränderlich ist, was bedeutet, dass binäre Daten, auf die ein Blob verweist, nicht direkt modifiziert werden können. Dies macht Blobs Vorhersehbar, wenn sie zu asynchronen APIs übergeben werden.
- persistenter Speicher
  - : Persistenter Speicher ist Speicher, der im Browser bleibt, es sei denn, der Nutzer löscht ihn oder die App entfernt ihn.
- temporärer Speicher
  - : Temporärer Speicher ist für jede Web-App verfügbar. Er ist automatisch und muss nicht angefordert werden, aber der Browser kann den Speicher ohne Vorwarnung löschen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Dateien in JavaScript lesen](https://web.dev/articles/read-files) (web.dev)
