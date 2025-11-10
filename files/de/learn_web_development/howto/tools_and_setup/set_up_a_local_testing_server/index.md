---
title: Wie richtet man einen lokalen Testserver ein?
slug: Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server
l10n:
  sourceCommit: b275a4cda2d6583bc065a680599cc6de5dbaa8f4
---

Dieser Artikel erklärt, wie Sie einen einfachen lokalen Testserver auf Ihrem Rechner einrichten und die Grundlagen zu dessen Verwendung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten zuerst wissen
        <a href="/de/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work"
          >wie das Internet funktioniert</a
        >, und
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

## Lokale Dateien vs. entfernte Dateien

In den meisten Teilen des Lernbereichs sagen wir Ihnen, dass Sie Ihre Beispiele einfach direkt in einem Browser öffnen sollen – dies kann durch Doppelklicken auf die HTML-Datei, durch Ziehen und Ablegen in das Browserfenster oder durch Auswählen von _Datei_ > _Öffnen…_ und Navigation zur HTML-Datei geschehen. Es gibt viele Möglichkeiten, dies zu erreichen.

Wenn der Webadresse-Pfad mit `file://` gefolgt vom Pfad zur Datei auf Ihrem lokalen Festplattenlaufwerk beginnt, wird eine lokale Datei verwendet. Im Gegensatz dazu wird, wenn Sie eines unserer Beispiele auf GitHub (oder ein Beispiel auf einem anderen Remote-Server) anzeigen, die Webadresse mit `http://` oder `https://` beginnen, um zu zeigen, dass die Datei über HTTP empfangen wurde.

## Das Problem beim Testen lokaler Dateien

Einige Beispiele funktionieren nicht, wenn Sie sie als lokale Dateien öffnen. Dies kann aus verschiedenen Gründen geschehen, wobei am wahrscheinlichsten ist:

- **Sie enthalten asynchrone Anfragen**. Einige Browser (einschließlich Chrome) führen asynchrone Anfragen nicht aus (siehe [Lernen: Making network requests with JavaScript](/de/docs/Learn_web_development/Core/Scripting/Network_requests)), wenn Sie das Beispiel einfach aus einer lokalen Datei ausführen. Dies liegt an Sicherheitsbeschränkungen (mehr über Web-Sicherheit finden Sie unter [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)).
- **Sie enthalten eine serverseitige Sprache**. Serverseitige Sprachen (wie PHP oder Python) erfordern einen speziellen Server, um den Code zu interpretieren und die Ergebnisse zu liefern.
- **Sie beinhalten andere Dateien**. Browser behandeln Anfragen zum Laden von Ressourcen mit dem `file://` Schema oft als Cross-Origin-Anfragen. Wenn Sie also eine lokale Datei laden, die andere lokale Dateien enthält, kann dies einen {{Glossary("CORS", "CORS")}} Fehler auslösen.

## Einen einfachen lokalen HTTP-Server betreiben

Um das Problem asynchroner Anfragen zu umgehen, müssen wir solche Beispiele testen, indem wir sie über einen lokalen Webserver ausführen.

### Verwendung einer Erweiterung in Ihrem Code-Editor

Wenn Sie nur HTML, CSS und JavaScript benötigen und keine serverseitige Sprache, könnte der einfachste Weg darin bestehen, nach Erweiterungen in Ihrem Code-Editor zu suchen. Diese automatisieren nicht nur die Installation und Einrichtung Ihres lokalen HTTP-Servers, sondern integrieren sich auch gut in Ihre Code-Editoren. Das Testen lokaler Dateien in einem HTTP-Server kann nur einen Klick entfernt sein.

Für VS Code probieren Sie die folgenden kostenlosen Erweiterungen aus:

