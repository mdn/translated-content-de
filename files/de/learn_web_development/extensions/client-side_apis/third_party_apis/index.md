---
title: APIs von Drittanbietern
slug: Learn_web_development/Extensions/Client-side_APIs/Third_party_APIs
l10n:
  sourceCommit: 3bb9f59e86a92584f306d5fe6c07572f7a08ee7e
---

{{PreviousMenu("Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}

Die APIs, die wir bisher behandelt haben, sind in den Browser integriert. Das gilt jedoch nicht für alle APIs. Viele große Websites und Dienste wie Google, GitHub, YouTube und Spotify stellen APIs bereit. Damit können Entwickler deren Daten nutzen (z. B. Informationen über ihre Repositories in einem Blog anzeigen) oder Dienste einbinden (z. B. Nutzern die Anmeldung über Google ermöglichen). Dieser Artikel erklärt den Unterschied zwischen Browser-APIs und APIs von Drittanbietern und zeigt einige typische Einsatzmöglichkeiten für letztere.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere mit den <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">Grundlagen von JavaScript-Objekten</a> sowie grundlegenden APIs wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Konzepte hinter APIs von Drittanbietern und zugehörige Muster wie API-Schlüssel verstehen.</li>
          <li>Eine RESTful API verwenden.</li>
          <li>Die YouTube-APIs von Google verwenden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was sind APIs von Drittanbietern?

APIs von Drittanbietern werden von externen Anbietern – in der Regel Unternehmen wie Spotify oder Google – bereitgestellt. Sie ermöglichen es Ihnen, über JavaScript auf deren Funktionen zuzugreifen und sie auf Ihrer Website zu nutzen. Ein Beispiel sind die APIs von YouTube, mit denen Sie nach Videos suchen und diese auf Ihren Seiten anzeigen können.

Sehen wir uns an, wie sich APIs von Drittanbietern von Browser-APIs unterscheiden.

### Sie befinden sich auf Servern von Drittanbietern

Browser-APIs sind in den Browser integriert – Sie können unmittelbar über JavaScript auf sie zugreifen. Beispielsweise erfolgt der Zugriff auf die Web Audio API, die wir [im einführenden Artikel kennengelernt haben](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction#how_do_apis_work), über das native [`AudioContext`](/de/docs/Web/API/AudioContext)-Objekt:

```js
const audioCtx = new AudioContext();
// …
const audioElement = document.querySelector("audio");
// …
const audioSource = audioCtx.createMediaElementSource(audioElement);
// etc.
```

APIs von Drittanbietern befinden sich dagegen auf deren Servern. Um über JavaScript auf sie zuzugreifen, müssen Sie zunächst eine Verbindung zu den API-Funktionen herstellen und diese auf Ihrer Seite verfügbar machen.

Letztlich kommunizieren alle APIs von Drittanbietern über HTTP mit ihren Servern. [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufrufe manuell zu schreiben, ist jedoch umständlich und anfällig für Probleme durch Änderungen. Deshalb stellen Anbieter ihre Funktionen meist über Funktionen bereit, die als Software Development Kit (SDK) bezeichnet werden. Das SDK erstellt die HTTP-Nutzdaten, sendet die Anfrage an den richtigen Endpoint, verarbeitet die Antwort und so weiter. Dadurch müssen Sie möglichst wenig Code schreiben und nur die benötigten Daten angeben.

Traditionell wird ein SDK eingebunden, indem ein externes Skript in ein {{htmlelement("script")}}-Element eingefügt wird, das die Bibliothek als globale Variable registriert. Modernere APIs stellen SDKs meist als [Module](/de/docs/Web/JavaScript/Guide/Modules) bereit, die Sie importieren können und die manchmal über Paketmanager wie [npm](https://docs.npmjs.com/) verteilt werden.

Wenn Sie beispielsweise das Skript der JavaScript-Clientbibliothek von Google laden, stellt es ein globales `gapi`-Objekt bereit:

```html
<script src="https://apis.google.com/js/api.js"></script>
```

Nachdem Sie den Client für die Google Drive API initialisiert und die Autorisierung des Nutzers eingeholt haben, können Sie Dateien mit einem Methodenaufruf auflisten:

```js
async function listDriveFiles() {
  try {
    const response = await gapi.client.drive.files.list({
      pageSize: 10,
      fields: "files(id, name)",
    });

    for (const file of response.result.files) {
      console.log(`${file.name} (${file.id})`);
    }
  } catch (error) {
    console.error("Could not list Drive files:", error);
  }
}
```

Die Bibliothek wandelt `gapi.client.drive.files.list()` in eine HTTP-Anfrage um und stellt die verarbeitete Antwort über `response.result` bereit. Natürlich sind für die Verwendung der Google-APIs einige Vorbereitungen erforderlich, wie im [JavaScript-Schnellstart für die Drive API](https://developers.google.com/workspace/drive/api/quickstart/js) beschrieben: Sie müssen die Anwendung mit ihren Berechtigungen registrieren, OAuth konfigurieren und so weiter.

### Sie erfordern meist API-Schlüssel

Bei Browser-APIs wird die Sicherheit häufig durch Berechtigungsabfragen gewährleistet, wie [in unserem ersten Artikel erläutert](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction#they_have_additional_security_mechanisms_where_appropriate). Sie sollen Nutzer darüber informieren, was auf den besuchten Websites geschieht, und die Wahrscheinlichkeit verringern, dass sie Opfer einer böswilligen API-Nutzung werden.

APIs von Drittanbietern verwenden ein etwas anderes Berechtigungssystem: Sie nutzen meist Entwicklerschlüssel, um Entwicklern Zugriff auf die API-Funktionen zu gewähren. Das dient eher dem Schutz des API-Anbieters als dem der Nutzer.

Durch die Anforderung eines Schlüssels kann der API-Anbieter Entwickler für ihre Handlungen verantwortlich machen. Registriert ein Entwickler einen Schlüssel, kann der Anbieter ihn identifizieren und Maßnahmen ergreifen, falls er beginnt, die API für böswillige Zwecke einzusetzen – etwa um Standorte von Personen zu verfolgen oder die API mit Anfragen zu überlasten, sodass sie nicht mehr funktioniert. Die einfachste Maßnahme ist, dem Entwickler die API-Zugriffsrechte zu entziehen.

Im Beispiel für die YouTube-API finden Sie eine Zeile wie diese:

```js
gapi.client.setApiKey("YOUR-API-KEY-HERE");
```

Diese Zeile gibt einen API- oder Entwicklerschlüssel an, der in Ihrer Anwendung verwendet werden soll. Der Anwendungsentwickler muss einen Schlüssel beantragen und ihn anschließend in seinen Code einfügen, um auf die API-Funktionen zugreifen zu können. In unserem Beispiel steht dort lediglich ein Platzhalter.

Bei anderen APIs müssen Sie den Schlüssel möglicherweise etwas anders einbinden, das Grundmuster ist aber bei den meisten ähnlich.

> [!WARNING]
> Schützen Sie API-Schlüssel genauso wie Ihre Passwörter. Sofern die Dokumentation des API-Anbieters es nicht ausdrücklich erlaubt, dürfen Sie API-Schlüssel niemals in Ihren Frontend-Code einbetten. Andernfalls kann jeder Besucher Ihrer Website den API-Schlüssel auslesen und missbrauchen. Dadurch könnten vertrauliche Informationen offengelegt werden oder Ihr API-Zugriff könnte gesperrt werden. Richten Sie stattdessen immer ein eigenes Backend ein und leiten Sie die Anfrage als _Proxy_ weiter: Ihr Server kommuniziert mit der API des Drittanbieters unter Verwendung des API-Schlüssels, während Ihre Nutzer mit Ihrem Server kommunizieren. Der API-Schlüssel befindet sich ausschließlich auf Ihrem Server.
>
> Selbstverständlich sollten Sie API-Schlüssel auch niemals in öffentliche GitHub-Repositories übertragen. Falls Sie einen Schlüssel versehentlich offenlegen, widerrufen Sie ihn sofort und erstellen Sie einen neuen.

Nicht alle APIs benötigen API-Schlüssel. Manche APIs bieten Funktionen mit offenem Zugriff und hohem Anfragevolumen an, sodass eine Zugriffsgenehmigung die Serverlast kaum beeinflussen würde (auch wenn die Anzahl der Anfragen begrenzt sein kann). Beispiele sind die [GitHub REST API](https://docs.github.com/en/rest) (siehe nächster Abschnitt), die [Wikipedia-APIs](https://www.mediawiki.org/wiki/API:Main_page) für Artikelinhalte und die [Stack Exchange API](https://api.stackexchange.com/docs) für Fragen und Antworten.

## Eine RESTful API – GitHub

Wie bereits erwähnt, laufen alle APIs letztlich auf HTTP-Anfragen hinaus. Manche APIs stellen dafür SDKs bereit, während andere erwarten, dass Sie die Anfragen selbst verarbeiten.

Im letzteren Fall sind APIs meist nach dem [**RESTful**-Prinzip](https://en.wikipedia.org/wiki/REST) gestaltet. Dabei ist der Client _zustandslos_ (das heißt, jede Anfrage wird unabhängig von anderen gestellt). Er sendet Anfragen an bestimmte URLs und verwendet dabei bestimmte HTTP-Methoden (`GET`, `POST` usw.), um bestimmte Aktionen auszuführen. Die Eingabedaten für jede Aktion übermittelt er über URL-Parameter oder den Anfragekörper.

Sehen wir uns die [GitHub REST API](https://docs.github.com/en/rest) an. Mit ihr können Sie Informationen über GitHub-Repositories abrufen und auf Ihrer Website anzeigen.

### Die Dokumentation finden

Wenn Sie eine API eines Drittanbieters verwenden möchten, suchen Sie zunächst nach ihrer Dokumentation. Dort können Sie nachlesen, welche Funktionen die API bietet und wie Sie sie verwenden. Für dieses Beispiel verwenden wir den [Endpoint zur Suche nach Repositories](https://docs.github.com/en/rest/search/search#search-repositories) von GitHub.

Achten Sie beim Lesen der Dokumentation einer REST-API auf diese fünf Fragen:

1. Welche [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) ist für die Aufgabe zu verwenden?
2. An welchen URL-Endpoint muss die Anfrage gesendet werden?
3. Welche Nutzdaten erwartet der Endpoint und in welchem Format (JSON-Körper, XML-Körper, Query-Parameter usw.)?
4. Welche [Statuscodes](/de/docs/Web/HTTP/Reference/Status) kann er zurückgeben und was bedeuten sie?
5. Was enthält der Antwortkörper und in welchem Format?

### Ein persönliches Zugriffstoken erstellen

Erstellen Sie für diese Übung ein **persönliches Zugriffstoken (PAT)**, um Ihre Anfragen zu authentifizieren:

1. Melden Sie sich bei Ihrem GitHub-Konto an oder [erstellen Sie eines](https://github.com/signup), falls Sie noch keines haben.
2. Folgen Sie der GitHub-Anleitung zum [Erstellen eines fein abgestuften persönlichen Zugriffstokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token). Geben Sie dem Token einen aussagekräftigen Namen (z. B. „MDN 3rd party API lesson“) und eine kurze Gültigkeitsdauer (falls Sie es nach dieser Lektion voraussichtlich nicht weiterverwenden). Wählen Sie außerdem Ihr eigenes Konto als Ressourceninhaber aus.
3. Wählen Sie unter **Repository access** die Option **Public repositories**. Legen Sie keine zusätzlichen Berechtigungen fest: Für die Suche in öffentlichen Repositories sind keine erforderlich.
4. Klicken Sie auf **Generate token** und kopieren Sie das Token. Sie geben es in das Formular im [interaktiven Beispiel](#das_beispiel_ausprobieren) ein, statt es Ihrem Quellcode hinzuzufügen.

In diesem Beispiel wird ein API-Schlüssel anders als üblich verwendet: Die Website fordert den Nutzer auf, seinen eigenen Schlüssel anzugeben, und führt die Aktion in seinem Namen aus. Daher benötigt sie weder einen eigenen API-Schlüssel noch einen Server, der die Anfragen weiterleitet.

> [!WARNING]
> Behandeln Sie dieses PAT ebenfalls wie Ihr Passwort. Geben Sie Ihr PAT nur auf Websites ein, denen Sie vertrauen. Vergeben Sie möglichst eng begrenzte Berechtigungen und wählen Sie ein kurzes Ablaufdatum, damit es nicht missbraucht werden kann. Unser Beispiel sendet das Token direkt von Ihrem Browser an GitHub. Es speichert das Token weder im Browser-Speicher noch sendet es dieses an andere Server.

GitHub erlaubt auch nicht authentifizierte Suchanfragen in öffentlichen Repositories, allerdings mit einem niedrigeren [Limit für Suchanfragen](https://docs.github.com/en/rest/search/search#rate-limit). Wir machen das Token-Feld optional, damit Sie das Beispiel zunächst ohne Token ausprobieren und anschließend Ihr Token eingeben können, um zu sehen, wie eine Anfrage authentifiziert wird.

### Das Beispiel einrichten

In der Anwendung können Sie einen Suchbegriff und optional ein Anfangs- und Enddatum für die Erstellung des Repositories eingeben. Anschließend zeigt sie passende Repositories an.

Das HTML definiert das Suchformular, eine Statusmeldung, einen Ergebnisbereich und Schaltflächen zum Blättern:

```html live-sample___github-search
<form>
  <fieldset>
    <legend>Search public repositories</legend>
    <p>
      <label for="token">Personal access token (optional):</label>
      <input id="token" type="password" autocomplete="off" />
    </p>
    <p>
      <label for="search">Search term:</label>
      <input id="search" type="search" required />
    </p>
    <p>
      <label for="start-date">Created on or after:</label>
      <input id="start-date" type="date" />
    </p>
    <p>
      <label for="end-date">Created on or before:</label>
      <input id="end-date" type="date" />
    </p>
    <button type="submit">Search</button>
  </fieldset>
</form>
<p id="status" role="status"></p>
<section aria-label="Search results"></section>
<nav aria-label="Result pages">
  <button id="previous" type="button" disabled>Previous page</button>
  <button id="next" type="button" disabled>Next page</button>
</nav>
```

Zu Beginn speichert das JavaScript Referenzen auf die HTML-Elemente und richtet den Zustand für das Blättern ein:

```js live-sample___github-search
const baseURL = "https://api.github.com/search/repositories";
const perPage = 10;
const searchForm = document.querySelector("form");
const searchFields = document.querySelector("fieldset");
const tokenInput = document.querySelector("#token");
const searchTerm = document.querySelector("#search");
const startDate = document.querySelector("#start-date");
const endDate = document.querySelector("#end-date");
const section = document.querySelector("section");
const status = document.querySelector("#status");
const nextBtn = document.querySelector("#next");
const previousBtn = document.querySelector("#previous");

let pageNumber = 1;
let query = "";
let hasNextPage = false;
```

### Die API mit Ihrer Anwendung verbinden

Wenn das Formular abgeschickt wird, setzen wir die Suchanfrage zusammen:

```js live-sample___github-search
searchForm.addEventListener("submit", submitSearch);

function submitSearch(e) {
  e.preventDefault();

  query = `${searchTerm.value.trim()} is:public`;
  if (startDate.value !== "") {
    query = `${query} created:>=${startDate.value}`;
  }
  if (endDate.value !== "") {
    query = `${query} created:<=${endDate.value}`;
  }

  pageNumber = 1;
  hasNextPage = false;
  section.textContent = "";
  fetchResults(pageNumber);
}
```

`submitSearch()` ruft [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf, damit das Formular nicht tatsächlich abgeschickt und die Seite nicht neu geladen wird. Anschließend kombiniert die Funktion den Suchbegriff mit den [Suchqualifikatoren](https://docs.github.com/en/search-github/searching-on-github/searching-for-repositories) von GitHub: `is:public` beschränkt die Ergebnisse auf öffentliche Repositories und die `created:`-Qualifikatoren filtern nach Erstellungsdatum. Wir speichern diese Suchanfrage in einer Variable auf oberster Ebene. So wird beim Blättern dieselbe Suchanfrage erneut verwendet, selbst wenn das Suchformular inzwischen bearbeitet wurde.

### Daten von der API anfordern

Stellen wir nun mit der [Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch) eine Anfrage. Die Funktion `fetchResults()` fordert eine Seite mit Suchergebnissen an:

```js live-sample___github-search
async function fetchResults(page) {
  const url = new URL(baseURL);
  url.searchParams.set("q", query);
  url.searchParams.set("page", page);
  url.searchParams.set("per_page", perPage);

  const headers = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2026-03-10",
  };
  const token = tokenInput.value.trim();
  if (token !== "") {
    headers.Authorization = `Bearer ${token}`;
  }

  searchFields.disabled = true;
  nextBtn.disabled = true;
  previousBtn.disabled = true;
  status.textContent = "Loading…";

  try {
    const response = await fetch(url, { headers });
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const json = await response.json();
    displayResults(json);
    pageNumber = page;
    hasNextPage = pageNumber * perPage < Math.min(json.total_count, 1000);
    status.textContent = `Page ${pageNumber}.`;
    if (json.incomplete_results) {
      status.textContent +=
        " The search returned incomplete results. Try a narrower search.";
    }
  } catch (error) {
    status.textContent = `Could not fetch results: ${error.message}`;
  } finally {
    searchFields.disabled = false;
    previousBtn.disabled = pageNumber === 1;
    nextBtn.disabled = !hasNextPage;
  }
}
```

Die GitHub REST API verwendet die üblichen HTTP-Methoden, um Aktionstypen zu unterscheiden. Da es sich um einen Lesevorgang handelt, stellen wir eine `GET`-Anfrage (die Standardeinstellung für `fetch()`). Die `GET`-Anfrage hat keinen Anfragekörper; deshalb werden die Eingabedaten als Query-Parameter übermittelt. Wir fügen sie über die Eigenschaft `searchParams` des [`URL`](/de/docs/Web/API/URL)-Objekts hinzu: die Suchanfrage (`q`), die Seitennummer (`page`) und die Anzahl der Ergebnisse pro Seite (`per_page`).

Eine Suche nach `cats` ohne Datumsangaben erzeugt beispielsweise eine URL wie diese:

```url
https://api.github.com/search/repositories?q=cats+is%3Apublic&page=1&per_page=10
```

Das Objekt `headers` legt das Antwortformat und die API-Version fest. Der Header {{HTTPHeader("Authorization")}} verdient besondere Aufmerksamkeit: Über ihn werden API-Schlüssel üblicherweise übertragen. Hier verwenden wir das `Bearer`-Schema.

Die REST-API gibt Daten im JSON-Format zurück, weil wir dieses mit `Accept: "application/vnd.github+json"` angefordert haben. Anschließend verarbeiten wir sie mit [`response.json()`](/de/docs/Web/API/Response/json). Die Struktur des JSON ist auch in GitHubs [Dokumentation zum Endpoint für die Repository-Suche](https://docs.github.com/en/rest/search/search#search-repositories) beschrieben.

> [!NOTE]
> Wenn Sie einen `401`-Fehler erhalten, prüfen Sie, ob das Token falsch eingegeben wurde, abgelaufen ist oder widerrufen wurde. Ein `403`- oder `429`-Fehler kann darauf hinweisen, dass ein Limit für Anfragen erreicht wurde. Warten Sie in diesem Fall, bevor Sie es erneut versuchen, statt wiederholt auf „Search“ zu klicken – das würde die Situation nur verschlimmern. Weitere Informationen finden Sie in GitHubs [Anleitung zur Fehlerbehebung](https://docs.github.com/en/rest/using-the-rest-api/troubleshooting-the-rest-api).

Nach einer erfolgreichen Anfrage aktualisiert `fetchResults()` die Variable `pageNumber` und aktiviert die jeweils passenden Schaltflächen. Auf der ersten Seite ist die Schaltfläche für die vorherige Seite deaktiviert. Der Such-Endpoint stellt höchstens 1.000 Ergebnisse bereit. `fetchResults()` verwendet diesen Grenzwert und `total_count`, um zu entscheiden, wann die Schaltfläche für die nächste Seite deaktiviert werden muss.

### Die Daten anzeigen

Die Funktion `displayResults()` zeigt die zurückgegebenen Repositories an:

```js live-sample___github-search
function displayResults(json) {
  section.textContent = "";

  const repositories = json.items;

  if (repositories.length === 0) {
    const para = document.createElement("p");
    para.textContent = "No results returned.";
    section.appendChild(para);
    return;
  }
  for (const current of repositories) {
    const article = document.createElement("article");
    const heading = document.createElement("h2");
    const link = document.createElement("a");
    const para = document.createElement("p");
    const details = document.createElement("p");

    link.href = current.html_url;
    link.textContent = current.full_name;
    para.textContent = current.description ?? "No description provided.";
    details.textContent = `Stars: ${current.stargazers_count}`;

    heading.appendChild(link);
    article.appendChild(heading);
    article.appendChild(para);
    article.appendChild(details);
    section.appendChild(article);
  }
}
```

Der Code liest den JSON-Antwortkörper und wandelt das Ergebnis in einen DOM-Baum um.

- Zunächst leert er den Inhalt des Bereichs.
- Die Repositories befinden sich im Array `items` der Antwort. Ist es leer, zeigen wir eine Meldung an, dass keine Ergebnisse zurückgegeben wurden.
- Andernfalls erstellen wir für jedes Repository Elemente für den Namen, den Link, die Beschreibung und die Anzahl der Sterne und fügen diese in das DOM ein.

### Die Schaltflächen zum Blättern verknüpfen

Wir richten Event-Listener ein, die auf Klicks auf die Schaltflächen „Previous page“ und „Next page“ reagieren und die vorherige beziehungsweise nächste Ergebnisseite anfordern:

```js live-sample___github-search
nextBtn.addEventListener("click", () => {
  fetchResults(pageNumber + 1);
});

previousBtn.addEventListener("click", () => {
  fetchResults(pageNumber - 1);
});
```

Die Seitennummerierung von GitHub beginnt bei 1. Wir haben 10 Ergebnisse pro Seite angefordert, daher enthält Seite 2 die nächsten 10 Ergebnisse und so weiter. Die aktuelle Seitennummer wird in `pageNumber` gespeichert und nur nach einer erfolgreichen Anfrage aktualisiert.

### Das Beispiel ausprobieren

Geben Sie einen Suchbegriff wie `javascript` ein und schicken Sie das Formular ab. Probieren Sie die Suche mit und ohne Ihr Token aus, fügen Sie Datumsangaben hinzu und blättern Sie zwischen den Seiten.

```css hidden live-sample___github-search
body {
  font-family: sans-serif;
}

label {
  display: block;
}

input {
  box-sizing: border-box;
  max-width: 100%;
}

section {
  max-height: 300px;
  overflow: auto;
  overflow-wrap: anywhere;
}

article {
  border-bottom: 1px solid #cccccc;
}

nav {
  margin-top: 1rem;
}
```

{{EmbedLiveSample("github-search", "100%", 750)}}

## YouTube-Beispiel

Wir haben außerdem ein weiteres Beispiel erstellt, das Sie untersuchen können: unser [Beispiel für die YouTube-Videosuche](https://mdn.github.io/learning-area/javascript/apis/third-party-apis/youtube/).

> [!NOTE]
> Das verlinkte Beispiel funktioniert nicht, da es keinen gültigen API-Schlüssel enthält. Wie bereits erwähnt, sollten Sie API-Schlüssel niemals in veröffentlichtem Frontend-Code weitergeben. Um die Demo auszuführen, richten Sie wie unten beschrieben eine lokale Kopie mit Ihrem eigenen API-Schlüssel ein.

Dieses Beispiel verwendet zwei miteinander verbundene APIs:

- Die [YouTube Data API](https://developers.google.com/youtube/v3/docs/), um nach YouTube-Videos zu suchen und Ergebnisse zurückzugeben.
- Die [YouTube IFrame Player API](https://developers.google.com/youtube/iframe_api_reference), um die zurückgegebenen Videos in iframe-Videoplayern anzuzeigen, damit Sie sie ansehen können.

Das Beispiel ist interessant, weil es zeigt, wie zwei miteinander verbundene APIs von Drittanbietern gemeinsam zum Erstellen einer Anwendung verwendet werden. Die erste ist eine RESTful API, während die zweite JavaScript-Methoden zur Steuerung eines Videoplayers bereitstellt. Dieses Beispiel verwendet JavaScript-Bibliotheken für beide APIs: Die Clientbibliothek für die Data API verarbeitet die HTTP-Anfragen und gibt die Ergebnisse zurück.

![Screenshot einer beispielhaften YouTube-Videosuche mit zwei miteinander verbundenen APIs. Links ist eine beispielhafte Suchanfrage über die YouTube Data API zu sehen. Rechts werden die Suchergebnisse mithilfe der YouTube IFrame Player API angezeigt.](youtube-example.png)

Wir gehen in diesem Artikel nicht näher auf das Beispiel ein. Der [Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/youtube) enthält ausführliche Kommentare, die seine Funktionsweise erklären.

Die Data API stellt für Projekte, die sie aktivieren, standardmäßig ein tägliches [Kontingent](https://developers.google.com/youtube/v3/getting-started#quota) bereit. Anfragen verbrauchen dieses Kontingent, sodass Sie nur eine begrenzte Anzahl von Suchanfragen durchführen können.

Um das Beispiel auszuführen, müssen Sie:

- Die Dokumentation zur [Übersicht über die YouTube Data API](https://developers.google.com/youtube/v3/getting-started) lesen.
- Die [Seite der aktivierten APIs](https://console.cloud.google.com/apis/enabled) aufrufen und sicherstellen, dass in der API-Liste der Status der YouTube Data API v3 auf ON steht.
- Einen API-Schlüssel von [Google Cloud](https://cloud.google.com/) beziehen.
- Im Quellcode die Zeichenfolge `YOUR-API-KEY-HERE` suchen und durch Ihren API-Schlüssel ersetzen.
- Das Beispiel über einen Webserver ausführen. Es funktioniert nicht, wenn Sie es direkt im Browser öffnen (also über eine `file://`-URL).

## Zusammenfassung

Dieser Artikel hat Ihnen eine Einführung in die Verwendung von APIs von Drittanbietern gegeben, mit denen Sie Ihre Websites um Funktionen erweitern können.

{{PreviousMenu("Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}
