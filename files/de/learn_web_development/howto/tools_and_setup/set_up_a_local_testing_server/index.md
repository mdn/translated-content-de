---
title: Wie richtet man einen lokalen Testserver ein?
slug: Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{QuicklinksWithSubPages("/de/docs/Learn_web_development/Howto")}}

Dieser Artikel erklärt, wie Sie einen einfachen lokalen Testserver auf Ihrem Rechner einrichten und die Grundlagen zur Nutzung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie müssen zunächst wissen,
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

## Lokale Dateien vs. Remote-Dateien

In den meisten Bereichen des Lernens empfehlen wir Ihnen, Ihre Beispiele direkt in einem Browser zu öffnen – dies kann durch Doppelklick auf die HTML-Datei, Ziehen und Ablegen in das Browserfenster oder durch Auswahl von _Datei_ > _Öffnen…_ und Navigation zur HTML-Datei erfolgen. Es gibt viele Möglichkeiten, dies zu erreichen.

Wenn der Webadresspfad mit `file://` beginnt, gefolgt vom Pfad zur Datei auf Ihrem lokalen Laufwerk, wird eine lokale Datei verwendet. Im Gegensatz dazu, wenn Sie eines unserer Beispiele auf GitHub (oder ein Beispiel auf einem anderen Remote-Server) ansehen, beginnt die Webadresse mit `http://` oder `https://`, um zu zeigen, dass die Datei über HTTP empfangen wurde.

## Das Problem mit dem Testen lokaler Dateien

Einige Beispiele funktionieren nicht, wenn Sie sie als lokale Dateien öffnen. Dies kann aus verschiedenen Gründen geschehen, wobei der wahrscheinlichste ist:

- **Sie enthalten asynchrone Anfragen**. Einige Browser (einschließlich Chrome) führen keine asynchronen Anfragen aus (siehe [Lernen: Netzwerkanfragen mit JavaScript stellen](/de/docs/Learn_web_development/Core/Scripting/Network_requests)), wenn Sie das Beispiel einfach aus einer lokalen Datei ausführen. Dies liegt an Sicherheitsbeschränkungen (für mehr zur Websicherheit lesen Sie [Websicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)).
- **Sie verwenden eine serverseitige Sprache**. Serverseitige Sprachen (wie PHP oder Python) benötigen einen speziellen Server, um den Code zu interpretieren und die Ergebnisse zu liefern.
- **Sie beinhalten andere Dateien**. Browser behandeln Anfragen zum Laden von Ressourcen mit dem `file://`-Schema in der Regel als Cross-Origin-Anfragen. Wenn Sie also eine lokale Datei laden, die andere lokale Dateien einschließt, kann dies einen {{Glossary("CORS", "CORS")}}-Fehler auslösen.

## Einen einfachen lokalen HTTP-Server betreiben

Um das Problem der asynchronen Anfragen zu umgehen, müssen wir solche Beispiele testen, indem wir sie über einen lokalen Webserver ausführen.

### Verwendung einer Erweiterung in Ihrem Code-Editor

Wenn Sie nur HTML, CSS und JavaScript benötigen und keine serverseitige Sprache, ist es am einfachsten, nach Erweiterungen in Ihrem Code-Editor zu suchen. Diese automatisieren die Installation und Einrichtung für Ihren lokalen HTTP-Server und integrieren sich gut mit Ihren Code-Editoren. Das Testen lokaler Dateien in einem HTTP-Server ist möglicherweise nur einen Klick entfernt.

Für VS Code, probieren Sie die folgenden kostenlosen Erweiterungen aus:

