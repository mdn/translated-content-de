---
title: Wie laden Sie Ihre Dateien auf einen Webserver hoch?
slug: Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server
l10n:
  sourceCommit: 1eae3d383ad47b5e21bf25764d1d35487ea52bb8
---

{{QuicklinksWithSubPages("/de/docs/Learn_web_development/Howto")}}

Dieser Artikel zeigt Ihnen, wie Sie Ihre Website mit Tools zur Dateiübertragung online veröffentlichen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten wissen,
        <a href="/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server"
          >was ein Webserver ist</a
        >
        und
        <a href="/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name"
          >wie Domainnamen funktionieren</a
        >. Sie sollten außerdem wissen, wie man
        <a
          href="/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server"
          >eine grundlegende Umgebung einrichtet</a
        >
        und wie man
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >eine einfache Webseite schreibt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, wie Sie Dateien mit den verschiedenen verfügbaren Dateiübertragungstools auf einen Server hochladen können.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Wenn Sie eine einfache Webseite erstellt haben (siehe [HTML-Grundlagen](/de/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content) für ein Beispiel), möchten Sie diese wahrscheinlich online auf einem Webserver veröffentlichen. In diesem Artikel besprechen wir, wie das mit verschiedenen verfügbaren Optionen wie SFTP-Clients, RSync und GitHub möglich ist.

## SFTP

