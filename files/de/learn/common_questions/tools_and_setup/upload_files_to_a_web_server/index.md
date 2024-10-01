---
title: Wie laden Sie Ihre Dateien auf einen Webserver hoch?
slug: Learn/Common_questions/Tools_and_setup/Upload_files_to_a_web_server
l10n:
  sourceCommit: 9de3d03957f1d66f02f45400a6981372aa368c1f
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Dieser Artikel zeigt Ihnen, wie Sie Ihre Website online veröffentlichen, indem Sie Dateitransfertools verwenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie müssen wissen
        <a href="/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server"
          >was ein Webserver ist</a
        >
        und
        <a href="/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name"
          >wie Domainnamen funktionieren</a
        >. Sie müssen auch wissen, wie Sie
        <a
          href="/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server"
          >eine grundlegende Umgebung aufsetzen</a
        >
        und wie Sie
        <a href="/de/docs/Learn/Getting_started_with_the_web"
          >eine einfache Webseite schreiben</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, wie Sie Dateien mit den verschiedenen verfügbaren Dateitransfertools auf einen Server laden.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Wenn Sie eine einfache Webseite erstellt haben (siehe [HTML-Grundlagen](/de/docs/Learn/Getting_started_with_the_web/HTML_basics) für ein Beispiel), möchten Sie sie wahrscheinlich online auf einem Webserver veröffentlichen. In diesem Artikel besprechen wir, wie Sie das tun können, indem Sie verschiedene verfügbare Optionen wie SFTP-Clients, RSync und GitHub nutzen.

## SFTP

