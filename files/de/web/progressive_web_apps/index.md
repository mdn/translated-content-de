---
title: Progressive Web Apps
slug: Web/Progressive_web_apps
l10n:
  sourceCommit: 81715a83bdb5d71cdceaf32d1e40a3edfc986a12
---

Eine **Progressive Web App** (PWA) ist eine App, die mit Webplattform-Technologien erstellt wird, jedoch eine Benutzererfahrung wie eine plattformspezifische App bietet.

Wie eine Website kann eine PWA auf mehreren Plattformen und Geräten von einem einzelnen Codebasis auslaufen. Wie eine plattformspezifische App kann sie auf dem Gerät installiert werden, offline und im Hintergrund arbeiten und sich in das Gerät sowie andere installierte Apps integrieren.

## Leitfäden

Die [PWA-Leitfäden](/de/docs/Web/Progressive_web_apps/Guides) bieten konzeptionelle Erklärungen zu verschiedenen Aspekten von PWAs.
Sie sollen Ihnen helfen, zu verstehen, welche Arten von Funktionen mit PWAs möglich sind, und ausreichend Hinweise geben, um zu verstehen, wie man sie erreicht.

- [Was ist eine Progressive Web App?](/de/docs/Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app)
  - : Eine Einführung in PWAs, in der sie mit traditionellen Websites und plattformspezifischen Apps verglichen werden, sowie ihre Hauptmerkmale beschrieben werden.
