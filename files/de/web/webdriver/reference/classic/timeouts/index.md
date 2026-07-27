---
title: WebDriver Classic-Timeouts
short-title: Timeouts
slug: Web/WebDriver/Reference/Classic/Timeouts
l10n:
  sourceCommit: fb6aa6056407ba69d96da0fe140a1ae2320f0fb2
---

Mit einer [WebDriver](/de/docs/Web/WebDriver)-Sitzung sind verschiedene Timeout-Definitionen verbunden, die das Verhalten für [Skriptinjektion](#script), [Dokumentnavigation](#pageload) und [Elementabruf](#implicit) steuern.

Das _[Timeouts-Objekt](#payload)_ wird in verschiedenen Kontexten verwendet. Es kann als Konfiguration beim [Erstellen einer neuen Sitzung](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) über [Capabilities](/de/docs/Web/WebDriver/Reference/Capabilities) verwendet werden, es wird als Teil der abgestimmten, effektiven Fähigkeiten zurückgegeben, nachdem die Sitzung erstellt wurde, und es wird als Eingabe und Ausgabe für die Befehle [Set Timeouts](/de/docs/Web/WebDriver/Reference/Classic/Commands/SetTimeouts) und [Get Timeouts](/de/docs/Web/WebDriver/Reference/Classic/Commands/GetTimeouts) verwendet.

Die Standardwerte können beim [Erstellen der Sitzung](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) überschrieben werden und sind wirksam, bis die Sitzung geschlossen wird. Wenn Sie [Set Timeouts](/de/docs/Web/WebDriver/Reference/Classic/Commands/SetTimeouts) während der Lebensdauer der Sitzung aufrufen, werden die Standardwerte überschrieben und gelten für die Lebensdauer der Sitzung oder bis [Set Timeouts](/de/docs/Web/WebDriver/Reference/Classic/Commands/SetTimeouts) erneut aufgerufen wird.

## Payload

Das **Timeouts-Objekt** ist ein JSON-Objekt, das entweder die Timeout-Werte der aktuellen Sitzung beschreibt oder das als Eingabe bei der Konfiguration der Timeouts verwendet wird:

- `implicit`
  - : Zeit in Millisekunden, um die [Element-Lokalisierungsstrategie](/de/docs/Web/WebDriver/Reference/WebElement) bei der Suche nach einem Element zu wiederholen. Der Standardwert ist 0, was bedeutet, dass die Strategie nur einmal ausgeführt wird.
- `pageLoad`
  - : Zeit in Millisekunden, die auf das vollständige Laden des Dokuments gewartet wird. Standardmäßig wartet WebDriver fünf Minuten (oder 300.000 ms).
- `script`
  - : Skripte, die mit [Execute Script](/de/docs/Web/WebDriver/Reference/Commands/ExecuteScript) oder [Execute Async Script](/de/docs/Web/WebDriver/Reference/Commands/ExecuteAsyncScript) injiziert werden, laufen bis sie die Skript-Timeout-Dauer erreichen, die ebenfalls in Millisekunden angegeben ist. Die Skripte werden dann unterbrochen, und ein [Script-Timeout-Fehler](/de/docs/Web/WebDriver/Reference/Errors/ScriptTimeout) wird zurückgegeben. Der Standardwert ist 30 Sekunden (oder 30.000 ms).

Wenn das Objekt als Eingabe für den Befehl [Set Timeouts](/de/docs/Web/WebDriver/Reference/Classic/Commands/SetTimeouts) oder als Teil der [Timeouts-Fähigkeit](/de/docs/Web/WebDriver/Reference/Capabilities) beim [Erstellen einer neuen Sitzung](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) verwendet wird, sind alle Felder optional. Das bedeutet, dass Sie null oder mehr der Werte für die Timeout-Dauer einzeln oder alle auf einmal konfigurieren können.

Wenn es vom Treiber zurückgegeben wird, entweder durch [Get Timeouts](/de/docs/Web/WebDriver/Reference/Classic/Commands/GetTimeouts) oder in den abgestimmten Fähigkeiten von [einer erstellten Sitzung](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession), sind alle Felder vorhanden.

## Beispiele

### Timeouts bei Sitzungserstellung setzen

Sie können die Standard-Session-Timeouts überschreiben, indem Sie ein [Timeouts-Capabilities-Objekt](/de/docs/Web/WebDriver/Reference/Capabilities) bereitstellen, wenn Sie eine neue WebDriver-Sitzung starten:

```python
import urllib

from selenium import webdriver

def inline(doc):
    return "data:text/html;charset=utf-8,{}".format(urllib.quote(doc))

session = webdriver.Firefox(capabilities={"timeouts": {"implicit": 4500}})
session.get(inline("""
    <h1>Example</h1>

    <script>
      // Inserts <p> below <h1> after 2.5 seconds:
      setTimeout(() => {
        const delayedElement = document.createElement("p");
        const h1 = document.querySelector("h1");
        document.body.insertAfter(delayedElement, h1);
      }, 2500);
    </script>
    """)

# This will cause the driver to wait 4.5 seconds
# for #foo to appear in the DOM:
delayed_element = session.find_element_by_tag_name("p")
```

### Setzen und Abrufen von Timeouts zur Laufzeit

Timeouts können auch zur Laufzeit mithilfe des Set Timeouts-Befehls gesetzt werden. Diese überschreiben die aktuellen Timeouts der Sitzung und sind für die gesamte Lebensdauer der Sitzung wirksam oder bis ein nachfolgender Aufruf desselben Befehls erfolgt:

```python
from selenium import webdriver

session = webdriver.Firefox()

session.set_timeouts({"implicit": 4.5})
print(session.get_timeouts)
```

Die Ausgabe erfolgt in Sekunden, da dies die idiomatische Zeiteinheit in Python ist:

```json
{ "implicit": 4.5, "script": 300, "pageLoad": 30000 }
```
