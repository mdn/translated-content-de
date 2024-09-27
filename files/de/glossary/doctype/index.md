---
title: Doctype
slug: Glossary/Doctype
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{GlossarySidebar}}

In [HTML](/de/docs/Glossary/HTML) ist das **doctype** das erforderliche `<!doctype html>`-Präambel, das sich am Anfang aller Dokumente befindet. Sein einziger Zweck besteht darin, zu verhindern, dass ein [Browser](/de/docs/Glossary/browser) in den sogenannten ["Quirks-Modus"](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode) wechselt, wenn er ein Dokument rendert; das heißt, das `<!doctype html>`-Doctype stellt sicher, dass der Browser bestrebt ist, den relevanten Spezifikationen zu folgen, anstatt einen anderen Rendering-Modus zu verwenden, der mit einigen Spezifikationen nicht kompatibel ist.

Das Doctype ist nicht case-sensitiv. Die Konvention in MDN-Codebeispielen ist die Verwendung von Kleinbuchstaben, aber es ist auch üblich, es als `<!DOCTYPE html>` zu schreiben.

## Siehe auch

- [Definition des DOCTYPE in der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/syntax.html#the-doctype)
- [Quirks-Modus und Standards-Modus](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
- [Document.doctype](/de/docs/Web/API/Document/doctype), eine JavaScript-Methode, die das Doctype zurückgibt
