---
title: "CookieStore: get()-Methode"
short-title: get()
slug: Web/API/CookieStore/get
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Die **`get()`**-Methode der [`CookieStore`](/de/docs/Web/API/CookieStore)-Schnittstelle gibt ein einzelnes Cookie mit dem angegebenen `name` oder `options`-Objekt zurück. Die Methode gibt das erste übereinstimmende Cookie für die übergebenen Parameter zurück.

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

  - : Ein Objekt, das enthält:

    - `name`
      - : Ein String mit dem Namen eines Cookies.
    - `url`
      - : Ein String mit der URL eines Cookies.

> [!NOTE]
> Die `url`-Option ermöglicht die Änderung eines Cookies, das unter einer bestimmten URL gespeichert ist. Service Workers können Cookies abrufen, die an jede URL unter ihrem Geltungsbereich gesendet werden würden. Von einem Dokument aus können Sie nur die Cookies der aktuellen URL abrufen, daher ist die einzige gültige URL im Kontext eines Dokuments die URL des Dokuments.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt aufgelöst wird, das das erste Cookie darstellt, das mit dem übermittelten `name` oder `options` übereinstimmt. Dieses Objekt enthält die folgenden Eigenschaften:

- `domain`

  - : Ein String, der die Domain des Cookies enthält.

- `expires`

  - : Ein Zeitstempel, angegeben als {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden, der das Ablaufdatum des Cookies enthält.

- `name`

  - : Ein String, der den Namen des Cookies enthält.

- `partitioned`

  - : Ein boolescher Wert, der angibt, ob das Cookie ein partitioniertes Cookie (`true`) ist oder nicht (`false`). Weitere Informationen finden Sie unter [Cookies mit unabhängigen partionierten Zuständen (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies).

- `path`

  - : Ein String, der den Pfad des Cookies enthält.

- `sameSite`

  - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)-Werte:

    - `"strict"`
      - : Cookies werden nur in einem Erstparteienkontext gesendet und nicht mit Anfragen, die von Drittanbieter-Websites initiiert wurden.
    - `"lax"`
      - : Cookies werden nicht bei normalen Cross-Site-Unteranfragen gesendet (zum Beispiel zum Laden von Bildern oder Frames in eine Drittanbieter-Website), aber sie werden gesendet, wenn sich ein Benutzer innerhalb der Ursprungs-Website bewegt (d.h. beim Folgen eines Links).
    - `"none"`
      - : Cookies werden in allen Kontexten gesendet.

- `secure`

  - : Ein boolescher Wert, der angibt, ob das Cookie nur in sicheren Kontexten verwendet werden soll (`true`) oder nicht (`false`).

- `value`
  - : Ein String, der den Wert des Cookies enthält.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Ursprung nicht in eine URL {{Glossary("Serialization", "serialisiert")}} werden kann.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Der `options`-Parameter ein leeres Objekt ist.
    - Die `url`-Option vorhanden ist und nicht mit der Erstellungs-URL übereinstimmt, wenn im Hauptthread.
    - Die `url`-Option vorhanden ist und ihr Ursprung nicht derselbe ist wie der Ursprung der Erstellungs-URL.
    - Das Abfragen von Cookies, die durch den angegebenen `name` oder `options` dargestellt werden, fehlschlägt.

## Beispiele

In diesem Beispiel geben wir ein Cookie mit dem Namen "cookie1" zurück. Wenn das Cookie gefunden wird, ist das Ergebnis des Promises ein Objekt, das die Details eines einzelnen Cookies enthält.

```js
const cookie = await cookieStore.get("cookie1");

if (cookie) {
  console.log(cookie);
} else {
  console.log("Cookie not found");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
