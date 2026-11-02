---
title: Ihre Website veröffentlichen
short-title: Publishing
slug: Learn_web_development/Getting_started/Your_first_website/Publishing_your_website
l10n:
  sourceCommit: d50a52075711e21da27bce5ee24f6334b56cf0f3
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}

Wenn Sie den Code geschrieben und die Dateien Ihrer Website organisiert haben, müssen Sie alles online stellen, damit andere Ihre Website finden können. Dieser Artikel erklärt, wie Sie [Ihre Beispiel-Website](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like) online stellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse Ihres Computerbetriebssystems, der grundlegenden Software, mit der Sie eine Website erstellen, und von Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die grundlegenden Werkzeuge und Konzepte für die Veröffentlichung einer Website – Hosting, Domains und FTP-Programme.</li>
          <li>Welche alternativen Hosting-Möglichkeiten es gibt, beispielsweise GitHub und CodePen.</li>
          <li>Eine Website mit GitHub Pages veröffentlichen.</li>
          <li>Was Hosting ist, wie Sie es erwerben und wie Sie eine Website online stellen.</li>
          <li>Wie Sie eine Domain registrieren.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Welche Möglichkeiten gibt es?

Die Veröffentlichung einer Website ist ein komplexes Thema, da es viele Möglichkeiten dafür gibt. Dieser Artikel erklärt die gängigsten Ansätze:

- Hosting und einen Domainnamen erwerben (geringe Kosten für kleine Projekte)
- Eine webbasierte IDE verwenden (für einfache Websites kostenlos)
- Ein Online-Veröffentlichungstool verwenden (für einfache Websites kostenlos)

## Hosting und einen Domainnamen erwerben

Um mehr Kontrolle über die Inhalte und das Erscheinungsbild ihrer Website zu haben, entscheiden sich die meisten Fachleute und Unternehmen dafür, Webhosting und einen Domainnamen zu erwerben:

- Webhosting ist gemieteter Speicherplatz auf dem [Webserver](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server) eines Hosting-Unternehmens. Dort legen Sie die Dateien Ihrer Website ab. Der Webserver stellt die Website-Inhalte für Besucher bereit. Einige Webhosting-Dienste bieten das Hosting einfacher statischer Dateien kostenlos an, während andere einen geringen monatlichen Betrag kosten (etwa 5–10 US-Dollar).
- Ein [Domainname](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) ist die eindeutige Webadresse, unter der Menschen Ihre Website finden, beispielsweise `https://www.mozilla.org` oder `https://www.bbc.co.uk`. Sie können Ihren Domainnamen bei einem **Domain-Registrar** für beliebig viele Jahre mieten. Ein Domainname kostet üblicherweise 5–15 US-Dollar pro Jahr. Die Kosten hängen von folgenden Faktoren ab:
  - Top-Level-Domain-Registry: Top-Level-Domains (TLDs) wie `.com`, `.org` und `.io` werden von verschiedenen Registries verwaltet, die Gebühren für Registrare festlegen. Manche Länder nutzen Registry-Gebühren als Einnahmequelle und setzen hohe Preise fest. Auch beliebte TLDs wie `.io` und `.ai` können deutlich teurer sein als die verbreitete TLD `.com`.
  - Preisaufschlag des Registrars: Manche Registrare verlangen für bestimmte Domainnamen höhere Preise. So kann dieselbe TLD je nach Registrar und abhängig von Angebot und Nachfrage unterschiedlich viel kosten. Einige „Premium“-Domainnamen können besonders teuer sein, vor allem kurze Namen wie `ai.com`.
  - Mit dem Domainnamen verbundene Dienste: Manche Registrare bieten zusätzliche Optionen an, etwa einen Aktionspreis für das erste Jahr, der bei der Verlängerung steigt, oder vom Registrar bereitgestellte E-Mail-Dienste.

Wenn Sie Ihr Webhosting _und_ Ihren Domainnamen beim selben Unternehmen erwerben, werden sie möglicherweise automatisch miteinander verknüpft. Wenn Sie beides jedoch bei verschiedenen Unternehmen erwerben oder Ihren Hosting-Anbieter wechseln möchten, müssen Sie den Domainnamen auf den richtigen Server verweisen lassen. Nur dann sehen Besucher Ihre Website, wenn sie diese Webadresse aufrufen. Ihr Hosting-Anbieter stellt Ihnen eine Webadresse bereit, entweder als öffentliche IP-Adresse oder als Subdomain seiner Domain, etwa `my-app.pages.dev` oder `my-app.github.io`. Anschließend konfigurieren Sie Ihre DNS-Einträge und fügen einen A-Record oder einen CNAME-Record hinzu.

### Tipps für die Suche nach Hosting und Domains

