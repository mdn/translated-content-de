---
title: CookieStore
slug: Web/API/CookieStore
l10n:
  sourceCommit: f26af77e5448a44bb2e53f86db99a33e7379f9d5
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Das **`CookieStore`**-Interface der [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) bietet Methoden zum asynchronen Abrufen und Setzen von Cookies von einer Seite oder einem Service Worker.

Auf das `CookieStore` wird über Attribute im globalen Scope in einem [`Window`](/de/docs/Web/API/Window) oder [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)-Kontext zugegriffen. Daher gibt es keinen Konstruktor.

{{InheritanceDiagram}}

## Instanzmethoden

- [`CookieStore.delete()`](/de/docs/Web/API/CookieStore/delete)
  - : Die `delete()`-Methode löscht ein Cookie mit dem angegebenen `name` oder `options`-Objekt.
    Sie gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald die Löschung abgeschlossen ist oder wenn keine Cookies übereinstimmen.
- [`CookieStore.get()`](/de/docs/Web/API/CookieStore/get)
  - : Die `get()`-Methode ruft ein einzelnes Cookie mit dem angegebenen `name` oder `options`-Objekt ab.
    Sie gibt ein {{jsxref("Promise")}} zurück, das mit den Details eines einzelnen Cookies aufgelöst wird.
- [`CookieStore.getAll()`](/de/docs/Web/API/CookieStore/getAll)
  - : Die `getAll()`-Methode ruft alle übereinstimmenden Cookies ab.
    Sie gibt ein {{jsxref("Promise")}} zurück, das mit einer Liste von Cookies aufgelöst wird.
- [`CookieStore.set()`](/de/docs/Web/API/CookieStore/set)
  - : Die `set()`-Methode setzt ein Cookie mit dem angegebenen `name` und `value` oder `options`-Objekt.
    Sie gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn das Cookie gesetzt wurde.

## Ereignisse

- [`change`](/de/docs/Web/API/CookieStore/change_event)
  - : Das `change`-Ereignis wird ausgelöst, wenn eine Änderung an einem Cookie vorgenommen wird.

## Beispiele

Die untenstehenden Beispiele können getestet werden, indem der Code in einer Testumgebung ausgeführt wird, entweder über einen [lokalen Server](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) oder durch Deployment auf einer Website wie GitHub Pages.

<!-- Die Beispiele funktionieren nicht als Live-Beispiele in der MDN-Umgebung (aufgrund unbekannter Fehler) -->

### Cookies setzen

Dieses Beispiel zeigt, wie Cookies gesetzt werden, indem ein `name` und `value` übergeben werden, und indem ein `options`-Wert gesetzt wird.

Die `cookieTest()`-Methode setzt ein Cookie mit `name` und `value`-Eigenschaften und ein weiteres mit `name`, `value` und `expires`-Eigenschaften.
Wir verwenden dann die [`CookieStore.get()`](/de/docs/Web/API/CookieStore/get)-Methode, um jedes der Cookies abzurufen, die dann protokolliert werden.

```js
async function cookieTest() {
  // Set cookie: passing name and value
  try {
    await cookieStore.set("cookie1", "cookie1-value");
  } catch (error) {
    console.log(`Error setting cookie1: ${error}`);
  }

  // Set cookie: passing options
  const day = 24 * 60 * 60 * 1000;

  try {
    await cookieStore.set({
      name: "cookie2",
      value: "cookie2-value",
      expires: Date.now() + day,
      partitioned: true,
    });
  } catch (error) {
    log(`Error setting cookie2: ${error}`);
  }

  // Get named cookies and log their properties
  const cookie1 = await cookieStore.get("cookie1");
  console.log(cookie1);

  const cookie2 = await cookieStore.get("cookie2");
  console.log(cookie2);
}

cookieTest();
```

