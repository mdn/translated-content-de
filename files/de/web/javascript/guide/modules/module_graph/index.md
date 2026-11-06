---
title: Den Modulgraphen verstehen
slug: Web/JavaScript/Guide/Modules/Module_graph
l10n:
  sourceCommit: 696a0436bb4dd20eb4d30ac3f1d4fc5140d1eee9
---

Durch `import`- und `export`-Deklarationen bilden JavaScript-Module einen komplexen Abhängigkeitsgraphen. Dieser Leitfaden erläutert verschiedene Konzepte rund um das Laden von Modulen und zeigt, wie sich dieses Verhalten darauf auswirkt, wie Sie Ihren Code strukturieren und schreiben.

## Was ist der Modulgraph?

Im Leitfaden zu [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) haben wir bereits ein einfaches Beispiel für einen Modulgraphen gezeigt:

![Diagramm, das zeigt, wie Module mit Webseiten verbunden sind](/de/docs/Web/JavaScript/Guide/Modules/module-loading.svg)

Graphen bestehen aus Knoten, die durch Kanten verbunden sind. In diesem Modulgraphen sind die Knoten die verschiedenen importierten JavaScript-Dateien (hier sind alle Module JavaScript-Module, aber auch JSON, CSS, WebAssembly usw. wären möglich). Jedes Mal, wenn Sie in `module A` `import ... from "module B"` (oder `export ... from "module B"`) schreiben, erzeugen Sie eine gerichtete Kante von `module A` zu `module B`. Die HTML-Datei selbst gehört nicht zum Modulgraphen, definiert aber alle _Einstiegspunkte_.

