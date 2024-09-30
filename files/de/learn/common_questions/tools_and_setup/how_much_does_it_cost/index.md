---
title: Wie viel kostet es, etwas im Web zu tun?
slug: Learn/Common_questions/Tools_and_setup/How_much_does_it_cost
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Im Web mitzumachen, ist nicht so günstig, wie es scheint. In diesem Artikel besprechen wir, wie viel Sie möglicherweise ausgeben müssen und warum.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten bereits verstehen,
        <a href="/de/docs/Learn/Common_questions/Tools_and_setup/What_software_do_I_need"
          >welche Software Sie benötigen</a
        >, den Unterschied zwischen
        <a
          href="/de/docs/Learn/Common_questions/Web_mechanics/Pages_sites_servers_and_search_engines"
          >einer Webseite, einer Website etc.</a
        > und was
        <a href="/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name"
          >ein Domainname ist</a
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

Beim Start einer Website können Sie nichts ausgeben oder Ihre Kosten können explodieren. In diesem Artikel besprechen wir, wie viel alles kostet und wie Sie das bekommen, wofür Sie bezahlen (oder nicht bezahlen).

## Software

### Texteditoren

Sie haben wahrscheinlich bereits einen Texteditor: wie Notepad auf Windows, Gedit auf Linux und TextEdit auf Mac. Das Schreiben von Code wird erleichtert, wenn Sie einen Editor wählen, der farblich kodiert, Ihre Syntax überprüft und Ihnen bei der Code-Strukturierung hilft.

