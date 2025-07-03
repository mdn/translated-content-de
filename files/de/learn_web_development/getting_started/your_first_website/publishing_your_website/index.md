---
title: Veröffentlichen Ihrer Website
short-title: Publishing
slug: Learn_web_development/Getting_started/Your_first_website/Publishing_your_website
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}

Sobald Sie den Code geschrieben und die Dateien, die Ihre Website ausmachen, organisiert haben, müssen Sie alles online stellen, damit es gefunden werden kann. Dieser Artikel erklärt, wie Sie Ihre Beispiel-Website mit wenig Aufwand online stellen können.

> [!NOTE]
> Sie benötigen eine Beispiel-Website auf Ihrem lokalen Computer, um diesem Artikel folgen zu können. Sie sollte mindestens eine gültige `index.html` Datei enthalten. Falls Sie dies noch nicht getan haben, empfehlen wir Ihnen, eine zu erstellen, indem Sie die vorherigen Artikel in diesem Modul durcharbeiten, beginnend mit [Wie wird Ihre Website aussehen?](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse über Ihr Betriebssystem, die grundlegende Software, die Sie zum Erstellen einer Website verwenden, und Dateisysteme.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die grundlegenden Werkzeuge und Konzepte, die mit der Veröffentlichung einer Website verbunden sind – Hosting, Domains, FTP-Programme.</li>
          <li>Welche alternativen Hosting-Optionen verfügbar sind, zum Beispiel Google App Engine, GitHub und CodePen.</li>
          <li>Veröffentlichen einer Website mit GitHub Pages.</li>
          <li>Hosting, wie man es kauft und wie man eine Website online stellt.</li>
          <li>Wie man eine Domain registriert.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was sind die Optionen?

Das Veröffentlichen einer Website ist ein komplexes Thema, da es viele Möglichkeiten gibt, dies zu tun. Dieser Artikel versucht nicht, alle möglichen Methoden zu dokumentieren. Stattdessen erklärt er die Vor- und Nachteile von drei Ansätzen, die für Anfänger praktisch sind. Anschließend wird eine Methode vorgestellt, die für viele Leser sofort funktionieren kann.

### Hosting und einen Domainnamen erhalten

Um mehr Kontrolle über den Inhalt und das Erscheinungsbild Ihrer Website zu haben, wählen die meisten Profis/Geschäftsleute den Kauf von Webhosting und einem Domainnamen:

- Webhosting ist gemieteter Speicherplatz auf einem [Webserver](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server) eines Hosting-Unternehmens. Sie platzieren Website-Dateien auf dem Webserver. Der Webserver stellt den Website-Inhalt den Besuchern zur Verfügung.
- Ein [Domainname](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) ist die eindeutige Adresse, unter der Ihre Website gefunden wird, wie `https://www.mozilla.org` oder `https://www.bbc.co.uk`. Sie können Ihren Domainnamen bei einem **Domain-Registrar** für beliebig viele Jahre mieten.

Wenn Sie Ihr Webhosting _und_ den Domainnamen vom selben Unternehmen beziehen, werden sie in der Regel automatisch so konfiguriert, dass sie miteinander kommunizieren. Wenn Sie sie jedoch von unterschiedlichen Unternehmen beziehen oder Ihr Hosting zu einem anderen Unternehmen ändern möchten, müssen Sie einige Konfigurationen durchführen, um den Domainnamen auf den richtigen Server zu verweisen. Dies erfolgt in der Regel, indem Sie sich bei der Website Ihres Domain-Registrars anmelden und die [Nameserver](https://kinsta.com/knowledgebase/what-is-a-nameserver/) Ihrer Domain auf die vom Hosting-Unternehmen bereitgestellten einstellen.

Unternehmen verwenden verschiedene Mechanismen, um Dateien auf ihre Webserver zu übertragen. Viele haben mehr als eine Option; typische Optionen sind:

- Eine Drag-and-Drop-Oberfläche (ein Beispiel hierfür sehen Sie später im Abschnitt [Veröffentlichen über GitHub](#veröffentlichen_über_github)).
- Ein {{Glossary("FTP", "File Transfer Protocol (FTP)")}}-Programm. FTP-Programme variieren stark, aber im Allgemeinen müssen Sie sich mit den von Ihrem Hosting-Unternehmen bereitgestellten Details (in der Regel Benutzername, Passwort, Hostname) mit Ihrem Webserver verbinden. Dann zeigt das Programm Ihnen Ihre lokalen Dateien und die Dateien des Webservers in zwei Fenstern an und bietet eine Möglichkeit, Dateien hin und her zu übertragen.
- Das Halten des Quellcodes der Website in einem GitHub-Repository (siehe unten) und Gewähren des Zugangs für das Hosting-Unternehmen, damit es den Quellcode abrufen, (falls nötig) bauen und veröffentlichen kann.
- Einige Unternehmen bieten [Befehlszeilentools](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) an, um Ihre Dateien zu übertragen.

#### Tipps zur Suche nach Hosting und Domains

- MDN fördert keine spezifischen kommerziellen Hosting-Unternehmen oder Domain-Registrar. Um Hosting-Unternehmen und Registrare zu finden, suchen Sie einfach nach "Webhosting" und "Domainnamen". Alle Registrare bieten eine Funktion, mit der Sie prüfen können, ob der gewünschte Domainname verfügbar ist.
- Ihr Heim- oder Büro-{{Glossary("ISP", "Internet Service Provider")}} kann einige eingeschränkte Hosting-Möglichkeiten für eine kleine Website bieten. Der verfügbare Funktionsumfang wird begrenzt sein, aber es könnte perfekt für Ihre ersten Experimente sein.
- Es gibt auch kostenlose Dienste wie [Neocities](https://neocities.org/), [Google Sites](https://sites.google.com/) und [WordPress](https://wordpress.com/). Solche Dienste können in ihrer Reichweite eingeschränkt sein, sind aber gut genug für erste Experimente.

### Verwendung eines Online-Tools wie GitHub oder Google App Engine

Einige Tools ermöglichen es Ihnen, Ihre Website online zu veröffentlichen:

- [GitHub](https://github.com/) ist eine "soziale Programmier"-Site. Sie ermöglicht es Ihnen, Code-Repositories zur Speicherung im [Git](https://git-scm.com/) **Versionskontrollsystem** hochzuladen. Sie können dann an Codeprojekten zusammenarbeiten, und das System ist standardmäßig open-source, das heißt, jeder auf der Welt kann Ihren GitHub-Code finden, verwenden, daraus lernen und ihn verbessern. GitHub hat eine sehr nützliche Funktion namens [GitHub Pages](https://pages.github.com/), die es Ihnen ermöglicht, den Website-Code live im Web zu veröffentlichen.
- [Google App Engine](https://cloud.google.com/appengine) ist eine leistungsstarke Plattform, die es Ihnen ermöglicht, Anwendungen auf der Infrastruktur von Google zu erstellen und auszuführen – sei es, dass Sie eine mehrschichtige Webanwendung von Grund auf neu erstellen oder eine statische Website hosten. Weitere Informationen finden Sie unter [Wie hostet man seine Website mit Google App Engine?](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_do_you_host_your_website_on_Google_App_Engine).

Diese Optionen sind in der Regel kostenlos, mit einem begrenzten Funktionsumfang.

### Verwendung einer webbasierten IDE wie CodePen

Es gibt eine Reihe von Web-Apps, die eine Website-Entwicklungsumgebung emulieren und es Ihnen ermöglichen, HTML, CSS und JavaScript zu schreiben, die dann gerendert und in einem Ausgabepaneel angezeigt werden. Diese Tools sind in der Regel leicht zu benutzen, großartig zum Lernen, gut zum Teilen von Code (zum Beispiel, wenn Sie eine Technik teilen oder Hilfe bei der Fehlersuche von Kollegen in einem anderen Büro erfragen möchten) und kostenlos (für grundlegende Funktionen). Sie hosten Ihre gerenderte Seite an einer eindeutigen Webadresse. Die Funktionen sind jedoch begrenzt, und diese Apps bieten oft keinen Hostingraum für Assets (wie Bilder).

Probieren Sie einige dieser Beispiele aus, um herauszufinden, welches für Sie am besten funktioniert:

- [Scrimba](https://scrimba.com/new?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
- [JSFiddle](https://jsfiddle.net/)
- [JSBin](https://jsbin.com/)
- [CodePen](https://codepen.io/)

## Veröffentlichen über GitHub

Schauen wir uns nun an, wie Sie Ihre Seite über GitHub Pages veröffentlichen können.

1. Melden Sie sich zunächst [bei GitHub an](https://github.com/) und verifizieren Sie Ihre E-Mail-Adresse.
2. Als nächstes müssen Sie [ein Repository erstellen](https://github.com/new), um Dateien zu speichern. Auf dieser Seite:
   1. Geben Sie im Feld _Repository name_ den Namen _username_.github.io ein, wobei _username_ Ihr Benutzername ist. Zum Beispiel würde unser Freund Bob Smith _bobsmith.github.io_ eingeben.
   2. Klicken Sie auf die Schaltfläche _Create repository_ am unteren Rand der Seite.
3. Auf der nächsten Seite finden Sie den Link _uploading an existing file_ und klicken darauf. Dies sollte Sie zur Datei-Upload-Seite bringen.
4. An diesem Punkt sollten Sie in der Lage sein, Dateien aus Ihrem lokalen Dateisystem in das Webpage-Fenster zu ziehen und dort abzulegen, um sie in das GitHub-Repository hochzuladen. Gehen Sie dazu wie folgt vor:
   1. Öffnen Sie ein Datei-Explorer/Finder-Fenster auf Ihrem Computer.
   2. Stellen Sie sicher, dass Sie das Datei-Explorer- _und_ das Webbrowser-Fenster sehen können – positionieren Sie sie nebeneinander auf Ihrem Bildschirm.
   3. Navigieren Sie im Datei-Explorer-Fenster zu dem Ordner, der Ihre Beispiel-Website enthält.
      > [!NOTE]
      > Stellen Sie sicher, dass Ihr Ordner eine `index.html` Datei enthält.
   4. Wählen Sie alle Dateien Ihrer Beispiel-Website aus (zum Beispiel mit der Tastenkombination <kbd>Strg</kbd> + <kbd>A</kbd>, oder <kbd>Cmd</kbd> + <kbd>A</kbd> auf macOS).
   5. Ziehen Sie die Dateien aus Ihrem Dateiexplorer über den Bereich "Drag files here to add them to your repository" der GitHub-Seite.
   6. Der Rahmen und der Text des Bereichs ändern sich, um anzuzeigen, dass ein Ablegen möglich ist. Lassen Sie die Dateien an diesem Punkt fallen.
   7. Klicken Sie auf die Schaltfläche _Commit changes_ am unteren Rand der Seite.
5. Navigieren Sie mit Ihrem Browser zu _username_.github.io, um Ihre Website online zu sehen. Zum Beispiel für den Benutzernamen _chrisdavidmills_, gehen Sie zu [_chrisdavidmills_.github.io](https://chrisdavidmills.github.io/).

   > [!NOTE]
   > Es kann einige Minuten dauern, bis Ihre Website online ist. Wenn Ihre Website nicht sofort angezeigt wird, warten Sie einige Minuten und versuchen Sie es erneut.

Um mehr zu erfahren, sehen Sie sich [GitHub Pages Hilfe](https://docs.github.com/en/pages/getting-started-with-github-pages) an.

## Weiterführende Literatur

- [Was ist ein Webserver](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server)
- [Verständnis von Domainnamen](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name)
- [Wie viel kostet es, etwas im Web zu tun?](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost)
- [Deploy a Website](https://www.codecademy.com/learn/deploy-a-website): Ein schönes Tutorial von Codecademy, das etwas weiter geht und einige zusätzliche Techniken zeigt.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}
