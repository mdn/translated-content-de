---
title: Client-seitige Speicherung
slug: Learn/JavaScript/Client-side_web_APIs/Client-side_storage
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}

{{PreviousMenu("Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs", "Learn/JavaScript/Client-side_web_APIs")}}

Moderne Webbrowser unterstützen verschiedene Möglichkeiten, Daten mit der Erlaubnis des Benutzers auf dem Computer des Benutzers zu speichern und bei Bedarf abzurufen. Dies ermöglicht es Ihnen, Daten für die langfristige Speicherung zu persistieren, Websites oder Dokumente für die Offline-Nutzung zu speichern, benutzerspezifische Einstellungen für Ihre Website zu behalten und mehr. Dieser Artikel erklärt die grundlegenden Funktionsweisen dieser Möglichkeiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in JavaScript (siehe
        <a href="/de/docs/Learn/JavaScript/First_steps">erste Schritte</a>,
        <a href="/de/docs/Learn/JavaScript/Building_blocks"
          >Bausteine</a
        >,
        <a href="/de/docs/Learn/JavaScript/Objects">JavaScript-Objekte</a>),
        die
        <a href="/de/docs/Learn/JavaScript/Client-side_web_APIs/Introduction"
          >Grundlagen der Client-seitigen APIs</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man client-seitige Speicher-APIs verwendet, um Anwendungsdaten zu speichern.
      </td>
    </tr>
  </tbody>
</table>

## Client-seitige Speicherung?

