---
title: "PresentationRequest: getAvailability() Methode"
short-title: getAvailability()
slug: Web/API/PresentationRequest/getAvailability
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Presentation API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Wenn die `getAvailability()` Methode aufgerufen wird, MUSS der Benutzeragent die folgenden Schritte ausführen:

- Eingabe
  - : _presentationUrls_, eine Liste von [presentation request URLs](https://www.w3.org/TR/presentation-api/#dfn-presentation-request-urls)
- Ausgabe
  - : _P_, ein [Promise](https://www.w3.org/TR/presentation-api/#dfn-promise)

1. Wenn eine der folgenden Bedingungen zutrifft:

   - Das Ergebnis des Ausführens des [Algorithmus, der gemischte Sicherheitskontexte verbietet](https://www.w3.org/TR/presentation-api/#dfn-prohibits-mixed-security-contexts-algorithm) auf dem [Settings-Objekt des Dokuments](https://www.w3.org/TR/presentation-api/#dfn-settings-object) ist `"Prohibits Mixed Security Contexts"` und _presentationUrl_ ist eine [a priori unauthenticated URL](https://www.w3.org/TR/presentation-api/#dfn-a-priori-unauthenticated-url).
   - Das [aktive Sandboxing-Flag-Set des Dokumentobjekts](https://www.w3.org/TR/presentation-api/#dfn-active-sandboxing-flag-set) hat das [sandboxed presentation browsing context flag](https://www.w3.org/TR/presentation-api/#sandboxed-presentation-browsing-context-flag) gesetzt.

   Führen Sie die folgenden Unterstufen aus:

   1. Geben Sie ein [Promise](https://www.w3.org/TR/presentation-api/#dfn-promise) zurück, das mit einem `SecurityError` {{domxref("DOMException")}} abgelehnt wird.
   2. Brechen Sie diese Schritte ab.

2. Lassen Sie _P_ ein neues [Promise](https://www.w3.org/TR/presentation-api/#dfn-promise) sein.
3. Geben Sie _P_ zurück, setzen Sie jedoch die Ausführung dieser Schritte [parallel](https://www.w3.org/TR/presentation-api/#dfn-in-parallel) fort.
4. Wenn der Benutzeragent die [Liste der verfügbaren Präsentationsanzeigen](https://www.w3.org/TR/presentation-api/#dfn-monitor-the-list-of-available-presentation-displays) während der gesamten Dauer des [kontrollierenden Browsing-Kontexts](https://www.w3.org/TR/presentation-api/#dfn-controlling-browsing-context) (z.B. weil der Benutzer diese Funktion deaktiviert hat) nicht überwachen kann, dann:

   1. [Lösen](https://www.w3.org/TR/presentation-api/#dfn-resolving-a-promise) Sie _P_ mit einem neuen `PresentationAvailability`-Objekt, dessen `value`-Eigenschaft auf `false` gesetzt ist.
   2. Brechen Sie alle verbleibenden Schritte ab.

5. Wenn der Benutzeragent die [Liste der verfügbaren Präsentationsanzeigen](https://www.w3.org/TR/presentation-api/#dfn-monitor-the-list-of-available-presentation-displays) nicht kontinuierlich überwachen kann, aber Präsentationsanzeigen finden kann, um eine Verbindung zu starten, dann:

   1. [Lehnen](https://www.w3.org/TR/presentation-api/#dfn-rejecting-a-promise) Sie _P_ mit einem `NotSupportedError` {{domxref("DOMException")}} ab.
   2. Brechen Sie alle verbleibenden Schritte ab.

6. Wenn es ein Tupel (_A_, _presentationUrls_) in der [Menge von Verfügbarkeitsobjekten](https://www.w3.org/TR/presentation-api/#dfn-set-of-availability-objects) gibt, dann:

   1. [Lösen](https://www.w3.org/TR/presentation-api/#dfn-resolving-a-promise) Sie _P_ mit _A_ auf.
   2. Brechen Sie alle verbleibenden Schritte ab.

7. Lassen Sie _A_ ein neues `PresentationAvailability`-Objekt sein, dessen `value`-Eigenschaft wie folgt gesetzt ist:

   1. `false`, wenn die [Liste der verfügbaren Präsentationsanzeigen](https://www.w3.org/TR/presentation-api/#dfn-list-of-available-presentation-displays) leer ist.
   2. `true`, wenn es mindestens eine [kompatible Präsentationsanzeige](https://www.w3.org/TR/presentation-api/#dfn-compatible-presentation-display) für ein Mitglied von _presentationUrls_ gibt. Das bedeutet, es gibt einen Eintrag _(presentationUrl, display)_ in der [Liste der verfügbaren Präsentationsanzeigen](https://www.w3.org/TR/presentation-api/#dfn-list-of-available-presentation-displays) für eine _presentationUrl_ in _presentationUrls_.
   3. `false` andernfalls.

8. Erstellen Sie ein Tupel (_A_, _presentationUrls_) und fügen Sie es der [Menge von Verfügbarkeitsobjekten](https://www.w3.org/TR/presentation-api/#dfn-set-of-availability-objects) hinzu.
9. Führen Sie den Algorithmus aus, um die [Liste der verfügbaren Präsentationsanzeigen](https://www.w3.org/TR/presentation-api/#dfn-monitor-the-list-of-available-presentation-displays) zu überwachen.
10. [Lösen](https://www.w3.org/TR/presentation-api/#dfn-resolving-a-promise) Sie _P_ mit _A_ auf.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
