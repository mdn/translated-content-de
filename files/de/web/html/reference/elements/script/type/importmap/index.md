---
title: '`<script type="importmap">` HTML-Attributwert'
short-title: importmap
slug: Web/HTML/Reference/Elements/script/type/importmap
l10n:
  sourceCommit: bf5017c389132af39b50106cf1763fa7106e87b4
---

Der **`importmap`**-Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)-Attributs des [`<script>`-Elements](/de/docs/Web/HTML/Reference/Elements/script) zeigt an, dass der Inhalt des Elements eine Importmap enthält.

Eine Importmap ist ein JSON-Objekt, das Entwicklern ermöglicht, zu steuern, wie der Browser Modulspezifikatoren beim Importieren von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) auflöst. Sie bietet eine Zuordnung zwischen dem Text, der als Modulspezifikator in einer [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) oder einem [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) verwendet wird, und dem entsprechenden Wert, der beim Auflösen des Spezifikators den Text ersetzt. Das JSON-Objekt muss dem [Importmap-JSON-Darstellungsformat](#importmap-json-darstellung) entsprechen.

Eine Importmap wird verwendet, um Modulspezifikatoren in statischen und dynamischen Importen aufzulösen, und muss daher deklariert und verarbeitet werden, bevor `<script>`-Elemente geladen werden, die Module mit in der Map deklarierten Spezifikatoren importieren. Beachten Sie, dass die Importmap nur für Modulspezifikatoren in der [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) oder dem [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) für Module gilt, die in Dokumente geladen werden; sie gilt nicht für den im `src`-Attribut eines `<script>`-Elements angegebenen Pfad oder für Module, die in Worker oder Worklets geladen werden.

Weitere Informationen finden Sie im Abschnitt [Module mit Importmaps importieren](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) im Leitfaden zu JavaScript-Modulen.

## Syntax

```html
<script type="importmap">
  // JSON object defining import
</script>
```

Die Attribute `src`, `async`, `nomodule`, `defer`, `crossorigin`, `integrity` und `referrerpolicy` dürfen nicht angegeben werden.

### Ausnahmen

- `TypeError`
  - : Die Importmap-Definition ist kein JSON-Objekt, der `importmap`-Schlüssel ist definiert, aber sein Wert ist kein JSON-Objekt, oder der `scopes`-Schlüssel ist definiert, aber sein Wert ist kein JSON-Objekt.

Browser generieren Konsolenwarnungen für andere Fälle, in denen das Importmap-JSON nicht dem [Importmap-](#importmap-json-darstellung)-Schema entspricht.

## Beschreibung

Beim Importieren eines [JavaScript-Moduls](/de/docs/Web/JavaScript/Guide/Modules) haben sowohl die [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) als auch der [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) einen "Modulspezifikator", der das zu importierende Modul angibt. Ein Browser muss in der Lage sein, diesen Spezifikator in eine absolute URL aufzulösen, um das Modul zu importieren.

Beispielsweise importieren die folgenden Anweisungen Elemente aus dem Modulspezifikator `"https://example.com/shapes/circle.js"`, das eine absolute URL ist, und dem Modulspezifikator `"./modules/shapes/square.js"`, das ein Pfad relativ zur Basis-URL des Dokuments ist.

```js
import { name as circleName } from "https://example.com/shapes/circle.js";
import { name as squareName, draw } from "./modules/shapes/square.js";
```

Importmaps ermöglichen es Entwicklern, (fast) jeden Text, den sie wollen, im Modulspezifikator zu spezifizieren; die Map bietet einen entsprechenden Wert, der den Text ersetzt, wenn der Modulspezifikator aufgelöst wird.

### Bare Modules

Die untenstehende Importmap definiert einen `imports`-Schlüssel, der eine "Modulspezifikatormap" mit den Eigenschaften `circle` und `square` enthält.

```html
<script type="importmap">
  {
    "imports": {
      "circle": "https://example.com/shapes/circle.js",
      "square": "./modules/shapes/square.js"
    }
  }
</script>
```

Mit dieser Importmap können wir dieselben Module importieren wie oben, aber indem wir "bare modules" in unseren Modulspezifikatoren verwenden:

```js
import { name as circleName } from "circle";
import { name as squareName, draw } from "square";
```

### Pfadpräfixe mappen

Ein Schlüssel in einer Modulspezifikatormap kann auch verwendet werden, um ein Pfadpräfix in einem Modulspezifikator umzuwandeln. Beachten Sie, dass in diesem Fall die Eigenschaft und der gemappte Pfad beide mit einem nachfolgenden Schrägstrich (`/`) enden müssen.

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

Dann könnten wir ein Kreismodul wie gezeigt importieren.

```js
import { name as circleName } from "shapes/circle.js";
```

### Pfade im Modulspezifikatormap-Schlüssel

Modulspezifikatorschlüssel müssen keine einwortigen Namen ("bare Namen") sein. Sie können auch Pfadtrennzeichen enthalten oder mit diesen enden, oder absolute URLs sein, oder relative URL-Pfade, die mit `/`, `./` oder `../` beginnen.

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

Wenn es mehrere Modulspezifikatorschlüssel in einer Modulspezifikatormap gibt, die passen könnten, wird der spezifischste Schlüssel ausgewählt (d.h. der mit dem längeren Pfad/Wert).

Ein Modulspezifikator von `./foo/../js/app.js` würde zu `./js/app.js` aufgelöst, bevor eine Zuordnung erfolgt. Das bedeutet, dass ein Modulspezifikatorschlüssel von `./js/app.js` mit dem Modulspezifikator übereinstimmen würde, auch wenn sie nicht exakt gleich sind.

### Bereichsspezifikators

Sie können den `scopes`-Schlüssel verwenden, um Zuordnungen bereitzustellen, die nur verwendet werden, wenn das Modul importierende Skript einen bestimmten URL-Pfad enthält. Wenn die URL des ladenden Skripts mit dem bereitgestellten Pfad übereinstimmt, wird die mit dem Bereich verknüpfte Zuordnung verwendet. Dies ermöglicht die Verwendung unterschiedlicher Versionen des Moduls, je nachdem, welcher Code den Import durchführt.

Beispielsweise wird die untenstehende Map nur die Bereichsmap verwenden, wenn das ladende Modul eine URL enthält, die den Pfad: "/modules/custom-shapes/" hat.

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

Wenn mehrere Bereiche mit der Referrer-URL übereinstimmen, wird der spezifischste Bereichspfad verwendet (der Bereichsschlüsselname mit dem längsten Namen). Der Browser fällt auf den nächst spezifischeren Bereichspfad zurück, wenn es keinen passenden Spezifikator gibt, und so weiter, wodurch schließlich auf die Modulspezifikatormap im `imports`-Schlüssel zurückgegriffen wird.

### Integritätsmetadatamap

Sie können den `integrity`-Schlüssel verwenden, um eine Zuordnung für [Integritätsmetadata](/de/docs/Web/Security/Defenses/Subresource_Integrity#using_subresource_integrity) bereitzustellen. Dies ermöglicht Ihnen, die Integrität von dynamisch oder statisch importierten Modulen sicherzustellen. `integrity` ermöglicht es Ihnen auch, einen Fallback für Top-Level- oder vorab geladene Module bereitzustellen, falls diese noch kein `integrity`-Attribut enthalten.

Die Map-Schlüssel repräsentieren Modul-URLs, die absolut oder relativ sein können (beginnend mit `/`, `./` oder `../`), und die Map-Werte repräsentieren Integritätsmetadata, identisch mit denen, die in [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity)-Attributwerten verwendet werden.

Beispielsweise definiert die untenstehende Map Integritätsmetadata für das `square.js`-Modul (direkt) und seinen bare Spezifikator (transitiv, über den `imports`-Schlüssel).

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

### Mehrere Importmaps zusammenführen

Unterstützte Browser können eine oder mehrere Importmaps an beliebiger Stelle im Dokument deklarieren, vorausgesetzt, sie sind definiert, bevor irgendwelche darauf abhängenden Module geladen werden (einige [Browserversionen](#browser-kompatibilität) erlauben nur eine einzelne Importmap-Deklaration, die vor dem Laden eines Moduls erscheinen muss).

Intern pflegen Browser eine einzige globale Importmap-Darstellung. Wenn mehrere Importmaps in einem Dokument enthalten sind, werden deren Inhalte in die globale Importmap übernommen, wenn sie registriert sind.

Beispielsweise betrachten Sie die folgenden zwei Importmaps:

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

Diese sind äquivalent zur folgenden einzelnen Importmap:

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

Bereits zuvor aufgelöste Modulspezifikatoren in jeder registrierten Map werden ignoriert. Bei nachfolgenden Auflösungen dieser Spezifikatoren werden die gleichen Ergebnisse wie bei ihren vorherigen Auflösungen geliefert.

Wenn beispielsweise der Modulspezifikator `/app/helper.js` bereits aufgelöst wurde, entspricht die folgende neue Importmap:

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

der folgenden:

```html
<script type="importmap">
  {
    "imports": {
      "lodash": "/node_modules/lodash-es/lodash.js"
    }
  }
</script>
```

Die Regel `/app/helper.js` wurde ignoriert und nicht in die Map aufgenommen.

Genauso werden in einer registrierten Map Modulspezifikatoren, die bereits in der globalen Map auf URLs gemappt wurden, ignoriert; ihre vorherige Zuordnung bleibt bestehen.

Zum Beispiel sind die folgenden zwei Importmaps:

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

äquivalent zur folgenden einzelnen Importmap:

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
> In nicht unterstützenden Browsern (überprüfen Sie die [Kompatibilitätsdaten](#browser-kompatibilität)) kann eine [Polyfill](https://github.com/guybedford/es-module-shims) verwendet werden, um Probleme bei der Modulauflösung zu vermeiden.

## Importmap-JSON-Darstellung

Die folgende ist eine "formale" Definition der Importmap-JSON-Darstellung.

Das Importmap muss ein gültiges JSON-Objekt sein, das beliebige der optionalen Schlüssel `imports`, `scopes` und `integrity` definieren kann. Der Wert jedes Schlüssels muss ein Objekt sein, welches leer sein kann.

- `imports` {{optional_inline}}
  - : Der Wert ist eine [Modulspezifikatormap](#module_specifier_map), der die Zuordnungen zwischen Modulspezifikatortext, der in einer `import`-Anweisung oder einem `import()`-Operator erscheinen könnte, und dem Text bietet, der ihn ersetzen wird, wenn der Spezifikator aufgelöst wird.

    Dies ist die Fallback-Map, die nach übereinstimmenden Modulspezifikatoren durchsucht wird, wenn keine `scopes`-Pfad-URLs übereinstimmen oder wenn Modulspezifikatormaps in übereinstimmenden `scopes`-Pfaden keinen Schlüssel enthalten, der mit dem Modulspezifikator übereinstimmt.
    - `<module specifier map>`
      - : Eine "Modulspezifikatormap" ist ein gültiges JSON-Objekt, bei dem die _Schlüssel_ Texte sind, die im Modulspezifikator beim Importieren eines Moduls vorhanden sein können, und die entsprechenden _Werte_ die URLs oder Pfade sind, die diesen Text ersetzen, wenn der Modulspezifikator in eine Adresse aufgelöst wird.

        Das JSON-Objekt der Modulspezifikatormap hat die folgenden Anforderungen:
        - Keiner der Schlüssel darf leer sein.
        - Alle Werte müssen Zeichenfolgen sein, die entweder eine gültige absolute URL oder eine gültige URL-Zeichenfolge definieren, die mit `/`, `./` oder `../` beginnt.
        - Wenn ein Schlüssel mit `/` endet, dann muss der entsprechende Wert ebenfalls mit `/` enden. Ein Schlüssel mit nachfolgendem `/` kann als Präfix verwendet werden, wenn Moduleadressen gemappt (oder remappt) werden.
        - Die Reihenfolge der Objekteigenschaften ist irrelevant: Wenn mehrere Schlüssel zum Modulspezifikator passen können, wird der spezifischste Schlüssel verwendet (mit anderen Worten, ein Spezifikator "olive/branch/" würde vor "olive/" passen).

- `integrity` {{optional_inline}}
  - : Definiert ein gültiges JSON-Objekt, bei dem die _Schlüssel_ Zeichenfolgen sind, die gültige absolute oder relative URLs (beginnend mit `/`, `./` oder `../`) enthalten, und die entsprechenden _Werte_ gültige [Integritätsmetadata](/de/docs/Web/Security/Defenses/Subresource_Integrity#using_subresource_integrity) sind.

    Wenn die URL eines Skripts, das ein Modul importiert oder vorlädt, mit einem Schlüssel im `integrity`-Objekt übereinstimmt, werden die entsprechenden Integritätsmetadata auf die Fetch-Optionen des Skripts angewendet, es sei denn, sie haben bereits Integritätsmetadata angehängt.

- `scopes` {{optional_inline}}
  - : Bereiche definieren pfadspezifische [Modulspezifikatormaps](#module_specifier_map), die die Wahl der Map basierend auf dem Pfad des Moduls importierenden Codes ermöglichen.

    Das Scopes-Objekt ist ein gültiges JSON-Objekt, bei dem jede Eigenschaft ein `<scope key>` ist, das ein URL-Pfad mit einem entsprechenden Wert ist, der eine `<module specifier map>` ist.

    Wenn die URL eines Skripts, das ein Modul importiert, mit einem `<scope key>`-Pfad übereinstimmt, wird zunächst der mit dem Schlüssel assoziierte `<module specifier map>`-Wert auf übereinstimmende Spezifikatoren geprüft. Wenn mehrere übereinstimmende Bereichsschlüssel vorhanden sind, werden die Werte, die mit den spezifischsten/ganzheitlichsten Bereichspfaden assoziiert sind, zuerst auf übereinstimmende Modulspezifikatoren geprüft. Die Fallback-Modulspezifikatormap in `imports` wird verwendet, wenn es keine übereinstimmenden Modulspezifikatorschlüssel in einer der übereinstimmenden bereichsspezifischen Modulspezifikatormaps gibt.

    Beachten Sie, dass der Bereich nicht beeinflusst, wie eine Adresse aufgelöst wird; relative Adressen werden immer zur Basis-URL der Importmap aufgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript-Module > Module mit Importmaps importieren](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps)
- [Das `type`-Attribut von HTML-`<script>`-Elementen](/de/docs/Web/HTML/Reference/Elements/script/type)
- [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import)
- [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import)
