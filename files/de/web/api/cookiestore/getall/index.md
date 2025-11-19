---
title: "CookieStore: getAll() Methode"
short-title: getAll()
slug: Web/API/CookieStore/getAll
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Die **`getAll()`** Methode der [`CookieStore`](/de/docs/Web/API/CookieStore) Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das sich zu einem Array von Cookies auflöst, die mit dem übergebenen `name` oder den `options` übereinstimmen. Werden keine Parameter übergeben, werden alle Cookies für den aktuellen Kontext zurückgegeben.

## Syntax

```js-nolint
getAll()
getAll(name)
getAll(options)
```

### Parameter

- `name` {{optional_inline}}
  - : Ein Zeichenfolgenwert mit dem Namen eines Cookies.

Oder

- `options` {{optional_inline}}
  - : Ein Objekt, das folgendes enthält:
    - `name`
      - : Eine Zeichenfolge mit dem Namen eines Cookies.
    - `url`
      - : Eine Zeichenfolge mit der URL eines Cookies.

> [!NOTE]
> Die `url` Option ermöglicht die Modifikation eines Cookies, das für eine bestimmte URL vorgesehen ist. Service Workers können Cookies erhalten, die an jede URL innerhalb ihres Bereichs gesendet werden würden. Von einem Dokument aus können Sie nur die Cookies der aktuellen URL abrufen, daher ist die einzige gültige URL im Dokumentkontext die URL des Dokuments.

### Rückgabewert

Ein {{jsxref("Promise")}}, das ein Array von Objekten zurückgibt, die Cookies repräsentieren, die mit dem gegebenen `name` oder `options` übereinstimmen.

Jedes Objekt enthält die folgenden Eigenschaften:

- `domain`
  - : Eine Zeichenfolge, die die Domain des Cookies enthält.

- `expires`
  - : Ein Zeitstempel, angegeben als {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden, der das Ablaufdatum des Cookies enthält.

- `name`
  - : Eine Zeichenfolge, die den Namen des Cookies enthält.

- `partitioned`
  - : Ein boolescher Wert, der angibt, ob das Cookie ein partitioniertes Cookie (`true`) ist oder nicht (`false`). Weitere Informationen finden Sie unter [Cookies mit unabhängigem partitionierten Zustand (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies).

- `path`
  - : Eine Zeichenfolge, die den Pfad des Cookies enthält.

- `sameSite`
  - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) Werte: [`"strict"`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#strict), [`"lax"`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#lax) oder [`"none"`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#none).

- `secure`
  - : Ein boolescher Wert, der angibt, ob das Cookie nur in sicheren Kontexten verwendet werden soll (`true`) oder nicht (`false`).

- `value`
  - : Eine Zeichenfolge, die den Wert des Cookies enthält.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Ursprung nicht zu einer URL {{Glossary("Serialization", "serialisiert")}} werden kann.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Die Methode im Hauptthread aufgerufen wird und die `url` Option angegeben ist, aber nicht mit der URL des aktuellen Fensters übereinstimmt.
    - Die Methode in einem Worker aufgerufen wird und die `url` Option angegeben ist, aber nicht mit dem Ursprung des Workers übereinstimmt.
    - Das Abfragen von Cookies, die durch den gegebenen `name` oder `options` repräsentiert werden, fehlschlägt.

## Beispiele

<!-- Die Beispiele funktionieren in der MDN-Umgebung nicht als Live-Beispiele (aufgrund unbekannter Fehler) -->

### Alle Cookies für diesen Kontext abrufen

Dieses Beispiel zeigt, wie man alle Cookies im aktuellen Kontext abrufen kann.

Zuerst definieren wir `setTestCookies()`, das die Test-Cookies "cookie1" und "cookie2" erstellt und dabei eventuelle Fehler protokolliert.

```js
async function setTestCookies() {
  // Set two cookies
  try {
    await cookieStore.set("cookie1", "cookie1-value");
  } catch (error) {
    console.log(`Error setting cookie1: ${error}`);
  }

  try {
    await cookieStore.set("cookie2", "cookie2-value");
  } catch (error) {
    console.log(`Error setting cookie2: ${error}`);
  }
}
```

Die `cookieTest()` Methode ruft `setTestCookies()` auf und wartet dann auf `getAll()`.
Dies gibt ein {{jsxref("Promise")}} zurück, das sich zu allen Cookies für diesen Kontext als Array von Objekten auflöst oder ein leeres Array, wenn keine Cookies vorhanden sind.
Wenn das zurückgegebene Promise mit einem Array aufgelöst wird, das Cookie-Informationen enthält, durchlaufen wir das Array und protokollieren jedes Cookie ("cookie1" und "cookie2").

```js
async function cookieTest() {
  // Set our test cookies
  await setTestCookies();

  // Get all cookies
  const cookies = await cookieStore.getAll();

  // Iterate the cookies, or log that none were found
  if (cookies.length > 0) {
    console.log(`Found cookies: ${cookies.length}:`);
    cookies.forEach((cookie) => console.log(cookie));
  } else {
    console.log("Cookies not found");
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