Jeder Modulgraph benötigt mindestens einen Einstiegspunkt, von dem aus die Laufzeitumgebung mit der Ermittlung der Abhängigkeiten beginnt. Im obigen Beispiel gibt es mehrere Einstiegspunkte: Jedes `<script>`-Element bildet einen. In [Node.js](/de/docs/Web/JavaScript/Guide/Modules/Modules_across_platforms) (oder anderen serverseitigen Laufzeitumgebungen) ist dieser Einstiegspunkt die Datei, mit der Sie `node` aufgerufen haben. Bei Workern ist es die Datei, die Sie an den [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktor übergeben haben. Graphen mit unterschiedlichen Einstiegspunkten sind nicht notwendigerweise getrennt: Wenn sie dasselbe Modul importieren (oder der Einstiegspunkt selbst bereits importiert wird), können sie zu einem größeren Graphen zusammengeführt werden.

## Vom Modulquelltext zur Ausführung

Sehen wir uns anhand des folgenden Beispiels an, wie Module geladen und ausgewertet werden. Wir gehen davon aus, dass es in Node mit `node main.js` ausgeführt wird (hier gibt es nichts Node-Spezifisches, aber Module lassen sich in Node leichter starten).

```js
// -- main.js --
import { greet } from "./formatters.js";
import config from "./config.js";

greet("Josh", config.locale);
```

```js
// -- formatters.js --
import config from "./config.js";
import { log } from "./logger.js";

export function greet(name, localeName = config.defaultLocale) {
  const locale = new Intl.Locale(localeName);
  if (locale.language === "en") {
    log(`Hello, ${name}!`);
  } else if (locale.language === "fr") {
    log(`Bonjour, ${name} !`);
  } else {
    throw new Error(`Sorry, I don't speak ${locale}.`);
  }
}
```

```js
// -- config.js --
export default {
  locale: "en-US",
  defaultLocale: "en-US",
};
```

```js
// -- logger.js --
export function log(message) {
  console.log(`[${new Date().toISOString()}] ${message}`);
}
```

### Den Graphen laden

Beim Laden von Modulen müssen die Host-Umgebung (Node) und die Engine (V8) eng zusammenarbeiten. Dies geschieht rekursiv: Auf jeder Rekursionsebene erhält die Host-Umgebung eine _Modulanfrage_ (mit dem Modulbezeichner und gegebenenfalls Importattributen) und führt dann Folgendes aus:

- Die Host-Umgebung lädt den Quelltext des betreffenden Moduls (beispielsweise indem sie ihn einem Speicherort im Dateisystem zuordnet und den Inhalt der Datei liest).
  - Dieser Schritt lässt sich weiter in zwei Schritte unterteilen: die [Auflösung des Modulbezeichners](/de/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web#module_specifiers_on_the_web) und das eigentliche Senden der Anfrage. In Browsern kann dies eine HTTP-Anfrage sein, in Node ein Zugriff auf das Dateisystem.
  - Der Einstiegspunkt unterscheidet sich geringfügig: Hier ist normalerweise keine Auflösung eines Modulbezeichners erforderlich. Beispielsweise wird das Befehlszeilenargument `main.js` direkt als Dateipfad und das `src`-Attribut von `<script>`-Elementen direkt als URL gelesen; keines von beiden ist ein Modulbezeichner. Auch der Abrufvorgang kann sich etwas unterscheiden.
- Die Host-Umgebung übergibt der Engine den Modulquelltext. Die Engine parst ihn und erfasst alle `import`- und `export from`-Deklarationen, aus denen neue Modulanfragen entstehen. (Wenn der Quelltext kein JavaScript ist, kann die Host-Umgebung stattdessen einen anderen Parser mit der Verarbeitung beauftragen.)
- Alle diese Modulanfragen werden an die Host-Umgebung übergeben, die den gesamten Vorgang erneut startet und möglicherweise mehrere Anfragen gleichzeitig bearbeitet.
- Wenn die Host-Umgebung feststellt, dass sie eine Modulanfrage bereits geladen hat oder gerade lädt (in Browsern und Node.js werden Module sowohl anhand aufgelöster URLs als auch anhand von Modultypen zwischengespeichert), ruft sie das Modul nicht erneut ab und lässt es nicht noch einmal von der Engine parsen. Stattdessen stellt sie das vorhandene Modul bereit und wartet bei Bedarf, bis der laufende Ladevorgang abgeschlossen ist.

In diesem konkreten Beispiel:

- Die Host-Umgebung liest die Datei `main.js` und lässt sie von der Engine parsen.
- Die Engine findet zwei Modulanfragen, für `./formatters.js` und `./config.js`. Sie übergibt diese Anfragen an die Host-Umgebung.
- Die Host-Umgebung lädt beide, indem sie die entsprechenden Dateien liest. Angenommen, `formatters.js` ist zuerst vollständig geladen: Dann übergibt die Host-Umgebung dessen Quelltext zuerst an die Engine.
- Beim Parsen von `formatters.js` werden eine weitere Anfrage für `./config.js` sowie eine neue Abhängigkeit, `./logger.js`, sichtbar. Die Engine übergibt beide an die Host-Umgebung.
- Die Host-Umgebung stellt fest, dass `./config.js` bereits von `main.js` angefragt wurde, und überspringt diese Anfrage (obwohl das Modul noch geladen wird). Sie beginnt mit dem Laden von `logger.js`.
- Das Laden von `logger.js` und `config.js` wird abgeschlossen; keines der beiden Module enthält weitere Anfragen.

Nach diesem Schritt steht der Modulgraph bereits fest. Alle Module wurden geladen und geparst, aber durch diesen Ladevorgang wurde noch kein JavaScript-Modulkörper ausgeführt.

![Modulgraph](module-graph.svg)

### Module verknüpfen

Nachdem der Graph erfolgreich vollständig geladen wurde, weist die Host-Umgebung die Engine an, das Einstiegsmodul zu _verknüpfen_. Das Hauptziel der Verknüpfung besteht darin, die {{Glossary("Scope", "Modulumgebung")}} einzurichten, also die verschiedenen {{Glossary("binding", "Bindungen")}}, einschließlich der zu exportierenden Bindungen. Jeder importierte Name wird zu der Stelle aufgelöst, an der er tatsächlich definiert und exportiert wird. Dabei können mehrere Ebenen von `export from`-Deklarationen durchlaufen werden. Alle Module im Graphen müssen verknüpft sein, bevor sie ausgewertet werden können. So lässt sich frühzeitig erkennen, wenn ein importierter Name auf der anderen Seite nicht exportiert wird, noch bevor Code ausgeführt wird. Außerdem vereinfacht dies die anschließende Auswertung, weil der Modulgraph nicht bei jeder Verwendung eines importierten Namens erneut durchlaufen werden muss.

Während der Verknüpfungsphase durchläuft die Engine den Modulgraphen mit einer Tiefensuche (Depth-First Search, DFS). Dies geschieht rekursiv: Auf jeder Rekursionsebene besucht die Engine ein Modul (beginnend beim Einstiegspunkt) und geht dann wie folgt vor:

- Wenn das Modul bereits verknüpft ist oder gerade verknüpft wird (was bei [zyklischen Importen](#zyklische_importe) vorkommt), verarbeitet die Engine es nicht erneut. Andernfalls markiert sie das Modul als „wird verknüpft“.
- Die Engine verknüpft rekursiv jede Abhängigkeit des Moduls nach demselben Verfahren. Anders als das Laden ist die Verknüpfung vollständig synchron und deterministisch: Abhängigkeiten werden in der Reihenfolge besucht, in der ihre Modulanfragen im Quelltext stehen.
- Nachdem alle Abhängigkeiten besucht wurden, richtet die Engine die Umgebung des Moduls ein. Für jede Deklaration auf oberster Ebene des Moduls erstellt sie eine Bindung. Für jeden importierten Namen (außer Importen, die zu einem Modul-Namespace-Objekt aufgelöst werden) löst sie den Namen zur Bindung in dem Modul auf, das ihn tatsächlich deklariert. Anschließend erstellt sie eine _indirekte Bindung_: einen Namen im importierenden Modul, der dauerhaft auf die Bindung des anderen Moduls verweist. Importe, die zu einem Modul-Namespace-Objekt aufgelöst werden, einschließlich benannter Importe aus `export * as ns from`-Exporten, erzeugen stattdessen lokale Bindungen, die mit diesem Objekt initialisiert werden. Kann ein importierter Name nicht aufgelöst werden, schlägt die Verknüpfung fehl.
- Das Modul wird als verknüpft markiert. (Bei einem Zyklus werden alle beteiligten Module gemeinsam als verknüpft markiert; darauf kommen wir später zurück.)

Wie bei gewöhnlichen Deklarationen (siehe {{Glossary("hoisting", "Hoisting")}}) erfolgen auch das Erstellen und das Initialisieren exportierter Bindungen in getrennten Schritten: Funktionsdeklarationen werden während der Verknüpfung initialisiert, `var`-Deklarationen mit `undefined`. Deklarationen mit `export default`, `let`, `const` und `class` bleiben dagegen uninitialisiert, bis die Auswertung sie erreicht.

In unserem Beispiel:

- Die Engine beginnt bei `main.js`, folgt dessen Abhängigkeit von `formatters.js` und erreicht dann `config.js`. Sie markiert `main.js` und `formatters.js` als „wird verknüpft“.

  > [!NOTE]
  > Deshalb heißt die Traversierung „Tiefensuche“: Die Engine geht zunächst so weit wie möglich, bis sie ein Modul ohne weitere unverarbeitete Anfragen erreicht, und arbeitet sich von dort zurück.

- Für `config.js` erstellt die Engine eine Bindung für den Default-Export, wertet das Objektliteral aber noch nicht aus – das geschieht erst in der nächsten Phase. Die Bindung bleibt uninitialisiert.
- Als Nächstes verknüpft sie `logger.js`, die nächste Abhängigkeit von `formatters.js`. Die Engine erstellt die Bindung `log` und initialisiert sie mit dem Funktionsobjekt.
- Die Engine kehrt zu `formatters.js` zurück. Dessen importierte Bindung `config` verweist auf den Default-Export von `config.js`, und die importierte Bindung `log` auf die Bindung `log` in `logger.js`. Die eigene Bindung `greet` wird mit dem Funktionsobjekt initialisiert.
- Schließlich kehrt die Engine zu `main.js` zurück. Dessen andere Abhängigkeit, `config.js`, wurde bereits verknüpft und wird daher nicht noch einmal verknüpft. Die Engine verbindet die Importe `greet` und `config` in `main.js` mit ihren jeweiligen exportierten Bindungen.

![Importierte Bezeichner verweisen auf die entsprechenden Exporte in den Abhängigkeitsmodulen.](module-linking.svg)

Meistens wird der importierte Name direkt im importierten Modul deklariert, wie in diesem Beispiel. Dann folgen die Verbindungen der Bindungen denselben Pfaden wie der Modulabhängigkeitsgraph. Wenn Sie jedoch `export from` verwenden oder einen importierten Bezeichner exportieren, folgt der Linker diesen Ebenen, bis er die Stelle findet, an der der Bezeichner tatsächlich deklariert ist.

![Durchgezogene Pfeile zeigen die Abhängigkeitskette von a.js über b.js und c.js bis d.js. Gestrichelte Pfeile verbinden die importierten x-Bindungen in a.js und b.js direkt mit der x-Deklaration in d.js.](module-reexports.svg)

Hier verläuft die Importkette zwar über `a.js → b.js → c.js → d.js`, aber jede `x`-Bindung in dieser Kette wird letztlich zur selben `const`-Deklaration in `d.js` aufgelöst. `c.js` besitzt dagegen keine Bindung auf Modulebene. Die Bindungsverbindungen führen direkt zu `d.js`, während der Modulabhängigkeitsgraph weiterhin die gesamte Importkette enthält.

Eine `export * from`-Deklaration reexportiert alle Namen eines anderen Moduls (außer `default`) als benannte Exporte des aktuellen Moduls. Beim Auflösen eines importierten Namens prüft die Engine zuerst, ob dieser Name explizit exportiert wird. Ist dies nicht der Fall, folgt sie den `export * from`-Deklarationen und löst den Namen rekursiv in den betreffenden Modulen auf.

Mehrere `export * from`-Deklarationen können dazu führen, dass das aktuelle Modul denselben Namen mehrfach exportiert (auch hier kollidiert `export * from` nie mit einem expliziten benannten Export; dieser hat immer Vorrang). Wenn diese Deklarationen letztlich zur selben Bindung aufgelöst werden, besteht keine Mehrdeutigkeit. Werden sie zu unterschiedlichen Bindungen aufgelöst, ist der Name mehrdeutig – selbst wenn diese Bindungen zufällig denselben Wert enthalten. Beispiel:

```js
// -- first.js --
export const x = 1;
```

```js
// -- second.js --
export const x = 1;
```

```js
// -- combined.js --
export * from "./first.js";
export * from "./second.js";
// Should "x" from this module resolve to first.js or second.js?
```

Die Sternchen-Exporte allein verursachen keinen Fehler. `import { x } from "./combined.js"` oder `export { x } from "./combined.js"` führt jedoch während der Verknüpfung zu einem {{jsxref("SyntaxError")}}. Ein Namespace-Import, `import * as combined from "./combined.js"`, ist erfolgreich, aber das Namespace-Objekt hat keine Eigenschaft `x`.

Wenn Sie `combined.js` um `export { x } from "./first.js"` ergänzen, wird die Mehrdeutigkeit beseitigt: Explizite Exporte haben unabhängig von der Reihenfolge der Deklarationen Vorrang vor Sternchen-Exporten.

### Module auswerten

Nachdem die Umgebungen aller Module vorbereitet wurden, können sie endlich ausgewertet werden. Die Host-Umgebung weist die Engine an, das Einstiegsmodul auszuwerten. Die Engine durchläuft den Modulgraphen erneut mit einer Tiefensuche. Nehmen wir zunächst an, dass kein Modul [`await` auf oberster Ebene](#`await`_auf_oberster_ebene_und_asynchrone_auswertung) verwendet. Die Auswertung erfolgt rekursiv: Auf jeder Rekursionsebene besucht die Engine ein Modul (beginnend beim Einstiegspunkt) und geht dann wie folgt vor:

- Wurde das Modul bereits erfolgreich ausgewertet, führt die Engine es nicht erneut aus. Ist eine frühere Auswertung fehlgeschlagen, gibt sie stattdessen den gespeicherten Fehler weiter. Wird das Modul gerade ausgewertet, besucht die Engine seine Abhängigkeiten nicht erneut und vermeidet so eine unendliche Rekursion in einem Zyklus. Andernfalls markiert sie das Modul als „wird ausgewertet“.
- Die Engine wertet jede Abhängigkeit rekursiv nach demselben Verfahren aus, in der Reihenfolge, in der die Modulanfragen im Quelltext stehen.
- Nachdem alle Abhängigkeiten besucht wurden, führt die Engine den Modulkörper aus. Variableninitialisierungen werden ausgeführt und initialisieren die bei der Verknüpfung vorbereiteten Bindungen; andere Anweisungen werden in der Reihenfolge des Quelltexts ausgeführt. Importierte Namen greifen auf die während der Verknüpfung verbundenen Bindungen zu. In einem Zyklus wurde der Körper einer Abhängigkeit möglicherweise noch nicht ausgeführt, sodass eine importierte Bindung noch uninitialisiert sein kann; darauf gehen wir [später](#zyklische_importe) ein.
- Wird der Modulkörper erfolgreich abgeschlossen, wird das Modul als ausgewertet markiert. In einem Zyklus werden Module derselben [stark zusammenhängenden Komponente](#fehler_bei_zyklischen_importen) gemeinsam als ausgewertet markiert, sobald ihre Modulkörper abgeschlossen sind.

In unserem Beispiel:

- Die Engine beginnt bei `main.js`, folgt dessen Abhängigkeit von `formatters.js` und erreicht dann `config.js`. Sie markiert `main.js` und `formatters.js` als „wird ausgewertet“.
- Für `config.js` wertet die Engine das Objektliteral aus und initialisiert die Bindung des Default-Exports mit dem resultierenden Objekt.
- Als Nächstes wertet sie `logger.js` aus, die nächste Abhängigkeit von `formatters.js`. Dessen Funktion `log` wurde bereits bei der Verknüpfung erstellt, und der Funktionskörper wird erst ausgeführt, wenn die Funktion aufgerufen wird. Hier gibt es also nichts Weiteres auszuwerten.
- Die Engine kehrt zu `formatters.js` zurück. Auch dessen Funktion `greet` wurde bereits bei der Verknüpfung erstellt; hier gibt es ebenfalls nichts Weiteres auszuwerten.
- Schließlich kehrt die Engine zu `main.js` zurück. Dessen andere Abhängigkeit, `config.js`, wurde bereits ausgewertet und wird daher nicht erneut ausgeführt. Die Engine ruft `greet("Josh", config.locale)` auf. Dadurch wird `log` aufgerufen und ein Zeitstempel gefolgt von `Hello, Josh!` ausgegeben.

Wenn Sie die `import`-Deklarationen unter den Aufruf von `greet()` verschieben, ihre Reihenfolge zueinander aber beibehalten, ändert sich diese Auswertungsreihenfolge nicht: Abhängigkeiten werden ausgewertet, bevor der Körper des importierenden Moduls beginnt – unabhängig davon, wo dessen Importdeklarationen zwischen anderen Anweisungen stehen.

Löst die Auswertung einen nicht abgefangenen Fehler aus, wird dieser über die gerade ausgewerteten abhängigen Module weitergegeben, und das Auswertungs-Promise des Einstiegsmoduls wird abgelehnt. Bereits eingetretene Wirkungen von ausgeführtem Code werden nicht rückgängig gemacht. Der Fehler bleibt gespeichert, sodass spätere Auswertungsversuche das fehlgeschlagene Modul nicht erneut ausführen.

Mit `await` auf oberster Ebene kann ein Modul seine Ausführung aussetzen und davon abhängige Module verzögern, während andere Zweige weiterlaufen. Dies behandeln wir bei der [asynchronen Auswertung](#`await`_auf_oberster_ebene_und_asynchrone_auswertung).

## Fehler während der Modulverarbeitung

Jede Phase der Modulverarbeitung – Laden, Verknüpfen und Auswerten – kann fehlschlagen. Dadurch kann der Graph in einem teilweise verarbeiteten Zustand zurückbleiben.

### Fehler beim Laden

Ein Ladefehler bei einer Modulanfrage kann unter anderem folgende Ursachen haben (dieser Schritt wird von der Host-Umgebung ausgeführt, daher sind viele Ursachen hostspezifisch):

- Der Modulbezeichner konnte nicht aufgelöst werden (beispielsweise weil er keine gültige URL ist).
- Die Anfrage enthält ungültige Importattribute.
- Die Anfrage ergab einen Fehlerstatus, oder das Dateisystem meldete einen Fehler.
- Der Quelltext konnte nicht geparst werden.

Schlägt eine Modulanfrage fehl, wird der Ladevorgang für diesen Graphen sofort beendet, ohne noch unverarbeitete Modulanfragen zu bearbeiten. Bereits laufende Anfragen können dennoch regulär abgeschlossen und später verwendet werden.

Angenommen, wir fügen `config.js` im obigen Graphen einen Import hinzu:

```js
// -- config.js --
import "./non-existent.js";

