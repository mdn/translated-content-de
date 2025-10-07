---
title: Veröffentlichung Ihrer Website
short-title: Publishing
slug: Learn_web_development/Getting_started/Your_first_website/Publishing_your_website
l10n:
  sourceCommit: 3cbd2b2b2eb0be9425949c20ca5d398645f7c0e9
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}

Sobald Sie den Code geschrieben und die Dateien organisiert haben, die Ihre Website ausmachen, müssen Sie alles online stellen, damit es von anderen gefunden werden kann. Dieser Artikel erklärt, wie Sie Ihre Beispiel-Website mit wenig Aufwand online bringen können.

> [!NOTE]
> Sie benötigen eine Beispiel-Website auf Ihrem lokalen Computer, um diesem Artikel folgen zu können. Sie sollte zumindest eine gültige `index.html`-Datei enthalten. Falls Sie dies noch nicht getan haben, empfehlen wir Ihnen, eine durch die Bearbeitung der vorherigen Artikel in diesem Modul zu erstellen, beginnend mit [Wie wird Ihre Website aussehen?](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse Ihres Computerbetriebssystems, der grundlegenden Software, die Sie zum Erstellen einer Website verwenden werden, und des Dateisystems.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die grundlegenden Werkzeuge und Konzepte, die mit der Veröffentlichung einer Website verbunden sind — Hosting, Domains, FTP-Programme.</li>
          <li>Welche alternativen Hosting-Optionen verfügbar sind, zum Beispiel Google App Engine, GitHub und CodePen.</li>
          <li>Veröffentlichen einer Website mit GitHub Pages.</li>
          <li>Hosting, wie es gekauft wird und wie Sie eine Website online stellen.</li>
          <li>Wie Sie eine Domain registrieren.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was sind die Optionen?

Die Veröffentlichung einer Website ist ein komplexes Thema, da es viele Wege gibt, dies zu tun. Dieser Artikel versucht nicht, alle möglichen Methoden zu dokumentieren. Stattdessen erklärt er die Vor- und Nachteile von drei Ansätzen, die für Einsteiger praktisch sind. Dann geht er einen Ansatz durch, der sofort für viele Leser funktionieren kann.

### Hosting und einen Domainnamen erwerben

Um mehr Kontrolle über den Inhalt und das Erscheinungsbild der Website zu haben, wählen die meisten Fachleute/Unternehmen den Kauf von Webhosting und einem Domainnamen:

- Webhosting ist gemieteter Speicherplatz auf dem [Webserver](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server) eines Hosting-Unternehmens. Sie legen die Website-Dateien auf den Webserver. Der Webserver stellt den Website-Besuchern die Inhalte der Website bereit.
- Ein [Domainname](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) ist die eindeutige Webadresse, unter der man Ihre Website finden kann, wie `https://www.mozilla.org` oder `https://www.bbc.co.uk`. Sie können Ihren Domainnamen so viele Jahre mieten, wie Sie möchten, von einem **Domain-Registrar**.

Wenn Sie Ihr Webhosting _und_ Ihren Domainnamen vom selben Unternehmen beziehen, sind sie in der Regel automatisch so konfiguriert, dass sie miteinander funktionieren. Wenn Sie sie jedoch von unterschiedlichen Unternehmen beziehen oder Ihr Hosting zu einem anderen Unternehmen wechseln möchten, müssen Sie einen kleinen Setup-Aufwand betreiben, um den Domainnamen auf den richtigen Server zu verweisen. Dies geschieht in der Regel, indem Sie sich auf der Website Ihres Domain-Registrars anmelden und die [Nameserver](https://kinsta.com/blog/what-is-a-nameserver/) Ihrer Domain auf die von Ihrem Hosting-Anbieter bereitgestellten einstellen.

Unternehmen verwenden verschiedene Mechanismen, um Dateien auf ihre Webserver zu übertragen. Viele bieten mehr als eine Option an; typische Optionen sind:

- Eine Drag-and-Drop-Oberfläche (ein Beispiel hierzu sehen Sie weiter unten im Abschnitt [Veröffentlichung über GitHub](#veröffentlichung_über_github)).
- Ein {{Glossary("FTP", "File Transfer Protocol (FTP)")}}-Programm. FTP-Programme variieren stark, aber generell müssen Sie sich mit den von Ihrem Hosting-Unternehmen bereitgestellten Daten (typischerweise Benutzername, Passwort, Hostname) mit Ihrem Webserver verbinden. Dann zeigt das Programm Ihnen Ihre lokalen Dateien und die Dateien des Webservers in zwei Fenstern an und bietet eine Möglichkeit, Dateien hin und her zu übertragen.
- Das Halten des Quellcodes der Website in einem GitHub-Repository (siehe unten) und die Erteilung des Zugriffs an das Hosting-Unternehmen, damit es den Quellcode abrufen, bei Bedarf erstellen und veröffentlichen kann.
- Einige Unternehmen stellen [Befehlszeilenwerkzeuge](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) zur Verfügung, mit denen Sie Ihre Dateien übertragen können.

#### Tipps zur Auswahl von Hosting und Domains

- MDN bewirbt keine bestimmten kommerziellen Hosting-Unternehmen oder Domain-Registrare. Um Hosting-Unternehmen und Registrare zu finden, suchen Sie einfach nach "Webhosting" und "Domainnamen". Alle Registrare haben eine Funktion, mit der Sie überprüfen können, ob der gewünschte Domainname verfügbar ist.
- Ihr {{Glossary("ISP", "Internetdienstanbieter")}} zu Hause oder im Büro bietet möglicherweise ein begrenztes Hosting für eine kleine Website an. Der verfügbare Funktionsumfang wird begrenzt sein, aber es könnte perfekt für Ihre ersten Experimente sein.
- Es gibt auch kostenlose Dienste wie [Neocities](https://neocities.org/), [Google Sites](https://sites.google.com/) und [WordPress](https://wordpress.com/). Solche Dienste können in ihrem Umfang beschränkt sein, aber sie sind gut genug für erste Experimente.

### Verwendung eines Online-Tools wie GitHub oder Google App Engine

Einige Tools ermöglichen es Ihnen, Ihre Website online zu veröffentlichen:

- [GitHub](https://github.com/) ist eine "soziale Programmierungs"-Seite. Sie ermöglicht es Ihnen, Code-Repositories im [Git](https://git-scm.com/) **Versionskontrollsystem** zu speichern. Sie können dann an Codeprojekten zusammenarbeiten, und das System ist standardmäßig Open Source, was bedeutet, dass jeder auf der Welt Ihren GitHub-Code finden, verwenden, daraus lernen und ihn verbessern kann. GitHub hat eine sehr nützliche Funktion namens [GitHub Pages](https://pages.github.com/), mit der Sie Website-Code live im Web anzeigen können.
- [Google App Engine](https://cloud.google.com/appengine) ist eine leistungsstarke Plattform, die Ihnen ermöglicht, Anwendungen auf der Infrastruktur von Google zu erstellen und auszuführen — egal, ob Sie eine mehrstufige Webanwendung von Grund auf neu erstellen oder eine statische Website hosten möchten. Weitere Informationen finden Sie unter [Wie hostet man seine Website auf Google App Engine?](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_do_you_host_your_website_on_Google_App_Engine).

Diese Optionen sind im Allgemeinen kostenlos und bieten einen begrenzten Funktionsumfang.

### Verwendung einer webbasierten IDE wie CodePen

Es gibt eine Reihe von Web-Apps, die eine Website-Entwicklungsumgebung emulieren und es Ihnen ermöglichen, HTML, CSS und JavaScript zu schreiben, das dann gerendert und in einem Ausgabefenster angezeigt wird. Im Allgemeinen sind diese Tools einfach zu bedienen, ideal zum Lernen, gut zum Teilen von Code (zum Beispiel, wenn Sie eine Technik teilen oder Debug-Hilfe von Kollegen in einem anderen Büro anfordern möchten), und kostenlos (für grundlegende Funktionen). Sie hosten Ihre gerenderte Seite unter einer eindeutigen Webadresse. Allerdings sind die Funktionen begrenzt, und diese Apps bieten oft keinen Hosting-Platz für Assets (wie Bilder).

Versuchen Sie, mit einigen dieser Beispiele zu spielen, um herauszufinden, welches am besten für Sie funktioniert:

- [Scrimba](https://scrimba.com/new?via=mdn) <sup>[_MDN-Partner für Lernen_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
- [JSFiddle](https://jsfiddle.net/)
- [JSBin](https://jsbin.com/)
- [CodePen](https://codepen.io/)

## Veröffentlichung über GitHub

Schauen wir uns nun an, wie Sie Ihre Website über GitHub Pages veröffentlichen können.

1. Zuerst [melden Sie sich bei GitHub an](https://github.com/) und bestätigen Ihre E-Mail-Adresse.
2. Als Nächstes müssen Sie [ein Repository erstellen](https://github.com/new), um Dateien zu speichern. Auf dieser Seite:
   1. Geben Sie im Feld _Repository name_ _username_.github.io ein, wobei _username_ Ihr Benutzername ist. Zum Beispiel würde unser Freund Bob Smith _bobsmith.github.io_ eingeben.
   2. Klicken Sie auf die Schaltfläche _Create repository_ am unteren Rand der Seite.
3. Auf der nächsten Seite finden Sie den Link _uploading an existing file_ und klicken darauf. Dies sollte Sie zur Datei-Upload-Seite bringen.
4. An diesem Punkt sollten Sie in der Lage sein, Dateien von Ihrem lokalen Dateisystem per Drag-and-Drop auf die Webseite hochzuladen. Dazu:
   1. Öffnen Sie ein Datei-Explorer/Finder-Fenster auf Ihrem Computer.
   2. Stellen Sie sicher, dass Sie das Datei-Explorer- _und_ das Webbrowserfenster sehen können — positionieren Sie sie nebeneinander auf Ihrem Bildschirm.
   3. Navigieren Sie im Datei-Explorer-Fenster zu dem Ordner, der Ihre Beispiel-Website enthält.
      > [!NOTE]
      > Stellen Sie sicher, dass Ihr Ordner eine `index.html`-Datei enthält.
   4. Wählen Sie alle Dateien Ihrer Beispiel-Website aus (zum Beispiel mit der Tastenkombination <kbd>Strg</kbd> + <kbd>A</kbd>, oder <kbd>Cmd</kbd> + <kbd>A</kbd> auf macOS).
   5. Ziehen Sie die Dateien aus Ihrem Datei-Explorer über den Abschnitt "Drag files here to add them to your repository" der GitHub-Seite.
   6. Der Rand und der Text des Abschnitts ändern sich, um anzuzeigen, dass ein Abwurf möglich ist. Lassen Sie die Dateien an dieser Stelle fallen.
   7. Klicken Sie auf die Schaltfläche _Commit changes_ am unteren Rand der Seite.
5. Navigieren Sie Ihren Browser zu _username_.github.io, um Ihre Website online zu sehen. Beispielsweise würde bei dem Benutzernamen _chrisdavidmills_ auf [_chrisdavidmills_.github.io](https://chrisdavidmills.github.io/) navigiert.

   > [!NOTE]
   > Es kann ein paar Minuten dauern, bis Ihre Website live geht. Wenn Ihre Website nicht sofort angezeigt wird, warten Sie ein paar Minuten und versuchen Sie es erneut.

Um mehr zu erfahren, siehe [GitHub Pages Hilfe](https://docs.github.com/en/pages/getting-started-with-github-pages).

## Weiterführende Lektüre

- [Was ist ein Webserver](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server)
- [Verständnis von Domainnamen](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name)
- [Wie viel kostet es, etwas im Web zu tun?](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost)
- [Deploy a Website](https://www.codecademy.com/learn/deploy-a-website): Ein schönes Tutorial von Codecademy, das ein bisschen weiter geht und einige zusätzliche Techniken zeigt.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}
