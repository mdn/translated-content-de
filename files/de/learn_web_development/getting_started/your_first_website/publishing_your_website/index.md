---
title: Veröffentlichung Ihrer Website
slug: Learn_web_development/Getting_started/Your_first_website/Publishing_your_website
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}

Sobald Sie den Code geschrieben und die Dateien organisiert haben, die Ihre Website ausmachen, müssen Sie alles online stellen, damit die Leute sie finden können. Dieser Artikel erklärt, wie Sie Ihre Beispielseite mit wenig Aufwand online stellen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computer-Betriebssystem, der Basissoftware, die Sie zum Erstellen einer Website verwenden, und Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die grundlegenden Werkzeuge und Konzepte beim Veröffentlichen einer Website — Hosting, Domains, FTP-Programme.</li>
          <li>Welche alternativen Hosting-Optionen verfügbar sind, zum Beispiel Google App Engine, GitHub, und CodePen.</li>
          <li>Veröffentlichung einer Website mit GitHub Pages.</li>
          <li>Hosting, wie man es erwirbt und wie man eine Website online stellt.</li>
          <li>TLDs und wie man eine Domain registriert.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Welche Optionen gibt es?

Die Veröffentlichung einer Website ist ein komplexes Thema, da es viele Wege gibt, sie anzugehen. Dieser Artikel versucht nicht, alle möglichen Methoden zu dokumentieren. Stattdessen werden die Vor- und Nachteile von drei Ansätzen erläutert, die für Anfänger praktisch sind. Anschließend wird ein Verfahren beschrieben, das sofort für viele Leser funktionieren kann.

### Hosting und einen Domainnamen erhalten

Um mehr Kontrolle über Inhalt und Erscheinungsbild der Website zu haben, wählen die meisten Menschen, Webhosting und einen Domainnamen zu kaufen:

- Webhosting ist gemieteter Speicherplatz auf dem [Webserver](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server) eines Hosting-Unternehmens. Sie laden die Website-Dateien auf den Webserver hoch. Der Webserver stellt den Website-Besuchern die Inhalte zur Verfügung.
- Ein [Domainname](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) ist die einzigartige Adresse, unter der Menschen Ihre Website finden, wie z.B. `https://www.mozilla.org` oder `https://www.bbc.co.uk`. Sie können Ihren Domainnamen von einem **Domainregistrar** für so viele Jahre mieten, wie Sie möchten.

Viele professionelle Websites gehen auf diese Weise online.

