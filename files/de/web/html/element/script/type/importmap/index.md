---
title: <script type="importmap">
slug: Web/HTML/Element/script/type/importmap
l10n:
  sourceCommit: 3cc47caea5f90d1912ded782425105a3bbd3c9df
---

{{HTMLSidebar}}

Der **`importmap`**-Wert des [`type`](/de/docs/Web/HTML/Element/script/type)-Attributs des [`<script>`-Elements](/de/docs/Web/HTML/Element/script) zeigt an, dass der Body des Elements eine Import-Map enthält.

Eine Import-Map ist ein JSON-Objekt, das es Entwicklern ermöglicht, zu steuern, wie der Browser Modulspezifizierer auflöst, wenn [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) importiert werden. Sie bietet eine Zuordnung zwischen dem Text, der als Modulspezifizierer in einer [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) oder im [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) verwendet wird, und dem entsprechenden Wert, der den Text beim Auflösen des Spezifizierers ersetzt. Das JSON-Objekt muss dem [JSON-Darstellungsformat für Import-Maps](#json-darstellung_der_import-map) entsprechen.

Eine Import-Map wird verwendet, um Modulspezifizierer in statischen und dynamischen Imports aufzulösen, und muss daher vor allen `<script>`-Elementen deklariert und verarbeitet werden, die Module unter Verwendung der in der Map deklarierten Spezifizierer importieren. Beachten Sie, dass die Import-Map nur für Modulspezifizierer in der [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) oder dem [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) für Module gilt, die in Dokumente geladen werden. Sie gilt nicht für den Pfad, der im `src`-Attribut eines `<script>`-Elements angegeben ist, oder für Module, die in Worker oder Worklets geladen werden.

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
  - : Die Import-Map-Definition ist kein JSON-Objekt, der `importmap`-Schlüssel ist definiert, aber sein Wert ist kein JSON-Objekt, oder der `scopes`-Schlüssel ist definiert, aber sein Wert ist kein JSON-Objekt.

Browser generieren Konsolenwarnungen für andere Fälle, in denen das Import-Map-JSON nicht mit dem [Schema der Import-Map](#json-darstellung_der_import-map) übereinstimmt.

## Beschreibung

Beim Importieren eines [JavaScript-Moduls](/de/docs/Web/JavaScript/Guide/Modules) enthalten sowohl die [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) als auch der [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) einen "Modulspezifizierer", der angibt, welches Modul importiert werden soll. Ein Browser muss in der Lage sein, diesen Spezifizierer in eine absolute URL aufzulösen, um das Modul zu importieren.

Zum Beispiel importieren die folgenden Anweisungen Elemente aus dem Modulspezifizierer `"./modules/shapes/square.js"`, der ein relativ zum Basis-URL des Dokuments angegebener Pfad ist, und dem Modulspezifizierer `"https://example.com/shapes/circle.js"`, der eine absolute URL ist.

```js
import { name as squareName, draw } from "./modules/shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

Import-Maps erlauben es Entwicklern, (fast) beliebigen Text im Modulspezifizierer anzugeben; die Map bietet einen entsprechenden Wert, der den Text ersetzt, wenn der Modulspezifizierer aufgelöst wird.

### Bare Modules

Die unten abgebildete Import-Map definiert einen `imports`-Schlüssel, der eine "Modulspezifizierer-Map" mit den Eigenschaften `square` und `circle` enthält.

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

Mit dieser Import-Map können wir dieselben Module wie oben, aber mit "Bare Modules" in unseren Modulspezifizierern importieren:

```js
import { name as squareName, draw } from "square";
import { name as circleName } from "circle";
```

### Pfadpräfixe abbilden

Ein Schlüssel in der Modulspezifizierer-Map kann auch verwendet werden, um ein Pfadpräfix in einem Modulspezifizierer neu zuzuordnen. Beachten Sie, dass in diesem Fall sowohl der Schlüssel als auch der zugeordnete Pfad mit einem Schrägstrich (`/`) enden müssen.

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

Wir könnten dann ein Kreis-Modul wie gezeigt importieren.

```js
import { name as circleName } from "shapes/circle.js";
```

### Pfade im Modulspezifizierer-Map-Schlüssel

Modulspezifizierer-Schlüssel müssen keine einfachen Wortnamen ("Bare Names") sein. Sie können auch Pfadtrennzeichen enthalten oder mit diesen enden, absolute URLs sein oder relative URL-Pfade, die mit `/`, `./` oder `../` beginnen.

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

Wenn mehrere Modulspezifizierer-Schlüssel in einer Modulspezifizierer-Map übereinstimmen könnten, wird der spezifischste Schlüssel ausgewählt (d. h. der mit dem längeren Pfad/Wert).

Ein Modulspezifizierer von `./foo/../js/app.js` würde zu `./js/app.js` aufgelöst, bevor eine Übereinstimmung erfolgt. Das bedeutet, dass ein Modulspezifizierer-Schlüssel von `./js/app.js` mit dem Modulspezifizierer übereinstimmen würde, obwohl sie nicht genau gleich sind.

### Modul-Spefizierer-Maps mit Gültigkeitsbereich

Sie können den Schlüssel `scopes` verwenden, um Zuordnungen bereitzustellen, die nur verwendet werden, wenn das Skript, das das Modul importiert, einen bestimmten URL-Pfad enthält. Wenn die URL des ladenden Skripts mit dem angegebenen Pfad übereinstimmt, wird die Zuordnung verwendet, die dem Gültigkeitsbereich zugeordnet ist. Dies ermöglicht es, je nach Code, der den Import durchführt, unterschiedliche Versionen des Moduls zu verwenden.

Zum Beispiel wird die folgende Map nur verwendet, wenn das ladende Modul eine URL enthält, die den Pfad "/modules/custom-shapes/" enthält.

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

Wenn mehrere Gültigkeitsbereiche mit der Referrer-URL übereinstimmen, wird der spezifischste Bereichspfad verwendet (der Schlüsselname mit der längsten Länge). Der Browser wechselt zum nächstspezifischeren Bereichspfad, falls kein übereinstimmender Spezifizierer vorhanden ist, und so weiter, bis schließlich zur Modulspezifizierer-Map im `imports`-Schlüssel zurückgegriffen wird.

### Integritäts-Metadaten-Map

Sie können den Schlüssel `integrity` verwenden, um Zuordnungen für Modul-[Integritätsmetadaten](/de/docs/Web/Security/Subresource_Integrity#using_subresource_integrity) bereitzustellen. Dies ermöglicht es, die Integrität von dynamisch oder statisch importierten Modulen sicherzustellen. `integrity` erlaubt es auch, eine Rückfallebene für Top-Level- oder vorgeladene Module bereitzustellen, falls diese nicht bereits ein Integritätsattribut enthalten.

Die Map-Schlüssel repräsentieren Modul-URLs, die absolut oder relativ sein können (beginnend mit `/`, `./` oder `../`). Die Map-Werte repräsentieren Integritätsmetadaten, die identisch mit den im [`integrity`](/de/docs/Web/HTML/Element/script#integrity)-Attribut verwendeten sind.

Zum Beispiel definiert die untenstehende Map Integritätsmetadaten für das `square.js`-Modul (direkt) und seinen Bare-Spezifizierer (transitiv, über den `imports`-Schlüssel).

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

Intern speichern Browser eine einzelne globale Import-Map-Darstellung. Wenn mehrere Import-Maps in ein Dokument eingefügt werden, werden deren Inhalte beim Registrieren mit der globalen Import-Map zusammengeführt.

Zum Beispiel berücksichtigen folgende zwei Import-Maps:

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

Diese sind äquivalent zu der folgenden einzelnen Import-Map:

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

Modulspezifizierer in jeder registrierten Map, die bereits vorher aufgelöst wurden, werden verworfen. Nachfolgende Auflösungen dieser Spezifizierer ergeben die gleichen Ergebnisse wie ihre vorherigen Auflösungen.

Zum Beispiel, wenn der Modulspezifizierer `/app/helper.js` bereits aufgelöst wurde, wäre die folgende neue Import-Map:

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

Äquivalent zu:

```html
<script type="importmap">
  {
    "imports": {
      "lodash": "/node_modules/lodash-es/lodash.js"
    }
  }
</script>
```

Die `/app/helper.js`-Regel wurde ignoriert und nicht in die Map integriert.

Ähnlich werden Modulspezifizierer in einer registrierten Map, die bereits URLs in der globalen Map zugeordnet waren, verworfen; ihre vorherige Zuordnung bleibt bestehen.

Zum Beispiel berücksichtigen folgende zwei Import-Maps:

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

Diese sind äquivalent zu der folgenden einzelnen Import-Map:

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
> In nicht unterstützenden Browsern (siehe die [Kompatibilitätsdaten](#browser-kompatibilität)) kann ein [Polyfill](https://github.com/guybedford/es-module-shims) verwendet werden, um Probleme im Zusammenhang mit der Modul-Auflösung zu vermeiden.

## JSON-Darstellung der Import-Map

Die folgende ist eine "formale" Definition der JSON-Darstellung der Import-Map.

Die Import-Map muss ein gültiges JSON-Objekt sein, das die optionalen Schlüssel `imports`, `scopes` und `integrity` definieren kann. Der Wert jedes Schlüssels muss ein Objekt sein, das leer sein kann.

- `imports` {{optional_inline}}

  - : Der Wert ist eine [Modulspezifizierer-Karte](#module_specifier_map), die Zuordnungen zwischen Modulspezifizierer-Text, der möglicherweise in einer `import`-Anweisung oder einem `import()`-Operator auftritt, und dem Text bietet, der ihn ersetzt, wenn der Spezifizierer aufgelöst wird.

    Dies ist die Rückfall-Map, die nach übereinstimmenden Modulspezifizierern durchsucht wird, wenn keine `scopes`-Pfad-URLs übereinstimmen oder wenn Modulspezifizierer-Karten in übereinstimmenden `scopes`-Pfaden keinen Schlüssel enthalten, der mit dem Modulspezifizierer übereinstimmt.

    - `<module specifier map>`

      - : Eine "Modulspezifizierer-Karte" ist ein gültiges JSON-Objekt, bei dem die _Schlüssel_ Text enthalten, der möglicherweise im Modulspezifizierer beim Importieren eines Moduls vorhanden ist, und die entsprechenden _Werte_ URLs oder Pfade darstellen, die diesen Text ersetzen, wenn der Modulspezifizierer zu einer Adresse aufgelöst wird.

        Die JSON-Objektanforderungen der Modulspezifizierer-Karte sind wie folgt:

        - Keiner der Schlüssel darf leer sein.
        - Alle Werte müssen Strings sein, die entweder eine gültige absolute URL oder einen gültigen URL-String, beginnend mit `/`, `./` oder `../` definieren.
        - Wenn ein Schlüssel mit `/` endet, muss auch der zugehörige Wert mit `/` enden.
          Ein Schlüssel mit einem abschließenden `/` kann als Präfix verwendet werden, um Moduladressen beim Mapping (oder Remapping) umzuleiten.
        - Die Objekt-Eigenschaftenreihenfolge ist irrelevant: Wenn mehrere Schlüssel mit dem Modulspezifizierer übereinstimmen können, wird der spezifischste Schlüssel verwendet (mit anderen Worten, ein Spezifizierer "olive/branch/" würde vor "olive/" übereinstimmen).

- `integrity` {{optional_inline}}

  - : Definiert ein gültiges JSON-Objekt, bei dem die _Schlüssel_ Strings sind, die gültige absolute oder relative URLs enthalten (beginnend mit `/`, `./` oder `../`), und die entsprechenden _Werte_ gültige [Integritätsmetadaten](/de/docs/Web/Security/Subresource_Integrity#using_subresource_integrity) sind.

    Wenn die URL eines Skripts, das ein Modul importiert oder vorlädt, mit einem Schlüssel im `integrity`-Objekt übereinstimmt, werden die entsprechenden Integritätsmetadaten auf die Fetch-Optionen des Skripts angewendet, es sei denn, sie verfügen bereits über angehängte Integritätsmetadaten.

- `scopes` {{optional_inline}}

  - : Gültigkeitsbereiche definieren pfadspezifische [Modulspezifizierer-Karten](#module_specifier_map) und ermöglichen, dass die Wahl der Karte von dem Pfad des Codes abhängt, der das Modul importiert.

    Das Scopes-Objekt ist ein gültiges JSON-Objekt, bei dem jede Eigenschaft ein `<scope key>` ist, ein URL-Pfad mit einem entsprechenden Wert, der eine `<module specifier map>` ist.

    Wenn die URL eines Skripts, das ein Modul importiert, mit einem `<scope key>`-Pfad übereinstimmt, wird zuerst die `<module specifier map>` verwendet, die dem Schlüssel zugeordnet ist. Gibt es mehrere übereinstimmende Scopes-Schlüssel, werden Modul-Spezifizierer zuerst in den spezifischsten/verschachtelten Scope-Pfaden geprüft. Die Rückfall-Modulspezifizierer-Karte in `imports` wird verwendet, wenn es keine passenden Modul-Spezifizierer-Schlüssel in den übereinstimmenden Scopes gibt.

    Beachten Sie, dass der Gültigkeitsbereich nicht ändert, wie eine Adresse aufgelöst wird; relative Adressen werden immer relativ zur Basis-URL der Import-Map aufgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript-Module > Module mit Import-Maps importieren](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps)
- [Das `type`-Attribut von HTML-`<script>`-Elementen](/de/docs/Web/HTML/Element/script#type)
- [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import)
- [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import)
