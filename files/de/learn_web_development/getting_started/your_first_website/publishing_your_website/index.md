---
title: Veröffentlichung Ihrer Website
short-title: Publishing
slug: Learn_web_development/Getting_started/Your_first_website/Publishing_your_website
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}

Sobald Sie den Code geschrieben und die Dateien organisiert haben, die Ihre Website ausmachen, müssen Sie alles online stellen, damit andere darauf zugreifen können. Dieser Artikel erklärt, wie Sie Ihre Beispiel-Website mit wenig Aufwand online stellen können.

> [!NOTE]
> Sie benötigen eine Beispiel-Website auf Ihrem lokalen Computer, um diesem Artikel folgen zu können. Sie sollte mindestens eine gültige `index.html`-Datei enthalten. Wenn Sie dies noch nicht getan haben, empfehlen wir Ihnen, eine zu erstellen, indem Sie die vorherigen Artikel in diesem Modul durcharbeiten, beginnend mit [Wie wird Ihre Website aussehen?](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like).

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
          <li>Die grundlegenden Werkzeuge und Konzepte, die an der Veröffentlichung einer Website beteiligt sind — Hosting, Domains, FTP-Programme.</li>
          <li>Welche alternativen Hosting-Optionen verfügbar sind, zum Beispiel Google App Engine, GitHub und CodePen.</li>
          <li>Veröffentlichung einer Website mit GitHub Pages.</li>
          <li>Hosting, wie man es kauft und wie man eine Website online stellt.</li>
          <li>Wie man eine Domain registriert.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was sind die Optionen?

Die Veröffentlichung einer Website ist ein komplexes Thema, da es viele Möglichkeiten gibt, dies zu tun. Dieser Artikel versucht nicht, alle möglichen Methoden zu dokumentieren. Stattdessen erklärt er die Vor- und Nachteile von drei Ansätzen, die für Anfänger praktisch sind. Anschließend wird eine Methode vorgestellt, die für viele Leser sofort funktionieren kann.

### Hosting und einen Domainnamen erhalten

Um mehr Kontrolle über Inhalt und Erscheinungsbild der Website zu haben, entscheiden sich die meisten Fachleute/Unternehmen dafür, Webhosting und einen Domainnamen zu kaufen:

- Webhosting ist gemieteter Speicherplatz auf einem Webserver eines Hosting-Unternehmens. Sie legen Website-Dateien auf dem Webserver ab. Der Webserver stellt Website-Inhalte den Besuchern Ihrer Website zur Verfügung.
- Ein [Domainname](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) ist die einzigartige Webadresse, unter der Menschen Ihre Website finden, wie `https://www.mozilla.org` oder `https://www.bbc.co.uk`. Sie können Ihren Domainnamen von einem **Domain-Registrar** für so viele Jahre mieten, wie Sie möchten.

