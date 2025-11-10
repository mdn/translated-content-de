---
title: "CookieStore: Methode delete()"
short-title: delete()
slug: Web/API/CookieStore/delete
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Die **`delete()`**-Methode der Schnittstelle [`CookieStore`](/de/docs/Web/API/CookieStore) löscht ein Cookie, das dem angegebenen `name` oder `options`-Objekt entspricht. Die Methode lässt das Cookie ablaufen, indem sie das Datum auf eines in der Vergangenheit ändert.

Beachten Sie, dass kein Fehler auftritt, wenn ein Cookie nicht gefunden werden kann: Das zurückgegebene Promise wird erfüllt, wenn das entsprechende Cookie gelöscht wurde oder wenn kein Cookie gefunden wurde.

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
      - : Ein String mit der Domain eines Cookies. Standardmäßig `null`.
    - `path` {{Optional_Inline}}
      - : Ein String, der einen Pfad enthält. Standardmäßig `/`.
    - `partitioned` {{Optional_Inline}}
      - : Ein Boolean-Wert, der standardmäßig `false` ist. Wenn er auf `true` gesetzt wird, gibt er an, dass das zu löschende Cookie ein partitioniertes Cookie ist. Weitere Informationen finden Sie unter [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} aufgelöst wird, wenn die Löschoperation abgeschlossen ist oder kein Cookie gefunden wird.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Ursprung nicht zu einer URL {{Glossary("Serialization", "serialisiert")}} werden kann.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn ein Cookie, das dem gegebenen `name` oder `options` entspricht, nicht gelöscht werden kann.

## Beispiele

<!-- Die Beispiele funktionieren nicht als Live-Beispiele in der MDN-Umgebung (aufgrund unbekannter Fehler) -->

### Löschen eines benannten Cookies

Dieses Beispiel zeigt, wie ein Cookie gelöscht werden kann, indem sein Name an die `delete()`-Methode übergeben wird.

Dies funktioniert, wenn das zu löschende Cookie mit dem Cookie-Namen und den Standardwerten der oben erwähnten [`options`](#options) übereinstimmt. Dies ist der Fall, wenn das Cookie mit nur einem Namen und Wert [`set()`](/de/docs/Web/API/CookieStore/set) wurde, aber möglicherweise nicht, wenn das Cookie mit Optionen oder mit [`Document.cookie`](/de/docs/Web/API/Document/cookie) erstellt wurde.

Der Code definiert zuerst `setTestCookies()`, das einige Test-Cookies erstellt und deren Namen protokolliert.

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

Beim Ausführen sollte die Konsolenanzeige zunächst zeigen, dass sowohl cookie1 als auch cookie2 vorhanden sind, aber cookie1 nach dem Löschen nicht mehr aufgeführt wird.

### Löschen eines Cookies mit Optionen

Dieses Beispiel ist fast identisch mit dem vorherigen, zeigt jedoch, dass die Optionen mit denen des zu löschenden Cookies übereinstimmen müssen.

Der Code definiert zuerst `setTestCookies()`. Dieses erstellt zwei Cookies mit der Eigenschaft `partitioned`, die auf `true` gesetzt ist, und protokolliert deren Namen.

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

Die Methode `cookieTest()` ruft `setTestCookies()` auf. Anschließend wird versucht, die Cookies mit den Namen "cookie1" zu löschen, indem nur der Name angegeben wird, und "cookie2", indem der Name und `partitioned: true` angegeben werden. Die Methode listet dann erneut die Cookie-Namen auf.

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

Beim Ausführen sollte die Konsolenanzeige zeigen, dass sowohl "cookie1" als auch "cookie2" zunächst vorhanden sind, aber "cookie2" anschließend nicht mehr aufgeführt wird. Das Cookie mit dem Namen "cookie1" ist weiterhin vorhanden, da es nicht mit den in `delete()` angegebenen Cookies übereinstimmt.

> [!NOTE]
> Das Löschen schlägt stillschweigend fehl, wenn kein Cookie gefunden wird.

### Löschen von Cookies, die mit document.cookies erstellt wurden

Das Löschen eines Cookies, das mit [`document.cookie`](/de/docs/Web/API/Document/cookie) erstellt wurde, hat die gleichen Anforderungen wie das Löschen eines mit [`CookieStore.set()`](/de/docs/Web/API/CookieStore/set) erstellten Cookies: Das Cookie muss entweder den übergebenen `options` oder dem `name` und den Standardoptionen entsprechen.

> [!NOTE]
> Cookies, die mit `set()` erstellt werden, haben immer einen [Standardpfad](/de/docs/Web/HTTP/Guides/Cookies#define_where_cookies_are_sent) von `/`, während Cookies, die mit `document.cookie` erstellt werden, einen Standardpfad haben, der dem Pfad des Dokuments entspricht, in dem sie erstellt wurden. Daher können Sie beim Löschen von Cookies, die mit `document.cookie` erstellt wurden, nicht davon ausgehen, dass sie den Pfad `/` haben (es sei denn, dieser wurde explizit so gesetzt) und somit mit den Standardoptionen von `delete()` übereinstimmen.

Der folgende Code verwendet `document.cookie`, um Cookies mit den Namen "doc_cookie1" und "doc_cookie2" zu erstellen, mit den Pfaden `/some_path` und `/` jeweils, und protokolliert dann beide Cookies. Der Code löscht dann beide Cookies, ohne eine `path`-Übereinstimmungsoption anzugeben, und listet die Cookies erneut auf.

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

Beim Ausführen sollte das erste Protokoll zeigen, dass beide Cookies vorhanden sind. Das zweite Protokoll sollte "doc_cookie2" nicht enthalten, da es übereingestimmt hat und gelöscht wurde. Es sollte "doc_cookie1" enthalten, da `/some_path` nicht mit dem Standardslöschpfad (`/`) übereinstimmt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
