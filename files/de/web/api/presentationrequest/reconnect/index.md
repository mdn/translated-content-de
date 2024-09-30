---
title: "PresentationRequest: reconnect() Methode"
short-title: reconnect()
slug: Web/API/PresentationRequest/reconnect
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Presentation API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Wenn die `reconnect(presentationId)`-Methode auf einem `PresentationRequest`-Objekt namens _presentationRequest_ aufgerufen wird, _MUSS_ der [User Agent](https://www.w3.org/TR/presentation-api/#dfn-user-agents) die folgenden Schritte ausführen, um _eine Präsentation wiederzuverbinden_:

## Eingang

- _presentationRequest_, das [`PresentationRequest`](https://www.w3.org/TR/presentation-api/#idl-def-presentationrequest)-Objekt, auf dem [`reconnect()`](https://www.w3.org/TR/presentation-api/#dom-presentationrequest-reconnect) aufgerufen wurde.
- _presentationId_, ein gültiger [Präsentationsidentifier](https://www.w3.org/TR/presentation-api/#dfn-presentation-identifier)

## Ausgang

_P_, ein [Promise](https://www.w3.org/TR/presentation-api/#dfn-promise).

## Algorithmus

1. Verwenden Sie das [Einstellungsobjekt](https://www.w3.org/TR/presentation-api/#dfn-settings-object) des Dokuments, um den [Algorithmus zum Verbot von gemischten Sicherheitskontexten](https://www.w3.org/TR/presentation-api/#dfn-prohibits-mixed-security-contexts-algorithm) auszuführen.
2. Wenn das Ergebnis des Algorithmus "Verbietet gemischte Sicherheitskontexte" ist und die [Präsentationsanfrage-URL](https://www.w3.org/TR/presentation-api/#dfn-presentation-request-urls) von _presentationRequest_ eine [a priori nicht authentifizierte URL](https://www.w3.org/TR/presentation-api/#dfn-a-priori-unauthenticated-url) ist, dann geben Sie ein [Promise](https://www.w3.org/TR/presentation-api/#dfn-promise) zurück, das mit einem [`SecurityError`](https://www.w3.org/TR/presentation-api/#dfn-securityerror) abgelehnt wird, und brechen Sie diese Schritte ab.
3. Wenn das [aktive Sandbox-Flag-Set](https://www.w3.org/TR/presentation-api/#dfn-active-sandboxing-flag-set) des Dokumentobjekts das [Sandboxed-Presentation-Browsing-Kontext-Flag](https://www.w3.org/TR/presentation-api/#sandboxed-presentation-browsing-context-flag) gesetzt hat, dann geben Sie ein [Promise](https://www.w3.org/TR/presentation-api/#dfn-promise) zurück, das mit einem [`SecurityError`](https://www.w3.org/TR/presentation-api/#dfn-securityerror) abgelehnt wird, und brechen Sie diese Schritte ab.
4. Lassen Sie _P_ ein neues [Promise](https://www.w3.org/TR/presentation-api/#dfn-promise) sein.
5. Geben Sie _P_ zurück, aber fahren Sie fort, diese Schritte parallel auszuführen.
6. Suchen Sie das [Set der kontrollierten Präsentationen](https://www.w3.org/TR/presentation-api/#dfn-set-of-controlled-presentations) nach einer [`PresentationConnection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection), die folgende Kriterien erfüllt: Sein [kontrollierender Browsing-Kontext](https://www.w3.org/TR/presentation-api/#dfn-controlling-browsing-context) ist der aktuelle [Browsing-Kontext](https://www.w3.org/TR/presentation-api/#dfn-browsing-context), sein [Präsentationsverbindungsstatus](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection-state) ist nicht [`terminated`](https://www.w3.org/TR/presentation-api/#dom-presentationconnectionstate-terminated), seine [Präsentations-URL](https://www.w3.org/TR/presentation-api/#dfn-presentation-url) entspricht einer der [Präsentationsanfrage-URLs](https://www.w3.org/TR/presentation-api/#dfn-presentation-request-urls) von _presentationRequest_ und sein [Präsentationsidentifier](https://www.w3.org/TR/presentation-api/#dfn-presentation-identifier) entspricht _presentationId_.
7. Wenn eine solche [`PresentationConnection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection) existiert, führen Sie die folgenden Schritte aus:

   1. Lassen Sie _S_ diese [`PresentationConnection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection) sein.
   2. [Lösen](https://www.w3.org/TR/presentation-api/#dfn-resolving-a-promise) Sie _P_ mit _S_ auf.
   3. Wenn der [Präsentationsverbindungsstatus](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection-state) von _S_ [`connecting`](https://www.w3.org/TR/presentation-api/#dom-presentationconnectionstate-connecting) oder [`connected`](https://www.w3.org/TR/presentation-api/#dom-presentationconnectionstate-connected) ist, brechen Sie alle verbleibenden Schritte ab.
   4. Setzen Sie den [Präsentationsverbindungsstatus](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection-state) von _S_ auf [`connecting`](https://www.w3.org/TR/presentation-api/#dom-presentationconnectionstate-connecting).
   5. [Stellen Sie eine Präsentationsverbindung her](https://www.w3.org/TR/presentation-api/#dfn-establish-a-presentation-connection) mit _S_.
   6. Brechen Sie alle verbleibenden Schritte ab.

8. Suchen Sie das [Set der kontrollierten Präsentationen](https://www.w3.org/TR/presentation-api/#dfn-set-of-controlled-presentations) nach der ersten [`PresentationConnection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection), die folgende Kriterien erfüllt: Sein [Präsentationsverbindungsstatus](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection-state) ist nicht [`terminated`](https://www.w3.org/TR/presentation-api/#dom-presentationconnectionstate-terminated), seine [Präsentations-URL](https://www.w3.org/TR/presentation-api/#dfn-presentation-url) entspricht einer der [Präsentationsanfrage-URLs](https://www.w3.org/TR/presentation-api/#dfn-presentation-request-urls) von _presentationRequest_, und sein [Präsentationsidentifier](https://www.w3.org/TR/presentation-api/#dfn-presentation-identifier) entspricht _presentationId_.
9. Wenn eine solche [`PresentationConnection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection) existiert, lassen Sie _E_ diese [`PresentationConnection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection) sein, und führen Sie die folgenden Schritte aus:

   1. Erstellen Sie eine neue [`PresentationConnection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection) _S_.
   2. Setzen Sie den [Präsentationsidentifier](https://www.w3.org/TR/presentation-api/#dfn-presentation-identifier) von _S_ auf _presentationId_.
   3. Setzen Sie die [Präsentations-URL](https://www.w3.org/TR/presentation-api/#dfn-presentation-url) von _S_ auf die [Präsentations-URL](https://www.w3.org/TR/presentation-api/#dfn-presentation-url) von _E_.
   4. Setzen Sie den [Präsentationsverbindungsstatus](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection-state) von _S_ auf [`connecting`](https://www.w3.org/TR/presentation-api/#dom-presentationconnectionstate-connecting).
   5. Fügen Sie _S_ dem [Set der kontrollierten Präsentationen](https://www.w3.org/TR/presentation-api/#dfn-set-of-controlled-presentations) hinzu.
   6. [Lösen](https://www.w3.org/TR/presentation-api/#dfn-resolving-a-promise) Sie _P_ mit _S_ auf.
   7. [Stellen Sie eine Aufgabe in die Warteschlange](https://www.w3.org/TR/presentation-api/#dfn-queue-a-task), um ein [vertrauenswürdiges Ereignis](https://www.w3.org/TR/presentation-api/#dfn-trusted-event) mit dem Namen [`connectionavailable`](https://www.w3.org/TR/presentation-api/#dfn-connectionavailable), das die [`PresentationConnectionAvailableEvent`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnectionavailableevent)-Schnittstelle mit dem [`connection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnectionavailableevent-connection)-Attribut, initialisiert mit _S_, bei _presentationRequest_ verwendet, auszulösen. Das Ereignis darf nicht gebubbelt und stornierbar sein und sollte keine Standardaktion haben.
   8. [Stellen Sie eine Präsentationsverbindung her](https://www.w3.org/TR/presentation-api/#dfn-establish-a-presentation-connection) mit _S_.
   9. Brechen Sie alle verbleibenden Schritte ab.

10. [Lehnen Sie](https://www.w3.org/TR/presentation-api/#dfn-rejecting-a-promise) _P_ mit einer [`NotFoundError`](https://www.w3.org/TR/presentation-api/#dfn-notfounderror)-Ausnahme ab.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
