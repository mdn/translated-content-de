---
title: "PresentationRequest: reconnect() Methode"
short-title: reconnect()
slug: Web/API/PresentationRequest/reconnect
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Presentation API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Wenn die Methode `reconnect(presentationId)` auf einem `PresentationRequest` _presentationRequest_ aufgerufen wird, _MUSS_ der [Benutzeragent](https://www.w3.org/TR/presentation-api/#dfn-user-agents) die folgenden Schritte ausführen, um eine _Wiedeverbindung zu einer Präsentation_ herzustellen:

## Eingabe

- _presentationRequest_, das [`PresentationRequest`](https://www.w3.org/TR/presentation-api/#idl-def-presentationrequest)-Objekt, auf dem [`reconnect()`](https://www.w3.org/TR/presentation-api/#dom-presentationrequest-reconnect) aufgerufen wurde.
- _presentationId_, ein gültiger [Präsentationsidentifikator](https://www.w3.org/TR/presentation-api/#dfn-presentation-identifier).

## Ausgabe

_P_, ein [Promise](https://www.w3.org/TR/presentation-api/#dfn-promise).

## Algorithmus

1. Verwenden Sie das [Einstellungsobjekt](https://www.w3.org/TR/presentation-api/#dfn-settings-object) des Dokuments, um den [Algorithmus, der gemischte Sicherheitskontexte verbietet](https://www.w3.org/TR/presentation-api/#dfn-prohibits-mixed-security-contexts-algorithm) auszuführen.
2. Wenn das Ergebnis des Algorithmus `"Prohibits Mixed Security Contexts"` ist und die [Präsentationsanfrage-URL](https://www.w3.org/TR/presentation-api/#dfn-presentation-request-urls) von _presentationRequest_ eine [a priori nicht authentifizierte URL](https://www.w3.org/TR/presentation-api/#dfn-a-priori-unauthenticated-url) ist, geben Sie ein [Promise](https://www.w3.org/TR/presentation-api/#dfn-promise) zurück, das mit einem [`SecurityError`](https://www.w3.org/TR/presentation-api/#dfn-securityerror) abgelehnt wird, und brechen Sie diese Schritte ab.
3. Wenn das [aktive Sandboxing-Flag-Set](https://www.w3.org/TR/presentation-api/#dfn-active-sandboxing-flag-set) des Dokumentobjekts das [sandboxed presentation browsing context flag](https://www.w3.org/TR/presentation-api/#sandboxed-presentation-browsing-context-flag) gesetzt hat, dann geben Sie ein [Promise](https://www.w3.org/TR/presentation-api/#dfn-promise) zurück, das mit einem [`SecurityError`](https://www.w3.org/TR/presentation-api/#dfn-securityerror) abgelehnt wird, und brechen Sie diese Schritte ab.
4. Lassen Sie _P_ ein neues [Promise](https://www.w3.org/TR/presentation-api/#dfn-promise) sein.
5. Geben Sie _P_ zurück, führen Sie jedoch diese Schritte parallel weiter aus.
6. Durchsuchen Sie die [Menge der kontrollierten Präsentationen](https://www.w3.org/TR/presentation-api/#dfn-set-of-controlled-presentations) nach einer [`PresentationConnection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection), die die folgenden Kriterien erfüllt: ihr [controlling browsing context](https://www.w3.org/TR/presentation-api/#dfn-controlling-browsing-context) ist der aktuelle [browsing context](https://www.w3.org/TR/presentation-api/#dfn-browsing-context), ihr [presentation connection state](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection-state) ist nicht [`terminated`](https://www.w3.org/TR/presentation-api/#dom-presentationconnectionstate-terminated), ihre [presentation URL](https://www.w3.org/TR/presentation-api/#dfn-presentation-url) ist gleich einer der [presentation request URLs](https://www.w3.org/TR/presentation-api/#dfn-presentation-request-urls) von _presentationRequest_ und ihr [presentation identifier](https://www.w3.org/TR/presentation-api/#dfn-presentation-identifier) ist gleich _presentationId_.
7. Wenn eine solche [`PresentationConnection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection) existiert, führen Sie die folgenden Schritte aus:

   1. Lassen Sie _S_ diese [`PresentationConnection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection) sein.
   2. [Lösen](https://www.w3.org/TR/presentation-api/#dfn-resolving-a-promise) Sie _P_ mit _S_ auf.
   3. Wenn der [presentation connection state](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection-state) von _S_ [`connecting`](https://www.w3.org/TR/presentation-api/#dom-presentationconnectionstate-connecting) oder [`connected`](https://www.w3.org/TR/presentation-api/#dom-presentationconnectionstate-connected) ist, brechen Sie alle verbleibenden Schritte ab.
   4. Setzen Sie den [presentation connection state](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection-state) von _S_ auf [`connecting`](https://www.w3.org/TR/presentation-api/#dom-presentationconnectionstate-connecting).
   5. [Stellen Sie eine Präsentationsverbindung her](https://www.w3.org/TR/presentation-api/#dfn-establish-a-presentation-connection) mit _S_.
   6. Brechen Sie alle verbleibenden Schritte ab.

8. Durchsuchen Sie die [Menge der kontrollierten Präsentationen](https://www.w3.org/TR/presentation-api/#dfn-set-of-controlled-presentations) nach der ersten [`PresentationConnection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection), die die folgenden Kriterien erfüllt: ihr [presentation connection state](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection-state) ist nicht [`terminated`](https://www.w3.org/TR/presentation-api/#dom-presentationconnectionstate-terminated), ihre [presentation URL](https://www.w3.org/TR/presentation-api/#dfn-presentation-url) ist gleich einer der [presentation request URLs](https://www.w3.org/TR/presentation-api/#dfn-presentation-request-urls) von _presentationRequest_, und ihr [presentation identifier](https://www.w3.org/TR/presentation-api/#dfn-presentation-identifier) ist gleich _presentationId_.
9. Wenn eine solche [`PresentationConnection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection) existiert, lassen Sie _E_ diese [`PresentationConnection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection) sein, und führen Sie die folgenden Schritte aus:

   1. Erstellen Sie eine neue [`PresentationConnection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection) _S_.
   2. Setzen Sie den [presentation identifier](https://www.w3.org/TR/presentation-api/#dfn-presentation-identifier) von _S_ auf _presentationId_.
   3. Setzen Sie die [presentation URL](https://www.w3.org/TR/presentation-api/#dfn-presentation-url) von _S_ auf die [presentation URL](https://www.w3.org/TR/presentation-api/#dfn-presentation-url) von _E_.
   4. Setzen Sie den [presentation connection state](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection-state) von _S_ auf [`connecting`](https://www.w3.org/TR/presentation-api/#dom-presentationconnectionstate-connecting).
   5. Fügen Sie _S_ zur [Menge der kontrollierten Präsentationen](https://www.w3.org/TR/presentation-api/#dfn-set-of-controlled-presentations) hinzu.
   6. [Lösen](https://www.w3.org/TR/presentation-api/#dfn-resolving-a-promise) Sie _P_ mit _S_ auf.
   7. [Reihen Sie eine Aufgabe ein](https://www.w3.org/TR/presentation-api/#dfn-queue-a-task), um ein [vertrauenswürdiges Ereignis](https://www.w3.org/TR/presentation-api/#dfn-trusted-event) mit dem Namen [`connectionavailable`](https://www.w3.org/TR/presentation-api/#dfn-connectionavailable) auszulösen, das die [`PresentationConnectionAvailableEvent`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnectionavailableevent)-Schnittstelle verwendet, mit dem [`connection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnectionavailableevent-connection)-Attribut initialisiert auf _S_, bei _presentationRequest_. Das Ereignis darf nicht blubbern und stornierbar sein und sollte keine Standardaktion haben.
   8. [Stellen Sie eine Präsentationsverbindung her](https://www.w3.org/TR/presentation-api/#dfn-establish-a-presentation-connection) mit _S_.
   9. Brechen Sie alle verbleibenden Schritte ab.

10. [Lehnen](https://www.w3.org/TR/presentation-api/#dfn-rejecting-a-promise) Sie _P_ mit einer [`NotFoundError`](https://www.w3.org/TR/presentation-api/#dfn-notfounderror)-Ausnahme ab.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