An anderer Stelle im MDN-Lernbereich haben wir über den Unterschied zwischen [statischen Sites](/de/docs/Learn/Server-side/First_steps/Client-Server_overview#static_sites) und [dynamischen Sites](/de/docs/Learn/Server-side/First_steps/Client-Server_overview#dynamic_sites) gesprochen. Die meisten großen modernen Websites sind dynamisch — sie speichern Daten auf dem Server mithilfe einer Art von Datenbank (serverseitige Speicherung), führen dann [serverseitigen](/de/docs/Learn/Server-side) Code aus, um die benötigten Daten abzurufen, fügen sie in statische Seitentemplates ein und liefern das resultierende HTML an den Client zur Anzeige im Browser des Benutzers.

Die client-seitige Speicherung arbeitet nach ähnlichen Prinzipien, hat jedoch andere Anwendungsfälle. Sie besteht aus JavaScript-APIs, die es Ihnen ermöglichen, Daten auf dem Client (d.h. auf dem Rechner des Benutzers) zu speichern und bei Bedarf abzurufen. Dies hat viele unterschiedliche Verwendungen, wie zum Beispiel:

- Personalisierung von Website-Einstellungen (z.B. Anzeige der Auswahl eines Benutzers von benutzerdefinierten Widgets, Farbschema oder Schriftgröße).
- Speichern vorheriger Website-Aktivitäten (z.B. Speichern des Inhalts eines Warenkorbs aus einer vorherigen Sitzung, Erinnerung daran, ob ein Benutzer zuvor eingeloggt war).
- Lokales Speichern von Daten und Ressourcen, damit eine Website schneller (und potenziell kostengünstiger) heruntergeladen wird oder ohne Netzwerkverbindung nutzbar ist.
- Speichern von durch Webanwendungen generierten Dokumenten zur Offline-Nutzung.

Häufig werden Client-seitige und Server-seitige Speichermethoden zusammen verwendet. Beispielsweise könnten Sie eine Reihe von Musikdateien herunterladen (die vielleicht in einem Webspiel oder einer Musikplayer-Anwendung verwendet werden), sie in einer Client-seitigen Datenbank speichern und bei Bedarf abspielen. Der Benutzer müsste die Musikdateien nur einmal herunterladen — bei späteren Besuchen würden sie aus der Datenbank abgerufen.

> [!NOTE]
> Es gibt Grenzen für die Menge an Daten, die Sie mit Client-seitigen Speicher-APIs speichern können (möglicherweise sowohl pro einzelner API als auch kumulativ); das genaue Limit variiert je nach Browser und möglicherweise basierend auf Benutzereinstellungen. Weitere Informationen finden Sie unter [Browser storage quotas and eviction criteria](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria).

### Old school: Cookies

Das Konzept der Client-seitigen Speicherung gibt es schon lange. Seit den Anfängen des Webs nutzen Websites [Cookies](/de/docs/Web/HTTP/Cookies), um Informationen zu speichern, die die Benutzererfahrung auf Websites personalisieren. Sie sind die früheste Form der Client-seitigen Speicherung, die im Web häufig verwendet wird.

Heutzutage gibt es einfachere Mechanismen zum Speichern von Client-seitigen Daten, deshalb werden wir Ihnen in diesem Artikel nicht beibringen, wie man Cookies verwendet. Das bedeutet jedoch nicht, dass Cookies im modernen Web völlig nutzlos sind — sie werden immer noch häufig verwendet, um Daten im Zusammenhang mit der Benutzerpersonalisierung und dem Zustand zu speichern, z.B. Sitzung-IDs und Zugriffstokens. Weitere Informationen zu Cookies finden Sie in unserem Artikel [Using HTTP cookies](/de/docs/Web/HTTP/Cookies).

### New school: Web Storage und IndexedDB

Die oben genannten "einfacheren" Funktionen sind wie folgt:

- Die [Web Storage API](/de/docs/Web/API/Web_Storage_API) bietet einen Mechanismus zum Speichern und Abrufen kleinerer Datenelemente, die aus einem Namen und einem entsprechenden Wert bestehen. Dies ist nützlich, wenn Sie nur einige einfache Daten speichern müssen, wie den Namen des Benutzers, ob er eingeloggt ist, welche Farbe für den Hintergrund des Bildschirms verwendet werden soll usw.
- Die [IndexedDB API](/de/docs/Web/API/IndexedDB_API) stellt dem Browser ein vollständiges Datenbanksystem zum Speichern komplexer Daten zur Verfügung. Dies kann für Dinge von vollständigen Sätzen von Kundenaufzeichnungen bis hin zu komplexen Datentypen wie Audio- oder Videodateien verwendet werden.

Sie lernen weiter unten mehr über diese APIs.

### Die Cache API

Die {{domxref("Cache")}} API ist für das Speichern von HTTP-Antworten auf spezielle Anfragen konzipiert und ist sehr nützlich für Dinge wie das Speichern von Website-Ressourcen offline, sodass die Website anschließend ohne Netzwerkverbindung verwendet werden kann. Der Cache wird üblicherweise in Kombination mit der [Service Worker API](/de/docs/Web/API/Service_Worker_API) verwendet, obwohl dies nicht zwingend erforderlich ist.

Die Verwendung von Cache und Service-Workern ist ein fortgeschrittenes Thema, und wir werden es in diesem Artikel nicht im Detail behandeln, obwohl wir ein Beispiel im Abschnitt [Offline asset storage](#offline-assetspeicherung) unten zeigen werden.

## Einfache Daten speichern — Web Storage

Die [Web Storage API](/de/docs/Web/API/Web_Storage_API) ist sehr einfach zu verwenden — Sie speichern einfache Name/Wert-Paare von Daten (beschränkt auf Zeichenfolgen, Zahlen usw.) und rufen diese Werte bei Bedarf ab.

### Grundlegende Syntax

Lassen Sie uns zeigen, wie:

1. Gehen Sie zuerst zu unserer [Web Storage Blank Template](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/web-storage/index.html) auf GitHub (öffnen Sie dies in einem neuen Tab).
2. Öffnen Sie die JavaScript-Konsole der Entwicklertools Ihres Browsers.
3. Alle Ihre Webspeicherdaten sind in zwei objektähnlichen Strukturen im Browser enthalten: {{domxref("Window.sessionStorage", "sessionStorage")}} und {{domxref("Window.localStorage", "localStorage")}}. Die erste speichert Daten, solange der Browser geöffnet ist (die Daten gehen beim Schließen des Browsers verloren) und die zweite speichert Daten auch nach dem Schließen und erneuten Öffnen des Browsers. Wir werden die zweite in diesem Artikel verwenden, da sie im Allgemeinen nützlicher ist.

   Die {{domxref("Storage.setItem()")}}-Methode ermöglicht es Ihnen, ein Datenelement im Speicher zu speichern — sie benötigt zwei Parameter: den Namen des Elements und dessen Wert. Versuchen Sie, dies in Ihre JavaScript-Konsole einzugeben (ändern Sie den Wert zu Ihrem eigenen Namen, wenn Sie möchten!):

   ```js
   localStorage.setItem("name", "Chris");
   ```

4. Die {{domxref("Storage.getItem()")}}-Methode benötigt einen Parameter — den Namen eines Datenelements, das Sie abrufen möchten — und gibt den Wert des Elements zurück. Geben Sie nun diese Zeilen in Ihre JavaScript-Konsole ein:

   ```js
   let myName = localStorage.getItem("name");
   myName;
   ```

   Beim Tippen der zweiten Zeile sollten Sie sehen, dass die Variable `myName` nun den Wert des `name`-Datenelements enthält.

5. Die {{domxref("Storage.removeItem()")}}-Methode benötigt einen Parameter — den Namen eines Datenelements, das Sie entfernen möchten — und entfernt dieses Element aus dem Webspeicher. Tippen Sie die folgenden Zeilen in Ihre JavaScript-Konsole ein:

   ```js
   localStorage.removeItem("name");
   myName = localStorage.getItem("name");
   myName;
   ```

   Die dritte Zeile sollte nun `null` zurückgeben — das `name`-Element existiert nicht mehr im Webspeicher.

### Die Daten bleiben bestehen!

Ein wesentliches Merkmal des Webspeichers ist, dass die Daten zwischen Seitenladungen bestehen bleiben (und sogar, wenn der Browser heruntergefahren wird, im Fall von `localStorage`). Schauen wir uns das in Aktion an.

1. Öffnen Sie unsere Web Storage Blank Template erneut, diesmal jedoch in einem anderen Browser als dem, mit dem Sie dieses Tutorial geöffnet haben! Das wird das Handling erleichtern.
2. Geben Sie diese Zeilen in die JavaScript-Konsole des Browsers ein:

   ```js
   localStorage.setItem("name", "Chris");
   let myName = localStorage.getItem("name");
   myName;
   ```

   Sie sollten das `name`-Element zurückgegeben sehen.

3. Schließen Sie nun den Browser und öffnen Sie ihn erneut.
4. Geben Sie die folgenden Zeilen erneut ein:

   ```js
   let myName = localStorage.getItem("name");
   myName;
   ```

   Sie sollten sehen, dass der Wert immer noch verfügbar ist, obwohl der Browser geschlossen und dann erneut geöffnet wurde.

### Separater Speicher für jede Domain

Für jede Domain (jede separate im Browser geladene Webadresse) gibt es eine separate Datenspeicherung. Sie werden sehen, dass, wenn Sie zwei Websites laden (sagen wir google.com und amazon.com) und versuchen, ein Element auf einer Website zu speichern, es auf der anderen Website nicht verfügbar sein wird.

Das ergibt Sinn — man kann sich die Sicherheitsprobleme vorstellen, die auftreten würden, wenn Websites die Daten anderer Websites sehen könnten!

### Ein ausführlicheres Beispiel

Lassen Sie uns dieses neu erworbene Wissen anwenden, indem wir ein funktionierendes Beispiel schreiben, um Ihnen eine Vorstellung davon zu geben, wie der Webspeicher verwendet werden kann. Unser Beispiel wird es Ihnen ermöglichen, einen Namen einzugeben, nach dem die Seite eine personalisierte Begrüßung anzeigt. Dieser Zustand wird auch über Seiten-/Browser-Neuladevorgänge hinweg bestehen, da der Name im Webspeicher gespeichert wird.

Sie finden das Beispiel-HTML unter [personal-greeting.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/web-storage/personal-greeting.html) — dies enthält eine Website mit einem Header, Inhalt und Footer sowie einem Formular zum Eingeben Ihres Namens.

![Ein Screenshot einer Website mit Kopf-, Inhalts- und Footer-Bereichen. Der Kopfbereich zeigt links einen Willkommenstext und rechts eine Schaltfläche mit der Beschriftung 'vergessen'. Der Inhalt hat eine Überschrift, gefolgt von zwei Absätzen mit Beispieltext. Der Footer liest 'Copyright niemand. Verwenden Sie den Code nach Belieben.'](web-storage-demo.png)

Lassen Sie uns das Beispiel entwickeln, damit Sie verstehen, wie es funktioniert.

1. Erstellen Sie zunächst eine lokale Kopie unserer Datei [personal-greeting.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/web-storage/personal-greeting.html) in einem neuen Verzeichnis auf Ihrem Computer.
2. Beachten Sie als Nächstes, wie unser HTML auf eine JavaScript-Datei namens `index.js` verweist, mit einer Zeile wie `<script src="index.js" defer></script>`. Wir müssen diese Datei erstellen und unseren JavaScript-Code darin schreiben. Erstellen Sie eine `index.js`-Datei im gleichen Verzeichnis wie Ihre HTML-Datei.
3. Wir beginnen damit, Verweise auf alle HTML-Elemente zu erstellen, die wir in diesem Beispiel manipulieren müssen — wir erstellen sie alle als Konstanten, da sich diese Verweise nicht im Lebenszyklus der App ändern müssen. Fügen Sie die folgenden Zeilen zu Ihrer JavaScript-Datei hinzu:

   ```js
   // Erstellen benötigter Konstanten
   const rememberDiv = document.querySelector(".remember");
   const forgetDiv = document.querySelector(".forget");
   const form = document.querySelector("form");
   const nameInput = document.querySelector("#entername");
   const submitBtn = document.querySelector("#submitname");
   const forgetBtn = document.querySelector("#forgetname");

   const h1 = document.querySelector("h1");
   const personalGreeting = document.querySelector(".personal-greeting");
   ```

4. Als nächstes müssen wir einen kleinen Ereignis-Listener einfügen, um zu verhindern, dass das Formular tatsächlich gesendet wird, wenn die Schaltfläche zum Senden gedrückt wird, da dies nicht das gewünschte Verhalten ist. Fügen Sie diesen Code unterhalb Ihres vorherigen Codes ein:

   ```js
   // Stoppt das Formular von der Übermittlung, wenn eine Schaltfläche gedrückt wird
   form.addEventListener("submit", (e) => e.preventDefault());
   ```

5. Nun müssen wir einen Ereignis-Listener hinzufügen, dessen Handler-Funktion ausgeführt wird, wenn die Schaltfläche "Say hello" angeklickt wird. Die Kommentare erläutern im Detail, was jeder Teil macht, im Wesentlichen speichern wir hier den Namen, den der Benutzer in das Text-Eingabefeld eingegeben hat, im Webspeicher mit `setItem()` und führen dann eine Funktion namens `nameDisplayCheck()` aus, die das Aktualisieren des eigentlichen Website-Textes übernimmt. Fügen Sie dies am Ende Ihres Codes hinzu:

   ```js
   // Funktion ausführen, wenn die Schaltfläche 'Say hello' angeklickt wird
   submitBtn.addEventListener("click", () => {
     // Speichere den eingegebenen Namen im Webspeicher
     localStorage.setItem("name", nameInput.value);
     // Führt nameDisplayCheck() aus, um die personalisierte Begrüßung anzuzeigen und das Formular-Display zu aktualisieren
     nameDisplayCheck();
   });
   ```

6. An diesem Punkt benötigen wir auch einen Ereignis-Handler, um eine Funktion auszuführen, wenn die Schaltfläche "Forget" angeklickt wird — diese wird nur angezeigt, nachdem die Schaltfläche "Say hello" angeklickt wurde (die beiden Formularzustände wechseln hin und her). In dieser Funktion entfernen wir das `name`-Element aus dem Webspeicher mit `removeItem()` und führen erneut `nameDisplayCheck()` aus, um die Anzeige zu aktualisieren. Fügen Sie dies am Ende hinzu:

   ```js
   // Funktion ausführen, wenn die Schaltfläche 'Forget' angeklickt wird
   forgetBtn.addEventListener("click", () => {
     // Entfernen das gespeicherte 'name'-Element aus dem Webspeicher
     localStorage.removeItem("name");
     // Führt nameDisplayCheck() aus, um die allgemeine Begrüßung anzuzeigen und das Formular-Display zu aktualisieren
     nameDisplayCheck();
   });
   ```

7. Es ist jetzt an der Zeit, die `nameDisplayCheck()`-Funktion selbst zu definieren. Hier überprüfen wir, ob das `name`-Element im Webspeicher gespeichert wurde, indem wir `localStorage.getItem('name')` als Bedingungstest verwenden. Wenn der Name gespeichert wurde, wird dieser Aufruf `true` ergeben; wenn nicht, wird der Aufruf `false` ergeben. Wenn der Aufruf `true` ergibt, zeigen wir eine personalisierte Begrüßung an, zeigen den "Forget"-Teil des Formulars an und verstecken den "Say hello"-Teil des Formulars. Wenn der Aufruf `false` ergibt, zeigen wir eine allgemeine Begrüßung an und machen das Gegenteil. Fügen Sie den folgenden Code am Ende hinzu:

   ```js
   // Definieren der nameDisplayCheck() Funktion
   function nameDisplayCheck() {
     // Überprüfen, ob das 'name' Datenelement im Webspeicher gespeichert ist
     if (localStorage.getItem("name")) {
       // Wenn es ist, personalisierte Begrüßung anzeigen
       const name = localStorage.getItem("name");
       h1.textContent = `Welcome, ${name}`;
       personalGreeting.textContent = `Welcome to our website, ${name}! We hope you have fun while you are here.`;
       // Verstecken Sie den 'remember'-Teil des Formulars und zeigen Sie den 'forget'-Teil
       forgetDiv.style.display = "block";
       rememberDiv.style.display = "none";
     } else {
       // Wenn nicht, allgemeine Begrüßung anzeigen
       h1.textContent = "Welcome to our website ";
       personalGreeting.textContent =
         "Welcome to our website. We hope you have fun while you are here.";
       // Verstecken Sie den 'forget'-Teil des Formulars und zeigen Sie den 'remember'-Teil
       forgetDiv.style.display = "none";
       rememberDiv.style.display = "block";
     }
   }
   ```

8. Last but not least, wir müssen die `nameDisplayCheck()`-Funktion ausführen, wenn die Seite geladen wird. Wenn wir dies nicht tun, dann wird die personalisierte Begrüßung nicht bei Seiten-Neuladevorgängen beibehalten. Fügen Sie das folgende am Ende Ihres Codes hinzu:

   ```js
   nameDisplayCheck();
   ```

Ihr Beispiel ist fertiggestellt — gut gemacht! Alles, was jetzt noch bleibt, ist Ihren Code zu speichern und Ihre HTML-Seite in einem Browser zu testen. Sie können unsere [fertige Version hier live sehen](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/web-storage/personal-greeting.html).

> [!NOTE]
> Es gibt ein weiteres, etwas komplexeres Beispiel, das Sie unter [Using the Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) erkunden können.

> [!NOTE]
> In der Zeile `<script src="index.js" defer></script>` des Quellcodes unserer fertigen Version gibt das `defer`-Attribut an, dass der Inhalt des {{htmlelement("script")}}-Elements erst nach dem vollständigen Laden der Seite ausgeführt wird.

## Komplexe Daten speichern — IndexedDB

Die [IndexedDB API](/de/docs/Web/API/IndexedDB_API) (manchmal abgekürzt IDB) ist ein vollständiges Datenbanksystem, das im Browser verfügbar ist, in dem Sie komplexe, zusammenhängende Daten speichern können, deren Typen nicht auf einfache Werte wie Zeichenfolgen oder Zahlen beschränkt sind. Sie können Videos, Bilder und fast alles andere in einer IndexedDB-Instanz speichern.

Die IndexedDB-API ermöglicht es Ihnen, eine Datenbank zu erstellen, und dann Objektspeicher innerhalb dieser Datenbank zu erstellen. Objektspeicher sind wie Tabellen in einer relationalen Datenbank, und jeder Objektspeicher kann eine Anzahl von Objekten enthalten. Um mehr über die IndexedDB-API zu erfahren, lesen Sie [Using IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB).

Dies kommt jedoch mit einem Preis: IndexedDB ist weitaus komplexer zu verwenden als die Web Storage API. In diesem Abschnitt werden wir wirklich nur an der Oberfläche dessen kratzen, was es leisten kann, aber wir werden Ihnen genug bieten, um loszulegen.

### Durcharbeiten eines Notizspeichers-Beispiels

Hier führen wir Sie durch ein Beispiel, das es Ihnen ermöglicht, Notizen in Ihrem Browser zu speichern, anzusehen und zu löschen, wann immer Sie möchten. Wir führen Sie Schritt für Schritt durch und erklären die grundlegendsten Teile von IDB im Verlauf.

Die App sieht ungefähr so aus:

![IndexDB Notiz-Demo-Bildschirm mit 4 Abschnitten. Der erste Abschnitt ist der Kopfbereich. Der zweite Abschnitt listet alle erstellten Notizen auf. Er hat zwei Notizen, jede mit einem Löschen-Button. Ein dritter Abschnitt ist ein Formular mit 2 Eingabefeldern für „Notiztitel“ und „Notiztext“ und einem Button mit der Aufschrift „Neue Notiz erstellen“. Der untere Abschnitt des Fußbereichs liest 'Copyright nobody. Use the code as you like'.](idb-demo.png)

Jede Notiz hat einen Titel und einen Textkörper, jeder individuell bearbeitbar. Der JavaScript-Code, den wir unten durchgehen werden, hat detaillierte Kommentare, um Ihnen zu helfen, zu verstehen, was vor sich geht.

### Erste Schritte

1. Erstellen Sie zunächst lokale Kopien unserer Dateien [`index.html`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index.html), [`style.css`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/style.css) und [`index-start.js`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index-start.js) in einem neuen Verzeichnis auf Ihrem lokalen Rechner.
2. Schauen Sie sich die Dateien an. Sie werden sehen, dass das HTML eine Website mit einem Kopf- und Fußbereich definiert, sowie einen Hauptinhaltbereich, der einen Platz zum Anzeigen von Notizen enthält und ein Formular zum Eingeben neuer Notizen in die Datenbank. Das CSS bietet einige Stilvorlagen, um klarer zu machen, was vor sich geht. Die JavaScript-Datei enthält fünf deklarierte Konstanten mit Verweisen auf das {{htmlelement("ul")}}-Element, in dem die Notizen angezeigt werden, die Titel- und Text-{{htmlelement("input")}}-Elemente, das {{htmlelement("form")}} selbst und den {{htmlelement("button")}}.
3. Benennen Sie Ihre JavaScript-Datei in `index.js` um. Sie sind jetzt bereit, Code hinzuzufügen.

### Datenbank-Ersteinrichtung

Schauen wir uns jetzt an, was wir zuerst tun müssen, um eine Datenbank tatsächlich einzurichten.

1. Fügen Sie unter den Konstantendeklarationen die folgenden Zeilen hinzu:

   ```js
   // Erstellen einer Instanz eines db-Objekts für uns, um die geöffnete Datenbank darin zu speichern
   let db;
   ```

   Hier deklarieren wir eine Variable namens `db` — diese wird später verwendet, um ein Objekt darzustellen, das unsere Datenbank repräsentiert. Wir werden dies an einigen Stellen verwenden, deshalb haben wir Sie global hier deklariert, um die Dinge zu vereinfachen.

2. Fügen Sie als nächstes die folgenden Zeilen hinzu:

   ```js
   // Öffnen unserer Datenbank; sie wird erstellt, falls sie noch nicht existiert
   // (siehe den upgradeneeded-Handler unten)
   const openRequest = window.indexedDB.open("notes_db", 1);
   ```

   Diese Zeile erzeugt eine Anfrage, um Version `1` einer Datenbank mit dem Namen `notes_db` zu öffnen. Wenn dies nicht bereits existiert, wird es Ihnen durch nachfolgenden Code erstellt. Sie werden dieses Anfrage-Muster sehr oft in IndexedDB sehen. Datenbankoperationen benötigen Zeit. Sie möchten den Browser nicht blockieren, während Sie auf die Ergebnisse warten, daher sind Datenbankoperationen {{Glossary("asynchron")}}, was bedeutet, dass sie nicht sofort passieren, sondern irgendwann in der Zukunft, und Sie erhalten eine Benachrichtigung, wenn sie erledigt sind.

   Um dies in IndexedDB zu handhaben, erstellen Sie ein Anfrage-Objekt (das beliebig benannt werden kann — wir haben es hier `openRequest` genannt, damit es klar ist, wofür es ist). Sie verwenden dann Ereignis-Handler, um Code auszuführen, wenn die Anfrage abgeschlossen ist, fehlschlägt usw., was Sie unten in der Praxis sehen werden.

   > [!NOTE]
   > Die Versionsnummer ist wichtig. Wenn Sie Ihre Datenbank aktualisieren möchten (zum Beispiel durch Ändern der Tabellenstruktur), müssen Sie Ihren Code erneut mit einer erhöhten Versionsnummer ausführen, anders angegebenem Schema im `upgradeneeded`-Handler (siehe unten) usw. Wir werden das Upgrade von Datenbanken in diesem Tutorial nicht abdecken.

3. Fügen Sie nun die folgenden Ereignis-Handler direkt unter Ihrer vorherigen Ergänzung hinzu:

   ```js
   // Fehler-Handler zeigt an, dass die Datenbank nicht erfolgreich geöffnet wurde
   openRequest.addEventListener("error", () =>
     console.error("Datenbank konnte nicht geöffnet werden"),
   );

   // Erfolgs-Handler zeigt an, dass die Datenbank erfolgreich geöffnet wurde
   openRequest.addEventListener("success", () => {
     console.log("Datenbank erfolgreich geöffnet");

     // Das geöffnete Datenbankobjekt in der db-Variablen speichern. Dies wird weiter unten häufig verwendet
     db = openRequest.result;

     // Die displayData()-Funktion ausführen, um die bereits in der IDB vorhandenen Notizen anzuzeigen
     displayData();
   });
   ```

   Der {{domxref("IDBRequest/error_event", "error")}}-Ereignis-Handler wird ausgeführt, wenn das System zurückmeldet, dass die Anfrage fehlgeschlagen ist. Dies ermöglicht es Ihnen, auf das Problem zu reagieren. In unserem Beispiel geben wir einfach eine Nachricht an die JavaScript-Konsole aus.

   Der {{domxref("IDBRequest/success_event", "success")}}-Ereignis-Handler wird ausgeführt, wenn die Anfrage erfolgreich zurückgegeben wird, was bedeutet, dass die Datenbank erfolgreich geöffnet wurde. In diesem Fall wird ein Objekt, das die geöffnete Datenbank repräsentiert, in der {{domxref("IDBRequest.result", "openRequest.result")}}-Eigenschaft verfügbar, sodass wir die Datenbank manipulieren können. Wir speichern dies in der `db`-Variablen, die wir zuvor erstellt haben, für die spätere Verwendung. Wir führen auch eine Funktion namens `displayData()` aus, die die Daten in der Datenbank innerhalb des {{HTMLElement("ul")}} anzeigt. Wir führen sie jetzt aus, damit die Notizen, die sich bereits in der Datenbank befinden, sofort beim Laden der Seite angezeigt werden. Sie werden `displayData()` weiter unten definiert sehen.

4. Schließlich für diesen Abschnitt, fügen wir wahrscheinlich den wichtigsten Ereignis-Handler für die Einrichtung der Datenbank hinzu: {{domxref("IDBOpenDBRequest/upgradeneeded_event", "upgradeneeded")}}. Dieser Handler wird ausgeführt, wenn die Datenbank noch nicht eingerichtet wurde oder wenn die Datenbank mit einer größeren Versionsnummer als die bestehende gespeicherte Datenbank geöffnet wird (beim Durchführen eines Upgrades). Fügen Sie den folgenden Code unter Ihrem vorherigen Handler hinzu:

   ```js
   // Die Datenbanktabellen einrichten, wenn dies noch nicht geschehen ist
   openRequest.addEventListener("upgradeneeded", (e) => {
     // Eine Referenz zu der geöffneten Datenbank abrufen
     db = e.target.result;

     // Erstellen eines objectStore in unserer Datenbank, um Notizen und einen automatisch inkrementierenden Schlüssel zu speichern
     // Ein objectStore ist ähnlich wie eine 'Tabelle' in einer relationalen Datenbank
     const objectStore = db.createObjectStore("notes_os", {
       keyPath: "id",
       autoIncrement: true,
     });

     // Definieren, welche Dateneinträge der objectStore enthalten wird
     objectStore.createIndex("title", "title", { unique: false });
     objectStore.createIndex("body", "body", { unique: false });

     console.log("Datenbankeinrichtung abgeschlossen");
   });
   ```

   Hier definieren wir das Schema (Struktur) unserer Datenbank; das heißt, die Menge der Spalten (oder Felder), die sie enthält. Hier holen wir uns zuerst eine Referenz zu der bestehenden Datenbank aus der `result`-Eigenschaft des Ziels des Ereignisses (`e.target.result`), also dem `request`-Objekt. Dies entspricht der Zeile `db = openRequest.result;` im `success`-Ereignis-Handler, aber wir müssen dies hier separat tun, weil der `upgradeneeded`-Ereignis-Handler (falls notwendig) vor dem `success`-Ereignis-Handler ausgeführt wird, was bedeutet, dass der `db`-Wert nicht verfügbar wäre, wenn wir dies nicht täten.

   Wir verwenden dann {{domxref("IDBDatabase.createObjectStore()")}} um einen neuen Objektspeicher in unserer geöffneten Datenbank namens `notes_os` zu erstellen. Dies ist äquivalent zu einer einzelnen Tabelle in einem herkömmlichen Datenbanksystem. Wir haben es mit dem Namen Notizen versehen und auch ein `autoIncrement`-Schlüsselfeld namens `id` spezifiziert — in jedem neuen Eintrag wird dies automatisch mit einem inkrementierten Wert versehen — der Entwickler muss dies nicht explizit festlegen. Da es sich um den Schlüssel handelt, wird das `id`-Feld verwendet, um Datensätze eindeutig zu identifizieren, z.B. beim Löschen oder Anzeigen eines Eintrags.

   Wir erstellen auch zwei weitere Indizes (Felder) mit der {{domxref("IDBObjectStore.createIndex()")}}-Methode: `title` (das einen Titel für jede Notiz enthalten wird) und `body` (das den Text der Notiz enthalten wird).

Mit diesem Datenbankschema wird, wenn wir beginnen, Datensätze in die Datenbank hinzuzufügen, jeder Datensatz als Objekt in etwa so dargestellt:

```json
{
  "title": "Milch kaufen",
  "body": "Brauche sowohl Kuhmilch als auch Soja.",
  "id": 8
}
```

### Hinzufügen von Daten zur Datenbank

Schauen wir nun, wie wir Datensätze zur Datenbank hinzufügen können. Dies wird mit dem Formular auf unserer Seite geschehen.

Fügen Sie unter Ihrem vorherigen Ereignis-Handler die folgende Zeile hinzu, die einen `submit`-Ereignis-Handler mit einer Funktion aufruft, die `addData()` genannt wird, wenn das Formular übermittelt wird (wenn der Senden-{{htmlelement("button")}} gedrückt wird und eine erfolgreiche Formularübermittlung erfolgt):

```js
// Einen submit-Ereignis-Handler erstellen, sodass bei Übermittlung des Formulars die addData()-Funktion ausgeführt wird
form.addEventListener("submit", addData);
```

Lassen Sie uns jetzt die `addData()`-Funktion definieren. Fügen Sie dies unter Ihre vorherige Zeile hinzu:

```js
// Die addData()-Funktion definieren
function addData(e) {
  // Standardverhalten verhindern - wir möchten nicht, dass das Formular auf herkömmliche Weise abgeschickt wird
  e.preventDefault();

  // Die in die Formularfelder eingegebenen Werte abrufen und in einem Objekt speichern, um in die Datenbank eingefügt zu werden
  const newItem = { title: titleInput.value, body: bodyInput.value };

  // Einen Lese-/Schreib-Datenbank-Transaktion öffnen, bereit um die Daten hinzuzufügen
  const transaction = db.transaction(["notes_os"], "readwrite");

  // Einen bereits zur Datenbank hinzugefügten objectStore aufrufen
  const objectStore = transaction.objectStore("notes_os");

  // Eine Anfrage machen, um unser newItem-Objekt zum objectStore hinzuzufügen
  const addRequest = objectStore.add(newItem);

  addRequest.addEventListener("success", () => {
    // Das Formular leeren, bereit für das Hinzufügen des nächsten Eintrags
    titleInput.value = "";
    bodyInput.value = "";
  });

  // Erfolg der Transaktion melden, wenn alles fertig ist
  transaction.addEventListener("complete", () => {
    console.log("Transaktion abgeschlossen: Datenbankänderung abgeschlossen.");

    // Anzeige der Daten aktualisieren, um das neu hinzugefügte Element anzuzeigen, indem displayData() erneut ausgeführt wird.
    displayData();
  });

  transaction.addEventListener("error", () =>
    console.log("Transaktion nicht geöffnet aufgrund eines Fehlers"),
  );
}
```

Dies ist recht komplex; auseinander genommen:

- Wir rufen {{domxref("Event.preventDefault()")}} auf dem Ereignisobjekt auf, um zu verhindern, dass das Formular tatsächlich auf herkömmliche Weise abgeschickt wird (dies würde einen Seiten-Refresh verursachen und das Erlebnis beeinträchtigen).
- Wir erstellen ein Objekt, das einen Eintrag in der Datenbank darstellt und mit Werten aus den Formulareingaben befüllt wird. Beachten Sie, dass wir keinen `id`-Wert explizit einfügen müssen — wie bereits erklärt, wird dieser automatisch ausgefüllt.
- Wir öffnen eine `readwrite`-Transaktion gegen den `notes_os`-Objektspeicher mit der {{domxref("IDBDatabase.transaction()")}}-Methode. Dieses Transaktionsobjekt ermöglicht es uns, auf den Objektspeicher zuzugreifen, sodass wir etwas damit tun können, z.B. einen neuen Eintrag hinzufügen.
- Wir greifen auf den Objektspeicher mit der {{domxref("IDBTransaction.objectStore()")}}-Methode zu und speichern das Ergebnis in der `objectStore`-Variable.
- Wir fügen den neuen Eintrag mit der {{domxref("IDBObjectStore.add()")}}-Methode zur Datenbank hinzu. Dies erstellt ein Anfrageobjekt, analog zu den Mustern, die wir zuvor gesehen haben.
- Wir fügen eine Reihe von Event-Handlern zu den `request`- und `transaction`-Objekten hinzu, um an kritischen Punkten im Lebenszyklus Code auszuführen. Sobald die Anfrage erfolgreich war, leeren wir die Formulareingaben, um bereit für die Eingabe der nächsten Notiz zu sein. Sobald die Transaktion abgeschlossen ist, führen wir erneut die `displayData()`-Funktion aus, um die Anzeige der Notizen auf der Seite zu aktualisieren.

### Anzeigen der Daten

Wir haben in unserem Code bereits zweimal auf `displayData()` verwiesen, also sollten wir es wahrscheinlich definieren. Fügen Sie dies unter die vorherige Funktionsdefinition hinzu:

```js
// Define the displayData() function
function displayData() {
  // Hier leeren wir den Inhalt des Listenelements jedes Mal, wenn die Anzeige aktualisiert wird
  // Wenn Sie dies nicht täten, würden Sie bei jedem Hinzufügen einer neuen Notiz Duplikate aufgelistet erhalten
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  // Öffnen Sie unseren Objektspeicher und erhalten Sie dann einen Cursor - der durchläuft alle
  // verschiedenen Datenelemente im Speicher
  const objectStore = db.transaction("notes_os").objectStore("notes_os");
  objectStore.openCursor().addEventListener("success", (e) => {
    // Eine Referenz zum Cursor bekommen
    const cursor = e.target.result;

    // Wenn es ein weiteres Datenelement zum Durchlaufen gibt, der Code weiterlaufen lassen
    if (cursor) {
      // Erstellen eines Listenelements, h3 und p, um jedes Datenelement beim Anzeigen darin einzufügen
      // Strukturieren Sie das HTML-Fragment und hängen Sie es in die Liste ein
      const listItem = document.createElement("li");
      const h3 = document.createElement("h3");
      const para = document.createElement("p");

      listItem.appendChild(h3);
      listItem.appendChild(para);
      list.appendChild(listItem);

      // Die Daten aus dem Cursor in das h3 und para einfügen
      h3.textContent = cursor.value.title;
      para.textContent = cursor.value.body;

      // Die ID des Datenelements als Attribut auf dem Listenelement speichern, damit wir wissen,
      // zu welchem Element es gehört. Dies wird nützlich sein, wenn wir Elemente löschen möchten
      listItem.setAttribute("data-note-id", cursor.value.id);

      // Erstellen einer Schaltfläche und Platzieren dieser in jedem Listenelement
      const deleteBtn = document.createElement("button");
      listItem.appendChild(deleteBtn);
      deleteBtn.textContent = "Löschen";

      // Setzen eines Ereignis-Handlers, sodass bei Klick auf die Schaltfläche die deleteItem()
      // Funktion ausgeführt wird
      deleteBtn.addEventListener("click", deleteItem);

      // Zum nächsten Element im Cursor iterieren
      cursor.continue();
    } else {
      // Wenn das Listenelement leer ist, eine Nachricht anzeigen, dass keine Notizen gespeichert wurden
      if (!list.firstChild) {
        const listItem = document.createElement("li");
        listItem.textContent = "Keine Notizen gespeichert.";
        list.appendChild(listItem);
      }
      // Wenn es keine weiteren Cursor-Elemente mehr gibt, die durchlaufen werden können, dies angeben
      console.log("Alle Notizen angezeigt");
    }
  });
}
```

Noch einmal, lassen Sie uns dies aufschlüsseln:

- Zuerst leeren wir den Inhalt des {{htmlelement("ul")}}-Elements, bevor wir es mit dem aktualisierten Inhalt füllen. Wenn Sie dies nicht tun würden, würden Sie am Ende eine riesige Liste mit dupliziertem Inhalt erhalten, die bei jedem Update hinzugefügt wird.
- Als nächstes holen wir uns eine Referenz auf den `notes_os`-Objektspeicher mit {{domxref("IDBDatabase.transaction()")}} und {{domxref("IDBTransaction.objectStore()")}} wie wir es in `addData()` getan haben, außer dass wir sie hier in einer Zeile zusammen verkettet haben.
- Der nächste Schritt ist die Verwendung der {{domxref("IDBObjectStore.openCursor()")}}-Methode, um eine Anfrage für einen Cursor zu öffnen — dies ist ein Konstrukt, das verwendet werden kann, um über die Datensätze in einem Objektspeicher zu iterieren. Wir verketteten einen `success`-Ereignis-Handler an das Ende dieser Zeile, um den Code prägnanter zu machen — wenn der Cursor erfolgreich zurückgegeben wird, wird der Handler ausgeführt.
- Wir erhalten eine Referenz auf den Cursor selbst (ein {{domxref("IDBCursor")}}-Objekt) mit `const cursor = e.target.result`.
- Als nächstes überprüfen wir, ob der Cursor einen Datensatz aus dem Datenspeicher enthält (`if (cursor){ }`) — falls ja, erstellen wir ein DOM-Fragment, fügen es mit den Daten aus dem Datensatz und hängen es in die Seite (innerhalb des `<ul>`-Elements) ein. Wir fügen auch eine Löschen-Schaltfläche hinzu, die bei Klick darauf diese Notiz löscht, indem die `deleteItem()`-Funktion ausgeführt wird, die wir im nächsten Abschnitt sehen werden.
- Am Ende des `if`-Blocks verwenden wir die {{domxref("IDBCursor.continue()")}}-Methode, um den Cursor zum nächsten Datensatz im Datenspeicher weiterzubewegen, und führen den Inhalt des `if`-Blocks erneut aus. Wenn es einen weiteren Datensatz gibt, zu dem iteriert werden kann, bewirkt dies, dass er in die Seite eingefügt wird, und dann wird `continue()` erneut ausgeführt, und so weiter.
- Wenn es keine weiteren Datensätze mehr gibt, über die iteriert werden kann, wird `cursor` `undefined` zurückgeben und deshalb wird der `else`-Block anstelle des `if`-Blocks ausgeführt. Dieser Block überprüft, ob Notizen in das `<ul>`-Element eingefügt wurden — wenn nicht, fügt er eine Nachricht ein, die angibt, dass keine Notiz gespeichert wurde.

### Löschen einer Notiz

Wie oben angegeben, wird eine Notiz gelöscht, wenn die Löschen-Schaltfläche einer Notiz gedrückt wird. Dies wird durch die `deleteItem()`-Funktion erreicht, die wie folgt aussieht:

```js
// Die deleteItem() Funktion definieren
function deleteItem(e) {
  // Den Namen der zu löschenden Aufgabe abrufen. Wir müssen
  // sie in eine Zahl umwandeln, bevor wir versuchen, sie mit IDB zu verwenden; IDB-Schlüssel-
  // Werte sind typensensitiv.
  const noteId = Number(e.target.parentNode.getAttribute("data-note-id"));

  // Eine Datenbank-Transaktion öffnen und die Aufgabe löschen, indem wir sie mit der oben abgerufenen ID finden
  const transaction = db.transaction(["notes_os"], "readwrite");
  const objectStore = transaction.objectStore("notes_os");
  const deleteRequest = objectStore.delete(noteId);

  // Berichten, dass das Datenelement gelöscht wurde
  transaction.addEventListener("complete", () => {
    // Das Elternteil der Schaltfläche löschen
    // welches das Listenelement ist, sodass es nicht mehr angezeigt wird
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    console.log(`Notiz ${noteId} gelöscht.`);

    // Wenn das Listenelement leer ist, eine Nachricht anzeigen, dass keine Notizen gespeichert wurden
    if (!list.firstChild) {
      const listItem = document.createElement("li");
      listItem.textContent = "Keine Notizen gespeichert.";
      list.appendChild(listItem);
    }
  });
}
```

- Der erste Teil davon könnte einige Erklärungen gebrauchen — wir rufen die ID des zu löschenden Datensatzes mit `Number(e.target.parentNode.getAttribute('data-note-id'))` ab — erinnern Sie sich, dass die ID des Datensatzes als `data-note-id`-Attribut auf dem `<li>` gespeichert wurde, als es zuerst angezeigt wurde. Wir müssen sie jedoch durch das globale eingebaute [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)-Objekt führen, da sie vom Datentyp Zeichenfolge ist und daher nicht von der Datenbank erkannt würde, die eine Zahl erwartet.
- Wir bekommen dann eine Referenz auf den Objektspeicher mit demselben Muster, das wir zuvor gesehen haben, und verwenden die {{domxref("IDBObjectStore.delete()")}}-Methode, um den Datensatz aus der Datenbank zu löschen, indem wir die ID übergeben.
- Wenn die Datenbanktransaktion abgeschlossen ist, löschen wir die `<li>` der Notiz aus dem DOM und führen erneut die Überprüfung durch, ob das `<ul>` nun leer ist, indem wir gegebenenfalls eine Nachricht hinzufügen.

Das ist alles! Ihr Beispiel sollte nun funktionieren.

Wenn Sie Probleme damit haben, können Sie es gerne mit unserem [Live-Beispiel vergleichen](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/indexeddb/notes/) (siehe auch den [Source Code](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index.js)).

### Komplexe Daten über IndexedDB speichern

Wie oben erwähnt, kann IndexedDB dazu verwendet werden, mehr als nur Textzeichenfolgen zu speichern. Sie können fast alles speichern, was Sie möchten, einschließlich komplexer Objekte wie Video- oder Bildblobs. Und es ist nicht viel schwieriger zu erreichen als jeder andere Datentyp.

Um zu demonstrieren, wie man das macht, haben wir ein weiteres Beispiel geschrieben, das [IndexedDB Videostore](https://github.com/mdn/learning-area/tree/main/javascript/apis/client-side-storage/indexeddb/video-store) genannt wird (sehen Sie es auch [hier live laufen](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/indexeddb/video-store/)). Wenn Sie das Beispiel zum ersten Mal ausführen, lädt es alle Videos aus dem Netzwerk herunter, speichert sie in einer IndexedDB-Datenbank und zeigt die Videos dann in der UI in {{htmlelement("video")}}-Elementen an. Beim zweiten Mal, wenn Sie es ausführen, findet es die Videos in der Datenbank und holt sie stattdessen von dort, bevor es sie anzeigt — das macht nachfolgende Ladevorgänge viel schneller und weniger bandbreitenhungrig.

Lassen Sie uns die interessantesten Teile des Beispiels durchgehen. Wir werden nicht alles betrachten — vieles ähnelt dem vorherigen Beispiel, und der Code ist gut kommentiert.

1. Für dieses Beispiel haben wir die Namen der zu ladenden Videos in einem Array von Objekten gespeichert:

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

2. Zu Beginn führen wir, nachdem die Datenbank erfolgreich geöffnet wurde, eine `init()`-Funktion aus. Diese schließt durch die verschiedenen Videonamen durch und versucht, einen durch jeden Namen identifizierten Datensatz aus der `videos`-Datenbank zu laden.

   Wenn jedes Video in der Datenbank gefunden wird (überprüft, indem festgestellt wird, ob `request.result` `true` ergibt — wenn der Datensatz nicht vorhanden ist, wird er `undefined` sein), werden seine Videodateien (als Blobs gespeichert) und der Videoname direkt an die `displayVideo()`-Funktion übergeben, um sie in der UI anzuzeigen. Andernfalls wird der Videoname an die `fetchVideoFromNetwork()`-Funktion übergeben, um das Video aus dem Netzwerk abzurufen.

   ```js
   function init() {
     // Schleife durch die Videonamen einzeln
     for (const video of videos) {
       // Transaktion öffnen, Objektspeicher abrufen und jedes Video anhand des Namens abrufen
       const objectStore = db.transaction("videos_os").objectStore("videos_os");
       const request = objectStore.get(video.name);
       request.addEventListener("success", () => {
         // Wenn das Ergebnis in der Datenbank existiert (nicht undefined ist)
         if (request.result) {
           // Die Videos aus der IDB abrufen und mit displayVideo() anzeigen
           console.log("Videos aus der IDB entnehmen");
           displayVideo(
             request.result.mp4,
             request.result.webm,
             request.result.name,
           );
         } else {
           // Die Videos aus dem Netzwerk abrufen
           fetchVideoFromNetwork(video);
         }
       });
     }
   }
   ```

3. Der folgende Codeausschnitt stammt aus `fetchVideoFromNetwork()` — hier holen wir MP4- und WebM-Versionen des Videos über zwei separate {{domxref("Window/fetch", "fetch()")}}-Anfragen ab. Wir verwenden dann die {{domxref("Response.blob()")}}-Methode, um die Antwortkörper jeder einzelnen als Blob zu extrahieren, was uns eine objektbasierte Repräsentation der Videos gibt, die später gespeichert und angezeigt werden kann.

   Wir haben hier ein Problem: Diese beiden Anfragen sind asynchron, aber wir möchten versuchen, das Video nur dann anzuzeigen oder zu speichern, wenn beide Versprechen erfüllt sind. Glücklicherweise gibt es eine eingebaute Methode, die ein solches Problem löst — {{jsxref("Promise.all()")}}. Diese nimmt ein Argument — Verweise auf alle individuellen Versprechen, die auf Erfüllung geprüft werden sollen, in einem Array — und gibt ein Versprechen zurück, das erfüllt wird, wenn alle einzelnen Versprechen erfüllt sind.

   Im `then()`-Handler für dieses Versprechen rufen wir die `displayVideo()`-Funktion wie zuvor auf, um die Videos in der UI anzuzeigen, und zusätzlich auch die `storeVideo()`-Funktion, um diese Videos in der Datenbank zu speichern.

   ```js
   // Das MP4- und WebM-Format des Videos mit der fetch()-Funktion abrufen
   // und die Antwortkörper als Blobs entnehmen
   const mp4Blob = fetch(`videos/${video.name}.mp4`).then((response) =>
     response.blob(),
   );
   const webmBlob = fetch(`videos/${video.name}.webm`).then((response) =>
     response.blob(),
   );

   // Nächsten Code nur ausführen, wenn beide Versprechen erfüllt sind
   Promise.all([mp4Blob, webmBlob]).then((values) => {
     // Das aus dem Netzwerk abgerufene Video mit displayVideo() anzeigen
     displayVideo(values[0], values[1], video.name);
     // In der IDB mit storeVideo() speichern
     storeVideo(values[0], values[1], video.name);
   });
   ```

4. Schauen wir uns zuerst `storeVideo()` an. Dies ähnelt stark dem Muster, das Sie im vorherigen Beispiel für das Hinzufügen von Daten zur Datenbank gesehen haben — wir öffnen eine `readwrite`-Transaktion und erhalten eine Referenz auf unseren `videos_os`-Objektspeicher, erstellen ein Objekt, das den Datensatz darstellt, den wir in der Datenbank hinzufügen möchten, und fügen es dann mit {{domxref("IDBObjectStore.add()")}} hinzu.

   ```js
   // Funktion storeVideo() definieren
   function storeVideo(mp4, webm, name) {
     // Transaktion öffnen, Objektspeicher abrufen; als readwrite öffライ separatorslt String"]

ryption
     const objectStore = db
       .transaction(["videos_os"], "readwrite")
       .objectStore("videos_os");

     // Den Datensatz mithilfe add() zur IDB hinzufügen
     const request = objectStore.add({ mp4, webm, name });

     request.addEventListener("success", () =>
       console.log("Versuch zur Datensatzhinzufügung beendet"),
     );
     request.addEventListener("error", () => console.error(request.error));
   }

   ```

5. Zuletzt haben wir `displayVideo()`, welches die notwendigen DOM-Elemente erstellt, um das Video in der UI einzufügen und dann in die Seite hinzufügt. Die interessantesten Teile davon sind die folgenden — um unsere Videoblob-Objekte in einem `<video>`-Element tatsächlich darzustellen, müssen wir Objekt-URLs (interne URLs, die auf die in den Speicher gespeicherten Videoblob-Elemente verweisen) mithilfe der {{domxref("URL/createObjectURL_static", "URL.createObjectURL()")}}-Methode erstellen. Sobald das erledigt ist, können wir die Objekt-URLs verwenden, um sie als Werte für die `src`-Attribute unserer {{htmlelement("source")}}-Elemente festzulegen und es funktioniert perfekt.

   ```js
   // Die displayVideo() Funktion definieren
   function displayVideo(mp4Blob, webmBlob, title) {
     // Objekt-URLs aus den Blobs erstellen
     const mp4URL = URL.createObjectURL(mp4Blob);
     const webmURL = URL.createObjectURL(webmBlob);

     // DOM-Elemente erstellen, um Video auf der Seite einzubetten
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

     // DOM-Elemente in die Seite einbetten
     section.appendChild(article);
     article.appendChild(h2);
     article.appendChild(video);
     video.appendChild(source1);
     video.appendChild(source2);
   }
   ```

## Offline-Assetspeicherung

Das obige Beispiel zeigt bereits, wie man eine App erstellt, die große Assets in einer IndexedDB-Datenbank speichert, wodurch vermieden wird, dass sie mehr als einmal heruntergeladen werden müssen. Dies ist bereits eine großartige Verbesserung der Benutzererfahrung, aber es fehlt noch eine Sache — die Haupt-HTML-, CSS- und JavaScript-Dateien müssen immer noch jedes Mal heruntergeladen werden, wenn die Seite aufgerufen wird, was bedeutet, dass sie nicht funktioniert, wenn keine Netzwerkverbindung besteht.

![Firefox Offline-Bildschirm mit einer Illustration eines Cartoon-Charakters auf der linken Seite, der in seiner rechten Hand einen Zweipolstecker und in seiner linken Hand eine Zweipolbuchse hält. Auf der rechten Seite befindet sich eine Offline-Modus-Nachricht und eine Schaltfläche mit der Aufschrift 'Erneut versuchen'.](ff-offline.png)

Hier kommen [Service Workers](/de/docs/Web/API/Service_Worker_API) und die eng verwandte [Cache API](/de/docs/Web/API/Cache) ins Spiel.

Ein Service Worker ist eine JavaScript-Datei, die beim Zugriff durch einen Browser an eine bestimmte Origin (Website oder Teil einer Website unter einer bestimmten Domain) registriert wird. Wenn sie registriert ist, kann sie Seiten unter dieser Origin steuern. Sie tut dies, indem sie zwischen einer geladenen Seite und dem Netzwerk sitzt und Netzwerk-Anfragen abfängt, die an diese Origin gerichtet sind.

Wenn sie eine Anfrage abfängt, kann sie alles damit nach Ihrem Wunsch tun (siehe [Use-Case-Ideen](/de/docs/Web/API/Service_Worker_API#other_use_case_ideas)), aber das klassische Beispiel ist das Speichern der Netzwerkantworten offline und dann das Anbieten dieser als Antwort auf eine Anfrage anstelle der Antworten aus dem Netzwerk. In der Tat ermöglicht es Ihnen, eine Website vollständig offline zu betreiben.

Die Cache-API ist ein anderes Client-seitiges Speichermechanismus, mit einem kleinen Unterschied — sie ist darauf ausgelegt, HTTP-Antworten zu speichern, und funktioniert daher sehr gut mit Service Workern.

### Ein Service Worker Beispiel

Schauen wir uns ein Beispiel an, um Ihnen ein wenig eine Vorstellung davon zu geben, wie das aussehen könnte. Wir haben eine andere Version des Videostore-Beispiels erstellt, das wir im vorherigen Abschnitt gesehen haben — dies funktioniert identisch, außer dass es auch die HTML-, CSS- und JavaScript-Dateien in der Cache-API über einen Service Worker speichert und dadurch das Beispiel offline lauffähig macht!

Sehen Sie [IndexedDB Videostore mit Service Worker live laufen](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/), und sehen Sie auch den [Source Code](https://github.com/mdn/learning-area/tree/main/javascript/apis/client-side-storage/cache-sw/video-store-offline).

#### Registrieren des Service Workers

Das erste, was zu beachten ist, ist, dass es im Haupt-JavaScript-Dokument (siehe [index.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.js)) eine zusätzliche Zeile Code gibt. Zuerst führen wir einen Funktionstestdurch, ob das `serviceWorker`-Mitglied im {{domxref("Navigator")}}-Objekt verfügbar ist. Wenn dies `true` ergibt, wissen wir, dass zumindest die Grundlagen von Service Workern unterstützt werden. Innerhalb davon verwenden wir die {{domxref("ServiceWorkerContainer.register()")}}-Methode, um einen in der `sw.js`-Datei enthaltenen Service Worker bei der Origin zu registrieren, bei der er sich befindet, sodass er Seiten im gleichen Verzeichnis wie er oder in Unterverzeichnissen steuern kann. Wenn sein Versprechen erfüllt ist, wird der Service Worker als registriert angesehen.

```js
// Service Worker registrieren, um zu kontrollieren, ob die Website offline arbeitet
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register(
      "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js",
    )
    .then(() => console.log("Service Worker registriert"));
}
```

> [!NOTE]
> Der angegebene Pfad zur `sw.js`-Datei ist relativ zur Site Origin, nicht zur JavaScript-Datei, die den Code enthält. Der Service Worker ist auf `https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js`. Die Origin ist `https://mdn.github.io`, und deshalb muss der angegebene Pfad `/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js` sein. Wenn Sie dieses Beispiel auf Ihrem eigenen Server hosten möchten, müssen Sie dies ändern. Dies ist etwas verwirrend, aber es muss aus Sicherheitsgründen so funktionieren.

#### Installieren des Service Workers

Beim nächsten Zugriff auf eine Seite, die unter der Kontrolle des Service Workers steht (z.B. beim Neuladen des Beispiels), wird der Service Worker gegen diese Seite installiert, was bedeutet, dass er beginnt, diese zu kontrollieren. Wenn dies geschieht, wird ein `install`-Ereignis gegen den Service Worker ausgelöst; Sie können Code innerhalb des Service Workers selbst schreiben, der auf die Installation reagiert.

Lassen Sie uns ein Beispiel betrachten, in der [sw.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js) Datei (der Service Worker). Sie werden sehen, dass der Installations-Listener gegen `self` registriert wird. Dieses `self`-Schlüsselwort ist eine Möglichkeit, auf den globalen Bereich des Service Workers aus der Service Worker-Datei heraus zuzugreifen.

Innerhalb des `install`-Handlers verwenden wir die {{domxref("ExtendableEvent.waitUntil()")}}-Methode, die auf dem Ereignisobjekt verfügbar ist, um zu signalisieren, dass der Browser die Installation des Service Workers nicht abschliessen sollte, bis das Versprechen darin erfolgreich erfüllt wurde.

Hier sehen wir die Cache-API in Aktion. Wir verwenden die {{domxref("CacheStorage.open()")}}-Methode, um ein neues Cache-Objekt zu öffnen, in dem Antworten gespeichert werden können (ähnlich wie ein IndexedDB-Objektspeicher). Dieses Versprechen wird mit einem {{domxref("Cache")}}-Objekt erfüllt, das die `video-store`-Cache repräsentiert. Wir verwenden dann die {{domxref("Cache.addAll()")}}-Methode, um eine Reihe von Assets abzurufen und deren Antworten zum Cache hinzuzufügen.

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

Das war's vorerst, Installation abgeschlossen.

#### Weitere Anfragen beantworten

Mit dem Service Worker registriert und gegen unsere HTML-Seite installiert, und mit den relevanten Assets, die alle zu unserem Cache hinzugefügt wurden, sind wir fast einsatzbereit. Es gibt nur noch eine Sache zu tun: Schreiben Sie etwas Code, um auf weitere Netzwerk-Anfragen zu reagieren.

Das ist es, was das zweite Stück Code in der `sw.js` macht. Wir fügen einen weiteren Listener zum globalen Bereich des Service Workers hinzu, der die Handler-Funktion aufruft, wenn das `fetch`-Ereignis ausgelöst wird. Dies geschieht, wann immer der Browser eine Anfrage für ein Asset im Verzeichnis des registrierten Service Workers fordert.

In dem Handler loggen wir zuerst die URL des angeforderten Assets. Dann bieten wir eine benutzerdefinierte Antwort auf die Anfrage an, indem wir die {{domxref("FetchEvent.respondWith()")}}-Methode verwenden.

Innerhalb dieses Blocks verwenden wir {{domxref("CacheStorage.match()")}}, um zu prüfen, ob eine passende Anfrage (d.h. eine, die die URL abgleicht) in irgendeinem Cache gefunden werden kann. Dieses Versprechen wird mit der passenden Antwort erfüllt, wenn ein Match gefunden wird, oder mit `undefined`, wenn es nicht gefunden wird.

Wenn ein Match gefunden wird, geben wir dies als benutzerdefinierte Antwort zurück. Wenn nicht, holen wir [fetch()](/de/docs/Web/API/Window/fetch) die Antwort aus dem Netzwerk und geben diese stattdessen zurück.

```js
self.addEventListener("fetch", (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
```

Und das war's für unseren Service Worker.
Es gibt noch eine ganze Menge mehr, was Sie mit ihnen tun können — für eine ausführliche Anleitung, siehe das [Service Worker Cookbook](https://github.com/mdn/serviceworker-cookbook).
Vielen Dank an Paul Kinlan für seinen Artikel [Adding a Service Worker and Offline into your Web App](https://developers.google.com/codelabs/pwa-training/pwa03--going-offline#0), der dieses Beispiel inspiriert hat.

#### Testen des Beispiels offline

Um unser [Service Worker-Beispiel](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/) zu testen, müssen Sie es ein paar Mal laden, um sicherzustellen, dass es installiert ist. Sobald dies erledigt ist, können Sie:

- Versuchen, Ihr Netzwerk zu trennen/Ihr WLAN auszuschalten.
- Wählen Sie _Datei > Offline arbeiten_, wenn Sie Firefox verwenden.
- Gehen Sie zu den Entwicklertools, dann wählen Sie _Anwendung > Service Workers_, und aktivieren Sie das _Offline_-Kontrollkästchen, wenn Sie Chrome verwenden.

Wenn Sie Ihre Beispielseite erneut aktualisieren, sollte diese immer noch einwandfrei geladen werden. Alles wird offline gespeichert — die Seiten-Assets in einem Cache, und die Videos in einer IndexedDB-Datenbank.

## Zusammenfassung

Das war's für den Moment. Wir hoffen, dass Sie unsere Übersicht über Client-seitige Speichertechnologien nützlich fanden.

## Siehe auch

- [Web Storage API](/de/docs/Web/API/Web_Storage_API)
- [IndexedDB API](/de/docs/Web/API/IndexedDB_API)
- [Cookies](/de/docs/Web/HTTP/Cookies)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)

{{PreviousMenu("Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs", "Learn/JavaScript/Client-side_web_APIs")}}
