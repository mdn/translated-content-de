---
title: "CookieStore: get() Methode"
short-title: get()
slug: Web/API/CookieStore/get
l10n:
  sourceCommit: e161086720f53ca4a4dabed5b69743324d194b23
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Die **`get()`** Methode der [`CookieStore`](/de/docs/Web/API/CookieStore)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das auf ein einzelnes Cookie aufgelöst wird, das dem angegebenen `name` oder `options` Objekt entspricht. Die Methode gibt das erste übereinstimmende Cookie zurück.

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
> Die `url`-Option ermöglicht die Änderung eines Cookies, das unter einer bestimmten URL definiert ist. Service Worker können Cookies abrufen, die an jede URL unter ihrem Bereich gesendet würden. Aus einem Dokument können Sie nur die Cookies an der aktuellen URL abrufen, daher ist die einzige gültige URL in einem Dokumentkontext die URL des Dokuments.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt aufgelöst wird, das das erste Cookie darstellt, das dem übermittelten `name` oder `options` entspricht, oder `null`, wenn kein übereinstimmendes Cookie vorhanden ist.

Das zurückgegebene Objekt für eine Übereinstimmung enthält die folgenden Eigenschaften:

- `name`
  - : Ein String, der den Namen des Cookies enthält.
- `value`
  - : Ein String, der den Wert des Cookies enthält.

Die folgenden Eigenschaften sind nicht standardisiert und sollten nicht verwendet werden:

- `domain` {{experimental_inline}} {{non-standard_inline}}
  - : Ein String, der die Domäne des Cookies enthält.
- `expires` {{experimental_inline}} {{non-standard_inline}}
  - : Ein Zeitstempel, angegeben als {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden, der das Ablaufdatum des Cookies enthält.
- `partitioned` {{experimental_inline}} {{non-standard_inline}}
  - : Ein Boolean, der angibt, ob das Cookie ein partitioniertes Cookie (`true`) ist oder nicht (`false`). Weitere Informationen finden Sie unter [Cookies mit unabhängiger partitionierter Zustandsverwaltung (CHIPS)](/de/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies).
- `path` {{experimental_inline}} {{non-standard_inline}}
  - : Ein String, der den Pfad des Cookies enthält.
- `sameSite` {{experimental_inline}} {{non-standard_inline}}
  - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Werte: [`"strict"`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#strict), [`"lax"`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#lax) oder [`"none"`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#none).
- `secure` {{experimental_inline}} {{non-standard_inline}}
  - : Ein Boolean-Wert, der angibt, ob das Cookie nur in sicheren Kontexten verwendet werden soll (`true`) oder nicht (`false`).

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Ursprung nicht in eine URL {{Glossary("Serialization", "serialisiert")}} werden kann.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Der `options`-Parameter ein leeres Objekt ist.
    - Die Methode im Haupt-Thread aufgerufen wird, und die `url`-Option angegeben ist, aber nicht mit der URL des aktuellen Fensters übereinstimmt.
    - Die Methode in einem Worker aufgerufen wird und die `url`-Option angegeben ist, aber nicht mit dem Ursprung des Workers übereinstimmt.
    - Das Abfragen der Cookies, die durch den angegebenen `name` oder `options` dargestellt werden, fehlschlägt.

## Beispiele

<!-- Die Beispiele funktionieren nicht als Live-Beispiele in der MDN-Umgebung (aufgrund unbekannter Fehler) -->

### Abrufen eines Cookies nach Name

Dieses Beispiel zeigt, wie ein bestimmtes Cookie nach Name abgerufen wird.

Der Code erstellt zunächst ein Cookie mit dem Namen "cookie1" mithilfe der [`CookieStore.set()`](/de/docs/Web/API/CookieStore/set)-Methode und protokolliert dabei aufgetretene Fehler in der Konsole. Anschließend wartet er auf `get()`, um Informationen über dasselbe Cookie abzurufen. Wenn das zurückgegebene Promise mit einem Objekt aufgelöst wird, protokollieren wir das Cookie; andernfalls protokollieren wir, dass kein übereinstimmendes Cookie gefunden wurde.

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
