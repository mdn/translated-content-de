---
title: Richtlinien für das Schreiben von Shell-Prompt-Codebeispielen
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/Shell
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

Die folgenden Richtlinien decken ab, wie Shell-Prompt-Codebeispiele für MDN Web Docs erstellt werden sollten.

## Was ist eine "Shell"

Eine Shell ist ein Programm, das darauf wartet, dass Sie einen Befehl eingeben und dann die Eingabetaste drücken. Um anzuzeigen, welche Befehle Sie eingeben sollten, werden diese auf MDN Web Docs in einem Codeblock aufgeführt, ähnlich wie Codebeispiele.

Ein solcher Block sieht folgendermaßen aus:

```bash example-good
# This may take a while...
git clone https://github.com/mdn/content
cd content
```

## Allgemeine Richtlinien für Shell-Prompt-Codebeispiele

### Format wählen

Meinungen über die richtige Einrückung, den Leerraum und die Zeilenlängen waren schon immer umstritten. Diskussionen zu diesen Themen lenken von der Erstellung und Pflege von Inhalten ab.

Auf MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatter, um den Stil des Codes konsistent zu halten (und um von themenfremden Diskussionen abzulenken). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) einsehen, um sich über die aktuellen Regeln zu informieren, und die [Prettier-Dokumentation](https://prettier.io/docs/en/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Dennoch gibt es ein paar zusätzliche Regeln, die Sie beachten müssen.

### Schreiben von Shell-Codeblöcken

Beim Schreiben eines Shell-Codeblocks:

- Fügen Sie am Anfang einer Shell-Anweisung kein `$` oder `>` ein. Das verwirrt mehr, als es hilft und ist nicht nützlich, wenn man die Anweisungen kopiert.
- Kommentare beginnen mit `#`.
- Wählen Sie "bash", um die Sprache in Markdown anzugeben.

## Siehe auch

Die [Django-Server-seitige-Entwicklung-Dokumentation](/de/docs/Learn_web_development/Extensions/Server-side/Django) zeigt eine gute Praxis für die Präsentation von Shell-Prompt-Befehlen.
