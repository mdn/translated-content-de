---
title: "CycleTracker: Sichere Verbindung"
short-title: Sichere Verbindung
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS", "Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

{{PWASidebar}}

PWAs können nur mit einer Manifestdatei installiert werden, wenn sie über das `https://`-Protokoll bereitgestellt werden oder lokal von `127.0.0.1` und `localhost`-URLs mit dem `http://`-Protokoll. Sie verwenden auch häufig APIs, die [auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts).

Im vorherigen Abschnitt haben wir HTML und CSS verwendet, um das Grundgerüst unserer Zyklus-Tracking-Anwendung zu erstellen. In diesem Abschnitt öffnen wir die statischen Inhalte von CycleTracker in einem Browser, sehen uns die Inhalte aus einer lokal gestarteten Entwicklungsumgebung an und betrachten die Inhalte auf einem entfernten, sicheren Server.

## Anzeigen mit dem `file://`-Protokoll

Jeder Browser rendert Ihr HTML. Um die HTML-Datei mit dem in der vorherigen Sektion erstellten CSS anzuzeigen, öffnen Sie die Datei `index.html`, indem Sie über die Dateistruktur Ihres Computers navigieren oder in Ihrem Browser die Option "Datei öffnen" verwenden.

Mit der aktualisierten `index.html` und der `style.css` im selben Verzeichnis sollte die Anzeige der Seite in einem schmalen Browserfenster etwa so aussehen wie auf diesem Screenshot:

![Helle grüne Webseite mit einer großen Kopfzeile, einem Formular mit einer Legende, zwei Datumsauswahlen und einem Knopf. Unten werden zwei Platzhalter-Menstruationszyklen und eine Kopfzeile angezeigt.](filefile.jpg)

Wir zeigen unsere Seite mit dem `file://`-Protokoll an, das einen [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) bietet. Dies stellt sicher, dass die Seiten mit dem aktuellen Stand unseres Codebasises angesehen werden können und weiterhin funktionieren, während wir [JavaScript-Funktionalität hinzufügen](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality), die einen sicheren Kontext erfordert.

> [!NOTE]
> Ihre App über `https` zu servieren ist nicht nur für PWAs gut, sondern für alle Websites, da es sicherstellt, dass die zwischen Ihrem Webserver und dem Browser des Benutzers übermittelten Informationen durchgängig verschlüsselt sind. Einige [Web-APIs erfordern sichere Kontexte](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts). Selbst wenn Sie keine installierbaren PWAs erstellen, könnten Sie auf Fälle stoßen, in denen ein sicherer Kontext erforderlich ist, wenn Sie Funktionen zu einer Web-App hinzufügen.

Während wir die meisten Anwendungsfunktionen mit dem `file://`-Protokoll anzeigen und testen können, können wir damit die Anwendungsinstallation mithilfe unserer [Manifestdatei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file) nicht testen.

Wir benötigen eine lokale Entwicklungsumgebung, um das gesamte Tutorial einschließlich der Installation zu testen. Ein Teil des [Erstellens einer installierbaren PWA](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable) ist ein sicherer Server. Die Dateien müssen über eine sichere Verbindung im Web bereitgestellt werden, um von den Vorteilen zu profitieren, die PWAs bieten, und um unsere Anwendung als PWA zu verteilen.

## localhost

Die Standardmethode zur Einrichtung einer lokalen Entwicklungsumgebung variiert je nach Betriebssystem. Während sich der Standardstandort für die Index- und Konfigurationsdateien auf Ihrem Betriebssystem unterscheiden kann, bieten die meisten Desktop-Betriebssysteme eine Serverkonfiguration, auf die Sie als Entwickler zugreifen können.

Zum Beispiel auf macOS, zumindest auf Sierra und Monterey, ermöglicht das Eingeben von `sudo apachectl start` einen Apache HTTP-Server. Sobald der Server gestartet ist, zeigt das Eingeben von `http://localhost` im Browser eine einfache Webseite an, die "It works!" anzeigt. Standardmäßig wird die HTML-Datei angezeigt als `Library/WebServer/Documents/index.html.en`. Um andere Dateierweiterungen als `.html.en` zu ermöglichen oder das Stammverzeichnis von `Library/WebServer/Documents/` zu ändern, müssen Sie die Apache-HTTP-Konfigurationsdatei bearbeiten, die sich unter `/etc/apache2/httpd.conf` befindet. Der Server kann mit `sudo apachectl stop` gestoppt werden.

Der Standard-`localhost` des Betriebssystems hat eine leicht zu merkende URL, aber einen schwer zu merkenden Serverstammort und einen komplizierten Konfigurationsprozess. Zudem lässt er nur einen lokalen Server an einem Ort gleichzeitig zu. Glücklicherweise gibt es intuitivere Server-Setup-Methoden, um eine oder mehrere lokale Entwicklungsumgebungen auf mehreren Ports zu erstellen.

## localhost mit einer Portnummer

