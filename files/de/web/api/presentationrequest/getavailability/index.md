---
title: "PresentationRequest: getAvailability() Methode"
short-title: getAvailability()
slug: Web/API/PresentationRequest/getAvailability
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Presentation API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Wenn die `getAvailability()` Methode aufgerufen wird, _MUSS_ der Benutzeragent die folgenden Schritte ausführen:

- Eingabe
  - : _presentationUrls_, eine Liste von [presentation request URLs](https://www.w3.org/TR/presentation-api/#dfn-presentation-request-urls)
- Ausgabe
  - : _P_, ein [Promise](https://www.w3.org/TR/presentation-api/#dfn-promise)

1. Wenn eine der folgenden Bedingungen zutrifft:

   - Das Ergebnis des Ausführens des [Algorithmus zur Verhinderung gemischter Sicherheitskontexte](https://www.w3.org/TR/presentation-api/#dfn-prohibits-mixed-security-contexts-algorithm) auf dem [Einstellungsobjekt](https://www.w3.org/TR/presentation-api/#dfn-settings-object) des Dokuments ist `"Prohibits Mixed Security Contexts"` und _presentationUrl_ ist eine [a priori nicht authentifizierte URL](https://www.w3.org/TR/presentation-api/#dfn-a-priori-unauthenticated-url).
   - Das [aktive Sandboxing-Flag-Set](https://www.w3.org/TR/presentation-api/#dfn-active-sandboxing-flag-set) des Dokumentobjekts hat das [sandboxed presentation browsing context flag](https://www.w3.org/TR/presentation-api/#sandboxed-presentation-browsing-context-flag) gesetzt.

   Führen Sie die folgenden Unterschritte aus:

   1. Geben Sie ein [Promise](https://www.w3.org/TR/presentation-api/#dfn-promise) zurück, das mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt wird.
   2. Diese Schritte abbrechen.

2. Lassen Sie _P_ ein neues [Promise](https://www.w3.org/TR/presentation-api/#dfn-promise) sein.
3. Geben Sie _P_ zurück, führen Sie aber die folgenden Schritte [parallel](https://www.w3.org/TR/presentation-api/#dfn-in-parallel) weiter aus.
4. Wenn der Benutzeragent nicht in der Lage ist, [die Liste der verfügbaren Präsentationsdisplays zu überwachen](https://www.w3.org/TR/presentation-api/#dfn-monitor-the-list-of-available-presentation-displays) für die gesamte Dauer des [kontrollierenden Browsing-Kontexts](https://www.w3.org/TR/presentation-api/#dfn-controlling-browsing-context) (z.B. weil der Benutzer diese Funktion deaktiviert hat), dann:

   1. [Lösen](https://www.w3.org/TR/presentation-api/#dfn-resolving-a-promise) Sie _P_ mit einem neuen `PresentationAvailability` Objekt auf, dessen `value` Eigenschaft auf `false` gesetzt ist.
   2. Alle weiteren Schritte abbrechen.

5. Wenn der Benutzeragent nicht in der Lage ist, kontinuierlich [die Liste der verfügbaren Präsentationsdisplays zu überwachen](https://www.w3.org/TR/presentation-api/#dfn-monitor-the-list-of-available-presentation-displays), aber Präsentationsdisplays finden kann, um eine Verbindung zu starten, dann:

   1. [Lehnen](https://www.w3.org/TR/presentation-api/#dfn-rejecting-a-promise) Sie _P_ mit einem `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException) ab.
   2. Alle weiteren Schritte abbrechen.

6. Wenn es ein Tupel (_A_, _presentationUrls_) in der [Menge der Verfügbarkeitsobjekte](https://www.w3.org/TR/presentation-api/#dfn-set-of-availability-objects) gibt, dann:

   1. [Lösen](https://www.w3.org/TR/presentation-api/#dfn-resolving-a-promise) Sie _P_ mit _A_ auf.
   2. Alle weiteren Schritte abbrechen.

7. Lassen Sie _A_ ein neues `PresentationAvailability` Objekt sein, dessen `value` Eigenschaft wie folgt gesetzt ist:

   1. `false`, wenn die [Liste der verfügbaren Präsentationsdisplays](https://www.w3.org/TR/presentation-api/#dfn-list-of-available-presentation-displays) leer ist.
   2. `true`, wenn es mindestens ein [kompatibles Präsentationsdisplay](https://www.w3.org/TR/presentation-api/#dfn-compatible-presentation-display) für ein Mitglied von _presentationUrls_ gibt. Das bedeutet, es gibt einen Eintrag _(presentationUrl, display)_ in der [Liste der verfügbaren Präsentationsdisplays](https://www.w3.org/TR/presentation-api/#dfn-list-of-available-presentation-displays) für ein _presentationUrl_ in _presentationUrls_.
   3. `false` andernfalls.

8. Erstellen Sie ein Tupel (_A_, _presentationUrls_) und fügen Sie es der [Menge der Verfügbarkeitsobjekte](https://www.w3.org/TR/presentation-api/#dfn-set-of-availability-objects) hinzu.
9. Führen Sie den Algorithmus aus, um [die Liste der verfügbaren Präsentationsdisplays zu überwachen](https://www.w3.org/TR/presentation-api/#dfn-monitor-the-list-of-available-presentation-displays).
10. [Lösen](https://www.w3.org/TR/presentation-api/#dfn-resolving-a-promise) Sie _P_ mit _A_ auf.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
