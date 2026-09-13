---
title: Wie laden Sie Ihre Dateien auf einen Webserver hoch?
slug: Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server
l10n:
  sourceCommit: e5cd1cab36e2fdcf5dfe28e10b0a7cb235354e62
---

In diesem Artikel erfahren Sie, wie Sie Ihre Website mit Dateiübertragungstools online veröffentlichen können.

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
          >eine einfache Webseite schreibt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, wie Sie Dateien mithilfe der verschiedenen verfügbaren Dateiübertragungstools auf einen Server hochladen.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Wenn Sie eine einfache Webseite erstellt haben (siehe [HTML-Grundlagen](/de/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content) für ein Beispiel), möchten Sie diese wahrscheinlich online auf einem Webserver veröffentlichen. In diesem Artikel besprechen wir, wie Sie das mithilfe verschiedener verfügbarer Optionen wie SFTP-Clients, RSync und GitHub tun können.

## SFTP

Es gibt mehrere SFTP-Clients. In unserer Demo verwenden wir [FileZilla](https://filezilla-project.org/), da es kostenlos und für Windows, macOS und Linux verfügbar ist. Um FileZilla zu installieren, gehen Sie zur [FileZilla-Download-Seite](https://filezilla-project.org/download.php?type=client), klicken Sie auf den großen Download-Button und installieren Sie es dann auf übliche Weise vom Installationsdatei.

> [!NOTE]
> Natürlich gibt es viele andere Optionen. Siehe [Publishing-Tools](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost#publishing_tools) für weitere Informationen.

Öffnen Sie die FileZilla-Anwendung; Sie sollten etwas in dieser Art sehen:

![Screenshot der Benutzeroberfläche der FileZilla-FTP-Anwendung. Das Eingabefeld für den Host ist fokussiert.](filezilla-ui.png)

### Anmelden

Für dieses Beispiel nehmen wir an, dass unser Hosting-Anbieter (der Dienst, der unseren HTTP-Webserver hostet) eine fiktive Firma "Example Hosting Provider" ist, deren URLs so aussehen: `mypersonalwebsite.examplehostingprovider.net`.

Wir haben gerade ein Konto eröffnet und diese Informationen von ihnen erhalten:

> Glückwunsch zur Eröffnung eines Kontos bei Example Hosting Provider.
>
> Ihr Konto ist: `demozilla`
>
> Ihre Website wird sichtbar sein unter `demozilla.examplehostingprovider.net`
>
> Um auf diesem Konto zu veröffentlichen, verbinden Sie sich bitte über SFTP mit den folgenden Anmeldeinformationen:
>
> - SFTP-Server: `sftp://demozilla.examplehostingprovider.net`
> - Benutzername: `demozilla`
> - Passwort: `quickbrownfox`
> - Port: `5548`
> - Um im Web zu veröffentlichen, legen Sie Ihre Dateien im `Public/htdocs`-Verzeichnis ab.

Lassen Sie uns zuerst `http://demozilla.examplehostingprovider.net/` betrachten — wie Sie sehen können, gibt es dort bisher nichts:

![Unsere demozilla persönliche Website, im Browser gesehen: Sie ist leer](demozilla-empty.png)

> [!NOTE]
> Abhängig von Ihrem Hosting-Anbieter sehen Sie meistens eine Seite mit der Aufschrift „Diese Website wird von \[Hosting Service] gehostet“, wenn Sie zum ersten Mal Ihre Webadresse aufrufen.

Um Ihren SFTP-Client mit dem entfernten Server zu verbinden, führen Sie diese Schritte aus:

1. Wählen Sie _Datei > Seitenmanager..._ im Hauptmenü.
2. Drücken Sie im _Seitenmanager_-Fenster die Schaltfläche _Neue Seite_, füllen Sie dann den Seitennamen als **demozilla** in dem bereitgestellten Feld aus.
3. Füllen Sie den SFTP-Server aus, den Ihr Anbieter in das _Host:_-Feld bereitgestellt hat.
4. Wählen Sie im Dropdown _Anmeldetyp:_ _Normal_, und füllen Sie Ihren bereitgestellten Benutzernamen und Ihr Passwort in die relevanten Felder aus.
5. Füllen Sie den richtigen Port und andere Informationen aus.

Ihr Fenster sollte ungefähr so aussehen:

![Screenshot der Standard-Landingpage einer fiktiven Website, wenn das Dateiverzeichnis leer ist](site-manager.png)

Drücken Sie jetzt _Verbinden_, um sich mit dem SFTP-Server zu verbinden.

Hinweis: Stellen Sie sicher, dass Ihr Hosting-Anbieter SFTP (Secure FTP)-Verbindung zu Ihrem Hosting-Bereich anbietet. FTP ist von Natur aus unsicher und Sie sollten es nicht verwenden.

### Hier und dort: lokale und entfernte Ansicht

Sobald Sie verbunden sind, sollte Ihr Bildschirm etwa so aussehen (wir haben uns mit einem eigenen Beispiel verbunden, um Ihnen eine Vorstellung zu geben):

![SFTP-Client zeigt Website-Inhalte an, nachdem er mit dem SFTP-Server verbunden wurde. Lokale Dateien sind links. Entfernte Dateien sind rechts.](connected.png)

Lassen Sie uns untersuchen, was Sie sehen:

- Auf der linken mittleren Seite sehen Sie Ihre lokalen Dateien. Navigieren Sie zum Verzeichnis, in dem Sie Ihre Website speichern (z.B. `mdn`).
- Auf der rechten mittleren Seite sehen Sie entfernte Dateien. Wir sind in unser entferntes FTP-Wurzelverzeichnis eingeloggt (in diesem Fall `users/demozilla`).
- Sie können die unteren und oberen Bereiche vorerst ignorieren. Dies sind jeweils ein Nachrichtenprotokoll, das den Verbindungsstatus zwischen Ihrem Computer und dem SFTP-Server anzeigt, und ein Live-Protokoll jeder Interaktion zwischen Ihrem SFTP-Client und dem Server.

### Hochladen auf den Server

Die Anweisungen unseres Beispielanbieters sagten uns "Um im Web zu veröffentlichen, legen Sie Ihre Dateien im `Public/htdocs`-Verzeichnis ab". Sie müssen im rechten Bereich zu dem angegebenen Verzeichnis navigieren. Dieses Verzeichnis ist im Wesentlichen die Wurzel Ihrer Website — wo Ihre `index.html` Datei und andere Ressourcen hinkommen.

Sobald Sie das richtige entfernte Verzeichnis gefunden haben, in das Sie Ihre Dateien legen möchten, müssen Sie diese von der linken in die rechte Spalte ziehen, um Ihre Dateien auf den Server hochzuladen.

### Sind sie wirklich online?

Bis hierhin läuft alles gut, aber sind die Dateien wirklich online? Sie können dies überprüfen, indem Sie Ihre Website (z.B. `http://demozilla.examplehostingprovider.net/`) in Ihrem Browser öffnen:

![Hier sind wir: Unsere Website ist live!](here-we-go.png)

Und unsere Website ist live!

## Rsync

{{Glossary("Rsync", "Rsync")}} ist ein Synchronisationstool für lokale zu entfernte Dateien, das allgemein auf den meisten Unix-basierten Systemen (wie macOS und Linux) verfügbar ist, aber es gibt auch Windows-Versionen.

Es wird als ein fortgeschritteneres Tool als SFTP angesehen, da es standardmäßig über die Befehlszeile verwendet wird. Ein grundlegender Befehl sieht folgendermaßen aus:

```bash
rsync [-options] SOURCE user@x.x.x.x:DESTINATION
```

- `-options` ist ein Bindestrich gefolgt von einem oder mehreren Buchstaben, zum Beispiel `-v` für ausführliche Fehlermeldungen und `-b`, um Backups zu erstellen. Sie können die vollständige Liste auf der [rsync man Seite](https://linux.die.net/man/1/rsync) sehen (suchen Sie nach "Options summary").
- `SOURCE` ist der Pfad zur lokalen Datei oder zum Verzeichnis, von dem Sie Dateien kopieren möchten.
- `user@` sind die Anmeldeinformationen des Benutzers auf dem entfernten Server, an den Sie Dateien kopieren möchten.
- `x.x.x.x` ist die IP-Adresse des entfernten Servers.
- `DESTINATION` ist der Pfad zum Speicherort, an den Sie Ihr Verzeichnis oder Ihre Dateien auf dem entfernten Server kopieren möchten.

Solche Details müssten Sie von Ihrem Hosting-Anbieter erhalten.

Für weitere Informationen und weitere Beispiele siehe [How to Use Rsync to Copy/Sync Files Between Servers](https://www.atlantic.net/vps-hosting/how-to-use-rsync-copy-sync-files-servers/).

Es ist natürlich eine gute Idee, wie bei FTP, eine sichere Verbindung zu verwenden. Im Fall von Rsync geben Sie SSH-Details an, um die Verbindung über SSH herzustellen, indem Sie die `-e` Option verwenden. Zum Beispiel:

```bash
rsync [-options] -e "ssh [SSH DETAILS GO HERE]" SOURCE user@x.x.x.x:DESTINATION
```

Weitere Details dazu finden Sie unter [How To Copy Files With Rsync Over SSH](https://www.digitalocean.com/community/tutorials/how-to-copy-files-with-rsync-over-ssh).

### Rsync GUI-Tools

Für Rsync stehen GUI-Tools zur Verfügung (für diejenigen, die sich mit der Befehlszeile nicht so wohl fühlen). [Acrosync](https://acrosync.com/mac.html) ist ein solches Tool und es ist für Windows und macOS verfügbar.

Auch hier müssten Sie die Verbindungsauthentifizierungen von Ihrem Hosting-Anbieter erhalten, aber auf diese Weise hätten Sie eine grafische Benutzeroberfläche, um sie einzugeben.

## GitHub

GitHub ermöglicht Ihnen das Veröffentlichen von Websites über [GitHub Pages](https://pages.github.com/) (gh-pages).

Wir haben die Grundlagen der Nutzung davon im Artikel [Publishing your website](/de/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website) aus unserem [Einführung in das Web](/de/docs/Learn_web_development/Getting_started/Your_first_website) Leitfaden behandelt, daher werden wir es hier nicht alles wiederholen.

Es ist jedoch wissenswert, dass Sie auch eine Website auf GitHub hosten können, dabei jedoch eine benutzerdefinierte Domain verwenden. Siehe [Using a custom domain with GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) für eine detaillierte Anleitung.

## Weitere Methoden zum Hochladen von Dateien

Das FTP-Protokoll ist eine gut bekannte Methode zur Veröffentlichung einer Website, aber nicht die einzige. Hier sind einige andere Möglichkeiten:

- **Webschnittstellen**. Eine HTML-Oberfläche, die als Frontend für einen entfernten Datei-Upload-Dienst fungiert. Wird von Ihrem Hosting-Service bereitgestellt.
- **{{Glossary("WebDAV", "WebDAV")}}**. Eine Erweiterung des {{Glossary("HTTP", "HTTP")}} Protokolls, um erweiterte Dateiverwaltung zu ermöglichen.
