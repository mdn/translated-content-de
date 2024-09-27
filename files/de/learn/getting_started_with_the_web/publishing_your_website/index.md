---
title: Ihre Website veröffentlichen
slug: Learn/Getting_started_with_the_web/Publishing_your_website
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/JavaScript_basics", "Learn/Getting_started_with_the_web/How_the_Web_works", "Learn/Getting_started_with_the_web")}}

Sobald Sie den Code geschrieben und die Dateien organisiert haben, die Ihre Website ausmachen, müssen Sie alles online stellen, damit die Leute sie finden können. Dieser Artikel erklärt, wie Sie mit wenig Aufwand Ihren einfachen Beispielcode online bringen können.

## Welche Möglichkeiten gibt es?

Das Veröffentlichen einer Website ist ein komplexes Thema, da es viele Wege gibt, dies zu tun. Dieser Artikel versucht nicht, alle möglichen Methoden zu dokumentieren. Stattdessen erklärt er die Vor- und Nachteile von drei Ansätzen, die für Anfänger praktikabel sind. Anschließend wird eine Methode vorgestellt, die für viele Leser direkt funktionieren kann.

### Hosting und einen Domainnamen bekommen

Um mehr Kontrolle über Inhalte und das Erscheinungsbild der Website zu haben, wählen die meisten Menschen den Kauf von Webhosting und einem Domainnamen:

- Webhosting ist gemieteter Speicherplatz auf dem [Webserver](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server) eines Hosting-Unternehmens. Sie legen die Webseiten-Dateien auf dem Webserver ab. Der Webserver stellt den Website-Besuchern die Inhalte der Website zur Verfügung.
- Ein [Domainname](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name) ist die einzigartige Adresse, unter der Menschen Ihre Website finden, wie zum Beispiel `https://www.mozilla.org` oder `https://www.bbc.co.uk`. Sie können Ihren Domainnamen für so viele Jahre mieten, wie Sie möchten, von einem **Domainregistrar**.

Viele professionelle Websites gehen auf diese Weise online.

