---
title: <script type="importmap">
slug: Web/HTML/Element/script/type/importmap
l10n:
  sourceCommit: 6677fb911411ef48de1aa33f44bc1454229482a5
---

{{HTMLSidebar}}

Der **`importmap`** Wert des [`type`]-Attributs(/de/docs/Web/HTML/Element/script/type) des [`<script>` Elements](/de/docs/Web/HTML/Element/script) gibt an, dass der Inhalt des Elements eine Importkarte enthält.

Eine Importkarte ist ein JSON-Objekt, das es Entwicklern ermöglicht, zu steuern, wie der Browser Modulspezifizierer beim Import von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) auflöst. Es bietet eine Zuordnung zwischen dem Text, der als Modulspezifizierer in einer [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) oder dem [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) verwendet wird, und dem entsprechenden Wert, der den Text beim Auflösen des Spezifizierers ersetzt. Das JSON-Objekt muss dem [JSON-Darstellungsformat der Importkarte](#json-darstellung_der_importkarte) entsprechen.

Eine Importkarte wird verwendet, um Modulspezifizierer in statischen und dynamischen Importen aufzulösen, und muss daher vor allen `<script>`-Elementen deklariert und verarbeitet werden, die Module mit in der Karte deklarierten Spezifizierern importieren. Beachten Sie, dass die Importkarte nur auf Modulspezifizierer in der [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) oder dem [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) für Module, die in Dokumente geladen werden, angewendet wird; sie gilt nicht für den im `src`-Attribut eines `<script>`-Elements angegebenen Pfad oder für in Worker oder Worklets geladene Module.

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
  - : Die Definition der Importkarte ist kein JSON-Objekt, der `importmap`-Schlüssel ist definiert, aber sein Wert ist kein JSON-Objekt, oder der `scopes`-Schlüssel ist definiert, aber sein Wert ist kein JSON-Objekt.

Browser generieren Konsolenwarnungen für andere Fälle, in denen das Importkarten-JSON nicht dem [Importkarten](#json-darstellung_der_importkarte)-Schema entspricht.

## Beschreibung

Beim Importieren eines [JavaScript-Moduls](/de/docs/Web/JavaScript/Guide/Modules) haben sowohl die [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) als auch der [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) einen "Modulspezifizierer", der das zu importierende Modul angibt. Ein Browser muss in der Lage sein, diesen Spezifizierer in eine absolute URL aufzulösen, um das Modul zu importieren.

Zum Beispiel importieren die folgenden Anweisungen Elemente aus dem Modulspezifizierer `"./modules/shapes/square.js"`, der ein relativ zum Basis-URL des Dokuments angegebener Pfad ist, und dem Modulspezifizierer `"https://example.com/shapes/circle.js"`, der eine absolute URL ist.

```js
import { name as squareName, draw } from "./modules/shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

Importkarten ermöglichen es Entwicklern, (fast) beliebigen Text im Modulspezifizierer anzugeben; die Karte liefert einen entsprechenden Wert, der den Text ersetzt, wenn der Modulspezifizierer aufgelöst wird.

### Einfache Module

Die unten stehende Importkarte definiert einen `imports`-Schlüssel, der eine "Modulspezifiziererkarte" mit den Eigenschaften `square` und `circle` enthält.

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

Mit dieser Importkarte können wir dieselben Module wie oben, aber mit "einfachen Modulen" in unseren Modulspezifizierern importieren:

```js
import { name as squareName, draw } from "square";
import { name as circleName } from "circle";
```

### Umleitungspräfixe für Pfade

Ein Schlüssel der Modulspezifiziererkarte kann auch verwendet werden, um ein Pfadpräfix in einem Modulspezifizierer neu zuzuordnen. Beachten Sie, dass in diesem Fall sowohl die Eigenschaft als auch der zugeordnete Pfad mit einem Schrägstrich (`/`) enden müssen.

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

Wir könnten dann ein Kreismodul wie gezeigt importieren.

```js
import { name as circleName } from "shapes/circle.js";
```

### Pfade im Schlüssel der Modulspezifiziererkarte

Modulspezifiziererschlüssel müssen keine einzelnen Wortnamen ("einfache Namen") sein. Sie können auch Pfadseparatoren enthalten oder mit ihnen enden, oder absolute URLs sein, oder relative URL-Pfade, die mit `/`, `./`, oder `../` beginnen.

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

Wenn es mehrere Modulspezifiziererschlüssel in einer Modulspezifiziererkarte gibt, die übereinstimmen könnten, wird der spezifischste Schlüssel ausgewählt (d. h. der mit dem längeren Pfad/Wert).

Ein Modulspezifizierer von `./foo/../js/app.js` würde zu `./js/app.js` aufgelöst, bevor passend verglichen wird. Das bedeutet, dass ein Modulspezifiziererschlüssel von `./js/app.js` mit dem Modulspezifizierer übereinstimmen würde, auch wenn sie nicht exakt gleich sind.

### Bereichsspezifische Modulspezifiziererkarten

Sie können den `scopes`-Schlüssel verwenden, um Zuordnungen bereitzustellen, die nur verwendet werden, wenn das Skript, das das Modul importiert, einen bestimmten URL-Pfad enthält. Wenn die URL des ladenden Skripts dem angegebenen Pfad entspricht, wird die mit dem Scope verknüpfte Zuordnung verwendet. Dies ermöglicht den Einsatz verschiedener Versionen des Moduls, abhängig davon, welcher Code importiert wird.

Zum Beispiel wird die folgende Karte nur die Bereichskarte verwenden, wenn das ladende Modul eine URL hat, die den Pfad enthält: "/modules/custom-shapes/".

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

Wenn mehrere Scopes mit der Referrer-URL übereinstimmen, wird der spezifischste Scope-Pfad verwendet (der Scope-Schlüsselname mit dem längsten Namen). Der Browser fällt auf den nächsten spezifischsten Bereichspfad zurück, wenn kein übereinstimmender Spezifizierer vorhanden ist, und so weiter, schließlich zurückfallend auf die Modulspezifiziererkarte im `imports`-Schlüssel.

### Integritätsmetadatenkarte

Sie können den `integrity`-Schlüssel verwenden, um Zuordnungen für Modul-[Integritätsmetadaten](/de/docs/Web/Security/Subresource_Integrity#using_subresource_integrity) bereitzustellen. Dies ermöglicht es Ihnen, die Integrität von dynamisch oder statisch importierten Modulen sicherzustellen. `integrity` ermöglicht es Ihnen auch, ein Fallback für oberste oder vorab geladene Module bereitzustellen, falls sie nicht bereits ein `integrity`-Attribut enthalten.

Die Karten-Schlüssel repräsentieren Modul-URLs, die absolut oder relativ sein können (beginnend mit `/`, `./`, oder `../`). Die Karten-Werte repräsentieren Integritätsmetadaten, identisch zu denen, die in [`integrity`](/de/docs/Web/HTML/Element/script#integrity)-Attributwerten verwendet werden.

Zum Beispiel definiert die folgende Karte Integritätsmetadaten für das `square.js`-Modul (direkt) und seinen einfachen Spezifizierer (transitiv, über den `imports`-Schlüssel).

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

### Zusammenführen mehrerer Importkarten

Intern halten Browser eine einzige globale Darstellung von Importkarten bei. Wenn mehrere Importkarten in ein Dokument aufgenommen werden, werden deren Inhalte in die globale Importkarte zusammengeführt, wenn sie registriert werden.

Zum Beispiel betrachten Sie die folgenden zwei Importkarten:

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

Diese sind äquivalent zu der folgenden einzelnen Importkarte:

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

Modulspezifizierer in jeder registrierten Karte, die bereits vorher aufgelöst wurden, werden verworfen. Nachfolgende Auflösungen dieser Spezifizierer liefern die gleichen Ergebnisse wie ihre vorherigen Auflösungen.

Zum Beispiel, wenn der Modulspezifizierer `/app/helper.js` bereits aufgelöst wurde, würde die folgende neue Importkarte:

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

entsprechen:

```html
<script type="importmap">
  {
    "imports": {
      "lodash": "/node_modules/lodash-es/lodash.js"
    }
  }
</script>
```

Die Regel `/app/helper.js` wurde ignoriert und nicht in die Karte aufgenommen.

Ebenso werden Modulspezifizierer in einer registrierten Karte, die bereits zu URLs in der globalen Karte abgebildet wurden, verworfen; ihre vorherige Zuordnung bleibt bestehen.

Zum Beispiel entsprechen die folgenden zwei Importkarten:

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

der folgenden einzelnen Importkarte:

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

Die Regel `/app/helper/` wurde aus der zweiten Karte entfernt.

> [!NOTE]
> In nicht unterstützenden Browsern (prüfen Sie die [Kompatibilitätsdaten](#browser-kompatibilität)), kann ein [Polyfill](https://github.com/guybedford/es-module-shims) verwendet werden, um Probleme im Zusammenhang mit der Modullösung zu vermeiden.

## JSON-Darstellung der Importkarte

Das Folgende ist eine "formale" Definition der JSON-Darstellung der Importkarte.

Die Importkarte muss ein gültiges JSON-Objekt sein, das beliebige der optionalen Schlüssel `imports`, `scopes` und `integrity` definieren kann. Der Wert jedes Schlüssels muss ein Objekt sein, das möglicherweise leer ist.

- `imports` {{optional_inline}}

  - : Der Wert ist eine [Modulspezifiziererkarte](#module_specifier_map), die die Zuordnungen zwischen Modulspezifizierertext, der in einer `import`-Anweisung oder einem `import()`-Operator erscheinen könnte, und dem Text bietet, der ihn ersetzt, wenn der Spezifizierer aufgelöst wird.

    Dies ist die Fallback-Karte, die nach passenden Modulspezifizierern durchsucht wird, wenn keine `scopes`-Pfad-URLs übereinstimmen oder wenn Modulspezifiziererkarten in passenden `scopes`-Pfade keinen passenden Schlüssel enthalten.

    - `<module specifier map>`

      - : Eine "Modulspezifiziererkarte" ist ein gültiges JSON-Objekt, bei dem die _Schlüssel_ Text sind, der im Modulspezifizierer beim Import eines Moduls vorhanden sein kann, und die entsprechenden _Werte_ sind die URLs oder Pfade, die diesen Text ersetzen, wenn der Modulspezifizierer zu einer Adresse aufgelöst wird.

        Das JSON-Objekt der Modulspezifiziererkarte hat die folgenden Anforderungen:

        - Keiner der Schlüssel darf leer sein.
        - Alle Werte müssen Zeichenfolgen sein, die entweder eine gültige absolute URL oder eine gültige URL-Zeichenfolge definieren, die mit `/`, `./`, oder `../` beginnt.
        - Wenn ein Schlüssel mit `/` endet, muss auch der entsprechende Wert mit `/` enden.
          Ein Schlüssel mit abschließendem `/` kann als Präfix für die Zuordnung (oder Umleitung) von Moduladressen verwendet werden.
        - Die Reihenfolge der Objekteigenschaften ist irrelevant: Wenn mehrere Schlüssel mit dem Modulspezifizierer übereinstimmen, wird der spezifischste Schlüssel verwendet (mit anderen Worten, ein Spezifizierer "olive/branch/" würde vor "olive/" übereinstimmen).

- `integrity` {{optional_inline}}

  - : Definiert ein gültiges JSON-Objekt, bei dem die _Schlüssel_ Zeichenfolgen mit gültigen absoluten oder relativen URLs (beginnend mit `/`, `./`, oder `../`) enthalten, und die entsprechenden _Werte_ sind gültige [Integritätsmetadaten](/de/docs/Web/Security/Subresource_Integrity#using_subresource_integrity).

    Wenn die URL eines Skripts, das ein Modul importiert oder vorlädt, einem Schlüssel im `integrity`-Objekt entspricht, werden die entsprechenden Integritätsmetadaten auf die Fetch-Optionen des Skripts angewendet, es sei denn, sie haben bereits Integritätsmetadaten angehängt.

- `scopes` {{optional_inline}}

  - : Scopes definieren pfadspezifische [Modulspezifiziererkarten](#module_specifier_map) und ermöglichen die Auswahl der Karte in Abhängigkeit vom Pfad des Codes, der das Modul importiert.

    Das Scopes-Objekt ist ein gültiges JSON-Objekt, bei dem jede Eigenschaft ein `<scope key>` ist, das ein URL-Pfad ist, mit einem entsprechenden Wert, der eine `<module specifier map>` ist.

    Wenn die URL eines Skripts, das ein Modul importiert, einem `<scope key>`-Pfad entspricht, wird der zugehörige `<module specifier map>`-Wert zuerst auf passende Spezifizierer überprüft. Wenn mehrere übereinstimmende Scope-Schlüssel vorhanden sind, werden die Werte der spezifischsten/nestesten Scope-Pfade zuerst auf passende Modulspezifizierer geprüft. Die Fallback-Modulspezifiziererkarte in `imports` wird verwendet, wenn keine passenden Modulspezifiziererschlüssel in einem der passenden Bereichsmodulspezifiziererkarten enthalten sind.

    Beachten Sie, dass der Scope nicht verändert, wie eine Adresse aufgelöst wird; relative Adressen werden immer zur Basis-URL der Importkarte aufgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript-Module > Importieren von Modulen mit Importkarten](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps)
- [Das `type`-Attribut von HTML `<script>`-Elementen](/de/docs/Web/HTML/Element/script#type)
- [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import)
- [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import)
