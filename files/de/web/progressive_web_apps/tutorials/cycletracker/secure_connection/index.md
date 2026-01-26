---
title: "CycleTracker: Sichere Verbindung"
short-title: Sichere Verbindung
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS", "Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

PWAs können nur unter Verwendung einer Manifestdatei installiert werden, wenn sie über das `https://`-Protokoll bereitgestellt werden oder lokal von `127.0.0.1` und `localhost`-URLs mit dem `http://`-Protokoll. Sie verwenden auch häufig APIs, die auf [sichere Kontexte beschränkt sind](/de/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts).

Im vorherigen Abschnitt haben wir HTML und CSS verwendet, um die Hülle unserer Zyklusverfolgungsanwendung zu erstellen. In diesem Abschnitt werden wir den statischen Inhalt von CycleTracker in einem Browser öffnen, den Inhalt von einer lokal gestarteten Entwicklungsumgebung ansehen und den Inhalt auf einem entfernten, sicheren Server betrachten.

## Ansicht mit dem `file://`-Protokoll

Jeder Browser rendert Ihr HTML. Um die mit CSS angewendete HTML-Datei, die Sie im vorherigen Abschnitt erstellt haben, anzuzeigen, öffnen Sie die Datei `index.html`, indem Sie über die Dateistruktur Ihres Computers oder von Ihrem Browser die "Datei öffnen"-Option verwenden.

Mit der aktualisierten `index.html` und der `style.css` im selben Verzeichnis sollte das Anzeigen der Seite in einem schmalen Browserfenster ähnlich wie dieser Screenshot aussehen:

![Hellgrüne Webseite mit einem großen Header, einem Formular mit einer Legende, zwei Datumswählern und einem Button. Unten werden zwei Platzhalter-Menstruationszyklen und ein Header angezeigt.](filefile.jpg)

Wir betrachten unsere Seite mit dem `file://`-Protokoll, das einen [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) bietet. Dies stellt sicher, dass die Seiten mit dem aktuellen Stand unserer Codebasis betrachtet werden können und weiterhin funktionieren, wenn wir [JavaScript-Funktionalität hinzufügen](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality), die einen sicheren Kontext erfordert.

> [!NOTE]
> Das Bereitstellen Ihrer App über `https` ist nicht nur für PWAs gut, sondern auch für alle Websites, da es sicherstellt, dass die Informationen, die zwischen Ihrem Webserver und dem Browser des Benutzers übertragen werden, von Ende zu Ende verschlüsselt sind. Mehrere [Web-APIs erfordern sichere Kontexte](/de/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts). Selbst wenn Sie keine installierbaren PWAs erstellen, stoßen Sie möglicherweise auf Fälle, in denen ein sicherer Kontext erforderlich ist, wenn Sie Funktionen zu einer Web-App hinzufügen.

Während wir die meisten Anwendungsfunktionen mit dem `file://`-Protokoll anzeigen und testen können, können wir es nicht verwenden, um die Anwendungsinstallation mit unserer [Manifestdatei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file) zu testen.

Um das gesamte Tutorial einschließlich der Installation testen zu können, benötigen wir eine lokale Entwicklungsumgebung. Ein Teil des [prozesses zur Installationsfähigkeit einer PWA](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable) ist ein sicherer Server. Die Dateien müssen über eine sichere Verbindung im Web bereitgestellt werden, um die Vorteile von PWAs zu nutzen und unsere Anwendung als PWA zu verteilen.

## localhost

Die Standardmethode zur Einrichtung einer lokalen Entwicklungsumgebung variiert je nach Betriebssystem. Während der Standardort für die Index- und Konfigurationsdateien auf Ihrem Betriebssystem unterschiedlich sein kann, bieten die meisten Desktop-Betriebssysteme eine Serverkonfiguration, die für Sie als Entwickler zugänglich ist.

Zum Beispiel wird auf macOS, zumindest auf Sierra und Monterey, durch Eingabе von `sudo apachectl start` ein Apache-HTTP-Server aktiviert. Sobald der Server gestartet ist, zeigt die Eingabe von `http://localhost` im Browser eine grundlegende Webseite an, die "It works!" liest. Standardmäßig wird die HTML-Datei angezeigt, die sich unter `Library/WebServer/Documents/index.html.en` befindet. Um andere Dateierweiterungen als `.html.en` zu aktivieren oder das Stammverzeichnis von `Library/WebServer/Documents/` zu ändern, müssen Sie die Apache-HTTP-Konfigurationsdatei bearbeiten, die unter `/etc/apache2/httpd.conf` zu finden ist. Der Server kann durch `sudo apachectl stop` gestoppt werden.

Das Standard-`localhost`-Des-Betriebssystems hat eine leicht zu merkende URL, aber eine schwer zu merkende Serverstammlocation und einen komplizierten Konfigurationsprozess. Außerdem erlaubt es nur einen lokalen Server an einem Ort gleichzeitig. Zum Glück gibt es intuitivere Methoden zur Servereinrichtung, um eine oder mehrere lokale Entwicklungsumgebungen auf mehreren Ports zu erstellen.