export default {
  locale: "en-US",
  defaultLocale: "en-US",
};
```

1. `main.js` beginnt, sowohl `formatters.js` als auch `config.js` zu laden.
2. `config.js` wird zuerst vollständig geladen.
3. Seine Anfrage für `non-existent.js` schlägt fehl (in Node.js löst die Auflösung `ERR_MODULE_NOT_FOUND` aus), während `formatters.js` noch geladen wird.
4. Die Anfrage für `formatters.js` kann noch abgeschlossen werden. Der Ladevorgang dieses Graphen durchläuft dessen Abhängigkeiten aber nicht mehr, sodass `logger.js` bei dieser Traversierung nie angefragt wird.

Dies setzt einen neuen Ladevorgang ohne vorheriges Laden und ohne einen anderen Einstiegspunkt voraus, der diese Module anfragt. Wäre `formatters.js` früher fertig geladen worden, könnte auch `logger.js` bereits geladen werden. Keines der Module in diesem Beispiel wird verknüpft oder ausgewertet.

![Der Ladevorgang stoppt nach dem Fehlschlagen von non-existent.js: main.js und config.js wurden abgerufen und geparst, formatters.js wird noch geladen, und logger.js wurde weder entdeckt noch angefragt.](module-loading-error.svg)

Ob ein erneuter Versuch möglich ist, hängt von der Host-Umgebung und der Art des Fehlers ab. Zum browserspezifischen Verhalten bei erneuten Versuchen siehe [Modul-Caching im Web](/de/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web#module_caching). Anders als beim Laden von Modulen wird ein Aufruf von [`fetch()`](/de/docs/Web/API/Window/fetch) nicht allein deshalb abgelehnt, weil die Antwort einen HTTP-Fehlerstatus hat.

Die Verknüpfung erfolgt nur, wenn _alle_ Module im Graphen vollständig geladen wurden. Ein aufgrund von Fehlern nur teilweise geladener Graph wird nie verknüpft.

### Fehler bei der Verknüpfung

Ein Verknüpfungsfehler bei einem Import kann unter anderem folgende Ursachen haben:

- Der Import verweist auf eine Bindung im Zielmodul, die nicht exportiert wird.
- Der Import verweist auf eine Bindung, die zyklisch exportiert, aber nie tatsächlich definiert wird (beispielsweise enthält `a.js` `export { x } from "./b.js"` und `b.js` enthält `export { x } from "./a.js"`).
- Der Import verweist auf eine Bindung, die aufgrund zweier `export * from`-Deklarationen mehrdeutig ist.

Gehen wir beispielsweise vom ursprünglichen Graphen ohne Ladefehler aus und fügen in `formatters.js` dem Import aus `logger.js` den Namen `missing` hinzu:

```js
// -- formatters.js --
import config from "./config.js";
import { log, missing } from "./logger.js";

// The rest of the module is unchanged.
```

1. Alle vier Module werden vollständig geladen und als unverknüpft markiert.
2. Die Verknüpfung beginnt bei `main.js` und besucht dann `formatters.js` und dessen Abhängigkeiten.
3. `config.js` und `logger.js` werden erfolgreich verknüpft.
4. Beim Einrichten der Umgebung für `formatters.js` erstellt die Engine die Importe für `config` und `log`, kann `missing` aber nicht auflösen, weil `logger.js` diesen Namen nicht exportiert. Sie löst einen {{jsxref("SyntaxError")}} aus.
5. `formatters.js` und `main.js`, die noch verknüpft wurden, kehren in den unverknüpften Zustand zurück. `config.js` und `logger.js` bleiben verknüpft. Es werden keine Modulkörper ausgewertet.

![Alle Module wurden geladen. config.js und logger.js sind verknüpft; der fehlende Import in formatters.js führt zu einem Fehler, und formatters.js und main.js kehren aus der Verknüpfung in den unverknüpften Zustand zurück.](module-linking-error.svg)

Beachten Sie, dass die Verknüpfung synchron und frei von Nebenwirkungen ist. Die Host-Umgebung kann sie nach dem Laden und vor der Auswertung durchführen und bei einem Fehlschlag sogar erneut versuchen (auch wenn derselbe Graph aus JavaScript-Modulen auf denselben Verknüpfungsfehler stoßen wird). Tritt ein Verknüpfungsfehler auf, startet dieser Import keine Auswertung. Gemeinsame Abhängigkeiten können bereits über einen anderen Einstiegspunkt ausgewertet worden sein.

### Fehler bei der Auswertung

Fehler bei der Auswertung sind die gewöhnlichen Fehler, die beim Ausführen von JavaScript auftreten: durch `throw`-Anweisungen, ungültige Funktionsaufrufe, Zugriffe auf uninitialisierte Variablen usw. Wenn die Auswertung eines Moduls einen Fehler auslöst, kann auch der Modulgraph in einem teilweise ausgewerteten Zustand zurückbleiben.

Gehen wir beispielsweise vom ursprünglichen Graphen ohne Lade- oder Verknüpfungsfehler aus und fügen `config.js` eine `throw`-Anweisung auf oberster Ebene hinzu:

```js
// -- config.js --
export default {
  locale: "en-US",
  defaultLocale: "en-US",
};

