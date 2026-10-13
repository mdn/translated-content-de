---
title: '`<script type="importmap">`-Wert des HTML-Attributs'
short-title: importmap
slug: Web/HTML/Reference/Elements/script/type/importmap
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

Der Wert **`importmap`** des Attributs [`type`](/de/docs/Web/HTML/Reference/Elements/script/type) des [Elements `<script>`](/de/docs/Web/HTML/Reference/Elements/script) gibt an, dass der Inhalt des Elements eine Import Map enthält.

Eine Import Map ist ein JSON-Objekt, mit dem Entwickler steuern können, wie der Browser Modulbezeichner beim Importieren von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) auflöst. Sie ordnet dem Text, der als Modulbezeichner in einer [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) oder beim [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) verwendet wird, einen Wert zu, der diesen Text beim Auflösen des Bezeichners ersetzt. Das JSON-Objekt muss dem [JSON-Repräsentationsformat für Import Maps](#json-repräsentation_einer_import_map) entsprechen.

Eine Import Map wird verwendet, um Modulbezeichner in statischen und dynamischen Importen aufzulösen. Sie muss daher deklariert und verarbeitet werden, bevor `<script>`-Elemente Module mit Bezeichnern importieren, die in der Map definiert sind. Beachten Sie, dass die Import Map nur für Modulbezeichner in der [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) oder beim [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) für Module gilt, die in Dokumente geladen werden. Sie gilt weder für den im Attribut `src` eines `<script>`-Elements angegebenen Pfad noch für Module, die in Worker oder Worklets geladen werden.

Weitere Informationen finden Sie im Abschnitt [Module mithilfe von Import Maps importieren](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) des Leitfadens zu JavaScript-Modulen.

## Syntax

```html
<script type="importmap">
  // JSON object defining import
</script>
```

Die Attribute `src`, `async`, `nomodule`, `defer`, `crossorigin`, `integrity` und `referrerpolicy` dürfen nicht angegeben werden.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Die Definition der Import Map ist kein JSON-Objekt, der Schlüssel `importmap` ist definiert, aber sein Wert ist kein JSON-Objekt, oder der Schlüssel `scopes` ist definiert, aber sein Wert ist kein JSON-Objekt.

In anderen Fällen, in denen das JSON der Import Map nicht dem [Import-Map-Schema](#json-repräsentation_einer_import_map) entspricht, geben Browser Warnungen in der Konsole aus.

## Beschreibung

Beim Importieren eines [JavaScript-Moduls](/de/docs/Web/JavaScript/Guide/Modules) enthalten sowohl die [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) als auch der [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) einen „Modulbezeichner“, der das zu importierende Modul angibt. Ein Browser muss diesen Bezeichner in eine absolute URL auflösen können, um das Modul zu importieren.

Die folgenden Anweisungen importieren beispielsweise Elemente über den Modulbezeichner `"https://example.com/shapes/circle.js"`, eine absolute URL, und den Modulbezeichner `"./modules/shapes/square.js"`, einen Pfad relativ zur Basis-URL des Dokuments.

```js
import { name as circleName } from "https://example.com/shapes/circle.js";
import { name as squareName, draw } from "./modules/shapes/square.js";
```

Import Maps ermöglichen es Entwicklern, (fast) beliebigen Text als Modulbezeichner anzugeben. Die Map stellt einen entsprechenden Wert bereit, der den Text beim Auflösen des Modulbezeichners ersetzt.

### Modulbezeichner ohne Pfadangabe

Die folgende Import Map definiert einen Schlüssel `imports`, der eine „Modulbezeichner-Map“ mit den Eigenschaften `circle` und `square` enthält.

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

Mit dieser Import Map können wir dieselben Module wie oben importieren, aber Modulbezeichner ohne Pfadangabe verwenden:

```js
import { name as circleName } from "circle";
import { name as squareName, draw } from "square";
```

### Pfadpräfixe zuordnen

Ein Schlüssel in einer Modulbezeichner-Map kann auch verwendet werden, um ein Pfadpräfix in einem Modulbezeichner neu zuzuordnen. Beachten Sie, dass in diesem Fall sowohl die Eigenschaft als auch der zugeordnete Pfad mit einem Schrägstrich (`/`) enden müssen.

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

Anschließend könnten wir ein `circle`-Modul wie gezeigt importieren.

```js
import { name as circleName } from "shapes/circle.js";
```

### Pfade in Schlüsseln der Modulbezeichner-Map

Schlüssel für Modulbezeichner müssen keine aus einem einzelnen Wort bestehenden Namen („Bare Names“) sein. Sie können auch Pfadtrennzeichen enthalten oder damit enden, absolute URLs sein oder relative URL-Pfade, die mit `/`, `./` oder `../` beginnen.

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

Wenn mehrere Schlüssel in einer Modulbezeichner-Map infrage kommen, wird der spezifischste Schlüssel ausgewählt (d.h. der mit dem längeren Pfad oder Wert).

Ein Modulbezeichner `./foo/../js/app.js` würde vor dem Abgleich zu `./js/app.js` aufgelöst. Das bedeutet, dass ein Modulbezeichner-Schlüssel `./js/app.js` mit dem Modulbezeichner übereinstimmen würde, obwohl beide nicht exakt gleich sind.

### Geltungsbereichsbezogene Modulbezeichner-Maps

Mit dem Schlüssel `scopes` können Sie Zuordnungen bereitstellen, die nur verwendet werden, wenn das Skript, das das Modul importiert, einen bestimmten URL-Pfad enthält. Wenn die URL des ladenden Skripts mit dem angegebenen Pfad übereinstimmt, wird die dem Geltungsbereich zugeordnete Map verwendet. So können unterschiedliche Versionen eines Moduls verwendet werden, je nachdem, welcher Code es importiert.

Beispielsweise wird die geltungsbereichsbezogene Map im folgenden Beispiel nur verwendet, wenn die URL des ladenden Moduls den Pfad „/modules/custom-shapes/“ enthält.

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

Wenn mehrere Geltungsbereiche mit der Referrer-URL übereinstimmen, wird der spezifischste Geltungsbereichspfad verwendet (der Geltungsbereichsschlüssel mit dem längsten Namen). Falls darin kein passender Bezeichner vorhanden ist, greift der Browser auf den nächstspezifischen Geltungsbereichspfad zurück und so weiter. Schließlich greift er auf die Modulbezeichner-Map im Schlüssel `imports` zurück.

### Map für Integritätsmetadaten

Mit dem Schlüssel `integrity` können Sie Zuordnungen für [Integritätsmetadaten](/de/docs/Web/Security/Defenses/Subresource_Integrity#using_subresource_integrity) von Modulen bereitstellen. So können Sie die Integrität dynamisch oder statisch importierter Module sicherstellen. `integrity` ermöglicht es außerdem, Integritätsmetadaten für Module bereitzustellen, die direkt oder vorab geladen werden, falls diese nicht bereits ein Attribut `integrity` besitzen.

Die Schlüssel der Map stehen für Modul-URLs, die absolut oder relativ sein können (beginnend mit `/`, `./` oder `../`). Die Werte der Map sind Integritätsmetadaten, wie sie auch in Werten des Attributs [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) verwendet werden.

Die folgende Map definiert beispielsweise Integritätsmetadaten für das Modul `square.js` (direkt) und seinen Modulbezeichner ohne Pfadangabe (indirekt über den Schlüssel `imports`).

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

### Mehrere Import Maps zusammenführen

Browser, die dies unterstützen, erlauben eine oder mehrere Import-Map-Deklarationen an beliebiger Stelle im Dokument, sofern sie definiert werden, bevor ein von ihnen abhängiges Modul geladen wird. Einige [Browserversionen](#browser-kompatibilität) erlauben nur eine einzige Import-Map-Deklaration, die vor dem Laden jeglicher Module stehen muss.

Browser verwalten intern eine einzige globale Import-Map-Repräsentation. Wenn ein Dokument mehrere Import Maps enthält, werden ihre Inhalte bei der Registrierung mit der globalen Import Map zusammengeführt.

Betrachten Sie beispielsweise die folgenden beiden Import Maps:

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

Sie entsprechen der folgenden einzelnen Import Map:

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

Modulbezeichner in einer neu registrierten Map, die zuvor bereits aufgelöst wurden, werden verworfen. Spätere Auflösungen dieser Bezeichner liefern dieselben Ergebnisse wie zuvor.

Wenn beispielsweise der Modulbezeichner `/app/helper.js` bereits aufgelöst wurde, wäre die folgende neue Import Map:

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

gleichbedeutend mit:

```html
<script type="importmap">
  {
    "imports": {
      "lodash": "/node_modules/lodash-es/lodash.js"
    }
  }
</script>
```

Die Regel für `/app/helper.js` wurde ignoriert und nicht in die Map aufgenommen.

Ebenso werden Modulbezeichner in einer registrierten Map verworfen, wenn sie in der globalen Map bereits URLs zugeordnet wurden. Ihre bisherige Zuordnung bleibt bestehen.

Die folgenden beiden Import Maps:

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

entsprechen beispielsweise der folgenden einzelnen Import Map:

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

Die Regel für `/app/helper/` aus der zweiten Map wurde verworfen.

> [!NOTE]
> In Browsern ohne Unterstützung (siehe [Kompatibilitätsdaten](#browser-kompatibilität)) kann ein [Polyfill](https://github.com/guybedford/es-module-shims) verwendet werden, um Probleme bei der Modulauflösung zu vermeiden.

## JSON-Repräsentation einer Import Map

Im Folgenden finden Sie eine „formale“ Definition der JSON-Repräsentation einer Import Map.

Die Import Map muss ein gültiges JSON-Objekt sein, das die optionalen Schlüssel `imports`, `scopes` und `integrity` enthalten kann. Der Wert jedes Schlüssels muss ein Objekt sein, das auch leer sein darf.

- `imports` {{optional_inline}}
  - : Der Wert ist eine [Modulbezeichner-Map](#module_specifier_map). Sie definiert die Zuordnungen zwischen dem Text eines Modulbezeichners, der in einer `import`-Anweisung oder beim `import()`-Operator vorkommen kann, und dem Text, der ihn beim Auflösen des Bezeichners ersetzt.

    Dies ist die Fallback-Map, die nach passenden Modulbezeichnern durchsucht wird, wenn keine Pfad-URLs aus `scopes` übereinstimmen oder wenn die Modulbezeichner-Maps in übereinstimmenden `scopes`-Pfaden keinen zum Modulbezeichner passenden Schlüssel enthalten.
    - `<module specifier map>`
      - : Eine „Modulbezeichner-Map“ ist ein gültiges JSON-Objekt, dessen _Schlüssel_ Text enthalten, der beim Importieren eines Moduls im Modulbezeichner vorkommen kann. Die zugehörigen _Werte_ sind URLs oder Pfade, die diesen Text ersetzen, wenn der Modulbezeichner zu einer Adresse aufgelöst wird.

        Das JSON-Objekt der Modulbezeichner-Map muss die folgenden Anforderungen erfüllen:
        - Keiner der Schlüssel darf leer sein.
        - Alle Werte müssen Zeichenfolgen sein, die entweder eine gültige absolute URL oder eine gültige URL-Zeichenfolge definieren, die mit `/`, `./` oder `../` beginnt.
        - Wenn ein Schlüssel mit `/` endet, muss auch der zugehörige Wert mit `/` enden.
          Ein Schlüssel mit abschließendem `/` kann bei der Zuordnung oder Neuzuordnung von Modul-Adressen als Präfix verwendet werden.
        - Die Reihenfolge der Objekteigenschaften ist unerheblich: Wenn mehrere Schlüssel zum Modulbezeichner passen, wird der spezifischste Schlüssel verwendet (anders ausgedrückt: Ein Bezeichner „olive/branch/“ würde vor „olive/“ übereinstimmen).

- `integrity` {{optional_inline}}
  - : Definiert ein gültiges JSON-Objekt, dessen _Schlüssel_ Zeichenfolgen mit gültigen absoluten oder relativen URLs sind (beginnend mit `/`, `./` oder `../`) und dessen zugehörige _Werte_ gültige [Integritätsmetadaten](/de/docs/Web/Security/Defenses/Subresource_Integrity#using_subresource_integrity) sind.

    Wenn die URL eines Skripts, das ein Modul importiert oder vorab lädt, mit einem Schlüssel im Objekt `integrity` übereinstimmt, werden die zugehörigen Integritätsmetadaten auf die Abrufoptionen des Skripts angewendet, sofern diesen nicht bereits Integritätsmetadaten zugeordnet sind.

- `scopes` {{optional_inline}}
  - : Geltungsbereiche definieren pfadspezifische [Modulbezeichner-Maps](#module_specifier_map). Dadurch kann die Wahl der Map vom Pfad des Codes abhängen, der das Modul importiert.

    Das Geltungsbereichsobjekt ist ein gültiges JSON-Objekt, in dem jede Eigenschaft ein `<scope key>` ist – ein URL-Pfad mit einer `<module specifier map>` als zugehörigem Wert.

    Wenn die URL eines Skripts, das ein Modul importiert, mit dem Pfad eines `<scope key>` übereinstimmt, wird zuerst der zugehörige Wert `<module specifier map>` auf passende Bezeichner geprüft. Wenn mehrere Geltungsbereichsschlüssel übereinstimmen, werden zuerst die Werte der spezifischsten beziehungsweise am tiefsten verschachtelten Geltungsbereichspfade auf passende Modulbezeichner geprüft. Die Fallback-Modulbezeichner-Map in `imports` wird verwendet, wenn in keiner der passenden geltungsbereichsbezogenen Modulbezeichner-Maps ein passender Schlüssel vorhanden ist.

    Beachten Sie, dass der Geltungsbereich nicht ändert, wie eine Adresse aufgelöst wird: Relative Adressen werden immer relativ zur Basis-URL der Import Map aufgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript-Module > Module mithilfe von Import Maps importieren](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps)
- [Das Attribut `type` von HTML-`<script>`-Elementen](/de/docs/Web/HTML/Reference/Elements/script/type)
- [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import)
- [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import)
