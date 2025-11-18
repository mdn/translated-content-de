---
title: "PresentationRequest: reconnect() Methode"
short-title: reconnect()
slug: Web/API/PresentationRequest/reconnect
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Presentation API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Wenn die Methode `reconnect(presentationId)` auf einem `PresentationRequest` _presentationRequest_ aufgerufen wird, _MUSS_ der [User-Agent](https://www.w3.org/TR/presentation-api/#dfn-user-agents) die folgenden Schritte ausführen, um sich _wieder mit einer Präsentation zu verbinden_:

## Eingabe

- _presentationRequest_, das [`PresentationRequest`](https://www.w3.org/TR/presentation-api/#idl-def-presentationrequest)-Objekt, auf dem [`reconnect()`](https://www.w3.org/TR/presentation-api/#dom-presentationrequest-reconnect) aufgerufen wurde.
- _presentationId_, ein gültiger [Präsentationsidentifikator](https://www.w3.org/TR/presentation-api/#dfn-presentation-identifier)

## Ausgabe

_P_, ein [Promise](https://www.w3.org/TR/presentation-api/#dfn-promise).

## Algorithmus

1. Verwenden Sie das [Einstellungsobjekt des Dokuments](https://www.w3.org/TR/presentation-api/#dfn-settings-object), um den [Algorithmus zur Verhinderung von gemischten Sicherheitskontexten](https://www.w3.org/TR/presentation-api/#dfn-prohibits-mixed-security-contexts-algorithm) durchzuführen.
2. Wenn das Ergebnis des Algorithmus `"Verhindert gemischte Sicherheitskontexte"` ist und die [Präsentationsanfrage-URL](https://www.w3.org/TR/presentation-api/#dfn-presentation-request-urls) von _presentationRequest_ eine [a priori nicht authentifizierte URL](https://www.w3.org/TR/presentation-api/#dfn-a-priori-unauthenticated-url) ist, dann geben Sie ein [Promise](https://www.w3.org/TR/presentation-api/#dfn-promise) zurück, das mit einem [`SecurityError`](https://www.w3.org/TR/presentation-api/#dfn-securityerror) abgelehnt wird, und brechen Sie diese Schritte ab.
3. Wenn das [aktive Sandboxing-Flag-Set des Dokumentobjekts](https://www.w3.org/TR/presentation-api/#dfn-active-sandboxing-flag-set) das [sandboxed presentation browsing context flag](https://www.w3.org/TR/presentation-api/#sandboxed-presentation-browsing-context-flag) enthält, geben Sie ein [Promise](https://www.w3.org/TR/presentation-api/#dfn-promise) zurück, das mit einem [`SecurityError`](https://www.w3.org/TR/presentation-api/#dfn-securityerror) abgelehnt wird, und brechen Sie diese Schritte ab.
4. Lassen Sie _P_ ein neues [Promise](https://www.w3.org/TR/presentation-api/#dfn-promise) sein.
5. Geben Sie _P_ zurück, aber führen Sie diese Schritte parallel weiter aus.
6. Durchsuchen Sie die [Menge der kontrollierten Präsentationen](https://www.w3.org/TR/presentation-api/#dfn-set-of-controlled-presentations) nach einer [`PresentationConnection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection), die die folgenden Kriterien erfüllt: ihr [steuernder Browser-Kontext](https://www.w3.org/TR/presentation-api/#dfn-controlling-browsing-context) ist der aktuelle [Browsing-Kontext](https://www.w3.org/TR/presentation-api/#dfn-browsing-context), ihr [Präsentationsverbindungszustand](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection-state) ist nicht [`terminated`](https://www.w3.org/TR/presentation-api/#dom-presentationconnectionstate-terminated), ihre [Präsentations-URL](https://www.w3.org/TR/presentation-api/#dfn-presentation-url) entspricht einer der [Präsentationsanfrage-URLs](https://www.w3.org/TR/presentation-api/#dfn-presentation-request-urls) von _presentationRequest_ und ihr [Präsentationsidentifikator](https://www.w3.org/TR/presentation-api/#dfn-presentation-identifier) entspricht _presentationId_.
7. Wenn eine solche [`PresentationConnection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection) existiert, führen Sie die folgenden Schritte aus:
   1. Lassen Sie _S_ diese [`PresentationConnection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection) sein.
   2. [Lösen](https://www.w3.org/TR/presentation-api/#dfn-resolving-a-promise) Sie _P_ mit _S_ auf.
   3. Wenn der [Präsentationsverbindungszustand](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection-state) von _S_ [`connecting`](https://www.w3.org/TR/presentation-api/#dom-presentationconnectionstate-connecting) oder [`connected`](https://www.w3.org/TR/presentation-api/#dom-presentationconnectionstate-connected) ist, dann brechen Sie alle verbleibenden Schritte ab.
   4. Setzen Sie den [Präsentationsverbindungszustand](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection-state) von _S_ auf [`connecting`](https://www.w3.org/TR/presentation-api/#dom-presentationconnectionstate-connecting).
   5. [Erstellen Sie eine Präsentationsverbindung](https://www.w3.org/TR/presentation-api/#dfn-establish-a-presentation-connection) mit _S_.
   6. Brechen Sie alle verbleibenden Schritte ab.

8. Durchsuchen Sie die [Menge der kontrollierten Präsentationen](https://www.w3.org/TR/presentation-api/#dfn-set-of-controlled-presentations) nach der ersten [`PresentationConnection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection), die die folgenden Kriterien erfüllt: ihr [Präsentationsverbindungszustand](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection-state) ist nicht [`terminated`](https://www.w3.org/TR/presentation-api/#dom-presentationconnectionstate-terminated), ihre [Präsentations-URL](https://www.w3.org/TR/presentation-api/#dfn-presentation-url) entspricht einer der [Präsentationsanfrage-URLs](https://www.w3.org/TR/presentation-api/#dfn-presentation-request-urls) von _presentationRequest_, und ihr [Präsentationsidentifikator](https://www.w3.org/TR/presentation-api/#dfn-presentation-identifier) entspricht _presentationId_.
9. Wenn eine solche [`PresentationConnection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection) existiert, lassen Sie _E_ diese [`PresentationConnection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection) sein und führen Sie die folgenden Schritte aus:
   1. Erstellen Sie eine neue [`PresentationConnection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection) _S_.
   2. Setzen Sie den [Präsentationsidentifikator](https://www.w3.org/TR/presentation-api/#dfn-presentation-identifier) von _S_ auf _presentationId_.
   3. Setzen Sie die [Präsentations-URL](https://www.w3.org/TR/presentation-api/#dfn-presentation-url) von _S_ auf die [Präsentations-URL](https://www.w3.org/TR/presentation-api/#dfn-presentation-url) von _E_.
   4. Setzen Sie den [Präsentationsverbindungszustand](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection-state) von _S_ auf [`connecting`](https://www.w3.org/TR/presentation-api/#dom-presentationconnectionstate-connecting).
   5. Fügen Sie _S_ zur [Menge der kontrollierten Präsentationen](https://www.w3.org/TR/presentation-api/#dfn-set-of-controlled-presentations) hinzu.
   6. [Lösen](https://www.w3.org/TR/presentation-api/#dfn-resolving-a-promise) Sie _P_ mit _S_ auf.
   7. [Warteschlangieren Sie eine Aufgabe](https://www.w3.org/TR/presentation-api/#dfn-queue-a-task), um ein [vertrauenswürdiges Ereignis](https://www.w3.org/TR/presentation-api/#dfn-trusted-event) mit dem Namen [`connectionavailable`](https://www.w3.org/TR/presentation-api/#dfn-connectionavailable) auszulösen, das die [`PresentationConnectionAvailableEvent`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnectionavailableevent)-Schnittstelle mit dem [`connection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnectionavailableevent-connection)-Attribut verwendet, das auf _S_ initialisiert ist, bei _presentationRequest_. Das Ereignis darf nicht blubbern und abgebrochen werden und sollte keine Standardaktion haben.
   8. [Erstellen Sie eine Präsentationsverbindung](https://www.w3.org/TR/presentation-api/#dfn-establish-a-presentation-connection) mit _S_.
   9. Brechen Sie alle verbleibenden Schritte ab.

10. [Lehnen](https://www.w3.org/TR/presentation-api/#dfn-rejecting-a-promise) Sie _P_ mit einer [`NotFoundError`](https://www.w3.org/TR/presentation-api/#dfn-notfounderror) Ausnahme ab.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
