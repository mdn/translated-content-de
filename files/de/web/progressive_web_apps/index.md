---
title: Progressive Web Apps
slug: Web/Progressive_web_apps
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{PWASidebar}}

Eine **Progressive Web App** (PWA) ist eine App, die mit Web-Plattform-Technologien erstellt wurde, aber eine Benutzererfahrung bietet, die der einer plattform-spezifischen App ähnelt.

Wie eine Website kann eine PWA auf mehreren Plattformen und Geräten von einem einzigen Codebestand aus betrieben werden. Wie eine plattform-spezifische App kann sie auf dem Gerät installiert werden, offline und im Hintergrund arbeiten und sich mit dem Gerät sowie mit anderen installierten Apps integrieren.

## Leitfäden

Diese Leitfäden bieten konzeptionelle Erklärungen zu verschiedenen Aspekten von PWAs. Sie sollen Ihnen helfen zu verstehen, welche Möglichkeiten mit PWAs bestehen, und geben ausreichend Anhaltspunkte, um Ihnen zu zeigen, wie Sie diese umsetzen können.

- [Was ist eine Progressive Web App?](/de/docs/Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app)
  - : Eine Einführung in PWAs, ein Vergleich mit herkömmlichen Websites und plattform-spezifischen Apps sowie eine Übersicht über ihre Hauptmerkmale.
