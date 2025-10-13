---
title: Veröffentlichen Ihrer Website
short-title: Publishing
slug: Learn_web_development/Getting_started/Your_first_website/Publishing_your_website
l10n:
  sourceCommit: fefc87209bdfc4f740ff30d84b95121214323acc
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}

Nachdem Sie den Code geschrieben und die Dateien organisiert haben, die Ihre Website ausmachen, müssen Sie alles online stellen, damit es gefunden werden kann. Dieser Artikel erklärt, wie Sie Ihre Beispielwebsite mit geringem Aufwand online stellen.

> [!NOTE]
> Sie benötigen eine Beispielwebsite auf Ihrem lokalen Computer, um diesen Artikel nachzuvollziehen. Sie sollte mindestens eine gültige `index.html`-Datei enthalten. Falls Sie dies noch nicht getan haben, empfehlen wir Ihnen, eine zu erstellen, indem Sie die vorherigen Artikel in diesem Modul durcharbeiten, beginnend mit [Wie wird Ihre Website aussehen?](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like).

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
          <li>Die grundlegenden Werkzeuge und Konzepte, die mit der Veröffentlichung einer Website verbunden sind — Hosting, Domains, FTP-Programme.</li>
          <li>Welche alternativen Hosting-Optionen verfügbar sind, zum Beispiel Google App Engine, GitHub und CodePen.</li>
          <li>Veröffentlichen einer Website mit GitHub Pages.</li>
          <li>Hosting, wie man es kauft, und wie man eine Website online stellt.</li>
          <li>Wie man eine Domain registriert.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was sind die Optionen?

Das Veröffentlichen einer Website ist ein komplexes Thema, da es viele Wege gibt, dies zu tun. Dieser Artikel versucht nicht, alle möglichen Methoden zu dokumentieren. Stattdessen erklärt er die Vor- und Nachteile von drei Ansätzen, die für Anfänger praktisch sind. Dann wird ein Verfahren beschrieben, das für viele Leser sofort funktionieren kann.

### Hosting und einen Domainnamen erhalten

Um mehr Kontrolle über den Inhalt und das Aussehen der Website zu haben, entscheiden sich die meisten Profis/Unternehmen dafür, Webhosting und einen Domainnamen zu kaufen:

- Webhosting ist gemieteter Speicherplatz auf einem [Webserver](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server) eines Hosting-Unternehmens. Sie legen die Website-Dateien auf dem Webserver ab. Der Webserver stellt den Website-Inhalt den Besuchern der Website zur Verfügung.
- Ein [Domainname](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) ist die einzigartige Webadresse, unter der Personen Ihre Website finden, wie `https://www.mozilla.org` oder `https://www.bbc.co.uk`. Sie können Ihren Domainnamen für beliebig viele Jahre bei einem **Domain-Registrar** mieten.

