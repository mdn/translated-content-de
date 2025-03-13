---
title: Client-seitige Speicherung
slug: Learn_web_development/Extensions/Client-side_APIs/Client-side_storage
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs/Third_party_APIs", "Learn_web_development/Extensions/Client-side_APIs")}}

Moderne Webbrowser unterstützen verschiedene Möglichkeiten, um Daten auf dem Computer des Benutzers zu speichern — mit der Erlaubnis des Benutzers — und sie dann bei Bedarf abzurufen. Dies ermöglicht es Ihnen, Daten langfristig zu speichern, Seiten oder Dokumente für die Offline-Nutzung zu speichern, benutzerspezifische Einstellungen Ihrer Seite zu behalten und mehr. Dieser Artikel erklärt die Grundlagen, wie diese funktionieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere die <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">JavaScript-Objektgrundlagen</a> und Abdeckung von Kern-APIs wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Skripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Konzepte der client-seitigen Speicherung und welche Schlüsseltechnologien es gibt, um dies zu ermöglichen — Web Storage API, Cookies, Cache API und die IndexedDB API.</li>
          <li>Schlüsselfälle — Aufrechterhaltung des Zustands über Neuaufladungen hinweg, Persistenz von Login- und Nutzerpersonalisierungsdaten und lokale/offline Arbeiten.</li>
          <li>Verwendung von Web Storage für einfache Schlüssel-Wert-Paar Speicherung, gesteuert durch JavaScript.</li>
          <li>Verwendung von IndexedDB zum Speichern komplexerer, strukturierter Daten.</li>
          <li>Verwendung der Cache API und Service Worker für Offline-Anwendungsfälle.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Client-seitige Speicherung?

