---
title: Veröffentlichung Ihrer Website
slug: Learn/Getting_started_with_the_web/Publishing_your_website
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/JavaScript_basics", "Learn/Getting_started_with_the_web/How_the_Web_works", "Learn/Getting_started_with_the_web")}}

Sobald Sie den Code geschrieben und die Dateien organisiert haben, die Ihre Website ausmachen, müssen Sie alles online stellen, damit Leute es finden können. Dieser Artikel erklärt, wie Sie Ihren einfachen Beispielcode mit wenig Aufwand online stellen können.

## Welche Optionen gibt es?

Die Veröffentlichung einer Website ist ein komplexes Thema, da es viele verschiedene Methoden gibt. Dieser Artikel versucht nicht, alle möglichen Methoden zu dokumentieren. Stattdessen erklärt er die Vor- und Nachteile von drei Ansätzen, die für Anfänger praktisch sind. Dann wird eine Methode beschrieben, die für viele Leser sofort funktionieren kann.

### Hosting und einen Domainnamen erhalten

Um mehr Kontrolle über den Inhalt und das Erscheinungsbild der Website zu haben, wählen die meisten Menschen den Kauf von Webhosting und einem Domainnamen:

- Webhosting ist gemieteter Speicherplatz auf dem [Webserver](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server) eines Hosting-Unternehmens. Dort legen Sie die Website-Dateien ab. Der Webserver stellt die Inhalte der Website den Besuchern zur Verfügung.
- Ein [Domainname](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name) ist die eindeutige Adresse, unter der Menschen Ihre Website finden, wie z.B. `https://www.mozilla.org` oder `https://www.bbc.co.uk`. Sie können Ihren Domainnamen von einem **Domainregistrar** für so viele Jahre mieten, wie Sie möchten.

Viele professionelle Websites gehen auf diese Weise online.

