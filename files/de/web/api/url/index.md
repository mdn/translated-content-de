---
title: URL
slug: Web/API/URL
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Die **`URL`**-Schnittstelle wird verwendet, um {{Glossary("URL", "URLs")}} zu parsen, zu erstellen, zu normalisieren und zu kodieren. Sie stellt Eigenschaften bereit, mit denen Sie die Bestandteile einer URL einfach auslesen und ändern können.

Normalerweise erstellen Sie ein neues `URL`-Objekt, indem Sie beim Aufruf des Konstruktors die URL als Zeichenfolge angeben oder eine relative URL und eine Basis-URL übergeben. Anschließend können Sie die geparsten Bestandteile der URL auslesen oder die URL ändern.

## Konstruktor

- [`URL()`](/de/docs/Web/API/URL/URL)
  - : Erstellt ein `URL`-Objekt aus einer URL-Zeichenfolge und einer optionalen Basis-URL-Zeichenfolge und gibt es zurück. Löst eine Ausnahme aus, wenn die übergebenen Argumente keine gültige URL definieren.

## Instanzeigenschaften

- [`hash`](/de/docs/Web/API/URL/hash)
  - : Eine Zeichenfolge, die ein `'#'` gefolgt vom Fragmentbezeichner der URL enthält.
- [`host`](/de/docs/Web/API/URL/host)
  - : Eine Zeichenfolge, die die Domain (also den _hostname_) enthält, gefolgt von einem `':'` und dem _port_ der URL, sofern ein Port angegeben wurde.
- [`hostname`](/de/docs/Web/API/URL/hostname)
  - : Eine Zeichenfolge, die die Domain der URL enthält.
- [`href`](/de/docs/Web/API/URL/href)
  - : Ein {{Glossary("stringifier", "Stringifier")}}, der eine Zeichenfolge mit der vollständigen URL zurückgibt.
