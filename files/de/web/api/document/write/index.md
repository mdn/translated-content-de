---
title: "Dokument: write()-Methode"
short-title: write()
slug: Web/API/Document/write
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ApiRef("DOM")}}

> [!WARNING]
> Die Verwendung der Methode `document.write()` wird stark abgeraten.
>
> Wie [die HTML-Spezifikation selbst warnt](<https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#document.write()>):
>
> > Diese Methode hat ein sehr eigenwilliges Verhalten. In einigen Fällen kann diese Methode den Zustand des [HTML-Parsers](https://html.spec.whatwg.org/multipage/parsing.html#html-parser) beeinflussen, während der Parser aktiv ist, was zu einem DOM führt, das nicht dem Quellcode des Dokuments entspricht (z. B. wenn der geschriebene String der String "`<plaintext>`" oder "`<!--`" ist). In anderen Fällen kann der Aufruf zuerst die aktuelle Seite löschen, als ob [`document.open()`](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-document-open) aufgerufen worden wäre. In noch anderen Fällen wird die Methode einfach ignoriert oder es wird eine Ausnahme ausgelöst. Benutzeragenten dürfen [explizit die Ausführung von `script`-Elementen vermeiden, die über diese Methode eingefügt werden](https://html.spec.whatwg.org/multipage/parsing.html#document-written-scripts-intervention). Und um die Sache noch schlimmer zu machen, kann das genaue Verhalten dieser Methode in einigen Fällen von der Netzwerklatenz abhängig sein, was zu Fehlern führen kann, die sehr schwer zu debuggen sind. Aus all diesen Gründen wird die Verwendung dieser Methode stark abgeraten.
> > Vermeiden Sie daher die Verwendung von `document.write()` — und aktualisieren Sie nach Möglichkeit vorhandenen Code, der noch darauf basiert.

Die **`document.write()`**-Methode schreibt eine Textzeichenfolge in einen Dokumentenstrom, der durch {{domxref("document.open()")}} geöffnet wurde.

> [!NOTE]
> Da `document.write()` in den Dokumenten **Strom** schreibt, ruft der Aufruf von `document.write()` auf einem geschlossenen (geladenen) Dokument automatisch `document.open()` auf, [was das Dokument löschen wird](/de/docs/Web/API/Document/open#notes).

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
<p>Einige ursprüngliche Dokumentinhalte.</p>
<button onclick="newContent()">Dokumenteninhalt ersetzen</button>
```

```js
function newContent() {
  document.open();
  document.write("<h1>Raus mit dem Alten, rein mit dem Neuen!</h1>");
  document.close();
}
```

{{EmbedLiveSample("Examples")}}

## Hinweise

Der Text, den Sie schreiben, wird in das Strukturmodell des Dokuments geparst. Im obigen Beispiel wird das `h1`-Element ein Knoten im Dokument.

Das Schreiben in ein bereits geladenes Dokument ohne den Aufruf von {{domxref("document.open()")}} wird automatisch `document.open()` aufrufen. Nach dem Schreiben sollten Sie {{domxref("document.close()")}} aufrufen, um dem Browser mitzuteilen, dass das Laden der Seite abgeschlossen ist.

Wenn der Aufruf von `document.write()` innerhalb eines inline HTML-`<script>`-Tags eingebettet ist, wird `document.open()` nicht aufgerufen. Zum Beispiel:

```html
<script>
  document.write("<h1>Haupttitel</h1>");
</script>
```

`document.write()` und {{domxref("document.writeln")}} funktionieren nicht in XHTML-Dokumenten (Sie erhalten einen "Operation is not supported" (`NS_ERROR_DOM_NOT_SUPPORTED_ERR`) Fehler in der Fehlerkonsole). Dies geschieht, wenn Sie eine lokale Datei mit der .xhtml-Dateierweiterung öffnen oder für jedes Dokument, das mit einem `application/xhtml+xml` {{Glossary("MIME type")}} bereitgestellt wird. Weitere Informationen finden Sie in den [W3C XHTML FAQ](https://www.w3.org/MarkUp/2004/xhtml-faq#docwrite).

Die Verwendung von `document.write()` in [deferred](/de/docs/Web/HTML/Element/script#defer) oder [asynchronen](/de/docs/Web/HTML/Element/script#async) Skripten wird ignoriert und Sie erhalten eine Meldung wie "A call to `document.write()` from an asynchronously-loaded external script was ignored" in der Fehlerkonsole.

Nur in Edge verursacht das mehrmalige Aufrufen von `document.write()` in einem {{HTMLElement("iframe")}} den Fehler "SCRIPT70: Permission denied".

Ab Version 55 wird Chrome keine `<script>`-Elemente ausführen, die über `document.write()` injiziert wurden, wenn bestimmte Bedingungen erfüllt sind. Weitere Informationen finden Sie unter [Intervening against document.write()](https://developer.chrome.com/blog/removing-document-write/).

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("element.innerHTML")}}
- {{domxref("document.createElement()")}}
