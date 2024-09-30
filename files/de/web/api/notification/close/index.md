---
title: "Notification: close()-Methode"
short-title: close()
slug: Web/API/Notification/close
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Die **`close()`**-Methode des [`Notification`](/de/docs/Web/API/Notification)-Interfaces wird verwendet, um eine zuvor angezeigte Benachrichtigung zu schließen oder zu entfernen.

> [!NOTE]
> Diese API sollte nicht verwendet werden, um die Benachrichtigung nach einer festen Verzögerung vom Bildschirm zu entfernen, da diese Methode auch die Benachrichtigung aus jedem Benachrichtigungsbereich entfernt. Dies hindert die Benutzer daran, nach dem ersten Anzeigen damit zu interagieren. Eine valide Verwendung dieser API wäre, eine Benachrichtigung zu entfernen, die nicht mehr relevant ist (z.B. der Nutzer hat die Benachrichtigung bereits auf der Webseite gelesen im Fall einer Messaging-App oder der folgende Song wird bereits in einer Musik-App abgespielt).

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

Im folgenden Beispiel haben wir eine einfache Funktion, die beim Aufruf ein `options`-Objekt erstellt und dann eine neue Benachrichtigung. Am Ende der Funktion wird auch `close()` innerhalb einer [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Funktion aufgerufen, um die Benachrichtigung zu entfernen, wenn der relevante Inhalt auf der Webseite gelesen wurde.

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
