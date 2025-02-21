---
title: Registrierung für den Privacy Sandbox
short-title: Enrollment
slug: Web/Privacy/Guides/Privacy_sandbox/Enrollment
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

Um auf bestimmte Funktionen der Privacy Sandbox zuzugreifen, müssen Entwickler in einigen Browsern einen **Registrierungsprozess** durchlaufen.

Die Registrierung bietet einen Mechanismus zur Verifizierung der Entitäten, die Privacy Sandbox-Funktionen aufrufen, und zur Erfassung der entwicklerspezifischen Daten, die notwendig sind, um diese Funktionen ordnungsgemäß zu konfigurieren und zu nutzen. Der Registrierungsprozess fügt eine zusätzliche Schutzschicht zu den strukturellen Beschränkungen hinzu, die innerhalb jeder Funktion durchgesetzt werden, indem Transparenz darüber geschaffen wird, wer Daten sammelt, und indem Versuche, Funktionen zur Erfassung von mehr Daten als vorgesehen zu missbrauchen, abgeschwächt werden.

Es ist beabsichtigt, die Informationen über jedes Unternehmen, das die Registrierung abschließt, öffentlich zu machen, um prüfbare Transparenz zu gewährleisten.

## Funktionen, die eine Registrierung erfordern

Die folgenden Funktionen erfordern eine Registrierung, um nutzbar zu sein:

- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API)
- [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API)
- Protected Audience API
- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
- [Topics API](/de/docs/Web/API/Topics_API)

Die Dokumentation jeder Funktion enthält detailliertere Informationen dazu, welche Teilfunktionen genau fehlschlagen, wenn die Registrierung nicht abgeschlossen wird, und wie dies geschieht.

## Informationen zur Browservorregistrierung

### Chrome

- **Anweisungen**: [Für die Privacy Sandbox registrieren](https://github.com/privacysandbox/attestation/blob/main/how-to-enroll.md).
- **Tests**: Sie müssen sich nicht registrieren, um Privacy Sandbox-Funktionen lokal zu testen. Um lokale Tests zu ermöglichen, aktivieren Sie das Entwickler-Flag `chrome://flags/#privacy-sandbox-enrollment-overrides`.

## Siehe auch

- [Die Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
