---
title: Progressive Web Apps Referenz
short-title: Referenz
slug: Web/Progressive_web_apps/Reference
l10n:
  sourceCommit: 5c569f709c56f0da1e76dc34d8d30a6d9b635573
---

{{PWASidebar}}

Diese Referenz beschreibt die Technologien, Funktionen und APIs, die [Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs) verwenden können, um eine großartige Nutzererfahrung zu bieten.

## Web-App-Manifest

- [Mitglieder des Web-App-Manifests](/de/docs/Web/Manifest)
  - : Entwickler können Mitglieder des Web-App-Manifests nutzen, um eine PWA zu beschreiben, ihr Erscheinungsbild anzupassen und sie tiefer in das Betriebssystem zu integrieren.

## Service Worker APIs

### Kommunikation mit der App

Die folgenden APIs können von einem Service Worker verwendet werden, um mit der zugehörigen Client-PWA zu kommunizieren:

- [`Client.postMessage()`](/de/docs/Web/API/Client/postMessage)
  - : Ermöglicht einem Service Worker, eine Nachricht an seine Client-PWA zu senden.
- [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API)
  - : Ermöglicht einem Service Worker und seiner Client-PWA die Einrichtung eines grundlegenden Zwei-Wege-Kommunikationskanals.

### Offline-Nutzung

Die folgenden APIs können von einem Service Worker verwendet werden, um Ihre App offline arbeitsfähig zu machen:

- [`Cache`](/de/docs/Web/API/Cache)
  - : Ein persistenten Speichermodul für HTTP-Antworten, das zur Speicherung von Assets verwendet wird, die wiederverwendet werden können, wenn die App offline ist.
- [`Clients`](/de/docs/Web/API/Clients)
  - : Eine Schnittstelle, die Zugriff auf die Dokumente bietet, die vom Service Worker kontrolliert werden.
- [`FetchEvent`](/de/docs/Web/API/FetchEvent)
  - : Ein Ereignis, das im Service Worker mit jeder HTTP-Anfrage der Client-PWA ausgelöst wird. Das Ereignis kann verwendet werden, um entweder die Anfrage wie gewohnt an den Server zu senden und die Antwort für die zukünftige Verwendung zu speichern oder die Anfrage abzufangen und sofort mit einer zuvor zwischengespeicherten Antwort zu antworten.

### Hintergrundbetrieb

Die folgenden APIs können von einem Service Worker verwendet werden, um Aufgaben im Hintergrund auszuführen, selbst wenn Ihre App nicht läuft:

- [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
  - : Eine Möglichkeit, Aufgaben zu verschieben, die in einem Service Worker ausgeführt werden, sobald eine stabile Netzwerkverbindung besteht.
- [Web Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
  - : Eine Möglichkeit, Aufgaben zu registrieren, die in einem Service Worker in regelmäßigen Abständen mit Netzwerkverbindung ausgeführt werden.
- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
  - : Eine Methode, mit der ein Service Worker Downloads verwalten kann, die eine beträchtliche Zeit in Anspruch nehmen können, wie z.B. Video- oder Audiodateien.

## Weitere Web-APIs

- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
  - : Eine clientseitige Speicher-API für erhebliche Mengen an strukturierten Daten, einschließlich Dateien.
- [Badging API](/de/docs/Web/API/Badging_API)
  - : Eine Methode, um ein Abzeichen auf dem Anwendungssymbol zu setzen, das eine benachrichtigungsarme Kommunikation bietet.
- [Notifications API](/de/docs/Web/API/Notifications_API)
  - : Eine Möglichkeit, Benachrichtigungen zu senden, die auf Betriebssystemebene angezeigt werden.
- [Web Share API](/de/docs/Web/API/Web_Share_API)
  - : Ein Mechanismus zum Teilen von Texten, Links, Dateien und anderen Inhalten mit anderen von der Benutzerin oder dem Benutzer auf ihrem Gerät ausgewählten Apps.
- [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API)
  - : Eine API für auf Desktop-Betriebssystemen installierte PWAs, die das Verbergen der Standard-Fenstertitelleiste ermöglicht und das Anzeigen der App über die gesamte Oberfläche des App-Fensters hinweg erlaubt.