throw new Error("Configuration unavailable");
```

Außerdem fügen wir in `main.js` vor den bestehenden Importen eine weitere Abhängigkeit hinzu, um auch den Fall zu zeigen, dass ein Modul bereits erfolgreich ausgewertet wurde.

1. Alle fünf Module werden vollständig geladen und erfolgreich verknüpft.
2. Die Auswertung beginnt bei `main.js` und besucht dann dessen erste Abhängigkeit, `extra.js`, die erfolgreich ausgewertet wird.
3. Die Traversierung besucht `formatters.js` und anschließend dessen erste Abhängigkeit, `config.js`. Dieses Modul erstellt das Konfigurationsobjekt und erreicht dann die `throw`-Anweisung.
4. Der Fehler wird über `formatters.js` an `main.js` weitergegeben. Die Körper dieser beiden Module werden nicht ausgeführt, sodass `greet("Josh", config.locale)` nie aufgerufen wird.
5. `config.js`, `formatters.js` und `main.js` werden als ausgewertet markiert, wobei der Fehler gespeichert wird. `extra.js` bleibt erfolgreich ausgewertet. Die Traversierung erreicht `logger.js` nicht; es bleibt verknüpft, aber unausgewertet.

![extra.js wird erfolgreich ausgewertet; config.js löst einen Fehler aus, und config.js, formatters.js und main.js werden mit gespeichertem Fehler als ausgewertet markiert. logger.js bleibt verknüpft, aber unausgewertet.](module-evaluation-error.svg)

Der Status _ausgewertet_ bedeutet, dass der Auswertungsversuch abgeschlossen ist – nicht unbedingt, dass der Modulkörper erfolgreich oder überhaupt ausgeführt wurde. Da die Auswertung von Modulen Nebenwirkungen hat, garantiert die Engine, dass dasselbe Modul nur einmal ausgewertet wird, unabhängig davon, ob ein Fehler aufgetreten ist (auch wenn eine Abhängigkeit einen Fehler ausgelöst hat). Spätere Importe, die dieses Modul wiederverwenden, erhalten bei Erfolg dasselbe Modul-Namespace-Objekt oder bei einem Fehlschlag den gespeicherten Fehler. Das Namespace-Objekt stellt weiterhin Live-Bindungen bereit. In einer neuen Umgebung, etwa auf einer neuen Seite oder in einem neuen Worker, kann der Quelltext erneut geladen und ausgewertet werden. Wirkungen von Code, der vor dem Fehler ausgeführt wurde, werden nicht rückgängig gemacht.

## Zyklische Importe

Der Modulabhängigkeitsgraph wird sowohl für die Verknüpfung als auch für die Auswertung mit einer Tiefensuche (DFS) durchlaufen (beim Laden können Zweige gleichzeitig in nichtdeterministischer Reihenfolge durchlaufen werden; Zyklen wirken sich dabei nicht stärker aus als gewöhnliche gemeinsame Abhängigkeiten). Diese Strategie funktioniert gut für azyklische Abhängigkeitsgraphen wie das obige Beispiel. Selbst wenn zwei Module dasselbe Modul importieren, ist das kaum problematisch: Es gibt immer ein eindeutig bestimmtes „Ende“ (`config.js` und `logger.js`), von dem aus wir uns zurückarbeiten können. Wir müssen lediglich darauf achten, dass dasselbe Modul nicht zweimal verknüpft oder ausgewertet wird.

Zyklen sind jedoch oft unvermeidbar. Ein zyklischer Import entsteht, wenn Modul `a` Modul `b` importiert, `b` aber direkt oder indirekt von `a` abhängt. Betrachten wir beispielsweise den einfachsten Zyklus aus zwei Modulen:

```js
// -- a.js --
import { b } from "./b.js";

export const a = 2;
```

```js
// -- b.js --
import { a } from "./a.js";

export const b = 1;
```

![Ein Zyklus von Modulabhängigkeiten: a.js importiert b.js, und b.js importiert a.js.](module-cycle.svg)

Unter der Annahme, dass keine Fehler ausgelöst werden (auch keine durch Zugriffe auf uninitialisierte Importe, auf die wir gleich eingehen), funktioniert selbst der einfache DFS-Ansatz noch. Betrachten wir als Beispiel die Schritte der Verknüpfung:

- Die Engine besucht `a.js` und markiert es als „wird verknüpft“. Bevor sie dessen Modulumgebung tatsächlich einrichtet, muss sie jedoch zuerst die Abhängigkeiten besuchen.
- Die Engine besucht `b.js` und markiert es als „wird verknüpft“. Bevor sie dessen Modulumgebung tatsächlich einrichtet, muss sie jedoch zuerst die Abhängigkeiten besuchen.
- Die Engine besucht `a.js` erneut und erkennt, dass es bereits als „wird verknüpft“ markiert ist. Es gibt keine weitere nachgelagerte Abhängigkeit.
- Die Engine verknüpft `b.js`, indem sie `a` mit `export const a` in `a.js` verbindet.
- Die Engine verknüpft `a.js`, indem sie `b` entsprechend verbindet.
- Keine vorgelagerte Abhängigkeit wartet noch auf die Verknüpfung von `a.js` und `b.js`; der gesamte Graph ist fertig verknüpft.

Solange sich jeder Import auf eine konkrete Definition und nicht auf einen zyklischen Reexport zurückführen lässt (beispielsweise enthält `a.js` `export { x } from "./b.js"` und `b.js` enthält `export { x } from "./a.js"`), muss das Modul mit der Definition für die Verknüpfung noch nicht selbst verknüpft sein.

Ähnlich verhält es sich bei der Auswertung: `b.js` wird zuerst ausgewertet, weil es eine Abhängigkeit von `a.js` ist. Es hängt seinerseits von `a.js` ab, aber `a.js` ist bereits als „wird ausgewertet“ markiert. Daher kehrt die Engine nicht zu `a.js` zurück. Anschließend wertet das Modul `b.js` die Initialisierung von `const b` aus. Schließlich wird `a.js` ausgewertet und `a = 2` initialisiert.

Dieses Beispiel zeigt, dass zyklische Importe nicht immer fehlschlagen. Der Wert einer importierten Variablen wird erst abgerufen, wenn die Variable tatsächlich verwendet wird (deshalb sind [Live-Bindungen](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter) möglich). Nur wenn die Variable zu diesem Zeitpunkt noch uninitialisiert ist, wird ein [`ReferenceError`](/de/docs/Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init) ausgelöst. Selbst wenn Sie die Werte von `a` und `b` verwenden, können Sie Fehler also vermeiden, indem Sie sicherstellen, dass die Initialisierung vor der Verwendung stattfindet:

```js
// -- a.js --
import { b } from "./b.js";

setTimeout(() => {
  console.log(b); // 1
}, 10);

export const a = 2;
```

```js
// -- b.js --
import { a } from "./a.js";

setTimeout(() => {
  console.log(a); // 2
}, 10);

export const b = 1;
```

In diesem Beispiel werden sowohl `a` als auch `b` asynchron verwendet. Zum Zeitpunkt der Modulauswertung wird daher weder `b` noch `a` tatsächlich gelesen. Der restliche Code wird normal ausgeführt, und die beiden `export`-Deklarationen erzeugen die Werte von `a` und `b`. Nach Ablauf des Timeouts sind beide Werte verfügbar, sodass auch die beiden `console.log`-Anweisungen normal ausgeführt werden.

Wenn Sie den Code so ändern, dass `a` synchron verwendet wird, schlägt die Modulauswertung fehl:

```js
// -- a.js (entry module) --
import { b } from "./b.js";

export const a = 2;
```

```js
// -- b.js --
import { a } from "./a.js";

console.log(a); // ReferenceError: Cannot access 'a' before initialization
export const b = 1;
```

Der Grund ist, dass JavaScript beim Auswerten von `a.js` zuerst dessen Abhängigkeit `b.js` auswerten muss. `b.js` verwendet jedoch `a`, das noch nicht verfügbar ist.

Wenn Sie dagegen den Code so ändern, dass `b` synchron, `a` aber asynchron verwendet wird, ist die Modulauswertung erfolgreich:

```js
// -- a.js (entry module) --
import { b } from "./b.js";

console.log(b); // 1
export const a = 2;
```

```js
// -- b.js --
import { a } from "./a.js";

