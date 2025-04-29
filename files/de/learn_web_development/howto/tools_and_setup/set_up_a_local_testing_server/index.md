---
title: Wie richtet man einen lokalen Testserver ein?
slug: Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server
l10n:
  sourceCommit: 479ea4c8bff4b900a7968413287c77dde2b0c20f
---

Dieser Artikel erklärt, wie Sie einen einfachen lokalen Testserver auf Ihrem Rechner einrichten und die Grundlagen, wie man ihn verwendet.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie müssen zunächst wissen,
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

In den meisten Bereichen des Lernens sagen wir Ihnen, dass Sie Ihre Beispiele einfach direkt in einem Browser öffnen sollen – das kann durch Doppelklick auf die HTML-Datei, durch Ziehen und Ablegen in das Browserfenster oder durch Auswahl von _Datei_ > _Öffnen…_ und durch Navigieren zur HTML-Datei geschehen. Es gibt viele Möglichkeiten, dies zu erreichen.

Wenn der Webadresspfad mit `file://` gefolgt von dem Pfad zur Datei auf Ihrer lokalen Festplatte beginnt, wird eine lokale Datei verwendet. Im Gegensatz dazu, wenn Sie eines unserer Beispiele ansehen, die auf GitHub gehostet sind (oder ein Beispiel auf einem anderen entfernten Server), beginnt die Webadresse mit `http://` oder `https://`, um zu zeigen, dass die Datei über HTTP empfangen wurde.

## Das Problem mit dem Testen lokaler Dateien

Einige Beispiele werden nicht funktionieren, wenn Sie sie als lokale Dateien öffnen. Dies kann aus verschiedenen Gründen der Fall sein, wobei der wahrscheinlichste ist:

- **Sie enthalten asynchrone Anfragen**. Einige Browser (einschließlich Chrome) werden keine asynchronen Anfragen ausführen (siehe [Erlernen: Netzwerk-Anfragen mit JavaScript](/de/docs/Learn_web_development/Core/Scripting/Network_requests)), wenn Sie das Beispiel einfach von einer lokalen Datei ausführen. Dies liegt an Sicherheitsbeschränkungen (für mehr über Websicherheit, lesen Sie [Websicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)).
- **Sie enthalten eine serverseitige Sprache**. Serverseitige Sprachen (wie PHP oder Python) benötigen einen speziellen Server, um den Code zu interpretieren und die Ergebnisse zu liefern.
- **Sie beinhalten andere Dateien**. Browser behandeln Anfragen zum Laden von Ressourcen mit dem `file://`-Schema häufig als Cross-Origin-Anfragen.
  Wenn Sie also eine lokale Datei laden, die andere lokale Dateien beinhaltet, könnte dies einen {{Glossary("CORS", "CORS")}} Fehler auslösen.

## Einen einfachen lokalen HTTP-Server ausführen

Um das Problem von asynchronen Anfragen zu umgehen, müssen wir solche Beispiele testen, indem wir sie über einen lokalen Webserver ausführen.

### Verwendung einer Erweiterung in Ihrem Code-Editor

Wenn Sie nur HTML, CSS und JavaScript benötigen und keine serverseitige Sprache, ist die einfachste Möglichkeit, nach Erweiterungen in Ihrem Code-Editor zu suchen. Neben der automatischen Installation und Einrichtung Ihres lokalen HTTP-Servers integrieren sie sich auch gut mit Ihren Code-Editoren. Das Testen lokaler Dateien in einem HTTP-Server könnte nur einen Klick entfernt sein.

Für VS Code probieren Sie folgende kostenlose Erweiterungen aus:

