---
title: "CycleTracker: Sichere Verbindung"
short-title: Sichere Verbindung
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection
l10n:
  sourceCommit: da7287ff61b6ea4db7f9a5e07be11263b525b7d0
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS", "Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

PWAs können nur mithilfe einer Manifestdatei installiert werden, wenn sie über das Protokoll `https://` bereitgestellt werden oder lokal über die URLs `127.0.0.1` und `localhost` mit dem Protokoll `http://`.
Sie verwenden außerdem häufig APIs, die auf [sichere Kontexte beschränkt](/de/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts) sind.

Im vorherigen Abschnitt haben wir HTML und CSS verwendet, um das Grundgerüst unserer Anwendung zur Zyklusverfolgung zu erstellen. In diesem Abschnitt öffnen wir die statischen Inhalte von CycleTracker in einem Browser, zeigen die Inhalte aus einer lokal gestarteten Entwicklungsumgebung an und zeigen die Inhalte auf einem entfernten, sicheren Server an.

## Anzeige mit dem Protokoll `file://`

Jeder Browser rendert Ihr HTML. Um die HTML-Datei mit dem CSS anzuzeigen, das Sie im vorherigen Abschnitt erstellt haben, öffnen Sie die Datei `index.html`, indem Sie über die Dateistruktur Ihres Computers zu ihr navigieren oder in Ihrem Browser die Menüoption „Datei öffnen“ verwenden.

Wenn `index.html` aktualisiert wurde und sich `style.css` im selben Verzeichnis befindet, sollte die Seite in einem schmalen Browserfenster ähnlich wie in diesem Screenshot aussehen:

![Hellgrüne Webseite mit einer großen Kopfzeile, einem Formular mit einer Legende, zwei Datumsauswahlen und einer Schaltfläche. Unten sind zwei Platzhalter-Menstruationszyklen und eine Kopfzeile zu sehen.](filefile.jpg)

Wir betrachten unsere Seite über das Protokoll `file://`, das einen [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) bereitstellt.
Dies stellt sicher, dass die Seiten mit dem aktuellen Stand unserer Codebasis angezeigt werden können und weiterhin funktionieren, wenn wir [JavaScript-Funktionalität hinzufügen](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality), die einen sicheren Kontext erfordert.

> [!NOTE]
> Die Bereitstellung Ihrer App über `https` ist nicht nur für PWAs sinnvoll, sondern für alle Websites, da dadurch sichergestellt wird, dass die Informationen, die zwischen Ihrem Webserver und dem Browser der Benutzerin bzw. des Benutzers übertragen werden, Ende-zu-Ende verschlüsselt sind. Mehrere [Web-APIs erfordern sichere Kontexte](/de/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts). Auch wenn Sie keine installierbaren PWAs erstellen, können Sie beim Hinzufügen von Funktionen zu einer Web-App auf Fälle stoßen, in denen ein sicherer Kontext erforderlich ist.

Obwohl wir den Großteil der Anwendungsfunktionalität über das Protokoll `file://` anzeigen und testen können, können wir es nicht verwenden, um die Installation der Anwendung mithilfe unserer [Manifestdatei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file) zu testen.

Wir benötigen eine lokale Entwicklungsumgebung, um das gesamte Tutorial einschließlich der Installation zu testen. Ein Teil des [Installierbarmachens einer PWA](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable) ist ein sicherer Server. Die Dateien müssen über eine sichere Verbindung im Web bereitgestellt werden, um die Vorteile von PWAs nutzen und unsere Anwendung als PWA verbreiten zu können.

## localhost

Die Standardmethode zum Einrichten einer lokalen Entwicklungsumgebung variiert je nach Betriebssystem. Obwohl sich der Standardspeicherort für die Index- und Konfigurationsdateien auf Ihrem Betriebssystem unterscheiden kann, ermöglichen die meisten Desktop-Betriebssysteme eine Serverkonfiguration, auf die Sie als Entwicklerin bzw. Entwickler zugreifen können.

Beispielsweise aktiviert auf macOS, zumindest unter Sierra und Monterey, die Eingabe von `sudo apachectl start` einen Apache-HTTP-Server. Sobald der Server gestartet wurde, wird durch Eingabe von `http://localhost` im Browser eine einfache Webseite angezeigt, auf der „It works!“ steht. Standardmäßig wird die HTML-Datei `Library/WebServer/Documents/index.html.en` angezeigt. Um andere Dateierweiterungen als `.html.en` zu aktivieren oder das Stammverzeichnis von `Library/WebServer/Documents/` zu ändern, müssen Sie die Apache-HTTP-Konfigurationsdatei unter `/etc/apache2/httpd.conf` bearbeiten. Der Server kann mit `sudo apachectl stop` beendet werden.

Das Standard-`localhost` des Betriebssystems verfügt über eine leicht zu merkende URL, aber über einen schwer zu merkenden Speicherort für das Server-Stammverzeichnis und einen komplizierten Konfigurationsprozess. Außerdem ermöglicht es jeweils nur einen lokalen Server an einem Speicherort. Glücklicherweise gibt es intuitivere Optionen zur Servereinrichtung, um eine oder mehrere lokale Entwicklungsumgebungen auf mehreren Ports zu erstellen.

