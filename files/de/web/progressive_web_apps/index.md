---
title: Progressive Web Apps
slug: Web/Progressive_web_apps
l10n:
  sourceCommit: 204025469739413f67f22c6c1ede6ed904b7eac5
---

Eine **Progressive Web App** (PWA) ist eine App, die mit Webplattform-Technologien erstellt wurde, aber eine Benutzererfahrung wie eine plattformspezifische App bietet.

Wie eine Webseite kann eine PWA mit einer einzigen Codebasis auf mehreren Plattformen und Geräten laufen. Wie eine plattformspezifische App kann sie auf dem Gerät installiert werden, offline und im Hintergrund arbeiten und sich mit dem Gerät und anderen installierten Apps integrieren.

## Leitfäden

Die [PWA-Leitfäden](/de/docs/Web/Progressive_web_apps/Guides) bieten konzeptionelle Erklärungen zu verschiedenen Aspekten von PWAs.
Sie sollen Ihnen helfen, zu verstehen, welche Möglichkeiten PWAs bieten, und genügend Hinweise geben, damit Sie wissen, wie Sie diese umsetzen können.

- [Was ist eine Progressive Web App?](/de/docs/Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app)
  - : Eine Einführung in PWAs, die sie mit traditionellen Webseiten und plattformspezifischen Apps vergleicht und ihre Hauptmerkmale aufzeigt.
