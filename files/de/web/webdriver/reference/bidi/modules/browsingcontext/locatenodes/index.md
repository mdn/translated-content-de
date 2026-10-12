---
title: Befehl `browsingContext.locateNodes`
short-title: locateNodes
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/locateNodes
l10n:
  sourceCommit: 8a86bbb9816f718762fa855d78b92e5525c0d520
---

Der [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) `browsingContext.locateNodes` des Moduls [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) findet in einem [Kontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) die Knoten, die einem Locator entsprechen. Der Locator legt die Suchkriterien fest.

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
  - : Eine Zeichenfolge mit der ID des zu durchsuchenden Kontexts.
    Kontext-IDs werden von Befehlen wie [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) zurückgegeben.

- `locator`
  - : Ein Objekt, das anhand einer Kombination der Felder `type` und `value` eines von fünf Kriterien zum Auffinden von Knoten festlegt.
    Die Struktur des Feldes `value` hängt vom Feld `type` ab.
    Bei einigen `type`-Werten sind zusätzliche Felder im Objekt `locator` zulässig.

    - `type`
      - : Eine Zeichenfolge, die die Strategie zum Auffinden von Knoten festlegt.
        Sie kann einen der folgenden Werte annehmen:
        - `"accessibility"`: Findet Knoten mit einer passenden zugänglichen `role`, einem passenden zugänglichen `name` oder beidem.
        - `"context"`: Findet das Containerelement (etwa ein `<iframe>` oder `<embed>`) eines untergeordneten Kontexts.
        - `"css"`: Findet Knoten, die einem CSS-Selektor entsprechen.
        - `"innerText"`: Findet Knoten, deren gerenderter Text ([`innerText`](/de/docs/Web/API/HTMLElement/innerText)) der angegebenen Zeichenfolge entspricht oder sie enthält.
        - `"xpath"`: Findet Knoten, die einem [XPath](/de/docs/Web/XML/XPath)-Ausdruck entsprechen.

    - `value`
      - : Je nach `type` eine Zeichenfolge oder ein Objekt, das das Suchkriterium angibt:
        - Bei `type: "accessibility"` ist `value` ein Objekt, das mindestens eines der folgenden Felder enthalten muss:
          - `name` {{optional_inline}}
            - : Eine Zeichenfolge mit dem {{Glossary("Accessible_name", "zugänglichen Namen")}}, der übereinstimmen soll, beispielsweise `"Submit"` für einen Button mit `aria-label="Submit"`.
          - `role` {{optional_inline}}
            - : Eine Zeichenfolge mit der [zugänglichen Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles), die übereinstimmen soll, beispielsweise `"checkbox"` für ein Element mit `role="checkbox"`.
        - Bei `type: "context"` ist `value` ein Objekt mit dem folgenden Feld:
          - `context`
            - : Eine Zeichenfolge mit der ID eines untergeordneten Kontexts.
              Dieser muss ein direktes Kind des Kontexts sein, der im Parameter `context` des Befehls angegeben ist.
        - Bei `type: "css"` ist `value` eine Zeichenfolge mit dem auszuwertenden [CSS-Selektor](/de/docs/Web/CSS/Reference/Selectors), beispielsweise `"li:nth-child(2)"`.
        - Bei `type: "innerText"` ist `value` eine Zeichenfolge mit dem zu suchenden Text.
        - Bei `type: "xpath"` ist `value` eine Zeichenfolge mit dem auszuwertenden [XPath](/de/docs/Web/XML/XPath)-Ausdruck, beispielsweise `"//img[@alt='logo']"`.

    - `ignoreCase` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob beim Textvergleich die Groß- und Kleinschreibung ignoriert wird.
        Dieses Feld ist nur für `type: "innerText"` verfügbar.
        - `false`: Beim Vergleich wird zwischen Groß- und Kleinschreibung unterschieden. Dies ist die Standardeinstellung.
        - `true`: Beim Vergleich wird die Groß- und Kleinschreibung ignoriert.

    - `matchType` {{optional_inline}}
      - : Eine Zeichenfolge, die angibt, ob der Suchtext exakt mit dem gesamten Text des Knotens oder nur mit einem Teil davon übereinstimmen muss.
        Dieses Feld ist nur für `type: "innerText"` verfügbar.
        Sie kann einen der folgenden Werte annehmen:
        - `"full"`: Der Suchtext muss exakt mit dem gesamten Text des Knotens übereinstimmen.
          Dies ist die Standardeinstellung.
        - `"partial"`: Der Suchtext muss nur mit einem Teil des Knotentextes übereinstimmen.

    - `maxDepth` {{optional_inline}}
      - : Eine nicht negative Ganzzahl, die die maximale Anzahl der zu durchsuchenden Ebenen von Nachkommen angibt.
        Auf der tiefsten zulässigen Ebene wird ein Knoten anhand seines eigenen gerenderten Textes abgeglichen, statt seine Nachkommen weiter zu durchsuchen.
        Dieses Feld ist nur für `type: "innerText"` verfügbar.
        Wird es nicht angegeben, ist die Anzahl der durchsuchten Ebenen unbegrenzt.

