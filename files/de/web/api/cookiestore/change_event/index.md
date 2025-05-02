---
title: "CookieStore: change Ereignis"
short-title: change
slug: Web/API/CookieStore/change_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}

Ein `change`-Ereignis wird an einem [`CookieStore`](/de/docs/Web/API/CookieStore)-Objekt ausgelöst, wenn eine Änderung an einem Cookie vorgenommen wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("change", (event) => { })

onchange = (event) => { }
```

## Ereignistyp

Ein [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("CookieChangeEvent")}}

## Beispiele

Um informiert zu werden, wenn ein Cookie geändert wurde, können Sie einen Handler zur Instanz von `cookieStore` mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzufügen, so:

```js
cookieStore.addEventListener("change", (event) => {
  console.log("1 change event");
});
```

Alternativ können Sie die `onchange`-Ereignishandler-Eigenschaft verwenden, um einen Handler für das `change`-Ereignis zu etablieren:

```js
cookieStore.onchange = (event) => {
  console.log("1 change event");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
