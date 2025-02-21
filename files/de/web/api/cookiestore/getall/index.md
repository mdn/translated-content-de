---
title: "CookieStore: getAll() Methode"
short-title: getAll()
slug: Web/API/CookieStore/getAll
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Die **`getAll()`** Methode der [`CookieStore`](/de/docs/Web/API/CookieStore)-Schnittstelle gibt eine Liste von Cookies zurück, die dem übergebenen `name` oder den `options` entsprechen. Wenn keine Parameter übergeben werden, werden alle Cookies für den aktuellen Kontext zurückgegeben.

## Syntax

```js-nolint
getAll(name)
getAll(options)
```

### Parameter

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
> Die `url`-Option ermöglicht die Modifikation eines Cookies, das unter einer bestimmten URL gesichert ist. Service Worker können Cookies erhalten, die an jede URL in ihrem Geltungsbereich gesendet werden würden. Aus einem Dokument heraus können Sie nur die Cookies an der aktuellen URL erhalten, daher ist die einzige gültige URL im Dokumentkontext die URL des Dokuments.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von Objekten aufgelöst wird, die Cookies darstellen, die dem gegebenen `name` oder den `options` entsprechen.

Jedes Objekt enthält die folgenden Eigenschaften:

- `domain`

  - : Ein String, der die Domäne des Cookies enthält.

- `expires`

  - : Ein Zeitstempel, angegeben als {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden, der das Ablaufdatum des Cookies enthält.

- `name`

  - : Ein String, der den Namen des Cookies enthält.

- `partitioned`

  - : Ein Boolean, der angibt, ob das Cookie ein partitioniertes Cookie (`true`) ist oder nicht (`false`). Weitere Informationen finden Sie unter [Cookies mit unabhängigen partitionierten Zuständen (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies).

- `path`

  - : Ein String, der den Pfad des Cookies enthält.

- `sameSite`

  - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)-Werte:

    - `"strict"`
      - : Cookies werden nur in einem erstparteien Kontext gesendet und nicht mit Anfragen von Drittanbieter-Websites.
    - `"lax"`
      - : Cookies werden bei normalen Cross-Site-Unteranfragen (z. B. beim Laden von Bildern oder Frames in eine Drittanbieterseite) nicht gesendet, werden jedoch gesendet, wenn ein Benutzer innerhalb der Herkunftsseite navigiert (z. B. beim Folgen eines Links).
    - `"none"`
      - : Cookies werden in allen Kontexten gesendet.

- `secure`

  - : Ein Boolean-Wert, der angibt, ob das Cookie nur in sicheren Kontexten verwendet werden soll (`true`) oder nicht (`false`).

- `value`
  - : Ein String, der den Wert des Cookies enthält.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Ursprung nicht in eine URL {{Glossary("Serialization", "serialisierbar")}} ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Die `url`-Option vorhanden ist und nicht mit der Erstellung-URL gleich ist, wenn im Hauptthread.
    - Das `url`-Option vorhanden ist und ihr Ursprung nicht derselbe ist wie der Ursprung der Erstellung-URL.
    - Das Abfragen der durch den gegebenen `name` oder `options` dargestellten Cookies fehlschlägt.

## Beispiele

In diesem Beispiel verwenden wir `getAll()` ohne Parameter. Dies gibt alle Cookies für diesen Kontext als ein Array von Objekten zurück.

```js
const cookies = await cookieStore.getAll();

if (cookies.length > 0) {
  console.log(cookies);
} else {
  console.log("Cookie not found");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