An anderer Stelle im MDN Lernbereich haben wir über den Unterschied zwischen [statischen Seiten](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview#static_sites) und [dynamischen Seiten](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview#dynamic_sites) gesprochen. Die meisten großen modernen Websites sind dynamisch — sie speichern Daten auf dem Server mithilfe einer Art Datenbank (serverseitige Speicherung), führen dann [serverseitigen](/de/docs/Learn_web_development/Extensions/Server-side) Code aus, um benötigte Daten abzurufen, integrieren diese in statische Seitenschablonen und liefern das resultierende HTML an den Client, um es im Browser des Benutzers anzuzeigen.

Die client-seitige Speicherung funktioniert nach ähnlichen Prinzipien, hat jedoch andere Verwendungszwecke. Sie besteht aus JavaScript-APIs, die es Ihnen ermöglichen, Daten auf dem Client (d. h. auf dem Computer des Benutzers) zu speichern und sie bei Bedarf abzurufen. Dies hat viele verschiedene Verwendungszwecke, wie:

- Personalisierung der Seiteneinstellungen (z.B. Anzeige der Wahl des Benutzers von benutzerdefinierten Widgets, Farbschema oder Schriftgröße).
- Persistenz vorheriger Seitenaktivitäten (z.B. Speicherung des Inhalts eines Warenkorbs von einer vorherigen Sitzung, Erinnerung daran, ob ein Benutzer zuvor angemeldet war).
- Speicherung von Daten und Ressourcen lokal, sodass eine Seite schneller (und potenziell kostengünstiger) heruntergeladen werden kann oder ohne Netzwerkverbindung nutzbar ist.
- Lokale Speicherung von webanwendungsgenerierten Dokumenten zur Offline-Nutzung

Oft werden client-seitige und serverseitige Speicherung zusammen verwendet. Zum Beispiel könnten Sie ein Batch von Musikdateien herunterladen (vielleicht verwendet von einem Web-Spiel oder einer Musikplayer-Anwendung), sie in einer client-seitigen Datenbank speichern und bei Bedarf abspielen. Der Benutzer müsste die Musikdateien nur einmal herunterladen — bei nachfolgenden Besuchen würden sie aus der Datenbank abgerufen.

> [!NOTE]
> Es gibt Grenzen für die Menge an Daten, die Sie mit client-seitigen Speicher-APIs speichern können (möglicherweise sowohl pro einzelne API als auch kumulativ); die genaue Grenze variiert je nach Browser und möglicherweise basierend auf Benutzereinstellungen. Weitere Informationen finden Sie unter [Speicherlimits und Räumungskriterien von Browsern](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria).

### Old school: Cookies

Das Konzept der client-seitigen Speicherung gibt es schon lange. Seit den frühen Tagen des Webs verwenden Seiten [Cookies](/de/docs/Web/HTTP/Guides/Cookies), um Informationen zu speichern, um die Benutzererfahrung auf Websites zu personalisieren. Sie sind die früheste Form der client-seitigen Speicherung, die im Web häufig verwendet wird.

Heutzutage gibt es einfachere Mechanismen zum Speichern von client-seitigen Daten, daher werden wir Ihnen in diesem Artikel nicht beibringen, wie man Cookies verwendet. Dies bedeutet jedoch nicht, dass Cookies im modernen Web völlig nutzlos sind — sie werden immer noch häufig verwendet, um Daten im Zusammenhang mit Personalisierung und Status des Benutzers zu speichern, z.B. Sitzungs-IDs und Zugriffstoken. Weitere Informationen über Cookies finden Sie in unserem Artikel [Verwendung von HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies).

### New school: Web Storage und IndexedDB

Die oben erwähnten "einfacheren" Funktionen sind wie folgt:

- Die [Web Storage API](/de/docs/Web/API/Web_Storage_API) bietet einen Mechanismus zum Speichern und Abrufen kleinerer Datenelemente, die aus einem Namen und einem entsprechenden Wert bestehen. Dies ist nützlich, wenn Sie nur einfache Daten speichern müssen, wie z.B. den Namen des Benutzers, ob er angemeldet ist, welche Farbe für den Hintergrund des Bildschirms verwendet werden soll usw.
- Die [IndexedDB API](/de/docs/Web/API/IndexedDB_API) bietet dem Browser ein vollständiges Datenbanksystem zum Speichern komplexer Daten. Dies kann für alles von kompletten Sätzen von Kundendaten bis hin zu komplexen Datentypen wie Audio- oder Videodateien verwendet werden.

Sie werden weiter unten mehr über diese APIs erfahren.

### Die Cache API

Die [`Cache`](/de/docs/Web/API/Cache) API ist zum Speichern von HTTP-Antworten auf bestimmte Anfragen gedacht und ist sehr nützlich für Dinge wie das Speichern von Website-Ressourcen offline, sodass die Seite anschließend ohne Netzwerkverbindung genutzt werden kann. Cache wird normalerweise in Kombination mit der [Service Worker API](/de/docs/Web/API/Service_Worker_API) verwendet, obwohl dies nicht zwingend erforderlich ist.

Die Verwendung von Cache und Service Workern ist ein fortgeschrittenes Thema, und wir werden es in diesem Artikel nicht im Detail behandeln, obwohl wir ein Beispiel im Abschnitt [Offline-Ressourcenspeicherung](#offline-ressourcenspeicherung) unten zeigen werden.

## Speichern einfacher Daten — Web Storage

Die [Web Storage API](/de/docs/Web/API/Web_Storage_API) ist sehr einfach zu verwenden — Sie speichern einfache Name/Wert-Paare (beschränkt auf Strings, Zahlen usw.) und rufen diese Werte bei Bedarf ab.

### Grundlegende Syntax

Lassen Sie uns Ihnen zeigen, wie:

1. Besuchen Sie zunächst unsere [Web Storage-Blankovorlage](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/web-storage/index.html) auf GitHub (öffnen Sie dies in einem neuen Tab).
2. Öffnen Sie die JavaScript-Konsole der Entwicklertools Ihres Browsers.
3. Alle Ihre Webspeicherdaten sind in zwei objektähnlichen Strukturen im Browser enthalten: [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage) und [`localStorage`](/de/docs/Web/API/Window/localStorage). Der erste behält Daten so lange, wie der Browser geöffnet ist (die Daten gehen verloren, wenn der Browser geschlossen wird) und der zweite behält Daten, selbst nachdem der Browser geschlossen und dann wieder geöffnet wurde. Wir werden im Leitfaden den zweiten verwenden, da er allgemein nützlicher ist.

   Die [`Storage.setItem()`](/de/docs/Web/API/Storage/setItem)-Methode ermöglicht es Ihnen, ein Datenelement im Speicher zu speichern — sie benötigt zwei Parameter: den Namen des Elements und seinen Wert. Versuchen Sie, dies in die JavaScript-Konsole einzugeben (ändern Sie den Wert in Ihren eigenen Namen, wenn Sie möchten!):

   ```js
   localStorage.setItem("name", "Chris");
   ```

4. Die [`Storage.getItem()`](/de/docs/Web/API/Storage/getItem)-Methode benötigt einen Parameter — den Namen eines Datenelements, das Sie abrufen möchten — und gibt den Wert des Elements zurück. Geben Sie jetzt diese Zeilen in Ihre JavaScript-Konsole ein:

   ```js
   let myName = localStorage.getItem("name");
   myName;
   ```

   Beim Eingeben der zweiten Zeile sollten Sie sehen, dass die `myName`-Variable jetzt den Wert des `name`-Datenelements enthält.

5. Die [`Storage.removeItem()`](/de/docs/Web/API/Storage/removeItem)-Methode benötigt einen Parameter — den Namen eines Datenelements, das Sie entfernen möchten — und entfernt dieses Element aus dem Webspeicher. Geben Sie die folgenden Zeilen in Ihre JavaScript-Konsole ein:

   ```js
   localStorage.removeItem("name");
   myName = localStorage.getItem("name");
   myName;
   ```

   Die dritte Zeile sollte nun `null` zurückgeben — das `name`-Element existiert nicht mehr im Webspeicher.

### Die Daten bleiben bestehen!

Ein wesentliches Merkmal des Webspeichers ist, dass die Daten zwischen Seitenladungen bestehen bleiben (und sogar, wenn der Browser heruntergefahren wird, im Fall von `localStorage`). Sehen wir uns dies in Aktion an.

1. Öffnen Sie erneut unsere Web Storage-Blankovorlage, diesmal jedoch in einem anderen Browser als dem, in dem Sie diese Anleitung geöffnet haben! Dies macht es einfacher, damit umzugehen.
2. Geben Sie diese Zeilen in die JavaScript-Konsole des Browsers ein:

   ```js
   localStorage.setItem("name", "Chris");
   let myName = localStorage.getItem("name");
   myName;
   ```

   Sie sollten das zurückgegebene Namenselement sehen.

3. Schließen Sie nun den Browser und öffnen Sie ihn erneut.
4. Geben Sie die folgenden Zeilen erneut ein:

   ```js
   let myName = localStorage.getItem("name");
   myName;
   ```

   Sie sollten sehen, dass der Wert immer noch verfügbar ist, obwohl der Browser geschlossen und dann wieder geöffnet wurde.

### Separater Speicher für jede Domain

Es gibt einen separaten Datenspeicher für jede Domain (jede separate Webadresse, die im Browser geladen wird). Sie werden sehen, dass wenn Sie zwei Websites laden (angenommen google.com und amazon.com) und versuchen, ein Element auf einer Website zu speichern, es für die andere Website nicht verfügbar sein wird.

Das macht Sinn — Sie können sich die Sicherheitsprobleme vorstellen, die auftreten würden, wenn Websites die Daten anderer sehen könnten!

### Ein ausführlicheres Beispiel

Lassen Sie uns dieses neu erworbene Wissen anwenden, indem wir ein funktionierendes Beispiel schreiben, um Ihnen eine Vorstellung davon zu geben, wie der Webspeicher verwendet werden kann. Unser Beispiel wird es Ihnen ermöglichen, einen Namen einzugeben, danach wird die Seite aktualisiert, um Ihnen eine personalisierte Begrüßung zu geben. Dieser Zustand wird auch über Seiten-/Browser-Neuladen hinweg bestehen bleiben, da der Name im Webspeicher gespeichert wird.

Sie können das Beispiel-HTML unter [personal-greeting.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/web-storage/personal-greeting.html) finden — dieses enthält eine Website mit einem Header, Inhalt und Footer und ein Formular zum Eingeben Ihres Namens.

![Ein Screenshot einer Website mit einer Kopfzeile, einem Inhalts- und Fußzeilenbereich. Die Kopfzeile hat einen Begrüßungstext auf der linken Seite und einen Button mit der Beschriftung "Vergessen" auf der rechten Seite. Der Inhalt enthält eine Überschrift gefolgt von zwei Dummytext-Absätzen. Der Footer liest "Copyright niemandem. Verwenden Sie den Code, wie Sie möchten".](web-storage-demo.png)

Bauen wir das Beispiel Schritt für Schritt auf, damit Sie verstehen, wie es funktioniert.

1. Erstellen Sie zunächst eine lokale Kopie unserer Datei [personal-greeting.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/web-storage/personal-greeting.html) in einem neuen Verzeichnis auf Ihrem Computer.
2. Beachten Sie, wie unser HTML eine JavaScript-Datei mit dem Namen `index.js` referenziert, mit einer Zeile wie `<script src="index.js" defer></script>`. Wir müssen diese erstellen und unseren JavaScript-Code darin schreiben. Erstellen Sie eine Datei `index.js` im selben Verzeichnis wie Ihre HTML-Datei.
3. Wir fangen damit an, Referenzen zu allen HTML-Elementen zu erstellen, die wir in diesem Beispiel manipulieren müssen — wir erstellen sie alle als Konstanten, da sich diese Referenzen im Lebenszyklus der App nicht ändern müssen. Fügen Sie die folgenden Zeilen in Ihre JavaScript-Datei ein:

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

4. Als Nächstes müssen wir einen kleinen Ereignislistener einfügen, um zu verhindern, dass das Formular tatsächlich abgesendet wird, wenn der Absenden-Button gedrückt wird, da dies nicht das Verhalten ist, das wir möchten. Fügen Sie diesen Schnipsel unter Ihrem vorherigen Code hinzu:

   ```js
   // Stop the form from submitting when a button is pressed
   form.addEventListener("submit", (e) => e.preventDefault());
   ```

5. Jetzt müssen wir einen Ereignislistener hinzufügen, dessen Handler-Funktion ausgeführt wird, wenn der Button "Sag Hallo" geklickt wird. Die Kommentare erklären im Detail, was jeder Teil tut, im Wesentlichen nehmen wir hier den Namen, den der Benutzer in das Texteingabefeld eingegeben hat, speichern ihn mit `setItem()` im Webspeicher und führen dann eine Funktion namens `nameDisplayCheck()` aus, die die Aktualisierung des tatsächlichen Website-Textes handhabt. Fügen Sie dies am Ende Ihres Codes hinzu:

   ```js
   // run function when the 'Say hello' button is clicked
   submitBtn.addEventListener("click", () => {
     // store the entered name in web storage
     localStorage.setItem("name", nameInput.value);
     // run nameDisplayCheck() to sort out displaying the personalized greetings and updating the form display
     nameDisplayCheck();
   });
   ```

6. Zu diesem Zeitpunkt benötigen wir auch einen Ereignishandler, um eine Funktion auszuführen, wenn der Button "Vergessen" geklickt wird — dieser wird nur angezeigt, nachdem der Button "Sag Hallo" geklickt wurde (die beiden Formzustände schalten hin und her). In dieser Funktion entfernen wir das `name`-Element aus dem Webspeicher mit `removeItem()` und führen dann erneut `nameDisplayCheck()` aus, um die Anzeige zu aktualisieren. Fügen Sie dies am Ende hinzu:

   ```js
   // run function when the 'Forget' button is clicked
   forgetBtn.addEventListener("click", () => {
     // Remove the stored name from web storage
     localStorage.removeItem("name");
     // run nameDisplayCheck() to sort out displaying the generic greeting again and updating the form display
     nameDisplayCheck();
   });
   ```

7. Es ist jetzt an der Zeit, die Funktion `nameDisplayCheck()` selbst zu definieren. Hier überprüfen wir, ob das Namenselement im Webspeicher gespeichert wurde, indem wir `localStorage.getItem('name')` als konditionellen Test verwenden. Wenn der Name gespeichert wurde, wird dieser Aufruf `true` ergeben; falls nicht, wird der Aufruf `false` ergeben. Wenn der Aufruf `true` ergibt, zeigen wir eine personalisierte Begrüßung an, zeigen den "Vergessen"-Teil des Formulars und verbergen den "Sag Hallo"-Teil des Formulars. Wenn der Aufruf `false` ergibt, zeigen wir eine generische Begrüßung an und tun das Gegenteil. Fügen Sie erneut den folgenden Code am Ende hinzu:

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

8. Zu guter Letzt müssen wir die Funktion `nameDisplayCheck()` beim Laden der Seite ausführen. Wenn wir das nicht tun, wird die personalisierte Begrüßung nicht über Seitenneuladen hinweg bestehen bleiben. Fügen Sie das folgende am Ende Ihres Codes hinzu:

   ```js
   nameDisplayCheck();
   ```

Ihr Beispiel ist fertig — gut gemacht! Alles, was jetzt noch bleibt, ist, Ihren Code zu speichern und Ihre HTML-Seite in einem Browser zu testen. Sie können unsere [fertige Version hier live sehen](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/web-storage/personal-greeting.html).

> [!NOTE]
> Es gibt noch ein weiteres, etwas komplexeres Beispiel unter [Verwendung der Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API).

> [!NOTE]
> In der Zeile `<script src="index.js" defer></script>` des Quellcodes unserer fertigen Version gibt das `defer`-Attribut an, dass der Inhalt des {{htmlelement("script")}}-Elements nicht ausgeführt wird, bis die Seite vollständig geladen ist.

## Speichern komplexer Daten — IndexedDB

Die [IndexedDB API](/de/docs/Web/API/IndexedDB_API) (manchmal abgekürzt als IDB) ist ein vollständiges Datenbanksystem, das im Browser verfügbar ist, in dem Sie komplexe zusammenhängende Daten speichern können, deren Typen nicht auf einfache Werte wie Strings oder Zahlen beschränkt sind. Sie können Videos, Bilder und so ziemlich alles andere in einer IndexedDB-Instanz speichern.

Die IndexedDB API ermöglicht es Ihnen, eine Datenbank zu erstellen und dann Objektspeicher innerhalb dieser Datenbank zu erstellen. Objektspeicher sind wie Tabellen in einer relationalen Datenbank, und jeder Objektspeicher kann eine Anzahl von Objekten enthalten. Um mehr über die IndexedDB API zu erfahren, sehen Sie sich [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB) an.

Dies hat jedoch seinen Preis: IndexedDB ist viel komplexer zu verwenden als die Web Storage API. In diesem Abschnitt kratzen wir wirklich nur an der Oberfläche dessen, wozu es fähig ist, aber wir geben Ihnen genug, um anzufangen.

### Durcharbeiten eines Notizspeicher-Beispiels

Hier führen wir Sie durch ein Beispiel, das Ihnen ermöglicht, Notizen in Ihrem Browser zu speichern und sie anzuzeigen und zu löschen, wann immer Sie möchten. Wir bringen Ihnen bei, es für sich selbst aufzubauen und erklären Ihnen die grundlegendsten Teile von IDB, während wir voranschreiten.

Die App sieht ungefähr so aus:

![IndexDB Notizen-Demo-Screenshot mit vier Bereichen. Der erste Bereich ist der Kopfbereich. Der zweite Bereich listet alle erstellten Notizen auf. Er enthält zwei Notizen, jede mit einem Löschen-Button. Ein dritter Bereich ist ein Formular mit zwei Eingabefeldern für 'Notiztitel' und 'Notiztext' und einem Button mit der Beschriftung 'Neue Notiz erstellen'. Der untere Bereich, der Fußbereich, liest "Copyright niemandem. Verwenden Sie den Code, wie Sie möchten".](idb-demo.png)

Jede Notiz hat einen Titel und einen Text, jeder einzeln bearbeitbar. Der JavaScript-Code, den wir unten durchgehen, enthält detaillierte Kommentare, um Ihnen zu helfen, zu verstehen, was vor sich geht.

### Einstieg

1. Erstellen Sie zuerst lokale Kopien unserer Dateien [`index.html`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index.html), [`style.css`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/style.css) und [`index-start.js`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index-start.js) in einem neuen Verzeichnis auf Ihrem lokalen Rechner.
2. Sehen Sie sich die Dateien an. Sie werden sehen, dass das HTML eine Website mit einem Header und Footer definiert sowie einen Hauptbereich, der einen Platz zum Anzeigen von Notizen und ein Formular zum Eingeben neuer Notizen in die Datenbank enthält. Das CSS sorgt für etwas Styling, um klarer zu machen, was vor sich geht. Die JavaScript-Datei enthält fünf deklarierte Konstanten, die Referenzen zu dem {{htmlelement("ul")}}-Element enthalten, in dem die Notizen angezeigt werden, den Titel- und Text-{{htmlelement("input")}}-Elementen, dem {{htmlelement("form")}} selbst und dem {{htmlelement("button")}}.
3. Benennen Sie Ihre JavaScript-Datei in `index.js` um. Sie sind jetzt bereit, mit dem Hinzufügen von Code zu beginnen.

### Erste Einrichtung der Datenbank

Sehen wir uns nun an, was wir tun müssen, um tatsächlich eine Datenbank einzurichten.

1. Unterhalb der Konstantendeklarationen fügen Sie die folgenden Zeilen hinzu:

   ```js
   // Create an instance of a db object for us to store the open database in
   let db;
   ```

   Hier deklarieren wir eine Variable namens `db` — diese wird später verwendet, um ein Objekt darzustellen, das unsere Datenbank repräsentiert. Wir werden dies an mehreren Stellen verwenden, daher haben wir es hier global deklariert, um die Dinge einfacher zu machen.

2. Fügen Sie als nächstes Folgendes hinzu:

   ```js
   // Open our database; it is created if it doesn't already exist
   // (see the upgradeneeded handler below)
   const openRequest = window.indexedDB.open("notes_db", 1);
   ```

   Diese Zeile erstellt eine Anfrage zum Öffnen der Version `1` einer Datenbank namens `notes_db`. Wenn diese nicht bereits existiert, wird sie durch den nachfolgenden Code für Sie erstellt. Sie werden sehen, dass dieses Anfrage-Muster sehr oft in der IndexedDB verwendet wird. Datenbankoperationen benötigen Zeit. Sie möchten den Browser nicht einfrieren lassen, während Sie auf die Ergebnisse warten, daher sind Datenbankoperationen {{Glossary("asynchronous", "asynchron")}}, was bedeutet, dass sie nicht sofort, sondern irgendwann in der Zukunft geschehen, und Sie werden benachrichtigt, wenn sie abgeschlossen sind.

   Um dies in IndexedDB zu handhaben, erstellen Sie ein Request-Objekt (das Sie nennen können, wie Sie wollen — wir haben es hier `openRequest` genannt, damit klar ist, wofür es ist). Sie verwenden dann Event-Handler, um Code auszuführen, wenn die Anfrage abgeschlossen ist, fehlschlägt usw., was Sie unten in Verwendung sehen werden.

   > [!NOTE]
   > Die Versionsnummer ist wichtig. Wenn Sie Ihre Datenbank aktualisieren möchten (zum Beispiel, indem Sie die Tabellenstruktur ändern), müssen Sie Ihren Code erneut mit einer erhöhten Versionsnummer, anderer Schema, das im `upgradeneeded`-Handler festgelegt ist (siehe unten), ausführen usw. Wir werden die Aktualisierung der Datenbanken in diesem Leitfaden nicht behandeln.

3. Fügen Sie nun die folgenden Ereignis-Handler unter Ihrer vorherigen Ergänzung hinzu:

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

   Der [`error`](/de/docs/Web/API/IDBRequest/error_event)-Ereignishandler wird ausgeführt, wenn das System sagt, dass die Anfrage fehlgeschlagen ist. Dies ermöglicht Ihnen, auf dieses Problem zu reagieren. In unserem Beispiel geben wir einfach eine Meldung in der JavaScript-Konsole aus.

   Der [`success`](/de/docs/Web/API/IDBRequest/success_event)-Ereignishandler wird ausgeführt, wenn die Anfrage erfolgreich zurückkehrt, was bedeutet, dass die Datenbank erfolgreich geöffnet wurde. In diesem Fall wird ein Objekt, das die geöffnete Datenbank darstellt, in der [`openRequest.result`](/de/docs/Web/API/IDBRequest/result)-Eigenschaft verfügbar, was es uns ermöglicht, die Datenbank zu manipulieren. Wir speichern dies in der zuvor erstellten `db`-Variable für die spätere Verwendung. Wir führen auch eine Funktion namens `displayData()` aus, die die Daten in der Datenbank innerhalb der {{HTMLElement("ul")}} anzeigt. Wir führen sie jetzt aus, damit die bereits in der Datenbank vorhandenen Notizen sofort beim Laden der Seite angezeigt werden. Sie werden `displayData()` später definiert sehen.

4. Schließlich für diesen Abschnitt fügen wir wahrscheinlich den wichtigsten Ereignis-Handler zur Einrichtung der Datenbank hinzu: [`upgradeneeded`](/de/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event). Dieser Handler wird ausgeführt, wenn die Datenbank noch nicht eingerichtet wurde oder wenn die Datenbank mit einer größeren Versionsnummer als die vorhandene gespeicherte Datenbank (bei Durchführung eines Upgrades) geöffnet wird. Fügen Sie den folgenden Code unter Ihrem vorherigen Handler hinzu:

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

   Hier definieren wir das Schema (Struktur) unserer Datenbank; das heißt, den Satz von Spalten (oder Feldern), die sie enthält. Hier greifen wir zuerst auf ein Referenzobjekt der bestehenden Datenbank von der `result`-Eigenschaft des Ereignisziels (`e.target.result`) zu, das das `request`-Objekt ist. Dies entspricht der Zeile `db = openRequest.result;` im `success`-Ereignishandler, aber wir müssen dies hier separat tun, weil der `upgradeneeded`-Ereignishandler (falls benötigt) vor dem `success`-Ereignishandler ausgeführt wird, was bedeutet, dass der `db`-Wert nicht verfügbar wäre, wenn wir dies nicht tun würden.

   Wir verwenden dann [`IDBDatabase.createObjectStore()`](/de/docs/Web/API/IDBDatabase/createObjectStore), um einen neuen Objektspeicher innerhalb unserer geöffneten Datenbank namens `notes_os` zu erstellen. Dies entspricht einer einzigen Tabelle in einem konventionellen Datenbanksystem. Wir haben ihm den Namen `notes` gegeben und auch ein `autoIncrement`-Schlüsselfeld namens `id` angegeben — jedem neuen Datensatz wird automatisch ein inkrementierter Wert zugewiesen — der Entwickler muss dies nicht explizit festlegen. Als Schlüssel wird das `id`-Feld verwendet, um Datensätze eindeutig zu identifizieren, z.B. beim Löschen oder Anzeigen eines Datensatzes.

   Wir erstellen auch zwei weitere Indizes (Felder) mit der [`IDBObjectStore.createIndex()`](/de/docs/Web/API/IDBObjectStore/createIndex)-Methode: `title` (das einen Titel für jede Notiz enthalten wird) und `body` (das den Textkörper der Notiz enthalten wird).

Mit diesem Datenbankschema erstellt, wenn wir Datensätze in die Datenbank einfügen, wird jeder als ein Objekt entlang dieser Linien dargestellt:

```json
{
  "title": "Buy milk",
  "body": "Need both cows milk and soy.",
  "id": 8
}
```

### Hinzufügen von Daten zur Datenbank

Nun schauen wir uns an, wie wir Datensätze zur Datenbank hinzufügen können. Dies wird mit dem Formular auf unserer Seite geschehen.

Unter Ihrem vorherigen Ereignis-Handler fügen Sie die folgende Zeile hinzu, die einen `submit`-Ereignis-Handler einrichtet, der eine Funktion namens `addData()` ausführt, wenn das Formular gesendet wird (wenn der Absenden-{{htmlelement("button")}} gedrückt wird, was zu einer erfolgreichen Einreichung des Formulars führt):

```js
// Create a submit event handler so that when the form is submitted the addData() function is run
form.addEventListener("submit", addData);
```

Definieren wir nun die Funktion `addData()`. Fügen Sie dies unter Ihrer vorherigen Zeile ein:

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

Das ist ziemlich komplex; brechen wir es auf:

- Wir verwenden [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) am Ereignisobjekt, um zu verhindern, dass das Formular tatsächlich auf herkömmliche Weise gesendet wird (dies würde ein Seiten-Refresh verursachen und das Erlebnis ruinieren).
- Wir erstellen ein Objekt, das einen Datensatz darstellt, der in die Datenbank eingefügt werden soll, und füllen es mit Werten aus den Formulareingaben. Beachten Sie, dass wir keinen expliziten `id`-Wert angeben müssen — wie bereits erwähnt, wird dieser automatisch gefüllt.
- Wir öffnen eine `readwrite`-Transaktion gegen den `notes_os`-Objektspeicher mit der [`IDBDatabase.transaction()`](/de/docs/Web/API/IDBDatabase/transaction)-Methode. Dieses Transaktionsobjekt ermöglicht es uns, auf den Objektspeicher zuzugreifen, sodass wir etwas tun können, z.B. einen neuen Datensatz hinzufügen.
- Wir greifen auf den Objektspeicher mit der [`IDBTransaction.objectStore()`](/de/docs/Web/API/IDBTransaction/objectStore)-Methode zu, wobei das Ergebnis in der Variablen `objectStore` gespeichert wird.
- Wir fügen den neuen Datensatz mit [`IDBObjectStore.add()`](/de/docs/Web/API/IDBObjectStore/add) zur Datenbank hinzu. Dies erstellt ein Anfrage-Objekt, auf dieselbe Weise wie wir es vorher gesehen haben.
- Wir fügen eine Reihe von Ereignis-Handlern an das `request`- und das `transaction`-Objekt, um Code in entscheidenden Momenten im Lebenszyklus auszuführen. Sobald die Anfrage erfolgreich war, leeren wir die Formulareingaben, um für die Eingabe der nächsten Notiz bereit zu sein. Wenn die Transaktion abgeschlossen ist, führen wir die Funktion `displayData()` erneut aus, um die Anzeige der Notizen auf der Seite zu aktualisieren.

### Die Daten anzeigen

Wir haben `displayData()` bereits zweimal in unserem Code referenziert, wir sollten es wahrscheinlich definieren. Fügen Sie dies zu Ihrem Code, unterhalb der vorherigen Funktionsdefinition hinzu:

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

Lassen Sie uns dies wieder aufschlüsseln:

- Zuerst leeren wir den Inhalt des {{htmlelement("ul")}}-Elements, bevor wir es mit dem aktualisierten Inhalt füllen. Wenn Sie dies nicht tun, würden Sie mit einer riesigen Liste doppelter Inhalte enden, die bei jedem Update hinzugefügt werden würde.
- Als nächstes erhalten wir eine Referenz zum `notes_os`-Objektspeicher unter Verwendung von [`IDBDatabase.transaction()`](/de/docs/Web/API/IDBDatabase/transaction) und [`IDBTransaction.objectStore()`](/de/docs/Web/API/IDBTransaction/objectStore), wie wir es in `addData()` getan haben, außer dass wir sie hier in einer Zeile verketten.
- Der nächste Schritt ist die Verwendung der [`IDBObjectStore.openCursor()`](/de/docs/Web/API/IDBObjectStore/openCursor)-Methode, um eine Anfrage für einen Cursor zu öffnen — dieses ist ein Konstrukt, das verwendet werden kann, um über die Datensätze in einem Objektspeicher zu iterieren. Wir verketten einen `success`-Ereignishandler an das Ende dieser Zeile, um den Code prägnanter zu machen — wenn der Cursor erfolgreich zurückgegeben wird, wird der Handler ausgeführt.
- Wir erhalten eine Referenz auf den Cursor selbst (ein [`IDBCursor`](/de/docs/Web/API/IDBCursor)-Objekt) mit `const cursor = e.target.result`.
- Als nächstes prüfen wir, ob der Cursor einen Datensatz aus dem Datenspeicher enthält (`if (cursor){ }`) — falls ja, erstellen wir ein DOM-Fragment, füllen es mit den Daten des Datensatzes und fügen es in die Seite ein (innerhalb des `<ul>`-Elements). Wir fügen auch einen Lösch-Button hinzu, der beim Klicken diesen Datensatz durch Ausführen der Funktion `deleteItem()` löschen wird, die wir im nächsten Abschnitt betrachten werden.
- Am Ende des `if`-Blocks verwenden wir die [`IDBCursor.continue()`](/de/docs/Web/API/IDBCursor/continue)-Methode, um den Cursor auf den nächsten Datensatz im Datenspeicher vorzuschieben, und führen den Inhalt des `if`-Blocks erneut aus. Wenn es einen weiteren Datensatz gibt, zu dem iteriert werden soll, wird dieser eingebettet, und dann wird `continue()` erneut ausgeführt, und so weiter.
- Wenn es keine weiteren Datensätze mehr gibt, zu denen iteriert werden kann, gibt `cursor` `undefined` zurück, und daher wird der `else`-Block anstelle des `if`-Blocks ausgeführt. Dieser Block überprüft, ob irgendwelche Notizen in das `<ul>` eingefügt wurden — falls nicht, setzt er eine Nachricht ein, die anzeigt, dass keine Notiz gespeichert wurde.

### Eine Notiz löschen

Wie oben erwähnt, wird beim Drücken des Lösch-Buttons einer Notiz diese Notiz gelöscht. Dies wird durch die Funktion `deleteItem()` erreicht, welche so aussieht:

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

- Der erste Teil hiervon könnte etwas Erklärungsbedarf haben — wir rufen die ID des zu löschenden Datensatzes mit `Number(e.target.parentNode.getAttribute('data-note-id'))` ab — denken Sie daran, dass die ID des Datensatzes beim ersten Darstellen in einem `data-note-id`-Attribut auf dem `<li>` gespeichert wurde. Wir müssen jedoch das Attribut durch das globale eingebaute [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)-Objekt übergeben, da es vom Datentyp String ist und daher von der Datenbank nicht erkannt werden würde, die eine Zahl erwartet.
- Wir erhalten dann eine Referenz auf den Objektspeicher mit demselben Muster, wie wir es zuvor gesehen haben, und verwenden die [`IDBObjectStore.delete()`](/de/docs/Web/API/IDBObjectStore/delete)-Methode, um den Datensatz aus der Datenbank zu löschen und die ID zu übergeben.
- Sobald die Datenbanktransaktion abgeschlossen ist, löschen wir das `<li>`-Element der Notiz aus dem DOM und führen erneut die Überprüfung durch, ob das `<ul>` jetzt leer ist, und fügen gegebenenfalls einen Vermerk ein.

So, das ist es! Ihr Beispiel sollte jetzt funktionieren.

Wenn Sie Probleme haben, können Sie es gerne mit unserem [laufenden Beispiel abgleichen](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/indexeddb/notes/) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index.js)).

