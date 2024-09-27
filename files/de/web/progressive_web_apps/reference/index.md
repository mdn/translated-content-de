---
title: Progressive Web Apps Referenz
short-title: Referenz
slug: Web/Progressive_web_apps/Reference
l10n:
  sourceCommit: 5c569f709c56f0da1e76dc34d8d30a6d9b635573
---

{{PWASidebar}}

Diese Referenz beschreibt die Technologien, Funktionen und APIs, die [Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs) nutzen können, um ein großartiges Benutzererlebnis zu bieten.

## Web-App-Manifest

- [Mitglieder des Web-App-Manifests](/de/docs/Web/Manifest)
  - : Entwickler können Mitglieder des Web-App-Manifests verwenden, um eine PWA zu beschreiben, ihr Erscheinungsbild anzupassen und sie tiefer in das Betriebssystem zu integrieren.

## Service-Worker-APIs

### Kommunikation mit der App

Die folgenden APIs können von einem Service-Worker genutzt werden, um mit seiner zugehörigen Client-PWA zu kommunizieren:

- [`Client.postMessage()`](/de/docs/Web/API/Client/postMessage)
  - : Ermöglicht einem Service-Worker, eine Nachricht an seine Client-PWA zu senden.
- [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API)
  - : Ermöglicht einem Service-Worker und seiner Client-PWA, einen einfachen zweiseitigen Kommunikationskanal zu etablieren.

### Offline-Betrieb

Die folgenden APIs können von einem Service-Worker genutzt werden, um Ihre App offline arbeiten zu lassen:

- [`Cache`](/de/docs/Web/API/Cache)
  - : Ein persistenten Speichermechanismus für HTTP-Antworten, der zur Speicherung von Assets verwendet wird, die wiederverwendet werden können, wenn die App offline ist.
- [`Clients`](/de/docs/Web/API/Clients)
  - : Eine Schnittstelle, die den Zugriff auf die Dokumente ermöglicht, die vom Service-Worker kontrolliert werden.
- [`FetchEvent`](/de/docs/Web/API/FetchEvent)
  - : Ein Ereignis, das im Service-Worker bei jeder HTTP-Anfrage der Client-PWA ausgelöst wird. Das Ereignis kann benutzt werden, um die Anfrage entweder wie gewohnt an den Server zu senden und die Antwort für zukünftige Verwendung zu speichern, oder die Anfrage abzufangen und sofort mit einer zuvor zwischengespeicherten Antwort zu antworten.

### Hintergrundbetrieb

Die folgenden APIs können von einem Service-Worker genutzt werden, um Aufgaben im Hintergrund auszuführen, selbst wenn Ihre App nicht läuft:

- [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
  - : Eine Möglichkeit, Aufgaben zu verschieben, um sie in einem Service-Worker auszuführen, sobald eine stabile Netzwerkverbindung besteht.
- [Web Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
  - : Eine Möglichkeit, Aufgaben zu registrieren, die in regelmäßigen Abständen mit Netzwerkverbindung in einem Service-Worker ausgeführt werden sollen.
- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
  - : Eine Methode für einen Service-Worker, um Downloads zu verwalten, die eine beträchtliche Zeit in Anspruch nehmen könnten, wie z.B. Video- oder Audiodateien.

## Andere Web-APIs

- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
  - : Eine clientseitige Speicher-API für signifikante Mengen an strukturierten Daten, einschließlich Dateien.
- [Badging API](/de/docs/Web/API/Badging_API)
  - : Eine Methode, um auf dem Anwendungsicon ein Badge zu setzen, das eine Benachrichtigung mit geringer Störung bereitstellt.
- [Notifications API](/de/docs/Web/API/Notifications_API)
  - : Eine Möglichkeit, Benachrichtigungen zu senden, die auf Betriebssystemebene angezeigt werden.
- [Web Share API](/de/docs/Web/API/Web_Share_API)
  - : Ein Mechanismus zum Teilen von Text, Links, Dateien und anderen Inhalten mit anderen Apps, die der Benutzer auf seinem Gerät ausgewählt hat.
- [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API)
  - : Eine API für PWAs, die auf Desktop-Betriebssystemen installiert sind, die es ermöglicht, die Standard-Fenstertitelzeile auszublenden und das Anzeigen der App auf der gesamten Oberfläche des Anwendungsfensters zu ermöglichen.
