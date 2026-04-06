---
title: Wie viel kostet es, etwas im Web zu machen?
slug: Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

Sich im Web zu engagieren, ist nicht so günstig, wie es aussieht. In diesem Artikel diskutieren wir, wie viel Sie möglicherweise ausgeben müssen und warum.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten bereits verstanden haben,
        <a href="/de/docs/Learn_web_development/Howto/Tools_and_setup/What_software_do_I_need">welche Software Sie benötigen</a>, den Unterschied zwischen
        <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web">einer Webseite, einer Website usw.</a> und was
        <a href="/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name">ein Domainname ist</a>.
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

Beim Start einer Website können Sie nichts ausgeben oder Ihre Kosten können in die Höhe schnellen. In diesem Artikel diskutieren wir, wie viel alles kostet und wie Sie das bekommen, wofür Sie bezahlen (oder nicht bezahlen).

## Software

### Texteditoren

Sie haben wahrscheinlich einen Texteditor: wie Notepad auf Windows, Gedit auf Linux, TextEdit auf Mac. Sie werden es einfacher haben, Code zu schreiben, wenn Sie einen Editor wählen, der farbcodiert, Ihre Syntax überprüft und Ihnen bei der Code-Struktur hilft.

Viele Editoren sind kostenlos, zum Beispiel [NotePad++](https://notepad-plus-plus.org/), [Brackets](https://brackets.io/), [Bluefish](https://bluefish.openoffice.nl/index.html), [TextWrangler](https://www.barebones.com/products/textwrangler/), [Eclipse](https://www.eclipse.org/), [NetBeans](https://netbeans.apache.org/) und [Visual Studio Code](https://code.visualstudio.com/). Bei einigen, wie [Sublime Text](https://www.sublimetext.com/), wird Ihnen empfohlen zu zahlen, auch wenn Sie sie so lange testen können, wie Sie möchten. Einige, wie [PhpStorm](https://www.jetbrains.com/phpstorm/), können je nach erworbenem Plan zwischen einigen Dutzend und 200 Dollar kosten. Einige von ihnen, wie [Microsoft Visual Studio](https://visualstudio.microsoft.com/), können Hunderte oder Tausende von Dollar kosten; obwohl Visual Studio Community für individuelle Entwickler oder Open-Source-Projekte kostenlos ist. Oft haben kostenpflichtige Editoren eine Testversion.

Zu Beginn empfehlen wir, mehrere Editoren auszuprobieren, um ein Gefühl dafür zu bekommen, welcher am besten für Sie geeignet ist. Wenn Sie nur einfaches {{Glossary("HTML", "HTML")}}, {{Glossary("CSS", "CSS")}} und {{Glossary("JavaScript", "JavaScript")}} schreiben, wählen Sie einen einfachen Editor.

Der Preis spiegelt nicht zuverlässig die Qualität oder Nützlichkeit eines Texteditors wider. Sie müssen selbst ausprobieren und entscheiden, ob er Ihren Bedürfnissen entspricht. Zum Beispiel ist Sublime Text günstig, bietet jedoch viele kostenlose Plugins, die seine Funktionalität erheblich erweitern können.

### Bildbearbeitungsprogramme

Ihr System enthält wahrscheinlich ein Bildbearbeitungsprogramm oder -anzeigeprogramm: Paint auf Windows, Eye of GNOME auf Ubuntu, Vorschau auf Mac. Diese Programme sind relativ begrenzt, und Sie werden bald einen robusteren Editor benötigen, um Ebenen, Effekte und Gruppierungen hinzuzufügen.

Editoren können kostenlos sein ([GIMP](https://www.gimp.org/), [Paint.NET](https://www.getpaint.net/)), mäßig teuer ([PaintShop Pro](https://www.paintshoppro.com/), weniger als 100 Dollar) oder mehrere Hundert Dollar kosten ([Adobe Photoshop](https://www.adobe.com/products/photoshop.html)).

Sie können alle verwenden, da sie ähnliche Funktionen bieten, obwohl einige so umfassend sind, dass Sie niemals alle Funktionen nutzen werden. Wenn Sie irgendwann Projekte mit anderen Designern austauschen müssen, sollten Sie herausfinden, welche Werkzeuge sie verwenden. Alle Editoren können fertige Projekte in Standarddateiformate exportieren, aber jeder Editor speichert fortlaufende Projekte in seinem eigenen spezialisierten Format. Die meisten Bilder im Internet sind urheberrechtlich geschützt, daher ist es besser, die Lizenz der Datei zu prüfen, bevor Sie sie verwenden. Seiten wie [Pixabay](https://pixabay.com/) bieten Bilder unter der CC0-Lizenz an, sodass Sie sie verwenden, bearbeiten und auch für kommerzielle Zwecke modifizieren und veröffentlichen können.

### Medienbearbeitungsprogramme

Wenn Sie Videos oder Audios in Ihre Website einbinden möchten, können Sie entweder Online-Dienste einbetten (zum Beispiel YouTube, Vimeo oder Dailymotion) oder Ihre eigenen Videos einfügen (sehen Sie unten die Bandbreitenkosten).

Für Audiodateien können Sie kostenlose Software finden ([Audacity](https://www.audacityteam.org/), [Wavosaur](https://www.wavosaur.com/)) oder bis zu mehrere hundert Dollar zahlen ([Sound Forge](https://www.vegascreativesoftware.com/sound-forge/), [Adobe Audition](https://www.adobe.com/products/audition.html)). Ebenso kann Videoschnittsoftware kostenlos sein ([PiTiVi](https://www.pitivi.org/), [OpenShot](https://www.openshot.org/) für Linux, [iMovie](https://support.apple.com/imovie) für Mac), weniger als 100 Dollar ([Adobe Premiere Elements](https://www.adobe.com/products/premiere-elements.html)) oder mehrere hundert Dollar ([Adobe Premiere Pro](https://www.adobe.com/products/premiere.html), [Avid Media Composer](https://www.avid.com/media-composer), [Final Cut Pro](https://www.apple.com/final-cut-pro/)). Die Software, die Sie mit Ihrer Digitalkamera erhalten haben, könnte alle Ihre Bedürfnisse abdecken.

### Veröffentlichungstools

Sie benötigen auch eine Möglichkeit, Dateien hochzuladen: von Ihrer Festplatte auf einen entfernten Webserver. Dazu sollten Sie ein Veröffentlichungstool wie einen {{Glossary("FTP", "(S)FTP-Client")}}, [RSync](https://en.wikipedia.org/wiki/Rsync) oder [Git/GitHub](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) verwenden.

Jedes Betriebssystem enthält einen (S)FTP-Client als Bestandteil seines Dateimanagers. Windows Explorer, Nautilus (ein gebräuchlicher Linux-Dateimanager) und der Mac Finder beinhalten diese Funktionalität. Menschen wählen jedoch oft dedizierte (S)FTP-Clients, um lokale oder entfernte Verzeichnisse nebeneinander anzuzeigen und Server-Passwörter zu speichern.

Wenn Sie einen (S)FTP-Client installieren möchten, gibt es mehrere zuverlässige und kostenlose Optionen: zum Beispiel [FileZilla](https://filezilla-project.org/) für alle Plattformen, [WinSCP](https://winscp.net/eng/index.php) für Windows, [Cyberduck](https://cyberduck.io/) für Mac oder Windows.

Da FTP von Natur aus unsicher ist, sollten Sie sicherstellen, SFTP zu verwenden — die sichere, verschlüsselte Version von FTP, die die meisten Hosting-Seiten, mit denen Sie heutzutage zu tun haben, standardmäßig anbieten — oder eine andere sichere Lösung wie Rsync über SSH.

## Browser

Sie haben entweder bereits einen Browser oder können einen kostenlos erhalten. Laden Sie bei Bedarf [Firefox](https://www.firefox.com/en-US/download/all/) oder [Google Chrome](https://www.google.com/chrome/) herunter.

## Internetzugang

### Computer / Modem

Sie benötigen einen Computer. Die Kosten können erheblich variieren, je nach Ihrem Budget und wo Sie leben. Um eine einfache Website zu veröffentlichen, benötigen Sie lediglich einen einfachen Computer, der in der Lage ist, einen Editor zu starten und einen Webbrowser auszuführen, sodass das Einsteigerniveau recht niedrig sein kann.

Natürlich benötigen Sie einen leistungsstärkeren Computer, wenn Sie komplizierte Designs erstellen, Fotos bearbeiten oder Audio- und Videodateien produzieren möchten.

Sie müssen Inhalte auf einen entfernten Server hochladen (siehe _Hosting_ unten), daher benötigen Sie ein Modem. Ihr {{Glossary("ISP", "ISP")}} kann Ihnen Internetkonnektivität für ein paar Dollar pro Monat vermieten, obwohl Ihr Budget je nach Ihrem Standort variieren kann.

### ISP-Zugang

Stellen Sie sicher, dass Sie ausreichende {{Glossary("Bandwidth", "Bandbreite")}} haben:

- Ein Zugang mit niedriger Bandbreite kann ausreichen, um eine „einfache“ Website zu unterstützen: angemessen große Bilder, Texte, etwas CSS und JavaScript. Das wird Sie wahrscheinlich ein paar Dutzend Dollar kosten, einschließlich der Miete für das Modem.
- Andererseits benötigen Sie einen Zugang mit hoher Bandbreite, wie DSL, Kabel oder Glasfaser, wenn Sie eine fortschrittlichere Website mit Hunderten von Dateien haben möchten, oder wenn Sie schwere Video-/Audiodateien direkt von Ihrem Webserver bereitstellen möchten. Dies könnte genauso viel kosten wie der Zugang mit niedriger Bandbreite, bis zu mehreren hundert Dollar pro Monat für professionellere Anforderungen.

## Hosting

### Verständnis der Bandbreite

Hosting-Anbieter berechnen Ihnen je nach dem, wie viel {{Glossary("Bandwidth", "Bandbreite")}} Ihre Website verbraucht. Dies hängt davon ab, wie viele Menschen und Web-Crawling-Robots während eines bestimmten Zeitraums auf Ihre Inhalte zugreifen, und wie viel Serverplatz Ihre Inhalte beanspruchen. Deshalb speichern Menschen ihre Videos normalerweise auf dedizierten Diensten wie YouTube, Dailymotion und Vimeo. Zum Beispiel kann Ihr Anbieter einen Tarif haben, der bis zu mehreren tausend Besuchern pro Tag bei "vernünftigem" Bandbreitenverbrauch umfasst. Seien Sie jedoch vorsichtig, da dies von einem Hosting-Anbieter zum anderen unterschiedlich definiert ist. Beachten Sie, dass zuverlässiges, kostenpflichtiges, persönliches Hosting etwa zehn bis fünfzehn Dollar pro Monat kosten kann.

> [!NOTE]
> Es gibt kein "unbegrenzte" Bandbreite. Wenn Sie eine enorme Menge an Bandbreite verbrauchen, erwarten Sie, einen enormen Betrag zu zahlen.

### Domainnamen

Ihr Domainname muss über einen Domainanbieter (einen Registrar) gekauft werden. Ihr Hosting-Anbieter kann auch ein Registrar sein ([Ionos](https://www.ionos.com/), [Gandi](https://www.gandi.net/en-US) sind beispielsweise gleichzeitig Registrar und Hosting-Anbieter). Der Domainname kostet in der Regel 5-15 Dollar pro Jahr. Diese Kosten variieren je nach:

- Lokalen Verpflichtungen: einige länderspezifische Top-Level-Domain-Namen sind teurer, da unterschiedliche Länder unterschiedliche Preise festlegen.
- Dienstleistungen, die mit dem Domainnamen verbunden sind: Einige Registrar bieten Spamschutz, indem sie Ihre Postadresse und E-Mail-Adresse hinter ihren eigenen Adressen verbergen: die Postadresse kann zu Händen des Registrars angegeben werden, und Ihre E-Mail-Adresse kann über ein Alias Ihres Registrars verschleiert werden.

### Do-it-yourself-Hosting vs. "Verpacktes" Hosting

Wenn Sie eine Website veröffentlichen möchten, könnten Sie alles selbst machen: eine Datenbank einrichten (falls erforderlich), Content-Management-System, oder {{Glossary("CMS", "CMS")}} (wie [WordPress](https://wordpress.org/), [Dotclear](https://dotclear.org/), [spip](https://www.spip.net/en_rubrique25.html), etc.), vorgefertigte oder eigene Templates hochladen.

Sie könnten die Umgebung Ihres Hosting-Anbieters nutzen, für ungefähr zehn bis fünfzehn Dollar pro Monat, oder sich direkt bei einem dedizierten Hosting-Dienst mit vorverpackten CMSs anmelden (z.B. [WordPress](https://wordpress.com/), [Tumblr](https://www.tumblr.com/), [Blogger](https://www.blogger.com/)). Für letztere müssen Sie nichts bezahlen, aber Sie könnten weniger Kontrolle über Templates und andere Optionen haben.

### Kostenlose vs. kostenpflichtige Hostingdienste

Sie könnten sich fragen, warum sollte ich für mein Hosting bezahlen, wenn es so viele kostenlose Dienste gibt?

- Sie haben mehr Freiheit, wenn Sie bezahlen. Ihre Website gehört Ihnen und Sie können nahtlos von einem Hosting-Anbieter zum nächsten migrieren.
- Kostenlose Hosting-Anbieter könnten Werbung zu Ihren Inhalten hinzufügen, die außerhalb Ihrer Kontrolle liegt.

Es ist besser, für kostenpflichtiges Hosting zu entscheiden, anstatt sich auf kostenloses Hosting zu verlassen, da es möglich ist, Ihre Dateien problemlos zu verschieben, und die Betriebszeit wird von den meisten kostenpflichtigen Seiten garantiert. Die meisten Hosting-Anbieter bieten Ihnen zu Beginn einen enormen Rabatt.

Einige Leute entscheiden sich für einen gemischten Ansatz. Zum Beispiel wird ihr Hauptblog bei einem kostenpflichtigen Host mit einem vollständigen Domain-Namen gehostet, während weniger strategische Inhalte auf einem kostenlosen Host-Dienst veröffentlicht werden.

## Professionelle Website-Agenturen und Hosting

Wenn Sie eine professionelle Website wünschen, werden Sie wahrscheinlich eine Webagentur beauftragen, dies für Sie zu tun.

Hier hängen die Kosten von mehreren Faktoren ab, wie zum Beispiel:

- Ist dies eine einfache Website mit ein paar Textseiten? Oder eine komplexere, tausend Seiten lange Website?
- Möchten Sie die Website regelmäßig aktualisieren? Oder wird es eine statische Website sein?
- Muss die Website mit der IT-Struktur Ihres Unternehmens verbunden sein, um Inhalte zu sammeln (zum Beispiel interne Daten)?
- Möchten Sie ein glänzendes neues Feature, das momentan populär ist? Zum Zeitpunkt des Schreibens suchen Kunden nach Einzelseiten mit komplexem Parallax-Scrolling.
- Benötigen Sie die Agentur, um Benutzerstorys zu entwickeln oder komplexe {{Glossary("UX", "UX")}}-Probleme zu lösen? Zum Beispiel eine Strategie zu entwickeln, um Benutzer zu engagieren, oder A/B-Tests durchzuführen, um eine Lösung unter mehreren Ideen auszuwählen.

Und für das Hosting müssen Sie folgende Entscheidungen berücksichtigen:

- Möchten Sie redundante Server, falls Ihr Server ausfällt?
- Ist eine 95-prozentige Zuverlässigkeit ausreichend, oder benötigen Sie professionellen Service rund um die Uhr?
- Wollen Sie hochkarätige, ultraschnelle dedizierte Server oder können Sie mit einer langsameren, geteilten Maschine zurechtkommen?

Abhängig davon, wie Sie diese Fragen beantworten, könnte Ihre Website tausende bis hunderttausende Dollar kosten.

## Nächste Schritte

Jetzt, da Sie verstehen, welche Kosten Ihre Website möglicherweise mit sich bringt, ist es Zeit, mit dem Design Ihrer Website zu beginnen und [Ihre Arbeitsumgebung einzurichten](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server).

- Lesen Sie weiter über [wie man einen Texteditor auswählt und installiert](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors).
- Wenn Ihr Fokus mehr auf Design liegt, werfen Sie einen Blick auf die [Anatomie einer Webseite](/de/docs/Learn_web_development/Howto/Design_and_accessibility/Common_web_layouts).
