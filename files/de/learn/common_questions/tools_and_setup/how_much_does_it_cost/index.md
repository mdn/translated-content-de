---
title: Wie viel kostet es, etwas im Web zu tun?
slug: Learn/Common_questions/Tools_and_setup/How_much_does_it_cost
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Sich im Web zu engagieren ist nicht so günstig, wie es aussieht. In diesem Artikel diskutieren wir, wie viel Sie möglicherweise ausgeben müssen und warum.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten bereits verstanden haben,
        <a href="/de/docs/Learn/Common_questions/Tools_and_setup/What_software_do_I_need"
          >welche Software Sie benötigen</a
        >, den Unterschied zwischen
        <a
          href="/de/docs/Learn/Common_questions/Web_mechanics/Pages_sites_servers_and_search_engines"
          >einer Webseite, einer Website, usw.</a
        >, und was
        <a href="/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name"
          >ein Domain-Name ist</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Überprüfen Sie den gesamten Prozess zur Erstellung einer Website und finden Sie heraus, wie viel jeder Schritt kosten kann.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Wenn Sie eine Website starten, können Sie nichts ausgeben oder Ihre Kosten steigen in die Höhe. In diesem Artikel besprechen wir, wie viel alles kostet und wie Sie erhalten, wofür Sie bezahlen (oder nicht bezahlen).

## Software

### Texteditoren

Sie haben wahrscheinlich bereits einen Texteditor, wie Notepad auf Windows, Gedit auf Linux, oder TextEdit auf Mac. Sie werden es einfacher finden, Code zu schreiben, wenn Sie einen Editor wählen, der farbcodiert, Ihre Syntax überprüft und Ihnen bei der Code-Struktur hilft.