## localhost mit einer Portnummer

Es gibt mehrere {{Glossary("IDE", "IDE")}}-Erweiterungen und programmspezifische Pakete, die es ermöglichen, eine Entwicklungsumgebung mit einem einzigen Klick oder Terminalbefehl zu starten. Sie können sogar mehrere lokale Server starten, jeweils mit einer anderen Portnummer.

Sie können einen lokalen HTTP-Server mit einem [VS Code Plugin](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#using_an_extension_in_your_code_editor) ausführen, der es ermöglicht, einen lokalen Server auf einem einzelnen oder verschiedenen Ports auszuführen. Die [Preview on Web Server Erweiterung](https://marketplace.visualstudio.com/items?itemName=yuichinukiyama.vscode-preview-server) für die [VS Code](https://code.visualstudio.com/download)-IDE erstellt einen Server im Verzeichnisstamms der aktuell vom Editor geöffneten Verzeichnisses mit einem Standardport von `8080`. VS Code-Erweiterungen sind konfigurierbar. Die `previewServer.port`-Einstellung ist die Portnummer des Webservers. Die Standardeinstellung der Erweiterungen von `8080` kann bearbeitet und geändert werden. Standardmäßig wird das Eingeben von `localhost:8080` in die Browser-URL-Leiste den Inhalt der Seite laden.

> [!NOTE]
> Die Vorschau auf der Webserver-Erweiterung verwendet Browsersync. Wenn Ihre Entwicklungsumgebung von dieser Erweiterung gestartet wird, bietet `localhost:3001` eine Benutzeroberfläche für Browsersync, die einen Überblick über die aktuelle Serverumgebung bietet.

Erfahren Sie, wie Sie [einen lokalen Testserver einrichten](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server), indem Sie [Python](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#using_python) oder eine [lokale serverseitige Sprache](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#running_server-side_languages_locally) wie PHP verwenden.

## Localhost mit npx

Falls Sie Node installiert haben, haben Sie möglicherweise auch npm und npx installiert. Geben Sie im Befehlszeilen-Interface `npx -v` ein. Wenn eine Versionsnummer zurückgegeben wird, können Sie [http-server](https://www.npmjs.com/package/http-server), einen nicht konfigurierbaren statischen HTTP-Server, verwenden, ohne irgendwelche Anforderungen installieren zu müssen. Geben Sie `npx http-server [Pfad]` in das Befehlszeilen-Interface ein, wobei `[Pfad]` das Verzeichnis ist, in dem Ihre Indexdatei gespeichert ist.

Standardmäßig wird bei der Eingabe von `localhost:8080` in die Browser-URL-Leiste die Seite geladen. Falls Sie bereits einen Server auf Port `8080` gestartet haben, wird automatisch die Portnummer geändert, wobei die Entwicklungsumgebung mit einem verfügbaren Port gestartet wird, wie zum Beispiel `8081`.

Sie können eine andere Portnummer wählen. Die Eingabe von `npx http-server /user/IhrName/CycleTracker -p 8787` startet den lokalen Server auf Port `8787`, wenn verfügbar. Falls nicht, erhalten Sie, wenn Sie eine bereits verwendete Portnummer eingeben, einen `address already in use`- oder ähnlichen Fehler. Wenn erfolgreich, wird durch Eingabe von `localhost:8787` in die Browser-URL-Leiste die Indexdatei, die als `~/user/IhrName/CycleTracker/index.html` gespeichert ist, gerendert oder die Verzeichnisinhalte von `~/user/IhrName/CycleTracker/` angezeigt, falls keine Indexdatei vorhanden ist.

Dieser nicht konfigurierbare statische HTTP-Server genügt für unsere Basis-App. Apps, die über `localhost` und `127.0.0.1` bereitgestellt werden, sind von https ausgenommen und gelten immer als sicher. Warnungen zu unsicherem Browser können, falls sie auftreten, umgangen werden. Obwohl es nicht erforderlich ist, können Sie Ihren lokalen Webserver über HTTPS bereitstellen, indem Sie [ein integriertes TLS-Zertifikat hinzufügen](https://github.com/lwsjs/local-web-server/wiki/How-to-get-the-%22green-padlock%22-using-the-built-in-certificate). Mit dem Zertifikat können Sie [local-web-server installieren und ausführen](<https://github.com/lwsjs/local-web-server/wiki/How-to-launch-a-secure-local-web-server-(HTTPS)>) von der Befehlszeile, um Ihr Projekt lokal über `https` bereitzustellen und Sicherheitswarnungen zu vermeiden.

```bash
npm install -g local-web-server
cd ~/user/yourName/CycleTracker/
ws --https
```

Möglicherweise müssen Sie bei dem oben genannten die Installation mit `sudo` voranstellen.

> [!NOTE]
> Sollten Sie Privatsphäre anstreben, beachten Sie, dass Sie diese PWA selbst erstellen und sie auf Ihrem eigenen Gerät von Ihrer eigenen Entwicklungsumgebung aus installiert werden kann, ohne jemals das Internet zu betreten. Diese App hat keine Nachverfolgung. Es ist so privat, wie eine App nur sein kann.

## Sicherer externer Server

Die vorherigen Optionen sind in Ordnung und notwendig, um Ihre Anwendung während des Fortschritts durch dieses PWA-Tutorial oder jedes andere Webentwicklungsprojekt zu testen. Während Sie Ihre Web-App auf Ihrem Gerät hosten und verfügbar machen können, wird dies nicht empfohlen.

Um die zusätzlichen Funktionen von PWAs zu erhalten, einschließlich der Installation mit einem Klick, einer eigenständigen Benutzeroberfläche, der Zulassung zu App-Stores und optionaler Offline-Funktionalität durch Service-Worker, benötigen wir eine sichere Verbindung. Um Ihre App zu verteilen und anderen die Möglichkeit zu geben, Ihre PWA anzusehen, zu nutzen und zu installieren, möchten Sie Ihre Inhalte auf einem sicheren _fernen_ Server hosten und verfügbar machen.

Beim offiziellen Veröffentlichen einer PWA werden Sie wahrscheinlich in einen [Domainnamen und Web-Hosting](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost#hosting) investieren wollen. Für Open-Source-Projekte, bei denen Entwickler aus der Codebasis lernen und sogar zum Projekt beitragen können, können Sie Ihren Fortschritt auf [GitHub Pages](https://pages.github.com/) hosten.

## GitHub Pages

Der aktuelle Stand der CycleTracker-Anwendung kann auf GitHub angesehen werden, der sicher unter [https://mdn.github.io/pwa-examples/cycletracker/html_and_css/](https://mdn.github.io/pwa-examples/cycletracker/html_and_css/) bereitgestellt wird. Wir haben die Dateien auf das MDN GitHub-Konto hochgeladen. Wenn Sie ein [GitHub](https://github.com/) Konto haben, können Sie es auch auf Ihr Konto hochladen. Beachten Sie, dass Aktionen auf GitHub zwar sicher über TLS bereitgestellt werden, jedoch nicht unbedingt privat sind, und alle GitHub-Seiten öffentlich sind. Sollten Sie in einem Gebiet mit einer repressiven Regierung leben, die Menstruationszyklen verfolgt, sollten Sie in Betracht ziehen, den Code zu kopieren und einzufügen, anstatt ihn zu forken.

Um eine öffentlich zugängliche, sichere Website zu erstellen, erstellen Sie eine [GitHub Pages-Website](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site). Erstellen Sie ein Repository, das `<username>.github.io` benannt ist, wobei `<username>` Ihr GitHub-Benutzername ist. Erstellen Sie einen `gh-pages`-Zweig. Dieser Zweig Ihrer Anwendung wird verfügbar sein unter `https://<username>.github.io`.

Wie bereits erwähnt, sind alle GitHub Pages öffentlich im Internet verfügbar, selbst wenn Sie das Repository privat setzen. Da die Periodendaten mit localStorage gespeichert werden, ist die Anwendung über die GitHub-URL verfügbar, aber die Daten des Benutzers sind nur in einem Browser auf dem einen Gerät verfügbar, auf dem die Daten eingegeben wurden. Das direkte Löschen von localStorage, das im Browser erfolgt, löscht alle gespeicherten Daten.

Möchten Sie nicht, dass Ihre PWA auf der obersten Ebene erscheint, können Sie Ihre App so erscheinen lassen, als sei sie in einem Unterverzeichnis. Sie können entweder ein Unterverzeichnis innerhalb des `<username>.github.io`-Repositorys erstellen oder von Ihrem separaten PWA-Repository veröffentlichen. Durch [Konfiguration einer Veröffentlichungsquelle](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) innerhalb Ihres PWA-Repositorys wird Ihre App sichtbar unter `https://<username>.github.io/<repository>`, wobei `<repository>` der Name des Repositorys ist. Sie können GitHub so einstellen, dass Ihre Seite automatisch veröffentlicht wird, wenn Änderungen an einem [bestimmten Zweig](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch) innerhalb dieses Repositorys veröffentlicht werden, einschließlich `main`.

Im Fall der CycleTracker-Demo-App in den verschiedenen Entwicklungsstadien ist `<username>` `mdn` und das Repository `pwa-examples`. Da dieses Repository mehrere Beispiel-PWAs enthält, von denen jedes in mehreren Entwicklungsphasen Fortschritte zeigt, sind die Dateien und damit die PWA ein paar Ebenen tief verschachtelt.

Beachten Sie, dass Sie eine [benutzerdefinierte Domain für eine GitHub Pages-Website](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) konfigurieren können.

## Als nächstes

Wir sind in der Lage, eine gestaltete, statische Version der CycleTracker-Anwendungshülle anzuzeigen. Da wir nun wissen, wie wir die Anwendung, die wir gleich erstellen werden, betrachten können, fangen wir an, sie zu bauen. Als nächstes erstellen wir `app.js`, das JavaScript, das unser statisches Design in eine voll funktionsfähige Webanwendung umwandelt, die Daten lokal auf dem Gerät des Benutzers speichert.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS", "Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
