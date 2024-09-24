---
title: Doctype
slug: Glossary/Doctype
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{GlossarySidebar}}

In {{Glossary("HTML")}}, ist der **Doctype** das erforderliche `<!doctype html>`-Präambel, das am Anfang aller Dokumente zu finden ist. Sein einziger Zweck ist es, zu verhindern, dass ein {{Glossary("browser")}} beim Rendern eines Dokuments in den sogenannten ["Quirks-Modus"](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode) wechselt; das heißt, der `<!doctype html>` Doctype stellt sicher, dass der Browser sich nach besten Kräften bemüht, die relevanten Spezifikationen zu befolgen, anstatt einen anderen Rendering-Modus zu verwenden, der mit einigen Spezifikationen nicht kompatibel ist.

Der Doctype ist nicht case-sensitiv. Die Konvention bei MDN-Codebeispielen ist die Verwendung von Kleinbuchstaben, aber es ist auch üblich, ihn als `<!DOCTYPE html>` zu schreiben.

## Siehe auch

- [Definition des DOCTYPE in der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/syntax.html#the-doctype)
- [Quirks-Modus und Standards-Modus](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
- [Document.doctype](/de/docs/Web/API/Document/doctype), eine JavaScript-Methode, die den Doctype zurückgibt
