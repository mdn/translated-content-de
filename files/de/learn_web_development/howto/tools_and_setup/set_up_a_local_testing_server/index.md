---
title: Wie richten Sie einen lokalen Testserver ein?
slug: Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server
l10n:
  sourceCommit: d50a52075711e21da27bce5ee24f6334b56cf0f3
---

Dieser Artikel erklärt, wie Sie auf Ihrem Rechner einen einfachen lokalen Testserver einrichten und verwenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten zunächst wissen,
        <a href="/de/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work"
          >wie das Internet funktioniert</a
        > und
        <a href="/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server"
          >was ein Webserver ist</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Sie lernen, wie Sie einen lokalen Testserver einrichten.</td>
    </tr>
  </tbody>
</table>

## Lokale Dateien und Dateien auf entfernten Servern

In vielen Artikeln von MDN _Learn_ empfehlen wir, Beispiele direkt im Browser zu öffnen. Dafür gibt es mehrere Möglichkeiten: Sie können auf die HTML-Datei doppelklicken, sie in das Browserfenster ziehen oder über _Datei_ > _Öffnen…_ zur HTML-Datei navigieren.

Wenn die Webadresse mit `file://` beginnt und darauf der Pfad zur Datei auf Ihrer lokalen Festplatte folgt (oder wenn sie mit `localhost:` oder `http://127.0.0.1` beginnt; siehe [Einen lokalen HTTP-Server starten](#einen_lokalen_http-server_starten)), befindet sich die geladene Datei auf Ihrer lokalen Festplatte. Wenn Sie dagegen eines unserer auf GitHub (oder einem anderen entfernten Server) gehosteten Beispiele ansehen, beginnt die Webadresse mit `https://`. Das zeigt an, dass die Datei von einem entfernten Server über HTTPS übertragen wurde.

## Das Problem mit Datei-URLs

Manche Beispiele funktionieren nicht, wenn Sie sie über eine `file://`-URL direkt im Browser öffnen. Dafür kann es verschiedene Gründe geben. Die wahrscheinlichsten sind:

- **Sie verwenden asynchrone Anfragen.** Manche Browser (darunter Chrome) führen keine asynchronen Anfragen aus (siehe [Netzwerkanfragen mit JavaScript durchführen](/de/docs/Learn_web_development/Core/Scripting/Network_requests)), wenn Sie ein Beispiel aus einer lokalen Datei starten. Der Grund sind Sicherheitsbeschränkungen (mehr über Websicherheit erfahren Sie unter [Sicherheit von Websites](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)).
- **Sie verwenden eine serverseitige Sprache.** Serverseitige Sprachen (wie PHP oder Python) benötigen einen entsprechenden Server, der den Code interpretiert und die Ergebnisse bereitstellt.
- **Sie binden weitere Dateien ein.** Browser behandeln Anfragen zum Laden von Ressourcen über das `file://`-Schema häufig als Cross-Origin-Anfragen. Wenn Sie eine lokale Datei laden, die weitere lokale Dateien einbindet, kann dadurch ein {{Glossary("CORS", "CORS")}}-Fehler auftreten.

## Einen lokalen HTTP-Server starten

Um Probleme beim Ausführen lokaler Dateien zu vermeiden, müssen wir solche Beispiele über einen lokalen Webserver testen. In diesem Abschnitt werden mehrere Möglichkeiten dafür beschrieben.

### Eine Erweiterung für Ihren Code-Editor verwenden

Wenn Sie nur HTML, CSS und JavaScript und keine serverseitige Sprache benötigen, können Sie lokale Beispiele einfach mithilfe einer Code-Editor-Erweiterung ausführen. Solche Erweiterungen automatisieren die Installation und Einrichtung des Servers und lassen sich gut in Ihren Code-Editor integrieren.

Suchen Sie beispielsweise in VS Code im Erweiterungsbereich nach der Erweiterung [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server). Wenn Sie eine HTML-Datei anzeigen, fügt sie oben rechts in der Benutzeroberfläche die Schaltfläche „Show Preview“ hinzu. Ein Klick darauf zeigt die gerenderte HTML-Datei und die zugehörigen Dateien in einem separaten Seitenbereich an.

Live Preview stellt die Dateien über einen lokalen Server unter `http://127.0.0.1:3000` bereit.

### Node.js verwenden

Mit dem Node.js-Modul [`http-server`](https://www.npmjs.com/package/http-server) können Sie HTML-Dateien aus einem beliebigen Verzeichnis bereitstellen.

So verwenden Sie das Modul:

1. Führen Sie die folgenden Befehle auf Ihrer [Kommandozeile](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) aus, um zu prüfen, ob Node.js (und npm, der häufig mitgelieferte Paketmanager) bereits installiert sind:

   ```bash
   node -v
   npm -v
   ```

2. Falls Node.js nicht installiert ist, müssen Sie es installieren. Folgen Sie der [Download-Anleitung](https://nodejs.org/en/download) in der Node.js-Dokumentation und führen Sie anschließend die obigen Befehle erneut aus, um die Installation zu überprüfen.

3. Navigieren Sie in Ihrer Eingabeaufforderung mit dem Befehl `cd` zu dem Ordner, in dem sich Ihr Beispiel befindet.

4. Führen Sie den folgenden Befehl aus, um den Server zu starten:

   ```bash
   npx http-server -o -p 9999 -c-1
   ```

   Dadurch werden alle Dateien im aktuellen Verzeichnis unter `localhost:9999` bereitgestellt und `index.html` wird automatisch geladen. Die Option `-o` sorgt dafür, dass die Seite sofort in einem Webbrowser geöffnet wird. Wenn `index.html` nicht vorhanden ist, wird stattdessen der Verzeichnisinhalt angezeigt, sodass Sie eine Datei zum Laden auswählen können. Die Option `-c-1` weist den Server an, keine Dateien zwischenzuspeichern. So wird bei jedem Aufruf die aktuelle Version geladen.

### Python verwenden

Eine weitere Möglichkeit, lokale Beispiele über einen HTTP-Server auszuführen, ist das Python-Modul `http.server`.

> [!NOTE]
> Ältere Python-Versionen (bis einschließlich Version 2.7) boten ein ähnliches Modul namens `SimpleHTTPServer`. Python 2 ist veraltet. Wir empfehlen daher, Python 3 zu verwenden.

Gehen Sie wie folgt vor:

1. Führen Sie einen Befehl auf Ihrer [Kommandozeile](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) aus, um zu prüfen, ob Python bereits installiert ist:

   ```bash
   # On macOS or Linux, run
   python -V
   # If the above fails, try
   python3 -V

   # On Windows, run
   py -3 -V
   ```

2. Falls Python nicht installiert ist, müssen Sie es installieren. Folgen Sie der [Download-Anleitung](https://www.python.org/downloads/) in der Python-Dokumentation (ausführlichere Erläuterungen finden Sie auch in unserem [Django-Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#installing_python_3)). Führen Sie anschließend den Befehl erneut aus, um die Installation zu überprüfen.

3. Wenn Python eingerichtet ist, navigieren Sie mit dem Befehl `cd` zu dem Verzeichnis mit dem Website-Code, den Sie testen möchten.

4. Geben Sie den folgenden Befehl ein, um den Server in diesem Verzeichnis zu starten:

   ```bash
   # On macOS and Linux, run
   python3 -m http.server

   # On Windows, run
   py -3 -m http.server
   ```

   Standardmäßig werden dadurch alle Dateien im aktuellen Verzeichnis unter `localhost:8000` bereitgestellt und `index.html` wird automatisch geladen. Wenn `index.html` nicht vorhanden ist, wird stattdessen der Verzeichnisinhalt angezeigt, sodass Sie eine Datei zum Laden auswählen können.

   > [!NOTE]
   > Wenn auf Port 8000 bereits ein Server läuft, können Sie einen anderen Port wählen, indem Sie hinter dem Serverbefehl eine andere Portnummer angeben, zum Beispiel `python3 -m http.server 7800`. Ihre Inhalte sind dann unter `localhost:7800` erreichbar.

## Serverseitige Sprachen lokal ausführen

Wie Sie am besten mit serverseitigen Sprachen wie Python, PHP oder JavaScript arbeiten, hängt von der verwendeten Sprache und davon ab, ob Sie ein Web-Framework oder eigenständigen Code verwenden.

Wenn Sie mit einem Web-Framework arbeiten, stellt dieses in der Regel einen eigenen Entwicklungsserver bereit. Die folgenden Sprachen beziehungsweise Frameworks bringen beispielsweise einen Entwicklungsserver mit:

- Python-Web-Frameworks wie [Django](/de/docs/Learn_web_development/Extensions/Server-side/Django) und [Flask](https://flask.palletsprojects.com/).
- Node-/JavaScript-Frameworks wie [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs).
- PHP verfügt über einen eigenen [integrierten Entwicklungsserver](https://www.php.net/manual/en/features.commandline.webserver.php). Alternativ können Sie einen Entwicklungsserver für PHP und Datenbanken wie [MAMP](https://www.mamp.info/en/downloads/) (macOS) oder [XAMPP](https://www.apachefriends.org/download.html) (Linux/Windows/macOS) installieren.