Viele Editoren sind kostenlos, zum Beispiel [Brackets](https://brackets.io/), [Bluefish](https://bluefish.openoffice.nl/index.html), [TextWrangler](https://www.barebones.com/products/textwrangler/), [Eclipse](https://www.eclipse.org/), [Netbeans](https://netbeans.apache.org/) und [Visual Studio Code](https://code.visualstudio.com/). Einige, wie [Sublime Text](https://www.sublimetext.com/), können Sie beliebig lange testen, aber es wird empfohlen, zu bezahlen. Einige, wie [PhpStorm](https://www.jetbrains.com/phpstorm/), können zwischen einigen Dutzend und 200 Dollar kosten, je nach erworbenem Plan. Einige von ihnen, wie [Microsoft Visual Studio](https://visualstudio.microsoft.com/), können Hunderte oder Tausende von Dollar kosten; Visual Studio Community ist jedoch für individuelle Entwickler oder Open-Source-Projekte kostenlos. Häufig bieten kostenpflichtige Editoren eine Testversion an.

Wir empfehlen, mehrere Editoren auszuprobieren, um herauszufinden, welcher am besten für Sie funktioniert. Wenn Sie nur einfachen [HTML](/de/docs/Glossary/HTML), [CSS](/de/docs/Glossary/CSS) und [JavaScript](/de/docs/Glossary/JavaScript) schreiben, wählen Sie einen einfachen Editor.

Der Preis spiegelt nicht zuverlässig die Qualität oder Nützlichkeit eines Texteditors wider. Sie müssen es selbst ausprobieren und entscheiden, ob es Ihren Bedürfnissen entspricht. Zum Beispiel ist Sublime Text günstig, kommt aber mit vielen kostenlosen Plugins, die seine Funktionalität erheblich erweitern können.

### Bildbearbeitung

Ihr System enthält wahrscheinlich einen einfachen Bildeditor oder Betrachter: Paint auf Windows, Eye of Gnome auf Ubuntu, Preview auf Mac. Diese Programme sind relativ begrenzt, und Sie werden bald einen leistungsfähigeren Editor wünschen, um Ebenen, Effekte und Gruppierungen hinzuzufügen.

Editoren können kostenlos sein ([GIMP](https://www.gimp.org/), [Paint.NET](https://www.getpaint.net/)), mäßig teuer ([PaintShop Pro](https://www.paintshoppro.com/), weniger als 100 $) oder mehrere hundert Dollar ([Adobe Photoshop](https://www.adobe.com/products/photoshop.html)).

Sie können jeden von ihnen verwenden, da sie eine ähnliche Funktionalität bieten, obwohl einige so umfassend sind, dass Sie nie jede Funktion nutzen werden. Wenn Sie irgendwann Projekte mit anderen Designern austauschen müssen, sollten Sie herausfinden, welche Werkzeuge sie verwenden. Alle Editoren können fertige Projekte in Standarddateiformate exportieren, aber jeder Editor speichert laufende Projekte in seinem eigenen spezialisierten Format. Die meisten Bilder im Internet sind urheberrechtlich geschützt, daher ist es besser, die Lizenz der Datei zu überprüfen, bevor Sie sie verwenden. Seiten wie [Pixabay](https://pixabay.com/) bieten Bilder unter CC0-Lizenz an, so dass Sie sie verwenden, ändern und für kommerzielle Zwecke veröffentlichen können, auch mit Modifikationen.

### Medienbearbeitung

Wenn Sie Video oder Audio in Ihre Website einfügen möchten, können Sie entweder Online-Dienste (zum Beispiel YouTube, Vimeo oder Dailymotion) einbetten oder Ihre eigenen Videos einfügen (siehe unten für Bandbreitenkosten).

Für Audiodateien finden Sie kostenlose Software ([Audacity](https://www.audacityteam.org/), [Wavosaur](https://www.wavosaur.com/)) oder bezahlen bis zu ein paar hundert Dollar ([Sound Forge](https://www.magix.com/us/music-editing/sound-forge/), [Adobe Audition](https://www.adobe.com/products/audition.html)). Ebenso kann Videoschnitt-Software kostenlos sein ([PiTiVi](https://www.pitivi.org/), [OpenShot](https://www.openshot.org/) für Linux, [iMovie](https://support.apple.com/imovie) für Mac), weniger als 100 $ ([Adobe Premiere Elements](https://www.adobe.com/products/premiere-elements.html)) oder mehrere hundert Dollar ([Adobe Premiere Pro](https://www.adobe.com/products/premiere.html), [Avid Media Composer](https://www.avid.com/media-composer), [Final Cut Pro](https://www.apple.com/final-cut-pro/)). Die Software, die Sie mit Ihrer Digitalkamera erhalten haben, könnte alle Ihre Bedürfnisse abdecken.

### Veröffentlichungstools

Sie benötigen auch eine Möglichkeit, Dateien hochzuladen: von Ihrer Festplatte zu einem entfernten Webserver. Dazu sollten Sie ein Veröffentlichungstool wie einen (S)[FTP-Client](/de/docs/Glossary/FTP), [RSync](https://en.wikipedia.org/wiki/Rsync) oder [Git/GitHub](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) verwenden.

Jedes Betriebssystem enthält einen (S)FTP-Client als Teil seines Dateimanagers. Windows Explorer, Nautilus (ein üblicher Linux-Dateimanager) und der Mac Finder beinhalten diese Funktionalität. Dennoch wählen viele Menschen spezialisierte (S)FTP-Clients, um lokale oder entfernte Verzeichnisse nebeneinander anzuzeigen und Server-Passwörter zu speichern.

Wenn Sie einen (S)FTP-Client installieren möchten, gibt es mehrere zuverlässige und kostenlose Optionen: zum Beispiel [FileZilla](https://filezilla-project.org/) für alle Plattformen, [WinSCP](https://winscp.net/eng/index.php) für Windows, [Cyberduck](https://cyberduck.io/) für Mac oder Windows, [und mehr](https://en.wikipedia.org/wiki/List_of_FTP_server_software).

Da FTP von Natur aus unsicher ist, sollten Sie sicherstellen, dass Sie SFTP verwenden - die sichere, verschlüsselte Version von FTP, die die meisten Hosting-Sites, mit denen Sie es heutzutage zu tun haben werden, standardmäßig anbieten - oder eine andere sichere Lösung wie Rsync über SSH.

## Browser

Sie haben entweder bereits einen Browser oder können einen kostenlos erhalten. Falls nötig, laden Sie Firefox [hier](https://www.mozilla.org/en-US/firefox/all/) oder Google Chrome [hier](https://www.google.com/chrome/) herunter.

## Webzugang

### Computer / Modem

Sie benötigen einen Computer. Die Kosten können je nach Budget und Wohnort stark variieren. Um eine einfache Website zu veröffentlichen, benötigen Sie nur einen grundlegenden Computer, der in der Lage ist, einen Editor und einen Webbrowser zu starten, sodass das Einstiegsniveau recht niedrig sein kann.

Natürlich benötigen Sie einen ernsthafteren Computer, wenn Sie komplizierte Designs erstellen, Fotos bearbeiten oder Audio- und Videodateien produzieren möchten.

Sie müssen Inhalte auf einen entfernten Server hochladen (siehe _Hosting_ unten), daher benötigen Sie ein Modem. Ihr [ISP](/de/docs/Glossary/ISP) kann Ihnen Internetkonnektivität für einige wenige Dollar pro Monat vermieten, obwohl Ihr Budget je nach Standort variieren kann.

### ISP-Zugang

Achten Sie darauf, dass Sie über ausreichende [Bandbreite](/de/docs/Glossary/Bandwidth) verfügen:

- Ein Zugang mit niedriger Bandbreite kann ausreichen, um eine 'einfache' Website mit angemessen großen Bildern, Texten, ein wenig CSS und JavaScript zu unterstützen. Das kostet Sie wahrscheinlich einige Dutzend Dollar, einschließlich der Miete für das Modem.
- Auf der anderen Seite benötigen Sie einen hochbandbreitigen Zugang wie DSL, Kabel oder Glasfaser, wenn Sie eine fortgeschrittenere Website mit Hunderten von Dateien wünschen oder wenn Sie schwere Video-/Audiodateien direkt von Ihrem Webserver liefern möchten. Es könnte das Gleiche wie der Zugang mit niedriger Bandbreite kosten, bis zu mehreren hundert Dollar pro Monat für professionellere Bedürfnisse.

## Hosting

### Bandbreite verstehen

Hosting-Anbieter berechnen Ihnen in Abhängigkeit davon, wie viel [Bandbreite](/de/docs/Glossary/Bandwidth) Ihre Website verbraucht. Dies hängt davon ab, wie viele Personen und Webcrawler-Roboter auf Ihre Inhalte in einem bestimmten Zeitraum zugreifen und wie viel Serverplatz Ihre Inhalte beanspruchen. Aus diesem Grund speichern viele Menschen ihre Videos auf spezialisierten Diensten wie YouTube, Dailymotion und Vimeo. Beispielsweise kann Ihr Anbieter einen Tarif haben, der bis zu mehreren tausend Besuchern pro Tag bei "vernünftigem" Bandbreitenverbrauch umfasst. Seien Sie jedoch vorsichtig, da dies von einem Hosting-Anbieter zum anderen unterschiedlich definiert wird. Denken Sie daran, dass zuverlässiges, kostenpflichtiges, persönliches Hosting etwa zehn bis fünfzehn Dollar pro Monat kosten kann.

> [!NOTE]
> Es gibt keine "unbegrenzte" Bandbreite. Wenn Sie eine riesige Menge an Bandbreite verbrauchen, erwarten Sie, eine riesige Menge Geld zu zahlen.

### Domainnamen

Ihr Domainname muss über einen Domainnamen-Anbieter (einen Registrar) erworben werden. Ihr Hosting-Anbieter kann auch ein Registrar sein ([Ionos](https://www.ionos.com/), [Gandi](https://www.gandi.net/en-US) zum Beispiel sind gleichzeitig Registrare und Hosting-Anbieter). Der Domainname kostet normalerweise 5-15 $ pro Jahr. Diese Kosten variieren je nach:

- Lokalen Verpflichtungen: Einige Länder-Top-Level-Domainnamen sind teurer, da verschiedene Länder unterschiedliche Preise festlegen.
- Dienste im Zusammenhang mit dem Domainnamen: Einige Registrare bieten Spamschutz, indem sie Ihre Postadresse und E-Mail-Adresse hinter ihren eigenen Adressen verbergen: Die Postadresse kann über den Registrar angegeben werden, und Ihre E-Mail-Adresse kann über das Alias Ihres Registrars verschleiert werden.

### Selbsthosting vs. "verpacktes" Hosting

Wenn Sie eine Website veröffentlichen möchten, könnten Sie alles selbst tun: eine Datenbank einrichten (falls erforderlich), ein Content Management System oder [CMS](/de/docs/Glossary/CMS) (wie [Wordpress](https://wordpress.org/), [Dotclear](https://dotclear.org/), [spip](https://www.spip.net/en_rubrique25.html) usw.), vorgefertigte oder eigene Vorlagen hochladen.

Sie könnten die Umgebung Ihres Hosting-Anbieters nutzen, für etwa zehn bis fünfzehn Dollar pro Monat, oder direkt einen dedizierten Hosting-Dienst mit vorgefertigten CMSs abonnieren (z.B. [Wordpress](https://wordpress.com/), [Tumblr](https://www.tumblr.com/), [Blogger](https://www.blogger.com/)). Bei letzteren müssen Sie nichts bezahlen, haben aber möglicherweise weniger Kontrolle über Vorlagen und andere Optionen.

### Kostenloses Hosting vs. kostenpflichtiges Hosting

Vielleicht fragen Sie sich, warum sollte ich für mein Hosting bezahlen, wenn es so viele kostenlose Dienste gibt?

- Sie haben mehr Freiheit, wenn Sie bezahlen. Ihre Website gehört Ihnen, und Sie können nahtlos von einem Hosting-Anbieter zum nächsten wechseln.
- Kostenlose Hosting-Anbieter können Werbung zu Ihren Inhalten hinzufügen, die Sie nicht kontrollieren können.

Es ist besser, sich für kostenpflichtiges Hosting zu entscheiden, anstatt sich auf kostenloses Hosting zu verlassen, da es möglich ist, Ihre Dateien einfach zu verschieben, und die Verfügbarkeit wird von den meisten kostenpflichtigen Sites garantiert. Die meisten Hosting-Anbieter bieten Ihnen einen großen Rabatt, um anzufangen.

Einige Menschen wählen einen gemischten Ansatz. Zum Beispiel ihr Hauptblog auf einem kostenpflichtigen Host mit einem vollständigen Domainnamen und spontanen, weniger strategischen Inhalten auf einem kostenlosen Hosting-Service.

## Professionelle Website-Agenturen und Hosting

Wenn Sie eine professionelle Website wünschen, werden Sie wahrscheinlich eine Web-Agentur damit beauftragen, diese für Sie zu erstellen.

Hier hängen die Kosten von mehreren Faktoren ab, wie zum Beispiel:

- Ist dies eine einfache Website mit ein paar Textseiten? Oder eine komplexere, tausendseitige Website?
- Möchten Sie diese regelmäßig aktualisieren? Oder wird es eine statische Website sein?
- Muss die Website an die IT-Struktur Ihres Unternehmens angeschlossen werden, um Inhalte zu sammeln (z.B. interne Daten)?
- Möchten Sie eine glänzende neue Funktion, die derzeit beliebt ist? Zum Zeitpunkt des Schreibens suchen Kunden nach Einzelseiten mit komplexem Parallax.
- Benötigen Sie die Agentur zur Erstellung von Nutzerstorys oder zur Lösung komplexer [UX](/de/docs/Glossary/UX)-Probleme? Zum Beispiel eine Strategie zur Benutzerbindung erstellen oder A/B-Tests durchführen, um eine Lösung aus mehreren Ideen auszuwählen.

Und für das Hosting müssen Sie folgende Entscheidungen berücksichtigen:

- Möchten Sie redundante Server, falls Ihr Server ausfällt?
- Ist eine 95%ige Zuverlässigkeit ausreichend oder benötigen Sie einen professionellen 24-Stunden-Service?
- Möchten Sie hoch professionelle, ultraschnelle dedizierte Server, oder können Sie mit einer langsameren, geteilten Maschine auskommen?

Abhängig von Ihren Antworten auf diese Fragen könnte Ihre Website Tausende bis Hunderttausende von Dollar kosten.

## Nächste Schritte

Jetzt, da Sie verstehen, welchen Betrag Ihre Website kosten könnte, ist es an der Zeit, mit dem Design der Website zu beginnen und [Ihren Arbeitsbereich einzurichten](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server).

- Lesen Sie weiter über [wie Sie einen Texteditor auswählen und installieren](/de/docs/Learn/Common_questions/Tools_and_setup/Available_text_editors).
- Wenn Sie sich mehr auf das Design konzentrieren, werfen Sie einen Blick auf die [Anatomie einer Webseite](/de/docs/Learn/Common_questions/Design_and_accessibility/Common_web_layouts).
