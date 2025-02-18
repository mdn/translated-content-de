---
title: "CycleTracker: Sichere Verbindung"
short-title: Sichere Verbindung
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection
l10n:
  sourceCommit: 5dc85adc81be4e4164c5e5df147509117eed2ea5
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS", "Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

{{PWASidebar}}

PWAs können nur über eine Manifest-Datei installiert werden, wenn sie über das `https://`-Protokoll bereitgestellt werden oder lokal von `127.0.0.1`- und `localhost`-URLs mit dem `http://`-Protokoll ausgeführt werden. Sie verwenden auch häufig APIs, die [auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts).

Im vorherigen Abschnitt haben wir mit HTML und CSS die Oberfläche unserer Perioden-Tracking-Anwendung erstellt. In diesem Abschnitt öffnen wir die statischen Inhalte von CycleTracker in einem Browser, betrachten die Inhalte aus einer lokal gestarteten Entwicklungsumgebung und von einem entfernten, sicheren Server.

## Anzeige mit dem `file://`-Protokoll

Jeder Browser rendert Ihr HTML. Um die HTML-Datei mit dem CSS anzuzeigen, das Sie im vorherigen Abschnitt erstellt haben, öffnen Sie die Datei `index.html`, indem Sie über die Dateistruktur Ihres Computers navigieren oder die Option "Datei öffnen" in Ihrem Browser verwenden.

Mit der aktualisierten Datei `index.html` und der Datei `style.css` im selben Verzeichnis sollte die Seite in einem schmalen Browserfenster so aussehen wie auf diesem Screenshot:

![Hellgrüne Webseite mit einer großen Kopfzeile, einem Formular mit einer Legende, zwei Datumsauswahlfeldern und einem Button. Unten werden zwei Platzhalter-Zyklen und eine Kopfzeile angezeigt.](filefile.jpg)

Wir betrachten unsere Seite mithilfe des `file://`-Protokolls, das einen [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) bereitstellt. Dies stellt sicher, dass die Seiten mit dem aktuellen Stand unseres Codebestands angezeigt werden können und weiterhin funktionieren, wenn wir [JavaScript-Funktionalitäten hinzufügen](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality), die einen sicheren Kontext erfordern.

> [!NOTE]
> Das Bereitstellen Ihrer App über `https` ist nicht nur für PWAs vorteilhaft, sondern für alle Webseiten, da sichergestellt wird, dass die Informationen zwischen Ihrem Webserver und dem Browser des Benutzers Ende-zu-Ende verschlüsselt sind. Mehrere [Web-APIs erfordern sichere Kontexte](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts). Selbst wenn Sie keine installierbaren PWAs erstellen, könnten Sie beim Hinzufügen von Funktionen zu einer beliebigen Web-App auf Fälle stoßen, in denen ein sicherer Kontext erforderlich ist.

Während wir die meisten Funktionen der Anwendung mit dem `file://`-Protokoll anzeigen und testen können, ist es nicht möglich, die Installation der Anwendung mithilfe unserer [Manifest-Datei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file) zu testen.

Wir benötigen eine lokale Entwicklungsumgebung, um das gesamte Tutorial einschließlich der Installation zu testen. Ein Teil des [Installierbarmachens eines PWAs](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable) besteht aus einem sicheren Server. Die Dateien müssen über eine sichere Verbindung im Web bereitgestellt werden, um die Vorteile von PWAs zu nutzen und unsere Anwendung als PWA zu verteilen.

## localhost

Die Standardmethode zum Einrichten einer lokalen Entwicklungsumgebung variiert je nach Betriebssystem. Während der Standardspeicherort für die Index- und Konfigurationsdateien auf Ihrem Betriebssystem unterschiedlich sein kann, erlauben die meisten Desktop-Betriebssysteme eine Serverkonfiguration, die für Sie als Entwickler zugänglich ist.

Auf macOS beispielsweise ermöglicht der Befehl `sudo apachectl start` auf zumindest Sierra und Monterey einen Apache HTTP-Server. Nach dem Starten des Servers zeigt die Eingabe von `http://localhost` im Browser eine einfache Webseite mit der Nachricht "It works!" an. Standardmäßig wird die HTML-Datei `Library/WebServer/Documents/index.html.en` angezeigt. Um andere Dateierweiterungen als `.html.en` zu aktivieren oder das Stammverzeichnis von `Library/WebServer/Documents/` zu ändern, müssen Sie die Apache-HTTP-Konfigurationsdatei `/etc/apache2/httpd.conf` bearbeiten. Der Server kann mit `sudo apachectl stop` gestoppt werden.

