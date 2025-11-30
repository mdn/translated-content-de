---
title: <script type="importmap">
short-title: importmap
slug: Web/HTML/Reference/Elements/script/type/importmap
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Der **`importmap`** Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/script/type) Attributs des [`<script>` Element](/de/docs/Web/HTML/Reference/Elements/script) gibt an, dass der Inhalt des Elements eine Importkarte enthält.

Eine Importkarte ist ein JSON-Objekt, das es Entwicklern ermöglicht, zu steuern, wie der Browser Modulspezifizierer auflöst, wenn [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) importiert werden. Sie bietet eine Zuordnung zwischen dem Text, der als Modulspezifizierer in einer [`import` Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) oder dem [`import()` Operator](/de/docs/Web/JavaScript/Reference/Operators/import) verwendet wird, und dem entsprechenden Wert, der den Text beim Auflösen des Spezifizierers ersetzt. Das JSON-Objekt muss dem [Importkartenschema im JSON-Format](#importkarten-json-darstellung) entsprechen.

Eine Importkarte wird verwendet, um Modulspezifizierer in statischen und dynamischen Imports aufzulösen, und muss daher deklariert und verarbeitet werden, bevor irgendwelche `<script>` Elemente Module mit in der Karte deklarierten Spezifizierern importieren. Beachten Sie, dass die Importkarte nur auf Modulspezifizierer in der [`import` Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) oder dem [`import()` Operator](/de/docs/Web/JavaScript/Reference/Operators/import) für Module, die in Dokumente geladen werden, anwendbar ist; sie gilt nicht für den Pfad, der im `src` Attribut eines `<script>` Elements angegeben ist oder für Module, die in Worker oder Worklets geladen werden.

Weitere Informationen finden Sie im Abschnitt [Module mit Importkarten importieren](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) im JavaScript-Module-Leitfaden.

## Syntax

```html
<script type="importmap">
  // JSON object defining import
</script>
```

Die Attribute `src`, `async`, `nomodule`, `defer`, `crossorigin`, `integrity`, und `referrerpolicy` dürfen nicht angegeben werden.

### Ausnahmen

- `TypeError`
  - : Die Definition der Importkarte ist kein JSON-Objekt, der `importmap` Schlüssel ist definiert, aber sein Wert ist kein JSON-Objekt, oder der `scopes` Schlüssel ist definiert, aber sein Wert ist kein JSON-Objekt.

Browser generieren Konsolenwarnungen für andere Fälle, in denen das Importkarte-JSON nicht dem [Importkartenschema](#importkarten-json-darstellung) entspricht.

## Beschreibung

Beim Importieren eines [JavaScript-Moduls](/de/docs/Web/JavaScript/Guide/Modules) haben sowohl die [`import` Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) als auch der [`import()` Operator](/de/docs/Web/JavaScript/Reference/Operators/import) einen "Modulspezifizierer", der angibt, welches Modul importiert werden soll. Ein Browser muss in der Lage sein, diesen Spezifizierer zu einer absoluten URL aufzulösen, um das Modul zu importieren.

Zum Beispiel importieren die folgenden Anweisungen Elemente vom Modulspezifizierer `"https://example.com/shapes/circle.js"`, was eine absolute URL ist, und vom Modulspezifizierer `"./modules/shapes/square.js"`, was ein Pfad relativ zur Basis-URL des Dokuments ist.

```js
import { name as circleName } from "https://example.com/shapes/circle.js";
import { name as squareName, draw } from "./modules/shapes/square.js";
```

Importkarten erlauben es Entwicklern, (fast) jeden gewünschten Text im Modulspezifizierer anzugeben; die Karte liefert einen entsprechenden Wert, der den Text ersetzt, wenn der Modulspezifizierer aufgelöst wird.

### Bare modules

Die unten gezeigte Importkarte definiert einen `imports` Schlüssel, der eine "Modulspezifiziererkarte" mit den Eigenschaften `circle` und `square` enthält.

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

Mit dieser Importkarte können wir dieselben Module wie oben importieren, aber in unseren Modulspezifizierern "bare modules" verwenden:

```js
import { name as circleName } from "circle";
import { name as squareName, draw } from "square";
```

### Zuordnung von Pfadpräfixen

Ein Schlüssel in der Modulspezifiziererkarte kann auch verwendet werden, um ein Pfadpräfix in einem Modulspezifizierer neu zuzuordnen. Beachten Sie, dass in diesem Fall sowohl die Eigenschaft als auch der zugeordnete Pfad ein abschließendes Schrägstrich (`/`) haben müssen.

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

### Pfade im Schlüssel der Modulspezifiziererkarte

Modulspezifiziererschlüssel müssen keine einzelnen Wortnamen ("bare names") sein. Sie können auch Pfadtrennzeichen enthalten oder mit ihnen enden oder absolute URLs sein oder relative URL-Pfade, die mit `/`, `./`, oder `../` beginnen.

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

Wenn es mehrere Modulspezifiziererschlüssel in einer Modulspezifiziererkarte gibt, die übereinstimmen könnten, wird der spezifischste Schlüssel ausgewählt (d.h. der mit dem längeren Pfad/Wert).

Ein Modulspezifizierer von `./foo/../js/app.js` würde vor dem Abgleichen zu `./js/app.js` aufgelöst. Das bedeutet, dass ein Modulspezifiziererschlüssel von `./js/app.js` dem Modulspezifizierer entsprechen würde, auch wenn sie nicht genau gleich sind.

### Gescopte Modulspezifiziererkarten

Sie können den `scopes` Schlüssel verwenden, um Zuordnungen bereitzustellen, die nur verwendet werden, wenn das Script, das das Modul importiert, einen bestimmten URL-Pfad enthält. Wenn die URL des ladenden Script den angegebenen Pfad erfüllt, wird die mit dem Scope verbundene Zuordnung verwendet. Dies ermöglicht die Verwendung verschiedener Versionen des Moduls, je nachdem, welcher Code den Import durchführt.

Zum Beispiel wird die unten stehende Karte nur die gescopte Karte verwenden, wenn das ladende Modul eine URL hat, die den Pfad: "/modules/custom-shapes/" enthält.

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

Wenn mehrere Scopes mit der Referrer-URL übereinstimmen, wird der spezifischste Scope-Pfad verwendet (der Scopeschlüsselname mit dem längsten Namen). Der Browser wechselt zum nächstspezifischeren Scope-Pfad, wenn kein übereinstimmender Spezifizierer vorhanden ist, und so weiter, falls nötig, bis letztlich auf die Modulspezifiziererkarte im `imports` Schlüssel zurückgegriffen wird.

### Integritätsmetadatenkarte

Sie können den `integrity` Schlüssel verwenden, um eine Zuordnung für Modul-[Integritätsmetadaten](/de/docs/Web/Security/Defenses/Subresource_Integrity#using_subresource_integrity) bereitzustellen. Dies ermöglicht es Ihnen, die Integrität von dynamisch oder statisch importierten Modulen sicherzustellen. `integrity` ermöglicht Ihnen auch, einen Fallback für Top-Level- oder vorgeladene Module bereitzustellen, falls sie nicht bereits ein `integrity` Attribut enthalten.

Die Kartenschlüssel repräsentieren Modul-URLs, die entweder absolut oder relativ sein können (beginnend mit `/`, `./`, oder `../`). Die Kartenwerte repräsentieren Integritätsmetadaten, identisch mit denen, die in `integrity` Attributwerten verwendet werden.

Zum Beispiel definiert die unten stehende Karte Integritätsmetadaten für das `square.js` Modul (direkt) und seinen bare Spezifizierer (transitiv über den `imports` Schlüssel).

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

Browser verwalten intern eine einzige globale Importkarten-Darstellung. Wenn mehrere Importkarten in ein Dokument aufgenommen werden, werden deren Inhalte beim Registrieren in die globale Importkarte zusammengeführt.

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

Modulspezifizierer in jeder registrierten Karte, die bereits vorher aufgelöst wurden, werden ignoriert. Nachfolgende Auflösungen dieser Spezifizierer liefern dieselben Ergebnisse wie ihre vorherigen Auflösungen.

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

gleichwertig mit:

```html
<script type="importmap">
  {
    "imports": {
      "lodash": "/node_modules/lodash-es/lodash.js"
    }
  }
</script>
```

Die `/app/helper.js` Regel wurde ignoriert und nicht in die Karte aufgenommen.

Ebenso werden Modulspezifizierer in einer registrierten Karte, die bereits zu URLs in der globalen Karte zugeordnet wurden, ignoriert; ihre vorherige Zuordnung bleibt bestehen.

Zum Beispiel die folgenden zwei Importkarten:

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

sind gleichwertig mit der folgenden einzigen Importkarte:

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
> In nicht unterstützenden Browsern (überprüfen Sie die [Kompatibilitätsdaten](#browser-kompatibilität)) kann ein [Polyfill](https://github.com/guybedford/es-module-shims) verwendet werden, um Probleme im Zusammenhang mit der Modulauflösung zu vermeiden.

## Importkarten-JSON-Darstellung

Das Folgende ist eine "formale" Definition der Importkarten-JSON-Darstellung.

Die Importkarte muss ein gültiges JSON-Objekt sein, das beliebige der optionalen Schlüssel `imports`, `scopes` und `integrity` definieren kann. Der Wert jedes Schlüssels muss ein Objekt sein, das leer sein darf.

- `imports` {{optional_inline}}
  - : Der Wert ist eine [Modulspezifiziererkarte](#module_specifier_map), die die Zuordnungen zwischen Modulspezifizierertext, der in einer `import` Anweisung oder einem `import()` Operator erscheinen könnte, und dem Text bereitstellt, der ihn ersetzt, wenn der Spezifizierer aufgelöst wird.

    Dies ist die Fallback-Karte, die nach übereinstimmenden Modulspezifizierern durchsucht wird, wenn keine `scopes` Pfad-URLs übereinstimmen oder wenn die Modulspezifiziererkarten in übereinstimmenden `scopes` Pfaden keinen Schlüssel enthalten, der dem Modulspezifizierer entspricht.
    - `<module specifier map>`
      - : Eine "Modulspezifiziererkarte" ist ein gültiges JSON-Objekt, in dem die _Schlüssel_ Texte sind, die im Modulspezifizierer beim Importieren eines Moduls vorkommen können, und die entsprechenden _Werte_ die URLs oder Pfade, die diesen Text ersetzen, wenn der Modulspezifizierer zu einer Adresse aufgelöst wird.

        Das JSON-Objekt der Modulspezifiziererkarte hat folgende Anforderungen:
        - Keiner der Schlüssel darf leer sein.
        - Alle Werte müssen Strings sein, die entweder eine gültige absolute URL oder eine gültige URL darstellen, die mit `/`, `./`, oder `../` beginnt.
        - Wenn ein Schlüssel mit `/` endet, dann muss der entsprechende Wert auch mit `/` enden.
          Ein Schlüssel mit einem abschließenden `/` kann als Präfix verwendet werden, wenn Moduladressen gemappt (oder neu gemappt) werden.
        - Die Reihenfolge der Objekteigenschaften ist irrelevant: Wenn mehrere Schlüssel dem Modulspezifizierer entsprechen können, wird der spezifischste Schlüssel verwendet (in anderen Worten, ein Spezifizierer "olive/branch/" würde vor "olive/" übereinstimmen).

- `integrity` {{optional_inline}}
  - : Definiert ein gültiges JSON-Objekt, in dem die _Schlüssel_ Strings mit gültigen absoluten oder relativen URLs (beginnend mit `/`, `./`, oder `../`) sind,
    und die entsprechenden _Werte_ sind gültige [Integritätsmetadaten](/de/docs/Web/Security/Defenses/Subresource_Integrity#using_subresource_integrity).

    Wenn die URL eines Scripts, das ein Modul importiert oder vorlädt, einem Schlüssel im `integrity` Objekt entspricht, werden die entsprechenden Integritätsmetadaten auf die Fetch-Optionen des Scripts angewendet,
    sofern sie nicht bereits Integritätsmetadaten enthalten.

- `scopes` {{optional_inline}}
  - : Scopes definieren pfadspezifische [Modulspezifiziererkarten](#module_specifier_map), sodass die Auswahl der Karte vom Pfad des den Import ausführenden Codes abhängen kann.

    Das `scopes` Objekt ist ein gültiges JSON-Objekt, in dem jede Eigenschaft ein `<scope key>` ist, ein URL-Pfad, mit einem entsprechenden Wert, der eine `<module specifier map>` ist.

    Wenn die URL eines Scripts, das ein Modul importiert, einem `<scope key>` Pfad entspricht, wird der `<module specifier map>` Wert, der dem Schlüssel zugeordnet ist, zuerst auf übereinstimmende Spezifizierer geprüft.
    Wenn es mehrere übereinstimmende Scopeschlüssel gibt, werden die Werte der spezifischsten/verschachtelten Scopepfade zuerst auf übereinstimmende Modulspezifizierer geprüft.
    Die Fallback-Modulspezifiziererkarte in `imports` wird verwendet, wenn es keine übereinstimmenden Modulspezifiziererschlüssel in einer der übereinstimmenden gescopten Modulspezifiziererkarten gibt.

    Beachten Sie, dass der Scope nicht ändert, wie eine Adresse aufgelöst wird; relative Adressen werden immer zur Importkarten-Basis-URL aufgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript-Module > Module mit Importkarten importieren](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps)
- [Das `type` Attribut von HTML `<script>` Elementen](/de/docs/Web/HTML/Reference/Elements/script/type)
- [`import` Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import)
- [`import()` Operator](/de/docs/Web/JavaScript/Reference/Operators/import)
