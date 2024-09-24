---
title: Zwischenablage
slug: Web/API/Clipboard
l10n:
  sourceCommit: 7087ffd50a4d81d1b91fe603c26456e9ce398574
---

{{APIRef("Clipboard API")}}{{SecureContext_Header}}

Das **`Clipboard`** Interface der [Clipboard API](/de/docs/Web/API/Clipboard_API) bietet Lese- und Schreibzugriff auf den Inhalt der Systemzwischenablage.
Dies ermöglicht es einer Webanwendung, Funktionen wie Ausschneiden, Kopieren und Einfügen zu implementieren.

{{InheritanceDiagram}}

Die Systemzwischenablage ist über die globale Eigenschaft {{domxref("Navigator.clipboard")}} zugänglich.

Alle Methoden der Clipboard API arbeiten asynchron; sie geben ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald der Zugriff auf die Zwischenablage abgeschlossen ist.
Das Versprechen wird abgelehnt, wenn der Zugriff auf die Zwischenablage verweigert wird.

Alle Methoden erfordern einen [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts).
Weitere Anforderungen für die Verwendung der API werden im Abschnitt [Sicherheitsüberlegungen](/de/docs/Web/API/Clipboard_API#security_considerations) des API-Übersichtsthemas besprochen.

## Instanzmethoden

_`Clipboard` basiert auf dem {{domxref("EventTarget")}} Interface und schließt dessen Methoden ein._

- {{domxref("Clipboard.read()","read()")}}
  - : Fordert beliebige Daten (wie Bilder) von der Zwischenablage an und gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von {{domxref("ClipboardItem")}} Objekten aufgelöst wird, die den Inhalt der Zwischenablage enthalten.
- {{domxref("Clipboard.readText()","readText()")}}
  - : Fordert Text von der Systemzwischenablage an und gibt ein {{jsxref("Promise")}} zurück, das mit einem String erfüllt wird, der den Text der Zwischenablage enthält, sobald dieser verfügbar ist.
- {{domxref("Clipboard.write()","write()")}}
  - : Schreibt beliebige Daten in die Systemzwischenablage und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Vorgang abgeschlossen ist.
- {{domxref("Clipboard.writeText()","writeText()")}}
  - : Schreibt Text in die Systemzwischenablage und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald der Text vollständig in die Zwischenablage kopiert ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Document.execCommand()")}}
