---
title: WebDriver klassische Zeitüberschreitungen
short-title: Timeouts
slug: Web/WebDriver/Reference/Classic/Timeouts
l10n:
  sourceCommit: 225de04b84b717433ffeb3bb0cf5ceddac9653ea
---

Mit einer [WebDriver](/de/docs/Web/WebDriver)-Sitzung sind verschiedene Timeout-Definitionen verbunden, die das Verhalten für [Skriptinjektion](#script), [Dokumentnavigation](#pageload) und [Elementabfrage](#implicit) steuern.

Sie finden das _[timeouts object](#nutzlast)_ in mehreren Kontexten verwendet. Es kann als Konfiguration beim [Erstellen einer neuen Sitzung](/de/docs/Web/WebDriver/Reference/Commands/NewSession) über [capabilities](/de/docs/Web/WebDriver/Reference/Classic/Capabilities) verwendet werden, es wird als Teil der abgestimmten, effektiven Fähigkeiten zurückgegeben, nachdem die Sitzung erstellt wurde, und es wird als Eingabe und Ausgabe für die Befehle [Set Timeouts](/de/docs/Web/WebDriver/Reference/Classic/Commands/SetTimeouts) und [Get Timeouts](/de/docs/Web/WebDriver/Reference/Classic/Commands/GetTimeouts) verwendet.

Die Standardwerte können beim [Erstellen der Sitzung](/de/docs/Web/WebDriver/Reference/Commands/NewSession) überschrieben werden und bleiben wirksam, bis die Sitzung geschlossen wird. Wenn Sie [Set Timeouts](/de/docs/Web/WebDriver/Reference/Classic/Commands/SetTimeouts) während der Lebensdauer der Sitzung aufrufen, werden die Standardwerte überschrieben und gelten für die Dauer der Sitzung oder bis [Set Timeouts](/de/docs/Web/WebDriver/Reference/Classic/Commands/SetTimeouts) erneut aufgerufen wird.

## Nutzlast

Das **timeouts object** ist ein JSON-Objekt, das entweder die Timeout-Werte der aktuellen Sitzung beschreibt oder das als Eingabe beim Konfigurieren der Timeouts verwendet wird:

- `implicit`
  - : Zeit in Millisekunden, um die [Element-Suchstrategie](/de/docs/Web/WebDriver/Reference/WebElement) beim Finden eines Elements zu wiederholen. Dies ist standardmäßig 0, was bedeutet, dass die Strategie nur einmal ausgeführt wird.
- `pageLoad`
  - : Zeit in Millisekunden, um darauf zu warten, dass das Dokument das Laden beendet. Standardmäßig wartet WebDriver fünf Minuten (oder 300.000 ms).
- `script`
  - : Skripte, die mit [Execute Script](/de/docs/Web/WebDriver/Reference/Commands/ExecuteScript) oder [Execute Async Script](/de/docs/Web/WebDriver/Reference/Commands/ExecuteAsyncScript) injiziert werden, laufen, bis sie die Skript-Timeout-Dauer erreichen, die ebenfalls in Millisekunden angegeben ist. Die Skripte werden dann unterbrochen und ein [script timeout error](/de/docs/Web/WebDriver/Reference/Errors/ScriptTimeoutError) wird zurückgegeben. Standardwert sind 30 Sekunden (oder 30.000 ms).

Wenn das Objekt als Eingabe für den Befehl [Set Timeouts](/de/docs/Web/WebDriver/Reference/Classic/Commands/SetTimeouts) oder als Teil der [timeouts capability](/de/docs/Web/WebDriver/Reference/Classic/Capabilities) beim [Erstellen einer neuen Sitzung](/de/docs/Web/WebDriver/Reference/Commands/NewSession) verwendet wird, sind alle Felder optional. Das bedeutet, dass Sie null oder mehr der Timeout-Dauerwerte individuell oder alle auf einmal konfigurieren können.

Wenn es vom Treiber zurückgegeben wird, entweder durch [Get Timeouts](/de/docs/Web/WebDriver/Reference/Classic/Commands/GetTimeouts) oder in den abgestimmten Fähigkeiten aus [Erstellen einer Sitzung](/de/docs/Web/WebDriver/Reference/Commands/NewSession), werden alle Felder vorhanden sein.

## Beispiele

### Einstellen von Zeitüberschreitungen beim Sitzungsstart

Sie können die Standard-Zeitüberschreitungen der Sitzung überschreiben, indem Sie ein [timeouts capabilities object](/de/docs/Web/WebDriver/Reference/Classic/Capabilities) bereitstellen, wenn Sie eine neue WebDriver-Sitzung starten:

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

### Einstellen und Abrufen von Zeitüberschreitungen zur Laufzeit

Zeitüberschreitungen können auch zur Laufzeit mithilfe des Set Timeouts-Befehls eingestellt werden. Diese überschreiben die aktuellen Zeitüberschreitungen der Sitzung und gelten für die gesamte Lebensdauer der Sitzung oder bis ein nachfolgender Aufruf des gleichen Befehls erfolgt:

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
