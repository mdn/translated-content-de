---
title: Client-seitiger Speicher
slug: Learn_web_development/Extensions/Client-side_APIs/Client-side_storage
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs/Third_party_APIs", "Learn_web_development/Extensions/Client-side_APIs")}}

Moderne Webbrowser unterstützen eine Vielzahl von Möglichkeiten, wie Websites Daten auf dem Rechner des Nutzers speichern und bei Bedarf abrufen können – mit der Erlaubnis des Nutzers. Dies ermöglicht Ihnen, Daten für die langfristige Speicherung zu speichern, Seiten oder Dokumente für die Offline-Nutzung zu sichern, nutzerspezifische Einstellungen für Ihre Website zu behalten und mehr. Dieser Artikel erklärt die grundlegenden Funktionsweisen dieser Techniken.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere den <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">JavaScript-Objekt-Grundlagen</a> und der grundlegenden API-Abdeckung wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Konzepte des client-seitigen Speichers und welche Schlüsseltechnologien dies ermöglichen – Web Storage API, Cookies, Cache API und die IndexedDB API.</li>
          <li>Wichtige Anwendungsfälle – Zustand zwischen Neuladungen aufrechterhalten, Login- und Nutzerpersonalisierungsdaten beibehalten und lokale/offline Arbeit.</li>
          <li>Web Storage für einfache Schlüssel-Wert-Paar-Speicherungen verwenden, gesteuert durch JavaScript.</li>
          <li>Die Verwendung von IndexedDB zum Speichern komplexerer, strukturierter Daten.</li>
          <li>Die Verwendung der Cache API und Service Worker für Offline-Anwendungsfälle.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Client-seitiger Speicher?

