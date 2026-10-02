---
title: Magic Comments
slug: Web/JavaScript/Reference/Magic_comments
l10n:
  sourceCommit: cd2f1ce1c5a6031648a9c33a067bbaa60eca005c
---

**Magic Comments** (auch **Kommentardirektiven**, **Annotationen** usw. genannt) sind besondere Arten von [Kommentaren](/de/docs/Web/JavaScript/Reference/Lexical_grammar#comments), die von bestimmten Engines, Bundlern, Typprüfern, Debuggern usw. (zusammenfassend als _verarbeitende Werkzeuge_ bezeichnet) erkannt werden, um Funktionen gezielt zu aktivieren. Da es sich um Kommentare handelt, werden sie von Werkzeugen, die sie nicht verstehen, ignoriert. Dieser Artikel stellt verschiedene Arten von Magic Comments vor, die häufig in JavaScript-Quellcode vorkommen, und erläutert, welche Werkzeuge sie verarbeiten sollen.

Ob Magic Comments vorhanden sind oder nicht, ändert normalerweise nichts am Laufzeitverhalten des Programms. Sie können beispielsweise die Ausführung optimieren, statische Prüfungen aktivieren oder deaktivieren oder zusätzliche Metadaten bereitstellen. Darin unterscheiden sie sich von _Direktiven_: Das sind Zeichenfolgen, die das Laufzeitverhalten tatsächlich ändern. Beispiele sind die standardisierte Direktive [`"use strict"`](/de/docs/Web/JavaScript/Reference/Strict_mode), die den Strict Mode aktiviert, sowie die React-Direktiven [`"use server"` und `"use client"`](https://react.dev/reference/rsc/use-server), die festlegen, ob eine Komponente server- oder clientseitig ausgeführt wird.

Um Verwechslungen mit gewöhnlichen Kommentaren zu vermeiden, werden Magic Comments üblicherweise durch _Kennzeichen_ markiert, etwa ein vorangestelltes `#` oder `@`: `//# my-setting-name` oder `//@ my-setting-name`. Die genaue Syntax unterscheidet sich je nach Kommentarart.

> [!NOTE]
> Für diese Art von Funktion gibt es keine allgemein gültige Bezeichnung. Auch die genannten „Alternativen“ können sich in Details unterscheiden: _Pragmas_ stehen üblicherweise am Dateianfang und geben Compilern oder Engines Informationen über das gesamte Skript; _Annotationen_ können an beliebiger Stelle stehen und sich auf ein bestimmtes Konstrukt beziehen; _Direktive_ ist ein allgemeiner Begriff, kann aber mit der JavaScript-Konvention für Direktiven wie `"use strict"` verwechselt werden. In diesem Artikel verwenden wir diese Begriffe austauschbar.

## Pragmas mit Kompilierungshinweisen

Pragmas mit Kompilierungshinweisen geben JavaScript-Engines Hinweise dazu, wie sie den Code vorab kompilieren sollen. Wie sie interpretiert werden, hängt von der jeweiligen Engine ab.

Sie sind im WICG-Vorschlag [Explicit JavaScript Compile Hints](https://wicg.github.io/explicit-javascript-compile-hints-file-based/) beschrieben.

### Vorzeitige Kompilierung

Das folgende Pragma aktiviert die vorzeitige Kompilierung aller Funktionen im aktuellen Skript.

```js
//# allFunctionsCalledOnLoad
```

Für Syntax und Platzierung gelten folgende Anforderungen:

- Dieser Kommentar muss am Anfang des Skripts stehen, vor jeglichem Code und Leerraum. Nur andere Kommentare, einzeilige Kommentare oder Blockkommentare, dürfen davor stehen.
- Der Kommentar kann ein Zeilenkommentar oder ein Blockkommentar sein.
- Zwischen `#` und `//` beziehungsweise `/*` darf kein Leerzeichen stehen.
- Vor und nach `allFunctionsCalledOnLoad` darf beliebig viel Leerraum stehen.

Im folgenden Beispiel signalisiert der Magic Comment, dass die Funktionen in der Datei wahrscheinlich beim Laden der Seite aufgerufen werden:

```js
//# allFunctionsCalledOnLoad
function init() {
  console.log("init");
}

init();
```

Ohne diesen Hinweis kann die Engine die Kompilierung einer Funktion aufschieben, bis sie aufgerufen wird.

Die vorzeitige Kompilierung bietet folgende Vorteile:

- Sie vermeidet doppeltes Parsen: Während der Initialisierung führt die Engine bereits ein „leichtes Parsen“ durch, um Anfang und Ende der Funktion zu ermitteln. Beim Aufruf der Funktion muss sie diese dann noch einmal vollständig parsen. Kann die Funktion vorzeitig kompiliert werden, führt die Engine das vollständige Parsen sofort durch, ohne einen gesonderten Durchlauf für das leichte Parsen.
- Sie kann parallelisiert werden: Löst ein Funktionsaufruf während der Ausführung eine verzögerte Kompilierung aus, muss diese den Hauptthread blockieren, damit die Ausführung synchron bleibt. Das Laden von Skripten erfolgt asynchron. Daher lässt sich das Parsen effizienter einplanen und kann sogar bereits während des Abrufs des Skripts stattfinden.

Das Kompilieren von Funktionen, die nie aufgerufen werden, kann jedoch Zeit und Speicher verschwenden. Wie bei allen Leistungsfragen sollten Sie Benchmarks durchführen und die verschiedenen Vor- und Nachteile abwägen. Eine gute Faustregel steht bereits im Namen des Pragmas: Aktivieren Sie diesen Modus nur, wenn die Funktionen _beim Laden aufgerufen werden_.

Siehe auch [Faster JavaScript Startup with Explicit Compile Hints](https://v8.dev/blog/explicit-compile-hints) auf v8.dev.

## Source-Map-Annotationen

Source-Map-Annotationen verknüpfen JavaScript-Code mit Quelldateien. Dadurch lässt sich generierter, evaluierter oder minimierter Code leichter debuggen.

Sie sind in der TC39-Spezifikation [ECMA-426 Source map format](https://tc39.es/ecma426/) beschrieben.

### Source-URLs

Die folgende Annotation weist einem Codeabschnitt eine URL als Kennung zu.

```js
//# sourceURL=<url>
```

Für Syntax und Platzierung gelten folgende Anforderungen:

- Dieser Kommentar muss am _Ende_ des Skripts, _nach_ jeglichem Code stehen. Weitere einzeilige Kommentare, Leerraum und Zeilenumbrüche dürfen darauf folgen.
- Der Kommentar muss ein Zeilenkommentar sein.
- Statt `#` kann auch `@` als Kennzeichen verwendet werden; `#` wird jedoch bevorzugt, da `//@` mit [Internet-Explorer-Pragmas](#veraltete_bedingte_kompilierung) kollidieren könnte.
- Vor und nach `sourceURL=<url>` darf beliebig viel Leerraum stehen.
- Die `<url>` darf keine Leerraumzeichen enthalten. Diese sollten beispielsweise als `%20` {{Glossary("Percent-encoding", "prozentkodiert")}} werden.

Source-URLs sind besonders nützlich für Code, der nicht aus einer bereits mit einer URL verknüpften Ressource stammt, etwa für Code, der mit {{jsxref("Global_Objects/eval", "eval()")}} ausgeführt wird:

```js
eval(
  'console.log("Hello"); throw new Error("error");\n//# sourceURL=generated-code.js',
);
```

Das obige Beispiel kann in der Browserkonsole folgende Ausgabe erzeugen:

```plain
Hello        generated-code.js:1
Uncaught Error: error
    <anonymous> generated-code.js:1
    <anonymous> debugger eval code:1
```

Diese Annotation wird von vielen Funktionen genutzt und dient hauptsächlich dem Debugging:

- Ausgaben in der Konsole und im Debugger, wie oben gezeigt.
- Der {{jsxref("Error/stack", "stack")}}-Eigenschaft von `Error`.
- Der Auflösung von `sourceMapURL`.

Siehe auch [naming evaluated code with `sourceURL`](https://developer.chrome.com/docs/devtools/javascript/source-maps#sourceurl) auf developer.chrome.com und [Give your eval a name with `//@ sourceURL`](https://web.archive.org/web/20120814122523/http://blog.getfirebug.com/2009/08/11/give-your-eval-a-name-with-sourceurl/) auf Firebug.

### Source-Map-URLs

Die folgende Annotation verknüpft generierten Code mit einer {{Glossary("Source_map", "Source Map")}}.

```js
//# sourceMappingURL=<url>
```

Für Syntax und Platzierung gelten dieselben Anforderungen wie für `sourceURL`.

Die Source-Map-URL kann eine relative URL sein. In diesem Fall kann sie anhand von `sourceURL`, dem `src`-Attribut des `<script>`-Elements, dem Ursprung des Dokuments, das das `<script>`-Element enthält, usw. aufgelöst werden, wie in [ECMA 426](https://tc39.es/ecma426/#sec-linking-generated-code) festgelegt. Sie kann auch eine `data:`-URL mit einer eingebetteten Source Map sein. Der HTTP-Header {{HTTPHeader("SourceMap")}} hat Vorrang vor diesem Kommentar.

Ein Debugger kann mithilfe der Map den ursprünglichen Quellcode anzeigen und Breakpoints einem minimierten Bundle zuordnen. Auch in Editoren ist sie nützlich, etwa um zu Definitionen zu springen oder Referenzen zu finden.

Build-Werkzeuge (Bundler, Transpiler usw.) erzeugen diesen Kommentar zusammen mit der Map in der kompilierten Ausgabe. Entwickler müssen ihn normalerweise nicht von Hand schreiben.

## Bundler-Annotationen

Bundler, Minimizer und Transpiler verwenden Magic Comments, um die Codegenerierung, Optimierung und Verarbeitung von Abhängigkeiten zu steuern. Diese Annotationen werden während des Build-Prozesses verarbeitet, nicht von der JavaScript-Engine, die das Ergebnis ausführt.

Es gibt dafür keine Spezifikation, und Bundler entwickeln häufig eigene Annotationen. Dieser Abschnitt beschreibt nur einige verbreitete Annotationen, die von mehreren Werkzeugen unterstützt werden. Ob ein bestimmter Bundler eine Annotation unterstützt, müssen Sie in dessen Dokumentation nachsehen.

### Tree Shaking

Die Annotationen `/*#__PURE__*/` und `/*@__PURE__*/` kennzeichnen einen bestimmten Funktions- oder Konstruktoraufruf als gefahrlos entfernbar, wenn sein Ergebnis nicht verwendet wird:

```js
function createPoint(x, y) {
  return { x, y };
}

const point = /*#__PURE__*/ createPoint(1, 2);
```

> [!NOTE]
> Das bedeutet nicht, dass der Aufruf im Sinne der funktionalen Programmierung rein ist. Sein Ergebnis kann zufällig sein, von externem Zustand abhängen usw. Solange das Entfernen das Anwendungsverhalten nicht in relevanter Weise verändert, kann der Aufruf jedoch als rein annotiert werden.

Ohne die Annotation muss der Bundler den Funktionsaufruf möglicherweise beibehalten, selbst wenn die Ergebnisvariable `point` nicht verwendet wird:

```js
// -- Compiler output --
function createPoint(x, y) {
  return { x, y };
}

createPoint(1, 2);
```

Mit der Annotation kann der Bundler den Funktionsaufruf vollständig entfernen. Wird `createPoint()` sonst nirgends aufgerufen, kann er auch die Funktionsdefinition entfernen. Eine falsche Annotation kann dazu führen, dass erforderliches Verhalten entfernt wird.

Die Annotation gilt für den jeweiligen Funktionsaufruf. Über die Seiteneffekte bei der Auswertung der Argumentausdrücke wird getrennt entschieden. Zum Beispiel:

```js
/*#__PURE__*/ createPoint(1, getY());
```

In diesem Beispiel ist der Aufruf von `createPoint()` rein, und Bundler wissen, dass die Auswertung von `1` keine Seiteneffekte hat. Sie können jedoch nicht feststellen, ob `getY()` rein ist. Deshalb enthält die Ausgabe den Aufruf von `getY()`; möglicherweise bleibt auch der Aufruf von `createPoint()` erhalten. Damit alles entfernt werden kann, muss jeder Funktionsaufruf einzeln annotiert werden:

```js
/*#__PURE__*/ createPoint(1, /*#__PURE__*/ getY());
```

Siehe auch [esbuilds Pure-Annotationen](https://esbuild.github.io/api/#pure) und [Tersers Annotationen](https://terser.org/docs/miscellaneous/#annotations).

Einige Bundler erkennen außerdem `/*#__NO_SIDE_EFFECTS__*/` und `/*@__NO_SIDE_EFFECTS__*/`. Diese annotieren eine Funktionsdeklaration oder eine unterstützte Variablendeklaration, die eine Funktion enthält, damit Aufrufe dieser Funktion als frei von Seiteneffekten behandelt werden können:

```js
/*#__NO_SIDE_EFFECTS__*/
function createPoint(x, y) {
  return { x, y };
}
```

Siehe [Rollups Tree-Shaking-Annotationen](https://rollupjs.org/configuration-options/#treeshake-annotations).

### Minimierung

Zwei wichtige Minimierungstechniken können unter Umständen nicht gefahrlos angewendet werden: _Inlining_ und _Property Mangling_. Beim Inlining wird ein Funktionsaufruf direkt durch den Funktionskörper ersetzt. Beim Property Mangling werden Eigenschaftsnamen durch kürzere Zeichenfolgen ersetzt.

Mit `/*@__INLINE__*/` und `/*@__NOINLINE__*/` können Sie Inlining für bestimmte Funktionsaufrufe gezielt aktivieren oder deaktivieren. Beachten Sie dabei Folgendes:

- Inlining kann die Aufrufleistung verbessern, da Stack Frames nicht angelegt und wieder entfernt werden müssen. Allerdings kann die Engine selbst Inlining durchführen, und Inlining im Quellcode kann ihre Entscheidungen auf unvorhersehbare Weise beeinflussen.
- Inlining kann die Bundle-Größe verringern, wenn eine Funktion nur einmal verwendet wird, und sie vergrößern, wenn die Funktion häufig verwendet wird. Minimizer treffen üblicherweise Entscheidungen, die die Bundle-Größe optimieren.

Beim Property Mangling ersetzt der Minimizer Eigenschaftsnamen im gesamten Code durch kürzere Zeichenfolgen, wobei unterschiedliche Namen unterscheidbar bleiben. Das ist nicht immer gefahrlos, da ein Objekt von außen zugänglich sein kann, etwa wenn es an externe Funktionen übergeben oder von exportierten Funktionen zurückgegeben wird. Deshalb muss Property Mangling üblicherweise ausdrücklich aktiviert werden. Wenn Sie es aktivieren, sollten Sie es wahrscheinlich auf Namensmuster beschränken, von denen bekannt ist, dass sie nur intern verwendet werden, beispielsweise auf Namen mit vorangestelltem Unterstrich.

Die Annotation `/*@__KEY__*/` kennzeichnet ein Zeichenfolgenliteral als Eigenschaftsnamen, der umbenannt werden soll. Standardmäßig kann der Minimizer nur bestimmte Syntaxformen erkennen. Deshalb müssen Zeichenfolgen, die an beliebige Funktionen übergeben werden, ausdrücklich gekennzeichnet werden.

```js
const record = { _internalValue: 42 };
Object.getOwnPropertyDescriptor(record, /*@__KEY__*/ "_internalValue");
```

Mit der Annotation `/*@__MANGLE_PROP__*/` lässt sich Property Mangling für eine bestimmte Eigenschaft oder ein bestimmtes Klassenfeld ausdrücklich aktivieren.

Siehe auch [Terser Annotations](https://terser.org/docs/miscellaneous/#annotations).

### JSX-Transformation

JSX-Transpiler verwenden Pragmas auf Dateiebene, um festzulegen, wie JSX in JavaScript umgewandelt wird. Zum Beispiel:

```jsx
/** @jsxRuntime automatic */
/** @jsxImportSource preact */

const heading = <h1>Hello</h1>;
```

Daraus wird Folgendes generiert:

```js
import { jsx as _jsx } from "preact/jsx-runtime";

const heading = _jsx("h1", {
  children: "Hello",
});
```

Diese Einstellungen können auch global im Transpiler konfiguriert werden. Pragmas sind nur erforderlich, wenn für eine bestimmte Datei eine andere Einstellung gelten soll.

Siehe auch [Babels JSX-Transformation](https://babeljs.io/docs/babel-plugin-transform-react-jsx/) und [esbuilds JSX-Konfiguration](https://esbuild.github.io/api/#jsx).

## Direktiven für statische Prüfwerkzeuge

Auch statische Prüfwerkzeuge und verwandte Entwicklungswerkzeuge interpretieren Kommentare als Konfiguration oder Metadaten. Einige Beispiele:

- **JSDoc**: [JSDoc-Annotationen](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html) wie `@type` und `@param` liefern Typinformationen. Sie ermöglichen außerdem Editorfunktionen wie eingeblendete Beschreibungen.
- **TypeScript (`tsc`)**: [`// @ts-check` und `// @ts-nocheck`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-3.html#errors-in-js-files-with---checkjs) aktivieren oder deaktivieren die Typprüfung für eine JavaScript-Datei. `// @ts-ignore` unterdrückt Diagnosemeldungen für die nächste Zeile; [`// @ts-expect-error`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html#-ts-expect-error-comments) meldet zusätzlich einen Fehler, wenn kein Fehler zu unterdrücken war.
- **ESLint**: [Konfigurationskommentare](https://eslint.org/docs/latest/use/configure/rules) wie `/* eslint no-console: "warn" */` konfigurieren Regeln, während `// eslint-disable-next-line no-console` eine Regel für die nächste Zeile deaktiviert.
- **Prettier**: [`// prettier-ignore`](https://prettier.io/docs/ignore#javascript) nimmt den nächsten Syntaxknoten von der Formatierung aus.
- **Flow**: [`// @flow`](https://flow.org/en/docs/getting-started/) aktiviert die Typprüfung für eine Datei. [Typen in Kommentaren](https://flow.org/en/docs/types/comments/), beispielsweise `/*: number */`, betten Typsyntax in JavaScript-Kommentare ein.

## Veraltete bedingte Kompilierung

> [!WARNING]
> Dieser Abschnitt behandelt einen IE-spezifischen Mechanismus. Wie IE selbst ist er inzwischen veraltet. Sie können ihm jedoch weiterhin in altem Code begegnen, und er beeinflusst noch immer die Gestaltung der Sprache – etwa dadurch, dass `//# sourceMapURL` gegenüber `//@ sourceMapURL` bevorzugt wird. Der Abschnitt bleibt aus historischem Interesse erhalten.

Die JScript-Engine von Internet Explorer unterstützte die _bedingte Kompilierung_: einen veralteten, nicht standardisierten Mechanismus, der Code innerhalb speziell gekennzeichneter Kommentare interpretieren konnte. Anders als Optimierungshinweise oder Debugging-Metadaten konnten diese Kommentare ändern, welcher Code ausgeführt wurde.

Die Anweisung `@cc_on` aktivierte die bedingte Kompilierung. Mit `@set` wurden Variablen für die bedingte Kompilierung definiert; `@if`, `@elif`, `@else` und `@end` wählten anhand dieser Variablen Code aus. Zu den vordefinierten Variablen gehörte `@_jscript_version`, die die Version der JScript-Engine angab.

```js
var supportsConditionalCompilation = false;
/*@cc_on
  supportsConditionalCompilation = true;
@*/
```

In einer Engine, die diesen Mechanismus unterstützte, wurde die Zuweisung innerhalb des Kommentars ausgeführt. Andere Engines behandelten den gesamten Block als gewöhnlichen Kommentar, sodass die Variable `false` blieb. Es gab auch eine Variante als Zeilenkommentar: `//@cc_on`.

Siehe auch Microsofts historischen Entwurf [JScript Conditional Compilation](https://archives.ecma-international.org/2007/misc/jscriptconditionalcompilation2.pdf).