setTimeout(() => {
  console.log(a); // 2
}, 10);
export const b = 1;
```

Das liegt daran, dass die Auswertung von `b.js` normal abgeschlossen wird. Der Wert von `b` ist somit verfügbar, wenn `a.js` ausgewertet wird.

Funktionsdeklarationen sind in Zyklen wesentlich robuster, da sie während der [Verknüpfung](#module_verknüpfen) initialisiert werden, bevor irgendein Modulkörper ausgeführt wird. Ähnlich wie {{Glossary("hoisting", "Hoisting")}} es zwei Funktionen ermöglicht, sich unabhängig von ihrer Deklarationsreihenfolge gegenseitig aufzurufen, ermöglicht die Initialisierung während der Verknüpfung dies auch über Modulgrenzen hinweg.

```js
// -- a.js (entry module) --
import { isEven } from "./b.js";

export function isOdd(n) {
  return n !== 0 && isEven(n - 1);
}
```

```js
// -- b.js --
import { isOdd } from "./a.js";

console.log(isEven(5)); // false

export function isEven(n) {
  return n === 0 || isOdd(n - 1);
}
```

Obwohl hier nicht asynchron gewartet wird, wurde die Bindung `isOdd` in `a.js` bereits während der Verknüpfung mit ihrem Funktionsobjekt initialisiert, bevor der Körper von `a.js` ausgeführt wurde. Diese Module exportieren nur Funktionsdeklarationen, und ihre Funktionen lesen keinen Zustand, der erst während der Modulauswertung initialisiert wird. Daher können sie sich gefahrlos gegenseitig aufrufen. Das Lesen einer uninitialisierten `let`-, `const`- oder `class`-Bindung würde weiterhin einen Fehler auslösen, selbst wenn die Bindung nur innerhalb des Moduls einer exportierten Funktion zugänglich wäre.

### Fehler bei zyklischen Importen

Schwieriger wird es, wenn bei der Verknüpfung oder Auswertung ein Fehler auftritt. Angenommen, wir fügen im obigen Zyklus aus zwei Modulen nach `export const a = 2;` die Anweisung `throw new Error("Evaluation failed");` hinzu. Eine einfache Traversierung würde `b.js` als erfolgreich ausgewertet markieren, bevor sie `a.js` ausführt, das dann einen Fehler auslöst:

![Eine einfache Traversierung markiert b.js als ausgewertet, bevor a.js einen Fehler auslöst. Ein rot eingekreistes Fragezeichen stellt den Erfolgsstatus von b.js infrage.](module-cycle-error.svg)

Wenn `a.js` in diesem Beispiel bei der Verknüpfung oder Auswertung fehlschlägt, soll `b.js` nicht als erfolgreich markiert werden, obwohl dessen eigene Verknüpfung und Auswertung abgeschlossen sind – denn sein Erfolg hängt vom Erfolg seiner Abhängigkeit `a.js` ab. In einem Zyklus müssen daher alle Module gemeinsam als erfolgreich oder fehlgeschlagen markiert werden.

Der genaue Begriff dafür ist _stark zusammenhängende Komponente_ (Strongly Connected Component, SCC). Eine SCC ist eine maximale Gruppe von Modulen, in der jedes Modul jedes andere Modul erreichen kann. Eine SCC kann aus einem einzelnen Zyklus oder aus mehreren Zyklen bestehen, die Knoten gemeinsam haben, solange die Gruppe maximal ist:

![Zwei Zyklen mit den gemeinsamen Modulen b.js und c.js bilden eine stark zusammenhängende Komponente: a.js → b.js → c.js → d.js → a.js und e.js → b.js → c.js → f.js → e.js.](module-connected-cycles.svg)

Aus der Graphentheorie wissen wir, dass sich jeder gerichtete Graph als azyklischer Graph von SCCs auffassen lässt (wenn wir SCCs als Knoten betrachten, erhalten wir einen „Kondensationsgraphen“). Verarbeiten wir SCCs wie einzelne Knoten (indem wir alle enthaltenen Module gemeinsam als erfolgreich oder fehlgeschlagen markieren), erhalten wir somit einen azyklischen Graphen, der sich, wie bereits gezeigt, leicht handhaben lässt.

Im obigen Fall führt das dazu, dass `b.js` nach Abschluss seiner Auswertung noch nicht als ausgewertet markiert wird: Es wartet, bis `a.js` abgeschlossen ist.

![b.js bleibt nach Abschluss seines Modulkörpers im Zustand „wird ausgewertet“. Wenn a.js einen Fehler auslöst, werden beide Module mit gespeichertem Fehler als ausgewertet markiert.](module-cycle-error-correct.svg)

### Zyklische Importe vermeiden

In der Regel sollten Sie zyklische Importe in Ihrem Projekt vermeiden, weil sie Ihren Code fehleranfälliger machen. Häufige Maßnahmen zum Auflösen von Zyklen sind:

- Fassen Sie die beiden Module zu einem zusammen.
- Verschieben Sie gemeinsam genutzten Code in ein drittes Modul.
- Verschieben Sie einen Teil des Codes von einem Modul in das andere.

Zyklische Importe können allerdings auch entstehen, wenn Bibliotheken voneinander abhängen. Das lässt sich schwerer beheben.

## `await` auf oberster Ebene und asynchrone Auswertung

Module können [`await`](/de/docs/Web/JavaScript/Reference/Operators/await#top-level_await) auf oberster Ebene, außerhalb jeder Funktion, verwenden. So kann ein Modul seine asynchrone Initialisierung abschließen, bevor von ihm abhängige Module ausgeführt werden. Bisher war unsere [Auswertung](#module_auswerten) synchron. Nun muss auch sie asynchron werden, was zahlreiche Auswirkungen auf die Reihenfolge von Nebenwirkungen und auf Fehler hat.

Angenommen, wir ändern `config.js` so, dass es seine Konfiguration von einem Server abruft, der dasselbe Objekt wie in unserem ursprünglichen Beispiel zurückgibt:

```js
// -- config.js --
const response = await fetch("https://example.com/config.json");
if (!response.ok) {
  throw new Error(`Failed to fetch configuration: ${response.status}`);
}
export default await response.json();
```

Die anderen Module müssen nicht geändert werden: Das Modulsystem wartet automatisch, bis `config.js` abgeschlossen ist, bevor es deren Modulkörper und davon abhängige Module wie `main.js` ausführt.

Bisher war ein Modul entweder ausgewertet, unausgewertet oder Teil einer SCC und wartete auf die Auswertung anderer Module. Nun kann ein Modul auch _in Bearbeitung_ sein. Dieser Status umfasst sowohl Module, deren eigene asynchrone Ausführung noch läuft, als auch Module, die auf asynchrone Abhängigkeiten warten. Ein Modul kann diesen Status daher haben, ohne selbst einen `await`-Ausdruck zu enthalten.

Die Engine durchläuft Abhängigkeiten weiterhin zuerst in der Tiefe und in der Reihenfolge, in der ihre Modulanfragen im Quelltext stehen. Sie muss jedoch nicht mehr die Ausführung eines Zweigs abschließen, bevor sie den nächsten besucht. Bei einem azyklischen Graphen läuft der Vorgang so ab:

- Die Engine besucht wie bisher die Abhängigkeiten eines Moduls. Ist eine Abhängigkeit noch in Bearbeitung, vermerkt die Engine, dass dieses Modul auf sie warten muss, besucht aber weiterhin die anderen Abhängigkeiten.
- Sind alle Abhängigkeiten besucht und ist keine mehr in Bearbeitung, beginnt die Engine mit der Ausführung des Modulkörpers. Ein Modul mit `await` auf oberster Ebene wird ausgeführt, bis es ein `await` erreicht. Dann setzt es die Ausführung aus, bis der erwartete Wert erfüllt oder abgelehnt wird. Es bleibt in Bearbeitung, bis sein gesamter Modulkörper einschließlich aller weiteren `await`-Ausdrücke abgeschlossen ist.
- Ein Modul, dessen Abhängigkeiten noch in Bearbeitung sind, ist ebenfalls in Bearbeitung und wartet, ohne irgendeinen Teil seines Modulkörpers auszuführen – auch nicht den Code vor seinem ersten `await`. Dies gilt ebenso für Module, die selbst kein `await` auf oberster Ebene enthalten.
- Wird ein Modul erfolgreich abgeschlossen, prüft die Engine, welche wartenden Importierer nun ausgeführt werden können. Ein Importierer beginnt erst, nachdem alle Abhängigkeiten, auf die er gewartet hat, erfolgreich abgeschlossen wurden. Werden mehrere Module gleichzeitig bereit, entscheidet die durch die Tiefensuche festgelegte Auswertungsreihenfolge darüber, welches zuerst beginnt.

> [!NOTE]
> Wenn mehrere asynchrone Module gleichzeitig ausgeführt werden (beispielsweise wenn auch `logger.js` ein `await` auf oberster Ebene enthält), entspricht das Verhalten der gleichzeitigen Ausführung zweier asynchroner Funktionen: Jedes `await` gibt die Kontrolle aus dem aktuellen Job ab und ermöglicht dem anderen Modul, fortzufahren. Siehe [Auswirkungen von `await` auf den Kontrollfluss](/de/docs/Web/JavaScript/Reference/Operators/await#control_flow_effects_of_await).

In unserem Beispiel erreicht die Engine `config.js` über `main.js` und `formatters.js`. Sie startet den Abruf und setzt `config.js` beim ersten `await` aus. Anschließend besucht und wertet sie `logger.js` aus, das nicht von der Konfiguration abhängt. `formatters.js` muss auf `config.js` warten, und `main.js` muss sowohl auf `formatters.js` als auch auf `config.js` warten. Nachdem der Antwortkörper geparst und `config.js` abgeschlossen wurde, wird `formatters.js` ausgeführt, gefolgt von `main.js`, das `greet()` aufruft.

![Während config.js auf seinen Abruf wartet, sind config.js, formatters.js und main.js in Bearbeitung und bernsteinfarben dargestellt. logger.js wurde erfolgreich ausgewertet und ist grün dargestellt.](module-async-evaluation.svg)

### Weitreichende Auswirkungen von `await` auf oberster Ebene

`await` auf oberster Ebene betrifft somit mehr als nur das Modul, in dem es steht: Auch die Auswertung jedes Moduls, das dieses Modul transitiv importiert, wird asynchron. Im folgenden Modulgraphen enthalten nur `Config` und `Database` ein `await` auf oberster Ebene. `Auth`, `Reports`, `Documents`, `Router`, `Dashboard`, `Editor` und `App` hängen jedoch alle von deren asynchronem Abschluss ab. Die übrigen Zweige können weiterhin synchron ausgewertet werden.

![Ein Modulgraph einer Anwendung. Config und Database enthalten await auf oberster Ebene und sind dunkel türkis dargestellt. Ihre transitiven Importierer Auth, Reports, Documents, Router, Dashboard, Editor und App sind hell türkis. Help, Routes, Charts, Toolbar, Markdown, Tokens, Format, Icons, Parse und Codec haben synchrone Abhängigkeits-Teilgraphen und sind grau.](module-async-propagation.svg)

Das ist wichtig, wenn eine API verlangt, dass die Auswertung synchron abgeschlossen wird. In Node.js kann [`require()` ein ES-Modul laden](https://nodejs.org/api/modules.html#loading-ecmascript-modules-using-require), aber nur, wenn dessen gesamter Abhängigkeitsgraph synchron ist. Ein Modul mit `await` auf oberster Ebene macht jedes Modul darüber (also jedes Modul, das es importiert) ebenfalls asynchron. Diese Module können daher nicht synchron mit `require()` importiert werden. Im obigen Graphen kann `require()` `Help` laden, aber nicht `Router`, obwohl `Router` selbst kein `await` enthält.

Die [`import defer`](/de/docs/Web/JavaScript/Reference/Statements/import/defer#top-level_await)-Deklaration (siehe [Importphasen steuern](#importphasen_steuern)) ist ein weiteres Beispiel: Die verzögerte Auswertung wird durch den Zugriff auf eine Eigenschaft des Namespace-Objekts ausgelöst. Dieser Zugriff muss synchron abgeschlossen werden können; die Auswertung eines asynchronen Teilgraphen lässt sich daher nicht vollständig verzögern. In diesem Fall wird jedoch nicht einfach auf die Verzögerung verzichtet oder wie bei `require()` ein Fehler ausgelöst. Stattdessen werden gezielt die Teile frühzeitig ausgewertet, die verhindern, dass der Graph synchron wird: die Module mit `await` auf oberster Ebene und alle ihre Abhängigkeiten. Wenn beispielsweise ein weiteres Modul im obigen Graphen `App` mit `import defer` importiert, werden `Config` und `Database` zusammen mit ihren Abhängigkeiten `Parse` und `Codec` ausgewertet, bevor der Körper des importierenden Moduls ausgeführt wird. Die Körper von `App` und seiner übrigen Abhängigkeiten können verzögert bleiben. Im Wesentlichen werden die Abhängigkeiten des Graphen von diesen asynchronen Modulen durch synchron verfügbare Ergebnisse ersetzt. Dadurch entfällt die asynchrone Abhängigkeit, und die verzögerte Auswertung kann später synchron fortgesetzt werden.

Wenn Sie einem bestehenden Modul `await` auf oberster Ebene hinzufügen, kann dies für seine Importierer eine inkompatible Änderung sein, selbst wenn seine Exporte unverändert bleiben. Die gesamten Modulkörper der Importierer werden verzögert, einschließlich Anweisungen, die vor ihren `import`-Deklarationen stehen, während unabhängige Module weiter ausgeführt werden können. Dadurch kann sich die Ausführungsreihenfolge von Modulen auf derselben Ebene ändern.

Die folgenden Module verlassen sich beispielsweise auf die Reihenfolge gleichrangiger Importe, um eine globale Variable vor dem Lesen zu initialisieren:

```js
// -- entry.js --
import "./setup.js";
import "./display.js";
```

```js
// -- setup.js --
import { locale } from "./settings.js";

