---
title: Third-party-APIs
slug: Learn/JavaScript/Client-side_web_APIs/Third_party_APIs
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Fetching_data", "Learn/JavaScript/Client-side_web_APIs/Drawing_graphics", "Learn/JavaScript/Client-side_web_APIs")}}

Die bisher behandelten APIs sind in den Browser eingebaut, aber nicht alle APIs sind dies. Viele große Websites und Dienste wie Google Maps, Twitter, Facebook, PayPal usw. bieten APIs an, die es Entwicklern ermöglichen, ihre Daten (z.B. das Anzeigen Ihres Twitter-Streams auf Ihrem Blog) oder Dienste (z.B. das Verwenden von Facebook-Login, um Ihre Nutzer anzumelden) zu nutzen. Dieser Artikel betrachtet den Unterschied zwischen Browser-APIs und APIs von Drittanbietern und zeigt einige typische Anwendungen der Letzteren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von JavaScript (siehe
        <a href="/de/docs/Learn/JavaScript/First_steps">erste Schritte</a>,
        <a href="/de/docs/Learn/JavaScript/Building_blocks"
          >Bausteine</a
        >,
        <a href="/de/docs/Learn/JavaScript/Objects">JavaScript-Objekte</a>),
        die
        <a href="/de/docs/Learn/JavaScript/Client-side_web_APIs/Introduction"
          >Grundlagen von Client-seitigen APIs</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie Drittanbieter-APIs funktionieren und wie Sie sie nutzen können, um Ihre Websites zu verbessern.
      </td>
    </tr>
  </tbody>
</table>

## Was sind Drittanbieter-APIs?

Drittanbieter-APIs sind von Drittanbietern bereitgestellte APIs — normalerweise Unternehmen wie Facebook, Twitter oder Google — die es Ihnen ermöglichen, ihre Funktionalität über JavaScript zu nutzen und auf Ihrer Website einzusetzen. Eines der offensichtlichsten Beispiele ist die Verwendung von Karten-APIs, um benutzerdefinierte Karten auf Ihren Seiten anzuzeigen.

Sehen wir uns ein [einfaches Mapquest-API-Beispiel](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/mapquest) an und nutzen es, um zu veranschaulichen, wie sich Drittanbieter-APIs von Browser-APIs unterscheiden.

