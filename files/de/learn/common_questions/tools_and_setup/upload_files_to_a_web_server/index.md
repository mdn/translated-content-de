---
title: Wie laden Sie Ihre Dateien auf einen Webserver hoch?
slug: Learn/Common_questions/Tools_and_setup/Upload_files_to_a_web_server
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Dieser Artikel zeigt Ihnen, wie Sie Ihre Website online stellen, indem Sie Dateiübertragungswerkzeuge nutzen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie müssen
        <a href="/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server"
          >wissen, was ein Webserver ist</a
        >
        und
        <a href="/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name"
          >wie Domain-Namen funktionieren</a
        >. Sie müssen auch wissen,
        <a
          href="/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server"
          >wie Sie eine grundlegende Umgebung einrichten</a
        >
        und
        <a href="/de/docs/Learn/Getting_started_with_the_web"
          >wie Sie eine einfache Webseite schreiben</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen Sie, wie Sie Dateien mit den verschiedenen verfügbaren Dateiübertragungswerkzeugen auf einen Server übertragen.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Wenn Sie eine einfache Webseite erstellt haben (siehe [HTML-Grundlagen](/de/docs/Learn/Getting_started_with_the_web/HTML_basics) für ein Beispiel), möchten Sie sie wahrscheinlich online auf einem Webserver bereitstellen. In diesem Artikel besprechen wir, wie Sie dies mit verschiedenen verfügbaren Optionen wie SFTP-Clients, RSync und GitHub tun können.

## SFTP

