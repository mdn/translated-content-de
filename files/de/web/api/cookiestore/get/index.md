---
title: "CookieStore: get() Methode"
short-title: get()
slug: Web/API/CookieStore/get
l10n:
  sourceCommit: 5ef5a171a41dbcb48c953cc3c98c1237566796e9
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Die **`get()`**-Methode des [`CookieStore`](/de/docs/Web/API/CookieStore)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einem einzelnen Cookie aufgelöst wird, das dem angegebenen `name` oder `options`-Objekt entspricht. Die Methode gibt das erste übereinstimmende Cookie zurück.

## Syntax

```js-nolint
get(name)
get(options)
```

### Parameter

Diese Methode erfordert einen der folgenden Parameter:

- `name` {{optional_inline}}
  - : Ein String mit dem Namen eines Cookies.

Oder

- `options` {{optional_inline}}
  - : Ein Objekt, das Folgendes enthält:
    - `name`
      - : Ein String mit dem Namen eines Cookies.
    - `url`
      - : Ein String mit der URL eines Cookies.

> [!NOTE]
> Die `url`-Option ermöglicht die Modifikation eines Cookies, das unter einer bestimmten URL festgelegt ist. Service Worker können Cookies abrufen, die an jede URL unter ihrem Geltungsbereich gesendet würden. Aus einem Dokument können Sie nur die Cookies an der aktuellen URL abrufen, sodass die einzige gültige URL in einem Dokumentkontext die URL des Dokuments ist.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt aufgelöst wird, das das erste Cookie darstellt, das dem übermittelten `name` oder `options` entspricht, oder `null`, wenn kein übereinstimmendes Cookie vorhanden ist.

Das für eine Übereinstimmung zurückgegebene Objekt enthält die folgenden Eigenschaften:

- `domain` {{experimental_inline}} {{non-standard_inline}}
  - : Ein String, der die Domain des Cookies enthält.

- `expires` {{experimental_inline}} {{non-standard_inline}}
  - : Ein Zeitstempel, angegeben als {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden, der das Ablaufdatum des Cookies enthält.

- `name` {{experimental_inline}} {{non-standard_inline}}
  - : Ein String, der den Namen des Cookies enthält.

- `partitioned` {{experimental_inline}} {{non-standard_inline}}
  - : Ein boolescher Wert, der angibt, ob das Cookie ein partitioniertes Cookie ist (`true`) oder nicht (`false`). Weitere Informationen finden Sie unter [Cookies mit unabhängigem partiellem Zustand (CHIPS)](/de/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies).

- `path` {{experimental_inline}} {{non-standard_inline}}
  - : Ein String, der den Pfad des Cookies enthält.

- `sameSite` {{experimental_inline}} {{non-standard_inline}}
  - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) Werte: [`"strict"`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#strict), [`"lax"`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#lax), oder [`"none"`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#none).

- `secure` {{experimental_inline}} {{non-standard_inline}}
  - : Ein boolescher Wert, der angibt, ob das Cookie nur in sicheren Kontexten verwendet werden soll (`true`) oder nicht (`false`).

- `value` {{experimental_inline}} {{non-standard_inline}}
  - : Ein String, der den Wert des Cookies enthält.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn der Ursprung nicht in eine URL {{Glossary("Serialization", "serialisiert")}} wird.
- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn:
    - Der `options` Parameter ein leeres Objekt ist.
    - Die Methode im Hauptthread aufgerufen wird und die `url`-Option angegeben ist, aber nicht mit der URL des aktuellen Fensters übereinstimmt.
    - Die Methode in einem Worker aufgerufen wird und die `url`-Option angegeben ist, aber nicht mit dem Ursprung des Workers übereinstimmt.
    - Das Abfragen von Cookies, die durch den angegebenen `name` oder `options` repräsentiert werden, fehlschlägt.

## Beispiele

<!-- Die Beispiele funktionieren in der MDN Umgebung nicht als Live-Beispiele (aufgrund unbekannter Fehler) -->

### Ein Cookie nach Namen abrufen

Dieses Beispiel zeigt, wie man ein bestimmtes Cookie nach Namen abruft.

Der Code erstellt zunächst ein Cookie namens "cookie1" mit [`CookieStore.set()`](/de/docs/Web/API/CookieStore/set) und protokolliert eventuelle Fehler in der Konsole.
Dann wartet er auf `get()`, um Informationen zu diesem gleichen Cookie abzurufen.
Wenn das zurückgegebene Promise mit einem Objekt aufgelöst wird, protokollieren wir das Cookie: Andernfalls protokollieren wir, dass kein übereinstimmendes Cookie gefunden wurde.

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
