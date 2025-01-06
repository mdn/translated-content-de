---
title: Einrichten eines lokalen Testservers
slug: Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server
l10n:
  sourceCommit: 34e4f9a1e1d492f79d5b87709539df9b571419cc
---

{{QuicklinksWithSubPages("/de/docs/Learn_web_development/Howto")}}

Dieser Artikel erklärt, wie Sie einen einfachen lokalen Testserver auf Ihrem Rechner einrichten und die Grundlagen zur Nutzung desselben.

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
      <td>Sie werden lernen, wie man einen lokalen Testserver einrichtet.</td>
    </tr>
  </tbody>
</table>

## Lokale Dateien vs. entfernte Dateien

In den meisten Bereichen unseres Lernmaterials empfehlen wir Ihnen, Ihre Beispiele einfach direkt im Browser zu öffnen – dies kann durch Doppelklicken auf die HTML-Datei, Drag-and-Drop in das Browserfenster oder durch Auswahl von _Datei_ > _Öffnen..._ und Navigation zur HTML-Datei geschehen. Es gibt viele Möglichkeiten, dies zu tun.

Wenn der Webadresspfad mit `file://` gefolgt vom Pfad zur Datei auf Ihrer lokalen Festplatte beginnt, wird eine lokale Datei verwendet. Im Gegensatz dazu beginnt die Webadresse, wenn Sie eines unserer auf GitHub gehosteten Beispiele ansehen (oder ein Beispiel auf einem anderen entfernten Server), mit `http://` oder `https://`, um zu zeigen, dass die Datei über HTTP empfangen wurde.

## Das Problem mit dem Testen lokaler Dateien

Einige Beispiele funktionieren nicht, wenn Sie sie als lokale Dateien öffnen. Dies kann aus verschiedenen Gründen geschehen, der wahrscheinlichste ist:

- **Sie beinhalten asynchrone Anfragen**. Einige Browser (einschließlich Chrome) führen keine asynchronen Anfragen aus (siehe [Lernen: Netzwerk-Anfragen mit JavaScript](/de/docs/Learn_web_development/Core/Scripting/Network_requests)), wenn Sie das Beispiel nur von einer lokalen Datei ausführen. Dies liegt an Sicherheitsbeschränkungen (für mehr über Websicherheit, lesen Sie [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)).
- **Sie nutzen eine serverseitige Sprache**. Serverseitige Sprachen (wie PHP oder Python) erfordern einen speziellen Server, um den Code zu interpretieren und die Ergebnisse bereitzustellen.
- **Sie beinhalten andere Dateien**. Browser behandeln Anfragen zum Laden von Ressourcen mit dem `file://` Schema häufig als Cross-Origin-Anfragen. Wenn Sie also eine lokale Datei laden, die andere lokale Dateien einschließt, kann dies einen {{Glossary("CORS", "CORS")}} Fehler auslösen.

## Einen einfachen lokalen HTTP-Server ausführen

Um das Problem der asynchronen Anfragen zu umgehen, müssen wir solche Beispiele durch einen lokalen Webserver ausführen.

### Verwendung einer Erweiterung in Ihrem Code-Editor

Wenn Sie nur HTML, CSS und JavaScript ohne serverseitige Sprache benötigen, ist es am einfachsten, Erweiterungen in Ihrem Code-Editor zu verwenden. Neben der Automatisierung der Installation und Einrichtung Ihres lokalen HTTP-Servers, integrieren sie sich auch gut in Ihre Code-Editoren. Das Testen lokaler Dateien in einem HTTP-Server kann nur einen Klick entfernt sein.

Für VS Code, probieren Sie die folgenden kostenlosen Erweiterungen aus:

