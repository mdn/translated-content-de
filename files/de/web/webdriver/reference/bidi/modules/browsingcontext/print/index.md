---
title: "`browsingContext.print` Kommando"
short-title: print
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/print
l10n:
  sourceCommit: e5999f9b30c19ca727cbf28ec254f2111f7d36c8
---

Das `browsingContext.print`-[Kommando](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) des [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) Moduls erstellt eine paginierte Darstellung eines Dokuments in einem [Kontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) als PDF und gibt es als {{Glossary("Base64", "Base64")}}-kodierte Zeichenkette zurück.

## Syntax

```json-nolint
/* With required parameters */
{
  "method": "browsingContext.print",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f"
  }
}

/* With required and optional parameters */
{
  "method": "browsingContext.print",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "background": true,
    "margin": {
      "top": 2.0,
      "bottom": 2.0,
      "left": 2.0,
      "right": 2.0
    },
    "orientation": "landscape",
    "page": {
      "width": 21.0,
      "height": 29.7
    },
    "pageRanges": ["1-3"],
    "scale": 1.5,
    "shrinkToFit": false
  }
}
```

### Parameter

Das `params` Feld enthält:

- `background` {{optional_inline}}
  - : Ein Boolean, der angibt, ob Hintergrundfarben und -bilder in das resultierende PDF aufgenommen werden.
    - `false`: Hintergrundfarben und -bilder werden aus dem resultierenden PDF ausgeschlossen. Dies ist die Standardeinstellung.
    - `true`: Hintergrundfarben und -bilder werden in das resultierende PDF aufgenommen.
- `context`
  - : Eine Zeichenkette, die die ID des Kontexts enthält, der das zu druckende Dokument hat.
    Kontext-IDs werden von Befehlen wie [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) zurückgegeben.
- `margin` {{optional_inline}}
  - : Ein Objekt, das die Seitenränder in Zentimetern angibt. Es kann die folgenden Felder enthalten:
    - `bottom` {{optional_inline}}
      - : Eine nicht-negative Zahl, die den unteren Rand spezifiziert. Der Standard ist `1.0`.
    - `left` {{optional_inline}}
      - : Eine nicht-negative Zahl, die den linken Rand spezifiziert. Der Standard ist `1.0`.
    - `right` {{optional_inline}}
      - : Eine nicht-negative Zahl, die den rechten Rand spezifiziert. Der Standard ist `1.0`.
    - `top` {{optional_inline}}
      - : Eine nicht-negative Zahl, die den oberen Rand spezifiziert. Der Standard ist `1.0`.
- `orientation` {{optional_inline}}
  - : Eine Zeichenkette, die die Seitenausrichtung spezifiziert.
    Sie kann einen der folgenden Werte annehmen:
    - `"landscape"`: Die Seite wird im Querformat gedruckt.
    - `"portrait"`: Die Seite wird im Hochformat gedruckt. Dies ist die Standardeinstellung.
- `page` {{optional_inline}}
  - : Ein Objekt, das die Seitengröße in Zentimetern angibt.
    Es kann die folgenden Felder enthalten:
    - `height` {{optional_inline}}
      - : Eine Zahl, die die Seitenhöhe angibt.
        Der Wert muss größer oder gleich `0.0352` (1 Punkt) sein.
        Der Standard ist `27.94`.
    - `width` {{optional_inline}}
      - : Eine Zahl, die die Seitenbreite angibt.
        Der Wert muss größer oder gleich `0.0352` (1 Punkt) sein.
        Der Standard ist `21.59`.
- `pageRanges` {{optional_inline}}
  - : Ein Array von Zahlen und Zeichenketten, die jeweils angeben, welche Seiten im resultierenden PDF enthalten sein sollen.
    Jedes Element im Array ist eines der folgenden:
    - Eine Zahl, die eine einzelne Seite auswählt, wobei die erste Seite als Seite 1 zählt.
    - Eine Zeichenkette, die einen Bereich auswählt, wie `"2-4"`.
      Jede Grenze im Bereich kann weggelassen werden.
      Wenn die untere Grenze weggelassen wird, wie bei `"-3"`, bedeutet das Seiten 1 bis 3.
      Wenn die obere Grenze weggelassen wird, wie bei `"5-"`, bedeutet das Seite 5 bis zur letzten Seite.

    Wenn `pageRanges` nicht angegeben ist, werden alle Seiten im resultierenden PDF eingeschlossen.
- `scale` {{optional_inline}}
  - : Eine Zahl, die den Zoomfaktor angibt, der auf den Seiteninhalt angewendet werden soll.
    Der Wert muss zwischen `0.1` und `2.0` liegen.
    Der Standard ist `1.0`.
