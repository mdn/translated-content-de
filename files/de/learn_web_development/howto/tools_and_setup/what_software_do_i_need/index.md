---
title: Welche Software benötige ich, um eine Website zu erstellen?
slug: Learn_web_development/Howto/Tools_and_setup/What_software_do_I_need
l10n:
  sourceCommit: a52689c74c6c89f45c54447bb148e54ed320db62
---

{{QuicklinksWithSubPages("/de/docs/Learn_web_development/Howto")}}

In diesem Artikel erläutern wir, welche Softwarekomponenten Sie benötigen, wenn Sie eine Website bearbeiten, hochladen oder anzeigen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten bereits den
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web"
          >Unterschied zwischen Webseiten, Websites, Webservern und
          Suchmaschinen</a
        >
        kennen.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erfahren Sie, welche Softwarekomponenten Sie benötigen, um eine Website zu bearbeiten, hochzuladen oder anzuzeigen.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Die meisten Programme, die Sie für die Webentwicklung benötigen, können Sie kostenlos herunterladen. Wir werden in diesem Artikel einige Links bereitstellen.

Sie benötigen Werkzeuge, um:

- Webseiten zu erstellen und zu bearbeiten
- Dateien auf Ihren Webserver hochzuladen
- Ihre Website anzuzeigen

Fast alle Betriebssysteme enthalten standardmäßig einen Texteditor und einen Browser, mit dem Sie Websites anzeigen können. Daher müssen Sie in der Regel nur Software zum Übertragen von Dateien auf Ihren Webserver erwerben.

## Aktives Lernen

_Es gibt noch keine aktive Lernmöglichkeit. [Bitte ziehen Sie in Betracht beizutragen](/de/docs/MDN/Community/Getting_started)._

## Gründlicher erkunden

### Erstellen und Bearbeiten von Webseiten

Um eine Website zu erstellen und zu bearbeiten, benötigen Sie einen Texteditor. Texteditoren erstellen und bearbeiten unformatierte Textdateien. Andere Formate, wie **{{Glossary("RTF", "RTF")}}**, ermöglichen es Ihnen, Formatierungen wie fett oder unterstrichen hinzuzufügen. Diese Formate eignen sich nicht zum Schreiben von Webseiten. Sie sollten sich Gedanken darüber machen, welchen Texteditor Sie verwenden, da Sie intensiv damit arbeiten werden, während Sie die Website erstellen.

Alle Desktop-Betriebssysteme verfügen über einen grundlegenden Texteditor. Diese Editoren sind alle unkompliziert, bieten jedoch keine speziellen Funktionen für das Codieren von Webseiten. Wenn Sie etwas anspruchsvolleres wünschen, gibt es viele Drittanbieter-Tools. Drittanbieter-Editoren bieten oft zusätzliche Funktionen wie Syntaxfärbung, Autovervollständigung, zusammenklappbare Abschnitte und Codesuche. Hier ist eine kurze Liste von Editoren:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Betriebssystem</th>
      <th scope="col">Eingebauter Editor</th>
      <th scope="col">Editor von Drittanbietern</th>
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

Wenn Ihre Website bereit ist, veröffentlicht zu werden, müssen Sie Ihre Webseiten auf Ihren Webserver hochladen. Sie können von verschiedenen Anbietern Speicherplatz auf einem Server kaufen (siehe [Was kostet es, etwas im Web zu tun?](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost)). Sobald Sie sich für einen Anbieter entschieden haben, sendet dieser Ihnen die Zugangsdaten, in der Regel in Form einer SFTP-URL, eines Benutzernamens, eines Passworts und weiterer Informationen, die zur Verbindung mit ihrem Server erforderlich sind. Beachten Sie, dass (S)FTP mittlerweile etwas altmodisch ist und andere Upload-Systeme an Beliebtheit gewinnen, wie etwa [RSync](https://en.wikipedia.org/wiki/Rsync) und [Git/GitHub](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

> [!NOTE]
> FTP ist von Natur aus unsicher. Sie sollten sicherstellen, dass Ihr Hosting-Anbieter die Verwendung einer sicheren Verbindung ermöglicht, z. B. SFTP oder RSync über SSH.

Das Hochladen von Dateien auf einen Webserver ist ein sehr wichtiger Schritt beim Erstellen einer Website, daher decken wir dies ausführlich in [einem separaten Artikel](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server) ab. Hier ist vorerst eine kurze Liste von kostenlosen grundlegenden (S)FTP-Clients:

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

### Testen von Websites

Es gibt [viele Webbrowser](https://en.wikipedia.org/wiki/List_of_web_browsers). Wenn Sie eine Website entwickeln, sollten Sie sie zumindest mit den folgenden großen Browsern auf Desktop- und Mobilplattformen testen, um sicherzustellen, dass Ihre Website für die meisten Menschen funktioniert:

- [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/)
- [Google Chrome](https://www.google.com/chrome/)
- [Apple Safari](https://www.apple.com/safari/)

Wenn Sie eine bestimmte Gruppe ansprechen (z. B. technische Plattform oder Region), müssen Sie die Website möglicherweise mit zusätzlichen Browsern testen, wie [UC Browser](https://www.ucweb.com/) oder [Opera Mini](https://www.opera.com/mini).

Das Testen wird kompliziert, da einige Browser nur auf bestimmten Betriebssystemen laufen. Besonders Apple Safari läuft auf iOS, iPadOS und macOS. Am besten nutzen Sie Dienste wie [Browsershots](https://browsershots.org/) oder [Browserstack](https://www.browserstack.com/). Browsershots erstellt Screenshots Ihrer Website, wie sie in verschiedenen Browsern angezeigt wird. Browserstack bietet Ihnen vollständigen Fernzugriff auf virtuelle Maschinen, sodass Sie Ihre Website in den gängigsten Umgebungen und auf verschiedenen Betriebssystemen testen können. Alternativ können Sie Ihre eigenen virtuellen Maschinen einrichten, aber das erfordert einige Fachkenntnisse.

Weitere Informationen finden Sie unter [Strategien zur Durchführung von Tests: Ein Testlabor zusammenstellen](/de/docs/Learn_web_development/Extensions/Testing/Testing_strategies#putting_together_a_testing_lab).

Führen Sie auf jeden Fall einige Tests auf einem realen Gerät durch, insbesondere auf realen mobilen Geräten. Mobile Geräte kosten natürlich Geld, daher empfehlen wir, Geräte innerhalb eines Teams zu teilen, wenn Sie auf vielen Plattformen testen möchten, ohne zu viel auszugeben. Für skalierbaren Cloud-Zugriff auf reale Gerätetests empfehlen wir außerdem, sich die [App Live: BrowserStack's Interactive Mobile App Testing Platform](https://www.browserstack.com/app-live) anzusehen.

## Nächste Schritte

- Einige dieser Softwareprogramme sind kostenlos, aber nicht alle. [Finden Sie heraus, wie viel es kostet, etwas im Web zu tun](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost).
- Wenn Sie mehr über Texteditoren erfahren möchten, lesen Sie unseren Artikel über [wie man einen Texteditor auswählt und installiert](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors).
- Wenn Sie sich fragen, wie Sie Ihre Website im Internet veröffentlichen können, schauen Sie sich ["Wie man Dateien auf einen Webserver hochlädt"](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server) an.
