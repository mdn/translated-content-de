---
title: Anmeldung für die Datenschutz-Sandbox
slug: Web/Privacy/Privacy_sandbox/Enrollment
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

Um auf bestimmte Funktionen der Datenschutz-Sandbox zugreifen zu können, müssen Entwickler in Browsern einen **Anmeldeprozess** durchlaufen.

Die Anmeldung bietet eine Möglichkeit, die Entitäten zu überprüfen, die Funktionen der Datenschutz-Sandbox aufrufen, und die entwicklerspezifischen Daten zu sammeln, die zur ordnungsgemäßen Konfiguration und Nutzung erforderlich sind. Der Anmeldeprozess fügt eine zusätzliche Schutzschicht auf den strukturellen Einschränkungen hinzu, die innerhalb jeder Funktion durchgesetzt werden, indem er Transparenz darüber schafft, wer Daten sammelt, und versucht, den Missbrauch von Funktionen zur Erfassung mehr Daten als beabsichtigt zu verhindern.

Es ist beabsichtigt, dass Informationen über jede Firma, die die Anmeldung abschließt, öffentlich gemacht werden, um prüfbare Transparenz zu gewährleisten.

## Funktionen, die eine Anmeldung erfordern

Die folgenden Funktionen erfordern eine Anmeldung, um nutzbar zu sein:

- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API)
- [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API)
- Protected Audience API
- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
- [Topics API](/de/docs/Web/API/Topics_API)

Die Dokumentation jeder Funktion enthält weitere Details dazu, welche Unterfunktionen genau fehlschlagen, wenn die Anmeldung nicht abgeschlossen ist, und wie.

## Anmeldeinformationen für den Browser

### Chrome

- **Anleitungen**: [Für die Datenschutz-Sandbox anmelden](https://github.com/privacysandbox/attestation/blob/main/how-to-enroll.md).
- **Testen**: Sie müssen sich nicht anmelden, um Funktionen der Datenschutz-Sandbox lokal zu testen. Um lokale Tests zu ermöglichen, aktivieren Sie das Entwickler-Flag `chrome://flags/#privacy-sandbox-enrollment-overrides`.

## Siehe auch

- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Privacy", "2", "0", "0")}}
</section>
