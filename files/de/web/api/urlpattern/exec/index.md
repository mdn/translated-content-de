---
title: "URLPattern: exec() Methode"
short-title: exec()
slug: Web/API/URLPattern/exec
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

Die **`exec()`** Methode der [`URLPattern`](/de/docs/Web/API/URLPattern)-Schnittstelle nimmt eine URL oder ein Objekt von URL-Teilen und gibt entweder ein Objekt zurück, das die Ergebnisse des Abgleichs der URL mit dem Muster enthält, oder `null`, wenn die URL nicht mit dem Muster übereinstimmt.

## Syntax

```js-nolint
exec(input)
exec(url)
exec(url, baseURL)
```

### Parameter

- `input`
  - : Ein Objekt, das die einzelnen URL-Teile bereitstellt.
    Die Objektelemente können `protocol`, `username`, `password`, `hostname`, `port`, `pathname`, `search`, `hash` oder `baseURL` sein.
- `url`
  - : Ein String, der eine absolute oder relative URL definiert.
    Bei einer relativen URL muss auch [`baseURL`](#baseurl) bereitgestellt werden, und zusammen müssen sie sich zu einer absoluten URL auflösen.
    Wenn der Input nicht analysiert werden kann oder eine relative URL ohne Basis-URL bereitgestellt wird, gibt die Methode `false` zurück.
- `baseURL` {{optional_inline}}
  - : Ein String, der die Basis-URL darstellt, die in Fällen verwendet werden soll, in denen [`url`](#url) eine relative URL ist.
    Wenn nicht angegeben, ist der Standardwert `undefined`.
    Wenn bereitgestellt, aber die Basis-URL nicht analysiert werden kann, gibt die Methode `false` zurück.

URL-Teile, die in `url`/`input` nicht angegeben sind, können unter bestimmten Umständen [von einer Basis-URL geerbt werden](#vererbung_von_einer_baseurl).
Nicht angegebene Teile werden als leere Strings behandelt.

### Rückgabewert

Ein {{jsxref("Object")}}, das die übereinstimmenden Elemente und Gruppen definiert, oder `null`, wenn die übergebenen Eingaben nicht mit dem Muster übereinstimmen.

Das Objekt hat die folgenden Eigenschaften:

- `inputs`
  - : Ein Array, das die an die `exec()` Funktion übergebenen Eingaben enthält.
    Dies wird entweder ein übergebenes `input` Objekt, ein absoluter `url` String oder eine relative `url` und eine `baseURL` sein.

- `protocol`, `username`, `password`, `hostname`, `port`, `pathname`, `search` und `hash`
  - : Benannte Eigenschaften für jeden URL-Teil.
    Jede Eigenschaft enthält ein Objekt mit den folgenden Eigenschaften:
    - `input`
      - : Der Teil des Inputs, der der aktuellen URL-Teil-Eigenschaft entspricht (der mit dem Muster übereinstimmen muss).
        Dies könnte der leere String (`""`) sein.
    - `groups`
      - : Ein Objekt mit Eigenschaften für jede Übereinstimmungsgruppe im URL-Teil (falls vorhanden) und den entsprechenden übereinstimmenden Werten in den Eingaben.
        Die Gruppeneigenschaften sind ab 0 für unbenannte Gruppen (wie das Platzsymbol) nummeriert.
        Bei benannten Gruppen ist der Eigenschaftenname der Gruppenname.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Gibt an, dass eine `baseURL` bereitgestellt wird, wenn ein [`input`](#input) Objekt übergeben wird (sie sollte nur mit dem `url` String übergeben werden).

## Beschreibung

Die Methode wird bei einem [`URLPattern`](/de/docs/Web/API/URLPattern) aufgerufen und spezifiziert eine Eingabe-URL als String mit optionaler Basis-URL oder als Objekt mit Eigenschaften für jeden URL-Teil.

Die Methode gibt ein Objekt zurück, das die Ergebnisse des Abgleichs der URL mit dem Muster enthält, oder `null`, wenn die URL nicht mit dem Muster übereinstimmt.
Sie gibt auch `null` zurück, wenn eine relative `url` übergeben wird, aber keine `baseURL` angegeben ist (eine absolute Test-URL kann nicht aufgelöst werden).
Beachten Sie, dass `input.baseURL` immer optional ist, wenn ein `input` Objekt übergeben wird.

### Vererbung von einer BaseURL

URL-Teile, die spezifischer sind als der am wenigsten spezifische Teil, der in der `url` definiert ist, können von `baseURL` geerbt werden (oder von `input.baseURL` für `input`).
Intuitiv bedeutet dies, dass, wenn der `pathname` Teil in der Eingabe angegeben ist, die Teile links davon in einer URL von der Basis-URL geerbt werden können (`protocol`, `hostname` und `port`), während die Teile rechts davon nicht geerbt werden können (`search` und `hash`).
Der `username` und das `password` werden niemals von einer Basis-URL geerbt.

Für weitere Informationen siehe [Vererbung von einer BaseURL](/de/docs/Web/API/URL_Pattern_API#inheritance_from_a_base_url) im API-Überblick.

## Beispiele

Die Beispiele zeigen, wie die `exec()`-Methode verwendet wird, um eine URL mit einem Muster abzugleichen.

### Abgleich einer absoluten URL

Zuerst definieren wir das Muster, das zum Abgleich von URLs verwendet werden soll.
Dieses Muster vergleicht URLs, die entweder das `http` oder `https` Protokoll haben, Subdomains von `.example.com` sind und einen Pfad haben, der `/books/` gefolgt von einem beliebigen Wert ist.

```js
const pattern = new URLPattern("http{s}?://*.example.com/books/:id");
```

Als nächstes testen wir die URL-Zeichenkette `"https://store.example.com/books/123"` gegen dieses Muster und protokollieren dann die Objekte für jede Eigenschaft separat.
Beachten Sie, dass `input` den Input in der URL zeigt, der mit dem Muster übereinstimmt.
In vielen Fällen ist dies der leere String (`""`), da die Eingabe-URL den bestimmten URL-Teil nicht angibt (dies passt zum Muster, da standardmäßig ein Platzhalterabgleich für nicht angegebene URL-Teile verwendet wird).

```js
let match = pattern.exec("https://store.example.com/books/123");

console.log(match.inputs); // ['https://store.example.com/books/123']
console.log(match.protocol); // { input: "https", groups: {} }
console.log(match.username); // { input: "", groups: {"0": ""} }
console.log(match.password); // { input: "", groups: {"0": ""} }
console.log(match.hostname); // { input: "store.example.com", groups: { "0": "store" } }
console.log(match.port); // { input: "", groups: {} }
console.log(match.pathname); // { input: "/books/123", groups: { "id": "123" } }
console.log(match.search); // { input: "", groups: {"0": ""} }
console.log(match.hash); // { input: "", groups: {"0": ""} }
```

Beachten Sie auch, wie das `pathname`-Input `"/books/123"` mit dem Muster `/books/:id` übereinstimmt und `groups` eine benannte Eigenschaft `id` enthält, die den übereinstimmenden Wert in der Eingabe enthält.

### Abgleich einer relativen URL

Dieses Beispiel verwendet das gleiche Muster wie zuvor, um gegen eine Reihe von relativen URLs und ihre entsprechenden Basis-URLs abzugleichen.

```js
const pattern = new URLPattern("http{s}?://*.example.com/books/:id");
```

Der folgende Code entspricht effektiv der gleichen absoluten URL wie im vorherigen Beispiel, jedoch aufgeteilt in einen relativen `url`-String und eine Basis-URL.
Das zurückgegebene Objekt unterscheidet sich nur in den `inputs`:

```js
match = pattern.exec("/books/123", "http://store.example.com"); // returns object
console.log(match.inputs); // ['/books/123', 'https://store.example.com']
```

Die beiden folgenden Beispiele geben beide `null` zurück.
Das erste Beispiel stimmt nicht überein, da die relative URL und die Basis-URL sich nicht zu einer gültigen absoluten URL auflösen.
Das zweite Beispiel stimmt nicht überein, da keine Basis-URL bereitgestellt wird.

```js
pattern.exec("/books/123", "data:text/plain,hello world!"); // returns null
pattern.exec("/books/123"); // returns null
```

### Abgleich mit einem URL-Objekt

Dieses Beispiel verwendet das gleiche Muster wie zuvor, um gegen eine Reihe von URLs abzugleichen, die als strukturierte Objekte definiert sind.

```js
const pattern = new URLPattern("http{s}?://*.example.com/books/:id");
```

Dieser Code testet gegen die gleiche URL, die im vorherigen Beispiel [Abgleich einer absoluten URL](#abgleich_einer_absoluten_url) verwendet wurde.
In diesem Fall wird sie jedoch als strukturiertes Objekt übergeben.
Da es sich um die gleiche URL handelt, ändert sich nur, dass das `inputs`-Eigenschaftsarray das unten übergebene Objekt enthält.

```js
pattern.exec({
  protocol: "https",
  hostname: "store.example.com",
  pathname: "/books/123",
}); // returns object
```

Der folgende Code stimmt ebenfalls überein, aber diesmal wird das `protocol` von `http` verwendet, das von der `baseURL` geerbt wird.
Das zurückgegebene Objekt wäre ähnlich, außer für das `protocol.input`, das `http` wäre, und das `inputs`-Array würde das übergebene Objekt widerspiegeln.

```js
pattern.exec({
  pathname: "/books/123",
  baseURL: "http://store.example.com",
}); // returns object
```

Der folgende Code stimmt nicht überein, da das Protokoll `file` nicht eine der im Muster angegebenen Optionen ist (`http` oder `https`).
Dies gibt `null` zurück.

```js
pattern.exec({
  protocol: "file",
  hostname: "store.example.com",
  pathname: "/books/123",
}); // returns null
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Ein Polyfill von `URLPattern` ist [auf GitHub](https://github.com/kenchris/urlpattern-polyfill) verfügbar.
