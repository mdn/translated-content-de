---
title: Welche Software benötige ich zum Erstellen einer Website?
slug: Learn_web_development/Howto/Tools_and_setup/What_software_do_I_need
l10n:
  sourceCommit: f33de00c56ac53878eb2cb7cb5849df1f9ab8db7
---

In diesem Artikel zeigen wir, welche Softwarekomponenten Sie benötigen, wenn Sie eine Website bearbeiten, hochladen oder anzeigen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten bereits kennen
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web"
          >den Unterschied zwischen Webseiten, Websites, Webservern und Suchmaschinen.</a
        >
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

Die meisten Programme, die Sie für die Webentwicklung benötigen, können Sie kostenlos herunterladen. Wir werden in diesem Artikel einige Links bereitstellen.

Sie benötigen Werkzeuge, um:

- Webseiten zu erstellen und zu bearbeiten
- Dateien auf Ihren Webserver hochzuladen
- Ihre Website anzusehen

Nahezu alle Betriebssysteme verfügen standardmäßig über einen Texteditor und einen Browser, mit dem Sie Webseiten anzeigen können. Infolgedessen müssen Sie normalerweise nur Software zum Transfer von Dateien auf Ihren Webserver erwerben.

## Vertiefung

### Webseiten erstellen und bearbeiten

Um eine Website zu erstellen und zu bearbeiten, benötigen Sie einen Texteditor. Texteditoren erstellen und ändern unformatierte Textdateien. Andere Formate, wie z. B. **{{Glossary("RTF", "RTF")}}**, ermöglichen es Ihnen, Formatierungen wie Fett- oder Unterstreichungen hinzuzufügen. Diese Formate sind nicht geeignet, um Webseiten zu schreiben. Sie sollten sorgfältig überlegen, welchen Texteditor Sie verwenden, da Sie im Laufe der Entwicklung der Website umfangreich damit arbeiten werden.

Alle Desktop-Betriebssysteme sind mit einem einfachen Texteditor ausgestattet. Diese Editoren sind alle unkompliziert, bieten jedoch keine speziellen Funktionen für das Codieren von Webseiten. Wenn Sie etwas Raffinierteres möchten, stehen viele Drittanbieter-Tools zur Verfügung. Drittanbieter-Editoren bieten oft zusätzliche Funktionen, darunter Syntax-Hervorhebung, Autovervollständigung, einklappbare Abschnitte und Suche im Code. Hier ist eine kurze Liste von Editoren:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Betriebssystem</th>
      <th scope="col">Integrierter Editor</th>
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

Wenn Ihre Website für die öffentliche Ansicht bereit ist, müssen Sie Ihre Webseiten auf Ihren Webserver hochladen. Sie können von verschiedenen Anbietern Speicherplatz auf einem Server kaufen (siehe [Was kostet es, etwas im Web zu machen?](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost)). Sobald Sie sich für einen Anbieter entschieden haben, wird Ihnen dieser die Zugangsdaten per E-Mail senden, normalerweise in Form einer SFTP-URL, Benutzername, Passwort und andere Informationen, die zum Verbinden mit ihrem Server notwendig sind. Bedenken Sie, dass (S)FTP mittlerweile etwas altmodisch ist und andere Upload-Systeme wie [RSync](https://en.wikipedia.org/wiki/Rsync) und [Git/GitHub](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) an Popularität gewinnen.

> [!NOTE]
> FTP ist von Natur aus unsicher. Sie sollten sicherstellen, dass Ihr Hosting-Anbieter die Verwendung einer sicheren Verbindung erlaubt, z.B. SFTP oder RSync über SSH.

Das Hochladen von Dateien auf einen Webserver ist ein sehr wichtiger Schritt bei der Erstellung einer Website, daher behandeln wir es ausführlich in [einem separaten Artikel](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server). Zunächst hier eine kurze Liste kostenloser grundlegender (S)FTP-Clients:

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
              >Nautilus/Dateien</a
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

Es gibt [viele Webbrowser](https://en.wikipedia.org/wiki/List_of_web_browsers). Wenn Sie eine Website entwickeln, sollten Sie diese mindestens mit den folgenden großen Browsern auf sowohl Desktop- als auch Mobilplattformen testen, um sicherzustellen, dass Ihre Website für die meisten Menschen funktioniert:

- [Mozilla Firefox](https://www.firefox.com/en-US/)
- [Google Chrome](https://www.google.com/chrome/)
- [Apple Safari](https://www.apple.com/safari/)

Wenn Sie eine bestimmte Gruppe ansprechen (z.B. technische Plattform oder Region), müssen Sie die Website möglicherweise auch mit zusätzlichen Browsern wie [UC Browser](https://www.ucweb.com/) oder [Opera Mini](https://www.opera.com/mini) testen.

Das Testen wird kompliziert, da einige Browser nur auf bestimmten Betriebssystemen laufen. Insbesondere läuft Apple Safari auf iOS, iPadOS und macOS. Es ist am besten, Dienste wie [Browsershots](https://www.browsershots.at/) oder [Browserstack](https://www.browserstack.com/) zu nutzen. Browsershots erstellt Screenshots Ihrer Website, wie sie in verschiedenen Browsern aussieht. Browserstack bietet Ihnen vollständigen Fernzugriff auf virtuelle Maschinen, so dass Sie Ihre Seite in den üblichsten Umgebungen und auf verschiedenen Betriebssystemen testen können. Alternativ können Sie Ihre eigenen virtuellen Maschinen einrichten, aber das erfordert einige Expertise.

Weitere Informationen finden Sie unter [Strategien für die Durchführung von Tests: Der Aufbau eines Testlabors](/de/docs/Learn_web_development/Extensions/Testing/Testing_strategies#putting_together_a_testing_lab).

Führen Sie auf jeden Fall einige Tests auf einem realen Gerät durch, insbesondere auf echten mobilen Geräten. Mobile Geräte kosten natürlich Geld, daher empfehlen wir, Geräte innerhalb eines Teams zu teilen, wenn Sie auf vielen Plattformen testen möchten, ohne zu viel auszugeben. Für skalierbaren Cloud-Zugriff auf Tests mit realen Geräten empfehlen wir auch einen Blick auf [App Live: BrowserStacks interaktive Mobile-App-Testplattform](https://www.browserstack.com/app-live).

## Nächste Schritte

- Ein Teil dieser Software ist kostenlos, aber nicht alles. [Erfahren Sie, wie viel es kostet, etwas im Web zu tun](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost).
- Wenn Sie mehr über Texteditoren erfahren möchten, lesen Sie unseren Artikel darüber, [wie Sie einen Texteditor auswählen und installieren](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors).
- Wenn Sie sich fragen, wie Sie Ihre Website im Web veröffentlichen, sehen Sie sich die ["Anleitung zum Hochladen von Dateien auf einen Webserver"](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server) an.
