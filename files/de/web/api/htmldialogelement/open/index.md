---
title: "HTMLDialogElement: open-Eigenschaft"
short-title: open
slug: Web/API/HTMLDialogElement/open
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`open`**-Eigenschaft des
[`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Interfaces ist ein boolescher Wert, der das
[`open`](/de/docs/Web/HTML/Reference/Elements/dialog#open)-HTML-Attribut widerspiegelt und angibt, ob das {{htmlelement("dialog")}} zur Interaktion verfügbar ist.

## Wert

Ein boolescher Wert, der den Zustand des [`open`](/de/docs/Web/HTML/Reference/Elements/dialog#open)-HTML-Attributs darstellt. Ein Wert von `true` bedeutet, dass das Dialogfeld angezeigt wird, während `false` bedeutet, dass es nicht angezeigt wird.

> [!WARNING]
> Obwohl die `open`-Eigenschaft technisch nicht schreibgeschützt ist und direkt gesetzt werden kann, wird dies von der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/interactive-elements.html#attr-dialog-closedby) stark abgeraten, da es die normalen Dialoginteraktionen auf unerwartete Weise stören kann. Zum Beispiel wird das [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Ereignis nicht ausgelöst, wenn `open` programmgesteuert auf `false` gesetzt wird, und nachfolgende Aufrufe der Methoden [`close()`](/de/docs/Web/API/HTMLDialogElement/close) und [`requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose) haben keine Wirkung. Stattdessen ist es besser, Methoden wie [`show()`](/de/docs/Web/API/HTMLDialogElement/show), [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal), `close()` und `requestClose()` zu verwenden, um den Wert des `open`-Attributs zu ändern.

## Beispiele

Das folgende Beispiel zeigt einen einfachen Button, der beim Anklicken ein
{{htmlelement("dialog")}} mit einem Formular über die `showModal()`-Methode öffnet.
Von dort aus können Sie auf den _Cancel_-Button klicken, um das Dialogfeld zu schließen (über die
[`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode), oder das Formular über den Submit-Button absenden.

```html
<!-- Simple pop-up dialog box -->
<dialog id="dialog">
  <form method="dialog">
    <button type="submit">Close</button>
  </form>
</dialog>

<p>
  <button id="openDialog">Open Dialog</button>
</p>
<p id="dialogStatus"></p>

<script>
  (() => {
    const openDialog = document.getElementById("openDialog");
    const dialog = document.getElementById("dialog");
    const text = document.getElementById("dialogStatus");

    function openCheck(dialog) {
      if (dialog.open) {
        text.innerText = "Dialog open";
      } else {
        text.innerText = "Dialog closed";
      }
    }

    // Update button opens a modal dialog
    openDialog.addEventListener("click", () => {
      dialog.showModal();
      openCheck(dialog);
    });

    dialog.addEventListener("close", () => {
      openCheck(dialog);
    });
  })();
</script>
```

### Ergebnis

{{ EmbedLiveSample('Examples', '100%', '200px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{ HTMLElement("dialog") }}.
