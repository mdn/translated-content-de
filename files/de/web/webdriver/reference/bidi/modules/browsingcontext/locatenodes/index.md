---
title: "`browsingContext.locateNodes`-Befehl"
short-title: locateNodes
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/locateNodes
l10n:
  sourceCommit: 39b5bad5c0acddc6e875259d980be948543827bd
---

Der `browsingContext.locateNodes` [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) des [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) Moduls findet die Knoten in einem [Kontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts), die einem Locator entsprechen, welcher die Suchkriterien angibt.

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
  - : Eine Zeichenfolge, die die ID des zu durchsuchenden Kontexts enthält.
    Kontext-IDs werden von Befehlen wie [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) zurückgegeben.

- `locator`
  - : Ein Objekt, das eines von fünf Kriterien angibt, um Knoten zu finden, indem eine Kombination aus `type`- und `value`-Feldern verwendet wird.
    Die Form des `value`-Felds hängt vom `type`-Feld ab.
    Einige `type`-Werte erlauben zusätzliche Felder im `locator`-Objekt.

    - `type`
      - : Eine Zeichenfolge, die die Strategie zum Finden von Knoten angibt.
        Sie kann einen der folgenden Werte annehmen:
        - `"accessibility"`: Findet Knoten mit übereinstimmendem zugänglichem `role`, `name` oder beidem.
        - `"context"`: Findet das Containerelement (wie `<iframe>` oder `<embed>`) eines Kindkontexts.
        - `"css"`: Findet Knoten, die einem CSS-Selektor entsprechen.
        - `"innerText"`: Findet Knoten, deren gerenderter Text ([`innerText`](/de/docs/Web/API/HTMLElement/innerText)) die angegebene Zeichenfolge genau enthält oder mit dieser entspricht.
        - `"xpath"`: Findet Knoten, die einem [XPath](/de/docs/Web/XML/XPath)-Ausdruck entsprechen.

    - `value`
      - : Je nach `type` eine Zeichenfolge oder ein Objekt, das angibt, wonach gesucht werden soll:
        - Bei `type: "accessibility"` ist `value` ein Objekt, das mindestens eines der folgenden Felder enthalten muss:
          - `name` {{optional_inline}}
            - : Eine Zeichenfolge, die den {{Glossary("Accessible_name", "zugänglichen Namen")}} enthält, der übereinstimmen soll, wie `"Submit"` für eine Schaltfläche mit `aria-label="Submit"`.
          - `role` {{optional_inline}}
            - : Eine Zeichenfolge, die die [zugängliche Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) enthält, die übereinstimmen soll, wie `"checkbox"` für ein Element mit `role="checkbox"`.
        - Bei `type: "context"` ist `value` ein Objekt mit folgendem Feld:
          - `context`
            - : Eine Zeichenfolge, die die ID eines Kindkontexts enthält.
              Es muss ein direkter Nachfolger des im `context`-Parameter des Befehls angegebenen Kontextes sein.
        - Bei `type: "css"` ist `value` eine Zeichenfolge, die den zu bewertenden [CSS-Selektor](/de/docs/Web/CSS/Reference/Selectors) enthält, wie `"li:nth-child(2)"`.
        - Bei `type: "innerText"` ist `value` eine Zeichenfolge, die den zu findenden Text enthält.
        - Bei `type: "xpath"` ist `value` eine Zeichenfolge, die den zu bewertenden [XPath](/de/docs/Web/XML/XPath)-Ausdruck enthält, wie `"//img[@alt='logo']"`.

    - `ignoreCase` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob der Textvergleich die Groß-/Kleinschreibung ignoriert.
        Dieses Feld ist nur für `type: "innerText"` verfügbar.
        - `false`: Der Vergleich unterscheidet Groß- und Kleinschreibung. Dies ist der Standardwert.
        - `true`: Der Vergleich ignoriert die Groß-/Kleinschreibung.

    - `matchType` {{optional_inline}}
      - : Eine Zeichenfolge, die angibt, ob der Suchtext genau mit dem gesamten Text des Knotens übereinstimmen muss oder nur mit einem Teil davon.
        Dieses Feld ist nur für `type: "innerText"` verfügbar.
        Es kann einen der folgenden Werte annehmen:
        - `"full"`: Der Suchtext muss genau mit dem gesamten Text des Knotens übereinstimmen.
          Dies ist der Standardwert.
        - `"partial"`: Der Suchtext muss nur mit einem Teil des Textes des Knotens übereinstimmen.

    - `maxDepth` {{optional_inline}}
      - : Eine nicht-negative Ganzzahl, die die maximale Anzahl von Ebenen von Nachkommen angibt, die durchsucht werden sollen.
        Auf der tiefstzulässigen Ebene wird ein Knoten an seinem eigenen gerenderten Text abgeglichen, anstatt weiter durchsucht zu werden.
        Dieses Feld ist nur für `type: "innerText"` verfügbar.
        Wenn nicht angegeben, gibt es keine Begrenzung für die Anzahl der durchsuchen Ebenen.

