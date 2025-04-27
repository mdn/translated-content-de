---
title: "CookieStore: delete()-Methode"
short-title: delete()
slug: Web/API/CookieStore/delete
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Die **`delete()`**-Methode der [`CookieStore`](/de/docs/Web/API/CookieStore)-Schnittstelle löscht ein Cookie, das mit dem angegebenen `name` oder `options`-Objekt übereinstimmt. Die Methode lässt das Cookie ablaufen, indem sie das Datum auf ein vergangenes ändert.

Beachten Sie, dass es keinen Fehler gibt, wenn ein Cookie nicht gefunden werden kann: Das zurückgegebene Promise wird erfüllt, wenn das übereinstimmende Cookie gelöscht wird oder kein Cookie gefunden wird.

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
      - : Ein String mit der Domain eines Cookies. Standardwert ist `null`.
    - `path` {{Optional_Inline}}
      - : Ein String, der einen Pfad enthält. Standardwert ist `/`.
    - `partitioned` {{Optional_Inline}}
      - : Ein boolescher Wert, der standardmäßig `false` ist. Wenn auf `true` gesetzt, wird angegeben, dass das zu löschende Cookie ein partitioniertes Cookie ist. Weitere Informationen finden Sie unter [Cookies mit unabhängigem partitioniertem Zustand (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} aufgelöst wird, wenn die Löschoperation abgeschlossen ist oder kein Cookie gefunden wird.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Ursprung nicht in eine URL {{Glossary("Serialization", "serialisiert")}} werden kann.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn ein Cookie, das einem gegebenen `name` oder `options` entspricht, nicht gelöscht werden kann.

## Beispiele

<!-- The examples don't work as live examples in MDN environment (due to unknown errors) -->

### Einen benannten Cookie löschen

Dieses Beispiel zeigt, wie ein Cookie gelöscht werden kann, indem sein Name an die `delete()`-Methode übergeben wird.

Dies funktioniert, wenn das zu löschende Cookie mit dem Cookienamen und den oben angegebenen Standardwerten der [`options`](#options) übereinstimmt. Dies ist der Fall, wenn das Cookie mit nur einem Namen und Wert über [`set()`](/de/docs/Web/API/CookieStore/set) gesetzt wurde, jedoch möglicherweise nicht, wenn das Cookie mit Optionen oder über [`Document.cookie`](/de/docs/Web/API/Document/cookie) erstellt wurde.

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

Die Methode `cookieTest()` ruft `setTestCookies()` auf. Anschließend wird "cookie1" gelöscht, das wir gerade erstellt haben, und alle Cookienamen werden erneut aufgelistet.

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

Beim Ausführen sollte das Konsolenprotokoll zunächst zeigen, dass sowohl cookie1 als auch cookie2 vorhanden sind, aber cookie1 nach dem Löschen nicht mehr aufgelistet wird.

### Einen Cookie mit Optionen löschen

Dieses Beispiel ist fast identisch mit dem vorherigen, zeigt jedoch, dass die Optionen mit denen des zu löschenden Cookies übereinstimmen müssen.

Der Code definiert zunächst `setTestCookies()`. Dies erstellt zwei Cookies mit der `partitioned`-Eigenschaft auf `true` gesetzt und protokolliert deren Namen.

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

Die Methode `cookieTest()` ruft `setTestCookies()` auf. Anschließend versucht sie, die Cookies mit dem Namen "cookie1" zu löschen, indem sie ihren Namen angibt, und "cookie2", indem sie ihren Namen und `partitioned: true` angibt. Danach werden die Cookienamen erneut aufgelistet.

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

Beim Ausführen sollte das Konsolenprotokoll zeigen, dass sowohl "cookie1" als auch "cookie2" anfangs vorhanden sind, aber "cookie2" danach nicht mehr aufgelistet wird. Das Cookie mit dem Namen "cookie1" ist immer noch vorhanden, da es nicht mit den in der `delete()`-Aufruf angegebenen Cookies übereinstimmt.

> [!NOTE]
> Das Löschen schlägt stillschweigend fehl, wenn kein Cookie gefunden wird.

### Cookies löschen, die mit document.cookies erstellt wurden

Das Löschen eines Cookies, das mit [`document.cookie`](/de/docs/Web/API/Document/cookie) erstellt wurde, hat die gleichen Anforderungen wie das Löschen eines mit [`CookieStore.set()`](/de/docs/Web/API/CookieStore/set) erstellten Cookies: Das Cookie muss entweder den übergebenen `options` entsprechen oder dem `name` und den Standardoptionen.

> [!NOTE]
> Cookies, die mit `set()` erstellt wurden, haben immer einen [Standardpfad](/de/docs/Web/HTTP/Guides/Cookies#define_where_cookies_are_sent) von `/`, während Cookies, die mit `document.cookie` erstellt wurden, einen Standardpfad haben, der dem Erstellungsdokument entspricht.
> Daher können Sie beim Löschen von Cookies, die mit `document.cookie` erstellt wurden, nicht davon ausgehen, dass sie den Pfad `/` haben (es sei denn, dieser wurde explizit so gesetzt), und daher, dass sie mit den Standardoptionen von `delete()` übereinstimmen.

Der unten stehende Code verwendet `document.cookie`, um Cookies mit den Namen "doc_cookie1" und "doc_cookie2" mit den Pfaden `/some_path` bzw. `/` zu erstellen und protokolliert anschließend beide Cookies. Der Code löscht dann beide Cookies, ohne eine `path`-Match-Option anzugeben, und listet die Cookies erneut auf.

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

Beim Ausführen sollte das erste Protokoll zeigen, dass beide Cookies vorhanden sind. Das zweite Protokoll sollte "doc_cookie2" nicht enthalten, da es übereinstimmt und gelöscht wurde. "doc_cookie1" sollte enthalten sein, da `/some_path` nicht dem Standardlöschpfad (`/`) entspricht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
