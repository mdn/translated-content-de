---
title: <script type="importmap">
slug: Web/HTML/Element/script/type/importmap
l10n:
  sourceCommit: 783ffd9c1cf35421242e028a1b8743cf2b1918dd
---

{{HTMLSidebar}}

Der **`importmap`** Wert des [`type`](/de/docs/Web/HTML/Element/script/type)-Attributs des [`<script>`-Elements](/de/docs/Web/HTML/Element/script) gibt an, dass der Inhalt des Elements eine Importmap enthält.

Eine Importmap ist ein JSON-Objekt, das Entwicklern ermöglicht zu steuern, wie der Browser Modulspezifizierer beim Importieren von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) auflöst. Sie bietet eine Zuordnung zwischen dem Text, der als Modulspezifizierer in einer [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) oder dem [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) verwendet wird, und dem entsprechenden Wert, der den Text beim Auflösen des Spezifizierers ersetzt. Das JSON-Objekt muss dem [JSON-Repräsentationsformat der Importmap](#importmap-json-repräsentation) entsprechen.

Eine Importmap wird verwendet, um Modulspezifizierer in statischen und dynamischen Importen aufzulösen und muss daher deklariert und verarbeitet werden, bevor irgendwelche `<script>`-Elemente die Module mithilfe der in der Map deklarierten Spezifizierer importieren. Beachten Sie, dass die Importmap nur für Modulspezifizierer in der [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) oder dem [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) für in Dokumente geladene Module gilt; sie gilt nicht für den im `src`-Attribut eines `<script>`-Elements angegebenen Pfad oder für in Worker oder Worklets geladene Module.

Weitere Informationen finden Sie im Abschnitt [Importieren von Modulen mit Importmaps](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) im JavaScript-Module-Leitfaden.

## Syntax

```html
<script type="importmap">
  // JSON object defining import
</script>
```

Die Attribute `src`, `async`, `nomodule`, `defer`, `crossorigin`, `integrity` und `referrerpolicy` dürfen nicht angegeben werden.

Nur die erste Importmap im Dokument mit einer Inline-Definition wird verarbeitet; alle zusätzlichen Importmaps und externen Importmaps werden ignoriert.

### Ausnahmen

- `TypeError`
  - : Die Definition der Importmap ist kein JSON-Objekt, der `importmap`-Schlüssel ist definiert, aber sein Wert ist kein JSON-Objekt oder der `scopes`-Schlüssel ist definiert, aber sein Wert ist kein JSON-Objekt.

Browser generieren Konsolenwarnungen für andere Fälle, in denen das Importmap-JSON nicht dem [Importmap](#importmap-json-repräsentation)-Schema entspricht.

Ein [`error`-Ereignis](/de/docs/Web/API/HTMLElement/error_event) wird bei Skriptelementen mit `type="importmap"` ausgelöst, die nicht verarbeitet werden. Dies kann beispielsweise passieren, wenn das Laden von Modulen bereits begonnen hat, wenn eine Importmap verarbeitet wird, oder wenn mehrere Importmaps auf der Seite definiert sind.

## Beschreibung

Beim Importieren eines [JavaScript-Moduls](/de/docs/Web/JavaScript/Guide/Modules) haben sowohl die [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) als auch der [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) einen "Modulspezifizierer", der das zu importierende Modul angibt. Ein Browser muss in der Lage sein, diesen Spezifizierer in eine absolute URL aufzulösen, um das Modul zu importieren.

Zum Beispiel importieren die folgenden Anweisungen Elemente aus dem Modulspezifizierer `"./modules/shapes/square.js"`, der ein Pfad relativ zur Basis-URL des Dokuments ist, und dem Modulspezifizierer `"https://example.com/shapes/circle.js"`, der eine absolute URL ist.

```js
import { name as squareName, draw } from "./modules/shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

Importmaps ermöglichen es Entwicklern, (fast) jeden Text, den sie wünschen, im Modulspezifizierer zu verwenden; die Map liefert einen entsprechenden Wert, der den Text ersetzt, wenn der Modulspezifizierer aufgelöst wird.

### Bare Modules

Die folgende Importmap definiert einen `imports`-Schlüssel, der eine "Modulspezifizierer-Map" mit den Eigenschaften `square` und `circle` enthält.

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

Mit dieser Importmap können wir dieselben Module wie oben importieren, jedoch mit "Bare Modules" in unseren Modulspezifizierern:

```js
import { name as squareName, draw } from "square";
import { name as circleName } from "circle";
```

### Pfadpräfixe zuweisen

Ein Modulspezifizierer-Map-Schlüssel kann auch verwendet werden, um ein Pfadpräfix in einem Modulspezifizierer neu zuzuordnen. Beachten Sie, dass in diesem Fall die Eigenschaft und der zugeordnete Pfad beide mit einem Schrägstrich (`/`) enden müssen.

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

Modulspezifizierer-Schlüssel müssen keine Einzelwortnamen ("bare Namen") sein. Sie können auch Pfadtrennzeichen enthalten oder mit ihnen enden, absolute URLs sein oder relative URLs sein, die mit `/`, `./` oder `../` beginnen.

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

Wenn in einer Modulspezifizierer-Map mehrere Modulspezifizierer-Schlüssel möglicherweise passen, wird der spezifischste Schlüssel ausgewählt (d.h. derjenige mit dem längeren Pfad/Wert).

Ein Modulspezifizierer von `./foo/../js/app.js` würde zu `./js/app.js` aufgelöst, bevor er übereinstimmt. Dies bedeutet, dass ein Modulspezifizierer-Schlüssel von `./js/app.js` mit dem Modulspezifizierer übereinstimmen würde, obwohl sie nicht genau gleich sind.

### Modulspezifizierer-Maps mit Bereich

Sie können den `scopes`-Schlüssel verwenden, um Zuordnungen bereitzustellen, die nur verwendet werden, wenn das Modul von einem Skript importiert wird, das einen bestimmten URL-Pfad enthält. Wenn die URL des ladenden Skripts mit dem bereitgestellten Pfad übereinstimmt, wird die mit dem Bereich verbundene Zuordnung verwendet. Dies ermöglicht die Verwendung unterschiedlicher Versionen des Moduls, abhängig davon, welcher Code den Import ausführt.

Zum Beispiel wird die folgende Map die Bereichszuordnung nur verwenden, wenn das ladende Modul eine URL hat, die den Pfad: "/modules/custom-shapes/" enthält.

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

Wenn mehrere Scopes mit der Referrer-URL übereinstimmen, wird der spezifischste Scope-Pfad verwendet (der Scope-Schlüsselname mit dem längsten Namen). Der Browser fällt auf den nächstspezifischen Scoped-Pfad zurück, wenn kein Spezifizierer übereinstimmt, und so weiter, bis schließlich auf die Modulspezifizierer-Map im `imports`-Schlüssel zurückgegriffen wird.

### Integritätsmetadaten-Map

Der `integrity`-Schlüssel kann verwendet werden, um Zuordnungen für Modul-[Integritätsmetadaten](/de/docs/Web/Security/Subresource_Integrity#using_subresource_integrity) bereitzustellen. Dies ermöglicht es Ihnen, die Integrität von dynamisch oder statisch importierten Modulen sicherzustellen. `integrity` ermöglicht es Ihnen auch, eine Rückfallebene für Top-Level- oder vorgeladene Module bereitzustellen, falls diese nicht bereits ein `integrity`-Attribut enthalten.

Die Map-Schlüssel repräsentieren Modul-URLs, die absolut oder relativ sein können (beginnend mit `/`, `./` oder `../`). Die Map-Werte repräsentieren Integritätsmetadaten, identisch mit denen, die in [`integrity`](/de/docs/Web/HTML/Element/script#integrity)-Attributwerten verwendet werden.

Zum Beispiel definiert die folgende Map Integritätsmetadaten für das `square.js`-Modul (direkt) und seine Bare-Spezifizierer (transitiv, über den `imports`-Schlüssel).

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

## Importmap-JSON-Repräsentation

Das Folgende ist eine "formale" Definition der JSON-Repräsentation der Importmap.

Die Importmap muss ein gültiges JSON-Objekt sein, das höchstens zwei optionale Schlüsseldefinieren: `imports` und `scopes`. Jeder Schlüsselwert muss ein Objekt sein, das leer sein kann.

- `imports` {{optional_inline}}

  - : Der Wert ist eine [Modulspezifizierer-Map](#module_specifier_map), die die Zuordnungen zwischen dem Modulspezifizierer-Text bietet, der möglicherweise in einer `import`-Anweisung oder `import()`-Operator erscheint, und dem Text, der ihn ersetzt, wenn der Spezifizierer aufgelöst wird.

    Dies ist die Rückfall-Map, die nach passenden Modulspezifizierern durchsucht wird, wenn keine `scopes`-Pfad-URLs übereinstimmen oder wenn Modulspezifizierer-Maps in passenden `scopes`-Pfaden keinen Schlüssel enthalten, der mit dem Modulspezifizierer übereinstimmt.

    - `<module specifier map>`

      - : Eine "Modulspezifizierer-Map" ist ein gültiges JSON-Objekt, bei dem die _Schlüssel_ Texte sind, die im Modulspezifizierer beim Importieren eines Moduls vorhanden sein können, und die entsprechenden _Werte_ sind URL oder Pfade, die diesen Text ersetzen, wenn der Modulspezifizierer zu einer Adresse aufgelöst wird.

        Das Modulspezifizierer-Map JSON-Objekt hat die folgenden Anforderungen:

        - Keiner der Schlüssel darf leer sein.
        - Alle Werte müssen Zeichenfolgen sein, die entweder eine gültige absolute URL oder eine gültige URL-Zeichenfolge definieren, die mit `/`, `./` oder `../` beginnt.
        - Wenn ein Schlüssel mit `/` endet, dann muss auch der entsprechende Wert mit `/` enden.
          Ein Schlüssel mit einem nachgestellten `/` kann als Präfix verwendet werden, um (oder um) Module-Adressen zuzuordnen (oder neu zuzuordnen).
        - Die Reihenfolge der Objekt-Eigenschaften ist irrelevant: Wenn mehrere Schlüssel mit dem Modulspezifizierer übereinstimmen können, wird der spezifischste Schlüssel verwendet (mit anderen Worten, ein Spezifizierer "olive/branch/" würde vor "olive/" übereinstimmen).

- `integrity` {{optional_inline}}

  - : Definiert ein gültiges JSON-Objekt, bei dem die _Schlüssel_ Zeichenfolgen sind, die gültige absolute oder relative URLs enthalten (beginnend mit `/`, `./` oder `../`),
    und die entsprechenden _Werte_ sind gültige [Integritätsmetadaten](/de/docs/Web/Security/Subresource_Integrity#using_subresource_integrity).

    Wenn die URL eines Skripts, das ein Modul importiert oder vorlädt, mit einem Schlüssel im `integrity`-Objekt übereinstimmt, werden die entsprechenden Integritätsmetadaten auf die Fetch-Optionen des Skriptes angewendet,
    es sei denn, sie haben bereits Integritätsmetadaten an sie angehängt.

- `scopes` {{optional_inline}}

  - : Scopes definieren pfadspezifische [Modulspezifizierer-Maps](#module_specifier_map), die es ermöglichen, dass die Wahl der Map vom Pfad des Codes abhängt, der das Modul importiert.

    Das Scopes-Objekt ist ein gültiges JSON-Objekt, bei dem jede Eigenschaft ein `<scope key>` ist, bei dem es sich um einen URL-Pfad handelt, der einen entsprechenden Wert hat der eine `<module specifier map>` ist.

    Wenn die URL eines Skripts, das ein Modul importiert, mit einem `<scope key>`-Pfad übereinstimmt, wird der `<module specifier map>`-Wert, der mit dem Schlüssel verbunden ist, zuerst auf übereinstimmende Spezifizierer überprüft.
    Wenn es mehrere passende Scope-Schlüssel gibt, werden die Werte, die mit den spezifischsten/verschachtelten Scope-Pfaden verbunden sind, zuerst auf übereinstimmende Modulspezifizierer überprüft.
    Die Rückfall-Modulspezifizierer-Map in `imports` wird verwendet, wenn es keine passenden Modulspezifizierer-Schlüssel in einer der passenden gescopterten Modulspezifizierer-Maps gibt.

    Beachten Sie, dass der Scope nicht beeinflusst, wie eine Adresse aufgelöst wird; relative Adressen werden immer zur Basis-URL der Importmap aufgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript-Module > Importieren von Modulen mithilfe von Importmaps](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps)
- [Das `type`-Attribut von HTML-`<script>`-Elementen](/de/docs/Web/HTML/Element/script#type)
- [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import)
- [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import)
