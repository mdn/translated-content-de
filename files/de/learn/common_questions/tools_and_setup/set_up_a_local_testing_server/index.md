---
title: Wie richtet man einen lokalen Testserver ein?
slug: Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Dieser Artikel erklärt, wie Sie einen einfachen lokalen Testserver auf Ihrem Computer einrichten und die Grundlagen zur Nutzung desselben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie müssen zunächst wissen,
        <a href="/de/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work"
          >wie das Internet funktioniert</a
        > und
        <a href="/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server"
          >was ein Webserver ist</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>Sie lernen, wie man einen lokalen Testserver einrichtet.</td>
    </tr>
  </tbody>
</table>

## Lokale Dateien vs. Remote-Dateien

In den meisten Teilen des Lernbereichs sagen wir Ihnen, dass Sie Ihre Beispiele einfach direkt in einem Browser öffnen sollen – das kann geschehen, indem Sie die HTML-Datei doppelklicken, sie in das Browserfenster ziehen und ablegen oder _Datei_ > _Öffnen..._ auswählen und zur HTML-Datei navigieren. Es gibt viele Möglichkeiten, dies zu erreichen.

Wenn der Webadressenpfad mit `file://` gefolgt vom Pfad zur Datei auf Ihrer lokalen Festplatte beginnt, wird eine lokale Datei verwendet. Im Gegensatz dazu, wenn Sie eines unserer Beispiele auf GitHub (oder ein Beispiel auf einem anderen Remote-Server) betrachten, beginnt die Webadresse mit `http://` oder `https://`, um zu zeigen, dass die Datei über HTTP empfangen wurde.

## Das Problem beim Testen lokaler Dateien

Einige Beispiele funktionieren nicht, wenn Sie sie als lokale Dateien öffnen. Dies kann aus verschiedenen Gründen geschehen, wobei der wahrscheinlichste ist:

- **Sie beinhalten asynchrone Anfragen**. Manche Browser (einschließlich Chrome) führen keine asynchronen Anfragen aus (siehe [Daten vom Server abrufen](/de/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)), wenn Sie das Beispiel einfach von einer lokalen Datei ausführen. Das liegt an Sicherheitsbeschränkungen (mehr zu Web-Sicherheit erfahren Sie unter [Webseitensicherheit](/de/docs/Learn/Server-side/First_steps/Website_security)).
- **Sie verwenden eine serverseitige Sprache**. Serverseitige Sprachen (wie PHP oder Python) erfordern einen speziellen Server, um den Code zu interpretieren und die Ergebnisse zu liefern.
- **Sie beinhalten andere Dateien**. Browser behandeln Anfragen zum Laden von Ressourcen mit dem `file://`-Schema häufig als Cross-Origin-Anfragen. Wenn Sie also eine lokale Datei laden, die andere lokale Dateien einschließt, könnte dies einen {{Glossary("CORS", "CORS")}}-Fehler auslösen.

## Ausführen eines einfachen lokalen HTTP-Servers

Um das Problem mit asynchronen Anfragen zu umgehen, müssen wir solche Beispiele testen, indem wir sie über einen lokalen Webserver ausführen.

### Verwenden einer Erweiterung in Ihrem Code-Editor

Wenn Sie nur HTML, CSS und JavaScript und keine serverseitige Sprache benötigen, ist der einfachste Weg, nach Erweiterungen in Ihrem Code-Editor zu suchen. Diese automatisieren nicht nur die Installation und Einrichtung Ihres lokalen HTTP-Servers, sondern integrieren sich auch gut in Ihre Code-Editoren. Das Testen lokaler Dateien in einem HTTP-Server ist möglicherweise nur einen Klick entfernt.

Für VS Code können Sie die folgende kostenlose Erweiterung überprüfen:

