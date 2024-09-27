---
title: "CookieStore: getAll()-Methode"
short-title: getAll()
slug: Web/API/CookieStore/getAll
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Die **`getAll()`**-Methode der [`CookieStore`](/de/docs/Web/API/CookieStore)-Schnittstelle gibt eine Liste von Cookies zurück, die dem übergebenen `name` oder `options` entsprechen. Ohne Parameter werden alle Cookies für den aktuellen Kontext zurückgegeben.

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
> Die `url`-Option ermöglicht die Änderung eines Cookies, das unter einer bestimmten URL eingegrenzt ist. Servicearbeiter können Cookies abrufen, die an jede URL unter ihrem Geltungsbereich gesendet würden. Von einem Dokument aus können Sie nur die Cookies an der aktuellen URL abrufen, sodass die einzige gültige URL im Dokumentenkontext die URL des Dokuments ist.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von Objekten aufgelöst wird, die Cookies repräsentieren, die dem angegebenen `name` oder `options` entsprechen.

Jedes Objekt enthält die folgenden Eigenschaften:

- `domain`

  - : Ein String, der die Domain des Cookies enthält.

- `expires`

  - : Ein Zeitstempel, angegeben als [Unix-Zeit](/de/docs/Glossary/Unix_time) in Millisekunden, der das Ablaufdatum des Cookies enthält.

- `name`

  - : Ein String, der den Namen des Cookies enthält.

- `partitioned`

  - : Ein boolescher Wert, der angibt, ob das Cookie ein partitioniertes Cookie (`true`) ist oder nicht (`false`). Siehe [Cookies mit unabhängigem partitionierten Zustand (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies) für weitere Informationen.

- `path`

  - : Ein String, der den Pfad des Cookies enthält.

- `sameSite`

  - : Einer der folgenden [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)-Werte:

    - `"strict"`
      - : Cookies werden nur in einem Erstanbieter-Kontext gesendet und nicht mit Anfragen von Drittanbieter-Websites.
    - `"lax"`
      - : Cookies werden bei normalen Cross-Site-Subanfragen (z. B. zum Laden von Bildern oder Frames in ein Drittanbieter-Site) nicht gesendet, aber sie werden gesendet, wenn ein Benutzer innerhalb der Ursprungsseite navigiert (d. h. beim Folgen eines Links).
    - `"none"`
      - : Cookies werden in allen Kontexten gesendet.

- `secure`

  - : Ein boolescher Wert, der angibt, ob das Cookie nur in sicheren Kontexten verwendet werden soll (`true`) oder nicht (`false`).

- `value`
  - : Ein String, der den Wert des Cookies enthält.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Ursprung nicht in eine URL [serialisierbar](/de/docs/Glossary/Serialization) ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Die `url`-Option vorhanden ist und nicht gleich der Erstellungs-URL ist, falls im Hauptthread.
    - Die `url`-Option vorhanden ist und ihr Ursprung nicht derselbe ist wie der Ursprung der Erstellungs-URL.
    - Die Abfrage der Cookies, die durch den angegebenen `name` oder `options` dargestellt werden, fehlschlägt.

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
