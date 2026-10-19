---
title: Befehl `browsingContext.locateNodes`
short-title: locateNodes
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/locateNodes
l10n:
  sourceCommit: eb950353cc947fb1c00397334b13a5f9457d734a
---

Der [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) `browsingContext.locateNodes` des Moduls [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) findet die Nodes in einem [Kontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts), die einem Locator entsprechen. Der Locator legt die Suchkriterien fest.

## Syntax

```json-nolint
/* With required parameters */
{
  "method": "browsingContext.locateNodes",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "locator": {
      "type": "css",
      "value": ".product"
    }
  }
}

/* With required and optional parameters */
{
  "method": "browsingContext.locateNodes",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "locator": {
      "type": "xpath",
      "value": "//a[text()='Learn more']"
    },
    "maxNodeCount": 3,
    "serializationOptions": {
      "maxDomDepth": 2,
      "includeShadowTree": "all"
    },
    "startNodes": [
      {
        "sharedId": "f8f6a1f2-3d8a-4b8e-9f1a-6f6a2f6a2f6a"
      }
    ]
  }
}
```

### Parameter

Das Feld `params` enthält:

- `context`
  - : Ein String mit der ID des zu durchsuchenden Kontexts.
    Kontext-IDs werden von Befehlen wie [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) zurückgegeben.

- `locator`
  - : Ein Objekt, das anhand einer Kombination der Felder `type` und `value` eines von fünf Kriterien zum Finden von Nodes festlegt.
    Die Struktur des Felds `value` hängt vom Feld `type` ab.
    Bei einigen Werten von `type` sind zusätzliche Felder im Objekt `locator` möglich.

    - `type`
      - : Ein String, der die Strategie zum Finden von Nodes festlegt.
        Er kann einen der folgenden Werte haben:
        - `"accessibility"`: Findet Nodes mit einer passenden zugänglichen `role`, einem passenden zugänglichen `name` oder beidem.
        - `"context"`: Findet das Containerelement eines untergeordneten Kontexts, beispielsweise ein `<iframe>` oder `<embed>`.
        - `"css"`: Findet Nodes, die einem CSS-Selektor entsprechen.
        - `"innerText"`: Findet Nodes, deren gerenderter Text ([`innerText`](/de/docs/Web/API/HTMLElement/innerText)) dem angegebenen String entspricht oder ihn enthält.
        - `"xpath"`: Findet Nodes, die einem [XPath](/de/docs/Web/XML/XPath)-Ausdruck entsprechen.

    - `value`
      - : Je nach `type` ein String oder ein Objekt, das das Suchkriterium festlegt:
        - Bei `type: "accessibility"` ist `value` ein Objekt, das mindestens eines der folgenden Felder enthalten muss:
          - `name` {{optional_inline}}
            - : Ein String mit dem passenden {{Glossary("Accessible_name", "zugänglichen Namen")}}, beispielsweise `"Submit"` für einen Button mit der Beschriftung `aria-label="Submit"`.
          - `role` {{optional_inline}}
            - : Ein String mit der passenden [zugänglichen Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles), beispielsweise `"checkbox"` für ein Element mit `role="checkbox"`.
        - Bei `type: "context"` ist `value` ein Objekt mit dem folgenden Feld:
          - `context`
            - : Ein String mit der ID eines untergeordneten Kontexts.
              Dieser muss ein direktes Kind des Kontexts sein, der im Parameter `context` des Befehls angegeben ist.
        - Bei `type: "css"` ist `value` ein String mit dem auszuwertenden [CSS-Selektor](/de/docs/Web/CSS/Reference/Selectors), beispielsweise `"li:nth-child(2)"`.
        - Bei `type: "innerText"` ist `value` ein String mit dem zu findenden Text.
        - Bei `type: "xpath"` ist `value` ein String mit dem auszuwertenden [XPath](/de/docs/Web/XML/XPath)-Ausdruck, beispielsweise `"//img[@alt='logo']"`.

    - `ignoreCase` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob beim Textvergleich die Groß- und Kleinschreibung ignoriert wird.
        Dieses Feld ist nur für `type: "innerText"` verfügbar.
        - `false`: Beim Vergleich wird die Groß- und Kleinschreibung berücksichtigt. Dies ist die Standardeinstellung.
        - `true`: Beim Vergleich wird die Groß- und Kleinschreibung ignoriert.

    - `matchType` {{optional_inline}}
      - : Ein String, der festlegt, ob der Suchtext mit dem gesamten Text des Nodes exakt übereinstimmen muss oder nur mit einem Teil davon.
        Dieses Feld ist nur für `type: "innerText"` verfügbar.
        Er kann einen der folgenden Werte haben:
        - `"full"`: Der Suchtext muss mit dem gesamten Text des Nodes exakt übereinstimmen.
          Dies ist die Standardeinstellung.
        - `"partial"`: Der Suchtext muss nur mit einem Teil des Texts des Nodes übereinstimmen.

    - `maxDepth` {{optional_inline}}
      - : Eine nicht negative Ganzzahl, die die maximale Anzahl der zu durchsuchenden Ebenen von Nachkommen festlegt.
        Auf der tiefsten zulässigen Ebene wird ein Node anhand seines eigenen gerenderten Texts abgeglichen, statt weiter durchsucht zu werden.
        Dieses Feld ist nur für `type: "innerText"` verfügbar.
        Wird es nicht angegeben, ist die Anzahl der durchsuchten Ebenen unbegrenzt.

