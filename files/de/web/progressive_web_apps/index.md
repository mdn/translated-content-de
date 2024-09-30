---
title: Progressive web apps
slug: Web/Progressive_web_apps
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{PWASidebar}}

Eine **progressive Webanwendung** (PWA) ist eine App, die mit Webplattform-Technologien entwickelt wurde, aber ein Benutzererlebnis bietet, das dem einer plattform-spezifischen App ähnelt.

Wie eine Website kann eine PWA auf mehreren Plattformen und Geräten mit einem einzigen Codebasis laufen. Wie eine plattform-spezifische App kann sie auf dem Gerät installiert werden, offline und im Hintergrund arbeiten und sich in das Gerät und andere installierte Apps integrieren.

## Leitfäden

Diese Leitfäden geben konzeptionelle Erklärungen zu verschiedenen Aspekten von PWAs. Sie sollen Ihnen helfen, zu verstehen, welche Arten von Dingen mit PWAs möglich sind, und genügend Hinweise geben, um zu verstehen, wie Sie diese erreichen können.

- [Was ist eine progressive Web-App?](/de/docs/Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app)
  - : Eine Einführung in PWAs, die sie mit herkömmlichen Websites und plattform-spezifischen Apps vergleicht und deren Hauptmerkmale umreißt.
- [PWAs installierbar machen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
  - : Eines der definierenden Merkmale einer PWA ist, dass sie auf dem Gerät installiert werden kann und den Benutzern als plattform-spezifische App erscheint, ein dauerhaftes Merkmal ihres Geräts, das sie direkt aus dem Betriebssystem wie jede andere App starten können. In diesem Leitfaden werden wir untersuchen, was "installierbar" bedeutet, was eine PWA bieten muss, um installierbar zu sein, und wie Sie das Installationserlebnis anpassen können.
- [Web-Apps installieren und deinstallieren](/de/docs/Web/Progressive_web_apps/Guides/Installing)
  - : Dieser Leitfaden behandelt, wie Benutzer PWAs auf ihren Geräten installieren und deinstallieren können.
- [Offline- und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation)
  - : In diesem Leitfaden stellen wir eine Reihe von Technologien vor, die eine PWA ermöglichen, auch bei intermittierender Netzwerkverbindung ein gutes Benutzererlebnis zu bieten und Operationen im Hintergrund auszuführen, selbst wenn die Haupt-App nicht läuft.
- [Caching](/de/docs/Web/Progressive_web_apps/Guides/Caching)
  - : Ein Überblick über die APIs, die es einer PWA ermöglichen, Ressourcen lokal zu speichern, und einige gebräuchliche Strategien, die von PWAs verwendet werden, um Offline-Funktionalität zu implementieren.
- [Best Practices für PWAs](/de/docs/Web/Progressive_web_apps/Guides/Best_practices)
  - : PWAs sollten sich an verschiedene Browser und Geräte anpassen, zugänglich sein, gute Leistung bieten und gut mit dem Betriebssystem integriert sein. Dieser Leitfaden bietet eine Liste von Best Practices, um sicherzustellen, dass Ihre PWA so gut wie möglich ist.

## Anleitung

Diese Leitfäden geben konkrete, detaillierte Anweisungen, wie spezifische PWA-Funktionen implementiert werden.

- [Erstellen Sie eine eigenständige App](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app)
  - : Beschreibt, wie spezifiziert wird, dass eine PWA in einem eigenen dedizierten Fenster gestartet wird, wenn sie gestartet wird, anstatt in einem Browser-Tab.
- [Definieren Sie Ihre App-Icons](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons)
  - : Beschreibt, wie Sie Ihr eigenes Set von Icons definieren, das verwendet wird, wenn die PWA auf einem Gerät installiert ist.
- [Anpassen der Farben Ihrer App](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors)
  - : Beschreibt, wie Sie Hintergrund- und Themenfarben für eine PWA festlegen.
- [Abzeichen anzeigen](/de/docs/Web/Progressive_web_apps/How_to/Display_badge_on_app_icon)
  - : Beschreibt, wie ein Abzeichen auf dem Icon der PWA angezeigt wird, beispielsweise um den Benutzer darüber zu informieren, dass neue Nachrichten eingegangen sind.
- [Gemeinsame App-Aktionen als Shortcuts bereitstellen](/de/docs/Web/Progressive_web_apps/How_to/Expose_common_actions_as_shortcuts)
  - : Beschreibt, wie Sie gängige Aktionen für eine PWA bereitstellen, die aus dem Shortcut-Menü des Betriebssystems gestartet werden können.
- [Daten zwischen Apps teilen](/de/docs/Web/Progressive_web_apps/How_to/Share_data_between_apps)
  - : Beschreibt, wie PWAs Daten miteinander teilen können, indem sie den Mechanismus der App-Freigabe des Betriebssystems verwenden.
- [Installation von Ihrer PWA auslösen](/de/docs/Web/Progressive_web_apps/How_to/Trigger_install_prompt)
  - : Beschreibt, wie Entwickler ihre eigene Benutzeroberfläche bereitstellen können, um Benutzer einzuladen, ihre PWA zu installieren.
- [Dateien mit Ihrer PWA verknüpfen](/de/docs/Web/Progressive_web_apps/How_to/Associate_files_with_your_PWA)
  - : Beschreibt, wie Sie eine Zuordnung zwischen Dateitypen und Ihrer PWA erstellen können, sodass, wenn der Benutzer auf die Datei klickt, Ihre PWA gestartet wird, um sie zu bearbeiten.

## Tutorials

In diesen Tutorials erstellen Sie eine PWA von Grund auf neu. Tutorials führen Sie durch die Schritte zur Erstellung einer App, von Anfang bis Ende, und erklären, wie die verschiedenen Funktionen der App implementiert werden.

- [Erstellen Ihrer ersten PWA](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker)
  - : Dieses Tutorial auf Einsteigerniveau führt durch die Erstellung einer PWA zur Verfolgung des Menstruationszyklus. Lektionen umfassen einen Durchgang durch das erforderliche HTML, CSS und JavaScript, um eine vollständig funktionale Webanwendung zu erstellen, die Einrichtung einer Testumgebung und vollständige Erklärungen, die den Lernenden durch die Aufrüstung der Webanwendung zu einer PWA führen; einschließlich der Entwicklung und Überprüfung eines Manifests, dem Hinzufügen eines Service Workers und der Verwendung des Service Workers, um veraltete Caches zu löschen.
- [Tiefer Einblick in PWA](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames)
  - : Dieses Tutorial auf mittlerem Niveau führt durch die Erstellung einer PWA, die Informationen über Spiele auflistet, die im Rahmen der [js13kGames 2017](https://2017.js13kgames.com/) Wettbewerb der A-Frame-Kategorie eingereicht wurden. Dieses Tutorial umfasst alle Grundlagen zur Erstellung einer PWA, mit zusätzlichen Funktionen, darunter Benachrichtigungen, Push und App-Performance.

## Referenz

Referenzdokumentation für die Webtechnologien, die Sie zum Erstellen einer PWA verwenden werden.

### Web-App-Manifest

- [Mitglieder des Web-App-Manifests](/de/docs/Web/Manifest)
  - : Entwickler können Mitglieder des Web-App-Manifests verwenden, um eine PWA zu beschreiben, ihr Erscheinungsbild anzupassen und sie tiefer in das Betriebssystem zu integrieren.

### Service Worker APIs

#### Kommunikation mit der App

Die folgenden APIs können von einem Service Worker verwendet werden, um mit ihrer zugehörigen Client-PWA zu kommunizieren:

- [`Client.postMessage()`](/de/docs/Web/API/Client/postMessage)
  - : Ermöglicht einem Service Worker das Senden einer Nachricht an seine Client-PWA.
- [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API)
  - : Ermöglicht einem Service Worker und seiner Client-PWA, einen grundlegenden Zweiwege-Kommunikationskanal einzurichten.

#### Offline-Betrieb

Die folgenden APIs können von einem Service Worker verwendet werden, um Ihre App offline arbeiten zu lassen:

- [`Cache`](/de/docs/Web/API/Cache)
  - : Ein persistenter Speichermechanismus für HTTP-Antworten, der zum Speichern von Assets verwendet wird, die wiederverwendet werden können, wenn die App offline ist.
- [`Clients`](/de/docs/Web/API/Clients)
  - : Eine Schnittstelle, die den Zugriff auf die Dokumente ermöglicht, die vom Service Worker kontrolliert werden.
- [`FetchEvent`](/de/docs/Web/API/FetchEvent)
  - : Ein Ereignis, das im Service Worker mit jeder von der Client-PWA gestellten HTTP-Anfrage ausgelöst wird. Das Ereignis kann verwendet werden, um entweder die Anfrage wie gewohnt an den Server zu senden und die Antwort für die zukünftige Verwendung zu speichern oder die Anfrage abzufangen und sofort mit einer zuvor zwischengespeicherten Antwort zu beantworten.

#### Hintergrundbetrieb

Die folgenden APIs können von einem Service Worker verwendet werden, um Aufgaben im Hintergrund auszuführen, auch wenn Ihre App nicht läuft:

- [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
  - : Eine Möglichkeit, Aufgaben zu verschieben, um in einem Service Worker ausgeführt zu werden, sobald eine stabile Netzwerkverbindung besteht.
- [Web Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
  - : Eine Möglichkeit, Aufgaben zu registrieren, die in einem Service Worker in regelmäßigen Abständen mit Netzwerkverbindung ausgeführt werden sollen.
- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
  - : Eine Methode für einen Service Worker, um Downloads zu verwalten, die möglicherweise eine beträchtliche Zeit in Anspruch nehmen, wie z.B. Video- oder Audiodateien.

### Andere Web-APIs

- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
  - : Eine clientseitige Speicher-API für bedeutende Mengen an strukturierten Daten, einschließlich Dateien.
- [Badging API](/de/docs/Web/API/Badging_API)
  - : Eine Methode, um ein Abzeichen auf dem Anwendungssymbol zu setzen und eine Benachrichtigung mit geringem Ablenkungspotenzial zu bieten.
- [Benachrichtigungs-API](/de/docs/Web/API/Notifications_API)
  - : Eine Möglichkeit, Benachrichtigungen zu senden, die auf Betriebssystemebene angezeigt werden.
- [Web Share API](/de/docs/Web/API/Web_Share_API)
  - : Ein Mechanismus zum Teilen von Text, Links, Dateien und anderen Inhalten an andere, vom Benutzer auf ihrem Gerät ausgewählte Apps.
- [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API)
  - : Eine API für auf Desktop-Betriebssystemen installierte PWAs, die das Ausblenden der Standardfenstertitelleiste ermöglicht und die Anzeige der App über die gesamte Fensterfläche der App ermöglicht.

## Siehe auch

- [Progressive Web Apps](https://web.dev/explore/progressive-web-apps) auf web.dev
- [Learn PWA](https://web.dev/learn/pwa/) auf web.dev
- [Progressive Web Apps](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/) auf learn.microsoft.com (2023)
