---
title: Doctype
slug: Glossary/Doctype
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{GlossarySidebar}}

Im {{Glossary("HTML", "HTML")}} ist der **doctype** das erforderliche `<!doctype html>` Präambel, das am Anfang aller Dokumente vorhanden ist. Sein einziger Zweck ist es, zu verhindern, dass ein {{Glossary("browser", "Browser")}} beim Rendern eines Dokuments in den sogenannten ["Quirks-Modus"](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode) wechselt. Das bedeutet, dass der `<!doctype html>` Doctype sicherstellt, dass der Browser sich bemüht, den relevanten Spezifikationen zu folgen, anstatt einen anderen Rendering-Modus zu verwenden, der mit einigen Spezifikationen nicht kompatibel ist.

Der Doctype ist nicht empfindlich gegenüber Groß- und Kleinschreibung. Die Konvention in MDN-Codebeispielen ist die Verwendung von Kleinbuchstaben, aber es ist auch üblich, ihn als `<!DOCTYPE html>` zu schreiben.

## Siehe auch

- [Definition des DOCTYPE in der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/syntax.html#the-doctype)
- [Quirks-Modus und Standardmodus](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode)
- [Document.doctype](/de/docs/Web/API/Document/doctype), eine JavaScript-Methode, die den Doctype zurückgibt
