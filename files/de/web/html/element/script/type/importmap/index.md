---
title: <script type="importmap">
slug: Web/HTML/Element/script/type/importmap
l10n:
  sourceCommit: 848771d9efdc57ad84d643081cf91e89355c751b
---

{{HTMLSidebar}}

Der **`importmap`** Wert des [`type`](/de/docs/Web/HTML/Element/script/type) Attributs des [`<script>` Elements](/de/docs/Web/HTML/Element/script) gibt an, dass der Inhalt des Elements eine Import-Karte enthält.

Eine Import-Karte ist ein JSON-Objekt, das es Entwicklern ermöglicht, zu steuern, wie der Browser Modulspezifikatoren beim Importieren von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) auflöst.
Es bietet eine Zuordnung zwischen dem Text, der als Modulspezifikator in einem [`import` Statement](/de/docs/Web/JavaScript/Reference/Statements/import) oder [`import()` Operator](/de/docs/Web/JavaScript/Reference/Operators/import) verwendet wird, und dem entsprechenden Wert, der den Text beim Auflösen des Spezifikators ersetzt.
Das JSON-Objekt muss dem [Import-Karten JSON-Darstellungsformat](#import-karten_json-darstellung) entsprechen.

Eine Import-Karte wird verwendet, um Modulspezifikatoren in statischen und dynamischen Importen aufzulösen und muss daher deklariert und verarbeitet werden, bevor jegliche `<script>` Elemente, die Module mithilfe von in der Karte deklarierten Spezifikatoren importieren, geladen werden.
Beachten Sie, dass die Import-Karte nur auf Modulspezifikatoren im [`import` Statement](/de/docs/Web/JavaScript/Reference/Statements/import) oder [`import()` Operator](/de/docs/Web/JavaScript/Reference/Operators/import) für Module angewendet wird, die in Dokumente geladen werden; sie gilt nicht für den Pfad, der im `src` Attribut eines `<script>` Elements angegeben ist, oder für Module, die in Worker oder Worklets geladen werden.

Weitere Informationen finden Sie im Abschnitt [Module mittels Import-Karten importieren](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) im Leitfaden zu JavaScript-Modulen.

## Syntax

```html
<script type="importmap">
  // JSON object defining import
</script>
```

Die Attribute `src`, `async`, `nomodule`, `defer`, `crossorigin`, `integrity` und `referrerpolicy` dürfen nicht angegeben werden.

### Ausnahmen

- `TypeError`
  - : Die Definition der Import-Karte ist kein JSON-Objekt, der `importmap` Schlüssel ist definiert, aber sein Wert ist kein JSON-Objekt, oder der `scopes` Schlüssel ist definiert, aber sein Wert ist kein JSON-Objekt.

Browser generieren Konsolenwarnungen für andere Fälle, in denen das JSON der Import-Karte nicht dem [Schema der Import-Karte](#import-karten_json-darstellung) entspricht.

## Beschreibung

Beim Importieren eines [JavaScript-Moduls](/de/docs/Web/JavaScript/Guide/Modules) haben sowohl das [`import` Statement](/de/docs/Web/JavaScript/Reference/Statements/import) als auch der [`import()` Operator](/de/docs/Web/JavaScript/Reference/Operators/import) einen "Modulspezifikator", der das zu importierende Modul angibt.
Ein Browser muss diesen Spezifikator in eine absolute URL auflösen können, um das Modul zu importieren.

Zum Beispiel importieren die folgenden Anweisungen Elemente vom Modulspezifikator `"./modules/shapes/square.js"`, der ein Pfad relativ zur Basis-URL des Dokuments ist, und vom Modulspezifikator `"https://example.com/shapes/circle.js"`, der eine absolute URL ist.

```js
import { name as squareName, draw } from "./modules/shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

Import-Karten ermöglichen es Entwicklern, (fast) beliebigen Text im Modulspezifikator zu definieren; die Karte bietet einen entsprechenden Wert, der den Text beim Auflösen des Modulspezifikators ersetzt.

### Bare Module

Die folgende Import-Karte definiert einen `imports` Schlüssel, der eine "Modulspezifikatorkarte" mit den Eigenschaften `square` und `circle` enthält.

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

Mit dieser Import-Karte können wir dieselben Module wie oben importieren, jedoch unter der Verwendung von "Bare Modules" in unseren Modulspezifikatoren:

```js
import { name as squareName, draw } from "square";
import { name as circleName } from "circle";
```

### Zuordnung von Pfadpräfixen

Ein Modulspezifikatorkartenschlüssel kann auch verwendet werden, um ein Pfadpräfix in einem Modulspezifikator neu zuzuordnen.
Beachten Sie, dass in diesem Fall sowohl die Eigenschaft als auch der zugeordnete Pfad mit einem Schrägstrich (`/`) enden müssen.

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

### Pfade im Modulspezifikatorkartenschlüssel

Modulspezifikatorkartenschlüssel müssen keine Einzelwortnamen ("Bare Names") sein.
Sie können auch Pfadtrennzeichen enthalten oder mit diesen enden, absolute URLs sein oder relative URL-Pfade sein, die mit `/`, `./` oder `../` beginnen.

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

Wenn es mehrere Modulspezifikatorkartenschlüssel in einer Modulspezifikatorkarte gibt, die passen könnten, wird der spezifischste Schlüssel ausgewählt (d.h. derjenige mit dem längeren Pfad/Wert).

Ein Modulspezifikator von `./foo/../js/app.js` würde zu `./js/app.js` aufgelöst, bevor er übereinstimmt.
Das bedeutet, dass ein Modulspezifikatorkartenschlüssel von `./js/app.js` mit dem Modulspezifikator übereinstimmen würde, auch wenn sie nicht genau gleich sind.

### Gezielte Modulspezifikatorkarten

Sie können den `scopes` Schlüssel verwenden, um Zuordnungen bereitzustellen, die nur verwendet werden, wenn das Skript, das das Modul importiert, einen bestimmten URL-Pfad enthält.
Wenn die URL des ladenden Skripts mit dem angegebenen Pfad übereinstimmt, wird die mit dem Geltungsbereich verknüpfte Zuordnung verwendet.
Dies ermöglicht die Verwendung unterschiedlicher Versionen des Moduls, je nachdem, welcher Code den Import durchführt.

Zum Beispiel wird die untenstehende Karte die gezielte Karte nur verwenden, wenn das ladende Modul eine URL hat, die den Pfad enthält: "/modules/custom-shapes/".

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

Wenn mehrere Geltungsbereiche mit der Referrer-URL übereinstimmen, wird der spezifischste Geltungsbereichspfad verwendet (der Geltungsbereichsschlüssel mit dem längsten Namen).
Der Browser weicht auf den nächstspezifischen gezielten Pfad aus, wenn kein passender Spezifikator vorhanden ist, und so weiter, wenn nötig bis zur Modulspezifikatorkarte im `imports` Schlüssel.

### Integritätsmetadatenkarte

Sie können den `integrity` Schlüssel verwenden, um Zuordnungen für [Integritätsmetadaten](/de/docs/Web/Security/Subresource_Integrity#using_subresource_integrity) bereitzustellen.
Das ermöglicht Ihnen, die Integrität von dynamisch oder statisch importierten Modulen sicherzustellen.
`integrity` ermöglicht auch, ein Fallback für Top-Level oder vorab geladene Module bereitzustellen, falls diese nicht bereits ein `integrity` Attribut enthalten.

Die Karten-Schlüssel stellen Modul-URLs dar, die entweder absolut oder relativ (beginnend mit `/`, `./` oder `../`) sein können.
Die Karten-Werte stellen Integritätsmetadaten dar, die identisch mit denen sind, die in [`integrity`](/de/docs/Web/HTML/Element/script#integrity) Attributwerten verwendet werden.

Zum Beispiel definiert die untenstehende Karte Integritätsmetadaten für das `square.js` Modul (direkt) und seinen Bare-Spezifikator (transitiv, über den `imports` Schlüssel).

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

### Verschmelzen mehrerer Import-Karten

Intern pflegen Browser eine einzelne globale Darstellung der Import-Karte. Wenn mehrere Import-Karten in einem Dokument enthalten sind, werden ihre Inhalte in die globale Import-Karte integriert, wenn sie registriert werden.

Betrachten Sie zum Beispiel die folgenden zwei Import-Karten:

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

Diese entsprechen der folgenden einzigen Import-Karte:

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

Modulspezifikatoren in jeder registrierten Karte, die bereits vorher aufgelöst wurden, werden ignoriert. Nachfolgende Auflösungen dieser Spezifikatoren liefern dieselben Ergebnisse wie ihre vorherigen Auflösungen.

Zum Beispiel, wenn der Modulspezifikator `/app/helper.js` bereits aufgelöst wurde, wäre die folgende neue Import-Karte:

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

Die `/app/helper.js` Regel wurde ignoriert und nicht in die Karte übernommen.

Ähnlich werden Modulspezifikatoren in einer registrierten Karte, die bereits zu URLs in der globalen Karte zugeordnet sind, ignoriert; ihre vorherige Zuordnung bleibt bestehen.

Zum Beispiel sind die folgenden zwei Import-Karten:

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

Äquivalent zur folgenden einzigen Import-Karte:

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

Die `/app/helper/` Regel wurde aus der zweiten Karte entfernt.

> [!NOTE]
> In nicht unterstützten Browsern (siehe die [Kompatibilitätsdaten](#browser-kompatibilität)) kann ein [Polyfill](https://github.com/guybedford/es-module-shims) verwendet werden, um Probleme im Zusammenhang mit der Modullösung zu vermeiden.

## Import-Karten JSON-Darstellung

Das Folgende ist eine "formale" Definition der JSON-Darstellung der Import-Karte.

Die Import-Karte muss ein gültiges JSON-Objekt sein, das beliebige optionale Schlüssel `imports`, `scopes` und `integrity` definieren kann. Jeder Schlüssel muss ein Objekt als Wert haben, das leer sein kann.

- `imports` {{optional_inline}}

  - : Der Wert ist eine [Modulspezifikatorkarte](#module_specifier_map), die die Zuordnungen zwischen Modulspezifikator-Text, der in einem `import` Statement oder `import()` Operator erscheinen könnte, und dem Text, der ihn beim Auflösen des Spezifikators ersetzt, bereitstellt.

    Dies ist die Fallback-Karte, die nach passenden Modulspezifikatoren durchsucht wird, wenn keine `scopes` Pfad-URLs übereinstimmen oder wenn Modulspezifikatorkarten in passenden `scopes` Pfaden keinen Schlüssel enthalten, der mit dem Modulspezifikator übereinstimmt.

    - `<module specifier map>`

      - : Eine "Modulspezifikatorkarte" ist ein gültiges JSON-Objekt, bei dem die _Schlüssel_ Text sind, der im Modulspezifikator beim Importieren eines Moduls vorhanden sein kann, und die entsprechenden _Werte_ die URLs oder Pfade sind, die diesen Text ersetzen, wenn der Modulspezifikator zu einer Adresse aufgelöst wird.

        Das Modulspezifikatorkarten-JSON-Objekt hat die folgenden Anforderungen:

        - Keiner der Schlüssel darf leer sein.
        - Alle Werte müssen Strings sein, die entweder eine gültige absolute URL oder einen gültigen URL-String definieren, der mit `/`, `./` oder `../` beginnt.
        - Wenn ein Schlüssel mit `/` endet, muss auch der entsprechende Wert mit `/` enden.
          Ein Schlüssel mit einem nachgestellten `/` kann als Präfix verwendet werden, um Modul-Adressen abzubilden (oder neu zuzuordnen).
        - Die Reihenfolge der Eigenschaften im Objekt ist irrelevant: Wenn mehrere Schlüssel mit dem Modulspezifikator übereinstimmen können, wird der spezifischste Schlüssel verwendet (in anderen Worten, ein Spezifikator "olive/branch/" würde vor "olive/" übereinstimmen).

- `integrity` {{optional_inline}}

  - : Definiert ein gültiges JSON-Objekt, bei dem die _Schlüssel_ Strings mit gültigen absoluten oder relativen URLs (beginnend mit `/`, `./` oder `../`) sind, und die entsprechenden _Werte_ gültige [Integritätsmetadaten](/de/docs/Web/Security/Subresource_Integrity#using_subresource_integrity) sind.

    Wenn die URL eines Skripts, das ein Modul importiert oder vorlädt, mit einem Schlüssel im `integrity` Objekt übereinstimmt, werden die entsprechenden Integritätsmetadaten auf die Abrufoptionen des Skripts angewendet, es sei denn, es sind bereits Integritätsmetadaten daran angehängt.

- `scopes` {{optional_inline}}

  - : Geltungsbereiche definieren pfadspezifische [Modulspezifikatorkarten](#module_specifier_map), die es erlauben, die Zuordnung abhängig vom Pfad des Codes auszuwählen, der das Modul importiert.

    Das Geltungsobjekt ist ein gültiges JSON-Objekt, bei dem jede Eigenschaft ein `<scope key>` ist, also ein URL-Pfad, mit einem entsprechenden Wert, der eine `<module specifier map>` ist.

    Wenn die URL eines Skripts, das ein Modul importiert, mit einem `<scope key>` Pfad übereinstimmt, wird der `<module specifier map>` Wert, der mit dem Schlüssel verknüpft ist, zuerst auf passende Spezifikatoren überprüft.
    Wenn es mehrere passende Geltungsbereichsschlüssel gibt, werden die Werte der spezifischsten/verschachtelten Geltungsbereiche zuerst auf passende Module überprüft.
    Die Fallback-Modulspezifikatorkarte in `imports` wird verwendet, wenn es keine passenden Modulspezifikatorkartenschlüssel in einem der passenden gezielten Modulspezifikatorkarten gibt.

    Beachten Sie, dass der Geltungsbereich nicht beeinflusst, wie eine Adresse aufgelöst wird; relative Adressen werden immer zur Basis-URL der Import-Karte aufgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript-Module > Module mittels Import-Karten importieren](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps)
- [Das `type` Attribut von HTML `<script>` Elementen](/de/docs/Web/HTML/Element/script/type)
- [`import` Statement](/de/docs/Web/JavaScript/Reference/Statements/import)
- [`import()` Operator](/de/docs/Web/JavaScript/Reference/Operators/import)
