---
title: "CookieStore: get()-Methode"
short-title: get()
slug: Web/API/CookieStore/get
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Die **`get()`**-Methode der [`CookieStore`](/de/docs/Web/API/CookieStore)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das auf ein einzelnes Cookie auflöst, das dem angegebenen `name` oder `options`-Objekt entspricht. Die Methode gibt das erste übereinstimmende Cookie zurück.

## Syntax

```js-nolint
get(name)
get(options)
```

### Parameter

Diese Methode erfordert eines der folgenden:

- `name` {{optional_inline}}
  - : Ein String mit dem Namen eines Cookies.

Oder

- `options` {{optional_inline}}
  - : Ein Objekt, das folgendes enthält:
    - `name`
      - : Ein String mit dem Namen eines Cookies.
    - `url`
      - : Ein String mit der URL eines Cookies.

> [!NOTE]
> Die `url`-Option ermöglicht die Modifikation eines Cookies, das unter einer bestimmten URL aufgerufen wird. Service Worker können Cookies erhalten, die an jede URL unter ihrem Geltungsbereich gesendet werden würden. In einem Dokument können Sie nur die Cookies an der aktuellen URL abrufen, sodass die einzige gültige URL in einem Dokumentkontext die URL des Dokuments ist.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt auflöst, das das erste Cookie darstellt, das dem übergebenen `name` oder `options` entspricht, oder `null`, wenn kein übereinstimmendes Cookie vorhanden ist.

Das für eine Übereinstimmung zurückgegebene Objekt enthält die folgenden Eigenschaften:

- `domain`

  - : Ein String, der die Domäne des Cookies enthält.

- `expires`

  - : Ein Zeitstempel, angegeben als {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden, der das Ablaufdatum des Cookies enthält.

- `name`

  - : Ein String, der den Namen des Cookies enthält.

- `partitioned`

  - : Ein Boolean, der angibt, ob das Cookie ein partitioniertes Cookie ist (`true`) oder nicht (`false`). Siehe [Cookies mit unabhängigem partitioniertem Zustand (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) für weitere Informationen.

- `path`

  - : Ein String, der den Pfad des Cookies enthält.

- `sameSite`

  - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Werte: [`"strict"`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#strict), [`"lax"`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#lax), oder [`"none"`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#none).

- `secure`

  - : Ein Boolean-Wert, der angibt, ob das Cookie nur in sicheren Kontexten verwendet werden soll (`true`) oder nicht (`false`).

- `value`
  - : Ein String, der den Wert des Cookies enthält.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Ursprung nicht zu einer URL {{Glossary("Serialization", "serialisiert")}} werden kann.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Der `options`-Parameter ein leeres Objekt ist.
    - Die Methode im Haupt-Thread aufgerufen wird und die `url`-Option angegeben ist, aber nicht mit der URL des aktuellen Fensters übereinstimmt.
    - Die Methode in einem Worker aufgerufen wird und die `url`-Option angegeben ist, aber nicht mit dem Ursprung des Workers übereinstimmt.
    - Die Abfrage von Cookies, die durch den angegebenen `name` oder `options` dargestellt werden, fehlschlägt.

## Beispiele

<!-- Die Beispiele funktionieren in der MDN-Umgebung nicht als Live-Beispiele (aufgrund unbekannter Fehler) -->

### Abrufen eines Cookies nach Name

Dieses Beispiel zeigt, wie ein bestimmtes Cookie nach Name abgerufen wird.

Der Code erstellt zuerst ein Cookie mit dem Namen "cookie1" unter Verwendung von [`CookieStore.set()`](/de/docs/Web/API/CookieStore/set) und protokolliert alle Fehler in der Konsole. Anschließend wartet er auf `get()`, um Informationen über dasselbe Cookie abzurufen. Wenn das zurückgegebene Promise mit einem Objekt auflöst, protokollieren wir das Cookie: andernfalls protokollieren wir, dass kein übereinstimmendes Cookie gefunden wurde.

```js
async function cookieTest() {
  // Set test cookie
  try {
    await cookieStore.set("cookie1", "cookie1-value");
  } catch (error) {
    console.log(`Error setting cookie1: ${error}`);
  }

  // Get cookie, specifying name
  const cookie = await cookieStore.get("cookie1");

  if (cookie) {
    console.log(cookie);
  } else {
    console.log("cookie1: Cookie not found");
  }
}

cookieTest();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
