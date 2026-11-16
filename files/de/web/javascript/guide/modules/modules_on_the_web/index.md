---
title: Module auf Webseiten verwenden
slug: Web/JavaScript/Guide/Modules/Modules_on_the_web
l10n:
  sourceCommit: e976b4bf6b9e0c68b4321904560df47804d8cc48
---

Diese Seite beschreibt, wie JavaScript-Module in die Webplattform integriert sind. Die hier behandelten Funktionen sind in der HTML-Spezifikation und anderen Webspezifikationen definiert, nicht in der JavaScript-Kernsprache. Sie sind in der Regel nur für Webseiten relevant. Wenn Sie Module für andere Umgebungen schreiben, lesen Sie stattdessen die Leitfäden [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) und [Module auf verschiedenen Plattformen](/de/docs/Web/JavaScript/Guide/Modules/Modules_across_platforms).

## Serverkonfiguration

Der erste Unterschied, auf den Sie beim Umstellen von Webseiten auf Module stoßen, ist, dass Sie Ihr HTML nicht mehr über das `file://`-Protokoll anzeigen können. Stellen Sie das Verzeichnis mit Ihrem HTML und Ihren Modulen über einen [lokalen HTTP-Server](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) bereit und öffnen Sie die Seite über dessen URL, beispielsweise `http://localhost:8000/`.

Der Grund dafür ist, dass Modulanfragen [CORS](/de/docs/Web/HTTP/Guides/CORS) verwenden und `file://`-URLs niemals denselben Origin haben. Beim Import von einem anderen Origin muss dessen Server den Origin Ihrer Seite über seine CORS-Antwort-Header zulassen, beispielsweise über {{HTTPHeader("Access-Control-Allow-Origin")}}. Standardmäßig werden ursprungsübergreifende Modulanfragen ohne Zugangsdaten wie Cookies gesendet. Wenn Sie das Attribut [`crossorigin="use-credentials"`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) auf dem `<script>`-Element setzen, werden Zugangsdaten mitgesendet, sofern die CORS-Header des Servers dies zulassen. Das gilt für den gesamten Modulgraphen, der über dieses Skript geladen wird.

Der Server muss JavaScript-Module mit einem JavaScript-[MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) wie `Content-Type: text/javascript` senden. Prüfen Sie dies sowohl für `.js`- als auch für `.mjs`-Dateien. Wenn ein Import wegen eines MIME-Typ-Fehlers scheitert, prüfen Sie die Antwort in den Netzwerkwerkzeugen Ihres Browsers: Möglicherweise wurde statt des Moduls eine Antwort für eine fehlende Datei oder eine HTML-Ersatzseite zurückgegeben.

## Module in HTML einbinden

Um ein Skript im Element [`<script>`](/de/docs/Web/HTML/Reference/Elements/script) als Modul zu deklarieren, müssen Sie `type="module"` angeben. Um beispielsweise das Skript `main.js` zu importieren, verwenden Sie Folgendes:

```html
<script type="module" src="main.js"></script>
```

Nur für den Einstiegspunkt ist ein `<script type="module">`-Element erforderlich: Alle Module, die er importiert, werden automatisch als Module geladen. Sie müssen also kein `<script>`-Element hinzufügen, nur um etwas als Modul zu deklarieren.

Sie können den Modulcode auch direkt in die HTML-Datei einbetten, indem Sie den JavaScript-Code in den Inhalt des `<script>`-Elements schreiben:

```html
<script type="module">
  /* JavaScript module code here */
</script>
```

Im Allgemeinen sollten Sie alle Module in separaten Dateien definieren. Inline im HTML deklarierte Module können zwar andere Module importieren, aber ihre Exporte sind für andere Module nicht zugänglich, da sie keine URL haben.

`import`- und `export`-Anweisungen können Sie nur innerhalb von Modulen verwenden, nicht in herkömmlichen Skripten. Ein Fehler wird ausgelöst, wenn Ihrem `<script>`-Element das Attribut `type="module"` fehlt und es versucht, andere Module zu importieren. Zum Beispiel:

```html example-bad
<script>
  import mod from "./mod.js"; // SyntaxError: import declarations may only appear at top level of a module
  // ...
</script>
<script src="a-module-using-import-statements.js"></script>
<!-- SyntaxError: import declarations may only appear at top level of a module -->
```

[Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity) über das Attribut [`integrity`](/de/docs/Web/HTML/Reference/Attributes/integrity) funktioniert auch für Modulskripte. Das Attribut deckt jedoch nur das Einstiegsmodul ab. Integritätsmetadaten für dessen Abhängigkeiten können über den Schlüssel `integrity` einer Import-Map bereitgestellt werden.