- MDN empfiehlt keine bestimmten kommerziellen Hosting-Unternehmen oder Domain-Registrare. Um Hosting-Unternehmen und Registrare zu finden, suchen Sie einfach nach „Webhosting“ und „Domainnamen“. Bei allen Registraren können Sie prüfen, ob Ihr gewünschter Domainname verfügbar ist.
- Ihr {{Glossary("ISP", "Internetanbieter")}} für zu Hause oder das Büro bietet möglicherweise begrenztes Hosting für eine kleine Website an. Der Funktionsumfang ist eingeschränkt, könnte für Ihre ersten Experimente aber genau richtig sein.
- Es gibt auch kostenlose Dienste wie [Neocities](https://neocities.org/), [Google Sites](https://sites.google.com/) und [WordPress](https://wordpress.com/). Solche Dienste können in ihrem Funktionsumfang eingeschränkt sein, reichen für erste Experimente aber aus.

## Auf Ihrem Server veröffentlichen

Unternehmen verwenden verschiedene Verfahren, um statische Dateien auf ihre Webserver zu übertragen. Viele bieten mehr als eine Möglichkeit an. Typische Optionen sind die Verwendung eines {{Glossary("FTP", "(S)FTP-Clients")}} oder von [RSync](https://en.wikipedia.org/wiki/Rsync). Alternativ können Sie den Quellcode Ihrer Website in einem [GitHub-Repository](https://github.com/) speichern und dem Hosting-Unternehmen Zugriff gewähren, damit es den Quellcode abrufen, bei Bedarf bauen und veröffentlichen kann.

In den folgenden Abschnitten betrachten wir (S)FTP und Rsync genauer.

### (S)FTP

Jedes Betriebssystem enthält einen (S)FTP-Client als Teil seines Dateimanagers. Windows Explorer, Nautilus (ein verbreiteter Linux-Dateimanager) und der Mac Finder bieten diese Funktion. Häufig werden jedoch eigenständige (S)FTP-Clients verwendet, um lokale und entfernte Verzeichnisse nebeneinander anzuzeigen und Serverpasswörter zu speichern.

Wenn Sie einen (S)FTP-Client installieren möchten, stehen mehrere zuverlässige und kostenlose Optionen zur Verfügung: beispielsweise [FileZilla](https://filezilla-project.org/) für alle Plattformen, [WinSCP](https://winscp.net/eng/index.php) für Windows oder [Cyberduck](https://cyberduck.io/) für Mac und Windows.

In der Regel erhalten Sie von Ihrem Hosting-Anbieter Anweisungen für die Verbindung per FTP, etwa diese:

> - SFTP-Server: `sftp://demozilla.examplehostingprovider.net`
> - Benutzername: `demozilla`
> - Passwort: `quickbrownfox`
> - Port: `5548`
> - Legen Sie Ihre Dateien zur Veröffentlichung im Web im Verzeichnis `Public/htdocs` ab.

Wo Sie diese Angaben in Ihrem gewählten Client eingeben, erfahren Sie in dessen Dokumentation.

Nach dem Verbindungsaufbau zeigen (S)FTP-Clients in der Regel entweder nur das Dateisystem des entfernten FTP-Servers oder eine geteilte Ansicht mit dem entfernten Dateisystem auf der einen und dem lokalen Dateisystem auf der anderen Seite. Unabhängig von der Darstellung ziehen Sie die Dateien Ihrer lokalen Website üblicherweise per Drag-and-drop in die Ansicht des entfernten FTP-Servers, um sie am richtigen Ort abzulegen. Wie oben angedeutet, ist der Standardort (zumindest für statische Dateien) meist `Public/htdocs`.

### Rsync

{{Glossary("Rsync", "Rsync")}} ist ein Werkzeug zur Synchronisierung von Dateien zwischen einem lokalen und einem entfernten System. Es gilt als fortgeschritteneres Werkzeug als (S)FTP, da es üblicherweise über die Befehlszeile verwendet wird. Es gibt jedoch auch Clients mit grafischer Benutzeroberfläche, etwa [Acrosync](https://acrosync.com/mac.html) für Windows und macOS sowie [Grsync](https://www.opbyte.it/grsync/) für alle Plattformen.

Ein grundlegender Befehl sieht so aus:

```bash
rsync [-options] -e "ssh [SSH DETAILS GO HERE]" SOURCE user@x.x.x.x:DESTINATION
```

- `-options` besteht aus einem Bindestrich und einem oder mehreren Buchstaben, beispielsweise `-v` für ausführliche Fehlermeldungen und `-b` zum Erstellen von Backups. Eine vollständige Liste finden Sie auf der [rsync-Manpage](https://linux.die.net/man/1/rsync) (suchen Sie nach „Options summary“).
- `-e "ssh [SSH DETAILS GO HERE]"` enthält SSH-Angaben für eine sichere Verbindung.
- `SOURCE` ist der Pfad zur lokalen Datei oder zum lokalen Verzeichnis, aus dem Sie Dateien kopieren möchten.
- `user@` enthält die Zugangsdaten für den Benutzer auf dem entfernten Server, auf den Sie Dateien kopieren möchten.
- `x.x.x.x` ist die IP-Adresse des entfernten Servers.
- `DESTINATION` ist der Pfad zu dem Ort auf dem entfernten Server, an den Sie Ihr Verzeichnis oder Ihre Dateien kopieren möchten.

Diese Angaben erhalten Sie von Ihrem Hosting-Anbieter.

Weitere Informationen und Beispiele:

- Lesen Sie [How to Use Rsync to Copy/Sync Files Between Servers](https://www.atlantic.net/vps-hosting/how-to-use-rsync-copy-sync-files-servers/).
- Weitere Einzelheiten zu den benötigten Angaben finden Sie unter [How To Copy Files With Rsync Over SSH](https://www.digitalocean.com/community/tutorials/how-to-copy-files-with-rsync-over-ssh).

## Eine webbasierte IDE wie CodePen verwenden

Es gibt verschiedene Web-Apps, die eine Entwicklungsumgebung für Websites nachbilden. Darin können Sie HTML, CSS und JavaScript schreiben; das Ergebnis wird gerendert und in einem Ausgabebereich angezeigt. Diese Werkzeuge sind im Allgemeinen einfach zu bedienen, eignen sich gut zum Lernen und zum Teilen von Code und sind in ihren Grundfunktionen kostenlos. Sie können beispielsweise eine Technik mit Kollegen an einem anderen Standort teilen oder sie um Hilfe bei der Fehlersuche bitten. Ihre gerenderte Seite wird unter einer eindeutigen Webadresse bereitgestellt. Der Funktionsumfang ist allerdings begrenzt, und häufig bieten diese Apps keinen Hosting-Speicherplatz für Ressourcen wie Bilder.

Probieren Sie einige dieser Beispiele aus, um herauszufinden, welches am besten zu Ihnen passt:

- [Scrimba](https://scrimba.com/new?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
- [JSFiddle](https://jsfiddle.net/)
- [JSBin](https://jsbin.com/)
- [CodePen](https://codepen.io/)

## Ein Online-Veröffentlichungstool verwenden

Mit einigen Werkzeugen können Sie Ihre Website online veröffentlichen:

- [GitHub](https://github.com/) ist eine Plattform für gemeinschaftliche Softwareentwicklung. Dort können Sie Code-Repositories hochladen, um sie im **Versionsverwaltungssystem** [Git](https://git-scm.com/) zu speichern. Anschließend können Sie gemeinsam mit anderen an Code-Projekten arbeiten. Standardmäßig ist der Code öffentlich zugänglich: Jeder kann Ihren GitHub-Code finden, verwenden, daraus lernen und ihn verbessern. GitHub bietet eine sehr nützliche Funktion namens [GitHub Pages](https://pages.github.com/), mit der Sie Website-Code direkt im Web veröffentlichen können.
- [Netlify](https://www.netlify.com/) ist eine Webhosting-Plattform, die statische Websites direkt aus Ihrem GitHub-Repository bereitstellt. Sie bietet außerdem zusätzliche Funktionen wie Vorschauen vor der Veröffentlichung, serverlose Funktionen und die Verarbeitung von Formularen.

Diese Optionen sind mit eingeschränktem Funktionsumfang in der Regel kostenlos.

## Welchen Ansatz empfehlen wir?

Wenn Sie gerade erst anfangen, empfehlen wir GitHub Pages, da es einfach zu verwenden ist.

1. Falls Sie noch kein Konto haben, [registrieren Sie sich bei GitHub](https://github.com/).
2. Erstellen Sie ein Repository für Ihre Website. Folgen Sie dazu den Schritten unter [Ein Repository für Ihre Website erstellen](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-a-repository-for-your-site).
3. Laden Sie die Dateien Ihrer Website über die GitHub-Benutzeroberfläche in Ihr neues Repository hoch. Eine Anleitung dazu finden Sie unter [Eine Datei zu einem Repository auf GitHub hinzufügen](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository#adding-a-file-to-a-repository-on-github).
4. Richten Sie Ihr Repository so ein, dass sein Inhalt mit GitHub Pages veröffentlicht wird. Folgen Sie dazu den Anweisungen unter [Aus einem Branch veröffentlichen](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch).
5. Nach kurzer Zeit sollte eine Meldung erscheinen, dass Ihre Website unter einer Adresse wie „https://username.github.io/repositoryname/“ erreichbar ist. Wenn Ihr Benutzername beispielsweise bobsmith lautet und Ihr Repository my-first-website heißt, lautet die Adresse „https://bobsmith.github.io/my-first-website/“. Außerdem sollte eine Schaltfläche „Visit site“ erscheinen, über die Sie Ihre Website aufrufen können.

> [!NOTE]
> Wenn Sie eine eigene Domain besitzen und diese auf eine GitHub-Pages-Website verweisen lassen möchten, finden Sie unter [Eine benutzerdefinierte Domain für Ihre GitHub-Pages-Website konfigurieren](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) eine Anleitung.

## Weiterführende Informationen

- [Was ist ein Webserver?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server)
- [Domainnamen verstehen](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name)
- [Eine Website bereitstellen](https://www.codecademy.com/learn/deploy-a-website): Ein anschauliches Tutorial von Codecademy, das etwas weitergeht und zusätzliche Techniken zeigt.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}
