---
title: Einführung in die Datei- und Verzeichniseinträge-API
slug: Web/API/File_and_Directory_Entries_API/Introduction
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{DefaultAPISidebar("File and Directory Entries API")}}

Die [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) simuliert ein lokales Dateisystem, durch das Web-Apps navigieren können. Sie können Anwendungen entwickeln, die Dateien und Verzeichnisse in einem sandboxed, virtuellen Dateisystem lesen, schreiben und erstellen können.

Die File and Directory Entries API interagiert mit anderen verwandten APIs. Sie wurde auf der File Writer API aufgebaut, die wiederum auf der File API basiert. Jede dieser APIs fügt unterschiedliche Funktionalitäten hinzu. Diese APIs sind ein großer evolutionärer Sprung für Web-Apps, die nun große Mengen an Daten zwischenspeichern und verarbeiten können.

## Über dieses Dokument

Diese Einführung behandelt wesentliche Konzepte und Terminologie der File and Directory Entries API. Sie gibt Ihnen einen Überblick und orientiert Sie an den [Schlüsselkriterien](#wichtige_konzepte). Zudem werden [Einschränkungen](#einschränkungen) beschrieben, die Sicherheitsfehler auslösen, wenn Sie sie ignorieren. Um mehr über die in dieser API verwendete Terminologie zu erfahren, siehe den Abschnitt [Definitionen](#definitionen).

Für die Referenzdokumentation zur File and Directory Entries API, siehe die [Referenzseite](/de/docs/Web/API/FileSystem) und deren Unterseiten.

Die Spezifikation befindet sich noch in der Definition und kann sich ändern.

## Überblick

Die File and Directory Entries API umfasst sowohl [asynchrone als auch synchrone Versionen](#asynchrone_und_synchrone_versionen) der Schnittstellen. Die asynchrone API kann in Fällen verwendet werden, in denen Sie möchten, dass eine ausstehende Operation die Benutzeroberfläche nicht blockiert. Die synchrone API hingegen ermöglicht ein einfacheres Programmiermodell, muss jedoch mit [WebWorkers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) verwendet werden.

### Nützlichkeit der API

Die File and Directory Entries API ist aus den folgenden Gründen eine wichtige API:

- Sie ermöglicht Apps Offline- und Speicherfunktionen, die große Binärblobs umfassen.
- Sie kann die Leistung verbessern, indem eine App ermöglicht wird, Assets im Hintergrund vorab abzurufen und lokal zu cachen.
- Sie lässt Nutzer Ihrer Web-App eine Binärdatei direkt bearbeiten, die sich im lokalen Dateiordner befindet.
- Sie bietet eine Speicher-API, die Ihren Nutzern bereits vertraut ist, da sie gewohnt sind, mit Dateisystemen zu arbeiten.

Beispiele für Features, die Sie mit dieser App erstellen können, finden Sie im Abschnitt [Beispielanwendungen](#beispielanwendungen).

### Die File and Directory Entries API und andere Speicher-APIs

Die File and Directory Entries API ist eine alternative Lösung zu anderen Speicher-APIs wie beispielsweise [IndexedDB](/de/docs/Web/API/IndexedDB_API/Basic_Terminology). Die API ist die bessere Wahl für Apps, die mit Blobs arbeiten, aus den folgenden Gründen:

- Die File and Directory Entries API bietet clientseitigen Speicher für Anwendungsfälle, die nicht von Datenbanken abgedeckt werden. Wenn Sie große veränderbare Datenmengen haben möchten, ist die File and Directory Entries API eine wesentlich effizientere Speicherlösung als eine Datenbank.
- Während Firefox Blob-Speicherung für IndexedDB unterstützt, tut dies Chrome derzeit nicht (Chrome implementiert derzeit die Unterstützung für Blob-Speicherung in IndexedDB). Wenn Sie Chrome für Ihre App anvisieren und Blobs speichern möchten, sind die File and Directory Entries API und App Cache Ihre einzigen Optionen. Allerdings ist AppCache-Speicherung nicht lokal veränderbar und erlaubt keine feinkörnige clientseitige Verwaltung.
- In Chrome können Sie die File and Directory Entries API mit der [Quota Management API](https://developer.chrome.com/docs/apps/offline_storage/) verwenden, die es Ihnen ermöglicht, mehr Speicher anzufordern und Ihr Speicherquota zu verwalten.

### Beispielanwendungen

Hier sind nur einige Beispiele, wie Sie die File and Directory Entries API verwenden können:

- Apps mit persistierendem Uploader

  - Wenn eine Datei oder ein Verzeichnis für den Upload ausgewählt wird, können Sie die Datei in einen lokalen Sandbox kopieren und stückweise hochladen.
  - Die App kann Uploads nach einer Unterbrechung fortsetzen, z. B. wenn der Browser geschlossen oder abgestürzt ist, die Verbindung unterbrochen wurde oder der Computer heruntergefahren wurde.

- Videospiele oder andere Apps mit vielen Medienassets

  - Die App lädt ein oder mehrere große Tarballs herunter und entpackt sie lokal in eine Verzeichnisstruktur.
  - Die App ruft im Hintergrund Assets vorab ab, sodass der Nutzer zur nächsten Aufgabe oder Spielebene gehen kann, ohne auf einen Download zu warten.

- Audio- oder Fotobearbeiter mit Offline-Zugriff oder lokalem Cache (ideal für Leistung und Geschwindigkeit)

  - Die App kann in Dateien direkt schreiben (z. B. nur die ID3/EXIF-Tags überschreiben und nicht die gesamte Datei).

- Offline-Video-Viewer

  - Die App kann große Dateien (>1GB) für die spätere Ansicht herunterladen.
  - Die App kann auf teilweise heruntergeladene Dateien zugreifen (sodass Sie das erste Kapitel Ihrer DVD ansehen können, auch wenn die App den Rest des Inhalts noch herunterlädt oder den Download nicht abgeschlossen hat, weil Sie einen Zug erwischen mussten).

- Offline-Webmail-Client

  - Der Client lädt Anhänge herunter und speichert sie lokal.
  - Der Client cached Anhänge für späteren Upload.

## Wichtige Konzepte

Bevor Sie die File and Directory Entries API verwenden, müssen Sie einige Konzepte verstehen.

### Virtualisiertes Dateisystem

Die API gibt Ihnen keinen Zugriff auf das lokale Dateisystem, und der Sandbox ist wirklich kein Abschnitt des Dateisystems. Stattdessen handelt es sich um ein virtualisiertes Dateisystem, das für die Web-App wie ein vollwertiges Dateisystem aussieht. Es hat nicht unbedingt eine Beziehung zum lokalen Dateisystem außerhalb des Browsers.

Das bedeutet, dass eine Web-App und eine Desktop-App denselben Datei nicht gleichzeitig teilen können. Die API erlaubt es Ihrer Web-App nicht, außerhalb des Browsers auf Dateien zuzugreifen, mit denen Desktop-Apps ebenfalls arbeiten können. Sie können jedoch eine Datei von einer Web-App zu einer Desktop-App exportieren. Beispielsweise können Sie die File API verwenden, ein Blob erstellen, ein iframe auf das Blob umleiten und den Download-Manager aufrufen.

### Unterschiedliche Speicherarten

Eine Anwendung kann temporären oder persistenten Speicher anfordern. Temporärer Speicher ist leichter zu erhalten, da der Browser ihn Ihnen einfach gibt, aber er ist begrenzt und kann vom Browser gelöscht werden, wenn der Speicherplatz knapp wird. Persistenter Speicher hingegen bietet möglicherweise größeren Platz, der nur vom Nutzer gelöscht werden kann, erfordert jedoch die Erlaubnis des Nutzers.

Verwenden Sie temporären Speicher für das Caching und persistenten Speicher für Daten, die Sie mit Ihrer App behalten möchten - wie benutzergenerierte oder einzigartige Daten.

### Speicherquoten

Um zu verhindern, dass eine Web-App die gesamte Festplatte nutzt, können Browser ein Kontingent für jede App festlegen und den Speicher unter Web-Apps verteilen.

Wie Speicherplatz gewährt oder zugeteilt wird und wie Sie den Speicher verwalten können, ist eigenständig für den Browser, sodass Sie die jeweilige Dokumentation des Browsers überprüfen müssen. Google Chrome erlaubt beispielsweise temporären Speicher jenseits der 5 MB, die in den Spezifikationen gefordert werden, und unterstützt die Quota Management API. Um mehr über die Chrome-spezifische Implementierung zu erfahren, siehe [Managing HTML Offline Storage](https://developer.chrome.com/docs/apps/offline_storage/).

### Asynchrone und synchrone Versionen

Die File and Directory Entries API bietet asynchrone und synchrone Versionen. Beide Versionen der API bieten dieselben Fähigkeiten und Funktionen. Tatsächlich sind sie fast gleich, abgesehen von ein paar Unterschieden.

- WebWorkers
  - : Die asynchrone API kann in dem Dokument oder [WebWorkers](/de/docs/Web/API/Web_Workers_API/Using_web_workers)-Kontext verwendet werden, während die synchrone API nur mit WebWorkers verwendet werden darf.
- Callbacks
  - : Die asynchrone API gibt Ihnen Daten nicht durch Rückgabewerte; stattdessen müssen Sie eine Callback-Funktion übergeben. Sie senden Anfragen für Operationen, und werden durch Callbacks benachrichtigt. Im Gegensatz dazu verwendet die synchrone API keine Callbacks, da die API-Methoden Werte zurückgeben.
- Globale Methoden der asynchronen und synchronen APIs
  - : Die asynchrone API hat die folgenden globalen Methoden: `requestFileSystem()` und `resolveLocalFileSystemURL()`. Diese Methoden sind Mitglieder sowohl des window-Objekts als auch des globalen Scopes des Werkers. Die synchrone API verwendet hingegen die folgenden Methoden: `requestFileSystemSync()` und `resolveLocalFileSystemSyncURL()`. Diese synchronen Methoden sind nur Mitglieder des globalen Scopes des Werkers und nicht des window-Objekts.

Die synchrone API kann für einige Aufgaben einfacher sein. Ihr direktes, geordnetes Programmiermodell kann den Code lesbarer machen. Der Nachteil der synchronen API liegt in ihren Interaktionen mit Web Workers, die einige Einschränkungen aufweisen.

### Verwenden der Fehler-Callbacks für asynchrone API

Wenn Sie die asynchrone API verwenden, sollten Sie immer die Fehler-Callbacks verwenden. Obwohl die Fehler-Callbacks für die Methoden optionale Parameter sind, sind sie nicht optional für Ihre Nerven. Sie wollen wissen, warum Ihre Aufrufe fehlgeschlagen sind. Mindestens sollten Sie Fehler behandeln, um Fehlermeldungen bereitzustellen, damit Sie eine Vorstellung davon haben, was vor sich geht.

### Interaktion mit anderen APIs

Die File and Directory Entries API ist so konzipiert, dass sie mit anderen APIs und Elementen auf der Web-Plattform verwendet wird. Beispielsweise werden Sie wahrscheinlich eine der folgenden verwenden:

- {{domxref("Window/fetch", "fetch()")}}
- Drag and Drop API
- Web Workers (für die synchrone Version der File and Directory Entries API)
- Das `input`-Element (um programmatisch eine Liste von Dateien aus dem Element zu erhalten)

### Groß-/Kleinschreibung beachten

Die Filesystem API ist groß-/kleinschreibungssensitiv und bewahrt die Groß-/Kleinschreibung.

## Einschränkungen

Aus Sicherheitsgründen legen Browser Einschränkungen für den Dateizugriff fest. Wenn Sie diese ignorieren, werden Sicherheitsfehler auftreten.

### Einhaltung der Same-Origin-Policy

Ein Origin ist die Domain, das Protokoll der Anwendungsebene und der Port einer URL des Dokuments, in dem das Skript ausgeführt wird. Jede Herkunft hat ihr eigenes zugeordnetes Dateisystem.

Die Sicherheitsgrenze, die auf das Dateisystem angewandt wird, verhindert, dass Anwendungen auf Daten mit einer anderen Herkunft zugreifen können. Dies schützt private Daten, indem der Zugriff und das Löschen verhindert werden. Beispielsweise kann eine App oder eine Seite unter `http://www.example.com/app/` Dateien von `http://www.example.com/dir/` zugreifen, da sie die gleiche Herkunft haben, aber nicht von `http://www.example.com:8080/dir/` (anderer Port) oder `https://www.example.com/dir/` (anderes Protokoll) abrufen.

### Erstellung und Umbenennung von ausführbaren Dateien nicht möglich

Um bösartige Apps daran zu hindern, schädliche ausführbare Dateien auszuführen, können Sie innerhalb der Sandbox der File and Directory Entries API keine ausführbaren Dateien erstellen.

### Sandbox-Dateisystem

Da das Dateisystem sandboxed ist, kann eine Web-App nicht auf die Dateien einer anderen App zugreifen. Sie können auch keine Dateien in einem beliebigen Ordner lesen oder schreiben (z. B. Eigene Bilder und Eigene Dokumente) auf der Festplatte des Benutzers.

### Sie können Ihre App nicht von file:// ausführen

Sie können Ihre App nicht lokal von `file://` ausführen. Wenn Sie dies tun, wirft der Browser Fehler oder Ihre App schlägt stillschweigend fehl. Diese Einschränkung gilt auch für viele der DateiapIs, einschließlich Blob und FileReader.

Zum Testen können Sie das Limit in Chrome umgehen, indem Sie den Browser mit dem Flag `--allow-file-access-from-files` starten. Verwenden Sie dieses Flag nur für diesen Zweck.

## Definitionen

Dieser Abschnitt definiert und erläutert Begriffe, die in der File and Directory Entries API verwendet werden.

- blob
  - : Steht für Binary Large Object. Ein Blob ist ein Satz von Binärdaten, der als einzelnes Objekt gespeichert wird. Es ist eine allgemeine Methode, um in Webanwendungen auf Binärdaten zu verweisen. Ein Blob kann ein Bild oder eine Audiodatei sein.
- Blob
  - : Blob—mit einem großen B—is eine Datenstruktur, die unveränderlich ist, was bedeutet, dass die von einem Blob referenzierten Binärdaten nicht direkt verändert werden können. Dies macht Blobs berechenbar, wenn sie an asynchrone APIs übergeben werden.
- persistenter Speicher
  - : Persistenter Speicher ist Speicher, der im Browser bleibt, es sei denn, der Nutzer löscht ihn oder die App löscht ihn.
- temporärer Speicher
  - : Flüchtiger Speicher steht jeder Web-App zur Verfügung. Er ist automatisch und muss nicht angefordert werden, aber der Browser kann den Speicher ohne Vorwarnung löschen.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Read files in JavaScript](https://web.dev/articles/read-files) (web.dev)
