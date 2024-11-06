---
title: URL API
slug: Web/API/URL_API
l10n:
  sourceCommit: 6d311a5f07c97dbcd7bb9a6d49c2fe820a228659
---

{{DefaultAPISidebar("URL API")}} {{AvailableInWorkers}}

Die URL-API ist ein Bestandteil des URL-Standards, der definiert, was eine gültige {{Glossary("URL", "Uniform Resource Locator")}} ausmacht und die API, die auf URLs zugreift und diese manipuliert. Der URL-Standard definiert auch Konzepte wie Domains, Hosts und IP-Adressen und versucht außerdem, den veralteten `application/x-www-form-urlencoded` {{Glossary("MIME_type", "MIME-Typ")}} zu beschreiben, der verwendet wird, um die Inhalte von Webformularen als Menge von Schlüssel/Wert-Paaren zu übermitteln.

## Konzepte und Nutzung

Der Großteil des URL-Standards befasst sich mit der [Definition einer URL](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL) und wie diese strukturiert und geparst wird. Ebenfalls abgedeckt sind Definitionen verschiedener Begriffe in Bezug auf die Adressierung von Computern in einem Netzwerk, und die Algorithmen zum Parsen von IP-Adressen und DOM-Adressen sind spezifiziert. Für die meisten Entwickler interessanter ist die API selbst.

### Zugriff auf URL-Komponenten

Das Erstellen eines [`URL`](/de/docs/Web/API/URL)-Objekts für eine gegebene URL parst die URL und ermöglicht den schnellen Zugriff auf ihre Bestandteile durch ihre Eigenschaften.

```js
let addr = new URL("https://developer.mozilla.org/en-US/docs/Web/API/URL_API");
let host = addr.host;
let path = addr.pathname;
```

Der obige Ausschnitt erstellt ein `URL`-Objekt für den Artikel, den Sie gerade lesen, und ruft dann die [`host`](/de/docs/Web/API/URL/host)- und [`pathname`](/de/docs/Web/API/URL/pathname)-Eigenschaften ab. In diesem Fall sind diese Zeichenfolgen `developer.mozilla.org` und `/de/docs/Web/API/URL_API`.

### Ändern der URL

Die meisten Eigenschaften von `URL` sind veränderbar; Sie können ihnen neue Werte zuweisen, um die von dem Objekt dargestellte URL zu ändern. Zum Beispiel, um eine URL zu erstellen und ihren Benutzernamen zu setzen:

```js
let myUsername = "some-guy";
let addr = new URL("https://example.com/login");
addr.username = myUsername;
```

Das Setzen des Wertes der [`username`](/de/docs/Web/API/URL/username)-Eigenschaft aktualisiert nicht nur den Wert dieser Eigenschaft, sondern auch die gesamte URL. Nach der Ausführung des obigen Codeschnipsels ist der von [`href`](/de/docs/Web/API/URL/href) zurückgegebene Wert `https://some-guy@example.com/login`. Dies gilt für alle veränderbaren Eigenschaften.

### Abfragen

Die [`search`](/de/docs/Web/API/URL/search)-Eigenschaft einer `URL` enthält den Abfragezeichenfolgen-Teil der URL. Wenn die URL beispielsweise `https://example.com/login?user=some-guy&page=news` lautet, dann ist der Wert der `search`-Eigenschaft `?user=some-guy&page=news`. Sie können auch die Werte einzelner Parameter mit der Methode [`get()`](/de/docs/Web/API/URLSearchParams/get) des [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekts abrufen:

```js
let addr = new URL("https://example.com/login?user=some-guy&page=news");
try {
  loginUser(addr.searchParams.get("user"));
  gotoPage(addr.searchParams.get("page"));
} catch (err) {
  showErrorMessage(err);
}
```

In dem obigen Ausschnitt werden beispielsweise der Benutzername und die Zielseite aus der Abfrage entnommen und an entsprechende Funktionen übergeben, die vom Code der Website verwendet werden, um den Benutzer einzuloggen und zu seiner gewünschten Zielseite innerhalb der Website weiterzuleiten.

Andere Funktionen innerhalb von `URLSearchParams` ermöglichen es Ihnen, die Werte von Schlüsseln zu ändern, Schlüssel und ihre Werte hinzuzufügen und zu löschen und die Liste der Parameter sogar zu sortieren.

## Schnittstellen

Die URL-API ist eine einfache API mit nur wenigen Schnittstellen:

- [`URL`](/de/docs/Web/API/URL)
  - : Kann verwendet werden, um {{Glossary("URL", "URLs")}} zu parsen, zu konstruieren, zu normalisieren und zu kodieren.
- [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)
  - : Definiert Hilfsmethoden zum Arbeiten mit der Abfragezeichenfolge einer URL.

## Beispiele

Wenn Sie die in einer URL enthaltenen Parameter verarbeiten möchten, könnten Sie dies manuell tun, aber es ist viel einfacher, ein `URL`-Objekt zu erstellen, das dies für Sie erledigt. Die folgende Funktion `fillTableWithParameters()` nimmt als Eingabe ein [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement)-Objekt entgegen, das ein {{HTMLElement("table")}} darstellt. Der Tabelle werden Zeilen hinzugefügt, eine für jeden in den Parametern gefundenen Schlüssel, wobei die erste Spalte den Namen des Schlüssels enthält und die zweite Spalte den Wert enthält.

Beachten Sie den Aufruf von [`URLSearchParams.sort()`](/de/docs/Web/API/URLSearchParams/sort), um die Parameterliste vor der Erzeugung der Tabelle zu sortieren.

```js
function fillTableWithParameters(tbl) {
  const url = new URL(document.location.href);
  url.searchParams.sort();
  const keys = url.searchParams.keys();

  for (const key of keys) {
    const val = url.searchParams.get(key);
    const row = document.createElement("tr");
    const cell1 = document.createElement("td");
    cell1.innerText = key;
    row.appendChild(cell1);
    const cell2 = document.createElement("td");
    cell2.innerText = val;
    row.appendChild(cell2);
    tbl.appendChild(row);
  }
}
```

Eine funktionierende Version dieses Beispiels finden Sie [auf Glitch](https://url-api.glitch.me/). Fügen Sie der URL beim Laden der Seite einfach Parameter hinzu, um diese in der Tabelle anzuzeigen. Versuchen Sie beispielsweise [`https://url-api.glitch.me?from=mdn&excitement=high&likelihood=inconceivable`](https://url-api.glitch.me?from=mdn&excitement=high&likelihood=inconceivable).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fetch API](/de/docs/Web/API/Fetch_API)
- CSS {{cssxref("url_value", "&lt;url&gt;")}} type
- {{jsxref("encodeURI", "encodeURI()")}}
- {{jsxref("encodeURIComponent", "encodeURIComponent()")}}
