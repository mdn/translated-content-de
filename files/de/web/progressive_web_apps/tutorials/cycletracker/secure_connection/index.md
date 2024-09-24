---
title: "CycleTracker: Sichere Verbindung"
short-title: Sichere Verbindung
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS", "Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

{{PWASidebar}}

PWAs können nur dann mithilfe einer Manifest-Datei installiert werden, wenn sie über das `https://`-Protokoll bereitgestellt werden oder lokal von `127.0.0.1` und `localhost` URLs mit dem `http://`-Protokoll bereitgestellt werden.
Sie verwenden auch häufig APIs, die [auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts).

Im vorherigen Abschnitt haben wir HTML und CSS verwendet, um die Basis unserer Perioden-Tracking-Anwendung zu erstellen. In diesem Abschnitt werden wir die statischen Inhalte von CycleTracker in einem Browser öffnen, die Inhalte aus einer lokal gestarteten Entwicklungsumgebung anzeigen und die Inhalte auf einem entfernten, sicheren Server betrachten.

## Anzeigen mit dem `file://`-Protokoll

Jeder Browser kann Ihr HTML rendern. Um die HTML-Datei mit dem angewendeten CSS anzuzeigen, die Sie im vorherigen Abschnitt erstellt haben, öffnen Sie die `index.html`-Datei, indem Sie über die Dateistruktur Ihres Computers dorthin navigieren oder über das Menü "Datei öffnen" Ihres Browsers.

Mit der aktualisierten `index.html` und der `style.css` im gleichen Verzeichnis sollte die Anzeige der Seite in einem schmalen Browserfenster ähnlich wie auf diesem Screenshot aussehen:

![Hellgrüne Webseite mit einem großen Header, einem Formular mit einer Legende, zwei Datumsfeldern und einem Button. Unten sind zwei Platzhalterzyklen und ein Header zu sehen.](filefile.jpg)

Wir betrachten unsere Seite mit dem `file://`-Protokoll, das einen [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) bereitstellt.
Dies stellt sicher, dass die Seiten mit dem aktuellen Stand unserer Codebasis betrachtet werden können und weiterhin funktionieren werden, wenn wir [JavaScript-Funktionalität hinzufügen](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality), die einen sicheren Kontext erfordert.

> [!NOTE]
> Ihre App über `https` bereitzustellen, ist nicht nur für PWAs gut, sondern für alle Websites, da es sicherstellt, dass die Informationen, die zwischen Ihrem Webserver und dem Browser des Benutzers übertragen werden, von Ende zu Ende verschlüsselt sind. Mehrere [Web-APIs erfordern sichere Kontexte](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts). Selbst wenn Sie keine installierbaren PWAs erstellen, können Sie beim Hinzufügen von Funktionen zu jeder Web-App auf Fälle stoßen, in denen ein sicherer Kontext erforderlich ist.

Obwohl wir die meisten Anwendungsfunktionen mit dem `file://`-Protokoll ansehen und testen können, können wir es nicht verwenden, um die Anwendungsinstallation mit unserer [Manifestdatei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file) zu testen.

Wir benötigen eine lokale Entwicklungsumgebung, um das gesamte Tutorial einschließlich Installation zu testen. Ein Teil der [Installierbarkeit einer PWA](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable) ist ein sicherer Server. Die Dateien müssen über eine sichere Verbindung im Web bereitgestellt werden, um die Vorteile von PWAs zu nutzen und unsere Anwendung als PWA zu vertreiben.

## localhost

Die Standardmethode zum Einrichten einer lokalen Entwicklungsumgebung variiert je nach Betriebssystem. Während der Standardspeicherort für die Index- und Konfigurationsdateien in Ihrem Betriebssystem unterschiedlich sein kann, ermöglichen die meisten Desktop-Betriebssysteme eine Serverkonfiguration, auf die Sie als Entwickler zugreifen können.

Zum Beispiel auf macOS, zumindest auf Sierra und Monterey, ermöglicht das Eingeben von `sudo apachectl start` einen Apache HTTP-Server. Sobald der Server gestartet ist, zeigt das Eingeben von `http://localhost` im Browser eine einfache Webseite, die "It works!" liest. Standardmäßig wird die HTML-Datei `Library/WebServer/Documents/index.html.en` angezeigt. Um Dateiendungen außer `.html.en` zu aktivieren oder das Stammverzeichnis von `Library/WebServer/Documents/` zu ändern, müssen Sie die Apache HTTP-Konfigurationsdatei, die sich unter `/etc/apache2/httpd.conf` befindet, bearbeiten. Der Server kann mit `sudo apachectl stop` gestoppt werden.

Das standardmäßige `localhost` des Betriebssystems hat eine leicht zu merkende URL, jedoch einen schwer zu merkenden Serverstamm-Speicherort und Konfigurationsprozess. Es erlaubt auch nur einen lokalen Server an einem Speicherort zur gleichen Zeit. Glücklicherweise gibt es intuitivere Methoden zum Einrichten eines Servers, um eine oder mehrere lokale Entwicklungsumgebungen auf mehreren Ports zu erstellen.

