---
title: "Window: closed-Eigenschaft"
short-title: closed
slug: Web/API/Window/closed
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`Window.closed`**-Eigenschaft zeigt an, ob das referenzierte Fenster geschlossen ist oder nicht.

## Wert

Ein boolescher Wert. Mögliche Werte:

- `true`: Das Fenster wurde geschlossen.
- `false`: Das Fenster ist geöffnet.

## Beispiele

### Die URL eines Fensters von einem Popup ändern

Das folgende Beispiel zeigt, wie ein Popup-Fenster die URL des Fensters ändern kann, das es geöffnet hat. Bevor versucht wird, die URL zu ändern, wird geprüft, ob das aktuelle Fenster einen "Opener" mit der [`window.opener`](/de/docs/Web/API/Window/opener)-Eigenschaft hat und dass dieser "Opener" nicht geschlossen ist:

```js
// Check that an opener exists and is not closed
if (window.opener && !window.opener.closed) {
  window.opener.location.href = "https://www.mozilla.org";
}
```

Beachten Sie, dass Popups nur auf das Fenster zugreifen können, das sie geöffnet hat.

### Aktualisierung eines zuvor geöffneten Popups

In diesem Beispiel ruft die Funktion `refreshPopupWindow()` die Methode `reload()` des Standortobjekts des Popups auf, um dessen Daten zu aktualisieren. Falls das Popup noch nicht geöffnet wurde oder der Benutzer es geschlossen hat, wird ein neues Fenster geöffnet.

```js
let popupWindow = null;

function refreshPopupWindow() {
  if (popupWindow && !popupWindow.closed) {
    // popupWindow is open, refresh it
    popupWindow.location.reload(true);
  } else {
    // Open a new popup window
    popupWindow = window.open("popup.html", "dataWindow");
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
