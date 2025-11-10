---
title: URL API
slug: Web/API/URL_API
l10n:
  sourceCommit: 11c356e4d1021b204c0d3e4bc41a571877215367
---

{{DefaultAPISidebar("URL API")}} {{AvailableInWorkers}}

Die URL-API ist ein Bestandteil des URL-Standards, der definiert, was einen gültigen {{Glossary("URL", "Uniform Resource Locator")}} ausmacht, sowie die API, die den Zugriff auf URLs und deren Manipulation ermöglicht. Der URL-Standard definiert zudem Konzepte wie Domains, Hosts und IP-Adressen und versucht auch, den veralteten `application/x-www-form-urlencoded` {{Glossary("MIME_type", "MIME-Typ")}}, der zur Übermittlung von Webformular-Inhalten als Satz von Schlüssel/Wert-Paaren verwendet wird, standardisiert zu beschreiben.

## Konzepte und Verwendung

Der Großteil des URL-Standards beschäftigt sich mit der [Definition einer URL](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) und ihrer Strukturierung und Analyse. Ebenfalls behandelt werden Definitionen verschiedener Begriffe, die sich auf die Adressierung von Computern in einem Netzwerk beziehen, sowie Algorithmen zur Analyse von IP-Adressen und DOM-Adressen. Für die meisten Entwickler ist die API selbst von größerem Interesse.

### Zugriff auf URL-Komponenten

Das Erstellen eines [`URL`](/de/docs/Web/API/URL)-Objekts für eine gegebene URL analysiert die URL und ermöglicht den schnellen Zugriff auf ihre Bestandteile über ihre Eigenschaften.

```js
let addr = new URL("https://developer.mozilla.org/en-US/docs/Web/API/URL_API");
let host = addr.host;
let path = addr.pathname;
```

Das obige Snippet erstellt ein `URL`-Objekt für den Artikel, den Sie gerade lesen, und ruft dann die Eigenschaften [`host`](/de/docs/Web/API/URL/host) und [`pathname`](/de/docs/Web/API/URL/pathname) ab. In diesem Fall sind diese Zeichenfolgen `developer.mozilla.org` und `/de/docs/Web/API/URL_API`.

### Ändern der URL

Die meisten Eigenschaften von `URL` sind veränderbar; Sie können ihnen neue Werte zuweisen, um die von dem Objekt dargestellte URL zu ändern. Zum Beispiel, um eine URL zu erstellen und ihren Benutzernamen zu setzen:

```js
let myUsername = "some-guy";
let addr = new URL("https://example.com/login");
addr.username = myUsername;
```

Das Setzen des Wertes von [`username`](/de/docs/Web/API/URL/username) setzt nicht nur den Wert dieser Eigenschaft, sondern aktualisiert die gesamte URL. Nach der Ausführung des obigen Code-Snippets ist der von [`href`](/de/docs/Web/API/URL/href) zurückgegebene Wert `https://some-guy@example.com/login`. Dies gilt für alle schreibbaren Eigenschaften.

### Abfragen

Die [`search`](/de/docs/Web/API/URL/search)-Eigenschaft einer `URL` enthält den Abfragezeichenfolgenabschnitt der URL. Wenn die URL beispielsweise `https://example.com/login?user=some-guy&page=news` ist, dann ist der Wert der `search`-Eigenschaft `?user=some-guy&page=news`. Sie können auch die Werte einzelner Parameter mit der [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Methode [`get()`](/de/docs/Web/API/URLSearchParams/get) nachschlagen:

```js
let addr = new URL("https://example.com/login?user=some-guy&page=news");
try {
  loginUser(addr.searchParams.get("user"));
  gotoPage(addr.searchParams.get("page"));
} catch (err) {
  showErrorMessage(err);
}
```

Im obigen Snippet werden beispielsweise der Benutzername und die Zielseite aus der Abfrage entnommen und an entsprechende Funktionen übergeben, die vom Code der Seite verwendet werden, um sich anzumelden und den Benutzer zu seinem gewünschten Ziel innerhalb der Seite zu leiten.

Andere Funktionen innerhalb von `URLSearchParams` ermöglichen es Ihnen, den Wert von Schlüsseln zu ändern, Schlüssel und ihre Werte hinzuzufügen und zu löschen sowie die Liste der Parameter zu sortieren.

## Schnittstellen

Die URL-API ist eine einfache, mit nur ein paar Schnittstellen:

- [`URL`](/de/docs/Web/API/URL)
  - : Kann verwendet werden, um {{Glossary("URL", "URLs")}} zu analysieren, zu konstruieren, zu normalisieren und zu kodieren.
- [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)
  - : Definiert Hilfsmethoden zum Arbeiten mit der Abfragezeichenfolge einer URL.

## Beispiele

### URL-Parameter mit der URL-API analysieren

Es wäre möglich, URL-Parameter zu verarbeiten, indem man eine URL als Zeichenfolge analysiert, sie auf bestimmte Zeichen aufteilt oder reguläre Ausdrücke verwendet, aber es ist viel einfacher, ein neues `URL`-Objekt dafür zu erstellen. Das folgende Beispiel erhält die Dokument-URL von [`document.location.href`](/de/docs/Web/API/Document/location), sortiert die Parameter mit [`URLSearchParams.sort()`](/de/docs/Web/API/URLSearchParams/sort) und extrahiert die Schlüssel mit `URLSearchParams.keys`.

Für jeden Schlüssel in der Dokument-URL fügen wir einer {{HTMLElement("table")}}-Element Zeilen hinzu, eine für jeden in den Parametern gefundenen Schlüssel, wobei die erste Spalte den Namen des Schlüssels und die zweite Spalte den Wert enthält:

```js
const table = document.querySelector(".param-table");

const url = new URL(document.location.href);
url.searchParams.sort();
const keys = url.searchParams.keys();

for (let key of keys) {
  let val = url.searchParams.get(key);
  let row = document.createElement("tr");
  let cell = document.createElement("td");
  cell.innerText = key;
  row.appendChild(cell);
  cell = document.createElement("td");
  cell.innerText = val;
  row.appendChild(cell);
  table.appendChild(row);
}
```

Sie können eine [Live-Version dieses Beispiels ausprobieren](https://mdn.github.io/dom-examples/url-params/) und [den vollständigen Quellcode auf GitHub ansehen](https://github.com/mdn/dom-examples/tree/main/url-params).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fetch API](/de/docs/Web/API/Fetch_API)
- CSS {{cssxref("url_value", "&lt;url&gt;")}} Typ
- {{jsxref("encodeURI", "encodeURI()")}}
- {{jsxref("encodeURIComponent", "encodeURIComponent()")}}
