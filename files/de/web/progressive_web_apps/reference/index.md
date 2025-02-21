---
title: Progressive-Web-Apps-Referenz
short-title: Reference
slug: Web/Progressive_web_apps/Reference
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{PWASidebar}}

Diese Referenz beschreibt die Technologien, Funktionen und APIs, die [Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs) nutzen können, um ein großartiges Benutzererlebnis zu bieten.

## Web-App-Manifest

- [Mitglieder des Web-App-Manifests](/de/docs/Web/Progressive_web_apps/Manifest)
  - : Entwickler können Mitglieder des Web-App-Manifests verwenden, um eine PWA zu beschreiben, ihr Erscheinungsbild anzupassen und sie tiefer in das Betriebssystem zu integrieren.

## Service Worker APIs

### Kommunikation mit der App

Die folgenden APIs können von einem Service Worker verwendet werden, um mit seiner zugeordneten Client-PWA zu kommunizieren:

- [`Client.postMessage()`](/de/docs/Web/API/Client/postMessage)
  - : Ermöglicht es einem Service Worker, eine Nachricht an seine Client-PWA zu senden.
- [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API)
  - : Ermöglicht es einem Service Worker und seiner Client-PWA, einen einfachen bidirektionalen Kommunikationskanal einzurichten.

### Offline-Betrieb

Die folgenden APIs können von einem Service Worker verwendet werden, um Ihre App offline funktionsfähig zu machen:

- [`Cache`](/de/docs/Web/API/Cache)
  - : Ein persistenten Speichermedium für HTTP-Antworten, das zum Speichern von Ressourcen verwendet wird, die wiederverwendet werden können, wenn die App offline ist.
- [`Clients`](/de/docs/Web/API/Clients)
  - : Eine Schnittstelle, die Zugang zu den Dokumenten bietet, die vom Service Worker gesteuert werden.
- [`FetchEvent`](/de/docs/Web/API/FetchEvent)
  - : Ein Ereignis, das im Service Worker bei jeder HTTP-Anfrage von der Client-PWA ausgelöst wird. Das Ereignis kann verwendet werden, um entweder die Anfrage wie gewohnt an den Server zu senden und die Antwort für die zukünftige Nutzung zu speichern oder die Anfrage abzufangen und sofort mit einer zuvor zwischengespeicherten Antwort zu reagieren.

### Hintergrundbetrieb

Die folgenden APIs können von einem Service Worker verwendet werden, um Aufgaben im Hintergrund auszuführen, selbst wenn Ihre App nicht läuft:

- [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
  - : Eine Möglichkeit, Aufgaben zu verschieben, bis eine stabile Netzwerkverbindung besteht, damit sie im Service Worker ausgeführt werden.
- [Web Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
  - : Eine Möglichkeit, Aufgaben zu registrieren, die in regelmäßigen Abständen mit Netzwerkverbindung im Service Worker ausgeführt werden sollen.
- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
  - : Eine Methode für einen Service Worker, um Downloads zu verwalten, die eine beträchtliche Zeit in Anspruch nehmen können, wie z.B. Video- oder Audiodateien.

## Weitere Web-APIs

- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
  - : Eine clientseitige Speicher-API für erhebliche Mengen an strukturierten Daten, einschließlich Dateien.
- [Badging API](/de/docs/Web/API/Badging_API)
  - : Eine Methode, um ein Badge auf dem Anwendungssymbol zu setzen und damit eine ablenkungsarme Benachrichtigung zu bieten.
- [Notifications API](/de/docs/Web/API/Notifications_API)
  - : Eine Möglichkeit, Benachrichtigungen zu senden, die auf Betriebssystemebene angezeigt werden.
- [Web Share API](/de/docs/Web/API/Web_Share_API)
  - : Ein Mechanismus zum Teilen von Texten, Links, Dateien und anderen Inhalten an andere Apps, die vom Benutzer auf seinem Gerät ausgewählt werden.
- [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API)
  - : Eine API für PWAs, die auf Desktop-Betriebssystemen installiert sind und es ermöglicht, die Standard-Fenstertitelleiste auszublenden, sodass die App über die gesamte Oberfläche des App-Fensters angezeigt werden kann.
