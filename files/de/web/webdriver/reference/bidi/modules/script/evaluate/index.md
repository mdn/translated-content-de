---
title: Befehl `script.evaluate`
short-title: evaluate
slug: Web/WebDriver/Reference/BiDi/Modules/script/evaluate
l10n:
  sourceCommit: 8a86bbb9816f718762fa855d78b92e5525c0d520
---

Der [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) `script.evaluate` des Moduls [`script`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script) wertet einen JavaScript-Ausdruck in einem [Realm](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script#realms) aus und gibt den Wert des Ausdrucks zurück.
Wenn ein Ausdruck ein Promise ergibt, können Sie warten, bis das Promise abgeschlossen ist, und stattdessen seinen aufgelösten Wert abrufen.

## Syntax

```json-nolint
/* With required parameters */
{
  "method": "script.evaluate",
  "params": {
    "awaitPromise": false,
    "expression": "document.title",
    "target": {
      "realm": "7c37f4c0-abcd-1234-ef56-789012345678"
    }
  }
}

/* With required and optional parameters */
{
  "method": "script.evaluate",
  "params": {
    "awaitPromise": true,
    "expression": "document.querySelector('button')",
    "resultOwnership": "root",
    "serializationOptions": {
      "includeShadowTree": "open",
      "maxDomDepth": 1,
      "maxObjectDepth": 2
    },
    "target": {
      "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
      "sandbox": "myAutomationSandbox"
    },
    "userActivation": true
  }
}
```

### Parameter

Das Feld `params` enthält:

- `awaitPromise`
  - : Ein boolescher Wert, der angibt, wie mit einem Promise umgegangen wird, das ein Ausdruck zurückgibt.
    - `true`: Ergibt der Ausdruck ein Promise, wartet der Browser, bis es abgeschlossen ist, und gibt den aufgelösten Wert zurück.
      Wird das Promise zurückgewiesen, wird der Grund für die Zurückweisung als Ausnahme gemeldet.
    - `false`: Ergibt der Ausdruck ein Promise, gibt der Browser das Promise-Objekt zurück, ohne auf dessen Abschluss zu warten.
- `expression`
  - : Ein String mit dem auszuwertenden JavaScript-Ausdruck.
- `resultOwnership` {{optional_inline}}
  - : Ein String, der angibt, ob der Browser eine Referenz auf das zurückgegebene Objekt behält, damit Sie später damit interagieren können.
    Er kann einen der folgenden Werte annehmen:
    - `"none"`: Der Browser behält keine Referenz auf das zurückgegebene Objekt. Die Antwort enthält daher kein Feld `handle`.
      Dies ist der Standardwert.
    - `"root"`: Der Browser hält das zurückgegebene Objekt verfügbar und fügt der Antwort ein Feld [`handle`](#handle_2) hinzu.
      Sie können `handle` an andere Befehle des Moduls `script` übergeben und es mit [`script.disown`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/disown) freigeben, wenn Sie es nicht mehr benötigen.
      Der Browser gibt Handles auch frei, wenn das Realm zerstört wird.
- `serializationOptions` {{optional_inline}}
  - : Ein Objekt, das steuert, wie detailliert die Antwort ist, wenn der Ausdruck ein Objekt ergibt.
    Es kann die folgenden Felder enthalten:
    - `includeShadowTree` {{optional_inline}}
      - : Ein String, der angibt, ob Nachfahren von Shadow Roots in die Antwort aufgenommen werden, wenn der zurückgegebene Wert ein DOM-Knoten ist.
        Er kann einen der folgenden Werte annehmen:
        - `"none"`: Nachfahren von Shadow Roots werden nicht aufgenommen.
          Dies ist der Standardwert.
        - `"all"`: Nachfahren sowohl offener Shadow Roots (von JavaScript außerhalb des Roots zugänglich) als auch geschlossener Shadow Roots (von JavaScript außerhalb des Roots nicht zugänglich) werden aufgenommen.
        - `"open"`: Nur Nachfahren offener Shadow Roots werden aufgenommen.
    - `maxDomDepth` {{optional_inline}}
      - : Eine nicht negative Ganzzahl oder `null` für eine unbegrenzte Tiefe. Der Wert gibt an, wie viele Ebenen von Nachfahrenknoten in die Antwort aufgenommen werden.
        Der Standardwert ist `0`; Nachfahren werden damit ausgeschlossen.
        Diese Grenze gilt auch für Nachfahren von Shadow Roots, die durch `includeShadowTree` aufgenommen werden.
    - `maxObjectDepth` {{optional_inline}}
      - : Eine nicht negative Ganzzahl oder `null` für eine unbegrenzte Tiefe. Der Wert gibt an, wie viele Ebenen verschachtelter Objekte in die Antwort aufgenommen werden.
        Der Standardwert ist `null`.
- `target`
  - : Ein Objekt, das das [Realm](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script#realms) angibt, in dem der Ausdruck ausgewertet werden soll.
    Das Objekt muss entweder ein Feld `context` oder ein Feld `realm` enthalten:
    - `context`
      - : Ein String mit der ID des [Kontexts](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts), dessen aktives Dokument das Realm für die Auswertung des Ausdrucks bereitstellt.
        Kontext-IDs werden von Befehlen wie [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) zurückgegeben.
    - `realm`
      - : Ein String mit der ID des Realms, in dem der Ausdruck ausgewertet werden soll.
        Realm-IDs werden vom Befehl [`script.getRealms`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/getRealms) zurückgegeben.
    - `sandbox` {{optional_inline}}
      - : Ein String mit dem Namen des [Sandbox-Realms](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script#sandbox_realms), in dem der Ausdruck ausgewertet werden soll.
        Bei einem nicht leeren Namen erstellt der Browser im angegebenen Kontext ein Sandbox-Realm mit diesem Namen, falls noch keines vorhanden ist.
        Bei einem leeren Namen (`""`) wird der Ausdruck stattdessen im Realm des aktiven Dokuments ausgewertet.
        Dieses Feld ist nur verfügbar, wenn das Objekt `target` ein Feld `context` enthält.
- `userActivation` {{optional_inline}}
  - : Ein boolescher Wert, der angibt, ob der Browser eine Benutzerinteraktion simuliert, indem er vor der Auswertung des Ausdrucks eine {{Glossary("Transient_activation", "transiente Aktivierung")}} bereitstellt.
    Dadurch kann der Ausdruck [APIs verwenden, die eine transiente Aktivierung erfordern](/de/docs/Web/Security/Defenses/User_activation#transient_activation), beispielsweise [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen).
    - `false`: Der Browser simuliert keine Benutzerinteraktion und setzt eine vorhandene transiente Aktivierung nicht zurück.
      APIs, die eine transiente Aktivierung erfordern, können fehlschlagen, wenn für die Seite nicht bereits eine solche Aktivierung vorliegt.
      Dies ist der Standardwert.
    - `true`: Der Browser simuliert vor der Auswertung des Ausdrucks eine Benutzerinteraktion.
      Dies garantiert nicht, dass ein API-Aufruf erfolgreich ist. Der Aufruf kann beispielsweise fehlschlagen, wenn eine erforderliche Berechtigung nicht erteilt wurde.

### Rückgabewert

Welche der folgenden Felder im Objekt `result` der Antwort verfügbar sind, hängt vom Wert seines Felds [`type`](#type_3) ab:

- `exceptionDetails` {{optional_inline}}
  - : Ein Objekt, das die ausgelöste Ausnahme beschreibt. Es ist nur vorhanden, wenn das Objekt `result` in der Antwort `"type": "exception"` enthält.
    Es enthält die folgenden Felder:
    - `columnNumber`
      - : Eine nicht negative Ganzzahl mit der nullbasierten Spaltennummer, an der die Ausnahme ausgelöst wurde, oder `0`, wenn der Stack-Trace leer ist.
    - `exception`
      - : Ein Objekt, das den ausgelösten JavaScript-Wert in der Antwort darstellt.
        Der ausgelöste Wert kann ein {{jsxref("Error")}}-Objekt oder ein anderer JavaScript-Wert sein.
        Das Objekt kann die folgenden Felder enthalten:
        - `handle` {{optional_inline}}
          - : Ein String mit einer ID, über die in nachfolgenden Befehlen des Moduls `script` auf das ausgelöste Objekt verwiesen werden kann.
            Dieses Handle kann nur in dem Realm verwendet werden, in dem es erstellt wurde.
            Der Browser fügt dieses Feld hinzu, wenn der Parameter [`resultOwnership`](#resultownership) auf `"root"` gesetzt ist und der ausgelöste Wert ein Handle unterstützt.
            Das Feld fehlt, wenn das Feld [`type`](#type) in diesem Objekt `exception` `"bigint"`, `"boolean"`, `"null"`, `"number"`, `"string"` oder `"undefined"` ist.
        - `internalId` {{optional_inline}}
          - : Ein String, der ein Objekt innerhalb der Antwort eindeutig identifiziert.
            Dieses Feld ist nur vorhanden, wenn dasselbe Objekt mehrfach in der Antwort vorkommt.
            Mit dieser ID kann in nachfolgenden Befehlen nicht auf das Objekt verwiesen werden.
        - `sharedId` {{optional_inline}}
          - : Ein String mit einer ID, über die in nachfolgenden Befehlen, die eine Knotenreferenz akzeptieren, auf den ausgelösten DOM-Knoten verwiesen werden kann, beispielsweise im Parameter `startNodes` von [`browsingContext.locateNodes`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/locateNodes).
            Dieses Feld ist nur vorhanden, wenn das Feld `type` in diesem Objekt `exception` `"node"` ist.
            Diese ID kann realmübergreifend verwendet werden, sofern die Realms auf denselben Knoten zugreifen können.
        - `type`
          - : Ein String, der den Typ des ausgelösten Werts angibt, beispielsweise `"error"`, `"object"` oder `"string"`.
        - `value` {{optional_inline}}
          - : Ein Array, ein boolescher Wert, eine Zahl, ein Objekt oder ein String, der den ausgelösten Wert darstellt, abhängig vom Feld `type` im Objekt `exception`.
            Dieses Feld fehlt, wenn der Typ `"error"` ist.
            Wie die einzelnen Typen dargestellt werden, ist beim Feld [`value`](#value_2) des erfolgreichen `result` beschrieben.
            Für ausgelöste Werte verwendet der Browser die Standardwerte der Felder des Parameters [`serializationOptions`](#serializationoptions), unabhängig von den im Befehl angegebenen Werten.
    - `lineNumber`
      - : Eine nicht negative Ganzzahl mit der nullbasierten Zeilennummer, an der die Ausnahme ausgelöst wurde, oder `0`, wenn der Stack-Trace leer ist.
    - `stackTrace`
      - : Ein Objekt, das den JavaScript-Stack zum Zeitpunkt des Auslösens der Ausnahme darstellt.
        Es enthält das folgende Feld:
        - `callFrames`
          - : Ein Array mit null oder mehr Stack-Frame-Objekten.
            Jedes Objekt enthält die folgenden Felder:
            - `columnNumber`
              - : Eine nicht negative Ganzzahl mit der nullbasierten Spaltennummer des ausgeführten Codes.
            - `functionName`
              - : Ein String mit dem Namen der ausgeführten Funktion.
            - `lineNumber`
              - : Eine nicht negative Ganzzahl mit der nullbasierten Zeilennummer des ausgeführten Codes.
            - `url`
              - : Ein String mit der URL des Skripts.
    - `text`
      - : Ein String mit einer textuellen Beschreibung der Ausnahme.
        Das genaue Format hängt vom Browser ab. Verlassen Sie sich daher bei Assertions in Tests nicht auf diesen Wert.
- `realm`
  - : Ein String mit der ID des Realms, in dem der Ausdruck ausgewertet wird.
- `result` {{optional_inline}}
  - : Ein Objekt, das den Wert des ausgewerteten Ausdrucks darstellt. Es ist nur vorhanden, wenn das Objekt `result` in der Antwort `"type": "success"` enthält.
    Es kann die folgenden Felder enthalten:
    - `handle` {{optional_inline}}
      - : Ein String mit einer ID, über die in nachfolgenden Befehlen des Moduls `script` auf das zurückgegebene Objekt verwiesen werden kann.
        Dieses Handle kann nur in dem Realm verwendet werden, in dem es erstellt wurde.
        Der Browser fügt dieses Feld hinzu, wenn der Parameter [`resultOwnership`](#resultownership) auf `"root"` gesetzt ist und der zurückgegebene Wert ein Handle unterstützt.
        Das Feld fehlt, wenn das Feld [`type`](#type_2) in diesem Objekt `result` `"bigint"`, `"boolean"`, `"null"`, `"number"`, `"string"` oder `"undefined"` ist.
    - `internalId` {{optional_inline}}
      - : Ein String, der ein Objekt innerhalb der Antwort eindeutig identifiziert.
        Dieses Feld ist nur vorhanden, wenn dasselbe Objekt mehrfach in der Antwort vorkommt.
        Mit dieser ID kann in nachfolgenden Befehlen nicht auf das Objekt verwiesen werden.
        Das Feld fehlt, wenn das Feld `type` in diesem Objekt `result` `"bigint"`, `"boolean"`, `"null"`, `"number"`, `"string"` oder `"undefined"` ist.
    - `sharedId` {{optional_inline}}
      - : Ein String mit einer ID, über die in nachfolgenden Befehlen, die eine Knotenreferenz akzeptieren, auf den zurückgegebenen Knoten verwiesen werden kann, beispielsweise im Parameter `startNodes` von [`browsingContext.locateNodes`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/locateNodes).
        Dieses Feld ist nur vorhanden, wenn das Feld `type` in diesem Objekt `result` `"node"` ist.
        Diese ID kann realmübergreifend verwendet werden, sofern die Realms auf denselben Knoten zugreifen können.
    - `type`
      - : Ein String, der den Typ des durch die Auswertung erzeugten Werts angibt, beispielsweise `"array"`, `"function"`, `"map"`, `"node"`, `"number"`, `"object"`, `"set"` oder `"string"`.
    - `value` {{optional_inline}}
      - : Ein Array, ein boolescher Wert, eine Zahl, ein Objekt oder ein String, der den ausgewerteten Wert darstellt, abhängig vom Feld `type` in diesem Objekt `result`.

        Beispielsweise werden Werte vom Typ `"string"` als Strings, Werte vom Typ `"boolean"` als `true` oder `false` und Werte vom Typ `"bigint"` als Strings dargestellt.
        Bei `"array"`, `"set"`, `"nodelist"` und `"htmlcollection"` ist `value` ein Array von Objekten, die die Elemente der Sammlung darstellen.

        Dieses Feld ist nicht bei jedem Typ vorhanden.
        Bei Objekten kann es fehlen, wenn die Grenze `maxObjectDepth` erreicht wurde oder dasselbe Objekt bereits an anderer Stelle in der Antwort dargestellt wurde.

        - Wenn `type` `"node"` ist, ist `value` ein Objekt, das Eigenschaften des zurückgegebenen Knotens beschreibt und die folgenden Felder enthalten kann:
          - `attributes` {{optional_inline}}
            - : Ein Objekt, dessen Schlüssel Attributnamen und dessen Werte die entsprechenden Attributwerte als Strings sind.
              Dieses Feld ist nur bei Elementknoten vorhanden.
          - `childNodeCount`
            - : Eine nicht negative Ganzzahl, die die Anzahl der direkten Kindknoten des zurückgegebenen Knotens angibt.
              Sie gibt die tatsächliche Anzahl an, auch wenn das Feld `children` fehlt.
          - `children` {{optional_inline}}
            - : Ein Array von Kindknotenobjekten mit Feldern wie `sharedId`, `type` und `value`.
              Nachfahren werden bis zu der durch `maxDomDepth` im Parameter [`serializationOptions`](#serializationoptions) angegebenen Ebene aufgenommen.
          - `localName` {{optional_inline}}
            - : Ein String mit dem lokalen Namen des Knotens.
              Bei einem HTML-Element ist dies der Tag-Name in Kleinbuchstaben.
              Dieses Feld ist nur bei Element- und Attributknoten vorhanden.
          - `mode` {{optional_inline}}
            - : Ein String, der angibt, ob der Shadow Root `"open"` oder `"closed"` ist.
              Dieses Feld ist nur bei Shadow-Root-Knoten vorhanden.
          - `namespaceURI` {{optional_inline}}
            - : Ein String mit der [Namensraum-URI](/de/docs/Web/API/Element/namespaceURI) des Knotens.
              Dieses Feld ist nur bei Element- und Attributknoten vorhanden.
              Bei HTML-Elementen ist der Wert immer der standardmäßige HTML-Namensraum `"http://www.w3.org/1999/xhtml"`.
          - `nodeType`
            - : Eine nicht negative Ganzzahl, die den Knotentyp angibt, beispielsweise `1` für ein Element oder `3` für einen Textknoten.
          - `nodeValue` {{optional_inline}}
            - : Ein String mit dem [Wert des Knotens](/de/docs/Web/API/Node/nodeValue), beispielsweise dem Text eines Textknotens oder den Daten eines Kommentarknotens.
              Dieses Feld fehlt bei Knoten, deren `nodeValue` `null` ist, beispielsweise bei Element-, Dokument- und Shadow-Root-Knoten.
          - `shadowRoot` {{optional_inline}}
            - : Ein Objekt, das den mit dem Knoten verbundenen Shadow Root beschreibt und Felder wie `sharedId`, `type` und `value` enthält.
              Dieses Feld ist `null`, wenn das zurückgegebene Element keinen Shadow Root hat.
        - Wenn `type` `"window"` ist, ist `value` ein Objekt mit dem folgenden Feld:
          - `context`
            - : Ein String mit der ID des Browsing-Kontexts.
- `type`
  - : Ein String, der angibt, wie die Auswertung des Ausdrucks abgeschlossen wurde.
    Er hat einen der folgenden Werte:
    - `"exception"`: Der Ausdruck hat eine Ausnahme ausgelöst oder das Promise, das er ergeben hat, wurde zurückgewiesen, während `awaitPromise` `true` war.
      Das Feld [`exceptionDetails`](#exceptiondetails) beschreibt die Ausnahme.
    - `"success"`: Der Ausdruck wurde normal abgeschlossen.
      Das Feld [`result`](#result) beschreibt den Wert des Ausdrucks.

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Wird ausgelöst, wenn ein erforderlicher Parameter fehlt oder einen ungültigen Typ hat.
- `no such frame`
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Es wird kein Kontext mit der angegebenen Kontext-ID gefunden.
    - Es wird kein Realm mit der angegebenen Realm-ID gefunden.

## Beschreibung

Der Befehl `script.evaluate` wertet einen JavaScript-Ausdruck in dem Realm aus, das durch den Parameter `target` angegeben wird.
Sie können beispielsweise `document.title` auswerten, um den Seitentitel zu lesen, oder `document.querySelector("#status").textContent = "Ready"`, um ein Element auf der Seite zu aktualisieren.

### Detaillierungsgrad der Rückgabe steuern

Wenn Sie einen Ausdruck auswerten, der ein Objekt erzeugt, können Sie im Parameter `serializationOptions` zwei Grenzen angeben, um die Tiefe der zurückgegebenen Daten zu steuern (wie bei [`browsingContext.locateNodes`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/locateNodes#controlling_the_returned_detail)):

- `maxDomDepth` steuert, wie viele Ebenen von DOM-Nachfahren im Feld `children` jedes zurückgegebenen Knotens enthalten sind.
- `maxObjectDepth` steuert, wie viele Ebenen verschachtelter Eigenschaften von JavaScript-Objekten bei der Darstellung von Werten, die keine Knoten sind, in der Antwort enthalten sind.

### Objekt-IDs in der Antwort

Die Antwort von `script.evaluate` kann die IDs `handle`, `internalId` und `sharedId` entweder im Objekt `result` einer erfolgreichen Auswertung oder im Objekt `exception` enthalten.
Sie dienen unterschiedlichen Zwecken.

Um zu sehen, worin sich diese IDs unterscheiden und wo Sie sie verwenden können, betrachten Sie eine Seite mit der folgenden Statusmeldung:

```html
<p id="status">Loading…</p>
```

Sie können mit `script.evaluate` den folgenden Ausdruck ausführen, um das Statuselement (`<p id="status">`) zu finden und ein Array mit zwei Referenzen darauf zurückzugeben.

```js
(() => {
  const node = document.querySelector("#status");
  return [node, node];
})();
```

In `[node, node]` verweisen beide Einträge auf dasselbe Statuselement.
Das `result` einer erfolgreichen Auswertung enthält daher zwei Darstellungen desselben Knotens, eine für jeden Array-Eintrag.
Wenn der Parameter [`resultOwnership`](#resultownership) auf `"root"` gesetzt ist, enthält das zurückgegebene Array ein `handle`.
Die beiden Knotendarstellungen innerhalb des Arrays haben dieselbe `internalId` und dieselbe `sharedId`, enthalten aber keine Handles.
Die folgende Tabelle vergleicht die in diesem Beispiel zurückgegebenen IDs:

| `handle`                                                                                                                                                                                                                                                                    | `internalId`                                                                                                    | `sharedId`                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Der Wert von `handle` identifiziert das Array.                                                                                                                                                                                                                              | Die beiden Werte von `internalId` sind identisch.                                                               | Die beiden Werte von `sharedId` sind identisch.                                                                                                                                                                                                    |
| Dieses Handle kann im Parameter [`arguments`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction#arguments) von `script.callFunction` verwendet werden, um das Array an eine Funktion zu übergeben, die den Text seines ersten Eintrags in `"Ready"` ändert. | Durch einen Vergleich der IDs lässt sich feststellen, dass beide Array-Einträge auf denselben Knoten verweisen. | Diese ID kann im Parameter [`startNodes`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/locateNodes#startnodes) von `browsingContext.locateNodes` verwendet werden, um Nachfahren wie den Textknoten des Statuselements zu finden. |
| Dieses Handle kann nur in dem Realm verwendet werden, in dem es erstellt wurde.                                                                                                                                                                                             | Diese ID kann nicht in nachfolgenden Befehlen verwendet werden.                                                 | Diese ID kann realmübergreifend verwendet werden, sofern die Realms auf denselben Knoten zugreifen können.                                                                                                                                         |

## Beispiele

### Einen Ausdruck in einem Realm auswerten

Angenommen, Sie haben eine [WebDriver-BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).

Ein Tab mit `https://example.com` sei geöffnet und Sie möchten seinen Seitentitel programmgesteuert lesen.
Die Realm-ID des aktiven Dokuments erhalten Sie mit [`script.getRealms`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/getRealms).
Senden Sie die folgende Nachricht, um den Ausdruck in diesem Realm auszuwerten:

```json
{
  "id": 1,
  "method": "script.evaluate",
  "params": {
    "awaitPromise": false,
    "expression": "document.title",
    "target": {
      "realm": "93ee5bd6-d256-4608-a002-9a8995cc0e5f"
    }
  }
}
```

Der Browser antwortet wie folgt. Das äußere Objekt `result` der Antwort hat `"type": "success"` und enthält ein verschachteltes Objekt `result` mit dem Seitentitel „Example Domain“:

```json
{
  "id": 1,
  "type": "success",
  "result": {
    "realm": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "result": {
      "type": "string",
      "value": "Example Domain"
    },
    "type": "success"
  }
}
```

### Einen Ausdruck auswerten, der eine Ausnahme auslöst

Angenommen, Sie versuchen auf derselben Seite den Text eines Elements mit der Klasse `price` zu lesen, aber ein solches Element existiert nicht.

Ermitteln Sie mit derselben Verbindung und Sitzung wie im vorherigen Beispiel die Kontext-ID des Tabs mithilfe von [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) und senden Sie die folgende Nachricht:

```json
{
  "id": 2,
  "method": "script.evaluate",
  "params": {
    "awaitPromise": false,
    "expression": "document.querySelector(\".price\").textContent",
    "target": {
      "context": "ceb33cd1-a9a3-46e7-a79d-3c1a3d4d754c"
    }
  }
}
```

Die Elementsuche gibt `null` zurück, und beim Lesen seiner Eigenschaft `textContent` wird ein {{jsxref("TypeError")}} ausgelöst.
Der Browser antwortet wie folgt. Das äußere Objekt `result` der Antwort hat `"type": "exception"` und enthält ein Objekt `exceptionDetails`, das die Ausnahme beschreibt.
Das `"type": "success"` auf oberster Ebene zeigt an, dass der Befehl erfolgreich war, obwohl die Auswertung des Ausdrucks eine Ausnahme ausgelöst hat:

```json
{
  "id": 2,
  "type": "success",
  "result": {
    "exceptionDetails": {
      "columnNumber": 9,
      "exception": {
        "type": "error"
      },
      "lineNumber": 0,
      "stackTrace": {
        "callFrames": [
          {
            "columnNumber": 9,
            "functionName": "",
            "lineNumber": 0,
            "url": "https://example.com/"
          }
        ]
      },
      "text": "TypeError: can't access property \"textContent\", document.querySelector(...) is null"
    },
    "realm": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "type": "exception"
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Befehl [`script.callFunction`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction)
- Befehl [`script.disown`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/disown)
- Befehl [`script.addPreloadScript`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/addPreloadScript)
- Leitfaden zur [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises)
