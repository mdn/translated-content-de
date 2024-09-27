---
title: CloseEvent
slug: Web/API/CloseEvent
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("Websockets API")}}{{AvailableInWorkers}}

Ein `CloseEvent` wird an Clients gesendet, die [WebSockets](/de/docs/Glossary/WebSockets) verwenden, wenn die Verbindung geschlossen wird. Dies wird an den Listener übermittelt, der durch das `onclose` Attribut des `WebSocket` Objekts angegeben ist.

{{InheritanceDiagram}}

## Konstruktor

- [`CloseEvent()`](/de/docs/Web/API/CloseEvent/CloseEvent)
  - : Erstellt ein neues `CloseEvent`.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Eltern, [`Event`](/de/docs/Web/API/Event)._

- [`CloseEvent.code`](/de/docs/Web/API/CloseEvent/code) {{ReadOnlyInline}}
  - : Gibt einen `unsigned short` zurück, der den Schließungscode enthält.
- [`CloseEvent.reason`](/de/docs/Web/API/CloseEvent/reason) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Grund angibt, warum der Server die Verbindung geschlossen hat. Dies ist spezifisch für den jeweiligen Server und das Sub-Protokoll.
- [`CloseEvent.wasClean`](/de/docs/Web/API/CloseEvent/wasClean) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob die Verbindung sauber geschlossen wurde oder nicht.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von ihrem Eltern, [`Event`](/de/docs/Web/API/Event)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebSocket`](/de/docs/Web/API/WebSocket)
