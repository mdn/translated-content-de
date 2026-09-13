---
title: "CookieStore: delete() Methode"
short-title: delete()
slug: Web/API/CookieStore/delete
l10n:
  sourceCommit: c9f3d85f24d7839c9fe36a68d8042d088d906147
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Die **`delete()`**-Methode der [`CookieStore`](/de/docs/Web/API/CookieStore)-Schnittstelle löscht ein Cookie, das dem angegebenen `name` oder `options`-Objekt entspricht. Die Methode setzt das Ablaufdatum des Cookies auf ein Datum in der Vergangenheit.

Beachten Sie, dass es keinen Fehler gibt, wenn ein Cookie nicht gefunden werden kann: Das zurückgegebene Promise wird erfüllt, wenn das gefundene Cookie gelöscht wird oder kein Cookie gefunden wird.

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
  - : Ein Objekt, das enthält:
    - `name`
      - : Ein String mit dem Namen eines Cookies.
    - `domain` {{Optional_Inline}}
      - : Ein String mit der Domain eines Cookies. Standardmäßig `null`.
    - `path` {{Optional_Inline}}
      - : Ein String, der einen Pfad enthält. Standardmäßig `/`.
    - `partitioned` {{Optional_Inline}}
      - : Ein Boolescher Wert, der standardmäßig `false` ist. Wenn er auf `true` gesetzt ist, gibt dies an, dass das zu löschende Cookie ein partitioniertes Cookie ist. Siehe [Cookies mit unabhängigem partitioniertem Status (CHIPS)](/de/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies) für weitere Informationen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit {{jsxref("undefined")}} auflöst, wenn die Löschoperation abgeschlossen ist oder kein Cookie gefunden wird.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Ursprung nicht in eine URL {{Glossary("Serialization", "serialisiert")}} werden kann.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn ein Cookie, das einem gegebenen `name` oder `options` entspricht, nicht gelöscht werden kann.

## Beispiele

<!-- Die Beispiele funktionieren nicht als Live-Beispiele in der MDN-Umgebung (aufgrund unbekannter Fehler) -->

### Löschen eines benannten Cookies

In diesem Beispiel wird gezeigt, wie ein Cookie durch Übergeben seines Namens an die `delete()`-Methode gelöscht werden kann.

Dies wird funktionieren, wenn das zu löschende Cookie dem Cookie-Namen und den oben beschriebenen Standardwerten der [`options`](#options) entspricht. Dies wird der Fall sein, wenn das Cookie mit [`set()`](/de/docs/Web/API/CookieStore/set) nur mit einem Namen und einem Wert gesetzt wurde, aber möglicherweise nicht, wenn das Cookie mit Optionen oder mit [`Document.cookie`](/de/docs/Web/API/Document/cookie) erstellt wurde.

Der Code definiert zunächst `setTestCookies()`, das einige Test-Cookies erstellt und deren Namen protokolliert.

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

Wenn das Programm ausgeführt wird, sollte das Konsolenprotokoll zunächst zeigen, dass sowohl cookie1 als auch cookie2 vorhanden sind, cookie1 jedoch nach dem Löschen nicht mehr aufgeführt ist.

### Löschen eines Cookies mit Optionen

Dieses Beispiel ist fast identisch mit dem vorherigen, zeigt jedoch, dass die Optionen mit denen des zu löschenden Cookies übereinstimmen müssen.

Der Code definiert zunächst `setTestCookies()`. Dies erstellt zwei Cookies mit der Eigenschaft `partitioned` auf `true` und protokolliert deren Namen.

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

Die Methode `cookieTest()` ruft `setTestCookies()` auf. Sie versucht dann, die Cookies mit den Namen "cookie1", und "cookie2" zu löschen, wobei für letzteres `partitioned: true` angegeben wird. Anschließend listet die Methode die Cookie-Namen erneut auf.

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

Wenn das Programm ausgeführt wird, sollte das Konsolenprotokoll zeigen, dass sowohl "cookie1" als auch "cookie2" zunächst vorhanden sind, jedoch "cookie2" danach nicht mehr aufgeführt ist. Das Cookie mit dem Namen "cookie1" ist weiterhin vorhanden, da es nicht mit den in der `delete()`-Anfrage angegebenen Cookies übereinstimmt.

> [!NOTE]
> Das Löschen schlägt leise fehl, wenn kein Cookie gefunden wird.

### Löschen von Cookies, die mit document.cookies erstellt wurden

Das Löschen eines Cookies, das mit [`document.cookie`](/de/docs/Web/API/Document/cookie) erstellt wurde, hat die gleichen Anforderungen wie das Löschen eines Cookies, das mit [`CookieStore.set()`](/de/docs/Web/API/CookieStore/set) erstellt wurde: Das Cookie muss entweder den übergebenen `options` entsprechen oder den `name` und den Standardoptionen.

> [!NOTE]
> Cookies, die mit `set()` erstellt wurden, haben immer einen [Standardpfad](/de/docs/Web/HTTP/Guides/Cookies#define_where_cookies_are_sent) von `/`, während Cookies, die mit `document.cookie` erstellt wurden, einen Standardpfad haben, der dem Pfad des Dokuments entspricht, in dem sie erstellt wurden. Daher können Sie beim Löschen von Cookies, die mit `document.cookie` erstellt wurden, nicht davon ausgehen, dass sie den Pfad `/` haben (es sei denn, dieser wurde ausdrücklich so festgelegt) und daher den Standardoptionen von `delete()` entsprechen.

Der untenstehende Code verwendet `document.cookie`, um Cookies mit den Namen "doc_cookie1" und "doc_cookie2" zu erstellen, mit den Pfaden `/some_path` und `/` jeweils, und protokolliert dann beide Cookies. Anschließend löscht der Code die beiden Cookies, ohne eine `path`-Match-Option anzugeben, und listet die Cookies erneut auf.

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

Wenn das Programm ausgeführt wird, sollte das erste Protokoll zeigen, dass beide Cookies vorhanden sind. Das zweite Protokoll sollte "doc_cookie2" nicht mehr enthalten, da es übereingestimmt und gelöscht worden sein sollte. Es sollte "doc_cookie1" enthalten, weil `/some_path` nicht mit dem Standardlöschungspfad (`/`) übereinstimmt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
