---
title: Wie richtet man einen lokalen Testserver ein?
slug: Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server
l10n:
  sourceCommit: 1eae3d383ad47b5e21bf25764d1d35487ea52bb8
---

{{QuicklinksWithSubPages("/de/docs/Learn_web_development/Howto")}}

Dieser Artikel erklärt, wie Sie einen einfachen lokalen Testserver auf Ihrem Rechner einrichten und die Grundlagen, wie Sie ihn nutzen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten zunächst wissen,
        <a href="/de/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work"
          >wie das Internet funktioniert</a
        >, und
        <a href="/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server"
          >was ein Webserver ist</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>Sie lernen, wie Sie einen lokalen Testserver einrichten.</td>
    </tr>
  </tbody>
</table>

## Lokale Dateien vs. Remote-Dateien

In den meisten Bereichen unseres Lernangebots sagen wir Ihnen, dass Sie Ihre Beispiele einfach direkt in einem Browser öffnen sollen – das kann durch Doppelklicken auf die HTML-Datei, durch Ziehen und Ablegen in das Browserfenster oder durch Auswählen von _Datei_ > _Öffnen…_ und Navigieren zur HTML-Datei erfolgen. Es gibt viele Wege, dies zu erreichen.

Wenn der Webadresspfad mit `file://` beginnt, gefolgt von dem Pfad zur Datei auf Ihrer lokalen Festplatte, wird eine lokale Datei verwendet. Im Gegensatz dazu wird, wenn Sie eines unserer Beispiele auf GitHub (oder ein Beispiel auf einem anderen Remote-Server) ansehen, die Webadresse mit `http://` oder `https://` beginnen, um zu zeigen, dass die Datei via HTTP empfangen wurde.

## Das Problem beim Testen lokaler Dateien

Einige Beispiele funktionieren nicht, wenn Sie sie als lokale Dateien öffnen. Dies kann aus verschiedenen Gründen geschehen, wobei die wahrscheinlichsten sind:

- **Sie enthalten asynchrone Anfragen**. Einige Browser (einschließlich Chrome) werden asynchrone Anfragen nicht ausführen (siehe [Lernen: Netzwerk-Anfragen mit JavaScript](/de/docs/Learn_web_development/Core/Scripting/Network_requests)), wenn Sie das Beispiel einfach von einer lokalen Datei ausführen. Dies liegt an Sicherheitsbeschränkungen (für mehr über Web-Sicherheit lesen Sie [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)).
- **Sie verwenden eine serverseitige Sprache**. Serverseitige Sprachen (wie PHP oder Python) erfordern einen speziellen Server, um den Code zu interpretieren und die Ergebnisse auszuliefern.
- **Sie beinhalten andere Dateien**. Browser behandeln Anfragen zum Laden von Ressourcen mit dem `file://`-Schema häufig als Anfragen aus verschiedenen Ursprüngen.
  Wenn Sie also eine lokale Datei laden, die andere lokale Dateien beinhaltet, kann dies einen {{Glossary("CORS", "CORS")}}-Fehler auslösen.

## Einen einfachen lokalen HTTP-Server ausführen

Um das Problem der asynchronen Anfragen zu umgehen, müssen wir solche Beispiele über einen lokalen Webserver testen.

### Verwendung einer Erweiterung in Ihrem Code-Editor

Wenn Sie nur HTML, CSS und JavaScript benötigen und keine serverseitige Sprache, ist es möglicherweise am einfachsten, nach Erweiterungen in Ihrem Code-Editor zu suchen. Sie automatisieren nicht nur die Installation und Einrichtung Ihres lokalen HTTP-Servers, sondern integrieren sich auch gut in Ihre Code-Editoren. Das Testen lokaler Dateien in einem HTTP-Server könnte nur einen Klick entfernt sein.

Für VS Code können Sie folgende kostenlose Erweiterung überprüfen:

- `vscode-preview-server`. Sie können sie auf ihrer [Homepage](https://marketplace.visualstudio.com/items?itemName=yuichinukiyama.vscode-preview-server) überprüfen.

### Verwendung von Node.js

Das Node.js-Modul [`http-server`](https://www.npmjs.com/package/http-server) ist ein einfacher Weg, HTML-Dateien in jedem Verzeichnis zu hosten.

Um das Modul zu nutzen:

1. Führen Sie die folgenden Befehle aus, um zu überprüfen, ob Node.js bereits installiert ist:

   ```bash
   node -v
   npm -v
   npx -v
   ```

2. Wenn Node.js nicht installiert ist, müssen Sie es installieren. Folgen Sie den [Download-Anweisungen](https://nodejs.org/en/download/package-manager) in der Node.js-Dokumentation und führen Sie die obigen Befehle erneut aus, um zu überprüfen, ob die Installation erfolgreich war.

3. Angenommen, das Verzeichnis ist `/path/to/project`. Führen Sie den folgenden Befehl aus, um den Server zu starten:

   ```bash
   npx http-server /path/to/project -o -p 9999
   ```

   Dies hostet alle Dateien im Verzeichnis `/path/to/project` auf `localhost:9999`. Die Option `-o` öffnet die `index.html`-Seite in einem Webbrowser. Wenn `index.html` nicht existiert, wird stattdessen das Verzeichnis angezeigt.

### Verwendung von Python

Ein weiterer Weg, dies zu erreichen, ist die Verwendung des `http.server`-Moduls von Python.

> [!NOTE]
> Ältere Versionen von Python (bis Version 2.7) boten ein ähnliches Modul namens `SimpleHTTPServer`. Da Python 2 bereits das Ende des Lebenszyklus erreicht hat, empfehlen wir die Verwendung von Python 3.

Um dies zu tun:

1. Führen Sie den folgenden Befehl aus, um zu überprüfen, ob Python bereits installiert ist:

   ```bash
   python -V
   # If the above fails, try:
   python3 -V
   # Or, if the "py" command is available, try:
   py -3 -V
   ```

2. Wenn Python nicht installiert ist, müssen Sie es installieren. Folgen Sie den [Download-Anweisungen](https://www.python.org/downloads/) in der Python-Dokumentation (weitere ausführliche Erklärungen finden Sie in unserem [Django-Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#installing_python_3)), und führen Sie die obigen Befehle erneut aus, um zu überprüfen, ob die Installation erfolgreich war.

3. Wenn Python eingerichtet ist, navigieren Sie zu dem Verzeichnis, das den Webseiten-Code enthält, den Sie testen möchten, mithilfe des `cd`-Befehls.

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

5. Standardmäßig wird der Inhalt des Verzeichnisses auf einem lokalen Webserver auf Port 8000 ausgeführt. Sie können zu diesem Server gehen, indem Sie die URL `localhost:8000` in Ihrem Webbrowser aufrufen. Dort sehen Sie den Inhalt des Verzeichnisses aufgelistet – klicken Sie auf die HTML-Datei, die Sie ausführen möchten.

> [!NOTE]
> Wenn bereits etwas auf Port 8000 läuft, können Sie einen anderen Port wählen, indem Sie den Serverbefehl gefolgt von einer alternativen Portnummer ausführen, z.B. `python3 -m http.server 7800`. Sie können dann auf Ihre Inhalte unter `localhost:7800` zugreifen.

## Serverseitige Sprachen lokal ausführen

Der beste Ansatz für die Arbeit mit serverseitigen Sprachen wie Python, PHP oder JavaScript hängt von der serverseitigen Sprache ab, die Sie verwenden, und davon, ob Sie mit einem Webframework oder „Stand-alone“-Code arbeiten.

Wenn Sie mit einem Webframework arbeiten, bietet das Framework normalerweise seinen eigenen Entwicklungsserver.
Beispielsweise kommen die folgenden Sprachen/Frameworks mit einem Entwicklungsserver:

- Python-Webframeworks, wie [Django](/de/docs/Learn_web_development/Extensions/Server-side/Django), [Flask](https://flask.palletsprojects.com/) und [Pyramid](https://trypyramid.com/).
- Node/JavaScript-Frameworks wie [Express Web Framework (Node.js/JavaScript)](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)
- PHP verfügt über einen eigenen [integrierten Entwicklungsserver](https://www.php.net/manual/en/features.commandline.webserver.php):

  ```bash
  cd path/to/your/php/code
  php -S localhost:8000
  ```

Wenn Sie nicht direkt mit einem serverseitigen Framework oder einer Programmiersprache arbeiten, die einen Entwicklungsserver bereitstellt, kann Pythons `http.server`-Modul auch verwendet werden, um serverseitigen Code zu testen, der in Sprachen wie Python, PHP, JavaScript usw. geschrieben ist, indem serverseitige Common Gateway Interface (CGI)-Skripte aufgerufen werden.
Für Beispiele, wie Sie diese Funktion nutzen können, siehe [Execute a Script Remotely Through the Common Gateway Interface (CGI)](https://realpython.com/python-http-server/#execute-a-script-remotely-through-the-common-gateway-interface-cgi) im Artikel _How to Launch an HTTP Server in One Line of Python Code_ auf realpython.com.
