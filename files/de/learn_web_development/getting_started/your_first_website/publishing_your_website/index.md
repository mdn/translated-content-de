---
title: Veröffentlichung Ihrer Website
short-title: Publishing
slug: Learn_web_development/Getting_started/Your_first_website/Publishing_your_website
l10n:
  sourceCommit: 427efbee9e0da53517f45420af87a66a2a6b6e19
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}

Sobald Sie den Code geschrieben und die Dateien organisiert haben, aus denen Ihre Website besteht, müssen Sie alles online stellen, damit die Menschen sie finden können. Dieser Artikel erklärt, wie Sie Ihre Beispiel-Website mit geringem Aufwand online stellen können.

> [!NOTE]
> Sie benötigen eine Beispiel-Website, die auf Ihrem lokalen Computer verfügbar ist, um den Anweisungen in diesem Artikel folgen zu können. Sie sollte mindestens eine gültige `index.html`-Datei enthalten. Falls Sie dies noch nicht getan haben, empfehlen wir Ihnen, eine zu erstellen, indem Sie die vorherigen Artikel in diesem Modul durchgehen, beginnend mit [Wie wird Ihre Website aussehen?](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit dem Betriebssystem Ihres Computers, der grundlegenden Software, die Sie zum Erstellen einer Website verwenden werden, und Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die grundlegenden Werkzeuge und Konzepte zur Veröffentlichung einer Website — Hosting, Domains, FTP-Programme.</li>
          <li>Welche alternativen Hosting-Optionen verfügbar sind, beispielsweise Google App Engine, GitHub und CodePen.</li>
          <li>Veröffentlichen einer Website mithilfe von GitHub Pages.</li>
          <li>Hosting, wie man es kauft und wie man eine Website online stellt.</li>
          <li>Wie man eine Domain registriert.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was sind die Optionen?

Die Veröffentlichung einer Website ist ein komplexes Thema, da es viele Möglichkeiten gibt, dies zu tun. Dieser Artikel versucht nicht, alle möglichen Methoden zu dokumentieren. Stattdessen erklärt er die Vor- und Nachteile von drei Ansätzen, die für Anfänger praktisch sind. Anschließend wird eine Methode durchgegangen, die für viele Leser sofort funktionieren kann.

### Hosting und Domainnamen erwerben

Um mehr Kontrolle über Inhalte und das Erscheinungsbild der Website zu haben, wählen die meisten Fachleute/Unternehmen den Kauf von Webhosting und einem Domainnamen:

- Webhosting ist angemieteter Speicherplatz auf einem [Webserver](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server) eines Hosting-Unternehmens. Sie platzieren die Website-Dateien auf dem Webserver. Der Webserver stellt den Website-Inhalt den Besuchern der Website zur Verfügung.
- Ein [Domainname](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) ist die eindeutige Webadresse, unter der Menschen Ihre Website finden, wie z.B. `https://www.mozilla.org` oder `https://www.bbc.co.uk`. Sie können Ihren Domainnamen für so viele Jahre mieten, wie Sie möchten, von einem **Domain-Registrar**.

Wenn Sie Ihr Webhosting _und_ Ihren Domainnamen von demselben Unternehmen erhalten, sind sie in der Regel automatisch so konfiguriert, dass sie miteinander kommunizieren. Wenn Sie sie jedoch von verschiedenen Unternehmen erhalten oder Ihr Hosting zu einem anderen Unternehmen ändern möchten, müssen Sie einige Einstellungen vornehmen, um den Domainnamen auf den richtigen Server zu verweisen. Dies geschieht in der Regel durch Einloggen auf der Website Ihres Domain-Registrars und das Festlegen der [Nameserver](https://kinsta.com/knowledgebase/what-is-a-nameserver/) Ihrer Domain auf die von Ihrem Hosting-Unternehmen bereitgestellten.

Unternehmen verwenden verschiedene Mechanismen, um Dateien auf ihre Webserver zu übertragen. Viele bieten mehr als eine Option an; typische Optionen sind:

- Eine Drag-and-Drop-Oberfläche (ein Beispiel hierfür sehen Sie später im Abschnitt [Veröffentlichung über GitHub](#veröffentlichung_über_github)).
- Ein {{Glossary("FTP", "File Transfer Protocol (FTP)")}}-Programm. FTP-Programme unterscheiden sich stark, aber im Allgemeinen müssen Sie sich mit den von Ihrem Hosting-Unternehmen bereitgestellten Angaben mit Ihrem Webserver verbinden (typischerweise Benutzername, Passwort, Hostname). Dann zeigt das Programm Ihnen Ihre lokalen Dateien und die Dateien des Webservers in zwei Fenstern an und bietet eine Möglichkeit, Dateien hin und her zu übertragen.
- Das Behalten des Website-Quellcodes in einem GitHub-Repository (siehe unten) und das Gewähren von Zugriff für das Hosting-Unternehmen, damit es den Quellcode abrufen, bei Bedarf bauen und veröffentlichen kann.
- Einige Unternehmen stellen [Kommandozeilenwerkzeuge](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) zur Verfügung, die Sie zum Übertragen Ihrer Dateien verwenden können.

#### Tipps zur Suche nach Hosting und Domains

- MDN fördert keine spezifischen kommerziellen Hosting-Unternehmen oder Domainnamen-Registrar. Um Hosting-Unternehmen und Registrar zu finden, suchen Sie einfach nach "Webhosting" und "Domainnamen". Alle Registrar bieten eine Funktion an, um zu überprüfen, ob der gewünschte Domainname verfügbar ist.
- Ihr Heim- oder Büro-{{Glossary("ISP", "Internetdienstanbieter")}} bietet möglicherweise eingeschränktes Hosting für eine kleine Website. Das verfügbare Funktionsset ist begrenzt, könnte aber perfekt für Ihre ersten Experimente sein.
- Es gibt auch kostenlose Dienste wie [Neocities](https://neocities.org/), [Google Sites](https://sites.google.com/) und [WordPress](https://wordpress.com/). Solche Dienste können in ihrem Umfang begrenzt sein, sind aber ausreichend für erste Experimente.

### Verwendung eines Online-Tools wie GitHub oder Google App Engine

Einige Tools ermöglichen es Ihnen, Ihre Website online zu veröffentlichen:

- [GitHub](https://github.com/) ist eine "soziales Codieren"-Plattform. Sie ermöglicht es Ihnen, Code-Repositories für die Speicherung im [Git](https://git-scm.com/)-**Versionskontrollsystem** hochzuladen. Sie können dann an Code-Projekten zusammenarbeiten, und das System ist standardmäßig Open-Source, was bedeutet, dass jeder auf der Welt Ihren GitHub-Code finden, verwenden, daraus lernen und ihn verbessern kann. GitHub bietet eine sehr nützliche Funktion namens [GitHub Pages](https://pages.github.com/), die es Ihnen ermöglicht, Website-Code live im Web zu zeigen.
- [Google App Engine](https://cloud.google.com/appengine) ist eine leistungsstarke Plattform, die es Ihnen ermöglicht, Anwendungen auf der Infrastruktur von Google zu erstellen und zu betreiben – egal, ob Sie eine mehrschichtige Webanwendung von Grund auf neu erstellen oder eine statische Website hosten müssen. Siehe [Wie hostet man seine Website auf Google App Engine?](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_do_you_host_your_website_on_Google_App_Engine) für weitere Informationen.

Diese Optionen sind in der Regel kostenlos, mit einem begrenzten Funktionsumfang.

### Verwendung einer webbasierten IDE wie CodePen

Es gibt eine Vielzahl von Web-Apps, die eine Website-Entwicklungsumgebung emulieren und es Ihnen ermöglichen, HTML, CSS und JavaScript zu schreiben, die dann gerendert und in einem Ausgabefenster angezeigt werden. Im Allgemeinen sind diese Tools einfach zu bedienen, großartig zum Lernen, gut zum Teilen von Code (zum Beispiel, wenn Sie eine Technik teilen oder Hilfe beim Debuggen von Kollegen in einem anderen Büro anfragen möchten) und kostenlos (für grundlegende Funktionen). Sie hosten Ihre gerenderte Seite unter einer einzigartigen Webadresse. Allerdings sind die Funktionen begrenzt, und diese Apps bieten oft keinen Hosting-Bereich für Assets (wie Bilder).

Probieren Sie einige dieser Beispiele aus, um herauszufinden, welches am besten für Sie funktioniert:

- [Scrimba](https://scrimba.com/new?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
- [JSFiddle](https://jsfiddle.net/)
- [Glitch](https://glitch.com/)
- [JS Bin](https://jsbin.com/)
- [CodePen](https://codepen.io/)

## Veröffentlichung über GitHub

Schauen wir uns nun an, wie Sie Ihre Website über GitHub Pages veröffentlichen.

1. Zuerst [melden Sie sich bei GitHub an](https://github.com/) und verifizieren Ihre E-Mail-Adresse.
2. Als Nächstes müssen Sie [ein Repository erstellen](https://github.com/new), um Dateien zu speichern. Auf dieser Seite:
   1. Geben Sie im Feld _Repository-Name_ _username_.github.io ein, wobei _username_ Ihr Benutzername ist. Zum Beispiel würde unser Freund Bob Smith _bobsmith.github.io_ eingeben.
   2. Klicken Sie auf den Button _Create Repository_ am unteren Rand der Seite.
3. Auf der nächsten Seite finden Sie den Link _uploading an existing file_ und klicken darauf. Dies sollte Sie zur Datei-Upload-Seite bringen.
4. Zu diesem Zeitpunkt sollten Sie in der Lage sein, Dateien von Ihrem lokalen Dateisystem auf die Webseite zu ziehen und abzulegen, um sie in das GitHub-Repository hochzuladen. Um dies zu tun:
   1. Öffnen Sie ein Datei-Explorer-/Finder-Fenster auf Ihrem Computer.
   2. Stellen Sie sicher, dass Sie sowohl das Datei-Explorer- als auch das Webbrowser-Fenster sehen können — positionieren Sie sie nebeneinander auf Ihrem Bildschirm.
   3. Navigieren Sie im Datei-Explorer-Fenster zum Ordner, der Ihre Beispiel-Website enthält.
      > [!NOTE]
      > Stellen Sie sicher, dass Ihr Ordner eine `index.html`-Datei enthält.
   4. Wählen Sie alle Dateien Ihrer Beispiel-Website aus (zum Beispiel mit der Tastenkombination <kbd>Strg</kbd> + <kbd>A</kbd> oder <kbd>Cmd</kbd> + <kbd>A</kbd> auf macOS).
   5. Ziehen Sie die Dateien von Ihrem Datei-Explorer über den Abschnitt "Drag files here to add them to your repository" auf der GitHub-Seite.
   6. Der Rahmen des Abschnitts und der Text ändern sich, um anzuzeigen, dass ein Ablegen möglich ist. Lassen Sie die Dateien an diesem Punkt los.
   7. Klicken Sie auf den Button _Commit changes_ am unteren Rand der Seite.
5. Navigieren Sie mit Ihrem Browser zu _username_.github.io, um Ihre Website online zu sehen. Zum Beispiel, für den Benutzernamen _chrisdavidmills_, gehen Sie zu [_chrisdavidmills_.github.io](https://chrisdavidmills.github.io/).

   > [!NOTE]
   > Es kann einige Minuten dauern, bis Ihre Website live geht. Wenn Ihre Website nicht sofort angezeigt wird, warten Sie ein paar Minuten und versuchen Sie es erneut.

Um mehr zu erfahren, siehe [GitHub Pages Hilfe](https://docs.github.com/en/pages/getting-started-with-github-pages).

## Weiterführende Literatur

- [Was ist ein Webserver](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server)
- [Verstehen von Domainnamen](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name)
- [Wie viel kostet es, etwas im Web zu tun?](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost)
- [Eine Website bereitstellen](https://www.codecademy.com/learn/deploy-a-website): Ein schönes Tutorial von Codecademy, das weiter geht und einige zusätzliche Techniken zeigt.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}