- [`origin`](/de/docs/Web/API/URL/origin) {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge zurück, die den Origin der URL enthält, also ihr Schema, ihre Domain und ihren Port.
- [`password`](/de/docs/Web/API/URL/password)
  - : Eine Zeichenfolge, die das vor dem Domainnamen angegebene Passwort enthält.
- [`pathname`](/de/docs/Web/API/URL/pathname)
  - : Eine Zeichenfolge, die ein führendes `'/'` gefolgt vom Pfad der URL enthält, ohne Query-String oder Fragment.
- [`port`](/de/docs/Web/API/URL/port)
  - : Eine Zeichenfolge, die die Portnummer der URL enthält.
- [`protocol`](/de/docs/Web/API/URL/protocol)
  - : Eine Zeichenfolge, die das Protokollschema der URL einschließlich des abschließenden `':'` enthält.
- [`search`](/de/docs/Web/API/URL/search)
  - : Eine Zeichenfolge, die die Parameterzeichenfolge der URL angibt. Falls Parameter vorhanden sind, enthält sie alle Parameter und beginnt mit dem führenden Zeichen `?`.
- [`searchParams`](/de/docs/Web/API/URL/searchParams) {{ReadOnlyInline}}
  - : Ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt, mit dem Sie auf die einzelnen in `search` enthaltenen Query-Parameter zugreifen können.
- [`username`](/de/docs/Web/API/URL/username)
  - : Eine Zeichenfolge, die den vor dem Domainnamen angegebenen Benutzernamen enthält.

## Statische Methoden

- [`canParse()`](/de/docs/Web/API/URL/canParse_static)
  - : Gibt einen booleschen Wert zurück, der angibt, ob eine durch eine URL-Zeichenfolge und eine optionale Basis-URL-Zeichenfolge definierte URL geparst werden kann und gültig ist.
- [`createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static)
  - : Gibt eine Zeichenfolge mit einer eindeutigen Blob-URL zurück, also einer URL mit `blob:` als Schema, gefolgt von einer undurchsichtigen Zeichenfolge, die das Objekt im Browser eindeutig identifiziert.
- [`parse()`](/de/docs/Web/API/URL/parse_static)
  - : Erstellt ein `URL`-Objekt aus einer URL-Zeichenfolge und einer optionalen Basis-URL-Zeichenfolge und gibt es zurück. Wenn die übergebenen Parameter eine ungültige `URL` definieren, wird `null` zurückgegeben.
- [`revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static)
  - : Widerruft eine zuvor mit [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) erstellte Objekt-URL.

## Instanzmethoden

- [`toString()`](/de/docs/Web/API/URL/toString)
  - : Gibt eine Zeichenfolge mit der vollständigen URL zurück. Die Methode ist gleichbedeutend mit [`URL.href`](/de/docs/Web/API/URL/href), kann aber nicht zum Ändern des Werts verwendet werden.
- [`toJSON()`](/de/docs/Web/API/URL/toJSON)
  - : Gibt eine Zeichenfolge zurück, die das `URL`-Objekt repräsentiert. Ihr Wert entspricht dem Rückgabewert von [`URL.toString()`](/de/docs/Web/API/URL/toString). Die Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen.

## Hinweise zur Verwendung

Der Konstruktor nimmt einen `url`-Parameter und einen optionalen `base`-Parameter entgegen. Letzterer dient als Basis, wenn der `url`-Parameter eine relative URL ist.

Beachten Sie, dass im folgenden Beispiel „dogs“ das Dateinamen-Segment ist (da ein abschließender Schrägstrich fehlt). Die relative URL „cats“ wird relativ zum _Verzeichnis_-Teil der Basis-URL interpretiert, also zu `http://www.example.com/animals/`. Weitere Informationen finden Sie unter [Relative Verweise auf eine URL auflösen](/de/docs/Web/API/URL_API/Resolving_relative_references).

```js
const url = new URL("cats", "http://www.example.com/animals/dogs");
console.log(url.hostname); // "www.example.com"
console.log(url.pathname); // "/animals/cats"
```

Der Konstruktor löst eine Ausnahme aus, wenn die URL nicht als gültige URL geparst werden kann.
Sie können den obigen Code entweder in einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block aufrufen oder mit der statischen Methode [`canParse()`](/de/docs/Web/API/URL/canParse_static) zunächst prüfen, ob die URL gültig ist:

```js
if (URL.canParse("cats", "http://www.example.com/animals/dogs")) {
  const url = new URL("cats", "http://www.example.com/animals/dogs");
  console.log(url.hostname); // "www.example.com"
  console.log(url.pathname); // "/animals/cats"
} else {
  console.log("Invalid URL");
}
```

Sie können URL-Eigenschaften setzen, um die URL zu erstellen:

```js
url.hash = "tabby";
console.log(url.href); // "http://www.example.com/animals/cats#tabby"
```

URLs werden nach den Regeln in {{RFC(3986)}} kodiert. Zum Beispiel:

```js
url.pathname = "démonstration.html";
console.log(url.href); // "http://www.example.com/d%C3%A9monstration.html"
```

Mit der [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Schnittstelle können Sie den Query-String der URL erstellen und bearbeiten.

Um die Suchparameter aus der URL des aktuellen Fensters abzurufen, können Sie Folgendes tun:

```js
// https://some.site/?id=123
const parsedUrl = new URL(window.location.href);
console.log(parsedUrl.searchParams.get("id")); // "123"
```

Die Methode [`toString()`](/de/docs/Web/API/URL/toString) von `URL` gibt lediglich den Wert der Eigenschaft [`href`](/de/docs/Web/API/URL/href) zurück. Daher können Sie mit dem Konstruktor eine URL direkt normalisieren und kodieren.

```js
const response = await fetch(
  new URL("http://www.example.com/démonstration.html"),
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `URL` in `core-js`](https://core-js.io/docs/features/web-standards/url)
- [URL API](/de/docs/Web/API/URL_API)
- [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
- [`URLSearchParams`](/de/docs/Web/API/URLSearchParams).
