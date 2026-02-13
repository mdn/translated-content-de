---
title: Zwischenablage
slug: Web/API/Clipboard
l10n:
  sourceCommit: 3712f845b54b2754b2b550c7d7dca18f0277c0ad
---

{{APIRef("Clipboard API")}}{{SecureContext_Header}}

Das **`Clipboard`**-Interface der [Clipboard API](/de/docs/Web/API/Clipboard_API) ermöglicht Lese- und Schreibzugriff auf den Inhalt der Systemzwischenablage. Dies ermöglicht es einer Webanwendung, Funktionen wie Ausschneiden, Kopieren und Einfügen zu implementieren.

{{InheritanceDiagram}}

Die Systemzwischenablage wird über die globale [`Navigator.clipboard`](/de/docs/Web/API/Navigator/clipboard)-Eigenschaft bereitgestellt.

Alle Methoden der Clipboard API arbeiten asynchron; sie geben ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald auf die Zwischenablage zugegriffen wurde. Das Versprechen wird abgelehnt, wenn der Zugriff auf die Zwischenablage verweigert wird.

Alle Methoden erfordern einen [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts). Zusätzliche Anforderungen zur Nutzung der API werden im Abschnitt [Sicherheitsüberlegungen](/de/docs/Web/API/Clipboard_API#security_considerations) des API-Übersichtsthemas behandelt.

## Instanzmethoden

_`Clipboard` basiert auf dem [`EventTarget`](/de/docs/Web/API/EventTarget)-Interface und enthält dessen Methoden._

- [`read()`](/de/docs/Web/API/Clipboard/read)
  - : Fordert beliebige Daten (wie Bilder) von der Zwischenablage an und gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Objekten aufgelöst wird, die den Inhalt der Zwischenablage enthalten.
- [`readText()`](/de/docs/Web/API/Clipboard/readText)
  - : Fordert Text von der Systemzwischenablage an und gibt ein {{jsxref("Promise")}} zurück, das mit einem String aufgelöst wird, der den Text der Zwischenablage enthält, sobald er verfügbar ist.
- [`write()`](/de/docs/Web/API/Clipboard/write)
  - : Schreibt beliebige Daten in die Systemzwischenablage und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Vorgang abgeschlossen ist.
- [`writeText()`](/de/docs/Web/API/Clipboard/writeText)
  - : Schreibt Text in die Systemzwischenablage und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald der Text vollständig in die Zwischenablage kopiert wurde.

## Ereignisse

- [`clipboardchange`](/de/docs/Web/API/Clipboard/clipboardchange_event) {{experimental_inline}}
  - : Wird ausgelöst, wenn sich der Inhalt der Systemzwischenablage in irgendeiner Weise ändert, zum Beispiel durch einen Systemkopierbefehl oder durch eine API-Methode wie [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand)
