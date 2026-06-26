---
title: "CookieStore: delete() Methode"
short-title: delete()
slug: Web/API/CookieStore/delete
l10n:
  sourceCommit: 5ef5a171a41dbcb48c953cc3c98c1237566796e9
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Die **`delete()`** Methode des [`CookieStore`](/de/docs/Web/API/CookieStore) Interfaces löscht ein Cookie, das mit dem angegebenen `name` oder `options` Objekt übereinstimmt. Die Methode lässt das Cookie ablaufen, indem sie dessen Datum auf ein vergangenes ändert.

Beachten Sie, dass es keinen Fehler gibt, wenn ein Cookie nicht gefunden werden kann: Das zurückgegebene Promise wird erfüllt, wenn das gefundene Cookie gelöscht wird oder wenn kein Cookie gefunden wird.

## Syntax

```js-nolint
delete(name)
delete(options)
```

### Parameter

Diese Methode erfordert eines der folgenden:

- `name` {{optional_inline}}
  - : Ein String mit dem Namen eines Cookies.

Oder

- `options` {{optional_inline}}
  - : Ein Objekt, das Folgendes enthält:
    - `name`
      - : Ein String mit dem Namen eines Cookies.
    - `domain` {{Optional_Inline}}
      - : Ein String mit der Domain eines Cookies. Standard ist `null`.
    - `path` {{Optional_Inline}}
      - : Ein String, der einen Pfad enthält. Standard ist `/`.
    - `partitioned` {{Optional_Inline}}
      - : Ein Boolean-Wert, der standardmäßig auf `false` gesetzt ist. Wenn er auf `true` gesetzt wird, gibt er an, dass das zu löschende Cookie ein partitioniertes Cookie sein wird. Weitere Informationen finden Sie unter [Cookies mit unabhängigem partitionierten Zustand (CHIPS)](/de/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} aufgelöst wird, wenn der Löschvorgang abgeschlossen ist oder kein Cookie gefunden wird.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn der Ursprung nicht zu einer URL {{Glossary("Serialization", "serialisiert")}} werden kann.
- {{jsxref("TypeError")}}
  - : Wird geworfen, wenn ein Cookie, das mit einem gegebenen `name` oder `options` übereinstimmt, nicht gelöscht werden kann.

## Beispiele

<!-- Die Beispiele funktionieren in der MDN-Umgebung aufgrund unbekannter Fehler nicht als Live-Beispiele -->

### Löschen eines benannten Cookies

Dieses Beispiel zeigt, wie ein Cookie gelöscht werden kann, indem sein Name an die `delete()` Methode übergeben wird.

Dies funktioniert, wenn das zu löschende Cookie mit dem Cookie-Namen und den Standardwerten der oben genannten [`options`](#options) übereinstimmt. Dies ist der Fall, wenn das Cookie mit nur einem Namen und einem Wert [`set()`](/de/docs/Web/API/CookieStore/set) wurde, jedoch möglicherweise nicht, wenn das Cookie mit Optionen oder mit [`Document.cookie`](/de/docs/Web/API/Document/cookie) erstellt wurde.

Der Code definiert zunächst `setTestCookies()`, das einige Test-Cookies erstellt und ihre Namen protokolliert.

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

  // Log cookie names
  const cookieNames = (await cookieStore.getAll())
    .map((cookie) => cookie.name)
    .join(" ");
  console.log(`Initial cookies: ${cookieNames}`);
}
```

Die Methode `cookieTest()` ruft `setTestCookies()` auf. Sie löscht dann "cookie1", das wir gerade erstellt haben, und listet alle Cookie-Namen erneut auf.

```js
async function cookieTest() {
  // Create our test cookies
  await setTestCookies();

  // Delete cookie1
  try {
    await cookieStore.delete("cookie1");
  } catch (error) {
    console.log(`Error deleting cookie1: ${error}`);
  }

  // Log cookie names again (to show cookie1 deleted)
  const cookieNames = (await cookieStore.getAll())
    .map((cookie) => cookie.name)
    .join(" ");
  console.log(
    `Cookies remaining after attempting to delete cookie1: ${cookieNames}`,
  );
}

