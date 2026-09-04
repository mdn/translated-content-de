---
title: Drittanbieter-APIs
slug: Learn_web_development/Extensions/Client-side_APIs/Third_party_APIs
l10n:
  sourceCommit: f4c14731a1a157fc8d8f7357ac4d74d14a7d7fb5
---

{{PreviousMenu("Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}

Die bisher behandelten APIs sind im Browser integriert, aber nicht alle APIs sind das. Viele große Websites und Dienste wie Google Maps, Twitter, Facebook, PayPal etc. bieten APIs an, die es Entwicklern ermöglichen, deren Daten (z.B. das Anzeigen Ihres Twitter-Feeds auf Ihrem Blog) oder Dienste (z.B. das Verwenden des Facebook-Logins zur Anmeldung Ihrer Benutzer) zu nutzen. Dieser Artikel beleuchtet den Unterschied zwischen Browser-APIs und Drittanbieter-APIs und zeigt einige typische Anwendungen der letzteren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">Grundlagen von JavaScript-Objekten</a> und grundlegende API-Themen wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Konzepte hinter Drittanbieter-APIs und zugehörige Muster wie API-Schlüssel.</li>
          <li>Verwendung einer Drittanbieter-Karten-API.</li>
          <li>Verwendung einer RESTful-API.</li>
          <li>Verwendung von Googles YouTube-APIs.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was sind Drittanbieter-APIs?

Drittanbieter-APIs sind von Drittparteien, in der Regel Unternehmen wie Facebook, Twitter oder Google, bereitgestellte APIs, die es Ihnen ermöglichen, deren Funktionalität über JavaScript zu nutzen und auf Ihrer Website zu verwenden. Eines der offensichtlichsten Beispiele ist die Verwendung von Karten-APIs, um benutzerdefinierte Karten auf Ihren Seiten anzuzeigen.

Schauen wir uns ein [einfaches Mapquest-API-Beispiel](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/mapquest) an und nutzen es, um zu veranschaulichen, wie sich Drittanbieter-APIs von Browser-APIs unterscheiden.

### Sie befinden sich auf Servern von Drittanbietern

Browser-APIs sind in den Browser integriert — Sie können sofort von JavaScript aus auf sie zugreifen. Zum Beispiel wird die Web Audio API, die wir im [einleitenden Artikel](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction#how_do_apis_work) gesehen haben, über das native [`AudioContext`](/de/docs/Web/API/AudioContext)-Objekt aufgerufen. Beispiel:

```js
const audioCtx = new AudioContext();
// …
const audioElement = document.querySelector("audio");
// …
const audioSource = audioCtx.createMediaElementSource(audioElement);
// etc.
```

Drittanbieter-APIs hingegen befinden sich auf Servern von Drittanbietern. Um von JavaScript aus auf sie zuzugreifen, müssen Sie zunächst eine Verbindung zur API-Funktionalität herstellen und sie auf Ihrer Seite verfügbar machen. Dies erfolgt in der Regel durch das Verlinken zu einer auf dem Server verfügbaren JavaScript-Bibliothek über ein {{htmlelement("script")}}-Element, wie in unserem Mapquest-Beispiel zu sehen:

```html
<script
  src="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.js"
  defer></script>
<link
  rel="stylesheet"
  href="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.css" />
```

Dann können Sie die in dieser Bibliothek verfügbaren Objekte verwenden. Zum Beispiel:

```js
const map = L.mapquest.map("map", {
  center: [53.480759, -2.242631],
  layers: L.mapquest.tileLayer("map"),
  zoom: 12,
});
```

Hier erstellen wir eine Variable, um die Karteninformationen zu speichern, und erstellen dann eine neue Karte mit der Methode `mapquest.map()`, die als Parameter die ID eines {{htmlelement("div")}}-Elements erhält, in dem die Karte angezeigt werden soll ('map'), und ein Optionsobjekt mit den Details der anzuzeigenden Karte. In diesem Fall geben wir die Koordinaten des Kartenmittelpunkts, einen Kartentyp `map`, der mit der Methode `mapquest.tileLayer()` erstellt wird, und die Standardzoomstufe an.

Dies sind alle Informationen, die die Mapquest-API benötigt, um eine einfache Karte zu zeichnen. Der Server, zu dem Sie eine Verbindung herstellen, übernimmt alle komplizierten Aufgaben, wie das Anzeigen der richtigen Kartenteile für den angezeigten Bereich usw.

> [!NOTE]
> Einige APIs behandeln den Zugriff auf ihre Funktionalität etwas anders und erfordern vom Entwickler, eine HTTP-Anfrage an ein bestimmtes URL-Muster zu stellen, um Daten abzurufen. Diese werden [RESTful-APIs genannt — wir werden später ein Beispiel zeigen](#a_restful_api_%e2%80%94_nytimes).

### Sie erfordern in der Regel API-Schlüssel

Die Sicherheit für Browser-APIs wird häufig durch Berechtigungsaufforderungen gesteuert, wie in [unserem ersten Artikel](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction#they_have_additional_security_mechanisms_where_appropriate) diskutiert. Diese sollen den Benutzer darüber informieren, was auf den von ihm besuchten Websites geschieht, damit er weniger wahrscheinlich Opfer eines Missbrauchs einer API zu böswilligen Zwecken wird.

Drittanbieter-APIs haben ein etwas anderes Berechtigungssystem — sie verwenden in der Regel Entwicklerschlüssel, um Entwicklern den Zugriff auf die API-Funktionalität zu ermöglichen, was mehr dem Schutz des API-Anbieters als des Nutzers dient.

Sie werden im Mapquest-API-Beispiel eine Zeile ähnlich der folgenden finden:

```js
L.mapquest.key = "YOUR-API-KEY-HERE";
```

Diese Zeile gibt einen API- oder Entwicklerschlüssel an, der in Ihrer Anwendung verwendet wird — der Entwickler der Anwendung muss einen Antrag stellen, um einen Schlüssel zu erhalten, und diesen dann in seinem Code einfügen, um Zugriff auf die API-Funktionalität zu erhalten. In unserem Beispiel haben wir nur einen Platzhalter angegeben.

> [!NOTE]
> Wenn Sie eigene Beispiele erstellen, sollten Sie Ihren eigenen API-Schlüssel anstelle eines Platzhalters verwenden.

Andere APIs könnten erfordern, dass Sie den Schlüssel auf eine etwas andere Weise einfügen, aber das Muster ist bei den meisten ziemlich ähnlich.

Das Erfordern eines Schlüssels ermöglicht es dem API-Anbieter, die Nutzer der API für ihre Aktionen zur Verantwortung zu ziehen. Wenn der Entwickler sich für einen Schlüssel registriert hat, ist er dem API-Anbieter bekannt, und es können Maßnahmen ergriffen werden, wenn er beginnt, die API böswillig zu verwenden (z.B. um den Standort von Personen zu verfolgen oder die API mit einer Flut von Anfragen zu überlasten, um sie außer Betrieb zu setzen). Die einfachste Maßnahme wäre, einfach seine API-Berechtigungen zu widerrufen.

## Erweiterung des Mapquest-Beispiels

Fügen wir dem Mapquest-Beispiel weitere Funktionalitäten hinzu, um zu zeigen, wie einige andere Funktionen der API genutzt werden können.

1. Um diesen Abschnitt zu starten, machen Sie sich eine Kopie der [Mapquest-Starterdatei](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/mapquest/start/index.html) in einem neuen Verzeichnis. Wenn Sie das [Beispiel-Repository](https://github.com/mdn/learning-area) bereits geklont haben, werden Sie bereits eine Kopie dieser Datei haben, die Sie im Verzeichnis _javascript/apis/third-party-apis/mapquest/start_ finden können.
2. Als nächstes müssen Sie zur [Mapquest-Entwicklerseite](https://developer.mapquest.com/) gehen, ein Konto erstellen und dann einen Entwicklerschlüssel erstellen, um ihn mit Ihrem Beispiel zu verwenden. (Zum Zeitpunkt des Schreibens wurde er auf der Seite "Verbraucherschlüssel" genannt, und der Schlüssel-Erstellungsprozess fragte auch nach einer optionalen "Callback-URL". Sie brauchen hier keine URL anzugeben: lassen Sie sie einfach leer.)
3. Öffnen Sie Ihre Ausgangsdatei und ersetzen Sie den Platzhalter für den API-Schlüssel durch Ihren Schlüssel.

### Ändern des Kartentyps

Mit der Mapquest-API können verschiedene Kartenarten angezeigt werden. Dazu finden Sie folgende Zeile:

```js-nolint
layers: L.mapquest.tileLayer("map"),
```

Versuchen Sie, `'map'` in `'hybrid'` zu ändern, um eine Hybridkarte anzuzeigen. Probieren Sie auch einige andere Werte aus. Die [`tileLayer`-Referenzseite](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-tile-layer/) zeigt die verschiedenen verfügbaren Optionen sowie viele weitere Informationen.

### Hinzufügung verschiedener Bedienelemente

Die Karte verfügt über verschiedene Bedienelemente; standardmäßig wird nur ein Zoom-Steuerelement angezeigt. Sie können die verfügbaren Bedienelemente mit der Methode `map.addControl()` erweitern; fügen Sie dies Ihrem Code hinzu:

```js
map.addControl(L.mapquest.control());
```

Die [`mapquest.control()`-Methode](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-control/) erstellt einfach eine einfache, voll funktionsfähige Steuersatz, die standardmäßig in der oberen rechten Ecke platziert wird. Sie können die Position ändern, indem Sie ein Optionsobjekt als Parameter für das Steuerelement angeben, das eine `position`-Eigenschaft enthält, deren Wert eine Zeichenkette ist, die eine Position für das Steuerelement angibt. Probieren Sie zum Beispiel dies:

```js
map.addControl(L.mapquest.control({ position: "bottomright" }));
```

Es gibt andere Arten von Bedienelementen, zum Beispiel [`mapquest.searchControl()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-search-control/) und [`mapquest.satelliteControl()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-satellite-control/), und einige sind ziemlich komplex und leistungsstark. Probieren Sie herum und sehen Sie, was Sie entwickeln können.

### Hinzufügung eines benutzerdefinierten Markers

Das Hinzufügen eines Markers (Symbols) an einem bestimmten Punkt auf der Karte ist einfach — Sie verwenden einfach die [`L.marker()`](https://leafletjs.com/reference.html#marker)-Methode (dokumentiert in den entsprechenden Leaflet.js-Dokumentationen). Fügen Sie den folgenden Code Ihrem Beispiel hinzu, wieder innerhalb `window.onload`:

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

Wie Sie sehen können, nimmt dies im einfachsten Fall zwei Parameter: ein Array mit den Koordinaten, an denen der Marker angezeigt werden soll, und ein Optionsobjekt mit einer `icon`-Eigenschaft, die das Symbol definiert, das an diesem Punkt angezeigt werden soll.

Das Symbol wird mit einer [`mapquest.icons.marker()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-icons/)-Methode definiert, die Informationen wie die Farbe und Größe des Markers enthält.

An das Ende des ersten Methodenaufrufs hängen wir `.bindPopup('This is Manchester!')` an, was den Inhalt definiert, der angezeigt wird, wenn der Marker angeklickt wird.

Schließlich fügen wir `.addTo(map)` an das Ende der Kette an, um den Marker tatsächlich der Karte hinzuzufügen.

Probieren Sie die anderen in der Dokumentation gezeigten Optionen aus und sehen Sie, was Sie entwickeln können! Mapquest bietet einige ziemlich fortgeschrittene Funktionen, wie Wegbeschreibungen, Suchen usw.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, das Beispiel zum Laufen zu bringen, überprüfen Sie Ihren Code mit unserer [fertigen Version](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/mapquest/finished/script.js) ab.

## Eine RESTful-API — NYTimes

Nun schauen wir uns ein anderes API-Beispiel an — die [New York Times API](https://developer.nytimes.com/). Diese API ermöglicht es Ihnen, New York Times Nachrichtenstory-Informationen abzurufen und auf Ihrer Website anzuzeigen. Diese Art von API wird als **RESTful-API** bezeichnet — anstatt Daten mit den Funktionen einer JavaScript-Bibliothek wie bei Mapquest zu erhalten, erhalten wir Daten, indem wir HTTP-Anfragen an bestimmte URLs stellen, mit Daten wie Suchbegriffen und anderen Eigenschaften, die in der URL kodiert sind (oft als URL-Parameter). Dies ist ein häufiges Muster, dem Sie bei APIs begegnen werden.

Im Folgenden führen wir Sie durch eine Übung, um Ihnen zu zeigen, wie Sie die NYTimes API verwenden können, die auch eine allgemeinere Reihe von Schritten bereitstellt, denen Sie folgen können, um eine Vorgehensweise für die Arbeit mit neuen APIs zu entwickeln.

### Finden Sie die Dokumentation

Wenn Sie eine Drittanbieter-API verwenden möchten, ist es wichtig herauszufinden, wo die Dokumentation ist, damit Sie herausfinden können, welche Funktionen die API hat, wie Sie sie verwenden usw. Die New York Times API-Dokumentation befindet sich unter <https://developer.nytimes.com/>.

### Holen Sie sich einen Entwicklerschlüssel

Die meisten APIs verlangen von Ihnen, dass Sie eine Art Entwicklerschlüssel verwenden, aus Gründen der Sicherheit und Verantwortlichkeit. Um sich für einen NYTimes API-Schlüssel anzumelden, folgen Sie den Anweisungen unter <https://developer.nytimes.com/get-started>.

1. Fordern wir einen Schlüssel für die Article Search API an — erstellen Sie eine neue Anwendung, in der Sie diese API als zu verwendende API auswählen (füllen Sie einen Namen und eine Beschreibung aus, schalten Sie den Schalter unter dem "Article Search API" auf die Position ein und klicken Sie dann auf "Create").
2. Holen Sie sich den API-Schlüssel von der resultierenden Seite.
3. Um das Beispiel zu starten, machen Sie eine Kopie aller Dateien im Verzeichnis [nytimes/start](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/nytimes/start). Wenn Sie das [Beispiel-Repository](https://github.com/mdn/learning-area) bereits geklont haben, werden Sie bereits eine Kopie dieser Dateien haben, die Sie im Verzeichnis _javascript/apis/third-party-apis/nytimes/start_ finden können. Anfänglich enthält die Datei `script.js` eine Anzahl von Variablen, die für das Setup des Beispiels benötigt werden; im Folgenden werden wir die erforderliche Funktionalität einfügen.

Die App wird es Ihnen schließlich ermöglichen, einen Suchbegriff und optionale Start- und Enddaten einzugeben, die dann zur Abfrage der Article Search API verwendet werden und die Suchergebnisse angezeigt werden.

![Ein Screenshot einer Beispiel-Suchabfrage und Suchergebnisse, wie sie von der New York Article Search API abgerufen wurden.](nytimes-example.png)

### Verbinden der API mit Ihrer App

Zuerst müssen Sie eine Verbindung zwischen der API und Ihrer App herstellen. Im Fall dieser API müssen Sie den API-Schlüssel als [get](/de/docs/Web/HTTP/Reference/Methods/GET)-Parameter jedes Mal angeben, wenn Sie Daten von dem Dienst an der richtigen URL anfordern.

1. Finden Sie folgende Zeile:

   ```js
   const key = "INSERT-YOUR-API-KEY-HERE";
   ```

   Ersetzen Sie den bestehenden API-Schlüssel durch den tatsächlichen API-Schlüssel, den Sie im vorherigen Abschnitt erhalten haben.

2. Fügen Sie die folgende Zeile zu Ihrem JavaScript hinzu, unter dem Kommentar `// Event listeners to control the functionality`. Diese Zeile läuft eine Funktion namens `submitSearch()`, wenn das Formular eingereicht wird (der Button gedrückt wird).

   ```js
   searchForm.addEventListener("submit", submitSearch);
   ```

3. Fügen Sie jetzt die Definition der Funktionen `submitSearch()` und `fetchResults()` hinzu, unter der vorherigen Zeile:

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

`submitSearch()` setzt die Seitennummer zu Beginn auf 0 zurück und ruft dann `fetchResults()` auf. Es ruft zuerst [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) für das aufgerufene Eventobjekt auf, um zu verhindern, dass das Formular tatsächlich eingereicht wird (was das Beispiel brechen würde). Als nächstes verwenden wir etwas Zeichenkettenmanipulation, um die vollständige URL zusammenzusetzen, zu der wir die Anfrage stellen werden. Wir beginnen mit dem Zusammensetzen der Teile, die wir für dieses Demo als obligatorisch erachten:

- Die Basis-URL (aus der Variable `baseURL`).
- Der API-Schlüssel, der im URL-Parameter `api-key` angegeben werden muss (der Wert wird aus der Variable `key` genommen).
- Die Seitennummer, die im URL-Parameter `page` angegeben werden muss (der Wert wird aus der Variable `pageNumber` genommen).
- Der Suchbegriff, der im URL-Parameter `q` angegeben werden muss (der Wert wird aus dem Wert der Text-{{htmlelement("input")}} von `searchTerm` genommen).
- Der Dokumenttyp, für den Ergebnisse zurückgegeben werden sollen, wie in einem Ausdruck angegeben, der über den URL-Parameter `fq` übergeben wird. In diesem Fall möchten wir Artikel zurückgeben.

Als nächstes verwenden wir ein paar [`if ()`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisungen, um zu überprüfen, ob die Elemente `startDate` und `endDate` Werte enthalten. Falls ja, hängen wir ihre Werte an die URL an, die in den jeweiligen URL-Parametern `begin_date` und `end_date` angegeben sind.

Eine vollständige URL könnte schließlich so aussehen:

```url
https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=YOUR-API-KEY-HERE&page=0&q=cats&fq=document_type:("article")&begin_date=20170301&end_date=20170312
```

> [!NOTE]
> Weitere Details zu den URL-Parametern finden Sie in den [NYTimes-Entwicklerdokumenten](https://developer.nytimes.com/).

> [!NOTE]
> Das Beispiel hat eine rudimentäre Formular-Datenvalidierung — das Suchbegriffsfeld muss ausgefüllt sein, bevor das Formular eingereicht werden kann (erreicht durch das `required`-Attribut) und die Datumsfelder haben `pattern`-Attribute, das bedeutet, dass sie nicht übermittelt werden, es sei denn, ihre Werte bestehen aus 8 Zahlen (`pattern="[0-9]{8}"`). Siehe [Formular-Datenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) für weitere details.

### Anfordern von Daten von der API

Nun, da wir unsere URL erstellt haben, lassen Sie uns eine Anfrage an sie stellen. Wir werden dies mit [Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch) tun.

Fügen Sie den folgenden Codeblock in die Funktion `fetchResults()` ein, direkt über der schließenden geschweiften Klammer:

```js
// Use fetch() to make the request to the API
fetch(url)
  .then((response) => response.json())
  .then((json) => displayResults(json))
  .catch((error) => console.error(`Error fetching data: ${error.message}`));
```

Hier führen wir die Anfrage aus, indem wir unsere `url`-Variable an [`fetch()`](/de/docs/Web/API/Window/fetch) übergeben, den Antworttext in JSON konvertieren, indem wir die [`json()`](/de/docs/Web/API/Response/json)-Funktion nutzen, dann das resultierende JSON an die `displayResults()`-Funktion übergeben, sodass die Daten in unserem UI angezeigt werden können. Wir loggen auch alle möglicherweise auftretenden Fehler.

### Anzeigen der Daten

Schauen wir uns an, wie wir die Daten anzeigen. Fügen Sie die folgende Funktion unterhalb Ihrer `fetchResults()` Funktion ein.

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

Es gibt hier eine Menge Code; lassen Sie es uns Schritt für Schritt erklären:

- Die [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife ist ein gängiges Muster zum Löschen aller Inhalte eines DOM-Elements, in diesem Fall des {{htmlelement("section")}}-Elements. Wir überprüfen weiterhin, ob `<section>` ein erstes Kind hat, und wenn ja, entfernen wir das erste Kind. Die Schleife endet, wenn `<section>` keine Kinder mehr hat.
- Als nächstes setzen wir die Variable `articles` gleich `json.response.docs` — dies ist das Array, das alle Objekte enthält, die die von der Suche zurückgegebenen Artikel darstellen. Dies geschieht nur, um den folgenden Code etwas einfacher zu machen.
- Der erste [`if ()`](/de/docs/Web/JavaScript/Reference/Statements/if...else) Block überprüft, ob 10 Artikel zurückgegeben werden (die API gibt maximal 10 Artikel gleichzeitig zurück). Wenn ja, zeigen wir das {{htmlelement("nav")}} an, das die _Vorherigen 10_/_Nächsten 10_ Paginierungsschaltflächen enthält. Wenn weniger als 10 Artikel zurückgegeben werden, passen sie alle auf eine Seite, sodass wir die Paginierungs-Schaltflächen nicht anzeigen müssen. Wir werden die Paginierungsfunktion in den nächsten Abschnitt anwenden.
- Der nächste `if ()` Block überprüft, ob keine Artikel zurückgegeben werden. Falls ja, versuchen wir nicht, etwas anzuzeigen — wir erstellen ein {{htmlelement("p")}}, das den Text "Keine Ergebnisse zurückgegeben." enthält und fügen es in `<section>` ein.
- Wenn einige Artikel zurückgegeben werden, erstellen wir zuerst alle Elemente, die wir verwenden möchten, um jede Nachrichtenstory anzuzeigen, fügen die richtigen Inhalte in jedes ein, und fügen sie dann an den passenden Stellen im DOM ein. Um herauszufinden, welche Eigenschaften in den Artikelobjekten die richtigen Daten zur Anzeige enthalten, haben wir die Article Search API-Dokumentation konsultiert (siehe [NYTimes APIs](https://developer.nytimes.com/apis)). Die meisten dieser Operationen sind ziemlich offensichtlich, aber ein paar sind erwähnenswert:
  - Wir haben eine [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleife verwendet, um alle Schlüsselwörter durchzugehen, die jedem Artikel zugeordnet sind, und jedes in sein eigenes {{htmlelement("span")}} innerhalb eines `<p>` einzufügen. Dies wurde getan, um es einfach zu machen, jedes zu stylen.
  - Wir haben einen `if ()` Block (`if (current.multimedia.length > 0) { }`) verwendet, um zu überprüfen, ob jeder Artikel Bilder hat, da einige Geschichten keine haben. Wir zeigen nur das erste Bild an, falls es existiert; andernfalls würde ein Fehler geworfen.

### Verkabeln der Paginierungsschaltflächen

Um die Paginierungsschaltflächen funktionsfähig zu machen, erhöhen (oder verringern) wir den Wert der Variablen `pageNumber`, und führen dann erneut die Abrufanfrage mit dem neuen Wert durch, der im URL-Parameter "page" enthalten ist. Dies funktioniert, da die NYTimes API nur 10 Ergebnisse gleichzeitig zurückgibt — wenn mehr als 10 Ergebnisse verfügbar sind, wird sie die ersten 10 (0-9) zurückgeben, wenn der URL-Parameter `page` auf 0 gesetzt ist (oder gar nicht enthalten ist — 0 ist der Standardwert), die nächsten 10 (10-19), wenn er auf 1 gesetzt ist, und so weiter.

Dies ermöglicht es uns, eine vereinfachte Paginierungsfunktion zu schreiben.

1. Unter dem vorhandenen [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) Aufruf fügen Sie diese beiden neuen Aufrufe hinzu, die die Funktionen `nextPage()` und `previousPage()` auslösen, wenn die entsprechenden Schaltflächen geklickt werden:

   ```js
   nextBtn.addEventListener("click", nextPage);
   previousBtn.addEventListener("click", previousPage);
   ```

2. Unter Ihrer vorherigen Ergänzung lassen Sie uns die beiden Funktionen definieren — fügen Sie jetzt diesen Code hinzu:

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

   Die erste Funktion erhöht die Variable `pageNumber`, dann wird die Funktion `fetchResults()` erneut ausgeführt, um die Ergebnisse der nächsten Seite anzuzeigen.

   Die zweite Funktion funktioniert fast genauso umgekehrt, aber wir müssen den zusätzlichen Schritt unternehmen, zu überprüfen, dass `pageNumber` nicht bereits null ist, bevor wir sie verringern — wenn die Abrufanfrage mit einem negativen `page` URL-Parameter ausgeführt wird, könnte dies Fehler verursachen. Wenn `pageNumber` bereits 0 ist, geben wir mit [`return`](/de/docs/Web/JavaScript/Reference/Statements/return) aus der Funktion — wenn wir bereits auf der ersten Seite sind, brauchen wir dieselben Ergebnisse nicht erneut zu laden.

> [!NOTE]
> Sie finden unseren [fertigen NYTimes API-Beispielcode auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/nytimes/finished/index.html) (auch [hier live zu sehen](https://mdn.github.io/learning-area/javascript/apis/third-party-apis/nytimes/finished/)).

## YouTube-Beispiel

Wir haben auch ein weiteres Beispiel für Sie erstellt, um es zu studieren und daraus zu lernen — sehen Sie unser [YouTube-Video-Suche-Beispiel](https://mdn.github.io/learning-area/javascript/apis/third-party-apis/youtube/). Diese Verwendung nutzt zwei verwandte APIs:

- Die [YouTube Data API](https://developers.google.com/youtube/v3/docs/), um nach YouTube-Videos zu suchen und Ergebnisse zurückzugeben.
- Die [YouTube IFrame Player API](https://developers.google.com/youtube/iframe_api_reference), um die zurückgegebenen Video-Beispiele in IFrame-Video-Playern anzuzeigen, damit Sie sie ansehen können.

Dieses Beispiel ist interessant, weil es zwei verwandte Drittanbieter-APIs zeigt, die zusammen zur Erstellung einer Anwendung verwendet werden. Die erste ist eine RESTful-API, während die zweite eher wie Mapquest funktioniert (mit API-spezifischen Methoden usw.). Es ist jedoch bemerkenswert, dass beide APIs erfordern, dass eine JavaScript-Bibliothek auf die Seite angewendet wird. Die RESTful-API hat Funktionen zur Verfügung, um die HTTP-Anfragen zu bearbeitet und die Ergebnisse zurückzugeben.

![Ein Screenshot einer Beispiel-YouTube-Video-Suche mit zwei verwandten APIs. Die linke Seite des Bildes zeigt eine Beispiel-Suchabfrage mit der YouTube Data API. Die rechte Seite des Bildes zeigt die Suchergebnisse mit der YouTube IFrame Player API.](youtube-example.png)

Wir werden an dieser Stelle nicht viel mehr zu diesem Beispiel im Artikel sagen — [der Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/youtube) enthält detaillierte Kommentare, die erklären, wie es funktioniert.

Um es zum Laufen zu bringen, sollten Sie Folgendes tun:

- Lesen Sie die [YouTube Data API Übersicht](https://developers.google.com/youtube/v3/getting-started).
- Stellen Sie sicher, dass Sie die [aktivierten APIs-Seite](https://console.cloud.google.com/apis/enabled) aufrufen, und in der Liste der APIs sicherstellen, dass der Status für die YouTube Data API v3 auf EIN steht.
- Holen Sie sich einen API-Schlüssel von [Google Cloud](https://cloud.google.com/).
- Finden Sie den String `ENTER-API-KEY-HERE` im Quellcode und ersetzen Sie ihn durch Ihren API-Schlüssel.
- Führen Sie das Beispiel über einen Webserver aus. Es funktioniert nicht, wenn Sie es direkt im Browser ausführen (z.B. über eine `file://` URL).

## Zusammenfassung

Dieser Artikel hat Ihnen eine nützliche Einführung in die Nutzung von Drittanbieter-APIs gegeben, um Funktionen zu Ihren Webseiten hinzuzufügen.

{{PreviousMenu("Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}
