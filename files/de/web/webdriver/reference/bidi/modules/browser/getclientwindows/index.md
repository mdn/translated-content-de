---
title: browser.getClientWindows-Befehl
short-title: browser.getClientWindows
slug: Web/WebDriver/Reference/BiDi/Modules/browser/getClientWindows
l10n:
  sourceCommit: c09036bf0ea2f0b6e322dfdeee64b26ab53e2797
---

Der `browser.getClientWindows` [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) des [`browser`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser)-Moduls gibt eine Liste von [Client-Fenstern](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#client_windows) zurück.

## Syntax

```json-nolint
{
  "method": "browser.getClientWindows",
  "params": {}
}
```

### Parameter

Keine. Sie müssen jedoch das `params`-Feld einfügen und auf ein leeres Objekt (`{}`) setzen.

### Rückgabewert

Das folgende Feld im `result`-Objekt der Antwort beschreibt die Client-Fenster im Browser:

- `clientWindows`
  - : Ein Array von Objekten, die jeweils ein Client-Fenster darstellen.
    Das Array kann leer sein, wenn der Browser keine offenen Fenster hat.
    Jedes Objekt enthält die folgenden Felder:
    - `active`
      - : Ein boolescher Wert, der angibt, ob das Client-Fenster Tastatureingaben vom Betriebssystem empfangen kann.
        Dies kann bedeuten, dass ein Tab innerhalb des Fensters den Systemfokus hat oder die Benutzeroberfläche des Browsers selbst fokussiert ist.
    - `clientWindow`
      - : Ein String, der das Client-Fenster eindeutig identifiziert.
    - `height`
      - : Eine Zahl, die die Höhe des Fensters in {{Glossary("CSS_pixel", "CSS-Pixel")}} angibt.
    - `state`
      - : Ein String, der den aktuellen Status des Fensters angibt.
        - `"fullscreen"`
          - : Gibt an, dass das Fenster im Vollbildmodus ist.
        - `"maximized"`
          - : Gibt an, dass das Fenster maximiert ist, um den gesamten Bildschirmbereich auszufüllen.
        - `"minimized"`
          - : Gibt an, dass das Fenster minimiert ist (aus der Ansicht ausgeblendet).
        - `"normal"`
          - : Gibt an, dass das Fenster in seinem normalen (wiederhergestellten) Zustand ist.
    - `width`
      - : Eine Zahl, die die Breite des Fensters in {{Glossary("CSS_pixel", "CSS-Pixel")}} angibt.
    - `x`
      - : Eine Zahl, die die x-Koordinate des Fensters in {{Glossary("CSS_pixel", "CSS-Pixel")}} angibt, gemessen vom linken Rand des Bildschirmbereichs.
    - `y`
      - : Eine Zahl, die die y-Koordinate des Fensters in {{Glossary("CSS_pixel", "CSS-Pixel")}} angibt, gemessen vom oberen Rand des Bildschirmbereichs.

## Beispiele

### Abrufen aller Client-Fenster

Mit einer [WebDriver BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und einer [aktiven Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) senden Sie die folgende Nachricht, um alle Client-Fenster abzurufen:

```json
{
  "id": 1,
  "method": "browser.getClientWindows",
  "params": {}
}
```

Der Browser antwortet erfolgreich mit der Liste der Client-Fenster wie folgt:

```json
{
  "id": 1,
  "type": "success",
  "result": {
    "clientWindows": [
      {
        "active": true,
        "clientWindow": "09a7bf22-c52d-4011-88ad-507a7e0012c7",
        "height": 970,
        "state": "normal",
        "width": 1280,
        "x": 4,
        "y": 38
      }
    ]
  }
}
```

### Abrufen von Client-Fenstern, wenn mehrere Browserfenster geöffnet sind

Wenn mehrere Browserfenster geöffnet sind, antwortet der Browser mit einem Eintrag pro Fenster wie folgt:

```json
{
  "id": 2,
  "type": "success",
  "result": {
    "clientWindows": [
      {
        "active": true,
        "clientWindow": "09a7bf22-c52d-4011-88ad-507a7e0012c7",
        "height": 800,
        "state": "normal",
        "width": 1280,
        "x": 0,
        "y": 26
      },
      {
        "active": false,
        "clientWindow": "b3f8a1e5-d4c2-4e9f-8b3a-1f2e3d4c5b6a",
        "height": 0,
        "state": "minimized",
        "width": 0,
        "x": 0,
        "y": 0
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

- [`session.new`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new)-Befehl
- [`browser.setClientWindowState`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/setClientWindowState)-Befehl