- [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server)
- [Preview on Web Server](https://marketplace.visualstudio.com/items?itemName=yuichinukiyama.vscode-preview-server)

### Verwendung von Node.js

Das Node.js Modul [`http-server`](https://www.npmjs.com/package/http-server) ist eine der einfachsten Möglichkeiten, HTML-Dateien in einem beliebigen Verzeichnis zu hosten.

So verwenden Sie das Modul:

1. Führen Sie die folgenden Befehle aus, um zu überprüfen, ob Node.js bereits installiert ist:

   ```bash
   node -v
   npm -v
   npx -v
   ```

2. Falls Node.js nicht installiert ist, müssen Sie es installieren. Befolgen Sie die [Download-Anweisungen](https://nodejs.org/en/download) in den Node.js-Dokumenten und führen Sie die obigen Befehle erneut aus, um zu überprüfen, ob die Installation erfolgreich war.

3. Angenommen, das Verzeichnis ist `/path/to/project`. Führen Sie den folgenden Befehl aus, um den Server zu starten:

   ```bash
   npx http-server /path/to/project -o -p 9999
   ```

   Dies hostet alle Dateien im Verzeichnis `/path/to/project` auf `localhost:9999`. Die Option `-o` öffnet die `index.html` Seite in einem Webbrowser. Falls `index.html` nicht existiert, wird stattdessen das Verzeichnis angezeigt.

### Verwendung von Python

Eine weitere Möglichkeit besteht darin, das Python-Modul `http.server` zu verwenden.

> [!NOTE]
> Ältere Versionen von Python (bis Version 2.7) stellten ein ähnliches Modul namens `SimpleHTTPServer` zur Verfügung. Da Python 2 bereits sein Lebensende erreicht hat, empfehlen wir die Verwendung von Python 3.

So machen Sie das:

1. Führen Sie den folgenden Befehl aus, um zu überprüfen, ob Python bereits installiert ist:

   ```bash
   python -V
   # If the above fails, try:
   python3 -V
   # Or, if the "py" command is available, try:
   py -3 -V
   ```

2. Falls Python nicht installiert ist, müssen Sie es installieren. Befolgen Sie die [Download-Anweisungen](https://www.python.org/downloads/) in den Python-Dokumenten (wir haben auch ausführlichere Erklärungen in unserem [Django-Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#installing_python_3)), und führen Sie dann die obigen Befehle erneut aus, um zu überprüfen, ob die Installation erfolgreich war.

3. Falls Python eingerichtet ist, navigieren Sie zu dem Verzeichnis, das den zu testenden Website-Code enthält, mit dem Befehl `cd`.

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

5. Standardmäßig wird dies den Inhalt des Verzeichnisses auf einem lokalen Webserver im Port 8000 ausführen. Sie können zu diesem Server gehen, indem Sie die URL `localhost:8000` in Ihrem Webbrowser eingeben. Hier sehen Sie den Inhalt des Verzeichnisses aufgelistet – klicken Sie auf die HTML-Datei, die Sie ausführen möchten.

> [!NOTE]
> Wenn Sie bereits etwas auf dem Port 8000 laufen haben, können Sie einen anderen Port wählen, indem Sie den Serverbefehl gefolgt von einer alternativen Portnummer ausführen, z.B. `python3 -m http.server 7800`. Sie können dann auf Ihren Inhalt unter `localhost:7800` zugreifen.

## Serverseitige Sprachen lokal ausführen

Der beste Ansatz für die Arbeit mit serverseitigen Sprachen wie Python, PHP oder JavaScript hängt von der verwendeten serverseitigen Sprache und davon ab, ob Sie mit einem Webframework oder "eigenständigem" Code arbeiten.

Wenn Sie mit einem Webframework arbeiten, wird dieses Framework normalerweise seinen eigenen Entwicklungsserver bereitstellen.
Zum Beispiel haben die folgenden Sprachen/Frameworks einen Entwicklungsserver:

- Python-Web-Frameworks, wie [Django](/de/docs/Learn_web_development/Extensions/Server-side/Django), [Flask](https://flask.palletsprojects.com/) und [Pyramid](https://trypyramid.com/).
- Node/JavaScript-Frameworks wie das [Express Web Framework (Node.js/JavaScript)](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)
- PHP hat einen eigenen [eingebauten Entwicklungsserver](https://www.php.net/manual/en/features.commandline.webserver.php):

  ```bash
  cd path/to/your/php/code
  php -S localhost:8000
  ```

Wenn Sie nicht direkt mit einem serverseitigen Framework oder einer Programmiersprache arbeiten, die einen Entwicklungsserver bereitstellt, kann das Python-Modul `http.server` auch verwendet werden, um serverseitigen Code, der in Sprachen wie Python, PHP, JavaScript und so weiter geschrieben ist, zu testen, indem Common Gateway Interface (CGI)-Skripte serverseitig aufgerufen werden.
Für Beispiele, wie diese Funktion genutzt werden kann, siehe [Execute a Script Remotely Through the Common Gateway Interface (CGI)](https://realpython.com/python-http-server/#execute-a-script-remotely-through-the-common-gateway-interface-cgi) in _How to Launch an HTTP Server in One Line of Python Code_ auf realpython.com.
