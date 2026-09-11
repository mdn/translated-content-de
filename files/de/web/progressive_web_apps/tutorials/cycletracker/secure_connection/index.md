---
title: "CycleTracker: Sichere Verbindung"
short-title: Sichere Verbindung
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection
l10n:
  sourceCommit: 11790c8b36e1163509f65285b88d6139eba64399
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS", "Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

PWAs können nur mithilfe einer Manifestdatei installiert werden, wenn sie über das `https://`-Protokoll bereitgestellt werden oder lokal über die URLs `127.0.0.1` und `localhost` mit dem `http://`-Protokoll bereitgestellt werden.
Sie verwenden außerdem häufig APIs, die auf [sichere Kontexte](/de/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts) beschränkt sind.

Im vorherigen Abschnitt haben wir HTML und CSS verwendet, um das Grundgerüst unserer Anwendung zur Periodenverfolgung zu erstellen. In diesem Abschnitt öffnen wir die statischen Inhalte von CycleTracker in einem Browser, betrachten die Inhalte aus einer lokal gestarteten Entwicklungsumgebung und betrachten die Inhalte auf einem entfernten, sicheren Server.

## Anzeige mit dem `file://`-Protokoll

Jeder Browser rendert Ihr HTML. Um die HTML-Datei mit dem CSS anzuzeigen, das Sie im vorherigen Abschnitt erstellt haben, öffnen Sie die Datei `index.html`, indem Sie über die Dateistruktur Ihres Computers zu ihr navigieren oder in Ihrem Browser die Menüoption „Datei öffnen“ verwenden.

Wenn `index.html` aktualisiert wurde und sich `style.css` im selben Verzeichnis befindet, sollte die Seite in einem schmalen Browserfenster ähnlich wie in diesem Screenshot aussehen:

![Hellgrüne Webseite mit einer großen Überschrift, einem Formular mit einer Legende, zwei Datumsauswahlen und einer Schaltfläche. Unten sind zwei Platzhalter-Menstruationszyklen und eine Überschrift zu sehen.](filefile.jpg)

Wir betrachten unsere Seite über das `file://`-Protokoll, das einen [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) bereitstellt.
Dadurch wird sichergestellt, dass die Seiten mit dem aktuellen Stand unserer Codebasis angezeigt werden können und weiterhin funktionieren, wenn wir [JavaScript-Funktionalität hinzufügen](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality), die einen sicheren Kontext erfordert.

> [!NOTE]
> Die Bereitstellung Ihrer App über `https` ist nicht nur für PWAs sinnvoll, sondern für alle Websites, da sie sicherstellt, dass die Informationen, die zwischen Ihrem Webserver und dem Browser der Benutzerin oder des Benutzers übertragen werden, Ende-zu-Ende verschlüsselt sind. Mehrere [Web-APIs erfordern sichere Kontexte](/de/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts). Selbst wenn Sie keine installierbaren PWAs erstellen, können Sie beim Hinzufügen von Funktionen zu einer beliebigen Web-App auf Fälle stoßen, in denen ein sicherer Kontext erforderlich ist.

Während wir den Großteil der Anwendungsfunktionalität mit dem `file://`-Protokoll anzeigen und testen können, können wir es nicht verwenden, um die Installation der Anwendung mithilfe unserer [Manifestdatei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file) zu testen.

Wir benötigen eine lokale Entwicklungsumgebung, um das gesamte Tutorial einschließlich der Installation zu testen. Teil des [Installierbarmachens einer PWA](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable) ist ein sicherer Server. Die Dateien müssen über eine sichere Verbindung im Web bereitgestellt werden, um auf die Vorteile von PWAs zuzugreifen und unsere Anwendung als PWA zu verteilen.

## localhost

