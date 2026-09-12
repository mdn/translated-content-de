---
title: Wie viel kostet es, etwas im Web zu machen?
slug: Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost
l10n:
  sourceCommit: da7287ff61b6ea4db7f9a5e07be11263b525b7d0
---

Sich im Web zu engagieren, ist nicht so günstig, wie es aussieht. In diesem Artikel besprechen wir, wie viel Sie möglicherweise ausgeben müssen und warum.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten bereits verstehen,
        <a href="/de/docs/Learn_web_development/Howto/Tools_and_setup/What_software_do_I_need"
          >welche Software Sie benötigen</a
        >, worin der Unterschied zwischen
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web"
          >einer Webseite, einer Website usw.</a
        > besteht und was
        <a href="/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name"
          >ein Domainname ist</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Den vollständigen Prozess zum Erstellen einer Website überprüfen und herausfinden,
        wie viel jeder Schritt kosten kann.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Beim Starten einer Website können Sie entweder nichts ausgeben oder Ihre Kosten können enorm steigen. In diesem Artikel besprechen wir, wie viel alles kostet und wie Sie das bekommen, wofür Sie bezahlen (oder nicht bezahlen).

## Software

### Texteditoren

Sie haben wahrscheinlich einen Texteditor, etwa Notepad unter Windows, Gedit unter Linux oder TextEdit auf dem Mac. Das Schreiben von Code wird Ihnen leichter fallen, wenn Sie einen Editor wählen, der Syntax farblich hervorhebt, Ihre Syntax überprüft und Sie bei der Codestruktur unterstützt.

