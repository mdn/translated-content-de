---
title: Anmeldung für die Privacy Sandbox
short-title: Enrollment
slug: Web/Privacy/Guides/Privacy_sandbox/Enrollment
l10n:
  sourceCommit: 923adb616baa87402ca965ebd18a73380cc84d27
---

> [!WARNING]
> Einige der Funktionen, die diesen Anmeldeprozess erfordern, werden derzeit von einem oder mehreren Browser-Herstellern abgelehnt.
> Siehe die spezifischen API-Einstiegspunkte für weitere Details.

Um auf bestimmte Funktionen der Privacy Sandbox zuzugreifen, müssen Entwickler im Browser einen **Anmeldeprozess** abschließen.

Die Anmeldung bietet einen Mechanismus zur Verifizierung der Entitäten, die Privacy-Sandbox-Funktionen aufrufen, und zur Sammlung der entwicklerspezifischen Daten, die für die korrekte Konfiguration und Nutzung erforderlich sind. Der Anmeldeprozess fügt eine zusätzliche Schutzschicht hinzu, indem er Transparenz bringt, wer Daten sammelt, und Versuche zur missbräuchlichen Nutzung der Funktionen zur Erfassung von mehr Daten als vorgesehen abmildert.

Das Ziel ist es, die Informationen über jedes Unternehmen, das die Anmeldung abschließt, öffentlich zugänglich zu machen, um prüfbare Transparenz zu bieten.

## Funktionen, die eine Anmeldung erfordern

Die folgenden Funktionen erfordern eine Anmeldung, um nutzbar zu sein:

- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) {{deprecated_inline}}
- [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API)
- Protected Audience API
- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) {{deprecated_inline}}
- [Topics API](/de/docs/Web/API/Topics_API) {{deprecated_inline}}

Die Dokumentation jeder Funktion enthält weitere Details darüber, welche Unterfunktionen genau fehlschlagen, wenn die Anmeldung nicht abgeschlossen wird, und wie.

## Informationen zur Browser-Anmeldung

### Chrome

- **Anleitungen**: [Anmeldung für die Privacy Sandbox](https://github.com/privacysandbox/attestation/blob/main/how-to-enroll.md).
- **Testen**: Sie müssen sich nicht anmelden, um Privacy-Sandbox-Funktionen lokal zu testen. Um lokales Testen zu ermöglichen, aktivieren Sie das `chrome://flags/#privacy-sandbox-enrollment-overrides` Entwicklerflag.

## Siehe auch

- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