cookieTest();
```

Wenn ausgeführt, sollte das Konsolenprotokoll zunächst zeigen, dass sowohl cookie1 als auch cookie2 vorhanden sind, aber cookie1 nach dem Löschen nicht mehr aufgeführt wird.

### Löschen eines Cookies mit Optionen

Dieses Beispiel ist fast identisch mit dem vorherigen, zeigt jedoch, dass die Optionen mit denen des zu löschenden Cookies übereinstimmen müssen.

Der Code definiert zunächst `setTestCookies()`. Dies erstellt zwei Cookies mit der `partitioned` Eigenschaft, die auf `true` gesetzt ist, und protokolliert deren Namen.

```js
async function setTestCookies() {
  // Set two cookies
  try {
    await cookieStore.set({
      name: "cookie1",
      value: `cookie1-value`,
      partitioned: true,
    });
  } catch (error) {
    console.log(`Error setting cookie1: ${error}`);
  }

  try {
    await cookieStore.set({
      name: "cookie2",
      value: `cookie2-value`,
      partitioned: true,
    });
  } catch (error) {
    console.log(`Error setting cookie2: ${error}`);
  }

  // Log cookie names
  const cookieNames = (await cookieStore.getAll())
    .map((cookie) => cookie.name)
    .join(" ");
  console.log(`Initial cookies: ${cookieNames}`);
}
```

Die Methode `cookieTest()` ruft `setTestCookies()` auf. Sie versucht dann, die Cookies mit dem Namen "cookie1" zu löschen, indem sie dessen Namen angibt, und "cookie2", indem sie dessen Namen und `partitioned: true` angibt. Die Methode listet dann die Cookie-Namen erneut auf.

```js
async function cookieTest() {
  // Create our test cookies
  await setTestCookies();

  // Delete cookie1 specifying just the name
  try {
    await cookieStore.delete("cookie1");
  } catch (error) {
    console.log(`Error deleting cookie1: ${error}`);
  }

  // Delete cookie2, setting partitioned to true
  try {
    await cookieStore.delete({
      name: "cookie2",
      partitioned: true,
    });
  } catch (error) {
    console.log(`Error deleting cookie2: ${error}`);
  }

  // Log cookie names again (to show cookie1 deleted)
  cookieNames = (await cookieStore.getAll())
    .map((cookie) => cookie.name)
    .join(" ");
  console.log(
    `Cookies remaining after attempted deletions (cookie2 should be deleted): ${cookieNames}`,
  );
}

cookieTest();
```

Wenn ausgeführt, sollte das Konsolenprotokoll zeigen, dass sowohl "cookie1" als auch "cookie2" anfangs vorhanden sind, aber "cookie2" danach nicht mehr aufgeführt wird. Das Cookie mit dem Namen "cookie1" ist immer noch vorhanden, da es nicht mit den in der `delete()`-Aufruf angegebenen Cookies übereinstimmt.

> [!NOTE]
> Das Löschen schlägt stillschweigend fehl, wenn kein Cookie übereinstimmt.

### Löschen von Cookies, die mit document.cookies erstellt wurden

Das Löschen eines Cookies, das mit [`document.cookie`](/de/docs/Web/API/Document/cookie) erstellt wurde, hat dieselben Anforderungen wie das Löschen eines Cookies, das mit [`CookieStore.set()`](/de/docs/Web/API/CookieStore/set) erstellt wurde: Das Cookie muss entweder den übergebenen `options` oder dem `name` und den Standardoptionen entsprechen.

> [!NOTE]
> Mit `set()` erstellte Cookies haben immer einen [Standardpfad](/de/docs/Web/HTTP/Guides/Cookies#define_where_cookies_are_sent) von `/`, während mit `document.cookie` erstellte Cookies einen Standardpfad gleich dem Pfad des Dokuments haben, in dem sie erstellt werden. Daher können Sie beim Löschen von Cookies, die mit `document.cookie` erstellt wurden, nicht davon ausgehen, dass sie den Pfad `/` haben (es sei denn, er wurde ausdrücklich so festgelegt) und daher zu den Standardoptionen für das Löschen passen.

Der folgende Code verwendet `document.cookie`, um Cookies mit den Namen "doc_cookie1" und "doc_cookie2" zu erstellen, mit den Pfaden `/some_path` bzw. `/`, und protokolliert dann beide Cookies. Der Code löscht dann beide Cookies, ohne eine `path`-Übereinstimmungsoption anzugeben, und listet die Cookies erneut auf.

```js
async function cookieTest() {
  // Create doc_cookie1 with path /some_path
  document.cookie =
    "doc_cookie1=doc_cookie1_name; SameSite=None; Secure; max-age=10; path='/some_path'";

  // Create doc_cookie2 with path / (the CookieStore.set() default)
  document.cookie =
    "doc_cookie2=doc_cookie2_name; SameSite=None; Secure; max-age=10; path=/";

  // Log cookie names
  let cookieNames = (await cookieStore.getAll())
    .map((cookie) => cookie.name)
    .join(" ");
  console.log(`Initial cookies: ${cookieNames}`);

  // Delete doc_cookie1 (should fail)
  try {
    await cookieStore.delete("doc_cookie1");
  } catch (error) {
    console.log(`Error deleting doc_cookie1: ${error}`);
  }

  // Delete doc_cookie2 (should succeed)
  try {
    await cookieStore.delete("doc_cookie2");
  } catch (error) {
    console.log(`Error deleting cookie2: ${error}`);
  }

  // Log cookie names again (to show cookie1 deleted)
  cookieNames = (await cookieStore.getAll())
    .map((cookie) => cookie.name)
    .join(" ");
  console.log(
    `Cookies remaining after attempted deletions (doc_cookie2 should be deleted): ${cookieNames}`,
  );
}

cookieTest();
```

Wenn ausgeführt, sollte das erste Protokoll zeigen, dass beide Cookies vorhanden sind. Das zweite Protokoll sollte "doc_cookie2" nicht enthalten, da es gefunden und gelöscht worden sein sollte. Es sollte "doc_cookie1" enthalten, weil `/some_path` nicht mit dem Standardlöschpfad (`/`) übereinstimmen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
