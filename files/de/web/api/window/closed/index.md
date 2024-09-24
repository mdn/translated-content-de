---
title: "Fenster: closed-Eigenschaft"
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
- `false`: Das Fenster ist offen.

## Beispiele

### Ändern der URL eines Fensters aus einem Popup

Das folgende Beispiel zeigt, wie ein Popup-Fenster die URL des Fensters ändern kann, das es geöffnet hat. Bevor versucht wird, die URL zu ändern, wird überprüft, ob das aktuelle Fenster einen {{domxref("window.opener")}} hat und ob der Opener nicht geschlossen ist:

```js
// Überprüfen, ob ein Opener existiert und nicht geschlossen ist
if (window.opener && !window.opener.closed) {
  window.opener.location.href = "https://www.mozilla.org";
}
```

Beachten Sie, dass Pop-ups nur auf das Fenster zugreifen können, das sie geöffnet hat.

### Aktualisieren eines zuvor geöffneten Popups

In diesem Beispiel ruft die Funktion `refreshPopupWindow()` die Methode `reload()` des location-Objekts des Popups auf, um seine Daten zu aktualisieren. Wenn das Popup noch nicht geöffnet wurde oder der Benutzer es geschlossen hat, wird ein neues Fenster geöffnet.

```js
let popupWindow = null;

function refreshPopupWindow() {
  if (popupWindow && !popupWindow.closed) {
    // popupWindow ist offen, aktualisiere es
    popupWindow.location.reload(true);
  } else {
    // Öffne ein neues Popup-Fenster
    popupWindow = window.open("popup.html", "dataWindow");
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
