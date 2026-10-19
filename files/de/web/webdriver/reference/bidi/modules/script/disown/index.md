---
title: Befehl `script.disown`
short-title: disown
slug: Web/WebDriver/Reference/BiDi/Modules/script/disown
l10n:
  sourceCommit: eb950353cc947fb1c00397334b13a5f9457d734a
---

Der [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) `script.disown` des Moduls [`script`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script) gibt die angegebenen Handles frei, die von den Befehlen [`script.evaluate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate) und [`script.callFunction`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction) zurückgegeben oder in [`script.message`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/message)-Ereignissen empfangen wurden.

## Syntax

```json-nolint
/* With required parameters */
{
  "method": "script.disown",
  "params": {
    "handles": ["f1e2d3c4-b5a6-4978-8b9c-0d1e2f3a4b5c"],
    "target": {
      "realm": "7c37f4c0-abcd-1234-ef56-789012345678"
    }
  }
}

/* With required and optional parameters */
{
  "method": "script.disown",
  "params": {
    "handles": ["f1e2d3c4-b5a6-4978-8b9c-0d1e2f3a4b5c"],
    "target": {
      "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
      "sandbox": "myAutomationSandbox"
    }
  }
}
```

### Parameter

Das Feld `params` enthält:

- `handles`
  - : Ein Array von Zeichenfolgen, das die freizugebenden Handles angibt.
    Angegebene Handles, die im Ziel-Realm nicht gefunden werden, werden ignoriert.
    Handles werden in einem Feld `handle` zurückgegeben, wenn ein Befehl wie [`script.evaluate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate) mit dem Wert `root` für [`resultOwnership`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate#resultownership) gesendet wird.
- `target`
  - : Ein Objekt, das den [Realm](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script#realms) angibt, zu dem die angegebenen Handles gehören.
    Das Objekt muss entweder ein Feld `context` oder ein Feld `realm` enthalten:
    - `context`
      - : Eine Zeichenfolge mit der ID des [Kontexts](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts), dessen aktives Dokument den Realm bereitstellt, zu dem die Handles gehören.
        Kontext-IDs werden von Befehlen wie [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) zurückgegeben.
    - `realm`
      - : Eine Zeichenfolge mit der ID des Realms, zu dem die Handles gehören.
        Realm-IDs werden vom Befehl [`script.getRealms`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/getRealms) zurückgegeben.
    - `sandbox` {{optional_inline}}
      - : Eine Zeichenfolge mit dem Namen des [Sandbox-Realms](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script#sandbox_realms), zu dem die Handles gehören.
        Bei einem nicht leeren Namen erstellt der Browser im angegebenen Kontext einen Sandbox-Realm mit diesem Namen, falls noch keiner vorhanden ist.
        Bei einem leeren Namen (`""`) werden stattdessen Handles aus dem Realm des aktiven Dokuments freigegeben.
        Dieses Feld ist nur verfügbar, wenn das Objekt `target` ein Feld `context` enthält.

### Rückgabewert

Das Feld `result` in der Antwort ist ein leeres Objekt (`{}`).

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Wird ausgelöst, wenn ein erforderlicher Parameter fehlt oder einen ungültigen Typ hat.
- `no such frame`
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Es wird kein Kontext mit der angegebenen `context`-ID gefunden.
    - Es wird kein Realm mit der angegebenen `realm`-ID gefunden.

## Beschreibung

Ein Handle ist ein Zeichenfolgenbezeichner, mit dem Sie in nachfolgenden Befehlen des Moduls `script` auf ein Objekt verweisen können, beispielsweise um das Objekt als Argument an [`script.callFunction`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction) zu übergeben.
Sie können es nur in dem Realm verwenden, in dem es erstellt wurde.
Nachdem ein Handle freigegeben wurde, können Sie es nicht mehr in anderen `script`-Befehlen verwenden.
Das Objekt wird dadurch nicht zwangsläufig von der Garbage Collection bereinigt.
Andere Handles oder Referenzen aus den eigenen Skripten der Seite können dafür sorgen, dass das Objekt erhalten bleibt.

Der Browser gibt Handles automatisch frei, wenn ihr Realm zerstört wird (siehe das Ereignis [`script.realmDestroyed`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/realmDestroyed)).
Mit `script.disown` können Sie nicht mehr benötigte Handles freigeben, bevor der Realm zerstört wird.

## Beispiele

### Ein Handle mithilfe einer Kontext-ID freigeben

Angenommen, Sie verfügen über eine [WebDriver-BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).
Die Kontext-ID eines geöffneten Tabs erhalten Sie mit [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).

Nehmen wir an, die Seite des Tabs enthält einen Button und Sie werten den Ausdruck `document.querySelector('button')` mit [`script.evaluate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate) aus.
In diesem Befehl übergeben Sie die Kontext-ID im Parameter [`target`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate#target) und setzen den Parameter [`resultOwnership`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate#resultownership) auf `root`.
Der Ausdruck gibt das Button-Element zurück, einen DOM-Knoten, für den ein Handle erstellt werden kann.
Wenn `resultOwnership` auf `root` gesetzt ist, enthält die Antwort des Browsers ein Handle für dieses Element.

Wenn Sie das Handle für dieses Element nicht mehr benötigen, senden Sie die folgende Nachricht, um es freizugeben.
Verwenden Sie die Kontext-ID des Tabs und das zurückgegebene Handle, ohne zwischen den beiden Befehlen zu einer anderen Seite zu navigieren oder die Seite neu zu laden:

```json
{
  "id": 5,
  "method": "script.disown",
  "params": {
    "handles": ["f1e2d3c4-b5a6-4978-8b9c-0d1e2f3a4b5c"],
    "target": {
      "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f"
    }
  }
}
```

Der Browser antwortet mit einem leeren `result`-Objekt:

```json
{
  "id": 5,
  "type": "success",
  "result": {}
}
```

### Mehrere Handles mithilfe einer Realm-ID freigeben

Angenommen, Sie verwenden dieselbe Verbindung und Sitzung wie im ersten Beispiel und verfügen über zwei Handles für Objekte im selben Realm.
Senden Sie die folgende Nachricht, um beide Handles freizugeben. Verwenden Sie dabei die ID dieses Realms in `target`:

```json
{
  "id": 6,
  "method": "script.disown",
  "params": {
    "handles": [
      "a9b8c7d6-e5f4-4321-9a8b-7c6d5e4f3a2b",
      "b2c3d4e5-f6a7-4b89-9c0d-1e2f3a4b5c6d"
    ],
    "target": {
      "realm": "7c37f4c0-abcd-1234-ef56-789012345678"
    }
  }
}
```

Der Browser antwortet mit einem leeren `result`-Objekt:

```json
{
  "id": 6,
  "type": "success",
  "result": {}
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Befehl [`script.evaluate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate)
- Befehl [`script.callFunction`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction)
- Befehl [`script.getRealms`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/getRealms)
- Ereignis [`script.realmDestroyed`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/realmDestroyed)
