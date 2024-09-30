---
title: "InputEvent: dataTransfer-Eigenschaft"
short-title: dataTransfer
slug: Web/API/InputEvent/dataTransfer
l10n:
  sourceCommit: 980b5a01c4527ef69fee3b865c68ee3ffb09d612
---

{{APIRef("UI Events")}}

Die schreibgeschützte **`dataTransfer`**-Eigenschaft der [`InputEvent`](/de/docs/Web/API/InputEvent)-Schnittstelle gibt ein [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt zurück, das Informationen über Richtext- oder Klartextdaten enthält, die dem bearbeitbaren Inhalt hinzugefügt oder daraus entfernt werden.

## Wert

Ein [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt oder `null`. Die Spezifikation enthält eine [Übersicht](https://w3c.github.io/input-events/#overview) über seinen Wert in verschiedenen Fällen.

## Beispiele

Im folgenden einfachen Beispiel haben wir einen Event-Listener für das [input](/de/docs/Web/API/Element/input_event)-Ereignis eingerichtet. Wenn Inhalte in das contenteditable {{htmlelement("p")}}-Element eingefügt werden, wird dessen HTML-Quelle über die [`InputEvent.dataTransfer.getData()`](/de/docs/Web/API/DataTransfer/getData)-Methode abgerufen und im Absatz unter der Eingabe gemeldet.

Versuchen Sie, einige der bereitgestellten Inhalte zu kopieren und einzufügen, um die Effekte zu sehen.

```html
<p><span style="font-weight: bold; color: blue">Whoa, bold blue text!</span></p>
<p>
  <span style="font-style: italic; color: red">Exciting: italic red text!</span>
</p>
<p>Boring normal text ;-(</p>

<hr />

<p contenteditable="true">
  Go on, try pasting some content into this editable paragraph and see what
  happens!
</p>

<p class="result"></p>
```

```js
const editable = document.querySelector("p[contenteditable]");
const result = document.querySelector(".result");

editable.addEventListener("input", (e) => {
  result.textContent = e.dataTransfer.getData("text/html");
});
```

{{EmbedLiveSample('Examples', '100%', 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
