---
title: "Dokument: write()-Methode"
short-title: write()
slug: Web/API/Document/write
l10n:
  sourceCommit: 269f85437e265cdb7bbb2bdbc43c20dea694813c
---

{{ApiRef("DOM")}}{{deprecated_header}}

> [!WARNING]
> Die Verwendung der `document.write()`-Methode wird stark abgeraten.
>
> Wie [die HTML-Spezifikation selbst warnt](<https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#document.write()>):
>
> > Diese Methode hat ein sehr eigenwilliges Verhalten. In einigen Fällen kann diese Methode den Status des [HTML-Parsers](https://html.spec.whatwg.org/multipage/parsing.html#html-parser) beeinflussen, während dieser ausgeführt wird. Dies kann zu einem DOM führen, das nicht mit der Quelldatei des Dokuments übereinstimmt (z.B. wenn der geschriebene String "`<plaintext>`" oder "`<!--`" ist). In anderen Fällen kann der Aufruf zunächst die aktuelle Seite leeren, als ob [`document.open()`](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-document-open) aufgerufen worden wäre. In weiteren Fällen wird die Methode einfach ignoriert oder es wird eine Ausnahme ausgelöst. Benutzeragenten dürfen [dazu übergehen, `script`-Elemente, die über diese Methode eingefügt werden, nicht auszuführen](https://html.spec.whatwg.org/multipage/parsing.html#document-written-scripts-intervention). Und um die Sache noch schlimmer zu machen, kann das genaue Verhalten dieser Methode in manchen Fällen von der Netzwerklatenz abhängen, was zu schwer debugbaren Fehlern führen kann. Aus all diesen Gründen wird die Verwendung dieser Methode stark abgeraten.
> > Vermeiden Sie daher die Verwendung von `document.write()` — und aktualisieren Sie, wenn möglich, vorhandenen Code, der diese Methode noch nutzt.

Die **`document.write()`**-Methode schreibt einen Textstring in einen durch [`document.open()`](/de/docs/Web/API/Document/open) geöffneten Dokumentenstrom.

> [!NOTE]
> Da `document.write()` in den Dokumenten**strom** schreibt, führt ein Aufruf von `document.write()` auf einem geschlossenen (geladenen) Dokument automatisch `document.open()` aus, [was das Dokument leeren wird](/de/docs/Web/API/Document/open#notes).

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

## Hinweise

Der Text, den Sie schreiben, wird in das Strukturmodell des Dokuments geparst. Im obigen Beispiel wird das `h1`-Element zu einem Knoten im Dokument.

Ein Schreiben in ein bereits geladenes Dokument ohne Aufruf von [`document.open()`](/de/docs/Web/API/Document/open) wird automatisch `document.open()` aufrufen. Nach dem Schreiben rufen Sie [`document.close()`](/de/docs/Web/API/Document/close) auf, um dem Browser mitzuteilen, dass das Laden der Seite abgeschlossen ist.

Wenn der `document.write()`-Aufruf innerhalb eines eingebetteten HTML-`<script>`-Tags enthalten ist, wird `document.open()` nicht aufgerufen. Zum Beispiel:

```html
<script>
  document.write("<h1>Main title</h1>");
</script>
```

`document.write()` und [`document.writeln`](/de/docs/Web/API/Document/writeln) funktionieren nicht in XHTML-Dokumenten (es wird ein Fehler "Operation wird nicht unterstützt" (`NS_ERROR_DOM_NOT_SUPPORTED_ERR`) in der Fehlerkonsole angezeigt). Dies passiert, wenn Sie eine lokale Datei mit der .xhtml-Dateierweiterung oder ein Dokument mit einem `application/xhtml+xml` {{Glossary("MIME_type", "MIME-Typ")}} öffnen. Weitere Informationen sind in den [W3C XHTML FAQ](https://www.w3.org/MarkUp/2004/xhtml-faq#docwrite) verfügbar.

Die Verwendung von `document.write()` in [verzögerten](/de/docs/Web/HTML/Element/script#defer) oder [asynchronen](/de/docs/Web/HTML/Element/script#async) Skripten wird ignoriert und Sie erhalten eine Meldung wie "Ein Aufruf von `document.write()` von einem asynchron geladenen externen Skript wurde ignoriert" in der Fehlerkonsole.

Nur in Edge führt der mehrfache Aufruf von `document.write()` in einem {{HTMLElement("iframe")}} zum Fehler "SCRIPT70: Permission denied".

Ab Version 55 führt Chrome `<script>`-Elemente, die über `document.write()` injiziert wurden, unter bestimmten Bedingungen nicht mehr aus. Weitere Informationen finden Sie unter [Intervening against document.write()](https://developer.chrome.com/blog/removing-document-write/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`element.innerHTML`](/de/docs/Web/API/Element/innerHTML)
- [`document.createElement()`](/de/docs/Web/API/Document/createElement)
