---
title: <script type="importmap">
slug: Web/HTML/Element/script/type/importmap
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTMLSidebar}}

Der **`importmap`** Wert des [`type`](/de/docs/Web/HTML/Element/script/type) Attributs des [`<script>`-Elements](/de/docs/Web/HTML/Element/script) gibt an, dass der Inhalt des Elements eine Importkarte enthält.

Eine Importkarte ist ein JSON-Objekt, das es Entwicklern ermöglicht, zu kontrollieren, wie der Browser Modul-Spezifikationen auflöst, wenn [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) importiert werden.
Sie bietet eine Zuordnung zwischen dem Text, der als Modul-Spezifikator in einer [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) oder dem [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) verwendet wird, und dem entsprechenden Wert, der den Text beim Auflösen des Spezifikators ersetzt.
Das JSON-Objekt muss dem [JSON-Darstellungsformat für Importkarten](#json-darstellung_der_importkarte) entsprechen.

Eine Importkarte wird verwendet, um Modul-Spezifikatoren in statischen und dynamischen Imports aufzulösen, und muss daher deklariert und verarbeitet werden, bevor `<script>`-Elemente, die Module mit in der Karte deklarierten Spezifikatoren importieren.
Beachten Sie, dass die Importkarte nur für Modul-Spezifikatoren in der [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) oder dem [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) für Module gilt, die in Dokumente geladen werden; sie gilt nicht für den im `src`-Attribut eines `<script>`-Elements angegebenen Pfad oder für Module, die in Worker oder Worklets geladen werden.

Für weitere Informationen siehe den Abschnitt [Importing modules using import maps](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) im JavaScript-Module-Leitfaden.

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

Browser erzeugen Konsolenwarnungen für andere Fälle, in denen das Importkarten-JSON nicht dem [Importkarte](#json-darstellung_der_importkarte)-Schema entspricht.

## Beschreibung

Beim Importieren eines [JavaScript-Moduls](/de/docs/Web/JavaScript/Guide/Modules) besitzen sowohl die [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) als auch der [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) einen "Modul-Spezifikator", der das zu importierende Modul angibt.
Ein Browser muss in der Lage sein, diesen Spezifikator in eine absolute URL aufzulösen, um das Modul importieren zu können.

Zum Beispiel importieren die folgenden Anweisungen Elemente aus dem Modul-Spezifikator `"./modules/shapes/square.js"`, welches ein pfadrelativer zum Basis-URL des Dokuments ist, und dem Modul-Spezifikator `"https://example.com/shapes/circle.js"`, welches eine absolute URL ist.

```js
import { name as squareName, draw } from "./modules/shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

Importkarten erlauben es Entwicklern, (fast) jeden beliebigen Text im Modul-Spezifikator anzugeben; die Karte bietet einen entsprechenden Wert, der den Text ersetzt, wenn der Modul-Spezifikator aufgelöst wird.

### Bare-Module

Die nachstehende Importkarte definiert einen `imports`-Schlüssel, der eine "Modul-Spezifikator-Karte" mit den Eigenschaften `square` und `circle` hat.

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

Mit dieser Importkarte können wir die gleichen Module wie oben importieren, aber unter Verwendung von "Bare-Module" in unseren Modul-Spezifikatoren:

```js
import { name as squareName, draw } from "square";
import { name as circleName } from "circle";
```

### Zuordnung von Pfadpräfixen

Ein Modul-Spezifikator-Karten-Schlüssel kann auch verwendet werden, um ein Pfadpräfix in einem Modul-Spezifikator neu zuzuordnen.
Beachten Sie, dass in diesem Fall sowohl die Eigenschaft als auch der zugeordnete Pfad ein Schrägstrich (`/`) am Ende haben müssen.

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

### Pfade im Modul-Spezifikator-Karten-Schlüssel

Modul-Spezifikator-Schlüssel müssen keine einzelnen Wörternamen ("bare Names") sein.
Sie können auch Pfadtrenner enthalten oder damit enden, oder absolute URLs sein, oder relative URL-Pfade, die mit `/`, `./` oder `../` beginnen.

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

Wenn es mehrere Modul-Spezifikator-Schlüssel in einer Modul-Spezifikator-Karte gibt, die übereinstimmen könnten, wird der spezifischste Schlüssel ausgewählt (d.h. der mit dem längeren Pfad/Wert).

Ein Modul-Spezifikator von `./foo/../js/app.js` würde auf `./js/app.js` aufgelöst werden, bevor er zu einem Übereinstimmung kommt.
Dies bedeutet, dass ein Modul-Spezifikator-Schlüssel von `./js/app.js` den Modul-Spezifikator treffen würde, auch wenn sie nicht genau gleich sind.

### Modul-Spezifikator-Karten mit Begrenzungen

Sie können den `scopes`-Schlüssel verwenden, um Zuordnungen bereitzustellen, die nur verwendet werden, wenn das Modul enthaltende Skript einen bestimmten URL-Pfad enthält.
Wenn die URL des ladenden Skripts mit dem angegebenen Pfad übereinstimmt, wird die mit dem Scope verbundene Zuordnung verwendet.
Dies ermöglicht die Verwendung verschiedener Versionen des Moduls abhängig davon, welcher Code den Import vornimmt.

Zum Beispiel wird die nachstehende Karte nur die skalierte Karte verwenden, wenn das ladende Modul eine URL hat, die den Pfad: "/modules/custom-shapes/" enthält.

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

Wenn mehrere Scopes mit der Referrer-URL übereinstimmen, wird der spezifischste Scope-Pfad verwendet (der Scopeschlüsselname mit dem längsten Namen).
Der Browser fällt auf den nächstspezifischsten Skopepfad zurück, wenn kein übereinstimmender Spezifikator vorhanden ist und so weiter, bis letztendlich auf die Modul-Spezifikator-Karte im `imports`-Schlüssel zurückgegriffen wird.

### Integritätsmetadaten-Karten

Sie können den `integrity`-Schlüssel verwenden, um eine Zuordnung für [Integritätsmetadaten](/de/docs/Web/Security/Subresource_Integrity#using_subresource_integrity) von Modulen bereitzustellen.
Dies ermöglicht es Ihnen, die Integrität von dynamisch oder statisch importierten Modulen sicherzustellen.
`integrity` ermöglicht es Ihnen außerdem, ein Fallback für Top-Level- oder Preloaded-Module bereitzustellen, falls diese nicht bereits ein `integrity`-Attribut enthalten.

Die Karten-Schlüssel stehen für Modul-URLs, die entweder absolut oder relativ sein können (beginnend mit `/`, `./` oder `../`).
Die Kartenwerte stehen für Integritätsmetadaten, die identisch zu denen sind, die in [`integrity`](/de/docs/Web/HTML/Element/script#integrity)-Attributwerten verwendet werden.

Zum Beispiel definiert die nachstehende Karte Integritätsmetadaten für das `square.js` Modul (direkt) und seinen bare Spezifikator (transitiv, über den `imports`-Schlüssel).

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

Browser verwalten intern eine einzelne globale Importkarten-Darstellung. Wenn mehrere Importkarten in einem Dokument enthalten sind, werden deren Inhalte in die globale Importkarte beim Registrieren zusammengeführt.

Beispielsweise betrachten Sie die folgenden zwei Importkarten:

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

Diese sind gleichwertig mit der folgenden einzelnen Importkarte:

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

Modul-Spezifikatoren in jeder registrierten Karte, die bereits zuvor aufgelöst wurden, werden verworfen. Nachfolgende Auflösungen dieser Spezifikatoren liefern die gleichen Ergebnisse wie ihre vorherigen Auflösungen.

Beispielsweise, wenn der Modul-Spezifikator `/app/helper.js` bereits aufgelöst wurde, sieht die folgende neue Importkarte wie folgt aus:

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

Dies wäre gleichwertig mit:

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

Ebenso werden Modul-Spezifikatoren in einer registrierten Karte, die bereits zu URLs in der globalen Karte abgebildet wurden, verworfen; ihre vorherige Abbildung hat Vorrang.

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

Sind gleichwertig mit der folgenden einzelnen Importkarte:

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

Die `/app/helper/`-Regel wurde von der zweiten Karte entfernt.

> [!NOTE]
> In nicht unterstützenden Browsern (prüfen Sie die [Kompatibilitätsdaten](#browser-kompatibilität)) kann ein [Polyfill](https://github.com/guybedford/es-module-shims) verwendet werden, um Probleme im Zusammenhang mit der Modulauflösung zu vermeiden.

## JSON-Darstellung der Importkarte

Das Folgende ist eine "formale" Definition der JSON-Darstellung der Importkarte.

Die Importkarte muss ein gültiges JSON-Objekt sein, das beliebige der optionalen Schlüssel `imports`, `scopes` und `integrity` definieren kann. Der Wert jedes Schlüssels muss ein Objekt sein, das leer sein kann.

- `imports` {{optional_inline}}

  - : Der Wert ist eine [Modul-Spezifikator-Karte](#module_specifier_map), die die Zuordnungen zwischen dem Modulspezifikator-Text, der in einer `import`-Anweisung oder einem `import()`-Operator auftreten könnte, und dem Text, der ihn ersetzt, wenn der Spezifikator aufgelöst wird, bereitstellt.

    Dies ist die Fallback-Karte, die nach übereinstimmenden Modul-Spezifikatoren durchsucht wird, wenn keine `scopes`-Pfad-URLs übereinstimmen oder wenn Modul-Spezifikator-Karten in übereinstimmenden `scopes`-Pfade keinen Schlüssel enthalten, der mit dem Modul-Spezifikator übereinstimmt.

    - `<module specifier map>`

      - : Eine "Modul-Spezifikator-Karte" ist ein gültiges JSON-Objekt, in dem die _Schlüssel_ Text sind, der im Modul-Spezifikator vorhanden sein kann, wenn ein Modul importiert wird, und die entsprechenden _Werte_ die URLs oder Pfade sind, die diesen Text ersetzen, wenn der Modul-Spezifikator zu einer Adresse aufgelöst wird.

        Das JSON-Objekt der Modul-Spezifikator-Karte hat die folgenden Anforderungen:

        - Keiner der Schlüssel darf leer sein.
        - Alle Werte müssen Zeichenketten sein, die entweder eine gültige absolute URL oder eine gültige URL-Zeichenkette definieren, die mit `/`, `./` oder `../` beginnt.
        - Wenn ein Schlüssel mit `/` endet, muss der entsprechende Wert ebenfalls mit `/` enden.
          Ein Schlüssel mit einem nachgestellten `/` kann als Präfix verwendet werden, wenn Moduladressen zugeordnet (oder neu zugeordnet) werden.
        - Die Reihenfolge der Objekteigenschaften ist irrelevant: Wenn mehrere Schlüssel mit dem Modul-Spezifikator übereinstimmen können, wird der spezifischste Schlüssel verwendet (mit anderen Worten, ein Spezifikator "olive/branch/" würde vor "olive/" übereinstimmen).

- `integrity` {{optional_inline}}

  - : Definiert ein gültiges JSON-Objekt, in dem die _Schlüssel_ Zeichenketten mit gültigen absoluten oder relativen URLs (beginnend mit `/`, `./` oder `../`) sind,
    und die entsprechenden _Werte_ gültige [Integritätsmetadaten](/de/docs/Web/Security/Subresource_Integrity#using_subresource_integrity) sind.

    Wenn die URL eines Skripts, das ein Modul importiert oder vorab lädt, mit einem Schlüssel im `integrity`-Objekt übereinstimmt, werden die entsprechenden Integritätsmetadaten auf die Abrufoptionen des Skripts angewendet,
    es sei denn, sie haben bereits Integritätsmetadaten angehängt.

- `scopes` {{optional_inline}}

  - : Scopes definieren pfadspezifische [Modul-Spezifikator-Karten](#module_specifier_map), die es erlauben, die Wahl der Karte von dem Pfad des Codes abhängig zu machen, der das Modul importiert.

    Das Scopes-Objekt ist ein gültiges JSON-Objekt, bei dem jede Eigenschaft ein `<scope key>` ist, das ein URL-Pfad ist, mit einem entsprechenden Wert, der eine `<module specifier map>` ist.

    Wenn die URL eines Skripts, das ein Modul importiert, mit einem `<scope key>`-Pfad übereinstimmt, wird zuerst der Wert der zugehörigen `<module specifier map>` für passende Spezifikatoren überprüft.
    Wenn mehrere übereinstimmende Scope-Schlüssel vorhanden sind, wird zuerst der Wert der am spezifischsten/verschachteltsten Scope-Wege auf übereinstimmende Modul-Spezifikatoren überprüft.
    Die zurückfallende Modul-Spezifikator-Karte in `imports` wird verwendet, wenn keine übereinstimmenden Modul-Spezifikator-Schlüssel in irgendeiner der übereinstimmenden begrenzten Modul-Spezifikator-Karten enthalten sind.

    Beachten Sie, dass der Scope nicht ändert, wie eine Adresse aufgelöst wird; relative Adressen werden immer zur Basis-URL der Importkarte aufgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript-Module > Module mit Importkarten importieren](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps)
- [Das `type`-Attribut von HTML-`<script>`-Elementen](/de/docs/Web/HTML/Element/script/type)
- [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import)
- [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import)
