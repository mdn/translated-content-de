---
title: Wie laden Sie Ihre Dateien auf einen Webserver hoch?
slug: Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server
l10n:
  sourceCommit: 09a34cfd2a50cad3d6b520027cbab56f05d4d731
---

Dieser Artikel zeigt Ihnen, wie Sie Ihre Website mithilfe von Dateiübertragungswerkzeugen online veröffentlichen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie müssen wissen,
        <a href="/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server"
          >was ein Webserver ist</a
        >
        und
        <a href="/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name"
          >wie Domainnamen funktionieren</a
        >. Sie müssen außerdem wissen, wie Sie
        <a
          href="/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server"
          >eine grundlegende Umgebung einrichten</a
        >
        und wie Sie
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >eine einfache Webseite schreiben</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erfahren, wie Sie Dateien mit den verschiedenen verfügbaren
        Dateiübertragungswerkzeugen auf einen Server übertragen.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Wenn Sie eine einfache Webseite erstellt haben (siehe [HTML-Grundlagen](/de/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content) für ein Beispiel), möchten Sie sie wahrscheinlich auf einem Webserver online stellen. In diesem Artikel besprechen wir, wie das mit verschiedenen verfügbaren Optionen wie SFTP-Clients, RSync und GitHub gelingt.

## SFTP

