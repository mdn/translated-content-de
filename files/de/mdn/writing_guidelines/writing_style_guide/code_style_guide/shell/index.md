---
title: Richtlinien zum Schreiben von Shell-Prompt-Codebeispielen
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/Shell
l10n:
  sourceCommit: 9e804ddae5a375983996218409b80f6bfd71eb82
---

{{MDNSidebar}}

Die folgenden Richtlinien decken ab, wie Shell-Prompt-Codebeispiele für MDN Web Docs geschrieben werden.

## Was ist eine "Shell"

Eine Shell ist ein Programm, das darauf wartet, dass Sie einen Befehl eingeben und dann die Eingabetaste drücken. Um anzuzeigen, welche Befehle Sie eingeben sollten, sind sie in den Inhalten von MDN Web Docs in Codeblöcken aufgelistet, ähnlich wie Codebeispiele.

Ein solcher Block sieht folgendermaßen aus:

```bash example-good
# This may take a while...
git clone https://github.com/mdn/content
cd content
```

## Allgemeine Richtlinien für Shell-Prompt-Codebeispiele

### Wahl eines Formats

Meinungen über korrekte Einrückung, Leerzeichen und Zeilenlängen waren schon immer umstritten. Diskussionen über diese Themen lenken vom Erstellen und Pflegen von Inhalten ab.

Auf MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatierer, um den Code-Stil konsistent zu halten (und um themenfremde Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) einsehen, um die aktuellen Regeln kennenzulernen, und die [Prettier-Dokumentation](https://prettier.io/docs/en/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Dennoch gibt es einige zusätzliche Regeln, die Sie befolgen müssen.

### Schreiben von Shell-Codeblöcken

Beim Schreiben eines Shell-Codeblocks:

- Schließen Sie kein `$` oder `>` am Anfang einer Shell-Anweisung ein. Es verwirrt mehr als es hilft und ist nicht nützlich beim Kopieren der Anweisungen.
- Kommentare beginnen mit `#`.
- Wählen Sie "bash", um die Sprache in Markdown anzugeben.

## Siehe auch

[Dokumentation zur serverseitigen Entwicklung mit Django](/de/docs/Learn/Server-side/Django) zeigt eine gute Praxis zur Darstellung von Shell-Prompt-Befehlen.