## localhost mit einer Portnummer

Es gibt mehrere {{Glossary("IDE", "IDE")}}-Erweiterungen und programmspezifische Pakete, mit denen sich eine Entwicklungsumgebung mit einem einzigen Klick oder einem Terminalbefehl starten lässt. Sie können sogar mehrere lokale Server starten, jeweils mit einer anderen Portnummer.

Sie können einen lokalen HTTP-Server mithilfe eines [VS-Code-Plugins](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#using_an_extension_in_your_code_editor) ausführen, das das Ausführen eines lokalen Servers auf einem einzelnen oder unterschiedlichen Port ermöglicht. Die Erweiterung [Preview on Web Server](https://marketplace.visualstudio.com/items?itemName=yuichinukiyama.vscode-preview-server) für die [VS Code](https://code.visualstudio.com/download)-IDE erstellt einen Server im Stammverzeichnis des Verzeichnisses, das derzeit im Editor geöffnet ist, mit dem Standardport `8080`. VS-Code-Erweiterungen sind konfigurierbar. Die Einstellung `previewServer.port` ist die Portnummer des Webservers. Die Standardeinstellung der Erweiterung `8080` kann bearbeitet und geändert werden. Standardmäßig wird die Seite geladen, wenn Sie `localhost:8080` in die URL-Leiste des Browsers eingeben.

> [!NOTE]
> Die Erweiterung Preview on Web Server verwendet Browsersync. Wenn Ihre Entwicklungsumgebung durch diese Erweiterung gestartet wird, stellt `localhost:3001` eine Benutzeroberfläche für Browsersync bereit, die einen Überblick über die aktuelle Serverumgebung bietet.

Erfahren Sie, wie Sie einen [lokalen Testserver einrichten](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server), indem Sie [Python](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#using_python) oder eine [lokale serverseitige Sprache](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#running_server-side_languages_locally) wie PHP verwenden.

## Localhost mit npx

Wenn Sie Node installiert haben, sind möglicherweise auch npm und npx installiert. Geben Sie in der Befehlszeile `npx -v` ein. Wenn eine Versionsnummer zurückgegeben wird, können Sie [http-server](https://www.npmjs.com/package/http-server), einen nicht konfigurierbaren statischen HTTP-Server, verwenden, ohne Voraussetzungen installieren zu müssen. Geben Sie in der Befehlszeile `npx http-server [path]` ein, wobei `[path]` der Ordner ist, in dem Ihre Indexdatei gespeichert ist.

Standardmäßig wird die Seite geladen, wenn Sie `localhost:8080` in die URL-Leiste des Browsers eingeben. Wenn Sie bereits einen Server auf Port `8080` gestartet haben, wird die Portnummer automatisch geändert und die Entwicklungsumgebung mit einem verfügbaren Port wie `8081` gestartet.

Sie können eine andere Portnummer auswählen. Die Eingabe von `npx http-server /user/yourName/CycleTracker -p 8787` startet einen lokalen Server auf Port `8787`, wenn dieser verfügbar ist. Wenn nicht, erhalten Sie bei Eingabe einer bereits verwendeten Portnummer einen Fehler wie `address already in use`. Bei Erfolg rendert die Eingabe von `localhost:8787` in der URL-Leiste des Browsers die als `~/user/yourName/CycleTracker/index.html` gespeicherte Indexdatei oder zeigt den Verzeichnisinhalt von `~/user/yourName/CycleTracker/` an, wenn keine Indexdatei vorhanden ist.

Dieser nicht konfigurierbare statische HTTP-Server genügt für unsere einfache App. Über `localhost` und `127.0.0.1` bereitgestellte Apps sind von HTTPS ausgenommen und werden immer als sicher betrachtet. Sicherheitswarnungen des Browsers können, falls sie angezeigt werden, umgangen werden. Obwohl es nicht erforderlich ist, können Sie Ihren lokalen Webserver so konfigurieren, dass er über HTTPS bereitgestellt wird, indem Sie [ein integriertes TLS-Zertifikat hinzufügen](https://github.com/lwsjs/local-web-server/wiki/How-to-get-the-%22green-padlock%22-using-the-built-in-certificate). Mit dem Zertifikat können Sie [local-web-server](<https://github.com/lwsjs/local-web-server/wiki/How-to-launch-a-secure-local-web-server-(HTTPS)>) über die Befehlszeile installieren und ausführen, um Ihr Projekt lokal über `https` bereitzustellen und Sicherheitswarnungen zu vermeiden.

```bash
npm install -g local-web-server
cd ~/user/yourName/CycleTracker/
ws --https
```

Möglicherweise müssen Sie der Installation oben `sudo` voranstellen.

> [!NOTE]
> Wenn Ihnen Privatsphäre wichtig ist, bedenken Sie, dass Sie diese PWA selbst erstellen und sie auf Ihrem eigenen Computer aus Ihrer eigenen Entwicklungsumgebung installieren können, ohne jemals auf das Internet zuzugreifen. Diese App enthält kein Tracking. Privater geht es kaum.

## Sicherer externer Server

Die vorherigen Optionen sind geeignet und notwendig, um Ihre Anwendung während dieses PWA-Tutorials oder eines beliebigen Webentwicklungsprojekts zu testen. Obwohl Sie Ihre Web-App auf Ihrem Gerät hosten und für alle Personen mit einer Internetverbindung verfügbar machen können, wird dies nicht empfohlen.

Um die zusätzlichen Funktionen von PWAs zu erhalten, einschließlich Installation mit einem einzigen Klick, einer eigenständigen Benutzeroberfläche, Zulassung zu App-Stores und optionaler Offline-Funktionalität durch Service Workers, benötigen wir eine sichere Verbindung. Um Ihre App zu verbreiten und anderen zu ermöglichen, Ihre PWA anzuzeigen, zu verwenden und zu installieren, sollten Sie Ihre Inhalte auf einem sicheren _entfernten_ Server hosten und verfügbar machen.

Wenn Sie eine PWA offiziell veröffentlichen, möchten Sie wahrscheinlich in einen [Domainnamen und Webhosting](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost#hosting) investieren. Bei Open-Source-Projekten, bei denen Entwicklerinnen und Entwickler aus der Codebasis lernen und sogar zum Projekt beitragen können, können Sie Ihren Fortschritt auf [GitHub Pages](https://pages.github.com/) hosten.

## GitHub Pages

Der aktuelle Zustand der CycleTracker-Anwendung kann auf GitHub angezeigt werden und wird sicher über [https://mdn.github.io/pwa-examples/cycletracker/html_and_css/](https://mdn.github.io/pwa-examples/cycletracker/html_and_css/) bereitgestellt. Wir haben die Dateien im MDN-GitHub-Konto veröffentlicht. Wenn Sie ebenfalls ein [GitHub](https://github.com/)-Konto haben, können Sie sie in Ihrem Konto veröffentlichen. Beachten Sie jedoch, dass Aktionen auf GitHub zwar sicher über TLS bereitgestellt werden, aber nicht unbedingt privat sind und alle GitHub-Seiten öffentlich sind. Wenn Sie in einer Region mit einer repressiven Regierung leben, die Menstruationszyklen überwacht, sollten Sie den Code kopieren und einfügen, statt ihn zu forken.

Um eine öffentlich verfügbare sichere Website zu erstellen, erstellen Sie eine [GitHub-Pages-Website](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site). Erstellen Sie ein Repository mit dem Namen `<username>.github.io`, wobei `<username>` Ihr GitHub-Benutzername ist. Erstellen Sie einen Branch `gh-pages`. Dieser Branch Ihrer Anwendung ist unter `https://<username>.github.io` verfügbar.

Wie bereits erwähnt, sind alle GitHub Pages öffentlich im Internet verfügbar, selbst wenn Sie das Repository als privat festlegen. Da die Periodendaten mit localStorage gespeichert werden, ist die Anwendung über die GitHub-URL verfügbar, die Daten der Benutzerin bzw. des Benutzers sind jedoch nur in dem einen Browser auf dem einen Gerät verfügbar, auf dem die Daten eingegeben wurden. Das direkte Löschen von localStorage im Browser löscht alle gespeicherten Daten.

Wenn Ihre PWA nicht auf der obersten Ebene liegen soll, können Sie Ihre App so erscheinen lassen, als befände sie sich in einem Unterverzeichnis. Sie können entweder ein Unterverzeichnis innerhalb des Repositorys `<username>.github.io` erstellen oder aus dem separaten Repository Ihrer PWA veröffentlichen. Durch das [Konfigurieren einer Veröffentlichungsquelle](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) in Ihrem PWA-Repository ist Ihre App unter `https://<username>.github.io/<repository>` sichtbar, wobei `<repository>` der Name des Repositorys ist. Sie können GitHub so konfigurieren, dass Ihre Website automatisch veröffentlicht wird, wenn Änderungen in einem [bestimmten Branch veröffentlicht werden](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch), einschließlich `main`.

Im Fall der CycleTracker-Demo-App in den verschiedenen Entwicklungsphasen ist `<username>` `mdn` und das Repository `pwa-examples`. Da dieses Repository mehrere Beispiel-PWAs enthält, die jeweils bei mehreren Schritten im Entwicklungsprozess dargestellt werden, sind die Dateien und damit die PWA mehrere Ebenen tief verschachtelt.

Beachten Sie, dass Sie [eine benutzerdefinierte Domain für eine GitHub-Pages-Website konfigurieren](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) können.

## Als Nächstes

Wir können eine gestaltete, statische Version des CycleTracker-Anwendungsgerüsts anzeigen. Da wir nun wissen, wie wir die Anwendung anzeigen können, die wir gleich erstellen werden, beginnen wir mit dem Aufbau. Als Nächstes erstellen wir `app.js`, das JavaScript, das unser statisches Design in eine voll funktionsfähige Webanwendung umwandelt, die Daten lokal auf dem Computer der Benutzerin bzw. des Benutzers speichert.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS", "Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
