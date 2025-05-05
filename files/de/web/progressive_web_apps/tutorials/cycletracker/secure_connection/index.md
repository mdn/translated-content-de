---
title: "CycleTracker: Sichere Verbindung"
short-title: Sichere Verbindung
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS", "Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

PWAs können nur mithilfe einer Manifestdatei installiert werden, wenn sie über das `https://` Protokoll bereitgestellt werden oder wenn sie lokal von `127.0.0.1` und `localhost` URLs mit dem `http://` Protokoll bereitgestellt werden.
Sie verwenden auch häufig APIs, die [auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts).

Im vorherigen Abschnitt haben wir HTML und CSS verwendet, um die Grundstruktur unserer Anwendung zum Verfolgen der Menstruation zu erstellen. In diesem Abschnitt werden wir den statischen Inhalt von CycleTracker in einem Browser öffnen, den Inhalt aus einer lokal gestarteten Entwicklungsumgebung betrachten und den Inhalt auf einem entfernten, sicheren Server anzeigen.

## Anzeigen mit dem `file://` Protokoll

Jeder Browser rendert Ihr HTML. Um die HTML-Datei mit dem angewendeten CSS anzuzeigen, die Sie im vorherigen Abschnitt erstellt haben, öffnen Sie die `index.html` Datei, indem Sie über die Dateistruktur Ihres Computers oder über das Menü "Datei öffnen" Ihres Browsers navigieren.

Mit der aktualisierten `index.html` und dem `style.css` im selben Verzeichnis sollte die Seite in einem schmalen Browserfenster ähnlich wie auf diesem Screenshot aussehen:

![Hellgrüne Webseite mit einem großen Header, einem Formular mit einer Legende, zwei Datumswählern und einem Button. Unten werden zwei Platzhalter-Menstruationszyklen und ein Header angezeigt.](filefile.jpg)

Wir betrachten unsere Seite mit dem `file://` Protokoll, das einen [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) bereitstellt.
Dies stellt sicher, dass die Seiten mit dem aktuellen Status unseres Codebestands angesehen werden können und weiterhin funktionieren, wenn wir [JavaScript-Funktionen hinzufügen](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality), die einen sicheren Kontext erfordern.

> [!NOTE]
> Ihre Anwendung über `https` bereitzustellen, ist nicht nur für PWAs gut, sondern für alle Websites, da dadurch gewährleistet wird, dass die Informationen, die zwischen Ihrem Webserver und dem Browser des Benutzers übertragen werden, von Ende zu Ende verschlüsselt sind. Mehrere [Web-APIs erfordern sichere Kontexte](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts). Selbst wenn Sie keine installierbaren PWAs erstellen, treten möglicherweise Fälle auf, in denen ein sicherer Kontext erforderlich ist, wenn Sie Funktionen zu einer Webanwendung hinzufügen.

Während wir die meisten Funktionalitäten der Anwendung mit dem `file://` Protokoll anzeigen und testen können, können wir damit die Installation der Anwendung mit unserer [Manifestdatei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file) nicht testen.

Wir benötigen eine lokale Entwicklungsumgebung, um das gesamte Tutorial einschließlich der Installation zu testen. Ein Teil des [Installierbarmachens eines PWA](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable) ist ein sicherer Server. Die Dateien müssen über eine sichere Verbindung im Web bereitgestellt werden, um die Vorteile von PWAs zu nutzen und unsere Anwendung als PWA zu verteilen.

## localhost

Die Standardmethode zum Einrichten einer lokalen Entwicklungsumgebung variiert je nach Betriebssystem. Während sich der Standardstandort für die Index- und Konfigurationsdateien auf Ihrem Betriebssystem unterscheiden kann, ermöglichen die meisten Desktop-Betriebssysteme eine Serverkonfiguration, die Ihnen als Entwickler zugänglich ist.

Zum Beispiel ermöglicht auf macOS, zumindest auf Sierra und Monterey, der Befehl `sudo apachectl start` einen Apache HTTP-Server. Nachdem der Server gestartet wurde, zeigt die Eingabe von `http://localhost` im Browser eine einfache Webseite an, die "It works!" anzeigt. Standardmäßig wird die HTML-Datei in `Library/WebServer/Documents/index.html.en` angezeigt. Um andere Dateiendungen als `.html.en` zuzulassen oder das Stammverzeichnis von `Library/WebServer/Documents/` zu ändern, müssen Sie die Apache HTTP-Konfigurationsdatei bearbeiten, die sich unter `/etc/apache2/httpd.conf` befindet. Der Server kann mit `sudo apachectl stop` gestoppt werden.

Das Standard-`localhost` des Betriebssystems hat eine leicht zu merkende URL, aber einen schwer zu merkenden Server-Stammort und Konfigurationsprozess. Es erlaubt auch nur einen lokalen Server an einem Ort gleichzeitig. Glücklicherweise gibt es intuitivere Methoden zur Servereinrichtung, um eine oder mehrere lokale Entwicklungsumgebungen an mehreren Ports zu erstellen.

