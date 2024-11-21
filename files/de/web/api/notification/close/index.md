---
title: "Benachrichtigung: close() Methode"
short-title: close()
slug: Web/API/Notification/close
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Die **`close()`** Methode der [`Notification`](/de/docs/Web/API/Notification) Schnittstelle wird verwendet, um eine zuvor angezeigte Benachrichtigung zu schließen/entfernen.

> [!NOTE]
> Diese API sollte nicht verwendet werden, um die Benachrichtigung einfach nach einer festen Verzögerung vom Bildschirm zu entfernen, da diese Methode die Benachrichtigung auch aus jedem Benachrichtigungsfeld entfernt, wodurch Benutzer daran gehindert werden, nach der ersten Anzeige mit ihr zu interagieren. Eine gültige Verwendung dieser API wäre das Entfernen einer Benachrichtigung, die nicht mehr relevant ist (z.B. der Benutzer hat die Benachrichtigung bereits auf der Webseite in einem Messaging-App gelesen oder das nächste Lied wird bereits in einer Musik-App abgespielt).

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Im folgenden Code-Schnipsel haben wir eine Funktion, die beim Aufruf ein `options` Objekt erstellt und dann eine neue Benachrichtigung. Am Ende der Funktion wird `close()` innerhalb einer [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) Funktion aufgerufen, um die Benachrichtigung zu entfernen, wenn die relevanten Inhalte auf der Webseite gelesen wurden.

```js
function spawnNotification(theBody, theIcon, theTitle) {
  const options = {
    body: theBody,
    icon: theIcon,
  };

  const n = new Notification(theTitle, options);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      // The tab has become visible so clear the now-stale Notification.
      n.close();
    }
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