An anderer Stelle im MDN-Lernbereich haben wir über den Unterschied zwischen [statischen Websites](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview#static_sites) und [dynamischen Websites](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview#dynamic_sites) gesprochen. Die meisten großen modernen Websites sind dynamisch – sie speichern Daten auf dem Server mithilfe einer Datenbank (serverseitiger Speicher) und führen [serverseitigen](/de/docs/Learn_web_development/Extensions/Server-side) Code aus, um die benötigten Daten abzurufen, sie in statische Seitentemplates einzufügen und das resultierende HTML dem Client zur Anzeige im Browser des Nutzers bereitzustellen.

Client-seitiger Speicher funktioniert nach ähnlichen Prinzipien, hat jedoch unterschiedliche Anwendungsfälle. Er besteht aus JavaScript-APIs, die Ihnen erlauben, Daten auf dem Client (d.h. auf dem Rechner des Nutzers) zu speichern und bei Bedarf abzurufen. Dies hat viele verschiedene Anwendungen, wie:

- Personalisierung von Seiteneinstellungen (z. B. Anzeige der Auswahl eines Nutzers zu benutzerdefinierten Widgets, Farbschema oder Schriftgröße).
- Beibehalten früherer Website-Aktivitäten (z. B. Speichern der Inhalte eines Warenkorbs aus einer früheren Sitzung, Erinnern daran, ob ein Nutzer zuvor eingeloggt war).
- Lokales Speichern von Daten und Assets, damit eine Seite schneller (und möglicherweise kostengünstiger) heruntergeladen werden kann oder ohne Netzwerkverbindung nutzbar ist.
- Lokales Speichern von von Webanwendungen generierten Dokumenten zur Offline-Nutzung

Häufig werden client-seitiger und server-seitiger Speicher zusammen verwendet. Zum Beispiel könnten Sie eine Reihe von Musikdateien herunterladen (vielleicht genutzt von einem Webspiel oder einer Musikplayer-Anwendung), sie in einer client-seitigen Datenbank speichern und bei Bedarf abspielen. Die Nutzer müssten die Musikdateien nur einmal herunterladen – bei späteren Besuchen würden sie stattdessen aus der Datenbank abgerufen.

> [!NOTE]
> Es gibt Einschränkungen hinsichtlich der Menge an Daten, die Sie mit client-seitigen Speicher-APIs speichern können (möglicherweise sowohl pro individueller API als auch kumulativ); das genaue Limit variiert je nach Browser und möglicherweise basierend auf den Einstellungen des Nutzers. Weitere Informationen finden Sie unter [Speicherquoten und Auslöschkriterien für den Browser](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria).

### Altmodisch: Cookies

Das Konzept des client-seitigen Speichers gibt es schon lange. Seit den frühen Tagen des Webs haben Websites [Cookies](/de/docs/Web/HTTP/Cookies) genutzt, um Informationen zur Personalisierung der Nutzererfahrung auf Websites zu speichern. Sie sind die älteste Form des client-seitigen Speichers, der im Web weit verbreitet ist.

Heutzutage gibt es einfachere Mechanismen zur Speicherung client-seitiger Daten, daher werden wir Ihnen in diesem Artikel nicht beibringen, wie man Cookies verwendet. Dies bedeutet jedoch nicht, dass Cookies im modernen Web völlig nutzlos sind – sie werden weiterhin häufig verwendet, um Daten im Zusammenhang mit Nutzerpersonalisierung und -zustand zu speichern, z. B. Sitzungs-IDs und Zugangs-Token. Weitere Informationen zu Cookies finden Sie in unserem Artikel [Verwendung von HTTP-Cookies](/de/docs/Web/HTTP/Cookies).

### Modern: Web Storage und IndexedDB

Die oben erwähnten "einfacheren" Funktionen sind wie folgt:

- Die [Web Storage API](/de/docs/Web/API/Web_Storage_API) bietet einen Mechanismus zum Speichern und Abrufen kleinerer Datenitems, die aus einem Namen und einem entsprechenden Wert bestehen. Dies ist nützlich, wenn Sie nur einige einfache Daten speichern müssen, wie den Namen des Nutzers, ob er eingeloggt ist, welche Farbe für den Hintergrund des Bildschirms verwendet werden soll, usw.
- Die [IndexedDB API](/de/docs/Web/API/IndexedDB_API) stellt dem Browser ein vollständiges Datenbanksystem zur Verfügung, um komplexe Daten zu speichern. Dies kann verwendet werden für Dinge von vollständigen Datenbeständen von Kunden bis hin zu komplexen Datentypen wie Audio- oder Videodateien.

Sie werden mehr über diese APIs im Folgenden lernen.

### Die Cache API

Die [`Cache`](/de/docs/Web/API/Cache) API ist dafür ausgelegt, HTTP-Antworten auf bestimmte Anfragen zu speichern, und ist sehr nützlich für Dinge wie das Speichern von Website-Assets offline, damit die Seite auch ohne Netzwerkverbindung genutzt werden kann. Die Cache API wird normalerweise in Kombination mit der [Service Worker API](/de/docs/Web/API/Service_Worker_API) verwendet, obwohl das nicht zwingend notwendig ist.

Die Verwendung von Cache und Service Workern ist ein fortgeschrittenes Thema, und wir werden es in diesem Artikel nicht im Detail behandeln, obwohl wir ein Beispiel im Abschnitt [Offline-Asset-Speicherung](#offline-asset-speicherung) weiter unten zeigen werden.

## Speichern einfacher Daten – Web Storage

Die [Web Storage API](/de/docs/Web/API/Web_Storage_API) ist sehr einfach zu verwenden – Sie speichern einfache Name/Wert-Paare von Daten (beschränkt auf Strings, Zahlen usw.) und rufen diese Werte bei Bedarf ab.

### Grundlegende Syntax

Lassen Sie uns Ihnen zeigen, wie:

1. Besuchen Sie zunächst unser [leeres Web-Storage-Template](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/web-storage/index.html) auf GitHub (öffnen Sie dies in einem neuen Tab).
2. Öffnen Sie die JavaScript-Konsole der Entwicklerwerkzeuge Ihres Browsers.
3. Alle Daten Ihres Webspeichers sind in zwei objektähnlichen Strukturen im Browser enthalten: [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage) und [`localStorage`](/de/docs/Web/API/Window/localStorage). Das erste speichert Daten für die Dauer, in der der Browser geöffnet ist (die Daten gehen verloren, wenn der Browser geschlossen wird), und das zweite speichert Daten auch noch nach dem Schließen und erneuten Öffnen des Browsers. Wir werden in diesem Artikel das zweite verwenden, da es im Allgemeinen nützlicher ist.

   Die Methode [`Storage.setItem()`](/de/docs/Web/API/Storage/setItem) ermöglicht Ihnen, ein Datenitem in den Speicher zu speichern – sie benötigt zwei Parameter: den Namen des Items und seinen Wert. Versuchen Sie, dies in Ihre JavaScript-Konsole einzugeben (Ändern Sie den Wert in Ihren eigenen Namen, wenn Sie möchten!):

   ```js
   localStorage.setItem("name", "Chris");
   ```

4. Die Methode [`Storage.getItem()`](/de/docs/Web/API/Storage/getItem) benötigt einen Parameter – den Namen eines Datenitems, das Sie abrufen möchten – und gibt den Wert des Items zurück. Geben Sie nun diese Zeilen in Ihre JavaScript-Konsole ein:

   ```js
   let myName = localStorage.getItem("name");
   myName;
   ```

   Beim Eingeben der zweiten Zeile sollten Sie sehen, dass die Variable `myName` nun den Wert des `name` Datenitems enthält.

5. Die Methode [`Storage.removeItem()`](/de/docs/Web/API/Storage/removeItem) benötigt einen Parameter – den Namen eines Datenitems, das Sie entfernen möchten – und entfernt dieses Item aus dem Webspeicher. Geben Sie die folgenden Zeilen in Ihre JavaScript-Konsole ein:

   ```js
   localStorage.removeItem("name");
   myName = localStorage.getItem("name");
   myName;
   ```

   Die dritte Zeile sollte nun `null` zurückgeben – das `name` Item existiert nicht mehr im Webspeicher.

### Die Daten bleiben bestehen!

Ein wesentliches Merkmal des Webspeichers ist, dass die Daten zwischen Seitenladevorgängen bestehen bleiben (und sogar nach dem Herunterfahren des Browsers, im Fall von `localStorage`). Lassen Sie uns dies in Aktion sehen.

1. Öffnen Sie unser leeres Web-Storage-Template erneut, diesmal jedoch in einem anderen Browser als dem, in dem Sie dieses Tutorial geöffnet haben! Dies macht es einfacher, damit umzugehen.
2. Geben Sie diese Zeilen in die JavaScript-Konsole des Browsers ein:

   ```js
   localStorage.setItem("name", "Chris");
   let myName = localStorage.getItem("name");
   myName;
   ```

   Sie sollten das zurückgegebene `name` Item sehen.

3. Schließen Sie nun den Browser und öffnen Sie ihn wieder.
4. Geben Sie die folgenden Zeilen erneut ein:

   ```js
   let myName = localStorage.getItem("name");
   myName;
   ```

   Sie sollten sehen, dass der Wert immer noch verfügbar ist, obwohl der Browser geschlossen und dann wieder geöffnet wurde.

### Separater Speicher für jede Domäne

Es gibt einen separaten Datenspeicher für jede Domäne (jede separate Webadresse, die im Browser geladen wird). Sie werden sehen, dass, wenn Sie zwei Websites laden (sagen wir google.com und amazon.com) und versuchen, ein Item auf einer Website zu speichern, es für die andere Website nicht verfügbar ist.

Das macht Sinn – Sie können sich die Sicherheitsprobleme vorstellen, die auftreten würden, wenn Websites die Daten anderer Websites sehen könnten!

### Ein umfangreicheres Beispiel

Lassen Sie uns dieses neue Wissen anwenden, indem wir ein funktionierendes Beispiel schreiben, um Ihnen eine Vorstellung davon zu geben, wie Webspeicher verwendet werden kann. Unser Beispiel ermöglicht es Ihnen, einen Namen einzugeben, nach dem die Seite aktualisiert wird, um Ihnen eine personalisierte Begrüßung zu geben. Dieser Zustand bleibt auch bei Seiten-/Browserneuladungen bestehen, da der Name im Webspeicher gespeichert wird.

Sie finden das Beispiel-HTML unter [personal-greeting.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/web-storage/personal-greeting.html) – es enthält eine Website mit einer Kopfzeile, einem Inhalt und einer Fußzeile sowie ein Formular zur Eingabe Ihres Namens.

![Ein Screenshot einer Website, die Abschnitte für einen Header, Inhalt und eine Fußzeile hat. Der Header hat einen Begrüßungstext auf der linken Seite und einen Button mit der Bezeichnung 'vergessen' auf der rechten Seite. Der Inhalt hat eine Überschrift gefolgt von zwei Absätzen mit Blindtext. Der Footer liest 'Copyright nobody. Use the code as you like'.](web-storage-demo.png)

Lassen Sie uns das Beispiel aufbauen, damit Sie verstehen, wie es funktioniert.

1. Erstellen Sie zuerst eine lokale Kopie unserer [personal-greeting.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/web-storage/personal-greeting.html) Datei in einem neuen Verzeichnis auf Ihrem Computer.
2. Beachten Sie als Nächstes, wie unser HTML auf eine JavaScript-Datei namens `index.js` verweist, mit einer Zeile wie `<script src="index.js" defer></script>`. Diese müssen wir erstellen und unseren JavaScript-Code darin schreiben. Erstellen Sie eine `index.js` Datei im selben Verzeichnis wie Ihre HTML-Datei.
3. Wir beginnen damit, Referenzen zu allen HTML-Features zu erstellen, die wir in diesem Beispiel manipulieren müssen – wir erstellen sie alle als Konstanten, da sich diese Referenzen im Lebenszyklus der App nicht ändern müssen. Fügen Sie die folgenden Zeilen zu Ihrer JavaScript-Datei hinzu:

   ```js
   // create needed constants
   const rememberDiv = document.querySelector(".remember");
   const forgetDiv = document.querySelector(".forget");
   const form = document.querySelector("form");
   const nameInput = document.querySelector("#entername");
   const submitBtn = document.querySelector("#submitname");
   const forgetBtn = document.querySelector("#forgetname");

   const h1 = document.querySelector("h1");
   const personalGreeting = document.querySelector(".personal-greeting");
   ```

4. Als Nächstes müssen wir einen kleinen Ereignis-Listener hinzufügen, um zu verhindern, dass das Formular tatsächlich versendet wird, wenn der Absendebutton gedrückt wird, da dies nicht das Verhalten ist, das wir wünschen. Fügen Sie dieses Snippet unter Ihren vorherigen Code hinzu:

   ```js
   // Stop the form from submitting when a button is pressed
   form.addEventListener("submit", (e) => e.preventDefault());
   ```

5. Nun müssen wir einen Ereignis-Listener hinzufügen, dessen Handlerfunktion ausgeführt wird, wenn der "Say hello"-Button geklickt wird. Die Kommentare erklären detailliert, was jeder Teil macht, aber im Wesentlichen nehmen wir hier den Namen, den der Nutzer in das Text-Eingabefeld eingegeben hat und speichern ihn im Webspeicher mit `setItem()`, dann führen wir eine Funktion namens `nameDisplayCheck()` aus, die das tatsächliche Webseiten-Text Update behandelt. Fügen Sie dies unten in Ihren Code ein:

   ```js
   // run function when the 'Say hello' button is clicked
   submitBtn.addEventListener("click", () => {
     // store the entered name in web storage
     localStorage.setItem("name", nameInput.value);
     // run nameDisplayCheck() to sort out displaying the personalized greetings and updating the form display
     nameDisplayCheck();
   });
   ```

6. An diesem Punkt benötigen wir auch einen Ereignishandler, der eine Funktion ausführt, wenn der "Vergessen"-Button geklickt wird – dieser wird nur angezeigt, nachdem der "Say hello"-Button geklickt wurde (die zwei Formularzustände wechseln sich ab). In dieser Funktion entfernen wir das `name` Item aus dem Webspeicher mit `removeItem()`, dann führen wir erneut `nameDisplayCheck()` aus, um die Anzeige zu aktualisieren. Fügen Sie dies am Ende hinzu:

   ```js
   // run function when the 'Forget' button is clicked
   forgetBtn.addEventListener("click", () => {
     // Remove the stored name from web storage
     localStorage.removeItem("name");
     // run nameDisplayCheck() to sort out displaying the generic greeting again and updating the form display
     nameDisplayCheck();
   });
   ```

7. Nun ist es an der Zeit die Funktion `nameDisplayCheck()` selbst zu definieren. Hier prüfen wir, ob das `name` Item im Webspeicher gespeichert wurde, indem wir `localStorage.getItem('name')` als Bedingungstest verwenden. Wenn der Name gespeichert wurde, wird dieser Aufruf zu `true` ausgewertet; wenn nicht, wird der Aufruf zu `false` ausgewertet. Wenn der Aufruf zu `true` ausgewertet wird, zeigen wir eine personalisierte Begrüßung an, zeigen den "vergessen"-Teil des Formulars an, und verbergen den "Say hello"-Teil des Formulars. Wird der Aufruf zu `false` ausgewertet, wird eine generische Begrüßung angezeigt und das Gegenteil gemacht. Setzen Sie den folgenden Code erneut unten ein:

   ```js
   // define the nameDisplayCheck() function
   function nameDisplayCheck() {
     // check whether the 'name' data item is stored in web Storage
     if (localStorage.getItem("name")) {
       // If it is, display personalized greeting
       const name = localStorage.getItem("name");
       h1.textContent = `Welcome, ${name}`;
       personalGreeting.textContent = `Welcome to our website, ${name}! We hope you have fun while you are here.`;
       // hide the 'remember' part of the form and show the 'forget' part
       forgetDiv.style.display = "block";
       rememberDiv.style.display = "none";
     } else {
       // if not, display generic greeting
       h1.textContent = "Welcome to our website ";
       personalGreeting.textContent =
         "Welcome to our website. We hope you have fun while you are here.";
       // hide the 'forget' part of the form and show the 'remember' part
       forgetDiv.style.display = "none";
       rememberDiv.style.display = "block";
     }
   }
   ```

8. Zu guter Letzt müssen wir die Funktion `nameDisplayCheck()` ausführen, wenn die Seite geladen wird. Wenn wir dies nicht tun, wird die personalisierte Begrüßung nicht über Seitenladevorgänge hinweg bestehen bleiben. Fügen Sie das Folgende am Ende Ihres Codes hinzu:

   ```js
   nameDisplayCheck();
   ```

Ihr Beispiel ist fertig – gut gemacht! Alles, was noch fehlt, ist, Ihren Code zu speichern und Ihre HTML-Seite in einem Browser zu testen. Sie können unsere [fertige Version hier live in Aktion sehen](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/web-storage/personal-greeting.html).

> [!NOTE]
> Es gibt ein weiteres, etwas komplexeres Beispiel, das Sie unter [Verwendung der Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) erkunden können.

> [!NOTE]
> In der Zeile `<script src="index.js" defer></script>` des Quellcodes unserer fertigen Version gibt das `defer` Attribut an, dass der Inhalt des {{htmlelement("script")}} Elements nicht ausgeführt wird, bis die Seite fertig geladen ist.

## Speichern komplexer Daten – IndexedDB

Die [IndexedDB API](/de/docs/Web/API/IndexedDB_API) (manchmal abgekürzt als IDB) ist ein vollständiges Datenbanksystem, das im Browser verfügbar ist, in dem Sie komplexe, verwandte Daten speichern können, deren Typen nicht auf einfache Werte wie Strings oder Zahlen beschränkt sind. Sie können Videos, Bilder und so ziemlich alles andere in einer IndexedDB-Instanz speichern.

Die IndexedDB API ermöglicht es Ihnen, eine Datenbank zu erstellen und dann Objekt-Speicher innerhalb dieser Datenbank zu erstellen. Objekt-Speicher sind wie Tabellen in einer relationalen Datenbank, und jeder Objekt-Speicher kann eine Anzahl von Objekten enthalten. Um mehr über die IndexedDB API zu erfahren, siehe [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB).

Allerdings hat dies seinen Preis: IndexedDB ist viel komplexer zu verwenden als die Web Storage API. In diesem Abschnitt werden wir wirklich nur an der Oberfläche dessen kratzen, wozu sie fähig ist, aber wir geben Ihnen genug, um anzufangen.

### Ein Beispiel zur Notizspeicherung

Hier führen wir Sie durch ein Beispiel, das Ihnen ermöglicht, Notizen in Ihrem Browser zu speichern und sie wann immer Sie möchten anzusehen und zu löschen, indem Sie es für sich selbst aufbauen und die grundlegendsten Teile von IDB erklären, während wir fortfahren.

Die App sieht ungefähr so ​​aus:

![IndexDB Notizen-Demo-Screenshot mit 4 Abschnitten. Der erste Abschnitt ist der Header. Der zweite Abschnitt listet alle Notizen auf, die erstellt wurden. Es gibt zwei Notizen, jede mit einem Löschen-Button. Ein dritter Abschnitt ist ein Formular mit 2 Eingabefeldern für 'Titel der Notiz' und 'Text der Notiz' und einem Button mit der Bezeichnung 'Neue Notiz erstellen'. Der untere Abschnitt Fußzeile liest 'Copyright nobody. Use the code as you like'.](idb-demo.png)

Jede Notiz hat einen Titel und einen Textkörper, beide individuell bearbeitbar. Der JavaScript-Code, den wir im Folgenden durchgehen, enthält detaillierte Kommentare, die Ihnen helfen, zu verstehen, was vor sich geht.

### Grundlagen starten

1. Erstellen Sie zunächst lokale Kopien unserer [`index.html`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index.html), [`style.css`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/style.css) und [`index-start.js`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index-start.js) Dateien in einem neuen Verzeichnis auf Ihrer lokalen Maschine.
2. Sehen Sie sich die Dateien an. Sie werden sehen, dass das HTML eine Website mit einer Kopfzeile und einer Fußzeile sowie einen Hauptinhaltbereich definiert, der einen Platz zum Anzeigen von Notizen und ein Formular zum Eingeben neuer Notizen in die Datenbank enthält. Das CSS sorgt für etwas Styling, um klarer zu machen, was vor sich geht. Die JavaScript-Datei enthält fünf deklarierte Konstanten, die Verweise auf das {{htmlelement("ul")}}-Element enthalten, in dem die Notizen angezeigt werden; die {{htmlelement("input")}}-Elemente für Titel und Text, das {{htmlelement("form")}} selbst und der {{htmlelement("button")}}.
3. Benennen Sie Ihre JavaScript-Datei in `index.js` um. Sie sind jetzt bereit, Code hinzuzufügen.

### Datenbank-Grundeinrichtung

Schauen wir uns nun an, was wir eigentlich tun müssen, um eine Datenbank einzurichten.

1. Fügen Sie unter den Konstantendeklarationen die folgenden Zeilen hinzu:

   ```js
   // Create an instance of a db object for us to store the open database in
   let db;
   ```

   Hier erklären wir eine Variable namens `db` – diese wird später verwendet, um ein Objekt zu speichern, das unsere Datenbank repräsentiert. Wir werden dies an einigen Stellen verwenden, also haben wir es hier global deklariert, um die Dinge zu erleichtern.

2. Fügen Sie als Nächstes die folgenden Zeilen hinzu:

   ```js
   // Open our database; it is created if it doesn't already exist
   // (see the upgradeneeded handler below)
   const openRequest = window.indexedDB.open("notes_db", 1);
   ```

   Diese Zeile erstellt eine Anfrage zum Öffnen von Version `1` einer Datenbank namens `notes_db`. Wenn diese nicht bereits existiert, wird sie durch nachfolgenden Code für Sie erstellt. Sie werden dieses Anfrage-Muster sehr häufig in IndexedDB sehen. Datenbankoperationen benötigen Zeit. Sie möchten nicht, dass der Browser hängt, während Sie auf die Ergebnisse warten, also sind Datenbankoperationen {{Glossary("asynchronous", "asynchron")}}, was bedeutet, dass sie nicht sofort geschehen, sondern irgendwann in der Zukunft, und Sie werden benachrichtigt, wenn sie abgeschlossen sind.

   Um dies in IndexedDB zu handhaben, erstellen Sie ein Anforderungsobjekt (das wie Sie möchten genannt werden kann – wir haben es hier `openRequest` genannt, damit klar ist, wofür es ist). Sie verwenden dann Ereignis-Handler, um Code auszuführen, wenn die Anfrage abgeschlossen, fehlgeschlagen usw. ist. Dies werden Sie unten in Anwendung sehen.

   > [!NOTE]
   > Die Versionsnummer ist wichtig. Wenn Sie Ihre Datenbank aktualisieren möchten (z. B. durch Ändern der Tabellenstruktur), müssen Sie Ihren Code erneut mit einer erhöhten Versionsnummer ausführen, einem anderen im `upgradeneeded` Handler spezifizierten Schema (siehe unten) usw. Wir werden die Aktualisierung von Datenbanken in diesem Tutorial nicht behandeln.

3. Fügen Sie nun die folgenden Ereignis-Handler direkt unter Ihrer vorherigen Ergänzung hinzu:

   ```js
   // error handler signifies that the database didn't open successfully
   openRequest.addEventListener("error", () =>
     console.error("Database failed to open"),
   );

   // success handler signifies that the database opened successfully
   openRequest.addEventListener("success", () => {
     console.log("Database opened successfully");

     // Store the opened database object in the db variable. This is used a lot below
     db = openRequest.result;

     // Run the displayData() function to display the notes already in the IDB
     displayData();
   });
   ```

   Der [`error`](/de/docs/Web/API/IDBRequest/error_event) Ereignis-Handler wird ausgeführt, wenn das System zurückkommt und sagt, dass die Anfrage fehlgeschlagen ist. Dadurch können Sie auf dieses Problem reagieren. In unserem Beispiel drucken wir einfach eine Nachricht in die JavaScript-Konsole.

   Der [`success`](/de/docs/Web/API/IDBRequest/success_event) Ereignis-Handler wird ausgeführt, wenn die Anforderung erfolgreich abgeschlossen wurde, was bedeutet, dass die Datenbank erfolgreich geöffnet wurde. Wenn dies der Fall ist, wird ein Objekt, das die geöffnete Datenbank darstellt, in der [`openRequest.result`](/de/docs/Web/API/IDBRequest/result) Eigenschaft verfügbar, wodurch wir die Datenbank manipulieren können. Wir speichern dies in der `db` Variablen, die wir zuvor für die spätere Verwendung erstellt haben. Wir führen auch eine Funktion namens `displayData()` aus, die die Daten in der Datenbank innerhalb des {{HTMLElement("ul")}} anzeigt. Wir führen sie jetzt aus, damit die in der Datenbank bereits vorhandenen Notizen sofort angezeigt werden, wenn die Seite geladen wird. Sie sehen `displayData()` später definiert.

4. Schließlich für diesen Abschnitt fügen wir wahrscheinlich den wichtigsten Ereignis-Handler zur Einrichtung der Datenbank hinzu: [`upgradeneeded`](/de/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event). Dieser Handler wird ausgeführt, wenn die Datenbank noch nicht eingerichtet wurde oder wenn die Datenbank mit einer höheren Versionsnummer als der in der vorhandenen gespeicherten Datenbank geöffnet wird (bei einem Upgrade). Fügen Sie den folgenden Code unter Ihrem vorherigen Handler hinzu:

   ```js
   // Set up the database tables if this has not already been done
   openRequest.addEventListener("upgradeneeded", (e) => {
     // Grab a reference to the opened database
     db = e.target.result;

     // Create an objectStore in our database to store notes and an auto-incrementing key
     // An objectStore is similar to a 'table' in a relational database
     const objectStore = db.createObjectStore("notes_os", {
       keyPath: "id",
       autoIncrement: true,
     });

     // Define what data items the objectStore will contain
     objectStore.createIndex("title", "title", { unique: false });
     objectStore.createIndex("body", "body", { unique: false });

     console.log("Database setup complete");
   });
   ```

   Hier definieren wir das Schema (die Struktur) unserer Datenbank; das heißt, die Reihe von Spalten (oder Feldern), die sie enthält. Hier holen wir zuerst eine Referenz zur vorhandenen Datenbank aus der `result` Eigenschaft des Zielobjekts des Ereignisses (`e.target.result`), das das `request`-Objekt ist. Dies entspricht der Zeile `db = openRequest.result;` im `success`-Ereignis-Handler, aber wir müssen dies hier separat tun, weil der `upgradeneeded` Ereignis-Handler (falls erforderlich) vor dem `success` Ereignis-Handler ausgeführt wird, was bedeutet, dass der `db` Wert nicht verfügbar wäre, wenn wir dies nicht tun würden.

   Wir verwenden dann [`IDBDatabase.createObjectStore()`](/de/docs/Web/API/IDBDatabase/createObjectStore) zum Erstellen eines neuen Objekt-Speichers in unserer geöffneten Datenbank namens `notes_os`. Dies entspricht einer einzelnen Tabelle in einem konventionellen Datenbanksystem. Wir haben es den Namen Notizen gegeben und ein `autoIncrement` Schlüssel-Feld genannt `id` spezifiziert – in jedem neuen Datensatz wird dies automatisch mit einem inkrementierten Wert vergeben – der Entwickler muss dies nicht explizit festlegen. Als Schlüssel wird das Feld `id` verwendet, um Datensätze eindeutig zu identifizieren, wie z. B. beim Löschen oder Anzeigen eines Datensatzes.

   Wir erstellen auch zwei weitere Indizes (Felder) mit der Methode [`IDBObjectStore.createIndex()`](/de/docs/Web/API/IDBObjectStore/createIndex): `title` (das einen Titel für jede Notiz enthalten wird) und `body` (das den Textkörper der Notiz enthalten wird).

Mit diesem Datenbankschema eingerichtet, wird jeder Datensatz, den wir der Datenbank hinzufügen, als ein Objekt entlang dieser Linien dargestellt:

```json
{
  "title": "Buy milk",
  "body": "Need both cows milk and soy.",
  "id": 8
}
```

### Hinzufügen von Daten zur Datenbank

Schauen wir uns nun an, wie wir Datensätze zur Datenbank hinzufügen können. Dies wird über das Formular auf unserer Seite geschehen.

Fügen Sie unter Ihrem vorherigen Ereignis-Handler die folgende Zeile hinzu, die einen `submit`-Ereignis-Handler festlegt, der eine Funktion namens `addData()` ausführt, wenn das Formular abgesendet wird (wenn der Absende-{{htmlelement("button")}} gedrückt wird, was zu einer erfolgreichen Formularübermittlung führt):

```js
// Create a submit event handler so that when the form is submitted the addData() function is run
form.addEventListener("submit", addData);
```

Nun definieren wir die Funktion `addData()`. Fügen Sie diese unter Ihrer vorherigen Zeile hinzu:

```js
// Define the addData() function
function addData(e) {
  // prevent default - we don't want the form to submit in the conventional way
  e.preventDefault();

  // grab the values entered into the form fields and store them in an object ready for being inserted into the DB
  const newItem = { title: titleInput.value, body: bodyInput.value };

  // open a read/write db transaction, ready for adding the data
  const transaction = db.transaction(["notes_os"], "readwrite");

  // call an object store that's already been added to the database
  const objectStore = transaction.objectStore("notes_os");

  // Make a request to add our newItem object to the object store
  const addRequest = objectStore.add(newItem);

  addRequest.addEventListener("success", () => {
    // Clear the form, ready for adding the next entry
    titleInput.value = "";
    bodyInput.value = "";
  });

  // Report on the success of the transaction completing, when everything is done
  transaction.addEventListener("complete", () => {
    console.log("Transaction completed: database modification finished.");

    // update the display of data to show the newly added item, by running displayData() again.
    displayData();
  });

  transaction.addEventListener("error", () =>
    console.log("Transaction not opened due to error"),
  );
}
```

Dies ist ziemlich komplex; nutzen wir dies, um es herunterzubrechen:

- Wir führen [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) für das Ereignis-Objekt aus, um zu verhindern, dass das Formular tatsächlich auf herkömmliche Weise abgesendet wird (dies würde ein Seiten-Neuladen verursachen und die Erfahrung verderben).
- Wir erstellen ein Objekt, das einen Datensatz repräsentiert, der in die Datenbank eingefügt werden soll und mit Werten aus den Formulareingaben gefüllt wird. Beachten Sie, dass wir nicht explizit einen `id` Wert einbeziehen müssen – wie bereits erwähnt, wird dies automatisch gefüllt.
- Wir öffnen eine `readwrite` Transaktion gegen den `notes_os` Objektspeicher mit der Methode [`IDBDatabase.transaction()`](/de/docs/Web/API/IDBDatabase/transaction). Dieses Transaktionsobjekt ermöglicht es uns, auf den Objektspeicher zuzugreifen, damit wir etwas damit tun können, z.B. einen neuen Datensatz hinzufügen.
- Wir greifen mit der Methode [`IDBTransaction.objectStore()`](/de/docs/Web/API/IDBTransaction/objectStore) auf den Objektspeicher zu und speichern das Ergebnis in der Variablen `objectStore`.
- Wir fügen den neuen Datensatz mit [`IDBObjectStore.add()`](/de/docs/Web/API/IDBObjectStore/add) zur Datenbank hinzu. Dies erstellt ein Anforderungsobjekt, so wie wir es zuvor gesehen haben.
- Wir fügen eine Reihe von Ereignis-Handlern zu den Objekten `request` und `transaction` hinzu, um Code an kritischen Punkten im Lebenszyklus auszuführen. Sobald die Anforderung erfolgreich war, löschen wir die Formulareingaben, um die nächste Notiz einzugeben. Sobald die Transaktion abgeschlossen ist, führen wir die `displayData()` Funktion erneut aus, um die Anzeige der Notizen auf der Seite zu aktualisieren.

### Anzeigen der Daten

Wir haben `displayData()` bereits zweimal in unserem Code referenziert, also sollten wir es wahrscheinlich definieren. Fügen Sie dies zu Ihrem Code hinzu, unter der vorherigen Funktionsdefinition:

```js
// Define the displayData() function
function displayData() {
  // Here we empty the contents of the list element each time the display is updated
  // If you didn't do this, you'd get duplicates listed each time a new note is added
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  // Open our object store and then get a cursor - which iterates through all the
  // different data items in the store
  const objectStore = db.transaction("notes_os").objectStore("notes_os");
  objectStore.openCursor().addEventListener("success", (e) => {
    // Get a reference to the cursor
    const cursor = e.target.result;

    // If there is still another data item to iterate through, keep running this code
    if (cursor) {
      // Create a list item, h3, and p to put each data item inside when displaying it
      // structure the HTML fragment, and append it inside the list
      const listItem = document.createElement("li");
      const h3 = document.createElement("h3");
      const para = document.createElement("p");

      listItem.appendChild(h3);
      listItem.appendChild(para);
      list.appendChild(listItem);

      // Put the data from the cursor inside the h3 and para
      h3.textContent = cursor.value.title;
      para.textContent = cursor.value.body;

      // Store the ID of the data item inside an attribute on the listItem, so we know
      // which item it corresponds to. This will be useful later when we want to delete items
      listItem.setAttribute("data-note-id", cursor.value.id);

      // Create a button and place it inside each listItem
      const deleteBtn = document.createElement("button");
      listItem.appendChild(deleteBtn);
      deleteBtn.textContent = "Delete";

      // Set an event handler so that when the button is clicked, the deleteItem()
      // function is run
      deleteBtn.addEventListener("click", deleteItem);

      // Iterate to the next item in the cursor
      cursor.continue();
    } else {
      // Again, if list item is empty, display a 'No notes stored' message
      if (!list.firstChild) {
        const listItem = document.createElement("li");
        listItem.textContent = "No notes stored.";
        list.appendChild(listItem);
      }
      // if there are no more cursor items to iterate through, say so
      console.log("Notes all displayed");
    }
  });
}
```

Brechen wir dies erneut auseinander:

- Zuerst leeren wir den Inhalt des {{htmlelement("ul")}} Elements, bevor wir es dann mit dem aktualisierten Inhalt füllen. Wenn Sie dies nicht tun würden, würden Sie eine riesige Liste duplizierter Inhalte haben, die bei jedem Update hinzugefügt wird.
- Als Nächstes erhalten wir eine Referenz zum `notes_os` Objektspeicher mit [`IDBDatabase.transaction()`](/de/docs/Web/API/IDBDatabase/transaction) und [`IDBTransaction.objectStore()`](/de/docs/Web/API/IDBTransaction/objectStore) genauso, wie wir es in `addData()` getan haben, außer dass wir sie hier in einer Zeile verketten.
- Der nächste Schritt ist die Verwendung der Methode [`IDBObjectStore.openCursor()`](/de/docs/Web/API/IDBObjectStore/openCursor), um eine Anfrage für einen Cursor zu öffnen – dies ist ein Konstrukt, das zum Durchlaufen der Datensätze in einem Objektspeicher verwendet werden kann. Wir verketten einen `success` Ereignis-Handler an das Ende dieser Zeile, um den Code prägnanter zu gestalten – wenn der Cursor erfolgreich zurückgegeben wird, wird der Handler ausgeführt.
- Wir erhalten eine Referenz auf den Cursor selbst (ein [`IDBCursor`](/de/docs/Web/API/IDBCursor) Objekt) mit `const cursor = e.target.result`.
- Als Nächstes prüfen wir, ob der Cursor einen Datensatz aus dem Datenspeicher enthält (`if (cursor){ }`) – wenn ja, erstellen wir einen DOM-Fragment, füllen es mit den Daten des Datensatzes und fügen es in die Seite ein (innerhalb des `<ul>` Elements). Wir fügen auch einen Löschen-Button hinzu, der, wenn er geklickt wird, diese Notiz durch Ausführen der Funktion `deleteItem()` löschen wird, die wir im nächsten Abschnitt betrachten werden.
- Am Ende des `if` Blocks verwenden wir die Methode [`IDBCursor.continue()`](/de/docs/Web/API/IDBCursor/continue), um den Cursor zum nächsten Datensatz im Datenspeicher zu verschieben und den Inhalt des `if` Blocks erneut auszuführen. Wenn es einen weiteren Datensatz zu durchlaufen gibt, führt dies dazu, dass er in die Seite eingefügt wird, und dann wird `continue()` erneut ausgeführt und so weiter.
- Wenn keine weiteren Datensätze zur Iteration vorhanden sind, wird `cursor` `undefined` zurückgeben, und deshalb wird der `else` Block anstelle des `if` Blocks ausgeführt. Dieser Block prüft, ob Notizen in das `<ul>` eingefügt wurden – falls nicht, fügt er eine Nachricht ein, dass keine Notiz gespeichert wurde.

### Eine Notiz löschen

Wie oben erwähnt, wenn der Lösch-Button einer Notiz gedrückt wird, wird die Notiz gelöscht. Dies geschieht durch die Funktion `deleteItem()`:

```js
// Define the deleteItem() function
function deleteItem(e) {
  // retrieve the name of the task we want to delete. We need
  // to convert it to a number before trying to use it with IDB; IDB key
  // values are type-sensitive.
  const noteId = Number(e.target.parentNode.getAttribute("data-note-id"));

  // open a database transaction and delete the task, finding it using the id we retrieved above
  const transaction = db.transaction(["notes_os"], "readwrite");
  const objectStore = transaction.objectStore("notes_os");
  const deleteRequest = objectStore.delete(noteId);

  // report that the data item has been deleted
  transaction.addEventListener("complete", () => {
    // delete the parent of the button
    // which is the list item, so it is no longer displayed
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    console.log(`Note ${noteId} deleted.`);

    // Again, if list item is empty, display a 'No notes stored' message
    if (!list.firstChild) {
      const listItem = document.createElement("li");
      listItem.textContent = "No notes stored.";
      list.appendChild(listItem);
    }
  });
}
```

- Der erste Teil davon könnte etwas Erklärung benötigen – wir rufen die ID des zu löschenden Datensatzes mit `Number(e.target.parentNode.getAttribute('data-note-id'))` ab – erinnern Sie sich, dass die ID des Datensatzes in einem `data-note-id` Attribut auf dem `<li>` gespeichert wurde, als es zuerst angezeigt wurde. Wir müssen das Attribut jedoch durch das globale eingebaute Objekt [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number) laufen lassen, da es vom Datentyp String ist und daher nicht von der Datenbank erkannt würde, die eine Zahl erwartet.
- Dann erhalten wir eine Referenz auf den Objektspeicher, indem wir das gleiche Muster verwenden, das wir zuvor gesehen haben, und verwenden die Methode [`IDBObjectStore.delete()`](/de/docs/Web/API/IDBObjectStore/delete), um den Datensatz aus der Datenbank zu löschen, und übergeben ihm die ID.
- Wenn die Datenbanktransaktion abgeschlossen ist, löschen wir das `<li>` der Notiz aus dem DOM und führen erneut den Check durch, ob das `<ul>` nun leer ist und fügen eine entsprechende Notiz ein.

Das war's! Ihr Beispiel sollte nun funktionieren.

Wenn Sie damit Schwierigkeiten haben, zögern Sie nicht, [es mit unserem Live-Beispiel zu vergleichen](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/indexeddb/notes/) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index.js)).

