---
title: Progressive Web-Apps
slug: Web/Progressive_web_apps
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

Eine **progressive Web-App** (PWA) ist eine App, die mit Technologien der Webplattform entwickelt wurde, aber ein Benutzererlebnis bietet, das dem einer plattformspezifischen App ähnelt.

Wie eine Webseite kann eine PWA auf mehreren Plattformen und Geräten von einer einzelnen Codebasis aus betrieben werden. Wie eine plattformspezifische App kann sie auf dem Gerät installiert werden, offline und im Hintergrund arbeiten und sich in das Gerät und andere installierte Apps integrieren.

## Leitfäden

Diese Leitfäden bieten konzeptionelle Erklärungen zu verschiedenen Aspekten von PWAs. Sie sollen Ihnen helfen zu verstehen, welche Arten von Dingen mit PWAs möglich sind, und genug Hinweise geben, um zu verstehen, wie man sie umsetzen kann.

- [Was ist eine Progressive Web-App?](/de/docs/Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app)
  - : Eine Einführung in PWAs, in der diese mit traditionellen Websites und plattformspezifischen Apps verglichen werden und ihre Hauptmerkmale umrissen werden.
- [PWAs installierbar machen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
  - : Ein entscheidender Aspekt einer PWA ist, dass sie auf dem Gerät installiert werden kann und dann für Nutzer wie eine plattformspezifische App erscheint, ein permanentes Merkmal ihres Geräts, das sie direkt vom Betriebssystem aus starten können wie jede andere App. In diesem Leitfaden werden wir untersuchen, was "installierbar" bedeutet, was eine PWA bieten muss, um installierbar zu sein, und wie Sie das Installationserlebnis anpassen können.
- [Web-Apps installieren und deinstallieren](/de/docs/Web/Progressive_web_apps/Guides/Installing)
  - : Dieser Leitfaden erklärt, wie Nutzer PWAs auf ihren Geräten installieren und deinstallieren können.
- [Offline- und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation)
  - : In diesem Leitfaden werden Technologien vorgestellt, die es einer PWA ermöglichen, ein gutes Benutzererlebnis zu bieten, selbst wenn das Gerät nur intermittierend mit dem Netzwerk verbunden ist, und Aufgaben im Hintergrund auszuführen, auch wenn die Haupt-App nicht läuft.
- [Caching](/de/docs/Web/Progressive_web_apps/Guides/Caching)
  - : Ein Überblick über die APIs, die einer PWA ermöglichen, Ressourcen lokal zwischenzuspeichern, sowie einige gängige Strategien, die von PWAs zur Implementierung von Offline-Funktionalität verwendet werden.
- [Beste Praktiken für PWAs](/de/docs/Web/Progressive_web_apps/Guides/Best_practices)
  - : PWAs sollten sich an verschiedene Browser und Geräte anpassen, zugänglich sein, gute Leistung bieten und sich gut in das Betriebssystem integrieren. Dieser Leitfaden bietet eine Liste von Best Practices, um sicherzustellen, dass Ihre PWA so gut wie möglich ist.

## Anleitungen

Diese Leitfäden bieten konkrete, detaillierte Anweisungen zur Implementierung spezifischer PWA-Funktionen.

- [Erstellen einer eigenständigen App](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app)
  - : Beschreibt, wie spezifiziert wird, dass eine PWA in ihrem eigenen dedizierten Fenster gestartet werden soll, anstatt in einem Browser-Tab.
- [Definieren Sie Ihre App-Icons](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons)
  - : Beschreibt, wie Sie ein eigenes Set von Icons definieren, das verwendet wird, wenn die PWA auf einem Gerät installiert ist.
- [Anpassen der Farben Ihrer App](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors)
  - : Beschreibt, wie Hintergrund- und Themenfarben für eine PWA festgelegt werden.
- [Anzeigen von Badges](/de/docs/Web/Progressive_web_apps/How_to/Display_badge_on_app_icon)
  - : Beschreibt, wie ein Badge auf dem Icon der PWA angezeigt wird: beispielsweise um dem Nutzer mitzuteilen, dass er neue Nachrichten erhalten hat.
- [Häufige App-Aktionen als Kurzbefehle darstellen](/de/docs/Web/Progressive_web_apps/How_to/Expose_common_actions_as_shortcuts)
  - : Beschreibt, wie häufige Aktionen für eine PWA bereitgestellt werden, die vom App-Kurzmenü des Betriebssystems aus gestartet werden können.
- [Daten zwischen Apps teilen](/de/docs/Web/Progressive_web_apps/How_to/Share_data_between_apps)
  - : Beschreibt, wie PWAs mithilfe des App-Sharing-Mechanismus des Betriebssystems Daten miteinander teilen können.
- [Installation aus Ihrer PWA auslösen](/de/docs/Web/Progressive_web_apps/How_to/Trigger_install_prompt)
  - : Beschreibt, wie Entwickler ihre eigene Benutzeroberfläche bereitstellen können, um Nutzer einzuladen, ihre PWA zu installieren.
- [Dateien mit Ihrer PWA verknüpfen](/de/docs/Web/Progressive_web_apps/How_to/Associate_files_with_your_PWA)
  - : Beschreibt, wie Sie eine Verknüpfung zwischen Dateitypen und Ihrer PWA erstellen können, sodass beim Klicken auf die Datei Ihre PWA gestartet wird, um sie zu bearbeiten.

## Tutorials

In diesen Tutorials erstellen Sie eine PWA von Grund auf. Tutorials führen Sie Schritt für Schritt durch die Erstellung einer App, von Anfang bis Ende, und erklären, wie die verschiedenen Funktionen der App implementiert werden.

- [Erstellen Ihrer ersten PWA](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker)
  - : Dieses Anfänger-Tutorial führt durch die Erstellung einer PWA zur Verfolgung von Menstruationszyklen. Die Lektionen beinhalten ein Durchgehen des benötigten HTML, CSS und JavaScript zum Erstellen einer voll funktionsfähigen Web-App, das Einrichten einer Testumgebung und vollständige Erklärungen, die den Lernenden durch das Upgrade der Web-App zu einer PWA führen; einschließlich der Entwicklung und Überprüfung eines Manifests, das Hinzufügen eines Service-Workers und die Verwendung des Service-Workers zum Löschen veralteter Caches.
- [Tiefer Einblick in PWA](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames)
  - : Dieses Tutorial auf mittlerem Niveau führt durch die Erstellung einer PWA, die Informationen über Spiele auflistet, die in der Kategorie A-Frame des [js13kGames 2017](https://2017.js13kgames.com/) Wettbewerbs eingereicht wurden. Dieses Tutorial beinhaltet alle Grundlagen für die Erstellung einer PWA, mit zusätzlichen Funktionen wie Benachrichtigungen, Push und App-Performance.

## Referenz

Referenzdokumentation zu den Webtechnologien, die Sie zum Erstellen einer PWA verwenden werden.

### Web-App-Manifest

- [Mitglieder des Web-App-Manifests](/de/docs/Web/Progressive_web_apps/Manifest)
  - : Entwickler können Mitglieder des Web-App-Manifests verwenden, um eine PWA zu beschreiben, ihr Erscheinungsbild anzupassen und sie tiefer in das Betriebssystem zu integrieren.

### Service Worker APIs

#### Kommunikation mit der App

Die folgenden APIs können von einem Service Worker verwendet werden, um mit der zugehörigen Client-PWA zu kommunizieren:

- [`Client.postMessage()`](/de/docs/Web/API/Client/postMessage)
  - : Ermöglicht einem Service Worker, eine Nachricht an seine Client-PWA zu senden.
- [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API)
  - : Ermöglicht einem Service Worker und seiner Client-PWA, einen einfachen Zwei-Wege-Kommunikationskanal einzurichten.

#### Offline-Betrieb

Die folgenden APIs können von einem Service Worker verwendet werden, damit Ihre App offline funktioniert:

- [`Cache`](/de/docs/Web/API/Cache)
  - : Ein persistenten Speichermechanismus für HTTP-Antworten, der zum Speichern von Assets verwendet wird, die erneut verwendet werden können, wenn die App offline ist.
- [`Clients`](/de/docs/Web/API/Clients)
  - : Eine Schnittstelle, die Zugang zu den Dokumenten bietet, die vom Service Worker kontrolliert werden.
- [`FetchEvent`](/de/docs/Web/API/FetchEvent)
  - : Ein Ereignis, das im Service Worker mit jeder von der Client-PWA gestellten HTTP-Anfrage ausgelöst wird. Das Ereignis kann verwendet werden, um entweder die Anfrage wie gewohnt zum Server zu senden und die Antwort für die zukünftige Verwendung zu speichern oder die Anfrage abzufangen und sofort mit einer zuvor zwischengespeicherten Antwort zu antworten.

#### Hintergrundbetrieb

Die folgenden APIs können von einem Service Worker verwendet werden, um Aufgaben im Hintergrund auszuführen, selbst wenn Ihre App nicht läuft:

- [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
  - : Eine Möglichkeit, Aufgaben für einen Service Worker zu verschieben, die ausgeführt werden sollen, sobald eine stabile Netzwerkverbindung besteht.
- [Web Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
  - : Eine Möglichkeit, Aufgaben zu registrieren, die in einem Service Worker in regelmäßigen Abständen mit Netzwerkanbindung ausgeführt werden sollen.
- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
  - : Eine Methode für einen Service Worker, um Downloads zu verwalten, die eine beträchtliche Zeit in Anspruch nehmen können, wie z.B. Video- oder Audiodateien.

### Andere Web-APIs

- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
  - : Eine clientseitige Speicher-API für erhebliche Mengen an strukturierten Daten, einschließlich Dateien.
- [Badging API](/de/docs/Web/API/Badging_API)
  - : Eine Methode zum Setzen eines Badges auf dem App-Icon, welche eine Benachrichtigung mit niedriger Ablenkung bietet.
- [Notifications API](/de/docs/Web/API/Notifications_API)
  - : Eine Möglichkeit, Benachrichtigungen zu senden, die auf Betriebssystemebene angezeigt werden.
- [Web Share API](/de/docs/Web/API/Web_Share_API)
  - : Ein Mechanismus zum Teilen von Texten, Links, Dateien und anderen Inhalten mit anderen vom Benutzer ausgewählten Apps auf ihrem Gerät.
- [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API)
  - : Eine API für auf Desktop-Betriebssystemen installierte PWAs, die das Ausblenden der Standard-Fenstertitel-Leiste ermöglicht und das Anzeigen der App über die gesamte Oberfläche des Anwendungsfensters ermöglicht.

## Siehe auch

- [Progressive Web-Apps](https://web.dev/explore/progressive-web-apps) auf web.dev
- [PWA lernen](https://web.dev/learn/pwa/) auf web.dev
- [Progressive Web-Apps](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/) auf learn.microsoft.com (2023)
