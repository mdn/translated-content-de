---
title: Module auf Webseiten verwenden
slug: Web/JavaScript/Guide/Modules/Modules_on_the_web
l10n:
  sourceCommit: 3702ec507a67c8b50368a86719809ad06890ae92
---

Auf dieser Seite wird erläutert, wie JavaScript-Module in die Webplattform integriert sind. Die hier beschriebenen Funktionen sind in der HTML-Spezifikation und anderen Webspezifikationen definiert, nicht in der JavaScript-Kernsprache. Sie sind daher in der Regel nur für Webseiten relevant. Wenn Sie Module für andere Umgebungen schreiben, lesen Sie stattdessen die Leitfäden zu [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) und [Modulen auf verschiedenen Plattformen](/de/docs/Web/JavaScript/Guide/Modules/Modules_across_platforms).

## Serverkonfiguration

Wenn Sie Webseiten auf Module umstellen, werden Sie zunächst feststellen, dass Sie Ihr HTML nicht mehr über das `file://`-Protokoll anzeigen können. Stellen Sie das Verzeichnis mit Ihrem HTML und Ihren Modulen über einen [lokalen HTTP-Server](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) bereit und öffnen Sie die Seite über dessen URL, beispielsweise `http://localhost:8000/`.

Der Grund dafür ist, dass Modulanfragen [CORS](/de/docs/Web/HTTP/Guides/CORS) verwenden und `file://`-URLs niemals denselben Ursprung haben. Wenn Sie ein Modul von einem anderen Ursprung importieren, muss dessen Server den Ursprung Ihrer Seite über CORS-Antwortheader wie {{HTTPHeader("Access-Control-Allow-Origin")}} zulassen. Standardmäßig werden ursprungsübergreifende Modulanfragen ohne Anmeldedaten wie Cookies gesendet. Wenn Sie das Attribut [`crossorigin="use-credentials"`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für das `<script>`-Element setzen, werden Anmeldedaten gesendet, sofern die CORS-Header des Servers dies zulassen. Das gilt für den gesamten Modulgraphen, der über dieses Skript geladen wird.

Der Server muss JavaScript-Module mit einem JavaScript-[MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) wie `Content-Type: text/javascript` ausliefern. Prüfen Sie dies sowohl für `.js`- als auch für `.mjs`-Dateien. Wenn ein Import aufgrund eines MIME-Typ-Fehlers fehlschlägt, untersuchen Sie die Antwort in den Netzwerkwerkzeugen Ihres Browsers: Möglicherweise wurde statt des Moduls eine Antwort für eine fehlende Datei oder eine HTML-Ersatzseite zurückgegeben.

## Module in HTML einbinden

Um ein Skript im Element [`<script>`](/de/docs/Web/HTML/Reference/Elements/script) als Modul zu deklarieren, müssen Sie `type="module"` angeben. Um beispielsweise das Skript `main.js` zu importieren, verwenden wir Folgendes:

```html
<script type="module" src="main.js"></script>
```

Nur der Einstiegspunkt benötigt ein `<script type="module">`-Element: Alle Module, die er importiert, werden automatisch als Module geladen. Sie müssen also nicht für jedes Modul ein eigenes `<script>`-Element hinzufügen.

Sie können den Modulcode auch direkt in die HTML-Datei einbetten, indem Sie den JavaScript-Code in den Inhalt des `<script>`-Elements schreiben:

```html
<script type="module">
  /* JavaScript module code here */
</script>
```

Im Allgemeinen sollten Sie alle Module in separaten Dateien definieren. Inline in HTML deklarierte Module können zwar andere Module importieren, ihre Exporte sind für andere Module jedoch nicht zugänglich, da sie keine URL haben.

Sie können `import`- und `export`-Anweisungen nur innerhalb von Modulen verwenden, nicht in gewöhnlichen Skripten. Ein Fehler wird ausgelöst, wenn Ihr `<script>`-Element kein `type="module"`-Attribut hat und versucht, andere Module zu importieren. Zum Beispiel:

```html example-bad
<script>
  import mod from "./mod.js"; // SyntaxError: import declarations may only appear at top level of a module
  // ...
</script>
<script src="a-module-using-import-statements.js"></script>
<!-- SyntaxError: import declarations may only appear at top level of a module -->
```

[Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity) über das Attribut [`integrity`](/de/docs/Web/HTML/Reference/Attributes/integrity) funktioniert auch für Modulskripte, das Attribut deckt jedoch nur das Einstiegsmodul ab. Integritätsmetadaten für dessen Abhängigkeiten können über den `integrity`-Schlüssel einer Import Map angegeben werden.

> [!NOTE]
> Module und ihre Abhängigkeiten können vorab geladen werden, indem Sie sie in [`<link>`](/de/docs/Web/HTML/Reference/Elements/link)-Elementen mit [`rel="modulepreload"`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) angeben.
> Dies kann die Ladezeit bei Verwendung der Module erheblich verkürzen.

Wenn Sie bereits mit herkömmlichen `<script>`-Elementen vertraut sind, beachten Sie außerdem die folgenden Unterschiede im Verhalten:

- Innerhalb derselben Umgebung wird ein Modul nur einmal ausgeführt, auch wenn es mehrfach importiert oder in mehreren `<script>`-Tags referenziert wird.
- Beim Laden eines Modulskripts ist das Attribut `defer` nicht erforderlich (siehe [Attribute von `<script>`](/de/docs/Web/HTML/Reference/Elements/script#attributes)). Im Dokument deklarierte Modulskripte ohne `async` werden automatisch verzögert ausgeführt.
- Wenn Sie das Attribut `async` hinzufügen, wird der Modulgraph ausgewertet, sobald er vollständig geladen ist. Dabei wird weder auf den Abschluss der HTML-Verarbeitung gewartet noch eine Reihenfolge gegenüber anderen Skripten garantiert. Anders als bei klassischen Skripten funktioniert `async` auch bei Inline-Modulskripten.

## Module in Workern

Module werden nicht nur in Dokumenten ausgeführt: Auch [Worker](/de/docs/Web/API/Web_Workers_API) können Module sein. Dazu müssen Sie dem Konstruktor [`Worker()`](/de/docs/Web/API/Worker/Worker) oder [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker) beziehungsweise [`navigator.serviceWorker.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) `type: "module"` übergeben:

```js
const worker = new Worker("./worker.js", { type: "module" });
```

Die Datei des Workers wird zum Einstiegspunkt seines eigenen [Modulgraphen](/de/docs/Web/JavaScript/Guide/Modules/Module_graph).

Innerhalb eines Modul-Workers können Sie andere Module nur mit `import`-Deklarationen oder `import()` importieren. Ein Aufruf von [`importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) löst einen `TypeError` aus. Beachten Sie, dass dynamisches `import()` in Service Workern nicht verfügbar ist. Der gesamte Code eines Modul-Service-Workers muss daher über statische Importe erreichbar sein. [Worklets](/de/docs/Web/API/Worklet) laden ihren Code mit `addModule()`; dabei handelt es sich immer um ein Modul.

## Modulspezifizierer im Web

Modulspezifizierer sind die Zeichenfolgen, die auf das Schlüsselwort `from` folgen:

```js
import { name } from "./module.js";
```

Im [Modul-Leitfaden](/de/docs/Web/JavaScript/Guide/Modules#named_imports) haben wir bereits erwähnt, dass das Format des Modulspezifizierers von der Laufzeitumgebung abhängt. Sehen wir uns an, wie sie in Browsern funktionieren.

Im Web basiert alles auf URLs. Jedes Modul hat eine URL, sodass Sie es direkt über seine absolute URL importieren können:

```js
import { name } from "https://example.com/js/modules/module.js";
```

Der Browser sendet eine HTTP-Anfrage an die angegebene URL. Wenn der Server eine erfolgreiche Antwort mit `Content-Type: text/javascript` zurückgibt, wird das Laden des Moduls fortgesetzt.

> [!NOTE]
> Es ist eine verbreitete Annahme, dass „ESM Dateiendungen in Modulspezifizierern erfordert“. Das ist zugleich richtig und falsch. Die JavaScript-Laufzeitumgebung _fügt_ nicht automatisch eine Dateiendung hinzu. Wenn Sie `import { name } from "https://example.com/modules/module";` schreiben, sendet der Browser weiterhin eine Anfrage an diese URL, ohne die Endung `.js`. Wenn die Anfrage erfolgreich JavaScript-Inhalt zurückliefert, wird das Modul wie gewohnt geladen. Das Problem ist lediglich, dass Server Anfragen ohne Dateiendung üblicherweise als Anfragen nach HTML-Dateien interpretieren. Daher ist fast immer eine zusätzliche Konfiguration nötig, damit stattdessen eine JavaScript-Datei ausgeliefert wird.

Auch andere URL-Schemata, etwa [`data:`](/de/docs/Web/URI/Reference/Schemes/data), werden als Ressourcenadressen unterstützt. Weitere Informationen finden Sie in der [Referenz zu `import`](/de/docs/Web/JavaScript/Reference/Statements/import#module_specifier_resolution).

Module immer über absolute URLs zu importieren, bringt dieselben Probleme mit sich wie absolute URLs für Linkziele: Sie sind lang und funktionieren nicht mehr, wenn Sie Ihre Website auf eine andere Domain oder Ihre gesamten JavaScript-Dateien an einen anderen Pfad verschieben. Ein Modulspezifizierer kann auch eine relative URL sein, ähnlich dem Attribut [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) von {{HTMLElement("a")}}-Elementen. Der einzige Unterschied besteht darin, dass alle relativen URLs mit `/`, `./` oder `../` beginnen müssen. Sie können also keine „nackten“ relativen URLs wie `modules/module.js` verwenden, sondern müssen `./modules/module.js` schreiben. Diese Einschränkung hält nackte Spezifizierer für eine besondere Bedeutung frei: Im Ökosystem hat sich, insbesondere durch Node.js, die Konvention etabliert, dass ein nackter Name wie `"jquery"` auf ein Paket verweist. Im Web wird diese besondere Bedeutung nun durch [Import Maps](#module_mit_import_maps_importieren) zugewiesen. Ein nackter Spezifizierer, der nicht durch eine Import Map zugeordnet wird, löst einen `TypeError` aus.

Die URL im Modulspezifizierer wird relativ zur URL des aktuellen Moduls aufgelöst, nicht relativ zur URL des HTML-Dokuments. Um beispielsweise innerhalb eines Moduls unter `https://example.com/js/main.js` das Modul `https://example.com/js/modules/module.js` zu importieren, schreiben Sie:

```js
import { name } from "./modules/module.js";
```

## Module mit Import Maps importieren

Neben relativen und absoluten URLs können Entwickler mit [Import Maps](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) beim Import eines Moduls fast beliebigen Text als Modulspezifizierer verwenden. Die Map enthält einen zugehörigen Wert, durch den dieser Text beim Auflösen der Modul-URL ersetzt wird. Eine Import Map wird als [JSON-Objekt](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#import_map_json_representation) innerhalb eines `<script>`-Elements definiert, dessen Attribut `type` auf [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) gesetzt ist.

> [!NOTE]
> Eine Import Map gilt nur für das Dokument. Die Spezifikation definiert nicht, wie eine Import Map in einem Worker- oder Worklet-Kontext angewendet wird. <!-- https://github.com/WICG/import-maps/issues/2 -->

Beispielsweise definiert der Schlüssel `imports` in der folgenden Import Map ein JSON-Objekt zur Zuordnung von Modulspezifizierern. Dessen Eigenschaftsnamen können als Modulspezifizierer verwendet werden; die zugehörigen Werte werden eingesetzt, wenn der Browser die Modul-URL auflöst.

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
> Im Folgenden lassen wir das umschließende `<script type="importmap">`-Element weg und zeigen Import Maps direkt als JSON-Code. Beachten Sie, dass das JSON direkt in das HTML eingebettet sein muss und nicht als externe Datei über `src` referenziert werden kann.

Mit dieser Map können Sie nun nackte Spezifizierer wie `shapes` und `shapes/square` verwenden, die standardmäßig abgelehnt würden:

```js
// Bare module names as module specifiers
import { name as squareNameOne } from "shapes";
import { name as squareNameTwo } from "shapes/square";

// Remap a URL to another URL
import { name as squareNameThree } from "https://example.com/shapes/square.js";
```

Import Maps haben viele Anwendungsfälle:

- Mit ihnen können Module über nackte Modulnamen importiert werden (wie in Node.js). Dadurch können Module, die npm-Pakete importieren, direkt im Web bereitgestellt werden, sofern auch die Pakete unter einer URL erreichbar sind. Siehe [Wörtlicher Abgleich](#wörtlicher_abgleich) und [Präfixabgleich](#präfixabgleich).
- Sie ermöglichen es, über vollständige URLs importierte Module bei Bedarf durch andere URLs zu ersetzen, ohne den Quellcode zu ändern. Siehe [Allgemeine URL-Neuzuordnung](#allgemeine_url-neuzuordnung).
- Sie ermöglichen es, abhängig vom Pfad des importierenden Skripts bestimmte Versionen einer Bibliothek zu importieren. Siehe [Das Objekt `scopes`](#the_scopes_object).

Dies kann den Aufwand verringern, dieselben JavaScript-Bibliotheken sowohl im Browser als auch auf dem Server zu verwenden.

Darüber hinaus können über die Import Map Hash-basierte Integritätsangaben für Modulabhängigkeiten festgelegt werden (das Attribut [`integrity`](/de/docs/Web/HTML/Reference/Attributes/integrity) von `<script>` gilt nur für das Einstiegsmodul). Dies wird hier nicht näher erläutert, da es für die Auflösung von Spezifizierern nicht relevant ist. Siehe [Zuordnung von Integritätsmetadaten](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#integrity_metadata_map).

### Unterstützung erkennen

Sie können die Unterstützung für Import Maps mit der statischen Methode [`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static) prüfen, die selbst breit unterstützt wird:

```js
if (HTMLScriptElement.supports?.("importmap")) {
  console.log("Browser supports import maps.");
}
```

### Das Objekt `imports`

Die Eigenschaft `imports` enthält ein Objekt, dessen Eigenschaftswerte jeweils Zeichenfolgen sind. Werte mit anderen Datentypen werden zu `null`. Weitere Bedingungen, die im Folgenden beschrieben werden, führen ebenfalls dazu, dass ein Wert zu `null` wird. Trifft der Resolver auf einen Eintrag mit dem Wert `null`, schlägt die Auflösung dieses Spezifizierers sofort fehl.

Jeder Schlüssel muss einer von zwei Arten angehören:

- Der Schlüssel endet nicht mit `/`: Er wird unverändert mit dem Spezifizierer verglichen.
- Der Schlüssel endet mit `/`: Er wird als Präfix mit dem Spezifizierer verglichen. In diesem Fall muss auch der Wert mit `/` enden; andernfalls wird er zu `null`. Mehr zum Präfixabgleich folgt später.

Der Wert muss eine URL sein, die relativ zur [Basis-URL](/de/docs/Web/HTML/Reference/Elements/base) des Dokuments aufgelöst wird, das die Import Map enthält. Schlägt das Parsen der URL fehl, wird der Wert zu `null`. (Beachten Sie, dass relative URLs „nackt“ sein können; nur Modulspezifizierer dürfen nicht nackt sein.)

Die Reihenfolge der Eigenschaften im Objekt `imports` spielt keine Rolle: Intern werden sie anhand ihrer Schlüssel immer in absteigender lexikografischer Reihenfolge sortiert. Bei der Auflösung werden die Eigenschaften in dieser Reihenfolge abgeglichen.

#### Wörtlicher Abgleich

Angenommen, das folgende `<script>`-Element ist in der Seite unter `https://example.com/welcome` enthalten.

```json
{
  "imports": {
    "square": "./shapes/square.js"
  }
}
```

Hier verwenden wir eine relative URL als Wert. Sie wird relativ zur Basis-URL des Dokuments aufgelöst und entspricht daher `https://example.com/shapes/square.js`. Wäre dieses `<script>`-Element in der Seite `https://example.com/welcome/` enthalten, entspräche der Wert stattdessen `https://example.com/welcome/shapes/square.js`.

Wenn der Resolver nun auf einen Spezifizierer wie den folgenden trifft:

```js
import { name, draw, reportArea, reportPerimeter } from "square";
```

Er durchläuft die `imports`-Einträge nacheinander (hier gibt es nur einen), stellt fest, dass der Schlüssel `"square"` dem angeforderten Spezifizierer entspricht, und verwendet dessen Wert. Daraufhin wird das Modul unter `https://example.com/shapes/square.js` angefordert.

#### Präfixabgleich

Wenn der Schlüssel mit einem Schrägstrich `/` endet (in diesem Fall muss auch der Wert so enden), kann er zusätzlich zum wörtlichen Abgleich als Präfix abgeglichen werden.

Betrachten Sie beispielsweise die folgende Import Map:

```json
{
  "imports": {
    "shapes/": "./shapes/"
  }
}
```

Auch hier wird der Wert als relative URL beim Parsen der Import Map relativ zur Dokument-URL aufgelöst. Er entspricht damit `https://example.com/shapes/`.

Wenn der Resolver nun auf einen Spezifizierer wie den folgenden trifft:

```js
import { name as squareNameFour } from "shapes/square.js";
```

Er durchläuft die `imports`-Einträge nacheinander (hier gibt es nur einen), erkennt, dass der Schlüssel `"shapes/"` ein Präfix des angeforderten Spezifizierers ist, und verwendet den zugeordneten Wert. Das Schlüsselpräfix wird vom Spezifizierer entfernt, sodass `square.js` übrig bleibt. Dieser Rest wird mit dem zugeordneten Wert (`https://example.com/shapes/`) als Basis-URL aufgelöst. Daraufhin wird das Modul unter `https://example.com/shapes/square.js` angefordert.

Der verbleibende Teil des Spezifizierers darf den Bereich des zugeordneten Werts nicht „verlassen“. Wenn Sie beispielsweise Folgendes schreiben:

```js
import { name as squareNameFour } from "shapes/../square.js";
```

Dann lautet der verbleibende Teil `../square.js`. Relativ zu `https://example.com/shapes/` aufgelöst ergibt das `https://example.com/square.js`. Der zugeordnete Wert ist damit kein Präfix der endgültigen URL mehr. In diesem Fall löst der Resolver einen Fehler aus.

Schlüssel, die mit `/` enden, können weiterhin wörtlich abgeglichen werden. Zum Beispiel:

```js
import { name as squareNameFour } from "shapes/";
```

Der Resolver löst dies zu `https://example.com/shapes/` auf und fordert diese URL an.

Wie bereits erwähnt, werden die Einträge des Objekts `imports` immer so sortiert, dass Schlüssel B vor Schlüssel A steht, wenn A ein Präfix von B ist. Bei der folgenden Import Map:

```json
{
  "imports": {
    "shapes/": "./shapes/",
    "shapes/square/": "./squares/"
  }
}
```

Der Modulspezifizierer `shapes/square/index.js` wird daher vorrangig mit dem spezifischeren `shapes/square/` statt mit `shapes/` abgeglichen.

#### Wörtlichen Abgleich und Präfixabgleich kombinieren

In Node können Sie entweder ein Paket selbst importieren, wodurch die Datei [`main`](https://docs.npmjs.com/cli/configuring-npm/package-json/#main) importiert wird, oder eine Datei innerhalb des Pakets (sofern die package.json kein Feld [`exports`](https://docs.npmjs.com/cli/configuring-npm/package-json/#exports) enthält):

```js
import _ from "lodash";
import fp from "lodash/fp.js";
```

In diesem Fall müssen Sie getrennte Einträge für `lodash` und das Präfix `lodash/` angeben:

```json
{
  "imports": {
    "lodash": "/node_modules/lodash-es/lodash.js",
    "lodash/": "/node_modules/lodash-es/"
  }
}
```

#### Allgemeine URL-Neuzuordnung

Der Schlüssel muss kein nackter Name sein. Er kann auch eine absolute oder relative URL sein. Gegeben sei die folgende Import Map:

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

Er verwendet den entsprechenden Präfixeintrag und löst ihn zu `https://example.com/node_modules/lodash-es/fp.js` auf. Dies ist besonders für Tests nützlich, da Sie ein Modul durch eine alternative Version ersetzen können.

Eine URL-Neuzuordnung hilft auch dabei, Hashes aus Modulnamen herauszuhalten. Skriptdateien von Websites haben häufig Dateinamen mit einem Hash, um das Caching zu vereinfachen. Der Nachteil dieses Ansatzes: Ändert sich ein Modul, müssen auch alle Module aktualisiert oder neu erzeugt werden, die es über seinen gehashten Dateinamen importieren. Dadurch kann eine Kaskade von Aktualisierungen entstehen, die Netzwerkressourcen verschwendet.

Import Maps bieten hierfür eine praktische Lösung. Statt von konkreten gehashten Dateinamen hängen Anwendungen und Skripte von einer Version des Modulnamens ohne Hash ab. Eine Import Map wie die folgende ordnet diesen Namen dann der tatsächlichen Skriptdatei zu.

```json
{
  "imports": {
    "/node/srcs/application.js": "/node/srcs/application-fg7744e1b.js",
    "/node/srcs/dependency.js": "/node/srcs/dependency-3qn7e4b1q.js"
  }
}
```

Wenn sich `dependency.js` ändert, ändert sich auch der Hash in ihrem Dateinamen. In diesem Fall müssen wir nur die Import Map aktualisieren, damit sie den geänderten Modulnamen berücksichtigt. Der JavaScript-Quellcode importiert weiterhin aus `"/node/srcs/dependency.js"`.

Leider unterstützen Import Maps keinen „Suffixabgleich“. Sie können also nicht festlegen: „Ersetze `application.js` durch `application-fg7744e1b.js`, unabhängig vom vorangestellten Pfad.“ Statt `./application.js`, `https://example.com/node/srcs/application.js` usw. müssen Sie dann immer aus `/node/srcs/application.js` importieren. Möglicherweise ist es letztlich doch praktischer, einen Bundler zu verwenden, der den Code kompiliert und die Importe umschreibt.

### Das Objekt `scopes`

Das Objekt `imports` gilt global: Die Neuzuordnung wird auf alle Module der Anwendung angewendet, unabhängig von ihrem Speicherort. Derselbe Spezifizierer `lodash` wird immer zum selben Modul aufgelöst.

In der Praxis möchten verschiedene Module möglicherweise unterschiedliche Versionen des Pakets `lodash` importieren. Beispielsweise könnte Paket A von `lodash` v3 und Paket B von `lodash` v4 abhängen. In Node wird dies erreicht, indem jedes Paket eigene `node_modules` erhält:

```plain
https://example.com
└── node_modules
    ├── lodash          <-- v4; your application and package B will use this
    ├── package-a
    │   └── node_modules
    │       └── lodash  <-- v3; package A will use this
    └── package-b
```

Um diese `node_modules` ohne Umschreiben des Quellcodes direkt auf Ihrer Website bereitzustellen, müssen Sie die Import Map so gestalten, dass der Spezifizierer `lodash` für Module innerhalb von `package-a` zu einer anderen Adresse aufgelöst wird als für Module innerhalb von `package-b`. Dazu verwenden Sie das Objekt `scopes`, beispielsweise so:

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

Innerhalb des Objekts `scopes` ist jeder Schlüssel ein Scope und jeder Wert eine Zuordnung von Modulspezifizierern, genau wie bei `imports`. Wie für Schlüssel von `imports` gilt:

- Der Scope kann entweder nicht mit `/` enden; dann wird er wörtlich mit der URL des importierenden Moduls abgeglichen. Oder er endet mit `/`; dann kann er zusätzlich als Präfix dieser URL abgeglichen werden.
- Die Scope-Schlüssel werden nach der URL-Auflösung in absteigender lexikografischer Reihenfolge sortiert. Dadurch haben spezifischere Präfixe Vorrang vor weniger spezifischen.

Der einzige Unterschied besteht darin, dass Scopes gültige URLs sein müssen, die relativ zur Basis-URL des Dokuments aufgelöst werden.

Die Scopes werden der Reihe nach geprüft: Enthält ein Scope keine passende Importzuordnung für den angeforderten Spezifizierer, geht der Resolver zum nächsten passenden Scope über, sofern vorhanden. Passt kein Scope-Schlüssel zur URL des importierenden Moduls oder enthält keiner der passenden Scopes die Importzuordnung, wird die globale `imports`-Map verwendet. Trifft der Resolver dabei jedoch auf einen Eintrag mit dem Wert `null` (etwa weil der Wert keine gültige URL ist), schlägt die Auflösung sofort fehl, ohne auf andere Einträge zurückzugreifen.

Im obigen Beispiel lautet der Scope-Schlüssel `/node_modules/package-a/` und wird zu `https://example/node_modules/package-a/` aufgelöst. Wenn das Modul unter `https://example.com/node_modules/package-a/index.js` Folgendes enthält:

```js
import _ from "lodash";
```

Der Resolver prüft zuerst die `scopes`, erkennt, dass der Scope-Schlüssel ein Präfix der URL des importierenden Moduls ist, und verwendet dessen Spezifiziererzuordnung. Darin wird `lodash` auf `https://example.com/node_modules/package-a/lodash/lodash.js` abgebildet, also auf die v3-Version.

Enthält hingegen das Modul unter `https://example.com/node_modules/package-b/index.js` dieselbe Zeile, findet der Resolver bei der Prüfung von `scopes` keinen passenden Schlüssel. Er greift daher auf die globale `imports`-Map zurück, die `https://example.com/node_modules/lodash/lodash.js`, die v4-Version, importiert.

Beachten Sie, dass der Scope-Schlüssel nur zum Abgleich mit der URL des importierenden Moduls verwendet wird. Er dient nicht als Basis-URL, um andere URLs aufzulösen oder zu validieren. Die endgültige zugeordnete URL muss nicht zum Scope-Pfad passen. Relative zugeordnete URLs werden weiterhin relativ zur Basis-URL des Dokuments aufgelöst, das die Import Map enthält.

## Nicht-JavaScript-Ressourcen laden

Der [Modul-Leitfaden](/de/docs/Web/JavaScript/Guide/Modules#importing_json_modules) stellt bereits die Syntax für [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with) vor, mit der Sie Nicht-JavaScript-Ressourcen importieren können. Die von der Kernsprache definierten Ressourcentypen sind `type: "json"` und `type: "text"`.

```js
import colors from "./colors.json" with { type: "json" };
```

Im Web gibt es zusätzlich `type: "css"`. Damit werden CSS-Dateien als [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekte importiert.

```js
import styles from "./styles.css" with { type: "css" };

document.adoptedStyleSheets = [styles];
```

Die Spezifikation der Kernsprache macht zwar allgemein nur wenige Vorgaben zum Attribut `type` (abgesehen davon, dass `type: "json"` ein JSON-Modul und `type: "text"` ein Textmodul ergeben muss), die HTML-Spezifikation verlangt jedoch aus Sicherheitsgründen, dass Browser den Modultyp strikt prüfen. Wenn Sie `type: "json"` oder `type: "css"` angeben, muss die Antwort mit dem entsprechenden `Content-Type` ausgeliefert werden (beispielsweise `application/json` oder `text/css`). Geben Sie keinen Typ an, muss die Antwort als JavaScript oder WebAssembly (`text/javascript` beziehungsweise `application/wasm`) ausgeliefert werden.

Wenn sich die Datei im obigen Beispiel mit `type: "css"` als JavaScript herausstellt (also mit einem `Content-Type` von `text/javascript` ausgeliefert wird), schlägt der Import fehl. Dadurch wird verhindert, dass Sie unbeabsichtigt Code ausführen. Weitere Informationen finden Sie in der [Referenz zu Importattributen](/de/docs/Web/JavaScript/Reference/Statements/import/with).

Andere Umgebungen, darunter Node.js und Deno, orientieren sich häufig am Verhalten des Webs und verlangen ebenfalls eine strikte Übereinstimmung der Typen.

Im Web verändert das Attribut `type` außerdem die [Zielangabe](/de/docs/Web/HTTP/Reference/Headers/Sec-Fetch-Dest) der Anfrage. Daher können Sie selbst mit demselben Spezifizierer unterschiedliche Modulinhalte erhalten.

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

[Modul-Caching](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#module_caching) ermöglicht es Importen, ein Modul und dessen Zustand wiederzuverwenden. Im Web legt die HTML-Spezifikation fest, welche Anfragen sich ein Modul teilen.

In Browsern verwendet die [Module Map](https://html.spec.whatwg.org/multipage/webappapis.html#module-map) die aufgelöste Anfrage-URL und den Modultyp als Schlüssel. Unterschiedliche Spezifizierer-Zeichenfolgen können daher dasselbe Modul bezeichnen. Obwohl die folgenden beiden Anfragen unterschiedliche Spezifizierer-Zeichenfolgen verwenden, verweisen sie beispielsweise auf dasselbe Modul (sofern keine Import Map die Auflösung verändert):

```js
// -- https://example.com/main.js --
import * as config1 from "./config.js";
import * as config2 from "https://example.com/config.js";

console.log(config1 === config2); // true
```

Auch der über [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with) gewählte Modultyp ist Teil des Schlüssels. Eine Anfrage für eine URL mit `{ type: "json" }` verwendet daher nicht den Eintrag für dieselbe URL ohne `type` wieder (dessen impliziter Typ JavaScript ist). Separate Dokumente und Worker haben jeweils eigene Module Maps. Wenn Sie ein Modul auf einer Seite und in deren Worker importieren, teilen sich beide daher nicht die Variablen des Moduls.

Modul-Caching ist etwas anderes als [HTTP-Caching](/de/docs/Web/HTTP/Guides/Caching). Beim HTTP-Caching können die Bytes einer Antwort wiederverwendet werden; beim Modul-Caching werden die Identität und der Zustand eines Moduls wiederverwendet. Ein neues Dokument kann ein Modul erneut auswerten, selbst wenn dessen Quellcode aus dem HTTP-Cache stammt. Umgekehrt führt `Cache-Control: no-store` nicht dazu, dass ein bereits ausgewertetes Modul bei jedem Import erneut ausgeführt wird.

Browser behandeln URLs mit unterschiedlichen Query-Strings oder Fragmenten als unterschiedliche Modulidentitäten, selbst wenn sie identischen Quellcode abrufen:

```js
import * as config1 from "./config.js?version=1";
import * as config2 from "./config.js?version=2";

console.log(config1 === config2); // false
```

Dadurch entstehen zwei Modulinstanzen aus demselben Quellcode. Weitere Abhängigkeiten werden dennoch gemeinsam verwendet: Wenn beide Instanzen `"./logger.js"` importieren, wird dieser Spezifizierer in beiden Fällen zur selben URL aufgelöst, sodass sie sich `logger.js` teilen.

Bei [Ladefehlern](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#errors_from_loading) verlangt die [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-a-single-module-script), dass fehlgeschlagene Abrufe, einschließlich HTTP-Fehlerantworten, aus der Module Map entfernt werden, damit ein späterer Import es erneut versuchen kann. Der HTTP-Cache kann dabei weiterhin eine zwischengespeicherte Fehlerantwort liefern. Parse-Fehler bleiben hingegen in der Module Map erhalten. Ein erneuter Import desselben Moduls ruft daher keinen korrigierten Quellcode ab.

## Das Objekt import.meta

Der [Modul-Leitfaden](/de/docs/Web/JavaScript/Guide/Modules#module_metadata) hat auch das Objekt [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta) vorgestellt und erwähnt, dass _alle_ seine Eigenschaften von der Host-Umgebung definiert werden.

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

In einem Fenster wird eine relative URL, die direkt an `fetch()` übergeben wird, beispielsweise `fetch("../api/set-user")`, relativ zur Basis-URL des Dokuments aufgelöst. Sie wird nicht relativ zu dem JavaScript-Modul aufgelöst, das den Aufruf enthält. Wenn Sie die URL ausdrücklich konstruieren, ist der Speicherort der Ressource unabhängig von der Seite, die das Modul importiert.

Um einen Modulspezifizierer nach den Modulauflösungsregeln der Host-Umgebung aufzulösen, verwenden Sie [`import.meta.resolve()`](/de/docs/Web/JavaScript/Reference/Operators/import.meta/resolve). In einem Browser mit einer Import Map, die `"shapes"` definiert, gibt beispielsweise `import.meta.resolve("shapes")` dessen aufgelöste URL zurück. Anders als `import()` löst dies den Spezifizierer auf, ohne das Modul zu laden oder auszuwerten.

## Siehe auch

- [HTML-Element `<script>`](/de/docs/Web/HTML/Reference/Elements/script)
- [`<script type="importmap">`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap)
- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules)