Es gibt mehrere SFTP-Clients. Unsere Demo umfasst [FileZilla](https://filezilla-project.org/), da es kostenlos und für Windows, macOS und Linux verfügbar ist. Um FileZilla zu installieren, gehen Sie zur [FileZilla-Download-Seite](https://filezilla-project.org/download.php?type=client), klicken Sie auf die große Schaltfläche „Download“ und installieren Sie das Programm dann auf die übliche Weise über die Installationsdatei.

> [!NOTE]
> Natürlich gibt es viele andere Optionen. Weitere Informationen finden Sie unter [Veröffentlichungswerkzeuge](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost#publishing_tools).

Öffnen Sie die FileZilla-Anwendung; es sollte etwa so aussehen:

![Screenshot der Benutzeroberfläche der FileZilla FTP-Anwendung. Das Host-Eingabefeld ist fokussiert.](filezilla-ui.png)

### Anmeldung

Für dieses Beispiel nehmen wir an, dass unser Hosting-Anbieter (der Dienst, der unseren HTTP-Webserver hosten wird) ein fiktives Unternehmen ist, „Example Hosting Provider“, dessen URLs so aussehen: `mypersonalwebsite.examplehostingprovider.net`.

Wir haben gerade ein Konto eröffnet und diese Informationen von ihnen erhalten:

> Herzlichen Glückwunsch zur Eröffnung eines Kontos bei Example Hosting Provider.
>
> Ihr Account ist: `demozilla`
>
> Ihre Website wird sichtbar sein unter `demozilla.examplehostingprovider.net`
>
> Um dieses Konto zu veröffentlichen, verbinden Sie sich bitte über SFTP mit den folgenden Anmeldedaten:
>
> - SFTP-Server: `sftp://demozilla.examplehostingprovider.net`
> - Benutzername: `demozilla`
> - Passwort: `quickbrownfox`
> - Port: `5548`
> - Um im Web zu veröffentlichen, legen Sie Ihre Dateien im Verzeichnis `Public/htdocs` ab.

Schauen wir uns zuerst `http://demozilla.examplehostingprovider.net/` an – wie Sie sehen, ist dort bisher nichts vorhanden:

![Unsere persönliche demozilla-Website, im Browser gesehen: Sie ist leer](demozilla-empty.png)

> [!NOTE]
> Je nach Hosting-Anbieter sehen Sie beim ersten Besuch Ihrer Webadresse in der Regel eine Seite mit einem Hinweis wie "Diese Website wird von [Hostingdienst] gehostet."

Um den SFTP-Client mit dem entfernten Server zu verbinden, führen Sie die folgenden Schritte aus:

1. Wählen Sie _Datei > Seitenmanager…_ aus dem Hauptmenü.
2. Drücken Sie im _Seitenmanager_-Fenster die Schaltfläche _Neue Seite_, und geben Sie dann den Seitennamen als **demozilla** in den angegebenen Bereich ein.
3. Tragen Sie den vom Host bereitgestellten SFTP-Server in das Feld _Host:_ ein.
4. Wählen Sie im Drop-down-Menü _Anmeldetyp:_ die Option _Normal_, und geben Sie in die entsprechenden Felder Ihren bereitgestellten Benutzernamen und Ihr Passwort ein.
5. Tragen Sie den korrekten Port und die weiteren Informationen ein.

Ihr Fenster sollte in etwa so aussehen:

![Screenshot der Standard-Landingpage einer fiktiven Website, wenn das Dateiverzeichnis leer ist](site-manager.png)

Drücken Sie nun _Verbinden_, um eine Verbindung zum SFTP-Server herzustellen.

Hinweis: Stellen Sie sicher, dass Ihr Hosting-Anbieter SFTP (Secure FTP) für Ihre Hosting-Umgebung anbietet. FTP ist von Natur aus unsicher, und Sie sollten es nicht verwenden.

### Hier und dort: lokale und entfernte Ansicht

Sobald die Verbindung hergestellt ist, sollte Ihr Bildschirm in etwa so aussehen (wir haben uns mit einem eigenen Beispiel verbunden, um Ihnen eine Vorstellung zu geben):

![SFTP-Client, der die Inhalte der Website anzeigt, sobald die Verbindung zum SFTP-Server hergestellt ist. Lokale Dateien sind links. Entfernte Dateien sind rechts.](connected.png)

Schauen wir uns an, was Sie sehen:

- Auf der mittleren linken Seite sehen Sie Ihre lokalen Dateien. Navigieren Sie in das Verzeichnis, in dem Sie Ihre Website gespeichert haben (z.B. `mdn`).
- Auf der mittleren rechten Seite sehen Sie entfernte Dateien. Wir sind in unserem entfernten FTP-Root angemeldet (in diesem Fall `users/demozilla`).
- Die unteren und oberen Bereiche können Sie vorerst ignorieren. Dabei handelt es sich um ein Protokoll von Nachrichten, die den Verbindungsstatus zwischen Ihrem Computer und dem SFTP-Server zeigen, und ein Live-Protokoll jeder Interaktion zwischen Ihrem SFTP-Client und dem Server.

### Hochladen auf den Server

Die Anweisungen unseres Beispielhosts teilten uns mit: „Um im Web zu veröffentlichen, legen Sie Ihre Dateien im Verzeichnis `Public/htdocs` ab.“ Sie müssen im rechten Bereich zu dem angegebenen Verzeichnis navigieren. Dieses Verzeichnis ist faktisch das Root Ihrer Website — dort werden Ihre `index.html`-Datei und andere Assets abgelegt.

Sobald Sie das richtige entfernte Verzeichnis gefunden haben, in das Sie Ihre Dateien legen möchten, müssen Sie diese von links nach rechts ziehen und ablegen, um sie auf den Server hochzuladen.

### Sind sie wirklich online?

So weit, so gut, aber sind die Dateien wirklich online? Sie können zur Überprüfung zu Ihrer Website zurückkehren (z.B. `http://demozilla.examplehostingprovider.net/`) in Ihrem Browser:

![Da sind wir: Unsere Website ist live!](here-we-go.png)

Und unsere Website ist live!

## Rsync

{{Glossary("Rsync", "Rsync")}} ist ein lokal-fernes Dateisynchronisierungstool, das normalerweise auf den meisten Unix-basierten Systemen (wie macOS und Linux) verfügbar ist, aber es gibt auch Windows-Versionen.

Es wird als fortgeschritteneres Werkzeug als SFTP angesehen, da es standardmäßig über die Befehlszeile verwendet wird. Ein einfacher Befehl sieht so aus:

```bash
rsync [-options] SOURCE user@x.x.x.x:DESTINATION
```

- `-options` ist ein Bindestrich, gefolgt von einem oder mehreren Buchstaben, zum Beispiel `-v` für ausführliche Fehlermeldungen und `-b` für Backups. Die vollständige Liste finden Sie auf der [rsync Man-Seite](https://linux.die.net/man/1/rsync) (nach "Options summary" suchen).
- `SOURCE` ist der Pfad zur lokalen Datei oder zum Verzeichnis, von dem Sie Dateien kopieren möchten.
- `user@` sind die Zugangsdaten des Benutzers auf dem entfernten Server, zu dem Sie Dateien kopieren möchten.
- `x.x.x.x` ist die IP-Adresse des entfernten Servers.
- `DESTINATION` ist der Pfad zum Ort, an dem Sie Ihre Dateien oder Ihr Verzeichnis auf dem entfernten Server kopieren möchten.

Diese Details müssten Sie von Ihrem Hosting-Anbieter erhalten.

Weitere Informationen und weitere Beispiele finden Sie unter [How to Use Rsync to Copy/Sync Files Between Servers](https://www.atlantic.net/vps-hosting/how-to-use-rsync-copy-sync-files-servers/).

Es ist natürlich eine gute Idee, eine sichere Verbindung zu verwenden, wie auch bei FTP. Im Fall von Rsync geben Sie SSH-Details an, um die Verbindung über SSH herzustellen, indem Sie die Option `-e` verwenden. Zum Beispiel:

```bash
rsync [-options] -e "ssh [SSH DETAILS GO HERE]" SOURCE user@x.x.x.x:DESTINATION
```

Weitere Details zu den benötigten Informationen finden Sie unter [How To Copy Files With Rsync Over SSH](https://www.digitalocean.com/community/tutorials/how-to-copy-files-with-rsync-over-ssh).

### Rsync GUI-Tools

Für Rsync sind GUI-Tools verfügbar (für diejenigen, die sich mit der Befehlszeile weniger wohl fühlen). [Acrosync](https://acrosync.com/mac.html) ist ein solches Tool und es ist für Windows und macOS verfügbar.

Auch hier müssten Sie die Verbindungsdaten von Ihrem Hosting-Anbieter erhalten, aber auf diese Weise hätten Sie eine GUI, um sie einzugeben.

## GitHub

GitHub ermöglicht es, Websites über [GitHub Pages](https://pages.github.com/) (gh-pages) zu veröffentlichen.

Wir haben die Grundlagen dazu im Artikel [Veröffentlichen Ihrer Website](/de/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website) aus unserem [Erste Schritte im Web](/de/docs/Learn_web_development/Getting_started/Your_first_website) Leitfaden behandelt, daher werden wir das hier nicht wiederholen.

Es ist jedoch wichtig zu wissen, dass Sie auch eine Website auf GitHub hosten und mit einer benutzerdefinierten Domain verwenden können. Weitere Informationen finden Sie unter [Using a custom domain with GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) für einen detaillierten Leitfaden.

## Andere Methoden zum Hochladen von Dateien

Das FTP-Protokoll ist eine bekannte Methode zum Veröffentlichen einer Website, aber nicht die einzige. Hier sind einige andere Möglichkeiten:

- **Webschnittstellen**. Eine HTML-Schnittstelle, die als Front-End für einen Dienst zum Hochladen von Dateien fungiert. Wird von Ihrem Hosting-Dienst bereitgestellt.
- **{{Glossary("WebDAV", "WebDAV")}}**. Eine Erweiterung des {{Glossary("HTTP", "HTTP")}}-Protokolls, um erweiterte Dateiverwaltung zu ermöglichen.
