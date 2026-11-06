---
title: JavaScript-Module
slug: Web/JavaScript/Guide/Modules
l10n:
  sourceCommit: 696a0436bb4dd20eb4d30ac3f1d4fc5140d1eee9
---

{{Previous("Web/JavaScript/Guide/Internationalization")}}

Dieser Leitfaden vermittelt Ihnen alles, was Sie für den Einstieg in die Syntax von JavaScript-Modulen benötigen.

## Grundidee von Modulen

Bevor wir uns die Syntax innerhalb von Modulen ansehen, betrachten wir zunächst, was Module sind, wie sie sich von herkömmlichen Skripten unterscheiden und warum Sie sie benötigen könnten.

### Hintergrund zu Modulen

JavaScript-Programme waren anfangs recht klein. In der Anfangszeit wurde JavaScript hauptsächlich für einzelne Skriptaufgaben verwendet, um Webseiten bei Bedarf etwas Interaktivität zu verleihen. Große Skripte waren daher im Allgemeinen nicht nötig. Einige Jahre später werden nun vollständige Anwendungen mit viel JavaScript in Browsern ausgeführt. Außerdem wird JavaScript in anderen Kontexten eingesetzt, beispielsweise mit {{Glossary("Node.js", "Node.js")}}.

Komplexe Projekte erfordern einen Mechanismus, um JavaScript-Programme in separate Module aufzuteilen: Codeeinheiten, die bei Bedarf importiert werden können. Node.js bietet diese Möglichkeit schon lange. Daneben gibt es zahlreiche JavaScript-Bibliotheken und -Werkzeuge, die die Verwendung von Modulen ermöglichen, beispielsweise [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md)-Loader wie [RequireJS](https://requirejs.org/), Bundler wie [Webpack](https://webpack.js.org/) und Compiler wie [Babel](https://babeljs.io/).

Alle modernen Browser unterstützen Modulfunktionen nativ, ohne dass eine Transpilierung erforderlich ist. Das ist ein Vorteil: Browser können das Laden von Modulen automatisch übernehmen, ohne dass dafür eine Bibliothek benötigt wird. Bundler wie Webpack werden dadurch allerdings nicht überflüssig. Sie können Code weiterhin in angemessen große Teile aufteilen und weitere Optimierungen wie Minifizierung, die Entfernung ungenutzten Codes und {{Glossary("tree_shaking", "Tree Shaking")}} durchführen.

### Was ist ein Modul?

JavaScript-Code kann auf zwei Arten ausgewertet werden: als _Skript_ (auch „klassisches Skript“ oder „herkömmliches Skript“ genannt) oder als _Modul_. Es gibt zwei wesentliche Unterschiede:

1. Beim Parsen gilt für Module eine etwas andere Syntax. Insbesondere befinden sie sich automatisch im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode), und {{jsxref("Statements/import", "import")}}- und {{jsxref("Statements/export", "export")}}-Anweisungen können nur in Modulen verwendet werden.
2. Zur Laufzeit werden Module in ihrem eigenen Gültigkeitsbereich ausgeführt, nicht im globalen Gültigkeitsbereich. Das bedeutet, dass Variablen, Funktionen, Klassen usw., die in einem Modul deklariert werden, außerhalb des Moduls nicht sichtbar sind. Eine Ausnahme gilt, wenn sie ausdrücklich exportiert werden, damit andere Module sie importieren können, oder wenn sie durch Zuweisung an das globale Objekt – beispielsweise `window` in einem Browser – global verfügbar gemacht werden. Nicht abgefangene Fehler aus Modulen werden weiterhin in den DevTools angezeigt; auf Variablen im Gültigkeitsbereich eines Moduls können Sie über die JavaScript-Konsole jedoch nicht zugreifen.

Es gibt weitere Unterschiede, die jedoch speziell für Module im Web gelten. Sie finden sie unter [Module im Web verwenden](/de/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web).

So werden Skripte herkömmlicherweise in Webseiten eingebunden:

```html
<head>
  <script src="external-script.js"></script>
</head>
<body>
  <!-- page content -->
  <script src="external-script-2.js"></script>
  <script>
    // inline script
  </script>
</body>
```

```js
// -- external-script.js --
function $() {
  // …
}
// …
```

```js
// -- external-script-2.js --
$.ajax(/* … */);
// …
```

![Diagramm, das zeigt, wie Skripte in Webseiten eingebunden werden](script-loading.svg)

Besonders wichtig ist, dass alle klassischen Skripte einer Webseite im selben Gültigkeitsbereich ausgeführt werden: dem globalen Gültigkeitsbereich. Auf alle Variablen, die nicht innerhalb anderer Funktionen oder Blöcke liegen, kann später an beliebiger Stelle auf der Seite zugegriffen werden. Das kann praktisch, aber auch gefährlich sein. Die Abbildung zeigt, wie das zweite und dritte Skript auf die im ersten Skript deklarierte Variable `$` zugreifen können, weil sich alle im globalen Gültigkeitsbereich befinden.

Dieses Muster ist sehr praktisch, wird bei größeren Projekten aber unübersichtlich:

- Die Überfrachtung des Gültigkeitsbereichs und Namenskonflikte werden zu einem erheblichen Problem. Beliebte Bibliotheken wie [jQuery](https://jquery.com/) und [Underscore](https://underscorejs.org/) fassen alles unter speziellen Bezeichnern wie `$` und `_` zusammen, um das Risiko zu verringern. Viele Bibliotheken von Drittanbietern konkurrieren jedoch um gängige Namen wie `map`, `merge` und `debounce`.
- Alle Abhängigkeiten müssen von den Entwickelnden ausdrücklich angegeben und verwaltet werden. Wenn Bibliothek A Bibliothek B importiert, müssen die Entwickelnden der Anwendung ein `<script>`-Element hinzufügen, das Bibliothek B lädt, und sicherstellen, dass dies vor dem Laden von A geschieht.
- Bibliotheken lassen sich nur schwer bei Bedarf laden: Alles wird geladen und initialisiert, sobald die Seite geladen wird.

Sehen wir uns nun an, wie derselbe Code mit Modulen aussehen könnte. Das erste Skript, `external-script.js`, möchte die Variable `$` mit den übrigen Skripten teilen. Oben geschieht dies, indem die Variable im globalen Gültigkeitsbereich abgelegt wird. In der Modulversion können wir die Variable exportieren und in den anderen Skripten importieren.

```html
<head>
  <script type="module" src="external-script-2.js"></script>
  <script type="module">
    import { $ } from "./external-script.js";
    // inline script
  </script>
</head>
<body>
  <!-- page content -->
</body>
```

```js
// -- external-script.js --
function $() {
  // …
}
// …
export { $ };
```

```js
// -- external-script-2.js --
import { $ } from "./external-script.js";

$.ajax(/* … */);
// …
```

![Diagramm, das zeigt, wie Module in Webseiten eingebunden werden](module-loading.svg)

Während die Skriptversion eine _lineare_ Reihenfolge von Abhängigkeiten bildet, bei der jeder Codeteil auf den gesamten vorhergehenden Code zugreifen kann, entsteht in der Modulversion ein [_Abhängigkeitsgraph_](/de/docs/Web/JavaScript/Guide/Modules/Module_graph). Darin gibt jedes Modul ausdrücklich an, von welchen Modulen es abhängt und welche Variablen es aus diesen Abhängigkeiten benötigt.

Wie bereits erwähnt, werden Module anders geparst als Skripte. Die JavaScript-Engine muss daher wissen, ob sie die Parsing-Regeln für Module oder für Skripte anwenden soll. Host-Umgebungen geben dies üblicherweise über einen [_Signalisierungsmechanismus außerhalb des Codes_](https://github.com/tc39/how-we-work/blob/main/terminology.md#out-of-band) an. Dabei wird das Verhalten des Codes durch Informationen festgelegt, die nicht im Code selbst stehen. (Das unterscheidet sich vom [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode), bei dem der Interpretationsmodus innerhalb des Skripts mit `"use strict"` deklariert wird.) Es gibt verschiedene Möglichkeiten, solche Informationen bereitzustellen:

- Wenn das Modul über ein `<script>`-Tag eingebunden wird, können Sie das Attribut `type="module"` verwenden. Siehe auch [Module im Web verwenden](/de/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web).
- Wenn Sie Node.js verwenden, können Sie die Dateiendung `.mjs` nutzen oder der nächstgelegenen Datei `package.json` den Eintrag `"type": "module"` hinzufügen. Siehe auch [Module auf verschiedenen Plattformen](/de/docs/Web/JavaScript/Guide/Modules/Modules_across_platforms).
- Wenn das Modul als Worker verwendet werden soll, können Sie beim Aufruf des Konstruktors [`Worker()`](/de/docs/Web/API/Worker/Worker) `type: "module"` übergeben.

> [!NOTE]
> Manche Laufzeitumgebungen, etwa Node.js, erkennen den Modultyp auch ohne ausdrückliche Angabe anhand von Syntax wie `import`/`export`, die außerhalb von Modulen nicht verfügbar ist. Browser bieten diese Möglichkeit nicht.

Module können weiterhin auf globale Variablen zugreifen. Beispielsweise kann ein Modul eine Variable verwenden, die von einem klassischen Skript deklariert wurde:

```html
<script>
  var text = "Hello";
</script>
<script type="module" src="render.js"></script>
```

```js
// -- render.js --
document.body.textContent = text;
```

### Exkurs – .mjs im Vergleich zu .js

In diesem Artikel haben wir für unsere Moduldateien durchgehend die Endung `.js` verwendet. In anderen Quellen sehen Sie möglicherweise stattdessen `.mjs`. Die [Dokumentation von V8 empfiehlt dies](https://v8.dev/features/modules#mjs) beispielsweise aus folgenden Gründen:

- Sie können unmittelbar an der Datei erkennen, ob es sich um ein Modul oder ein Skript handelt, ohne Kontextinformationen wie das HTML-Tag oder die `package.json` prüfen zu müssen.
- Außerhalb von Browsern wird die Endung nahezu überall als direkte Kennzeichnung des Modulmodus akzeptiert, unter anderem von Laufzeitumgebungen wie [Node.js](https://nodejs.org/api/esm.html#esm_enabling) und Build-Werkzeugen wie [Babel](https://babeljs.io/docs/options#sourcetype).

Für Browser ist der Unterschied rein äußerlich. Die Dateiendung spielt im Web keine Rolle: JavaScript wird anhand des Headers [`Content-Type`](/de/docs/Web/HTTP/Reference/Headers/Content-Type) erkannt, Module anhand des Attributs `type="module"` im `<script>`-Tag. Damit Module in einem Browser ordnungsgemäß funktionieren, müssen Sie sicherstellen, dass Ihr Server sie mit einem `Content-Type`-Header ausliefert, der einen JavaScript-MIME-Typ wie `text/javascript` enthält. Andernfalls erhalten Sie bei der strengen MIME-Typ-Prüfung einen Fehler wie „The server responded with a non-JavaScript MIME type“, und der Browser führt Ihr JavaScript nicht aus.

Wir haben uns für `.js` entschieden. Der wichtigste Vorteil ist, dass die Endung `.js` wesentlich breiter unterstützt wird als `.mjs`. Obwohl die Unterstützung für `.mjs` zunimmt, können Sie immer noch auf Software stoßen, die diese Endung nicht versteht.

- Die meisten Server setzen für `.js`-Dateien automatisch den richtigen Typ, für `.mjs`-Dateien jedoch nicht immer. Zu den Servern, die `.mjs`-Dateien bereits korrekt ausliefern, gehören [GitHub Pages](https://pages.github.com/) und [`http-server`](https://github.com/http-party/http-server#readme) für Node.js. Das ist kein Problem, wenn Sie bereits eine solche Umgebung verwenden oder Ihren Server so konfigurieren können, dass er für `.mjs`-Dateien den richtigen `Content-Type` setzt. Es kann jedoch zu Verwirrung führen, wenn Sie den Server, von dem die Dateien ausgeliefert werden, nicht kontrollieren oder Dateien – wie wir hier – zur öffentlichen Verwendung bereitstellen.
- Die Dateiendung wird von vielen Werkzeugen außer dem HTTP-Server verwendet, etwa von Ihrem Editor, dem Betriebssystem, Werkzeugen zur statischen Analyse und Formatierungsprogrammen. `.mjs` wird möglicherweise nicht von allen Werkzeugen ausreichend unterstützt. Beispielsweise erkennen manche Betriebssysteme die Endung unter Umständen nicht oder versuchen, sie zu ersetzen, indem sie beim Öffnen einer Datei implizit `.js` anhängen.

Wenn Ihnen die klare Unterscheidung zwischen `.mjs` für Module und `.js` für „normale“ JavaScript-Dateien wichtig ist, Sie aber die oben beschriebenen Probleme vermeiden möchten, können Sie während der Entwicklung `.mjs` verwenden und die Dateien im Build-Schritt in `.js` umwandeln.

## Mit Beispielen arbeiten

Um die Verwendung von Modulen zu demonstrieren, haben wir eine [einfache Sammlung von Beispielen](https://github.com/mdn/js-examples/tree/main/module-examples) erstellt, die Sie auf GitHub finden. Darin erzeugen einige Module ein [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas)-Element auf einer Webseite und zeichnen anschließend verschiedene Formen auf die Zeichenfläche. Außerdem geben sie Informationen über diese Formen aus.

Die Beispiele sind recht einfach und wurden bewusst so gehalten, damit die Funktionsweise von Modulen deutlich wird.

Unser erstes Beispiel (siehe [basic-modules](https://github.com/mdn/js-examples/tree/main/module-examples/basic-modules)) hat folgende Dateistruktur:

```plain
index.html
main.js
modules/
    canvas.js
    square.js
```

> [!NOTE]
> Alle Beispiele in diesem Leitfaden haben im Wesentlichen dieselbe Struktur.

Die Datei `index.html` deklariert lediglich das DOM und [bindet](/de/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web#applying_modules_to_your_html) das Modul `main.js` ein. Der gesamte anschließend gezeigte Code betrifft ausschließlich die `.js`-Dateien.

Die beiden Module im Verzeichnis `modules` werden im Folgenden beschrieben:

- `canvas.js` – enthält Funktionen zum Einrichten der Zeichenfläche:
  - `create()` – erstellt eine Zeichenfläche mit einer angegebenen `width` und `height` innerhalb eines umschließenden [`<div>`](/de/docs/Web/HTML/Reference/Elements/div) mit einer angegebenen ID. Dieses wird wiederum an ein angegebenes Elternelement angehängt. Die Funktion gibt ein Objekt zurück, das den 2D-Kontext der Zeichenfläche und die ID des umschließenden Elements enthält.
  - `createReportList()` – erstellt eine ungeordnete Liste, die an ein angegebenes umschließendes Element angehängt wird und zur Ausgabe von Berichtsdaten verwendet werden kann. Die Funktion gibt die ID der Liste zurück.
- `square.js` – enthält:
  - `name` – eine Konstante mit der Zeichenfolge 'square'.
  - `draw()` – zeichnet ein Quadrat mit angegebener Größe, Position und Farbe auf eine angegebene Zeichenfläche. Die Funktion gibt ein Objekt zurück, das Größe, Position und Farbe des Quadrats enthält.
  - `reportArea()` – schreibt anhand der angegebenen Seitenlänge die Fläche eines Quadrats in eine bestimmte Berichtsliste.
  - `reportPerimeter()` – schreibt anhand der angegebenen Seitenlänge den Umfang eines Quadrats in eine bestimmte Berichtsliste.

Nachdem Sie die Beispiele heruntergeladen haben, [starten Sie einen lokalen Server](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) und öffnen Sie die Datei `index.html`.

## Benannte Exporte

Anders als bei Skripten, in denen alle auf oberster Ebene deklarierten Variablen implizit für nachfolgende Skripte zugänglich sind, müssen Sie Variablen ausdrücklich mit {{jsxref("Statements/export", "export")}} exportieren, damit andere Module darauf zugreifen können. Dieses Schlüsselwort können Sie jeder [Deklaration](/de/docs/Web/JavaScript/Reference/Statements#what_are_statements_declarations_and_expressions) voranstellen, unter anderem `var`, `let`, `const`, `function` und `class`. Die Deklarationen müssen auf oberster Ebene stehen: Innerhalb einer Funktion können Sie `export` beispielsweise nicht verwenden.

```js
export const name = "square";

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return { length, x, y, color };
}
```

Alternativ können Sie bereits an anderer Stelle im Modul deklarierte Elemente exportieren. Verwenden Sie dazu `export`, gefolgt von einer durch Kommas getrennten Liste von Variablennamen in geschweiften Klammern:

```js
export { name, draw, reportArea, reportPerimeter };
```

## Benannte Importe

Nachdem Sie Variablen aus Ihrem Modul exportiert haben, müssen Sie sie in ein anderes Modul importieren, um sie dort zu verwenden. Dazu verwenden Sie die Anweisung {{jsxref("Statements/import", "import")}}, gefolgt von einer durch Kommas getrennten Liste der gewünschten Namen in geschweiften Klammern, dem Schlüsselwort `from` und dem _Modulbezeichner_.

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
```

Solche Zeilen sehen Sie in [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/basic-modules/main.js).

> [!NOTE]
> Der _Modulbezeichner_ ist eine Zeichenfolge, die auf das Modul verweist, das diese Variablen exportiert. In einem Browser ist dies üblicherweise eine URL relativ zur URL des aktuellen Moduls, ähnlich dem Attribut [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) von {{HTMLElement("a")}}-Elementen. Wenn beispielsweise unser obiges Modul unter `https://example.com/basic-modules/main.js` und das Modul `square.js` unter `https://example.com/basic-modules/modules/square.js` bereitgestellt wird, sind alle folgenden Angaben gleichwertig:
>
> ```plain
> "https://example.com/basic-modules/modules/square.js"
> "/basic-modules/modules/square.js"
> "./modules/square.js"
> ```
>
> Verschiedene Laufzeitumgebungen (Browser, Node, Bundler usw.) haben unterschiedliche Regeln für das Format des Modulbezeichners. Mehr über diese Unterschiede erfahren Sie unter [Module im Web verwenden](/de/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web#module_specifiers_on_the_web) und [Module auf verschiedenen Plattformen](/de/docs/Web/JavaScript/Guide/Modules/Modules_across_platforms).

Nachdem Sie die Funktionen in Ihr Skript importiert haben, können Sie sie so verwenden, als wären sie in derselben Datei definiert. Der folgende Code steht in `main.js` unterhalb der Importzeilen:

```js
const myCanvas = create("myCanvas", document.body, 480, 320);
const reportList = createReportList(myCanvas.id);

const square = draw(myCanvas.ctx, 50, 50, 100, "blue");
reportArea(square.length, reportList);
reportPerimeter(square.length, reportList);
```

> [!NOTE]
> Importierte Werte sind schreibgeschützte Ansichten der exportierten Elemente. Ähnlich wie bei `const`-Variablen können Sie der importierten Variablen keinen neuen Wert zuweisen, Eigenschaften eines Objektwerts aber weiterhin ändern. Nur das exportierende Modul kann der Variablen einen neuen Wert zuweisen. Ein Beispiel finden Sie in der [Referenz zu `import`](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter).

## Standardexporte und -importe

In den obigen Beispielen werden Variablen anhand ihres Namens exportiert und importiert. Der Name jeder Variablen muss beim Export und Import übereinstimmen. Sie können funktionsfähigen Modulcode ausschließlich mit benannten Importen und Exporten schreiben. Wenn Sie jedoch aus [Nicht-ESM-Modulen](/de/docs/Web/JavaScript/Guide/Modules/Modules_across_platforms) importieren möchten, etwa aus CommonJS-Modulen oder Nicht-JavaScript-Dateien, stehen in diesen Systemen keine benannten Exporte zur Verfügung. Dort entspricht jedes Modul genau einem JavaScript-Wert. Um solche Module darzustellen, bietet JavaScript einen _Standardexport_. Dieser ist auch in anderen Fällen nützlich, etwa bei Modulen, die auf einem einzigen zentralen Wert – einer Klasse oder Funktion – beruhen. Durch den Standardexport kann jedes importierende Modul selbst einen lokalen Namen wählen, ohne den Namen im exportierenden Modul kennen zu müssen.

Anders als benannte Exporte haben Standardexporte keinen zugeordneten Namen. Jedes Modul kann höchstens einen Standardexport haben. Um einen Standardexport zu erstellen, exportieren Sie statt einer _Deklaration_ wie `const` oder `function` einen _Ausdruck_, dem Sie `export default` voranstellen. Beispielsweise funktionieren alle folgenden Varianten:

```js
// An object literal is an expression
export default {
  some: "object",
};

// An addition is an expression
export default 1 + 1;

// An identifier is also an expression
export default randomSquare;
```

Die letzte Variante sehen Sie in `square.js` aus unserem Beispiel basic-modules. Sie exportiert eine Funktion namens `randomSquare()`, die ein Quadrat mit zufälliger Farbe, Größe und Position erzeugt. Beachten Sie, dass keine geschweiften Klammern verwendet werden.

Als Sonderfall werden Funktionen und Klassen als _Deklarationen_ und nicht als Ausdrücke exportiert; diese Deklarationen können anonym sein. Sie können daher eine Funktion auch direkt bei ihrer Deklaration als Standardexport exportieren:

```js
export default function randomSquare(ctx) {
  // …
}
```

```js
// -- main.js --
import randomSquare from "./modules/square.js";
```

Beachten Sie erneut, dass keine geschweiften Klammern verwendet werden. Das liegt daran, dass pro Modul nur ein Standardexport zulässig ist und wir wissen, dass es sich dabei um `randomSquare` handelt. Sie können diesen Import beliebig benennen; der Name muss nicht mit dem Funktionsnamen im exportierenden Modul übereinstimmen.

Benannte Exporte und ein Standardexport können im selben Modul nebeneinander bestehen.

## Namenskonflikte vermeiden

Bisher scheinen unsere Module zum Zeichnen von Formen auf der Zeichenfläche gut zu funktionieren. Was passiert aber, wenn wir ein Modul hinzufügen, das eine andere Form zeichnet, etwa einen Kreis oder ein Dreieck? Wahrscheinlich hätten auch diese Formen zugehörige Funktionen wie `draw()` und `reportArea()`. Würden wir verschiedene Funktionen mit demselben Namen in dieselbe Moduldatei auf oberster Ebene importieren, käme es zu Konflikten und Fehlern.

Sehen wir uns ein konkretes Beispiel an. Im Verzeichnis [renaming](https://github.com/mdn/js-examples/tree/main/module-examples/renaming) finden Sie dasselbe Modulsystem wie im vorherigen Beispiel. Zusätzlich haben wir jedoch die Module `circle.js` und `triangle.js` hinzugefügt, um Kreise und Dreiecke zu zeichnen und Informationen über sie auszugeben.

In jedem dieser Module werden Elemente mit denselben Namen exportiert. Daher steht am Ende jedes Moduls dieselbe `export`-Anweisung:

```js
export { name, draw, reportArea, reportPerimeter };
```

Wenn wir beim Import in `main.js` Folgendes versuchen würden:

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/circle.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/triangle.js";
```

würde der Browser einen Fehler wie „SyntaxError: redeclaration of import name“ (Firefox) ausgeben.

Glücklicherweise gibt es mehrere Möglichkeiten, dies zu umgehen. Diese sehen wir uns in den folgenden Abschnitten an.

### Importe und Exporte umbenennen

Innerhalb der geschweiften Klammern Ihrer `import`- und `export`-Anweisungen können Sie das Schlüsselwort `as` zusammen mit einem neuen Namen verwenden. So ändern Sie den Namen, unter dem Sie ein Element im übergeordneten Modul verwenden.

In unserem Beispiel zum Umbenennen können wir die Importe eindeutig benennen:

```js
import {
  name as squareName,
  draw as drawSquare,
  reportArea as reportSquareArea,
  reportPerimeter as reportSquarePerimeter,
} from "./modules/square.js";

import {
  name as circleName,
  draw as drawCircle,
  reportArea as reportCircleArea,
  reportPerimeter as reportCirclePerimeter,
} from "./modules/circle.js";

import {
  name as triangleName,
  draw as drawTriangle,
  reportArea as reportTriangleArea,
  reportPerimeter as reportTrianglePerimeter,
} from "./modules/triangle.js";
```

Sie könnten das Problem stattdessen auch in den Moduldateien lösen, beispielsweise so:

```js
// -- square.js --
export {
  name as squareName,
  draw as drawSquare,
  reportArea as reportSquareArea,
  reportPerimeter as reportSquarePerimeter,
};
```

```js
// -- main.js --
import {
  squareName,
  drawSquare,
  reportSquareArea,
  reportSquarePerimeter,
} from "./modules/square.js";
```

Das würde genauso funktionieren. Welchen Stil Sie verwenden, bleibt Ihnen überlassen. Es ist jedoch oft sinnvoller, den Modulcode unverändert zu lassen und die Importe anzupassen. Das gilt insbesondere, wenn Sie aus Modulen von Drittanbietern importieren, auf die Sie keinen Einfluss haben.

Übrigens können Sie dieselbe Syntax auch für Standardexporte verwenden, indem Sie auf den Exportnamen `default` verweisen. Dabei handelt es sich um ein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words), nicht um einen gültigen Bezeichnernamen. Der Unterschied zu `export default randomSquare;` besteht darin, dass hier die bestehende _Live-Bindung_ exportiert wird, statt den Wert des Ausdrucks zu übernehmen. Wenn Sie `randomSquare` im exportierenden Modul einen neuen Wert zuweisen, sieht das importierende Modul bei dieser Variante den neuen Wert. Auch benannte Standarddeklarationen von Funktionen und Klassen wie `export default function randomSquare() {}` exportieren Live-Bindungen.

```js
import { default as randomSquare } from "./modules/square.js";

export { randomSquare as default };
```

### Ein Modul-Namespace-Objekt erstellen

Die obige Methode funktioniert, ist aber etwas umständlich und ausführlich. Eine bessere Lösung besteht darin, die Elemente jedes Moduls in ein _Modul-Namespace-Objekt_ zu importieren. Dazu dient die folgende Syntax:

```js
import * as Module from "./modules/module.js";
```

Sie übernimmt alle in `module.js` verfügbaren Exporte und stellt sie als Eigenschaften eines Objekts `Module` bereit. Damit erhalten sie praktisch ihren eigenen Namespace. Zum Beispiel:

```js
Module.function1();
Module.function2();
```

Sehen wir uns wieder ein konkretes Beispiel an. Im Verzeichnis [module-objects](https://github.com/mdn/js-examples/tree/main/module-examples/module-objects) finden Sie dasselbe Beispiel, diesmal jedoch so umgeschrieben, dass es diese Syntax nutzt. Die Exporte in den Modulen haben alle die folgende einfache Form:

```js
export { name, draw, reportArea, reportPerimeter };
```

Die Importe sehen dagegen so aus:

```js
import * as Canvas from "./modules/canvas.js";

import * as Square from "./modules/square.js";
import * as Circle from "./modules/circle.js";
import * as Triangle from "./modules/triangle.js";
```

Sie können nun jeweils über den angegebenen Objektnamen auf die importierten Elemente des Moduls zugreifen, beispielsweise so:

```js
const square = Square.draw(myCanvas.ctx, 50, 50, 100, "blue");
Square.reportArea(square.length, reportList);
Square.reportPerimeter(square.length, reportList);
```

Damit können Sie den Code wie zuvor schreiben, sofern Sie an den erforderlichen Stellen die Objektnamen ergänzen. Die Importe sind dabei deutlich übersichtlicher.

### Module und Klassen

Wie bereits angedeutet, können Sie auch Klassen exportieren und importieren. Das ist eine weitere Möglichkeit, Konflikte in Ihrem Code zu vermeiden, und besonders nützlich, wenn Ihr Modulcode bereits objektorientiert geschrieben ist.

Ein Beispiel für unser mit ES-Klassen neu geschriebenes Modul zum Zeichnen von Formen finden Sie im Verzeichnis [classes](https://github.com/mdn/js-examples/tree/main/module-examples/classes). Beispielsweise enthält die Datei [`square.js`](https://github.com/mdn/js-examples/blob/main/module-examples/classes/modules/square.js) jetzt ihre gesamte Funktionalität in einer einzigen Klasse:

```js
class Square {
  constructor(ctx, listId, length, x, y, color) {
    // …
  }

  draw() {
    // …
  }

  // …
}
```

Diese exportieren wir anschließend:

```js
export { Square };
```

```js
// -- main.js --
import { Square } from "./modules/square.js";
```

Danach verwenden wir die Klasse, um unser Quadrat zu zeichnen:

```js
const square = new Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, "blue");
square.draw();
square.reportArea();
square.reportPerimeter();
```

## Module zusammenfassen

Wir haben nun mehrere Module, die jeweils ähnliche Aufgaben erfüllen. Wenn jemand mehrere davon verwenden möchte, muss für jedes eine eigene Importdeklaration geschrieben werden:

```js
import { Square } from "./modules/square.js";
import { Circle } from "./modules/circle.js";
import { Triangle } from "./modules/triangle.js";
```

Besser wäre es jedoch, wenn wir alle diese Exporte in einem Modul zusammenfassen könnten. Dann könnten Nutzende unabhängig davon, wie viele Exporte sie benötigen, alle mit einem einzigen `import` beziehen.

```js
import { Square, Circle, Triangle } from "./modules/shapes.js";
```

In unserem Beispiel [module-aggregation](https://github.com/mdn/js-examples/tree/main/module-examples/module-aggregation), das auf dem vorherigen Klassenbeispiel aufbaut, gibt es ein zusätzliches Modul namens `shapes.js`. Es fasst die gesamte Funktionalität aus `circle.js`, `square.js` und `triangle.js` zusammen. Ein solches Modul wird „Barrel-Modul“ genannt, weil es nichts anderes tut, als Exporte anderer Module zu bündeln. Außerdem haben wir die Untermodule in ein Unterverzeichnis namens `shapes` innerhalb des Verzeichnisses `modules` verschoben. Die Modulstruktur sieht in diesem Beispiel so aus:

```plain
modules/
  canvas.js
  shapes.js
  shapes/
    circle.js
    square.js
    triangle.js
```

```js
// -- shapes.js --
import { Circle } from "./shapes/circle.js";
import { Square } from "./shapes/square.js";
import { Triangle } from "./shapes/triangle.js";

export { Circle, Square, Triangle };
```

Diese Anweisungen übernehmen die Exporte aus den einzelnen Untermodulen und machen sie über das Modul `shapes.js` verfügbar. Es ist jedoch nicht nötig, etwas erst zu `import`ieren, nur um es anschließend zu `export`ieren. Mit der Syntax `export ... from` können Sie es in einer Zeile direkt importieren und erneut exportieren.

```js
export { Square } from "./shapes/square.js";
export { Triangle } from "./shapes/triangle.js";
export { Circle } from "./shapes/circle.js";
```

> [!NOTE]
> Die in `shapes.js` referenzierten Exporte werden im Wesentlichen durch die Datei weitergeleitet und existieren dort nicht wirklich. Daher können Sie in derselben Datei keinen sinnvollen Code schreiben, der diese Exporte verwendet.

Alternativ können Sie in `shapes.js` die spezielle Syntax `export * from` verwenden:

```js
export * from "./shapes/square.js";
export * from "./shapes/triangle.js";
export * from "./shapes/circle.js";
```

Dadurch werden _alle_ Exporte des Zielmoduls mit Ausnahme des Standardexports als benannte Exporte des aktuellen Moduls erneut exportiert. Wenn Sie also in `square.js` etwas Weiteres exportieren, müssen Sie `shapes.js` nicht ebenfalls ändern. Verwenden Sie diese Variante nur, wenn `shapes.js` tatsächlich alles aus `square.js` erneut exportieren soll. Andernfalls könnten Sie versehentlich Elemente zugänglich machen.

Für fast alle vorgestellten `import`-Syntaxformen gibt es Entsprechungen mit `export ... from`. Die einzige Ausnahme ist der Standardimport `import x from "mod"`: Ein `export x from "mod"` gibt es nicht. Stattdessen müssen Sie die spezielle Syntax `export { default } from` verwenden.

```js
export { x } from "mod";
export { x as v } from "mod";
export * as ns from "mod";
export { default } from "mod";
```

## Ein Modul wegen seiner Seiteneffekte importieren

Manchmal möchten Sie den Initialisierungscode eines Moduls ausführen, ohne einen seiner Exporte zu importieren, beispielsweise um ein Polyfill einzurichten. Verwenden Sie dazu einen Import, der nur einen Modulbezeichner enthält:

```js
import "./modules/polyfills.js";
```

Weitere Informationen finden Sie in der [Referenz zu `import`](/de/docs/Web/JavaScript/Reference/Statements/import#import_a_module_for_its_side_effects_only).

## Importdeklarationen werden vorgezogen

Importdeklarationen werden {{Glossary("Hoisting", "vorgezogen")}} (Hoisting). In diesem Fall bedeutet das, dass die importierten Werte im Modulcode schon vor der Stelle verfügbar sind, an der sie deklariert werden. Außerdem treten die Seiteneffekte des importierten Moduls auf, bevor die Ausführung des übrigen Modulcodes beginnt.

Beispielsweise würde es in `main.js` weiterhin funktionieren, `Canvas` mitten im Code zu importieren:

```js
// …
const myCanvas = new Canvas("myCanvas", document.body, 480, 320);
myCanvas.create();
import { Canvas } from "./modules/canvas.js";
myCanvas.createReportList();
// …
```

Es gilt jedoch als gute Praxis, alle Importe an den Anfang des Codes zu setzen. Dadurch lassen sich Abhängigkeiten leichter analysieren.

## JSON-Module importieren

Wir haben gesehen, wie sich Werte aus JavaScript-Modulen importieren lassen, deren Daten mit `export`-Anweisungen exportiert werden. Sie können auch Werte aus Modulen importieren, die in anderen Sprachen geschrieben sind, sofern die Laufzeitumgebung sie interpretieren kann. Die Spezifikation definiert nur zwei weitere Ressourcentypen: JSON-Module und [Textmodule](/de/docs/Web/JavaScript/Reference/Statements/import/with#text_modules_type_text). Hier betrachten wir die häufiger verwendeten JSON-Module.

Ein JSON-Modul ist im Wesentlichen eine eigenständige JSON-Datei. Beim Import stellt es einen einzigen Standardexport bereit, der den geparsten JSON-Wert enthält. Sie importieren es folgendermaßen:

```js
import data from "./data.json" with { type: "json" };
```

Beachten Sie das zusätzliche `with { type: "json" }` am Ende. Dies ist ein [Importattribut](/de/docs/Web/JavaScript/Reference/Statements/import/with), das der Laufzeitumgebung vorgibt zu überprüfen, ob die geladene Datei tatsächlich JSON enthält. Im Leitfaden [Module im Web verwenden](/de/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web#loading_non-javascript_resources) gehen wir näher darauf ein, da die Semantik dieser Attribute nicht in der Kernsprache definiert ist. Möglicherweise können Sie JSON-Module auch ohne `with { type: "json" }` importieren. Die einzige Vorgabe lautet: Wenn `with { type: "json" }` angegeben ist, muss das geladene Modul als JSON geparst werden. Es ist gute Praxis, den Typ des importierten Moduls immer anzugeben, damit der Import überall funktioniert.

Textmodule funktionieren ähnlich und liefern Zeichenfolgen.

```js
import text from "./text.txt" with { type: "text" };
```

## Module dynamisch laden

Sie können Module auch erst dann dynamisch laden, wenn sie benötigt werden, statt alle von Anfang an zu laden. Das hat offensichtliche Leistungsvorteile. Sehen wir uns an, wie es funktioniert.

Der Operator [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) kann mit dem Pfad zum Modul als Parameter aufgerufen werden. Er gibt eine {{jsxref("Promise")}} zurück, die mit einem Modul-Namespace-Objekt erfüllt wird (siehe [Ein Modul-Namespace-Objekt erstellen](#ein_modul-namespace-objekt_erstellen)). Über dieses Objekt erhalten Sie Zugriff auf die Exporte des Moduls. Zum Beispiel:

```js
import("./modules/myModule.js").then((module) => {
  // Do something with the module.
});
```

> [!NOTE]
> Dynamische Importe sind im Hauptthread des Browsers sowie in Shared Workers und Dedicated Workers zulässig.
> Wird `import()` jedoch in einem Service Worker oder Worklet aufgerufen, wird die Promise zurückgewiesen.

<!-- https://whatpr.org/html/6395/webappapis.html#hostimportmoduledynamically(referencingscriptormodule,-specifier,-promisecapability) -->

Sehen wir uns ein Beispiel an. Im Verzeichnis [dynamic-module-imports](https://github.com/mdn/js-examples/tree/main/module-examples/dynamic-module-imports) finden Sie ein weiteres Beispiel, das auf unserem Klassenbeispiel aufbaut. Diesmal zeichnen wir beim Laden des Beispiels jedoch nichts auf die Zeichenfläche. Stattdessen gibt es drei Schaltflächen – „Circle“, „Square“ und „Triangle“. Beim Anklicken wird das jeweils benötigte Modul dynamisch geladen und zum Zeichnen der entsprechenden Form verwendet.

In diesem Beispiel haben wir nur die Dateien [`index.html`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/index.html) und [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/main.js) geändert. Die Modulexporte bleiben unverändert.

In `main.js` holen wir uns mit einem Aufruf von [`document.querySelector()`](/de/docs/Web/API/Document/querySelector) eine Referenz auf jede Schaltfläche, beispielsweise so:

```js
const squareBtn = document.querySelector(".square");
```

Anschließend fügen wir jeder Schaltfläche einen Event-Listener hinzu. Beim Anklicken wird das zugehörige Modul dynamisch geladen und zum Zeichnen der Form verwendet:

```js
squareBtn.addEventListener("click", () => {
  import("./modules/square.js").then((Module) => {
    const square = new Module.Square(
      myCanvas.ctx,
      myCanvas.listId,
      50,
      50,
      100,
      "blue",
    );
    square.draw();
    square.reportArea();
    square.reportPerimeter();
  });
});
```

Beachten Sie, dass bei Erfüllung der Promise ein Modul-Namespace-Objekt zurückgegeben wird. Die Klasse ist daher eine Eigenschaft dieses Objekts. Um auf den Konstruktor zuzugreifen, müssen wir ihm nun `Module.` voranstellen, beispielsweise `Module.Square( /* … */ )`.

Ein weiterer Vorteil dynamischer Importe ist, dass sie auch in Skriptumgebungen verfügbar sind. Wenn Ihr HTML bereits ein `<script>`-Tag ohne `type="module"` enthält, können Sie als Module bereitgestellten Code trotzdem wiederverwenden, indem Sie ihn dynamisch importieren.

```html
<script>
  import("./modules/square.js").then((module) => {
    // Do something with the module.
  });
  // Other code that operates on the global scope and is not
  // ready to be refactored into modules yet.
  var btn = document.querySelector(".square");
</script>
```

## Top-Level-Await

`await` auf oberster Ebene ist eine Funktion von Modulen: Das Schlüsselwort `await` kann auf oberster Ebene, außerhalb einer async-Funktion, verwendet werden. Dadurch kann sich ein Modul wie eine große [asynchrone Funktion](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) verhalten. Es kann asynchrone Arbeit abschließen, bevor von ihm abhängige Module ausgeführt werden, ohne die Auswertung anderer Module zu blockieren, die nicht von ihm abhängen.

Sehen wir uns ein Beispiel an. Alle in diesem Abschnitt beschriebenen Dateien und Codebeispiele finden Sie im Verzeichnis [`top-level-await`](https://github.com/mdn/js-examples/tree/main/module-examples/top-level-await), das die vorherigen Beispiele erweitert.

Zunächst legen wir unsere Farbpalette in einer separaten Datei [`colors.json`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/data/colors.json) fest:

```json
{
  "yellow": "#F4D03F",
  "green": "#52BE80",
  "blue": "#5499C7",
  "red": "#CD6155",
  "orange": "#F39C12"
}
```

Dann erstellen wir ein Modul namens [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js). Es lädt die Datei [`colors.json`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/data/colors.json) mit einer Fetch-Anfrage und gibt die Daten als Objekt zurück.

```js
// fetch request
const colors = fetch(
  "https://mdn.github.io/js-examples/module-examples/top-level-await/data/colors.json",
).then((response) => response.json());

export default await colors;
```

Beachten Sie hier die letzte Exportzeile.

Wir verwenden das Schlüsselwort `await`, bevor wir die zu exportierende Konstante `colors` festlegen. Das bedeutet, dass alle anderen Module, die dieses Modul einbinden, warten, bis `colors` heruntergeladen und geparst wurde, bevor sie es verwenden.

```js
// -- main.js --
import colors from "./modules/getColors.js";
import { Canvas } from "./modules/canvas.js";

const circleBtn = document.querySelector(".circle");

// …
```

Beim Aufruf unserer Funktionen zum Zeichnen der Formen verwenden wir `colors` statt der zuvor verwendeten Zeichenfolgen:

```js
const square = new Module.Square(
  myCanvas.ctx,
  myCanvas.listId,
  50,
  50,
  100,
  colors.blue,
);

const circle = new Module.Circle(
  myCanvas.ctx,
  myCanvas.listId,
  75,
  200,
  100,
  colors.green,
);

const triangle = new Module.Triangle(
  myCanvas.ctx,
  myCanvas.listId,
  100,
  75,
  190,
  colors.yellow,
);
```

Das ist nützlich, weil der Code in [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js) erst ausgeführt wird, nachdem der Code in [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js) ausgeführt wurde. Die Auswertung unabhängiger Module wird dadurch jedoch nicht aufgehalten: Unser Modul [`canvas.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/canvas.js) wird weiterhin ausgewertet, während `colors` abgerufen wird.

`await` auf oberster Ebene hat seinen Preis: Es hat weitreichende Auswirkungen, weil ein Teil des [Modulgraphen](/de/docs/Web/JavaScript/Guide/Modules/Module_graph) nur asynchron ausgewertet werden kann. Weitere Informationen finden Sie im Leitfaden zum [Modulgraphen](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#top-level_await_and_asynchronous_evaluation).

## Modulmetadaten

Skripte werden im globalen Kontext ausgeführt. Daher können sie über globale Variablen wie [`Window.document`](/de/docs/Web/API/Window/document) oder [`Window.location`](/de/docs/Web/API/Window/location) Informationen über ihre Umgebung abrufen. Jedes Modul hat außerdem einen eigenen Ausführungskontext, auf den über ein modulspezifisches Objekt [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta) zugegriffen wird. Die Eigenschaften dieses Objekts werden von der Host-Umgebung definiert; die Spezifikation der Kernsprache definiert keine Eigenschaften. Informationen zu Browsern finden Sie unter [Module im Web verwenden](/de/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web#the_import.meta_object), Informationen zu Node.js, Bundlern und weiteren Umgebungen unter [Module auf verschiedenen Plattformen](/de/docs/Web/JavaScript/Guide/Modules/Modules_across_platforms).

In den meisten webähnlichen Umgebungen (Browsern, Node.js, Bundlern usw.) stellt `import.meta.url` beispielsweise die URL des Moduls bereit. Damit können Sie eine Ressource relativ zum Modul finden:

```js
// -- modules/getColors.js --
const colorsURL = new URL("../data/colors.json", import.meta.url);
```

So bleibt die Ressourcen-URL relativ zu `getColors.js`, auch wenn das Modul von einer Seite oder einem Modul in einem anderen Verzeichnis importiert wird.

## Zuständigkeiten der Sprache und der Host-Umgebung

Dieser Artikel stellt Module so vor, wie sie in der ECMAScript-Spezifikation definiert sind. JavaScript-Module sind eng mit der Host-Umgebung verknüpft. Sie müssen sich an unterschiedliche Ein-/Ausgabebedingungen, Architekturen und technische Anforderungen anpassen. Deshalb definiert die Kernsprache nur Folgendes:

- Die Syntax für Modulfunktionen, etwa [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)- und [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Deklarationen, [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta) und den Ausdruck [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import).
- Den Aufbau, die Verknüpfung und die Auswertung des [Modulgraphen](/de/docs/Web/JavaScript/Guide/Modules/Module_graph), einschließlich der Erkennung von Zyklen.
- Die Struktur des [Modul-Namespace-Objekts](#ein_modul-namespace-objekt_erstellen).

Die Kernsprache legt dagegen _nicht_ Folgendes fest:

- Das Konzept von „Dateien“. Obwohl jedes Modul üblicherweise eine eigene Datei ist, könnte es ebenso ein Objekt im Arbeitsspeicher, eine dynamisch abgerufene Zeichenfolge oder etwas anderes sein, das sich als JavaScript-Wert darstellen lässt.
- Die Struktur der Zeichenfolge für den Modulbezeichner. Sie kann eine URL, ein Dateipfad oder ein anderer Bezeichner sein, den die Host-Umgebung erkennt.
- Die Eigenschaften von `import.meta`. Alle Eigenschaften, einschließlich `import.meta.url`, werden von der Host-Umgebung definiert.
- Den Ladevorgang von Modulen. Die Host-Umgebung ist dafür verantwortlich, Module abzurufen und dabei gegebenenfalls [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with) anzuwenden. Sie muss die Anforderungen der Sprache einhalten, beispielsweise die Anforderungen für JSON-Module.

In der Praxis implementieren Laufzeitumgebungen wie Browser, Node.js und Deno häufig dieselben Funktionen, damit Code mit höherer Wahrscheinlichkeit plattformübergreifend funktioniert. Dieser Leitfaden erläutert ein Beispiel, das im Browser läuft, konzentriert sich jedoch auf grundlegende Konzepte, die für alle Umgebungen gelten. Im Leitfaden [Module im Web verwenden](/de/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web) behandeln wir die Besonderheiten des Ladens von Modulen in Browsern, insbesondere Importbezeichner. Im Leitfaden [Module auf verschiedenen Plattformen](/de/docs/Web/JavaScript/Guide/Modules/Modules_across_platforms) gehen wir anschließend näher darauf ein, wie das Modulsystem in andere Umgebungen integriert wird.

## Siehe auch

- [Module im Web verwenden](/de/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web)
- [Den Modulgraphen verstehen](/de/docs/Web/JavaScript/Guide/Modules/Module_graph)
- [Module auf verschiedenen Plattformen](/de/docs/Web/JavaScript/Guide/Modules/Modules_across_platforms)
- [JavaScript-Module](https://v8.dev/features/modules) auf v8.dev (2018)
- [ES-Module: Ein ausführlicher Einblick als Comic](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) auf hacks.mozilla.org (2018)
- [ES6 im Detail: Module](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) auf hacks.mozilla.org (2015)
- [Exploring JS, Kapitel 16: Module](https://exploringjs.com/es6/ch_modules.html) von Dr. Axel Rauschmayer

{{Previous("Web/JavaScript/Guide/Internationalization")}}