- `shrinkToFit` {{optional_inline}}
  - : Ein Boolean, der angibt, ob der Seiteninhalt verkleinert wird, um in die Seitenbreite zu passen.
    - `true`: Der Inhalt wird verkleinert, um der Seitenbreite zu entsprechen, und überschreibt jede durch das CSS des Dokuments spezifizierte Seitenbreite. Dies ist die Standardeinstellung.
    - `false`: Der Inhalt wird nicht verkleinert; jede durch das eigene CSS des Dokuments spezifizierte Seitenbreite wird stattdessen verwendet.

### Rückgabewert

Das `result`-Objekt in der Antwort enthält die folgenden Felder:

- `data`
  - : Eine Zeichenkette, die die Base64-kodierten PDF-Daten enthält.

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Ausgelöst in jedem der folgenden Fälle:
    - Ein erforderlicher Parameter fehlt oder hat einen ungültigen Typ.
    - Ein Array-Element in `pageRanges` ist keine gültige Seitenzahl oder kein gültiger Bereich.
    - Ein Bereich in `pageRanges` hat eine untere Grenze, die größer ist als die obere Grenze.
- `no such frame`
  - : Kein Kontext mit der angegebenen `context`-ID wird gefunden.
- `unsupported operation`
  - : Der Browser kann keine paginierte Darstellung des Kontexts erzeugen.

## Beschreibung

Die Parameter `page`, `margin`, `scale`, und `shrinkToFit` steuern, wie der Inhalt des Dokuments auf jeder gedruckten Seite angeordnet wird.

Der Parameter `orientation` wird zusätzlich dazu angewendet.
Das Setzen von `orientation` auf `"landscape"` tauscht die Dimensionen der `page` anstatt die ganze Seite zu drehen.
Im Querformat verwendet die Breite der gedruckten Seite den `height`-Wert der Seite, und ihre Höhe verwendet den `width`-Wert.

Zum Vergleich, die Standardgröße der `page` ist `21.59` mal `27.94` Zentimeter (US Letter-Größe, 8.5 mal 11 Zoll).
Im Hochformat wird dies als 21.59 cm Breite und 27.94 cm Höhe gedruckt.
Im Querformat wird es als 27.94 cm Breite und 21.59 cm Höhe gedruckt.

## Beispiele

### Drucken mit Standardeinstellungen

Mit einer [WebDriver BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und einer [aktiven Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) senden Sie die folgende Nachricht, um ein Dokument eines Kontexts mit den Standardeinstellungen jedes Parameters zu drucken: ein 21.59 mal 27.94 Zentimeter großes (US Letter) Blatt im Hochformat, ohne Hintergrundgrafiken, 1 cm Ränder auf allen Seiten, ein Maßstab von 1.0, und Inhalte, die verkleinert werden, um die Seitenbreite zu füllen:

```json
{
  "id": 1,
  "method": "browsingContext.print",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f"
  }
}
```

Der Browser antwortet mit den Base64-kodierten PDF-Daten:

```json-nolint
{
  "id": 1,
  "type": "success",
  "result": {
    "data": "JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBvYmoKPDwvTGVuZ3RoIDMgMCBSL0ZpbHRlci..."
  }
}
```

### Drucken bestimmter Seiten und Bereiche im Querformat

Unter Verwendung derselben Verbindung und Sitzung wie im ersten Beispiel, senden Sie die folgende Nachricht, um Seite 1, die Seiten 3 bis 5 und Seite 8 zu drucken, im Querformat, mit eingeschlossenen Hintergrundgrafiken:

```json
{
  "id": 2,
  "method": "browsingContext.print",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "orientation": "landscape",
    "background": true,
    "pageRanges": ["1", "3-5", "8"]
  }
}
```

Der Browser antwortet mit den Base64-kodierten PDF-Daten:

```json-nolint
{
  "id": 2,
  "type": "success",
  "result": {
    "data": "JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBvYmoKPDwvTGVuZ3RoIDQgMCBSL0ZpbHRlci..."
  }
}
```

### Drucken auf A4-Papier mit benutzerdefinierten Rändern

Unter Verwendung derselben Verbindung und Sitzung wie im ersten Beispiel, senden Sie die folgende Nachricht, um auf A4-Papier (21.0 cm x 29.7 cm) mit 2 cm Rändern auf allen Seiten zu drucken:

```json
{
  "id": 3,
  "method": "browsingContext.print",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "page": {
      "width": 21.0,
      "height": 29.7
    },
    "margin": {
      "top": 2.0,
      "bottom": 2.0,
      "left": 2.0,
      "right": 2.0
    }
  }
}
```

Der Browser antwortet mit den Base64-kodierten PDF-Daten:

```json-nolint
{
  "id": 3,
  "type": "success",
  "result": {
    "data": "JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBvYmoKPDwvTGVuZ3RoIDUgMCBSL0ZpbHRlci..."
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`browsingContext.captureScreenshot`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/captureScreenshot) Kommando
- [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) Kommando