- `maxNodeCount` {{optional_inline}}
  - : Eine positive Ganzzahl, die die maximale Anzahl zurückgegebener Knoten angibt.
    Wird sie nicht angegeben, werden alle passenden Knoten zurückgegeben.

- `serializationOptions` {{optional_inline}}
  - : Ein Objekt, das steuert, wie viele Details für jeden passenden Knoten in der Antwort enthalten sind.
    Es kann die folgenden Felder enthalten:
    - `includeShadowTree` {{optional_inline}}
      - : Eine Zeichenfolge, die angibt, ob Nachkommen von Shadow-Roots in der Antwort enthalten sind (siehe das Feld `shadowRoot` im Abschnitt [Rückgabewert](#rückgabewert)).
        Sie kann einen der folgenden Werte annehmen:
        - `"none"`: Nachkommen von Shadow-Roots sind nicht enthalten.
          Dies ist die Standardeinstellung.
        - `"all"`: Nachkommen sowohl offener Shadow-Roots (von JavaScript außerhalb des Roots zugänglich) als auch geschlossener Shadow-Roots (von JavaScript außerhalb des Roots nicht zugänglich) sind enthalten.
        - `"open"`: Nur Nachkommen offener Shadow-Roots sind enthalten.
    - `maxDomDepth` {{optional_inline}}
      - : Eine nicht negative Ganzzahl oder `null` für unbegrenzte Tiefe, die angibt, wie viele Ebenen von Nachkommenknoten für jeden passenden Knoten in der Antwort enthalten sind (siehe das Feld `children` im Abschnitt [Rückgabewert](#rückgabewert)).
        Der Standardwert ist `0`; damit werden Nachkommen ausgeschlossen.
        Diese Begrenzung gilt auch für Nachkommen von Shadow-Roots, die durch `includeShadowTree` einbezogen werden.
    - `maxObjectDepth` {{optional_inline}}
      - : Eine nicht negative Ganzzahl oder `null` für unbegrenzte Tiefe, die angibt, wie viele Ebenen verschachtelter Objekte bei der Serialisierung der JavaScript-Eigenschaften eines Knotens enthalten sind.
        Der Standardwert ist `null`.

- `startNodes` {{optional_inline}}
  - : Ein Array aus einer oder mehreren Knotenreferenzen, das die Knoten festlegt, innerhalb derer gesucht werden soll, statt das gesamte Dokument zu durchsuchen.
    Jede Referenz ist ein Objekt mit den folgenden Feldern:
    - `handle` {{optional_inline}}
      - : Eine Zeichenfolge mit einem Handle auf ein JavaScript-Objekt, beispielsweise eines, das aus einer früheren Antwort von [`script.evaluate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate) oder [`script.callFunction`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction) beibehalten wurde.
    - `sharedId`
      - : Eine Zeichenfolge mit der ID eines zuvor zurückgegebenen Knotens, beispielsweise aus einer früheren Antwort von `browsingContext.locateNodes` oder [`script.evaluate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate).

    > [!NOTE]
    > `startNodes` kann nicht verwendet werden, wenn `locator.type` den Wert `"context"` hat.

### Rückgabewert

Das Objekt `result` in der Antwort enthält die folgenden Felder:

- `nodes`
  - : Ein Array von Knotenobjekten, eines für jeden passenden Knoten.
    Jedes Objekt kann die folgenden Felder enthalten:
    - `internalId` {{optional_inline}}
      - : Eine Zeichenfolge, die dieses Knotenobjekt innerhalb der Antwort eindeutig identifiziert.
        Dieses Feld ist nur vorhanden, wenn dasselbe Knotenobjekt in derselben Antwort mehrmals vorkommt, etwa wenn ein Knoten sowohl als Treffer auf oberster Ebene als auch als Nachkomme eines anderen passenden Knotens erscheint.
    - `sharedId` {{optional_inline}}
      - : Eine Zeichenfolge mit einer ID, über die dieser Knoten in späteren Befehlen referenziert werden kann, beispielsweise in `startNodes` bei einem nachfolgenden Aufruf von `browsingContext.locateNodes`.
        Diese ID ist in der gesamten Sitzung eindeutig und bleibt für deren Dauer gültig, solange der Knoten noch existiert.
    - `type`
      - : Eine Zeichenfolge, die immer den Wert `"node"` hat.
    - `value` {{optional_inline}}
      - : Ein Objekt, das Eigenschaften des passenden Knotens beschreibt.
        Dieses Objekt kann die folgenden Felder enthalten:
        - `attributes` {{optional_inline}}
          - : Ein Objekt, das jedem [Attribut](/de/docs/Web/API/Element/attributes) seinen Zeichenfolgenwert zuordnet.
            Dieses Feld ist nur bei Elementknoten vorhanden.
        - `childNodeCount`
          - : Eine nicht negative Ganzzahl, die die Anzahl der direkten [Kindknoten](/de/docs/Web/API/Node/childNodes) des zurückgegebenen Knotens angibt.
            Dies ist die tatsächliche Anzahl, auch wenn das Feld `children` fehlt oder weniger Kindknoten enthält.
        - `children` {{optional_inline}}
          - : Ein Array von Nachkommenknoten, die jeweils dieselben Felder wie dieses Objekt enthalten.
            Nachkommen sind bis zu der durch `maxDomDepth` in `serializationOptions` festgelegten Ebene enthalten.
        - `localName` {{optional_inline}}
          - : Eine Zeichenfolge mit dem [lokalen Namen](/de/docs/Web/API/Element/localName) des Knotens.
            Bei einem HTML-Element ist dies der Tag-Name in Kleinbuchstaben.
            Dieses Feld ist nur bei Elementknoten vorhanden.
        - `mode` {{optional_inline}}
          - : Eine Zeichenfolge, die den [Modus des Shadow-Roots](/de/docs/Web/API/ShadowRoot/mode) angibt, der mit dem Knoten verbunden ist.
            Dieses Feld ist nur bei Shadow-Root-Knoten vorhanden.
            Sie kann einen der folgenden Werte annehmen:
            - `"closed"`: Gibt an, dass JavaScript außerhalb des Roots nicht auf die Knoten innerhalb des Shadow-Roots zugreifen kann.
            - `"open"`: Gibt an, dass JavaScript außerhalb des Roots auf die Knoten innerhalb des Shadow-Roots zugreifen kann.
        - `namespaceURI` {{optional_inline}}
          - : Eine Zeichenfolge mit der [Namespace-URI](/de/docs/Web/API/Element/namespaceURI) des Knotens.
            Dieses Feld ist nur bei Elementknoten vorhanden.
            Bei HTML-Elementen ist der Wert immer der standardmäßige HTML-Namespace `"http://www.w3.org/1999/xhtml"`.
        - `nodeType`
          - : Eine Ganzzahl, die den [Typ des Knotens](/de/docs/Web/API/Node/nodeType) angibt, beispielsweise `1` für ein Element oder `3` für einen Textknoten.
        - `nodeValue` {{optional_inline}}
          - : Eine Zeichenfolge mit dem [Wert des Knotens](/de/docs/Web/API/Node/nodeValue), beispielsweise dem Text eines Textknotens oder den Daten eines Kommentarknotens.
            Dieses Feld fehlt bei Element- und Dokumentknoten.
        - `shadowRoot` {{optional_inline}}
          - : Ein Objekt, das den mit dem Knoten verbundenen [Shadow-Root](/de/docs/Web/API/Element/shadowRoot) beschreibt.
            Das Objekt hat dieselben Felder wie jedes Knotenobjekt in `nodes`, einschließlich `sharedId`, `type` und `value`.
            Der Wert dieses Feldes ist `null`, wenn der zurückgegebene Knoten keinen Shadow-Root hat.

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Ein erforderlicher Parameter fehlt oder hat einen ungültigen Typ.
    - `startNodes` ist angegeben, während `locator.type` den Wert `"context"` hat.
    - Der durch `locator.value.context` identifizierte untergeordnete Kontext ist kein direktes Kind des im Parameter `context` angegebenen Kontexts.

- `invalid selector`
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Der CSS-Selektor oder XPath-Ausdruck in `locator.value` kann nicht geparst werden.
    - `locator.type` hat den Wert `"innerText"` und `value` ist eine leere Zeichenfolge.
    - `locator.type` hat den Wert `"accessibility"` und weder `role` noch `name` ist angegeben.

- `no such frame`
  - : Es wurde kein Kontext mit der angegebenen `context`-ID gefunden.

- `no such handle`
  - : Eine in `startNodes` referenzierte Knotenreferenz kann nicht aufgelöst werden, beispielsweise weil das referenzierte Objekt von der Garbage Collection entfernt wurde.

- `unknown error`
  - : Die Auswertung des XPath-Ausdrucks in `locator.value` ist aus einem anderen Grund als einem Parsing-Fehler fehlgeschlagen.

## Beschreibung

Der Befehl `browsingContext.locateNodes` ist die wichtigste Möglichkeit, Knoten im DOM eines Dokuments zu finden. Er ähnelt den `Find Element(s)`-Befehlen in [WebDriver classic](/de/docs/Web/WebDriver/Reference/Classic/Commands).
Er wandelt einen Locator, etwa einen CSS-Selektor oder XPath-Ausdruck, in Knotenreferenzen um (mit `sharedId` und optional `handle`).
Sie können diese Referenzen in späteren Befehlen verwenden, beispielsweise in `startNodes` bei einem nachfolgenden Aufruf von `browsingContext.locateNodes` oder als Ziel für [`script.callFunction`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction).

Alternativ zu diesem Befehl können Sie [`script.evaluate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate) verwenden. Dafür müssen Sie jedoch den entsprechenden JavaScript-Code schreiben.

### Umfang der zurückgegebenen Details steuern

Beim Auffinden von Knoten können Sie drei Begrenzungen festlegen, um die Menge der in der Antwort zurückgegebenen Daten zu steuern:

- `maxNodeCount` ist ein Parameter auf oberster Ebene, der die Gesamtzahl der zurückgegebenen passenden Knoten steuert.
  Damit wird der Umfang des Suchergebnisses begrenzt.
- Die beiden anderen Begrenzungen, `maxDomDepth` und `maxObjectDepth`, sind Felder des Parameters `serializationOptions`. Sie steuern die Tiefe der für jeden passenden Knoten zurückgegebenen Daten (wie bei [`script.evaluate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate#controlling_the_returned_detail)):
  - `maxDomDepth` steuert die Anzahl der Ebenen von DOM-Nachkommen, die im Feld `children` jedes passenden Knotens enthalten sind.
  - `maxObjectDepth` steuert, wie viele Ebenen verschachtelter JavaScript-Objekteigenschaften bei der Darstellung von Werten, die keine Knoten sind, in der Antwort enthalten sind.

## Beispiele

### Knoten mit einem CSS-Selektor finden

Angenommen, Sie haben eine [WebDriver-BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).

Ihr Dokument enthält einen einzelnen `<button>` mit der Klasse `submit`.
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

Der Browser antwortet mit dem passenden Knoten wie folgt:

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

Beachten Sie, dass das Array `nodes` in dieser Antwort ein einzelnes Objekt enthält, das einem passenden Knoten entspricht.
Sein `localName` ist `"button"` und entspricht damit dem Tag des Elements.
Der Button hat einen Kindknoten: seinen Text „Submit“. Daher hat `childNodeCount` den Wert `1`.
`shadowRoot` ist `null`, weil der Button keinen Shadow-Root hat.

### Anzahl der zurückgegebenen passenden Knoten begrenzen

Ihr Dokument enthält drei `<li>`-Elemente mit der Klasse `item`.

Senden Sie über dieselbe Verbindung und Sitzung wie im ersten Beispiel die folgende Nachricht, um zwei dieser Elemente mithilfe eines CSS-Selektors und `maxNodeCount` zu finden:

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

Der Browser antwortet mit zwei passenden Knoten wie folgt:

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

### Einen Knoten anhand seiner zugänglichen Rolle und seines Namens finden

Ihr Dokument enthält das folgende Markup, das dem Element die zugängliche Rolle `"checkbox"` und den zugänglichen Namen `"Checkbox name"` gibt:

```html
<span
  role="checkbox"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="checkbox-label"></span>
<span id="checkbox-label">Checkbox name</span>
```

Senden Sie über dieselbe Verbindung und Sitzung wie im ersten Beispiel die folgende Nachricht, um die Checkbox anhand ihrer Barrierefreiheitsmerkmale zu finden:

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

Der Browser antwortet mit dem passenden Knoten wie folgt:

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

Sie können diese Checkbox auch allein anhand ihrer zugänglichen Rolle oder ihres zugänglichen Namens finden, da für diesen Locator eine der beiden Angaben ausreicht.

### Das Containerelement eines untergeordneten Kontexts finden

Ihr Dokument enthält ein `<iframe>` mit einem untergeordneten Kontext.

Ermitteln Sie über dieselbe Verbindung und Sitzung wie im ersten Beispiel die ID des untergeordneten Kontexts mit [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).
Senden Sie die folgende Nachricht, um das iframe mithilfe eines Kontext-Locators zu finden:

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

Der Browser antwortet mit dem passenden Knoten wie folgt:

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
