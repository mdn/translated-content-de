---
title: "CookieStore: delete() Methode"
short-title: delete()
slug: Web/API/CookieStore/delete
l10n:
  sourceCommit: 19c64b411b90f999565db9fdb815463ba66c9714
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Die **`delete()`**-Methode der [`CookieStore`](/de/docs/Web/API/CookieStore)-Schnittstelle löscht ein Cookie, das mit dem angegebenen `name` oder `options`-Objekt übereinstimmt. Die Methode lässt das Cookie ablaufen, indem sie dessen Datum auf ein Datum in der Vergangenheit ändert.

Beachten Sie, dass kein Fehler auftritt, wenn ein Cookie nicht gefunden werden kann: Das zurückgegebene Promise wird erfüllt, wenn das übereinstimmende Cookie gelöscht wird oder wenn kein Cookie gefunden wird.

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
      - : Ein boolescher Wert, der standardmäßig `false` ist. Wenn `true` gesetzt wird, wird angegeben, dass das zu löschende Cookie ein partitioniertes Cookie ist. Siehe [Cookies mit Unabhängiger Partitionierter Zustand (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) für weitere Informationen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} aufgelöst wird, wenn der Löschvorgang abgeschlossen ist oder kein Cookie gefunden wurde.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Ursprung nicht zu einer URL {{Glossary("Serialization", "serialisiert")}} werden kann.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn ein Cookie, das mit einem gegebenen `name` oder `options` übereinstimmt, nicht gelöscht werden kann.

## Beispiele

<!-- Die Beispiele funktionieren nicht als Live-Beispiele in der MDN-Umgebung (aufgrund unbekannter Fehler) -->

### Ein benanntes Cookie löschen

Dieses Beispiel zeigt, wie ein Cookie gelöscht werden kann, indem sein Name an die `delete()`-Methode übergeben wird.

Dies funktioniert, wenn das zu löschende Cookie mit dem Cookie-Namen und den Standardwerten der oben genannten [`options`](#options) übereinstimmt. Dies ist der Fall, wenn das Cookie mit [`set()`](/de/docs/Web/API/CookieStore/set) nur mit einem Namen und Wert gesetzt wurde, aber möglicherweise nicht, wenn das Cookie mit Optionen oder mit [`Document.cookie`](/de/docs/Web/API/Document/cookie) erstellt wurde.

Der Code definiert zuerst `setTestCookies()`, das einige Test-Cookies erstellt und ihre Namen protokolliert.

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

Die `cookieTest()`-Methode ruft `setTestCookies()` auf. Sie löscht dann das soeben erstellte "cookie1" und listet alle Cookie-Namen erneut auf.

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

Wenn ausgeführt, sollte das Konsolenprotokoll zunächst zeigen, dass sowohl cookie1 als auch cookie2 vorhanden sind, aber cookie1 nach dem Löschen nicht mehr aufgelistet wird.

### Ein Cookie mit Optionen löschen

Dieses Beispiel ist fast identisch mit dem vorherigen, zeigt jedoch, dass die Optionen den zu löschenden Cookie-Einstellungen entsprechen müssen.

Der Code definiert zuerst `setTestCookies()`. Dies erstellt zwei Cookies mit der `partitioned`-Eigenschaft auf `true` gesetzt und protokolliert ihre Namen.

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

Die `cookieTest()`-Methode ruft `setTestCookies()` auf. Sie versucht dann, die Cookies mit dem Namen "cookie1" zu löschen, indem sie ihren Namen angibt, und "cookie2" mit ihrem Namen und `partitioned: true` spezifiziert. Die Methode listet dann die Cookie-Namen erneut auf.

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

Beim Ausführen sollte das Konsolenprotokoll zeigen, dass sowohl "cookie1" als auch "cookie2" anfangs vorhanden sind, aber "cookie2" danach nicht mehr aufgelistet ist. Das Cookie mit dem Namen "cookie1" ist noch vorhanden, da es nicht mit den im `delete()`-Aufruf angegebenen Cookies übereinstimmt.

> [!NOTE]
> Das Löschen schlägt stillschweigend fehl, wenn kein Cookie übereinstimmt.

### Cookies löschen, die mit document.cookies erstellt wurden

Das Löschen eines Cookies, das mit [`document.cookie`](/de/docs/Web/API/Document/cookie) erstellt wurde, hat die gleichen Anforderungen wie das Löschen eines mit [`CookieStore.set()`](/de/docs/Web/API/CookieStore/set) erstellten Cookies: Das Cookie muss entweder mit den übergebenen `options` oder dem `name` und den Standardoptionen übereinstimmen.

> [!NOTE]
> Cookies, die mit `set()` erstellt wurden, haben immer einen [Standardpfad](/de/docs/Web/HTTP/Guides/Cookies#define_where_cookies_are_sent) von `/`, während Cookies, die mit `document.cookie` erstellt wurden, einen Standardpfad haben, der dem Pfad des Dokuments entspricht, in dem sie erstellt werden. Daher können Sie beim Löschen von Cookies, die mit `document.cookie` erstellt wurden, nicht davon ausgehen, dass sie den Pfad `/` haben (es sei denn, er wurde ausdrücklich so gesetzt) und deshalb nicht mit den Standard-`delete()`-Optionen übereinstimmen.

Der untenstehende Code verwendet `document.cookie`, um Cookies mit den Namen "doc_cookie1" und "doc_cookie2" zu erstellen, mit den Pfaden `/some_path` und `/` beziehungsweise, und protokolliert dann beide Cookies. Der Code löscht dann beide Cookies, ohne eine `path`-Übereinstimmungsoption anzugeben, und listet die Cookies erneut auf.

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

Beim Ausführen sollte das erste Protokoll anzeigen, dass beide Cookies vorhanden sind. Das zweite Protokoll sollte "doc_cookie2" nicht einschließen, da es übereinstimmend gelöscht wurde. Es sollte "doc_cookie1" einschließen, da `/some_path` nicht mit dem Standardlöschpfad (`/`) übereinstimmt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
