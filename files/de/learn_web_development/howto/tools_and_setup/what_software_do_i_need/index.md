---
title: Welche Software benötige ich, um eine Website zu erstellen?
slug: Learn_web_development/Howto/Tools_and_setup/What_software_do_I_need
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{QuicklinksWithSubPages("/de/docs/Learn_web_development/Howto")}}

In diesem Artikel erklären wir, welche Softwarekomponenten Sie benötigen, wenn Sie eine Website bearbeiten, hochladen oder anzeigen wollen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten bereits
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web"
          >den Unterschied zwischen Webseiten, Websites, Webservern und Suchmaschinen</a
        >
        kennen.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erfahren Sie, welche Softwarekomponenten Sie benötigen, wenn Sie eine Website bearbeiten, hochladen oder anzeigen wollen.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Die meisten Programme, die Sie für die Webentwicklung benötigen, können kostenlos heruntergeladen werden. Wir stellen Ihnen in diesem Artikel einige Links zur Verfügung.

Sie benötigen Werkzeuge zum:

- Erstellen und Bearbeiten von Webseiten
- Hochladen von Dateien auf Ihren Webserver
- Anzeigen Ihrer Website

Nahezu alle Betriebssysteme enthalten standardmäßig einen Texteditor und einen Browser, mit denen Sie Websites anzeigen können. Infolgedessen müssen Sie normalerweise nur Software für den Dateitransfer auf Ihren Webserver beschaffen.

## Active Learning

_Es gibt noch keine Active-Learning-Inhalte. [Bitte erwägen Sie, beizutragen](/de/docs/MDN/Community/Getting_started)._

## Weitere Einblicke

### Erstellen und Bearbeiten von Webseiten

Um eine Website zu erstellen und zu bearbeiten, benötigen Sie einen Texteditor. Texteditoren erstellen und ändern unformatierte Textdateien. Andere Formate, wie **{{Glossary("RTF", "RTF")}}**, erlauben es, Formatierungen wie Fett- oder Unterstreichung hinzuzufügen. Diese Formate sind nicht geeignet zum Schreiben von Webseiten. Sie sollten sorgfältig überlegen, welchen Texteditor Sie verwenden, da Sie intensiv mit ihm arbeiten werden, während Sie die Website erstellen.

Alle Desktop-Betriebssysteme bieten einen grundlegenden Texteditor. Diese Editoren sind zwar einfach zu bedienen, bieten aber keine speziellen Funktionen für die Codierung von Webseiten. Wenn Sie etwas Anspruchsvolleres möchten, gibt es viele Drittanbieterprogramme. Drittanbieter-Editoren bieten oft zusätzliche Funktionen, wie z.B. Syntax-Hervorhebung, Autovervollständigung, zusammenklappbare Abschnitte und Code-Suche. Hier ist eine kurze Liste von Editoren:

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

Hier ist ein Screenshot eines erweiterten Texteditors:

![Screenshot von Notepad++.](notepadplusplus.png)

Hier ist ein Screenshot eines Online-Texteditors:

![Screenshot von ShiftEdit](shiftedit.png)

### Dateien im Web hochladen

Wenn Ihre Website für die öffentliche Anzeige bereit ist, müssen Sie Ihre Webseiten auf Ihren Webserver hochladen. Sie können Speicherplatz auf einem Server von verschiedenen Anbietern kaufen (siehe [Wie viel kostet es, etwas im Internet zu tun?](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost)). Sobald Sie sich für einen Anbieter entschieden haben, sendet Ihnen der Anbieter die Zugangsdaten, normalerweise in Form einer SFTP-URL, Benutzernamen, Passwort und anderer Informationen, die für die Verbindung mit ihrem Server benötigt werden. Beachten Sie, dass (S)FTP mittlerweile etwas altmodisch ist und andere Upload-Systeme, wie [RSync](https://en.wikipedia.org/wiki/Rsync) und [Git/GitHub](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site), zunehmend populär werden.

> [!NOTE]
> FTP ist von Natur aus unsicher. Sie sollten sicherstellen, dass Ihr Hosting-Anbieter die Nutzung einer sicheren Verbindung ermöglicht, z.B. SFTP oder RSync über SSH.

Das Hochladen von Dateien auf einen Webserver ist ein sehr wichtiger Schritt bei der Erstellung einer Website, daher behandeln wir es ausführlich in [einem separaten Artikel](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server). Bis dahin hier eine kurze Liste kostenloser Basis-(S)FTP-Clients:

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
              href="https://wiki.gnome.org/action/show/Apps/Files?action=show&#x26;redirect=Apps%2FNautilus"
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

Es gibt [viele verfügbare Webbrowser](https://en.wikipedia.org/wiki/List_of_web_browsers). Wenn Sie eine Website entwickeln, sollten Sie sie mindestens mit den folgenden großen Browsern auf sowohl Desktop- als auch mobilen Plattformen testen, um sicherzustellen, dass Ihre Seite für die meisten Menschen funktioniert:

- [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/)
- [Google Chrome](https://www.google.com/chrome/)
- [Apple Safari](https://www.apple.com/safari/)

Wenn Sie eine bestimmte Zielgruppe ansprechen (z.B. technische Plattform oder Region), müssen Sie die Site möglicherweise mit zusätzlichen Browsern testen, wie [UC Browser](https://www.ucweb.com/) oder [Opera Mini](https://www.opera.com/mini).

Das Testen wird kompliziert, weil einige Browser nur auf bestimmten Betriebssystemen laufen. Besonders Apple Safari läuft auf iOS, iPadOS und macOS. Es ist am besten, Dienstleistungen wie [Browsershots](https://browsershots.org/) oder [Browserstack](https://www.browserstack.com/) zu nutzen. Browsershots erstellt Screenshots Ihrer Website, so wie sie in verschiedenen Browsern aussehen wird. Browserstack gibt Ihnen vollständigen Fernzugriff auf virtuelle Maschinen, sodass Sie Ihre Site in den gängigsten Umgebungen und auf verschiedenen Betriebssystemen testen können. Alternativ können Sie Ihre eigenen virtuellen Maschinen einrichten, aber das erfordert einige Fachkenntnisse.

Weitere Informationen finden Sie unter [Strategien zur Durchführung von Tests: Ein Testlabor einrichten](/de/docs/Learn_web_development/Extensions/Testing/Testing_strategies#putting_together_a_testing_lab).

Führen Sie auf jeden Fall einige Tests auf einem echten Gerät durch, insbesondere auf echten mobilen Geräten. Mobile Geräte kosten natürlich Geld, daher empfehlen wir, Geräte in einem Team zu teilen, wenn Sie auf vielen Plattformen testen möchten, ohne zu viel auszugeben. Für skalierbaren Cloud-Zugang zu echten Gerätetests empfehlen wir auch einen Blick auf [App Live: BrowserStack's Interactive Mobile App Testing platform](https://www.browserstack.com/app-live).

## Nächste Schritte

- Einige dieser Software ist kostenlos, aber nicht alles. [Erfahren Sie, wie viel es kostet, etwas im Internet zu machen](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost).
- Wenn Sie mehr über Texteditoren erfahren möchten, lesen Sie unseren Artikel darüber, [wie man einen Texteditor auswählt und installiert](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors).
- Wenn Sie sich fragen, wie Sie Ihre Website im Internet veröffentlichen, sehen Sie sich die Anleitung ["Wie man Dateien auf einen Webserver hochlädt"](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server) an.
