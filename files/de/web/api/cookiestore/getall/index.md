---
title: "CookieStore: getAll() Methode"
short-title: getAll()
slug: Web/API/CookieStore/getAll
l10n:
  sourceCommit: e161086720f53ca4a4dabed5b69743324d194b23
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Die **`getAll()`**-Methode der [`CookieStore`](/de/docs/Web/API/CookieStore)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das als ein Array von Cookies aufgelöst wird, die dem übergebenen `name` oder `options` entsprechen. Wenn keine Parameter übergeben werden, werden alle Cookies für den aktuellen Kontext zurückgegeben.

## Syntax

```js-nolint
getAll()
getAll(name)
getAll(options)
```

### Parameter

- `name` {{optional_inline}}
  - : Ein String mit dem Namen eines Cookies.

Oder

- `options` {{optional_inline}}
  - : Ein Objekt, das enthält:
    - `name`
      - : Ein String mit dem Namen eines Cookies.
    - `url`
      - : Ein String mit der URL eines Cookies.

> [!NOTE]
> Die `url`-Option ermöglicht die Modifikation eines Cookies, das unter einer bestimmten URL definiert ist. Service Worker können Cookies abrufen, die an jede URL unter ihrem Geltungsbereich gesendet würden. Aus einem Dokument können Sie nur die Cookies an der aktuellen URL abrufen, daher ist die einzige gültige URL im Kontext eines Dokuments die URL des Dokuments selbst.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von Objekten aufgelöst wird, die Cookies repräsentieren, die dem angegebenen `name` oder `options` entsprechen.

Jedes Objekt enthält die folgenden Eigenschaften:

- `name`
  - : Ein String, der den Namen des Cookies enthält.
- `value`
  - : Ein String, der den Wert des Cookies enthält.

Die folgenden Eigenschaften sind nicht standardisiert und sollten nicht als zuverlässig angesehen werden:

- `domain` {{experimental_inline}} {{non-standard_inline}}
  - : Ein String, der die Domain des Cookies enthält.
- `expires` {{experimental_inline}} {{non-standard_inline}}
  - : Ein Zeitstempel, in Millisekunden als {{Glossary("Unix_time", "Unix-Zeit")}} angegeben, der das Ablaufdatum des Cookies enthält.
- `partitioned` {{experimental_inline}} {{non-standard_inline}}
  - : Ein boolean, der anzeigt, ob das Cookie ein partitioniertes Cookie ist (`true`) oder nicht (`false`). Weitere Informationen finden Sie unter [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies).
- `path` {{experimental_inline}} {{non-standard_inline}}
  - : Ein String, der den Pfad des Cookies enthält.
- `sameSite` {{experimental_inline}} {{non-standard_inline}}
  - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Werte: [`"strict"`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#strict), [`"lax"`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#lax), oder [`"none"`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#none).
- `secure` {{experimental_inline}} {{non-standard_inline}}
  - : Ein boolean-Wert, der angibt, ob das Cookie nur in sicheren Kontexten verwendet werden soll (`true`) oder nicht (`false`).

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Ursprung sich nicht in eine URL {{Glossary("Serialization", "serialisieren")}} lässt.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Die Methode im Haupt-Thread aufgerufen wird und die `url`-Option angegeben ist, die jedoch nicht mit der URL des aktuellen Fensters übereinstimmt.
    - Die Methode in einem Worker aufgerufen wird und die `url`-Option angegeben ist, die jedoch nicht mit dem Ursprung des Workers übereinstimmt.
    - Das Abfragen von Cookies, die durch den angegebenen `name` oder `options` repräsentiert werden, fehlschlägt.

## Beispiele

<!-- Die Beispiele funktionieren aufgrund unbekannter Fehler nicht als Live-Beispiele in der MDN-Umgebung. -->

### Alle Cookies für diesen Kontext abrufen

Dieses Beispiel zeigt, wie man alle Cookies im aktuellen Kontext abruft.

Zuerst definieren wir `setTestCookies()`, wodurch die Test-Cookies "cookie1" und "cookie2" erstellt werden, wobei etwaige Fehler protokolliert werden.

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

Die Methode `cookieTest()` ruft `setTestCookies()` auf und wartet dann auf `getAll()`.
Dies gibt ein {{jsxref("Promise")}} zurück, das alle Cookies für diesen Kontext als ein Array von Objekten oder ein leeres Array, wenn keine Cookies vorhanden sind, auflöst.
Wenn das zurückgegebene Promise mit einem Array aufgelöst wird, das Cookie-Informationen enthält, gehen wir das Array durch und protokollieren jedes Cookie ("cookie1" und "cookie2").

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
