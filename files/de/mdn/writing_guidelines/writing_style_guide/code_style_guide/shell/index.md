---
title: Richtlinien zum Schreiben von Shell-Prompt-Codebeispielen
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/Shell
l10n:
  sourceCommit: 9e804ddae5a375983996218409b80f6bfd71eb82
---

{{MDNSidebar}}

Die folgenden Richtlinien erläutern, wie Shell-Prompt-Codebeispiele für die MDN Web Docs geschrieben werden.

## Was ist eine "Shell"

Eine Shell ist ein Programm, das darauf wartet, dass Sie einen Befehl eingeben und dann die Eingabetaste drücken. Um anzuzeigen, welche Befehle Sie eingeben sollen, werden sie auf den MDN Web Docs in einem Codeblock aufgelistet, ähnlich wie bei Codebeispielen.

Ein solcher Block sieht folgendermaßen aus:

```bash example-good
# Dies kann eine Weile dauern...
git clone https://github.com/mdn/content
cd content
```

## Allgemeine Richtlinien für Shell-Prompt-Codebeispiele

### Auswahl eines Formats

Meinungen über korrekte Einrückung, Leerzeichen und Zeilenlängen sind immer umstritten. Diskussionen über diese Themen lenken von der Erstellung und Pflege von Inhalten ab.

Auf den MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatter, um den Stil des Codes konsistent zu halten (und um von themenfremden Diskussionen abzulenken). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) einsehen, um die aktuellen Regeln kennenzulernen, und die [Prettier-Dokumentation](https://prettier.io/docs/en/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Dennoch gibt es einige zusätzliche Regeln, die Sie befolgen müssen.

### Schreiben von Shell-Codeblöcken

Beim Schreiben eines Shell-Codeblocks:

- Fügen Sie nicht `$` oder `>` am Anfang einer Shell-Anweisung hinzu. Es verwirrt mehr als es hilft und ist beim Kopieren der Anweisungen nicht nützlich.
- Kommentare beginnen mit `#`.
- Wählen Sie "bash", um die Sprache in Markdown anzugeben.

## Siehe auch

[Dokumente zur Django-Serverentwicklung](/de/docs/Learn/Server-side/Django) zeigen eine gute Präsentation von Shell-Prompt-Befehlen.
