---
title: Veröffentlichung Ihrer Website
short-title: Publishing
slug: Learn_web_development/Getting_started/Your_first_website/Publishing_your_website
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}

Sobald Sie den Code geschrieben und die Dateien organisiert haben, die Ihre Website ausmachen, müssen Sie alles online stellen, damit die Leute sie finden können. Dieser Artikel erklärt, wie Sie Ihre Musterwebsite mit wenig Aufwand online bringen.

> [!NOTE]
> Sie benötigen eine Musterwebsite auf Ihrem lokalen Computer, um diesem Artikel folgen zu können. Diese sollte mindestens eine gültige `index.html` Datei enthalten. Wenn Sie dies noch nicht getan haben, empfehlen wir Ihnen, eine zu erstellen, indem Sie die vorherigen Artikel in diesem Modul durcharbeiten, beginnend mit [Wie wird Ihre Website aussehen?](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computerbetriebssystem, der grundlegenden Software, die Sie zum Erstellen einer Website verwenden werden, und Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die grundlegenden Werkzeuge und Konzepte, die mit der Veröffentlichung einer Website verbunden sind — Hosting, Domains, FTP-Programme.</li>
          <li>Welche alternativen Hosting-Optionen verfügbar sind, zum Beispiel Google App Engine, GitHub und CodePen.</li>
          <li>Veröffentlichung einer Website über GitHub Pages.</li>
          <li>Hosting, wie man es kauft und wie man eine Website online stellt.</li>
          <li>Wie man eine Domain registriert.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Welche Optionen gibt es?

Die Veröffentlichung einer Website ist ein komplexes Thema, da es viele Möglichkeiten gibt, es zu tun. Dieser Artikel versucht nicht, alle möglichen Methoden zu dokumentieren. Stattdessen erklärt er die Vor- und Nachteile von drei Ansätzen, die für Anfänger praktisch sind. Dann wird ein Verfahren erläutert, das für viele Leser sofort funktionieren kann.

### Hosting und einen Domainnamen erhalten

Um mehr Kontrolle über den Inhalt und das Erscheinungsbild der Website zu haben, entscheiden sich die meisten Fachleute/Unternehmen dafür, Webhosting und einen Domainnamen zu kaufen:

- Webhosting ist gemieteter Speicherplatz auf dem [Webserver](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server) eines Hosting-Unternehmens. Sie legen die Website-Dateien auf den Webserver. Der Webserver liefert die Website-Inhalte an die Website-Besucher.
- Ein [Domainname](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) ist die eindeutige Webadresse, unter der die Leute Ihre Website finden, wie z.B. `https://www.mozilla.org` oder `https://www.bbc.co.uk`. Sie können Ihren Domainnamen für so viele Jahre mieten, wie Sie möchten, von einem **Domain-Registrar**.

Wenn Sie Ihr Webhosting _und_ den Domainnamen von derselben Firma erhalten, sind diese in der Regel automatisch so konfiguriert, dass sie miteinander kommunizieren. Wenn Sie sie jedoch von verschiedenen Unternehmen beziehen oder Ihr Hosting zu einer anderen Firma wechseln möchten, müssen Sie ein wenig einrichten, um den Domainnamen auf den richtigen Server zu verweisen. Dies geschieht in der Regel, indem Sie sich auf der Website Ihres Domain-Registrars anmelden und die [Nameserver](https://kinsta.com/knowledgebase/what-is-a-nameserver/) Ihrer Domain auf die von Ihrem Hosting-Unternehmen bereitgestellten einstellen.

Unternehmen verwenden verschiedene Mechanismen, um Dateien auf ihre Webserver zu übertragen. Viele bieten mehr als eine Option an; typische Optionen umfassen:

- Eine Drag-and-Drop-Schnittstelle (ein Beispiel dafür sehen Sie später unter [Veröffentlichung über GitHub](#veröffentlichung_über_github)).
- Ein {{Glossary("FTP", "File Transfer Protocol (FTP)")}}-Programm. FTP-Programme variieren stark, aber in der Regel müssen Sie sich mit den von Ihrem Hosting-Unternehmen bereitgestellten Zugangsdaten (in der Regel Benutzername, Passwort, Hostname) mit Ihrem Webserver verbinden. Dann zeigt das Programm Ihnen Ihre lokalen Dateien und die Dateien des Webservers in zwei Fenstern an und bietet Ihnen eine Möglichkeit, Dateien hin und her zu übertragen.
- Die Quellcodes der Website in einem GitHub-Repo (siehe unten) zu speichern und dem Hosting-Unternehmen Zugriff zu gewähren, damit es die Quelle abrufen, bei Bedarf erstellen und veröffentlichen kann.
- Einige Unternehmen stellen [Kommandozeilen-Tools](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) zur Verfügung, die Sie verwenden können, um Ihre Dateien zu übertragen.

#### Tipps zum Finden von Hosting und Domains

- MDN fördert keine spezifischen kommerziellen Hosting-Unternehmen oder Domain-Registrare. Um Hosting-Unternehmen und Registrare zu finden, suchen Sie einfach nach "Webhosting" und "Domainnamen". Alle Registrare werden über eine Funktion verfügen, mit der Sie überprüfen können, ob der gewünschte Domainname verfügbar ist.
- Ihr {{Glossary("ISP", "Internetdienstanbieter")}} zu Hause oder im Büro kann eine begrenzte Hostingmöglichkeit für eine kleine Website bieten. Der verfügbare Funktionsumfang wird begrenzt sein, aber es könnte perfekt für Ihre ersten Experimente sein.
- Es gibt auch kostenlose Dienste wie [Neocities](https://neocities.org/), [Google Sites](https://sites.google.com/) und [WordPress](https://wordpress.com/). Solche Dienste können im Umfang begrenzt sein, sind aber gut genug für erste Experimente.

### Verwendung eines Online-Tools wie GitHub oder Google App Engine

Einige Tools erlauben es Ihnen, Ihre Website online zu veröffentlichen:

- [GitHub](https://github.com/) ist eine "soziale Kodierungs"-Seite. Sie ermöglicht es Ihnen, Code-Repositories zur Speicherung im **Versionskontrollsystem** [Git](https://git-scm.com/) hochzuladen. Sie können dann an Codeprojekten zusammenarbeiten, und das System ist standardmäßig Open-Source, was bedeutet, dass jeder auf der Welt Ihren GitHub-Code finden, verwenden, daraus lernen und ihn verbessern kann. GitHub hat eine sehr nützliche Funktion namens [GitHub Pages](https://pages.github.com/), die es Ihnen ermöglicht, Website-Code live im Web zu zeigen.
- [Google App Engine](https://cloud.google.com/appengine) ist eine leistungsstarke Plattform, die es Ihnen ermöglicht, Anwendungen auf der Infrastruktur von Google zu erstellen und auszuführen — egal, ob Sie eine mehrstufige Webanwendung von Grund auf bauen oder eine statische Website hosten müssen. Weitere Informationen finden Sie unter [Wie kann man seine Website auf Google App Engine hosten?](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_do_you_host_your_website_on_Google_App_Engine).

Diese Optionen sind in der Regel kostenlos, mit einem begrenzten Funktionsumfang.

### Verwendung einer webbasierten IDE wie CodePen

Es gibt eine Reihe von Webanwendungen, die eine Entwicklungsumgebung für Websites nachahmen und es Ihnen ermöglichen, HTML, CSS und JavaScript zu schreiben, die dann gerendert und in einem Ausgabefenster angezeigt werden. Diese Tools sind in der Regel einfach zu bedienen, großartig zum Lernen, gut zum Teilen von Code (zum Beispiel, wenn Sie eine Technik teilen oder um Debugging-Hilfe von Kollegen in einem anderen Büro bitten möchten) und kostenlos (für grundlegende Funktionen). Sie hosten Ihre gerenderte Seite unter einer einzigartigen Webadresse. Allerdings sind die Funktionen begrenzt, und diese Apps bieten oft keinen Speicherplatz für Ressourcen (wie Bilder).

Probieren Sie einige dieser Beispiele aus, um herauszufinden, welches am besten für Sie funktioniert:

- [JSFiddle](https://jsfiddle.net/)
- [Glitch](https://glitch.com/)
- [JS Bin](https://jsbin.com/)
- [CodePen](https://codepen.io/)

## Veröffentlichung über GitHub

Werfen wir nun einen Blick darauf, wie Sie Ihre Website über GitHub Pages veröffentlichen.

1. Melden Sie sich zuerst bei [GitHub](https://github.com/) an und bestätigen Sie Ihre E-Mail-Adresse.
2. Als Nächstes müssen Sie ein [Repository erstellen](https://github.com/new), in dem Sie Dateien speichern können. Auf dieser Seite:
   1. Geben Sie im Feld _Repository name_ _username_.github.io ein, wobei _username_ Ihr Benutzername ist. Unser Freund Bob Smith würde zum Beispiel _bobsmith.github.io_ eingeben.
   2. Klicken Sie auf die Schaltfläche _Create repository_ am unteren Rand der Seite.
3. Auf der nächsten Seite suchen Sie den Link zum _Hochladen einer vorhandenen Datei_ und klicken darauf. Dies sollte Sie zur Datei-Upload-Seite bringen.
4. An diesem Punkt sollten Sie in der Lage sein, Dateien aus Ihrem lokalen Dateisystem auf die Webseite zu ziehen und abzulegen, um sie im GitHub-Repository hochzuladen. Gehen Sie dazu wie folgt vor:
   1. Öffnen Sie ein Dateiexplorer-/Finder-Fenster auf Ihrem Computer.
   2. Stellen Sie sicher, dass Sie sowohl das Dateiexplorerfenster _als auch_ das Webbrowserfenster sehen können — positionieren Sie sie nebeneinander auf Ihrem Bildschirm.
   3. Navigieren Sie im Dateiexplorerfenster zu dem Ordner, der Ihre Musterwebsite enthält.
      > [!NOTE]
      > Stellen Sie sicher, dass Ihr Ordner eine `index.html` Datei enthält.
   4. Wählen Sie alle Dateien Ihrer Musterwebsite aus (z.B. mit der Tastenkombination <kbd>Strg</kbd> + <kbd>A</kbd>, oder <kbd>Cmd</kbd> + <kbd>A</kbd> auf macOS).
   5. Ziehen Sie die Dateien aus Ihrem Dateiexplorer über den Bereich "Drag files here to add them to your repository" auf der GitHub-Seite.
   6. Der Rand und der Text des Bereichs ändern sich, um anzuzeigen, dass ein Ablegen möglich ist. Lassen Sie die Dateien an dieser Stelle fallen.
   7. Klicken Sie auf die Schaltfläche _Commit changes_ am unteren Rand der Seite.
5. Navigieren Sie Ihren Browser zu _username_.github.io, um Ihre Website online zu sehen. Zum Beispiel für den Benutzernamen _chrisdavidmills_, gehen Sie zu [_chrisdavidmills_.github.io](https://chrisdavidmills.github.io/).

   > [!NOTE]
   > Es kann einige Minuten dauern, bis Ihre Website live geht. Wenn Ihre Website nicht sofort angezeigt wird, warten Sie einige Minuten und versuchen Sie es erneut.

Um mehr zu erfahren, sehen Sie sich die [GitHub Pages Hilfe](https://docs.github.com/en/pages/getting-started-with-github-pages) an.

## Weiterführende Literatur

- [Was ist ein Webserver?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server)
- [Verständnis von Domainnamen](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name)
- [Wie viel kostet es, etwas im Internet zu tun?](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost)
- [Eine Website bereitstellen](https://www.codecademy.com/learn/deploy-a-website): Ein schönes Tutorial von Codecademy, das noch etwas weiter geht und einige zusätzliche Techniken zeigt.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}
