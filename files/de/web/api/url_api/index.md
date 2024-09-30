---
title: URL API
slug: Web/API/URL_API
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{DefaultAPISidebar("URL API")}} {{AvailableInWorkers}}

Die URL API ist ein Bestandteil des URL-Standards, der definiert, was einen gültigen [Uniform Resource Locator](/de/docs/Glossary/URL) ausmacht, sowie die API, die auf URLs zugreift und sie manipuliert. Der URL-Standard definiert auch Konzepte wie Domänen, Hosts und IP-Adressen und versucht zudem, den Legacy-`application/x-www-form-urlencoded` [MIME-Typ](/de/docs/Glossary/MIME_type), der verwendet wird, um Inhalte von Webformularen als eine Reihe von Schlüssel/Wert-Paaren zu übermitteln, auf standardisierte Weise zu beschreiben.

## Konzepte und Nutzung

Der Großteil des URL-Standards ist mit der [Definition einer URL](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL) und deren Struktur und Parsing befasst. Ebenfalls behandelt werden Definitionen verschiedener Begriffe im Zusammenhang mit der Adressierung von Computern in einem Netzwerk, sowie die Algorithmen zum Parsen von IP-Adressen und DOM-Adressen spezifiziert. Für die meisten Entwickler interessanter ist jedoch die API selbst.

### Zugriff auf URL-Komponenten

Das Erstellen eines [`URL`](/de/docs/Web/API/URL)-Objekts für eine gegebene URL analysiert die URL und bietet schnellen Zugriff auf ihre Bestandteile über ihre Eigenschaften.

```js
let addr = new URL("https://developer.mozilla.org/en-US/docs/Web/API/URL_API");
let host = addr.host;
let path = addr.pathname;
```

Das obige Snippet erstellt ein `URL`-Objekt für den Artikel, den Sie gerade lesen, und ruft dann die Eigenschaften [`host`](/de/docs/Web/API/URL/host) und [`pathname`](/de/docs/Web/API/URL/pathname) ab. In diesem Fall sind diese Zeichenfolgen `developer.mozilla.org` bzw. `/de/docs/Web/API/URL_API`.

### Ändern der URL

Die meisten Eigenschaften von `URL` sind veränderbar; Sie können ihnen neue Werte zuweisen, um die von dem Objekt dargestellte URL zu ändern. Zum Beispiel um eine URL zu erstellen und ihren Benutzernamen festzulegen:

```js
let myUsername = "someguy";
let addr = new URL("https://example.com/login");
addr.username = myUsername;
```

Das Festlegen des Wertes von [`username`](/de/docs/Web/API/URL/username) setzt nicht nur den Wert dieser Eigenschaft, sondern aktualisiert die gesamte URL. Nach der Ausführung des obigen Code-Snippets ist der von [`href`](/de/docs/Web/API/URL/href) zurückgegebene Wert `https://someguy@example.com/login`. Dies gilt für alle beschreibbaren Eigenschaften.

### Abfragen

Die [`search`](/de/docs/Web/API/URL/search)-Eigenschaft einer `URL` enthält den Abfragezeichenfolgen-Teil der URL. Wenn die URL zum Beispiel `https://example.com/login?user=someguy&page=news` ist, dann ist der Wert der `search`-Eigenschaft `?user=someguy&page=news`. Sie können auch die Werte einzelner Parameter mit der [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Methode [`get()`](/de/docs/Web/API/URLSearchParams/get) nachschlagen:

```js
let addr = new URL("https://example.com/login?user=someguy&page=news");
try {
  loginUser(addr.searchParams.get("user"));
  gotoPage(addr.searchParams.get("page"));
} catch (err) {
  showErrorMessage(err);
}
```

Im obigen Snippet werden zum Beispiel der Benutzername und die Zielseite aus der Abfrage entnommen und an geeignete Funktionen übergeben, die vom Code der Website verwendet werden, um den Benutzer anzumelden und ihn zu seinem gewünschten Ziel innerhalb der Website zu leiten.

Weitere Funktionen innerhalb von `URLSearchParams` ermöglichen es Ihnen, den Wert von Schlüsseln zu ändern, Schlüssel und ihre Werte hinzuzufügen und zu löschen und sogar die Liste der Parameter zu sortieren.

## Schnittstellen

Die URL API ist eine einfache mit nur wenigen Schnittstellen:

- [`URL`](/de/docs/Web/API/URL)
  - : Kann verwendet werden, um [URLs](/de/docs/Glossary/URL) zu analysieren, zu konstruieren, zu normalisieren und zu kodieren.
- [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)
  - : Definiert Dienstprogramm-Methoden zum Arbeiten mit der Abfragezeichenfolge einer URL.

## Beispiele

Wenn Sie die Parameter in einer URL verarbeiten möchten, könnten Sie dies manuell tun, aber es ist viel einfacher, ein `URL`-Objekt zu erstellen, das dies für Sie übernimmt. Die Funktion `fillTableWithParameters()` nimmt als Eingabe ein [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement)-Objekt, das ein {{HTMLElement("table")}} darstellt. Zeilen werden zur Tabelle hinzugefügt, eine für jeden im Parameter gefundenen Schlüssel, wobei die erste Spalte den Namen des Schlüssels und die zweite Spalte den Wert enthält.

Beachten Sie den Aufruf von [`URLSearchParams.sort()`](/de/docs/Web/API/URLSearchParams/sort), um die Parameterliste vor der Generierung der Tabelle zu sortieren.

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

Eine funktionierende Version dieses Beispiels finden Sie [auf Glitch](https://url-api.glitch.me/). Fügen Sie einfach Parameter zur URL hinzu, wenn Sie die Seite laden, um sie in der Tabelle zu sehen. Versuchen Sie z. B. [`https://url-api.glitch.me?from=mdn&excitement=high&likelihood=inconceivable`](https://url-api.glitch.me?from=mdn&excitement=high&likelihood=inconceivable).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fetch API](/de/docs/Web/API/Fetch_API)
- CSS {{cssxref("&#60;url&#62;")}} Typ
- {{jsxref("encodeURI", "encodeURI()")}}
- {{jsxref("encodeURIComponent", "encodeURIComponent()")}}
