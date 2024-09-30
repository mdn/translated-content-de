---
title: <script type="importmap">
slug: Web/HTML/Element/script/type/importmap
l10n:
  sourceCommit: fbcfa61e1612a91156fa4e6bb7b8ca2b6991ae1c
---

{{HTMLSidebar}}

Der **`importmap`**-Wert des [`type`](/de/docs/Web/HTML/Element/script/type)-Attributs des [`<script>`-Elements](/de/docs/Web/HTML/Element/script) gibt an, dass der Hauptteil des Elements eine Importkarte enthält.

Eine Importkarte ist ein JSON-Objekt, das Entwicklern ermöglicht, zu steuern, wie der Browser Modulspezifizierer beim Importieren von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) auflöst.
Sie stellt eine Zuordnung zwischen dem Text, der im Modulspezifizierer in einer [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) oder einem [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) verwendet wird, und dem entsprechenden Wert bereit, der den Text beim Auflösen des Spezifizierers ersetzt.
Das JSON-Objekt muss dem [Importkarten-JSON-Darstellungsformat](#json-darstellung_der_importkarte) entsprechen.

Eine Importkarte wird verwendet, um Modulspezifizierer in statischen und dynamischen Importen aufzulösen und muss daher deklariert und verarbeitet werden, bevor irgendein `<script>`-Element, das Module mit in der Karte deklarierten Spezifizierern importiert.
Beachten Sie, dass die Importkarte nur auf Modulspezifizierer in der [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) oder dem [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) für Module angewendet wird, die in Dokumente geladen werden; sie wird nicht auf den im `src`-Attribut eines `<script>`-Elements angegebenen Pfad oder auf Module angewendet, die in Worker oder Worklets geladen werden.

Weitere Informationen finden Sie im Abschnitt [Module mit Importkarten importieren](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) im Leitfaden für JavaScript-Module.

## Syntax

```html
<script type="importmap">
  // JSON object defining import
</script>
```

Die `src`, `async`, `nomodule`, `defer`, `crossorigin`, `integrity` und `referrerpolicy` Attribute dürfen nicht angegeben werden.

Nur die erste Importkarte im Dokument mit einer Inline-Definition wird verarbeitet; alle zusätzlichen Importkarten und externen Importkarten werden ignoriert.

### Ausnahmen

- `TypeError`
  - : Die Definition der Importkarte ist kein JSON-Objekt, der `importmap`-Schlüssel ist definiert, aber sein Wert ist kein JSON-Objekt, oder der `scopes`-Schlüssel ist definiert, aber sein Wert ist kein JSON-Objekt.

Browser generieren Konsolenwarnungen für andere Fälle, in denen das Importkarten-JSON nicht dem [Importkarten-](#json-darstellung_der_importkarte)Schema entspricht.

Ein [`error`-Ereignis](/de/docs/Web/API/HTMLElement/error_event) wird in Skriptelementen mit `type="importmap"` ausgelöst, die nicht verarbeitet werden.
Dies kann beispielsweise auftreten, wenn das Laden des Moduls bereits begonnen hat, wenn eine Importkarte verarbeitet wird, oder wenn mehrere Importkarten auf der Seite definiert sind.

## Beschreibung

Beim Importieren eines [JavaScript-Moduls](/de/docs/Web/JavaScript/Guide/Modules) haben sowohl die [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) als auch der [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) einen "Modulspezifizierer", der angibt, welches Modul importiert werden soll.
Ein Browser muss in der Lage sein, diesen Spezifizierer in eine absolute URL aufzulösen, um das Modul zu importieren.

Zum Beispiel importieren die folgenden Anweisungen Elemente aus dem Modulspezifizierer `"./modules/shapes/square.js"`, der ein Pfad relativ zur Basis-URL des Dokuments ist, und dem Modulspezifizierer `"https://example.com/shapes/circle.js"`, das eine absolute URL ist.

```js
import { name as squareName, draw } from "./modules/shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

Importkarten erlauben es Entwicklern, (fast) jeden Text im Modulspezifizierer zu verwenden; die Karte stellt einen entsprechenden Wert bereit, der den Text ersetzt, wenn der Modulspezifizierer aufgelöst wird.

### Bare-Module

Die untenstehende Importkarte definiert einen `imports`-Schlüssel, der eine "Modulspezifiziererkartierung" mit den Eigenschaften `square` und `circle` hat.

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

Mit dieser Importkarte können wir dieselben Module wie oben, aber mit "bare module" in unseren Modulspezifizierern, importieren:

```js
import { name as squareName, draw } from "square";
import { name as circleName } from "circle";
```

### Pfadpräfixe zuordnen

Ein Modulspezifizierer-Schlüssel kann auch verwendet werden, um ein Pfadpräfix in einem Modulspezifizierer neu zuzuordnen.
Beachten Sie, dass in diesem Fall sowohl die Eigenschaft als auch der zugeordnete Pfad ein nachgestelltes Schrägstrich (`/`) haben müssen.

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

Wir könnten dann ein Kreis-Modul wie folgt importieren.

```js
import { name as circleName } from "shapes/circle.js";
```

### Pfade in den Modulspezifizierer-Schlüsseln

Modulspezifizierer-Schlüssel müssen keine einzelnen Wortnamen sein ("bare Namen").
Sie können auch Pfadtrennzeichen enthalten oder mit ihnen enden, oder absolute URLs sein, oder relative URL-Pfade, die mit `/`, `./`, oder `../` beginnen.

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

Wenn es mehrere Modulspezifizierer-Schlüssel in einer Modulspezifiziererkartierung gibt, die möglicherweise übereinstimmen, wird der spezifischste Schlüssel ausgewählt (d. h. der mit dem längeren Pfad/Wert).

Ein Modulspezifizierer von `./foo/../js/app.js` würde zu `./js/app.js` aufgelöst, bevor er abgeglichen wird.
Das bedeutet, dass ein Modulspezifizierer-Schlüssel von `./js/app.js` den Modulspezifizierer abgleichen würde, obwohl sie nicht genau gleich sind.

### Gezielte Modulspezifiziererkarten

Sie können den `scopes`-Schlüssel verwenden, um Zuordnungen bereitzustellen, die nur verwendet werden, wenn das Skript, das das Modul importiert, einen bestimmten URL-Pfad enthält.
Wenn die URL des ladenden Skripts mit dem angegebenen Pfad übereinstimmt, wird die mit dem Scope assoziierte Zuordnung verwendet.
Dies ermöglicht es, je nach Code, der den Import durchführt, unterschiedliche Versionen des Moduls zu verwenden.

Die untenstehende Karte wird beispielsweise nur die gezielte Karte verwenden, wenn das ladende Modul eine URL hat, die den Pfad: "/modules/customshapes/" enthält.

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

Wenn mehrere Scopes mit der Referrer-URL übereinstimmen, wird der spezifischste Scope-Pfad verwendet (der Scope-Schlüsselname mit dem längsten Namen).
Der Browser fällt auf den nächst spezifischen gezielten Pfad zurück, wenn es keinen übereinstimmenden Spezifizierer gibt, und so weiter, bis schließlich auf die Modulspezifiziererkartierung im `imports`-Schlüssel zurückgegriffen wird.

### Integritätsmetadatenkarte

Sie können den `integrity`-Schlüssel verwenden, um eine Zuordnung für Modul-[Integritätsmetadaten](/de/docs/Web/Security/Subresource_Integrity#using_subresource_integrity) bereitzustellen.
Dies ermöglicht es Ihnen, die Integrität von dynamisch oder statisch importierten Modulen sicherzustellen.
`integrity` ermöglicht es Ihnen auch, ein Fallback für Top-Level oder vorab geladenen Module bereitzustellen, falls diese nicht bereits ein `integrity`-Attribut enthalten.

Die Kartenschlüssel repräsentieren Modul-URLs, die absolut oder relativ sein können (beginnend mit `/`, `./`, oder `../`).
Die Kartenwerte repräsentieren Integritätsmetadaten, identisch mit denen, die in [`integrity`](/de/docs/Web/HTML/Element/script#integrity)-Attributwerten verwendet werden.

Zum Beispiel, die untenstehende Karte definiert Integritätsmetadaten für das `square.js`-Modul (direkt) und seinen "bare"-Spezifizierer (transitiv, über den `imports`-Schlüssel).

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

## JSON-Darstellung der Importkarte

Folgendes ist eine "formale" Definition der JSON-Darstellung der Importkarte.

Die Importkarte muss ein gültiges JSON-Objekt sein, das höchstens zwei optionale Schlüssel definieren kann: `imports` und `scopes`. Der Wert jedes Schlüssels muss ein Objekt sein, das leer sein kann.

- `imports` {{optional_inline}}

  - : Der Wert ist eine [Modulspezifiziererkartierung](#module_specifier_map), die die Zuordnungen zwischen dem Modulspezifizierer-Text, der in einer `import`-Anweisung oder einem `import()`-Operator erscheinen könnte, und dem Text bereitstellt, der ihn beim Auflösen des Spezifizierers ersetzen wird.

    Dies ist die Fallback-Karte, die nach übereinstimmenden Modulspezifizierern durchsucht wird, wenn keine `scopes`-Pfad-URLs übereinstimmen oder wenn Modulspezifizierer-Karten in den übereinstimmenden `scopes`-Pfaden keinen Schlüssel enthalten, der mit dem Modulspezifizierer übereinstimmt.

    - `<module specifier map>`

      - : Eine "Modulspezifiziererkartierung" ist ein gültiges JSON-Objekt, bei dem die _Schlüssel_ Texte sind, die im Modulspezifizierer beim Importieren eines Moduls vorkommen können, und die entsprechenden _Werte_ die URLs oder Pfade sind, die diesen Text ersetzen, wenn der Modulspezifizierer in eine Adresse aufgelöst wird.

        Das JSON-Objekt der Modulspezifiziererkartierung hat folgende Anforderungen:

        - Keiner der Schlüssel darf leer sein.
        - Alle Werte müssen Strings sein, die entweder eine gültige absolute URL oder eine gültige URL-String definieren, die mit `/`, `./`, oder `../` beginnt.
        - Wenn ein Schlüssel mit `/` endet, muss der entsprechende Wert ebenfalls mit `/` enden.
          Ein Schlüssel mit einem nachgestellten `/` kann als Präfix für das Abbilden (oder Neu-Abbilden) von Moduladressen verwendet werden.
        - Die Reihenfolge der Objekteigenschaften ist irrelevant: Wenn mehrere Schlüssel mit dem Modulspezifizierer übereinstimmen können, wird der spezifischste Schlüssel verwendet (mit anderen Worten, ein Spezifizierer "olive/branch/" würde vor "olive/" übereinstimmen).

- `integrity` {{optional_inline}}

  - : Definiert ein gültiges JSON-Objekt, bei dem die _Schlüssel_ Zeichenfolgen mit gültigen absoluten oder relativen URLs (beginnend mit `/`, `./`, oder `../`) sind,
    und die entsprechenden _Werte_ gültige [Integritätsmetadaten](/de/docs/Web/Security/Subresource_Integrity#using_subresource_integrity) sind.

    Wenn die URL eines Skripts, das ein Modul importiert oder vorlädt, mit einem Schlüssel im `integrity`-Objekt übereinstimmt, werden die entsprechenden Integritätsmetadaten auf die Abrufoptionen des Skripts angewendet,
    sofern diese nicht bereits über Integritätsmetadaten verfügen.

- `scopes` {{optional_inline}}

  - : Scopes definieren pfadspezifische [Modulspezifiziererkaten](#module_specifier_map), die es erlauben, die Wahl der Karte vom Pfad des Codes, der das Modul importiert, abhängig zu machen.

    Das Scopes-Objekt ist ein gültiges JSON-Objekt, bei dem jede Eigenschaft ein `<scope key>` ist, ein URL-Pfad, mit einem entsprechenden Wert, der eine `<module specifier map>` ist.

    Wenn die URL eines Skripts, das ein Modul importiert, mit einem `<scope key>`-Pfad übereinstimmt, wird der `<module specifier map>`-Wert, der mit dem Schlüssel verbunden ist, zuerst auf übereinstimmende Spezifizierer geprüft.
    Wenn es mehrere übereinstimmende Scopeschlüssel gibt, werden die Werte, die mit den spezifischsten/verschachtelten Scope-Pfaden verbunden sind, zuerst auf übereinstimmende Modulspezifizierer geprüft.
    Die Fallback-Modulspezifiziererkartierung in `imports` wird verwendet, wenn es keine übereinstimmenden Modulspezifiziererschlüssel in einer der übereinstimmenden gezielten Modulspezifiziererkarten gibt.

    Beachten Sie, dass der Scope nicht ändert, wie eine Adresse aufgelöst wird; relative Adressen werden immer zur Basis-URL der Importkarte aufgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript-Module > Module mit Importkarten importieren](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps)
- [Das `type`-Attribut von `<script>`-Elementen in HTML](/de/docs/Web/HTML/Element/script#type)
- [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import)
- [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import)
