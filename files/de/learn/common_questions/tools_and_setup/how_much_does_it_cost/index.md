---
title: Wie viel kostet es, etwas im Web zu tun?
slug: Learn/Common_questions/Tools_and_setup/How_much_does_it_cost
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Sich im Web zu engagieren, ist nicht so günstig, wie es aussieht. In diesem Artikel besprechen wir, wie viel Sie möglicherweise ausgeben müssen und warum.

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
          >einer Webseite, einer Website, etc.</a
        >, und was ein
        <a href="/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name"
          >Domainname ist</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Überprüfen Sie den vollständigen Prozess zur Erstellung einer Website und erfahren Sie, wie viel jeder Schritt kosten kann.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Beim Start einer Website können Sie entweder nichts ausgeben, oder die Kosten können explodieren. In diesem Artikel besprechen wir, wie viel alles kostet und wie Sie bekommen, wofür Sie bezahlen (oder nicht zahlen).

## Software

### Text-Editoren

Sie haben wahrscheinlich einen Text-Editor: Zum Beispiel Notepad auf Windows, Gedit auf Linux, TextEdit auf Mac. Sie werden es einfacher finden, Code zu schreiben, wenn Sie einen Editor wählen, der farblich hervorhebt, Ihre Syntax überprüft und Ihnen beim Strukturieren des Codes hilft.