- [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server)
- [Preview on Web Server](https://marketplace.visualstudio.com/items?itemName=yuichinukiyama.vscode-preview-server)

### Verwendung von Node.js

Das Node.js [`http-server`](https://www.npmjs.com/package/http-server) Modul ist eine einfache Möglichkeit, HTML-Dateien aus jedem Verzeichnis zu hosten.

Um das Modul zu verwenden:

1. Führen Sie die folgenden Befehle aus, um zu überprüfen, ob Node.js bereits installiert ist:

   ```bash
   node -v
   npm -v
   npx -v
   ```

2. Wenn Node.js nicht installiert ist, müssen Sie es installieren. Folgen Sie den [Download-Anweisungen](https://nodejs.org/en/download) in den Node.js-Dokumentationen und führen Sie dann die obigen Befehle erneut aus, um zu überprüfen, ob die Installation erfolgreich war.

3. Angenommen, das Verzeichnis ist `/path/to/project`. Führen Sie den folgenden Befehl aus, um den Server zu starten:

   ```bash
   npx http-server /path/to/project -o -p 9999
   ```

   Dies hostet alle Dateien im `/path/to/project` Verzeichnis auf `localhost:9999`. Die Option `-o` wird die `index.html` Seite in einem Webbrowser öffnen. Wenn `index.html` nicht existiert, wird stattdessen das Verzeichnis angezeigt.

### Verwendung von Python

Eine andere Möglichkeit ist die Verwendung des `http.server` Moduls von Python.

> [!NOTE]
> Ältere Versionen von Python (bis Version 2.7) lieferten ein ähnliches Modul namens `SimpleHTTPServer`. Python 2 ist bereits End-of-Life, daher empfehlen wir die Verwendung von Python 3.

Um dies zu tun:

1. Führen Sie den folgenden Befehl aus, um zu überprüfen, ob Python bereits installiert ist:

   ```bash
   python -V
   # If the above fails, try:
   python3 -V
   # Or, if the "py" command is available, try:
   py -3 -V
   ```

2. Wenn Python nicht installiert ist, müssen Sie es installieren. Folgen Sie den [Download-Anweisungen](https://www.python.org/downloads/) in den Python-Dokumentationen (wir haben auch detailliertere Erklärungen in unserem [Django-Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#installing_python_3)), und führen Sie dann die obigen Befehle erneut aus, um zu überprüfen, ob die Installation erfolgreich war.

3. Wenn Python eingerichtet ist, navigieren Sie zu dem Verzeichnis, das den Website-Code enthält, den Sie testen möchten, mit dem Befehl `cd`.

   ```bash
   # include the directory name to enter it, for example
   cd Desktop
   # use two dots to jump up one directory level if you need to
   cd ..
   ```

4. Geben Sie den Befehl ein, um den Server in diesem Verzeichnis zu starten:

   ```bash
   # On Windows, try "python -m http.server" or "py -3 -m http.server"
   python3 -m http.server
   ```

5. Standardmäßig werden damit die Inhalte des Verzeichnisses auf einem lokalen Webserver auf Port 8000 ausgeführt. Sie können zu diesem Server gehen, indem Sie in Ihrem Webbrowser die URL `localhost:8000` aufrufen. Dort sehen Sie die aufgelisteten Inhalte des Verzeichnisses — klicken Sie auf die HTML-Datei, die Sie ausführen möchten.

> [!NOTE]
> Wenn bereits etwas auf Port 8000 läuft, können Sie einen anderen Port wählen, indem Sie den Serverbefehl gefolgt von einer alternativen Portnummer ausführen, z.B. `python3 -m http.server 7800`. Sie können dann auf Ihre Inhalte unter `localhost:7800` zugreifen.

## Serverseitige Sprachen lokal ausführen

Der beste Ansatz zur Arbeit mit serverseitigen Sprachen, wie Python, PHP oder JavaScript, hängt von der verwendeten serverseitigen Sprache ab und ob Sie mit einem Web-Framework oder "stand-alone" Code arbeiten.

Wenn Sie mit einem Web-Framework arbeiten, wird in der Regel das Framework seinen eigenen Entwicklungsserver bereitstellen.
Zum Beispiel bieten die folgenden Sprachen/Frameworks einen Entwicklungsserver:

- Python-Web-Frameworks wie [Django](/de/docs/Learn_web_development/Extensions/Server-side/Django), [Flask](https://flask.palletsprojects.com/) und [Pyramid](https://trypyramid.com/).
- Node/JavaScript-Frameworks wie [Express Web Framework (Node.js/JavaScript)](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)
- PHP hat seinen eigenen [eingebauten Entwicklungsserver](https://www.php.net/manual/en/features.commandline.webserver.php):

  ```bash
  cd path/to/your/php/code
  php -S localhost:8000
  ```

Wenn Sie nicht direkt mit einem serverseitigen Framework oder einer Programmiersprache arbeiten, die einen Entwicklungsserver bereitstellt, kann das `http.server` Modul von Python auch verwendet werden, um serverseitigen Code, der in Sprachen wie Python, PHP, JavaScript und so weiter geschrieben ist, zu testen, indem serverseitige Common Gateway Interface (CGI) Skripte aufgerufen werden.
Für Beispiele, wie Sie diese Funktion nutzen können, siehe [Execute a Script Remotely Through the Common Gateway Interface (CGI)](https://realpython.com/python-http-server/#execute-a-script-remotely-through-the-common-gateway-interface-cgi) in _How to Launch an HTTP Server in One Line of Python Code_ auf realpython.com.