- `maxNodeCount` {{optional_inline}}
  - : Eine positive Ganzzahl, die die maximale Anzahl zurückgegebener Knoten angibt.
    Wenn nicht angegeben, werden alle übereinstimmenden Knoten zurückgegeben.

- `serializationOptions` {{optional_inline}}
  - : Ein Objekt, das die Menge der Detailinformationen steuert, die in der Antwort für jeden übereinstimmenden Knoten enthalten sind.
    Es kann die folgenden Felder enthalten:
    - `includeShadowTree` {{optional_inline}}
      - : Eine Zeichenfolge, die angibt, ob Shadow-Roots in der Antwort enthalten sind (siehe das `shadowRoot`-Feld, das im Abschnitt [Rückgabewert](#rückgabewert) beschrieben wird).
        Es kann einen der folgenden Werte annehmen:
        - `"none"`: Shadow-Roots sind nicht enthalten.
          Dies ist der Standardwert.
        - `"all"`: Sowohl offene Shadow-Roots (zugänglich von JavaScript außerhalb der Root) als auch geschlossene Shadow-Roots (nicht zugänglich von JavaScript außerhalb der Root) sind enthalten.
        - `"open"`: Nur offene Shadow-Roots sind enthalten.
    - `maxDomDepth` {{optional_inline}}
      - : Eine nicht-negative Ganzzahl oder `null` für unbegrenzt, die die Anzahl der Ebenen von Nachkommenknoten angibt, die in der Antwort für jeden übereinstimmenden Knoten enthalten sind (siehe das `children`-Feld, das im Abschnitt [Rückgabewert](#rückgabewert) beschrieben wird).
        Der Standardwert ist `0`, was Nachkommen ausschließt.
    - `maxObjectDepth` {{optional_inline}}
      - : Eine nicht-negative Ganzzahl oder `null` für unbegrenzt, die die Anzahl der Ebenen von verschachtelten Objekten angibt, die beim Serialisieren der JavaScript-Eigenschaften eines Knotens enthalten sind.
        Der Standardwert ist `null`.

- `startNodes` {{optional_inline}}
  - : Ein Array von einem oder mehreren Knotenreferenzen, das die Knoten angibt, innerhalb derer gesucht werden soll, anstatt das gesamte Dokument zu durchsuchen.
    Jede Referenz ist ein Objekt mit den folgenden Feldern:
    - `handle` {{optional_inline}}
      - : Eine Zeichenfolge, die einen Handle zu einem JavaScript-Objekt enthält, wie z.B. einen, der aus einer früheren [`script.evaluate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate) oder [`script.callFunction`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction) Antwort beibehalten wurde.
    - `sharedId`
      - : Eine Zeichenfolge, die die ID eines zuvor zurückgegebenen Knotens enthält, wie einen aus einer früheren `browsingContext.locateNodes` Antwort.

    > [!NOTE]
    > `startNodes` kann nicht verwendet werden, wenn `locator.type` `"context"` ist.

### Rückgabewert

Das `result`-Objekt in der Antwort enthält die folgenden Felder:

- `nodes`
  - : Ein Array von Knotenobjekten, eines für jeden übereinstimmenden Knoten.
    Jedes Objekt kann die folgenden Felder haben:
    - `internalId` {{optional_inline}}
      - : Eine Zeichenfolge, die dieses Knotenobjekt in der Antwort eindeutig identifiziert.
        Dieses Feld ist nur vorhanden, wenn dasselbe Knotenobjekt mehr als einmal in derselben Antwort erscheint, z.B. wenn ein Knoten sowohl als oberste Übereinstimmung als auch als Nachkomme eines anderen übereinstimmenden Knotens erscheint.
    - `sharedId` {{optional_inline}}
      - : Eine Zeichenfolge, die eine ID zum Referenzieren dieses Knotens in späteren Befehlen enthält, wie in `startNodes` eines nachfolgenden `browsingContext.locateNodes` Aufrufs.
        Diese ID ist über die gesamte Sitzung hinweg eindeutig und bleibt für die Lebensdauer der Sitzung gültig, solange der Knoten noch existiert.
    - `type`
      - : Eine Zeichenfolge, die immer den Wert `"node"` hat.
    - `value` {{optional_inline}}
      - : Ein Objekt, das Eigenschaften des übereinstimmenden Knotens beschreibt.
        Dieses Objekt kann die folgenden Felder enthalten:
        - `attributes` {{optional_inline}}
          - : Ein Objekt, das jedes [Attribut](/de/docs/Web/API/Element/attributes) auf seinen Zeichenfolgenwert abbildet.
            Dieses Feld ist nur für Elementknoten vorhanden.
        - `childNodeCount`
          - : Eine nicht-negative Ganzzahl, die die Anzahl der direkten [Kindknoten](/de/docs/Web/API/Node/childNodes) des zurückgegebenen Knotens angibt.
            Dies ist die tatsächliche Anzahl, auch wenn das `children`-Feld fehlt oder weniger davon enthält.
        - `children` {{optional_inline}}
          - : Ein Array von Nachkommenknoten, von denen jeder dieselben Felder wie dieses Objekt enthält.
            Nachkommen sind bis zu der Ebene enthalten, die durch `maxDomDepth` in `serializationOptions` festgelegt ist.
        - `localName` {{optional_inline}}
          - : Eine Zeichenfolge, die den [lokalen Namen](/de/docs/Web/API/Element/localName) des Knotens enthält.
            Bei einem HTML-Element ist dies der Tag-Name in Kleinbuchstaben.
            Dieses Feld ist nur für Elementknoten vorhanden.
        - `mode` {{optional_inline}}
          - : Eine Zeichenfolge, die den [Modus der Shadow-Root](/de/docs/Web/API/ShadowRoot/mode) angibt, die dem Knoten zugeordnet ist.
            Dieses Feld ist nur für Shadow-Root-Knoten vorhanden.
            Es kann einen der folgenden Werte annehmen:
            - `"closed"`: Gibt an, dass Knoten innerhalb der Shadow-Root von JavaScript außerhalb der Root nicht zugänglich sind.
            - `"open"`: Gibt an, dass Knoten innerhalb der Shadow-Root von JavaScript außerhalb der Root zugänglich sind.
        - `namespaceURI` {{optional_inline}}
          - : Eine Zeichenfolge, die die [Namespace-URI](/de/docs/Web/API/Element/namespaceURI) des Knotens enthält.
            Dieses Feld ist nur für Elementknoten vorhanden.
            Bei HTML-Elementen ist der Wert immer der Standard-HTML-Namespace, `"http://www.w3.org/1999/xhtml"`.
        - `nodeType`
          - : Eine Ganzzahl, die den [Typ des Knotens](/de/docs/Web/API/Node/nodeType) darstellt, wie `1` für ein Element oder `3` für einen Textknoten.
        - `nodeValue` {{optional_inline}}
          - : Eine Zeichenfolge, die den [Wert des Knotens](/de/docs/Web/API/Node/nodeValue) enthält, wie den Text eines Textknotens oder die Daten eines Kommentarknotens.
            Dieses Feld ist für Element- und Dokumentknoten nicht vorhanden.
        - `shadowRoot` {{optional_inline}}
          - : Ein Objekt, das die [Shadow-Root](/de/docs/Web/API/Element/shadowRoot) beschreibt, die dem Knoten zugeordnet ist.
            Das Objekt hat dieselben Felder wie jedes Knotenobjekt in `nodes`, einschließlich `sharedId`, `type` und `value`.

            Der Wert dieses Feldes ist `null`, wenn der zurückgegebene Knoten keine Shadow-Root hat oder wenn die Shadow-Root unter Verwendung der `includeShadowTree`-Einstellung ausgeschlossen ist.

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Ein erforderlicher Parameter fehlt oder hat einen ungültigen Typ.
    - `startNodes` wird angegeben, wenn `locator.type` `"context"` ist.
    - Der durch `locator.value.context` identifizierte Kindkontext ist kein direkter Nachfolger des im `context`-Parameter angegebenen Kontexts.

- `invalid selector`
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Der CSS-Selektor oder XPath-Ausdruck in `locator.value` kann nicht analysiert werden.
    - `locator.type` ist `"innerText"` und `value` ist eine leere Zeichenfolge.
    - `locator.type` ist `"accessibility"` und weder `role` noch `name` ist angegeben.

- `no such frame`
  - : Kein Kontext mit der angegebenen `context`-ID gefunden.

- `no such handle`
  - : Ein in `startNodes` referenzierter Knoten kann nicht aufgelöst werden, zum Beispiel, wenn er vom Garbage-Collector entfernt wurde.

- `unknown error`
  - : Die Auswertung des XPath-Ausdrucks in `locator.value` ist aus einem anderen Grund als einem Analysefehler fehlgeschlagen.

## Beschreibung

Der `browsingContext.locateNodes`-Befehl ist der primäre Weg, um Knoten im DOM eines Dokuments zu finden - er ähnelt den `Find Element(s)`-Befehlen in [WebDriver Classic](/de/docs/Web/WebDriver/Reference/Classic/Commands).
Er verwandelt einen Locator, wie einen CSS-Selektor oder XPath-Ausdruck, in Knotenreferenzen (mit `sharedId` und optional `handle`).
Sie können diese Referenzen in späteren Befehlen verwenden, wie in `startNodes` bei einem nachfolgenden `browsingContext.locateNodes`-Aufruf oder als Ziel für [`script.callFunction`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction).

Als Alternative zu diesem Befehl können Sie [`script.evaluate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate) verwenden, obwohl dies das Schreiben des entsprechenden JavaScript-Codes erfordert.

Beim Lokalisieren von Knoten können Sie drei Grenzen festlegen, um die Menge der in der Antwort zurückgegebenen Daten zu steuern:

- `maxNodeCount` ist ein oberster Parameter, der die Anzahl der insgesamt zurückgegebenen übereinstimmenden Knoten steuert.
  Dies steuert die Breite des Suchergebnisses.
- Die beiden anderen Parameter, `maxDomDepth` und `maxObjectDepth`, beide im `serializationOptions`-Objekt, steuern die Tiefe der in der Antwort für jeden übereinstimmenden Knoten zurückgegebenen Daten.
  - `maxDomDepth` steuert die Anzahl der Ebenen von DOM-Nachkommen, die in jedem übereinstimmenden Knoten im `children`-Feld enthalten sind.
  - `maxObjectDepth` steuert die Anzahl der Ebenen von verschachtelten JavaScript-Objekteigenschaften, die enthalten sind, wenn Nicht-Knoten-Werte in der Antwort dargestellt werden.

## Beispiele

### Lokalisieren von Knoten mit einem CSS-Selektor

Angenommen, Sie haben eine [WebDriver BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).

Angenommen, Ihr Dokument hat eine einzige `<button>` mit einer `submit`-Klasse.
Verwenden Sie die Kontext-ID dieses Dokuments, die Sie mit [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) erhalten haben, um die folgende Nachricht zu senden, um die Schaltfläche nach ihrer Klasse zu finden:

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

Der Browser antwortet mit dem übereinstimmenden Knoten wie folgt:

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

Beachten Sie, dass in dieser Antwort das `nodes`-Array ein einzelnes Objekt enthält, das einem übereinstimmenden Knoten entspricht.
Sein `localName` ist `"button"`, was dem Tag des Elements entspricht.
Die Schaltfläche hat einen Kindknoten, ihren Text "Submit", weshalb `childNodeCount` `1` ist.
`shadowRoot` ist `null`, da die Schaltfläche keine Shadow-Root hat.

### Begrenzung der zurückgegebenen Anzahl übereinstimmender Knoten

Angenommen, Ihr Dokument hat drei `<li>`-Elemente mit einer `item`-Klasse.

Verwenden Sie die gleiche Verbindung und Sitzung wie im ersten Beispiel, um die folgende Nachricht zu senden, mit der Sie zwei davon mit einem CSS-Selektor und `maxNodeCount` finden:

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

Der Browser antwortet mit zwei übereinstimmenden Knoten wie folgt:

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

### Lokalisieren eines Knotens über zugängliche Rolle und Name

Angenommen, Ihr Dokument hat das folgende Markup, das dem Element eine zugängliche Rolle von `"checkbox"` und den zugänglichen Namen als `"Checkbox name"` gibt:

```html
<span
  role="checkbox"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="checkbox-label"></span>
<span id="checkbox-label">Checkbox name</span>
```

Verwenden Sie die gleiche Verbindung und Sitzung wie im ersten Beispiel, um die folgende Nachricht zu senden, um die Checkbox mit ihren Zugänglichkeitsmerkmalen zu finden:

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

Der Browser antwortet mit dem übereinstimmenden Knoten wie folgt:

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

Sie können diese Checkbox auch nur mit ihrer zugänglichen Rolle oder nur mit ihrem zugänglichen Namen finden, da dieser Locator mit einem von beiden allein funktioniert.

### Lokalisieren des Containerelements eines Kindkontexts

Angenommen, Ihr Dokument hat ein `<iframe>`, das einen Kindkontext enthält.

Verwenden Sie die gleiche Verbindung und Sitzung wie im ersten Beispiel, um die ID des Kindkontexts zu erhalten, indem Sie [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) verwenden.
Senden Sie die folgende Nachricht, um das `iframe` mit einem Kontext-Locator zu finden:

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

Der Browser antwortet mit dem übereinstimmenden Knoten wie folgt:

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

- [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) Befehl
- [`browsingContext.navigate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) Befehl
- [`browsingContext.reload`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload) Befehl
- [`script.callFunction`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction) Befehl
