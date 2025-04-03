---
title: Wie laden Sie Ihre Dateien auf einen Webserver hoch?
slug: Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{QuicklinksWithSubPages("/de/docs/Learn_web_development/Howto")}}

Dieser Artikel zeigt Ihnen, wie Sie Ihre Website mit Dateiübertragungstools online veröffentlichen können.

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
        >. Sie sollten auch wissen, wie man
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
        Erlernen, wie man Dateien mithilfe verschiedener zur Verfügung stehender Dateiübertragungswerkzeuge auf einen Server bringt.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Wenn Sie eine einfache Webseite erstellt haben (siehe [HTML-Grundlagen](/de/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content) für ein Beispiel), möchten Sie sie wahrscheinlich online, auf einem Webserver, veröffentlichen. In diesem Artikel werden wir besprechen, wie das mit verschiedenen verfügbaren Optionen wie SFTP-Clients, RSync und GitHub geschehen kann.

## SFTP

Es gibt verschiedene SFTP-Clients. Unsere Demo behandelt [FileZilla](https://filezilla-project.org/), da es kostenlos ist und für Windows, macOS und Linux verfügbar ist. Um FileZilla zu installieren, gehen Sie auf die [FileZilla-Download-Seite](https://filezilla-project.org/download.php?type=client), klicken Sie auf den großen Download-Button und installieren Sie es dann wie gewohnt vom Installationsprogramm.

> [!NOTE]
> Natürlich gibt es viele andere Optionen. Weitere Informationen finden Sie unter [Veröffentlichungstools](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost#publishing_tools).

Öffnen Sie die FileZilla-Anwendung; Sie sollten etwas Ähnliches sehen:

![Screenshot der Benutzeroberfläche der FileZilla FTP-Anwendung. Hosteingabe hat den Fokus.](filezilla-ui.png)

### Anmeldung

Für dieses Beispiel nehmen wir an, dass unser Hosting-Anbieter (der Dienst, der unseren HTTP-Webserver hosten wird) eine fiktive Firma "Beispiel-Hosting-Anbieter" ist, deren URLs so aussehen: `mypersonalwebsite.examplehostingprovider.net`.

Wir haben gerade ein Konto eröffnet und diese Informationen von ihnen erhalten:

> Herzlichen Glückwunsch zur Kontoeröffnung bei Beispiel-Hosting-Anbieter.
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

Sehen wir uns zuerst `http://demozilla.examplehostingprovider.net/` an — wie Sie sehen können, ist dort bisher nichts:

![Unsere persönliche demozilla-Website, im Browser betrachtet: Sie ist leer](demozilla-empty.png)

> [!NOTE]
> Abhängig von Ihrem Hosting-Anbieter sehen Sie beim ersten Aufruf Ihrer Webadresse meist eine Seite mit dem Hinweis "Diese Website wird gehostet von \[Hosting Service]."

Um Ihren SFTP-Client mit dem entfernten Server zu verbinden, folgen Sie diesen Schritten:

1. Wählen Sie _Datei > Servermanager…_ im Hauptmenü.
2. Drücken Sie im _Servermanager_-Fenster die Schaltfläche _Neue Seite_, dann füllen Sie im vorgesehenen Feld den Seitennamen als **demozilla** aus.
3. Geben Sie den von Ihrem Host bereitgestellten SFTP-Server im Feld _Host:_ ein.
4. Wählen Sie im Dropdown-Menü _Anmeldetyp:_ _Normal_, und geben Sie Ihren Benutzernamen und Ihr Passwort in die entsprechenden Felder ein.
5. Geben Sie den richtigen Port und andere Informationen ein.

Ihre Fensteransicht sollte ungefähr so aussehen:

![Screenshot der Standard-Startseite einer fiktiven Website, wenn das Dateiverzeichnis leer ist](site-manager.png)

Drücken Sie nun _Verbinden_, um sich mit dem SFTP-Server zu verbinden.

Hinweis: Stellen Sie sicher, dass Ihr Hosting-Anbieter eine SFTP (Secure FTP)-Verbindung zu Ihrem Hosting-Bereich anbietet. FTP ist von Natur aus unsicher und sollte nicht verwendet werden.

### Hier und dort: lokale und entfernte Ansicht

Sobald Sie verbunden sind, sollte Ihr Bildschirm in etwa so aussehen (wir haben unser eigenes Beispiel angeschlossen, um Ihnen eine Vorstellung zu geben):

![SFTP-Client zeigt den Website-Inhalt an, nachdem er mit dem SFTP-Server verbunden wurde. Lokale Dateien sind links. Entfernte Dateien sind rechts.](connected.png)

Lassen Sie uns ansehen, was Sie sehen:

- Im linken mittleren Bereich sehen Sie Ihre lokalen Dateien. Navigieren Sie in das Verzeichnis, in dem Sie Ihre Website speichern (z. B. `mdn`).
- Im rechten mittleren Bereich sehen Sie entfernte Dateien. Wir sind in unser entferntes FTP-Stammverzeichnis eingeloggt (in diesem Fall `users/demozilla`).
- Sie können die unteren und oberen Bereiche vorerst ignorieren. Diese zeigen respektive ein Protokoll von Nachrichten an, die den Verbindungsstatus zwischen Ihrem Computer und dem SFTP-Server anzeigen, sowie ein Live-Protokoll jeder Interaktion zwischen Ihrem SFTP-Client und dem Server.

### Hochladen auf den Server

Unsere Beispielhostanweisungen sagten uns: "Um im Web zu veröffentlichen, legen Sie Ihre Dateien im Verzeichnis `Public/htdocs` ab." Sie müssen in Ihrem rechten Bereich zu dem angegebenen Verzeichnis navigieren. Dieses Verzeichnis ist im Wesentlichen das Wurzelverzeichnis Ihrer Website — dorthin gehören Ihre `index.html`-Datei und andere Assets.

Sobald Sie das richtige entfernte Verzeichnis gefunden haben, um Ihre Dateien abzulegen, ziehen Sie zum Hochladen Ihrer Dateien auf den Server diese einfach von links nach rechts.

### Sind sie wirklich online?

So weit, so gut, aber sind die Dateien wirklich online? Sie können dies überprüfen, indem Sie zu Ihrer Website (z. B. `http://demozilla.examplehostingprovider.net/`) in Ihrem Browser zurückkehren:

![Da sind wir: Unsere Website ist live!](here-we-go.png)

Und unsere Website ist live!

## Rsync

{{Glossary("Rsync", "Rsync")}} ist ein Werkzeug zur Synchronisierung von Dateien zwischen lokalem und entferntem Speicher, das auf den meisten Unix-basierten Systemen (wie macOS und Linux) allgemein verfügbar ist, aber auch Windows-Versionen existieren.

Es gilt als ein fortgeschritteneres Werkzeug als SFTP, da es standardmäßig in der Befehlszeile verwendet wird. Ein grundlegender Befehl sieht so aus:

```bash
rsync [-options] SOURCE user@x.x.x.x:DESTINATION
```

- `-options` ist ein Bindestrich, gefolgt von einem oder mehreren Buchstaben, zum Beispiel `-v` für ausführliche Fehlermeldungen und `-b` zum Erstellen von Backups. Die vollständige Liste finden Sie auf der [rsync Man-Seite](https://linux.die.net/man/1/rsync) (suchen Sie nach "Options summary").
- `SOURCE` ist der Pfad zur lokalen Datei oder zum Verzeichnis, von dem Sie Dateien kopieren möchten.
- `user@` sind die Anmeldedaten des Benutzers auf dem entfernten Server, zu dem Sie Dateien kopieren möchten.
- `x.x.x.x` ist die IP-Adresse des entfernten Servers.
- `DESTINATION` ist der Pfad zum Speicherort, an den Sie Ihr Verzeichnis oder Ihre Dateien auf dem entfernten Server kopieren möchten.

Solche Details müssten Sie von Ihrem Hosting-Anbieter erhalten.

Für weitere Informationen und Beispiele siehe [How to Use Rsync to Copy/Sync Files Between Servers](https://www.atlantic.net/vps-hosting/how-to-use-rsync-copy-sync-files-servers/).

Natürlich ist es eine gute Idee, wie bei FTP eine sichere Verbindung zu verwenden. Im Fall von Rsync geben Sie SSH-Details an, um die Verbindung über SSH herzustellen, indem Sie die `-e` Option verwenden. Zum Beispiel:

```bash
rsync [-options] -e "ssh [SSH DETAILS GO HERE]" SOURCE user@x.x.x.x:DESTINATION
```

Weitere Details zu den erforderlichen Informationen finden Sie unter [How To Copy Files With Rsync Over SSH](https://www.digitalocean.com/community/tutorials/how-to-copy-files-with-rsync-over-ssh).

### Rsync GUI-Tools

Für Rsync sind GUI-Tools verfügbar (für diejenigen, die sich mit der Befehlszeile nicht so wohl fühlen). [Acrosync](https://acrosync.com/mac.html) ist ein solches Tool, und es ist für Windows und macOS erhältlich.

Auch hier müssten Sie die Verbindungsdaten von Ihrem Hosting-Anbieter erhalten, aber auf diese Weise hätten Sie eine grafische Benutzeroberfläche, um sie einzugeben.

## GitHub

GitHub ermöglicht das Veröffentlichen von Websites über [GitHub Pages](https://pages.github.com/) (gh-pages).

Die Grundlagen zur Nutzung dieses Dienstes haben wir in dem Artikel [Veröffentlichen Ihrer Website](/de/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website) aus unserem [Einstieg in das Web](/de/docs/Learn_web_development/Getting_started/Your_first_website) Leitfaden behandelt, daher werden wir hier nicht alles wiederholen.

Es ist jedoch wissenswert, dass Sie auch eine Website auf GitHub hosten können, jedoch mit einer benutzerdefinierten Domain. Weitere Informationen finden Sie unter [Using a custom domain with GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Weitere Methoden zum Hochladen von Dateien

Das FTP-Protokoll ist eine bekannte Methode zur Veröffentlichung einer Website, aber nicht die einzige. Hier sind einige weitere Möglichkeiten:

- **Webschnittstellen**. Eine HTML-Oberfläche dient als Front-End für einen Dienst zum Hochladen von Dateien. Bereitgestellt von Ihrem Hosting-Dienst.
- **{{Glossary("WebDAV", "WebDAV")}}**. Eine Erweiterung des {{Glossary("HTTP", "HTTP")}} Protokolls, um erweiterte Datei-Management-Möglichkeiten zu ermöglichen.
