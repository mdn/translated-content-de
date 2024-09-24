---
title: BroadcastChannel
slug: Web/API/BroadcastChannel
l10n:
  sourceCommit: 50a45d52fd9f45f1ca30b546af5920d0ccda82dc
---

{{APIRef("Broadcast Channel API")}} {{AvailableInWorkers}}

Die **`BroadcastChannel`**-Schnittstelle repräsentiert einen benannten Kanal, den jeder {{glossary("browsing context")}} eines bestimmten {{glossary("origin")}} abonnieren kann. Sie ermöglicht die Kommunikation zwischen verschiedenen Dokumenten (in verschiedenen Fenstern, Tabs, Frames oder iframes) desselben Ursprungs. Nachrichten werden über ein {{domxref("BroadcastChannel/message_event", "message")}}-Ereignis gesendet, das bei allen `BroadcastChannel`-Objekten ausgelöst wird, die den Kanal hören, außer dem Objekt, das die Nachricht gesendet hat.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("BroadcastChannel.BroadcastChannel", "BroadcastChannel()")}}
  - : Erstellt ein Objekt, das mit dem benannten Kanal verknüpft ist.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, {{domxref("EventTarget")}}._

- {{domxref("BroadcastChannel.name")}} {{ReadOnlyInline}}
  - : Gibt einen String zurück, den Namen des Kanals.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von ihrem Elternteil, {{domxref("EventTarget")}}._

- {{domxref("BroadcastChannel.postMessage()")}}
  - : Sendet die Nachricht, eines beliebigen Objekttyps, an jedes `BroadcastChannel`-Objekt, das denselben Kanal abhört.
- {{domxref("BroadcastChannel.close()")}}
  - : Schließt das Kanalobjekt, was darauf hinweist, dass es keine neuen Nachrichten mehr empfangen wird und es schließlich vom Garbage Collector entfernt werden kann.

## Ereignisse

_Diese Schnittstelle erbt auch Ereignisse von ihrem Elternteil, {{domxref("EventTarget")}}._

- {{domxref("BroadcastChannel/message_event", "message")}}
  - : Wird ausgelöst, wenn eine Nachricht auf dem Kanal eingeht.
    Auch über die `onmessage`-Eigenschaft verfügbar.
- {{domxref("BroadcastChannel/messageerror_event", "messageerror")}}
  - : Wird ausgelöst, wenn eine Nachricht eingeht, die nicht deserialisiert werden kann.
    Auch über die `onmessageerror`-Eigenschaft verfügbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eine andere, umfangreichere Methode zur Kommunikation zwischen Browser-Kontexten: {{domxref("ServiceWorker")}}.
- [Übersicht der Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API)
