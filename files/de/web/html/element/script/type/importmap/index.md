---
title: <script type="importmap">
slug: Web/HTML/Element/script/type/importmap
l10n:
  sourceCommit: 192d9ca643539e3dfbd20cc98aaa4b05c0a9f752
---

{{HTMLSidebar}}

Der **`importmap`**-Wert des [`type`](/de/docs/Web/HTML/Element/script/type)-Attributs des [`<script>`-Elements](/de/docs/Web/HTML/Element/script) zeigt an, dass der Inhalt des Elements eine Import-Map enthält.

Eine Import-Map ist ein JSON-Objekt, das Entwicklern ermöglicht, zu steuern, wie der Browser Modulspezifizierer beim Importieren von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) auflöst.
Es bietet eine Zuordnung zwischen dem Text, der im Modulspezifizierer in einer [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) oder im [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) verwendet wird, und dem entsprechenden Wert, der diesen Text beim Auflösen des Spezifizierers ersetzt.
Das JSON-Objekt muss dem [Import-Map-JSON-Repräsentationsformat](#import-map_json-repräsentation) entsprechen.

Eine Import-Map wird verwendet, um Modulspezifizierer in statischen und dynamischen Importen aufzulösen und muss daher deklariert und verarbeitet werden, bevor irgendwelche `<script>`-Elemente Module mit in der Map deklarierten Spezifizierern importieren.
Beachten Sie, dass die Import-Map nur für Modulspezifizierer in der [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) oder dem [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) für in Dokumente geladene Module gilt; sie gilt nicht für den im `src`-Attribut eines `<script>`-Elements angegebenen Pfad oder für Module, die in Workern oder Worklets geladen werden.

Weitere Informationen finden Sie im Abschnitt [Module mit Import-Maps importieren](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) im JavaScript-Module-Leitfaden.

## Syntax

```html
<script type="importmap">
  // JSON object defining import
</script>
```

Die Attribute `src`, `async`, `nomodule`, `defer`, `crossorigin`, `integrity` und `referrerpolicy` dürfen nicht angegeben werden.

Nur die erste Import-Map im Dokument mit einer Inline-Definition wird verarbeitet; alle zusätzlichen Import-Maps und externen Import-Maps werden ignoriert.

### Ausnahmen

- `TypeError`

  - : Die Import-Map-Definition ist kein JSON-Objekt, der `importmap`-Schlüssel ist definiert, aber sein Wert ist kein JSON-Objekt, oder der `scopes`-Schlüssel ist definiert, aber sein Wert ist kein JSON-Objekt.

Browser erzeugen Konsolenwarnungen für andere Fälle, in denen das Import-Map-JSON nicht dem [Import-Map](#import-map_json-repräsentation)-Schema entspricht.

Ein [`error`-Ereignis](/de/docs/Web/API/HTMLElement/error_event) wird an Skriptelementen mit `type="importmap"` ausgelöst, die nicht verarbeitet werden.
Dies könnte beispielsweise auftreten, wenn das Laden von Modulen bereits begonnen hat, als eine Import-Map bearbeitet wird, oder wenn mehrere Import-Maps auf der Seite definiert sind.

## Beschreibung

Beim Importieren eines [JavaScript-Moduls](/de/docs/Web/JavaScript/Guide/Modules) haben sowohl die [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) als auch der [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) einen "Modulspezifizierer", der das zu importierende Modul angibt.
Ein Browser muss in der Lage sein, diesen Spezifizierer auf eine absolute URL aufzulösen, um das Modul zu importieren.

Zum Beispiel importieren die folgenden Anweisungen Elemente vom Modulspezifizierer `"./modules/shapes/square.js"`, der ein relativer Pfad zur Basis-URL des Dokuments ist, und vom Modulspezifizierer `"https://example.com/shapes/circle.js"`, der eine absolute URL ist.

```js
import { name as squareName, draw } from "./modules/shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

Import-Maps ermöglichen es Entwicklern, nahezu beliebigen Text im Modulspezifizierer zu verwenden; die Map liefert einen entsprechenden Wert, der den Text ersetzt, wenn der Modulspezifizierer aufgelöst wird.

### Bare Modules

Die untenstehende Import-Map definiert einen `imports`-Schlüssel, der eine "Modulspezifizierer-Map" mit den Eigenschaften `square` und `circle` enthält.

```html
<script type="importmap">
  {
    "imports": {
      "square": "./module/shapes/square.js",
      "circle": "https://example.com/shapes/circle.js"
    }
  }
</script>
```

Mit dieser Import-Map können wir dieselben Module wie oben importieren, jedoch mit "Bare Modules" in unseren Modulspezifizierern:

```js
import { name as squareName, draw } from "square";
import { name as circleName } from "circle";
```

### Pfadpräfix-Mapping

Ein Modulspezifizierer-Map-Schlüssel kann auch verwendet werden, um ein Pfadpräfix in einem Modulspezifizierer neu zuzuordnen.
Beachten Sie, dass in diesem Fall die Eigenschaft und der zugeordnete Pfad beide mit einem Schrägstrich (`/`) enden müssen.

```html
<script type="importmap">
  {
    "imports": {
      "shapes/": "./module/shapes/",
      "other-shapes/": "https://example.com/modules/shapes/"
    }
  }
</script>
```

Wir könnten dann ein Kreis-Modul wie gezeigt importieren.

```js
import { name as circleName } from "shapes/circle.js";
```

### Pfade im Modulspezifizierer-Map-Schlüssel

Modulspezifizierer-Schlüssel müssen keine einwortigen Namen ("bare Namen") sein.
Sie können auch Pfadseparatoren enthalten oder enden, oder absolute URLs sein, oder relative URL-Pfade, die mit `/`, `./` oder `../` beginnen.

```json
{
  "imports": {
    "modules/shapes/": "./module/src/shapes/",
    "modules/square": "./module/src/other/shapes/square.js",
    "https://example.com/modules/square.js": "./module/src/other/shapes/square.js",
    "../modules/shapes/": "/modules/shapes/"
  }
}
```

Wenn es mehrere Modulspezifizierer-Schlüssel in einer Modulspezifizierer-Map gibt, die übereinstimmen könnten, wird der spezifischste Schlüssel ausgewählt (d.h. der mit dem längeren Pfad/Wert).

Ein Modulspezifizierer von `./foo/../js/app.js` würde zu `./js/app.js` aufgelöst, bevor eine Übereinstimmung gesucht wird.
Das bedeutet, dass ein Modulspezifizierer-Schlüssel von `./js/app.js` auf den Modulspezifizierer zutreffen würde, auch wenn sie nicht exakt identisch sind.

### Modul-Spezifizierer-Maps mit Scopes

Sie können den `scopes`-Schlüssel verwenden, um Zuordnungen bereitzustellen, die nur verwendet werden, wenn das Modul enthaltende Skript einen bestimmten URL-Pfad enthält.
Wenn die URL des ladenden Skripts mit dem angegebenen Pfad übereinstimmt, wird die mit dem Scope verbundene Zuordnung verwendet.
Dies ermöglicht es, verschiedene Versionen des Moduls je nach dem den Import ausführenden Code zu verwenden.

Zum Beispiel wird die untenstehende Map nur die gesscope als verwendet, wenn das ladende Modul eine URL hat, die den Pfad "/modules/custom-shapes/" enthält.

```html
<script type="importmap">
  {
    "imports": {
      "square": "./module/shapes/square.js"
    },
    "scopes": {
      "/modules/custom-shapes/": {
        "square": "https://example.com/modules/shapes/square.js"
      }
    }
  }
</script>
```

Wenn mehrere Scopes mit der Referrer-URL übereinstimmen, wird der spezifischste Scope-Pfad verwendet (der Scope-Schlüsselname mit dem längsten Namen).
Der Browser fällt auf den nächsten spezifischsten Scope-Pfad zurück, wenn es keinen passenden Spezifizierer gibt, und so weiter, bis schließlich auf die Modulspezifizierer-Map im `imports`-Schlüssel zurückgegriffen wird.

### Metadaten-Map für Integrität

Sie können den `integrity`-Schlüssel verwenden, um Zuordnungen für [Metadaten zur Integrität](/de/docs/Web/Security/Subresource_Integrität#using_subresource_integrity) bereitzustellen.
Dies ermöglicht es Ihnen, die Integrität von dynamisch oder statisch importierten Modulen sicherzustellen.
`integrity` ermöglicht es Ihnen auch, einen Fallback für Top-Level- oder vorgeladene Module bereitzustellen, falls sie nicht bereits ein `integrity`-Attribut enthalten.

Die Map-Schlüssel repräsentieren Modul-URLs, die entweder absolut oder relativ sein können (begonnen mit `/`, `./` oder `../`).
Die Map-Werte repräsentieren Integritätsmetadaten, identisch mit denen, die in [`integrity`](/de/docs/Web/HTML/Element/script#integrity)-Attributwerten verwendet werden.

Zum Beispiel definiert die untenstehende Map Integritätsmetadaten für das `square.js`-Modul (direkt) und seinen bare specifier (transitiv, über den `imports`-Schlüssel).

```html
<script type="importmap">
  {
    "imports": {
      "square": "./module/shapes/square.js"
    },
    "integrity": {
      "./module/shapes/square.js": "sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
    }
  }
</script>
```

## Import-Map JSON-Repräsentation

Das Folgende ist eine "formale" Definition der Import-Map-JSON-Repräsentation.

Die Import-Map muss ein gültiges JSON-Objekt sein, das beliebige der optionalen Schlüssel `imports`, `scopes` und `integrity` definieren kann. Jeder Schlüsselwert muss ein Objekt sein, das leer sein darf.

- `imports` {{optional_inline}}

  - : Der Wert ist eine [Modul-Spezifizierer-Map](#module_specifier_map), die die Zuordnungen zwischen dem Modulspezifizierer-Text, der in einer `import`-Anweisung oder im `import()`-Operator erscheinen könnte, und dem Text, der es beim Auflösen des Spezifizierers ersetzt, bereitstellt.

    Dies ist die Fallback-Map, die nach passenden Modulspezifizierern durchsucht wird, wenn keine `scopes`-Pfad-URLs übereinstimmen oder wenn Modulspezifizierer-Maps in passenden `scopes`-Pfade keinen Schlüssel, der mit dem Modulspezifizierer übereinstimmt, enthalten.

    - `<module specifier map>`

      - : Eine "Modulspezifizierer-Map" ist ein gültiges JSON-Objekt, bei dem die _Schlüssel_ Text sind, der im Modulspezifizierer beim Importieren eines Moduls enthalten sein kann, und die entsprechenden _Werte_ die URLs oder Pfade sind, die diesen Text ersetzen, wenn der Modulspezifizierer zu einer Adresse aufgelöst wird.

        Das Modulspezifizierer-Map-JSON-Objekt hat folgende Anforderungen:

        - Keiner der Schlüssel darf leer sein.
        - Alle Werte müssen Zeichenketten sein, die entweder eine gültige absolute URL oder eine gültige URL-Zeichenkette definieren, die mit `/`, `./` oder `../` beginnt.
        - Wenn ein Schlüssel mit `/` endet, muss auch der entsprechende Wert mit `/` enden.
          Ein Schlüssel mit einem abschließenden `/` kann als Präfix verwendet werden, wenn Moduladressen gemappt (oder umgemappt) werden.
        - Die Reihenfolge der Objekteigenschaften ist irrelevant: Wenn mehrere Schlüssel mit dem Modulspezifizierer übereinstimmen können, wird der spezifischste Schlüssel verwendet (mit anderen Worten, ein Spezifizierer "olive/branch/" würde vor "olive/" gematcht werden).

- `integrity` {{optional_inline}}

  - : Definiert ein gültiges JSON-Objekt, wo die _Schlüssel_ Zeichenketten sind, die gültige absolute oder relative URLs (beginnend mit `/`, `./` oder `../`) enthalten,
    und die entsprechenden _Werte_ sind gültige [Integritätsmetadaten](/de/docs/Web/Security/Subresource_Integrität#using_subresource_integrity).

    Wenn die URL eines Skripts, das ein Modul importiert oder preloadet, mit einem Schlüssel im `integrity`-Objekt übereinstimmt, werden die entsprechenden Integritätsmetadaten auf die Fetch-Optionen des Skripts angewendet,
    es sei denn, sie haben bereits Integritätsmetadaten angehängt.

- `scopes` {{optional_inline}}

  - : Scopes definieren pfadspezifische [Modulspezifizierer-Maps](#module_specifier_map), die ermöglichen, dass die Auswahl der Map vom Pfad des die Module importierenden Codes abhängt.

    Das Scopes-Objekt ist ein gültiges JSON-Objekt, bei dem jede Eigenschaft ein `<scope key>` ist, was ein URL-Pfad ist, mit einem entsprechenden Wert, der eine `<module specifier map>` ist.

    Wenn die URL eines Skripts, das ein Modul importiert, mit einem `<scope key>`-Pfad übereinstimmt, wird der mit dem Schlüssel assoziierte `<module specifier map>`-Wert zuerst auf passende Spezifizierer überprüft.
    Wenn es mehrere übereinstimmende Scope-Schlüssel gibt, werden die Werte der spezifischsten/verschachtelten Scope-Pfade zuerst auf übereinstimmende Modulspezifizierer überprüft.
    Die Fallback-Modulspezifizierer-Map in `imports` wird verwendet, wenn es keine übereinstimmenden Modulspezifizierer-Schlüssel in irgendeiner der übereinstimmenden Scoped-Modulspezifizierer-Maps gibt.

    Beachten Sie, dass der Scope nicht ändert, wie eine Adresse aufgelöst wird; relative Adressen werden immer relativ zur Import-Map Basis-URL aufgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript-Module > Module mit Import-Maps importieren](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps)
- [Das `type`-Attribut von HTML-`<script>`-Elementen](/de/docs/Web/HTML/Element/script#type)
- [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import)
- [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import)
