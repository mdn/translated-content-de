---
title: "CycleTracker: Sichere Verbindung"
short-title: Sichere Verbindung
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS", "Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

{{PWASidebar}}

PWAs können nur mit einer Manifestdatei installiert werden, wenn sie über das `https://`-Protokoll bereitgestellt werden oder lokal von den URLs `127.0.0.1` und `localhost` mit dem `http://`-Protokoll bereitgestellt werden. Außerdem verwenden sie häufig APIs, die [nur in sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) verfügbar sind.

Im vorherigen Abschnitt haben wir HTML und CSS verwendet, um die Grundstruktur unserer Perioden-Tracking-Anwendung zu erstellen. In diesem Abschnitt werden wir den statischen Inhalt von CycleTracker in einem Browser öffnen, den Inhalt in einer lokal gestarteten Entwicklungsumgebung und den Inhalt auf einem sicheren, entfernten Server ansehen.

## Anzeige mit dem `file://`-Protokoll

Jeder Browser rendert Ihr HTML. Um die HTML-Datei mit dem CSS aus dem vorherigen Abschnitt anzuzeigen, öffnen Sie die `index.html`-Datei, indem Sie in der Dateistruktur Ihres Computers zu ihr navigieren oder sie über die "Datei öffnen"-Option Ihres Browsers auswählen.

Mit der aktualisierten `index.html` und der `style.css` im gleichen Verzeichnis sollte die Seite in einem schmalen Browserfenster ähnlich wie auf diesem Screenshot aussehen:

![Hellgrüne Webseite mit einer großen Kopfzeile, einem Formular mit einer Legende, zwei Datumsauswahlen und einem Button. Unten sind zwei Platzhalter für Menstruationszyklen und eine Überschrift zu sehen.](filefile.jpg)

Wir betrachten unsere Seite mit dem `file://`-Protokoll, das einen [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) bietet. Dadurch wird sichergestellt, dass die Seiten mit dem aktuellen Stand unseres Code-Bestands angesehen werden können und weiterhin funktionieren, während wir [JavaScript-Funktionalität hinzufügen](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality), die einen sicheren Kontext erfordert.

> [!NOTE]
> Die Bereitstellung Ihrer App über `https` ist nicht nur für PWAs gut, sondern für alle Websites, da sie sicherstellt, dass die Informationen, die zwischen Ihrem Webserver und dem Browser des Benutzers übertragen werden, durchgehend verschlüsselt sind. Mehrere [Web-APIs erfordern sichere Kontexte](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts). Auch wenn Sie keine installierbaren PWAs erstellen, könnten Sie beim Hinzufügen von Funktionen zu jeder Web-App auf Fälle stoßen, in denen ein sicherer Kontext erforderlich ist.

Obwohl wir die meisten Anwendungsfunktionen mit dem `file://`-Protokoll anzeigen und testen können, können wir es nicht verwenden, um die Installation der Anwendung mit unserer [Manifestdatei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file) zu testen.

Wir benötigen eine lokale Entwicklungsumgebung, um das gesamte Tutorial einschließlich der Installation zu testen. Teil des [Verfahrens, um eine PWA installierbar zu machen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable), ist ein sicherer Server. Die Dateien müssen über eine sichere Verbindung im Web bereitgestellt werden, um die Vorteile zu nutzen, die PWAs bieten, und unsere Anwendung als PWA zu verteilen.

## localhost

Die Standardmethode zur Einrichtung einer lokalen Entwicklungsumgebung variiert je nach Betriebssystem. Während der Standardstandort für die Index- und Konfigurationsdateien auf Ihrem Betriebssystem unterschiedlich sein kann, ermöglichen die meisten Desktop-Betriebssysteme eine Serverkonfiguration, die für Sie als Entwickler zugänglich ist.

Zum Beispiel kann auf macOS, zumindest auf Sierra und Monterey, durch Eingabe von `sudo apachectl start` ein Apache HTTP-Server aktiviert werden. Sobald der Server gestartet ist, zeigt die Eingabe von `http://localhost` im Browser eine einfache Webseite an, die "It works!" liest. Standardmäßig ist die HTML-Datei, die angezeigt wird, `Library/WebServer/Documents/index.html.en`. Um Dateierweiterungen außer `.html.en` zuzulassen oder das Stammverzeichnis von `Library/WebServer/Documents/` zu ändern, müssen Sie die Apache HTTP-Konfigurationsdatei ändern, die sich unter `/etc/apache2/httpd.conf` befindet. Der Server kann mit `sudo apachectl stop` gestoppt werden.

Die Standard-`localhost`-URL des Betriebssystems ist einfach zu merken, aber der Server-Stammort und der Konfigurationsprozess sind schwer zu merken. Außerdem erlaubt sie nur einen lokalen Server an einem Ort zu einer Zeit. Glücklicherweise gibt es intuitivere Server-Einrichtungsoptionen, um eine oder mehrere lokale Entwicklungsumgebungen auf mehreren Ports zu erstellen.

## localhost mit einer Portnummer

