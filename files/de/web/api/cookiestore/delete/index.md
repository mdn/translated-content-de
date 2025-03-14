---
title: "CookieStore: delete()-Methode"
short-title: delete()
slug: Web/API/CookieStore/delete
l10n:
  sourceCommit: 372d2f15b56a753235002946c7775d0b38f6f3eb
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Die **`delete()`**-Methode der [`CookieStore`](/de/docs/Web/API/CookieStore)-Schnittstelle löscht ein Cookie, das dem angegebenen `name` oder `options`-Objekt entspricht. Die Methode macht das Cookie ungültig, indem sie sein Datum auf eines in der Vergangenheit ändert.

Beachten Sie, dass kein Fehler auftritt, wenn ein Cookie nicht gefunden werden kann: Das zurückgegebene Promise wird erfüllt, wenn das gefundene Cookie gelöscht wird oder kein Cookie gefunden wird.

## Syntax

```js-nolint
delete(name)
delete(options)
```

### Parameter

Diese Methode erfordert einen der folgenden Parameter:

- `name` {{optional_inline}}
  - : Ein String mit dem Namen eines Cookies.

Oder

- `options` {{optional_inline}}

  - : Ein Objekt, das folgende enthält:

    - `name`
      - : Ein String mit dem Namen eines Cookies.
    - `domain` {{Optional_Inline}}
      - : Ein String mit der Domain eines Cookies. Standardmäßig `null`.
    - `path` {{Optional_Inline}}
      - : Ein String, der einen Pfad enthält. Standardmäßig `/`.
    - `partitioned` {{Optional_Inline}}
      - : Ein boolescher Wert, der standardmäßig `false` ist. Wird er auf `true` gesetzt, gibt er an, dass das zu löschende Cookie ein partitioniertes Cookie ist. Weitere Informationen finden Sie unter [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} aufgelöst wird, wenn der Löschvorgang abgeschlossen ist oder kein Cookie gefunden wird.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Ursprung nicht in eine URL {{Glossary("Serialization", "serialisiert")}} werden kann.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn ein Cookie, das einem angegebenen `name` oder `options` entspricht, nicht gelöscht werden kann.

## Beispiele

<!-- Die Beispiele funktionieren nicht als Live-Beispiele in der MDN-Umgebung (aufgrund unbekannter Fehler) -->

### Löschen eines benannten Cookies

Dieses Beispiel zeigt, wie ein Cookie durch die Übergabe seines Namens an die `delete()`-Methode gelöscht werden kann.

Dies funktioniert, wenn das zu löschende Cookie mit dem Cookie-Namen und den Standardwerten der oben genannten [`options`](#options) übereinstimmt. Dies ist der Fall, wenn das Cookie nur mit einem Namen und einem Wert über [`set()`](/de/docs/Web/API/CookieStore/set) gesetzt wurde, aber möglicherweise nicht, wenn das Cookie mit Optionen oder mit [`Document.cookie`](/de/docs/Web/API/Document/cookie) erstellt wurde.

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

Die Methode `cookieTest()` ruft `setTestCookies()` auf. Sie löscht dann "cookie1", das wir gerade erstellt haben, und listet alle Cookienamen erneut auf.

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

Beim Ausführen sollte das Konsolenprotokoll zunächst zeigen, dass sowohl cookie1 als auch cookie2 vorhanden sind, aber cookie1 wird nach dem Löschen nicht mehr aufgelistet.

### Löschen eines Cookies mit Optionen

Dieses Beispiel ist fast identisch mit dem vorherigen, zeigt jedoch, dass die Optionen mit denen des zu löschenden Cookies übereinstimmen müssen.

Der Code definiert zunächst `setTestCookies()`. Dieses erstellt zwei Cookies mit der Eigenschaft `partitioned`, die auf `true` gesetzt ist, und protokolliert deren Namen.

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

Die Methode `cookieTest()` ruft `setTestCookies()` auf. Sie versucht dann, die Cookies mit den Namen "cookie1" zu löschen, indem sie seinen Namen angibt, und "cookie2", indem sie seinen Namen und `partitioned: true` angibt. Die Methode listet dann die Cookienamen erneut auf.

```js
async function cookieTest() {
  //Create our test cookies
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

Beim Ausführen sollte das Konsolenprotokoll zeigen, dass sowohl "cookie1" als auch "cookie2" anfangs vorhanden sind, aber "cookie2" danach nicht mehr aufgelistet wird. Das Cookie mit dem Namen "cookie1" ist weiterhin vorhanden, da es nicht den in dem `delete()`-Aufruf angegebenen Cookies entspricht.

> [!NOTE]
> Das Löschen schlägt leise fehl, wenn kein übereinstimmendes Cookie gefunden wird.

### Löschen von Cookies, die mit document.cookies erstellt wurden

Das Löschen eines Cookies, das mit [`document.cookie`](/de/docs/Web/API/Document/cookie) erstellt wurde, hat die gleichen Anforderungen wie das Löschen eines Cookies, das mit [`CookieStore.set()`](/de/docs/Web/API/CookieStore/set) erstellt wurde: Das Cookie muss entweder den übergebenen `options` oder dem `name` und den Standardoptionen entsprechen.

> [!NOTE]
> Cookies, die mit `set()` erstellt wurden, haben immer einen [Standardpfad](/de/docs/Web/HTTP/Cookies#define_where_cookies_are_sent) von `/`, während Cookies, die mit `document.cookie` erstellt wurden, einen Standardpfad haben, der dem Pfad des Dokuments entspricht, in dem sie erstellt wurden. Daher kann beim Löschen von Cookies, die mit `document.cookie` erstellt wurden, nicht davon ausgegangen werden, dass sie den Pfad `/` haben (es sei denn, dieser wurde explizit so gesetzt), sodass sie den Standard-`delete()`-Optionen entsprechen.

Der folgende Code verwendet `document.cookie`, um Cookies mit den Namen "doc_cookie1" und "doc_cookie2" zu erstellen, mit den Pfaden `/some_path` und `/` bzw. und protokolliert dann beide Cookies. Der Code löscht daraufhin beide Cookies, ohne eine `path`-Option anzugeben, und listet die Cookies erneut auf.

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

Beim Ausführen sollte das erste Protokoll zeigen, dass beide Cookies vorhanden sind. Das zweite Protokoll sollte "doc_cookie2" nicht enthalten, da es übereinstimmen und gelöscht werden sollte. Es sollte "doc_cookie1" enthalten, da `/some_path` nicht mit dem Standardlöschpfad (`/`) übereinstimmt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
