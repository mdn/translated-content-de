---
title: Wie laden Sie Ihre Dateien auf einen Webserver hoch?
slug: Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server
l10n:
  sourceCommit: 479ea4c8bff4b900a7968413287c77dde2b0c20f
---

Dieser Artikel zeigt Ihnen, wie Sie Ihre Website mithilfe von Dateiübertragungs-Tools online veröffentlichen.

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
        >. Sie müssen auch wissen, wie man
        <a
          href="/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server"
          >eine grundlegende Umgebung einrichtet</a
        >
        und wie man
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >eine einfache Webseite erstellt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, wie Sie Dateien mit den verschiedenen verfügbaren Dateiübertragungs-Tools auf einen Server übertragen.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Wenn Sie eine einfache Webseite erstellt haben (sehen Sie sich [HTML-Grundlagen](/de/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content) für ein Beispiel an), möchten Sie diese wahrscheinlich online auf einem Webserver verfügbar machen. In diesem Artikel besprechen wir, wie Sie das mit verschiedenen verfügbaren Optionen wie SFTP-Clients, RSync und GitHub tun können.

## SFTP

Es gibt mehrere SFTP-Clients. Unser Beispiel behandelt [FileZilla](https://filezilla-project.org/), da es kostenlos und für Windows, macOS und Linux verfügbar ist. Um FileZilla zu installieren, gehen Sie zur [FileZilla-Downloadseite](https://filezilla-project.org/download.php?type=client), klicken Sie auf die große Schaltfläche „Download“ und installieren Sie dann aus der Installationsdatei wie gewohnt.

> [!NOTE]
> Natürlich gibt es viele andere Optionen. Siehe [Veröffentlichungstools](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost#publishing_tools) für weitere Informationen.

Öffnen Sie die FileZilla-Anwendung; Sie sollten etwas wie dieses sehen:

![Screenshot der Benutzeroberfläche der FileZilla-FTP-Anwendung. Das Host-Eingabefeld hat den Fokus.](filezilla-ui.png)

### Anmelden

Für dieses Beispiel nehmen wir an, dass unser Hosting-Anbieter (der Dienst, der unseren HTTP-Webserver hostet), eine fiktive Firma "Example Hosting Provider" ist, deren URLs so aussehen: `mypersonalwebsite.examplehostingprovider.net`.

Wir haben gerade ein Konto eröffnet und diese Informationen von ihnen erhalten:

> Herzlichen Glückwunsch zur Eröffnung eines Kontos bei Example Hosting Provider.
>
> Ihr Konto lautet: `demozilla`
>
> Ihre Website ist sichtbar unter `demozilla.examplehostingprovider.net`
>
> Um auf dieses Konto zu veröffentlichen, verbinden Sie sich bitte über SFTP mit den folgenden Anmeldedaten:
>
> - SFTP-Server: `sftp://demozilla.examplehostingprovider.net`
> - Benutzername: `demozilla`
> - Passwort: `quickbrownfox`
> - Port: `5548`
> - Um im Web zu veröffentlichen, legen Sie Ihre Dateien in das Verzeichnis `Public/htdocs`.

Sehen wir uns zunächst `http://demozilla.examplehostingprovider.net/` an — wie Sie sehen können, ist dort bisher nichts:

![Unsere persönliche Demozilla-Website, im Browser gesehen: sie ist leer](demozilla-empty.png)

> [!NOTE]
> Abhängig von Ihrem Hosting-Anbieter, sehen Sie meistens eine Seite, die etwas wie „Diese Website wird gehostet von \[Hosting Service].“ sagt, wenn Sie erstmals Ihre Webadresse aufrufen.

Um Ihren SFTP-Client mit dem entfernten Server zu verbinden, gehen Sie wie folgt vor:

1. Wählen Sie _Datei > Site-Manager…_ aus dem Hauptmenü.
2. Drücken Sie im Fenster _Site-Manager_ die Schaltfläche _Neue Site_ und geben Sie dann den Seitennamen **demozilla** in den bereitgestellten Bereich ein.
3. Füllen Sie das von Ihrem Host bereitgestellte SFTP-Server-Feld im Feld _Host:_ aus.
4. Wählen Sie im Drop-down-Menü _Anmeldetyp:_ die Option _Normal_ und füllen Sie die bereitgestellten Anmeldedaten in den entsprechenden Feldern aus.
5. Füllen Sie den richtigen Port und andere Informationen aus.

Ihr Fenster sollte in etwa so aussehen:

![Screenshot der Standard-Landingpage einer fiktiven Website, wenn das Datei-Verzeichnis leer ist](site-manager.png)

Drücken Sie nun _Verbinden_, um eine Verbindung zum SFTP-Server herzustellen.

Hinweis: Stellen Sie sicher, dass Ihr Hosting-Anbieter eine SFTP- (Secure FTP) Verbindung zu Ihrem Hosting-Space bietet. FTP ist inhärent unsicher und sollte nicht verwendet werden.

### Hier und dort: lokale und entfernte Ansicht

Sobald Sie verbunden sind, sollte Ihr Bildschirm etwa so aussehen (wir haben ein eigenes Beispiel verbunden, um Ihnen eine Vorstellung zu geben):

![SFTP-Client zeigt Website-Inhalte an, sobald er mit dem SFTP-Server verbunden ist. Lokale Dateien sind links. Entfernte Dateien sind rechts.](connected.png)

Sehen wir uns an, was Sie sehen:

- Im linken Bereich in der Mitte sehen Sie Ihre lokalen Dateien. Navigieren Sie in das Verzeichnis, in dem Sie Ihre Website speichern (z. B. `mdn`).
- Im rechten Bereich in der Mitte sehen Sie entfernte Dateien. Wir sind in unserem entfernten FTP-Stamm eingeloggt (in diesem Fall `users/demozilla`).
- Die unteren und oberen Bereiche können Sie vorerst ignorieren. Es handelt sich dabei um ein Protokoll der Nachrichten, die den Verbindungsstatus zwischen Ihrem Computer und dem SFTP-Server anzeigen, und um ein Live-Protokoll jeder Interaktion zwischen Ihrem SFTP-Client und dem Server.

### Hochladen auf den Server

Unsere Beispiel-Hostanweisungen sagten uns: „Um im Web zu veröffentlichen, legen Sie Ihre Dateien in das Verzeichnis `Public/htdocs`.“ Sie müssen zum angegebenen Verzeichnis in Ihrem rechten Bereich navigieren. Dieses Verzeichnis ist effektiv der Stamm Ihrer Website — hier werden Ihre `index.html`-Datei und andere Ressourcen hingespeichert.

Sobald Sie das korrekte entfernte Verzeichnis gefunden haben, um Ihre Dateien abzulegen, müssen Sie Ihre Dateien vom linken Bereich in den rechten Bereich ziehen, um sie auf den Server hochzuladen.

### Sind sie wirklich online?

Soweit, so gut, aber sind die Dateien wirklich online? Sie können nachsehen, indem Sie in Ihrem Browser zu Ihrer Website zurückkehren (z. B. `http://demozilla.examplehostingprovider.net/`):

![Los geht's: unsere Website ist online!](here-we-go.png)

Und unsere Website ist live!

## Rsync

{{Glossary("Rsync", "Rsync")}} ist ein lokales-zu-entferntes Datei-Synchronisierungswerkzeug, das allgemein auf den meisten Unix-basierten Systemen verfügbar ist (wie macOS und Linux), aber auch Windows-Versionen existieren.

Es wird als ein fortgeschritteneres Werkzeug als SFTP angesehen, da es standardmäßig über die Befehlszeile verwendet wird. Ein grundlegender Befehl sieht so aus:

```bash
rsync [-options] SOURCE user@x.x.x.x:DESTINATION
```

- `-options` ist ein Bindestrich gefolgt von einem oder mehreren Buchstaben, zum Beispiel `-v` für ausführliche Fehlermeldungen und `-b`, um Backups zu erstellen. Sie können die vollständige Liste auf der [Rsync-Man-Seite](https://linux.die.net/man/1/rsync) sehen (suchen Sie nach „Options summary“).
- `SOURCE` ist der Pfad zur lokalen Datei oder zum lokalen Verzeichnis, aus dem Sie Dateien kopieren möchten.
- `user@` sind die Anmeldedaten des Benutzers auf dem entfernten Server, zu dem Sie Dateien kopieren möchten.
- `x.x.x.x` ist die IP-Adresse des entfernten Servers.
- `DESTINATION` ist der Pfad zu dem Ort, an dem Sie Ihr Verzeichnis oder Ihre Dateien auf dem entfernten Server kopieren möchten.

Diese Details müssten Sie von Ihrem Hosting-Anbieter erhalten.

Für weitere Informationen und Beispiele siehe [How to Use Rsync to Copy/Sync Files Between Servers](https://www.atlantic.net/vps-hosting/how-to-use-rsync-copy-sync-files-servers/).

Natürlich ist es eine gute Idee, wie bei FTP eine sichere Verbindung zu verwenden. Im Falle von Rsync geben Sie SSH-Details an, um die Verbindung über SSH herzustellen, indem Sie die `-e` Option verwenden. Zum Beispiel:

```bash
rsync [-options] -e "ssh [SSH DETAILS GO HERE]" SOURCE user@x.x.x.x:DESTINATION
```

Weitere Details dazu finden Sie unter [How To Copy Files With Rsync Over SSH](https://www.digitalocean.com/community/tutorials/how-to-copy-files-with-rsync-over-ssh).

### Rsync GUI-Tools

GUI-Tools sind für Rsync verfügbar (für diejenigen, die sich mit der Befehlszeile nicht so wohl fühlen). [Acrosync](https://acrosync.com/mac.html) ist ein solches Tool und es ist für Windows und macOS verfügbar.

Auch hier müssten Sie die Verbindungseinstellungen von Ihrem Hosting-Anbieter erhalten, aber auf diese Weise hätten Sie eine GUI, um sie einzugeben.

## GitHub

GitHub ermöglicht Ihnen, Websites über [GitHub Pages](https://pages.github.com/) (gh-pages) zu veröffentlichen.

Wir haben die Grundlagen dieser Nutzung im Artikel [Veröffentlichen Ihrer Website](/de/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website) aus unserem [Leitfaden „Einstieg ins Web“](/de/docs/Learn_web_development/Getting_started/Your_first_website) behandelt, daher werden wir es hier nicht wiederholen.

Es ist jedoch wissenswert, dass Sie auch eine Website auf GitHub hosten können, aber eine benutzerdefinierte Domain damit verwenden können. Siehe [Using a custom domain with GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) für eine detaillierte Anleitung.

## Andere Methoden zum Hochladen von Dateien

Das FTP-Protokoll ist eine bekannte Methode zur Veröffentlichung einer Website, aber nicht die einzige. Hier sind ein paar andere Möglichkeiten:

- **Webschnittstellen**. Eine HTML-Oberfläche, die als Front-End für einen entfernten Datei-Upload-Dienst dient. Bereitgestellt von Ihrem Hosting-Service.
- **{{Glossary("WebDAV", "WebDAV")}}**. Eine Erweiterung des {{Glossary("HTTP", "HTTP")}}-Protokolls, um ein fortgeschritteneres Dateimanagement zu ermöglichen.
