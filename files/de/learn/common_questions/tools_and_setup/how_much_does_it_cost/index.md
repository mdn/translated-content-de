---
title: Wie viel kostet es, etwas im Web zu machen?
slug: Learn/Common_questions/Tools_and_setup/How_much_does_it_cost
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Sich im Web zu engagieren ist nicht so günstig, wie es scheint. In diesem Artikel besprechen wir, wie viel Sie möglicherweise ausgeben müssen und warum.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten bereits verstehen,
        <a href="/de/docs/Learn/Common_questions/Tools_and_setup/What_software_do_I_need">welche Software Sie benötigen</a>,
        den Unterschied zwischen
        <a href="/de/docs/Learn/Common_questions/Web_mechanics/Pages_sites_servers_and_search_engines">einer Webseite, einer Website usw.</a>
        und was
        <a href="/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name">ein Domainname ist</a>.
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

Wenn Sie eine Website starten, können Sie nichts ausgeben oder Ihre Kosten können in die Höhe schießen. In diesem Artikel besprechen wir, wie viel alles kostet und wie Sie das bekommen, wofür Sie bezahlen (oder nicht bezahlen).

## Software

### Texteditoren

Sie haben wahrscheinlich bereits einen Texteditor: Zum Beispiel Notepad unter Windows, Gedit unter Linux, TextEdit auf einem Mac. Es wird Ihnen leichter fallen, Code zu schreiben, wenn Sie einen Editor wählen, der den Code farblich hervorhebt, Ihre Syntax überprüft und Sie bei der Struktur des Codes unterstützt.

