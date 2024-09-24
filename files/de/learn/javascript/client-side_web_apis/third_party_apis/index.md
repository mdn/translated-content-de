---
title: Drittanbieter-APIs
slug: Learn/JavaScript/Client-side_web_APIs/Third_party_APIs
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Fetching_data", "Learn/JavaScript/Client-side_web_APIs/Drawing_graphics", "Learn/JavaScript/Client-side_web_APIs")}}

Die APIs, die wir bisher behandelt haben, sind in den Browser integriert, aber nicht alle APIs sind es. Viele große Websites und Dienste wie Google Maps, Twitter, Facebook, PayPal usw. bieten APIs an, die es Entwicklern ermöglichen, ihre Daten (z.B. das Anzeigen Ihres Twitter-Streams auf Ihrem Blog) oder Dienste (z.B. die Verwendung des Facebook-Logins, um Ihre Nutzer anzumelden) zu nutzen. Dieser Artikel befasst sich mit dem Unterschied zwischen Browser-APIs und Drittanbieter-APIs und zeigt einige typische Verwendungen der letzteren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        JavaScript-Grundlagen (siehe
        <a href="/de/docs/Learn/JavaScript/First_steps">Erste Schritte</a>,
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
        Erlernen, wie Drittanbieter-APIs funktionieren und wie man sie zur Verbesserung Ihrer Websites verwendet.
      </td>
    </tr>
  </tbody>
</table>

## Was sind Drittanbieter-APIs?

Drittanbieter-APIs sind von Drittanbietern — in der Regel Unternehmen wie Facebook, Twitter oder Google — bereitgestellte APIs, die es Ihnen ermöglichen, deren Funktionalität über JavaScript zu nutzen und auf Ihrer Website einzusetzen. Ein offensichtliches Beispiel ist die Verwendung von Mapping-APIs, um benutzerdefinierte Karten auf Ihren Seiten anzuzeigen.

Sehen wir uns ein [einfaches Mapquest-API-Beispiel](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/mapquest) an und verwenden es, um zu veranschaulichen, wie sich Drittanbieter-APIs von Browser-APIs unterscheiden.

> [!NOTE]
> Sie möchten vielleicht einfach [alle unsere Codebeispiele](/de/docs/Learn#getting_our_code_examples) auf einmal erhalten; in diesem Fall können Sie dann einfach das Repository nach den Beispieldateien durchsuchen, die Sie in jedem Abschnitt benötigen.

### Sie befinden sich auf Drittanbieter-Servern

Browser-APIs sind in den Browser integriert — Sie können sofort von JavaScript aus auf sie zugreifen. Zum Beispiel wird die Web Audio API, die wir im [Einführungsartikel gesehen haben](/de/docs/Learn/JavaScript/Client-side_web_APIs/Introduction#how_do_apis_work), mit dem nativen {{domxref("AudioContext")}}-Objekt aufgerufen. Zum Beispiel:

```js
const audioCtx = new AudioContext();
// …
const audioElement = document.querySelector("audio");
// …
const audioSource = audioCtx.createMediaElementSource(audioElement);
// etc.
```

Drittanbieter-APIs hingegen befinden sich auf Drittanbieter-Servern. Um von JavaScript aus auf sie zuzugreifen, müssen Sie zuerst eine Verbindung zur API-Funktionalität herstellen und sie auf Ihrer Seite verfügbar machen. Dies geschieht typischerweise, indem zuerst über ein {{htmlelement("script")}}-Element auf eine JavaScript-Bibliothek zugegriffen wird, die auf dem Server verfügbar ist, wie in unserem Mapquest-Beispiel gezeigt:

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

Hier erstellen wir eine Variable, um die Karteninformationen zu speichern und dann mit der `mapquest.map()`-Methode eine neue Karte zu erstellen. Diese Methode nimmt als Parameter die ID eines {{htmlelement("div")}}-Elements, in dem die Karte angezeigt werden soll ('map'), und ein Optionsobjekt, das die Details der speziellen Karte enthält, die wir anzeigen möchten. In diesem Fall geben wir die Koordinaten des Kartenmittelpunkts, eine Kartenebene vom Typ `map` (erstellt mit der `mapquest.tileLayer()`-Methode) und den Standard-Zoom-Level an.

Dies sind alle Informationen, die die Mapquest-API benötigt, um eine einfache Karte zu erstellen. Der Server, mit dem Sie eine Verbindung herstellen, bearbeitet die komplizierten Aufgaben, wie das Anzeigen der korrekten Kartenkacheln für den angezeigten Bereich.

> [!NOTE]
> Einige APIs handhaben den Zugriff auf ihre Funktionalität etwas anders, indem sie vom Entwickler verlangen, eine HTTP-Anfrage an ein bestimmtes URL-Muster zu senden, um Daten abzurufen. Diese werden [RESTful APIs genannt — wir zeigen später ein Beispiel](#a_restful_api_%e2%80%94_nytimes).

### Sie erfordern normalerweise API-Schlüssel

Die Sicherheit für Browser-APIs wird in der Regel durch Genehmigungsabfragen gehandhabt, wie im [ersten Artikel besprochen](/de/docs/Learn/JavaScript/Client-side_web_APIs/Introduction#they_have_additional_security_mechanisms_where_appropriate). Der Zweck hiervon ist, dass der Nutzer weiß, was auf den von ihnen besuchten Websites vor sich geht, und somit weniger wahrscheinlich einem böswilligen API-Einsatz zum Opfer fällt.

Drittanbieter-APIs haben ein etwas anderes Berechtigungssystem — sie neigen dazu, Entwickler-Schlüssel zu verwenden, um Entwicklern Zugriff auf die API-Funktionalität zu gewähren, was mehr dazu dient, den API-Anbieter zu schützen als den Nutzer.

Sie werden eine Zeile finden, die der folgenden im Mapquest-API-Beispiel ähnelt:

```js
L.mapquest.key = "YOUR-API-KEY-HERE";
```

Diese Zeile gibt einen API- oder Entwickler-Schlüssel an, der in Ihrer Anwendung verwendet wird — der Entwickler der Anwendung muss einen Schlüssel beantragen und ihn dann in seinem Code einfügen, um Zugriff auf die Funktionen der API zu erhalten. In unserem Beispiel haben wir einfach einen Platzhalter bereitgestellt.

> [!NOTE]
> Bei der Erstellung eigener Beispiele nutzen Sie Ihren eigenen API-Schlüssel anstelle eines Platzhalters.

Andere APIs können erfordern, dass Sie den Schlüssel auf eine etwas andere Weise einfügen, aber das Muster ist bei den meisten relativ ähnlich.

Die Anforderung eines Schlüssels ermöglicht es dem API-Anbieter, die Nutzer der API für ihre Handlungen zur Verantwortung zu ziehen. Wenn sich der Entwickler für einen Schlüssel registriert hat, ist er dem API-Anbieter bekannt, und es können Maßnahmen ergriffen werden, wenn er beginnt, etwas Böswilliges mit der API zu tun (wie das Verfolgen von Personen oder das Versenden von Anfragen an die API, um deren Funktionalität zu stören). Die einfachste Maßnahme wäre, einfach ihre API-Berechtigungen zu widerrufen.

## Erweiterung des Mapquest-Beispiels

Fügen wir dem Mapquest-Beispiel etwas mehr Funktionalität hinzu, um zu zeigen, wie man einige andere Features der API verwendet.

1. Um diesen Abschnitt zu starten, machen Sie sich eine Kopie der [Mapquest Starter-Datei](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/mapquest/start/index.html) in einem neuen Verzeichnis. Wenn Sie das [Beispiel-Repository bereits geklont haben](/de/docs/Learn#getting_our_code_examples), haben Sie bereits eine Kopie dieser Datei, die Sie im Verzeichnis _javascript/apis/third-party-apis/mapquest/start_ finden können.
2. Als Nächstes müssen Sie zur [Mapquest-Entwicklerseite](https://developer.mapquest.com/) gehen, ein Konto erstellen und dann einen Entwickler-Schlüssel erstellen, den Sie mit Ihrem Beispiel verwenden können. (Zum Zeitpunkt des Schreibens wurde er auf der Webseite als "Consumer Key" bezeichnet, und der Schlüsselerstellungsprozess fragte auch nach einer optionalen "Callback-URL". Hier müssen Sie nicht zwingend eine URL angeben: lassen Sie das Feld einfach leer.)
3. Öffnen Sie Ihre Startdatei und ersetzen Sie den API-Schlüssel-Platzhalter durch Ihren Schlüssel.

### Ändern des Kartentyps

Es gibt eine Reihe von verschiedenen Kartentypen, die mit der Mapquest-API angezeigt werden können. Um dies zu tun, finden Sie die folgende Zeile:

```js
layers: L.mapquest.tileLayer("map");
```

Versuchen Sie, `'map'` in `'hybrid'` zu ändern, um eine Hybrid-Karte anzuzeigen. Probieren Sie auch andere Werte aus. Die [Referenzseite zu `tileLayer`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-tile-layer/) zeigt die verschiedenen verfügbaren Optionen sowie viele weitere Informationen.

### Hinzufügen verschiedener Steuerungselemente

Die Karte verfügt über eine Reihe von verschiedenen Steuerungselementen; standardmäßig wird nur eine Zoom-Steuerung angezeigt. Sie können die verfügbaren Steuerungselemente mit der Methode `map.addControl()` erweitern; fügen Sie Ihrem Code Folgendes hinzu:

```js
map.addControl(L.mapquest.control());
```

Die [`mapquest.control()`-Methode](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-control/) erstellt einfach ein kompletter Steuerungsset und wird standardmäßig in der oberen rechten Ecke platziert. Sie können die Position anpassen, indem Sie ein Optionsobjekt als Parameter für die Steuerung angeben, das eine `position`-Eigenschaft enthält, deren Wert eine Zeichenkette ist, die eine Position für die Steuerung angibt. Versuchen Sie dies zum Beispiel:

```js
map.addControl(L.mapquest.control({ position: "bottomright" }));
```

Es gibt andere Arten von Steuerungselementen, zum Beispiel [`mapquest.searchControl()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-search-control/) und [`mapquest.satelliteControl()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-satellite-control/), und einige sind ziemlich komplex und leistungsstark. Spielen Sie herum und sehen Sie, was Sie zustande bringen können.

### Hinzufügen eines benutzerdefinierten Markers

Das Hinzufügen eines Markers (Icons) an einem bestimmten Punkt auf der Karte ist einfach — Sie verwenden einfach die [`L.marker()`-Methode](https://leafletjs.com/reference.html#marker) (die anscheinend in den verwandten Leaflet.js-Dokumenten dokumentiert ist). Fügen Sie den folgenden Code zu Ihrem Beispiel hinzu, diesmal innerhalb `window.onload`:

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

Wie Sie sehen, benötigt dies im einfachsten Fall zwei Parameter: ein Array, das die Koordinaten enthält, an denen der Marker angezeigt werden soll, und ein Optionsobjekt, das eine `icon`-Eigenschaft enthält, die das an diesem Punkt anzuzeigende Icon definiert.

Das Icon wird mit einer [`mapquest.icons.marker()`-Methode](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-icons/) definiert, die, wie Sie sehen, Informationen wie Farbe und Größe des Markers enthält.

Am Ende des ersten Methodenaufrufs verketten wir `.bindPopup('This is Manchester!')`, um Inhalte zu definieren, die angezeigt werden, wenn der Marker angeklickt wird.

Schließlich verketten wir `.addTo(map)` am Ende der Verkettung, um den Marker tatsächlich zur Karte hinzuzufügen.

Spielen Sie mit den anderen in der Dokumentation gezeigten Optionen herum und sehen Sie, was Sie schaffen können! Mapquest bietet einige ziemlich fortgeschrittene Funktionen, wie Wegbeschreibungen, Suche usw.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, das Beispiel zum Laufen zu bringen, vergleichen Sie Ihren Code mit unserer [fertigen Version](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/mapquest/finished/script.js).

## Eine RESTful-API — NYTimes

Sehen wir uns nun ein anderes API-Beispiel an — die [New York Times API](https://developer.nytimes.com/). Diese API ermöglicht es Ihnen, Informationen zu New York Times-Nachrichtengeschichten abzurufen und auf Ihrer Seite anzuzeigen. Dieser Typ von API ist als **RESTful API** bekannt — anstatt Daten mit den Funktionen einer JavaScript-Bibliothek wie bei Mapquest abzurufen, holen wir die Daten durch HTTP-Anfragen an spezifische URLs, mit Daten wie Suchbegriffen und anderen Eigenschaften, die in der URL kodiert sind (oft als URL-Parameter). Dies ist ein häufiges Muster, auf das Sie bei APIs stoßen werden.

Nachfolgend führen wir Sie durch eine Übung, um Ihnen zu zeigen, wie Sie die NYTimes API nutzen können, die auch einen allgemeineren Satz von Schritten bereitstellt, denen Sie folgen können, um mit neuen APIs zu arbeiten.

### Finden Sie die Dokumentation

Wenn Sie eine Drittanbieter-API verwenden möchten, ist es wichtig zu wissen, wo die Dokumentation zu finden ist, damit Sie herausfinden können, welche Funktionen die API bietet, wie Sie sie nutzen usw. Die Dokumentation der New York Times API befindet sich unter <https://developer.nytimes.com/>.

### Holen Sie sich einen Entwickler-Schlüssel

Die meisten APIs verlangen von Ihnen die Verwendung eines Entwickler-Schlüssels, aus Sicherheits- und Verantwortlichkeitsgründen. Um sich für einen NYTimes API-Schlüssel anzumelden, folgen Sie den Anweisungen unter <https://developer.nytimes.com/get-started>.

1. Fordern Sie einen Schlüssel für die Article Search API an — erstellen Sie eine neue App, indem Sie diese als API auswählen, die Sie verwenden möchten (geben Sie einen Namen und eine Beschreibung ein, schalten Sie den Schalter unter "Article Search API" in die Aktivposition und klicken Sie dann auf "Create").
2. Holen Sie sich den API-Schlüssel von der resultierenden Seite.
3. Um das Beispiel zu starten, machen Sie eine Kopie aller Dateien im Verzeichnis [nytimes/start](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/nytimes/start). Wenn Sie das [Beispiel-Repository bereits geklont haben](/de/docs/Learn#getting_our_code_examples), haben Sie bereits eine Kopie dieser Dateien, die sich im Verzeichnis _javascript/apis/third-party-apis/nytimes/start_ befindet. Anfangs enthält die `script.js`-Datei eine Reihe von Variablen, die für das Einrichten des Beispiels benötigt werden; im Folgenden füllen wir die erforderliche Funktionalität aus.

Die App ermöglicht es Ihnen schließlich, einen Suchbegriff und optionale Start- und Enddaten einzugeben, die dann verwendet werden, um die Article Search API abzufragen und die Suchergebnisse anzuzeigen.

![Ein Screenshot einer Beispielabfrage und der Suchergebnisse, wie sie aus der New York Article Search API abgerufen wurden.](nytimes-example.png)

### Verbinden Sie die API mit Ihrer Anwendung

Zuerst müssen Sie eine Verbindung zwischen der API und Ihrer Anwendung herstellen. Im Fall dieser API müssen Sie den API-Schlüssel als [get](/de/docs/Web/HTTP/Methods/GET)-Parameter jedes Mal, wenn Sie Daten vom Dienst an der richtigen URL anfordern, einfügen.

1. Finden Sie die folgende Zeile:

   ```js
   const key = "INSERT-YOUR-API-KEY-HERE";
   ```

   Ersetzen Sie den vorhandenen API-Schlüssel durch den tatsächlichen API-Schlüssel, den Sie im vorherigen Abschnitt erhalten haben.

2. Fügen Sie die folgende Zeile zu Ihrem JavaScript hinzu, unterhalb des Kommentars "`// Event listeners to control the functionality`". Dies führt eine Funktion namens `submitSearch()` aus, wenn das Formular übermittelt wird (der Button gedrückt wird).

   ```js
   searchForm.addEventListener("submit", submitSearch);
   ```

3. Fügen Sie nun die Funktionsdefinitionen für `submitSearch()` und `fetchResults()` unter der vorherigen Zeile hinzu:

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

`submitSearch()` setzt die Seitenzahl zunächst auf 0 zurück und ruft dann `fetchResults()` auf. Diese Funktion ruft zuerst [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) beim Ereignisobjekt auf, um zu verhindern, dass das Formular tatsächlich gesendet wird (was das Beispiel unterbrechen würde). Anschließend verwenden wir einige String-Manipulationen, um die vollständige URL zusammenzustellen, an die wir die Anfrage senden werden. Wir starten mit dem Zusammenstellen der Teile, die wir für diese Demo als obligatorisch erachten:

- Die Basis-URL (aus der Variablen `baseURL` entnommen).
- Der API-Schlüssel, der im URL-Parameter `api-key` angegeben werden muss (der Wert wird aus der Variablen `key` entnommen).
- Die Seitennummer, die im URL-Parameter `page` angegeben werden muss (der Wert wird aus der Variablen `pageNumber` entnommen).
- Der Suchbegriff, der im URL-Parameter `q` angegeben werden muss (der Wert wird aus dem Wert des Text-{{htmlelement("input")}} `searchTerm` entnommen).
- Der Dokumenttyp für die Rückgabe der Ergebnisse, wie in einem mit dem URL-Parameter `fq` übergebenen Ausdruck angegeben. In diesem Fall möchten wir Artikel zurückgeben.

Als Nächstes verwenden wir ein paar [`if ()`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisungen, um zu überprüfen, ob in den Elementen `startDate` und `endDate` Werte eingegeben wurden. Wenn ja, fügen wir deren Werte zur URL hinzu, angegeben in den URL-Parametern `begin_date` und `end_date`.

So würde eine vollständige URL schließlich aussehen:

```url
https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=YOUR-API-KEY-HERE&page=0&q=cats&fq=document_type:("article")&begin_date=20170301&end_date=20170312
```

> [!NOTE]
> Weitere Details zu den einfügbaren URL-Parametern finden Sie in den [NYTimes Entwicklerdokumenten](https://developer.nytimes.com/).

> [!NOTE]
> Das Beispiel verfügt über rudimentäre Formular-Datenvalidierung — das Suchbegriffsfeld muss ausgefüllt sein, bevor das Formular übermittelt werden kann (erreicht durch das `required`-Attribut), und die Datumsfelder haben `pattern`-Attribute, was bedeutet, dass sie nicht übermittelt werden, es sei denn, ihre Werte bestehen aus 8 Zahlen (`pattern="[0-9]{8}"`). Weitere Informationen zur Funktionsweise finden Sie unter [Formular-Datenvalidierung](/de/docs/Learn/Forms/Form_validation).

### Anfordern von Daten von der API

Nun haben wir unsere URL zusammengebaut, lassen Sie uns eine Anfrage an sie stellen. Wir werden dies mit der [Fetch-API](/de/docs/Web/API/Fetch_API/Using_Fetch) tun.

Fügen Sie den folgenden Codeblock innerhalb der Funktion `fetchResults()` hinzu, direkt über der schließenden geschweiften Klammer:

```js
// Use fetch() to make the request to the API
fetch(url)
  .then((response) => response.json())
  .then((json) => displayResults(json))
  .catch((error) => console.error(`Error fetching data: ${error.message}`));
```

Hier führen wir die Anfrage aus, indem wir unsere Variable `url` an [`fetch()`](/de/docs/Web/API/Window/fetch) übergeben, den Antwortkörper mit der Funktion [`json()`](/de/docs/Web/API/Response/json) in JSON umwandeln und das resultierende JSON an die Funktion `displayResults()` übergeben, damit die Daten in unserer Benutzeroberfläche angezeigt werden können. Wir fangen auch alle Fehler ab, die auftreten könnten, und protokollieren diese.

### Anzeigen der Daten

OK, sehen wir uns an, wie wir die Daten anzeigen. Fügen Sie die folgende Funktion unter Ihrer `fetchResults()`-Funktion hinzu.

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

Hier gibt es eine Menge Code; lassen Sie uns ihn Schritt für Schritt erklären:

- Die [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife ist ein häufig verwendetes Muster, um alle Inhalte eines DOM-Elements zu löschen, in diesem Fall das {{htmlelement("section")}}-Element. Wir prüfen immer wieder, ob `<section>` ein erstes Kind hat, und wenn ja, entfernen wir das erste Kind. Die Schleife endet, wenn `<section>` keine Kinder mehr hat.
- Als nächstes setzen wir die Variable `articles` gleich `json.response.docs` — das ist das Array, das alle Objekte enthält, die die durch die Suche zurückgegebenen Artikel darstellen. Dies geschieht nur, um den nachfolgenden Code etwas einfacher zu machen.
- Der erste [`if ()`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Block überprüft, ob 10 Artikel zurückgegeben werden (die API gibt bis zu 10 Artikel gleichzeitig zurück). Wenn ja, zeigen wir das {{htmlelement("nav")}}-Element an, das die _Vorherige 10_/_Nächste 10_ Paginierungsknöpfe enthält. Wenn weniger als 10 Artikel zurückgegeben werden, passen diese alle auf eine Seite, daher brauchen wir die Paginierungsknöpfe nicht anzuzeigen. Wir werden im nächsten Abschnitt die Paginierungsfunktionalität verbinden.
- Der nächste `if ()`-Block überprüft, ob keine Artikel zurückgegeben werden. Wenn das der Fall ist, versuchen wir nicht, irgendwelche anzuzeigen — wir erstellen ein {{htmlelement("p")}}, das den Text "Keine Ergebnisse zurückgegeben." enthält, und fügen es in das `<section>` ein.
- Wenn einige Artikel zurückgegeben werden, erstellen wir zuerst alle Elemente, die wir zur Anzeige jeder Nachrichtenstory verwenden möchten, setzen die richtigen Inhalte in jedes von ihnen und fügen sie dann an den entsprechenden Stellen in das DOM ein. Um herauszufinden, welche Eigenschaften in den Artikelobjekten die richtigen Daten zum Anzeigen enthalten, haben wir die Article Search API-Referenz zu Rate gezogen (siehe [NYTimes APIs](https://developer.nytimes.com/apis)). Die meisten dieser Operationen sind ziemlich offensichtlich, aber einige sind erwähnenswert:

  - Wir verwendeten eine [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife, um alle Schlagwörter, die jedem Artikel zugeordnet sind, zu durchlaufen und jedes innerhalb seines eigenen {{htmlelement("span")}}-Elements, innerhalb eines `<p>`, einzufügen. Dies wurde getan, um es einfach zu machen, jedes zu stylen.
  - Wir verwendeten einen `if ()`-Block (`if (current.multimedia.length > 0) { }`), um zu überprüfen, ob jeder Artikel irgendwelche Bilder zugeordnet hat, da einige Berichte keine haben. Wir zeigen das erste Bild nur dann an, wenn es vorhanden ist; andernfalls würde ein Fehler ausgelöst werden.

### Verbindung der Paginierungsknöpfe

Um die Paginierungsknöpfe funktionstüchtig zu machen, erhöhen (oder verringern) wir den Wert der `pageNumber`-Variable und führen die Fetch-Anfrage mit dem neuen Wert im Page-URL-Parameter erneut aus. Dies funktioniert, da die NYTimes-API nur 10 Ergebnisse gleichzeitig zurückgibt — wenn mehr als 10 Ergebnisse verfügbar sind, gibt sie die ersten 10 (0–9) zurück, wenn der URL-Parameter `page` auf 0 gesetzt ist (oder gar nicht enthalten — 0 ist der Standardwert), die nächsten 10 (10–19), wenn er auf 1 gesetzt ist, und so weiter.

Dadurch können wir eine einfache Paginierungsfunktion schreiben.

1. Unter dem bestehenden [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Aufruf fügen Sie diese beiden neuen hinzu, die die Funktionen `nextPage()` und `previousPage()` aufrufen, wenn die entsprechenden Knöpfe geklickt werden:

   ```js
   nextBtn.addEventListener("click", nextPage);
   previousBtn.addEventListener("click", previousPage);
   ```

2. Unter Ihrem vorherigen Zusatz lassen Sie uns die beiden Funktionen definieren — fügen Sie diesen Code jetzt hinzu:

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

   Die erste Funktion erhöht die `pageNumber`-Variable und führt dann erneut die `fetchResults()`-Funktion aus, um die Ergebnisse der nächsten Seite anzuzeigen.

   Die zweite Funktion funktioniert nahezu gleich in umgekehrter Richtung, aber wir müssen auch den weiteren Schritt gehen und überprüfen, dass `pageNumber` nicht bereits null ist, bevor wir sie verringern — wenn die Fetch-Anfrage mit einem negativen Page-URL-Parameter läuft, könnte dies Fehler verursachen. Wenn die `pageNumber` bereits 0 ist, [`return`](/de/docs/Web/JavaScript/Reference/Statements/return) wir aus der Funktion heraus — wenn wir uns bereits auf der ersten Seite befinden, müssen wir dieselben Ergebnisse nicht erneut laden.

> [!NOTE]
> Sie finden unser [fertiges NYTimes API-Beispiel auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/nytimes/finished/index.html) (auch [hier live anzusehen](https://mdn.github.io/learning-area/javascript/apis/third-party-apis/nytimes/finished/)).

## YouTube-Beispiel

Wir haben auch ein weiteres Beispiel für Sie zum Studieren und Lernen gebaut — sehen Sie sich unser [YouTube Video-Suche-Beispiel](https://mdn.github.io/learning-area/javascript/apis/third-party-apis/youtube/) an. Dieses verwendet zwei verwandte APIs:

- Die [YouTube Data API](https://developers.google.com/youtube/v3/docs/), um YouTube-Videos zu suchen und Ergebnisse zurückzugeben.
- Die [YouTube IFrame Player API](https://developers.google.com/youtube/iframe_api_reference), um die zurückgegebenen Video-Beispiele in IFrame-Video-Playern anzuzeigen, damit Sie sie ansehen können.

Dieses Beispiel ist interessant, weil es zeigt, wie zwei verwandte Drittanbieter-APIs zusammen verwendet werden, um eine Applikation zu erstellen. Die erste ist eine RESTful API, während die zweite eher wie Mapquest funktioniert (mit API-spezifischen Methoden usw.). Es ist jedoch erwähnenswert, dass beide APIs eine JavaScript-Bibliothek erfordern, die auf die Seite angewendet wird. Die RESTful API verfügt über verfügbare Funktionen, um die HTTP-Anfragen zu behandeln und die Ergebnisse zurückzugeben.

![Ein Screenshot einer Beispielsuchanfrage nach YouTube-Videos mit zwei verwandten APIs. Die linke Seite des Bildes zeigt eine Beispielsuchanfrage mit der YouTube Data API. Die rechte Seite des Bildes zeigt die Suchergebnisse mit der YouTube Iframe Player API.](youtube-example.png)

Wir werden nicht viel mehr zu diesem Beispiel im Artikel sagen — [der Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/youtube) enthält detaillierte Kommentare, die erklären, wie es funktioniert.

Um es in Betrieb zu nehmen, müssen Sie:

- Die [YouTube Data API Übersicht](https://developers.google.com/youtube/v3/getting-started) Dokumentation lesen.
- Besuchen Sie die [Aktivierte APIs-Seite](https://console.cloud.google.com/apis/enabled) und stellen Sie sicher, dass der Status für die YouTube Data API v3 auf EIN ist.
- Einen API-Schlüssel von [Google Cloud](https://cloud.google.com/) erhalten.
- Suchen Sie die Zeichenkette `ENTER-API-KEY-HERE` im Quellcode und ersetzen Sie sie durch Ihren API-Schlüssel.
- Das Beispiel über einen Webserver ausführen. Es wird nicht funktionieren, wenn Sie es direkt im Browser ausführen (d.h. über eine `file://`-URL).

## Zusammenfassung

Dieser Artikel hat Ihnen eine nützliche Einführung in die Verwendung von Drittanbieter-APIs zur Erweiterung der Funktionalität Ihrer Websites gegeben.

{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Fetching_data", "Learn/JavaScript/Client-side_web_APIs/Drawing_graphics", "Learn/JavaScript/Client-side_web_APIs")}}
