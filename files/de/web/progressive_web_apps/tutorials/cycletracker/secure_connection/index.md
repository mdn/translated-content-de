---
title: "CycleTracker: Sichere Verbindung"
short-title: Sichere Verbindung
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS", "Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

PWAs können nur mit einer Manifestdatei installiert werden, wenn sie über das `https://`-Protokoll bereitgestellt werden oder lokal von `127.0.0.1` und `localhost` URLs mit dem `http://`-Protokoll bereitgestellt werden. Sie verwenden auch häufig APIs, die auf [sichere Kontexte beschränkt sind](/de/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts).

Im vorherigen Abschnitt haben wir HTML und CSS verwendet, um die Hülle unserer Menstruations-Tracking-Anwendung zu erstellen. In diesem Abschnitt werden wir die statischen Inhalte von CycleTracker in einem Browser öffnen, die Inhalte aus einer lokal gestarteten Entwicklungsumgebung anzeigen und die Inhalte auf einem entfernten, sicheren Server betrachten.

## Anzeige mit dem `file://`-Protokoll

Ein beliebiger Browser rendert Ihr HTML. Um die HTML-Datei mit der CSS-Anwendung anzuzeigen, die Sie im vorherigen Abschnitt erstellt haben, öffnen Sie die `index.html` Datei, indem Sie über die Dateistruktur Ihres Computers dorthin navigieren oder sie aus Ihrem Browser über die Menüoption "Datei öffnen" öffnen.

Mit der aktualisierten `index.html` und der `style.css` im selben Verzeichnis sollte der Aufruf der Seite in einem schmalen Browserfenster ähnlich diesem Screenshot aussehen:

![Hellgrüne Webseite mit großem Header, einem Formular mit Legende, zwei Datumsauswahlen und einem Button. Unten sind zwei Platzhalter Menstruationszyklen und ein Header dargestellt.](filefile.jpg)

Wir betrachten unsere Seite über das `file://`-Protokoll, das einen [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) bietet. Dies stellt sicher, dass die Seiten mit dem aktuellen Zustand unserer Codebasis angezeigt werden können und weiterhin funktionieren, wenn wir [JavaScript-Funktionen hinzufügen](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality), die einen sicheren Kontext erfordern.

> [!NOTE]
> Das Bereitstellen Ihrer App über `https` ist nicht nur für PWAs gut, sondern für alle Websites, da es sicherstellt, dass die Informationen, die zwischen Ihrem Webserver und dem Browser des Benutzers übertragen werden, Ende-zu-Ende verschlüsselt sind. Mehrere [Web-APIs erfordern sichere Kontexte](/de/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts). Selbst wenn Sie keine installierbaren PWAs erstellen, können Sie beim Hinzufügen von Funktionen zu einer beliebigen Webanwendung auf Fälle stoßen, in denen ein sicherer Kontext erforderlich ist.

Obwohl wir die meisten Anwendungsfunktionen mit dem `file://`-Protokoll anzeigen und testen können, können wir es nicht verwenden, um die Anwendungsinstallation mit unserer [Manifestdatei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file) zu testen.

Wir benötigen eine lokale Entwicklungsumgebung, um das gesamte Tutorial einschließlich Installation zu testen. Ein Teil des [Installierens eines PWAs](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable) ist ein sicherer Server. Die Dateien müssen über eine sichere Verbindung im Internet bereitgestellt werden, um die Vorteile von PWAs zu nutzen und unsere Anwendung als PWA zu verbreiten.

## localhost

Die Standardmethode zum Einrichten einer lokalen Entwicklungsumgebung variiert je nach Betriebssystem. Während sich der Standardstandort für die Index- und Konfigurationsdateien auf Ihrem Betriebssystem unterscheiden kann, ermöglichen die meisten Desktop-Betriebssysteme eine Serverkonfiguration, die für Sie, den Entwickler, zugänglich ist.

Zum Beispiel aktiviert das Eingeben von `sudo apachectl start` auf macOS, zumindest auf Sierra und Monterey, einen Apache HTTP-Server. Sobald der Server gestartet ist, zeigt das Eingeben von `http://localhost` im Browser eine grundlegende Webseite an, die "It works!" liest. Standardmäßig wird die HTML-Datei `Library/WebServer/Documents/index.html.en` angezeigt. Um Dateierweiterungen außer `.html.en` zu aktivieren oder das Stammverzeichnis von `Library/WebServer/Documents/` weg zu ändern, müssen Sie die apache http Konfigurationsdatei bearbeiten, die sich unter `/etc/apache2/httpd.conf` befindet. Der Server kann mit `sudo apachectl stop` gestoppt werden.

Das Betriebssystem hat unter `localhost` eine leicht zu merkende URL, aber einen schwer zu merkenden Serverstammort und Konfigurationsprozess. Es erlaubt auch nur einen lokalen Server an einem Ort zur gleichen Zeit. Zum Glück gibt es intuitivere Server-Einrichtungsoptionen, um eine oder mehrere lokale Entwicklungsumgebungen auf mehreren Ports zu erstellen.

