---
title: Wie richtet man einen lokalen Testserver ein?
slug: Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{QuicklinksWithSubPages("/de/docs/Learn_web_development/Howto")}}

Dieser Artikel erklärt, wie Sie einen einfachen lokalen Testserver auf Ihrem Rechner einrichten und wie Sie ihn grundlegend nutzen können.

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
      <th scope="row">Ziel:</th>
      <td>Sie lernen, wie Sie einen lokalen Testserver einrichten.</td>
    </tr>
  </tbody>
</table>

## Lokale Dateien vs. Remote-Dateien

In den meisten Bereichen des Lernbereichs empfehlen wir, Ihre Beispiele direkt in einem Browser zu öffnen — dies kann durch Doppelklicken auf die HTML-Datei, durch Ziehen und Ablegen in das Browserfenster oder durch Auswählen von _Datei_ > _Öffnen…_ und Navigieren zur HTML-Datei geschehen. Es gibt viele Möglichkeiten, dies zu erreichen.

Wenn der Pfad der Webadresse mit `file://` gefolgt vom Pfad zur Datei auf Ihrer lokalen Festplatte beginnt, wird eine lokale Datei verwendet. Im Gegensatz dazu, wenn Sie eines unserer auf GitHub gehosteten Beispiele (oder ein Beispiel auf einem anderen Remote-Server) anzeigen, beginnt die Webadresse mit `http://` oder `https://`, um zu zeigen, dass die Datei über HTTP empfangen wurde.

## Das Problem beim Testen lokaler Dateien

Einige Beispiele funktionieren nicht, wenn Sie sie als lokale Dateien öffnen. Dies kann aus verschiedenen Gründen der Fall sein, wobei die wahrscheinlichsten Gründe sind:

- **Sie enthalten asynchrone Anfragen**. Einige Browser (einschließlich Chrome) führen keine asynchronen Anfragen aus (siehe [Lernen: Netzwerk-Anfragen mit JavaScript](/de/docs/Learn_web_development/Core/Scripting/Network_requests)), wenn Sie das Beispiel nur von einer lokalen Datei ausführen. Der Grund dafür sind Sicherheitsbeschränkungen (lesen Sie mehr über Websicherheit in [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)).
- **Sie verwenden eine serverseitige Sprache**. Serverseitige Sprachen (wie PHP oder Python) erfordern einen speziellen Server, um den Code zu interpretieren und die Ergebnisse zu liefern.
- **Sie enthalten andere Dateien**. Browser behandeln Anfragen zum Laden von Ressourcen unter dem `file://`-Schema häufig als Cross-Origin-Anfragen. Wenn Sie also eine lokale Datei laden, die andere lokale Dateien enthält, kann dies einen {{Glossary("CORS", "CORS")}}-Fehler auslösen.

## Einen einfachen lokalen HTTP-Server betreiben

Um das Problem von asynchronen Anfragen zu umgehen, müssen wir solche Beispiele testen, indem wir sie über einen lokalen Webserver ausführen.

### Verwendung einer Erweiterung in Ihrem Code-Editor

Wenn Sie nur HTML, CSS und JavaScript und keine serverseitige Sprache benötigen, ist es am einfachsten, nach Erweiterungen in Ihrem Code-Editor zu suchen. Neben der automatischen Installation und Einrichtung Ihres lokalen HTTP-Servers integrieren sie sich auch gut mit Ihren Code-Editoren. Lokale Dateien in einem HTTP-Server zu testen, kann nur einen Klick entfernt sein.

Für VS Code probieren Sie die folgenden kostenlosen Erweiterungen aus:

