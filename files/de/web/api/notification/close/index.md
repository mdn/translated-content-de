---
title: "Benachrichtigung: close() Methode"
short-title: close()
slug: Web/API/Notification/close
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Die **`close()`** Methode des [`Notification`](/de/docs/Web/API/Notification)-Interfaces wird verwendet, um eine zuvor angezeigte Benachrichtigung zu schließen/entfernen.

> [!NOTE]
> Diese API sollte nicht verwendet werden, um die Benachrichtigung nach einer festen Verzögerung vom Bildschirm zu entfernen, da diese Methode die Benachrichtigung auch aus jeder Benachrichtigungsleiste entfernt und verhindert, dass Benutzer mit ihr interagieren können, nachdem sie ursprünglich angezeigt wurde. Ein gültiger Anwendungsfall für diese API wäre das Entfernen einer Benachrichtigung, die nicht mehr relevant ist (z. B. hat der Benutzer die Benachrichtigung auf der Webseite bereits gelesen im Fall einer Messaging-App, oder das folgende Lied spielt bereits in einer Musik-App).

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Im folgenden Codeausschnitt haben wir eine einfache Funktion, die, wenn sie aufgerufen wird, ein `options`-Objekt erstellt und dann eine neue Benachrichtigung. Am Ende der Funktion wird auch `close()` innerhalb einer [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Funktion aufgerufen, um die Benachrichtigung zu entfernen, wenn die relevanten Inhalte auf der Webseite gelesen wurden.

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

- [Verwenden der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
