---
title: APIs von Drittanbietern
slug: Learn_web_development/Extensions/Client-side_APIs/Third_party_APIs
l10n:
  sourceCommit: d93983dfe60b65633f67fffe04676c241ff92960
---

{{PreviousMenu("Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}

Die bisher behandelten APIs sind in den Browser integriert, aber nicht alle APIs sind es. Viele große Websites und Dienste wie Google Maps, Twitter, Facebook, PayPal usw. stellen APIs bereit, die Entwicklerinnen und Entwicklern ermöglichen, ihre Daten (z. B. die Anzeige Ihres Twitter-Streams in Ihrem Blog) oder Dienste (z. B. die Verwendung des Facebook-Logins zum Anmelden Ihrer Benutzerinnen und Benutzer) zu nutzen. Dieser Artikel betrachtet den Unterschied zwischen Browser-APIs und APIs von Drittanbietern und zeigt einige typische Anwendungen der letzteren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere mit den <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">Grundlagen von JavaScript-Objekten</a> und zentralen API-Themen wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Skripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Die Konzepte hinter APIs von Drittanbietern und zugehörigen Mustern wie API-Schlüsseln.</li>
          <li>Verwendung einer Karten-API eines Drittanbieters.</li>
          <li>Verwendung einer RESTful API.</li>
          <li>Verwendung von Googles YouTube-APIs.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was sind APIs von Drittanbietern?

APIs von Drittanbietern sind APIs, die von Dritten – im Allgemeinen Unternehmen wie Facebook, Twitter oder Google – bereitgestellt werden, damit Sie über JavaScript auf deren Funktionalität zugreifen und sie auf Ihrer Website verwenden können. Eines der offensichtlichsten Beispiele ist die Verwendung von Karten-APIs, um benutzerdefinierte Karten auf Ihren Seiten anzuzeigen.

Sehen wir uns ein [einfaches Mapquest-API-Beispiel](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/mapquest) an und verwenden wir es, um zu veranschaulichen, wie sich APIs von Drittanbietern von Browser-APIs unterscheiden.

### Sie befinden sich auf Servern von Drittanbietern

Browser-APIs sind in den Browser integriert – Sie können sofort über JavaScript auf sie zugreifen. Auf die Web Audio API, die wir [im einführenden Artikel](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction#how_do_apis_work) gesehen haben, wird beispielsweise über das native Objekt [`AudioContext`](/de/docs/Web/API/AudioContext) zugegriffen. Zum Beispiel:

```js
const audioCtx = new AudioContext();
// …
const audioElement = document.querySelector("audio");
// …
const audioSource = audioCtx.createMediaElementSource(audioElement);
// etc.
```

APIs von Drittanbietern befinden sich dagegen auf Servern von Drittanbietern. Um von JavaScript aus auf sie zuzugreifen, müssen Sie zuerst eine Verbindung mit der API-Funktionalität herstellen und sie auf Ihrer Seite verfügbar machen. Dazu wird typischerweise zunächst über ein {{htmlelement("script")}}-Element eine JavaScript-Bibliothek eingebunden, die auf dem Server verfügbar ist, wie in unserem Mapquest-Beispiel zu sehen:

```html
<script
  src="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.js"
  defer></script>
<link
  rel="stylesheet"
  href="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.css" />
```

Anschließend können Sie die in dieser Bibliothek verfügbaren Objekte verwenden. Zum Beispiel:

```js
const map = L.mapquest.map("map", {
  center: [53.480759, -2.242631],
  layers: L.mapquest.tileLayer("map"),
  zoom: 12,
});
```

Hier erstellen wir eine Variable zum Speichern der Karteninformationen und erstellen dann mithilfe der Methode `mapquest.map()` eine neue Karte. Diese erhält als Parameter die ID eines {{htmlelement("div")}}-Elements, in dem Sie die Karte anzeigen möchten (`'map'`), sowie ein Optionsobjekt mit den Details der jeweiligen anzuzeigenden Karte. In diesem Fall geben wir die Koordinaten des Kartenmittelpunkts, eine anzuzeigende Kartenebene des Typs `map` (erstellt mithilfe der Methode `mapquest.tileLayer()`) und die Standard-Zoomstufe an.

Dies sind alle Informationen, die die Mapquest API benötigt, um eine einfache Karte darzustellen. Der Server, zu dem Sie eine Verbindung herstellen, übernimmt alle komplizierten Aufgaben, etwa die Anzeige der richtigen Kartenkacheln für den dargestellten Bereich usw.

> [!NOTE]
> Einige APIs handhaben den Zugriff auf ihre Funktionalität etwas anders und verlangen, dass Entwicklerinnen und Entwickler eine HTTP-Anfrage an ein bestimmtes URL-Muster stellen, um Daten abzurufen. Diese werden als [RESTful APIs bezeichnet – wir zeigen später ein Beispiel](#a_restful_api_%e2%80%94_nytimes).

### Sie erfordern normalerweise API-Schlüssel

Die Sicherheit von Browser-APIs wird in der Regel durch Berechtigungsabfragen gehandhabt, wie [in unserem ersten Artikel](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction#they_have_additional_security_mechanisms_where_appropriate) erläutert. Ihr Zweck besteht darin, dass Benutzerinnen und Benutzer wissen, was auf den Websites geschieht, die sie besuchen, und seltener Opfer von Personen werden, die eine API böswillig einsetzen.

APIs von Drittanbietern haben ein etwas anderes Berechtigungssystem – sie verwenden meist Entwicklerschlüssel, um Entwicklerinnen und Entwicklern Zugriff auf die API-Funktionalität zu gewähren. Dies dient eher dem Schutz des API-Anbieters als dem der Benutzerinnen und Benutzer.

Im Mapquest-API-Beispiel finden Sie eine Zeile ähnlich der folgenden:

```js
L.mapquest.key = "YOUR-API-KEY-HERE";
```

Diese Zeile gibt einen API- oder Entwicklerschlüssel an, der in Ihrer Anwendung verwendet werden soll – die Entwicklerin oder der Entwickler der Anwendung muss einen Schlüssel beantragen und ihn dann in den Code aufnehmen, um auf die Funktionalität der API zugreifen zu dürfen. In unserem Beispiel haben wir lediglich einen Platzhalter bereitgestellt.

> [!NOTE]
> Wenn Sie eigene Beispiele erstellen, verwenden Sie Ihren eigenen API-Schlüssel anstelle eines Platzhalters.

Bei anderen APIs müssen Sie den Schlüssel möglicherweise auf eine etwas andere Weise einbinden, aber das Muster ist bei den meisten relativ ähnlich.

Die Anforderung eines Schlüssels ermöglicht es dem API-Anbieter, die Benutzerinnen und Benutzer der API für ihre Handlungen zur Verantwortung zu ziehen. Wenn sich die Entwicklerin oder der Entwickler für einen Schlüssel registriert hat, ist sie oder er dem API-Anbieter bekannt, und es können Maßnahmen ergriffen werden, wenn die API böswillig verwendet wird, etwa um den Standort von Personen zu verfolgen oder die API mit einer großen Anzahl von Anfragen zu überlasten, damit sie nicht mehr funktioniert. Die einfachste Maßnahme wäre, die API-Berechtigungen zu widerrufen.

## Erweiterung des Mapquest-Beispiels

Fügen wir dem Mapquest-Beispiel weitere Funktionalität hinzu, um die Verwendung einiger anderer API-Funktionen zu zeigen.

1. Erstellen Sie zunächst in einem neuen Verzeichnis eine Kopie der [Mapquest-Starterdatei](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/mapquest/start/index.html). Wenn Sie das [Beispiel-Repository](https://github.com/mdn/learning-area) bereits geklont haben, besitzen Sie bereits eine Kopie dieser Datei, die Sie im Verzeichnis _javascript/apis/third-party-apis/mapquest/start_ finden.
2. Als Nächstes müssen Sie die [Mapquest-Entwicklerwebsite](https://developer.mapquest.com/) besuchen, ein Konto erstellen und anschließend einen Entwicklerschlüssel für Ihr Beispiel erstellen. Zum Zeitpunkt der Erstellung dieses Artikels wurde er auf der Website als „consumer key“ bezeichnet, und der Schlüsselerstellungsprozess fragte außerdem nach einer optionalen „callback URL“. Sie müssen hier keine URL eingeben: Lassen Sie das Feld einfach leer.
3. Öffnen Sie Ihre Starterdatei und ersetzen Sie den API-Schlüssel-Platzhalter durch Ihren Schlüssel.

### Ändern des Kartentyps

Es gibt verschiedene Kartentypen, die mit der Mapquest API angezeigt werden können. Suchen Sie dazu die folgende Zeile:

```js-nolint
layers: L.mapquest.tileLayer("map"),
```

Versuchen Sie, `'map'` in `'hybrid'` zu ändern, um eine Karte im Hybridstil anzuzeigen. Probieren Sie auch andere Werte aus. Auf der [Referenzseite zu `tileLayer`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-tile-layer/) finden Sie die verschiedenen verfügbaren Optionen sowie viele weitere Informationen.

### Hinzufügen verschiedener Steuerelemente

Die Karte verfügt über eine Reihe verschiedener verfügbarer Steuerelemente; standardmäßig wird nur ein Zoom-Steuerelement angezeigt. Sie können die verfügbaren Steuerelemente mithilfe der Methode `map.addControl()` erweitern; fügen Sie dies zu Ihrem Code hinzu:

```js
map.addControl(L.mapquest.control());
```

Die Methode [`mapquest.control()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-control/) erstellt lediglich einen einfachen, funktionsreichen Satz von Steuerelementen, der standardmäßig in der oberen rechten Ecke platziert wird. Sie können die Position anpassen, indem Sie als Parameter für das Steuerelement ein Optionsobjekt mit einer Eigenschaft `position` angeben, deren Wert ein String ist, der eine Position für das Steuerelement festlegt. Versuchen Sie beispielsweise Folgendes:

```js
map.addControl(L.mapquest.control({ position: "bottomright" }));
```

Es sind weitere Arten von Steuerelementen verfügbar, zum Beispiel [`mapquest.searchControl()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-search-control/) und [`mapquest.satelliteControl()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-satellite-control/), und einige davon sind recht komplex und leistungsstark. Probieren Sie sie aus und sehen Sie, was Sie erstellen können.

### Hinzufügen einer benutzerdefinierten Markierung

Das Hinzufügen einer Markierung (eines Symbols) an einem bestimmten Punkt auf der Karte ist einfach – verwenden Sie dazu einfach die Methode [`L.marker()`](https://leafletjs.com/reference.html#marker), die offenbar in der zugehörigen Leaflet.js-Dokumentation beschrieben wird. Fügen Sie den folgenden Code zu Ihrem Beispiel hinzu, ebenfalls innerhalb von `window.onload`:

```js
L.marker([53.480759, -2.242631], {
  icon: L.mapquest.icons.marker({
    primaryColor: "#22407F",
    secondaryColor: "#3B5998",
    shadow: true,
    size: "md",
    symbol: "A",
  }),
})
  .bindPopup("This is Manchester!")
  .addTo(map);
```

Wie Sie sehen können, benötigt dies in seiner einfachsten Form zwei Parameter: ein Array mit den Koordinaten, an denen die Markierung angezeigt werden soll, sowie ein Optionsobjekt mit einer Eigenschaft `icon`, die das an diesem Punkt anzuzeigende Symbol definiert.

Das Symbol wird mithilfe einer Methode [`mapquest.icons.marker()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-icons/) definiert, die, wie Sie sehen können, Informationen wie Farbe und Größe der Markierung enthält.

An das Ende des ersten Methodenaufrufs hängen wir `.bindPopup('This is Manchester!')` an, was Inhalte definiert, die angezeigt werden, wenn auf die Markierung geklickt wird.

Schließlich hängen wir `.addTo(map)` an das Ende der Kette an, um die Markierung tatsächlich zur Karte hinzuzufügen.

Probieren Sie die anderen in der Dokumentation gezeigten Optionen aus und sehen Sie, was Sie erstellen können! Mapquest bietet einige ziemlich fortgeschrittene Funktionen wie Routenplanung, Suche usw.

> [!NOTE]
> Wenn Sie Probleme damit haben, das Beispiel zum Laufen zu bringen, vergleichen Sie Ihren Code mit unserer [fertigen Version](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/mapquest/finished/script.js).

## Eine RESTful API – NYTimes

Sehen wir uns nun ein weiteres API-Beispiel an – die [New York Times API](https://developer.nytimes.com/). Mit dieser API können Sie Informationen zu Nachrichtenartikeln der New York Times abrufen und auf Ihrer Website anzeigen. Diese Art von API wird als **RESTful API** bezeichnet – statt Daten mithilfe der Funktionen einer JavaScript-Bibliothek abzurufen, wie wir es bei Mapquest getan haben, erhalten wir Daten durch HTTP-Anfragen an bestimmte URLs, wobei Daten wie Suchbegriffe und andere Eigenschaften in der URL kodiert sind, häufig als URL-Parameter. Dies ist ein häufiges Muster, das Ihnen bei APIs begegnen wird.

Im Folgenden führen wir Sie durch eine Übung, die zeigt, wie Sie die NYTimes API verwenden. Sie bietet außerdem allgemeinere Schritte, die Sie als Vorgehensweise für die Arbeit mit neuen APIs nutzen können.

### Die Dokumentation finden

Wenn Sie eine API eines Drittanbieters verwenden möchten, ist es unerlässlich, herauszufinden, wo sich die Dokumentation befindet. So können Sie feststellen, welche Funktionen die API bietet, wie Sie diese verwenden usw. Die Dokumentation der New York Times API finden Sie unter <https://developer.nytimes.com/>.

### Einen Entwicklerschlüssel erhalten

Die meisten APIs verlangen aus Sicherheits- und Verantwortlichkeitsgründen die Verwendung eines Entwicklerschlüssels. Um sich für einen NYTimes-API-Schlüssel zu registrieren, folgen Sie den Anweisungen unter <https://developer.nytimes.com/get-started>.

1. Fordern wir einen Schlüssel für die Article Search API an – erstellen Sie eine neue App und wählen Sie diese als die API aus, die Sie verwenden möchten. Geben Sie einen Namen und eine Beschreibung ein, schalten Sie den Schalter unter „Article Search API“ ein und klicken Sie dann auf „Create“.
2. Rufen Sie den API-Schlüssel auf der resultierenden Seite ab.
3. Um mit dem Beispiel zu beginnen, erstellen Sie eine Kopie aller Dateien im Verzeichnis [nytimes/start](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/nytimes/start). Wenn Sie das [Beispiel-Repository](https://github.com/mdn/learning-area) bereits geklont haben, besitzen Sie bereits eine Kopie dieser Dateien, die Sie im Verzeichnis _javascript/apis/third-party-apis/nytimes/start_ finden. Anfangs enthält die Datei `script.js` eine Reihe von Variablen, die für die Einrichtung des Beispiels benötigt werden; im Folgenden ergänzen wir die erforderliche Funktionalität.

Die App wird Ihnen letztendlich ermöglichen, einen Suchbegriff sowie optionale Start- und Enddaten einzugeben. Diese verwendet sie dann, um die Article Search API abzufragen und die Suchergebnisse anzuzeigen.

![Ein Screenshot einer Beispiel-Suchanfrage und der Suchergebnisse, die über die New York Article Search API abgerufen wurden.](nytimes-example.png)

### Die API mit Ihrer App verbinden

Zuerst müssen Sie eine Verbindung zwischen der API und Ihrer App herstellen. Im Fall dieser API müssen Sie den API-Schlüssel jedes Mal als [GET](/de/docs/Web/HTTP/Reference/Methods/GET)-Parameter einschließen, wenn Sie unter der korrekten URL Daten vom Dienst anfordern.

1. Suchen Sie die folgende Zeile:

   ```js
   const key = "INSERT-YOUR-API-KEY-HERE";
   ```

   Ersetzen Sie den vorhandenen API-Schlüssel durch den tatsächlichen API-Schlüssel, den Sie im vorherigen Abschnitt erhalten haben.

2. Fügen Sie die folgende Zeile zu Ihrem JavaScript unterhalb des Kommentars `// Event listeners to control the functionality` hinzu. Dadurch wird eine Funktion namens `submitSearch()` ausgeführt, wenn das Formular abgeschickt wird, also wenn die Schaltfläche gedrückt wird.

   ```js
   searchForm.addEventListener("submit", submitSearch);
   ```

3. Fügen Sie nun die Funktionsdefinitionen `submitSearch()` und `fetchResults()` unterhalb der vorherigen Zeile hinzu:

   ```js
   function submitSearch(e) {
     pageNumber = 0;
     fetchResults(e);
   }

   function fetchResults(e) {
     // Use preventDefault() to stop the form submitting
     e.preventDefault();

     // Assemble the full URL
     let url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}&fq=document_type:("article")`;

     if (startDate.value !== "") {
       url = `${url}&begin_date=${startDate.value}`;
     }

     if (endDate.value !== "") {
       url = `${url}&end_date=${endDate.value}`;
     }
   }
   ```

`submitSearch()` setzt zunächst die Seitennummer auf 0 zurück und ruft dann `fetchResults()` auf. Diese Funktion ruft zuerst [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem Ereignisobjekt auf, um das tatsächliche Absenden des Formulars zu verhindern, da dies das Beispiel beeinträchtigen würde. Als Nächstes verwenden wir einige String-Manipulationen, um die vollständige URL zusammenzusetzen, an die wir die Anfrage stellen werden. Wir beginnen mit der Zusammenstellung der Teile, die wir für diese Demo als obligatorisch erachten:

- Die Basis-URL, die aus der Variable `baseURL` übernommen wird.
- Der API-Schlüssel, der im URL-Parameter `api-key` angegeben werden muss; sein Wert stammt aus der Variable `key`.
- Die Seitennummer, die im URL-Parameter `page` angegeben werden muss; ihr Wert stammt aus der Variable `pageNumber`.
- Der Suchbegriff, der im URL-Parameter `q` angegeben werden muss; sein Wert stammt aus dem Wert des Text-{{htmlelement("input")}} `searchTerm`.
- Der Dokumenttyp, für den Ergebnisse zurückgegeben werden sollen, wie in einem über den URL-Parameter `fq` übergebenen Ausdruck angegeben. In diesem Fall möchten wir Artikel zurückgeben.

Anschließend verwenden wir einige [`if ()`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisungen, um zu prüfen, ob in die Elemente `startDate` und `endDate` Werte eingegeben wurden. Falls dies der Fall ist, hängen wir ihre Werte an die URL an, die jeweils in den URL-Parametern `begin_date` und `end_date` angegeben werden.

Eine vollständige URL würde dann etwa so aussehen:

```url
https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=YOUR-API-KEY-HERE&page=0&q=cats&fq=document_type:("article")&begin_date=20170301&end_date=20170312
```

> [!NOTE]
> Weitere Details dazu, welche URL-Parameter eingeschlossen werden können, finden Sie in der [NYTimes-Entwicklerdokumentation](https://developer.nytimes.com/).

> [!NOTE]
> Das Beispiel enthält eine einfache Formularvalidierung – das Feld für den Suchbegriff muss ausgefüllt sein, bevor das Formular abgeschickt werden kann, was mithilfe des Attributs `required` erreicht wird. Die Datumsfelder verfügen über angegebene Attribute `pattern`; das bedeutet, dass sie nur abgeschickt werden, wenn ihre Werte aus 8 Ziffern bestehen (`pattern="[0-9]{8}"`). Weitere Informationen zur Funktionsweise finden Sie unter [Formulardatenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

### Daten von der API anfordern

Nun haben wir unsere URL erstellt; stellen wir eine Anfrage an sie. Dazu verwenden wir die [Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch).

Fügen Sie den folgenden Codeblock innerhalb der Funktion `fetchResults()` direkt über der schließenden geschweiften Klammer hinzu:

```js
// Use fetch() to make the request to the API
fetch(url)
  .then((response) => response.json())
  .then((json) => displayResults(json))
  .catch((error) => console.error(`Error fetching data: ${error.message}`));
```

Hier führen wir die Anfrage aus, indem wir unsere Variable `url` an [`fetch()`](/de/docs/Web/API/Window/fetch) übergeben, den Antworttext mithilfe der Funktion [`json()`](/de/docs/Web/API/Response/json) in JSON umwandeln und das resultierende JSON dann an die Funktion `displayResults()` übergeben, damit die Daten in unserer Benutzeroberfläche angezeigt werden können. Außerdem fangen wir mögliche Fehler ab und protokollieren sie.

### Die Daten anzeigen

Gut, sehen wir uns an, wie wir die Daten anzeigen. Fügen Sie die folgende Funktion unterhalb Ihrer Funktion `fetchResults()` hinzu.

```js
function displayResults(json) {
  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }

  const articles = json.response.docs;

  nav.style.display = articles.length === 10 ? "block" : "none";

  if (articles.length === 0) {
    const para = document.createElement("p");
    para.textContent = "No results returned.";
    section.appendChild(para);
  } else {
    for (const current of articles) {
      const article = document.createElement("article");
      const heading = document.createElement("h2");
      const link = document.createElement("a");
      const img = document.createElement("img");
      const para = document.createElement("p");
      const keywordPara = document.createElement("p");
      keywordPara.classList.add("keywords");

      console.log(current);

      link.href = current.web_url;
      link.textContent = current.headline.main;
      para.textContent = current.snippet;
      keywordPara.textContent = "Keywords: ";
      for (const keyword of current.keywords) {
        const span = document.createElement("span");
        span.textContent = `${keyword.value} `;
        keywordPara.appendChild(span);
      }

      if (current.multimedia.length > 0) {
        img.src = `http://www.nytimes.com/${current.multimedia[0].url}`;
        img.alt = current.headline.main;
      }

      article.appendChild(heading);
      heading.appendChild(link);
      article.appendChild(img);
      article.appendChild(para);
      article.appendChild(keywordPara);
      section.appendChild(article);
    }
  }
}
```

Hier gibt es viel Code; erläutern wir ihn Schritt für Schritt:

- Die [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife ist ein gängiges Muster, das verwendet wird, um den gesamten Inhalt eines DOM-Elements zu löschen, in diesem Fall das {{htmlelement("section")}}-Element. Wir prüfen weiterhin, ob `<section>` ein erstes Kindelement hat, und entfernen es, falls vorhanden. Die Schleife endet, wenn `<section>` keine Kindelemente mehr besitzt.
- Anschließend setzen wir die Variable `articles` auf `json.response.docs` – dies ist das Array, das alle Objekte enthält, welche die von der Suche zurückgegebenen Artikel darstellen. Dies geschieht lediglich, um den folgenden Code etwas einfacher zu machen.
- Der erste [`if ()`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Block prüft, ob 10 Artikel zurückgegeben werden. Die API gibt bis zu 10 Artikel gleichzeitig zurück. Wenn dies der Fall ist, zeigen wir das {{htmlelement("nav")}} an, das die Paginierungsschaltflächen _Previous 10_/_Next 10_ enthält. Werden weniger als 10 Artikel zurückgegeben, passen sie alle auf eine Seite, sodass wir die Paginierungsschaltflächen nicht anzeigen müssen. Die Funktionalität der Paginierung verbinden wir im nächsten Abschnitt.
- Der nächste `if ()`-Block prüft, ob keine Artikel zurückgegeben werden. Ist dies der Fall, versuchen wir nicht, Artikel anzuzeigen – wir erstellen ein {{htmlelement("p")}} mit dem Text „No results returned.“ und fügen es in `<section>` ein.
- Wenn einige Artikel zurückgegeben werden, erstellen wir zunächst alle Elemente, die wir zur Anzeige jedes Nachrichtenartikels verwenden möchten, fügen jeweils die richtigen Inhalte ein und setzen sie dann an den entsprechenden Stellen in das DOM ein. Um herauszufinden, welche Eigenschaften in den Artikelobjekten die korrekten anzuzeigenden Daten enthielten, haben wir die Referenz zur Article Search API konsultiert (siehe [NYTimes APIs](https://developer.nytimes.com/apis)). Die meisten dieser Vorgänge sind recht offensichtlich, einige sind jedoch erwähnenswert:
  - Wir haben eine [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife verwendet, um alle jedem Artikel zugeordneten Schlüsselwörter zu durchlaufen und jedes einzelne in sein eigenes {{htmlelement("span")}} innerhalb eines `<p>` einzufügen. Dies erleichtert die Gestaltung jedes einzelnen.
  - Wir haben einen `if ()`-Block (`if (current.multimedia.length > 0) { }`) verwendet, um zu prüfen, ob jedem Artikel Bilder zugeordnet sind, da dies bei einigen Artikeln nicht der Fall ist. Wir zeigen das erste Bild nur an, wenn es existiert; andernfalls würde ein Fehler ausgelöst.

### Die Paginierungsschaltflächen verbinden

Damit die Paginierungsschaltflächen funktionieren, erhöhen oder verringern wir den Wert der Variable `pageNumber` und führen die Fetch-Anfrage dann erneut aus, wobei der neue Wert im URL-Parameter für die Seite enthalten ist. Dies funktioniert, weil die NYTimes API nur 10 Ergebnisse gleichzeitig zurückgibt. Wenn mehr als 10 Ergebnisse verfügbar sind, gibt sie die ersten 10 (0–9) zurück, wenn der URL-Parameter `page` auf 0 gesetzt ist oder gar nicht enthalten ist – 0 ist der Standardwert. Die nächsten 10 (10–19) werden zurückgegeben, wenn er auf 1 gesetzt ist, und so weiter.

Dadurch können wir eine einfache Paginierungsfunktion schreiben.

1. Fügen Sie unterhalb des vorhandenen Aufrufs von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) diese beiden neuen Aufrufe hinzu, die bewirken, dass die Funktionen `nextPage()` und `previousPage()` aufgerufen werden, wenn auf die entsprechenden Schaltflächen geklickt wird:

   ```js
   nextBtn.addEventListener("click", nextPage);
   previousBtn.addEventListener("click", previousPage);
   ```

2. Definieren wir unterhalb Ihrer vorherigen Ergänzung die beiden Funktionen – fügen Sie nun diesen Code hinzu:

   ```js
   function nextPage(e) {
     pageNumber++;
     fetchResults(e);
   }

   function previousPage(e) {
     if (pageNumber > 0) {
       pageNumber--;
     } else {
       return;
     }
     fetchResults(e);
   }
   ```

   Die erste Funktion erhöht die Variable `pageNumber` und führt dann die Funktion `fetchResults()` erneut aus, um die Ergebnisse der nächsten Seite anzuzeigen.

   Die zweite Funktion arbeitet in umgekehrter Richtung fast genauso, aber wir müssen zusätzlich prüfen, dass `pageNumber` nicht bereits null ist, bevor wir den Wert verringern. Wenn die Fetch-Anfrage mit einem negativen `page`-URL-Parameter ausgeführt wird, könnte dies Fehler verursachen. Wenn `pageNumber` bereits 0 ist, verlassen wir die Funktion mit [`return`](/de/docs/Web/JavaScript/Reference/Statements/return) – wenn wir bereits auf der ersten Seite sind, müssen wir nicht erneut dieselben Ergebnisse laden.

> [!NOTE]
> Sie finden unseren [fertigen Code für das NYTimes-API-Beispiel auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/nytimes/finished/index.html) und können ihn auch [hier live ausführen](https://mdn.github.io/learning-area/javascript/apis/third-party-apis/nytimes/finished/).

## YouTube-Beispiel

Wir haben außerdem ein weiteres Beispiel erstellt, das Sie studieren und aus dem Sie lernen können – sehen Sie sich unser [YouTube-Videosuchbeispiel](https://mdn.github.io/learning-area/javascript/apis/third-party-apis/youtube/) an. Es verwendet zwei verwandte APIs:

- Die [YouTube Data API](https://developers.google.com/youtube/v3/docs/) zum Suchen nach YouTube-Videos und Zurückgeben von Ergebnissen.
- Die [YouTube IFrame Player API](https://developers.google.com/youtube/iframe_api_reference) zum Anzeigen der zurückgegebenen Videobeispiele in IFrame-Videoplayern, damit Sie sie ansehen können.

Dieses Beispiel ist interessant, weil es zeigt, wie zwei verwandte APIs von Drittanbietern zusammen verwendet werden, um eine App zu erstellen. Die erste ist eine RESTful API, während die zweite eher wie Mapquest funktioniert, also mit API-spezifischen Methoden usw. Es ist jedoch erwähnenswert, dass beide APIs verlangen, dass eine JavaScript-Bibliothek auf die Seite angewendet wird. Die RESTful API verfügt über Funktionen zur Ausführung der HTTP-Anfragen und zur Rückgabe der Ergebnisse.

![Ein Screenshot einer beispielhaften YouTube-Videosuche unter Verwendung zweier verwandter APIs. Die linke Seite des Bildes zeigt eine Beispiel-Suchanfrage mit der YouTube Data API. Die rechte Seite des Bildes zeigt die Suchergebnisse mit der YouTube Iframe Player API.](youtube-example.png)

Wir werden in diesem Artikel nicht viel mehr über dieses Beispiel sagen – der [Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/youtube) enthält ausführliche Kommentare, die erklären, wie es funktioniert.

Um es auszuführen, müssen Sie:

- die Dokumentation zur [YouTube Data API Overview](https://developers.google.com/youtube/v3/getting-started) lesen.
- sicherstellen, dass Sie die Seite [Enabled APIs](https://console.cloud.google.com/apis/enabled) besuchen und in der Liste der APIs der Status für YouTube Data API v3 auf ON steht.
- einen API-Schlüssel von [Google Cloud](https://cloud.google.com/) erhalten.
- im Quellcode nach dem String `ENTER-API-KEY-HERE` suchen und ihn durch Ihren API-Schlüssel ersetzen.
- das Beispiel über einen Webserver ausführen. Es funktioniert nicht, wenn Sie es direkt im Browser ausführen, also über eine `file://`-URL.

## Zusammenfassung

Dieser Artikel hat Ihnen eine nützliche Einführung in die Verwendung von APIs von Drittanbietern gegeben, um Ihren Websites Funktionalität hinzuzufügen.

{{PreviousMenu("Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}
