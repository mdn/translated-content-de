---
title: "Notification: click-Ereignis"
short-title: click
slug: Web/API/Notification/click_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Das **`click`**-Ereignis der [`Notification`](/de/docs/Web/API/Notification)-Schnittstelle wird ausgelöst, wenn ein Benutzer auf eine angezeigte [`Notification`](/de/docs/Web/API/Notification) klickt.

Standardmäßig wird der Fokus auf den Viewport des mit der Benachrichtigung verknüpften [Browsing Contexts](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context) verschoben. Wenn Sie dieses Verhalten nicht möchten, rufen Sie [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) für das Ereignisobjekt auf.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("click", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onclick = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Im folgenden Beispiel verwenden wir einen onclick-Handler, um eine Webseite in einem neuen Tab zu öffnen (angegeben durch den Parameter `'_blank'`), sobald auf eine Benachrichtigung geklickt wird:

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

- [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
