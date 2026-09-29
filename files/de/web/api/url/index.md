---
title: URL
slug: Web/API/URL
l10n:
  sourceCommit: 6bb81a788ff71f726e32d16757c99d5c45a7edf9
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Die **`URL`**-Schnittstelle dient zum Parsen, Erstellen, Normalisieren und Kodieren von {{Glossary("URL", "URLs")}}. Sie stellt Eigenschaften bereit, mit denen Sie die Bestandteile einer URL einfach auslesen und ändern können.

Normalerweise erstellen Sie ein neues `URL`-Objekt, indem Sie beim Aufruf des Konstruktors die URL als Zeichenfolge angeben. Alternativ können Sie eine relative URL und eine Basis-URL übergeben. Anschließend können Sie die geparsten Bestandteile der URL auslesen oder die URL ändern.

## Konstruktor

- [`URL()`](/de/docs/Web/API/URL/URL)
  - : Erstellt ein `URL`-Objekt aus einer URL-Zeichenfolge und einer optionalen Basis-URL-Zeichenfolge und gibt es zurück. Löst eine Ausnahme aus, wenn die übergebenen Argumente keine gültige URL definieren.

## Instanzeigenschaften

- [`hash`](/de/docs/Web/API/URL/hash)
  - : Eine Zeichenfolge, die ein `'#'` gefolgt vom Fragmentbezeichner der URL enthält.
- [`host`](/de/docs/Web/API/URL/host)
  - : Eine Zeichenfolge, die die Domain (also den _Hostname_) und, falls ein Port angegeben wurde, ein `':'` gefolgt vom _Port_ der URL enthält.
- [`hostname`](/de/docs/Web/API/URL/hostname)
  - : Eine Zeichenfolge, die die Domain der URL enthält.
- [`href`](/de/docs/Web/API/URL/href)
  - : Ein {{Glossary("stringifier", "Stringifier")}}, der eine Zeichenfolge mit der vollständigen URL zurückgibt.
