---
title: Welche Software benötige ich, um eine Website zu erstellen?
slug: Learn_web_development/Howto/Tools_and_setup/What_software_do_I_need
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{QuicklinksWithSubPages("/de/docs/Learn_web_development/Howto")}}

In diesem Artikel legen wir dar, welche Softwarekomponenten Sie benötigen, wenn Sie eine Website bearbeiten, hochladen oder anzeigen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten bereits wissen
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web"
          >den Unterschied zwischen Webseiten, Websites, Webservern und Suchmaschinen.</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, welche Softwarekomponenten Sie benötigen, wenn Sie eine Website bearbeiten, hochladen oder anzeigen möchten.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Die meisten Programme, die Sie für die Webentwicklung benötigen, können Sie kostenlos herunterladen. Wir werden in diesem Artikel einige Links bereitstellen.

Sie benötigen Werkzeuge zum:

- Erstellen und Bearbeiten von Webseiten
- Hochladen von Dateien auf Ihren Webserver
- Anzeigen Ihrer Website

Fast alle Betriebssysteme beinhalten standardmäßig einen Texteditor und einen Browser, die Sie zum Anzeigen von Websites verwenden können. In der Regel müssen Sie daher nur Software erwerben, um Dateien auf Ihren Webserver zu übertragen.

## Aktives Lernen

_Derzeit ist kein aktives Lernen verfügbar. [Bitte ziehen Sie in Betracht, einen Beitrag zu leisten](/de/docs/MDN/Community/Getting_started)._

## Vertiefen Sie Ihr Wissen

### Erstellen und Bearbeiten von Webseiten

Um eine Website zu erstellen und zu bearbeiten, benötigen Sie einen Texteditor. Texteditoren erstellen und ändern unformatierte Textdateien. Andere Formate, wie **{{Glossary("RTF", "RTF")}}**, ermöglichen das Hinzufügen von Formatierungen, wie Fett oder Unterstreichen. Diese Formate sind nicht geeignet, um Webseiten zu schreiben. Sie sollten sorgfältig überlegen, welchen Texteditor Sie verwenden, da Sie viel damit arbeiten werden, während Sie die Website entwickeln.

Alle Desktop-Betriebssysteme verfügen über einen grundlegenden Texteditor. Diese Editoren sind alle unkompliziert, bieten jedoch keine speziellen Funktionen für das Codieren von Webseiten. Wenn Sie etwas Anspruchsvolleres möchten, stehen zahlreiche Drittanbieter-Tools zur Verfügung. Drittanbieter-Editoren bieten oft zusätzliche Funktionen, darunter Syntaxfärbung, Autovervollständigung, zusammenklappbare Abschnitte und Codesuche. Hier ist eine kurze Liste von Editoren:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Betriebssystem</th>
      <th scope="col">Integrierter Editor</th>
      <th scope="col">Drittanbieter-Editor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Windows</td>
      <td>
        <ul>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Notepad_%28software%29"
              rel="external"
              >Notepad</a
            >
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li><a href="https://notepad-plus-plus.org/">Notepad++</a></li>
          <li>
            <a href="https://visualstudio.microsoft.com/">Visual Studio Code</a>
          </li>
          <li><a href="https://www.jetbrains.com/webstorm/">Web Storm</a></li>
          <li><a href="https://brackets.io/">Brackets</a></li>
          <li><a href="https://shiftedit.net/">ShiftEdit</a></li>
          <li><a href="https://www.sublimetext.com/">Sublime Text</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Mac OS</td>
      <td>
        <ul>
          <li>
            <a href="https://en.wikipedia.org/wiki/TextEdit" rel="external"
              >TextEdit</a
            >
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li>
            <a href="https://www.barebones.com/products/textwrangler/"
              >TextWrangler</a
            >
          </li>
          <li>
            <a href="https://visualstudio.microsoft.com/">Visual Studio Code</a>
          </li>
          <li><a href="https://brackets.io/">Brackets</a></li>
          <li><a href="https://shiftedit.net/">ShiftEdit</a></li>
          <li><a href="https://www.sublimetext.com/">Sublime Text</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Linux</td>
      <td>
        <ul>
          <li>
            <a href="https://en.wikipedia.org/wiki/Vi_(text_editor)" rel="external">Vi</a>
            (Alle UNIX)
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Gedit" rel="external"
              >GEdit</a
            >
            (GNOME)
          </li>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Kate_%28text_editor%29"
              rel="external"
              >Kate</a
            >
            (KDE)
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Leafpad" rel="external"
              >LeafPad</a
            >
            (Xfce)
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li><a href="https://www.gnu.org/software/emacs/">Emacs</a></li>
          <li><a href="https://www.vim.org/" rel="external">VIM</a></li>
          <li>
            <a href="https://visualstudio.microsoft.com/">Visual Studio Code</a>
          </li>
          <li><a href="https://brackets.io/">Brackets</a></li>
          <li><a href="https://shiftedit.net/">ShiftEdit</a></li>
          <li><a href="https://www.sublimetext.com/">Sublime Text</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>ChromeOS</td>
      <td>
        <ul>
          <li><a href="https://en.wikipedia.org/wiki/Text_(Chrome_app)">Text</a></li>
        </ul>
      </td>
      <td>
        <ul>
          <li><a href="https://shiftedit.net/">ShiftEdit</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Hier ist ein Screenshot eines fortgeschrittenen Texteditors:

![Screenshot von Notepad++.](notepadplusplus.png)

Hier ist ein Screenshot eines Online-Texteditors:

