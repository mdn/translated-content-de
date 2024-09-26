---
title: Progressive Web Apps
slug: Web/Progressive_web_apps
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{PWASidebar}}

Eine **Progressive Web App** (PWA) ist eine App, die mit Technologien der Webplattform erstellt wurde, aber ein Nutzererlebnis bietet, das dem einer plattformspezifischen App ähnelt.

Wie eine Website kann eine PWA auf mehreren Plattformen und Geräten von einem einzigen Codebase ausgeführt werden. Wie eine plattformspezifische App kann sie auf dem Gerät installiert werden, offline und im Hintergrund arbeiten und sich in das Gerät und andere installierte Apps integrieren.

## Anleitungen

Diese Anleitungen geben konzeptionelle Erklärungen zu verschiedenen Aspekten von PWAs. Sie sollen Ihnen helfen zu verstehen, welche Möglichkeiten PWAs bieten und genug Hinweise geben, um zu verstehen, wie Sie dies erreichen können.

- [Was ist eine Progressive Web App?](/de/docs/Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app)
  - : Eine Einführung in PWAs, die sie mit traditionellen Websites und plattformspezifischen Apps vergleicht und ihre Hauptmerkmale beschreibt.
- [PWAs installierbar machen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
  - : Eines der bestimmenden Merkmale einer PWA ist, dass sie auf dem Gerät installiert werden kann und Benutzern als plattformspezifische App erscheint, ein permanenter Bestandteil ihres Geräts, den sie direkt vom Betriebssystem aus wie jede andere App starten können. In dieser Anleitung erkunden wir, was "installierbar" bedeutet, was eine PWA bieten muss, um installierbar zu sein, und wie Sie das Installationserlebnis anpassen können.
- [Web-Apps installieren und deinstallieren](/de/docs/Web/Progressive_web_apps/Guides/Installing)
  - : Diese Anleitung behandelt, wie Benutzer PWAs auf ihren Geräten installieren und deinstallieren können.
- [Offline- und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation)
  - : In dieser Anleitung stellen wir eine Reihe von Technologien vor, die es einer PWA ermöglichen, eine gute Benutzererfahrung zu bieten, selbst wenn das Gerät nur intermittierende Netzwerkverbindungen hat, und um im Hintergrund zu arbeiten, selbst wenn die Haupt-App nicht läuft.
- [Caching](/de/docs/Web/Progressive_web_apps/Guides/Caching)
  - : Ein Überblick über die APIs, die es einer PWA ermöglichen, Ressourcen lokal zu cachen, und einige gängige Strategien, die von PWAs verwendet werden, um Offline-Funktionalität zu implementieren.
- [Best Practices für PWAs](/de/docs/Web/Progressive_web_apps/Guides/Best_practices)
  - : PWAs sollten sich an verschiedene Browser und Geräte anpassen, barrierefrei sein, gute Leistung bieten und sich gut in das Betriebssystem integrieren. Diese Anleitung liefert eine Liste von Best Practices, die Ihnen helfen sollen, sicherzustellen, dass Ihre PWA so gut wie möglich ist.

## Wie man

Diese Anleitungen geben fundierte Anweisungen zur Implementierung spezifischer PWA-Funktionen.

- [Erstellen Sie eine eigenständige App](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app)
  - : Beschreibt, wie angegeben wird, dass eine PWA in ihrem eigenen dedizierten Fenster gestartet werden sollte, anstatt in einem Browser-Tab.
- [Definieren Sie Ihre App-Icons](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons)
  - : Beschreibt, wie Sie Ihre eigene Sammlung von Icons definieren, die verwendet werden, wenn die PWA auf einem Gerät installiert ist.
- [Passen Sie die Farben Ihrer App an](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors)
  - : Beschreibt, wie Hintergrund- und Themenfarben für eine PWA festgelegt werden.
- [Anzeigen von Badges](/de/docs/Web/Progressive_web_apps/How_to/Display_badge_on_app_icon)
  - : Beschreibt, wie ein Badge auf dem Icon der PWA angezeigt wird, z. B. um den Nutzer darüber zu informieren, dass neue Nachrichten eingegangen sind.
- [Exponieren Sie allgemeine App-Aktionen als Shortcuts](/de/docs/Web/Progressive_web_apps/How_to/Expose_common_actions_as_shortcuts)
  - : Beschreibt, wie man allgemeine Aktionen für eine PWA exponiert, die vom App Shortcut-Menü des Betriebssystems aus gestartet werden können.
- [Teilen Sie Daten zwischen Apps](/de/docs/Web/Progressive_web_apps/How_to/Share_data_between_apps)
  - : Beschreibt, wie PWAs Daten miteinander teilen können, indem sie den App-Sharing-Mechanismus des Betriebssystems nutzen.
- [Installation von Ihrer PWA auslösen](/de/docs/Web/Progressive_web_apps/How_to/Trigger_install_prompt)
  - : Beschreibt, wie Entwickler ihre eigene Benutzeroberfläche bereitstellen können, um Nutzer zur Installation ihrer PWA einzuladen.
- [Dateien mit Ihrer PWA verknüpfen](/de/docs/Web/Progressive_web_apps/How_to/Associate_files_with_your_PWA)
  - : Beschreibt, wie Sie eine Verknüpfung zwischen Dateitypen und Ihrer PWA erstellen können, sodass beim Anklicken einer Datei die PWA gestartet wird, um diese zu bearbeiten.

## Tutorials

In diesen Tutorials erstellen Sie eine PWA von Grund auf. Tutorials führen Schritt für Schritt durch die Erstellung einer App von Anfang bis Ende und erklären, wie die verschiedenen Funktionen der App implementiert werden.

- [Erstellen Ihrer ersten PWA](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker)
  - : Dieses Tutorial für Anfänger führt Sie durch die Erstellung einer PWA zur Verfolgung von Menstruationszyklen. Die Lektionen umfassen eine Einführung in die erforderlichen HTML-, CSS- und JavaScript-Dateien zur Erstellung einer voll funktionsfähigen Web-App, das Einrichten einer Testumgebung und vollständige Erklärungen, die den Lernenden durch das Upgrade der Web-App zu einer PWA führen; einschließlich der Entwicklung und Untersuchung eines Manifests, dem Hinzufügen eines Service Workers und der Verwendung des Service Workers zum Löschen veralteter Caches.
- [Tiefer Einblick in PWA](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames)
  - : Dieses Tutorial auf mittlerem Niveau führt durch die Erstellung einer PWA, die Informationen über Spiele auflistet, die zur Kategorie A-Frame im [js13kGames 2017](https://2017.js13kgames.com/) Wettbewerb eingereicht wurden. Dieses Tutorial enthält alle Grundlagen zur Erstellung einer PWA mit zusätzlichen Funktionen, einschließlich Benachrichtigungen, Push und App-Leistung.

## Referenz

Referenzdokumentation zu den Webtechnologien, die Sie verwenden werden, um eine PWA zu erstellen.

### Web-App-Manifest

- [Web App Manifest Mitglieder](/de/docs/Web/Manifest)
  - : Entwickler können Web-App-Manifest-Mitglieder verwenden, um eine PWA zu beschreiben, ihr Erscheinungsbild anzupassen und tiefer in das Betriebssystem zu integrieren.

### Service Worker APIs

#### Kommunikation mit der App

Die folgenden APIs können von einem Service Worker verwendet werden, um mit seiner zugehörigen Client-PWA zu kommunizieren:

- [`Client.postMessage()`](/de/docs/Web/API/Client/postMessage)
  - : Ermöglicht einem Service Worker, eine Nachricht an seine Client-PWA zu senden.
- [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API)
  - : Ermöglicht einem Service Worker und seiner Client-PWA, einen grundlegenden Zwei-Wege-Kommunikationskanal zu etablieren.

#### Offline-Betrieb

Die folgenden APIs können von einem Service Worker verwendet werden, um Ihre App offline arbeiten zu lassen:

- [`Cache`](/de/docs/Web/API/Cache)
  - : Ein persistenten Speichermechanismus für HTTP-Antworten, verwendet zum Speichern von Assets, die wiederverwendet werden können, wenn die App offline ist.
- [`Clients`](/de/docs/Web/API/Clients)
  - : Eine Schnittstelle, die Zugriff auf die von dem Service Worker gesteuerten Dokumente bietet.
- [`FetchEvent`](/de/docs/Web/API/FetchEvent)
  - : Ein Ereignis, das im Service Worker mit jeder HTTP-Anfrage ausgelöst wird, die von der Client-PWA gemacht wird. Das Ereignis kann verwendet werden, um entweder die Anfrage normal an den Server zu senden und die Antwort für die zukünftige Nutzung zu speichern oder die Anfrage abzufangen und sofort mit einer zuvor zwischengespeicherten Antwort zu antworten.

#### Hintergrundbetrieb

Die folgenden APIs können von einem Service Worker verwendet werden, um Aufgaben im Hintergrund auszuführen, auch wenn Ihre App nicht läuft:

- [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
  - : Eine Möglichkeit, Aufgaben in einem Service Worker auszuführen, wenn eine stabile Netzwerkverbindung besteht.
- [Web Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
  - : Eine Möglichkeit, Aufgaben in einem Service Worker in regelmäßigen Abständen bei bestehender Netzwerkverbindung auszuführen.
- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
  - : Eine Methode für einen Service Worker zum Verwalten von Downloads, die beträchtliche Zeit in Anspruch nehmen können, wie Video- oder Audiodateien.

### Andere Web-APIs

- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
  - : Eine clientseitige Speicher-API für erhebliche Mengen strukturierter Daten, einschließlich Dateien.
- [Badging API](/de/docs/Web/API/Badging_API)
  - : Eine Methode zum Setzen eines Badges auf dem Anwendungs-Icon, die eine Benachrichtigung mit geringer Ablenkung bietet.
- [Benachrichtigungen API](/de/docs/Web/API/Notifications_API)
  - : Eine Möglichkeit, Benachrichtigungen zu senden, die auf Betriebssystemebene angezeigt werden.
- [Web Share API](/de/docs/Web/API/Web_Share_API)
  - : Ein Mechanismus zum Teilen von Text, Links, Dateien und anderen Inhalten an andere Apps, die vom Nutzer auf seinem Gerät ausgewählt werden.
- [Fenstersteuerungs-Overlay-API](/de/docs/Web/API/Window_Controls_Overlay_API)
  - : Eine API für auf Desktop-Betriebssystemen installierte PWAs, die das Ausblenden der standardmäßigen Fenstertitelleiste ermöglicht, sodass die App über die gesamte Fensterfläche hinweg angezeigt wird.

## Siehe auch

- [Progressive Web Apps](https://web.dev/explore/progressive-web-apps) auf web.dev
- [Lernen Sie PWA](https://web.dev/learn/pwa/) auf web.dev
- [Progressive Web Apps](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/) auf learn.microsoft.com (2023)
