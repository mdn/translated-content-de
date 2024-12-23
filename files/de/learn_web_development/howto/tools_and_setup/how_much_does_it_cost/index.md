---
title: Wie viel kostet es, etwas im Internet zu tun?
slug: Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost
l10n:
  sourceCommit: 1eae3d383ad47b5e21bf25764d1d35487ea52bb8
---

{{QuicklinksWithSubPages("/de/docs/Learn_web_development/Howto")}}

Sich im Internet zu engagieren, ist nicht so günstig, wie es scheint. In diesem Artikel besprechen wir, wie viel Sie möglicherweise ausgeben müssen, und warum.

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
        >, und was
        <a href="/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name"
          >ein Domain-Name ist</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Überprüfen Sie den kompletten Prozess zur Erstellung einer Website und finden Sie heraus, wie viel jeder Schritt kosten kann.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Wenn Sie eine Website starten, können die Kosten minimal sein oder förmlich durch die Decke gehen. In diesem Artikel diskutieren wir, wie viel alles kostet und wie Sie das bekommen, was Sie bezahlen (oder nicht bezahlen).

## Software

### Texteditoren

Sie haben wahrscheinlich bereits einen Texteditor: zum Beispiel Notepad auf Windows, Gedit auf Linux, TextEdit auf Mac. Sie können den Code leichter schreiben, wenn Sie einen Editor wählen, der farbliche Markierungen, Syntaxüberprüfung und Unterstützung bei der Code-Struktur bietet.

