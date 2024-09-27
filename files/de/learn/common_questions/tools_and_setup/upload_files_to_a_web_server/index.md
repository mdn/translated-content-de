---
title: Wie laden Sie Ihre Dateien auf einen Webserver hoch?
slug: Learn/Common_questions/Tools_and_setup/Upload_files_to_a_web_server
l10n:
  sourceCommit: 9de3d03957f1d66f02f45400a6981372aa368c1f
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Dieser Artikel zeigt Ihnen, wie Sie Ihre Website mithilfe von Dateitransfertools online veröffentlichen.

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
        Lernen Sie, wie Sie mithilfe der verschiedenen verfügbaren Dateitransfertools Dateien auf einen Server hochladen.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Wenn Sie eine einfache Webseite erstellt haben (siehe [HTML-Grundlagen](/de/docs/Learn/Getting_started_with_the_web/HTML_basics) für ein Beispiel), möchten Sie sie wahrscheinlich online auf einem Webserver veröffentlichen. In diesem Artikel besprechen wir, wie das geht, indem wir verschiedene verfügbare Optionen wie SFTP-Clients, RSync und GitHub verwenden.

## SFTP

Es gibt mehrere SFTP-Clients. Unser Demo behandelt [FileZilla](https://filezilla-project.org/), da es kostenlos ist und für Windows, macOS und Linux verfügbar ist. Um FileZilla zu installieren, gehen Sie zur [FileZilla-Downloadseite](https://filezilla-project.org/download.php?type=client), klicken Sie auf die große Schaltfläche „Download“ und installieren Sie die Anwendung dann wie gewohnt vom Installationsprogramm.

> [!NOTE]
> Natürlich gibt es viele andere Optionen. Weitere Informationen finden Sie unter [Veröffentlichungstools](/de/docs/Learn/Common_questions/Tools_and_setup/How_much_does_it_cost#publishing_tools).

Öffnen Sie die FileZilla-Anwendung; Sie sollten etwas in der Art sehen:

![Screenshot der Benutzeroberfläche der Filezilla-FTP-Anwendung. Das Host-Eingabefeld ist fokussiert.](filezilla-ui.png)

### Anmeldung

In diesem Beispiel nehmen wir an, dass unser Hosting-Anbieter (der Dienst, der unseren HTTP-Webserver hostet) ein fiktives Unternehmen "Beispiel-Hosting-Anbieter" ist, dessen URLs so aussehen: `mypersonalwebsite.examplehostingprovider.net`.

Wir haben gerade ein Konto eröffnet und folgende Informationen von ihnen erhalten:

> Herzlichen Glückwunsch zur Eröffnung eines Kontos beim Beispiel-Hosting-Anbieter.
>
> Ihr Konto lautet: `demozilla`
>
> Ihre Website wird sichtbar sein unter `demozilla.examplehostingprovider.net`
>
> Um auf dieses Konto zu veröffentlichen, verbinden Sie sich bitte über SFTP mit den folgenden Zugangsdaten:
>
> - SFTP-Server: `sftp://demozilla.examplehostingprovider.net`
> - Benutzername: `demozilla`
> - Passwort: `quickbrownfox`
> - Port: `5548`
> - Um im Web zu veröffentlichen, legen Sie Ihre Dateien im Verzeichnis `Public/htdocs` ab.

Sehen wir uns zuerst `http://demozilla.examplehostingprovider.net/` an - wie Sie sehen können, ist dort bisher nichts:

![Unsere Demozilla-Persönliche Website, im Browser angezeigt: sie ist leer](demozilla-empty.png)

> [!NOTE]
> Abhängig von Ihrem Hosting-Anbieter sehen Sie meistens eine Seite mit einem Hinweis wie "Diese Website wird von \[Hosting Dienst] gehostet", wenn Sie zum ersten Mal Ihre Webadresse besuchen.

Um Ihren SFTP-Client mit dem entfernten Server zu verbinden, folgen Sie diesen Schritten:

1. Wählen Sie _Datei > Seitenmanager…_ aus dem Hauptmenü.
2. Drücken Sie im _Seitenmanager_-Fenster die Schaltfläche _Neue Seite_ und füllen Sie dann den Seitennamen als **demozilla** im bereitgestellten Raum aus.
3. Tragen Sie den von Ihrem Host bereitgestellten SFTP-Server im Feld _Host:_ ein.
4. Wählen Sie im Dropdown _Anmeldeart:_ _Normal_ und geben Sie dann Ihren Benutzernamen und Ihr Passwort in die entsprechenden Felder ein.
5. Füllen Sie den richtigen Port und andere Informationen aus.

Ihr Fenster sollte in etwa so aussehen:

![Screenshot der Standardseite einer fiktiven Webseite, wenn das Datei-Verzeichnis leer ist](site-manager.png)

Drücken Sie nun _Verbinden_, um sich mit dem SFTP-Server zu verbinden.

Hinweis: Stellen Sie sicher, dass Ihr Hosting-Anbieter SFTP (Secure FTP) Verbindung für Ihren Hosting-Bereich anbietet. FTP ist von Natur aus unsicher und sollte nicht verwendet werden.

### Hier und dort: lokale und entfernte Ansicht

Sobald verbunden, sollte Ihr Bildschirm in etwa so aussehen (wir haben uns mit unserem eigenen Beispiel verbunden, um Ihnen eine Vorstellung zu geben):

![SFTP-Client zeigt Website-Inhalte an, sobald er mit dem SFTP-Server verbunden wurde. Lokale Dateien sind links. Entfernte Dateien sind rechts.](connected.png)

Untersuchen wir, was Sie sehen:

- Auf dem linken Bereich in der Mitte sehen Sie Ihre lokalen Dateien. Navigieren Sie in das Verzeichnis, in dem Sie Ihre Website gespeichert haben (z. B. `mdn`).
- Auf dem rechten Bereich in der Mitte sehen Sie entfernte Dateien. Wir sind in unserem entfernten FTP-Stammverzeichnis angemeldet (in diesem Fall `users/demozilla`).
- Sie können den unteren und oberen Bereich vorerst ignorieren. Dies sind respektive Protokolle der Nachrichten, die den Verbindungsstatus zwischen Ihrem Computer und dem SFTP-Server anzeigen, und ein Live-Protokoll aller Interaktionen zwischen Ihrem SFTP-Client und dem Server.

### Auf den Server hochladen

Unsere Beispiel-Host-Anweisungen sagten uns: "Um im Web zu veröffentlichen, legen Sie Ihre Dateien im Verzeichnis `Public/htdocs` ab." Sie müssen zur angegebenen Verzeichnisebene in Ihrem rechten Bereich navigieren. Dieses Verzeichnis ist effektiv der Stamm Ihrer Website — wohin Ihre `index.html`-Datei und andere Ressourcen gehen.

Sobald Sie das richtige entfernte Verzeichnis gefunden haben, um Ihre Dateien abzulegen, müssen Sie sie per Drag-and-Drop vom linken Bereich in den rechten Bereich auf den Server hochladen.

### Sind sie wirklich online?

Bis jetzt sieht es gut aus, aber sind die Dateien wirklich online? Sie können dies überprüfen, indem Sie in Ihrem Browser zu Ihrer Website zurückkehren (z. B. `http://demozilla.examplehostingprovider.net/`):

![Hier sind wir: unsere Website ist online!](here-we-go.png)

Und unsere Website ist online!

## Rsync

[Rsync](/de/docs/Glossary/Rsync) ist ein Tool zum Synchronisieren von Dateien von lokal nach entfernt, das auf den meisten Unix-basierten Systemen (wie macOS und Linux) verfügbar ist, aber es gibt auch Windows-Versionen.

Es gilt als ein fortgeschritteneres Tool als SFTP, weil es standardmäßig über die Befehlszeile verwendet wird. Ein einfacher Befehl sieht so aus:

```bash
rsync [-options] SOURCE user@x.x.x.x:DESTINATION
```

- `-options` ist ein Bindestrich gefolgt von einem oder mehreren Buchstaben, z. B. `-v` für ausführliche Fehlermeldungen und `-b`, um Backups zu erstellen. Die vollständige Liste finden Sie auf der [rsync-Man-Seite](https://linux.die.net/man/1/rsync) (suchen Sie nach "Optionsübersicht").
- `SOURCE` ist der Pfad zur lokalen Datei oder zum lokalen Verzeichnis, von dem Sie Dateien kopieren möchten.
- `user@` sind die Zugangsdaten des Benutzers auf dem entfernten Server, zu dem Sie Dateien kopieren möchten.
- `x.x.x.x` ist die IP-Adresse des entfernten Servers.
- `DESTINATION` ist der Pfad zu dem Ort, an den Sie das Verzeichnis oder die Dateien auf dem entfernten Server kopieren möchten.

Solche Details müssten Sie von Ihrem Hosting-Anbieter bekommen.

Weitere Informationen und Beispiele finden Sie unter [How to Use Rsync to Copy/Sync Files Between Servers](https://www.atlantic.net/vps-hosting/how-to-use-rsync-copy-sync-files-servers/).

Natürlich ist es eine gute Idee, eine sichere Verbindung zu verwenden, wie bei FTP. Im Falle von Rsync spezifizieren Sie SSH-Details, um die Verbindung über SSH herzustellen, und verwenden die `-e`-Option. Zum Beispiel:

```bash
rsync [-options] -e "ssh [SSH DETAILS GO HERE]" SOURCE user@x.x.x.x:DESTINATION
```

Detailliertere Informationen, was benötigt wird, finden Sie unter [How To Copy Files With Rsync Over SSH](https://www.digitalocean.com/community/tutorials/how-to-copy-files-with-rsync-over-ssh).

### Rsync-GUI-Tools

GUI-Tools sind für Rsync verfügbar (für diejenigen, die sich nicht so wohl mit der Befehlszeile fühlen). [Acrosync](https://acrosync.com/mac.html) ist ein solches Tool, und es ist für Windows und macOS erhältlich.

Auch hier müssten Sie die Zugangsdaten von Ihrem Hosting-Anbieter erhalten, aber auf diese Weise hätten Sie eine GUI, in die Sie diese eintragen können.

## GitHub

GitHub ermöglicht es Ihnen, Websites über [GitHub Pages](https://pages.github.com/) (gh-pages) zu veröffentlichen.

Die Grundlagen der Verwendung haben wir im Artikel [Veröffentlichen Ihrer Website](/de/docs/Learn/Getting_started_with_the_web/Publishing_your_website) aus unserem [Einstieg ins Web](/de/docs/Learn/Getting_started_with_the_web) Leitfaden behandelt, daher werden wir es hier nicht wiederholen.

Es ist jedoch gut zu wissen, dass Sie auch eine Website auf GitHub hosten können, aber eine benutzerdefinierte Domain damit verwenden können. Siehe [Using a custom domain with GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) für eine detaillierte Anleitung.

## Andere Methoden zum Hochladen von Dateien

Das FTP-Protokoll ist eine bekannte Methode zur Veröffentlichung einer Website, aber nicht die einzige. Hier sind einige weitere Möglichkeiten:

- **Weboberflächen**. Eine HTML-Schnittstelle, die als Front-End für einen entfernten Datei-Upload-Dienst fungiert. Bereitgestellt von Ihrem Hosting-Dienst.
- **[WebDAV](/de/docs/Glossary/WebDAV)**. Eine Erweiterung des [HTTP](/de/docs/Glossary/HTTP)-Protokolls, um fortschrittlichere Dateiverwaltung zu ermöglichen.
