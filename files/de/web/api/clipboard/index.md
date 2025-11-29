---
title: Clipboard
slug: Web/API/Clipboard
l10n:
  sourceCommit: 7087ffd50a4d81d1b91fe603c26456e9ce398574
---

{{APIRef("Clipboard API")}}{{SecureContext_Header}}

Die **`Clipboard`**-Schnittstelle der [Clipboard API](/de/docs/Web/API/Clipboard_API) bietet Lese- und Schreibzugriff auf den Inhalt der Systemzwischenablage.
Dies ermöglicht es einer Webanwendung, Funktionen zum Ausschneiden, Kopieren und Einfügen zu implementieren.

{{InheritanceDiagram}}

Die Systemzwischenablage wird über die globale Eigenschaft [`Navigator.clipboard`](/de/docs/Web/API/Navigator/clipboard) bereitgestellt.

Alle Methoden der Clipboard API arbeiten asynchron; sie geben ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald der Zugriff auf die Zwischenablage abgeschlossen ist.
Das Versprechen wird abgelehnt, wenn der Zugriff auf die Zwischenablage verweigert wird.

Alle Methoden erfordern einen [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts).
Zusätzliche Anforderungen für die Nutzung der API werden im Abschnitt [Sicherheitsüberlegungen](/de/docs/Web/API/Clipboard_API#security_considerations) des API-Übersichtsthemas besprochen.

## Instanzmethoden

_Die `Clipboard` basiert auf der [`EventTarget`](/de/docs/Web/API/EventTarget)-Schnittstelle und beinhaltet deren Methoden._

- [`read()`](/de/docs/Web/API/Clipboard/read)
  - : Fordert beliebige Daten (wie Bilder) von der Zwischenablage an und gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Objekten aufgelöst wird, die den Inhalt der Zwischenablage enthalten.
- [`readText()`](/de/docs/Web/API/Clipboard/readText)
  - : Fordert Text aus der Systemzwischenablage an und gibt ein {{jsxref("Promise")}} zurück, das mit einem String aufgelöst wird, der den Text der Zwischenablage enthält, sobald er verfügbar ist.
- [`write()`](/de/docs/Web/API/Clipboard/write)
  - : Schreibt beliebige Daten in die Systemzwischenablage und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Vorgang abgeschlossen ist.
- [`writeText()`](/de/docs/Web/API/Clipboard/writeText)
  - : Schreibt Text in die Systemzwischenablage und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald der Text vollständig in die Zwischenablage kopiert ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand)
