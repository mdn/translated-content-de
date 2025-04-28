---
title: WebDriver-Timeouts
short-title: Timeouts
slug: Web/WebDriver/Reference/Timeouts
l10n:
  sourceCommit: c6cab7f1aa7dc9f3495486a5b46020db320101cf
---

Mit einer [WebDriver](/de/docs/Web/WebDriver)-Sitzung sind verschiedene Timeout-Definitionen verbunden, die das Verhalten für [Skriptinjektion](#script), [Dokumentennavigation](#pageload) und [Elementretrieval](#implicit) steuern.

Sie finden das _[Timeouts-Objekt](#payload)_ in einigen verschiedenen Kontexten verwendet. Es kann als Konfiguration bei der [Erstellung einer neuen Sitzung](/de/docs/Web/WebDriver/Reference/Commands/NewSession) über [Fähigkeiten](/de/docs/Web/WebDriver/Reference/Capabilities) verwendet werden, es wird als Teil der übereinstimmenden, effektiven Fähigkeiten nach der Sitzungserstellung zurückgegeben und wird als Eingabe und Ausgabe für die Befehle [Set Timeouts](/de/docs/Web/WebDriver/Reference/Commands/SetTimeouts) und [Get Timeouts](/de/docs/Web/WebDriver/Reference/Commands/GetTimeouts) verwendet.

Die Standardwerte können bei der [Sitzungserstellung](/de/docs/Web/WebDriver/Reference/Commands/NewSession) überschrieben werden und sind wirksam, bis die Sitzung geschlossen wird. Wenn Sie [Set Timeouts](/de/docs/Web/WebDriver/Reference/Commands/SetTimeouts) während der Laufzeit der Sitzung aufrufen, werden die Standardwerte überschrieben und bleiben für die Dauer der Sitzung wirksam oder bis [Set Timeouts](/de/docs/Web/WebDriver/Reference/Commands/SetTimeouts) erneut aufgerufen wird.

## Payload

Das **Timeouts-Objekt** ist ein JSON-Objekt, das entweder die Timeout-Werte der aktuellen Sitzung beschreibt oder als Eingabe beim Konfigurieren der Timeouts verwendet wird:

- `implicit`
  - : Zeit in Millisekunden, um die [Element-Lokalisierungsstrategie](/de/docs/Web/WebDriver/Reference/WebElement) beim Auffinden eines Elements zu wiederholen. Standardmäßig ist dies 0, was bedeutet, dass die Strategie nur einmal ausgeführt wird.
- `pageLoad`
  - : Zeit in Millisekunden, um auf das vollständige Laden des Dokuments zu warten. Standardmäßig wartet WebDriver fünf Minuten (oder 300.000 ms).
- `script`
  - : Skripte, die mit [Execute Script](/de/docs/Web/WebDriver/Reference/Commands/ExecuteScript) oder [Execute Async Script](/de/docs/Web/WebDriver/Reference/Commands/ExecuteAsyncScript) injiziert werden, laufen bis zur Erreichung der Skript-Timeout-Dauer, die ebenfalls in Millisekunden angegeben wird. Die Skripte werden dann unterbrochen und ein [Skript-Timeout-Fehler](/de/docs/Web/WebDriver/Reference/Errors/ScriptTimeoutError) wird zurückgegeben. Standardmäßig 30 Sekunden (oder 30.000 ms).

Wenn das Objekt als Eingabe für den Befehl [Set Timeouts](/de/docs/Web/WebDriver/Reference/Commands/SetTimeouts) oder als Teil der [Timeouts-Fähigkeit](/de/docs/Web/WebDriver/Reference/Capabilities) bei der [Erstellung einer neuen Sitzung](/de/docs/Web/WebDriver/Reference/Commands/NewSession) verwendet wird, sind alle Felder optional. Das bedeutet, dass Sie null oder mehr der Timeout-Dauerwerte individuell oder alle auf einmal konfigurieren können.

Wenn es vom Treiber zurückgegeben wird, entweder durch [Get Timeouts](/de/docs/Web/WebDriver/Reference/Commands/GetTimeouts) oder in den übereinstimmenden Fähigkeiten nach [Erstellung einer Sitzung](/de/docs/Web/WebDriver/Reference/Commands/NewSession), werden alle Felder vorhanden sein.

## Beispiele

### Timeouts bei Sitzungsstart setzen

Sie können die Standard-Timeouts der Sitzung überschreiben, indem Sie ein [Timeouts-Fähigkeiten-Objekt](/de/docs/Web/WebDriver/Reference/Capabilities) bereitstellen, wenn Sie eine neue WebDriver-Sitzung starten:

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

### Timeouts zur Laufzeit setzen und abrufen

Timeouts können auch zur Laufzeit mit dem Set Timeouts-Befehl gesetzt werden. Diese überschreiben die aktuellen Sitzung-Timeouts und sind für die gesamte Dauer der Sitzung wirksam, oder bis ein späterer Aufruf an denselben Befehl erfolgt:

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
