---
title: URL API
slug: Web/API/URL_API
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{DefaultAPISidebar("URL API")}} {{AvailableInWorkers}}

Die URL API ist ein Bestandteil des URL-Standards, der festlegt, was einen gültigen [Uniform Resource Locator](/de/docs/Glossary/URL) ausmacht, sowie die API, die URLs abruft und bearbeitet. Der URL-Standard definiert auch Konzepte wie Domänen, Hosts und IP-Adressen und versucht, den veralteten MIME-Typ `application/x-www-form-urlencoded` zu beschreiben, der verwendet wird, um die Inhalte von Webformularen als ein Satz von Schlüssel-/Wert-Paaren zu übermitteln.

## Konzepte und Verwendung

Der Großteil des URL-Standards wird durch die [Definition einer URL](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL) sowie deren Strukturierung und Parsing eingenommen. Außerdem werden Definitionen verschiedener Begriffe im Zusammenhang mit dem Adressieren von Rechnern in einem Netzwerk behandelt und die Algorithmen zum Parsen von IP-Adressen und DOM-Adressen spezifiziert. Für die meisten Entwickler ist die API selbst interessanter.

### Zugriff auf URL-Komponenten

Das Erstellen eines [`URL`](/de/docs/Web/API/URL)-Objekts für eine gegebene URL parst die URL und ermöglicht den schnellen Zugriff auf ihre Bestandteile durch ihre Eigenschaften.

```js
let addr = new URL("https://developer.mozilla.org/en-US/docs/Web/API/URL_API");
let host = addr.host;
let path = addr.pathname;
```

Der oben stehende Code-Schnipsel erstellt ein `URL`-Objekt für den Artikel, den Sie gerade lesen, und ruft dann die [`host`](/de/docs/Web/API/URL/host) und [`pathname`](/de/docs/Web/API/URL/pathname) Eigenschaften ab. In diesem Fall sind diese Zeichenketten `developer.mozilla.org` und `/de/docs/Web/API/URL_API`.

### Ändern der URL

Die meisten Eigenschaften von `URL` sind veränderbar; Sie können neue Werte zuweisen, um die durch das Objekt dargestellte URL zu ändern. Zum Beispiel, um eine URL zu erstellen und deren Benutzernamen zu setzen:

```js
let myUsername = "someguy";
let addr = new URL("https://example.com/login");
addr.username = myUsername;
```

Das Setzen des Wertes der [`username`](/de/docs/Web/API/URL/username)-Eigenschaft setzt nicht nur den Wert dieser Eigenschaft, sondern aktualisiert die gesamte URL. Nach der Ausführung des obigen Code-Schnipsels ist der von [`href`](/de/docs/Web/API/URL/href) zurückgegebene Wert `https://someguy@example.com/login`. Dies gilt für alle beschreibbaren Eigenschaften.

### Abfragen

Die [`search`](/de/docs/Web/API/URL/search)-Eigenschaft einer `URL` enthält den Abfragezeichenfolgen-Teil der URL. Wenn die URL z.B. `https://example.com/login?user=someguy&page=news` ist, dann ist der Wert der `search`-Eigenschaft `?user=someguy&page=news`. Sie können auch die Werte einzelner Parameter mit der [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) Methode [`get()`](/de/docs/Web/API/URLSearchParams/get) abrufen:

```js
let addr = new URL("https://example.com/login?user=someguy&page=news");
try {
  loginUser(addr.searchParams.get("user"));
  gotoPage(addr.searchParams.get("page"));
} catch (err) {
  showErrorMessage(err);
}
```

Zum Beispiel werden im obigen Schnipsel der Benutzername und die Zielseite aus der Abfrage entnommen und an entsprechende Funktionen übergeben, die vom Code der Seite genutzt werden, um den Benutzer einzuloggen und zu seiner gewünschten Seite innerhalb der Seite zu leiten.

Andere Funktionen innerhalb von `URLSearchParams` ermöglichen es Ihnen, die Werte von Schlüsseln zu ändern, Schlüssel und deren Werte hinzuzufügen oder zu löschen und sogar die Liste der Parameter zu sortieren.

## Schnittstellen

Die URL API ist eine einfache API, die nur ein paar Schnittstellen besitzt:

- [`URL`](/de/docs/Web/API/URL)
  - : Kann verwendet werden, um [URLs](/de/docs/Glossary/URL) zu parsen, zu konstruieren, zu normalisieren und zu kodieren.
- [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)
  - : Definiert Hilfsmethoden zum Arbeiten mit der Abfragezeichenfolge einer URL.

## Beispiele

Wenn Sie die im URL enthaltenen Parameter verarbeiten möchten, könnten Sie dies manuell tun, aber es ist viel einfacher, ein `URL`-Objekt dafür zu verwenden. Die `fillTableWithParameters()`-Funktion unten nimmt als Eingabe ein [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement)-Objekt, das ein {{HTMLElement("table")}} darstellt. Zeilen werden der Tabelle hinzugefügt, eine für jeden im Parameter gefundenen Schlüssel, wobei die erste Spalte den Namen des Schlüssels enthält und die zweite Spalte den Wert.

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

Eine funktionierende Version dieses Beispiels kann [auf Glitch gefunden werden](https://url-api.glitch.me/). Fügen Sie einfach Parameter zur URL hinzu, wenn Sie die Seite laden, um sie in der Tabelle zu sehen. Versuchen Sie zum Beispiel [`https://url-api.glitch.me?from=mdn&excitement=high&likelihood=inconceivable`](https://url-api.glitch.me?from=mdn&excitement=high&likelihood=inconceivable).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fetch API](/de/docs/Web/API/Fetch_API)
- CSS {{cssxref("&lt;url&gt;")}} Typ
- {{jsxref("encodeURI", "encodeURI()")}}
- {{jsxref("encodeURIComponent", "encodeURIComponent()")}}
