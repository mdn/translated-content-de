---
title: "Dokument: write() Methode"
short-title: write()
slug: Web/API/Document/write
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{ApiRef("DOM")}}{{deprecated_header}}

> [!WARNING]
> Die Verwendung der `document.write()` Methode wird stark abgeraten.
>
> Wie [die HTML-Spezifikation selbst warnt](<https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#document.write()>):
>
> > Diese Methode hat ein sehr eigenwilliges Verhalten. In einigen Fällen kann diese Methode den Zustand des [HTML-Parsers](https://html.spec.whatwg.org/multipage/parsing.html#html-parser) beeinflussen, während der Parser läuft, was zu einem DOM führt, das nicht mit der Quelle des Dokuments übereinstimmt (z.B. wenn der geschriebene String der String `<plaintext>` oder `<!--` ist). In anderen Fällen kann der Aufruf zuerst die aktuelle Seite leeren, als ob [`document.open()`](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-document-open) aufgerufen worden wäre. In noch anderen Fällen wird die Methode einfach ignoriert oder es wird eine Ausnahme ausgelöst. Benutzeragenten sind [ausdrücklich erlaubt, das Ausführen von `script`-Elementen zu vermeiden, die über diese Methode eingefügt werden](https://html.spec.whatwg.org/multipage/parsing.html#document-written-scripts-intervention). Und um die Sache noch schlimmer zu machen, kann das genaue Verhalten dieser Methode in einigen Fällen von der Netzwerklatenz abhängen, was zu Fehlern führen kann, die sehr schwer zu debuggen sind. Aus all diesen Gründen wird die Verwendung dieser Methode stark abgeraten.
> > Daher vermeiden Sie die Verwendung von `document.write()` – und wenn möglich, aktualisieren Sie vorhandenen Code, der diese Methode noch verwendet.

Die **`document.write()`** Methode schreibt einen Textstring in einen Dokument-Stream, der von [`document.open()`](/de/docs/Web/API/Document/open) geöffnet wurde.

> [!NOTE]
> Da `document.write()` in den Dokument-**Stream** schreibt, ruft das Aufrufen von `document.write()` bei einem geschlossenen (geladenen) Dokument automatisch `document.open()` auf, [was das Dokument löschen wird](/de/docs/Web/API/Document/open#notes).

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
<button>Replace document content</button>
```

```js
function newContent() {
  document.open();
  document.write("<h1>Out with the old, in with the new!</h1>");
  document.close();
}

document.querySelector("button").addEventListener("click", newContent);
```

{{EmbedLiveSample("Examples")}}

## Anmerkungen

Der von Ihnen geschriebene Text wird in das Strukturmodell des Dokuments analysiert. Im obigen Beispiel wird das `h1` Element zu einem Knoten im Dokument.

Das Schreiben in ein Dokument, das bereits geladen wurde, ohne [`document.open()`](/de/docs/Web/API/Document/open) aufzurufen, wird `document.open()` automatisch aufrufen. Nach dem Schreiben rufen Sie [`document.close()`](/de/docs/Web/API/Document/close) auf, um dem Browser mitzuteilen, dass das Laden der Seite abgeschlossen ist.

Wenn der `document.write()` Aufruf innerhalb eines inlinen HTML `<script>` Tags eingebettet ist, wird `document.open()` nicht aufgerufen. Zum Beispiel:

```html
<script>
  document.write("<h1>Main title</h1>");
</script>
```

`document.write()` und [`document.writeln`](/de/docs/Web/API/Document/writeln) funktionieren nicht in XHTML-Dokumenten (Sie erhalten einen "Operation is not supported" (`NS_ERROR_DOM_NOT_SUPPORTED_ERR`) Fehler in der Fehlerkonsole). Dies geschieht, wenn eine lokale Datei mit der .xhtml Dateierweiterung geöffnet oder für jedes Dokument mit einem `application/xhtml+xml` {{Glossary("MIME_type", "MIME-Typ")}} bereitgestellt wird. Mehr Informationen sind in den [W3C XHTML FAQ](https://www.w3.org/MarkUp/2004/xhtml-faq#docwrite) verfügbar.

Die Verwendung von `document.write()` in [verzögerten](/de/docs/Web/HTML/Reference/Elements/script#defer) oder [asynchronen](/de/docs/Web/HTML/Reference/Elements/script#async) Skripten wird ignoriert und Sie erhalten eine Nachricht wie "A call to `document.write()` from an asynchronously-loaded external script was ignored" in der Fehlerkonsole.

Nur in Edge verursacht das mehrfache Aufrufen von `document.write()` in einem {{HTMLElement("iframe")}} den Fehler "SCRIPT70: Permission denied".

Ab Version 55 wird Chrome `<script>` Elemente, die über `document.write()` eingefügt wurden, nicht ausführen, wenn bestimmte Bedingungen erfüllt sind. Weitere Informationen finden Sie unter [Intervening against document.write()](https://developer.chrome.com/blog/removing-document-write/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`element.innerHTML`](/de/docs/Web/API/Element/innerHTML)
- [`document.createElement()`](/de/docs/Web/API/Document/createElement)
