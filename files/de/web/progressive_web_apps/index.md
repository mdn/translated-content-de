---
title: Progressive Web Apps
slug: Web/Progressive_web_apps
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{PWASidebar}}

Eine **Progressive Web App** (PWA) ist eine Anwendung, die mit Webplattformtechnologien erstellt wird, aber ein Benutzererlebnis bietet, das dem einer plattformspezifischen App ähnelt.

Wie eine Website kann eine PWA auf mehreren Plattformen und Geräten von einer einzigen Codebasis aus ausgeführt werden. Wie eine plattformspezifische App kann sie auf dem Gerät installiert werden, offline und im Hintergrund arbeiten und sich in das Gerät sowie in andere installierte Apps integrieren.

## Anleitungen

Diese Anleitungen geben konzeptionelle Erklärungen zu verschiedenen Aspekten von PWAs. Sie sind gedacht, um Ihnen zu helfen, zu verstehen, welche Möglichkeiten mit PWAs bestehen und genügend Hinweise zu geben, um zu verstehen, wie man diese erreicht.

- [Was ist eine Progressive Web App?](/de/docs/Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app)
  - : Eine Einführung in PWAs, die sie mit traditionellen Websites und plattformspezifischen Apps vergleicht und ihre Hauptmerkmale beschreibt.
