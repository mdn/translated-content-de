---
title: Wie viel kostet es, etwas im Web zu tun?
slug: Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost
l10n:
  sourceCommit: e488eba036b2fee56444fd579c3759ef45ff2ca8
---

Sich im Web zu engagieren ist nicht so günstig, wie es scheint. In diesem Artikel diskutieren wir, wie viel Sie möglicherweise ausgeben müssen und warum.

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
          >einer Webseite, einer Website usw.</a
        >, und was
        <a href="/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name"
          >ein Domainname ist</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Überprüfen Sie den vollständigen Prozess zur Erstellung einer Website und finden Sie heraus, wie viel jeder Schritt kosten kann.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Beim Start einer Website können Sie entweder nichts ausgeben oder Ihre Kosten können in die Höhe schießen. In diesem Artikel diskutieren wir, wie viel alles kostet und wie Sie das bekommen, wofür Sie zahlen (oder nicht zahlen).

## Software

### Texteditoren

Sie haben wahrscheinlich einen Texteditor: z.B. Notepad auf Windows, Gedit auf Linux, TextEdit auf Mac. Sie werden es einfacher haben, Code zu schreiben, wenn Sie einen Editor wählen, der farbig kodiert, Ihre Syntax überprüft und Ihnen bei der Strukturierung des Codes hilft.