Es gibt mehrere SFTP-Clients. In unserer Demo behandeln wir [FileZilla](https://filezilla-project.org/), da es kostenlos und für Windows, macOS und Linux verfügbar ist. Um FileZilla zu installieren, gehen Sie zur [Download-Seite von FileZilla](https://filezilla-project.org/download.php?type=client), klicken Sie auf den großen Download-Button und installieren Sie es wie gewohnt aus der Installationsdatei.

> [!NOTE]
> Natürlich gibt es viele andere Optionen. Weitere Informationen finden Sie unter [Publishing-Tools](/de/docs/Learn/Common_questions/Tools_and_setup/How_much_does_it_cost#publishing_tools).

Öffnen Sie die FileZilla-Anwendung; Sie sollten etwas wie dies sehen:

![Screenshot der Benutzeroberfläche der FileZilla FTP-Anwendung. Das Host-Eingabefeld ist fokussiert.](filezilla-ui.png)

### Anmelden

In diesem Beispiel nehmen wir an, dass unser Hosting-Anbieter (der Dienst, der unseren HTTP-Webserver hosten wird) ein fiktives Unternehmen "Example Hosting Provider" ist, dessen URLs wie folgt aussehen: `mypersonalwebsite.examplehostingprovider.net`.

Wir haben gerade ein Konto eröffnet und diese Informationen von ihnen erhalten:

> Herzlichen Glückwunsch zur Eröffnung eines Kontos bei Example Hosting Provider.
>
> Ihr Konto ist: `demozilla`
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

Sehen wir uns zuerst `http://demozilla.examplehostingprovider.net/` an — wie Sie sehen können, ist dort bisher nichts zu sehen:

![Unsere persönliche demozilla Webseite, im Browser betrachtet: Sie ist leer](demozilla-empty.png)

> [!NOTE]
> Je nach Ihrem Hosting-Anbieter werden Sie die meiste Zeit zunächst eine Seite sehen, auf der etwas wie "Diese Website wird gehostet von \[Hosting-Dienst]." steht, wenn Sie zuerst Ihre Webadresse aufrufen.

Um Ihren SFTP-Client mit dem entfernten Server zu verbinden, befolgen Sie diese Schritte:

1. Wählen Sie _Datei > Seitenmanager…_ aus dem Hauptmenü.
2. Drücken Sie im _Seitenmanager_-Fenster die _Neue Seite_-Taste und füllen Sie dann den Seitennamen als **demozilla** in den bereitgestellten Raum aus.
3. Geben Sie den SFTP-Server, den Ihr Host bereitgestellt hat, im _Host:_-Feld ein.
4. Wählen Sie im _Anmeldetyp:_ Dropdown _Normal_ aus und füllen Sie Ihren bereitgestellten Benutzernamen und Passwort in die entsprechenden Felder aus.
5. Geben Sie den richtigen Port und andere Informationen ein.

Ihr Fenster sollte etwa so aussehen:

![Screenshot der Standard-Landingpage einer fiktiven Webseite, wenn das Dateiverzeichnis leer ist](site-manager.png)

Drücken Sie nun _Verbinden_, um sich mit dem SFTP-Server zu verbinden.

Hinweis: Stellen Sie sicher, dass Ihr Hosting-Anbieter eine SFTP (Secure FTP)-Verbindung zu Ihrem Hosting-Bereich anbietet. FTP ist von Natur aus unsicher, und Sie sollten es nicht verwenden.

### Hier und dort: lokale und entfernte Ansicht

Sobald die Verbindung hergestellt ist, sollte Ihr Bildschirm in etwa so aussehen (wir haben uns mit einem eigenen Beispiel verbunden, um Ihnen eine Vorstellung zu geben):

![SFTP-Client zeigt Website-Inhalte an, sobald er mit dem SFTP-Server verbunden ist. Lokale Dateien sind links. Entfernte Dateien sind rechts.](connected.png)

Lassen Sie uns ansehen, was Sie sehen:

- In der Mitte links sehen Sie Ihre lokalen Dateien. Navigieren Sie in das Verzeichnis, in dem Sie Ihre Website speichern (z. B. `mdn`).
- In der Mitte rechts sehen Sie entfernte Dateien. Wir sind in unseren entfernten FTP-Root eingeloggt (in diesem Fall `users/demozilla`).
- Sie können die unteren und oberen Bereiche vorerst ignorieren. Diese sind respektive ein Log von Nachrichten, die den Verbindungsstatus zwischen Ihrem Computer und dem SFTP-Server anzeigen, und ein Live-Log von jeder Interaktion zwischen Ihrem SFTP-Client und dem Server.

### Hochladen auf den Server

Unsere Beispielanweisungen des Hosts sagten uns: "Um im Web zu veröffentlichen, legen Sie Ihre Dateien in das Verzeichnis `Public/htdocs`." Sie müssen im rechten Bereich zu dem angegebenen Verzeichnis navigieren. Dieses Verzeichnis ist effektiv das Root Ihrer Website — dort werden Ihre `index.html`-Datei und andere Ressourcen abgelegt.

Sobald Sie das richtige entfernte Verzeichnis gefunden haben, in das Sie Ihre Dateien legen möchten, ziehen Sie sie vom linken Bereich in den rechten Bereich, um Ihre Dateien auf den Server hochzuladen.

### Sind sie wirklich online?

Bisher, so gut, aber sind die Dateien wirklich online? Sie können dies überprüfen, indem Sie in Ihrem Browser zu Ihrer Website zurückkehren (z. B. `http://demozilla.examplehostingprovider.net/`):

![Los geht's: unsere Website ist live!](here-we-go.png)

Und unsere Website ist live!

## Rsync

{{Glossary("Rsync", "Rsync")}} ist ein lokales zu entferntes Datei-Synchronisierungstool, das normalerweise auf den meisten Unix-basierten Systemen (wie macOS und Linux) verfügbar ist, aber es gibt auch Windows-Versionen.

Es wird als ein fortschrittlicheres Werkzeug als SFTP angesehen, da es standardmäßig in der Befehlszeile verwendet wird. Ein einfacher Befehl sieht so aus:

```bash
rsync [-options] SOURCE user@x.x.x.x:DESTINATION
```

- `-options` ist ein Bindestrich gefolgt von einem oder mehreren Buchstaben, zum Beispiel `-v` für ausführliche Fehlermeldungen und `-b` um Sicherungen zu erstellen. Die vollständige Liste finden Sie auf der [rsync Man-Seite](https://linux.die.net/man/1/rsync) (suchen Sie nach "Options summary").
- `SOURCE` ist der Pfad zur lokalen Datei oder zum Verzeichnis, von dem Sie die Dateien kopieren möchten.
- `user@` sind die Anmeldedaten des Benutzers auf dem entfernten Server, zu dem Sie Dateien kopieren möchten.
- `x.x.x.x` ist die IP-Adresse des entfernten Servers.
- `DESTINATION` ist der Pfad zum Ort, an den Sie Ihr Verzeichnis oder Ihre Dateien auf dem entfernten Server kopieren möchten.

Solche Details müssten Sie von Ihrem Hosting-Anbieter erhalten.

Für mehr Informationen und weitere Beispiele, siehe [Anleitung zur Nutzung von Rsync zum Kopieren/Syncen von Dateien zwischen Servern](https://www.atlantic.net/vps-hosting/how-to-use-rsync-copy-sync-files-servers/).

Natürlich ist es eine gute Idee, eine sichere Verbindung zu verwenden, wie bei FTP. Im Falle von Rsync geben Sie SSH-Details an, um die Verbindung über SSH mit der `-e` Option herzustellen. Zum Beispiel:

```bash
rsync [-options] -e "ssh [SSH DETAILS GO HERE]" SOURCE user@x.x.x.x:DESTINATION
```

Weitere Details zu den Anforderungen finden Sie unter [Dateien mit Rsync über SSH kopieren](https://www.digitalocean.com/community/tutorials/how-to-copy-files-with-rsync-over-ssh).

### Rsync GUI-Tools

Für Rsync sind GUI-Tools verfügbar (für diejenigen, die sich nicht so wohl fühlen, die Befehlszeile zu verwenden). [Acrosync](https://acrosync.com/mac.html) ist ein solches Tool und ist für Windows und macOS verfügbar.

Auch hier müssten Sie die Verbindungsauthentifizierungsdetails von Ihrem Hosting-Anbieter erhalten, aber auf diese Weise hätten Sie ein GUI, um sie einzugeben.

## GitHub

GitHub ermöglicht es Ihnen, Websites über [GitHub Pages](https://pages.github.com/) (gh-pages) zu veröffentlichen.

Wir haben die Grundlagen zur Nutzung davon im Artikel [Veröffentlichen Ihrer Website](/de/docs/Learn/Getting_started_with_the_web/Publishing_your_website) aus unserem [Einstieg ins Web](/de/docs/Learn/Getting_started_with_the_web) Leitfaden behandelt, so dass wir es hier nicht noch einmal wiederholen werden.

Es ist jedoch wissenswert, dass Sie auch eine Website auf GitHub hosten können, aber eine benutzerdefinierte Domain damit verwenden können. Siehe [Verwendung einer benutzerdefinierten Domain mit GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) für einen detaillierten Leitfaden.

## Andere Methoden zum Hochladen von Dateien

Das FTP-Protokoll ist eine bekannte Methode zum Veröffentlichen einer Website, aber nicht die einzige. Hier sind einige weitere Möglichkeiten:

- **Web-Schnittstellen**. Eine HTML-Schnittstelle, die als Front-End für einen entfernten Datei-Upload-Dienst fungiert. Bereitgestellt durch Ihren Hosting-Dienst.
- **{{Glossary("WebDAV", "WebDAV")}}**. Eine Erweiterung des {{Glossary("HTTP", "HTTP")}}-Protokolls, um fortgeschrittenere Dateiverwaltung zu ermöglichen.