Viele Editoren sind kostenlos, zum Beispiel [Brackets](https://brackets.io/), [Bluefish](https://bluefish.openoffice.nl/index.html), [TextWrangler](https://www.barebones.com/products/textwrangler/), [Eclipse](https://www.eclipse.org/), [Netbeans](https://netbeans.apache.org/) und [Visual Studio Code](https://code.visualstudio.com/). Einige, wie [Sublime Text](https://www.sublimetext.com/), können Sie so lange testen, wie Sie möchten, aber Sie werden ermutigt, zu zahlen. Einige, wie [PhpStorm](https://www.jetbrains.com/phpstorm/), können zwischen ein paar Dutzend und 200 Dollar kosten, je nach dem von Ihnen gewählten Plan. Einige davon, wie [Microsoft Visual Studio](https://visualstudio.microsoft.com/), können Hunderte oder Tausende von Dollar kosten, obwohl Visual Studio Community kostenlos für einzelne Entwickler oder Open-Source-Projekte ist. Oft haben kostenpflichtige Editoren eine Testversion.

Um zu beginnen, empfehlen wir, mehrere Editoren auszuprobieren, um ein Gefühl dafür zu bekommen, welcher am besten für Sie funktioniert. Wenn Sie nur einfachen {{Glossary("HTML")}}, {{Glossary("CSS")}} und {{Glossary("JavaScript")}} schreiben, sollten Sie mit einem einfachen Editor beginnen.

Der Preis spiegelt nicht zuverlässig die Qualität oder Nützlichkeit eines Texteditors wider. Sie müssen es selbst ausprobieren und entscheiden, ob es Ihren Bedürfnissen entspricht. Zum Beispiel ist Sublime Text günstig, bietet aber viele kostenlose Plugins, die seine Funktionalität erheblich erweitern können.

### Bildbearbeitungsprogramme

Ihr System enthält wahrscheinlich einen einfachen Bildeditor oder Betrachter: Paint unter Windows, Eye of Gnome unter Ubuntu, Preview auf einem Mac. Diese Programme sind relativ begrenzt, und Sie werden bald einen robusteren Editor benötigen, um Ebenen, Effekte und Gruppierungen hinzuzufügen.

Editoren können kostenlos sein ([GIMP](https://www.gimp.org/), [Paint.NET](https://www.getpaint.net/)), mäßig teuer ([PaintShop Pro](https://www.paintshoppro.com/), weniger als $100) oder mehrere hundert Dollar kosten ([Adobe Photoshop](https://www.adobe.com/products/photoshop.html)).

Sie können jeden dieser Editoren verwenden, da sie ähnliche Funktionen haben, obwohl einige so umfassend sind, dass Sie nie alle Funktionen nutzen werden. Wenn Sie irgendwann Projekte mit anderen Designern austauschen müssen, sollten Sie herausfinden, welche Werkzeuge sie verwenden. Alle Editoren können fertige Projekte in Standard-Dateiformate exportieren, aber jeder Editor speichert laufende Projekte in seinem eigenen spezialisierten Format. Die meisten Bilder im Internet sind urheberrechtlich geschützt, daher ist es besser, die Lizenz der Datei zu überprüfen, bevor Sie sie verwenden. Seiten wie [Pixabay](https://pixabay.com/) stellen Bilder unter der CC0-Lizenz zur Verfügung, sodass Sie sie verwenden, bearbeiten und sogar für kommerzielle Zwecke veröffentlichen können.

### Medienbearbeitungsprogramme

Wenn Sie Video oder Audio auf Ihrer Website einbinden möchten, können Sie entweder Online-Dienste einbinden (zum Beispiel YouTube, Vimeo oder Dailymotion) oder Ihre eigenen Videos einfügen (siehe unten für Bandbreitenkosten).

Für Audiodateien können Sie kostenlose Software finden ([Audacity](https://www.audacityteam.org/), [Wavosaur](https://www.wavosaur.com/)), oder zahlen Sie bis zu ein paar hundert Dollar ([Sound Forge](https://www.magix.com/us/music-editing/sound-forge/), [Adobe Audition](https://www.adobe.com/products/audition.html)). Ebenso kann Videosoftware kostenlos sein ([PiTiVi](https://www.pitivi.org/), [OpenShot](https://www.openshot.org/) für Linux, [iMovie](https://support.apple.com/imovie) für Mac), weniger als $100 kosten ([Adobe Premiere Elements](https://www.adobe.com/products/premiere-elements.html)) oder mehrere hundert Dollar ([Adobe Premiere Pro](https://www.adobe.com/products/premiere.html), [Avid Media Composer](https://www.avid.com/media-composer), [Final Cut Pro](https://www.apple.com/final-cut-pro/)). Die Software, die Sie mit Ihrer Digitalkamera erhalten haben, könnte alle Ihre Bedürfnisse abdecken.

### Veröffentlichungstools

Sie benötigen auch eine Möglichkeit, Dateien hochzuladen: von Ihrer Festplatte auf einen entfernten Webserver. Dazu sollten Sie ein Veröffentlichungstool wie einen (S)[FTP-Client](/de/docs/Glossary/FTP), [RSync](https://en.wikipedia.org/wiki/Rsync) oder [Git/GitHub](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) verwenden.

Jedes Betriebssystem enthält einen (S)FTP-Client als Teil seines Dateimanagers. Windows Explorer, Nautilus (ein häufiger Linux-Dateimanager) und der Mac Finder bieten diese Funktionalität. Dennoch wählen viele Menschen dedizierte (S)FTP-Clients, um lokale oder entfernte Verzeichnisse nebeneinander anzuzeigen und Server-Passwörter zu speichern.

Wenn Sie einen (S)FTP-Client installieren möchten, gibt es mehrere zuverlässige und kostenlose Optionen: zum Beispiel [FileZilla](https://filezilla-project.org/) für alle Plattformen, [WinSCP](https://winscp.net/eng/index.php) für Windows, [Cyberduck](https://cyberduck.io/) für Mac oder Windows, [und weitere](https://en.wikipedia.org/wiki/List_of_FTP_server_software).

Da FTP von Natur aus unsicher ist, sollten Sie sicherstellen, dass Sie SFTP verwenden — die sichere, verschlüsselte Version von FTP, die die meisten Hosting-Seiten, mit denen Sie heutzutage arbeiten werden, standardmäßig anbieten — oder eine andere sichere Lösung wie Rsync über SSH.

## Browser

Sie haben entweder bereits einen Browser oder können einen kostenlos erhalten. Falls erforderlich, laden Sie Firefox [hier](https://www.mozilla.org/en-US/firefox/all/) oder Google Chrome [hier](https://www.google.com/chrome/) herunter.

## Internetzugang

### Computer / Modem

Sie benötigen einen Computer. Die Kosten können erheblich variieren, je nach Ihrem Budget und Ihrem Wohnort. Um eine grundlegende Website zu veröffentlichen, benötigen Sie lediglich einen einfachen Computer, der in der Lage ist, einen Editor und einen Webbrowser zu starten, sodass die Einstiegskosten recht niedrig sein können.

Natürlich benötigen Sie einen leistungsstärkeren Computer, wenn Sie komplizierte Designs erstellen, Fotos bearbeiten oder Audio- und Videodateien produzieren möchten.

Sie müssen Inhalte auf einen entfernten Server hochladen (siehe _Hosting_ unten), also benötigen Sie ein Modem. Ihr {{Glossary("ISP")}} kann Ihnen Internet-Konnektivität für ein paar Dollar pro Monat vermieten, obwohl Ihr Budget je nach Standort variieren kann.

### ISP-Zugang

Stellen Sie sicher, dass Sie über ausreichende {{Glossary("Bandwidth", "Bandbreite")}} verfügen:

- Ein Zugang mit geringer Bandbreite kann ausreichen, um eine "einfache" Website zu unterstützen: angemessen große Bilder, Texte, etwas CSS und JavaScript. Das wird Ihnen wahrscheinlich ein paar Dutzend Dollar kosten, einschließlich der Miete für das Modem.
- Andererseits benötigen Sie eine Verbindung mit hoher Bandbreite, wie DSL, Kabel oder Glasfaserzugang, wenn Sie eine fortgeschrittenere Website mit Hunderten von Dateien oder große Video-/Audiodateien direkt von Ihrem Webserver bereitstellen möchten. Das könnte ebenso viel kosten wie ein Zugang mit geringer Bandbreite, bis zu mehreren hundert Dollar pro Monat für professionellere Bedürfnisse.

## Hosting

### Verständnis der Bandbreite

Hosting-Anbieter berechnen Ihnen die Kosten je nach dem Maß an {{Glossary("Bandwidth", "Bandbreite")}}, das Ihre Website verbraucht. Dies hängt davon ab, wie viele Personen und Webcrawler auf Ihre Inhalte in einem bestimmten Zeitraum zugreifen und wie viel Serverplatz Ihre Inhalte beanspruchen. Aus diesem Grund speichern viele Menschen ihre Videos auf spezialisierten Diensten wie YouTube, Dailymotion und Vimeo. Zum Beispiel kann Ihr Anbieter einen Tarif haben, der bis zu mehreren tausend Besucher pro Tag bei "vernünftigem" Bandbreitenverbrauch enthält. Seien Sie jedoch vorsichtig, da dies von einem Hosting-Anbieter zum anderen unterschiedlich definiert wird. Beachten Sie, dass zuverlässiges, kostenpflichtiges, persönliches Hosting rund zehn bis fünfzehn Dollar pro Monat kosten kann.

> [!NOTE]
> Es gibt kein "unbegrenztes" Bandbreitenangebot. Wenn Sie eine enorme Menge an Bandbreite verbrauchen, erwarten Sie, eine enorme Menge an Geld zu zahlen.

### Domainnamen

Ihr Domainname muss über einen Domainnamenanbieter (einen Registrar) gekauft werden. Ihr Hosting-Anbieter kann auch ein Registrar sein ([Ionos](https://www.ionos.com/), [Gandi](https://www.gandi.net/en-US) sind zum Beispiel gleichzeitig Registrare und Hosting-Anbieter). Der Domainname kostet normalerweise 5-15 Dollar pro Jahr. Die Kosten variieren je nach folgenden Faktoren:

- Lokale Verpflichtungen: Einige Ländercode-Top-Level-Domainnamen sind teurer, da verschiedene Länder unterschiedliche Preise festlegen.
- Mit dem Domainnamen verbundene Dienste: Einige Registrare bieten Spam-Schutz, indem sie Ihre Postanschrift und E-Mail-Adresse hinter ihren eigenen Adressen verbergen: Die Postanschrift kann in Pflege des Registrars zur Verfügung gestellt werden, und Ihre E-Mail-Adresse kann über das Alias des Registrars verschleiert werden.

### Eigenes Hosting vs. "Paket"-Hosting

Wenn Sie eine Website veröffentlichen möchten, können Sie alles selbst machen: eine Datenbank einrichten (falls benötigt), ein Content Management System oder {{Glossary("CMS")}} (wie [Wordpress](https://wordpress.org/), [Dotclear](https://dotclear.org/), [spip](https://www.spip.net/en_rubrique25.html) usw.) aufsetzen, vorgefertigte oder eigene Vorlagen hochladen.

Sie könnten die Umgebung Ihres Hosting-Anbieters nutzen, für ungefähr zehn bis fünfzehn Dollar pro Monat, oder direkt zu einem dedizierten Hosting-Dienst mit vorgepackten CMSs abonnieren (z.B. [Wordpress](https://wordpress.com/), [Tumblr](https://www.tumblr.com/), [Blogger](https://www.blogger.com/)). Letzteres erfordert keine Bezahlung, aber Sie haben möglicherweise weniger Kontrolle über Vorlagen und andere Optionen.

### Kostenloses Hosting vs. kostenpflichtiges Hosting

Man könnte fragen, warum sollte ich für mein Hosting bezahlen, wenn es so viele kostenlose Dienste gibt?

- Sie haben mehr Freiheit, wenn Sie bezahlen. Ihre Website gehört Ihnen, und Sie können nahtlos von einem Hosting-Anbieter zum nächsten migrieren.
- Bei kostenlosen Hosting-Anbietern kann es sein, dass Werbeanzeigen zu Ihren Inhalten hinzugefügt werden, was außerhalb Ihrer Kontrolle liegt.

Es ist besser, sich für kostenpflichtiges Hosting zu entscheiden, anstatt sich auf kostenloses Hosting zu verlassen, da es möglich ist, Ihre Dateien leicht zu bewegen und die Betriebszeit wird von den meisten kostenpflichtigen Seiten garantiert. Die meisten Hosting-Anbieter bieten Ihnen zu Beginn einen großen Rabatt.

Einige Leute entscheiden sich für einen gemischten Ansatz. Zum Beispiel ihr Hauptblog bei einem kostenpflichtigen Host mit einem vollständigen Domainnamen und spontanen, weniger strategischen Inhalten auf einem kostenlosen Hosting-Dienst.

## Professionelle Website-Agenturen und Hosting

Wenn Sie eine professionelle Website wünschen, werden Sie wahrscheinlich eine Webagentur beauftragen, dies für Sie zu tun.

Hier hängen die Kosten von mehreren Faktoren ab, wie zum Beispiel:

- Ist dies eine einfache Website mit wenigen Textseiten? Oder eine komplexere Website mit tausenden Seiten?
- Möchten Sie sie regelmäßig aktualisieren? Oder wird es eine statische Website?
- Muss die Website mit der IT-Struktur Ihres Unternehmens verbunden werden, um Inhalte zu sammeln (z.B. interne Daten)?
- Wünschen Sie ein glänzendes neues Feature, das gerade beliebt ist? Zum Zeitpunkt des Schreibens suchen Kunden nach Einzelseiten mit komplexer Parallaxe.
- Benötigen Sie die Agentur, um Benutzerstories zu entwickeln oder komplexe {{Glossary("UX")}}-Probleme zu lösen? Zum Beispiel eine Strategie zur Nutzerbindung zu entwickeln oder A/B-Tests durchzuführen, um eine Lösung aus mehreren Ideen auszuwählen.

Und für das Hosting müssen Sie folgende Entscheidungen berücksichtigen:

- Möchten Sie redundante Server, falls Ihr Server ausfällt?
- Ist eine Zuverlässigkeit von 95 % ausreichend, oder benötigen Sie professionellen, durchgängigen Service?
- Möchten Sie hochkarätige, ultra-responsive dedizierte Server, oder können Sie mit einer langsameren, geteilten Maschine auskommen?

Abhängig davon, wie Sie diese Fragen beantworten, könnte Ihre Website Tausende bis Hunderttausende von Dollar kosten.

## Nächste Schritte

Jetzt, wo Sie verstehen, welche Arten von Kosten Ihre Website verursachen kann, ist es Zeit, diese Website zu entwerfen und [Ihre Arbeitsumgebung einzurichten](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server).

- Lesen Sie weiter über [wie Sie einen Texteditor auswählen und installieren](/de/docs/Learn/Common_questions/Tools_and_setup/Available_text_editors).
- Wenn Sie sich mehr auf Design konzentrieren, werfen Sie einen Blick auf die [Anatomie einer Webseite](/de/docs/Learn/Common_questions/Design_and_accessibility/Common_web_layouts).