## localhost mit einer Portnummer

Es gibt mehrere {{Glossary("IDE", "IDE")}} Erweiterungen und programmiersprachen-spezifische Pakete, die es ermöglichen, eine Entwicklungsumgebung mit einem einzigen Klick oder Terminalbefehl zu starten. Sie können sogar mehrere lokale Server betreiben, jeder mit einer anderen Portnummer.

Sie können einen lokalen HTTP-Server mit einem [VS Code Plugin](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#using_an_extension_in_your_code_editor) betreiben, das es ermöglicht, einen lokalen Server auf einem einzigen oder verschiedenen Port zu betreiben. Die [Preview on Web Server Erweiterung](https://marketplace.visualstudio.com/items?itemName=yuichinukiyama.vscode-preview-server) für die [VS Code](https://code.visualstudio.com/download) IDE erstellt einen Server im Stammverzeichnis des aktuell vom Editor geöffneten Verzeichnisses mit einem Standard-Port von `8080`. VS Code-Erweiterungen sind konfigurierbar. Die `previewServer.port` Einstellung ist die Portnummer des Web-Servers. Die Standardeinstellung der Erweiterung `8080` kann bearbeitet und geändert werden. Durch die Eingabe von `localhost:8080` in der Browser-URL-Leiste wird die Seite standardmäßig geladen.

> [!NOTE]
> Die Preview on Web Server Erweiterung verwendet Browsersync. Wenn Ihre Entwicklungsumgebung von dieser Erweiterung gestartet wird, bietet `localhost:3001` eine Benutzeroberfläche für Browsersync, die einen Überblick über die aktuelle Serverumgebung gibt.

Erfahren Sie, wie Sie einen [lokalen Testserver einrichten](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) mit [Python](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#using_python) oder einer [lokalen Serverseitigen Sprache](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#running_server-side_languages_locally) wie PHP.

## Localhost mit npx

Wenn Sie Node installiert haben, haben Sie möglicherweise npm und npx ebenfalls installiert. Geben Sie in der Kommandozeile `npx -v` ein. Wenn eine Versionsnummer zurückgegeben wird, können Sie [http-server](https://www.npmjs.com/package/http-server), einen nicht konfigurierbaren statischen HTTP-Server, verwenden, ohne irgendeine Voraussetzung installieren zu müssen. Geben Sie `npx http-server [path]` in der Kommandozeile ein, wobei `[path]` der Ordner ist, in dem Ihre Indexdatei gespeichert ist.

Standardmäßig lädt die Eingabe von `localhost:8080` in der Browser-URL-Leiste die Seite. Wenn Sie bereits einen Server auf Port `8080` gestartet haben, ändert sich die Portnummer automatisch, und die Entwicklerumgebung wird mit einem verfügbaren Port gestartet, beispielsweise `8081`.

Sie können eine andere Portnummer wählen. Die Eingabe von `npx http-server /user/yourName/CycleTracker -p 8787` startet den lokalen Server auf Port `8787`, wenn verfügbar. Wenn nicht, wenn Sie eine bereits verwendete Portnummer eingeben, erhalten Sie einen `address already in use` oder ähnlichen Fehler. Wenn erfolgreich, zeigt die Eingabe von `localhost:8787` in der Browser-URL-Leiste die `~/user/yourName/CycleTracker/index.html` gespeicherte Indexdatei an oder zeigt, falls keine Indexdatei vorhanden ist, die Inhaltsverzeichnis von `~/user/yourName/CycleTracker/` an.

Dieser nicht konfigurierbare statische HTTP-Server reicht für unsere grundlegende App aus. Über `localhost` und `127.0.0.1` bereitgestellte Apps sind von https ausgenommen und gelten immer als sicher. Insecure-Warnungen des Browsers können, falls angezeigt, umgangen werden. Während dies nicht notwendig ist, können Sie Ihren lokalen Webserver über HTTPS bereitstellen, indem Sie ein [eingebautes TLS-Zertifikat hinzufügen](https://github.com/lwsjs/local-web-server/wiki/How-to-get-the-%22green-padlock%22-using-the-built-in-certificate). Mit dem Zertifikat können Sie den [local-web-server installieren und ausführen](<https://github.com/lwsjs/local-web-server/wiki/How-to-launch-a-secure-local-web-server-(HTTPS)>) um Ihr Projekt lokal über `https` bereitzustellen und so Sicherheitswarnungen zu vermeiden.

```bash
npm install -g local-web-server
cd ~/user/yourName/CycleTracker/
ws --https
```

In obigem Beispiel müssen Sie möglicherweise die Installation mit `sudo` voranstellen.

> [!NOTE]
> Wenn Sie Privatsphäre suchen, bedenken Sie, dass Sie dieses PWA selbst erstellen und es auf Ihrem eigenen Gerät von Ihrer eigenen Entwicklungsumgebung aus installiert werden kann, ohne jemals auf das Internet zuzugreifen. Diese App hat kein Tracking. Es ist so privat, wie eine App nur sein kann.

## Sicherer externer Server

Die vorherigen Optionen sind in Ordnung und notwendig, um Ihre Anwendung während der Bearbeitung dieses PWA-Tutorials oder bei jedem Webentwicklungsprojekt zu testen. Obwohl Sie Ihre Webanwendung auf Ihrem Gerät hosten und sie jedem mit einer Internetverbindung zugänglich machen könnten, ist dies nicht empfohlen.

Um die zusätzlichen Funktionen von PWAs zu erhalten, einschließlich der Installation mit einem einzigen Klick, einer eigenständigen Benutzeroberfläche, Zulassung zu App-Stores und optionaler Offline-Funktionalität durch Service Worker, benötigen wir eine sichere Verbindung. Um Ihre App zu verteilen und anderen zu ermöglichen, Ihre PWA anzuzeigen, zu nutzen und zu installieren, sollten Sie Ihren Inhalt auf einem sicheren _entfernten_ Server hosten und bereitstellen.

Wenn Sie ein PWA offiziell veröffentlichen, werden Sie wahrscheinlich in einen [Domainnamen und Webhosting](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost#hosting) investieren wollen. Für Open-Source-Projekte, bei denen Entwickler von der Codebasis lernen und eventuell sogar zum Projekt beitragen können, können Sie Ihre Fortschritte auf [GitHub Pages](https://pages.github.com/) hosten.

## GitHub Pages

Der aktuelle Stand der CycleTracker-Anwendung ist auf GitHub sichtbar und sicher unter [https://mdn.github.io/pwa-examples/cycletracker/html_and_css/](https://mdn.github.io/pwa-examples/cycletracker/html_and_css/) bereitgestellt. Wir haben die Dateien im MDN-GitHub-Konto gepostet. Ebenso können Sie, wenn Sie ein [GitHub](https://github.com/) Konto haben, es in Ihrem veröffentlichen. Beachten Sie jedoch, dass Aktionen auf GitHub zwar sicher über TLS bereitgestellt werden, aber nicht unbedingt privat sind und alle GitHub-Seiten öffentlich sind. Wenn Sie in einem Gebiet mit einer repressiven Regierung leben, die Menstruationszyklen verfolgt, ziehen Sie es in Erwägung, den Code zu kopieren und einzufügen, anstatt ihn zu forken.

Um eine öffentlich verfügbare sichere Seite zu erstellen, richten Sie eine [GitHub Pages Seite ein](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site). Erstellen Sie ein Repository namens `<username>.github.io`, wobei `<username>` Ihr GitHub-Benutzername ist. Erstellen Sie einen `gh-pages` Branch. Dieser Zweig Ihrer Anwendung wird unter `https://<username>.github.io` verfügbar sein.

Wie bereits erwähnt, sind alle GitHub Pages auf dem Internet öffentlich verfügbar, selbst wenn Sie das Repository auf privat einstellen. Da die Periodendaten mithilfe von localStorage gespeichert werden, ist die Anwendung über die GitHub-URL verfügbar, aber die Benutzerdaten sind nur in dem einen Browser auf dem einen Gerät verfügbar, auf dem die Daten eingegeben wurden. Das direkte Löschen des localStorage, das im Browser erfolgt, löscht alle gespeicherten Daten.

Wenn Sie nicht möchten, dass Ihre PWA auf oberster Ebene ist, können Sie Ihre App so einrichten, dass sie wie in einem Unterverzeichnis erscheint. Sie können entweder ein Unterverzeichnis innerhalb des `<username>.github.io` Repositorys erstellen oder von Ihrem separaten PWA-Repository veröffentlichen. Durch [Konfigurieren einer Veröffentlichungsquelle](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) innerhalb Ihres PWA-Repositories wird Ihre App unter `https://<username>.github.io/<repository>` sichtbar sein, wobei `<repository>` der Name des Repositories ist. Sie können GitHub so einstellen, dass Ihre Seite automatisch veröffentlicht wird, wenn Änderungen [an einem bestimmten Branch veröffentlicht werden](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch) innerhalb dieses Repositories, einschließlich `main`.

Im Fall der CycleTracker-Demo-App in den verschiedenen Entwicklungsstadien ist das `<username>` `mdn` und das Repository ist `pwa-examples`. Da dieses Repository mehrere PWA-Beispiele enthält, jedes mit Fortschritt auf mehreren Stufen im Entwicklungsprozess, sind die Dateien und daher auch die PWA ein paar Ebenen tief verschachtelt.

Beachten Sie, dass Sie eine [benutzerdefinierte Domain für eine GitHub Pages-Seite konfigurieren können](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Als Nächstes

Wir können eine gestylte, statische Version der CycleTracker-Anwendungsschale betrachten. Jetzt, da wir wissen, wie wir die Anwendung, die wir erstellen werden, anzeigen können, lassen Sie uns mit dem Aufbau beginnen. Als Nächstes erstellen wir `app.js`, das JavaScript, das unser statisches Design in eine voll funktionsfähige Webanwendung umwandelt, die Daten lokal auf dem Gerät des Benutzers speichert.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS", "Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
