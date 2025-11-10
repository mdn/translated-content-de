---
title: Doctype
slug: Glossary/Doctype
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

In {{Glossary("HTML", "HTML")}} ist der **Doctype** das erforderliche `<!doctype html>` Präambel, das sich am Anfang aller Dokumente findet. Sein einziger Zweck ist es, zu verhindern, dass ein {{Glossary("browser", "Browser")}} beim Rendern eines Dokuments in den sogenannten ["Quirks-Modus"](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode) wechselt; das heißt, der `<!doctype html>` Doctype stellt sicher, dass der Browser sich möglichst an die relevanten Spezifikationen hält, anstatt einen anderen Rendering-Modus zu verwenden, der mit einigen Spezifikationen inkompatibel ist.

Der Doctype ist nicht case-sensitiv. Die Konvention in MDN-Codebeispielen ist die Kleinschreibung, aber es ist auch üblich, ihn als `<!DOCTYPE html>` zu schreiben.

## Siehe auch

- [Definition des DOCTYPE in der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/syntax.html#the-doctype)
- [Quirks-Modus und Standards-Modus](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode)
- [Document.doctype](/de/docs/Web/API/Document/doctype), eine JavaScript-Methode, die den Doctype zurückgibt
