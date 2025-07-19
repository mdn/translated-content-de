---
title: Welche Software benötige ich zum Erstellen einer Website?
slug: Learn_web_development/Howto/Tools_and_setup/What_software_do_I_need
l10n:
  sourceCommit: 30c9f71e6a6cac4d894688cabf7e4b50af87cfe5
---

In diesem Artikel erläutern wir, welche Softwarekomponenten Sie benötigen, wenn Sie eine Website bearbeiten, hochladen oder anzeigen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten bereits
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web"
          >den Unterschied zwischen Webseiten, Websites, Webservern und Suchmaschinen</a
        > kennen.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erfahren Sie, welche Softwarekomponenten Sie benötigen, wenn Sie eine Website bearbeiten, hochladen oder anzeigen möchten.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Die meisten Programme, die Sie für die Webentwicklung benötigen, können Sie kostenlos herunterladen. In diesem Artikel stellen wir einige Links zur Verfügung.

Sie benötigen Werkzeuge, um:

- Webseiten zu erstellen und zu bearbeiten
- Dateien auf Ihren Webserver hochzuladen
- Ihre Website zu betrachten

Fast alle Betriebssysteme beinhalten standardmäßig einen Texteditor und einen Browser, mit denen Sie Websites anzeigen können. Daher müssen Sie in der Regel nur Software für die Dateiübertragung zu Ihrem Webserver beschaffen.

## Aktives Lernen

_Es ist noch kein aktives Lernen verfügbar. [Bitte erwägen Sie eine Mitarbeit](/de/docs/MDN/Community/Getting_started)._

## Vertiefen

### Webseiten erstellen und bearbeiten

Zum Erstellen und Bearbeiten einer Website benötigen Sie einen Texteditor. Texteditoren erstellen und modifizieren unformatierte Textdateien. Andere Formate, wie **{{Glossary("RTF", "RTF")}}**, erlauben es Ihnen, Formatierungen wie Fett- oder Unterstreichungen hinzuzufügen. Diese Formate sind nicht zum Schreiben von Webseiten geeignet. Sie sollten sich Gedanken darüber machen, welchen Texteditor Sie verwenden, da Sie intensiv damit arbeiten werden, während Sie die Website erstellen.

Alle Desktop-Betriebssysteme verfügen über einen grundlegenden Texteditor. Diese Editoren sind zwar einfach, bieten jedoch keine speziellen Funktionen zum Codieren von Webseiten. Wenn Sie etwas anspruchsvolleres möchten, stehen Ihnen viele Drittanbieter-Tools zur Verfügung. Drittanbieter-Editoren bieten oft zusätzliche Funktionen wie Syntaxfärbung, Autovervollständigung, zusammenklappbare Abschnitte und Codesuche. Hier ist eine kurze Liste von Editoren:

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

### Dateien ins Web hochladen

Wenn Ihre Website bereit für die öffentliche Anzeige ist, müssen Sie Ihre Webseiten auf Ihren Webserver hochladen. Sie können bei verschiedenen Anbietern Speicherplatz auf einem Server kaufen (siehe [Wie viel kostet es, etwas im Web zu tun?](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost)). Sobald Sie sich für einen Anbieter entschieden haben, sendet Ihnen dieser die Zugangsinformationen per E-Mail, normalerweise in Form einer SFTP-URL, eines Benutzernamens, eines Passworts und anderer Informationen, die zur Verbindung mit deren Server benötigt werden. Bedenken Sie, dass (S)FTP inzwischen etwas altmodisch ist und andere Upload-Systeme anfangen, populär zu werden, wie [RSync](https://en.wikipedia.org/wiki/Rsync) und [Git/GitHub](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

> [!NOTE]
> FTP ist von Natur aus unsicher. Sie sollten sicherstellen, dass Ihr Hosting-Anbieter eine sichere Verbindung erlaubt, z.B. SFTP oder RSync über SSH.

Das Hochladen von Dateien auf einen Webserver ist ein sehr wichtiger Schritt bei der Erstellung einer Website, daher behandeln wir dies ausführlich in [einem separaten Artikel](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server). Hier ist eine kurze Liste kostenloser grundlegender (S)FTP-Clients:

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

Es gibt [viele verfügbare Webbrowser](https://en.wikipedia.org/wiki/List_of_web_browsers). Wenn Sie eine Website entwickeln, sollten Sie sie zumindest mit den folgenden wichtigen Browsern auf sowohl Desktop- als auch mobilen Plattformen testen, um sicherzustellen, dass Ihre Seite für die meisten Menschen funktioniert:

- [Mozilla Firefox](https://www.firefox.com/en-US/)
- [Google Chrome](https://www.google.com/chrome/)
- [Apple Safari](https://www.apple.com/safari/)

Wenn Sie eine bestimmte Gruppe ansprechen (z.B. eine technische Plattform oder einen geografischen Raum), müssen Sie die Website möglicherweise mit zusätzlichen Browsern testen, wie [UC Browser](https://www.ucweb.com/) oder [Opera Mini](https://www.opera.com/mini).

Das Testen wird kompliziert, weil einige Browser nur auf bestimmten Betriebssystemen laufen. Insbesondere Apple Safari läuft auf iOS, iPadOS und macOS. Es ist am besten, Dienste wie [Browsershots](https://www.browsershots.at/) oder [Browserstack](https://www.browserstack.com/) zu nutzen. Browsershots erstellt Screenshots Ihrer Website, wie sie in verschiedenen Browsern aussehen wird. Browserstack bietet Ihnen vollen Fernzugriff auf virtuelle Maschinen, sodass Sie Ihre Seite in den gebräuchlichsten Umgebungen und auf verschiedenen Betriebssystemen testen können. Alternativ können Sie Ihre eigenen virtuellen Maschinen einrichten, aber das erfordert einige Expertise.

Siehe [Strategien für die Durchführung von Tests: Ein Testlabor einrichten](/de/docs/Learn_web_development/Extensions/Testing/Testing_strategies#putting_together_a_testing_lab) für weitere Informationen.

Führen Sie auf jeden Fall einige Tests auf einem echten Gerät durch, insbesondere auf tatsächlichen mobilen Geräten. Mobile Geräte kosten natürlich Geld, daher empfehlen wir, Geräte in einem Team zu teilen, wenn Sie auf vielen Plattformen testen möchten, ohne zu viel zu investieren. Für skalierbaren Cloud-Zugriff auf echtes Gerätetesten empfehlen wir auch, [App Live: BrowserStacks Interactive Mobile App Testing Plattform](https://www.browserstack.com/app-live) zu betrachten.

## Nächste Schritte

- Einige dieser Software ist kostenlos, aber nicht alle. [Finden Sie heraus, wie viel es kostet, etwas im Web zu tun](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost).
- Wenn Sie mehr über Texteditoren erfahren möchten, lesen Sie unseren Artikel über [wie man einen Texteditor auswählt und installiert](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors).
- Wenn Sie wissen möchten, wie Sie Ihre Website ins Web stellen, sehen Sie sich ["Wie man Dateien auf einen Webserver hochlädt"](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server) an.