globalThis.appLocale = locale;
```

```js
// -- settings.js --
export const locale = "en-US";
```

```js
// -- display.js --
console.log(globalThis.appLocale); // "en-US"
```

Angenommen, `settings.js` verwendet nun `await` auf oberster Ebene:

```js
// -- settings.js --
export const locale = await Promise.resolve("en-US");
```

`setup.js` wartet jetzt auf `settings.js`, bevor es `globalThis.appLocale` einen Wert zuweist. Währenddessen wird `display.js` ausgeführt und gibt `undefined` aus, sofern `appLocale` nicht bereits definiert war. Die Reihenfolge der Importe in `entry.js` bewirkt nicht, dass `display.js` auf den Abschluss von `setup.js` wartet.

Damit die erforderliche Reihenfolge erhalten bleibt, lassen Sie `display.js` ausdrücklich von `setup.js` abhängen. Das ist sicher, weil ein Modul pro Anwendung nur einmal ausgewertet wird.

```js
// -- display.js --
import "./setup.js";

console.log(globalThis.appLocale); // "en-US"
```

Dasselbe Problem kann auftreten, wenn `setup.js` und `display.js` in dieser Reihenfolge die Einstiegspunkte getrennter `<script type="module">`-Elemente sind. Der explizite Import stellt auch dann sicher, dass `display.js` auf die Einrichtung wartet.

### Zyklen mit `await` auf oberster Ebene handhaben

Bei Zyklen muss zusätzlich zwischen dem statischen Abhängigkeitsgraphen und den Abhängigkeiten unterschieden werden, auf die die Auswertung tatsächlich wartet. Betrachten wir das [asynchrone Beispiel in der Spezifikation](https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-example-cyclic-module-record-graphs), mit `a.js` als Einstiegspunkt und `await` auf oberster Ebene in allen fünf Modulen:

![Ein asynchroner Modulgraph: a.js importiert b.js und c.js; b.js importiert d.js; c.js importiert d.js und e.js; und d.js importiert a.js. Jedes Modul enthält await auf oberster Ebene.](module-async-cycle.svg)

Die Module `a.js`, `b.js`, `c.js` und `d.js` bilden eine SCC. Die Engine besucht zuerst `a.js`, `b.js` und `d.js`. Wenn sie auf den Import von `a.js` in `d.js` trifft, unterbricht sie wie zuvor die weitere Traversierung des Zyklus. Zu diesem Zeitpunkt ist für `a.js` noch nicht vermerkt, dass es auf einen asynchronen Abschluss wartet. Diese Kante führt daher nicht dazu, dass `d.js` auf `a.js` wartet. `d.js` beginnt mit der Ausführung. Anschließend besucht die Engine den anderen Zweig über `c.js`, stellt fest, dass `d.js` noch aussteht, und startet `e.js`.

Angenommen, die asynchronen Vorgänge werden in folgender Reihenfolge abgeschlossen:

- `e.js` wird abgeschlossen. `c.js` wartet noch auf `d.js`, sodass noch kein weiteres Modul beginnt.
- `d.js` wird abgeschlossen. Nun sind sowohl `b.js` als auch `c.js` bereit. Entsprechend der Auswertungsreihenfolge der Traversierung beginnt `b.js` zuerst. Sobald es bei `await` aussetzt, kann auch `c.js` beginnen.
- `c.js` wird abgeschlossen. `a.js` wartet noch auf `b.js`.
- `b.js` wird abgeschlossen. Nun kann `a.js` mit der Ausführung seines Modulkörpers beginnen.
- `a.js` wird abgeschlossen. Das Auswertungs-Promise des Einstiegspunkts wird erfüllt.

Anders als bei den zuvor besprochenen synchronen Zyklen wechseln die Module einer asynchronen SCC nicht unbedingt gemeinsam in den Zustand _ausgewertet_. Jedes kann zu einem anderen Zeitpunkt abgeschlossen werden. Damit das Gesamtergebnis der Komponente erhalten bleibt, ordnet die Engine ihren Modulen einen _Zyklusursprung_ zu: das erste in dieser SCC besuchte Modul, in unserem Fall `a.js`. Importe, die nach der ersten Traversierung auf die Komponente treffen, verwenden diesen Ursprung, um auf den Abschluss der Komponente zu warten und auf einen Auswertungsfehler zu prüfen. Dass der Modulkörper eines Moduls erfolgreich abgeschlossen wurde, bedeutet für sich genommen noch nicht, dass die gesamte Komponente erfolgreich importiert werden kann.

Angenommen, `c.js` schlägt fehl, während `b.js` noch wartet. Der Fehler wird an `a.js` weitergegeben, dessen Modulkörper nie beginnt, und das Auswertungs-Promise des Einstiegspunkts wird abgelehnt. `b.js` wird weiter ausgeführt. Dennoch wird ein späterer dynamischer Import von `b.js` mit dem Fehler abgelehnt, der am Zyklusursprung `a.js` gespeichert ist. Die erfolgreiche Ausführung von `b.js` hebt das Fehlschlagen der Komponente nicht auf.

![Nachdem c.js fehlgeschlagen ist, sind a.js und c.js mit einem Fehler als ausgewertet markiert, die Auswertung von b.js läuft noch, und d.js und e.js wurden erfolgreich ausgewertet.](module-async-cycle-error.svg)

### Deadlocks

Bei Modulen mit `await` auf oberster Ebene können Deadlocks auftreten:

```js
// -- a.js --
import { resolve } from "./b.js";