> [!NOTE]
> In [unterstützten Browsern](/de/docs/Web/API/CookieStore/set#browser_compatibility) können Sie das Ablaufdatum des Cookies mithilfe von `maxAge` anstelle von `expires` festlegen.

### Cookies abrufen

Dieses Beispiel zeigt, wie Sie ein bestimmtes Cookie mit [`CookieStore.get()`](/de/docs/Web/API/CookieStore/get) oder alle Cookies mit [`CookieStore.getAll()`](/de/docs/Web/API/CookieStore/getAll) abrufen können.

Der Beispielcode setzt zunächst drei Cookies, die wir zur Demonstration der Abrufmethoden verwenden.
Zunächst werden `cookie1` und `cookie2` mithilfe der [`CookieStore.set()`](/de/docs/Web/API/CookieStore/set)-Methode erstellt.
Dann wird ein drittes Cookie mit der älteren synchronen [`Document.cookie`](/de/docs/Web/API/Document/cookie)-Eigenschaft erstellt (nur um zu zeigen, dass diese auch mit den Methoden `get()` und `getAll()` abgerufen werden können).

Der Code verwendet dann [`CookieStore.get()`](/de/docs/Web/API/CookieStore/get), um "cookie1" abzurufen und seine Eigenschaften zu protokollieren, sowie [`CookieStore.getAll()`](/de/docs/Web/API/CookieStore/getAll) (ohne Argumente), um alle Cookies im aktuellen Kontext abzurufen.

```js
async function cookieTest() {
  // Set a cookie passing name and value
  try {
    await cookieStore.set("cookie1", "cookie1-value");
  } catch (error) {
    console.log(`Error setting cookie1: ${error}`);
  }

  // Set a cookie passing an options object
  const day = 24 * 60 * 60 * 1000;
  try {
    await cookieStore.set({
      name: "cookie2",
      value: `cookie2-value`,
      expires: Date.now() + day,
      partitioned: true,
    });
  } catch (error) {
    console.log(`Error setting cookie2: ${error}`);
  }

  // Set cookie using document.cookie
  // (to demonstrate these are are fetched too)
  document.cookie = "favorite_food=tripe; SameSite=None; Secure";

  // Get named cookie and log properties
  const cookie1 = await cookieStore.get("cookie1");
  console.log(cookie1);

  // Get all cookies and log each
  const cookies = await cookieStore.getAll();
  if (cookies.length > 0) {
    console.log(`getAll(): ${cookies.length}:`);
    cookies.forEach((cookie) => console.log(cookie));
  } else {
    console.log("Cookies not found");
  }
}

cookieTest();
```

Das Beispiel sollte "cookie1" und alle drei Cookies separat protokollieren.
Eine Sache, die zu beachten ist, ist, dass das mithilfe von [`Document.cookie`](/de/docs/Web/API/Document/cookie) erstellte Cookie möglicherweise einen anderen Pfad hat als diejenigen, die mit [`set()`](/de/docs/Web/API/CookieStore/set) erstellt wurden (die standardmäßig auf `/` gesetzt sind).

### Ein benanntes Cookie löschen

Dieses Beispiel zeigt, wie ein benanntes Cookie mit der [`delete()`](/de/docs/Web/API/CookieStore/delete)-Methode gelöscht wird.

Der Code setzt zunächst zwei Cookies und protokolliert sie in der Konsole.
Wir löschen dann eines der Cookies und listen dann alle Cookies erneut auf.
Das gelöschte Cookie ("cookie1") ist im ersten Protokoll-Array vorhanden und nicht im zweiten.

```js
async function cookieTest() {
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
  let cookieNames = (await cookieStore.getAll())
    .map((cookie) => cookie.name)
    .join(" ");
  console.log(`Initial cookies: ${cookieNames}`);

  // Delete cookie1
  await cookieStore.delete("cookie1");

  // Log cookies again (to show cookie1 deleted)
  cookieNames = (await cookieStore.getAll())
    .map((cookie) => cookie.name)
    .join(" ");
  console.log(
    `Cookies remaining after attempted deletions (cookie1 should be deleted): ${cookieNames}`,
  );
}

cookieTest();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
