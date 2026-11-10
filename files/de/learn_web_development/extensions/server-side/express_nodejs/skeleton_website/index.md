---
title: "Express-Tutorial Teil 2: Erstellen einer Website-Grundstruktur"
short-title: "2: Website-Grundstruktur"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website
l10n:
  sourceCommit: d775e1249487f1a7ab9a8a031c70ca71bc892d63
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Dieser zweite Artikel unseres [Express-Tutorials](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) zeigt, wie Sie ein Website-Projekt als Grundstruktur erstellen, das Sie anschließend um seitenspezifische Routen, Templates/Views und Datenbankaufrufe ergänzen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment">Eine Node-Entwicklungsumgebung einrichten</a>.
          Sehen Sie sich das Express-Tutorial an.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Routen, Templates und Servercode zu einem Express-Projekt hinzufügen.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Dieser Artikel baut auf der Projektkonfiguration aus [Eine Node-Entwicklungsumgebung einrichten](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) auf. Wir fügen Server, Routen und Templates hinzu, um die Grundstruktur für unsere [Local-Library-Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) zu erstellen. Den übrigen Code, den die Website benötigt, ergänzen wir später.

Die folgenden Abschnitte erläutern die Wahl der View- und CSS-Optionen, stellen den Code für die einzelnen Projektdateien bereit und zeigen, wie Sie die Website starten und überprüfen, ob sie funktioniert.

## Auswahl der Projektkomponenten

In diesem Tutorial haben wir bereits entschieden, welche Bibliothek für welche Aufgabe verwendet wird. In Ihrem eigenen Projekt müssen Sie diese Entscheidungen selbst treffen. Deshalb geben wir Ihnen einen grundlegenden Überblick über das Ökosystem. Das Tutorial [Paketverwaltung](/de/docs/Learn_web_development/Extensions/Client-side_tools/Package_management) erläutert die zu berücksichtigenden Aspekte auf einer übergeordneten Ebene.

### Welche View-Engine sollte ich verwenden?