Viele Editoren sind kostenlos, zum Beispiel [Brackets](https://brackets.io/), [Bluefish](https://bluefish.openoffice.nl/index.html), [TextWrangler](https://www.barebones.com/products/textwrangler/), [Eclipse](https://www.eclipse.org/), [NetBeans](https://netbeans.apache.org/) und [Visual Studio Code](https://code.visualstudio.com/). Einige, wie [Sublime Text](https://www.sublimetext.com/), können Sie so lange testen, wie Sie möchten, aber es wird empfohlen, zu bezahlen. Einige, wie [PhpStorm](https://www.jetbrains.com/phpstorm/), können je nach gewähltem Plan einige Dutzend bis 200 Dollar kosten. Einige, wie [Microsoft Visual Studio](https://visualstudio.microsoft.com/), können Hunderte oder Tausende von Dollar kosten; jedoch ist Visual Studio Community für Einzellentwickler oder Open-Source-Projekte kostenlos. Häufig bieten kostenpflichtige Editoren eine Testversion an.

Um anzufangen, empfehlen wir, mehrere Editoren auszuprobieren, um ein Gefühl dafür zu bekommen, welcher am besten zu Ihnen passt. Wenn Sie nur einfache {{Glossary("HTML", "HTML")}}, {{Glossary("CSS", "CSS")}} und {{Glossary("JavaScript", "JavaScript")}} schreiben, wählen Sie einen einfachen Editor.

Der Preis spiegelt nicht zuverlässig die Qualität oder Nützlichkeit eines Texteditors wider. Sie müssen es selbst ausprobieren und entscheiden, ob es Ihren Bedürfnissen entspricht. Zum Beispiel ist Sublime Text günstig, bringt aber viele kostenlose Plugins mit, die seine Funktionalität erheblich erweitern können.

### Bildbearbeitungsprogramme

Ihr System enthält wahrscheinlich ein Bildbearbeitungsprogramm oder einen Viewer: Paint auf Windows, Eye of GNOME auf Ubuntu, Vorschau auf Mac. Diese Programme sind relativ begrenzt, Sie werden bald einen robusteren Editor wünschen, um Ebenen, Effekte und Gruppierungen hinzuzufügen.

Editoren können kostenlos sein ([GIMP](https://www.gimp.org/), [Paint.NET](https://www.getpaint.net/)), moderat teuer ([PaintShop Pro](https://www.paintshoppro.com/), weniger als 100 $) oder mehrere hundert Dollar kosten ([Adobe Photoshop](https://www.adobe.com/products/photoshop.html)).

Sie können eines von ihnen verwenden, da sie ähnliche Funktionalitäten haben, obwohl einige so umfassend sind, dass Sie nie jede Funktion nutzen werden. Wenn Sie irgendwann Projekte mit anderen Designern austauschen müssen, sollten Sie herausfinden, welche Werkzeuge sie verwenden. Alle Editoren können fertige Projekte in Standarddateiformate exportieren, aber jeder Editor speichert laufende Projekte in seinem eigenen spezialisierten Format. Die meisten Bilder im Internet sind urheberrechtlich geschützt, daher ist es besser, die Lizenz der Datei zu überprüfen, bevor Sie sie verwenden. Websites wie [Pixabay](https://pixabay.com/) stellen Bilder unter der CC0-Lizenz bereit, sodass Sie sie verwenden, bearbeiten und veröffentlichen können, auch mit Änderungen für kommerzielle Zwecke.

### Medienbearbeitungsprogramme

Wenn Sie Video oder Audio in Ihre Website einbinden möchten, können Sie entweder Online-Dienste einbetten (zum Beispiel YouTube, Vimeo oder Dailymotion) oder Ihre eigenen Videos einfügen (siehe unten für Bandbreitenkosten).

Für Audiodateien können Sie kostenlose Software finden ([Audacity](https://www.audacityteam.org/), [Wavosaur](https://www.wavosaur.com/)), oder bis zu ein paar hundert Dollar ausgeben ([Sound Forge](https://www.magix.com/us/music-editing/sound-forge/), [Adobe Audition](https://www.adobe.com/products/audition.html)). Ebenso kann Videoschnittsoftware kostenlos ([PiTiVi](https://www.pitivi.org/), [OpenShot](https://www.openshot.org/) für Linux, [iMovie](https://support.apple.com/imovie) für Mac), weniger als 100 $ ([Adobe Premiere Elements](https://www.adobe.com/products/premiere-elements.html)) oder mehrere hundert Dollar kosten ([Adobe Premiere Pro](https://www.adobe.com/products/premiere.html), [Avid Media Composer](https://www.avid.com/media-composer), [Final Cut Pro](https://www.apple.com/final-cut-pro/)). Die Software, die Sie mit Ihrer Digitalkamera erhalten haben, könnte all Ihre Bedürfnisse abdecken.

### Veröffentlichungstools

Sie benötigen auch eine Möglichkeit, Dateien hochzuladen: von Ihrer Festplatte auf einen entfernten Webserver. Dazu sollten Sie ein Veröffentlichungstool wie einen {{Glossary("FTP", "(S)FTP-Client")}}, [RSync](https://en.wikipedia.org/wiki/Rsync) oder [Git/GitHub](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) verwenden.

Jedes Betriebssystem enthält einen (S)FTP-Client als Teil seines Dateimanagers. Windows Explorer, Nautilus (ein häufiger Linux-Dateimanager) und der Mac Finder enthalten diese Funktionalität. Menschen wählen jedoch oft dedizierte (S)FTP-Clients, um lokale oder entfernte Verzeichnisse nebeneinander anzuzeigen und Server-Passwörter zu speichern.

Wenn Sie einen (S)FTP-Client installieren möchten, gibt es mehrere zuverlässige und kostenlose Optionen: zum Beispiel [FileZilla](https://filezilla-project.org/) für alle Plattformen, [WinSCP](https://winscp.net/eng/index.php) für Windows, [Cyberduck](https://cyberduck.io/) für Mac oder Windows, [und mehr](https://en.wikipedia.org/wiki/List_of_FTP_server_software).

Da FTP von Natur aus unsicher ist, sollten Sie darauf achten, SFTP zu verwenden — die sichere, verschlüsselte Version von FTP, die die meisten Hosting-Sites, mit denen Sie heutzutage zu tun haben werden, standardmäßig anbieten — oder eine andere sichere Lösung wie Rsync über SSH.

## Browser

Sie haben entweder bereits einen Browser oder können einen kostenlos bekommen. Laden Sie bei Bedarf [Firefox](https://www.mozilla.org/en-US/firefox/all/) oder [Google Chrome](https://www.google.com/chrome/) herunter.

## Webzugang

### Computer / Modem

Sie benötigen einen Computer. Die Kosten können stark variieren, abhängig von Ihrem Budget und Ihrem Wohnort. Um eine einfache Website zu veröffentlichen, brauchen Sie nur einen grundlegenden Computer, der in der Lage ist, einen Editor und einen Webbrowser zu starten, sodass der Einstieg recht günstig sein kann.

Natürlich benötigen Sie einen leistungsstärkeren Computer, wenn Sie komplexe Designs erstellen, Fotos bearbeiten oder Audio- und Videodateien produzieren möchten.

Sie müssen Inhalte auf einen entfernten Server hochladen (siehe _Hosting_ unten), daher benötigen Sie ein Modem. Ihr {{Glossary("ISP", "ISP")}} kann Ihnen die Internetverbindung für ein paar Dollar pro Monat vermieten, obwohl Ihr Budget variieren kann, abhängig von Ihrem Standort.

### ISP-Zugang

Stellen Sie sicher, dass Sie über ausreichende {{Glossary("Bandwidth", "Bandbreite")}} verfügen:

- Ein Zugang mit niedriger Bandbreite kann ausreichen, um eine 'einfache' Website zu unterstützen: angemessen große Bilder, Texte, etwas CSS und JavaScript. Das wird Ihnen wahrscheinlich ein paar Dutzend Dollar kosten, einschließlich der Miete für das Modem.
- Andererseits benötigen Sie eine Breitbandverbindung, wie DSL, Kabel oder Glasfaseranschluss, wenn Sie eine anspruchsvollere Website mit Hunderten von Dateien erstellen möchten oder wenn Sie schwere Video-/Audiodateien direkt von Ihrem Webserver liefern möchten. Es könnte genauso viel kosten wie ein Zugang mit niedriger Bandbreite, bis zu mehreren Hundert Dollar pro Monat für professionellere Bedürfnisse.

## Hosting

### Verständnis von Bandbreite

Hosting-Anbieter berechnen Ihnen Gebühren basierend auf der Menge an {{Glossary("Bandwidth", "Bandbreite")}}, die Ihre Website verbraucht. Dies hängt davon ab, wie viele Personen und Web-Crawl-Roboter zu einer bestimmten Zeit auf Ihre Inhalte zugreifen und wie viel Speicherplatz Ihre Inhalte auf dem Server einnehmen. Deshalb speichern Menschen ihre Videos normalerweise auf speziellen Diensten wie YouTube, Dailymotion und Vimeo. Beispielsweise kann Ihr Anbieter einen Plan haben, der bis zu mehreren tausend Besuchern pro Tag für eine "vernünftige" Bandbreitennutzung umfasst. Seien Sie jedoch vorsichtig, da dies von einem Hosting-Anbieter zum anderen unterschiedlich definiert wird. Denken Sie daran, dass zuverlässiges, bezahltes, persönliches Hosting etwa zehn bis fünfzehn Dollar pro Monat kosten kann.

> [!NOTE]
> Es gibt so etwas wie "unbegrenzte" Bandbreite nicht. Wenn Sie eine enorme Menge an Bandbreite verbrauchen, erwarten Sie, viel Geld zu zahlen.

### Domainnamen

Ihr Domainname muss über einen Domainnamenanbieter (einen Registrar) erworben werden. Ihr Hosting-Anbieter kann auch ein Registrar sein ([Ionos](https://www.ionos.com/), [Gandi](https://www.gandi.net/en-US) beispielsweise sind gleichzeitig Registrare und Hosting-Anbieter). Der Domainname kostet normalerweise 5-15 Dollar pro Jahr. Diese Kosten variieren abhängig von:

- Lokale Verpflichtungen: Einige länderspezifische Top-Level-Domainnamen sind teurer, da verschiedene Länder unterschiedliche Preise festlegen.
- Dienstleistungen, die mit dem Domainnamen verbunden sind: Einige Registrare bieten Spamschutz, indem sie Ihre Postadresse und E-Mail-Adresse hinter ihren eigenen Adressen verbergen: Die Postadresse kann in Obhut des Registrars angegeben werden, und Ihre E-Mail-Adresse kann über den Alias Ihres Registrars versteckt werden.

### Eigenes Hosting vs. "Paket"-Hosting

Wenn Sie eine Website veröffentlichen möchten, könnten Sie alles selbst erledigen: eine Datenbank (falls erforderlich), ein Content Management System oder {{Glossary("CMS", "CMS")}} (wie [WordPress](https://wordpress.org/), [Dotclear](https://dotclear.org/), [spip](https://www.spip.net/en_rubrique25.html) usw.) einrichten, vorgefertigte oder eigene Vorlagen hochladen.

Sie könnten die Umgebung Ihres Hosting-Anbieters nutzen, für etwa zehn bis fünfzehn Dollar pro Monat, oder direkt ein dediziertes Hosting mit vorgefertigten CMSs abonnieren (z.B. [WordPress](https://wordpress.com/), [Tumblr](https://www.tumblr.com/), [Blogger](https://www.blogger.com/)). Im letzteren Fall müssen Sie nichts bezahlen, haben jedoch möglicherweise weniger Kontrolle über Templates und andere Optionen.

### Kostenloses Hosting vs. bezahltes Hosting

Möglicherweise fragen Sie sich, warum Sie für Ihr Hosting bezahlen sollten, wenn es so viele kostenlose Dienste gibt?

- Sie haben mehr Freiheit, wenn Sie bezahlen. Ihre Website gehört Ihnen, und Sie können nahtlos von einem Hosting-Anbieter zum nächsten migrieren.
- Kostenlose Hosting-Anbieter können Ihrem Inhalt, ohne Ihre Kontrolle, Werbung hinzufügen.

Es ist besser, sich für bezahltes Hosting zu entscheiden, anstatt auf kostenloses Hosting zu setzen, da es möglich ist, Ihre Dateien leicht zu verschieben, und die Betriebszeit von den meisten bezahlten Diensten garantiert wird. Die meisten Hosting-Anbieter gewähren Ihnen einen enormen Rabatt zu Beginn.

Einige Leute entscheiden sich für einen gemischten Ansatz. Beispielsweise ihr Hauptblog auf einem bezahlten Host mit vollem Domainnamen und spontanen, weniger strategischen Inhalten auf einem kostenlosen Hosting-Dienst.

## Professionelle Website-Agenturen und Hosting

Wenn Sie eine professionelle Website wünschen, dann fragen Sie wahrscheinlich eine Webagentur, es für Sie zu tun.

Hier hängen die Kosten von mehreren Faktoren ab, wie:

- Ist dies eine einfache Website mit ein paar Textseiten? Oder eine komplexere, tausend Seiten lange Website?
- Möchten Sie es regelmäßig aktualisieren? Oder wird es eine statische Website?
- Muss die Website sich mit Ihrer Firmen-IT-Struktur verbinden, um Inhalte zu sammeln (z.B. interne Daten)?
- Möchten Sie ein glänzendes neues Feature, das im Moment beliebt ist? Zum Zeitpunkt des Schreibens suchen Kunden nach Einzelseiten mit komplexem Parallax-Design.
- Muss die Agentur Benutzererlebnisse entwickeln oder komplexe {{Glossary("UX", "UX")}}-Probleme lösen? Zum Beispiel eine Strategie entwickeln, um Benutzer zu engagieren, oder A/B-Tests durchführen, um eine Lösung aus mehreren Ideen auszuwählen.

Und für das Hosting müssen Sie folgende Entscheidungen treffen:

- Möchten Sie redundante Server, falls Ihr Server ausfällt?
- Reicht eine 95% Zuverlässigkeit aus, oder benötigen Sie professionellen, durchgehenden Service?
- Möchten Sie hochkarätige, ultra-reaktionsfähige dedizierte Server, oder kommen Sie mit einer langsameren, gemeinsam genutzten Maschine aus?

Je nachdem, wie Sie diese Fragen beantworten, könnte Ihre Website zwischen Tausenden und Hunderttausenden von Dollar kosten.

## Nächste Schritte

Jetzt, da Sie verstehen, wie viel Geld Ihre Website kosten kann, ist es an der Zeit, mit der Gestaltung dieser Website zu beginnen und [Ihre Arbeitsumgebung einzurichten](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server).

- Lesen Sie weiter darüber, [wie Sie einen Texteditor auswählen und installieren](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors).
- Wenn Sie sich mehr auf das Design konzentrieren, werfen Sie einen Blick auf die [Anatomie einer Webseite](/de/docs/Learn_web_development/Howto/Design_and_accessibility/Common_web_layouts).
