---
title: Wie viel kostet es, etwas im Web zu tun?
slug: Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost
l10n:
  sourceCommit: bdb97b3e01499ce52f02caa3f51d6dd245a48782
---

Sich im Web zu engagieren ist nicht so günstig, wie es aussieht. In diesem Artikel diskutieren wir, wie viel Sie ausgeben müssen und warum.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten bereits verstehen,
        <a href="/de/docs/Learn_web_development/Howto/Tools_and_setup/What_software_do_I_need"
          >welche Software Sie benötigen</a
        >, den Unterschied zwischen
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web"
          >einer Webseite, einer Website, etc.</a
        >, und was
        <a href="/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name"
          >ein Domainname ist</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Überprüfen Sie den vollständigen Prozess zur Erstellung einer Website und finden Sie heraus, wie viel jeder Schritt kosten kann.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Beim Starten einer Website können Sie nichts ausgeben oder Ihre Kosten können in die Höhe schießen. In diesem Artikel diskutieren wir, wie viel alles kostet und was Sie für das erhalten, was Sie bezahlen (oder nicht bezahlen).

## Software

### Texteditoren

Sie haben wahrscheinlich einen Texteditor: Zum Beispiel Notepad auf Windows, Gedit auf Linux, TextEdit auf Mac. Sie werden es leichter haben, Code zu schreiben, wenn Sie einen Editor wählen, der durch Syntaxfärbung, Syntaxprüfung und Unterstützung bei der Code-Strukturierung hilft.

