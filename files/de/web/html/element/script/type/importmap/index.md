---
title: <script type="importmap">
slug: Web/HTML/Element/script/type/importmap
l10n:
  sourceCommit: fbcfa61e1612a91156fa4e6bb7b8ca2b6991ae1c
---

{{HTMLSidebar}}

Der **`importmap`**-Wert des [`type`](/de/docs/Web/HTML/Element/script/type)-Attributs des [`<script>`-Elements](/de/docs/Web/HTML/Element/script) gibt an, dass der Inhalt des Elements eine Importmap enthält.

Eine Importmap ist ein JSON-Objekt, das es Entwicklern ermöglicht, zu steuern, wie der Browser Modulspezifizierer beim Importieren von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) auflöst.
Sie stellt eine Zuordnung zwischen dem Text dar, der als Modulspezifizierer in einer [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) oder im [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) verwendet wird, und dem entsprechenden Wert, der den Text beim Auflösen des Spezifizierers ersetzen wird.
Das JSON-Objekt muss dem [Importmap-JSON-Darstellungsformat](#importmap_json-darstellung) entsprechen.

Eine Importmap wird verwendet, um Modulspezifizierer in statischen und dynamischen Importen aufzulösen und muss daher deklariert und verarbeitet werden, bevor irgendwelche `<script>`-Elemente, die Module mit den in der Map deklarierten Spezifizierern importieren, geladen werden.
Beachten Sie, dass die Importmap nur auf Modulspezifizierer in der [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) oder im [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) für Module angewendet wird, die in Dokumente geladen werden; sie gilt nicht für den im `src`-Attribut eines `<script>`-Elements angegebenen Pfad oder für Module, die in Worker oder Worklets geladen werden.

Weitere Informationen finden Sie im Abschnitt [Module mit Importmaps importieren](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) im JavaScript-Module-Leitfaden.

## Syntax

```html
<script type="importmap">
  // JSON-Objekt, das den Import definiert
</script>
```

Die Attribute `src`, `async`, `nomodule`, `defer`, `crossorigin`, `integrity` und `referrerpolicy` dürfen nicht angegeben werden.

Nur die erste Importmap im Dokument mit einer Inline-Definition wird verarbeitet; alle zusätzlichen Importmaps und externen Importmaps werden ignoriert.

### Ausnahmen

- `TypeError`
  - : Die Importmap-Definition ist kein JSON-Objekt, der `importmap`-Schlüssel ist definiert, aber sein Wert ist kein JSON-Objekt, oder der `scopes`-Schlüssel ist definiert, aber sein Wert ist kein JSON-Objekt.

Browser generieren Konsolenwarnungen für andere Fälle, in denen das Importmap-JSON nicht dem [Importmap](#importmap_json-darstellung)-Schema entspricht.

Ein [`error`-Ereignis](/de/docs/Web/API/HTMLElement/error_event) wird bei Skriptelementen mit `type="importmap"` ausgelöst, die nicht verarbeitet werden.
Dies kann beispielsweise auftreten, wenn das Laden von Modulen bereits begonnen hat, wenn eine Importmap verarbeitet wird, oder wenn mehrere Importmaps auf der Seite definiert sind.

## Beschreibung

Beim Importieren eines [JavaScript-Moduls](/de/docs/Web/JavaScript/Guide/Modules) haben sowohl die [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) als auch der [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) einen "Modulspezifizierer", der das zu importierende Modul angibt.
Ein Browser muss in der Lage sein, diesen Spezifizierer in eine absolute URL aufzulösen, um das Modul zu importieren.

Zum Beispiel importieren die folgenden Anweisungen Elemente aus dem Modulspezifizierer `"./modules/shapes/square.js"`, der ein relativer Pfad zur Basis-URL des Dokuments ist, und dem Modulspezifizierer `"https://example.com/shapes/circle.js"`, der eine absolute URL ist.

```js
import { name as squareName, draw } from "./modules/shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

Importmaps ermöglichen es Entwicklern, (fast) jeden Text anzugeben, den sie im Modulspezifizierer möchten; die Map stellt einen entsprechenden Wert bereit, der den Text ersetzt, wenn der Modulspezifizierer aufgelöst wird.

### Bare-Module

Die Importmap unten definiert einen `imports`-Schlüssel, der eine "Modulspezifizierer-Map" mit den Eigenschaften `square` und `circle` enthält.

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

Mit dieser Importmap können wir die gleichen Module wie oben importieren, jedoch unter Verwendung von "Bare-Modules" in unseren Modulspezifizierern:

```js
import { name as squareName, draw } from "square";
import { name as circleName } from "circle";
```

### Pfadpräfixe abbilden

Ein Schlüsselkönnte in einer Modulspezifizierer-Map kann auch verwendet werden, um ein Pfadpräfix in einem Modulspezifizierer neu zuzuordnen.
Beachten Sie, dass in diesem Fall sowohl die Eigenschaft als auch der zugeordnete Pfad mit einem Schrägstrich (`/`) enden müssen.

```html
<script type="importmap">
  {
    "imports": {
      "shapes/": "./module/shapes/",
      "othershapes/": "https://example.com/modules/shapes/"
    }
  }
</script>
```

Wir könnten dann ein Kreismodul wie gezeigt importieren.

```js
import { name as circleName } from "shapes/circle.js";
```

### Pfade in der Modulspezifizierer-Map

Modulspezifizierer-Schlüssel müssen keine einzelnen Wortnamen ("nackte Namen") sein.
Sie können auch Trennzeichen oder Endungen mit Pfadtrennzeichen enthalten bzw. absolute URLs oder relative URL-Pfade sein, die mit `/`, `./` oder `../` beginnen.

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

Wenn es mehrere Modulspezifizierer-Schlüssel in einer Modulspezifizierer-Map gibt, die passen könnten, wird der spezifischste Schlüssel ausgewählt (d. h. der mit dem längeren Pfad/Wert).

Ein Modulspezifizierer von `./foo/../js/app.js` würde auf `./js/app.js` aufgelöst werden, bevor er zugeordnet wird.
Das bedeutet, dass ein Modulspezifizierer-Schlüssel von `./js/app.js` den Modulspezifizierer treffen würde, auch wenn sie nicht genau gleich sind.

### Kontextbezogene Modulspezifizierer-Maps

Sie können den `scopes`-Schlüssel verwenden, um Zuordnungen bereitzustellen, die nur verwendet werden, wenn das Skript, das das Modul importiert, einen bestimmten URL-Pfad enthält.
Wenn die URL des ladenden Skripts dem angegebenen Pfad entspricht, wird die mit dem Scope verbundene Zuordnung verwendet.
Dies ermöglicht es, unterschiedliche Versionen des Moduls zu verwenden, abhängig davon, welcher Code den Import durchführt.

Zum Beispiel wird die unten stehende Map nur die kontextbezogene Map verwenden, wenn das ladende Modul eine URL enthält, die den Pfad "/modules/customshapes/" enthält.

```html
<script type="importmap">
  {
    "imports": {
      "square": "./module/shapes/square.js"
    },
    "scopes": {
      "/modules/customshapes/": {
        "square": "https://example.com/modules/shapes/square.js"
      }
    }
  }
</script>
```

Wenn mehrere Scopes mit der Referrer-URL übereinstimmen, wird der spezifischste Scope-Pfad verwendet (der Scopeschlüssel mit dem längsten Namen).
Der Browser greift auf den nächst spezifischeren kontextbezogenen Pfad zurück, wenn kein passender Spezifizierer vorhanden ist, und so weiter, schließlich greift er auf die Modulspezifizierer-Map im `imports`-Schlüssel zurück.

### Integritätsmetadaten-Map

Sie können den `integrity`-Schlüssel verwenden, um eine Zuordnung für [Integritätsmetadaten](/de/docs/Web/Security/Subresource_Integrity#using_subresource_integrity) bereitzustellen.
Dies ermöglicht Ihnen sicherzustellen, dass die Integrität von dynamisch oder statisch importierten Modulen gewährleistet ist.
`integrity` ermöglicht es Ihnen auch, einen Fallback für Top-Level- oder vorab geladene Module bereitzustellen, falls sie nicht bereits ein `integrity`-Attribut enthalten.

Die Map-Schlüssel stellen Modul-URLs dar, die absolut oder relativ (beginnend mit `/`, `./` oder `../`) sein können.
Die Map-Werte stellen Integritätsmetadaten dar, die identisch mit denen sind, die in [`integrity`](/de/docs/Web/HTML/Element/script#integrity)-Attributwerten verwendet werden.

Zum Beispiel definiert die unten stehende Map Integritätsmetadaten für das Modul `square.js` (direkt) und seinen nackten Spezifizierer (transitiv, über den `imports`-Schlüssel).

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

## Importmap JSON-Darstellung

Das Folgende ist eine "formale" Definition der Importmap-JSON-Darstellung.

Die Importmap muss ein gültiges JSON-Objekt sein, das höchstens zwei optionale Schlüssel definieren kann: `imports` und `scopes`. Jeder Schlüssel muss ein Objekt sein, das leer sein kann.

- `imports` {{optional_inline}}

  - : Der Wert ist eine [Modulspezifizierer-Map](#module_specifier_map), die die Zuordnungen zwischen Modulspezifizierertext, der in einer `import`-Anweisung oder im `import()`-Operator auftreten könnte, und dem Text bereitstellt, der ihn ersetzt, wenn der Spezifizierer aufgelöst wird.

    Dies ist die Fallback-Map, die nach übereinstimmenden Modulspezifizierern durchsucht wird, wenn keine `scopes`-Pfad-URLs übereinstimmen oder wenn die Modulspezifizierer-Maps in den übereinstimmenden `scopes`-Pfaden keinen Schlüssel enthalten, der dem Modulspezifizierer entspricht.

    - `<module specifier map>`

      - : Eine "Modulspezifizierer-Map" ist ein gültiges JSON-Objekt, bei dem die _Schlüssel_ Texte sind, die im Modulspezifizierer beim Importieren eines Moduls vorhanden sein können, und die entsprechenden _Werte_ die URLs oder Pfade sind, die diesen Text ersetzen werden, wenn der Modulspezifizierer zu einer Adresse aufgelöst wird.

        Das Modulspezifizierer-Map-JSON-Objekt hat die folgenden Anforderungen:

        - Keiner der Schlüssel darf leer sein.
        - Alle Werte müssen Zeichenfolgen sein, die entweder eine gültige absolute URL oder eine gültige URL-Zeichenfolge darstellen, die mit `/`, `./` oder `../` beginnt.
        - Wenn ein Schlüssel mit `/` endet, dann muss der entsprechende Wert ebenfalls mit `/` enden.
          Ein Schlüssel mit einem abschließenden `/` kann als Präfix zur Zuordnung (oder Neuzuordnung) von Modul-Adressen verwendet werden.
        - Die Reihenfolge der Objekteigenschaften ist unerheblich: Wenn mehrere Schlüssel mit dem Modulspezifizierer übereinstimmen können, wird der spezifischste Schlüssel verwendet (mit anderen Worten, ein Spezifizierer "olive/branch/" würde vor "olive/" übereinstimmen).

- `integrity` {{optional_inline}}

  - : Definiert ein gültiges JSON-Objekt, bei dem die _Schlüssel_ Zeichenfolgen sind, die gültige absolute oder relative URLs (beginnend mit `/`, `./` oder `../`) enthalten,
    und die entsprechenden _Werte_ sind gültige [Integritätsmetadaten](/de/docs/Web/Security/Subresource_Integrity#using_subresource_integrity).

    Wenn die URL eines Skripts, das ein Modul importiert oder vorlädt, mit einem Schlüssel im `integrity`-Objekt übereinstimmt, werden die entsprechenden Integritätsmetadaten auf die Fetch-Optionen des Skripts angewendet,
    es sei denn, sie haben bereits Integritätsmetadaten zugeordnet bekommen.

- `scopes` {{optional_inline}}

  - : Scopes definieren pfadspezifische [Modulspezifizierer-Maps](#module_specifier_map), die es ermöglichen, die Zuordnung abhängig vom Pfad des importierenden Codes zu wählen.

    Das Scopes-Objekt ist ein gültiges JSON-Objekt, bei dem jede Eigenschaft ein `<scope key>` ist, das ein URL-Pfad ist, mit einem entsprechenden Wert, der eine `<module specifier map>` ist.

    Wenn die URL eines Skripts, das ein Modul importiert, mit einem `<scope key>`-Pfad übereinstimmt, wird der `<module specifier map>`-Wert, der dem Schlüssel zugeordnet ist, zuerst auf übereinstimmende Spezifizierer überprüft.
    Wenn es mehrere übereinstimmende Scopeschlüssel gibt, dann werden die Werte, die den spezifischsten/verschachtelten Scopes-Pfaden zugeordnet sind, zuerst auf übereinstimmende Modulspezifizierer überprüft.
    Die Fallback-Modulspezifizierer-Map in `imports` wird verwendet, wenn keine übereinstimmenden Modulspezifiziererschlüssel in einer der übereinstimmenden kontextbezogenen Modulspezifizierer-Maps vorhanden sind.

    Beachten Sie, dass der Scope nicht ändert, wie eine Adresse aufgelöst wird; relative Adressen werden immer zur Basis-URL der Importmap aufgelöst.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [JavaScript-Module > Module mit Importmaps importieren](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps)
- [Das `type`-Attribut von HTML-`<script>`-Elementen](/de/docs/Web/HTML/Element/script#type)
- [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import)
- [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import)
