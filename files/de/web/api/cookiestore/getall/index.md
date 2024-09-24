---
title: "CookieStore: getAll()-Methode"
short-title: getAll()
slug: Web/API/CookieStore/getAll
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Die **`getAll()`**-Methode des {{domxref("CookieStore")}}-Interfaces gibt eine Liste von Cookies zurück, die mit dem übergebenen `name` oder den `options` übereinstimmen. Wenn keine Parameter übergeben werden, werden alle Cookies für den aktuellen Kontext zurückgegeben.

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

  - : Ein Objekt, das enthält:

    - `name`
      - : Ein String mit dem Namen eines Cookies.
    - `url`
      - : Ein String mit der URL eines Cookies.

> [!NOTE]
> Die `url`-Option ermöglicht die Änderung eines Cookies, das unter einer bestimmten URL steht. Service-Arbeiter können Cookies erhalten, die an jede URL unter ihrem Bereich gesendet werden würden. Von einem Dokument aus können Sie nur die Cookies an der aktuellen URL abrufen, daher ist die einzige gültige URL im Kontext eines Dokuments die URL des Dokuments.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von Objekten aufgelöst wird, das Cookies darstellt, die mit dem angegebenen `name` oder den `options` übereinstimmen.

Jedes Objekt enthält die folgenden Eigenschaften:

- `domain`

  - : Ein String, der die Domain des Cookies enthält.

- `expires`

  - : Ein Zeitstempel, angegeben als [Unix-Zeit](/de/docs/Glossary/Unix_time) in Millisekunden, der das Ablaufdatum des Cookies enthält.

- `name`

  - : Ein String, der den Namen des Cookies enthält.

- `partitioned`

  - : Ein boolescher Wert, der angibt, ob das Cookie ein partitioniertes Cookie ist (`true`) oder nicht (`false`). Weitere Informationen finden Sie unter [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies).

- `path`

  - : Ein String, der den Pfad des Cookies enthält.

- `sameSite`

  - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)-Werte:

    - `"strict"`
      - : Cookies werden nur in einem Erstparteien-Kontext gesendet und nicht mit Anfragen, die von Drittanbieter-Websites initiiert werden.
    - `"lax"`
      - : Cookies werden bei normalen Cross-Site-Unteranfragen (z.B. zum Laden von Bildern oder Frames in eine Drittanbieterseite) nicht gesendet, werden jedoch gesendet, wenn ein Nutzer innerhalb der Ursprungsseite navigiert (z.B. beim Folgen eines Links).
    - `"none"`
      - : Cookies werden in allen Kontexten gesendet.

- `secure`

  - : Ein boolescher Wert, der angibt, ob das Cookie nur in sicheren Kontexten verwendet werden soll (`true`) oder nicht (`false`).

- `value`
  - : Ein String, der den Wert des Cookies enthält.

### Ausnahmen

- `SecurityError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Ursprung sich nicht zu einer URL {{glossary("Serialization", "serialisieren")}} lässt.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Die `url`-Option vorhanden ist und nicht gleich der Erstellungs-URL ist, wenn im Haupt-Thread.
    - Die `url`-Option vorhanden ist und ihr Ursprung nicht derselbe ist wie der Ursprung der Erstellungs-URL.
    - Die Abfrage der Cookies, repräsentiert durch den gegebenen `name` oder `options`, fehlschlägt.

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
