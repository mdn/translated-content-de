---
title: Welche Software benötige ich zum Erstellen einer Website?
slug: Learn_web_development/Howto/Tools_and_setup/What_software_do_I_need
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

In diesem Artikel erläutern wir, welche Softwarekomponenten Sie benötigen, wenn Sie eine Website bearbeiten, hochladen oder anschauen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten bereits
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web"
          >den Unterschied zwischen Webseiten, Websites, Webservern und
          Suchmaschinen kennen.</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erfahren Sie, welche Softwarekomponenten Sie benötigen, um eine Website
        zu bearbeiten, hochzuladen oder anzusehen.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Die meisten Programme, die Sie für die Webentwicklung benötigen, können Sie kostenlos herunterladen. Wir werden in diesem Artikel einige Links bereitstellen.

Sie benötigen Werkzeuge, um:

- Webseiten zu erstellen und zu bearbeiten
- Dateien auf Ihren Webserver hochzuladen
- Ihre Website zu betrachten

Nahezu alle Betriebssysteme enthalten standardmäßig einen Texteditor und einen Browser, mit denen Sie Websites ansehen können. Daher müssen Sie normalerweise nur Software zum Übertragen von Dateien auf Ihren Webserver erwerben.

## Aktives Lernen

_Es steht noch kein aktives Lernen zur Verfügung. [Bitte überlegen Sie, einen Beitrag zu leisten](/de/docs/MDN/Community/Contributing/Getting_started)._

## Mehr erfahren

### Erstellen und Bearbeiten von Webseiten

Zum Erstellen und Bearbeiten einer Website benötigen Sie einen Texteditor. Texteditoren erstellen und ändern unformatierte Textdateien. Andere Formate, wie **{{Glossary("RTF", "RTF")}}**, ermöglichen das Hinzufügen von Formatierungen, wie Fett- oder Unterstrich. Diese Formate sind nicht geeignet, um Webseiten zu schreiben. Sie sollten sich Gedanken darüber machen, welchen Texteditor Sie verwenden, da Sie intensiv damit arbeiten werden, während Sie die Website erstellen.

Alle Desktop-Betriebssysteme verfügen über einen grundlegenden Texteditor. Diese Editoren sind zwar einfach zu bedienen, bieten jedoch keine speziellen Funktionen für die Webseitencodierung. Wenn Sie etwas Ausgefalleneres möchten, gibt es viele Drittanbieter-Tools zur Verfügung. Drittanbieter-Editoren bieten oft zusätzliche Funktionen, darunter Syntax-Highlighting, Autovervollständigung, zusammenklappbare Bereiche und Codesuche. Hier eine kurze Liste von Editoren:

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
            <a href="https://en.wikipedia.org/wiki/Vi" rel="external">Vi</a>
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
      <td></td>
      <td>
        <ul>
          <li><a href="https://shiftedit.net/">ShiftEdit</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Hier ein Screenshot eines fortgeschrittenen Texteditors:

![Screenshot von Notepad++.](notepadplusplus.png)

Hier ein Screenshot eines Online-Texteditors:

![Screenshot von ShiftEdit](shiftedit.png)

### Dateien im Web hochladen

Wenn Ihre Website bereit zur öffentlichen Ansicht ist, müssen Sie Ihre Webseiten auf Ihren Webserver hochladen. Sie können bei verschiedenen Anbietern Speicherplatz auf einem Server kaufen (siehe [Wie viel kostet es, etwas im Web zu tun?](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost)). Sobald Sie sich entschieden haben, welchen Anbieter Sie nutzen möchten, wird der Anbieter Ihnen die Zugangsinformationen per E-Mail zusenden, normalerweise in Form einer SFTP-URL, Benutzername, Passwort und weiteren Informationen, die zum Verbinden mit deren Server benötigt werden. Beachten Sie, dass (S)FTP mittlerweile etwas altmodisch ist und andere Hochladesysteme allmählich an Beliebtheit gewinnen, wie [RSync](https://en.wikipedia.org/wiki/Rsync) und [Git/GitHub](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

> [!NOTE]
> FTP ist von Natur aus unsicher. Sie sollten sicherstellen, dass Ihr Hosting-Anbieter die Nutzung einer sicheren Verbindung ermöglicht, z.B. SFTP oder RSync über SSH.

Das Hochladen von Dateien auf einen Webserver ist ein sehr wichtiger Schritt beim Erstellen einer Website, daher behandeln wir es ausführlich in [einem separaten Artikel](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server). Für den Moment hier eine kurze Liste von kostenlosen grundlegenden (S)FTP-Clients:

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

Es gibt [viele verfügbare Webbrowser](https://en.wikipedia.org/wiki/List_of_web_browsers). Während Sie eine Website entwickeln, sollten Sie sie mindestens mit den folgenden großen Browsern auf sowohl Desktop- als auch Mobilplattformen testen, um sicherzustellen, dass Ihre Site für die meisten Menschen funktioniert:

- [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/)
- [Google Chrome](https://www.google.com/chrome/)
- [Apple Safari](https://www.apple.com/safari/)

Wenn Sie eine bestimmte Gruppe ansprechen (z.B. technologische Plattform oder Region), müssen Sie die Site möglicherweise mit zusätzlichen Browsern testen, wie [UC Browser](https://www.ucweb.com/) oder [Opera Mini](https://www.opera.com/browsers/opera-mini).

Das Testen wird kompliziert, da einige Browser nur auf bestimmten Betriebssystemen laufen. Insbesondere läuft Apple Safari auf iOS, iPadOS und macOS. Es ist am besten, Dienste wie [Browsershots](https://browsershots.org/) oder [Browserstack](https://www.browserstack.com/) zu nutzen. Browsershots erstellt Screenshots Ihrer Website, wie sie in verschiedenen Browsern aussieht. Browserstack gibt Ihnen vollständigen Fernzugriff auf virtuelle Maschinen, so dass Sie Ihre Site in den gängigsten Umgebungen und auf verschiedenen Betriebssystemen testen können. Alternativ können Sie Ihre eigenen virtuellen Maschinen einrichten, aber das erfordert etwas Fachwissen.

Sehen Sie sich [Strategien für das Durchführen von Tests: Aufbau eines Testlabors](/de/docs/Learn_web_development/Extensions/Testing/Testing_strategies#putting_together_a_testing_lab) für weitere Informationen an.

Führen Sie unbedingt einige Tests auf einem echten Gerät durch, insbesondere auf echten mobilen Geräten. Mobile Geräte kosten natürlich Geld, deshalb empfehlen wir, Geräte in einem Team zu teilen, wenn Sie auf vielen Plattformen testen möchten, ohne zu viel auszugeben. Für skalierbaren Cloud-Zugriff auf echtes Gerätetesten würden wir auch einen Blick auf [App Live: BrowserStack's Interactive Mobile App Testing-Plattform](https://www.browserstack.com/app-live) empfehlen.

## Nächste Schritte

- Einige dieser Software ist kostenlos, aber nicht alles. [Erfahren Sie, wie viel es kostet, etwas im Web zu tun](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost).
- Wenn Sie mehr über Texteditoren erfahren möchten, lesen Sie unseren Artikel darüber, [wie man einen Texteditor auswählt und installiert](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors).
- Wenn Sie sich fragen, wie Sie Ihre Website im Web veröffentlichen können, schauen Sie sich "Wie man Dateien auf einen Webserver hochlädt" an](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server).
