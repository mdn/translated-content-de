---
title: Welche Software benötige ich, um eine Website zu erstellen?
slug: Learn_web_development/Howto/Tools_and_setup/What_software_do_I_need
l10n:
  sourceCommit: 557225599741b811c10c4f8c049347b2eeaa3558
---

In diesem Artikel zeigen wir auf, welche Softwarekomponenten Sie benötigen, wenn Sie eine Website bearbeiten, hochladen oder anzeigen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten bereits
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web"
          >den Unterschied zwischen Webseiten, Websites, Webservern und Suchmaschinen kennen.</a
        >
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

Die meisten Programme, die Sie für die Webentwicklung benötigen, können kostenlos heruntergeladen werden. Wir werden einige Links in diesem Artikel bereitstellen.

Sie benötigen Werkzeuge, um:

- Webseiten zu erstellen und zu bearbeiten
- Dateien auf Ihren Webserver hochzuladen
- Ihre Website anzuzeigen

Fast alle Betriebssysteme beinhalten standardmäßig einen Texteditor und einen Browser, mit denen Sie Websites anzeigen können. Daher müssen Sie in der Regel nur Software für das Übertragen von Dateien auf Ihren Webserver besorgen.

## Gehen Sie tiefer

### Erstellen und Bearbeiten von Webseiten

Zum Erstellen und Bearbeiten einer Website benötigen Sie einen Texteditor. Texteditoren erstellen und bearbeiten unformatierte Textdateien. Andere Formate, wie **{{Glossary("RTF", "RTF")}}**, ermöglichen das Hinzufügen von Formatierungen wie Fett- oder Unterstrichen. Diese Formate sind nicht geeignet, um Webseiten zu schreiben. Sie sollten sich Gedanken darüber machen, welchen Texteditor Sie verwenden, da Sie viel Zeit damit verbringen werden, während Sie die Website erstellen.

Alle Desktop-Betriebssysteme enthalten einen grundlegenden Texteditor. Diese Editoren sind alle einfach zu bedienen, bieten jedoch keine speziellen Funktionen für die Erstellung von Webseiten. Wenn Sie etwas Ausgereifteres wünschen, gibt es viele Drittanbieter-Tools. Drittanbieter-Editoren verfügen oft über zusätzliche Funktionen, einschließlich Syntax-Hervorhebung, Auto-Vervollständigung, einklappbaren Abschnitten und Suchfunktionen für den Code. Hier ist eine kurze Liste von Editoren:

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

![Bildschirmfoto von Notepad++.](notepadplusplus.png)

Hier ist ein Bildschirmfoto eines Online-Texteditors:

![Bildschirmfoto von ShiftEdit](shiftedit.png)

### Dateien ins Web hochladen

Wenn Ihre Website für die öffentliche Anzeige bereit ist, müssen Sie Ihre Webseiten auf Ihren Webserver hochladen. Sie können bei verschiedenen Anbietern Speicherplatz auf einem Server kaufen (siehe [Wie viel kostet es, etwas im Internet zu tun?](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost)). Sobald Sie sich für einen Anbieter entschieden haben, sendet dieser Ihnen die Zugangsinformationen per E-Mail, normalerweise in Form einer SFTP-URL, einem Benutzernamen, einem Passwort und anderen Informationen, die zum Herstellen einer Verbindung zu ihrem Server erforderlich sind. Beachten Sie, dass (S)FTP mittlerweile etwas altmodisch ist und andere Upload-Systeme wie [RSync](https://de.wikipedia.org/wiki/Rsync) und [Git/GitHub](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) an Beliebtheit gewinnen.

> [!NOTE]
> FTP ist von Natur aus unsicher. Sie sollten sicherstellen, dass Ihr Hosting-Anbieter die Verwendung einer sicheren Verbindung ermöglicht, z.B. SFTP oder RSync über SSH.

Das Hochladen von Dateien auf einen Webserver ist ein sehr wichtiger Schritt bei der Erstellung einer Website, deshalb behandeln wir es ausführlich in [einem separaten Artikel](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server). Hier ist eine kurze Liste von kostenlosen grundlegenden (S)FTP-Clients:

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

Es gibt [viele Webbrowser](https://de.wikipedia.org/wiki/Liste_von_Webbrowsern). Wenn Sie eine Website entwickeln, sollten Sie sie mindestens mit den folgenden großen Browsern auf Desktop- und Mobilplattformen testen, um sicherzustellen, dass Ihre Seite für die meisten Personen funktioniert:

- [Mozilla Firefox](https://www.firefox.com/en-US/)
- [Google Chrome](https://www.google.com/chrome/)
- [Apple Safari](https://www.apple.com/safari/)

Wenn Sie eine bestimmte Zielgruppe ansprechen (z.B. technische Plattform oder Region), müssen Sie die Website möglicherweise mit zusätzlichen Browsern testen, wie [UC Browser](https://www.ucweb.com/) oder [Opera Mini](https://www.opera.com/mini).

Das Testen wird komplizierter, da einige Browser nur auf bestimmten Betriebssystemen laufen. Insbesondere läuft Apple Safari auf iOS, iPadOS und macOS. Es ist am besten, Dienste wie [Browsershots](https://www.browsershots.at/) oder [Browserstack](https://www.browserstack.com/) zu nutzen. Browsershots erstellt Screenshots Ihrer Website, wie sie in verschiedenen Browsern aussehen wird. Browserstack bietet Ihnen vollständigen Fernzugriff auf virtuelle Maschinen, sodass Sie Ihre Website in den gängigsten Umgebungen und auf verschiedenen Betriebssystemen testen können. Alternativ können Sie Ihre eigenen virtuellen Maschinen einrichten, aber das erfordert einige Fachkenntnisse.

Siehe [Strategien für die Durchführung von Tests: Ein Testing-Labor einrichten](/de/docs/Learn_web_development/Extensions/Testing/Testing_strategies#putting_together_a_testing_lab) für mehr Informationen.

In jedem Fall sollten Sie einige Tests auf einem realen Gerät durchführen, insbesondere auf realen mobilen Geräten. Mobile Geräte kosten natürlich Geld, daher empfehlen wir, Geräte im Team zu teilen, wenn Sie auf vielen Plattformen testen möchten, ohne zu viel auszugeben. Für skalierbaren Cloud-Zugang zu realem Gerätetesten empfehlen wir auch, einen Blick auf [App Live: BrowserStacks Interaktive Mobile App Testing-Plattform](https://www.browserstack.com/app-live) zu werfen.

## Nächste Schritte

- Ein Teil dieser Software ist kostenlos, aber nicht alles. [Finden Sie heraus, wie viel es kostet, etwas im Web zu tun](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost).
- Wenn Sie mehr über Texteditoren erfahren möchten, lesen Sie unseren Artikel über [wie man einen Texteditor auswählt und installiert](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors).
- Wenn Sie sich fragen, wie Sie Ihre Website im Internet veröffentlichen können, lesen Sie ["Wie man Dateien auf einen Webserver hochlädt"](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server).
