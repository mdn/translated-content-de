---
title: Progressive Web Apps
slug: Web/Progressive_web_apps
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{PWASidebar}}

Eine **Progressive Web App** (PWA) ist eine App, die mit Webplattform-Technologien gebaut wird, aber dennoch ein Nutzererlebnis bietet, das dem einer plattformspezifischen App ähnelt.

Wie eine Website kann eine PWA auf mehreren Plattformen und Geräten mit nur einer Codebasis laufen. Wie eine plattformspezifische App kann sie auf dem Gerät installiert werden, offline und im Hintergrund arbeiten sowie mit dem Gerät und anderen installierten Apps interagieren.

## Leitfäden

Diese Leitfäden geben konzeptionelle Erklärungen zu verschiedenen Aspekten von PWAs. Sie sollen Ihnen helfen, zu verstehen, welche Möglichkeiten PWAs bieten, und geben genügend Hinweise, um zu verstehen, wie man diese erreicht.

- [Was ist eine Progressive Web App?](/de/docs/Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app)
  - : Eine Einführung in PWAs, ein Vergleich mit traditionellen Websites und plattformspezifischen Apps sowie eine Übersicht ihrer Hauptmerkmale.
- [Installierbarkeit von PWAs](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
  - : Eines der prägenden Merkmale einer PWA ist, dass sie auf dem Gerät installiert werden kann und den Nutzern als plattformspezifische App erscheint, eine dauerhafte Funktion ihres Geräts, die sie direkt aus dem Betriebssystem heraus starten können, wie jede andere App auch. In diesem Leitfaden werden wir erforschen, was "installierbar" bedeutet, was eine PWA bieten muss, um installierbar zu sein, und wie man das Installationserlebnis anpassen kann.
- [Installieren und Deinstallieren von Web-Apps](/de/docs/Web/Progressive_web_apps/Guides/Installing)
  - : Dieser Leitfaden behandelt, wie Nutzer PWAs auf ihren Geräten installieren und deinstallieren können.
- [Offline- und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation)
  - : In diesem Leitfaden stellen wir eine Reihe von Technologien vor, die es einer PWA ermöglichen, ein gutes Nutzererlebnis auch bei intermittierender Netzwerkverbindung zu bieten und im Hintergrund Vorgänge auszuführen, selbst wenn die Hauptapp nicht läuft.
- [Caching](/de/docs/Web/Progressive_web_apps/Guides/Caching)
  - : Ein Überblick über die APIs, die es einer PWA ermöglichen, Ressourcen lokal zwischenzuspeichern, und einige gängige Strategien, die von PWAs verwendet werden, um Offline-Funktionalität zu implementieren.
- [Best Practices für PWAs](/de/docs/Web/Progressive_web_apps/Guides/Best_practices)
  - : PWAs sollten sich an verschiedene Browser und Geräte anpassen, zugänglich sein, gute Leistung liefern und sich gut in das Betriebssystem integrieren. Dieser Leitfaden bietet eine Liste von Best Practices, um sicherzustellen, dass Ihre PWA so gut wie möglich ist.

## Anleitung

Diese Anleitungen geben konkrete und detaillierte Anweisungen zur Implementierung spezifischer PWA-Funktionen.

- [Erstellen Sie eine eigenständige App](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app)
  - : Beschreibt, wie man festlegt, dass eine PWA in einem eigenen dedizierten Fenster gestartet werden soll, anstatt in einem Browser-Tab.
- [Definieren Sie Ihre App-Icons](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons)
  - : Beschreibt, wie Sie Ihr eigenes Set von Icons definieren, die verwendet werden, wenn die PWA auf einem Gerät installiert ist.
- [Passen Sie die Farben Ihrer App an](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors)
  - : Beschreibt, wie Sie Hintergrund- und Themenfarben für eine PWA festlegen.
- [Abzeichen anzeigen](/de/docs/Web/Progressive_web_apps/How_to/Display_badge_on_app_icon)
  - : Beschreibt, wie man ein Abzeichen auf dem Icon der PWA anzeigt, beispielsweise um den Nutzer darüber zu informieren, dass er neue Nachrichten erhalten hat.
- [Häufige App-Aktionen als Shortcuts bereitstellen](/de/docs/Web/Progressive_web_apps/How_to/Expose_common_actions_as_shortcuts)
  - : Beschreibt, wie häufige Aktionen für eine PWA bereitgestellt werden, die über das App-Shortcut-Menü des Betriebssystems gestartet werden können.
- [Daten zwischen Apps teilen](/de/docs/Web/Progressive_web_apps/How_to/Share_data_between_apps)
  - : Beschreibt, wie PWAs Daten miteinander teilen können, indem sie den App-Sharing-Mechanismus des Betriebssystems verwenden.
- [Installation von Ihrer PWA auslösen](/de/docs/Web/Progressive_web_apps/How_to/Trigger_install_prompt)
  - : Beschreibt, wie Entwickler ihre eigene Benutzeroberfläche bereitstellen können, um Nutzer einzuladen, ihre PWA zu installieren.
- [Dateien mit Ihrer PWA verknüpfen](/de/docs/Web/Progressive_web_apps/How_to/Associate_files_with_your_PWA)
  - : Beschreibt, wie Sie eine Zuordnung zwischen Dateitypen und Ihrer PWA erstellen können, sodass beim Klicken auf die Datei Ihre PWA gestartet wird, um sie zu bearbeiten.

## Tutorials

In diesen Tutorials erstellen Sie eine PWA von Grund auf. Tutorials führen durch die Schritte zur Erstellung einer App von Anfang bis Ende und erklären, wie die verschiedenen Funktionen der App implementiert werden.

- [Erstellen Ihrer ersten PWA](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker)
  - : Dieses Anfänger-Tutorial führt durch die Erstellung einer PWA zur Verfolgung von Menstruationszyklen. Lektionen beinhalten einen Durchgang durch das erforderliche HTML, CSS und JavaScript zur Erstellung einer voll funktionsfähigen Web-App, das Einrichten einer Testumgebung und vollständige Erläuterungen, die den Lernenden durch das Upgraden der Web-App zu einer PWA führen; einschließlich Entwicklung und Überprüfung eines Manifests, Hinzufügen eines Service Workers und Verwendung des Service Workers zum Löschen veralteter Caches.
- [Tiefer Einblick in PWA](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames)
  - : Dieses Tutorial auf mittlerem Niveau führt durch die Erstellung einer PWA, die Informationen über die bei der [js13kGames 2017](https://2017.js13kgames.com/) Wettbewerb in der A-Frame Kategorie eingereichten Spiele anzeigt. Dieses Tutorial umfasst alle Grundlagen zur Erstellung einer PWA mit zusätzlichen Funktionen, einschließlich Benachrichtigungen, Push und App-Performance.

## Referenz

Referenzdokumentation zu den Webtechnologien, die Sie zur Erstellung einer PWA verwenden.

### Web-App-Manifest

- [Web-App-Manifest-Mitglieder](/de/docs/Web/Progressive_web_apps/Manifest)
  - : Entwickler können die Mitglieder des Web-App-Manifests verwenden, um eine PWA zu beschreiben, ihr Aussehen anzupassen und sie tiefer in das Betriebssystem zu integrieren.

### Service Worker APIs

#### Kommunikation mit der App

Die folgenden APIs können von einem Service Worker verwendet werden, um mit seiner zugehörigen Client-PWA zu kommunizieren:

- [`Client.postMessage()`](/de/docs/Web/API/Client/postMessage)
  - : Ermöglicht einem Service Worker, eine Nachricht an seine Client-PWA zu senden.
- [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API)
  - : Ermöglicht es einem Service Worker und seiner Client-PWA, einen grundlegenden bidirektionalen Kommunikationskanal einzurichten.

#### Offline-Betrieb

Die folgenden APIs können von einem Service Worker verwendet werden, um Ihre App offlinefähig zu machen:

- [`Cache`](/de/docs/Web/API/Cache)
  - : Ein persistenter Speichermodus für HTTP-Antworten, der zum Speichern von Assets verwendet wird, die wiederverwendet werden können, wenn die App offline ist.
- [`Clients`](/de/docs/Web/API/Clients)
  - : Ein Interface, das den Zugriff auf die Dokumente ermöglicht, die vom Service Worker gesteuert werden.
- [`FetchEvent`](/de/docs/Web/API/FetchEvent)
  - : Ein Event, das im Service Worker bei jeder HTTP-Anfrage der Client-PWA ausgelöst wird. Das Event kann verwendet werden, um die Anfrage entweder normal an den Server zu senden und die Antwort für die zukünftige Verwendung zu speichern oder die Anfrage abzufangen und sofort mit einer zuvor zwischengespeicherten Antwort zu antworten.

#### Hintergrundbetrieb

Die folgenden APIs können von einem Service Worker verwendet werden, um Aufgaben im Hintergrund auszuführen, selbst wenn Ihre App nicht läuft:

- [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
  - : Eine Möglichkeit, Aufgaben zu einem späteren Zeitpunkt im Service Worker auszuführen, sobald eine stabile Netzwerkverbindung besteht.
- [Web Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
  - : Eine Möglichkeit, Aufgaben im Service Worker in regelmäßigen Abständen mit Netzwerkverbindung auszuführen.
- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
  - : Ein Verfahren für einen Service Worker, um Downloads zu verwalten, die eine erhebliche Zeit in Anspruch nehmen können, wie Video- oder Audiodateien.

### Andere Web-APIs

- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
  - : Eine clientseitige Speicher-API für erhebliche Mengen an strukturierten Daten, einschließlich Dateien.
- [Badging API](/de/docs/Web/API/Badging_API)
  - : Eine Methode, um ein Abzeichen auf dem App-Icon anzuzeigen, wodurch eine geringe Störung verursacht wird.
- [Notifications API](/de/docs/Web/API/Notifications_API)
  - : Eine Möglichkeit, Benachrichtigungen zu senden, die auf Betriebssystemebene angezeigt werden.
- [Web Share API](/de/docs/Web/API/Web_Share_API)
  - : Ein Mechanismus zum Teilen von Text, Links, Dateien und anderen Inhalten mit anderen Apps, die der Nutzer auf seinem Gerät ausgewählt hat.
- [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API)
  - : Eine API für auf Desktop-Betriebssystemen installierte PWAs, die das Verbergen der standardmäßigen Fenstertitelleiste ermöglicht und die vollständige Anzeigefläche des App-Fensters nutzt.

## Siehe auch

- [Progressive Web Apps](https://web.dev/explore/progressive-web-apps) auf web.dev
- [Learn PWA](https://web.dev/learn/pwa/) auf web.dev
- [Progressive Web Apps](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/) auf learn.microsoft.com (2023)
