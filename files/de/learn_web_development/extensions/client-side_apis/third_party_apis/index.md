---
title: Third-Party-APIs
slug: Learn_web_development/Extensions/Client-side_APIs/Third_party_APIs
l10n:
  sourceCommit: e6d43da6c6d28a6ac92cdd47882809ffbdf987ce
---

{{PreviousMenu("Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}

Die bisher behandelten APIs sind im Browser eingebaut, aber nicht alle APIs sind das. Viele große Websites und Dienste wie Google Maps, Twitter, Facebook, PayPal usw. bieten APIs an, die es Entwicklern ermöglichen, ihre Daten (z. B. um Ihren Twitter-Stream auf Ihrem Blog anzuzeigen) oder Dienste (z. B. um das Facebook-Login für das Einloggen Ihrer Nutzer zu verwenden) zu nutzen. Dieser Artikel beleuchtet den Unterschied zwischen Browser-APIs und Drittanbieter-APIs und zeigt einige typische Einsatzmöglichkeiten der letzteren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere mit <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">JavaScript-Objekt-Grundlagen</a> und grundlegenden API-Themen wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Konzepte hinter Drittanbieter-APIs und damit verbundene Muster wie API-Schlüssel.</li>
          <li>Verwendung einer Drittanbieter-Karten-API.</li>
          <li>Verwendung einer RESTful-API.</li>
          <li>Nutzung der Google YouTube APIs.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was sind Drittanbieter-APIs?

Drittanbieter-APIs sind APIs, die von Drittanbietern – in der Regel Unternehmen wie Facebook, Twitter oder Google – bereitgestellt werden, um Ihnen zu ermöglichen, deren Funktionalität über JavaScript zu nutzen und auf Ihrer Website einzusetzen. Ein offensichtliches Beispiel ist die Verwendung von Karten-APIs, um benutzerdefinierte Karten auf Ihren Seiten anzuzeigen.

Sehen wir uns ein [einfaches Mapquest-API-Beispiel](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/mapquest) an und verwenden es, um zu veranschaulichen, wie sich Drittanbieter-APIs von Browser-APIs unterscheiden.

### Sie befinden sich auf Drittanbieter-Servern

Browser-APIs sind in den Browser integriert - Sie können sofort aus JavaScript auf sie zugreifen. Zum Beispiel wird die Web Audio API, die wir [im einführenden Artikel](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction#how_do_apis_work) gesehen haben, über das native [`AudioContext`](/de/docs/Web/API/AudioContext)-Objekt aufgerufen. Zum Beispiel:

```js
const audioCtx = new AudioContext();
// …
const audioElement = document.querySelector("audio");
// …
const audioSource = audioCtx.createMediaElementSource(audioElement);
// etc.
```

Drittanbieter-APIs hingegen befinden sich auf Drittanbieter-Servern. Um von JavaScript aus auf sie zuzugreifen, müssen Sie zuerst eine Verbindung zur API-Funktionalität herstellen und diese auf Ihrer Seite verfügbar machen. Dazu muss in der Regel zuerst eine JavaScript-Bibliothek über ein {{htmlelement("script")}}-Element, das auf dem Server verfügbar ist, verlinkt werden, wie in unserem Mapquest-Beispiel zu sehen:

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

Hier erstellen wir eine Variable, um die Karteninformationen zu speichern, und dann eine neue Karte mit der Methode `mapquest.map()`, die die ID eines {{htmlelement("div")}}-Elements als Parameter benötigt, in dem Sie die Karte anzeigen möchten ('map'), sowie ein Optionsobjekt, das die Details der abzubildenden Karte enthält. In diesem Fall geben wir die Koordinaten des Kartenmittelpunkts, eine Karte des Typs `map` zur Anzeige (erstellt mit der Methode `mapquest.tileLayer()`) sowie den Standard-Zoombereich an.

Dies sind alle Informationen, die die Mapquest-API benötigt, um eine einfache Karte zu zeichnen. Der Server, mit dem Sie verbunden sind, kümmert sich um die gesamte komplizierte Arbeit, wie das Anzeigen der richtigen Kartenkacheln für den angezeigten Bereich usw.

> [!NOTE]
> Einige APIs gewähren Zugriff auf ihre Funktionalität auf etwas andere Weise und erfordern, dass der Entwickler eine HTTP-Anfrage an ein bestimmtes URL-Muster stellt, um Daten abzurufen. Diese werden [RESTful APIs genannt – wir werden später ein Beispiel zeigen](#a_restful_api_%e2%80%94_nytimes).

### Sie erfordern normalerweise API-Schlüssel

Die Sicherheit von Browser-APIs wird in der Regel durch die Aufforderung von Berechtigungen gehandhabt, wie [in unserem ersten Artikel besprochen](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction#they_have_additional_security_mechanisms_where_appropriate). Diese haben den Zweck, dass der Benutzer weiß, was auf den Websites, die er besucht, vor sich geht, und ist weniger anfällig, Opfer eines böswilligen API-Gebrauchs zu werden.

Drittanbieter-APIs haben ein etwas anderes Berechtigungssystem – sie verwenden tendenziell Entwickler-Schlüssel, um Entwicklern Zugriff auf die API-Funktionalität zu gewähren. Dies schützt mehr den API-Anbieter als den Benutzer.

Im Mapquest-API-Beispiel finden Sie eine Zeile ähnlich der folgenden:

```js
L.mapquest.key = "YOUR-API-KEY-HERE";
```

Diese Zeile gibt einen API- oder Entwickler-Schlüssel an, den Sie in Ihrer Anwendung verwenden – der Entwickler muss einen Schlüssel beantragen und ihn dann in seinem Code einfügen, um Zugriff auf die API-Funktionalität zu erhalten. In unserem Beispiel haben wir lediglich einen Platzhalter bereitgestellt.

> [!NOTE]
> Bei der Erstellung eigener Beispiele verwenden Sie Ihren eigenen API-Schlüssel anstelle eines Platzhalters.

Andere APIs benötigen möglicherweise, dass Sie den Schlüssel auf eine etwas andere Weise einfügen, aber das Muster ist bei den meisten relativ ähnlich.

Das Erfordern eines Schlüssels ermöglicht es dem API-Anbieter, die Nutzer der API für ihre Handlungen verantwortlich zu machen. Wenn der Entwickler einen Schlüssel registriert hat, ist er dem API-Anbieter bekannt, und es können Maßnahmen ergriffen werden, wenn er beginnt, etwas Böswilliges mit der API zu tun (z. B. den Standort von Personen zu verfolgen oder zu versuchen, die API mit vielen Anfragen zu überlasten, um diese zu stoppen). Die einfachste Maßnahme wäre es, einfach ihre API-Berechtigungen zu widerrufen.

## Erweiterung des Mapquest-Beispiels

Lassen Sie uns das Mapquest-Beispiel um weitere Funktionen erweitern, um zu zeigen, wie man andere Funktionen der API nutzt.

1. Um diesen Abschnitt zu starten, erstellen Sie sich eine Kopie der [mapquest-Starterdatei](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/mapquest/start/index.html) in einem neuen Verzeichnis. Wenn Sie das [Beispiel-Repository](https://github.com/mdn/learning-area) bereits geklont haben, haben Sie bereits eine Kopie dieser Datei, die Sie im Verzeichnis _javascript/apis/third-party-apis/mapquest/start_ finden können.
2. Als Nächstes müssen Sie zur [Mapquest-Entwicklerseite](https://developer.mapquest.com/) gehen, ein Konto erstellen und dann einen Entwickler-Schlüssel für Ihr Beispiel erstellen. (Zum Zeitpunkt des Schreibens wurde dieser auf der Website als „consumer key“ bezeichnet, und der Schlüssel-Erstellungsprozess fragte auch nach einer optionalen „callback URL“. Diese brauchen Sie hier nicht auszufüllen: Lassen Sie sie einfach leer.)
3. Öffnen Sie Ihre Starterdatei und ersetzen Sie den API-Schlüssel-Platzhalter durch Ihren Schlüssel.

### Den Kartentyp ändern

Es gibt eine Reihe verschiedener Kartentypen, die mit der Mapquest-API angezeigt werden können. Dazu suchen Sie die folgende Zeile:

```js-nolint
layers: L.mapquest.tileLayer("map"),
```

Versuchen Sie, `'map'` in `'hybrid'` zu ändern, um eine Hybrid-Karte anzuzeigen. Versuchen Sie auch einige andere Werte. Die Seite zur [`tileLayer`-Referenz](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-tile-layer/) zeigt die verfügbaren Optionen sowie viele weitere Informationen.

### Andere Steuerelemente hinzufügen

Die Karte hat eine Reihe unterschiedlicher Steuerelemente; standardmäßig zeigt sie nur eine Zoom-Steuerung. Sie können die verfügbaren Steuerelemente mit der Methode `map.addControl()` erweitern; fügen Sie dies Ihrem Code hinzu:

```js
map.addControl(L.mapquest.control());
```

Die [`mapquest.control()`-Methode](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-control/) erstellt einfach einen einfachen, voll ausgestatteten Steuerungssatz, der standardmäßig in der oberen rechten Ecke platziert wird. Sie können die Position anpassen, indem Sie ein Optionsobjekt als Parameter für das Steuerungselement angeben, das eine `position`-Eigenschaft enthält, deren Wert eine Zeichenfolge mit einer Position für das Steuerungselement angibt. Versuchen Sie dies zum Beispiel:

```js
map.addControl(L.mapquest.control({ position: "bottomright" }));
```

Es gibt andere Arten von Steuerelementen, zum Beispiel [`mapquest.searchControl()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-search-control/) und [`mapquest.satelliteControl()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-satellite-control/), und einige sind ziemlich komplex und leistungsfähig. Spielen Sie damit herum und sehen Sie, was Sie entwickeln können.

### Einen benutzerdefinierten Marker hinzufügen

Einen Marker (Symbol) an einem bestimmten Punkt auf der Karte hinzuzufügen, ist einfach — Sie verwenden einfach die Methode [`L.marker()`](https://leafletjs.com/reference.html#marker) (die in der zugehörigen Leaflet.js-Dokumentation dokumentiert zu sein scheint). Fügen Sie den folgenden Code zu Ihrem Beispiel hinzu, wieder innerhalb von `window.onload`:

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

Wie Sie sehen, nimmt dies im einfachsten Fall zwei Parameter entgegen: ein Array mit den Koordinaten, an denen der Marker angezeigt werden soll, und ein Optionsobjekt mit einer `icon`-Eigenschaft, die das an diesem Punkt anzuzeigende Symbol definiert.

Das Symbol wird mit einer Methode [`mapquest.icons.marker()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-icons/) definiert, die, wie Sie sehen, Informationen wie Farbe und Größe des Markers enthält.

An das Ende des ersten Methodenaufrufs hängen wir `.bindPopup('This is Manchester!')`, das den Inhalt definiert, der angezeigt wird, wenn auf den Marker geklickt wird.

Schließlich hängen wir `.addTo(map)` an die Kette, um den Marker tatsächlich zur Karte hinzuzufügen.

Spielen Sie mit den anderen in der Dokumentation gezeigten Optionen herum und sehen Sie, was Sie entwickeln können! Mapquest bietet einige ziemlich fortgeschrittene Funktionen, wie Routen, Suche usw.

> [!NOTE]
> Wenn Sie Probleme haben, das Beispiel zum Laufen zu bringen, überprüfen Sie Ihren Code mit unserer [fertigen Version](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/mapquest/finished/script.js).

## Eine RESTful API — NYTimes

Schauen wir uns jetzt ein weiteres API-Beispiel an — die [New York Times API](https://developer.nytimes.com/). Diese API ermöglicht es Ihnen, Informationen über New York Times Nachrichten zu extrahieren und auf Ihrer Website anzuzeigen. Dieser API-Typ ist als **RESTful API** bekannt — anstatt Daten mit den Funktionen einer JavaScript-Bibliothek wie bei Mapquest abzurufen, erhalten wir Daten, indem wir HTTP-Anfragen an bestimmte URLs senden und Daten wie Suchbegriffe und andere Eigenschaften in der URL (oft als URL-Parameter) kodieren. Dieses Muster werden Sie häufig bei APIs antreffen.

Im Folgenden führen wir Sie durch eine Übung, um Ihnen zu zeigen, wie die NYTimes API verwendet wird, die auch eine allgemeinere Schritt-für-Schritt-Anleitung bereitstellt, die Sie als Ansatz für die Arbeit mit neuen APIs verwenden können.

### Suchen Sie die Dokumentation

Wenn Sie eine Drittanbieter-API verwenden möchten, ist es wichtig herauszufinden, wo sich die Dokumentation befindet, damit Sie herausfinden können, welche Funktionen die API hat und wie Sie diese verwenden können. Die New York Times API-Dokumentation befindet sich unter <https://developer.nytimes.com/>.

### Holen Sie sich einen Entwickler-Schlüssel

Die meisten APIs erfordern die Verwendung eines Entwickler-Schlüssels aus Sicherheits- und Verantwortungsgründen. Um sich für einen NYTimes API-Schlüssel anzumelden, folgen Sie den Anweisungen unter <https://developer.nytimes.com/get-started>.

1. Beantragen Sie einen Schlüssel für die Article Search API — erstellen Sie eine neue App, indem Sie diese API aus den verfügbaren Optionen auswählen (fügen Sie einen Namen und eine Beschreibung hinzu, schalten Sie den Schalter unter dem „Article Search API“ auf die On-Position und klicken Sie dann auf „Erstellen“).
2. Holen Sie sich den API-Schlüssel von der resultierenden Seite.
3. Um das Beispiel zu starten, erstellen Sie eine Kopie aller Dateien im Verzeichnis [nytimes/start](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/nytimes/start). Wenn Sie das [Beispiel-Repository](https://github.com/mdn/learning-area) bereits geklont haben, haben Sie bereits eine Kopie dieser Dateien, die Sie im Verzeichnis _javascript/apis/third-party-apis/nytimes/start_ finden können. Zunächst enthält die Datei `script.js` eine Reihe von Variablen, die für die Einrichtung des Beispiels benötigt werden; im Folgenden werden wir die erforderliche Funktionalität ausfüllen.

Die App ermöglicht es Ihnen, einen Suchbegriff und optionale Start- und Enddaten einzugeben, die sie dann verwenden wird, um die Article Search API abzufragen und die Suchergebnisse anzuzeigen.

![Ein Screenshot einer Beispiel-Suchanfrage und Suchergebnisse, die mit der New York Article Search API abgerufen wurden.](nytimes-example.png)

### Die API mit Ihrer App verbinden

Zuerst müssen Sie eine Verbindung zwischen der API und Ihrer App herstellen. Im Fall dieser API müssen Sie jedes Mal, wenn Sie Daten vom Dienst an der richtigen URL anfordern, den API-Key als [get](/de/docs/Web/HTTP/Reference/Methods/GET)-Parameter einfügen.

1. Finden Sie die folgende Zeile:

   ```js
   const key = "INSERT-YOUR-API-KEY-HERE";
   ```

   Ersetzen Sie den vorhandenen API-Schlüssel durch den tatsächlichen API-Schlüssel, den Sie im vorherigen Abschnitt erhalten haben.

2. Fügen Sie die folgende Zeile Ihrem JavaScript hinzu, unter dem Kommentar `// Event listeners to control the functionality`. Diese Zeile führt die Funktion `submitSearch()` aus, wenn das Formular übermittelt wird (der Button gedrückt ist).

   ```js
   searchForm.addEventListener("submit", submitSearch);
   ```

3. Fügen Sie nun die Funktionen `submitSearch()` und `fetchResults()` hinzu, unterhalb der vorherigen Zeile:

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

`submitSearch()` setzt die Seitenzahl zurück auf 0, um zu beginnen, und ruft dann `fetchResults()` auf. Zuerst wird [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem Ereignisobjekt aufgerufen, um zu verhindern, dass das Formular tatsächlich übermittelt wird (was das Beispiel kaputt machen würde). Dann verwenden wir ein wenig String-Manipulation, um die vollständige URL zusammenzustellen, zu der wir die Anfrage stellen werden. Wir beginnen damit, die Teile, die wir für dieses Demo als obligatorisch erachten, zusammenzufügen:

- Die Basis-URL (über die Variable `baseURL`).
- Der API-Schlüssel, der im URL-Parameter `api-key` spezifiziert werden muss (der Wert wird aus der Variablen `key` entnommen).
- Die Seitennummer, die im URL-Parameter `page` angegeben werden muss (der Wert wird aus der Variablen `pageNumber` entnommen).
- Der Suchbegriff, der im URL-Parameter `q` angegeben werden muss (der Wert wird aus dem Wert des Text-{{htmlelement("input")}} `searchTerm` entnommen).
- Den Dokumenttyp, für den Ergebnisse zurückgegeben werden sollen, wie in einem Ausdruck angegeben, der über den URL-Parameter `fq` übergeben wird. In diesem Fall möchten wir Artikel zurückgeben.

Als nächstes verwenden wir ein paar [`if ()`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisungen, um zu überprüfen, ob die Elemente `startDate` und `endDate` Werte enthalten, die auf ihnen ausgefüllt wurden. Wenn sie das tun, fügen wir ihre Werte zur URL hinzu, die in den URL-Parametern `begin_date` und `end_date` angegeben sind.

So könnte eine vollständige URL letztendlich wie folgt aussehen:

```url
https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=YOUR-API-KEY-HERE&page=0&q=cats&fq=document_type:("article")&begin_date=20170301&end_date=20170312
```

> [!NOTE]
> Weitere Details dazu, welche URL-Parameter enthalten sein können, finden Sie in den [NYTimes Entwicklerdokumenten](https://developer.nytimes.com/).

> [!NOTE]
> Das Beispiel hat rudimentäre Formular-Datenvalidierung – das Feld für den Suchbegriff muss ausgefüllt sein, bevor das Formular abgeschickt werden darf (erreicht durch das `required`-Attribut), und die Datumsfelder haben `pattern`-Attribute spezifiziert, was bedeutet, dass sie nicht übermittelt werden, es sei denn, ihre Werte bestehen aus 8 Zahlen (`pattern="[0-9]{8}"`). Siehe [Formular-Datenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) für weitere Details dazu, wie diese funktionieren.

### Daten von der API anfordern

Jetzt, da wir unsere URL konstruiert haben, lassen Sie uns eine Anfrage darüber stellen. Wir werden dies mit der [Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch) tun.

Fügen Sie den folgenden Codeblock in die Funktion `fetchResults()` ein, direkt über der abschließenden geschweiften Klammer:

```js
// Use fetch() to make the request to the API
fetch(url)
  .then((response) => response.json())
  .then((json) => displayResults(json))
  .catch((error) => console.error(`Error fetching data: ${error.message}`));
```

Hier führen wir die Anfrage aus, indem wir unsere Variable `url` an [`fetch()`](/de/docs/Web/API/Window/fetch) übergeben, den Antwortkörper mit der Funktion [`json()`](/de/docs/Web/API/Response/json) in JSON konvertieren und dann das resultierende JSON an die Funktion `displayResults()` übergeben, damit die Daten in unserer Benutzeroberfläche angezeigt werden können. Wir fangen auch etwaige Fehler ab, die geworfen werden könnten, und protokollieren diese.

### Die Daten anzeigen

OK, sehen wir uns an, wie wir die Daten anzeigen. Fügen Sie die folgende Funktion unterhalb Ihrer Funktion `fetchResults()` ein.

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

- Die [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife ist ein häufig verwendetes Muster, um alle Inhalte eines DOM-Elements zu löschen, in diesem Fall das {{htmlelement("section")}}-Element. Wir prüfen fortlaufend, ob das `<section>` ein erstes Kind hat, und wenn ja, entfernen wir das erste Kind. Die Schleife endet, wenn `<section>` keine Kinder mehr hat.
- Als nächstes setzen wir die Variable `articles` gleich `json.response.docs` — dies ist das Array, das alle Objekte enthält, die die durch die Suche zurückgegebenen Artikel darstellen. Dies wird gemacht, um den folgenden Code etwas einfacher zu machen.
- Der erste [`if ()`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Block prüft, ob 10 Artikel zurückgegeben werden (die API gibt bis zu 10 Artikel gleichzeitig zurück). Wenn ja, zeigen wir das {{htmlelement("nav")}} an, das die _Vorherige 10_/_Nächste 10_ Paginierungs-Buttons enthält. Wenn weniger als 10 Artikel zurückgegeben werden, passen sie alle auf eine Seite, daher müssen wir die Paginierungs-Buttons nicht anzeigen. Wir werden die Paginierungs-Funktionalität im nächsten Abschnitt anpassen.
- Der nächste `if ()` Block prüft, ob keine Artikel zurückgegeben werden. Wenn ja, versuchen wir nicht, etwas anzuzeigen – wir erstellen einen {{htmlelement("p")}} mit dem Text "No results returned." und fügen ihn in das `<section>` ein.
- Wenn einige Artikel zurückgegeben werden, erstellen wir zuerst alle Elemente, die wir verwenden möchten, um jede Nachricht darzustellen, fügen die richtigen Inhalte in jedes ein und fügen sie dann an den entsprechenden Stellen in das DOM ein. Um herauszufinden, welche Eigenschaften in den Artikel-Objekten die richtigen Daten zur Anzeige enthielten, konsultierten wir das Article Search API-Referenz (sehen Sie [NYTimes APIs](https://developer.nytimes.com/apis)). Die meisten dieser Operationen sind ziemlich offensichtlich, aber einige sind es wert, hervorgehoben zu werden:

  - Wir nutzten eine [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife, um durch alle Schlüsselwörter zu gehen, die mit jedem Artikel verknüpft sind, und jedes in einem eigenen {{htmlelement("span")}} in einem `<p>` einzufügen. Dies wurde gemacht, um es einfach zu machen, jedes zu stylen.
  - Wir nutzten einen `if ()` Block (`if (current.multimedia.length > 0) { }`), um zu prüfen, ob jeder Artikel ihm zugeordnete Bilder hat, da einige keine haben. Wir zeigen nur das erste Bild an, wenn es vorhanden ist; andernfalls würde ein Fehler geworfen werden.

### Die Paginierungs-Buttons anschließen

Um die Paginierungs-Buttons funktional zu machen, werden wir den Wert der Variable `pageNumber` inkrementieren (oder dekrementieren) und dann die Abrufanfrage mit dem neuen Wert erneut durchführen, der im URL-Parameter der Seite enthalten ist. Das funktioniert, weil die NYTimes API nur 10 Ergebnisse auf einmal zurückgibt — wenn mehr als 10 Ergebnisse verfügbar sind, wird sie die ersten 10 (0-9) zurückgeben, wenn der `page` URL-Parameter auf 0 gesetzt ist (oder gar nicht enthalten ist — 0 ist der Standardwert), die nächsten 10 (10-19), wenn er auf 1 gesetzt ist, usw.

Dies erlaubt uns, eine einfache Paginierungsfunktion zu schreiben.

1. Unter dem vorhandenen [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Aufruf fügen Sie diese beiden neuen ein, die bewirken, dass die Funktionen `nextPage()` und `previousPage()` aufgerufen werden, wenn die entsprechenden Buttons geklickt werden:

   ```js
   nextBtn.addEventListener("click", nextPage);
   previousBtn.addEventListener("click", previousPage);
   ```

2. Unter Ihrer vorherigen Ergänzung definieren Sie die zwei Funktionen — fügen Sie jetzt diesen Code hinzu:

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

   Die erste Funktion inkrementiert die Variable `pageNumber` und führt die Funktion `fetchResults()` erneut aus, um die Ergebnisse der nächsten Seite anzuzeigen.

   Die zweite Funktion funktioniert fast genauso, jedoch in umgekehrter Reihenfolge. Wir müssen außerdem den zusätzlichen Schritt unternehmen, zu prüfen, ob `pageNumber` nicht schon Null ist, bevor wir sie dekrementieren — wenn die Abrufanfrage mit einem negativen `page` URL-Parameter ausgeführt wird, könnte dies Fehler verursachen. Wenn `pageNumber` bereits 0 ist, [`return`](/de/docs/Web/JavaScript/Reference/Statements/return) wir aus der Funktion — wenn wir uns bereits auf der ersten Seite befinden, müssen wir dieselben Ergebnisse nicht erneut laden.

> [!NOTE]
> Sie können unseren [fertigen NYTimes API-Beispielcode auf GitHub finden](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/nytimes/finished/index.html) (siehe es auch [live hier in Aktion](https://mdn.github.io/learning-area/javascript/apis/third-party-apis/nytimes/finished/)).

## YouTube-Beispiel

Wir haben auch ein weiteres Beispiel für Sie erstellt, um es zu studieren und daraus zu lernen — sehen Sie unser [YouTube-Video-Suchbeispiel](https://mdn.github.io/learning-area/javascript/apis/third-party-apis/youtube/). Dieses verwendet zwei verwandte APIs:

- Die [YouTube Data API](https://developers.google.com/youtube/v3/docs/) zur Suche nach YouTube-Videos und zum Zurückgeben von Ergebnissen.
- Die [YouTube IFrame Player API](https://developers.google.com/youtube/iframe_api_reference), um die zurückgegebenen Video-Beispiele in IFrame-Videoplayern anzuzeigen, damit Sie sie ansehen können.

Dieses Beispiel ist interessant, weil es zeigt, wie zwei verwandte Drittanbieter-APIs zusammen genutzt werden, um eine App zu erstellen. Die erste ist eine RESTful-API, während die zweite eher wie Mapquest funktioniert (mit API-spezifischen Methoden usw.). Es ist jedoch wichtig zu beachten, dass beide APIs erfordern, dass eine JavaScript-Bibliothek auf die Seite angewendet wird. Die RESTful-API hat Funktionen zur Verfügung, die helfen, die HTTP-Anfragen zu stellen und die Ergebnisse zurückzugeben.

![Ein Screenshot einer beispielhaften YouTube-Video-Suche mit zwei verwandten APIs. Die linke Seite des Bildes zeigt eine Beispielsuchanfrage mit der YouTube Data API. Die rechte Seite des Bildes zeigt die Suchergebnisse mit der YouTube Iframe Player API.](youtube-example.png)

Wir werden nicht viel mehr über dieses Beispiel im Artikel sagen – [der Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/youtube) hat detaillierte Kommentare eingefügt, um zu erklären, wie es funktioniert.

Um es zum Laufen zu bringen, müssen Sie:

- Die [YouTube Data API Übersicht](https://developers.google.com/youtube/v3/getting-started) Dokumentation lesen.
- Sicherstellen, dass Sie die [aktivierte APIs-Seite](https://console.cloud.google.com/apis/enabled) besuchen, und in der Liste der APIs sicherstellen, dass der Status für die YouTube Data API v3 auf ON ist.
- Einen API-Schlüssel von [Google Cloud](https://cloud.google.com/) erhalten.
- Die Zeichenkette `ENTER-API-KEY-HERE` im Quellcode finden und durch Ihren API-Schlüssel ersetzen.
- Das Beispiel über einen Webserver ausführen. Es funktioniert nicht, wenn Sie es direkt im Browser ausführen (d.h. über eine `file://` URL).

## Zusammenfassung

Dieser Artikel hat Ihnen eine nützliche Einführung in die Nutzung von Drittanbieter-APIs gegeben, um Funktionen zu Ihren Websites hinzuzufügen.

{{PreviousMenu("Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}