Viele Editoren sind kostenlos, zum Beispiel [Brackets](https://brackets.io/), [Bluefish](https://bluefish.openoffice.nl/index.html), [TextWrangler](https://www.barebones.com/products/textwrangler/), [Eclipse](https://www.eclipse.org/), [NetBeans](https://netbeans.apache.org/), und [Visual Studio Code](https://code.visualstudio.com/). Einige, wie [Sublime Text](https://www.sublimetext.com/), können Sie so lange testen, wie Sie möchten, jedoch wird erwartet, dass Sie bezahlen. Einige, wie [PhpStorm](https://www.jetbrains.com/phpstorm/), können je nach gewähltem Plan zwischen ein paar Dutzend und 200 Dollar kosten. Einige von ihnen, wie [Microsoft Visual Studio](https://visualstudio.microsoft.com/), können Hunderte oder Tausende von Dollar kosten; allerdings ist Visual Studio Community für individuelle Entwickler oder Open-Source-Projekte kostenlos. Oft haben kostenpflichtige Editoren eine Testversion.

Wir empfehlen, zunächst mehrere Editoren auszuprobieren, um ein Gefühl dafür zu bekommen, welcher am besten für Sie funktioniert. Wenn Sie nur einfaches {{Glossary("HTML", "HTML")}}, {{Glossary("CSS", "CSS")}} und {{Glossary("JavaScript", "JavaScript")}} schreiben, wählen Sie einen einfachen Editor.

Der Preis spiegelt nicht zuverlässig die Qualität oder Nützlichkeit eines Texteditors wider. Sie müssen ihn selbst ausprobieren und entscheiden, ob er Ihren Bedürfnissen entspricht. Zum Beispiel ist Sublime Text günstig, wird aber mit vielen kostenlosen Plugins geliefert, die die Funktionalität erheblich erweitern können.

### Bildbearbeitungsprogramme

Ihr System enthält wahrscheinlich einen Bildeditor oder -betrachter: Paint auf Windows, Eye of GNOME auf Ubuntu, Vorschau auf Mac. Diese Programme sind relativ eingeschränkt; Sie werden bald einen robusteren Editor wollen, um Ebenen, Effekte und Gruppierungen hinzuzufügen.

Editoren können kostenlos sein ([GIMP](https://www.gimp.org/), [Paint.NET](https://www.getpaint.net/)), moderat teuer ([PaintShop Pro](https://www.paintshoppro.com/), weniger als 100 $) oder mehrere Hundert Dollar kosten ([Adobe Photoshop](https://www.adobe.com/products/photoshop.html)).

Sie können jeden von ihnen verwenden, da sie ähnliche Funktionen bieten, obwohl einige so umfassend sind, dass Sie nie jede Funktion nutzen werden. Wenn Sie irgendwann Projekte mit anderen Designern austauschen müssen, sollten Sie herausfinden, welche Werkzeuge sie verwenden. Alle Editoren können fertige Projekte in Standarddateiformate exportieren, aber jeder Editor speichert laufende Projekte in seinem eigenen spezialisierten Format. Die meisten der Bilder im Internet sind urheberrechtlich geschützt, also ist es besser, die Lizenz der Datei zu überprüfen, bevor Sie sie verwenden. Seiten wie [Pixabay](https://pixabay.com/) bieten Bilder unter der CC0-Lizenz an, sodass Sie sie verwenden, bearbeiten und auch für kommerzielle Zwecke veröffentlichen dürfen, auch mit Änderungen.

### Medieneditoren

Wenn Sie Video oder Audio in Ihre Website einbeziehen möchten, können Sie entweder Online-Dienste einbetten (zum Beispiel YouTube, Vimeo oder Dailymotion) oder Ihre eigenen Videos einfügen (siehe unten für die Bandbreitenkosten).

Für Audiodateien können Sie kostenlose Software finden ([Audacity](https://www.audacityteam.org/), [Wavosaur](https://www.wavosaur.com/)) oder bis zu ein paar Hundert Dollar bezahlen ([Sound Forge](https://www.magix.com/us/music-editing/sound-forge/), [Adobe Audition](https://www.adobe.com/products/audition.html)). Ebenso kann Videosoftware kostenlos sein ([PiTiVi](https://www.pitivi.org/), [OpenShot](https://www.openshot.org/) für Linux, [iMovie](https://support.apple.com/imovie) für Mac), weniger als 100 $ ([Adobe Premiere Elements](https://www.adobe.com/products/premiere-elements.html)), oder mehrere Hundert Dollar kosten ([Adobe Premiere Pro](https://www.adobe.com/products/premiere.html), [Avid Media Composer](https://www.avid.com/media-composer), [Final Cut Pro](https://www.apple.com/final-cut-pro/)). Die Software, die Sie mit Ihrer Digitalkamera erhalten haben, könnte alle Ihre Bedürfnisse abdecken.

### Veröffentlichungstools

Sie benötigen auch eine Möglichkeit, Dateien von Ihrer Festplatte auf einen entfernten Webserver hochzuladen. Dafür sollten Sie ein Veröffentlichungstool wie einen {{Glossary("FTP", "(S)FTP-Client")}}, [RSync](https://en.wikipedia.org/wiki/Rsync) oder [Git/GitHub](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) verwenden.

Jedes Betriebssystem hat einen (S)FTP-Client als Teil seines Dateimanagers integriert. Windows Explorer, Nautilus (ein häufiger Linux-Dateimanager) und der Mac Finder beinhalten diese Funktionalität. Allerdings wählen Menschen oft dedizierte (S)FTP-Clients, um lokale oder entfernte Verzeichnisse nebeneinander anzuzeigen und Server-Passwörter zu speichern.

Wenn Sie einen (S)FTP-Client installieren möchten, gibt es mehrere zuverlässige und kostenlose Optionen: zum Beispiel [FileZilla](https://filezilla-project.org/) für alle Plattformen, [WinSCP](https://winscp.net/eng/index.php) für Windows, [Cyberduck](https://cyberduck.io/) für Mac oder Windows, [und mehr](https://en.wikipedia.org/wiki/List_of_FTP_server_software).

Da FTP von Natur aus unsicher ist, sollten Sie sicherstellen, dass Sie SFTP verwenden – die sichere, verschlüsselte Version von FTP, die die meisten Hosting-Sites, mit denen Sie zu tun haben werden, standardmäßig anbieten – oder eine andere sichere Lösung wie Rsync über SSH.

## Browser

Sie haben entweder bereits einen Browser oder können einen kostenlos erhalten. Laden Sie bei Bedarf [Firefox](https://www.firefox.com/en-US/download/all/) oder [Google Chrome](https://www.google.com/chrome/) herunter.

## Webzugang

### Computer / Modem

Sie benötigen einen Computer. Die Kosten können erheblich variieren, je nach Ihrem Budget und wo Sie leben. Um eine einfache Website zu veröffentlichen, brauchen Sie nur einen Basiscomputer, der in der Lage ist, einen Editor und einen Webbrowser zu starten, sodass der Einstieg recht günstig sein kann.

Natürlich benötigen Sie einen leistungsfähigeren Computer, wenn Sie komplexe Designs erstellen, Fotos retuschieren oder Audio- und Videodateien erstellen möchten.

Um Inhalte auf einen entfernten Server hochzuladen (siehe _Hosting_ unten), benötigen Sie ein Modem. Ihr {{Glossary("ISP", "ISP")}} kann Ihnen für ein paar Dollar im Monat Internet-Konnektivität vermieten, obwohl Ihr Budget je nach Ihrem Standort variieren könnte.

### ISP-Zugang

Stellen Sie sicher, dass Sie über ausreichende {{Glossary("Bandwidth", "Bandbreite")}} verfügen:

- Ein Zugang mit niedriger Bandbreite kann ausreichen, um eine „einfache“ Website zu unterstützen: angemessen große Bilder, Texte, etwas CSS und JavaScript. Das wird Sie wahrscheinlich ein paar Dutzend Dollar kosten, einschließlich der Miete für das Modem.
- Andererseits benötigen Sie eine Hochgeschwindigkeitsverbindung wie DSL, Kabel oder Glasfaserzugang, wenn Sie eine fortschrittlichere Website mit Hunderten von Dateien haben möchten oder wenn Sie schwere Video-/Audiodateien direkt von Ihrem Webserver liefern möchten. Es könnte genauso viel kosten wie der Zugang mit niedriger Bandbreite, bis hin zu mehreren Hundert Dollar pro Monat für professionellere Anforderungen.

## Hosting

### Bandbreite verstehen

Hosting-Anbieter berechnen Ihnen Kosten entsprechend der {{Glossary("Bandwidth", "Bandbreite")}}, die Ihre Website verbraucht. Dies hängt davon ab, wie viele Personen und Webcrawler Ihre Inhalte während eines bestimmten Zeitraums abrufen und wie viel Serverplatz Ihre Inhalte beanspruchen. Aus diesem Grund speichern Menschen ihre Videos normalerweise auf speziellen Diensten wie YouTube, Dailymotion und Vimeo. Zum Beispiel könnte Ihr Anbieter einen Plan haben, der bis zu mehreren tausend Besuchern pro Tag bei „vernünftiger“ Bandbreitennutzung beinhaltet. Seien Sie jedoch vorsichtig, da dies von einem Hosting-Anbieter zum anderen unterschiedlich definiert ist. Beachten Sie, dass zuverlässiges, kostenpflichtiges persönliches Hosting rund zehn bis fünfzehn Dollar pro Monat kosten kann.

> [!NOTE]
> Es gibt keine „unbegrenzte“ Bandbreite. Wenn Sie eine enorme Menge an Bandbreite konsumieren, erwarten Sie, eine enorme Menge an Geld zu bezahlen.

### Domainnamen

Ihr Domainname muss über einen Domainnamen-Anbieter (einen Registrar) erworben werden. Ihr Hosting-Anbieter kann auch ein Registrar sein ([Ionos](https://www.ionos.com/), [Gandi](https://www.gandi.net/en-US) sind zum Beispiel zugleich Registrare und Hosting-Anbieter). Der Domainname kostet normalerweise 5-15 Dollar pro Jahr. Diese Kosten variieren je nach:

- Lokalen Verpflichtungen: Einige länderspezifische Top-Level-Domainnamen sind teurer, da verschiedene Länder unterschiedliche Preise festlegen.
- Dienstleistungen, die mit dem Domainnamen verbunden sind: Einige Registrare bieten Spam-Schutz, indem sie Ihre Postadresse und E-Mail-Adresse hinter ihren eigenen Adressen verbergen: Die Postadresse kann über den Registrar angegeben werden, und Ihre E-Mail-Adresse kann über den Alias des Registrars verborgen werden.

### Selbst-Hosting vs. „Paket“-Hosting

Wenn Sie eine Website veröffentlichen möchten, könnten Sie alles selbst machen: eine Datenbank einrichten (wenn nötig), ein Content Management System oder {{Glossary("CMS", "CMS")}} (wie [WordPress](https://wordpress.org/), [Dotclear](https://dotclear.org/), [spip](https://www.spip.net/en_rubrique25.html) usw.) installieren, vorgefertigte Vorlagen oder Ihre eigenen hochladen.

Sie könnten die Umgebung Ihres Hosting-Anbieters für ungefähr zehn bis fünfzehn Dollar pro Monat nutzen oder sich direkt für einen speziellen Hosting-Service mit vorgepackten CMSs anmelden (z.B. [WordPress](https://wordpress.com/), [Tumblr](https://www.tumblr.com/), [Blogger](https://www.blogger.com/)). Für letztere müssen Sie nichts bezahlen, aber Sie haben möglicherweise weniger Kontrolle über Designvorlagen und andere Optionen.

### Kostenloses Hosting vs. bezahltes Hosting

Sie fragen sich vielleicht, warum sollte ich für mein Hosting bezahlen, wenn es so viele kostenlose Dienste gibt?

- Sie haben mehr Freiheit, wenn Sie bezahlen. Ihre Website gehört Ihnen, und Sie können nahtlos von einem Hosting-Anbieter zum nächsten migrieren.
- Kostenlose Hosting-Anbieter können Werbung in Ihre Inhalte einfügen, ohne dass Sie Einfluss darauf haben.

Es ist besser, bezahltes Hosting zu wählen, anstatt sich auf kostenloses Hosting zu verlassen, da es möglich ist, Ihre Dateien leicht zu verschieben und die Verfügbarkeit bei den meisten bezahlten Sites garantiert ist. Die meisten Hosting-Anbieter geben Ihnen zu Beginn einen großen Rabatt.

Einige entscheiden sich für einen gemischten Ansatz. Zum Beispiel ihr Hauptblog auf einem bezahlten Host mit einem vollständigen Domainnamen und spontanes, weniger strategisches, Content auf einem kostenlosen Hosting-Dienst.

## Professionelle Webagenturen und Hosting

Wenn Sie eine professionelle Website wünschen, werden Sie wahrscheinlich eine Webagentur beauftragen.

Hier hängen die Kosten von mehreren Faktoren ab, wie:

- Ist es eine einfache Website mit ein paar Seiten Text? Oder eine komplexere Website mit Tausenden von Seiten?
- Möchten Sie sie regelmäßig aktualisieren? Oder wird es eine statische Website?
- Muss die Website an die IT-Struktur Ihres Unternehmens angeschlossen werden, um Inhalte zu sammeln (zum Beispiel interne Daten)?
- Wollen Sie ein neues glänzendes Feature, das im Moment populär ist? Zum Zeitpunkt des Schreibens suchen Kunden nach Einzelseiten mit komplexem Parallax-Scrolling.
- Werden Sie die Agentur benötigen, um Benutzer-Stories zu entwickeln oder komplexe {{Glossary("UX", "UX")}}-Probleme zu lösen? Zum Beispiel eine Strategie zu entwickeln, um Benutzer zu engagieren, oder A/B-Tests durchzuführen, um eine Lösung unter mehreren Ideen auszuwählen.

Und für das Hosting sollten Sie folgende Entscheidungen in Betracht ziehen:

- Wollen Sie redundante Server, für den Fall, dass Ihr Server ausfällt?
- Ist eine Zuverlässigkeit von 95 % ausreichend, oder benötigen Sie einen professionellen, rund um die Uhr Service?
- Wollen Sie hochkarätige, ultra-responsive dedizierte Server, oder können Sie mit einer langsameren, geteilten Maschine zurechtkommen?

Je nachdem, wie Sie diese Fragen beantworten, könnte Ihre Website Tausende bis Hunderttausende von Dollar kosten.

## Nächste Schritte

Jetzt, da Sie verstehen, wie viel Geld Ihre Website kosten kann, ist es an der Zeit, mit der Gestaltung dieser Website zu beginnen und [Ihre Arbeitsumgebung einzurichten](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server).

- Lesen Sie weiter über [wie Sie einen Texteditor auswählen und installieren](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors).
- Wenn Sie sich mehr auf das Design konzentrieren, werfen Sie einen Blick auf die [Anatomie einer Webseite](/de/docs/Learn_web_development/Howto/Design_and_accessibility/Common_web_layouts).
