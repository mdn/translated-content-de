---
title: Privacy Sandbox-Anmeldung
slug: Web/Privacy/Privacy_sandbox/Enrollment
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

Um auf bestimmte Funktionen des Privacy Sandbox zuzugreifen, müssen Entwickler einen **Anmeldeprozess** durchlaufen.

Die Anmeldung bietet einen Mechanismus zur Überprüfung der Entitäten, die Privacy Sandbox-Funktionen aufrufen, und zur Sammlung der entwicklerspezifischen Daten, die benötigt werden, um diese ordnungsgemäß zu konfigurieren und zu verwenden. Der Anmeldeprozess fügt zusätzlich zu den strukturellen Einschränkungen, die innerhalb jeder Funktion durchgesetzt werden, eine weitere Schutzschicht hinzu, indem er Transparenz darüber schafft, wer Daten sammelt, und die Versuche, Funktionen missbräuchlich zu verwenden, um mehr Daten zu sammeln als vorgesehen, mindert.

Es ist beabsichtigt, dass die Informationen über jede Firma, die die Anmeldung abgeschlossen hat, öffentlich gemacht werden, um überprüfbare Transparenz zu bieten.

## Funktionen, die eine Anmeldung erfordern

Die folgenden Funktionen erfordern eine Anmeldung, um genutzt werden zu können:

- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API)
- [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API)
- Protected Audience API
- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
- [Topics API](/de/docs/Web/API/Topics_API)

Die Dokumentation jeder Funktion enthält weitere Details dazu, welche Unterfunktionen bei nicht abgeschlossener Anmeldung fehlschlagen werden und wie.

## Informationen zur Browser-Anmeldung

### Chrome

- **Anleitung**: [Für die Privacy Sandbox anmelden](https://github.com/privacysandbox/attestation/blob/main/how-to-enroll.md).
- **Testen**: Sie müssen sich nicht anmelden, um Privacy Sandbox-Funktionen lokal zu testen. Um lokales Testen zu ermöglichen, aktivieren Sie das Entwickler-Flag `chrome://flags/#privacy-sandbox-enrollment-overrides`.

## Siehe auch

- [Die Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Privacy", "2", "0", "0")}}
</section>