Wenn Sie Ihr Webhosting _und_ den Domainnamen von derselben Firma beziehen, werden diese in der Regel automatisch so konfiguriert, dass sie miteinander kommunizieren. Wenn Sie sie jedoch von verschiedenen Firmen beziehen oder Ihr Hosting zu einem anderen Unternehmen wechseln möchten, müssen Sie einige Einstellungen vornehmen, um den Domainnamen auf den richtigen Server zu verweisen. Auf diese Weise sehen die Besucher Ihre Website, wenn sie zu dieser Webadresse navigieren. Dies geschieht normalerweise, indem Sie sich auf der Website Ihres Domain-Registrars anmelden und die [Nameserver](https://kinsta.com/blog/what-is-a-nameserver/) Ihrer Domain auf die von Ihrem Hosting-Anbieter bereitgestellten ändern.

Unternehmen verwenden verschiedene Mechanismen, um Dateien auf ihre Webserver zu übertragen. Viele bieten mehr als eine Option; typische Optionen sind:

- Eine Drag-and-Drop-Oberfläche (Sie sehen ein Beispiel hierfür im Abschnitt [Veröffentlichung über GitHub](#veröffentlichung_über_github) weiter unten).
- Ein {{Glossary("FTP", "File Transfer Protocol (FTP)")}}-Programm. FTP-Programme variieren stark, aber im Allgemeinen müssen Sie sich mit den von Ihrem Hosting-Unternehmen bereitgestellten Daten (in der Regel Benutzername, Passwort, Hostname) mit Ihrem Webserver verbinden. Dann zeigt das Programm Ihnen Ihre lokalen Dateien und die Dateien des Webservers in zwei Fenstern und bietet eine Möglichkeit, Dateien hin und her zu übertragen.
- Die Verwaltung des Website-Quellcodes in einem GitHub-Repository (siehe unten) und dem Hosting-Unternehmen den Zugriff gewähren, damit es die Quelle abrufen, bei Bedarf bauen und veröffentlichen kann.
- Einige Unternehmen bieten [Kommandozeilen-Tools](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) an, mit denen Sie Ihre Dateien übertragen können.

#### Tipps zum Finden von Hosting und Domains

- MDN fördert keine spezifischen kommerziellen Hosting-Unternehmen oder Domain-Registrare. Um Hosting-Unternehmen und -Registrar zu finden, suchen Sie einfach nach "Webhosting" und "Domainnamen". Alle Registrare verfügen über eine Funktion, mit der Sie prüfen können, ob der gewünschte Domainname verfügbar ist.
- Ihr privater oder geschäftlicher {{Glossary("ISP", "Internetdienstanbieter")}} bietet möglicherweise eingeschränktes Hosting für eine kleine Website an. Der verfügbare Funktionsumfang wird begrenzt sein, aber es könnte perfekt für Ihre ersten Experimente sein.
- Es gibt auch kostenlose Dienste wie [Neocities](https://neocities.org/), [Google Sites](https://sites.google.com/) und [WordPress](https://wordpress.com/). Solche Dienste können im Umfang begrenzt sein, sind jedoch für erste Experimente gut genug.

### Verwendung eines Online-Werkzeugs

Einige Tools ermöglichen es Ihnen, Ihre Website online zu veröffentlichen:

- [GitHub](https://github.com/) ist eine "soziale Code"-Plattform. Sie ermöglicht es Ihnen, Code-Repositories zur Speicherung im [Git](https://git-scm.com/) **Versionskontrollsystem** hochzuladen. Sie können dann an Code-Projekten zusammenarbeiten, und das System ist standardmäßig Open Source, was bedeutet, dass jeder in der Welt Ihren GitHub-Code finden, verwenden, davon lernen und verbessern kann. GitHub bietet eine sehr nützliche Funktion namens [GitHub Pages](https://pages.github.com/), mit der Sie Website-Code im Web live anzeigen können.
- [Netlify](https://www.netlify.com/) ist eine Webhosting-Plattform, die Hosting für statische Websites direkt aus Ihrem GitHub-Repository bereitstellt. Sie bietet auch eine Reihe zusätzlicher Funktionen, wie z. B. Bereitstellungsvorschau, serverlose Funktionen und Formularverwaltung.
- [Fly.io](https://fly.io/) ist eine Plattform, die es Ihnen ermöglicht, Anwendungen und Datenbanken in der Nähe Ihrer Benutzer bereitzustellen. Dies ist besser geeignet, wenn Sie eine Webanwendung haben, die Backend-Dienste benötigt.

Diese Optionen sind in der Regel kostenlos, mit einem eingeschränkten Funktionsumfang.

### Verwendung einer webbasierten IDE wie CodePen

Es gibt eine Reihe von Web-Apps, die eine Website-Entwicklungsumgebung emulieren und es Ihnen ermöglichen, HTML, CSS und JavaScript zu schreiben, das dann im Ausgabefenster gerendert und angezeigt wird. Im Allgemeinen sind diese Tools einfach zu verwenden, ideal zum Lernen, gut zum Teilen von Code (z. B. wenn Sie eine Technik teilen oder Debug-Hilfe von Kollegen in einem anderen Büro anfordern möchten) und kostenlos (für grundlegende Funktionen). Sie hosten Ihre gerenderte Seite unter einer einzigartigen Webadresse. Die Funktionen sind jedoch begrenzt, und diese Apps bieten oft keinen Hosting-Speicherplatz für Assets (wie Bilder).

Probieren Sie einige dieser Beispiele aus, um herauszufinden, welches für Sie am besten funktioniert:

- [Scrimba](https://scrimba.com/new?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
- [JSFiddle](https://jsfiddle.net/)
- [JSBin](https://jsbin.com/)
- [CodePen](https://codepen.io/)

## Veröffentlichung über GitHub

Lassen Sie uns nun untersuchen, wie Sie Ihre Website über GitHub Pages veröffentlichen können.

1. Melden Sie sich zunächst bei [GitHub](https://github.com/) an und verifizieren Sie Ihre E-Mail-Adresse.
2. Als Nächstes müssen Sie [ein Repository erstellen](https://github.com/new), um Dateien zu speichern. Auf dieser Seite:
   1. Geben Sie im Feld _Repository name_ _username_.github.io ein, wobei _username_ Ihr Benutzername ist. Unser Freund Bob Smith würde zum Beispiel _bobsmith.github.io_ eingeben.
   2. Klicken Sie auf die Schaltfläche _Create repository_ am unteren Rand der Seite.
3. Auf der nächsten Seite finden Sie den Link _uploading an existing file_ und klicken darauf. Dies sollte Sie zur Dateiupload-Seite bringen.
4. An diesem Punkt sollten Sie in der Lage sein, Dateien aus Ihrem lokalen Dateisystem per Drag & Drop auf die Webseite zu ziehen, um sie in das GitHub-Repository hochzuladen. Gehen Sie dazu folgendermaßen vor:
   1. Öffnen Sie ein Dateiexplorer/Finder-Fenster auf Ihrem Computer.
   2. Stellen Sie sicher, dass Sie das Dateiexplorer-Fenster _und_ die Webbrowser-Fenster sehen können — platzieren Sie sie nebeneinander auf Ihrem Bildschirm.
   3. Navigieren Sie im Dateiexplorer-Fenster zum Ordner, der Ihre Beispiel-Website enthält.
      > [!NOTE]
      > Stellen Sie sicher, dass Ihr Ordner eine `index.html`-Datei enthält.
   4. Wählen Sie alle Dateien Ihrer Beispiel-Website aus (zum Beispiel mit der Tastenkombination <kbd>Strg</kbd> + <kbd>A</kbd> oder <kbd>Cmd</kbd> + <kbd>A</kbd> auf macOS).
   5. Ziehen Sie die Dateien aus Ihrem Dateiexplorer über den "Drag files here to add them to your repository"-Bereich der GitHub-Seite.
   6. Der Rand und der Text des Abschnitts ändern sich, um anzuzeigen, dass ein Ablegen möglich ist. Lassen Sie die Dateien an dieser Stelle los.
   7. Klicken Sie auf die Schaltfläche _Commit changes_ am unteren Rand der Seite.
5. Navigieren Sie mit Ihrem Browser zu _username_.github.io, um Ihre Website online zu sehen. Zum Beispiel für den Benutzernamen _chrisdavidmills_, gehen Sie zu [_chrisdavidmills_.github.io](https://chrisdavidmills.github.io/).

   > [!NOTE]
   > Es kann einige Minuten dauern, bis Ihre Website live geht. Wenn Ihre Website nicht sofort angezeigt wird, warten Sie ein paar Minuten und versuchen Sie es erneut.

Um mehr zu erfahren, sehen Sie sich [GitHub Pages Hilfe](https://docs.github.com/en/pages/getting-started-with-github-pages) an.

## Weiterführende Literatur

- [Was ist ein Webserver](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server)
- [Verständnis für Domainnamen](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name)
- [Wie viel kostet es, im Web etwas zu machen?](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost)
- [Deploy a Website](https://www.codecademy.com/learn/deploy-a-website): Ein schönes Tutorial von Codecademy, das ein Stück weiter geht und einige zusätzliche Techniken zeigt.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}
