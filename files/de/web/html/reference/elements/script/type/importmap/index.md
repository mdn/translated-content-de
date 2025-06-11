---
title: <script type="importmap">
short-title: importmap
slug: Web/HTML/Reference/Elements/script/type/importmap
l10n:
  sourceCommit: d9b6cad3b5e14b42061608fb5283e32c75808a3d
---

{{HTMLSidebar}}

Der **`importmap`** Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/script/type) Attributs des [`<script>` Elements](/de/docs/Web/HTML/Reference/Elements/script) gibt an, dass der Inhalt des Elements eine Importmap enthält.

Eine Importmap ist ein JSON-Objekt, das es Entwicklern ermöglicht, zu steuern, wie der Browser Modulspezifizierer auflöst, wenn [Javascript-Module](/de/docs/Web/JavaScript/Guide/Modules) importiert werden.
Es bietet eine Zuordnung zwischen dem im [`import` statement](/de/docs/Web/JavaScript/Reference/Statements/import) oder [`import()` Operator](/de/docs/Web/JavaScript/Reference/Operators/import) verwendeten Modulspezifizierer-Text und dem entsprechenden Wert, der den Text beim Auflösen des Spezifizierers ersetzt.
Das JSON-Objekt muss dem [JSON-Darstellungsformat für Importmaps](#json-darstellung_von_importmaps) entsprechen.

Eine Importmap wird verwendet, um Modulspezifizierer in statischen und dynamischen Importen aufzulösen, und muss daher deklariert und verarbeitet werden, bevor `<script>` Elemente importiert werden, die Spezifizierer verwenden, die in der Map deklariert sind.
Beachten Sie, dass die Importmap nur auf Modulspezifizierer im [`import` statement](/de/docs/Web/JavaScript/Reference/Statements/import) oder [`import()` Operator](/de/docs/Web/JavaScript/Reference/Operators/import) für Module angewandt wird, die in Dokumente geladen werden; sie gilt nicht für den im `src` Attribut eines `<script>` Elements angegebenen Pfad oder für Module, die in Worker oder Worklets geladen werden.

Für weitere Informationen siehe den Abschnitt [Module mit Importmaps importieren](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) im JavaScript-Module-Leitfaden.

## Syntax

```html
<script type="importmap">
  // JSON object defining import
</script>
```

Die Attribute `src`, `async`, `nomodule`, `defer`, `crossorigin`, `integrity` und `referrerpolicy` dürfen nicht angegeben werden.

### Ausnahmen

- `TypeError`
  - : Die Definition der Importmap ist kein JSON-Objekt, der `importmap` Schlüssel ist definiert, aber sein Wert ist kein JSON-Objekt, oder der `scopes` Schlüssel ist definiert, aber sein Wert ist kein JSON-Objekt.

Browser erzeugen Konsolenwarnungen für andere Fälle, wo das Importmap-JSON nicht dem [Importmap Schema](#json-darstellung_von_importmaps) entspricht.

## Beschreibung

Beim Importieren eines [JavaScript-Moduls](/de/docs/Web/JavaScript/Guide/Modules) haben sowohl das [`import` statement](/de/docs/Web/JavaScript/Reference/Statements/import) als auch der [`import()` Operator](/de/docs/Web/JavaScript/Reference/Operators/import) einen "Modulspezifizierer", der das zu importierende Modul angibt.
Ein Browser muss in der Lage sein, diesen Spezifizierer zu einer absoluten URL aufzulösen, um das Modul zu importieren.

Zum Beispiel importieren die folgenden Anweisungen Elemente vom Modulspezifizierer `"https://example.com/shapes/circle.js"`, was eine absolute URL ist, und vom Modulspezifizierer `"./modules/shapes/square.js"`, was ein Pfad relativ zur Basis-URL des Dokuments ist.

```js
import { name as circleName } from "https://example.com/shapes/circle.js";
import { name as squareName, draw } from "./modules/shapes/square.js";
```

Importmaps ermöglichen es Entwicklern, (fast) beliebigen Text im Modulspezifizierer festzulegen; die Map bietet einen entsprechenden Wert, der den Text ersetzt, wenn der Modulspezifizierer aufgelöst wird.

### Bare-Module

Die folgende Importmap definiert einen `imports` Schlüssel, der eine "Modulspezifizierer-Map" mit den Eigenschaften `circle` und `square` enthält.

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

Mit dieser Importmap können wir dieselben Module wie oben, aber mit "Bare-Modules" in unseren Modulspezifizierern, importieren:

```js
import { name as circleName } from "circle";
import { name as squareName, draw } from "square";
```

### Pfadvorsilben abbilden

Ein Modulspezifizierer-Map-Schlüssel kann auch verwendet werden, um ein Pfadvorsatz in einem Modulspezifizierer neu zuzuordnen.
Beachten Sie, dass in diesem Fall sowohl die Eigenschaft als auch der abgebildete Pfad mit einem Schrägstrich (`/`) enden müssen.

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

Wir könnten dann zum Beispiel ein kreisförmiges Modul wie gezeigt importieren.

```js
import { name as circleName } from "shapes/circle.js";
```

### Pfade im Modulspezifizierer-Map-Schlüssel

Modulspezifizierer-Schlüssel müssen nicht einzelne Wortnamen ("bare names") sein.
Sie können auch Pfadtrennzeichen enthalten oder mit ihnen enden, oder absolute URLs sein, oder relative URL-Pfade, die mit `/`, `./`, oder `../` beginnen.

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

Wenn es mehrere Modulspezifizierer-Schlüssel in einer Modulspezifizierer-Map gibt, die passen könnten, wird der spezifischste Schlüssel ausgewählt (d.h. der mit dem längeren Pfad/Wert).

Ein Modulspezifizierer von `./foo/../js/app.js` würde auf `./js/app.js` aufgelöst werden, bevor er abgeglichen wird.
Das bedeutet, dass ein Modulspezifizierer-Schlüssel von `./js/app.js` den Modulspezifizierer abgleichen würde, auch wenn sie nicht genau gleich sind.

### Bereichsbezogene Modulspezifizierer-Maps

Sie können den `scopes` Schlüssel verwenden, um Zuordnungen festzulegen, die nur verwendet werden, wenn das Modul enthaltende Skript einen bestimmten URL-Pfad enthält.
Wenn die URL des ladenden Skripts dem bereitgestellten Pfad entspricht, wird die mit dem Bereich verknüpfte Zuordnung verwendet.
Dies ermöglicht es, verschiedene Versionen des Moduls je nach importierendem Code zu verwenden.

Zum Beispiel wird die nachfolgende Map nur die bereichsbezogene Map verwenden, wenn das ladende Modul eine URL hat, die den Pfad: "/modules/custom-shapes/" enthält.

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

Wenn mehrere Bereiche mit der Referrer-URL übereinstimmen, wird der spezifischste Bereichspfad verwendet (der Bereich-Schlüsselname mit dem längsten Namen).
Der Browser fällt auf den nächst genaueren Bereichspfad zurück, wenn kein übereinstimmender Spezifizierer gefunden wird, und so weiter, bis schließlich auf die Modulspezifizierer-Map im `imports` Schlüssel zurückgefallen wird.

### Integritätsmetadaten-Map

Sie können den `integrity` Schlüssel verwenden, um eine Zuordnung für Modul-[Integritätsmetadaten](/de/docs/Web/Security/Subresource_Integrity#using_subresource_integrity) bereitzustellen.
Dies ermöglicht es Ihnen, die Integrität von dynamisch oder statisch importierten Modulen sicherzustellen.
`integrity` ermöglicht auch, einen Fallback für Top-Level- oder vorgeladene Module bereitzustellen, falls sie nicht bereits ein `integrity` Attribut enthalten.

Die Mapschlüssel repräsentieren Modul-URLs, die absolut oder relativ sein können (beginnend mit `/`, `./`, oder `../`).
Die Mapwerte repräsentieren Integritätsmetadaten, identisch mit denen, die in [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attributwerten verwendet werden.

Zum Beispiel definiert die nachfolgende Map Integritätsmetadaten für das `square.js` Modul (direkt) und seinen unmodifizierten Spezifizierer (transitiv, über den `imports` Schlüssel).

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

### Zusammenführen mehrerer Importmaps

Intern pflegen Browser eine einzige globale Importmap-Darstellung. Wenn mehrere Importmaps in einem Dokument enthalten sind, werden deren Inhalte beim Registrieren in die globale Importmap zusammengeführt.

Zum Beispiel, betrachten Sie die folgenden zwei Importmaps:

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

Diese sind äquivalent zur folgenden einzigen Importmap:

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

Vorher aufgelöste Modulspezifizierer in jeder registrierten Map werden verworfen. Nachfolgende Auflösungen dieser Spezifizierer liefern die gleichen Ergebnisse wie ihre vorherigen Auflösungen.

Zum Beispiel, wenn der Modulspezifizierer `/app/helper.js` bereits aufgelöst wurde, wäre die folgende neue Importmap:

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

äquivalent zu:

```html
<script type="importmap">
  {
    "imports": {
      "lodash": "/node_modules/lodash-es/lodash.js"
    }
  }
</script>
```

Die `/app/helper.js` Regel wurde ignoriert und nicht in die Map aufgenommen.

Ebenso werden Modulspezifizierer in einer registrierten Map, die bereits auf URLs in der globalen Map abgebildet waren, verworfen; ihre vorherige Zuordnung behält ihre Gültigkeit.

Zum Beispiel, die folgenden zwei Importmaps:

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

sind äquivalent zur folgenden einzigen Importmap:

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

Die `/app/helper/` Regel wurde aus der zweiten Map entfernt.

> [!NOTE]
> In nicht unterstützenden Browsern (überprüfen Sie die [Kompatibilitätsdaten](#browser-kompatibilität)) kann ein [Polyfill](https://github.com/guybedford/es-module-shims) verwendet werden, um Probleme im Zusammenhang mit der Modulauflösung zu vermeiden.

## JSON-Darstellung von Importmaps

Das Folgende ist eine "formale" Definition der JSON-Darstellung von Importmaps.

Die Importmap muss ein gültiges JSON-Objekt sein, das beliebige optionale Schlüssel `imports`, `scopes` und `integrity` definieren kann. Der Wert jedes Schlüssels muss ein Objekt sein, das leer sein kann.

- `imports` {{optional_inline}}

  - : Der Wert ist eine [Modulspezifizierer-Map](#module_specifier_map), die die Zuordnungen zwischen Modulspezifizierer-Text, die in einem `import` statement oder `import()` Operator erscheinen könnten, und dem Text, der ihn ersetzt, wenn der Spezifizierer aufgelöst wird, bereitstellt.

    Dies ist die Fallback-Map, die durchsucht wird, wenn keine `scopes` Pfad-URLs übereinstimmen, oder wenn Modulspezifizierer-Maps in übereinstimmenden `scopes` Pfaden keinen Schlüssel enthalten, der mit dem Modulspezifizierer übereinstimmt.

    - `<modulspezifizierer-Map>`

      - : Eine "Modulspezifizierer-Map" ist ein gültiges JSON-Objekt, in dem die _Schlüssel_ Text sind, die im Modulspezifizierer beim Importieren eines Moduls vorhanden sein können, und die entsprechenden _Werte_ die URLs oder Pfade sind, die diesen Text ersetzen, wenn der Modulspezifizierer zu einer Adresse aufgelöst wird.

        Das Modulspezifizierer-Map-JSON-Objekt hat die folgenden Anforderungen:

        - Keiner der Schlüssel darf leer sein.
        - Alle Werte müssen Zeichenketten sein, die entweder eine gültige absolute URL oder einen gültigen URL-String definieren, der mit `/`, `./`, oder `../` beginnt.
        - Wenn ein Schlüssel mit `/` endet, muss auch der entsprechende Wert mit `/` enden.
          Ein Schlüssel mit einem nachgestellten `/` kann als Präfix für die Zuordnung (oder Neuzuordnung) von Moduladressen verwendet werden.
        - Die Reihenfolge der Objekteigenschaften ist irrelevant: Wenn mehrere Schlüssel mit dem Modulspezifizierer übereinstimmen können, wird der spezifischste Schlüssel verwendet (mit anderen Worten, ein Spezifizierer "olive/branch/" würde vor "olive/" passen).

- `integrity` {{optional_inline}}

  - : Definiert ein gültiges JSON-Objekt, in dem die _Schlüssel_ Zeichenketten sind, die gültige absolute oder relative URLs (beginnend mit `/`, `./`, oder `../`) enthalten,
    und die entsprechenden _Werte_ sind gültige [Integritätsmetadaten](/de/docs/Web/Security/Subresource_Integrity#using_subresource_integrity).

    Wenn die URL eines Skripts, das ein Modul importiert oder vorlädt, einem Schlüssel im `integrity` Objekt entspricht, werden die entsprechenden Integritätsmetadaten auf die Abrufoptionen des Skripts angewandt,
    es sei denn, sie haben bereits Integritätsmetadaten zugewiesen.

- `scopes` {{optional_inline}}

  - : Bereiche definieren pfadspezifische [Modulspezifizierer-Maps](#module_specifier_map), die die Wahl der Map von dem Pfad des importierenden Codes abhängig machen.

    Das Scopes-Objekt ist ein gültiges JSON-Objekt, bei dem jede Eigenschaft ein `<scope key>` ist, ein URL-Pfad, mit einem entsprechenden Wert, der eine `<modulspezifizierer-Map>` ist.

    Wenn die URL eines Skripts, das ein Modul importiert, einem `<scope key>` Pfad entspricht, wird der `<modulspezifizierer-Map>` Wert, der mit dem Schlüssel verknüpft ist, zuerst auf übereinstimmende Spezifizierer überprüft.
    Wenn es mehrere übereinstimmende Bereichsschlüssel gibt, werden die Werte, die mit den spezifischsten/genesten Bereichspfaden verknüpft sind, zuerst auf übereinstimmende Modulspezifizierer überprüft.
    Die Fallback-Modulspezifizierer-Map in `imports` wird verwendet, wenn es keine übereinstimmenden Modulspezifizierer-Schlüssel in einer der übereinstimmenden bereichsbezogenen Modulspezifizierer-Maps gibt.

    Beachten Sie, dass der Bereich nicht beeinflusst, wie eine Adresse aufgelöst wird; relative Adressen werden immer zur Basis-URL der Importmap aufgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript-Module > Module mit Importmaps importieren](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps)
- [Das `type` Attribut von HTML `<script>` Elementen](/de/docs/Web/HTML/Reference/Elements/script/type)
- [`import` Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import)
- [`import()` Operator](/de/docs/Web/JavaScript/Reference/Operators/import)