## localhost mit Portnummer

Es gibt mehrere {{glossary("IDE")}}-Erweiterungen und Programmiersprachen-spezifische Pakete, die es ermöglichen, eine Entwicklungsumgebung mit einem Klick oder Terminalbefehl zu starten. Sie können sogar mehrere lokale Server starten, jeder mit einer anderen Portnummer.

Sie können einen lokalen HTTP-Server mit einem [VSCode Plugin](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server#using_an_extension_in_your_code_editor) betreiben, das das Ausführen eines lokalen Servers auf einem einzigen oder verschiedenen Ports ermöglicht. Die [Preview on Web Server-Erweiterung](https://marketplace.visualstudio.com/items?itemName=yuichinukiyama.vscode-preview-server) für die [VSCode](https://code.visualstudio.com/download) IDE erstellt einen Server im Stammverzeichnis des aktuell vom Editor geöffneten Verzeichnisses mit einem Standard-Port von `8080`. VS Code-Erweiterungen sind konfigurierbar. Die Einstellung `previewServer.port` ist die Portnummer des Webservers. Die Standardeinstellung der Erweiterung von `8080` kann bearbeitet und geändert werden. Standardmäßig wird die Seite geladen, wenn `localhost:8080` in die URL-Leiste des Browsers eingegeben wird.

> [!NOTE]
> Die Preview on Web Server-Erweiterung verwendet Browsersync. Wenn Ihre Entwicklungsumgebung von dieser Erweiterung gestartet wird, bietet `localhost:3001` eine Benutzeroberfläche für Browsersync, die einen Überblick über die aktuelle Serverumgebung bietet.

Erfahren Sie, wie Sie [einen lokalen Testserver einrichten](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server) mit [Python](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server#using_python) oder [lokaler serverseitiger Sprache](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server#running_server-side_languages_locally) wie PHP.

## Localhost mit npx

Wenn Sie Node installiert haben, haben Sie möglicherweise auch npm und npx installiert. Geben Sie in der Befehlszeile `npx -v` ein. Wenn eine Versionsnummer zurückgegeben wird, können Sie [http-server](https://www.npmjs.com/package/http-server), einen nicht konfigurierbaren statischen HTTP-Server, verwenden, ohne irgendwelche Anforderungen installieren zu müssen. Geben Sie `npx http-server [Pfad]` in der Befehlszeile ein, wobei `[Pfad]` das Verzeichnis ist, in dem Ihre Index-Datei gespeichert ist.

Standardmäßig wird die Seite geladen, wenn `localhost:8080` in die URL-Leiste des Browsers eingegeben wird. Wenn Sie bereits einen Server auf dem Port `8080` gestartet haben, wird die Portnummer automatisch geändert, und die Entwicklerumgebung wird unter einem verfügbaren Port gestartet, z.B. `8081`.

Sie können eine andere Portnummer wählen. Wenn Sie `npx http-server /user/yourName/CycleTracker -p 8787` eingeben, wird der lokale Server, falls verfügbar, auf Port `8787` gestartet. Andernfalls erhalten Sie eine Fehlermeldung wie `address already in use`, wenn Sie eine bereits verwendete Portnummer eingeben. Wenn erfolgreich, wird durch Eingabe von `localhost:8787` in die URL-Leiste des Browsers die index-Datei gerendert, die als `~/user/yourName/CycleTracker/index.html` gespeichert ist oder bei fehlender Index-Datei die Verzeichnisinhalte von `~/user/yourName/CycleTracker/` angezeigt.

Dieser nicht konfigurierbare statische HTTP-Server genügt für unsere grundlegende App. Über `localhost` und `127.0.0.1` bereitgestellte Apps sind von HTTPS befreit und gelten immer als sicher. Warnungen bezüglich unsicherer Verbindungen im Browser können, sofern vorhanden, umgangen werden. Auch wenn es nicht notwendig ist, können Sie Ihren lokalen Webserver so konfigurieren, dass er über HTTPS bereitgestellt wird, indem Sie [ein integriertes TLS-Zertifikat hinzufügen](https://github.com/lwsjs/local-web-server/wiki/How-to-get-the-%22green-padlock%22-using-the-built-in-certificate). Mit dem Zertifikat können Sie [local-web-server](<https://github.com/lwsjs/local-web-server/wiki/How-to-launch-a-secure-local-web-server-(HTTPS)>) über die Befehlszeile installieren und ausführen, um Ihr Projekt lokal über `https` bereitzustellen, wodurch Sicherheitswarnungen vermieden werden.

```bash
npm install -g local-web-server
cd ~/user/yourName/CycleTracker/
ws --https
```

Im obigen Fall müssen Sie möglicherweise das Installationsprogramm mit `sudo` voranstellen.

> [!NOTE]
> Wenn Sie nach Privatsphäre suchen, realisieren Sie, dass Sie diese PWA selbst erstellen können und sie auf Ihrem eigenen Rechner von Ihrer Entwicklungsumgebung aus installiert werden kann, ohne jemals auf das Internet zuzugreifen. Diese App hat kein Tracking. Es ist so privat, wie eine App nur sein kann.

## Sicherer externer Server

Die vorherigen Optionen sind in Ordnung und notwendig, um Ihre Anwendung zu testen, während Sie dieses PWA-Tutorial oder ein beliebiges Web-Entwicklungsprojekt durchlaufen. Während Sie Ihre Web-App auf Ihrem Gerät hosten und für jeden mit einer Internetverbindung verfügbar machen können, wird dies nicht empfohlen.

Um die zusätzlichen Funktionen von PWAs zu nutzen, einschließlich Installation mit einem Klick, einer eigenständigen Benutzeroberfläche, Zugang zu App-Stores und optionaler Offline-Funktionalität durch Service Worker, benötigen wir eine sichere Verbindung. Um Ihre App zu verteilen und anderen zu ermöglichen, Ihre PWA anzuzeigen, zu verwenden und zu installieren, sollten Sie Ihre Inhalte auf einem sicheren _entfernten_ Server hosten lassen.

Beim offiziellen Veröffentlichen einer PWA werden Sie wahrscheinlich in einen [Domainnamen und Webhosting](/de/docs/Learn/Common_questions/Tools_and_setup/How_much_does_it_cost#hosting) investieren wollen. Für Open-Source-Projekte, bei denen Entwickler von der Codebasis lernen und sogar zum Projekt beitragen können, können Sie Ihre Fortschritte auf [GitHub Pages](https://pages.github.com/) hosten.

## GitHub Pages

Der aktuelle Stand der CycleTracker-Anwendung ist auf GitHub sichtbar und sicher unter [https://mdn.github.io/pwa-examples/cycletracker/html_and_css/](https://mdn.github.io/pwa-examples/cycletracker/html_and_css/) bereitgestellt. Wir haben die Dateien auf dem MDN GitHub-Konto veröffentlicht. Ebenso können Sie, wenn Sie ein [GitHub](https://github.com/) Konto haben, es auf Ihrem veröffentlichen. Beachten Sie jedoch, dass Aktionen auf GitHub, obwohl sie sicher über TLS bereitgestellt werden, nicht unbedingt privat sind, und alle GitHub Pages öffentlich sind. Wenn Sie in einem Gebiet mit einer repressiven Regierung leben, die Menstruationszyklen überwacht, ziehen Sie in Betracht, den Code zu kopieren und einzufügen, anstatt ihn zu forken.

Um eine öffentlich zugängliche sichere Seite zu erstellen, erstellen Sie eine [GitHub Pages Site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site). Erstellen Sie ein Repository mit dem Namen `<username>.github.io`, wobei `<username>` Ihr GitHub-Benutzername ist. Erstellen Sie einen `gh-pages` Branch. Dieser Zweig Ihrer Anwendung wird unter `https://<username>.github.io` verfügbar sein.

Wie erwähnt, sind alle GitHub Pages öffentlich im Internet verfügbar, auch wenn Sie das Repository auf privat setzen. Da die Periodendaten mit localStorage gespeichert werden, wird die Anwendung über die GitHub-URL verfügbar sein, aber die Daten des Benutzers sind nur in dem einen Browser auf dem einen Gerät verfügbar, auf dem die Daten eingegeben wurden. Das direkte Löschen des localStorage, das im Browser erfolgt, löscht alle gespeicherten Daten.

Wenn Sie nicht möchten, dass Ihre PWA auf der obersten Ebene erscheint, können Sie Ihre App so gestalten, als ob sie sich in einem Unterverzeichnis befindet. Sie können entweder ein Unterverzeichnis innerhalb des `<username>.github.io` Repositories erstellen oder aus Ihrem separaten PWA-Repository veröffentlichen. Indem Sie eine Veröffentlichungsquelle [konfigurieren](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) innerhalb Ihres PWA-Repositories, wird Ihre App unter `https://<username>.github.io/<repository>` sichtbar, wobei `<repository>` der Name des Repositories ist. Sie können GitHub so einstellen, dass Ihre Seite automatisch veröffentlicht wird, wenn Änderungen an einem spezifischen Branch [veröffentlicht werden](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch) innerhalb dieses Repositories, einschließlich `main`.

Im Fall der Demo-App CycleTracker in den verschiedenen Entwicklungsstadien lautet das `<username>` `mdn` und das Repository heißt `pwa-examples`. Da dieses Repository mehrere Beispiel-PWAs enthält, jede mit Fortschritten in mehreren Entwicklungsstufen, sind die Dateien und damit die PWA einige Ebenen tief verschachtelt.

Beachten Sie, dass Sie eine [benutzerdefinierte Domain für eine GitHub Pages Site konfigurieren können](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Als Nächstes

Wir können eine gestylte, statische Version der CycleTracker-Anwendungshülle ansehen. Jetzt, da wir wissen, wie wir die Anwendung sehen können, die wir zu erstellen beginnen, lassen Sie uns daran machen, sie zu erstellen. Als nächstes erstellen wir `app.js`, das JavaScript, das unser statisches Design in eine voll funktionsfähige Webanwendung umwandelt, die Daten lokal auf dem Rechner des Benutzers speichert.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS", "Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
