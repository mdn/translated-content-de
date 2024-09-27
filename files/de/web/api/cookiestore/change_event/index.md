---
title: "CookieStore: change Event"
short-title: change
slug: Web/API/CookieStore/change_event
l10n:
  sourceCommit: 74206b3f81736bac558470f36222544cc67ba9e2
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}

Ein `change`-Ereignis wird bei einem [`CookieStore`](/de/docs/Web/API/CookieStore)-Objekt ausgelöst, wenn eine Änderung an einem Cookie vorgenommen wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
cookieStore.addEventListener("change", (event) => { })

cookieStore.onchange = (event) => { }
```

## Ereignistyp

Ein [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("CookieChangeEvent")}}

## Beispiele

Um informiert zu werden, wenn sich ein Cookie ändert, können Sie einen Handler zur `cookieStore`-Instanz hinzufügen, indem Sie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, wie hier:

```js
cookieStore.addEventListener("change", (event) => {
  console.log("1 change event");
});
```

Alternativ können Sie die `onchange`-Ereignis-Handler-Eigenschaft verwenden, um einen Handler für das `change`-Ereignis festzulegen:

```js
cookieStore.onchange = (event) => {
  console.log("1 change event");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