> [!NOTE]
> Module und ihre Abhängigkeiten können vorgeladen werden, indem sie in [`<link>`](/de/docs/Web/HTML/Reference/Elements/link)-Elementen mit [`rel="modulepreload"`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) angegeben werden.
> Dies kann die Ladezeit bei Verwendung der Module erheblich verkürzen.

Wenn Sie mit herkömmlichen `<script>`-Elementen bereits vertraut sind, sollten Sie außerdem folgende Unterschiede im Verhalten beachten:

- Innerhalb derselben Umgebung wird ein Modul nur einmal ausgeführt, auch wenn es mehrfach importiert oder in mehreren `<script>`-Tags referenziert wurde.
- Beim Laden eines Modulskripts ist das Attribut `defer` nicht erforderlich (siehe [Attribute von `<script>`](/de/docs/Web/HTML/Reference/Elements/script#attributes)). Im Dokument deklarierte Modulskripte ohne `async` werden automatisch verzögert ausgeführt.
- Mit dem Attribut `async` wird der Modulgraph ausgewertet, sobald er vollständig geladen ist. Dabei wird weder auf den Abschluss des HTML-Parsings gewartet noch eine Ausführungsreihenfolge gegenüber anderen Skripten garantiert. Anders als bei herkömmlichen Skripten funktioniert `async` auch bei Inline-Modulskripten.

## Module in Workern

Module werden nicht nur in Dokumenten ausgeführt: Auch [Worker](/de/docs/Web/API/Web_Workers_API) können Module sein. Dazu müssen Sie `type: "module"` an den Konstruktor [`Worker()`](/de/docs/Web/API/Worker/Worker) oder [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker) beziehungsweise an [`navigator.serviceWorker.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) übergeben:

```js
const worker = new Worker("./worker.js", { type: "module" });
```

Die Datei des Workers wird zum Einstiegspunkt seines eigenen [Modulgraphen](/de/docs/Web/JavaScript/Guide/Modules/Module_graph).

Innerhalb eines Modul-Workers können Sie andere Module nur mit `import`-Deklarationen oder `import()` importieren. Ein Aufruf von [`importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) löst einen `TypeError` aus. Beachten Sie, dass dynamisches `import()` in Service Workern nicht verfügbar ist. Daher muss der gesamte Code eines als Modul ausgeführten Service Workers über statische Imports erreichbar sein. [Worklets](/de/docs/Web/API/Worklet) laden ihren Code mit `addModule()`, wobei es sich immer um ein Modul handelt.

## Modulspezifizierer im Web

Modulspezifizierer sind die Zeichenfolgen nach dem Schlüsselwort `from`:

```js
import { name } from "./module.js";
```

Im [Leitfaden zu Modulen](/de/docs/Web/JavaScript/Guide/Modules#named_imports) wurde bereits erläutert, dass das Format von Modulspezifizierern von der Laufzeitumgebung abhängt. Sehen wir uns an, wie sie in Browsern funktionieren.

Im Web basiert zunächst alles auf URLs. Jedes Modul hat eine URL, sodass Sie es direkt über seine absolute URL importieren können:

```js
import { name } from "https://example.com/js/modules/module.js";
```

Der Browser sendet eine HTTP-Anfrage an die angegebene URL. Wenn der Server eine erfolgreiche Antwort mit `Content-Type: text/javascript` zurückgibt, wird der Ladevorgang des Moduls fortgesetzt.

> [!NOTE]
> Eine verbreitete Annahme lautet, dass „ESM Dateiendungen in Modulspezifizierern erfordert“. Das ist sowohl richtig als auch falsch. Die JavaScript-Laufzeitumgebung _ergänzt_ die Endung nicht für Sie. Wenn Sie `import { name } from "https://example.com/modules/module";` schreiben, sendet der Browser weiterhin eine Anfrage an diese URL, ohne die Endung `.js`. Liefert die Anfrage erfolgreich JavaScript-Inhalt zurück, wird das Modul wie gewohnt geladen. Das Problem ist lediglich, dass Server Anfragen ohne Dateiendung üblicherweise als Anfragen nach HTML-Dateien interpretieren. Daher ist fast immer eine zusätzliche Konfiguration nötig, damit für eine solche Anfrage eine JavaScript-Datei bereitgestellt wird.

Auch andere URL-Schemata, etwa [`data:`](/de/docs/Web/URI/Reference/Schemes/data), werden als Ressourcenadressen unterstützt. Weitere Informationen finden Sie in der [Referenz zu `import`](/de/docs/Web/JavaScript/Reference/Statements/import#module_specifier_resolution).

Ausschließlich absolute URLs für Imports zu verwenden, bringt dieselben Probleme mit sich wie absolute URLs für Linkziele: Sie sind lang und funktionieren nicht mehr, wenn Sie Ihre Website auf eine andere Domain verschieben oder den gesamten Pfad Ihrer JavaScript-Ressourcen ändern. Ein Modulspezifizierer kann auch eine relative URL sein, ähnlich dem Attribut [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) von {{HTMLElement("a")}}-Elementen. Der einzige Unterschied besteht darin, dass alle relativen URLs mit `/`, `./` oder `../` beginnen müssen. Sie können also keine „bloßen“ relativen URLs wie `modules/module.js` verwenden, sondern müssen `./modules/module.js` schreiben. Durch diese Einschränkung bleiben bloße Spezifizierer für eine besondere Bedeutung frei: Nach einer durch Node.js verbreiteten Konvention im Ökosystem bezeichnet ein bloßer Name wie `"jquery"` ein Paket. Im Web wird diese besondere Bedeutung heute durch [Import-Maps](#module_mithilfe_von_import-maps_importieren) zugewiesen. Ein bloßer Spezifizierer, der nicht durch eine Import-Map zugeordnet wird, löst einen `TypeError` aus.

Die URL im Modulspezifizierer wird relativ zur URL des aktuellen Moduls aufgelöst, nicht relativ zur URL des HTML-Dokuments. Um beispielsweise innerhalb eines Moduls unter `https://example.com/js/main.js` das Modul `https://example.com/js/modules/module.js` zu importieren, schreiben Sie:

```js
import { name } from "./modules/module.js";
```

## Module mithilfe von Import-Maps importieren

Neben relativen und absoluten URLs ermöglichen [Import-Maps](/de/docs/Web/HTML/Reference/Elements/script/type/importmap), beim Import eines Moduls nahezu beliebigen Text als Modulspezifizierer anzugeben. Die Map stellt einen zugehörigen Wert bereit, der den Text beim Auflösen der Modul-URL ersetzt. Eine Import-Map wird als [JSON-Objekt](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#import_map_json_representation) innerhalb eines `<script>`-Elements definiert, dessen Attribut `type` auf [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) gesetzt ist.

> [!NOTE]
> Eine Import-Map gilt nur für das Dokument. Die Spezifikation definiert nicht, wie eine Import-Map in einem Worker- oder Worklet-Kontext angewendet wird. <!-- https://github.com/WICG/import-maps/issues/2 -->

Beispielsweise definiert der Schlüssel `imports` in der folgenden Import-Map ein JSON-Objekt als „Modulspezifizierer-Map“. Dessen Eigenschaftsnamen können als Modulspezifizierer verwendet werden; die zugehörigen Werte werden beim Auflösen der Modul-URL durch den Browser eingesetzt.

```html
<script type="importmap">
  {
    "imports": {
      "shapes": "./shapes/square.js",
      "shapes/square": "./modules/shapes/square.js",
      "https://example.com/shapes/square.js": "./shapes/square.js",
      "https://example.com/shapes/": "/shapes/square/",
      "../shapes/square": "./shapes/square.js"
    }
  }
</script>
```

> [!NOTE]
> Ab hier lassen wir das umschließende `<script type="importmap">`-Element weg und zeigen Import-Maps direkt als JSON-Code. Beachten Sie, dass das JSON inline im HTML stehen muss und keine externe Datei sein darf, auf die mit `src` verwiesen wird.

Mit dieser Map können Sie nun bloße Spezifizierer wie `shapes` und `shapes/square` verwenden, die standardmäßig abgelehnt würden:

```js
// Bare module names as module specifiers
import { name as squareNameOne } from "shapes";
import { name as squareNameTwo } from "shapes/square";

// Remap a URL to another URL
import { name as squareNameThree } from "https://example.com/shapes/square.js";
```

Import-Maps haben viele Anwendungsfälle:

- Sie ermöglichen den Import von Modulen über bloße Modulnamen (wie in Node.js). Dadurch können Module, die npm-Pakete importieren, direkt im Web bereitgestellt werden, sofern auch die Pakete unter einer URL erreichbar sind. Siehe [Exakte Übereinstimmung](#exakte_übereinstimmung) und [Präfixübereinstimmung](#präfixübereinstimmung).
- Sie ermöglichen es, Module, die über vollständige URLs importiert werden, bei Bedarf durch Module unter anderen URLs zu ersetzen, ohne den Quellcode zu ändern. Siehe [Allgemeine URL-Neuzuordnung](#allgemeine_url-neuzuordnung).
- Sie ermöglichen den Import bestimmter Versionen einer Bibliothek abhängig vom Pfad des Skripts, das das Modul importiert. Siehe [Das Objekt `scopes`](#the_scopes_object).

Dadurch kann sich der Aufwand verringern, dieselben JavaScript-Bibliotheken sowohl im Browser als auch auf dem Server zu verwenden.

Darüber hinaus können Import-Maps Hash-Integritätswerte für Modulabhängigkeiten angeben (das Attribut [`integrity`](/de/docs/Web/HTML/Reference/Attributes/integrity) auf `<script>` gilt nur für das Einstiegsmodul). Dies wird hier nicht näher behandelt, da es für die Auflösung von Spezifizierern nicht relevant ist. Siehe [Map für Integritätsmetadaten](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#integrity_metadata_map).

### Funktionserkennung

Mit der statischen Methode [`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static), die selbst breit unterstützt wird, können Sie prüfen, ob Import-Maps unterstützt werden:

```js
if (HTMLScriptElement.supports?.("importmap")) {
  console.log("Browser supports import maps.");
}
```

### Das Objekt `imports`

Die Eigenschaft `imports` enthält ein Objekt, dessen Eigenschaftswerte jeweils Zeichenfolgen sind. Werte mit anderen Datentypen werden zu `null`. Auch zahlreiche weitere, unten erläuterte Bedingungen führen dazu, dass ein Wert zu `null` wird. Trifft der Resolver auf einen Eintrag mit dem Wert `null`, schlägt die Auflösung dieses Spezifizierers sofort fehl.

Jeder Schlüssel muss einer von zwei Arten angehören:

- Der Schlüssel endet nicht mit `/`: Er wird unverändert mit dem Spezifizierer verglichen.
- Der Schlüssel endet mit `/`: Er wird als Präfix mit dem Spezifizierer verglichen. In diesem Fall muss auch der Wert mit `/` enden, andernfalls wird er zu `null`. Mehr zur Präfixübereinstimmung folgt weiter unten.

Der Wert muss eine URL sein, die relativ zur [Basis-URL](/de/docs/Web/HTML/Reference/Elements/base) des Dokuments aufgelöst wird, das die Import-Map enthält. Wenn die URL nicht geparst werden kann, wird der Wert zu `null`. (Beachten Sie, dass relative URLs „bloß“ sein dürfen; nur Modulspezifizierer dürfen nicht bloß sein.)

Die Reihenfolge der Eigenschaften im Objekt `imports` spielt keine Rolle: Intern werden sie stets nach ihren Schlüsseln in absteigender lexikografischer Reihenfolge sortiert. Bei der Auflösung werden die Eigenschaften in dieser Reihenfolge abgeglichen.

#### Exakte Übereinstimmung

Angenommen, das folgende `<script>`-Element ist auf der Seite `https://example.com/welcome` enthalten.

```json
{
  "imports": {
    "square": "./shapes/square.js"
  }
}
```

Hier verwenden wir als Wert eine relative URL, die relativ zur Basis-URL des Dokuments aufgelöst wird. Das entspricht also `https://example.com/welcome/shapes/square.js`. Wäre dieses `<script>`-Element stattdessen auf der Seite `https://example.com/welcome/` enthalten, entspräche der Wert ebenfalls `https://example.com/welcome/shapes/square.js`.

Wenn der Resolver nun auf einen Spezifizierer wie den folgenden trifft:

```js
import { name, draw, reportArea, reportPerimeter } from "square";
```

Er durchläuft die `imports`-Einträge nacheinander (hier gibt es nur einen), stellt fest, dass der Schlüssel `"square"` mit dem angeforderten Spezifizierer übereinstimmt, und verwendet dessen Wert. Anschließend wird das Modul unter `https://example.com/shapes/square.js` angefordert.

#### Präfixübereinstimmung

Wenn der Schlüssel mit einem Schrägstrich `/` endet (in diesem Fall muss auch der Wert mit einem Schrägstrich enden), kann er neben einer exakten Übereinstimmung auch als Präfix abgeglichen werden.

Betrachten Sie beispielsweise die folgende Import-Map:

```json
{
  "imports": {
    "shapes/": "./shapes/"
  }
}
```

Auch hier wird der relative URL-Wert beim Parsen der Import-Map relativ zur Dokument-URL aufgelöst. Das entspricht also `https://example.com/shapes/`.

Wenn der Resolver nun auf einen Spezifizierer wie den folgenden trifft:

```js
import { name as squareNameFour } from "shapes/square.js";
```

Er durchläuft die `imports`-Einträge nacheinander (hier gibt es nur einen), stellt fest, dass der Schlüssel `"shapes/"` ein Präfix des angeforderten Spezifizierers ist, und verwendet den zugeordneten Wert. Das Schlüsselpräfix wird vom Spezifizierer entfernt; übrig bleibt `square.js`. Dieser Rest wird mit dem zugeordneten Wert (`https://example.com/shapes/`) als Basis-URL aufgelöst. Anschließend wird das Modul unter `https://example.com/shapes/square.js` angefordert.

Der verbleibende Teil des Spezifizierers darf den zugeordneten Wert nicht „verlassen“. Wenn Sie beispielsweise Folgendes schreiben:

```js
import { name as squareNameFour } from "shapes/../square.js";
```

Dann ist der Rest `../square.js`. Relativ zu `https://example.com/shapes/` aufgelöst ergibt das `https://example.com/square.js`. Der zugeordnete Wert ist kein Präfix der endgültigen URL mehr. In diesem Fall löst der Resolver einen Fehler aus.

Schlüssel, die mit `/` enden, können weiterhin exakt abgeglichen werden. Zum Beispiel:

```js
import { name as squareNameFour } from "shapes/";
```

Der Resolver löst dies zu `https://example.com/shapes/` auf und fordert diese URL an.

Die Einträge des Objekts `imports` sind stets so sortiert, dass Schlüssel B vor Schlüssel A steht, wenn A ein Präfix von B ist. Bei der folgenden Import-Map:

```json
{
  "imports": {
    "shapes/": "./shapes/",
    "shapes/square/": "./squares/"
  }
}
```

Der Modulspezifizierer `shapes/square/index.js` wird daher vorrangig mit dem spezifischeren `shapes/square/` statt mit `shapes/` abgeglichen.

#### Exakte Übereinstimmung und Präfixübereinstimmung kombinieren

In Node können Sie entweder ein Paket selbst importieren, wodurch die Datei [`main`](https://docs.npmjs.com/cli/configuring-npm/package-json/#main) importiert wird, oder eine Datei innerhalb des Pakets (sofern package.json kein Feld [`exports`](https://docs.npmjs.com/cli/configuring-npm/package-json/#exports) enthält):

```js
import _ from "lodash";
import fp from "lodash/fp.js";
```

In diesem Fall müssen Sie separate Einträge für `lodash` und das Präfix `lodash/` bereitstellen:

```json
{
  "imports": {
    "lodash": "/node_modules/lodash-es/lodash.js",
    "lodash/": "/node_modules/lodash-es/"
  }
}
```

#### Allgemeine URL-Neuzuordnung

Der Schlüssel muss kein bloßer Name sein. Er kann auch eine absolute oder relative URL sein. Gegeben sei die folgende Import-Map:

```json
{
  "imports": {
    "https://www.unpkg.com/lodash/": "/node_modules/lodash-es/"
  }
}
```

Wenn der Resolver nun auf einen Spezifizierer wie den folgenden trifft:

```js
import { name as squareNameFour } from "https://www.unpkg.com/lodash/fp.js";
```

Er verwendet den entsprechenden Präfixeintrag und löst ihn zu `https://example.com/node_modules/lodash-es/fp.js` auf. Das ist besonders für Tests nützlich, da Sie ein Modul durch eine alternative Version ersetzen können.

Die URL-Neuzuordnung hilft auch dabei, Hashes aus Modulnamen herauszuhalten. Skriptdateien, die von Websites verwendet werden, haben oft Dateinamen mit Hashes, um das Caching zu vereinfachen. Der Nachteil dieses Ansatzes: Ändert sich ein Modul, müssen auch alle Module aktualisiert oder neu erzeugt werden, die es über seinen Dateinamen mit Hash importieren. Das kann eine Kette von Aktualisierungen auslösen, die Netzwerkressourcen verschwendet.

Import-Maps bieten hierfür eine praktische Lösung. Statt von bestimmten Dateinamen mit Hash abzuhängen, verwenden Anwendungen und Skripte einen Modulnamen ohne Hash. Eine Import-Map wie die folgende ordnet diesen Namen dann der tatsächlichen Skriptdatei zu.

```json
{
  "imports": {
    "/node/srcs/application.js": "/node/srcs/application-fg7744e1b.js",
    "/node/srcs/dependency.js": "/node/srcs/dependency-3qn7e4b1q.js"
  }
}
```

Wenn sich `dependency.js` ändert, ändert sich auch der im Dateinamen enthaltene Hash. In diesem Fall müssen wir nur die Import-Map aktualisieren, damit sie den geänderten Modulnamen berücksichtigt. Der JavaScript-Quellcode importiert weiterhin von `"/node/srcs/dependency.js"`.

Leider bieten Import-Maps keinen „Suffixabgleich“. Sie können also nicht festlegen: „Ersetze `application.js` durch `application-fg7744e1b.js`, unabhängig vom davorstehenden Pfad.“ Statt `./application.js`, `https://example.com/node/srcs/application.js` usw. müssen Sie nun immer von `/node/srcs/application.js` importieren. Letztlich kann es für Sie dennoch praktischer sein, einen Bundler zu verwenden, der den Code kompiliert und die Imports umschreibt.

### Das Objekt `scopes`

Das Objekt `imports` gilt global: Die Neuzuordnung wird auf alle Module der Anwendung angewendet, unabhängig von deren Speicherort. Derselbe Spezifizierer `lodash` wird immer zum selben Modul aufgelöst.

In der Praxis können verschiedene Module unterschiedliche Versionen des Pakets `lodash` benötigen. Beispielsweise könnte Paket A von `lodash` v3 abhängen, während Paket B `lodash` v4 benötigt. In Node wird dies erreicht, indem jedes Paket sein eigenes `node_modules` erhält:

```plain
https://example.com
└── node_modules
    ├── lodash          <-- v4; your application and package B will use this
    ├── package-a
    │   └── node_modules
    │       └── lodash  <-- v3; package A will use this
    └── package-b
```

Um dieses `node_modules` ohne Umschreiben des Quellcodes direkt auf Ihrer Website bereitzustellen, müssen Sie die Import-Map so gestalten, dass der Spezifizierer `lodash` für Module innerhalb von `package-a` zu einer anderen Adresse aufgelöst wird als für Module innerhalb von `package-b`. Dies setzen Sie mit dem Objekt `scopes` um, beispielsweise so:

```json
{
  "imports": {
    "lodash": "/node_modules/lodash/lodash.js"
  },
  "scopes": {
    "/node_modules/package-a/": {
      "lodash": "/node_modules/package-a/lodash/lodash.js"
    }
  }
}
```

Innerhalb des Objekts `scopes` ist jeder Schlüssel ein Scope und jeder Wert eine Modulspezifizierer-Map, genau wie bei `imports`. Wie bei den Schlüsseln von `imports` gilt:

- Ein Scope kann entweder nicht mit `/` enden; dann wird er exakt mit der URL des importierenden Moduls abgeglichen. Oder er kann mit `/` enden; dann kann er zusätzlich als Präfix dieser URL abgeglichen werden.
- Die Scope-Schlüssel werden nach der URL-Auflösung in absteigender lexikografischer Reihenfolge sortiert. Dadurch haben spezifischere Präfixe Vorrang vor weniger spezifischen.

Der einzige Unterschied besteht darin, dass Scopes gültige URLs sein müssen, die relativ zur Basis-URL des Dokuments aufgelöst werden.

Die Scopes werden der Reihe nach geprüft: Wenn ein Scope für den angeforderten Spezifizierer keine entsprechende Importzuordnung bereitstellt, geht der Resolver zum nächsten passenden Scope über, falls vorhanden. Wenn kein Scope-Schlüssel zur URL des importierenden Moduls passt oder keiner der passenden Scopes eine Importzuordnung bereitstellt, wird die globale `imports`-Map verwendet. Trifft der Resolver jedoch an irgendeiner Stelle auf einen Eintrag mit dem Wert `null` (etwa weil der Wert keine gültige URL ist), schlägt die Auflösung sofort fehl, ohne auf eine andere Zuordnung zurückzugreifen.

Im obigen Beispiel lautet der Scope-Schlüssel `/node_modules/package-a/` und wird zu `https://example/node_modules/package-a/` aufgelöst. Wenn das Modul unter `https://example.com/node_modules/package-a/index.js` Folgendes enthält:

```js
import _ from "lodash";
```

Der Resolver prüft zuerst die `scopes`, stellt fest, dass die URL des importierenden Moduls ein Präfix des Scope-Schlüssels ist, und verwendet dessen Spezifizierer-Map. Diese legt fest, dass `lodash` auf `https://example.com/node_modules/package-a/lodash/lodash.js`, die Version v3, abgebildet wird.

Wenn dagegen das Modul unter `https://example.com/node_modules/package-b/index.js` dieselbe Zeile enthält, findet der Resolver beim Prüfen von `scopes` keinen passenden Schlüssel und greift auf die globale `imports`-Map zurück. Dadurch wird `https://example.com/node_modules/lodash/lodash.js`, die Version v4, importiert.

Beachten Sie, dass der Scope-Schlüssel nur für den Abgleich mit der URL des importierenden Moduls verwendet wird. Er dient nicht als Basis-URL für das Auflösen oder Validieren anderer URLs. Die endgültige zugeordnete URL muss nicht zum Scope-Pfad passen. Relative zugeordnete URLs werden weiterhin relativ zur Basis-URL des Skripts aufgelöst, das die Import-Map enthält.

## Nicht-JavaScript-Ressourcen laden

Der [Leitfaden zu Modulen](/de/docs/Web/JavaScript/Guide/Modules#importing_json_modules) stellt bereits die Syntax der [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with) vor, mit der Sie Nicht-JavaScript-Ressourcen importieren können. Die von der Kernsprache festgelegten Ressourcentypen sind `type: "json"` und `type: "text"`.

```js
import colors from "./colors.json" with { type: "json" };
```

Im Web gibt es zusätzlich `type: "css"`, womit CSS-Dateien als [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekte importiert werden.

```js
import styles from "./styles.css" with { type: "css" };

document.adoptedStyleSheets = [styles];
```

Während die Spezifikation der Kernsprache allgemein wenig über das Attribut `type` aussagt (außer dass `type: "json"` zu einem JSON-Modul und `type: "text"` zu einem Textmodul führen muss), verlangt die HTML-Spezifikation aus Sicherheitsgründen eine strenge Prüfung des Modultyps durch Browser. Wenn Sie `type: "json"` oder `type: "css"` angeben, muss die Ressource mit dem entsprechenden `Content-Type` bereitgestellt werden, beispielsweise `application/json` oder `text/css`. Geben Sie keinen Typ an, muss die Ressource als JavaScript oder WebAssembly bereitgestellt werden (`text/javascript` beziehungsweise `application/wasm`).

Wenn sich die Datei im obigen Beispiel mit `type: "css"` als JavaScript herausstellt (sie wird mit einem `Content-Type` von `text/javascript` bereitgestellt), schlägt der Import fehl. So wird verhindert, dass Sie unbeabsichtigt Code ausführen. Weitere Informationen finden Sie in der [Referenz zu Importattributen](/de/docs/Web/JavaScript/Reference/Statements/import/with).

Andere Umgebungen, darunter Node.js und Deno, übernehmen häufig die Semantik des Webs und verlangen daher ebenfalls eine strenge Übereinstimmung des Typs.

Im Web ändert das Attribut `type` außerdem das [Ziel](/de/docs/Web/HTTP/Reference/Headers/Sec-Fetch-Dest) der Anfrage. Deshalb können Sie selbst mit demselben Spezifizierer unterschiedliche Modulinhalte erhalten.

```js
import code from "./module";
// This sends a request with Sec-Fetch-Dest: script
// The server may respond with JavaScript: `export default 1;`

import data from "./module" with { type: "json" };
// This sends a request with Sec-Fetch-Dest: json
// The server may respond with JSON: `{ "value": 1 }`

import styles from "./module" with { type: "css" };
// This sends a request with Sec-Fetch-Dest: style
// The server may respond with CSS: `.value { color: green; }`

import text from "./module" with { type: "text" };
// This sends a request with Sec-Fetch-Dest: text
// The server may respond with text: `Hello world!`
```

## Modul-Caching

[Modul-Caching](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#module_caching) ermöglicht es Imports, ein Modul und seinen Zustand wiederzuverwenden. Im Web legt die HTML-Spezifikation fest, welche Anfragen sich ein Modul teilen.

In Browsern verwendet die [Modul-Map](https://html.spec.whatwg.org/multipage/webappapis.html#module-map) die aufgelöste Anfrage-URL und den Modultyp als Schlüssel. Unterschiedliche Spezifizierer-Zeichenfolgen können daher dasselbe Modul bezeichnen. Obwohl die folgenden beiden Anfragen unterschiedliche Spezifizierer-Zeichenfolgen verwenden, verweisen sie beispielsweise auf dasselbe Modul (sofern keine Import-Map die Auflösung verändert):

```js
// -- https://example.com/main.js --
import * as config1 from "./config.js";
import * as config2 from "https://example.com/config.js";

console.log(config1 === config2); // true
```

Auch der über [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with) gewählte Modultyp ist Teil des Schlüssels. Eine Anfrage an eine URL mit `{ type: "json" }` verwendet daher nicht den Eintrag für dieselbe URL ohne `type` wieder (bei dem implizit JavaScript angenommen wird). Separate Dokumente und Worker haben separate Modul-Maps. Wird ein Modul sowohl auf einer Seite als auch in ihrem Worker importiert, teilen sie sich deshalb nicht die Variablen des Moduls.

Modul-Caching ist vom [HTTP-Caching](/de/docs/Web/HTTP/Guides/Caching) getrennt. Beim HTTP-Caching können Antwortdaten wiederverwendet werden; beim Modul-Caching werden Identität und Zustand des Moduls wiederverwendet. Ein neues Dokument kann ein Modul erneut auswerten, selbst wenn dessen Quellcode aus dem HTTP-Cache stammt. Umgekehrt bewirkt `Cache-Control: no-store` nicht, dass ein bereits ausgewertetes Modul bei jedem Import erneut ausgeführt wird.

Browser behandeln URLs mit unterschiedlichen Query-Strings oder Fragmenten als unterschiedliche Modulidentitäten, selbst wenn sie identischen Quellcode abrufen:

```js
import * as config1 from "./config.js?version=1";
import * as config2 from "./config.js?version=2";

console.log(config1 === config2); // false
```

Dadurch entstehen zwei Modulinstanzen aus demselben Quellcode. Weitere Abhängigkeiten werden dennoch gemeinsam genutzt: Wenn beide Instanzen `"./logger.js"` importieren, wird dieser Spezifizierer für beide zur selben URL aufgelöst. Sie teilen sich also `logger.js`.

Bei [Ladefehlern](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#errors_from_loading) verlangt die [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-a-single-module-script), dass fehlgeschlagene Abrufe, einschließlich HTTP-Fehlerantworten, aus der Modul-Map entfernt werden, damit ein späterer Import einen erneuten Versuch unternehmen kann. Der HTTP-Cache kann dabei weiterhin eine zwischengespeicherte Fehlerantwort liefern. Parse-Fehler bleiben hingegen in der Modul-Map erhalten. Wird derselbe Modulimport erneut versucht, wird daher kein korrigierter Quellcode abgerufen.

## Das Objekt import.meta

Der [Leitfaden zu Modulen](/de/docs/Web/JavaScript/Guide/Modules#module_metadata) hat auch das Objekt [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta) vorgestellt und darauf hingewiesen, dass _alle_ seine Eigenschaften vom Host definiert werden.

Verwenden Sie [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta) mit dem Konstruktor [`URL()`](/de/docs/Web/API/URL/URL), wenn sich eine Ressource relativ zu Ihrem Modul befindet:

```js
// -- modules/set-user.js --
const apiURL = new URL("../api/set-user", import.meta.url);

export async function setUser(name) {
  const response = await fetch(apiURL, {
    method: "POST",
    body: JSON.stringify({ name }),
  });
  if (!response.ok) {
    throw new Error(`Unable to set user: ${response.status}`);
  }
}
```

In einem Fenster wird eine relative URL, die direkt an `fetch()` übergeben wird, etwa `fetch("../api/set-user")`, relativ zur Basis-URL des Dokuments aufgelöst. Sie wird nicht relativ zu dem JavaScript-Modul aufgelöst, das den Aufruf enthält. Wenn Sie die URL ausdrücklich konstruieren, ist der Speicherort der Ressource unabhängig von der Seite, die das Modul importiert.

Um einen Modulspezifizierer nach den Modulauflösungsregeln des Hosts aufzulösen, verwenden Sie [`import.meta.resolve()`](/de/docs/Web/JavaScript/Reference/Operators/import.meta/resolve). In einem Browser mit einer Import-Map, die `"shapes"` definiert, gibt beispielsweise `import.meta.resolve("shapes")` die aufgelöste URL zurück. Anders als `import()` löst dies den Spezifizierer auf, ohne das Modul zu laden oder auszuwerten.

## Siehe auch

- [HTML-Element `<script>`](/de/docs/Web/HTML/Reference/Elements/script)
- [`<script type="importmap">`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap)
- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules)