Es gibt mehrere SFTP-Clients. Unser Beispiel behandelt [FileZilla](https://filezilla-project.org/), da es kostenlos und für Windows, macOS und Linux verfügbar ist. Um FileZilla zu installieren, gehen Sie zur [FileZilla-Download-Seite](https://filezilla-project.org/download.php?type=client), klicken Sie auf die große Schaltfläche „Download“ und installieren Sie es dann wie üblich aus der Installationsdatei.

> [!NOTE]
> Natürlich gibt es viele andere Optionen. Siehe [Veröffentlichungstools](/de/docs/Learn/Common_questions/Tools_and_setup/How_much_does_it_cost#publishing_tools) für mehr Informationen.

Öffnen Sie die FileZilla-Anwendung; Sie sollten so etwas sehen:

![Screenshot der Benutzeroberfläche der FileZilla FTP-Anwendung. Das Host-Eingabefeld ist fokussiert.](filezilla-ui.png)

### Einloggen

Für dieses Beispiel gehen wir davon aus, dass unser Hosting-Anbieter (der Dienst, der unseren HTTP-Webserver hosten wird) eine fiktive Firma "Example Hosting Provider" ist, deren URLs so aussehen: `mypersonalwebsite.examplehostingprovider.net`.

Wir haben gerade ein Konto eröffnet und folgende Informationen von ihnen erhalten:

> Herzlichen Glückwunsch zur Eröffnung eines Kontos bei Example Hosting Provider.
>
> Ihr Konto lautet: `demozilla`
>
> Ihre Website wird unter `demozilla.examplehostingprovider.net` sichtbar sein
>
> Um auf dieses Konto zu veröffentlichen, verbinden Sie sich bitte über SFTP mit den folgenden Zugangsdaten:
>
> - SFTP-Server: `sftp://demozilla.examplehostingprovider.net`
> - Benutzername: `demozilla`
> - Passwort: `quickbrownfox`
> - Port: `5548`
> - Um im Web zu veröffentlichen, legen Sie Ihre Dateien im Verzeichnis `Public/htdocs` ab.

Schauen wir uns zunächst `http://demozilla.examplehostingprovider.net/` an — wie Sie sehen, gibt es dort bisher nichts:

![Unsere persönliche Website demozilla, im Browser gesehen: sie ist leer](demozilla-empty.png)

> [!NOTE]
> Abhängig von Ihrem Hosting-Anbieter sehen Sie beim ersten Aufrufen Ihrer Webadresse meist eine Seite, die so etwas wie "Diese Website wird gehostet von \[Hosting-Service]" anzeigt.

Um Ihren SFTP-Client mit dem entfernten Server zu verbinden, folgen Sie diesen Schritten:

1. Wählen Sie _Datei > Seitenmanager…_ im Hauptmenü.
2. Drücken Sie im _Seitenmanager_-Fenster die Schaltfläche _Neue Seite_, und füllen Sie den Site-Namen als **demozilla** in den vorgegebenen Raum ein.
3. Füllen Sie den von Ihrem Host bereitgestellten SFTP-Server im Feld _Host:_ aus.
4. Wählen Sie im Dropdown-Menü _Anmeldetyp:_ die Option _Normal_ und füllen Sie Ihren angegebenen Benutzernamen und Ihr Passwort in die entsprechenden Felder ein.
5. Füllen Sie den korrekten Port und andere Informationen aus.

Ihr Fenster sollte in etwa so aussehen:

![Screenshot der Standardlandeseite einer fiktiven Website, wenn das Dateiverzeichnis leer ist](site-manager.png)

Jetzt drücken Sie _Verbinden_, um sich mit dem SFTP-Server zu verbinden.

Hinweis: Stellen Sie sicher, dass Ihr Hosting-Anbieter SFTP (Secure FTP) Verbindung zu Ihrem Hosting-Bereich anbietet. FTP ist von Natur aus unsicher, und Sie sollten es nicht verwenden.

### Hier und dort: lokale und entfernte Ansicht

Einmal verbunden, sollte Ihr Bildschirm in etwa so aussehen (wir haben uns mit einem eigenen Beispiel verbunden, um Ihnen eine Vorstellung zu geben):

![SFTP-Client, der die Website-Inhalte anzeigt, sobald er mit dem SFTP-Server verbunden ist. Lokale Dateien sind links. Entfernte Dateien sind rechts.](connected.png)

Lassen Sie uns untersuchen, was Sie sehen:

- Auf dem mittleren linken Fensterbereich sehen Sie Ihre lokalen Dateien. Navigieren Sie in das Verzeichnis, in dem Sie Ihre Website speichern (z. B. `mdn`).
- Auf dem mittleren rechten Fensterbereich sehen Sie entfernte Dateien. Wir sind in unserem entfernten FTP-Stammverzeichnis eingeloggt (in diesem Fall `users/demozilla`)
- Sie können die unteren und oberen Fensterbereiche vorerst ignorieren. Diese zeigen ein Protokoll von Nachrichten, die den Verbindungsstatus zwischen Ihrem Computer und dem SFTP-Server anzeigen, sowie ein Live-Protokoll jeder Interaktion zwischen Ihrem SFTP-Client und dem Server.

### Auf den Server hochladen

Unsere Beispielhost-Anweisungen sagten uns: „Um im Web zu veröffentlichen, legen Sie Ihre Dateien im Verzeichnis `Public/htdocs` ab.“ Sie müssen in Ihrem rechten Fensterbereich zu dem angegebenen Verzeichnis navigieren. Dieses Verzeichnis ist effektiv das Stammverzeichnis Ihrer Website – dort, wo sich Ihre `index.html`-Datei und andere Assets befinden werden.

Sobald Sie das richtige entfernte Verzeichnis gefunden haben, in dem Sie Ihre Dateien ablegen sollen, müssen Sie sie per Drag-and-Drop vom linken in den rechten Fensterbereich ziehen, um Ihre Dateien auf den Server hochzuladen.

### Sind sie wirklich online?

Bis jetzt sieht alles gut aus, aber sind die Dateien wirklich online? Sie können es überprüfen, indem Sie in Ihrem Browser zu Ihrer Website zurückkehren (z. B. `http://demozilla.examplehostingprovider.net/`):

![Jetzt geht's los: Unsere Website ist live!](here-we-go.png)

Und unsere Website ist online!

## Rsync

{{Glossary("Rsync", "Rsync")}} ist ein lokales-zu-entfernten Datei-Synchronisationstool, das allgemein auf den meisten Unix-basierten Systemen (wie macOS und Linux) verfügbar ist, aber es gibt auch Windows-Versionen.

Es gilt als ein fortschrittlicheres Tool als SFTP, da es standardmäßig in der Befehlszeile verwendet wird. Ein grundlegender Befehl sieht so aus:

```bash
rsync [-options] SOURCE user@x.x.x.x:DESTINATION
```

- `-options` ist ein Bindestrich, gefolgt von einem oder mehreren Buchstaben, zum Beispiel `-v` für ausführliche Fehlermeldungen und `-b` zur Erstellung von Backups. Die vollständige Liste finden Sie auf der [rsync-Man-Seite](https://linux.die.net/man/1/rsync) (suchen Sie nach "Options summary").
- `SOURCE` ist der Pfad zur lokalen Datei oder Verzeichnis, von dem Sie Dateien kopieren möchten.
- `user@` sind die Anmeldeinformationen des Benutzers auf dem entfernten Server, auf den Sie Dateien kopieren möchten.
- `x.x.x.x` ist die IP-Adresse des entfernten Servers.
- `DESTINATION` ist der Pfad zum Ort, an den Sie Ihr Verzeichnis oder Ihre Dateien auf dem entfernten Server kopieren möchten.

Sie müssten solche Details von Ihrem Hosting-Anbieter erhalten.

Weitere Informationen und Beispiele finden Sie unter [Wie benutzt man Rsync, um Dateien zwischen Servern zu kopieren/synchronisieren](https://www.atlantic.net/vps-hosting/how-to-use-rsync-copy-sync-files-servers/).

Natürlich ist es eine gute Idee, eine sichere Verbindung wie bei FTP zu verwenden. Bei Rsync geben Sie SSH-Details an, um die Verbindung über SSH herzustellen, indem Sie die `-e`-Option verwenden. Zum Beispiel:

```bash
rsync [-options] -e "ssh [SSH DETAILS GO HERE]" SOURCE user@x.x.x.x:DESTINATION
```

Detaillierte Informationen darüber, was benötigt wird, finden Sie unter [Wie man Dateien mit Rsync über SSH kopiert](https://www.digitalocean.com/community/tutorials/how-to-copy-files-with-rsync-over-ssh).

### Rsync-GUI-Tools

Für Rsync sind GUI-Tools verfügbar (für diejenigen, die nicht so vertraut mit der Befehlszeile sind). [Acrosync](https://acrosync.com/mac.html) ist ein solches Tool und es ist für Windows und macOS verfügbar.

Auch hier müssten Sie die Verbindungsdaten von Ihrem Hosting-Anbieter erhalten, aber auf diese Weise hätten Sie eine grafische Benutzeroberfläche, um sie einzutragen.

## GitHub

GitHub ermöglicht es Ihnen, Websites über [GitHub Pages](https://pages.github.com/) (gh-pages) zu veröffentlichen.

Wir haben die Grundlagen der Nutzung in dem Artikel [Veröffentlichen Ihrer Website](/de/docs/Learn/Getting_started_with_the_web/Publishing_your_website) aus unserem [Einstieg in das Web](/de/docs/Learn/Getting_started_with_the_web) Leitfaden behandelt, daher werden wir hier nicht alles wiederholen.

Es ist jedoch wissenswert, dass Sie auch eine Website auf GitHub hosten, aber eine benutzerdefinierte Domain damit verwenden können. Siehe [Verwendung einer benutzerdefinierten Domain mit GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) für einen detaillierten Leitfaden.

## Andere Methoden, um Dateien hochzuladen

Das FTP-Protokoll ist eine bekannte Methode zum Veröffentlichen einer Website, aber nicht die einzige. Hier sind einige andere Möglichkeiten:

- **Webschnittstellen**. Eine HTML-Oberfläche, die als Front-End für einen entfernten Datei-Upload-Service dient. Bereitgestellt von Ihrem Hosting-Service.
- **{{Glossary("WebDAV", "WebDAV")}}**. Eine Erweiterung des {{Glossary("HTTP", "HTTP")}}-Protokolls, um eine fortschrittlichere Datei-Verwaltung zu ermöglichen.