- [PWAs installierbar machen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
  - : Ein wesentliches Merkmal einer PWA ist, dass sie auf dem Gerät installiert werden kann und den Nutzern als plattformspezifische App erscheint, die direkt vom Betriebssystem aus wie jede andere App gestartet werden kann. In diesem Leitfaden werden wir untersuchen, was "installierbar" bedeutet, was eine PWA benötigt, um installierbar zu sein, und wie Sie das Installations-Erlebnis anpassen können.
- [Web Apps installieren und deinstallieren](/de/docs/Web/Progressive_web_apps/Guides/Installing)
  - : Dieser Leitfaden behandelt, wie Benutzer PWAs auf ihren Geräten installieren und deinstallieren können.
- [Offline- und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation)
  - : Dieser Leitfaden führt in eine Reihe von Technologien ein, die es einer PWA ermöglichen, auch bei intermittierender Netzwerkkonnektivität eine gute Benutzererfahrung zu bieten und Aufgaben im Hintergrund auszuführen, selbst wenn die Haupt-App nicht läuft.
- [Caching](/de/docs/Web/Progressive_web_apps/Guides/Caching)
  - : Ein Überblick über die APIs, die es einer PWA ermöglichen, Ressourcen lokal zu cachen, sowie einige gängige Strategien, die von PWAs zur Implementierung von Offline-Funktionalität verwendet werden.
- [Best Practices für PWAs](/de/docs/Web/Progressive_web_apps/Guides/Best_practices)
  - : PWAs sollten sich an verschiedene Browser und Geräte anpassen, barrierefrei sein, gute Leistung haben und sich gut in das Betriebssystem integrieren. Dieser Leitfaden bietet eine Liste bewährter Praktiken, um sicherzustellen, dass Ihre PWA so gut wie möglich ist.

## Anleitung

Die [PWA-Anleitungen](/de/docs/Web/Progressive_web_apps/How_to) bieten detaillierte Anweisungen zur Implementierung spezifischer PWA-Funktionen.

- [Erstellen Sie eine eigenständige App](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app)
  - : Beschreibt, wie spezifiziert wird, dass eine PWA in einem eigenen dedizierten Fenster gestartet werden soll, anstatt in einem Browser-Tab.
- [Definieren Sie Ihre App-Symbole](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons)
  - : Beschreibt, wie man ein eigenes Set von Symbolen definiert, die verwendet werden, wenn die PWA auf einem Gerät installiert ist.
- [Passen Sie die Farben Ihrer App an](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors)
  - : Beschreibt, wie Hintergrund- und Themenfarben für eine PWA festgelegt werden.
- [Abzeichen anzeigen](/de/docs/Web/Progressive_web_apps/How_to/Display_badge_on_app_icon)
  - : Beschreibt, wie ein Abzeichen auf dem PWA-Symbol angezeigt wird, um beispielsweise den Benutzer darüber zu informieren, dass er neue Nachrichten erhalten hat.
- [Häufige App-Aktionen als Verknüpfungen bereitstellen](/de/docs/Web/Progressive_web_apps/How_to/Expose_common_actions_as_shortcuts)
  - : Beschreibt, wie man häufige Aktionen für eine PWA bereitstellt, die im App-Verknüpfungsmenü des Betriebssystems gestartet werden können.
- [Daten zwischen Apps teilen](/de/docs/Web/Progressive_web_apps/How_to/Share_data_between_apps)
  - : Beschreibt, wie PWAs Daten miteinander teilen können, indem sie den App-Teilemechanismus des Betriebssystems verwenden.
- [Installation aus Ihrer PWA auslösen](/de/docs/Web/Progressive_web_apps/How_to/Trigger_install_prompt)
  - : Beschreibt, wie Entwickler ihre eigene Benutzeroberfläche bereitstellen können, um Benutzer einzuladen, ihre PWA zu installieren.
- [Dateien mit Ihrer PWA verknüpfen](/de/docs/Web/Progressive_web_apps/How_to/Associate_files_with_your_PWA)
  - : Beschreibt, wie Sie eine Verknüpfung zwischen Dateitypen und Ihrer PWA erstellen können, sodass, wenn der Benutzer auf die Datei klickt, Ihre PWA gestartet wird, um sie zu verarbeiten.

## Tutorials

Erstellen Sie eine PWA von Grund auf mit diesen [PWA-Tutorials](/de/docs/Web/Progressive_web_apps/Tutorials), die die Schritte von Anfang bis Ende durchgehen und erklären, wie die verschiedenen Funktionen der App implementiert werden.

- [Erstellen Ihrer ersten PWA](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker)
  - : Dieses Anfänger-Tutorial geht Schritt für Schritt durch die Erstellung einer PWA zur Nachverfolgung von Menstruationszyklen. Die Lektionen umfassen einen Rundgang durch das erforderliche HTML, CSS und JavaScript, um eine voll funktionsfähige Web-App zu erstellen, das Einrichten einer Testumgebung sowie umfassende Erklärungen, die den Lernenden durch das Upgrade der Web-App zu einer PWA führen; einschließlich der Entwicklung und Überprüfung eines Manifests, dem Hinzufügen eines Service Workers und der Verwendung des Service Workers zum Löschen abgelaufener Caches.
- [Tiefer Einblick in PWA](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames)
  - : Dieses Tutorial auf mittlerem Niveau behandelt die Erstellung einer PWA, die Informationen zu Spielen auflistet, die bei der [js13kGames 2017](https://js13kgames.com/2017/) Wettbewerb in der A-Frame-Kategorie eingereicht wurden. Dieses Tutorial enthält alle Grundlagen zur Erstellung einer PWA sowie zusätzliche Funktionen, einschließlich Benachrichtigungen, Push und App-Leistung.

## Referenz

Unsere [PWA-Referenz](/de/docs/Web/Progressive_web_apps/Reference) listet alle auf MDN dokumentierten Funktionen auf, die Sie benötigen, um eine PWA zu erstellen.

### Web-App-Manifest

- [Mitglieder des Web-App-Manifests](/de/docs/Web/Progressive_web_apps/Manifest)
  - : Entwickler können Mitglieder des Web-App-Manifests verwenden, um eine PWA zu beschreiben, ihr Erscheinungsbild anzupassen und sie tiefer in das Betriebssystem zu integrieren.

### Service Worker APIs

#### Kommunikation mit der App

Die folgenden APIs können von einem Service Worker verwendet werden, um mit seiner zugehörigen Client-PWA zu kommunizieren:

- [`Client.postMessage()`](/de/docs/Web/API/Client/postMessage)
  - : Ermöglicht es einem Service Worker, eine Nachricht an seine Client-PWA zu senden.
- [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API)
  - : Ermöglicht es einem Service Worker und seiner Client-PWA, einen grundlegenden Zwei-Wege-Kommunikationskanal einzurichten.

#### Offline-Betrieb

Die folgenden APIs können von einem Service Worker verwendet werden, um Ihre App offline funktionsfähig zu machen:

- [`Cache`](/de/docs/Web/API/Cache)
  - : Ein persistenter Speichermodus für HTTP-Antworten, der zum Speichern von Assets verwendet wird, die wiederverwendet werden können, wenn die App offline ist.
- [`Clients`](/de/docs/Web/API/Clients)
  - : Eine Schnittstelle, die Zugriff auf die vom Service Worker kontrollierten Dokumente bietet.
- [`FetchEvent`](/de/docs/Web/API/FetchEvent)
  - : Ein Ereignis, das im Service Worker mit jeder HTTP-Anfrage, die von der Client-PWA gestellt wird, ausgelöst wird. Das Ereignis kann verwendet werden, um entweder die Anfrage wie gewohnt an den Server zu senden und die Antwort für die zukünftige Verwendung zu speichern oder die Anfrage abzufangen und sofort mit einer zuvor zwischengespeicherten Antwort zu antworten.

#### Hintergrundbetrieb

Die folgenden APIs können von einem Service Worker verwendet werden, um Aufgaben im Hintergrund auszuführen, auch wenn Ihre App nicht läuft:

- [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
  - : Eine Möglichkeit, Aufgaben zu verschieben, um sie in einem Service Worker auszuführen, sobald eine stabile Netzwerkverbindung besteht.
- [Web Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
  - : Eine Möglichkeit, Aufgaben zu registrieren, die in einem Service Worker bei periodischen Intervallen mit Netzwerkverbindung ausgeführt werden.
- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
  - : Eine Methode für einen Service Worker, um Downloads zu verwalten, die eine erhebliche Zeit in Anspruch nehmen können, wie z.B. Video- oder Audiodateien.

### Andere Web-APIs

- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
  - : Eine clientseitige Speicher-API für erhebliche Mengen an strukturierten Daten, einschließlich Dateien.
- [Badging API](/de/docs/Web/API/Badging_API)
  - : Eine Methode, um ein Abzeichen auf dem Anwendungssymbol zu setzen, was eine wenig ablenkende Benachrichtigung darstellt.
- [Notifications API](/de/docs/Web/API/Notifications_API)
  - : Eine Möglichkeit, Benachrichtigungen zu senden, die auf Betriebssystemebene angezeigt werden.
- [Web Share API](/de/docs/Web/API/Web_Share_API)
  - : Ein Mechanismus zum Teilen von Text, Links, Dateien und anderen Inhalten mit anderen von den Benutzern auf ihrem Gerät ausgewählten Apps.
- [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API)
  - : Eine API für PWAs, die auf Desktop-Betriebssystemen installiert sind und das Ausblenden der Standardfenstertitelleiste ermöglicht, um die App über die gesamte Fensterfläche anzuzeigen.

## Siehe auch

- [Progressive Web Apps](https://web.dev/explore/progressive-web-apps) auf web.dev
- [Learn PWA](https://web.dev/learn/pwa/) auf web.dev
- [Progressive Web Apps](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/) auf learn.microsoft.com (2023)
