---
title: <script type="importmap">
slug: Web/HTML/Reference/Elements/script/type/importmap
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Der **`importmap`** Wert des [`type`]-Attributes(/de/docs/Web/HTML/Reference/Elements/script/type) des [`<script>` Elements](/de/docs/Web/HTML/Reference/Elements/script) zeigt an, dass der Inhalt des Elements eine Import-Map enthält.

Eine Import-Map ist ein JSON-Objekt, das es Entwicklern ermöglicht, zu steuern, wie der Browser Modul-Spezifizierer beim Importieren von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) auflöst.
Es bietet eine Zuordnung zwischen dem Text, der als Modul-Spezifizierer in einer [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) oder einem [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) verwendet wird, und dem entsprechenden Wert, der den Text beim Auflösen des Spezifizierers ersetzt.
Das JSON-Objekt muss dem [Import-Map JSON-Darstellungsformat](#import-map_json-darstellung) entsprechen.

Eine Import-Map wird verwendet, um Modul-Spezifizierer in statischen und dynamischen Imports aufzulösen, und muss daher deklariert und verarbeitet werden, bevor irgendwelche `<script>`-Elemente, die Module unter Verwendung der in der Map deklarierten Spezifizierer importieren.
Beachten Sie, dass die Import-Map nur für Modul-Spezifizierer in der [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) oder dem [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) gilt, die in Dokumente geladen werden; sie gilt nicht für den im `src`-Attribut eines `<script>`-Elements angegebenen Pfad oder für Module, die in Worker oder Worklets geladen werden.

Weitere Informationen finden Sie im Abschnitt [Module mit Import-Maps importieren](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) im Leitfaden für JavaScript-Module.

## Syntax

```html
<script type="importmap">
  // JSON object defining import
</script>
```

Die Attribute `src`, `async`, `nomodule`, `defer`, `crossorigin`, `integrity` und `referrerpolicy` dürfen nicht angegeben werden.

### Ausnahmen

- `TypeError`
  - : Die Definition der Import-Map ist kein JSON-Objekt, der `importmap`-Schlüssel ist definiert, aber dessen Wert ist kein JSON-Objekt, oder der `scopes`-Schlüssel ist definiert, aber dessen Wert ist kein JSON-Objekt.

Browser generieren Konsolenwarnungen für andere Fälle, in denen das Import-Map-JSON nicht dem [Import-Map](#import-map_json-darstellung)-Schema entspricht.

## Beschreibung

Beim Importieren eines [JavaScript-Moduls](/de/docs/Web/JavaScript/Guide/Modules) haben sowohl die [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) als auch der [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) einen "Modul-Spezifizierer", der das zu importierende Modul angibt.
Ein Browser muss in der Lage sein, diesen Spezifizierer auf eine absolute URL aufzulösen, um das Modul zu importieren.

Beispielsweise importieren die folgenden Anweisungen Elemente vom Modul-Spezifizierer `"./modules/shapes/square.js"`, welches ein Pfad relativ zur Basis-URL des Dokuments ist, und dem Modul-Spezifizierer `"https://example.com/shapes/circle.js"`, welches eine absolute URL ist.

```js
import { name as squareName, draw } from "./modules/shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

Import-Maps erlauben es Entwicklern, (fast) jeden Text, den sie wollen, im Modul-Spezifizierer zu verwenden; die Map bietet einen entsprechenden Wert, der den Text ersetzt, wenn der Modul-Spezifizierer aufgelöst wird.

### Bare Module

Die untenstehende Import-Map definiert einen `imports`-Schlüssel, der eine "Modul-Spezifizierer-Map" mit den Eigenschaften `square` und `circle` hat.

```html
<script type="importmap">
  {
    "imports": {
      "square": "./modules/shapes/square.js",
      "circle": "https://example.com/shapes/circle.js"
    }
  }
</script>
```

Mit dieser Import-Map können wir die gleichen Module wie oben importieren, aber "bare Module" in unseren Modul-Spezifizierern verwenden:

```js
import { name as squareName, draw } from "square";
import { name as circleName } from "circle";
```

### Zuordnung von Pfadpräfixen

Ein Modul-Spezifizierer-Map-Schlüssel kann auch verwendet werden, um ein Pfadpräfix in einem Modul-Spezifizierer neu zuzuordnen.
Beachten Sie, dass in diesem Fall sowohl die Eigenschaft als auch der zugeordnete Pfad beide einen abschließenden Schrägstrich (`/`) haben müssen.

```html
<script type="importmap">
  {
    "imports": {
      "shapes/": "./modules/shapes/",
      "other-shapes/": "https://example.com/modules/shapes/"
    }
  }
</script>
```

Wir könnten dann ein Kreis-Modul wie folgt importieren.

```js
import { name as circleName } from "shapes/circle.js";
```

### Pfade im Modul-Spezifizierer-Map-Schlüssel

Modul-Spezifizierer-Schlüssel müssen keine einfachen Namen ("bare Namen") sein.
Sie können auch Pfadtrennzeichen enthalten oder damit enden, oder absolute URLs sein, oder relative URL-Pfade, die mit `/`, `./` oder `../` beginnen.

```json
{
  "imports": {
    "modules/shapes/": "./modules/src/shapes/",
    "modules/square": "./modules/src/other/shapes/square.js",
    "https://example.com/modules/square.js": "./modules/src/other/shapes/square.js",
    "../modules/shapes/": "/modules/shapes/"
  }
}
```

Wenn es mehrere Modul-Spezifizierer-Schlüssel in einer Modul-Spezifizierer-Map gibt, die übereinstimmen könnten, wird der spezifischste Schlüssel ausgewählt (d. h. der mit dem längeren Pfad/Wert).

Ein Modul-Spezifizierer von `./foo/../js/app.js` würde zu `./js/app.js` aufgelöst, bevor eine Übereinstimmung gesucht wird.
Das bedeutet, dass ein Modul-Spezifizierer-Schlüssel von `./js/app.js` den Modul-Spezifizierer auch dann treffen würde, wenn sie nicht genau gleich sind.

### Scoped Modul-Spezifizierer-Maps

Sie können den `scopes`-Schlüssel verwenden, um Zuordnungen bereitzustellen, die nur verwendet werden, wenn das Modul enthaltende Script einen bestimmten URL-Pfad enthält.
Wenn die URL des ladenden Scripts mit dem angegebenen Pfad übereinstimmt, wird die mit dem Gültigkeitsbereich verbundene Zuordnung verwendet.
Dies ermöglicht die Verwendung verschiedener Versionen des Moduls, abhängig davon, welcher Code den Import vornimmt.

Zum Beispiel verwendet die untenstehende Map den gesperrten Map nur, wenn das ladende Modul eine URL hat, die den Pfad "/modules/custom-shapes/" enthält.

```html
<script type="importmap">
  {
    "imports": {
      "square": "./modules/shapes/square.js"
    },
    "scopes": {
      "/modules/custom-shapes/": {
        "square": "https://example.com/modules/shapes/square.js"
      }
    }
  }
</script>
```

Wenn mehrere Gültigkeitsbereiche mit der Referrer-URL übereinstimmen, wird der spezifischste Gültigkeitsbereich verwendet (der mit dem längsten Namen).
Der Browser fällt auf den nächst spezifischeren gesperrten Pfad zurück, wenn kein passender Spezifizierer vorhanden ist, und so weiter, bis schließlich auf die Modul-Spezifizierer-Map im `imports`-Schlüssel zurückgegriffen wird.

### Integritäts-Metadaten-Mapping

Sie können den `integrity`-Schlüssel verwenden, um Zuordnungen für Modul-[Integritäts-Metadaten](/de/docs/Web/Security/Subresource_Integrity#using_subresource_integrity) bereitzustellen.
Dies ermöglicht es Ihnen, die Integrität dynamisch oder statisch importierter Module sicherzustellen.
`integrity` ermöglicht es Ihnen auch, einen Fallback für Top-Level- oder vorab geladene Module bereitzustellen, falls sie kein `integrity`-Attribut beinhalten.

Die Map-Schlüssel repräsentieren Modul-URLs, die absolut oder relativ sein können (begonnen mit `/`, `./` oder `../`).
Die Map-Werte repräsentieren Integritäts-Metadaten, identisch mit denen, die in [`integrity`]-Attributwerten verwendet werden.

Zum Beispiel definiert die untenstehende Map Integritäts-Metadaten für das `square.js`-Modul (direkt) und dessen bare Spezifizierer (transitiv, über den `imports`-Schlüssel).

```html
<script type="importmap">
  {
    "imports": {
      "square": "./modules/shapes/square.js"
    },
    "integrity": {
      "./modules/shapes/square.js": "sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
    }
  }
</script>
```

### Zusammenführen mehrerer Import-Maps

Intern pflegen Browser eine einzige globale Import-Map-Darstellung. Wenn mehrere Import-Maps in einem Dokument enthalten sind, werden deren Inhalte in die globale Import-Map integriert, sobald sie registriert werden.

Zum Beispiel betrachten Sie die folgenden zwei Import-Maps:

```html
<script type="importmap">
  {
    "imports": {
      "/app/": "./original-app/"
    }
  }
</script>
```

```html
<script type="importmap">
  {
    "imports": {
      "/app/helper": "./helper/index.mjs"
    },
    "scopes": {
      "/js": {
        "/app/": "./js-app/"
      }
    }
  }
</script>
```

Diese sind gleichwertig mit der folgenden einzelnen Import-Map:

```html
<script type="importmap">
  {
    "imports": {
      "/app/": "./original-app/",
      "/app/helper": "./helper/index.mjs"
    },
    "scopes": {
      "/js": {
        "/app/": "./js-app/"
      }
    }
  }
</script>
```

Modul-Spezifizierer in jeder registrierten Map, die bereits zuvor aufgelöst wurden, werden ignoriert. Nachfolgende Auflösungen dieser Spezifizierer werden die gleichen Ergebnisse liefern wie ihre vorherigen Auflösungen.

Zum Beispiel, wenn der Modul-Spezifizierer `/app/helper.js` bereits aufgelöst wurde, würde die folgende neue Import-Map:

```html
<script type="importmap">
  {
    "imports": {
      "/app/helper.js": "./helper/index.mjs",
      "lodash": "/node_modules/lodash-es/lodash.js"
    }
  }
</script>
```

gleichwertig mit:

```html
<script type="importmap">
  {
    "imports": {
      "lodash": "/node_modules/lodash-es/lodash.js"
    }
  }
</script>
```

Die `/app/helper.js`-Regel wurde ignoriert und nicht in die Map aufgenommen.

Ähnlich werden Modul-Spezifizierer in einer registrierten Map, die bereits auf URLs in der globalen Map abgebildet wurden, ignoriert; deren vorherige Zuordnung bleibt bestehen.

Zum Beispiel sind die folgenden zwei Import-Maps:

```html
<script type="importmap">
  {
    "imports": {
      "/app/helper": "./helper/index.mjs",
      "lodash": "/node_modules/lodash-es/lodash.js"
    }
  }
</script>
```

```html
<script type="importmap">
  {
    "imports": {
      "/app/helper": "./main/helper/index.mjs"
    }
  }
</script>
```

gleichwertig mit der folgenden einzelnen Import-Map:

```html
<script type="importmap">
  {
    "imports": {
      "/app/helper": "./helper/index.mjs",
      "lodash": "/node_modules/lodash-es/lodash.js"
    }
  }
</script>
```

Die `/app/helper/`-Regel wurde aus der zweiten Map entfernt.

> [!NOTE]
> In nicht unterstützenden Browsern (siehe die [Kompatibilitätsdaten](#browser-kompatibilität)) kann ein [Polyfill](https://github.com/guybedford/es-module-shims) verwendet werden, um Probleme im Zusammenhang mit der Modulauflösung zu vermeiden.

## Import-Map JSON-Darstellung

Das Folgende ist eine "formale" Definition der Import-Map JSON-Darstellung.

Die Import-Map muss ein gültiges JSON-Objekt sein, das die optionalen Schlüssel `imports`, `scopes` und `integrity` definieren kann. Der Wert jedes Schlüssels muss ein Objekt sein, das leer sein kann.

- `imports` {{optional_inline}}

  - : Der Wert ist eine [Modul-Spezifizierer-Map](#module_specifier_map), die die Zuordnungen zwischen Modul-Spezifizierer-Text, der in einer `import`-Anweisung oder einem `import()`-Operator erscheinen kann, und dem Text bereitstellt, der es beim Auflösen des Spezifizierers ersetzt.

    Dies ist die Fallback-Map, die nach passenden Modul-Spezifizierern durchsucht wird, wenn keine `scopes`-Pfad-URLs übereinstimmen oder wenn Modul-Spezifizierer-Maps in passenden `scopes`-Pfade keinen Schlüssel enthalten, der mit dem Modul-Spezifizierer übereinstimmt.

    - `<module specifier map>`

      - : Eine "Modul-Spezifizierer-Map" ist ein gültiges JSON-Objekt, bei dem die _Schlüssel_ Texte sind, die im Modul-Spezifizierer vorhanden sein können, wenn ein Modul importiert wird, und die entsprechenden _Werte_ die URLs oder Pfade sind, die diesen Text ersetzen, wenn der Modul-Spezifizierer in eine Adresse aufgelöst wird.

        Das Modul-Spezifizierer-Map-JSON-Objekt hat folgende Anforderungen:

        - Keiner der Schlüssel darf leer sein.
        - Alle Werte müssen Zeichenfolgen sein, die entweder eine gültige absolute URL oder eine gültige URL-Zeichenfolge definieren, die mit `/`, `./` oder `../` beginnt.
        - Wenn ein Schlüssel mit einem `/` endet, muss der entsprechende Wert auch mit einem `/` enden.
          Ein Schlüssel mit einem abschließenden `/` kann als Präfix verwendet werden, wenn Moduladressen abgebildet (oder neu abgebildet) werden.
        - Die Reihenfolge der Objekteigenschaften ist irrelevant: wenn mehrere Schlüssel mit dem Modul-Spezifizierer übereinstimmen können, wird der spezifischste Schlüssel verwendet (mit anderen Worten, ein Spezifizierer "olive/branch/" würde vor "olive/" übereinstimmen).

- `integrity` {{optional_inline}}

  - : Definiert ein gültiges JSON-Objekt, bei dem die _Schlüssel_ Zeichenfolgen mit gültigen absoluten oder relativen URLs (beginnend mit `/`, `./` oder `../`) sind,
    und die entsprechenden _Werte_ gültige [Integritäts-Metadaten](/de/docs/Web/Security/Subresource_Integrity#using_subresource_integrity) sind.

    Wenn die URL eines Scripts, das ein Modul importiert oder vorlädt, mit einem Schlüssel im `integrity`-Objekt übereinstimmt, werden die entsprechenden Integritäts-Metadaten auf die Fetch-Optionen des Scripts angewendet,
    es sei denn, sie haben bereits Integritäts-Metadaten.

- `scopes` {{optional_inline}}

  - : Scopes definieren pfadspezifische [Modul-Spezifizierer-Maps](#module_specifier_map), die es ermöglichen, die Map basierend auf dem Pfad des Codes, der das Modul importiert, auszuwählen.

    Das Scopes-Objekt ist ein gültiges JSON-Objekt, bei dem jede Eigenschaft ein `<scope key>` ist, welches ein URL-Pfad ist, mit einem entsprechenden Wert, der eine `<module specifier map>` ist.

    Wenn die URL eines Scripts, das ein Modul importiert, mit einem `<scope key>`-Pfad übereinstimmt, wird zuerst der mit dem Schlüssel verbundene `<module specifier map>`-Wert auf übereinstimmende Spezifizierer geprüft.
    Wenn es mehrere übereinstimmende Scope-Schlüssel gibt, wird zuerst der Wert des spezifischsten/nestierten Scope-Pfads auf übereinstimmende Modul-Spezifizierer geprüft.
    Die Fallback-Modul-Spezifizierer-Map in `imports` wird verwendet, wenn es keine übereinstimmenden Modul-Spezifizierer-Schlüssel in einem der übereinstimmenden gesperrten Modul-Spezifizierer-Maps gibt.

    Beachten Sie, dass der Scope nicht ändert, wie eine Adresse aufgelöst wird; relative Adressen werden immer auf die Basis-URL der Import-Map aufgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript-Module > Module mit Import-Maps importieren](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps)
- [Das `type`-Attribut von HTML-`<script>`-Elementen](/de/docs/Web/HTML/Reference/Elements/script/type)
- [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import)
- [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import)