Es gibt mehrere SFTP-Clients. Unsere Demonstration behandelt [FileZilla](https://filezilla-project.org/), da es kostenlos und für Windows, macOS und Linux verfügbar ist. Um FileZilla zu installieren, gehen Sie zur [FileZilla-Downloadseite](https://filezilla-project.org/download.php?type=client), klicken Sie auf die große Schaltfläche „Download“ und installieren Sie es anschließend wie gewohnt über die Installationsdatei.

> [!NOTE]
> Natürlich gibt es viele weitere Optionen. Weitere Informationen finden Sie unter [Werkzeuge zur Veröffentlichung](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost#publishing_tools).

Öffnen Sie die FileZilla-Anwendung; Sie sollten in etwa Folgendes sehen:

![Screenshot der Benutzeroberfläche der FileZilla-FTP-Anwendung. Das Host-Eingabefeld hat den Fokus.](filezilla-ui.png)

### Anmelden

Für dieses Beispiel nehmen wir an, dass unser Hosting-Anbieter (der Dienst, der unseren HTTP-Webserver hostet) ein fiktives Unternehmen namens „Example Hosting Provider“ ist, dessen URLs wie folgt aussehen: `mypersonalwebsite.examplehostingprovider.net`.

Wir haben gerade ein Konto eröffnet und diese Informationen erhalten:

> Herzlichen Glückwunsch zur Eröffnung eines Kontos bei Example Hosting Provider.
>
> Ihr Konto lautet: `demozilla`
>
> Ihre Website wird unter `demozilla.examplehostingprovider.net` sichtbar sein.
>
> Um auf diesem Konto zu veröffentlichen, verbinden Sie sich bitte über SFTP mit den folgenden Zugangsdaten:
>
> - SFTP-Server: `sftp://demozilla.examplehostingprovider.net`
> - Benutzername: `demozilla`
> - Passwort: `quickbrownfox`
> - Port: `5548`
> - Um im Web zu veröffentlichen, legen Sie Ihre Dateien im Verzeichnis `Public/htdocs` ab.

Sehen wir uns zunächst `http://demozilla.examplehostingprovider.net/` an — wie Sie sehen können, befindet sich dort bisher nichts:

![Unsere persönliche demozilla-Website in einem Browser: Sie ist leer](demozilla-empty.png)

> [!NOTE]
> Abhängig von Ihrem Hosting-Anbieter sehen Sie beim ersten Aufruf Ihrer Webadresse meist eine Seite mit einer Meldung wie „Diese Website wird von \[Hosting Service] gehostet.“

Um Ihren SFTP-Client mit dem Remote-Server zu verbinden, führen Sie diese Schritte aus:

1. Wählen Sie im Hauptmenü _File > Site Manager…_.
2. Klicken Sie im Fenster _Site Manager_ auf die Schaltfläche _New Site_ und geben Sie dann im vorgesehenen Feld **demozilla** als Namen der Website ein.
3. Geben Sie den von Ihrem Hoster bereitgestellten SFTP-Server in das Feld _Host:_ ein.
4. Wählen Sie im Dropdown-Menü _Logon Type:_ die Option _Normal_ und geben Sie anschließend Ihren bereitgestellten Benutzernamen und Ihr Passwort in die entsprechenden Felder ein.
5. Geben Sie den richtigen Port und weitere Informationen ein.

Ihr Fenster sollte in etwa so aussehen:

![Screenshot der Standard-Startseite einer fiktiven Website, wenn das Dateiverzeichnis leer ist](site-manager.png)

Klicken Sie nun auf _Connect_, um sich mit dem SFTP-Server zu verbinden.

Hinweis: Stellen Sie sicher, dass Ihr Hosting-Anbieter eine SFTP-Verbindung (Secure FTP) zu Ihrem Hosting-Bereich anbietet. FTP ist von Natur aus unsicher und sollte nicht verwendet werden.

### Hier und dort: lokale und Remote-Ansicht

Nach dem Herstellen der Verbindung sollte Ihr Bildschirm etwa so aussehen (wir haben uns mit einem eigenen Beispiel verbunden, um Ihnen eine Vorstellung zu geben):

![SFTP-Client, der den Inhalt der Website nach der Verbindung mit dem SFTP-Server anzeigt. Lokale Dateien befinden sich links. Remote-Dateien befinden sich rechts.](connected.png)

Sehen wir uns an, was Sie sehen:

- Im mittleren linken Bereich sehen Sie Ihre lokalen Dateien. Navigieren Sie zu dem Verzeichnis, in dem Sie Ihre Website speichern (z. B. `mdn`).
- Im mittleren rechten Bereich sehen Sie Remote-Dateien. Wir sind beim Remote-FTP-Root angemeldet (in diesem Fall `users/demozilla`).
- Den unteren und oberen Bereich können Sie vorerst ignorieren. Sie zeigen jeweils ein Protokoll der Meldungen zum Verbindungsstatus zwischen Ihrem Computer und dem SFTP-Server sowie ein Live-Protokoll jeder Interaktion zwischen Ihrem SFTP-Client und dem Server.

### Auf den Server hochladen

Die Anweisungen unseres Beispiel-Hosters besagten: „Um im Web zu veröffentlichen, legen Sie Ihre Dateien im Verzeichnis `Public/htdocs` ab.“ Sie müssen im rechten Bereich zum angegebenen Verzeichnis navigieren. Dieses Verzeichnis ist praktisch das Root-Verzeichnis Ihrer Website — dorthin gehören Ihre Datei `index.html` und andere Assets.

Sobald Sie das richtige Remote-Verzeichnis für Ihre Dateien gefunden haben, müssen Sie Ihre Dateien per Drag-and-Drop aus dem linken Bereich in den rechten Bereich ziehen, um sie auf den Server hochzuladen.

### Sind sie wirklich online?

So weit, so gut — aber sind die Dateien wirklich online? Sie können dies überprüfen, indem Sie Ihre Website (z. B. `http://demozilla.examplehostingprovider.net/`) erneut in Ihrem Browser aufrufen:

![Los geht's: Unsere Website ist online!](here-we-go.png)

Und unsere Website ist online!

## Rsync

{{Glossary("Rsync", "Rsync")}} ist ein Werkzeug zur Dateisynchronisierung von einem lokalen zu einem Remote-System, das im Allgemeinen auf den meisten Unix-basierten Systemen (wie macOS und Linux) verfügbar ist. Es gibt jedoch auch Versionen für Windows.

Es gilt als fortgeschritteneres Werkzeug als SFTP, da es standardmäßig auf der Kommandozeile verwendet wird. Ein grundlegender Befehl sieht folgendermaßen aus:

```bash
rsync [-options] SOURCE user@x.x.x.x:DESTINATION
```

- `-options` ist ein Bindestrich, gefolgt von einem oder mehreren Buchstaben, beispielsweise `-v` für ausführliche Fehlermeldungen und `-b` zum Erstellen von Sicherungskopien. Die vollständige Liste finden Sie auf der [rsync-Manpage](https://linux.die.net/man/1/rsync) (suchen Sie nach „Options summary“).
- `SOURCE` ist der Pfad zu der lokalen Datei oder dem lokalen Verzeichnis, von der bzw. dem Sie Dateien kopieren möchten.
- `user@` sind die Zugangsdaten des Benutzers auf dem Remote-Server, auf den Sie Dateien kopieren möchten.
- `x.x.x.x` ist die IP-Adresse des Remote-Servers.
- `DESTINATION` ist der Pfad zu dem Speicherort auf dem Remote-Server, in den Sie Ihr Verzeichnis oder Ihre Dateien kopieren möchten.

Solche Angaben müssen Sie von Ihrem Hosting-Anbieter erhalten.

Weitere Informationen und Beispiele finden Sie unter [How to Use Rsync to Copy/Sync Files Between Servers](https://www.atlantic.net/vps-hosting/how-to-use-rsync-copy-sync-files-servers/).

Natürlich ist es eine gute Idee, wie bei FTP eine sichere Verbindung zu verwenden. Im Fall von Rsync geben Sie SSH-Details an, um die Verbindung über SSH herzustellen, indem Sie die Option `-e` verwenden. Zum Beispiel:

```bash
rsync [-options] -e "ssh [SSH DETAILS GO HERE]" SOURCE user@x.x.x.x:DESTINATION
```

Weitere Details zu den erforderlichen Angaben finden Sie unter [How To Copy Files With Rsync Over SSH](https://www.digitalocean.com/community/tutorials/how-to-copy-files-with-rsync-over-ssh).

### Rsync-GUI-Werkzeuge

Für Rsync sind GUI-Werkzeuge verfügbar, für diejenigen, die sich bei der Verwendung der Kommandozeile nicht so wohlfühlen. [Acrosync](https://acrosync.com/mac.html) ist ein solches Werkzeug und für Windows und macOS verfügbar.

Auch hier müssten Sie die Zugangsdaten für die Verbindung von Ihrem Hosting-Anbieter erhalten, hätten dann aber eine GUI, in die Sie sie eingeben können.

## GitHub

GitHub ermöglicht es Ihnen, Websites über [GitHub Pages](https://pages.github.com/) (gh-pages) zu veröffentlichen.

Wir haben die Grundlagen dazu bereits im Artikel [Ihre Website veröffentlichen](/de/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website) aus unserem Leitfaden [Erste Schritte mit dem Web](/de/docs/Learn_web_development/Getting_started/Your_first_website) behandelt, daher werden wir hier nicht alles wiederholen.

Es ist jedoch hilfreich zu wissen, dass Sie eine Website auch auf GitHub hosten und dafür eine benutzerdefinierte Domain verwenden können. Einen ausführlichen Leitfaden finden Sie unter [Using a custom domain with GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Andere Methoden zum Hochladen von Dateien

Das FTP-Protokoll ist eine bekannte Methode zum Veröffentlichen einer Website, aber nicht die einzige. Hier sind einige weitere Möglichkeiten:

- **Web interfaces**. Eine HTML-Oberfläche, die als Frontend für einen Remote-Datei-Upload-Dienst dient. Wird von Ihrem Hosting-Dienst bereitgestellt.
- **{{Glossary("WebDAV", "WebDAV")}}**. Eine Erweiterung des {{Glossary("HTTP", "HTTP")}}-Protokolls, die eine erweiterte Dateiverwaltung ermöglicht.
