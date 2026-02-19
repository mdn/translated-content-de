---
title: "Clipboard: clipboardchange-Ereignis"
slug: Web/API/Clipboard/clipboardchange_event
l10n:
  sourceCommit: 483ce811e1ea52cb2d9d2a5af0c4d1c4d591ea4a
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Das **`clipboardchange`**-Ereignis des [`Clipboard`](/de/docs/Web/API/Clipboard)-Interfaces wird ausgelöst, wenn sich der Inhalt der Systemzwischenablage in irgendeiner Weise ändert, zum Beispiel durch einen Systemkopierbefehl oder durch eine API-Methode wie [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandlereigenschaft.

```js-nolint
addEventListener("clipboardchange", (event) => { })

onclipboardchange = (event) => { }
```

## Ereignistyp

Ein [`ClipboardChangeEvent`](/de/docs/Web/API/ClipboardChangeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ClipboardChangeEvent")}}

## Beispiele

### Auf Systemkopierbefehle hören

Dieses Beispiel zeigt, wie Sie auf Systemkopierbefehle hören und den Inhalt anzeigen, der in die Zwischenablage kopiert wurde.

#### HTML

Das HTML besteht aus drei {{htmlelement("p")}}-Elementen – eines, um den Inhalt der Zwischenablage anzuzeigen, und zwei, die Beispieltext zum Kopieren enthalten.

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
  border: 2px solid #ccc;
  border-radius: 5px;
}
```

#### JavaScript

In unserem Skript holen wir zuerst eine Referenz auf das Ausgabe-`<p>`-Element. Dann definieren wir einen `clipboardchange`-Ereignishandler auf dem [`Clipboard`](/de/docs/Web/API/Clipboard)-Objekt des Browsers. Wenn das Ereignis ausgelöst wird, rufen wir die Methode [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) auf, um den Text zu lesen, der gerade in die Zwischenablage kopiert wurde. Wenn das Ergebnis zurückgegeben wird, setzen wir es als Wert des `textContent` des Ausgabebereichs.

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

Versuchen Sie, etwas Text aus dem Beispiel auszuwählen und ihn dann mit <kbd>Ctrl</kbd> + <kbd>C</kbd> (oder <kbd>Cmd</kbd> + <kbd>C</kbd>, wenn Sie einen Mac verwenden) in die Zwischenablage zu kopieren. Beim ersten Versuch wird ein Berechtigungsdialogfeld angezeigt, in dem Sie um Erlaubnis gefragt werden, den Inhalt der Zwischenablage lesen zu dürfen. Danach (oder sofort bei nachfolgenden Versuchen) sollten Sie den Text sehen, den Sie in den Ausgabebereich oben in der Benutzeroberfläche kopiert haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ClipboardChangeEvent`](/de/docs/Web/API/ClipboardChangeEvent)
- [Clipboard API](/de/docs/Web/API/Clipboard_API)
