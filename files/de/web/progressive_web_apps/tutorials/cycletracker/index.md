---
title: CycleTracker
slug: Web/Progressive_web_apps/Tutorials/CycleTracker
l10n:
  sourceCommit: 6a01359152716aafd62878599603f6ce76a9a9bf
---

{{NextMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS")}}

{{PWASidebar}}

Dieses Einführungstutorial behandelt alle Schritte zum Erstellen einer grundlegenden Progressive Web App, oder PWA. Wir verwenden Webtechnologien — HTML, CSS und JavaScript — um eine Web-App zur Verfolgung des Menstruationszyklus namens "CycleTracker" zu erstellen. Wie alle Web-Apps ist CycleTracker darauf ausgelegt, in allen Browsern auf allen Geräten zu funktionieren.

Standardmäßig sind PWAs reguläre Websites, die mit denselben Technologien erstellt werden. Genau wie reguläre Websites sind PWAs verlinkbar, über Suchmaschinen auffindbar und in einem Browser sichtbar. Durch das Einfügen einer Manifestdatei und das Bereitstellen der Website über TLS kann jede Website zu einer PWA werden.

Zunächst werden wir die Schritte zum Erstellen einer voll funktionsfähigen Web-App behandeln, dann CycleTracker schrittweise verbessern, um [sie installierbar zu machen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable), und um zu funktionieren, auch wenn der Benutzer offline ist.

## Vorteile von PWAs

Unter Verwendung der Websprachen erstellen wir eine voll funktionsfähige Anwendung, die sowohl online als auch offline arbeitet, sowohl in den Browsern als auch auf den Betriebssystemen (OS) der Benutzer. Wie jede reguläre Website wird CycleTracker auf einem Webserver gehostet und ist von dort herunterladbar. Alles, was wir brauchen, ist ein Texteditor: CycleTracker erfordert wie alle PWAs keine zusätzlichen Programmierkenntnisse, Verpackungen oder proprietäre SDKs. CycleTracker kann nahtlos auf jedem Betriebssystem ohne App-Stores (und ohne App-Store-Genehmigung und -Gebühren) installiert werden.

- Verwendung von standardisierten und offenen Webtechnologien

  - : Historisch gesehen müssen Anwendungen, um auf einem OS wie Windows, iOS, MacOS, Linux und Android installierbar zu sein, in von OS unterstützten Programmiersprachen wie C#, .Net, Objective C, Swift, Kotlin, Java oder Python entwickelt werden. PWAs basieren auf einem anderen Modell: Sie verwenden einen einzigen Code-Bestand, geschrieben in standardisierten offenen Webtechnologien (HTML, CSS und JavaScript), die über Betriebssysteme hinweg funktionieren.

- Keine Kompilierung erforderlich

  - : Mit den meisten Programmiersprachen — wie Java, C/C++ und Kotlin, die häufig zur Erstellung von Android-Apps verwendet werden, sowie Objective-C und Swift für iOS — muss der Code kompiliert und in ein installierbares Format verpackt werden, wie .exe, .dmg, .elf und .apk oder ein anderer installierbarer Dateityp, abhängig vom Betriebssystem. Je nach Sprache kann das Kompilieren und Verpacken das OS's {{Glossary("SDK", "SDK")}} erfordern. PWAs verwenden Webtechnologien, die von jedem Betriebssystem unterstützt werden, die nicht verpackt oder kompiliert werden müssen. Ja, Entwicklerteams können komplexe Buildsysteme haben, aber wie wir beim Erstellen von CycleTracker demonstrieren werden, können PWAs nur aus HTML und JavaScript (und CSS, obwohl Styling nicht unbedingt erforderlich ist für eine PWA) erstellt werden.

- Überall verfügbar

  - : Nur auf ein Betriebssystem beschränkte Anwendungen werden Benutzern durch Downloads angeboten, oft in proprietären App Stores. Sie sind über einen Anbieter wie den Apple App Store, [Google Play](https://play.google.com/store/apps), [Microsoft Store](https://apps.microsoft.com/) oder ähnlich verfügbar. PWAs haben diese Anforderungen nicht. Wenn Sie Ihre CycleTracker-App verbreiten möchten, benötigen Sie keinen Zwischenhändler. Ein Benutzer kann auf Ihre App zugreifen, indem er ihre Online-Version besucht. Allerdings ist es auch möglich, Ihre PWA im Play Store und App Store zu verteilen, und ist somit von anderen iOS- oder Android-Apps nicht zu unterscheiden.

- Einfach für den Benutzer zu installieren

  - : Historisch gesehen müssen heruntergeladene, nur auf ein Betriebssystem beschränkte Anwendungen von den Benutzern absichtlich installiert werden. Abhängig vom Betriebssystem, Installationsformat und Herkunft des Downloads kann dies ein mehrstufiger Installationsprozess sein. PWAs sind schlanker gestaltet. PWAs sind für jeden mit einem unterstützenden Browser verfügbar und können mit ein paar Klicks [installiert](/de/docs/Web/Progressive_web_apps/Guides/Installing) werden.

### Im Vergleich zu auf dem Betriebssystem installierten Softwareanwendungen

Einmal installiert, können PWAs so gestaltet und agieren, dass sie ähnlich wie andere Anwendungen auf dem Gerät des Nutzers erscheinen und funktionieren:

- Anwendungsfenster

  - : Mit einer Einstellung im [Manifest](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file#app_presentation) werden wir CycleTracker in einem eigenen Anwendungsfenster öffnen, was bedeutet, dass installierte PWAs ähnlich wie andere installierte Anwendungen sind.

- Anwendungsicon

  - : PWAs zeigen ein Anwendungsicon an demselben Ort wie andere installierte Anwendungen des Betriebssystems des Benutzers. Dies kann ein Icon auf dem Startbildschirm, in der Symbolleiste, im Anwendungsordner oder überall dort sein, wo das Gerät Anwendungsicons anzeigt. Wir werden lernen, wie man [Icons deklariert](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file#app_iconography) für CycleTracker, sodass unsere PWA nach der Installation wie jede andere installierte Anwendung auf dem Gerät des Nutzers erscheint.

- Funktioniert offline

  - : Internetzugang ist zunächst erforderlich, um die Anwendung herunterzuladen, und ist auch erforderlich, wenn Daten mit dem Server oder anderen Benutzern synchronisiert werden. Dies ist für alle Anwendungen erforderlich, nicht nur für PWAs. Wir werden einen [Service Worker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers) hinzufügen, um eine Offline-Erfahrung zu schaffen, sodass CycleTracker auch dann funktioniert, wenn der Benutzer den Internetzugang verliert. Wir werden nur kurz die Leistungsfähigkeit der Offline-Unterstützung von PWAs ansprechen. Mit Service Workern können PWAs offline funktionieren, genauso wie jede andere installierte Anwendung. Wenn ein Benutzer Änderungen im Offline-Modus vornimmt, ermöglichen es Service Worker den PWAs, die Daten zu synchronisieren, sobald die Verbindung wiederhergestellt ist. Mit Service Workern muss der Benutzer nicht aktiv mit der PWA interagieren, tatsächlich muss die PWA nicht einmal geöffnet sein, damit sie Serverdaten senden und empfangen kann.

## CycleTracker PWA Lektionen

Die grundlegende Webanwendung für dieses PWA-Tutorial ist ein Perioden-Tracker, in dem der Benutzer den Beginn und das Ende jedes Menstruationszyklus nachverfolgen kann. Wir werden eine statische Website-Hülle erstellen und gestalten, dann lernen wir, wie man eine sichere Verbindung erstellt, um unseren Fortschritt anzuzeigen. Wir fügen JavaScript-Funktionalität hinzu, die die HTML- und CSS-Hülle in eine voll funktionsfähige Anwendung verwandelt, die Daten in `localStorage` speichert. Mit dieser voll funktionsfähigen Webanwendung, die Sie erstellt haben, werden wir diese Web-App schrittweise in eine offline-fähige PWA verbessern, indem wir eine Manifestdatei hinzufügen, einschließlich Ikonografie, und einen Service Worker.

Die Schritte umfassen:

- [App HTML und CSS](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS)

  - : Zeile für Zeile Erklärung des HTML für den statischen Inhalt der Website, den statischen Inhalt von CycleTracker, zusammen mit dem CSS, um diesen Inhalt zu gestalten.

- [Lokale Entwicklungsumgebung oder sichere Verbindung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection)

  - : Um installierbar zu sein, müssen PWAs über das `https://`-Protokoll bereitgestellt werden, oder als lokal bereitgestellte Ressourcen über `127.0.0.1` oder `localhost` URLs mit dem `http://`-Protokoll. Wir werden die Seite mit dem `file://`-Protokoll betrachten und auch Optionen zur Erstellung einer sicheren localhost-Verbindung zum Testen Ihres Installationscodes erwähnen, während wir die Tutorialschritte durchlaufen. Wir werden auch betrachten, wie Ihre PWA mit GitHub Pages bereitgestellt wird.

- [JavaScript und LocalStorage](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality)

  - : Vollständige Erklärung der JavaScript-Funktionalität zum Erstellen einer clientseitigen Perioden-Tracker-Webanwendung, damit wir eine funktionierende Anwendung haben, die schrittweise in eine PWA verbessert werden kann, indem [`localStorage`](/de/docs/Web/API/Window/localStorage) verwendet wird, um Periodeninformationen zu speichern.

- [Manifest: Identität, Erscheinung und Ikonografie](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file)

  - : Eine PWA erfordert ein Manifest, das eine JSON-Datei ist, die den Namen, das Icon, die Beschreibung und andere Definitionen beschreibt, wie die Anwendung innerhalb des Betriebssystems funktioniert, auf dem die PWA installiert ist. Wir erstellen eine Manifestdatei, die das Erscheinungsbild der Anwendung beim Installieren definiert, einschließlich der Icons, die je nach Gerät des Nutzers verwendet werden sollen, und Parameter für das Anwendungsansichtsfenster. Wir werden uns auch das Debuggen der Manifestdatei mit den Entwicklertools des Browsers ansehen.

- [Service Worker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers)

  - : Der Service Worker ermöglicht es der Anwendung, offline zu arbeiten. Mit der sicheren Verbindung im vorherigen Schritt bietet der erste Besuch einer Seite deren Basisfunktionalität, während der Service Worker herunterlädt. Nachdem ein Service Worker installiert und aktiviert wurde, steuert er die Seite, um verbesserte Zuverlässigkeit und Geschwindigkeit anzubieten.

Um dieses Tutorial abzuschließen, ist es hilfreich, ein grundlegendes Verständnis von HTML, CSS und JavaScript zu haben. Das Tutorial bietet Anweisungen zur Erstellung der Manifestdatei und zur Initialisierung des Service Workers, sowie zur Einrichtung einer lokalen Entwicklungsumgebung, um Ihren Fortschritt zu verfolgen.

Während eine sichere Verbindung erforderlich ist, gibt es keine Softwareanforderungen zum Erstellen einer PWA außer einem Texteditor zum Programmieren der PWA und einem Browser, um sie anzuzeigen.

Sie können den [Live-Perioden-Tracker ausprobieren](https://mdn.github.io/pwa-examples/cycletracker/) und den [Perioden-Tracker-Quellcode ansehen](https://github.com/mdn/pwa-examples/tree/main/cycletracker) auf GitHub.

{{NextMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS")}}
