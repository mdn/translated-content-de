---
title: Veröffentlichen Ihrer Website
slug: Learn_web_development/Getting_started/Your_first_website/Publishing_your_website
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}

Sobald Sie den Code geschrieben und die Dateien, die Ihre Website ausmachen, organisiert haben, müssen Sie alles online stellen, damit andere darauf zugreifen können. Dieser Artikel erklärt, wie Sie Ihre Beispiel-Website mit wenig Aufwand online stellen können.

> [!NOTE]
> Sie benötigen eine Beispiel-Website auf Ihrem lokalen Computer, um diesem Artikel folgen zu können. Sie sollte mindestens eine gültige `index.html`-Datei enthalten. Falls Sie dies noch nicht getan haben, empfehlen wir Ihnen, eine zu erstellen, indem Sie die vorhergehenden Artikel in diesem Modul durcharbeiten, beginnend mit [Wie wird Ihre Website aussehen?](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computer-Betriebssystem, der grundlegenden Software, die Sie zum Erstellen einer Website verwenden werden, und Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die grundlegenden Werkzeuge und Konzepte, die beim Veröffentlichen einer Website involviert sind — Hosting, Domains, FTP-Programme.</li>
          <li>Welche alternativen Hosting-Optionen verfügbar sind, zum Beispiel Google App Engine, GitHub und CodePen.</li>
          <li>Veröffentlichen einer Website mit GitHub Pages.</li>
          <li>Hosting, wie man es erwirbt, und wie man eine Website online stellt.</li>
          <li>Wie man eine Domain registriert.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Welche Optionen gibt es?

Das Veröffentlichen einer Website ist ein komplexes Thema, da es viele Möglichkeiten gibt, dies zu tun. Dieser Artikel versucht nicht, alle möglichen Methoden zu dokumentieren. Stattdessen erklärt er die Vor- und Nachteile von drei Ansätzen, die für Anfänger praktikabel sind. Anschließend wird eine Methode durchgegangen, die sofort für viele Leser funktionieren kann.

### Hosting und einen Domainnamen erhalten

Um mehr Kontrolle über den Inhalt und das Erscheinungsbild der Website zu haben, entscheiden sich die meisten Profis/Unternehmen dafür, Webhosting und einen Domainnamen zu kaufen:

- Webhosting ist gemieteter Speicherplatz auf dem [Webserver](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server) eines Hostingunternehmens. Sie platzieren Website-Dateien auf dem Webserver. Der Webserver stellt Website-Inhalte für die Besucher bereit.
- Ein [Domainname](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) ist die einzigartige Webadresse, unter der Menschen Ihre Website finden, wie `https://www.mozilla.org` oder `https://www.bbc.co.uk`. Sie können Ihren Domainnamen für so viele Jahre mieten, wie Sie möchten, von einem **Domain-Registrar**.

Wenn Sie Ihr Webhosting _und_ Ihren Domainnamen vom selben Unternehmen beziehen, werden sie normalerweise automatisch so konfiguriert, dass sie miteinander kommunizieren. Wenn Sie sie jedoch von verschiedenen Unternehmen beziehen oder Ihr Hosting zu einem anderen Unternehmen wechseln möchten, müssen Sie einige Einstellungen vornehmen, um den Domainnamen auf den richtigen Server zu verweisen. Dies ist notwendig, damit die Leute Ihre Website sehen, wenn sie zu dieser Webadresse navigieren. Dies wird in der Regel durch das Einloggen auf der Website Ihres Domain-Registrars und das Einstellen der [Nameserver](https://kinsta.com/knowledgebase/what-is-a-nameserver/) auf die von Ihrem Hostingunternehmen bereitgestellten Nameserver durchgeführt.

Unternehmen verwenden verschiedene Mechanismen, um Dateien auf ihre Webserver zu übertragen. Viele bieten mehr als eine Option an; typische Optionen umfassen:

- Eine Drag-and-Drop-Oberfläche (ein Beispiel dafür sehen Sie im Abschnitt [Veröffentlichen über GitHub](#veröffentlichen_über_github) weiter unten).
- Ein {{Glossary("FTP", "File Transfer Protocol (FTP)")}} Programm. FTP-Programme variieren stark, aber im Allgemeinen müssen Sie sich mit den vom Hostingunternehmen bereitgestellten Details (typischerweise Benutzername, Passwort, Hostname) mit Ihrem Webserver verbinden. Dann zeigt das Programm Ihre lokalen Dateien und die Dateien des Webservers in zwei Fenstern an und bietet eine Möglichkeit, Dateien hin- und herzutransferieren.
- Das Halten des Website-Quellcodes in einem GitHub-Repository (siehe unten) und das Zugreifen des Hostingunternehmens darauf, damit sie den Quellcode abrufen, bei Bedarf bauen und veröffentlichen können.
- Einige Unternehmen stellen [Kommandozeilen-Tools](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) zur Verfügung, die Sie verwenden können, um Ihre Dateien zu übertragen.

#### Tipps zur Auswahl von Hosting und Domains

- MDN bewirbt keine spezifischen kommerziellen Hostingunternehmen oder Domain-Registrare. Um Hostingunternehmen und Registrare zu finden, suchen Sie einfach nach "Webhosting" und "Domainnamen". Alle Registrare bieten eine Funktion, mit der Sie prüfen können, ob der gewünschte Domainname verfügbar ist.
- Ihr heimischer oder geschäftlicher {{Glossary("ISP", "Internetdienstanbieter")}} bietet möglicherweise begrenztes Hosting für eine kleine Website an. Der verfügbare Funktionsumfang wird begrenzt sein, aber es könnte perfekt für Ihre ersten Experimente sein.
- Es gibt auch kostenlose Dienste wie [Neocities](https://neocities.org/), [Google Sites](https://sites.google.com/) und [WordPress](https://wordpress.com/). Solche Dienste sind möglicherweise im Umfang begrenzt, aber sie sind ausreichend für erste Experimente.

### Verwenden eines Online-Tools wie GitHub oder Google App Engine

Einige Tools ermöglichen es Ihnen, Ihre Website online zu veröffentlichen:

- [GitHub](https://github.com/) ist eine "soziale Codierungsseite". Es ermöglicht Ihnen, Code-Repositories zur Speicherung im [Git](https://git-scm.com/) **Versionskontrollsystem** hochzuladen. Sie können dann an Code-Projekten zusammenarbeiten, und das System ist standardmäßig Open Source, was bedeutet, dass jeder auf der Welt Ihren GitHub-Code finden, verwenden, davon lernen und ihn verbessern kann. GitHub bietet eine sehr nützliche Funktion namens [GitHub Pages](https://pages.github.com/), die es Ihnen ermöglicht, Website-Code live im Internet zu präsentieren.
- [Google App Engine](https://cloud.google.com/appengine) ist eine leistungsstarke Plattform, die es Ihnen ermöglicht, Anwendungen auf der Infrastruktur von Google zu erstellen und zu betreiben — ob Sie eine mehrstufige Webanwendung von Grund auf neu erstellen oder eine statische Website hosten müssen. Weitere Informationen finden Sie unter [Wie hosten Sie Ihre Website auf Google App Engine?](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_do_you_host_your_website_on_Google_App_Engine).

Diese Optionen sind in der Regel kostenlos, jedoch mit einem begrenzten Funktionsumfang.

### Verwenden einer webbasierten IDE wie CodePen

Es gibt eine Reihe von Web-Apps, die eine Website-Entwicklungsumgebung nachbilden und Ihnen ermöglichen, HTML, CSS und JavaScript zu schreiben, das dann gerendert und in einem Ausgabebereich angezeigt wird. Im Allgemeinen sind diese Werkzeuge einfach zu bedienen, ideal zum Lernen, gut zum Teilen von Code (zum Beispiel, wenn Sie eine Technik teilen oder um Hilfe bei der Fehlersuche von Kollegen in einem anderen Büro bitten möchten) und kostenlos (für grundlegende Funktionen). Sie hosten Ihre gerenderte Seite unter einer eindeutigen Webadresse. Die Funktionen sind jedoch oft begrenzt und diese Apps bieten oft keinen Speicherplatz für Ressourcen (wie Bilder).

Versuchen Sie, mit einigen dieser Beispiele zu experimentieren, um herauszufinden, welches am besten für Sie funktioniert:

- [JSFiddle](https://jsfiddle.net/)
- [Glitch](https://glitch.com/)
- [JS Bin](https://jsbin.com/)
- [CodePen](https://codepen.io/)

## Veröffentlichen über GitHub

Lassen Sie uns nun untersuchen, wie Sie Ihre Website über GitHub Pages veröffentlichen.

1. Melden Sie sich zunächst bei [GitHub](https://github.com/) an und bestätigen Sie Ihre E-Mail-Adresse.
2. Als nächstes müssen Sie ein [Repository erstellen](https://github.com/new), um Dateien zu speichern. Auf dieser Seite:
   1. Geben Sie im Feld _Repository name_ _username_.github.io ein, wobei _username_ Ihr Benutzername ist. Unser Freund Bob Smith würde beispielsweise _bobsmith.github.io_ eingeben.
   2. Klicken Sie unten auf der Seite auf die Schaltfläche _Create repository_.
3. Auf der nächsten Seite finden Sie den Link _uploading an existing file_ und klicken darauf. Dies sollte Sie zur Dateiupload-Seite bringen.
4. An diesem Punkt sollten Sie in der Lage sein, Dateien von Ihrem lokalen Dateisystem auf die Webseite zu ziehen und abzulegen, um sie im GitHub-Repository hochzuladen. Dazu:
   1. Öffnen Sie ein Dateiexplorer/Finder-Fenster auf Ihrem Computer.
   2. Stellen Sie sicher, dass Sie das Dateiexplorer- _und_ das Webbrowser-Fenster sehen können — positionieren Sie sie nebeneinander auf Ihrem Bildschirm.
   3. Navigieren Sie im Dateiexplorer zu dem Ordner, der Ihre Beispiel-Website enthält.
      > [!NOTE]
      > Stellen Sie sicher, dass Ihr Ordner eine `index.html`-Datei enthält.
   4. Wählen Sie alle Dateien Ihrer Beispiel-Website aus (z. B. mit der Tastenkombination <kbd>Strg</kbd> + <kbd>A</kbd> oder <kbd>Befehl</kbd> + <kbd>A</kbd> auf macOS).
   5. Ziehen Sie die Dateien von Ihrem Dateiexplorer über den Abschnitt "Drag files here to add them to your repository" der GitHub-Seite.
   6. Der Rahmen und der Text des Abschnitts ändern sich, um anzuzeigen, dass ein Drop möglich ist. Lassen Sie die Dateien an diesem Punkt los.
   7. Klicken Sie unten auf der Seite auf die Schaltfläche _Commit changes_.
5. Navigieren Sie mit Ihrem Browser zu _username_.github.io, um Ihre Website online zu sehen. Zum Beispiel, für den Benutzernamen _chrisdavidmills_, gehen Sie zu [_chrisdavidmills_.github.io](https://chrisdavidmills.github.io/).

   > [!NOTE]
   > Es kann ein paar Minuten dauern, bis Ihre Website online ist. Wenn Ihre Website nicht sofort angezeigt wird, warten Sie ein paar Minuten und versuchen Sie es erneut.

Um mehr zu erfahren, sehen Sie sich die [GitHub Pages Help](https://docs.github.com/en/pages/getting-started-with-github-pages) an.

## Weiterführende Literatur

- [Was ist ein Webserver](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server)
- [Domainnamen verstehen](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name)
- [Wie viel kostet es, etwas im Web zu machen?](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost)
- [Deploy a Website](https://www.codecademy.com/learn/deploy-a-website): Ein schönes Tutorial von Codecademy, das ein wenig weiter geht und einige zusätzliche Techniken zeigt.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}
