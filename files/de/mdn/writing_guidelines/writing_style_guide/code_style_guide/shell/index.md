---
title: Richtlinien für das Schreiben von Shell-Prompt-Codebeispielen
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/Shell
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{MDNSidebar}}

Die folgenden Richtlinien beschreiben, wie Shell-Prompt-Codebeispiele für die MDN Web Docs geschrieben werden.

## Was ist eine "Shell"

Eine Shell ist ein Programm, das darauf wartet, dass Sie einen Befehl eintippen und die Eingabetaste drücken. Um anzuzeigen, welche Befehle Sie eingeben sollen, werden diese Inhalte auf MDN Web Docs in einem Codeblock aufgelistet, ähnlich wie Codebeispiele.

Ein solcher Block sieht so aus:

```bash example-good
# This may take a while...
git clone https://github.com/mdn/content
cd content
```

## Allgemeine Richtlinien für Shell-Prompt-Codebeispiele

### Auswahl eines Formats

Meinungen zur korrekten Einrückung, zu Leerzeichen und Zeilenlängen waren schon immer umstritten. Diskussionen über diese Themen lenken von der Erstellung und Pflege von Inhalten ab.

Auf den MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatierer, um den Stil des Codes einheitlich zu halten (und um themenfremde Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) einsehen, um mehr über die aktuellen Regeln zu erfahren, und lesen Sie die [Prettier-Dokumentation](https://prettier.io/docs/en/index.html).

Prettier formatiert den gesamten Code und hält den Stil konsistent. Trotzdem gibt es einige zusätzliche Regeln, die Sie beachten müssen.

### Schreiben von Shell-Codeblöcken

Beim Schreiben eines Shell-Codeblocks:

- Fügen Sie kein `$` oder `>` zu Beginn einer Shell-Anweisung hinzu. Dies verwirrt mehr, als es hilft, und ist beim Kopieren der Anweisungen nicht nützlich.
- Kommentare beginnen mit `#`.
- Wählen Sie "bash", um die Sprache im Markdown anzugeben.

## Siehe auch

Die [Django Server-Side-Entwicklungsdokumentation](/de/docs/Learn_web_development/Extensions/Server-side/Django) zeigt eine gute Praxis der Präsentation von Shell-Prompt-Befehlen.
