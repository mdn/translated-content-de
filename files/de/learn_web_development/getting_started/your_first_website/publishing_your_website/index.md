---
title: Veröffentlichen Ihrer Website
short-title: Publishing
slug: Learn_web_development/Getting_started/Your_first_website/Publishing_your_website
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}

Sobald Sie den Code geschrieben und die Dateien organisiert haben, aus denen Ihre Website besteht, müssen Sie alles online stellen, damit Menschen sie finden können. Dieser Artikel erklärt, wie Sie Ihre Beispiel-Website mit geringem Aufwand online stellen können.

> [!NOTE]
> Sie benötigen eine Beispiel-Website, die auf Ihrem lokalen Computer verfügbar ist, um diesen Artikel nachzuvollziehen. Sie sollte mindestens eine gültige `index.html`-Datei enthalten. Wenn Sie dies noch nicht getan haben, empfehlen wir Ihnen, eine zu erstellen, indem Sie die vorherigen Artikel in diesem Modul durcharbeiten, beginnend mit [Wie wird Ihre Website aussehen?](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computer-Betriebssystem, der Basissoftware, die Sie zum Erstellen einer Website verwenden werden, und Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die grundlegenden Werkzeuge und Konzepte, die beim Veröffentlichen einer Website involviert sind — Hosting, Domains, FTP-Programme.</li>
          <li>Welche alternativen Hosting-Optionen verfügbar sind, zum Beispiel Google App Engine, GitHub und CodePen.</li>
          <li>Veröffentlichen einer Website mit GitHub Pages.</li>
          <li>Hosting, wie man es erwirbt und wie man eine Website online stellt.</li>
          <li>Wie man eine Domain registriert.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Welche Optionen gibt es?

Das Veröffentlichen einer Website ist ein komplexes Thema, da es viele unterschiedliche Herangehensweisen gibt. Dieser Artikel versucht nicht, alle möglichen Methoden zu dokumentieren. Stattdessen erklärt er die Vor- und Nachteile von drei Ansätzen, die für Anfänger praktisch sind. Anschließend wird eine Methode beschrieben, die für viele Leser sofort anwendbar ist.

### Hosting und Domainnamen erhalten

Um mehr Kontrolle über den Inhalt und das Erscheinungsbild der Website zu haben, wählen die meisten Fachleute/Unternehmen den Kauf von Webhosting und einem Domainnamen:

- Webhosting ist gemieteter Speicherplatz auf dem [Webserver](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server) eines Hosting-Unternehmens. Sie legen Ihre Website-Dateien auf dem Webserver ab. Der Webserver stellt den Website-Inhalt den Website-Besuchern zur Verfügung.
- Ein [Domainname](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) ist die eindeutige Webadresse, unter der Menschen Ihre Website finden können, wie z.B. `https://www.mozilla.org` oder `https://www.bbc.co.uk`. Sie können Ihren Domainnamen für beliebig viele Jahre bei einem **Domainregistrar** anmieten.

Wenn Sie Ihr Webhosting _und_ Ihren Domainnamen von derselben Firma beziehen, werden sie in der Regel automatisch so konfiguriert, dass sie miteinander kommunizieren. Falls Sie sie von verschiedenen Firmen beziehen, oder zu einem anderen Anbieter wechseln möchten, müssen Sie einige Einstellungen vornehmen, um den Domainnamen auf den richtigen Server zu verweisen. Dies geschieht normalerweise, indem Sie sich auf der Website Ihres Domainregistrars anmelden und die [Nameserver](https://kinsta.com/blog/what-is-a-nameserver/) Ihrer Domain auf die von Ihrem Hosting-Anbieter bereitgestellten setzen.

Unternehmen verwenden verschiedene Mechanismen, um Dateien auf ihre Webserver zu übertragen. Viele werden mehr als eine Option haben; typische Optionen umfassen:

- Eine Drag-and-Drop-Oberfläche (ein Beispiel dafür sehen Sie später im Abschnitt [Veröffentlichen über GitHub](#veröffentlichung_über_github)).
- Ein {{Glossary("FTP", "File Transfer Protocol (FTP)")}}-Programm. FTP-Programme variieren stark, aber im Allgemeinen müssen Sie sich mit Ihren von Ihrem Hosting-Anbieter bereitgestellten Zugriffsdaten (typischerweise Benutzername, Passwort, Hostname) mit Ihrem Webserver verbinden. Anschließend zeigt Ihnen das Programm Ihre lokalen Dateien und die Dateien des Webservers in zwei Fenstern und bietet eine Möglichkeit, Dateien hin und her zu übertragen.
- Das Behalten des Website-Quellcodes in einem GitHub-Repository (siehe unten) und das Gewähren des Hosting-Unternehmens Zugriff, damit es den Quellcode abrufen, bei Bedarf erstellen und veröffentlichen kann.
- Einige Unternehmen stellen [Kommandozeilenprogramme](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) bereit, die Sie zum Übertragen Ihrer Dateien verwenden können.

#### Tipps zur Suche nach Hosting und Domains

- MDN propagiert keine spezifischen kommerziellen Hosting-Unternehmen oder Domainregistrare. Um Hosting-Unternehmen und Registrare zu finden, suchen Sie einfach nach "Webhosting" und "Domainnamen". Alle Registrare bieten eine Funktion, um zu überprüfen, ob der gewünschte Domainname verfügbar ist.
- Ihr heimischer oder Büro-{{Glossary("ISP", "Internetanbieter")}} bietet möglicherweise begrenztes Hosting für eine kleine Website an. Der verfügbare Funktionsumfang wird begrenzt sein, aber es könnte perfekt für Ihre ersten Experimente sein.
- Es gibt auch kostenlose Dienste wie [Neocities](https://neocities.org/), [Google Sites](https://sites.google.com/) und [WordPress](https://wordpress.com/). Solche Dienstleistungen können im Umfang begrenzt sein, sind aber gut genug für erste Experimente.

### Verwendung eines Online-Tools

Einige Tools erlauben es Ihnen, Ihre Website online zu veröffentlichen:

- [GitHub](https://github.com/) ist eine "Social Coding"-Seite. Sie ermöglicht es Ihnen, Code-Repositories für die Speicherung im [Git](https://git-scm.com/) **Versionskontrollsystem** hochzuladen. Anschließend können Sie an Codeprojekten zusammenarbeiten, und das System ist standardmäßig Open-Source, was bedeutet, dass jeder auf der Welt Ihren GitHub-Code finden, verwenden, von ihm lernen und ihn verbessern kann. GitHub hat eine sehr nützliche Funktion namens [GitHub Pages](https://pages.github.com/), die es Ihnen erlaubt, Website-Code live im Web zu zeigen.
- [Netlify](https://www.netlify.com/) ist eine Webhosting-Plattform, die Hosting für statische Websites direkt aus Ihrem GitHub-Repository bietet. Sie bietet auch eine Reihe von zusätzlichen Funktionen, wie Bereitstellungsvorschau, serverlose Funktionen und Formularbearbeitung.
- [Fly.io](https://fly.io/) ist eine Plattform, die es Ihnen ermöglicht, Anwendungen und Datenbanken in der Nähe Ihrer Nutzer bereitzustellen. Dies ist geeigneter, wenn Sie eine Webanwendung haben, die Backend-Dienste benötigt.

Diese Optionen sind im Allgemeinen kostenlos, mit einem begrenzten Funktionsumfang.

### Verwendung einer web-basierten IDE wie CodePen

Es gibt eine Reihe von Webanwendungen, die eine Website-Entwicklungsumgebung nachahmen und es Ihnen ermöglichen, HTML, CSS und JavaScript zu schreiben, das dann gerendert und in einem Ausgabebereich angezeigt wird. Im Allgemeinen sind diese Tools einfach zu bedienen, ideal zum Lernen, gut zum Teilen von Code (zum Beispiel, wenn Sie eine Technik mit Kollegen in einem anderen Büro teilen oder Hilfe beim Debuggen anfordern möchten) und kostenlos (für grundlegende Funktionen). Sie hosten Ihre gerenderte Seite unter einer einzigartigen Webadresse. Allerdings sind die Funktionen begrenzt, und diese Apps bieten oft keinen Hosting-Speicherplatz für Ressourcen (wie Bilder).

Probieren Sie einige dieser Beispiele aus, um herauszufinden, welches für Sie am besten funktioniert:

- [Scrimba](https://scrimba.com/new?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
- [JSFiddle](https://jsfiddle.net/)
- [JSBin](https://jsbin.com/)
- [CodePen](https://codepen.io/)

## Veröffentlichung über GitHub

Nun untersuchen wir, wie Sie Ihre Website über GitHub Pages veröffentlichen können.

1. Melden Sie sich zuerst bei [GitHub](https://github.com/) an und verifizieren Sie Ihre E-Mail-Adresse.
2. Erstellen Sie als nächstes ein [Repository](https://github.com/new), um Dateien zu speichern. Auf dieser Seite:
   1. Geben Sie im Feld _Repository name_ den Namen _username_.github.io ein, wobei _username_ Ihr Benutzername ist. Zum Beispiel würde unser Freund Bob Smith _bobsmith.github.io_ eingeben.
   2. Klicken Sie auf die Schaltfläche _Create repository_ am unteren Rand der Seite.
3. Auf der nächsten Seite finden Sie den Link _uploading an existing file_ und klicken Sie darauf. Dieser sollte Sie zur Dateiupload-Seite bringen.
4. An diesem Punkt sollten Sie Dateien von Ihrem lokalen Dateisystem auf die Webseite ziehen und dort ablegen können, um sie in das GitHub-Repository hochzuladen. Um dies zu tun:
   1. Öffnen Sie ein Datei-Explorer/Finder-Fenster auf Ihrem Computer.
   2. Stellen Sie sicher, dass Sie sowohl den Datei-Explorer _als auch_ das Webbrowser-Fenster sehen können — positionieren Sie sie nebeneinander auf Ihrem Bildschirm.
   3. Navigieren Sie im Datei-Explorer-Fenster zum Ordner, der Ihre Beispiel-Website enthält.
      > [!NOTE]
      > Stellen Sie sicher, dass Ihr Ordner eine `index.html`-Datei enthält.
   4. Wählen Sie alle Dateien Ihrer Beispiel-Website aus (zum Beispiel durch Tastenkombination <kbd>Ctrl</kbd> + <kbd>A</kbd> oder <kbd>Cmd</kbd> + <kbd>A</kbd> auf macOS).
   5. Ziehen Sie die Dateien aus Ihrem Datei-Explorer über den Bereich "Drag files here to add them to your repository" auf der GitHub-Seite.
   6. Der Rand und der Text des Bereichs ändern sich, um anzuzeigen, dass ein Ablegen möglich ist. Lassen Sie die Dateien an diesem Punkt los.
   7. Klicken Sie am unteren Rand der Seite auf die Schaltfläche _Commit changes_.
5. Navigieren Sie Ihren Browser zu _username_.github.io, um Ihre Website online zu sehen. Zum Beispiel für den Benutzernamen _chrisdavidmills_, gehen Sie zu [_chrisdavidmills_.github.io](https://chrisdavidmills.github.io/).

   > [!NOTE]
   > Es kann einige Minuten dauern, bis Ihre Website online ist. Wenn Ihre Website nicht sofort angezeigt wird, warten Sie ein paar Minuten und versuchen Sie es erneut.

Um mehr zu erfahren, lesen Sie [GitHub Pages Hilfe](https://docs.github.com/en/pages/getting-started-with-github-pages).

## Weiterführende Literatur

- [Was ist ein Webserver](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server)
- [Verständnis von Domainnamen](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name)
- [Wie viel kostet es, etwas im Internet zu tun?](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost)
- [Deploy a Website](https://www.codecademy.com/learn/deploy-a-website): Ein schönes Tutorial von Codecademy, das ein Stück weiter geht und einige zusätzliche Techniken zeigt.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}
