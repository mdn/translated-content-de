---
title: Zwischenablage
slug: Web/API/Clipboard
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Clipboard API")}}{{SecureContext_Header}}

Das **`Clipboard`**-Interface der [Zwischenablage-API](/de/docs/Web/API/Clipboard_API) bietet Lese- und Schreibzugriff auf die Inhalte der Systemzwischenablage. Dies ermöglicht es einer Webanwendung, Funktionen zum Ausschneiden, Kopieren und Einfügen zu implementieren.

{{InheritanceDiagram}}

Die Systemzwischenablage wird über die globale Eigenschaft [`Navigator.clipboard`](/de/docs/Web/API/Navigator/clipboard) bereitgestellt.

Alle Methoden der Zwischenablage-API arbeiten asynchron; sie geben ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald der Zugriff auf die Zwischenablage abgeschlossen ist. Das Versprechen wird abgelehnt, wenn der Zugriff auf die Zwischenablage verweigert wird.

Alle Methoden erfordern einen [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts). Weitere Anforderungen für die Nutzung der API werden im Abschnitt [Sicherheitsüberlegungen](/de/docs/Web/API/Clipboard_API#security_considerations) des API-Übersichtsthemas erläutert.

## Instanzmethoden

_`Clipboard` basiert auf dem [`EventTarget`](/de/docs/Web/API/EventTarget)-Interface und enthält dessen Methoden._

- [`read()`](/de/docs/Web/API/Clipboard/read)
  - : Fordert beliebige Daten (wie Bilder) aus der Zwischenablage an und gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Objekten aufgelöst wird, die die Inhalte der Zwischenablage enthalten.
- [`readText()`](/de/docs/Web/API/Clipboard/readText)
  - : Fordert Text aus der Systemzwischenablage an und gibt ein {{jsxref("Promise")}} zurück, das mit einem String aufgelöst wird, der den Text der Zwischenablage enthält, sobald er verfügbar ist.
- [`write()`](/de/docs/Web/API/Clipboard/write)
  - : Schreibt beliebige Daten in die Systemzwischenablage und gibt ein {{jsxref("Promise")}} zurück, das bei Abschluss der Operation aufgelöst wird.
- [`writeText()`](/de/docs/Web/API/Clipboard/writeText)
  - : Schreibt Text in die Systemzwischenablage und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald der Text vollständig in die Zwischenablage kopiert wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand)
