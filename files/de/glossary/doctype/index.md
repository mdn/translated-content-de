---
title: Doctype
slug: Glossary/Doctype
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{GlossarySidebar}}

Im [HTML](/de/docs/Glossary/HTML) ist der **doctype** die erforderliche `<!doctype html>`-Vorangabe, die am Anfang aller Dokumente zu finden ist. Sein einziger Zweck ist es, zu verhindern, dass ein [Browser](/de/docs/Glossary/browser) in den sogenannten ["quirks mode"](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode) wechselt, wenn er ein Dokument rendert; das heißt, der `<!doctype html>` doctype stellt sicher, dass der Browser nach besten Kräften versucht, den relevanten Spezifikationen zu folgen, anstatt einen anderen Rendering-Modus zu verwenden, der mit einigen Spezifikationen inkompatibel ist.

Der doctype ist nicht case-sensitiv. Die Konvention von MDN-Codebeispielen ist die Verwendung von Kleinbuchstaben, aber es ist auch üblich, ihn als `<!DOCTYPE html>` zu schreiben.

## Siehe auch

- [Definition des DOCTYPE in der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/syntax.html#the-doctype)
- [Quirks Mode und Standards Mode](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
- [Document.doctype](/de/docs/Web/API/Document/doctype), eine JavaScript-Methode, die den Doctype zurückgibt
