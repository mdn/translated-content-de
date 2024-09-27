---
title: "Document: writeln()-Methode"
short-title: writeln()
slug: Web/API/Document/writeln
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{ ApiRef("DOM") }}

> [!WARNING]
> Die Nutzung der `document.writeln()`-Methode wird stark abgeraten.
>
> Wie [die HTML-Spezifikation selbst warnt](<https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#document.write()>):
>
> > Diese Methode hat ein sehr eigenwilliges Verhalten. In einigen Fällen kann diese Methode den Zustand des [HTML-Parsers](https://html.spec.whatwg.org/multipage/parsing.html#html-parser) beeinflussen, während der Parser läuft, was zu einem DOM führen kann, das nicht der Quelle des Dokuments entspricht (z.B. wenn die geschriebene Zeichenkette die Zeichenkette "`<plaintext>`" oder "`<!--`" ist). In anderen Fällen kann der Aufruf zuerst die aktuelle Seite leeren, als ob [`document.open()`](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-document-open) aufgerufen worden wäre. In weiteren Fällen wird die Methode einfach ignoriert oder es wird eine Ausnahme ausgelöst. Benutzeragenten sind [explizit dazu berechtigt, `script`-Elemente, die über diese Methode eingefügt wurden, nicht auszuführen](https://html.spec.whatwg.org/multipage/parsing.html#document-written-scripts-intervention). Und um die Sache noch schlimmer zu machen, kann das genaue Verhalten dieser Methode in einigen Fällen von der Netzwerklatenz abhängen, was zu Fehlern führen kann, die sehr schwer zu debuggen sind. Aus all diesen Gründen ist die Verwendung dieser Methode stark abzuraten.
> > Daher sollten Sie die Nutzung von `document.writeln()` vermeiden — und wenn möglich, bestehenden Code aktualisieren, der diese Methode noch verwendet.

Schreibt eine Zeichenkette gefolgt von einem Newline-Zeichen in ein Dokument.

## Syntax

```js-nolint
writeln(line)
```

### Parameter

- `line`
  - : Eine Zeichenkette, die eine Textzeile enthält.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
document.writeln("<p>enter password:</p>");
```

## Hinweise

**document.writeln** ist dasselbe wie [`document.write`](/de/docs/Web/API/Document/write), fügt jedoch eine neue Zeile hinzu.

> **Hinweis:** **document.writeln** (wie **document.write**) funktioniert nicht in XHTML-Dokumenten (es erscheint ein "Operation is not supported" (`NS_ERROR_DOM_NOT_SUPPORTED_ERR`) Fehler in der Fehlerkonsole). Dies ist der Fall, wenn eine lokale Datei mit einer .xhtml-Dateierweiterung geöffnet wird oder bei jedem Dokument, das mit einem application/xhtml+xml MIME-Typ ausgeliefert wird. Weitere Informationen sind in den [W3C XHTML FAQ](https://www.w3.org/MarkUp/2004/xhtml-faq#docwrite) verfügbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
