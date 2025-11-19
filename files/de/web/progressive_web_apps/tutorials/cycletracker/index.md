---
title: CycleTracker PWA-Tutorial
short-title: CycleTracker
slug: Web/Progressive_web_apps/Tutorials/CycleTracker
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{NextMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS")}}

Dieses Einführungs-Tutorial führt Sie durch alle Schritte zum Erstellen einer grundlegenden Progressive Web App (PWA). Wir werden Webtechnologien — HTML, CSS und JavaScript — verwenden, um eine Web-App zur Nachverfolgung des Menstruationszyklus namens "CycleTracker" zu erstellen. Wie alle Web-Apps ist CycleTracker darauf ausgelegt, in allen Browsern auf allen Geräten zu funktionieren.

Standardmäßig sind PWAs reguläre Webseiten, die mit denselben Technologien gebaut werden. Genau wie reguläre Webseiten sind PWAs verlinkbar, durch Suchmaschinen auffindbar und in einem Browser sichtbar. Durch das Einfügen einer Manifest-Datei und das Servieren der Webseite über TLS kann jede Webseite zu einer PWA werden.

Wir werden zuerst die Schritte zum Erstellen einer voll funktionsfähigen Web-App abdecken und dann CycleTracker schrittweise erweitern, um sie [installierbar zu machen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable) und auch dann zu funktionieren, wenn der Benutzer offline ist.

## Vorteile einer PWA

Unter Verwendung der Sprachen des Webs werden wir eine voll funktionsfähige Anwendung erstellen, die sowohl online als auch offline funktioniert, sowohl in den Browsern als auch auf den Betriebssystemen (OS) der Benutzer. Wie jede reguläre Webseite wird CycleTracker auf einem Webserver gehostet und herunterladbar gemacht. Alles, was wir brauchen, ist ein Texteditor: CycleTracker, wie alle PWAs, erfordert keine zusätzlichen Programmierkenntnisse, Paketierung oder proprietäre SDKs. CycleTracker, wie jede PWA, kann nahtlos auf jedem Betriebssystem installiert werden, ohne App Stores (und deren Genehmigung und Gebühren).

- Verwenden Sie standardisierte und offene Webtechnologien
  - : Historisch gesehen mussten Anwendungen, um auf einem Betriebssystem wie Windows, iOS, macOS, Linux und Android installierbar zu sein, in vom Betriebssystem unterstützten Programmiersprachen wie C#, .Net, Objective C, Swift, Kotlin, Java oder Python entwickelt werden. PWAs basieren auf einem anderen Modell: Sie verwenden einen einzigen Codebasis, geschrieben mit standardisierten offenen Webtechnologien (HTML, CSS und JavaScript), die auf verschiedenen Betriebssystemen funktionieren.

- Kein Kompilieren erforderlich
  - : Bei den meisten Programmiersprachen — wie Java, C/C++ und Kotlin, die häufig für die Entwicklung von Android-Apps verwendet werden, sowie Objective-C und Swift für iOS — muss der Code kompiliert und in ein installierbares Format verpackt werden, wie z.B. .exe, .dmg, .elf und .apk oder ein anderer installierbarer Dateityp, je nach Betriebssystem. Je nach Sprache kann das Kompilieren und Verpacken das OS-{{Glossary("SDK", "SDK")}} erfordern. PWAs verwenden Webtechnologien, die von jedem Betriebssystem unterstützt werden und nicht verpackt oder kompiliert werden müssen. Ja, Entwicklerteams können komplexe Build-Systeme haben, aber, wie wir beim Aufbau von CycleTracker demonstrieren werden, können PWAs einfach nur aus HTML und JavaScript (und CSS, wobei das Styling nicht unbedingt erforderlich ist für eine PWA) aufgebaut werden.

- Überall und jederzeit verfügbar
  - : Anwendungen, die nur für ein einzelnes Betriebssystem gedacht sind, werden den Benutzern häufig in proprietären App-Stores zum Download bereitgestellt. Sie sind über einen Anbieter wie den Apple App Store, den [Google Play Store](https://play.google.com/store/apps), den [Microsoft Store](https://apps.microsoft.com/) oder Ähnliches erhältlich. PWAs haben diese Anforderungen nicht. Wenn Sie Ihre CycleTracker-App vertreiben möchten, benötigen Sie keinen Vermittler. Ein Benutzer kann auf Ihre App zugreifen, indem er ihre Online-Version besucht. Wenn Sie möchten, ist es jedoch möglich, Ihre PWA im Play Store und App Store zu vertreiben, ohne dass sie sich von anderen iOS- oder Android-Apps unterscheiden.

- Einfach für den Benutzer zu installieren
  - : Historisch gesehen müssen heruntergeladene Anwendungen, die nur für ein einzelnes Betriebssystem geeignet sind, vom Benutzer bewusst installiert werden. Abhängig vom Betriebssystem, Installationsformat und dem Ursprungsort des Downloads kann dies ein mehrstufiger Installationsprozess sein. PWAs sind schlank. PWAs stehen jedem mit einem unterstützenden Browser zur Verfügung und sind mit ein paar Klicks [installierbar](/de/docs/Web/Progressive_web_apps/Guides/Installing).

### Im Vergleich zu auf dem Betriebssystem installierten Softwareanwendungen

Einmal installiert, können PWAs so gestaltet werden, dass sie ähnlich aussehen und agieren wie andere auf dem Gerät des Benutzers installierte Anwendungen:

- Anwendungsfenster
  - : Mit einer [Manifest-Einstellung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file#app_presentation) lassen wir CycleTracker in einem eigenen Anwendungsfenster öffnen, d.h. installierte PWAs sind ähnlich wie andere installierte Anwendungen.

- Anwendungssymbol
  - : PWAs zeigen ein Anwendungssymbol am selben Ort wie andere installierte Anwendungen auf dem Betriebssystem der Benutzer. Dies kann ein Symbol auf dem Homescreen, in der Taskleiste, im Anwendungsordner oder an jedem Ort sein, an dem das Gerät Anwendungen anzeigt. Wir lernen, wie man für CycleTracker [Symbole deklariert](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file#app_iconography), sodass unsere PWA nach der Installation wie jede andere installierte Anwendung auf dem Gerät des Benutzers erscheint.

- Funktioniert offline
  - : Internetzugang ist zunächst erforderlich, um die Anwendung herunterzuladen, und ist auch beim Synchronisieren von Daten mit dem Server oder anderen Benutzern erforderlich. Dies ist bei allen Anwendungen erforderlich, nicht nur bei PWAs. Wir werden einen [Service Worker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers) hinzufügen, um eine Offline-Erfahrung zu schaffen, was bedeutet, dass CycleTracker sogar funktioniert, wenn der Benutzer den Internetzugang verliert. Wir werden nur an der Oberfläche der PWA-Offline-Unterstützung kratzen. Service Worker können verwendet werden, um PWAs offline arbeiten zu lassen, genau wie jede andere installierte Anwendung. Wenn ein Benutzer während des Offline-Zustands Änderungen vornimmt, ermöglichen Service Worker PWAs das Synchronisieren von Daten, sobald die Konnektivität wiederhergestellt ist. Mit Service Workern muss der Benutzer nicht aktiv mit der PWA interagieren, tatsächlich muss die PWA nicht einmal offen sein, damit sie Serverdaten senden und abrufen kann.

## CycleTracker PWA-Lektionen

Die Basiswebanwendung für dieses PWA-Tutorial ist ein Periodentracker, mit dem der Benutzer den Beginn und das Ende jedes Menstruationszyklus verfolgen kann. Wir erstellen eine statische Website-Struktur und stylen sie, dann lernen wir, wie man eine sichere Verbindung erstellt, um unseren Fortschritt anzusehen. Wir werden JavaScript-Funktionalität hinzufügen, die die HTML- und CSS-Struktur in eine voll funktionsfähige Anwendung umwandelt, die Daten in `localStorage` speichert. Auf Basis dieser von Ihnen erstellten voll funktionsfähigen Webanwendung, werden wir diese Web-App schrittweise in eine offline-fähige PWA erweitern, indem wir eine Manifest-Datei hinzufügen, Ikonografie einbinden und einen Service Worker integrieren.

Die Schritte umfassen:

- [App-HTML und CSS](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS)
  - : Zeilenweise Erklärung des HTML-Codes für die statischen Inhalte der Website, die statischen Inhalte von CycleTracker, sowie das CSS zur Gestaltung dieser Inhalte.

- [Lokale Entwicklungsumgebung oder sichere Verbindung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection)
  - : Um installierbar zu sein, müssen PWAs mit dem Protokoll `https://` oder als lokal bereitgestellte Ressourcen unter Verwendung von `127.0.0.1` oder `localhost` URLs mit dem Protokoll `http://` bereitgestellt werden. Wir werden uns die Seite mit dem `file://` Protokoll ansehen und auch Optionen für die Erstellung einer sicheren localhost-Verbindung behandeln, um Ihren Installationscode zu testen, während wir die Schritte des Tutorials durchlaufen. Außerdem betrachten wir die Bereitstellung Ihrer PWA mit GitHub Pages.

- [JavaScript und LocalStorage](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality)
  - : Vollständige Erklärung der JavaScript-Funktionalität, um eine clientseitige Periodentracker-Webanwendung zu erstellen, damit wir eine funktionierende Anwendung haben, die schrittweise in eine PWA erweitert werden kann, indem [`localStorage`](/de/docs/Web/API/Window/localStorage) verwendet wird, um Periodeninformationen zu speichern.

- [Manifest: Identität, Erscheinungsbild und Ikonografie](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file)
  - : Eine PWA erfordert ein Manifest, das eine JSON-Datei ist, die den Namen, das Symbol, die Beschreibung und andere Definitionen beschreibt, wie die Anwendung im Betriebssystem funktioniert, auf dem die PWA installiert ist. Wir erstellen eine Manifest-Datei, die das Erscheinungsbild der Anwendung nach der Installation definiert, einschließlich der Symbole, die abhängig vom Gerät des Benutzers verwendet werden sollen, und der Parameter für das Anwendungs-Viewport. Außerdem untersuchen wir das Debuggen der Manifest-Datei mit den Entwickler-Tools des Browsers.

- [Service Worker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers)
  - : Der Service Worker ermöglicht es der Anwendung, offline zu arbeiten. Mit der sicheren Verbindung im vorherigen Schritt bietet der erste Besuch einer Seite ihre Basisfunktionalität, während der Service Worker heruntergeladen wird. Nachdem ein Service Worker installiert und aktiviert wurde, kontrolliert er die Seite, um verbesserte Zuverlässigkeit und Geschwindigkeit zu bieten.

<!--

- [Offline-Erfahrung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/offline)

  - : Mit JavaScript bestimmen wir, ob der Benutzer online oder offline ist. Wenn offline, wird ihnen eine Offline-Erfahrung gezeigt, die den Benutzer darüber informiert, dass sie offline sind. Wenn online, ist die Erfahrung ähnlich wie auf der Website, aber die Installationsschaltfläche wird nicht sichtbar sein.

- [Sitzungsspeicher](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Storage)
  - : Wir werden uns Service Worker und Sitzungsspeicher ansehen, indem wir JavaScript verwenden, um die PWA zu verbessern.
-->

Um dieses Tutorial abzuschließen, ist es hilfreich, ein grundlegendes Verständnis von HTML, CSS und JavaScript zu haben. Das Tutorial bietet Anleitungen zum Erstellen der Manifest-Datei und zum Initiieren des Service Workers sowie zum Einrichten einer lokalen Entwicklungsumgebung, damit Sie Ihren Fortschritt verfolgen können. <!--Das Tutorial wird auf die Überprüfung des Internetzugangs eingehen und sowohl eine Online- als auch Offline-Erfahrung definieren.-->

Während eine sichere Verbindung eine Voraussetzung ist, gibt es keine Softwareanforderungen für die Erstellung einer PWA, außer einem beliebigen Texteditor zur Codierung der PWA und einem Browser, um sie anzuzeigen.

Sie können den [Live-Periodentracker ausprobieren](https://mdn.github.io/pwa-examples/cycletracker/) und den [Quellcode des Periodentrackers](https://github.com/mdn/pwa-examples/tree/main/cycletracker) auf GitHub ansehen.

{{NextMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS")}}