- [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server)
- [Preview on Web Server](https://marketplace.visualstudio.com/items?itemName=yuichinukiyama.vscode-preview-server)

### Verwendung von Node.js

Das Node.js [`http-server`](https://www.npmjs.com/package/http-server)-Modul ist eine der einfachsten Möglichkeiten, HTML-Dateien in einem beliebigen Verzeichnis zu hosten.

Um das Modul zu verwenden:

1. Führen Sie die folgenden Befehle aus, um zu überprüfen, ob Node.js bereits installiert ist:

   ```bash
   node -v
   npm -v
   npx -v
   ```

2. Wenn Node.js nicht installiert ist, müssen Sie es installieren. Folgen Sie den [Download-Anweisungen](https://nodejs.org/en/download) in der Node.js-Dokumentation und führen Sie dann die obigen Befehle erneut aus, um zu überprüfen, ob die Installation erfolgreich war.

3. Nehmen wir an, das Verzeichnis ist `/path/to/project`. Führen Sie den folgenden Befehl aus, um den Server zu starten:

   ```bash
   npx http-server /path/to/project -o -p 9999
   ```

   Dies hostet alle Dateien im Verzeichnis `/path/to/project` auf `localhost:9999`. Die Option `-o` wird die `index.html`-Seite in einem Webbrowser öffnen. Wenn `index.html` nicht existiert, wird stattdessen das Verzeichnis angezeigt.

### Verwendung von Python

Eine weitere Möglichkeit ist die Nutzung des `http.server`-Moduls von Python.

> [!NOTE]
> Ältere Versionen von Python (bis Version 2.7) boten ein ähnliches Modul namens `SimpleHTTPServer`. Python 2 ist bereits am Ende seines Lebenszyklus, deshalb empfehlen wir die Verwendung von Python 3.

Um dies zu tun:

1. Führen Sie den folgenden Befehl aus, um zu überprüfen, ob Python bereits installiert ist:

   ```bash
   python -V
   # If the above fails, try:
   python3 -V
   # Or, if the "py" command is available, try:
   py -3 -V
   ```

2. Wenn Python nicht installiert ist, müssen Sie es installieren. Folgen Sie den [Download-Anweisungen](https://www.python.org/downloads/) in der Python-Dokumentation (wir haben auch detailliertere Erklärungen in unserem [Django-Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#installing_python_3)), und führen Sie dann die obigen Befehle erneut aus, um zu überprüfen, ob die Installation erfolgreich war.

3. Wenn Python eingerichtet ist, navigieren Sie mit dem `cd`-Befehl zu dem Verzeichnis, das den zu testenden Website-Code enthält.

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

5. Standardmäßig wird dadurch der Inhalt des Verzeichnisses auf einem lokalen Webserver auf Port 8000 ausgeführt. Sie können zu diesem Server gelangen, indem Sie in Ihrem Webbrowser zur URL `localhost:8000` gehen. Dort sehen Sie die aufgelisteten Inhalte des Verzeichnisses – klicken Sie auf die HTML-Datei, die Sie ausführen möchten.

> [!NOTE]
> Wenn bereits etwas auf Port 8000 läuft, können Sie einen anderen Port wählen, indem Sie den Server-Befehl gefolgt von einer alternativen Portnummer ausführen, z.B. `python3 -m http.server 7800`. Sie können dann auf Ihre Inhalte unter `localhost:7800` zugreifen.

## Ausführung serverseitiger Sprachen lokal

Der beste Ansatz, um mit serverseitigen Sprachen wie Python, PHP oder JavaScript zu arbeiten, hängt von der verwendeten Sprache und davon ab, ob Sie mit einem Web-Framework oder unabhängigem Code arbeiten.

Wenn Sie mit einem Web-Framework arbeiten, stellt das Framework in der Regel seinen eigenen Entwicklungsserver zur Verfügung.
Zum Beispiel haben die folgenden Sprachen/Frameworks einen Entwicklungsserver:

- Python-Web-Frameworks wie [Django](/de/docs/Learn_web_development/Extensions/Server-side/Django), [Flask](https://flask.palletsprojects.com/) und [Pyramid](https://trypyramid.com/).
- Node/JavaScript-Frameworks wie [Express Web Framework (Node.js/JavaScript)](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)
- PHP hat seinen eigenen [integrierten Entwicklungsserver](https://www.php.net/manual/en/features.commandline.webserver.php):

  ```bash
  cd path/to/your/php/code
  php -S localhost:8000
  ```

Wenn Sie nicht direkt mit einem serverseitigen Framework oder einer Programmiersprache arbeiten, die einen Entwicklungsserver bereitstellt, kann das `http.server`-Modul von Python auch verwendet werden, um serverseitigen Code zu testen, der in Sprachen wie Python, PHP, JavaScript usw. geschrieben ist, indem serverseitige Common Gateway Interface (CGI)-Scripts aufgerufen werden.
Für Beispiele, wie diese Funktion zu nutzen ist, siehe [Ein Script über das Common Gateway Interface (CGI) remote ausführen](https://realpython.com/python-http-server/#execute-a-script-remotely-through-the-common-gateway-interface-cgi) in _How to Launch an HTTP Server in One Line of Python Code_ auf realpython.com.
