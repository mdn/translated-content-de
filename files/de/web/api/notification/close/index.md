---
title: "Notification: close()-Methode"
short-title: close()
slug: Web/API/Notification/close
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Die **`close()`**-Methode des {{domxref("Notification")}}-Interfaces wird verwendet, um eine zuvor angezeigte Benachrichtigung zu schließen/entfernen.

> [!NOTE]
> Dieses API sollte nicht nur verwendet werden, um die Benachrichtigung nach einer festgelegten Verzögerung vom Bildschirm zu entfernen, da diese Methode die Benachrichtigung auch aus jedem Benachrichtigungsbereich entfernt und verhindert, dass Benutzer nach der ersten Anzeige mit ihr interagieren können. Eine gültige Verwendung für dieses API wäre es, eine Benachrichtigung zu entfernen, die nicht mehr relevant ist (z. B. der Benutzer hat die Benachrichtigung bereits auf der Webseite in einer Messaging-App gelesen oder der nächste Song wird bereits in einer Musik-App abgespielt).

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Im folgenden Codeausschnitt haben wir eine einfache Funktion, die ein `options`-Objekt erstellt und dann eine neue Benachrichtigung erzeugt, wenn sie aufgerufen wird. Am Ende der Funktion wird `close()` in einer {{domxref("EventTarget.addEventListener", "addEventListener()")}}-Funktion aufgerufen, um die Benachrichtigung zu entfernen, wenn der relevante Inhalt auf der Webseite gelesen wurde.

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
