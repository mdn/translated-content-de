---
title: "CookieStore: get()-Methode"
short-title: get()
slug: Web/API/CookieStore/get
l10n:
  sourceCommit: 372d2f15b56a753235002946c7775d0b38f6f3eb
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Die **`get()`**-Methode der [`CookieStore`](/de/docs/Web/API/CookieStore)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das sich zu einem einzelnen Cookie auflöst, das entweder dem angegebenen `name` oder dem `options`-Objekt entspricht. Die Methode gibt das erste übereinstimmende Cookie zurück.

## Syntax

```js-nolint
get(name)
get(options)
```

### Parameter

Diese Methode erfordert einen der folgenden:

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
> Die `url`-Option ermöglicht das Ändern eines Cookies mit Gültigkeitsbereich unter einer bestimmten URL. Service-Arbeiter können Cookies erhalten, die an jede URL innerhalb ihres Bereichs gesendet würden. Aus einem Dokument heraus können Sie nur die Cookies an der aktuellen URL erhalten. Daher ist die einzige gültige URL im Dokumentkontext die URL des Dokuments.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt aufgelöst wird, das das erste Cookie darstellt, das dem angegebenen `name` oder `options` entspricht, oder `null`, wenn kein passendes Cookie vorhanden ist.

Das zurückgegebene Objekt für eine Übereinstimmung enthält die folgenden Eigenschaften:

- `domain`

  - : Ein String, der die Domain des Cookies enthält.

- `expires`

  - : Ein Zeitstempel, angegeben als {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden, der das Ablaufdatum des Cookies enthält.

- `name`

  - : Ein String, der den Namen des Cookies enthält.

- `partitioned`

  - : Ein boolescher Wert, der angibt, ob das Cookie ein partitioniertes Cookie (`true`) ist oder nicht (`false`). Weitere Informationen finden Sie unter [Cookies mit unabhängigem partitioniertem Zustand (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies).

- `path`

  - : Ein String, der den Pfad des Cookies enthält.

- `sameSite`

  - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Werte: [`"strict"`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#strict), [`"lax"`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#lax) oder [`"none"`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#none).

- `secure`

  - : Ein boolescher Wert, der angibt, ob das Cookie nur in sicheren Kontexten verwendet werden soll (`true`) oder nicht (`false`).

- `value`
  - : Ein String, der den Wert des Cookies enthält.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Ursprung nicht zu einer URL {{Glossary("Serialization", "serialisiert")}} werden kann.
- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn:
    - Der `options`-Parameter ein leeres Objekt ist.
    - Die Methode im Hauptthread aufgerufen wird und die `url`-Option angegeben, aber nicht mit der URL des aktuellen Fensters übereinstimmt.
    - Die Methode in einem Worker aufgerufen wird und die `url`-Option angegeben ist, aber nicht mit dem Ursprung des Workers übereinstimmt.
    - Das Abfragen von Cookies, die durch den angegebenen `name` oder `options` dargestellt werden, fehlschlägt.

## Beispiele

<!-- Die Beispiele funktionieren aufgrund unbekannter Fehler im MDN-Umfeld nicht als Live-Beispiele -->

### Ein Cookie nach Namen abrufen

Dieses Beispiel zeigt, wie ein bestimmtes Cookie nach Name abgerufen wird.

Der Code erstellt zuerst ein Cookie namens "cookie1" mit [`CookieStore.set()`](/de/docs/Web/API/CookieStore/set) und protokolliert eventuelle Fehler in der Konsole.
Anschließend wartet er auf `get()`, um Informationen über dasselbe Cookie abzurufen.
Wenn das zurückgegebene Promise mit einem Objekt aufgelöst wird, protokollieren wir das Cookie: andernfalls protokollieren wir, dass kein passendes Cookie gefunden wurde.

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
