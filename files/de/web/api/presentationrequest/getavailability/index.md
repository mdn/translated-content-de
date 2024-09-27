---
title: "PresentationRequest: getAvailability()-Methode"
short-title: getAvailability()
slug: Web/API/PresentationRequest/getAvailability
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Presentation API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Wenn die `getAvailability()`-Methode aufgerufen wird, _MUSS_ der Benutzeragent die folgenden Schritte ausführen:

- Eingabe
  - : _presentationUrls_, eine Liste von [Präsentationsanforderungs-URLs](https://www.w3.org/TR/presentation-api/#dfn-presentation-request-urls)
- Ausgabe
  - : _P_, ein [Promise](https://www.w3.org/TR/presentation-api/#dfn-promise)

1. Falls eine der folgenden Bedingungen zutrifft:

   - Das Ergebnis der Ausführung des [Algorithmus zur Verhinderung gemischter Sicherheitskontexte](https://www.w3.org/TR/presentation-api/#dfn-prohibits-mixed-security-contexts-algorithm) auf dem [Einstellungsobjekt des Dokuments](https://www.w3.org/TR/presentation-api/#dfn-settings-object) ist `"Prohibits Mixed Security Contexts"` und _presentationUrl_ ist eine [a priori nicht authentifizierte URL](https://www.w3.org/TR/presentation-api/#dfn-a-priori-unauthenticated-url).
   - Das [aktive Sandboxing-Flagset des Dokumentobjekts](https://www.w3.org/TR/presentation-api/#dfn-active-sandboxing-flag-set) hat das [sandboxed presentation browsing context flag](https://www.w3.org/TR/presentation-api/#sandboxed-presentation-browsing-context-flag) gesetzt.

   Führen Sie die folgenden Unterstufen aus:

   1. Geben Sie ein [Promise](https://www.w3.org/TR/presentation-api/#dfn-promise) zurück, das mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt wurde.
   2. Brechen Sie diese Schritte ab.

2. Lassen Sie _P_ ein neues [Promise](https://www.w3.org/TR/presentation-api/#dfn-promise) sein.
3. Geben Sie _P_ zurück, aber führen Sie diese Schritte [parallel](https://www.w3.org/TR/presentation-api/#dfn-in-parallel) weiter aus.
4. Wenn der Benutzeragent nicht in der Lage ist, die [Liste der verfügbaren Präsentationsanzeigen zu überwachen](https://www.w3.org/TR/presentation-api/#dfn-monitor-the-list-of-available-presentation-displays) für die gesamte Dauer des [steuernden Browsing-Kontextes](https://www.w3.org/TR/presentation-api/#dfn-controlling-browsing-context) (z.B. weil der Benutzer diese Funktion deaktiviert hat), dann:

   1. [Lösen Sie](https://www.w3.org/TR/presentation-api/#dfn-resolving-a-promise) _P_ mit einem neuen `PresentationAvailability`-Objekt, dessen `value`-Eigenschaft auf `false` gesetzt ist.
   2. Brechen Sie alle verbleibenden Schritte ab.

5. Wenn der Benutzeragent nicht in der Lage ist, kontinuierlich die [Liste der verfügbaren Präsentationsanzeigen zu überwachen](https://www.w3.org/TR/presentation-api/#dfn-monitor-the-list-of-available-presentation-displays), aber Präsentationsanzeigen finden kann, um eine Verbindung zu starten, dann:

   1. [Lehnen Sie ab](https://www.w3.org/TR/presentation-api/#dfn-rejecting-a-promise), _P_ mit einem `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException).
   2. Brechen Sie alle verbleibenden Schritte ab.

6. Wenn es ein Tupel (_A_, _presentationUrls_) in der [Menge von Verfügbarkeitsobjekten](https://www.w3.org/TR/presentation-api/#dfn-set-of-availability-objects) gibt, dann:

   1. [Lösen Sie](https://www.w3.org/TR/presentation-api/#dfn-resolving-a-promise) _P_ mit _A_.
   2. Brechen Sie alle verbleibenden Schritte ab.

7. Lassen Sie _A_ ein neues `PresentationAvailability`-Objekt sein, dessen `value`-Eigenschaft wie folgt festgelegt wird:

   1. `false`, wenn die [Liste der verfügbaren Präsentationsanzeigen](https://www.w3.org/TR/presentation-api/#dfn-list-of-available-presentation-displays) leer ist.
   2. `true`, wenn es mindestens eine [kompatible Präsentationsanzeige](https://www.w3.org/TR/presentation-api/#dfn-compatible-presentation-display) für ein Mitglied von _presentationUrls_ gibt. Das heißt, es gibt einen Eintrag _(presentationUrl, display)_ in der [Liste der verfügbaren Präsentationsanzeigen](https://www.w3.org/TR/presentation-api/#dfn-list-of-available-presentation-displays) für einige _presentationUrl_ in _presentationUrls_.
   3. `false` andernfalls.

8. Erstellen Sie ein Tupel (_A_, _presentationUrls_) und fügen Sie es zur [Menge von Verfügbarkeitsobjekten](https://www.w3.org/TR/presentation-api/#dfn-set-of-availability-objects) hinzu.
9. Führen Sie den Algorithmus aus, um die [Liste der verfügbaren Präsentationsanzeigen zu überwachen](https://www.w3.org/TR/presentation-api/#dfn-monitor-the-list-of-available-presentation-displays).
10. [Lösen Sie](https://www.w3.org/TR/presentation-api/#dfn-resolving-a-promise) _P_ mit _A_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
