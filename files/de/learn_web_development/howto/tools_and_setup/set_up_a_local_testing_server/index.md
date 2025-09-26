---
title: Wie richten Sie einen lokalen Testserver ein?
slug: Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server
l10n:
  sourceCommit: 9584088475846ff014dadddf8f6eff25c0796bbb
---

Dieser Artikel erklärt, wie man einen einfachen lokalen Testserver auf Ihrem Computer einrichtet und die Grundlagen zu dessen Verwendung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten zuerst wissen,
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
      <td>Sie lernen, wie man einen lokalen Testserver einrichtet.</td>
    </tr>
  </tbody>
</table>

## Lokale Dateien vs. entfernte Dateien

In den meisten Teilen des Lernbereichs sagen wir Ihnen, dass Sie Ihre Beispiele einfach direkt in einem Browser öffnen sollen – das kann durch Doppelklicken auf die HTML-Datei, Drag-and-Drop in das Browserfenster oder durch Auswählen von _Datei_ > _Öffnen…_ und Navigieren zur HTML-Datei geschehen. Es gibt viele Möglichkeiten, dies zu erreichen.

Wenn der Webadressenpfad mit `file://` beginnt, gefolgt vom Pfad zur Datei auf Ihrer lokalen Festplatte, wird eine lokale Datei verwendet. Im Gegensatz dazu beginnt die Webadresse bei einem unserer Beispiele, die auf GitHub gehostet sind (oder einem Beispiel auf einem anderen entfernten Server), mit `http://` oder `https://` und zeigt, dass die Datei über HTTP abgerufen wurde.

## Das Problem beim Testen lokaler Dateien

Einige Beispiele funktionieren nicht, wenn Sie sie als lokale Dateien öffnen. Dies kann aus verschiedenen Gründen der Fall sein, wobei die wahrscheinlichsten sind:

- **Sie enthalten asynchrone Anfragen**. Einige Browser (einschließlich Chrome) werden asynchrone Anfragen nicht ausführen (siehe [Lernen: Netzwerk-Anfragen mit JavaScript](/de/docs/Learn_web_development/Core/Scripting/Network_requests)), wenn Sie das Beispiel einfach aus einer lokalen Datei ausführen. Dies liegt an Sicherheitsbeschränkungen (für mehr Informationen zur Websicherheit lesen Sie [Websicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)).
- **Sie verwenden eine serverseitige Sprache**. Serverseitige Sprachen (wie PHP oder Python) erfordern einen speziellen Server, um den Code zu interpretieren und die Ergebnisse zu liefern.
- **Sie schließen andere Dateien ein**. Browser behandeln Anfragen zum Laden von Ressourcen über das `file://`-Schema typischerweise als Cross-Origin-Anfragen. Wenn Sie also eine lokale Datei laden, die andere lokale Dateien einbindet, kann dies einen {{Glossary("CORS", "CORS")}}-Fehler auslösen.

## Ausführen eines einfachen lokalen HTTP-Servers

Um das Problem der asynchronen Anfragen zu umgehen, müssen wir solche Beispiele testen, indem wir sie über einen lokalen Webserver ausführen.

### Verwendung einer Erweiterung in Ihrem Code-Editor

Wenn Sie nur HTML, CSS und JavaScript benötigen und keine serverseitige Sprache, ist es möglicherweise am einfachsten, nach Erweiterungen in Ihrem Code-Editor zu suchen. Diese automatisieren die Installation und Einrichtung Ihres lokalen HTTP-Servers und integrieren sich auch gut mit Ihren Code-Editoren. Das Testen lokaler Dateien in einem HTTP-Server könnte nur einen Klick entfernt sein.

Für VS Code probieren Sie die folgenden kostenlosen Erweiterungen aus:

