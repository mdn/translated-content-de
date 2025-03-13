---
title: "CookieStore: getAll()-Methode"
short-title: getAll()
slug: Web/API/CookieStore/getAll
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Die **`getAll()`**-Methode des [`CookieStore`](/de/docs/Web/API/CookieStore)-Interfaces gibt eine Liste von Cookies zurück, die dem übergebenen `name` oder den `options` entsprechen. Werden keine Parameter übergeben, werden alle Cookies für den aktuellen Kontext zurückgegeben.

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

  - : Ein Objekt, das folgende Eigenschaften enthält:

    - `name`
      - : Ein String mit dem Namen eines Cookies.
    - `url`
      - : Ein String mit der URL eines Cookies.

> [!NOTE]
> Die `url`-Option ermöglicht die Modifizierung eines Cookies, das unter einer bestimmten URL erfasst ist. Service-Arbeiter können Cookies abrufen, die an jede URL unter ihrem Geltungsbereich gesendet würden. Sie können in einem Dokument nur die Cookies an der aktuellen URL abrufen, sodass die einzige gültige URL in einem Dokumentkontext die URL des Dokuments ist.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von Objekten aufgelöst wird, die Cookies darstellen, die dem angegebenen `name` oder `options` entsprechen.

Jedes Objekt enthält die folgenden Eigenschaften:

- `domain`

  - : Ein String, der die Domain des Cookies enthält.

- `expires`

  - : Ein Zeitstempel, angegeben als {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden, der das Ablaufdatum des Cookies enthält.

- `name`

  - : Ein String, der den Namen des Cookies enthält.

- `partitioned`

  - : Ein Boolean, der anzeigt, ob das Cookie ein partitioniertes Cookie (`true`) ist oder nicht (`false`). Siehe [Cookies mit unabhängigem partitioniertem Zustand (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) für weitere Informationen.

- `path`

  - : Ein String, der den Pfad des Cookies enthält.

- `sameSite`

  - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) Werte:

    - `"strict"`
      - : Cookies werden nur in einem First-Party-Kontext gesendet und nicht mit Anfragen von Drittanbieter-Websites.
    - `"lax"`
      - : Cookies werden bei normalen Cross-Site-Subrequests nicht gesendet (zum Beispiel, um Bilder oder Frames in eine Drittanbieter-Website zu laden), aber sie werden gesendet, wenn ein Benutzer innerhalb der Ursprungs-Website navigiert (d.h. beim Folgen eines Links).
    - `"none"`
      - : Cookies werden in allen Kontexten gesendet.

- `secure`

  - : Ein Boolean-Wert, der angibt, ob das Cookie nur in sicheren Kontexten verwendet werden soll (`true`) oder nicht (`false`).

- `value`
  - : Ein String, der den Wert des Cookies enthält.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn der Ursprung nicht zu einer URL {{Glossary("Serialization", "serialisiert")}} werden kann.
- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn:
    - Die `url`-Option vorhanden ist und nicht gleich der Erstellungs-URL ist, falls im Haupt-Thread.
    - Die `url`-Option vorhanden ist und ihr Ursprung nicht mit dem Ursprung der Erstellungs-URL übereinstimmt.
    - Das Abfragen von Cookies, die durch den gegebenen `name` oder `options` repräsentiert werden, fehlschlägt.

## Beispiele

In diesem Beispiel verwenden wir `getAll()` ohne Parameter. Dies gibt alle Cookies für diesen Kontext als Array von Objekten zurück.

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