- [PWAs installierbar machen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
  - : Ein definierendes Merkmal einer PWA ist, dass sie auf dem Gerät installiert werden kann und dann den Nutzern wie eine plattformspezifische App erscheint, ein permanentes Feature ihres Geräts, das sie direkt vom Betriebssystem aus wie jede andere App starten können. In diesem Leitfaden untersuchen wir, was "installierbar" bedeutet, was eine PWA bieten muss, um installierbar zu sein, und wie Sie das Installationserlebnis anpassen können.
- [Web Apps installieren und deinstallieren](/de/docs/Web/Progressive_web_apps/Guides/Installing)
  - : Dieser Leitfaden beschreibt, wie Benutzer PWAs auf ihren Geräten installieren und deinstallieren können.
- [Offline- und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation)
  - : In diesem Leitfaden stellen wir eine Reihe von Technologien vor, die es einer PWA ermöglichen, eine gute Benutzererfahrung zu bieten, selbst wenn das Gerät eine intermittierende Netzwerkverbindung hat, und um Operationen im Hintergrund auszuführen, selbst wenn die Haupt-App nicht läuft.
- [Caching](/de/docs/Web/Progressive_web_apps/Guides/Caching)
  - : Ein Überblick über die APIs, die es einer PWA ermöglichen, Ressourcen lokal zu cachen, und einige übliche Strategien, die von PWAs verwendet werden, um Offline-Funktionalität zu implementieren.
- [Best Practices für PWAs](/de/docs/Web/Progressive_web_apps/Guides/Best_practices)
  - : PWAs sollten sich an unterschiedliche Browser und Geräte anpassen, zugänglich sein, gute Leistung bieten und sich gut in das Betriebssystem integrieren. Dieser Leitfaden bietet eine Liste von Best Practices, um sicherzustellen, dass Ihre PWA so gut wie möglich ist.

## Anleitung

Die [PWA-Anleitungen](/de/docs/Web/Progressive_web_apps/How_to) bieten detaillierte Anweisungen zur Implementierung spezifischer PWA-Funktionen.

- [Erstellen Sie eine eigenständige App](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app)
  - : Beschreibt, wie man angibt, dass eine PWA in ihrem eigenen speziellen Fenster gestartet werden soll, wenn sie gestartet wird, anstatt in einem Browser-Tab.
- [App-Icons definieren](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons)
  - : Beschreibt, wie Sie Ihren eigenen Satz von Icons definieren, die verwendet werden, wenn die PWA auf einem Gerät installiert ist.
- [Farben Ihrer App anpassen](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors)
  - : Beschreibt, wie man Hintergrund- und Themendesignfarben für eine PWA festlegt.
- [Badges anzeigen](/de/docs/Web/Progressive_web_apps/How_to/Display_badge_on_app_icon)
  - : Beschreibt, wie man ein Badge auf dem Icon der PWA anzeigt, um beispielsweise den Benutzer darüber zu informieren, dass er neue Nachrichten erhalten hat.
- [Gemeinsame App-Aktionen als Shortcuts bereitstellen](/de/docs/Web/Progressive_web_apps/How_to/Expose_common_actions_as_shortcuts)
  - : Beschreibt, wie man gemeinsame Aktionen einer PWA bereitstellt, die über das App-Shortcut-Menü des Betriebssystems gestartet werden können.
- [Daten zwischen Apps teilen](/de/docs/Web/Progressive_web_apps/How_to/Share_data_between_apps)
  - : Beschreibt, wie PWAs Daten miteinander teilen können, indem sie den App-Sharing-Mechanismus des Betriebssystems nutzen.
- [Installation von Ihrer PWA auslösen](/de/docs/Web/Progressive_web_apps/How_to/Trigger_install_prompt)
  - : Beschreibt, wie Entwickler ihre eigene Benutzeroberfläche bereitstellen können, um Benutzer zur Installation ihrer PWA einzuladen.
- [Dateien mit Ihrer PWA verknüpfen](/de/docs/Web/Progressive_web_apps/How_to/Associate_files_with_your_PWA)
  - : Beschreibt, wie Sie eine Verknüpfung zwischen Dateitypen und Ihrer PWA erstellen können, sodass beim Klicken auf die Datei Ihre PWA gestartet wird, um sie zu verarbeiten.

## Tutorials

Bauen Sie eine PWA von Grund auf mit diesen [PWA-Tutorials](/de/docs/Web/Progressive_web_apps/Tutorials), die die Schritte von Anfang bis Ende durchgehen und dabei erklären, wie die verschiedenen Funktionen der App umgesetzt werden.

- [Erstellen Ihrer ersten PWA](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker)
  - : Dieses Tutorial für Anfänger begleitet Sie durch die Erstellung einer PWA zur Verfolgung von Menstruationszyklen. Die Lektionen enthalten eine Schrit-für-Schritt-Anleitung durch das erforderliche HTML, CSS und JavaScript, um eine voll funktionsfähige Web-App zu erstellen, das Einrichten einer Testumgebung und vollständige Erklärungen, die den Lernenden beim Upgrade der Web-App zu einer PWA führen; einschließlich der Entwicklung und Inspektion eines Manifests, dem Hinzufügen eines Service Workers und der Verwendung des Service Workers zum Löschen veralteter Caches.
- [Vertiefung in PWA](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames)
  - : Dieses Tutorial auf mittlerem Niveau begleitet Sie durch die Erstellung einer PWA, die Informationen über Spiele auflistet, die für die A-Frame-Kategorie im [js13kGames 2017](https://2017.js13kgames.com/)-Wettbewerb eingereicht wurden. Dieses Tutorial enthält alle Grundlagen zur Erstellung einer PWA mit zusätzlichen Funktionen, einschließlich Benachrichtigungen, Push und App-Leistung.

## Referenz

Unsere [PWA-Referenz](/de/docs/Web/Progressive_web_apps/Reference) listet alle auf MDN dokumentierten Funktionen auf, die Sie zum Erstellen einer PWA benötigen.

### Web-App-Manifest

- [Web-App-Manifest-Mitglieder](/de/docs/Web/Progressive_web_apps/Manifest)
  - : Entwickler können Web-App-Manifest-Mitglieder verwenden, um eine PWA zu beschreiben, ihr Erscheinungsbild anzupassen und sie tiefer in das Betriebssystem zu integrieren.

### Service Worker APIs

#### Kommunikation mit der App

Die folgenden APIs können von einem Service Worker verwendet werden, um mit der zugehörigen Client-PWA zu kommunizieren:

- [`Client.postMessage()`](/de/docs/Web/API/Client/postMessage)
  - : Ermöglicht es einem Service Worker, eine Nachricht an seine Client-PWA zu senden.
- [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API)
  - : Ermöglicht es einem Service Worker und seiner Client-PWA, einen einfachen Zwei-Wege-Kommunikationskanal einzurichten.

#### Offline-Betrieb

Die folgenden APIs können von einem Service Worker verwendet werden, um Ihre App offline arbeitsfähig zu machen:

- [`Cache`](/de/docs/Web/API/Cache)
  - : Ein dauerhaftes Speichermedium für HTTP-Antworten, das zum Speichern von Assets verwendet wird, die wiederverwendet werden können, wenn die App offline ist.
- [`Clients`](/de/docs/Web/API/Clients)
  - : Eine Schnittstelle, die verwendet wird, um Zugriff auf die Dokumente zu gewähren, die vom Service Worker kontrolliert werden.
- [`FetchEvent`](/de/docs/Web/API/FetchEvent)
  - : Ein Ereignis, das im Service Worker mit jeder HTTP-Anfrage ausgelöst wird, die von der Client-PWA gemacht wird. Das Ereignis kann verwendet werden, um entweder die Anfrage normal an den Server zu senden und die Antwort für die zukünftige Verwendung zu speichern oder die Anfrage abzufangen und sofort mit einer zuvor gecachten Antwort zu antworten.

#### Hintergrundbetrieb

Die folgenden APIs können von einem Service Worker verwendet werden, um Aufgaben im Hintergrund auszuführen, selbst wenn Ihre App nicht läuft:

- [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
  - : Eine Möglichkeit, Aufgaben zu verschieben, um in einem Service Worker ausgeführt zu werden, sobald eine stabile Netzwerkverbindung besteht.
- [Web Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
  - : Eine Möglichkeit, Aufgaben in einem Service Worker zu registrieren, die in periodischen Intervallen mit Netzwerkverbindung ausgeführt werden sollen.
- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
  - : Eine Methode für einen Service Worker, um Downloads zu verwalten, die eine beträchtliche Zeit in Anspruch nehmen können, wie z.B. Video- oder Audiodateien.

### Andere Web-APIs

- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
  - : Eine clientseitige Speicher-API für bedeutende Mengen strukturierter Daten, einschließlich Dateien.
- [Badging API](/de/docs/Web/API/Badging_API)
  - : Eine Methode zum Setzen eines Badges auf dem App-Icon, um eine Benachrichtigung mit geringer Ablenkung zu bieten.
- [Notifications API](/de/docs/Web/API/Notifications_API)
  - : Eine Möglichkeit, Benachrichtigungen zu senden, die auf Betriebssystemebene angezeigt werden.
- [Web Share API](/de/docs/Web/API/Web_Share_API)
  - : Ein Mechanismus zum Teilen von Text, Links, Dateien und anderen Inhalten mit anderen Apps, die vom Benutzer auf seinem Gerät ausgewählt wurden.
- [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API)
  - : Eine API für auf Desktop-Betriebssystemen installierte PWAs, die das Verbergen der standardmäßigen Fenstertitelleiste ermöglicht und die Anzeige der App über die gesamte Oberfläche des App-Fensters erlaubt.

## Siehe auch

- [Progressive Web Apps](https://web.dev/explore/progressive-web-apps) auf web.dev
- [Learn PWA](https://web.dev/learn/pwa/) auf web.dev
- [Progressive Web Apps](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/) auf learn.microsoft.com (2023)
