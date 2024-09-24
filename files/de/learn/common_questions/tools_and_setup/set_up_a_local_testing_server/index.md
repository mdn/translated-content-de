---
title: Wie richtet man einen lokalen Testserver ein?
slug: Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Dieser Artikel erklärt, wie Sie einen einfachen lokalen Testserver auf Ihrem Rechner einrichten und die Grundlagen, wie man ihn verwendet.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten zuerst wissen,
        <a href="/de/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work"
          >wie das Internet funktioniert</a
        > und
        <a href="/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server"
          >was ein Webserver ist</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Sie lernen, wie man einen lokalen Testserver einrichtet.</td>
    </tr>
  </tbody>
</table>

## Lokale Dateien vs. Remote-Dateien

Im Großteil des Lernbereichs weisen wir Sie an, Ihre Beispiele einfach direkt im Browser zu öffnen — dies kann durch Doppelklicken auf die HTML-Datei, durch Ziehen und Ablegen im Browserfenster oder durch Auswahl von _Datei_ > _Öffnen…_ und Navigation zur HTML-Datei erfolgen. Es gibt viele Möglichkeiten, dies zu erreichen.

Wenn der Webadresse mit `file://` beginnt, gefolgt vom Pfad zur Datei auf Ihrer lokalen Festplatte, wird eine lokale Datei verwendet. Im Gegensatz dazu beginnt die Webadresse bei einem unserer auf GitHub gehosteten Beispiele (oder einem Beispiel auf einem anderen Remote-Server) mit `http://` oder `https://`, um zu zeigen, dass die Datei über HTTP empfangen wurde.

## Das Problem mit dem Testen von lokalen Dateien

Einige Beispiele funktionieren nicht, wenn Sie sie als lokale Dateien öffnen. Dies kann verschiedene Gründe haben, am wahrscheinlichsten sind:

- **Sie enthalten asynchrone Anfragen**. Einige Browser (einschließlich Chrome) führen keine asynchronen Anfragen aus (siehe [Daten vom Server abrufen](/de/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)), wenn Sie das Beispiel einfach von einer lokalen Datei ausführen. Dies liegt an Sicherheitsbeschränkungen (mehr zu Web-Sicherheit finden Sie unter [Website-Sicherheit](/de/docs/Learn/Server-side/First_steps/Website_security)).
- **Sie verwenden eine serverseitige Sprache**. Serverseitige Sprachen (wie PHP oder Python) benötigen einen speziellen Server, um den Code zu interpretieren und die Ergebnisse zu liefern.
- **Sie beinhalten andere Dateien**. Browser behandeln häufig Anfragen zum Laden von Ressourcen mit dem `file://`-Schema als Cross-Origin-Anfragen. Wenn Sie also eine lokale Datei laden, die andere lokale Dateien einbindet, kann dies einen {{Glossary("CORS")}}-Fehler auslösen.

## Einen einfachen lokalen HTTP-Server ausführen

Um das Problem asynchroner Anfragen zu umgehen, müssen wir solche Beispiele testen, indem wir sie über einen lokalen Webserver ausführen.

### Verwendung einer Erweiterung im Code-Editor

Wenn Sie nur HTML, CSS und JavaScript benötigen und keine serverseitige Sprache, ist der einfachste Weg möglicherweise, nach Erweiterungen in Ihrem Code-Editor zu suchen. Neben der Automatisierung der Installation und Einrichtung für Ihren lokalen HTTP-Server, integrieren sie sich auch gut mit Ihren Code-Editoren. Das Testen von lokalen Dateien in einem HTTP-Server kann nur einen Klick entfernt sein.

Für VSCode können Sie die folgende kostenlose Erweiterung ausprobieren:

- `vscode-preview-server`. Sie können es auf seiner [Homepage](https://marketplace.visualstudio.com/items?itemName=yuichinukiyama.vscode-preview-server) überprüfen.

### Verwendung von Node.js

Das Node.js-Modul [`http-server`](https://www.npmjs.com/package/http-server) ist der einfachste Weg, um HTML-Dateien in jedem Verzeichnis bereitzustellen.

Um das Modul zu verwenden:

1. Führen Sie die folgenden Befehle aus, um zu überprüfen, ob Node.js bereits installiert ist:

   ```bash
   node -v
   npm -v
   npx -v
   ```

2. Wenn Node.js nicht installiert ist, müssen Sie es installieren. Folgen Sie den [Download-Anweisungen](https://nodejs.org/en/download/package-manager) in den Node.js-Dokumenten, und führen Sie die obigen Befehle erneut aus, um zu überprüfen, ob die Installation erfolgreich war.

3. Nehmen wir an, das Verzeichnis ist `/path/to/project`. Führen Sie den folgenden Befehl aus, um den Server zu starten:

   ```bash
   npx http-server /path/to/project -o -p 9999
   ```

   Dies hostet alle Dateien im Verzeichnis `/path/to/project` auf `localhost:9999`. Die Option `-o` öffnet die `index.html`-Seite in einem Webbrowser. Wenn `index.html` nicht existiert, wird stattdessen das Verzeichnis angezeigt.

### Verwendung von Python

Eine weitere Möglichkeit ist die Verwendung des Python-Moduls `http.server`.

> [!NOTE]
> Ältere Versionen von Python (bis Version 2.7) stellten ein ähnliches Modul namens `SimpleHTTPServer` bereit. Python 2 ist bereits am Ende seines Lebenszyklus, daher empfehlen wir die Verwendung von Python 3.

Um dies zu tun:

1. Führen Sie den folgenden Befehl aus, um zu überprüfen, ob Python bereits installiert ist:

   ```bash
   python -V
   # Wenn das obige fehlschlägt, versuchen Sie:
   python3 -V
   # Oder, wenn der "py"-Befehl verfügbar ist, versuchen Sie:
   py -3 -V
   ```

2. Wenn Python nicht installiert ist, müssen Sie es installieren. Folgen Sie den [Download-Anweisungen](https://www.python.org/downloads/) in den Python-Dokumenten (wir haben auch detailliertere Erklärungen in unserem [Django-Tutorial](/de/docs/Learn/Server-side/Django/development_environment#installing_python_3)), und führen Sie die obigen Befehle erneut aus, um zu überprüfen, ob die Installation erfolgreich war.

3. Wenn Python eingerichtet ist, navigieren Sie zu dem Verzeichnis, das den Website-Code enthält, den Sie testen möchten, mit dem `cd`-Befehl.

   ```bash
   # Geben Sie den Verzeichnisnamen ein, um es zu betreten, zum Beispiel
   cd Desktop
   # Verwenden Sie zwei Punkte, um ein Verzeichnisebene nach oben zu springen, wenn Sie es benötigen
   cd ..
   ```

4. Geben Sie den Befehl ein, um den Server in diesem Verzeichnis zu starten:

   ```bash
   # Unter Windows versuchen Sie "python -m http.server" oder "py -3 -m http.server"
   python3 -m http.server
   ```

5. Standardmäßig wird der Inhalt des Verzeichnisses auf einem lokalen Webserver auf Port 8000 ausgeführt. Sie können zu diesem Server gehen, indem Sie die URL `localhost:8000` in Ihrem Webbrowser eingeben. Hier sehen Sie den Inhalt des Verzeichnisses aufgelistet — klicken Sie auf die HTML-Datei, die Sie ausführen möchten.

> [!NOTE]
> Wenn bereits etwas auf Port 8000 ausgeführt wird, können Sie einen anderen Port wählen, indem Sie den Serverbefehl gefolgt von einer alternativen Portnummer ausführen, z. B. `python3 -m http.server 7800`. Sie können dann auf Ihre Inhalte unter `localhost:7800` zugreifen.

## Serverseitige Sprachen lokal ausführen

Der beste Ansatz zur Arbeit mit serverseitigen Sprachen wie Python, PHP oder JavaScript hängt von der verwendeten serverseitigen Sprache und davon ab, ob Sie mit einem Web-Framework oder „Standalone“-Code arbeiten.

Wenn Sie mit einem Web-Framework arbeiten, stellt das Framework in der Regel seinen eigenen Entwicklungserver zur Verfügung.
Zum Beispiel bieten folgende Sprachen/Frameworks einen Entwicklungserver:

- Python-Webframeworks wie [Django](/de/docs/Learn/Server-side/Django), [Flask](https://flask.palletsprojects.com/) und [Pyramid](https://trypyramid.com/).
- Node/JavaScript-Frameworks wie [Express Web Framework (Node.js/JavaScript)](/de/docs/Learn/Server-side/Express_Nodejs)
- PHP hat einen eigenen [eingebauten Entwicklungserver](https://www.php.net/manual/en/features.commandline.webserver.php):

  ```bash
  cd path/to/your/php/code
  php -S localhost:8000
  ```

Wenn Sie nicht direkt mit einem serverseitigen Framework oder einer Programmiersprache arbeiten, die einen Entwicklungserver bereitstellt, kann das Python-Modul `http.server` auch verwendet werden, um serverseitigen Code auszuführen, der in Sprachen wie Python, PHP, JavaScript usw. geschrieben ist, indem serverseitige Common Gateway Interface (CGI)-Skripte aufgerufen werden. Beispiele zur Verwendung dieser Funktion finden Sie unter [Execute a Script Remotely Through the Common Gateway Interface (CGI)](https://realpython.com/python-http-server/#execute-a-script-remotely-through-the-common-gateway-interface-cgi) in _How to Launch an HTTP Server in One Line of Python Code_ auf realpython.com.