Viele Editoren sind kostenlos, zum Beispiel [Brackets](https://brackets.io/), [Bluefish](https://bluefish.openoffice.nl/index.html), [TextWrangler](https://www.barebones.com/products/textwrangler/), [Eclipse](https://www.eclipse.org/), [Netbeans](https://netbeans.apache.org/) und [Visual Studio Code](https://code.visualstudio.com/). Manche, wie [Sublime Text](https://www.sublimetext.com/), können Sie so lange testen, wie Sie möchten, aber Sie werden ermutigt, dafür zu bezahlen. Manche, wie [PhpStorm](https://www.jetbrains.com/phpstorm/), können zwischen ein paar Dutzend und 200 Dollar kosten, je nach Plan, den Sie kaufen. Einige davon, wie [Microsoft Visual Studio](https://visualstudio.microsoft.com/), können Hunderte oder Tausende von Dollar kosten; obwohl Visual Studio Community für einzelne Entwickler oder Open-Source-Projekte kostenlos ist. Oft haben kostenpflichtige Editoren eine Testversion.

Zu Beginn empfehlen wir, mehrere Editoren auszuprobieren, um ein Gefühl dafür zu bekommen, welcher am besten für Sie funktioniert. Wenn Sie nur einfachen {{Glossary("HTML", "HTML")}}, {{Glossary("CSS", "CSS")}} und {{Glossary("JavaScript", "JavaScript")}} schreiben, verwenden Sie einen einfachen Editor.

Der Preis spiegelt nicht zuverlässig die Qualität oder Nützlichkeit eines Texteditors wider. Sie müssen es selbst ausprobieren und entscheiden, ob es Ihren Bedürfnissen entspricht. Zum Beispiel ist Sublime Text günstig, bietet aber viele kostenlose Plugins, die seine Funktionalität erheblich erweitern können.

### Bildbearbeitungsprogramme

Ihr System enthält wahrscheinlich ein Bildbearbeitungsprogramm oder -anzeige: Paint auf Windows, Eye of Gnome auf Ubuntu, Preview auf Mac. Diese Programme sind relativ begrenzt, bald werden Sie einen solideren Editor wünschen, um Ebenen, Effekte und Gruppierungen hinzuzufügen.

Editoren können kostenlos sein ([GIMP](https://www.gimp.org/), [Paint.NET](https://www.getpaint.net/)), mäßig teuer ([PaintShop Pro](https://www.paintshoppro.com/), weniger als 100 $) oder mehrere hundert Dollar ([Adobe Photoshop](https://www.adobe.com/products/photoshop.html)) kosten.

Sie können jeden von ihnen verwenden, da sie ähnliche Funktionalitäten haben, obwohl einige so umfassend sind, dass Sie nie alle Funktionen nutzen werden. Wenn Sie irgendwann Projekte mit anderen Designern austauschen müssen, sollten Sie herausfinden, welche Werkzeuge sie verwenden. Alle Editoren können abgeschlossene Projekte in Standarddateiformate exportieren, aber jeder Editor speichert laufende Projekte in seinem eigenen spezialisierten Format. Die meisten Bilder im Internet sind urheberrechtlich geschützt, daher ist es besser, die Lizenz der Datei zu überprüfen, bevor Sie sie verwenden. Seiten wie [Pixabay](https://pixabay.com/) bieten Bilder unter der CC0-Lizenz an, sodass Sie sie verwenden, bearbeiten und sogar mit Änderungen für kommerzielle Zwecke veröffentlichen können.

### Medieneditoren

Wenn Sie Videos oder Audiodateien in Ihre Website einfügen möchten, können Sie entweder Online-Dienste einbetten (zum Beispiel YouTube, Vimeo oder Dailymotion) oder Ihre eigenen Videos einfügen (siehe unten für Bandbreitenkosten).

Für Audiodateien finden Sie kostenlose Software ([Audacity](https://www.audacityteam.org/), [Wavosaur](https://www.wavosaur.com/)) oder zahlen Sie bis zu mehreren hundert Dollar ([Sound Forge](https://www.magix.com/us/music-editing/sound-forge/), [Adobe Audition](https://www.adobe.com/products/audition.html)). Ebenso kann Videoschnittsoftware kostenlos sein ([PiTiVi](https://www.pitivi.org/), [OpenShot](https://www.openshot.org/) für Linux, [iMovie](https://support.apple.com/imovie) für Mac), weniger als 100 $ ([Adobe Premiere Elements](https://www.adobe.com/products/premiere-elements.html)), oder mehrere hundert Dollar kosten ([Adobe Premiere Pro](https://www.adobe.com/products/premiere.html), [Avid Media Composer](https://www.avid.com/media-composer), [Final Cut Pro](https://www.apple.com/final-cut-pro/)). Die Software, die Sie mit Ihrer Digitalkamera erhalten haben, kann alle Ihre Bedürfnisse abdecken.

### Veröffentlichungstools

Sie benötigen auch eine Möglichkeit, Dateien von Ihrer Festplatte auf einen entfernten Webserver hochzuladen. Dazu sollten Sie ein Veröffentlichungstool wie einen {{Glossary("FTP", "(S)FTP-Client")}}, [RSync](https://en.wikipedia.org/wiki/Rsync) oder [Git/GitHub](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) verwenden.

Jedes Betriebssystem beinhaltet einen (S)FTP-Client als Teil seines Dateimanagers. Windows Explorer, Nautilus (ein gängiger Linux-Dateimanager) und der Mac Finder enthalten diese Funktionalität. Oft entscheiden sich Menschen jedoch für spezielle (S)FTP-Clients, um lokale oder entfernte Verzeichnisse nebeneinander anzuzeigen und Serverpasswörter zu speichern.

Wenn Sie einen (S)FTP-Client installieren möchten, gibt es mehrere zuverlässige und kostenlose Optionen: zum Beispiel, [FileZilla](https://filezilla-project.org/) für alle Plattformen, [WinSCP](https://winscp.net/eng/index.php) für Windows, [Cyberduck](https://cyberduck.io/) für Mac oder Windows, [und mehr](https://en.wikipedia.org/wiki/List_of_FTP_server_software).

Da FTP von Natur aus unsicher ist, sollten Sie sicherstellen, SFTP zu verwenden – die sichere, verschlüsselte Version von FTP, die die meisten Hosting-Websites, mit denen Sie heutzutage zu tun haben, standardmäßig anbieten – oder eine andere sichere Lösung wie Rsync über SSH.

## Browser

Sie haben entweder bereits einen Browser oder können einen kostenlos bekommen. Wenn nötig, laden Sie Firefox [hier](https://www.mozilla.org/en-US/firefox/all/) oder Google Chrome [hier](https://www.google.com/chrome/) herunter.

## Webzugang

### Computer / Modem

Sie benötigen einen Computer. Die Kosten können stark variieren, je nach Ihrem Budget und wo Sie wohnen. Um eine einfache Website zu veröffentlichen, benötigen Sie nur einen grundlegenden Computer, der in der Lage ist, einen Editor und einen Webbrowser zu starten. Das Einstiegsniveau kann also recht niedrig sein.

Natürlich benötigen Sie einen leistungsfähigeren Computer, wenn Sie komplizierte Designs erstellen, Fotos nachbearbeiten oder Audio- und Videodateien produzieren möchten.

Sie müssen Inhalte auf einen entfernten Server hochladen (siehe _Hosting_ unten), daher benötigen Sie ein Modem. Ihr {{Glossary("ISP", "ISP")}} kann Ihnen Internetverbindungen für ein paar Dollar pro Monat vermieten, obwohl Ihr Budget je nach Ihrem Standort variieren kann.

### ISP-Zugang

Stellen Sie sicher, dass Sie über ausreichende {{Glossary("Bandwidth", "Bandbreite")}} verfügen:

- Ein Zugang mit niedriger Bandbreite kann ausreichen, um eine 'einfache' Website zu unterstützen: angemessen dimensionierte Bilder, Texte, etwas CSS und JavaScript. Das wird Sie wahrscheinlich ein paar Dutzend Dollar kosten, einschließlich der Miete für das Modem.
- Andererseits benötigen Sie eine Hochgeschwindigkeitsverbindung, wie DSL, Kabel oder Glasfaserzugang, wenn Sie eine fortgeschrittene Website mit Hunderten von Dateien betreiben möchten oder wenn Sie schwere Video-/Audio-Dateien direkt von Ihrem Webserver bereitstellen möchten. Es könnte genauso viel kosten wie der Zugang mit niedriger Bandbreite, bis zu mehreren hundert Dollar pro Monat für professionellere Bedürfnisse.

## Hosting

### Bandbreite verstehen

Hosting-Anbieter berechnen Ihnen Gebühren basierend darauf, wie viel {{Glossary("Bandwidth", "Bandbreite")}} Ihre Website verbraucht. Dies hängt davon ab, wie viele Menschen und Web-Crawling-Roboter in einem bestimmten Zeitraum auf Ihre Inhalte zugreifen und wie viel Serverplatz Ihre Inhalte einnehmen. Aus diesem Grund speichern Menschen in der Regel ihre Videos auf dedizierten Diensten wie YouTube, Dailymotion und Vimeo. Zum Beispiel kann Ihr Anbieter einen Plan haben, der bis zu mehreren tausend Besuchern pro Tag mit "angemessenem" Bandbreitenverbrauch umfasst. Seien Sie jedoch vorsichtig, da dies von einem Hosting-Anbieter zum anderen unterschiedlich definiert wird. Denken Sie daran, dass zuverlässiges, kostenpflichtiges, persönliches Hosting etwa zehn bis fünfzehn Dollar pro Monat kosten kann.

> [!NOTE]
> Es gibt keine "unbegrenzte" Bandbreite. Wenn Sie eine riesige Menge an Bandbreite verbrauchen, müssen Sie mit enormen Kosten rechnen.

### Domain-Namen

Ihr Domainname muss über einen Domain-Name-Provider (einen Registrar) erworben werden. Ihr Hosting-Anbieter kann auch ein Registrar sein ([Ionos](https://www.ionos.com/), [Gandi](https://www.gandi.net/en-US) sind zum Beispiel gleichzeitig Registrare und Hosting-Anbieter). Der Domainname kostet normalerweise 5-15 $ pro Jahr. Dieser Preis variiert je nach:

- Lokalen Verpflichtungen: einige länderspezifische Top-Level-Domain-Namen sind teurer, da verschiedene Länder unterschiedliche Preise festlegen.
- Mit dem Domainnamen verbundene Dienste: einige Registrare bieten Spam-Schutz, indem sie Ihre Post- und E-Mail-Adresse hinter ihren eigenen Adressen verbergen: die Postanschrift kann im Auftrag des Registrars angegeben werden, und Ihre E-Mail-Adresse kann über das Alias des Registrars verborgen werden.

### Do-it-yourself-Hosting vs. "verpacktes" Hosting

Wenn Sie eine Website veröffentlichen möchten, könnten Sie alles selbst machen: eine Datenbank (falls benötigt), Content-Management-System oder {{Glossary("CMS", "CMS")}} einrichten (wie [Wordpress](https://wordpress.org/), [Dotclear](https://dotclear.org/), [spip](https://www.spip.net/en_rubrique25.html), usw.), vorgefertigte oder eigene Vorlagen hochladen.

Sie könnten die Umgebung Ihres Hosting-Anbieters für ungefähr zehn bis fünfzehn Dollar im Monat nutzen oder direkt zu einem dedizierten Hosting-Dienst mit vorgefertigten CMSs wechseln (z.B. [Wordpress](https://wordpress.com/), [Tumblr](https://www.tumblr.com/), [Blogger](https://www.blogger.com/)). Bei letzterem müssen Sie nichts bezahlen, haben aber möglicherweise weniger Kontrolle über die Gestaltung und andere Optionen.

### Kostenloses vs. kostenpflichtiges Hosting

Sie fragen sich vielleicht, warum sollte ich für mein Hosting bezahlen, wenn es so viele kostenlose Dienste gibt?

- Sie haben mehr Freiheit, wenn Sie bezahlen. Ihre Website gehört Ihnen und Sie können nahtlos von einem Hosting-Anbieter zum nächsten wechseln.
- Kostenlose Hosting-Anbieter können Ihrer Inhalte Werbung hinzufügen, die außerhalb Ihrer Kontrolle liegt.

Es ist besser, für Hosting zu zahlen, anstatt sich auf kostenloses Hosting zu verlassen, da Sie Ihre Dateien problemlos verschieben können und die Betriebszeit von den meisten kostenpflichtigen Websites garantiert wird. Die meisten Hosting-Anbieter bieten Ihnen anfangs einen großen Rabatt.

Einige Menschen entscheiden sich für einen gemischten Ansatz. Zum Beispiel ihr Hauptblog auf einem kostenpflichtigen Host mit vollem Domainnamen und spontanen, weniger strategischen Inhalten auf einem kostenlosen Host-Dienst.

## Professionelle Website-Agenturen und Hosting

Wenn Sie eine professionelle Website wünschen, werden Sie wahrscheinlich eine Webagentur damit beauftragen.

Hier hängen die Kosten von mehreren Faktoren ab, wie:

- Ist dies eine einfache Website mit wenigen Textseiten? Oder eine komplexere, tausendseitige Website?
- Möchten Sie sie regelmäßig aktualisieren? Oder wird es eine statische Website?
- Muss die Website sich mit Ihrer Unternehmens-IT-Struktur verbinden, um Inhalte zu sammeln (zum Beispiel interne Daten)?
- Möchten Sie ein schickes neues Feature, das im Moment populär ist? Zum Zeitpunkt des Schreibens suchen Kunden nach Seiten mit komplexem Parallax.
- Werden Sie die Agentur benötigen, um Benutzererfahrungen zu durchdenken oder komplexe {{Glossary("UX", "UX")}}-Probleme zu lösen? Zum Beispiel Erstellen einer Strategie zur Benutzerbindung oder A/B-Testing zur Auswahl einer Lösung unter mehreren Ideen.

Und für das Hosting müssen Sie folgende Entscheidungen berücksichtigen:

- Möchten Sie redundante Server, falls Ihr Server ausfällt?
- Ist 95% Zuverlässigkeit ausreichend oder benötigen Sie professionellen, rund um die Uhr Service?
- Wollen Sie hochkarätige, ultra-reaktive dedizierte Server, oder können Sie mit einer langsameren, gemeinsamen Maschine leben?

Je nach Antwort auf diese Fragen könnte Ihre Website Tausende bis Hunderttausende von Dollar kosten.

## Nächste Schritte

Nun, da Sie verstanden haben, welche Kosten Ihre Website verursachen kann, ist es an der Zeit, mit dem Design dieser Website und dem [Einrichten Ihrer Arbeitsumgebung](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server) zu beginnen.

- Lesen Sie weiter darüber, [wie Sie einen Texteditor auswählen und installieren](/de/docs/Learn/Common_questions/Tools_and_setup/Available_text_editors).
- Wenn Sie sich mehr auf Design konzentrieren, werfen Sie einen Blick auf die [Anatomie einer Webseite](/de/docs/Learn/Common_questions/Design_and_accessibility/Common_web_layouts).
