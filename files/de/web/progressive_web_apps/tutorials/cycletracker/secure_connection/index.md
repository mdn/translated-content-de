---
title: "CycleTracker: Sichere Verbindung"
short-title: Sichere Verbindung
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS", "Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

{{PWASidebar}}

PWAs können nur mit einer Manifestdatei installiert werden, wenn sie über das `https://`-Protokoll bereitgestellt werden oder lokal von `127.0.0.1` und `localhost`-URLs mit dem `http://`-Protokoll bereitgestellt werden. Sie verwenden auch häufig APIs, die [auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts).

Im vorherigen Abschnitt haben wir HTML und CSS verwendet, um das Grundgerüst unserer Perioden-Tracking-Anwendung zu erstellen. In diesem Abschnitt öffnen wir den statischen Inhalt von CycleTracker in einem Browser, betrachten den Inhalt aus einer lokal gestarteten Entwicklungsumgebung und betrachten den Inhalt auf einem entfernten, sicheren Server.

## Anzeige mit dem `file://`-Protokoll

Jeder Browser rendert Ihr HTML. Um die HTML-Datei mit dem CSS anzuzeigen, das Sie im vorherigen Abschnitt erstellt haben, öffnen Sie die Datei `index.html`, indem Sie über die Dateistruktur Ihres Computers oder über den Menüpunkt "Datei öffnen" in Ihrem Browser dorthin navigieren.

Mit dem aktualisierten `index.html` und dem in demselben Verzeichnis befindlichen `style.css` sollte die Ansicht der Seite in einem schmalen Browserfenster ähnlich wie in diesem Screenshot sein:

![Hellgrüne Webseite mit einer großen Überschrift, einem Formular mit einer Legende, zwei Datumsauswahlen und einem Button. Unten werden zwei Platzhalter für Menstruationszyklen und eine Überschrift angezeigt.](filefile.jpg)

Wir betrachten unsere Seite mit dem `file://`-Protokoll, das einen [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) bereitstellt. Dies stellt sicher, dass die Seiten mit dem aktuellen Stand unserer Codebasis betrachtet werden können und auch weiterhin funktionieren, wenn wir [JavaScript-Funktionalität hinzufügen](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality), die einen sicheren Kontext benötigt.

> [!NOTE]
> Das Bereitstellen Ihrer App über `https` ist nicht nur für PWAs sinnvoll, sondern für alle Websites, da es sicherstellt, dass die Informationen, die zwischen Ihrem Webserver und dem Browser des Nutzers übertragen werden, Ende-zu-Ende verschlüsselt sind. Mehrere [Web-APIs erfordern sichere Kontexte](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts). Auch wenn Sie keine installierbaren PWAs erstellen, können Sie auf Situationen stoßen, in denen ein sicherer Kontext erforderlich ist, wenn Sie Funktionen zu einer Web-App hinzufügen.

Während wir die meiste Funktionalität der Anwendung mit dem `file://`-Protokoll betrachten und testen können, können wir es nicht verwenden, um die Installation der Anwendung mit unserer [Manifestdatei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file) zu testen.

Wir benötigen eine lokale Entwicklungsumgebung, um das gesamte Tutorial einschließlich der Installation zu testen. Ein Teil des [Installierbarmachens einer PWA](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable) ist ein sicherer Server. Die Dateien müssen über eine sichere Verbindung im Web bereitgestellt werden, um die Vorteile der PWAs zu nutzen und unsere Anwendung als PWA zu vertreiben.

## localhost

Die Standardmethode zum Einrichten einer lokalen Entwicklungsumgebung variiert je nach Betriebssystem. Während sich der Standardspeicherort für die Index- und Konfigurationsdateien auf Ihrem Betriebssystem unterscheiden kann, ermöglichen die meisten Desktop-Betriebssysteme eine Serverkonfiguration, die Ihnen, dem Entwickler, zugänglich ist.

Beispielsweise aktiviert das Eingeben von `sudo apachectl start` auf macOS, zumindest bei Sierra und Monterey, einen Apache HTTP-Server. Sobald der Server gestartet ist, zeigt das Eingeben von `http://localhost` im Browser eine einfache Webseite an, auf der "It works!" steht. Standardmäßig wird die HTML-Datei angezeigt, die sich in `Library/WebServer/Documents/index.html.en` befindet. Um Dateierweiterungen außer `.html.en` zu erlauben oder das Stammverzeichnis von `Library/WebServer/Documents/` zu ändern, müssen Sie die Apache-HTTP-Konfigurationsdatei bearbeiten, die sich unter `/etc/apache2/httpd.conf` befindet. Der Server kann mit `sudo apachectl stop` gestoppt werden.

Das Standard-`localhost` des Betriebssystems hat eine einfache, leicht zu merkende URL, aber einen schwer zu merkenden Server-Stammort und Konfigurationsprozess. Es erlaubt auch nur einen lokalen Server an einem einzigen Ort zu einem Zeitpunkt. Glücklicherweise gibt es intuitivere Server-Setup-Methoden, um eine oder mehrere lokale Entwicklungsumgebungen auf mehreren Ports zu erstellen.

