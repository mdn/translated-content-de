---
title: Wie laden Sie Ihre Dateien auf einen Webserver hoch?
slug: Learn/Common_questions/Tools_and_setup/Upload_files_to_a_web_server
l10n:
  sourceCommit: 9de3d03957f1d66f02f45400a6981372aa368c1f
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Dieser Artikel zeigt Ihnen, wie Sie Ihre Website mit Dateiübertragungs-Tools online veröffentlichen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie müssen wissen,
        <a href="/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server"
          >was ein Webserver ist</a
        >
        und
        <a href="/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name"
          >wie Domainnamen funktionieren</a
        >. Sie müssen auch wissen, wie man
        <a
          href="/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server"
          >eine grundlegende Umgebung einrichtet</a
        >
        und wie man
        <a href="/de/docs/Learn/Getting_started_with_the_web"
          >eine einfache Webseite schreibt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, wie man Dateien mit den verschiedenen verfügbaren Dateiübertragungs-Tools auf einen Server hochlädt.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Wenn Sie eine einfache Webseite erstellt haben (siehe [HTML-Grundlagen](/de/docs/Learn/Getting_started_with_the_web/HTML_basics) für ein Beispiel), möchten Sie diese wahrscheinlich online auf einem Webserver platzieren. In diesem Artikel besprechen wir, wie das mit verschiedenen verfügbaren Optionen wie SFTP-Clients, RSync und GitHub gemacht wird.

## SFTP

