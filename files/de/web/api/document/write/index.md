---
title: "Dokument: write() Methode"
short-title: write()
slug: Web/API/Document/write
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{ApiRef("DOM")}}{{deprecated_header}}

> [!WARNING]
> Die Verwendung der `document.write()` Methode wird dringend abgeraten.
>
> Wie [die HTML-Spezifikation selbst warnt](<https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#document.write()>):
>
> > Diese Methode hat sehr eigentümliches Verhalten. In einigen Fällen kann diese Methode den Zustand des [HTML-Parsers](https://html.spec.whatwg.org/multipage/parsing.html#html-parser) beeinflussen, während dieser läuft, was zu einem DOM führt, das nicht dem Quellcode des Dokuments entspricht (z.B. wenn die geschriebene Zeichenkette die Zeichenkette `<plaintext>` oder `<!--` ist). In anderen Fällen kann der Aufruf die aktuelle Seite zuerst löschen, als ob [`document.open()`](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-document-open) aufgerufen worden wäre. In weiteren Fällen wird die Methode einfach ignoriert oder es wird eine Ausnahme ausgelöst. Nutzeragenten dürfen [ausdrücklich vermeiden, `script`-Elemente auszuführen, die über diese Methode eingefügt wurden](https://html.spec.whatwg.org/multipage/parsing.html#document-written-scripts-intervention). Und um die Angelegenheit noch schlimmer zu machen, kann das genaue Verhalten dieser Methode in einigen Fällen von der Netzwerklatenz abhängen, was zu Fehlern führen kann, die sehr schwer zu debuggen sind. Aus all diesen Gründen wird die Verwendung dieser Methode dringend abgeraten.
> > Daher sollten Sie `document.write()` vermeiden – und, wenn möglich, vorhandenen Code aktualisieren, der diese Methode noch verwendet.

Die **`document.write()`** Methode schreibt eine Zeichenkette in einen Dokumentstrom, der durch [`document.open()`](/de/docs/Web/API/Document/open) geöffnet wurde.

> [!NOTE]
> Da `document.write()` in den Dokument **stream** schreibt, ruft ein Aufruf von `document.write()` auf einem geschlossenen (geladenen) Dokument automatisch `document.open()` auf, [was das Dokument löschen wird](/de/docs/Web/API/Document/open#notes).

## Syntax

```js-nolint
write(markup)
```

### Parameter

- `markup`
  - : Eine Zeichenkette, die den Text enthält, der in das Dokument geschrieben werden soll.

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

Der Text, den Sie schreiben, wird in das Strukturmodell des Dokuments geparst. Im obigen Beispiel wird das `h1` Element zu einem Knoten im Dokument.

Das Schreiben in ein Dokument, das bereits geladen ist, ohne [`document.open()`](/de/docs/Web/API/Document/open) aufzurufen, wird automatisch `document.open()` aufrufen. Nach dem Schreiben sollten Sie [`document.close()`](/de/docs/Web/API/Document/close) aufrufen, um dem Browser mitzuteilen, das Laden der Seite abzuschließen.

Wenn der `document.write()` Aufruf innerhalb eines Inline-HTML-`<script>` Tags eingebettet ist, wird `document.open()` nicht aufgerufen. Zum Beispiel:

```html
<script>
  document.write("<h1>Main title</h1>");
</script>
```

`document.write()` und [`document.writeln`](/de/docs/Web/API/Document/writeln) funktionieren nicht in XHTML-Dokumenten (im Fehlerprotokoll erhalten Sie einen "Operation is not supported" (`NS_ERROR_DOM_NOT_SUPPORTED_ERR`) Fehler). Dies passiert beim Öffnen einer lokalen Datei mit der .xhtml Dateierweiterung oder für jedes Dokument, das mit einem `application/xhtml+xml` {{Glossary("MIME_type", "MIME-Typ")}} bedient wird. Weitere Informationen finden Sie in den [W3C XHTML FAQ](https://www.w3.org/MarkUp/2004/xhtml-faq#docwrite).

Die Verwendung von `document.write()` in [verzögerten](/de/docs/Web/HTML/Element/script#defer) oder [asynchronen](/de/docs/Web/HTML/Element/script#async) Skripten wird ignoriert und Sie erhalten eine Nachricht wie "A call to `document.write()` from an asynchronously-loaded external script was ignored" im Fehlerprotokoll.

Nur in Edge führt der mehrmalige Aufruf von `document.write()` in einem {{HTMLElement("iframe")}} zu dem Fehler "SCRIPT70: Permission denied".

Beginnend mit Version 55 wird Chrome `<script>`-Elemente, die durch `document.write()` eingefügt wurden, nicht ausführen, wenn bestimmte Bedingungen erfüllt sind. Weitere Informationen finden Sie unter [Intervening against document.write()](https://developer.chrome.com/blog/removing-document-write/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`element.innerHTML`](/de/docs/Web/API/Element/innerHTML)
- [`document.createElement()`](/de/docs/Web/API/Document/createElement)
