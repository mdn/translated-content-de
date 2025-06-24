---
title: <script type="importmap">
short-title: importmap
slug: Web/HTML/Reference/Elements/script/type/importmap
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTMLSidebar}}

Der **`importmap`** Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)-Attributs des [`<script>`-Elements](/de/docs/Web/HTML/Reference/Elements/script) zeigt an, dass der Inhalt des Elements eine Importkarte enthält.

Eine Importkarte ist ein JSON-Objekt, das Entwicklern erlaubt, zu steuern, wie der Browser Modulspezifizierer auflöst, wenn [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) importiert werden.
Sie bietet eine Zuordnung zwischen dem Text, der als Modulspezifizierer in einer [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) oder dem [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) verwendet wird, und dem entsprechenden Wert, der den Text beim Auflösen des Spezifizierers ersetzt.
Das JSON-Objekt muss dem [Importkarten-JSON-Darstellungsformat](#importkarten-json-darstellung) entsprechen.

Eine Importkarte wird verwendet, um Modulspezifizierer in statischen und dynamischen Importen aufzulösen und muss daher vor allen `<script>`-Elementen deklariert und verarbeitet werden, die Module mit in der Karte erklärten Spezifizierern importieren.
Beachten Sie, dass die Importkarte nur auf Modulspezifizierer in der [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) oder im [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) für Module angewendet wird, die in Dokumente geladen werden; sie gilt nicht für den im `src`-Attribut eines `<script>`-Elements angegebenen Pfad oder für Module, die in Worker oder Worklets geladen werden.

Für weitere Informationen siehe den Abschnitt [Module importieren mit Importkarten](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) im JavaScript-Module-Leitfaden.

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

Browser generieren Konsolenwarnungen für andere Fälle, in denen das Importkarten-JSON nicht dem [Importkarten-](#importkarten-json-darstellung) Schema entspricht.

## Beschreibung

Beim Importieren eines [JavaScript-Moduls](/de/docs/Web/JavaScript/Guide/Modules) haben sowohl die [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) als auch der [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) einen "Modulspezifizierer", der das zu importierende Modul angibt.
Ein Browser muss diesen Spezifizierer in eine absolute URL auflösen können, um das Modul zu importieren.

Beispielsweise importieren die folgenden Anweisungen Elemente vom Modulspezifizierer `"https://example.com/shapes/circle.js"`, der eine absolute URL ist, und vom Modulspezifizierer `"./modules/shapes/square.js"`, der ein Pfad relativ zur Basis-URL des Dokuments ist.

```js
import { name as circleName } from "https://example.com/shapes/circle.js";
import { name as squareName, draw } from "./modules/shapes/square.js";
```

Importkarten ermöglichen Entwicklern, (fast) beliebigen Text in den Modulspezifizierer anzugeben; die Karte liefert einen entsprechenden Wert, der den Text ersetzt, wenn der Modulspezifizierer aufgelöst wird.

### Bare Modules

Die folgende Importkarte definiert einen `imports`-Schlüssel, der eine "Modulspezifiziererkarte" mit den Eigenschaften `circle` und `square` enthält.

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

Mit dieser Importkarte können wir dieselben Module wie oben importieren, aber unter Verwendung von "bare modules" in unseren Modulspezifizierern:

```js
import { name as circleName } from "circle";
import { name as squareName, draw } from "square";
```

### Zuordnung von Pfadpräfixen

Ein Modulspezifizierer-Kartenschlüssel kann auch verwendet werden, um ein Pfadpräfix in einem Modulspezifizierer neu zuzuordnen.
Beachten Sie, dass in diesem Fall die Eigenschaft und der zugeordnete Pfad beide mit einem abschließenden Schrägstrich (`/`) enden müssen.

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

Modulspezifizierer-Schlüssel müssen keine einzelnen Wortenamen ("bare Namen") sein.
Sie können auch Pfadtrennzeichen enthalten oder mit ihnen enden, oder absolute URLs sein, oder relative URL-Pfade, die mit `/`, `./` oder `../` beginnen.

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

Wenn es mehrere Modulspezifizierer-Schlüssel in einer Modulspezifiziererkarte gibt, die übereinstimmen könnten, wird der spezifischste Schlüssel ausgewählt (d.h. der mit dem längeren Pfad/Wert).

Ein Modulspezifizierer von `./foo/../js/app.js` würde auf `./js/app.js` aufgelöst werden, bevor abgeglichen wird.
Das bedeutet, dass ein Modulspezifizierer-Schlüssel von `./js/app.js` den Modulspezifizierer treffen würde, obwohl sie nicht genau gleich sind.

### Gescopte Modulspezifizierer-Karten

Sie können den `scopes`-Schlüssel verwenden, um Zuordnungen bereitzustellen, die nur verwendet werden, wenn das Skript, das das Modul importiert, einen bestimmten URL-Pfad enthält.
Wenn die URL des ladenden Skripts mit dem angegebenen Pfad übereinstimmt, wird die mit dem Gültigkeitsbereich assoziierte Zuordnung verwendet.
Dies ermöglicht es, unterschiedliche Versionen des Moduls zu verwenden, abhängig davon, welcher Code den Import durchführt.

Zum Beispiel wird die nachfolgende Karte nur die gescopt Karte verwenden, wenn das ladende Modul eine URL hat, die den Pfad enthält: "/modules/custom-shapes/".

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

Wenn mehrere Scopes mit der Referrer-URL übereinstimmen, wird der spezifischste Scope-Pfad verwendet (der Gültigkeitsbereichsname mit dem längsten Namen).
Der Browser fällt auf den nächst spezifischsten gescopten Pfad zurück, wenn es keinen passenden Spezifizierer gibt, und so weiter. Schließlich wird auf die Modulspezifiziererkarte im `imports`-Schlüssel zurückgegriffen.

### Integritäts-Metadaten-Karte

Sie können den `integrity`-Schlüssel verwenden, um eine Zuordnung für Module [Integritäts-Metadaten](/de/docs/Web/Security/Subresource_Integrity#using_subresource_integrity) bereitzustellen.
Dies ermöglicht es Ihnen, die Integrität von dynamisch oder statisch importierten Modulen sicherzustellen.
`integrity` ermöglicht es Ihnen auch, eine Fallback-Option für Top-Level- oder vorab geladene Module bereitzustellen, falls diese nicht bereits ein `integrity`-Attribut enthalten.

Die Schlüssel der Karte stellen Modul-URLs dar, die absolut oder relativ sein können (beginnend mit `/`, `./` oder `../`).
Die Werte der Karte repräsentieren Integritäts-Metadaten, die identisch mit denen sind, die in `integrity`-Attributwerten verwendet werden.

Beispielsweise definiert die nachfolgende Karte Integritäts-Metadaten für das `square.js`-Modul (direkt) und seinen bare Spezifizierer (transitiv, über den `imports`-Schlüssel).

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

Browser halten intern eine einzelne globale Importkarten-Darstellung aufrecht. Wenn mehrere Importkarten in einem Dokument enthalten sind, werden ihre Inhalte beim Registrieren in die globale Importkarte zusammengeführt.

Betrachten Sie beispielsweise die folgenden zwei Importkarten:

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

Diese sind äquivalent zu der folgenden einzigen Importkarte:

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

Modulspezifizierer in jeder registrierten Karte, die bereits vorher aufgelöst wurden, werden verworfen. Nachfolgende Auflösungen dieser Spezifizierer liefern dieselben Ergebnisse wie ihre vorherigen Auflösungen.

Wenn beispielsweise der Modulspezifizierer `/app/helper.js` bereits aufgelöst wurde, wäre die folgende neue Importkarte:

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

Die Regel `/app/helper.js` wurde ignoriert und nicht in die Karte aufgenommen.

In ähnlicher Weise werden Modulspezifizierer in einer registrierten Karte, die bereits in der globalen Karte zu URLs zugeordnet wurden, verworfen; ihre vorherige Zuordnung bleibt erhalten.

Zum Beispiel sind die folgenden zwei Importkarten:

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

Äquivalent zu der folgenden einzelnen Importkarte:

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
> In nicht unterstützenden Browsern (überprüfen Sie die [Kompatibilitätsdaten](#browser-kompatibilität)) kann ein [polyfill](https://github.com/guybedford/es-module-shims) verwendet werden, um Probleme im Zusammenhang mit der Modulauflösung zu vermeiden.

## Importkarten-JSON-Darstellung

Das Folgende ist eine "formale" Definition der Importkarten-JSON-Darstellung.

Die Importkarte muss ein gültiges JSON-Objekt sein, das die optionalen Schlüssel `imports`, `scopes` und `integrity` definieren kann. Der Wert jedes Schlüssels muss ein Objekt sein, das leer sein kann.

- `imports` {{optional_inline}}

  - : Der Wert ist eine [Modulspezifiziererkarte](#module_specifier_map), die die Zuordnungen zwischen Modulspezifizierer-Text, der in einer `import`-Anweisung oder einem `import()`-Operator erscheinen könnte, und dem Text, der ihn ersetzt, wenn der Spezifizierer aufgelöst wird, bereitstellt.

    Dies ist die Fallback-Karte, die nach passenden Modulspezifiziereren durchsucht wird, wenn keine `scopes`-Pfad-URLs übereinstimmen oder wenn Modulspezifizierer-Karten in passenden `scopes`-Pfaden keinen Schlüssel enthalten, der den Modulspezifizierer trifft.

    - `<module specifier map>`

      - : Eine "Modulspezifiziererkarte" ist ein gültiges JSON-Objekt, wobei die _Schlüssel_ Text sind, der möglicherweise im Modulspezifizierer vorhanden ist, wenn ein Modul importiert wird, und die entsprechenden _Werte_ sind die URLs oder Pfade, die diesen Text ersetzen, wenn der Modulspezifizierer zu einer Adresse aufgelöst wird.

        Das Modulspezifizierer-Karten-JSON-Objekt hat die folgenden Anforderungen:

        - Keiner der Schlüssel darf leer sein.
        - Alle Werte müssen Zeichenfolgen sein, die entweder eine gültige absolute URL oder eine gültige URL-Zeichenfolge definieren, die mit `/`, `./` oder `../` beginnt.
        - Wenn ein Schlüssel mit `/` endet, muss auch der entsprechende Wert mit `/` enden.
          Ein Schlüssel mit einem abschließenden `/` kann als Präfix verwendet werden, wenn Moduladressen zugeordnet (oder neu zugeordnet) werden.
        - Die Anordnung der Objekteigenschaften ist irrelevant: Wenn mehrere Schlüssel den Modulspezifizierer treffen können, wird der spezifischste Schlüssel verwendet (mit anderen Worten, ein Spezifizierer "olive/branch/" würde vor "olive/" treffen).

- `integrity` {{optional_inline}}

  - : Definiert ein gültiges JSON-Objekt, bei dem die _Schlüssel_ Zeichenfolgen mit gültigen absoluten oder relativen URLs (beginnend mit `/`, `./` oder `../`) sind,
    und die entsprechenden _Werte_ gültige [Integritäts-Metadaten](/de/docs/Web/Security/Subresource_Integrität#using_subresource_integrity) sind.

    Wenn die URL eines Skripts, das ein Modul importiert oder vorlädt, mit einem Schlüssel im `integrity`-Objekt übereinstimmt, werden die entsprechenden Integritäts-Metadaten auf die Fetch-Optionen des Skripts angewendet,
    es sei denn, sie haben bereits an sie angehängte Integritäts-Metadaten.

- `scopes` {{optional_inline}}

  - : Scopes definieren pfadspezifische [Modulspezifizierer-Karten](#module_specifier_map), die es ermöglichen, die Wahl der Karte von dem Pfad des Codes abhängig zu machen, der das Modul importiert.

    Das Scopes-Objekt ist ein gültiges JSON-Objekt, bei dem jede Eigenschaft ein `<scope key>` ist, das einen URL-Pfad darstellt, mit einem entsprechenden Wert, der eine `<module specifier map>` ist.

    Wenn die URL eines Skripts, das ein Modul importiert, mit einem `<scope key>`-Pfad übereinstimmt, wird der mit dem Schlüssel assoziierte `<module specifier map>`-Wert zuerst auf treffende Spezifizierer überprüft.
    Wenn es mehrere übereinstimmende Scope-Schlüssel gibt, werden die mit den spezifischsten/geschachtelten Scope-Pfaden assoziierten Werte zuerst auf treffende Modulspezifizierer überprüft.
    Die Fallback-Modulspezifiziererkarte in `imports` wird verwendet, wenn es keine passenden Modulspezifizierer-Schlüssel in irgendeiner der passenden gescopten Modulspezifiziererkarten gibt.

    Beachten Sie, dass der Scope nicht ändert, wie eine Adresse aufgelöst wird; relative Adressen werden immer zur Importkarten-Basis-URL aufgelöst.

## Spezifikationen

{{Spezifikationen}}

## Browser-Kompatibilität

{{Kompat}}

## Siehe auch

- [JavaScript-Module > Module importieren mit Importkarten](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps)
- [Das `type`-Attribut von HTML `<script>`-Elementen](/de/docs/Web/HTML/Reference/Elements/script/type)
- [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import)
- [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import)
