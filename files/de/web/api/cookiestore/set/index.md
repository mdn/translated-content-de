---
title: "CookieStore: set() Methode"
short-title: set()
slug: Web/API/CookieStore/set
l10n:
  sourceCommit: c9f3d85f24d7839c9fe36a68d8042d088d906147
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Die **`set()`** Methode der [`CookieStore`](/de/docs/Web/API/CookieStore)-Schnittstelle setzt ein Cookie mit dem gegebenen `name` und `value` oder einem `options`-Objekt.

## Syntax

```js-nolint
set(name, value)
set(options)
```

### Parameter

Diese Methode erfordert eines der folgenden:

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
      - : Ein Zeitstempel, angegeben als {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden, der das Ablaufdatum des Cookies enthält. Standardmäßig `null`.
    - `maxAge` {{Optional_Inline}}
      - : Eine Zahl, die die Anzahl der Sekunden bis zum Ablauf des Cookies darstellt. Eine Null oder eine negative Zahl führt dazu, dass das Cookie sofort abläuft. Wenn sowohl `expires` als auch `maxAge` gesetzt sind, schlägt der `set()`-Aufruf mit einem `TypeError` fehl. Standardmäßig `null`.
    - `name`
      - : Ein String mit dem Namen eines Cookies.
    - `partitioned` {{Optional_Inline}}
      - : Ein boolescher Wert, der standardmäßig `false` ist. Wenn auf `true` gesetzt, wird das gesetzte Cookie ein partitioniertes Cookie. Siehe [Cookies mit unabhängigen partitionierten Zuständen (CHIPS)](/de/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies) für weitere Informationen.
    - `path` {{Optional_Inline}}
      - : Ein String, der den Pfad des Cookies enthält. Standardmäßig `/`.
    - `sameSite` {{Optional_Inline}}
      - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) Werte: [`"strict"`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#strict), [`"lax"`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#lax) oder [`"none"`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#none).
    - `value`
      - : Ein String mit dem Wert des Cookies.

> [!NOTE]
> Auch wenn die Werte hier gesetzt werden können und intern verwendet werden, werden einige Browser nur die `name`- und `value`-Optionen von [`CookieStore.get()`](/de/docs/Web/API/CookieStore/get) und [`CookieStore.getAll()`](/de/docs/Web/API/CookieStore/getAll) zurückgeben.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit {{jsxref("undefined")}} auflöst, wenn das Setzen des Cookies abgeschlossen ist.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn der Ursprung nicht zu einer URL {{Glossary("Serialization", "serialisiert")}} werden kann.
- {{jsxref("TypeError")}}
  - : Wird geworfen, wenn:
    - Sowohl die Eigenschaften `expires` als auch `maxAge` gesetzt sind.
    - Das Setzen des Cookies mit dem gegebenen `name` und `value` oder `options` auf andere Weise fehlschlägt.

## Beispiele

<!-- Die Beispiele funktionieren im MDN-Umfeld nicht als Live-Beispiele (aufgrund unbekannter Fehler) -->

### Setzen eines Cookies mit Name und Wert

Dieses Beispiel setzt ein Cookie, indem ein `name` und `value` von "cookie1" und "cookie1-value" übergeben wird.
Die anderen Eigenschaften des Cookies werden mit den Standardwerten gesetzt, wie im [`options`](#options)-Parameter definiert.

Der Code wartet zuerst darauf, dass das Cookie gesetzt wird: Da dieser Vorgang fehlschlagen kann, wird er in einem `try...catch`-Block ausgeführt und alle Fehler werden in die Konsole protokolliert.
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

### Setzen eines Cookies mit Optionen

Dieses Beispiel setzt ein Cookie, indem ein `options`-Objekt mit `name`, `value`, `expires` und `partitioned` übergeben wird.

Der Code wartet zuerst darauf, dass das Cookie gesetzt wird: Da dieser Vorgang fehlschlagen kann, wird er in einem `try...catch`-Block ausgeführt und alle Fehler werden in die Konsole protokolliert.
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

### Setzen von Cookies mit demselben Namen

Diese Aufrufe erzeugen zwei separate Cookies, da ihre Pfade unterschiedlich sind:

```js
await cookieStore.set({ name: "theme", value: "light", path: "/" });
await cookieStore.set({ name: "theme", value: "dark", path: "/docs" });
```

Auf einer Seite unter `/docs/` kann [`cookieStore.getAll("theme")`](/de/docs/Web/API/CookieStore/getAll) beide Cookies abrufen. Der Aufruf von `cookieStore.set("theme", "blue")` aktualisiert das Cookie am Standardpfad `/`, während das `/docs`-Cookie unverändert bleibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
