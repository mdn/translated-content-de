---
title: Ihre Website veröffentlichen
short-title: Publishing
slug: Learn_web_development/Getting_started/Your_first_website/Publishing_your_website
l10n:
  sourceCommit: e3a2272d272f21ea38e5fff9bd6ccec2d0dfb1a8
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}

Sobald Sie den Code geschrieben und die Dateien Ihrer Website organisiert haben, müssen Sie alles online stellen, damit andere die Website finden können. Dieser Artikel erklärt, wie Sie Ihre Beispielwebsite mit wenig Aufwand online veröffentlichen.

> [!NOTE]
> Sie benötigen eine Beispielwebsite auf Ihrem lokalen Computer, um diesem Artikel folgen zu können. Sie sollte mindestens eine gültige Datei `index.html` enthalten. Falls Sie dies noch nicht getan haben, empfehlen wir Ihnen, eine solche Website zu erstellen, indem Sie die vorherigen Artikel in diesem Modul durcharbeiten, beginnend mit [Wie wird Ihre Website aussehen?](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Kenntnisse Ihres Computerbetriebssystems, der grundlegenden Software, die Sie zum Erstellen einer Website verwenden, sowie von Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Die grundlegenden Werkzeuge und Konzepte zur Veröffentlichung einer Website — Hosting, Domains, FTP-Programme.</li>
          <li>Welche alternativen Hosting-Optionen verfügbar sind, zum Beispiel Google App Engine, GitHub und CodePen.</li>
          <li>Veröffentlichen einer Website mit GitHub Pages.</li>
          <li>Hosting, wie Sie es kaufen und wie Sie eine Website online stellen.</li>
          <li>Wie Sie eine Domain registrieren.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Welche Optionen gibt es?

Das Veröffentlichen einer Website ist ein komplexes Thema, da es viele Möglichkeiten dafür gibt. Dieser Artikel versucht nicht, alle möglichen Methoden zu dokumentieren. Stattdessen erläutert er die Vor- und Nachteile von drei Ansätzen, die für Anfänger praktisch sind. Anschließend wird eine Methode Schritt für Schritt erläutert, die für viele Leser sofort funktionieren kann.

### Hosting und einen Domainnamen erwerben

Um mehr Kontrolle über Inhalte und das Erscheinungsbild der Website zu haben, entscheiden sich die meisten Fachleute und Unternehmen dafür, Webhosting und einen Domainnamen zu kaufen:

- Webhosting ist gemieteter Speicherplatz auf dem [Webserver](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server) eines Hosting-Unternehmens. Sie legen die Dateien der Website auf dem Webserver ab. Der Webserver stellt Besuchern die Inhalte der Website bereit.
- Ein [Domainname](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) ist die eindeutige Webadresse, unter der Personen Ihre Website finden, beispielsweise `https://www.mozilla.org` oder `https://www.bbc.co.uk`. Sie können Ihren Domainnamen für beliebig viele Jahre bei einem **Domain-Registrar** mieten.

Wenn Sie Ihr Webhosting _und_ Ihren Domainnamen vom selben Unternehmen beziehen, werden sie in der Regel automatisch so konfiguriert, dass sie miteinander kommunizieren. Wenn Sie sie jedoch von verschiedenen Unternehmen beziehen oder Ihr Hosting zu einem anderen Unternehmen wechseln möchten, müssen Sie einige Einstellungen vornehmen, damit der Domainname auf den richtigen Server verweist. Dadurch sehen Personen Ihre Website, wenn sie zu dieser Webadresse navigieren. Dies geschieht in der Regel, indem Sie sich auf der Website Ihres Domain-Registrars anmelden und die [Nameserver](https://kinsta.com/blog/what-is-a-nameserver/) Ihrer Domain auf diejenigen einstellen, die von Ihrem Hosting-Unternehmen bereitgestellt werden.

Unternehmen verwenden verschiedene Mechanismen, um Dateien auf ihre Webserver zu übertragen. Viele bieten mehr als eine Option an; typische Optionen sind:

- Eine Drag-and-Drop-Oberfläche (ein Beispiel dafür sehen Sie später unter [Veröffentlichen über GitHub](#veröffentlichen_über_github)).
- Ein Programm für das {{Glossary("FTP", "File Transfer Protocol (FTP)")}}. FTP-Programme unterscheiden sich stark, aber im Allgemeinen müssen Sie sich mit Angaben verbinden, die Ihr Hosting-Unternehmen bereitstellt (typischerweise Benutzername, Passwort, Hostname). Anschließend zeigt das Programm Ihre lokalen Dateien und die Dateien des Webservers in zwei Fenstern an und bietet Ihnen eine Möglichkeit, Dateien in beide Richtungen zu übertragen.
- Den Quellcode der Website in einem GitHub-Repository (siehe unten) speichern und dem Hosting-Unternehmen Zugriff gewähren, damit es die Quellen abrufen, bei Bedarf erstellen und veröffentlichen kann.
- Einige Unternehmen stellen [Befehlszeilenwerkzeuge](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) bereit, mit denen Sie Ihre Dateien übertragen können.

#### Tipps zum Finden von Hosting und Domains

- MDN bewirbt keine bestimmten kommerziellen Hosting-Unternehmen oder Domain-Registrare. Um Hosting-Unternehmen und Registrare zu finden, suchen Sie einfach nach „Webhosting“ und „Domainnamen“. Alle Registrare bieten eine Funktion, mit der Sie prüfen können, ob der gewünschte Domainname verfügbar ist.
- Ihr {{Glossary("ISP", "Internetanbieter")}} zu Hause oder im Büro bietet möglicherweise begrenztes Hosting für eine kleine Website an. Der verfügbare Funktionsumfang wird begrenzt sein, könnte aber für Ihre ersten Experimente perfekt sein.
- Es sind auch kostenlose Dienste wie [Neocities](https://neocities.org/), [Google Sites](https://sites.google.com/) und [WordPress](https://wordpress.com/) verfügbar. Solche Dienste können einen begrenzten Umfang haben, reichen aber für erste Experimente aus.

### Ein Online-Werkzeug verwenden

Einige Werkzeuge ermöglichen es Ihnen, Ihre Website online zu veröffentlichen:

- [GitHub](https://github.com/) ist eine Website für „Social Coding“. Sie ermöglicht Ihnen, Code-Repositories zur Speicherung im **Versionskontrollsystem** [Git](https://git-scm.com/) hochzuladen. Anschließend können Sie an Codeprojekten zusammenarbeiten, und das System ist standardmäßig Open Source, was bedeutet, dass jeder auf der Welt Ihren GitHub-Code finden, verwenden, daraus lernen und ihn verbessern kann. GitHub verfügt über eine sehr nützliche Funktion namens [GitHub Pages](https://pages.github.com/), mit der Sie Website-Code live im Web bereitstellen können.
- [Netlify](https://www.netlify.com/) ist eine Webhosting-Plattform, die Hosting für statische Websites direkt aus Ihrem GitHub-Repository bereitstellt. Außerdem bietet sie eine Reihe zusätzlicher Funktionen, beispielsweise Deployment-Vorschauen, serverlose Funktionen und Formularverarbeitung.
- [Fly.io](https://fly.io/) ist eine Plattform, mit der Sie Anwendungen und Datenbanken in der Nähe Ihrer Benutzer bereitstellen können. Dies eignet sich besser, wenn Sie eine Webanwendung haben, die Backend-Dienste benötigt.

Diese Optionen sind im Allgemeinen kostenlos, mit einem begrenzten Funktionsumfang.

### Eine webbasierte IDE wie CodePen verwenden

Es gibt eine Reihe von Web-Apps, die eine Website-Entwicklungsumgebung nachbilden und Ihnen ermöglichen, HTML, CSS und JavaScript zu schreiben, die dann gerendert und in einem Ausgabebereich angezeigt werden. Im Allgemeinen sind diese Werkzeuge einfach zu verwenden, hervorragend zum Lernen geeignet, gut zum Teilen von Code (beispielsweise wenn Sie eine Technik mit Kollegen in einem anderen Büro teilen oder sie um Hilfe beim Debugging bitten möchten) und kostenlos (für grundlegende Funktionen). Sie hosten Ihre gerenderte Seite unter einer eindeutigen Webadresse. Die Funktionen sind jedoch begrenzt, und diese Apps bieten häufig keinen Hosting-Speicherplatz für Assets wie Bilder.

Probieren Sie einige dieser Beispiele aus, um herauszufinden, welches für Sie am besten geeignet ist:

- [Scrimba](https://scrimba.com/new?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
- [JSFiddle](https://jsfiddle.net/)
- [JSBin](https://jsbin.com/)
- [CodePen](https://codepen.io/)

## Veröffentlichen über GitHub

Schauen wir uns nun an, wie Sie Ihre Website über GitHub Pages veröffentlichen.

1. [Registrieren Sie sich zunächst bei GitHub](https://github.com/) und bestätigen Sie Ihre E-Mail-Adresse.
2. Als Nächstes müssen Sie ein [Repository erstellen](https://github.com/new), um Dateien zu speichern. Auf dieser Seite:
   1. Geben Sie im Feld _Repository name_ _username_.github.io ein, wobei _username_ Ihr Benutzername ist. Unser Freund Bob Smith würde beispielsweise _bobsmith.github.io_ eingeben.
   2. Klicken Sie unten auf der Seite auf die Schaltfläche _Create repository_.
3. Suchen Sie auf der nächsten Seite den Link _uploading an existing file_ und klicken Sie darauf. Dadurch sollten Sie zur Seite zum Hochladen von Dateien gelangen.
4. Nun sollten Sie Dateien aus Ihrem lokalen Dateisystem per Drag-and-Drop auf die Webseite ziehen können, um sie in das GitHub-Repository hochzuladen. Gehen Sie dazu wie folgt vor:
   1. Öffnen Sie auf Ihrem Computer ein Fenster des Dateiexplorers/Finder.
   2. Stellen Sie sicher, dass Sie sowohl die Fenster des Dateiexplorers als auch des Webbrowsers sehen können — positionieren Sie sie nebeneinander auf Ihrem Bildschirm.
   3. Navigieren Sie im Fenster des Dateiexplorers zum Ordner, der Ihre Beispielwebsite enthält.
      > [!NOTE]
      > Stellen Sie sicher, dass Ihr Ordner eine Datei `index.html` enthält.
   4. Wählen Sie alle Dateien Ihrer Beispielwebsite aus, beispielsweise mit dem Tastaturkürzel <kbd>Ctrl</kbd> + <kbd>A</kbd> oder unter macOS mit <kbd>Cmd</kbd> + <kbd>A</kbd>.
   5. Ziehen Sie die Dateien aus Ihrem Dateiexplorer auf den Abschnitt „Drag files here to add them to your repository“ auf der GitHub-Seite.
   6. Der Rahmen und der Text des Abschnitts ändern sich, um anzuzeigen, dass ein Ablegen möglich ist. Legen Sie die Dateien nun ab.
   7. Klicken Sie unten auf der Seite auf die Schaltfläche _Commit changes_.
5. Navigieren Sie in Ihrem Browser zu _username_.github.io, um Ihre Website online zu sehen. Für den Benutzernamen _chrisdavidmills_ navigieren Sie beispielsweise zu [_chrisdavidmills_.github.io](https://chrisdavidmills.github.io/).

   > [!NOTE]
   > Es kann einige Minuten dauern, bis Ihre Website online verfügbar ist. Falls Ihre Website nicht sofort angezeigt wird, warten Sie einige Minuten und versuchen Sie es erneut.

Weitere Informationen finden Sie in der [GitHub-Pages-Hilfe](https://docs.github.com/en/pages/getting-started-with-github-pages).

## Weiterführende Literatur

- [Was ist ein Webserver?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server)
- [Domainnamen verstehen](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name)
- [Wie viel kostet es, etwas im Web zu tun?](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost)
- [Eine Website bereitstellen](https://www.codecademy.com/learn/deploy-a-website): Ein gutes Tutorial von Codecademy, das etwas weiter geht und einige zusätzliche Techniken zeigt.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}
