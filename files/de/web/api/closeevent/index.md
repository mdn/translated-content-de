---
title: CloseEvent
slug: Web/API/CloseEvent
l10n:
  sourceCommit: f56df7cd1613660f455108682e3d1e95fc4749e8
---

{{APIRef("Websockets API")}}

Ein `CloseEvent` wird an Clients gesendet, die {{Glossary("WebSockets")}} verwenden, wenn die Verbindung geschlossen wird. Dies wird an den Listener gesendet, der durch das `WebSocket`-Objekt im `onclose`-Attribut angegeben ist.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("CloseEvent.CloseEvent", "CloseEvent()")}}
  - : Erstellt ein neues `CloseEvent`.

## Instanzeigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, {{domxref("Event")}}._

- {{domxref("CloseEvent.code")}} {{ReadOnlyInline}}
  - : Gibt einen `unsigned short` zurück, der den Schließcode enthält.
- {{domxref("CloseEvent.reason")}} {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Grund angibt, warum der Server die Verbindung geschlossen hat. Dies ist spezifisch für den jeweiligen Server und das Sub-Protokoll.
- {{domxref("CloseEvent.wasClean")}} {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob die Verbindung sauber geschlossen wurde oder nicht.

## Instanzmethoden

_Diese Schnittstelle erbt auch Methoden von ihrem Elternteil, {{domxref("Event")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebSocket")}}