Darüber hinaus benötigen Sie ein {{Glossary("FTP", "File Transfer Protocol (FTP)")}}-Programm (siehe [Was kostet es: Software](/de/docs/Learn/Common_questions/Tools_and_setup/How_much_does_it_cost#software) für weitere Details), um die Website-Dateien tatsächlich auf den Server zu übertragen. FTP-Programme variieren stark, aber im Allgemeinen müssen Sie sich mit den von Ihrem Hosting-Unternehmen bereitgestellten Details (normalerweise Benutzername, Passwort, Hostname) mit Ihrem Webserver verbinden. Dann zeigt Ihnen das Programm Ihre lokalen Dateien und die Dateien des Webservers in zwei Fenstern an und bietet eine Möglichkeit, Dateien hin und her zu übertragen.

![Ein FTP-Client, der alle Dateien und Ordner einer Website anzeigt und sie auf einen Server hochlädt](ftp.jpg)

#### Tipps zur Suche nach Hosting und Domains

- MDN bewirbt keine spezifischen kommerziellen Hosting-Unternehmen oder Domainregistrare. Um Hosting-Unternehmen und Registrare zu finden, suchen Sie einfach nach "Webhosting" und "Domainnamen". Alle Registrare haben eine Funktion, mit der Sie prüfen können, ob der gewünschte Domainname verfügbar ist.
- Ihr Heim- oder Büro-{{Glossary("ISP", "Internetdienstanbieter")}} bietet möglicherweise begrenztes Hosting für eine kleine Website an. Der verfügbare Funktionsumfang ist begrenzt, könnte aber perfekt für Ihre ersten Experimente sein.
- Es gibt auch kostenlose Dienste wie [Neocities](https://neocities.org/), [Google Sites](https://sites.google.com/), [Blogger](https://www.blogger.com/) und [WordPress](https://wordpress.com/). Manchmal bekommen Sie das, wofür Sie bezahlen, aber manchmal sind diese Ressourcen für Ihre ersten Experimente gut genug.
- Viele Unternehmen bieten Hosting und Domains an.

### Verwendung eines Online-Tools wie GitHub oder Google App Engine

Einige Tools ermöglichen es Ihnen, Ihre Website online zu veröffentlichen:

- [GitHub](https://github.com/) ist eine "soziale Coding"-Seite. Sie ermöglicht es Ihnen, Code-Repositories zur Speicherung im **Git**-Versionsverwaltungssystem hochzuladen. Sie können dann an Codeprojekten zusammenarbeiten, und das System ist standardmäßig open-source, was bedeutet, dass jeder auf der Welt Ihren GitHub-Code finden, verwenden, daraus lernen und ihn verbessern kann. GitHub hat eine sehr nützliche Funktion namens [GitHub Pages](https://pages.github.com/), mit der Sie Website-Code live im Internet präsentieren können.
- [Google App Engine](https://cloud.google.com/appengine/) ist eine leistungsstarke Plattform, die es Ihnen ermöglicht, Anwendungen auf der Infrastruktur von Google zu erstellen und auszuführen – egal ob Sie eine mehrschichtige Webanwendung von Grund auf neu erstellen oder eine statische Website hosten. Weitere Informationen finden Sie unter [Wie hosten Sie Ihre Website auf Google App Engine?](/de/docs/Learn/Common_questions/Tools_and_setup/How_do_you_host_your_website_on_Google_App_Engine).

Diese Optionen sind normalerweise kostenlos, aber Sie könnten den begrenzten Funktionsumfang irgendwann hinter sich lassen.

### Verwendung einer webbasierten IDE wie CodePen

Es gibt eine Reihe von Web-Apps, die eine Website-Entwicklungsumgebung emulieren und es Ihnen ermöglichen, HTML, CSS und JavaScript einzugeben und dann das Ergebnis dieses Codes als Website anzuzeigen – alles in einem Browser-Tab. Im Allgemeinen sind diese Tools relativ einfach, hervorragend für das Lernen, gut zum Teilen von Code (z.B. wenn Sie eine Technik mit Kollegen in einem anderen Büro teilen oder Fehler beheben möchten) und kostenlos (für grundlegende Funktionen). Sie hosten Ihre gerenderte Seite unter einer eindeutigen Webadresse. Allerdings sind die Funktionen begrenzt, und diese Apps bieten normalerweise keinen Hosting-Platz für Assets (wie Bilder).

Probieren Sie einige dieser Beispiele aus, um herauszufinden, welche am besten für Sie geeignet ist:

- [JSFiddle](https://jsfiddle.net/)
- [Glitch](https://glitch.com/)
- [JS Bin](https://jsbin.com/)
- [CodePen](https://codepen.io/)

![Screenshot der webbasierten IDE JS Bin](jsbin-screen.png)

## Veröffentlichung über GitHub

Schauen wir uns nun an, wie Sie Ihre Website ganz einfach über GitHub Pages veröffentlichen können.

1. Melden Sie sich zuerst bei [GitHub](https://github.com/) an und verifizieren Sie Ihre E-Mail-Adresse.
2. Als Nächstes müssen Sie ein [Repository erstellen](https://github.com/new), um Dateien zu speichern.
3. Geben Sie auf dieser Seite im Feld _Repository name_ _benutzername_.github.io ein, wobei _benutzername_ Ihr Benutzername ist. Unser Freund Bob Smith würde also _bobsmith.github.io_ eingeben. Aktivieren Sie das Kästchen "_Initialize this repository with a README_". Klicken Sie dann auf _Create repository_.![Ein Beispiel einer GitHub Repository-Seite](github-create-repo.png)
4. Ziehen Sie den Inhalt Ihres Website-Ordners in Ihr Repository. Klicken Sie dann auf _Commit changes_.

   > [!NOTE]
   > Stellen Sie sicher, dass Ihr Ordner eine `index.html`-Datei enthält.

5. Navigieren Sie Ihren Browser zu _benutzername_.github.io, um Ihre Website online zu sehen. Für den Benutzernamen _chrisdavidmills_ gehen Sie zum Beispiel zu [_chrisdavidmills_.github.io](https://chrisdavidmills.github.io/).

   > [!NOTE]
   > Es kann einige Minuten dauern, bis Ihre Website online geht. Wenn Ihre Website nicht sofort angezeigt wird, warten Sie einige Minuten und versuchen Sie es erneut.

Weitere Informationen finden Sie unter [GitHub Pages Hilfe](https://docs.github.com/en/pages/getting-started-with-github-pages).

## Weiterführende Lektüre

- [Was ist ein Webserver](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server)
- [Verstehen von Domainnamen](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name)
- [Was kostet es, etwas im Internet zu tun?](/de/docs/Learn/Common_questions/Tools_and_setup/How_much_does_it_cost)
- [Deploy a Website](https://www.codecademy.com/learn/deploy-a-website): Ein schöner Tutorial von Codecademy, das etwas weiter geht und einige zusätzliche Techniken zeigt.

{{PreviousMenuNext("Learn/Getting_started_with_the_web/JavaScript_basics", "Learn/Getting_started_with_the_web/How_the_Web_works", "Learn/Getting_started_with_the_web")}}
