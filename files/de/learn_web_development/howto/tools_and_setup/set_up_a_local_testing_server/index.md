---
title: Wie richten Sie einen lokalen Testserver ein?
slug: Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Dieser Artikel erklärt, wie ein einfacher lokaler Testserver auf Ihrem Computer eingerichtet wird und die Grundlagen zur Nutzung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie müssen zuerst wissen,
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

## Lokale Dateien vs. Remote-Dateien

In den meisten Lernbereichen sagen wir Ihnen, dass Sie Ihre Beispiele einfach direkt in einem Browser öffnen sollen — das kann durch Doppelklicken auf die HTML-Datei, Drag-and-Drop in das Browserfenster oder durch Auswahl von _Datei_ > _Öffnen..._ und Navigation zur HTML-Datei geschehen. Es gibt viele Möglichkeiten, dies zu erreichen.

Wenn der Webadresspfad mit `file://` gefolgt vom Pfad zur Datei auf Ihrer lokalen Festplatte beginnt, handelt es sich um eine lokale Datei. Im Gegensatz dazu, wenn Sie eines unserer Beispiele auf GitHub (oder ein Beispiel auf einem anderen Remote-Server) ansehen, beginnt die Webadresse mit `http://` oder `https://`, um zu zeigen, dass die Datei über HTTP abgerufen wurde.

## Das Problem mit der lokalen Dateitests

Einige Beispiele funktionieren nicht, wenn Sie sie als lokale Dateien öffnen. Dies kann aus verschiedenen Gründen der Fall sein, am wahrscheinlichsten sind:

- **Sie enthalten asynchrone Anfragen**. Einige Browser (einschließlich Chrome) führen keine asynchronen Anfragen aus (siehe [Lernen: Netzwerk-Anfragen mit JavaScript durchführen](/de/docs/Learn_web_development/Core/Scripting/Network_requests)), wenn Sie das Beispiel einfach von einer lokalen Datei ausführen. Der Grund sind Sicherheitsbeschränkungen (für mehr Informationen über Websicherheit lesen Sie [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)).
- **Sie beinhalten eine serverseitige Sprache**. Serverseitige Sprachen (wie PHP oder Python) benötigen einen speziellen Server, um den Code zu interpretieren und die Ergebnisse zu liefern.
- **Sie beinhalten andere Dateien**. Browser behandeln Anfragen zum Laden von Ressourcen mit dem `file://` Schema häufig als Cross-Origin-Anfragen. Wenn Sie also eine lokale Datei laden, die andere lokale Dateien enthält, kann dies einen {{Glossary("CORS", "CORS")}} Fehler auslösen.

## Ausführen eines einfachen lokalen HTTP-Servers

Um das Problem der asynchronen Anfragen zu umgehen, müssen wir solche Beispiele testen, indem wir sie über einen lokalen Webserver ausführen.

### Verwendung einer Erweiterung in Ihrem Code-Editor

Wenn Sie nur HTML, CSS und JavaScript und keine serverseitige Sprache benötigen, kann der einfachste Weg darin bestehen, nach Erweiterungen in Ihrem Code-Editor zu suchen. Neben der Automatisierung der Installation und Einrichtung für Ihren lokalen HTTP-Server integrieren sie sich auch gut in Ihre Code-Editoren. Das Testen lokaler Dateien in einem HTTP-Server ist möglicherweise nur einen Klick entfernt.

Für VS Code können Sie die folgende kostenlose Erweiterung prüfen:

- `vscode-preview-server`. Sie können es auf seiner [Homepage](https://marketplace.visualstudio.com/items?itemName=yuichinukiyama.vscode-preview-server) überprüfen.

### Verwendung von Node.js

Das Node.js [`http-server`](https://www.npmjs.com/package/http-server) Modul ist eine der einfachsten Möglichkeiten, HTML-Dateien in einem beliebigen Verzeichnis zu hosten.

Um das Modul zu verwenden:

1. Führen Sie die folgenden Befehle aus, um zu überprüfen, ob Node.js bereits installiert ist:

   ```bash
   node -v
   npm -v
   npx -v
   ```

2. Wenn Node.js nicht installiert ist, müssen Sie es installieren. Befolgen Sie die [Download-Anweisungen](https://nodejs.org/en/download/package-manager) in den Node.js-Dokumenten und führen Sie dann die obigen Befehle erneut aus, um zu prüfen, ob die Installation erfolgreich war.

3. Nehmen wir an, das Verzeichnis ist `/path/to/project`. Führen Sie den folgenden Befehl aus, um den Server zu starten:

   ```bash
   npx http-server /path/to/project -o -p 9999
   ```

   Dies hostet alle Dateien im `/path/to/project` Verzeichnis unter `localhost:9999`. Die Option `-o` öffnet die `index.html` Seite in einem Webbrowser. Wenn `index.html` nicht existiert, wird stattdessen das Verzeichnis angezeigt.

### Verwendung von Python

Eine andere Möglichkeit, dies zu erreichen, ist die Verwendung des `http.server` Moduls von Python.

> [!NOTE]
> Ältere Versionen von Python (bis Version 2.7) hatten ein ähnliches Modul namens `SimpleHTTPServer`. Da Python 2 bereits eingestellt ist, empfehlen wir die Verwendung von Python 3.

Dafür:

1. Führen Sie den folgenden Befehl aus, um zu prüfen, ob Python bereits installiert ist:

   ```bash
   python -V
   # If the above fails, try:
   python3 -V
   # Or, if the "py" command is available, try:
   py -3 -V
   ```

2. Wenn Python nicht installiert ist, müssen Sie es installieren. Folgen Sie den [Download-Anweisungen](https://www.python.org/downloads/) in den Python-Dokumenten (wir haben auch ausführlichere Erklärungen in unserem [Django-Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#installing_python_3)), und führen Sie dann die obigen Befehle erneut aus, um zu prüfen, ob die Installation erfolgreich war.

3. Wenn Python eingerichtet ist, navigieren Sie mit dem `cd` Befehl zu dem Verzeichnis, das den Website-Code enthält, den Sie testen möchten.

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

5. Standardmäßig werden die Inhalte des Verzeichnisses auf einem lokalen Webserver auf Port 8000 ausgeführt. Sie können zu diesem Server gehen, indem Sie die URL `localhost:8000` in Ihrem Webbrowser aufrufen. Dort sehen Sie die Inhalte des Verzeichnisses aufgelistet — klicken Sie auf die HTML-Datei, die Sie ausführen möchten.

> [!NOTE]
> Wenn Sie bereits etwas auf Port 8000 laufen haben, können Sie einen anderen Port wählen, indem Sie den Serverbefehl gefolgt von einer alternativen Portnummer laufen lassen, z.B. `python3 -m http.server 7800`. Sie können dann auf Ihre Inhalte unter `localhost:7800` zugreifen.

## Serverseitige Sprachen lokal ausführen

Der beste Ansatz für die Arbeit mit serverseitigen Sprachen, wie Python, PHP oder JavaScript, hängt von der verwendeten serverseitigen Sprache ab, und davon, ob Sie mit einem Web-Framework oder "alleinstehendem" Code arbeiten.

Wenn Sie mit einem Web-Framework arbeiten, stellt das Framework normalerweise seinen eigenen Entwicklungsserver bereit. Zum Beispiel, die folgenden Sprachen/Frameworks kommen mit einem Entwicklungsserver:

- Python Web-Frameworks, wie [Django](/de/docs/Learn_web_development/Extensions/Server-side/Django), [Flask](https://flask.palletsprojects.com/), und [Pyramid](https://trypyramid.com/).
- Node/JavaScript Frameworks wie [Express Web Framework (Node.js/JavaScript)](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)
- PHP hat seinen eigenen [integrierten Entwicklungsserver](https://www.php.net/manual/en/features.commandline.webserver.php):

  ```bash
  cd path/to/your/php/code
  php -S localhost:8000
  ```

Wenn Sie nicht direkt mit einem serverseitigen Framework oder einer Programmiersprache arbeiten, die einen Entwicklungsserver bereitstellt, kann das `http.server` Modul von Python auch genutzt werden, um serverseitigen Code, der in Sprachen wie Python, PHP, JavaScript usw. geschrieben ist, zu testen, indem serverseitige Common Gateway Interface (CGI) Skripte aufgerufen werden. Beispiele zur Nutzung dieses Features finden Sie unter [Execute a Script Remotely Through the Common Gateway Interface (CGI)](https://realpython.com/python-http-server/#execute-a-script-remotely-through-the-common-gateway-interface-cgi) in _How to Launch an HTTP Server in One Line of Python Code_ auf realpython.com.