Viele Editoren sind kostenlos, zum Beispiel [Brackets](https://brackets.io/), [Bluefish](https://bluefish.openoffice.nl/index.html), [TextWrangler](https://www.barebones.com/products/textwrangler/), [Eclipse](https://www.eclipse.org/), [Netbeans](https://netbeans.apache.org/) und [Visual Studio Code](https://code.visualstudio.com/). Einige, wie [Sublime Text](https://www.sublimetext.com/), können Sie so lange testen, wie Sie möchten, aber es wird empfohlen zu bezahlen. Einige, wie [PhpStorm](https://www.jetbrains.com/phpstorm/), können je nach Plan zwischen wenigen Dutzend und 200 Dollar kosten. Manchmal kosten sie, wie [Microsoft Visual Studio](https://visualstudio.microsoft.com/), Hunderte oder Tausende von Dollar; Visual Studio Community ist jedoch kostenlos für einzelne Entwickler oder Open-Source-Projekte. Oft haben kostenpflichtige Editoren eine Testversion.

Zu Beginn empfehlen wir, mehrere Editoren auszuprobieren, um ein Gefühl dafür zu bekommen, welcher am besten für Sie geeignet ist. Wenn Sie nur einfachen [HTML](/de/docs/Glossary/HTML), [CSS](/de/docs/Glossary/CSS) und [JavaScript](/de/docs/Glossary/JavaScript) schreiben, sollten Sie einen einfachen Editor wählen.

Der Preis spiegelt nicht zuverlässig die Qualität oder Nützlichkeit eines Text-Editors wider. Sie müssen es selbst ausprobieren und entscheiden, ob es Ihren Anforderungen entspricht. Zum Beispiel ist Sublime Text günstig, verfügt jedoch über viele kostenlose Plugins, die seine Funktionalität erheblich erweitern können.

### Bildbearbeitungsprogramme

Ihr System enthält wahrscheinlich einen einfachen Bildeditor oder Betrachter: Paint auf Windows, Eye of Gnome auf Ubuntu, Preview auf Mac. Diese Programme sind relativ begrenzt, bald werden Sie einen robusteren Editor benötigen, um Ebenen, Effekte und Gruppierungen hinzuzufügen.

Editoren können kostenlos sein ([GIMP](https://www.gimp.org/), [Paint.NET](https://www.getpaint.net/)), mäßig teuer ([PaintShop Pro](https://www.paintshoppro.com/), unter 100 $), oder mehrere hundert Dollar ([Adobe Photoshop](https://www.adobe.com/products/photoshop.html)) kosten.

Sie können jedes dieser Programme verwenden, da sie ähnliche Funktionen haben, obwohl einige so umfassend sind, dass Sie nie jede Funktion nutzen werden. Falls Sie irgendwann Projekte mit anderen Designern austauschen müssen, sollten Sie herausfinden, welche Werkzeuge diese verwenden. Alle Editoren können fertige Projekte in Standarddateiformate exportieren, aber jeder Editor speichert laufende Projekte in seinem eigenen spezialisierten Format. Die meisten Bilder im Internet sind urheberrechtlich geschützt, daher ist es besser, die Lizenz der Datei zu überprüfen, bevor Sie sie verwenden. Seiten wie [Pixabay](https://pixabay.com/) bieten Bilder unter der CC0-Lizenz an, sodass Sie sie auch mit Modifikationen für kommerzielle Zwecke verwenden, bearbeiten und veröffentlichen können.

### Medienbearbeitungsprogramme

Wenn Sie Video oder Audio in Ihre Website einbinden möchten, können Sie entweder Online-Dienste einbetten (z.B. YouTube, Vimeo oder Dailymotion) oder Ihre eigenen Videos einfügen (siehe unten für Bandbreitenkosten).

Für Audiodateien können Sie kostenlose Software finden ([Audacity](https://www.audacityteam.org/), [Wavosaur](https://www.wavosaur.com/)) oder bis zu ein paar hundert Dollar zahlen ([Sound Forge](https://www.magix.com/us/music-editing/sound-forge/), [Adobe Audition](https://www.adobe.com/products/audition.html)). Ebenso kann Videoschnittsoftware kostenlos sein ([PiTiVi](https://www.pitivi.org/), [OpenShot](https://www.openshot.org/) für Linux, [iMovie](https://support.apple.com/imovie) für Mac), weniger als 100 $ ([Adobe Premiere Elements](https://www.adobe.com/products/premiere-elements.html)) oder mehrere hundert Dollar ([Adobe Premiere Pro](https://www.adobe.com/products/premiere.html), [Avid Media Composer](https://www.avid.com/media-composer), [Final Cut Pro](https://www.apple.com/final-cut-pro/)) kosten. Die Software, die Sie mit Ihrer Digitalkamera erhalten haben, könnte alle Ihre Bedürfnisse abdecken.

### Veröffentlichungswerkzeuge

Sie benötigen auch eine Möglichkeit, Dateien hochzuladen: von Ihrer Festplatte zu einem entfernten Webserver. Dazu sollten Sie ein Veröffentlichungswerkzeug wie einen (S)[FTP client](/de/docs/Glossary/FTP), [RSync](https://en.wikipedia.org/wiki/Rsync) oder [Git/GitHub](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) verwenden.

Jedes Betriebssystem enthält einen (S)FTP-Client als Teil seines Dateimanagers. Der Windows Explorer, Nautilus (ein gängiger Linux-Dateimanager) und der Mac Finder beinhalten diese Funktionalität. Dennoch wählen viele Menschen dedizierte (S)FTP-Clients, um lokale oder entfernte Verzeichnisse nebeneinander anzuzeigen und Serverpasswörter zu speichern.

Wenn Sie einen (S)FTP-Client installieren möchten, gibt es mehrere zuverlässige und kostenlose Optionen: zum Beispiel [FileZilla](https://filezilla-project.org/) für alle Plattformen, [WinSCP](https://winscp.net/eng/index.php) für Windows, [Cyberduck](https://cyberduck.io/) für Mac oder Windows, [und mehr](https://en.wikipedia.org/wiki/List_of_FTP_server_software).

Da FTP von Natur aus unsicher ist, sollten Sie sicherstellen, SFTP zu verwenden — die sichere, verschlüsselte Version von FTP, die die meisten Hosting-Seiten, mit denen Sie heutzutage umgehen, standardmäßig anbieten — oder eine andere sichere Lösung wie Rsync über SSH.

## Browser

Sie haben entweder bereits einen Browser oder können einen kostenlos erhalten. Wenn nötig, laden Sie Firefox [hier](https://www.mozilla.org/en-US/firefox/all/) oder Google Chrome [hier](https://www.google.com/chrome/) herunter.

## Internetzugang

### Computer / Modem

Sie benötigen einen Computer. Die Kosten können stark variieren, abhängig von Ihrem Budget und Ihrem Wohnort. Um eine einfache Website zu veröffentlichen, brauchen Sie nur einen einfachen Computer, der in der Lage ist, einen Editor zu starten und einen Webbrowser auszuführen, sodass das Einstiegsniveau recht niedrig sein kann.

Natürlich benötigen Sie einen leistungsfähigeren Computer, wenn Sie komplizierte Designs erstellen, Fotos retuschieren oder Audio- und Videodateien produzieren möchten.

Um Inhalte auf einen entfernten Server hochzuladen (siehe _Hosting_ unten), benötigen Sie ein Modem. Ihr [ISP](/de/docs/Glossary/ISP) kann Ihnen die Internetverbindung für ein paar Dollar pro Monat vermieten, obwohl Ihr Budget variieren kann, je nach Ihrem Standort.

### ISP-Zugang

Stellen Sie sicher, dass Sie über ausreichende [Bandbreite](/de/docs/Glossary/Bandwidth) verfügen:

- Ein Zugang mit niedriger Bandbreite kann ausreichen, um eine "einfache" Website zu unterstützen: angemessen große Bilder, Texte, einige CSS und JavaScript. Das wird Ihnen wahrscheinlich einige Dutzend Dollar kosten, inklusive der Miete für das Modem.
- Andererseits benötigen Sie eine hochbandbreitige Verbindung, wie DSL, Kabel oder Glasfaserzugang, wenn Sie eine fortgeschrittene Website mit hunderten von Dateien haben möchten oder wenn Sie schwere Video-/Audiodateien direkt von Ihrem Webserver bereitstellen möchten. Es könnte das Gleiche kosten wie der Zugang mit niedriger Bandbreite, bis zu mehreren hundert Dollar pro Monat für professionellere Bedürfnisse.

## Hosting

### Bandbreite verstehen

Hosting-Anbieter berechnen Ihnen Gebühren basierend darauf, wie viel [Bandbreite](/de/docs/Glossary/Bandwidth) Ihre Website verbraucht. Dies hängt davon ab, wie viele Personen und Webcrawler-Roboter in einer bestimmten Zeit auf Ihre Inhalte zugreifen und wie viel Serverplatz Ihre Inhalte beanspruchen. Aus diesem Grund speichern die meisten Menschen ihre Videos auf speziellen Diensten wie YouTube, Dailymotion und Vimeo. Zum Beispiel kann Ihr Anbieter einen Plan haben, der mehrere tausend Besucher pro Tag für einen "angemessenen" Bandbreitenverbrauch umfasst. Seien Sie vorsichtig, denn dies ist von einem Hosting-Anbieter zum anderen unterschiedlich definiert. Beachten Sie, dass ein zuverlässiges, kostenpflichtiges, persönliches Hosting etwa zehn bis fünfzehn Dollar pro Monat kosten kann.

> [!NOTE]
> Es gibt nichts wie "unbegrenzte" Bandbreite. Wenn Sie eine große Menge an Bandbreite verbrauchen, erwarten Sie, eine große Menge an Geld zu zahlen.

### Domainnamen

Ihr Domainname muss über einen Domainnamen-Anbieter (einen Registrar) erworben werden. Ihr Hosting-Anbieter kann auch ein Registrar sein ([Ionos](https://www.ionos.com/), [Gandi](https://www.gandi.net/en-US) sind zum Beispiel gleichzeitig Registrare und Hosting-Anbieter). Der Domainname kostet normalerweise 5-15 Dollar pro Jahr. Diese Kosten variieren je nach:

- Lokalen Verpflichtungen: Einige landesspezifische Top-Level-Domainnamen sind teurer, da verschiedene Länder unterschiedliche Preise festlegen.
- Diensten, die mit dem Domainnamen verbunden sind: Einige Registrare bieten Spamschutz, indem sie Ihre Postanschrift und E-Mail-Adresse hinter ihren eigenen Adressen verstecken: Die Postanschrift kann im Namen des Registrars angegeben werden, und Ihre E-Mail-Adresse kann über ein Alias Ihres Registrars verdeckt werden.

### Selber hosten vs. "Package"-Hosting

Wenn Sie eine Website veröffentlichen wollen, könnten Sie alles selbst machen: eine Datenbank einrichten (falls erforderlich), ein Content Management System oder [CMS](/de/docs/Glossary/CMS) (wie [Wordpress](https://wordpress.org/), [Dotclear](https://dotclear.org/), [spip](https://www.spip.net/en_rubrique25.html), etc.) aufsetzen, vorgefertigte oder eigene Vorlagen hochladen.

Sie könnten die Umgebung Ihres Hosting-Anbieters nutzen, für ungefähr zehn bis fünfzehn Dollar pro Monat, oder direkt ein dediziertes Hosting mit vorkonfigurierten CMSs abonnieren (z.B. [Wordpress](https://wordpress.com/), [Tumblr](https://www.tumblr.com/), [Blogger](https://www.blogger.com/)). Bei letzterem müssen Sie nichts zahlen, aber Sie haben möglicherweise weniger Kontrolle über Vorlagen und andere Optionen.

### Kostenloses Hosting vs. kostenpflichtiges Hosting

Sie fragen sich vielleicht, warum Sie für Ihr Hosting zahlen sollten, wenn es so viele kostenlose Dienste gibt?

- Sie haben mehr Freiheit, wenn Sie bezahlen. Ihre Website gehört Ihnen und Sie können nahtlos von einem Hosting-Anbieter zum nächsten wechseln.
- Kostenlose Hosting-Anbieter können Werbung zu Ihren Inhalten hinzufügen, die Sie nicht kontrollieren können.

Es ist besser, bezahltes Hosting zu wählen, anstatt sich auf kostenloses Hosting zu verlassen, da es möglich ist, Ihre Dateien einfach zu verschieben und die Verfügbarkeit wird von den meisten bezahlten Seiten garantiert. Die meisten Hosting-Anbieter geben Ihnen einen großen Rabatt zu Beginn.

Einige Leute wählen einen gemischten Ansatz. Zum Beispiel ihr Haupt-Blog auf einem bezahlten Host mit einem vollständigen Domainnamen und spontanen, weniger strategischen Inhalten auf einem kostenlosen Host-Service.

## Professionelle Website-Agenturen und Hosting

Wenn Sie eine professionelle Website wünschen, werden Sie wahrscheinlich eine Webagentur beauftragen, dies für Sie zu tun.

Hier hängen die Kosten von mehreren Faktoren ab, wie:

- Ist dies eine einfache Website mit ein paar Textseiten? Oder eine komplexere, tausend Seiten umfassende Website?
- Möchten Sie sie regelmäßig aktualisieren? Oder wird es eine statische Website sein?
- Muss die Website sich mit der IT-Struktur Ihres Unternehmens verbinden, um Inhalte (z.B. interne Daten) zu sammeln?
- Wollen Sie eine neue, glänzende Funktion, die im Moment populär ist? Zum Zeitpunkt des Schreibens, suchen Kunden nach Einzelseiten mit komplexem Parallax-Effekt.
- Benötigen Sie, dass die Agentur User Stories entwickelt oder komplexe [UX](/de/docs/Glossary/UX)-Probleme löst? Zum Beispiel eine Strategie zur Nutzerbindung oder A/B-Tests zur Auswahl einer Lösung unter mehreren Ideen.

Und für das Hosting müssen Sie folgende Entscheidungen berücksichtigen:

- Möchten Sie redundante Server, für den Fall, dass Ihr Server ausfällt?
- Sind 95% Zuverlässigkeit ausreichend, oder benötigen Sie professionellen, rund um die Uhr Service?
- Wollen Sie hochkarätige, ultra-schnelle dedizierte Server oder können Sie mit einer langsameren, gemeinsam genutzten Maschine zurechtkommen?

Je nachdem, wie Sie diese Fragen beantworten, könnte Ihre Website von Tausenden bis zu Hunderttausenden von Dollar kosten.

## Nächste Schritte

Da Sie nun verstehen, wie viel Geld Ihre Website kosten kann, ist es an der Zeit, mit der Gestaltung dieser Website zu beginnen und [Ihre Arbeitsumgebung einzurichten](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server).

- Lesen Sie weiter, wie Sie einen Texteditor auswählen und installieren können: [how to choose and install a text editor](/de/docs/Learn/Common_questions/Tools_and_setup/Available_text_editors).
- Wenn Sie sich mehr auf das Design konzentrieren, schauen Sie sich die [Anatomie einer Webseite](/de/docs/Learn/Common_questions/Design_and_accessibility/Common_web_layouts) an.
