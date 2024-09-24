---
title: CycleTracker
slug: Web/Progressive_web_apps/Tutorials/CycleTracker
l10n:
  sourceCommit: 6a01359152716aafd62878599603f6ce76a9a9bf
---

{{NextMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS")}}

{{PWASidebar}}

Dieses Einführungs-Tutorial führt Sie durch alle Schritte, um eine grundlegende progressive Web-App (PWA) zu erstellen. Wir werden Webtechnologien — HTML, CSS und JavaScript — verwenden, um eine Menstruationszyklus-Tracking-Web-App namens "CycleTracker" zu erstellen. Wie alle Web-Apps ist CycleTracker so konzipiert, dass sie in allen Browsern auf allen Geräten funktioniert.

Standardmäßig sind PWAs reguläre Websites, die mit denselben Technologien erstellt werden. Genau wie reguläre Websites sind PWAs verlinkbar, über Suchmaschinen auffindbar und im Browser sichtbar. Durch die Einbindung einer Manifestdatei und die Auslieferung der Website über TLS kann jede Website zu einer PWA werden.

Zunächst behandeln wir die Schritte zum Erstellen einer voll funktionsfähigen Web-App, die wir dann schrittweise verbessern, um CycleTracker [installierbar zu machen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable) und auch offline nutzen zu können.

## Vorteile von PWAs

Mithilfe der Websprachen erstellen wir eine voll funktionsfähige Anwendung, die sowohl online als auch offline funktioniert, sowohl in den Browsern als auch auf den Betriebssystemen (OS) der Benutzer. Wie jede reguläre Website wird CycleTracker auf einem Webserver gehostet und kann von dort heruntergeladen werden. Alles, was wir brauchen, ist ein Texteditor: CycleTracker, wie alle PWAs, erfordert keine zusätzlichen Programmierkenntnisse, kein Packaging oder proprietäre SDKs. CycleTracker kann, wie jede PWA, nahtlos auf jedem Betriebssystem installiert werden, ohne dass App-Stores (oder deren Genehmigung und Gebühren) erforderlich sind.

- Nutzung von standardisierten und offenen Webtechnologien

  - : Historisch gesehen wurden Anwendungen, die auf einem Betriebssystem wie Windows, iOS, MacOS, Linux und Android installierbar sind, in Programmiersprachen entwickelt, die vom OS unterstützt werden, wie C#, .Net, Objective C, Swift, Kotlin, Java oder Python. PWAs basieren auf einem anderen Modell: Sie nutzen einen einzigen Codebestand, der mit standardisierten, offenen Webtechnologien (HTML, CSS und JavaScript) geschrieben ist und auf allen Betriebssystemen funktioniert.

- Kein Kompilieren erforderlich

  - : Bei den meisten Programmiersprachen—wie Java, C/C++ und Kotlin, die häufig zur Erstellung von Android-Apps verwendet werden, sowie Objective-C und Swift für iOS—muss der Code kompiliert und in ein installierbares Format gepackt werden, wie .exe, .dmg, .elf und .apk, je nach Betriebssystem. Das Kompilieren und Packen erfordert je nach Sprache das OS-{{glossary("SDK")}}. PWAs nutzen Webtechnologien, die von jedem Betriebssystem unterstützt werden und nicht gepackt oder kompiliert werden müssen. Ja, Entwicklerteams können komplexe Build-Systeme haben, aber wie wir beim Erstellen von CycleTracker zeigen werden, können PWAs aus einfachem HTML und JavaScript (und CSS, obwohl Styling nicht zwingend erforderlich ist) gebaut werden.

- Überall verfügbar

  - : Anwendungen, die nur für ein OS entwickelt wurden, werden Benutzern durch Downloads zur Verfügung gestellt, oft in proprietären App-Stores. Sie sind über einen Anbieter wie den Apple App Store, [Google Play](https://play.google.com/store/apps), [Microsoft Store](https://apps.microsoft.com/) oder ähnlich erhältlich. PWAs haben diese Anforderungen nicht. Wenn Sie Ihre CycleTracker-App verteilen möchten, benötigen Sie keinen Vermittler. Ein Benutzer kann auf Ihre App zugreifen, indem er deren Online-Version besucht. Aber wenn Sie wollen, ist es möglich, Ihre PWA im Play Store und App Store zu vertreiben, nicht unterschieden von anderen iOS- oder Android-Apps.

- Einfach für den Benutzer zu installieren

  - : Heruntergeladene Anwendungen, die nur für ein Betriebssystem sind, müssen historisch gesehen bewusst vom Benutzer installiert werden. Je nach Betriebssystem, Installationsformat und Download-Herkunft kann dies ein mehrstufiger Installationsprozess sein. PWAs sind optimiert. PWAs sind für jeden mit einem unterstützenden Browser verfügbar und mit ein paar Klicks [installierbar](/de/docs/Web/Progressive_web_apps/Guides/Installing).

### Im Vergleich zu auf dem Betriebssystem installierter Software

Sobald sie installiert sind, können PWAs so gestaltet werden, dass sie ähnlich wie andere Anwendungen erscheinen und agieren, die auf dem Gerät des Nutzers installiert sind:

- Anwendungsfenster

  - : Mit einer [Manifestdatei](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file#app_presentation) wird CycleTracker in einem eigenen Anwendungsfenster geöffnet, was bedeutet, dass installierte PWAs anderen installierten Anwendungen ähneln.

- Anwendungssymbol

  - : PWAs zeigen ein Anwendungssymbol an derselben Stelle wie andere installierte Anwendungen auf den Betriebssystemen der Benutzer. Dies kann ein Symbol auf dem Startbildschirm, in der Symbolleiste, im Anwendungsordner oder an einem anderen Ort sein, an dem das Gerät Anwendungssymbole anzeigt. Wir lernen, wie man [Symbole deklariert](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file#app_iconography) für CycleTracker, sodass unsere PWA, einmal installiert, wie jede andere Anwendung auf dem Gerät des Benutzers erscheinen kann.

- Funktioniert offline

  - : Der Internetzugang ist zunächst erforderlich, um die Anwendung herunterzuladen, und auch, wenn Daten mit dem Server oder anderen Benutzern synchronisiert werden. Dies ist bei allen Anwendungen erforderlich, nicht nur bei PWAs. Wir werden einen [Service-Worker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers) hinzufügen, um eine Offline-Erfahrung zu schaffen, was bedeutet, dass CycleTracker funktioniert, selbst wenn der Benutzer die Internetverbindung verliert. Wir werden nur kurz auf die Leistungsfähigkeit der Offline-Unterstützung von PWAs eingehen. Service-Worker können verwendet werden, um PWAs offline genauso arbeiten zu lassen wie jede andere installierte Anwendung. Wenn ein Benutzer offline Änderungen vornimmt, ermöglichen Service-Worker, dass PWAs Daten synchronisieren, sobald die Verbindung wiederhergestellt ist. Mit Service-Workern muss der Benutzer nicht aktiv mit der PWA interagieren, in der Tat muss die PWA nicht einmal geöffnet sein, um Daten an den Server zu senden und zu empfangen.

## CycleTracker PWA Lektionen

Die Basis-Webanwendung für dieses PWA-Tutorial ist ein Perioden-Tracker, in dem der Benutzer den Beginn und das Ende jedes Menstruationszyklus verfolgen kann. Wir erstellen zunächst eine statische Website-Hülle und gestalten sie, dann lernen wir, wie wir eine sichere Verbindung herstellen, um unseren Fortschritt zu sehen. Wir fügen JavaScript-Funktionalität hinzu, um die HTML- und CSS-Hülle in eine voll funktionsfähige Anwendung zu verwandeln, die Daten in localStorage speichert. Mithilfe dieser voll funktionsfähigen Webanwendung, die Sie erstellt haben, werden wir diese Web-App stufenweise zu einer offline-fähigen PWA erweitern, indem wir eine Manifestdatei, einschließlich Ikonographie, und einen Service-Worker hinzufügen.

Die Schritte umfassen:

- [App HTML und CSS](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS)

  - : Eine Zeile-für-Zeile-Erklärung des HTML für den statischen Inhalt der Website, den CycleTracker statischen Inhalt, zusammen mit dem CSS zur Gestaltung dieses Inhalts.

- [Lokale Entwicklungsumgebung oder sichere Verbindung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection)

  - : Um installierbar zu sein, müssen PWAs mit dem `https://`-Protokoll bereitgestellt werden, oder als lokal bereitgestellte Ressourcen, unter Verwendung von `127.0.0.1` oder `localhost` URLs, die mit dem `http://`-Protokoll bereitgestellt werden. Wir werden uns die Seite mit dem `file://`-Protokoll ansehen und auch Optionen für die Erstellung einer sicheren localhost-Verbindung abdecken, um Ihren Installationscode zu testen, während wir die Tutorial-Schritte durchlaufen. Wir betrachten auch die Bereitstellung Ihrer PWA mit GitHub-Pages.

- [JavaScript und LocalStorage](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality)

  - : Vollständige Erklärung der JavaScript-Funktionalität, um eine clientseitige Zyklus-Tracker-Webanwendung zu erstellen, damit wir eine funktionierende Anwendung haben, die schrittweise zu einer PWA erweitert werden kann, unter Verwendung von [`localStorage`](/de/docs/Web/API/Window/localStorage), um Periodeninformationen zu speichern.

- [Manifest: Identität, Erscheinungsbild und Ikonographie](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file)

  - : Eine PWA erfordert ein Manifest, das eine JSON-Datei ist, die den Namen, das Symbol, die Beschreibung und andere Definitionen darüber beinhaltet, wie die Anwendung auf dem Betriebssystem funktioniert, auf dem die PWA installiert ist. Wir werden eine Manifestdatei erstellen, die das Erscheinungsbild der Anwendung bei Installation definiert, einschließlich der zu verwendenden Symbole je nach Gerät des Benutzers und Parametern für den Anwendungsbildbereich. Wir betrachten auch das Debugging der Manifestdatei mit Browser-Entwicklungstools.

- [Service-Worker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers)

  - : Der Service-Worker ermöglicht es der Anwendung, offline zu funktionieren. Mit der sicheren Verbindung aus dem vorherigen Schritt bietet der anfängliche Besuch einer Seite ihre grundlegenden Funktionen, während der Service-Worker heruntergeladen wird. Nachdem ein Service-Worker installiert und aktiviert wurde, steuert er die Seite, um verbesserte Zuverlässigkeit und Geschwindigkeit zu bieten.

<!--

- [Offline-Erfahrung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/offline)

  - : Mit JavaScript bestimmen wir, ob der Benutzer online oder offline ist. Wenn offline, wird dem Benutzer eine Offline-Erfahrung gezeigt, die den Benutzer darüber informiert, dass er offline ist. Wenn online, ähnelt die Erfahrung der Website, aber die Installationsschaltfläche wird nicht sichtbar sein.

- [Session-Speicher](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Storage)
  - : Wir werden einen Blick auf Service-Worker und Session-Speicher werfen und JavaScript verwenden, um die PWA zu verbessern.
-->

Um dieses Tutorial abzuschließen, ist es hilfreich, ein grundlegendes Verständnis von HTML, CSS und JavaScript zu haben. Das Tutorial bietet Anleitungen zur Erstellung der Manifestdatei und der Initialisierung des Service-Workers sowie zur Einrichtung einer lokalen Entwicklungsumgebung, damit Sie Ihren Fortschritt sehen können. <!--Das Tutorial wird das Überprüfen des Internetzugangs abdecken und sowohl eine Online- als auch eine Offline-Erfahrung definieren.-->

Während eine sichere Verbindung eine Voraussetzung ist, gibt es keine Softwareanforderungen für die Erstellung einer PWA, außer einem Texteditor zum Codieren der PWA und einem Browser, um sie zu betrachten.

Sie können den [Live-Perioden-Tracker](https://mdn.github.io/pwa-examples/cycletracker/) ausprobieren und den [Quellcode des Perioden-Trackers](https://github.com/mdn/pwa-examples/tree/main/cycletracker) auf GitHub ansehen.

{{NextMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS")}}
