---
title: <script type="importmap">
slug: Web/HTML/Element/script/type/importmap
l10n:
  sourceCommit: fbcfa61e1612a91156fa4e6bb7b8ca2b6991ae1c
---

{{HTMLSidebar}}

Der **`importmap`**-Wert des [`type`]-Attributs (/de/docs/Web/HTML/Element/script/type) des [`<script>` Elements](/de/docs/Web/HTML/Element/script) gibt an, dass der Inhalt des Elements eine Importmap enthält.

Eine Importmap ist ein JSON-Objekt, das es Entwicklern ermöglicht zu steuern, wie der Browser Modulspezifizierer auflöst, wenn [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) importiert werden.
Sie bietet eine Zuordnung zwischen dem Text, der als Modulspezifizierer in einer [`import` Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) oder dem [`import()` Operator](/de/docs/Web/JavaScript/Reference/Operators/import) verwendet wird, und dem entsprechenden Wert, der den Text bei der Auflösung des Spezifizierers ersetzt.
Das JSON-Objekt muss dem [JSON-Darstellungsformat für Importmaps](#json-darstellung_der_importmap) entsprechen.

Eine Importmap wird verwendet, um Modulspezifizierer in statischen und dynamischen Imports aufzulösen, und muss daher deklariert und verarbeitet werden, bevor irgendein `<script>`-Element Module importiert, die Spezifizierer verwenden, die in der Map deklariert sind.
Beachten Sie, dass die Importmap nur auf Modulspezifizierer in der [`import` Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) oder dem [`import()` Operator](/de/docs/Web/JavaScript/Reference/Operators/import) für Module angewendet wird, die in Dokumente geladen werden; sie gilt nicht für den im `src`-Attribut eines `<script>`-Elements angegebenen Pfad oder für Module, die in Worker oder Worklets geladen werden.

Weitere Informationen finden Sie im Abschnitt [Import von Modulen mit Importmaps](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) im JavaScript-Modul-Leitfaden.

## Syntax

```html
<script type="importmap">
  // JSON object defining import
</script>
```

Die Attribute `src`, `async`, `nomodule`, `defer`, `crossorigin`, `integrity` und `referrerpolicy` dürfen nicht angegeben werden.

Nur die erste Importmap im Dokument mit einer Inline-Definition wird verarbeitet; alle zusätzlichen Importmaps und externen Importmaps werden ignoriert.

### Ausnahmen

- `TypeError`
  - : Die Definition der Importmap ist kein JSON-Objekt, der `importmap`-Schlüssel ist definiert, aber sein Wert ist kein JSON-Objekt, oder der `scopes`-Schlüssel ist definiert, aber sein Wert ist kein JSON-Objekt.

Browser generieren Konsolenwarnungen für andere Fälle, in denen das Importmap-JSON nicht dem [Importmap](#json-darstellung_der_importmap)-Schema entspricht.

Ein [`error`-Ereignis](/de/docs/Web/API/HTMLElement/error_event) wird bei Skriptelementen mit `type="importmap"` ausgelöst, die nicht verarbeitet werden.
Dies kann beispielsweise passieren, wenn der Modul-Ladevorgang bereits begonnen hat, wenn eine Importmap verarbeitet wird, oder wenn mehrere Importmaps auf der Seite definiert sind.

## Beschreibung

Beim Importieren eines [JavaScript-Moduls](/de/docs/Web/JavaScript/Guide/Modules) haben sowohl die [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) als auch der [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import) einen "Modulspezifizierer", der das zu importierende Modul angibt.
Ein Browser muss in der Lage sein, diesen Spezifizierer zu einer absoluten URL aufzulösen, um das Modul zu importieren.

Zum Beispiel importieren die folgenden Anweisungen Elemente vom Modulspezifizierer `"./modules/shapes/square.js"`, das ist ein Pfad relativ zur Basis-URL des Dokuments, und vom Modulspezifizierer `"https://example.com/shapes/circle.js"`, das ist eine absolute URL.

```js
import { name as squareName, draw } from "./modules/shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

Importmaps ermöglichen es Entwicklern, (fast) jeden gewünschten Text im Modulspezifizierer anzugeben; die Map bietet einen entsprechenden Wert, der den Text ersetzt, wenn der Modulspezifizierer aufgelöst wird.

### Bare Module

Die folgende Importmap definiert einen `imports`-Schlüssel, der eine "Modulspezifizierer-Map" mit den Eigenschaften `square` und `circle` hat.

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

Mit dieser Importmap können wir dieselben Module wie oben importieren, jedoch unter Verwendung von "Bare Module" in unseren Modulspezifizierern:

```js
import { name as squareName, draw } from "square";
import { name as circleName } from "circle";
```

### Pfadpräfixe zuordnen

Ein Modulspezifizierer-Map-Schlüssel kann auch verwendet werden, um ein Pfadpräfix in einem Modulspezifizierer neu zuzuordnen.
Beachten Sie, dass in diesem Fall die Eigenschaft und der zugeordnete Pfad beide einen abschließenden Schrägstrich (`/`) haben müssen.

```html
<script type="importmap">
  {
    "imports": {
      "shapes/": "./module/shapes/",
      "othershapes/": "https://example.com/modules/shapes/"
    }
  }
</script>
```

Wir könnten dann ein Kreismodul wie gezeigt importieren.

```js
import { name as circleName } from "shapes/circle.js";
```

### Pfade im Modulspezifizierer-Map-Schlüssel

Modulspezifizierer-Schlüssel müssen nicht ein einzelnes Wort-Zugeständnis ("Bare Names") sein.
Sie können auch Pfadtrennzeichen enthalten oder mit diesen enden, oder absolute URLs sein, oder relative URL-Pfade sein, die mit `/`, `./` oder `../` beginnen.

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

Wenn es mehrere Modulspezifizierer-Schlüssel in einer Modulspezifizierer-Map gibt, die übereinstimmen könnten, wird der spezifischste Schlüssel ausgewählt (d. h. der mit dem längeren Pfad/Wert).

Ein Modulspezifizierer `./foo/../js/app.js` würde vor dem Abgleich zu `./js/app.js` aufgelöst werden.
Das bedeutet, dass ein Modulspezifizierer-Schlüssel `./js/app.js` mit dem Modulspezifizierer übereinstimmen würde, obwohl sie nicht exakt gleich sind.

### Bereichsspezifische Modulspezifizierer-Maps

Sie können den `scopes`-Schlüssel verwenden, um Zuordnungen bereitzustellen, die nur verwendet werden, wenn das Script, das das Modul importiert, einen bestimmten URL-Pfad enthält.
Wenn die URL des ladenden Skripts mit dem angegebenen Pfad übereinstimmt, wird die mit dem Bereich verknüpfte Zuordnung verwendet.
Dies ermöglicht die Verwendung unterschiedlicher Versionen des Moduls, je nachdem, welcher Code den Import durchführt.

Zum Beispiel wird die folgende Zuordnung nur die Bereichs-Map verwenden, wenn das ladende Modul eine URL hat, die den Pfad: "/modules/customshapes/" enthält.

```html
<script type="importmap">
  {
    "imports": {
      "square": "./module/shapes/square.js"
    },
    "scopes": {
      "/modules/customshapes/": {
        "square": "https://example.com/modules/shapes/square.js"
      }
    }
  }
</script>
```

Wenn mehrere Bereiche mit der Referrer-URL übereinstimmen, wird der spezifischste Bereichspfad verwendet (der Bereichsschlüsselname mit dem längsten Namen).
Der Browser greift auf den nächst spezifischen Bereichspfad zurück, wenn kein übereinstimmender Spezifizierer vorhanden ist, und so weiter, bis schließlich auf die Modulspezifizierer-Map im `imports`-Schlüssel zurückgegriffen wird.

### Integritäts-Metadaten-Map

Sie können den `integrity`-Schlüssel verwenden, um eine Zuordnung für Modul[Integritätsmetadaten](/de/docs/Web/Security/Subresource_Integrity#using_subresource_integrity) bereitzustellen.
Dies ermöglicht es, die Integrität von dynamisch oder statisch importierten Modulen sicherzustellen.
`integrity` ermöglicht es auch, einen Fallback für Top-Level- oder vorab geladene Module bereitzustellen, falls sie noch kein `integrity`-Attribut enthalten.

Die Map-Schlüssel repräsentieren Modul-URLs, die absolut oder relativ sein können (beginnend mit `/`, `./` oder `../`).
Die Map-Werte repräsentieren Integritätsmetadaten, die identisch mit denen sind, die in [`integrity`](/de/docs/Web/HTML/Element/script#integrity)-Attributwerten verwendet werden.

Zum Beispiel definiert die folgende Zuordnung Integritätsmetadaten für das `square.js`-Modul (direkt) und seinen "Bare Specifier" (transitiv, über den `imports`-Schlüssel).

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

## JSON-Darstellung der Importmap

Das Folgende ist eine "formale" Definition der JSON-Darstellung der Importmap.

Die Importmap muss ein gültiges JSON-Objekt sein, das höchstens zwei optionale Schlüssel definieren kann: `imports` und `scopes`. Der Wert jedes Schlüssels muss ein Objekt sein, das leer sein kann.

- `imports` {{optional_inline}}

  - : Der Wert ist eine [Modulspezifizierer-Map](#module_specifier_map), die die Zuordnungen zwischen dem Modulspezifizierer-Text, der in einer `import`-Anweisung oder einem `import()`-Operator erscheinen könnte, und dem Text, der ihn bei der Auflösung des Spezifizierers ersetzt, bereitstellt.

    Dies ist die Fallback-Map, die nach übereinstimmenden Modulspezifizierern durchsucht wird, wenn keine `scopes`-Pfad-URLs übereinstimmen oder wenn Modulspezifizierer-Maps in übereinstimmenden `scopes`-Pfade keinen Schlüssel enthalten, der mit dem Modulspezifizierer übereinstimmt.

    - `<module specifier map>`

      - : Eine "Modulspezifizierer-Map" ist ein gültiges JSON-Objekt, bei dem die _Schlüssel_ Text sind, der im Modulspezifizierer beim Import eines Moduls vorhanden sein kann, und die entsprechenden _Werte_ die URLs oder Pfade sind, die diesen Text ersetzen, wenn der Modulspezifizierer in eine Adresse aufgelöst wird.

        Das JSON-Objekt der Modulspezifizierer-Map hat die folgenden Anforderungen:

        - Keiner der Schlüssel darf leer sein.
        - Alle Werte müssen Zeichenfolgen sein, die entweder eine gültige absolute URL oder eine gültige URL-Zeichenfolge definieren, die mit `/`, `./` oder `../` beginnt.
        - Wenn ein Schlüssel mit `/` endet, muss auch der entsprechende Wert mit `/` enden.
          Ein Schlüssel mit einem abschließenden `/` kann als Präfix beim Zuordnen (oder Neuzuordnen) von Modul-Adressen verwendet werden.
        - Die Reihenfolge der Objektvariablen ist irrelevant: Wenn mehrere Schlüssel mit dem Modulspezifizierer übereinstimmen können, wird der spezifischste Schlüssel verwendet (mit anderen Worten, ein Spezifizierer "olive/branch/" würde vor "olive/" übereinstimmen).

- `integrity` {{optional_inline}}

  - : Definiert ein gültiges JSON-Objekt, bei dem die _Schlüssel_ Zeichenfolgen sind, die gültige absolute oder relative URLs (beginnend mit `/`, `./` oder `../`) enthalten,
    und die entsprechenden _Werte_ gültige [Integritätsmetadaten](/de/docs/Web/Security/Subresource_Integrity#using_subresource_integrity) sind.

    Wenn die URL eines Skripts, das ein Modul importiert oder vorlädt, mit einem Schlüssel im `integrity`-Objekt übereinstimmt, werden die entsprechenden Integritätsmetadaten auf die Fetch-Optionen des Skripts angewendet,
    es sei denn, sie haben bereits Integritätsmetadaten angehängt.

- `scopes` {{optional_inline}}

  - : Bereiche definieren pfadspezifische [Modulspezifizierer-Maps](#module_specifier_map) und ermöglichen die Wahl der Map, abhängig vom Pfad des Codes, der das Modul importiert.

    Das Scopes-Objekt ist ein gültiges JSON-Objekt, wobei jede Eigenschaft ein `<scope key>` ist, ein URL-Pfad, mit einem entsprechenden Wert, der eine `<module specifier map>` ist.

    Wenn die URL eines Skripts, das ein Modul importiert, mit einem `<scope key>`-Pfad übereinstimmt, dann wird die `<module specifier map>`-Wert, der mit dem Schlüssel verbunden ist, zuerst auf übereinstimmende Spezifizierer überprüft.
    Wenn es mehrere übereinstimmende Bereichsschlüssel gibt, werden die Werte, die den spezifischsten/verschachtelten Bereichspfaden entsprechen, zuerst auf übereinstimmende Modulspezifizierer überprüft.
    Die Fallback-Modulspezifizierer-Map in `imports` wird verwendet, wenn keine passenden Modulspezifiziererschlüssel in irgendeiner der übereinstimmenden bereichsspezifischen Modulspezifizierer-Maps vorhanden sind.

    Beachten Sie, dass der Bereich nicht ändert, wie eine Adresse aufgelöst wird; relative Adressen werden immer zur Basis-URL der Importmap aufgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript-Module > Import von Modulen mit Importmaps](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps)
- [Das `type`-Attribut von HTML `<script>`-Elementen](/de/docs/Web/HTML/Element/script#type)
- [`import`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import)
- [`import()`-Operator](/de/docs/Web/JavaScript/Reference/Operators/import)