Außerdem benötigen Sie ein [File Transfer Protocol (FTP)](/de/docs/Glossary/FTP)-Programm (siehe [Wie viel kostet es: Software](/de/docs/Learn/Common_questions/Tools_and_setup/How_much_does_it_cost#software) für weitere Details), um die Website-Dateien tatsächlich auf den Server zu übertragen. FTP-Programme variieren stark, aber im Allgemeinen müssen Sie sich mit den von Ihrem Hosting-Unternehmen bereitgestellten Details (typischerweise Benutzername, Passwort, Hostname) mit Ihrem Webserver verbinden. Dann zeigt Ihnen das Programm Ihre lokalen Dateien und die Dateien des Webservers in zwei Fenstern an und bietet eine Möglichkeit, Dateien hin und her zu übertragen.

![Ein FTP-Client, der alle Dateien und Ordner einer Website zeigt und sie auf einen Server hochlädt](ftp.jpg)

#### Tipps zur Suche nach Hosting und Domains

- MDN bewirbt keine bestimmten kommerziellen Hosting-Unternehmen oder Domainname-Registrare. Um Hosting-Unternehmen und Registrare zu finden, suchen Sie einfach nach "Webhosting" und "Domainnamen". Alle Registrare haben eine Funktion, mit der Sie überprüfen können, ob der gewünschte Domainname verfügbar ist.
- Ihr Internetdienstanbieter zu Hause oder im Büro kann eingeschränktes Hosting für eine kleine Website bereitstellen. Der verfügbare Funktionsumfang wird begrenzt sein, aber es könnte perfekt für Ihre ersten Experimente sein.
- Es gibt auch kostenlose Dienste wie [Neocities](https://neocities.org/), [Google Sites](https://sites.google.com/), [Blogger](https://www.blogger.com/) und [WordPress](https://wordpress.com/). Manchmal bekommt man das, wofür man zahlt, aber manchmal reichen diese Ressourcen für Ihre ersten Experimente aus.
- Viele Unternehmen bieten Hosting und Domains an.

### Verwendung eines Online-Tools wie GitHub oder Google App Engine

Einige Tools ermöglichen es Ihnen, Ihre Website online zu veröffentlichen:

- [GitHub](https://github.com/) ist eine "soziale Codierung"-Seite. Es ermöglicht Ihnen, Code-Repositories zur Speicherung im [Git](https://git-scm.com/) **Versionskontrollsystem** hochzuladen. Sie können dann an Codeprojekten zusammenarbeiten, und das System ist standardmäßig Open Source, was bedeutet, dass jeder auf der Welt Ihren GitHub-Code finden, verwenden, davon lernen und ihn verbessern kann. GitHub bietet eine sehr nützliche Funktion namens [GitHub Pages](https://pages.github.com/), die es Ihnen ermöglicht, Website-Code live im Web auszustellen.
- [Google App Engine](https://cloud.google.com/appengine/) ist eine leistungsstarke Plattform, die es Ihnen ermöglicht, Anwendungen auf der Infrastruktur von Google zu erstellen und auszuführen — egal, ob Sie eine mehrschichtige Webanwendung von Grund auf neu erstellen oder eine statische Website hosten müssen. Weitere Informationen finden Sie unter [Wie hosten Sie Ihre Website auf Google App Engine?](/de/docs/Learn/Common_questions/Tools_and_setup/How_do_you_host_your_website_on_Google_App_Engine).

Diese Optionen sind in der Regel kostenlos, aber Sie könnten schnell den eingeschränkten Funktionsumfang überschreiten.

### Verwendung einer webbasierten IDE wie CodePen

Es gibt eine Reihe von Web-Apps, die eine Website-Entwicklungsumgebung emulieren und es Ihnen ermöglichen, HTML, CSS und JavaScript einzugeben und dann das Ergebnis dieses Codes als Website anzuzeigen — alles in einem Browser-Tab. Im Allgemeinen sind diese Tools relativ einfach, großartig zum Lernen, gut zum Teilen von Code (zum Beispiel, wenn Sie eine Technik teilen oder Unterstützung beim Debugging von Kollegen in einem anderen Büro anfordern möchten) und kostenlos (für grundlegende Funktionen). Sie hosten Ihre gerenderte Seite unter einer eindeutigen Webadresse. Allerdings sind die Funktionen begrenzt, und diese Apps bieten in der Regel keinen Hosting-Speicherplatz für Assets (wie Bilder).

Probieren Sie einige dieser Beispiele aus, um herauszufinden, welches am besten für Sie funktioniert:

- [JSFiddle](https://jsfiddle.net/)
- [Glitch](https://glitch.com/)
- [JS Bin](https://jsbin.com/)
- [CodePen](https://codepen.io/)

![Screenshot der webbasierten IDE JS Bin](jsbin-screen.png)

## Veröffentlichung über GitHub

Untersuchen wir nun, wie Sie Ihre Website einfach über GitHub Pages veröffentlichen können.

1. Melden Sie sich zuerst [bei GitHub an](https://github.com/) und verifizieren Sie Ihre E-Mail-Adresse.
2. Als Nächstes müssen Sie ein [Repository erstellen](https://github.com/new), in dem die Dateien gespeichert werden.
3. Geben Sie auf dieser Seite im Feld _Repository name_ _username_.github.io ein, wobei _username_ Ihr Benutzername ist. Beispielsweise würde unser Freund Bob Smith _bobsmith.github.io_ eingeben. Aktivieren Sie das Kontrollkästchen "_Initialize this repository with a README_". Klicken Sie dann auf _Create repository_.![Ein Beispiel für eine GitHub-Repository-Seite](github-create-repo.png)
4. Ziehen Sie den Inhalt Ihres Website-Ordners in Ihr Repository. Klicken Sie dann auf _Commit changes_.

   > [!NOTE]
   > Stellen Sie sicher, dass Ihr Ordner eine `index.html` Datei enthält.

5. Navigieren Sie Ihren Browser zu _username_.github.io, um Ihre Website online zu sehen. Zum Beispiel, für den Benutzernamen _chrisdavidmills_, gehen Sie zu [_chrisdavidmills_.github.io](https://chrisdavidmills.github.io/).

   > [!NOTE]
   > Es kann ein paar Minuten dauern, bis Ihre Website live geht. Wenn Ihre Website nicht sofort angezeigt wird, warten Sie ein paar Minuten und versuchen Sie es erneut.

Um mehr zu erfahren, siehe [GitHub Pages Help](https://docs.github.com/en/pages/getting-started-with-github-pages).

## Weiterführende Literatur

- [Was ist ein Webserver](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server)
- [Verstehen von Domainnamen](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name)
- [Wie viel kostet es, etwas im Web zu tun?](/de/docs/Learn/Common_questions/Tools_and_setup/How_much_does_it_cost)
- [Deploy a Website](https://www.codecademy.com/learn/deploy-a-website): Ein schönes Tutorial von Codecademy, das noch etwas weiter geht und einige zusätzliche Techniken zeigt.

{{PreviousMenuNext("Learn/Getting_started_with_the_web/JavaScript_basics", "Learn/Getting_started_with_the_web/How_the_Web_works", "Learn/Getting_started_with_the_web")}}