- `maxNodeCount` {{optional_inline}}
  - : Eine positive Ganzzahl, die die maximale Anzahl zurückgegebener Nodes festlegt.
    Wird sie nicht angegeben, werden alle passenden Nodes zurückgegeben.

- `serializationOptions` {{optional_inline}}
  - : Ein Objekt, das steuert, wie viele Details die Antwort zu jedem passenden Node enthält.
    Es kann die folgenden Felder enthalten:
    - `includeShadowTree` {{optional_inline}}
      - : Ein String, der festlegt, ob Nachkommen von Shadow Roots in der Antwort enthalten sind (siehe das im Abschnitt [Rückgabewert](#rückgabewert) beschriebene Feld `shadowRoot`).
        Er kann einen der folgenden Werte haben:
        - `"none"`: Nachkommen von Shadow Roots werden nicht aufgenommen.
          Dies ist die Standardeinstellung.
        - `"all"`: Nachkommen sowohl offener Shadow Roots (von JavaScript außerhalb der Root zugänglich) als auch geschlossener Shadow Roots (von JavaScript außerhalb der Root nicht zugänglich) werden aufgenommen.
        - `"open"`: Nur Nachkommen offener Shadow Roots werden aufgenommen.
    - `maxDomDepth` {{optional_inline}}
      - : Eine nicht negative Ganzzahl oder `null` für unbegrenzt. Sie legt fest, wie viele Ebenen von Nachkommen-Nodes für jeden passenden Node in der Antwort enthalten sind (siehe das im Abschnitt [Rückgabewert](#rückgabewert) beschriebene Feld `children`).
        Der Standardwert ist `0`; dabei werden keine Nachkommen aufgenommen.
        Diese Begrenzung gilt auch für Nachkommen von Shadow Roots, die über `includeShadowTree` aufgenommen werden.
    - `maxObjectDepth` {{optional_inline}}
      - : Eine nicht negative Ganzzahl oder `null` für unbegrenzt. Sie legt fest, wie viele Ebenen verschachtelter Objekte bei der Serialisierung der JavaScript-Eigenschaften eines Nodes enthalten sind.
        Der Standardwert ist `null`.

- `startNodes` {{optional_inline}}
  - : Ein Array aus einer oder mehreren Node-Referenzen, das die Nodes festlegt, innerhalb derer gesucht werden soll, anstatt das gesamte Dokument zu durchsuchen.
    Jede Referenz ist ein Objekt mit den folgenden Feldern:
    - `handle` {{optional_inline}}
      - : Ein String mit einem Handle für ein JavaScript-Objekt, beispielsweise einem Handle aus einer früheren Antwort von [`script.evaluate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate) oder [`script.callFunction`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction).
    - `sharedId`
      - : Ein String mit der ID eines zuvor zurückgegebenen Nodes, beispielsweise aus einer früheren Antwort von `browsingContext.locateNodes` oder [`script.evaluate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate).

    > [!NOTE]
    > `startNodes` kann nicht verwendet werden, wenn `locator.type` den Wert `"context"` hat.

### Rückgabewert

Das Objekt `result` in der Antwort enthält die folgenden Felder:

- `nodes`
  - : Ein Array aus Node-Objekten, eines für jeden passenden Node.
    Jedes Objekt kann die folgenden Felder haben:
    - `internalId` {{optional_inline}}
      - : Ein String, der dieses Node-Objekt innerhalb der Antwort eindeutig identifiziert.
        Dieses Feld ist nur vorhanden, wenn dasselbe Node-Objekt mehrmals in derselben Antwort vorkommt, beispielsweise sowohl als direktes Suchergebnis als auch als Nachkomme eines anderen passenden Nodes.
    - `sharedId` {{optional_inline}}
      - : Ein String mit einer ID, über die dieser Node in späteren Befehlen referenziert werden kann, beispielsweise in `startNodes` eines nachfolgenden Aufrufs von `browsingContext.locateNodes`.
        Diese ID ist innerhalb der gesamten Sitzung eindeutig und bleibt für die Dauer der Sitzung gültig, solange der Node noch existiert.
    - `type`
      - : Ein String, der immer den Wert `"node"` hat.
    - `value` {{optional_inline}}
      - : Ein Objekt, das Eigenschaften des passenden Nodes beschreibt.
        Dieses Objekt kann die folgenden Felder enthalten:
        - `attributes` {{optional_inline}}
          - : Ein Objekt, das jedem [Attribut](/de/docs/Web/API/Element/attributes) seinen String-Wert zuordnet.
            Dieses Feld ist nur bei Element-Nodes vorhanden.
        - `childNodeCount`
          - : Eine nicht negative Ganzzahl, die die Anzahl der direkten [Kind-Nodes](/de/docs/Web/API/Node/childNodes) des zurückgegebenen Nodes angibt.
            Dies ist die tatsächliche Anzahl, auch wenn das Feld `children` fehlt oder weniger Kind-Nodes enthält.
        - `children` {{optional_inline}}
          - : Ein Array aus Nachkommen-Nodes, die jeweils dieselben Felder wie dieses Objekt enthalten.
            Nachkommen werden bis zu der Ebene aufgenommen, die `maxDomDepth` in `serializationOptions` festlegt.
        - `localName` {{optional_inline}}
          - : Ein String mit dem [lokalen Namen](/de/docs/Web/API/Element/localName) des Nodes.
            Bei einem HTML-Element ist dies der Tag-Name in Kleinbuchstaben.
            Dieses Feld ist nur bei Element-Nodes vorhanden.
        - `mode` {{optional_inline}}
          - : Ein String, der den [Modus der Shadow Root](/de/docs/Web/API/ShadowRoot/mode) angibt, die mit dem Node verbunden ist.
            Dieses Feld ist nur bei Shadow-Root-Nodes vorhanden.
            Er kann einen der folgenden Werte haben:
            - `"closed"`: Gibt an, dass auf Nodes innerhalb der Shadow Root nicht von JavaScript außerhalb der Root zugegriffen werden kann.
            - `"open"`: Gibt an, dass Nodes innerhalb der Shadow Root von JavaScript außerhalb der Root zugänglich sind.
        - `namespaceURI` {{optional_inline}}
          - : Ein String mit der [Namespace-URI](/de/docs/Web/API/Element/namespaceURI) des Nodes.
            Dieses Feld ist nur bei Element-Nodes vorhanden.
            Bei HTML-Elementen ist der Wert immer der standardmäßige HTML-Namespace `"http://www.w3.org/1999/xhtml"`.
        - `nodeType`
          - : Eine Ganzzahl, die den [Typ des Nodes](/de/docs/Web/API/Node/nodeType) angibt, beispielsweise `1` für ein Element oder `3` für einen Text-Node.
        - `nodeValue` {{optional_inline}}
          - : Ein String mit dem [Wert des Nodes](/de/docs/Web/API/Node/nodeValue), beispielsweise dem Text eines Text-Nodes oder den Daten eines Kommentar-Nodes.
            Bei Element- und Dokument-Nodes fehlt dieses Feld.
        - `shadowRoot` {{optional_inline}}
          - : Ein Objekt, das die mit dem Node verbundene [Shadow Root](/de/docs/Web/API/Element/shadowRoot) beschreibt.
            Das Objekt hat dieselben Felder wie die Node-Objekte in `nodes`, darunter `sharedId`, `type` und `value`.
            Der Wert dieses Felds ist `null`, wenn der zurückgegebene Node keine Shadow Root hat.

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Ein erforderlicher Parameter fehlt oder hat einen ungültigen Typ.
    - `startNodes` wird angegeben, obwohl `locator.type` den Wert `"context"` hat.
    - Der durch `locator.value.context` identifizierte untergeordnete Kontext ist kein direktes Kind des im Parameter `context` angegebenen Kontexts.

- `invalid selector`
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Der CSS-Selektor oder XPath-Ausdruck in `locator.value` kann nicht geparst werden.
    - `locator.type` hat den Wert `"innerText"` und `value` ist ein leerer String.
    - `locator.type` hat den Wert `"accessibility"` und weder `role` noch `name` ist angegeben.

- `no such frame`
  - : Es wurde kein Kontext mit der angegebenen `context`-ID gefunden.

- `no such handle`
  - : Ein in `startNodes` referenzierter Node kann nicht aufgelöst werden, beispielsweise weil er durch die Garbage Collection entfernt wurde.

- `unknown error`
  - : Die Auswertung des XPath-Ausdrucks in `locator.value` ist aus einem anderen Grund als einem Parsingfehler fehlgeschlagen.

## Beschreibung

Der Befehl `browsingContext.locateNodes` ist die wichtigste Möglichkeit, Nodes im DOM eines Dokuments zu finden. Er ähnelt den `Find Element(s)`-Befehlen in [WebDriver classic](/de/docs/Web/WebDriver/Reference/Classic/Commands).
Er wandelt einen Locator, beispielsweise einen CSS-Selektor oder XPath-Ausdruck, in Node-Referenzen um (mit `sharedId` und optional `handle`).
Sie können diese Referenzen in späteren Befehlen verwenden, beispielsweise in `startNodes` eines nachfolgenden Aufrufs von `browsingContext.locateNodes` oder als Ziel für [`script.callFunction`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction).

Alternativ zu diesem Befehl können Sie [`script.evaluate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate) verwenden. Dafür müssen Sie allerdings den entsprechenden JavaScript-Code schreiben.

### Umfang der zurückgegebenen Details steuern

Beim Finden von Nodes können Sie drei Begrenzungen festlegen, um den Umfang der in der Antwort zurückgegebenen Daten zu steuern:

- `maxNodeCount` ist ein Parameter auf oberster Ebene, der die Gesamtzahl der zurückgegebenen passenden Nodes begrenzt.
  Er steuert den Umfang des Suchergebnisses.
- Die beiden anderen Begrenzungen, `maxDomDepth` und `maxObjectDepth`, sind Felder des Parameters `serializationOptions`. Sie steuern die Tiefe der für jeden passenden Node zurückgegebenen Daten (wie bei [`script.evaluate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate#controlling_the_returned_detail)):
  - `maxDomDepth` steuert, wie viele Ebenen von DOM-Nachkommen im Feld `children` jedes passenden Nodes enthalten sind.
  - `maxObjectDepth` steuert, wie viele Ebenen verschachtelter JavaScript-Objekteigenschaften bei der Darstellung von Werten, die keine Nodes sind, in der Antwort enthalten sind.

## Beispiele

### Nodes mit einem CSS-Selektor finden

Angenommen, Sie verfügen über eine [WebDriver-BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).

Angenommen, Ihr Dokument enthält genau ein `<button>`-Element mit der Klasse `submit`.
Senden Sie mit der Kontext-ID dieses Dokuments, die Sie über [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) erhalten haben, die folgende Nachricht, um den Button anhand seiner Klasse zu finden:

```json
{
  "id": 1,
  "method": "browsingContext.locateNodes",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "locator": {
      "type": "css",
      "value": "button.submit"
    }
  }
}
```

Der Browser antwortet mit dem passenden Node wie folgt:

```json
{
  "id": 1,
  "type": "success",
  "result": {
    "nodes": [
      {
        "type": "node",
        "sharedId": "f8f6a1f2-3d8a-4b8e-9f1a-6f6a2f6a2f6a",
        "value": {
          "nodeType": 1,
          "localName": "button",
          "namespaceURI": "http://www.w3.org/1999/xhtml",
          "childNodeCount": 1,
          "attributes": {
            "class": "submit"
          },
          "shadowRoot": null
        }
      }
    ]
  }
}
```

Beachten Sie, dass das Array `nodes` in dieser Antwort ein einzelnes Objekt enthält, das einem passenden Node entspricht.
Dessen `localName` ist `"button"` und entspricht damit dem Tag des Elements.
Der Button hat einen Kind-Node, seinen Text „Submit“. Deshalb ist `childNodeCount` gleich `1`.
`shadowRoot` ist `null`, weil der Button keine Shadow Root hat.

### Anzahl der zurückgegebenen passenden Nodes begrenzen

Angenommen, Ihr Dokument enthält drei `<li>`-Elemente mit der Klasse `item`.

Senden Sie über dieselbe Verbindung und Sitzung wie im ersten Beispiel die folgende Nachricht, um zwei davon mithilfe eines CSS-Selektors und `maxNodeCount` zu finden:

```json
{
  "id": 2,
  "method": "browsingContext.locateNodes",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "locator": {
      "type": "css",
      "value": "li.item"
    },
    "maxNodeCount": 2
  }
}
```

Der Browser antwortet mit zwei passenden Nodes wie folgt:

```json
{
  "id": 2,
  "type": "success",
  "result": {
    "nodes": [
      {
        "type": "node",
        "sharedId": "a1b2c3d4-1111-4b8e-9f1a-6f6a2f6a2f6a",
        "value": {
          "nodeType": 1,
          "localName": "li",
          "namespaceURI": "http://www.w3.org/1999/xhtml",
          "childNodeCount": 1,
          "attributes": {
            "class": "item"
          },
          "shadowRoot": null
        }
      },
      {
        "type": "node",
        "sharedId": "a1b2c3d4-2222-4b8e-9f1a-6f6a2f6a2f6a",
        "value": {
          "nodeType": 1,
          "localName": "li",
          "namespaceURI": "http://www.w3.org/1999/xhtml",
          "childNodeCount": 1,
          "attributes": {
            "class": "item"
          },
          "shadowRoot": null
        }
      }
    ]
  }
}
```

### Einen Node anhand seiner zugänglichen Rolle und seines zugänglichen Namens finden

Angenommen, Ihr Dokument enthält das folgende Markup, das dem Element die zugängliche Rolle `"checkbox"` und den zugänglichen Namen `"Checkbox name"` zuweist:

```html
<span
  role="checkbox"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="checkbox-label"></span>
<span id="checkbox-label">Checkbox name</span>
```

Senden Sie über dieselbe Verbindung und Sitzung wie im ersten Beispiel die folgende Nachricht, um die Checkbox anhand ihrer Zugänglichkeitsmerkmale zu finden:

```json
{
  "id": 3,
  "method": "browsingContext.locateNodes",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "locator": {
      "type": "accessibility",
      "value": {
        "role": "checkbox",
        "name": "Checkbox name"
      }
    }
  }
}
```

Der Browser antwortet mit dem passenden Node wie folgt:

```json
{
  "id": 3,
  "type": "success",
  "result": {
    "nodes": [
      {
        "type": "node",
        "sharedId": "f8f6a1f2-4444-4b8e-9f1a-6f6a2f6a2f6a",
        "value": {
          "nodeType": 1,
          "localName": "span",
          "namespaceURI": "http://www.w3.org/1999/xhtml",
          "childNodeCount": 0,
          "attributes": {
            "role": "checkbox",
            "aria-checked": "false",
            "tabindex": "0",
            "aria-labelledby": "checkbox-label"
          },
          "shadowRoot": null
        }
      }
    ]
  }
}
```

Sie können diese Checkbox auch allein anhand ihrer zugänglichen Rolle oder allein anhand ihres zugänglichen Namens finden, da bei diesem Locator eines der beiden Kriterien ausreicht.

### Das Containerelement eines untergeordneten Kontexts finden

Angenommen, Ihr Dokument enthält ein `<iframe>`-Element mit einem untergeordneten Kontext.

Ermitteln Sie über dieselbe Verbindung und Sitzung wie im ersten Beispiel die ID des untergeordneten Kontexts mit [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).
Senden Sie die folgende Nachricht, um das iframe mit einem Kontext-Locator zu finden:

```json
{
  "id": 4,
  "method": "browsingContext.locateNodes",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "locator": {
      "type": "context",
      "value": {
        "context": "6442450945"
      }
    }
  }
}
```

Der Browser antwortet mit dem passenden Node wie folgt:

```json
{
  "id": 4,
  "type": "success",
  "result": {
    "nodes": [
      {
        "type": "node",
        "sharedId": "f8f6a1f2-5555-4b8e-9f1a-6f6a2f6a2f6a",
        "value": {
          "nodeType": 1,
          "localName": "iframe",
          "namespaceURI": "http://www.w3.org/1999/xhtml",
          "childNodeCount": 0,
          "attributes": {
            "src": "https://example.com/frame.html"
          },
          "shadowRoot": null
        }
      }
    ]
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Befehl [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree)
- Befehl [`browsingContext.navigate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate)
- Befehl [`browsingContext.reload`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload)
- Befehl [`script.callFunction`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction)
