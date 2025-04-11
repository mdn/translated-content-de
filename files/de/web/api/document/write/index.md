---
title: "Dokument: write()-Methode"
short-title: write()
slug: Web/API/Document/write
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ApiRef("DOM")}}{{deprecated_header}}

> [!WARNING]
> Die Verwendung der `document.write()`-Methode wird stark abgeraten.
>
> Wie [die HTML-Spezifikation selbst warnt](<https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#document.write()>):
>
> > Diese Methode hat ein sehr eigenwilliges Verhalten. In einigen Fällen kann diese Methode den Zustand des [HTML-Parsers](https://html.spec.whatwg.org/multipage/parsing.html#html-parser) beeinflussen, während dieser läuft, wodurch ein DOM entsteht, das nicht der Quelle des Dokuments entspricht (z.B. wenn der geschriebene String der String `<plaintext>` oder `<!--` ist). In anderen Fällen kann der Aufruf zuerst die aktuelle Seite leeren, als ob [`document.open()`](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-document-open) aufgerufen worden wäre. In noch mehr Fällen wird die Methode einfach ignoriert oder wirft eine Ausnahme. Benutzeragenten dürfen [explizit `script`-Elemente, die über diese Methode eingefügt wurden, nicht ausführen](https://html.spec.whatwg.org/multipage/parsing.html#document-written-scripts-intervention). Und um die Sache noch schlimmer zu machen, kann das genaue Verhalten dieser Methode in einigen Fällen von der Netzwerkverzögerung abhängen, was zu schwer debugbaren Fehlern führen kann. Aus all diesen Gründen wird von der Verwendung dieser Methode dringend abgeraten.
> > Daher vermeiden Sie die Verwendung von `document.write()` — und wenn möglich, aktualisieren Sie bestehenden Code, der es noch verwendet.

Die **`document.write()`**-Methode schreibt einen Textstring in einen Dokumentenstrom, der durch [`document.open()`](/de/docs/Web/API/Document/open) geöffnet wurde.

> [!NOTE]
> Da `document.write()` in den Dokumenten **Stream** schreibt, ruft ein Aufruf von `document.write()` auf einem geschlossenen (geladenen) Dokument automatisch `document.open()` auf, [was das Dokument löschen wird](/de/docs/Web/API/Document/open#notes).

## Syntax

```js-nolint
write(markup)
```

### Parameter

- `markup`
  - : Ein String, der den zu schreibenden Text in das Dokument enthält.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```html
<p>Some original document content.</p>
<button onclick="newContent()">Replace document content</button>
```

```js
function newContent() {
  document.open();
  document.write("<h1>Out with the old, in with the new!</h1>");
  document.close();
}
```

{{EmbedLiveSample("Examples")}}

## Hinweise

Der von Ihnen geschriebene Text wird in das Strukturmodell des Dokuments geparst. Im obigen Beispiel wird das `h1`-Element zu einem Knoten im Dokument.

Das Schreiben in ein bereits geladenes Dokument, ohne `document.open()` aufzurufen, ruft automatisch `document.open()` auf. Nach dem Schreiben rufen Sie [`document.close()`](/de/docs/Web/API/Document/close) auf, um dem Browser mitzuteilen, dass die Seite fertig geladen ist.

Wenn der `document.write()`-Aufruf innerhalb eines Inline-HTML-`<script>`-Tags eingebettet ist, wird `document.open()` nicht aufgerufen. Zum Beispiel:

```html
<script>
  document.write("<h1>Main title</h1>");
</script>
```

`document.write()` und [`document.writeln`](/de/docs/Web/API/Document/writeln) funktionieren nicht in XHTML-Dokumenten (Sie erhalten einen "Operation is not supported" (`NS_ERROR_DOM_NOT_SUPPORTED_ERR`) Fehler in der Fehlerkonsole). Dies tritt auf, wenn eine lokale Datei mit der .xhtml-Dateierweiterung geöffnet wird oder für jedes Dokument, das mit einem `application/xhtml+xml` {{Glossary("MIME_type", "MIME-Typ")}} bereitgestellt wird. Weitere Informationen finden Sie in den [W3C XHTML FAQ](https://www.w3.org/MarkUp/2004/xhtml-faq#docwrite).

Die Verwendung von `document.write()` in [verzögerten](/de/docs/Web/HTML/Reference/Elements/script#defer) oder [asynchronen](/de/docs/Web/HTML/Reference/Elements/script#async) Skripten wird ignoriert und Sie erhalten eine Meldung wie "Ein Aufruf von `document.write()` von einem asynchron geladenen externen Skript wurde ignoriert" in der Fehlerkonsole.

Nur in Edge führt das mehrfache Aufrufen von `document.write()` in einem {{HTMLElement("iframe")}} zu dem Fehler "SCRIPT70: Permission denied".

Ab Version 55 wird Chrome `<script>`-Elemente, die über `document.write()` eingefügt wurden, unter bestimmten Bedingungen nicht ausführen. Weitere Informationen finden Sie unter [Intervening against document.write()](https://developer.chrome.com/blog/removing-document-write/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`element.innerHTML`](/de/docs/Web/API/Element/innerHTML)
- [`document.createElement()`](/de/docs/Web/API/Document/createElement)
