---
title: URL API
slug: Web/API/URL_API
l10n:
  sourceCommit: 30bf998d2d87c97c2865d713ad5afc9c476264a0
---

{{DefaultAPISidebar("URL API")}} {{AvailableInWorkers}}

Die URL-API ist ein Bestandteil des URL-Standards, der definiert, was ein gültiger {{Glossary("URL", "Uniform Resource Locator")}} ist und die API, die auf URLs zugreift und sie bearbeitet. Der URL-Standard definiert auch Konzepte wie Domains, Hosts und IP-Adressen und versucht zudem, auf standardisierte Weise den veralteten `application/x-www-form-urlencoded` {{Glossary("MIME_type", "MIME-Typ")}} zu beschreiben, der verwendet wird, um die Inhalte von Webformularen als Satz von Schlüssel/Wert-Paaren einzureichen.

## Konzepte und Nutzung

Der Großteil des URL-Standards wird von der [Definition einer URL](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) und ihrer Struktur sowie dem Parser eingenommen. Ebenfalls abgedeckt sind die Definitionen verschiedener Begriffe im Zusammenhang mit der Adressierung von Computern in einem Netzwerk und die Algorithmen zum Parsen von IP-Adressen und DOM-Adressen. Für die meisten Entwickler ist jedoch die API selbst von Interesse.

### Zugriff auf URL-Komponenten

Das Erstellen eines [`URL`](/de/docs/Web/API/URL)-Objekts für eine gegebene URL analysiert die URL und bietet schnellen Zugriff auf ihre Bestandteile über ihre Eigenschaften.

```js
let addr = new URL("https://developer.mozilla.org/en-US/docs/Web/API/URL_API");
let host = addr.host;
let path = addr.pathname;
```

Der obige Ausschnitt erstellt ein `URL`-Objekt für den Artikel, den Sie gerade lesen, und ruft dann die Eigenschaften [`host`](/de/docs/Web/API/URL/host) und [`pathname`](/de/docs/Web/API/URL/pathname) ab. In diesem Fall sind diese Zeichenfolgen `developer.mozilla.org` beziehungsweise `/de/docs/Web/API/URL_API`.

### Änderung der URL

Die meisten Eigenschaften von `URL` sind veränderbar; Sie können neue Werte in sie schreiben, um die von dem Objekt repräsentierte URL zu ändern. Beispielsweise, um eine URL zu erstellen und deren Benutzername festzulegen:

```js
let myUsername = "some-guy";
let addr = new URL("https://example.com/login");
addr.username = myUsername;
```

Das Setzen des Wertes von [`username`](/de/docs/Web/API/URL/username) legt nicht nur den Wert dieser Eigenschaft fest, sondern es aktualisiert die gesamte URL. Nach der Ausführung des obigen Codebeispiels ist der Wert, der von [`href`](/de/docs/Web/API/URL/href) zurückgegeben wird, `https://some-guy@example.com/login`. Dies gilt für alle beschreibbaren Eigenschaften.

### Abfragen

Die [`search`](/de/docs/Web/API/URL/search)-Eigenschaft einer `URL` enthält den Abfragezeichenfolgenabschnitt der URL. Zum Beispiel, wenn die URL `https://example.com/login?user=some-guy&page=news` lautet, dann ist der Wert der `search`-Eigenschaft `?user=some-guy&page=news`. Sie können die Werte einzelner Parameter auch mit der [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objektmethode [`get()`](/de/docs/Web/API/URLSearchParams/get) abrufen:

```js
let addr = new URL("https://example.com/login?user=some-guy&page=news");
try {
  loginUser(addr.searchParams.get("user"));
  gotoPage(addr.searchParams.get("page"));
} catch (err) {
  showErrorMessage(err);
}
```

Zum Beispiel werden im obigen Ausschnitt der Benutzername und die Zielseite aus der Abfrage entnommen und an entsprechende Funktionen übergeben, die vom Code der Seite verwendet werden, um sich anzumelden und den Benutzer innerhalb der Seite zu seinem gewünschten Ziel zu routen.

Andere Funktionen innerhalb von `URLSearchParams` ermöglichen es, den Wert von Schlüsseln zu ändern, Schlüssel und ihre Werte hinzuzufügen und zu löschen und sogar die Liste der Parameter zu sortieren.

## Schnittstellen

Die URL-API ist eine einfache, mit nur wenigen Schnittstellen:

- [`URL`](/de/docs/Web/API/URL)
  - : Kann verwendet werden, um {{Glossary("URL", "URLs")}} zu analysieren, zu konstruieren, zu normalisieren und zu kodieren.
- [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)
  - : Definiert Hilfsmethoden zum Arbeiten mit der Abfragezeichenfolge einer URL.

## Beispiele

Wenn Sie die in einer URL enthaltenen Parameter verarbeiten möchten, könnten Sie dies manuell tun, aber es ist viel einfacher, ein `URL`-Objekt zu erstellen, das dies für Sie erledigt. Die folgende Funktion `fillTableWithParameters()` nimmt als Eingabe ein `HTMLTableElement`-Objekt, das ein {{HTMLElement("table")}} darstellt. Zeilen werden der Tabelle hinzugefügt, eine für jeden gefundenen Schlüssel in den Parametern, wobei die erste Spalte den Namen des Schlüssels und die zweite Spalte den Wert enthält.

Beachten Sie den Aufruf von [`URLSearchParams.sort()`](/de/docs/Web/API/URLSearchParams/sort), um die Parameterliste vor der Tabellenerstellung zu sortieren.

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

Eine funktionierende Version dieses Beispiels finden Sie [auf Glitch](https://url-api.glitch.me/). Fügen Sie einfach Parameter zur URL hinzu, wenn Sie die Seite laden, um sie in der Tabelle zu sehen. Versuchen Sie zum Beispiel [`https://url-api.glitch.me/?from=mdn&excitement=high&likelihood=inconceivable`](https://url-api.glitch.me/?from=mdn&excitement=high&likelihood=inconceivable).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fetch API](/de/docs/Web/API/Fetch_API)
- CSS {{cssxref("url_value", "&lt;url&gt;")}} Typ
- {{jsxref("encodeURI", "encodeURI()")}}
- {{jsxref("encodeURIComponent", "encodeURIComponent()")}}