- `vscode-preview-server`. Sie können sie auf ihrer [Homepage](https://marketplace.visualstudio.com/items?itemName=yuichinukiyama.vscode-preview-server) ansehen.

### Verwendung von Node.js

Das Node.js-`http-server`-Modul ist der einfachste Weg, um HTML-Dateien in einem beliebigen Verzeichnis zu hosten.

Um das Modul zu verwenden:

1. Führen Sie die folgenden Befehle aus, um zu überprüfen, ob Node.js bereits installiert ist:

   ```bash
   node -v
   npm -v
   npx -v
   ```

2. Wenn Node.js nicht installiert ist, müssen Sie es installieren. Befolgen Sie die [Download-Anweisungen](https://nodejs.org/en/download/package-manager) in den Node.js-Dokumenten und führen Sie dann die obigen Befehle erneut aus, um zu überprüfen, ob die Installation erfolgreich war.

3. Gehen wir davon aus, dass das Verzeichnis `/path/to/project` ist. Führen Sie den folgenden Befehl aus, um den Server zu starten:

   ```bash
   npx http-server /path/to/project -o -p 9999
   ```

   Dies hostet alle Dateien im Verzeichnis `/path/to/project` auf `localhost:9999`. Die Option `-o` öffnet die `index.html`-Seite in einem Webbrowser. Wenn `index.html` nicht existiert, wird stattdessen das Verzeichnis angezeigt.

### Verwendung von Python

Eine weitere Möglichkeit, dies zu erreichen, ist die Verwendung von Pythons `http.server`-Modul.

> [!NOTE]
> Ältere Versionen von Python (bis Version 2.7) boten ein ähnliches Modul namens `SimpleHTTPServer`. Python 2 ist bereits am Ende seines Lebenszyklus, weshalb wir die Verwendung von Python 3 empfehlen.

Um dies zu tun:

1. Führen Sie den folgenden Befehl aus, um zu prüfen, ob Python bereits installiert ist:

   ```bash
   python -V
   # If the above fails, try:
   python3 -V
   # Or, if the "py" command is available, try:
   py -3 -V
   ```

2. Wenn Python nicht installiert ist, müssen Sie es installieren. Folgen Sie den [Download-Anweisungen](https://www.python.org/downloads/) in den Python-Dokumenten (wir haben auch ausführlichere Erklärungen in unserem [Django-Tutorial](/de/docs/Learn/Server-side/Django/development_environment#installing_python_3)), und führen Sie dann die obigen Befehle erneut aus, um zu prüfen, ob die Installation erfolgreich war.

3. Wenn Python eingerichtet ist, navigieren Sie mit dem Befehl `cd` zum Verzeichnis, das den Website-Code enthält, den Sie testen möchten.

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

5. Standardmäßig werden dadurch die Inhalte des Verzeichnisses auf einem lokalen Webserver auf Port 8000 ausgeführt. Sie können zu diesem Server gehen, indem Sie in Ihrem Webbrowser die URL `localhost:8000` aufrufen. Hier sehen Sie die aufgelisteten Inhalte des Verzeichnisses – klicken Sie auf die HTML-Datei, die Sie ausführen möchten.

> [!NOTE]
> Wenn bereits etwas auf Port 8000 läuft, können Sie einen anderen Port wählen, indem Sie den Serverbefehl gefolgt von einer alternativen Portnummer ausführen, z.B. `python3 -m http.server 7800`. Sie können dann auf Ihren Inhalt unter `localhost:7800` zugreifen.

## Serverseitige Sprachen lokal ausführen

Der beste Ansatz für die Arbeit mit serverseitigen Sprachen wie Python, PHP oder JavaScript hängt von der serverseitigen Sprache ab, die Sie verwenden, und davon, ob Sie mit einem Web-Framework oder "stand-alone"-Code arbeiten.

Wenn Sie mit einem Web-Framework arbeiten, bietet das Framework in der Regel seinen eigenen Entwicklungsserver. Zum Beispiel kommen die folgenden Sprachen/Frameworks mit einem Entwicklungsserver:

- Python-Web-Frameworks wie [Django](/de/docs/Learn/Server-side/Django), [Flask](https://flask.palletsprojects.com/) und [Pyramid](https://trypyramid.com/).
- Node/JavaScript-Frameworks wie [Express Web Framework (Node.js/JavaScript)](/de/docs/Learn/Server-side/Express_Nodejs)
- PHP hat seinen eigenen [integrierten Entwicklungsserver](https://www.php.net/manual/en/features.commandline.webserver.php):

  ```bash
  cd path/to/your/php/code
  php -S localhost:8000
  ```

Wenn Sie nicht direkt mit einem serverseitigen Framework oder einer Programmiersprache arbeiten, das einen Entwicklungsserver bietet, kann das Pythons `http.server`-Modul ebenfalls genutzt werden, um serverseitigen Code zu testen, der in Sprachen wie Python, PHP, JavaScript usw. geschrieben ist, indem serverseitige Common Gateway Interface (CGI)-Skripte aufgerufen werden. Beispiele für die Verwendung dieser Funktion finden Sie unter [Execute a Script Remotely Through the Common Gateway Interface (CGI)](https://realpython.com/python-http-server/#execute-a-script-remotely-through-the-common-gateway-interface-cgi) in _How to Launch an HTTP Server in One Line of Python Code_ auf realpython.com.