Die Standard-`localhost`-Option des Betriebssystems bietet eine leicht zu merkende URL, jedoch einen schwer zu merkenden Server-Stammort und Konfigurationsprozess. Zudem erlaubt sie nur einen lokalen Server an einem Ort gleichzeitig. Glücklicherweise gibt es benutzerfreundlichere Methoden, um einen oder mehrere lokale Entwicklungsumgebungen auf verschiedenen Ports zu erstellen.

## localhost mit einer Portnummer

Es gibt mehrere {{Glossary("IDE", "IDE")}}-Erweiterungen und programmiersprachenspezifische Pakete, mit denen eine Entwicklungsumgebung mit einem einzigen Klick oder einem Terminalbefehl gestartet werden kann. Sie können sogar mehrere lokale Server starten, jeder mit einer anderen Portnummer.

Sie können einen lokalen HTTP-Server mit einem [VS Code-Plugin](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#using_an_extension_in_your_code_editor) starten, das das Ausführen eines lokalen Servers auf einem einzelnen oder verschiedenen Ports ermöglicht. Die [Preview on Web Server-Erweiterung](https://marketplace.visualstudio.com/items?itemName=yuichinukiyama.vscode-preview-server) für die [VS Code](https://code.visualstudio.com/download)-IDE erstellt einen Server am Wurzelverzeichnis des aktuell vom Editor geöffneten Verzeichnisses mit einem Standardport von `8080`. VS Code-Erweiterungen sind konfigurierbar. Mit der Einstellung `previewServer.port` kann die Portnummer des Webservers festgelegt werden. Die Standardeinstellung von `8080` kann geändert werden. Durch die Eingabe von `localhost:8080` in die URL-Leiste des Browsers wird die Seite geladen.

> [!NOTE]
> Die Preview on Web Server-Erweiterung verwendet Browsersync. Wenn Ihre Entwicklungsumgebung durch diese Erweiterung gestartet wird, bietet `localhost:3001` eine Benutzeroberfläche für Browsersync, welche einen Überblick über die aktuelle Serverumgebung bietet.

Erfahren Sie, wie Sie [einen lokalen Testserver einrichten](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) können, indem Sie [Python](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#using_python) oder [serverseitige lokale Programmiersprachen](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#running_server-side_languages_locally) wie PHP verwenden.

## localhost mit npx

Wenn Sie Node installiert haben, könnten Sie auch npm und npx installiert haben. Geben Sie im Terminal `npx -v` ein. Wenn eine Versionsnummer angezeigt wird, können Sie [http-server](https://www.npmjs.com/package/http-server), einen einfach konfigurierbaren statischen HTTP-Server, ohne zusätzliche Anforderungen nutzen. Geben Sie `npx http-server [path]` ein, wobei `[path]` der Ordner ist, in dem sich die Indexdatei befindet.

Standardmäßig lädt die Eingabe von `localhost:8080` die Seite im Browser. Falls ein Server bereits auf Port `8080` läuft, wird automatisch die Portnummer geändert, und die Entwicklungsumgebung auf einem verfügbaren Port, z. B. `8081`, gestartet.

Sie können eine andere Portnummer wählen. Geben Sie `npx http-server /user/yourName/CycleTracker -p 8787` ein, um den lokalen Server, falls verfügbar, auf Port `8787` zu starten. Falls nicht verfügbar und falls Sie einen bereits verwendeten Port eingeben, erhalten Sie einen `address already in use`- oder ähnlichen Fehler. Wenn erfolgreich, zeigt die Eingabe von `localhost:8787` die Indexdatei `~/user/yourName/CycleTracker/index.html` oder die Verzeichnisinhalte von `~/user/yourName/CycleTracker/`, falls keine Indexdatei vorhanden ist.

Dieser statische HTTP-Server genügt für unsere einfache App. Apps, die über `localhost` und `127.0.0.1` bereitgestellt werden, sind von https ausgenommen und gelten immer als sicher. Browser-Warnungen können ignoriert werden. Falls gewünscht, können Sie Ihren lokalen Webserver so konfigurieren, dass er über HTTPS bereitgestellt wird, indem Sie [ein eingebautes TLS-Zertifikat hinzufügen](https://github.com/lwsjs/local-web-server/wiki/How-to-get-the-%22green-padlock%22-using-the-built-in-certificate). Mit dem Zertifikat können Sie einen [lokalen Webserver mit HTTPS](<https://github.com/lwsjs/local-web-server/wiki/How-to-launch-a-secure-local-web-server-(HTTPS)>) starten, um Ihr Projekt lokal sicher bereitzustellen und Warnungen zu vermeiden.

```bash
npm install -g local-web-server
cd ~/user/yourName/CycleTracker/
ws --https
```

Im obigen Beispiel könnte es nötig sein, den Installationsbefehl mit `sudo` zu erweitern.

> [!NOTE]
> Falls Datenschutz wichtig ist: Die von Ihnen selbst erstellte PWA kann direkt auf Ihrer Maschine aus Ihrer Entwicklungsumgebung installiert werden, ohne jemals das Internet zu nutzen. Diese App enthält keinerlei Tracking. Sie ist so privat wie möglich.

## Sicherer externer Server

Die vorherigen Optionen sind angemessen und notwendig, um Ihre Anwendung zu testen, während Sie dieses PWA-Tutorial oder ein anderes Webentwicklungsprojekt durchführen. Sie können Ihre App auf Ihrem Gerät hosten und für jeden mit Internetzugang verfügbar machen, jedoch wird dies nicht empfohlen.

Um die zusätzlichen Features von PWAs zu nutzen, einschließlich Ein-Klick-Installation, eigenständiger Benutzeroberfläche, Aufnahme in App-Stores und optionaler Offline-Funktionalität durch Service Worker, benötigen wir eine sichere Verbindung. Um Ihre App zu verteilen, sodass andere Ihre PWA ansehen, verwenden und installieren können, sollten Sie sicherstellen, dass Ihre Inhalte über einen sicheren _Remote_-Server gehostet und verfügbar sind.

Bei der offiziellen Veröffentlichung einer PWA empfiehlt es sich, in einen [Domainnamen und Webhosting](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost#hosting) zu investieren. Für Open-Source-Projekte, bei denen Entwickler vom Code lernen und möglicherweise selbst zum Projekt beitragen können, können Sie Ihren Fortschritt auf [GitHub Pages](https://pages.github.com/) hosten.

## GitHub Pages

Der aktuelle Stand der CycleTracker-Anwendung ist auf GitHub sicher verfügbar unter [https://mdn.github.io/pwa-examples/cycletracker/html_and_css/](https://mdn.github.io/pwa-examples/cycletracker/html_and_css/). Wir haben die Dateien auf das MDN-GitHub-Konto hochgeladen. Ähnlich können Sie dies mit einem [GitHub](https://github.com/)-Konto tun. Beachten Sie jedoch, dass Aktionen auf GitHub nicht unbedingt privat sind und alle GitHub Pages öffentlich sind. Falls Sie in einer Region mit repressiver Regierung leben: Kopieren Sie den Code lieber, anstatt ihn zu forken.

Erstellen Sie eine [GitHub Pages-Seite](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site), indem Sie ein Repository namens `<username>.github.io` anlegen, wobei `<username>` Ihr GitHub-Benutzername ist. Erstellen Sie einen `gh-pages`-Branch. Diese Version Ihrer App ist dann unter `https://<username>.github.io` verfügbar.

Wie erwähnt, sind alle GitHub Pages öffentlich, auch wenn Sie das Repository auf privat setzen. Da die Periodendaten mithilfe von localStorage gespeichert werden, ist die Anwendung über die GitHub-URL verfügbar, persönliche Daten jedoch nur in einem bestimmten Browser und einem bestimmten Gerät, wo die Daten eingegeben wurden. Über das direkte Löschen des localStorage im Browser werden alle gespeicherten Daten gelöscht.

Wenn Sie nicht wollen, dass Ihre PWA auf der obersten Ebene erscheint, können Sie sie in einem Unterverzeichnis anzeigen lassen. Erstellen Sie entweder ein Unterverzeichnis innerhalb des `<username>.github.io`-Repositorys, oder veröffentlichen Sie von einem separaten Repository Ihrer PWA. Indem Sie eine [Publish-Source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) innerhalb Ihres Repositorys konfigurieren, ist Ihre App unter `https://<username>.github.io/<repository>` erreichbar, wobei `<repository>` der Name des Repositorys ist. Sie können GitHub so einstellen, dass Ihre Seite automatisch veröffentlicht wird, wenn Änderungen an [einem bestimmten Branch](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch) dieses Repositorys vorgenommen werden, inklusive `main`.

Bei der CycleTracker-Demoanwendung in verschiedenen Entwicklungsstadien ist `<username>` `mdn` und das Repository `pwa-examples`. Da dieses Repository mehrere Beispiel-PWAs mit Fortschritt in verschiedenen Stadien enthält, sind die Dateien und daher die PWA mehrere Ebenen tief verschachtelt.

Beachten Sie, dass Sie [eine benutzerdefinierte Domain für eine GitHub Pages-Site konfigurieren](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) können.

## Als Nächstes

Wir haben nun eine gestaltete, statische Version der CycleTracker-Applikation-Oberfläche. Nun, da wir wissen, wie wir die anzunehmende Applikation ansehen könnten, beginnen wir mit dem eigentlichen Aufbau. Im nächsten Abschnitt erstellen wir `app.js`, den JavaScript-Code, der unser statisches Design in eine voll funktionsfähige Webanwendung umwandelt, in der Daten lokal auf dem Gerät des Benutzers gespeichert werden.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS", "Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
