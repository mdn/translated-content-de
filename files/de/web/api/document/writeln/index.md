---
title: "Document: writeln() Methode"
short-title: writeln()
slug: Web/API/Document/writeln
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{ ApiRef("DOM") }}

> [!WARNING]
> Die Verwendung der `document.writeln()`-Methode wird dringend abgeraten.
>
> Wie [die HTML-Spezifikation selbst warnt](<https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#document.write()>):
>
> > Diese Methode hat sehr eigenwilliges Verhalten. In einigen Fällen kann diese Methode den Zustand des [HTML-Parsers](https://html.spec.whatwg.org/multipage/parsing.html#html-parser) beeinträchtigen, während der Parser läuft, was zu einem DOM führt, das nicht mit der Quelle des Dokuments übereinstimmt (z.B. wenn die geschriebene Zeichenfolge "`<plaintext>`" oder "`<!--`" ist). In anderen Fällen kann der Aufruf zunächst die aktuelle Seite löschen, als ob [`document.open()`](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-document-open) aufgerufen worden wäre. In noch weiteren Fällen wird die Methode einfach ignoriert oder es wird eine Ausnahme ausgelöst. Benutzeragenten sind [ausdrücklich dazu berechtigt, die Ausführung von `script`-Elementen, die mit dieser Methode eingefügt wurden, zu vermeiden](https://html.spec.whatwg.org/multipage/parsing.html#document-written-scripts-intervention). Und um die Sache noch schlimmer zu machen, kann das genaue Verhalten dieser Methode in einigen Fällen von der Netzwerklatenz abhängen, was zu schwer zu behebenden Fehlern führen kann. Aus all diesen Gründen wird die Verwendung dieser Methode stark abgeraten.
> > Daher sollte `document.writeln()` vermieden werden — und wenn möglich, sollte vorhandener Code, der diese Methode noch verwendet, aktualisiert werden.

Schreibt eine Zeichenfolge gefolgt von einem Zeilenumbruch in ein Dokument.

## Syntax

```js-nolint
writeln(line)
```

### Parameter

- `line`
  - : Eine Zeichenfolge, die eine Textzeile enthält.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
document.writeln("<p>enter password:</p>");
```

## Hinweise

**document.writeln** ist dasselbe wie [`document.write`](/de/docs/Web/API/Document/write), fügt jedoch einen Zeilenumbruch hinzu.

> **Hinweis:** **document.writeln** (wie **document.write**) funktioniert nicht in XHTML-Dokumenten (es erscheint ein "Operation is not supported" (`NS_ERROR_DOM_NOT_SUPPORTED_ERR`) Fehler in der Fehlerkonsole). Dies ist der Fall, wenn eine lokale Datei mit einer .xhtml-Dateierweiterung geöffnet wird oder für jedes Dokument, das mit einem application/xhtml+xml MIME-Typ bereitgestellt wird. Weitere Informationen sind in den [W3C XHTML FAQ](https://www.w3.org/MarkUp/2004/xhtml-faq#docwrite) verfügbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
