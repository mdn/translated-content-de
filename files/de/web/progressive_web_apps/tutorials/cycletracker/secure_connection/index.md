---
title: "CycleTracker: Sichere Verbindung"
short-title: Sichere Verbindung
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS", "Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

{{PWASidebar}}

PWAs können nur mit einer Manifestdatei installiert werden, wenn sie über das `https://` Protokoll bereitgestellt werden, oder wenn sie lokal von `127.0.0.1` und `localhost` URLs mit dem `http://` Protokoll bereitgestellt werden. Sie verwenden auch oft APIs, die [auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts).

Im vorherigen Abschnitt haben wir HTML und CSS verwendet, um das Gerüst unserer Perioden-Tracking-Anwendung zu erstellen. In diesem Abschnitt werden wir das statische CycleTracker-Inhalt in einem Browser öffnen, den Inhalt aus einer lokal gestarteten Entwicklungsumgebung betrachten und den Inhalt auf einem entfernten, sicheren Server anzeigen.

## Anzeige mit dem `file://` Protokoll

Jeder Browser wird Ihr HTML rendern. Um die HTML-Datei mit dem CSS anzuzeigen, das Sie im vorherigen Abschnitt erstellt haben, öffnen Sie die `index.html` Datei, indem Sie über die Dateistruktur Ihres Computers navigieren oder in Ihrem Browser die Option "Datei öffnen" verwenden.

Mit der aktualisierten `index.html` und der `style.css` im gleichen Verzeichnis sollte das Betrachten der Seite in einem schmalen Browserfenster ungefähr so aussehen wie auf diesem Screenshot:

![Helle grüne Webseite mit einem großen Header, einem Formular mit einer Legende, zwei Datumsauswahlen und einem Button. Unten werden zwei Platzhalter-Menstruationszyklen und ein Header angezeigt.](filefile.jpg)

Wir betrachten unsere Seite mit dem `file://` Protokoll, das einen [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) bietet. Dies stellt sicher, dass die Seiten mit dem aktuellen Stand unseres Codebestands angesehen werden können und weiterhin funktionieren, wenn wir [JavaScript-Funktionalität hinzufügen](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality), die einen sicheren Kontext erfordert.

> [!NOTE]
> Ihre App über `https` bereitzustellen ist nicht nur für PWAs vorteilhaft, sondern für alle Websites, da es sicherstellt, dass die Informationen zwischen Ihrem Webserver und dem Browser des Benutzers durchgehend verschlüsselt sind. Mehrere [Web-APIs erfordern sichere Kontexte](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts). Auch wenn Sie keine installierbaren PWAs erstellen, können Sie beim Hinzufügen von Funktionen zu einer Webanwendung auf Fälle stoßen, in denen ein sicherer Kontext erforderlich ist.

Während wir die meisten Anwendungsfunktionen mit dem `file://` Protokoll anzeigen und testen können, können wir es nicht verwenden, um die Anwendungsinstallation mit unserer [Manifestdatei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file) zu testen.

Wir benötigen eine lokale Entwicklungsumgebung, um das gesamte Tutorial einschließlich der Installation zu testen. Teil des [Installierbar-Machens einer PWA](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable) ist ein sicherer Server. Die Dateien müssen über eine sichere Verbindung im Web bereitgestellt werden, um die Vorteile zu nutzen, die PWAs bieten, und unsere Anwendung als PWA zu verteilen.

## localhost

Die Standardmethode zum Einrichten einer lokalen Entwicklungsumgebung variiert je nach Betriebssystem. Während sich der Standardstandort für die Index- und Konfigurationsdateien auf Ihrem Betriebssystem unterscheiden kann, ermöglichen die meisten Desktop-Betriebssysteme eine Serverkonfiguration, die Ihnen, dem Entwickler, zugänglich ist.

Zum Beispiel auf macOS, zumindest auf Sierra und Monterey, ermöglicht das Eingeben von `sudo apachectl start` das Aktivieren eines Apache HTTP-Servers. Sobald der Server gestartet ist, wird beim Eingeben von `http://localhost` im Browser eine einfache Webseite angezeigt, die "It works!" liest. Standardmäßig wird die HTML-Datei `Library/WebServer/Documents/index.html.en` angezeigt. Um andere Dateierweiterungen als `.html.en` zu aktivieren oder das Stammverzeichnis von `Library/WebServer/Documents/` zu ändern, müssen Sie die Apache-HTTP-Konfigurationsdatei bearbeiten, die sich unter `/etc/apache2/httpd.conf` befindet. Der Server kann mit `sudo apachectl stop` gestoppt werden.

Das standardmäßige `localhost` des Betriebssystems hat eine einfach zu merkende URL, aber einen schwer zu merkenden Serverroot-Standort und einen komplexen Konfigurationsprozess. Es lässt auch nur einen lokalen Server an einem Standort gleichzeitig zu. Glücklicherweise gibt es intuitivere Methoden zur Servereinrichtung, um ein oder mehrere lokale Entwicklungsumgebungen auf mehreren Ports zu erstellen.

