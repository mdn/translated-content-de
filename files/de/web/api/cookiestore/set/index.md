---
title: "CookieStore: set()-Methode"
short-title: set()
slug: Web/API/CookieStore/set
l10n:
  sourceCommit: efc22e586d21b91311f504a99c54437bbbbe96ef
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Die **`set()`**-Methode der [`CookieStore`](/de/docs/Web/API/CookieStore)-Schnittstelle setzt ein Cookie mit dem angegebenen `name` und `value` oder einem `options`-Objekt.

## Syntax

```js-nolint
set(name, value)
set(options)
```

### Parameter

Diese Methode erfordert einen der folgenden:

- `name` {{optional_inline}}
  - : Ein String mit dem Namen des Cookies.
- `value` {{optional_inline}}
  - : Ein String mit dem Wert des Cookies.

Oder

- `options` {{optional_inline}}
  - : Ein Objekt, das Folgendes enthält:
    - `domain` {{Optional_Inline}}
      - : Ein String, der die Domain des Cookies enthält. Standardmäßig `null`.
    - `expires` {{Optional_Inline}}
      - : Ein Zeitstempel, angegeben in {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden, der das Ablaufdatum des Cookies enthält. Standardmäßig `null`.
    - `maxAge` {{Optional_Inline}}
      - : Eine Zahl, die die Anzahl der Sekunden bis zum Ablauf des Cookies darstellt. Eine Null oder eine negative Zahl lässt das Cookie sofort ablaufen. Wenn sowohl `expires` als auch `maxAge` gesetzt sind, schlägt der `set()`-Aufruf mit einem `TypeError` fehl. Standardmäßig `null`.
    - `name`
      - : Ein String mit dem Namen eines Cookies.
    - `partitioned` {{Optional_Inline}}
      - : Ein boolescher Wert, der standardmäßig auf `false` gesetzt ist. Wenn auf `true` gesetzt, wird das gesetzte Cookie ein partitioniertes Cookie sein. Siehe [Cookies mit unabhängiger partitionierter Status (CHIPS)](/de/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies) für weitere Informationen.
    - `path` {{Optional_Inline}}
      - : Ein String, der den Pfad des Cookies enthält. Standardmäßig `/`.
    - `sameSite` {{Optional_Inline}}
      - : Einer der folgenden Werte [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value): [`"strict"`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#strict), [`"lax"`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#lax) oder [`"none"`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#none).
    - `value`
      - : Ein String mit dem Wert des Cookies.

> [!NOTE]
> Während die Werte hier gesetzt werden können und intern verwendet werden, geben einige Browser nur `name`- und `value`-Optionen von [`CookieStore.get()`](/de/docs/Web/API/CookieStore/get) und [`CookieStore.getAll()`](/de/docs/Web/API/CookieStore/getAll) zurück.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} aufgelöst wird, wenn das Setzen des Cookies abgeschlossen ist.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn der Ursprung nicht in eine URL {{Glossary("Serialization", "serialisiert")}} werden kann.
- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn:
    - Sowohl die `expires`- als auch `maxAge`-Eigenschaften gesetzt sind.
    - Das Setzen des Cookies mit dem gegebenen `name` und `value` oder `options` auf irgendeine andere Weise fehlschlägt.

## Beispiele

<!-- Die Beispiele funktionieren aufgrund unbekannter Fehler nicht als Live-Beispiele in der MDN-Umgebung -->

### Ein Cookie mit Namen und Wert setzen

Dieses Beispiel setzt ein Cookie, indem ein `name` und `value` von "cookie1" und "cookie1-value", jeweils übergeben werden.
Die anderen Eigenschaften des Cookies werden mit den Standardwerten gesetzt, die im [`options`](#options)-Parameter definiert sind.

Der Code wartet zuerst darauf, dass das Cookie gesetzt wird: Da diese Operation fehlschlagen kann, wird die Operation in einem `try...catch`-Block durchgeführt, und alle Fehler werden an die Konsole protokolliert.
Anschließend wird das gerade gesetzte Cookie abgerufen und protokolliert.

```js
async function cookieTest() {
  // Set cookie: passing name and value
  try {
    await cookieStore.set("cookie1", "cookie1-value");
  } catch (error) {
    console.log(`Error setting cookie1: ${error}`);
  }

  // Get the cookie and log its values
  const cookie = await cookieStore.get("cookie1");
  console.log(cookie);
}
```

### Ein Cookie mit Optionen setzen

Dieses Beispiel setzt ein Cookie, indem ein `options`-Objekt mit `name`, `value`, `expires` und `partitioned` übergeben wird.

Der Code wartet zuerst darauf, dass das Cookie gesetzt wird: Da diese Operation fehlschlagen kann, wird die Operation in einem `try...catch`-Block durchgeführt, und alle Fehler werden an die Konsole protokolliert.
Anschließend wird das gerade gesetzte Cookie abgerufen und protokolliert.

```js
async function cookieTest() {
  const day = 24 * 60 * 60 * 1000;
  const cookieName = "cookie2";
  try {
    // Set cookie: passing options
    await cookieStore.set({
      name: cookieName,
      value: `${cookieName}-value`,
      expires: Date.now() + day,
      partitioned: true,
    });
  } catch (error) {
    log(`Error setting ${cookieName}: ${error}`);
    console.log(error);
  }

  // Log the new cookie
  const cookie = await cookieStore.get(cookieName);
  console.log(cookie);
}
```

### Cookies mit demselben Namen setzen

Diese Aufrufe erstellen zwei separate Cookies, da sich ihre Pfade unterscheiden:

```js
await cookieStore.set({ name: "theme", value: "light", path: "/" });
await cookieStore.set({ name: "theme", value: "dark", path: "/docs" });
```

Auf einer Seite unter `/docs/` kann [`cookieStore.getAll("theme")`](/de/docs/Web/API/CookieStore/getAll) beide Cookies abrufen. Ein Aufruf von `cookieStore.set("theme", "blue")` aktualisiert das Cookie im Standardpfad `/`, ohne das `/docs`-Cookie zu verändern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