Express unterstützt mehrere verbreitete View- und Template-Engines, darunter [EJS](https://www.npmjs.com/package/ejs), [Hbs](https://github.com/pillarjs/hbs) und [Pug](https://pugjs.org/api/getting-started.html). Informationen zur Konfiguration einer Template-Engine finden Sie unter [Template-Engines mit Express verwenden](https://expressjs.com/en/guide/using-template-engines/) (Express-Dokumentation) und in der Dokumentation der gewünschten View-Engine.

Grundsätzlich sollten Sie eine Template-Engine wählen, die alle benötigten Funktionen bietet und mit der Sie möglichst schnell produktiv arbeiten können – so, wie Sie auch jede andere Komponente auswählen würden. Beim Vergleich von Template-Engines sollten Sie unter anderem Folgendes berücksichtigen:

- Zeit bis zur produktiven Nutzung – Wenn Ihr Team bereits Erfahrung mit einer Template-Sprache hat, wird es damit wahrscheinlich schneller produktiv arbeiten können. Andernfalls sollten Sie die Lernkurven der infrage kommenden Template-Engines vergleichen.
- Verbreitung und Aktivität – Prüfen Sie, wie verbreitet die Engine ist und ob sie eine aktive Community hat. Es ist wichtig, während der gesamten Lebensdauer der Website Unterstützung bei Problemen erhalten zu können.
- Stil – Manche Template-Engines verwenden spezielle Markierungen, um eingefügte Inhalte innerhalb von „gewöhnlichem“ HTML zu kennzeichnen. Andere erzeugen HTML mit einer anderen Syntax, beispielsweise mithilfe von Einrückungen und Blocknamen.
- Performance und Rendering-Zeit.
- Funktionen – Prüfen Sie, ob die betrachteten Engines folgende Funktionen bieten:
  - Layout-Vererbung: Damit können Sie ein Basis-Template definieren und nur die Teile davon „erben“, die Sie für eine bestimmte Seite anpassen möchten. Das ist in der Regel besser, als Templates durch das Einbinden mehrerer erforderlicher Komponenten zusammenzusetzen oder jedes Mal von Grund auf neu zu erstellen.
  - Unterstützung für „Includes“: Damit können Sie Templates zusammensetzen, indem Sie andere Templates einbinden.
  - Eine knappe Syntax für Variablen und Schleifensteuerung.
  - Die Möglichkeit, Variablenwerte auf Template-Ebene zu filtern, etwa Variablen in Großbuchstaben umzuwandeln oder Datumswerte zu formatieren.
  - Die Möglichkeit, neben HTML auch andere Ausgabeformate wie JSON oder XML zu erzeugen.
  - Unterstützung für asynchrone Operationen und Streaming.
  - Clientseitige Funktionen. Wenn eine Template-Engine auch auf dem Client verwendet werden kann, lässt sich das Rendering ganz oder größtenteils clientseitig durchführen.

> [!NOTE]
> Im Internet finden Sie viele Ressourcen, die Ihnen beim Vergleich der verschiedenen Optionen helfen!

Für dieses Projekt verwenden wir die Template-Engine [Pug](https://pugjs.org/api/getting-started.html) (früher „Jade“), die wir im Tutorial zur Entwicklungsumgebung installiert haben.

### Welche Engine für CSS-Stylesheets sollte ich verwenden?

Sie können ein Express-Projekt so konfigurieren, dass es Engines für CSS-Stylesheets wie [LESS](https://lesscss.org/), [SASS](https://sass-lang.com/) und [Stylus](https://stylus-lang.com/) verwendet.

> [!NOTE]
> CSS hat einige Einschränkungen, die bestimmte Aufgaben erschweren. Engines für CSS-Stylesheets ermöglichen es Ihnen, Ihr CSS mit einer leistungsfähigeren Syntax zu definieren und diese Definition anschließend zu gewöhnlichem CSS für Browser zu kompilieren.

Wie bei Template-Engines sollten Sie die Stylesheet-Engine verwenden, mit der Ihr Team am produktivsten arbeiten kann. Für dieses Projekt verwenden wir reines CSS, da unsere CSS-Anforderungen nicht komplex genug sind, um etwas anderes zu rechtfertigen.

### Welche Datenbank sollte ich verwenden?

Der Code, den wir in diesem Kapitel hinzufügen, verwendet keine Datenbank. _Express_-Anwendungen können jeden von _Node_ unterstützten [Datenbankmechanismus](https://expressjs.com/en/guide/database-integration/) verwenden (_Express_ selbst legt keine zusätzlichen spezifischen Verhaltensweisen oder Anforderungen für die Datenbankverwaltung fest).

Wie Sie eine Datenbank integrieren, besprechen wir in einem späteren Artikel.

## Hinzufügen der Anwendungsdateien

Öffnen Sie das Verzeichnis **express-locallibrary-tutorial**, das Sie unter [Eine Node-Entwicklungsumgebung einrichten](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment) erstellt haben. Es enthält bereits **package.json**, **package-lock.json**, **.gitignore** und die installierten Abhängigkeiten in **node_modules**. Behalten Sie diese Dateien und Einstellungen bei; wir fügen dem Projekt nun den Anwendungscode hinzu.

```plain
express-locallibrary-tutorial
├── .gitignore
├── node_modules
│   └── [A lot of installed dependency files]
├── package-lock.json
└── package.json
```

### Verzeichnisstruktur

Erstellen Sie die folgenden Dateien (alle als leere Textdateien):

- **app.js**
- **public/stylesheets/style.css**
- **routes/index.js**
- **routes/users.js**
- **server.js**
- **views/error.pug**
- **views/index.pug**
- **views/layout.pug**

Wenn Sie Bash oder eine ähnliche Shell verwenden, können Sie alle Dateien mit diesem Befehl erstellen:

```bash
mkdir -p public/stylesheets routes views && touch app.js public/stylesheets/style.css routes/{index,users}.js server.js views/{error,index,layout}.pug
```

Ihr Projektverzeichnis sollte nun wie folgt aussehen:

```plain
express-locallibrary-tutorial
├── .gitignore
├── app.js
├── node_modules
│   └── [A lot of installed dependency files]
├── package-lock.json
├── package.json
├── public
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
├── server.js
└── views
    ├── error.pug
    ├── index.pug
    └── layout.pug
```

Die Anwendungsrouten liegen in separaten Modulen im Verzeichnis **routes/**.
Die Templates liegen im Verzeichnis **views/**.

In den folgenden Abschnitten richten wir die einzelnen Dateien ein.

### server.js

Die Datei **server.js** ist der Einstiegspunkt der Anwendung! Fügen Sie Folgendes in die Datei ein:

```js
import { createServer } from "node:http";
import createDebug from "debug";

import app from "./app.js";

const debug = createDebug("express-locallibrary-tutorial:server");
const port = Number(process.env.PORT ?? 3000);
if (!Number.isInteger(port) || port < 0 || port > 65535)
  throw new RangeError("PORT must be an integer between 0 and 65535");
app.set("port", port);

const server = createServer(app);
server.on("error", (err) => {
  throw new Error("Failed to start server", { cause: err });
});
server.on("listening", () => {
  const address = server.address();
  debug(`Listening on port ${address.port}`);
});
server.listen(port);
```

Diese Datei importiert den „eigentlichen“ Einstiegspunkt der Anwendung (**app.js** im Projektstammverzeichnis), der das [`express()`](https://expressjs.com/en/api/)-Anwendungsobjekt einrichtet und exportiert. Der restliche Code erstellt einen Node-HTTP-Server für `app` auf einem bestimmten Port (aus der Umgebungsvariablen `PORT` oder 3000, falls die Variable nicht definiert ist), startet den Server, protokolliert eine Meldung, sobald er Anfragen entgegennimmt, und löst einen Fehler aus, falls er nicht gestartet werden kann. Im Moment müssen Sie über den Code nichts Weiteres wissen (alles in dieser Datei ist Standardcode). Wenn Sie möchten, können Sie ihn sich aber genauer ansehen.

### app.js

Diese Datei erstellt ein `express`-Anwendungsobjekt (üblicherweise `app` genannt), konfiguriert die Anwendung mit verschiedenen Einstellungen und Middleware und exportiert sie anschließend aus dem Modul. Zunächst importieren wir einige nützliche Node-Bibliotheken in die Datei, darunter _http-errors_, _express_ und _morgan_. `node:path` ist eine Kernbibliothek von Node zum Verarbeiten von Datei- und Verzeichnispfaden. Anschließend importieren wir Module aus unserem Routenverzeichnis. Diese Module bzw. Dateien enthalten Code zur Verarbeitung bestimmter Gruppen zusammengehöriger „Routen“ (URL-Pfade). Wenn wir die Grundstruktur der Anwendung beispielsweise um eine Auflistung aller Bücher der Bibliothek erweitern, fügen wir eine neue Datei für buchbezogene Routen hinzu.

```js
import path from "node:path";
import createError from "http-errors";
import express from "express";
import logger from "morgan";

import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";
```

> [!NOTE]
> Bisher haben wir das Modul lediglich _importiert_; seine Routen verwenden wir noch nicht. Das geschieht etwas weiter unten in der Datei.

Als Nächstes erstellen wir mit dem importierten _express_-Modul das `app`-Objekt und konfigurieren damit die View-Engine (Template-Engine). Die Einrichtung der Engine besteht aus zwei Teilen. Zunächst legen wir mit dem Wert `"views"` den Ordner fest, in dem die Templates gespeichert werden (hier der Unterordner **views/**). Danach geben wir mit dem Wert `"view engine"` die Template-Bibliothek an (hier „pug“).

```js
const app = express();

// view engine setup
app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "pug");
```

Die nächsten Funktionen rufen `app.use()` auf, um die oben importierten _Middleware_-Bibliotheken zur Verarbeitungskette für Anfragen hinzuzufügen.
Beispielsweise füllt `express.urlencoded()` [`req.body`](https://expressjs.com/en/5x/api/request/#reqbody) mit den Feldern übermittelter HTML-Formulare; `express.json()` tut dasselbe für Anfragen, die JSON senden.
Nach diesen Bibliotheken verwenden wir außerdem die Middleware `express.static`. Sie sorgt dafür, dass _Express_ alle statischen Dateien im Verzeichnis **public/** des Projektstammverzeichnisses ausliefert.

```js
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(import.meta.dirname, "public")));
```

Nachdem die übrige Middleware eingerichtet ist, fügen wir den zuvor importierten Code zur Verarbeitung von Routen zur Verarbeitungskette für Anfragen hinzu. Der importierte Code definiert bestimmte Routen für die verschiedenen _Bereiche_ der Website:

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
```

> [!NOTE]
> Die oben angegebenen Pfade (`"/"` und `"/users"`) dienen als Präfix für die in den importierten Dateien definierten Routen.
> Wenn das importierte Modul **users** beispielsweise eine Route für `/profile` definiert, erreichen Sie diese unter `/users/profile`. Auf Routen gehen wir in einem späteren Artikel genauer ein.

Die letzte Middleware in der Datei fügt Handler-Methoden für Fehler und HTTP-404-Antworten hinzu.

```js
// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  if (res.headersSent) {
    next(err);
    return;
  }

  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status ?? 500);
  res.render("error");
});
```

Das Express-Anwendungsobjekt (app) ist nun vollständig konfiguriert. Im letzten Schritt exportieren wir es, damit **server.js** es importieren kann.

```js
export default app;
```

### Routen

Die Routendatei **routes/index.js** zeigt die einfachste Struktur eines Routenmoduls.
Zunächst importiert sie die Funktion `Router` aus dem _express_-Modul und ruft sie auf, um einen Router zu erstellen.
Anschließend exportiert sie den Router aus dem Modul (dadurch kann die Datei in **app.js** importiert werden). Unter [Views (Templates)](#views_templates) fügen wir eine Route hinzu.

```js
import { Router } from "express";

const router = Router();

export default router;
```

Die Routendatei **routes/users.js** ist nachfolgend dargestellt.

```js
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("respond with a resource");
});

export default router;
```

Sie fügt eine einzelne Route hinzu.
Die Route definiert eine Callback-Funktion, die aufgerufen wird, sobald eine HTTP-`GET`-Anfrage mit dem passenden Muster erkannt wird. Das passende Muster besteht aus der beim Import des Moduls angegebenen Route (`"/users"`) und der in dieser Datei definierten Route (`"/"`). Mit anderen Worten: Diese Route wird verwendet, wenn eine Anfrage für die URL `/users/` eingeht.

> [!NOTE]
> Nachdem Sie die [Website-Grundstruktur gestartet](#starten_der_website-grundstruktur) haben, können Sie dies ausprobieren, indem Sie `http://localhost:3000/users/` in Ihrem Browser aufrufen. Sie sollten die Meldung „respond with a resource“ sehen.

### Views (Templates)

Die Views (Templates) liegen im Verzeichnis **views/** (wie in **app.js** angegeben) und haben die Dateiendung **.pug**. Die Methode [`Response.render()`](https://expressjs.com/en/5x/api/response/#resrender) rendert ein bestimmtes Template zusammen mit den Werten benannter Variablen, die in einem Objekt übergeben werden, und sendet das Ergebnis anschließend als Antwort. Fügen Sie in **routes/index.js** oberhalb der `export`-Zeile den folgenden Code hinzu. Er verwendet das Template „index“ und übergibt ihm die Template-Variable „title“.

```js
router.get("/", (req, res) => {
  res.render("index", { title: "Express" });
});
```

Das zugehörige Template für die obige Route sehen Sie nachfolgend (**index.pug**). Auf die Syntax gehen wir später genauer ein. Im Moment müssen Sie nur wissen, dass die Variable `title` (mit dem Wert `'Express'`) an der im Template angegebenen Stelle eingefügt wird.

```pug
extends layout

block content
  h1= title
```

Dieses Template verweist mit `extends layout` auf die Datei **views/layout.pug**, die Folgendes enthalten muss:

```pug
doctype html
html(lang='en')
  head
    title= title
    meta(charset='utf-8')
    meta(name='viewport', content='width=device-width, initial-scale=1')
    link(rel='stylesheet', href='/stylesheets/style.css')
  body
    div(class='container-fluid')
      div(class='row')
        div(class='col-sm-10')
          block content
```

Die Datei **views/error.pug** wird vom Fehler-Handler in **app.js** gerendert. Sie enthält Folgendes:

```pug
extends layout

block content
  h1= message
  h2= error.status
  pre #{error.stack}
```

## Starten der Website-Grundstruktur

Nun haben wir ein vollständiges Projekt als Grundstruktur. Die Website _macht_ zwar noch nicht viel, aber es lohnt sich, sie zu starten und zu prüfen, ob sie funktioniert.

1. Installieren Sie zunächst die in **package.json** deklarierten Abhängigkeiten. Sie sollten bereits installiert sein, aber eine erneute Überprüfung ist sinnvoll.

   ```bash
   npm install
   ```

2. Starten Sie anschließend die Anwendung.

   - Verwenden Sie in der Windows-Eingabeaufforderung (CMD) diesen Befehl:

     ```batch
     SET DEBUG=express-locallibrary-tutorial:* & npm start
     ```

   - Verwenden Sie in Windows PowerShell diesen Befehl:

     ```powershell
     $env:DEBUG = "express-locallibrary-tutorial:*"; npm start
     ```

     > [!NOTE]
     > Im weiteren Verlauf dieses Tutorials werden keine PowerShell-Befehle angegeben (die aufgeführten „Windows“-Befehle setzen die Windows-Eingabeaufforderung CMD voraus).

   - Verwenden Sie unter macOS oder Linux diesen Befehl:

     ```bash
     DEBUG=express-locallibrary-tutorial:* npm start
     ```

3. Rufen Sie anschließend `http://localhost:3000/` in Ihrem Browser auf, um auf die Anwendung zuzugreifen.

Sie sollten eine Browserseite sehen, die lediglich den Titel „Express“ enthält.

Herzlichen Glückwunsch! Sie haben jetzt eine funktionierende Express-Anwendung, die über Port 3000 erreichbar ist.

> [!NOTE]
> Sie können die Anwendung auch einfach mit dem Befehl `npm start` starten. Wenn Sie wie gezeigt die Variable `DEBUG` angeben, aktivieren Sie die Debug-Meldungen aus **server.js**. Andere Module protokollieren möglicherweise auch ohne diese Variable Meldungen, beispielsweise die Middleware _morgan_, die die `GET`-Anfragen in der folgenden Ausgabe protokolliert:
>
> ```bash
> DEBUG=express-locallibrary-tutorial:* npm start
> ```
>
> ```plain
> > express-locallibrary-tutorial@1.0.0 start
> > node server.js
>
>   express-locallibrary-tutorial:server Listening on port 3000 +0ms
> GET / 200 78.072 ms - 315
> GET /stylesheets/style.css 200 1.647 ms - -
> ```

Damit der Server nach Änderungen an JavaScript-Dateien automatisch neu startet, beenden Sie ihn mit **Strg+C** und verwenden Sie das Skript `devstart`, das Sie im Tutorial zur Entwicklungsumgebung hinzugefügt haben:

```bash
npm run devstart
```

Laden Sie die Seite im Browser neu, um Ihre Änderungen zu sehen. Während der Entwicklung werden Änderungen an Views und Stylesheets bei der nächsten Anfrage bereitgestellt, ohne dass der Server neu gestartet werden muss.

## Probieren Sie es selbst aus

Erstellen Sie in **routes/users.js** eine neue Route, die unter der URL `/users/cool/` den Text „_You're so cool_“ anzeigt. Testen Sie sie, indem Sie den Server starten und `http://localhost:3000/users/cool/` in Ihrem Browser aufrufen.

## Zusammenfassung

Sie haben nun ein Website-Projekt als Grundstruktur für die [Local Library](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) erstellt und überprüft, dass es mit _node_ ausgeführt werden kann. Vor allem verstehen Sie jetzt auch den Aufbau des Projekts und wissen daher, wo wir Änderungen vornehmen müssen, um Routen und Views für unsere lokale Bibliothek hinzuzufügen.

Als Nächstes passen wir die Grundstruktur so an, dass sie als Bibliothekswebsite funktioniert.

## Siehe auch

- [Template-Engines mit Express verwenden](https://expressjs.com/en/guide/using-template-engines/) (Express-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