## localhost mit einer Portnummer

Es gibt mehrere {{Glossary("IDE", "IDE")}} Erweiterungen und programmiersprachen-spezifische Pakete, die das Starten einer Entwicklungsumgebung mit einem einzigen Klick oder Terminalbefehl ermöglichen. Sie können sogar mehrere lokale Server starten, jeweils mit einer anderen Portnummer.

Sie können einen lokalen HTTP-Server mit einem [VS Code Plugin](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#using_an_extension_in_your_code_editor) betreiben, der es ermöglicht, einen lokalen Server auf einem einzelnen oder einem anderen Port zu betreiben. Die [Preview on Web Server Erweiterung](https://marketplace.visualstudio.com/items?itemName=yuichinukiyama.vscode-preview-server) für die [VS Code](https://code.visualstudio.com/download) IDE erstellt einen Server am Root des aktuell vom Editor geöffneten Verzeichnisses, mit einem Standardport von `8080`. VS Code Erweiterungen sind konfigurierbar. Die `previewServer.port` Einstellung ist die Portnummer des Webservers. Die Standardeinstellung von `8080` kann bearbeitet und geändert werden. Standardmäßig wird beim Eingeben von `localhost:8080` in die Browser-URL-Leiste die Seite geladen.

> [!NOTE]
> Die Preview on Web Server Erweiterung benutzt Browsersync. Wenn Ihre Entwicklungsumgebung von dieser Erweiterung gestartet wird, bietet `localhost:3001` eine Benutzeroberfläche für Browsersync, die einen Überblick über die aktuelle Serverumgebung bietet.

Erfahren Sie, wie Sie [einen lokalen Testserver einrichten](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) mit [Python](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#using_python) oder einer [lokalen serverseitigen Sprache](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#running_server-side_languages_locally) wie PHP.

## Localhost mit npx

Wenn Sie Node installiert haben, haben Sie möglicherweise auch npm und npx installiert. Geben Sie in der Kommandozeile `npx -v` ein. Wenn eine Versionsnummer zurückgegeben wird, können Sie [http-server](https://www.npmjs.com/package/http-server), einen nicht konfigurierbaren statischen HTTP-Server, ohne Installation von Anforderungen nutzen. Geben Sie in der Kommandozeile `npx http-server [Pfad]` ein, wobei `[Pfad]` der Ordner ist, in dem Ihre Indexdatei gespeichert ist.

Standardmäßig wird beim Eingeben von `localhost:8080` in die Browser-URL-Leiste die Datei geladen. Wenn Sie bereits einen Server auf Port `8080` gestartet haben, ändert sich die Portnummer automatisch und die Entwicklungsumgebung wird mit einem verfügbaren Port gestartet, z.B. `8081`.

Sie können eine andere Portnummer wählen. Durch Eingeben von `npx http-server /user/IhrName/CycleTracker -p 8787` wird ein lokaler Server auf Port `8787` gestartet, sofern verfügbar. Wenn nicht, und Sie eine Portnummer eingeben, die bereits verwendet wird, erhalten Sie einen Fehler `address already in use` oder ähnliches. Erfolgreich wird beim Eingeben von `localhost:8787` in die Browser-URL-Leiste die Indexdatei als `~/user/IhrName/CycleTracker/index.html` gerendert oder die Verzeichnisinhalte von `~/user/IhrName/CycleTracker/` angezeigt, wenn keine Indexdatei vorhanden ist.

Dieser nicht konfigurierbare statische HTTP-Server reicht für unsere Basis-App aus. Über `localhost` und `127.0.0.1` bereitgestellte Apps sind von https ausgenommen und werden immer als sicher angesehen. Warnungen des Browsers, falls gegeben, können umgangen werden.
Während nicht erforderlich, um Ihren lokalen Webserver über HTTPS bereitzustellen zu konfigurieren, können Sie [ein eingebautes TLS-Zertifikat hinzufügen](https://github.com/lwsjs/local-web-server/wiki/How-to-get-the-%22green-padlock%22-using-the-built-in-certificate). Mit dem Zertifikat können Sie [lokal-web-server installieren und ausführen](<https://github.com/lwsjs/local-web-server/wiki/How-to-launch-a-secure-local-web-server-(HTTPS)>) von der Kommandozeile aus, um Ihr Projekt lokal über `https` bereitzustellen und Sicherheitswarnungen zu vermeiden.

```bash
npm install -g local-web-server
cd ~/user/yourName/CycleTracker/
ws --https
```

Im obigen Beispiel müssen Sie eventuell die Installation mit `sudo` voranstellen.

> [!NOTE]
> Wenn Sie nach Privatsphäre suchen, bedenken Sie, dass Sie diese PWA selbst erstellen und auf Ihrem eigenen Computer von Ihrer eigenen Entwicklungsumgebung aus installieren können, ohne jemals das Internet zu nutzen. Diese App enthält kein Tracking. Sie ist so privat, wie eine App nur sein kann.

## Sicherer externer Server

Die vorherigen Optionen sind in Ordnung und notwendig, um Ihre Anwendung zu testen, während Sie durch dieses PWA-Tutorial oder jedes andere Webentwicklungsprojekt fortschreiten. Während Sie Ihre Web-App auf Ihrem Gerät hosten und für jeden mit Internetzugang verfügbar machen können, wird dies nicht empfohlen.

Um die zusätzlichen Funktionen von PWAs zu erhalten, einschließlich der Ein-Klick-Installation, einer eigenständigen Benutzeroberfläche, der Aufnahme in App-Stores und gegebenenfalls Offline-Funktionalität durch Service Worker, benötigen wir eine sichere Verbindung. Um Ihre App zu verteilen und anderen das Ansehen, Verwenden und Installieren Ihrer PWA zu ermöglichen, sollten Sie Ihre Inhalte auf einem sicheren _entfernten_ Server hosten und verfügbar machen.

Bei der offiziellen Veröffentlichung einer PWA möchten Sie wahrscheinlich in einen [Domainnamen und Webhosting](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost#hosting) investieren. Für Open-Source-Projekte, bei denen Entwickler aus dem Code lernen und sogar zum Projekt beitragen können, können Sie Ihren Fortschritt auf [GitHub Pages](https://pages.github.com/) hosten.

## GitHub Pages

Der aktuelle Stand der CycleTracker-Anwendung ist auf GitHub sichtbar, sicher bereitgestellt bei [https://mdn.github.io/pwa-examples/cycletracker/html_and_css/](https://mdn.github.io/pwa-examples/cycletracker/html_and_css/). Wir haben die Dateien im MDN GitHub-Konto veröffentlicht. Wenn Sie ein [GitHub](https://github.com/) Konto haben, können Sie es ähnlich auf Ihrem veröffentlichen. Beachten Sie nur, dass während dies über TLS sicher bereitgestellt wird, Aktionen auf GitHub nicht unbedingt privat sind und alle GitHub Pages öffentlich sind. Wenn Sie in einem Gebiet mit einer repressiven Regierung leben, die Menstruationszyklen verfolgt, sollten Sie erwägen, den Code zu kopieren und einzufügen, anstatt ihn zu forken.

Um eine öffentlich zugängliche sichere Seite zu erstellen, erstellen Sie eine [GitHub Pages Seite](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site). Erstellen Sie ein Repository mit dem Namen `<username>.github.io`, wobei `<username>` Ihr GitHub-Benutzername ist. Erstellen Sie einen `gh-pages` Branch. Dieser Zweig Ihrer Anwendung wird unter `https://<username>.github.io` verfügbar sein.

Wie erwähnt, sind alle GitHub Pages öffentlich im Internet verfügbar, selbst wenn Sie das Repository auf privat setzen. Da die Periodendaten mit localStorage gespeichert werden, wird die Anwendung über die GitHub-URL verfügbar sein, aber die Benutzerdaten sind nur in dem einen Browser auf dem einen Gerät verfügbar, auf dem die Daten eingegeben wurden. Wenn Sie das localStorage direkt löschen, was im Browser geschieht, werden alle gespeicherten Daten gelöscht.

Wenn Sie nicht möchten, dass Ihre PWA oberste Ebene ist, können Sie Ihre App so erscheinen lassen, als würde sie sich in einem Unterverzeichnis befinden. Sie können entweder ein Unterverzeichnis im `<username>.github.io` Repository erstellen oder aus Ihrem PWA-eigenen Repository veröffentlichen. Indem Sie eine [Veröffentlichungsquelle konfigurieren](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) innerhalb Ihres PWA Repositories, wird Ihre App unter `https://<username>.github.io/<repository>` sichtbar sein, wobei `<repository>` der Name des Repositories ist. Sie können GitHub so einstellen, dass Ihre Seite automatisch veröffentlicht wird, wenn Änderungen [an einen bestimmten Zweig](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch) innerhalb des Repositories gepusht werden, einschließlich `main`.

Im Fall der CycleTracker-Demonstrations-App in den verschiedenen Entwicklungsstadien ist `<username>` `mdn` und das Repository ist `pwa-examples`. Da dieses Repository mehrere Beispiel-PWAs enthält, jedes mit Fortschritten in mehreren Entwicklungsschritten, sind die Dateien und daher die PWA einige Ebenen tief geschachtelt.

Beachten Sie, dass Sie eine [benutzerdefinierte Domain für eine GitHub Pages Seite konfigurieren können](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Weiter geht's

Wir können eine gestylte, statische Version der CycleTracker-Anwendungsshell anzeigen. Jetzt, da wir wissen, wie wir die Anwendung, die wir bauen werden, anzeigen können, lassen Sie uns mit dem Aufbau beginnen. Als nächstes erstellen wir `app.js`, das JavaScript, das unser statisches Design in eine voll funktionsfähige Webanwendung umwandelt, die Daten lokal auf dem Computer des Benutzers speichert.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS", "Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