- [PWAs installierbar machen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
  - : Eines der charakteristischen Merkmale einer PWA ist, dass sie auf dem Gerät installiert werden kann und dann für Benutzer wie eine plattform-spezifische App erscheint, ein permanentes Merkmal ihres Geräts, welches sie direkt vom Betriebssystem aus starten können – wie jede andere App. In diesem Leitfaden erforschen wir, was "installierbar" bedeutet, was eine PWA bereitstellen muss, um installierbar zu sein, und wie Sie das Installationserlebnis anpassen können.
- [Installation und Deinstallation von Web-Apps](/de/docs/Web/Progressive_web_apps/Guides/Installing)
  - : Dieser Leitfaden beschreibt, wie Benutzer PWAs auf ihren Geräten installieren und deinstallieren können.
- [Offline- und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation)
  - : In diesem Leitfaden führen wir eine Reihe von Technologien ein, die es einer PWA ermöglichen, eine gute Benutzererfahrung zu bieten, auch wenn das Gerät nur intermittierende Netzwerkverbindungen hat und um Operationen im Hintergrund auszuführen, selbst wenn die Haupt-App nicht läuft.
- [Caching](/de/docs/Web/Progressive_web_apps/Guides/Caching)
  - : Ein Überblick über die APIs, die es einer PWA ermöglichen, Ressourcen lokal zwischenzuspeichern, sowie über einige gängige Strategien, die von PWAs verwendet werden, um Offline-Funktionen zu implementieren.
- [Best Practices für PWAs](/de/docs/Web/Progressive_web_apps/Guides/Best_practices)
  - : PWAs sollten sich auf verschiedene Browser und Geräte anpassen, zugänglich sein, gute Leistung haben und gut mit dem Betriebssystem integrieren. Dieser Leitfaden enthält eine Liste von Best Practices, die Ihnen helfen sollen, sicherzustellen, dass Ihre PWA so gut wie möglich ist.

## Anleitung

Diese Leitfäden geben konkrete und detaillierte Anweisungen zur Implementierung bestimmter PWA-Funktionen.

- [Erstellen einer eigenständigen App](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app)
  - : Beschreibt, wie man festlegt, dass eine PWA in ihrem eigenen dedizierten Fenster gestartet werden soll, wenn sie gestartet wird, anstatt in einem Browser-Tab.
- [Definieren Sie Ihre App-Symbole](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons)
  - : Beschreibt, wie Ihre eigenen Symbolsets definiert werden, die verwendet werden, wenn die PWA auf einem Gerät installiert wird.
- [Anpassen der Farben Ihrer App](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors)
  - : Beschreibt, wie Hintergrund- und Themenfarben für eine PWA festgelegt werden.
- [Anzeigen von Badges](/de/docs/Web/Progressive_web_apps/How_to/Display_badge_on_app_icon)
  - : Beschreibt, wie ein Badge auf dem Symbol der PWA angezeigt wird: z. B. um den Benutzer zu informieren, dass er neue Nachrichten erhalten hat.
- [Häufige App-Aktionen als Verknüpfungen freigeben](/de/docs/Web/Progressive_web_apps/How_to/Expose_common_actions_as_shortcuts)
  - : Beschreibt, wie häufige Aktionen für eine PWA freigelegt werden, die über das App-Verknüpfungsmenü des Betriebssystems gestartet werden können.
- [Daten zwischen Apps teilen](/de/docs/Web/Progressive_web_apps/How_to/Share_data_between_apps)
  - : Beschreibt, wie PWAs Daten miteinander mithilfe des App-Sharing-Mechanismus des Betriebssystems teilen können.
- [Installation von Ihrer PWA auslösen](/de/docs/Web/Progressive_web_apps/How_to/Trigger_install_prompt)
  - : Beschreibt, wie Entwickler ihre eigene Benutzeroberfläche bereitstellen können, um Benutzer einzuladen, ihre PWA zu installieren.
- [Dateien mit Ihrer PWA verknüpfen](/de/docs/Web/Progressive_web_apps/How_to/Associate_files_with_your_PWA)
  - : Beschreibt, wie Sie eine Zuordnung zwischen Dateitypen und Ihrer PWA erstellen können, sodass beim Klicken auf die Datei Ihre PWA gestartet wird, um diese zu bearbeiten.

## Tutorials

In diesen Tutorials bauen Sie eine PWA von Grund auf neu. Tutorials gehen schrittweise durch den Prozess der Erstellung einer App von Anfang bis Ende und erklären, wie die verschiedenen Funktionen der App implementiert werden.

- [Erstellen Ihrer ersten PWA](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker)
  - : Dieses Anfängertutorial geht die Erstellung einer PWA für das Verfolgen von Menstruationszyklen durch. Die Lektionen umfassen eine Anleitung zu den erforderlichen HTML-, CSS- und JavaScript-Komponenten, um eine voll funktionsfähige Web-App zu erstellen, das Einrichten einer Testumgebung sowie vollständige Erklärungen, die den Lernenden durch die Aufrüstung der Web-App zu einer PWA führen; einschließlich der Entwicklung und Inspektion eines Manifests, dem Hinzufügen eines Service-Workers und der Nutzung des Service-Workers zum Löschen veralteter Caches.
- [Tiefen-Dive in PWA](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames)
  - : Dieses Tutorial auf mittlerem Niveau erläutert die Erstellung einer PWA, die Informationen über Spiele auflistet, die beim [js13kGames 2017](https://2017.js13kgames.com/)-Wettbewerb in der A-Frame-Kategorie eingereicht wurden. Dieses Tutorial umfasst alle Grundlagen zur Erstellung einer PWA sowie zusätzliche Funktionen wie Benachrichtigungen, Push und App-Leistung.

## Referenz

Referenzdokumentation für die Web-Technologien, die Sie zum Erstellen einer PWA verwenden werden.

### Web-App-Manifeste

- [Mitglieder des Web-App-Manifests](/de/docs/Web/Manifest)
  - : Entwickler können Mitglieder des Web-App-Manifests verwenden, um eine PWA zu beschreiben, ihr Erscheinungsbild anzupassen und sie tiefer in das Betriebssystem zu integrieren.

### Service Worker APIs

#### Kommunikation mit der App

Die folgenden APIs können von einem Service Worker verwendet werden, um mit seiner zugehörigen Client-PWA zu kommunizieren:

- [`Client.postMessage()`](/de/docs/Web/API/Client/postMessage)
  - : Ermöglicht einem Service Worker, eine Nachricht an seine Client-PWA zu senden.
- [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API)
  - : Ermöglicht die Einrichtung eines grundlegenden Zwei-Wege-Kommunikationskanals zwischen dem Service Worker und seiner Client-PWA.

#### Offline-Betrieb

Die folgenden APIs können von einem Service Worker verwendet werden, um Ihre App offline arbeiten zu lassen:

- [`Cache`](/de/docs/Web/API/Cache)
  - : Ein persistenter Speichermodus für HTTP-Antworten zur Speicherung von Ressourcen, die wiederverwendet werden können, wenn die App offline ist.
- [`Clients`](/de/docs/Web/API/Clients)
  - : Ein Interface, das Zugriff auf die vom Service Worker kontrollierten Dokumente bietet.
- [`FetchEvent`](/de/docs/Web/API/FetchEvent)
  - : Ein Ereignis, das im Service Worker mit jeder HTTP-Anfrage ausgelöst wird, die von der Client-PWA gestellt wird. Das Ereignis kann verwendet werden, um die Anfrage entweder an den Server zu senden und die Antwort für die zukünftige Verwendung zu speichern oder die Anfrage abzufangen und sofort mit einer zuvor zwischengespeicherten Antwort zu beantworten.

#### Hintergrundbetrieb

Die folgenden APIs können von einem Service Worker verwendet werden, um Aufgaben im Hintergrund auszuführen, selbst wenn Ihre App nicht läuft:

- [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
  - : Eine Möglichkeit, Aufgaben zu verschieben, die in einem Service Worker ausgeführt werden sollen, sobald eine stabile Netzwerkverbindung besteht.
- [Web Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
  - : Eine Möglichkeit, Aufgaben zu registrieren, die in einem Service Worker in regelmäßigen Intervallen mit Netzwerkverbindung ausgeführt werden sollen.
- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
  - : Eine Methode für einen Service Worker, um Downloads zu verwalten, die eine erhebliche Zeit in Anspruch nehmen können, wie z. B. Video- oder Audiodateien.

### Andere Web-APIs

- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
  - : Eine clientseitige Speicher-API für erhebliche Mengen strukturierten Daten, einschließlich Dateien.
- [Badging API](/de/docs/Web/API/Badging_API)
  - : Eine Methode, um ein Badge auf dem Anwendungssymbol zu setzen, welche eine wenig ablenkende Benachrichtigung bietet.
- [Notifications API](/de/docs/Web/API/Notifications_API)
  - : Eine Möglichkeit, Benachrichtigungen zu senden, die auf Betriebssystemebene angezeigt werden.
- [Web Share API](/de/docs/Web/API/Web_Share_API)
  - : Ein Mechanismus zum Teilen von Texten, Links, Dateien und anderen Inhalten mit anderen Apps, die vom Benutzer auf seinem Gerät ausgewählt werden.
- [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API)
  - : Eine API für PWAs, die auf Desktop-Betriebssystemen installiert sind, welche das Verstecken der standardmäßigen Fenster-Titelleiste ermöglicht, sodass die App über die gesamte Oberfläche des App-Fensters angezeigt werden kann.

## Siehe auch

- [Progressive Web Apps](https://web.dev/explore/progressive-web-apps) auf web.dev
- [Learn PWA](https://web.dev/learn/pwa/) auf web.dev
- [Progressive Web Apps](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/) auf learn.microsoft.com (2023)
