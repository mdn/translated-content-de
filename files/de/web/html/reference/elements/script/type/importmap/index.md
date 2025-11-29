---
title: <script type="importmap">
short-title: importmap
slug: Web/HTML/Reference/Elements/script/type/importmap
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Der **`importmap`**-Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)-Attributs des [`<script>`-Elements](/de/docs/Web/HTML/Reference/Elements/script) zeigt an, dass der Inhalt des Elements eine Import-Karte enthält.

Eine Import-Karte ist ein JSON-Objekt, das Entwicklern ermöglicht, zu kontrollieren, wie der Browser Modul-Spezifizierer auflöst, wenn [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) importiert werden.
Sie bietet eine Zuordnung zwischen dem im [`import`-Statement](/de/docs/Web/JavaScript/Reference/Statements/import) oder [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) verwendeten Modulspezifizierer-Text und dem entsprechenden Wert, der den Text beim Auflösen des Spezifizierers ersetzt.
Das JSON-Objekt muss dem Format der [Importkarten-JSON-Darstellung](#importkarten-json-darstellung) entsprechen.

Eine Import-Karte wird verwendet, um Modulspezifizierer in statischen und dynamischen Imports aufzulösen und muss daher deklariert und verarbeitet werden, bevor irgendwelche `<script>`-Elemente importierte Module mit Spezifizierern verwenden, die in der Karte deklariert sind.
Beachten Sie, dass die Import-Karte nur auf Modulspezifizierer im [`import`-Statement](/de/docs/Web/JavaScript/Reference/Statements/import) oder [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) für Module, die in Dokumente geladen werden, angewendet wird; sie gilt nicht für den im `src`-Attribut eines `<script>`-Elements angegebenen Pfad oder für Module, die in Worker oder Worklets geladen werden.

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
  - : Die Importkarten-Definition ist kein JSON-Objekt, der `importmap`-Schlüssel ist definiert, aber sein Wert ist kein JSON-Objekt, oder der `scopes`-Schlüssel ist definiert, aber sein Wert ist kein JSON-Objekt.

Browser erzeugen Konsolenwarnungen für andere Fälle, in denen das JSON der Importkarte nicht dem [Importkarten](#importkarten-json-darstellung)-Schema entspricht.

## Beschreibung

Beim Importieren eines [JavaScript-Moduls](/de/docs/Web/JavaScript/Guide/Modules) haben sowohl der [`import`-Statement](/de/docs/Web/JavaScript/Reference/Statements/import) als auch der [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) einen "Modulspezifizierer", der das zu importierende Modul angibt.
Ein Browser muss in der Lage sein, diesen Spezifizierer in eine absolute URL aufzulösen, um das Modul zu importieren.

Zum Beispiel importieren die folgenden Anweisungen Elemente vom Modulspezifizierer `"https://example.com/shapes/circle.js"`, was eine absolute URL ist, und vom Modulspezifizierer `"./modules/shapes/square.js"`, was ein Pfad relativ zur Basis-URL des Dokuments ist.

```js
import { name as circleName } from "https://example.com/shapes/circle.js";
import { name as squareName, draw } from "./modules/shapes/square.js";
```

Importkarten ermöglichen es Entwicklern, (fast) jeden gewünschten Text im Modulspezifizierer anzugeben; die Karte bietet einen entsprechenden Wert, der den Text ersetzt, wenn der Modulspezifizierer aufgelöst wird.

### Bare Module

Die folgende Importkarte definiert einen `imports`-Schlüssel, der eine "Modulspezifizierer-Karte" mit den Eigenschaften `circle` und `square` enthält.

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

Mit dieser Importkarte können wir dieselben Module wie oben importieren, jedoch mit "bare modules" in unseren Modulspezifizierern:

```js
import { name as circleName } from "circle";
import { name as squareName, draw } from "square";
```

### Zuordnung von Pfadpräfixen

Ein Schlüssel in der Modulspezifizierer-Karte kann auch verwendet werden, um ein Pfadpräfix in einem Modulspezifizierer neu zuzuordnen.
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

### Pfade in der Modulspezifizierer-Kartenschlüssel

Modulspezifizierer-Schlüssel müssen keine einzelnen Namen sein ("bare Namen").
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

Wenn es mehrere Modulspezifizierer-Schlüssel in einer Modulspezifizierer-Karte gibt, die möglicherweise übereinstimmen, wird der spezifischste Schlüssel ausgewählt (d.h. derjenige mit dem längeren Pfad/Wert).

Ein Modulspezifizierer von `./foo/../js/app.js` würde auf `./js/app.js` aufgelöst, bevor er zugeordnet wird.
Das bedeutet, dass ein Modulspezifizierer-Schlüssel von `./js/app.js` den Modulspezifizierer abgleichen würde, auch wenn sie nicht genau gleich sind.

### Gescopte Modulspezifizierer-Karten

Mit dem `scopes`-Schlüssel können Sie Zuordnungen bereitstellen, die nur verwendet werden, wenn das Modul einen bestimmten URL-Pfad enthält.
Wenn die URL des ladenden Skripts mit dem angegebenen Pfad übereinstimmt, wird die Zuordnung im zugehörigen Umfang verwendet.
Dies ermöglicht die Verwendung verschiedener Versionen des Moduls, abhängig davon, welcher Code den Import vornimmt.

Zum Beispiel wird die folgende Karte nur die gescoppte Karte verwenden, wenn das ladende Modul eine URL hat, die den Pfad "/modules/custom-shapes/" enthält.

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

Wenn mehrere Scopes mit der Referrer-URL übereinstimmen, wird der spezifischste Scope-Pfad verwendet (der Scope-Schlüsselname mit dem längsten Namen).
Der Browser fällt auf den nächsten spezifischsten gescopten Pfad zurück, wenn kein übereinstimmender Spezifizierer vorhanden ist, und so weiter, schließlich wird auf die Modulspezifizierer-Karte im `imports`-Schlüssel zurückgegriffen.

### Integrität-Metadaten-Karte

Sie können den `integrity`-Schlüssel verwenden, um eine Zuordnung für Modul-[Integrität-Metadaten](/de/docs/Web/Security/Defenses/Subresource_Integrity#using_subresource_integrity) bereitzustellen.
Dies ermöglicht es Ihnen, die Integrität von dynamisch oder statisch importierten Modulen sicherzustellen.
`integrity` ermöglicht Ihnen auch, ein Fallback für auf oberster Ebene oder vorbeladene Module bereitzustellen, falls diese noch kein `integrity`-Attribut enthalten.

Die Kartenschlüssel repräsentieren Modul-URLs, die absolut oder relativ (beginnend mit `/`, `./` oder `../`) sein können.
Die Kartenwerte repräsentieren Integrität-Metadaten, identisch mit denen, die in [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity)-Attributwerten verwendet werden.

Zum Beispiel definiert die folgende Karte Integrität-Metadaten für das `square.js`-Modul (direkt) und seinen "bare"-Spezifizierer (transitiv, über den `imports`-Schlüssel).

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

Intern halten Browser eine einzige globale Repräsentation der Importkarte aufrecht. Wenn mehrere Importkarten in ein Dokument aufgenommen werden, werden deren Inhalte zur globalen Importkarte zusammengeführt, wenn sie registriert werden.

Zum Beispiel: Betrachten Sie die folgenden zwei Importkarten:

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

Modulspezifizierer in jeder registrierten Karte, die bereits vorher aufgelöst wurden, werden ignoriert. Nachfolgende Auflösungen dieser Spezifizierer liefern die gleichen Ergebnisse wie ihre vorhergehenden Auflösungen.

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

Entspricht:

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

Ebenso werden Modulspezifizierer in einer registrierten Karte, die bereits in der globalen Karte auf URLs abgebildet wurden, ignoriert; ihre vorhergehende Zuordnung hat Vorrang.

Zum Beispiel: Die folgenden zwei Importkarten:

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

Entsprechen der folgenden einzelnen Importkarte:

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
> In nicht unterstützenden Browsern (siehe die [Kompatibilitätsdaten](#browser-kompatibilität)) kann ein [Polyfill](https://github.com/guybedford/es-module-shims) verwendet werden, um Probleme bei der Modulauflösung zu vermeiden.

## Importkarten-JSON-Darstellung

Das Folgende ist eine "formale" Definition der Importkarten-JSON-Darstellung.

Die Importkarte muss ein gültiges JSON-Objekt sein, das beliebige optionale Schlüssel `imports`, `scopes` und `integrity` definieren kann. Der Wert jedes Schlüssels muss ein Objekt sein, das leer sein kann.

- `imports` {{optional_inline}}
  - : Der Wert ist eine [Modulspezifizierer-Karte](#module_specifier_map), die die Zuordnungen zwischen dem Modulspezifizierer-Text, der in einem `import`-Statement oder `import()`-Operator auftreten könnte, und dem Text bereitstellt, der ihn ersetzt, wenn der Spezifizierer aufgelöst wird.

    Dies ist die Fallback-Karte, die nach übereinstimmenden Modulspezifizierern durchsucht wird, wenn keine `scopes`-Pfad-URLs übereinstimmen oder wenn Modulspezifizierer-Karten in passenden `scopes`-Pfade keinen Schlüssel enthalten, der dem Modulspezifizierer entspricht.
    - `<modulspezifizierer-karte>`
      - : Eine "Modulspezifizierer-Karte" ist ein gültiges JSON-Objekt, bei dem die _Schlüssel_ Texte sind, die beim Importieren eines Moduls im Modulspezifizierer vorhanden sein können, und die entsprechenden _Werte_ die URLs oder Pfade sind, die diesen Text ersetzen, wenn der Modulspezifizierer in eine Adresse aufgelöst wird.

        Das JSON-Objekt der Modulspezifizierer-Karte hat die folgenden Anforderungen:
        - Keiner der Schlüssel darf leer sein.
        - Alle Werte müssen Zeichenfolgen sein, die entweder eine gültige absolute URL oder eine gültige URL-Zeichenfolge darstellen, die mit `/`, `./`, oder `../` beginnt.
        - Wenn ein Schlüssel mit `/` endet, dann muss der entsprechende Wert ebenfalls mit `/` enden.
          Ein Schlüssel mit einem nachfolgenden `/` kann als Präfix verwendet werden, um Moduladressen zuzuordnen (oder neu zuzuordnen).
        - Die Reihenfolge der Objekteigenschaften ist irrelevant: Wenn mehrere Schlüssel den Modulspezifizierer abgleichen können, wird der spezifischste Schlüssel verwendet (mit anderen Worten, ein Spezifizierer "olive/branch/" würde vor "olive/" übereinstimmen).

- `integrity` {{optional_inline}}
  - : Definiert ein gültiges JSON-Objekt, bei dem die _Schlüssel_ Zeichenfolgen mit gültigen absoluten oder relativen URLs (beginnend mit `/`, `./`, oder `../`) sind und die entsprechenden _Werte_ gültige [Integrität-Metadaten](/de/docs/Web/Security/Defenses/Subresource_Integrity#using_subresource_integrity) sind.

    Wenn die URL eines Skripts, das ein Modul importiert oder vorlädt, mit einem Schlüssel im `integrity`-Objekt übereinstimmt, werden die entsprechenden Integrität-Metadaten auf die Abrufoptionen des Skripts angewendet, es sei denn, sie haben bereits Integrität-Metadaten angehängt.

- `scopes` {{optional_inline}}
  - : Geltungsbereiche definieren pfadspezifische [Modulspezifizierer-Karten](#module_specifier_map), die die Wahl der Karte abhängig vom Pfad des Codes, der das Modul importiert, erlauben.

    Das Scopes-Objekt ist ein gültiges JSON-Objekt, bei dem jede Eigenschaft ein `<scope key>` ist, das ein URL-Pfad ist, mit einem entsprechenden Wert, der eine `<modulspezifizierer-karte>` ist.

    Wenn die URL eines Skripts, das ein Modul importiert, mit einem `<scope key>`-Pfad übereinstimmt, wird zunächst die `<modulspezifizierer-karte>`-Zuordnung, die dem Key zugewiesen ist, auf übereinstimmende Spezifizierer überprüft.
    Wenn es mehrere übereinstimmende Scope-Schlüssel gibt, werden die Werte, die mit den spezifischsten/verschachteltsten Scope-Pfaden verbunden sind, zuerst auf übereinstimmende Modulspezifizierer überprüft.
    Die Fallback-Modulspezifizierer-Karte in `imports` wird verwendet, wenn es keine übereinstimmenden Modulspezifizierer-Schlüssel in einer der übereinstimmenden gescopten Modulspezifizierer-Karten gibt.

    Beachten Sie, dass der Geltungsbereich nicht ändert, wie eine Adresse aufgelöst wird; relative Adressen werden immer in der Base-URL der Importkarte aufgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript Module > Importieren von Modulen mit Importkarten](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps)
- [Das `type`-Attribut von HTML `<script>`-Elementen](/de/docs/Web/HTML/Reference/Elements/script/type)
- [`import`-Statement](/de/docs/Web/JavaScript/Reference/Statements/import)
- [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import)