## localhost mit einer Portnummer

Es gibt mehrere [IDE](/de/docs/Glossary/IDE)-Erweiterungen und sprachspezifische Pakete, die das Starten einer Entwicklungsumgebung mit einem einzigen Klick oder Terminalbefehl ermöglichen. Sie können sogar mehrere lokale Server starten, jeweils mit einer anderen Portnummer.

Sie können einen lokalen HTTP-Server mit einem [VSCode-Plugin](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server#using_an_extension_in_your_code_editor) betreiben, das das Ausführen eines lokalen Servers auf einem einzigen oder unterschiedlichen Port ermöglicht. Die [Preview on Web Server-Erweiterung](https://marketplace.visualstudio.com/items?itemName=yuichinukiyama.vscode-preview-server) für die [VSCode](https://code.visualstudio.com/download)-IDE erstellt einen Server am Stammverzeichnis des aktuell vom Editor geöffneten Verzeichnisses, mit einem Standardport von `8080`. VS Code-Erweiterungen sind konfigurierbar. Die `previewServer.port`-Einstellung ist die Portnummer des Webservers. Die Standardeinstellung der Erweiterung `8080` kann bearbeitet und geändert werden. Standardmäßig lädt das Eingeben von `localhost:8080` in der Browser-URL-Leiste die Seite.

> [!NOTE]
> Die Preview on Web Server-Erweiterung verwendet Browsersync. Wenn Ihre Entwicklungsumgebung von dieser Erweiterung gestartet wird, bietet `localhost:3001` eine Benutzeroberfläche für Browsersync und bietet einen Überblick über die aktuelle Serverumgebung.

Erfahren Sie, wie Sie einen [lokalen Testserver einrichten](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server), indem Sie [Python](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server#using_python) oder [lokale serverseitige Sprachen](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server#running_server-side_languages_locally) wie PHP verwenden.

## Localhost mit npx

Wenn Sie Node installiert haben, haben Sie möglicherweise auch npm und npx installiert. Geben Sie in der Befehlszeile `npx -v` ein. Wenn eine Versionsnummer zurückgegeben wird, können Sie [http-server](https://www.npmjs.com/package/http-server), einen nicht konfigurierbaren statischen HTTP-Server, ohne Installation von Anforderungen verwenden. Geben Sie in der Befehlszeile `npx http-server [Pfad]` ein, wobei `[Pfad]` der Ordner ist, in dem Ihre Indexdatei gespeichert ist.

Standardmäßig lädt das Eingeben von `localhost:8080` in der Browser-URL-Leiste die Seite. Wenn Sie bereits einen Server auf Port `8080` gestartet haben, wird die Portnummer automatisch geändert, und die Entwicklungsumgebung wird mit einem verfügbaren Port gestartet, z. B. `8081`.

Sie können eine andere Portnummer wählen. Das Eingeben von `npx http-server /user/yourName/CycleTracker -p 8787` startet den lokalen Server auf Port `8787`, sofern verfügbar. Wenn nicht, und Sie geben eine bereits verwendete Portnummer ein, erhalten Sie einen `address already in use` oder ähnlichen Fehler. Wenn erfolgreich, rendert das Eingeben von `localhost:8787` in der Browser-URL-Leiste die Indexdatei, die als `~/user/yourName/CycleTracker/index.html` gespeichert ist oder zeigt den Verzeichnisinhalt von `~/user/yourName/CycleTracker/` an, wenn keine Indexdatei vorhanden ist.

Dieser nicht konfigurierbare statische HTTP-Server reicht für unsere einfache App aus. Über `localhost` und `127.0.0.1` bereitgestellte Apps sind von https ausgenommen und gelten immer als sicher. Sichere Browserwarnungen können, falls vorhanden, umgangen werden. Obwohl nicht notwendig, können Sie Ihren lokalen Webserver so konfigurieren, dass er über HTTPS bereitgestellt wird, indem Sie ein [eingebautes TLS-Zertifikat hinzufügen](https://github.com/lwsjs/local-web-server/wiki/How-to-get-the-%22green-padlock%22-using-the-built-in-certificate). Mit dem Zertifikat können Sie [local-web-server](<https://github.com/lwsjs/local-web-server/wiki/How-to-launch-a-secure-local-web-server-(HTTPS)>) vom Kommandozeilen aus installieren und ausführen, um Ihr Projekt lokal über `https` bereitzustellen und Sicherheitswarnungen zu vermeiden.

```bash
npm install -g local-web-server
cd ~/user/yourName/CycleTracker/
ws --https
```

In dem obigen Fall müssen Sie möglicherweise das Installieren mit `sudo` voranstellen.

> [!NOTE]
> Wenn Sie Datenschutz suchen, sollten Sie wissen, dass Sie diese PWA selbst erstellen und auf Ihrem eigenen Computer von Ihrer eigenen Entwicklungsumgebung aus installieren können, ohne jemals auf das Internet zuzugreifen. Diese App hat kein Tracking. Es ist so privat, wie eine App nur sein kann.

## Sicherer externer Server

Die vorherigen Optionen sind in Ordnung und notwendig, um Ihre Anwendung zu testen, während Sie dieses PWA-Tutorial oder ein anderes Webentwicklungsprojekt durchlaufen. Während Sie Ihre Web-App auf Ihrem Gerät hosten und für jeden mit einer Internetverbindung zugänglich machen können, wird dies nicht empfohlen.

Um die zusätzlichen Funktionen von PWAs nutzen zu können, einschließlich Ein-Klick-Installation, einer eigenständigen Benutzeroberfläche, der Aufnahme in App-Stores und optional der Offline-Funktionalität durch Service Worker, benötigen wir eine sichere Verbindung. Um Ihre App zu verteilen und andere in die Lage zu versetzen, Ihre PWA zu sehen, zu nutzen und zu installieren, sollten Sie Ihre Inhalte auf einem sicheren _entfernten_ Server hosten und verfügbar machen.

Bei der offiziellen Veröffentlichung einer PWA möchten Sie wahrscheinlich in einen [Domainnamen und Webhosting](/de/docs/Learn/Common_questions/Tools_and_setup/How_much_does_it_cost#hosting) investieren. Für Open-Source-Projekte, bei denen Entwickler aus der Codebasis lernen und sogar zum Projekt zurück beitragen können, können Sie Ihren Fortschritt auf [GitHub Pages](https://pages.github.com/) hosten.

## GitHub Pages

Der aktuelle Stand der Anwendung CycleTracker ist auf GitHub sichtbar, sicher bereitgestellt unter [https://mdn.github.io/pwa-examples/cycletracker/html_and_css/](https://mdn.github.io/pwa-examples/cycletracker/html_and_css/). Wir haben die Dateien auf dem MDN GitHub-Konto gepostet. Wenn Sie ein [GitHub](https://github.com/)-Konto haben, können Sie es ähnlich auf Ihrem eigenen Konto veröffentlichen. Beachten Sie jedoch, dass Aktionen auf GitHub zwar sicher über TLS bereitgestellt werden, aber nicht unbedingt privat sind und alle GitHub-Seiten öffentlich sind. Wenn Sie in einem Gebiet mit repressiver Regierung leben, die Menstruationszyklen verfolgt, sollten Sie in Erwägung ziehen, den Code zu kopieren und einzufügen, anstatt ihn zu forken.

Um eine öffentlich verfügbare sichere Website zu erstellen, erstellen Sie eine [GitHub Pages-Site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site). Erstellen Sie ein Repository mit dem Namen `<username>.github.io`, wobei `<username>` Ihr GitHub-Benutzername ist. Erstellen Sie einen `gh-pages`-Branch. Dieser Zweig Ihrer Anwendung wird unter `https://<username>.github.io` verfügbar sein.

Wie bereits erwähnt, sind alle GitHub Pages öffentlich im Internet zugänglich, selbst wenn Sie das Repository privat einstellen. Da die Periodendaten mit localStorage gespeichert werden, ist die Anwendung über die GitHub-URL verfügbar, aber die Daten des Benutzers sind nur in dem einen Browser auf dem einen Gerät verfügbar, auf dem die Daten eingegeben wurden. Das direkte Löschen von localStorage, das im Browser erfolgt, löscht alle gespeicherten Daten.

Wenn Sie nicht möchten, dass Ihre PWA auf oberster Ebene ist, können Sie Ihre App so aussehen lassen, als ob sie sich in einem Unterverzeichnis befindet. Sie können entweder ein Unterverzeichnis innerhalb des `<username>.github.io`-Repositorys erstellen oder aus dem separaten Repository Ihrer PWA veröffentlichen. Indem Sie eine Veröffentlichungsquelle [konfigurieren](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) innerhalb Ihres PWA-Repositories, wird Ihre App sichtbar sein unter `https://<username>.github.io/<repository>`, wobei `<repository>` der Name des Repositorys ist. Sie können GitHub so einstellen, dass Ihre Seite automatisch veröffentlicht wird, wenn Änderungen [in einem bestimmten Branch](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch) innerhalb dieses Repositories veröffentlicht werden, inklusive `main`.

Im Fall der Demo-App CycleTracker in den verschiedenen Entwicklungsstadien ist `<username>` `mdn` und das Repository `pwa-examples`. Da dieses Repository mehrere Beispiel-PWAs enthält, jeweils mit Fortschritten in verschiedenen Schritten des Entwicklungsprozesses, sind die Dateien und damit die PWA ein paar Ebenen tief verschachtelt.

Beachten Sie, dass Sie [eine benutzerdefinierte Domain für eine GitHub Pages-Site konfigurieren können](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Als Nächstes

Wir können eine gestylte, statische Version des Anwendungsshells von CycleTracker betrachten. Nun, da wir wissen, wie wir die Anwendung, die wir gleich erstellen werden, betrachten können, lassen Sie uns mit dem Bau beginnen. Als Nächstes erstellen wir `app.js`, das JavaScript, das unser statisches Design in eine voll funktionsfähige Webanwendung umwandelt, die Daten lokal auf dem Rechner des Benutzers speichert.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS", "Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