- [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server)
- [Preview on Web Server](https://marketplace.visualstudio.com/items?itemName=yuichinukiyama.vscode-preview-server)

### Verwendung von Node.js

Das Node.js [`http-server`](https://www.npmjs.com/package/http-server) Modul ist eine der einfachsten Möglichkeiten, um HTML-Dateien in einem beliebigen Verzeichnis zu hosten.

Um das Modul zu verwenden:

1. Führen Sie die folgenden Befehle aus, um zu überprüfen, ob Node.js bereits installiert ist:

   ```bash
   node -v
   npm -v
   npx -v
   ```

2. Falls Node.js nicht installiert ist, müssen Sie es installieren. Folgen Sie den [Download-Anweisungen](https://nodejs.org/en/download/package-manager) in der Node.js-Dokumentation, und führen Sie dann die obigen Befehle erneut aus, um zu überprüfen, ob die Installation erfolgreich war.

3. Angenommen, das Verzeichnis ist `/path/to/project`. Führen Sie den folgenden Befehl aus, um den Server zu starten:

   ```bash
   npx http-server /path/to/project -o -p 9999
   ```

   Dies hostet alle Dateien im Verzeichnis `/path/to/project` auf `localhost:9999`. Die Option `-o` öffnet die `index.html` Seite in einem Webbrowser. Wenn `index.html` nicht existiert, wird stattdessen das Verzeichnis angezeigt.

### Verwendung von Python

Eine andere Möglichkeit ist die Verwendung des Python `http.server` Moduls.

> [!NOTE]
> Ältere Versionen von Python (bis Version 2.7) haben ein ähnliches Modul mit dem Namen `SimpleHTTPServer` bereitgestellt. Python 2 ist bereits am Ende seines Lebenszyklus, daher empfehlen wir die Verwendung von Python 3.

Um dies zu tun:

1. Führen Sie den folgenden Befehl aus, um zu überprüfen, ob Python bereits installiert ist:

   ```bash
   python -V
   # If the above fails, try:
   python3 -V
   # Or, if the "py" command is available, try:
   py -3 -V
   ```

2. Falls Python nicht installiert ist, müssen Sie es installieren. Folgen Sie den [Download-Anweisungen](https://www.python.org/downloads/) in der Python-Dokumentation (wir haben auch ausführlichere Erklärungen in unserem [Django-Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#installing_python_3)), und führen Sie dann die obigen Befehle erneut aus, um zu überprüfen, ob die Installation erfolgreich war.

3. Wenn Python eingerichtet ist, navigieren Sie mittels des `cd` Befehls zu dem Verzeichnis, das den zu testenden Website-Code enthält.

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

5. Standardmäßig wird der Inhalt des Verzeichnisses auf einem lokalen Webserver auf Port 8000 ausgeführt. Sie können auf diesen Server zugreifen, indem Sie die URL `localhost:8000` in Ihrem Webbrowser aufrufen. Hier sehen Sie den Inhalt des Verzeichnisses aufgelistet – klicken Sie auf die HTML-Datei, die Sie ausführen möchten.

> [!NOTE]
> Wenn Sie bereits etwas auf Port 8000 laufen haben, können Sie einen anderen Port wählen, indem Sie dem Server-Befehl eine alternative Portnummer hinzufügen, z.B. `python3 -m http.server 7800`. Sie können dann auf Ihre Inhalte unter `localhost:7800` zugreifen.

## Serverseitige Sprachen lokal ausführen

Der beste Ansatz für die Arbeit mit serverseitigen Sprachen, wie Python, PHP oder JavaScript, hängt von der verwendeten serverseitigen Sprache und davon ab, ob Sie mit einem Webframework oder "alleinstehendem" Code arbeiten.

Wenn Sie mit einem Webframework arbeiten, stellt das Framework normalerweise seinen eigenen Entwicklungsserver zur Verfügung. Zum Beispiel kommen die folgenden Sprachen/Frameworks mit einem Entwicklungsserver:

- Python Webframeworks wie [Django](/de/docs/Learn_web_development/Extensions/Server-side/Django), [Flask](https://flask.palletsprojects.com/) und [Pyramid](https://trypyramid.com/).
- Node/JavaScript Frameworks wie [Express Web Framework (Node.js/JavaScript)](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)
- PHP hat seinen eigenen [eingebauten Entwicklungsserver](https://www.php.net/manual/en/features.commandline.webserver.php):

  ```bash
  cd path/to/your/php/code
  php -S localhost:8000
  ```

Wenn Sie nicht direkt mit einem serverseitigen Framework oder einer Programmiersprache arbeiten, die einen Entwicklungsserver bereitstellt, kann das Python `http.server` Modul auch zum Testen von serverseitigem Code verwendet werden, der in Sprachen wie Python, PHP, JavaScript usw. geschrieben ist, indem Common Gateway Interface (CGI) Scripts auf der Serverseite aufgerufen werden.
Für Beispiele, wie Sie diese Funktion nutzen können, siehe [Execute a Script Remotely Through the Common Gateway Interface (CGI)](https://realpython.com/python-http-server/#execute-a-script-remotely-through-the-common-gateway-interface-cgi) in _How to Launch an HTTP Server in One Line of Python Code_ auf realpython.com.
