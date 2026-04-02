---
title: CookieStore
slug: Web/API/CookieStore
l10n:
  sourceCommit: 3d49f18251e1f3493ef2e3a70519603345f8b7dc
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Das **`CookieStore`** Interface der [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) bietet Methoden zum asynchronen Abrufen und Setzen von Cookies, sowohl von einer Seite als auch von einem Service Worker aus.

Auf das `CookieStore` wird über Attribute im globalen Kontext eines [`Window`](/de/docs/Web/API/Window) oder [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) zugegriffen. Es gibt daher keinen Konstruktor.

{{InheritanceDiagram}}

## Instanzmethoden

- [`CookieStore.delete()`](/de/docs/Web/API/CookieStore/delete)
  - : Die `delete()`-Methode löscht ein Cookie mit dem angegebenen `name` oder dem `options`-Objekt.
    Sie gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn das Löschen abgeschlossen ist oder wenn keine Cookies übereinstimmen.
- [`CookieStore.get()`](/de/docs/Web/API/CookieStore/get)
  - : Die `get()`-Methode ruft ein einzelnes Cookie mit dem gegebenen `name` oder `options`-Objekt ab.
    Sie gibt ein {{jsxref("Promise")}} zurück, das mit den Details eines einzelnen Cookies aufgelöst wird.
- [`CookieStore.getAll()`](/de/docs/Web/API/CookieStore/getAll)
  - : Die `getAll()`-Methode ruft alle übereinstimmenden Cookies ab.
    Sie gibt ein {{jsxref("Promise")}} zurück, das mit einer Liste von Cookies aufgelöst wird.
- [`CookieStore.set()`](/de/docs/Web/API/CookieStore/set)
  - : Die `set()`-Methode setzt ein Cookie mit dem gegebenen `name` und `value` oder `options`-Objekt.
    Sie gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn das Cookie gesetzt ist.

## Ereignisse

- [`change`](/de/docs/Web/API/CookieStore/change_event)
  - : Das `change`-Ereignis wird ausgelöst, wenn eine Änderung an einem Cookie vorgenommen wird.

## Beispiele

Die folgenden Beispiele können getestet werden, indem man den Code in eine Testumgebung kopiert und mit einem [lokalen Server](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) ausführt oder auf einer Website wie GitHub Pages bereitstellt.

<!-- Die Beispiele funktionieren aufgrund unbekannter Fehler nicht als Live-Beispiele in der MDN-Umgebung -->

### Cookies setzen

Dieses Beispiel zeigt, wie Cookies durch Angabe eines `name` und `value` sowie durch Festlegen eines `options`-Wertes gesetzt werden.

Die `cookieTest()`-Methode setzt ein Cookie mit den Eigenschaften `name` und `value` und ein anderes mit den Eigenschaften `name`, `value` und `expires`.
Anschließend verwenden wir die Methode [`CookieStore.get()`](/de/docs/Web/API/CookieStore/get), um jedes der Cookies abzurufen, die dann protokolliert werden.

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
> In [unterstützenden Browsern](/de/docs/Web/API/CookieStore/set#browser_compatibility) können Sie das Ablaufdatum des Cookies mit `maxAge` anstelle von `expires` festlegen.

### Cookies abrufen

Dieses Beispiel zeigt, wie Sie ein bestimmtes Cookie mithilfe von [`CookieStore.get()`](/de/docs/Web/API/CookieStore/get) oder alle Cookies mithilfe von [`CookieStore.getAll()`](/de/docs/Web/API/CookieStore/getAll) abrufen können.

Der Beispielcode setzt zuerst drei Cookies, die wir zur Demonstration der Abrufmethoden verwenden.
Zuerst erstellt er `cookie1` und `cookie2` mit der Methode [`CookieStore.set()`](/de/docs/Web/API/CookieStore/set).
Dann erstellt es ein drittes Cookie mit der älteren synchronen [`Document.cookie`](/de/docs/Web/API/Document/cookie)-Eigenschaft (nur um zu zeigen, dass auch diese mithilfe der `get()`- und `getAll()`-Methoden abgerufen werden).

Der Code verwendet dann [`CookieStore.get()`](/de/docs/Web/API/CookieStore/get), um "cookie1" abzurufen und dessen Eigenschaften zu protokollieren, und [`CookieStore.getAll()`](/de/docs/Web/API/CookieStore/getAll) (ohne Argumente), um alle Cookies im aktuellen Kontext abzurufen.

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
  // (to demonstrate these are fetched too)
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
Ein zu beachtender Punkt ist, dass das Cookie, das mit [`Document.cookie`](/de/docs/Web/API/Document/cookie) erstellt wurde, möglicherweise einen anderen Pfad hat als jene, die mit [`set()`](/de/docs/Web/API/CookieStore/set) erstellt wurden (was standardmäßig auf `/` gesetzt ist).

### Benanntes Cookie löschen

Dieses Beispiel zeigt, wie Sie ein benanntes Cookie mit der Methode [`delete()`](/de/docs/Web/API/CookieStore/delete) löschen.

Der Code setzt zuerst zwei Cookies und protokolliert sie in der Konsole.
Dann löschen wir eines der Cookies und listen anschließend alle Cookies erneut auf.
Das gelöschte Cookie ("cookie1") ist im ersten Protokollarray vorhanden, jedoch nicht im zweiten.

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
