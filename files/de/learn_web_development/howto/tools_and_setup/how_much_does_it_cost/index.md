---
title: Wie viel kostet es, etwas im Web zu tun?
slug: Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

Sich im Web zu engagieren ist nicht so günstig, wie es scheint. In diesem Artikel besprechen wir, wie viel Sie eventuell ausgeben müssen und warum.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten bereits verstehen,
        <a href="/de/docs/Learn_web_development/Howto/Tools_and_setup/What_software_do_I_need">welche Software Sie benötigen</a>, den Unterschied zwischen
        <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web">einer Webseite, einer Website usw.</a> und was
        <a href="/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name">ein Domainname ist</a>.
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

Beim Starten einer Website können Sie nichts ausgeben oder Ihre Kosten können explodieren. In diesem Artikel besprechen wir, wie viel alles kostet, und wie Sie bekommen, wofür Sie bezahlen (oder nicht bezahlen).

## Software

### Texteditoren

Sie haben wahrscheinlich einen Texteditor: zum Beispiel Notepad auf Windows, Gedit auf Linux, TextEdit auf Mac. Sie werden es einfacher haben, Code zu schreiben, wenn Sie einen Editor wählen, der farbcodiert, Ihre Syntax überprüft und Ihnen bei der Code-Struktur hilft.

