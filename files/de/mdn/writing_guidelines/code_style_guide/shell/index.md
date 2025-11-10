---
title: Richtlinien zum Schreiben von Shell-Prompt-Codebeispielen
short-title: Shell script examples
slug: MDN/Writing_guidelines/Code_style_guide/Shell
l10n:
  sourceCommit: 0e7eafea05cd771c86e77947639f3396e7a59b2b
---

Die folgenden Richtlinien beschreiben, wie Sie Shell-Prompt-Codebeispiele für MDN Web Docs schreiben.

## Was ist eine "Shell"

Eine Shell ist ein Programm, das darauf wartet, dass Sie einen Befehl eingeben und dann die Eingabetaste drücken. Um anzuzeigen, welche Befehle Sie eingeben sollten, werden diese auf MDN Web Docs in einem Codeblock aufgelistet, ähnlich wie Codebeispiele.

Ein solcher Block sieht folgendermaßen aus:

```bash example-good
# This may take a while...
git clone https://github.com/mdn/content
cd content
```

## Allgemeine Richtlinien für Shell-Prompt-Codebeispiele

### Format wählen

Meinungen zu korrekter Einrückung, Leerzeichen und Zeilenlängen waren schon immer umstritten. Diskussionen zu diesen Themen lenken von der Erstellung und Pflege von Inhalten ab.

Auf MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatter, um den Code-Stil konsistent zu halten (und um ablenkende Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) einsehen, um mehr über die aktuellen Regeln zu erfahren, und die [Prettier-Dokumentation](https://prettier.io/docs/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Dennoch gibt es einige zusätzliche Regeln, die Sie beachten müssen.

### Schreiben von Shell-Codeblöcken

Beim Schreiben eines Shell-Codeblocks:

- Verwenden Sie kein `$` oder `>` am Anfang einer Shell-Anweisung. Es verwirrt mehr, als es hilft, und ist nicht nützlich beim Kopieren der Anweisungen.
- Kommentare beginnen mit `#`.
- Wählen Sie "bash", um die Sprache in Markdown anzugeben.

## Siehe auch

[Dokumente zur Django-Server-seitigen Entwicklung](/de/docs/Learn_web_development/Extensions/Server-side/Django) zeigen eine gute Praxis der Präsentation von Shell-Prompt-Befehlen.
