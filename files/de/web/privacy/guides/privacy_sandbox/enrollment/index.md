---
title: Anmeldung für Privacy Sandbox
short-title: Enrollment
slug: Web/Privacy/Guides/Privacy_sandbox/Enrollment
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

Um auf bestimmte Funktionen der Privacy Sandbox zugreifen zu können, müssen Entwickler in einigen Browsern einen **Anmeldungsprozess** durchlaufen.

Die Anmeldung bietet einen Mechanismus zur Überprüfung der Entitäten, die Privacy Sandbox-Funktionen aufrufen, und zum Sammeln der entwicklerspezifischen Daten, die für die ordnungsgemäße Konfiguration und Nutzung erforderlich sind. Der Anmeldeprozess fügt eine zusätzliche Schutzschicht zu den strukturellen Einschränkungen hinzu, die innerhalb jeder Funktion durchgesetzt werden, indem er Transparenz darüber schafft, wer Daten sammelt, und Versuche zur missbräuchlichen Nutzung der Funktionen zur Erfassung mehr Daten als beabsichtigt, mindert.

Es ist beabsichtigt, dass Informationen über jedes Unternehmen, das die Anmeldung abgeschlossen hat, öffentlich gemacht werden, um eine überprüfbare Transparenz zu gewährleisten.

## Funktionen, die eine Anmeldung erfordern

Für die Nutzung der folgenden Funktionen ist eine Anmeldung erforderlich:

- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API)
- [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API)
- Protected Audience API
- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
- [Topics API](/de/docs/Web/API/Topics_API)

Die Dokumentation jeder Funktion enthält weitere Details darüber, welche Unterfunktionen genau fehlschlagen werden, wenn die Anmeldung nicht abgeschlossen ist, und wie dies geschieht.

## Browser-Anmeldeinformationen

### Chrome

- **Anleitung**: [Für die Privacy Sandbox anmelden](https://github.com/privacysandbox/attestation/blob/main/how-to-enroll.md).
- **Testen**: Sie müssen sich nicht anmelden, um die Privacy Sandbox-Funktionen lokal zu testen. Um lokales Testen zu ermöglichen, aktivieren Sie das Entwicklerflag `chrome://flags/#privacy-sandbox-enrollment-overrides`.

## Siehe auch

- [Die Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
