---
title: URL
slug: Web/API/URL
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Die **`URL`**-Schnittstelle wird verwendet, um {{glossary("URL", "URLs")}} zu analysieren, zu erstellen, zu normalisieren und zu kodieren. Sie arbeitet, indem sie Eigenschaften bereitstellt, die es ermöglichen, die Komponenten einer URL einfach zu lesen und zu ändern.

Normalerweise erstellen Sie ein neues `URL`-Objekt, indem Sie die URL als Zeichenfolge angeben, wenn Sie dessen Konstruktor aufrufen, oder indem Sie eine relative URL und eine Basis-URL angeben. Sie können dann die analysierten Komponenten der URL leicht lesen oder Änderungen an der URL vornehmen.

## Konstruktor

- {{domxref("URL.URL", "URL()")}}
  - : Erstellt und gibt ein `URL`-Objekt aus einer URL-Zeichenfolge und optionaler Basis-URL-Zeichenfolge zurück. Wirft einen Fehler, wenn die übergebenen Argumente keine gültige URL definieren.

## Instanzeigenschaften

- {{domxref("URL.hash", "hash")}}
  - : Eine Zeichenkette, die ein `'#'` gefolgt von dem Fragmentbezeichner der URL enthält.
- {{domxref("URL.host", "host")}}
  - : Eine Zeichenkette, die die Domäne (also den _hostname_) enthält, gefolgt von (wenn ein Port angegeben wurde) einem `':'` und dem _Port_ der URL.
- {{domxref("URL.hostname", "hostname")}}
  - : Eine Zeichenkette, die die Domäne der URL enthält.
- {{domxref("URL.href", "href")}}
  - : Ein {{Glossary("stringifier")}}, der eine Zeichenkette zurückgibt, die die gesamte URL enthält.
- {{domxref("URL.origin", "origin")}} {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die den Ursprung der URL enthält, das heißt ihr Schema, ihre Domäne und ihren Port.
- {{domxref("URL.password", "password")}}
  - : Eine Zeichenkette, die das vor dem Domainnamen angegebene Passwort enthält.
- {{domxref("URL.pathname", "pathname")}}
  - : Eine Zeichenkette, die mit einem `'/'` beginnt und den Pfad der URL enthält, ohne die Abfragestring oder das Fragment.
- {{domxref("URL.port", "port")}}
  - : Eine Zeichenkette, die die Portnummer der URL enthält.
- {{domxref("URL.protocol", "protocol")}}
  - : Eine Zeichenkette, die das Protokollschema der URL enthält, einschließlich des abschließenden `':'`.
- {{domxref("URL.search", "search")}}
  - : Eine Zeichenkette, die den Parameterstring der URL angibt; wenn Parameter angegeben werden, enthält diese Zeichenkette alle, beginnend mit dem führenden `?`-Zeichen.
- {{domxref("URL.searchParams", "searchParams")}} {{ReadOnlyInline}}
  - : Ein {{domxref("URLSearchParams")}}-Objekt, das verwendet werden kann, um auf die einzelnen Abfrageparameter in `search` zuzugreifen.
- {{domxref("URL.username","username")}}
  - : Eine Zeichenkette, die den vor dem Domainnamen angegebenen Benutzernamen enthält.

## Statische Methoden

- {{domxref("URL.canParse_static", "canParse()")}}
  - : Gibt einen Boolean zurück, der anzeigt, ob eine aus einer URL-Zeichenfolge und optionaler Basis-URL-Zeichenfolge definierte URL analysierbar und gültig ist.
- {{domxref("URL.createObjectURL_static", "createObjectURL()")}}
  - : Gibt eine Zeichenkette zurück, die eine eindeutige Blob-URL enthält, das heißt eine URL mit `blob:` als Schema, gefolgt von einer undurchsichtigen Zeichenkette, die das Objekt im Browser eindeutig identifiziert.
- {{domxref("URL.parse_static", "parse()")}}
  - : Erstellt und gibt ein `URL`-Objekt aus einer URL-Zeichenfolge und optionaler Basis-URL-Zeichenfolge zurück oder gibt `null` zurück, wenn die übergebenen Parameter eine ungültige `URL` definieren.
- {{domxref("URL.revokeObjectURL_static", "revokeObjectURL()")}}
  - : Hebt eine zuvor mit {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}} erstellte Objekt-URL auf.

## Instanzmethoden

- {{domxref("URL.toString", "toString()")}}
  - : Gibt eine Zeichenkette zurück, die die gesamte URL enthält. Es ist ein Synonym für {{domxref("URL.href")}}, obwohl es nicht verwendet werden kann, um den Wert zu ändern.
- {{domxref("URL.toJSON", "toJSON()")}}
  - : Gibt eine Zeichenkette zurück, die die gesamte URL enthält. Es gibt dieselbe Zeichenkette zurück wie die `href`-Eigenschaft.

## Anmerkungen zur Verwendung

Der Konstruktor nimmt einen `url`-Parameter und einen optionalen `base`-Parameter, der als Basis verwendet wird, wenn der `url`-Parameter eine relative URL ist:

```js
const url = new URL("../cats", "http://www.example.com/dogs");
console.log(url.hostname); // "www.example.com"
console.log(url.pathname); // "/cats"
```

Der Konstruktor wirft eine Ausnahme, wenn die URL nicht in eine gültige URL geparst werden kann. Sie können den obigen Code entweder in einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block aufrufen oder die statische Methode {{domxref("URL.canParse_static", "canParse()")}} verwenden, um zuerst zu überprüfen, ob die URL gültig ist:

```js
if (URL.canParse("../cats", "http://www.example.com/dogs")) {
  const url = new URL("../cats", "http://www.example.com/dogs");
  console.log(url.hostname); // "www.example.com"
  console.log(url.pathname); // "/cats"
} else {
  console.log("Invalid URL"); //Ungültige URL
}
```

URL-Eigenschaften können festgelegt werden, um die URL zu konstruieren:

```js
url.hash = "tabby";
console.log(url.href); // "http://www.example.com/cats#tabby"
```

URLs werden gemäß den in {{RFC(3986)}} beschriebenen Regeln kodiert. Zum Beispiel:

```js
url.pathname = "démonstration.html";
console.log(url.href); // "http://www.example.com/d%C3%A9monstration.html"
```

Die {{domxref("URLSearchParams")}}-Schnittstelle kann verwendet werden, um den URL-Abfragestich zu erstellen und zu manipulieren.

Um die Suchparameter aus der URL des aktuellen Fensters zu erhalten, können Sie folgendes tun:

```js
// https://some.site/?id=123
const parsedUrl = new URL(window.location.href);
console.log(parsedUrl.searchParams.get("id")); // "123"
```

Die {{domxref("URL.toString", "toString()")}}-Methode von `URL` gibt einfach den Wert der {{domxref("URL.href", "href")}}-Eigenschaft zurück, sodass der Konstruktor verwendet werden kann, um eine URL direkt zu normalisieren und zu kodieren.

```js
const response = await fetch(
  new URL("http://www.example.com/démonstration.html"),
);
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `URL` in `core-js`](https://github.com/zloirock/core-js#url-and-urlsearchparams)
- [URL API](/de/docs/Web/API/URL_API)
- [Was ist eine URL?](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL)
- {{domxref("URLSearchParams")}}.