resolve();
```

```js
// -- b.js --
const { promise, resolve } = Promise.withResolvers();
export { resolve };
await promise;
```

Wenn die Auswertung bei `a.js` beginnt, wartet es auf den Abschluss von `b.js`, bevor es seinen Modulkörper ausführt. `b.js` wartet jedoch auf ein Promise, das nur durch den Aufruf von `resolve()` in `a.js` erfüllt werden kann. Keine der beiden Auswertungen kann abgeschlossen werden. Der Modulalgorithmus lehnt die Promises nicht automatisch ab, um diesen Deadlock aufzulösen.

Das obige Beispiel mag konstruiert wirken. Ein realistischeres Szenario entsteht, wenn Sie auf einen dynamischen Import eines Moduls warten, das vom aktuellen Modul abhängt.

```js
// -- a.js --
await import("./b.js");
```

```js
// -- b.js --
import "./a.js";
```

Auch hier wartet `b.js` darauf, dass der dynamische Import in `a.js` abgeschlossen wird. Dieser Import kann jedoch erst abgeschlossen werden, wenn `b.js` vollständig ausgeführt wurde.

## Dynamische Importe

Alles bisher Beschriebene verwendet statische `import`-Deklarationen. Der Einstiegspunkt ist dabei der Einstiegspunkt der gesamten Anwendung (die `node`-Befehlszeile, die HTML-Datei usw.), sodass Laden und Verknüpfen stattfinden, bevor Benutzercode ausgeführt wird. Ein [dynamischer Import](/de/docs/Web/JavaScript/Reference/Operators/import), `import()`, startet dagegen erst dann einen Import, wenn die Ausführung des Benutzercodes den Ausdruck erreicht. Das angeforderte Modul dient dabei als Einstiegspunkt. So können Sie den Modulgraphen dynamisch _erweitern_, nachdem der ursprüngliche Graph bereits läuft (oder – mit `await` auf oberster Ebene – _während_ der ursprüngliche Graph ausgewertet wird).

Beispielsweise können wir das ursprüngliche `main.js` so ändern, dass es auf Daten aus [`process.stdin`](https://nodejs.org/api/process.html#processstdin) von Node.js wartet und `formatters.js` erst importiert, wenn die Person `Hi` eingibt und die Eingabetaste drückt:

```js
// -- main.js --
import config from "./config.js";

process.stdin.on("data", async (data) => {
  if (data.toString().trim() !== "Hi") return;
  const { greet } = await import("./formatters.js");
  greet("Josh", config.locale);
});
```

Beim anfänglichen Laden von `main.js` wird `config.js` entdeckt. Mit dem Registrieren des Listeners ist die Auswertung von `main.js` abgeschlossen, ohne dass `formatters.js` geladen wurde. Empfängt der Listener `Hi`, beginnt ein weiterer Ladevorgang bei `formatters.js` und entdeckt dessen Importe von `config.js` und `logger.js`. `config.js` ist in diesem Fall bereits verfügbar und wird wiederverwendet. `logger.js` muss dagegen ebenfalls geladen werden, sofern es nicht bereits anderweitig angefragt wurde. Der neue Zweig schließt sich somit bei `config.js` an den bestehenden Graphen an und verwendet dasselbe Modul erneut.

![Ein Doppellinienpfeil zeigt den dynamischen Import von main.js nach formatters.js. Einfache Pfeile zeigen statische Abhängigkeiten. Die hinzugefügten Module formatters.js und logger.js sind türkis hervorgehoben. Die vorhandenen Module main.js und config.js sind hellgrau. formatters.js importiert dasselbe config.js, das bereits main.js verwendet.](module-dynamic-import.svg)

Bei der Erweiterung des Modulgraphen können vorhandene Module in jedem beliebigen Zustand angetroffen werden. Dieser Zustand bleibt erhalten: Module, die gerade geladen werden, werden weiter geladen; geladene Module werden nicht erneut abgerufen; verknüpfte Module werden nicht erneut verknüpft; ausgewertete Module werden nie erneut ausgewertet (auch dann nicht, wenn die vorherige Auswertung einen Fehler ausgelöst hat). Im obigen Beispiel wurde `config.js` bereits ausgewertet, sodass nur noch `logger.js` und `formatters.js` ausgeführt werden müssen. Auch das dynamisch importierte Modul selbst kann bereits im Modulgraphen vorhanden sein und wiederverwendet werden.

Dynamische Importe sind asynchron, weil beim Laden möglicherweise neue Module abgerufen werden müssen und die Auswertung gegebenenfalls auf `await` auf oberster Ebene warten muss. Das `import()`-Promise wird erfüllt, wenn die Auswertung des angeforderten Moduls erfolgreich abgeschlossen ist.

Die neue Traversierung kann auch das Modul erreichen, das `import()` aufgerufen hat (beispielsweise `main.js`). Da dynamische Importe keine Abhängigkeitskanten bilden (sie sind lediglich Einstiegspunkte), entsteht dadurch kein Zyklus. Verwendet das aufrufende Modul jedoch `await` auf oberster Ebene, um auf diesen Import zu warten, kann keines der beiden abgeschlossen werden, wie das [Deadlock-Beispiel](#deadlocks) zeigt.

## Modul-Caching

_Modul-Caching_ bedeutet, Identität und Zustand eines Moduls wiederzuverwenden. Wiederholte erfolgreiche Anfragen desselben Importierers mit demselben Modulbezeichner und denselben Importattributen müssen sich auf dasselbe Modul beziehen. Auch unterschiedliche Anfragen können sich auf dasselbe Modul beziehen, beispielsweise wenn zwei Module dieselbe Abhängigkeit importieren. Die Host-Umgebung bestimmt, wie Anfragen Modulidentitäten zugeordnet werden. Browserspezifische Regeln finden Sie unter [Modul-Caching im Web](/de/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web#module_caching).

Das bedeutet, dass Importierer die Bindungen des Moduls gemeinsam nutzen, einschließlich Änderungen nach der Auswertung. Das folgende Modul `counter.js` führt beispielsweise einen Zähler:

```js
export let count = 0;

export function increment() {
  count++;
}
```

Ein anderes Modul kann sowohl über statische als auch über dynamische Importe auf denselben Zähler zugreifen. Auch das Namespace-Objekt wird gemeinsam genutzt.

```js
import * as counter from "./counter.js";

counter.increment();

const sameCounter = await import("./counter.js");
console.log(sameCounter === counter); // true
console.log(sameCounter.count); // 1

