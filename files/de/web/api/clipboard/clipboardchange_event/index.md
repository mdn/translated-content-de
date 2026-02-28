---
title: "Clipboard: clipboardchange Ereignis"
slug: Web/API/Clipboard/clipboardchange_event
l10n:
  sourceCommit: c49748a0ce4fdf77427e29cb6edbca8953a514e7
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Das **`clipboardchange`** Ereignis der [`Clipboard`](/de/docs/Web/API/Clipboard) Schnittstelle wird ausgelöst, wenn sich der Inhalt der System-Zwischenablage auf irgendeine Weise ändert, zum Beispiel durch einen System-Kopierbefehl oder durch eine API-Methode wie [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("clipboardchange", (event) => { })

onclipboardchange = (event) => { }
```

## Ereignistyp

Ein [`ClipboardChangeEvent`](/de/docs/Web/API/ClipboardChangeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ClipboardChangeEvent")}}

## Beispiele

### Lauschen auf System-Kopierbefehle

Dieses Beispiel zeigt, wie man auf System-Kopierbefehle lauschen und den Inhalt anzeigen kann, der in die Zwischenablage kopiert wurde.

#### HTML

Das HTML besteht aus drei {{htmlelement("p")}} Elementen — eines, um den Inhalt der Zwischenablage anzuzeigen, und zwei, die Beispieltext zum Kopieren enthalten.

```html live-sample___basic-usage
<p id="output">Copied text:</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mattis purus.
  Donec at ipsum libero. Maecenas at dictum turpis. Vivamus eget aliquet augue.
  Aenean tempor dictum posuere. Vestibulum vehicula, nulla ac convallis feugiat,
  tortor velit lobortis est, vitae convallis velit libero vel urna. Suspendisse
  potenti. In bibendum ex et pellentesque gravida. Phasellus magna risus,
  euismod vitae sem in, viverra venenatis lacus. Sed dignissim risus eu congue
  consequat. Vestibulum nec feugiat libero. Maecenas quis sodales lorem, eu
  luctus nisl. Cras vel diam sed lacus finibus elementum sed sed nunc.
</p>

<p>
  Nam ac metus eget est bibendum pulvinar. Nunc a venenatis lorem. Lorem ipsum
  dolor sit amet, consectetur adipiscing elit. In dignissim, arcu ornare luctus
  pharetra, dui velit faucibus leo, ac posuere ipsum risus vel ligula. Morbi
  varius, felis et ornare efficitur, tortor erat imperdiet lacus, non rhoncus
  lectus sapien sit amet augue. Suspendisse potenti. Sed fringilla mi augue, at
  laoreet felis varius in. Donec venenatis gravida lacus ut rutrum. Donec
  suscipit egestas justo. Proin semper nibh tortor, sit amet elementum metus
  placerat quis. Sed consectetur leo sed lorem varius, sit amet ultrices sem
  tincidunt. Vivamus facilisis at velit eget commodo.
</p>
```

```css hidden live-sample___basic-usage
body {
  margin: 0 5px;
}
#output {
  font-family: "Helvetica", "Arial";
  padding: 10px;
  border: 2px solid #cccccc;
  border-radius: 5px;
}
```

#### JavaScript

In unserem Skript holen wir zunächst eine Referenz zu dem Ausgabeelement `<p>`. Dann definieren wir einen `clipboardchange` Ereignis-Handler auf dem [`Clipboard`](/de/docs/Web/API/Clipboard) Objekt des Browsers. Wenn das Ereignis ausgelöst wird, rufen wir die Methode [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) auf, um den Text zu lesen, der gerade in die Zwischenablage kopiert wurde. Wenn das Ergebnis zurückgegeben wird, setzen wir es als Wert des `textContent` des Ausgabeelements.

```js live-sample___basic-usage
const outputPara = document.querySelector("#output");

navigator.clipboard.addEventListener("clipboardchange", (event) => {
  navigator.clipboard
    .readText()
    .then((text) => (outputPara.textContent = `Copied text: ${text}`));
});
```

#### Ergebnis

Das gerenderte Beispiel sieht wie folgt aus:

{{EmbedLiveSample("basic-usage", '100%', "350px", "", "", "", "clipboard-read")}}

Versuchen Sie, einen Text aus dem Beispiel auszuwählen und dann mit <kbd>Strg</kbd> + <kbd>C</kbd> (oder <kbd>Cmd</kbd> + <kbd>C</kbd>, wenn Sie einen Mac verwenden) in die Zwischenablage zu kopieren. Beim ersten Versuch erscheint ein Berechtigungsdialog, der Sie auffordert, die Erlaubnis zum Lesen der Zwischenablageinhalte zu erteilen. Danach (oder sofort bei weiteren Versuchen) sollten Sie den Text, den Sie kopiert haben, im Ausgabebereich an der Spitze der Benutzeroberfläche sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ClipboardChangeEvent`](/de/docs/Web/API/ClipboardChangeEvent)
- [Clipboard API](/de/docs/Web/API/Clipboard_API)
