---
title: "`script.callFunction`-Befehl"
short-title: callFunction
slug: Web/WebDriver/Reference/BiDi/Modules/script/callFunction
l10n:
  sourceCommit: a4b7a640f04d4f6f1de19c1ee84888c967ece6cb
---

Der [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) `script.callFunction` des Moduls [`script`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script) ruft die angegebene Funktion mit den übergebenen Argumenten in einem [Realm](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script#realms) auf und gibt das Ergebnis der Funktion zurück.

## Syntax

```json-nolint
/* With required parameters */
{
  "method": "script.callFunction",
  "params": {
    "awaitPromise": false,
    "functionDeclaration": "() => document.title",
    "target": {
      "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f"
    }
  }
}

/* With required and optional parameters */
{
  "method": "script.callFunction",
  "params": {
    "arguments": [
      {
        "type": "number",
        "value": 3
      }
    ],
    "awaitPromise": false,
    "functionDeclaration": "function (quantity) { return this.price * quantity; }",
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
    "this": {
      "type": "object",
      "value": [
        [
          "price",
          {
            "type": "number",
            "value": 5
          }
        ]
      ]
    },
    "userActivation": true
  }
}
```

### Parameter

Das Feld `params` enthält:

- `arguments` {{optional_inline}}
  - : Ein Array von Objekten, die die Werte darstellen, die der Funktion als Argumente übergeben werden. Ihre Reihenfolge entspricht der Reihenfolge im Array.
    Der Browser wandelt jedes Objekt in einen JavaScript-Wert um, bevor er die Funktion aufruft.
    Wird der Parameter weggelassen, wird die Funktion ohne Argumente aufgerufen.

    Um einen primitiven oder strukturierten JavaScript-Wert zu beschreiben oder einen [Kanal](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script#channels) zum Senden von Nachrichten an den Client zu konfigurieren, verwendet das Objekt eine Kombination aus `type` und dem optionalen Feld `value`.
    Das Format des Felds `value` hängt vom Feld `type` ab.
    Um auf ein vorhandenes JavaScript-Objekt oder einen DOM-Knoten zu verweisen, verwendet das Objekt stattdessen das Feld `handle` oder `sharedId`.

    - `type`
      - : Ein String, der den Typ des Werts angibt, der an die Funktion übergeben werden soll.
        Er kann einen der folgenden Werte annehmen:
        - Für einen primitiven JavaScript-Wert: `"bigint"`, `"boolean"`, `"null"`, `"number"`, `"string"` oder `"undefined"`.
        - Für einen strukturierten JavaScript-Wert: `"array"`, `"date"`, `"map"`, `"object"`, `"regexp"` oder `"set"`.
        - Für eine vom Browser erstellte Funktion, die Nachrichten an den Client sendet: `"channel"`.
          Der Browser übergibt diese Funktion als Argument an die aufgerufene Funktion.
          Jeder Aufruf der vom Browser erstellten Funktion sendet ein [`script.message`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/message)-Ereignis an einen abonnierten Client.
          Die vom Browser erstellte Funktion akzeptiert ein einzelnes Argument.
          Um mehrere Werte in einer Nachricht zu senden, übergeben Sie ein Objekt oder ein Array.
    - `value` {{optional_inline}}
      - : Je nach `type` ein Array, ein boolescher Wert, eine Zahl, ein Objekt oder ein String, der den zu übergebenden Wert angibt.
        Dieses Feld ist nicht verfügbar, wenn `type` `"null"` oder `"undefined"` ist.
        Für alle anderen `type`-Werte ist es erforderlich.
        - Wenn `type` `"array"` ist, ist `value` ein Array von Objekten.
          Jedes Objekt beschreibt ein Array-Element mit denselben Feldern wie ein Objekt im Parameter `arguments`: `type` und optional `value` oder `handle` oder `sharedId`.
        - Wenn `type` `"bigint"` ist, ist `value` ein String, der die Ganzzahl darstellt.
        - Wenn `type` `"boolean"` ist, ist `value` `true` oder `false`.
        - Wenn `type` `"channel"` ist, ist `value` ein Objekt, das den Kanal konfiguriert.
          Dies ist dieselbe Kanalkonfiguration, die im Parameter [`arguments`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/addPreloadScript#arguments) von `script.addPreloadScript` verwendet wird.
          Sie enthält die folgenden Felder:
          - `channel`
            - : Ein String, der den Kanal in den resultierenden [`script.message`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/message)-Ereignissen identifiziert.
          - `ownership` {{optional_inline}}
            - : Ein String, der angibt, ob der Browser eine Referenz auf das in jeder Nachricht gesendete Objekt behält.
              Er akzeptiert dieselben Werte und hat denselben Standardwert wie der Parameter [`resultOwnership`](#resultownership).
          - `serializationOptions` {{optional_inline}}
            - : Ein Objekt, das steuert, wie viele Details in jeder Nachricht enthalten sind.
              Es hat dieselben Felder und Standardwerte wie der Parameter [`serializationOptions`](#serializationoptions_2).
        - Wenn `type` `"date"` ist, ist `value` ein String im [Format für Datums- und Uhrzeit-Strings](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format).
        - Wenn `type` `"map"` ist, ist `value` ein Array, das die Einträge einer JavaScript-[`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) beschreibt.
          Jedes Element im Array ist ein weiteres Array mit genau zwei Elementen: einem Schlüssel, gefolgt von seinem Wert.
          Der Schlüssel ist ein String oder ein Objekt, das einen JavaScript-Wert darstellt.
          Der Wert ist ein Objekt, das einen JavaScript-Wert darstellt.

          Objekte, die als Schlüssel oder Werte verwendet werden, verwenden dieselben Felder wie ein Objekt im Parameter [`arguments`](#arguments): `type` und optional `value` oder `handle` oder `sharedId`.

        - Wenn `type` `"number"` ist, ist `value` eine Zahl oder der String `"-0"`, `"-Infinity"`, `"Infinity"` oder `"NaN"`.
        - Wenn `type` `"object"` ist, ist `value` ein Array, das die Eigenschaften eines JavaScript-Objekts beschreibt.
          Jedes Element im Array ist ein weiteres Array mit genau zwei Elementen: einem Schlüssel, gefolgt von seinem Wert.
          Der Schlüssel ist ein String oder ein Objekt, das einen JavaScript-Wert darstellt.
          Der Wert ist ein Objekt, das einen JavaScript-Wert darstellt.

          Objekte, die als Schlüssel oder Werte verwendet werden, verwenden dieselben Felder wie ein Objekt im Parameter [`arguments`](#arguments): `type` und optional `value` oder `handle` oder `sharedId`.

        - Wenn `type` `"regexp"` ist, ist `value` ein Objekt mit den folgenden Feldern:
          - `flags` {{optional_inline}}
            - : Ein String, der die [Flags für reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) angibt.
          - `pattern`
            - : Ein String, der das [Muster des regulären Ausdrucks](/de/docs/Web/JavaScript/Guide/Regular_expressions#writing_a_regular_expression_pattern) enthält.
        - Wenn `type` `"set"` ist, ist `value` ein Array von Objekten.
          Jedes Objekt beschreibt ein Set-Element mit denselben Feldern wie ein Objekt im Parameter `arguments`: `type` und optional `value` oder `handle` oder `sharedId`.
        - Wenn `type` `"string"` ist, ist `value` ein String.
    - `handle`
      - : Ein String mit einer ID, über die auf ein vorhandenes JavaScript-Objekt verwiesen wird, das an die Funktion übergeben werden soll.
        Verwenden Sie dieses Feld anstelle der Felder [`type`](#type) und [`value`](#value) des Parameters `arguments`.
        Wenn sowohl `handle` als auch `sharedId` angegeben sind, wird `handle` ignoriert.
        Ein Handle kann nur in dem Realm verwendet werden, in dem es erstellt wurde.

        Handles für Objekte werden von Befehlen wie [`script.evaluate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate) oder einem vorherigen `script.callFunction`-Befehl zurückgegeben, wenn [`resultOwnership`](#resultownership) auf `"root"` gesetzt ist.
    - `sharedId`
      - : Ein String mit einer ID, über die auf einen vorhandenen DOM-Knoten verwiesen wird, der an die Funktion übergeben werden soll.
        Verwenden Sie dieses Feld anstelle der Felder [`type`](#type) und [`value`](#value) des Parameters `arguments`.
        Diese ID kann realmübergreifend verwendet werden, auch in [Sandbox-Realms](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script#sandbox_realms), sofern diese auf denselben Knoten zugreifen können.

        Gemeinsame IDs werden von Befehlen wie [`browsingContext.locateNodes`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/locateNodes) zurückgegeben.
- `awaitPromise`
  - : Ein boolescher Wert, der angibt, wie mit einem von der Funktion zurückgegebenen Promise umgegangen wird.
    - `true`: Wenn die Funktion ein Promise zurückgibt, wartet der Browser, bis das Promise erfüllt oder abgelehnt wird, und gibt den aufgelösten Wert zurück.
      Wird das Promise abgelehnt, wird der Ablehnungsgrund als Ausnahme gemeldet.
    - `false`: Wenn die Funktion ein Promise zurückgibt, gibt der Browser das Promise-Objekt zurück, ohne abzuwarten, bis es erfüllt oder abgelehnt wird.
- `functionDeclaration`
  - : Ein String mit dem JavaScript-Quellcode der aufzurufenden Funktion.
    Der Browser wertet den String aus und ruft die resultierende Funktion mit den im Parameter [`arguments`](#arguments) angegebenen Werten auf.
- `resultOwnership` {{optional_inline}}
  - : Ein String, der angibt, ob der Browser eine Referenz auf das zurückgegebene Objekt behält, damit Sie später damit interagieren können.
    Er kann einen der folgenden Werte annehmen:
    - `"none"`: Der Browser behält keine Referenz auf das zurückgegebene Objekt, sodass die Antwort kein Feld `handle` enthält.
      Dies ist der Standardwert.
    - `"root"`: Der Browser hält das zurückgegebene Objekt am Leben und fügt der Antwort ein Feld [`handle`](#handle_3) hinzu.
      Sie können das `handle` an andere Befehle des Moduls `script` übergeben und es mit [`script.disown`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/disown) freigeben, wenn Sie es nicht mehr benötigen.
      Der Browser gibt Handles auch frei, wenn der Realm zerstört wird.
- `serializationOptions` {{optional_inline}}
  - : Ein Objekt, das steuert, wie viele Details in der Antwort enthalten sind, wenn die Funktion ein Objekt zurückgibt.
    Es kann die folgenden Felder enthalten:
    - `includeShadowTree` {{optional_inline}}
      - : Ein String, der angibt, ob Nachfahren von Shadow Roots in der Antwort enthalten sind, wenn der zurückgegebene Wert ein DOM-Knoten ist.
        Er kann einen der folgenden Werte annehmen:
        - `"none"`: Nachfahren von Shadow Roots sind nicht enthalten.
          Dies ist der Standardwert.
        - `"all"`: Nachfahren sowohl offener Shadow Roots (von JavaScript außerhalb der Root zugänglich) als auch geschlossener Shadow Roots (von JavaScript außerhalb der Root nicht zugänglich) sind enthalten.
        - `"open"`: Nur Nachfahren offener Shadow Roots sind enthalten.
    - `maxDomDepth` {{optional_inline}}
      - : Eine nicht negative Ganzzahl oder `null` für unbegrenzt, die angibt, wie viele Ebenen von Nachfahrenknoten in der Antwort enthalten sind.
        Der Standardwert ist `0`, wodurch Nachfahren ausgeschlossen werden.
        Diese Begrenzung gilt auch für Nachfahren von Shadow Roots, die durch `includeShadowTree` eingeschlossen werden.
    - `maxObjectDepth` {{optional_inline}}
      - : Eine nicht negative Ganzzahl oder `null` für unbegrenzt, die angibt, wie viele Ebenen verschachtelter Objekte in der Antwort enthalten sind.
        Der Standardwert ist `null`.
- `target`
  - : Ein Objekt, das den [Realm](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script#realms) angibt, in dem die Funktion aufgerufen werden soll.
    Das Objekt muss entweder ein Feld `context` oder ein Feld `realm` enthalten:
    - `context`
      - : Ein String mit der ID des [Kontexts](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts), dessen aktives Dokument den Realm bereitstellt, in dem die Funktion aufgerufen werden soll.
        Kontext-IDs werden von Befehlen wie [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) zurückgegeben.
    - `realm`
      - : Ein String mit der ID des Realms, in dem die Funktion aufgerufen werden soll.
        Realm-IDs werden vom Befehl [`script.getRealms`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/getRealms) zurückgegeben.
    - `sandbox` {{optional_inline}}
      - : Ein String mit dem Namen des [Sandbox-Realms](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script#sandbox_realms), in dem die Funktion aufgerufen werden soll.
        Bei einem nicht leeren Namen erstellt der Browser im angegebenen Kontext einen Sandbox-Realm mit diesem Namen, falls noch keiner vorhanden ist.
        Bei einem leeren Namen (`""`) wird die Funktion stattdessen im Realm des aktiven Dokuments aufgerufen.
        Dieses Feld ist nur verfügbar, wenn das Objekt `target` ein Feld `context` enthält.
- `this` {{optional_inline}}
  - : Ein Objekt, das den Wert beschreibt, der beim Aufruf der Funktion als [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) verwendet werden soll.
    Es verwendet dieselben Felder wie ein Objekt im Parameter [`arguments`](#arguments).
    Wird es weggelassen, verwendet der Browser `null` für `this`.
    Bei einer Funktion ohne Strict Mode ersetzt JavaScript `null` durch das globale Objekt des Realms.
    Bei einer Arrow Function wirkt sich dieses Feld nicht auf den Wert von `this` innerhalb der Funktion aus.
- `userActivation` {{optional_inline}}
  - : Ein boolescher Wert, der angibt, ob der Browser eine Benutzerinteraktion simuliert, indem er vor dem Aufruf der Funktion eine {{Glossary("Transient_activation", "transiente Aktivierung")}} bereitstellt.
    Dadurch kann die Funktion [APIs verwenden, die eine transiente Aktivierung erfordern](/de/docs/Web/Security/Defenses/User_activation#transient_activation), beispielsweise [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen).
    - `false`: Der Browser simuliert keine Benutzerinteraktion und setzt eine vorhandene transiente Aktivierung nicht zurück.
      APIs, die eine transiente Aktivierung erfordern, können fehlschlagen, wenn für die Seite nicht bereits eine transiente Aktivierung vorliegt.
      Dies ist der Standardwert.
    - `true`: Der Browser simuliert vor dem Aufruf der Funktion eine Benutzerinteraktion.
      Dies garantiert nicht, dass ein API-Aufruf erfolgreich ist; der Aufruf kann beispielsweise fehlschlagen, wenn eine erforderliche Berechtigung nicht erteilt wurde.

### Rückgabewert

Je nach Wert des Felds [`type`](#type_4) sind im Objekt `result` der Antwort die folgenden Felder verfügbar:

- `exceptionDetails` {{optional_inline}}
  - : Ein Objekt, das die ausgelöste Ausnahme beschreibt und nur vorhanden ist, wenn das Objekt `result` in der Antwort `"type": "exception"` enthält.
    Es enthält die folgenden Felder:
    - `columnNumber`
      - : Eine nicht negative Ganzzahl mit der nullbasierten Spaltennummer, an der die Ausnahme ausgelöst wurde, oder `0`, wenn der Stack-Trace leer ist.
    - `exception`
      - : Ein Objekt, das den ausgelösten JavaScript-Wert in der Antwort darstellt.
        Der ausgelöste Wert kann ein {{jsxref("Error")}}-Objekt oder ein anderer JavaScript-Wert sein.
        Es kann die folgenden Felder enthalten:
        - `handle` {{optional_inline}}
          - : Ein String mit einer ID, über die in nachfolgenden Befehlen des Moduls `script` auf das ausgelöste Objekt verwiesen werden kann.
            Dieses Handle kann nur in dem Realm verwendet werden, in dem es erstellt wurde.
            Der Browser fügt dieses Feld hinzu, wenn der Parameter [`resultOwnership`](#resultownership) als `"root"` angegeben ist und der ausgelöste Wert ein Handle unterstützt.
            Dieses Feld wird weggelassen, wenn das Feld [`type`](#type_2) in diesem `exception`-Objekt `"bigint"`, `"boolean"`, `"null"`, `"number"`, `"string"` oder `"undefined"` ist.
        - `internalId` {{optional_inline}}
          - : Ein String, der ein Objekt innerhalb der Antwort eindeutig identifiziert.
            Dieses Feld ist nur vorhanden, wenn dasselbe Objekt in der Antwort mehrmals vorkommt.
            Diese ID kann nicht verwendet werden, um in nachfolgenden Befehlen auf das Objekt zu verweisen.
        - `sharedId` {{optional_inline}}
          - : Ein String mit einer ID, über die in nachfolgenden Befehlen, die eine Knotenreferenz akzeptieren, auf den ausgelösten DOM-Knoten verwiesen werden kann, beispielsweise im Parameter `startNodes` von [`browsingContext.locateNodes`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/locateNodes).
            Dieses Feld ist nur vorhanden, wenn das Feld `type` in diesem `exception`-Objekt `"node"` ist.
            Diese ID kann realmübergreifend verwendet werden, sofern die Realms auf denselben Knoten zugreifen können.
        - `type`
          - : Ein String, der den Typ des ausgelösten Werts identifiziert, beispielsweise `"error"`, `"object"` oder `"string"`.
        - `value` {{optional_inline}}
          - : Je nach Feld `type` im `exception`-Objekt ein Array, ein boolescher Wert, eine Zahl, ein Objekt oder ein String, der den ausgelösten Wert darstellt.
            Dieses Feld wird weggelassen, wenn dieser Typ `"error"` ist.
            Einzelheiten zur Darstellung der einzelnen Typen finden Sie beim Feld [`value`](#value_3) des erfolgreichen `result`.
            Für ausgelöste Werte verwendet der Browser die Standardwerte für die Felder des Parameters [`serializationOptions`](#serializationoptions_2), unabhängig von den im Befehl angegebenen Werten.
    - `lineNumber`
      - : Eine nicht negative Ganzzahl mit der nullbasierten Zeilennummer, an der die Ausnahme ausgelöst wurde, oder `0`, wenn der Stack-Trace leer ist.
    - `stackTrace`
      - : Ein Objekt, das den JavaScript-Stack zu dem Zeitpunkt darstellt, an dem die Ausnahme ausgelöst wurde.
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
  - : Ein String mit der ID des Realms, in dem die Funktion aufgerufen wird.
- `result` {{optional_inline}}
  - : Ein Objekt, das den Rückgabewert der Funktion darstellt und nur vorhanden ist, wenn das Objekt `result` in der Antwort `"type": "success"` enthält.
    Es kann die folgenden Felder enthalten:
    - `handle` {{optional_inline}}
      - : Ein String mit einer ID, über die in nachfolgenden Befehlen des Moduls `script` auf das zurückgegebene Objekt verwiesen werden kann.
        Dieses Handle kann nur in dem Realm verwendet werden, in dem es erstellt wurde.
        Der Browser fügt dieses Feld hinzu, wenn der Parameter [`resultOwnership`](#resultownership) als `"root"` angegeben ist und der zurückgegebene Wert ein Handle unterstützt.
        Dieses Feld wird weggelassen, wenn das Feld [`type`](#type_3) in diesem `result`-Objekt `"bigint"`, `"boolean"`, `"null"`, `"number"`, `"string"` oder `"undefined"` ist.
    - `internalId` {{optional_inline}}
      - : Ein String, der ein Objekt innerhalb der Antwort eindeutig identifiziert.
        Dieses Feld ist nur vorhanden, wenn dasselbe Objekt in der Antwort mehrmals vorkommt.
        Diese ID kann nicht verwendet werden, um in nachfolgenden Befehlen auf das Objekt zu verweisen.
        Dieses Feld wird weggelassen, wenn das Feld `type` in diesem `result`-Objekt `"bigint"`, `"boolean"`, `"null"`, `"number"`, `"string"` oder `"undefined"` ist.
    - `sharedId` {{optional_inline}}
      - : Ein String mit einer ID, über die in nachfolgenden Befehlen, die eine Knotenreferenz akzeptieren, auf den zurückgegebenen Knoten verwiesen werden kann, beispielsweise im Parameter `startNodes` von [`browsingContext.locateNodes`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/locateNodes).
        Dieses Feld ist nur vorhanden, wenn das Feld `type` in diesem `result`-Objekt `"node"` ist.
        Diese ID kann realmübergreifend verwendet werden, sofern die Realms auf denselben Knoten zugreifen können.
    - `type`
      - : Ein String, der den Typ des von der Funktion zurückgegebenen Werts identifiziert, beispielsweise `"array"`, `"function"`, `"map"`, `"node"`, `"number"`, `"object"`, `"set"` oder `"string"`.
    - `value` {{optional_inline}}
      - : Je nach Feld `type` in diesem `result`-Objekt ein Array, ein boolescher Wert, eine Zahl, ein Objekt oder ein String, der den zurückgegebenen Wert darstellt.

        Beispielsweise werden `"bigint"`-Werte als Strings, `"boolean"`-Werte als `true` oder `false` und `"string"`-Werte als Strings dargestellt.
        Bei `"array"`, `"htmlcollection"`, `"nodelist"` und `"set"` ist `value` ein Array von Objekten, die die Elemente der Sammlung darstellen.
        Bei `"object"` ist `value` ein Array von Schlüssel-Wert-Paaren.

        Dieses Feld ist nicht für jeden Typ vorhanden.
        Bei Objekten kann dieses Feld weggelassen werden, wenn die Grenze `maxObjectDepth` erreicht ist oder dasselbe Objekt bereits in der Antwort dargestellt wurde.

        - Wenn `type` `"node"` ist, ist `value` ein Objekt, das Eigenschaften des zurückgegebenen Knotens beschreibt und die folgenden Felder enthalten kann:
          - `attributes` {{optional_inline}}
            - : Ein Objekt, dessen Schlüssel Attributnamen und dessen Werte die entsprechenden Attributwerte als Strings sind.
              Dieses Feld ist nur für Elementknoten vorhanden.
          - `childNodeCount`
            - : Eine nicht negative Ganzzahl, die die Anzahl der direkten Kindknoten des zurückgegebenen Knotens angibt.
              Dies ist die tatsächliche Anzahl, auch wenn das Feld `children` fehlt.
          - `children` {{optional_inline}}
            - : Ein Array von Kindknotenobjekten, jeweils mit Feldern wie `sharedId`, `type` und `value`.
              Nachfahren sind bis zu der Ebene enthalten, die durch `maxDomDepth` im Parameter [`serializationOptions`](#serializationoptions_2) angegeben ist.
          - `localName` {{optional_inline}}
            - : Ein String mit dem lokalen Namen des Knotens.
              Bei einem HTML-Element ist dies der Tag-Name in Kleinbuchstaben.
              Dieses Feld ist nur für Element- und Attributknoten vorhanden.
          - `mode` {{optional_inline}}
            - : Ein String, der angibt, ob die Shadow Root `"open"` oder `"closed"` ist.
              Dieses Feld ist nur für Shadow-Root-Knoten vorhanden.
          - `namespaceURI` {{optional_inline}}
            - : Ein String mit der [Namespace-URI](/de/docs/Web/API/Element/namespaceURI) des Knotens.
              Dieses Feld ist nur für Element- und Attributknoten vorhanden.
              Bei HTML-Elementen ist der Wert immer der Standard-HTML-Namespace `"http://www.w3.org/1999/xhtml"`.
          - `nodeType`
            - : Eine nicht negative Ganzzahl, die den Knotentyp darstellt, beispielsweise `1` für ein Element oder `3` für einen Textknoten.
          - `nodeValue` {{optional_inline}}
            - : Ein String mit dem [Wert des Knotens](/de/docs/Web/API/Node/nodeValue), beispielsweise dem Text eines Textknotens oder den Daten eines Kommentarknotens.
              Dieses Feld fehlt bei Knoten, deren `nodeValue` `null` ist, beispielsweise bei Element-, Dokument- und Shadow-Root-Knoten.
          - `shadowRoot` {{optional_inline}}
            - : Ein Objekt, das die mit dem Knoten verbundene Shadow Root beschreibt, mit Feldern wie `sharedId`, `type` und `value`.
              Dieses Feld ist `null`, wenn das zurückgegebene Element keine Shadow Root hat.
        - Wenn `type` `"window"` ist, ist `value` ein Objekt mit dem folgenden Feld:
          - `context`
            - : Ein String mit der ID des mit dem Fenster verknüpften Kontexts.
- `type`
  - : Ein String, der angibt, wie der Funktionsaufruf abgeschlossen wurde.
    Er hat einen der folgenden Werte:
    - `"exception"`: Beim Auswerten von `functionDeclaration` oder beim Aufruf der Funktion wurde eine Ausnahme ausgelöst, oder das von der Funktion zurückgegebene Promise wurde abgelehnt, während `awaitPromise` `true` war.
      Das Feld [`exceptionDetails`](#exceptiondetails) beschreibt die Ausnahme.
    - `"success"`: Die Funktion wurde ohne Ausnahme abgeschlossen.
      Das Feld [`result`](#result) beschreibt den Rückgabewert der Funktion.

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Ein erforderlicher Parameter fehlt oder ein Parameter hat einen ungültigen Typ.
    - Die Auswertung des Parameters [`functionDeclaration`](#functiondeclaration) ergibt einen Wert, der keine Funktion ist.
    - Ein Objekt im Parameter [`arguments`](#arguments) oder [`this`](#this), einschließlich eines verschachtelten Objekts, hat einen unbekannten `type` oder einen für diesen Typ ungültigen `value`.
      Beispielsweise enthält ein Element seines `value`-Arrays nicht genau zwei Elemente, wenn `type` `"map"` oder `"object"` ist.
- `no such frame`
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Es wird kein Kontext mit der angegebenen Kontext-ID gefunden.
    - Es wird kein Realm mit der angegebenen Realm-ID gefunden.
- `no such handle`
  - : Wird ausgelöst, wenn ein `handle`-Wert im Parameter [`arguments`](#arguments) oder [`this`](#this) im Ziel-Realm nicht gefunden wird.
- `no such node`
  - : Wird ausgelöst, wenn im Parameter [`arguments`](#arguments) oder [`this`](#this) eine `sharedId` angegeben ist und einer der folgenden Fälle vorliegt:
    - Es wird kein Knoten mit der angegebenen `sharedId` gefunden.
    - Der durch [`target`](#target) angegebene Realm ist keinem Dokument zugeordnet.
    - Das Dokument des Knotens und der Ziel-Realm erfüllen die Same-Origin-Domain-Prüfung nicht.

## Beschreibung

Der Befehl `script.callFunction` akzeptiert eine Funktionsdeklaration und Argumente, die an die Funktion übergeben werden.
Wenn Sie Argumente getrennt vom Quellcode der Funktion übergeben, können Sie Werte bereitstellen, darunter Referenzen auf vorhandene JavaScript-Objekte oder DOM-Knoten, ohne sie in den Quellcode-String einzufügen.

Mit dem Parameter `serializationOptions` können Sie begrenzen, wie viele Ebenen von DOM-Nachfahren und verschachtelten JavaScript-Objekten in der Antwort enthalten sind.
Wie diese Grenzen funktionieren, erfahren Sie unter [Detaillierungsgrad der Rückgabe steuern](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate#controlling_the_returned_detail) auf der Seite zu `script.evaluate`.

Die Antwort kann außerdem die Kennungen `handle`, `internalId` und `sharedId` enthalten.
Worin sie sich unterscheiden und wo Sie sie verwenden können, erfahren Sie unter [Objektkennungen in der Antwort](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate#object_identifiers_in_the_response) auf der Seite zu `script.evaluate`.

Prüfen Sie beim Auswerten der Antwort das Feld [`type`](#type_4) innerhalb von [`result`](#rückgabewert), um zwischen einem erfolgreichen Funktionsaufruf und einer Ausnahme zu unterscheiden.
JavaScript-Ausnahmen werden im `result` des Befehls gemeldet, nicht als Protokollfehler.

## Beispiele

### Eine Funktion mit einem Knoten und einem Text als Argumente aufrufen

Angenommen, Sie verfügen über eine [WebDriver-BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).

Angenommen, die Seite in einem Tab enthält die Überschrift „Welcome“ und Sie möchten deren Text in „Welcome back“ ändern.
Sie verwenden [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree), um die Kontext-ID des Tabs zu erhalten, und [`browsingContext.locateNodes`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/locateNodes), um die Überschrift zu finden und ihre `sharedId` zu erhalten.

Für die Änderung definieren Sie eine Funktion, die ein Element und einen String als Argumente akzeptiert.
Die Funktion weist den String der Eigenschaft [`textContent`](/de/docs/Web/API/Node/textContent) des Elements zu und gibt den aktualisierten Text zurück.

Senden Sie die folgende Nachricht, um die Funktion mit dem Überschriftenelement und „Welcome back“ als Argumenten aufzurufen:

```json
{
  "id": 1,
  "method": "script.callFunction",
  "params": {
    "arguments": [
      {
        "sharedId": "a1b2c3d4-e5f6-4708-9a1b-2c3d4e5f6071"
      },
      {
        "type": "string",
        "value": "Welcome back"
      }
    ],
    "awaitPromise": false,
    "functionDeclaration": "(element, text) => { element.textContent = text; return element.textContent; }",
    "target": {
      "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f"
    }
  }
}
```

Der Browser antwortet wie folgt. Dabei hat das äußere `result`-Objekt der Antwort `"type": "success"` und enthält ein verschachteltes `result`-Objekt mit dem aktualisierten Text „Welcome back“:

```json
{
  "id": 1,
  "type": "success",
  "result": {
    "realm": "7c37f4c0-abcd-1234-ef56-789012345678",
    "result": {
      "type": "string",
      "value": "Welcome back"
    },
    "type": "success"
  }
}
```

### Eine Funktion mit einem Objekt als `this` aufrufen

Angenommen, Sie möchten den in der Eigenschaft `count` eines Objekts gespeicherten Wert erhöhen.
In einem vorherigen [`script.evaluate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate)-Befehl haben Sie den Ausdruck `({ count: 2 })` ausgewertet und `resultOwnership` dabei auf `"root"` gesetzt.
Sie haben die Kontext-ID des Tabs aus dem vorherigen Beispiel verwendet, um den Ausdruck im Standard-Realm der Seite auszuwerten.
Der Browser hat das resultierende Objekt am Leben erhalten und sein Handle zurückgegeben.

Um `count` um drei zu erhöhen, definieren Sie eine Funktion, die einen Parameter `increment` akzeptiert, ihn zu `this.count` addiert und den aktualisierten Wert zurückgibt.

Verwenden Sie dieselbe Verbindung und Sitzung wie im vorherigen Beispiel und senden Sie die folgende Nachricht, um die Funktion aufzurufen, ohne nach dem vorherigen `script.evaluate`-Befehl zu einer anderen Seite zu navigieren oder die Seite neu zu laden.
Verwenden Sie in `target` die Kontext-ID aus dem vorherigen `script.evaluate`-Befehl.
Setzen Sie `this` auf eine Referenz mit dem Handle des Objekts und `arguments` auf ein Array mit einer Beschreibung der Zahl `3`:

```json
{
  "id": 2,
  "method": "script.callFunction",
  "params": {
    "arguments": [
      {
        "type": "number",
        "value": 3
      }
    ],
    "awaitPromise": false,
    "functionDeclaration": "function (increment) { this.count += increment; return this.count; }",
    "target": {
      "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f"
    },
    "this": {
      "handle": "f1e2d3c4-b5a6-4978-8b9c-0d1e2f3a4b5c"
    }
  }
}
```

Der Browser antwortet wie folgt. Das verschachtelte `result`-Objekt enthält dabei den aktualisierten Wert `5`:

```json
{
  "id": 2,
  "type": "success",
  "result": {
    "realm": "7c37f4c0-abcd-1234-ef56-789012345678",
    "result": {
      "type": "number",
      "value": 5
    },
    "type": "success"
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Befehl [`script.evaluate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate)
- Befehl [`script.disown`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/disown)
- Befehl [`script.addPreloadScript`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/addPreloadScript)
- Befehl [`browsingContext.locateNodes`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/locateNodes)
- Ereignis [`script.message`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/message)