Viele Editoren sind kostenlos, zum Beispiel [NotePad++](https://notepad-plus-plus.org/), [Brackets](https://brackets.io/), [Bluefish](https://bluefish.openoffice.nl/index.html), [TextWrangler](https://www.barebones.com/products/textwrangler/), [Eclipse](https://www.eclipse.org/), [NetBeans](https://netbeans.apache.org/) und [Visual Studio Code](https://code.visualstudio.com/). Einige, wie [Sublime Text](https://www.sublimetext.com/), können Sie so lange testen, wie Sie möchten, aber Sie werden aufgefordert, zu zahlen. Einige, wie [PhpStorm](https://www.jetbrains.com/phpstorm/), können je nach Plan, den Sie kaufen, zwischen ein paar Dutzend und 200 Dollar kosten. Einige von ihnen, wie [Microsoft Visual Studio](https://visualstudio.microsoft.com/), können Hunderte oder Tausende von Dollar kosten; allerdings ist Visual Studio Community für individuelle Entwickler oder Open-Source-Projekte kostenlos. Häufig bieten bezahlte Editoren eine Testversion an.

Zu Beginn empfehlen wir, mehrere Editoren auszuprobieren, um ein Gefühl dafür zu bekommen, welcher am besten für Sie geeignet ist. Wenn Sie nur einfachen {{Glossary("HTML", "HTML")}}, {{Glossary("CSS", "CSS")}} und {{Glossary("JavaScript", "JavaScript")}} schreiben, wählen Sie einen einfachen Editor.

Der Preis spiegelt nicht zuverlässig die Qualität oder Nützlichkeit eines Texteditors wider. Sie müssen es selbst ausprobieren und entscheiden, ob es Ihren Anforderungen entspricht. Zum Beispiel ist Sublime Text günstig, kommt jedoch mit vielen kostenlosen Plugins, die seine Funktionalität erheblich erweitern können.

### Bildeditoren

Ihr System enthält wahrscheinlich einen Bildeditor oder -betrachter: Paint auf Windows, Eye of GNOME auf Ubuntu, Preview auf Mac. Diese Programme sind relativ begrenzt, sodass Sie bald einen leistungsfähigeren Editor benötigen, um Ebenen, Effekte und Gruppierungen hinzuzufügen.

Editoren können kostenlos ([GIMP](https://www.gimp.org/), [Paint.NET](https://paint.net/)), moderat teuer ([PaintShop Pro](https://www.paintshoppro.com/), weniger als 100 $) oder mehrere hundert Dollar kosten ([Adobe Photoshop](https://www.adobe.com/products/photoshop.html)).

Sie können jeden dieser Editoren verwenden, da sie ähnliche Funktionen haben, obwohl einige so umfassend sind, dass Sie niemals jede Funktion nutzen werden. Wenn Sie irgendwann Projekte mit anderen Designern austauschen müssen, sollten Sie herausfinden, welche Tools sie verwenden. Alle Editoren können fertige Projekte in Standarddateiformate exportieren, aber jeder Editor speichert laufende Projekte in seinem eigenen spezialisierten Format. Die meisten Bilder im Internet sind urheberrechtlich geschützt, daher ist es besser, die Lizenz der Datei zu überprüfen, bevor Sie sie verwenden. Websites wie [Pixabay](https://pixabay.com/) bieten Bilder unter der CC0-Lizenz an, sodass Sie sie verwenden, bearbeiten und sogar mit Änderungen für kommerzielle Zwecke veröffentlichen können.

### Medieneditoren

Wenn Sie Videos oder Audiodateien in Ihre Website einbinden möchten, können Sie entweder Online-Dienste einbetten (zum Beispiel YouTube, Vimeo oder Dailymotion) oder Ihre eigenen Videos einfügen (siehe unten zu Bandbreitenkosten).

Für Audiodateien können Sie kostenlose Software finden ([Audacity](https://www.audacityteam.org/), [Wavosaur](https://www.wavosaur.com/)), oder bis zu einigen hundert Dollar zahlen ([Sound Forge](https://www.vegascreativesoftware.com/sound-forge/), [Adobe Audition](https://www.adobe.com/products/audition.html)). Ebenso kann Videoschnittsoftware kostenlos sein ([PiTiVi](https://www.pitivi.org/), [OpenShot](https://www.openshot.org/) für Linux, [iMovie](https://support.apple.com/imovie) für Mac), weniger als 100 $ ([Adobe Premiere Elements](https://www.adobe.com/products/premiere-elements.html)), oder mehrere hundert Dollar ([Adobe Premiere Pro](https://www.adobe.com/products/premiere.html), [Avid Media Composer](https://www.avid.com/media-composer), [Final Cut Pro](https://www.apple.com/final-cut-pro/)). Die Software, die Sie mit Ihrer Digitalkamera erhalten haben, kann alle Ihre Bedürfnisse abdecken.

### Veröffentlichungstools

Sie benötigen auch eine Möglichkeit, Dateien hochzuladen: von Ihrer Festplatte zu einem entfernten Webserver. Dazu sollten Sie ein Veröffentlichungstool wie einen {{Glossary("FTP", "(S)FTP-Client")}}, [RSync](https://en.wikipedia.org/wiki/Rsync) oder [Git/GitHub](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) verwenden.

Jedes Betriebssystem enthält einen (S)FTP-Client als Teil seines Dateimanagers. Windows Explorer, Nautilus (ein verbreiteter Linux-Dateimanager) und der Mac Finder beinhalten diese Funktionalität. Viele Menschen entscheiden sich jedoch für dedizierte (S)FTP-Clients, um lokale und entfernte Verzeichnisse nebeneinander anzuzeigen und Serverpasswörter zu speichern.

Wenn Sie einen (S)FTP-Client installieren möchten, gibt es mehrere zuverlässige und kostenlose Optionen: zum Beispiel [FileZilla](https://filezilla-project.org/) für alle Plattformen, [WinSCP](https://winscp.net/eng/index.php) für Windows, [Cyberduck](https://cyberduck.io/) für Mac oder Windows.

Da FTP von Natur aus unsicher ist, sollten Sie sicherstellen, dass Sie SFTP verwenden – die sichere, verschlüsselte Version von FTP, die heutzutage von den meisten Hosting-Seiten, mit denen Sie zu tun haben werden, standardmäßig angeboten wird – oder eine andere sichere Lösung wie Rsync über SSH.

## Browser

Sie haben entweder bereits einen Browser oder können einen kostenlos erhalten. Falls erforderlich, laden Sie [Firefox](https://www.firefox.com/en-US/download/all/) oder [Google Chrome](https://www.google.com/chrome/) herunter.

## Webzugang

### Computer/Modem

Sie benötigen einen Computer. Die Kosten können sehr stark variieren, abhängig von Ihrem Budget und Ihrem Wohnort. Um eine einfache Website zu veröffentlichen, benötigen Sie nur einen einfachen Computer, der in der Lage ist, einen Editor und einen Webbrowser zu starten, sodass die Einstiegshürde ziemlich niedrig sein kann.

Natürlich benötigen Sie einen leistungsfähigeren Computer, wenn Sie komplexe Designs erstellen, Fotos retuschieren oder Audio- und Videodateien produzieren möchten.

Sie müssen Inhalte auf einen entfernten Server hochladen (siehe _Hosting_ unten), daher benötigen Sie ein Modem. Ihr {{Glossary("ISP", "ISP")}} kann Ihnen eine Internetverbindung für ein paar Dollar pro Monat vermieten, allerdings variiert Ihr Budget je nach Standort.

### ISP-Zugang

Stellen Sie sicher, dass Sie über ausreichende {{Glossary("Bandwidth", "Bandbreite")}} verfügen:

- Ein Zugang mit niedriger Bandbreite kann ausreichen, um eine "einfache" Website zu unterstützen: vernünftig große Bilder, Texte, etwas CSS und JavaScript. Das wird Ihnen wahrscheinlich ein paar Dutzend Dollar kosten, einschließlich der Miete für das Modem.
- Andererseits benötigen Sie eine Verbindung mit hoher Bandbreite, wie DSL, Kabel oder Glasfaserzugang, wenn Sie eine fortgeschrittenere Website mit Hunderten von Dateien möchten oder wenn Sie große Video-/Audiodateien direkt von Ihrem Webserver aus liefern möchten. Das könnte genauso viel kosten wie der Zugang mit niedriger Bandbreite, jedoch bis zu mehreren hundert Dollar pro Monat für professionellere Anforderungen.

## Hosting

### Bandbreite verstehen

Hosting-Provider berechnen Ihnen, je nachdem wie viel {{Glossary("Bandwidth", "Bandbreite")}} Ihre Website verbraucht. Dies hängt davon ab, wie viele Personen und Web-Crawler-Roboter Ihre Inhalte in einer bestimmten Zeit aufrufen und wie viel Serverspeicherplatz Ihre Inhalte belegen. Aus diesem Grund speichern die meisten Leute ihre Videos auf speziellen Diensten wie YouTube, Dailymotion und Vimeo. Zum Beispiel kann Ihr Anbieter einen Plan anbieten, der bis zu mehreren tausend Besuchern pro Tag "vernünftige" Bandbreitennutzung inkludiert. Seien Sie jedoch vorsichtig, da dies von einem Hosting-Provider zum anderen unterschiedlich definiert wird. Denken Sie daran, dass zuverlässiges, bezahltes, persönliches Hosting etwa zehn bis fünfzehn Dollar pro Monat kosten kann.

> [!NOTE]
> Es gibt keine "unbegrenzte" Bandbreite. Wenn Sie eine riesige Menge an Bandbreite verbrauchen, erwarten Sie hohe Kosten.

### Domainnamen

Ihr Domainname muss über einen Domainnamen-Anbieter (einen Registrar) gekauft werden. Ihr Hosting-Provider kann auch ein Registrar sein ([Ionos](https://www.ionos.com/), [Gandi](https://www.gandi.net/en-US) sind beispielsweise gleichzeitig Registrare und Hosting-Provider). Der Domainname kostet normalerweise zwischen 5 und 15 Dollar pro Jahr. Diese Kosten variieren je nach:

- Lokale Verpflichtungen: Einige Landes-Top-Level-Domainnamen sind teurer, da verschiedene Länder unterschiedliche Preise festlegen.
- Mit dem Domainnamen verbundene Dienste: Einige Registrare bieten Spam-Schutz, indem sie Ihre Postadresse und E-Mail-Adresse hinter ihren eigenen Adressen verbergen: Die Postadresse kann im Namen des Registrars bereitgestellt werden, und Ihre E-Mail-Adresse kann über das Alias Ihres Registrars verdeckt werden.

### Eigenes Hosting vs. "Pakethosting"

Wenn Sie eine Website veröffentlichen möchten, könnten Sie alles selbst machen: eine Datenbank einrichten (falls erforderlich), ein Content Management System oder {{Glossary("CMS", "CMS")}} (wie [WordPress](https://wordpress.org/), [Dotclear](https://dotclear.org/), [spip](https://www.spip.net/en_rubrique25.html) usw.) einrichten, vorgefertigte oder eigene Vorlagen hochladen.

Sie könnten die Umgebung Ihres Hosting-Providers für etwa zehn bis fünfzehn Dollar pro Monat nutzen oder sich direkt für einen dedizierten Hosting-Service mit vorkonfektionierten CMSs anmelden (z. B. [WordPress](https://wordpress.com/), [Tumblr](https://www.tumblr.com/), [Blogger](https://www.blogger.com/)). Bei letzterem müssen Sie nichts bezahlen, haben jedoch möglicherweise weniger Kontrolle über Templating und andere Optionen.

### Kostenloses Hosting vs. bezahltes Hosting

Sie könnten fragen, warum sollte ich für mein Hosting bezahlen, wenn es so viele kostenlose Dienste gibt?

- Sie haben mehr Freiheit, wenn Sie zahlen. Ihre Website gehört Ihnen und Sie können nahtlos von einem Hosting-Provider zum nächsten wechseln.
- Kostenlose Hosting-Provider können Werbung zu Ihren Inhalten hinzufügen, die außerhalb Ihrer Kontrolle liegt.

Es ist besser, sich für bezahltes Hosting zu entscheiden, anstatt sich auf kostenloses Hosting zu verlassen, da es möglich ist, Ihre Dateien einfach zu verschieben und die Betriebszeit von den meisten bezahlten Seiten gewährleistet wird. Die meisten Hosting-Provider bieten Ihnen einen großen Rabatt zum Einstieg an.

Einige Leute entscheiden sich für einen gemischten Ansatz. Zum Beispiel ihr Hauptblog auf einem bezahlten Host mit vollem Domainnamen und spontane, weniger strategische Inhalte auf einem kostenlosen Host-Service.

## Professionelle Website-Agenturen und Hosting

Wenn Sie eine professionelle Website wünschen, werden Sie wahrscheinlich eine Webagentur beauftragen, dies für Sie zu tun.

Hier hängen die Kosten von mehreren Faktoren ab, wie:

- Ist dies eine einfache Website mit wenigen Textseiten? Oder eine komplexere, tausendseitige Website?
- Möchten Sie sie regelmäßig aktualisieren? Oder wird es eine statische Website sein?
- Muss die Website mit der IT-Struktur Ihres Unternehmens verbunden sein, um Inhalte zu sammeln (etwa interne Daten)?
- Möchten Sie einige glänzende, neue Funktionen, die momentan beliebt sind? Zum Zeitpunkt des Schreibens suchen Kunden nach einzelnen Seiten mit komplexem Parallaxen-Effekt.
- Möchten Sie die Agentur Benutzerstories entwickeln oder komplexe {{Glossary("UX", "UX")}}-Probleme lösen lassen? Zum Beispiel eine Strategie zur Benutzerbindung entwickeln oder A/B-Tests durchführen, um eine Lösung unter mehreren Ideen auszuwählen.

Und für das Hosting müssen Sie folgende Entscheidungen treffen:

- Möchten Sie redundante Server, falls Ihr Hauptserver ausfällt?
- Ist eine Verlässlichkeit von 95 % ausreichend, oder benötigen Sie einen professionellen, rund um die Uhr verfügbaren Service?
- Möchten Sie hochprofilige, ultra-reaktionsfähige dedizierte Server oder reicht Ihnen eine langsamere, gemeinsam genutzte Maschine aus?

Je nachdem, wie Sie diese Fragen beantworten, können Ihre Website-Kosten von Tausenden bis zu Hunderttausenden von Dollar reichen.

## Nächste Schritte

Nun, da Sie verstehen, wie viel Geld Ihre Website Sie kosten könnte, ist es an der Zeit, mit der Gestaltung dieser Website zu beginnen und [Ihre Arbeitsumgebung einzurichten](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server).

- Informieren Sie sich weiter darüber, [wie man einen Texteditor auswählt und installiert](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors).
- Wenn Sie sich mehr auf Design konzentrieren, werfen Sie einen Blick auf die [Anatomie einer Webseite](/de/docs/Learn_web_development/Howto/Design_and_accessibility/Common_web_layouts).
