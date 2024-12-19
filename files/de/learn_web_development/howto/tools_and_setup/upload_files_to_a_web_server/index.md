---
title: Wie laden Sie Ihre Dateien auf einen Webserver hoch?
slug: Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Dieser Artikel zeigt Ihnen, wie Sie Ihre Website mit Dateiübertragungstools online veröffentlichen.

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
        >. Sie müssen auch wissen, wie Sie
        <a
          href="/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server"
          >eine grundlegende Umgebung einrichten</a
        >
        und wie Sie 
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >eine einfache Webseite schreiben können</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, wie Sie Dateien mit den verschiedenen verfügbaren Dateiübertragungstools auf einen Server hochladen.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Wenn Sie eine einfache Webseite erstellt haben (siehe [HTML-Grundlagen](/de/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content) für ein Beispiel), möchten Sie diese wahrscheinlich online auf einem Webserver veröffentlichen. In diesem Artikel werden wir besprechen, wie das geht, indem wir verschiedene verfügbare Optionen wie SFTP-Clients, RSync und GitHub verwenden.

## SFTP

Es gibt mehrere SFTP-Clients. Unsere Demo behandelt [FileZilla](https://filezilla-project.org/), da es kostenlos und für Windows, macOS und Linux verfügbar ist. Um FileZilla zu installieren, gehen Sie zur [FileZilla-Downloads-Seite](https://filezilla-project.org/download.php?type=client), klicken Sie auf die große Schaltfläche "Herunterladen" und installieren Sie dann wie gewohnt aus der Installationsdatei.

> [!NOTE]
> Natürlich gibt es viele andere Optionen. Weitere Informationen finden Sie unter [Veröffentlichungstools](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost#publishing_tools).

Öffnen Sie die FileZilla-Anwendung; Sie sollten etwas wie das Folgende sehen:

![Screenshot der Benutzeroberfläche der FileZilla FTP-Anwendung. Die Host-Eingabe hat den Fokus.](filezilla-ui.png)

### Einloggen

Für dieses Beispiel nehmen wir an, dass unser Hosting-Anbieter (der Dienst, der unseren HTTP-Webserver hostet) eine fiktive Firma namens "Example Hosting Provider" ist, deren URLs wie folgt aussehen: `mypersonalwebsite.examplehostingprovider.net`.

Wir haben gerade ein Konto eröffnet und diese Informationen von ihnen erhalten:

> Herzlichen Glückwunsch zur Eröffnung eines Kontos bei Example Hosting Provider.
>
> Ihr Konto ist: `demozilla`
>
> Ihre Website wird unter `demozilla.examplehostingprovider.net` sichtbar sein.
>
> Um auf dieses Konto zu veröffentlichen, verbinden Sie sich bitte über SFTP mit den folgenden Anmeldedaten:
>
> - SFTP-Server: `sftp://demozilla.examplehostingprovider.net`
> - Benutzername: `demozilla`
> - Passwort: `quickbrownfox`
> - Port: `5548`
> - Um im Web zu veröffentlichen, legen Sie Ihre Dateien im `Public/htdocs`-Verzeichnis ab.

Lassen Sie uns zuerst `http://demozilla.examplehostingprovider.net/` ansehen – wie Sie sehen, ist dort bis jetzt nichts vorhanden:

![Unsere persönliche demozilla-Website, in einem Browser angezeigt: sie ist leer](demozilla-empty.png)

> [!NOTE]
> Abhängig von Ihrem Hosting-Anbieter sehen Sie meistens eine Seite mit einem Hinweis wie "Diese Website wird gehostet von \[Hosting-Dienst].", wenn Sie zuerst Ihre Webadresse aufrufen.

Um Ihren SFTP-Client mit dem entfernten Server zu verbinden, folgen Sie diesen Schritten:

1. Wählen Sie _Datei > Seitenmanager..._ aus dem Hauptmenü.
2. Drücken Sie im _Seitenmanager_-Fenster die Schaltfläche _Neue Seite_, und geben Sie im bereitgestellten Feld den Seitennamen **demozilla** ein.
3. Geben Sie den SFTP-Server, den Ihr Host bereitgestellt hat, im Feld _Host:_ ein.
4. Wählen Sie im Dropdown-Menü _Anmeldetyp:_ die Option _Normal_, und geben Sie Ihren bereitgestellten Benutzernamen und Ihr Passwort in die entsprechenden Felder ein.
5. Geben Sie den richtigen Port und andere Informationen ein.

Ihr Fenster sollte in etwa so aussehen:

![Screenshot der Standardstartseite einer fiktiven Website, wenn das Dateiverzeichnis leer ist](site-manager.png)

Drücken Sie jetzt auf _Verbinden_, um sich mit dem SFTP-Server zu verbinden.

Hinweis: Stellen Sie sicher, dass Ihr Hosting-Anbieter SFTP (Secure FTP)-Verbindung zu Ihrem Hosting-Bereich anbietet. FTP ist von Natur aus unsicher, und Sie sollten es nicht verwenden.

### Hier und dort: lokale und entfernte Ansicht

Sobald Sie verbunden sind, sollte Ihr Bildschirm in etwa so aussehen (wir haben uns mit einem eigenen Beispiel verbunden, um Ihnen einen Eindruck zu geben):

![SFTP-Client zeigt Website-Inhalte an, nachdem er mit dem SFTP-Server verbunden ist. Lokale Dateien sind links. Entfernte Dateien sind rechts.](connected.png)

Lassen Sie uns untersuchen, was Sie sehen:

- Auf der linken Seite sehen Sie Ihre lokalen Dateien. Navigieren Sie in das Verzeichnis, in dem Sie Ihre Website speichern (z.B. `mdn`).
- Auf der rechten Seite sehen Sie entfernte Dateien. Wir sind in unserem entfernten FTP-Root eingeloggt (in diesem Fall, `users/demozilla`).
- Sie können den unteren und oberen Bereich vorerst ignorieren. Diese sind jeweils ein Protokoll von Nachrichten, die den Verbindungsstatus zwischen Ihrem Computer und dem SFTP-Server anzeigen, und ein Live-Protokoll jeder Interaktion zwischen Ihrem SFTP-Client und dem Server.

### Hochladen auf den Server

Unsere Beispiel-Host-Anweisungen sagten uns: "Um im Web zu veröffentlichen, legen Sie Ihre Dateien im `Public/htdocs`-Verzeichnis ab." Sie müssen zu dem angegebenen Verzeichnis im rechten Bereich navigieren. Dieses Verzeichnis ist effektiv der Root Ihrer Website — wo Ihre `index.html`-Datei und andere Ressourcen hinkommen.

Sobald Sie das richtige entfernte Verzeichnis gefunden haben, um Ihre Dateien abzulegen, müssen Sie zum Hochladen Ihrer Dateien auf den Server diese vom linken Bereich in den rechten Bereich ziehen und ablegen.

### Sind sie wirklich online?

Bisher läuft alles gut, aber sind die Dateien wirklich online? Sie können dies überprüfen, indem Sie zu Ihrer Website (z.B. `http://demozilla.examplehostingprovider.net/`) in Ihrem Browser zurückkehren:

![Los geht's: Unsere Website ist online!](here-we-go.png)

Und unsere Website ist live!

## Rsync

{{Glossary("Rsync", "Rsync")}} ist ein Tool zur Synchronisierung von Dateien von lokal zu entfernt, das in der Regel auf den meisten Unix-basierten Systemen (wie macOS und Linux) verfügbar ist, aber es gibt auch Versionen für Windows.

Es wird als ein fortschrittlicheres Tool als SFTP angesehen, da es standardmäßig über die Befehlszeile verwendet wird. Ein grundlegender Befehl sieht so aus:

```bash
rsync [-options] SOURCE user@x.x.x.x:DESTINATION
```

- `-options` ist ein Strich gefolgt von einem oder mehreren Buchstaben, zum Beispiel `-v` für ausführliche Fehlermeldungen, und `-b` zur Erstellung von Backups. Die vollständige Liste finden Sie auf der [rsync Man-Seite](https://linux.die.net/man/1/rsync) (suchen Sie nach "Options summary").
- `SOURCE` ist der Pfad zur lokalen Datei oder zum Verzeichnis, von dem Sie Dateien kopieren möchten.
- `user@` sind die Anmeldedaten des Benutzers auf dem entfernten Server, auf den Sie Dateien kopieren möchten.
- `x.x.x.x` ist die IP-Adresse des entfernten Servers.
- `DESTINATION` ist der Pfad zum Speicherort, an den Sie Ihr Verzeichnis oder Ihre Dateien auf dem entfernten Server kopieren möchten.

Solche Daten müssten Sie von Ihrem Hosting-Anbieter erhalten.

Weitere Informationen und weitere Beispiele finden Sie unter [How to Use Rsync to Copy/Sync Files Between Servers](https://www.atlantic.net/vps-hosting/how-to-use-rsync-copy-sync-files-servers/).

Natürlich ist es eine gute Idee, wie bei FTP eine sichere Verbindung zu verwenden. Im Falle von Rsync geben Sie SSH-Details an, um die Verbindung über SSH herzustellen, indem Sie die Option `-e` verwenden. Zum Beispiel:

```bash
rsync [-options] -e "ssh [SSH DETAILS GO HERE]" SOURCE user@x.x.x.x:DESTINATION
```

Weitere Details zu den benötigten Informationen finden Sie unter [How To Copy Files With Rsync Over SSH](https://www.digitalocean.com/community/tutorials/how-to-copy-files-with-rsync-over-ssh).

### Rsync GUI-Tools

Für Rsync sind GUI-Tools verfügbar (für diejenigen, die mit der Befehlszeile nicht so vertraut sind). [Acrosync](https://acrosync.com/mac.html) ist ein solches Tool und es ist für Windows und macOS verfügbar.

Auch hier müssen Sie die Verbindungsdaten von Ihrem Hosting-Anbieter erhalten, hätten aber eine GUI, um sie einzugeben.

## GitHub

GitHub ermöglicht es Ihnen, Websites über [GitHub Pages](https://pages.github.com/) (gh-pages) zu veröffentlichen.

Wir haben die Grundlagen der Verwendung in dem Artikel [Veröffentlichen Ihrer Website](/de/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website) in unserem [Einführung ins Web](/de/docs/Learn_web_development/Getting_started/Your_first_website) Leitfaden behandelt, daher werden wir das hier nicht alles wiederholen.

Es ist jedoch hilfreich zu wissen, dass Sie auch eine Website auf GitHub hosten, sie jedoch mit einer benutzerdefinierten Domain verwenden können. Sehen Sie [Verwenden einer benutzerdefinierten Domain mit GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) für einen detaillierten Leitfaden.

## Andere Methoden zum Hochladen von Dateien

Das FTP-Protokoll ist eine bekannte Methode zum Veröffentlichen einer Website, aber nicht die einzige. Hier sind einige weitere Möglichkeiten:

- **Weboberflächen**. Eine HTML-Oberfläche, die als Frontend für einen entfernten Datei-Upload-Dienst dient. Bereitgestellt von Ihrem Hosting-Dienst.
- **{{Glossary("WebDAV", "WebDAV")}}**. Eine Erweiterung des {{Glossary("HTTP", "HTTP")}}-Protokolls, die eine fortschrittlichere Dateiverwaltung ermöglicht.
