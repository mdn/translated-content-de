---
title: "Notification: click-Ereignis"
short-title: click
slug: Web/API/Notification/click_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Das **`click`**-Ereignis der [`Notification`](/de/docs/Web/API/Notification)-Schnittstelle wird ausgelöst, wenn der Benutzer auf eine angezeigte [`Notification`](/de/docs/Web/API/Notification) klickt.

Das Standardverhalten ist, den Fokus auf den Viewport des mit der Benachrichtigung verbundenen [Browsing-Kontexts](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context) zu verschieben. Wenn Sie dieses Verhalten nicht wünschen, rufen Sie [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) für das Ereignisobjekt auf.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("click", (event) => { })

onclick = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Im folgenden Beispiel verwenden wir einen onclick-Handler, um eine Webseite in einem neuen Tab zu öffnen (angegeben durch die Hinzufügung des `'_blank'` Parameters), sobald auf eine Benachrichtigung geklickt wird:

```js
notification.onclick = (event) => {
  event.preventDefault(); // prevent the browser from focusing the Notification's tab
  window.open("https://www.mozilla.org", "_blank");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Benachrichtigungs-API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