Es gibt mehrere {{Glossary("IDE", "IDE")}}-Erweiterungen und programmspezifische Pakete, die es ermöglichen, eine Entwicklungsumgebung mit einem einzigen Klick oder Terminalbefehl zu starten. Sie können sogar mehrere lokale Server starten, jeder mit einer anderen Portnummer.

Sie können einen lokalen HTTP-Server mit einem [VS Code-Plugin](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server#using_an_extension_in_your_code_editor) betreiben, das es ermöglicht, einen lokalen Server auf einem einzigen oder unterschiedlichen Port laufen zu lassen. Die [Preview on Web Server-Erweiterung](https://marketplace.visualstudio.com/items?itemName=yuichinukiyama.vscode-preview-server) für die [VS Code](https://code.visualstudio.com/download) IDE erstellt einen Server im Stammverzeichnis des aktuell von dem Editor geöffneten Verzeichnisses, mit einem Standardport von `8080`. VS Code-Erweiterungen sind konfigurierbar. Die `previewServer.port`-Einstellung ist die Portnummer des Webservers. Die Standard-Einstellung von `8080` kann bearbeitet und geändert werden. Standardmäßig lädt die Eingabe von `localhost:8080` in der Browser-URL-Leiste die Seite.

> [!NOTE]
> Die Preview on Web Server-Erweiterung verwendet Browsersync. Wenn Ihre Entwicklungsumgebung durch diese Erweiterung gestartet wird, bietet `localhost:3001` eine Benutzeroberfläche für Browsersync, die einen Überblick über die aktuelle Serverumgebung bietet.

Erfahren Sie, wie Sie einen [lokalen Testserver einrichten](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server) mit [Python](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server#using_python) oder [lokaler Serversprachentechnologie](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server#running_server-side_languages_locally) wie PHP.

## Localhost mit npx

Wenn Sie Node installiert haben, haben Sie möglicherweise auch npm und npx installiert. Geben Sie an der Kommandozeile `npx -v` ein. Wenn eine Versionsnummer zurückgegeben wird, können Sie [http-server](https://www.npmjs.com/package/http-server), einen nicht konfigurierbaren statischen HTTP-Server, verwenden, ohne dass irgendwelche Anforderungen installiert werden müssen. Geben Sie an der Kommandozeile `npx http-server [path]` ein, wobei `[path]` der Ordner ist, in dem Ihre Indexdatei gespeichert ist.

Standardmäßig lädt die Eingabe von `localhost:8080` in der Browser-URL-Leiste die Seite. Wenn Sie bereits einen Server auf dem Port `8080` gestartet haben, ändert sich die Portnummer automatisch, und die Entwicklerumgebung startet mit einem verfügbaren Port, z. B. `8081`.

Sie können eine andere Portnummer wählen. Die Eingabe von `npx http-server /user/yourName/CycleTracker -p 8787` startet den lokalen Server auf Port `8787`, wenn verfügbar. Wenn nicht, werden bei Eingabe einer bereits verwendeten Portnummer ein Fehler `address already in use` oder ein ähnlicher Fehler angezeigt. Bei Erfolg rendert die Eingabe von `localhost:8787` in der Browser-URL-Leiste die als `~/user/yourName/CycleTracker/index.html` gespeicherte Indexdatei oder zeigt den Verzeichnisinhalt von `~/user/yourName/CycleTracker/` an, falls keine Indexdatei vorhanden ist.

Dieser nicht konfigurierbare statische HTTP-Server reicht für unsere einfache App aus. Apps, die über `localhost` und `127.0.0.1` bereitgestellt werden, sind von https ausgenommen und werden immer als sicher angesehen. Browserwarnungen bezüglich Unsicherheit, falls vorhanden, können umgangen werden. Obwohl nicht erforderlich, können Sie Ihren lokalen Webserver so konfigurieren, dass er über HTTPS bereitgestellt wird, indem Sie ein [integriertes TLS-Zertifikat hinzufügen](https://github.com/lwsjs/local-web-server/wiki/How-to-get-the-%22green-padlock%22-using-the-built-in-certificate). Mit dem Zertifikat können Sie den [local-web-server](<https://github.com/lwsjs/local-web-server/wiki/How-to-launch-a-secure-local-web-server-(HTTPS)>) von der Kommandozeile aus installieren und betreiben, um Ihr Projekt lokal über `https` zu dienen und Sicherheitswarnungen zu vermeiden.

```bash
npm install -g local-web-server
cd ~/user/yourName/CycleTracker/
ws --https
```

In dem obigen Beispiel müssen Sie möglicherweise `sudo` voranstellen, um die Installation durchzuführen.

> [!NOTE]
> Wenn Ihnen Datenschutz wichtig ist, bedenken Sie, dass Sie diese PWA selbst erstellen und sie auf Ihrem eigenen Computer aus Ihrer eigenen Entwicklungsumgebung ohne jemalsiges Zugreifen auf das Internet installiert werden kann. Diese App enthält kein Tracking. Es ist so privat wie eine App nur sein kann.

## Sicherer externer Server

Die vorherigen Optionen sind gut und notwendig, um Ihre Anwendung zu testen, während Sie dieses PWA-Tutorial oder jedes Web-Entwicklungsprojekt durchlaufen. Obwohl Sie Ihre Web-App auf Ihrem Gerät hosten und jedem mit einer Internetverbindung zugänglich machen können, wird dies nicht empfohlen.

Um die zusätzlichen Funktionen von PWAs zu nutzen, einschließlich der Installation mit einem Klick, einer eigenständigen Benutzeroberfläche, dem Zugang zu App-Stores und optionaler Offline-Funktionalität durch Service Worker, benötigen wir eine sichere Verbindung. Um Ihre App zu verteilen und anderen die Möglichkeit zu geben, Ihre PWA anzusehen, zu nutzen und zu installieren, möchten Sie, dass Ihre Inhalte auf einem sicheren _entfernten_ Server gehostet und verfügbar sind.

Beim offiziellen Veröffentlichen einer PWA werden Sie wahrscheinlich in einen [Domainnamen und Webhosting](/de/docs/Learn/Common_questions/Tools_and_setup/How_much_does_it_cost#hosting) investieren wollen. Für Open-Source-Projekte, bei denen Entwickler vom Code profitieren und sogar zum Projekt zurück beitragen können, können Sie Ihren Fortschritt auf [GitHub Pages](https://pages.github.com/) hosten.

## GitHub Pages

Der aktuelle Stand der CycleTracker-Anwendung ist auf GitHub sichtbar, sicher bereitgestellt unter [https://mdn.github.io/pwa-examples/cycletracker/html_and_css/](https://mdn.github.io/pwa-examples/cycletracker/html_and_css/). Wir haben die Dateien auf das MDN-GitHub-Konto hochgeladen. Wenn Sie ebenfalls ein [GitHub](https://github.com/)-Konto haben, können Sie es auf Ihrem eigenen hochladen. Beachten Sie jedoch, dass Aktionen auf GitHub zwar über TLS sicher bereitgestellt werden, jedoch nicht unbedingt privat sind und alle GitHub-Seiten öffentlich sind. Sollten Sie in einem Gebiet mit einer repressiven Regierung leben, die Menstruationszyklen verfolgt, ziehen Sie es in Betracht, den Code zu kopieren und einzufügen, anstatt ihn zu forken.

Um eine öffentlich zugängliche, sichere Seite zu erstellen, erstellen Sie eine [GitHub Pages-Seite](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site). Erstellen Sie ein Repository namens `<username>.github.io`, wobei `<username>` Ihr GitHub-Benutzername ist. Erstellen Sie einen `gh-pages`-Zweig. Dieser Zweig Ihrer Anwendung wird unter `https://<username>.github.io` verfügbar sein.

Wie bereits erwähnt, sind alle GitHub Pages öffentlich im Internet verfügbar, selbst wenn Sie das Repository auf privat setzen. Da die Periodendaten mittels localStorage gespeichert werden, ist die Anwendung über die GitHub-URL verfügbar, aber die Daten des Benutzers sind nur in dem einen Browser auf dem einen Gerät verfügbar, auf dem die Daten eingegeben wurden. Das direkte Löschen des localStorage, was im Browser erfolgt, entfernt alle gespeicherten Daten.

Wenn Sie nicht möchten, dass Ihre PWA auf oberster Ebene ist, können Sie Ihre App so erscheinen lassen, als ob sie sich in einem Unterverzeichnis befindet. Sie können entweder ein Unterverzeichnis innerhalb des `<username>.github.io`-Repositories erstellen oder aus dem separaten Repository Ihrer PWA veröffentlichen. Durch das [Konfigurieren einer Veröffentlichungsquelle](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) innerhalb Ihres PWA-Repositories wird Ihre App unter `https://<username>.github.io/<repository>` sichtbar, wobei `<repository>` der Name des Repositories ist. Sie können GitHub so einstellen, dass Ihre Seite automatisch veröffentlicht wird, wenn Änderungen an einem [bestimmten Branch](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch) innerhalb dieses Repositories durchgeführt werden, einschließlich `main`.

Im Fall der CycleTracker-Demo-App in verschiedenen Entwicklungsstadien ist `<username>` `mdn` und das Repository `pwa-examples`. Da dieses Repository mehrere Beispiel-PWAs enthält, die sich in verschiedenen Entwicklungsstadien befinden, sind die Dateien und daher die PWA ein paar Ebenen tief verschachtelt.

Beachten Sie, dass Sie [eine benutzerdefinierte Domain für eine GitHub Pages-Seite konfigurieren](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) können.

## Als nächstes

Wir können eine gestaltete, statische Version der CycleTracker-Anwendungsstruktur anzeigen. Jetzt, da wir wissen, wie wir die Anwendung, die wir gleich bauen werden, anzeigen können, lassen Sie uns mit dem Bau beginnen. Als nächstes erstellen wir `app.js`, das JavaScript, das unser statisches Design in eine voll funktionsfähige Webanwendung umwandelt, die Daten lokal auf dem Benutzergerät speichert.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS", "Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
