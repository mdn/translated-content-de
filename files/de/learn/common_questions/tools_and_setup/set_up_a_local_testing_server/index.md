---
title: Wie richtet man einen lokalen Testserver ein?
slug: Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Dieser Artikel erklärt, wie Sie einen einfachen lokalen Testserver auf Ihrem Rechner einrichten und die Grundlagen seiner Verwendung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie müssen zunächst wissen,
        <a href="/de/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work"
          >wie das Internet funktioniert</a
        >, und
        <a href="/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server"
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

## Lokale Dateien vs. Remote-Dateien

In den meisten Lernbereichen empfehlen wir Ihnen, Ihre Beispiele direkt in einem Browser zu öffnen — das können Sie tun, indem Sie die HTML-Datei doppelklicken, sie in das Browserfenster ziehen und ablegen oder _Datei_ > _Öffnen…_ wählen und zur HTML-Datei navigieren. Es gibt viele Möglichkeiten, dies zu erreichen.

Wenn der Webadresspfad mit `file://` gefolgt von dem Pfad zur Datei auf Ihrer lokalen Festplatte beginnt, wird eine lokale Datei verwendet. Im Gegensatz dazu wird, wenn Sie eines unserer auf GitHub gehosteten Beispiele (oder ein Beispiel auf einem anderen Remote-Server) ansehen, die Webadresse mit `http://` oder `https://` beginnen, um zu zeigen, dass die Datei über HTTP empfangen wurde.

## Das Problem mit dem Testen lokaler Dateien

Einige Beispiele funktionieren nicht, wenn Sie sie als lokale Dateien öffnen. Dies kann aus verschiedenen Gründen der Fall sein, am wahrscheinlichsten sind:

- **Sie enthalten asynchrone Anfragen**. Einige Browser (einschließlich Chrome) führen keine asynchronen Anfragen aus (siehe [Daten vom Server abrufen](/de/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)), wenn Sie das Beispiel nur von einer lokalen Datei ausführen. Dies liegt an Sicherheitsbeschränkungen (lesen Sie mehr über Web-Sicherheit unter [Websitesicherheit](/de/docs/Learn/Server-side/First_steps/Website_security)).
- **Sie verwenden eine serverseitige Sprache**. Serversprachen (wie PHP oder Python) benötigen einen speziellen Server, um den Code zu interpretieren und die Ergebnisse zu liefern.
- **Sie beinhalten andere Dateien**. Browser behandeln Anfragen zum Laden von Ressourcen mit dem `file://`-Schema häufig als Cross-Origin-Anfragen.
  Wenn Sie also eine lokale Datei laden, die andere lokale Dateien enthält, kann dies einen [CORS](/de/docs/Glossary/CORS)-Fehler hervorrufen.

## Ausführen eines einfachen lokalen HTTP-Servers

Um das Problem mit asynchronen Anfragen zu umgehen, müssen wir solche Beispiele testen, indem wir sie über einen lokalen Webserver ausführen.

### Verwendung einer Erweiterung in Ihrem Code-Editor

Wenn Sie nur HTML, CSS und JavaScript benötigen und keine serverseitige Sprache, ist der einfachste Weg möglicherweise, nach Erweiterungen in Ihrem Code-Editor zu suchen. Diese automatisieren nicht nur die Installation und Einrichtung Ihres lokalen HTTP-Servers, sondern integrieren sich auch gut in Ihre Code-Editoren. Das Testen lokaler Dateien in einem HTTP-Server könnte nur einen Klick entfernt sein.

Für VSCode können Sie die folgende kostenlose Erweiterung prüfen:

- `vscode-preview-server`. Sie können sie auf ihrer [Startseite](https://marketplace.visualstudio.com/items?itemName=yuichinukiyama.vscode-preview-server) überprüfen.

### Verwendung von Node.js

Das Node.js-Modul [`http-server`](https://www.npmjs.com/package/http-server) ist ein einfacher Weg, HTML-Dateien in jedem Verzeichnis zu hosten.

Um das Modul zu verwenden:

1. Führen Sie die folgenden Befehle aus, um zu prüfen, ob Node.js bereits installiert ist:

   ```bash
   node -v
   npm -v
   npx -v
   ```

2. Wenn Node.js nicht installiert ist, müssen Sie es installieren. Folgen Sie den [Download-Anweisungen](https://nodejs.org/en/download/package-manager) in den Node.js-Dokumentationen und führen Sie die obigen Befehle erneut aus, um zu prüfen, ob die Installation erfolgreich war.

3. Nehmen wir an, das Verzeichnis ist `/path/to/project`. Führen Sie den folgenden Befehl aus, um den Server zu starten:

   ```bash
   npx http-server /path/to/project -o -p 9999
   ```

   Dies hostet alle Dateien im Verzeichnis `/path/to/project` auf `localhost:9999`. Die Option `-o` öffnet die Seite `index.html` in einem Webbrowser. Wenn `index.html` nicht existiert, wird stattdessen das Verzeichnis angezeigt.

### Verwendung von Python

Eine weitere Möglichkeit besteht darin, das `http.server`-Modul von Python zu verwenden.

> [!NOTE]
> Ältere Versionen von Python (bis Version 2.7) boten ein ähnliches Modul namens `SimpleHTTPServer`. Da Python 2 bereits eingestellt ist, empfehlen wir die Verwendung von Python 3.

Um dies zu tun:

1. Führen Sie den folgenden Befehl aus, um zu prüfen, ob Python bereits installiert ist:

   ```bash
   python -V
   # If the above fails, try:
   python3 -V
   # Or, if the "py" command is available, try:
   py -3 -V
   ```

2. Wenn Python nicht installiert ist, müssen Sie es installieren. Befolgen Sie die [Download-Anweisungen](https://www.python.org/downloads/) in den Python-Dokumentationen (wir haben auch detailliertere Erklärungen in unserem [Django-Tutorial](/de/docs/Learn/Server-side/Django/development_environment#installing_python_3)), und führen Sie die obigen Befehle erneut aus, um zu prüfen, ob die Installation erfolgreich war.

3. Wenn Python eingerichtet ist, navigieren Sie mit dem `cd`-Befehl zu dem Verzeichnis, das den Website-Code enthält, den Sie testen möchten.

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

5. Standardmäßig wird der Inhalt des Verzeichnisses auf einem lokalen Webserver auf Port 8000 ausgeführt. Sie können zu diesem Server gehen, indem Sie im Webbrowser die URL `localhost:8000` eingeben. Hier sehen Sie den Inhalt des Verzeichnisses aufgelistet — klicken Sie auf die HTML-Datei, die Sie ausführen möchten.

> [!NOTE]
> Wenn bereits etwas auf Port 8000 läuft, können Sie einen anderen Port wählen, indem Sie den Serverbefehl gefolgt von einer alternativen Portnummer ausführen, z. B. `python3 -m http.server 7800`. Sie können dann auf Ihren Inhalt unter `localhost:7800` zugreifen.

## Lokale Ausführung serverseitiger Sprachen

Der beste Ansatz für die Arbeit mit serverseitigen Sprachen wie Python, PHP oder JavaScript hängt von der verwendeten serverseitigen Sprache und davon ab, ob Sie mit einem Web-Framework oder "stand-alone" Code arbeiten.

Wenn Sie mit einem Web-Framework arbeiten, bietet das Framework in der Regel seinen eigenen Entwicklungsserver.
Zum Beispiel bieten die folgenden Sprachen/Frameworks einen Entwicklungsserver:

- Python-Web-Frameworks, wie [Django](/de/docs/Learn/Server-side/Django), [Flask](https://flask.palletsprojects.com/) und [Pyramid](https://trypyramid.com/).
- Node/JavaScript-Frameworks wie [Express Web Framework (Node.js/JavaScript)](/de/docs/Learn/Server-side/Express_Nodejs)
- PHP hat einen eigenen [eingebauten Entwicklungsserver](https://www.php.net/manual/en/features.commandline.webserver.php):

  ```bash
  cd path/to/your/php/code
  php -S localhost:8000
  ```

Wenn Sie nicht direkt mit einem serverseitigen Framework oder einer Programmiersprache arbeiten, die einen Entwicklungsserver bietet, kann das `http.server`-Modul von Python auch verwendet werden, um serverseitigen Code zu testen, der in Sprachen wie Python, PHP, JavaScript usw. geschrieben ist, indem serverseitige Common Gateway Interface (CGI)-Skripte aufgerufen werden. Für Beispiele zur Verwendung dieser Funktion sehen Sie [Execute a Script Remotely Through the Common Gateway Interface (CGI)](https://realpython.com/python-http-server/#execute-a-script-remotely-through-the-common-gateway-interface-cgi) in _How to Launch an HTTP Server in One Line of Python Code_ auf realpython.com.
