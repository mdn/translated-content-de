---
title: Wie viel kostet es, etwas im Web zu tun?
slug: Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost
l10n:
  sourceCommit: 479ea4c8bff4b900a7968413287c77dde2b0c20f
---

Sich im Web zu engagieren ist nicht so preiswert, wie es scheint. In diesem Artikel besprechen wir, wie viel Sie möglicherweise ausgeben müssen und warum.

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
      <th scope="row">Ziel:</th>
      <td>
        Überprüfen Sie den gesamten Prozess der Erstellung einer Website und finden Sie heraus, wie viel jeder Schritt kosten kann.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Beim Start einer Website können Sie nichts ausgeben oder Ihre Kosten gehen durch die Decke. In diesem Artikel besprechen wir, wie viel alles kostet und wie Sie bekommen, wofür Sie zahlen (oder nicht zahlen).

## Software

### Texteditoren

Wahrscheinlich haben Sie einen Texteditor: wie Notepad auf Windows, Gedit auf Linux, TextEdit auf Mac. Sie werden es beim Schreiben von Code einfacher haben, wenn Sie einen Editor wählen, der Farbmarkierungen bietet, Ihre Syntax überprüft und Ihnen bei der Struktur des Codes hilft.

Viele Editoren sind kostenlos, zum Beispiel [Brackets](https://brackets.io/), [Bluefish](https://bluefish.openoffice.nl/index.html), [TextWrangler](https://www.barebones.com/products/textwrangler/), [Eclipse](https://www.eclipse.org/), [NetBeans](https://netbeans.apache.org/) und [Visual Studio Code](https://code.visualstudio.com/). Einige, wie [Sublime Text](https://www.sublimetext.com/), können Sie so lange testen, wie Sie möchten, aber Sie werden ermutigt, zu bezahlen. Einige, wie [PhpStorm](https://www.jetbrains.com/phpstorm/), können je nach gewähltem Plan zwischen einigen Dutzend und 200 Dollar kosten. Einige von ihnen, wie [Microsoft Visual Studio](https://visualstudio.microsoft.com/), können Hunderte oder Tausende von Dollar kosten; obwohl Visual Studio Community für einzelne Entwickler oder Open-Source-Projekte kostenlos ist. Oft haben kostenpflichtige Editoren eine Testversion.

Zum Einstieg empfehlen wir, mehrere Editoren auszuprobieren, um ein Gefühl dafür zu bekommen, welcher am besten zu Ihnen passt. Wenn Sie nur einfachen {{Glossary("HTML", "HTML")}}, {{Glossary("CSS", "CSS")}} und {{Glossary("JavaScript", "JavaScript")}} schreiben möchten, wählen Sie einen einfachen Editor.

Der Preis spiegelt nicht zuverlässig die Qualität oder Nützlichkeit eines Texteditors wider. Sie müssen es selbst ausprobieren und entscheiden, ob es Ihren Bedürfnissen entspricht. Zum Beispiel ist Sublime Text günstig, aber mit vielen kostenlosen Plugins erhältlich, die seine Funktionalität erheblich erweitern können.

### Bildbearbeitungsprogramme

Ihr System enthält wahrscheinlich einen Bildeditor oder Betrachter: Paint auf Windows, Eye of GNOME auf Ubuntu, Vorschau auf Mac. Diese Programme sind relativ begrenzt, bald werden Sie einen robusteren Editor wünschen, um Ebenen, Effekte und Gruppierungen hinzuzufügen.

Editoren können kostenlos sein ([GIMP](https://www.gimp.org/), [Paint.NET](https://www.getpaint.net/)), mäßig teuer ([PaintShop Pro](https://www.paintshoppro.com/), weniger als 100 $) oder mehrere hundert Dollar teuer ([Adobe Photoshop](https://www.adobe.com/products/photoshop.html)).

Sie können jeden von ihnen verwenden, da sie ähnliche Funktionen haben werden, obwohl manche so umfassend sind, dass Sie nie jede Funktion nutzen werden. Sollten Sie irgendwann mit anderen Designern Projekte austauschen müssen, sollten Sie herausfinden, welche Werkzeuge diese verwenden. Editoren können fertige Projekte in Standard-Dateiformate exportieren, aber jeder Editor speichert laufende Projekte in seinem eigenen spezialisierten Format. Die meisten Bilder im Internet sind urheberrechtlich geschützt, daher ist es besser, die Lizenz der Datei zu überprüfen, bevor Sie sie verwenden. Seiten wie [Pixabay](https://pixabay.com/) bieten Bilder unter der CC0-Lizenz an, sodass Sie sie auch mit Modifikationen für kommerzielle Zwecke verwenden, bearbeiten und veröffentlichen können.

### Medienbearbeitungsprogramme

Wenn Sie Videos oder Audiodateien in Ihre Website einbinden möchten, können Sie entweder Online-Dienste einbetten (zum Beispiel YouTube, Vimeo oder Dailymotion) oder Ihre eigenen Videos einfügen (siehe unten für Bandbreitenkosten).

Für Audiodateien können Sie kostenlose Software finden ([Audacity](https://www.audacityteam.org/), [Wavosaur](https://www.wavosaur.com/)), oder bis zu mehreren hundert Dollar zahlen ([Sound Forge](https://www.magix.com/us/music-editing/sound-forge/), [Adobe Audition](https://www.adobe.com/products/audition.html)). Ebenso kann Videoschnitt-Software kostenlos sein ([PiTiVi](https://www.pitivi.org/), [OpenShot](https://www.openshot.org/) für Linux, [iMovie](https://support.apple.com/imovie) für Mac), weniger als 100 $ ([Adobe Premiere Elements](https://www.adobe.com/products/premiere-elements.html)) oder mehrere hundert Dollar ([Adobe Premiere Pro](https://www.adobe.com/products/premiere.html), [Avid Media Composer](https://www.avid.com/media-composer), [Final Cut Pro](https://www.apple.com/final-cut-pro/)). Die Software, die Sie mit Ihrer Digitalkamera erhalten haben, kann alle Ihre Bedürfnisse abdecken.

### Veröffentlichungstools

Sie benötigen auch eine Möglichkeit, Dateien von Ihrer Festplatte zu einem entfernten Webserver hochzuladen. Dazu sollten Sie ein Veröffentlichungstool wie einen {{Glossary("FTP", "(S)FTP-Client")}}, [RSync](https://en.wikipedia.org/wiki/Rsync) oder [Git/GitHub](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) verwenden.

Jedes Betriebssystem enthält einen (S)FTP-Client als Teil seines Dateimanagers. Windows Explorer, Nautilus (ein gängiger Linux-Dateimanager) und der Mac Finder umfassen diese Funktionalität. Viele Menschen wählen jedoch oft dedizierte (S)FTP-Clients, um lokale oder entfernte Verzeichnisse nebeneinander anzuzeigen und Serverpasswörter zu speichern.

Wenn Sie einen (S)FTP-Client installieren möchten, gibt es mehrere zuverlässige und kostenlose Optionen: zum Beispiel [FileZilla](https://filezilla-project.org/) für alle Plattformen, [WinSCP](https://winscp.net/eng/index.php) für Windows, [Cyberduck](https://cyberduck.io/) für Mac oder Windows, [andere](https://en.wikipedia.org/wiki/List_of_FTP_server_software).

Da FTP von Natur aus unsicher ist, sollten Sie sicherstellen, dass Sie SFTP verwenden – die sichere, verschlüsselte Version von FTP, die die meisten Hosting-Sites, mit denen Sie heutzutage zu tun haben werden, standardmäßig anbieten – oder eine andere sichere Lösung wie Rsync über SSH.

## Browser

Sie haben entweder bereits einen Browser oder können einen kostenlos herunterladen. Falls erforderlich, laden Sie Firefox [hier](https://www.mozilla.org/en-US/firefox/all/) oder Google Chrome [hier](https://www.google.com/chrome/) herunter.

## Web-Zugang

### Computer / Modem

Sie benötigen einen Computer. Die Kosten können erheblich variieren, abhängig von Ihrem Budget und Ihrem Wohnort. Um eine minimalistische Website zu veröffentlichen, benötigen Sie nur einen einfachen Computer, der in der Lage ist, einen Editor und einen Webbrowser zu starten, sodass das Einstiegsniveau recht niedrig sein kann.

Natürlich benötigen Sie einen leistungsfähigeren Computer, wenn Sie komplizierte Designs erstellen, Fotos retuschieren oder Audio- und Videodateien produzieren möchten.

Um Inhalte auf einen entfernten Server hochzuladen (siehe _Hosting_ unten), benötigen Sie ein Modem. Ihr {{Glossary("ISP", "ISP")}} kann Ihnen Internetkonnektivität für ein paar Dollar pro Monat zur Verfügung stellen, obwohl Ihr Budget je nach Standort variieren könnte.

### ISP-Zugang

Stellen Sie sicher, dass Sie genügend {{Glossary("Bandwidth", "Bandbreite")}} haben:

- Ein Breitbandzugang mit niedriger Bandbreite kann ausreichen, um eine "einfache" Website zu unterstützen: angemessen große Bilder, Texte, etwas CSS und JavaScript. Das wird Sie wahrscheinlich einige Dutzend Dollar kosten, einschließlich der Miete für das Modem.
- Andererseits benötigen Sie eine Hochgeschwindigkeitsverbindung, wie DSL, Kabel oder Glasfaser, wenn Sie eine fortgeschrittenere Website mit Hunderten von Dateien erstellen oder schwere Video-/Audiodateien direkt von Ihrem Webserver bereitstellen möchten. Das könnte dasselbe kosten wie ein Zugang mit niedriger Bandbreite, bis hin zu mehreren hundert Dollar pro Monat für professionellere Bedürfnisse.

## Hosting

### Bandbreite verstehen

Hosting-Anbieter berechnen Ihnen Gebühren entsprechend der {{Glossary("Bandwidth", "Bandbreite")}}, die Ihre Website verbraucht. Dies hängt davon ab, wie viele Personen und Webcrawler-Roboter Ihre Inhalte in einem gegebenen Zeitraum abrufen, und wie viel Serverplatz Ihre Inhalte beanspruchen. Aus diesem Grund speichern Menschen ihre Videos normalerweise auf speziellen Diensten wie YouTube, Dailymotion und Vimeo. Ihr Anbieter könnte beispielsweise einen Plan haben, der bis zu mehreren tausend Besuchern pro Tag für "angemessene" Bandbreitennutzung umfasst. Seien Sie jedoch vorsichtig, da dies von einem Hosting-Anbieter zum anderen unterschiedlich definiert wird. Denken Sie daran, dass zuverlässiges, bezahltes, persönliches Hosting rund zehn bis fünfzehn Dollar pro Monat kosten kann.

> [!NOTE]
> Es gibt kein "unbegrenzte" Bandbreite. Wenn Sie eine enorme Menge an Bandbreite verbrauchen, erwarten Sie, eine enorme Menge an Geld zu zahlen.

### Domainnamen

Ihr Domainname muss über einen Domainnamen-Anbieter (einen Registrar) erworben werden. Ihr Hosting-Anbieter könnte auch ein Registrar sein ([Ionos](https://www.ionos.com/), [Gandi](https://www.gandi.net/en-US) sind zum Beispiel gleichzeitig Registrar und Hosting-Anbieter). Der Domainname kostet normalerweise 5-15 Dollar pro Jahr. Diese Kosten variieren abhängig von:

- Lokale Verpflichtungen: Einige länderspezifische Top-Level-Domain-Namen sind kostenintensiver, da verschiedene Länder unterschiedliche Preise festlegen.
- Dienstleistungen, die mit dem Domainnamen verbunden sind: Einige Registrare bieten Schutz vor Spam, indem sie Ihre Postanschrift und E-Mail-Adresse hinter ihren eigenen Adressen verbergen: Die Postanschrift kann im Namen des Registrars angegeben werden, und Ihre E-Mail-Adresse kann über das Alias Ihres Registrars verschleiert werden.

### Eigenes Hosting vs. "Pakethosting"

Wenn Sie eine Website veröffentlichen möchten, können Sie alles selbst machen: eine Datenbank einrichten (falls erforderlich), ein Content Management System, oder {{Glossary("CMS", "CMS")}} (wie [WordPress](https://wordpress.org/), [Dotclear](https://dotclear.org/), [spip](https://www.spip.net/en_rubrique25.html), usw.) installieren, vorgefertigte oder eigene Vorlagen hochladen.

Sie könnten die Umgebung Ihres Hosting-Anbieters für ungefähr zehn bis fünfzehn Dollar pro Monat nutzen oder sich direkt bei einem dedizierten Hosting-Dienst mit vorgefertigten CMSs anmelden (z.B. [WordPress](https://wordpress.com/), [Tumblr](https://www.tumblr.com/), [Blogger](https://www.blogger.com/)). Für letztere müssen Sie nichts bezahlen, aber Sie haben möglicherweise weniger Kontrolle über Vorlagen und andere Optionen.

### Kostenloses Hosting vs. kostenpflichtiges Hosting

Sie könnten sich fragen, warum sollte ich für mein Hosting bezahlen, wenn es so viele kostenlose Dienste gibt?

- Sie haben mehr Freiheit, wenn Sie bezahlen. Ihre Website gehört Ihnen, und Sie können reibungslos von einem Hosting-Anbieter zum nächsten wechseln.
- Kostenlose Hosting-Anbieter könnten Werbung zu Ihrem Inhalt hinzufügen, die außerhalb Ihrer Kontrolle liegt.

Es ist besser, sich für kostenpflichtiges Hosting zu entscheiden, anstatt sich auf kostenloses Hosting zu verlassen, da es möglich ist, Ihre Dateien einfach zu verschieben und die Betriebszeit von den meisten kostenpflichtigen Websites gewährleistet wird. Die meisten Hosting-Anbieter geben Ihnen zu Beginn einen großen Rabatt.

Einige Leute entscheiden sich für einen gemischten Ansatz. Zum Beispiel ihr Hauptblog auf einem kostenpflichtigen Host mit einem vollständigen Domainnamen, und spontane, weniger strategische Inhalte auf einem kostenlosen Host-Dienst.

## Professionelle Website-Agenturen und Hosting

Wenn Sie eine professionelle Website wünschen, werden Sie wahrscheinlich eine Web-Agentur beauftragen, dies für Sie zu tun.

Hier hängen die Kosten von mehreren Faktoren ab, wie:

- Ist dies eine einfache Website mit ein paar Textseiten? Oder eine komplexere, tausend Seiten lange Website?
- Möchten Sie diese regelmäßig aktualisieren? Oder soll es eine statische Website sein?
- Muss die Website mit der IT-Struktur Ihres Unternehmens verbunden sein, um Inhalte zu sammeln (z.B. interne Daten)?
- Wollen Sie einige glänzende neue Funktionen, die derzeit beliebt sind? Zum Zeitpunkt des Schreibens suchen Kunden nach einzelnen Seiten mit komplexem Parallax.
- Benötigen Sie die Agentur, um Benutzerstories zu entwickeln oder komplexe {{Glossary("UX", "UX")}}-Probleme zu lösen? Zum Beispiel eine Strategie zu entwickeln, um Benutzer zu engagieren, oder A/B-Tests durchzuführen, um eine Lösung aus mehreren Ideen auszuwählen.

Und beim Hosting müssen Sie folgende Entscheidungen berücksichtigen:

- Möchten Sie redundante Server, falls Ihr Server ausfällt?
- Sind 95% Zuverlässigkeit ausreichend, oder benötigen Sie einen professionellen, rund um die Uhr verfügbaren Service?
- Wollen Sie hochkarätige, extrem reaktionsschnelle dedizierte Server, oder können Sie mit einer langsameren, gemeinsam genutzten Maschine zurechtkommen?

Je nachdem, wie Sie diese Fragen beantworten, könnte Ihre Website Tausende bis Hunderttausende von Dollar kosten.

## Nächste Schritte

Nun, da Sie verstehen, welche Art von Kosten Ihre Website verursachen könnte, ist es an der Zeit, mit der Gestaltung dieser Website und dem [Einrichten Ihrer Arbeitsumgebung](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) zu beginnen.

- Lesen Sie weiter über [wie man einen Texteditor wählt und installiert](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors).
- Wenn Sie sich mehr auf das Design konzentrieren, schauen Sie sich die [Anatomie einer Webseite](/de/docs/Learn_web_development/Howto/Design_and_accessibility/Common_web_layouts) an.
