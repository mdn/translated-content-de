---
title: "Document: writeln() Methode"
short-title: writeln()
slug: Web/API/Document/writeln
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{ ApiRef("DOM") }}

> [!WARNING]
> Die Verwendung der `document.writeln()` Methode wird dringend abgeraten.
>
> Wie [die HTML-Spezifikation selbst warnt](<https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#document.write()>):
>
> > Diese Methode hat ein sehr eigenwilliges Verhalten. In einigen Fällen kann diese Methode den Zustand des [HTML-Parsers](https://html.spec.whatwg.org/multipage/parsing.html#html-parser) beeinflussen, während dieser ausgeführt wird, was zu einem DOM führen kann, das nicht mit der Quelle des Dokuments übereinstimmt (z.B. wenn die geschriebene Zeichenkette die Zeichenkette "`<plaintext>`" oder "`<!--`" ist). In anderen Fällen kann der Aufruf zuerst die aktuelle Seite leeren, als ob [`document.open()`](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-document-open) aufgerufen worden wäre. In weiteren Fällen wird die Methode einfach ignoriert oder es wird eine Ausnahme ausgelöst. Benutzeragenten dürfen [explizit `script`-Elemente vermeiden, die über diese Methode eingefügt wurden](https://html.spec.whatwg.org/multipage/parsing.html#document-written-scripts-intervention). Und um die Angelegenheit noch komplizierter zu machen, kann das genaue Verhalten dieser Methode in einigen Fällen von der Netzwerk-Latenz abhängen, was zu schwer nachvollziehbaren Fehlern führen kann. Aus all diesen Gründen wird die Verwendung dieser Methode dringend abgeraten.
> > Vermeiden Sie daher die Verwendung von `document.writeln()` – und aktualisieren Sie, wenn möglich, vorhandenen Code, der diese noch verwendet.

Schreibt eine Zeichenkette, gefolgt von einem Zeilenumbruch, in ein Dokument.

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

**document.writeln** ist das gleiche wie {{domxref("document.write")}}, fügt jedoch einen Zeilenumbruch hinzu.

> **Hinweis:** **document.writeln** (wie auch **document.write**) funktioniert nicht in XHTML-Dokumenten (Sie erhalten einen "Operation ist nicht unterstützt" (`NS_ERROR_DOM_NOT_SUPPORTED_ERR`) Fehler in der Fehlerkonsole). Dies ist der Fall, wenn eine lokale Datei mit der Dateiendung .xhtml geöffnet wird oder bei jedem Dokument, das mit einem application/xhtml+xml MIME-Typ bereitgestellt wird. Weitere Informationen finden Sie in den [W3C XHTML FAQ](https://www.w3.org/MarkUp/2004/xhtml-faq#docwrite).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
