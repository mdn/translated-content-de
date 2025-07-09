---
title: <script type="importmap">
short-title: importmap
slug: Web/HTML/Reference/Elements/script/type/importmap
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Der **`importmap`** Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)-Attributs des [`<script>` Elements](/de/docs/Web/HTML/Reference/Elements/script) zeigt an, dass der Inhalt des Elements eine Importkarte enthält.

Eine Importkarte ist ein JSON-Objekt, das Entwicklern ermöglicht, zu steuern, wie der Browser Modulbezeichner auflöst, wenn [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) importiert werden. Es bietet eine Zuordnung zwischen dem Text, der als Modulbezeichner in einer [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) oder einem [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) verwendet wird, und dem entsprechenden Wert, der den Text beim Auflösen des Bezeichners ersetzen wird. Das JSON-Objekt muss dem [Importkarten-JSON-Darstellungsformat](#importkarte_json-darstellung) entsprechen.

Eine Importkarte wird verwendet, um Modulbezeichner in statischen und dynamischen Importen aufzulösen, und muss daher deklariert und verarbeitet werden, bevor irgendwelche `<script>`-Elemente, die Module mit Bezeichnern importieren, die in der Karte deklariert sind. Beachten Sie, dass die Importkarte nur für Modulbezeichner in der [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) oder dem [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) gilt, die in Dokumente geladen werden; sie gilt nicht für den Pfad, der im `src`-Attribut eines `<script>`-Elements angegeben ist, oder für Module, die in Worker oder Worklets geladen werden.

Für mehr Informationen siehe den Abschnitt [Importieren von Modulen mit Importkarten](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) im JavaScript-Module-Leitfaden.

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

Browser generieren Konsolenwarnungen in anderen Fällen, in denen die Importkarten-JSON nicht dem [Importkarten](#importkarte_json-darstellung)-Schema entspricht.

## Beschreibung

Beim Importieren eines [JavaScript-Moduls](/de/docs/Web/JavaScript/Guide/Modules) haben sowohl die [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) als auch der [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) einen "Modulbezeichner", der angibt, welches Modul importiert werden soll. Ein Browser muss in der Lage sein, diesen Bezeichner in eine absolute URL aufzulösen, um das Modul zu importieren.

Zum Beispiel importieren die folgenden Anweisungen Elemente vom Modulbezeichner `"https://example.com/shapes/circle.js"`, das eine absolute URL ist, und vom Modulbezeichner `"./modules/shapes/square.js"`, das ein Pfad relativ zur Basis-URL des Dokuments ist.

```js
import { name as circleName } from "https://example.com/shapes/circle.js";
import { name as squareName, draw } from "./modules/shapes/square.js";
```

Importkarten erlauben es Entwicklern, (fast) jeden Text, den sie wollen, als Modulbezeichner anzugeben; die Karte stellt einen entsprechenden Wert bereit, der den Text ersetzt, wenn der Modulbezeichner aufgelöst wird.

### Bare Modules

Das untenstehende Importkarten-Beispiel definiert einen `imports`-Schlüssel, der eine "Modulbezeichnerkarte" mit den Eigenschaften `circle` und `square` hat.

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

Mit dieser Importkarte können wir die gleichen Module wie oben importieren, aber indem wir "bare Modules" in unseren Modulbezeichnern verwenden:

```js
import { name as circleName } from "circle";
import { name as squareName, draw } from "square";
```

### Pfadpräfixe zuordnen

Ein Modulbezeichnerschlüssel in einer Karte kann auch verwendet werden, um ein Pfadpräfix in einem Modulbezeichner neu zuzuordnen. Beachten Sie, dass in diesem Fall sowohl die Eigenschaft als auch der zugeordnete Pfad mit einem Schrägstrich (`/`) enden müssen.

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

### Pfade in der Modulbezeichnerkarte

Modulbezeichnerschlüssel müssen nicht einzelne Wortnamen ("bare Namen") sein. Sie können auch Pfadtrenner enthalten oder mit ihnen enden, absolute URLs oder relative URL-Pfade sein, die mit `/`, `./` oder `../` beginnen.

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

Wenn es mehrere Modulbezeichnerschlüssel in einer Modulbezeichnerkarte gibt, die übereinstimmen könnten, wird der spezifischste Schlüssel ausgewählt (d.h. der mit dem längeren Pfad/Wert).

Ein Modulbezeichner von `./foo/../js/app.js` würde zu `./js/app.js` aufgelöst werden, bevor er übereinstimmt. Das bedeutet, dass ein Modulbezeichnerschlüssel von `./js/app.js` den Modulbezeichner auch dann treffen würde, wenn sie nicht genau gleich sind.

### Modulspezifische Karten mit Bereichen

Sie können den `scopes`-Schlüssel verwenden, um Zuordnungen bereitzustellen, die nur verwendet werden, wenn das Modul, das importiert wird, einen bestimmten URL-Pfad enthält. Wenn die URL des ladenden Skripts mit dem angegebenen Pfad übereinstimmt, wird die mit dem Bereich assoziierte Zuordnung verwendet. Dadurch können unterschiedliche Versionen des Moduls verwendet werden, je nach dem, welcher Code den Import durchführt.

Zum Beispiel wird die untenstehende Karte nur dann die bereichsspezifische Karte verwenden, wenn das ladende Modul eine URL hat, die den Pfad "/modules/custom-shapes/" enthält.

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

Wenn mehrere Bereiche mit der Referrer-URL übereinstimmen, wird der spezifischste Bereichspfad verwendet (der Bereichsschlüsselname mit dem längsten Namen). Der Browser fällt auf den nächsten spezifischsten Bereichspfad zurück, wenn es keinen passenden Bezeichner gibt, und so weiter, bis es auf die Modulbezeichnerkarte im `imports`-Schlüssel zurückfällt.

### Integritäts-Metadatenkarte

Sie können den `integrity`-Schlüssel verwenden, um Zuordnungen für Modul-[Integritätsmetadaten](/de/docs/Web/Security/Subresource_Integrity#using_subresource_integrity) bereitzustellen. Dies ermöglicht es Ihnen, die Integrität von dynamisch oder statisch importierten Modulen sicherzustellen. `integrity` ermöglicht es auch, einen Fallback für Top-Level- oder vorgeladene Module bereitzustellen, falls diese nicht bereits ein `integrity`-Attribut enthalten.

Die Karten-Schlüssel repräsentieren Modul-URLs, die entweder absolut oder relativ (beginnend mit `/`, `./` oder `../`) sein können. Die Karten-Werte repräsentieren Integritätsmetadaten, die identisch zu denen in den [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity)-Attributwerten sind.

Zum Beispiel definiert die folgende Karte Integritätsmetadaten für das `square.js`-Modul (direkt) und seinen bloßen Bezeichner (transitiv, über den `imports`-Schlüssel).

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

Intern halten Browser eine einzige globale Importkarten-Darstellung. Wenn mehrere Importkarten in ein Dokument eingefügt werden, werden deren Inhalte beim Registrieren in die globale Importkarte zusammengeführt.

Zum Beispiel, betrachte die folgenden zwei Importkarten:

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

Diese sind äquivalent zur folgenden einzigen Importkarte:

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

Modulbezeichner in jeder registrierten Karte, die vorher schon aufgelöst wurden, werden verworfen. Nachfolgende Auflösungen dieser Bezeichner liefern dieselben Ergebnisse wie ihre vorherigen Auflösungen.

Zum Beispiel, wenn der Modulbezeichner `/app/helper.js` bereits aufgelöst wurde, wäre die folgende neue Importkarte:

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

Die `/app/helper.js`-Regel wurde ignoriert und nicht in die Karte aufgenommen.

Ebenso werden Modulbezeichner in einer registrierten Karte, die bereits auf URLs in der globalen Karte abgebildet wurden, verworfen; die vorherige Zuordnung bleibt bestehen.

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

Sind äquivalent zur folgenden einzigen Importkarte:

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
> In nicht unterstützenden Browsern (bitte die [Kompatibilitätsdaten](#browser-kompatibilität) prüfen) kann ein [Polyfill](https://github.com/guybedford/es-module-shims) verwendet werden, um Probleme im Zusammenhang mit der Modulauflösung zu vermeiden.

## Importkarte JSON-Darstellung

Das Folgende ist eine "formale" Definition der JSON-Darstellung einer Importkarte.

Die Importkarte muss ein gültiges JSON-Objekt sein, das einen der optionalen Schlüssel `imports`, `scopes` und `integrity` definieren kann. Der Wert jedes Schlüssels muss ein Objekt sein, das leer sein kann.

- `imports` {{optional_inline}}
  - : Der Wert ist eine [Modulbezeichnerkarte](#module_specifier_map), die die Zuordnungen zwischen dem Modulbezeichnertext ermöglicht, der in einer `import`-Anweisung oder einem `import()`-Operator erscheinen kann, und dem Text, der es ersetzt, wenn der Bezeichner aufgelöst wird.

    Dies ist die Fallback-Karte, die nach passenden Modulbezeichnern durchsucht wird, wenn keine `scopes`-Pfad-URLs übereinstimmen, oder wenn Modulbezeichnerkarten in passenden `scopes`-Pfaden keinen Schlüssel enthalten, der dem Modulbezeichner entspricht.
    - `<module specifier map>`
      - : Eine "Modulbezeichnerkarte" ist ein gültiges JSON-Objekt, in dem die _Schlüssel_ Texte sind, die im Modulbezeichner beim Importieren eines Moduls vorhanden sein könnten, und die entsprechenden _Werte_ sind die URLs oder Pfade, die diesen Text beim Auflösen des Modulbezeichners zu einer Adresse ersetzen.

        Das Modulbezeichnerkarten-JSON-Objekt hat die folgenden Anforderungen:
        - Keiner der Schlüssel darf leer sein.
        - Alle Werte müssen Zeichenfolgen sein, die entweder eine gültige absolute URL oder eine gültige URL-Zeichenfolge definieren, die mit `/`, `./` oder `../` beginnt.
        - Wenn ein Schlüssel mit `/` endet, dann muss der entsprechende Wert auch mit `/` enden.
          Ein Schlüssel mit einem nachfolgenden `/` kann verwendet werden, um beim Zuordnen (oder Neuzuordnen) von Moduladressen als Präfix genutzt zu werden.
        - Die Reihenfolge der Objekteigenschaften ist irrelevant: Wenn mehrere Schlüssel dem Modulbezeichner entsprechen können, wird der spezifischste Schlüssel verwendet (mit anderen Worten, ein Bezeichner "olive/branch/" würde vor "olive/" übereinstimmen).

- `integrity` {{optional_inline}}
  - : Definiert ein gültiges JSON-Objekt, in dem die _Schlüssel_ Zeichenfolgen sind, die gültige absolute oder relative URLs (beginnend mit `/`, `./` oder `../`) enthalten,
    und die entsprechenden _Werte_ gültige [Integritätsmetadaten](/de/docs/Web/Security/Subresource_Integrity#using_subresource_integrity) sind.

    Wenn die URL eines Skripts, das ein Modul importiert oder vorgeladen wird, einem Schlüssel im `integrity`-Objekt entspricht, werden die entsprechenden Integritätsmetadaten auf die Fetch-Optionen des Skripts angewendet,
    es sei denn, sie haben bereits Integritätsmetadaten zugeordnet bekommen.

- `scopes` {{optional_inline}}
  - : Bereiche definieren pfadspezifische [Modulbezeichnerkarten](#module_specifier_map), die es erlauben, die Wahl der Karte vom Pfad des Codes, der das Modul importiert, abhängig zu machen.

    Das Bereiche-Objekt ist ein gültiges JSON-Objekt, in dem jede Eigenschaft ein `<scope key>` ist, das ein URL-Pfad ist, mit einem entsprechenden Wert, der eine `<module specifier map>` ist.

    Wenn die URL eines Skripts, das ein Modul importiert, einem `<scope key>`-Pfad entspricht, wird der mit dem Schlüssel verknüpfte `<module specifier map>`-Wert als erstes überprüft, ob er passende Bezeichner enthält.
    Wenn es mehrere passende Bereichsschlüssel gibt, werden die Werte, die mit den spezifischsten/verschachtelten Bereichspfaden verknüpft sind, zuerst auf passende Modulbezeichner überprüft.
    Die Fallback-Modulbezeichnerkarte in `imports` wird verwendet, wenn in keiner der passenden Modulbezeichnerkarten Schlüssel vorhanden sind, die dem Modulbezeichner entsprechen.

    Beachten Sie, dass der Bereich nicht ändert, wie eine Adresse aufgelöst wird; relative Adressen werden stets zur Importkarten-Basis-URL aufgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript-Module > Importieren von Modulen mit Importkarten](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps)
- [Das `type`-Attribut von HTML-`<script>`-Elementen](/de/docs/Web/HTML/Reference/Elements/script/type)
- [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import)
- [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import)
