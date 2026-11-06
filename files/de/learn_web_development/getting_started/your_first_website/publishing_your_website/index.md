---
title: Ihre Website veröffentlichen
short-title: Publishing
slug: Learn_web_development/Getting_started/Your_first_website/Publishing_your_website
l10n:
  sourceCommit: 2a563c927890794b513523649ccfbbe48d336465
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}

Wenn Sie den Code geschrieben und die Dateien Ihrer Website organisiert haben, müssen Sie alles online stellen, damit andere Ihre Website finden können. Dieser Artikel erklärt, wie Sie [Ihre Beispiel-Website](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like) online stellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse im Umgang mit dem Betriebssystem Ihres Computers, der grundlegenden Software zum Erstellen einer Website und Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die grundlegenden Werkzeuge und Konzepte zur Veröffentlichung einer Website – Hosting, Domains und FTP-Programme.</li>
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

Die Veröffentlichung einer Website ist ein komplexes Thema, da es viele Wege dafür gibt. Dieser Artikel erläutert die gängigsten Ansätze:

- Hosting und einen Domainnamen erwerben (kostengünstig für kleine Projekte)
- Eine webbasierte IDE verwenden (für einfache Websites kostenlos)
- Ein Online-Veröffentlichungstool verwenden (für einfache Websites kostenlos)

## Hosting und einen Domainnamen erwerben

Um mehr Kontrolle über Inhalt und Erscheinungsbild ihrer Website zu haben, entscheiden sich die meisten Fachleute und Unternehmen dafür, Webhosting und einen Domainnamen zu erwerben:

- Webhosting ist gemieteter Speicherplatz auf dem [Webserver](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server) eines Hosting-Unternehmens. Dort legen Sie die Dateien Ihrer Website ab. Der Webserver stellt die Inhalte Ihrer Website für Besucher bereit. Einige Webhosting-Dienste bieten das Hosting einfacher statischer Dateien kostenlos an, während andere einen geringen monatlichen Betrag kosten (beispielsweise 5–10 US-Dollar).
- Ein [Domainname](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) ist die eindeutige Webadresse, unter der Besucher Ihre Website finden, beispielsweise `https://www.mozilla.org` oder `https://www.bbc.co.uk`. Sie können Ihren Domainnamen für eine beliebige Anzahl von Jahren bei einem **Domain-Registrar** mieten. Ein Domainname kostet üblicherweise 5–15 US-Dollar pro Jahr. Die Kosten hängen von folgenden Faktoren ab:
  - Registrierungsstelle der Top-Level-Domain: Top-Level-Domains (TLDs) wie `.com`, `.org` und `.io` werden von unterschiedlichen Registrierungsstellen verwaltet, die Gebühren für Registrare festlegen. Manche Länder nutzen diese Gebühren als Einnahmequelle und setzen hohe Preise fest. Auch beliebte TLDs wie `.io` und `.ai` können deutlich teurer sein als die übliche `.com`-Domain.
  - Aufschlag des Registrars: Manche Registrare verlangen für bestimmte Domainnamen höhere Preise. Dieselbe TLD kann beispielsweise je nach Angebot und Nachfrage bei verschiedenen Registraren unterschiedlich viel kosten. Einige „Premium“-Domainnamen können ebenfalls teurer sein, insbesondere kurze Namen wie `ai.com`.
  - Mit dem Domainnamen verbundene Dienste: Manche Registrare bieten zusätzliche Optionen an, etwa einen günstigen Aktionspreis im ersten Jahr, der nach der Verlängerung steigt, oder vom Registrar bereitgestellte E-Mail-Dienste.

Wenn Sie Webhosting _und_ Domainnamen beim selben Unternehmen erwerben, werden sie möglicherweise automatisch miteinander verknüpft. Wenn Sie sie jedoch bei verschiedenen Unternehmen erwerben oder Ihren Hosting-Anbieter wechseln möchten, müssen Sie den Domainnamen auf den richtigen Server verweisen lassen, damit Besucher Ihre Website sehen, wenn sie diese Webadresse aufrufen. Ihr Hosting-Anbieter gibt Ihnen eine Webadresse – entweder in Form einer öffentlichen IP-Adresse oder einer Subdomain seiner Domain wie `my-app.pages.dev` oder `my-app.github.io`. Anschließend konfigurieren Sie Ihre DNS-Einträge und fügen einen A-Eintrag oder einen CNAME-Eintrag hinzu.

### Tipps für die Suche nach Hosting und Domains

