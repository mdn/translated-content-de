---
title: "PresentationRequest: getAvailability() Methode"
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

1. Wenn eine der folgenden Bedingungen zutrifft:

   - Das Ergebnis der Ausführung des [algorithmus zur Vermeidung gemischter Sicherheitskontexte](https://www.w3.org/TR/presentation-api/#dfn-prohibits-mixed-security-contexts-algorithm) auf dem [Einstellungsobjekt des Dokuments](https://www.w3.org/TR/presentation-api/#dfn-settings-object) ist `"Prohibits Mixed Security Contexts"` und _presentationUrl_ ist eine [a priori nicht authentifizierte URL](https://www.w3.org/TR/presentation-api/#dfn-a-priori-unauthenticated-url).
   - Das [aktive Sandboxing-Flag-Set des Dokuments](https://www.w3.org/TR/presentation-api/#dfn-active-sandboxing-flag-set) hat das [sichere Präsentations-Browsing-Kontext-Flag](https://www.w3.org/TR/presentation-api/#sandboxed-presentation-browsing-context-flag) gesetzt.

   Führen Sie die folgenden Unterschritte aus:

   1. Geben Sie ein [Promise](https://www.w3.org/TR/presentation-api/#dfn-promise) zurück, das mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt wird.
   2. Brechen Sie diese Schritte ab.

2. Lassen Sie _P_ ein neues [Promise](https://www.w3.org/TR/presentation-api/#dfn-promise) sein.
3. Geben Sie _P_ zurück, fahren Sie jedoch fort, diese Schritte [parallel](https://www.w3.org/TR/presentation-api/#dfn-in-parallel) auszuführen.
4. Wenn der Benutzeragent nicht in der Lage ist, [die Liste der verfügbaren Präsentationsanzeigen zu überwachen](https://www.w3.org/TR/presentation-api/#dfn-monitor-the-list-of-available-presentation-displays) für die gesamte Dauer des [kontrollierenden Browsing-Kontexts](https://www.w3.org/TR/presentation-api/#dfn-controlling-browsing-context) (z.B. weil der Benutzer dieses Feature deaktiviert hat), dann:

   1. [Lösen](https://www.w3.org/TR/presentation-api/#dfn-resolving-a-promise) Sie _P_ mit einem neuen `PresentationAvailability`-Objekt auf, dessen `value`-Eigenschaft auf `false` gesetzt ist.
   2. Brechen Sie alle verbleibenden Schritte ab.

5. Wenn der Benutzeragent nicht in der Lage ist, kontinuierlich [die Liste der verfügbaren Präsentationsanzeigen zu überwachen](https://www.w3.org/TR/presentation-api/#dfn-monitor-the-list-of-available-presentation-displays), aber Präsentationsanzeigen finden kann, um eine Verbindung zu starten, dann:

   1. [Lehnen](https://www.w3.org/TR/presentation-api/#dfn-rejecting-a-promise) Sie _P_ mit einem `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException) ab.
   2. Brechen Sie alle verbleibenden Schritte ab.

6. Wenn ein Tupel (_A_, _presentationUrls_) im [Satz der Verfügbarkeitsobjekte](https://www.w3.org/TR/presentation-api/#dfn-set-of-availability-objects) existiert, dann:

   1. [Lösen](https://www.w3.org/TR/presentation-api/#dfn-resolving-a-promise) Sie _P_ mit _A_ auf.
   2. Brechen Sie alle verbleibenden Schritte ab.

7. Lassen Sie _A_ ein neues `PresentationAvailability`-Objekt sein, dessen `value`-Eigenschaft wie folgt gesetzt ist:

   1. `false`, wenn die [Liste der verfügbaren Präsentationsanzeigen](https://www.w3.org/TR/presentation-api/#dfn-list-of-available-presentation-displays) leer ist.
   2. `true`, wenn es mindestens eine [kompatible Präsentationsanzeige](https://www.w3.org/TR/presentation-api/#dfn-compatible-presentation-display) für ein Mitglied von _presentationUrls_ gibt. Das bedeutet, dass es einen Eintrag _(presentationUrl, display)_ in der [Liste der verfügbaren Präsentationsanzeigen](https://www.w3.org/TR/presentation-api/#dfn-list-of-available-presentation-displays) für einige _presentationUrl_ in _presentationUrls_ gibt.
   3. `false` andernfalls.

8. Erstellen Sie ein Tupel (_A_, _presentationUrls_) und fügen Sie es dem [Satz der Verfügbarkeitsobjekte](https://www.w3.org/TR/presentation-api/#dfn-set-of-availability-objects) hinzu.
9. Führen Sie den Algorithmus aus, um [die Liste der verfügbaren Präsentationsanzeigen zu überwachen](https://www.w3.org/TR/presentation-api/#dfn-monitor-the-list-of-available-presentation-displays) .
10. [Lösen](https://www.w3.org/TR/presentation-api/#dfn-resolving-a-promise) Sie _P_ mit _A_ auf.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
