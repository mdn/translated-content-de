---
title: Magische Kommentare
slug: Web/JavaScript/Reference/Magic_comments
l10n:
  sourceCommit: 90b0cce57c2c65e5c320f4cf32add4d8a50fd39c
---

**Magische Kommentare** (auch **Kommentardirektiven**, **Annotationen** usw. genannt) sind spezielle Arten von [Kommentaren](/de/docs/Web/JavaScript/Reference/Lexical_grammar#comments), die von bestimmten Engines, Bundlern, Typprüfern, Debuggern usw. (zusammenfassend als _Verarbeiter_ bezeichnet) erkannt werden, um Funktionen zu aktivieren, für die eine ausdrückliche Aktivierung erforderlich ist. Da es sich um Kommentare handelt, werden sie von Verarbeitern ignoriert, die sie nicht verstehen. Dieser Artikel stellt verschiedene Arten magischer Kommentare vor, die häufig in JavaScript-Quellcode vorkommen, sowie die Verarbeiter, für die sie bestimmt sind.

Normalerweise ändert das Vorhandensein oder Fehlen magischer Kommentare nicht das Laufzeitverhalten des Programms. Sie können beispielsweise die Ausführung optimieren, die statische Prüfung aktivieren oder deaktivieren oder zusätzliche Metadaten bereitstellen. Darin unterscheiden sie sich von _Direktiven_: Das sind Zeichenfolgen, die das Laufzeitverhalten tatsächlich verändern. Beispiele sind die standardmäßige Direktive [`"use strict"`](/de/docs/Web/JavaScript/Reference/Strict_mode) zur Aktivierung des Strict Mode sowie die React-Direktiven [`"use server"`](https://react.dev/reference/rsc/use-server) und [`"use client"`](https://react.dev/reference/rsc/use-client), die bestimmen, ob eine Komponente serverseitig oder clientseitig ausgeführt wird.

Damit magische Kommentare nicht mit gewöhnlichen Kommentaren verwechselt werden, sind sie meist durch spezielle Kennzeichen markiert, etwa ein vorangestelltes `#` oder `@`: `//# my-setting-name` oder `//@ my-setting-name`. Die genaue Syntax unterscheidet sich je nach Kommentart.

> [!NOTE]
> Es gibt keine allgemeingültige Bezeichnung für diese Art von Funktion, und die genannten Alternativen können sich in Feinheiten unterscheiden: _Pragmas_ stehen üblicherweise am Dateianfang und geben Compilern oder Engines Informationen über das gesamte Skript; _Annotationen_ können überall stehen und beziehen sich auf ein bestimmtes Konstrukt; _Direktiven_ ist ein allgemeiner Begriff, kann aber mit der JavaScript-Konvention um `"use strict"` verwechselt werden. In diesem Artikel verwenden wir diese Begriffe austauschbar.

## Pragmas mit Kompilierungshinweisen

Pragmas mit Kompilierungshinweisen geben JavaScript-Engines Hinweise darauf, wie der Code vorab kompiliert werden soll. Ihre Interpretation hängt von der jeweiligen Engine ab.

Sie sind im WICG-Vorschlag [Explicit JavaScript Compile Hints](https://wicg.github.io/explicit-javascript-compile-hints-file-based/) beschrieben.

### Frühzeitige Kompilierung

Das folgende Pragma aktiviert die frühzeitige Kompilierung aller Funktionen im aktuellen Skript.

```js
//# allFunctionsCalledOnLoad
```

Für Syntax und Platzierung gelten folgende Anforderungen:

- Dieser Kommentar muss am Anfang des Skripts stehen, vor jeglichem Code oder Leerraum. Nur andere Kommentare, einzeilige Kommentare oder Blockkommentare, dürfen davor stehen.
- Der Kommentar kann ein Zeilenkommentar oder ein Blockkommentar sein.
- Zwischen `#` und `//` beziehungsweise `/*` darf kein Leerzeichen stehen.
- Vor und nach `allFunctionsCalledOnLoad` darf beliebig viel Leerraum stehen.

Im folgenden Beispiel weist der magische Kommentar darauf hin, dass die Funktionen in der Datei wahrscheinlich beim Laden der Seite aufgerufen werden:

```js
//# allFunctionsCalledOnLoad
function init() {
  console.log("init");
}

init();
```

Ohne diesen Hinweis verschiebt die Engine die Kompilierung einer Funktion möglicherweise bis zu ihrem Aufruf.

Die frühzeitige Kompilierung bietet folgende Vorteile:

- Sie vermeidet doppeltes Parsen: Während der Initialisierung führt die Engine bereits ein „leichtes Parsen“ durch, um Anfang und Ende einer Funktion zu ermitteln. Beim Aufruf der Funktion muss sie diese dann erneut vollständig parsen. Wenn die Funktion frühzeitig kompiliert werden kann, führt die Engine das vollständige Parsen sofort durch, ohne einen gesonderten Durchgang für leichtes Parsen.
- Sie lässt sich parallelisieren: Wenn ein Funktionsaufruf während der Ausführung eine verzögerte Kompilierung auslöst, muss diese den Hauptthread blockieren, damit die synchrone Ausführung erhalten bleibt. Das Laden von Skripten erfolgt asynchron. Deshalb lässt sich das Parsen effizienter einplanen und kann sogar schon während des Abrufs des Skripts stattfinden.

Funktionen zu kompilieren, die nie aufgerufen werden, kann jedoch Zeit und Speicher verschwenden. Wie bei allen Leistungsfragen sollten Sie Benchmarks durchführen und die verschiedenen Vor- und Nachteile abwägen. Eine gute Faustregel steht bereits im Namen des Pragmas: Aktivieren Sie diesen Modus nur, wenn die Funktionen _beim Laden aufgerufen werden_.

Siehe auch [Faster JavaScript Startup with Explicit Compile Hints](https://v8.dev/blog/explicit-compile-hints) auf v8.dev.

## Source-Map-Annotationen

Source-Map-Annotationen verknüpfen JavaScript-Code mit Quelldateien und erleichtern so das Debuggen von generiertem, ausgewertetem oder minimiertem Code.

Sie sind in der TC39-Spezifikation [ECMA-426 Source map format](https://tc39.es/ecma426/) beschrieben.

### Quell-URLs

Die folgende Annotation gibt einem Codeabschnitt eine URL als Kennung.

```js
//# sourceURL=<url>
```

Für Syntax und Platzierung gelten folgende Anforderungen:

- Dieser Kommentar muss am _Ende_ des Skripts stehen, _nach_ jeglichem Code. Andere einzeilige Kommentare, Leerraum und Zeilenumbrüche dürfen darauf folgen.
- Der Kommentar muss ein Zeilenkommentar sein.
- Als Kennzeichen kann `@` statt `#` verwendet werden, `#` wird jedoch bevorzugt (`//@` könnte mit [Internet-Explorer-Pragmas](#veraltete_bedingte_kompilierung) kollidieren).
- Vor und nach `sourceURL=<url>` darf beliebig viel Leerraum stehen.
- `<url>` darf keine Leerraumzeichen enthalten. Diese sollten als `%20` {{Glossary("Percent-encoding", "prozentkodiert")}} werden.

Quell-URLs sind besonders nützlich für Code, der nicht aus einer Ressource stammt, der bereits eine URL zugeordnet ist, etwa für Code, der mit {{jsxref("Global_Objects/eval", "eval()")}} ausgeführt wird:

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

Diese Annotation wird von vielen Funktionen verwendet und dient in erster Linie dem Debuggen:

- Ausgaben in der Konsole und im Debugger, wie oben gezeigt.
- Die Eigenschaft `Error` {{jsxref("Error/stack", "stack")}}.
- Die Auflösung von `sourceMapURL`.

Siehe auch [naming evaluated code with `sourceURL`](https://developer.chrome.com/docs/devtools/javascript/source-maps#sourceurl) auf developer.chrome.com und [Give your eval a name with `//@ sourceURL`](https://web.archive.org/web/20120814122523/http://blog.getfirebug.com/2009/08/11/give-your-eval-a-name-with-sourceurl/) von Firebug.

### Source-Map-URLs

Die folgende Annotation verknüpft generierten Code mit einer {{Glossary("Source_map", "Source Map")}}.

```js
//# sourceMappingURL=<url>
```

Für Syntax und Platzierung gelten dieselben Anforderungen wie für `sourceURL`.

Die Source-Map-URL kann eine relative URL sein. In diesem Fall kann sie gemäß [ECMA 426](https://tc39.es/ecma426/#sec-linking-generated-code) relativ zu `sourceURL`, zum `src`-Attribut des `<script>`-Elements, zum Ursprung des Dokuments, das das `<script>`-Element enthält, usw. aufgelöst werden. Sie kann auch eine `data:`-URL sein, die eine eingebettete Source Map enthält. Der HTTP-Header {{HTTPHeader("SourceMap")}} hat Vorrang vor diesem Kommentar.

Ein Debugger kann die Source Map verwenden, um den ursprünglichen Quellcode anzuzeigen und Breakpoints einem minimierten Bundle zuzuordnen. Auch in Editoren ist dies nützlich, etwa für das Springen zu Definitionen oder das Auffinden von Referenzen.

Build-Tools wie Bundler und Transpiler erzeugen diesen Kommentar zusammen mit der Source Map in der kompilierten Ausgabe. Entwickler müssen ihn normalerweise nicht von Hand schreiben.

## Bundler-Annotationen

Bundler, Minimierer und Transpiler verwenden magische Kommentare, um die Codegenerierung, Optimierung und Behandlung von Abhängigkeiten zu steuern. Diese Annotationen werden beim Build verarbeitet, nicht von der JavaScript-Engine, die den erzeugten Code ausführt.

Es gibt dafür keine Spezifikation, und Bundler führen häufig eigene Annotationen ein. Dieser Abschnitt beschreibt nur einige verbreitete Annotationen, die von mehreren Tools unterstützt werden. Ob ein Bundler eine bestimmte Annotation unterstützt, müssen Sie in dessen Dokumentation nachsehen.

### Tree Shaking

Die Annotationen `/*#__PURE__*/` und `/*@__PURE__*/` kennzeichnen einen bestimmten Funktionsaufruf oder Konstruktoraufruf als gefahrlos entfernbar, wenn sein Ergebnis nicht verwendet wird:

```js
function createPoint(x, y) {
  return { x, y };
}

const point = /*#__PURE__*/ createPoint(1, 2);
```

> [!NOTE]
> Das bedeutet nicht, dass der Aufruf im Sinne der funktionalen Programmierung rein ist. Sein Ergebnis kann zufällig sein, von externem Zustand abhängen usw. Solange das Entfernen des Aufrufs das Anwendungsverhalten nicht in relevanter Weise verändert, kann er jedoch als rein annotiert werden.

Ohne die Annotation muss der Bundler den Funktionsaufruf möglicherweise beibehalten, selbst wenn die Ergebnisvariable `point` nicht verwendet wird:

```js
// -- Compiler output --
function createPoint(x, y) {
  return { x, y };
}

createPoint(1, 2);
```

Mit der Annotation kann der Bundler den Funktionsaufruf vollständig entfernen. Falls `createPoint()` sonst nirgends aufgerufen wird, kann er auch die Funktionsdefinition entfernen. Eine falsche Annotation kann dazu führen, dass erforderliches Verhalten entfernt wird.

Die Annotation gilt für den jeweiligen Funktionsaufruf. Ob die Auswertung der Argumentausdrücke Seiteneffekte hat, wird gesondert beurteilt. Zum Beispiel:

```js
/*#__PURE__*/ createPoint(1, getY());
```

In diesem Beispiel ist der Aufruf von `createPoint()` rein, und Bundler wissen, dass die Auswertung von `1` keine Seiteneffekte hat. Sie können jedoch nicht feststellen, ob `getY()` rein ist. Deshalb enthält die Ausgabe den Aufruf von `getY()`; möglicherweise bleibt auch der Aufruf von `createPoint()` erhalten. Damit alles weggelassen werden kann, muss jeder Funktionsaufruf gesondert annotiert werden:

```js
/*#__PURE__*/ createPoint(1, /*#__PURE__*/ getY());
```

Siehe auch [esbuilds Annotationen für reine Aufrufe](https://esbuild.github.io/api/#pure) und [Tersers Annotationen](https://terser.org/docs/miscellaneous/#annotations).

Einige Bundler erkennen außerdem `/*#__NO_SIDE_EFFECTS__*/` und `/*@__NO_SIDE_EFFECTS__*/`. Diese annotieren eine Funktionsdeklaration oder eine unterstützte Variablendeklaration, die eine Funktion enthält, sodass Aufrufe dieser Funktion als frei von Seiteneffekten behandelt werden können:

```js
/*#__NO_SIDE_EFFECTS__*/
function createPoint(x, y) {
  return { x, y };
}
```

Siehe [Rollups Annotationen für Tree Shaking](https://rollupjs.org/configuration-options/#treeshake-annotations).

### Minimierung

Zwei wichtige Minimierungstechniken sind möglicherweise nicht immer sicher anzuwenden: _Inlining_ und _Property Mangling_. Beim Inlining wird ein Funktionsaufruf direkt durch den Funktionskörper ersetzt. Beim Property Mangling werden Property-Namen durch kürzere Zeichenfolgen ersetzt.

Mit `/*@__INLINE__*/` und `/*@__NOINLINE__*/` können Sie Inlining für einzelne Funktionsaufrufe gezielt aktivieren oder deaktivieren. Beachten Sie dabei:

- Inlining kann die Aufrufleistung verbessern, weil Stack-Frames nicht angelegt und wieder entfernt werden müssen. Allerdings kann auch die Engine selbst Inlining durchführen, und Inlining im Quellcode kann ihre Entscheidungen auf unvorhersehbare Weise beeinflussen.
- Inlining kann die Bundle-Größe verringern, wenn die Funktion nur einmal verwendet wird, und sie vergrößern, wenn die Funktion häufig verwendet wird. Minimierer treffen Entscheidungen normalerweise mit dem Ziel, die Bundle-Größe zu optimieren.

Beim Property Mangling ersetzt der Minimierer Property-Namen global durch kürzere Zeichenfolgen, wobei unterschiedliche Namen unterscheidbar bleiben. Das kann problematisch sein, weil das Objekt möglicherweise von außen zugänglich ist, etwa wenn es an externe Funktionen übergeben oder von exportierten Funktionen zurückgegeben wird. Deshalb muss Property Mangling in der Regel ausdrücklich aktiviert werden. Wenn Sie es aktivieren, sollten Sie es wahrscheinlich auf Namensmuster beschränken, die bekanntermaßen nur intern verwendet werden, etwa Namen mit vorangestelltem Unterstrich.

Die Annotation `/*@__KEY__*/` kennzeichnet ein String-Literal als umzubenennenden Property-Namen. Standardmäßig kann der Minimierer nur bestimmte Syntaxformen erkennen. Zeichenfolgen, die an beliebige Funktionen übergeben werden, müssen daher ausdrücklich gekennzeichnet werden.

```js
const record = { _internalValue: 42 };
Object.getOwnPropertyDescriptor(record, /*@__KEY__*/ "_internalValue");
```

Mit der Annotation `/*@__MANGLE_PROP__*/` lässt sich Property Mangling für eine bestimmte Property oder ein bestimmtes Class Field ausdrücklich aktivieren.

Siehe auch [Terser Annotations](https://terser.org/docs/miscellaneous/#annotations).

### JSX-Transformation

JSX-Transpiler verwenden Pragmas auf Dateiebene, um festzulegen, wie JSX in JavaScript umgewandelt wird. Zum Beispiel:

```jsx
/** @jsxRuntime automatic */
/** @jsxImportSource preact */

const heading = <h1>Hello</h1>;
```

Dies erzeugt:

```js
import { jsx as _jsx } from "preact/jsx-runtime";

const heading = _jsx("h1", {
  children: "Hello",
});
```

Diese Einstellungen können auch global im Transpiler konfiguriert werden. Pragmas sind nur nötig, wenn für eine bestimmte Datei eine andere Einstellung gelten soll.

Siehe auch [Babels JSX-Transformation](https://babeljs.io/docs/babel-plugin-transform-react-jsx/) und [esbuilds JSX-Konfiguration](https://esbuild.github.io/api/#jsx).

## Direktiven für statische Prüfwerkzeuge

Statische Prüfwerkzeuge und verwandte Entwicklungswerkzeuge interpretieren Kommentare ebenfalls als Konfiguration oder Metadaten. Beispiele:

- **JSDoc**: [JSDoc-Annotationen](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html) wie `@type` und `@param` liefern Typinformationen. Sie ermöglichen auch Editorfunktionen wie eingeblendete Beschreibungen.
- **TypeScript (`tsc`)**: [`// @ts-check` und `// @ts-nocheck`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-3.html#errors-in-js-files-with---checkjs) aktivieren oder deaktivieren die Typprüfung für eine JavaScript-Datei. `// @ts-ignore` unterdrückt Diagnosen für die nächste Zeile; [`// @ts-expect-error`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html#-ts-expect-error-comments) meldet zusätzlich einen Fehler, wenn kein Fehler zu unterdrücken war.
- **ESLint**: [Konfigurationskommentare](https://eslint.org/docs/latest/use/configure/rules) wie `/* eslint no-console: "warn" */` konfigurieren Regeln, während `// eslint-disable-next-line no-console` eine Regel für die nächste Zeile deaktiviert.
- **Prettier**: [`// prettier-ignore`](https://prettier.io/docs/ignore#javascript) nimmt den nächsten Syntaxknoten von der Formatierung aus.
- **Flow**: [`// @flow`](https://flow.org/en/docs/getting-started/) aktiviert die Typprüfung für eine Datei. [Kommentartypen](https://flow.org/en/docs/types/comments/) wie `/*: number */` betten Typsyntax in JavaScript-Kommentare ein.

## Veraltete bedingte Kompilierung

> [!WARNING]
> Dieser Abschnitt behandelt einen IE-spezifischen Mechanismus. Wie IE selbst ist er inzwischen veraltet. Sie können ihm aber weiterhin in altem Code begegnen, und er beeinflusst noch immer die Gestaltung der Sprache – beispielsweise ist er ein Grund dafür, dass `//# sourceMapURL` gegenüber `//@ sourceMapURL` bevorzugt wird. Der Abschnitt bleibt aus historischem Interesse erhalten.

Die JScript-Engine von Internet Explorer unterstützte _bedingte Kompilierung_: einen veralteten, nicht standardisierten Mechanismus, der Code innerhalb speziell gekennzeichneter Kommentare interpretieren konnte. Anders als Optimierungshinweise oder Debugging-Metadaten konnten diese Kommentare ändern, welcher Code ausgeführt wurde.

Die Anweisung `@cc_on` aktivierte die bedingte Kompilierung. Mit `@set` wurden Variablen für die bedingte Kompilierung definiert; `@if`, `@elif`, `@else` und `@end` wählten anhand dieser Variablen Code aus. Zu den vordefinierten Variablen gehörte `@_jscript_version`, die die Version der JScript-Engine angab.

```js
var supportsConditionalCompilation = false;
/*@cc_on
  supportsConditionalCompilation = true;
@*/
```

In einer Engine mit entsprechender Unterstützung wurde die Zuweisung innerhalb des Kommentars ausgeführt. Andere Engines behandelten den gesamten Block als gewöhnlichen Kommentar, sodass die Variable `false` blieb. Es gab auch eine Form als Zeilenkommentar: `//@cc_on`.

Siehe auch Microsofts historischen Entwurf [JScript Conditional Compilation](https://archives.ecma-international.org/2007/misc/jscriptconditionalcompilation2.pdf).
