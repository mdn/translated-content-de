---
title: Veröffentlichen Ihrer Website
slug: Learn/Getting_started_with_the_web/Publishing_your_website
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/JavaScript_basics", "Learn/Getting_started_with_the_web/How_the_Web_works", "Learn/Getting_started_with_the_web")}}

Sobald Sie den Code geschrieben und die Dateien organisiert haben, die Ihre Website ausmachen, müssen Sie alles online stellen, damit Menschen sie finden können. Dieser Artikel erklärt, wie Sie Ihren einfachen Beispielcode mit wenig Aufwand online bringen können.

## Welche Optionen gibt es?

Das Veröffentlichen einer Website ist ein komplexes Thema, da es viele Wege gibt. Dieser Artikel versucht nicht, alle möglichen Methoden zu dokumentieren. Stattdessen erklärt er die Vor- und Nachteile von drei Ansätzen, die für Anfänger praktisch sind. Anschließend wird ein Verfahren beschrieben, das für viele Leser sofort funktionieren kann.

### Hosting und einen Domainnamen erhalten

Um mehr Kontrolle über den Inhalt und das Erscheinungsbild der Website zu haben, entscheiden sich die meisten Menschen dafür, Webhosting und einen Domainnamen zu kaufen:

- Webhosting ist gemieteter Speicherplatz auf dem [Webserver](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server) eines Hostingunternehmens. Sie platzieren die Dateien Ihrer Website auf dem Webserver. Der Webserver bietet die Inhalte der Website den Besuchern an.
- Ein [Domainname](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name) ist die einzigartige Adresse, unter der Menschen Ihre Website finden, wie z.B. `https://www.mozilla.org` oder `https://www.bbc.co.uk`. Sie können Ihren Domainnamen für so viele Jahre mieten, wie Sie möchten, von einem **Domain-Registrar**.

Viele professionelle Websites gehen auf diese Weise online.