- [`origin`](/de/docs/Web/API/URL/origin) {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge zurück, die den Ursprung der URL enthält, also ihr Schema, ihre Domain und ihren Port.
- [`password`](/de/docs/Web/API/URL/password)
  - : Eine Zeichenfolge, die das vor dem Domainnamen angegebene Passwort enthält.
- [`pathname`](/de/docs/Web/API/URL/pathname)
  - : Eine Zeichenfolge, die einen führenden `'/'` gefolgt vom Pfad der URL enthält, ohne Query-String oder Fragment.
- [`port`](/de/docs/Web/API/URL/port)
  - : Eine Zeichenfolge, die die Portnummer der URL enthält.
- [`protocol`](/de/docs/Web/API/URL/protocol)
  - : Eine Zeichenfolge, die das Protokollschema der URL einschließlich des abschließenden `':'` enthält.
- [`search`](/de/docs/Web/API/URL/search)
  - : Eine Zeichenfolge mit den URL-Parametern. Wenn Parameter vorhanden sind, enthält sie alle Parameter und beginnt mit dem führenden Zeichen `?`.
- [`searchParams`](/de/docs/Web/API/URL/searchParams) {{ReadOnlyInline}}
  - : Ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt, mit dem Sie auf die einzelnen Query-Parameter in `search` zugreifen können.
- [`username`](/de/docs/Web/API/URL/username)
  - : Eine Zeichenfolge, die den vor dem Domainnamen angegebenen Benutzernamen enthält.

## Statische Methoden

- [`canParse()`](/de/docs/Web/API/URL/canParse_static)
  - : Gibt einen booleschen Wert zurück, der angibt, ob sich aus einer URL-Zeichenfolge und einer optionalen Basis-URL-Zeichenfolge eine gültige URL parsen lässt.
- [`createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static)
  - : Gibt eine Zeichenfolge mit einer eindeutigen Blob-URL zurück. Diese URL hat `blob:` als Schema, gefolgt von einer opaken Zeichenfolge, die das Objekt im Browser eindeutig identifiziert.
- [`parse()`](/de/docs/Web/API/URL/parse_static)
  - : Erstellt ein `URL`-Objekt aus einer URL-Zeichenfolge und einer optionalen Basis-URL-Zeichenfolge und gibt es zurück. Wenn die übergebenen Parameter eine ungültige `URL` definieren, wird `null` zurückgegeben.
- [`revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static)
  - : Widerruft eine zuvor mit [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) erstellte Objekt-URL.

## Instanzmethoden

- [`toString()`](/de/docs/Web/API/URL/toString)
  - : Gibt eine Zeichenfolge mit der vollständigen URL zurück. Die Methode entspricht [`URL.href`](/de/docs/Web/API/URL/href), kann aber nicht zum Ändern des Werts verwendet werden.
- [`toJSON()`](/de/docs/Web/API/URL/toJSON)
  - : Gibt eine Zeichenfolge zurück, die das `URL`-Objekt darstellt und denselben Wert wie [`URL.toString()`](/de/docs/Web/API/URL/toString) hat. Wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen.

## Hinweise zur Verwendung

Der Konstruktor erwartet einen `url`-Parameter und optional einen `base`-Parameter, der als Basis dient, wenn `url` eine relative URL ist.

Beachten Sie, dass „dogs“ im folgenden Beispiel das Dateinamensegment ist (da kein abschließender Schrägstrich vorhanden ist). Die relative URL „cats“ wird relativ zum _Verzeichnis_-Teil der Basis-URL interpretiert, also zu `http://www.example.com/animals/`. Weitere Informationen finden Sie unter [Relative Verweise auf eine URL auflösen](/de/docs/Web/API/URL_API/Resolving_relative_references).

```js
const url = new URL("cats", "http://www.example.com/animals/dogs");
console.log(url.hostname); // "www.example.com"
console.log(url.pathname); // "/animals/cats"
```

Der Konstruktor löst eine Ausnahme aus, wenn sich die URL nicht als gültige URL parsen lässt.
Sie können den obigen Code entweder in einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block aufrufen oder zunächst mit der statischen Methode [`canParse()`](/de/docs/Web/API/URL/canParse_static) prüfen, ob die URL gültig ist:

```js
if (URL.canParse("cats", "http://www.example.com/animals/dogs")) {
  const url = new URL("cats", "http://www.example.com/animals/dogs");
  console.log(url.hostname); // "www.example.com"
  console.log(url.pathname); // "/animals/cats"
} else {
  console.log("Invalid URL");
}
```

Sie können die Eigenschaften von `URL` setzen, um die URL zusammenzusetzen:

```js
url.hash = "tabby";
console.log(url.href); // "http://www.example.com/animals/cats#tabby"
```

URLs werden nach den Regeln in {{RFC(3986)}} kodiert. Zum Beispiel:

```js
url.pathname = "démonstration.html";
console.log(url.href); // "http://www.example.com/d%C3%A9monstration.html"
```

Mit der [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Schnittstelle können Sie den Query-String einer URL erstellen und bearbeiten.

So erhalten Sie die Query-Parameter aus der URL des aktuellen Fensters:

```js
// https://some.site/?id=123
const parsedUrl = new URL(window.location.href);
console.log(parsedUrl.searchParams.get("id")); // "123"
```

Die Methode [`toString()`](/de/docs/Web/API/URL/toString) von `URL` gibt lediglich den Wert der Eigenschaft [`href`](/de/docs/Web/API/URL/href) zurück. Daher können Sie den Konstruktor verwenden, um eine URL direkt zu normalisieren und zu kodieren.

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

- [Polyfill für `URL` in `core-js`](https://github.com/zloirock/core-js#url-and-urlsearchparams)
- [URL API](/de/docs/Web/API/URL_API)
- [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
- [`URLSearchParams`](/de/docs/Web/API/URLSearchParams).
