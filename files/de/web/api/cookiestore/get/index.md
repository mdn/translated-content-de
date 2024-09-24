---
title: "CookieStore: get()-Methode"
short-title: get()
slug: Web/API/CookieStore/get
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Die **`get()`**-Methode der {{domxref("CookieStore")}}-Schnittstelle gibt ein einzelnes Cookie mit dem angegebenen `name` oder `options`-Objekt zurück. Die Methode liefert das erste übereinstimmende Cookie für die übergebenen Parameter zurück.

## Syntax

```js-nolint
get(name)
get(options)
```

### Parameter

Diese Methode erfordert einen der folgenden:

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
> Die `url`-Option ermöglicht die Änderung eines Cookies, das unter einer bestimmten URL steht. Service-Arbeiter können Cookies abrufen, die an jede URL unter ihrem Geltungsbereich gesendet würden. Aus einem Dokument können Sie nur die Cookies der aktuellen URL abrufen, sodass die einzige gültige URL in einem Dokumentkontext die URL des Dokuments ist.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt aufgelöst wird, das das erste Cookie darstellt, das dem übermittelten `name` oder `options` entspricht. Dieses Objekt enthält die folgenden Eigenschaften:

- `domain`

  - : Ein String, der die Domain des Cookies enthält.

- `expires`

  - : Ein Zeitstempel, angegeben als {{glossary("Unix time")}} in Millisekunden, der das Ablaufdatum des Cookies enthält.

- `name`

  - : Ein String, der den Namen des Cookies enthält.

- `partitioned`

  - : Ein Boolean, der angibt, ob das Cookie ein partitioniertes Cookie (`true`) ist oder nicht (`false`). Siehe [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies) für weitere Informationen.

- `path`

  - : Ein String, der den Pfad des Cookies enthält.

- `sameSite`

  - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) Werte:

    - `"strict"`
      - : Cookies werden nur in einem First-Party-Kontext gesendet und nicht mit Anfragen gesendet, die von Drittanbieter-Websites initiiert werden.
    - `"lax"`
      - : Cookies werden nicht bei normalen Cross-Site-Subanfragen (zum Beispiel zum Laden von Bildern oder Frames in eine Drittanbieter-Website) gesendet, aber wenn ein Benutzer innerhalb der Ursprungsseite navigiert (z. B. beim Folgen eines Links).
    - `"none"`
      - : Cookies werden in allen Kontexten gesendet.

- `secure`

  - : Ein Boolean-Wert, der angibt, ob das Cookie nur in sicheren Kontexten verwendet werden soll (`true`) oder nicht (`false`).

- `value`
  - : Ein String, der den Wert des Cookies enthält.

### Ausnahmen

- `SecurityError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Ursprung nicht in eine URL {{glossary("Serialization", "serialisiert")}}.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Der `options`-Parameter ein leeres Objekt ist.
    - Die `url`-Option vorhanden ist und nicht mit der Erstellungs-URL übereinstimmt, wenn im Hauptthread.
    - Die `url`-Option vorhanden ist und ihr Ursprung nicht derselbe ist wie der Ursprung der Erstellungs-URL.
    - Die Abfrage der durch den angegebenen `name` oder `options` dargestellten Cookies fehlschlägt.

## Beispiele

In diesem Beispiel geben wir ein Cookie mit dem Namen "cookie1" zurück. Wenn das Cookie gefunden wird, ist das Ergebnis des Promise ein Objekt, das die Details eines einzelnen Cookies enthält.

```js
const cookie = await cookieStore.get("cookie1");

if (cookie) {
  console.log(cookie);
} else {
  console.log("Cookie nicht gefunden");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
