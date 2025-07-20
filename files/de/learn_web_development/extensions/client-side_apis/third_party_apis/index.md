---
title: Drittanbieter-APIs
slug: Learn_web_development/Extensions/Client-side_APIs/Third_party_APIs
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

{{PreviousMenu("Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}

Die bisher behandelten APIs sind im Browser eingebaut, aber nicht alle APIs sind es. Viele große Websites und Dienste wie Google Maps, Twitter, Facebook, PayPal usw. bieten APIs an, die es Entwicklern ermöglichen, ihre Daten (z. B. Ihre Twitter-Streams auf Ihrem Blog anzuzeigen) oder Dienste (z. B. Facebook-Login für die Anmeldung Ihrer Benutzer zu verwenden) zu nutzen. Dieser Artikel beleuchtet die Unterschiede zwischen Browser-APIs und Drittanbieter-APIs und zeigt einige typische Anwendungen der letzteren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">JavaScript-Objektgrundlagen</a> und die grundlegende API-Abdeckung, wie z. B. <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Skripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Konzepte hinter Drittanbieter-APIs und damit verbundenen Mustern wie API-Schlüsseln.</li>
          <li>Verwendung einer Drittanbieter-Karten-API.</li>
          <li>Verwendung einer RESTful-API.</li>
          <li>Verwendung von Googles YouTube-APIs.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was sind Drittanbieter-APIs?

Drittanbieter-APIs sind APIs, die von Drittanbietern — in der Regel Unternehmen wie Facebook, Twitter oder Google — bereitgestellt werden, um Ihnen zu ermöglichen, deren Funktionalität über JavaScript zu nutzen und auf Ihrer Seite einzusetzen. Eines der offensichtlichsten Beispiele ist die Verwendung von Karten-APIs, um benutzerdefinierte Karten auf Ihren Seiten anzuzeigen.

Werfen wir einen Blick auf ein [einfaches Beispiel der Mapquest-API](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/mapquest) und nutzen es, um zu veranschaulichen, wie sich Drittanbieter-APIs von Browser-APIs unterscheiden.

### Sie befinden sich auf Drittanbieterservern

Browser-APIs sind in den Browser eingebaut — Sie können sofort über JavaScript darauf zugreifen. Zum Beispiel wird die Web Audio API, die wir [im einführenden Artikel](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction#how_do_apis_work) behandelt haben, über das native [`AudioContext`](/de/docs/Web/API/AudioContext)-Objekt genutzt. Zum Beispiel:

```js
const audioCtx = new AudioContext();
// …
const audioElement = document.querySelector("audio");
// …
const audioSource = audioCtx.createMediaElementSource(audioElement);
// etc.
```

Drittanbieter-APIs hingegen befinden sich auf Drittanbieterservern. Um über JavaScript darauf zuzugreifen, müssen Sie zuerst die Verbindung zur API-Funktionalität herstellen und sie auf Ihrer Seite verfügbar machen. Dies beinhaltet typischerweise das Verlinken zu einer auf dem Server verfügbaren JavaScript-Bibliothek über ein {{htmlelement("script")}}-Element, wie in unserem Mapquest-Beispiel zu sehen:

```html
<script
  src="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.js"
  defer></script>
<link
  rel="stylesheet"
  href="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.css" />
```

Sie können dann beginnen, die in dieser Bibliothek verfügbaren Objekte zu verwenden. Zum Beispiel:

```js
const map = L.mapquest.map("map", {
  center: [53.480759, -2.242631],
  layers: L.mapquest.tileLayer("map"),
  zoom: 12,
});
```

Hier erstellen wir eine Variable, um die Karteninformationen zu speichern, und dann eine neue Karte mit der `mapquest.map()`-Methode, die als Parameter die ID eines {{htmlelement("div")}}-Elements annimmt, in dem Sie die Karte anzeigen möchten ('map'), und ein Optionsobjekt, das die Details der spezifischen Karte enthält, die wir anzeigen möchten. In diesem Fall geben wir die Koordinaten des Kartenmittelpunkts, eine Kartenebene des Typs `map` (erstellt mit der `mapquest.tileLayer()`-Methode) und das Standard-Zoomniveau an.

Dies sind alle Informationen, die die Mapquest-API benötigt, um eine einfache Karte zu zeichnen. Der Server, mit dem Sie eine Verbindung herstellen, kümmert sich um alle komplizierten Dinge, wie das Anzeigen der richtigen Kartenkacheln für das angezeigte Gebiet usw.

> [!NOTE]
> Einige APIs handhaben den Zugriff auf ihre Funktionalität etwas anders, indem sie vom Entwickler verlangen, eine HTTP-Anfrage an ein bestimmtes URL-Muster zu stellen, um Daten abzurufen. Diese werden als [RESTful APIs bezeichnet — wir zeigen später ein Beispiel](#a_restful_api_%e2%80%94_nytimes).

### Sie benötigen normalerweise API-Schlüssel

Die Sicherheit für Browser-APIs wird in der Regel durch Berechtigungsabfragen gehandhabt, wie [in unserem ersten Artikel diskutiert](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction#they_have_additional_security_mechanisms_where_appropriate). Der Zweck dieser Abfragen ist es, dass der Benutzer weiß, was auf den von ihm besuchten Webseiten vor sich geht, und weniger anfällig für Personen ist, die eine API auf böswillige Weise verwenden.

Drittanbieter-APIs haben ein etwas anderes Berechtigungssystem — sie verwenden in der Regel Entwicklerschlüssel, um Entwicklern den Zugriff auf die API-Funktionalität zu erlauben, was eher darauf abzielt, den API-Anbieter als den Benutzer zu schützen.

Sie finden eine Zeile ähnlich der folgenden im Mapquest-API-Beispiel:

```js
L.mapquest.key = "YOUR-API-KEY-HERE";
```

Diese Zeile gibt einen API- oder Entwicklerschlüssel an, um ihn in Ihrer Anwendung zu verwenden — der Entwickler der Anwendung muss einen Schlüssel beantragen und ihn in seinen Code einfügen, um Zugriff auf die Funktionalität der API zu erhalten. In unserem Beispiel haben wir nur einen Platzhalter bereitgestellt.

> [!NOTE]
> Beim Erstellen Ihrer eigenen Beispiele verwenden Sie Ihren eigenen API-Schlüssel anstelle eines Platzhalters.

Andere APIs erfordern möglicherweise, dass Sie den Schlüssel auf eine etwas andere Weise einfügen, aber das Muster ist für die meisten von ihnen relativ ähnlich.

Ein Schlüssel ermöglicht es dem API-Anbieter, die Benutzer der API für ihre Aktionen verantwortlich zu machen. Wenn der Entwickler sich für einen Schlüssel registriert hat, ist er dem API-Anbieter bekannt, und es können Maßnahmen ergriffen werden, wenn er beginnt, böswillige Dinge mit der API zu tun (wie die Standortverfolgung von Personen oder das Versuchen, die API mit einer Flut von Anfragen zu überladen, um sie lahmzulegen). Die einfachste Maßnahme wäre, einfach ihre API-Berechtigungen zu widerrufen.

## Erweiterung des Mapquest-Beispiels

Lassen Sie uns dem Mapquest-Beispiel mehr Funktionalitäten hinzufügen, um zu zeigen, wie man einige andere Funktionen der API nutzt.

1. Um diesen Abschnitt zu starten, erstellen Sie sich eine Kopie der [Mapquest-Starterdatei](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/mapquest/start/index.html) in einem neuen Verzeichnis. Wenn Sie das [Beispiel-Repository](https://github.com/mdn/learning-area) bereits geklont haben, haben Sie bereits eine Kopie dieser Datei, die Sie im Verzeichnis _javascript/apis/third-party-apis/mapquest/start_ finden.
2. Als nächstes müssen Sie zur [Mapquest-Entwicklerseite](https://developer.mapquest.com/) gehen, ein Konto erstellen und einen Entwicklerschlüssel für Ihr Beispiel erstellen. (Zum Zeitpunkt der Erstellung wurde dies auf der Seite als "Consumer Key" bezeichnet, und der Schlüsselerstellungsprozess fragte auch nach einer optionalen "Callback-URL". Sie müssen hier keine URL angeben: Lassen Sie dieses Feld einfach leer.)
3. Öffnen Sie Ihre Startdatei und ersetzen Sie den Platzhalter für den API-Schlüssel durch Ihren Schlüssel.

### Ändern des Kartentyps

Es gibt eine Reihe verschiedener Kartentypen, die mit der Mapquest-API angezeigt werden können. Dazu finden Sie die folgende Zeile:

```js-nolint
layers: L.mapquest.tileLayer("map"),
```

Versuchen Sie, `'map'` zu `'hybrid'` zu ändern, um eine Hybrid-Karte anzuzeigen. Versuchen Sie auch einige andere Werte. Die [`tileLayer`-Referenzseite](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-tile-layer/) zeigt die verschiedenen verfügbaren Optionen sowie viele weitere Informationen.

### Hinzufügen verschiedener Steuerungen

Die Karte hat eine Reihe verschiedener Steuerungen; standardmäßig zeigt sie nur eine Zoom-Steuerung. Sie können die verfügbaren Steuerungen mit der Methode `map.addControl()` erweitern; fügen Sie dies zu Ihrem Code hinzu:

```js
map.addControl(L.mapquest.control());
```

Die [`mapquest.control()`-Methode](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-control/) erstellt einfach ein vollständiges Steuerelementset und wird standardmäßig in der oberen rechten Ecke platziert. Sie können die Position anpassen, indem Sie ein Optionsobjekt als Parameter für die Steuerung angeben, das eine `position`-Eigenschaft enthält, deren Wert eine Zeichenfolge ist, die eine Position für die Steuerung angibt. Versuchen Sie dies zum Beispiel:

```js
map.addControl(L.mapquest.control({ position: "bottomright" }));
```

Es gibt andere Arten von Steuerungen, zum Beispiel [`mapquest.searchControl()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-search-control/) und [`mapquest.satelliteControl()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-satellite-control/), und einige sind ziemlich komplex und leistungsstark. Probieren Sie diese aus und sehen Sie, was Sie entwickeln können.

### Hinzufügen eines benutzerdefinierten Markers

Das Hinzufügen eines Markers (Icons) an einem bestimmten Punkt auf der Karte ist einfach — Sie verwenden einfach die [`L.marker()`](https://leafletjs.com/reference.html#marker)-Methode (die anscheinend in der zugehörigen Leaflet.js-Dokumentation dokumentiert ist). Fügen Sie den folgenden Code zu Ihrem Beispiel hinzu, wiederum innerhalb von `window.onload`:

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

Wie Sie sehen können, nimmt dies einfach zwei Parameter an, ein Array mit den Koordinaten, an denen der Marker angezeigt werden soll, und ein Optionsobjekt, das eine `icon`-Eigenschaft enthält, die das Symbol definiert, das an diesem Punkt angezeigt werden soll.

Das Symbol wird mit einer [`mapquest.icons.marker()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-icons/)-Methode definiert, die, wie Sie sehen können, Informationen wie Farbe und Größe des Markers enthält.

Am Ende des ersten Methodenaufrufs verketten wir `.bindPopup('This is Manchester!')`, das Inhalt definiert, der angezeigt wird, wenn der Marker angeklickt wird.

Schließlich verketten wir `.addTo(map)` an das Ende der Kette, um den Marker tatsächlich auf der Karte hinzuzufügen.

Spielen Sie mit den anderen in der Dokumentation gezeigten Optionen herum und sehen Sie, was Sie entwickeln können! Mapquest bietet einige ziemlich fortschrittliche Funktionen wie Richtungen, Suche usw.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, das Beispiel zum Laufen zu bringen, überprüfen Sie Ihren Code mit unserer [fertigen Version](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/mapquest/finished/script.js).

## Eine RESTful API — NYTimes

Schauen wir uns nun ein weiteres API-Beispiel an — die [New York Times API](https://developer.nytimes.com/). Diese API ermöglicht es Ihnen, Informationen zu New York Times-Nachrichten abzurufen und auf Ihrer Website anzuzeigen. Dieser API-Typ wird als **RESTful API** bezeichnet — anstatt Daten unter Verwendung der Funktionen einer JavaScript-Bibliothek wie bei Mapquest abzurufen, holen wir Daten, indem wir HTTP-Anfragen an bestimmte URLs stellen, bei denen Daten wie Suchbegriffe und andere Eigenschaften in der URL kodiert sind (oft als URL-Parameter). Dies ist ein häufiges Muster, das Sie bei APIs erleben werden.

Im Folgenden führen wir Sie durch eine Übung, um Ihnen zu zeigen, wie Sie die NYTimes API verwenden, die auch einen allgemeineren Satz von Schritten bietet, den Sie als Ansatz für die Arbeit mit neuen APIs verwenden können.

### Finden Sie die Dokumentation

Wenn Sie eine Drittanbieter-API verwenden möchten, ist es unerlässlich, die Dokumentation zu finden, um herauszufinden, welche Funktionen die API hat, wie Sie sie verwenden usw. Die New York Times API-Dokumentation finden Sie unter <https://developer.nytimes.com/>.

### Holen Sie sich einen Entwicklerschlüssel

Die meisten APIs erfordern, dass Sie eine Art Entwicklerschlüssel verwenden, aus Sicherheits- und Rechenschaftsgründen. Um sich für einen NYTimes API-Schlüssel anzumelden, folgen Sie den Anweisungen unter <https://developer.nytimes.com/get-started>.

1. Lassen Sie uns einen Schlüssel für die Artikel-Suche-API anfordern — erstellen Sie eine neue App, indem Sie dies als die gewünschte API auswählen (geben Sie einen Namen und eine Beschreibung ein, setzen Sie den Schalter unter „Article Search API“ auf die Position „EIN“ und klicken Sie dann auf „Erstellen“).
2. Holen Sie sich den API-Schlüssel von der resultierenden Seite.
3. Um das Beispiel zu starten, erstellen Sie eine Kopie aller Dateien im Verzeichnis [nytimes/start](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/nytimes/start). Wenn Sie das [Beispiel-Repository](https://github.com/mdn/learning-area) bereits geklont haben, haben Sie bereits eine Kopie dieser Dateien, die Sie im Verzeichnis _javascript/apis/third-party-apis/nytimes/start_ finden. Anfänglich enthält die `script.js`-Datei eine Reihe von Variablen, die für die Einrichtung des Beispiels benötigt werden; im Folgenden füllen wir die erforderliche Funktionalität aus.

Die App ermöglicht Ihnen schließlich, einen Suchbegriff und optionale Start- und Enddaten einzugeben, die dann verwendet werden, um die Artikel-Suche-API abzufragen und die Suchergebnisse anzuzeigen.

![Ein Screenshot einer Beispiel-Suchanfrage und Suchergebnisse, wie sie aus der New York Artikel-Suche-API abgerufen wurden.](nytimes-example.png)

### Verbinden Sie die API mit Ihrer App

Zuerst müssen Sie eine Verbindung zwischen der API und Ihrer App herstellen. Im Fall dieser API müssen Sie den API-Schlüssel als [get](/de/docs/Web/HTTP/Reference/Methods/GET)-Parameter jedes Mal einbeziehen, wenn Sie Daten vom Dienst über die korrekte URL anfordern.

1. Finden Sie die folgende Zeile:

   ```js
   const key = "INSERT-YOUR-API-KEY-HERE";
   ```

   Ersetzen Sie den vorhandenen API-Schlüssel durch den tatsächlichen API-Schlüssel, den Sie im vorherigen Abschnitt erhalten haben.

2. Fügen Sie die folgende Zeile zu Ihrem JavaScript hinzu, unterhalb des Kommentars `// Event listeners to control the functionality`. Dies führt eine Funktion namens `submitSearch()` aus, wenn das Formular gesendet wird (der Button gedrückt wird).

   ```js
   searchForm.addEventListener("submit", submitSearch);
   ```

3. Fügen Sie nun die Funktionen `submitSearch()` und `fetchResults()` zu Ihren Definitionsfunktionen hinzu, unter der vorherigen Zeile:

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

`submitSearch()` setzt die Seitennummer zunächst auf 0 zurück und ruft dann `fetchResults()` auf. Diese Funktion ruft zunächst [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem Ereignisobjekt auf, um zu verhindern, dass das Formular tatsächlich gesendet wird (was das Beispiel zum Abbrechen bringen würde). Als nächstes verwenden wir einige Zeichenfolgenmanipulationen, um die vollständige URL zusammenzusetzen, an die wir die Anfrage senden werden. Wir beginnen, indem wir die Teile zusammenstellen, die wir für dieses Demo als obligatorisch erachten:

- Die Basis-URL (aus der Variablen `baseURL` genommen).
- Der API-Schlüssel, der im URL-Parameter `api-key` angegeben werden muss (der Wert wird aus der Variablen `key` genommen).
- Die Seitennummer, die im URL-Parameter `page` angegeben werden muss (der Wert wird aus der Variablen `pageNumber` genommen).
- Der Suchbegriff, der im URL-Parameter `q` angegeben werden muss (der Wert wird aus dem Wert des Textfeldes `searchTerm` {{htmlelement("input")}} genommen).
- Der Dokumenttyp, für den Ergebnisse zurückgegeben werden sollen, muss in einem Ausdruck angegeben werden, der über den URL-Parameter `fq` übergeben wird. In diesem Fall möchten wir Artikel zurückgeben.

Als nächstes verwenden wir ein paar [`if ()`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisungen, um zu überprüfen, ob die Elemente `startDate` und `endDate` Werte enthalten. Wenn sie das tun, fügen wir deren Werte der URL hinzu, die in den URL-Parametern `begin_date` und `end_date` angegeben sind.

Eine vollständige URL würde schließlich so aussehen:

```url
https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=YOUR-API-KEY-HERE&page=0&q=cats&fq=document_type:("article")&begin_date=20170301&end_date=20170312
```

> [!NOTE]
> Weitere Details zu den inbegriffenen URL-Parametern finden Sie in den [NYTimes-Entwickler-Dokumenten](https://developer.nytimes.com/).

> [!NOTE]
> Das Beispiel enthält rudimentäre Formular-Datenvalidierung — das Suchbegriff-Feld muss ausgefüllt sein, bevor das Formular gesendet werden kann (erreicht durch das `required`-Attribut), und die Datumsfelder haben `pattern`-Attribute, was bedeutet, dass sie nicht gesendet werden, es sei denn, ihre Werte bestehen aus 8 Zahlen ( `pattern="[0-9]{8}"`). Weitere Informationen dazu finden Sie unter [Formular-Datenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

### Daten von der API anfordern

Jetzt haben wir unsere URL konstruiert, lassen Sie uns eine Anforderung an diese senden. Wir machen das mit der [Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch).

Fügen Sie den folgenden Codeblock in die `fetchResults()`-Funktion ein, knapp über der schließenden geschweiften Klammer:

```js
// Use fetch() to make the request to the API
fetch(url)
  .then((response) => response.json())
  .then((json) => displayResults(json))
  .catch((error) => console.error(`Error fetching data: ${error.message}`));
```

Hier führen wir die Anforderung aus, indem wir unsere `url`-Variable an [`fetch()`](/de/docs/Web/API/Window/fetch) übergeben, den Antwort-Körper mithilfe der [`json()`](/de/docs/Web/API/Response/json)-Funktion in JSON umwandeln und dann das resultierende JSON an die Funktion `displayResults()` weitergeben, damit die Daten in unserer Benutzerschnittstelle angezeigt werden können. Wir fangen auch Fehler ab und protokollieren sie, die möglicherweise geworfen werden.

### Anzeigen der Daten

Schauen wir uns an, wie wir die Daten anzeigen werden. Fügen Sie die folgende Funktion unter Ihrer `fetchResults()`-Funktion hinzu.

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

Es gibt hier eine Menge Code; lassen Sie uns ihn Schritt für Schritt erklären:

- Die [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife ist ein häufiges Muster, um alle Inhalte eines DOM-Elements zu löschen, in diesem Fall das {{htmlelement("section")}}-Element. Wir prüfen weiterhin, ob das `<section>`-Element ein erstes Kind hat, und wenn ja, entfernen wir das erste Kind. Die Schleife endet, wenn `<section>` keine Kinder mehr hat.
- Als nächstes setzen wir die Variable `articles` auf `json.response.docs` gleich — dies ist das Array, das alle Objekte enthält, die die von der Suche zurückgegebenen Artikel darstellen. Dies geschieht nur, um den folgenden Code etwas einfacher zu gestalten.
- Der erste [`if ()`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Block prüft, ob 10 Artikel zurückgegeben werden (die API gibt bis zu 10 Artikel gleichzeitig zurück). Wenn ja, zeigen wir das {{htmlelement("nav")}} an, das die Paginierungsschaltflächen _Vorherige 10_/_Nächste 10_ enthält. Wenn weniger als 10 Artikel zurückgegeben werden, passen alle auf eine Seite, sodass wir die Paginierungsschaltflächen nicht anzeigen müssen. Wir werden die Paginierungsfunktionalität im nächsten Abschnitt erstellen.
- Der nächste `if ()`-Block prüft, ob keine Artikel zurückgegeben werden. Wenn dies der Fall ist, versuchen wir nicht, irgendetwas anzuzeigen — wir erstellen ein {{htmlelement("p")}} mit dem Text "No results returned." und fügen es in das `<section>` ein.
- Wenn einige Artikel zurückgegeben werden, erstellen wir zunächst alle Elemente, die wir verwenden möchten, um jede Nachrichtengeschichte anzuzeigen, füllen den richtigen Inhalt in jedes ein und fügen sie dann an den entsprechenden Stellen in den DOM ein. Um herauszufinden, welche Eigenschaften in den Artikelobjekten die richtigen Daten zum Anzeigen enthielten, haben wir die Artikel-Suche-API-Referenz konsultiert (siehe [NYTimes APIs](https://developer.nytimes.com/apis)). Die meisten dieser Operationen sind ziemlich offensichtlich, aber ein paar sind erwähnenswert:
  - Wir haben eine [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife verwendet, um alle Schlüsselwörter, die jedem Artikel zugeordnet sind, durchzugehen und jedes in seinem eigenen {{htmlelement("span")}} in einem `<p>` einzufügen. Dies wurde getan, um es einfach zu machen, jedes zu stylen.
  - Wir haben einen `if ()`-Block (`if (current.multimedia.length > 0) { }`) verwendet, um zu überprüfen, ob jedem Artikel Bilder zugeordnet sind, da einige Geschichten keine haben. Wir zeigen nur das erste Bild an, wenn es existiert; andernfalls würde ein Fehler geworfen.

### Verdrahtung der Paginierungsschaltflächen

Um die Paginierungsschaltflächen funktionsfähig zu machen, erhöhen (oder verringern) wir den Wert der Variablen `pageNumber` und führen die Abruffunktion erneut mit dem neuen Wert im Parameter der Seiten-URL aus. Dies funktioniert, weil die NYTimes-API nur 10 Ergebnisse gleichzeitig zurückgibt — wenn mehr als 10 Ergebnisse verfügbar sind, gibt sie die ersten 10 (0-9) zurück, wenn der `page`-URL-Parameter auf 0 gesetzt ist (oder überhaupt nicht angegeben ist — 0 ist der Standardwert), die nächsten 10 (10-19), wenn er auf 1 gesetzt ist, und so weiter.

Dies ermöglicht es uns, eine einfache Paginierungsfunktion zu schreiben.

1. Fügen Sie unter dem vorhandenen [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Aufruf diese beiden neuen hinzu, die dazu führen, dass die Funktionen `nextPage()` und `previousPage()` aufgerufen werden, wenn die entsprechenden Schaltflächen angeklickt werden:

   ```js
   nextBtn.addEventListener("click", nextPage);
   previousBtn.addEventListener("click", previousPage);
   ```

2. Unter Ihrer vorherigen Ergänzung lassen Sie uns die beiden Funktionen definieren — fügen Sie nun diesen Code hinzu:

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

   Die erste Funktion erhöht die Variable `pageNumber`, und führt dann die Funktion `fetchResults()` erneut aus, um die Ergebnisse der nächsten Seite anzuzeigen.

   Die zweite Funktion funktioniert fast genauso, nur in umgekehrter Richtung, aber wir müssen auch den zusätzlichen Schritt unternehmen, zu überprüfen, ob `pageNumber` nicht bereits null ist, bevor wir sie verringern — wenn die Abruffunktion mit einem negativen `page`-URL-Parameter ausgeführt wird, können Fehler auftreten. Wenn `pageNumber` bereits 0 ist, geben wir mit dem Schlüsselwort [`return`](/de/docs/Web/JavaScript/Reference/Statements/return) aus der Funktion zurück — wenn wir bereits auf der ersten Seite sind, müssen wir dieselben Ergebnisse nicht erneut laden.

> [!NOTE]
> Sie können unseren [fertigen NYTimes-API-Beispielcode auf GitHub finden](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/nytimes/finished/index.html) (siehe auch die [Live-Version hier](https://mdn.github.io/learning-area/javascript/apis/third-party-apis/nytimes/finished/)).

## YouTube-Beispiel

Wir haben auch ein weiteres Beispiel für Sie erstellt, um es zu studieren und zu lernen — siehe unser [YouTube-Videosuche-Beispiel](https://mdn.github.io/learning-area/javascript/apis/third-party-apis/youtube/). Diese verwendet zwei verwandte APIs:

- Die [YouTube Data API](https://developers.google.com/youtube/v3/docs/) zur Suche nach YouTube-Videos und zum Zurückgeben von Ergebnissen.
- Die [YouTube IFrame Player API](https://developers.google.com/youtube/iframe_api_reference), um die zurückgegebenen Video-Beispiele innerhalb von IFrame-Video-Playern anzuzeigen, damit Sie sie ansehen können.

Dieses Beispiel ist interessant, weil es zeigt, wie zwei verwandte Drittanbieter-APIs zusammen verwendet werden, um eine App zu erstellen. Die erste ist eine RESTful-API, während die zweite eher wie Mapquest funktioniert (mit API-spezifischen Methoden usw.). Es ist jedoch bemerkenswert, dass beide APIs eine JavaScript-Bibliothek erfordern, die auf die Seite angewendet werden muss. Die RESTful-API hat verfügbare Funktionen, um die HTTP-Anfragen zu handhaben und die Ergebnisse zurückzugeben.

![Ein Screenshot einer Beispiel-YouTube-Videosuche unter Verwendung von zwei verwandten APIs. Die linke Seite des Bildes hat eine Beispiel-Suchabfrage unter Verwendung der YouTube-Daten-API. Die rechte Seite des Bildes zeigt die Suchergebnisse unter Verwendung der YouTube Iframe Player API.](youtube-example.png)

Wir werden nicht viel mehr zu diesem Beispiel im Artikel sagen — [der Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/youtube) enthält detaillierte Kommentare, die erklären, wie er funktioniert.

Um ihn zum Laufen zu bringen, müssen Sie:

- Lesen Sie die [YouTube Data API Übersicht](https://developers.google.com/youtube/v3/getting-started) -Dokumentation.
- Besuchen Sie die [Seite für aktivierte APIs](https://console.cloud.google.com/apis/enabled) und stellen Sie sicher, dass der Status für die YouTube Data API v3 auf EIN steht.
- Holen Sie sich einen API-Schlüssel von [Google Cloud](https://cloud.google.com/).
- Finden Sie den String `ENTER-API-KEY-HERE` im Quellcode, und ersetzen Sie ihn durch Ihren API-Schlüssel.
- Führen Sie das Beispiel über einen Webserver aus. Es funktioniert nicht, wenn Sie es direkt im Browser ausführen (d.h. über eine `file://`-URL).

## Zusammenfassung

Dieser Artikel hat Ihnen eine nützliche Einführung in die Verwendung von Drittanbieter-APIs gegeben, um Funktionalitäten zu Ihren Websites hinzuzufügen.

{{PreviousMenu("Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}
