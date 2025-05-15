---
title: Anmeldung zur Privacy Sandbox
short-title: Enrollment
slug: Web/Privacy/Guides/Privacy_sandbox/Enrollment
l10n:
  sourceCommit: a8c6558339dafb20c51bc34b2d75c8c1343634ac
---

> [!WARNING]
> Einige der Funktionen, die diesen Anmeldeprozess erfordern, werden derzeit von einem oder mehreren Browseranbietern abgelehnt.
> Details finden Sie in den spezifischen API-Einstiegspunkten.

Um auf bestimmte Funktionen der Privacy Sandbox zuzugreifen, müssen Entwickler in einigen Browsern einen **Anmeldeprozess** durchlaufen.

Die Anmeldung bietet einen Mechanismus, um die Entitäten zu verifizieren, die die Funktionen der Privacy Sandbox aufrufen und die entwicklerspezifischen Daten zu sammeln, die für die korrekte Konfiguration und Nutzung erforderlich sind. Der Anmeldeprozess fügt eine zusätzliche Schutzschicht zu den strukturellen Einschränkungen hinzu, die innerhalb jeder Funktion durchgesetzt werden, indem er Transparenz darüber schafft, wer Daten sammelt, und versucht, Missbrauch der Funktionen zur Erhebung von mehr Daten als beabsichtigt zu minimieren.

Das Ziel ist es, die Informationen über jedes Unternehmen, das die Anmeldung abschließt, öffentlich zu machen, um überprüfbare Transparenz zu gewährleisten.

## Funktionen, die eine Anmeldung erfordern

Die folgenden Funktionen erfordern eine Anmeldung, um genutzt werden zu können:

- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API)
- [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API)
- Protected Audience API
- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
- [Topics API](/de/docs/Web/API/Topics_API)

Die Dokumentation jeder Funktion enthält genauere Informationen darüber, welche Unterfunktionen fehlschlagen, wenn die Anmeldung nicht abgeschlossen wird, und wie.

## Informationen zur Anmeldung im Browser

### Chrome

- **Anleitung**: [Anmelden für die Privacy Sandbox](https://github.com/privacysandbox/attestation/blob/main/how-to-enroll.md).
- **Testen**: Sie müssen sich nicht anmelden, um Privacy Sandbox-Funktionen lokal zu testen. Um lokale Tests zu ermöglichen, aktivieren Sie das Entwickler-Flag `chrome://flags/#privacy-sandbox-enrollment-overrides`.

## Siehe auch

- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