sameCounter.increment();
console.log(counter.count); // 2
```

JavaScript bietet keine Standard-API zum Leeren des Modul-Caches. Benötigen aufrufende Stellen voneinander unabhängigen Zustand, kann das Modul eine Funktion exportieren, die diesen Zustand erzeugt:

```js
export function createCounter() {
  let count = 0;
  return {
    increment() {
      return ++count;
    },
  };
}
```

Alternativ können Sie Ihrem URL-Modulbezeichner eine beliebige Query oder ein Fragment hinzufügen (siehe [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import#module_namespace_object)).

## Importphasen steuern

Gewöhnliche `import`-Deklarationen lösen den vollständigen [Lade-, Verknüpfungs- und Auswertungsvorgang](#vom_modulquelltext_zur_ausführung) aus. Mit _Importphasen-Modifikatoren_ kann der Importierer diesen Vorgang in einer bestimmten Phase anhalten. Die späteren Phasen können dann erst bei tatsächlichem Bedarf während der Ausführung ausgelöst werden.

Mit [`import source`](/de/docs/Web/JavaScript/Reference/Statements/import/source) wird der Vorgang während des _Ladens_ angehalten: Das angeforderte Modul selbst wird abgerufen und geparst, seine Abhängigkeiten werden jedoch nicht angefragt. Der importierte Wert ist ein [_Modulquellobjekt_](/de/docs/Web/JavaScript/Reference/Global_Objects/AbstractModuleSource), das über andere Mechanismen verknüpft und ausgewertet werden kann. Das folgende Beispiel verwendet JavaScript-Quellimporte:

> [!NOTE]
> JavaScript-Quellimporte und die Übergabe eines Modulquellobjekts an `import()` sind noch vorgeschlagene Funktionen, die im [Vorschlag zu ECMAScript Module Phase Imports](https://github.com/tc39/proposal-esm-phase-imports) definiert sind.

```js
// -- main.js --
import source formattersSource from "./formatters.js";
import config from "./config.js";

process.stdin.on("data", async (data) => {
  if (data.toString().trim() !== "Hi") return;
  const { greet } = await import(formattersSource);
  greet("Josh", config.locale);
});
```

Nachdem `main.js` ausgewertet wurde, ist `formatters.js` geparst. Seine Abhängigkeiten wurden durch den Quellimport jedoch nicht durchlaufen. `logger.js` wurde nicht angefragt. `config.js` wurde ausgewertet, weil `main.js` es auf gewöhnliche Weise importiert:

![main.js und config.js wurden ausgewertet. Der Quellimport erreicht formatters.js, das geparst, aber weder verknüpft noch ausgewertet ist. Seine Abhängigkeiten wurden nicht durchlaufen: logger.js wurde nicht geladen, während config.js bereits über main.js verfügbar ist.](module-source-phase.svg)

Empfängt der Listener `Hi`, übergibt er das Modulquellobjekt an `import()`. Dadurch beginnt das Laden der Abhängigkeiten von `formatters.js`: `config.js` wird wiederverwendet, `logger.js` wird geladen. Anschließend werden die verbleibenden Module verknüpft und ausgewertet. Nach erfolgreicher Auswertung wird das Promise mit dem Namespace erfüllt. Wiederholte Eingaben von `Hi` verwenden dieselbe Modulinstanz, ohne eine erneute Auswertung auszulösen.

Mit [`import defer`](/de/docs/Web/JavaScript/Reference/Statements/import/defer) wird der Vorgang vor der _Auswertung_ angehalten (eine gegebenenfalls erforderliche asynchrone Auswertung erfolgt jedoch weiterhin frühzeitig). Der importierte Wert ist ein [_verzögertes Modul-Namespace-Objekt_](/de/docs/Web/JavaScript/Reference/Statements/import/defer#deferred_module_namespace_object). Beispiel:

```js
// -- main.js --
import defer * as formatters from "./formatters.js";
import config from "./config.js";

process.stdin.on("data", (data) => {
  if (data.toString().trim() !== "Hi") return;
  formatters.greet("Josh", config.locale);
});
```

Unter der Annahme der ursprünglichen synchronen Module und ohne weitere Importe kann die Auswertung von `main.js` abgeschlossen werden, während `formatters.js` und `logger.js` noch verknüpft, aber unausgewertet sind. `config.js` wird ausgewertet, weil `main.js` es auch auf gewöhnliche Weise importiert:

![main.js und config.js wurden ausgewertet. formatters.js und logger.js sind verknüpft, aber unausgewertet. Der verzögerte Zweig stoppt vor der Auswertung, während seine gemeinsame Abhängigkeit config.js bereits durch den gewöhnlichen Import aus main.js ausgewertet wurde.](module-defer-phase.svg)

Empfängt der Listener `Hi`, löst das Lesen von `formatters.greet` die synchrone Auswertung von `logger.js` und anschließend `formatters.js` aus. Das bereits ausgewertete `config.js` wird wiederverwendet. Löst die Auswertung einen Fehler aus, wird dieser beim Eigenschaftszugriff ausgelöst. Lade- und Verknüpfungsfehler wurden dagegen bereits geprüft, bevor `main.js` ausgeführt wird.

Verzögerte Importe können auch verschachtelt sein und bei jedem `defer` eine neue Grenze erzeugen, an der die Auswertung pausiert. Im folgenden Beispiel verzögert `a.js` den Import von `b.js`, `b.js` den von `c.js` und `c.js` wiederum den von `d.js`. Die anderen Importe sind gewöhnliche Importe. Alle Module sind synchron. Jeder Timer liest eine Eigenschaft eines verzögerten Namespace und löst dadurch die nächste Auswertungsphase aus. Jeder Timer hat eine Verzögerung von einer Sekunde ab dem Zeitpunkt seiner Planung. Die Phasen treten daher ungefähr 1, 2 und 3 Sekunden nach dem Start ein.

Beim Start werden alle sieben Module geladen und verknüpft, aber nur `a.js` wird ausgewertet. Es plant einen Timer, ohne auf Eigenschaften von `b` zuzugreifen:

![Nach dem Start ist a.js ausgewertet. b.js, c.js, d.js, e.js, f.js und g.js sind verknüpft, aber unausgewertet.](module-defer-nested-1.svg)

Wenn der erste Timer ausgeführt wird, wertet das Lesen von `b.x` zunächst `e.js` und `f.js` und dann `b.js` aus. Bei der Auswertung von `b.js` wird ein weiterer Timer geplant. Sein verzögerter Import von `c.js` wertet dieses Modul nicht aus, sodass `c.js`, `d.js` und `g.js` verknüpft bleiben:

![Nach dem ersten Timer sind a.js, e.js, f.js und b.js ausgewertet. c.js, d.js und g.js bleiben verknüpft.](module-defer-nested-2.svg)

Wenn der zweite Timer ausgeführt wird, wertet das Lesen von `c.x` zunächst `g.js` und dann `c.js` aus. Bei der Auswertung von `c.js` wird der dritte Timer geplant, ohne bereits auf Eigenschaften von `d` zuzugreifen:

![Nach dem zweiten Timer wurden auch g.js und c.js ausgewertet. Nur d.js bleibt verknüpft, aber unausgewertet.](module-defer-nested-3.svg)

Wenn der dritte Timer ausgeführt wird, wertet das Lesen von `d.x` `d.js` aus. Die bereits ausgewerteten Module `e.js` und `g.js` werden wiederverwendet. Nun wurden alle Module ausgewertet:

![Nach dem dritten Timer sind alle sieben Module ausgewertet. d.js verwendet e.js und g.js wieder.](module-defer-nested-4.svg)

Wie unter [Weitreichende Auswirkungen von `await` auf oberster Ebene](#weitreichende_auswirkungen_von_`await`_auf_oberster_ebene) erläutert, müssen Module mit `await` auf oberster Ebene und ihre Abhängigkeiten frühzeitig, unmittelbar nach der anfänglichen Verknüpfung, ausgeführt werden. Nur die übrige synchrone Ausführung kann verzögert bleiben.

Beachten Sie bei beiden Arten von Phasenmodifikatoren, dass der Modifikator auf den _Import_ wirkt, nicht auf das _Zielmodul_. Ein anderer gewöhnlicher Import kann daher bewirken, dass dasselbe Modul früher ausgewertet wird. Für verzögerte und frühzeitige Importe desselben Moduls werden keine getrennten Cache-Einträge angelegt. Weitere Informationen finden Sie in der Beschreibung des Cache-Verhaltens von [`import defer`](/de/docs/Web/JavaScript/Reference/Statements/import/defer#caching_semantics) und [`import source`](/de/docs/Web/JavaScript/Reference/Statements/import/source#caching_semantics).

So wie `import()` die dynamische Form von `import` ist, haben auch die Deklarationen `import source` und `import defer` dynamische Formen: [`import.source()`](/de/docs/Web/JavaScript/Reference/Operators/import/source) und [`import.defer()`](/de/docs/Web/JavaScript/Reference/Operators/import/defer). Sie starten ihre Anfragen, wenn die jeweiligen Ausdrücke ausgewertet werden.

## Siehe auch

- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules)
- [Module im Web verwenden](/de/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web)
- [Module auf verschiedenen Plattformen](/de/docs/Web/JavaScript/Guide/Modules/Modules_across_platforms)
