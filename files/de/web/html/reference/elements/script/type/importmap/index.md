---
title: <script type="importmap">
short-title: importmap
slug: Web/HTML/Reference/Elements/script/type/importmap
l10n:
  sourceCommit: 16c2dc9c347065f648a0d6204b814657480ed25b
---

Der **`importmap`**-Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)-Attributs des [`<script>`-Elements](/de/docs/Web/HTML/Reference/Elements/script) gibt an, dass der Inhalt des Elements eine Importkarte (import map) enthält.

Eine Importkarte ist ein JSON-Objekt, das es Entwicklern ermöglicht, zu steuern, wie der Browser Modulspezifizierer auflöst, wenn [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) importiert werden. Sie bietet eine Zuordnung zwischen dem Text, der als Modulspezifizierer in einer [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) oder dem [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) verwendet wird, und dem entsprechenden Wert, der den Text beim Auflösen des Spezifizierers ersetzt. Das JSON-Objekt muss dem [JSON-Darstellungsformat der Importkarte](#json-darstellung_von_importkarten) entsprechen.

Eine Importkarte wird verwendet, um Modulspezifizierer in statischen und dynamischen Importen aufzulösen und muss daher vor allen `<script>`-Elementen deklariert und verarbeitet werden, die Module mit in der Karte deklarierten Spezifizierern importieren. Beachten Sie, dass die Importkarte nur auf Modulspezifizierer in der [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) oder dem [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) für in Dokumente geladene Module angewendet wird; sie gilt nicht für den im `src`-Attribut eines `<script>`-Elements angegebenen Pfad oder für Module, die in Worker oder Worklets geladen werden.

Weitere Informationen finden Sie im Abschnitt [Importieren von Modulen mit Importkarten](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) im JavaScript-Module-Leitfaden.

## Syntax

```html
<script type="importmap">
  // JSON object defining import
</script>
```

Die Attribute `src`, `async`, `nomodule`, `defer`, `crossorigin`, `integrity` und `referrerpolicy` dürfen nicht angegeben werden.

### Ausnahmen

- `TypeError`
  - : Die Importkartendefinition ist kein JSON-Objekt, der `importmap`-Schlüssel ist definiert, aber sein Wert ist kein JSON-Objekt, oder der `scopes`-Schlüssel ist definiert, aber sein Wert ist kein JSON-Objekt.

Browser generieren Konsolenwarnungen für andere Fälle, in denen das Importkarten-JSON nicht dem [Importkarten-Schema](#json-darstellung_von_importkarten) entspricht.

## Beschreibung

Beim Importieren eines [JavaScript-Moduls](/de/docs/Web/JavaScript/Guide/Modules) haben sowohl die [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) als auch der [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) einen "Modulspezifizierer", der angibt, welches Modul importiert wird. Ein Browser muss in der Lage sein, diesen Spezifizierer zu einer absoluten URL aufzulösen, um das Modul zu importieren.

Zum Beispiel importieren die folgenden Anweisungen Elemente aus dem Modulspezifizierer `"https://example.com/shapes/circle.js"`, der eine absolute URL ist, und dem Modulspezifizierer `"./modules/shapes/square.js"`, der ein pfadrelativer zum Basis-URL des Dokuments ist.

```js
import { name as circleName } from "https://example.com/shapes/circle.js";
import { name as squareName, draw } from "./modules/shapes/square.js";
```

Importkarten ermöglichen es Entwicklern, (fast) beliebigen Text im Modulspezifizierer anzugeben; die Karte bietet einen entsprechenden Wert, der den Text ersetzt, wenn der Modulspezifizierer aufgelöst wird.

### Bare Module

Die untenstehende Importkarte definiert einen `imports`-Schlüssel, der eine "Modulspezifiziererkarte" mit den Eigenschaften `circle` und `square` enthält.

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

Mit dieser Importkarte können wir dieselben Module wie oben importieren, jedoch mit "Bare Modules" in unseren Modulspezifizierern:

```js
import { name as circleName } from "circle";
import { name as squareName, draw } from "square";
```

### Zuordnung von Pfadpräfixen

Ein Schlüssel in der Modulspezifiziererkarte kann auch verwendet werden, um ein Pfadpräfix in einem Modulspezifizierer neu zuzuordnen. Beachten Sie, dass in diesem Fall sowohl die Eigenschaft als auch der zugeordnete Pfad mit einem Schrägstrich (`/`) enden müssen.

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

### Pfade im Modulspezifiziererkarte-Schlüssel

Modulspezifizierer-Schlüssel müssen keine einfachen Wörternamen ("Bare Names") sein. Sie können auch Pfadtrennzeichen enthalten oder mit diesen enden, oder absolute URLs sein oder relative URL-Pfade, die mit `/`, `./` oder `../` beginnen.

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

Wenn es mehrere Modulspezifizierer-Schlüssel in einer Modulspezifiziererkarte gibt, die möglicherweise übereinstimmen, wird der spezifischste Schlüssel ausgewählt (d.h. der mit dem längeren Pfad/Wert).

Ein Modulspezifizierer von `./foo/../js/app.js` würde zu `./js/app.js` aufgelöst, bevor er abgeglichen wird. Das bedeutet, dass ein Modulspezifizierer-Schlüssel von `./js/app.js` mit dem Modulspezifizierer übereinstimmen würde, auch wenn sie nicht genau gleich sind.

### Modulsspezifizierer Karten mit Scopes

Sie können den `scopes`-Schlüssel verwenden, um Zuordnungen bereitzustellen, die nur verwendet werden, wenn das Skript, das das Modul importiert, einen bestimmten URL-Pfad enthält. Wenn die URL des ladenden Skripts mit dem angegebenen Pfad übereinstimmt, wird die Zuordnung verwendet, die mit dem Scope verbunden ist. Dies ermöglicht die Verwendung verschiedener Versionen des Moduls, abhängig davon, welches Code das Importieren durchführt.

Zum Beispiel wird die untenstehende Karte nur die gescope-te Karte verwenden, wenn das ladende Modul eine URL enthält, die den Pfad enthält: "/modules/custom-shapes/".

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

Wenn mehrere Scopes mit der Referrer-URL übereinstimmen, wird der spezifischste Scope-Pfad verwendet (der Scope-Schlüsselname mit dem längsten Namen). Der Browser fällt auf den nächsten spezifischsten gescope-ten Pfad zurück, wenn kein übereinstimmender Spezifizierer vorhanden ist, und so weiter, bis schließlich auf die Modulspezifizierer-Karte im `imports`-Schlüssel zurückgefallen wird.

### Integritätsmetadatenkarte

Sie können den `integrity`-Schlüssel verwenden, um Zuordnungen für [Integritätsmetadaten](/de/docs/Web/Security/Defenses/Subresource_Integrity#using_subresource_integrity) des Moduls bereitzustellen. Dies ermöglicht es Ihnen, die Integrität von dynamisch oder statisch importierten Modulen sicherzustellen. `integrity` ermöglicht es Ihnen auch, ein Fallback für Top-Level- oder vorgeladene Module bereitzustellen, falls diese nicht bereits ein `integrity`-Attribut enthalten.

Die Kartenschlüssel repräsentieren Modul-URLs, die entweder absolut oder relativ sein können (beginnend mit `/`, `./` oder `../`). Die Kartenwerte repräsentieren Integritätsmetadaten, identisch mit denen, die in [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity)-Attributswerten verwendet werden.

Zum Beispiel definiert die untenstehende Karte Integritätsmetadaten für das `square.js`-Modul (direkt) und seinen Bare-Spezifizierer (transitiv über den `imports`-Schlüssel).

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

### Zusammenführen mehrerer Importkarten

Unterstützende Browser können eine oder mehrere Importkarten an beliebiger Stelle im Dokument deklarieren, vorausgesetzt, sie sind definiert, bevor ein Modul, das von ihnen abhängt, geladen wird (einige [Browserversionen](#browser-kompatibilität) erlauben nur eine einzige Importkartendeklaration, die vor dem Laden eines Moduls erscheinen muss).

Intern pflegen Browser eine einzige globale Importkarten-Darstellung. Wenn mehrere Importkarten in ein Dokument aufgenommen werden, werden deren Inhalte bei der Registrierung in die globale Importkarte zusammengeführt.

Zum Beispiel, berücksichtigen Sie die folgenden zwei Importkarten:

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

Diese entsprechen der folgenden einzelnen Importkarte:

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

Modulspezifizierer in jeder registrierten Karte, die vorher bereits aufgelöst wurden, werden ignoriert. Nachfolgende Auflösungen dieser Spezifizierer liefern die gleichen Ergebnisse wie ihre vorherigen Auflösungen.

Zum Beispiel, wenn der Modulspezifizierer `/app/helper.js` bereits aufgelöst wurde, wäre die folgende neue Importkarte:

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

Die `/app/helper.js`-Regel wurde ignoriert und nicht in die Karte aufgenommen.

Ebenso werden Modulspezifizierer in einer registrierten Karte, die bereits zu URLs in der globalen Karte zugeordnet waren, ignoriert; ihre vorherige Zuordnung bleibt bestehen.

Zum Beispiel, die folgenden zwei Importkarten:

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

sind äquivalent zu der folgenden einzelnen Importkarte:

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

Die `/app/helper/`-Regel wurde aus der zweiten Karte entfernt.

> [!NOTE]
> In Browsern, die Importkarten nicht unterstützen (sehen Sie sich die [Kompatibilitätsdaten](#browser-kompatibilität) an), kann ein [Polyfill](https://github.com/guybedford/es-module-shims) verwendet werden, um Probleme im Zusammenhang mit der Modulauflösung zu vermeiden.

## JSON-Darstellung von Importkarten

Das Folgende ist eine "formale" Definition der JSON-Darstellung einer Importkarte.

Die Importkarte muss ein gültiges JSON-Objekt sein, das beliebige der optionalen Schlüssel `imports`, `scopes` und `integrity` definieren kann. Der Wert jedes Schlüssels muss ein Objekt sein, das leer sein kann.

- `imports` {{optional_inline}}
  - : Der Wert ist eine [Modulspezifizierer-Karte](#module_specifier_map), die die Zuordnungen zwischen Modulspezifizierertest, das in einer `import`-Anweisung oder einem `import()`-Operator auftreten könnte, und dem Text bereitstellt, der es bei der Auflösung des Spezifizierers ersetzt.

    Dies ist die Fallback-Karte, die nach passenden Modulspezifizierern durchsucht wird, wenn keine `scopes`-Pfad-URLs übereinstimmen oder wenn Modulspezifizierer-Karten in passenden `scopes`-Pfade keinen Schlüssel enthalten, der mit dem Modulspezifizierer übereinstimmt.
    - `<module specifier map>`
      - : Eine "Modulspezifizierer-Karte" ist ein gültiges JSON-Objekt, in dem die _Schlüssel_ Text sind, der im Modulspezifizierer beim Importieren eines Moduls vorhanden sein kann, und die entsprechenden _Werte_ die URLs oder Pfade sind, die diesen Text ersetzen, wenn der Modulspezifizierer zu einer Adresse aufgelöst wird.

        Das JSON-Objekt der Modulspezifizierer-Karte hat die folgenden Anforderungen:
        - Keiner der Schlüssel darf leer sein.
        - Alle Werte müssen Strings sein, die entweder eine gültige absolute URL oder einen gültigen URL-String definieren, der mit `/`, `./` oder `../` beginnt.
        - Wenn ein Schlüssel mit `/` endet, muss der entsprechende Wert ebenfalls mit `/` enden.
          Ein Schlüssel mit einem abschließenden `/` kann als Präfix verwendet werden, wenn Moduladressen zugeordnet (oder neu zugeordnet) werden.
        - Die Ordnung der Objekteigenschaften ist irrelevant: Wenn mehrere Schlüssel mit dem Modulspezifizierer übereinstimmen können, wird der spezifischste Schlüssel verwendet (mit anderen Worten, ein Spezifizierer "olive/branch/" würde vor "olive/" übereinstimmen).

- `integrity` {{optional_inline}}
  - : Definiert ein gültiges JSON-Objekt, in dem die _Schlüssel_ Strings mit gültigen absoluten oder relativen URLs (beginnend mit `/`, `./`, oder `../`) sind,
    und die entsprechenden _Werte_ sind gültige [Integritätsmetadaten](/de/docs/Web/Security/Defenses/Subresource_Integrity#using_subresource_integrity).

    Wenn die URL eines Skripts, das ein Modul importiert oder vorlädt, mit einem Schlüssel im `integrity`-Objekt übereinstimmt, werden die entsprechenden Integritätsmetadaten auf die Fetch-Optionen des Skripts angewendet,
    es sei denn, sie haben bereits Integritätsmetadaten angehängt.

- `scopes` {{optional_inline}}
  - : Scopes definieren pfadspezifische [Modulspezifizierer-Karten](#module_specifier_map) und ermöglichen die Wahl der Karte abhängig vom Pfad des Codes, der das Modul importiert.

    Das Scopes-Objekt ist ein gültiges JSON-Objekt, in dem jede Eigenschaft ein `<scope key>` ist, der ein URL-Pfad ist, mit einem entsprechenden Wert, der eine `<module specifier map>` ist.

    Wenn die URL eines Skripts, das ein Modul importiert, mit einem `<scope key>`-Pfad übereinstimmt, dann wird der mit dem Schlüssel verbundene `<module specifier map>`-Wert zuerst auf übereinstimmende Spezifizierer überprüft.
    Wenn es mehrere übereinstimmende Scope-Schlüssel gibt, wird der Wert, der mit den spezifischsten/genesten Scope-Pfaden verknüpft ist, zuerst auf übereinstimmende Modulspezifizierer überprüft.
    Die Fallback-Modulspezifizierer-Karte in `imports` wird verwendet, wenn keine übereinstimmenden Modulspezifizierer-Schlüssel in einer der übereinstimmenden gescope-ten Modulspezifizierer-Karten vorhanden sind.

    Beachten Sie, dass der Scope nicht ändert, wie eine Adresse aufgelöst wird; relative Adressen werden immer auf die Basis-URL der Importkarte aufgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript-Module > Importieren von Modulen mit Importkarten](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps)
- [Das `type`-Attribut von HTML-`<script>`-Elementen](/de/docs/Web/HTML/Reference/Elements/script/type)
- [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import)
- [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import)
