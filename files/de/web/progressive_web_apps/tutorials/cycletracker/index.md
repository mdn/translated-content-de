---
title: CycleTracker
slug: Web/Progressive_web_apps/Tutorials/CycleTracker
l10n:
  sourceCommit: 6a01359152716aafd62878599603f6ce76a9a9bf
---

{{NextMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS")}}

{{PWASidebar}}

Dieses Tutorial auf Einsteiger-Niveau führt Sie durch alle Schritte zur Erstellung einer einfachen Progressive Web App oder PWA. Wir werden Webtechnologien — HTML, CSS und JavaScript — verwenden, um eine Menstruationszyklus-Tracking-Web-App namens "CycleTracker" zu erstellen. Wie alle Web-Apps ist CycleTracker so konzipiert, dass es in allen Browsern auf allen Geräten funktioniert.

PWAs sind standardmäßig reguläre Websites, die mit denselben Technologien erstellt werden. Genau wie reguläre Websites sind PWAs verlinkbar, über Suchmaschinen auffindbar und im Browser sichtbar. Indem man eine Manifestdatei hinzufügt und die Website über TLS bereitstellt, kann jede Website zu einer PWA werden.

Zuerst behandeln wir die Schritte zum Erstellen einer voll funktionsfähigen Web-App und verbessern dann CycleTracker schrittweise, um es [installierbar zu machen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable) und damit es funktioniert, auch wenn der Benutzer offline ist.

## Vorteile von PWAs

Mit den Sprachen des Webs werden wir eine vollständig funktionsfähige Anwendung erstellen, die sowohl online als auch offline funktioniert, sowohl in Browsern als auch auf den Betriebssystemen (OS) der Benutzer. Wie jede reguläre Website wird CycleTracker auf einem Webserver gehostet und ist von dort herunterladbar. Alles, was wir benötigen, ist ein Texteditor: CycleTracker, wie alle PWAs, erfordert keine zusätzlichen Programmierkenntnisse, Verpackung oder proprietäre SDKs. CycleTracker, wie jede PWA, kann nahtlos auf jedem Betriebssystem installiert werden, ohne dass App-Stores (und deren Genehmigungen und Gebühren) erforderlich sind.

- Verwendung standardisierter und offener Webtechnologien

  - : Historisch gesehen mussten Anwendungen, um auf einem OS installierbar zu sein, wie Windows, iOS, MacOS, Linux und Android, in vom OS unterstützten Programmiersprachen wie C#, .Net, Objective C, Swift, Kotlin, Java oder Python entwickelt werden. PWAs basieren auf einem anderen Modell: Sie verwenden einen einzigen Codebestand, geschrieben mit standardisierten offenen Webtechnologien (HTML, CSS und JavaScript), der systemübergreifend funktioniert.

- Kein Kompilieren erforderlich

  - : Mit den meisten Programmiersprachen—wie Java, C/C++ und Kotlin, die häufig für die Entwicklung von Android-Apps verwendet werden, und Objective-C und Swift für iOS—muss der Code kompiliert und in ein installierbares Format gepackt werden, wie .exe, .dmg, .elf und .apk oder ein anderes installierbares Dateiformat, je nach Betriebssystem. Abhängig von der Sprache kann das Kompilieren und Verpacken das [SDK](/de/docs/Glossary/SDK) des OS erfordern. PWAs verwenden Webtechnologien, die von jedem Betriebssystem unterstützt werden und nicht gepackt oder kompiliert werden müssen. Ja, Entwicklerteams können komplexe Build-Systeme haben, aber, wie wir bei der Erstellung von CycleTracker demonstrieren werden, können PWAs nur aus HTML und JavaScript (und CSS, obwohl Styling für eine PWA nicht unbedingt erforderlich ist) erstellt werden.

- Überall und überall verfügbar

  - : Anwendungen, die nur für ein einzelnes OS sind, werden Nutzern oft durch Downloads in proprietären App-Stores zur Verfügung gestellt. Sie sind über einen Anbieter wie den Apple App Store, [Google Play](https://play.google.com/store/apps), [Microsoft Store](https://apps.microsoft.com/) oder Ähnliches zugänglich. PWAs haben diese Anforderungen nicht. Wenn Sie Ihre CycleTracker-App vertreiben möchten, benötigen Sie keinen Zwischenhändler. Ein Benutzer kann auf Ihre App zugreifen, indem er ihre Online-Version besucht. Wenn Sie möchten, ist es jedoch möglich, Ihre PWA im Play Store und App Store zu vertreiben und nicht von anderen iOS- oder Android-Apps zu unterscheiden.

- Einfach für den Benutzer zu installieren

  - : Historisch gesehen mussten heruntergeladene Anwendungen, die nur für ein OS ausgelegt sind, vom Benutzer bewusst installiert werden. Je nach OS, Installationsformat und Downloadquelle kann dies ein mehrstufiger Installationsprozess sein. PWAs sind schlank. PWAs sind für jeden mit einem unterstützenden Browser zugänglich und mit ein paar Klicks [installierbar](/de/docs/Web/Progressive_web_apps/Guides/Installing).

### Verglichen mit auf dem OS installierten Softwareanwendungen

Sobald sie installiert sind, können PWAs so gestaltet werden, dass sie ähnlich wie andere Anwendungen auf dem Device des Benutzers erscheinen und agieren:

- Anwendungsfenster

  - : Mit einer [Manifestdatei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file#app_presentation) wird CycleTracker in einem eigenen Anwendungsfenster geöffnet, was bedeutet, dass installierte PWAs anderen installierten Anwendungen ähneln.

- Anwendungsicon

  - : PWAs zeigen ein Anwendungsicon an der gleichen Stelle wie andere installierte Anwendungen des Betriebssystems der Benutzer an. Dies kann ein Icon auf dem Startbildschirm, in der Symbolleiste, im Anwendungsordner oder überall dort sein, wo das Gerät Anwendungsicons anzeigt. Wir werden lernen, wie man [Icons deklariert](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file#app_iconography) für CycleTracker, sodass unsere PWA nach der Installation wie jede andere installierte Anwendung auf dem Device des Benutzers erscheinen kann.

- Funktioniert offline

  - : Internetzugang ist zunächst erforderlich, um die Anwendung herunterzuladen und wird auch benötigt, wenn Daten mit dem Server oder anderen Benutzern synchronisiert werden. Dies ist bei allen Anwendungen der Fall, nicht nur bei PWAs. Wir fügen einen [Service Worker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers) hinzu, um eine offlinefähige Erfahrung zu schaffen, damit CycleTracker funktioniert, auch wenn der Benutzer den Internetzugang verliert. Wir werden nur das Potenzial der PWA-Unterstützung für Offline-Betrieb streifen. Service Worker können verwendet werden, um PWAs offline genauso wie andere installierte Anwendungen arbeiten zu lassen. Wenn ein Benutzer Änderungen vornimmt, während er offline ist, ermöglichen Service Worker es PWAs, Daten zu synchronisieren, sobald die Verbindung wiederhergestellt ist. Mit Service Workern muss der Benutzer nicht aktiv mit der PWA interagieren; tatsächlich muss die PWA nicht einmal geöffnet sein, um Daten vom Server zu senden und zu empfangen.

## CycleTracker PWA-Lektionen

Die Basis-Webanwendung für dieses PWA-Tutorial ist ein Zyklustracker, mit dem der Benutzer den Beginn und das Ende jedes Menstruationszyklus verfolgen kann. Wir erstellen eine statische Website-Shell und stylen sie, dann lernen wir, wie man eine sichere Verbindung herstellt, um unseren Fortschritt zu sehen. Wir fügen JavaScript-Funktionalität hinzu, um das HTML- und CSS-Shell in eine voll funktionsfähige Anwendung umzuwandeln, die Daten im `localStorage` speichert. Mit dieser vollständig funktionalen Webanwendung, die Sie erstellt haben, werden wir diese Web-App schrittweise in eine offline fähige PWA erweitern, indem wir eine Manifestdatei hinzufügen, Icons integrieren und einen Service Worker einsetzen.

Die Schritte umfassen:

- [App HTML und CSS](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS)

  - : Zeilenweise Erklärung des HTML für den statischen Inhalt der Website, der statische Inhalt von CycleTracker, zusammen mit dem CSS zum Stylen dieses Inhalts.

- [Lokale Entwicklungsumgebung oder sichere Verbindung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection)

  - : Um installierbar zu sein, müssen PWAs mit dem `https://`-Protokoll bereitgestellt werden, oder als lokal bereitgestellte Ressourcen, die `127.0.0.1` oder `localhost` URLs verwenden und mit dem `http://`-Protokoll bereitgestellt werden. Wir werden uns die Seite mit dem `file://`-Protokoll ansehen und auch Optionen für die Erstellung einer sicheren lokalen Verbindung erkunden, um Ihren Installationscode zu testen, während wir die Schritte des Tutorials durchlaufen. Wir sehen uns auch an, wie Sie Ihre PWA mit GitHub Pages bereitstellen können.

- [JavaScript und LocalStorage](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality)

  - : Volle Erklärung der JavaScript-Funktionalität, um eine clientseitige Zyklustracker-Webanwendung zu erstellen, damit wir eine funktionierende Anwendung haben, die progressiv zu einer PWA erweitert werden kann, unter Verwendung von [`localStorage`](/de/docs/Web/API/Window/localStorage) zur Speicherung von Zyklusinformationen.

- [Manifest: Identität, Aussehen und Iconografie](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file)

  - : Eine PWA benötigt ein Manifest, das eine JSON-Datei ist, die den Namen, das Icon, die Beschreibung und andere Definitionen beschreibt, wie die Anwendung auf dem Betriebssystem funktioniert, auf dem die PWA installiert ist. Wir erstellen eine Manifestdatei, die das Erscheinungsbild der Anwendung bei der Installation definiert, einschließlich welcher Icons je nach Gerät des Benutzers verwendet werden sollen, und Parameter für das Anwendungsanzeigefenster. Wir sehen uns auch die Fehlersuche der Manifestdatei mit den Entwicklerwerkzeugen des Browsers an.

- [Service Worker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers)

  - : Der Service Worker ermöglicht es der Anwendung, offline zu arbeiten. Mit der sicheren Verbindung im vorherigen Schritt bietet der erste Besuch einer Seite ihre Grundfunktionalität, während der Service Worker heruntergeladen wird. Nachdem ein Service Worker installiert und aktiviert wurde, steuert er die Seite, um verbesserte Zuverlässigkeit und Geschwindigkeit zu bieten.

<!--

- [Offline-Erfahrung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/offline)

  - : Mit JavaScript werden wir feststellen, ob der Benutzer online oder offline ist. Wenn offline, wird ihnen eine Offline-Erfahrung gezeigt, die den Benutzer darauf hinweist, dass er offline ist. Bei Online-Erfahrung ähnelt das Erlebnis der Website, jedoch wird die Installationsschaltfläche nicht sichtbar sein.

- [Sitzungsspeicherung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Storage)
  - : Wir werden einen Blick auf Service Worker und Sitzungsspeicherung werfen und JavaScript verwenden, um die PWA zu verbessern.
-->

Um dieses Tutorial abzuschließen, ist es hilfreich, ein grundlegendes Verständnis von HTML, CSS und JavaScript zu haben. Das Tutorial bietet Anleitungen zum Erstellen der Manifestdatei und zum Starten des Service Workers sowie zur Einrichtung einer lokalen Entwicklungsumgebung, damit Sie Ihren Fortschritt sehen können.

Auch wenn eine sichere Verbindung erforderlich ist, gibt es keine Softwareanforderungen für die Erstellung einer PWA, außer einem beliebigen Texteditor zum Codieren der PWA und einem Browser, um sie anzuzeigen.

Sie können den [Live-Zyklustracker](https://mdn.github.io/pwa-examples/cycletracker/) ausprobieren und den [Quellcode des Zyklustrackers](https://github.com/mdn/pwa-examples/tree/main/cycletracker) auf GitHub ansehen.

{{NextMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS")}}
