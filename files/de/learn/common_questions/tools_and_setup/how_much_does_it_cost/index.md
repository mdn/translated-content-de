---
title: Wie viel kostet es, etwas im Web zu tun?
slug: Learn/Common_questions/Tools_and_setup/How_much_does_it_cost
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Sich im Web zu engagieren, ist nicht so billig, wie es aussieht. In diesem Artikel besprechen wir, wie viel Sie möglicherweise ausgeben müssen und warum.

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
          >einer Webseite, einer Website usw.</a
        >, und was
        <a href="/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name"
          >ein Domain-Name ist</a
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

Beim Start einer Website können Sie nichts ausgeben, oder Ihre Kosten schießen in die Höhe. In diesem Artikel besprechen wir, wie viel alles kostet und wie Sie das bekommen, wofür Sie zahlen (oder nicht zahlen).

## Software

### Texteditoren

Sie haben wahrscheinlich einen Texteditor: zum Beispiel Notepad unter Windows, Gedit unter Linux, TextEdit auf Mac. Das Schreiben von Code ist einfacher mit einem Editor, der farblich kodiert, Ihre Syntax überprüft und Ihnen bei der Struktur des Codes hilft.

Viele Editoren sind kostenlos, zum Beispiel [Brackets](https://brackets.io/), [Bluefish](https://bluefish.openoffice.nl/index.html), [TextWrangler](https://www.barebones.com/products/textwrangler/), [Eclipse](https://www.eclipse.org/), [NetBeans](https://netbeans.apache.org/), und [Visual Studio Code](https://code.visualstudio.com/). Einige, wie [Sublime Text](https://www.sublimetext.com/), können Sie so lange testen, wie Sie möchten, aber es wird empfohlen, zu zahlen. Andere, wie [PhpStorm](https://www.jetbrains.com/phpstorm/), können je nach gekaufter Lizenz zwischen einigen Dutzend und 200 Dollar kosten. Einige wie [Microsoft Visual Studio](https://visualstudio.microsoft.com/) können Hunderte oder Tausende von Dollar kosten; jedoch ist Visual Studio Community für individuelle Entwickler oder Open-Source-Projekte kostenlos. Oft gibt es bei kostenpflichtigen Editoren eine Testversion.

Um zu beginnen, empfehlen wir, mehrere Editoren auszuprobieren, um ein Gefühl dafür zu bekommen, welcher am besten für Sie funktioniert. Wenn Sie nur einfachen {{Glossary("HTML", "HTML")}}, {{Glossary("CSS", "CSS")}} und {{Glossary("JavaScript", "JavaScript")}} schreiben, verwenden Sie einen einfachen Editor.

Der Preis spiegelt nicht zuverlässig die Qualität oder Nützlichkeit eines Texteditors wider. Sie müssen ihn selbst ausprobieren und entscheiden, ob er Ihren Bedürfnissen entspricht. Zum Beispiel ist Sublime Text günstig, verfügt aber über viele kostenlose Plugins, die seine Funktionalität erheblich erweitern können.

### Bildbearbeitungsprogramme

Ihr System enthält wahrscheinlich einen Bildbearbeiter oder Betrachter: Paint auf Windows, Eye of GNOME auf Ubuntu, Vorschau auf Mac. Diese Programme sind relativ begrenzt, und Sie werden bald einen leistungsfähigeren Editor benötigen, um Ebenen, Effekte und Gruppierungen hinzuzufügen.

Editoren können kostenlos sein ([GIMP](https://www.gimp.org/), [Paint.NET](https://www.getpaint.net/)), moderat teuer ([PaintShop Pro](https://www.paintshoppro.com/), weniger als 100 US-Dollar) oder mehrere hundert Dollar ([Adobe Photoshop](https://www.adobe.com/products/photoshop.html)) kosten.

Sie können jeden von ihnen verwenden, da sie ähnliche Funktionen haben, obwohl einige so umfassend sind, dass Sie nie jede Funktion nutzen werden. Wenn Sie irgendwann Projekte mit anderen Designern austauschen müssen, sollten Sie herausfinden, welche Tools sie verwenden. Editoren können fertige Projekte in Standarddateiformate exportieren, aber jeder Editor speichert laufende Projekte in seinem eigenen spezialisierten Format. Die meisten Bilder im Internet sind urheberrechtlich geschützt, daher ist es besser, die Lizenz der Datei zu überprüfen, bevor Sie sie verwenden. Seiten wie [Pixabay](https://pixabay.com/) stellen Bilder unter CC0-Lizenz zur Verfügung, so dass Sie sie verwenden, bearbeiten und auch in modifizierter Form für kommerzielle Zwecke veröffentlichen können.

### Medienbearbeitungsprogramme

Wenn Sie Video oder Audio auf Ihrer Website integrieren möchten, können Sie entweder Online-Dienste einbetten (zum Beispiel YouTube, Vimeo, oder Dailymotion) oder Ihre eigenen Videos einfügen (siehe unten für Bandbreitenkosten).

Für Audiodateien können Sie kostenlose Software finden ([Audacity](https://www.audacityteam.org/), [Wavosaur](https://www.wavosaur.com/)) oder bis zu ein paar hundert Dollar ausgeben ([Sound Forge](https://www.magix.com/us/music-editing/sound-forge/), [Adobe Audition](https://www.adobe.com/products/audition.html)). Ebenso kann Videobearbeitungssoftware kostenlos sein ([PiTiVi](https://www.pitivi.org/), [OpenShot](https://www.openshot.org/) für Linux, [iMovie](https://support.apple.com/imovie) für Mac), weniger als $100 ([Adobe Premiere Elements](https://www.adobe.com/products/premiere-elements.html)) oder mehrere hundert Dollar ([Adobe Premiere Pro](https://www.adobe.com/products/premiere.html), [Avid Media Composer](https://www.avid.com/media-composer), [Final Cut Pro](https://www.apple.com/final-cut-pro/)) kosten. Die Software, die Sie mit Ihrer Digitalkamera erhalten haben, deckt möglicherweise alle Ihre Bedürfnisse ab.

### Veröffentlichungstools

Sie benötigen auch eine Möglichkeit, Dateien hochzuladen: von Ihrer Festplatte auf einen entfernten Webserver. Dazu sollten Sie ein Veröffentlichungstool wie einen {{Glossary("FTP", "(S)FTP-Client")}}, [RSync](https://en.wikipedia.org/wiki/Rsync) oder [Git/GitHub](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) verwenden.

Jedes Betriebssystem enthält einen (S)FTP-Client als Teil seines Dateimanagers. Der Windows Explorer, Nautilus (ein gängiger Linux-Dateimanager) und der Mac Finder beinhalten diese Funktionalität. Trotzdem wählen viele Leute spezialisierte (S)FTP-Clients aus, um lokale oder entfernte Verzeichnisse nebeneinander anzuzeigen und Serverpasswörter zu speichern.

Wenn Sie einen (S)FTP-Client installieren möchten, gibt es mehrere zuverlässige und kostenlose Optionen: zum Beispiel [FileZilla](https://filezilla-project.org/) für alle Plattformen, [WinSCP](https://winscp.net/eng/index.php) für Windows, [Cyberduck](https://cyberduck.io/) für Mac oder Windows, [und weitere](https://en.wikipedia.org/wiki/List_of_FTP_server_software).

Da FTP von Natur aus unsicher ist, sollten Sie darauf achten, SFTP zu verwenden — die sichere, verschlüsselte Version von FTP, die die meisten Hosting-Seiten, mit denen Sie heutzutage umgehen, standardmäßig anbieten — oder eine andere sichere Lösung wie Rsync über SSH.

## Browser

Sie haben entweder bereits einen Browser oder können einen kostenlos erhalten. Falls erforderlich, laden Sie Firefox [hier](https://www.mozilla.org/en-US/firefox/all/) oder Google Chrome [hier](https://www.google.com/chrome/) herunter.

## Webzugang

### Computer / Modem

Sie benötigen einen Computer. Die Kosten können erheblich variieren, abhängig von Ihrem Budget und wo Sie leben. Um eine minimalistische Website zu veröffentlichen, benötigen Sie nur einen einfachen Computer, der einen Editor und einen Webbrowser starten kann, sodass die Einstiegshürde ziemlich niedrig sein kann.

Natürlich benötigen Sie einen leistungsfähigeren Computer, wenn Sie komplexe Designs erstellen, Fotos bearbeiten oder Audio- und Videodateien produzieren möchten.

Sie müssen Inhalte auf einen entfernten Server hochladen (siehe _Hosting_ unten), daher benötigen Sie ein Modem. Ihr {{Glossary("ISP", "ISP")}} kann Ihnen die Internetverbindung für einige Dollar pro Monat vermieten, obwohl Ihr Budget je nach Standort variieren kann.

### ISP-Zugang

Stellen Sie sicher, dass Sie über ausreichend {{Glossary("Bandwidth", "Bandbreite")}} verfügen:

- Niedrige Bandbreite kann ausreichen, um eine "einfache" Website zu unterstützen: vernünftig große Bilder, Texte, etwas CSS und JavaScript. Das wird Ihnen wahrscheinlich ein paar Dutzend Dollar kosten, einschließlich der Miete für das Modem.
- Andererseits benötigen Sie eine Hochgeschwindigkeitsverbindung wie DSL, Kabel oder Glasfaser, wenn Sie eine fortgeschrittenere Website mit Hunderten von Dateien wünschen, oder wenn Sie schwere Video-/Audiodateien direkt von Ihrem Webserver liefern möchten. Es könnte genauso viel kosten wie der Zugang mit niedriger Bandbreite, bis zu mehreren hundert Dollar pro Monat für professionellere Anforderungen.

## Hosting

### Verständnis von Bandbreite

Hosting-Anbieter berechnen Ihnen gemäß der Menge an {{Glossary("Bandwidth", "Bandbreite")}}, die Ihre Website verbraucht. Dies hängt davon ab, wie viele Personen und Web-Crawling-Roboter innerhalb einer bestimmten Zeit auf Ihre Inhalte zugreifen und wie viel Serverplatz Ihre Inhalte einnehmen. Deshalb speichern viele Leute ihre Videos auf dedizierten Diensten wie YouTube, Dailymotion und Vimeo. Ihr Anbieter kann beispielsweise einen Plan haben, der bis zu mehreren tausend Besucher pro Tag für einen "angemessenen" Bandbreitenverbrauch einschließt. Seien Sie jedoch vorsichtig, da dies von einem Hosting-Anbieter zum anderen unterschiedlich definiert wird. Beachten Sie, dass zuverlässiges, bezahltes, persönliches Hosting rund zehn bis fünfzehn Dollar pro Monat kosten kann.

> [!NOTE]
> Es gibt keine "unbegrenzte" Bandbreite. Wenn Sie eine riesige Menge Bandbreite verbrauchen, erwarten Sie, eine große Menge Geld zu zahlen.

### Domain-Namen

Ihr Domain-Name muss über einen Domain-Name-Anbieter (einen Registrar) gekauft werden. Ihr Hosting-Anbieter kann auch ein Registrar sein ([Ionos](https://www.ionos.com/), [Gandi](https://www.gandi.net/en-US) sind zum Beispiel sowohl Registrare als auch Hosting-Anbieter). Der Domain-Name kostet normalerweise 5-15 Dollar pro Jahr. Dieser Preis variiert je nach:

- Lokalen Verpflichtungen: Einige länderspezifische Top-Level-Domains sind teurer, da verschiedene Länder unterschiedliche Preise festlegen.
- Diensten, die mit dem Domain-Namen verbunden sind: Einige Registrare bieten Spamschutz, indem sie Ihre Postadresse und E-Mail-Adresse hinter ihren eigenen Adressen verbergen: Die Postadresse kann über den Registrar bereitgestellt werden, und Ihre E-Mail-Adresse kann über das Alias Ihres Registrars verschleiert werden.

### Eigenes Hosting vs. "Verpacktes" Hosting

Wenn Sie eine Website veröffentlichen möchten, könnten Sie alles selbst machen: eine Datenbank einrichten (falls erforderlich), ein Content Management System oder {{Glossary("CMS", "CMS")}} (wie [WordPress](https://wordpress.org/), [Dotclear](https://dotclear.org/), [spip](https://www.spip.net/en_rubrique25.html) usw.) hochladen, vorgefertigte oder eigene Templates verwenden.

Sie könnten Ihre Hosting-Umgebung für etwa zehn bis fünfzehn Dollar pro Monat nutzen oder direkt bei einem dedizierten Hosting-Service mit vorkonfigurierten CMSs (z.B. [WordPress](https://wordpress.com/), [Tumblr](https://www.tumblr.com/), [Blogger](https://www.blogger.com/)) abonnieren. Für Weiters müssen Sie nichts bezahlen, aber Sie haben möglicherweise weniger Kontrolle über die Vorlagen und andere Optionen.

### Kostenloses Hosting vs. bezahltes Hosting

Sie könnten sich fragen, warum Sie für Ihr Hosting zahlen sollten, wenn es so viele kostenlose Dienste gibt?

- Sie haben mehr Freiheit, wenn Sie zahlen. Ihre Website gehört Ihnen, und Sie können nahtlos von einem Hosting-Anbieter zum nächsten wechseln.
- Kostenlose Hosting-Anbieter können Werbung zu Ihrem Inhalt hinzufügen, die außerhalb Ihrer Kontrolle liegt.

Es ist besser, bezahltes Hosting zu wählen, anstatt sich auf kostenloses Hosting zu verlassen, da es möglich ist, Ihre Dateien einfach zu verschieben und die Betriebszeit von den meisten bezahlten Seiten garantiert wird. Die meisten Hosting-Anbieter geben Ihnen einen großen Rabatt, um anzufangen.

Einige Leute entscheiden sich für einen gemischten Ansatz. Zum Beispiel ihr Hauptblog auf einem bezahlten Host mit einem vollständigen Domain-Namen und spontanen, weniger strategischen Inhalten auf einem kostenlosen Hosting-Dienst.

## Professionelle Webagenturen und Hosting

Wenn Sie eine professionelle Website wünschen, werden Sie wahrscheinlich eine Webagentur damit beauftragen.

Hier hängen die Kosten von mehreren Faktoren ab, wie:

- Handelt es sich um eine einfache Website mit wenigen Textseiten? Oder eine komplexere, tausendseitige Website?
- Möchten Sie sie regelmäßig aktualisieren? Oder wird es eine statische Website sein?
- Muss die Website mit der IT-Struktur Ihres Unternehmens verbunden sein, um Inhalte zu sammeln (z.B. interne Daten)?
- Möchten Sie einige glänzende neue Funktionen, die momentan populär sind? Zum Zeitpunkt des Schreibens suchen Kunden nach einzelnen Seiten mit komplexem Parallax.
- Brauchen Sie, dass die Agentur Nutzergeschichten entwickelt oder komplexe {{Glossary("UX", "UX")}}-Probleme löst? Zum Beispiel eine Strategie zur Nutzerbindung zu schaffen oder A/B-Tests durchzuführen, um eine Lösung unter mehreren Ideen zu wählen.

Und für das Hosting müssen Sie folgende Entscheidungen berücksichtigen:

- Möchten Sie redundante Server, falls Ihr Server ausfällt?
- Sind 95 % Zuverlässigkeit ausreichend, oder benötigen Sie professionellen, rund um die Uhr Service?
- Möchten Sie hochklassige, ultraschnelle dedizierte Server, oder können Sie mit einer langsameren, gemeinsamen Maschine auskommen?

Je nachdem, wie Sie diese Fragen beantworten, könnte Ihre Website von Tausenden bis zu Hunderttausenden von Dollar kosten.

## Nächste Schritte

Nachdem Sie nun verstanden haben, wie viel Ihre Website möglicherweise kostet, ist es an der Zeit, mit dem Entwerfen dieser Website und dem [Einrichten Ihrer Arbeitsumgebung](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server) zu beginnen.

- Lesen Sie weiter über [wie man einen Texteditor auswählt und installiert](/de/docs/Learn/Common_questions/Tools_and_setup/Available_text_editors).
- Wenn Sie sich mehr auf das Design konzentrieren, werfen Sie einen Blick auf die [Anatomie einer Webseite](/de/docs/Learn/Common_questions/Design_and_accessibility/Common_web_layouts).
