---
title: "CycleTracker: Sichere Verbindung"
short-title: Sichere Verbindung
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection
l10n:
  sourceCommit: d50a52075711e21da27bce5ee24f6334b56cf0f3
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS", "Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

PWAs können mithilfe einer Manifestdatei nur installiert werden, wenn sie über das Protokoll `https://` bereitgestellt werden oder lokal über URLs mit `127.0.0.1` beziehungsweise `localhost` und dem Protokoll `http://` erreichbar sind. Außerdem verwenden sie häufig APIs, deren Nutzung [auf sichere Kontexte beschränkt ist](/de/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts).

Im vorherigen Abschnitt haben wir mit HTML und CSS das Grundgerüst unserer Anwendung zur Zyklusverfolgung erstellt. In diesem Abschnitt öffnen wir die statischen Inhalte von CycleTracker in einem Browser, betrachten sie in einer lokal gestarteten Entwicklungsumgebung und rufen sie von einem sicheren Remote-Server ab.

## Anzeige über das Protokoll `file://`

Jeder Browser kann Ihr HTML darstellen. Um die im vorherigen Abschnitt erstellte HTML-Datei mit dem angewendeten CSS anzuzeigen, öffnen Sie die Datei `index.html` über die Dateiverwaltung Ihres Computers oder über die Menüoption „Datei öffnen“ Ihres Browsers.

Wenn `index.html` aktualisiert wurde und sich `style.css` im selben Verzeichnis befindet, sollte die Seite in einem schmalen Browserfenster ungefähr wie auf diesem Screenshot aussehen:

![Hellgrüne Webseite mit einer großen Überschrift, einem Formular mit Legende, zwei Datumsfeldern und einer Schaltfläche. Unten sind zwei beispielhafte Menstruationszyklen und eine Überschrift zu sehen.](filefile.jpg)

Wir betrachten die Seite über das Protokoll `file://`, das einen [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) bereitstellt. So können wir die Seiten mit dem aktuellen Stand unseres Codes aufrufen. Das wird auch weiterhin funktionieren, wenn wir [JavaScript-Funktionalität hinzufügen](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality), die einen sicheren Kontext voraussetzt.

> [!NOTE]
> Die Bereitstellung Ihrer Anwendung über `https` ist nicht nur für PWAs sinnvoll, sondern für alle Websites: Sie stellt sicher, dass die zwischen Ihrem Webserver und dem Browser der Benutzer übertragenen Informationen durchgehend verschlüsselt sind. Mehrere [Web-APIs erfordern sichere Kontexte](/de/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts). Auch wenn Sie keine installierbare PWA erstellen, können Sie beim Hinzufügen von Funktionen zu einer Webanwendung auf Fälle stoßen, in denen ein sicherer Kontext erforderlich ist.

Über das Protokoll `file://` können wir die meisten Funktionen der Anwendung betrachten und testen. Die Installation der Anwendung mithilfe unserer [Manifestdatei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file) lässt sich damit jedoch nicht testen.

Um das gesamte Tutorial einschließlich der Installation zu testen, benötigen wir eine lokale Entwicklungsumgebung. Ein sicherer Server gehört zu den Voraussetzungen, um [eine PWA installierbar zu machen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable). Damit wir die Vorteile von PWAs nutzen und unsere Anwendung als PWA verbreiten können, müssen die Dateien im Web über eine sichere Verbindung bereitgestellt werden.

## localhost

Wie eine lokale Entwicklungsumgebung standardmäßig eingerichtet wird, hängt vom Betriebssystem ab. Die Standardspeicherorte der Index- und Konfigurationsdateien können sich unterscheiden. Auf den meisten Desktop-Betriebssystemen können Sie als Entwickler jedoch einen Server konfigurieren.

Unter macOS, zumindest unter Sierra und Monterey, lässt sich beispielsweise mit `sudo apachectl start` ein Apache-HTTP-Server starten. Wenn Sie anschließend `http://localhost` im Browser aufrufen, erscheint eine einfache Webseite mit dem Text „It works!“. Standardmäßig wird die HTML-Datei `Library/WebServer/Documents/index.html.en` angezeigt. Um andere Dateiendungen als `.html.en` zuzulassen oder das Stammverzeichnis von `Library/WebServer/Documents/` an einen anderen Ort zu verlegen, müssen Sie die Apache-HTTP-Konfigurationsdatei unter `/etc/apache2/httpd.conf` bearbeiten. Mit `sudo apachectl stop` können Sie den Server beenden.

Der vom Betriebssystem bereitgestellte `localhost` hat eine leicht zu merkende URL. Der Speicherort des Server-Stammverzeichnisses und der Konfigurationsvorgang sind dagegen schwerer zu merken. Außerdem lässt sich so jeweils nur ein lokaler Server an einem Ort betreiben. Glücklicherweise gibt es intuitivere Möglichkeiten, eine oder mehrere lokale Entwicklungsumgebungen auf verschiedenen Ports einzurichten.

## localhost mit Portnummer