- [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server)
- [Preview on Web Server](https://marketplace.visualstudio.com/items?itemName=yuichinukiyama.vscode-preview-server)

### Verwendung von Node.js

Das Node.js-`http-server`-Modul ist eine der einfachsten Möglichkeiten, HTML-Dateien in einem beliebigen Verzeichnis zu hosten.

Um das Modul zu verwenden:

1. Führen Sie die folgenden Befehle aus, um zu überprüfen, ob Node.js bereits installiert ist:

   ```bash
   node -v
   npm -v
   npx -v
   ```

2. Wenn Node.js nicht installiert ist, müssen Sie es installieren. Folgen Sie den [Download-Anweisungen](https://nodejs.org/en/download) in der Node.js-Dokumentation und führen Sie die obigen Befehle erneut aus, um zu überprüfen, ob die Installation erfolgreich war.

3. Gehen wir davon aus, dass das Verzeichnis `/path/to/project` ist. Führen Sie den folgenden Befehl aus, um den Server zu starten:

   ```bash
   npx http-server /path/to/project -o -p 9999
   ```

   Dadurch werden alle Dateien im Verzeichnis `/path/to/project` auf `localhost:9999` gehostet. Die Option `-o` öffnet die `index.html`-Seite in einem Webbrowser. Wenn `index.html` nicht existiert, wird stattdessen das Verzeichnis angezeigt.

### Verwendung von Python

Eine andere Möglichkeit besteht darin, das Python-`http.server`-Modul zu verwenden.

> [!NOTE]
> Ältere Versionen von Python (bis Version 2.7) boten ein ähnliches Modul namens `SimpleHTTPServer`. Da Python 2 bereits das Ende des Lebenszyklus erreicht hat, empfehlen wir die Verwendung von Python 3.

Um dies zu tun:

1. Führen Sie den folgenden Befehl aus, um zu überprüfen, ob Python installiert ist:

   ```bash
   python -V
   # If the above fails, try:
   python3 -V
   # Or, if the "py" command is available, try:
   py -3 -V
   ```

2. Wenn Python nicht installiert ist, müssen Sie es installieren. Folgen Sie den [Download-Anweisungen](https://www.python.org/downloads/) in der Python-Dokumentation (wir haben auch detailliertere Erklärungen in unserem [Django-Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#installing_python_3)), und führen Sie die obigen Befehle erneut aus, um zu überprüfen, ob die Installation erfolgreich war.

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

5. Standardmäßig wird der Inhalt des Verzeichnisses auf einem lokalen Webserver auf Port 8000 ausgeführt. Sie können zu diesem Server gelangen, indem Sie die URL `localhost:8000` in Ihrem Webbrowser aufrufen. Dort sehen Sie den aufgelisteten Inhalt des Verzeichnisses — klicken Sie auf die HTML-Datei, die Sie ausführen möchten.

> [!NOTE]
> Wenn Sie bereits etwas auf Port 8000 laufen haben, können Sie einen anderen Port wählen, indem Sie den Serverbefehl gefolgt von einer alternativen Portnummer ausführen, z.B. `python3 -m http.server 7800`. Sie können dann auf Ihre Inhalte über `localhost:7800` zugreifen.

## Serverseitige Sprachen lokal ausführen

Der beste Ansatz für die Arbeit mit serverseitigen Sprachen wie Python, PHP oder JavaScript hängt von der serverseitigen Sprache ab, die Sie verwenden, und davon, ob Sie mit einem Web-Framework oder einem „stand-alone“ Code arbeiten.

Wenn Sie mit einem Web-Framework arbeiten, stellt das Framework in der Regel seinen eigenen Entwicklungsserver bereit.
Beispielsweise bieten die folgenden Sprachen/Frameworks einen Entwicklungsserver:

- Python-Web-Frameworks wie [Django](/de/docs/Learn_web_development/Extensions/Server-side/Django), [Flask](https://flask.palletsprojects.com/) und [Pyramid](https://trypyramid.com/).
- Node/JavaScript-Frameworks wie [Express Web Framework (Node.js/JavaScript)](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)
- PHP hat seinen eigenen [integrierten Entwicklungsserver](https://www.php.net/manual/en/features.commandline.webserver.php):

  ```bash
  cd path/to/your/php/code
  php -S localhost:8000
  ```

Wenn Sie nicht direkt mit einem serverseitigen Framework oder einer Programmiersprache arbeiten, die einen Entwicklungsserver bereitstellt, kann das Python-`http.server`-Modul ebenfalls verwendet werden, um serverseitigen Code zu testen, der in Sprachen wie Python, PHP, JavaScript usw. geschrieben ist, indem Common Gateway Interface (CGI)-Skripte aufgerufen werden.
Für Beispiele, wie Sie diese Funktion nutzen können, siehe [Execute a Script Remotely Through the Common Gateway Interface (CGI)](https://realpython.com/python-http-server/#execute-a-script-remotely-through-the-common-gateway-interface-cgi) in _How to Launch an HTTP Server in One Line of Python Code_ auf realpython.com.
