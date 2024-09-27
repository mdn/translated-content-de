---
title: Richtlinien zum Schreiben von Shell-Prompt-Code-Beispielen
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/Shell
l10n:
  sourceCommit: 9e804ddae5a375983996218409b80f6bfd71eb82
---

{{MDNSidebar}}

Die folgenden Richtlinien behandeln, wie Sie Shell-Prompt-Code-Beispiele für die MDN Web Docs schreiben sollten.

## Was ist eine "Shell"

Eine Shell ist ein Programm, das darauf wartet, dass Sie einen Befehl eingeben und dann die Eingabetaste drücken. Um anzuzeigen, welche Befehle Sie eingeben sollen, werden diese in den MDN Web Docs in einem Codeblock aufgelistet, ähnlich wie Code-Beispiele.

Ein solcher Block sieht folgendermaßen aus:

```bash example-good
# This may take a while...
git clone https://github.com/mdn/content
cd content
```

## Allgemeine Richtlinien für Shell-Prompt-Code-Beispiele

### Auswahl eines Formats

Meinungen zur korrekten Einrückung, Leerzeichen und Zeilenlängen waren schon immer umstritten. Diskussionen über diese Themen lenken vom Erstellen und Verwalten von Inhalten ab.

Auf MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatter, um den Code-Stil konsistent zu halten (und um von nicht zutreffenden Diskussionen abzulenken). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) einsehen, um mehr über die aktuellen Regeln zu erfahren, und die [Prettier-Dokumentation](https://prettier.io/docs/en/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Dennoch gibt es einige zusätzliche Regeln, die Sie befolgen müssen.

### Schreiben von Shell-Codeblöcken

Beim Schreiben eines Shell-Codeblocks:

- Fügen Sie am Anfang einer Shell-Anweisung kein `$` oder `>` ein. Es verwirrt mehr als es hilft und ist beim Kopieren der Anweisungen nicht nützlich.
- Kommentare beginnen mit `#`.
- Wählen Sie "bash", um die Sprache in Markdown anzuzeigen.

## Siehe auch

Die [Django serverseitige Entwicklungsdokumentation](/de/docs/Learn/Server-side/Django) zeigt eine gute Praxis für die Darstellung von Shell-Prompt-Befehlen.
