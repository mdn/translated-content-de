---
title: CycleTracker PWA Tutorial
short-title: CycleTracker
slug: Web/Progressive_web_apps/Tutorials/CycleTracker
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

{{NextMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS")}}

Dieses Tutorial für Anfänger führt durch alle Schritte zum Erstellen einer einfachen progressiven Web-App, oder PWA. Wir werden Webtechnologien wie HTML, CSS und JavaScript verwenden, um eine App zur Nachverfolgung von Menstruationszyklen namens "CycleTracker" zu erstellen. Wie alle Web-Apps ist CycleTracker so konzipiert, dass es in allen Browsern auf allen Geräten funktioniert.

Standardmäßig sind PWAs normale Websites, die mit denselben Technologien erstellt werden. Genau wie normale Websites sind PWAs verlinkbar, über Suchmaschinen auffindbar und im Browser sichtbar. Durch die Aufnahme einer Manifestdatei und die Bereitstellung der Website über TLS kann jede Website zu einer PWA werden.

Zuerst besprechen wir die Schritte zum Erstellen einer voll funktionsfähigen Web-App, dann verbessern wir CycleTracker schrittweise, damit es [installierbar wird](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable) und auch dann funktioniert, wenn der Benutzer offline ist.

## Vorteile von PWAs

Durch die Verwendung der Websprachen erstellen wir eine voll funktionsfähige Anwendung, die sowohl online als auch offline funktioniert, sowohl in den Browsern als auch auf den Betriebssystemen (OS) der Benutzer. Wie jede normale Website ist CycleTracker auf einem Webserver gehostet und von dort herunterladbar. Alles, was wir brauchen, ist ein Text-Editor: CycleTracker, wie alle PWAs, erfordert keine zusätzlichen Programmierkenntnisse, keine Verpackung oder proprietären SDKs. CycleTracker, wie jede PWA, kann nahtlos auf jedem Betriebssystem installiert werden, ohne dass App Stores (noch App-Store-Genehmigung und -Gebühren) erforderlich sind.

- Verwenden Sie standardisierte und offene Webtechnologien

  - : Historisch gesehen, um eine Anwendung auf einem OS, wie Windows, iOS, macOS, Linux und Android, installierbar zu machen, wurden die Anwendungen in OS-unterstützten Programmiersprachen, wie C#, .Net, Objective C, Swift, Kotlin, Java oder Python, entwickelt. PWAs basieren auf einem anderen Modell: Sie verwenden eine einzige Code-Basis, geschrieben mit standardisierten offenen Webtechnologien (HTML, CSS und JavaScript), die auf verschiedenen OS funktionieren.

- Keine Kompilierung erforderlich

  - : Mit den meisten Programmiersprachen, wie Java, C/C++ und Kotlin, die häufig für die Erstellung von Android-Apps verwendet werden, und Objective-C und Swift für iOS, muss der Code in ein installierbares Format, wie .exe, .dmg, .elf und .apk, oder eine andere installierbare Dateityp kompiliert und verpackt werden, je nach Betriebssystem. Je nach Sprache kann das Kompilieren und Verpacken das OS-SDK erfordern. PWAs verwenden Webtechnologien, die von jedem Betriebssystem unterstützt werden, die nicht verpackt oder kompiliert werden müssen. Ja, Entwicklerteams können komplexe Bausysteme haben, aber wie wir beim Aufbau von CycleTracker demonstrieren werden, können PWAs nur aus HTML und JavaScript (und CSS, obwohl Styling nicht unbedingt erforderlich ist für eine PWA) gebaut werden.

- Überall und jederzeit verfügbar

  - : Anwendungen, die nur auf einem einzigen OS laufen, werden Benutzern durch Downloads zur Verfügung gestellt, oft in proprietären App-Stores. Sie sind über einen Anbieter wie den Apple App Store, [Google Play](https://play.google.com/store/apps), [Microsoft Store](https://apps.microsoft.com/) oder ähnlich erhältlich. PWAs haben diese Anforderungen nicht. Wenn Sie Ihre CycleTracker-App verteilen möchten, benötigen Sie keinen Zwischenhändler. Ein Benutzer kann auf Ihre App zugreifen, indem er ihre Online-Version besucht. Wenn Sie möchten, ist es jedoch möglich, Ihre PWA im Play Store und App Store zu vertreiben, ohne Unterschied zu anderen iOS- oder Android-Apps.

- Einfach für den Benutzer zu installieren

  - : Historisch gesehen müssen heruntergeladene Anwendungen, die nur auf einem OS laufen, von den Benutzern absichtlich installiert werden. Je nach OS, Installationsformat und Download-Ursprung kann dies ein mehrstufiger Installationsprozess sein. PWAs sind optimiert. PWAs sind für jeden mit einem unterstützenden Browser verfügbar und mit ein paar Klicks [installierbar](/de/docs/Web/Progressive_web_apps/Guides/Installing).

### Im Vergleich zu OS-installierten Softwareanwendungen

Einmal installiert, können PWAs so angepasst werden, dass sie ähnlich wie andere Anwendungen wirken und aussehen, die auf dem Gerät des Benutzers installiert sind:

- Anwendungsfenster

  - : Mit einer [Manifestdatei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file#app_presentation)-Einstellung werden wir CycleTracker in einem eigenen Anwendungsfenster öffnen, was bedeutet, dass installierte PWAs anderen installierten Anwendungen ähneln.

- Anwendungssymbol

  - : PWAs zeigen ein Anwendungssymbol an derselben Stelle an wie andere auf dem Betriebssystem der Benutzer installierte Anwendungen. Dies kann ein Symbol auf dem Startbildschirm, in der Symbolleiste, im Anwendungsordner oder an einem anderen Ort sein, an dem das Gerät Anwendungssymbole anzeigt. Wir lernen, wie man [Symbole deklariert](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file#app_iconography) für CycleTracker, sodass unsere PWA, sobald installiert, wie jede andere installierte Anwendung auf dem Gerät des Benutzers erscheinen kann.

- Funktioniert offline

  - : Internetzugang ist zunächst erforderlich, um die Anwendung herunterzuladen, und ist auch erforderlich, wenn Daten mit dem Server oder anderen Benutzern synchronisiert werden. Dies ist für alle Anwendungen erforderlich, nicht nur für PWAs. Wir werden einen [Service Worker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers) hinzufügen, um eine Offline-Erfahrung zu schaffen, was bedeutet, dass CycleTracker funktioniert, selbst wenn der Benutzer den Internetzugang verliert. Wir werden nur auf die Möglichkeiten der Offline-Unterstützung von PWAs eingehen. Service Worker können verwendet werden, um PWAs offline genauso wie jede andere installierte Anwendung auszuführen. Wenn ein Benutzer Änderungen im Offline-Modus vornimmt, ermöglichen Service Worker PWAs, Daten zu synchronisieren, sobald die Konnektivität wiederhergestellt ist. Mit Service Workern muss der Benutzer nicht aktiv mit der PWA interagieren, tatsächlich muss die PWA nicht einmal geöffnet sein, um Serverdaten zu senden und zu empfangen.

## CycleTracker PWA Lektionen

Die Basis-Webanwendung für dieses PWA-Tutorial ist ein Perioden-Tracker, mit dem der Benutzer den Beginn und das Ende jedes Menstruationszyklus verfolgen kann. Wir erstellen eine statische Website-Shell und gestalten sie, dann lernen wir, wie man eine sichere Verbindung erstellt, um unseren Fortschritt zu beobachten. Wir fügen JavaScript-Funktionalität hinzu, die die HTML- und CSS-Shell in eine voll funktionsfähige Anwendung umwandelt, die Daten in `localStorage` speichert. Mit dieser voll funktionsfähigen Webanwendung, die Sie erstellt haben, werden wir diese Web-App schrittweise zu einer offline-fähigen PWA erweitern, indem wir eine Manifestdatei hinzufügen, ikonische Elemente einschließen und einen Service Worker einbinden.

Die Schritte umfassen:

- [App HTML und CSS](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS)

  - : Zeilenweise Erklärung des HTML für die statischen Inhalte der Website, die statischen Inhalte von CycleTracker, zusammen mit dem CSS, um diesen Inhalt zu gestalten.

- [Lokale Entwicklungsumgebung oder sichere Verbindung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection)

  - : Um installierbar zu sein, müssen PWAs mit dem `https://`-Protokoll oder als lokal bereitgestellte Ressourcen unter Verwendung von `127.0.0.1` oder `localhost`-URLs mit dem `http://`-Protokoll bereitgestellt werden. Wir werden uns die Seite mit dem `file://`-Protokoll ansehen und auch Optionen für die Erstellung einer sicheren localhost-Verbindung behandeln, um Ihren Installationscode bei den Fortschritten durch die Tutorial-Schritte zu testen. Wir schauen uns auch an, wie Sie Ihre PWA mit GitHub-Pages bereitstellen können.

- [JavaScript und LocalStorage](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality)

  - : Vollständige Erklärung der JavaScript-Funktionalität, um eine clientseitige Perioden-Tracker-Web-Anwendung zu erstellen, sodass wir eine funktionierende Anwendung haben, die schrittweise zu einer PWA erweitert werden kann, indem [`localStorage`](/de/docs/Web/API/Window/localStorage) verwendet wird, um Periodeninformationen zu speichern.

- [Manifest: Identität, Erscheinungsbild und Ikonografie](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file)

  - : Eine PWA erfordert ein Manifest, das ist eine JSON-Datei, die den Namen, das Symbol, die Beschreibung und andere Definitionen beschreibt, wie die Anwendung innerhalb des Betriebssystems funktioniert, in dem die PWA installiert ist. Wir werden eine Manifestdatei erstellen, die das Erscheinungsbild der Anwendung definiert, wenn sie installiert ist, einschließlich welcher Symbole abhängig vom Gerät des Benutzers verwendet werden sollten, und Parameter für den Anwendungs-Viewport. Wir schauen uns auch das Debugging der Manifestdatei mit den Entwicklerwerkzeugen des Browsers an.

- [Service Worker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers)

  - : Der Service Worker ermöglicht der Anwendung, offline zu arbeiten. Mit der sicheren Verbindung im vorherigen Schritt bietet der erste Besuch einer Seite ihre grundlegende Funktionalität, während der Service Worker heruntergeladen wird. Nachdem ein Service Worker installiert und aktiviert ist, kontrolliert er die Seite, um verbesserte Zuverlässigkeit und Geschwindigkeit zu bieten.

<!--

- [Offline-Erlebnis](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/offline)

  - : Mit JavaScript werden wir bestimmen, ob der Benutzer online oder offline ist. Wenn offline, wird ihnen eine Offline-Erfahrung angezeigt, die den Benutzer darüber informiert, dass er offline ist. Wenn online, ähnelt die Erfahrung der Website, das Installationssymbol wird jedoch nicht sichtbar sein.

- [Session Storage](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Storage)
  - : Wird einen Blick auf Service Worker und Session Storage werfen und JavaScript verwenden, um die PWA zu erweitern.
-->

Um dieses Tutorial abzuschließen, ist es hilfreich, ein grundlegendes Verständnis von HTML, CSS und JavaScript zu haben. Das Tutorial bietet Anleitungen zur Erstellung der Manifestdatei und zur Initialisierung des Service Workers, sowie zur Einrichtung einer lokalen Entwicklungsumgebung, sodass Sie Ihre Fortschritte sehen können. <!--Das Tutorial wird die Überprüfung des Internetzugangs und die Definition sowohl einer Online- als auch einer Offline-Erfahrung abdecken.-->

Während eine sichere Verbindung eine Voraussetzung ist, gibt es keine Softwareanforderungen zum Erstellen einer PWA, außer einem Texteditor, um die PWA zu codieren, und einem Browser, um sie anzuzeigen.

Sie können den [Live-Perioden-Tracker](https://mdn.github.io/pwa-examples/cycletracker/) ausprobieren und den [Source-Code des Perioden-Trackers](https://github.com/mdn/pwa-examples/tree/main/cycletracker) auf GitHub ansehen.

{{NextMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS")}}
