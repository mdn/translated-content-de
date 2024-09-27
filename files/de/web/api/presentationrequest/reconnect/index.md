---
title: "PresentationRequest: reconnect()-Methode"
short-title: reconnect()
slug: Web/API/PresentationRequest/reconnect
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Presentation API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Wenn die Methode `reconnect(presentationId)` auf einem `PresentationRequest` _presentationRequest_ aufgerufen wird, _MUSS_ der [Benutzer-Agent](https://www.w3.org/TR/presentation-api/#dfn-user-agents) die folgenden Schritte ausführen, um _eine Präsentation wieder zu verbinden_:

## Eingabe

- _presentationRequest_, das [`PresentationRequest`](https://www.w3.org/TR/presentation-api/#idl-def-presentationrequest)-Objekt, auf dem [`reconnect()`](https://www.w3.org/TR/presentation-api/#dom-presentationrequest-reconnect) aufgerufen wurde.
- _presentationId_, ein gültiger [Präsentationsbezeichner](https://www.w3.org/TR/presentation-api/#dfn-presentation-identifier)

## Ausgabe

_P_, ein [Promise](https://www.w3.org/TR/presentation-api/#dfn-promise).

## Algorithmus

1. Führen Sie mit dem [Einstellungsobjekt](https://www.w3.org/TR/presentation-api/#dfn-settings-object) des Dokuments den [Algorithmus zur Verhinderung gemischter Sicherheitskontexte](https://www.w3.org/TR/presentation-api/#dfn-prohibits-mixed-security-contexts-algorithm) aus.
2. Wenn das Ergebnis des Algorithmus `"Verhindert gemischte Sicherheitskontexte"` ist und die [Präsentationsanfrage-URL](https://www.w3.org/TR/presentation-api/#dfn-presentation-request-urls) von _presentationRequest_ eine [a priori unauthentifizierte URL](https://www.w3.org/TR/presentation-api/#dfn-a-priori-unauthenticated-url) ist, geben Sie ein [Promise](https://www.w3.org/TR/presentation-api/#dfn-promise) zurück, das mit einem [`SecurityError`](https://www.w3.org/TR/presentation-api/#dfn-securityerror) abgelehnt wird, und brechen Sie diese Schritte ab.
3. Wenn die [aktive Sandbox-Flaggenmenge](https://www.w3.org/TR/presentation-api/#dfn-active-sandboxing-flag-set) des Dokumentobjekts die [Sandbox-Präsentations-Browsing-Kontext-Flagge](https://www.w3.org/TR/presentation-api/#sandboxed-presentation-browsing-context-flag) gesetzt hat, geben Sie ein [Promise](https://www.w3.org/TR/presentation-api/#dfn-promise) zurück, das mit einem [`SecurityError`](https://www.w3.org/TR/presentation-api/#dfn-securityerror) abgelehnt wird, und brechen Sie diese Schritte ab.
4. Lassen Sie _P_ ein neues [Promise](https://www.w3.org/TR/presentation-api/#dfn-promise) sein.
5. Geben Sie _P_ zurück, fahren Sie jedoch mit diesen Schritten parallel fort.
6. Durchsuchen Sie die [Menge der kontrollierten Präsentationen](https://www.w3.org/TR/presentation-api/#dfn-set-of-controlled-presentations) nach einer [`PresentationConnection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection), die die folgenden Kriterien erfüllt: Ihr [kontrollierender Browsing-Kontext](https://www.w3.org/TR/presentation-api/#dfn-controlling-browsing-context) ist der aktuelle [Browsing-Kontext](https://www.w3.org/TR/presentation-api/#dfn-browsing-context), ihr [Präsentationsverbindungsstatus](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection-state) ist nicht [`terminated`](https://www.w3.org/TR/presentation-api/#dom-presentationconnectionstate-terminated), ihre [Präsentations-URL](https://www.w3.org/TR/presentation-api/#dfn-presentation-url) ist gleich einer der [Präsentationsanfrage-URLs](https://www.w3.org/TR/presentation-api/#dfn-presentation-request-urls) von _presentationRequest_ und ihr [Präsentationsbezeichner](https://www.w3.org/TR/presentation-api/#dfn-presentation-identifier) ist gleich _presentationId_.
7. Wenn eine solche [`PresentationConnection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection) existiert, führen Sie die folgenden Schritte aus:

   1. Lassen Sie _S_ diese [`PresentationConnection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection) sein.
   2. [Lösen Sie](https://www.w3.org/TR/presentation-api/#dfn-resolving-a-promise) _P_ mit _S_ auf.
   3. Wenn der [Präsentationsverbindungsstatus](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection-state) von _S_ [`connecting`](https://www.w3.org/TR/presentation-api/#dom-presentationconnectionstate-connecting) oder [`connected`](https://www.w3.org/TR/presentation-api/#dom-presentationconnectionstate-connected) ist, brechen Sie alle verbleibenden Schritte ab.
   4. Setzen Sie den [Präsentationsverbindungsstatus](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection-state) von _S_ auf [`connecting`](https://www.w3.org/TR/presentation-api/#dom-presentationconnectionstate-connecting).
   5. [Stellen Sie eine Präsentationsverbindung her](https://www.w3.org/TR/presentation-api/#dfn-establish-a-presentation-connection) mit _S_.
   6. Brechen Sie alle verbleibenden Schritte ab.

8. Durchsuchen Sie die [Menge der kontrollierten Präsentationen](https://www.w3.org/TR/presentation-api/#dfn-set-of-controlled-presentations) nach der ersten [`PresentationConnection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection), die die folgenden Kriterien erfüllt: Ihr [Präsentationsverbindungsstatus](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection-state) ist nicht [`terminated`](https://www.w3.org/TR/presentation-api/#dom-presentationconnectionstate-terminated), ihre [Präsentations-URL](https://www.w3.org/TR/presentation-api/#dfn-presentation-url) ist gleich einer der [Präsentationsanfrage-URLs](https://www.w3.org/TR/presentation-api/#dfn-presentation-request-urls) von _presentationRequest_ und ihr [Präsentationsbezeichner](https://www.w3.org/TR/presentation-api/#dfn-presentation-identifier) ist gleich _presentationId_.
9. Wenn eine solche [`PresentationConnection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection) existiert, lassen Sie _E_ diese [`PresentationConnection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection) sein und führen Sie die folgenden Schritte aus:

   1. Erstellen Sie eine neue [`PresentationConnection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection) _S_.
   2. Setzen Sie den [Präsentationsbezeichner](https://www.w3.org/TR/presentation-api/#dfn-presentation-identifier) von _S_ auf _presentationId_.
   3. Setzen Sie die [Präsentations-URL](https://www.w3.org/TR/presentation-api/#dfn-presentation-url) von _S_ auf die [Präsentations-URL](https://www.w3.org/TR/presentation-api/#dfn-presentation-url) von _E_.
   4. Setzen Sie den [Präsentationsverbindungsstatus](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection-state) von _S_ auf [`connecting`](https://www.w3.org/TR/presentation-api/#dom-presentationconnectionstate-connecting).
   5. Fügen Sie _S_ zur [Menge der kontrollierten Präsentationen](https://www.w3.org/TR/presentation-api/#dfn-set-of-controlled-presentations) hinzu.
   6. [Lösen Sie](https://www.w3.org/TR/presentation-api/#dfn-resolving-a-promise) _P_ mit _S_ auf.
   7. [Reihen Sie eine Aufgabe ein](https://www.w3.org/TR/presentation-api/#dfn-queue-a-task), um ein [vertrauenswürdiges Ereignis](https://www.w3.org/TR/presentation-api/#dfn-trusted-event) mit dem Namen [`connectionavailable`](https://www.w3.org/TR/presentation-api/#dfn-connectionavailable) auszulösen, das die [`PresentationConnectionAvailableEvent`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnectionavailableevent)-Schnittstelle verwendet, mit dem Attribut [`connection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnectionavailableevent-connection) initialisiert zu _S_, bei _presentationRequest_. Das Ereignis darf nicht blasen und abbrechbar sein und sollte keine Standardaktion haben.
   8. [Stellen Sie eine Präsentationsverbindung her](https://www.w3.org/TR/presentation-api/#dfn-establish-a-presentation-connection) mit _S_.
   9. Brechen Sie alle verbleibenden Schritte ab.

10. [Lehnen Sie](https://www.w3.org/TR/presentation-api/#dfn-rejecting-a-promise) _P_ mit einer [`NotFoundError`](https://www.w3.org/TR/presentation-api/#dfn-notfounderror)-Ausnahme ab.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
