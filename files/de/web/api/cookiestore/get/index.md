---
title: "CookieStore: get()-Methode"
short-title: get()
slug: Web/API/CookieStore/get
l10n:
  sourceCommit: 55bb65bb6a84808896ed0f6c83e57c60dbd8480e
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Die **`get()`**-Methode der [`CookieStore`](/de/docs/Web/API/CookieStore)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem einzelnen Cookie aufgelöst wird, das dem angegebenen `name` oder `options`-Objekt entspricht. Die Methode gibt das erste Cookie zurück, das übereinstimmt.

## Syntax

```js-nolint
get(name)
get(options)
```

### Parameter

Diese Methode erfordert eine der folgenden Angaben:

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
> Die `url`-Option ermöglicht die Modifikation eines Cookies, das unter einer bestimmten URL zugeordnet ist. Service Worker können Cookies erhalten, die an jede URL unter ihrem Gültigkeitsbereich gesendet würden. In einem Dokument können Sie nur die Cookies der aktuellen URL erhalten, sodass die einzige gültige URL im Kontext eines Dokuments die URL des Dokuments ist.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt aufgelöst wird, das das erste Cookie darstellt, das dem angegebenen `name` oder `options` entspricht, oder `null`, wenn kein übereinstimmendes Cookie vorhanden ist.

Das für eine Übereinstimmung zurückgegebene Objekt enthält die folgenden Eigenschaften:

- `domain` {{experimental_inline}} {{non-standard_inline}}
  - : Ein String, der die Domain des Cookies enthält.

- `expires` {{experimental_inline}} {{non-standard_inline}}
  - : Ein Zeitstempel, angegeben als {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden, der das Ablaufdatum des Cookies enthält.

- `name` {{experimental_inline}} {{non-standard_inline}}
  - : Ein String, der den Namen des Cookies enthält.

- `partitioned` {{experimental_inline}} {{non-standard_inline}}
  - : Ein boolescher Wert, der angibt, ob das Cookie ein partitioniertes Cookie ist (`true`) oder nicht (`false`). Siehe [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) für weitere Informationen.

- `path` {{experimental_inline}} {{non-standard_inline}}
  - : Ein String, der den Pfad des Cookies enthält.

- `sameSite` {{experimental_inline}} {{non-standard_inline}}
  - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Werte: [`"strict"`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#strict), [`"lax"`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#lax) oder [`"none"`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#none).

- `secure` {{experimental_inline}} {{non-standard_inline}}
  - : Ein boolescher Wert, der angibt, ob das Cookie nur in sicheren Kontexten verwendet werden soll (`true`) oder nicht (`false`).

- `value` {{experimental_inline}} {{non-standard_inline}}
  - : Ein String, der den Wert des Cookies enthält.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Ursprung nicht zu einer URL {{Glossary("Serialization", "serialisiert")}} werden kann.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Der `options`-Parameter ein leeres Objekt ist.
    - Die Methode im Hauptthread aufgerufen wird und die `url`-Option angegeben ist, aber nicht mit der URL des aktuellen Fensters übereinstimmt.
    - Die Methode in einem Worker aufgerufen wird und die `url`-Option angegeben ist, aber nicht mit dem Ursprung des Workers übereinstimmt.
    - Die Abfrage der durch den angegebenen `name` oder `options` dargestellten Cookies fehlschlägt.

## Beispiele

<!-- Die Beispiele funktionieren im MDN-Umfeld nicht als Live-Beispiele (aufgrund unbekannter Fehler) -->

### Ein Cookie nach Namen abrufen

Dieses Beispiel zeigt, wie Sie ein bestimmtes Cookie nach Namen abrufen können.

Der Code erstellt zunächst ein Cookie mit dem Namen "cookie1" mit [`CookieStore.set()`](/de/docs/Web/API/CookieStore/set) und protokolliert dabei eventuelle Fehler in der Konsole.
Dann wartet es auf `get()`, um Informationen über dasselbe Cookie abzurufen.
Wenn das zurückgegebene Promise mit einem Objekt aufgelöst wird, protokollieren wir das Cookie: ansonsten protokollieren wir, dass kein übereinstimmendes Cookie gefunden wurde.

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