![Screenshot von ShiftEdit](shiftedit.png)

### Dateien im Web hochladen

Wenn Ihre Website für die öffentliche Anzeige bereit ist, müssen Sie Ihre Webseiten auf Ihren Webserver hochladen. Sie können Speicherplatz auf einem Server von verschiedenen Anbietern erwerben (siehe [Was kostet es, etwas im Web zu machen?](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost)). Sobald Sie sich für einen Anbieter entschieden haben, wird dieser Ihnen die Zugangsdaten per E-Mail zusenden, in der Regel in Form einer SFTP-URL, eines Benutzernamens, eines Passworts und anderer Informationen, die für die Verbindung mit ihrem Server erforderlich sind. Beachten Sie, dass (S)FTP inzwischen etwas altmodisch ist und andere Hochladesysteme in Mode kommen, wie zum Beispiel [RSync](https://en.wikipedia.org/wiki/Rsync) und [Git/GitHub](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

> [!NOTE]
> FTP ist von Natur aus unsicher. Sie sollten sicherstellen, dass Ihr Hosting-Anbieter die Nutzung einer sicheren Verbindung erlaubt, zum Beispiel SFTP oder RSync über SSH.

Das Hochladen von Dateien auf einen Webserver ist ein sehr wichtiger Schritt bei der Erstellung einer Website, daher decken wir es im Detail in [einem separaten Artikel](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server) ab. Zurzeit hier eine kurze Liste von kostenlosen grundlegenden (S)FTP-Clients:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Betriebssystem</th>
      <th colspan="2" scope="col">FTP-Software</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Windows</td>
      <td>
        <ul>
          <li><a href="https://winscp.net">WinSCP</a></li>
          <li><a href="https://mobaxterm.mobatek.net/">Moba Xterm</a></li>
        </ul>
      </td>
      <td rowspan="3">
        <ul>
          <li>
            <a href="https://filezilla-project.org/">FileZilla</a> (Alle OS)
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Linux</td>
      <td>
        <ul>
          <li>
            <a
              href="https://apps.gnome.org/en/Nautilus/"
              rel="external"
              >Nautilus/Files</a
            >
            (GNOME)
          </li>
          <li>
            <a href="https://dolphin.com/" rel="external">Dolphin</a> (KDE)
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Mac OS</td>
      <td>
        <ul>
          <li><a href="https://cyberduck.de/">Cyberduck</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>ChromeOS</td>
      <td>
        <ul>
          <li><a href="https://shiftedit.net/">ShiftEdit</a> (Alle OS)</li>
        </ul>
      </td>
      <td></td>
    </tr>
  </tbody>
</table>

### Websites testen

Es gibt [viele Webbrowser](https://en.wikipedia.org/wiki/List_of_web_browsers). Wenn Sie eine Website entwickeln, sollten Sie diese mindestens mit den folgenden wichtigen Browsern sowohl auf Desktop- als auch auf mobilen Plattformen testen, um sicherzustellen, dass Ihre Website für die meisten Menschen funktioniert:

- [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/)
- [Google Chrome](https://www.google.com/chrome/)
- [Apple Safari](https://www.apple.com/safari/)

Wenn Sie auf eine bestimmte Zielgruppe abzielen (z.B. technische Plattform oder Lokalisierung), müssen Sie die Website möglicherweise mit zusätzlichen Browsern testen, wie z.B. [UC Browser](https://www.ucweb.com/) oder [Opera Mini](https://www.opera.com/mini).

Das Testen wird kompliziert, weil einige Browser nur auf bestimmten Betriebssystemen laufen. Insbesondere läuft Apple Safari auf iOS, iPadOS und macOS. Es ist am besten, Dienste wie [Browsershots](https://browsershots.org/) oder [Browserstack](https://www.browserstack.com/) zu nutzen. Browsershots erstellt Screenshots Ihrer Website, wie sie in verschiedenen Browsern aussehen wird. Browserstack gibt Ihnen vollen Fernzugriff auf virtuelle Maschinen, sodass Sie Ihre Website in den gängigsten Umgebungen und auf verschiedenen Betriebssystemen testen können. Alternativ können Sie Ihre eigenen virtuellen Maschinen einrichten, aber das erfordert einige Expertise.

Siehe [Strategien zur Durchführung von Tests: Ein Testlabor einrichten](/de/docs/Learn_web_development/Extensions/Testing/Testing_strategies#putting_together_a_testing_lab) für weitere Informationen.

Führen Sie unbedingt einige Tests auf einem realen Gerät durch, insbesondere auf echten mobilen Geräten. Mobile Geräte kosten natürlich Geld, daher empfehlen wir, Geräte in einem Team zu teilen, wenn Sie auf vielen Plattformen testen möchten, ohne zu viel auszugeben. Für skalierbare Cloud-Zugriffe auf reale Gerätetests empfehlen wir auch, einen Blick auf [App Live: BrowserStack's Interactive Mobile App Testing platform](https://www.browserstack.com/app-live) zu werfen.

## Nächste Schritte

- Einige dieser Software ist kostenlos, aber nicht alle. [Finden Sie heraus, wie viel es kostet, etwas im Web zu machen](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost).
- Wenn Sie mehr über Texteditoren erfahren möchten, lesen Sie unseren Artikel über [wie man einen Texteditor auswählt und installiert](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors).
- Wenn Sie sich fragen, wie Sie Ihre Website im Web veröffentlichen können, schauen Sie in der ["Anleitung zum Hochladen von Dateien auf einen Webserver"](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server) nach.
