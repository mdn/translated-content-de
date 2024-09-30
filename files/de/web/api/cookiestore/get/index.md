---
title: "CookieStore: get()-Methode"
short-title: get()
slug: Web/API/CookieStore/get
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
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
> Die `url`-Option ermöglicht die Modifizierung eines Cookies, das unter einer bestimmten URL definiert ist. Service-Arbeiter können Cookies abrufen, die an jede URL innerhalb ihres Geltungsbereichs gesendet werden würden. Von einem Dokument aus können Sie nur die Cookies der aktuellen URL abrufen, daher ist die einzige gültige URL im Dokumentkontext die URL des Dokuments.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt aufgelöst wird, das das erste Cookie darstellt, das mit dem übermittelten `name` oder `options` übereinstimmt. Dieses Objekt enthält die folgenden Eigenschaften:

- `domain`

  - : Ein String, der die Domain des Cookies enthält.

- `expires`

  - : Ein Zeitstempel, angegeben als [Unix-Zeit](/de/docs/Glossary/Unix_time) in Millisekunden, der das Ablaufdatum des Cookies enthält.

- `name`

  - : Ein String, der den Namen des Cookies enthält.

- `partitioned`

  - : Ein Boolean, der angibt, ob das Cookie ein partitioniertes Cookie (`true`) ist oder nicht (`false`). Weitere Informationen finden Sie unter [Cookies mit unabhängigem partitioniertem Status (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies).

- `path`

  - : Ein String, der den Pfad des Cookies enthält.

- `sameSite`

  - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)-Werte:

    - `"strict"`
      - : Cookies werden nur in einem First-Party-Kontext gesendet und nicht mit Anfragen von Drittanbieter-Websites.
    - `"lax"`
      - : Cookies werden bei normalen Cross-Site-Subanfragen nicht gesendet (z. B. um Bilder oder Frames in eine Drittanbieterseite zu laden), aber werden gesendet, wenn ein Benutzer innerhalb der Ursprungsseite navigiert (d. h. wenn er einem Link folgt).
    - `"none"`
      - : Cookies werden in allen Kontexten gesendet.

- `secure`

  - : Ein Boolean-Wert, der angibt, ob das Cookie nur in sicheren Kontexten verwendet werden soll (`true`) oder nicht (`false`).

- `value`
  - : Ein String, der den Wert des Cookies enthält.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Ursprung nicht zu einer URL [serialisiert](/de/docs/Glossary/Serialization) werden kann.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Der `options`-Parameter ein leeres Objekt ist.
    - Die `url`-Option vorhanden ist und nicht mit der Erstellungs-URL übereinstimmt, falls im Haupt-Thread.
    - Die `url`-Option vorhanden ist und ihr Ursprung nicht mit dem Ursprung der Erstellungs-URL übereinstimmt.
    - Das Abfragen von Cookies, die durch den angegebenen `name` oder `options` repräsentiert werden, fehlschlägt.

## Beispiele

In diesem Beispiel kehren wir ein Cookie mit dem Namen "cookie1" zurück. Wenn das Cookie gefunden wird, ist das Ergebnis des Promise ein Objekt, das die Details eines einzelnen Cookies enthält.

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
