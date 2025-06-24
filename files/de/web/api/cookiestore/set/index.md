---
title: "CookieStore: set() Methode"
short-title: set()
slug: Web/API/CookieStore/set
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Die **`set()`** Methode der [`CookieStore`](/de/docs/Web/API/CookieStore) Schnittstelle setzt ein Cookie mit dem angegebenen `name` und `value` oder einem `options`-Objekt.

## Syntax

```js-nolint
set(name, value)
set(options)
```

### Parameter

Diese Methode erfordert eine der folgenden Angaben:

- `name` {{optional_inline}}
  - : Ein String mit dem Namen des Cookies.
- `value` {{optional_inline}}
  - : Ein String mit dem Wert des Cookies.

Oder

- `options` {{optional_inline}}
  - : Ein Objekt, das folgende enthält:
    - `domain` {{Optional_Inline}}
      - : Ein String, der die Domain des Cookies enthält. Standardwert ist `null`.
    - `expires` {{Optional_Inline}}
      - : Ein Zeitstempel, angegeben als {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden, der das Ablaufdatum des Cookies enthält. Standardwert ist `null`.
    - `name`
      - : Ein String mit dem Namen eines Cookies.
    - `partitioned` {{Optional_Inline}}
      - : Ein boolescher Wert, der standardmäßig auf `false` steht. Wenn er auf `true` gesetzt wird, wird das gesetzte Cookie ein partitioniertes Cookie sein. Weitere Informationen finden Sie unter [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies).
    - `path` {{Optional_Inline}}
      - : Ein String, der den Pfad des Cookies enthält. Standardwert ist `/`.
    - `sameSite` {{Optional_Inline}}
      - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Werte: [`"strict"`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#strict), [`"lax"`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#lax) oder [`"none"`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#none).
    - `value`
      - : Ein String mit dem Wert des Cookies.

> [!NOTE]
> Obwohl die Werte hier gesetzt werden können und intern verwendet werden, werden einige Browser nur `name` und `value` Optionen von [`CookieStore.get()`](/de/docs/Web/API/CookieStore/get) und [`CookieStore.getAll()`](/de/docs/Web/API/CookieStore/getAll) zurückgeben.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit {{jsxref("undefined")}} auflöst, wenn das Setzen des Cookies abgeschlossen ist.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Ursprung nicht zu einer URL {{Glossary("Serialization", "serialisiert")}} werden kann.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das Setzen des Cookies mit dem gegebenen `name` und `value` oder `options` fehlschlägt.

## Beispiele

<!-- Die Beispiele funktionieren in der MDN-Umgebung nicht als Live-Beispiele (aufgrund unbekannter Fehler) -->

### Setzen eines Cookies mit Name und Wert

Dieses Beispiel setzt ein Cookie, indem ein `name` und `value` von "cookie1" beziehungsweise "cookie1-value" übergeben wird.
Die anderen Eigenschaften des Cookies werden mit Standardwerten gesetzt, wie im [`options`](#options) Parameter definiert.

Der Code wartet zuerst darauf, dass das Cookie gesetzt wird: Da diese Operation fehlschlagen kann, wird die Operation in einem `try...catch` Block durchgeführt und alle Fehler werden an die Konsole protokolliert.
Danach wird das gerade gesetzte Cookie geholt und protokolliert.

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

Dieses Beispiel setzt ein Cookie, indem ein `options`-Objekt mit `name`, `value`, `expires` und `partitioned` übergeben wird.

Der Code wartet zuerst darauf, dass das Cookie gesetzt wird: Da diese Operation fehlschlagen kann, wird die Operation in einem `try...catch` Block durchgeführt und alle Fehler werden an die Konsole protokolliert.
Danach wird das gerade gesetzte Cookie geholt und protokolliert.

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
