---
title: "Clipboard: clipboardchange Ereignis"
slug: Web/API/Clipboard/clipboardchange_event
l10n:
  sourceCommit: 3712f845b54b2754b2b550c7d7dca18f0277c0ad
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Das **`clipboardchange`** Ereignis der [`Clipboard`](/de/docs/Web/API/Clipboard) Schnittstelle wird ausgelöst, wenn sich die Inhalte der Systemzwischenablage auf irgendeine Weise ändern, beispielsweise über einen Systemkopierbefehl oder über eine API-Methode wie [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("clipboardchange", (event) => { })

onclipboardchange = (event) => { }
```

## Ereignistyp

Ein [`ClipboardChangeEvent`](/de/docs/Web/API/ClipboardChangeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ClipboardChangeEvent")}}

## Beispiele

### Lauschen auf Systemkopierbefehle

Dieses Beispiel zeigt, wie man auf Systemkopierbefehle lauscht und den Inhalt anzeigt, der in die Zwischenablage kopiert wurde.

#### HTML

Das HTML besteht aus drei {{htmlelement("p")}} Elementen — eines zur Anzeige der Zwischenablageinhalte und zwei mit Beispieltext zum Kopieren.

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
  font-family: Arial, Helvetica, sans-serif;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
}
```

#### JavaScript

In unserem Skript holen wir zunächst eine Referenz auf das Ausgabeelement `<p>`. Dann definieren wir einen `clipboardchange` Ereignishandler auf dem [`Clipboard`](/de/docs/Web/API/Clipboard) Objekt des Browsers. Wenn das Ereignis ausgelöst wird, rufen wir die Methode [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) auf, um den Text zu lesen, der gerade in die Zwischenablage kopiert wurde. Wenn das Ergebnis zurückgegeben wird, setzen wir es als den Wert des `textContent` des Ausgabeelements paragraf.

```js live-sample___basic-usage
const outputPara = document.querySelector("#output");

navigator.clipboard.addEventListener("clipboardchange", (event) => {
  navigator.clipboard
    .readText()
    .then((text) => (outputPara.textContent = `Copied text: ${text}`));
});
```

#### Ergebnis

Das gerenderte Beispiel sieht folgendermaßen aus:

{{EmbedLiveSample("basic-usage", '100%', "350px", "", "", "", "clipboard-read")}}

Versuchen Sie, im Beispiel etwas Text auszuwählen und ihn dann mit <kbd>Strg</kbd> + <kbd>C</kbd> (oder <kbd>Cmd</kbd> + <kbd>C</kbd>, wenn Sie einen Mac verwenden) in die Zwischenablage zu kopieren. Beim ersten Versuch sehen Sie eine Berechtigungsabfrage, die Sie um Erlaubnis bittet, die Inhalte der Zwischenablage zu lesen. Danach (oder sofort bei nachfolgenden Versuchen) sollten Sie den Text, den Sie kopiert haben, im Ausgabepaaragraphen oben in der Benutzeroberfläche angezeigt sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ClipboardChangeEvent`](/de/docs/Web/API/ClipboardChangeEvent)
- [Clipboard API](/de/docs/Web/API/Clipboard_API)
