---
title: Wie viel kostet es, etwas im Web zu tun?
slug: Learn/Common_questions/Tools_and_setup/How_much_does_it_cost
l10n:
  sourceCommit: 1c0dda60cb2b680a753264b538e2c46776ecd837
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Im Web aktiv zu werden, ist nicht so kostengünstig, wie es scheint. In diesem Artikel besprechen wir, wie viel Sie möglicherweise ausgeben müssen und warum.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten bereits wissen,
        <a href="/de/docs/Learn/Common_questions/Tools_and_setup/What_software_do_I_need"
          >welche Software Sie benötigen</a
        >, den Unterschied zwischen
        <a
          href="/de/docs/Learn/Common_questions/Web_mechanics/Pages_sites_servers_and_search_engines"
          >einer Webseite, einer Website usw.</a
        > und was
        <a href="/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name"
          >ein Domainname ist</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Überprüfen des gesamten Prozesses zur Erstellung einer Website und Erfahren, wie viel jeder Schritt kosten kann.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Beim Start einer Website können Ihre Kosten nichts betragen oder in die Höhe schnellen. In diesem Artikel besprechen wir, wie viel alles kostet und wie Sie erhalten, wofür Sie bezahlen (oder nicht bezahlen).

## Software

### Texteditoren

Sie haben wahrscheinlich einen Texteditor, wie Notepad auf Windows, Gedit auf Linux, TextEdit auf Mac. Es ist einfacher, Code zu schreiben, wenn Sie einen Editor wählen, der farblich codiert, Ihre Syntax prüft und Ihnen bei der Code-Struktur hilft.