Die Standardmethode zum Einrichten einer lokalen Entwicklungsumgebung hängt vom Betriebssystem ab. Obwohl sich der Standardspeicherort für Index- und Konfigurationsdateien je nach Betriebssystem unterscheiden kann, ermöglichen die meisten Desktop-Betriebssysteme eine Serverkonfiguration, auf die Sie als Entwicklerin oder Entwickler zugreifen können.

Auf macOS beispielsweise aktiviert die Eingabe von `sudo apachectl start`, zumindest unter Sierra und Monterey, einen Apache-HTTP-Server. Nachdem der Server gestartet wurde, zeigt die Eingabe von `http://localhost` im Browser eine einfache Webseite mit dem Text „It works!“ an. Standardmäßig ist die angezeigte HTML-Datei `Library/WebServer/Documents/index.html.en`. Um andere Dateierweiterungen als `.html.en` zu aktivieren oder das Stammverzeichnis von `Library/WebServer/Documents/` zu ändern, müssen Sie die Apache-HTTP-Konfigurationsdatei bearbeiten, die sich unter `/etc/apache2/httpd.conf` befindet. Der Server kann mit `sudo apachectl stop` beendet werden.

Das standardmäßige `localhost` des Betriebssystems hat eine leicht zu merkende URL, aber einen schwer zu merkenden Speicherort des Server-Stammverzeichnisses und einen komplizierten Konfigurationsprozess. Außerdem erlaubt es jeweils nur einen lokalen Server an einem Speicherort. Glücklicherweise gibt es intuitivere Optionen zur Servereinrichtung, um eine oder mehrere lokale Entwicklungsumgebungen auf mehreren Ports zu erstellen.

## localhost mit einer Portnummer

Es gibt mehrere {{Glossary("IDE", "IDE")}}-Erweiterungen und programmiersprachenspezifische Pakete, mit denen Sie eine Entwicklungsumgebung mit einem einzigen Klick oder Terminalbefehl starten können. Sie können sogar mehrere lokale Server starten, jeweils mit einer anderen Portnummer.

