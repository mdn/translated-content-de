---
title: "CookieStore: get()-Methode"
short-title: get()
slug: Web/API/CookieStore/get
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Die **`get()`**-Methode des [`CookieStore`](/de/docs/Web/API/CookieStore)-Interfaces gibt ein einzelnes Cookie mit dem angegebenen `name` oder `options`-Objekt zurück. Die Methode gibt das erste übereinstimmende Cookie für die übergebenen Parameter zurück.

## Syntax

```js-nolint
get(name)
get(options)
```

### Parameter

Diese Methode erfordert einen der folgenden Parameter:

- `name` {{optional_inline}}
  - : Ein Zeichenfolgenwert mit dem Namen eines Cookies.

Oder

- `options` {{optional_inline}}

  - : Ein Objekt, das Folgendes enthält:

    - `name`
      - : Ein Zeichenfolgenwert mit dem Namen eines Cookies.
    - `url`
      - : Ein Zeichenfolgenwert mit der URL eines Cookies.

> [!NOTE]
> Die `url`-Option ermöglicht die Änderung eines Cookies, das unter einer bestimmten URL definiert ist. Service-Worker können Cookies abrufen, die an jede URL in ihrem Gültigkeitsbereich gesendet werden. Von einem Dokument aus können Sie nur die Cookies an der aktuellen URL abrufen, sodass die einzige gültige URL im Dokumentkontext die URL des Dokuments ist.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt aufgelöst wird, das das erste Cookie darstellt, das mit dem übermittelten `name` oder `options` übereinstimmt. Dieses Objekt enthält folgende Eigenschaften:

- `domain`

  - : Eine Zeichenfolge, die die Domain des Cookies enthält.

- `expires`

  - : Ein Zeitstempel, angegeben in {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden, der das Ablaufdatum des Cookies enthält.

- `name`

  - : Eine Zeichenfolge, die den Namen des Cookies enthält.

- `partitioned`

  - : Ein boolescher Wert, der angibt, ob das Cookie ein partitioniertes Cookie (`true`) ist oder nicht (`false`). Siehe [Cookies mit unabhängigem partitioniertem Status (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) für weitere Informationen.

- `path`

  - : Eine Zeichenfolge, die den Pfad des Cookies enthält.

- `sameSite`

  - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Werte:

    - `"strict"`
      - : Cookies werden nur in einem First-Party-Kontext gesendet und nicht mit Anfragen von Drittwebsites.
    - `"lax"`
      - : Cookies werden bei normalen Cross-Site-Unteranfragen nicht gesendet (zum Beispiel zum Laden von Bildern oder Frames in eine Drittanbieter-Website), werden jedoch gesendet, wenn ein Benutzer innerhalb der ursprünglichen Website navigiert (d.h. beim Folgen eines Links).
    - `"none"`
      - : Cookies werden in allen Kontexten gesendet.

- `secure`

  - : Ein boolescher Wert, der anzeigt, ob das Cookie nur in sicheren Kontexten verwendet werden soll (`true`) oder nicht (`false`).

- `value`
  - : Eine Zeichenfolge, die den Wert des Cookies enthält.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Ursprung nicht zu einer URL {{Glossary("Serialization", "serialisiert")}} werden kann.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Der `options`-Parameter ein leeres Objekt ist.
    - Die `url`-Option vorhanden ist und nicht mit der Erstellungs-URL übereinstimmt, wenn im Hauptthread.
    - Die `url`-Option vorhanden ist und ihr Ursprung nicht derselbe ist wie der Ursprung der Erstellungs-URL.
    - Das Abfragen von Cookies, die durch den angegebenen `name` oder `options` dargestellt werden, fehlschlägt.

## Beispiele

In diesem Beispiel geben wir ein Cookie mit dem Namen "cookie1" zurück. Wenn das Cookie gefunden wird, ist das Ergebnis des Versprechens ein Objekt, das die Details eines einzelnen Cookies enthält.

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