Es gibt mehrere SFTP-Clients. Unser Demo behandelt [FileZilla](https://filezilla-project.org/), da es kostenlos und für Windows, macOS und Linux verfügbar ist. Um FileZilla zu installieren, gehen Sie zur [FileZilla-Downloadseite](https://filezilla-project.org/download.php?type=client), klicken Sie auf den großen Download-Button und folgen Sie dann der gewohnten Installationsroutine mit der Installationsdatei.

> [!NOTE]
> Natürlich gibt es viele andere Optionen. Weitere Informationen finden Sie unter [Veröffentlichungstools](/de/docs/Learn/Common_questions/Tools_and_setup/How_much_does_it_cost#publishing_tools).

Öffnen Sie die FileZilla-Anwendung; Sie sollten etwas Ähnliches sehen wie:

![Screenshot der Benutzeroberfläche der FileZilla FTP-Anwendung. Das Host-Eingabefeld ist fokussiert.](filezilla-ui.png)

### Anmelden

Für dieses Beispiel nehmen wir an, dass unser Hosting-Anbieter (der Dienst, der unseren HTTP-Webserver hosten wird) eine fiktive Firma "Example Hosting Provider" ist, deren URLs so aussehen: `mypersonalwebsite.examplehostingprovider.net`.

Wir haben gerade ein Konto eröffnet und diese Informationen von ihnen erhalten:

> Herzlichen Glückwunsch zur Eröffnung eines Kontos bei Example Hosting Provider.
>
> Ihr Konto lautet: `demozilla`
>
> Ihre Website wird sichtbar unter `demozilla.examplehostingprovider.net`
>
> Um auf dieses Konto zu veröffentlichen, verbinden Sie sich bitte über SFTP mit den folgenden Zugangsdaten:
>
> - SFTP-Server: `sftp://demozilla.examplehostingprovider.net`
> - Benutzername: `demozilla`
> - Passwort: `quickbrownfox`
> - Port: `5548`
> - Um im Web zu veröffentlichen, legen Sie Ihre Dateien im Verzeichnis `Public/htdocs` ab.

Schauen wir zuerst auf `http://demozilla.examplehostingprovider.net/` — wie Sie sehen können, ist bisher nichts dort:

![Unsere persönliche demozilla-Website, gesehen in einem Browser: sie ist leer](demozilla-empty.png)

> [!NOTE]
> Abhängig von Ihrem Hosting-Anbieter sehen Sie meistens eine Seite, auf der etwas steht wie "Diese Website wird gehostet von \[Hosting Service].", wenn Sie erstmals zu Ihrer Webadresse gehen.

Um Ihren SFTP-Client mit dem entfernten Server zu verbinden, befolgen Sie diese Schritte:

1. Wählen Sie _Datei > Seiten-Manager…_ im Hauptmenü.
2. Drücken Sie im _Seiten-Manager_-Fenster den Button _Neue Seite_ und geben Sie dann den Seitennamen als **demozilla** ein.
3. Geben Sie den SFTP-Server, den Ihr Host bereitgestellt hat, in das Feld _Host:_ ein.
4. Wählen Sie im Dropdown _Anmeldetyp:_ die Option _Normal_ und füllen Sie die entsprechenden Felder mit Ihrem Benutzername und Passwort aus.
5. Geben Sie den korrekten Port und andere Informationen ein.

Ihr Fenster sollte in etwa so aussehen:

![Screenshot der Standard-Landingpage einer fiktiven Website, wenn das Dateiverzeichnis leer ist](site-manager.png)

Drücken Sie nun _Verbinden_, um sich mit dem SFTP-Server zu verbinden.

Hinweis: Stellen Sie sicher, dass Ihr Hosting-Anbieter eine SFTP (Secure FTP)-Verbindung zu Ihrem Hosting-Space anbietet. FTP ist von Natur aus unsicher und sollte nicht verwendet werden.

### Hier und dort: Lokale und entfernte Ansicht

Sobald verbunden, sollte Ihr Bildschirm in etwa so aussehen (wir haben uns mit einem eigenen Beispiel verbunden, um Ihnen eine Vorstellung zu geben):

![SFTP-Client zeigt die Website-Inhalte nach Verbindung mit dem SFTP-Server an. Lokale Dateien sind links. Entfernte Dateien sind rechts.](connected.png)

Lassen Sie uns untersuchen, was Sie sehen:

- In der linken Mitte sehen Sie Ihre lokalen Dateien. Navigieren Sie in das Verzeichnis, in dem Sie Ihre Website speichern (z.B. `mdn`).
- In der rechten Mitte sehen Sie entfernte Dateien. Wir sind in unser entferntes FTP-Root eingeloggt (in diesem Fall `users/demozilla`)
- Sie können die unteren und oberen Bereiche zunächst ignorieren. Dies sind jeweils ein Protokoll mit Nachrichten, das den Verbindungsstatus zwischen Ihrem Computer und dem SFTP-Server anzeigt, und ein Live-Protokoll jeder Interaktion zwischen Ihrem SFTP-Client und dem Server.

### Hochladen auf den Server

Unsere Beispiel-Host-Anweisungen besagten "Um im Web zu veröffentlichen, legen Sie Ihre Dateien im Verzeichnis `Public/htdocs` ab." Sie müssen in Ihrem rechten Bereich zu dem angegebenen Verzeichnis navigieren. Dieses Verzeichnis ist effektiv das Root Ihrer Website — dort wird Ihre `index.html`-Datei und andere Assets platziert.

Sobald Sie das richtige entfernte Verzeichnis gefunden haben, in das Sie Ihre Dateien platzieren möchten, müssen Sie sie per Drag-and-Drop vom linken Bereich in den rechten Bereich hochladen.

### Sind sie wirklich online?

Bisher, so gut, aber sind die Dateien wirklich online? Sie können es überprüfen, indem Sie in Ihrem Browser zu Ihrer Website (z.B. `http://demozilla.examplehostingprovider.net/`) zurückkehren:

![Da sind wir: Unsere Website ist live!](here-we-go.png)

Und unsere Website ist live!

## Rsync

{{Glossary("Rsync")}} ist ein Tool zur Synchronisierung von lokalen und entfernten Dateien, das in der Regel auf den meisten Unix-basierten Systemen (wie macOS und Linux) verfügbar ist, aber es gibt auch Windows-Versionen.

Es gilt als ein fortgeschritteneres Tool als SFTP, weil es standardmäßig in der Befehlszeile verwendet wird. Ein einfacher Befehl sieht so aus:

```bash
rsync [-options] SOURCE user@x.x.x.x:DESTINATION
```

- `-options` ist ein Bindestrich gefolgt von einem oder mehreren Buchstaben, zum Beispiel `-v` für ausführliche Fehlermeldungen und `-b`, um Sicherungskopien zu erstellen. Die vollständige Liste finden Sie auf der [rsync-Man-Seite](https://linux.die.net/man/1/rsync) (nach "Options summary" suchen).
- `SOURCE` ist der Pfad zur lokalen Datei oder Verzeichnis, von dem aus Sie Dateien kopieren möchten.
- `user@` sind die Anmeldeinformationen des Benutzers auf dem entfernten Server, zu dem Sie Dateien kopieren möchten.
- `x.x.x.x` ist die IP-Adresse des entfernten Servers.
- `DESTINATION` ist der Pfad zum Ort, an den Sie Ihr Verzeichnis oder Ihre Dateien auf dem entfernten Server kopieren möchten.

Solche Details müssten Sie von Ihrem Hosting-Anbieter erhalten.

Weitere Informationen und weitere Beispiele finden Sie unter [How to Use Rsync to Copy/Sync Files Between Servers](https://www.atlantic.net/vps-hosting/how-to-use-rsync-copy-sync-files-servers/).

Natürlich ist es eine gute Idee, eine sichere Verbindung zu verwenden, wie bei FTP. Im Falle von Rsync geben Sie SSH-Details an, um die Verbindung über SSH herzustellen, unter Verwendung der Option `-e`. Zum Beispiel:

```bash
rsync [-options] -e "ssh [SSH DETAILS GO HERE]" SOURCE user@x.x.x.x:DESTINATION
```

Weitere Details zu den benötigten Informationen finden Sie unter [How To Copy Files With Rsync Over SSH](https://www.digitalocean.com/community/tutorials/how-to-copy-files-with-rsync-over-ssh).

### Rsync GUI-Tools

Es sind GUI-Tools für Rsync verfügbar (für diejenigen, die sich mit der Befehlszeile nicht so wohl fühlen). [Acrosync](https://acrosync.com/mac.html) ist ein solches Tool und es ist für Windows und macOS verfügbar.

Auch hier müssten Sie die Verbindungsdaten von Ihrem Hosting-Anbieter erhalten, aber auf diese Weise hätten Sie eine GUI, um diese einzugeben.

## GitHub

GitHub erlaubt es Ihnen, Websites über [GitHub Pages](https://pages.github.com/) (gh-pages) zu veröffentlichen.

Wir haben die Grundlagen der Nutzung davon im Artikel [Veröffentlichen Ihrer Website](/de/docs/Learn/Getting_started_with_the_web/Publishing_your_website) aus unserem Leitfaden [Einstieg ins Web](/de/docs/Learn/Getting_started_with_the_web) behandelt, daher werden wir hier nicht alles wiederholen.

Es ist jedoch gut zu wissen, dass Sie auch eine Website auf GitHub hosten können, aber eine benutzerdefinierte Domain damit verwenden können. Siehe [Verwendung einer benutzerdefinierten Domain mit GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) für eine detaillierte Anleitung.

## Andere Methoden zum Hochladen von Dateien

Das FTP-Protokoll ist eine bekannte Methode zur Veröffentlichung einer Website, aber nicht die einzige. Hier sind einige andere Möglichkeiten:

- **Webschnittstellen**. Eine HTML-Oberfläche, die als Front-End für einen entfernten Dateiupload-Dienst dient. Bereitgestellt von Ihrem Hosting-Dienst.
- **{{Glossary("WebDAV")}}**. Eine Erweiterung des {{Glossary("HTTP")}}-Protokolls, um fortschrittlichere Datei-Management-Funktionen zu ermöglichen.
