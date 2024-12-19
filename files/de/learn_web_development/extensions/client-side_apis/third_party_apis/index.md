---
title: Third-party APIs
slug: Learn_web_development/Extensions/Client-side_APIs/Third_party_APIs
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenu("Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}

Die APIs, die wir bisher behandelt haben, sind in den Browser integriert, aber nicht alle APIs sind es. Viele große Websites und Dienste wie Google Maps, Twitter, Facebook, PayPal usw. bieten APIs an, die es Entwicklern ermöglichen, ihre Daten (z. B. das Anzeigen Ihres Twitter-Streams auf Ihrem Blog) oder Dienste (z. B. die Verwendung der Facebook-Anmeldung zur Anmeldung Ihrer Benutzer) zu nutzen. Dieser Artikel beleuchtet den Unterschied zwischen Browser-APIs und Drittanbieter-APIs und zeigt einige typische Anwendungen der letzteren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere grundlegenden JavaScript-Objekten und der grundlegenden API-Abdeckung wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Konzepte hinter Drittanbieter-APIs und damit verbundene Muster wie API-Schlüssel.</li>
          <li>Verwendung einer Drittanbieter-Karten-API.</li>
          <li>Verwendung einer RESTful-API.</li>
          <li>Verwendung von Googles YouTube-APIs.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was sind Drittanbieter-APIs?

Drittanbieter-APIs sind APIs, die von Dritten — in der Regel Unternehmen wie Facebook, Twitter oder Google — bereitgestellt werden, um Ihnen den Zugang zu deren Funktionen über JavaScript zu ermöglichen und diese auf Ihrer Website zu nutzen. Eines der offensichtlichsten Beispiele ist die Verwendung von Karten-APIs, um benutzerdefinierte Karten auf Ihren Seiten anzuzeigen.

Schauen wir uns ein [einfaches Mapquest-API-Beispiel](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/mapquest) an und nutzen es, um zu veranschaulichen, wie sich Drittanbieter-APIs von Browser-APIs unterscheiden.

### Sie befinden sich auf Servern von Drittanbietern

Browser-APIs sind im Browser eingebaut — Sie können sofort aus JavaScript darauf zugreifen. Zum Beispiel wird die Web Audio API, die wir im [einführenden Artikel](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction#how_do_apis_work) gesehen haben, über das native [`AudioContext`](/de/docs/Web/API/AudioContext) Objekt aufgerufen. Zum Beispiel:

```js
const audioCtx = new AudioContext();
// …
const audioElement = document.querySelector("audio");
// …
const audioSource = audioCtx.createMediaElementSource(audioElement);
// etc.
```

Drittanbieter-APIs hingegen befinden sich auf Servern von Drittanbietern. Um von JavaScript aus auf sie zugreifen zu können, müssen Sie zuerst die API-Funktionalität verbinden und auf Ihrer Seite verfügbar machen. Dies erfordert in der Regel zuerst das Verlinken einer JavaScript-Bibliothek, die auf dem Server über ein {{htmlelement("script")}}-Element verfügbar ist, wie in unserem Mapquest-Beispiel zu sehen:

```html
<script
  src="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.js"
  defer></script>
<link
  rel="stylesheet"
  href="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.css" />
```

Dann können Sie beginnen, die in dieser Bibliothek verfügbaren Objekte zu verwenden. Zum Beispiel:

```js
const map = L.mapquest.map("map", {
  center: [53.480759, -2.242631],
  layers: L.mapquest.tileLayer("map"),
  zoom: 12,
});
```

Hier erstellen wir eine Variable, um die Karteninformationen zu speichern, und dann erstellen wir eine neue Karte mit der `mapquest.map()` Methode, die als Parameter die ID eines {{htmlelement("div")}}-Elements nimmt, in dem Sie die Karte anzeigen wollen ('map'), sowie ein Optionsobjekt, das die Details der Karte, die wir anzeigen möchten, enthält. In diesem Fall geben wir die Koordinaten des Kartenmittelpunkts an, eine Kartenebene des Typs `map` zur Anzeige (erstellt mit der Methode `mapquest.tileLayer()`) und den Standard-Zoom-Level.

Dies ist alle Informationen, die die Mapquest-API benötigt, um eine einfache Karte zu zeichnen. Der Server, mit dem Sie sich verbinden, handelt alle komplizierten Sachen wie das Anzeigen der richtigen Kartenelemente für den angezeigten Bereich.

> [!NOTE]
> Einige APIs handhaben den Zugriff auf ihre Funktionalität etwas anders, indem sie vom Entwickler verlangen, einen HTTP-Anfrage an ein bestimmtes URL-Muster zu stellen, um Daten abzurufen. Diese werden [RESTful APIs genannt — wir zeigen später ein Beispiel](#a_restful_api_%e2%80%94_nytimes).

### Sie erfordern normalerweise API-Schlüssel

Die Sicherheit für Browser-APIs wird in der Regel durch Berechtigungsaufforderungen gehandhabt, wie [in unserem ersten Artikel besprochen](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction#they_have_additional_security_mechanisms_where_appropriate). Der Zweck dieser Aufforderungen besteht darin, dass der Benutzer weiß, was auf den von ihm besuchten Websites vor sich geht, und weniger wahrscheinlich einem Missbrauch einer API in böswilliger Weise zum Opfer fällt.

Drittanbieter-APIs haben ein etwas anderes Berechtigungssystem — sie neigen dazu, Entwickler-Schlüssel zu verwenden, um Entwicklern Zugriff auf die API-Funktionalität zu gewähren, was mehr dem Schutz des API-Anbieters als dem Benutzer dient.

Sie finden eine Zeile ähnlich der folgenden im Mapquest-API-Beispiel:

```js
L.mapquest.key = "YOUR-API-KEY-HERE";
```

Diese Zeile gibt einen API- oder Entwickler-Schlüssel an, der in Ihrer Anwendung verwendet werden soll — der Entwickler der Anwendung muss einen Schlüssel beantragen und ihn dann in seinem Code einfügen, um Zugang zur API-Funktionalität zu erhalten. In unserem Beispiel haben wir nur einen Platzhalter bereitgestellt.

> [!NOTE]
> Wenn Sie Ihre eigenen Beispiele erstellen, verwenden Sie Ihren eigenen API-Schlüssel anstelle eines Platzhalters.

Andere APIs verlangen möglicherweise, dass Sie den Schlüssel auf eine etwas andere Weise einfügen, aber das Muster ist bei den meisten relativ ähnlich.

Das Erfordern eines Schlüssels ermöglicht es dem API-Anbieter, die Benutzer der API für ihre Handlungen verantwortlich zu machen. Wenn der Entwickler einen Schlüssel registriert hat, ist er dem API-Anbieter bekannt, und es können Maßnahmen ergriffen werden, wenn er etwas Böswilliges mit der API anfängt (wie z. B. das Verfolgen des Standorts von Personen oder das Versenden von Spam an die API mit einer Vielzahl von Anfragen, um sie außer Betrieb zu setzen). Die einfachste Maßnahme wäre, einfach ihre API-Berechtigungen zu entziehen.

## Erweiterung des Mapquest-Beispiels

Lassen Sie uns weitere Funktionalität zum Mapquest-Beispiel hinzufügen, um zu zeigen, wie einige andere Funktionen der API genutzt werden können.

1. Um diesen Abschnitt zu beginnen, erstellen Sie eine Kopie der Datei [mapquest starter file](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/mapquest/start/index.html) in einem neuen Verzeichnis. Wenn Sie das [Examples Repository](https://github.com/mdn/learning-area) bereits geklont haben, haben Sie bereits eine Kopie dieser Datei, die Sie im Verzeichnis _javascript/apis/third-party-apis/mapquest/start_ finden können.
2. Als nächstes müssen Sie zur [Mapquest Entwicklerseite](https://developer.mapquest.com/) gehen, ein Konto erstellen und dann einen Entwickler-Schlüssel erstellen, den Sie mit Ihrem Beispiel nutzen. (Zum Zeitpunkt des Schreibens wurde dies auf der Seite als "Verbraucherschlüssel" bezeichnet, und im Prozess der Schlüsselerstellung wurde auch nach einer optionalen "Callback-URL" gefragt. Sie müssen hier keine URL angeben: lassen Sie dieses Feld einfach leer.)
3. Öffnen Sie Ihre Startdatei und ersetzen Sie den Platzhalter für den API-Schlüssel durch Ihren Schlüssel.

### Ändern des Kartentyps

Es gibt eine Reihe verschiedener Kartentypen, die mit der Mapquest-API angezeigt werden können. Um dies zu tun, finden Sie die folgende Zeile:

```js
layers: L.mapquest.tileLayer("map");
```

Versuchen Sie, `'map'` in `'hybrid'` zu ändern, um eine Karte im Hybrid-Stil anzuzeigen. Probieren Sie einige andere Werte aus. Die [`tileLayer` Referenzseite](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-tile-layer/) zeigt die verschiedenen verfügbaren Optionen sowie viele weitere Informationen.

### Hinzufügen verschiedener Steuerelemente

Die Karte hat eine Reihe verschiedener Steuerelemente, standardmäßig wird nur ein Zoom-Steuerelement angezeigt. Sie können die verfügbaren Steuerelemente mithilfe der Methode `map.addControl()` erweitern; fügen Sie dies Ihrem Code hinzu:

```js
map.addControl(L.mapquest.control());
```

Die [`mapquest.control()` Methode](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-control/) erstellt einfach ein einfaches, voll ausgestattetes Steuerelement-Set, das standardmäßig in der oberen rechten Ecke platziert wird. Sie können die Position anpassen, indem Sie dem Steuerelement ein Optionsobjekt als Parameter mit einer Eigenschaft `position` übergeben, dessen Wert ein String ist, der eine Position für das Steuerelement angibt. Probieren Sie dies zum Beispiel:

```js
map.addControl(L.mapquest.control({ position: "bottomright" }));
```

Es gibt andere Arten von Steuerelementen, zum Beispiel [`mapquest.searchControl()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-search-control/) und [`mapquest.satelliteControl()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-satellite-control/), und einige sind ziemlich komplex und leistungsstark. Probieren Sie herum und schauen Sie, was Ihnen einfällt.

### Hinzufügen eines benutzerdefinierten Markers

Das Hinzufügen eines Markers (Icons) an einem bestimmten Punkt auf der Karte ist einfach — Sie verwenden einfach die Methode [`L.marker()`](https://leafletjs.com/reference.html#marker) (die anscheinend in den verwandten Leaflet.js-Dokumentationen dokumentiert ist). Fügen Sie den folgenden Code Ihrem Beispiel hinzu, erneut innerhalb von `window.onload`:

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

Wie Sie sehen können, nimmt dies in seiner einfachsten Form zwei Parameter: ein Array, das die Koordinaten enthält, an denen der Marker angezeigt werden soll, und ein Optionsobjekt, das eine `icon`-Eigenschaft enthält, die das anzuzeigende Icon an diesem Ort definiert.

Das Icon wird mit einer Methode [`mapquest.icons.marker()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-icons/) definiert, die, wie Sie sehen können, Informationen wie die Farbe und Größe des Markers enthält.

Am Ende des ersten Methodenaufrufs verketten wir `.bindPopup('This is Manchester!')`, was den Inhalt definiert, der angezeigt wird, wenn auf den Marker geklickt wird.

Schließlich verketten wir `.addTo(map)` am Ende der Kette, um den Marker tatsächlich auf der Karte hinzuzufügen.

Experimentieren Sie mit den anderen in der Dokumentation gezeigten Optionen und schauen Sie, was Ihnen einfällt! Mapquest bietet einige ziemlich fortgeschrittene Funktionen wie Wegbeschreibungen, Suchen usw.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, das Beispiel zum Laufen zu bringen, vergleichen Sie Ihren Code mit unserer [fertigen Version](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/mapquest/finished/script.js).

## Eine RESTful API — NYTimes

Schauen wir uns nun ein weiteres API-Beispiel an — die [New York Times API](https://developer.nytimes.com/). Diese API ermöglicht es Ihnen, Informationen zu New York Times-Nachrichten abzurufen und auf Ihrer Website anzuzeigen. Diese Art von API wird als **RESTful API** bezeichnet — anstelle von Daten mit den Funktionen einer JavaScript-Bibliothek wie bei Mapquest zu erhalten, erhalten wir Daten, indem wir HTTP-Anfragen an bestimmte URLs stellen, wobei Daten wie Suchbegriffe und andere Eigenschaften in die URL codiert sind (oft als URL-Parameter). Dies ist ein häufiges Muster, dem Sie bei APIs begegnen werden.

Unten führen wir Sie durch eine Übung, die Ihnen zeigt, wie Sie die NYTimes-API verwenden, die auch eine allgemeinere Reihe von Schritten bereitstellt, die Sie als Ansatz für die Arbeit mit neuen APIs verwenden können.

### Finden Sie die Dokumentation

Wenn Sie eine Drittanbieter-API verwenden möchten, ist es wichtig herauszufinden, wo sich die Dokumentation befindet, damit Sie herausfinden können, welche Funktionen die API bietet, wie Sie sie verwenden usw. Die Dokumentation zur New York Times API befindet sich unter <https://developer.nytimes.com/>.

### Holen Sie sich einen Entwickler-Schlüssel

Die meisten APIs erfordern, dass Sie einen Entwickler-Schlüssel verwenden, aus Gründen der Sicherheit und Verantwortlichkeit. Um sich für einen NYTimes-API-Schlüssel anzumelden, folgen Sie den Anweisungen unter <https://developer.nytimes.com/get-started>.

1. Fordern Sie einen Schlüssel für die Artikel-Suche-API an — erstellen Sie eine neue App und wählen Sie diese als die API aus, die Sie verwenden möchten (geben Sie einen Namen und eine Beschreibung ein, schalten Sie den Schalter unter "Article Search API" in die Position "Ein", und klicken Sie dann auf "Erstellen").
2. Holen Sie sich den API-Schlüssel von der resultierenden Seite.
3. Machen Sie nun, um das Beispiel zu starten, eine Kopie aller Dateien im Verzeichnis [nytimes/start](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/nytimes/start). Wenn Sie <https://github.com/mdn/learning-area> bereits geklont haben, haben Sie bereits eine Kopie dieser Dateien, die Sie im Verzeichnis _javascript/apis/third-party-apis/nytimes/start_ finden können. Anfangs enthält die Datei `script.js` eine Reihe von Variablen, die für die Einrichtung des Beispiels benötigt werden; im Folgenden werden wir die erforderliche Funktionalität ausfüllen.

Die App ermöglicht es Ihnen, einen Suchbegriff und optionale Start- und Enddaten einzugeben, die sie dann verwendet, um die Artikel-Suche-API abzufragen und die Suchergebnisse anzuzeigen.

![Ein Screenshot einer Beispielabfrage und Suchergebnisse, wie sie von der New York Times Artikel-Suche-API abgerufen wurden.](nytimes-example.png)

### Verbinden Sie die API mit Ihrer App

Zuerst müssen Sie eine Verbindung zwischen der API und Ihrer App herstellen. Im Fall dieser API müssen Sie den API-Schlüssel als [get](/de/docs/Web/HTTP/Methods/GET)-Parameter jedes Mal einbeziehen, wenn Sie Daten von dem Dienst an der richtigen URL anfordern.

1. Finden Sie die folgende Zeile:

   ```js
   const key = "INSERT-YOUR-API-KEY-HERE";
   ```

   Ersetzen Sie den vorhandenen API-Schlüssel durch den tatsächlichen API-Schlüssel, den Sie im vorherigen Abschnitt erhalten haben.

2. Fügen Sie die folgende Zeile zu Ihrem JavaScript hinzu, unter dem Kommentar `// Event listeners to control the functionality`. Dies führt eine Funktion namens `submitSearch()` aus, wenn das Formular übermittelt wird (der Button gedrückt wird).

   ```js
   searchForm.addEventListener("submit", submitSearch);
   ```

3. Fügen Sie nun die Funktionsdefinitionen für `submitSearch()` und `fetchResults()` hinzu, unter Ihrer vorherigen Zeile:

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

`submitSearch()` setzt die Seitenzahl zu Beginn auf 0 zurück und ruft dann `fetchResults()` auf. Dies ruft zuerst [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem Ereignisobjekt auf, um das tatsächliche Absenden des Formulars zu stoppen (was das Beispiel sonst beschädigen würde). Als nächstes verwenden wir etwas String-Manipulation, um die vollständige URL zusammenzustellen, an die wir die Anfrage stellen werden. Wir beginnen mit dem Zusammenstellen der Teile, die wir für diese Demo als verpflichtend erachten:

- Die Basis-URL (aus der Variablen `baseURL`).
- Der API-Schlüssel, der im URL-Parameter `api-key` angegeben werden muss (der Wert wird aus der Variablen `key` entnommen).
- Die Seitenzahl, die im URL-Parameter `page` angegeben werden muss (der Wert wird aus der Variablen `pageNumber` entnommen).
- Der Suchbegriff, der im URL-Parameter `q` angegeben werden muss (der Wert wird aus dem Wert des Text-{{htmlelement("input")}}-Elements `searchTerm` entnommen).
- Der Dokumenttyp, für den Ergebnisse zurückgegeben werden, wie in einem Ausdruck angegeben, der über den URL-Parameter `fq` übergeben wird. In diesem Fall möchten wir Artikel zurückgeben.

Als nächstes verwenden wir ein paar [`if ()`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisungen, um zu überprüfen, ob die Elemente `startDate` und `endDate` Werte enthalten. Wenn ja, hängen wir ihre Werte an die URL an, angegeben in den URL-Parametern `begin_date` und `end_date` jeweils.

Eine vollständige URL würde letztendlich in etwa so aussehen:

```url
https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=YOUR-API-KEY-HERE&page=0&q=cats&fq=document_type:("article")&begin_date=20170301&end_date=20170312
```

> [!NOTE]
> Weitere Details darüber, welche URL-Parameter enthalten sein können, finden Sie in den [NYTimes-Entwicklerdokumenten](https://developer.nytimes.com/).

> [!NOTE]
> Das Beispiel hat rudimentäre Validierung der Formulardaten — das Feld für den Suchbegriff muss ausgefüllt sein, bevor das Formular übermittelt werden kann (erreicht durch die Verwendung des `required`-Attributes), und die Datumsfelder haben spezifizierte `pattern`-Attribute, was bedeutet, dass sie nicht übermittelt werden, es sei denn, ihre Werte bestehen aus 8 Zahlen (`pattern="[0-9]{8}"`). Weitere Details dazu, wie diese funktionieren, finden Sie unter [Formular-Datenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

### Anfordern von Daten von der API

Da wir unsere URL zusammengebaut haben, führen wir eine Anfrage dazu aus. Wir werden dies unter Verwendung der [Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch) durchführen.

Fügen Sie den folgenden Codeblock innerhalb der `fetchResults()`-Funktion, direkt über der schließenden geschweiften Klammer, hinzu:

```js
// Use fetch() to make the request to the API
fetch(url)
  .then((response) => response.json())
  .then((json) => displayResults(json))
  .catch((error) => console.error(`Error fetching data: ${error.message}`));
```

Hier führen wir die Anfrage durch, indem wir unsere `url`-Variable an [`fetch()`](/de/docs/Web/API/Window/fetch) übergeben, den Antwortinhalt mit der Funktion [`json()`](/de/docs/Web/API/Response/json) in JSON konvertieren, und dann das resultierende JSON an die Funktion `displayResults()` weitergeben, damit die Daten in unserer Benutzeroberfläche angezeigt werden können. Wir fangen auch alle Fehler ab, die geworfen werden könnten, und protokollieren sie.

### Darstellung der Daten

OK, schauen wir uns an, wie wir die Daten anzeigen werden. Fügen Sie die folgende Funktion unter Ihrer `fetchResults()`-Funktion hinzu.

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
      const para1 = document.createElement("p");
      const keywordPara = document.createElement("p");
      keywordPara.classList.add("keywords");

      console.log(current);

      link.href = current.web_url;
      link.textContent = current.headline.main;
      para1.textContent = current.snippet;
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
      article.appendChild(para1);
      article.appendChild(keywordPara);
      section.appendChild(article);
    }
  }
}
```

Es gibt hier eine Menge Code; lassen Sie uns ihn Schritt für Schritt erklären:

- Die [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife ist ein gängiges Muster, um alle Inhalte eines DOM-Elements zu löschen, in diesem Fall das {{htmlelement("section")}}-Element. Wir überprüfen fortlaufend, ob `<section>` ein erstes Kind hat, und wenn ja, entfernen wir das erste Kind. Die Schleife endet, wenn `<section>` keine weiteren Kinder mehr hat.
- Als nächstes setzen wir die Variable `articles` gleich `json.response.docs` — dies ist das Array, das alle Objekte enthält, die die von der Suche zurückgegebenen Artikel repräsentieren. Dies geschieht, um den folgenden Code etwas einfacher zu machen.
- Der erste [`if ()`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Block überprüft, ob 10 Artikel zurückgegeben werden (die API gibt pro Anfrage bis zu 10 Artikel zurück.) Falls ja, zeigen wir das {{htmlelement("nav")}} an, das die _Vorherige 10_/_Nächste 10_-Paginierungsknöpfe enthält. Falls weniger als 10 Artikel zurückgegeben werden, passen sie alle auf eine Seite, weshalb wir die Paginierungsknöpfe nicht anzeigen müssen. Wir werden die Paginierungsfunktionalität im nächsten Abschnitt verdrahten.
- Der nächste `if ()`-Block prüft, ob keine Artikel zurückgegeben werden. Falls ja, versuchen wir nicht, irgendeine anzuzeigen — wir erstellen ein {{htmlelement("p")}} mit dem Text "No results returned." und fügen es in das `<section>` ein.
- Werden einige Artikel zurückgegeben, erstellen wir zunächst alle Elemente, die wir verwenden möchten, um jede Nachrichtengeschichte anzuzeigen, fügen die richtigen Inhalte in jedes ein und dann fügen wir sie an den richtigen Stellen in das DOM ein. Um herauszufinden, welche Eigenschaften in den Artikelobjekten die richtigen Daten zum Anzeigen enthalten, haben wir die Artikel-Suche-API-Referenz konsultiert (siehe [NYTimes APIs](https://developer.nytimes.com/apis)). Die meisten dieser Operationen sind ziemlich offensichtlich, aber ein paar sind erwähnenswert:

  - Wir haben eine [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife verwendet, um alle Schlüsselwörter zu durchlaufen, die mit jedem Artikel assoziiert sind, und jedes in seinen eigenen {{htmlelement("span")}} innerhalb eines `<p>` einzufügen. Dies wurde getan, um es einfach zu machen, jeden zu stylen.
  - Wir haben einen `if ()`-Block (`if (current.multimedia.length > 0) { }`) verwendet, um zu überprüfen, ob jedem Artikel Bilder zugeordnet sind, da einige Geschichten dies nicht tun. Wir zeigen nur das erste Bild, wenn es existiert; andernfalls würde ein Fehler geworfen.

### Verdrahtung der Paginierungsknöpfe

Um die Paginierungsknöpfe funktional zu machen, erhöhen (oder verringern) wir den Wert der Variable `pageNumber` und wiederholen dann die Abrufanfrage mit dem neuen Wert, der im URL-Parameter page enthalten ist. Dies funktioniert, weil die NYTimes-API nur 10 Ergebnisse gleichzeitig zurückgibt — wenn mehr als 10 Ergebnisse verfügbar sind, wird sie die ersten 10 (0-9) zurückgeben, wenn der URL-Parameter `page` auf 0 gesetzt ist (oder gar nicht enthalten ist — 0 ist der Standardwert), die nächsten 10 (10-19), wenn sie auf 1 gesetzt ist, und so weiter.

Dies ermöglicht es uns, eine vereinfachte Paginierungsfunktion zu schreiben.

1. Unter dem bestehenden [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Aufruf fügen Sie diese beiden neuen hinzu, die bewirken, dass die Funktionen `nextPage()` und `previousPage()` aufgerufen werden, wenn die jeweiligen Knöpfe geklickt werden:

   ```js
   nextBtn.addEventListener("click", nextPage);
   previousBtn.addEventListener("click", previousPage);
   ```

2. Unter Ihrer vorherigen Ergänzung lassen Sie uns die beiden Funktionen definieren — fügen Sie diesen Code jetzt hinzu:

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

   Die erste Funktion erhöht die Variable `pageNumber`, dann führt sie die Funktion `fetchResults()` erneut aus, um die nächsten Suchergebnisse anzuzeigen.

   Die zweite Funktion funktioniert fast genau gleich, nur in umgekehrter Richtung, jedoch müssen wir auch den zusätzlichen Schritt tun, den Wert von `pageNumber` zu überprüfen, um sicherzustellen, dass er nicht bereits null ist, bevor wir ihn verringern — wenn die Abrufanfrage mit einem negativen URL-Parameter gestartet wird, könnte dies zu Fehlern führen. Wenn `pageNumber` bereits 0 ist, kehren wir mit [`return`](/de/docs/Web/JavaScript/Reference/Statements/return) aus der Funktion zurück — wenn wir bereits auf der ersten Seite sind, brauchen wir nicht dieselben Ergebnisse erneut zu laden.

> [!NOTE]
> Sie können unseren [fertigen NYTimes-API-Beispielcode auf GitHub finden](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/nytimes/finished/index.html) (auch [sehen Sie es hier live laufen](https://mdn.github.io/learning-area/javascript/apis/third-party-apis/nytimes/finished/)).

## YouTube-Beispiel

Wir haben auch ein weiteres Beispiel für Sie erstellt, das Sie studieren und daraus lernen können — sehen Sie unser [Beispiel für die YouTube-Videosuche](https://mdn.github.io/learning-area/javascript/apis/third-party-apis/youtube/). Dieses verwendet zwei verwandte APIs:

- Die [YouTube Data API](https://developers.google.com/youtube/v3/docs/), um nach YouTube-Videos zu suchen und Ergebnisse zurückzugeben.
- Die [YouTube IFrame Player API](https://developers.google.com/youtube/iframe_api_reference), um die zurückgegebenen Video-Beispiele in IFrame-Video-Playern anzuzeigen, damit Sie sie ansehen können.

Dieses Beispiel ist interessant, weil es zeigt, wie zwei verwandte Drittanbieter-APIs zusammen verwendet werden können, um eine App zu erstellen. Die erste ist eine RESTful-API, während die zweite mehr wie Mapquest funktioniert (mit API-spezifischen Methoden usw.). Es ist jedoch zu beachten, dass beide APIs eine JavaScript-Bibliothek erfordern, die auf die Seite angewendet werden muss. Die RESTful-API hat Funktionen zur Verfügung, um die HTTP-Anfragen durchzuführen und die Ergebnisse zurückzugeben.

![Ein Screenshot einer Beispiel-YouTube-Videosuche unter Verwendung von zwei verwandten APIs. Die linke Seite des Bildes hat eine Beispielabfrage mit der YouTube Data API. Die rechte Seite des Bildes stellt die Suchergebnisse mithilfe der YouTube IFrame Player API dar.](youtube-example.png)

Wir werden in diesem Artikel nicht viel mehr über dieses Beispiel sagen — [der Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/youtube) enthält ausführliche Kommentare, die erklären, wie es funktioniert.

Um es in Gang zu bringen, müssen Sie:

- Die [YouTube Data API-Übersicht](https://developers.google.com/youtube/v3/getting-started) Dokumentation lesen.
- Besuchen Sie die [aktivierten APIs-Seite](https://console.cloud.google.com/apis/enabled) und stellen Sie sicher, dass der Status der YouTube Data API v3 in der Liste aktiviert ist.
- Einen API-Schlüssel von [Google Cloud](https://cloud.google.com/) erhalten.
- Suchen Sie den String `ENTER-API-KEY-HERE` im Quellcode und ersetzen Sie ihn durch Ihren API-Schlüssel.
- Das Beispiel über einen Webserver ausführen. Es funktioniert nicht, wenn Sie es direkt im Browser ausführen (d. h. über eine `file://` URL).

## Zusammenfassung

Dieser Artikel hat Ihnen eine nützliche Einführung in die Verwendung von Drittanbieter-APIs gegeben, um Funktionalität zu Ihren Websites hinzuzufügen.

{{PreviousMenu("Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}
