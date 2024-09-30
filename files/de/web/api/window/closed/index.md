---
title: "Window: closed-Eigenschaft"
short-title: closed
slug: Web/API/Window/closed
l10n:
  sourceCommit: 94ef07a7b073c2663cbace0667bdb717a40bfa28
---

{{APIRef}}

Die schreibgeschützte Eigenschaft **`Window.closed`** zeigt an, ob das referenzierte Fenster geschlossen ist oder nicht.

## Wert

Ein boolescher Wert. Mögliche Werte:

- `true`: Das Fenster wurde geschlossen.
- `false`: Das Fenster ist geöffnet.

## Beispiele

### Die URL eines Fensters aus einem Popup ändern

Das folgende Beispiel zeigt, wie ein Popup-Fenster die URL des Fensters ändern kann, das es geöffnet hat. Bevor versucht wird, die URL zu ändern, wird überprüft, ob das aktuelle Fenster einen `opener` mit der [`window.opener`](/de/docs/Web/API/Window/opener)-Eigenschaft hat und dass der `opener` nicht geschlossen ist:

```js
// Check that an opener exists and is not closed
if (window.opener && !window.opener.closed) {
  window.opener.location.href = "https://www.mozilla.org";
}
```

Beachten Sie, dass Popups nur auf das Fenster zugreifen können, das sie geöffnet hat.

### Erneutes Laden eines zuvor geöffneten Popups

In diesem Beispiel ruft die Funktion `refreshPopupWindow()` die Methode `reload()` des Location-Objekts des Popups auf, um dessen Daten zu aktualisieren. Wenn das Popup noch nicht geöffnet wurde oder der Benutzer es geschlossen hat, wird ein neues Fenster geöffnet.

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
