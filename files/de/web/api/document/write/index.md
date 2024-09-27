---
title: "Document: write()-Methode"
short-title: write()
slug: Web/API/Document/write
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ApiRef("DOM")}}

> [!WARNING]
> Die Verwendung der `document.write()`-Methode wird dringend abgeraten.
>
> Wie [die HTML-Spezifikation selbst warnt](<https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#document.write()>):
>
> > Diese Methode hat ein sehr eigenwilliges Verhalten. In einigen Fällen kann diese Methode den Zustand des [HTML-Parsers](https://html.spec.whatwg.org/multipage/parsing.html#html-parser) beeinträchtigen, während der Parser läuft, was zu einem DOM führt, das nicht mit der Quelle des Dokuments übereinstimmt (z.B. wenn der geschriebene String der String "`<plaintext>`" oder "`<!--`" ist). In anderen Fällen kann der Aufruf zuerst die aktuelle Seite leeren, als ob [`document.open()`](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-document-open) aufgerufen worden wäre. In weiteren Fällen wird die Methode einfach ignoriert oder wirft eine Ausnahme aus. Benutzeragenten dürfen [explizit `script`-Elemente, die über diese Methode eingefügt werden, vermeiden auszuführen](https://html.spec.whatwg.org/multipage/parsing.html#document-written-scripts-intervention). Und um es noch schlimmer zu machen, kann das genaue Verhalten dieser Methode in einigen Fällen von der Netzwerkverzögerung abhängig sein, was zu Fehlern führt, die sehr schwer zu debuggen sind. Aus all diesen Gründen wird die Verwendung dieser Methode dringend abgeraten.
> > Daher sollte `document.write()` vermieden werden — und falls möglich, sollte vorhandener Code, der es noch verwendet, aktualisiert werden.

Die **`document.write()`**-Methode schreibt einen Textstring in einen Dokument-Stream, der durch [`document.open()`](/de/docs/Web/API/Document/open) geöffnet wurde.

> [!NOTE]
> Da `document.write()` in den Dokumenten**stream** schreibt, ruft der Aufruf von `document.write()` auf einem geschlossenen (geladenen) Dokument automatisch `document.open()` auf, [das das Dokument leeren wird](/de/docs/Web/API/Document/open#notes).

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

## Anmerkungen

Der Text, den Sie schreiben, wird in das Strukturmodell des Dokuments geparst. Im obigen Beispiel wird das `h1`-Element zu einem Knoten im Dokument.

Das Schreiben in ein Dokument, das bereits geladen ist, ohne [`document.open()`](/de/docs/Web/API/Document/open) aufzurufen, wird automatisch `document.open()` aufrufen. Nach dem Schreiben rufen Sie [`document.close()`](/de/docs/Web/API/Document/close) auf, um dem Browser mitzuteilen, dass das Laden der Seite abgeschlossen ist.

Wenn der `document.write()`-Aufruf in einem eingebetteten HTML-`<script>`-Tag steht, wird `document.open()` nicht aufgerufen. Zum Beispiel:

```html
<script>
  document.write("<h1>Main title</h1>");
</script>
```

`document.write()` und [`document.writeln`](/de/docs/Web/API/Document/writeln) funktionieren nicht in XHTML-Dokumenten (Sie erhalten einen Fehler "Operation is not supported" (`NS_ERROR_DOM_NOT_SUPPORTED_ERR`) in der Fehlerkonsole). Dies passiert, wenn eine lokale Datei mit der .xhtml-Dateierweiterung geöffnet wird oder für jedes Dokument, das mit einem `application/xhtml+xml` [MIME-Typ](/de/docs/Glossary/MIME_type) bereitgestellt wird. Weitere Informationen finden Sie in den [W3C XHTML FAQ](https://www.w3.org/MarkUp/2004/xhtml-faq#docwrite).

Die Verwendung von `document.write()` in [verzögerten](/de/docs/Web/HTML/Element/script#defer) oder [asynchronen](/de/docs/Web/HTML/Element/script#async) Skripten wird ignoriert und Sie erhalten eine Nachricht wie "Ein Aufruf von `document.write()` aus einem asynchron geladenen externen Skript wurde ignoriert" in der Fehlerkonsole.

Nur in Edge, führt der mehrfache Aufruf von `document.write()` in einem {{HTMLElement("iframe")}} zu dem Fehler "SCRIPT70: Permission denied".

Ab Version 55 führt Chrome `<script>`-Elemente, die über `document.write()` eingefügt werden, nicht aus, wenn bestimmte Bedingungen erfüllt sind. Weitere Informationen finden Sie unter [Intervening against document.write()](https://developer.chrome.com/blog/removing-document-write/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`element.innerHTML`](/de/docs/Web/API/Element/innerHTML)
- [`document.createElement()`](/de/docs/Web/API/Document/createElement)
