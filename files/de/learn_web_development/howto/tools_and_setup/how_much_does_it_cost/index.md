---
title: Wie viel kostet es, etwas im Web zu machen?
slug: Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Sich im Web zu engagieren, ist nicht so günstig, wie es aussieht. In diesem Artikel besprechen wir, wie viel Sie möglicherweise ausgeben müssen und warum.

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
          >ein Domain-Name</a
        > ist.
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

Beim Start einer Website können Sie nichts oder eine erhebliche Summe ausgeben. In diesem Artikel besprechen wir, wie viel alles kostet und wie Sie das bekommen, wofür Sie (nicht) bezahlen.

## Software

### Texteditoren

Sie haben wahrscheinlich bereits einen Texteditor: zum Beispiel Notepad auf Windows, Gedit auf Linux, TextEdit auf Mac. Sie haben es einfacher, Code zu schreiben, wenn Sie einen Editor wählen, der eine farbliche Kodierung hat, Ihre Syntax überprüft und Sie bei der Code-Struktur unterstützt.

Viele Editoren sind kostenlos, zum Beispiel [Brackets](https://brackets.io/), [Bluefish](https://bluefish.openoffice.nl/index.html), [TextWrangler](https://www.barebones.com/products/textwrangler/), [Eclipse](https://www.eclipse.org/), [NetBeans](https://netbeans.apache.org/) und [Visual Studio Code](https://code.visualstudio.com/). Einige können Sie so lange testen, wie Sie möchten, aber es wird empfohlen, zu bezahlen, wie z.B. [Sublime Text](https://www.sublimetext.com/). Andere, wie [PhpStorm](https://www.jetbrains.com/phpstorm/), können je nach dem von Ihnen gewählten Plan zwischen ein paar Dutzend und 200 Dollar kosten. Einige, wie [Microsoft Visual Studio](https://visualstudio.microsoft.com/), können Hunderte oder Tausende von Dollar kosten; Visual Studio Community ist jedoch für einzelne Entwickler oder Open-Source-Projekte kostenlos. Oft haben kostenpflichtige Editoren eine Testversion.

Zum Starten empfehlen wir, mehrere Editoren auszuprobieren, um ein Gefühl dafür zu bekommen, welcher am besten für Sie geeignet ist. Wenn Sie nur einfaches {{Glossary("HTML", "HTML")}}, {{Glossary("CSS", "CSS")}} und {{Glossary("JavaScript", "JavaScript")}} schreiben, wählen Sie einen einfachen Editor.

Der Preis spiegelt nicht zuverlässig die Qualität oder den Nutzen eines Texteditors wider. Sie müssen es selbst ausprobieren und entscheiden, ob es Ihren Bedürfnissen entspricht. Beispielsweise ist Sublime Text günstig, kommt aber mit vielen kostenlosen Plugins, die seine Funktionalität erheblich erweitern können.

### Bildeditoren

Ihr System enthält wahrscheinlich einen Bildeditor oder -betrachter: Paint auf Windows, Eye of GNOME auf Ubuntu, Preview auf Mac. Diese Programme sind relativ begrenzt, und Sie werden bald einen robusteren Editor benötigen, um Ebenen, Effekte und Gruppierungen hinzuzufügen.

Editoren können kostenlos sein ([GIMP](https://www.gimp.org/), [Paint.NET](https://www.getpaint.net/)), mäßig teuer ([PaintShop Pro](https://www.paintshoppro.com/), weniger als $100) oder mehrere Hundert Dollar kosten ([Adobe Photoshop](https://www.adobe.com/products/photoshop.html)).

Sie können alle verwenden, da sie ähnliche Funktionen haben, obwohl einige so umfassend sind, dass Sie nie alle Funktionen nutzen werden. Wenn Sie irgendwann Projekte mit anderen Designern austauschen müssen, sollten Sie herausfinden, welche Tools sie verwenden. Alle Editoren können fertige Projekte in Standard-Dateiformate exportieren, aber jeder Editor speichert laufende Projekte in seinem eigenen speziellen Format. Die meisten Bilder im Internet sind urheberrechtlich geschützt, deshalb ist es besser, die Lizenz der Datei zu überprüfen, bevor Sie sie verwenden. Websites wie [Pixabay](https://pixabay.com/) bieten Bilder unter der CC0-Lizenz an, sodass Sie diese auch mit Modifikationen für kommerzielle Zwecke verwenden, bearbeiten und veröffentlichen können.

### Medieneditoren

Wenn Sie Video oder Audio in Ihre Website einfügen möchten, können Sie entweder Online-Dienste einbetten (zum Beispiel YouTube, Vimeo oder Dailymotion) oder Ihre eigenen Videos einbinden (siehe unten für Bandbreitenkosten).

Für Audiodateien können Sie kostenlose Software finden ([Audacity](https://www.audacityteam.org/), [Wavosaur](https://www.wavosaur.com/)) oder bis zu ein paar hundert Dollar bezahlen ([Sound Forge](https://www.magix.com/us/music-editing/sound-forge/), [Adobe Audition](https://www.adobe.com/products/audition.html)). Ebenso kann Videoschnitt-Software kostenlos sein ([PiTiVi](https://www.pitivi.org/), [OpenShot](https://www.openshot.org/) für Linux, [iMovie](https://support.apple.com/imovie) für Mac), weniger als $100 kosten ([Adobe Premiere Elements](https://www.adobe.com/products/premiere-elements.html)) oder mehrere Hundert Dollar kosten ([Adobe Premiere Pro](https://www.adobe.com/products/premiere.html), [Avid Media Composer](https://www.avid.com/media-composer), [Final Cut Pro](https://www.apple.com/final-cut-pro/)). Die Software, die Sie mit Ihrer Digitalkamera erhalten haben, kann alle Ihre Bedürfnisse abdecken.

### Veröffentlichungstools

Sie benötigen auch eine Möglichkeit, Dateien von Ihrer Festplatte auf einen entfernten Webserver hochzuladen. Dazu sollten Sie ein Veröffentlichungstool wie einen {{Glossary("FTP", "(S)FTP-Client")}}, [RSync](https://en.wikipedia.org/wiki/Rsync) oder [Git/GitHub](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) verwenden.

Jedes Betriebssystem umfasst einen (S)FTP-Client als Teil seines Dateimanagers. Windows Explorer, Nautilus (ein häufiger Linux-Dateimanager) und der Mac Finder bieten alle diese Funktionalität. Allerdings wählen Menschen oft dedizierte (S)FTP-Clients, um lokale oder entfernte Verzeichnisse nebeneinander anzuzeigen und Serverpasswörter zu speichern.

Wenn Sie einen (S)FTP-Client installieren möchten, gibt es mehrere zuverlässige und kostenlose Optionen: zum Beispiel [FileZilla](https://filezilla-project.org/) für alle Plattformen, [WinSCP](https://winscp.net/eng/index.php) für Windows, [Cyberduck](https://cyberduck.io/) für Mac oder Windows, [und mehr](https://en.wikipedia.org/wiki/List_of_FTP_server_software).

Da FTP von Natur aus unsicher ist, sollten Sie sicherstellen, dass Sie SFTP verwenden — die sichere, verschlüsselte Version von FTP, die die meisten Hosting-Sites, mit denen Sie heutzutage arbeiten werden, standardmäßig anbieten — oder eine andere sichere Lösung wie Rsync über SSH.

## Browser

Sie haben entweder bereits einen Browser oder können einen kostenlos bekommen. Bei Bedarf können Sie Firefox [hier](https://www.mozilla.org/en-US/firefox/all/) oder Google Chrome [hier](https://www.google.com/chrome/) herunterladen.

## Webzugang

### Computer / Modem

Sie benötigen einen Computer. Die Kosten können enorm variieren, je nach Ihrem Budget und wo Sie wohnen. Um eine Grundwebsite zu veröffentlichen, benötigen Sie nur einen einfachen Computer, der einen Editor und einen Webbrowser starten kann, sodass die Einstiegskosten recht gering sein können.

Natürlich benötigen Sie einen leistungsfähigeren Computer, wenn Sie komplizierte Designs erstellen, Fotos bearbeiten oder Audio- und Videodateien produzieren möchten.

Sie müssen Inhalte auf einen entfernten Server hochladen (siehe _Hosting_ unten), also benötigen Sie ein Modem. Ihr {{Glossary("ISP", "ISP")}} kann Ihnen Internetkonnektivität für einige Dollar pro Monat vermieten, obwohl Ihr Budget je nach Ihrem Standort variieren kann.

### Zugang zum ISP

Stellen Sie sicher, dass Sie über ausreichende {{Glossary("Bandwidth", "Bandbreite")}} verfügen:

- Niedrigbandbreitenzugang kann ausreichen, um eine 'einfache' Website zu unterstützen: angemessen große Bilder, Texte, etwas CSS und JavaScript. Das wird Sie wahrscheinlich ein paar Dutzend Dollar kosten, einschließlich der Miete für das Modem.
- Andererseits benötigen Sie eine High-Bandbreitenverbindung, wie DSL, Kabel oder Glasfaseranschluss, wenn Sie eine fortschrittlichere Website mit Hunderten von Dateien oder wenn Sie schwere Video-/Audiodateien direkt von Ihrem Webserver liefern möchten. Es könnte dasselbe kosten wie ein Niedrigbandbreitenzugang, bis zu mehreren Hundert Dollar pro Monat für professionellere Bedürfnisse.

## Hosting

### Verständnis der Bandbreite

Hosting-Anbieter berechnen Ihnen die Kosten basierend darauf, wie viel {{Glossary("Bandwidth", "Bandbreite")}} Ihre Website verbraucht. Dies hängt davon ab, wie viele Personen und Web-Crawling-Roboter Ihre Inhalte in einem bestimmten Zeitraum aufrufen und wie viel Speicherplatz Ihre Inhalte auf dem Server beanspruchen. Aus diesem Grund speichern die Leute normalerweise ihre Videos auf speziellen Diensten wie YouTube, Dailymotion und Vimeo. Zum Beispiel könnte Ihr Anbieter einen Plan haben, der bis zu mehrere tausend Besucher pro Tag für 'vernünftigen' Bandbreitenverbrauch enthält. Seien Sie jedoch vorsichtig, da dies von einem Hosting-Anbieter zum anderen unterschiedlich definiert wird. Beachten Sie, dass verlässliches, bezahltes, persönliches Hosting etwa zehn bis fünfzehn Dollar pro Monat kosten kann.

> [!NOTE]
> Es gibt keine unbegrenzte Bandbreite. Wenn Sie eine enorme Menge an Bandbreite verbrauchen, erwarten Sie, eine enorme Menge an Geld zu zahlen.

### Domain-Namen

Ihr Domain-Name muss über einen Domain-Anbieter (einen Registrar) gekauft werden. Ihr Hosting-Anbieter kann auch ein Registrar sein ([Ionos](https://www.ionos.com/), [Gandi](https://www.gandi.net/en-US) sind beispielsweise gleichzeitig Registrare und Hosting-Anbieter). Der Domain-Name kostet normalerweise $5-15 pro Jahr. Diese Kosten variieren je nach:

- Lokalen Verpflichtungen: Einige länderspezifische Top-Level-Domain-Namen sind teurer, da verschiedene Länder unterschiedliche Preise festlegen.
- Diensten, die mit dem Domain-Namen verbunden sind: Einige Registrar bieten Spam-Schutz, indem sie Ihre Postanschrift und E-Mail-Adresse hinter ihren eigenen Adressen verbergen: Die Postanschrift kann beim Registrar hinterlegt werden, und Ihre E-Mail-Adresse kann über das Pseudonym des Registrars verschleiert werden.

### Selbstgemachtes Hosting vs. "Paket"-Hosting

Wenn Sie eine Website veröffentlichen möchten, könnten Sie alles selbst machen: eine Datenbank einrichten (falls erforderlich), ein Content Management System oder {{Glossary("CMS", "CMS")}} (wie [WordPress](https://wordpress.org/), [Dotclear](https://dotclear.org/), [spip](https://www.spip.net/en_rubrique25.html), etc.) installieren, vorgefertigte oder eigene Vorlagen hochladen.

Sie könnten die Umgebung Ihres Hosting-Anbieters nutzen, etwa für zehn bis fünfzehn Dollar pro Monat, oder direkt ein dediziertes Hosting mit vorverpackten CMSs abonnieren (z.B. [WordPress](https://wordpress.com/), [Tumblr](https://www.tumblr.com/), [Blogger](https://www.blogger.com/)). Letzteres kostet Sie nichts, aber Sie haben möglicherweise weniger Kontrolle über Vorlagen und andere Optionen.

### Kostenlose vs. bezahlte Hosting-Services

Sie fragen sich vielleicht, warum sollte ich für mein Hosting zahlen, wenn es so viele kostenlose Dienste gibt?

- Sie haben mehr Freiheit, wenn Sie bezahlen. Ihre Website gehört Ihnen, und Sie können nahtlos von einem Anbieter zum nächsten wechseln.
- Kostenlose Hosting-Anbieter können Werbung zu Ihren Inhalten hinzufügen, ohne dass Sie dies kontrollieren können.

Es ist besser, sich für kostenpflichtiges Hosting zu entscheiden, anstatt sich auf kostenloses Hosting zu verlassen, da es möglich ist, Ihre Dateien leicht zu verschieben und die Betriebszeit wird von den meisten kostenpflichtigen Seiten garantiert. Die meisten Hosting-Anbieter gewähren Ihnen einen hohen Rabatt, um zu beginnen.

Einige Leute entscheiden sich für einen gemischten Ansatz. Zum Beispiel ihr Hauptblog auf einem kostenpflichtigen Host mit einem vollständigen Domain-Namen und spontanen, weniger strategischen Inhalten auf einem kostenlosen Hosting-Dienst.

## Professionelle Website-Agenturen und Hosting

Wenn Sie eine professionelle Website wünschen, werden Sie wahrscheinlich eine Webagentur damit beauftragen, dies für Sie zu erledigen.

Hier hängen die Kosten von mehreren Faktoren ab, wie:

- Handelt es sich um eine einfache Website mit ein paar Textseiten? Oder eine komplexere Website mit tausend Seiten?
- Möchten Sie sie regelmäßig aktualisieren? Oder wird es eine statische Website?
- Muss die Website mit der IT-Struktur Ihres Unternehmens verbunden werden, um Inhalte zu sammeln (z.B. interne Daten)?
- Möchten Sie eine glänzende neue Funktion, die gerade angesagt ist? Zum Zeitpunkt des Schreibens suchen Kunden nach Einzelblattseiten mit komplexem Parallax.
- Brauchen Sie die Agentur, um User Stories zu entwickeln oder komplexe {{Glossary("UX", "UX")}}-Probleme zu lösen? Zum Beispiel eine Strategie zur Nutzerbindung zu entwickeln oder A/B-Tests durchzuführen, um eine Lösung unter mehreren Ideen auszuwählen.

Und für das Hosting müssen Sie folgende Entscheidungen berücksichtigen:

- Wollen Sie redundante Server, falls Ihr Server ausfällt?
- Ist eine Zuverlässigkeit von 95% ausreichend, oder benötigen Sie einen professionellen Rund-um-die-Uhr-Service?
- Möchten Sie hochprofilierte, ultra-reaktionsfähige dedizierte Server, oder können Sie mit einer langsameren, gemeinsam genutzten Maschine auskommen?

Je nachdem, wie Sie diese Fragen beantworten, könnte Ihre Website von Tausenden bis Hunderttausenden von Dollar kosten.

## Nächste Schritte

Jetzt, da Sie wissen, wie viel Geld Ihre Website kosten kann, ist es an der Zeit, mit der Gestaltung der Website zu beginnen und [Ihren Arbeitsbereich einzurichten](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server).

- Lesen Sie weiter über [wie Sie einen Texteditor auswählen und installieren](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors).
- Wenn Sie mehr auf Design fokussiert sind, schauen Sie sich die [Anatomie einer Webseite](/de/docs/Learn_web_development/Howto/Design_and_accessibility/Common_web_layouts) an.
