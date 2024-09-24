---
title: Progressive Web Apps-Referenz
short-title: Referenz
slug: Web/Progressive_web_apps/Reference
l10n:
  sourceCommit: 5c569f709c56f0da1e76dc34d8d30a6d9b635573
---

{{PWASidebar}}

Diese Referenz beschreibt die Technologien, Funktionen und APIs, die [Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs) nutzen können, um ein hervorragendes Benutzererlebnis zu bieten.

## Web App Manifest

- [Web App Manifest-Elemente](/de/docs/Web/Manifest)
  - : Entwickler können Web App Manifest-Elemente verwenden, um eine PWA zu beschreiben, ihr Erscheinungsbild anzupassen und sie tiefer in das Betriebssystem zu integrieren.

## Service Worker APIs

### Kommunikation mit der App

Die folgenden APIs können von einem Service Worker verwendet werden, um mit seiner zugehörigen Client-PWA zu kommunizieren:

- [`Client.postMessage()`](/de/docs/Web/API/Client/postMessage)
  - : Ermöglicht einem Service Worker, eine Nachricht an seine Client-PWA zu senden.
- [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API)
  - : Ermöglicht einem Service Worker und seiner Client-PWA, einen grundlegenden Zwei-Wege-Kommunikationskanal zu etablieren.

### Offline-Betrieb

Die folgenden APIs können von einem Service Worker verwendet werden, um Ihre App offline funktionsfähig zu machen:

- [`Cache`](/de/docs/Web/API/Cache)
  - : Ein persistenter Speichermechanismus für HTTP-Antworten, der verwendet wird, um Assets zu speichern, die wiederverwendet werden können, wenn die App offline ist.
- [`Clients`](/de/docs/Web/API/Clients)
  - : Eine Schnittstelle, die Zugriff auf die Dokumente bietet, die vom Service Worker gesteuert werden.
- [`FetchEvent`](/de/docs/Web/API/FetchEvent)
  - : Ein Ereignis, das im Service Worker mit jeder HTTP-Anfrage der Client-PWA ausgelöst wird. Das Ereignis kann verwendet werden, um entweder die Anfrage wie gewohnt an den Server zu senden und die Antwort für zukünftige Verwendungen zu speichern, oder die Anfrage abzufangen und sofort mit einer zuvor zwischengespeicherten Antwort zu antworten.

### Hintergrundbetrieb

Die folgenden APIs können von einem Service Worker verwendet werden, um Aufgaben im Hintergrund auszuführen, selbst wenn Ihre App nicht läuft:

- [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
  - : Eine Möglichkeit, Aufgaben auf einen stabilen Netzwerkanschluss zu verschieben, damit sie in einem Service Worker ausgeführt werden können.
- [Web Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
  - : Eine Möglichkeit, Aufgaben zu registrieren, die in einem Service Worker in regelmäßigen Abständen mit Netzwerkverbindung ausgeführt werden sollen.
- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
  - : Eine Methode für einen Service Worker, um Downloads zu verwalten, die möglicherweise viel Zeit in Anspruch nehmen, wie z.B. Video- oder Audiodateien.

## Andere Web-APIs

- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
  - : Eine clientseitige Speicher-API für große Mengen an strukturierten Daten, einschließlich Dateien.
- [Badging API](/de/docs/Web/API/Badging_API)
  - : Eine Methode, um ein Abzeichen auf dem Anwendungssymbol zu setzen und eine benachrichtigungsarme Interaktion zu ermöglichen.
- [Notifications API](/de/docs/Web/API/Notifications_API)
  - : Ein Weg, um Benachrichtigungen zu senden, die auf Betriebssystemebene angezeigt werden.
- [Web Share API](/de/docs/Web/API/Web_Share_API)
  - : Ein Mechanismus zum Teilen von Texten, Links, Dateien und anderen Inhalten an andere Apps, die vom Benutzer auf seinem Gerät ausgewählt werden.
- [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API)
  - : Eine API für auf Desktop-Betriebssystemen installierte PWAs, die das Verbergen der standardmäßigen Fenstertitelleiste ermöglicht und die Anzeige der App über die gesamte Fensterfläche erlaubt.