## localhost mit einer Portnummer

Es gibt mehrere {{Glossary("IDE", "IDE")}}-Erweiterungen und programmiersprachenspezifische Pakete, die das Starten einer Entwicklungsumgebung mit einem einzigen Klick oder Terminalbefehl ermöglichen. Sie können sogar mehrere lokale Server starten, jeweils mit einer anderen Portnummer.

Sie können einen lokalen HTTP-Server mit einem [VS Code-Plugin](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#using_an_extension_in_your_code_editor) ausführen, das das Ausführen eines lokalen Servers auf einem einzigen oder unterschiedlichen Port ermöglicht. Die [Preview on Web Server-Erweiterung](https://marketplace.visualstudio.com/items?itemName=yuichinukiyama.vscode-preview-server) für die [VS Code](https://code.visualstudio.com/download) IDE erstellt einen Server im Stammverzeichnis des aktuell vom Editor geöffneten Verzeichnisses mit einem Standardport von `8080`. VS Code-Erweiterungen sind konfigurierbar. Die `previewServer.port` Einstellung ist die Portnummer des Webservers. Die Standardkonfiguration der Erweiterung von `8080` kann bearbeitet und geändert werden. Standardmäßig lädt das Eingeben von `localhost:8080` in die Browser-URL-Leiste die Seite.

> [!NOTE]
> Die Preview on Web Server-Erweiterung verwendet Browsersync. Wenn Ihre Entwicklungsumgebung von dieser Erweiterung gestartet wird, bietet `localhost:3001` eine Benutzeroberfläche für Browsersync, die einen Überblick über die aktuelle Serverumgebung bietet.

Erfahren Sie, wie Sie [einen lokalen Testserver einrichten](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) mit [Python](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#using_python) oder [lokaler serverseitiger Sprache](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#running_server-side_languages_locally) wie PHP.

## Localhost mit npx

Wenn Sie Node installiert haben, haben Sie möglicherweise auch npm und npx installiert. Geben Sie in der Befehlszeile `npx -v` ein. Wenn eine Versionsnummer zurückgegeben wird, können Sie [http-server](https://www.npmjs.com/package/http-server), einen nicht konfigurierbaren statischen HTTP-Server, verwenden, ohne Anforderungen installieren zu müssen. Geben Sie `npx http-server [path]` in die Befehlszeile ein, wobei `[path]` das Verzeichnis ist, in dem Ihre Indexdatei gespeichert ist.

Standardmäßig wird die Seite geladen, wenn Sie `localhost:8080` in die URL-Leiste des Browsers eingeben. Wenn Sie bereits einen Server auf dem Port `8080` gestartet haben, ändert er automatisch die Portnummer und startet die Entwicklerumgebung mit einem verfügbaren Port, z.B. `8081`.

Sie können eine andere Portnummer wählen. Geben Sie `npx http-server /user/yourName/CycleTracker -p 8787` ein, um einen lokalen Server auf dem Port `8787` zu starten, wenn dieser verfügbar ist. Wenn nicht, und Sie eine bereits verwendete Portnummer eingeben, erhalten Sie einen `Adresse bereits verwendet` oder ähnlichen Fehler. Bei Erfolg zeigt das Eingeben von `localhost:8787` in die Browser-URL-Leiste die in `~/user/yourName/CycleTracker/index.html` gespeicherte Indexdatei an oder zeigt den Verzeichnisinhalt von `~/user/yourName/CycleTracker/` an, sofern keine Indexdatei vorhanden ist.

Dieser nicht konfigurierbare statische HTTP-Server reicht für unsere grundlegende App aus. Apps, die über `localhost` und `127.0.0.1` bereitgestellt werden, sind von https befreit und werden immer als sicher angesehen. In-Browser Sicherheitswarnungen, sofern vorhanden, können umgangen werden. Auch wenn es nicht notwendig ist, kann zur Konfiguration Ihres lokalen Webservers, der über HTTPS bereitgestellt wird, ein [integriertes TLS-Zertifikat hinzugefügt](https://github.com/lwsjs/local-web-server/wiki/How-to-get-the-%22green-padlock%22-using-the-built-in-certificate) werden. Mit dem Zertifikat können Sie den [lokalen Webserver](<https://github.com/lwsjs/local-web-server/wiki/How-to-launch-a-secure-local-web-server-(HTTPS)>) vom Terminal aus ausführen, um Ihr Projekt lokal über `https` bereitzustellen und dadurch Sicherheitswarnungen zu vermeiden.

```bash
npm install -g local-web-server
cd ~/user/yourName/CycleTracker/
ws --https
```

Im obigen Beispiel müssen Sie möglicherweise die Installation mit `sudo` voranstellen.

> [!NOTE]
> Wenn Sie auf Privatsphäre Wert legen, bedenken Sie, dass Sie diese PWA selbst erstellen und sie auf Ihrem eigenen Gerät von Ihrer eigenen Entwicklungsumgebung installiert werden kann, ohne jemals das Internet zu betreten. Diese App hat keine Rückverfolgung. Sie ist so privat, wie es eine App nur sein kann.

## Sicherer externer Server

Die vorherigen Optionen sind in Ordnung und notwendig, um Ihre Anwendung zu testen, während Sie dieses PWA-Tutorial oder ein beliebiges Webentwicklungsprojekt durchlaufen. Während Sie Ihre Web-App auf Ihrem Gerät hosten und jedem mit einer Internetverbindung verfügbar machen können, wird dies nicht empfohlen.

Um die zusätzlichen Funktionen von PWAs zu erhalten, einschließlich der Installation mit einem Klick, einer eigenständigen Benutzeroberfläche, der Aufnahme in App-Stores und optionaler Offline-Funktionalität durch Service Worker, benötigen wir eine sichere Verbindung. Um Ihre App zu verbreiten und es anderen zu ermöglichen, Ihre PWA zu sehen, zu nutzen und zu installieren, sollten Sie Ihre Inhalte auf einem sicheren _entfernten_ Server hosten.

Beim offiziellen Veröffentlichen einer PWA möchten Sie wahrscheinlich in einen [Domainnamen und Webhosting](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost#hosting) investieren. Für Open-Source-Projekte, bei denen Entwickler aus dem Code lernen und sogar zum Projekt beitragen können, können Sie Ihren Fortschritt auf [GitHub Pages](https://pages.github.com/) hosten.

## GitHub Pages

Der aktuelle Stand der CycleTracker-Anwendung ist auf GitHub einsehbar, sicher bereitgestellt unter [https://mdn.github.io/pwa-examples/cycletracker/html_and_css/](https://mdn.github.io/pwa-examples/cycletracker/html_and_css/). Wir haben die Dateien auf dem MDN GitHub-Konto veröffentlicht. Ebenso, wenn Sie ein [GitHub](https://github.com/) Konto haben, können Sie es auf Ihrem posten. Beachten Sie einfach, dass trotz der sicheren Bereitstellung über TLS Aktionen auf GitHub nicht unbedingt privat sind und alle GitHub-Seiten öffentlich sind. Wenn Sie in einem Gebiet mit einer repressiven Regierung leben, die Menstruationszyklen verfolgt, sollten Sie den Code lieber kopieren und einfügen anstatt das Projekt zu verzweigen.

Um eine öffentlich verfügbare sichere Seite zu erstellen, mit einer [GitHub Pages-Seite beginnen](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site). Erstellen Sie ein Repository mit dem Namen `<username>.github.io`, wobei `<username>` Ihr GitHub-Benutzername ist. Erstellen Sie einen `gh-pages`-Branch. Dieser Branch Ihrer Anwendung wird unter `https://<username>.github.io` verfügbar sein.

Wie bereits erwähnt, sind alle GitHub Pages öffentlich im Internet verfügbar, auch wenn Sie das Repository auf privat setzen. Da die Periodendaten mit localStorage gespeichert werden, ist die Anwendung über die GitHub-URL verfügbar, aber die Benutzerdaten sind nur in dem einen Browser auf dem einen Gerät verfügbar, auf dem die Daten eingegeben wurden. Das direkte Löschen der localStorage, was im Browser erfolgt, löscht alle gespeicherten Daten.

Wenn Sie nicht möchten, dass Ihre PWA auf der obersten Ebene ist, können Sie Ihre App so erscheinen lassen, als wenn sie in einem Unterverzeichnis liegt. Sie können entweder ein Unterverzeichnis innerhalb des `<username>.github.io` Repositories erstellen oder von Ihrem separaten PWA-Repository aus veröffentlichen. Indem Sie eine [Veröffentlichungsquelle konfigurieren](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), wird Ihre App innerhalb Ihres PWA-Repositories unter `https://<username>.github.io/<repository>` sichtbar, wobei `<repository>` der Name des Repositories ist. Sie können GitHub so einstellen, dass Ihre Seite automatisch veröffentlicht wird, wenn Änderungen [an einem bestimmten Branch veröffentlicht werden](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch) innerhalb dieses Repositories, einschließlich `main`.

Im Fall der CycleTracker-Demo-App in den verschiedenen Entwicklungsstadien ist `<username>` `mdn` und das Repository `pwa-examples`. Da dieses Repository mehrere Beispiel-PWAs enthält, jeweils mit Fortschritten in verschiedenen Schritten des Entwicklungsprozesses, sind die Dateien und deshalb die PWA einige Ebenen tief verschachtelt.

Beachten Sie, dass Sie eine [benutzerdefinierte Domain für eine GitHub Pages-Site konfigurieren können](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Als Nächstes

Wir können eine gestaltete, statische Version der CycleTracker-Anwendungshülle betrachten. Da wir nun wissen, wie wir die Anwendung sehen können, die wir gleich bauen werden, lassen Sie uns damit beginnen, sie zu bauen. Als Nächstes erstellen wir `app.js`, das JavaScript, das unser statisches Design in eine voll funktionsfähige Webanwendung umwandelt, die Daten lokal auf dem Rechner der Benutzer speichert.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS", "Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
