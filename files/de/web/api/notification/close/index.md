---
title: "Benachrichtigung: close()-Methode"
short-title: close()
slug: Web/API/Notification/close
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Die **`close()`**-Methode der [`Notification`](/de/docs/Web/API/Notification)-Schnittstelle wird verwendet, um eine zuvor angezeigte Benachrichtigung zu schließen/entfernen.

> [!NOTE]
> Diese API sollte nicht verwendet werden, um die Benachrichtigung nach einer festen Verzögerung vom Bildschirm zu entfernen, da diese Methode auch die Benachrichtigung aus jeglicher Benachrichtigungsleiste entfernt, wodurch Benutzer nicht mehr mit ihr interagieren können, nachdem sie ursprünglich angezeigt wurde. Ein gültiger Anwendungsfall für diese API wäre, eine Benachrichtigung zu entfernen, die nicht mehr relevant ist (z. B. wenn der Benutzer die Benachrichtigung auf der Webseite bereits gelesen hat, im Fall einer Messaging-App, oder der nächste Song bereits in einer Musik-App abgespielt wird).

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Im folgenden Codeausschnitt haben wir eine Funktion, die beim Aufruf ein `options`-Objekt erstellt und dann eine neue Benachrichtigung erzeugt. Am Ende der Funktion wird `close()` innerhalb einer [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Funktion aufgerufen, um die Benachrichtigung zu entfernen, wenn der relevante Inhalt auf der Webseite gelesen wurde.

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
