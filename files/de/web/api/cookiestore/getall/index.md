---
title: "CookieStore: Methode getAll()"
short-title: getAll()
slug: Web/API/CookieStore/getAll
l10n:
  sourceCommit: 5ef5a171a41dbcb48c953cc3c98c1237566796e9
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Die **`getAll()`** Methode der [`CookieStore`](/de/docs/Web/API/CookieStore) Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von Cookies aufgelöst wird, die dem übergebenen `name` oder `options` entsprechen.
Werden keine Parameter übergeben, werden alle Cookies für den aktuellen Kontext zurückgegeben.

## Syntax

```js-nolint
getAll()
getAll(name)
getAll(options)
```

### Parameter

- `name` {{optional_inline}}
  - : Ein String, der den Namen eines Cookies enthält.

Oder

- `options` {{optional_inline}}
  - : Ein Objekt, das Folgendes enthält:
    - `name`
      - : Ein String, der den Namen eines Cookies enthält.
    - `url`
      - : Ein String, der die URL eines Cookies enthält.

> [!NOTE]
> Die `url`-Option ermöglicht die Modifikation eines Cookies, das unter einer bestimmten URL eingetragen ist. Service Worker können Cookies erhalten, die an eine beliebige URL in ihrem Gültigkeitsbereich gesendet würden. Von einem Dokument aus können Sie nur die Cookies der aktuellen URL erhalten, also ist die einzig gültige URL im Dokumentkontext die URL des Dokuments.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von Objekten aufgelöst wird, die Cookies repräsentieren, die dem angegebenen `name` oder `options` entsprechen.

Jedes Objekt enthält die folgenden Eigenschaften:

- `domain`
  - : Ein String, der die Domäne des Cookies enthält.

- `expires`
  - : Ein Zeitstempel in {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden, der das Ablaufdatum des Cookies enthält.

- `name`
  - : Ein String, der den Namen des Cookies enthält.

- `partitioned`
  - : Ein boolescher Wert, der angibt, ob das Cookie ein partitioniertes Cookie (`true`) ist oder nicht (`false`). Weitere Informationen finden Sie unter [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies).

- `path`
  - : Ein String, der den Pfad des Cookies enthält.

- `sameSite`
  - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Werte: [`"strict"`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#strict), [`"lax"`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#lax) oder [`"none"`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#none).

- `secure`
  - : Ein boolescher Wert, der angibt, ob das Cookie nur in sicheren Kontexten verwendet werden soll (`true`) oder nicht (`false`).

- `value`
  - : Ein String, der den Wert des Cookies enthält.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Ursprung nicht zu einer URL {{Glossary("Serialization", "serialisiert")}} werden kann.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Die Methode im Haupt-Thread aufgerufen wird und die `url`-Option angegeben wird, die jedoch nicht mit der URL des aktuellen Fensters übereinstimmt.
    - Die Methode in einem Worker aufgerufen wird und die `url`-Option angegeben wird, die jedoch nicht mit dem Ursprung des Workers übereinstimmt.
    - Die Abfrage von Cookies, die durch den gegebenen `name` oder `options` dargestellt werden, fehlschlägt.

## Beispiele

<!-- Die Beispiele funktionieren aufgrund unbekannter Fehler nicht als Live-Beispiele in der MDN-Umgebung. -->

### Alle Cookies für diesen Kontext abrufen

Dieses Beispiel zeigt, wie alle Cookies im aktuellen Kontext abgerufen werden.

Zuerst definieren wir `setTestCookies()`, das die Test-Cookies "cookie1" und "cookie2" erstellt und dabei Fehler protokolliert.

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
Das gibt ein {{jsxref("Promise")}} zurück, das mit allen Cookies für diesen Kontext als Array von Objekten oder einem leeren Array, falls keine Cookies vorhanden sind, aufgelöst wird.
Wenn das zurückgegebene Promise mit einem Array von Cookie-Informationen aufgelöst wird, iterieren wir über das Array und protokollieren jedes Cookie ("cookie1" und "cookie2").

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