- [PWAs installierbar machen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
  - : Ein definierender Aspekt einer PWA ist, dass sie auf dem Gerät installierbar ist und dann für die Benutzer wie eine plattformspezifische App erscheint, eine permanente Funktion ihres Geräts, die sie direkt vom Betriebssystem aus starten können, wie jede andere App. In diesem Leitfaden werden wir untersuchen, was "installierbar" bedeutet, was eine PWA bieten muss, um installierbar zu sein, und wie Sie das Installationserlebnis anpassen können.
- [Web-Apps installieren und deinstallieren](/de/docs/Web/Progressive_web_apps/Guides/Installing)
  - : Diese Anleitung behandelt, wie Benutzer PWAs auf ihren Geräten installieren und deinstallieren können.
- [Offline- und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation)
  - : In dieser Anleitung stellen wir eine Reihe von Technologien vor, die eine PWA in die Lage versetzen, ein gutes Benutzererlebnis zu bieten, selbst wenn das Gerät nur intermittierenden Netzwerkzugang hat, und um im Hintergrund Operationen durchzuführen, auch wenn die Hauptanwendung nicht läuft.
- [Caching](/de/docs/Web/Progressive_web_apps/Guides/Caching)
  - : Ein Überblick über die APIs, die es einer PWA ermöglichen, Ressourcen lokal zu cachen, und einige gängige Strategien, die von PWAs verwendet werden, um Offline-Funktionalität zu implementieren.
- [Best Practices für PWAs](/de/docs/Web/Progressive_web_apps/Guides/Best_practices)
  - : PWAs sollten sich an verschiedene Browser und Geräte anpassen, zugänglich sein, eine gute Leistung haben und sich gut in das Betriebssystem integrieren. Diese Anleitung bietet eine Liste bewährter Verfahren, um sicherzustellen, dass Ihre PWA so gut wie möglich ist.

## Anleitungen

Diese Anleitungen geben konkrete detaillierte Anweisungen, wie bestimmte PWA-Funktionen implementiert werden können.

- [Erstellen Sie eine eigenständige App](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app)
  - : Beschreibt, wie angegeben wird, dass eine PWA in einem eigenen dedizierten Fenster gestartet werden soll, wenn sie gestartet wird, anstatt in einem Browser-Tab.
- [Definieren Sie Ihre App-Icons](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons)
  - : Beschreibt, wie Sie Ihr eigenes Set von Icons definieren, die verwendet werden, wenn die PWA auf einem Gerät installiert ist.
- [Passen Sie die Farben Ihrer App an](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors)
  - : Beschreibt, wie Hintergrund- und Themenfarben für eine PWA festgelegt werden.
- [Badges anzeigen](/de/docs/Web/Progressive_web_apps/How_to/Display_badge_on_app_icon)
  - : Beschreibt, wie ein Badge auf dem Icon einer PWA angezeigt wird: zum Beispiel, um den Benutzer darüber zu informieren, dass er neue Nachrichten erhalten hat.
- [Gemeinsame App-Aktionen als Shortcuts bereitstellen](/de/docs/Web/Progressive_web_apps/How_to/Expose_common_actions_as_shortcuts)
  - : Beschreibt, wie gemeinsame Aktionen für eine PWA bereitgestellt werden, die über das App-Shortcut-Menü des Betriebssystems gestartet werden können.
- [Daten zwischen Apps teilen](/de/docs/Web/Progressive_web_apps/How_to/Share_data_between_apps)
  - : Beschreibt, wie PWAs Daten miteinander teilen können, indem das Freigabemechanismus des Betriebssystems genutzt wird.
- [Installation aus Ihrer PWA auslösen](/de/docs/Web/Progressive_web_apps/How_to/Trigger_install_prompt)
  - : Beschreibt, wie Entwickler ihre eigene Benutzeroberfläche bereitstellen können, um Nutzer zur Installation ihrer PWA einzuladen.
- [Dateien mit Ihrer PWA verknüpfen](/de/docs/Web/Progressive_web_apps/How_to/Associate_files_with_your_PWA)
  - : Beschreibt, wie Sie eine Verknüpfung zwischen Dateitypen und Ihrer PWA herstellen können, sodass, wenn der Benutzer auf die Datei klickt, Ihre PWA zum Umgang damit gestartet wird.

## Tutorials

In diesen Tutorials erstellen Sie eine PWA von Grund auf. Tutorials führen Schritt für Schritt durch die Erstellung einer App von Anfang bis Ende und erklären, wie die verschiedenen Funktionen der App implementiert werden.

- [Erstellen Ihrer ersten PWA](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker)
  - : Dieses Einstiegs-Tutorial führt durch die Erstellung einer PWA zur Verfolgung von Menstruationszyklen. Lektionen beinhalten eine Durchsicht des benötigten HTML, CSS und JavaScript zum Erstellen einer voll funktionsfähigen Web-App, die Einrichtung einer Testumgebung und vollständige Erklärungen, die dem Lernenden helfen, die Web-App zu einer PWA zu verbessern; einschließlich der Entwicklung und Überprüfung eines Manifests, Hinzufügen eines Service Workers und Nutzung des Service Workers, um veraltete Caches zu löschen.
- [Tiefgehender Einblick in PWA](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames)
  - : Dieses Tutorial auf mittlerem Niveau führt durch die Erstellung einer PWA, die Informationen über Spiele auflistet, die in der A-Frame-Kategorie des [js13kGames 2017](https://2017.js13kgames.com/) Wettbewerbs eingereicht wurden. Dieses Tutorial umfasst alle Grundlagen zur Erstellung einer PWA sowie zusätzliche Funktionen, einschließlich Benachrichtigungen, Push und App-Leistung.

## Referenz

Referenzdokumentation zu den Webtechnologien, die Sie zum Erstellen einer PWA verwenden werden.

### Web-App-Manifest

- [Web-App-Manifest-Mitglieder](/de/docs/Web/Manifest)
  - : Entwickler können Web-App-Manifest-Mitglieder verwenden, um eine PWA zu beschreiben, ihr Erscheinungsbild anzupassen und sie tiefer in das Betriebssystem zu integrieren.

### Service Worker APIs

#### Kommunikation mit der App

Die folgenden APIs können von einem Service Worker verwendet werden, um mit seiner zugehörigen Client-PWA zu kommunizieren:

- [`Client.postMessage()`](/de/docs/Web/API/Client/postMessage)
  - : Ermöglicht einem Service Worker, eine Nachricht an seine Client-PWA zu senden.
- [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API)
  - : Ermöglicht einem Service Worker und seiner Client-PWA die Einrichtung eines grundlegenden Zwei-Wege-Kommunikationskanals.

#### Offline-Betrieb

Die folgenden APIs können von einem Service Worker verwendet werden, um Ihre App offline funktionsfähig zu machen:

- [`Cache`](/de/docs/Web/API/Cache)
  - : Ein persistenter Speichermechanismus für HTTP-Antworten, der zum Speichern von Assets verwendet wird, die wiederverwendet werden können, wenn die App offline ist.
- [`Clients`](/de/docs/Web/API/Clients)
  - : Eine Schnittstelle, die den Zugriff auf die vom Service Worker kontrollierten Dokumente bereitstellt.
- [`FetchEvent`](/de/docs/Web/API/FetchEvent)
  - : Ein Ereignis, das im Service Worker mit jeder von der Client-PWA gestellten HTTP-Anfrage ausgelöst wird. Das Ereignis kann verwendet werden, um entweder die Anfrage normal an den Server zu senden und die Antwort für die zukünftige Verwendung zu speichern oder die Anfrage abzufangen und sofort mit einer zuvor zwischengespeicherten Antwort zu beantworten.

#### Hintergrundbetrieb

Die folgenden APIs können von einem Service Worker verwendet werden, um Aufgaben im Hintergrund auszuführen, auch wenn Ihre App nicht läuft:

- [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
  - : Ein Weg, um Aufgaben auf einen Service Worker zu verschieben, die bei einer stabilen Netzwerkverbindung ausgeführt werden sollen.
- [Web Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
  - : Eine Möglichkeit, Aufgaben zu registrieren, die in einem Service Worker in regelmäßigen Abständen mit Netzwerkverbindung ausgeführt werden sollen.
- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
  - : Eine Methode für einen Service Worker, um Downloads zu verwalten, die eine beträchtliche Zeit in Anspruch nehmen können, wie z. B. Video- oder Audiodateien.

### Andere Web-APIs

- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
  - : Eine clientseitige Speicher-API für erhebliche Mengen an strukturierten Daten, einschließlich Dateien.
- [Badging API](/de/docs/Web/API/Badging_API)
  - : Eine Methode, um ein Badge auf dem Anwendungsicon zu setzen und eine lernarme Benachrichtigung bereitzustellen.
- [Benachrichtigungs-API](/de/docs/Web/API/Notifications_API)
  - : Eine Möglichkeit, Benachrichtigungen zu senden, die auf Betriebssystemebene angezeigt werden.
- [Web-Share-API](/de/docs/Web/API/Web_Share_API)
  - : Ein Mechanismus zum Teilen von Text, Links, Dateien und anderen Inhalten zu anderen Apps, die vom Benutzer auf ihrem Gerät ausgewählt werden.
- [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API)
  - : Eine API für PWAs, die auf Desktop-Betriebssystemen installiert sind und die das Verstecken der standardmäßigen Fenstertitelleiste ermöglicht, sodass die App über den gesamten Oberflächenbereich des Anwendungsfensters angezeigt wird.

## Siehe auch

- [Progressive Web Apps](https://web.dev/explore/progressive-web-apps) auf web.dev
- [Learn PWA](https://web.dev/learn/pwa/) auf web.dev
- [Progressive Web Apps](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/) auf learn.microsoft.com (2023)
