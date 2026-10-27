---
title: "CookieStore: change-Ereignis"
short-title: change
slug: Web/API/CookieStore/change_event
l10n:
  sourceCommit: 1c322acc575d927494ecff49c04159ba34aec781
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}

Ein `change`-Ereignis wird an einem [`CookieStore`](/de/docs/Web/API/CookieStore)-Objekt ausgelöst, wenn ein Cookie geändert wird.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("change", (event) => { })
```

Alternativ können Sie der [Ereignishandler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
onchange = (event) => { }
```

## Ereignistyp

Ein [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("CookieChangeEvent")}}

## Beispiele

Um benachrichtigt zu werden, wenn ein Cookie geändert wurde, können Sie der `cookieStore`-Instanz mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) einen Ereignishandler hinzufügen:

```js
cookieStore.addEventListener("change", (event) => {
  console.log("1 change event");
});
```

Alternativ können Sie die Ereignishandler-Eigenschaft `onchange` verwenden, um einen Handler für das `change`-Ereignis festzulegen. Beachten Sie jedoch, dass dadurch ein zuvor über `onchange` festgelegter Handler ersetzt wird, falls vorhanden:

```js
cookieStore.onchange = (event) => {
  console.log("1 change event");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
