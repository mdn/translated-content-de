---
title: Welche Software benötige ich, um eine Website zu erstellen?
slug: Learn_web_development/Howto/Tools_and_setup/What_software_do_I_need
l10n:
  sourceCommit: c49748a0ce4fdf77427e29cb6edbca8953a514e7
---

In diesem Artikel legen wir dar, welche Softwarekomponenten Sie benötigen, wenn Sie eine Website bearbeiten, hochladen oder anzeigen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten bereits
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web"
          >den Unterschied zwischen Webseiten, Websites, Webservern und Suchmaschinen</a>
        kennen.
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

Sie benötigen Werkzeuge, um:

- Webseiten zu erstellen und zu bearbeiten
- Dateien auf Ihren Webserver hochzuladen
- Ihre Website anzuzeigen

Fast alle Betriebssysteme enthalten standardmäßig einen Texteditor und einen Browser, mit denen Sie Websites anzeigen können. Daher müssen Sie in der Regel nur Software zur Übertragung von Dateien auf Ihren Webserver erwerben.

## Vertiefend

### Erstellen und Bearbeiten von Webseiten

Um eine Website zu erstellen und zu bearbeiten, benötigen Sie einen Texteditor. Texteditoren erstellen und ändern unformatierte Textdateien. Andere Formate, wie **{{Glossary("RTF", "RTF")}}**, ermöglichen es, Formatierungen wie Fett oder Unterstrichen hinzuzufügen. Diese Formate sind nicht geeignet, um Webseiten zu schreiben. Sie sollten sorgfältig überlegen, welchen Texteditor Sie verwenden, da Sie viel mit ihm arbeiten werden, während Sie die Website erstellen.

Alle Desktop-Betriebssysteme verfügen über einen einfachen Texteditor. Diese Editoren sind alle einfach, aber ihnen fehlen besondere Funktionen für das Kodieren von Webseiten. Wenn Sie etwas Anspruchsvolleres möchten, gibt es viele Drittanbieter-Tools. Drittanbieter-Editoren bieten oft zusätzliche Funktionen, darunter Syntax-Hervorhebung, Auto-Vervollständigung, zusammenklappbare Abschnitte und Codesuche. Hier ist eine kurze Liste von Editoren:

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
            <a href="https://code.visualstudio.com/">Visual Studio Code</a>
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
            <a href="https://code.visualstudio.com/">Visual Studio Code</a>
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
            <a href="https://code.visualstudio.com/">Visual Studio Code</a>
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
          <li><a href="https://github.com/GoogleChromeLabs/text-app">Text</a></li>
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

Wenn Ihre Website bereit zur öffentlichen Ansicht ist, müssen Sie Ihre Webseiten auf Ihren Webserver hochladen. Sie können Speicherplatz auf einem Server von verschiedenen Anbietern kaufen (siehe [Wie viel kostet es, etwas im Web zu tun?](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost)). Sobald Sie sich für einen Anbieter entschieden haben, wird Ihnen der Anbieter die Zugangsinformationen per E-Mail zusenden, normalerweise in Form einer SFTP-URL, Benutzername, Passwort und weiteren Informationen zum Verbinden mit deren Server. Bedenken Sie, dass (S)FTP mittlerweile etwas altmodisch ist und andere Upload-Systeme an Popularität gewinnen, wie [RSync](https://de.wikipedia.org/wiki/Rsync) und [Git/GitHub](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

> [!NOTE]
> FTP ist von Natur aus unsicher. Sie sollten sicherstellen, dass Ihr Hosting-Anbieter die Nutzung einer sicheren Verbindung, wie z.B. SFTP oder RSync über SSH, ermöglicht.

Das Hochladen von Dateien auf einen Webserver ist ein sehr wichtiger Schritt beim Erstellen einer Website, daher behandeln wir es ausführlich in [einem separaten Artikel](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server). Hier ist eine kurze Liste von kostenlosen grundlegenden (S)FTP-Clients:

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

Es gibt [viele verfügbare Webbrowser](https://de.wikipedia.org/wiki/Liste_von_Webbrowsern). Wenn Sie eine Website entwickeln, sollten Sie sie zumindest mit den folgenden großen Browsern sowohl auf Desktop- als auch auf Mobilplattformen testen, um sicherzustellen, dass Ihre Seite für die meisten Menschen funktioniert:

- [Mozilla Firefox](https://www.firefox.com/)
- [Google Chrome](https://www.google.com/chrome/)
- [Apple Safari](https://www.apple.com/safari/)

Wenn Sie eine bestimmte Gruppe (z.B. eine technische Plattform oder eine lokale Region) ansprechen, müssen Sie die Website möglicherweise mit zusätzlichen Browsern testen, wie dem [UC Browser](https://www.ucweb.com/) oder [Opera Mini](https://www.opera.com/mini).

Das Testen wird kompliziert, da einige Browser nur auf bestimmten Betriebssystemen laufen. Insbesondere Apple Safari läuft auf iOS, iPadOS und macOS. Es ist am besten, Dienste wie [Browsershots](https://www.browsershots.at/) oder [Browserstack](https://www.browserstack.com/) zu nutzen. Browsershots erstellt Screenshots Ihrer Website, wie sie in verschiedenen Browsern aussehen wird. Browserstack gibt Ihnen vollen Fernzugriff auf virtuelle Maschinen, sodass Sie Ihre Seite in den gängigsten Umgebungen und auf verschiedenen Betriebssystemen testen können. Alternativ können Sie Ihre eigenen virtuellen Maschinen einrichten, aber das erfordert etwas Fachwissen.

Siehe [Strategien zur Durchführung von Tests: Ein Testlabor zusammenstellen](/de/docs/Learn_web_development/Extensions/Testing/Testing_strategies#putting_together_a_testing_lab) für weitere Informationen.

Führen Sie unbedingt einige Tests auf einem echten Gerät durch, insbesondere auf echten mobilen Geräten. Mobilgeräte kosten natürlich Geld, daher empfehlen wir, Geräte innerhalb eines Teams zu teilen, wenn Sie auf vielen Plattformen testen möchten, ohne zu viel auszugeben. Für skalierbaren Cloud-Zugriff auf Tests mit echten Geräten empfehlen wir auch einen Blick auf [App Live: BrowserStack's Interactive Mobile App Testing platform](https://www.browserstack.com/app-live).

## Nächste Schritte

- Einige dieser Software ist kostenlos, aber nicht alle. [Erfahren Sie, wie viel es kostet, etwas im Web zu tun](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost).
- Wenn Sie mehr über Texteditoren erfahren möchten, lesen Sie unseren Artikel über [wie man einen Texteditor auswählt und installiert](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors).
- Wenn Sie sich fragen, wie Sie Ihre Website im Web veröffentlichen können, schauen Sie sich [„Wie man Dateien auf einem Webserver hochlädt“](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server) an.
