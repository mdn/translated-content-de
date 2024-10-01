---
title: BroadcastChannel
slug: Web/API/BroadcastChannel
l10n:
  sourceCommit: 50a45d52fd9f45f1ca30b546af5920d0ccda82dc
---

{{APIRef("Broadcast Channel API")}} {{AvailableInWorkers}}

Das **`BroadcastChannel`**-Interface repräsentiert einen benannten Kanal, auf den jeder {{Glossary("browsing_context", "Browsing-Kontext")}} eines bestimmten {{Glossary("origin", "Ursprungs")}} zugreifen kann. Es ermöglicht die Kommunikation zwischen verschiedenen Dokumenten (in unterschiedlichen Fenstern, Tabs, Frames oder iframes) desselben Ursprungs. Nachrichten werden über ein [`message`](/de/docs/Web/API/BroadcastChannel/message_event)-Ereignis gesendet, das bei allen `BroadcastChannel`-Objekten ausgelöst wird, die den Kanal abhören, mit Ausnahme des Objekts, das die Nachricht gesendet hat.

{{InheritanceDiagram}}

## Konstruktor

- [`BroadcastChannel()`](/de/docs/Web/API/BroadcastChannel/BroadcastChannel)
  - : Erstellt ein Objekt, das mit dem benannten Kanal verknüpft ist.

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`BroadcastChannel.name`](/de/docs/Web/API/BroadcastChannel/name) {{ReadOnlyInline}}
  - : Gibt einen String zurück, den Namen des Kanals.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`BroadcastChannel.postMessage()`](/de/docs/Web/API/BroadcastChannel/postMessage)
  - : Sendet die Nachricht, unabhängig vom Objekttyp, an jedes `BroadcastChannel`-Objekt, das denselben Kanal abhört.
- [`BroadcastChannel.close()`](/de/docs/Web/API/BroadcastChannel/close)
  - : Schließt das Kanalobjekt, zeigt an, dass es keine neuen Nachrichten mehr erhalten wird, und ermöglicht es, schließlich vom Garbage Collector bereinigt zu werden.

## Ereignisse

_Dieses Interface erbt auch Ereignisse von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`message`](/de/docs/Web/API/BroadcastChannel/message_event)
  - : Wird ausgelöst, wenn eine Nachricht auf dem Kanal eintrifft.
    Auch über die `onmessage`-Eigenschaft verfügbar.
- [`messageerror`](/de/docs/Web/API/BroadcastChannel/messageerror_event)
  - : Wird ausgelöst, wenn eine Nachricht eintrifft, die nicht deserialisiert werden kann.
    Auch über die `onmessageerror`-Eigenschaft verfügbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eine andere, umfangreichere Möglichkeit der Kommunikation zwischen Browser-Kontexten: [`ServiceWorker`](/de/docs/Web/API/ServiceWorker).
- [Überblick über die Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API)
