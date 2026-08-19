---
title: "`browsingContext.captureScreenshot` Befehl"
short-title: captureScreenshot
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/captureScreenshot
l10n:
  sourceCommit: e5999f9b30c19ca727cbf28ec254f2111f7d36c8
---

Der `browsingContext.captureScreenshot` [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) des [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) Moduls erfasst ein Bild des angegebenen [Kontexts](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) und gibt es als {{Glossary("Base64", "Base64")}}-codierten String zurück.

## Syntax

```json-nolint
/* With required parameters */
{
  "method": "browsingContext.captureScreenshot",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f"
  }
}

/* With required and optional parameters */
{
  "method": "browsingContext.captureScreenshot",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "origin": "document",
    "format": {
      "type": "image/jpeg",
      "quality": 0.8
    },
    "clip": {
      "type": "box",
      "x": 10,
      "y": 10,
      "width": 200,
      "height": 100
    }
  }
}
```

### Parameter

Das `params` Feld enthält:

- `clip` {{optional_inline}}
  - : Ein Objekt, das die Erfassung auf einen rechteckigen Bereich oder ein einzelnes Element beschränkt.
    Wenn `clip` nicht angegeben ist, wird der gesamte `origin` Bereich erfasst.
    Es enthält die folgenden Felder:

    - `type`
      - : Ein String, der angibt, ob der Screenshot-Bereich eine rechteckige Region oder ein spezielles Element ist.
        Es kann einen der folgenden Werte annehmen:

        - `"box"`
          - : Erfasst eine rechteckige Region.
            Der Bereich wird mithilfe von Koordinaten angegeben, die Offsets von der oberen linken Ecke von `origin` sind.
            Das `clip` Objekt hat die folgenden Felder für `type: "box"`:

            - `height`
              - : Eine Zahl, die die Höhe des Rechtecks angibt.
            - `width`
              - : Eine Zahl, die die Breite des Rechtecks angibt.
            - `x`
              - : Eine Zahl, die den horizontalen Offset des Rechtecks von der oberen linken Ecke von `origin` angibt.
            - `y`
              - : Eine Zahl, die den vertikalen Offset des Rechtecks von der oberen linken Ecke von `origin` angibt.
        - `"element"`
          - : Erfasst die Begrenzungsbox eines bestimmten Elements.
            Das `clip` Objekt hat auch das folgende Feld für `type: "element"`:

            - `element`
              - : Ein Objekt, das die ID enthält, die das zu erfassende DOM-Element eindeutig identifiziert.
                Die ID wird vom Browser zurückgegeben, wenn Sie das Element mit [`browsingContext.locateNodes`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/locateNodes), [`script.evaluate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate) oder [`script.callFunction`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction) lokalisieren.
- `context`
  - : Ein String, der die ID des Kontexts enthält, der als Screenshot erfasst werden soll.
    Kontext-IDs werden von Befehlen wie [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) zurückgegeben.
- `format` {{optional_inline}}
  - : Ein Objekt, das die zu verwendende Bildkodierung angibt. Wenn nicht angegeben, wird der Screenshot als `"image/png"` kodiert.
    Es enthält die folgenden Felder:
    - `quality` {{optional_inline}}
      - : Eine Zahl zwischen `0.0` und `1.0`, die die Kompressionsqualität für {{Glossary("Lossy_compression", "verlustbehaftete Formate")}} wie `"image/jpeg"` angibt.
        Wenn nicht angegeben, ist die verwendete Kompressionsstufe browserabhängig.
    - `type`
      - : Ein String, der den Bild-{{Glossary("MIME_type", "MIME-Typ")}} enthält, in dem der Screenshot kodiert werden soll, z.B. `"image/png"` oder `"image/jpeg"`.
- `origin` {{optional_inline}}
  - : Ein String, der den Bereich für den Screenshot angibt.
    Es kann einen der folgenden Werte annehmen:
    - `"document"`: Der Bereich erstreckt sich über das gesamte scrollbare Dokument, einschließlich der Inhalte außerhalb des {{Glossary("Visual_Viewport", "sichtbaren Viewports")}}.
    - `"viewport"`: Der Bereich ist der sichtbare Viewport. Dies ist der Standard.

### Rückgabewert

Das `result` Objekt in der Antwort enthält die folgenden Felder:

- `data`
  - : Ein String, der die Base64-codierten Bilddaten enthält.

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Ein erforderlicher Parameter fehlt oder hat einen ungültigen Typ.

- `no such element`
  - : Das DOM-Element, auf das durch `clip.element` verwiesen wird, kann nicht aufgelöst werden oder gehört nicht zum Dokument des erfassten Kontexts.

- `no such frame`
  - : Kein Kontext mit der angegebenen Kontext-ID gefunden.

- `unable to capture screen`
  - : Der angeforderte `clip` Bereich hat nach dem Schnitt mit dem `origin` Bereich null Breite oder Höhe.

- `unsupported operation`
  - : Der Browser kann keinen Screenshot des Kontexts erfassen.

## Beispiele

### Erfassung eines Bildes des sichtbaren Viewports

Mit einer [WebDriver BiDi Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und einer [aktiven Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) senden Sie die folgende Nachricht, um den aktuellen Viewport als PNG zu erfassen:

```json
{
  "id": 1,
  "method": "browsingContext.captureScreenshot",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f"
  }
}
```

Der Browser antwortet mit den Base64-codierten Bilddaten wie folgt:

```json-nolint
{
  "id": 1,
  "type": "success",
  "result": {
    "data": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASU..."
  }
}
```

### Erfassung eines Bildes des gesamten Dokuments als JPEG

Mit derselben Verbindung und Sitzung senden Sie die folgende Nachricht, um die vollständige scrollbare Seite als komprimiertes JPEG zu erfassen, einschließlich der Inhalte außerhalb des Viewports:

```json
{
  "id": 2,
  "method": "browsingContext.captureScreenshot",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "origin": "document",
    "format": {
      "type": "image/jpeg",
      "quality": 0.8
    }
  }
}
```

Der Browser antwortet mit den Base64-codierten JPEG-Daten wie folgt:

```json-nolint
{
  "id": 2,
  "type": "success",
  "result": {
    "data": "/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMDAwMDAwMDAwMEBAMEBQYFBQUFBgcGBgYGBwgICQkJCQgIC..."
  }
}
```

### Erfassung eines Bildes eines bestimmten Elements

Mit derselben Verbindung und Sitzung, unterstellen wir, dass [`browsingContext.locateNodes`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/locateNodes) einen Knoten mit einer geteilten ID zurückgibt.

Mit `origin` auf `"document"` gesetzt, senden Sie die folgende Nachricht, um nur die Begrenzungsbox dieses Elements zu erfassen, auch wenn es derzeit nicht im Sichtbereich ist:

```json
{
  "id": 3,
  "method": "browsingContext.captureScreenshot",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "origin": "document",
    "clip": {
      "type": "element",
      "element": {
        "sharedId": "f8f6a1f2-3d8a-4b8e-9f1a-6f6a2f6a2f6a"
      }
    }
  }
}
```

Der Browser antwortet mit den Base64-codierten Bilddaten wie folgt:

```json-nolint
{
  "id": 3,
  "type": "success",
  "result": {
    "data": "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAEUlEQVR42mNk+M8ABYxAxAgAAcM..."
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) Befehl
- [`browsingContext.locateNodes`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/locateNodes) Befehl
- [`browsingContext.print`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/print) Befehl
