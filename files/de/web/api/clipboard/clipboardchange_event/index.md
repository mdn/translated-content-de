---
title: "Clipboard: clipboardchange-Ereignis"
slug: Web/API/Clipboard/clipboardchange_event
l10n:
  sourceCommit: 9a0e5c1cfa8d5079e22c410de757707706f1cc75
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Das **`clipboardchange`**-Ereignis des [`Clipboard`](/de/docs/Web/API/Clipboard)-Interfaces wird ausgelöst, wenn sich der Inhalt der Systemzwischenablage auf irgendeine Weise ändert, beispielsweise durch einen Kopierbefehl des Systems oder durch eine API-Methode wie [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText).

Das `clipboardchange`-Ereignis wird nur bei {{Glossary("Sticky_activation", "sticky activation")}} oder nach Erteilung der `clipboard-read`-Berechtigung ausgelöst.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("clipboardchange", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) des Interfaces zuweisen:

```js-nolint
onclipboardchange = (event) => { }
```

## Ereignistyp

Ein [`ClipboardChangeEvent`](/de/docs/Web/API/ClipboardChangeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ClipboardChangeEvent")}}

## Beispiele

### Auf Kopierbefehle des Systems reagieren

Dieses Beispiel zeigt, wie Sie auf Kopierbefehle des Systems reagieren und den Inhalt anzeigen, der in die Zwischenablage kopiert wurde.

#### HTML

Das HTML besteht aus drei {{htmlelement("p")}}-Elementen – eines zeigt den Inhalt der Zwischenablage an, und zwei enthalten Beispieltext zum Kopieren.

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

In unserem Skript holen wir zunächst eine Referenz auf das `<p>`-Ausgabeelement. Anschließend definieren wir einen `clipboardchange`-Event-Handler für das [`Clipboard`](/de/docs/Web/API/Clipboard)-Objekt des Browsers. Wenn das Ereignis ausgelöst wird, rufen wir die Methode [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) auf, um den gerade in die Zwischenablage kopierten Text zu lesen. Sobald das Ergebnis vorliegt, weisen wir es dem `textContent` des Ausgabeabsatzes zu.

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

Wählen Sie im Beispiel Text aus und kopieren Sie ihn mit <kbd>Ctrl</kbd> + <kbd>C</kbd> (oder mit <kbd>Cmd</kbd> + <kbd>C</kbd>, wenn Sie einen Mac verwenden) in die Zwischenablage. Beim ersten Versuch erscheint eine Berechtigungsabfrage, in der Sie aufgefordert werden, das Lesen des Zwischenablageinhalts zu erlauben. Danach (oder bei weiteren Versuchen sofort) sollte der kopierte Text im Ausgabeabsatz oben in der Benutzeroberfläche erscheinen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ClipboardChangeEvent`](/de/docs/Web/API/ClipboardChangeEvent)
- [Clipboard API](/de/docs/Web/API/Clipboard_API)