### Speichern komplexer Daten über IndexedDB

Wie oben erwähnt, kann IndexedDB verwendet werden, um mehr als nur Textstrings zu speichern. Sie können so ziemlich alles speichern, was Sie möchten, einschließlich komplexer Objekte wie Video- oder Bildblobs. Und es ist nicht viel schwieriger zu erreichen als jede andere Art von Daten.

Um zu demonstrieren, wie das geht, haben wir ein weiteres Beispiel namens [IndexedDB-Video-Store](https://github.com/mdn/learning-area/tree/main/javascript/apis/client-side-storage/indexeddb/video-store) geschrieben (sehen Sie es [auch live hier laufen](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/indexeddb/video-store/)). Wenn Sie das Beispiel zum ersten Mal ausführen, werden alle Videos aus dem Netzwerk heruntergeladen, in einer IndexedDB-Datenbank gespeichert und dann die Videos innerhalb von {{htmlelement("video")}}-Elementen in der Benutzeroberfläche angezeigt. Beim zweiten Mal wird geprüft, ob die Videos in der Datenbank vorhanden sind, und sie werden von dort geholt, bevor sie angezeigt werden – dies macht spätere Ladezeiten viel schneller und weniger bandbreitenhungrig.

Lassen Sie uns die interessantesten Teile des Beispiels durchgehen. Wir werden nicht alles behandeln – Vieles davon ist ähnlich wie das vorherige Beispiel, und der Code ist gut kommentiert.

1. Für dieses Beispiel haben wir die Namen der abzurufenden Videos in einem Array von Objekten gespeichert:

   ```js
   const videos = [
     { name: "crystal" },
     { name: "elf" },
     { name: "frog" },
     { name: "monster" },
     { name: "pig" },
     { name: "rabbit" },
   ];
   ```

2. Zuerst, sobald die Datenbank erfolgreich geöffnet wurde, führen wir eine `init()` Funktion aus. Diese durchläuft die verschiedenen Videonamen und versucht, einen durch jeden Namen identifizierten Datensatz aus der `videos` Datenbank zu laden.

   Wenn jedes Video in der Datenbank gefunden wird (überprüft durch das Sehen, ob `request.result` zu `true` ausgewertet wird – wenn der Datensatz nicht vorhanden ist, wird er `undefined` sein), werden seine Videodateien (gespeichert als Blobs) und der Name des Videos direkt an die Funktion `displayVideo()` übergeben, um sie in der Benutzeroberfläche zu platzieren. Falls nicht, wird der Videoname an die Funktion `fetchVideoFromNetwork()` übergeben, um das Video aus dem Netzwerk zu holen.

   ```js
   function init() {
     // Loop through the video names one by one
     for (const video of videos) {
       // Open transaction, get object store, and get() each video by name
       const objectStore = db.transaction("videos_os").objectStore("videos_os");
       const request = objectStore.get(video.name);
       request.addEventListener("success", () => {
         // If the result exists in the database (is not undefined)
         if (request.result) {
           // Grab the videos from IDB and display them using displayVideo()
           console.log("taking videos from IDB");
           displayVideo(
             request.result.mp4,
             request.result.webm,
             request.result.name,
           );
         } else {
           // Fetch the videos from the network
           fetchVideoFromNetwork(video);
         }
       });
     }
   }
   ```

3. Das folgende Snippet stammt aus dem Inneren von `fetchVideoFromNetwork()` – hier holen wir MP4- und WebM-Versionen des Videos mit zwei separaten [`fetch()`](/de/docs/Web/API/Window/fetch) Anfragen. Wir verwenden dann die Methode [`Response.blob()`](/de/docs/Web/API/Response/blob), um den Körper jeder Antwort als Blob zu extrahieren, was uns eine Objektrepräsentation der Videos gibt, die später gespeichert und angezeigt werden kann.

   Wir haben hier jedoch ein Problem – diese beiden Anfragen sind asynchron, aber wir möchten versuchen, das Video nur dann anzuzeigen oder zu speichern, wenn beide Versprechen erfüllt sind. Glücklicherweise gibt es eine eingebaute Methode, die ein solches Problem handhabt – {{jsxref("Promise.all()")}}. Diese nimmt ein Argument – Verweise auf alle einzelnen Versprechen, die Sie auf Erfüllung prüfen möchten, platziert in einem Array – und gibt ein Versprechen zurück, das erfüllt ist, wenn alle einzelnen Versprechen erfüllt sind.

   Im `then()` Handler für dieses Versprechen rufen wir die Funktion `displayVideo()` auf, genau wie zuvor, um die Videos in der Benutzeroberfläche anzuzeigen, dann rufen wir auch die Funktion `storeVideo()` auf, um diese Videos in der Datenbank zu speichern.

   ```js
   // Fetch the MP4 and WebM versions of the video using the fetch() function,
   // then expose their response bodies as blobs
   const mp4Blob = fetch(`videos/${video.name}.mp4`).then((response) =>
     response.blob(),
   );
   const webmBlob = fetch(`videos/${video.name}.webm`).then((response) =>
     response.blob(),
   );

   // Only run the next code when both promises have fulfilled
   Promise.all([mp4Blob, webmBlob]).then((values) => {
     // display the video fetched from the network with displayVideo()
     displayVideo(values[0], values[1], video.name);
     // store it in the IDB using storeVideo()
     storeVideo(values[0], values[1], video.name);
   });
   ```

4. Schauen wir uns zuerst `storeVideo()` an. Dies ist dem Muster, das Sie im vorherigen Beispiel für das Hinzufügen von Daten zur Datenbank gesehen haben, sehr ähnlich – wir öffnen eine `readwrite` Transaktion und erhalten eine Referenz auf unseren `videos_os` Objektspeicher, erstellen ein Objekt, das den zur Datenbank hinzuzufügenden Datensatz repräsentiert, und fügen es dann mit [`IDBObjectStore.add()`](/de/docs/Web/API/IDBObjectStore/add) hinzu.

   ```js
   // Define the storeVideo() function
   function storeVideo(mp4, webm, name) {
     // Open transaction, get object store; make it a readwrite so we can write to the IDB
     const objectStore = db
       .transaction(["videos_os"], "readwrite")
       .objectStore("videos_os");

     // Add the record to the IDB using add()
     const request = objectStore.add({ mp4, webm, name });

     request.addEventListener("success", () =>
       console.log("Record addition attempt finished"),
     );
     request.addEventListener("error", () => console.error(request.error));
   }
   ```

5. Schließlich haben wir `displayVideo()`, das die benötigten DOM-Elemente erstellt, um das Video in der Benutzeroberfläche einzufügen, und sie dann der Seite hinzufügt. Die interessantesten Teile davon sind die unten gezeigten – um tatsächlich unsere Videoblobs in einem `<video>`-Element anzuzeigen, müssen wir Objekt-URLs (interne URLs, die auf die in den Speicher geladenen Videoblobs zeigen) mit der Methode [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) erstellen. Sobald das erledigt ist, können wir die Objekt-URLs als Werte der `src` Attribute unserer {{htmlelement("source")}} Elemente setzen, und es funktioniert einwandfrei.

   ```js
   // Define the displayVideo() function
   function displayVideo(mp4Blob, webmBlob, title) {
     // Create object URLs out of the blobs
     const mp4URL = URL.createObjectURL(mp4Blob);
     const webmURL = URL.createObjectURL(webmBlob);

     // Create DOM elements to embed video in the page
     const article = document.createElement("article");
     const h2 = document.createElement("h2");
     h2.textContent = title;
     const video = document.createElement("video");
     video.controls = true;
     const source1 = document.createElement("source");
     source1.src = mp4URL;
     source1.type = "video/mp4";
     const source2 = document.createElement("source");
     source2.src = webmURL;
     source2.type = "video/webm";

     // Embed DOM elements into page
     section.appendChild(article);
     article.appendChild(h2);
     article.appendChild(video);
     video.appendChild(source1);
     video.appendChild(source2);
   }
   ```

## Offline-Asset-Speicherung

Das obige Beispiel zeigt bereits, wie man eine App erstellt, die große Assets in einer IndexedDB-Datenbank speichert und das Herunterladen dieser mehr als einmal vermeiden kann. Dies ist bereits eine große Verbesserung der Nutzererfahrung, aber es fehlt noch etwas – die Haupt-HTML-, CSS- und JavaScript-Dateien müssen immer noch jedes Mal heruntergeladen werden, wenn auf die Seite zugegriffen wird, was bedeutet, dass sie bei fehlender Netzwerkverbindung nicht funktionieren würde.

![Firefox Offline-Bildschirm mit einer Illustration eines Cartoon-Charakters auf der linken Seite, der einen zwei-Pin-Stecker in seiner rechten Hand und eine zwei-Pin-Buchse in seiner linken Hand hält. Auf der rechten Seite gibt es eine Offline-Modus-Meldung und einen Button mit der Bezeichnung 'Try again'.](ff-offline.png)

An dieser Stelle kommen [Service Worker](/de/docs/Web/API/Service_Worker_API) und die eng verwandte [Cache API](/de/docs/Web/API/Cache) ins Spiel.

Ein Service Worker ist eine JavaScript-Datei, die gegen einen bestimmten Ursprung (Website oder Teil einer Website an einer bestimmten Domäne) registriert wird, wenn darauf von einem Browser zugegriffen wird. Wenn sie registriert ist, kann sie die Seiten des Ursprungs steuern, indem sie zwischen einer geladenen Seite und dem Netzwerk sitzt und alle Netzwerk-Anfragen abfängt, die auf diesen Ursprung gerichtet sind.

Wenn sie eine Anfrage abfängt, kann sie mit der Anfrage alles tun, was Sie möchten (siehe [Use-Case-Ideen](/de/docs/Web/API/Service_Worker_API#other_use_case_ideas)), aber das klassische Beispiel ist das Speichern der Netzwerkantworten offline und das Bereitstellen dieser als Antwort auf eine Anfrage statt der Antworten aus dem Netzwerk. Im Effekt ermöglicht es Ihnen, eine Website vollständig offline zu machen.

Die Cache API ist ein weiteres client-seitiges Speichermechanismus mit einem kleinen Unterschied – es ist dafür ausgelegt, HTTP-Antworten zu speichern und funktioniert daher sehr gut mit Service Workern.

### Ein Service-Worker-Beispiel

Schauen wir uns ein Beispiel an, um Ihnen eine Vorstellung davon zu geben, wie könnte dies aussehen. Wir haben eine andere Version des zuvor in Abschnitt betrachteten Video-Store-Beispiels erstellt – dies funktioniert identisch, außer dass es auch die HTML-, CSS- und JavaScript-Dateien in der Cache API über einen Service Worker speichert, was das Beispiel offline funktionsfähig macht!

Sehen Sie [IndexedDB-Video-Store mit Service Worker live laufen](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/), und sehen Sie auch [den Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/apis/client-side-storage/cache-sw/video-store-offline).

#### Registrierung des Service Workers

Das erste, was es zu beachten gibt, ist dass es einen zusätzlichen Codeabschnitt in der Haupt-JavaScript-Datei gibt (siehe [index.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.js)). Zuerst machen wir einen Feature-Erkennungstest, um zu sehen, ob das `serviceWorker` Mitglied im [`Navigator`](/de/docs/Web/API/Navigator) Objekt verfügbar ist. Wenn dies `true` zurückgibt, wissen wir, dass mindestens die Grundlagen der Service Worker unterstützt werden. Hier verwenden wir die Methode [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register), um einen im `sw.js` Datei enthaltenen Service Worker gegen den Ursprung, an dem er sich befindet, zu registrieren, damit er Seiten im gleichen Verzeichnis wie er oder Unterverzeichnisse steuern kann. Wenn das Versprechen erfüllt ist, wird der Service Worker als registriert angesehen.

```js
// Register service worker to control making site work offline
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register(
      "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js",
    )
    .then(() => console.log("Service Worker Registered"));
}
```

> [!NOTE]
> Der angegebene Pfad zur `sw.js` Datei ist relativ zum Standort des Ursprungs, nicht die JavaScript-Datei, die den Code enthält. Der Service Worker befindet sich an `https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js`. Der Ursprung ist `https://mdn.github.io`, und deshalb muss der angegebene Pfad `/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js` sein. Wenn Sie dieses Beispiel auf Ihrem eigenen Server hosten möchten, müssten Sie dies entsprechend ändern. Dies ist eher verwirrend, aber es muss aus Sicherheitsgründen so funktionieren.

#### Installation des Service Workers

Das nächste Mal, wenn auf eine Seite unter der Kontrolle des Service Workers zugegriffen wird (z.B. wenn das Beispiel neu geladen wird), wird der Service Worker gegen diese Seite installiert, was bedeutet, dass er beginnt, sie zu steuern. Wenn dies geschieht, wird ein `install` Ereignis gegen den Service Worker ausgelöst; Sie können Code innerhalb des Service Worker selbst schreiben, der auf die Installation reagieren wird.

Schauen wir uns ein Beispiel an, in der [sw.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js) Datei (dem Service Worker). Sie werden sehen, dass der Installations-Listener gegen `self` registriert wird. Dieses `self` Schlüsselwort ist eine Möglichkeit, auf den globalen Bereich des Service Workers von innerhalb der Service-Worker-Datei zu verweisen.

Innerhalb des `install` Handlers verwenden wir die Methode [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil), die auf dem Ereignis-Objekt verfügbar ist, um anzugeben, dass der Browser die Installation des Service Workers nicht abschließen sollte, bis das Versprechen innerhalb erfolgreich erfüllt wurde.

Hier sehen wir die Cache API in Aktion. Wir verwenden die Methode [`CacheStorage.open()`](/de/docs/Web/API/CacheStorage/open), um ein neues Cache-Objekt zu öffnen, in dem Antworten gespeichert werden können (ähnlich wie ein IndexedDB-Objektspeicher). Dieses Versprechen erfüllt sich mit einem [`Cache`](/de/docs/Web/API/Cache) Objekt, das den `video-store` Cache repräsentiert. Wir verwenden dann die Methode [`Cache.addAll()`](/de/docs/Web/API/Cache/addAll), um eine Reihe von Assets abzurufen und deren Antworten zum Cache hinzuzufügen.

```js
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open("video-store")
      .then((cache) =>
        cache.addAll([
          "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/",
          "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.html",
          "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.js",
          "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/style.css",
        ]),
      ),
  );
});
```

Das war's vorerst, Installation fertig.

#### Reagieren auf weitere Anfragen

Mit dem Service Worker registriert und gegen unsere HTML-Seite installiert und den entsprechenden Assets alle zu unserem Cache hinzugefügt, sind wir fast bereit zu gehen. Es gibt nur noch eine Sache zu tun: etwas Code schreiben, um auf weitere Netzwerk-Anfragen zu reagieren.

Das ist es, was der zweite Code in `sw.js` tut. Wir fügen einen weiteren Listener zum globalen Bereich des Service Workers hinzu, der die Handler-Funktion ausführt, wenn das `fetch` Ereignis ausgelöst wird. Dies geschieht, wenn der Browser eine Anfrage für ein Asset in dem Verzeichnis stellt, gegen das der Service Worker registriert ist.

Innerhalb des Handlers loggen wir zuerst die URL des angeforderten Assets. Dann geben wir eine benutzerdefinierte Antwort auf die Anfrage, mit der Methode [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith).

Innerhalb dieses Blocks überprüfen wir, ob eine passende Anfrage (das heißt, die URL entspricht) in einem Cache gefunden werden kann, indem wir [`CacheStorage.match()`](/de/docs/Web/API/CacheStorage/match) verwenden. Dieses Versprechen erfüllt sich mit der passenden Antwort, wenn ein Treffer gefunden wird, oder `undefined`, wenn nicht.

Wenn ein Treffer gefunden wird, geben wir ihn als benutzerdefinierte Antwort zurück. Andernfalls rufen wir die Antwort mit einem [fetch()](/de/docs/Web/API/Window/fetch) aus dem Netzwerk ab und geben diese stattdessen zurück.

```js
self.addEventListener("fetch", (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
```

Und das war's für unseren Service Worker. Es gibt noch viel mehr, was Sie mit ihnen tun können – für eine ausführlichere Betrachtung, siehe das [Service Worker Cookbook](https://github.com/mdn/serviceworker-cookbook). Vielen Dank an Paul Kinlan für seinen Artikel [Adding a Service Worker and Offline into your Web App](https://developers.google.com/codelabs/pwa-training/pwa03--going-offline#0), der dieses Beispiel inspiriert hat.

#### Testen des Beispiels im Offline-Modus

Um unser [Service Worker Beispiel](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/) zu testen, müssen Sie es ein paar Mal laden, um sicherzustellen, dass es installiert ist. Sobald dies geschehen ist, können Sie:

- Versuchen Sie, Ihr Netzwerk auszustecken / Ihre Wi-Fi auszuschalten.
- Wählen Sie _Datei > Offline arbeiten_ wenn Sie Firefox verwenden.
- Gehen Sie zu den Devtools, dann wählen Sie _Anwendung > Service Worker_, dann markieren Sie das _Offline_ Kontrollkästchen, wenn Sie Chrome verwenden.

Wenn Sie Ihre Beispielseite erneut laden, sollten Sie sehen, dass sie weiterhin einwandfrei lädt. Alles ist offline gespeichert – die Seite-Assets in einem Cache und die Videos in einer IndexedDB-Datenbank.

## Zusammenfassung

Das war's für den Moment. Wir hoffen, dass unser Überblick über client-seitige Speichertechnologien für Sie nützlich war.

## Siehe auch

- [Web storage API](/de/docs/Web/API/Web_Storage_API)
- [IndexedDB API](/de/docs/Web/API/IndexedDB_API)
- [Cookies](/de/docs/Web/HTTP/Cookies)
- [Service worker API](/de/docs/Web/API/Service_Worker_API)

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs/Third_party_APIs", "Learn_web_development/Extensions/Client-side_APIs")}}
