---
title: Privacy Sandbox-Anmeldung
slug: Web/Privacy/Privacy_sandbox/Enrollment
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

Um auf bestimmte Funktionen der Privacy Sandbox zuzugreifen, erfordern Browser von Entwicklern, einen **Anmeldeprozess** abzuschließen.

Die Anmeldung bietet einen Mechanismus zur Verifizierung der Entitäten, die die Privacy Sandbox-Funktionen nutzen, und zum Sammeln der entwicklerspezifischen Daten, die zur ordnungsgemäßen Konfiguration und Nutzung benötigt werden. Der Anmeldeprozess fügt eine zusätzliche Schutzschicht zu den strukturellen Einschränkungen hinzu, die innerhalb jeder Funktion durchgesetzt werden, indem er Transparenz darüber schafft, wer Daten sammelt und versucht, Missbrauch zu verhindern, indem mehr Daten gesammelt werden als beabsichtigt.

Die Absicht ist es, Informationen über jedes Unternehmen, das die Anmeldung abschließt, öffentlich zugänglich zu machen, um überprüfbare Transparenz zu bieten.

## Funktionen, die eine Anmeldung erfordern

Die folgenden Funktionen erfordern eine Anmeldung, um verwendbar zu sein:

- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API)
- [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API)
- Protected Audience API
- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
- [Topics API](/de/docs/Web/API/Topics_API)

Die Dokumentation jeder Funktion enthält weitere Details darüber, welche Unterfunktionen genau fehlschlagen werden, wenn die Anmeldung nicht abgeschlossen ist, und wie.

## Informationen zur Browser-Anmeldung

### Chrome

- **Anleitung**: [Für die Privacy Sandbox anmelden](https://github.com/privacysandbox/attestation/blob/main/how-to-enroll.md).
- **Testen**: Sie müssen sich nicht anmelden, um Privacy Sandbox-Funktionen lokal zu testen. Um lokale Tests zu erlauben, aktivieren Sie das Entwicklerschalter `chrome://flags/#privacy-sandbox-enrollment-overrides`.

## Siehe auch

- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Privacy", "2", "0", "0")}}
</section>