- MDN empfiehlt keine bestimmten kommerziellen Hosting-Unternehmen oder Domain-Registrare. Um Hosting-Unternehmen und Registrare zu finden, suchen Sie einfach nach „Webhosting“ und „Domainnamen“. Bei allen Registraren können Sie prüfen, ob Ihr gewünschter Domainname verfügbar ist.
- Ihr {{Glossary("ISP", "Internetanbieter")}} zu Hause oder im Büro bietet möglicherweise begrenztes Hosting für eine kleine Website an. Der Funktionsumfang ist zwar eingeschränkt, kann aber für Ihre ersten Experimente genau richtig sein.
- Es gibt auch kostenlose Dienste wie [Neocities](https://neocities.org/), [Google Sites](https://sites.google.com/) und [WordPress](https://wordpress.com/). Diese Dienste können im Umfang eingeschränkt sein, reichen für erste Experimente aber aus.

## Auf Ihrem Server veröffentlichen

Unternehmen verwenden unterschiedliche Verfahren, um statische Dateien auf ihre Webserver zu übertragen. Viele bieten mehr als eine Möglichkeit an. Typische Optionen sind ein {{Glossary("FTP", "(S)FTP-Client")}} oder [RSync](https://en.wikipedia.org/wiki/Rsync). Sie können den Quellcode Ihrer Website auch in einem [GitHub-Repository](https://github.com/) speichern und dem Hosting-Unternehmen Zugriff gewähren, damit es den Quellcode abrufen, bei Bedarf daraus die Website erstellen und diese veröffentlichen kann.

In den folgenden Abschnitten sehen wir uns (S)FTP und RSync genauer an.

### (S)FTP

Jedes Betriebssystem enthält einen (S)FTP-Client als Teil seiner Dateiverwaltung. Windows Explorer, Nautilus (eine verbreitete Dateiverwaltung unter Linux) und der Mac Finder bieten diese Funktion. Dennoch entscheiden sich viele für eigenständige (S)FTP-Clients, um lokale und entfernte Verzeichnisse nebeneinander anzuzeigen und Serverpasswörter zu speichern.

Wenn Sie einen (S)FTP-Client installieren möchten, stehen mehrere zuverlässige und kostenlose Optionen zur Verfügung: beispielsweise [FileZilla](https://filezilla-project.org/) für alle Plattformen, [WinSCP](https://winscp.net/eng/index.php) für Windows und [Cyberduck](https://cyberduck.io/) für Mac oder Windows.

In der Regel erhalten Sie von Ihrem Hosting-Anbieter Anweisungen für die Verbindung per FTP, etwa diese:

> - SFTP-Server: `sftp://demozilla.examplehostingprovider.net`
> - Benutzername: `demozilla`
> - Passwort: `quickbrownfox`
> - Port: `5548`
> - Um Ihre Dateien im Web zu veröffentlichen, legen Sie sie im Verzeichnis `Public/htdocs` ab.

Wo Sie diese Angaben in Ihrem gewählten Client eingeben, erfahren Sie in dessen Dokumentation.

Nach dem Verbindungsaufbau zeigen (S)FTP-Clients üblicherweise entweder eine Ansicht mit einem Bereich für das Dateisystem des entfernten FTP-Servers oder eine Ansicht mit zwei Bereichen: einem für das entfernte FTP-Dateisystem und einem für das lokale Dateisystem. Unabhängig von der Darstellung ziehen Sie die lokalen Dateien Ihrer Website normalerweise per Drag-and-drop in die entfernte FTP-Ansicht, um sie am richtigen Ort abzulegen. Wie oben angedeutet, ist der Standardspeicherort (zumindest für statische Dateien) meist `Public/htdocs`.

### Rsync

{{Glossary("Rsync", "Rsync")}} ist ein Werkzeug zum Synchronisieren von Dateien zwischen einem lokalen und einem entfernten System. Es gilt als fortgeschritteneres Werkzeug als (S)FTP, da es typischerweise auf der Kommandozeile verwendet wird. Es gibt jedoch auch Clients mit grafischer Benutzeroberfläche, beispielsweise [Acrosync](https://acrosync.com/mac.html) für Windows und macOS sowie [Grsync](https://www.opbyte.it/grsync/) für alle Plattformen.

Ein einfacher Befehl sieht so aus:

```bash
rsync [-options] -e "ssh [SSH DETAILS GO HERE]" SOURCE user@x.x.x.x:DESTINATION
```

- `-options` ist ein Bindestrich, auf den ein oder mehrere Buchstaben folgen, beispielsweise `-v` für ausführliche Fehlermeldungen und `-b` zum Erstellen von Backups. Die vollständige Liste finden Sie auf der [Manpage von rsync](https://linux.die.net/man/1/rsync) (suchen Sie nach „Options summary“).
- `-e "ssh [SSH DETAILS GO HERE]"` enthält SSH-Angaben für eine sichere Verbindung.
- `SOURCE` ist der Pfad zur lokalen Datei oder zum lokalen Verzeichnis, aus dem Sie Dateien kopieren möchten.
- `user@` bezeichnet die Anmeldedaten des Benutzers auf dem entfernten Server, auf den Sie Dateien kopieren möchten.
- `x.x.x.x` ist die IP-Adresse des entfernten Servers.
- `DESTINATION` ist der Pfad zu dem Ort auf dem entfernten Server, an den Sie Ihr Verzeichnis oder Ihre Dateien kopieren möchten.

Ihr Hosting-Anbieter stellt Ihnen diese Angaben zur Verfügung.

Weitere Informationen und Beispiele:

- Lesen Sie [How to Use Rsync to Copy/Sync Files Between Servers](https://www.atlantic.net/vps-hosting/how-to-use-rsync-copy-sync-files-servers/).
- Weitere Einzelheiten zu den erforderlichen Schritten finden Sie unter [How To Copy Files With Rsync Over SSH](https://www.digitalocean.com/community/tutorials/how-to-copy-files-with-rsync-over-ssh).

## Eine webbasierte IDE wie CodePen verwenden

Es gibt verschiedene Webanwendungen, die eine Entwicklungsumgebung für Websites nachbilden. Darin können Sie HTML, CSS und JavaScript schreiben; das Ergebnis wird gerendert und in einem Ausgabebereich angezeigt. Im Allgemeinen sind diese Werkzeuge einfach zu bedienen, eignen sich gut zum Lernen und zum Teilen von Code und sind für grundlegende Funktionen kostenlos. Sie können damit beispielsweise Kollegen an einem anderen Standort eine Technik zeigen oder sie um Hilfe bei der Fehlersuche bitten. Die gerenderte Seite wird unter einer eindeutigen Webadresse bereitgestellt. Der Funktionsumfang ist jedoch begrenzt, und häufig bieten diese Anwendungen keinen Speicherplatz für Ressourcen wie Bilder.

Probieren Sie einige dieser Angebote aus, um herauszufinden, welches am besten zu Ihnen passt:

- [Scrimba](https://scrimba.com/new?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
- [JSFiddle](https://jsfiddle.net/)
- [JSBin](https://jsbin.com/)
- [CodePen](https://codepen.io/)

## Ein Online-Veröffentlichungstool verwenden

Mit einigen Werkzeugen können Sie Ihre Website online veröffentlichen:

- [GitHub](https://github.com/) ist eine Plattform für gemeinsames Programmieren. Dort können Sie Code-Repositorys hochladen und im **Versionskontrollsystem** [Git](https://git-scm.com/) speichern. Anschließend können Sie gemeinsam mit anderen an Codeprojekten arbeiten. Standardmäßig ist der Code öffentlich zugänglich: Jeder kann Ihren GitHub-Code finden, verwenden, daraus lernen und ihn verbessern. GitHub bietet eine sehr nützliche Funktion namens [GitHub Pages](https://pages.github.com/), mit der Sie Website-Code direkt im Web veröffentlichen können.
- [Netlify](https://www.netlify.com/) ist eine Webhosting-Plattform, die statische Websites direkt aus Ihrem GitHub-Repository bereitstellt. Sie bietet außerdem zusätzliche Funktionen wie Vorschauen vor der Veröffentlichung, serverlose Funktionen und die Verarbeitung von Formularen.

Diese Möglichkeiten sind mit eingeschränktem Funktionsumfang in der Regel kostenlos.

## Welchen Ansatz empfehlen wir?

Wenn Sie gerade erst anfangen, empfehlen wir GitHub Pages, da es einfach zu verwenden ist.

1. Wenn Sie noch kein Konto haben, [registrieren Sie sich bei GitHub](https://github.com/).
2. Erstellen Sie ein Repository für Ihre Website. Folgen Sie dazu den Schritten unter [Ein Repository für Ihre Website erstellen](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-a-repository-for-your-site).
3. Laden Sie die Dateien Ihrer Website über die GitHub-Benutzeroberfläche in Ihr neues Repository hoch. Eine Anleitung dazu finden Sie unter [Eine Datei zu einem Repository auf GitHub hinzufügen](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository#adding-a-file-to-a-repository-on-github).
4. Richten Sie Ihr Repository so ein, dass seine Inhalte mit GitHub Pages veröffentlicht werden. Folgen Sie dazu der Anleitung unter [Aus einem Branch veröffentlichen](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch).
5. Nach kurzer Zeit sollte eine Meldung erscheinen, dass Ihre Website unter `https://username.github.io/repositoryname/` erreichbar ist. Wenn Ihr GitHub-Benutzername beispielsweise `bobsmith` lautet und Ihr Repository `my-first-website` heißt, verweist die Meldung auf `https://bobsmith.github.io/my-first-website/`. Außerdem sollte eine Schaltfläche „Visit site“ erscheinen, über die Sie Ihre Website aufrufen können.

> [!NOTE]
> Wenn Sie eine eigene Domain besitzen und diese auf eine GitHub-Pages-Website verweisen lassen möchten, lesen Sie die Anleitung unter [Eine benutzerdefinierte Domain für Ihre GitHub-Pages-Website konfigurieren](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Weiterführende Informationen

- [Was ist ein Webserver?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server)
- [Domainnamen verstehen](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name)
- [Eine Website bereitstellen](https://www.codecademy.com/learn/deploy-a-website): Ein hilfreiches Tutorial von Codecademy, das etwas weiter geht und zusätzliche Techniken zeigt.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}