Sie können einen lokalen HTTP-Server mithilfe eines [VS-Code-Plugins](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#using_an_extension_in_your_code_editor) ausführen, das den Betrieb eines lokalen Servers auf einem einzelnen oder unterschiedlichen Port ermöglicht. Die Erweiterung [Preview on Web Server](https://marketplace.visualstudio.com/items?itemName=yuichinukiyama.vscode-preview-server) für die [VS Code](https://code.visualstudio.com/download)-IDE erstellt einen Server im Stammverzeichnis des aktuell im Editor geöffneten Verzeichnisses, mit dem Standardport `8080`. VS-Code-Erweiterungen sind konfigurierbar. Die Einstellung `previewServer.port` ist die Portnummer des Webservers. Die Standardeinstellung der Erweiterung, `8080`, kann bearbeitet und geändert werden. Standardmäßig wird durch die Eingabe von `localhost:8080` in die URL-Leiste des Browsers die Seite geladen.

> [!NOTE]
> Die Erweiterung Preview on Web Server verwendet Browsersync. Wenn Ihre Entwicklungsumgebung durch diese Erweiterung gestartet wird, stellt `localhost:3001` eine Benutzungsoberfläche für Browsersync bereit, die einen Überblick über die aktuelle Serverumgebung bietet.

Erfahren Sie, wie Sie mit [Python](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#using_python) oder einer [lokalen serverseitigen Sprache](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#running_server-side_languages_locally) wie PHP einen [lokalen Testserver einrichten](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server).

## Localhost mit npx

Wenn Sie Node installiert haben, haben Sie möglicherweise auch npm und npx installiert. Geben Sie in der Befehlszeile `npx -v` ein. Wenn eine Versionsnummer zurückgegeben wird, können Sie [http-server](https://www.npmjs.com/package/http-server), einen nicht konfigurierbaren statischen HTTP-Server, verwenden, ohne Anforderungen installieren zu müssen. Geben Sie in der Befehlszeile `npx http-server [path]` ein, wobei `[path]` der Ordner ist, in dem Ihre Indexdatei gespeichert ist.

Standardmäßig wird durch die Eingabe von `localhost:8080` in die URL-Leiste des Browsers die Seite geladen. Wenn Sie bereits einen Server auf Port `8080` gestartet haben, wird die Portnummer automatisch geändert und die Entwicklungsumgebung mit einem verfügbaren Port wie `8081` gestartet.

Sie können eine andere Portnummer wählen. Die Eingabe von `npx http-server /user/yourName/CycleTracker -p 8787` startet einen lokalen Server auf Port `8787`, sofern dieser verfügbar ist. Falls nicht, erhalten Sie bei Eingabe einer bereits verwendeten Portnummer den Fehler `address already in use` oder einen ähnlichen Fehler. Bei Erfolg rendert die Eingabe von `localhost:8787` in die URL-Leiste des Browsers die als `~/user/yourName/CycleTracker/index.html` gespeicherte Indexdatei oder zeigt den Verzeichnisinhalt von `~/user/yourName/CycleTracker/` an, wenn keine Indexdatei vorhanden ist.

Dieser nicht konfigurierbare statische HTTP-Server genügt für unsere einfache App. Über `localhost` und `127.0.0.1` bereitgestellte Apps sind von HTTPS ausgenommen und werden immer als sicher betrachtet. Sicherheitswarnungen des Browsers können, falls sie angezeigt werden, umgangen werden. Obwohl dies nicht erforderlich ist, können Sie [ein integriertes TLS-Zertifikat hinzufügen](https://github.com/lwsjs/local-web-server/wiki/How-to-get-the-%22green-padlock%22-using-the-built-in-certificate), um Ihren lokalen Webserver für die Bereitstellung über HTTPS zu konfigurieren. Mit dem Zertifikat können Sie [local-web-server](<https://github.com/lwsjs/local-web-server/wiki/How-to-launch-a-secure-local-web-server-(HTTPS)>) über die Befehlszeile installieren und ausführen, um Ihr Projekt lokal über `https` bereitzustellen und Sicherheitswarnungen zu verhindern.

```bash
npm install -g local-web-server
cd ~/user/yourName/CycleTracker/
ws --https
```

Möglicherweise müssen Sie bei obigem Befehl der Installation `sudo` voranstellen.

> [!NOTE]
> Wenn Ihnen Privatsphäre wichtig ist, bedenken Sie, dass Sie diese PWA selbst erstellen und auf Ihrem eigenen Rechner aus Ihrer eigenen Entwicklungsumgebung installieren können, ohne jemals auf das Internet zuzugreifen. Diese App enthält kein Tracking. Privater geht es kaum.

## Sicherer externer Server

Die vorherigen Optionen eignen sich gut und sind notwendig, um Ihre Anwendung zu testen, während Sie dieses PWA-Tutorial oder ein beliebiges Webentwicklungsprojekt durcharbeiten. Sie können Ihre Web-App zwar auf Ihrem Gerät hosten und sie für alle Personen mit einer Internetverbindung verfügbar machen, dies wird jedoch nicht empfohlen.

Um die zusätzlichen Funktionen von PWAs zu erhalten, einschließlich Installation mit einem Klick, einer eigenständigen Benutzeroberfläche, Aufnahme in App-Stores und optionaler Offline-Funktionalität über Service Worker, benötigen wir eine sichere Verbindung. Um Ihre App zu verteilen und anderen das Anzeigen, Verwenden und Installieren Ihrer PWA zu ermöglichen, sollten Sie Ihre Inhalte auf einem sicheren _entfernten_ Server hosten und bereitstellen.

Wenn Sie eine PWA offiziell veröffentlichen, werden Sie wahrscheinlich in einen [Domainnamen und Webhosting](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost#hosting) investieren wollen. Bei Open-Source-Projekten, bei denen Entwicklerinnen und Entwickler aus der Codebasis lernen und sogar zum Projekt beitragen können, können Sie Ihren Fortschritt auf [GitHub Pages](https://pages.github.com/) hosten.

## GitHub Pages

Der aktuelle Stand der CycleTracker-Anwendung kann auf GitHub angezeigt werden und wird sicher über [https://mdn.github.io/pwa-examples/cycletracker/html_and_css/](https://mdn.github.io/pwa-examples/cycletracker/html_and_css/) bereitgestellt. Wir haben die Dateien im MDN-GitHub-Konto veröffentlicht. Ebenso können Sie sie in Ihrem Konto veröffentlichen, wenn Sie ein [GitHub](https://github.com/)-Konto haben. Beachten Sie jedoch, dass Aktionen auf GitHub trotz sicherer Bereitstellung über TLS nicht unbedingt privat sind und alle GitHub-Seiten öffentlich sind. Wenn Sie in einem Gebiet mit einer repressiven Regierung leben, die Menstruationszyklen überwacht, sollten Sie den Code kopieren und einfügen, statt ihn zu forken.

Um eine öffentlich verfügbare sichere Website zu erstellen, erstellen Sie eine [GitHub-Pages-Website](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site). Erstellen Sie ein Repository mit dem Namen `<username>.github.io`, wobei `<username>` Ihr GitHub-Benutzername ist. Erstellen Sie einen `gh-pages`-Branch. Dieser Branch Ihrer Anwendung wird unter `https://<username>.github.io` verfügbar sein.

Wie erwähnt, sind alle GitHub Pages im Internet öffentlich verfügbar, selbst wenn Sie das Repository als privat festlegen. Da die Periodendaten mithilfe von localStorage gespeichert werden, ist die Anwendung über die GitHub-URL verfügbar, aber die Daten der Benutzerin oder des Benutzers sind nur in dem Browser auf dem Gerät verfügbar, auf dem die Daten eingegeben wurden. Das direkte Löschen von localStorage, das im Browser erfolgt, löscht alle gespeicherten Daten.

Wenn Ihre PWA nicht auf oberster Ebene sein soll, können Sie Ihre App so erscheinen lassen, als befände sie sich in einem Unterverzeichnis. Sie können entweder ein Unterverzeichnis im Repository `<username>.github.io` erstellen oder aus dem separaten Repository Ihrer PWA veröffentlichen. Durch das [Konfigurieren einer Veröffentlichungsquelle](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) in Ihrem PWA-Repository wird Ihre App unter `https://<username>.github.io/<repository>` sichtbar, wobei `<repository>` der Name des Repositorys ist. Sie können GitHub so einstellen, dass Ihre Website automatisch veröffentlicht wird, wenn Änderungen in einem bestimmten Branch innerhalb dieses Repositorys [veröffentlicht werden](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch), einschließlich `main`.

Im Fall der CycleTracker-Demo-App in den verschiedenen Entwicklungsphasen ist `<username>` `mdn` und das Repository ist `pwa-examples`. Da dieses Repository mehrere Beispiel-PWAs enthält, jeweils mit Fortschritt in mehreren Schritten des Entwicklungsprozesses, sind die Dateien und damit die PWA mehrere Ebenen tief verschachtelt.

Beachten Sie, dass Sie [eine benutzerdefinierte Domain für eine GitHub-Pages-Website konfigurieren](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) können.

## Als Nächstes

Wir können eine gestaltete, statische Version des CycleTracker-Anwendungsgrundgerüsts anzeigen. Jetzt, da wir wissen, wie wir die Anwendung anzeigen, die wir erstellen werden, können wir mit der Erstellung beginnen. Als Nächstes erstellen wir `app.js`, das JavaScript, das unser statisches Design in eine voll funktionsfähige Webanwendung umwandelt, die Daten lokal auf dem Rechner der Benutzerin oder des Benutzers speichert.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS", "Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
