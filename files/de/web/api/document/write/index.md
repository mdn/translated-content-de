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
> > Diese Methode hat ein sehr eigenwilliges Verhalten. In einigen Fällen kann diese Methode den Zustand des [HTML-Parsers](https://html.spec.whatwg.org/multipage/parsing.html#html-parser) beeinflussen, während der Parser läuft, was zu einem DOM führt, das nicht mit der Quelle des Dokuments übereinstimmt (z.B. wenn die geschriebene Zeichenfolge die Zeichenfolge "`<plaintext>`" oder "`<!--`" ist). In anderen Fällen kann der Aufruf die aktuelle Seite zuerst leeren, als ob [`document.open()`](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-document-open) aufgerufen worden wäre. In weiteren Fällen wird die Methode einfach ignoriert oder es wird eine Ausnahme ausgelöst. Benutzeragenten dürfen [explizit verhindern, dass `script`-Elemente ausgeführt werden, die über diese Methode eingefügt werden](https://html.spec.whatwg.org/multipage/parsing.html#document-written-scripts-intervention). Und um es noch schlimmer zu machen, kann das genaue Verhalten dieser Methode in einigen Fällen von der Netzwerkverzögerung abhängen, was zu Fehlern führen kann, die sehr schwer zu debuggen sind. Aus all diesen Gründen wird die Verwendung dieser Methode dringend abgeraten.
> > Daher sollten Sie die Verwendung von `document.write()` vermeiden — und falls möglich, vorhandenen Code aktualisieren, der diese Methode noch verwendet.

Die **`document.write()`**-Methode schreibt eine Zeichenfolge von Text in einen Dokumentstream, der durch [`document.open()`](/de/docs/Web/API/Document/open) geöffnet wurde.

> [!NOTE]
> Da `document.write()` in den Dokument**stream** schreibt, ruft das Aufrufen von `document.write()` auf einem geschlossenen (geladenen) Dokument automatisch `document.open()` auf, [was das Dokument löschen wird](/de/docs/Web/API/Document/open#notes).

## Syntax

```js-nolint
write(markup)
```

### Parameter

- `markup`
  - : Ein String, der den in das Dokument zu schreibenden Text enthält.

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

Der von Ihnen geschriebene Text wird in das Strukturmodell des Dokuments geparst. Im obigen Beispiel wird das `h1`-Element zu einem Knoten im Dokument.

Schreiben in ein Dokument, das bereits geladen ist, ohne [`document.open()`](/de/docs/Web/API/Document/open) aufzurufen, wird automatisch `document.open()` aufrufen. Nach dem Schreiben rufen Sie [`document.close()`](/de/docs/Web/API/Document/close) auf, um dem Browser mitzuteilen, dass die Seite fertig geladen ist.

Wenn der `document.write()`-Aufruf in einem Inline-HTML-`<script>`-Tag eingebettet ist, wird `document.open()` nicht aufgerufen. Zum Beispiel:

```html
<script>
  document.write("<h1>Main title</h1>");
</script>
```

`document.write()` und [`document.writeln`](/de/docs/Web/API/Document/writeln) funktionieren nicht in XHTML-Dokumenten (Sie erhalten einen "Operation is not supported" (`NS_ERROR_DOM_NOT_SUPPORTED_ERR`) Fehler in der Fehlerkonsole). Dies passiert, wenn eine lokale Datei mit der Dateiendung .xhtml geöffnet wird oder für jedes Dokument, das mit einem `application/xhtml+xml` {{Glossary("MIME_type", "MIME-Typ")}} bereitgestellt wird. Weitere Informationen finden Sie in den [W3C XHTML FAQ](https://www.w3.org/MarkUp/2004/xhtml-faq#docwrite).

Die Verwendung von `document.write()` in [verzögerten](/de/docs/Web/HTML/Element/script#defer) oder [asynchronen](/de/docs/Web/HTML/Element/script#async) Skripten wird ignoriert und Sie erhalten eine Nachricht wie "A call to `document.write()` from an asynchronously-loaded external script was ignored" in der Fehlerkonsole.

Nur in Edge, der Aufruf von `document.write()` mehr als einmal in einem {{HTMLElement("iframe")}} verursacht den Fehler "SCRIPT70: Permission denied".

Ab Version 55 wird Chrome keine `<script>`-Elemente ausführen, die über `document.write()` eingefügt wurden, wenn bestimmte Bedingungen erfüllt sind. Weitere Informationen finden Sie unter [Intervening against document.write()](https://developer.chrome.com/blog/removing-document-write/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`element.innerHTML`](/de/docs/Web/API/Element/innerHTML)
- [`document.createElement()`](/de/docs/Web/API/Document/createElement)