Viele Editoren sind kostenlos, zum Beispiel [Brackets](https://brackets.io/), [Bluefish](https://bluefish.openoffice.nl/index.html), [TextWrangler](https://www.barebones.com/products/textwrangler/), [Eclipse](https://www.eclipse.org/), [Netbeans](https://netbeans.apache.org/) und [Visual Studio Code](https://code.visualstudio.com/). Einige, wie [Sublime Text](https://www.sublimetext.com/), können Sie solange testen, wie Sie möchten, aber es wird empfohlen zu zahlen. Einige, wie [PhpStorm](https://www.jetbrains.com/phpstorm/), können je nach Kaufplan zwischen einigen Dutzend und 200 Dollar kosten. Einige von ihnen, wie [Microsoft Visual Studio](https://visualstudio.microsoft.com/), können Hunderte oder Tausende von Dollar kosten; obwohl Visual Studio Community für einzelne Entwickler oder Open Source-Projekte kostenlos ist. Häufig bieten kostenpflichtige Editoren eine Testversion an.

Um zu beginnen, empfehlen wir, mehrere Editoren auszuprobieren, um ein Gefühl dafür zu bekommen, welcher am besten für Sie funktioniert. Wenn Sie nur einfachen {{Glossary("HTML", "HTML")}}-, {{Glossary("CSS", "CSS")}}- und {{Glossary("JavaScript", "JavaScript")}}-Code schreiben, wählen Sie einen einfachen Editor.

Der Preis spiegelt nicht zuverlässig die Qualität oder Nützlichkeit eines Texteditors wider. Sie müssen ihn selbst ausprobieren und entscheiden, ob er Ihren Bedürfnissen entspricht. Zum Beispiel ist Sublime Text günstig, bietet aber viele kostenlose Plugins, die seine Funktionalität erheblich erweitern können.

### Bildbearbeitungsprogramme

Ihr System verfügt wahrscheinlich über einen einfachen Bildeditor oder Betrachter: Paint auf Windows, Eye of Gnome auf Ubuntu, Preview auf Mac. Diese Programme sind relativ begrenzt, Sie werden bald einen robusteren Editor wünschen, um Ebenen, Effekte und Gruppierungen hinzuzufügen.

Editoren können kostenlos sein ([GIMP](https://www.gimp.org/), [Paint.NET](https://www.getpaint.net/)), moderat teuer ([PaintShop Pro](https://www.paintshoppro.com/), unter 100 Dollar), oder mehrere Hundert Dollar ([Adobe Photoshop](https://www.adobe.com/products/photoshop.html)).

Sie können jeden von ihnen verwenden, da sie ähnliche Funktionen haben, obwohl einige so umfangreich sind, dass Sie nie jede Funktion nutzen werden. Wenn Sie irgendwann Projekte mit anderen Designern austauschen müssen, sollten Sie herausfinden, welche Werkzeuge sie verwenden. Editoren können alle fertige Projekte in Standard-Dateiformate exportieren, aber jeder Editor speichert laufende Projekte in seinem eigenen spezialisierten Format. Die meisten Bilder im Internet sind urheberrechtlich geschützt, daher ist es besser, die Lizenz der Datei zu überprüfen, bevor Sie sie verwenden. Seiten wie [Pixabay](https://pixabay.com/) bieten Bilder unter CC0-Lizenz an, sodass Sie sie auch für kommerzielle Zwecke mit Änderungen verwenden, bearbeiten und veröffentlichen können.

### Mediaprogramme

Wenn Sie Video oder Audio in Ihre Website einbinden möchten, können Sie entweder Online-Dienste (zum Beispiel YouTube, Vimeo oder Dailymotion) einbetten oder Ihre eigenen Videos einfügen (siehe unten für Bandbreitenkosten).

Für Audiodateien können Sie kostenlose Software finden ([Audacity](https://www.audacityteam.org/), [Wavosaur](https://www.wavosaur.com/)), oder bis zu ein paar Hundert Dollar zahlen ([Sound Forge](https://www.magix.com/us/music-editing/sound-forge/), [Adobe Audition](https://www.adobe.com/products/audition.html)). Ebenso kann Video-Bearbeitungssoftware kostenlos sein ([PiTiVi](https://www.pitivi.org/), [OpenShot](https://www.openshot.org/) für Linux, [iMovie](https://support.apple.com/imovie) für Mac), unter 100 Dollar ([Adobe Premiere Elements](https://www.adobe.com/products/premiere-elements.html)), oder mehrere Hundert Dollar ([Adobe Premiere Pro](https://www.adobe.com/products/premiere.html), [Avid Media Composer](https://www.avid.com/media-composer), [Final Cut Pro](https://www.apple.com/final-cut-pro/)). Die Software, die Sie mit Ihrer Digitalkamera erhalten haben, kann alle Ihre Bedürfnisse abdecken.

### Veröffentlichungstools

Sie benötigen auch eine Möglichkeit, Dateien hochzuladen: von Ihrer Festplatte zu einem entfernten Webserver. Dazu sollten Sie ein Veröffentlichungstool wie einen {{Glossary("FTP", "(S)FTP-Client")}}, [RSync](https://en.wikipedia.org/wiki/Rsync) oder [Git/GitHub](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) verwenden.

Jedes Betriebssystem enthält einen (S)FTP-Client als Bestandteil des Dateimanagers. Der Windows Explorer, Nautilus (ein häufiger Linux-Dateimanager) und der Mac Finder enthalten alle diese Funktionalität. Menschen entscheiden sich jedoch häufig für dedizierte (S)FTP-Clients, um lokale oder entfernte Verzeichnisse nebeneinander anzuzeigen und Server-Passwörter zu speichern.

Wenn Sie einen (S)FTP-Client installieren möchten, gibt es mehrere zuverlässige und kostenlose Optionen: zum Beispiel [FileZilla](https://filezilla-project.org/) für alle Plattformen, [WinSCP](https://winscp.net/eng/index.php) für Windows, [Cyberduck](https://cyberduck.io/) für Mac oder Windows und [weitere](https://en.wikipedia.org/wiki/List_of_FTP_server_software).

Da FTP inhärent unsicher ist, sollten Sie sicherstellen, dass Sie SFTP verwenden — die sichere, verschlüsselte Version von FTP, die die meisten Hosting-Sites, mit denen Sie heutzutage zu tun haben, standardmäßig anbieten — oder eine andere sichere Lösung wie Rsync über SSH.

## Browser

Sie haben entweder bereits einen Browser oder können einen kostenlos erhalten. Falls nötig, laden Sie Firefox [hier](https://www.mozilla.org/en-US/firefox/all/) oder Google Chrome [hier](https://www.google.com/chrome/) herunter.

## Web-Zugang

### Computer / Modem

Sie benötigen einen Computer. Die Kosten können erheblich variieren, abhängig von Ihrem Budget und Ihrem Wohnort. Um eine einfache Website zu veröffentlichen, benötigen Sie nur einen einfachen Computer, der in der Lage ist, einen Editor und einen Webbrowser zu starten, sodass der Einstieg relativ niedrig sein kann.

Natürlich benötigen Sie einen leistungsfähigeren Computer, wenn Sie komplexe Designs erstellen, Fotos bearbeiten oder Audio- und Videodateien produzieren möchten.

Sie müssen Inhalte auf einen entfernten Server hochladen (siehe _Hosting_ unten), daher benötigen Sie ein Modem. Ihr {{Glossary("ISP", "ISP")}} kann Ihnen Internet-Konnektivität für ein paar Dollar pro Monat mieten, obwohl Ihr Budget je nach Standort variieren kann.

### ISP-Zugang

Stellen Sie sicher, dass Sie über ausreichende {{Glossary("Bandwidth", "Bandbreite")}} verfügen:

- Niedrige Bandbreite kann ausreichen, um eine "einfache" Website zu unterstützen: angemessen große Bilder, Texte, etwas CSS und JavaScript. Das wird Sie wahrscheinlich ein paar Dutzend Dollar kosten, einschließlich der Miete für das Modem.
- Andererseits benötigen Sie eine Hochgeschwindigkeitsverbindung, wie DSL, Kabel oder Glasfaser, wenn Sie eine fortschrittlichere Website mit Hunderten von Dateien möchten oder schwere Video-/Audiodateien direkt von Ihrem Webserver aus liefern möchten. Es könnte dasselbe wie der Zugang mit niedriger Bandbreite kosten, bis zu mehreren Hundert Dollar pro Monat für professionellere Bedürfnisse.

## Hosting

### Verständnis von Bandbreite

Hosting-Anbieter berechnen Ihnen Gebühren basierend auf der Menge an {{Glossary("Bandwidth", "Bandbreite")}}, die Ihre Website verbraucht. Dies hängt davon ab, wie viele Menschen und Web-Crawling-Roboter Ihre Inhalte in einem bestimmten Zeitraum aufrufen und wie viel Serverplatz Ihre Inhalte einnehmen. Aus diesem Grund speichern Menschen ihre Videos normalerweise auf speziellen Diensten wie YouTube, Dailymotion und Vimeo. Zum Beispiel könnte Ihr Anbieter einen Plan haben, der mehrere tausend Besucher pro Tag für "angemessene" Bandbreitennutzung umfasst. Seien Sie jedoch vorsichtig, da dies von einem Hosting-Anbieter zum anderen unterschiedlich definiert ist. Denken Sie daran, dass zuverlässiges, kostenpflichtiges, persönliches Hosting etwa zehn bis fünfzehn Dollar pro Monat kosten kann.

> [!NOTE]
> Es gibt kein "unbegrenztes" Bandbreite. Wenn Sie eine enorme Menge an Bandbreite verbrauchen, erwarten Sie, dass Sie eine enorme Menge an Geld zahlen.

### Domainnamen

Ihr Domainname muss über einen Domainnamen-Anbieter (einen Registrar) gekauft werden. Ihr Hosting-Anbieter kann auch ein Registrar sein ([Ionos](https://www.ionos.com/), [Gandi](https://www.gandi.net/en-US) sind zum Beispiel sowohl Registare als auch Hosting-Anbieter). Der Domainname kostet normalerweise 5-15 Dollar pro Jahr. Diese Kosten variieren je nach:

- Lokalen Verpflichtungen: einige landesspezifische Top-Level-Domainnamen sind teurer, da verschiedene Länder unterschiedliche Preise festlegen.
- Dienstleistungen, die mit dem Domainnamen verbunden sind: einige Registrare bieten Spam-Schutz durch Verbergen Ihrer Post- und E-Mail-Adresse hinter ihren eigenen Adressen: die Postadresse kann "c/o" des Registrars bereitgestellt werden, und Ihre E-Mail-Adresse kann durch ein Alias Ihres Registrars verschleiert werden.

### Selbstgemachtes Hosting vs. "Pakethosting"

Wenn Sie eine Website veröffentlichen möchten, könnten Sie alles selbst erledigen: eine Datenbank einrichten (falls erforderlich), Content-Management-System oder {{Glossary("CMS", "CMS")}} (wie [Wordpress](https://wordpress.org/), [Dotclear](https://dotclear.org/), [spip](https://www.spip.net/en_rubrique25.html) usw.), vorgefertigte oder eigene Vorlagen hochladen.

Sie könnten die Umgebung Ihres Hosting-Anbieters für etwa zehn bis fünfzehn Dollar im Monat nutzen oder direkt zu einem dedizierten Hosting-Service mit vorgefertigten CMSs abonnieren (z. B. [Wordpress](https://wordpress.com/), [Tumblr](https://www.tumblr.com/), [Blogger](https://www.blogger.com/)). Für letzteres müssen Sie nichts bezahlen, aber Sie haben möglicherweise weniger Kontrolle über Vorlagen und andere Optionen.

### Kostenloses Hosting vs. kostenpflichtiges Hosting

Sie könnten sich fragen, warum sollte ich für mein Hosting zahlen, wenn es so viele kostenlose Dienste gibt?

- Sie haben mehr Freiheit, wenn Sie bezahlen. Ihre Website gehört Ihnen, und Sie können nahtlos von einem Hosting-Anbieter zum nächsten migrieren.
- Kostenlose Hosting-Anbieter können Ihrer Inhalte Werbung hinzufügen, ohne dass Sie darauf Einfluss haben.

Es ist besser, kostenpflichtiges Hosting zu wählen, anstatt sich auf kostenloses Hosting zu verlassen, da es möglich ist, Ihre Dateien leicht zu verschieben, und die Betriebszeit wird von den meisten kostenpflichtigen Anbietern garantiert. Die meisten Hosting-Anbieter gewähren Ihnen einen großen Rabatt zu Beginn.

Einige Leute entscheiden sich für einen gemischten Ansatz. Zum Beispiel ihr Hauptblog auf einem kostenpflichtigen Host mit einem vollständigen Domainnamen und spontanen, weniger strategischen Inhalten auf einem kostenlosen Host-Service.

## Professionelle Website-Agenturen und Hosting

Wenn Sie eine professionelle Website wünschen, werden Sie wahrscheinlich eine Web-Agentur damit beauftragen.

Hier hängen die Kosten von mehreren Faktoren ab, wie zum Beispiel:

- Ist dies eine einfache Website mit ein paar Textseiten? Oder eine komplexere Website mit Tausenden von Seiten?
- Möchten Sie diese regelmäßig aktualisieren? Oder wird es eine statische Website?
- Muss die Website mit der IT-Struktur Ihres Unternehmens verbunden werden, um Inhalte zu sammeln (z. B. interne Daten)?
- Möchten Sie eine schicke neue Funktion, die gerade im Trend ist? Zum Zeitpunkt des Schreibens suchen Kunden nach einzelnen Seiten mit komplexem Parallax-Design.
- Benötigen Sie die Agentur, um Nutzerstories zu entwickeln oder komplexe {{Glossary("UX", "UX")}}-Probleme zu lösen? Zum Beispiel eine Strategie zur Benutzerbindung zu entwickeln oder A/B-Tests durchzuführen, um eine Lösung unter mehreren Ideen auszuwählen.

Und für das Hosting müssen Sie folgende Entscheidungen berücksichtigen:

- Möchten Sie redundante Server, falls Ihr Server ausfällt?
- Ist eine Zuverlässigkeit von 95 % ausreichend, oder benötigen Sie einen professionellen, rund um die Uhr-Service?
- Möchten Sie hochrangige, ultraschnelle dedizierte Server, oder können Sie mit einer langsameren, geteilten Maschine auskommen?

Abhängig davon, wie Sie diese Fragen beantworten, kann Ihre Website tausende bis hunderttausende Dollar kosten.

## Nächste Schritte

Nachdem Sie nun verstehen, welches Budget Ihre Website möglicherweise erfordert, ist es an der Zeit, mit der Gestaltung der Website zu beginnen und [Ihre Arbeitsumgebung einrichten](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server).

- Lesen Sie weiter über [wie Sie einen Texteditor auswählen und installieren](/de/docs/Learn/Common_questions/Tools_and_setup/Available_text_editors).
- Wenn Sie sich mehr für Design interessieren, schauen Sie sich die [Anatomie einer Webseite](/de/docs/Learn/Common_questions/Design_and_accessibility/Common_web_layouts) an.
