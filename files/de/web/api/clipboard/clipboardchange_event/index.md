---
title: "Zwischenablage: clipboardchange-Ereignis"
slug: Web/API/Clipboard/clipboardchange_event
l10n:
  sourceCommit: 6f8aa84681bf6f94fd93f5d3f999a4d4c0764344
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Das **`clipboardchange`**-Ereignis des [`Clipboard`](/de/docs/Web/API/Clipboard)-Interfaces wird ausgelöst, wenn sich der Inhalt der System-Zwischenablage in irgendeiner Weise ändert, zum Beispiel durch einen Systemkopierbefehl oder durch eine API-Methode wie [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText).

Das `clipboardchange`-Ereignis wird nur mit {{Glossary("Sticky_activation", "sticky activation")}} oder nachdem die Berechtigung `clipboard-read` erteilt wurde, ausgelöst.

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

### Zuhören bei Systemkopierbefehlen

Dieses Beispiel zeigt, wie man Systemkopierbefehle abhört und den Inhalt anzeigt, der in die Zwischenablage kopiert wurde.

#### HTML

Das HTML besteht aus drei {{htmlelement("p")}}-Elementen — eines, um den Inhalt der Zwischenablage anzuzeigen, und zwei mit Beispieltext zum Kopieren.

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

In unserem Skript holen wir zunächst eine Referenz auf das Ausgabe-`<p>`-Element. Dann definieren wir einen `clipboardchange`-Ereignis-Handler auf dem [`Clipboard`](/de/docs/Web/API/Clipboard)-Objekt des Browsers. Wenn das Ereignis ausgelöst wird, rufen wir die Methode [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) auf, um den Text zu lesen, der gerade in die Zwischenablage kopiert wurde. Wenn das Ergebnis zurückgegeben wird, setzen wir es als Wert der `textContent`-Eigenschaft des Ausgabe-Absatzes.

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

Versuchen Sie, etwas Text aus dem Beispiel auszuwählen und dann mit <kbd>Ctrl</kbd> + <kbd>C</kbd> (oder <kbd>Cmd</kbd> + <kbd>C</kbd>, wenn Sie einen Mac verwenden) in die Zwischenablage zu kopieren. Beim ersten Versuch wird eine Berechtigungsaufforderung angezeigt, in der Sie um Erlaubnis gefragt werden, den Inhalt der Zwischenablage zu lesen. Danach (oder sofort bei nachfolgenden Versuchen) sollten Sie den Text sehen, den Sie in den oberen Absatz der Benutzeroberfläche kopiert haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ClipboardChangeEvent`](/de/docs/Web/API/ClipboardChangeEvent)
- [Zwischenablage-API](/de/docs/Web/API/Clipboard_API)
