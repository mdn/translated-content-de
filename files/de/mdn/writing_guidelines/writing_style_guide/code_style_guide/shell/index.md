---
title: Richtlinien für das Schreiben von Shell-Prompt-Codebeispielen
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/Shell
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

Die folgenden Richtlinien behandeln, wie Shell-Prompt-Codebeispiele für die MDN Web Docs geschrieben werden.

## Was ist eine "Shell"

Eine Shell ist ein Programm, das darauf wartet, dass Sie einen Befehl eingeben und dann die Eingabetaste drücken. Um anzuzeigen, welche Befehle Sie eingeben sollen, werden diese auf den MDN Web Docs in einem Code-Block aufgelistet, ähnlich wie Code-Beispiele.

Ein solcher Block sieht folgendermaßen aus:

```bash example-good
# This may take a while...
git clone https://github.com/mdn/content
cd content
```

## Allgemeine Richtlinien für Shell-Prompt-Codebeispiele

### Format auswählen

Meinungen über korrekte Einrückungen, Leerzeichen und Zeilenlängen sind schon immer umstritten. Diskussionen zu diesen Themen lenken von der Erstellung und Pflege von Inhalten ab.

Auf den MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatter, um den Code-Stil konsistent zu halten (und um themenfremde Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) einsehen, um mehr über die aktuellen Regeln zu erfahren, und die [Prettier-Dokumentation](https://prettier.io/docs/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Dennoch gibt es einige zusätzliche Regeln, die Sie befolgen müssen.

### Schreiben von Shell-Codeblöcken

Beim Schreiben eines Shell-Codeblocks:

- Fügen Sie am Anfang einer Shell-Anweisung kein `$` oder `>` ein. Dies verwirrt mehr, als dass es hilft, und ist beim Kopieren der Anweisungen nicht nützlich.
- Kommentare beginnen mit `#`.
- Wählen Sie "bash", um die Sprache im Markdown anzuzeigen.

## Siehe auch

Die [Django-Server-seitigen Entwicklungsdokumente](/de/docs/Learn_web_development/Extensions/Server-side/Django) zeigen eine gute Praxis bei der Darstellung von Shell-Prompt-Befehlen.
