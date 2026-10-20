---
title: Clipboard
slug: Web/API/Clipboard
l10n:
  sourceCommit: 7b8a3c0a4ab5b4b0c605641e8b64c8da42d8dd51
---

{{APIRef("Clipboard API")}}{{SecureContext_Header}}

Das **`Clipboard`**-Interface der [Clipboard API](/de/docs/Web/API/Clipboard_API) bietet Lese- und Schreibzugriff auf den Inhalt der Systemzwischenablage.
Damit kann eine Webanwendung Funktionen zum Ausschneiden, Kopieren und Einfügen implementieren.

{{InheritanceDiagram}}

Die Systemzwischenablage ist über die globale Eigenschaft [`Navigator.clipboard`](/de/docs/Web/API/Navigator/clipboard) zugänglich.

Alle Methoden der Clipboard API arbeiten asynchron. Sie geben ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald der Zugriff auf die Zwischenablage abgeschlossen ist.
Wird der Zugriff auf die Zwischenablage verweigert, wird das Promise zurückgewiesen.

Alle Methoden erfordern einen [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts).
Weitere Voraussetzungen für die Verwendung der API werden im Abschnitt [Sicherheitsaspekte](/de/docs/Web/API/Clipboard_API#security_considerations) des API-Überblicks erläutert.

## Instanzmethoden

_`Clipboard` basiert auf dem Interface [`EventTarget`](/de/docs/Web/API/EventTarget) und umfasst dessen Methoden._

- [`read()`](/de/docs/Web/API/Clipboard/read)
  - : Liest die Einträge in der Systemzwischenablage und gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Vorgang abgeschlossen ist.
    Jeder Eintrag ist ein [`ClipboardItem`](/de/docs/Web/API/ClipboardItem), das mehrere Darstellungen der kopierten Daten enthalten kann, beispielsweise als HTML und Text.
- [`readText()`](/de/docs/Web/API/Clipboard/readText)
  - : Fordert Text aus der Systemzwischenablage an und gibt ein {{jsxref("Promise")}} zurück, das mit einer Zeichenfolge erfüllt wird, die den Text aus der Zwischenablage enthält, sobald er verfügbar ist.
- [`write()`](/de/docs/Web/API/Clipboard/write)
  - : Schreibt ein oder mehrere [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Objekte in die Systemzwischenablage und gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Vorgang abgeschlossen ist.
- [`writeText()`](/de/docs/Web/API/Clipboard/writeText)
  - : Schreibt Text in die Systemzwischenablage und gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald der Text vollständig in die Zwischenablage kopiert wurde.

## Ereignisse

- [`clipboardchange`](/de/docs/Web/API/Clipboard/clipboardchange_event) {{experimental_inline}}
  - : Wird ausgelöst, wenn sich der Inhalt der Systemzwischenablage auf irgendeine Weise ändert, beispielsweise durch einen Kopierbefehl des Systems oder durch eine API-Methode wie [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand)