> [!NOTE]
> Sie möchten vielleicht einfach [alle unsere Codebeispiele](/de/docs/Learn#getting_our_code_examples) auf einmal erhalten, in diesem Fall können Sie einfach im Repository nach den benötigten Beispielfiles in jedem Abschnitt suchen.

### Sie befinden sich auf Servern von Drittanbietern

Browser-APIs sind in den Browser eingebaut — Sie können direkt in JavaScript auf sie zugreifen. Beispielsweise wird auf die Web Audio API, die wir [im Einführungsartikel](/de/docs/Learn/JavaScript/Client-side_web_APIs/Introduction#how_do_apis_work) gesehen haben, mit dem nativen [`AudioContext`](/de/docs/Web/API/AudioContext)-Objekt zugegriffen. Zum Beispiel:

```js
const audioCtx = new AudioContext();
// …
const audioElement = document.querySelector("audio");
// …
const audioSource = audioCtx.createMediaElementSource(audioElement);
// etc.
```

Drittanbieter-APIs hingegen befinden sich auf Servern von Drittanbietern. Um von JavaScript darauf zuzugreifen, müssen Sie zunächst eine Verbindung zur API-Funktionalität herstellen und sie auf Ihrer Seite verfügbar machen. Dies beinhaltet in der Regel zunächst das Verlinken zu einer JavaScript-Bibliothek auf dem Server über ein {{htmlelement("script")}}-Element, wie in unserem Mapquest-Beispiel zu sehen:

```html
<script
  src="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.js"
  defer></script>
<link
  rel="stylesheet"
  href="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.css" />
```

Sie können dann mit der Nutzung der in dieser Bibliothek verfügbaren Objekte beginnen. Zum Beispiel:

```js
const map = L.mapquest.map("map", {
  center: [53.480759, -2.242631],
  layers: L.mapquest.tileLayer("map"),
  zoom: 12,
});
```

Hier erstellen wir eine Variable, um die Karteninformationen zu speichern, und erstellen dann mit der Methode `mapquest.map()` eine neue Karte, die als Parameter die ID eines {{htmlelement("div")}}-Elements entgegennimmt, in dem die Karte angezeigt werden soll ('map'), und ein Optionsobjekt, das die Details der anzuzeigenden spezifischen Karte enthält. In diesem Fall spezifizieren wir die Koordinaten des Kartenmittelpunkts, eine Kartenschicht des Typs `map` zur Anzeige (erstellt mit der Methode `mapquest.tileLayer()`) und den Standard-Zoomlevel.

Dies sind alle Informationen, die die Mapquest-API benötigt, um eine einfache Karte zu plotten. Der Server, mit dem Sie eine Verbindung herstellen, übernimmt alle komplizierten Dinge wie das Anzeigen der richtigen Kartenkacheln für den dargestellten Bereich usw.

> [!NOTE]
> Einige APIs handhaben den Zugriff auf ihre Funktionalität etwas anders und erfordern, dass der Entwickler eine HTTP-Anfrage an ein spezifisches URL-Muster stellt, um Daten abzurufen. Diese werden [RESTful-APIs genannt — wir zeigen später ein Beispiel](#a_restful_api_%e2%80%94_nytimes).

### Sie erfordern in der Regel API-Schlüssel

Die Sicherheit bei Browser-APIs wird in der Regel durch Berechtigungsaufforderungen gehandhabt, wie [in unserem ersten Artikel diskutiert](/de/docs/Learn/JavaScript/Client-side_web_APIs/Introduction#they_have_additional_security_mechanisms_where_appropriate). Der Zweck dieser Aufforderungen ist, dass der Benutzer weiß, was auf den von ihm besuchten Websites passiert, und weniger wahrscheinlich Opfer von jemandem wird, der eine API auf böswillige Weise verwendet.

Drittanbieter-APIs haben ein leicht abweichendes Berechtigungssystem — sie verwenden in der Regel Entwicklerschlüssel, um Entwicklern Zugang zur API-Funktionalität zu gewähren, was eher dem Schutz des API-Anbieters als dem Benutzer dient.

Im Mapquest-API-Beispiel finden Sie eine Zeile, die folgendermaßen aussieht:

```js
L.mapquest.key = "YOUR-API-KEY-HERE";
```

Diese Zeile gibt einen API- oder Entwicklerschlüssel an, der in Ihrer Anwendung verwendet wird — der Entwickler der Anwendung muss einen Schlüssel beantragen und ihn dann in seinem Code einfügen, um Zugang zur API-Funktionalität zu erhalten. In unserem Beispiel haben wir nur einen Platzhalter bereitgestellt.

> [!NOTE]
> Wenn Sie Ihre eigenen Beispiele erstellen, verwenden Sie Ihren eigenen API-Schlüssel anstelle eines Platzhalters.

Andere APIs verlangen möglicherweise, dass Sie den Schlüssel auf eine etwas andere Weise einfügen, aber das Muster ist bei den meisten relativ ähnlich.

Das Erfordern eines Schlüssels ermöglicht es dem API-Anbieter, die Nutzer der API für ihr Handeln verantwortlich zu machen. Wenn der Entwickler sich für einen Schlüssel registriert hat, ist er dem API-Anbieter bekannt, und es können Maßnahmen ergriffen werden, wenn er beginnt, etwas Schädliches mit der API zu tun (wie beispielsweise den Standort von Personen zu verfolgen oder zu versuchen, die API mit einer Vielzahl von Anfragen zu überfluten, um deren Funktion zu stoppen). Die einfachste Maßnahme wäre es, einfach ihre API-Berechtigungen zu widerrufen.

## Erweiterung des Mapquest-Beispiels

Lassen Sie uns dem Mapquest-Beispiel mehr Funktionalität hinzufügen, um zu zeigen, wie man einige andere Funktionen der API verwendet.

1. Um diesen Abschnitt zu beginnen, machen Sie sich eine Kopie der [Mapquest-Starterdatei](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/mapquest/start/index.html) in einem neuen Verzeichnis. Wenn Sie das [Beispiele-Repository bereits geklont](/de/docs/Learn#getting_our_code_examples) haben, haben Sie bereits eine Kopie dieser Datei, die Sie im Verzeichnis _javascript/apis/third-party-apis/mapquest/start_ finden können.
2. Als nächstes müssen Sie zur [Mapquest-Entwicklerseite](https://developer.mapquest.com/) gehen, ein Konto erstellen und dann einen Entwicklerschlüssel erstellen, den Sie mit Ihrem Beispiel verwenden. (Zum Zeitpunkt des Schreibens wurde er auf der Seite als "consumer key" bezeichnet, und der Schlüssel-Erstellungsprozess fragte auch nach einer optionalen "callback URL". Sie müssen hier keine URL angeben: Lassen Sie das Feld einfach leer.)
3. Öffnen Sie Ihre Starterdatei und ersetzen Sie den API-Schlüssel-Platzhalter durch Ihren Schlüssel.

### Ändern des Kartentyps

Es gibt eine Reihe von verschiedenen Kartentypen, die mit der Mapquest-API angezeigt werden können. Um dies zu tun, finden Sie die folgende Zeile:

```js
layers: L.mapquest.tileLayer("map");
```

Versuchen Sie, `'map'` in `'hybrid'` zu ändern, um eine Karte im Hybrid-Stil anzuzeigen. Probieren Sie auch einige andere Werte aus. Die [Referenzseite für `tileLayer`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-tile-layer/) zeigt die verschiedenen verfügbaren Optionen sowie viele weitere Informationen.

### Hinzufügen von verschiedenen Bedienelementen

Die Karte verfügt über eine Reihe von verschiedenen Bedienelementen; standardmäßig wird nur ein Zoom-Bedienelement angezeigt. Sie können die verfügbaren Bedienelemente mit der Methode `map.addControl()` erweitern; fügen Sie dies Ihrem Code hinzu:

```js
map.addControl(L.mapquest.control());
```

Die [`mapquest.control()`-Methode](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-control/) erstellt einfach ein einfaches voll ausgestattetes Bedienelement-Set, das standardmäßig in der oberen rechten Ecke platziert wird. Sie können die Position anpassen, indem Sie ein Optionsobjekt als Parameter für das Bedienelement angeben, das eine `position`-Eigenschaft enthält, deren Wert eine Zeichenkette ist, die eine Position für das Bedienelement angibt. Probieren Sie dies zum Beispiel aus:

```js
map.addControl(L.mapquest.control({ position: "bottomright" }));
```

Es gibt andere verfügbare Arten von Bedienelementen, zum Beispiel [`mapquest.searchControl()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-search-control/) und [`mapquest.satelliteControl()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-satellite-control/), und einige sind recht komplex und leistungsfähig. Spielen Sie ein wenig herum und sehen Sie, was Sie erreichen können.

### Hinzufügen eines benutzerdefinierten Markers

Das Hinzufügen eines Markers (Icons) an einem bestimmten Punkt auf der Karte ist einfach — Sie verwenden einfach die Methode [`L.marker()`](https://leafletjs.com/reference.html#marker) (die in den zugehörigen Leaflet.js-Dokumenten dokumentiert zu sein scheint). Fügen Sie den folgenden Code Ihrem Beispiel hinzu, erneut innerhalb von `window.onload`:

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

Wie Sie sehen, nimmt dies im einfachsten Fall zwei Parameter an: ein Array, das die Koordinaten enthält, an denen der Marker angezeigt werden soll, und ein Optionsobjekt, das eine `icon`-Eigenschaft enthält, die das an dieser Stelle darzustellende Icon definiert.

Das Icon wird mit einer Methode [`mapquest.icons.marker()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-icons/) definiert, die, wie Sie sehen können, Informationen wie Farbe und Größe des Markers enthält.

Am Ende des ersten Methodenaufrufs verketten wir `.bindPopup('Das ist Manchester!')`, das den Inhalt definiert, der angezeigt wird, wenn der Marker angeklickt wird.

Schließlich verketten wir `.addTo(map)` ans Ende der Kette, um den Marker tatsächlich zur Karte hinzuzufügen.

Spielen Sie mit den anderen in der Dokumentation angegebenen Optionen herum und sehen Sie, was Sie erreichen können! Mapquest bietet einige ziemlich fortschrittliche Funktionalitäten wie Wegbeschreibungen, Suche usw.

> [!NOTE]
> Wenn Sie Probleme haben, das Beispiel zum Laufen zu bringen, überprüfen Sie Ihren Code mit unserer [fertigen Version](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/mapquest/finished/script.js).

## Eine RESTful API — NYTimes

Schauen wir uns nun ein weiteres API-Beispiel an — die [New York Times API](https://developer.nytimes.com/). Diese API ermöglicht es Ihnen, Nachrichtengeschichten-Informationen der New York Times abzurufen und auf Ihrer Website anzuzeigen. Diese Art von API wird als **RESTful API** bezeichnet — statt Daten mit den Funktionen einer JavaScript-Bibliothek wie bei Mapquest zu erhalten, holen wir die Daten über HTTP-Anfragen an spezifische URLs, mit Daten wie Suchbegriffen und anderen Eigenschaften, die in der URL kodiert sind (oft als URL-Parameter). Dies ist ein häufig anzutreffendes Muster bei APIs.

Im Folgenden führen wir Sie durch eine Übung, um Ihnen zu zeigen, wie Sie die NYTimes-API verwenden können, die auch eine allgemeinere Reihe von Schritten bereitstellt, denen Sie als Ansatz zur Arbeit mit neuen APIs folgen können.

### Finden Sie die Dokumentation

Wenn Sie eine Drittanbieter-API verwenden möchten, ist es wichtig, herauszufinden, wo sich die Dokumentation befindet, damit Sie herausfinden können, welche Funktionen die API bietet, wie Sie sie nutzen, usw. Die New York Times API-Dokumentation befindet sich unter <https://developer.nytimes.com/>.

### Holen Sie sich einen Entwicklerschlüssel

Die meisten APIs erfordern die Verwendung eines Entwicklerschlüssels aus Sicherheits- und Verantwortlichkeitsgründen. Um sich für einen NYTimes-API-Schlüssel anzumelden, folgen Sie den Anweisungen unter <https://developer.nytimes.com/get-started>.

1. Fordern Sie einen Schlüssel für die Artikel-Such-API an — erstellen Sie eine neue App und wählen Sie dies als die API, die Sie verwenden möchten (geben Sie einen Namen und eine Beschreibung an, schalten Sie den Schalter unter der "Article Search API" auf ON und klicken Sie anschließend auf "Create").
2. Holen Sie sich den API-Schlüssel von der resultierenden Seite.
3. Erstellen Sie nun zu Beginn des Beispiels eine Kopie aller Dateien im Verzeichnis [nytimes/start](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/nytimes/start). Wenn Sie das [Beispiele-Repository bereits geklont](/de/docs/Learn#getting_our_code_examples) haben, haben Sie bereits eine Kopie dieser Dateien, die Sie im Verzeichnis _javascript/apis/third-party-apis/nytimes/start_ finden können. Die Datei `script.js` enthält initial eine Reihe von Variablen, die für die Einrichtung des Beispiels benötigt werden; unten füllen wir die erforderliche Funktionalität aus.

Die App wird es Ihnen ermöglichen, einen Suchbegriff und optional Start- und Enddaten einzugeben, die dann verwendet werden, um die Artikel-Such-API abzufragen und die Suchergebnisse anzuzeigen.

![Ein Screenshot einer Beispielsuchanfrage und Suchergebnisse, wie sie von der New York Artikel-Such-API abgerufen werden.](nytimes-example.png)

### Verbinden Sie die API mit Ihrer App

Zuerst müssen Sie eine Verbindung zwischen der API und Ihrer App herstellen. Im Falle dieser API müssen Sie den API-Schlüssel jedes Mal als [get](/de/docs/Web/HTTP/Methods/GET)-Parameter einfügen, wenn Sie Daten vom Dienst mit der richtigen URL anfordern.

1. Finden Sie die folgende Zeile:

   ```js
   const key = "INSERT-YOUR-API-KEY-HERE";
   ```

   Ersetzen Sie den vorhandenen API-Schlüssel durch den tatsächlichen API-Schlüssel, den Sie im vorherigen Abschnitt erhalten haben.

2. Fügen Sie die folgende Zeile Ihrem JavaScript hinzu, unterhalb des Kommentars `// Event listeners to control the functionality`. Dies führt eine Funktion namens `submitSearch()` aus, wenn das Formular abgeschickt wird (der Button gedrückt wird).

   ```js
   searchForm.addEventListener("submit", submitSearch);
   ```

3. Fügen Sie nun die Funktionsdefinitionen `submitSearch()` und `fetchResults()` unter der vorherigen Zeile hinzu:

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

`submitSearch()` setzt die Seitennummer zunächst auf 0 zurück und ruft dann `fetchResults()` auf. Dies ruft zuerst [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem Ereignisobjekt auf, um zu verhindern, dass das Formular tatsächlich abgeschickt wird (was das Beispiel beschädigen würde). Dann verwenden wir einige String-Manipulationen, um die vollständige URL zusammenzustellen, an die wir die Anfrage stellen wollen. Wir beginnen mit der Zusammenstellung der Teile, die wir für dieses Demo als obligatorisch ansehen:

- Die Basis-URL (aus der Variablen `baseURL` genommen).
- Der API-Schlüssel, der im URL-Parameter `api-key` angegeben werden muss (der Wert stammt aus der Variablen `key`).
- Die Seitennummer, die im URL-Parameter `page` angegeben werden muss (der Wert kommt aus der Variablen `pageNumber`).
- Der Suchbegriff, der im URL-Parameter `q` angegeben werden muss (der Wert stammt aus dem Wert des Text-{{htmlelement("input")}}-Feldes `searchTerm`).
- Der Dokumenttyp, für den Ergebnisse zurückgegeben werden sollen, wie in einem Ausdruck angegeben, der über den URL-Parameter `fq` übergeben wird. In diesem Fall möchten wir Artikel zurückgeben.

Als nächstes verwenden wir ein Paar [`if ()`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisungen, um zu überprüfen, ob die Elemente `startDate` und `endDate` Werte enthalten. Wenn dies der Fall ist, hängen wir deren Werte an die URL an, die im URL-Parameter `begin_date` und `end_date` angegeben sind.

Eine vollständige URL würde schließlich so aussehen:

```url
https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=YOUR-API-KEY-HERE&page=0&q=cats&fq=document_type:("article")&begin_date=20170301&end_date=20170312
```

> [!NOTE]
> Weitere Details zu den möglichen URL-Parametern finden Sie in den [NYTimes-Entwicklerdokumenten](https://developer.nytimes.com/).

> [!NOTE]
> Das Beispiel hat eine rudimentäre Formular-Datenvalidierung — das Suchbegriffsfeld muss ausgefüllt sein, bevor das Formular eingereicht werden kann (erreicht durch das Attribut `required`), und die Datumsfelder haben `pattern`-Attribute angegeben, was bedeutet, dass sie nicht eingereicht werden, es sei denn, ihre Werte bestehen aus 8 Zahlen (`pattern="[0-9]{8}"`). Weitere Details dazu, wie diese funktionieren, finden Sie unter [Formular-Datenvalidierung](/de/docs/Learn/Forms/Form_validation).

### Anfordern von Daten von der API

Nun, da wir unsere URL konstruiert haben, stellen wir eine Anfrage dorthin. Wir werden dies mit der [Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch) tun.

Fügen Sie den folgenden Codeblock in die Funktion `fetchResults()` ein, direkt über der schließenden geschweiften Klammer:

```js
// Use fetch() to make the request to the API
fetch(url)
  .then((response) => response.json())
  .then((json) => displayResults(json))
  .catch((error) => console.error(`Error fetching data: ${error.message}`));
```

Hier führen wir die Anfrage durch, indem wir unsere Variable `url` an [`fetch()`](/de/docs/Web/API/Window/fetch) übergeben, den Antwortkörper mit der Funktion [`json()`](/de/docs/Web/API/Response/json) in JSON konvertieren und das resultierende JSON an die Funktion `displayResults()` übergeben, damit die Daten in unserer Benutzeroberfläche angezeigt werden können. Wir fangen auch Fehler ab und protokollieren sie, die geworfen werden könnten.

### Anzeigen der Daten

OK, schauen wir uns an, wie wir die Daten anzeigen. Fügen Sie die folgende Funktion unter Ihrer Funktion `fetchResults()` hinzu.

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

Hier ist eine Menge Code; lassen Sie uns ihn Schritt für Schritt erklären:

- Die [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife ist ein häufiges Muster, um alle Inhalte eines DOM-Elements zu löschen, in diesem Fall das {{htmlelement("section")}}-Element. Wir überprüfen ständig, ob das `<section>` ein erstes Kind hat, und wenn ja, entfernen wir das erste Kind. Die Schleife endet, wenn `<section>` keine Kinder mehr hat.
- Als nächstes setzen wir die Variable `articles` gleich `json.response.docs` — dies ist das Array, das alle Objekte enthält, die die durch die Suche zurückgegebenen Artikel darstellen. Dies geschieht nur, um den folgenden Code ein wenig einfacher zu machen.
- Der erste [`if ()`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Block überprüft, ob 10 Artikel zurückgeben werden (die API gibt bis zu 10 Artikel gleichzeitig zurück). Wenn ja, zeigen wir das {{htmlelement("nav")}} an, das die _Vorherige 10_/_Nächste 10_-Paginierungsknöpfe enthält. Wenn weniger als 10 Artikel zurückgegeben werden, passen sie alle auf eine Seite, daher müssen wir die Paginierungsknöpfe nicht anzeigen. Wir werden die Paginierungsfunktionalität im nächsten Abschnitt verdrahten.
- Der nächste `if ()`-Block überprüft, ob keine Artikel zurückgegeben werden. Wenn ja, versuchen wir nicht, etwas anzuzeigen — wir erstellen ein {{htmlelement("p")}}, das den Text „Keine Ergebnisse zurückgegeben“ enthält, und setzen es in das `<section>`.
- Wenn einige Artikel zurückgegeben werden, erstellen wir zunächst alle Elemente, die wir zur Anzeige jeder Nachrichtengeschichte verwenden möchten, fügen den richtigen Inhalt in jedes ein und setzen sie dann an den entsprechenden Stellen in das DOM ein. Um herauszufinden, welche Eigenschaften in den Artikel-Objekten die richtigen Daten zum Anzeigen enthielten, haben wir die Artikel-Such-API-Referenz konsultiert (siehe [NYTimes APIs](https://developer.nytimes.com/apis)). Die meisten dieser Vorgänge sind ziemlich offensichtlich, einige verdienen jedoch eine besondere Erwähnung:

  - Wir haben eine [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife verwendet, um alle Schlüsselwörter durchzugehen, die jedem Artikel zugeordnet sind, und jedes in sein eigenes {{htmlelement("span")}} innerhalb eines `<p>` einzufügen. Dies wurde getan, um es einfach zu machen, jedes einzelne zu stylen.
  - Wir haben einen `if ()`-Block (`if (current.multimedia.length > 0) { }`) verwendet, um zu überprüfen, ob jedem Artikel Bilder zugeordnet sind, da einige Geschichten keine haben. Wir zeigen nur das erste Bild an, wenn es existiert; andernfalls würde ein Fehler geworfen werden.

### Verdrahten der Paginierungsbuttons

Um die Paginierungsbuttons funktionieren zu lassen, erhöhen (oder verringern) wir den Wert der Variablen `pageNumber` und führen dann die Abrufanforderung erneut mit dem neuen Wert als URL-Parameter `page` aus. Dies funktioniert, weil die NYTimes-API nur 10 Ergebnisse gleichzeitig zurückgibt — wenn mehr als 10 Ergebnisse verfügbar sind, gibt sie die ersten 10 (0-9) zurück, wenn der URL-Parameter `page` auf 0 gesetzt ist (oder gar nicht einbezogen wird — 0 ist der Standardwert), die nächsten 10 (10-19), wenn er auf 1 gesetzt ist, usw.

Dies ermöglicht es uns, eine vereinfachte Paginierungsfunktion zu schreiben.

1. Fügen Sie unter dem vorhandenen [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Aufruf diese beiden neuen hinzu, die die Funktionen `nextPage()` und `previousPage()` aufrufen, wenn die entsprechenden Buttons geklickt werden:

   ```js
   nextBtn.addEventListener("click", nextPage);
   previousBtn.addEventListener("click", previousPage);
   ```

2. Fügen Sie unter Ihrer vorangehenden Ergänzung die beiden Funktion hinzu — fügen Sie diesen Code jetzt hinzu:

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

   Die zweite Funktion arbeitet nahezu genau umgekehrt, aber wir müssen auch den zusätzlichen Schritt unternehmen, um zu überprüfen, ob `pageNumber` nicht bereits Null ist, bevor sie verringert wird — wenn die Abrufanfrage mit einem negativen URL-Parameter `page` läuft, könnte dies Fehler verursachen. Wenn die `pageNumber` bereits 0 ist, [`return`](/de/docs/Web/JavaScript/Reference/Statements/return) wir aus der Funktion — wenn wir uns bereits auf der ersten Seite befinden, benötigen wir die gleichen Ergebnisse nicht noch einmal.

> [!NOTE]
> Sie finden unseren [fertigen NYTimes-API-Beispielcode auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/nytimes/finished/index.html) (auch [siehe es live hier](https://mdn.github.io/learning-area/javascript/apis/third-party-apis/nytimes/finished/)).

## YouTube-Beispiel

Wir haben auch ein weiteres Beispiel für Sie erstellt, um es zu studieren und davon zu lernen — sehen Sie sich unser [YouTube-Videosuche-Beispiel](https://mdn.github.io/learning-area/javascript/apis/third-party-apis/youtube/) an. Dies verwendet zwei verwandte APIs:

- Die [YouTube Data API](https://developers.google.com/youtube/v3/docs/), um YouTube-Videos zu suchen und Ergebnisse zurückzugeben.
- Die [YouTube IFrame Player API](https://developers.google.com/youtube/iframe_api_reference), um die zurückgegebenen Video-Beispiele in IFrame-Videoplayern anzuzeigen, sodass Sie sie ansehen können.

Dieses Beispiel ist interessant, da es zeigt, wie zwei verwandte Drittanbieter-APIs zusammen verwendet werden, um eine App zu erstellen. Die erste ist eine RESTful-API, während die zweite mehr wie Mapquest funktioniert (mit API-spezifischen Methoden usw.). Zu beachten ist jedoch, dass beide APIs eine JavaScript-Bibliothek erfordern, die auf die Seite angewendet wird. Die RESTful-API hat Funktionen, die für das Durchführen der HTTP-Anfragen und das Zurückgeben der Ergebnisse verfügbar sind.

![Ein Screenshot einer Beispiel-YouTube-Video-Suche unter Verwendung zweier verwandter APIs. Die linke Seite des Bildes hat eine Beispiel-Suchanfrage unter Verwendung der YouTube-Daten-API. Die rechte Seite des Bildes zeigt die Suchergebnisse unter Verwendung der Youtube-Iframe-Player-API.](youtube-example.png)

Wir werden in diesem Artikel nicht viel mehr über dieses Beispiel sagen — [der Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/youtube) enthält detaillierte Kommentare, die erklären, wie es funktioniert.

Um es zum Laufen zu bringen, müssen Sie:

- Die [YouTube Data API Übersicht](https://developers.google.com/youtube/v3/getting-started) Dokumentation lesen.
- Stellen Sie sicher, dass Sie die [Seite für aktivierte APIs](https://console.cloud.google.com/apis/enabled) besuchen, und in der Liste der APIs sicherstellen, dass der Status für die YouTube Data API v3 eingeschaltet ist.
- Einen API-Schlüssel von [Google Cloud](https://cloud.google.com/) erhalten.
- Finden Sie den String `ENTER-API-KEY-HERE` im Quellcode und ersetzen Sie ihn durch Ihren API-Schlüssel.
- Führen Sie das Beispiel über einen Webserver aus. Es wird nicht funktionieren, wenn Sie es einfach direkt im Browser ausführen (d.h. über eine `file://` URL).

## Zusammenfassung

Dieser Artikel hat Ihnen eine nützliche Einführung in die Nutzung von Drittanbieter-APIs geliefert, um Funktionalitäten zu Ihren Websites hinzuzufügen.

{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Fetching_data", "Learn/JavaScript/Client-side_web_APIs/Drawing_graphics", "Learn/JavaScript/Client-side_web_APIs")}}
