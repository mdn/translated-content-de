---
title: Veröffentlichung Ihrer Website
short-title: Publishing
slug: Learn_web_development/Getting_started/Your_first_website/Publishing_your_website
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}

Sobald Sie den Code geschrieben und die Dateien organisiert haben, die Ihre Website ausmachen, müssen Sie alles online stellen, damit andere es finden können. Dieser Artikel erklärt, wie Sie Ihre Beispielwebsite mit geringem Aufwand online schalten können.

> [!NOTE]
> Sie benötigen eine Beispielwebsite auf Ihrem lokalen Computer, um diesem Artikel folgen zu können. Sie sollte mindestens eine gültige `index.html`-Datei enthalten. Falls Sie dies noch nicht getan haben, empfehlen wir Ihnen, eine zu erstellen, indem Sie die vorherigen Artikel in diesem Modul durcharbeiten, beginnend mit [Wie wird Ihre Website aussehen?](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse über Ihr Computerbetriebssystem, die grundlegende Software, die Sie zum Erstellen einer Website verwenden werden, und Dateisysteme.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die grundlegenden Werkzeuge und Konzepte, die mit der Veröffentlichung einer Website verbunden sind — Hosting, Domains, FTP-Programme.</li>
          <li>Welche alternativen Hosting-Optionen verfügbar sind, zum Beispiel Google App Engine, GitHub und CodePen.</li>
          <li>Veröffentlichung einer Website mit GitHub Pages.</li>
          <li>Hosting, wie man es kauft, und wie man eine Website online stellt.</li>
          <li>Wie man eine Domain registriert.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Welche Optionen gibt es?

Die Veröffentlichung einer Website ist ein komplexes Thema, weil es viele Möglichkeiten gibt, dies zu tun. Dieser Artikel versucht nicht, alle möglichen Methoden zu dokumentieren. Stattdessen erklärt er die Vor- und Nachteile von drei Ansätzen, die für Anfänger praktikabel sind. Anschließend wird eine Methode beschrieben, die für viele Leser sofort funktionieren kann.

### Hosting und einen Domainnamen bekommen

Um mehr Kontrolle über Inhalt und Erscheinungsbild der Website zu haben, entscheiden sich die meisten Profis/Unternehmen dafür, Webhosting und einen Domainnamen zu kaufen:

- Webhosting ist gemieteter Speicherplatz auf dem [Webserver](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server) eines Hosting-Unternehmens. Sie laden die Website-Dateien auf den Webserver. Der Webserver stellt den Website-Besuchern die Website-Inhalte bereit.
- Ein [Domainname](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) ist die eindeutige Webadresse, unter der Menschen Ihre Website finden, wie zum Beispiel `https://www.mozilla.org` oder `https://www.bbc.co.uk`. Sie können Ihren Domainnamen für so viele Jahre mieten, wie Sie wollen, von einem **Domainregistrar**.

Wenn Sie Ihr Webhosting _und_ Ihren Domainnamen von derselben Firma beziehen, werden sie in der Regel automatisch so konfiguriert, dass sie miteinander kommunizieren. Sollte dies jedoch von verschiedenen Firmen stammen oder wenn Sie Ihr Hosting zu einer anderen Firma wechseln möchten, müssen Sie ein wenig einrichten, um den Domainnamen auf den richtigen Server zu verweisen. Dies geschieht normalerweise, indem Sie sich auf der Website Ihres Domainregistrars anmelden und die [Nameserver](https://kinsta.com/knowledgebase/was-ist-ein-nameserver/) auf die von Ihrem Hosting-Anbieter bereitgestellten ändern.

Unternehmen nutzen verschiedene Mechanismen, um Dateien auf ihre Webserver zu übertragen. Viele bieten mehrere Optionen an; typische Optionen umfassen:

- Eine Drag-and-Drop-Oberfläche (ein Beispiel sehen Sie später beim [Veröffentlichen über GitHub](#veröffentlichung_über_github)).
- Ein {{Glossary("FTP", "File Transfer Protocol (FTP)")}}-Programm. FTP-Programme unterscheiden sich stark, aber im Allgemeinen müssen Sie sich mit den von Ihrem Hosting-Anbieter bereitgestellten Details (normalerweise Benutzername, Passwort, Hostname) mit Ihrem Webserver verbinden. Dann zeigt das Programm Ihnen Ihre lokalen Dateien und die Dateien des Webservers in zwei Fenstern an und bietet eine Möglichkeit, Dateien hin- und herzuschieben.
- Den Quellcode der Website in einem GitHub-Repository aufzubewahren (siehe unten) und dem Hosting-Anbieter Zugriff zu gewähren, damit dieser den Quellcode abrufen, bei Bedarf bauen und veröffentlichen kann.
- Einige Unternehmen stellen [Kommandozeilen-Tools](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) bereit, die Sie verwenden können, um Ihre Dateien zu übertragen.

#### Tipps zur Suche nach Hosting und Domains

- MDN bewirbt keine spezifischen kommerziellen Hosting-Unternehmen oder Domainregistrare. Um Hosting-Unternehmen und Registrare zu finden, suchen Sie einfach nach „Webhosting“ und „Domainnamen“. Alle Registrare werden eine Funktion haben, die Ihnen erlaubt zu überprüfen, ob der gewünschte Domainname verfügbar ist.
- Ihr {{Glossary("ISP", "Internetdienstanbieter")}} zu Hause oder im Büro könnte eine begrenzte Hosting-Option für eine kleine Website bieten. Die verfügbaren Funktionen werden begrenzt sein, aber es könnte perfekt für Ihre ersten Experimente sein.
- Es gibt auch kostenlose Dienste wie [Neocities](https://neocities.org/), [Google Sites](https://sites.google.com/) und [WordPress](https://wordpress.com/). Solche Dienste können im Umfang begrenzt sein, sind aber für erste Experimente gut geeignet.

### Verwendung eines Online-Tools wie GitHub oder Google App Engine

Einige Tools ermöglichen es Ihnen, Ihre Website online zu veröffentlichen:

- [GitHub](https://github.com/) ist eine „soziale Coding“-Plattform. Sie ermöglicht es Ihnen, Code-Repositories zur Speicherung im [Git](https://git-scm.com/)-**Versionskontrollsystem** hochzuladen. Sie können dann an Code-Projekten zusammenarbeiten, und das System ist standardmäßig Open Source, was bedeutet, dass jeder auf der Welt Ihren GitHub-Code finden, verwenden, davon lernen und verbessern kann. GitHub hat eine sehr nützliche Funktion namens [GitHub Pages](https://pages.github.com/), die es Ihnen ermöglicht, Website-Code live im Internet zugänglich zu machen.
- [Google App Engine](https://cloud.google.com/appengine) ist eine leistungsstarke Plattform, die es Ihnen ermöglicht, Anwendungen in Googles Infrastruktur zu erstellen und auszuführen – egal ob Sie eine mehrstufige Webanwendung von Grund auf neu erstellen oder eine statische Website hosten möchten. Weitere Informationen finden Sie unter [Wie hostet man seine Website auf Google App Engine?](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_do_you_host_your_website_on_Google_App_Engine).

Diese Optionen sind in der Regel kostenlos, mit einem begrenzten Funktionsumfang.

### Verwendung einer webbasierten IDE wie CodePen

Es gibt eine Reihe von Webanwendungen, die eine Website-Entwicklungsumgebung emulieren und es Ihnen erlauben, HTML, CSS und JavaScript zu schreiben, die dann gerendert und in einem Ausgabebereich angezeigt werden. Diese Tools sind im Allgemeinen einfach zu bedienen, großartig zum Lernen, gut zum Teilen von Code (zum Beispiel, wenn Sie eine Technik mit Kollegen in einem anderen Büro teilen oder Debugging-Hilfe anfordern möchten) und kostenlos (für Grundfunktionen). Sie hosten Ihre gerenderte Seite unter einer einzigartigen Webadresse. Allerdings sind die Funktionen begrenzt, und diese Apps bieten oft keinen Hosting-Speicherplatz für Assets (wie Bilder).

Versuchen Sie, mit einigen dieser Beispiele zu experimentieren, um herauszufinden, welches am besten für Sie funktioniert:

- [JSFiddle](https://jsfiddle.net/)
- [Glitch](https://glitch.com/)
- [JS Bin](https://jsbin.com/)
- [CodePen](https://codepen.io/)

## Veröffentlichung über GitHub

Untersuchen wir nun, wie Sie Ihre Website über GitHub Pages veröffentlichen können.

1. Melden Sie sich zunächst bei [GitHub](https://github.com/) an und bestätigen Sie Ihre E-Mail-Adresse.
2. Als nächstes müssen Sie ein [Repository erstellen](https://github.com/new), um Dateien zu speichern. Auf dieser Seite:
   1. Geben Sie im Feld _Repository name_ _benutzername_.github.io ein, wobei _benutzername_ Ihr Benutzername ist. Unser Freund Bob Smith würde zum Beispiel _bobsmith.github.io_ eingeben.
   2. Klicken Sie auf die Schaltfläche _Create repository_ am unteren Rand der Seite.
3. Finden Sie auf der nächsten Seite den Link _uploading an existing file_ und klicken Sie darauf. Dies sollte Sie zur Dateiupload-Seite bringen.
4. An diesem Punkt sollten Sie in der Lage sein, Dateien von Ihrem lokalen Dateisystem auf die Webseite zu ziehen und abzulegen, um sie im GitHub-Repository hochzuladen. Um dies zu tun:
   1. Öffnen Sie ein Datei-Explorer/Finder-Fenster auf Ihrem Computer.
   2. Stellen Sie sicher, dass Sie sowohl das Datei-Explorer- als auch das Webbrowser-Fenster sehen können — platzieren Sie sie nebeneinander auf Ihrem Bildschirm.
   3. Navigieren Sie das Datei-Explorer-Fenster zum Ordner, der Ihre Beispielwebsite enthält.
      > [!NOTE]
      > Stellen Sie sicher, dass Ihr Ordner eine `index.html`-Datei enthält.
   4. Wählen Sie alle Dateien Ihrer Beispielwebsite aus (zum Beispiel mit dem Tastenkürzel <kbd>Ctrl</kbd> + <kbd>A</kbd>, oder <kbd>Cmd</kbd> + <kbd>A</kbd> auf macOS).
   5. Ziehen Sie die Dateien von Ihrem Datei-Explorer über den Bereich „Drag files here to add them to your repository“ auf der GitHub-Seite.
   6. Der Rahmen und der Text des Bereichs ändern sich, um anzuzeigen, dass ein Ablegen möglich ist. Lassen Sie die Dateien an dieser Stelle fallen.
   7. Klicken Sie auf die Schaltfläche _Commit changes_ am unteren Rand der Seite.
5. Navigieren Sie Ihren Browser zu _benutzername_.github.io, um Ihre Website online zu sehen. Zum Beispiel, für den Benutzernamen _chrisdavidmills_, gehen Sie zu [_chrisdavidmills_.github.io](https://chrisdavidmills.github.io/).

   > [!NOTE]
   > Es kann einige Minuten dauern, bis Ihre Website live geschaltet wird. Wenn Ihre Website nicht sofort angezeigt wird, warten Sie einige Minuten und versuchen Sie es erneut.

Um mehr zu erfahren, sehen Sie sich die [GitHub Pages Hilfe](https://docs.github.com/en/pages/getting-started-with-github-pages) an.

## Weiterführende Lektüre

- [Was ist ein Webserver](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server)
- [Domainnamen verstehen](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name)
- [Wie viel kostet es, etwas im Internet zu machen?](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost)
- [Deploy a Website](https://www.codecademy.com/learn/deploy-a-website): Ein toller Leitfaden von Codecademy, der ein wenig weiter geht und einige zusätzliche Techniken zeigt.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}