Außerdem benötigen Sie ein {{Glossary("FTP", "File Transfer Protocol (FTP)")}}-Programm (siehe [Wie viel kostet es: Software](/de/docs/Learn/Common_questions/Tools_and_setup/How_much_does_it_cost#software) für mehr Details), um die Website-Dateien tatsächlich auf den Server zu übertragen. FTP-Programme sind sehr unterschiedlich, aber im Allgemeinen müssen Sie sich mit den von Ihrem Hostinganbieter bereitgestellten Details (typischerweise Benutzername, Passwort, Hostname) mit Ihrem Webserver verbinden. Dann zeigt das Programm Ihnen Ihre lokalen Dateien und die Dateien des Webservers in zwei Fenstern an und bietet Ihnen eine Möglichkeit, Dateien hin und her zu übertragen.

![Ein FTP-Client, der alle Dateien und Ordner einer Website anzeigt und sie auf einen Server hochlädt](ftp.jpg)

#### Tipps zum Finden von Hosting und Domains

- MDN befürwortet keine bestimmten kommerziellen Hostingunternehmen oder Domain-Registrare. Um Hostingunternehmen und Registrare zu finden, suchen Sie einfach nach "Webhosting" und "Domainnamen". Alle Registrare haben eine Funktion, mit der Sie überprüfen können, ob der gewünschte Domainname verfügbar ist.
- Ihr {Glossary("ISP", "Internetdienstanbieter")} könnte begrenztes Hosting für eine kleine Website anbieten. Der verfügbare Funktionsumfang wird begrenzt sein, aber es könnte perfekt für Ihre ersten Experimente sein.
- Es gibt auch kostenlose Dienste wie [Neocities](https://neocities.org/), [Google Sites](https://sites.google.com/), [Blogger](https://www.blogger.com/) und [WordPress](https://wordpress.com/). Manchmal bekommt man, wofür man bezahlt, aber manchmal sind diese Ressourcen gut genug für Ihre ersten Experimente.
- Viele Unternehmen bieten Hosting und Domains an.

### Verwendung eines Online-Tools wie GitHub oder Google App Engine

Einige Tools ermöglichen es Ihnen, Ihre Website online zu veröffentlichen:

- [GitHub](https://github.com/) ist eine "soziale Codierungs" -Site. Es ermöglicht Ihnen, Code-Repositories zur Speicherung im [Git](https://git-scm.com/) **Versionskontrollsystem** hochzuladen. Sie können dann an Codeprojekten zusammenarbeiten, und das System ist standardmäßig Open-Source, was bedeutet, dass jeder auf der Welt Ihren GitHub-Code finden, verwenden, daraus lernen und darauf aufbauen kann. GitHub hat eine sehr nützliche Funktion namens [GitHub Pages](https://pages.github.com/), die es Ihnen ermöglicht, Website-Code live im Web zu veröffentlichen.
- [Google App Engine](https://cloud.google.com/appengine/) ist eine leistungsstarke Plattform, die es Ihnen ermöglicht, Anwendungen auf der Infrastruktur von Google zu erstellen und auszuführen – sei es, dass Sie eine mehrschichtige Webanwendung von Grund auf neu erstellen oder eine statische Website hosten möchten. Siehe [Wie hosten Sie Ihre Website auf Google App Engine?](/de/docs/Learn/Common_questions/Tools_and_setup/How_do_you_host_your_website_on_Google_App_Engine) für weitere Informationen.

Diese Optionen sind in der Regel kostenlos, aber Sie könnten den begrenzten Funktionsumfang überschreiten.

### Verwendung einer webbasierten IDE wie CodePen

Es gibt eine Reihe von Web-Apps, die eine Website-Entwicklungsumgebung emulieren und es Ihnen ermöglichen, HTML, CSS und JavaScript einzugeben und dann das Ergebnis dieses Codes als Website anzuzeigen – alles in einem Browsertab. Im Allgemeinen sind diese Tools relativ einfach, großartig zum Lernen, gut zum Teilen von Code (zum Beispiel, wenn Sie eine Technik teilen oder Kollegen in einem anderen Büro um Debugging-Hilfe bitten möchten) und kostenlos (für grundlegende Funktionen). Sie hosten Ihre gerenderte Seite unter einer einzigartigen Webadresse. Die Funktionen sind jedoch begrenzt und diese Apps bieten normalerweise keinen Hosting-Speicherplatz für Assets (wie Bilder).

Probieren Sie einige dieser Beispiele aus, um herauszufinden, welches am besten für Sie funktioniert:

- [JSFiddle](https://jsfiddle.net/)
- [Glitch](https://glitch.com/)
- [JS Bin](https://jsbin.com/)
- [CodePen](https://codepen.io/)

![Screenshot der webbasierten IDE JS Bin](jsbin-screen.png)

## Veröffentlichung über GitHub

Schauen wir uns nun an, wie Sie Ihre Website einfach über GitHub Pages veröffentlichen können.

1. Melden Sie sich zuerst bei [GitHub an](https://github.com/) und verifizieren Sie Ihre E-Mail-Adresse.
2. Als nächstes müssen Sie [ein Repository erstellen](https://github.com/new), um Dateien zu speichern.
3. Geben Sie auf dieser Seite im Feld _Repository name_ _username_.github.io ein, wobei _username_ Ihr Benutzername ist. Zum Beispiel würde unser Freund Bob Smith _bobsmith.github.io_ eingeben.
   Aktivieren Sie das "_Initialize this repository with a README"_-Feld. Klicken Sie dann auf _Create repository_.![Ein Beispiel einer GitHub-Repository-Seite](github-create-repo.png)
4. Ziehen Sie den Inhalt Ihres Website-Ordners in Ihr Repository. Klicken Sie dann auf _Commit changes_.

   > [!NOTE]
   > Stellen Sie sicher, dass Ihr Ordner eine `index.html`-Datei hat.

5. Navigieren Sie mit Ihrem Browser zu _username_.github.io, um Ihre Website online zu sehen. Zum Beispiel, für den Benutzernamen _chrisdavidmills_, gehen Sie zu [_chrisdavidmills_.github.io](https://chrisdavidmills.github.io/).

   > [!NOTE]
   > Es kann einige Minuten dauern, bis Ihre Website live geschaltet wird. Wenn Ihre Website nicht sofort angezeigt wird, warten Sie ein paar Minuten. Versuchen Sie es erneut.

Um mehr zu erfahren, sehen Sie [GitHub Pages Hilfe](https://docs.github.com/en/pages/getting-started-with-github-pages).

## Weiterführende Lektüre

- [Was ist ein Webserver](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server)
- [Verständnis von Domainnamen](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name)
- [Wie viel kostet es, etwas im Web zu machen?](/de/docs/Learn/Common_questions/Tools_and_setup/How_much_does_it_cost)
- [Deploy a Website](https://www.codecademy.com/learn/deploy-a-website): Ein schöner Tutorial von Codecademy, der etwas weiter geht und einige zusätzliche Techniken zeigt.

{{PreviousMenuNext("Learn/Getting_started_with_the_web/JavaScript_basics", "Learn/Getting_started_with_the_web/How_the_Web_works", "Learn/Getting_started_with_the_web")}}
