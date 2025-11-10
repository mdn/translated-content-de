---
title: Progressive Web Apps Referenz
short-title: Reference
slug: Web/Progressive_web_apps/Reference
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

Diese Referenz beschreibt die Technologien, Funktionen und APIs, die von [Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs) genutzt werden können, um ein großartiges Benutzererlebnis zu bieten.

## Web-App-Manifest

- [Web-App-Manifest-Mitglieder](/de/docs/Web/Progressive_web_apps/Manifest)
  - : Entwickler können Web-App-Manifest-Mitglieder verwenden, um eine PWA zu beschreiben, ihr Erscheinungsbild anzupassen und sie tiefer in das Betriebssystem zu integrieren.

## Service Worker APIs

### Kommunikation mit der App

Die folgenden APIs können von einem Service Worker verwendet werden, um mit seiner zugehörigen Client-PWA zu kommunizieren:

- [`Client.postMessage()`](/de/docs/Web/API/Client/postMessage)
  - : Ermöglicht einem Service Worker, eine Nachricht an seine Client-PWA zu senden.
- [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API)
  - : Ermöglicht einem Service Worker und seiner Client-PWA, einen grundlegenden Zwei-Wege-Kommunikationskanal herzustellen.

### Offline-Betrieb

Die folgenden APIs können von einem Service Worker verwendet werden, um Ihre App im Offline-Modus arbeiten zu lassen:

- [`Cache`](/de/docs/Web/API/Cache)
  - : Ein dauerhaftes Speichersystem für HTTP-Antworten, das verwendet wird, um Ressourcen zu speichern, die wiederverwendet werden können, wenn die App offline ist.
- [`Clients`](/de/docs/Web/API/Clients)
  - : Eine Schnittstelle, die Zugriff auf die Dokumente bietet, die vom Service Worker kontrolliert werden.
- [`FetchEvent`](/de/docs/Web/API/FetchEvent)
  - : Ein Ereignis, das im Service Worker mit jeder HTTP-Anfrage der Client-PWA ausgelöst wird. Das Ereignis kann verwendet werden, um die Anfrage entweder wie gewohnt an den Server zu senden und die Antwort für zukünftige Verwendung zu speichern oder die Anfrage abzufangen und sofort mit einer zuvor zwischengespeicherten Antwort zu beantworten.

### Hintergrundbetrieb

Die folgenden APIs können von einem Service Worker verwendet werden, um Aufgaben im Hintergrund auszuführen, auch wenn Ihre App nicht läuft:

- [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
  - : Eine Möglichkeit, Aufgaben zu verschieben, um sie in einem Service Worker auszuführen, sobald eine stabile Netzwerkverbindung besteht.
- [Web Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
  - : Eine Möglichkeit, Aufgaben zu registrieren, die in einem Service Worker in regelmäßigen Abständen mit Netzwerkverbindung ausgeführt werden sollen.
- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
  - : Ein Verfahren für einen Service Worker, um Downloads zu verwalten, die eine beträchtliche Zeit in Anspruch nehmen können, wie z.B. Video- oder Audiodateien.

## Andere Web-APIs

- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
  - : Eine clientseitige Speicherschnittstelle für bedeutende Mengen strukturierter Daten, einschließlich Dateien.
- [Badging API](/de/docs/Web/API/Badging_API)
  - : Eine Methode, um ein Abzeichen auf dem Anwendungsicon zu setzen und so eine benachrichtigungsarme Benachrichtigung zu bieten.
- [Notifications API](/de/docs/Web/API/Notifications_API)
  - : Eine Möglichkeit, Benachrichtigungen zu senden, die auf Betriebssystemebene angezeigt werden.
- [Web Share API](/de/docs/Web/API/Web_Share_API)
  - : Ein Mechanismus zum Teilen von Texten, Links, Dateien und anderen Inhalten an andere vom Benutzer auf seinem Gerät ausgewählte Apps.
- [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API)
  - : Eine API für auf Desktop-Betriebssystemen installierte PWAs, die das Verstecken der standardmäßigen Fenstertitelleiste ermöglicht und das Anzeigen der App über die gesamte Fläche des App-Fensters erlaubt.
