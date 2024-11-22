---
title: CycleTracker
slug: Web/Progressive_web_apps/Tutorials/CycleTracker
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{NextMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS")}}

{{PWASidebar}}

Dieses Einsteiger-Tutorial führt durch alle Schritte zum Erstellen einer grundlegenden Progressive-Web-App (PWA). Wir werden Web-Technologien - HTML, CSS und JavaScript - verwenden, um eine Web-App zur Nachverfolgung des Menstruationszyklus namens "CycleTracker" zu erstellen. Wie alle Web-Apps ist CycleTracker so konzipiert, dass es in allen Browsern auf allen Geräten funktioniert.

Standardmäßig sind PWAs reguläre Websites, die mit denselben Technologien erstellt werden. Genau wie reguläre Websites sind PWAs verlinkbar, über Suchmaschinen auffindbar und im Browser sichtbar. Durch das Hinzufügen einer Manifestdatei und die Bereitstellung der Website über TLS kann jede Website zu einer PWA werden.

Wir werden zunächst die Schritte zum Erstellen einer voll funktionsfähigen Web-App durchgehen, dann CycleTracker schrittweise erweitern, um [es installierbar zu machen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable) und um auch dann zu funktionieren, wenn der Benutzer offline ist.

## PWA-Vorteile

Mit den Sprachen des Webs werden wir eine voll funktionsfähige Anwendung erstellen, die sowohl online als auch offline funktioniert, sowohl in den Browsern als auch auf den Betriebssystemen (OS) der Benutzer. Wie jede reguläre Website wird CycleTracker auf einem Webserver gehostet und kann von dort heruntergeladen werden. Alles, was wir brauchen, ist ein Texteditor: CycleTracker, wie alle PWAs, erfordert keine zusätzlichen Programmierkenntnisse, keine Verpackung oder proprietäre SDKs. CycleTracker, wie jede PWA, kann nahtlos auf jedem Betriebssystem installiert werden, ohne dass App-Stores (und damit verbundene App-Store-Genehmigungen und Gebühren) erforderlich sind.

- Nutzung von Standard- und offenen Webtechnologien

  - : Historisch gesehen, um eine Anwendung auf einem Betriebssystem wie Windows, iOS, macOS, Linux und Android installierbar zu machen, werden die Anwendungen in von den Betriebssystemen unterstützten Programmiersprachen wie C#, .Net, Objective C, Swift, Kotlin, Java oder Python entwickelt. PWAs basieren auf einem anderen Modell: Sie verwenden eine einzige Codebasis, die mit standardisierten offenen Webtechnologien (HTML, CSS und JavaScript) geschrieben ist und auf allen Betriebssystemen funktioniert.

- Kein Kompilieren erforderlich

  - : Bei den meisten Programmiersprachen – wie Java, C/C++ und Kotlin, die häufig für den Bau von Android-Apps verwendet werden, sowie Objective-C und Swift für iOS – muss der Code kompiliert und in ein installierbares Format wie .exe, .dmg, .elf und .apk oder einen anderen installierbaren Dateityp, je nach dem Betriebssystem, verpackt werden. Abhängig von der Sprache kann das Kompilieren und Verpacken das {{Glossary("SDK", "SDK")}} des Betriebssystems erfordern. PWAs verwenden Webtechnologien, die von jedem Betriebssystem unterstützt werden und nicht verpackt oder kompiliert werden müssen. Ja, Entwicklerteams können komplexe Build-Systeme haben, aber wie wir beim Bau von CycleTracker zeigen werden, können PWAs nur aus HTML und JavaScript (und CSS, obwohl Styling nicht unbedingt erforderlich ist für eine PWA) erstellt werden.

- Überall verfügbar

  - : Anwendungen, die nur auf einem einzigen Betriebssystem laufen, werden durch Downloads an Benutzer verteilt, oft in proprietären App-Stores. Sie sind über einen Anbieter wie den Apple App Store, [Google Play](https://play.google.com/store/apps), [Microsoft Store](https://apps.microsoft.com/) oder ähnliches verfügbar. PWAs haben diese Anforderungen nicht. Wenn Sie Ihre CycleTracker-App verbreiten möchten, benötigen Sie keinen Zwischenhändler. Ein Benutzer kann auf Ihre App zugreifen, indem er die Online-Version besucht. Wenn Sie möchten, können Sie Ihre PWA jedoch im Play Store und App Store verteilen, ohne Unterschied zu anderen iOS- oder Android-Apps.

- Einfach für den Benutzer zu installieren

  - : Historisch gesehen müssen heruntergeladene, nur auf einem Betriebssystem laufende Anwendungen vom Benutzer absichtlich installiert werden. Abhängig vom Betriebssystem, Installationsformat und Download-Ursprung kann dies ein mehrstufiger Installationsprozess sein. PWAs sind vereinfachend. PWAs sind für jeden mit einem unterstützenden Browser verfügbar und mit ein paar Klicks [installierbar](/de/docs/Web/Progressive_web_apps/Guides/Installing).

### Vergleich mit auf dem Betriebssystem installierten Softwareanwendungen

Nach der Installation können PWAs so gestaltet werden, dass sie ähnlich erscheinen und sich ähnlich verhalten wie andere auf dem Gerät des Benutzers installierte Anwendungen:

- Anwendungsfenster

  - : Mit einer [Manifest](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file#app_presentation)-Einstellung werden wir CycleTracker so öffnen lassen, dass es in seinem eigenen Anwendungsfenster angezeigt wird, was bedeutet, dass installierte PWAs anderen installierten Anwendungen ähnlich sind.

- Anwendungssymbol

  - : PWAs zeigen ein Anwendungssymbol an derselben Stelle wie andere installierte Anwendungen auf dem Betriebssystem der Benutzer an. Dies kann ein Symbol auf dem Startbildschirm, in der Symbolleiste, im Anwendungsordner oder an einem anderen Ort sein, an dem das Gerät Anwendungssymbole anzeigt. Wir lernen, wie man [Symbole deklariert](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file#app_iconography) für CycleTracker, sodass unsere PWA nach der Installation wie jede andere installierte Anwendung auf dem Gerät des Benutzers aussehen kann.

- Funktioniert offline

  - : Internetzugang ist zunächst erforderlich, um die Anwendung herunterzuladen, und auch erforderlich, wenn Daten mit dem Server oder anderen Benutzern synchronisiert werden. Dies ist bei allen Anwendungen erforderlich, nicht nur bei PWAs. Wir werden einen [Service Worker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers) hinzufügen, um ein Offline-Erlebnis zu schaffen, was bedeutet, dass CycleTracker funktioniert, auch wenn der Benutzer den Internetzugang verliert. Wir werden nur die Leistungsfähigkeit der Offline-Unterstützung von PWAs anschneiden. Service Worker können verwendet werden, um PWAs offline arbeiten zu lassen, genau wie jede andere installierte Anwendung. Wenn ein Benutzer Änderungen offline vornimmt, ermöglichen Service Worker den PWAs, Daten zu synchronisieren, sobald die Konnektivität wiederhergestellt ist. Mit Service Workern muss der Benutzer nicht aktiv mit der PWA interagieren, tatsächlich muss die PWA nicht einmal geöffnet sein, um Serverdaten zu senden und abzurufen.

## CycleTracker PWA-Lektionen

Die Basiswebanwendung für dieses PWA-Tutorial ist eine Periodenverfolgung, bei der der Benutzer den Beginn und das Ende jedes Menstruationszyklus nachverfolgen kann. Wir erstellen eine statische Website-Schale und gestalten sie, dann lernen wir, wie man eine sichere Verbindung erstellt, um unseren Fortschritt zu sehen. Wir fügen JavaScript-Funktionalität hinzu, um die HTML- und CSS-Schale in eine voll funktionsfähige Anwendung umzuwandeln, die Daten in `localStorage` speichert. Durch die voll funktionsfähige Webanwendung, die Sie gebaut haben, werden wir diese Web-App schrittweise in eine offline-fähige PWA verbessern, indem wir eine Manifestdatei hinzufügen, Symbole einbeziehen und einen Service Worker.

Die Schritte umfassen:

- [App HTML und CSS](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS)

  - : Zeilenweise Erklärung des HTML für den statischen Inhalt der Website, des statischen Inhalts von CycleTracker, zusammen mit dem CSS, um diesen Inhalt zu gestalten.

- [Lokale Entwicklungsumgebung oder sichere Verbindung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection)

  - : Um installierbar zu sein, müssen PWAs über das `https://`-Protokoll bereitgestellt werden oder als lokal bereitgestellte Ressourcen mit `127.0.0.1`- oder `localhost`-URLs, die mit dem `http://`-Protokoll bereitgestellt werden. Wir werden uns die Seite mit dem `file://`-Protokoll anschauen und auch Optionen für die Erstellung einer sicheren localhost-Verbindung zum Testen Ihres Installationscodes abdecken, während wir die Schritte des Tutorials durchgehen. Wir schauen uns auch die Bereitstellung Ihrer PWA mit GitHub Pages an.

- [JavaScript und LocalStorage](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality)

  - : Vollständige Erklärung der JavaScript-Funktionalität, um eine clientseitige Periodenverfolgungs-Webanwendung zu erstellen, damit wir eine funktionierende Anwendung haben, die schrittweise in eine PWA verbessert werden kann, indem [`localStorage`](/de/docs/Web/API/Window/localStorage) verwendet wird, um Periodeninformationen zu speichern.

- [Manifest: Identität, Erscheinungsbild und Ikonografie](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file)

  - : Eine PWA erfordert ein Manifest, das eine JSON-Datei ist, die den Namen, das Symbol, die Beschreibung und andere Definitionen, wie die Anwendung innerhalb des Betriebssystems funktioniert, auf dem die PWA installiert ist, beschreibt. Wir erstellen eine Manifestdatei, die das Erscheinungsbild der Anwendung bei der Installation definiert, einschließlich der verwendeten Symbole, je nach Gerät des Benutzers, und Parameter für den Anwendungsansichtsbereich. Wir betrachten auch die Fehlerbehebung der Manifestdatei mit Entwicklerwerkzeugen im Browser.

- [Service Worker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers)

  - : Der Service Worker ermöglicht der Anwendung, offline zu arbeiten. Mit der sicheren Verbindung im vorherigen Schritt bietet der erste Seitenaufruf eine Basisfunktionalität, während der Service Worker heruntergeladen wird. Nachdem ein Service Worker installiert und aktiviert wurde, steuert er die Seite, um verbesserte Zuverlässigkeit und Geschwindigkeit zu bieten.

<!--

- [Offline-Erlebnis](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/offline)

  - : Mit JavaScript bestimmen wir, ob der Benutzer online oder offline ist. Wenn offline, wird ihnen ein Offline-Erlebnis gezeigt, das den Benutzer darüber informiert, dass er offline ist. Wenn online, wird die Erfahrung ähnlich wie die der Website sein, jedoch wird die Installationsschaltfläche nicht sichtbar sein.

- [Sitzungsspeicherung](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Storage)
  - : Blick auf Service Worker und Sitzungsspeicherung mit JavaScript zur Verbesserung der PWA.
-->

Zum Abschluss dieses Tutorials ist es hilfreich, ein grundlegendes Verständnis von HTML, CSS und JavaScript zu haben. Das Tutorial gibt Anweisungen zum Erstellen der Manifestdatei und zur Initiierung des Service Workers sowie zur Einrichtung einer lokalen Entwicklungsumgebung, damit Sie Ihren Fortschritt sehen können. <!--Das Tutorial behandelt das Überprüfen des Internetzugangs und definiert sowohl eine Online- als auch eine Offline-Erfahrung.-->

Während eine sichere Verbindung eine Anforderung ist, gibt es keine Softwareanforderungen zum Erstellen einer PWA, außer einem beliebigen Texteditor zum Codieren der PWA und einem Browser zum Anzeigen.

Sie können den [Live-Periodenverfolger](https://mdn.github.io/pwa-examples/cycletracker/) ausprobieren und den [Quellcode des Periodenverfolgers](https://github.com/mdn/pwa-examples/tree/main/cycletracker) auf GitHub ansehen.

{{NextMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS")}}
