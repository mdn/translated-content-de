---
title: Wie viel kostet es, im Web aktiv zu werden?
slug: Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost
l10n:
  sourceCommit: 1ca131e2faea5792539b5dd25628b1ffd3039cd7
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
          >einer Webseite, einer Website, etc.</a
        > und was
        <a href="/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name"
          >ein Domainname ist</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Überprüfen Sie den gesamten Prozess der Erstellung einer Website und finden Sie heraus, wie viel jeder Schritt kosten kann.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Beim Start einer Website können Sie vielleicht gar nichts ausgeben, oder Ihre Kosten können in die Höhe schießen. In diesem Artikel besprechen wir, wie viel alles kostet, und wie Sie erhalten, wofür Sie bezahlen (oder nicht bezahlen).

## Software

### Texteditoren

Sie haben wahrscheinlich einen Texteditor: zum Beispiel Notepad auf Windows, Gedit auf Linux, TextEdit auf Mac. Sie werden es einfacher haben, Code zu schreiben, wenn Sie einen Editor wählen, der farbcodiert, die Syntax überprüft und Ihnen bei der Code-Strukturierung hilft.

Viele Editoren sind kostenlos, zum Beispiel [NotePad++](https://notepad-plus-plus.org/), [Brackets](https://brackets.io/), [Bluefish](https://bluefish.openoffice.nl/index.html), [TextWrangler](https://www.barebones.com/products/textwrangler/), [Eclipse](https://www.eclipse.org/), [NetBeans](https://netbeans.apache.org/) und [Visual Studio Code](https://code.visualstudio.com/). Einige, wie [Sublime Text](https://www.sublimetext.com/), können Sie so lange testen, wie Sie möchten, aber man wird ermutigt zu zahlen. Einige, wie [PhpStorm](https://www.jetbrains.com/phpstorm/), können je nach gewähltem Plan zwischen einigen Dutzend und 200 Dollar kosten. Einige von ihnen, wie [Microsoft Visual Studio](https://visualstudio.microsoft.com/), können Hunderte oder Tausende von Dollar kosten; das Visual Studio Community ist jedoch für einzelne Entwickler oder Open-Source-Projekte kostenlos. Oft gibt es bei kostenpflichtigen Editoren eine Testversion.

Wir empfehlen Ihnen, zunächst mehrere Editoren auszuprobieren, um ein Gefühl dafür zu bekommen, welcher am besten für Sie funktioniert. Wenn Sie nur einfachen {{Glossary("HTML", "HTML")}}, {{Glossary("CSS", "CSS")}} und {{Glossary("JavaScript", "JavaScript")}} schreiben, dann wählen Sie einen einfachen Editor.

Der Preis spiegelt nicht zuverlässig die Qualität oder Nützlichkeit eines Texteditors wider. Sie müssen es selbst ausprobieren und entscheiden, ob es Ihren Bedürfnissen entspricht. Zum Beispiel ist Sublime Text günstig, hat aber viele kostenlose Plugins, die seine Funktionalität erheblich erweitern können.

### Bildbearbeitungsprogramme

Ihr System enthält wahrscheinlich ein Bildbearbeitungsprogramm oder einen Viewer: Paint auf Windows, Eye of GNOME auf Ubuntu, Preview auf Mac. Diese Programme sind relativ begrenzt, und Sie werden bald einen robusteren Editor benötigen, um Ebenen, Effekte und Gruppierungen hinzuzufügen.

Editoren können kostenlos sein ([GIMP](https://www.gimp.org/), [Paint.NET](https://www.getpaint.net/)), moderat teuer ([PaintShop Pro](https://www.paintshoppro.com/), weniger als 100 $) oder mehrere hundert Dollar ([Adobe Photoshop](https://www.adobe.com/products/photoshop.html)) kosten.

Sie können jeden von ihnen verwenden, da sie ähnliche Funktionen bieten, obwohl einige so umfassend sind, dass Sie nie jede Funktion nutzen werden. Wenn Sie irgendwann Projekte mit anderen Designern austauschen müssen, sollten Sie herausfinden, welche Tools sie verwenden. Editoren können fertige Projekte in Standarddateiformaten exportieren, aber jeder Editor speichert laufende Projekte in seinem eigenen spezialisierten Format. Die meisten Bilder im Internet sind urheberrechtlich geschützt, daher ist es besser, die Lizenz der Datei zu überprüfen, bevor Sie sie verwenden. Websites wie [Pixabay](https://pixabay.com/) bieten Bilder unter der CC0-Lizenz an, sodass Sie sie sogar mit Modifikation für kommerzielle Zwecke verwenden, bearbeiten und veröffentlichen können.

### Multimedia-Editoren

Wenn Sie Video- oder Audiodateien in Ihre Website einfügen möchten, können Sie entweder Online-Dienste einbetten (zum Beispiel YouTube, Vimeo oder Dailymotion) oder Ihre eigenen Videos einfügen (siehe unten die Kosten für Bandbreite).

Für Audiodateien können Sie kostenlose Software finden ([Audacity](https://www.audacityteam.org/), [Wavosaur](https://www.wavosaur.com/)) oder bis zu ein paar hundert Dollar ausgeben ([Sound Forge](https://www.vegascreativesoftware.com/us/sound-forge-pro/), [Adobe Audition](https://www.adobe.com/products/audition.html)). Ebenso kann Videosoftware kostenlos sein ([PiTiVi](https://www.pitivi.org/), [OpenShot](https://www.openshot.org/) für Linux, [iMovie](https://support.apple.com/imovie) für Mac), weniger als 100 Dollar kosten ([Adobe Premiere Elements](https://www.adobe.com/products/premiere-elements.html)) oder mehrere hundert Dollar ([Adobe Premiere Pro](https://www.adobe.com/products/premiere.html), [Avid Media Composer](https://www.avid.com/media-composer), [Final Cut Pro](https://www.apple.com/final-cut-pro/)). Die Software, die Sie mit Ihrer Digitalkamera erhalten haben, könnte all Ihre Bedürfnisse abdecken.

### Veröffentlichungstools

Sie benötigen auch eine Möglichkeit, Dateien hochzuladen: von Ihrer Festplatte auf einen entfernten Web-Server. Dazu sollten Sie ein Veröffentlichungstool wie einen {{Glossary("FTP", "(S)FTP-Client")}}, [RSync](https://en.wikipedia.org/wiki/Rsync) oder [Git/GitHub](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) verwenden.

Jedes Betriebssystem enthält einen (S)FTP-Client als Teil seines Dateimanagers. Windows Explorer, Nautilus (ein üblicher Linux-Dateimanager) und der Mac Finder enthalten alle diese Funktionalität. Oft wählen Leute jedoch dedizierte (S)FTP-Clients, um lokale oder entfernte Verzeichnisse nebeneinander anzuzeigen und Serverpasswörter zu speichern.

Wenn Sie einen (S)FTP-Client installieren möchten, gibt es mehrere zuverlässige und kostenlose Optionen: zum Beispiel [FileZilla](https://filezilla-project.org/) für alle Plattformen, [WinSCP](https://winscp.net/eng/index.php) für Windows, [Cyberduck](https://cyberduck.io/) für Mac oder Windows und [mehr](https://en.wikipedia.org/wiki/List_of_FTP_server_software).

Da FTP von Natur aus unsicher ist, sollten Sie sicherstellen, dass Sie SFTP verwenden – die sichere, verschlüsselte Version von FTP, die die meisten Hosting-Seiten, mit denen Sie heutzutage arbeiten werden, standardmäßig anbieten – oder eine andere sichere Lösung wie Rsync über SSH.

## Browser

Sie haben entweder bereits einen Browser oder können einen kostenlos erhalten. Falls erforderlich, laden Sie [Firefox](https://www.firefox.com/en-US/download/all/) oder [Google Chrome](https://www.google.com/chrome/) herunter.

## Internetzugang

### Computer / Modem

Sie benötigen einen Computer. Die Kosten können erheblich variieren, abhängig von Ihrem Budget und dem Ort, an dem Sie leben. Um eine minimalistische Website zu veröffentlichen, benötigen Sie nur einen einfachen Computer, der in der Lage ist, einen Editor und einen Webbrowser zu starten, sodass das Einstiegsniveau recht niedrig sein kann.

Natürlich benötigen Sie einen anspruchsvolleren Computer, wenn Sie komplizierte Designs erstellen, Fotos retuschieren oder Audio- und Videodateien produzieren möchten.

Sie müssen Inhalte auf einen entfernten Server hochladen (siehe _Hosting_ unten), daher benötigen Sie ein Modem. Ihr {{Glossary("ISP", "ISP")}} kann Ihnen Internetkonnektivität für einige Dollar im Monat vermieten, obwohl Ihr Budget je nach Standort variieren kann.

### Zugang über einen Internetdienstanbieter (ISP)

Stellen Sie sicher, dass Sie über ausreichende {{Glossary("Bandwidth", "Bandbreite")}} verfügen:

- Ein Zugang mit niedriger Bandbreite kann ausreichen, um eine 'einfache' Website zu unterstützen: bilder mit angemessener Größe, Texte, etwas CSS und JavaScript. Das dürfte Sie ein paar Dutzend Dollar kosten, einschließlich der Miete für das Modem.
- Andererseits benötigen Sie eine Verbindung mit hoher Bandbreite, wie DSL, Kabel oder Glasfaser, wenn Sie eine fortgeschrittenere Website mit Hunderten von Dateien veröffentlichen möchten, oder wenn Sie schwere Video-/Audiodateien direkt von Ihrem Webserver bereitstellen möchten. Es könnte genauso viel kosten wie ein Zugang mit niedriger Bandbreite, aufwärts zu mehreren hundert Dollar pro Monat für professionellere Bedürfnisse.

## Hosting

### Bandbreite verstehen

Hosting-Anbieter berechnen Ihnen nach der Menge an {{Glossary("Bandwidth", "Bandbreite")}}, die Ihre Website verbraucht. Dies hängt davon ab, wie viele Personen und Web-Crawling-Roboter auf Ihre Inhalte in einem bestimmten Zeitraum zugreifen und wie viel Speicherplatz Ihre Inhalte auf dem Server beanspruchen. Deshalb speichern die Leute ihre Videos üblicherweise auf speziellen Diensten wie YouTube, Dailymotion und Vimeo. Ihr Anbieter könnte beispielsweise einen Plan haben, der inklusive bis zu mehreren Tausend Besuchern pro Tag für "angemessene" Bandbreitennutzung beinhaltet. Seien Sie jedoch vorsichtig, denn dies ist bei jedem Hosting-Anbieter unterschiedlich definiert. Beachten Sie, dass zuverlässiges, bezahltes, persönliches Hosting etwa zehn bis fünfzehn Dollar pro Monat kosten kann.

> [!NOTE]
> Es gibt kein "unbegrenzte" Bandbreite. Wenn Sie eine große Menge an Bandbreite verbrauchen, rechnen Sie mit einer großen Rechnung.

### Domainnamen

Ihr Domainname muss bei einem Domainnamen-Provider (einem Registrar) gekauft werden. Ihr Hosting-Anbieter kann auch ein Registrar sein ([Ionos](https://www.ionos.com/), [Gandi](https://www.gandi.net/en-US) zum Beispiel sind sowohl Registrars als auch Hosting-Anbieter). Der Domainname kostet in der Regel 5-15 Dollar pro Jahr. Dieser Preis variiert je nach:

- Lokale Anforderungen: Einige länderspezifische Top-Level-Domainnamen sind teurer, da verschiedene Länder unterschiedliche Preise festlegen.
- Services, die mit dem Domainnamen verbunden sind: Einige Registrare schützen vor Spam, indem sie Ihre Postadresse und E-Mail-Adresse hinter ihren eigenen Adressen verbergen: Die Postadresse kann im Auftrag des Registrars angegeben werden, und Ihre E-Mail-Adresse kann über das Alias-System des Registrars verschleiert werden.

### Selbst-gehostetes Hosting vs. "Pakethosting"

Wenn Sie eine Website veröffentlichen möchten, könnten Sie alles selbst machen: eine Datenbank einrichten (falls erforderlich), ein Content-Management-System oder {{Glossary("CMS", "CMS")}} (wie [WordPress](https://wordpress.org/), [Dotclear](https://dotclear.org/), [spip](https://www.spip.net/en_rubrique25.html), etc.) aufsetzen, vorgefertigte oder eigene Vorlagen hochladen.

Sie könnten die Umgebung Ihres Hosting-Anbieters nutzen, für ungefähr zehn bis fünfzehn Dollar pro Monat, oder direkt zu einem dedizierten Hosting-Dienst mit vorkonfigurierten CMSs abonnieren (z.B. [WordPress](https://wordpress.com/), [Tumblr](https://www.tumblr.com/), [Blogger](https://www.blogger.com/)). Für letztere müssen Sie nichts bezahlen, haben aber möglicherweise weniger Kontrolle über das Templating und andere Optionen.

### Kostenloses Hosting vs. kostenpflichtiges Hosting

Sie könnten sich fragen, warum sollte ich für mein Hosting bezahlen, wenn es so viele kostenlose Dienste gibt?

- Sie haben mehr Freiheit, wenn Sie zahlen. Ihre Website gehört Ihnen, und Sie können nahtlos von einem Hosting-Anbieter zum nächsten wechseln.
- Kostenlose Hosting-Anbieter können Werbung zu Ihren Inhalten hinzufügen, die Sie nicht kontrollieren können.

Es ist besser, sich für kostenpflichtiges Hosting zu entscheiden, anstatt sich auf kostenloses Hosting zu verlassen, da es möglich ist, Ihre Dateien einfach zu verschieben, und die Betriebszeit ist bei den meisten kostenpflichtigen Seiten garantiert. Die meisten Hosting-Anbieter geben Ihnen einen großen Rabatt zum Start.

Einige Menschen entscheiden sich für einen gemischten Ansatz. Zum Beispiel ihr Hauptblog auf einem kostenpflichtigen Host mit einem vollständigen Domainnamen und spontane, weniger strategische Inhalte auf einem kostenlosen Hosting-Dienst.

## Professionelle Website-Agenturen und Hosting

Wenn Sie eine professionelle Website wünschen, werden Sie wahrscheinlich eine Web-Agentur beauftragen, dies für Sie zu tun.

Hier hängen die Kosten von mehreren Faktoren ab, wie zum Beispiel:

- Ist dies eine einfache Website mit ein paar Textseiten? Oder eine komplexere, tausendseitige Website?
- Möchten Sie sie regelmäßig aktualisieren? Oder wird es eine statische Website sein?
- Muss die Website an die IT-Struktur Ihres Unternehmens angeschlossen werden, um Inhalte zu sammeln (z. B. interne Daten)?
- Möchten Sie einige glänzende neue Funktionen, die gerade angesagt sind? Zum Zeitpunkt des Schreibens suchen Kunden nach Einzelseiten mit komplexem Parallax-Design.
- Wird die Agentur Benutzerstories erdenken oder komplexe {{Glossary("UX", "UX")}} Probleme lösen müssen? Zum Beispiel, eine Strategie zu entwickeln, um Benutzer zu engagieren, oder A/B-Tests durchzuführen, um eine Lösung unter mehreren Ideen zu wählen.

Und für das Hosting müssen Sie folgende Entscheidungen berücksichtigen:

- Wollen Sie redundante Server, falls Ihr Server ausfällt?
- Sind 95% Zuverlässigkeit ausreichend, oder benötigen Sie professionellen, rund um die Uhr Service?
- Möchten Sie hochgradig reagierende, dedizierte Server, oder kommen Sie mit einer langsameren, gemeinsamen Maschine zurecht?

Je nachdem, wie Sie diese Fragen beantworten, könnte Ihre Website Tausende bis Hunderttausende von Dollar kosten.

## Nächste Schritte

Jetzt, da Sie verstehen, wie viel Geld Ihre Website kosten kann, ist es an der Zeit, mit dem Design dieser Website zu beginnen und Ihre Arbeitsumgebung [einzurichten](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server).

- Lesen Sie weiter über [wie Sie einen Texteditor auswählen und installieren](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors).
- Wenn Sie sich mehr für Design interessieren, werfen Sie einen Blick auf die [Anatomie einer Webseite](/de/docs/Learn_web_development/Howto/Design_and_accessibility/Common_web_layouts).