Zusätzlich benötigen Sie ein {{Glossary("FTP", "File Transfer Protocol (FTP)")}}-Programm (siehe [Wie viel kostet: Software](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost#software) für weitere Details), um die Website-Dateien tatsächlich auf den Server zu übertragen. FTP-Programme variieren stark, aber im Allgemeinen müssen Sie sich mit den von Ihrem Hosting-Unternehmen bereitgestellten Details (normalerweise Benutzername, Passwort, Hostname) mit Ihrem Webserver verbinden. Dann zeigt Ihnen das Programm Ihre lokalen Dateien und die Dateien des Webservers in zwei Fenstern und bietet eine Möglichkeit, Dateien hin und her zu transferieren.

![Ein FTP-Client, der alle Dateien und Ordner einer Website zeigt und diese auf einen Server hochlädt](ftp.jpg)

#### Tipps zur Suche nach Hosting und Domains

- MDN fördert keine speziellen kommerziellen Hosting-Unternehmen oder Domainregistrare. Um Hosting-Unternehmen und Registrare zu finden, suchen Sie einfach nach "Webhosting" und "Domainnamen". Alle Registrare werden über eine Funktion verfügen, mit der Sie überprüfen können, ob der gewünschte Domainname verfügbar ist.
- Ihr privater oder geschäftlicher {{Glossary("ISP", "Internetdienstanbieter")}} bietet möglicherweise begrenztes Hosting für eine kleine Website an. Das verfügbare Funktionsset wird begrenzt sein, aber es könnte perfekt für Ihre ersten Experimente sein.
- Es gibt auch kostenlose Dienste wie [Neocities](https://neocities.org/), [Google Sites](https://sites.google.com/), [Blogger](https://www.blogger.com/) und [WordPress](https://wordpress.com/). Manchmal bekommt man, wofür man bezahlt, aber manchmal sind diese Ressourcen gut genug für Ihre ersten Experimente.
- Viele Unternehmen bieten Hosting und Domains an.

### Verwendung eines Online-Tools wie GitHub oder Google App Engine

Einige Tools ermöglichen es Ihnen, Ihre Website online zu veröffentlichen:

- [GitHub](https://github.com/) ist eine "soziale Codierungs"-Seite. Sie ermöglicht es Ihnen, Code-Repositories für die Speicherung im **Versionskontrollsystem** [Git](https://git-scm.com/) hochzuladen. Sie können dann an Codeprojekten zusammenarbeiten und das System ist standardmäßig Open Source, was bedeutet, dass jeder in der Welt Ihren GitHub-Code finden, nutzen, davon lernen und verbessern kann. GitHub verfügt über eine sehr nützliche Funktion namens [GitHub Pages](https://pages.github.com/), mit der Sie Website-Code live im Web anzeigen können.
- [Google App Engine](https://cloud.google.com/appengine/) ist eine leistungsstarke Plattform, die es Ihnen ermöglicht, Anwendungen auf der Infrastruktur von Google zu erstellen und auszuführen — sei es, um eine mehrstufige Webanwendung von Grund auf neu zu erstellen oder eine statische Website zu hosten. Weitere Informationen finden Sie unter [Wie hosten Sie Ihre Website auf Google App Engine?](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_do_you_host_your_website_on_Google_App_Engine).

Diese Optionen sind normalerweise kostenlos, aber Sie könnten das begrenzte Funktionsset überschreiten.

### Verwendung eines webbasierten IDE wie CodePen

Es gibt eine Reihe von Web-Apps, die eine Website-Entwicklungsumgebung emulieren und es ermöglichen, HTML, CSS und JavaScript einzugeben und das Ergebnis dieses Codes als Website anzuzeigen — alles in einem Browser-Tab. Im Allgemeinen sind diese Tools relativ einfach, großartig zum Lernen, gut zum Teilen von Code (zum Beispiel, wenn Sie eine Technik teilen oder Hilfe beim Debuggen von Kollegen in einem anderen Büro fragen wollen) und kostenlos (für grundlegende Funktionen). Sie hosten Ihre gerenderte Seite unter einer eindeutigen Webadresse. Allerdings sind die Funktionen begrenzt und diese Apps bieten normalerweise keinen Hosting-Speicherplatz für Assets (wie Bilder).

Versuchen Sie, mit einigen dieser Beispiele zu spielen, um herauszufinden, welches für Sie am besten funktioniert:

- [JSFiddle](https://jsfiddle.net/)
- [Glitch](https://glitch.com/)
- [JS Bin](https://jsbin.com/)
- [CodePen](https://codepen.io/)

![Screenshot der webbasierten IDE JS Bin](jsbin-screen.png)

## Veröffentlichung über GitHub

Werfen wir nun einen Blick darauf, wie Sie Ihre Website einfach über GitHub Pages veröffentlichen können.

1. Melden Sie sich zunächst bei [GitHub](https://github.com/) an und verifizieren Sie Ihre E-Mail-Adresse.
2. Als nächstes müssen Sie [ein Repository erstellen](https://github.com/new), um Dateien zu speichern.
3. Geben Sie auf dieser Seite im Feld _Repository name_ den Namen _username_.github.io ein, wobei _username_ ihr Benutzername ist. Zum Beispiel würde unser Freund Bob Smith _bobsmith.github.io_ eingeben.
   Markieren Sie das Feld "_Initialize this repository with a README_". Klicken Sie dann auf _Create repository_.
   ![Ein Beispiel einer GitHub-Repository-Seite](github-create-repo.png)
4. Ziehen Sie den Inhalt Ihres Website-Ordners in Ihr Repository und klicken Sie dann auf _Commit changes_.

   > [!NOTE]
   > Stellen Sie sicher, dass Ihr Ordner eine Datei `index.html` enthält.

5. Navigieren Sie Ihren Browser zu _username_.github.io, um Ihre Website online zu sehen. Für den Benutzernamen _chrisdavidmills_ gehen Sie zu [_chrisdavidmills_.github.io](https://chrisdavidmills.github.io/).

   > [!NOTE]
   > Es kann einige Minuten dauern, bis Ihre Website online ist. Wenn Ihre Website nicht sofort angezeigt wird, warten Sie ein paar Minuten. Versuchen Sie es erneut.

Um mehr zu erfahren, besuchen Sie [GitHub Pages Hilfe](https://docs.github.com/en/pages/getting-started-with-github-pages).

## Weiterführende Literatur

- [Was ist ein Webserver?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server)
- [Domainnamen verstehen](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name)
- [Wie viel kostet es, etwas im Web zu tun?](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost)
- [Deploy a Website](https://www.codecademy.com/learn/deploy-a-website): Ein schönes Tutorial von Codecademy, das etwas weitergeht und einige zusätzliche Techniken zeigt.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}
