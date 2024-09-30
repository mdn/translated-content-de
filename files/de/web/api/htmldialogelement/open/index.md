---
title: "HTMLDialogElement: open-Eigenschaft"
short-title: open
slug: Web/API/HTMLDialogElement/open
l10n:
  sourceCommit: ae0c5fc61cb9348b4d944d0467c555df5a2f2544
---

{{ APIRef("HTML DOM") }}

Die **`open`**-Eigenschaft des [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Interfaces ist ein boolescher Wert, der das [`open`](/de/docs/Web/HTML/Element/dialog#open)-HTML-Attribut widerspiegelt und anzeigt, ob das {{htmlelement("dialog")}} für Interaktionen verfügbar ist.

## Wert

Ein boolescher Wert, der den Zustand des [`open`](/de/docs/Web/HTML/Element/dialog#open)-HTML-Attributs darstellt. `true` bedeutet, es ist gesetzt und daher wird der Dialog angezeigt. `false` bedeutet, es ist nicht gesetzt und daher wird der Dialog nicht angezeigt.

Die Eigenschaft ist nicht schreibgeschützt — es ist möglich, den Wert zu setzen, um den Dialog programmatisch anzuzeigen oder zu verbergen.

## Beispiele

Das folgende Beispiel zeigt einen einfachen Button, der bei Klick ein {{htmlelement("dialog")}} mit einem Formular über die `showModal()`-Methode öffnet. Von dort können Sie den _Abbrechen_-Button klicken, um den Dialog zu schließen (über die [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode), oder das Formular über den Senden-Button abschicken.

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

- Das HTML-Element, das dieses Interface implementiert: {{HTMLElement("dialog")}}.
