---
title: Wie viel kostet es, etwas im Web zu tun?
slug: Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost
l10n:
  sourceCommit: 3251a58ecf1ded5df0e1aa5d23c8436247252b52
---

Sich im Web zu engagieren, ist nicht so günstig, wie es auf den ersten Blick erscheint. In diesem Artikel besprechen wir, wie viel Sie möglicherweise ausgeben müssen und warum.

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
        > und was
        <a href="/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name"
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

Beim Start einer Website könnten Sie nichts ausgeben, oder Ihre Kosten könnten durch die Decke gehen. In diesem Artikel besprechen wir, wie viel alles kostet und wie Sie das bekommen (oder nicht bezahlen), was Sie bezahlen.

## Software

### Text-Editoren

Sie haben wahrscheinlich einen Text-Editor: zum Beispiel Notepad auf Windows, Gedit auf Linux, TextEdit auf Mac. Sie haben es einfacher beim Schreiben von Code, wenn Sie einen Editor wählen, der Ihren Code farblich kennzeichnet, Ihre Syntax überprüft und Sie bei der Code-Struktur unterstützt.

Viele Editoren sind kostenlos, zum Beispiel [Brackets](https://brackets.io/), [Bluefish](https://bluefish.openoffice.nl/index.html), [TextWrangler](https://www.barebones.com/products/textwrangler/), [Eclipse](https://www.eclipse.org/), [NetBeans](https://netbeans.apache.org/) und [Visual Studio Code](https://code.visualstudio.com/). Einige, wie [Sublime Text](https://www.sublimetext.com/), können Sie solange testen, wie Sie möchten, aber Sie werden ermutigt zu bezahlen. Einige, wie [PhpStorm](https://www.jetbrains.com/phpstorm/), können je nach dem ausgewählten Plan zwischen einigen Dutzend und 200 Dollar kosten. Einige von ihnen, wie [Microsoft Visual Studio](https://visualstudio.microsoft.com/), können Hunderte oder Tausende Dollar kosten; jedoch ist Visual Studio Community für individuelle Entwickler oder Open-Source-Projekte kostenlos. Häufig haben kostenpflichtige Editoren eine Testversion.

Zu Beginn empfehlen wir, mehrere Editoren auszuprobieren, um ein Gefühl dafür zu bekommen, welcher am besten zu Ihnen passt. Wenn Sie nur einfachen {{Glossary("HTML", "HTML")}}, {{Glossary("CSS", "CSS")}} und {{Glossary("JavaScript", "JavaScript")}} schreiben, wählen Sie einen einfachen Editor.

Der Preis spiegelt nicht zuverlässig die Qualität oder Nützlichkeit eines Texteditors wider. Sie müssen ihn selbst ausprobieren und entscheiden, ob er Ihren Bedürfnissen entspricht. Zum Beispiel ist Sublime Text günstig, kommt aber mit vielen kostenlosen Plugins, die seine Funktionalität erheblich erweitern können.

### Bildbearbeitungsprogramme

Ihr System beinhaltet wahrscheinlich einen Bildeditor oder -betrachter: Paint auf Windows, Eye of GNOME auf Ubuntu, Preview auf Mac. Diese Programme sind relativ begrenzt, Sie werden bald einen robusteren Editor wünschen, um Ebenen, Effekte und Gruppierungen hinzuzufügen.

Editoren können kostenlos sein ([GIMP](https://www.gimp.org/), [Paint.NET](https://www.getpaint.net/)), mäßig teuer ([PaintShop Pro](https://www.paintshoppro.com/), weniger als 100 Dollar) oder mehrere Hundert Dollar kosten ([Adobe Photoshop](https://www.adobe.com/products/photoshop.html)).

Sie können jeden von ihnen verwenden, da sie ähnliche Funktionen haben, obwohl einige so umfassend sind, dass Sie nie jede Funktion nutzen werden. Wenn Sie zu einem Punkt kommen, an dem Sie Projekte mit anderen Designern austauschen müssen, sollten Sie herausfinden, welche Werkzeuge sie verwenden. Editoren können fertige Projekte in Standarddateiformaten exportieren, aber jeder Editor speichert laufende Projekte in seinem eigenen spezialisierten Format. Die meisten Bilder im Internet sind urheberrechtlich geschützt, daher ist es besser, die Lizenz der Datei zu überprüfen, bevor Sie sie verwenden. Seiten wie [Pixabay](https://pixabay.com/) bieten Bilder unter CC0-Lizenz an, sodass Sie sie für kommerzielle Zwecke verwenden, bearbeiten und veröffentlichen können, selbst mit Änderungen.

### Medieneditoren

Wenn Sie Video oder Audio in Ihre Website einbinden möchten, können Sie entweder Online-Dienste einbetten (zum Beispiel YouTube, Vimeo oder Dailymotion), oder Ihre eigenen Videos einfügen (siehe unten für Bandbreitenkosten).

Für Audiodateien können Sie kostenlose Software finden ([Audacity](https://www.audacityteam.org/), [Wavosaur](https://www.wavosaur.com/)), oder bis zu mehreren Hundert Dollar ausgeben ([Sound Forge](https://www.vegascreativesoftware.com/us/sound-forge-pro/), [Adobe Audition](https://www.adobe.com/products/audition.html)). Ebenso kann Videoschnittsoftware kostenlos sein ([PiTiVi](https://www.pitivi.org/), [OpenShot](https://www.openshot.org/) für Linux, [iMovie](https://support.apple.com/imovie) für Mac), weniger als 100 Dollar kosten ([Adobe Premiere Elements](https://www.adobe.com/products/premiere-elements.html)), oder mehrere Hundert Dollar kosten ([Adobe Premiere Pro](https://www.adobe.com/products/premiere.html), [Avid Media Composer](https://www.avid.com/media-composer), [Final Cut Pro](https://www.apple.com/final-cut-pro/)). Die Software, die Sie mit Ihrer Digitalkamera erhalten haben, könnte alle Ihre Bedürfnisse abdecken.

### Veröffentlichungstools

Sie benötigen auch eine Möglichkeit, Dateien hochzuladen: von Ihrer Festplatte auf einen entfernten Webserver. Dazu sollten Sie ein Veröffentlichungstool wie einen {{Glossary("FTP", "(S)FTP-Client")}}, [RSync](https://de.wikipedia.org/wiki/Rsync) oder [Git/GitHub](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) verwenden.

Jedes Betriebssystem beinhaltet einen (S)FTP-Client, als Teil seines Dateimanagers. Der Windows-Explorer, Nautilus (ein üblicher Linux-Dateimanager) und der Mac Finder umfassen diese Funktionalität. Dennoch wählen viele Menschen dedizierte (S)FTP-Clients, um lokale oder entfernte Verzeichnisse nebeneinander anzuzeigen und Serverpasswörter zu speichern.

Wenn Sie einen (S)FTP-Client installieren möchten, gibt es mehrere zuverlässige und kostenlose Optionen: zum Beispiel [FileZilla](https://filezilla-project.org/) für alle Plattformen, [WinSCP](https://winscp.net/eng/index.php) für Windows, [Cyberduck](https://cyberduck.io/) für Mac oder Windows, [und mehr](https://de.wikipedia.org/wiki/List_of_FTP_server_software).

Da FTP inhärent unsicher ist, sollten Sie sicherstellen, dass Sie SFTP verwenden — die sichere, verschlüsselte Version von FTP, die die meisten Hosting-Seiten, mit denen Sie heutzutage konfrontiert werden, standardmäßig anbieten — oder eine andere sichere Lösung wie Rsync über SSH.

## Browser

Sie haben bereits einen Browser oder können einen kostenlos bekommen. Falls erforderlich, laden Sie [Firefox](https://www.firefox.com/en-US/download/all/) oder [Google Chrome](https://www.google.com/chrome/) herunter.

## Web-Zugang

### Computer / Modem

Sie benötigen einen Computer. Die Kosten können stark variieren, je nach Ihrem Budget und Ihrem Wohnort. Um eine grundlegende Website zu veröffentlichen, benötigen Sie nur einen einfachen Computer, der in der Lage ist, einen Editor und einen Webbrowser zu starten, sodass das Einstiegsniveau ziemlich niedrig sein kann.

Natürlich benötigen Sie einen leistungsfähigeren Computer, wenn Sie komplexe Designs erstellen, Fotos bearbeiten oder Audio- und Videodateien produzieren möchten.

Sie müssen Inhalte auf einen Remote-Server hochladen (siehe _Hosting_ unten), daher benötigen Sie ein Modem. Ihr {{Glossary("ISP", "ISP")}} kann Ihnen Internetkonnektivität für ein paar Dollar pro Monat vermieten, obwohl Ihr Budget variieren kann, je nach Ihrem Standort.

### ISP-Zugang

Stellen Sie sicher, dass Sie über ausreichende {{Glossary("Bandwidth", "Bandbreite")}} verfügen:

- Ein niedrig-bandbreitiger Zugang kann ausreichen, um eine "einfache" Website zu unterstützen: vernünftig dimensionierte Bilder, Texte, etwas CSS und JavaScript. Das wird Sie wahrscheinlich ein paar Dutzend Dollar kosten, einschließlich der Miete für das Modem.
- Andererseits benötigen Sie eine hoch-bandbreitige Verbindung, wie DSL, Kabel oder Glasfaserzugang, wenn Sie eine fortgeschrittenere Website mit Hunderten von Dateien wünschen, oder wenn Sie schwere Video-/Audiodateien direkt von Ihrem Webserver ausliefern möchten. Es könnte genauso viel wie ein niedrig-bandbreitiger Zugang kosten, bis hin zu mehreren Hundert Dollar pro Monat für professionellere Bedürfnisse.

## Hosting

### Bandbreite verstehen

Hosting-Anbieter berechnen Ihnen Gebühren basierend darauf, wie viel {{Glossary("Bandwidth", "Bandbreite")}} Ihre Website verbraucht. Dies hängt davon ab, wie viele Menschen und Web-Crawler-Roboter auf Ihre Inhalte in einer bestimmten Zeit zugreifen und wie viel Speicherplatz Ihre Inhalte auf dem Server einnehmen. Deshalb speichern viele Menschen ihre Videos auf dedizierten Diensten wie YouTube, Dailymotion und Vimeo. Zum Beispiel könnte Ihr Anbieter einen Plan haben, der bis zu mehreren Tausend Besucher pro Tag für einen "angemessenen" Bandbreitenverbrauch einschließt. Seien Sie jedoch vorsichtig, da dies von einem Hosting-Anbieter zum anderen unterschiedlich definiert wird. Denken Sie daran, dass zuverlässiges, bezahltes, persönliches Hosting etwa zehn bis fünfzehn Dollar pro Monat kosten kann.

> [!NOTE]
> Es gibt nichts, was "unbegrenzte" Bandbreite bedeutet. Wenn Sie eine enorme Menge an Bandbreite verbrauchen, erwarten Sie, einen enormen Betrag an Geld zu bezahlen.

### Domainnamen

Ihr Domainname muss über einen Domainnamenanbieter (einen Registrar) gekauft werden. Ihr Hosting-Anbieter könnte auch ein Registrar sein ([Ionos](https://www.ionos.com/), [Gandi](https://www.gandi.net/en-US) sind zum Beispiel sowohl Registrare als auch Hosting-Anbieter). Der Domainname kostet normalerweise 5-15 Dollar pro Jahr. Diese Kosten variieren je nach:

- Lokale Verpflichtungen: Einige länderspezifische Top-Level-Domainnamen sind teurer, da unterschiedliche Länder unterschiedliche Preise festsetzen.
- Dienste, die mit dem Domainnamen verbunden sind: Einige Registrare bieten Spamschutz, indem sie Ihre Postadresse und E-Mail-Adresse hinter ihren eigenen Adressen verstecken: Die Postadresse kann im Auftrag des Registrars angegeben werden, und Ihre E-Mail-Adresse kann über den Alias Ihres Registrars verschleiert werden.

### Eigenes Hosting vs. "verpacktes" Hosting

Wenn Sie eine Website veröffentlichen möchten, könnten Sie alles selbst machen: eine Datenbank (falls nötig), ein Content Management System oder {{Glossary("CMS", "CMS")}} (wie [WordPress](https://wordpress.org/), [Dotclear](https://dotclear.org/), [spip](https://www.spip.net/en_rubrique25.html) usw.) einrichten, vorgefertigte oder eigene Vorlagen hochladen.

Sie könnten die Umgebung Ihres Hosting-Anbieters nutzen, für etwa zehn bis fünfzehn Dollar pro Monat, oder direkt einen dedizierten Hosting-Dienst mit vorgefertigten CMSs abonnieren (z.B. [WordPress](https://wordpress.com/), [Tumblr](https://www.tumblr.com/), [Blogger](https://www.blogger.com/)). Für Letzteres müssen Sie nichts zahlen, aber Sie haben möglicherweise weniger Kontrolle über die Vorlagen und andere Optionen.

### Kostenloses Hosting vs. bezahltes Hosting

Sie könnten sich fragen, warum sollte ich für mein Hosting bezahlen, wenn es so viele kostenlose Dienste gibt?

- Sie haben mehr Freiheit, wenn Sie bezahlen. Ihre Website gehört Ihnen, und Sie können nahtlos von einem Hosting-Anbieter zum nächsten wechseln.
- Kostenlose Hosting-Anbieter könnten Ihrer Inhalte Werbung hinzufügen, ohne Ihre Kontrolle.

Es ist besser, bezahltes Hosting zu wählen, als sich auf kostenloses Hosting zu verlassen, da es möglich ist, Ihre Dateien problemlos zu verschieben und die Verfügbarkeit bei den meisten bezahlten Sites garantiert ist. Die meisten Hosting-Anbieter geben Ihnen einen großen Rabatt zum Start.

Einige Menschen entscheiden sich für einen gemischten Ansatz. Zum Beispiel, ihr Hauptblog auf einem bezahlten Host mit einem vollständigen Domainnamen, und spontaner, weniger strategischer Inhalt auf einem kostenlosen Host-Dienst.

## Professionelle Website-Agenturen und Hosting

Wenn Sie eine professionelle Website wünschen, werden Sie wahrscheinlich eine Webagentur beauftragen, dies für Sie zu tun.

Hier hängen die Kosten von mehreren Faktoren ab, wie zum Beispiel:

- Ist dies eine einfache Website mit ein paar Textseiten? Oder eine komplexere Website mit tausend Seiten?
- Möchten Sie sie regelmäßig aktualisieren? Oder wird es eine statische Website sein?
- Muss die Website mit der IT-Struktur Ihres Unternehmens verbunden werden, um Inhalte zu sammeln (zum Beispiel interne Daten)?
- Möchten Sie ein glänzendes neues Feature, das momentan populär ist? Zum Zeitpunkt des Schreibens suchen Kunden nach einseitigen Seiten mit komplexem Parallax.
- Müssen Sie die Agentur beauftragen, Benutzererfahrungen zu entwickeln oder komplexe {{Glossary("UX", "UX")}}-Probleme zu lösen? Zum Beispiel, eine Strategie zu entwickeln, um Benutzer zu engagieren, oder A/B-Tests durchzuführen, um eine Lösung aus mehreren Ideen zu wählen.

Und für das Hosting müssen Sie die folgenden Optionen in Betracht ziehen:

- Möchten Sie redundante Server, für den Fall, dass Ihr Server ausfällt?
- Ist eine 95%ige Zuverlässigkeit ausreichend, oder benötigen Sie einen professionellen, rund-um-die-Uhr-Service?
- Möchten Sie hochkarätige, ultra-responsive dedizierte Server, oder können Sie mit einer langsameren, gemeinsam genutzten Maschine auskommen?

Je nachdem, wie Sie diese Fragen beantworten, könnte Ihre Website Tausende bis Hunderttausende Dollar kosten.

## Nächste Schritte

Jetzt, da Sie verstanden haben, welches Geld Ihre Website kosten könnte, ist es an der Zeit, diese Website zu entwerfen und [Ihre Arbeitsumgebung einzurichten](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server).

- Lesen Sie weiter darüber, [wie Sie einen Text-Editor auswählen und installieren](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors).
- Wenn Sie sich mehr auf Design konzentrieren, werfen Sie einen Blick auf die [Anatomie einer Webseite](/de/docs/Learn_web_development/Howto/Design_and_accessibility/Common_web_layouts).
