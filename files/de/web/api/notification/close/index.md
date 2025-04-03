---
title: "Benachrichtigung: close() Methode"
short-title: close()
slug: Web/API/Notification/close
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Die **`close()`** Methode des [`Notification`](/de/docs/Web/API/Notification)-Interfaces wird verwendet, um eine zuvor angezeigte Benachrichtigung zu schließen oder zu entfernen.

> [!NOTE]
> Diese API sollte nicht nur verwendet werden, um die Benachrichtigung nach einer festgelegten Verzögerung vom Bildschirm zu entfernen, da diese Methode die Benachrichtigung auch aus jeglichen Benachrichtigungsfeldern entfernt und die Interaktion der Benutzer damit verhindert, nachdem sie ursprünglich angezeigt wurde. Eine gültige Verwendung für diese API wäre das Entfernen einer Benachrichtigung, die nicht mehr relevant ist (z.B., der Benutzer hat die Benachrichtigung bereits auf der Webseite gelesen, im Falle einer Messaging-App, oder der nächste Song wird bereits in einer Musik-App abgespielt).

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Im folgenden Codeausschnitt haben wir eine Funktion, die beim Aufruf ein `options`-Objekt erstellt und dann eine neue Benachrichtigung. Am Ende der Funktion wird `close()` in einer [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Funktion aufgerufen, um die Benachrichtigung zu entfernen, nachdem der relevante Inhalt auf der Webseite gelesen wurde.

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
