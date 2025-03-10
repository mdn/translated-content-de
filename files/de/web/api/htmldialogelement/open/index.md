---
title: "HTMLDialogElement: open-Eigenschaft"
short-title: open
slug: Web/API/HTMLDialogElement/open
l10n:
  sourceCommit: fbcc0f0bfc9e1ffddc679ad4f87196d2aa33725a
---

{{ APIRef("HTML DOM") }}

Die **`open`**-Eigenschaft des [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Interfaces ist ein boolescher Wert, der das [`open`](/de/docs/Web/HTML/Element/dialog#open) HTML-Attribut widerspiegelt und anzeigt, ob das {{htmlelement("dialog")}} zur Interaktion verfügbar ist.

## Wert

Ein boolescher Wert, der den Zustand des [`open`](/de/docs/Web/HTML/Element/dialog#open) HTML-Attributs darstellt. Ein Wert von `true` bedeutet, dass das Dialogfeld angezeigt wird, während `false` bedeutet, dass es nicht angezeigt wird.

> [!WARNING]
> Obwohl die `open`-Eigenschaft technisch gesehen nicht schreibgeschützt ist und direkt gesetzt werden kann, wird dringend davon abgeraten, dies zu tun, wie es [die HTML-Spezifikation](https://html.spec.whatwg.org/multipage/interactive-elements.html#attr-dialog-closedby) beschreibt, da es die normalen Dialoginteraktionen auf unerwartete Weise stören kann. Zum Beispiel wird das [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Ereignis nicht ausgelöst, wenn `open` programmgesteuert auf `false` gesetzt wird, und nachfolgende Aufrufe der Methoden [`close()`](/de/docs/Web/API/HTMLDialogElement/close) und [`requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose) haben keine Wirkung. Stattdessen ist es besser, Methoden wie [`show()`](/de/docs/Web/API/HTMLDialogElement/show), [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal), `close()` und `requestClose()` zu verwenden, um den Wert des `open`-Attributs zu ändern.

## Beispiele

Das folgende Beispiel zeigt eine einfache Schaltfläche, die beim Klicken ein {{htmlelement("dialog")}} mit einem Formular über die `showModal()`-Methode öffnet. Von dort können Sie auf die _Cancel_-Schaltfläche klicken, um das Dialogfeld zu schließen (über die [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode), oder das Formular über die Absenden-Schaltfläche einreichen.

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
