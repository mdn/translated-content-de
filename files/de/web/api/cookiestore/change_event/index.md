---
title: "CookieStore: change Ereignis"
short-title: change
slug: Web/API/CookieStore/change_event
l10n:
  sourceCommit: 74206b3f81736bac558470f36222544cc67ba9e2
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}

Ein `change` Ereignis wird bei einem {{domxref("CookieStore")}} Objekt ausgelöst, wenn eine Änderung an einem Cookie vorgenommen wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
cookieStore.addEventListener("change", (event) => { })

cookieStore.onchange = (event) => { }
```

## Ereignistyp

Ein {{domxref("CookieChangeEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("CookieChangeEvent")}}

## Beispiele

Um informiert zu werden, wenn sich ein Cookie geändert hat, können Sie mit {{domxref("EventTarget.addEventListener", "addEventListener()")}} einen Handler zur `cookieStore` Instanz hinzufügen, wie hier:

```js
cookieStore.addEventListener("change", (event) => {
  console.log("1 change event");
});
```

Alternativ können Sie die `onchange` Ereignishandler-Eigenschaft verwenden, um einen Handler für das `change` Ereignis festzulegen:

```js
cookieStore.onchange = (event) => {
  console.log("1 change event");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
