---
title: Veröffentlichen Ihrer Website
slug: Learn_web_development/Getting_started/Your_first_website/Publishing_your_website
l10n:
  sourceCommit: 12c76ea107c3caacd28c39e33b9ab2dd879f0855
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}

Sobald Sie den Code Ihrer Website geschrieben und die Dateien organisiert haben, müssen Sie alles online stellen, damit Menschen es finden können. Dieser Artikel erklärt, wie Sie Ihre Beispiel-Website mit geringem Aufwand online stellen können.

> [!NOTE]
> Sie benötigen eine Beispiel-Website auf Ihrem lokalen Computer, um diesem Artikel folgen zu können. Sie sollte mindestens eine gültige `index.html`-Datei enthalten. Wenn Sie dies noch nicht getan haben, empfehlen wir Ihnen, eine zu erstellen, indem Sie die vorherigen Artikel in diesem Modul durcharbeiten, beginnend mit [Wie wird Ihre Website aussehen?](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computer-Betriebssystem, der grundlegenden Software, die Sie zum Erstellen einer Website verwenden, und den Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die grundlegenden Werkzeuge und Konzepte, die bei der Veröffentlichung einer Website involviert sind — Hosting, Domains, FTP-Programme.</li>
          <li>Welche alternativen Hosting-Optionen verfügbar sind, zum Beispiel Google App Engine, GitHub und CodePen.</li>
          <li>Veröffentlichen einer Website mit GitHub Pages.</li>
          <li>Hosting, wie man es kauft und wie man eine Website online stellt.</li>
          <li>Wie man eine Domain registriert.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Welche Optionen gibt es?

Eine Website zu veröffentlichen ist ein komplexes Thema, da es viele verschiedene Ansätze gibt. Dieser Artikel versucht nicht, alle möglichen Methoden zu dokumentieren. Stattdessen erklärt er die Vor- und Nachteile von drei Ansätzen, die für Anfänger praktisch sind. Danach wird eine Methode vorgestellt, die für viele Leser sofort funktionieren kann.

### Hosting und einen Domainnamen erhalten

Um mehr Kontrolle über den Inhalt und das Erscheinungsbild einer Website zu haben, entscheiden sich die meisten Fachleute und Unternehmen dafür, Webhosting und einen Domainnamen zu kaufen:

- Webhosting ist gemieteter Speicherplatz auf einem [Web-Server](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server) eines Hosting-Anbieters. Sie legen die Website-Dateien auf den Web-Server. Der Web-Server stellt die Website-Inhalte den Website-Besuchern zur Verfügung.
- Ein [Domainname](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) ist die einzigartige Webadresse, unter der Menschen Ihre Website finden, wie `https://www.mozilla.org` oder `https://www.bbc.co.uk`. Sie können Ihren Domainnamen für so viele Jahre mieten, wie Sie möchten, bei einem **Domain-Registrar**.

Wenn Sie Ihr Webhosting _und_ Ihren Domainnamen von derselben Firma erhalten, sind sie in der Regel automatisch so konfiguriert, dass sie miteinander kommunizieren. Wenn Sie sie jedoch von verschiedenen Firmen erhalten oder Ihr Hosting zu einer anderen Firma wechseln möchten, müssen Sie einige Einstellungen vornehmen, um den Domainnamen auf den korrekten Server zu verweisen. Dies geschieht normalerweise, indem Sie sich auf der Website Ihres Domain-Registrars einloggen und die [Nameserver](https://kinsta.com/knowledgebase/what-is-a-nameserver/) Ihres Domainnamens auf die von Ihrem Hosting-Anbieter angegebenen ändern.

Unternehmen verwenden verschiedene Mechanismen, um Dateien auf ihre Web-Server zu übertragen. Viele bieten mehr als eine Option an; typische Optionen umfassen:

- Eine Drag-and-Drop-Oberfläche (ein Beispiel hierfür sehen Sie später unter [Veröffentlichung über GitHub](#veröffentlichen_über_github)).
- Ein {{Glossary("FTP", "File Transfer Protocol (FTP)")}}-Programm. FTP-Programme variieren stark, aber im Allgemeinen müssen Sie eine Verbindung zu Ihrem Web-Server mit den von Ihrem Hosting-Unternehmen bereitgestellten Details herstellen (in der Regel Benutzername, Passwort, Hostname). Dann zeigt Ihnen das Programm Ihre lokalen Dateien und die Dateien des Web-Servers in zwei Fenstern an und bietet eine Möglichkeit, Dateien hin und her zu übertragen.
- Das Speichern des Website-Quellcodes in einem GitHub-Repository (siehe unten) und dem Hosting-Unternehmen Zugriff gewähren, damit es den Quellcode abrufen, bei Bedarf bauen und veröffentlichen kann.
- Einige Unternehmen bieten [Kommandozeilen-Werkzeuge](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) an, mit denen Sie Ihre Dateien übertragen können.

#### Tipps zur Suche nach Hosting und Domains

- MDN bewirbt keine spezifischen kommerziellen Hosting-Unternehmen oder Domain-Registrare. Um Hosting-Unternehmen und Registrare zu finden, suchen Sie einfach nach "Webhosting" und "Domainnamen". Alle Registrare bieten eine Funktion, um zu überprüfen, ob der gewünschte Domainname verfügbar ist.
- Ihr {{Glossary("ISP", "Internetdienstanbieter")}} zu Hause oder im Büro bietet möglicherweise eingeschränktes Hosting für eine kleine Website. Der verfügbare Funktionsumfang ist begrenzt, aber für Ihre ersten Experimente könnte es perfekt sein.
- Es gibt auch kostenlose Dienste wie [Neocities](https://neocities.org/), [Google Sites](https://sites.google.com/) und [WordPress](https://wordpress.com/). Solche Dienste können im Umfang begrenzt sein, sind aber gut genug für erste Experimente.

### Verwendung eines Online-Tools wie GitHub oder Google App Engine

Einige Tools ermöglichen es Ihnen, Ihre Website online zu veröffentlichen:

- [GitHub](https://github.com/) ist eine "soziale Codierungs"-Plattform. Sie ermöglicht es Ihnen, Code-Repositories im [Git](https://git-scm.com/) **Versionskontrollsystem** hochzuladen. Sie können dann an Codeprojekten zusammenarbeiten, und das System ist standardmäßig quelloffen, was bedeutet, dass jeder auf der Welt Ihren GitHub-Code finden, verwenden, davon lernen und ihn verbessern kann. GitHub hat eine sehr nützliche Funktion namens [GitHub Pages](https://pages.github.com/), die es Ihnen ermöglicht, Website-Code live im Web zu veröffentlichen.
- [Google App Engine](https://cloud.google.com/appengine/) ist eine leistungsstarke Plattform, die es Ihnen ermöglicht, Anwendungen auf der Infrastruktur von Google zu erstellen und auszuführen — egal ob Sie eine mehrstufige Webanwendung von Grund auf erstellen oder eine statische Website hosten möchten. Weitere Informationen finden Sie unter [Wie wird Ihre Website auf Google App Engine gehostet?](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_do_you_host_your_website_on_Google_App_Engine).

Diese Optionen sind in der Regel kostenlos, mit einem eingeschränkten Funktionsumfang.

### Verwendung einer webbasierten IDE wie CodePen

Es gibt eine Reihe von Web-Apps, die eine Website-Entwicklungsumgebung emulieren und es Ihnen ermöglichen, HTML, CSS und JavaScript zu schreiben, das dann gerendert und in einem Ausgabefenster angezeigt wird. Generell sind diese Tools einfach zu verwenden, hervorragend zum Lernen geeignet, gut zum Teilen von Code (zum Beispiel, wenn Sie eine Technik mit Kollegen in einem anderen Büro teilen oder Debugging-Hilfe anfordern möchten), und kostenlos (für grundlegende Funktionen). Sie hosten Ihre gerenderte Seite unter einer einzigartigen Webadresse. Die Funktionsvielfalt ist jedoch begrenzt, und diese Apps bieten oft keinen Speicherplatz für Assets (wie Bilder).

Probieren Sie einige dieser Beispiele aus, um herauszufinden, welches für Sie am besten funktioniert:

- [JSFiddle](https://jsfiddle.net/)
- [Glitch](https://glitch.com/)
- [JS Bin](https://jsbin.com/)
- [CodePen](https://codepen.io/)

## Veröffentlichen über GitHub

Sehen wir uns nun an, wie Sie Ihre Website über GitHub Pages veröffentlichen können.

1. Melden Sie sich zunächst bei [GitHub](https://github.com/) an und verifizieren Sie Ihre E-Mail-Adresse.
2. Als nächstes müssen Sie ein [Repository erstellen](https://github.com/new), um die Dateien zu speichern. Auf dieser Seite:
   1. Geben Sie im Feld _Repository name_ _username_.github.io ein, wobei _username_ Ihr Benutzername ist. Zum Beispiel würde unser Freund Bob Smith _bobsmith.github.io_ eingeben.
   2. Klicken Sie unten auf der Seite auf die Schaltfläche _Create repository_.
3. Auf der nächsten Seite finden Sie den Link _uploading an existing file_ und klicken Sie darauf. Dies sollte Sie zur Datei-Upload-Seite bringen.
4. Zu diesem Zeitpunkt sollten Sie in der Lage sein, Dateien von Ihrem lokalen Dateisystem auf die Webseite zu ziehen und abzulegen, um sie in das GitHub-Repository hochzuladen. Um dies zu tun:
   1. Öffnen Sie ein Dateiexplorer/Finder-Fenster auf Ihrem Computer.
   2. Stellen Sie sicher, dass Sie das Dateiexplorer- _und_ das Webbrowser-Fenster sehen können — positionieren Sie sie nebeneinander auf Ihrem Bildschirm.
   3. Navigieren Sie das Dateiexplorer-Fenster zu dem Ordner, der Ihre Beispiel-Website enthält.
      > [!NOTE]
      > Stellen Sie sicher, dass Ihr Ordner eine `index.html`-Datei enthält.
   4. Wählen Sie alle Dateien Ihrer Beispiel-Website aus (zum Beispiel durch die Tastenkombination <kbd>Strg</kbd> + <kbd>A</kbd>, oder <kbd>Cmd</kbd> + <kbd>A</kbd> auf macOS).
   5. Ziehen Sie die Dateien von Ihrem Dateiexplorer über den Abschnitt "Drag files here to add them to your repository" der GitHub-Seite.
   6. Der Rahmen und der Text des Abschnitts ändert sich, um anzuzeigen, dass ein Abwurf möglich ist. Lassen Sie die Dateien an diesem Punkt fallen.
   7. Klicken Sie unten auf der Seite auf die Schaltfläche _Commit changes_.
5. Navigieren Sie in Ihrem Browser zu _username_.github.io, um Ihre Website online zu sehen. Zum Beispiel für den Benutzernamen _chrisdavidmills_, gehen Sie zu [_chrisdavidmills_.github.io](https://chrisdavidmills.github.io/).

   > [!NOTE]
   > Es kann ein paar Minuten dauern, bis Ihre Website online ist. Wenn Ihre Website nicht sofort angezeigt wird, warten Sie ein paar Minuten und versuchen Sie es erneut.

Um mehr zu erfahren, siehe [GitHub Pages Hilfe](https://docs.github.com/en/pages/getting-started-with-github-pages).

## Weiterführende Literatur

- [Was ist ein Webserver](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server)
- [Verstehen von Domainnamen](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name)
- [Wie viel kostet es, etwas im Web zu machen?](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost)
- [Eine Website bereitstellen](https://www.codecademy.com/learn/deploy-a-website): Ein schönes Tutorial von Codecademy, das noch etwas weiter geht und einige zusätzliche Techniken zeigt.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}
