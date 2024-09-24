---
title: "HTMLDialogElement: open-Eigenschaft"
short-title: open
slug: Web/API/HTMLDialogElement/open
l10n:
  sourceCommit: ae0c5fc61cb9348b4d944d0467c555df5a2f2544
---

{{ APIRef("HTML DOM") }}

Die **`open`**-Eigenschaft der
{{domxref("HTMLDialogElement")}}-Schnittstelle ist ein boolescher Wert, der das
[`open`](/de/docs/Web/HTML/Element/dialog#open) HTML-Attribut widerspiegelt und anzeigt, ob das {{htmlelement("dialog")}} für die Interaktion verfügbar ist.

## Wert

Ein boolescher Wert, der den Zustand des [`open`](/de/docs/Web/HTML/Element/dialog#open) HTML-Attributs darstellt. `true` bedeutet, dass es gesetzt ist und somit der Dialog angezeigt wird. `false` bedeutet, dass es nicht gesetzt ist, und somit der Dialog nicht angezeigt wird.

Die Eigenschaft ist nicht nur lesbar — es ist möglich, den Wert zu setzen, um den Dialog programmatisch anzuzeigen oder zu verbergen.

## Beispiele

Das folgende Beispiel zeigt einen einfachen Button, der, wenn er gedrückt wird, ein
{{htmlelement("dialog")}} mit einem Formular über die Methode `showModal()` öffnet.
Von dort aus können Sie auf den _Abbrechen_-Button klicken, um den Dialog zu schließen (über die
{{domxref("HTMLDialogElement.close()")}}-Methode), oder das Formular über den Absenden-Button einreichen.

```html
<!-- Einfache Pop-up-Dialogbox -->
<dialog id="dialog">
  <form method="dialog">
    <button type="submit">Schließen</button>
  </form>
</dialog>

<p>
  <button id="openDialog">Dialog öffnen</button>
</p>
<p id="dialogStatus"></p>

<script>
  (() => {
    const openDialog = document.getElementById("openDialog");
    const dialog = document.getElementById("dialog");
    const text = document.getElementById("dialogStatus");

    function openCheck(dialog) {
      if (dialog.open) {
        text.innerText = "Dialog geöffnet";
      } else {
        text.innerText = "Dialog geschlossen";
      }
    }

    // Aktualisiert den Button, um eine modale Dialogbox zu öffnen
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

- Das HTML-Element, das diese Schnittstelle implementiert: {{ HTMLElement("dialog") }}.