Es gibt mehrere {{Glossary("IDE", "IDE")}}-Erweiterungen und programmspezifische Pakete, die das Starten einer Entwicklungsumgebung mit einem einzigen Klick oder Terminalbefehl ermöglichen. Sie können sogar mehrere lokale Server starten, jeder mit einer anderen Portnummer.

Sie können einen lokalen HTTP-Server mit einem [VSCode-Plugin](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server#using_an_extension_in_your_code_editor) ausführen, der das Ausführen eines lokalen Servers auf einem einzelnen oder verschiedenen Port ermöglicht. Die [Preview on Web Server-Erweiterung](https://marketplace.visualstudio.com/items?itemName=yuichinukiyama.vscode-preview-server) für die [VSCode](https://code.visualstudio.com/download)-IDE erstellt einen Server im Stammverzeichnis des aktuell vom Editor geöffneten Verzeichnisses mit einem Standardport von `8080`. VS Code-Erweiterungen sind konfigurierbar. Die Einstellung `previewServer.port` ist die Portnummer des Webservers. Die Standardeinstellung `8080` kann bearbeitet und geändert werden. Standardmäßig lädt das Eingeben von `localhost:8080` in der Browser-URL-Leiste die Seite.

> [!NOTE]
> Die Preview on Web Server-Erweiterung verwendet Browsersync. Wenn Ihre Entwicklungsumgebung von dieser Erweiterung gestartet wird, bietet `localhost:3001` eine Benutzeroberfläche für Browsersync, die einen Überblick über die aktuelle Serverumgebung bietet.

Erfahren Sie, wie Sie einen [lokalen Testserver einrichten](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server) mit [Python](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server#using_python) oder [lokalen serverseitigen Sprachen](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server#running_server-side_languages_locally) wie PHP.

## localhost mit npx

Wenn Sie Node installiert haben, könnten auch npm und npx installiert sein. Geben Sie in der Befehlszeile `npx -v` ein. Wenn eine Versionsnummer zurückgegeben wird, können Sie [http-server](https://www.npmjs.com/package/http-server), einen nicht konfigurierbaren statischen HTTP-Server, verwenden, ohne irgendwelche Anforderungen installieren zu müssen. Geben Sie `npx http-server [path]` in die Befehlszeile ein, wobei `[path]` der Ordner ist, in dem Ihre Indexdatei gespeichert ist.

Standardmäßig wird durch Eingabe von `localhost:8080` in der Browser-URL-Leiste die Seite geladen. Wenn Sie bereits einen Server an Port `8080` gestartet haben, wird die Portnummer automatisch geändert, und die Entwicklerumgebung wird mit einem verfügbaren Port, z. B. `8081`, gestartet.

Sie können eine andere Portnummer wählen. Die Eingabe von `npx http-server /user/yourName/CycleTracker -p 8787` startet den lokalen Server an Port `8787`, wenn verfügbar. Wenn nicht, erhalten Sie bei Eingabe einer bereits verwendeten Portnummer einen Fehler wie `address already in use`. Bei Erfolg wird durch Eingabe von `localhost:8787` in der Browser-URL-Leiste die Indexdatei angezeigt, die als `~/user/yourName/CycleTracker/index.html` gespeichert ist, oder es werden die Verzeichnisinhalte von `~/user/yourName/CycleTracker/` angezeigt, wenn keine Indexdatei vorhanden ist.

Dieser nicht konfigurierbare statische HTTP-Server genügt für unsere grundlegende App. Über `localhost` und `127.0.0.1` bereitgestellte Apps sind von https ausgenommen und gelten immer als sicher. Browserwarnungen bezüglich Unsicherheit, falls angezeigt, können umgangen werden. Obwohl nicht notwendig, können Sie Ihren lokalen Webserver für die Auslieferung über HTTPS konfigurieren, indem Sie [ein eingebautes TLS-Zertifikat hinzufügen](https://github.com/lwsjs/local-web-server/wiki/How-to-get-the-%22green-padlock%22-using-the-built-in-certificate). Mit dem Zertifikat können Sie den [local-web-server](<https://github.com/lwsjs/local-web-server/wiki/How-to-launch-a-secure-local-web-server-(HTTPS)>) von der Befehlszeile aus installieren und ausführen, um Ihr Projekt lokal über `https` bereitzustellen und so jede Sicherheitswarnung zu vermeiden.

```bash
npm install -g local-web-server
cd ~/user/yourName/CycleTracker/
ws --https
```

In dem oben genannten Fall müssen Sie möglicherweise das Installieren mit `sudo` voranstellen.

> [!NOTE]
> Wenn Sie nach Privatsphäre suchen, bedenken Sie, dass Sie diese PWA selbst erstellen und sie auf Ihrem eigenen Gerät aus Ihrer eigenen Entwicklungsumgebung installieren können, ohne jemals auf das Internet zuzugreifen. Diese App hat kein Tracking. Es ist so privat, wie eine App sein kann.

## Sicherer externer Server

Die vorherigen Optionen sind in Ordnung und notwendig, um Ihre Anwendung zu testen, während Sie in diesem PWA-Tutorial oder bei einem anderen Webentwicklungsprojekt fortschreiten. Während Sie Ihre Web-App auf Ihrem Gerät hosten und sie jedem mit einer Internetverbindung zugänglich machen können, wird dies nicht empfohlen.

Um die zusätzlichen Funktionen von PWAs, einschließlich Einfachklick-Installation, einer eigenständigen Benutzeroberfläche, Zugang zu App-Stores und optionaler Offline-Funktionalität durch Service Workers zu nutzen, benötigen wir eine sichere Verbindung. Um Ihre App zu verteilen und es anderen zu ermöglichen, Ihre PWA zu sehen, zu verwenden und zu installieren, sollten Sie Ihre Inhalte auf einem sicheren _externen_ Server hosten und bereitstellen.

Beim offiziellen Veröffentlichen einer PWA möchten Sie wahrscheinlich in einen [Domainnamen und Webhosting](/de/docs/Learn/Common_questions/Tools_and_setup/How_much_does_it_cost#hosting) investieren. Für Open-Source-Projekte, bei denen Entwickler vom Code lernen und sogar zum Projekt beitragen können, können Sie Ihre Fortschritte auf [GitHub Pages](https://pages.github.com/) hosten.

## GitHub Pages

Der aktuelle Zustand der CycleTracker-Anwendung ist auf GitHub sichtbar und wird sicher unter [https://mdn.github.io/pwa-examples/cycletracker/html_and_css/](https://mdn.github.io/pwa-examples/cycletracker/html_and_css/) bereitgestellt. Wir haben die Dateien auf dem MDN-GitHub-Konto veröffentlicht. Ebenso können Sie, wenn Sie ein [GitHub](https://github.com/)-Konto haben, diese auf Ihrem eigenen veröffentlichen. Beachten Sie jedoch, dass alle Aktionen auf GitHub trotz sicherer Bereitstellung über TLS nicht notwendigerweise privat sind und alle GitHub-Seiten öffentlich sind. Wenn Sie in einem Bereich mit einer repressiven Regierung leben, die Menstruationszyklen verfolgt, ziehen Sie es in Betracht, den Code zu kopieren und einzufügen, anstatt ihn zu forken.

Um eine öffentlich zugängliche sichere Site zu erstellen, erstellen Sie eine [GitHub Pages-Site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site). Erstellen Sie ein Repository namens `<username>.github.io`, wobei `<username>` Ihr GitHub-Benutzername ist. Erstellen Sie einen `gh-pages`-Zweig. Dieser Zweig Ihrer Anwendung wird unter `https://<username>.github.io` verfügbar sein.

Wie bereits erwähnt, sind alle GitHub Pages öffentlich im Internet zugänglich, selbst wenn Sie das Repository auf privat setzen. Während die Periodendaten mit localStorage gespeichert werden, ist die Anwendung über die GitHub-URL verfügbar, aber die Daten des Benutzers sind nur in dem einen Browser auf dem einen Gerät verfügbar, auf dem die Daten eingegeben wurden. Das direkte Löschen des localStorage, was im Browser geschieht, löscht alle gespeicherten Daten.

Wenn Ihre PWA nicht auf oberster Ebene sein soll, können Sie Ihre App so einrichten, als würde sie sich in einem Unterverzeichnis befinden. Sie können entweder ein Unterverzeichnis im Repository `<username>.github.io` erstellen oder von Ihrem separaten PWA-Repository aus veröffentlichen. Durch [Konfigurieren einer Veröffentlichungsquelle](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) innerhalb Ihres PWA-Repositorys, wird Ihre App unter `https://<username>.github.io/<repository>` sichtbar sein, wobei `<repository>` der Name des Repositorys ist. Sie können GitHub so einstellen, dass Ihre Site automatisch veröffentlicht wird, wenn Änderungen an einem [bestimmten Zweig veröffentlicht werden](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch) innerhalb dieses Repositorys, einschließlich `main`.

Im Falle der CycleTracker-Demo-App in den verschiedenen Phasen der Entwicklung ist `<username>` `mdn` und das Repository `pwa-examples`. Da dieses Repository mehrere Beispiel-PWAs enthält, jedes mit Fortschritten an verschiedenen Entwicklungsstufen, sind die Dateien und daher die PWA einige Ebenen tief verschachtelt.

Beachten Sie, dass Sie [eine benutzerdefinierte Domain für eine GitHub Pages-Site konfigurieren können](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Als nächstes

Wir sind in der Lage, eine stilisierte, statische Version der CycleTracker-Anwendungshülle anzuzeigen. Da wir nun wissen, wie wir die Anwendung, die wir gleich entwickeln werden, ansehen können, fangen wir an, sie zu bauen. Als nächstes erstellen wir `app.js`, das JavaScript, das unser statisches Design in eine voll funktionsfähige Webanwendung umwandelt, die Daten lokal auf dem Gerät des Benutzers speichert.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS", "Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
