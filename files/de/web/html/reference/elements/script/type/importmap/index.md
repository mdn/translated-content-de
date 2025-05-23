---
title: <script type="importmap">
slug: Web/HTML/Reference/Elements/script/type/importmap
l10n:
  sourceCommit: e6d43da6c6d28a6ac92cdd47882809ffbdf987ce
---

{{HTMLSidebar}}

Der **`importmap`** Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/script/type) Attributs des [`<script>` Elements](/de/docs/Web/HTML/Reference/Elements/script) zeigt an, dass der Inhalt des Elements eine Importkarte enthält.

Eine Importkarte ist ein JSON-Objekt, das es Entwicklern ermöglicht, zu steuern, wie der Browser Modul-Spezifizierer auflöst, wenn [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) importiert werden.
Sie bietet eine Zuordnung zwischen dem Text, der als Modul-Spezifizierer in einer [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) oder einem [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) verwendet wird, und dem entsprechenden Wert, der den Text beim Auflösen des Spezifizierers ersetzt.
Das JSON-Objekt muss dem [Importkarte JSON-Darstellungsformat](#importkarten_json-darstellung) entsprechen.

Eine Importkarte wird verwendet, um Modul-Spezifizierer in statischen und dynamischen Importen aufzulösen und muss daher vor allen `<script>`-Elementen deklariert und verarbeitet werden, die Module mit in der Karte deklarierten Spezifizierern importieren.
Beachten Sie, dass die Importkarte nur auf Modul-Spezifizierer in der [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) oder dem [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) für Module angewendet wird, die in Dokumente geladen werden; sie gilt nicht für den Pfad, der im `src`-Attribut eines `<script>`-Elements angegeben wird oder für Module, die in Worker oder Worklets geladen werden.

Weitere Informationen finden Sie im Abschnitt [Import von Modulen mit Importkarten](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) im JavaScript-Module-Leitfaden.

## Syntax

```html
<script type="importmap">
  // JSON object defining import
</script>
```

Die Attribute `src`, `async`, `nomodule`, `defer`, `crossorigin`, `integrity` und `referrerpolicy` dürfen nicht angegeben werden.

### Ausnahmen

- `TypeError`
  - : Die Definition der Importkarte ist kein JSON-Objekt, der `importmap`-Schlüssel ist definiert, aber sein Wert ist kein JSON-Objekt, oder der `scopes`-Schlüssel ist definiert, aber sein Wert ist kein JSON-Objekt.

Browser generieren Konsolenwarnungen für andere Fälle, in denen das Importkarte-JSON nicht dem [Importkarten](#importkarten_json-darstellung) Schema entspricht.

## Beschreibung

Beim Importieren eines [JavaScript-Moduls](/de/docs/Web/JavaScript/Guide/Modules) haben sowohl die [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) als auch der [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) einen "Modul-Spezifizierer", der das zu importierende Modul angibt.
Ein Browser muss in der Lage sein, diesen Spezifizierer zu einer absoluten URL aufzulösen, um das Modul zu importieren.

Zum Beispiel importieren die folgenden Anweisungen Elemente aus dem Modul-Spezifizierer `"https://example.com/shapes/circle.js"`, was eine absolute URL ist, und dem Modul-Spezifizierer `"./modules/shapes/square.js"`, was ein Pfad relativ zur Basis-URL des Dokuments ist.

```js
import { name as circleName } from "https://example.com/shapes/circle.js";
import { name as squareName, draw } from "./modules/shapes/square.js";
```

Importkarten ermöglichen es Entwicklern, (fast) jeden Text, den sie möchten, im Modul-Spezifizierer anzugeben; die Karte bietet einen entsprechenden Wert, der den Text beim Auflösen des Modul-Spezifizierers ersetzt.

### Bare-Module

Die unten stehende Importkarte definiert einen `imports`-Schlüssel, der eine "Modul-Spezifizierer-Karte" mit den Eigenschaften `circle` und `square` enthält.

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

Mit dieser Importkarte können wir dieselben Module wie oben importieren, jedoch mit "bare-modules" in unseren Modul-Spezifizierern:

```js
import { name as circleName } from "circle";
import { name as squareName, draw } from "square";
```

### Abbildungs-Pfad-Präfixe

Ein Modul-Spezifizierer-Kartenschlüssel kann auch verwendet werden, um ein Pfad-Präfix in einem Modul-Spezifizierer neu zuzuordnen.
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

### Pfade im Modul-Spezifizierer-Kartenschlüssel

Modul-Spezifizierer-Schlüssel müssen keine einzelnen Wortnamen ("bare Namen") sein.
Sie können auch Pfadtrennzeichen enthalten oder damit enden oder absolute URLs oder relative URL-Pfade sein, die mit `/`, `./` oder `../` beginnen.

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

Wenn es mehrere Modul-Spezifizierer-Schlüssel in einer Modul-Spezifizierer-Karte gibt, die übereinstimmen könnten, wird der spezifischste Schlüssel ausgewählt (d.h. der mit dem längeren Pfad/Wert).

Ein Modul-Spezifizierer von `./foo/../js/app.js` würde zu `./js/app.js` aufgelöst, bevor er übereinstimmt.
Das bedeutet, dass ein Modul-Spezifizierer-Schlüssel von `./js/app.js` mit dem Modul-Spezifizierer übereinstimmen würde, auch wenn sie nicht exakt gleich sind.

### Scoped-Modul-Spezifizierer-Karten

Sie können den `scopes`-Schlüssel verwenden, um Zuordnungen bereitzustellen, die nur verwendet werden, wenn das Modul enthaltende Skript einen bestimmten URL-Pfad enthält.
Wenn die URL des ladenden Skripts mit dem angegebenen Pfad übereinstimmt, wird die mit dem Scope verknüpfte Zuordnung verwendet.
Dies ermöglicht die Verwendung verschiedener Modulversionen, je nachdem, welcher Code den Import vornimmt.

Die unten stehende Karte wird beispielsweise nur die Bereichskarte verwenden, wenn das ladende Modul eine URL hat, die den Pfad '/modules/custom-shapes/' enthält.

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

Wenn mehrere Scopes mit der Referrer-URL übereinstimmen, wird der spezifischste Scope-Pfad verwendet (der Scopes-Schlüsselname mit dem längsten Namen).
Der Browser fällt auf den nächst spezifischsten Bereichspfad zurück, wenn es keinen übereinstimmenden Spezifizierer gibt, und so weiter, schließlich fällt auf die Modul-Spezifizierer-Karte im `imports`-Schlüssel zurück.

### Integritäts-Metadaten-Karte

Sie können den `integrity`-Schlüssel verwenden, um Zuordnungen für Modul-[Integritätsmetadaten](/de/docs/Web/Security/Subresource_Integrity#using_subresource_integrity) bereitzustellen.
Dies ermöglicht es Ihnen, die Integrität von dynamisch oder statisch importierten Modulen sicherzustellen.
`integrity` ermöglicht es Ihnen auch, ein Fallback für Top-Level- oder vorab geladene Module bereitzustellen, falls sie nicht bereits ein `integrity`-Attribut enthalten.

Die Karten-Schlüssel repräsentieren Modul-URLs, die absolut oder relativ sein können (beginnend mit `/`, `./` oder `../`).
Die Karten-Werte repräsentieren Integritätsmetadaten, identisch mit denen, die in [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attributwerten verwendet werden.

Zum Beispiel definiert die unten stehende Karte Integritätsmetadaten für das `square.js`-Modul (direkt) und seinen bare-Spezifizierer (transitiv, über den `imports`-Schlüssel).

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

### Zusammenführung mehrerer Importkarten

Intern pflegen Browser eine einzige globale Importkarten-Darstellung. Wenn mehrere Importkarten in ein Dokument aufgenommen werden, werden deren Inhalte in die globale Importkarte zusammengeführt, wenn sie registriert sind.

Zum Beispiel, betrachten Sie die folgenden zwei Importkarten:

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

Modul-Spezifizierer in jeder registrierten Karte, die zuvor bereits aufgelöst wurden, werden ignoriert. Nachfolgende Auflösungen dieser Spezifizierer liefern dieselben Ergebnisse wie ihre vorherigen Auflösungen.

Zum Beispiel, wenn der Modul-Spezifizierer `/app/helper.js` bereits aufgelöst wurde, die folgende neue Importkarte:

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

Wäre äquivalent zu:

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

Ähnlich werden Modul-Spezifizierer in einer registrierten Karte, die bereits in der globalen Karte auf URLs abgebildet wurden, ignoriert; ihre vorherige Zuordnung bleibt bestehen.

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

Sind äquivalent zu der folgenden einzelnen Importkarte:

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
> In nicht unterstützenden Browsern (prüfen Sie die [Kompatibilitätsdaten](#browser-kompatibilität)) kann ein [Polyfill](https://github.com/guybedford/es-module-shims) verwendet werden, um Probleme im Zusammenhang mit der Modulauflösung zu vermeiden.

## Importkarten JSON-Darstellung

Das Folgende ist eine "formale" Definition der Importkarten JSON-Darstellung.

Die Importkarte muss ein gültiges JSON-Objekt sein, das die optionalen Schlüssel `imports`, `scopes` und `integrity` definieren kann. Der Wert jedes Schlüssels muss ein Objekt sein, das leer sein kann.

- `imports` {{optional_inline}}

  - : Der Wert ist eine [Modul-Spezifizierer-Karte](#module_specifier_map), die die Zuordnungen zwischen Modul-Spezifizierer-Text, der in einer `import`-Anweisung oder einem `import()`-Operator erscheinen könnte, und dem Text, der ihn bei Auflösung des Spezifizierers ersetzen wird, bereitstellt.

    Dies ist die Fallback-Karte, die nach passenden Modul-Spezifizierern durchsucht wird, wenn keine `scopes`-Pfad-URLs übereinstimmen oder wenn Modul-Spezifizierer-Karten in passenden `scopes`-Pfaden keinen Schlüssel enthalten, der mit dem Modul-Spezifizierer übereinstimmt.

    - `<module specifier map>`

      - : Eine "Modul-Spezifizierer-Karte" ist ein gültiges JSON-Objekt, bei dem die _Schlüssel_ Text sind, die möglicherweise im Modul-Spezifizierer beim Importieren eines Moduls vorhanden sind, und die entsprechenden _Werte_ sind die URLs oder Pfade, die diesen Text ersetzen, wenn der Modul-Spezifizierer zu einer Adresse aufgelöst wird.

        Das Modul-Spezifizierer-Karten JSON-Objekt hat folgende Anforderungen:

        - Keiner der Schlüssel darf leer sein.
        - Alle Werte müssen Zeichenketten sein, die entweder eine gültige absolute URL oder eine gültige URL-Zeichenkette definieren, die mit `/`, `./` oder `../` beginnt.
        - Wenn ein Schlüssel mit `/` endet, dann muss der entsprechende Wert auch mit `/` enden.
          Ein Schlüssel mit einem Schrägstrich am Ende kann als Präfix verwendet werden, wenn Modul-Adressen abgebildet (oder neu zugeordnet) werden.
        - Die Reihenfolge der Objekteigenschaften ist irrelevant: Wenn mehrere Schlüssel auf den Modul-Spezifizierer passen können, wird der spezifischste Schlüssel verwendet (mit anderen Worten, ein Spezifizierer "olive/branch/" würde vor "olive/" übereinstimmen).

- `integrity` {{optional_inline}}

  - : Definiert ein gültiges JSON-Objekt, bei dem die _Schlüssel_ Zeichenketten sind, die gültige absolute oder relative URLs (beginnend mit `/`, `./` oder `../`) enthalten,
    und die entsprechenden _Werte_ sind gültige [Integritätsmetadaten](/de/docs/Web/Security/Subresource_Integrity#using_subresource_integrity).

    Wenn die URL eines Skripts, das ein Modul importiert oder vorlädt, mit einem Schlüssel im `integrity`-Objekt übereinstimmt, werden die entsprechenden Integritätsmetadaten auf die Fetch-Optionen des Skripts angewendet,
    es sei denn, sie haben bereits Integritätsmetadaten angehängt.

- `scopes` {{optional_inline}}

  - : Scopes definieren pfadspezifische [Modul-Spezifizierer-Karten](#module_specifier_map), die es erlauben, die Wahl der Karte abhängig vom Pfad des den Modul importierenden Codes zu machen.

    Das Scopes-Objekt ist ein gültiges JSON-Objekt, bei dem jede Eigenschaft ein `<scope key>` ist, das ein URL-Pfad ist, mit einem entsprechenden Wert, der eine `<module specifier map>` ist.

    Wenn die URL eines den Modul importierenden Skripts mit einem `<scope key>`-Pfad übereinstimmt, wird der `<module specifier map>`-Wert, der mit dem Schlüssel verknüpft ist, zuerst auf passende Spezifizierer überprüft.
    Wenn es mehrere passende Scope-Schlüssel gibt, werden die Werte, die mit den spezifischsten/verschachteltsten Scope-Pfaden verknüpft sind, zuerst auf passende Modul-Spezifizierer überprüft.
    Die Fallback-Modul-Spezifizierer-Karte in `imports` wird verwendet, wenn keine passenden Modul-Spezifizierer-Schlüssel in einem der passenden Scoped-Modul-Spezifizierer-Karten enthalten sind.

    Beachten Sie, dass der Scope nicht beeinflusst, wie eine Adresse aufgelöst wird; relative Adressen werden immer zur Importkarten-Basis-URL aufgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript-Module > Import von Modulen mit Importkarten](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps)
- [Das `type`-Attribut von HTML `<script>`-Elementen](/de/docs/Web/HTML/Reference/Elements/script/type)
- [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import)
- [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import)