- [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server)
- [Preview on Web Server](https://marketplace.visualstudio.com/items?itemName=yuichinukiyama.vscode-preview-server)

### Verwendung von Node.js

Das Node.js-Modul [`http-server`](https://www.npmjs.com/package/http-server) ist eine sehr einfache Möglichkeit, HTML-Dateien in einem beliebigen Verzeichnis zu hosten.

Um das Modul zu verwenden:

1. Führen Sie die folgenden Befehle aus, um zu überprüfen, ob Node.js bereits installiert ist:

   ```bash
   node -v
   npm -v
   npx -v
   ```

2. Wenn Node.js nicht installiert ist, müssen Sie es installieren. Folgen Sie den [Download-Anweisungen](https://nodejs.org/en/download) in den Node.js-Dokumentationen und führen Sie dann die obigen Befehle erneut aus, um zu überprüfen, ob die Installation erfolgreich war.

3. Angenommen, das Verzeichnis ist `/path/to/project`. Führen Sie folgenden Befehl aus, um den Server zu starten:

   ```bash
   npx http-server /path/to/project -o -p 9999
   ```

   Dies hostet alle Dateien im Verzeichnis `/path/to/project` auf `localhost:9999`. Die Option `-o` öffnet die `index.html`-Seite in einem Webbrowser. Wenn `index.html` nicht existiert, wird stattdessen das Verzeichnis angezeigt.

### Verwendung von Python

Eine andere Möglichkeit, dies zu erreichen, ist die Verwendung von Pythons `http.server`-Modul.

> [!NOTE]
> Ältere Versionen von Python (bis Version 2.7) boten ein ähnliches Modul namens `SimpleHTTPServer`. Python 2 ist bereits end-of-life, daher empfehlen wir die Verwendung von Python 3.

Dazu:

1. Führen Sie den folgenden Befehl aus, um zu überprüfen, ob Python bereits installiert ist:

   ```bash
   python -V
   # If the above fails, try:
   python3 -V
   # Or, if the "py" command is available, try:
   py -3 -V
   ```

2. Wenn Python nicht installiert ist, müssen Sie es installieren. Folgen Sie den [Download-Anweisungen](https://www.python.org/downloads/) in den Python-Dokumentationen (wir haben auch ausführlichere Erklärungen in unserem [Django-Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#installing_python_3)), und führen Sie dann die obigen Befehle erneut aus, um zu überprüfen, ob die Installation erfolgreich war.

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

5. Standardmäßig werden die Inhalte des Verzeichnisses auf einem lokalen Webserver auf Port 8000 ausgeführt. Sie können auf diesen Server zugreifen, indem Sie die URL `localhost:8000` in Ihrem Webbrowser aufrufen. Hier sehen Sie die Inhalte des Verzeichnisses aufgelistet — klicken Sie auf die HTML-Datei, die Sie ausführen möchten.

> [!NOTE]
> Wenn Sie bereits etwas auf Port 8000 laufen haben, können Sie einen anderen Port wählen, indem Sie den Serverbefehl gefolgt von einer alternativen Portnummer eingeben, z.B. `python3 -m http.server 7800`. Sie können dann auf Ihre Inhalte unter `localhost:7800` zugreifen.

## Ausführen von serverseitigen Sprachen lokal

Der beste Ansatz für die Arbeit mit serverseitigen Sprachen wie Python, PHP oder JavaScript hängt von der serverseitigen Sprache ab, die Sie verwenden, und davon, ob Sie mit einem Web-Framework oder "stand-alone"-Code arbeiten.

Wenn Sie mit einem Web-Framework arbeiten, bietet das Framework normalerweise seinen eigenen Entwicklungsserver. Zum Beispiel bringen die folgenden Sprachen/Frameworks einen Entwicklungsserver mit:

- Python-Web-Frameworks wie [Django](/de/docs/Learn_web_development/Extensions/Server-side/Django), [Flask](https://flask.palletsprojects.com/) und [Pyramid](https://trypyramid.com/).
- Node/JavaScript-Frameworks wie das [Express Web Framework (Node.js/JavaScript)](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs).
- PHP hat seinen eigenen [eingebauten Entwicklungsserver](https://www.php.net/manual/en/features.commandline.webserver.php):

  ```bash
  cd path/to/your/php/code
  php -S localhost:8000
  ```

Wenn Sie nicht direkt mit einem serverseitigen Framework oder einer Programmiersprache arbeiten, die einen Entwicklungsserver bereitstellt, kann auch Pythons `http.server`-Modul verwendet werden, um serverseitigen Code zu testen, der in Sprachen wie Python, PHP, JavaScript usw. geschrieben ist, indem serverseitige Common Gateway Interface (CGI)-Skripte aufgerufen werden. Beispiele zur Verwendung dieser Funktion finden Sie unter [Execute a Script Remotely Through the Common Gateway Interface (CGI)](https://realpython.com/python-http-server/#execute-a-script-remotely-through-the-common-gateway-interface-cgi) in _How to Launch an HTTP Server in One Line of Python Code_ auf realpython.com.
