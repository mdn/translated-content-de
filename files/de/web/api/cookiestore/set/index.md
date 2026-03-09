---
title: "CookieStore: set()-Methode"
short-title: set()
slug: Web/API/CookieStore/set
l10n:
  sourceCommit: f26af77e5448a44bb2e53f86db99a33e7379f9d5
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Die **`set()`**-Methode des [`CookieStore`](/de/docs/Web/API/CookieStore)-Interfaces setzt einen Cookie mit dem gegebenen `name` und `value` oder einem `options`-Objekt.

## Syntax

```js-nolint
set(name, value)
set(options)
```

### Parameter

Diese Methode erfordert eines der folgenden:

- `name` {{optional_inline}}
  - : Ein String mit dem Namen des Cookies.
- `value` {{optional_inline}}
  - : Ein String mit dem Wert des Cookies.

Oder

- `options` {{optional_inline}}
  - : Ein Objekt, das Folgendes enthält:
    - `domain` {{Optional_Inline}}
      - : Ein String, der die Domäne des Cookies enthält. Standardwert ist `null`.
    - `expires` {{Optional_Inline}}
      - : Ein Zeitstempel, angegeben als {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden, der das Ablaufdatum des Cookies enthält. Standardwert ist `null`.
    - `maxAge` {{Optional_Inline}}
      - : Eine Zahl, die die Anzahl der Sekunden bis zum Ablauf des Cookies darstellt. Eine Null oder eine negative Zahl lassen den Cookie sofort ablaufen. Wenn sowohl `expires` als auch `maxAge` gesetzt sind, schlägt der `set()`-Aufruf mit einem `TypeError` fehl. Standardwert ist `null`.
    - `name`
      - : Ein String mit dem Namen eines Cookies.
    - `partitioned` {{Optional_Inline}}
      - : Ein boolescher Wert, der standardmäßig `false` ist. Wenn auf `true` gesetzt, wird der gesetzte Cookie ein partitionierter Cookie sein. Weitere Informationen finden Sie unter [Cookies mit unabhängigem partitioniertem Zustand (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies).
    - `path` {{Optional_Inline}}
      - : Ein String, der den Pfad des Cookies enthält. Standardwert ist `/`.
    - `sameSite` {{Optional_Inline}}
      - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Werte: [`"strict"`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#strict), [`"lax"`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#lax) oder [`"none"`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#none).
    - `value`
      - : Ein String mit dem Wert des Cookies.

> [!NOTE]
> Während die Werte hier gesetzt werden können und intern verwendet werden, geben einige Browser nur `name` und `value`-Optionen von [`CookieStore.get()`](/de/docs/Web/API/CookieStore/get) und [`CookieStore.getAll()`](/de/docs/Web/API/CookieStore/getAll) zurück.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit {{jsxref("undefined")}} auflöst, wenn das Setzen des Cookies abgeschlossen ist.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Ursprung nicht in eine URL {{Glossary("Serialization", "serialisiert")}} werden kann.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Sowohl die Eigenschaften `expires` als auch `maxAge` gesetzt sind.
    - Das Setzen des Cookies mit dem gegebenen `name` und `value` oder `options` auf andere Weise fehlschlägt.

## Beispiele

<!-- Die Beispiele funktionieren in der MDN-Umgebung nicht als Live-Beispiele (aufgrund unbekannter Fehler) -->

### Setzen eines Cookies mit Namen und Wert

In diesem Beispiel wird ein Cookie gesetzt, indem ein `name` und `value` von "cookie1" und "cookie1-value" übergeben wird.
Die anderen Eigenschaften des Cookies werden mit den Standardwerten gesetzt, wie sie im [`options`](#options)-Parameter definiert sind.

Der Code wartet zunächst darauf, dass der Cookie gesetzt wird: Da diese Operation fehlschlagen kann, wird die Operation in einem `try...catch`-Block durchgeführt und alle Fehler werden in der Konsole protokolliert. Anschließend wird der gerade gesetzte Cookie abgerufen und protokolliert.

```js
async function cookieTest() {
  // Set cookie: passing name and value
  try {
    await cookieStore.set("cookie1", "cookie1-value");
  } catch (error) {
    console.log(`Error setting cookie1: ${error}`);
  }

  // Get the cookie and log its values
  const cookie = await cookieStore.get("cookie1");
  console.log(cookie);
}
```

### Setzen eines Cookies mit Optionen

In diesem Beispiel wird ein Cookie gesetzt, indem ein `options`-Objekt mit `name`, `value`, `expires` und `partitioned` übergeben wird.

Der Code wartet zunächst darauf, dass der Cookie gesetzt wird: Da diese Operation fehlschlagen kann, wird die Operation in einem `try...catch`-Block durchgeführt und alle Fehler werden in der Konsole protokolliert. Anschließend wird der gerade gesetzte Cookie abgerufen und protokolliert.

```js
async function cookieTest() {
  const day = 24 * 60 * 60 * 1000;
  const cookieName = "cookie2";
  try {
    // Set cookie: passing options
    await cookieStore.set({
      name: cookieName,
      value: `${cookieName}-value`,
      expires: Date.now() + day,
      partitioned: true,
    });
  } catch (error) {
    log(`Error setting ${cookieName}: ${error}`);
    console.log(error);
  }

  // Log the new cookie
  const cookie = await cookieStore.get(cookieName);
  console.log(cookie);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
