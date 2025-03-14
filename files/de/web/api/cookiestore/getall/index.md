---
title: "CookieStore: getAll() Methode"
short-title: getAll()
slug: Web/API/CookieStore/getAll
l10n:
  sourceCommit: 372d2f15b56a753235002946c7775d0b38f6f3eb
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Die **`getAll()`**-Methode der [`CookieStore`](/de/docs/Web/API/CookieStore)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das als Array von Cookies aufgelöst wird, die mit dem übergebenen `name` oder den `options` übereinstimmen.
Ohne Parameter werden alle Cookies für den aktuellen Kontext zurückgegeben.

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

  - : Ein Objekt, das Folgendes enthält:

    - `name`
      - : Ein Zeichenfolgenwert mit dem Namen eines Cookies.
    - `url`
      - : Eine Zeichenfolge mit der URL eines Cookies.

> [!NOTE]
> Die `url`-Option ermöglicht die Modifikation eines Cookies, das unter einer bestimmten URL definiert ist. Service Worker können Cookies erhalten, die an jede URL unter ihrem Gültigkeitsbereich gesendet würden. Innerhalb eines Dokuments können Sie nur die Cookies an der aktuellen URL abrufen, daher ist die einzige gültige URL in einem Dokumentkontext die URL des Dokuments selbst.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von Objekten aufgelöst wird, die Cookies darstellen, die dem gegebenen `name` oder den `options` entsprechen.

Jedes Objekt enthält die folgenden Eigenschaften:

- `domain`

  - : Eine Zeichenfolge, die die Domäne des Cookies enthält.

- `expires`

  - : Ein Zeitstempel im {{Glossary("Unix_time", "Unix-Zeit")}}-Format in Millisekunden, der das Ablaufdatum des Cookies enthält.

- `name`

  - : Eine Zeichenfolge, die den Namen des Cookies enthält.

- `partitioned`

  - : Ein boolescher Wert, der angibt, ob es sich um ein partitioniertes Cookie handelt (`true`) oder nicht (`false`). Siehe [Cookies mit unabhängiger partitionierter Zustandsverwaltung (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) für weitere Informationen.

- `path`

  - : Eine Zeichenfolge, die den Pfad des Cookies enthält.

- `sameSite`

  - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Werte: [`"strict"`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#strict), [`"lax"`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#lax) oder [`"none"`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#none).

- `secure`

  - : Ein boolescher Wert, der angibt, ob das Cookie nur in sicheren Kontexten verwendet werden soll (`true`) oder nicht (`false`).

- `value`
  - : Eine Zeichenfolge, die den Wert des Cookies enthält.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Ursprung nicht zu einer URL {{Glossary("Serialization", "serialisiert")}} wird.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Die Methode im Hauptthread aufgerufen wird und die `url`-Option angegeben ist, aber nicht mit der URL des aktuellen Fensters übereinstimmt.
    - Die Methode in einem Worker aufgerufen wird und die `url`-Option angegeben ist, aber nicht mit dem Ursprung des Workers übereinstimmt.
    - Die Abfrage nach Cookies, die durch den angegebenen `name` oder die `options` dargestellt werden, fehlschlägt.

## Beispiele

<!-- Die Beispiele funktionieren nicht als Live-Beispiele in der MDN-Umgebung (aufgrund unbekannter Fehler) -->

### Alle Cookies für diesen Kontext abrufen

Dieses Beispiel zeigt, wie man alle Cookies im aktuellen Kontext erhält.

Zuerst definieren wir `setTestCookies()`, die die Test-Cookies "cookie1" und "cookie2" erstellt und auftretende Fehler protokolliert.

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

Die `cookieTest()`-Methode ruft `setTestCookies()` auf und wartet anschließend auf `getAll()`.
Dies gibt ein {{jsxref("Promise")}} zurück, das mit allen Cookies für diesen Kontext als Array von Objekten aufgelöst wird, oder mit einem leeren Array, wenn keine Cookies vorhanden sind.
Wenn das zurückgegebene Promise mit einem Array, das Cookie-Informationen enthält, aufgelöst wird, iterieren wir durch das Array und protokollieren jedes Cookie ("cookie1" und "cookie2").

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