Wenn Sie Ihr Webhosting _und_ Ihren Domainnamen von demselben Unternehmen beziehen, werden sie normalerweise automatisch so konfiguriert, dass sie miteinander kommunizieren. Wenn Sie sie jedoch von unterschiedlichen Unternehmen beziehen oder Ihr Hosting zu einem anderen Unternehmen wechseln möchten, müssen Sie einige Einstellungen vornehmen, um den Domainnamen auf den richtigen Server zu verweisen. Dies geschieht in der Regel, indem Sie sich auf der Website Ihres Domain-Registrars anmelden und die [Nameserver](https://kinsta.com/blog/what-is-a-nameserver/) Ihrer Domain auf diejenigen einstellen, die von Ihrem Hosting-Unternehmen bereitgestellt werden.

Unternehmen verwenden verschiedene Mechanismen, um Dateien auf ihre Webserver zu übertragen. Viele werden mehr als eine Option haben; typische Optionen umfassen:

- Eine Drag-and-Drop-Schnittstelle (ein Beispiel hierfür finden Sie weiter unten bei [Veröffentlichen über GitHub](#veröffentlichen_über_github)).
- Ein {{Glossary("FTP", "File Transfer Protocol (FTP)")}}-Programm. FTP-Programme variieren stark, aber im Allgemeinen müssen Sie sich mit Details, die von Ihrem Hosting-Unternehmen bereitgestellt werden (typischerweise Benutzername, Passwort, Hostname), mit Ihrem Webserver verbinden. Das Programm zeigt Ihnen dann Ihre lokalen Dateien und die Dateien des Webservers in zwei Fenstern und bietet eine Möglichkeit, Dateien hin und her zu übertragen.
- Halten Sie den Website-Quellcode in einem GitHub-Repo (siehe unten) und gewähren Sie dem Hosting-Unternehmen Zugang, damit es den Quellcode abrufen, bei Bedarf erstellen und veröffentlichen kann.
- Einige Unternehmen bieten Ihnen [Kommandozeilentools](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) an, um Ihre Dateien zu übertragen.

#### Tipps zum Finden von Hosting und Domains

- MDN bewirbt keine bestimmten kommerziellen Hosting-Unternehmen oder Domain-Registrare. Um Hosting-Unternehmen und Registrare zu finden, suchen Sie einfach nach "Webhosting" und "Domainnamen". Alle Registrare haben eine Funktion, mit der Sie überprüfen können, ob der gewünschte Domainname verfügbar ist.
- Ihr {{Glossary("ISP", "Internetdienstanbieter")}} zu Hause oder im Büro kann möglicherweise begrenztes Hosting für eine kleine Website anbieten. Der verfügbare Funktionsumfang wird begrenzt sein, aber es könnte perfekt für Ihre ersten Experimente sein.
- Es gibt auch kostenlose Dienste wie [Neocities](https://neocities.org/), [Google Sites](https://sites.google.com/) und [WordPress](https://wordpress.com/). Solche Dienste können im Umfang begrenzt sein, aber sie sind für erste Experimente gut geeignet.

### Verwendung eines Online-Tools

Einige Tools ermöglichen es Ihnen, Ihre Website online zu veröffentlichen:

- [GitHub](https://github.com/) ist eine "soziale Codierungs"-Plattform. Sie ermöglicht es Ihnen, Code-Repositories für die Speicherung im **Versionskontrollsystem** [Git](https://git-scm.com/) hochzuladen. So können Sie an Code-Projekten zusammenarbeiten, und das System ist standardmäßig Open-Source, was bedeutet, dass jeder auf der Welt Ihren GitHub-Code finden, verwenden, davon lernen und ihn verbessern kann. GitHub hat eine sehr nützliche Funktion namens [GitHub Pages](https://pages.github.com/), die es Ihnen ermöglicht, Website-Code live im Web zu präsentieren.
- [Netlify](https://www.netlify.com/) ist eine Webhosting-Plattform, die Hosting für statische Websites direkt aus Ihrem GitHub-Repository bereitstellt. Sie bietet auch eine Reihe von zusätzlichen Funktionen wie Bereitstellungsvorschau, serverlose Funktionen und Formularverwaltung.
- [Fly.io](https://fly.io/) ist eine Plattform, die es Ihnen ermöglicht, Anwendungen und Datenbanken in der Nähe Ihrer Benutzer bereitzustellen. Dies ist eher geeignet, wenn Sie eine Webanwendung haben, die Backend-Dienste benötigt.

Diese Optionen sind im Allgemeinen kostenlos, mit einem begrenzten Funktionsumfang.

### Verwendung einer webbasierten IDE wie CodePen

Es gibt mehrere Web-Apps, die eine Website-Entwicklungsumgebung emulieren und es Ihnen ermöglichen, HTML, CSS und JavaScript zu schreiben, die dann in einem Ausgabebereich gerendert und angezeigt werden. Im Allgemeinen sind diese Tools einfach zu verwenden, großartig zum Lernen, gut zum Teilen von Code (zum Beispiel, wenn Sie eine Technik mit Kollegen in einem anderen Büro teilen oder um Debugging-Hilfe bitten möchten) und kostenlos (für grundlegende Funktionen). Sie hosten Ihre gerenderte Seite unter einer einzigartigen Webadresse. Allerdings sind die Funktionen begrenzt, und diese Apps bieten oft keinen Hosting-Speicherplatz für Assets (wie Bilder).

Versuchen Sie, einige dieser Beispiele auszuprobieren, um herauszufinden, welches für Sie am besten funktioniert:

- [Scrimba](https://scrimba.com/new?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
- [JSFiddle](https://jsfiddle.net/)
- [JSBin](https://jsbin.com/)
- [CodePen](https://codepen.io/)

## Veröffentlichen über GitHub

Schauen wir uns nun an, wie Sie Ihre Seite über GitHub Pages veröffentlichen.

1. Melden Sie sich zunächst bei [GitHub an](https://github.com/) und verifizieren Sie Ihre E-Mail-Adresse.
2. Als Nächstes müssen Sie ein [Repository erstellen](https://github.com/new), um Dateien zu speichern. Auf dieser Seite:
   1. Geben Sie im Feld _Repository name_ den Namen _username_.github.io ein, wobei _username_ Ihr Benutzername ist. Zum Beispiel würde unser Freund Bob Smith _bobsmith.github.io_ eingeben.
   2. Klicken Sie unten auf der Seite auf die Schaltfläche _Create repository_.
3. Auf der nächsten Seite finden Sie den Link _uploading an existing file_ und klicken Sie darauf. Dies sollte Sie zur Dateiupload-Seite bringen.
4. An diesem Punkt sollten Sie in der Lage sein, Dateien von Ihrem lokalen Dateisystem per Drag & Drop auf die Webseite zu ziehen, um sie in das GitHub-Repository hochzuladen. Führen Sie dazu die folgenden Schritte durch:
   1. Öffnen Sie ein Dateiexplorer-Fenster auf Ihrem Computer.
   2. Vergewissern Sie sich, dass Sie sowohl das Dateiexplorer- als auch das Webbrowser-Fenster sehen können — positionieren Sie sie nebeneinander auf Ihrem Bildschirm.
   3. Navigieren Sie im Dateiexplorer zu dem Ordner, der Ihre Beispielwebsite enthält.
      > [!NOTE]
      > Stellen Sie sicher, dass Ihr Ordner eine `index.html`-Datei enthält.
   4. Wählen Sie alle Dateien Ihrer Beispielwebsite aus (zum Beispiel mit der Tastenkombination <kbd>Strg</kbd> + <kbd>A</kbd>, oder <kbd>Cmd</kbd> + <kbd>A</kbd> auf macOS).
   5. Ziehen Sie die Dateien von Ihrem Dateiexplorer über den Bereich "Drag files here to add them to your repository" auf der GitHub-Seite.
   6. Die Umrandung und der Text des Bereichs ändern sich, um anzuzeigen, dass ein Ablegen möglich ist. Legen Sie die Dateien zu diesem Zeitpunkt ab.
   7. Klicken Sie unten auf der Seite auf die Schaltfläche _Commit changes_.
5. Navigieren Sie in Ihrem Browser zu _username_.github.io, um Ihre Website online zu sehen. Zum Beispiel für den Benutzernamen _chrisdavidmills_, gehen Sie zu [_chrisdavidmills_.github.io](https://chrisdavidmills.github.io/).

   > [!NOTE]
   > Es kann einige Minuten dauern, bis Ihre Website live geht. Wenn Ihre Website nicht sofort angezeigt wird, warten Sie ein paar Minuten und versuchen Sie es erneut.

Um mehr zu erfahren, siehe [GitHub Pages Hilfe](https://docs.github.com/en/pages/getting-started-with-github-pages).

## Weiterführende Literatur

- [Was ist ein Webserver](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server)
- [Verstehen von Domainnamen](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name)
- [Wie viel kostet es, etwas im Web zu tun?](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost)
- [Eine Website bereitstellen](https://www.codecademy.com/learn/deploy-a-website): Ein schönes Tutorial von Codecademy, das etwas weiter geht und einige zusätzliche Techniken zeigt.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}