### Speichern komplexer Daten mit IndexedDB

Wie oben erwähnt, kann IndexedDB zum Speichern von mehr als nur Textstrings verwendet werden. Sie können so ziemlich alles speichern, was Sie möchten, einschließlich komplexer Objekte wie Video- oder Bild-Blobs. Und es ist nicht viel schwieriger als das Speichern anderer Datentypen.

Um zu demonstrieren, wie das geht, haben wir ein weiteres Beispiel geschrieben, genannt [IndexedDB Videoladen](https://github.com/mdn/learning-area/tree/main/javascript/apis/client-side-storage/indexeddb/video-store) (sehen Sie es sich [auch live hier laufen](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/indexeddb/video-store/)). Beim ersten Ausführen des Beispiels werden alle Videos aus dem Netzwerk heruntergeladen, in einer IndexedDB-Datenbank gespeichert und dann die Videos in der Benutzeroberfläche in {{htmlelement("video")}}-Elementen angezeigt. Bei einer zweiten Ausführung werden die Videos in der Datenbank gefunden und von dort abgerufen, bevor sie angezeigt werden — dies macht nachfolgende Ladezeiten viel schneller und weniger bandbreitenintensiv.

Gehen wir die interessantesten Teile des Beispiels durch. Wir werden nicht alles ansehen — vieles ist dem vorherigen Beispiel ähnlich, und der Code ist gut kommentiert.

1. Für dieses Beispiel haben wir die Namen der herunterzuladenden Videos in einem Array von Objekten gespeichert:

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

2. Zu Beginn, nachdem die Datenbank erfolgreich geöffnet wurde, führen wir eine `init()`-Funktion aus. Diese durchläuft die verschiedenen Videonamen und versucht, einen durch jeden Namen identifizierten Datensatz aus der `videos`-Datenbank zu laden.

   Wenn jedes Video in der Datenbank gefunden wird (überprüft durch die Feststellung, ob `request.result` `true` ergibt — wenn der Datensatz nicht vorhanden ist, wird es `undefined` sein), werden seine Videodateien (als Blobs gespeichert) und der Videoname direkt an die `displayVideo()`-Funktion übergeben, um sie in der Benutzeroberfläche zu platzieren. Wenn nicht, wird der Videoname an die `fetchVideoFromNetwork()`-Funktion übergeben, um, Sie haben es erraten, das Video aus dem Netzwerk zu laden.

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

3. Der folgende Schnipsel stammt aus `fetchVideoFromNetwork()` — hier holen wir MP4- und WebM-Versionen des Videos über zwei separate [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfragen. Wir verwenden dann die [`Response.blob()`](/de/docs/Web/API/Response/blob)-Methode, um den Körper jeder Antwort als Blob zu extrahieren, was uns eine Objektrepräsentation der Videos gibt, die später gespeichert und angezeigt werden kann.

   Wir haben hier jedoch ein Problem — diese zwei Anfragen sind beide asynchron, aber wir möchten das Video nur anzeigen oder speichern, wenn beide Versprechen erfüllt sind. Glücklicherweise gibt es eine eingebaute Methode, die ein solches Problem löst — {{jsxref("Promise.all()")}}. Dies nimmt ein Argument — Referenzen zu allen individuellen Versprechen, deren Erfüllung Sie prüfen möchten, in einem Array platziert — und gibt ein Versprechen zurück, das erfüllt wird, wenn alle individuellen Versprechen erfüllt sind.

   Im Inneren des `then()`-Handlers dieses Versprechens rufen wir die `displayVideo()`-Funktion wie zuvor auf, um die Videos in der Benutzeroberfläche anzuzeigen, und rufen dann auch die `storeVideo()`-Funktion auf, um diese Videos in der Datenbank zu speichern.

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

4. Schauen wir uns zuerst `storeVideo()` an. Dies ist dem Muster, das Sie im vorherigen Beispiel für das Hinzufügen von Daten zur Datenbank gesehen haben, sehr ähnlich — wir öffnen eine `readwrite`-Transaktion und erhalten eine Referenz zu unserem `videos_os`-Objektspeicher, erstellen ein Objekt, das den hinzuzufügenden Datensatz zur Datenbank darstellt, und fügen es dann mit [`IDBObjectStore.add()`](/de/docs/Web/API/IDBObjectStore/add) hinzu.

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

5. Schließlich haben wir `displayVideo()`, das die für das Einfügen des Videos in die Benutzeroberfläche notwendigen DOM-Elemente erstellt und sie dann in die Seite einfügt. Die interessantesten Teile davon sind die unten gezeigten — um unsere Video-Blobs in einem `<video>`-Element anzuzeigen, müssen wir Objekt-URLs erstellen (interne URLs, die auf die im Speicher gespeicherten Videoblob verweisen) mit der [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static)-Methode. Sobald das gemacht ist, können wir die Objekt-URLs als Werte der `src`-Attribute unseres {{htmlelement("source")}}-Elements setzen, und es funktioniert einwandfrei.

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

## Offline-Ressourcenspeicherung

Das obige Beispiel zeigt bereits, wie Sie eine App erstellen können, die große Ressourcen in einer IndexedDB-Datenbank speichert und so das Herunterladen mehr als einmal vermeidet. Dies ist bereits eine große Verbesserung der Benutzererfahrung, aber es fehlt noch eine Sache — die Haupt-HTML-, CSS- und JavaScript-Dateien müssen weiterhin jedes Mal heruntergeladen werden, wenn die Seite aufgerufen wird, was bedeutet, dass sie nicht funktionieren wird, wenn keine Netzwerkverbindung besteht.

![Firefox offline Bildschirm mit einer Illustration einer Cartoon-Figur auf der linken Seite, die einen Zweipolstecker in der rechten Hand und eine Zweipol-Steckdose in der linken Hand hält. Auf der rechten Seite gibt es eine Offline-Modus-Meldung und einen Button mit der Beschriftung 'Erneut versuchen'.](ff-offline.png)

Hier kommen [Service Worker](/de/docs/Web/API/Service_Worker_API) und die eng verwandte [Cache API](/de/docs/Web/API/Cache) ins Spiel.

Ein Service Worker ist eine JavaScript-Datei, die bei einem bestimmten Origin (Website oder Teil einer Website zu einer bestimmten Domain) registriert wird, wenn sie von einem Browser aufgerufen wird. Wenn er registriert ist, kann er Seiten kontrollieren, die unter diesem Origin verfügbar sind. Er tut dies, indem er zwischen einer geladenen Seite und dem Netzwerk steht und Netzwerkanfragen abfängt, die auf dieses Origin abzielen.

Wenn er eine Anfrage abfängt, kann er mit ihr tun, was Sie auch möchten (siehe [Anwendungsfall-Ideen](/de/docs/Web/API/Service_Worker_API#other_use_case_ideas)), aber das klassische Beispiel ist das Speichern der Netzwerkanfragen offline und dann das Bereitstellen dieser als Antwort auf eine Anfrage anstelle der Antworten aus dem Netzwerk. In der Praxis ermöglicht es Ihnen, eine Website komplett offline arbeiten zu lassen.

Die Cache API ist ein weiterer client-seitiger Speichermechanismus, mit einem kleinen Unterschied — sie ist darauf ausgelegt, HTTP-Antworten zu speichern, und funktioniert daher sehr gut mit Service Workern.

### Ein Service Worker Beispiel

Sehen wir uns ein Beispiel an, um Ihnen einen Eindruck davon zu geben, wie dies aussehen könnte. Wir haben eine weitere Version des im vorherigen Abschnitt gesehenen Videoladens kreiert — diese funktioniert identisch, außer dass sie auch die HTML-, CSS- und JavaScript-Dateien in der Cache API über einen Service Worker speichert und so das Beispiel offline laufen lässt!

Sehen Sie [IndexedDB Video Store mit Service Worker live](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/), und sehen Sie auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/apis/client-side-storage/cache-sw/video-store-offline).

#### Registrieren des Service Workers

Das erste, was zu beachten ist, ist, dass es einen zusätzlichen Code im Haupt-JavaScript-File gibt (siehe [index.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.js)). Zuerst führen wir einen Feature-Erkennungstest durch, um zu sehen, ob das `serviceWorker`-Element im [`Navigator`](/de/docs/Web/API/Navigator)-Objekt verfügbar ist. Wenn dies `true` ergibt, wissen wir, dass zumindest die Grundlagen der Service Worker unterstützt werden. Hier verwenden wir die [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register)-Methode, um einen in der `sw.js`-Datei enthaltenen Service Worker gegen das Origin, bei dem er sich befindet, zu registrieren, damit er Seiten im selben Verzeichnis wie er oder Unterverzeichnisse steuern kann. Wenn sein Versprechen erfüllt wird, wird der Service Worker als registriert angesehen.

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
> Der angegebene Pfad zur `sw.js`-Datei ist relativ zum Site-Origin, nicht zur JavaScript-Datei, die den Code enthält. Der Service Worker befindet sich unter `https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js`. Der Origin ist `https://mdn.github.io`, und daher muss der angegebene Pfad `/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js` sein. Wenn Sie dieses Beispiel auf Ihrem eigenen Server hosten möchten, müssten Sie dies entsprechend ändern. Dies ist ziemlich verwirrend, aber es muss aus Sicherheitsgründen auf diese Weise funktionieren.

#### Installation des Service Workers

Das nächste Mal, wenn eine beliebige Seite unter der Kontrolle des Service Workers aufgerufen wird (z.B. wenn das Beispiel neu geladen wird), wird der Service Worker gegen diese Seite installiert, was bedeutet, dass er beginnt, sie zu steuern. Wenn dies geschieht, wird ein `install`-Ereignis gegen den Service Worker ausgelöst; Sie können Code innerhalb des Service Worker selbst schreiben, der auf die Installation reagiert.

Sehen wir uns ein Beispiel an, in der [sw.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js) Datei (dem Service Worker). Sie werden sehen, dass der Installation-Listener gegen `self` registriert ist. Dieses `self`-Schlüsselwort ist eine Möglichkeit, den globalen Gültigkeitsbereich des Service Workers aus der Datei des Service Workers selbst zu referenzieren.

Innerhalb des `install`-Handlers verwenden wir die [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil)-Methode, die am Ereignisobjekt verfügbar ist, um zu signalisieren, dass der Browser die Installation des Service Workers nicht abschließen soll, bis das Versprechen innerhalb davon erfolgreich erfüllt wurde.

Hier sehen wir die Cache API in Aktion. Wir verwenden die [`CacheStorage.open()`](/de/docs/Web/API/CacheStorage/open)-Methode, um ein neues Cache-Objekt zu öffnen, in dem Antworten gespeichert werden können (ähnlich einem IndexedDB-Objektspeicher). Dieses Versprechen wird mit einem [`Cache`](/de/docs/Web/API/Cache)-Objekt erfüllt, das den `video-store`-Cache darstellt. Wir verwenden dann die [`Cache.addAll()`](/de/docs/Web/API/Cache/addAll)-Methode, um eine Reihe von Assets zu holen und deren Antworten in den Cache hinzuzufügen.

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

Das war's für jetzt, Installation erledigt.

#### Antworten auf weitere Anfragen

Mit dem Service Worker registriert und gegen unsere HTML-Seite installiert, sowie die entsprechenden Ressourcen alle zu unserem Cache hinzugefügt, sind wir fast bereit zu gehen. Es gibt nur noch eine Sache zu tun: Schreiben Sie etwas Code, um auf weitere Netzwerkanfragen zu antworten.

Das ist, was das zweite Code-Stück in `sw.js` macht. Wir fügen dem globalen Gültigkeitsbereich des Service Workers einen weiteren Listener hinzu, der die Handlerfunktion ausführt, wenn das `fetch`-Ereignis ausgelöst wird. Dies geschieht, wann immer der Browser eine Anfrage für ein Asset im Verzeichnis macht, gegen das der Service Worker registriert wurde.

Innerhalb des Handlers protokollieren wir zuerst die URL des angeforderten Assets. Wir geben dann eine benutzerdefinierte Antwort auf die Anfrage, indem wir die [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith)-Methode verwenden.

Innerhalb dieses Blocks verwenden wir [`CacheStorage.match()`](/de/docs/Web/API/CacheStorage/match), um zu überprüfen, ob eine übereinstimmende Anfrage (d.h. gleiche URL) in einem Cache gefunden werden kann. Dieses Versprechen wird mit der übereinstimmenden Antwort erfüllt, wenn eine Übereinstimmung gefunden wird, oder `undefined`, wenn nicht.

Wenn eine Übereinstimmung gefunden wird, geben wir diese als benutzerdefinierte Antwort zurück. Wenn nicht, holen wir die Antwort aus dem Netzwerk und geben diese stattdessen zurück.

```js
self.addEventListener("fetch", (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
```

Und das ist es für unseren Service Worker.
Es gibt noch viel mehr, was Sie mit ihnen tun können — für viel mehr Details, siehe das [Service Worker Kochbuch](https://github.com/mdn/serviceworker-cookbook).
Vielen Dank an Paul Kinlan für seinen Artikel [Hinzufügen eines Service Workers und Offline in Ihre Web-App](https://developers.google.com/codelabs/pwa-training/pwa03--going-offline#0), der dieses Beispiel inspiriert hat.

#### Testen des Beispiels offline

Um unser [Service Worker-Beispiel](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/) zu testen, müssen Sie es ein paar Mal laden, um sicherzustellen, dass es installiert ist. Wenn dies erledigt ist, können Sie:

- Versuchen Sie, Ihre Netzwerkverbindung zu trennen/Ihren WLAN zu deaktivieren.
- Wählen Sie _Datei > Offline arbeiten_, wenn Sie Firefox verwenden.
- Gehen Sie zu den Developer Tools, wählen dann _Anwendung > Service Workers_ und aktivieren das _Offline_-Häkchen, wenn Sie Chrome verwenden.

Wenn Sie Ihre Beispielseite erneut aktualisieren, sollten Sie sehen, dass sie trotzdem einwandfrei lädt. Alles wird offline gespeichert — die Seitenressourcen im Cache, und die Videos in einer IndexedDB-Datenbank.

## Zusammenfassung

Das war's fürs Erste. Wir hoffen, dass Ihnen unsere Übersicht der client-seitigen Speichertechnologien nützlich war.

## Siehe auch

- [Web Storage API](/de/docs/Web/API/Web_Storage_API)
- [IndexedDB API](/de/docs/Web/API/IndexedDB_API)
- [Cookies](/de/docs/Web/HTTP/Guides/Cookies)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs/Third_party_APIs", "Learn_web_development/Extensions/Client-side_APIs")}}