Viele Editoren sind kostenlos, beispielsweise [NotePad++](https://notepad-plus-plus.org/), [Brackets](https://brackets.io/), [Bluefish](https://bluefish.openoffice.nl/index.html), [TextWrangler](https://www.barebones.com/products/textwrangler/), [Eclipse](https://www.eclipse.org/), [NetBeans](https://netbeans.apache.org/) und [Visual Studio Code](https://code.visualstudio.com/). Einige, wie [Sublime Text](https://www.sublimetext.com/), können Sie beliebig lange testen, werden jedoch zum Bezahlen ermutigt. Andere, wie [PhpStorm](https://www.jetbrains.com/phpstorm/), können je nach erworbenem Tarif zwischen einigen Dutzend und 200 Dollar kosten. Wieder andere, wie [Microsoft Visual Studio](https://visualstudio.microsoft.com/), können Hunderte oder Tausende Dollar kosten; Visual Studio Community ist jedoch für einzelne Entwicklerinnen und Entwickler oder Open-Source-Projekte kostenlos. Kostenpflichtige Editoren bieten häufig eine Testversion an.

Für den Anfang empfehlen wir Ihnen, mehrere Editoren auszuprobieren, um herauszufinden, welcher für Sie am besten geeignet ist. Wenn Sie nur einfaches {{Glossary("HTML", "HTML")}}, {{Glossary("CSS", "CSS")}} und {{Glossary("JavaScript", "JavaScript")}} schreiben, wählen Sie einen einfachen Editor.

Der Preis spiegelt die Qualität oder Nützlichkeit eines Texteditors nicht zuverlässig wider. Sie müssen ihn selbst ausprobieren und entscheiden, ob er Ihren Anforderungen entspricht. Sublime Text ist beispielsweise günstig, verfügt jedoch über viele kostenlose Plugins, die seine Funktionalität erheblich erweitern können.

### Bildeditoren

Ihr System enthält wahrscheinlich einen Bildeditor oder Bildbetrachter: Paint unter Windows, Eye of GNOME unter Ubuntu oder Preview auf dem Mac. Diese Programme sind relativ eingeschränkt; bald werden Sie einen leistungsfähigeren Editor benötigen, um Ebenen, Effekte und Gruppierungen hinzuzufügen.

Editoren können kostenlos sein ([GIMP](https://www.gimp.org/), [Paint.NET](https://paint.net/)), moderat teuer ([PaintShop Pro](https://www.paintshoppro.com/), weniger als 100 $) oder mehrere Hundert Dollar kosten ([Adobe Photoshop](https://www.adobe.com/products/photoshop.html)).

Sie können jeden davon verwenden, da sie ähnliche Funktionen bieten, auch wenn einige so umfassend sind, dass Sie niemals alle Funktionen verwenden werden. Wenn Sie irgendwann Projekte mit anderen Designerinnen und Designern austauschen müssen, sollten Sie herausfinden, welche Werkzeuge sie verwenden. Alle Editoren können fertige Projekte in Standarddateiformate exportieren, aber jeder Editor speichert laufende Projekte in seinem eigenen spezialisierten Format. Die meisten Bilder im Internet sind urheberrechtlich geschützt, daher sollten Sie die Lizenz einer Datei prüfen, bevor Sie sie verwenden. Websites wie [Pixabay](https://pixabay.com/) stellen Bilder unter der CC0-Lizenz bereit, sodass Sie sie auch mit Änderungen kommerziell verwenden, bearbeiten und veröffentlichen können.

### Medieneditoren

Wenn Sie Videos oder Audio in Ihre Website einbinden möchten, können Sie entweder Online-Dienste einbetten (beispielsweise YouTube, Vimeo oder Dailymotion) oder eigene Videos einbinden (siehe unten zu Bandbreitenkosten).

Für Audiodateien finden Sie kostenlose Software ([Audacity](https://www.audacityteam.org/), [Wavosaur](https://www.wavosaur.com/)) oder Software, die bis zu einige Hundert Dollar kostet ([Sound Forge](https://www.vegascreativesoftware.com/sound-forge/), [Adobe Audition](https://www.adobe.com/products/audition.html)). Ebenso kann Videobearbeitungssoftware kostenlos sein ([PiTiVi](https://www.pitivi.org/), [OpenShot](https://www.openshot.org/) für Linux, [iMovie](https://support.apple.com/imovie) für Mac), weniger als 100 $ kosten ([Adobe Premiere Elements](https://www.adobe.com/products/premiere-elements.html)) oder mehrere Hundert Dollar kosten ([Adobe Premiere Pro](https://www.adobe.com/products/premiere.html), [Avid Media Composer](https://www.avid.com/media-composer), [Final Cut Pro](https://www.apple.com/final-cut-pro/)). Die Software, die Sie mit Ihrer Digitalkamera erhalten haben, könnte bereits alle Ihre Anforderungen abdecken.

### Veröffentlichungstools

Sie benötigen außerdem eine Möglichkeit, Dateien von Ihrer Festplatte auf einen entfernten Webserver hochzuladen. Dazu sollten Sie ein Veröffentlichungstool wie einen {{Glossary("FTP", "(S)FTP-Client")}}, [RSync](https://en.wikipedia.org/wiki/Rsync) oder [Git/GitHub](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) verwenden.

Jedes Betriebssystem enthält einen (S)FTP-Client als Teil seines Dateimanagers. Windows Explorer, Nautilus (ein verbreiteter Linux-Dateimanager) und der Mac Finder enthalten alle diese Funktionalität. Allerdings wählen viele Menschen dedizierte (S)FTP-Clients, um lokale und entfernte Verzeichnisse nebeneinander anzuzeigen und Serverpasswörter zu speichern.

Wenn Sie einen (S)FTP-Client installieren möchten, gibt es mehrere zuverlässige und kostenlose Optionen: beispielsweise [FileZilla](https://filezilla-project.org/) für alle Plattformen, [WinSCP](https://winscp.net/eng/index.php) für Windows sowie [Cyberduck](https://cyberduck.io/) für Mac oder Windows.

Da FTP grundsätzlich unsicher ist, sollten Sie unbedingt SFTP verwenden – die sichere, verschlüsselte Version von FTP, die die meisten Hosting-Websites, mit denen Sie heutzutage arbeiten, standardmäßig anbieten – oder eine andere sichere Lösung wie Rsync über SSH.

## Browser

Sie haben entweder bereits einen Browser oder können einen kostenlos erhalten. Laden Sie bei Bedarf [Firefox](https://www.firefox.com/en-US/download/all/) oder [Google Chrome](https://www.google.com/chrome/) herunter.

## Webzugang

### Computer / Modem

Sie benötigen einen Computer. Die Kosten können je nach Budget und Wohnort stark variieren. Um eine einfache Website zu veröffentlichen, benötigen Sie nur einen einfachen Computer, der einen Editor und einen Webbrowser ausführen kann; die Einstiegshürde kann also recht niedrig sein.

Natürlich benötigen Sie einen leistungsfähigeren Computer, wenn Sie komplexe Designs erstellen, Fotos bearbeiten oder Audio- und Videodateien produzieren möchten.

Sie müssen Inhalte auf einen entfernten Server hochladen (siehe _Hosting_ unten), daher benötigen Sie ein Modem. Ihr {{Glossary("ISP", "ISP")}} kann Ihnen für einige Dollar pro Monat einen Internetzugang vermieten, wobei Ihr Budget je nach Standort unterschiedlich ausfallen kann.

### ISP-Zugang

Stellen Sie sicher, dass Sie über ausreichend {{Glossary("Bandwidth", "Bandbreite")}} verfügen:

- Ein Zugang mit geringer Bandbreite kann für eine „einfache“ Website ausreichen: Bilder in angemessener Größe, Texte, etwas CSS und JavaScript. Das wird Sie einschließlich der Miete für das Modem wahrscheinlich einige Dutzend Dollar kosten.
- Andererseits benötigen Sie eine Verbindung mit hoher Bandbreite, etwa DSL-, Kabel- oder Glasfaserzugang, wenn Sie eine fortschrittlichere Website mit Hunderten Dateien erstellen oder große Video-/Audiodateien direkt von Ihrem Webserver bereitstellen möchten. Dies könnte genauso viel wie ein Zugang mit geringer Bandbreite kosten oder für professionellere Anforderungen bis zu mehrere Hundert Dollar pro Monat.

## Hosting

### Bandbreite verstehen

Hosting-Anbieter berechnen Ihnen Gebühren danach, wie viel {{Glossary("Bandwidth", "Bandbreite")}} Ihre Website verbraucht. Dies hängt davon ab, wie viele Personen und Web-Crawling-Roboter während eines bestimmten Zeitraums auf Ihre Inhalte zugreifen und wie viel Serverspeicher Ihre Inhalte belegen. Deshalb speichern Menschen ihre Videos normalerweise bei spezialisierten Diensten wie YouTube, Dailymotion und Vimeo. Ihr Anbieter könnte beispielsweise einen Tarif anbieten, der bis zu mehrere Tausend Besucherinnen und Besucher pro Tag bei „angemessener“ Bandbreitennutzung umfasst. Seien Sie jedoch vorsichtig, da dies von Hosting-Anbieter zu Hosting-Anbieter unterschiedlich definiert wird. Beachten Sie, dass zuverlässiges, kostenpflichtiges persönliches Hosting etwa zehn bis fünfzehn Dollar pro Monat kosten kann.

> [!NOTE]
> Es gibt keine „unbegrenzte“ Bandbreite. Wenn Sie eine enorme Menge an Bandbreite verbrauchen, müssen Sie damit rechnen, eine enorme Menge Geld zu bezahlen.

### Domainnamen

Ihr Domainname muss über einen Domainnamen-Anbieter (einen Registrar) erworben werden. Ihr Hosting-Anbieter kann auch ein Registrar sein ([Ionos](https://www.ionos.com/) und [Gandi](https://www.gandi.net/en-US) sind beispielsweise sowohl Registrare als auch Hosting-Anbieter). Der Domainname kostet normalerweise 5–15 $ pro Jahr. Diese Kosten variieren abhängig von:

- Lokalen Verpflichtungen: Einige länderspezifische Top-Level-Domains sind teurer, da unterschiedliche Länder unterschiedliche Preise festlegen.
- Mit dem Domainnamen verbundenen Diensten: Einige Registrare bieten Spamschutz, indem sie Ihre Postanschrift und E-Mail-Adresse hinter ihren eigenen Adressen verbergen. Die Postanschrift kann über den Registrar angegeben werden und Ihre E-Mail-Adresse kann über einen Alias Ihres Registrars verschleiert werden.

### Eigenes Hosting im Vergleich zu „Paket“-Hosting

Wenn Sie eine Website veröffentlichen möchten, können Sie alles selbst erledigen: eine Datenbank einrichten (falls erforderlich), ein Content-Management-System oder {{Glossary("CMS", "CMS")}} (wie [WordPress](https://wordpress.org/), [Dotclear](https://dotclear.org/), [spip](https://www.spip.net/en_rubrique25.html) usw.) einrichten sowie vorgefertigte oder eigene Templates hochladen.

Sie können die Umgebung Ihres Hosting-Anbieters für ungefähr zehn bis fünfzehn Dollar pro Monat verwenden oder direkt einen spezialisierten Hosting-Dienst mit vorinstallierten CMSs abonnieren (z. B. [WordPress](https://wordpress.com/), [Tumblr](https://www.tumblr.com/), [Blogger](https://www.blogger.com/)). Bei Letzterem müssen Sie nichts bezahlen, haben jedoch möglicherweise weniger Kontrolle über Templates und andere Optionen.

### Kostenloses Hosting im Vergleich zu kostenpflichtigem Hosting

Sie fragen sich vielleicht: Warum sollte ich für mein Hosting bezahlen, wenn es so viele kostenlose Dienste gibt?

- Wenn Sie bezahlen, haben Sie mehr Freiheit. Ihre Website gehört Ihnen, und Sie können nahtlos von einem Hosting-Anbieter zum nächsten wechseln.
- Kostenlose Hosting-Anbieter können Werbung zu Ihren Inhalten hinzufügen, auf die Sie keinen Einfluss haben.

Es ist besser, kostenpflichtiges Hosting zu wählen, statt sich auf kostenloses Hosting zu verlassen, da Sie Ihre Dateien einfach verschieben können und die Verfügbarkeit von den meisten kostenpflichtigen Websites garantiert wird. Die meisten Hosting-Anbieter gewähren Ihnen zu Beginn einen hohen Rabatt.

Manche Menschen wählen einen gemischten Ansatz. Beispielsweise betreiben sie ihren Hauptblog bei einem kostenpflichtigen Host mit vollständigem Domainnamen und spontane, weniger strategische Inhalte bei einem kostenlosen Hosting-Dienst.

## Professionelle Website-Agenturen und Hosting

Wenn Sie eine professionelle Website wünschen, werden Sie wahrscheinlich eine Webagentur damit beauftragen.

Hier hängen die Kosten von mehreren Faktoren ab, etwa:

- Handelt es sich um eine einfache Website mit wenigen Textseiten? Oder um eine komplexere Website mit Tausenden Seiten?
- Möchten Sie sie regelmäßig aktualisieren? Oder soll es eine statische Website sein?
- Muss die Website mit der IT-Struktur Ihres Unternehmens verbunden werden, um Inhalte abzurufen, beispielsweise interne Daten?
- Möchten Sie eine glänzende neue Funktion, die gerade beliebt ist? Zum Zeitpunkt der Erstellung dieses Artikels suchen Kundinnen und Kunden nach einzelnen Seiten mit komplexem Parallax-Effekt.
- Benötigen Sie die Agentur, um User Stories zu entwickeln oder komplexe {{Glossary("UX", "UX")}}-Probleme zu lösen? Beispielsweise, um eine Strategie zur Nutzerbindung zu erstellen oder A/B-Tests durchzuführen, um unter mehreren Ideen eine Lösung auszuwählen.

Für das Hosting müssen Sie folgende Entscheidungen berücksichtigen:

- Möchten Sie redundante Server, falls Ihr Server ausfällt?
- Reicht eine Zuverlässigkeit von 95 % aus, oder benötigen Sie einen professionellen Rund-um-die-Uhr-Service?
- Möchten Sie leistungsstarke, äußerst reaktionsschnelle dedizierte Server, oder kommen Sie mit einer langsameren gemeinsam genutzten Maschine zurecht?

Je nachdem, wie Sie diese Fragen beantworten, könnte Ihre Website Tausende bis Hunderttausende Dollar kosten.

## Nächste Schritte

Jetzt, da Sie wissen, welche Kosten Ihre Website verursachen kann, ist es an der Zeit, diese Website zu gestalten und [Ihre Arbeitsumgebung einzurichten](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server).

- Lesen Sie weiter darüber, [wie Sie einen Texteditor auswählen und installieren](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors).
- Wenn Sie sich stärker auf Design konzentrieren, sehen Sie sich die [Anatomie einer Webseite](/de/docs/Learn_web_development/Howto/Design_and_accessibility/Common_web_layouts) an.