Es gibt verschiedene Erweiterungen für {{Glossary("IDE", "IDEs")}} und sprachspezifische Pakete, mit denen Sie eine Entwicklungsumgebung per Klick oder Terminalbefehl starten können. Sie können sogar mehrere lokale Server gleichzeitig betreiben, jeweils mit einer anderen Portnummer.

Mit einer [VS-Code-Erweiterung](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#using_an_extension_in_your_code_editor) können Sie einen lokalen HTTP-Server auf einem bestimmten Port starten. Die Erweiterung [Preview on Web Server](https://marketplace.visualstudio.com/items?itemName=yuichinukiyama.vscode-preview-server) für die IDE [VS Code](https://code.visualstudio.com/download) erstellt einen Server im Stammverzeichnis des aktuell im Editor geöffneten Verzeichnisses. Der Standardport ist `8080`. VS-Code-Erweiterungen lassen sich konfigurieren: Die Einstellung `previewServer.port` bestimmt die Portnummer des Webservers. Sie können den Standardwert `8080` ändern. Wenn Sie `localhost:8080` in die Adressleiste des Browsers eingeben, wird standardmäßig die Seite geladen.

> [!NOTE]
> Die Erweiterung Preview on Web Server verwendet Browsersync. Wenn Sie Ihre Entwicklungsumgebung mit dieser Erweiterung starten, finden Sie unter `localhost:3001` eine Browsersync-Benutzeroberfläche mit einem Überblick über die aktuelle Serverumgebung.

Erfahren Sie, wie Sie mit [Python](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#using_python) oder einer [lokal ausgeführten serverseitigen Sprache](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#running_server-side_languages_locally) wie PHP [einen lokalen Testserver einrichten](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server).

## Localhost mit npx

Wenn Node installiert ist, sind möglicherweise auch npm und npx installiert. Geben Sie in der Befehlszeile `npx -v` ein. Wird eine Versionsnummer ausgegeben, können Sie [http-server](https://www.npmjs.com/package/http-server) verwenden, einen statischen HTTP-Server ohne Konfigurationsmöglichkeiten, ohne zuvor etwas installieren zu müssen. Geben Sie in der Befehlszeile `npx http-server [path]` ein. `[path]` bezeichnet dabei den Ordner, in dem Ihre Indexdatei gespeichert ist.

Standardmäßig wird die Seite geladen, wenn Sie `localhost:8080` in die Adressleiste des Browsers eingeben. Falls auf Port `8080` bereits ein Server läuft, wird automatisch ein anderer verfügbarer Port gewählt, beispielsweise `8081`.

Sie können auch selbst eine andere Portnummer wählen. Mit `npx http-server /user/yourName/CycleTracker -p 8787` starten Sie einen lokalen Server auf Port `8787`, sofern dieser verfügbar ist. Wenn Sie eine bereits verwendete Portnummer angeben, erhalten Sie stattdessen die Fehlermeldung `address already in use` oder eine ähnliche Meldung. Nach einem erfolgreichen Start zeigt der Aufruf von `localhost:8787` im Browser die unter `~/user/yourName/CycleTracker/index.html` gespeicherte Indexdatei an. Ist keine Indexdatei vorhanden, wird der Inhalt des Verzeichnisses `~/user/yourName/CycleTracker/` angezeigt.

Für unsere einfache Anwendung reicht dieser statische HTTP-Server ohne Konfigurationsmöglichkeiten aus. Anwendungen, die über `localhost` oder `127.0.0.1` bereitgestellt werden, benötigen kein HTTPS und gelten immer als sicher. Falls der Browser dennoch Sicherheitswarnungen anzeigt, können Sie diese umgehen. Es ist nicht erforderlich, Ihren lokalen Webserver für HTTPS zu konfigurieren. Wenn Sie dies dennoch möchten, können Sie [ein integriertes TLS-Zertifikat hinzufügen](https://github.com/lwsjs/local-web-server/wiki/How-to-get-the-%22green-padlock%22-using-the-built-in-certificate). Mit dem Zertifikat können Sie [local-web-server](<https://github.com/lwsjs/local-web-server/wiki/How-to-launch-a-secure-local-web-server-(HTTPS)>) über die Befehlszeile installieren und starten, um Ihr Projekt lokal über `https` bereitzustellen und Sicherheitswarnungen zu vermeiden.

```bash
npm install -g local-web-server
cd ~/user/yourName/CycleTracker/
ws --https
```

Beim oben genannten Installationsbefehl müssen Sie möglicherweise `sudo` voranstellen.

> [!NOTE]
> Wenn Ihnen Datenschutz wichtig ist: Sie erstellen diese PWA selbst und können sie aus Ihrer eigenen Entwicklungsumgebung auf Ihrem eigenen Gerät installieren, ohne jemals auf das Internet zuzugreifen. Diese Anwendung enthält kein Tracking. Privater kann eine Anwendung kaum sein.

## Sicherer externer Server

Die bisherigen Möglichkeiten eignen sich gut und sind notwendig, um Ihre Anwendung während dieses PWA-Tutorials oder eines anderen Webentwicklungsprojekts zu testen. Sie könnten Ihre Webanwendung zwar auf Ihrem eigenen Gerät hosten und für alle Personen mit Internetverbindung zugänglich machen, empfehlenswert ist das jedoch nicht.

Um zusätzliche PWA-Funktionen wie die Installation mit einem Klick, eine eigenständige Benutzeroberfläche, die Aufnahme in App-Stores und optional die Offline-Funktionalität durch Service Worker zu nutzen, benötigen wir eine sichere Verbindung. Wenn Sie Ihre Anwendung verbreiten möchten, damit andere Ihre PWA ansehen, verwenden und installieren können, sollten Sie die Inhalte auf einem sicheren _Remote-Server_ hosten.

Wenn Sie eine PWA offiziell veröffentlichen, lohnt es sich wahrscheinlich, in [Webhosting und einen Domainnamen](/de/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website#getting_hosting_and_a_domain_name) zu investieren. Bei Open-Source-Projekten, deren Code andere Entwickler studieren und zu denen sie beitragen können, können Sie Ihren Entwicklungsstand auf [GitHub Pages](https://pages.github.com/) veröffentlichen.

## GitHub Pages

Der aktuelle Stand der CycleTracker-Anwendung ist auf GitHub unter [https://mdn.github.io/pwa-examples/cycletracker/html_and_css/](https://mdn.github.io/pwa-examples/cycletracker/html_and_css/) über eine sichere Verbindung abrufbar. Wir haben die Dateien im GitHub-Konto von MDN veröffentlicht. Wenn Sie ein [GitHub](https://github.com/)-Konto besitzen, können Sie sie ebenso in Ihrem eigenen Konto veröffentlichen. Beachten Sie jedoch: Auch wenn die Inhalte sicher über TLS bereitgestellt werden, sind Aktivitäten auf GitHub nicht unbedingt privat, und alle GitHub-Pages-Seiten sind öffentlich. Wenn Sie in einer Region leben, in der eine repressive Regierung Menstruationszyklen überwacht, sollten Sie den Code lieber kopieren und einfügen, statt das Repository zu forken.

Um eine öffentlich zugängliche, sichere Website zu erstellen, richten Sie eine [GitHub-Pages-Website](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) ein. Erstellen Sie ein Repository mit dem Namen `<username>.github.io`, wobei `<username>` Ihr GitHub-Benutzername ist. Erstellen Sie einen Branch namens `gh-pages`. Dieser Branch Ihrer Anwendung ist dann unter `https://<username>.github.io` erreichbar.

Wie erwähnt sind alle GitHub-Pages-Seiten im Internet öffentlich zugänglich, selbst wenn Sie das Repository als privat festlegen. Da die Zyklusdaten in localStorage gespeichert werden, ist die Anwendung zwar über die GitHub-URL erreichbar, die Daten einer Person stehen aber nur in dem Browser auf dem Gerät zur Verfügung, auf dem sie eingegeben wurden. Wenn Sie die localStorage-Daten direkt im Browser löschen, werden alle gespeicherten Daten entfernt.

Wenn Ihre PWA nicht unter der Stamm-URL erscheinen soll, können Sie sie so einrichten, dass sie unter einem Unterverzeichnis erreichbar ist. Dazu können Sie entweder im Repository `<username>.github.io` ein Unterverzeichnis erstellen oder die PWA aus einem separaten Repository veröffentlichen. Wenn Sie in Ihrem PWA-Repository [eine Veröffentlichungsquelle konfigurieren](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), ist Ihre Anwendung unter `https://<username>.github.io/<repository>` erreichbar. Dabei ist `<repository>` der Name des Repositorys. Sie können GitHub so einstellen, dass Ihre Website automatisch veröffentlicht wird, wenn Änderungen [in einem bestimmten Branch veröffentlicht werden](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch), auch in `main`.

Bei der CycleTracker-Demoanwendung in ihren verschiedenen Entwicklungsstadien lautet `<username>` `mdn` und das Repository heißt `pwa-examples`. Da dieses Repository mehrere PWA-Beispiele mit jeweils mehreren Entwicklungsständen enthält, liegen die Dateien und damit die PWA einige Verzeichnisebenen tiefer.

Beachten Sie, dass Sie [eine benutzerdefinierte Domain für eine GitHub-Pages-Website konfigurieren](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) können.

## Als Nächstes

Wir können nun eine gestaltete, statische Version des Grundgerüsts der CycleTracker-Anwendung betrachten. Da wir wissen, wie wir die Anwendung während ihrer Entwicklung aufrufen können, beginnen wir jetzt mit der eigentlichen Umsetzung. Als Nächstes erstellen wir `app.js`: den JavaScript-Code, der unseren statischen Entwurf in eine voll funktionsfähige Webanwendung verwandelt, die Daten lokal auf dem Gerät der Benutzer speichert.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS", "Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