Viele Editoren sind kostenlos, zum Beispiel [Brackets](https://brackets.io/), [Bluefish](https://bluefish.openoffice.nl/index.html), [TextWrangler](https://www.barebones.com/products/textwrangler/), [Eclipse](https://www.eclipse.org/), [NetBeans](https://netbeans.apache.org/) und [Visual Studio Code](https://code.visualstudio.com/). Einige, wie [Sublime Text](https://www.sublimetext.com/), können Sie so lange testen, wie Sie möchten, aber es wird empfohlen, zu bezahlen. Einige, wie [PhpStorm](https://www.jetbrains.com/phpstorm/), können je nach dem erworbenen Plan zwischen einigen Dutzend und 200 Dollar kosten. Einige, wie [Microsoft Visual Studio](https://visualstudio.microsoft.com/), können Hunderte oder Tausende von Dollar kosten; allerdings ist Visual Studio Community kostenlos für einzelne Entwickler oder Open-Source-Projekte. Oft haben kostenpflichtige Editoren eine Testversion.

Um anzufangen, empfehlen wir, mehrere Editoren auszuprobieren, um ein Gefühl dafür zu bekommen, welcher am besten zu Ihnen passt. Wenn Sie nur einfachen {{Glossary("HTML", "HTML")}}, {{Glossary("CSS", "CSS")}} und {{Glossary("JavaScript", "JavaScript")}} schreiben, nutzen Sie einen einfachen Editor.

Der Preis sagt nicht zuverlässig etwas über die Qualität oder Nützlichkeit eines Texteditors aus. Sie müssen es selbst ausprobieren und entscheiden, ob es Ihren Bedürfnissen entspricht. Beispielsweise ist Sublime Text kostengünstig, wird aber mit vielen kostenlosen Plugins geliefert, die seine Funktionalität erheblich erweitern können.

### Bildbearbeitungsprogramme

Auf Ihrem System befindet sich wahrscheinlich ein Bildbearbeitungsprogramm oder -betrachter: Paint auf Windows, Eye of GNOME auf Ubuntu, Vorschau auf Mac. Diese Programme sind relativ begrenzt, bald werden Sie einen robusteren Editor benötigen, um Ebenen, Effekte und Gruppierungen hinzuzufügen.

Editoren können kostenlos sein ([GIMP](https://www.gimp.org/), [Paint.NET](https://www.getpaint.net/)), mäßig teuer ([PaintShop Pro](https://www.paintshoppro.com/), weniger als 100 $) oder mehrere Hundert Dollar ([Adobe Photoshop](https://www.adobe.com/products/photoshop.html)) kosten.

Sie können jeden von ihnen verwenden, da sie ähnliche Funktionen bieten, obwohl einige so umfassend sind, dass Sie nie alle Funktionen nutzen werden. Wenn Sie irgendwann Projekte mit anderen Designern austauschen müssen, sollten Sie herausfinden, welche Werkzeuge sie verwenden. Editoren können alle fertigen Projekte in standardmäßige Dateiformate exportieren, aber jeder Editor speichert laufende Projekte in seinem eigenen spezialisierten Format. Die meisten Bilder im Internet sind urheberrechtlich geschützt, daher ist es besser, die Lizenz der Datei zu überprüfen, bevor Sie sie verwenden. Websites wie [Pixabay](https://pixabay.com/) bieten Bilder unter der CC0-Lizenz an, sodass Sie sie auch mit Modifikationen für kommerzielle Zwecke verwenden, bearbeiten und veröffentlichen können.

### Medienbearbeiter

Wenn Sie Video oder Audio in Ihre Website einbinden möchten, können Sie entweder Online-Dienste einbetten (zum Beispiel YouTube, Vimeo oder Dailymotion) oder Ihre eigenen Videos einfügen (siehe unten für Bandbreitenkosten).

Für Audiodateien finden Sie kostenlose Software ([Audacity](https://www.audacityteam.org/), [Wavosaur](https://www.wavosaur.com/)) oder können bis zu ein paar Hundert Dollar zahlen ([Sound Forge](https://www.magix.com/us/music-editing/sound-forge/), [Adobe Audition](https://www.adobe.com/products/audition.html)). Ebenso kann Videobearbeitungssoftware kostenlos sein ([PiTiVi](https://www.pitivi.org/), [OpenShot](https://www.openshot.org/) für Linux, [iMovie](https://support.apple.com/imovie) für Mac), weniger als 100 $ kosten ([Adobe Premiere Elements](https://www.adobe.com/products/premiere-elements.html)), oder mehrere Hundert Dollar ([Adobe Premiere Pro](https://www.adobe.com/products/premiere.html), [Avid Media Composer](https://www.avid.com/media-composer), [Final Cut Pro](https://www.apple.com/final-cut-pro/)). Die Software, die Sie mit Ihrer Digitalkamera erhalten haben, könnte all Ihre Bedürfnisse abdecken.

### Veröffentlichungstools

Sie benötigen auch eine Möglichkeit, Dateien von Ihrer Festplatte auf einen entfernten Webserver zu laden. Dafür sollten Sie ein Veröffentlichungstool wie einen {{Glossary("FTP", "(S)FTP-Client")}}, [RSync](https://en.wikipedia.org/wiki/Rsync) oder [Git/GitHub](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) verwenden.

Jedes Betriebssystem enthält einen (S)FTP-Client als Teil seines Dateimanagers. Der Windows Explorer, Nautilus (ein gängiger Linux-Dateimanager) und der Mac Finder bieten alle diese Funktionalität. Dennoch entscheiden sich viele Nutzer oft für spezielle (S)FTP-Clients, um lokale oder entfernte Verzeichnisse nebeneinander anzuzeigen und Serverpasswörter zu speichern.

Wenn Sie einen (S)FTP-Client installieren möchten, gibt es mehrere zuverlässige und kostenlose Optionen: zum Beispiel [FileZilla](https://filezilla-project.org/) für alle Plattformen, [WinSCP](https://winscp.net/eng/index.php) für Windows, [Cyberduck](https://cyberduck.io/) für Mac oder Windows, [und mehr](https://en.wikipedia.org/wiki/List_of_FTP_server_software).

Da FTP von Natur aus unsicher ist, sollten Sie sicherstellen, SFTP - die sichere, verschlüsselte Version von FTP zu verwenden, die die meisten Hosting-Sites, mit denen Sie heutzutage zu tun haben, standardmäßig anbieten -, oder eine andere sichere Lösung wie Rsync über SSH.

## Browser

Sie haben bereits einen Browser oder können einen kostenlos erhalten. Falls erforderlich, laden Sie Firefox [hier](https://www.mozilla.org/en-US/firefox/all/) oder Google Chrome [hier](https://www.google.com/chrome/) herunter.

## Internetzugang

### Computer / Modem

Sie benötigen einen Computer. Die Kosten können stark variieren, je nach Ihrem Budget und Ihrem Wohnort. Um eine einfache Website zu veröffentlichen, brauchen Sie nur einen grundlegenden Computer, der in der Lage ist, einen Editor zu starten und einen Webbrowser auszuführen, sodass das Einstiegsniveau ziemlich niedrig sein kann.

Natürlich benötigen Sie einen leistungsfähigeren Computer, wenn Sie komplizierte Designs erstellen, Fotos bearbeiten oder Audio- und Videodateien produzieren möchten.

Um Inhalte auf einen entfernten Server hochzuladen (siehe unten _Hosting_), benötigen Sie ein Modem. Ihr {{Glossary("ISP", "ISP")}} kann Ihnen dafür ein monatliches Internetabonnement für ein paar Dollar anbieten, obwohl Ihr Budget je nach Ihrem Standort variieren kann.

### Zugang zum ISP

Stellen Sie sicher, dass Sie über ausreichende {{Glossary("Bandwidth", "Bandbreite")}} verfügen:

- Ein Zugang mit geringer Bandbreite kann ausreichen, um eine „einfache“ Website zu unterstützen: angemessen große Bilder, Texte, etwas CSS und JavaScript. Das wird Ihnen wahrscheinlich ein paar Dutzend Dollar kosten, einschließlich der Miete für das Modem.
- Andererseits benötigen Sie eine Verbindung mit hoher Bandbreite, wie DSL, Kabel oder Glasfaserzugang, wenn Sie eine fortgeschrittenere Website mit Hunderten von Dateien haben möchten oder wenn Sie schwere Video-/Audiodateien direkt von Ihrem Webserver ausliefern möchten. Das könnte so viel kosten wie ein Zugang mit geringer Bandbreite, bis hin zu mehreren Hundert Dollar pro Monat für professionellere Bedürfnisse.

## Hosting

### Bandbreite verstehen

Hosting-Anbieter berechnen Ihnen Gebühren gemäß der {{Glossary("Bandwidth", "Bandbreite")}}, die Ihre Website verbraucht. Dies hängt davon ab, wie viele Leute und Webcrawler-Roboter auf Ihre Inhalte in einem bestimmten Zeitraum zugreifen und wie viel Serverspeicher Ihre Inhalte belegen. Aus diesem Grund speichern Menschen normalerweise ihre Videos auf speziellen Diensten wie YouTube, Dailymotion und Vimeo. Zum Beispiel kann Ihr Anbieter einen Plan haben, der bis zu mehreren Tausend Besuchern pro Tag umfasst, bei „angemessenem“ Bandbreitenverbrauch. Seien Sie jedoch vorsichtig, da dies von einem Hosting-Anbieter zum anderen unterschiedlich definiert wird. Denken Sie daran, dass zuverlässiges, kostenpflichtiges, persönliches Hosting etwa zehn bis fünfzehn Dollar pro Monat kosten kann.

> [!NOTE]
> Es gibt so etwas wie „unbegrenzte“ Bandbreite nicht. Wenn Sie eine enorme Menge an Bandbreite verbrauchen, erwarten Sie, eine enorme Summe Geld zu zahlen.

### Domain-Namen

Ihr Domain-Name muss über einen Domain-Namen-Anbieter (einen Registrar) erworben werden. Ihr Hosting-Anbieter kann auch ein Registrar sein ([Ionos](https://www.ionos.com/) und [Gandi](https://www.gandi.net/en-US) sind beispielsweise sowohl Registrar als auch Hosting-Anbieter). Der Domain-Name kostet normalerweise 5 bis 15 $ pro Jahr. Diese Kosten variieren je nach:

- Lokale Verpflichtungen: Einige Länder-Top-Level-Domain-Namen sind teurer, da unterschiedliche Länder unterschiedliche Preise festlegen.
- Dienste, die mit dem Domain-Namen verbunden sind: Einige Registrare bieten Spamschutz, indem sie Ihre postalische Adresse und E-Mail-Adresse hinter ihren eigenen Adressen verbergen: Die Postadresse kann im Namen des Registrars angegeben werden, und Ihre E-Mail-Adresse kann über einen Alias des Registrars verschleiert werden.

### Eigenes Hosting vs. „Paket“-Hosting

Wenn Sie eine Website veröffentlichen möchten, könnten Sie alles selbst tun: eine Datenbank einrichten (falls erforderlich), ein Content-Management-System oder {{Glossary("CMS", "CMS")}} (wie [WordPress](https://wordpress.org/), [Dotclear](https://dotclear.org/), [spip](https://www.spip.net/en_rubrique25.html) usw.) einrichten, vorgefertigte oder eigene Vorlagen hochladen.

Sie könnten die Umgebung Ihres Hosting-Anbieters für etwa zehn bis fünfzehn Dollar im Monat nutzen oder direkt ein dediziertes Hosting mit vorinstallierten CMSs abonnieren (z. B. [WordPress](https://wordpress.com/), [Tumblr](https://www.tumblr.com/), [Blogger](https://www.blogger.com/)). Für Letzteres müssten Sie nichts bezahlen, aber Sie könnten weniger Kontrolle über Templating und andere Optionen haben.

### Kostenloses Hosting vs. bezahltes Hosting

Vielleicht fragen Sie sich, warum Sie für Ihr Hosting bezahlen sollten, wenn es so viele kostenlose Dienste gibt?

- Sie haben mehr Freiheit, wenn Sie bezahlen. Ihre Website gehört Ihnen und Sie können nahtlos von einem Hosting-Anbieter zum nächsten wechseln.
- Kostenlose Hosting-Anbieter können Werbung zu Ihrem Inhalt hinzufügen, was außerhalb Ihrer Kontrolle liegt.

Es ist besser, sich für bezahltes Hosting zu entscheiden, anstatt sich auf kostenloses Hosting zu verlassen, da es möglich ist, Ihre Dateien problemlos zu verschieben, und die meisten bezahlten Seiten garantieren die Verfügbarkeitszeit. Die meisten Hosting-Anbieter bieten Ihnen zu Beginn einen großen Rabatt.

Einige Menschen entscheiden sich für einen gemischten Ansatz. Zum Beispiel ihren Hauptblog auf einem bezahlten Host mit einem vollständigen Domainnamen und spontanen, weniger strategischen Inhalten auf einem kostenlosen Hosting-Service.

## Professionelle Website-Agenturen und Hosting

Wenn Sie eine professionelle Website wünschen, werden Sie wahrscheinlich eine Webagentur fragen, dies für Sie zu tun.

Hier hängen die Kosten von mehreren Faktoren ab, wie zum Beispiel:

- Ist dies eine einfache Website mit einigen Seiten Text? Oder eine komplexere, tausendseitige Website?
- Möchten Sie diese regelmäßig aktualisieren? Oder wird es eine statische Website sein?
- Muss die Website mit Ihrer IT-Struktur des Unternehmens verbunden sein, um Inhalte zu sammeln (zum Beispiel interne Daten)?
- Möchten Sie eine glänzende neue Funktion, die derzeit beliebt ist? Zum Zeitpunkt des Schreibens suchen Kunden nach einzelnen Seiten mit komplexem Parallax.
- Benötigen Sie die Agentur, um Benutzerbedürfnisse zu ermitteln oder komplexe {{Glossary("UX", "UX")}}-Probleme zu lösen? Beispielsweise eine Strategie zur Bindung von Nutzern zu entwickeln oder A/B-Tests durchzuführen, um eine Lösung aus mehreren Ideen auszuwählen.

Und für das Hosting müssen Sie die folgenden Entscheidungen überlegen:

- Möchten Sie redundante Server, falls Ihr Server ausfällt?
- Ist eine Verlässlichkeit von 95% ausreichend, oder benötigen Sie professionellen, 24/7-Service?
- Wünschen Sie hochkarätige, ultraschnelle dedizierte Server, oder können Sie mit einer langsameren, gemeinsam genutzten Maschine zurechtkommen?

Abhängig von Ihren Antworten auf diese Fragen könnte Ihre Website Tausende bis Hunderttausende von Dollar kosten.

## Nächste Schritte

Jetzt, da Sie verstanden haben, welche Art von Kosten Ihre Website verursachen kann, ist es an der Zeit, mit dem Design Ihrer Website zu beginnen und [Ihre Arbeitsumgebung einzurichten](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server).

- Lesen Sie weiter, um zu erfahren, [wie Sie einen Texteditor auswählen und installieren](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors).
- Wenn Sie sich mehr auf Design konzentrieren, schauen Sie sich die [Anatomie einer Webseite](/de/docs/Learn_web_development/Howto/Design_and_accessibility/Common_web_layouts) an.
